"use client"

import React from "react"
import { useApp } from "@/components/app-provider"
import { cn } from "@/lib/utils"
import { t } from "@/lib/translation"

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useApp()

  function handleSelect(newLocale: "km" | "en", e: React.MouseEvent) {
    e.stopPropagation()
    if (locale === newLocale) return
    try {
      const tgHaptic = (window as any)?.Telegram?.WebApp?.HapticFeedback
      tgHaptic?.impactOccurred?.("light")
    } catch {
      // not in telegram
    }
    setLocale(newLocale)
  }

  return (
    <div
      role="group"
      aria-label={t("Language selection", locale)}
      className={cn(
        "inline-flex items-center rounded-full border border-primary/25 bg-card p-1 shadow-sm select-none",
        className,
      )}
    >
      <button
        type="button"
        onClick={(e) => handleSelect("km", e)}
        aria-pressed={locale === "km"}
        aria-label="ខ្មែរ"
        className={cn(
          "flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold transition-all",
          locale === "km"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        <span>ខ្មែរ</span>
      </button>

      <button
        type="button"
        onClick={(e) => handleSelect("en", e)}
        aria-pressed={locale === "en"}
        aria-label="English"
        className={cn(
          "flex min-h-9 items-center rounded-full px-3 text-sm font-semibold transition-all",
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        <span>English</span>
      </button>
    </div>
  )
}
