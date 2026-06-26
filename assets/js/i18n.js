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
    "nav.roadmap": "藍圖", "nav.pricing": "費用", "nav.contact": "預約",

    "brand.tagline": "讓專業，不再因時間而流失",

    /* ---- hero ---- */
    "hero.eyebrow": "為人手吃緊的專業事務所而生",
    "hero.h1": "你請不到的那個人，讓智能助手幫你補上",
    "hero.sub": "人手不夠、團隊忙不過來？智能助手 24 小時幫你接客戶、整理案件、盯進度——你缺哪一塊，就開哪一塊。已在真實事務所上線，不漏接、不亂報、不出錯。",

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
    "case.disclaimer": "收益轉換數據尚在追蹤中；以上為實測運營數據，非預測收入。ROI 以「損益兩平＋觸及＋把關」呈現，而非已成交金額。",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "新客戶於辦公時間外首次來訊", "kpi.afterhours.note": "641 位非員工客戶中 195 位，平日 09:00–18:00 之外【實測】",
    "kpi.eval.t": "上線前語意品質評測", "kpi.eval.note": "每晚自動評測（人設、防幻覺等）14／14 全數通過【實測】",
    "kpi.crm.t": "對話自動分類（案型＋優先級）", "kpi.crm.note": "1,074／1,085 進線自動帶案型與優先級，並生成 314 則案例敘事——零人工建檔【實測】",
    "kpi.safety.t": "對外訊息安全檢查：通過／送出前攔截", "kpi.safety.note": "L0–L4 五層驗證；7 則於送達客戶前攔截【實測】",
    "kpi.leads.t": "完整處理的進線（接待→分流→建檔）", "kpi.leads.note": "impact_rollup 進線總數【實測】",
    "kpi.escalated.t": "高價值案件附完整脈絡交給真人", "kpi.escalated.note": "稽核去重（71 自動＋46 人工−2 重疊）【實測】",
    "kpi.latency.t": "從來訊到送出完整問卷（約）", "kpi.latency.note": "示意：人工確認之操作常數，尚無量測基準",

    /* ---- traction ---- */
    "traction.eyebrow": "進展",
    "traction.h": "從零到實證，上線數週的曲線在案",
    "traction.sub": "實線為實測；虛線為依現行速率外推之預測，已明確標示。",
    "traction.c1": "每週客戶訊息量",
    "traction.c2": "累計進線（合格客戶）",
    "traction.c3": "累計高優先轉人工件數",
    "traction.footnote": "僅 W5 端點（進線 1,085／轉人工 115／訊息累計約 9,790）與每週訊息量為點對點實測；W1–W4 累計進線為內插估算，W6–W7 為預測，以虛線呈現。",

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
    "moat.staffing.t": "智能分流與盯案",
    "moat.staffing.b": "案件依專長自動分流給 10 人團隊（涵蓋 10 類案型）；逾時與未認領的案件，系統每日兩次主動盯回團隊，沒有一件被遺忘。",
    "moat.flywheel.t": "會複利的資料飛輪",
    "moat.flywheel.b": "每段對話寫入結構化案件資料、每次事故寫入新防護、每次升級訓練分流層——處理過的每一件進線都讓系統更安全、更準。",
    "moat.localization.t": "在地深耕的先行者",
    "moat.localization.b": "整套系統為台灣中小企業真正使用的頻道與規則而生——LINE OA、繁中、個資法與業別法界線、轉介／公會通路——通用全球工具難以快速補齊的在地深度。",

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
    "footer.disclaimer": "本頁數據除標示「預測」者外，均取自全謹代書實測紀錄（資料截至 2026-06-19）。標示「示意數字」者為估算或假設，待經稽核資料替換。ROI 以損益兩平、觸及與把關呈現，不構成財務預測或投資承諾。",
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
    "pricing.starter.f1": "24/7 接案・9 大選單問卷", "pricing.starter.f2": "L0–L4 五層安全把關", "pricing.starter.f3": "轉真人接管・恢復・結案", "pricing.starter.f4": "客戶紀錄自動建檔",
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
    "nav.traction": "Traction", "nav.moats": "Moats", "nav.security": "Security",
    "nav.roadmap": "Roadmap", "nav.pricing": "Pricing", "nav.contact": "Contact",

    "brand.tagline": "Professional practice — any hour, no lead lost",

    /* ---- hero ---- */
    "hero.eyebrow": "Built for short-staffed professional practices",
    "hero.h1": "The teammate you can't hire — working 24/7.",
    "hero.sub": "Short-staffed and stretched thin? An always-on agent receives clients, organises cases and tracks progress — switch on the piece you need. Already proven live in a real firm.",

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
    "case.disclaimer": "Revenue conversion is still being instrumented; figures above are operational measurements, not income projections. ROI is shown as break-even + reach + safety, not as booked revenue.",

    /* ---- KPI tiles ---- */
    "kpi.afterhours.t": "New clients first contacting outside office hours", "kpi.afterhours.note": "195 of 641 non-staff clients, outside Mon–Fri 09:00–18:00 【measured】",
    "kpi.eval.t": "Pre-launch semantic quality evals", "kpi.eval.note": "Nightly LLM-judge scenarios (persona, anti-hallucination…) 14/14 passing 【measured】",
    "kpi.crm.t": "Conversations auto-classified (type + priority)", "kpi.crm.note": "1,074/1,085 leads auto-tagged with case-type + priority; 314 scenario narratives — zero staff entry 【measured】",
    "kpi.safety.t": "Outbound safety: passed / blocked before send", "kpi.safety.note": "L0–L4 validators; 7 blocked before reaching a client 【measured】",
    "kpi.leads.t": "Leads handled end-to-end (intake → triage → CRM)", "kpi.leads.note": "impact_rollup lead total 【measured】",
    "kpi.escalated.t": "High-value cases handed to a human, with context", "kpi.escalated.note": "audit-deduped (71 auto + 46 manual − 2 overlap) 【measured】",
    "kpi.latency.t": "Client message → full questionnaire pushed", "kpi.latency.note": "Illustrative: human-confirmed operating constant, not yet instrumented",

    /* ---- traction ---- */
    "traction.eyebrow": "Traction",
    "traction.h": "From zero to live proof — the curve is on record",
    "traction.sub": "Solid lines are measured; dashed lines are run-rate forecast, clearly flagged.",
    "traction.c1": "Client messages per week",
    "traction.c2": "Cumulative leads (qualified clients)",
    "traction.c3": "Cumulative high-priority hand-offs",
    "traction.footnote": "Only the W5 endpoints (1,085 leads / 115 escalations / ~9,790 messages) and the weekly message bars are point-exact measured; W1–W4 cumulative leads are interpolated estimates and W6–W7 are forecast, shown dashed.",

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
    "moat.staffing.t": "Smart routing & follow-up",
    "moat.staffing.b": "Cases route to a 10-member team by specialty across 10 case types; overdue and unowned cases are surfaced back to the team twice daily, so none is forgotten.",
    "moat.flywheel.t": "A data flywheel that compounds",
    "moat.flywheel.b": "Every conversation writes structured case data, every incident writes a new guardrail, every escalation teaches the triage layer — the system sharpens with each of 1,080 leads handled.",
    "moat.localization.t": "First-mover, deeply localized",
    "moat.localization.b": "The whole stack is built for the channel and rules Taiwan SMBs actually use — LINE OA, Traditional Chinese, 個資法 and sector-law boundaries, the referral/association motion — a depth a generic global tool can't retrofit quickly.",

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
    "footer.disclaimer": "Figures are from the 全謹代書 live deployment (as of 2026-06-19) unless marked Forecast. Items marked Illustrative are estimates or assumptions pending verified data. ROI is shown as break-even, reach and safety, and does not constitute a financial projection or investment commitment.",
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
    "pricing.starter.f1": "24/7 intake · all 9 service menus", "pricing.starter.f2": "L0–L4 five-layer safety checks", "pricing.starter.f3": "Human handoff · resume · close-case", "pricing.starter.f4": "Auto CRM record",
    "pricing.pro.name": "Pro", "pricing.pro.badge": "Most popular", "pricing.pro.tagline": "Organises the case, shows the ROI",
    "pricing.pro.price": "NT$15,000", "pricing.pro.cap": "Up to 500 leads/mo (NT$40 per lead over)", "pricing.pro.seats": "Up to 3 seats",
    "pricing.pro.f1": "Everything in Starter", "pricing.pro.f2": "Full CRM + case insight + narrative", "pricing.pro.f3": "Smart routing + staff assignment", "pricing.pro.f4": "Deal-outcome tracking", "pricing.pro.f5": "Monthly ROI report + overdue follow-up",
    "pricing.flagship.name": "Flagship", "pricing.flagship.tagline": "The digital ops layer for your whole team",
    "pricing.flagship.price": "NT$25,000", "pricing.flagship.cap": "Up to 1,000 leads/mo (NT$35 per lead over)", "pricing.flagship.seats": "Unlimited seats",
    "pricing.flagship.f1": "Everything in Pro", "pricing.flagship.f2": "Plaud audio → auto case records", "pricing.flagship.f3": "Custom service categories", "pricing.flagship.f4": "Multi-member team routing", "pricing.flagship.f5": "Priority support · 4-hour SLA",
  },
};

window.I18N = I18N;
