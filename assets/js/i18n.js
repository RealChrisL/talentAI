/* =============================================================================
 * QuanJin AI / 全謹智能 — bilingual string map
 * -----------------------------------------------------------------------------
 * I18N[lang][key]. zh-TW is primary/default; en is the toggle.
 * No Markdown in values (plain text only). Numbers live in content.js; this
 * file holds the words around them.
 *
 * Voice: confident, AI-native, proof-led (the "為 AI 時代重新打造" register).
 * Strategy: one agent, four pluggable modules — 接得住 / 追得到 / 管得動 / 看得懂 —
 * on a trust-the-data foundation. Not a CRM; an agent layer in the channel.
 * 追得到 (dropped-lead) is the wedge. Mirrors deck d.p3.
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

    "nav.shift": "現況", "nav.system": "系統", "nav.fleet": "人才艦隊", "nav.case": "實例",
    "nav.traction": "進展", "nav.moats": "為什麼選我們", "nav.security": "安全",
    "nav.roadmap": "藍圖", "nav.pricing": "費用", "nav.contact": "預約",

    "brand.tagline": "讓專業，不再因時間而流失",

    /* ---- hero ---- */
    "hero.eyebrow": "AI 原生・專業服務",
    "hero.h1": "專業服務，為 AI 時代重新打造",
    "hero.sub": "Talent AI 打造 AI 人才艦隊——接待、營運、行銷等職能隨需啟用。服務你的生意，而不是要你學工具：LINE、Asana 或任何你既有的系統，人才自己接上。第一位人才已在專業事務所在職 68 天：1,490 筆自動建檔、0 則違規出訊、全程可稽核。",

    "m.leads": "接住並完成初步問診的進線",
    "m.safe": "對外訊息送出，0 則不安全",
    "m.afterhours": "新客戶於辦公時間外首次來訊",
    "m.escalated": "高價值案件附完整脈絡轉真人",

    /* ---- AI 人才艦隊 (fleet) ---- */
    "fleet.eyebrow": "AI 人才艦隊",
    "fleet.h": "您需要哪幾位，就啟用哪幾位",
    "fleet.sub": "Talent AI 維護一支可按需組建的 AI 人才艦隊。每位代理專責一個職能；工具與系統整合可插拔——服務你的生意，而不是要你學工具。",
    "fleet.greeting.t": "接待代理", "fleet.greeting.b": "接住每一通進線、問齊資料、分流轉案。",
    "fleet.ops.t": "營運代理", "fleet.ops.b": "盯緊每一案進度、通知團隊、自動建檔。",
    "fleet.marketing.t": "行銷代理", "fleet.marketing.b": "成交追蹤、高價值客群識別、觸及分析。",
    "fleet.ghost.t": "下一位人才", "fleet.ghost.b": "你需要的職能還不在艦隊裡？告訴我們下一個缺口。",

    /* ---- the shift ---- */
    "shift.eyebrow": "現況",
    "shift.h": "案子誰在追？團隊誰在盯？數字誰在看？",
    "shift.sub": "專業，您做得最好。但接案、追案、盯團隊、看數字——這層營運，本就不該全壓在一個人身上。",
    "shift.pain1.t": "案子追不完", "shift.pain1.b": "案量一上來，總有幾件在成交前被漏掉——而每漏一件，都是真金白銀。",
    "shift.pain2.t": "團隊看不清", "shift.pain2.b": "誰手上有什麼案、卡在哪一關，您手邊沒有一個準數。",
    "shift.pain3.t": "數字憑感覺", "shift.pain3.b": "哪種案最值得做、客人從哪來——靠的是感覺，不是數字。",
    "shift.pain4.t": "下班還在轉", "shift.pain4.b": "逾四成客人下班後才來訊；您守不了一整天的手機，但案子不等人。",

    /* ---- the system ---- */
    "system.eyebrow": "產品",
    "system.h": "一個 agent：接得住、追得到、管得動、看得懂",
    "system.loop": "不是再多一套要人學的軟體，而是為您的生意上工的 AI 人才——嵌進您現有的通路與工具，接得住每一通、追得到每一案、管得動團隊、看得懂數字。四個能力可開可關、逐家在地化，從您最痛的「追得到」先上，其餘隨需點亮。底下是一件案子從進線到結案的流動——判斷與結案永遠是您的人說了算，資料筆筆有跡可循。",
    "wf.intake.t": "秒級接待", "wf.intake.d": "客戶一進線，立刻聽懂需求、自動分類，不漏接任何一通",
    "wf.form.t": "自動問齊資料", "wf.form.d": "確認案件類型後，把該服務需要的資料，一項一項替您問齊",
    "wf.guard.t": "回覆先把關", "wf.guard.d": "每一句回覆送出前都先過安全檢查，絕不亂報價、亂承諾",
    "wf.crm.t": "自動整理案件", "wf.crm.d": "對話自動整理成案件紀錄，來龍去脈隨時看得到",
    "wf.human.t": "專人親自接手", "wf.human.d": "重要案件自動轉給您的同仁，由持牌專業人員親自處理",

    /* ---- case study ---- */
    "case.eyebrow": "旗艦實例",
    "case.h": "第一位人才的工作履歷：全謹代書",
    "case.narr": "全謹地政士事務所 2026 年 5 月到職，至今在職 68 天。1,490 筆案件自動建檔、不必多請人；逾四成客戶在下班後才來訊——過去石沉大海的頻道，如今每一通都在數秒內被接住、分類，並通知負責地政士；273 次含完整脈絡轉交人工。",
    "case.oversight": "每一則對外回覆送出前都先安全把關，6 則未經確認的費用回覆在送出前被攔下；0 則違規訊息送達客戶；不讓事務所承擔未經核實的費用或說法。每件案子最終由持牌地政士親自辦理。",
    "case.disclaimer": "收益轉換數據尚在追蹤中；以上為實測運營數據，非預測收入。ROI 以「損益兩平＋觸及＋把關」呈現，而非已成交金額。",

    /* ---- 跨專業服務業 (industries) ---- */
    "industries.eyebrow": "跨專業服務業",
    "industries.h": "地政士是第一位雇主，不是市場邊界",
    "industries.body": "職前訓練＝把行業的業務知識庫寫成教材，兩週上崗。同一套僱傭基礎設施——權限、稽核、監督、交接——通用於法律、會計、保險、診所、顧問等專業服務業。",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "下班後也接得住的新客戶", "kpi.afterhours.note": "1,251 位有進線紀錄的新客戶中，519 位（41.5%）在平日 09:00–18:00 以外第一次找上門【實測】",
    "kpi.eval.t": "上線前的品質把關", "kpi.eval.note": "每晚自動檢查回答的品質與分寸，14／14 全數通過【實測】",
    "kpi.crm.t": "對話自動分類整理", "kpi.crm.note": "進線幾乎都自動分好案件類型與優先順序，並自動整理成案件紀錄，完全不用人工輸入【實測】",
    "kpi.safety.t": "對外回覆把關：通過／攔下", "kpi.safety.note": "1,289 則回覆全數通過送出前六層檢查；6 則未經確認的費用回覆在送到客戶前先攔了下來【實測】",
    "kpi.leads.t": "完整接待過的客戶", "kpi.leads.note": "系統實際接待並完成初步處理的客戶總數【實測】",
    "kpi.escalated.t": "附完整紀錄、轉給專人的案件", "kpi.escalated.note": "高價值案件自動轉給專人，對話脈絡一併附上【實測】",
    "kpi.latency.t": "從收到訊息到問卷送出（約）", "kpi.latency.note": "示意：人工確認之操作常數，尚無量測基準",

    /* ---- traction ---- */
    "traction.eyebrow": "進展",
    "traction.h": "從零到實證，上線數週的曲線在案",
    "traction.sub": "實線為實測；虛線為依現行速率外推之預測，已明確標示。",
    "traction.c1": "每週客戶訊息量（LINE 通道）",
    "traction.c2": "累計進線（合格客戶）",
    "traction.c3": "累計高優先轉人工件數",
    "traction.footnote": "僅 W6 端點（進線 1,490／轉人工 273／訊息累計約 13,800）與每週訊息量為點對點實測；W1–W4 累計進線為內插估算，W7 為預測，以虛線呈現。",

    /* ---- moats ---- */
    "moats.eyebrow": "為什麼敢交給它",
    "moats.h": "敢嵌進客戶頻道的 AI，門檻在這裡",
    "moats.intro": "把 AI 接到真實客戶面前，最大的風險是它亂講話——我們把最多工程花在這。而真正的護城河不是單一功能，是這幾項疊起來的複利。",
    "moat.compliance.t": "不會亂報價、亂講法律",
    "moat.compliance.b": "該守的規矩都寫進去了，說錯話之前就先擋下來。",
    "moat.audit.t": "講了什麼，都查得到",
    "moat.audit.b": "每一句對外的話都留著紀錄，您隨時翻得到。",
    "moat.domainkb.t": "只照您的規矩回答",
    "moat.domainkb.b": "費用、流程都照您事務所的來；不確定，它會問，不會自己編。",
    "moat.humanloop.t": "重要的事還是您決定",
    "moat.humanloop.b": "一遇到重要案件就轉給您的人；判斷和結案，永遠是人來。",
    "moat.staffing.t": "不會讓案子被忘記",
    "moat.staffing.b": "案子分給對的代理與對的人；太久沒動的，它每天提醒兩次。",
    "moat.flywheel.t": "越用越貼合您所",
    "moat.flywheel.b": "資料越積越厚；跨所學到的，回過頭讓每一家都更準。",
    "moat.localization.t": "在地的眉角，外來工具補不上",
    "moat.localization.b": "LINE、繁體中文、個資法、公會往來——這些在地的縫，國外工具一時補不齊。",

    /* ---- security ---- */
    "security.eyebrow": "安全與合規",
    "security.h": "執照在你手上，風險由系統把關",
    "security.framing": "每則對外訊息在送出前皆通過六層驗證：不虛報費用、不承諾時間、不偽造法律效果；任何可疑指令（含提示注入）皆靜默記錄並阻擋。",
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
    "ptr.asana.t": "Asana",
    "ecosystem.flagship": "旗艦客戶",
    "ecosystem.input": "已接入的輸入端",
    "ecosystem.progress": "進度整合",
    "ecosystem.compute": "運算底層",
    "ecosystem.tech": "技術夥伴",

    /* ---- roadmap ---- */
    "roadmap.eyebrow": "發展藍圖",
    "roadmap.h": "從一家事務所的實證，到整個執照型市場的基礎建設",
    "rm.p1.t": "第一階段・實證", "rm.p1.o": "全謹代書已上線；數週實測在案，六層安全驗證架構確立。",
    "rm.p2.t": "第二階段・產品化", "rm.p2.o": "可移植導入套件，第二家事務所兩週內上線，取得首個付費試點。",
    "rm.p3.t": "第三階段・鄰近垂直", "rm.p3.o": "擴展至行政書士、移民代辦、信託規劃等授權制度相近的服務。",
    "rm.p4.t": "第四階段・區域化", "rm.p4.o": "進入日本（司法書士）與東南亞授權型法律服務市場。",
    "rm.p5.t": "第五階段・平台", "rm.p5.o": "成為執照型事務所共用的 AI 基礎建設層：合規模板、案件分析、跨所知識共享。",

    /* ---- the ask ---- */
    "contact.eyebrow": "預約試點",
    "ask.h": "把後場交給一層 AI，您專心做專業",
    "ask.vision": "可開可關：接得住、追得到、管得動、看得懂——缺哪一塊就開哪一塊，從最讓您頭痛的地方先上。",
    "ask.owner": "兩週，接上您的 LINE，用您自己的數字驗證，再決定要不要繼續。",
    // 市場規模／資金用途／募資：deck-only（已從公開 bundle 移除）

    /* ---- footer ---- */
    "footer.disclaimer": "本頁數據除標示「預測」者外，均取自全謹代書實測紀錄（資料截至 2026-07-16）。標示「示意數字」者為估算或假設，待經稽核資料替換。ROI 以損益兩平、觸及與把關呈現，不構成財務預測或投資承諾。",
    "footer.tagline": "智能人才 — 讓專業，不再因時間而流失",
    "footer.brand": "© 2026 智能人才 Talent AI",
    "pricing.eyebrow": "方案與費用",
    "pricing.h": "從一層模組開始，按需要長成整個營運層",
    "pricing.sub": "一位行政同仁月薪 NT$33,000 起，還不含假日、深夜與請假的空窗。三個方案，從單人到全團隊，月費自 NT$8,000 起。",
    "pricing.period": "／月", "pricing.cta": "預約洽談",
    "pricing.foot": "一次性建置費 NT$50,000（含業務知識庫撰寫・OA 接線・首兩週陪跑）；年繳享 8.3 折（送 2 個月）。",
    "pricing.allplans": "三個方案均含：LINE 官方帳號串接・反幻覺安全驗證・自動 CRM 建檔・持牌地政士全程把關。",
    "pricing.starter.name": "基礎 Starter", "pricing.starter.tagline": "接得住：24 小時不漏接的前台",
    "pricing.starter.price": "NT$8,000", "pricing.starter.cap": "每月最多 200 筆進線（超量每則 NT$50）", "pricing.starter.seats": "1 席・單人事務所",
    "pricing.starter.f1": "24/7 接案・9 大選單問卷", "pricing.starter.f2": "層層安全把關・不亂報價", "pricing.starter.f3": "轉真人接管・恢復・結案", "pricing.starter.f4": "客戶紀錄自動建檔",
    "pricing.pro.name": "專業 Pro", "pricing.pro.badge": "最受歡迎", "pricing.pro.tagline": "追得到＋看得懂：盯緊每一案，看見 ROI",
    "pricing.pro.price": "NT$15,000", "pricing.pro.cap": "每月最多 500 筆進線（超量每則 NT$40）", "pricing.pro.seats": "最多 3 席",
    "pricing.pro.f1": "基礎方案全部功能", "pricing.pro.f2": "完整 CRM＋案件洞察＋案情敘事", "pricing.pro.f3": "智能分流・指派負責同仁", "pricing.pro.f4": "成交結果追蹤", "pricing.pro.f5": "每月 ROI 報告＋逾時盯案",
    "pricing.flagship.name": "旗艦 Flagship", "pricing.flagship.tagline": "管得動：整個團隊的數位作業層",
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

    "nav.shift": "The Shift", "nav.system": "System", "nav.fleet": "Fleet", "nav.case": "Case Study",
    "nav.traction": "Traction", "nav.moats": "Why us", "nav.security": "Security",
    "nav.roadmap": "Roadmap", "nav.pricing": "Pricing", "nav.contact": "Contact",

    "brand.tagline": "Professional practice — any hour, no lead lost",

    /* ---- hero ---- */
    "hero.eyebrow": "AI-native professional services",
    "hero.h1": "Professional services, re-engineered for the AI era.",
    "hero.sub": "Talent AI fields a fleet of AI talent — greeting, operations, marketing and beyond, staffed on demand. They serve your business, not ask you to learn tools: LINE, Asana, or whatever you already run, the talent plugs in. The first talent has been on the job at a professional firm for 68 days: 1,490 records auto-built, zero unsafe messages, fully auditable.",

    "m.leads": "Leads captured & qualified, 24/7",
    "m.safe": "Client messages sent — 0 unsafe",
    "m.afterhours": "New clients first contacting after-hours",
    "m.escalated": "Cases escalated to a human, in context",

    /* ---- AI talent fleet ---- */
    "fleet.eyebrow": "AI Talent Fleet",
    "fleet.h": "The fleet: staff the roles you need",
    "fleet.sub": "Talent AI maintains a fleet of AI talent staffed on demand. Each agent owns one function; tools and integrations plug in per business — serving your business, not asking you to learn tools.",
    "fleet.greeting.t": "Greeting Agent", "fleet.greeting.b": "Catches every inbound, gathers the facts, routes the case.",
    "fleet.ops.t": "Operations Agent", "fleet.ops.b": "Tracks every case, alerts the team, files everything automatically.",
    "fleet.marketing.t": "Marketing Agent", "fleet.marketing.b": "Deal tracking, high-value client signals, reach analytics.",
    "fleet.ghost.t": "The next hire", "fleet.ghost.b": "Need a role that isn't in the fleet yet? Tell us the gap.",

    /* ---- the shift ---- */
    "shift.eyebrow": "The Shift",
    "shift.h": "Who's chasing the cases? Watching the team? Reading the numbers?",
    "shift.sub": "You do the professional work brilliantly. But intake, follow-up, the team, the numbers — that operating layer was never meant to rest on one person.",
    "shift.pain1.t": "Cases slip away", "shift.pain1.b": "When cases pile up, a few always get dropped before they close — and every one is real money.",
    "shift.pain2.t": "The team's a blur", "shift.pain2.b": "Who's handling what, and where it's stuck — you don't have a hard number to hand.",
    "shift.pain3.t": "Numbers on a hunch", "shift.pain3.b": "Which work pays best, where clients come from — gut feel, not data.",
    "shift.pain4.t": "It never clocks off", "shift.pain4.b": "Over four in ten clients write after hours; you can't watch the phone all day, but cases won't wait.",

    /* ---- the system ---- */
    "system.eyebrow": "Product",
    "system.h": "One agent: capture, don't-drop, run-the-team, see-the-numbers",
    "system.loop": "Not another piece of software to learn — AI talent that reports for work in your business, plugging into the channels and tools you already run: it captures every lead, never drops a case, runs the team, reads the numbers. Four capabilities, switch on what you need, localized per firm — start with the one that hurts most ('don't-drop'). Below is how a single case flows from intake to close — judgment and the close stay with your people, every write traceable.",
    "wf.intake.t": "Instant welcome", "wf.intake.d": "The moment a client writes in, their need is understood and sorted — not one missed",
    "wf.form.t": "Gathers the details", "wf.form.d": "Once the case type is clear, it asks for exactly what that service needs, one item at a time",
    "wf.guard.t": "Every reply checked first", "wf.guard.d": "Each reply is safety-checked before it sends — never a wrong fee, never an over-promise",
    "wf.crm.t": "Cases organised for you", "wf.crm.d": "Conversations become tidy case records you can review any time",
    "wf.human.t": "A person takes over", "wf.human.d": "Important cases pass straight to your colleague, handled in person by a licensee",

    /* ---- case study ---- */
    "case.eyebrow": "Flagship Deployment",
    "case.h": "The first talent's employment record: QuanJin Notary",
    "case.narr": "全謹地政士事務所 hired the first talent in May 2026 — 68 days on the job so far. 1,490 cases filed automatically, with no extra headcount; over four in ten clients first write in after hours — that once-silent channel is now caught, sorted and routed to the responsible 地政士 within seconds; 273 hand-offs to a person came with full context attached.",
    "case.oversight": "Every outbound reply is safety-checked before it sends — 6 unverified fee replies were blocked before they went out, and zero unsafe messages reached a client, sparing the firm any unverified fee or legal claim. Every case is ultimately handled by a licensed 地政士.",
    "case.disclaimer": "Revenue conversion is still being instrumented; figures above are operational measurements, not income projections. ROI is shown as break-even + reach + safety, not as booked revenue.",

    /* ---- Across professional services (industries) ---- */
    "industries.eyebrow": "Across professional services",
    "industries.h": "The notary firm is the first employer — not the market boundary.",
    "industries.body": "Onboarding = writing the industry's playbook into a knowledge base; two weeks to on-the-job. The same employment infrastructure — permissions, audit, supervision, handoff — serves law, accounting, insurance, clinics, and consulting alike.",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "New clients reached even after hours", "kpi.afterhours.note": "519 of 1,251 new clients with a recorded first contact (41.5%) first wrote in outside Mon–Fri 09:00–18:00 【measured】",
    "kpi.eval.t": "Quality checked before going live", "kpi.eval.note": "Nightly checks on answer quality and tone — 14/14 passing 【measured】",
    "kpi.crm.t": "Conversations sorted automatically", "kpi.crm.note": "Almost every lead is auto-sorted by type and priority and turned into a case record — no manual entry 【measured】",
    "kpi.safety.t": "Outbound replies: passed / stopped", "kpi.safety.note": "All 1,289 replies passed six pre-send checks; 6 unverified fee replies were stopped before they reached a client 【measured】",
    "kpi.leads.t": "Clients fully received", "kpi.leads.note": "Total clients the system received and handled through first steps 【measured】",
    "kpi.escalated.t": "Cases passed to a person, with full notes", "kpi.escalated.note": "High-value cases auto-routed to a person, conversation context attached 【measured】",
    "kpi.latency.t": "From message received to questionnaire sent", "kpi.latency.note": "Illustrative: human-confirmed operating constant, not yet instrumented",

    /* ---- traction ---- */
    "traction.eyebrow": "Traction",
    "traction.h": "From zero to live proof — the curve is on record",
    "traction.sub": "Solid lines are measured; dashed lines are run-rate forecast, clearly flagged.",
    "traction.c1": "Client messages per week (LINE channel)",
    "traction.c2": "Cumulative leads (qualified clients)",
    "traction.c3": "Cumulative high-priority hand-offs",
    "traction.footnote": "Only the W6 endpoints (1,490 leads / 273 escalations / ~13,800 messages) and the weekly message bars are point-exact measured; W1–W4 cumulative leads are interpolated estimates and W7 is forecast, shown dashed.",

    /* ---- moats ---- */
    "moats.eyebrow": "Why owners trust it",
    "moats.h": "An AI you can put in front of clients is another class entirely",
    "moats.intro": "Put AI in front of real clients and the biggest risk is it saying the wrong thing — that's where we spent the most engineering. And the real moat isn't one feature; it's the compounding of these.",
    "moat.compliance.t": "No wrong fees, no loose legal claims",
    "moat.compliance.b": "The rules that matter are built in — it's stopped before it can misspeak.",
    "moat.audit.t": "Whatever it said, you can check",
    "moat.audit.b": "Every outbound line is kept on record, there whenever you look.",
    "moat.domainkb.t": "It answers by your rules",
    "moat.domainkb.b": "Fees and process follow your firm's; unsure, it asks — it doesn't make things up.",
    "moat.humanloop.t": "The big calls stay yours",
    "moat.humanloop.b": "Anything important goes to your people; the judgment and the close are always human.",
    "moat.staffing.t": "Nothing gets forgotten",
    "moat.staffing.b": "Cases go to the right agent and the right person; if one sits too long, it nudges twice a day.",
    "moat.flywheel.t": "It fits your firm closer over time",
    "moat.flywheel.b": "The data deepens; what it learns across firms makes every one of them sharper.",
    "moat.localization.t": "Local detail a foreign tool can't match",
    "moat.localization.b": "LINE, Traditional Chinese, 個資法, 公會 ties — local seams a foreign tool can't quickly close.",

    /* ---- security ---- */
    "security.eyebrow": "Security & Compliance",
    "security.h": "Your licence stays protected — the system holds the line",
    "security.framing": "Every outbound message clears six validation gates before delivery — no fabricated fees, no scheduling commitments, no invented legal outcomes. Suspicious injection attempts are logged silently and blocked.",
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
    "ptr.asana.t": "Asana",
    "ecosystem.flagship": "Flagship deployment",
    "ecosystem.input": "Connected input",
    "ecosystem.progress": "Progress integration",
    "ecosystem.compute": "Compute foundation",
    "ecosystem.tech": "Built on",

    /* ---- roadmap ---- */
    "roadmap.eyebrow": "Roadmap",
    "roadmap.h": "From one firm's proof to infrastructure for every licensed practice",
    "rm.p1.t": "Phase 1 — Proof", "rm.p1.o": "Live at 全謹代書 — weeks of measured data, six-layer compliance stack proven in production.",
    "rm.p2.t": "Phase 2 — Productize", "rm.p2.o": "Portable onboarding kit — a second firm goes live within two weeks; first paid pilot signed.",
    "rm.p3.t": "Phase 3 — Adjacent verticals", "rm.p3.o": "Expand into analogous licence-gated verticals — immigration agents, trust planning, administrative services.",
    "rm.p4.t": "Phase 4 — Regional", "rm.p4.o": "Enter Japan (司法書士) and SE-Asian licensed legal-service markets, led by the Taiwan proof asset.",
    "rm.p5.t": "Phase 5 — Platform", "rm.p5.o": "Become the shared AI infrastructure layer for licensed practices — compliance templates, case analytics, cross-firm knowledge.",

    /* ---- the ask ---- */
    "contact.eyebrow": "Get started",
    "ask.h": "Hand the back office to a layer of AI — and stay on the work you do best",
    "ask.vision": "Switch on what you need: capture, don't-drop, run-the-team, see-the-numbers — add the piece you're missing, starting where it hurts most.",
    "ask.owner": "Two weeks on your own LINE, judged on your own numbers — then you decide.",
    // market sizing / use-of-funds / the ask: deck-only (removed from public bundle)

    /* ---- footer ---- */
    "footer.disclaimer": "Figures are from the 全謹代書 live deployment (as of 2026-07-16) unless marked Forecast. Items marked Illustrative are estimates or assumptions pending verified data. ROI is shown as break-even, reach and safety, and does not constitute a financial projection or investment commitment.",
    "footer.tagline": "Talent AI — professional practice, any hour, no lead lost",
    "footer.brand": "© 2026 Talent AI 智能人才",
    "pricing.eyebrow": "Plans & Pricing",
    "pricing.h": "Start with one module; grow into the whole operating layer",
    "pricing.sub": "A full-time admin hire runs NT$33,000+/mo and goes offline nights, weekends and holidays. Three plans, from solo practice to full team, from NT$8,000/mo.",
    "pricing.period": "/mo", "pricing.cta": "Book a call",
    "pricing.foot": "One-time onboarding NT$50,000 (knowledge-base authoring, LINE OA wiring, two-week guided launch); pay annually, get 2 months free.",
    "pricing.allplans": "Every plan includes: LINE OA integration · anti-hallucination safety · automatic CRM · licensed 地政士 oversight.",
    "pricing.starter.name": "Starter", "pricing.starter.tagline": "Capture: a 24/7 front desk, no lead slips through",
    "pricing.starter.price": "NT$8,000", "pricing.starter.cap": "Up to 200 leads/mo (NT$50 per lead over)", "pricing.starter.seats": "1 seat · solo practice",
    "pricing.starter.f1": "24/7 intake · all 9 service menus", "pricing.starter.f2": "Layered safety checks on every reply", "pricing.starter.f3": "Human handoff · resume · close-case", "pricing.starter.f4": "Auto CRM record",
    "pricing.pro.name": "Pro", "pricing.pro.badge": "Most popular", "pricing.pro.tagline": "Don't-drop + see-the-numbers: stay on every case, see the ROI",
    "pricing.pro.price": "NT$15,000", "pricing.pro.cap": "Up to 500 leads/mo (NT$40 per lead over)", "pricing.pro.seats": "Up to 3 seats",
    "pricing.pro.f1": "Everything in Starter", "pricing.pro.f2": "Full CRM + case insight + narrative", "pricing.pro.f3": "Smart routing + staff assignment", "pricing.pro.f4": "Deal-outcome tracking", "pricing.pro.f5": "Monthly ROI report + overdue follow-up",
    "pricing.flagship.name": "Flagship", "pricing.flagship.tagline": "Run-the-team: the digital ops layer for your whole team",
    "pricing.flagship.price": "NT$25,000", "pricing.flagship.cap": "Up to 1,000 leads/mo (NT$35 per lead over)", "pricing.flagship.seats": "Unlimited seats",
    "pricing.flagship.f1": "Everything in Pro", "pricing.flagship.f2": "Plaud audio → auto case records", "pricing.flagship.f3": "Custom service categories", "pricing.flagship.f4": "Multi-member team routing", "pricing.flagship.f5": "Priority support · 4-hour SLA",
  },
};

window.I18N = I18N;
