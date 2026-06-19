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
 * Live figures audited from production as-of 2026-06-19 (see docs/venture/004).
 * PRE-REVENUE: deals closed = 0. ROI = break-even + reach + safety, never
 * booked revenue.
 *
 *   verified: true   => measured (實測). Renders clean.
 *   verified: false  => estimate/assumption (估算/假設). Renders with a visible
 *                       "illustrative / 示意" chip while demoData === true.
 * ========================================================================== */

const SITE_CONFIG = {
  demoData: true,            // master honesty switch: show illustrative chips + footer disclaimer
  asOf: "2026-06-19",        // shown next to metrics; bump when numbers refreshed

  brand: {
    name: "Talent AI",
    nameZh: "智能人才",                  // confirm exact 中文 lockup; swap here
    contactEmail: "hello@talent-ai.tw", // mailto only — no backend, no PII capture
    repoName: "talentAI",               // GitHub Pages project-page slug
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
    { value: 1080, suffix: "+", key: "m.leads",       verified: true },
    { value: 911,  suffix: "",  key: "m.safe",        verified: true },
    { value: 30,   suffix: "%", key: "m.afterhours",  verified: true },
    { value: 113,  suffix: "",  key: "m.escalated",   verified: true },
  ],

  // -- Case-study KPI tiles (count-up) --------------------------------------
  // Only metrics we genuinely measure. Omitted by design: turnaround-days,
  // NPS, "-80% drafting", revenue. Latency is illustrative (no provenance).
  kpiTiles: [
    { value: 30,   decimals: 0, suffix: "%",       key: "kpi.afterhours", verified: true,
      noteKey: "kpi.afterhours.note" },
    { value: 911,  decimals: 0, suffix: " / 7",    key: "kpi.safety",     verified: true,
      noteKey: "kpi.safety.note" },
    { value: 1080, decimals: 0, suffix: "",        key: "kpi.leads",      verified: true,
      noteKey: "kpi.leads.note" },
    { value: 113,  decimals: 0, suffix: "",        key: "kpi.escalated",  verified: true,
      noteKey: "kpi.escalated.note" },
    { value: 0.2,  decimals: 1, suffix: "",        key: "kpi.breakeven",  verified: false,
      noteKey: "kpi.breakeven.note" },
    { value: 2,    decimals: 0, suffix: "s",       key: "kpi.latency",    verified: false,
      noteKey: "kpi.latency.note" },
  ],

  // -- Traction charts (Chart.js) -------------------------------------------
  // Only the W5 endpoints + weekly message bars are point-exact 實測.
  // W1–W4 cumulative waypoints are interpolated 估算; W6–W7 are forecast.
  tractionChart: {
    weeks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    weekLabels: ["05-20", "05-27", "06-03", "06-10", "06-17", "06-24", "07-01"],
    lastMeasuredIndex: 4,   // index 0..4 measured; 5..6 forecast
    messagesPerWeek:    [1210, 2426, 2576, 2593, 984, 2600, 2650],
    cumulativeLeads:    [135, 400, 650, 880, 1080, 1320, 1560],
    escalationsCumul:   [8, 35, 62, 90, 113, 138, 163],
    footnoteKey: "traction.footnote",
  },

  // -- Market sizing TAM/SAM/SOM (bottoms-up, all estimates) ----------------
  marketSizing: [
    { tier: "SOM", value: 14.4,  unit: "NT$M ARR",          verified: false, key: "mkt.som" },
    { tier: "SAM", value: 230,   unit: "NT$M ARR",          verified: false, key: "mkt.sam" },
    { tier: "TAM", value: 2000,  unit: "NT$M ARR (o.o.m.)", verified: false, key: "mkt.tam" },
  ],

  // -- The Ask (illustrative — no round set) --------------------------------
  theAsk: {
    illustrative: true,
    roundLabelKey: "ask.round",
    useOfFunds: [
      { pct: 40, key: "fund.kit" },
      { pct: 25, key: "fund.channel" },
      { pct: 20, key: "fund.platform" },
      { pct: 15, key: "fund.gtm" },
    ],
  },

  // -- Six moats (grounded in real artifacts) -------------------------------
  moats: [
    { id: "compliance",   icon: "shield-check", key: "moat.compliance" },
    { id: "audit",        icon: "list-checks",  key: "moat.audit" },
    { id: "domainkb",     icon: "book",         key: "moat.domainkb" },
    { id: "humanloop",    icon: "user-cog",     key: "moat.humanloop" },
    { id: "flywheel",     icon: "refresh",      key: "moat.flywheel" },
    { id: "localization", icon: "map-pin",      key: "moat.localization" },
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
  partners: [
    { id: "quanjin",   mark: "quanjin",  kind: "flagship", key: "ptr.quanjin",   href: "https://www.lystudio.com.tw/service/7.htm" },
    { id: "anthropic", mark: "claude",   kind: "tech",     key: "ptr.anthropic", href: "https://claude.ai" },
    { id: "azure",     mark: "azure",    kind: "tech",     key: "ptr.azure",     href: "https://azure.microsoft.com" },
    { id: "line",      mark: "line",     kind: "tech",     key: "ptr.line",      href: "https://line.me" },
    { id: "ngrok",     mark: "ngrok",    kind: "tech",     key: "ptr.ngrok",     href: "https://ngrok.com" },
    { id: "airtable",  mark: "airtable", kind: "tech",     key: "ptr.airtable",  href: "https://airtable.com" },
  ],

  // -- Roadmap (5 phases) ---------------------------------------------------
  roadmap: [
    { phase: 1, status: "done",   key: "rm.p1" },
    { phase: 2, status: "next",   key: "rm.p2" },
    { phase: 3, status: "future", key: "rm.p3" },
    { phase: 4, status: "future", key: "rm.p4" },
    { phase: 5, status: "future", key: "rm.p5" },
  ],

  // -- Nav anchors ----------------------------------------------------------
  nav: [
    { href: "#shift",     key: "nav.shift" },
    { href: "#system",    key: "nav.system" },
    { href: "#case",      key: "nav.case" },
    { href: "#traction",  key: "nav.traction" },
    { href: "#moats",     key: "nav.moats" },
    { href: "#security",  key: "nav.security" },
    { href: "#roadmap",   key: "nav.roadmap" },
    { href: "#ask",       key: "nav.ask" },
  ],
};

// expose globally (no build step / no modules)
window.SITE_CONFIG = SITE_CONFIG;
