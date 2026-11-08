"use client"

import { useEffect, useState } from "react"
import { Bookmark, Share2, Check, Wallet, ExternalLink, Building2, MapPin, Briefcase, Layers3, Award, Languages, CalendarDays, Tags } from "lucide-react"
import type { ReactNode } from "react"
import type { Job, RecommendedJob } from "@/lib/types"
import { cn, getCompanyInitials, getCompanyColorIndex, openApplyUrl, shareJob, trackEvent } from "@/lib/utils"
import { resolveSource } from "@/lib/sources"
import { SourceBadge } from "@/components/source-badge"
import { SourceLogoIcon } from "@/components/source-logos"
import { useApp } from "@/components/app-provider"
import { formatLocationDisplay, formatSalaryDisplay, t, translateDynamicToKhmer } from "@/lib/translation"

// Clean filter for placeholder strings
const PLACEHOLDER_RE =
  /^(unknown|n\/a|na|none|null|undefined|general|not specified|not listed|company not listed|not available|tbd|-+)$/i

function cleanText(val?: string | null): string | undefined {
  if (!val) return undefined
  const trimmed = val.trim()
  return trimmed && !PLACEHOLDER_RE.test(trimmed) ? trimmed : undefined
}

function formatPostedLabel(value: string, locale: "en" | "km", postedAt?: string) {
  if (postedAt) {
    const timestamp = new Date(postedAt).getTime()
    const ageDays = Number.isFinite(timestamp) ? Math.floor((Date.now() - timestamp) / 86_400_000) : -1
    if (ageDays > 1) {
      return new Date(timestamp).toLocaleDateString(locale === "km" ? "km-KH" : "en-GB", {
        day: "numeric",
        month: "short",
      })
    }
  }
  if (locale === "en") return value
  const known: Record<string, string> = {
    Closed: "ផុតកំណត់",
    Recently: "ថ្មីៗនេះ",
    Today: "ថ្ងៃនេះ",
    Yesterday: "ម្សិលមិញ",
  }
  if (known[value]) return known[value]

  const relative = value.match(/^(\d+)\s+(minute|hour|day|week|month)s?\s+ago$/i)
  if (!relative) return value
  const units: Record<string, string> = {
    minute: "នាទី",
    hour: "ម៉ោង",
    day: "ថ្ងៃ",
    week: "សប្ដាហ៍",
    month: "ខែ",
  }
  return `${relative[1]} ${units[relative[2].toLowerCase()]}មុន`
}

function formatDateLabel(value: string | undefined, locale: "en" | "km") {
  if (!value) return undefined
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) return value
  return date.toLocaleDateString(locale === "km" ? "km-KH" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function JobInfo({ icon, label, value, className }: { icon: ReactNode; label: string; value: string; className?: string }) {
  return (
    <div className={cn("flex min-w-0 items-start gap-2.5", className)}>
      <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">{icon}</span>
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 break-words text-[15px] font-medium leading-snug text-foreground">{value}</p>
      </div>
    </div>
  )
}

// 8 restrained, executive avatar palettes for company initials
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

function CompanyAvatar({ company, sourceId }: { company?: string; sourceId?: string }) {
  if (sourceId) {
    return (
      <SourceLogoIcon sourceId={sourceId} size={48} className="rounded-lg" />
    )
  }

  if (!company) {
    return (
      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground shadow-2xs">
        <Building2 className="h-5 w-5" />
      </span>
    )
  }

  const name = company ?? ""
  const initials = getCompanyInitials(name)
  const colorIdx = getCompanyColorIndex(name)
  const palette = COMPANY_PALETTES[colorIdx % COMPANY_PALETTES.length]

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-xl border text-[13px] font-bold tracking-tight shadow-2xs transition-transform group-hover:scale-[1.02]",
        palette.bg,
        palette.text,
        palette.border,
      )}
    >
      {initials}
    </span>
  )
}

