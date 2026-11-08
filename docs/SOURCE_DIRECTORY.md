# SOURCE_DIRECTORY.md — Centralized Job Sources Directory

> Verified against the live KhmerGigs database (1,339 active roles).  
> Last updated: November 2026

---

## Identified Job Sources & Brand Mappings

| Source Name | Short | Verified Domain | Telegram Broadcast Channel | Official Brand Color | Fallback Monogram |
|-------------|-------|-----------------|-----------------------------|----------------------|-------------------|
| **CamHR** | `CHR` | `camhr.com` | `https://t.me/camhrjobs` | `#FF7A00` (CamHR Orange) | White on `#FF7A00` |
| **CamboJob** | `CBJ` | `cambojob.com` | `https://t.me/CBjobopportunity` | `#E11D48` (Rose Red) | White on `#E11D48` |
| **Jobify** | `JBF` | `jobify.works` | `https://t.me/jobifyworks` | `#2563EB` (Royal Blue) | White on `#2563EB` |
| **MyWorld Careers** | `MWC` | `myworld-careers.com` | `https://t.me/MyWorldCareersCambodia` | `#0F172A` (Executive Navy) | `#38BDF8` on `#0F172A` |
| **HRINC** | `HRI` | `hrinc.com.kh` | `https://t.me/hrincjobs` | `#991B1B` (Crimson) | White on `#991B1B` |
| **Khmer24** | `K24` | `khmer24.com` | — | `#0284C7` (Khmer24 Blue) | White on `#0284C7` |
| **Open Development Cambodia (ODC)** | `ODC` | `opendevelopmentcambodia.net` | — | `#0D9488` (Teal) | White on `#0D9488` |
| **Khmer Online Jobs** | `KOJ` | `t.me/khmeronlinejobs` | `https://t.me/khmeronlinejobs` | `#0284C7` (Telegram Sky Blue) | Telegram SVG on `#0284C7` |
| **JobNet** | `JBN` | `jobnet.com.kh` | — | `#1D4ED8` (Cobalt) | White on `#1D4ED8` |
| **ReliefWeb** | `RLW` | `reliefweb.int` | — | `#0369A1` (UN Blue) | White on `#0369A1` |

---

## Identity Separation Architecture

In KhmerGigs, there are **two distinct visual identities**:

1. **Company Identity (The Employer)**
   - Renders in the card's top header.
   - 40×40 rounded-xl container with an executive initials monogram.
   - Represents the hiring organization (e.g., ABA Bank, Wavewood, Smart Axiata).

2. **Source Identity (Where the job was discovered)**
   - Renders in the card's bottom attribution footer (`via [Logo] CamHR · 2d ago`).
   - Micro brand badge (16×16) backed by verified domain favicons with immediate graceful fallback to official brand monograms.
   - **Never broken:** Zero broken-image icons or blank placeholders.
