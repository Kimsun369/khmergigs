"use client"

import { useEffect } from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  onDismiss: () => void
  variant?: "success" | "error"
}

export function Toast({ message, onDismiss, variant = "success" }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, variant === "error" ? 4000 : 2400)
    return () => clearTimeout(t)
  }, [onDismiss, variant])

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-5 [padding-top:env(safe-area-inset-top)]"
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-2",
          variant === "error"
            ? "bg-destructive/10 text-destructive"
            : "bg-foreground text-background",
        )}
      >
        {variant === "error" ? (
          <AlertCircle className="h-4 w-4" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-success" />
        )}
        {message}
      </div>
    </div>
  )
}
