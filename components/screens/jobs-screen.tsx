"use client"

import { useState, useCallback } from "react"
import { AlertCircle, SlidersHorizontal, Sparkles } from "lucide-react"
import { useApp } from "@/components/app-provider"
import { JobCard, JobCardSkeleton } from "@/components/job-card"
import { OnboardingFlow } from "@/components/onboarding-flow"
import { Button } from "@/components/ui/button"
import { FIELDS, JOB_TYPES, LOCATIONS, labelFor } from "@/lib/options"
import type { Preferences } from "@/lib/types"
import { trackEvent } from "@/lib/utils"
import { t } from "@/lib/translation"
import { LanguageToggle } from "@/components/language-toggle"

export function JobsScreen() {
  const {
    preferences,
    recommendedJobs,
    allJobs,
    jobsError,
    retryLoadJobs,
    toggleSaved,
    isSaved,
    editPreferences,
    completeOnboarding,
    locale,
  } = useApp()

  const [toast, setToast] = useState<string | null>(null)
  const toastTimerRef = { current: null as ReturnType<typeof setTimeout> | null }

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToast(null), 2200)
  }, [])

  const hasPreferences =
    preferences.jobType !== null ||
    preferences.field !== null ||
    preferences.location !== null

  // Show jobs: recommended if prefs set, otherwise top jobs from all jobs
  const displayJobs = hasPreferences ? recommendedJobs : allJobs.slice(0, 10)
  const isLoading = displayJobs.length === 0 && !jobsError

  const summary = [
    `${t("Work type", locale)}: ${preferences.jobType ? t(labelFor(JOB_TYPES, preferences.jobType), locale) : t("Not selected", locale)}`,
    `${t("Sector", locale)}: ${preferences.field ? t(labelFor(FIELDS, preferences.field), locale) : t("Not selected", locale)}`,
    `${t("Location", locale)}: ${preferences.location ? t(labelFor(LOCATIONS, preferences.location), locale) : t("Not selected", locale)}`,
  ].join(" · ")

  // ── No preferences yet: show preview + inline onboarding ─────────────────
  if (!hasPreferences) {
    return (
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
          <h1 className="text-xl font-bold text-foreground">{t("For You", locale)}</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {t("Tell us what you're looking for — takes under 30 seconds", locale)}
          </p>
        </header>

        {/* Quick preview of jobs even before onboarding */}
        {allJobs.length > 0 && (
          <div className="border-b border-border bg-secondary/40 px-4 py-3">
            <p className="text-xs font-medium text-muted-foreground">
              <Sparkles className="mb-0.5 mr-1 inline h-3.5 w-3.5 text-primary" />
              {allJobs.length} {t("jobs available — tell us your preferences to see the best matches", locale)}
            </p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          <OnboardingFlow
            embedded
            submitLabel={t("Show me jobs →", locale)}
            onComplete={(prefs: Preferences) => {
              trackEvent("onboarding_completed", {
                job_type: prefs.jobType ?? "none",
                field: prefs.field ?? "none",
                location: prefs.location ?? "none",
              })
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
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground">{t("For You", locale)}</h1>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {t("Your choices", locale)}: {summary}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => {
                trackEvent("preferences_edit_opened")
                editPreferences()
              }}
              aria-label={t("Edit preferences", locale)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 space-y-3 px-4 py-4">
        {jobsError ? (
          <ErrorState onRetry={retryLoadJobs} />
        ) : isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </>
        ) : displayJobs.length === 0 ? (
          <EmptyState onEdit={editPreferences} />
        ) : (
          <>
            {hasPreferences && recommendedJobs.length === 0 && allJobs.length > 0 && (
              <div className="rounded-xl bg-secondary/50 px-4 py-3 text-sm text-muted-foreground">
                {t("No exact matches — showing all available jobs instead.", locale)}{" "}
                <button
                  type="button"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                  onClick={editPreferences}
                >
                  {t("Adjust preferences", locale)}
                </button>
              </div>
            )}
            {displayJobs.map((job, i) => (
              <div
                key={job.id}
                className="animate-in fade-in slide-in-from-bottom-2"
                style={{ animationDelay: `${Math.min(i * 30, 150)}ms`, animationFillMode: "both" }}
              >
                <JobCard
                  job={job}
                  saved={isSaved(job.id)}
                  onToggleSave={() => toggleSaved(job.id, job)}
                  onToast={showToast}
                />
              </div>
            ))}
            <div className="py-4 text-center text-xs text-muted-foreground">
              {locale === "km"
                ? `${displayJobs.length} ${hasPreferences ? "ការងារដែលត្រូវគ្នា" : "ការងារដែលមាន"}`
                : hasPreferences
                ? `Showing ${displayJobs.length} matched role${displayJobs.length !== 1 ? "s" : ""}`
                : `${displayJobs.length} jobs available`}
            </div>
          </>
        )}
      </div>

      {toast && (
        <div className="fixed bottom-24 left-1/2 z-30 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2">
          <div className="rounded-full bg-foreground px-4 py-2 text-sm text-background shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  const { locale } = useApp()
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <AlertCircle className="h-7 w-7 text-destructive" />
      <p className="font-semibold text-foreground">{t("Could not load recommendations", locale)}</p>
      <p className="text-sm text-muted-foreground">{t("Check your connection and try again.", locale)}</p>
      <Button variant="outline" className="mt-2 rounded-xl" onClick={onRetry}>
        {t("Try again", locale)}
      </Button>
    </div>
  )
}

function EmptyState({ onEdit }: { onEdit: () => void }) {
  const { locale } = useApp()
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
        <Sparkles className="h-6 w-6 text-muted-foreground" />
      </span>
      <div>
        <p className="font-semibold text-foreground">{t("No matching jobs yet", locale)}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("Try widening your preferences, or check back soon for new listings.", locale)}
        </p>
      </div>
      <Button variant="outline" className="mt-2 rounded-xl" onClick={onEdit}>
        {t("Adjust preferences", locale)}
      </Button>
    </div>
  )
}
