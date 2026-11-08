"use client"

import { Bookmark, Home, Sparkles, User } from "lucide-react"
import { useApp, type Screen } from "@/components/app-provider"
import { cn } from "@/lib/utils"
import { t } from "@/lib/translation"

const TABS: { screen: Screen; label: string; icon: typeof Home }[] = [
  { screen: "home", label: "Home", icon: Home },
  { screen: "jobs", label: "For You", icon: Sparkles },
  { screen: "saved", label: "Saved", icon: Bookmark },
  { screen: "profile", label: "Profile", icon: User },
]

export function BottomNav() {
  const { screen, goTo, savedJobIds, locale } = useApp()

  return (
    <nav
      aria-label={locale === "km" ? "ម៉ឺនុយសំខាន់" : "Primary navigation"}
      className="sticky bottom-0 z-20 border-t border-border bg-background/97 backdrop-blur-md [padding-bottom:env(safe-area-inset-bottom)]"
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
                  "flex w-full flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="relative">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full transition-all",
                      active && "bg-primary/10",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-all",
                        active && tab.screen === "saved" && "fill-current",
                      )}
                    />
                  </span>
                  {tab.screen === "saved" && savedJobIds.length > 0 && (
                    <span className="absolute -right-2 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                      {savedJobIds.length > 99 ? "99+" : savedJobIds.length}
                    </span>
                  )}
                </span>
                {t(tab.label, locale)}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
