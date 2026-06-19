# Praxis AI 執業智能 — Investor & Buyer Pitch Site

A single-page, statically-hosted bilingual (繁中 / EN) pitch site positioning an
AI-agent integration company for licensed professional-service firms. Its flagship
proof asset is the **live 全謹代書 LINE agent**.

Vanilla HTML/CSS/JS — **no build step, no framework, CDN libraries only.** Designed to
ship as a **GitHub Pages project page** served from a sub-path.

---

## Run locally

```bash
# from the repo root
python3 -m http.server 8080
# open http://localhost:8080/
```

To reproduce the GitHub-Pages **sub-path** exactly (recommended before deploy):

```bash
mkdir -p /tmp/ghtest/quanjin-ai-pitch
cp -r ./* /tmp/ghtest/quanjin-ai-pitch/
cd /tmp/ghtest && python3 -m http.server 8099
# open http://localhost:8099/quanjin-ai-pitch/  ← every asset must load (no 404s)
```

All asset references are **relative** (`./assets/...`, `#anchors`), so the page works
identically at `/` and at `/<repo>/`. Keep it that way — a leading-slash path is a defect.

---

## Deploy (GitHub Pages project page)

The site lives at `https://<username>.github.io/<repo>/` (a project page, because the
root user-page is taken).

1. Create a repo, e.g. **`quanjin-ai-pitch`**, and push these files to `main` at the root.
   `.nojekyll` is included so Pages serves `assets/` untouched.
2. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`.**
3. Live at `https://<username>.github.io/<repo>/`. Verify every relative link resolves
   at that sub-path (run the `/tmp/ghtest` check above first).
4. **Optional custom domain:** add a `CNAME` file containing the domain, point a DNS
   `CNAME` → `<username>.github.io`, enable “Enforce HTTPS”. Good TLDs: `.ai`, `.dev`, `.app`.

No backend, no analytics, no PII collection. The contact CTAs open the visitor's mail
client (`mailto:`) — nothing is POSTed anywhere.

---

## Edit your numbers (single source of truth)

**All copy, metrics, partners and roadmap live in two files. Never edit markup to change a number.**

| File | What it holds |
|---|---|
| `assets/js/content.js` | `SITE_CONFIG` — every metric, chart series, market-sizing tier, moat, partner, roadmap phase, and the `demoData` honesty flag. |
| `assets/js/i18n.js` | `I18N.zh` / `I18N.en` — every visible string in both languages. |

### Honesty model (important — built to survive diligence)

- Each metric carries `verified: true | false`.
  - `true`  → measured from production (實測). Renders clean.
  - `false` → estimate/assumption (估算/假設). Renders with a visible **“示意 / Illustrative”** chip while `demoData === true`.
- The footer disclaimer renders while `demoData === true`. Set `demoData: false` once every
  figure is verified to drop the chips and the disclaimer.
- **The system is pre-revenue (deals closed = 0).** ROI is presented as break-even + reach +
  safety, never as booked revenue. Do not add a revenue-won figure.

### Where the live numbers come from (flagship 全謹代書)

These were audited from the production system (`scripts/impact_rollup.py` + the runtime
logs) as of the date in `SITE_CONFIG.asOf`. To refresh:

- Leads / funnel (進線 / 合格 / 升級 / 成交): `python3 scripts/impact_rollup.py`
- Outbound safety (PASS / BLOCK): `jq -r .verdict logs/outbound_audit.jsonl | sort | uniq -c`
- After-hours first-contact %: first inbound per `history/U*.log`, UTC→TPE+8, outside Mon–Fri 09:00–18:00
- LINE push quota %: latest line of `logs/line_quota_canary.log`

Update the matching values in `SITE_CONFIG`, bump `SITE_CONFIG.asOf`, and flip any newly
verified metric's `verified` flag.

---

## File tree

```
.
├─ index.html              single page; sections as <section id="…">
├─ .nojekyll               Pages serves assets/ as-is
├─ README.md
├─ assets/
│  ├─ css/styles.css       design tokens (CSS vars) + glass components + reduced-motion
│  ├─ js/content.js        SITE_CONFIG (all data + demoData flag)
│  ├─ js/i18n.js           zh-TW (default) / en strings
│  ├─ js/main.js           hydrate, IntersectionObserver, count-up, Chart.js, language toggle
│  ├─ svg/                 (reserved — diagrams are inline in index.html)
│  └─ img/og.svg           Open-Graph share image
```

> Note on the OG image: `assets/img/og.svg` is referenced for share previews. Some social
> scrapers prefer PNG; export `og.svg` to `og.png` (1200×630) and switch the `og:image`
> meta tag if you need maximum preview compatibility.

---

## Accessibility & motion

- Semantic HTML, keyboard-navigable, visible focus rings.
- All animation (count-ups, chart draw, SVG path draw, hero particle field, packet flow)
  **no-ops under `prefers-reduced-motion: reduce`** — final states render instantly.
- Mobile-first responsive (360 → 1440+).

---

## Credits

Built with Claude Code. Flagship data room: the live 全謹代書 LINE agent.
Brand name **Praxis AI / 執業智能** is a placeholder for the holding company and is
intentionally distinct from the client firm 全謹地政士事務所. (Swap it in one place:
`SITE_CONFIG.brand` in `assets/js/content.js` + the `footer.*` / `hero.*` strings in
`assets/js/i18n.js`. The repo/dir slug `quanjin-ai-pitch` is independent of the brand.)
