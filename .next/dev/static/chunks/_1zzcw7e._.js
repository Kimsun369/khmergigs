(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/app-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const EMPTY_PREFS = {
    jobType: null,
    field: null,
    location: null
};
function AppProvider({ children }) {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("checking");
    const [preferences, setPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_PREFS);
    const [savedJobIds, setSavedJobIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recommendedJobs, setRecommendedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allJobs, setAllJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedJobId, setSelectedJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previousScreen, setPreviousScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [telegramUser, setTelegramUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jobsError, setJobsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Derived: savedJobs = full Job objects for saved ids ─────────────────────
    // Computed from allJobs + savedJobIds so the Saved tab is always consistent.
    const savedJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppProvider.useMemo[savedJobs]": ()=>allJobs.filter({
                "AppProvider.useMemo[savedJobs]": (j)=>savedJobIds.includes(j.id)
            }["AppProvider.useMemo[savedJobs]"])
    }["AppProvider.useMemo[savedJobs]"], [
        allJobs,
        savedJobIds
    ]);
    // ── Dedup guard: prevent double n8n saves within 10 s ───────────────────────
    const lastSaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDuplicateSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[isDuplicateSave]": (prefs)=>{
            const key = JSON.stringify(prefs);
            const last = lastSaveRef.current;
            if (last && last.key === key && Date.now() - last.at < 10_000) return true;
            lastSaveRef.current = {
                key,
                at: Date.now()
            };
            return false;
        }
    }["AppProvider.useCallback[isDuplicateSave]"], []);
    // ── Load all jobs and compute recommendations ────────────────────────────────
    const loadJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[loadJobs]": async (prefs)=>{
            try {
                setJobsError(null);
                const [jobs, recs] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllJobs"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendations"])(prefs)
                ]);
                setAllJobs(jobs);
                setRecommendedJobs(recs);
            } catch (err) {
                console.error("[provider] loadJobs failed", err);
                setJobsError("We couldn't load recommendations right now. Please try again.");
            }
        }
    }["AppProvider.useCallback[loadJobs]"], []);
    const retryLoadJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[retryLoadJobs]": ()=>{
            loadJobs(preferences);
        }
    }["AppProvider.useCallback[retryLoadJobs]"], [
        loadJobs,
        preferences
    ]);
    // ── App initialisation ───────────────────────────────────────────────────────
    // Use a ref to prevent double-execution in React StrictMode.
    const initStarted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (initStarted.current) return;
            initStarted.current = true;
            let cancelled = false;
            async function init() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initTelegram"])();
                const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectiveTelegramUser"])();
                if (cancelled) return;
                setTelegramUser(user);
                // Always land on Home regardless of whether the user has preferences or not.
                // Jobs start loading immediately; the For You tab shows onboarding inline
                // if no preferences are found.
                if (!user) {
                    // No Telegram user (browser preview, etc.) — still go to Home.
                    setScreen("home");
                    void loadJobs(EMPTY_PREFS);
                    return;
                }
                // ── Step 1: try local storage for preferences ──────────────────────────
                const storedPrefs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadPreferences"])();
                if (cancelled) return;
                if (storedPrefs) {
                    // Fast path: we have local prefs → go straight to home, zero n8n calls.
                    setPreferences(storedPrefs);
                    // Load saved job ids from storage in parallel with jobs fetch.
                    const storedIds = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSavedJobIds"])();
                    if (!cancelled && storedIds !== null) setSavedJobIds(storedIds);
                    setScreen("home");
                    void loadJobs(storedPrefs);
                    return;
                }
                // ── Step 2: no local prefs → one-time migration from n8n ──────────────
                const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(user.id);
                if (cancelled) return;
                const hasSavedPrefs = profile && (profile.job_type || profile.field || profile.location);
                if (hasSavedPrefs && profile) {
                    const prefs = {
                        jobType: profile.job_type,
                        field: profile.field,
                        location: profile.location
                    };
                    setPreferences(prefs);
                    // Persist for future sessions (no more n8n profile calls).
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePreferencesToStorage"])(prefs);
                    setScreen("home");
                    void loadJobs(prefs);
                } else {
                    // New user with no preferences — land on Home; For You tab shows onboarding.
                    setScreen("home");
                    void loadJobs(EMPTY_PREFS);
                }
                // ── Step 3: one-time migration of saved jobs (parallel) ───────────────
                // Only run if storage has no saved_count key yet.
                const hasSaved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSavedJobsInStorage"])();
                if (cancelled || hasSaved) return;
                const legacyJobs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedJobs"])(user.id);
                if (cancelled) return;
                const legacyIds = legacyJobs.map({
                    "AppProvider.useEffect.init.legacyIds": (j)=>j.id
                }["AppProvider.useEffect.init.legacyIds"]);
                setSavedJobIds(legacyIds);
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSavedJobIds"])(legacyIds); // write to storage; never call getSavedJobs again
            }
            init();
            return ({
                "AppProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["AppProvider.useEffect"];
        }
    }["AppProvider.useEffect"], [
        loadJobs
    ]);
    // ── Navigation helpers ───────────────────────────────────────────────────────
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[goTo]": (next)=>setScreen(next)
    }["AppProvider.useCallback[goTo]"], []);
    const startOnboarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[startOnboarding]": ()=>setScreen("onboarding")
    }["AppProvider.useCallback[startOnboarding]"], []);
    const completeOnboarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[completeOnboarding]": async (prefs)=>{
            setPreferences(prefs);
            // Write to storage immediately so next open is instant.
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePreferencesToStorage"])(prefs);
            setScreen("loading");
            if (isDuplicateSave(prefs)) return;
            // Fire n8n in the background; don't block the loading screen.
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUserPreferences"])(prefs, telegramUser?.id, telegramUser ?? undefined);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Couldn't save your preferences.");
            }
        }
    }["AppProvider.useCallback[completeOnboarding]"], [
        telegramUser,
        isDuplicateSave
    ]);
    const savePreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[savePreferences]": async (prefs)=>{
            setPreferences(prefs);
            // Write to storage immediately.
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePreferencesToStorage"])(prefs);
            setScreen("loading");
            if (isDuplicateSave(prefs)) return;
            // Background n8n call; don't block the UI.
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUserPreferences"])(prefs, telegramUser?.id, telegramUser ?? undefined);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Couldn't save your preferences.");
                throw err;
            }
        }
    }["AppProvider.useCallback[savePreferences]"], [
        telegramUser,
        isDuplicateSave
    ]);
    const editPreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[editPreferences]": ()=>setScreen("edit-preferences")
    }["AppProvider.useCallback[editPreferences]"], []);
    const finishLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[finishLoading]": ()=>{
            // Recompute recommendations with the (possibly new) preferences.
            void loadJobs(preferences);
            setScreen("jobs");
        }
    }["AppProvider.useCallback[finishLoading]"], [
        loadJobs,
        preferences
    ]);
    const openJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[openJob]": (id)=>{
            setSelectedJobId(id);
            setScreen({
                "AppProvider.useCallback[openJob]": (current)=>{
                    if (current !== "job-details") setPreviousScreen(current);
                    return "job-details";
                }
            }["AppProvider.useCallback[openJob]"]);
        }
    }["AppProvider.useCallback[openJob]"], []);
    const closeJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[closeJob]": ()=>{
            setSelectedJobId(null);
            setScreen(previousScreen);
        }
    }["AppProvider.useCallback[closeJob]"], [
        previousScreen
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[clearError]": ()=>setError(null)
    }["AppProvider.useCallback[clearError]"], []);
    const isSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[isSaved]": (id)=>savedJobIds.includes(id)
    }["AppProvider.useCallback[isSaved]"], [
        savedJobIds
    ]);
    const toggleSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[toggleSaved]": (id)=>{
            setSavedJobIds({
                "AppProvider.useCallback[toggleSaved]": (prev)=>{
                    const next = prev.includes(id) ? prev.filter({
                        "AppProvider.useCallback[toggleSaved]": (x)=>x !== id
                    }["AppProvider.useCallback[toggleSaved]"]) : [
                        ...prev,
                        id
                    ];
                    // Persist outside the state updater to avoid side effects inside it.
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSavedJobIds"])(next);
                    return next;
                }
            }["AppProvider.useCallback[toggleSaved]"]);
        }
    }["AppProvider.useCallback[toggleSaved]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppProvider.useMemo[value]": ()=>({
                screen,
                preferences,
                savedJobIds,
                savedJobs,
                recommendedJobs,
                setRecommendedJobs,
                allJobs,
                selectedJobId,
                telegramUser,
                error,
                jobsError,
                retryLoadJobs,
                goTo,
                startOnboarding,
                completeOnboarding,
                editPreferences,
                savePreferences,
                finishLoading,
                openJob,
                closeJob,
                isSaved,
                toggleSaved,
                clearError
            })
    }["AppProvider.useMemo[value]"], [
        screen,
        preferences,
        savedJobIds,
        savedJobs,
        recommendedJobs,
        allJobs,
        selectedJobId,
        telegramUser,
        error,
        jobsError,
        retryLoadJobs,
        goTo,
        startOnboarding,
        completeOnboarding,
        editPreferences,
        savePreferences,
        finishLoading,
        openJob,
        closeJob,
        isSaved,
        toggleSaved,
        clearError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/app-provider.tsx",
        lineNumber: 341,
        columnNumber: 10
    }, this);
}
_s(AppProvider, "qgjB6bHZL4t1fzQnDlpNBXFjqqU=");
_c = AppProvider;
function useApp() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!ctx) throw new Error("useApp must be used within AppProvider");
    return ctx;
}
_s1(useApp, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bottom-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding-flow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/home-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$jobs$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/jobs-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$saved$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/saved-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$profile$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/profile-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$job$2d$details$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/job-details-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$edit$2d$preferences$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/edit-preferences-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function AppShell() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScreenRouter, {}, void 0, false, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = AppShell;
// Screens that show the persistent bottom navigation.
const TAB_SCREENS = new Set([
    "home",
    "jobs",
    "saved",
    "profile"
]);
function ScreenRouter() {
    _s();
    const { screen, completeOnboarding, goTo, error, clearError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Any save/load failure surfaced via app-provider gets its own error toast,
    // shown on top of whatever screen the user is currently on.
    const errorToast = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
        message: error,
        onDismiss: clearError,
        variant: "error"
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 34,
        columnNumber: 31
    }, this);
    // Checking Telegram identity + looking up a saved profile before we know
    // which screen to show.
    if (screen === "checking") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-dvh flex-col items-center justify-center gap-3 bg-background",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-6 w-6 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Loading…"
                        }, void 0, false, {
                            fileName: "[project]/components/app-shell.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                errorToast
            ]
        }, void 0, true, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    // Full-screen onboarding (triggered from Profile → Edit Preferences flow only).
    // The For You tab uses the embedded inline version instead.
    if (screen === "onboarding") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingFlow"], {
                    onComplete: completeOnboarding,
                    onExit: ()=>goTo("jobs")
                }, void 0, false, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                errorToast
            ]
        }, void 0, true, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (screen === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {}, void 0, false, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 64,
            columnNumber: 44
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 64,
        columnNumber: 36
    }, this);
    if (screen === "job-details") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$job$2d$details$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobDetailsScreen"], {}, void 0, false, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 66,
            columnNumber: 48
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 66,
        columnNumber: 40
    }, this);
    if (screen === "edit-preferences") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$edit$2d$preferences$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditPreferencesScreen"], {
                    onSaved: ()=>setToast("Preferences updated!")
                }, void 0, false, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    message: toast,
                    onDismiss: ()=>setToast(null)
                }, void 0, false, {
                    fileName: "[project]/components/app-shell.tsx",
                    lineNumber: 72,
                    columnNumber: 19
                }, this),
                errorToast
            ]
        }, void 0, true, {
            fileName: "[project]/components/app-shell.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    // Tabbed screens (Home, For You, Saved, Profile) — all show the bottom nav.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-dvh flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col",
                        children: [
                            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeScreen"], {}, void 0, false, {
                                fileName: "[project]/components/app-shell.tsx",
                                lineNumber: 83,
                                columnNumber: 33
                            }, this),
                            screen === "jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$jobs$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobsScreen"], {}, void 0, false, {
                                fileName: "[project]/components/app-shell.tsx",
                                lineNumber: 84,
                                columnNumber: 33
                            }, this),
                            screen === "saved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$saved$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedScreen"], {}, void 0, false, {
                                fileName: "[project]/components/app-shell.tsx",
                                lineNumber: 85,
                                columnNumber: 34
                            }, this),
                            screen === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$profile$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileScreen"], {}, void 0, false, {
                                fileName: "[project]/components/app-shell.tsx",
                                lineNumber: 86,
                                columnNumber: 36
                            }, this),
                            screen === "welcome" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeScreen"], {}, void 0, false, {
                                fileName: "[project]/components/app-shell.tsx",
                                lineNumber: 88,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-shell.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    TAB_SCREENS.has(screen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                        fileName: "[project]/components/app-shell.tsx",
                        lineNumber: 90,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-shell.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: toast,
                onDismiss: ()=>setToast(null)
            }, void 0, false, {
                fileName: "[project]/components/app-shell.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this),
            errorToast
        ]
    }, void 0, true, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(ScreenRouter, "eBve6E9Aw9dg7RlvB31yS3sjVl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c1 = ScreenRouter;
// Centers the app to a mobile width on larger screens (Mini Apps are narrow).
function Frame({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto min-h-dvh w-full max-w-md bg-background shadow-sm",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/app-shell.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c2 = Frame;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AppShell");
__turbopack_context__.k.register(_c1, "ScreenRouter");
__turbopack_context__.k.register(_c2, "Frame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/bottom-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TABS = [
    {
        screen: "home",
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        screen: "jobs",
        label: "For You",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        screen: "saved",
        label: "Saved",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
    },
    {
        screen: "profile",
        label: "Profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    }
];
function BottomNav() {
    _s();
    const { screen, goTo, savedJobIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Primary",
        className: "sticky bottom-0 z-20 border-t border-border bg-background/95 backdrop-blur [padding-bottom:env(safe-area-inset-bottom)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mx-auto flex max-w-md items-stretch",
            children: TABS.map((tab)=>{
                const active = screen === tab.screen;
                const Icon = tab.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>goTo(tab.screen),
                        "aria-current": active ? "page" : undefined,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors", active ? "text-primary" : "text-muted-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", active && tab.screen === "saved" && "fill-current")
                                    }, void 0, false, {
                                        fileName: "[project]/components/bottom-nav.tsx",
                                        lineNumber: 38,
                                        columnNumber: 19
                                    }, this),
                                    tab.screen === "saved" && savedJobIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground",
                                        children: savedJobIds.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/bottom-nav.tsx",
                                        lineNumber: 42,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, this),
                            tab.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this)
                }, tab.screen, false, {
                    fileName: "[project]/components/bottom-nav.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/bottom-nav.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/bottom-nav.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(BottomNav, "pSorJwaJYWItPcWvIEuIRLlW0bk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/job-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobCard",
    ()=>JobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function hasMatch(job) {
    return "match" in job;
}
function JobCard({ job, saved, onOpen, onToggleSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-2xl border border-border bg-card p-4 transition-colors active:bg-secondary/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onOpen,
                        className: "min-w-0 flex-1 text-left",
                        "aria-label": `View details for ${job.title} at ${job.company}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "truncate text-base font-semibold text-card-foreground",
                                children: job.title
                            }, void 0, false, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 truncate text-sm text-muted-foreground",
                                children: job.company
                            }, void 0, false, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/job-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleSave,
                        "aria-pressed": saved,
                        "aria-label": saved ? "Remove from saved jobs" : "Save job",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors", saved ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-border bg-secondary text-muted-foreground hover:text-foreground"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", saved && "fill-current")
                        }, void 0, false, {
                            fileName: "[project]/components/job-card.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/job-card.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/job-card.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onOpen,
                className: "mt-3 block w-full text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/job-card.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    job.locationLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/job-card.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    job.typeLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/job-card.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 text-sm font-medium text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        className: "h-4 w-4 text-muted-foreground",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/job-card.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    job.salary
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            hasMatch(job) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 rounded-full bg-success-muted px-2.5 py-1 text-xs font-semibold text-success",
                                children: [
                                    "\u2B50",
                                    " ",
                                    job.match,
                                    "% Match"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/job-card.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/job-card.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/job-card.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/job-card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = JobCard;
var _c;
__turbopack_context__.k.register(_c, "JobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/onboarding-flow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnboardingFlow",
    ()=>OnboardingFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selection$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/selection-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/options.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const STEPS = [
    "type",
    "field",
    "location"
];
function OnboardingFlow({ initial, submitLabel = "Find my jobs", onComplete, onExit, embedded = false }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [jobType, setJobType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.jobType ?? null);
    const [field, setField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.field ?? null);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.location ?? null);
    const canContinue = step === 0 && jobType || step === 1 && field || step === 2 && location;
    const isLast = step === STEPS.length - 1;
    function next() {
        if (isLast) {
            onComplete({
                jobType,
                field,
                location
            });
            return;
        }
        setStep((s)=>s + 1);
    }
    function back() {
        if (step === 0) {
            onExit?.();
            return;
        }
        setStep((s)=>s - 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: embedded ? "flex flex-col" : "flex min-h-dvh flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 bg-background/90 px-5 pb-3 pt-5 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        (!embedded || step > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: back,
                            "aria-label": "Go back",
                            className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding-flow.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 gap-1.5",
                            "aria-hidden": "true",
                            children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 flex-1 rounded-full transition-colors " + (i <= step ? "bg-primary" : "bg-border")
                                }, s, false, {
                                    fileName: "[project]/components/onboarding-flow.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-12 text-right text-xs font-medium text-muted-foreground",
                            children: [
                                step + 1,
                                "/",
                                STEPS.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding-flow.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding-flow.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 px-5 pb-4 pt-3",
                children: [
                    step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "What are you looking for?",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "radiogroup",
                            className: "flex flex-col gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOB_TYPES"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selection$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionCard"], {
                                    emoji: o.emoji,
                                    label: o.label,
                                    selected: jobType === o.value,
                                    onSelect: ()=>setJobType(o.value)
                                }, o.value, false, {
                                    fileName: "[project]/components/onboarding-flow.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding-flow.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "What field are you interested in?",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "radiogroup",
                            className: "grid grid-cols-2 gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELDS"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selection$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionCard"], {
                                    emoji: o.emoji,
                                    label: o.label,
                                    selected: field === o.value,
                                    onSelect: ()=>setField(o.value),
                                    compact: true
                                }, o.value, false, {
                                    fileName: "[project]/components/onboarding-flow.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding-flow.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Where do you want to work?",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "radiogroup",
                            className: "flex flex-col gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selection$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionCard"], {
                                    emoji: o.emoji,
                                    label: o.label,
                                    selected: location === o.value,
                                    onSelect: ()=>setLocation(o.value)
                                }, o.value, false, {
                                    fileName: "[project]/components/onboarding-flow.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding-flow.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/onboarding-flow.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "sticky bottom-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur [padding-bottom:calc(1rem+env(safe-area-inset-bottom))]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "lg",
                    className: "h-12 w-full rounded-xl text-base",
                    disabled: !canContinue,
                    onClick: next,
                    children: [
                        isLast ? submitLabel : "Continue",
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "ml-1 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding-flow.tsx",
                            lineNumber: 152,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding-flow.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding-flow.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding-flow.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(OnboardingFlow, "7MgwVvkl4Uf8+PDwU0Rb39CIDS0=");
_c = OnboardingFlow;
function Step({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-in fade-in slide-in-from-right-2 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-5 text-2xl font-bold leading-tight text-foreground text-balance",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/onboarding-flow.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding-flow.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c1 = Step;
var _c, _c1;
__turbopack_context__.k.register(_c, "OnboardingFlow");
__turbopack_context__.k.register(_c1, "Step");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/edit-preferences-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditPreferencesScreen",
    ()=>EditPreferencesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding-flow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EditPreferencesScreen({ onSaved }) {
    _s();
    const { preferences, savePreferences, goTo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    async function handleComplete(prefs) {
        try {
            await savePreferences(prefs);
            onSaved();
        } catch  {
        // savePreferences already recorded a user-facing error via context;
        // just avoid showing the "Preferences updated!" success toast here.
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingFlow"], {
        initial: preferences,
        submitLabel: "Save & refresh jobs",
        onComplete: handleComplete,
        onExit: ()=>goTo("profile")
    }, void 0, false, {
        fileName: "[project]/components/screens/edit-preferences-screen.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(EditPreferencesScreen, "iQ9AxYUMMPGZz+W40RIGd9N/EZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = EditPreferencesScreen;
var _c;
__turbopack_context__.k.register(_c, "EditPreferencesScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/home-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Interactive job feed built ONLY from fields you already have:
 * id, title, company, locationLabel, skills, fieldLabel, postedAt, closingDate
 *
 * Added interactions:
 *  1. Colored initials avatar (no images needed)
 *  2. "New" and "Closing soon" badges + relative time ("3h ago")
 *  3. Skill chips (tap a skill to search it)
 *  4. Tap location / sector on a card to filter by it
 *  5. Filter chip row (sector + city) built automatically from your data
 *  6. Sort toggle: Newest / Closing soon
 *  7. "Saved only" toggle with live count
 *  8. Animated bookmark button + toast feedback
 *  9. Share button (Web Share API, falls back to copy)
 * 10. Search match highlighting
 * 11. Back-to-top floating button
 * 12. "New jobs since your last visit" banner
 *
 * Replace your current home-screen file with this. It defines its own card,
 * so FeedCard is no longer imported (keep your old one for the detail view).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PAGE_SIZE = 10;
const HOUR = 3_600_000;
const DAY = 24 * HOUR;
// ─── Helpers ──────────────────────────────────────────────────────────────────
function parseDate(iso) {
    if (!iso) return 0;
    const ms = new Date(iso).getTime();
    return isNaN(ms) ? 0 : ms;
}
function isPastClosingDate(closingDate) {
    const t = parseDate(closingDate);
    return t > 0 && t < Date.now();
}
function timeAgo(iso) {
    const t = parseDate(iso);
    if (!t) return "";
    const diff = Date.now() - t;
    const m = Math.floor(diff / 60_000);
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    if (d < 7) return `${d}d ago`;
    if (d < 30) return `${Math.floor(d / 7)}w ago`;
    return new Date(t).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}
function daysLeft(closingDate) {
    const t = parseDate(closingDate);
    if (!t) return null;
    return Math.ceil((t - Date.now()) / DAY);
}
function splitSkills(skills) {
    if (!skills) return [];
    return skills.split(/[,;|\n]/).map((s)=>s.trim()).filter(Boolean);
}
// Wrap matching text in <mark> so users see why a job matched.
function Highlight({ text, query }) {
    if (!text) return null;
    const q = query.trim();
    if (!q) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text
    }, void 0, false, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 80,
        columnNumber: 18
    }, this);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text
    }, void 0, false, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 82,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            text.slice(0, i),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                className: "rounded bg-primary/20 px-0.5 text-foreground",
                children: text.slice(i, i + q.length)
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            text.slice(i + q.length)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c = Highlight;
// ─── Avatar (no image needed) ─────────────────────────────────────────────────
function CompanyAvatar({ name = "?" }) {
    const initials = name.split(/\s+/).map((w)=>w[0]).slice(0, 2).join("").toUpperCase() || "?";
    const hue = [
        ...name
    ].reduce((h, c)=>h + c.charCodeAt(0), 0) % 360;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
        style: {
            backgroundColor: `hsl(${hue} 50% 42%)`
        },
        "aria-hidden": true,
        children: initials
    }, void 0, false, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c1 = CompanyAvatar;
function JobCard({ job, saved, query, onOpen, onToggleSave, onSkill, onSector, onCity, onToast }) {
    _s();
    const [pop, setPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isNew = Date.now() - parseDate(job.postedAt) < 2 * DAY;
    const left = daysLeft(job.closingDate);
    const closingSoon = left !== null && left >= 0 && left <= 3;
    const skills = splitSkills(job.skills);
    const handleSave = (e)=>{
        e.stopPropagation();
        setPop(true);
        setTimeout(()=>setPop(false), 300);
        onToggleSave();
        onToast(saved ? "Removed from saved" : "Job saved");
    };
    const handleShare = async (e)=>{
        e.stopPropagation();
        const text = `${job.title} at ${job.company}`;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: job.title,
                    text,
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(`${text} - ${window.location.href}`);
                onToast("Link copied");
            }
        } catch  {
        /* user cancelled share */ }
    };
    const stop = (fn)=>(e)=>{
            e.stopPropagation();
            fn();
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        onClick: onOpen,
        role: "button",
        tabIndex: 0,
        onKeyDown: (e)=>e.key === "Enter" && onOpen(),
        className: "cursor-pointer rounded-2xl border border-border bg-card p-4 shadow-sm transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyAvatar, {
                        name: job.company
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[15px] font-semibold leading-snug text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    text: job.title,
                                    query: query
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-sm text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    text: job.company,
                                    query: query
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleSave,
                        "aria-label": saved ? "Remove from saved" : "Save job",
                        "aria-pressed": saved,
                        className: `-mr-1 -mt-1 flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-secondary ${pop ? "scale-125" : "scale-100"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                            className: `h-5 w-5 ${saved ? "fill-primary text-primary" : "text-muted-foreground"}`
                        }, void 0, false, {
                            fileName: "[project]/components/screens/home-screen.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            timeAgo(job.postedAt)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary",
                        children: "New"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    closingSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-destructive/10 px-2 py-0.5 font-medium text-destructive",
                        children: left === 0 ? "Closes today" : `Closes in ${left}d`
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex flex-wrap gap-2",
                children: [
                    job.locationLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: stop(()=>onCity(job.locationLabel)),
                        className: "inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-foreground hover:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                text: job.locationLabel,
                                query: query
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    job.fieldLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: stop(()=>onSector(job.fieldLabel)),
                        className: "inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-foreground hover:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                text: job.fieldLabel,
                                query: query
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex flex-wrap gap-1.5",
                children: [
                    skills.slice(0, 4).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: stop(()=>onSkill(s)),
                            className: "rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                text: s,
                                query: query
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        }, s, false, {
                            fileName: "[project]/components/screens/home-screen.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)),
                    skills.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-1 py-0.5 text-xs text-muted-foreground",
                        children: [
                            "+",
                            skills.length - 4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center justify-between border-t border-border pt-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleShare,
                        className: "inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            " Share"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-primary",
                        children: "View details"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(JobCard, "cdt9ZEa9PVcl9mt2/JoyzAsafXE=");
_c2 = JobCard;
function HomeScreen() {
    _s1();
    const { allJobs, jobsError, retryLoadJobs, openJob, toggleSaved, isSaved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PAGE_SIZE);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sector, setSector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("newest");
    const [savedOnly, setSavedOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTop, setShowTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSince, setNewSince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toastTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeScreen.useCallback[showToast]": (msg)=>{
            setToast(msg);
            if (toastTimer.current) clearTimeout(toastTimer.current);
            toastTimer.current = setTimeout({
                "HomeScreen.useCallback[showToast]": ()=>setToast(null)
            }["HomeScreen.useCallback[showToast]"], 1800);
        }
    }["HomeScreen.useCallback[showToast]"], []);
    // Reset pagination whenever any filter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            setVisibleCount(PAGE_SIZE);
        }
    }["HomeScreen.useEffect"], [
        searchQuery,
        sector,
        city,
        sort,
        savedOnly
    ]);
    // Back-to-top button visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            const onScroll = {
                "HomeScreen.useEffect.onScroll": ()=>setShowTop(window.scrollY > 600)
            }["HomeScreen.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "HomeScreen.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["HomeScreen.useEffect"];
        }
    }["HomeScreen.useEffect"], []);
    // "New since your last visit" banner (stored in localStorage)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            if (allJobs.length === 0) return;
            try {
                const last = Number(localStorage.getItem("lastVisit") || 0);
                if (last) {
                    setNewSince(allJobs.filter({
                        "HomeScreen.useEffect": (j)=>parseDate(j.postedAt) > last
                    }["HomeScreen.useEffect"]).length);
                }
                localStorage.setItem("lastVisit", String(Date.now()));
            } catch  {
            /* storage unavailable */ }
        }
    }["HomeScreen.useEffect"], [
        allJobs.length
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    // Base list: open jobs only, de-duplicated
    const openJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeScreen.useMemo[openJobs]": ()=>{
            const seen = new Set();
            return allJobs.filter({
                "HomeScreen.useMemo[openJobs]": (job)=>{
                    if (seen.has(job.id)) return false;
                    seen.add(job.id);
                    return !isPastClosingDate(job.closingDate);
                }
            }["HomeScreen.useMemo[openJobs]"]);
        }
    }["HomeScreen.useMemo[openJobs]"], [
        allJobs
    ]);
    // Filter chips with counts, built from your data
    const sectorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeScreen.useMemo[sectorOptions]": ()=>countBy(openJobs, "fieldLabel")
    }["HomeScreen.useMemo[sectorOptions]"], [
        openJobs
    ]);
    const cityOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeScreen.useMemo[cityOptions]": ()=>countBy(openJobs, "locationLabel")
    }["HomeScreen.useMemo[cityOptions]"], [
        openJobs
    ]);
    const feedJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeScreen.useMemo[feedJobs]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            const list = openJobs.filter({
                "HomeScreen.useMemo[feedJobs].list": (job)=>{
                    if (sector && job.fieldLabel !== sector) return false;
                    if (city && job.locationLabel !== city) return false;
                    if (savedOnly && !isSaved(job.id)) return false;
                    if (!q) return true;
                    return [
                        job.title,
                        job.company,
                        job.locationLabel,
                        job.skills,
                        job.fieldLabel
                    ].some({
                        "HomeScreen.useMemo[feedJobs].list": (v)=>v?.toLowerCase().includes(q)
                    }["HomeScreen.useMemo[feedJobs].list"]);
                }
            }["HomeScreen.useMemo[feedJobs].list"]);
            return list.sort({
                "HomeScreen.useMemo[feedJobs]": (a, b)=>{
                    if (sort === "closing") {
                        const ca = parseDate(a.closingDate) || Infinity;
                        const cb = parseDate(b.closingDate) || Infinity;
                        return ca - cb;
                    }
                    return parseDate(b.postedAt) - parseDate(a.postedAt);
                }
            }["HomeScreen.useMemo[feedJobs]"]);
        // isSaved changes identity with saved state in most providers; include it
        }
    }["HomeScreen.useMemo[feedJobs]"], [
        openJobs,
        searchQuery,
        sector,
        city,
        savedOnly,
        sort,
        isSaved
    ]);
    const savedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeScreen.useMemo[savedCount]": ()=>openJobs.filter({
                "HomeScreen.useMemo[savedCount]": (j)=>isSaved(j.id)
            }["HomeScreen.useMemo[savedCount]"]).length
    }["HomeScreen.useMemo[savedCount]"], [
        openJobs,
        isSaved
    ]);
    const isLoading = allJobs.length === 0 && !jobsError;
    const visibleJobs = feedJobs.slice(0, visibleCount);
    const hasMore = visibleCount < feedJobs.length;
    const hasFilters = Boolean(searchQuery.trim() || sector || city || savedOnly);
    const clearAll = ()=>{
        setSearchQuery("");
        setSector(null);
        setCity(null);
        setSavedOnly(false);
    };
    // Infinite scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            const el = sentinelRef.current;
            if (!el || !hasMore) return;
            const observer = new IntersectionObserver({
                "HomeScreen.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setVisibleCount({
                            "HomeScreen.useEffect": (c)=>Math.min(c + PAGE_SIZE, feedJobs.length)
                        }["HomeScreen.useEffect"]);
                    }
                }
            }["HomeScreen.useEffect"], {
                rootMargin: "200px"
            });
            observer.observe(el);
            return ({
                "HomeScreen.useEffect": ()=>observer.disconnect()
            })["HomeScreen.useEffect"];
        }
    }["HomeScreen.useEffect"], [
        hasMore,
        feedJobs.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 border-b border-border bg-background/95 pb-2.5 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Latest Jobs"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-sm text-muted-foreground",
                                children: isLoading ? "Loading jobs…" : jobsError ? "Could not load jobs" : hasFilters ? `${feedJobs.length} match${feedJobs.length === 1 ? "" : "es"} found` : `${feedJobs.length} open role${feedJobs.length !== 1 ? "s" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search by title, company, skills, or city...",
                                        className: "h-10 w-full rounded-xl border border-border bg-card pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSearchQuery(""),
                                        "aria-label": "Clear search",
                                        className: "absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/home-screen.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 flex items-center gap-2 overflow-x-auto px-5 pb-0.5 [scrollbar-width:none]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: savedOnly,
                                onClick: ()=>setSavedOnly((v)=>!v),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    " Saved ",
                                    savedCount > 0 && `(${savedCount})`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: sort === "newest",
                                onClick: ()=>setSort("newest"),
                                children: "Newest"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: sort === "closing",
                                onClick: ()=>setSort("closing"),
                                children: "Closing soon"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clearAll,
                                className: "shrink-0 px-2 text-xs font-medium text-primary",
                                children: "Clear all"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    sectorOptions.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-2 overflow-x-auto px-5 pb-0.5 [scrollbar-width:none]",
                        children: sectorOptions.map(([label, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: sector === label,
                                onClick: ()=>setSector(sector === label ? null : label),
                                children: [
                                    label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-60",
                                        children: n
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 441,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    cityOptions.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-2 overflow-x-auto px-5 pb-0.5 [scrollbar-width:none]",
                        children: cityOptions.map(([label, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                active: city === label,
                                onClick: ()=>setCity(city === label ? null : label),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 452,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-60",
                                        children: n
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 452,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3 px-4 py-4",
                children: [
                    newSince > 0 && !hasFilters && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-xl bg-primary/10 px-4 py-2.5 text-sm text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: newSince
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    " new job",
                                    newSince === 1 ? "" : "s",
                                    " since your last visit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setNewSince(0),
                                "aria-label": "Dismiss",
                                className: "text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this),
                    jobsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
                        onRetry: retryLoadJobs
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 473,
                        columnNumber: 11
                    }, this) : isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonList, {}, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this) : feedJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                        isFiltering: hasFilters,
                        savedOnly: savedOnly,
                        onClear: clearAll
                    }, void 0, false, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            visibleJobs.map((job, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: i >= visibleCount - PAGE_SIZE ? "animate-in fade-in duration-300" : "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobCard, {
                                        job: job,
                                        saved: isSaved(job.id),
                                        query: searchQuery,
                                        onOpen: ()=>openJob(job.id),
                                        onToggleSave: ()=>toggleSaved(job.id, job),
                                        onSkill: (s)=>setSearchQuery(s),
                                        onSector: (s)=>setSector(s),
                                        onCity: (c)=>setCity(c),
                                        onToast: showToast
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 485,
                                        columnNumber: 17
                                    }, this)
                                }, job.id, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this)),
                            hasMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sentinelRef,
                                className: "py-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Loading more…"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 501,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 500,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: "You're all caught up 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home-screen.tsx",
                                    lineNumber: 505,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 504,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 479,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            showTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }),
                "aria-label": "Back to top",
                className: "fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 514,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 left-1/2 z-30 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/home-screen.tsx",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this),
                        " ",
                        toast
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 527,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 526,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_s1(HomeScreen, "gVeicrzxOCH37F8pU/cvZGqNGek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c3 = HomeScreen;
// ─── Small pieces ─────────────────────────────────────────────────────────────
function countBy(jobs, key) {
    const map = new Map();
    for (const j of jobs){
        const v = j[key];
        if (v) map.set(v, (map.get(v) || 0) + 1);
    }
    return [
        ...map.entries()
    ].sort((a, b)=>b[1] - a[1]);
}
function Chip({ active, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-pressed": active,
        className: `inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:bg-secondary"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 551,
        columnNumber: 5
    }, this);
}
_c4 = Chip;
function ErrorState({ onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 py-20 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "h-8 w-8 text-destructive"
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-foreground",
                children: "We couldn't load jobs"
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Check your connection and try again."
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 571,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "mt-2 rounded-xl",
                onClick: onRetry,
                children: "Try again"
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 568,
        columnNumber: 5
    }, this);
}
_c5 = ErrorState;
function EmptyState({ isFiltering, savedOnly, onClear }) {
    if (savedOnly) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold text-foreground",
                    children: "No saved jobs yet"
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 585,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Tap the bookmark on any job to keep it here."
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 586,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "mt-2 rounded-xl",
                    onClick: onClear,
                    children: "Browse all jobs"
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/screens/home-screen.tsx",
            lineNumber: 584,
            columnNumber: 7
        }, this);
    }
    if (isFiltering) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold text-foreground",
                    children: "No matching jobs"
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Try different keywords or remove a filter."
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 597,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "mt-2 rounded-xl",
                    onClick: onClear,
                    children: "Clear filters"
                }, void 0, false, {
                    fileName: "[project]/components/screens/home-screen.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/screens/home-screen.tsx",
            lineNumber: 595,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 py-20 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-foreground",
                children: "No jobs available right now"
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Check back soon for new listings."
            }, void 0, false, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
