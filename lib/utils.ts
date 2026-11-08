import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Job } from './types'

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

/**
 * Builds a shareable job URL that opens the job directly in the Mini App / Web App.
 */
export function buildJobUrl(jobId: string): string {
  if (typeof window !== 'undefined') {
    const origin = window.location.origin
    return `${origin}?job=${encodeURIComponent(jobId)}`
  }
  return `https://khmergigsinterface.vercel.app?job=${encodeURIComponent(jobId)}`
}

/**
 * Builds a formatted share message for friends:
 * 1. Title of the job (+ Company if available)
 * 2. Link CTA to open directly in the KhmerGigs Mini App
 * 3. The job sources and original application link
 */
export function buildShareMessage(job: Job): string {
  const lines: string[] = []

  // 1. Title of the job (+ company)
  const hasCompany = job.company && job.company !== 'N/A' && job.company !== 'Company not listed'
  if (hasCompany) {
    lines.push(`💼 *${job.title}* at ${job.company}`)
  } else {
    lines.push(`💼 *${job.title}*`)
  }

  // Location, Salary, Employment Type
  const details: string[] = []
  if (job.locationLabel) details.push(`📍 ${job.locationLabel}`)
  if (job.salary && job.salary !== 'Negotiable') details.push(`💰 ${job.salary}`)
  if (job.typeLabel) details.push(`⏱ ${job.typeLabel}`)
  if (details.length > 0) {
    lines.push(details.join(' • '))
  }

  lines.push('')

  // 2. Link CTA to link to the Mini App
  const appUrl = buildJobUrl(job.id)
  lines.push(`👉 Open Job in KhmerGigs Mini App:`)
  lines.push(appUrl)

  // 3. The Job Sources
  const sourceName = job.source?.trim()
  const applyLink = job.applyUrl?.trim()

  if (sourceName || applyLink) {
    lines.push('')
    if (sourceName) {
      lines.push(`📌 Job Source: ${sourceName}`)
    }
    if (applyLink && applyLink !== appUrl) {
      lines.push(`🔗 Original Post / Apply: ${applyLink}`)
    }
  }

  lines.push('')
  lines.push(`🇰🇭 Find more opportunities on KhmerGigs`)

  return lines.join('\n')
}

/**
 * Shares a job with 1 tap:
 * 1. Telegram native chat share via openTelegramLink (opens Telegram's forward/chat picker)
 * 2. Mobile Web Share API (native share sheet on iOS/Android)
 * 3. Clipboard copy fallback with confirmation
 *
 * Returns: 'telegram' | 'native' | 'clipboard' | 'failed'
 */
export async function shareJob(job: Job): Promise<'telegram' | 'native' | 'clipboard' | 'failed'> {
  const fullText = buildShareMessage(job)
  const appUrl = buildJobUrl(job.id)

  // 1. Telegram WebApp: open Telegram's native share-to-chat dialog
  try {
    const tg = (window as any).Telegram?.WebApp
    if (tg?.openTelegramLink) {
      const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(appUrl)}&text=${encodeURIComponent(fullText)}`
      tg.openTelegramLink(shareUrl)
      return 'telegram'
    }
    if (tg?.switchInlineQuery) {
      tg.switchInlineQuery(job.title, ['users', 'groups', 'channels'])
      return 'telegram'
    }
  } catch {
    // fall through
  }

  // 2. Web Share API (mobile devices)
  try {
    if (typeof navigator !== 'undefined' && navigator.share) {
      await navigator.share({
        title: `${job.title} — KhmerGigs`,
        text: fullText,
      })
      return 'native'
    }
  } catch (err) {
    if ((err as Error)?.name === 'AbortError') return 'failed'
  }

  // 3. Fallback: Copy to clipboard
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(fullText)
      return 'clipboard'
    }
  } catch {
    // clipboard blocked
  }

  return 'failed'
}

/**
 * Lightweight analytics event tracker.
 */
export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean>,
): void {
  try {
    const va = (window as any).va
    if (typeof va === 'function') {
      va('event', { name: event, ...properties })
    }
  } catch {
    // ignore tracking failures
  }
}

/**
 * Returns initials from a company name (up to 2 characters).
 */
export function getCompanyInitials(company: string): string {
  if (!company || company === 'N/A' || company === 'Company not listed') return 'KG'
  const words = company.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/**
 * Returns a consistent color index (0-7) for a company name.
 */
export function getCompanyColorIndex(company: string): number {
  if (!company) return 0
  let h = 0
  for (let i = 0; i < company.length; i++) {
    h = (Math.imul(31, h) + company.charCodeAt(i)) | 0
  }
  return Math.abs(h) % 8
}
