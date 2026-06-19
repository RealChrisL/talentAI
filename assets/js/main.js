/* =============================================================================
 * QuanJin AI / 全謹智能 — app
 * Hydrates the DOM from SITE_CONFIG + I18N, wires animations, charts, i18n.
 * Vanilla JS, no modules. Honors prefers-reduced-motion throughout.
 * ========================================================================== */
(function () {
  "use strict";
  const CFG = window.SITE_CONFIG, I18N = window.I18N;
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "zh"; // zh-TW default

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const t  = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.zh[k]) || k;
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const svgIcon = (id) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- illustrative chip ---------- */
  function chip(verified) {
    if (verified || !CFG.demoData) return null;
    const c = el("span", "chip");
    c.setAttribute("data-i18n", "ui.illustrative");
    c.textContent = t("ui.illustrative");
    return c;
  }

  /* ---------- i18n apply ---------- */
  function applyI18n() {
    document.documentElement.lang = lang === "zh" ? "zh-TW" : "en";
    $$("[data-i18n]").forEach((node) => { node.textContent = t(node.getAttribute("data-i18n")); });
    $("#lang-toggle").textContent = t("ui.lang");
    $("#footer-asof").textContent = t("ui.asof") + " " + CFG.asOf;
  }

  /* ---------- count-up ---------- */
  function countUp(node, value, decimals, suffix) {
    const fmt = (v) => {
      const n = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
      return n + (suffix || "");
    };
    if (RM) { node.textContent = fmt(value); return; }
    const dur = 1400, t0 = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(value * e);
      if (p < 1) requestAnimationFrame(tick);
      else node.textContent = fmt(value);
    })(t0);
  }

  /* ---------- nav ---------- */
  function buildNav() {
    const ul = $("#nav-links");
    CFG.nav.forEach((n) => {
      const a = el("a"); a.href = n.href; a.setAttribute("data-i18n", n.key); a.textContent = t(n.key);
      const li = el("li"); li.appendChild(a); ul.appendChild(li);
    });
    const burger = $("#nav-burger"), nav = $("#nav");
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("#nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  /* ---------- hero ticker ---------- */
  function buildTicker() {
    const box = $("#hero-ticker");
    CFG.heroMetrics.forEach((m) => {
      const tk = el("div", "tk");
      const num = el("div", "tk-num"); num.dataset.val = m.value; num.dataset.suffix = m.suffix; num.textContent = "0";
      const lab = el("div", "tk-label"); lab.setAttribute("data-i18n", m.key); lab.textContent = t(m.key);
      tk.appendChild(num); tk.appendChild(lab); box.appendChild(tk);
    });
    // hero animates on load
    requestAnimationFrame(() => $$("#hero-ticker .tk-num").forEach((n) =>
      countUp(n, +n.dataset.val, 0, n.dataset.suffix)));
  }

  /* ---------- shift cards ---------- */
  function buildShift() {
    const box = $("#shift-cards");
    const icons = ["ic-doc", "ic-chat", "ic-map-pin", "ic-user-cog"];
    ["shift.pain1", "shift.pain2", "shift.pain3", "shift.pain4"].forEach((base, i) => {
      const c = el("div", "stat-card glass reveal"); c.dataset.delay = String(i % 4);
      c.innerHTML = `<div class="ic">${svgIcon(icons[i])}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", base + ".t"); h.textContent = t(base + ".t");
      const p = el("p");  p.setAttribute("data-i18n", base + ".b"); p.textContent = t(base + ".b");
      c.appendChild(h); c.appendChild(p); box.appendChild(c);
    });
  }

  /* ---------- workflow ---------- */
  function buildFlow() {
    const track = $("#flow-track");
    CFG.workflow.forEach((w, i) => {
      const node = el("div", "flow-node"); node.dataset.i = i;
      node.innerHTML = `<div class="bub">${svgIcon("ic-" + w.icon)}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", w.key + ".t"); h.textContent = t(w.key + ".t");
      const p = el("p");  p.setAttribute("data-i18n", w.key + ".d"); p.textContent = t(w.key + ".d");
      node.appendChild(h); node.appendChild(p); track.appendChild(node);
    });
  }

  /* ---------- case-study KPI tiles ---------- */
  function buildKpis() {
    const grid = $("#kpi-grid");
    CFG.kpiTiles.forEach((k) => {
      const card = el("div", "kpi glass");
      const num = el("div", "kpi-num"); num.dataset.val = k.value; num.dataset.dec = k.decimals || 0; num.dataset.suffix = k.suffix; num.textContent = "0";
      const lab = el("div", "kpi-label"); lab.setAttribute("data-i18n", k.key + ".t"); lab.textContent = t(k.key + ".t");
      const note = el("div", "kpi-note"); note.setAttribute("data-i18n", k.noteKey); note.textContent = t(k.noteKey);
      const ch = chip(k.verified);
      if (ch) card.appendChild(ch);
      card.appendChild(num); card.appendChild(lab); card.appendChild(note);
      grid.appendChild(card);
    });
  }

  /* ---------- moats ---------- */
  function buildMoats() {
    const grid = $("#moat-grid");
    CFG.moats.forEach((m, i) => {
      const card = el("div", "moat glass reveal"); card.dataset.delay = String(i % 4);
      card.innerHTML = `<div class="ic">${svgIcon("ic-" + m.icon)}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", m.key + ".t"); h.textContent = t(m.key + ".t");
      const p = el("p");  p.setAttribute("data-i18n", m.key + ".b"); p.textContent = t(m.key + ".b");
      card.appendChild(h); card.appendChild(p); grid.appendChild(card);
    });
  }

  /* ---------- security badges ---------- */
  function buildBadges() {
    const box = $("#sec-badges");
    CFG.security.badges.forEach((b) => {
      const badge = el("div", "badge " + b.status);
      badge.innerHTML = `<span class="dot"></span>`;
      const s = el("span"); s.setAttribute("data-i18n", b.key + ".t"); s.textContent = t(b.key + ".t");
      badge.appendChild(s); box.appendChild(badge);
    });
  }

  /* ---------- ecosystem constellation ---------- */
  function buildConstellation() {
    const wrap = $("#constellation"), links = $("#constellation-links");
    const center = el("div", "ptr-node ptr-center");
    center.style.left = "50%"; center.style.top = "50%";
    center.innerHTML = `<div class="ptr-mark"><svg class="logo"><use href="#logo"/></svg></div>`;
    const cc = el("div", "ptr-cap"); cc.textContent = CFG.brand.name; center.appendChild(cc);
    wrap.appendChild(center);

    const nodes = CFG.partners.map((p) => {
      const n = el("div", "ptr-node");
      n.innerHTML = `<div class="ptr-mark"><svg viewBox="0 0 48 48"><use href="#pm-${p.mark}"/></svg></div>`;
      const cap = el("div", "ptr-cap"); cap.setAttribute("data-i18n", p.key + ".t"); cap.textContent = t(p.key + ".t");
      n.appendChild(cap); wrap.appendChild(n); return n;
    });

    function layout() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      const R = Math.min(w, h) * 0.37;
      links.setAttribute("viewBox", `0 0 ${w} ${h}`);
      links.innerHTML = "";
      nodes.forEach((n, i) => {
        const ang = (-90 + i * (360 / nodes.length)) * Math.PI / 180;
        const x = w / 2 + R * Math.cos(ang), y = h / 2 + R * Math.sin(ang);
        n.style.left = x + "px"; n.style.top = y + "px";
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", w / 2); line.setAttribute("y1", h / 2);
        line.setAttribute("x2", x); line.setAttribute("y2", y);
        line.setAttribute("class", "link");
        links.appendChild(line);
      });
    }
    layout();
    window.addEventListener("resize", layout);
  }

  /* ---------- roadmap ---------- */
  function buildRoadmap() {
    const tl = $("#timeline");
    CFG.roadmap.forEach((p) => {
      const ph = el("div", "phase " + p.status);
      ph.innerHTML = `<div class="dot"></div>`;
      const card = el("div", "phase-card glass");
      const st = el("div", "ph-status"); st.textContent = p.status === "done" ? "✓ " + (lang === "zh" ? "已完成" : "Shipped") : (p.status === "next" ? (lang === "zh" ? "進行中" : "Next") : (lang === "zh" ? "規劃中" : "Future"));
      st.dataset.status = p.status;
      const h = el("h3"); h.setAttribute("data-i18n", p.key + ".t"); h.textContent = t(p.key + ".t");
      const o = el("p");  o.setAttribute("data-i18n", p.key + ".o"); o.textContent = t(p.key + ".o");
      card.appendChild(st); card.appendChild(h); card.appendChild(o);
      ph.appendChild(card); tl.appendChild(ph);
    });
  }
  function refreshRoadmapStatus() {
    $$("#timeline .phase").forEach((ph) => {
      const st = $(".ph-status", ph), s = st.dataset.status;
      st.textContent = s === "done" ? "✓ " + (lang === "zh" ? "已完成" : "Shipped") : (s === "next" ? (lang === "zh" ? "進行中" : "Next") : (lang === "zh" ? "規劃中" : "Future"));
    });
  }

  /* ---------- market tiers + fund legend ---------- */
  const FUND_COLORS = ["#3B82F6", "#8B5CF6", "#2DD4BF", "#E8C98A"];
  function buildAsk() {
    const tiers = $("#market-tiers");
    CFG.marketSizing.forEach((m) => {
      const tier = el("div", "tier glass");
      const top = el("div", "tier-top");
      const name = el("span", "tier-name", m.tier);
      const val = el("span", "tier-val", "NT$" + m.value + (m.unit.includes("M") ? "M" : ""));
      top.appendChild(name); top.appendChild(val);
      const lab = el("div", "tier-label"); lab.setAttribute("data-i18n", m.key + ".t"); lab.textContent = t(m.key + ".t");
      const det = el("div", "tier-detail"); det.setAttribute("data-i18n", m.key + ".d"); det.textContent = t(m.key + ".d");
      const ch = chip(m.verified); if (ch) { ch.style.position = "absolute"; ch.style.top = ".7rem"; ch.style.right = ".7rem"; tier.appendChild(ch); }
      tier.appendChild(top); tier.appendChild(lab); tier.appendChild(det); tiers.appendChild(tier);
    });
    const leg = $("#fund-legend");
    CFG.theAsk.useOfFunds.forEach((f, i) => {
      const row = el("div", "fl");
      const sw = el("span", "sw"); sw.style.background = FUND_COLORS[i % FUND_COLORS.length];
      const s = el("span"); s.setAttribute("data-i18n", f.key + ".t"); s.textContent = f.pct + "% · " + t(f.key + ".t");
      s.dataset.pct = f.pct;
      row.appendChild(sw); row.appendChild(s); leg.appendChild(row);
    });
    // mailto CTAs (no backend / no PII)
    const mail = "mailto:" + CFG.brand.contactEmail;
    $("#cta-deck").href = mail + "?subject=" + encodeURIComponent("Request the deck — " + CFG.brand.name);
    $("#cta-pilot").href = mail + "?subject=" + encodeURIComponent("Book a pilot — " + CFG.brand.name);
  }
  function refreshFundLegend() {
    $$("#fund-legend .fl span[data-pct]").forEach((s) => {
      s.textContent = s.dataset.pct + "% · " + t(s.getAttribute("data-i18n"));
    });
  }

  /* ---------- charts ---------- */
  let charts = [];
  function chartTheme() {
    Chart.defaults.color = "#A9B2CC";
    Chart.defaults.font.family = "Manrope, 'Noto Sans TC', sans-serif";
    Chart.defaults.borderColor = "rgba(255,255,255,0.06)";
  }
  function gridOpts() {
    return { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#6B7392", font: { size: 11 } } };
  }
  function splitSeries(arr, lastIdx) {
    const solid = arr.map((v, i) => (i <= lastIdx ? v : null));
    const dash  = arr.map((v, i) => (i >= lastIdx ? v : null));
    return { solid, dash };
  }
  function buildCharts() {
    const tc = CFG.tractionChart, ANIM = RM ? false : { duration: 900 };
    const labels = tc.weeks.map((w, i) => w + "\n" + tc.weekLabels[i]);

    // messages bar — per-bar color by measured/forecast
    const msgColors = tc.messagesPerWeek.map((_, i) => i <= tc.lastMeasuredIndex ? "rgba(45,212,191,0.7)" : "rgba(169,178,204,0.28)");
    const msgBorder = tc.messagesPerWeek.map((_, i) => i <= tc.lastMeasuredIndex ? "#2DD4BF" : "#6B7392");
    charts.push(new Chart($("#chart-messages"), {
      type: "bar",
      data: { labels, datasets: [{ data: tc.messagesPerWeek, backgroundColor: msgColors, borderColor: msgBorder, borderWidth: 1, borderRadius: 6, borderSkipped: false }] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: (c) => c.dataIndex > tc.lastMeasuredIndex ? t("ui.forecast") : t("ui.measured") } } },
        scales: { x: gridOpts(), y: { ...gridOpts(), beginAtZero: true } } }
    }));

    // leads line — solid measured + dashed forecast
    const L = splitSeries(tc.cumulativeLeads, tc.lastMeasuredIndex);
    charts.push(new Chart($("#chart-leads"), {
      type: "line",
      data: { labels, datasets: [
        { data: L.solid, borderColor: "#8B5CF6", backgroundColor: "rgba(139,92,246,0.12)", fill: true, tension: .35, pointRadius: 3, pointBackgroundColor: "#8B5CF6", spanGaps: false },
        { data: L.dash, borderColor: "#6B7392", borderDash: [6, 5], fill: false, tension: .35, pointRadius: 2, pointBackgroundColor: "#6B7392" }
      ] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: (c) => c.dataIndex > tc.lastMeasuredIndex ? t("ui.forecast") : t("ui.measured") } } },
        scales: { x: gridOpts(), y: { ...gridOpts(), beginAtZero: true } } }
    }));

    // escalations line
    const E = splitSeries(tc.escalationsCumul, tc.lastMeasuredIndex);
    charts.push(new Chart($("#chart-escal"), {
      type: "line",
      data: { labels, datasets: [
        { data: E.solid, borderColor: "#2DD4BF", backgroundColor: "rgba(45,212,191,0.12)", fill: true, tension: .35, pointRadius: 3, pointBackgroundColor: "#2DD4BF" },
        { data: E.dash, borderColor: "#6B7392", borderDash: [6, 5], fill: false, tension: .35, pointRadius: 2, pointBackgroundColor: "#6B7392" }
      ] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: (c) => c.dataIndex > tc.lastMeasuredIndex ? t("ui.forecast") : t("ui.measured") } } },
        scales: { x: gridOpts(), y: { ...gridOpts(), beginAtZero: true } } }
    }));

    // use-of-funds doughnut
    charts.push(new Chart($("#chart-funds"), {
      type: "doughnut",
      data: { labels: CFG.theAsk.useOfFunds.map((f) => f.pct + "%"),
              datasets: [{ data: CFG.theAsk.useOfFunds.map((f) => f.pct), backgroundColor: FUND_COLORS, borderColor: "#0A0E1A", borderWidth: 2 }] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false, cutout: "62%",
        plugins: { legend: { display: false } } }
    }));
  }

  /* ---------- observers / motion ---------- */
  function wireObservers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const node = e.target;
        node.classList.add("in");

        // count-ups inside
        $$(".kpi-num", node).forEach((n) => { if (!n.dataset.done) { n.dataset.done = "1"; countUp(n, +n.dataset.val, +n.dataset.dec, n.dataset.suffix); } });

        if (node.id === "kpi-grid") $$(".kpi-num", node).forEach((n) => { if (!n.dataset.done) { n.dataset.done = "1"; countUp(n, +n.dataset.val, +n.dataset.dec, n.dataset.suffix); } });

        io.unobserve(node);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    $$(".reveal").forEach((n) => io.observe(n));
    // kpi tiles are created after .reveal scan? grid has .reveal; tiles inside need count-up — observe grid
    const kg = $("#kpi-grid"); if (kg) io.observe(kg);

    // workflow lighting + flow line draw
    const sys = $("#system");
    new IntersectionObserver((ents, ob) => {
      ents.forEach((e) => { if (!e.isIntersecting) return;
        $(".flow-line path").classList.add("drawn");
        $$("#flow-track .flow-node").forEach((n, i) => setTimeout(() => n.classList.add("lit"), RM ? 0 : i * 240));
        ob.disconnect();
      });
    }, { threshold: 0.3 }).observe(sys);

    // roadmap progress line
    const rm = $("#roadmap");
    new IntersectionObserver((ents, ob) => {
      ents.forEach((e) => { if (!e.isIntersecting) return;
        const horiz = window.innerWidth > 940;
        const pl = $("#rm-progress");
        if (horiz) pl.style.width = "88%"; else pl.style.height = "100%";
        ob.disconnect();
      });
    }, { threshold: 0.3 }).observe(rm);

    // security packet
    if (!RM) animatePacket();
  }

  function animatePacket() {
    const path = $("#sec-path"), packet = $("#sec-packet");
    if (!path || !packet) return;
    const len = path.getTotalLength();
    let start = null;
    function step(ts) {
      if (start === null) start = ts;
      const p = ((ts - start) / 3200) % 1;
      const pt = path.getPointAtLength(p * len);
      packet.setAttribute("cx", pt.x); packet.setAttribute("cy", pt.y);
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- hero particle network ---------- */
  function heroCanvas() {
    if (RM) return;
    const c = $("#hero-canvas"), ctx = c.getContext("2d");
    let w, h, pts, raf;
    function size() { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; init(); }
    function init() {
      const n = Math.min(64, Math.floor(w * h / 22000));
      pts = Array.from({ length: n }, (_, i) => ({
        x: ((i * 9301 + 49297) % 233280) / 233280 * w,
        y: ((i * 49297 + 9301) % 233280) / 233280 * h,
        vx: (((i * 7) % 10) / 10 - 0.5) * 0.25,
        vy: (((i * 13) % 10) / 10 - 0.5) * 0.25
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
          if (d < 130) { ctx.strokeStyle = `rgba(120,150,255,${0.14 * (1 - d / 130)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
        }
        ctx.fillStyle = "rgba(140,170,255,0.55)"; ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", size);
    size(); draw();
  }

  /* ---------- scroll chrome ---------- */
  function wireScroll() {
    const bar = $("#scrollbar"), nav = $("#nav");
    function onScroll() {
      const sc = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (sc / max) * 100 : 0) + "%";
      nav.classList.toggle("scrolled", sc > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- language toggle ---------- */
  function wireLang() {
    $("#lang-toggle").addEventListener("click", () => {
      lang = lang === "zh" ? "en" : "zh";
      applyI18n();
      refreshRoadmapStatus();
      refreshFundLegend();
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildNav(); buildTicker(); buildShift(); buildFlow(); buildKpis();
    buildMoats(); buildBadges(); buildConstellation(); buildRoadmap(); buildAsk();
    applyI18n();
    chartTheme(); buildCharts();
    wireObservers(); wireScroll(); wireLang(); heroCanvas();
  });
})();
