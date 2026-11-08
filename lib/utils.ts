import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Opens a job application URL.
 * When running inside a Telegram iframe (window.self !== window.top) it uses
 * window.open with noopener,noreferrer; otherwise it does a top-level navigation.
 */
export function openApplyUrl(url: string): void {
  if (!url) return
  if (typeof window === 'undefined') return
  if (window.self !== window.top) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}
