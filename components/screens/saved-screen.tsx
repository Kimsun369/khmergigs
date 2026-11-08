"use client"

import { useState, useCallback } from "react"
import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import { JobCard } from "@/components/job-card"
import { t } from "@/lib/translation"
import { LanguageToggle } from "@/components/language-toggle"

export function SavedScreen() {
  const { savedJobs, toggleSaved, isSaved, goTo, locale } = useApp()
  const [toast, setToast] = useState<string | null>(null)
  const toastTimerRef = { current: null as ReturnType<typeof setTimeout> | null }

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToast(null), 2200)
  }, [])

  const count = savedJobs.length

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground">{t("Saved Jobs", locale)}</h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {count > 0 ? (locale === "km" ? `បានរក្សាទុកការងារ ${count}` : `${count} job${count !== 1 ? "s" : ""} saved`) : t("Jobs you save appear here", locale)}
            </p>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <div className="flex-1 space-y-3 px-4 py-4">
        {count === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Bookmark className="h-7 w-7 text-muted-foreground" />
            </span>
            <div>
              <p className="font-semibold text-foreground">{t("No saved jobs yet", locale)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("Tap the bookmark on any job to save it here.", locale)}
              </p>
            </div>
            <Button variant="outline" className="rounded-xl" onClick={() => goTo("home")}>
              {t("Browse jobs", locale)}
            </Button>
          </div>
        ) : (
          <>
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                saved={isSaved(job.id)}
                onToggleSave={() => toggleSaved(job.id, job)}
                onToast={showToast}
              />
            ))}
            <div className="py-4 text-center text-xs text-muted-foreground">
              {locale === "km" ? `ការងារដែលបានរក្សាទុក ${count}` : `${count} saved job${count !== 1 ? "s" : ""}`}
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
