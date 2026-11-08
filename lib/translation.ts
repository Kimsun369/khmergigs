/**
 * Khmer Translation Engine for KhmerGigs
 *
 * Dual-Architecture:
 * 1. Instant Static Dictionary: 0ms offline lookup for all categories, locations,
 *    job types, salary terms, and 70+ standard Cambodian employment titles.
 * 2. Dynamic Open-Source Khmer NLP API: Real-time translation of dynamic job titles
 *    and job descriptions via the MyMemory open translation endpoint with localStorage
 *    caching and HTML cleaning.
 */

export type Locale = "en" | "km"

// In-memory runtime cache for dynamic translations
const memoryCache = new Map<string, string>()
const pendingTranslations = new Map<string, Promise<string>>()

// Storage key for persistent client-side cache
// Bump when translation handling changes so stale, incorrect MT results are ignored.
const STORAGE_KEY = "kg_khmer_translations_v4"

// Product names and technical terms should remain in their familiar form.
// Protect longer names first (for example, "Spring Boot" before "Spring") so
// machine translation does not turn framework names into ordinary Khmer words.
const TECH_TERMS = [
  "Spring Boot", "Spring Framework", "Spring Cloud", "Next.js", "Node.js",
  "PostgreSQL", "Postgres", "Kubernetes", "TypeScript", "JavaScript",
  "Power BI", "WordPress", "GitHub", "GitLab", "C++", "C#", ".NET",
  "Java", "Python", "Docker", "React", "Angular", "Vue.js", "PHP",
  "Laravel", "Django", "Flutter", "HTML", "CSS", "SQL", "API", "AWS",
  "Azure", "Linux", "Android", "iOS", "Excel", "Git", "Node", "MySQL",
  "MongoDB", "Redis", "Kafka", "Jenkins", "Terraform", "Figma",
]