function haptic(type: "light" | "success" = "light") {
  try {
    const tgHaptic = (window as any)?.Telegram?.WebApp?.HapticFeedback
    if (tgHaptic) {
      type === "success" ? tgHaptic.notificationOccurred("success") : tgHaptic.impactOccurred("light")
    }
  } catch {
    // not in Telegram WebApp
  }
}

export interface JobCardProps {
  job: Job | RecommendedJob
  saved: boolean
  onToggleSave: () => void
  onToast?: (msg: string) => void
  isExpired?: boolean
  index?: number
}

export function JobCard({
  job,
  saved,
  onToggleSave,
  onToast,
  isExpired = false,
  index,
}: JobCardProps) {
  const [copied, setCopied] = useState(false)
  const [translated, setTranslated] = useState<Record<string, string>>({})
  const { locale } = useApp()
  const notProvided = t("Not provided", locale)

  // Clean data fields
  const company = cleanText(job.company)
  const rawLocation = cleanText(job.locationLabel)
  const location = rawLocation ? formatLocationDisplay(rawLocation, locale) : notProvided
  const type = cleanText(job.typeLabel)
  const field = cleanText(job.fieldLabel)
  const seniority = cleanText(job.seniority)
  const salary = cleanText(job.salary)
  const posted = isExpired ? "Closed" : (cleanText(job.postedAgo) ?? "Recently")
  const closingDate = formatDateLabel(cleanText(job.closingDate), locale)
  const fetchedDate = formatDateLabel(cleanText(job.fetchedAt), locale)
  const skills = cleanText(job.skills)?.split(/[,;|]/).map((skill) => skill.trim()).filter(Boolean) ?? []
  const translatedSkills = skills.map((_, index) => translated[`skill_${index}`] ?? "")
  const language = cleanText(job.language)

  // Centralized source configuration (verified from API dataset)
  const source = resolveSource(job.source, job.applyUrl)
  const sourceUrl = job.applyUrl?.trim() || source?.telegramUrl || (source?.domain ? `https://${source.domain}` : "")

  useEffect(() => {
    if (locale !== "km") {
      setTranslated({})
      return
    }

    let active = true
    const fields = {
      title: job.title,
      location: rawLocation ?? "",
      type: type ?? "",
      field: field ?? "",
      seniority: seniority ?? "",
      language: language ?? "",
      ...Object.fromEntries(skills.map((skill, index) => [`skill_${index}`, skill])),
    }

    const translate = async (value: string) => {
      if (!value) return ""
      const curated = t(value, "km")
      return curated !== value ? curated : translateDynamicToKhmer(value)
    }

    Promise.all(Object.entries(fields).map(async ([key, value]) => [key, await translate(value)] as const))
      .then((entries) => {
        if (active) setTranslated(Object.fromEntries(entries))
      })

    return () => { active = false }
  }, [locale, job.title, rawLocation, job.skills, type, field, seniority, language])

  async function handleShare(e: React.MouseEvent) {
    e.stopPropagation()
    trackEvent("job_shared", { job_id: job.id, job_title: job.title })
    haptic("light")

    const result = await shareJob(job)
    if (result === "clipboard") {
      setCopied(true)
      haptic("success")
      onToast?.(locale === "km" ? "បានចម្លងព័ត៌មានការងារ និងតំណភ្ជាប់" : "Job details & link copied!")
      setTimeout(() => setCopied(false), 2000)
    } else if (result === "telegram") {
      haptic("success")
      onToast?.(locale === "km" ? "កំពុងបើក Telegram ដើម្បីចែករំលែក..." : "Opening Telegram share...")
    } else if (result === "failed") {
      onToast?.(locale === "km" ? "មិនអាចចែករំលែកបានទេ។ សូមព្យាយាមម្ដងទៀត។" : "Could not share. Please try again.")
    }
  }

  function handleSave(e: React.MouseEvent) {
    e.stopPropagation()
    trackEvent(saved ? "job_unsaved" : "job_saved", { job_id: job.id, job_title: job.title })
    haptic("light")
    onToggleSave()
    onToast?.(locale === "km" ? (saved ? "បានដកចេញពីការងារដែលបានរក្សាទុក" : "បានរក្សាទុកការងារនេះ") : (saved ? "Removed from saved" : "Saved to your list"))
  }

  function handleOpenSource(e: React.MouseEvent) {
    e.stopPropagation()
    if (!sourceUrl) {
      onToast?.(locale === "km" ? "មិនមានតំណភ្ជាប់ទៅប្រភពការងារនេះទេ" : "No source link is available for this job.")
      return
    }
    trackEvent("job_source_opened", { job_id: job.id, job_title: job.title, source: source?.id })
    openApplyUrl(sourceUrl)
  }

  return (
    <article
      style={index !== undefined ? { animationDelay: `${Math.min(index, 5) * 40}ms` } : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all duration-200",
        "hover:border-primary/35 hover:shadow-md",
        isExpired && "opacity-60",
      )}
    >
      {/* ── 1. Job Title: the first and most prominent card element ── */}
      <div className="-mx-1 rounded-r-xl border-l-4 border-primary bg-primary/5 px-3 py-2 transition-colors group-hover:bg-primary/10">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">{t("Hiring:", locale)}</p>
        <h3 className="line-clamp-2 text-xl font-bold leading-snug text-foreground text-pretty">
          {locale === "km" ? (translated.title || job.title) : job.title}
        </h3>
      </div>

      {/* ── 2. Job Source & Save Action ── */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <CompanyAvatar company={company} sourceId={source?.id} />
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted-foreground">{t("Source", locale)}</p>
            <p className="mt-0.5 truncate text-sm font-semibold leading-snug tracking-tight text-foreground">
              {source ? <SourceBadge source={source} size="sm" showLogo={false} /> : notProvided}
            </p>
          </div>
        </div>

        {/* Save/Bookmark action */}
        <button
          type="button"
          onClick={handleSave}
          aria-pressed={saved}
          aria-label={locale === "km" ? (saved ? "ដកចេញពីការងារដែលបានរក្សាទុក" : "រក្សាទុកការងារនេះ") : (saved ? "Remove from saved jobs" : "Save this job")}
          className={cn(
            "flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border px-3 text-sm font-semibold transition-all active:scale-95",
            saved
              ? "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300"
              : "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
          )}
        >
          <Bookmark className={cn("h-4 w-4 transition-transform", saved && "fill-current")} />
          <span>{locale === "km" ? (saved ? "បានរក្សាទុក" : "រក្សាទុកការងារ") : (saved ? "Saved" : "Save job")}</span>
        </button>
      </div>

      {/* Location and salary are the most prominent facts after the title. */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="min-w-0 rounded-xl border border-primary/20 bg-primary/5 p-3">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-xs font-semibold">{t("Location", locale)}</p>
          </div>
          <p className="mt-1.5 break-words text-[15px] font-semibold leading-snug text-foreground">
            {locale === "km" ? (translated.location || location) : location}
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-emerald-200/80 bg-emerald-50/80 p-3 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-100">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Wallet className="h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-xs font-semibold">{t("Salary", locale)}</p>
          </div>
          <p className="mt-1.5 break-words text-[15px] font-bold leading-snug tabular-nums tracking-tight">
            {salary ? formatSalaryDisplay(salary, locale) : notProvided}
          </p>
        </div>
      </div>

      {/* Clearly labeled job facts: the location, sector, and terms are visible without opening the job. */}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 rounded-xl bg-secondary/35 p-3.5">
        <JobInfo className="col-span-2" icon={<Building2 className="h-4 w-4" />} label={t("Organisation", locale)} value={company ?? notProvided} />
        <JobInfo icon={<Layers3 className="h-4 w-4" />} label={t("Sector", locale)} value={field ? (locale === "km" ? (translated.field || t(field, locale)) : field) : notProvided} />
        <JobInfo icon={<Briefcase className="h-4 w-4" />} label={t("Job Type", locale)} value={type ? (locale === "km" ? (translated.type || t(type, locale)) : type) : notProvided} />
        <JobInfo icon={<Award className="h-4 w-4" />} label={t("Seniority", locale)} value={seniority ? (locale === "km" ? (translated.seniority || seniority) : seniority) : notProvided} />
        <JobInfo icon={<Languages className="h-4 w-4" />} label={t("Languages Required", locale)} value={language ? (locale === "km" ? (translated.language || language) : language) : notProvided} />
        <JobInfo icon={<CalendarDays className="h-4 w-4" />} label={t("Closing Date", locale)} value={closingDate ?? notProvided} />
        <JobInfo icon={<CalendarDays className="h-4 w-4" />} label={t("Added", locale)} value={fetchedDate ?? notProvided} />
        <div className="col-span-2 min-w-0">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Tags className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="text-[13px] font-medium">{t("Skills", locale)}</span>
          </div>
          {skills.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span key={`${skill}-${index}`} className="rounded-md border border-border bg-card px-2 py-1 text-sm leading-snug text-foreground">
                  {locale === "km" ? (translatedSkills[index] || skill) : skill}
                </span>
              ))}
            </div>
          ) : <p className="mt-0.5 text-[15px] font-medium text-foreground">{notProvided}</p>}
        </div>
      </div>

      {/* ── 6. Footer: Source Attribution & 1-Tap Share ── */}
      <div className="mt-3.5 border-t border-border/60 pt-3">
        <div className="flex min-w-0 justify-end">
          <span className="shrink-0 text-xs text-muted-foreground">
            {t("Posted", locale)}: {formatPostedLabel(posted, locale, job.postedAt)}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleOpenSource}
            disabled={!sourceUrl}
            className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-primary px-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{t("View original job", locale)}</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleShare}
            aria-label={locale === "km" ? "ចែករំលែកការងារនេះ" : "Share this job"}
            title={locale === "km" ? "ចែករំលែកការងារនេះ" : "Share this job"}
            className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 px-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/10 active:scale-[0.99]"
          >
            {copied ? <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="h-4 w-4 shrink-0" />}
            <span>{locale === "km" ? (copied ? "បានចម្លង" : "ចែករំលែក") : (copied ? "Copied" : "Share job")}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

