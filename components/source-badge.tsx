"use client"

import React from "react"
import type { SourceConfig } from "@/lib/sources"
import { SourceLogoIcon } from "@/components/source-logos"
import { cn } from "@/lib/utils"

interface SourceBadgeProps {
  source: SourceConfig
  className?: string
  showLabel?: boolean
  showLogo?: boolean
  size?: "sm" | "md"
}

export function SourceBadge({
  source,
  className,
  showLabel = true,
  showLogo = true,
  size = "sm",
}: SourceBadgeProps) {
  const iconPx = size === "sm" ? 38 : 48

  return (
    <span
      className={cn(
        "inline-flex min-w-0 items-center gap-2 align-middle select-none",
        className,
      )}
    >
      {showLogo && <SourceLogoIcon sourceId={source.id} size={iconPx} />}

      {/* Verified source name */}
      {showLabel && (
        <span className="max-w-36 truncate text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
          {source.name}
        </span>
      )}
    </span>
  )
}
