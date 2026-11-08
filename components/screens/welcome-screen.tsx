"use client"

import { ArrowRight, MapPin, Sparkles, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import { t } from "@/lib/translation"

export function WelcomeScreen() {
  const { startOnboarding, locale } = useApp()

  return (
    <div className="flex min-h-dvh flex-col bg-background px-6 [padding-bottom:calc(1.5rem+env(safe-area-inset-bottom))] [padding-top:calc(2rem+env(safe-area-inset-top))]">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <span className="text-4xl" aria-hidden="true">
            {"\uD83D\uDCBC"}
          </span>
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
          KhmerGigs
        </p>
        <h1 className="text-3xl font-bold leading-tight text-foreground text-balance">
          {t("Find Jobs That Fit You", locale)}
        </h1>
        <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          {t("Tell us what you're looking for and we'll find jobs that match your preferences.", locale)}
        </p>

        <ul className="mt-8 w-full max-w-xs space-y-3 text-left">
          <Feature icon={<Sparkles className="h-4 w-4" />} text={t("Matched to your goals", locale)} />
          <Feature icon={<MapPin className="h-4 w-4" />} text={t("Jobs across Cambodia", locale)} />
          <Feature icon={<Wallet className="h-4 w-4" />} text={t("Clear salary ranges", locale)} />
        </ul>
      </div>

      <Button
        size="lg"
        onClick={startOnboarding}
        className="h-12 w-full rounded-xl text-base"
      >
        {t("Get Started", locale)}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
        {icon}
      </span>
      <span className="text-sm font-medium text-card-foreground">{text}</span>
    </li>
  )
}
