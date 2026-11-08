"use client"

import { useMemo, useEffect, useRef, useState, useCallback } from "react"
import { AlertCircle, Search, X, ArrowUp, Check } from "lucide-react"
import { useApp } from "@/components/app-provider"
import { Button } from "@/components/ui/button"
import { PosterCard } from "./job-poster"


const PAGE_SIZE = 8

type Job = any // swap for your real Job type

function parseDate(iso?: string): number {
  if (!iso) return 0
  const ms = new Date(iso).getTime()
  return isNaN(ms) ? 0 : ms
}

function isPastClosingDate(closingDate?: string): boolean {
  const t = parseDate(closingDate)
  return t > 0 && t < Date.now()
}

export function HomeScreen() {
  const { allJobs, jobsError, retryLoadJobs, openJob, toggleSaved, isSaved } = useApp()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [searchQuery, setSearchQuery] = useState("")
  const [toast, setToast] = useState<string | null>(null)
  const [showTop, setShowTop] = useState(false)
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 1800)
  }, [])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [searchQuery])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
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
        if (isPastClosingDate(job.closingDate)) return false
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
      { rootMargin: "300px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, feedJobs.length])

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-3 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <h1 className="text-2xl font-bold text-foreground">Latest Jobs</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {isLoading ? "Loading jobs…" : jobsError ? "Could not load jobs" : `${feedJobs.length} open roles`}
        </p>
        <div className="relative mt-3 flex items-center">
          <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, company, skills, or city..."
            className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-muted-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 space-y-5 px-4 py-4">
        {jobsError ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <p className="font-semibold text-foreground">We couldn&apos;t load jobs</p>
            <p className="text-sm text-muted-foreground">Check your connection and try again.</p>
            <Button variant="outline" className="mt-2 rounded-xl" onClick={retryLoadJobs}>Try again</Button>
          </div>
        ) : isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] w-full animate-pulse rounded-xl bg-muted" />
          ))
        ) : feedJobs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-semibold text-foreground">No matching jobs</p>
            <p className="text-sm text-muted-foreground">Try different keywords.</p>
          </div>
        ) : (
          <>
            {visibleJobs.map((job: Job) => (
              <PosterCard
                key={job.id}
                job={job}
                saved={isSaved(job.id)}
                onOpen={() => openJob(job.id)}
                onToggleSave={() => toggleSaved(job.id, job)}
                onToast={showToast}
              />
            ))}
            {hasMore ? (
              <div ref={sentinelRef} className="py-4 text-center text-xs text-muted-foreground">Loading more…</div>
            ) : (
              <div className="py-6 text-center text-xs text-muted-foreground">You&apos;re all caught up</div>
            )}
          </>
        )}
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {toast && (
        <div className="fixed bottom-24 left-1/2 z-30 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background shadow-lg">
            <Check className="h-4 w-4" /> {toast}
          </div>
        </div>
      )}
    </div>
  )
}