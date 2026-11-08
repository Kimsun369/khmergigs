
"use client"

import { useState } from "react"
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Heart,
  MapPin,
  Wallet,
} from "lucide-react"

import type { Job } from "@/lib/types"
import { cn, openApplyUrl } from "@/lib/utils"

// ─── Avatar color palette ────────────────────────────────────────────────────

const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
  "bg-orange-100 text-orange-700",
  "bg-teal-100 text-teal-700",
]

// Derived deterministically from the company name hash.
function stringHash(s: string): number {
  let h = 0

  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  }

  return Math.abs(h)
}

function avatarColor(company: string): string {
  return AVATAR_COLORS[stringHash(company) % AVATAR_COLORS.length]
}

// ─── Time helpers ─────────────────────────────────────────────────────────────

function relativeTime(iso: string): { label: string; isNew: boolean } {
  try {
    if (!iso) return { label: "", isNew: false }

    const ms = Date.now() - new Date(iso).getTime()

    if (isNaN(ms)) return { label: "", isNew: false }

    const mins = Math.floor(ms / 60_000)
    const hours = Math.floor(ms / 3_600_000)
    const days = Math.floor(ms / 86_400_000)

    const isNew = ms < 86_400_000

    if (mins < 2) return { label: "Just now", isNew }

    if (hours < 1) {
      return { label: `${mins}m ago`, isNew }
    }

    if (hours < 24) {
      return { label: `${hours}h ago`, isNew }
    }

    if (days === 1) {
      return { label: "Yesterday", isNew: false }
    }

    if (days < 8) {
      return { label: `${days}d ago`, isNew: false }
    }

    // Short date for older posts
    const d = new Date(iso)

    return {
      label: d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      }),
      isNew: false,
    }
  } catch {
    return { label: "", isNew: false }
  }
}

// Shorten a location string: take only the first two comma-separated parts.
function shortLocation(loc: string): string {
  if (!loc) return ""

  const parts = loc
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean)

  return parts.slice(0, 2).join(", ")
}

// Format a closing date string (YYYY-MM-DD or ISO) to a short readable date.
function formatClosingDate(raw: string): string {
  try {
    if (!raw) return ""

    const d = new Date(raw)

    if (isNaN(d.getTime())) return ""

    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  } catch {
    return ""
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

interface FeedCardProps {
  job: Job
  saved: boolean
  onOpen: () => void
  onToggleSave: () => void
}

export function FeedCard({
  job,
  saved,
  onOpen,
  onToggleSave,
}: FeedCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Determine whether the "See more" section has anything to show.
  const skillsRaw = job.skills?.trim() ?? ""

  const skills = skillsRaw
    ? skillsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 8)
    : []

  const seniorityVal =
    job.seniority && job.seniority !== "Unknown" ? job.seniority : ""

  const languagesRaw = job.language?.trim() ?? ""

  const languages = languagesRaw
    ? languagesRaw
        .split(",")
        .map((l) => l.trim())
        .filter(Boolean)
    : []

  const closingDateFormatted = formatClosingDate(job.closingDate ?? "")

  const hasSeeMore =
    skills.length > 0 ||
    !!seniorityVal ||
    languages.length > 0 ||
    !!closingDateFormatted

  // Avatar letter — use company initial unless company is generic/empty.
  const isGenericCompany =
    !job.company ||
    job.company === "N/A" ||
    job.company === "Company not listed"

  const avatarLetter = isGenericCompany
    ? (job.title.charAt(0) || "?").toUpperCase()
    : job.company.charAt(0).toUpperCase()

  const colorClass = avatarColor(
    isGenericCompany ? job.title : job.company,
  )

  // Job type chip: hide when "Unknown" or empty.
  const showType =
    job.typeLabel &&
    job.type !== ("unknown" as string) &&
    job.typeLabel !== "Unknown"

  const { label: feedTimeLabel, isNew: feedIsNew } = relativeTime(
    job.postedAt ?? "",
  )

  const locationShort = shortLocation(job.locationLabel)

  return (
    <article
      className={cn(
        "relative rounded-2xl border border-border bg-card shadow-sm transition-all",
        "active:scale-[0.99] active:shadow-none",
      )}
    >
      {/* Main card content */}
      <div className="p-4">
        {/* Top row: clickable job content + separate save button */}
        <div className="relative">
          {/* Clickable job content.
              The Save button is deliberately outside this button so
              there are no nested <button> elements. */}
          <button
            type="button"
            onClick={onOpen}
            className="block w-full pr-10 text-left"
            aria-label={`View details for ${job.title}`}
          >
            <div className="flex items-start gap-3">
              {/* Company avatar */}
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  colorClass,
                )}
              >
                {isGenericCompany ? (
                  <Briefcase className="h-4 w-4" />
                ) : (
                  avatarLetter
                )}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-card-foreground">
                  {job.title}
                </h3>

                {!isGenericCompany && (
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {job.company}
                  </p>
                )}
              </div>
            </div>

            {/* Meta row: source badge + time + New badge */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {job.source && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                  {job.source}
                </span>
              )}

              {feedIsNew && (
                <span className="rounded-full bg-success-muted px-2 py-0.5 text-[10px] font-semibold text-success">
                  New
                </span>
              )}

              {feedTimeLabel && (
                <span className="text-[11px] text-muted-foreground">
                  {feedTimeLabel}
                </span>
              )}
            </div>

            {/* Chips row: type, location, salary */}
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              {showType && (
                <Chip
                  icon={<Briefcase className="h-3 w-3" />}
                  label={job.typeLabel}
                />
              )}

              {locationShort && (
                <Chip
                  icon={<MapPin className="h-3 w-3" />}
                  label={locationShort}
                />
              )}

              {job.salary && (
                <Chip
                  icon={<Wallet className="h-3 w-3" />}
                  label={job.salary}
                />
              )}
            </div>
          </button>

          {/* Heart save button.
              IMPORTANT: This is now a sibling of the card button,
              not a child of it. */}
          <button
            type="button"
            onClick={onToggleSave}
            aria-pressed={saved}
            aria-label={saved ? "Remove from saved jobs" : "Save job"}
            className={cn(
              "absolute right-0 top-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
              saved
                ? "border-destructive/30 bg-destructive/10 text-destructive"
                : "border-border bg-secondary text-muted-foreground",
            )}
          >
            <Heart
              className={cn("h-3.5 w-3.5", saved && "fill-current")}
            />
          </button>
        </div>
      </div>

      {/* Footer row: See more + Apply */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2">
        {hasSeeMore ? (
          <button
            type="button"
            onClick={() => {
              setExpanded((v) => !v)
            }}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" />
                See more
              </>
            )}
          </button>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => {
            openApplyUrl(job.applyUrl)
          }}
          className="rounded-xl bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity active:opacity-80"
        >
          Apply
        </button>
      </div>

      {/* Expandable details */}
      {hasSeeMore && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-200",
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
          aria-hidden={!expanded}
        >
          <div className="space-y-3 border-t border-border px-4 pb-4 pt-3">
            {skills.length > 0 && (
              <div>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Skills
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {seniorityVal && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  Seniority:
                </span>{" "}
                {seniorityVal}
              </div>
            )}

            {languages.length > 0 && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  Language:
                </span>{" "}
                {languages.join(", ")}
              </div>
            )}

            {closingDateFormatted && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  Closes:
                </span>{" "}
                {closingDateFormatted}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

function Chip({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
      {icon}
      {label}
    </span>
  )
}
