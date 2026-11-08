"use client"

import {
  ArrowLeft,
  Bookmark,
  Share2,
  Briefcase,
  MapPin,
  Calendar,
  Check,
  Tag,
  ShieldCheck,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import type { Job } from "@/lib/types"
import { cn, openApplyUrl, shareJob, getCompanyInitials, getCompanyColorIndex, trackEvent } from "@/lib/utils"
import { resolveSource } from "@/lib/sources"
import { SourceBadge } from "@/components/source-badge"
import { t, translateDynamicToKhmer, formatLocationDisplay, formatSalaryDisplay } from "@/lib/translation"
import { LanguageToggle } from "@/components/language-toggle"

// Executive company initials palettes — matching job-card.tsx
const COMPANY_PALETTES = [
  { bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-800 dark:text-slate-200", border: "border-slate-200 dark:border-slate-700" },
  { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-800 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800" },
  { bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-800 dark:text-zinc-200", border: "border-zinc-200 dark:border-zinc-700" },
  { bg: "bg-stone-100 dark:bg-stone-800", text: "text-stone-800 dark:text-stone-200", border: "border-stone-200 dark:border-stone-700" },
  { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-800 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800" },
  { bg: "bg-teal-50 dark:bg-teal-950/40", text: "text-teal-800 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800" },
  { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-800 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800" },
  { bg: "bg-neutral-100 dark:bg-neutral-800", text: "text-neutral-800 dark:text-neutral-200", border: "border-neutral-200 dark:border-neutral-700" },
]

export function JobDetailsScreen() {
  const { selectedJobId, closeJob, toggleSaved, isSaved, allJobs, recommendedJobs, locale } = useApp()
  const [toast, setToast] = useState<string | null>(null)
  const [sharing, setSharing] = useState(false)

  // Look the job up — recommendedJobs first (has match data), then allJobs
  const job: Job | null =
    recommendedJobs.find((j) => j.id === selectedJobId) ??
    allJobs.find((j) => j.id === selectedJobId) ??
    null

  const saved = selectedJobId ? isSaved(selectedJobId) : false
  const [translatedDetails, setTranslatedDetails] = useState<Record<string, string>>({})

  useEffect(() => {
    if (locale !== "km" || !job) {
      setTranslatedDetails({})
      return
    }

    let active = true
    const fields = {
      title: job.title,
      location: job.locationLabel,
      type: job.typeLabel,
      field: job.fieldLabel,
    }
    Promise.all(Object.entries(fields).map(async ([key, value]) => {
      const known = t(value, "km")
      return [key, known !== value ? known : await translateDynamicToKhmer(value)] as const
    })).then((entries) => {
      if (active) setTranslatedDetails(Object.fromEntries(entries))
    })

    return () => { active = false }
  }, [locale, job?.id, job?.title, job?.locationLabel, job?.typeLabel, job?.fieldLabel])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2200)
  }

  async function handleShare() {
    if (!job || sharing) return
    setSharing(true)
    trackEvent("job_shared", { job_id: job.id, job_title: job.title, source: "details" })
    const result = await shareJob(job)
    setSharing(false)
    if (result === "clipboard") showToast(locale === "km" ? "បានចម្លងតំណការងារ" : "Job link & source copied!")
    else if (result === "telegram") showToast(locale === "km" ? "កំពុងបើក Telegram ដើម្បីចែករំលែក..." : "Opening Telegram share...")
    else if (result === "failed") showToast(locale === "km" ? "មិនអាចចែករំលែកបានទេ។ សូមព្យាយាមម្ដងទៀត។" : "Could not share — try again")
  }

  function handleApply() {
    if (!job) return
    trackEvent("job_apply_clicked", { job_id: job.id, job_title: job.title })
    openApplyUrl(job.applyUrl)
  }

  function handleSave() {
    if (!job) return
    trackEvent(saved ? "job_unsaved" : "job_saved", { job_id: job.id, source: "details" })
    toggleSaved(job.id, job)
    showToast(locale === "km" ? (saved ? "បានដកចេញពីការងារដែលបានរក្សាទុក" : "បានរក្សាទុកការងារនេះ") : (saved ? "Removed from saved" : "Saved to your list"))
  }

  if (!selectedJobId || !job) {
    return (
      <div className="flex min-h-dvh flex-col bg-background">
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1rem+env(safe-area-inset-top))]">
          <button
            type="button"
            onClick={closeJob}
            aria-label={t("Back", locale)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-muted-foreground">{t("Job details", locale)}</span>
          <LanguageToggle />
        </header>
        <p className="py-20 text-center text-sm text-muted-foreground">
          {t("We couldn't load this job. Please go back and try again.", locale)}
        </p>
      </div>
    )
  }

  const isGenericCompany = !job.company || job.company === "N/A" || job.company === "Company not listed"
  const displayCompany = isGenericCompany ? t("Company not specified", locale) : job.company
  const avatarIdx = getCompanyColorIndex(job.company)
  const palette = COMPANY_PALETTES[avatarIdx % COMPANY_PALETTES.length]
  const initials = getCompanyInitials(job.company)

  const hasMatchData = "match" in job
  const matchPct = hasMatchData ? Math.round((job as any).match) : null
  const matchedPreferenceCount = hasMatchData ? Number((job as any).matchedPreferenceCount ?? 0) : 0
  const preferenceCount = hasMatchData ? Number((job as any).preferenceCount ?? 0) : 0

  // Centralized source configuration
  const source = resolveSource(job.source, job.applyUrl)

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1rem+env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={closeJob}
          aria-label={t("Back", locale)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors active:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <span className="flex-1 truncate text-sm font-semibold text-foreground px-1">
          {displayCompany}
        </span>
        <LanguageToggle />

      </header>

      <main className="flex-1 px-4 py-5">
        {/* Company Identity Hero */}
        <div className="flex items-start gap-3.5">
          <span
            aria-hidden="true"
            className={cn(
              "flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border text-lg font-bold shadow-2xs",
              palette.bg,
              palette.text,
              palette.border,
            )}
          >
            {initials}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold leading-snug text-foreground text-pretty">
              {locale === "km" ? (translatedDetails.title || job.title) : job.title}
            </h1>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{displayCompany}</p>
          </div>
        </div>

        {/* Match indicator (Transparent & verified) */}
        {matchPct !== null && (
          <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-2xs">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                matchPct >= 80
                  ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200"
                  : matchPct >= 60
                  ? "bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200"
                  : "bg-secondary text-muted-foreground border border-border",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  matchPct >= 80 ? "bg-emerald-500" : matchPct >= 60 ? "bg-amber-500" : "bg-muted-foreground",
                )}
              />
              {locale === "km"
                ? `ត្រូវនឹងជម្រើស ${matchedPreferenceCount} ក្នុងចំណោម ${preferenceCount}`
                : `${matchedPreferenceCount} of ${preferenceCount} selected ${preferenceCount === 1 ? "preference" : "preferences"} ${matchedPreferenceCount === 1 ? "matches" : "match"}`}
            </span>
          </div>
        )}

        {/* Key facts grid */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Fact icon={<MapPin className="h-4 w-4" />} label={t("Location", locale)} value={locale === "km" ? (translatedDetails.location || formatLocationDisplay(job.locationLabel, locale)) : job.locationLabel} locale={locale} />
          <Fact icon={<Briefcase className="h-4 w-4" />} label={t("Job type", locale)} value={locale === "km" ? (translatedDetails.type || t(job.typeLabel, locale)) : job.typeLabel} locale={locale} />
          <Fact
            icon={<span className="text-xs font-bold leading-none">$</span>}
            label={t("Salary", locale)}
            value={formatSalaryDisplay(job.salary && job.salary !== "Negotiable" ? job.salary : undefined, locale)}
            locale={locale}
          />
          <Fact icon={<Tag className="h-4 w-4" />} label={t("Category", locale)} value={locale === "km" ? (translatedDetails.field || t(job.fieldLabel, locale)) : job.fieldLabel} locale={locale} />
        </div>

        {/* Source Attribution Card */}
        {source && (
          <div className="mt-4 rounded-xl border border-border bg-card p-3.5 shadow-2xs">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <SourceBadge source={source} size="md" showLabel={false} />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold text-foreground truncate">
                      {t("Discovered on", locale)} {source.name}
                    </p>
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  </div>
                  {source.description && (
                    <p className="text-[11px] text-muted-foreground truncate">
                      {source.description}
                    </p>
                  )}
                </div>
              </div>
              {source.domain && (
                <span className="shrink-0 text-[11px] font-medium text-muted-foreground">
                  {source.domain}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Skills */}
        {job.skills && (
          <div className="mt-5">
            <SectionTitle>{t("Key Skills", locale)}</SectionTitle>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {job.skills.split(/[,;|]/).map((s: string) => s.trim()).filter(Boolean).map((skill: string) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Summary / description */}
        {job.summary && (
          <Section title={t("About the role", locale)}>
            <p className="leading-relaxed text-sm text-muted-foreground text-pretty">{job.summary}</p>
          </Section>
        )}

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <Section title={t("Responsibilities", locale)}>
            <BulletList items={job.responsibilities} />
          </Section>
        )}

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && (
          <Section title={t("Requirements", locale)}>
            <BulletList items={job.requirements} />
          </Section>
        )}

        {/* Benefits */}
        {job.benefits && job.benefits.length > 0 && (
          <Section title={t("Benefits", locale)}>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((b: string) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Deadline / posted */}
        <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{job.closingDate ? (locale === "km" ? `ផុតកំណត់ ${job.closingDate}` : `Closes ${job.closingDate}`) : (locale === "km" ? `បានប្រកាស ${job.postedAgo}` : `Posted ${job.postedAgo}`)}</span>
        </div>
      </main>

      {/* Footer actions */}
      <footer className="sticky bottom-0 border-t border-border bg-background/95 px-4 py-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleShare}
            disabled={sharing}
            aria-label={t("Share this job", locale)}
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition-colors hover:bg-secondary disabled:opacity-50"
          >
            <Share2 className="h-5 w-5" />
            <span>{t("Share", locale)}</span>
          </button>
          <button type="button" onClick={handleSave} aria-pressed={saved} className={cn("flex h-12 flex-1 items-center justify-center gap-1.5 rounded-xl border text-sm font-semibold transition-colors", saved ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-card text-foreground hover:bg-secondary")}>
            <Bookmark className={cn("h-4 w-4", saved && "fill-current")} />
            <span>{locale === "km" ? (saved ? "បានរក្សាទុក" : "រក្សាទុក") : (saved ? "Saved" : "Save")}</span>
          </button>
          <Button
            size="lg"
            className="h-12 flex-1 rounded-xl text-base font-bold tracking-tight shadow-sm"
            onClick={handleApply}
          >
            {t("Apply Now", locale)}
          </Button>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 z-30 -translate-x-1/2 animate-in fade-in">
          <div className="rounded-full bg-foreground px-4 py-2 text-sm text-background shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
      {children}
    </h2>
  )
}

function Fact({ icon, label, value, locale = "en" }: { icon: React.ReactNode; label: string; value: string; locale?: "en" | "km" }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-card px-3 py-2.5 shadow-2xs">
      <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground leading-snug truncate">
        {value || t("Not specified", locale)}
      </span>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-5">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-2">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  )
}
