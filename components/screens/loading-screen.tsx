"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { useApp } from "@/components/app-provider"

export function LoadingScreen() {
  const { finishLoading } = useApp()

  // Simulate the recommendation request completing, then move to the jobs list.
  useEffect(() => {
    const t = setTimeout(finishLoading, 1600)
    return () => clearTimeout(t)
  }, [finishLoading])

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background px-8 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/15" />
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Loader2 className="h-7 w-7 animate-spin text-primary" />
        </span>
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground">Finding jobs for you…</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Matching your preferences to open roles
        </p>
      </div>
    </div>
  )
}
