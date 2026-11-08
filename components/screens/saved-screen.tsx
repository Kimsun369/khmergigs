"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import { JobCard } from "@/components/job-card"

export function SavedScreen() {
  const { telegramUser, savedJobs, openJob, toggleSaved, isSaved, goTo } = useApp()

  // Saved jobs are loaded once at app start (in AppProvider), no fetch here.
  const jobs = savedJobs
  const count = jobs.length

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <h1 className="text-2xl font-bold text-foreground">Saved Jobs</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {count > 0
            ? `${count} job${count > 1 ? "s" : ""} saved`
            : "Jobs you save will appear here"}
        </p>
      </header>

      <div className="flex-1 space-y-3 px-5 py-4">
        {!telegramUser?.id ? (
          <p className="py-10 text-center text-sm text-muted-foreground">Loading…</p>
        ) : count === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-7 w-7 text-muted-foreground" />
            </span>
            <div>
              <p className="font-semibold text-foreground">No saved jobs yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap the heart on any job to save it for later.
              </p>
            </div>
            <Button variant="outline" className="rounded-xl" onClick={() => goTo("jobs")}>
              Browse jobs
            </Button>
          </div>
        ) : (
          jobs.map((job) => (
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