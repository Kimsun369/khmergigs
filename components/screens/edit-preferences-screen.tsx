"use client"

import { useApp } from "@/components/app-provider"
import { OnboardingFlow } from "@/components/onboarding-flow"
import type { Preferences } from "@/lib/types"

interface EditPreferencesScreenProps {
  onSaved: () => void
}

export function EditPreferencesScreen({ onSaved }: EditPreferencesScreenProps) {
  const { preferences, savePreferences, goTo } = useApp()

  async function handleComplete(prefs: Preferences) {
    try {
      await savePreferences(prefs)
      onSaved()
    } catch {
      // savePreferences already recorded a user-facing error via context;
      // just avoid showing the "Preferences updated!" success toast here.
    }
  }

  return (
    <OnboardingFlow
      initial={preferences}
      submitLabel="Save & refresh jobs"
      onComplete={handleComplete}
      onExit={() => goTo("profile")}
    />
  )
}
