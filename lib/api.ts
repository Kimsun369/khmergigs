/**
 * lib/api.ts – KhmerGigs API layer (zero-n8n edition)
 *
 * Normal use:
 *  • getAllJobs()          – fetches JOBS_URL once, cached in memory for the session
 *  • getRecommendations() – fully client-side scoring, no network call
 *  • getJobDetails()      – looks up in the in-memory list, no network call
 *  • saveUserPreferences()– the ONE remaining n8n call; only when prefs change
 *
 * Legacy-migration helpers (called at most once per user, never again):
 *  • getUserProfile()  – kept for first-time migration of existing users
 *  • getSavedJobs()    – kept for first-time migration of existing users
 */

import type { FieldKey, Job, JobType, LocationKey, Preferences, RecommendedJob, UserProfile } from "./types"
import type { TelegramUser } from "./telegram"

// ─── Public jobs feed ─────────────────────────────────────────────────────────

const JOBS_URL =
  process.env.NEXT_PUBLIC_JOBS_URL ??
  "https://i4cle9opyc56xch6.public.blob.vercel-storage.com/jobs.json"

// ─── n8n / Worker endpoints (kept only for the two remaining calls) ───────────

const WORKER_BASE = "https://khmergigs-api.misty-river-049a.workers.dev"
/** Kept exported in case other files import it. */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://khmergigs.app.n8n.cloud"
const SAVE_PREFS_WORKER_URL = `${WORKER_BASE}/preferences/save`
const PROFILE_WORKER_URL = `${WORKER_BASE}/profile`
const SAVED_WORKER_URL = `${WORKER_BASE}/saved`

// ─── Normalization lookup tables ──────────────────────────────────────────────

const fieldLabels: Record<FieldKey, string> = {
  hotel: "Hotel & Hospitality",
  tech: "Tech & IT",
  marketing: "Marketing",
  health: "Health",
  finance: "Finance",
  education: "Education",
  construction: "Construction",
  logistics: "Logistics",
  any: "General",
}

const typeLabels: Record<JobType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  internship: "Internship",
  freelance: "Freelance",
}

const locationLabels: Record<LocationKey, string> = {
  "phnom-penh": "Phnom Penh",
  "siem-reap": "Siem Reap",
  provinces: "Provinces",
  remote: "Remote",
}

// ─── Normalization helpers ─────────────────────────────────────────────────────

function normalizeType(raw: string): JobType {
  const s = raw.toLowerCase()
  if (s.includes("full")) return "full-time"
  if (s.includes("part")) return "part-time"
  if (s.includes("intern")) return "internship"
  if (s.includes("freelance") || s.includes("contract")) return "freelance"
  return "full-time"
}

function normalizeField(raw: string): FieldKey {
  const s = raw.toLowerCase()
  // NOTE: "it" is a very short token that appears inside "hospitality".
  // We check hospitality/hotel/tourism first to avoid false matches.
  if (/hotel|hospitality|tourism/.test(s)) return "hotel"
  // Use word-boundary-aware check for "it" and "tech" to avoid matching
  // "it" inside words like "marketing", "hospitality", etc.
  if (/\bit\b|tech|software|developer/.test(s)) return "tech"
  if (/market/.test(s)) return "marketing"
  if (/health|medical|nurse/.test(s)) return "health"
  if (/finance|account|bank/.test(s)) return "finance"
  if (/education|teach/.test(s)) return "education"
  if (/construct|engineer/.test(s)) return "construction"
  if (/logistic|supply|driver|warehouse/.test(s)) return "logistics"
  return "any"
}

function normalizeLocation(raw: string): LocationKey {
  const s = raw.toLowerCase()
  if (s.includes("phnom penh")) return "phnom-penh"
  if (s.includes("siem reap")) return "siem-reap"
  if (/remote|online|anywhere/.test(s)) return "remote"
  if (s.trim().length > 0) return "provinces"
  return "provinces"
}

