"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import type { Job, Preferences, RecommendedJob } from "@/lib/types"
import {
  getEffectiveTelegramUser,
  initTelegram,
  type TelegramUser,
} from "@/lib/telegram"
import {
  getAllJobs,
  getRecommendations,
  getSavedJobs,
  getUserProfile,
  saveUserPreferences,
} from "@/lib/api"
import {
  hasSavedJobsInStorage,
  loadPreferences,
  loadSavedJobIds,
  savePreferencesToStorage,
  saveSavedJobIds,
} from "@/lib/storage"

export type Screen =
  | "checking"
  | "home"
  | "welcome"
  | "onboarding"
  | "loading"
  | "jobs"
  | "saved"
  | "profile"
  | "job-details"
  | "edit-preferences"

interface AppState {
  screen: Screen
  preferences: Preferences
  savedJobIds: string[]
  savedJobs: Job[]
  recommendedJobs: Job[]
  setRecommendedJobs: (jobs: Job[]) => void
  allJobs: Job[]
  selectedJobId: string | null
  telegramUser: TelegramUser | null
  error: string | null
  jobsError: string | null
  retryLoadJobs: () => void
  goTo: (screen: Screen) => void
  startOnboarding: () => void
  completeOnboarding: (prefs: Preferences) => Promise<void>
  editPreferences: () => void
  savePreferences: (prefs: Preferences) => Promise<void>
  finishLoading: () => void
  openJob: (id: string) => void
  closeJob: () => void
  isSaved: (id: string) => boolean
  toggleSaved: (id: string, job?: Job) => void
  clearError: () => void
}

const AppContext = createContext<AppState | null>(null)

const EMPTY_PREFS: Preferences = { jobType: null, field: null, location: null }

