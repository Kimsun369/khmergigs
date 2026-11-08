# USER_FLOWS.md — KhmerGigs Complete User Journeys

> Last updated: November 2026  
> App: KhmerGigs Telegram Mini App  
> Status: Production (Stealth Mode — not public)

---

## Flow 1: First-Time User — Full Onboarding Journey

### Who this is
A new Cambodian user opens KhmerGigs for the first time inside Telegram.

### Step-by-step

| Step | What the user sees | What the user taps | What happens | Data used | Error state |
|------|-------------------|-------------------|--------------|-----------|-------------|
| 1 | App loads, spinner visible | — | AppProvider initialises Telegram SDK, checks CloudStorage for saved preferences | Telegram.WebApp.initData | Shows spinner if Telegram is slow |
| 2 | **Home** screen (Latest Jobs tab) | — | Jobs fetched from Vercel Blob URL and displayed immediately | jobs.json from CDN | Error state with Retry button |
| 3 | User notices **For You** tab | Taps "For You" in bottom nav | For You screen opens — shows inline onboarding because no preferences found | None yet | — |
| 4 | Sees "What are you looking for?" | Picks job type (e.g. Full-time) OR taps Skip | Selection saved to component state; Continue button activates | — | — |
| 5 | Sees "What field interests you?" | Picks field (e.g. Tech & IT) OR taps Skip | Selection saved | — | — |
| 6 | Sees "Where do you want to work?" | Picks location (e.g. Phnom Penh) OR taps Skip | Selection saved | — | — |
| 7 | Taps "Show me jobs →" | — | `completeOnboarding()` called; prefs written to CloudStorage; loading screen shown; jobs matched | Preferences object | Toast if save fails |
| 8 | **For You** screen with matched jobs | — | Top 10 ranked jobs displayed with match % badges | RecommendedJob[] | Empty state with Edit button |
| 9 | User taps a job card | — | Job details screen opens | Job.id → allJobs lookup | "Couldn't load" message |

**Analytics events fired:** `onboarding_started`, `onboarding_step_completed` (×3), `onboarding_completed`, `recommendations_loading_started`, `recommendations_loading_finished`

**Time target:** Under 30 seconds from first open to seeing matched jobs.

---

## Flow 2: Returning User — Instant Jobs Access

### Who this is
A user who has completed onboarding on a previous session.

### Step-by-step

| Step | What the user sees | What happens | Data used |
|------|-------------------|--------------|-----------|
| 1 | App loads, brief spinner | CloudStorage found — preferences loaded locally, zero n8n calls | CloudStorage `prefs` key |
| 2 | **Home** screen immediately | Jobs fetch starts; skeleton loaders shown | jobs.json CDN |
| 3 | Home feed populates | Latest jobs displayed, newest first | allJobs[] |
| 4 | User taps **For You** tab | Personalised recommendations shown immediately | RecommendedJob[] |

**Time target:** Under 2 seconds to first job shown.

---

## Flow 3: Browsing Job Recommendations (For You Tab)

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | List of ranked jobs with match % | Scrolls through cards | — |
| 2 | Job card with 85% match | Taps card | Job details screen opens |
| 3 | Job details screen | Reads description, requirements | — |
| 4 | Sees "Apply Now" button | Taps Apply | Opens application URL in new tab / Telegram browser |
| 5 | Returns to For You | — | Scroll position preserved |

---

## Flow 4: Searching for Jobs (Home Tab)

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | Home screen with search bar | Types "marketing" | Jobs list filters in real time |
| 2 | Filtered results | Scrolls results | — |
| 3 | Finds interesting job | Taps card | Job details opens |
| 4 | Wants to clear | Taps × in search bar | Full list restored |

**Analytics:** `home_search` event fires when user types a non-empty query.

---

## Flow 5: Saving a Job

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | Any job card (Home, For You, Saved) | Taps bookmark icon | Icon fills; job ID added to savedJobIds |
| 2 | — | — | Saved IDs persisted to CloudStorage immediately |
| 3 | Taps Saved tab | — | Saved jobs listed using same JobCard component |
| 4 | Taps bookmark again | — | Job removed from saved; CloudStorage updated |