/** Human-readable "X days ago" derived from an ISO date string. */
function postedAgo(raw: string): string {
  if (!raw) return ""
  try {
    const ms = Date.now() - new Date(raw).getTime()
    if (isNaN(ms)) return raw
    const days = Math.floor(ms / 86_400_000)
    if (days === 0) return "Today"
    if (days === 1) return "Yesterday"
    if (days < 7) return `${days} days ago`
    const weeks = Math.floor(days / 7)
    if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`
    const months = Math.floor(days / 30)
    return `${months} month${months > 1 ? "s" : ""} ago`
  } catch {
    return raw
  }
}

/** Maps one raw jobs.json row to the app's Job type. Returns null if id or title is missing. */
function mapRawJob(raw: Record<string, string>): Job | null {
  const id = raw["id"]?.trim()
  const title = raw["title"]?.trim()
  if (!id || !title) return null

  const company = raw["company"]?.trim()
  const companyDisplay =
    !company || company === "N/A" ? "Company not listed" : company

  const rawLocation = raw["location"] ?? ""
  const locationKey = normalizeLocation(rawLocation)
  // Use the raw text if it's more specific than the generic label.
  const locationLabel =
    rawLocation.trim().length > 0 ? rawLocation.trim() : locationLabels[locationKey]

  const jobTypeRaw = raw["jobType"] ?? ""
  const typeKey = normalizeType(jobTypeRaw)

  const sectorRaw = raw["sector"] ?? ""
  const fieldKey = normalizeField(sectorRaw)

  const rawPostedAt = raw["postedAt"] ?? ""

  return {
    id,
    title,
    company: companyDisplay,
    locationKey,
    locationLabel,
    type: typeKey,
    typeLabel: typeLabels[typeKey],
    fieldKey,
    fieldLabel: fieldLabels[fieldKey],
    salary: raw["salary"] ?? "",
    applyUrl: raw["applyUrl"] ?? "",
    postedAgo: postedAgo(rawPostedAt),
    postedAt: rawPostedAt,
    seniority: raw["seniority"] || undefined,
    skills: raw["skills"] || undefined,
    language: raw["language"] || undefined,
    source: raw["source"] || undefined,
    closingDate: raw["closingDate"] || undefined,
  }
}

// ─── In-memory cache ──────────────────────────────────────────────────────────

let _cachedJobs: Job[] | null = null
let _fetchPromise: Promise<Job[]> | null = null

/**
 * Fetches and returns all jobs from JOBS_URL.
 * The result is cached in memory for the lifetime of the session;
 * repeated calls are free.
 */
export async function getAllJobs(): Promise<Job[]> {
  if (_cachedJobs !== null) return _cachedJobs

  // Deduplicate concurrent calls: reuse the same promise if one is in-flight.
  if (_fetchPromise) return _fetchPromise

  _fetchPromise = (async () => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 10_000)
    try {
      // Plain GET with no custom headers to avoid a CORS preflight.
      const res = await fetch(JOBS_URL, { signal: controller.signal })
      if (!res.ok) throw new Error(`jobs.json fetch failed: ${res.status}`)
      const data = (await res.json()) as { jobs: Record<string, string>[] }
      const jobs = (data.jobs ?? []).reduce<Job[]>((acc, raw) => {
        const j = mapRawJob(raw)
        if (j) acc.push(j)
        return acc
      }, [])
      _cachedJobs = jobs
      return jobs
    } finally {
      clearTimeout(timer)
      _fetchPromise = null
    }
  })()

  return _fetchPromise
}

// ─── Client-side scoring / recommendations ────────────────────────────────────

/** Returns true if a closingDate string is in the past. */
function isClosed(closingDate?: string): boolean {
  if (!closingDate) return false
  try {
    const d = new Date(closingDate)
    if (isNaN(d.getTime())) return false
    return d.getTime() < Date.now()
  } catch {
    return false
  }
}

/**
 * Client-side recommendation engine.
 * Scores all jobs, filters expired ones, sorts by score then recency, returns top 10.
 */
export async function getRecommendations(
  prefs: Preferences,
  // kept for API compatibility with existing call-sites
  _telegramUserId?: number,
): Promise<RecommendedJob[]> {
  const jobs = await getAllJobs()

  type Scored = { job: Job; score: number }
  const scored: Scored[] = []

  for (const job of jobs) {
    if (isClosed(job.closingDate)) continue

    let score = 1 // base

    if (prefs.jobType && job.type === prefs.jobType) score += 3
    if (prefs.field && (job.fieldKey === prefs.field || job.fieldKey === "any")) score += 3
    if (prefs.location && (job.locationKey === prefs.location || job.locationKey === "remote")) score += 3

    scored.push({ job, score })
  }

  // Sort by score desc, then by postedAgo string (we stored ISO date in postedAgo fallback,
  // but we have no raw date in Job; sort by title as secondary stable key).
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return 0 // preserve original order (jobs.json is already newest-first from n8n)
  })

  const top10 = scored.slice(0, 10)

  return top10.map(({ job, score }): RecommendedJob => {
    const match = Math.min(99, 40 + score * 5)

    // Build a human-friendly match reason.
    const reasons: string[] = []
    if (prefs.field && job.fieldKey === prefs.field) {
      reasons.push(fieldLabels[job.fieldKey])
    }
    if (prefs.location && job.locationKey === prefs.location) {
      reasons.push(locationLabels[job.locationKey])
    } else if (job.locationKey === "remote") {
      reasons.push("Remote")
    }
    if (prefs.jobType && job.type === prefs.jobType) {
      reasons.push(typeLabels[job.type])
    }

    const matchReason =
      reasons.length > 0
        ? `Good match for ${reasons.join(" in ")}`
        : "Based on your preferences"

    return { ...job, match, matchReason }
  })
}

/**
 * Returns the full Job object for a given id, looked up in the in-memory list.
 * Zero network calls — always uses the cached jobs list.
 */
export async function getJobDetails(id: string): Promise<Job | null> {
  try {
    const jobs = await getAllJobs()
    return jobs.find((j) => j.id === id) ?? null
  } catch (err) {
    console.error("[api] getJobDetails failed", err)
    throw new Error("We couldn't load this job right now. Please try again.")
  }
}

// ─── Preferences → n8n (the ONE remaining write) ──────────────────────────────

/** POSTs JSON with a timeout. */
async function postJson<T>(url: string, body: unknown, timeoutMs = 10000): Promise<T> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
    if (!res.ok) {
      throw new Error(`Request to ${url} failed with status ${res.status}`)
    }
    return (await res.json()) as T
  } finally {
    clearTimeout(timer)
  }
}

/** Telegram's signed launch data. Empty outside Telegram. */
function getInitData(): string {
  if (typeof window === "undefined") return ""
  return (window as any).Telegram?.WebApp?.initData ?? ""
}

export interface SavePreferencesResult {
  success: boolean
  userId: string
}

/**
 * Persists the user's preferences to the Google Sheet via n8n.
 * Must only be called when the user completes/saves onboarding — never on app open.
 */
export async function saveUserPreferences(
  preferences: Preferences,
  telegramUserId?: number,
  _telegramUser?: Pick<TelegramUser, "first_name" | "username">,
): Promise<SavePreferencesResult> {
  try {
    await postJson(SAVE_PREFS_WORKER_URL, {
      initData: getInitData(),
      job_type: preferences.jobType,
      field: preferences.field,
      location: preferences.location,
    })
    return {
      success: true,
      userId: telegramUserId ? String(telegramUserId) : "",
    }
  } catch (err) {
    console.error("[api] saveUserPreferences failed", err)
    throw new Error("Couldn't save your preferences. Please try again.")
  }
}

// ─── Legacy migration helpers (called at most once per user) ──────────────────

/**
 * Loads a saved profile from n8n.
 * Only called once for existing users who have no local "prefs" storage yet.
 * After the first successful load the result is written to storage and this
 * function is never called again for that user.
 */
export async function getUserProfile(telegramUserId: number): Promise<UserProfile | null> {
  try {
    const data = await postJson<{ success: boolean; user: any | null }>(
      PROFILE_WORKER_URL,
      { initData: getInitData() },
    )
    const u = data.user
    if (!u) return null
    return {
      telegram_user_id: String(u.telegramUserId ?? telegramUserId),
      first_name: u.firstName ?? u.first_name,
      username: u.username,
      job_type: u.jobType ?? u.job_type ?? null,
      field: u.field ?? null,
      location: u.location ?? null,
    }
  } catch (err) {
    console.error("[api] getUserProfile failed", err)
    return null
  }
}

/**
 * Fetches the user's saved jobs from n8n.
 * Only called once for existing users who have no "saved_count" key in storage yet.
 */
export async function getSavedJobs(telegramUserId?: number): Promise<Job[]> {
  if (!telegramUserId) return []
  try {
    const data = await postJson<{ success: boolean; jobs: Job[] }>(SAVED_WORKER_URL, {
      initData: getInitData(),
    })
    return data.jobs ?? []
  } catch (err) {
    console.error("[api] getSavedJobs failed", err)
    return []
  }
}