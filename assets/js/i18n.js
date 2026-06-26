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
    "nav.traction": "進展", "nav.moats": "為什麼選我們", "nav.security": "安全",
    "nav.roadmap": "藍圖", "nav.pricing": "費用", "nav.contact": "預約",

    "brand.tagline": "讓專業，不再因時間而流失",

    /* ---- hero ---- */
    "hero.eyebrow": "專業事務所的 AI 即戰力",
    "hero.h1": "請不到人，AI 接得住每一位客戶",
    "hero.sub": "不用學、不用改流程，開箱即用。24 小時接待、整理案件、追進度——瑣事全交給 AI，您專心做專業。已在真實事務所上線。",

    "m.leads": "接住並完成初步問診的進線",
    "m.safe": "對外訊息送出，0 則不安全",
    "m.afterhours": "新客戶於辦公時間外首次來訊",
    "m.escalated": "高價值案件附完整脈絡轉真人",

    /* ---- the shift ---- */
    "shift.eyebrow": "現況",
    "shift.h": "人難請、難留，客戶卻不等人",
    "shift.sub": "案量在漲，人請不到，團隊被瑣事拖垮。",
    "shift.pain1.t": "瑣事吃掉人力", "shift.pain1.b": "問卷、歸檔、分類，全在吃掉專業時間。",
    "shift.pain2.t": "慢一步就出局", "shift.pain2.b": "慢一步回覆，客戶就轉身走人。",
    "shift.pain3.t": "下班後沒人接", "shift.pain3.b": "近三成客戶下班後才來，沒人接。",
    "shift.pain4.t": "請不到、留不住人", "shift.pain4.b": "養不起輪班，客戶卻要全天候。",

    /* ---- the system ---- */
    "system.eyebrow": "它怎麼幫您運作",
    "system.h": "從客戶上門到結案，AI 和同仁無縫接力",
    "system.loop": "案子由您的同仁把關。AI 接待、分類、整理；判斷與結案，您說了算。",
    "wf.intake.t": "親切接待", "wf.intake.d": "客戶一傳訊息，就自動聽懂需求、分好類別",
    "wf.form.t": "自動問齊資料", "wf.form.d": "確認案件類型後，把該服務需要的資料，一項一項替您問齊",
    "wf.guard.t": "回覆先把關", "wf.guard.d": "每一句回覆送出前都先安全檢查，絕不亂報價、亂承諾",
    "wf.crm.t": "自動整理案件", "wf.crm.d": "對話自動整理成案件紀錄，來龍去脈您隨時看得到",
    "wf.human.t": "專人親自接手", "wf.human.d": "重要的案件自動轉給您的同仁，由專業人員親自處理",

    /* ---- case study ---- */
    "case.eyebrow": "旗艦實例",
    "case.h": "全謹代書：從靜默的下班頻道，到 24 小時接案",
    "case.narr": "全謹地政士事務所 2026 年 5 月導入。至今已接住並完成初步問診 1,205 件、自動建檔逾千筆，不必多請人。約三成客戶在下班後才來訊——過去石沉大海的頻道，如今每一通都在數秒內被接住、分類，並通知負責地政士。",
    "case.oversight": "每一則對外回覆送出前都先安全把關，已攔下 10 則可能不實的陳述；不讓事務所承擔未經核實的費用或說法。每件案子最終由持牌地政士親自辦理。",
    "case.disclaimer": "收益轉換數據尚在追蹤中；以上為實測運營數據，非預測收入。ROI 以「損益兩平＋觸及＋把關」呈現，而非已成交金額。",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "下班後也接得住的新客戶", "kpi.afterhours.note": "758 位客戶中有 240 位，是在平日 09:00–18:00 以外第一次找上門【實測】",
    "kpi.eval.t": "上線前的品質把關", "kpi.eval.note": "每晚自動檢查回答的品質與分寸，14／14 全數通過【實測】",
    "kpi.crm.t": "對話自動分類整理", "kpi.crm.note": "進線幾乎都自動分好案件類型與優先順序，並自動整理成案件紀錄，完全不用人工輸入【實測】",
    "kpi.safety.t": "對外回覆把關：通過／攔下", "kpi.safety.note": "回覆送出前層層檢查，10 則在送到客戶前就先攔了下來【實測】",
    "kpi.leads.t": "完整接待過的客戶", "kpi.leads.note": "系統實際接待並完成初步處理的客戶總數【實測】",
    "kpi.escalated.t": "附完整紀錄、轉給專人的案件", "kpi.escalated.note": "高價值案件自動轉給專人，對話脈絡一併附上【實測】",
    "kpi.latency.t": "從收到訊息到問卷送出（約）", "kpi.latency.note": "示意：人工確認之操作常數，尚無量測基準",

    /* ---- traction ---- */
    "traction.eyebrow": "進展",
    "traction.h": "從零到實證，上線數週的曲線在案",
    "traction.sub": "實線為實測；虛線為依現行速率外推之預測，已明確標示。",
    "traction.c1": "每週客戶訊息量",
    "traction.c2": "累計進線（合格客戶）",
    "traction.c3": "累計高優先轉人工件數",
    "traction.footnote": "僅 W6 端點（進線 1,205／轉人工 224／訊息累計約 13,800）與每週訊息量為點對點實測；W1–W4 累計進線為內插估算，W7 為預測，以虛線呈現。",

    /* ---- moats ---- */
    "moats.eyebrow": "為什麼放心交給我們",
    "moats.h": "通用 AI 做不到的，它做得到——懂規矩、會把關",
    "moats.intro": "每一道把關，都是真實案例換來的。前面的坑，您不必再踩。",
    "moat.compliance.t": "規矩內建",
    "moat.compliance.b": "近 79 條把關規則寫進系統，亂報費用、亂講法律，先擋下來。",
    "moat.audit.t": "每句話都留紀錄",
    "moat.audit.b": "每則對外訊息，先檢查、留紀錄、隨時可查。",
    "moat.domainkb.t": "只照您的規矩答",
    "moat.domainkb.b": "只依您事務所的費用與流程；不確定就問，絕不亂編。",
    "moat.humanloop.t": "人說了算",
    "moat.humanloop.b": "重要案件直接轉同仁；判斷與結案，永遠是人決定。",
    "moat.staffing.t": "不漏接、不忘記",
    "moat.staffing.b": "案件分給對的人；逾時沒接的，每天提醒兩次。",
    "moat.flywheel.t": "越用越懂您",
    "moat.flywheel.b": "用得越久，越懂您事務所的做事方式。",
    "moat.localization.t": "為台灣而生",
    "moat.localization.b": "LINE、繁中、個資法、公會往來——在地細節，通用工具補不上。",

    /* ---- security ---- */
    "security.eyebrow": "安全與合規",
    "security.h": "執照在你手上，風險由系統把關",
    "security.framing": "每則對外訊息在送出前皆通過五道驗證：不虛報費用、不承諾時間、不偽造法律效果；任何可疑指令（含提示注入）皆靜默記錄並阻擋。",
    "security.flow": "資料流向（依實際架構繪製）",
    "security.residency": "運算部署於隔離的 Azure 虛擬機；對外傳輸全程 TLS 加密，並保留完整稽核軌跡。",
    "sec.n.client.t": "LINE 使用者（客戶）",
    "sec.n.line.t": "LINE 官方帳號／訊息 API",
    "sec.n.ngrok.t": "Webhook 入口（ngrok 固定網域・TLS）",
    "sec.n.vm.t": "Azure 虛擬機（隔離運算）",
    "sec.n.claude.t": "Claude 智能代理（Anthropic）",
    "sec.n.crm.t": "客戶資料庫（Airtable）",
    "sec.n.audit.t": "本機稽核軌跡（.jsonl）",
    "sec.b.tls.t": "傳輸加密 TLS",
    "sec.b.rbac.t": "四級角色權限控管",
    "sec.b.audit.t": "全程稽核紀錄",
    "sec.b.boot.t": "Secure Boot＋vTPM",
    "sec.b.residency.t": "隔離雲端運算（Azure）",
    "sec.b.rest.t": "靜態加密（平台預設）",
    "sec.b.notrain.t": "客戶資料不用於訓練（Anthropic 政策）",
    "sec.b.pdpa.t": "個資法對齊架構",

    /* ---- ecosystem ---- */
    "ecosystem.eyebrow": "生態系與夥伴",
    "ecosystem.h": "建立在成熟可靠的基礎設施上",
    "ecosystem.note": "旗艦客戶 全謹地政士事務所 為系統實證現場；平台整合並建構於 Anthropic Claude、Microsoft Azure、LINE 官方帳號、ngrok 與 Airtable。各品牌商標均屬其各自所有。",
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
    "contact.eyebrow": "預約試點",
    "ask.h": "每一家事務所，都該有一位不打烊的 AI 同仁",
    "ask.vision": "缺前台，開「接客戶」；缺追蹤，開「管案子」。進線不漏接、案件看得到、同仁不會忘。",
    "ask.owner": "人手撐不住了？兩週試點，上您的 LINE，用數據說話。",
    // 市場規模／資金用途／募資：deck-only（已從公開 bundle 移除）

    /* ---- footer ---- */
    "footer.disclaimer": "本頁數據除標示「預測」者外，均取自全謹代書實測紀錄（資料截至 2026-06-26）。標示「示意數字」者為估算或假設，待經稽核資料替換。ROI 以損益兩平、觸及與把關呈現，不構成財務預測或投資承諾。",
    "footer.tagline": "智能人才 — 讓專業，不再因時間而流失",
    "footer.brand": "© 2026 智能人才 Talent AI",
    "pricing.eyebrow": "方案與費用",
    "pricing.h": "選一位全天候的數位受理同仁",
    "pricing.sub": "一位行政同仁月薪 NT$33,000 起，還不含假日、深夜與請假的空窗。三個方案，從單人到全團隊，月費自 NT$8,000 起。",
    "pricing.period": "／月", "pricing.cta": "預約洽談",
    "pricing.foot": "一次性建置費 NT$50,000（含業務知識庫撰寫・OA 接線・首兩週陪跑）；年繳享 8.3 折（送 2 個月）。",
    "pricing.allplans": "三個方案均含：LINE 官方帳號串接・反幻覺安全驗證・自動 CRM 建檔・持牌地政士全程把關。",
    "pricing.starter.name": "基礎 Starter", "pricing.starter.tagline": "24 小時不漏接的前台",
    "pricing.starter.price": "NT$8,000", "pricing.starter.cap": "每月最多 200 筆進線（超量每則 NT$50）", "pricing.starter.seats": "1 席・單人事務所",
    "pricing.starter.f1": "24/7 接案・9 大選單問卷", "pricing.starter.f2": "層層安全把關・不亂報價", "pricing.starter.f3": "轉真人接管・恢復・結案", "pricing.starter.f4": "客戶紀錄自動建檔",
    "pricing.pro.name": "專業 Pro", "pricing.pro.badge": "最受歡迎", "pricing.pro.tagline": "會整理案情、看見 ROI 的助理",
    "pricing.pro.price": "NT$15,000", "pricing.pro.cap": "每月最多 500 筆進線（超量每則 NT$40）", "pricing.pro.seats": "最多 3 席",
    "pricing.pro.f1": "基礎方案全部功能", "pricing.pro.f2": "完整 CRM＋案件洞察＋案情敘事", "pricing.pro.f3": "智能分流・指派負責同仁", "pricing.pro.f4": "成交結果追蹤", "pricing.pro.f5": "每月 ROI 報告＋逾時盯案",
    "pricing.flagship.name": "旗艦 Flagship", "pricing.flagship.tagline": "整個團隊的數位作業層",
    "pricing.flagship.price": "NT$25,000", "pricing.flagship.cap": "每月最多 1,000 筆進線（超量每則 NT$35）", "pricing.flagship.seats": "不限席次",
    "pricing.flagship.f1": "專業方案全部功能", "pricing.flagship.f2": "Plaud 錄音自動轉建案", "pricing.flagship.f3": "自訂業務類別（非 9 大）", "pricing.flagship.f4": "多人團隊委派路由", "pricing.flagship.f5": "優先支援・SLA 4 小時",
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
    "nav.traction": "Traction", "nav.moats": "Why us", "nav.security": "Security",
    "nav.roadmap": "Roadmap", "nav.pricing": "Pricing", "nav.contact": "Contact",

    "brand.tagline": "Professional practice — any hour, no lead lost",

    /* ---- hero ---- */
    "hero.eyebrow": "AI firepower for professional firms",
    "hero.h1": "Can't hire? AI answers every client.",
    "hero.sub": "Nothing to learn, no workflow to change. It receives clients, organises cases and tracks progress 24/7 — the busywork is AI's, the expert work is yours. Live in a real firm.",

    "m.leads": "Leads captured & qualified, 24/7",
    "m.safe": "Client messages sent — 0 unsafe",
    "m.afterhours": "New clients first contacting after-hours",
    "m.escalated": "Cases escalated to a human, in context",

    /* ---- the shift ---- */
    "shift.eyebrow": "The Shift",
    "shift.h": "Can't hire, can't keep staff — and clients won't wait",
    "shift.sub": "Caseloads climb, hiring fails, busywork buries the team.",
    "shift.pain1.t": "Busywork eats your people", "shift.pain1.b": "Forms, filing, sorting — all eating expert hours.",
    "shift.pain2.t": "A step slow, you're out", "shift.pain2.b": "Reply a step late and the client walks.",
    "shift.pain3.t": "No one after hours", "shift.pain3.b": "Nearly a third arrive after hours. No one's there.",
    "shift.pain4.t": "Can't hire or keep staff", "shift.pain4.b": "You can't staff 24/7. Clients expect it anyway.",

    /* ---- the system ---- */
    "system.eyebrow": "How it helps you",
    "system.h": "First message to closed case — AI and your team, one clean handoff",
    "system.loop": "Cases stay with your professionals. AI receives, sorts, organises; the judgment and the close are yours.",
    "wf.intake.t": "A warm welcome", "wf.intake.d": "The moment a client writes in, their need is understood and sorted",
    "wf.form.t": "Gathers the details", "wf.form.d": "Once the case type is clear, it asks for exactly what that service needs, one item at a time",
    "wf.guard.t": "Every reply checked first", "wf.guard.d": "Each reply is safety-checked before it sends — never a wrong fee, never an over-promise",
    "wf.crm.t": "Cases organised for you", "wf.crm.d": "Conversations become tidy case records you can review any time",
    "wf.human.t": "A person takes over", "wf.human.d": "Important cases pass straight to your colleague, handled in person",

    /* ---- case study ---- */
    "case.eyebrow": "Flagship Deployment",
    "case.h": "全謹代書: from a silent after-hours channel to 24/7 qualified intake",
    "case.narr": "全謹地政士事務所 went live in May 2026. Since then it has captured and qualified 1,205 leads and built over a thousand CRM records automatically — no extra staff. About a third of clients first write in after hours; that once-silent channel is now answered, sorted and routed to the right licensee within seconds.",
    "case.oversight": "Every outbound reply is safety-checked before it sends — 10 were blocked before delivery, sparing the firm any unverified fee or legal claim. Every case is ultimately handled by a licensed 地政士.",
    "case.disclaimer": "Revenue conversion is still being instrumented; figures above are operational measurements, not income projections. ROI is shown as break-even + reach + safety, not as booked revenue.",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "New clients reached even after hours", "kpi.afterhours.note": "240 of 758 clients first wrote in outside Mon–Fri 09:00–18:00 【measured】",
    "kpi.eval.t": "Quality checked before going live", "kpi.eval.note": "Nightly checks on answer quality and tone — 14/14 passing 【measured】",
    "kpi.crm.t": "Conversations sorted automatically", "kpi.crm.note": "Almost every lead is auto-sorted by type and priority and turned into a case record — no manual entry 【measured】",
    "kpi.safety.t": "Outbound replies: passed / stopped", "kpi.safety.note": "Every reply checked before it sends; 10 stopped before they reached a client 【measured】",
    "kpi.leads.t": "Clients fully received", "kpi.leads.note": "Total clients the system received and handled through first steps 【measured】",
    "kpi.escalated.t": "Cases passed to a person, with full notes", "kpi.escalated.note": "High-value cases auto-routed to a person, conversation context attached 【measured】",
    "kpi.latency.t": "From message received to questionnaire sent", "kpi.latency.note": "Illustrative: human-confirmed operating constant, not yet instrumented",

    /* ---- traction ---- */
    "traction.eyebrow": "Traction",
    "traction.h": "From zero to live proof — the curve is on record",
    "traction.sub": "Solid lines are measured; dashed lines are run-rate forecast, clearly flagged.",
    "traction.c1": "Client messages per week",
    "traction.c2": "Cumulative leads (qualified clients)",
    "traction.c3": "Cumulative high-priority hand-offs",
    "traction.footnote": "Only the W6 endpoints (1,205 leads / 224 escalations / ~13,800 messages) and the weekly message bars are point-exact measured; W1–W4 cumulative leads are interpolated estimates and W7 is forecast, shown dashed.",

    /* ---- moats ---- */
    "moats.eyebrow": "Why you can trust it",
    "moats.h": "What generic AI can't do, it does — it knows the rules and guards every line",
    "moats.intro": "Every safeguard was earned from a real case. You won't repeat the mistakes.",
    "moat.compliance.t": "The rules are built in",
    "moat.compliance.b": "Nearly 79 guard rules in the system — wrong fees and careless claims get stopped.",
    "moat.audit.t": "Every message on record",
    "moat.audit.b": "Each outbound is checked, logged, reviewable any time.",
    "moat.domainkb.t": "Answers by your rules",
    "moat.domainkb.b": "Only your firm's fees and process; unsure, it asks — never invents.",
    "moat.humanloop.t": "People decide",
    "moat.humanloop.b": "Important cases go to your colleague; judgment and the close stay human.",
    "moat.staffing.t": "Nothing dropped or forgotten",
    "moat.staffing.b": "Routed to the right colleague; overdue cases flagged twice a day.",
    "moat.flywheel.t": "It learns your firm",
    "moat.flywheel.b": "The longer you use it, the better it fits how you work.",
    "moat.localization.t": "Built for Taiwan",
    "moat.localization.b": "LINE, 繁中, 個資法, 公會 ties — local detail a global tool can't match.",

    /* ---- security ---- */
    "security.eyebrow": "Security & Compliance",
    "security.h": "Your licence stays protected — the system holds the line",
    "security.framing": "Every outbound message clears five validation gates before delivery — no fabricated fees, no scheduling commitments, no invented legal outcomes. Suspicious injection attempts are logged silently and blocked.",
    "security.flow": "Data flow (drawn to the real architecture)",
    "security.residency": "Compute runs on an isolated Azure VM — TLS-encrypted in transit end to end, with a full audit trail.",
    "sec.n.client.t": "LINE user (end client)",
    "sec.n.line.t": "LINE OA / Messaging API",
    "sec.n.ngrok.t": "Webhook ingress (ngrok reserved domain · TLS)",
    "sec.n.vm.t": "Azure VM (isolated compute)",
    "sec.n.claude.t": "Claude agent (Anthropic)",
    "sec.n.crm.t": "CRM store (Airtable)",
    "sec.n.audit.t": "Local audit trail (.jsonl)",
    "sec.b.tls.t": "Encryption in transit (TLS)",
    "sec.b.rbac.t": "RBAC — 4-role model",
    "sec.b.audit.t": "Full audit logging",
    "sec.b.boot.t": "Secure Boot + vTPM",
    "sec.b.residency.t": "Isolated cloud compute (Azure)",
    "sec.b.rest.t": "At-rest encryption (platform default)",
    "sec.b.notrain.t": "Customer data not used for training (Anthropic policy)",
    "sec.b.pdpa.t": "PDPA / 個資法-aligned architecture",

    /* ---- ecosystem ---- */
    "ecosystem.eyebrow": "Ecosystem & Partners",
    "ecosystem.h": "Built on mature, reliable infrastructure",
    "ecosystem.note": "全謹代書 is the live deployment; the platform is built on and integrates with Anthropic Claude, Microsoft Azure, LINE Official Account, ngrok and Airtable. All trademarks are the property of their respective owners.",
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
    "contact.eyebrow": "Get started",
    "ask.h": "Every firm deserves a colleague that never clocks out",
    "ask.vision": "Need a front desk? Switch on intake. Need tracking? Switch on cases. Nothing dropped, everything visible, nothing forgotten.",
    "ask.owner": "Team at breaking point? Two-week pilot on your LINE. Let the numbers talk.",
    // market sizing / use-of-funds / the ask: deck-only (removed from public bundle)

    /* ---- footer ---- */
    "footer.disclaimer": "Figures are from the 全謹代書 live deployment (as of 2026-06-26) unless marked Forecast. Items marked Illustrative are estimates or assumptions pending verified data. ROI is shown as break-even, reach and safety, and does not constitute a financial projection or investment commitment.",
    "footer.tagline": "Talent AI — professional practice, any hour, no lead lost",
    "footer.brand": "© 2026 Talent AI 智能人才",
    "pricing.eyebrow": "Plans & Pricing",
    "pricing.h": "Your always-on intake colleague",
    "pricing.sub": "A full-time admin hire runs NT$33,000+/mo and goes offline nights, weekends and holidays. Three plans, from solo practice to full team, from NT$8,000/mo.",
    "pricing.period": "/mo", "pricing.cta": "Book a call",
    "pricing.foot": "One-time onboarding NT$50,000 (knowledge-base authoring, LINE OA wiring, two-week guided launch); pay annually, get 2 months free.",
    "pricing.allplans": "Every plan includes: LINE OA integration · anti-hallucination safety · automatic CRM · licensed 地政士 oversight.",
    "pricing.starter.name": "Starter", "pricing.starter.tagline": "A 24/7 front desk — no lead slips through",
    "pricing.starter.price": "NT$8,000", "pricing.starter.cap": "Up to 200 leads/mo (NT$50 per lead over)", "pricing.starter.seats": "1 seat · solo practice",
    "pricing.starter.f1": "24/7 intake · all 9 service menus", "pricing.starter.f2": "Layered safety checks on every reply", "pricing.starter.f3": "Human handoff · resume · close-case", "pricing.starter.f4": "Auto CRM record",
    "pricing.pro.name": "Pro", "pricing.pro.badge": "Most popular", "pricing.pro.tagline": "Organises the case, shows the ROI",
    "pricing.pro.price": "NT$15,000", "pricing.pro.cap": "Up to 500 leads/mo (NT$40 per lead over)", "pricing.pro.seats": "Up to 3 seats",
    "pricing.pro.f1": "Everything in Starter", "pricing.pro.f2": "Full CRM + case insight + narrative", "pricing.pro.f3": "Smart routing + staff assignment", "pricing.pro.f4": "Deal-outcome tracking", "pricing.pro.f5": "Monthly ROI report + overdue follow-up",
    "pricing.flagship.name": "Flagship", "pricing.flagship.tagline": "The digital ops layer for your whole team",
    "pricing.flagship.price": "NT$25,000", "pricing.flagship.cap": "Up to 1,000 leads/mo (NT$35 per lead over)", "pricing.flagship.seats": "Unlimited seats",
    "pricing.flagship.f1": "Everything in Pro", "pricing.flagship.f2": "Plaud audio → auto case records", "pricing.flagship.f3": "Custom service categories", "pricing.flagship.f4": "Multi-member team routing", "pricing.flagship.f5": "Priority support · 4-hour SLA",
  },
};

window.I18N = I18N;
