/* =============================================================================
 * Talent AI / 智能人才 — investor deck navigation
 * Scroll-snap slides + keyboard/arrow nav, progress, counter, per-slide reveal,
 * one traction chart (from SITE_CONFIG), print, mailto CTAs. Reduced-motion safe.
 * ========================================================================== */
(function () {
  "use strict";
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const deck = $("#deck");
  const slides = $$(".deck-slide");
  const total = slides.length;
  const progress = $("#deck-progress");
  const count = $("#deck-count");
  const prev = $("#prev"), next = $("#next");
  let current = 0;

  function go(i) {
    current = Math.max(0, Math.min(total - 1, i));
    slides[current].scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
  }

  // track active slide + progress on scroll
  function onScroll() {
    const max = deck.scrollHeight - deck.clientHeight;
    progress.style.width = (max > 0 ? (deck.scrollTop / max) * 100 : 0) + "%";
    const idx = Math.round(deck.scrollTop / deck.clientHeight);
    if (idx !== current) current = Math.max(0, Math.min(total - 1, idx));
    count.textContent = (current + 1) + " / " + total;
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
  }
  deck.addEventListener("scroll", onScroll, { passive: true });

  prev.addEventListener("click", () => go(current - 1));
  next.addEventListener("click", () => go(current + 1));

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case "ArrowDown": case "ArrowRight": case "PageDown": case " ":
        e.preventDefault(); go(current + 1); break;
      case "ArrowUp": case "ArrowLeft": case "PageUp":
        e.preventDefault(); go(current - 1); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(total - 1); break;
    }
  });

  // reveal each slide as it enters
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("seen"); });
  }, { threshold: 0.35 });
  slides.forEach((s) => io.observe(s));
  slides[0].classList.add("seen");

  // print / pdf
  $("#btn-print").addEventListener("click", () => window.print());

  // mailto CTAs (no backend / no PII)
  const CFG = window.SITE_CONFIG || {};
  const email = (CFG.brand && CFG.brand.contactEmail) || "hello@talent-ai.tw";
  const brand = (CFG.brand && CFG.brand.name) || "Talent AI";
  const d = $("#cta-deck"), p = $("#cta-pilot");
  if (d) d.href = "mailto:" + email + "?subject=" + encodeURIComponent("Request the deck — " + brand);
  if (p) p.href = "mailto:" + email + "?subject=" + encodeURIComponent("Book a pilot — " + brand);

  // traction chart (cumulative leads: measured solid + forecast dashed)
  function buildChart() {
    const el = $("#deck-chart");
    if (!el || !window.Chart || !CFG.tractionChart) return;
    const tc = CFG.tractionChart, last = tc.lastMeasuredIndex;
    const labels = tc.weeks.map((w, i) => [w, tc.weekLabels[i]]);
    const solid = tc.cumulativeLeads.map((v, i) => (i <= last ? v : null));
    const dash = tc.cumulativeLeads.map((v, i) => (i >= last ? v : null));
    Chart.defaults.color = "#3E4A52";
    Chart.defaults.font.family = "'IBM Plex Mono', monospace";
    Chart.defaults.font.size = 10;
    const axis = { grid: { color: "rgba(23,36,46,0.07)" }, ticks: { color: "#586168" } };
    new Chart(el, {
      type: "line",
      data: { labels, datasets: [
        { label: "Measured", data: solid, borderColor: "#C0392B", backgroundColor: "rgba(192,57,43,0.08)", fill: true, tension: .32, pointRadius: 3, pointBackgroundColor: "#C0392B" },
        { label: "Forecast", data: dash, borderColor: "#8A6A35", borderDash: [6, 5], fill: false, tension: .32, pointRadius: 2, pointBackgroundColor: "#8A6A35" },
      ] },
      options: {
        animation: RM ? false : { duration: 800 },
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: axis, y: { ...axis, beginAtZero: true } },
      },
    });
  }

  document.addEventListener("DOMContentLoaded", () => { onScroll(); buildChart(); });
})();