// Load existing cache from localStorage safely
function getStorageCache(): Record<string, string> {
  if (typeof window === "undefined") return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// Save entry to cache
function saveToCache(key: string, val: string) {
  memoryCache.set(key, val)
  if (typeof window === "undefined") return
  try {
    const current = getStorageCache()
    current[key] = val
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
  } catch {
    // quota exceeded or storage disabled
  }
}

/**
 * Pre-compiled, linguistically accurate English-to-Khmer terminology dictionary.
 */
export const STATIC_DICTIONARY: Record<string, string> = {
  // ── Navigation & UI ──────────────────────────────────
  "KhmerGigs": "KhmerGigs",
  "Jobs": "ការងារ",
  "Saved": "បានរក្សាទុក",
  "For You": "សម្រាប់អ្នក",
  "Home": "ទំព័រដើម",
  "Profile": "គណនី",
  "Preferences": "ចំណូលចិត្ត",
  "Search jobs...": "ស្វែងរកការងារ...",
  "Search": "ស្វែងរក",
  "Filter": "តម្រង",
  "All": "ទាំងអស់",
  "Share": "ចែករំលែក",
  "Copied": "បានចម្លង",
  "Save": "រក្សាទុក",
  "Apply": "ដាក់ពាក្យ",
  "Quick Apply": "ដាក់ពាក្យរហ័ស",
  "Easily apply": "ដាក់ពាក្យងាយស្រួល",
  "Apply Now": "ដាក់ពាក្យឥឡូវនេះ",
  "Translate": "បកប្រែ",
  "Translate to Khmer": "បកប្រែជាភាសាខ្មែរ",
  "Translated to Khmer": "បានបកប្រែជាភាសាខ្មែរ",
  "View Details": "មើលព័ត៌មានលម្អិត",
  "View original job": "មើលប្រកាសការងារដើម",
  "Save job": "រក្សាទុកការងារ",
  "Location": "ទីតាំង",
  "Work type": "ប្រភេទការងារ",
  "Not selected": "មិនទាន់បានជ្រើសរើស",
  "Your choices": "ជម្រើសរបស់អ្នក",
  "Organisation": "ក្រុមហ៊ុន ឬស្ថាប័ន",
  "Source": "ប្រភព",
  "Hiring:": "កំពុងជ្រើសរើសបុគ្គលិក៖",
  "Sector": "វិស័យការងារ",
  "Job Type": "ប្រភេទការងារ",
  "Seniority": "កម្រិតបទពិសោធន៍",
  "Skills": "ជំនាញ",
  "Languages Required": "ភាសាដែលត្រូវការ",
  "Closing Date": "ថ្ងៃផុតកំណត់",
  "Added": "បានបន្ថែមនៅ",
  "Accounting": "គណនេយ្យ",
  "Production": "ផលិតកម្ម",
  "Physical Fitness": "កាយសម្បទារឹងមាំ",
  "Honesty": "ភាពស្មោះត្រង់",
  "Diligence": "ការឧស្សាហ៍ព្យាយាម",
  "Creativity": "ភាពច្នៃប្រឌិត",
  "Responsibility": "ការទទួលខុសត្រូវ",
  "Literacy": "អក្ខរកម្ម",
  "Posted": "ប្រកាសនៅ",
  "Not provided": "មិនទាន់មានព័ត៌មាន",
  "Back": "ថយក្រោយ",
  "Close": "បិទ",
  "via": "តាមរយៈ",
  "match": "ត្រូវនឹងអ្នក",
  "Today": "ថ្ងៃនេះ",
  "Yesterday": "ម្សិលមិញ",
  "Recently": "ថ្មីៗនេះ",
  "Closed": "ផុតកំណត់",
  "No saved jobs yet": "មិនទាន់មានការងាររក្សាទុកនៅឡើយទេ",
  "Jobs matching your preferences": "ការងារដែលត្រូវនឹងចំណូលចិត្តរបស់អ្នក",
  "Fresh opportunities across Cambodia": "ឱកាសការងារថ្មីៗទូទាំងប្រទេសកម្ពុជា",
  "Tell us what you're looking for — takes under 30 seconds": "ប្រាប់យើងថាអ្នកកំពុងស្វែងរកការងារបែបណា — ចំណាយពេលមិនដល់ ៣០ វិនាទីទេ",
  "jobs available — tell us your preferences to see the best matches": "ការងារកំពុងប្រកាស — ជ្រើសរើសចំណូលចិត្ត ដើម្បីមើលការងារដែលសមនឹងអ្នក",
  "Show me jobs →": "បង្ហាញការងារ →",
  "Matched to": "ត្រូវនឹង",
  "Based on your preferences": "ផ្អែកលើចំណូលចិត្តរបស់អ្នក",
  "Edit preferences": "កែចំណូលចិត្ត",
  "Edit Preferences": "កែចំណូលចិត្ត",
  "No exact matches — showing all available jobs instead.": "មិនមានការងារដែលត្រូវគ្នាពេញលេញទេ — កំពុងបង្ហាញការងារទាំងអស់ដែលមាន។",
  "Adjust preferences": "កែចំណូលចិត្ត",
  "Showing": "កំពុងបង្ហាញ",
  "matched roles": "ការងារដែលត្រូវគ្នា",
  "jobs available": "ការងារដែលមាន",
  "Could not load recommendations": "មិនអាចផ្ទុកការងារណែនាំបានទេ",
  "Could not load jobs": "មិនអាចផ្ទុកការងារបានទេ",
  "Check your connection and try again.": "សូមពិនិត្យការតភ្ជាប់អ៊ីនធឺណិត ហើយព្យាយាមម្ដងទៀត។",
  "Try again": "ព្យាយាមម្ដងទៀត",
  "No matching jobs yet": "មិនទាន់មានការងារដែលត្រូវគ្នាទេ",
  "Try widening your preferences, or check back soon for new listings.": "សាកល្បងបន្ថែមជម្រើសការងារ ឬត្រឡប់មកពិនិត្យម្ដងទៀតនៅពេលក្រោយ។",
  "Saved Jobs": "ការងារដែលបានរក្សាទុក",
  "Jobs you save appear here": "ការងារដែលអ្នករក្សាទុកនឹងបង្ហាញនៅទីនេះ",
  "Tap the bookmark on any job to save it here.": "ចុចប៊ូតុង «រក្សាទុក» លើការងារណាមួយ ដើម្បីរក្សាទុកវានៅទីនេះ។",
  "Browse jobs": "មើលការងារ",
  "Guest": "អ្នកប្រើប្រាស់ភ្ញៀវ",
  "Signed in via Telegram": "បានចូលតាម Telegram",
  "Telegram username unavailable": "Telegram មិនបានផ្តល់ឈ្មោះអ្នកប្រើប្រាស់ទេ",
  "Guest — no Telegram session": "អ្នកប្រើប្រាស់ភ្ញៀវ — មិនបានចូល Telegram",
  "My Preferences": "ចំណូលចិត្តរបស់ខ្ញុំ",
  "Not set": "មិនទាន់កំណត់",
  "Job type": "ប្រភេទការងារ",
  "Field": "វិស័យការងារ",
  "Location": "ទីតាំង",
  "Set Preferences": "កំណត់ចំណូលចិត្ត",
  "Saved jobs": "ការងារដែលបានរក្សាទុក",
  "About KhmerGigs": "អំពី KhmerGigs",
  "KhmerGigs helps people in Cambodia discover job opportunities quickly. Answer a few questions and get matched to roles that fit your preferences. 🇰🇭": "KhmerGigs ជួយអ្នកនៅកម្ពុជាស្វែងរកឱកាសការងារបានងាយស្រួល។ ឆ្លើយសំណួរបន្តិចបន្តួច ដើម្បីទទួលបានការណែនាំការងារដែលសមនឹងចំណូលចិត្តរបស់អ្នក។ 🇰🇭",
  "Latest Jobs": "ការងារថ្មីៗ",
  "Loading…": "កំពុងផ្ទុក…",
  "open roles": "ការងារកំពុងជ្រើសរើស",
  "Search jobs, companies, skills…": "ស្វែងរកការងារ ក្រុមហ៊ុន ឬជំនាញ…",
  "Search jobs": "ស្វែងរកការងារ",
  "Personalised recommendations": "ការងារណែនាំសម្រាប់អ្នក",
  "For You — personalised recommendations": "សម្រាប់អ្នក — ការងារណែនាំតាមចំណូលចិត្ត",
  "No matching jobs": "រកមិនឃើញការងារដែលត្រូវគ្នាទេ",
  "Try different keywords.": "សាកល្បងប្រើពាក្យស្វែងរកផ្សេង។",
  "Clear search": "លុបពាក្យស្វែងរក",
  "Loading more…": "កំពុងផ្ទុកបន្ថែម…",
  "You're all caught up ·": "អ្នកបានមើលអស់ហើយ ·",
  "Find Jobs That Fit You": "ស្វែងរកការងារដែលសមនឹងអ្នក",
  "Tell us what you're looking for and we'll find jobs that match your preferences.": "ប្រាប់យើងពីការងារដែលអ្នកកំពុងស្វែងរក ដើម្បីទទួលបានការណែនាំការងារដែលសមនឹងចំណូលចិត្តរបស់អ្នក។",
  "Matched to your goals": "ការងារដែលសមនឹងគោលដៅរបស់អ្នក",
  "Jobs across Cambodia": "ការងារនៅទូទាំងប្រទេសកម្ពុជា",
  "Clear salary ranges": "ព័ត៌មានប្រាក់ខែច្បាស់លាស់",
  "Get Started": "ចាប់ផ្ដើម",
  "Finding jobs for you…": "កំពុងស្វែងរកការងារសម្រាប់អ្នក…",
  "Matching your preferences to open roles in Cambodia": "កំពុងស្វែងរកការងារនៅកម្ពុជាដែលត្រូវនឹងចំណូលចិត្តរបស់អ្នក",
  "What are you looking for?": "តើអ្នកកំពុងស្វែងរកការងារបែបណា?",
  "Pick the type of work that fits your life": "ជ្រើសរើសប្រភេទការងារដែលសមនឹងអ្នក",
  "What field interests you?": "តើអ្នកចាប់អារម្មណ៍លើវិស័យអ្វី?",
  "We'll prioritise jobs in your area of interest": "យើងនឹងណែនាំការងារក្នុងវិស័យដែលអ្នកចាប់អារម្មណ៍ជាមុន",
  "Where do you want to work?": "តើអ្នកចង់ធ្វើការនៅទីណា?",
  "Pick a city or choose remote": "ជ្រើសរើសទីក្រុង ឬការងារពីចម្ងាយ",
  "Find my jobs": "ស្វែងរកការងារ",
  "Save & refresh jobs": "រក្សាទុក និងធ្វើបច្ចុប្បន្នភាពការងារ",
  "Continue": "បន្ត",
  "Skip this step": "រំលងជំហាននេះ",
  "Full-time job": "ការងារពេញម៉ោង",
  "Part-time / Flexible": "ការងារក្រៅម៉ោង / ម៉ោងបត់បែន",
  "Internship": "កម្មសិក្សា",
  "Freelance / Gig": "ការងារឯករាជ្យ / ការងារតាមគម្រោង",
  "Hotel & Tourism": "សណ្ឋាគារ និងទេសចរណ៍",
  "Marketing & Sales": "ទីផ្សារ និងការលក់",
  "Health & NGO": "សុខាភិបាល និងអង្គការក្រៅរដ្ឋាភិបាល",
  "Finance & Banking": "ហិរញ្ញវត្ថុ និងធនាគារ",
  "Education & Teaching": "ការអប់រំ និងការបង្រៀន",
  "Construction & Engineering": "សំណង់ និងវិស្វកម្ម",
  "Logistics & Supply Chain": "ដឹកជញ្ជូន និងខ្សែសង្វាក់ផ្គត់ផ្គង់",
  "Any / Show me everything": "គ្រប់វិស័យ / បង្ហាញការងារទាំងអស់",
  "Other provinces": "ខេត្តផ្សេងៗ",
  "Remote / Anywhere": "ការងារពីចម្ងាយ / គ្រប់ទីកន្លែង",
  "Not specified": "មិនបានបញ្ជាក់",
  "Share job": "ចែករំលែកការងារ",
  "Save this job": "រក្សាទុកការងារនេះ",
  "Share this job": "ចែករំលែកការងារនេះ",
  "Job details": "ព័ត៌មានលម្អិតអំពីការងារ",
  "We couldn't load this job. Please go back and try again.": "មិនអាចផ្ទុកការងារនេះបានទេ។ សូមត្រឡប់ក្រោយ ហើយព្យាយាមម្ដងទៀត។",
  "Discovered on": "ប្រភពការងារ៖",
  "Key Skills": "ជំនាញសំខាន់ៗ",
  "About the role": "អំពីការងារនេះ",
  "Responsibilities": "ភារកិច្ចការងារ",
  "Requirements": "លក្ខខណ្ឌតម្រូវ",
  "Benefits": "អត្ថប្រយោជន៍",
  "Salary": "ប្រាក់ខែ",
  "Category": "ប្រភេទការងារ",
  "Language": "ភាសា",
  "Language selection": "ជ្រើសរើសភាសា",
  "Back to top": "ត្រឡប់ទៅខាងលើ",
  "Company not specified": "មិនបានបញ្ជាក់ឈ្មោះក្រុមហ៊ុន",
  "Education": "ការអប់រំ",
  "Construction": "សំណង់",
  "Logistics": "ដឹកជញ្ជូន",
  "Any field": "គ្រប់វិស័យ",

  // ── Job Types ────────────────────────────────────────
  "Full-time": "ពេញម៉ោង",
  "Part-time": "ក្រៅម៉ោង",
  "Freelance": "ការងារសេរី",
  "Contract": "កិច្ចសន្យា",

  // ── Sectors & Fields ─────────────────────────────────
  "Hotel & Hospitality": "សណ្ឋាគារ & បដិសណ្ឋារកិច្ច",
  "Hospitality": "បដិសណ្ឋារកិច្ច",
  "Tech & IT": "បច្ចេកវិទ្យា & IT",
  "Marketing": "ទីផ្សារ & ប្រព័ន្ធផ្សព្វផ្សាយ",
  "Health": "សុខាភិបាល & វេជ្ជសាស្ត្រ",
  "Finance": "ហិរញ្ញវត្ថុ & ធនាគារ",
  "General": "ទូទៅ",

  // ── Locations ────────────────────────────────────────
  "Phnom Penh": "រាជធានីភ្នំពេញ",
  "Siem Reap": "ខេត្តសៀមរាប",
  "Battambang": "ខេត្តបាត់ដំបង",
  "Sihanoukville": "ក្រុងព្រះសីហនុ",
  "Kampot": "ខេត្តកំពត",
  "Provinces": "តាមបណ្តាខេត្ត",
  "Remote": "ធ្វើការពីផ្ទះ (Remote)",
  "Cambodia": "ប្រទេសកម្ពុជា",

  // ── Salary Terms ─────────────────────────────────────
  "Salary Negotiable": "ប្រាក់ខែចរចា",
  "Negotiable": "ចរចាបាន",
  "Competitive": "ប្រកួតប្រជែង",
  "month": "ខែ",
  "hour": "ម៉ោង",
  "an hour": "ក្នុងមួយម៉ោង",
  "per month": "ក្នុងមួយខែ",

  // ── Standard Cambodian Job Titles ────────────────────
  "Finance Staff": "បុគ្គលិកហិរញ្ញវត្ថុ",
  "Operation Executive": "មន្ត្រីប្រតិបត្តិការ",
  "Accountant": "គណនេយ្យករ",
  "Senior Accountant": "គណនេយ្យករជាន់ខ្ពស់",
  "Accounting Officer": "មន្ត្រីគណនេយ្យ",
  "Admin Assistant": "ជំនួយការរដ្ឋបាល",
  "Administrative Officer": "មន្ត្រីរដ្ឋបាល",
  "Human Resources Officer": "មន្ត្រីធនធានមនុស្ស (HR)",
  "HR Executive": "មន្ត្រីប្រតិបត្តិធនធានមនុស្ស",
  "HR Manager": "អ្នកគ្រប់គ្រងធនធានមនុស្ស",
  "Sales Representative": "អ្នកតំណាងផ្នែកលក់",
  "Sales Executive": "មន្ត្រីផ្នែកលក់",
  "Sales Manager": "អ្នកគ្រប់គ្រងផ្នែកលក់",
  "Cashier": "បេឡាករ / បេឡាការិនី (Cashier)",
  "Receptionist": "បុគ្គលិកទទួលភ្ញៀវ",
  "Customer Service": "ផ្នែកបម្រើអតិថិជន",
  "Customer Service Representative": "តំណាងផ្នែកបម្រើអតិថិជន",
  "Driver": "អ្នកបើកបរ",
  "Delivery Driver": "អ្នកដឹកជញ្ជូនទំនិញ",
  "Warehouse Staff": "បុគ្គលិកឃ្លាំង",
  "Warehouse Supervisor": "អ្នកត្រួតពិនិត្យឃ្លាំង",
  "Security Guard": "សន្តិសុខការពារ",
  "Chef": "ចុងភៅ",
  "Cook": "អ្នកធ្វើម្ហូប",
  "Waiter": "អ្នករត់តុ (ប្រុស)",
  "Waitress": "អ្នករត់តុ (ស្រី)",
  "Barista": "អ្នកឆុងកាហ្វេ (Barista)",
  "Bartender": "អ្នកលាយភេសជ្ជៈ",
  "Housekeeping": "បុគ្គលិកអនាម័យ / បន្ទប់",
  "Cleaner": "បុគ្គលិកអនាម័យ",
  "Nurse": "គិលានុបដ្ឋាយិកា",
  "Pharmacist": "ឱសថការី",
  "Teacher": "គ្រូបង្រៀន",
  "English Teacher": "គ្រូបង្រៀនភាសាអង់គ្លេស",
  "Graphic Designer": "អ្នករចនាក្រាហ្វិក",
  "Marketing Officer": "មន្ត្រីទីផ្សារ",
  "Digital Marketing Executive": "មន្ត្រីទីផ្សារឌីជីថល",
  "Content Creator": "អ្នកបង្កើតមាតិកា",
  "Software Engineer": "វិស្វករសូហ្វវែរ",
  "Full Stack Developer": "អ្នកអភិវឌ្ឍន៍ Full Stack",
  "Frontend Developer": "អ្នកអភិវឌ្ឍន៍ Frontend",
  "Backend Developer": "អ្នកអភិវឌ្ឍន៍ Backend",
  "Mobile App Developer": "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
  "IT Support": "ផ្នែកជំនួយការបច្ចេកវិទ្យា IT",
  "Network Engineer": "វិស្វករបណ្តាញអ៊ីនធឺណិត",
  "Civil Engineer": "វិស្វករសំណង់ស៊ីវិល",
  "Site Engineer": "វិស្វករការដ្ឋាន",
  "Architect": "ស្ថាបត្យករ",
  "Procurement Officer": "មន្ត្រីផ្នែកលទ្ធកម្ម",
  "Store Manager": "អ្នកគ្រប់គ្រងហាង",
  "Branch Manager": "អ្នកគ្រប់គ្រងសាខា",
  "Software Developer": "អ្នកអភិវឌ្ឍកម្មវិធី",
  "Front Office Receptionist": "បុគ្គលិកទទួលភ្ញៀវផ្នែកខាងមុខ",
  "Remote Frontend Engineer": "វិស្វករអភិវឌ្ឍន៍ Frontend ពីចម្ងាយ",
  "Community Health Officer": "មន្ត្រីសុខាភិបាលសហគមន៍",
  "Junior Loan Officer": "មន្ត្រីឥណទានកម្រិតដំបូង",
  "Marketing Intern": "សិក្ខាកាមផ្នែកទីផ្សារ",
  "IT Support Officer": "មន្ត្រីជំនួយផ្នែក IT",
  "Tour Coordinator": "អ្នកសម្របសម្រួលទេសចរណ៍",
}

/**
 * Strips HTML tags and excessive spacing returned by MT endpoints
 */
function cleanKhmerText(str: string): string {
  if (!str) return ""
  return str
    .replace(/<[^>]*>/g, "") // strip html like <g id="1">
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

/**
 * Fast synchronous dictionary translation
 */
export function t(key: string, locale: Locale): string {
  if (locale === "en" || !key) return key
  const trimmed = key.trim()
  if (STATIC_DICTIONARY[trimmed]) {
    return STATIC_DICTIONARY[trimmed]
  }

  // Case-insensitive dictionary match
  const lower = trimmed.toLowerCase()
  for (const [dictKey, dictVal] of Object.entries(STATIC_DICTIONARY)) {
    if (dictKey.toLowerCase() === lower) {
      return dictVal
    }
  }

  return key
}

/**
 * Translates dynamic text (job titles, descriptions, notes) into Khmer.
 * Uses:
 * 1. In-memory and localStorage cache
 * 2. Static dictionary match
 * 3. Free open-source MyMemory Khmer translation API
 */
export async function translateDynamicToKhmer(text: string): Promise<string> {
  if (!text || !text.trim()) return text

  const cleanInput = text.trim()
  // The provider accepts up to 500 bytes per segment. Keep longer job text
  // intact in English rather than asking it to translate a truncated phrase.
  if (new TextEncoder().encode(cleanInput).length > 500) return cleanInput

  // Existing Khmer text should not be sent to the English-to-Khmer service.
  if (/[\u1780-\u17ff]/.test(cleanInput)) return cleanInput

  // 1. Check instant static dictionary
  if (STATIC_DICTIONARY[cleanInput]) {
    return STATIC_DICTIONARY[cleanInput]
  }

  // Keep technology and product names intact while translating the ordinary
  // words around them (e.g. "Senior Spring Boot Developer").
  const protectedTerms: string[] = []
  const escapedTerms = [...TECH_TERMS]
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  const termPattern = new RegExp(`(^|[^A-Za-z0-9])(${escapedTerms.join("|")})(?=$|[^A-Za-z0-9])`, "gi")
  const translationInput = cleanInput.replace(termPattern, (match, prefix: string, term: string) => {
    const index = protectedTerms.push(term) - 1
    return `${prefix}ZXQTECH${index}QXZ`
  })

  // The string contains only technical terms, so there is nothing to translate.
  if (!/[A-Za-z]/.test(translationInput.replace(/ZXQTECH\d+QXZ/g, ""))) return cleanInput

  // 2. Check memory cache
  if (memoryCache.has(cleanInput)) {
    return memoryCache.get(cleanInput)!
  }

  // 3. Check localStorage cache
  const storageCache = getStorageCache()
  if (storageCache[cleanInput]) {
    memoryCache.set(cleanInput, storageCache[cleanInput])
    return storageCache[cleanInput]
  }

  const pending = pendingTranslations.get(cleanInput)
  if (pending) return pending

  // 4. Query Open MyMemory Translation API
  const request = (async () => {
    let timer: ReturnType<typeof setTimeout> | undefined
    try {
    const encoded = encodeURIComponent(translationInput)
    const url = `https://api.mymemory.translated.net/get?q=${encoded}&langpair=en|km`
    
    // 3.5-second timeout to maintain rapid UI responsiveness
    const controller = new AbortController()
    timer = setTimeout(() => controller.abort(), 3500)

    const res = await fetch(url, { signal: controller.signal })

    if (res.ok) {
      const data = await res.json()
      const rawTranslated = data?.responseData?.translatedText
      if (rawTranslated && typeof rawTranslated === "string") {
        const cleaned = cleanKhmerText(rawTranslated)
        // Ensure result isn't just an error message
        if (cleaned && !cleaned.toLowerCase().includes("mymemory") && !cleaned.toLowerCase().includes("quota")) {
          const restored = cleaned.replace(/ZXQTECH(\d+)QXZ/gi, (marker, index: string) => {
            const term = protectedTerms[Number(index)]
            return term ?? marker
          })
          saveToCache(cleanInput, restored)
          return restored
        }
      }
    }
    } catch {
      // Network timeout, quota, or offline. Keep the source text readable.
    } finally {
      if (timer) clearTimeout(timer)
    }

    // Fallback: Return original string if translation is unavailable.
    return cleanInput
  })()

  pendingTranslations.set(cleanInput, request)
  try {
    return await request
  } finally {
    pendingTranslations.delete(cleanInput)
  }
}

/**
 * Helper to translate salary strings nicely for Cambodian job seekers
 */
export function formatSalaryDisplay(salary: string | undefined, locale: Locale): string {
  if (!salary || salary === "Negotiable" || /^(unknown|n\/a|none)$/i.test(salary)) {
    return locale === "km" ? "ប្រាក់ខែចរចា" : "Salary Negotiable"
  }
  if (locale === "km") {
    return salary
      .replace(/Negotiable/i, "ចរចា")
      .replace(/\/month/i, "/ខែ")
      .replace(/\/hour/i, "/ម៉ោង")
  }
  return salary
}

/**
 * Helper to translate locations nicely
 */
export function formatLocationDisplay(location: string | undefined, locale: Locale): string {
  if (!location) return locale === "km" ? "ប្រទេសកម្ពុជា" : "Cambodia"
  if (locale === "km") {
    let res = location
    for (const [en, km] of Object.entries(STATIC_DICTIONARY)) {
      if (["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampot", "Provinces", "Remote", "Cambodia"].includes(en)) {
        res = res.replace(new RegExp(en, "gi"), km)
      }
    }
    return res
  }
  return location
}
