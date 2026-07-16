/* =============================================================================
 * QuanJin AI / 全謹智能 — Pitch-site content config (SITE_CONFIG)
 * -----------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for every metric, partner, roadmap item and chart
 * series on the page. Edit numbers HERE, never in markup.
 *
 * Flagship case study: the live 全謹代書 LINE agent (a Taiwan 地政士 firm).
 * Holding-co brand "QuanJin AI / 全謹智能" is a PLACEHOLDER, distinct from the
 * client firm.
 *
 * Live figures audited from production as-of 2026-06-26; compliance count refreshed 2026-06-27 (see docs/venture/004).
 * ROI is framed as break-even + reach + safety (not booked revenue); any revenue
 * figure is forward-looking / Illustrative only.
 *
 *   verified: true   => measured (實測). Renders clean.
 *   verified: false  => estimate/assumption (估算/假設). Renders with a visible
 *                       "illustrative / 示意" chip while demoData === true.
 * ========================================================================== */

const SITE_CONFIG = {
  demoData: true,            // master honesty switch: show illustrative chips + footer disclaimer
  asOf: "2026-07-16",        // shown next to metrics; bump when numbers refreshed

  brand: {
    name: "Talent AI",
    nameZh: "智能人才",                  // confirm exact 中文 lockup; swap here
    contactEmail: "wentingl@alumni.cmu.edu", // mailto target for the deck/site CTAs
    bookingUrl: "",                          // 預約 link: set a scheduling URL (e.g. Calendly/cal.com) → 預約 becomes a real booking link; empty = mailto fallback
    repoName: "talentAI",                    // GitHub Pages project-page slug
    ghUser: "RealChrisL",
  },

  flagship: {
    name: "全謹代書",
    firm: "全謹地政士事務所",
    sectorEn: "Land administration & legal documents (代書 / 地政士)",
    liveSince: "2026-05",
  },

  // -- Hero ticker (4 punchy VERIFIED numbers) ------------------------------
  heroMetrics: [
    { value: 1490, suffix: "+", key: "m.leads",       verified: true },
    { value: 1289, suffix: "",  key: "m.safe",        verified: true },
    { value: 41,   suffix: "%", key: "m.afterhours",  verified: true },
    { value: 273,  suffix: "",  key: "m.escalated",   verified: true },
  ],

  // -- Case-study KPI tiles (count-up) --------------------------------------
  // Only metrics we genuinely measure. Omitted by design: turnaround-days,
  // NPS, "-80% drafting", revenue. Latency is illustrative (no provenance).
  // All 6 tiles are measured (實測) — keeps the proof grid chip-free for diligence.
  kpiTiles: [
    { value: 41,   decimals: 0, suffix: "%",     key: "kpi.afterhours", verified: true, noteKey: "kpi.afterhours.note" },
    { value: 14,   decimals: 0, suffix: " / 14", key: "kpi.eval",       verified: true, noteKey: "kpi.eval.note" },
    { value: 1289, decimals: 0, suffix: " / 6",  key: "kpi.safety",     verified: true, noteKey: "kpi.safety.note" },
    { value: 1490, decimals: 0, suffix: "",     key: "kpi.leads",      verified: true, noteKey: "kpi.leads.note" },
    { value: 99,   decimals: 0, suffix: "%",    key: "kpi.crm",        verified: true, noteKey: "kpi.crm.note" },
    { value: 273,  decimals: 0, suffix: "",     key: "kpi.escalated",  verified: true, noteKey: "kpi.escalated.note" },
  ],

  // -- Traction charts (Chart.js) -------------------------------------------
  // Only the W5 endpoints + weekly message bars are point-exact 實測.
  // W1–W4 cumulative waypoints are interpolated 估算; W6–W7 are forecast.
  tractionChart: {
    weeks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    weekLabels: ["05-20", "05-27", "06-03", "06-10", "06-17", "06-24", "07-01"],
    lastMeasuredIndex: 5,   // index 0..5 measured; 6 forecast
    messagesPerWeek:    [1210, 2426, 2576, 2593, 2548, 2435, 2650],
    cumulativeLeads:    [135, 400, 640, 850, 1030, 1205, 1490],
    escalationsCumul:   [8, 40, 80, 120, 170, 224, 273],
    footnoteKey: "traction.footnote",
  },

  // Market sizing + fundraising (TAM/SAM/SOM, use-of-funds, the ask) are DECK-ONLY
  // (deck.html / deck_i18n.js) — deliberately removed from the public bundle.

  // -- Six moats (grounded in real artifacts) -------------------------------
  moats: [
    { id: "compliance",   icon: "shield-check", key: "moat.compliance" },
    { id: "audit",        icon: "list-checks",  key: "moat.audit" },
    { id: "domainkb",     icon: "book",         key: "moat.domainkb" },
    { id: "humanloop",    icon: "user-cog",     key: "moat.humanloop" },
    { id: "staffing",     icon: "route",        key: "moat.staffing" },
    { id: "flywheel",     icon: "refresh",      key: "moat.flywheel" },
    { id: "localization", icon: "map-pin",      key: "moat.localization" },
  ],

  // -- AI talent fleet (4 role cards + ghost) -------------------------------
  // Each role: 3 visible bullets (c1..c3) + the rest expand inline (c4..cN).
  // i18n keys: fleet.<role>.t/.en/.tag/.b + .c1..cN. Icons removed by design —
  // bullets are plain lines with a thin left-accent.
  fleet: [
    { id: "greeting",  key: "fleet.greeting",  bullets: 6 },
    { id: "ops",       key: "fleet.ops",       bullets: 7 },
    { id: "marketing", key: "fleet.marketing", bullets: 5 },
    { id: "chief",     key: "fleet.chief",     bullets: 8 },
  ],

  // -- System workflow (5 stages, code-accurate) ----------------------------
  workflow: [
    { id: "intake",   icon: "chat",     key: "wf.intake" },
    { id: "form",     icon: "doc",      key: "wf.form" },
    { id: "guard",    icon: "shield",   key: "wf.guard" },
    { id: "crm",      icon: "database", key: "wf.crm" },
    { id: "human",    icon: "expert",   key: "wf.human" },
  ],

  // -- Security architecture (technically accurate per architect audit) -----
  // status: "real" => solid node; "pattern" => dashed / aspirational
  security: {
    nodes: [
      { id: "client",   key: "sec.n.client",   status: "real" },
      { id: "line",     key: "sec.n.line",     status: "real" },
      { id: "ngrok",    key: "sec.n.ngrok",    status: "real" },
      { id: "vm",       key: "sec.n.vm",       status: "real" },
      { id: "claude",   key: "sec.n.claude",   status: "real" },
      { id: "crm",      key: "sec.n.crm",      status: "real" },
      { id: "audit",    key: "sec.n.audit",    status: "real" },
    ],
    badges: [
      { id: "tls",       status: "real",    key: "sec.b.tls" },
      { id: "rbac",      status: "real",    key: "sec.b.rbac" },
      { id: "audit",     status: "real",    key: "sec.b.audit" },
      { id: "boot",      status: "real",    key: "sec.b.boot" },
      { id: "residency", status: "real",    key: "sec.b.residency" },
      { id: "rest",      status: "pattern", key: "sec.b.rest" },
      { id: "notrain",   status: "real",    key: "sec.b.notrain" },
      { id: "pdpa",      status: "pattern", key: "sec.b.pdpa" },
    ],
  },

  // -- Ecosystem / partners (real marks where applicable) -------------------
  // kind groups render in first-seen order: flagship → input → progress → compute.
  partners: [
    { id: "quanjin",   mark: "quanjin",  kind: "flagship", key: "ptr.quanjin",   href: "https://www.lystudio.com.tw/service/7.htm" },
    { id: "line",      mark: "line",     kind: "input",    key: "ptr.line",      href: "https://line.me" },
    { id: "asana",     mark: "asana",    kind: "progress", key: "ptr.asana",     href: "https://asana.com", muted: true },
    { id: "anthropic", mark: "claude",   kind: "compute",  key: "ptr.anthropic", href: "https://claude.ai" },
    { id: "azure",     mark: "azure",    kind: "compute",  key: "ptr.azure",     href: "https://azure.microsoft.com" },
    { id: "airtable",  mark: "airtable", kind: "compute",  key: "ptr.airtable",  href: "https://airtable.com" },
    { id: "ngrok",     mark: "ngrok",    kind: "compute",  key: "ptr.ngrok",     href: "https://ngrok.com" },
  ],

  // -- Roadmap (5 phases) ---------------------------------------------------
  roadmap: [
    { phase: 1, status: "done",   key: "rm.p1" },
    { phase: 2, status: "next",   key: "rm.p2" },
    { phase: 3, status: "future", key: "rm.p3" },
    { phase: 4, status: "future", key: "rm.p4" },
    { phase: 5, status: "future", key: "rm.p5" },
  ],

  // -- Pricing tiers (buyer-facing; on the public site). Fundraising stays deck-only. --
  pricing: [
    { id: "starter",  featured: false, keyBase: "pricing.starter",  features: ["pricing.starter.f1","pricing.starter.f2","pricing.starter.f3","pricing.starter.f4"] },
    { id: "pro",      featured: true,  keyBase: "pricing.pro",       features: ["pricing.pro.f1","pricing.pro.f2","pricing.pro.f3","pricing.pro.f4","pricing.pro.f5"] },
    { id: "flagship", featured: false, keyBase: "pricing.flagship",  features: ["pricing.flagship.f1","pricing.flagship.f2","pricing.flagship.f3","pricing.flagship.f4","pricing.flagship.f5"] },
  ],

  // -- Nav anchors ----------------------------------------------------------
  nav: [
    { href: "#shift",     key: "nav.shift" },
    { href: "#system",    key: "nav.system" },
    { href: "#fleet",     key: "nav.fleet" },
    { href: "#case",      key: "nav.case" },
    { href: "#traction",  key: "nav.traction" },
    { href: "#moats",     key: "nav.moats" },
    { href: "#security",  key: "nav.security" },
    // { href: "#roadmap",   key: "nav.roadmap" }, // hidden per Chris 2026-07-16
    { href: "#pricing",   key: "nav.pricing" },
    { href: "#contact",   key: "nav.contact" },
  ],
};

// expose globally (no build step / no modules)
window.SITE_CONFIG = SITE_CONFIG;
