/* =============================================================================
 * Talent AI / 智能人才 — app
 * Hydrates the DOM from SITE_CONFIG + I18N; wires the register theme's motion,
 * charts, partner row, and i18n. Vanilla JS. Honors prefers-reduced-motion.
 * ========================================================================== */
(function () {
  "use strict";
  const CFG = window.SITE_CONFIG, I18N = window.I18N;
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "zh";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const t  = (k) => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const svgUse = (id) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };

  function chip(verified) {
    if (verified || !CFG.demoData) return null;
    const c = el("span", "chip"); c.setAttribute("data-i18n", "ui.illustrative"); c.textContent = t("ui.illustrative"); return c;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "zh" ? "zh-TW" : "en";
    $$("[data-i18n]").forEach((n) => { n.textContent = t(n.getAttribute("data-i18n")); });
    $("#lang-toggle").textContent = t("ui.lang");
    $("#footer-asof").textContent = t("ui.asof") + " " + CFG.asOf;
  }

  function countUp(node, value, decimals, suffix, unitSpan) {
    const num = (v) => decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
    const set = (v) => { const s = num(v); node.innerHTML = unitSpan && suffix ? s + '<span class="u">' + suffix + "</span>" : s + (suffix || ""); };
    if (RM) { set(value); return; }
    const dur = 1400, t0 = performance.now();
    (function tick(now) { const p = Math.min(1, (now - t0) / dur); set(value * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); else set(value); })(t0);
  }

  /* ---------- nav ---------- */
  function buildNav() {
    const ul = $("#nav-links");
    CFG.nav.forEach((n) => { const a = el("a"); a.href = n.href; a.setAttribute("data-i18n", n.key); a.textContent = t(n.key); const li = el("li"); li.appendChild(a); ul.appendChild(li); });
    const burger = $("#nav-burger"), nav = $("#nav");
    burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });
    $$("#nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  /* ---------- hero ticker ---------- */
  function buildTicker() {
    const box = $("#hero-ticker");
    CFG.heroMetrics.forEach((m) => {
      const tk = el("div", "tk");
      const n = el("div", "tk-num"); n.dataset.val = m.value; n.dataset.suffix = m.suffix; n.textContent = "0";
      const l = el("div", "tk-label"); l.setAttribute("data-i18n", m.key); l.textContent = t(m.key);
      tk.appendChild(n); tk.appendChild(l); box.appendChild(tk);
    });
    requestAnimationFrame(() => $$("#hero-ticker .tk-num").forEach((n) => countUp(n, +n.dataset.val, 0, n.dataset.suffix, true)));
  }

  /* ---------- shift ---------- */
  function buildShift() {
    const box = $("#shift-cards"), icons = ["ic-doc", "ic-chat", "ic-map-pin", "ic-user-cog"];
    ["shift.pain1", "shift.pain2", "shift.pain3", "shift.pain4"].forEach((base, i) => {
      const c = el("div", "stat-card glass reveal"); c.dataset.delay = String(i % 4);
      c.innerHTML = `<div class="ic">${svgUse(icons[i])}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", base + ".t"); h.textContent = t(base + ".t");
      const p = el("p"); p.setAttribute("data-i18n", base + ".b"); p.textContent = t(base + ".b");
      c.appendChild(h); c.appendChild(p); box.appendChild(c);
    });
  }

  /* ---------- workflow ---------- */
  function buildFlow() {
    const track = $("#flow-track");
    CFG.workflow.forEach((w) => {
      const node = el("div", "flow-node");
      node.innerHTML = `<div class="bub">${svgUse("ic-" + w.icon)}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", w.key + ".t"); h.textContent = t(w.key + ".t");
      const p = el("p"); p.setAttribute("data-i18n", w.key + ".d"); p.textContent = t(w.key + ".d");
      node.appendChild(h); node.appendChild(p); track.appendChild(node);
    });
  }

  /* ---------- case KPIs ---------- */
  function buildKpis() {
    const grid = $("#kpi-grid");
    CFG.kpiTiles.forEach((k) => {
      const card = el("div", "kpi");
      const n = el("div", "kpi-num"); n.dataset.val = k.value; n.dataset.dec = k.decimals || 0; n.dataset.suffix = k.suffix; n.textContent = "0";
      const l = el("div", "kpi-label"); l.setAttribute("data-i18n", k.key + ".t"); l.textContent = t(k.key + ".t");
      const note = el("div", "kpi-note"); note.setAttribute("data-i18n", k.noteKey); note.textContent = t(k.noteKey);
      const ch = chip(k.verified); if (ch) card.appendChild(ch);
      card.appendChild(n); card.appendChild(l); card.appendChild(note); grid.appendChild(card);
    });
  }

  /* ---------- moats ---------- */
  function buildMoats() {
    const grid = $("#moat-grid");
    CFG.moats.forEach((m, i) => {
      const card = el("div", "moat glass reveal"); card.dataset.delay = String(i % 4);
      card.innerHTML = `<div class="ic">${svgUse("ic-" + m.icon)}</div>`;
      const h = el("h3"); h.setAttribute("data-i18n", m.key + ".t"); h.textContent = t(m.key + ".t");
      const p = el("p"); p.setAttribute("data-i18n", m.key + ".b"); p.textContent = t(m.key + ".b");
      card.appendChild(h); card.appendChild(p); grid.appendChild(card);
    });
  }

  /* ---------- security badges ---------- */
  function buildBadges() {
    const box = $("#sec-badges");
    CFG.security.badges.forEach((b) => {
      const badge = el("div", "badge " + b.status); badge.innerHTML = `<span class="dot"></span>`;
      const s = el("span"); s.setAttribute("data-i18n", b.key + ".t"); s.textContent = t(b.key + ".t");
      badge.appendChild(s); box.appendChild(badge);
    });
  }

  /* ---------- partners (register row, real logos + links) ---------- */
  function partnerCard(p) {
    const a = el("a", "partner-card" + (p.kind === "flagship" ? " flagship" : ""));
    a.href = p.href; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.innerHTML = `<span class="pm"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#pm-${p.mark}"/></svg></span>`;
    const cap = el("span", "pcap");
    const pn = el("span", "pn"); pn.setAttribute("data-i18n", p.key + ".t"); pn.textContent = t(p.key + ".t");
    const pl = el("span", "pl"); pl.textContent = host(p.href);
    cap.appendChild(pn); cap.appendChild(pl); a.appendChild(cap); return a;
  }
  function buildPartners() {
    const wrap = $("#partner-grid");
    const groups = [["flagship", "ecosystem.flagship"], ["tech", "ecosystem.tech"]];
    groups.forEach(([kind, labelKey]) => {
      const list = CFG.partners.filter((p) => p.kind === kind);
      if (!list.length) return;
      const g = el("div", "partner-group");
      const lab = el("div", "partner-group-label"); lab.setAttribute("data-i18n", labelKey); lab.textContent = t(labelKey);
      const row = el("div", "partner-row");
      list.forEach((p) => row.appendChild(partnerCard(p)));
      g.appendChild(lab); g.appendChild(row); wrap.appendChild(g);
    });
  }

  /* ---------- roadmap ---------- */
  const RM_LABEL = { done: { zh: "✓ 已完成", en: "✓ Shipped" }, next: { zh: "進行中", en: "Next" }, future: { zh: "規劃中", en: "Future" } };
  function buildRoadmap() {
    const tl = $("#timeline");
    CFG.roadmap.forEach((p) => {
      const ph = el("div", "phase " + p.status); ph.innerHTML = `<div class="dot"></div>`;
      const card = el("div", "phase-card glass");
      const st = el("div", "ph-status"); st.dataset.status = p.status; st.textContent = RM_LABEL[p.status][lang];
      const h = el("h3"); h.setAttribute("data-i18n", p.key + ".t"); h.textContent = t(p.key + ".t");
      const o = el("p"); o.setAttribute("data-i18n", p.key + ".o"); o.textContent = t(p.key + ".o");
      card.appendChild(st); card.appendChild(h); card.appendChild(o); ph.appendChild(card); tl.appendChild(ph);
    });
  }
  function refreshRoadmapStatus() { $$("#timeline .ph-status").forEach((s) => { s.textContent = RM_LABEL[s.dataset.status][lang]; }); }

  /* ---------- ask ---------- */
  const FUND_COLORS = ["#17242E", "#C0392B", "#8A6A35", "#3E4A52"];
  function buildAsk() {
    // Public site: buyer contact only — market sizing/use-of-funds/round live in the deck.
    const pilot = $("#cta-pilot");
    if (!pilot) return;
    const mail = "mailto:" + CFG.brand.contactEmail;
    if (CFG.brand.bookingUrl) { pilot.href = CFG.brand.bookingUrl; pilot.target = "_blank"; pilot.rel = "noopener noreferrer"; }
    else pilot.href = mail + "?subject=" + encodeURIComponent("Book a pilot / 預約試點 — " + CFG.brand.name);
  }
  function refreshFundLegend() { $$("#fund-legend .fl span[data-pct]").forEach((s) => { s.textContent = s.dataset.pct + "% · " + t(s.getAttribute("data-i18n")); }); }

  /* ---------- charts (register palette) ---------- */
  let charts = [];
  function chartTheme() { Chart.defaults.color = "#3E4A52"; Chart.defaults.font.family = "'IBM Plex Mono', monospace"; Chart.defaults.font.size = 10; Chart.defaults.borderColor = "rgba(23,36,46,0.08)"; }
  const axis = () => ({ grid: { color: "rgba(23,36,46,0.07)" }, ticks: { color: "#586168" } });
  const split = (arr, last) => ({ solid: arr.map((v, i) => i <= last ? v : null), dash: arr.map((v, i) => i >= last ? v : null) });
  const fcast = (c) => (c.dataIndex > CFG.tractionChart.lastMeasuredIndex ? t("ui.forecast") : t("ui.measured"));

  function buildCharts() {
    const tc = CFG.tractionChart, ANIM = RM ? false : { duration: 900 };
    const labels = tc.weeks.map((w, i) => [w, tc.weekLabels[i]]);

    const mc = tc.messagesPerWeek.map((_, i) => i <= tc.lastMeasuredIndex ? "#17242E" : "rgba(138,106,53,0.45)");
    const mb = tc.messagesPerWeek.map((_, i) => i <= tc.lastMeasuredIndex ? "#17242E" : "#8A6A35");
    charts.push(new Chart($("#chart-messages"), {
      type: "bar",
      data: { labels, datasets: [{ data: tc.messagesPerWeek, backgroundColor: mc, borderColor: mb, borderWidth: 1, borderRadius: 2 }] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: fcast } } }, scales: { x: axis(), y: { ...axis(), beginAtZero: true } } }
    }));

    const L = split(tc.cumulativeLeads, tc.lastMeasuredIndex);
    charts.push(new Chart($("#chart-leads"), {
      type: "line",
      data: { labels, datasets: [
        { data: L.solid, borderColor: "#C0392B", backgroundColor: "rgba(192,57,43,0.07)", fill: true, tension: .32, pointRadius: 3, pointBackgroundColor: "#C0392B" },
        { data: L.dash, borderColor: "#8A6A35", borderDash: [6, 5], fill: false, tension: .32, pointRadius: 2, pointBackgroundColor: "#8A6A35" } ] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: fcast } } }, scales: { x: axis(), y: { ...axis(), beginAtZero: true } } }
    }));

    const E = split(tc.escalationsCumul, tc.lastMeasuredIndex);
    charts.push(new Chart($("#chart-escal"), {
      type: "line",
      data: { labels, datasets: [
        { data: E.solid, borderColor: "#17242E", backgroundColor: "rgba(23,36,46,0.06)", fill: true, tension: .32, pointRadius: 3, pointBackgroundColor: "#17242E" },
        { data: E.dash, borderColor: "#8A6A35", borderDash: [6, 5], fill: false, tension: .32, pointRadius: 2, pointBackgroundColor: "#8A6A35" } ] },
      options: { animation: ANIM, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { afterLabel: fcast } } }, scales: { x: axis(), y: { ...axis(), beginAtZero: true } } }
    }));

  }

  /* ---------- observers / motion ---------- */
  function wireObservers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        $$(".kpi-num", e.target).forEach((n) => { if (!n.dataset.done) { n.dataset.done = "1"; countUp(n, +n.dataset.val, +n.dataset.dec, n.dataset.suffix, false); } });
        io.unobserve(e.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((n) => io.observe(n));
    const kg = $("#kpi-grid"); if (kg) io.observe(kg);

    new IntersectionObserver((ents, ob) => { ents.forEach((e) => { if (!e.isIntersecting) return;
      $(".flow-line path").classList.add("drawn");
      $$("#flow-track .flow-node").forEach((n, i) => setTimeout(() => n.classList.add("lit"), RM ? 0 : i * 220));
      ob.disconnect(); }); }, { threshold: 0.3 }).observe($("#system"));

    new IntersectionObserver((ents, ob) => { ents.forEach((e) => { if (!e.isIntersecting) return;
      const pl = $("#rm-progress"); if (window.innerWidth > 940) pl.style.width = "88%"; else pl.style.height = "100%";
      ob.disconnect(); }); }, { threshold: 0.3 }).observe($("#roadmap"));

    if (!RM) animatePacket();
  }

  function animatePacket() {
    const path = $("#sec-path"), packet = $("#sec-packet"); if (!path || !packet) return;
    const len = path.getTotalLength(); let start = null;
    function step(ts) { if (start === null) start = ts; const p = ((ts - start) / 3200) % 1; const pt = path.getPointAtLength(p * len); packet.setAttribute("cx", pt.x); packet.setAttribute("cy", pt.y); requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }

  function cadHero() { const c = $("#cad"); if (c) requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add("drawn"))); }

  /* ---------- scroll chrome ---------- */
  function wireScroll() {
    const bar = $("#scrollbar"), nav = $("#nav");
    const onScroll = () => { const sc = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight; bar.style.width = (max > 0 ? (sc / max) * 100 : 0) + "%"; nav.classList.toggle("scrolled", sc > 24); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  function wireLang() {
    $("#lang-toggle").addEventListener("click", () => { lang = lang === "zh" ? "en" : "zh"; applyI18n(); refreshRoadmapStatus(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildNav(); buildTicker(); buildShift(); buildFlow(); buildKpis();
    buildMoats(); buildBadges(); buildPartners(); buildRoadmap(); buildAsk();
    applyI18n();
    chartTheme(); buildCharts();
    wireObservers(); wireScroll(); wireLang(); cadHero();
  });
})();
