// Thin wrapper around the Telegram WebApp SDK that is injected on
// telegram.org/js/telegram-web-app.js when the app runs inside Telegram.
//
// This never touches a bot token — only the client-side WebApp object, which
// exposes the current user and theme. When running outside Telegram (e.g. the
// v0 preview or a normal browser) every helper degrades gracefully.

export interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  photo_url?: string
}

interface TelegramWebApp {
  initData: string
  initDataUnsafe?: { user?: TelegramUser }
  colorScheme?: "light" | "dark"
  ready: () => void
  expand: () => void
  setHeaderColor?: (color: string) => void
  setBackgroundColor?: (color: string) => void
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp }
  }
}

function getWebApp(): TelegramWebApp | null {
  if (typeof window === "undefined") return null
  return window.Telegram?.WebApp ?? null
}

/** True when running inside the Telegram client. */
export function isTelegram(): boolean {
  return Boolean(getWebApp()?.initData)
}

/**
 * Call once on mount. Signals to Telegram that the app is ready and expands it
 * to full height. Safe to call outside Telegram (no-op).
 */
export function initTelegram(): void {
  const webApp = getWebApp()
  if (!webApp) return
  try {
    webApp.ready()
    webApp.expand()
  } catch {
    // ignore — not critical for the UI to function
  }
}

/**
 * Returns the current Telegram user, or null when unavailable.
 * The user id returned here is what should later be sent to the n8n API
 * to associate preferences and saved jobs with an account.
 */
export function getTelegramUser(): TelegramUser | null {
  return getWebApp()?.initDataUnsafe?.user ?? null
}

// A clearly-fake id (never a real Telegram id range collision in practice)
// used only when explicitly opted into during local/dev testing.
const DEV_USER: TelegramUser = {
  id: 999999999,
  first_name: "Dev",
  last_name: "Tester",
  username: "dev_tester",
}

/**
 * Returns the real Telegram user when running inside Telegram.
 *
 * Outside Telegram (e.g. testing the Vercel preview URL in a normal browser)
 * this returns null UNLESS both of the following are true:
 *   - NODE_ENV is not "production"
 *   - NEXT_PUBLIC_ENABLE_DEV_USER === "true"
 *
 * This guarantees the fake DEV_USER can never reach your production
 * Google Sheet by accident — it requires an explicit env var that you should
 * only ever set on a preview/dev deployment, never on the production one.
 */
export function getEffectiveTelegramUser(): TelegramUser | null {
  const real = getTelegramUser()
  if (real) return real

  const devFallbackEnabled =
    process.env.NODE_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ENABLE_DEV_USER === "true"

  return devFallbackEnabled ? DEV_USER : null
}