_c6 = EmptyState;
function SkeletonList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-border bg-card p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-11 w-11 animate-pulse rounded-full bg-muted"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3.5 w-3/4 animate-pulse rounded bg-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 620,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 w-1/2 animate-pulse rounded bg-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home-screen.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 619,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 617,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-16 animate-pulse rounded-full bg-muted"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-20 animate-pulse rounded-full bg-muted"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home-screen.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home-screen.tsx",
                        lineNumber: 624,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/screens/home-screen.tsx",
                lineNumber: 616,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/screens/home-screen.tsx",
        lineNumber: 614,
        columnNumber: 5
    }, this);
}
_c7 = SkeletonList;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Highlight");
__turbopack_context__.k.register(_c1, "CompanyAvatar");
__turbopack_context__.k.register(_c2, "JobCard");
__turbopack_context__.k.register(_c3, "HomeScreen");
__turbopack_context__.k.register(_c4, "Chip");
__turbopack_context__.k.register(_c5, "ErrorState");
__turbopack_context__.k.register(_c6, "EmptyState");
__turbopack_context__.k.register(_c7, "SkeletonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/job-details-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobDetailsScreen",
    ()=>JobDetailsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function JobDetailsScreen() {
    _s();
    const { selectedJobId, closeJob, toggleSaved, isSaved, allJobs, recommendedJobs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    // Look the job up in the in-memory list. Checks recommendedJobs first (has
    // match + matchReason), then falls back to the full allJobs list (e.g. when
    // the user opens a job from the Saved tab).
    const job = recommendedJobs.find((j)=>j.id === selectedJobId) ?? allJobs.find((j)=>j.id === selectedJobId) ?? null;
    const saved = selectedJobId ? isSaved(selectedJobId) : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-background/95 px-5 pb-3 backdrop-blur [padding-top:calc(1rem+env(safe-area-inset-top))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: closeJob,
                        "aria-label": "Back",
                        className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/job-details-screen.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "Job details"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    job && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleSaved(job.id, job),
                        "aria-pressed": saved,
                        "aria-label": saved ? "Remove from saved jobs" : "Save job",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors", saved ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-border bg-card text-muted-foreground"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", saved && "fill-current")
                        }, void 0, false, {
                            fileName: "[project]/components/screens/job-details-screen.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            !selectedJobId || !job ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-20 text-center text-sm text-muted-foreground",
                children: "We couldn't load this job. Please go back and try again."
            }, void 0, false, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 px-5 py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold leading-tight text-foreground text-balance",
                                children: job.title
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-base text-muted-foreground",
                                children: job.company
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            "match" in job && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-3 inline-flex items-center gap-1 rounded-full bg-success-muted px-3 py-1 text-sm font-semibold text-success",
                                children: [
                                    "⭐",
                                    " ",
                                    job.match,
                                    "% Match"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            "matchReason" in job && job.matchReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-muted-foreground",
                                children: job.matchReason
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid grid-cols-3 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 76,
                                            columnNumber: 27
                                        }, this),
                                        label: job.locationLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/job-details-screen.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 77,
                                            columnNumber: 27
                                        }, this),
                                        label: job.typeLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/job-details-screen.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 78,
                                            columnNumber: 27
                                        }, this),
                                        label: job.salary || "Not specified"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/job-details-screen.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            job.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "About the role",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-relaxed text-muted-foreground text-pretty",
                                    children: job.summary
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/job-details-screen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            job.responsibilities && job.responsibilities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Responsibilities",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                    items: job.responsibilities
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/job-details-screen.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this),
                            job.requirements && job.requirements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Requirements",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                    items: job.requirements
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/job-details-screen.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            job.benefits && job.benefits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Benefits",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: job.benefits.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground",
                                            children: b
                                        }, b, false, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/job-details-screen.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            (job.seniority || job.skills || job.language || job.source) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Additional details",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 text-sm text-muted-foreground",
                                    children: [
                                        job.seniority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Seniority: ",
                                                job.seniority
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 119,
                                            columnNumber: 37
                                        }, this),
                                        job.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Skills: ",
                                                job.skills
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 120,
                                            columnNumber: 34
                                        }, this),
                                        job.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Language: ",
                                                job.language
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 121,
                                            columnNumber: 36
                                        }, this),
                                        job.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Source: ",
                                                job.source
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/screens/job-details-screen.tsx",
                                            lineNumber: 122,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/screens/job-details-screen.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-xs text-muted-foreground",
                                children: job.closingDate ? `Closes ${job.closingDate}` : `Posted ${job.postedAgo}`
                            }, void 0, false, {
                                fileName: "[project]/components/screens/job-details-screen.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "sticky bottom-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur [padding-bottom:calc(1rem+env(safe-area-inset-bottom))]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "h-12 w-full rounded-xl text-base",
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openApplyUrl"])(job.applyUrl),
                            children: "Apply Now"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/job-details-screen.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/job-details-screen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(JobDetailsScreen, "gcAjt8K3k/fEs4PHagPfh6TPm/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = JobDetailsScreen;
function Fact({ icon, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card px-2 py-3 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-muted-foreground",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium leading-tight text-foreground text-balance",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/job-details-screen.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c1 = Fact;
function Section({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/job-details-screen.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c2 = Section;
function BulletList({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-2",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex gap-2.5 text-sm leading-relaxed text-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-pretty",
                        children: item
                    }, void 0, false, {
                        fileName: "[project]/components/screens/job-details-screen.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, item, true, {
                fileName: "[project]/components/screens/job-details-screen.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/screens/job-details-screen.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c3 = BulletList;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "JobDetailsScreen");
__turbopack_context__.k.register(_c1, "Fact");
__turbopack_context__.k.register(_c2, "Section");
__turbopack_context__.k.register(_c3, "BulletList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/jobs-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Poster",
    ()=>Poster,
    "PosterCard",
    ()=>PosterCard,
    "buildCaption",
    ()=>buildCaption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Job posters built only from your existing fields:
 * id, title, company, locationLabel, skills, fieldLabel, postedAt, closingDate
 * (salary / typeLabel are used automatically if the job has them)
 *
 * - 6 layouts x 8 palettes = 48 looks, picked per job from its id,
 *   so every job keeps the same poster each time you scroll past it.
 * - "Restyle" cycles to a different look for that job.
 * - Caption is generated from the same data, editable, copyable.
 * - Download PNG (1080x1350) or share the image through the phone share sheet.
 *
 * Needs one dependency:  npm i html-to-image
 * (Glass effects use gradients instead of backdrop-filter so the PNG
 *  looks exactly like the preview.)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.mjs [app-client] (ecmascript) <export default as Shuffle>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const BRAND = "Jobs" // <- put your app name here (shown small on the poster)
;
const W = 360;
const H = 450 // exported at pixelRatio 3 => 1080 x 1350
;
// ─── Data helpers ─────────────────────────────────────────────────────────────
function hash(s) {
    let h = 0;
    for(let i = 0; i < s.length; i++)h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return Math.abs(h);
}
function splitSkills(skills) {
    if (!skills) return [];
    return skills.split(/[,;|\n]/).map((s)=>s.trim()).filter(Boolean);
}
function shortDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    });
}
function initialsOf(name = "?") {
    return name.split(/\s+/).map((w)=>w[0]).slice(0, 2).join("").toUpperCase() || "?";
}
function posterData(job) {
    const generic = !job.company || job.company === "N/A" || job.company === "Company not listed";
    return {
        title: job.title || "Open role",
        company: generic ? "" : job.company,
        loc: (job.locationLabel || "").split(",").slice(0, 2).join(",").trim(),
        field: job.fieldLabel || "",
        extras: [
            job.typeLabel && job.typeLabel !== "Unknown" ? job.typeLabel : "",
            job.salary || ""
        ].filter(Boolean),
        skills: splitSkills(job.skills).slice(0, 3),
        closing: shortDate(job.closingDate),
        posted: shortDate(job.postedAt),
        initials: initialsOf(generic ? job.title : job.company)
    };
}
// ─── Caption ──────────────────────────────────────────────────────────────────
const tag = (s)=>"#" + s.replace(/[^a-zA-Z0-9]/g, "");
function buildCaption(job) {
    const d = posterData(job);
    const skills = splitSkills(job.skills).slice(0, 4);
    const head = d.company ? `${d.title} at ${d.company}` : d.title;
    const where = [
        d.loc,
        d.field,
        ...d.extras
    ].filter(Boolean).join(" | ");
    const tags = [
        d.field,
        d.loc.split(",")[0],
        ...skills.slice(0, 2),
        "Hiring",
        "Jobs"
    ].filter(Boolean).map(tag).filter((t)=>t.length > 1);
    return [
        head,
        where,
        skills.length ? `Skills: ${skills.join(", ")}` : "",
        d.closing ? `Apply before ${d.closing}.` : "",
        "",
        [
            ...new Set(tags)
        ].join(" ")
    ].filter((l, i, a)=>l || i > 0 && a[i - 1]).join("\n");
}
// ─── Palettes ─────────────────────────────────────────────────────────────────
const PALETTES = [
    {
        from: "#042f2e",
        via: "#0f766e",
        to: "#1e3a8a",
        glow: "#5eead4",
        ink: "#f0fdfa"
    },
    {
        from: "#1c0a0a",
        via: "#9f1239",
        to: "#ea580c",
        glow: "#fdba74",
        ink: "#fff7ed"
    },
    {
        from: "#1e1b4b",
        via: "#5b21b6",
        to: "#be185d",
        glow: "#f0abfc",
        ink: "#faf5ff"
    },
    {
        from: "#0f172a",
        via: "#334155",
        to: "#a16207",
        glow: "#fcd34d",
        ink: "#fefce8"
    },
    {
        from: "#052e16",
        via: "#166534",
        to: "#0e7490",
        glow: "#86efac",
        ink: "#f0fdf4"
    },
    {
        from: "#0c1a3a",
        via: "#1d4ed8",
        to: "#0891b2",
        glow: "#7dd3fc",
        ink: "#eff6ff"
    },
    {
        from: "#2a0a18",
        via: "#be123c",
        to: "#7c3aed",
        glow: "#fda4af",
        ink: "#fff1f2"
    },
    {
        from: "#0b2530",
        via: "#0e7490",
        to: "#f97316",
        glow: "#fdba74",
        ink: "#ecfeff"
    }
];
const SANS = `"Inter","Helvetica Neue",Arial,sans-serif`;
const SERIF = `"Iowan Old Style","Palatino Linotype",Georgia,serif`;
function titleSize(t, base = 30) {
    return t.length > 56 ? base - 9 : t.length > 40 ? base - 6 : t.length > 26 ? base - 3 : base;
}
// ─── Shared poster pieces ─────────────────────────────────────────────────────
function Avatar({ d, p, size = 40 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            fontSize: size * 0.36,
            color: p.ink,
            background: `linear-gradient(135deg,${p.glow}66,rgba(255,255,255,.12))`,
            border: "1px solid rgba(255,255,255,.35)",
            boxShadow: `0 8px 24px -6px ${p.glow}88`
        },
        className: "flex shrink-0 items-center justify-center rounded-full font-bold",
        children: d.initials
    }, void 0, false, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function Pills({ d, color, border }) {
    const items = [
        d.loc,
        d.field,
        ...d.extras
    ].filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 flex flex-wrap gap-1.5",
        children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color,
                    border: `1px solid ${border}`,
                    fontSize: 11
                },
                className: "rounded-full px-2.5 py-1 font-medium",
                children: t
            }, t, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c1 = Pills;
function Skills({ d, color }) {
    if (!d.skills.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            color,
            fontSize: 11,
            opacity: 0.8
        },
        className: "mt-3",
        children: d.skills.join("  /  ")
    }, void 0, false, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c2 = Skills;
function Foot({ d, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color,
            fontSize: 10,
            opacity: 0.75
        },
        className: "mt-4 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: d.closing ? `Apply before ${d.closing}` : d.posted ? `Posted ${d.posted}` : ""
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold tracking-wide",
                children: BRAND
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_c3 = Foot;
// 1. Frosted panel over soft light pools
function Aurora({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        style: {
            background: `linear-gradient(155deg,${p.from} 0%,${p.via} 55%,${p.to} 125%)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `radial-gradient(circle at 88% 6%,${p.glow}bb,transparent 42%),radial-gradient(circle at 0% 68%,${p.to}cc,transparent 52%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-6 top-6 flex items-center gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                        d: d,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: p.ink,
                            fontSize: 12
                        },
                        className: "font-medium",
                        children: d.company
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 199,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-5 bottom-5 rounded-[28px] p-5",
                style: {
                    color: p.ink,
                    background: "linear-gradient(135deg,rgba(255,255,255,.24),rgba(255,255,255,.06))",
                    border: "1px solid rgba(255,255,255,.28)",
                    boxShadow: "0 28px 60px -14px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.4)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: titleSize(d.title),
                            lineHeight: 1.08
                        },
                        className: "font-bold tracking-tight",
                        children: d.title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                        d: d,
                        color: p.ink,
                        border: "rgba(255,255,255,.35)"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_c4 = Aurora;
// 2. Cool paper, oversized gradient initial, serif headline
function Editorial({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        style: {
            background: "linear-gradient(180deg,#f3f5f9,#dfe5ee)",
            color: "#0f172a"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-6 -top-16 select-none font-black leading-none",
                style: {
                    fontSize: 360,
                    fontFamily: SERIF,
                    background: `linear-gradient(160deg,${p.via},${p.to})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    opacity: 0.9
                },
                children: d.initials[0]
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 top-0 w-2",
                style: {
                    background: `linear-gradient(180deg,${p.glow},${p.via},${p.to})`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 px-8 pb-7 pt-24",
                style: {
                    background: "linear-gradient(0deg,#dfe5ee 55%,transparent)"
                },
                children: [
                    d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13
                        },
                        className: "mb-2 font-semibold opacity-70",
                        children: d.company
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 243,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: titleSize(d.title, 34),
                            lineHeight: 1.05,
                            fontFamily: SERIF
                        },
                        className: "font-extrabold tracking-tight",
                        children: d.title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                        d: d,
                        color: "#334155",
                        border: "rgba(15,23,42,.25)"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: "#334155"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                        d: d,
                        color: "#334155"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_c5 = Editorial;
// 3. Tilted translucent band across a warm gradient
function Ribbon({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        style: {
            background: `linear-gradient(200deg,${p.to},${p.via} 55%,${p.from})`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-20 -top-20 h-72 w-72 rounded-full",
                style: {
                    background: `radial-gradient(circle,${p.glow}99,transparent 65%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-24 -right-16 h-80 w-80 rounded-full",
                style: {
                    background: `radial-gradient(circle,${p.glow}55,transparent 65%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-7 top-7 flex items-center gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                        d: d,
                        p: p,
                        size: 36
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: p.ink,
                            fontSize: 12
                        },
                        className: "font-medium",
                        children: d.company
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 263,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-10 -right-10 top-[30%] px-14 py-7",
                style: {
                    transform: "rotate(-7deg)",
                    color: p.ink,
                    background: "linear-gradient(90deg,rgba(255,255,255,.2),rgba(255,255,255,.08))",
                    borderTop: "1px solid rgba(255,255,255,.4)",
                    borderBottom: "1px solid rgba(255,255,255,.15)",
                    boxShadow: "0 30px 50px -20px rgba(0,0,0,.5)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: titleSize(d.title, 29),
                        lineHeight: 1.08
                    },
                    className: "max-w-[280px] font-extrabold tracking-tight",
                    children: d.title
                }, void 0, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-7 bottom-6",
                style: {
                    color: p.ink
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                        d: d,
                        color: p.ink,
                        border: "rgba(255,255,255,.4)"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_c6 = Ribbon;
// 4. Dark, giant outlined sector word running down the side
function Monolith({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        style: {
            background: `linear-gradient(170deg,${p.via} -30%,${p.from} 60%,#050505)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-2 top-0 select-none font-black",
                style: {
                    writingMode: "vertical-rl",
                    fontSize: 118,
                    lineHeight: 0.9,
                    color: "transparent",
                    WebkitTextStroke: `1.5px ${p.glow}55`,
                    maxHeight: H,
                    overflow: "hidden"
                },
                children: d.field || d.title
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `radial-gradient(circle at 15% 100%,${p.to}aa,transparent 55%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 px-7 pb-7 pt-28",
                style: {
                    color: p.ink,
                    background: "linear-gradient(0deg,rgba(0,0,0,.7),transparent)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                d: d,
                                p: p,
                                size: 34
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12
                                },
                                className: "font-medium",
                                children: d.company
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 311,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: titleSize(d.title, 31),
                            lineHeight: 1.06
                        },
                        className: "max-w-[260px] font-bold tracking-tight",
                        children: d.title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                        d: d,
                        color: p.ink,
                        border: "rgba(255,255,255,.3)"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_c7 = Monolith;
// 5. Concentric rings, centred
function Orbit({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        style: {
            background: `radial-gradient(circle at 50% 30%,${p.via},${p.from} 75%)`,
            color: p.ink
        },
        children: [
            [
                250,
                190,
                130
            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 rounded-full",
                    style: {
                        width: s * 2,
                        height: s * 2,
                        top: 135 - s,
                        marginLeft: -s,
                        border: `1px solid ${p.glow}${[
                            "33",
                            "44",
                            "66"
                        ][i]}`,
                        background: i === 2 ? `radial-gradient(circle,${p.glow}33,transparent 70%)` : "transparent"
                    }
                }, s, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-[135px] -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                    d: d,
                    p: p,
                    size: 84
                }, void 0, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-7 bottom-7 text-center",
                children: [
                    d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 12
                        },
                        className: "mb-2 font-medium opacity-80",
                        children: d.company
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 346,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: titleSize(d.title, 28),
                            lineHeight: 1.1
                        },
                        className: "font-bold tracking-tight",
                        children: d.title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                            d: d,
                            color: p.ink,
                            border: "rgba(255,255,255,.3)"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/jobs-screen.tsx",
                            lineNumber: 350,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                        d: d,
                        color: p.ink
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_c8 = Orbit;
// 6. Light card with tilted translucent cards stacked behind it
function Stack({ d, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        style: {
            background: `linear-gradient(145deg,${p.from},${p.via} 60%,${p.to})`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `radial-gradient(circle at 20% 10%,${p.glow}77,transparent 45%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            [
                {
                    r: -9,
                    x: -10,
                    o: 0.14
                },
                {
                    r: 6,
                    x: 14,
                    o: 0.22
                }
            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-9 right-9 top-16 h-[300px] rounded-[26px]",
                    style: {
                        transform: `translateX(${c.x}px) rotate(${c.r}deg)`,
                        background: `rgba(255,255,255,${c.o})`,
                        border: "1px solid rgba(255,255,255,.3)",
                        boxShadow: "0 24px 40px -16px rgba(0,0,0,.45)"
                    }
                }, i, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-7 top-[72px] rounded-[26px] p-6",
                style: {
                    color: "#0f172a",
                    background: "linear-gradient(180deg,rgba(255,255,255,.97),rgba(255,255,255,.88))",
                    boxShadow: "0 40px 70px -20px rgba(0,0,0,.6)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 34,
                                    height: 34,
                                    fontSize: 12,
                                    color: p.ink,
                                    background: `linear-gradient(135deg,${p.via},${p.to})`
                                },
                                className: "flex items-center justify-center rounded-full font-bold",
                                children: d.initials
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            d.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12
                                },
                                className: "font-semibold text-slate-600",
                                children: d.company
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 393,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: titleSize(d.title, 27),
                            lineHeight: 1.1
                        },
                        className: "font-extrabold tracking-tight",
                        children: d.title
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pills, {
                        d: d,
                        color: "#475569",
                        border: "rgba(15,23,42,.18)"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {
                        d: d,
                        color: "#475569"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-7 bottom-6",
                style: {
                    color: p.ink
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Foot, {
                    d: d,
                    color: p.ink
                }, void 0, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
_c9 = Stack;
const TEMPLATES = [
    Aurora,
    Editorial,
    Ribbon,
    Monolith,
    Orbit,
    Stack
];
const Poster = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_s(function Poster({ job, seed = 0 }, ref) {
    _s();
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Poster.Poster.useMemo[d]": ()=>posterData(job)
    }["Poster.Poster.useMemo[d]"], [
        job
    ]);
    const h = hash(String(job.id ?? job.title));
    const T = TEMPLATES[(h + seed) % TEMPLATES.length];
    const p = PALETTES[(Math.floor(h / 7) + seed * 3) % PALETTES.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            width: W,
            height: H,
            fontFamily: SANS
        },
        className: "relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T, {
            d: d,
            p: p
        }, void 0, false, {
            fileName: "[project]/components/screens/jobs-screen.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}, "6jtW9PSiFFOA1HhdUp8u9ZaU0cA="));
_c10 = Poster;
// Scales the 360x450 poster to the card width and adds a small mouse tilt.
function ScaledPoster({ job, seed, innerRef, onClick }) {
    _s1();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScaledPoster.useEffect": ()=>{
            const el = wrap.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "ScaledPoster.useEffect": ()=>setScale(el.clientWidth / W)
            }["ScaledPoster.useEffect"]);
            ro.observe(el);
            setScale(el.clientWidth / W);
            return ({
                "ScaledPoster.useEffect": ()=>ro.disconnect()
            })["ScaledPoster.useEffect"];
        }
    }["ScaledPoster.useEffect"], []);
    const onMove = (e)=>{
        if (e.pointerType !== "mouse" || !wrap.current) return;
        const r = wrap.current.getBoundingClientRect();
        setTilt({
            x: ((e.clientY - r.top) / r.height - 0.5) * -5,
            y: ((e.clientX - r.left) / r.width - 0.5) * 5
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            perspective: 900
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrap,
            role: "button",
            tabIndex: 0,
            "aria-label": `View details for ${job.title}`,
            onClick: onClick,
            onKeyDown: (e)=>e.key === "Enter" && onClick(),
            onPointerMove: onMove,
            onPointerLeave: ()=>setTilt({
                    x: 0,
                    y: 0
                }),
            className: "relative w-full cursor-pointer overflow-hidden rounded-3xl shadow-[0_24px_50px_-18px_rgba(0,0,0,.55)] transition-transform duration-200 ease-out active:scale-[0.99]",
            style: {
                height: `${scale * H}px`,
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    width: W,
                    height: H
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Poster, {
                    ref: innerRef,
                    job: job,
                    seed: seed
                }, void 0, false, {
                    fileName: "[project]/components/screens/jobs-screen.tsx",
                    lineNumber: 465,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/screens/jobs-screen.tsx",
            lineNumber: 452,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s1(ScaledPoster, "eN9oamKugd5ACSbfCWSWamHHRTU=");
_c11 = ScaledPoster;
// ─── Export helpers ───────────────────────────────────────────────────────────
async function posterBlob(node) {
    const { toBlob } = await Promise.resolve().then(()=>{
        const e = new Error("Cannot find module 'html-to-image'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    });
    const blob = await toBlob(node, {
        pixelRatio: 3,
        cacheBust: true,
        width: W,
        height: H,
        style: {
            transform: "none",
            transformOrigin: "top left"
        }
    });
    if (!blob) throw new Error("export failed");
    return blob;
}
function saveBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 2000);
}
function PosterCard({ job, saved, onOpen, onToggleSave, onToast }) {
    _s2();
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PosterCard.useState": ()=>buildCaption(job)
    }["PosterCard.useState"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileName = `${(job.title || "job").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}.png`;
    const copy = async ()=>{
        try {
            await navigator.clipboard.writeText(caption);
            setCopied(true);
            onToast("Caption copied");
            setTimeout(()=>setCopied(false), 1500);
        } catch  {
            onToast("Could not copy");
        }
    };
    const download = async ()=>{
        if (!node.current || busy) return;
        setBusy(true);
        try {
            saveBlob(await posterBlob(node.current), fileName);
            onToast("Poster saved");
        } catch  {
            onToast("Could not create image");
        } finally{
            setBusy(false);
        }
    };
    const share = async ()=>{
        if (!node.current || busy) return;
        setBusy(true);
        try {
            const blob = await posterBlob(node.current);
            const file = new File([
                blob
            ], fileName, {
                type: "image/png"
            });
            if (navigator.canShare?.({
                files: [
                    file
                ]
            })) {
                await navigator.share({
                    files: [
                        file
                    ],
                    text: caption
                });
            } else {
                saveBlob(blob, fileName);
                await navigator.clipboard.writeText(caption).catch(()=>{});
                onToast("Poster saved, caption copied");
            }
        } catch  {
        /* cancelled */ } finally{
            setBusy(false);
        }
    };
    const btn = "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground disabled:opacity-50";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaledPoster, {
                job: job,
                seed: seed,
                innerRef: node,
                onClick: onOpen
            }, void 0, false, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleSave,
                                "aria-pressed": saved,
                                className: btn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        className: `h-4 w-4 ${saved ? "fill-primary text-primary" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/jobs-screen.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this),
                                    saved ? "Saved" : "Save"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSeed((s)=>s + 1),
                                className: btn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/jobs-screen.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this),
                                    " Restyle"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 578,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: download,
                                disabled: busy,
                                className: btn,
                                "aria-label": "Download poster",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/jobs-screen.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: share,
                                disabled: busy,
                                className: btn,
                                "aria-label": "Share poster",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/jobs-screen.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 rounded-2xl border border-border bg-card p-3",
                children: [
                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: caption,
                        onChange: (e)=>setCaption(e.target.value),
                        rows: 7,
                        className: "w-full resize-none rounded-lg bg-secondary p-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 594,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-4 whitespace-pre-line text-xs leading-relaxed text-muted-foreground",
                        children: caption
                    }, void 0, false, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 601,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: copy,
                                className: btn,
                                children: [
                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/jobs-screen.tsx",
                                        lineNumber: 605,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/jobs-screen.tsx",
                                        lineNumber: 605,
                                        columnNumber: 55
                                    }, this),
                                    " Copy caption"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setEditing((v)=>!v),
                                className: btn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/jobs-screen.tsx",
                                        lineNumber: 608,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    editing ? "Done" : "Edit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/jobs-screen.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/jobs-screen.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/jobs-screen.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/jobs-screen.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, this);
}
_s2(PosterCard, "7BdgS5A3aAtGHONIJCo126ETdbw=");
_c12 = PosterCard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "Pills");
__turbopack_context__.k.register(_c2, "Skills");
__turbopack_context__.k.register(_c3, "Foot");
__turbopack_context__.k.register(_c4, "Aurora");
__turbopack_context__.k.register(_c5, "Editorial");
__turbopack_context__.k.register(_c6, "Ribbon");
__turbopack_context__.k.register(_c7, "Monolith");
__turbopack_context__.k.register(_c8, "Orbit");
__turbopack_context__.k.register(_c9, "Stack");
__turbopack_context__.k.register(_c10, "Poster");
__turbopack_context__.k.register(_c11, "ScaledPoster");
__turbopack_context__.k.register(_c12, "PosterCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoadingScreen() {
    _s();
    const { finishLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    // Simulate the recommendation request completing, then move to the jobs list.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const t = setTimeout(finishLoading, 1600);
            return ({
                "LoadingScreen.useEffect": ()=>clearTimeout(t)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], [
        finishLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh flex-col items-center justify-center gap-6 bg-background px-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-20 w-20 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 animate-ping rounded-full bg-primary/15"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/loading-screen.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-7 w-7 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/loading-screen.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/screens/loading-screen.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/loading-screen.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-foreground",
                        children: "Finding jobs for you…"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/loading-screen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-sm text-muted-foreground",
                        children: "Matching your preferences to open roles"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/loading-screen.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/loading-screen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/loading-screen.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "EjqKKZ2c8u3ilkhACrRCQ1rzbWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/profile-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileScreen",
    ()=>ProfileScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/options.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProfileScreen() {
    _s();
    const { preferences, editPreferences, savedJobIds, telegramUser, goTo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const name = telegramUser ? [
        telegramUser.first_name,
        telegramUser.last_name
    ].filter(Boolean).join(" ") : "Guest";
    const initial = (telegramUser?.first_name ?? "G").charAt(0).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-foreground",
                    children: "Profile"
                }, void 0, false, {
                    fileName: "[project]/components/screens/profile-screen.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/screens/profile-screen.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-6 px-5 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground",
                                children: initial
                            }, void 0, false, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-lg font-semibold text-foreground",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-sm text-muted-foreground",
                                        children: telegramUser?.username ? `@${telegramUser.username}` : "Signed in via Telegram"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/profile-screen.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground",
                                    children: "My Preferences"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/profile-screen.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrefRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/profile-screen.tsx",
                                            lineNumber: 47,
                                            columnNumber: 21
                                        }, this),
                                        label: "Job type",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFor"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOB_TYPES"], preferences.jobType)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrefRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/profile-screen.tsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this),
                                        label: "Field",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFor"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELDS"], preferences.field)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrefRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/screens/profile-screen.tsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, this),
                                        label: "Location",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFor"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"], preferences.location)
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "mt-4 h-12 w-full rounded-xl text-base",
                                onClick: editPreferences,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "mr-1.5 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    "Edit Preferences"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/profile-screen.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>goTo("saved"),
                        className: "flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/profile-screen.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-sm font-medium text-card-foreground",
                                        children: "Saved jobs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-sm text-muted-foreground",
                                        children: [
                                            savedJobIds.length,
                                            " saved"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/profile-screen.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/profile-screen.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/profile-screen.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/profile-screen.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/profile-screen.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ProfileScreen, "7kXTA/SzB+EOGFoRNWDddpUZ0kQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = ProfileScreen;
function PrefRow({ icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 px-4 py-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/screens/profile-screen.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 text-sm text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/screens/profile-screen.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-foreground",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/screens/profile-screen.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/profile-screen.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = PrefRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileScreen");
__turbopack_context__.k.register(_c1, "PrefRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/screens/saved-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SavedScreen",
    ()=>SavedScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/job-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SavedScreen() {
    _s();
    const { telegramUser, savedJobs, openJob, toggleSaved, isSaved, goTo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    // Saved jobs are loaded once at app start (in AppProvider), no fetch here.
    const jobs = savedJobs;
    const count = jobs.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 border-b border-border bg-background/95 px-5 pb-4 backdrop-blur [padding-top:calc(1.25rem+env(safe-area-inset-top))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-foreground",
                        children: "Saved Jobs"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/saved-screen.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-muted-foreground",
                        children: count > 0 ? `${count} job${count > 1 ? "s" : ""} saved` : "Jobs you save will appear here"
                    }, void 0, false, {
                        fileName: "[project]/components/screens/saved-screen.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/screens/saved-screen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3 px-5 py-4",
                children: !telegramUser?.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-10 text-center text-sm text-muted-foreground",
                    children: "Loading…"
                }, void 0, false, {
                    fileName: "[project]/components/screens/saved-screen.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this) : count === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-4 py-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-16 w-16 items-center justify-center rounded-full bg-secondary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "h-7 w-7 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/screens/saved-screen.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/screens/saved-screen.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-foreground",
                                    children: "No saved jobs yet"
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/saved-screen.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-muted-foreground",
                                    children: "Tap the heart on any job to save it for later."
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/saved-screen.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/screens/saved-screen.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "rounded-xl",
                            onClick: ()=>goTo("jobs"),
                            children: "Browse jobs"
                        }, void 0, false, {
                            fileName: "[project]/components/screens/saved-screen.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/screens/saved-screen.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this) : jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                        job: job,
                        saved: isSaved(job.id),
                        onOpen: ()=>openJob(job.id),
                        onToggleSave: ()=>toggleSaved(job.id, job)
                    }, job.id, false, {
                        fileName: "[project]/components/screens/saved-screen.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/screens/saved-screen.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/saved-screen.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(SavedScreen, "xjJgZK6qaN2Q4dxY+pzmeSx5qdk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = SavedScreen;
var _c;
__turbopack_context__.k.register(_c, "SavedScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/selection-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionCard",
    ()=>SelectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function SelectionCard({ emoji, label, selected, onSelect, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "radio",
        "aria-checked": selected,
        onClick: onSelect,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex w-full items-center gap-3 rounded-2xl border bg-card text-left transition-all", "active:scale-[0.98]", compact ? "flex-col items-start gap-2 p-4" : "p-4", selected ? "border-primary ring-2 ring-primary/25" : "border-border hover:border-primary/40"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex shrink-0 items-center justify-center rounded-xl bg-secondary text-2xl", compact ? "h-11 w-11" : "h-12 w-12"),
                children: emoji
            }, void 0, false, {
                fileName: "[project]/components/selection-card.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium leading-snug text-card-foreground text-pretty", compact ? "text-sm" : "text-base"),
                children: label
            }, void 0, false, {
                fileName: "[project]/components/selection-card.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-6 w-6 items-center justify-center rounded-full border transition-all", compact ? "absolute right-3 top-3" : "ml-auto", selected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-transparent text-transparent"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-3.5 w-3.5",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/components/selection-card.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/selection-card.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/selection-card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SelectionCard;
var _c;
__turbopack_context__.k.register(_c, "SelectionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Toast({ message, onDismiss, variant = "success" }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const t = setTimeout(onDismiss, variant === "error" ? 4000 : 2400);
            return ({
                "Toast.useEffect": ()=>clearTimeout(t)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        onDismiss,
        variant
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        className: "pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-5 [padding-top:env(safe-area-inset-top)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-2", variant === "error" ? "bg-destructive/10 text-destructive" : "bg-foreground text-background"),
            children: [
                variant === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/toast.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-4 w-4 text-success"
                }, void 0, false, {
                    fileName: "[project]/components/toast.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                message
            ]
        }, void 0, true, {
            fileName: "[project]/components/toast.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/toast.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
            outline: 'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
            ghost: 'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
            destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
            icon: 'size-8',
            'icon-xs': "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            'icon-sm': 'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
            'icon-lg': 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant = 'default', size = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/api.ts – KhmerGigs API layer (zero-n8n edition)
 *
 * Normal use:
 *  • getAllJobs()          – fetches JOBS_URL once, cached in memory for the session
 *  • getRecommendations() – fully client-side scoring, no network call
 *  • getJobDetails()      – looks up in the in-memory list, no network call
 *  • saveUserPreferences()– the ONE remaining n8n call; only when prefs change
 *
 * Legacy-migration helpers (called at most once per user, never again):
 *  • getUserProfile()  – kept for first-time migration of existing users
 *  • getSavedJobs()    – kept for first-time migration of existing users
 */ __turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "getAllJobs",
    ()=>getAllJobs,
    "getJobDetails",
    ()=>getJobDetails,
    "getRecommendations",
    ()=>getRecommendations,
    "getSavedJobs",
    ()=>getSavedJobs,
    "getUserProfile",
    ()=>getUserProfile,
    "saveUserPreferences",
    ()=>saveUserPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// ─── Public jobs feed ─────────────────────────────────────────────────────────
const JOBS_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_JOBS_URL ?? "https://i4cle9opyc56xch6.public.blob.vercel-storage.com/jobs.json";
// ─── n8n / Worker endpoints (kept only for the two remaining calls) ───────────
const WORKER_BASE = "https://khmergigs-api.misty-river-049a.workers.dev";
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL ?? "https://khmergigs.app.n8n.cloud";
const SAVE_PREFS_WORKER_URL = `${WORKER_BASE}/preferences/save`;
const PROFILE_WORKER_URL = `${WORKER_BASE}/profile`;
const SAVED_WORKER_URL = `${WORKER_BASE}/saved`;
// ─── Normalization lookup tables ──────────────────────────────────────────────
const fieldLabels = {
    hotel: "Hotel & Hospitality",
    tech: "Tech & IT",
    marketing: "Marketing",
    health: "Health",
    finance: "Finance",
    education: "Education",
    construction: "Construction",
    logistics: "Logistics",
    any: "General"
};
const typeLabels = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    internship: "Internship",
    freelance: "Freelance"
};
const locationLabels = {
    "phnom-penh": "Phnom Penh",
    "siem-reap": "Siem Reap",
    provinces: "Provinces",
    remote: "Remote"
};
// ─── Normalization helpers ─────────────────────────────────────────────────────
function normalizeType(raw) {
    const s = raw.toLowerCase();
    if (s.includes("full")) return "full-time";
    if (s.includes("part")) return "part-time";
    if (s.includes("intern")) return "internship";
    if (s.includes("freelance") || s.includes("contract")) return "freelance";
    return "full-time";
}
function normalizeField(raw) {
    const s = raw.toLowerCase();
    // NOTE: "it" is a very short token that appears inside "hospitality".
    // We check hospitality/hotel/tourism first to avoid false matches.
    if (/hotel|hospitality|tourism/.test(s)) return "hotel";
    // Use word-boundary-aware check for "it" and "tech" to avoid matching
    // "it" inside words like "marketing", "hospitality", etc.
    if (/\bit\b|tech|software|developer/.test(s)) return "tech";
    if (/market/.test(s)) return "marketing";
    if (/health|medical|nurse/.test(s)) return "health";
    if (/finance|account|bank/.test(s)) return "finance";
    if (/education|teach/.test(s)) return "education";
    if (/construct|engineer/.test(s)) return "construction";
    if (/logistic|supply|driver|warehouse/.test(s)) return "logistics";
    return "any";
}
function normalizeLocation(raw) {
    const s = raw.toLowerCase();
    if (s.includes("phnom penh")) return "phnom-penh";
    if (s.includes("siem reap")) return "siem-reap";
    if (/remote|online|anywhere/.test(s)) return "remote";
    if (s.trim().length > 0) return "provinces";
    return "provinces";
}
/** Human-readable "X days ago" derived from an ISO date string. */ function postedAgo(raw) {
    if (!raw) return "";
    try {
        const ms = Date.now() - new Date(raw).getTime();
        if (isNaN(ms)) return raw;
        const days = Math.floor(ms / 86_400_000);
        if (days === 0) return "Today";
        if (days === 1) return "Yesterday";
        if (days < 7) return `${days} days ago`;
        const weeks = Math.floor(days / 7);
        if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
        const months = Math.floor(days / 30);
        return `${months} month${months > 1 ? "s" : ""} ago`;
    } catch  {
        return raw;
    }
}
/** Maps one raw jobs.json row to the app's Job type. Returns null if id or title is missing. */ function mapRawJob(raw) {
    const id = raw["id"]?.trim();
    const title = raw["title"]?.trim();
    if (!id || !title) return null;
    const company = raw["company"]?.trim();
    const companyDisplay = !company || company === "N/A" ? "Company not listed" : company;
    const rawLocation = raw["location"] ?? "";
    const locationKey = normalizeLocation(rawLocation);
    // Use the raw text if it's more specific than the generic label.
    const locationLabel = rawLocation.trim().length > 0 ? rawLocation.trim() : locationLabels[locationKey];
    const jobTypeRaw = raw["jobType"] ?? "";
    const typeKey = normalizeType(jobTypeRaw);
    const sectorRaw = raw["sector"] ?? "";
    const fieldKey = normalizeField(sectorRaw);
    const rawPostedAt = raw["postedAt"] ?? "";
    return {
        id,
        title,
        company: companyDisplay,
        locationKey,
        locationLabel,
        type: typeKey,
        typeLabel: typeLabels[typeKey],
        fieldKey,
        fieldLabel: fieldLabels[fieldKey],
        salary: raw["salary"] ?? "",
        applyUrl: raw["applyUrl"] ?? "",
        postedAgo: postedAgo(rawPostedAt),
        postedAt: rawPostedAt,
        seniority: raw["seniority"] || undefined,
        skills: raw["skills"] || undefined,
        language: raw["language"] || undefined,
        source: raw["source"] || undefined,
        closingDate: raw["closingDate"] || undefined
    };
}
// ─── In-memory cache ──────────────────────────────────────────────────────────
let _cachedJobs = null;
let _fetchPromise = null;
async function getAllJobs() {
    if (_cachedJobs !== null) return _cachedJobs;
    // Deduplicate concurrent calls: reuse the same promise if one is in-flight.
    if (_fetchPromise) return _fetchPromise;
    _fetchPromise = (async ()=>{
        const controller = new AbortController();
        const timer = setTimeout(()=>controller.abort(), 10_000);
        try {
            // Plain GET with no custom headers to avoid a CORS preflight.
            const res = await fetch(JOBS_URL, {
                signal: controller.signal
            });
            if (!res.ok) throw new Error(`jobs.json fetch failed: ${res.status}`);
            const data = await res.json();
            const jobs = (data.jobs ?? []).reduce((acc, raw)=>{
                const j = mapRawJob(raw);
                if (j) acc.push(j);
                return acc;
            }, []);
            _cachedJobs = jobs;
            return jobs;
        } finally{
            clearTimeout(timer);
            _fetchPromise = null;
        }
    })();
    return _fetchPromise;
}
// ─── Client-side scoring / recommendations ────────────────────────────────────
/** Returns true if a closingDate string is in the past. */ function isClosed(closingDate) {
    if (!closingDate) return false;
    try {
        const d = new Date(closingDate);
        if (isNaN(d.getTime())) return false;
        return d.getTime() < Date.now();
    } catch  {
        return false;
    }
}
async function getRecommendations(prefs, // kept for API compatibility with existing call-sites
_telegramUserId) {
    const jobs = await getAllJobs();
    const scored = [];
    for (const job of jobs){
        if (isClosed(job.closingDate)) continue;
        let score = 1 // base
        ;
        if (prefs.jobType && job.type === prefs.jobType) score += 3;
        if (prefs.field && (job.fieldKey === prefs.field || job.fieldKey === "any")) score += 3;
        if (prefs.location && (job.locationKey === prefs.location || job.locationKey === "remote")) score += 3;
        scored.push({
            job,
            score
        });
    }
    // Sort by score desc, then by postedAgo string (we stored ISO date in postedAgo fallback,
    // but we have no raw date in Job; sort by title as secondary stable key).
    scored.sort((a, b)=>{
        if (b.score !== a.score) return b.score - a.score;
        return 0 // preserve original order (jobs.json is already newest-first from n8n)
        ;
    });
    const top10 = scored.slice(0, 10);
    return top10.map(({ job, score })=>{
        const match = Math.min(99, 40 + score * 5);
        // Build a human-friendly match reason.
        const reasons = [];
        if (prefs.field && job.fieldKey === prefs.field) {
            reasons.push(fieldLabels[job.fieldKey]);
        }
        if (prefs.location && job.locationKey === prefs.location) {
            reasons.push(locationLabels[job.locationKey]);
        } else if (job.locationKey === "remote") {
            reasons.push("Remote");
        }
        if (prefs.jobType && job.type === prefs.jobType) {
            reasons.push(typeLabels[job.type]);
        }
        const matchReason = reasons.length > 0 ? `Good match for ${reasons.join(" in ")}` : "Based on your preferences";
        return {
            ...job,
            match,
            matchReason
        };
    });
}
async function getJobDetails(id) {
    try {
        const jobs = await getAllJobs();
        return jobs.find((j)=>j.id === id) ?? null;
    } catch (err) {
        console.error("[api] getJobDetails failed", err);
        throw new Error("We couldn't load this job right now. Please try again.");
    }
}
// ─── Preferences → n8n (the ONE remaining write) ──────────────────────────────
/** POSTs JSON with a timeout. */ async function postJson(url, body, timeoutMs = 10000) {
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            signal: controller.signal
        });
        if (!res.ok) {
            throw new Error(`Request to ${url} failed with status ${res.status}`);
        }
        return await res.json();
    } finally{
        clearTimeout(timer);
    }
}
/** Telegram's signed launch data. Empty outside Telegram. */ function getInitData() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.Telegram?.WebApp?.initData ?? "";
}
async function saveUserPreferences(preferences, telegramUserId, _telegramUser) {
    try {
        await postJson(SAVE_PREFS_WORKER_URL, {
            initData: getInitData(),
            job_type: preferences.jobType,
            field: preferences.field,
            location: preferences.location
        });
        return {
            success: true,
            userId: telegramUserId ? String(telegramUserId) : ""
        };
    } catch (err) {
        console.error("[api] saveUserPreferences failed", err);
        throw new Error("Couldn't save your preferences. Please try again.");
    }
}
async function getUserProfile(telegramUserId) {
    try {
        const data = await postJson(PROFILE_WORKER_URL, {
            initData: getInitData()
        });
        const u = data.user;
        if (!u) return null;
        return {
            telegram_user_id: String(u.telegramUserId ?? telegramUserId),
            first_name: u.firstName ?? u.first_name,
            username: u.username,
            job_type: u.jobType ?? u.job_type ?? null,
            field: u.field ?? null,
            location: u.location ?? null
        };
    } catch (err) {
        console.error("[api] getUserProfile failed", err);
        return null;
    }
}
async function getSavedJobs(telegramUserId) {
    if (!telegramUserId) return [];
    try {
        const data = await postJson(SAVED_WORKER_URL, {
            initData: getInitData()
        });
        return data.jobs ?? [];
    } catch (err) {
        console.error("[api] getSavedJobs failed", err);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/options.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Selectable options for the onboarding questions.
// Shared by the onboarding flow and the profile page so labels stay in sync.
__turbopack_context__.s([
    "FIELDS",
    ()=>FIELDS,
    "JOB_TYPES",
    ()=>JOB_TYPES,
    "LOCATIONS",
    ()=>LOCATIONS,
    "labelFor",
    ()=>labelFor
]);
const JOB_TYPES = [
    {
        value: "full-time",
        emoji: "💼",
        label: "Full-time job",
        short: "Full-time"
    },
    {
        value: "part-time",
        emoji: "⏰",
        label: "Part-time / Flexible",
        short: "Part-time"
    },
    {
        value: "internship",
        emoji: "🎓",
        label: "Internship",
        short: "Internship"
    },
    {
        value: "freelance",
        emoji: "🛠",
        label: "Freelance / Gig",
        short: "Freelance"
    }
];
const FIELDS = [
    {
        value: "hotel",
        emoji: "🏨",
        label: "Hotel & Tourism",
        short: "Hotel & Tourism"
    },
    {
        value: "tech",
        emoji: "💻",
        label: "Tech & IT",
        short: "Tech & IT"
    },
    {
        value: "marketing",
        emoji: "📣",
        label: "Marketing & Sales",
        short: "Marketing & Sales"
    },
    {
        value: "health",
        emoji: "🏥",
        label: "Health & NGO",
        short: "Health & NGO"
    },
    {
        value: "finance",
        emoji: "🏦",
        label: "Finance & Banking",
        short: "Finance & Banking"
    },
    {
        value: "education",
        emoji: "🎓",
        label: "Education & Teaching",
        short: "Education"
    },
    {
        value: "construction",
        emoji: "🏗",
        label: "Construction & Engineering",
        short: "Construction"
    },
    {
        value: "logistics",
        emoji: "📦",
        label: "Logistics & Supply Chain",
        short: "Logistics"
    },
    {
        value: "any",
        emoji: "🌍",
        label: "Any / Show me everything",
        short: "Any field"
    }
];
const LOCATIONS = [
    {
        value: "phnom-penh",
        emoji: "📍",
        label: "Phnom Penh",
        short: "Phnom Penh"
    },
    {
        value: "siem-reap",
        emoji: "🌆",
        label: "Siem Reap",
        short: "Siem Reap"
    },
    {
        value: "provinces",
        emoji: "🌏",
        label: "Other provinces",
        short: "Other provinces"
    },
    {
        value: "remote",
        emoji: "💻",
        label: "Remote / Anywhere",
        short: "Remote"
    }
];
function labelFor(options, value) {
    if (!value) return "Not set";
    return options.find((o)=>o.value === value)?.short ?? "Not set";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSavedJobsInStorage",
    ()=>hasSavedJobsInStorage,
    "loadPreferences",
    ()=>loadPreferences,
    "loadSavedJobIds",
    ()=>loadSavedJobIds,
    "savePreferencesToStorage",
    ()=>savePreferencesToStorage,
    "saveSavedJobIds",
    ()=>saveSavedJobIds,
    "storageGet",
    ()=>storageGet,
    "storageRemove",
    ()=>storageRemove,
    "storageSet",
    ()=>storageSet
]);
/** Returns the Telegram CloudStorage object, or null when unavailable. */ function getCloudStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.Telegram?.WebApp?.CloudStorage ?? null;
}
function csGet(key) {
    return new Promise((resolve)=>{
        const cs = getCloudStorage();
        if (!cs) return resolve(null);
        let done = false;
        const timer = setTimeout(()=>{
            if (!done) {
                done = true;
                resolve(null);
            }
        }, 3000);
        try {
            cs.getItem(key, (_err, value)=>{
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve(value ?? null);
            });
        } catch  {
            if (!done) {
                done = true;
                clearTimeout(timer);
                resolve(null);
            }
        }
    });
}
function csSet(key, value) {
    return new Promise((resolve)=>{
        const cs = getCloudStorage();
        if (!cs) return resolve();
        let done = false;
        const timer = setTimeout(()=>{
            if (!done) {
                done = true;
                resolve();
            }
        }, 3000);
        try {
            cs.setItem(key, value, ()=>{
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve();
            });
        } catch  {
            if (!done) {
                done = true;
                clearTimeout(timer);
                resolve();
            }
        }
    });
}
function csRemove(key) {
    return new Promise((resolve)=>{
        const cs = getCloudStorage();
        if (!cs) return resolve();
        let done = false;
        const timer = setTimeout(()=>{
            if (!done) {
                done = true;
                resolve();
            }
        }, 3000);
        try {
            cs.removeItem(key, ()=>{
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve();
            });
        } catch  {
            if (!done) {
                done = true;
                clearTimeout(timer);
                resolve();
            }
        }
    });
}
// ─── Generic get / set / remove ──────────────────────────────────────────────
/** Returns true when Telegram CloudStorage is available and usable. */ function hasTelegramStorage() {
    return getCloudStorage() !== null;
}
async function storageGet(key) {
    try {
        if (hasTelegramStorage()) {
            return await csGet(key);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            return window.localStorage.getItem(key);
        }
        //TURBOPACK unreachable
        ;
    } catch  {
        return null;
    }
}
async function storageSet(key, value) {
    try {
        if (hasTelegramStorage()) {
            await csSet(key, value);
        } else if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.setItem(key, value);
        }
    } catch  {
    // swallow
    }
}
async function storageRemove(key) {
    try {
        if (hasTelegramStorage()) {
            await csRemove(key);
        } else if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.removeItem(key);
        }
    } catch  {
    // swallow
    }
}
// ─── Preferences ─────────────────────────────────────────────────────────────
const PREFS_KEY = "prefs";
async function loadPreferences() {
    try {
        const raw = await storageGet(PREFS_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}
async function savePreferencesToStorage(prefs) {
    try {
        await storageSet(PREFS_KEY, JSON.stringify(prefs));
    } catch  {
    // swallow
    }
}
// ─── Saved job IDs (chunked) ──────────────────────────────────────────────────
const CHUNK_MAX = 3500;
const SAVED_COUNT_KEY = "saved_count";
const savedChunkKey = (i)=>`saved_${i}`;
async function loadSavedJobIds() {
    try {
        const countRaw = await storageGet(SAVED_COUNT_KEY);
        if (countRaw === null) return null // key absent → no local data yet
        ;
        const count = parseInt(countRaw, 10);
        if (!Number.isFinite(count) || count < 0) return [];
        const chunks = await Promise.all(Array.from({
            length: count
        }, (_, i)=>storageGet(savedChunkKey(i))));
        const ids = [];
        for (const chunk of chunks){
            if (chunk) {
                try {
                    const arr = JSON.parse(chunk);
                    ids.push(...arr);
                } catch  {
                // ignore corrupt chunk
                }
            }
        }
        return ids;
    } catch  {
        return null;
    }
}
async function saveSavedJobIds(ids) {
    try {
        // Split ids array into chunks where each JSON string stays under CHUNK_MAX chars.
        const chunks = [];
        let current = [];
        for (const id of ids){
            current.push(id);
            if (JSON.stringify(current).length >= CHUNK_MAX) {
                // This id pushed us over the limit — back it out into a new chunk.
                current.pop();
                chunks.push(current);
                current = [
                    id
                ];
            }
        }
        if (current.length > 0) chunks.push(current);
        // Persist each chunk and the count.
        await Promise.all([
            storageSet(SAVED_COUNT_KEY, String(chunks.length)),
            ...chunks.map((chunk, i)=>storageSet(savedChunkKey(i), JSON.stringify(chunk)))
        ]);
    } catch  {
    // swallow
    }
}
async function hasSavedJobsInStorage() {
    try {
        const v = await storageGet(SAVED_COUNT_KEY);
        return v !== null;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Thin wrapper around the Telegram WebApp SDK that is injected on
// telegram.org/js/telegram-web-app.js when the app runs inside Telegram.
//
// This never touches a bot token — only the client-side WebApp object, which
// exposes the current user and theme. When running outside Telegram (e.g. the
// v0 preview or a normal browser) every helper degrades gracefully.
__turbopack_context__.s([
    "getEffectiveTelegramUser",
    ()=>getEffectiveTelegramUser,
    "getTelegramUser",
    ()=>getTelegramUser,
    "initTelegram",
    ()=>initTelegram,
    "isTelegram",
    ()=>isTelegram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getWebApp() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.Telegram?.WebApp ?? null;
}
function isTelegram() {
    return Boolean(getWebApp()?.initData);
}
function initTelegram() {
    const webApp = getWebApp();
    if (!webApp) return;
    try {
        webApp.ready();
        webApp.expand();
    } catch  {
    // ignore — not critical for the UI to function
    }
}
function getTelegramUser() {
    return getWebApp()?.initDataUnsafe?.user ?? null;
}
// A clearly-fake id (never a real Telegram id range collision in practice)
// used only when explicitly opted into during local/dev testing.
const DEV_USER = {
    id: 999999999,
    first_name: "Dev",
    last_name: "Tester",
    username: "dev_tester"
};
function getEffectiveTelegramUser() {
    const real = getTelegramUser();
    if (real) return real;
    const devFallbackEnabled = ("TURBOPACK compile-time value", "development") !== "production" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_DEV_USER === "true";
    return devFallbackEnabled ? DEV_USER : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "openApplyUrl",
    ()=>openApplyUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function openApplyUrl(url) {
    if (!url) return;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.self !== window.top) {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        window.location.href = url;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1zzcw7e._.js.map