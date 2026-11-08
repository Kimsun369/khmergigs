"use client"

import { Briefcase, Heart, MapPin, Wallet } from "lucide-react"
import type { Job, RecommendedJob } from "@/lib/types"
import { cn } from "@/lib/utils"

interface JobCardProps {
  job: Job | RecommendedJob
  saved: boolean
  onOpen: () => void
  onToggleSave: () => void
}

function hasMatch(job: Job | RecommendedJob): job is RecommendedJob {
  return "match" in job
}

export function JobCard({ job, saved, onOpen, onToggleSave }: JobCardProps) {
  return (
    <article
      className="rounded-2xl border border-border bg-card p-4 transition-colors active:bg-secondary/40"
    >
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="min-w-0 flex-1 text-left"
          aria-label={`View details for ${job.title} at ${job.company}`}
        >
          <h3 className="truncate text-base font-semibold text-card-foreground">
            {job.title}
          </h3>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{job.company}</p>
        </button>

        <button
          type="button"
          onClick={onToggleSave}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved jobs" : "Save job"}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
            saved
              ? "border-destructive/30 bg-destructive/10 text-destructive"
              : "border-border bg-secondary text-muted-foreground hover:text-foreground",
          )}
        >
          <Heart className={cn("h-4 w-4", saved && "fill-current")} />
        </button>
      </div>

      <button type="button" onClick={onOpen} className="mt-3 block w-full text-left">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {job.locationLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            {job.typeLabel}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Wallet className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            {job.salary}
          </span>

          {hasMatch(job) && (
            <span className="inline-flex items-center gap-1 rounded-full bg-success-muted px-2.5 py-1 text-xs font-semibold text-success">
              {"\u2B50"} {job.match}% Match
            </span>
          )}
        </div>
      </button>
    </article>
  )
}
