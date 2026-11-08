"use client"

import { ArrowLeft, Briefcase, Check, Heart, MapPin, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import type { Job } from "@/lib/types"
import { cn, openApplyUrl } from "@/lib/utils"

export function JobDetailsScreen() {
  const { selectedJobId, closeJob, toggleSaved, isSaved, allJobs, recommendedJobs } = useApp()

  // Look the job up in the in-memory list. Checks recommendedJobs first (has
  // match + matchReason), then falls back to the full allJobs list (e.g. when
  // the user opens a job from the Saved tab).
  const job: Job | null =
    recommendedJobs.find((j) => j.id === selectedJobId) ??
    allJobs.find((j) => j.id === selectedJobId) ??
    null

  const saved = selectedJobId ? isSaved(selectedJobId) : false

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-background/95 px-5 pb-3 backdrop-blur [padding-top:calc(1rem+env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={closeJob}
          aria-label="Back"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium text-muted-foreground">Job details</span>
        {job && (
          <button
            type="button"
            onClick={() => toggleSaved(job.id, job)}
            aria-pressed={saved}
            aria-label={saved ? "Remove from saved jobs" : "Save job"}
            className={cn(
              "ml-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
              saved
                ? "border-destructive/30 bg-destructive/10 text-destructive"
                : "border-border bg-card text-muted-foreground",
            )}
          >
            <Heart className={cn("h-4 w-4", saved && "fill-current")} />
          </button>
        )}
      </header>

      {!selectedJobId || !job ? (
        <p className="py-20 text-center text-sm text-muted-foreground">
          We couldn't load this job. Please go back and try again.
        </p>
      ) : (
        <>
          <main className="flex-1 px-5 py-5">
            <h1 className="text-2xl font-bold leading-tight text-foreground text-balance">
              {job.title}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">{job.company}</p>

            {"match" in job && (
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-success-muted px-3 py-1 text-sm font-semibold text-success">
                {"⭐"} {(job as { match: number }).match}% Match
              </span>
            )}
            {"matchReason" in job && (job as { matchReason?: string }).matchReason && (
              <p className="mt-2 text-sm text-muted-foreground">
                {(job as { matchReason?: string }).matchReason}
              </p>
            )}

            <div className="mt-5 grid grid-cols-3 gap-2">
              <Fact icon={<MapPin className="h-4 w-4" />} label={job.locationLabel} />
              <Fact icon={<Briefcase className="h-4 w-4" />} label={job.typeLabel} />
              <Fact icon={<Wallet className="h-4 w-4" />} label={job.salary || "Not specified"} />
            </div>

            {job.summary && (
              <Section title="About the role">
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {job.summary}
                </p>
              </Section>
            )}

            {job.responsibilities && job.responsibilities.length > 0 && (
              <Section title="Responsibilities">
                <BulletList items={job.responsibilities} />
              </Section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <Section title="Requirements">
                <BulletList items={job.requirements} />
              </Section>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <Section title="Benefits">
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {(job.seniority || job.skills || job.language || job.source) && (
              <Section title="Additional details">
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  {job.seniority && <p>Seniority: {job.seniority}</p>}
                  {job.skills && <p>Skills: {job.skills}</p>}
                  {job.language && <p>Language: {job.language}</p>}
                  {job.source && <p>Source: {job.source}</p>}
                </div>
              </Section>
            )}

            <p className="mt-6 text-xs text-muted-foreground">
              {job.closingDate ? `Closes ${job.closingDate}` : `Posted ${job.postedAgo}`}
            </p>
          </main>

          <footer className="sticky bottom-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur [padding-bottom:calc(1rem+env(safe-area-inset-bottom))]">
            <Button
              size="lg"
              className="h-12 w-full rounded-xl text-base"
              onClick={() => openApplyUrl(job.applyUrl)}
            >
              Apply Now
            </Button>
          </footer>
        </>
      )}
    </div>
  )
}

function Fact({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card px-2 py-3 text-center">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-xs font-medium leading-tight text-foreground text-balance">
        {label}
      </span>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  )
}