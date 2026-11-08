"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SelectionCard } from "@/components/selection-card"
import { FIELDS, JOB_TYPES, LOCATIONS } from "@/lib/options"
import type { FieldKey, JobType, LocationKey, Preferences } from "@/lib/types"

interface OnboardingFlowProps {
  /** initial values — used when editing existing preferences */
  initial?: Preferences
  /** label for the final confirm button */
  submitLabel?: string
  onComplete: (prefs: Preferences) => void
  onExit?: () => void
  /**
   * When true the flow is rendered inline inside a tab (For You) rather than
   * as a full-screen overlay.  The container drops min-h-dvh and the back
   * button on step 0 is hidden (there is nowhere to exit to).
   */
  embedded?: boolean
}

const STEPS = ["type", "field", "location"] as const

export function OnboardingFlow({
  initial,
  submitLabel = "Find my jobs",
  onComplete,
  onExit,
  embedded = false,
}: OnboardingFlowProps) {
  const [step, setStep] = useState(0)
  const [jobType, setJobType] = useState<JobType | null>(initial?.jobType ?? null)
  const [field, setField] = useState<FieldKey | null>(initial?.field ?? null)
  const [location, setLocation] = useState<LocationKey | null>(initial?.location ?? null)

  const canContinue =
    (step === 0 && jobType) || (step === 1 && field) || (step === 2 && location)

  const isLast = step === STEPS.length - 1

  function next() {
    if (isLast) {
      onComplete({ jobType, field, location })
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

  return (
    <div className={embedded ? "flex flex-col" : "flex min-h-dvh flex-col bg-background"}>
      {/* header with progress */}
      <header className="sticky top-0 z-10 bg-background/90 px-5 pb-3 pt-5 backdrop-blur">
        <div className="flex items-center gap-3">
          {/* hide back button on step 0 when embedded (no exit destination) */}
          {(!embedded || step > 0) && (
            <button
              type="button"
              onClick={back}
              aria-label="Go back"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
          <div className="flex flex-1 gap-1.5" aria-hidden="true">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={
                  "h-1.5 flex-1 rounded-full transition-colors " +
                  (i <= step ? "bg-primary" : "bg-border")
                }
              />
            ))}
          </div>
          <span className="w-12 text-right text-xs font-medium text-muted-foreground">
            {step + 1}/{STEPS.length}
          </span>
        </div>
      </header>

      <main className="flex-1 px-5 pb-4 pt-3">
        {step === 0 && (
          <Step title="What are you looking for?">
            <div role="radiogroup" className="flex flex-col gap-3">
              {JOB_TYPES.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={o.label}
                  selected={jobType === o.value}
                  onSelect={() => setJobType(o.value)}
                />
              ))}
            </div>
          </Step>
        )}

        {step === 1 && (
          <Step title="What field are you interested in?">
            <div role="radiogroup" className="grid grid-cols-2 gap-3">
              {FIELDS.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={o.label}
                  selected={field === o.value}
                  onSelect={() => setField(o.value)}
                  compact
                />
              ))}
            </div>
          </Step>
        )}

        {step === 2 && (
          <Step title="Where do you want to work?">
            <div role="radiogroup" className="flex flex-col gap-3">
              {LOCATIONS.map((o) => (
                <SelectionCard
                  key={o.value}
                  emoji={o.emoji}
                  label={o.label}
                  selected={location === o.value}
                  onSelect={() => setLocation(o.value)}
                />
              ))}
            </div>
          </Step>
        )}
      </main>

      <footer className="sticky bottom-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur [padding-bottom:calc(1rem+env(safe-area-inset-bottom))]">
        <Button
          size="lg"
          className="h-12 w-full rounded-xl text-base"
          disabled={!canContinue}
          onClick={next}
        >
          {isLast ? submitLabel : "Continue"}
          {!isLast && <ArrowRight className="ml-1 h-4 w-4" />}
        </Button>
      </footer>
    </div>
  )
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="animate-in fade-in slide-in-from-right-2 duration-300">
      <h1 className="mb-5 text-2xl font-bold leading-tight text-foreground text-balance">
        {title}
      </h1>
      {children}
    </div>
  )
}
