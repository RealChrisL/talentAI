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
    "hero.eyebrow": "為台灣專業事務所打造的 AI 智能助手",
    "hero.h1": "人手不足沒關係，AI 智能助手替您把客戶顧好",
    "hero.sub": "您不需要懂科技，也不用改變團隊原本的習慣。AI 智能助手 24 小時替您接待客戶、整理案件、提醒進度，把繁瑣的事都顧好，讓您和同仁專心處理最重要的專業判斷。已在真實事務所穩定上線，不漏接、不亂報，每一句對外回覆都先為您把關。",

    "m.leads": "接住並完成初步問診的進線",
    "m.safe": "對外訊息送出，0 則不安全",
    "m.afterhours": "新客戶於辦公時間外首次來訊",
    "m.escalated": "高價值案件附完整脈絡轉真人",

    /* ---- the shift ---- */
    "shift.eyebrow": "現況",
    "shift.h": "請不到人、留不住人，團隊卻得面對全天候的客戶",
    "shift.sub": "專業服務卡在同一道難題：案量在增加，人卻請不到、留不住，團隊被重複瑣事塞滿。",
    "shift.pain1.t": "重複瑣事吃掉人力", "shift.pain1.b": "問卷、歸檔、分類判斷，把專業人員的時間耗在低價值工作上",
    "shift.pain2.t": "回覆慢半拍", "shift.pain2.b": "客戶焦慮時來問，人手忙不過來，等到回覆往往已失去信任",
    "shift.pain3.t": "下班後沒人值班", "shift.pain3.b": "近三成新客戶在辦公時間外首次聯繫，卻沒有人能接",
    "shift.pain4.t": "請不到、留不住人", "shift.pain4.b": "小型事務所養不起輪班人力，卻得面對客戶全天候的期待",

    /* ---- the system ---- */
    "system.eyebrow": "它怎麼幫您運作",
    "system.h": "從客戶上門到案件完成，AI 和您的同仁一起把關",
    "system.loop": "每一件案子，都由您的專業同仁全程把關；AI 只負責接待、分類、把資料整理好，真正的判斷和結案，始終在您和團隊手上。",
    "wf.intake.t": "親切接待", "wf.intake.d": "客戶一傳訊息，就自動聽懂需求、分好類別",
    "wf.form.t": "自動問齊資料", "wf.form.d": "確認案件類型後，把該服務需要的資料，一項一項替您問齊",
    "wf.guard.t": "回覆先把關", "wf.guard.d": "每一句回覆送出前都先安全檢查，絕不亂報價、亂承諾",
    "wf.crm.t": "自動整理案件", "wf.crm.d": "對話自動整理成案件紀錄，來龍去脈您隨時看得到",
    "wf.human.t": "專人親自接手", "wf.human.d": "重要的案件自動轉給您的同仁，由專業人員親自處理",

    /* ---- case study ---- */
    "case.eyebrow": "旗艦實例",
    "case.h": "全謹代書：從靜默的下班頻道，到 24 小時接案",
    "case.narr": "全謹地政士事務所於 2026 年 5 月導入 Talent AI 智能代理系統。上線以來，系統累計接住並完成初步問診的進線達 1,205 件、自動建立逾千筆 CRM 紀錄，無需額外行政人力。約三成新客戶在辦公時間外首次聯繫——這條過去石沉大海的頻道，如今每一通都在數秒內被接住、分類，並即時通知負責地政士。",
    "case.oversight": "每一則對外回覆皆通過反幻覺安全驗證；系統已於送出前攔截 7 則潛在不實陳述，確保事務所執照從未承擔未經核實的費用或法律主張。所有案件最終由持牌地政士審核並親自辦理。",
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
    "moats.eyebrow": "為什麼可以放心交給我們",
    "moats.h": "不是冷冰冰的通用 AI，是真正懂事務所規矩、處處替您把關的幫手",
    "moats.intro": "每一道把關，都是從一個個真實案例慢慢磨出來的。前面踩過的坑、繳過的學費，您都不必再走一次。",
    "moat.compliance.t": "規矩內建，不會亂來",
    "moat.compliance.b": "近 79 條把關規則直接寫進系統——對執照型專業來說，一次亂報費用或亂講法律都可能出大事；這些底線，系統替您守得牢牢的。",
    "moat.audit.t": "每一句話都留得下紀錄",
    "moat.audit.b": "對外的每一則訊息都先檢查、都留有紀錄、隨時可查——安全不是嘴上說說，是攤得開來看的紀錄。",
    "moat.domainkb.t": "只照您事務所的規矩回答",
    "moat.domainkb.b": "11 大業務的費用、文件、流程、問卷，全部以您事務所的真實規則為準；遇到不確定的，它會老實說再幫您確認，絕不自己亂編。",
    "moat.humanloop.t": "重要的事，永遠是人來決定",
    "moat.humanloop.b": "重要案件一出現就自動轉給您的同仁，連同整理好的脈絡一起交到手上——AI 負責接待與整理，判斷和結案，始終是專業人員的事。",
    "moat.staffing.t": "案子不漏接、也不會忘記",
    "moat.staffing.b": "案件依專長分給對的同仁；逾時或還沒人接的，系統每天主動提醒兩次，沒有一件會被忘記。",
    "moat.flywheel.t": "用得越久，越懂您的事務所",
    "moat.flywheel.b": "每一段對話、每一次調整，都讓系統更貼近您事務所的做事方式——時間越久，幫得越上手、越準。",
    "moat.localization.t": "為台灣事務所量身打造",
    "moat.localization.b": "整套設計就為台灣的事務所而生——LINE、繁體中文、個資法與業別規範、轉介與公會往來，這些在地的細節，通用工具一時補不上。",

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
    "ask.h": "讓每一家人手吃緊的事務所，都有一位 24 小時不打烊的智能同仁",
    "ask.vision": "不是一套硬塞的系統。你缺前台，就開「接客戶」；你缺後端追蹤，就開「管案子」。結果很具體：進線不漏接、案件看得到、同仁不會忘。",
    "ask.owner": "若您正為人手不足、團隊被塞爆而頭痛：我們提供付費試點，兩週內為您的 LINE 官方帳號導入智能接案，先看數據，再決定是否繼續。",
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
    "hero.eyebrow": "An AI assistant built for Taiwan's professional firms",
    "hero.h1": "Short-staffed? Let an AI assistant look after your clients for you.",
    "hero.sub": "You don't need to understand the technology, or change how your team already works. The AI assistant receives clients, organises cases and tracks progress around the clock — handling the busywork so you and your colleagues focus on the professional judgment that matters. Already running quietly in a real firm: nothing dropped, nothing misquoted, and every outbound reply checked for you first.",

    "m.leads": "Leads captured & qualified, 24/7",
    "m.safe": "Client messages sent — 0 unsafe",
    "m.afterhours": "New clients first contacting after-hours",
    "m.escalated": "Cases escalated to a human, in context",

    /* ---- the shift ---- */
    "shift.eyebrow": "The Shift",
    "shift.h": "Can't hire, can't retain — yet the team faces round-the-clock clients",
    "shift.sub": "Professional firms are stuck on one problem: caseloads rise, staff are hard to hire and keep, and the team drowns in repetitive work.",
    "shift.pain1.t": "Busywork eats your people", "shift.pain1.b": "Questionnaires, filing and triage burn a professional's hours on low-value work",
    "shift.pain2.t": "Slow turnaround", "shift.pain2.b": "An anxious client asks, the team is swamped, and by reply time the trust is already gone",
    "shift.pain3.t": "No one on after hours", "shift.pain3.b": "Nearly a third of new clients first make contact when no one is there to answer",
    "shift.pain4.t": "Can't hire or keep staff", "shift.pain4.b": "A 1–3 person firm can't staff round-the-clock cover, yet clients expect it",

    /* ---- the system ---- */
    "system.eyebrow": "How it helps you",
    "system.h": "From the first message to a finished case — the AI handles intake, your people decide",
    "system.loop": "Every case stays in your professionals' hands. The AI receives clients, sorts them and organises the details — the judgment and the close always belong to you and your team.",
    "wf.intake.t": "A warm welcome", "wf.intake.d": "The moment a client writes in, their need is understood and sorted",
    "wf.form.t": "Gathers the details", "wf.form.d": "Once the case type is clear, it asks for exactly what that service needs, one item at a time",
    "wf.guard.t": "Every reply checked first", "wf.guard.d": "Each reply is safety-checked before it sends — never a wrong fee, never an over-promise",
    "wf.crm.t": "Cases organised for you", "wf.crm.d": "Conversations become tidy case records you can review any time",
    "wf.human.t": "A person takes over", "wf.human.d": "Important cases pass straight to your colleague, handled in person",

    /* ---- case study ---- */
    "case.eyebrow": "Flagship Deployment",
    "case.h": "全謹代書: from a silent after-hours channel to 24/7 qualified intake",
    "case.narr": "全謹地政士事務所 deployed the Talent AI agent in May 2026. Since launch it has captured and qualified 1,205 leads and built over a thousand CRM records automatically — with zero added administrative staff. About a third of new clients first make contact outside business hours; that previously-silent channel is now received, classified and escalated to the responsible licensee within seconds.",
    "case.oversight": "Every outbound reply passes a multi-layer anti-hallucination validator; 7 replies were blocked before delivery to protect the firm's licence from unverified fee or legal claims. Every case is ultimately reviewed and closed by a licensed 地政士.",
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
    "moats.eyebrow": "Why you can trust it with your clients",
    "moats.h": "Not a cold, generic AI — a helper that truly knows a firm's rules and guards every line for you",
    "moats.intro": "Every safeguard was shaped from a real case, one at a time. The mistakes already made, the lessons already paid for — you won't have to repeat any of them.",
    "moat.compliance.t": "The rules are built in",
    "moat.compliance.b": "Nearly 79 guard rules are written right into the system — for a licensed profession, one wrong fee or careless legal claim can do real harm, so the system holds those lines for you.",
    "moat.audit.t": "Every message leaves a record",
    "moat.audit.b": "Each outbound message is checked first and kept on record, reviewable any time — safety you can open up and read, not a marketing line.",
    "moat.domainkb.t": "It answers only by your firm's rules",
    "moat.domainkb.b": "Fees, documents, steps and questionnaires across 11 services all follow your firm's real rules; when it isn't sure, it says so and checks with you — it never makes things up.",
    "moat.humanloop.t": "The important calls are always a person's",
    "moat.humanloop.b": "The moment an important case appears it passes to your colleague, with the details organised and ready — the AI receives and tidies, the judgment and the close stay with your professionals.",
    "moat.staffing.t": "Nothing dropped, nothing forgotten",
    "moat.staffing.b": "Cases go to the right colleague by specialty; anything overdue or unclaimed is surfaced to the team twice a day, so none is forgotten.",
    "moat.flywheel.t": "The longer you use it, the better it knows your firm",
    "moat.flywheel.b": "Every conversation and every adjustment tunes it closer to how your firm works — the more time passes, the more naturally it helps.",
    "moat.localization.t": "Built for Taiwan's firms",
    "moat.localization.b": "The whole thing is made for how Taiwan's firms actually work — LINE, Traditional Chinese, 個資法 and sector rules, referral and association ties — local detail a generic global tool can't quickly match.",

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
    "ask.h": "Give every short-staffed firm a 24/7 colleague that never misquotes, never forgets, never sleeps",
    "ask.vision": "Not a rigid system bolted on. Need a front desk? Switch on intake. Need back-end tracking? Switch on case management. The result is concrete: no inquiry dropped, every case visible, nothing forgotten.",
    "ask.owner": "If short-staffing and an overwhelmed team are your daily headache: we offer a paid pilot — your LINE OA live within two weeks. See the numbers before you commit.",
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
