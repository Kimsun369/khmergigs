"use client"

import { Briefcase, Bookmark, LayoutGrid, MapPin, Pencil, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import { FIELDS, JOB_TYPES, LOCATIONS, labelFor } from "@/lib/options"
import { trackEvent } from "@/lib/utils"
import { t } from "@/lib/translation"
import { LanguageToggle } from "@/components/language-toggle"

export function ProfileScreen() {
  const { preferences, editPreferences, savedJobIds, telegramUser, goTo, locale } = useApp()

  const name = telegramUser
    ? [telegramUser.first_name, telegramUser.last_name].filter(Boolean).join(" ")
    : t("Guest", locale)
  const initial = (telegramUser?.first_name ?? "G").charAt(0).toUpperCase()

  const hasPreferences =
    preferences.jobType !== null ||
    preferences.field !== null ||
    preferences.location !== null

  function handleEditPreferences() {
    trackEvent("preferences_edit_opened", { source: "profile" })
    editPreferences()
  }

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 pb-3 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-foreground">{t("Profile", locale)}</h1>
          <LanguageToggle />
        </div>
      </header>

      <div className="flex-1 space-y-5 px-4 py-5">
        {/* Identity card */}
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4">
          {telegramUser?.photo_url ? (
            <img
              src={telegramUser.photo_url}
              alt=""
              referrerPolicy="no-referrer"
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              {initial}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-card-foreground">{name}</p>
            <p className="truncate text-sm text-muted-foreground">
              {telegramUser?.username
                ? `@${telegramUser.username}`
                : telegramUser
                ? t("Telegram username unavailable", locale)
                : t("Guest — no Telegram session", locale)}
            </p>
          </div>
        </div>

        {/* Preferences section */}
        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("My Preferences", locale)}
            </h2>
            {!hasPreferences && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                {t("Not set", locale)}
              </span>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">
            <PrefRow
              icon={<Briefcase className="h-4 w-4" />}
              label={t("Job type", locale)}
              value={t(labelFor(JOB_TYPES, preferences.jobType), locale)}
              locale={locale}
            />
            <PrefRow
              icon={<LayoutGrid className="h-4 w-4" />}
              label={t("Field", locale)}
              value={t(labelFor(FIELDS, preferences.field), locale)}
              locale={locale}
            />
            <PrefRow
              icon={<MapPin className="h-4 w-4" />}
              label={t("Location", locale)}
              value={t(labelFor(LOCATIONS, preferences.location), locale)}
              locale={locale}
            />
          </div>

          <Button
            className="mt-3 h-11 w-full rounded-xl text-sm font-semibold"
            onClick={handleEditPreferences}
          >
            <Pencil className="mr-1.5 h-4 w-4" />
            {t(hasPreferences ? "Edit Preferences" : "Set Preferences", locale)}
          </Button>
        </section>

        {/* Saved jobs shortcut */}
        <button
          type="button"
          onClick={() => goTo("saved")}
          className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 text-left transition-colors active:bg-secondary/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Bookmark className="h-4 w-4 fill-current" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-card-foreground">
              {t("Saved jobs", locale)}
            </span>
            <span className="block text-xs text-muted-foreground">
              {savedJobIds.length > 0
                ? locale === "km" ? `បានរក្សាទុកការងារ ${savedJobIds.length}` : `${savedJobIds.length} job${savedJobIds.length !== 1 ? "s" : ""} saved`
                : t("No saved jobs yet", locale)}
            </span>
          </span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* App info */}
        <div className="rounded-2xl border border-border bg-card px-4 py-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            {t("About KhmerGigs", locale)}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("KhmerGigs helps people in Cambodia discover job opportunities quickly. Answer a few questions and get matched to roles that fit your preferences. 🇰🇭", locale)}
          </p>
        </div>
      </div>
    </div>
  )
}

function PrefRow({
  icon,
  label,
  value,
  locale,
}: {
  icon: React.ReactNode
  label: string
  value: string
  locale: "en" | "km"
}) {
  const isSet = value !== t("Not set", locale)
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        {icon}
      </span>
      <span className="flex-1 text-sm text-muted-foreground">{label}</span>
      <span className={`text-sm font-medium ${isSet ? "text-foreground" : "text-muted-foreground/60"}`}>
        {value}
      </span>
    </div>
  )
}
