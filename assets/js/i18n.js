/* =============================================================================
 * QuanJin AI / 全謹智能 — bilingual string map
 * -----------------------------------------------------------------------------
 * I18N[lang][key]. zh-TW is primary/default; en is the toggle.
 * No Markdown in values (plain text only). Numbers live in content.js; this
 * file holds the words around them.
 *
 * Convention for list items referenced from content.js by a base key:
 *   <base>.t  title/label      <base>.b  body
 *   <base>.d  detail/desc      <base>.o  outcome
 * ========================================================================== */

const I18N = {
  zh: {
    /* ---- chrome / UI ---- */
    "ui.lang": "EN",
    "ui.cta_deck": "索取簡報",
    "ui.cta_case": "看實例 ↓",
    "ui.cta_pilot": "預約試點洽談",
    "ui.illustrative": "示意數字",
    "ui.measured": "實測",
    "ui.forecast": "預測",
    "ui.asof": "資料截至",
    "ui.scroll": "向下探索",

    "nav.shift": "現況", "nav.system": "系統", "nav.case": "實例",
    "nav.traction": "進展", "nav.moats": "護城河", "nav.security": "安全",
    "nav.roadmap": "藍圖", "nav.ask": "願景",

    "brand.tagline": "讓專業，不再因時間而流失",

    /* ---- hero ---- */
    "hero.eyebrow": "AI 原生・專業服務",
    "hero.h1": "專業服務，為 AI 時代重新打造",
    "hero.sub": "一套合規把關、全天候的智能營運層，嵌入執照型專業事務所的真實客戶通路——已在真實事務所上線實證，不漏接、不亂報、不出錯。",

    "m.leads": "接住並完成初步問診的進線",
    "m.safe": "對外訊息送出，0 則不安全",
    "m.afterhours": "新客戶於辦公時間外首次來訊",
    "m.escalated": "高價值案件附完整脈絡轉真人",

    /* ---- the shift ---- */
    "shift.eyebrow": "現況",
    "shift.h": "客戶在辦公時間以外傳訊息，等不到回音，就轉向下一家",
    "shift.sub": "專業服務正處於轉折點：文件繁瑣、回覆慢、受限上班時間、人力成本攀升。",
    "shift.pain1.t": "文件繁瑣", "shift.pain1.b": "問卷、歸檔、優先序判斷，吃掉專業人員的時間",
    "shift.pain2.t": "回覆慢半拍", "shift.pain2.b": "客戶焦慮時詢問，等到人工回覆往往已失去信任",
    "shift.pain3.t": "受限上班時間", "shift.pain3.b": "近三成新客戶在辦公時間外首次聯繫",
    "shift.pain4.t": "人力成本攀升", "shift.pain4.b": "小型事務所養不起輪班行政，卻得面對全天候期待",

    /* ---- the system ---- */
    "system.eyebrow": "系統架構",
    "system.h": "從接案到結案，智能與專業人員協同運作",
    "system.loop": "所有案件由持牌地政士全程把關；AI 負責接觸、分類與資料整備，專業人員負責判斷與結案。",
    "wf.intake.t": "對話式接案", "wf.intake.d": "新客戶來訊即分類，比對案件類型（handle_menu_pick）",
    "wf.form.t": "問卷自動草擬", "wf.form.d": "鎖定案型後，發送該服務的完整問卷，逐輪補齊缺漏",
    "wf.guard.t": "防護回覆", "wf.guard.d": "通過 L0–L4 反幻覺驗證才送出，逐則記錄 PASS／BLOCK",
    "wf.crm.t": "客戶資料寫入", "wf.crm.d": "背景寫入 Airtable CRM，累積式擷取案件脈絡",
    "wf.human.t": "持牌專業人員接手", "wf.human.d": "高價值案件自動轉人工接管，由地政士審核與申辦",

    /* ---- case study ---- */
    "case.eyebrow": "旗艦實例",
    "case.h": "全謹代書：從靜默的下班頻道，到 24 小時接案",
    "case.narr": "全謹地政士事務所於 2026 年 5 月導入 Talent AI 智能代理系統。上線以來，系統累計接住並完成初步問診的進線達 1,080 件、自動建立逾千筆 CRM 紀錄，無需額外行政人力。近三成新客戶在辦公時間外首次聯繫——這條過去石沉大海的頻道，如今每一通都在數秒內被接住、分類，並即時通知負責地政士。",
    "case.oversight": "每一則對外回覆皆通過反幻覺安全驗證；系統已於送出前攔截 7 則潛在不實陳述，確保事務所執照從未承擔未經核實的費用或法律主張。所有案件最終由持牌地政士審核並親自辦理。",
    "case.disclaimer": "收益轉換數據尚在追蹤中；以上為實測運營數據，非預測收入。本系統目前為前營收階段，ROI 以「損益兩平＋觸及＋把關」呈現，而非已成交金額。",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "新客戶於辦公時間外首次來訊", "kpi.afterhours.note": "641 位非員工客戶中 195 位，平日 09:00–18:00 之外【實測】",
    "kpi.safety.t": "對外訊息安全檢查：通過／送出前攔截", "kpi.safety.note": "L0–L4 五層驗證；7 則於送達客戶前攔截【實測】",
    "kpi.leads.t": "完整處理的進線（接待→分流→建檔）", "kpi.leads.note": "impact_rollup 進線總數【實測】",
    "kpi.escalated.t": "高價值案件附完整脈絡交給真人", "kpi.escalated.note": "稽核去重（69 自動＋46 人工−2 重疊）【實測】",
    "kpi.breakeven.t": "損益兩平：每月需救回的案件數", "kpi.breakeven.note": "NT$4,000 運行成本 ÷ NT$20,000 錨定案 ≈ 每 5 個月一件【估算】",
    "kpi.latency.t": "從來訊到送出完整問卷（約）", "kpi.latency.note": "示意：人工確認之操作常數，尚無量測基準",

    /* ---- traction ---- */
    "traction.eyebrow": "進展",
    "traction.h": "從零到實證，上線數週的曲線在案",
    "traction.sub": "實線為實測；虛線為依現行速率外推之預測，已明確標示。",
    "traction.c1": "每週客戶訊息量",
    "traction.c2": "累計進線（合格客戶）",
    "traction.c3": "累計高優先轉人工件數",
    "traction.footnote": "僅 W5 端點（進線 1,080／轉人工 113／訊息累計約 9,790）與每週訊息量為點對點實測；W1–W4 累計進線為內插估算，W6–W7 為預測，以虛線呈現。",

    /* ---- moats ---- */
    "moats.eyebrow": "競爭壁壘",
    "moats.h": "不是通用 AI，是從實戰失誤淬煉的合規護城河",
    "moats.intro": "每一道防護層背後都有一個真實的事故紀錄。這套系統付過的學費，下一家事務所不必再付一次。",
    "moat.compliance.t": "合規即程式碼",
    "moat.compliance.b": "約 79 條源於真實事故的防護規則，讓代理能安全地對著執照型專業的客戶頻道——一次虛報費用或法律主張就可能危及執照。",
    "moat.audit.t": "可稽核的安全，不是口號",
    "moat.audit.b": "每則對外訊息通過 L0–L4 五層驗證並記錄 PASS／BLOCK：911 則通過、7 則於送達前攔截。安全是可查紀錄，不是行銷話術。",
    "moat.domainkb.t": "領域知識庫即唯一真相",
    "moat.domainkb.b": "11 大業務的費用、文件、流程、問卷構成代理唯一的答案來源；它只依事務所的真實規則作答，不外推通用法律知識。",
    "moat.humanloop.t": "結構性的人機協作",
    "moat.humanloop.b": "高價值案件一旦合格即自動轉人工接管，把備妥脈絡的案件交給負責人——AI 接案，持牌專業人員判斷與結案。",
    "moat.flywheel.t": "會複利的資料飛輪",
    "moat.flywheel.b": "每段對話寫入結構化案件資料、每次事故寫入新防護、每次升級訓練分流層——處理過的每一件進線都讓系統更安全、更準。",
    "moat.localization.t": "在地深耕的先行者",
    "moat.localization.b": "整套系統為台灣中小企業真正使用的頻道與規則而生——LINE OA、繁中、個資法與業別法界線、轉介／公會通路——通用全球工具難以快速補齊的在地深度。",

    /* ---- security ---- */
    "security.eyebrow": "安全與合規",
    "security.h": "執照在你手上，風險由系統把關",
    "security.framing": "每則對外訊息在送出前皆通過五道驗證：不虛報費用、不承諾時間、不偽造法律效果；任何可疑指令（含提示注入）皆靜默記錄並阻擋。",
    "security.flow": "資料流向（依實際架構繪製）",
    "security.residency": "資料區域：Azure 韓國中部（亞洲區域），非台灣機房——據實標示。",
    "sec.n.client.t": "LINE 使用者（客戶）",
    "sec.n.line.t": "LINE 官方帳號／訊息 API",
    "sec.n.ngrok.t": "Webhook 入口（ngrok 固定網域・TLS）",
    "sec.n.vm.t": "Azure 虛擬機・韓國中部",
    "sec.n.claude.t": "Claude 智能代理（Anthropic）",
    "sec.n.crm.t": "客戶資料庫（Airtable）",
    "sec.n.audit.t": "本機稽核軌跡（.jsonl）",
    "sec.b.tls.t": "傳輸加密 TLS",
    "sec.b.rbac.t": "四級角色權限控管",
    "sec.b.audit.t": "全程稽核紀錄",
    "sec.b.boot.t": "Secure Boot＋vTPM",
    "sec.b.residency.t": "資料區域：亞洲・韓國中部",
    "sec.b.rest.t": "靜態加密（平台預設）",
    "sec.b.notrain.t": "客戶資料不用於訓練（Anthropic 政策）",
    "sec.b.pdpa.t": "個資法對齊架構",

    /* ---- ecosystem ---- */
    "ecosystem.eyebrow": "生態系與夥伴",
    "ecosystem.h": "建立在成熟可靠的基礎設施上",
    "ecosystem.note": "旗艦客戶 全謹地政士事務所 為系統實證現場；平台建構於 Anthropic Claude、Microsoft Azure、LINE 官方帳號、ngrok 與 Airtable。各商標屬其所有，此處表示「整合於／建構於」，非背書。",
    "ptr.quanjin.t": "全謹地政士事務所",
    "ptr.anthropic.t": "Claude AI",
    "ptr.azure.t": "Azure 雲端",
    "ptr.line.t": "LINE 官方帳號",
    "ptr.ngrok.t": "ngrok",
    "ptr.airtable.t": "Airtable",
    "ecosystem.flagship": "旗艦客戶",
    "ecosystem.tech": "技術夥伴",

    /* ---- roadmap ---- */
    "roadmap.eyebrow": "發展藍圖",
    "roadmap.h": "從一家事務所的實證，到整個執照型市場的基礎建設",
    "rm.p1.t": "第一階段・實證", "rm.p1.o": "全謹代書已上線；數週實測在案，五層安全驗證架構確立。",
    "rm.p2.t": "第二階段・產品化", "rm.p2.o": "可移植導入套件，第二家事務所兩週內上線，取得首個付費試點。",
    "rm.p3.t": "第三階段・鄰近垂直", "rm.p3.o": "擴展至行政書士、移民代辦、信託規劃等授權制度相近的服務。",
    "rm.p4.t": "第四階段・區域化", "rm.p4.o": "進入日本（司法書士）與東南亞授權型法律服務市場。",
    "rm.p5.t": "第五階段・平台", "rm.p5.o": "成為執照型事務所共用的 AI 基礎建設層：合規模板、案件分析、跨所知識共享。",

    /* ---- the ask ---- */
    "ask.eyebrow": "我們的願景",
    "ask.h": "讓每一位持牌專業人員，都有一支 24 小時不打烊的智能接案團隊",
    "ask.vision": "把一套經實戰驗證、合規把關的智能營運層，標準化嵌入任何執照型中小企業的真實客戶通路——靠交付工具複製，而非靠顧問人力。",
    "ask.vc": "台灣約有 5,000 至 6,500 間地政士事務所，可服務區段約 1,200 至 1,900 間。我們已有上線實證資產，現尋求資金以完成第二家付費試點，並打造可規模化的導入套件。",
    "ask.owner": "若您是事務所負責人，我們提供付費試點：兩週內為您的 LINE 官方帳號導入智能接案，先看數據，再決定是否繼續。",
    "ask.markethdr": "市場規模（由下而上估算）",
    "ask.usehdr": "資金用途（示意配置）",
    "ask.round.t": "募資金額・尚未設定",
    "fund.kit.t": "產品化導入套件＋防護編譯器",
    "fund.channel.t": "通路經營（公會／設計夥伴・第 2…N 家）",
    "fund.platform.t": "可靠性／合規平台強化（L0–L4・稽核・守護程式）",
    "fund.gtm.t": "創始 GTM 與營運人力（緩解單人創辦注意力瓶頸）",
    "mkt.som.t": "灘頭堡・現可觸及的台灣代書事務所",
    "mkt.som.d": "100 家 × 月費 NT$12k＋導入 NT$80k ≈ NT$14.4M ARR。足以養活公司，尚非創投規模。",
    "mkt.sam.t": "可服務・有實質 LINE 進線且承辦繼承／不動產的事務所",
    "mkt.sam.d": "約 1,200–1,900 家（占 5,000–6,500 家的 20–30%）× 月費 NT$12k，滿覆蓋約 NT$170–270M ARR。",
    "mkt.tam.t": "全台執照型專業服務（代書＋記帳士＋保險＋仲介＋長照…）",
    "mkt.tam.d": "同一套整合方法延伸至相鄰執照型業別。數量級估計，每一業別需各自由下而上驗證後方可宣稱。",

    /* ---- footer ---- */
    "footer.disclaimer": "本頁數據除標示「預測」者外，均取自全謹代書實測紀錄（資料截至 2026-06-19）。標示「示意數字」者為估算或假設，待經稽核資料替換。系統目前為前營收階段，收益尚未成交；ROI 以損益兩平、觸及與把關呈現，不構成財務預測或投資承諾。",
    "footer.tagline": "智能人才 — 讓專業，不再因時間而流失",
    "footer.brand": "© 2026 智能人才 Talent AI",
  },

  en: {
    /* ---- chrome / UI ---- */
    "ui.lang": "中",
    "ui.cta_deck": "Request the Deck",
    "ui.cta_case": "See the Case Study ↓",
    "ui.cta_pilot": "Book a Pilot",
    "ui.illustrative": "Illustrative",
    "ui.measured": "Measured",
    "ui.forecast": "Forecast",
    "ui.asof": "As of",
    "ui.scroll": "Scroll to explore",

    "nav.shift": "The Shift", "nav.system": "System", "nav.case": "Case Study",
    "nav.traction": "Traction", "nav.moats": "Moats", "nav.security": "Security",
    "nav.roadmap": "Roadmap", "nav.ask": "Vision",

    "brand.tagline": "Professional practice — any hour, no lead lost",

    /* ---- hero ---- */
    "hero.eyebrow": "AI-native professional services",
    "hero.h1": "Professional services, re-engineered for the AI era.",
    "hero.sub": "A compliance-guarded, always-on agentic operations layer — embedded in the real client channel of licensed professional firms, and already proven live in production.",

    "m.leads": "Leads captured & qualified, 24/7",
    "m.safe": "Client messages sent — 0 unsafe",
    "m.afterhours": "New clients first contacting after-hours",
    "m.escalated": "Cases escalated to a human, in context",

    /* ---- the shift ---- */
    "shift.eyebrow": "The Shift",
    "shift.h": "Clients message after hours, hear silence, and leave for the next firm",
    "shift.sub": "Professional services are at an inflection point: document-heavy, slow to respond, office-hours-bound, and rising in labour cost.",
    "shift.pain1.t": "Document-heavy", "shift.pain1.b": "Questionnaires, filing and triage eat the hours a professional should bill",
    "shift.pain2.t": "Slow turnaround", "shift.pain2.b": "A worried client who waits until morning is already calling the next firm",
    "shift.pain3.t": "Office-hours bound", "shift.pain3.b": "Nearly a third of new clients first make contact outside business hours",
    "shift.pain4.t": "Rising labour cost", "shift.pain4.b": "A 1–3 person firm can't staff round-the-clock intake, yet clients expect it",

    /* ---- the system ---- */
    "system.eyebrow": "The System",
    "system.h": "From first contact to signed engagement — intelligent intake, human close",
    "system.loop": "Every case is owned by a licensed 地政士. The AI handles intake, classification and documentation — the professional makes every judgment call and closes every case.",
    "wf.intake.t": "Conversational intake", "wf.intake.d": "New message is classified and case-type matched (handle_menu_pick)",
    "wf.form.t": "Questionnaire drafting", "wf.form.d": "On case-type lock, the full service questionnaire is pushed, gaps chased per turn",
    "wf.guard.t": "Guarded reply", "wf.guard.d": "Sent only after L0–L4 anti-hallucination checks pass; every PASS/BLOCK logged",
    "wf.crm.t": "CRM capture", "wf.crm.d": "Detached write to Airtable CRM with cumulative case extraction",
    "wf.human.t": "Licensed professional takes over", "wf.human.d": "High-value cases auto-hand-off to the 地政士 for review and filing",

    /* ---- case study ---- */
    "case.eyebrow": "Flagship Deployment",
    "case.h": "全謹代書: from a silent after-hours channel to 24/7 qualified intake",
    "case.narr": "全謹地政士事務所 deployed the Talent AI agent in May 2026. Since launch it has captured and qualified 1,080 leads and built over a thousand CRM records automatically — with zero added administrative staff. Nearly a third of new clients first make contact outside business hours; that previously-silent channel is now received, classified and escalated to the responsible licensee within seconds.",
    "case.oversight": "Every outbound reply passes a multi-layer anti-hallucination validator; 7 replies were blocked before delivery to protect the firm's licence from unverified fee or legal claims. Every case is ultimately reviewed and closed by a licensed 地政士.",
    "case.disclaimer": "Revenue conversion is still being instrumented; figures above are operational measurements, not income projections. The system is pre-revenue — ROI is shown as break-even + reach + safety, never as booked revenue.",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "New clients first contacting outside office hours", "kpi.afterhours.note": "195 of 641 non-staff clients, outside Mon–Fri 09:00–18:00 【measured】",
    "kpi.safety.t": "Outbound safety: passed / blocked before send", "kpi.safety.note": "L0–L4 validators; 7 blocked before reaching a client 【measured】",
    "kpi.leads.t": "Leads handled end-to-end (intake → triage → CRM)", "kpi.leads.note": "impact_rollup lead total 【measured】",
    "kpi.escalated.t": "High-value cases handed to a human, with context", "kpi.escalated.note": "audit-deduped (69 auto + 46 manual − 2 overlap) 【measured】",
    "kpi.breakeven.t": "Break-even: cases per month to pay for itself", "kpi.breakeven.note": "NT$4,000 run cost ÷ NT$20,000 anchor case ≈ one case every 5 months 【estimate】",
    "kpi.latency.t": "Client message → full questionnaire pushed", "kpi.latency.note": "Illustrative: human-confirmed operating constant, not yet instrumented",

    /* ---- traction ---- */
    "traction.eyebrow": "Traction",
    "traction.h": "From zero to live proof — the curve is on record",
    "traction.sub": "Solid lines are measured; dashed lines are run-rate forecast, clearly flagged.",
    "traction.c1": "Client messages per week",
    "traction.c2": "Cumulative leads (qualified clients)",
    "traction.c3": "Cumulative high-priority hand-offs",
    "traction.footnote": "Only the W5 endpoints (1,080 leads / 113 escalations / ~9,790 messages) and the weekly message bars are point-exact measured; W1–W4 cumulative leads are interpolated estimates and W6–W7 are forecast, shown dashed.",

    /* ---- moats ---- */
    "moats.eyebrow": "Competitive Moats",
    "moats.h": "Not a generic AI — a compliance moat forged from real incidents",
    "moats.intro": "Every guardrail traces back to a real production incident. The tuition is already paid; the next firm inherits it.",
    "moat.compliance.t": "Compliance encoded as code",
    "moat.compliance.b": "Roughly 79 incident-derived guardrails — each a real production burn turned into an enforced rule — make the agent safe to point at a licensed profession's client channel, where one fabricated fee can cost the licence.",
    "moat.audit.t": "Auditable safety, not a promise",
    "moat.audit.b": "Every outbound passes a five-layer L0–L4 validator and is logged PASS/BLOCK — 911 passed, 7 blocked before reaching a client — so safety is a reviewable record, not a claim.",
    "moat.domainkb.t": "Domain knowledge base as source of truth",
    "moat.domainkb.b": "An 11-business curated knowledge base (fees, documents, steps, questionnaires) is the agent's only source of truth, so it answers from the firm's real rules instead of hallucinating.",
    "moat.humanloop.t": "Human-in-the-loop by construction",
    "moat.humanloop.b": "High-value cases auto-flip to human takeover the instant they qualify, handing a pre-documented case to the responsible person — AI does intake, the licensed professional does judgment and the close.",
    "moat.flywheel.t": "A data flywheel that compounds",
    "moat.flywheel.b": "Every conversation writes structured case data, every incident writes a new guardrail, every escalation teaches the triage layer — the system sharpens with each of 1,080 leads handled.",
    "moat.localization.t": "First-mover, deeply localized",
    "moat.localization.b": "The whole stack is built for the channel and rules Taiwan SMBs actually use — LINE OA, Traditional Chinese, 個資法 and sector-law boundaries, the referral/association motion — a depth a generic global tool can't retrofit quickly.",

    /* ---- security ---- */
    "security.eyebrow": "Security & Compliance",
    "security.h": "Your licence stays protected — the system holds the line",
    "security.framing": "Every outbound message clears five validation gates before delivery — no fabricated fees, no scheduling commitments, no invented legal outcomes. Suspicious injection attempts are logged silently and blocked.",
    "security.flow": "Data flow (drawn to the real architecture)",
    "security.residency": "Data region: Azure Korea Central (Asia) — not a Taiwan datacenter. Labelled accurately.",
    "sec.n.client.t": "LINE user (end client)",
    "sec.n.line.t": "LINE OA / Messaging API",
    "sec.n.ngrok.t": "Webhook ingress (ngrok reserved domain · TLS)",
    "sec.n.vm.t": "Azure VM · Korea Central",
    "sec.n.claude.t": "Claude agent (Anthropic)",
    "sec.n.crm.t": "CRM store (Airtable)",
    "sec.n.audit.t": "Local audit trail (.jsonl)",
    "sec.b.tls.t": "Encryption in transit (TLS)",
    "sec.b.rbac.t": "RBAC — 4-role model",
    "sec.b.audit.t": "Full audit logging",
    "sec.b.boot.t": "Secure Boot + vTPM",
    "sec.b.residency.t": "Data region: Asia / Korea Central",
    "sec.b.rest.t": "At-rest encryption (platform default)",
    "sec.b.notrain.t": "Customer data not used for training (Anthropic policy)",
    "sec.b.pdpa.t": "PDPA / 個資法-aligned architecture",

    /* ---- ecosystem ---- */
    "ecosystem.eyebrow": "Ecosystem & Partners",
    "ecosystem.h": "Built on mature, reliable infrastructure",
    "ecosystem.note": "全謹代書 is the live deployment; the platform is built on Anthropic Claude, Microsoft Azure, LINE Official Account, ngrok and Airtable. Marks belong to their owners; shown as 'built on / integrates with', not endorsement.",
    "ptr.quanjin.t": "全謹 Land-Admin Office",
    "ptr.anthropic.t": "Claude AI",
    "ptr.azure.t": "Azure Cloud",
    "ptr.line.t": "LINE OA",
    "ptr.ngrok.t": "ngrok",
    "ptr.airtable.t": "Airtable",
    "ecosystem.flagship": "Flagship deployment",
    "ecosystem.tech": "Built on",

    /* ---- roadmap ---- */
    "roadmap.eyebrow": "Roadmap",
    "roadmap.h": "From one firm's proof to infrastructure for every licensed practice",
    "rm.p1.t": "Phase 1 — Proof", "rm.p1.o": "Live at 全謹代書 — weeks of measured data, five-layer compliance stack proven in production.",
    "rm.p2.t": "Phase 2 — Productize", "rm.p2.o": "Portable onboarding kit — a second firm goes live within two weeks; first paid pilot signed.",
    "rm.p3.t": "Phase 3 — Adjacent verticals", "rm.p3.o": "Expand into analogous licence-gated verticals — immigration agents, trust planning, administrative services.",
    "rm.p4.t": "Phase 4 — Regional", "rm.p4.o": "Enter Japan (司法書士) and SE-Asian licensed legal-service markets, led by the Taiwan proof asset.",
    "rm.p5.t": "Phase 5 — Platform", "rm.p5.o": "Become the shared AI infrastructure layer for licensed practices — compliance templates, case analytics, cross-firm knowledge.",

    /* ---- the ask ---- */
    "ask.eyebrow": "The Ask & Vision",
    "ask.h": "Give every licensed professional a 24/7 intake team that never misquotes, never forgets, never sleeps",
    "ask.vision": "One production-grade playbook to embed a compliance-guarded agentic operations layer into any license-gated SMB's real customer channel — ported by kit, not by consultants.",
    "ask.vc": "Taiwan alone has an estimated 5,000–6,500 notary offices, with a serviceable segment of 1,200–1,900. We have a live proof deployment and are raising to close a second paid pilot and build the portable onboarding kit that turns a deployment into a product.",
    "ask.owner": "If you run a licensed practice, we offer a structured paid pilot — your LINE OA, your clients, your data, live within two weeks. You see the numbers before you commit.",
    "ask.markethdr": "Market sizing (bottoms-up)",
    "ask.usehdr": "Use of funds (illustrative)",
    "ask.round.t": "Round size — not set",
    "fund.kit.t": "Productize the onboarding kit + guardrail compiler",
    "fund.channel.t": "Channel motion (association / design partners, firm #2…N)",
    "fund.platform.t": "Reliability & compliance hardening (L0–L4, audit, canaries)",
    "fund.gtm.t": "Founding GTM + ops hire (relieve solo-founder constraint)",
    "mkt.som.t": "Beachhead — Taiwan 代書 firms reachable now",
    "mkt.som.d": "100 firms × NT$12k/mo + NT$80k setup ≈ NT$14.4M ARR. Funds the company; not yet venture scale.",
    "mkt.sam.t": "Serviceable — offices with real LINE inbound + inheritance/property mix",
    "mkt.sam.d": "~1,200–1,900 offices (20–30% of 5,000–6,500) × NT$12k/mo ≈ NT$170–270M ARR at full penetration.",
    "mkt.tam.t": "All Taiwan license-gated services (代書 + accountants + insurance + brokers + care…)",
    "mkt.tam.d": "Same integration method across adjacent license-gated verticals. Order-of-magnitude only; each vertical needs its own bottoms-up before it is claimed.",

    /* ---- footer ---- */
    "footer.disclaimer": "Figures are from the 全謹代書 live deployment (as of 2026-06-19) unless marked Forecast. Items marked Illustrative are estimates or assumptions pending verified data. The system is pre-revenue; no deals are booked. ROI is shown as break-even, reach and safety, and does not constitute a financial projection or investment commitment.",
    "footer.tagline": "Talent AI — professional practice, any hour, no lead lost",
    "footer.brand": "© 2026 Talent AI 智能人才",
  },
};

window.I18N = I18N;
