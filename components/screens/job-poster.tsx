"use client"

/**
 * Recruitment posters built ONLY from backend fields:
 * id, title, company, locationLabel, fieldLabel, skills, closingDate
 * (salary / typeLabel only if the job has them). No invented text.
 *
 * Needs:  npm i html-to-image
 *
 * Strongly recommended: a condensed poster typeface. In app/layout.tsx:
 *
 *   import { Anton } from "next/font/google"
 *   const poster = Anton({ weight: "400", subsets: ["latin"], variable: "--font-poster" })
 *   <body className={poster.variable}> ...
 *
 * Without it the posters fall back to Impact / Arial Narrow.
 */

import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { Check, Copy, Download, Heart, Share2 } from "lucide-react"

type Job = any // swap for your real Job type

const W = 360
const H = 450 // exported at pixelRatio 3 => 1080 x 1350

// ─── Data ─────────────────────────────────────────────────────────────────────

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function splitSkills(skills?: string): string[] {
  if (!skills) return []
  return skills.split(/[,;|\n]/).map((s) => s.trim()).filter(Boolean)
}

function fullDate(iso?: string): string {
  if (!iso) return ""
  const d = new Date(iso)
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

interface PosterData {
  title: string
  company: string
  loc: string
  field: string
  type: string
  salary: string
  skills: string[]
  closing: string
}

function posterData(job: Job): PosterData {
  const generic = !job.company || job.company === "N/A" || job.company === "Company not listed"
  return {
    title: job.title || "",
    company: generic ? "" : job.company,
    loc: job.locationLabel || "",
    field: job.fieldLabel || "",
    type: job.typeLabel && job.typeLabel !== "Unknown" ? job.typeLabel : "",
    salary: job.salary || "",
    skills: splitSkills(job.skills).slice(0, 5),
    closing: fullDate(job.closingDate),
  }
}

export function buildCaption(job: Job): string {
  const d = posterData(job)
  return [
    d.company ? `${d.title} - ${d.company}` : d.title,
    d.loc,
    [d.field, d.type].filter(Boolean).join(", "),
    d.salary,
    d.skills.join(", "),
    d.closing ? `Closing ${d.closing}` : "",
  ]
    .filter(Boolean)
    .join("\n")
}

// ─── Look ─────────────────────────────────────────────────────────────────────

const PALETTES = [
  { bg: "#1e4fd8", deep: "#12338f", accent: "#facc15", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#d62828", deep: "#8f1515", accent: "#ffd166", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#0b2a55", deep: "#061a37", accent: "#ff8a1f", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#ffd31a", deep: "#d9ab00", accent: "#111111", onAccent: "#ffffff", ink: "#111111" },
  { bg: "#0f6b4f", deep: "#094634", accent: "#ffcf4a", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#4a1d7a", deep: "#2f1050", accent: "#ff7ab6", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#0e7c86", deep: "#08545b", accent: "#ffb703", onAccent: "#111111", ink: "#ffffff" },
  { bg: "#1b1b1f", deep: "#0e0e10", accent: "#ff5a36", onAccent: "#111111", ink: "#ffffff" },
]
type P = (typeof PALETTES)[number]

const PAPER = "#f2f2ef"
const DARK = "#14161a"
const DISPLAY = `var(--font-poster),"Anton","Impact","Arial Narrow","Noto Sans Khmer",sans-serif`
const BODY = `"Helvetica Neue",Arial,"Noto Sans Khmer",sans-serif`

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

function titleSize(t: string) {
  return t.length > 60 ? 30 : t.length > 44 ? 38 : t.length > 30 ? 46 : t.length > 18 ? 58 : 70
}

const KHMER = /[\u1780-\u17FF]/

const titleStyle = (t: string, size?: number): React.CSSProperties => {
  const k = KHMER.test(t)
  const base = size ?? titleSize(t)
  return {
    fontFamily: DISPLAY,
    fontWeight: 400,
    fontSize: k ? Math.round(base * 0.78) : base,
    lineHeight: k ? 1.4 : 1.02,
    letterSpacing: k ? 0 : "0.01em",
    textTransform: k ? "none" : "uppercase",
    overflowWrap: "anywhere",
  }
}

// Shrinks the title until it fits the given height and never overflows sideways.
function FitTitle({
  text, maxH, max, min = 20, color,
}: { text: string; maxH: number; max: number; min?: number; color: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const [size, setSize] = useState(max)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const k = KHMER.test(text)
    const eff = (n: number) => (k ? Math.round(n * 0.78) : n)
    const fit = () => {
      let s = max
      el.style.fontSize = `${eff(s)}px`
      while (s > min && (el.scrollHeight > maxH || el.scrollWidth > el.clientWidth + 1)) {
        s -= 2
        el.style.fontSize = `${eff(s)}px`
      }
      setSize(s)
    }
    fit()
    document.fonts?.ready.then(fit)
  }, [text, maxH, max, min])

  return (
    <h2 ref={ref} style={{ ...titleStyle(text, size), color }}>
      {text}
    </h2>
  )
}

function groupWords(words: string[], maxChars = 13): string[] {
  const lines: string[] = []
  let cur = ""
  for (const w of words) {
    if (!cur) cur = w
    else if ((cur + " " + w).length <= maxChars) cur += " " + w
    else {
      lines.push(cur)
      cur = w
    }
  }
  if (cur) lines.push(cur)
  return lines
}

// Plain typographic info block: no icons, no chips, no dividers.
function Info({ d, color, cols = 1 }: { d: PosterData; color: string; cols?: 1 | 2 }) {
  const items = [
    d.loc,
    [d.field, d.type].filter(Boolean).join(", "),
    d.salary,
    d.skills.join(", "),
    d.closing ? `Closing ${d.closing}` : "",
  ].filter(Boolean)
  return (
    <div
      style={{
        color,
        fontFamily: BODY,
        fontSize: 12.5,
        fontWeight: 600,
        lineHeight: 1.35,
        display: "grid",
        gridTemplateColumns: cols === 2 ? "1fr 1fr" : "1fr",
        gap: "6px 18px",
      }}
    >
      {items.map((t, i) => (
        <span key={i} style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {t}
        </span>
      ))}
    </div>
  )
}

const companyStyle = (color: string): React.CSSProperties => ({
  color,
  fontFamily: BODY,
  fontSize: 13,
  fontWeight: 800,
})

// ─── 6 compositions ───────────────────────────────────────────────────────────

type TP = { d: PosterData; p: P }

// 1. Swiss: company on top, title, rule, two-column info
function Swiss({ d, p }: TP) {
  return (
    <div className="absolute inset-0" style={{ background: p.bg }}>
      <p className="absolute left-7 right-7 top-6 truncate" style={companyStyle(p.ink)}>{d.company}</p>
      <div className="absolute left-7 right-7 top-[62px]"><FitTitle text={d.title} maxH={240} max={titleSize(d.title)} color={p.ink} /></div>
      <div className="absolute inset-x-7 bottom-6">
        <div style={{ height: 3, background: p.accent, marginBottom: 12 }} />
        <Info d={d} color={p.ink} cols={2} />
      </div>
    </div>
  )
}

// 2. Type fill: every word of the title on its own line, sized to fill the poster
function Fill({ d, p }: TP) {
  const lines = groupWords(d.title.split(/\s+/).filter(Boolean))
  const longest = Math.max(...lines.map((w) => w.length), 1)
  const size = Math.max(26, Math.min(104, 310 / (longest * 0.47), 262 / lines.length))
  return (
    <div className="absolute inset-0" style={{ background: p.bg }}>
      <div className="absolute left-7 right-7 top-6" style={{ color: p.ink }}>
        {lines.map((w, i) => (
          <div key={i} style={{ ...titleStyle(w, size), lineHeight: 0.98, whiteSpace: "nowrap" }}>{w}</div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 px-7 pb-5 pt-4" style={{ background: p.deep }}>
        {d.company && <p className="mb-2 truncate" style={companyStyle(p.accent)}>{d.company}</p>}
        <Info d={d} color={p.ink} cols={2} />
      </div>
    </div>
  )
}

// 3. Vertical title running up a colour strip
function Vertical({ d, p }: TP) {
  const size = d.title.length <= 14 ? 78 : d.title.length <= 24 ? 58 : d.title.length <= 36 ? 44 : 34
  return (
    <div className="absolute inset-0" style={{ background: PAPER }}>
      <div className="absolute bottom-0 left-0 top-0" style={{ width: 150, background: p.bg }} />
      <div className="absolute bottom-0 top-0" style={{ left: 150, width: 8, background: p.accent }} />
      <h2
        className="absolute"
        style={{
          ...titleStyle(d.title, size),
          left: 20,
          top: 22,
          maxHeight: H - 44,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          color: p.ink,
        }}
      >
        {d.title}
      </h2>
      <p className="absolute left-[178px] right-6 top-6" style={{ ...companyStyle(DARK), fontSize: 15 }}>{d.company}</p>
      <div className="absolute bottom-6 left-[178px] right-6">
        <Info d={d} color={DARK} />
      </div>
    </div>
  )
}

// 4. Location as a giant outlined word behind the title
function City({ d, p }: TP) {
  const word = (d.loc.split(",")[0] || d.field).trim()
  const size = Math.max(60, Math.min(150, 320 / (Math.max(word.length, 1) * 0.47)))
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: p.deep }}>
      <div
        className="absolute left-5 top-3 whitespace-nowrap"
        style={{
          fontFamily: DISPLAY,
          fontSize: size,
          lineHeight: 1,
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: `2px ${p.accent}`,
        }}
      >
        {word}
      </div>
      {d.company && <p className="absolute left-7 right-7 top-[186px] truncate" style={companyStyle(p.accent)}>{d.company}</p>}
      <div className="absolute left-7 right-7 top-[210px]"><FitTitle text={d.title} maxH={140} max={Math.min(titleSize(d.title), 50)} color="#fff" /></div>
      <div className="absolute inset-x-7 bottom-6">
        <Info d={d} color="rgba(255,255,255,.9)" cols={2} />
      </div>
    </div>
  )
}

// 5. Solid block with a hard offset shadow, like a printed flyer
function Block({ d, p }: TP) {
  return (
    <div className="absolute inset-0" style={{ background: PAPER }}>
      <div
        className="absolute left-6 right-9 top-7 px-5 pb-6 pt-5"
        style={{ background: p.bg, boxShadow: `9px 9px 0 ${p.accent}` }}
      >
        {d.company && <p className="mb-3 truncate" style={companyStyle(p.ink)}>{d.company}</p>}
        <FitTitle text={d.title} maxH={150} max={Math.min(titleSize(d.title), 56)} color={p.ink} />
      </div>
      <div className="absolute inset-x-6 bottom-6">
        <Info d={d} color={DARK} cols={2} />
      </div>
    </div>
  )
}

// 6. Straight full-width band across the middle
function Band({ d, p }: TP) {
  return (
    <div className="absolute inset-0" style={{ background: p.bg }}>
      <p className="absolute left-7 right-7 top-7 truncate" style={companyStyle(p.ink)}>{d.company}</p>
      <div className="absolute inset-x-0 px-7 py-5" style={{ top: 96, background: p.accent }}>
        <FitTitle text={d.title} maxH={170} max={Math.min(titleSize(d.title), 54)} color={p.onAccent} />
      </div>
      <div className="absolute inset-x-0 bottom-0 px-7 pb-6 pt-5" style={{ background: p.deep }}>
        <Info d={d} color={p.ink} cols={2} />
      </div>
    </div>
  )
}

const ALL_TEMPLATES = [Swiss, Fill, Vertical, City, Block, Band]
// Big-type layouts (Fill, Vertical) are only used for short titles.
const LONG_TEMPLATES = [Swiss, City, Block, Band]

// ─── Poster (fixed 360x450, exported at 3x) ───────────────────────────────────

export const Poster = forwardRef<HTMLDivElement, { job: Job }>(function Poster({ job }, ref) {
  const d = useMemo(() => posterData(job), [job])
  const h = hash(String(job.id ?? job.title))
  const pool = d.title.length > 26 || KHMER.test(d.title) ? LONG_TEMPLATES : ALL_TEMPLATES
  const T = pool[h % pool.length]
  const p = PALETTES[Math.floor(h / 6) % PALETTES.length]
  return (
    <div ref={ref} style={{ width: W, height: H }} className="relative overflow-hidden">
      <T d={d} p={p} />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRAIN, opacity: 0.07 }} />
    </div>
  )
})

