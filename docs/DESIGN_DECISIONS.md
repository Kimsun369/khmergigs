# DESIGN_DECISIONS.md — KhmerGigs

> This document explains the major design decisions made during the November 2026 redesign.
> Intended for the product owner, team members, and future contributors.

---

## 1. Why we replaced poster-style job cards

**Before:** The Home tab used `PosterCard` — large 360×450 graphical posters (like vintage recruitment flyers) that rendered as canvas-like DOM elements scaled to fill the screen width. Each card occupied most of the viewport.

**Problems:**
- Each card was taller than a phone screen, requiring significant scrolling to reach the next job
- The visual style (bold typography, colored backgrounds, grain effects) was visually impressive in isolation but exhausting to browse repeatedly
- Generating a poster for sharing required `html-to-image` to rasterise the DOM — slow (1–3 seconds), heavy on memory, unreliable in Telegram WebView
- The poster export and copy-caption sharing workflow was complex and unfamiliar to most users

**Decision:** Replace with information-first `JobCard` — a compact list card that shows all key information in a scannable format.

**Result:** Users can see 3–4 jobs per screen instead of 1, dramatically improving browsing speed.

---

## 2. Why Home and Saved Jobs now use the same component

**Before:** Home used `PosterCard`, Saved used `JobCard` — two completely different visual designs for the same data. Users experienced an inconsistent UI that made the app feel unfinished.

**Decision:** Create ONE `JobCard` component used everywhere — Home, For You, Saved, and any future listing surface.

**Result:** Visual consistency across the entire app. Changes to card design only need to happen in one place.

---

## 3. Why we use company initials instead of images

**Before:** No company images were used (the backend doesn't provide them). The poster design ignored this by focusing on the job title instead. The compact `JobCard` had no visual anchor.

**Decision:** Generate a consistent, coloured avatar using the company name:
- Extract initials (first 2 letters of first word, or first letter of first two words)
- Pick a background colour from a palette of 8 based on a hash of the company name
- The same company always gets the same colour and initials — consistent and predictable

**Why not fetch logos from Clearbit or similar?**
- Introduces external dependencies and network requests per card
- Cambodian companies often not indexed by logo APIs
- Adds privacy and data concerns

**Result:** Every job card has a visual "anchor" that is attractive without depending on external data.

---

## 4. Why onboarding now has fewer steps and allows skipping

**Boss requirement:** "Make it as easy as possible. Aim for 3 taps or fewer and under 30 seconds."

**Before:** Each onboarding step required a selection — users could not proceed without choosing an option. The flow was 3 mandatory steps.

**Decision:**
- Each step now has a "Skip this step" link when no option is selected
- Users who skip all steps still land on the Home screen and see all jobs
- Preferences are still collected when users opt in
- The "Continue" button always works regardless of selection

**What we chose NOT to do:**
- Remove the preference steps entirely — the matching system depends on them
- Pre-select defaults — this would generate false recommendations
- Add a "skip all" button — this would likely result in users never setting preferences

---

## 5. Why jobs are ranked instead of strictly filtered

**Before:** `getRecommendations()` already ranked jobs by score. The Home tab showed all jobs without ranking.

**New behaviour:**
- For You tab: shows top 10 scored jobs (ranked by field match, location match, type match)
- If no matches exist, shows all jobs as alternatives (never an empty screen)
- Match percentage shown only when real data supports it

**Why not strict filtering?**
Strict filtering (show only exact matches) would frequently show empty screens, especially for users in provinces or with niche preferences. Users are better served by seeing ranked alternatives than nothing.

**Match score formula (in lib/api.ts):**
- Field match: +10 points
- Location match: +8 points
- Job type match: +5 points
- Remote jobs get +3 bonus (available to anyone)
- Base score: 40, capped at 99%

---

## 6. Why sharing uses Web Share API instead of image export

**Before:** Sharing generated a poster image using `html-to-image`, which was then:
- Downloaded as a PNG file, OR
- Shared via `navigator.share` with file attachment

**Problems:**
- Rasterising DOM nodes is slow and unreliable in Telegram WebView
- Not all Telegram versions support sharing files from web apps
- Image sharing is not standard for job listings — most job platforms share text + URL

**Decision:** Use `shareJob()` utility that:
1. Tries `navigator.share` with text + URL (native mobile share sheet)
2. Falls back to clipboard copy with confirmation toast

**Share message:**
```
💼 *[Job Title]*
🏢 [Company]
📍 [Location]
💰 [Salary]
⏱ [Type]

Find more jobs on KhmerGigs 🇰🇭
https://khmergigs.vercel.app?job=[id]
```

**Result:** One-tap sharing that works reliably across all environments.

---

## 7. Why we didn't add deep-link routing

The app is a Telegram Mini App with a custom SPA router (not Next.js file-based routing). Adding URL-based deep linking would require rearchitecting how screens are shown.

**Decision:** Defer deep-linking to a future iteration. The job URL in share messages (`?job=xxx`) is included but not yet handled by the app — it should be implemented when the router supports query parameters.

---

## 8. Why we reduced the loading screen duration

**Before:** 1600ms artificial delay after onboarding.

**Decision:** Reduced to 1200ms. The delay exists to give the user feedback that something is happening; shorter feels snappier without feeling instant (which might feel broken).

**Future:** This delay could be eliminated entirely if the recommendations calculation becomes async and results are streamed in real time.

---

## 9. Why the app still forces Telegram and doesn't add accounts

The Telegram Mini App context provides a free, trusted identity layer:
- User ID available without registration
- No password or email needed
- CloudStorage available for persistent state

Adding a separate account system would add complexity, friction, and privacy concerns without meaningful benefit at this stage.

---

## 10. Why we kept `html-to-image` as a dependency

Even though the PosterCard is no longer in the main job listing, the `Poster` and `PosterCard` components still exist in `job-poster.tsx`. The dependency is kept in case the poster feature is needed again (e.g., for a "Create shareable flyer" feature in job details).

**Future consideration:** If the poster feature is permanently removed, uninstall `html-to-image` to reduce bundle size.
