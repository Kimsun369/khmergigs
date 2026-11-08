"use client"

import { Heart, Home, Sparkles, User } from "lucide-react"
import { useApp, type Screen } from "@/components/app-provider"
import { cn } from "@/lib/utils"

const TABS: { screen: Screen; label: string; icon: typeof Home }[] = [
  { screen: "home", label: "Home", icon: Home },
  { screen: "jobs", label: "For You", icon: Sparkles },
  { screen: "saved", label: "Saved", icon: Heart },
  { screen: "profile", label: "Profile", icon: User },
]

export function BottomNav() {
  const { screen, goTo, savedJobIds } = useApp()

  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-20 border-t border-border bg-background/95 backdrop-blur [padding-bottom:env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto flex max-w-md items-stretch">
        {TABS.map((tab) => {
          const active = screen === tab.screen
          const Icon = tab.icon
          return (
            <li key={tab.screen} className="flex-1">
              <button
                type="button"
                onClick={() => goTo(tab.screen)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex w-full flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span className="relative">
                  <Icon
                    className={cn("h-5 w-5", active && tab.screen === "saved" && "fill-current")}
                  />
                  {tab.screen === "saved" && savedJobIds.length > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                      {savedJobIds.length}
                    </span>
                  )}
                </span>
                {tab.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
