# PRODUCT_ROADMAP.md — KhmerGigs

> Product roadmap separating completed improvements from future opportunities.
> Current status: Stealth Mode (not public)  
> Last updated: November 2026

---

## Completed Improvements (Phase 1–3 Redesign)

### ✅ UX / UI Transformation
- **Unified JobCard:** Single reusable card across Home, For You, and Saved Jobs. Replaced heavy canvas PosterCard.
- **Company Avatars:** Generates initials and a persistent palette color from company name (no missing image problems).
- **Match Indicator:** Displays match percentage only when real match data is present (capped at 99%, minimum 40%).
- **Mobile-first Design:** Full safe-area inset support, touch targets ≥ 36px, no horizontal overflow.
- **Loading Skeletons:** Animated pulse placeholders matching real card layout (no more blank screens).

### ✅ Onboarding Under 30 Seconds
- **Optional Skipping:** "Skip this step" on every question — users can bypass without making choices.
- **Sensible Fallbacks:** If no preferences are set, shows all open jobs ranked by recency.
- **Zero Registration:** Uses Telegram user session — no email, no password, no CV required.

### ✅ One-Tap Sharing
- **Native Share Integration:** Uses Web Share API or Telegram switchInlineQuery with fallback to clipboard.
- **Clean Share Message:** Structured text with job title, company, location, salary, and job link.
- **Toast Feedback:** Clear confirmation when links are copied.

### ✅ Analytics Foundation
- **Lightweight Event Tracking:** 14 distinct events tracked via Vercel Analytics `track()`.
- **Privacy-safe:** Zero PII collected; Telegram IDs kept strictly out of third-party trackers.

### ✅ Git & Repository Health
- **Fixed .gitignore:** Added `.next/`, `*.tsbuildinfo`, `out/` to prevent large binary cache files from polluting git history.

---

## Remaining for Next Phase (Phase 4)

### 🔄 In-Progress / Ready to Implement
1. **Deep Linking Support:**
   - Parse `?job=[id]` on app launch
   - Open the specific job directly when arriving via a shared link
   - Graceful fallback to Home if job not found

2. **Khmer Language Support:**
   - Add Khmer translations for UI strings (options are already bilingual)
   - Toggle button in Profile screen

3. **Offline Caching:**
   - Cache `jobs.json` in localStorage with a 30-minute TTL
   - Instant load even on slow Cambodian mobile networks (Smart, Cellcard, Metfone)

4. **Category Quick Filters:**
   - Horizontal pill bar on Home screen for instant 1-tap filtering by field

---

## Future Opportunities (Post-Stealth Launch)

### 🏢 Employer Platform & Monetisation

KhmerGigs currently serves job seekers. The next major growth lever is the employer experience:

```
┌─────────────────────────────────────────────────────────────┐
│                    KHMERGIGS PLATFORM                       │
│                                                             │
│   ┌───────────────────────┐     ┌───────────────────────┐   │
│   │   Job Seeker App      │     │   Employer Portal     │   │
│   │   (Telegram Mini App) │     │   (Web Dashboard)     │   │
│   │                       │     │                       │   │
│   │ • Browse & search     │     │ • Post & edit jobs    │   │
│   │ • Personalised match  │     │ • Manage applicants   │   │
│   │ • 1-tap share         │     │ • Performance stats   │   │
│   │ • Save jobs           │     │ • Promoted listings   │   │
│   └───────────┬───────────┘     └───────────┬───────────┘   │
│               │                             │               │
│               └──────────────┬──────────────┘               │
│                              │                              │
│                    ┌─────────▼─────────┐                    │
│                    │  KhmerGigs Core   │                    │
│                    │  • jobs.json CDN  │                    │
│                    │  • Cloudflare API │                    │
│                    │  • n8n workflows  │                    │
│                    └───────────────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

#### Proposed Monetisation Model
| Tier | Pricing | Inclusions |
|------|---------|------------|
| **Community** | Free | 1 active job post, standard listing, 30-day expiry |
| **Startup** | \$15 / job | 1 job post + "Featured" badge + pinned to top of For You for 7 days |
| **Growth** | \$49 / month | 5 active posts, company logo, basic analytics (views, applies) |
| **Enterprise** | \$149 / month | Unlimited posts, priority matching, applicant export, dedicated support |

#### Payment Integration for Cambodia
- **Bakong / KHQR:** Instant QR code payment via any Cambodian bank (ABA, ACLEDA, Wing, etc.)
- Highly recommended: integrate KHQR via ABA PayWay or Bakong Open API for zero-friction local payments

### 🤖 Telegram Bot Features
- **Job Alerts:** Bot sends weekly digest of new matching roles directly in chat
- **Quick Apply via Bot:** "Forward CV to employer" command inside the bot

### 📊 Employer Analytics Dashboard
- Total views per listing
- Apply button clicks
- Share count per listing
- Demographics breakdown (preferred fields of interested candidates)
