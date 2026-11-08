"use client"

import { AlertCircle, SlidersHorizontal } from "lucide-react"
import { useApp } from "@/components/app-provider"
import { JobCard } from "@/components/job-card"
import { OnboardingFlow } from "@/components/onboarding-flow"
import { Button } from "@/components/ui/button"
import { FIELDS, LOCATIONS, labelFor } from "@/lib/options"
import type { Preferences } from "@/lib/types"

export function JobsScreen() {
  const {
    preferences,
    recommendedJobs,
    jobsError,
    retryLoadJobs,
    openJob,
    toggleSaved,
    isSaved,
    editPreferences,
    completeOnboarding,
  } = useApp()

  const hasPreferences =
    preferences.jobType !== null ||
    preferences.field !== null ||
    preferences.location !== null

  const isLoading = recommendedJobs.length === 0 && !jobsError

  const summary = [
    labelFor(FIELDS, preferences.field),
    labelFor(LOCATIONS, preferences.location),
  ]
    .filter((x) => x !== "Not set")
    .join(" · ")

  // ── No preferences yet: show onboarding inline ────────────────────────────
  if (!hasPreferences) {
    return (
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
          <h1 className="text-2xl font-bold text-foreground">For You</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Tell us what you&apos;re looking for
          </p>
        </header>
        <div className="flex-1 overflow-y-auto">
          <OnboardingFlow
            embedded
            submitLabel="Find my jobs"
            onComplete={(prefs: Preferences) => {
              void completeOnboarding(prefs)
            }}
          />
        </div>
      </div>
    )
  }

  // ── Has preferences: show matched jobs ────────────────────────────────────
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Jobs For You</h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {summary ? `Based on ${summary}` : "Based on your preferences"}
            </p>
          </div>
          <button
            type="button"
            onClick={editPreferences}
            aria-label="Edit preferences"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-3 px-5 py-4">
        {jobsError ? (
          <ErrorState onRetry={retryLoadJobs} />
        ) : isLoading ? (
          <SkeletonList />
        ) : recommendedJobs.length === 0 ? (
          <EmptyState />
        ) : (
          recommendedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              saved={isSaved(job.id)}
              onOpen={() => openJob(job.id)}
              onToggleSave={() => toggleSaved(job.id, job)}
            />
          ))
        )}
      </div>
    </div>
  )
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <AlertCircle className="h-8 w-8 text-destructive" />
      <p className="font-semibold text-foreground">We couldn&apos;t load recommendations</p>
      <p className="text-sm text-muted-foreground">Please check your connection and try again.</p>
      <Button variant="outline" className="mt-2 rounded-xl" onClick={onRetry}>
        Try again
      </Button>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
      <p className="font-semibold text-foreground">No matching jobs yet</p>
      <p className="text-sm text-muted-foreground">
        Try widening your preferences, or check back soon for new listings.
      </p>
    </div>
  )
}

function SkeletonList() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-4">
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-muted" />
          <div className="mt-4 flex justify-between">
            <div className="h-3 w-24 animate-pulse rounded bg-muted" />
            <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
          </div>
        </div>
      ))}
    </>
  )
}