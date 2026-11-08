"use client"

import { Briefcase, Heart, LayoutGrid, MapPin, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/app-provider"
import { FIELDS, JOB_TYPES, LOCATIONS, labelFor } from "@/lib/options"

export function ProfileScreen() {
  const { preferences, editPreferences, savedJobIds, telegramUser, goTo } = useApp()

  const name = telegramUser
    ? [telegramUser.first_name, telegramUser.last_name].filter(Boolean).join(" ")
    : "Guest"
  const initial = (telegramUser?.first_name ?? "G").charAt(0).toUpperCase()

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]">
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
      </header>

      <div className="flex-1 space-y-6 px-5 py-5">
        {/* identity */}
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {initial}
          </span>
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold text-foreground">{name}</p>
            <p className="truncate text-sm text-muted-foreground">
              {telegramUser?.username
                ? `@${telegramUser.username}`
                : "Signed in via Telegram"}
            </p>
          </div>
        </div>

        {/* preferences */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              My Preferences
            </h2>
          </div>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            <PrefRow
              icon={<Briefcase className="h-4 w-4" />}
              label="Job type"
              value={labelFor(JOB_TYPES, preferences.jobType)}
            />
            <PrefRow
              icon={<LayoutGrid className="h-4 w-4" />}
              label="Field"
              value={labelFor(FIELDS, preferences.field)}
            />
            <PrefRow
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={labelFor(LOCATIONS, preferences.location)}
            />
          </div>
          <Button
            className="mt-4 h-12 w-full rounded-xl text-base"
            onClick={editPreferences}
          >
            <Pencil className="mr-1.5 h-4 w-4" />
            Edit Preferences
          </Button>
        </section>

        {/* saved shortcut */}
        <button
          type="button"
          onClick={() => goTo("saved")}
          className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Heart className="h-4 w-4" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-medium text-card-foreground">
              Saved jobs
            </span>
            <span className="block text-sm text-muted-foreground">
              {savedJobIds.length} saved
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

function PrefRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        {icon}
      </span>
      <span className="flex-1 text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}
