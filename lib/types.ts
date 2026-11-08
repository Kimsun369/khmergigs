// Shared domain types for KhmerGigs.
// Kept separate from UI so the mock API layer can later be swapped for
// real n8n webhook responses without touching components.

export type JobType = "full-time" | "part-time" | "internship" | "freelance"

export type FieldKey =
  | "hotel"
  | "tech"
  | "marketing"
  | "health"
  | "finance"
  | "education"
  | "construction"
  | "logistics"
  | "any"

export type LocationKey = "phnom-penh" | "siem-reap" | "provinces" | "remote"

export interface Preferences {
  jobType: JobType | null
  field: FieldKey | null
  location: LocationKey | null
}

// Shape returned by the n8n "get profile" webhook. Mirrors the User sheet
// row. Fields beyond preferences (first_name/username) are informational —
// the Telegram WebApp SDK remains the source of truth for display name.
export interface UserProfile {
  telegram_user_id: string
  first_name?: string
  username?: string
  job_type: JobType | null
  field: FieldKey | null
  location: LocationKey | null
}

export interface Job {
  id: string
  title: string
  company: string
  locationKey: LocationKey
  locationLabel: string
  type: JobType
  typeLabel: string
  fieldKey: FieldKey
  fieldLabel: string
  salary: string
  /** Optional — not provided by jobs.json; kept so the details screen can hide the section gracefully. */
  summary?: string
  /** Optional — not provided by jobs.json. */
  responsibilities?: string[]
  /** Optional — not provided by jobs.json. */
  requirements?: string[]
  /** Optional — not provided by jobs.json. */
  benefits?: string[]
  applyUrl: string
  /** Human-readable relative time string, e.g. "2 days ago". */
  postedAgo: string
  /** Normalized publisher timestamp from jobs.json, used for sorting and display. */
  postedAt: string
  /** Timestamp when the feed importer collected the row, when available. */
  fetchedAt?: string
  /** Extra metadata from jobs.json (all optional). */
  seniority?: string
  skills?: string
  language?: string
  source?: string
  closingDate?: string
}

// A job enriched with a computed match score for a given user.
export interface RecommendedJob extends Job {
  match: number
  matchReason: string
  matchedPreferenceCount: number
  preferenceCount: number
}
