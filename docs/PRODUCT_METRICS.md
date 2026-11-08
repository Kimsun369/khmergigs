# PRODUCT_METRICS.md — KhmerGigs

> Document of analytics events, metric definitions, and tracking implementation.
> App: KhmerGigs Telegram Mini App  
> Date: November 2026

---

## Overview

KhmerGigs uses a lightweight analytics implementation via Vercel Analytics `track()`.  
Events are recorded client-side and sent directly to Vercel's analytics endpoint (in production) without touching backend servers.

**Tracking helper location:** `lib/utils.ts` → `trackEvent(event, properties)`

---

## Tracked Events

| Event Name | Trigger | Properties | Status |
|------------|---------|------------|--------|
| `onboarding_started` | User opens app without existing preferences | — | Active |
| `onboarding_step_completed` | User completes a step in the onboarding flow | `step` (1, 2, 3), `skipped` (0, 1) | Active |
| `onboarding_step_skipped` | User taps "Skip this step" | `step` (1, 2, 3) | Active |
| `onboarding_completed` | User completes or skips the last onboarding step | `job_type`, `field`, `location` | Active |
| `recommendations_loading_started` | Recommendation loading animation starts | — | Active |
| `recommendations_loading_finished` | Recommendation loading animation finishes | — | Active |
| `job_opened` | User taps a job card to view details | `job_id`, `job_title` | Active |
| `job_saved` | User taps bookmark icon to save a job | `job_id`, `job_title`, `source` | Active |
| `job_unsaved` | User removes a saved job | `job_id`, `job_title`, `source` | Active |
| `job_shared` | User taps share button (card or details) | `job_id`, `job_title`, `source` | Active |
| `job_apply_clicked` | User taps "Apply Now" button in job details | `job_id`, `job_title` | Active |
| `home_search` | User enters a search query on the Home screen | `query` | Active |
| `preferences_edit_opened` | User opens preferences editor | `source` (profile, for_you) | Active |
| `preferences_updated` | Preferences saved to storage/backend | `job_type`, `field`, `location` | Active |

---

## Core Product Metrics (Formulas)

### 1. Onboarding Completion Rate
$$\text{Onboarding Completion Rate} = \frac{\text{Unique users with } \texttt{onboarding\_completed}}{\text{Unique users with } \texttt{onboarding\_started}} \times 100$$
**Target:** > 80% (enabled by optional skipping).

### 2. Time to First Job Discovered
$$\text{Time to First Job} = \text{Timestamp of first } \texttt{job\_opened} - \text{Timestamp of } \texttt{onboarding\_started}$$
**Target:** < 30 seconds.

### 3. Job Share Rate (Virality Indicator)
$$\text{Share Rate} = \frac{\text{Total } \texttt{job\_shared} \text{ events}}{\text{Total } \texttt{job\_opened} \text{ events}} \times 100$$
**Target:** > 5% of job views result in a share.

### 4. Job Save Rate (Intent Indicator)
$$\text{Save Rate} = \frac{\text{Total } \texttt{job\_saved} \text{ events}}{\text{Total } \texttt{job\_opened} \text{ events}} \times 100$$
**Target:** > 10% of job views result in a save.

### 5. Apply Click-Through Rate
$$\text{Apply CTR} = \frac{\text{Total } \texttt{job\_apply\_clicked} \text{ events}}{\text{Total } \texttt{job\_opened} \text{ events}} \times 100$$
**Target:** > 15% of job views proceed to application.

---

## Where Events Are Recorded

- **Client:** `trackEvent()` calls `window.va('event', ...)`
- **Transport:** HTTPS POST to Vercel Analytics endpoint (in production)
- **Dashboard:** Vercel Analytics Dashboard → Custom Events
- **Privacy:** No PII (names, phone numbers, emails) is collected. Telegram user ID is NOT sent to Vercel Analytics to maintain user privacy.

---

## What Requires Additional Backend Work

| Metric / Capability | Current Limitation | What Backend Needs to Provide |
|---------------------|-------------------|-------------------------------|
| Shared link conversion (did a recipient open the app?) | Deep linking (`?job=xxx`) not parsed on load | Add query param parsing in AppProvider to navigate to shared job on launch |
| Unique active users | Telegram user ID not tracked in analytics | Anonymised user ID hashing before sending to analytics |
| Search terms analytics | Vercel Analytics doesn't store raw strings well | Dedicated analytics endpoint (PostHog / Mixpanel / n8n webhook) |
| Employer metrics (applications per job) | Apply link is external — can't track completion | Track via redirect URL or application form within the Mini App |
