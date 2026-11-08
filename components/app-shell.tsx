"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { AppProvider, useApp } from "@/components/app-provider"
import { BottomNav } from "@/components/bottom-nav"
import { Toast } from "@/components/toast"
import { OnboardingFlow } from "@/components/onboarding-flow"
import { LoadingScreen } from "@/components/screens/loading-screen"
import { HomeScreen } from "@/components/screens/home-screen"
import { JobsScreen } from "@/components/screens/jobs-screen"
import { SavedScreen } from "@/components/screens/saved-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { JobDetailsScreen } from "@/components/screens/job-details-screen"
import { EditPreferencesScreen } from "@/components/screens/edit-preferences-screen"

export function AppShell() {
  return (
    <AppProvider>
      <ScreenRouter />
    </AppProvider>
  )
}

// Screens that show the persistent bottom navigation.
const TAB_SCREENS = new Set(["home", "jobs", "saved", "profile"])

function ScreenRouter() {
  const { screen, completeOnboarding, goTo, error, clearError } = useApp()
  const [toast, setToast] = useState<string | null>(null)

  // Any save/load failure surfaced via app-provider gets its own error toast,
  // shown on top of whatever screen the user is currently on.
  const errorToast = error && <Toast message={error} onDismiss={clearError} variant="error" />

  // Checking Telegram identity + looking up a saved profile before we know
  // which screen to show.
  if (screen === "checking") {
    return (
      <Frame>
        <div className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-background">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading…</p>
        </div>
        {errorToast}
      </Frame>
    )
  }

  // Full-screen onboarding (triggered from Profile → Edit Preferences flow only).
  // The For You tab uses the embedded inline version instead.
  if (screen === "onboarding") {
    return (
      <Frame>
        <OnboardingFlow
          onComplete={completeOnboarding}
          onExit={() => goTo("jobs")}
        />
        {errorToast}
      </Frame>
    )
  }

  if (screen === "loading") return <Frame>{<LoadingScreen />}</Frame>

  if (screen === "job-details") return <Frame>{<JobDetailsScreen />}</Frame>

  if (screen === "edit-preferences") {
    return (
      <Frame>
        <EditPreferencesScreen onSaved={() => setToast("Preferences updated!")} />
        {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
        {errorToast}
      </Frame>
    )
  }

  // Tabbed screens (Home, For You, Saved, Profile) — all show the bottom nav.
  return (
    <Frame>
      <div className="flex min-h-dvh flex-col">
        <div className="flex flex-1 flex-col">
          {screen === "home" && <HomeScreen />}
          {screen === "jobs" && <JobsScreen />}
          {screen === "saved" && <SavedScreen />}
          {screen === "profile" && <ProfileScreen />}
          {/* Fallback: welcome screen kept in case something routes to it */}
          {screen === "welcome" && <HomeScreen />}
        </div>
        {TAB_SCREENS.has(screen) && <BottomNav />}
      </div>
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
      {errorToast}
    </Frame>
  )
}

// Centers the app to a mobile width on larger screens (Mini Apps are narrow).
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-background shadow-sm">
      {children}
    </div>
  )
}
