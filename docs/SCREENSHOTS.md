# SCREENSHOTS.md — KhmerGigs Screen-by-Screen Visual Guide

> This guide documents the visual architecture of each screen following the November 2026 redesign.  
> Status: Stealth Mode — for internal team review only.

---

## 1. Unified JobCard Architecture (The Core Innovation)

Every job card across the entire application now follows this precise, scannable layout:

```
┌────────────────────────────────────────────────────────┐
│ [KG]  Company Name (12px, muted)                       │
│       Senior Software Engineer (15px, semi-bold)       │
│                                                        │
│  📍 Phnom Penh   ⏱ Full-time   💰 $800 - $1,500        │
│                                                        │
│  [Tech & IT]  [85% match]                 ⏱ 2 days ago │
├────────────────────────────────────────────────────────┤
│                                     [Share ↗] [Save 🔖]│
└────────────────────────────────────────────────────────┘
```

### Key Elements:
1. **Company Avatar:** 40×40 rounded container with company initials. Background color deterministically assigned from a palette of 8 colors based on company name hash. Zero image dependencies.
2. **Job Title:** The most prominent visual element (15px semi-bold, 2-line clamp).
3. **Company Name:** 12px muted text above the title.
4. **Metadata Row:** Small icons for Location (MapPin), Job Type (Briefcase), and Salary (bold text).
5. **Tags Row:**
   - Field/Category pill (e.g. `Tech & IT`)
   - Match Badge (e.g. `85% match` in emerald/amber/muted) — only shown when real match data is present
   - Posted time (e.g. `2 days ago` with Clock icon)
6. **Action Row:** 1-tap Share button + Save/Bookmark toggle button, cleanly separated from the card's tap target.

---

## 2. Screen: Home / Latest Jobs (`components/screens/home-screen.tsx`)

### Header
- App title: "Latest Jobs" + dynamic counter (`X open roles`)
- Quick-switch button (Sliders icon) to jump to the "For You" tab
- Search input with clear button (filters title, company, skills, location in real time)

### Content Feed
- Infinite-scroll list of open jobs (newest first)
- Rendered using the unified `JobCard`
- Smooth entrance animation (`slide-in-from-bottom` with staggered delays)
- Skeleton pulse loaders while data is fetching (matches exact card layout)
- "You're all caught up" footer when reaching the end of the feed
- Floating "Back to top" button when scrolled past 500px

---

## 3. Screen: For You (`components/screens/jobs-screen.tsx`)

### State A: First-time user (No preferences yet)
- Header: "For You" — "Tell us what you're looking for — takes under 30 seconds"
- Context banner: Shows count of available jobs to build anticipation
- Inline 3-step onboarding flow embedded right in the tab:
  - Step 1: Work type (Full-time, Part-time, Internship, Freelance)
  - Step 2: Field of interest (9 categories in a 2-column grid)
  - Step 3: Location (Phnom Penh, Siem Reap, Provinces, Remote)
  - Every step includes a "Skip this step" link
  - Single confirm button: "Show me jobs →"

### State B: Returning user (Preferences saved)
- Header: "For You" with summary pill: "Matched to Tech & IT · Phnom Penh"
- Sliders button in header to edit preferences at any time
- Top 10 recommended jobs scored by relevance:
  - Field match (+10 pts)
  - Location match (+8 pts)
  - Job type match (+5 pts)
  - Remote bonus (+3 pts)
- Match percentage badges clearly displayed on each card
- Empty state: Never blank — falls back to showing all available jobs with an explanatory notice

---

## 4. Screen: Saved Jobs (`components/screens/saved-screen.tsx`)

### Empty State
- Centered bookmark icon with encouraging copy: "No saved jobs yet — Tap the bookmark on any job to save it here"
- "Browse jobs" button that navigates directly to the Home tab

### Populated State
- Header: "Saved Jobs" with exact count
- Full list of saved jobs using the identical `JobCard` component
- Instant un-save by tapping the filled bookmark icon
- Data persisted locally via Telegram CloudStorage (with localStorage fallback)

---

## 5. Screen: Job Details (`components/screens/job-details-screen.tsx`)

### Header
- Back button (ArrowLeft)
- Company name in center
- Quick-action buttons: Share (Share2) + Bookmark toggle

### Main Content (Organized Hierarchy)
1. **Hero:** Large company avatar + 20px bold title + company name
2. **Match Banner:** Match percentage + human-readable match reason (e.g., "Good match for Tech & IT in Phnom Penh")
3. **Key Facts Grid (2×2 cards):**
   - Location (MapPin)
   - Employment Type (Briefcase)
   - Salary (DollarSign)
   - Field (Tag)
4. **Metadata Badges:** Seniority level, language requirements
5. **Skills Chips:** Individual pills for each required skill
6. **Detailed Sections:** (Gracefully hidden if not in data)
   - About the role (summary)
   - Responsibilities (bullet list with checkmark icons)
   - Requirements (bullet list)
   - Benefits (rounded pill chips)
7. **Footer Info:** Source and application closing date / posted date

### Sticky Footer
- Share button (square icon button)
- Full-width "Apply Now" button — opens employer application URL in new tab / Telegram browser

---

## 6. Screen: Profile & Preferences (`components/screens/profile-screen.tsx`)

### Elements
- **Identity Card:** Avatar circle with user initial + Telegram first/last name + `@username`
- **My Preferences Section:**
  - Job type row (with Briefcase icon)
  - Field row (with LayoutGrid icon)
  - Location row (with MapPin icon)
  - "Edit Preferences" button (opens full-screen editor)
- **Saved Jobs Shortcut:** Card showing saved count with Chevron arrow to navigate to Saved tab
- **About Section:** Brief mission statement for KhmerGigs in Cambodia

---

## 7. Navigation: Bottom Nav (`components/bottom-nav.tsx`)

- 4 persistent tabs:
  - **Home** (Home icon)
  - **For You** (Sparkles icon)
  - **Saved** (Bookmark icon + dynamic count badge)
  - **Profile** (User icon)
- Active state: Primary brand color with soft pill background
- Safe-area inset padding for edge-to-edge iOS/Android Telegram WebViews
