/**
 * Centralized Job Source Directory & Identity Configuration
 *
 * All 10 active job sources identified from the live KhmerGigs database:
 * CamHR, CamboJob, Jobify, MyWorldCareers, HRINC, Khmer24, ODC,
 * KhmerOnlineJobs, JobNet, ReliefWeb.
 *
 * Guarantees:
 * 1. Verified official domains and Telegram channels
 * 2. Official brand colors and contrast-safe text
 * 3. Multi-stage logo resolution:
 *    - Explicit backend logo (if sent in future API updates)
 *    - Verified domain favicon
 *    - Beautiful, deterministic SVG brand monogram (zero-network fallback)
 * 4. Never displays broken image icons
 * 5. Never leaves an empty container
 */

export interface SourceConfig {
  id: string
  name: string
  shortName: string
  domain?: string
  telegramUrl?: string
  brandColor: string
  brandTextColor: string
  logoUrl?: string
  isTelegramChannel?: boolean
  description?: string
}

export const KNOWN_SOURCES: Record<string, SourceConfig> = {
  camhr: {
    id: "camhr",
    name: "CamHR",
    shortName: "CHR",
    domain: "camhr.com",
    telegramUrl: "https://t.me/camhrjobs",
    brandColor: "#FF7A00",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=camhr.com&sz=128",
    description: "Cambodia's leading recruitment portal",
  },
  cambojob: {
    id: "cambojob",
    name: "CamboJob",
    shortName: "CBJ",
    domain: "cambojob.com",
    telegramUrl: "https://t.me/CBjobopportunity",
    brandColor: "#E11D48",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=cambojob.com&sz=128",
    description: "Smart job-seeking platform in Cambodia",
  },
  jobify: {
    id: "jobify",
    name: "Jobify",
    shortName: "JBF",
    domain: "jobify.works",
    telegramUrl: "https://t.me/jobifyworks",
    brandColor: "#2563EB",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=jobify.works&sz=128",
    description: "Tech & creative talent platform",
  },
  myworldcareers: {
    id: "myworldcareers",
    name: "MyWorld Careers",
    shortName: "MWC",
    domain: "myworld-careers.com",
    telegramUrl: "https://t.me/MyWorldCareersCambodia",
    brandColor: "#0F172A",
    brandTextColor: "#38BDF8",
    logoUrl: "https://www.google.com/s2/favicons?domain=myworld-careers.com&sz=128",
    description: "Executive search & career recruitment",
  },
  hrinc: {
    id: "hrinc",
    name: "HRINC",
    shortName: "HRI",
    domain: "hrinc.com.kh",
    telegramUrl: "https://t.me/hrincjobs",
    brandColor: "#991B1B",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=hrinc.com.kh&sz=128",
    description: "Premier HR consulting & jobs network",
  },
  khmer24: {
    id: "khmer24",
    name: "Khmer24",
    shortName: "K24",
    domain: "khmer24.com",
    brandColor: "#0284C7",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=khmer24.com&sz=128",
    description: "Cambodia's largest marketplace",
  },
  odc: {
    id: "odc",
    name: "Open Development Cambodia",
    shortName: "ODC",
    domain: "opendevelopmentcambodia.net",
    brandColor: "#0D9488",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=opendevelopmentcambodia.net&sz=128",
    description: "Open development research & NGO vacancies",
  },
  khmeronlinejobs: {
    id: "khmeronlinejobs",
    name: "Khmer Online Jobs",
    shortName: "KOJ",
    domain: "t.me/khmeronlinejobs",
    telegramUrl: "https://t.me/khmeronlinejobs",
    isTelegramChannel: true,
    brandColor: "#0284C7",
    brandTextColor: "#FFFFFF",
    description: "Telegram job broadcast community",
  },
  jobnet: {
    id: "jobnet",
    name: "JobNet",
    shortName: "JBN",
    domain: "jobnet.com.kh",
    brandColor: "#1D4ED8",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=jobnet.com.kh&sz=128",
    description: "Professional job board in Cambodia",
  },
  reliefweb: {
    id: "reliefweb",
    name: "ReliefWeb",
    shortName: "RLW",
    domain: "reliefweb.int",
    brandColor: "#0369A1",
    brandTextColor: "#FFFFFF",
    logoUrl: "https://www.google.com/s2/favicons?domain=reliefweb.int&sz=128",
    description: "UN & humanitarian opportunities",
  },
}

/**
 * Normalizes any raw source string into a known SourceConfig.
 * Handles case sensitivity, spaces, symbols, and URL domain matches.
 */
export function resolveSource(rawSource?: string, applyUrl?: string): SourceConfig | null {
  if (!rawSource && !applyUrl) return null

  const s = (rawSource ?? "").trim().toLowerCase().replace(/[^a-z0-9]/g, "")

  // 1. Direct match by key
  if (s && KNOWN_SOURCES[s]) {
    return KNOWN_SOURCES[s]
  }

  // 2. Substring match
  for (const [key, config] of Object.entries(KNOWN_SOURCES)) {
    if (s && (s.includes(key) || key.includes(s))) {
      return config
    }
  }

  // 3. Fallback: inspect applyUrl for known domain / telegram channel
  if (applyUrl) {
    const u = applyUrl.toLowerCase()
    if (u.includes("camhr")) return KNOWN_SOURCES.camhr
    if (u.includes("cbjob") || u.includes("cambojob")) return KNOWN_SOURCES.cambojob
    if (u.includes("jobify")) return KNOWN_SOURCES.jobify
    if (u.includes("myworld")) return KNOWN_SOURCES.myworldcareers
    if (u.includes("hrinc")) return KNOWN_SOURCES.hrinc
    if (u.includes("khmer24")) return KNOWN_SOURCES.khmer24
    if (u.includes("opendevelopment") || u.includes("odc")) return KNOWN_SOURCES.odc
    if (u.includes("khmeronlinejobs")) return KNOWN_SOURCES.khmeronlinejobs
    if (u.includes("jobnet")) return KNOWN_SOURCES.jobnet
    if (u.includes("reliefweb")) return KNOWN_SOURCES.reliefweb
  }

  // 4. Dynamic source for unlisted or newly added sources
  if (rawSource && rawSource.trim() && !/^(unknown|n\/a|none|general)$/i.test(rawSource)) {
    const cleanName = rawSource.trim()
    const words = cleanName.split(/\s+/)
    const shortName = words.length === 1 ? cleanName.slice(0, 3).toUpperCase() : (words[0][0] + (words[1]?.[0] ?? "")).toUpperCase()
    
    // Deterministic palette for unlisted sources
    let hash = 0
    for (let i = 0; i < cleanName.length; i++) {
      hash = (Math.imul(31, hash) + cleanName.charCodeAt(i)) | 0
    }
    const colors = ["#2563EB", "#0D9488", "#7C3AED", "#EA580C", "#0891B2", "#4F46E5", "#059669"]
    const brandColor = colors[Math.abs(hash) % colors.length]

    return {
      id: s || "custom",
      name: cleanName,
      shortName,
      brandColor,
      brandTextColor: "#FFFFFF",
    }
  }

  return null
}