/**
 * Skeleton placeholder with identical visual silhouette
 */
export function JobCardSkeleton() {
  const pulse = "animate-pulse rounded bg-muted"
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      {/* Hiring label and job title */}
      <div className="-mx-1 rounded-r-xl border-l-4 border-primary/30 bg-primary/5 px-3 py-2">
        <div className={cn(pulse, "mb-2 h-3 w-16")} />
        <div className={cn(pulse, "h-6 w-4/5")} />
      </div>

      {/* Organization and save button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 animate-pulse rounded-lg bg-muted" />
          <div className="space-y-1.5">
            <div className={cn(pulse, "h-3.5 w-28")} />
            <div className={cn(pulse, "h-3 w-16")} />
          </div>
        </div>
        <div className="h-9 w-9 animate-pulse rounded-xl bg-muted" />
      </div>

      {/* Highlighted location and salary */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-border p-3">
          <div className={cn(pulse, "h-4 w-16")} />
          <div className={cn(pulse, "mt-2 h-5 w-4/5")} />
        </div>
        <div className="rounded-xl border border-border p-3">
          <div className={cn(pulse, "h-4 w-14")} />
          <div className={cn(pulse, "mt-2 h-5 w-3/4")} />
        </div>
      </div>

      {/* Job facts */}
      <div className="mt-4 rounded-xl bg-secondary/35 p-3.5">
        <div className="grid grid-cols-2 gap-4">
          <div className={cn(pulse, "h-10 w-full")} />
          <div className={cn(pulse, "h-10 w-full")} />
          <div className={cn(pulse, "h-10 w-full")} />
          <div className={cn(pulse, "h-10 w-full")} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <div className={cn(pulse, "h-7 w-20 rounded-md")} />
          <div className={cn(pulse, "h-7 w-24 rounded-md")} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 flex items-center justify-between border-t border-border/60 pt-3">
        <div className={cn(pulse, "h-4 w-32")} />
        <div className={cn(pulse, "h-8 w-16 rounded-lg")} />
      </div>
    </div>
  )
}