**Data:** Saved IDs stored as JSON chunks in CloudStorage. No backend call for saves.  
**Analytics:** `job_saved` / `job_unsaved` events.

---

## Flow 6: Sharing a Job (One Tap)

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | Job card or job details | Taps Share icon (share2) | `shareJob()` called |
| 2a | Inside Telegram | — | Web Share API or native Telegram share triggered with job title + details + URL |
| 2b | Outside Telegram (browser) | — | `navigator.share` sheet or clipboard copy |
| 3 | Toast feedback | — | "Link copied" if clipboard used; native sheet if share API available |

**Share message format:**
```
💼 *[Job Title]*
🏢 [Company Name]
📍 [Location]
💰 [Salary]
⏱ [Employment Type]

Find more jobs on KhmerGigs 🇰🇭

https://khmergigs.vercel.app?job=[id]
```

**Analytics:** `job_shared` event with job_id, job_title, source.

---

## Flow 7: Updating Preferences

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | For You tab header | Taps sliders icon | Edit Preferences screen opens |
| 2 | Onboarding flow with pre-filled selections | Changes selections | — |
| 3 | Taps "Save & refresh jobs" | — | New prefs saved to CloudStorage; n8n worker called in background |
| 4 | Loading screen (1.2s) | — | Recommendations recomputed with new prefs |
| 5 | For You tab with fresh results | — | — |

**Analytics:** `preferences_edit_opened`, `preferences_updated`.

---

## Flow 8: Opening Job Details and Applying

| Step | What user sees | What user does | What happens |
|------|---------------|----------------|--------------|
| 1 | Job details screen | Reviews title, company, location, salary, type | — |
| 2 | Skills chips | Reads skills | — |
| 3 | Responsibilities / requirements (if available) | Reads | — |
| 4 | Sees "Apply Now" button | Taps | `openApplyUrl()` opens URL |
| 4a | Inside Telegram | — | `window.open()` in new Telegram browser tab |
| 4b | Outside Telegram | — | Top-level navigation |

**Analytics:** `job_apply_clicked`.

---

## Flow 9: Employer Journey (Future — Not Built Yet)

This flow documents what needs to be built for the employer-side of KhmerGigs.

### Current state
There is no employer-facing interface. All jobs come from the backend via `jobs.json`.

### Planned employer journey

| Step | What employer sees | Required backend |
|------|-------------------|-----------------|
| 1 | Employer landing page or Telegram bot entry | Static landing page or bot command |
| 2 | Register company (name, website, contact) | POST /employers endpoint |
| 3 | Create job posting | POST /jobs endpoint with structured fields |
| 4 | Review posting | GET /jobs/{id} |
| 5 | Publish | PATCH /jobs/{id}/publish (requires approval?) |
| 6 | View applicants (future) | GET /jobs/{id}/applications |
| 7 | Manage listings | GET /employers/{id}/jobs |

### Monetisation opportunities
- **Free tier:** 1 active job posting
- **Basic plan:** 5 job postings, standard listing
- **Featured listing:** Job appears at top of For You recommendations (highlighted)
- **Pro plan:** Unlimited postings + analytics dashboard
- **Candidate discovery:** Search profiles (future, requires user opt-in)

### What needs to be built first
1. n8n webhook for `POST /jobs` with admin approval step
2. Employer registration flow (web or bot)
3. Admin review queue
4. jobs.json dynamically generated instead of static

---

## Error States Reference

| Situation | What user sees | What they can do |
|-----------|---------------|-----------------|
| Jobs fail to load | Error state with Retry button | Tap Retry |
| Recommendations empty | Empty state with Adjust Preferences button | Update preferences |
| Job details not found | "Couldn't load" message | Tap Back |
| Share fails | "Could not share" toast | Try again |
| Preferences save fails | Error toast at top of screen | Will retry on next preference save |
| No internet | Error + Retry on Home screen | Wait and retry |
