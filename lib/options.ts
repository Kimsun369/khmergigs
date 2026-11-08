// Selectable options for the onboarding questions.
// Shared by the onboarding flow and the profile page so labels stay in sync.

import type { JobType, FieldKey, LocationKey } from "./types"

export interface Option<T extends string> {
  value: T
  emoji: string
  label: string
  /** short label used in compact places like the profile summary */
  short: string
}

export const JOB_TYPES: Option<JobType>[] = [
  { value: "full-time", emoji: "💼", label: "Full-time job", short: "Full-time" },
  { value: "part-time", emoji: "⏰", label: "Part-time / Flexible", short: "Part-time" },
  { value: "internship", emoji: "🎓", label: "Internship", short: "Internship" },
  { value: "freelance", emoji: "🛠", label: "Freelance / Gig", short: "Freelance" },
]

export const FIELDS: Option<FieldKey>[] = [
  { value: "hotel", emoji: "🏨", label: "Hotel & Tourism", short: "Hotel & Tourism" },
  { value: "tech", emoji: "💻", label: "Tech & IT", short: "Tech & IT" },
  { value: "marketing", emoji: "📣", label: "Marketing & Sales", short: "Marketing & Sales" },
  { value: "health", emoji: "🏥", label: "Health & NGO", short: "Health & NGO" },
  { value: "finance", emoji: "🏦", label: "Finance & Banking", short: "Finance & Banking" },
  { value: "education", emoji: "🎓", label: "Education & Teaching", short: "Education" },
  { value: "construction", emoji: "🏗", label: "Construction & Engineering", short: "Construction" },
  { value: "logistics", emoji: "📦", label: "Logistics & Supply Chain", short: "Logistics" },
  { value: "any", emoji: "🌍", label: "Any / Show me everything", short: "Any field" },
]

export const LOCATIONS: Option<LocationKey>[] = [
  { value: "phnom-penh", emoji: "📍", label: "Phnom Penh", short: "Phnom Penh" },
  { value: "siem-reap", emoji: "🌆", label: "Siem Reap", short: "Siem Reap" },
  { value: "provinces", emoji: "🌏", label: "Other provinces", short: "Other provinces" },
  { value: "remote", emoji: "💻", label: "Remote / Anywhere", short: "Remote" },
]

export function labelFor<T extends string>(options: Option<T>[], value: T | null): string {
  if (!value) return "Not set"
  return options.find((o) => o.value === value)?.short ?? "Not set"
}
