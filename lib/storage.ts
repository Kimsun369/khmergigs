import type { Preferences } from "./types"

// ─── CloudStorage promise wrappers ───────────────────────────────────────────

interface TelegramCloudStorage {
  getItem: (key: string, cb: (err: unknown, value?: string) => void) => void
  setItem: (key: string, value: string, cb?: () => void) => void
  removeItem: (key: string, cb?: () => void) => void
}

/** Returns the Telegram CloudStorage object, or null when unavailable. */
function getCloudStorage(): TelegramCloudStorage | null {
  if (typeof window === "undefined") return null
  return (window as any).Telegram?.WebApp?.CloudStorage ?? null
}


function csGet(key: string): Promise<string | null> {
  return new Promise((resolve) => {
    const cs = getCloudStorage()
    if (!cs) return resolve(null)

    let done = false
    const timer = setTimeout(() => {
      if (!done) { done = true; resolve(null) }
    }, 3000)

    try {
      cs.getItem(key, (_err: unknown, value?: string) => {
        if (done) return
        done = true
        clearTimeout(timer)
        resolve(value ?? null)
      })
    } catch {
      if (!done) { done = true; clearTimeout(timer); resolve(null) }
    }
  })
}

function csSet(key: string, value: string): Promise<void> {
  return new Promise((resolve) => {
    const cs = getCloudStorage()
    if (!cs) return resolve()

    let done = false
    const timer = setTimeout(() => {
      if (!done) { done = true; resolve() }
    }, 3000)

    try {
      cs.setItem(key, value, () => {
        if (done) return
        done = true
        clearTimeout(timer)
        resolve()
      })
    } catch {
      if (!done) { done = true; clearTimeout(timer); resolve() }
    }
  })
}

function csRemove(key: string): Promise<void> {
  return new Promise((resolve) => {
    const cs = getCloudStorage()
    if (!cs) return resolve()

    let done = false
    const timer = setTimeout(() => {
      if (!done) { done = true; resolve() }
    }, 3000)

    try {
      cs.removeItem(key, () => {
        if (done) return
        done = true
        clearTimeout(timer)
        resolve()
      })
    } catch {
      if (!done) { done = true; clearTimeout(timer); resolve() }
    }
  })
}

// ─── Generic get / set / remove ──────────────────────────────────────────────

/** Returns true when Telegram CloudStorage is available and usable. */
function hasTelegramStorage(): boolean {
  return getCloudStorage() !== null
}

export async function storageGet(key: string): Promise<string | null> {
  try {
    if (hasTelegramStorage()) {
      return await csGet(key)
    }
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key)
    }
    return null
  } catch {
    return null
  }
}

export async function storageSet(key: string, value: string): Promise<void> {
  try {
    if (hasTelegramStorage()) {
      await csSet(key, value)
    } else if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value)
    }
  } catch {
    // swallow
  }
}

export async function storageRemove(key: string): Promise<void> {
  try {
    if (hasTelegramStorage()) {
      await csRemove(key)
    } else if (typeof window !== "undefined") {
      window.localStorage.removeItem(key)
    }
  } catch {
    // swallow
  }
}

// ─── Preferences ─────────────────────────────────────────────────────────────

const PREFS_KEY = "prefs"

export async function loadPreferences(): Promise<Preferences | null> {
  try {
    const raw = await storageGet(PREFS_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Preferences
  } catch {
    return null
  }
}

export async function savePreferencesToStorage(prefs: Preferences): Promise<void> {
  try {
    await storageSet(PREFS_KEY, JSON.stringify(prefs))
  } catch {
    // swallow
  }
}

// ─── Saved job IDs (chunked) ──────────────────────────────────────────────────

const CHUNK_MAX = 3500
const SAVED_COUNT_KEY = "saved_count"
const savedChunkKey = (i: number) => `saved_${i}`

export async function loadSavedJobIds(): Promise<string[] | null> {
  try {
    const countRaw = await storageGet(SAVED_COUNT_KEY)
    if (countRaw === null) return null // key absent → no local data yet

    const count = parseInt(countRaw, 10)
    if (!Number.isFinite(count) || count < 0) return []

    const chunks = await Promise.all(
      Array.from({ length: count }, (_, i) => storageGet(savedChunkKey(i))),
    )

    const ids: string[] = []
    for (const chunk of chunks) {
      if (chunk) {
        try {
          const arr = JSON.parse(chunk) as string[]
          ids.push(...arr)
        } catch {
          // ignore corrupt chunk
        }
      }
    }
    return ids
  } catch {
    return null
  }
}

export async function saveSavedJobIds(ids: string[]): Promise<void> {
  try {
    // Split ids array into chunks where each JSON string stays under CHUNK_MAX chars.
    const chunks: string[][] = []
    let current: string[] = []
    for (const id of ids) {
      current.push(id)
      if (JSON.stringify(current).length >= CHUNK_MAX) {
        // This id pushed us over the limit — back it out into a new chunk.
        current.pop()
        chunks.push(current)
        current = [id]
      }
    }
    if (current.length > 0) chunks.push(current)

    // Persist each chunk and the count.
    await Promise.all([
      storageSet(SAVED_COUNT_KEY, String(chunks.length)),
      ...chunks.map((chunk, i) => storageSet(savedChunkKey(i), JSON.stringify(chunk))),
    ])
  } catch {
    // swallow
  }
}

/** Returns true if "saved_count" exists in storage (even if it is "0"). */
export async function hasSavedJobsInStorage(): Promise<boolean> {
  try {
    const v = await storageGet(SAVED_COUNT_KEY)
    return v !== null
  } catch {
    return false
  }
}
