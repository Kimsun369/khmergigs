"use client"

import { useMemo, useEffect, useRef, useState, useCallback } from "react"
import { AlertCircle, Search, X, ArrowUp, SlidersHorizontal } from "lucide-react"
import { useApp } from "@/components/app-provider"
import { Button } from "@/components/ui/button"
import { JobCard, JobCardSkeleton } from "@/components/job-card"
import { trackEvent } from "@/lib/utils"
import { t } from "@/lib/translation"
import { LanguageToggle } from "@/components/language-toggle"
import { isJobExpired } from "@/lib/api"

const PAGE_SIZE = 10

type Job = any

function parseDate(iso?: string): number {
  if (!iso) return 0
  const ms = new Date(iso).getTime()
  return isNaN(ms) ? 0 : ms
}

export function HomeScreen() {
  const { allJobs, jobsError, retryLoadJobs, toggleSaved, isSaved, goTo, locale } = useApp()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [searchQuery, setSearchQuery] = useState("")
  const [toast, setToast] = useState<string | null>(null)
  const [showTop, setShowTop] = useState(false)
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2200)
  }, [])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [searchQuery])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Open jobs only, de-duplicated, newest first
  const feedJobs = useMemo(() => {
    const seen = new Set<string>()
    const q = searchQuery.trim().toLowerCase()
    return allJobs
      .filter((job: Job) => {
        if (seen.has(job.id)) return false
        seen.add(job.id)
        if (isJobExpired(job)) return false
        if (!q) return true
        return [job.title, job.company, job.locationLabel, job.skills, job.fieldLabel].some((v) =>
          v?.toLowerCase().includes(q),
        )
      })
      .sort((a: Job, b: Job) => parseDate(b.postedAt) - parseDate(a.postedAt))
  }, [allJobs, searchQuery])

  const isLoading = allJobs.length === 0 && !jobsError
  const visibleJobs = feedJobs.slice(0, visibleCount)
  const hasMore = visibleCount < feedJobs.length

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || !hasMore) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleCount((c) => Math.min(c + PAGE_SIZE, feedJobs.length))
      },
      { rootMargin: "400px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, feedJobs.length])

  function handleSearch(q: string) {
    setSearchQuery(q)
    if (q.trim()) {
      trackEvent("home_search", { query: q.trim() })
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        {/* Title row */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold text-foreground">{t("Latest Jobs", locale)}</h1>
            <p className="text-xs text-muted-foreground">
              {isLoading
                ? t("Loading…", locale)
                : jobsError
                ? t("Could not load jobs", locale)
                : locale === "km" ? `ការងារកំពុងជ្រើសរើស ${feedJobs.length}` : `${feedJobs.length} open role${feedJobs.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          {/* Quick link to For You tab */}
          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => goTo("jobs")}
              aria-label={t("Personalised recommendations", locale)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              title={t("For You — personalised recommendations", locale)}
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mt-2.5 flex items-center">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t("Search jobs, companies, skills…", locale)}
            className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
            aria-label={t("Search jobs", locale)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label={t("Clear search", locale)}
              className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-border"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 space-y-3 px-4 py-4">
        {jobsError ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <AlertCircle className="h-7 w-7 text-destructive" />
            <p className="font-semibold text-foreground">{t("Could not load jobs", locale)}</p>
            <p className="text-sm text-muted-foreground">{t("Check your connection and try again.", locale)}</p>
            <Button variant="outline" className="mt-2 rounded-xl" onClick={retryLoadJobs}>
              {t("Try again", locale)}
            </Button>
          </div>
        ) : isLoading ? (
          // Skeleton loaders that match the real card layout
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </>
        ) : feedJobs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-semibold text-foreground">{t("No matching jobs", locale)}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("Try different keywords.", locale)}</p>
            <Button
              variant="outline"
              className="mt-4 rounded-xl"
              onClick={() => setSearchQuery("")}
            >
              {t("Clear search", locale)}
            </Button>
          </div>
        ) : (
          <>
            {visibleJobs.map((job: Job, i: number) => (
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
            {hasMore ? (
              <div ref={sentinelRef} className="py-4 text-center text-xs text-muted-foreground">
                {t("Loading more…", locale)}
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-muted-foreground">
                {locale === "km" ? `អ្នកបានមើលអស់ហើយ · មានការងារ ${feedJobs.length}` : <>You&apos;re all caught up · {feedJobs.length} jobs listed</>}
              </div>
            )}
          </>
        )}
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("Back to top", locale)}
          className="fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform active:scale-95"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Toast */}
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
