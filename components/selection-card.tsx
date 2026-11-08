"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectionCardProps {
  emoji: string
  label: string
  selected: boolean
  onSelect: () => void
  /** compact grid variant used for the field question */
  compact?: boolean
}

export function SelectionCard({
  emoji,
  label,
  selected,
  onSelect,
  compact = false,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-2xl border bg-card text-left transition-all",
        "active:scale-[0.98]",
        compact ? "flex-col items-start gap-2 p-4" : "p-4",
        selected
          ? "border-primary ring-2 ring-primary/25"
          : "border-border hover:border-primary/40",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl bg-secondary text-2xl",
          compact ? "h-11 w-11" : "h-12 w-12",
        )}
      >
        {emoji}
      </span>
      <span
        className={cn(
          "font-medium leading-snug text-card-foreground text-pretty",
          compact ? "text-sm" : "text-base",
        )}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full border transition-all",
          compact ? "absolute right-3 top-3" : "ml-auto",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-transparent text-transparent",
        )}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    </button>
  )
}
