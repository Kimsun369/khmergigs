"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SelectionCard } from "@/components/selection-card"
import { FIELDS, JOB_TYPES, LOCATIONS } from "@/lib/options"
import type { FieldKey, JobType, LocationKey, Preferences } from "@/lib/types"
import { trackEvent } from "@/lib/utils"
import { t } from "@/lib/translation"
import { useApp } from "@/components/app-provider"
import { LanguageToggle } from "@/components/language-toggle"

interface OnboardingFlowProps {
  /** initial values — used when editing existing preferences */
  initial?: Preferences
  /** label for the final confirm button */
  submitLabel?: string
  onComplete: (prefs: Preferences) => void
  onExit?: () => void
  /**
   * When true the flow is rendered inline inside a tab (For You) rather than
   * as a full-screen overlay. The container drops min-h-dvh and the back
   * button on step 0 is hidden (there is nowhere to exit to).
   */
  embedded?: boolean
}

const STEPS = ["type", "field", "location"] as const

const STEP_META = [
  {
    title: "What are you looking for?",
    subtitle: "Pick the type of work that fits your life",
  },
  {
    title: "What field interests you?",
    subtitle: "We'll prioritise jobs in your area of interest",
  },
  {
    title: "Where do you want to work?",
    subtitle: "Pick a city or choose remote",
  },
]

export function OnboardingFlow({
  initial,
  submitLabel = "Find my jobs",
  onComplete,
  onExit,
  embedded = false,
}: OnboardingFlowProps) {
  const { locale } = useApp()
  const [step, setStep] = useState(0)
  const [jobType, setJobType] = useState<JobType | null>(initial?.jobType ?? null)
  const [field, setField] = useState<FieldKey | null>(initial?.field ?? null)
  const [location, setLocation] = useState<LocationKey | null>(initial?.location ?? null)

  const isLast = step === STEPS.length - 1

  // A selection is not required — user can skip each step
  const currentValue = step === 0 ? jobType : step === 1 ? field : location
  const hasSelection = currentValue !== null

  function next() {
    trackEvent("onboarding_step_completed", { step: step + 1, skipped: !hasSelection ? 1 : 0 })
    if (isLast) {
      onComplete({ jobType, field, location })
      return
    }
    setStep((s) => s + 1)
  }

  function skip() {
    trackEvent("onboarding_step_skipped", { step: step + 1 })
    // Clear the current step's selection when skipping
    if (step === 0) setJobType(null)
    if (step === 1) setField(null)
    if (step === 2) setLocation(null)

    if (isLast) {
      onComplete({ jobType: step === 0 ? null : jobType, field: step === 1 ? null : field, location: step === 2 ? null : location })
      return
    }
    setStep((s) => s + 1)
  }

  function back() {
    if (step === 0) {
      onExit?.()
      return
    }
    setStep((s) => s - 1)
  }

  const meta = STEP_META[step]

  return (
    <div className={embedded ? "flex flex-col" : "flex min-h-dvh flex-col bg-background"}>
      {/* Header with progress */}
      <header className="sticky top-0 z-10 bg-background/90 px-4 pb-3 pt-5 backdrop-blur">
        <div className="flex items-center gap-3">
          {/* Hide back button on step 0 when embedded */}
          {(!embedded || step > 0) && (
            <button
              type="button"
              onClick={back}
              aria-label={locale === "km" ? "ត្រឡប់ក្រោយ" : "Go back"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors active:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
          {/* Progress bars */}
          <div className="flex flex-1 gap-1.5" aria-hidden="true">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={
                  "h-1 flex-1 rounded-full transition-all duration-300 " +
                  (i < step ? "bg-primary" : i === step ? "bg-primary/60" : "bg-border")
                }
              />
            ))}
          </div>
          <span className="w-10 text-right text-xs font-medium text-muted-foreground">
            {step + 1}/{STEPS.length}
          </span>
        </div>
        <div className="mt-2 flex justify-end">
          <LanguageToggle />
        </div>
      </header>

      <main className="flex-1 px-4 pb-4 pt-2">
        <div className="animate-in fade-in slide-in-from-right-2 duration-250">
          <h1 className="mb-1 text-xl font-bold leading-tight text-foreground text-balance">
            {t(meta.title, locale)}
          </h1>
          <p className="mb-5 text-sm text-muted-foreground">{t(meta.subtitle, locale)}</p>

          {step === 0 && (
            <div role="radiogroup" aria-label={t("Job type", locale)} className="flex flex-col gap-3">
              {JOB_TYPES.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={t(o.label, locale)}
                  selected={jobType === o.value}
                  onSelect={() => setJobType(o.value)}
                />
              ))}
            </div>
          )}

          {step === 1 && (
            <div role="radiogroup" aria-label={t("Field", locale)} className="grid grid-cols-2 gap-3">
              {FIELDS.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={t(o.label, locale)}
                  selected={field === o.value}
                  onSelect={() => setField(o.value)}
                  compact
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div role="radiogroup" aria-label={t("Location", locale)} className="flex flex-col gap-3">
              {LOCATIONS.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={t(o.label, locale)}
                  selected={location === o.value}
                  onSelect={() => setLocation(o.value)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="sticky bottom-0 border-t border-border bg-background/95 px-4 py-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
        <Button
          size="lg"
          className="h-12 w-full rounded-xl text-base font-semibold"
          onClick={next}
        >
          {isLast ? t(submitLabel, locale) : t("Continue", locale)}
          {!isLast && <ArrowRight className="ml-1 h-4 w-4" />}
        </Button>
        {/* Skip link — only shown when nothing is selected */}
        {!hasSelection && (
          <button
            type="button"
            onClick={skip}
            className="mt-2.5 w-full text-center text-sm text-muted-foreground underline-offset-2 hover:underline"
          >
            {t("Skip this step", locale)}
          </button>
        )}
      </footer>
    </div>
  )
}