export function AppProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>("checking")
  const [preferences, setPreferences] = useState<Preferences>(EMPTY_PREFS)
  const [savedJobIds, setSavedJobIds] = useState<string[]>([])
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([])
  const [allJobs, setAllJobs] = useState<Job[]>([])
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null)
  const [previousScreen, setPreviousScreen] = useState<Screen>("home")
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [jobsError, setJobsError] = useState<string | null>(null)

  // ── Derived: savedJobs = full Job objects for saved ids ─────────────────────
  // Computed from allJobs + savedJobIds so the Saved tab is always consistent.
  const savedJobs = useMemo<Job[]>(
    () => allJobs.filter((j) => savedJobIds.includes(j.id)),
    [allJobs, savedJobIds],
  )

  // ── Dedup guard: prevent double n8n saves within 10 s ───────────────────────
  const lastSaveRef = useRef<{ key: string; at: number } | null>(null)
  const isDuplicateSave = useCallback((prefs: Preferences) => {
    const key = JSON.stringify(prefs)
    const last = lastSaveRef.current
    if (last && last.key === key && Date.now() - last.at < 10_000) return true
    lastSaveRef.current = { key, at: Date.now() }
    return false
  }, [])

  // ── Load all jobs and compute recommendations ────────────────────────────────
  const loadJobs = useCallback(async (prefs: Preferences) => {
    try {
      setJobsError(null)
      const [jobs, recs] = await Promise.all([
        getAllJobs(),
        getRecommendations(prefs),
      ])
      setAllJobs(jobs)
      setRecommendedJobs(recs)
    } catch (err) {
      console.error("[provider] loadJobs failed", err)
      setJobsError("We couldn't load recommendations right now. Please try again.")
    }
  }, [])

  const retryLoadJobs = useCallback(() => {
    loadJobs(preferences)
  }, [loadJobs, preferences])

  // ── App initialisation ───────────────────────────────────────────────────────
  // Use a ref to prevent double-execution in React StrictMode.
  const initStarted = useRef(false)

  useEffect(() => {
    if (initStarted.current) return
    initStarted.current = true

    let cancelled = false

    async function init() {
      initTelegram()
      const user = getEffectiveTelegramUser()
      if (cancelled) return
      setTelegramUser(user)

      // Always land on Home regardless of whether the user has preferences or not.
      // Jobs start loading immediately; the For You tab shows onboarding inline
      // if no preferences are found.

      if (!user) {
        // No Telegram user (browser preview, etc.) — still go to Home.
        setScreen("home")
        void loadJobs(EMPTY_PREFS)
        return
      }

      // ── Step 1: try local storage for preferences ──────────────────────────
      const storedPrefs = await loadPreferences()
      if (cancelled) return

      if (storedPrefs) {
        // Fast path: we have local prefs → go straight to home, zero n8n calls.
        setPreferences(storedPrefs)

        // Load saved job ids from storage in parallel with jobs fetch.
        const storedIds = await loadSavedJobIds()
        if (!cancelled && storedIds !== null) setSavedJobIds(storedIds)

        setScreen("home")
        void loadJobs(storedPrefs)
        return
      }

      // ── Step 2: no local prefs → one-time migration from n8n ──────────────
      const profile = await getUserProfile(user.id)
      if (cancelled) return

      const hasSavedPrefs =
        profile && (profile.job_type || profile.field || profile.location)

      if (hasSavedPrefs && profile) {
        const prefs: Preferences = {
          jobType: profile.job_type,
          field: profile.field,
          location: profile.location,
        }
        setPreferences(prefs)
        // Persist for future sessions (no more n8n profile calls).
        void savePreferencesToStorage(prefs)
        setScreen("home")
        void loadJobs(prefs)
      } else {
        // New user with no preferences — land on Home; For You tab shows onboarding.
        setScreen("home")
        void loadJobs(EMPTY_PREFS)
      }

      // ── Step 3: one-time migration of saved jobs (parallel) ───────────────
      // Only run if storage has no saved_count key yet.
      const hasSaved = await hasSavedJobsInStorage()
      if (cancelled || hasSaved) return

      const legacyJobs = await getSavedJobs(user.id)
      if (cancelled) return
      const legacyIds = legacyJobs.map((j) => j.id)
      setSavedJobIds(legacyIds)
      void saveSavedJobIds(legacyIds) // write to storage; never call getSavedJobs again
    }

    init()
    return () => {
      cancelled = true
    }
  }, [loadJobs])

  // ── Navigation helpers ───────────────────────────────────────────────────────

  const goTo = useCallback((next: Screen) => setScreen(next), [])

  const startOnboarding = useCallback(() => setScreen("onboarding"), [])

  const completeOnboarding = useCallback(
    async (prefs: Preferences) => {
      setPreferences(prefs)
      // Write to storage immediately so next open is instant.
      void savePreferencesToStorage(prefs)
      setScreen("loading")
      if (isDuplicateSave(prefs)) return
      // Fire n8n in the background; don't block the loading screen.
      try {
        await saveUserPreferences(prefs, telegramUser?.id, telegramUser ?? undefined)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Couldn't save your preferences.")
      }
    },
    [telegramUser, isDuplicateSave],
  )

  const savePreferences = useCallback(
    async (prefs: Preferences) => {
      setPreferences(prefs)
      // Write to storage immediately.
      void savePreferencesToStorage(prefs)
      setScreen("loading")
      if (isDuplicateSave(prefs)) return
      // Background n8n call; don't block the UI.
      try {
        await saveUserPreferences(prefs, telegramUser?.id, telegramUser ?? undefined)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Couldn't save your preferences.")
        throw err
      }
    },
    [telegramUser, isDuplicateSave],
  )

  const editPreferences = useCallback(() => setScreen("edit-preferences"), [])

  const finishLoading = useCallback(() => {
    // Recompute recommendations with the (possibly new) preferences.
    void loadJobs(preferences)
    setScreen("jobs")
  }, [loadJobs, preferences])

  const openJob = useCallback((id: string) => {
    setSelectedJobId(id)
    setScreen((current) => {
      if (current !== "job-details") setPreviousScreen(current)
      return "job-details"
    })
  }, [])

  const closeJob = useCallback(() => {
    setSelectedJobId(null)
    setScreen(previousScreen)
  }, [previousScreen])

  const clearError = useCallback(() => setError(null), [])

  const isSaved = useCallback((id: string) => savedJobIds.includes(id), [savedJobIds])

  const toggleSaved = useCallback(
    (id: string) => {
      setSavedJobIds((prev) => {
        const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        // Persist outside the state updater to avoid side effects inside it.
        void saveSavedJobIds(next)
        return next
      })
    },
    [],
  )

  const value = useMemo<AppState>(
    () => ({
      screen,
      preferences,
      savedJobIds,
      savedJobs,
      recommendedJobs,
      setRecommendedJobs,
      allJobs,
      selectedJobId,
      telegramUser,
      error,
      jobsError,
      retryLoadJobs,
      goTo,
      startOnboarding,
      completeOnboarding,
      editPreferences,
      savePreferences,
      finishLoading,
      openJob,
      closeJob,
      isSaved,
      toggleSaved,
      clearError,
    }),
    [
      screen,
      preferences,
      savedJobIds,
      savedJobs,
      recommendedJobs,
      allJobs,
      selectedJobId,
      telegramUser,
      error,
      jobsError,
      retryLoadJobs,
      goTo,
      startOnboarding,
      completeOnboarding,
      editPreferences,
      savePreferences,
      finishLoading,
      openJob,
      closeJob,
      isSaved,
      toggleSaved,
      clearError,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppState {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useApp must be used within AppProvider")
  return ctx
}