function ScaledPoster({ job, innerRef, onClick }: { job: Job; innerRef: React.Ref<HTMLDivElement>; onClick: () => void }) {
  const wrap = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const update = () => setScale(el.clientWidth / W)
    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={wrap}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${job.title}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="relative w-full cursor-pointer overflow-hidden"
      style={{ height: `${scale * H}px` }}
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: W, height: H }}>
        <Poster ref={innerRef} job={job} />
      </div>
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

async function posterBlob(node: HTMLElement): Promise<Blob> {
  const { toBlob } = await import("html-to-image")
  const blob = await toBlob(node, {
    pixelRatio: 3,
    cacheBust: true,
    width: W,
    height: H,
    style: { transform: "none", transformOrigin: "top left" },
  })
  if (!blob) throw new Error("export failed")
  return blob
}

function saveBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
}

// ─── One job = one card: poster on top, actions, then its caption ────────────

export function PosterCard({
  job, saved, onOpen, onToggleSave, onToast,
}: {
  job: Job
  saved: boolean
  onOpen: () => void
  onToggleSave: () => void
  onToast: (msg: string) => void
}) {
  const node = useRef<HTMLDivElement | null>(null)
  const caption = useMemo(() => buildCaption(job), [job])
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)

  const fileName = `${(job.title || "job").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}.png`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(caption)
      setCopied(true)
      onToast("Caption copied")
      setTimeout(() => setCopied(false), 1500)
    } catch {
      onToast("Could not copy")
    }
  }

  const download = async () => {
    if (!node.current || busy) return
    setBusy(true)
    try {
      saveBlob(await posterBlob(node.current), fileName)
      onToast("Poster saved")
    } catch {
      onToast("Could not create image")
    } finally {
      setBusy(false)
    }
  }

  const share = async () => {
    if (!node.current || busy) return
    setBusy(true)
    try {
      const blob = await posterBlob(node.current)
      const file = new File([blob], fileName, { type: "image/png" })
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: caption })
      } else {
        saveBlob(blob, fileName)
        await navigator.clipboard.writeText(caption).catch(() => {})
        onToast("Poster saved, caption copied")
      }
    } catch {
      /* cancelled */
    } finally {
      setBusy(false)
    }
  }

  const iconBtn =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <ScaledPoster job={job} innerRef={node} onClick={onOpen} />

      <div className="flex items-center justify-between px-3 pt-3">
        <button
          type="button"
          onClick={onToggleSave}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved jobs" : "Save job"}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
            saved
              ? "border-destructive/30 bg-destructive/10 text-destructive"
              : "border-border bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
        </button>
        <div className="flex items-center gap-2">
          <button type="button" onClick={download} disabled={busy} className={iconBtn} aria-label="Download poster">
            <Download className="h-4 w-4" />
          </button>
          <button type="button" onClick={share} disabled={busy} className={iconBtn} aria-label="Share poster">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="m-3 flex items-start gap-2 rounded-xl bg-secondary/60 p-3">
        <p className="min-w-0 flex-1 whitespace-pre-line text-xs leading-relaxed text-foreground">{caption}</p>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy caption"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-background hover:text-foreground"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </article>
  )
}