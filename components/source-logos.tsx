"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export interface SourceLogoProps {
  sourceId: string
  className?: string
  size?: number
}

/** Prefer the supplied local source marks. If one is missing, show a readable
 * monogram instead of a broken image or a made-up brand mark. */
export function SourceLogoIcon({ sourceId, className, size = 18 }: SourceLogoProps) {
  const id = (sourceId || "").toLowerCase().replace(/[^a-z0-9]/g, "")
  const s = size
  const [failed, setFailed] = useState(false)
  const localLogos: Record<string, string> = {
    camhr: "/job%20source%20logo/CamHR.png",
    cambojob: "/job%20source%20logo/CamboJob.png",
    khmer24: "/job%20source%20logo/Khmer24.png",
    khmeronlinejobs: "/job%20source%20logo/KhmerOnlineJob.png",
    hrinc: "/job%20source%20logo/HRINC.png",
    jobify: "/job%20source%20logo/Jobify.png",
    jobnet: "/job%20source%20logo/JobNet.png",
    myworldcareers: "/job%20source%20logo/MyWorldCareers.png",
    reliefweb: "/job%20source%20logo/Reliefweb.png",
    odc: "/job%20source%20logo/ODC.png",
    jobcambodia: "/job%20source%20logo/JobCambodiaNew.png",
    bongthom: "/job%20source%20logo/BongThom.png",
    eurocham: "/job%20source%20logo/Eurocham.png",
  }

  if (localLogos[id] && !failed) {
    return (
      <span className={cn("flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/80 p-0.5", className)} style={{ width: s, height: s }}>
        <img src={localLogos[id]} alt="" aria-hidden="true" onError={() => setFailed(true)} className="h-full w-full object-contain" />
      </span>
    )
  }

  if (localLogos[id] && failed) {
    const initials: Record<string, string> = {
      camhr: "CH", cambojob: "CJ", khmer24: "K24", khmeronlinejobs: "KOJ",
      hrinc: "HR", jobify: "J", jobnet: "JN", myworldcareers: "MW",
      reliefweb: "RW", odc: "ODC", jobcambodia: "JC", bongthom: "BT", eurocham: "EC",
    }
    return (
      <span
        aria-hidden="true"
        className={cn("flex shrink-0 items-center justify-center rounded-md bg-secondary text-[8px] font-bold text-muted-foreground", className)}
        style={{ width: s, height: s }}
      >
        {initials[id] ?? "JOB"}
      </span>
    )
  }

  switch (id) {
    // 1. CamHR (Orange & Navy Blue iconic branding)
    case "camhr":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#FF7A00" />
          <path
            d="M9 16C9 12.134 12.134 9 16 9C18.2 9 20.15 10.02 21.4 11.6L18.8 13.6C18.1 12.65 17.1 12.1 16 12.1C13.85 12.1 12.1 13.85 12.1 16C12.1 18.15 13.85 19.9 16 19.9C17.1 19.9 18.1 19.35 18.8 18.4L21.4 20.4C20.15 21.98 18.2 23 16 23C12.134 23 9 19.866 9 16Z"
            fill="white"
          />
          <circle cx="23.5" cy="11.5" r="2.5" fill="#003366" />
        </svg>
      )

    // 2. CamboJob (Signature Red curved C with White & Blue accent)
    case "cambojob":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#E11D48" />
          <path
            d="M21 11.5C19.7 10 17.7 9 15.5 9C11.36 9 8 12.36 8 16.5C8 20.64 11.36 24 15.5 24C17.7 24 19.7 23 21 21.5"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="21" cy="16.5" r="2.5" fill="#38BDF8" />
        </svg>
      )

    // 3. Khmer24 (Cambodia's biggest marketplace: Blue & Green)
    case "khmer24":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#0284C7" />
          <path
            d="M9 8V24M9 16L18 8M13 13.5L20 24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23" cy="10" r="3" fill="#10B981" />
        </svg>
      )

    // 4. Khmer Online Jobs (Telegram Channel broadcast)
    case "khmeronlinejobs":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#229ED9" />
          <path
            d="M7.5 15.3L23.2 9.2C23.9 8.9 24.6 9.4 24.4 10.1L21.7 22.8C21.5 23.6 20.6 23.9 19.9 23.5L15.9 20.5L14 22.3C13.7 22.6 13.2 22.4 13.2 22V19.3L21.2 12L11.4 18.1L7.8 16.9C7.1 16.6 7.1 15.5 7.5 15.3Z"
            fill="white"
          />
        </svg>
      )

    // 5. HRINC (Crimson Red Executive HR network)
    case "hrinc":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#991B1B" />
          <text
            x="16"
            y="21"
            fill="white"
            fontSize="12"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            HRI
          </text>
        </svg>
      )

    // 6. Jobify (Modern tech talent platform: Indigo Blue)
    case "jobify":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#2563EB" />
          <path
            d="M16 8L23 12.5V20L16 24.5L9 20V12.5L16 8Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="3" fill="#60A5FA" />
        </svg>
      )

    // 7. JobNet (Professional career portal: Deep Cobalt)
    case "jobnet":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#1D4ED8" />
          <path
            d="M10 11H22M16 11V22C16 22 13 22 12 19"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="21" cy="20" r="2.5" fill="#38BDF8" />
        </svg>
      )

    // 8. MyWorld Careers (Executive Search: Dark Navy & Aqua)
    case "myworldcareers":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#0F172A" />
          <path
            d="M8 21L12.5 11L16 18L19.5 11L24 21"
            stroke="#38BDF8"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    // 9. ReliefWeb (UN Humanitarian & NGO: UN Blue)
    case "reliefweb":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#0072BC" />
          <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2" />
          <path d="M16 8V24M8 16H24" stroke="white" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="4" ry="8" stroke="white" strokeWidth="1.6" />
        </svg>
      )

    // 10. Open Development Cambodia (ODC: Teal Research & Open Data)
    case "odc":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#0D9488" />
          <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2.5" />
          <path d="M16 10V6M16 26V22M10 16H6M26 16H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )

    // Default / Unlisted fallback
    default:
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0 rounded-md shadow-2xs", className)}
        >
          <rect width="32" height="32" rx="7" fill="#475569" />
          <text
            x="16"
            y="21"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            {sourceId ? sourceId.slice(0, 2).toUpperCase() : "KG"}
          </text>
        </svg>
      )
  }
}
