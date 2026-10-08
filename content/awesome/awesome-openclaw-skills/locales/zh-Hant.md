<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Discover 5300+ community-built OpenClaw skills, organized by category.
    </strong>
    <br />
    <br />
</div>
  
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Skills Count](https://img.shields.io/badge/skills-5200-blue?style=flat-square)](#table-of-contents)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-clawdbot-skills?label=Last%20update&style=flat-square)](https://github.com/VoltAgent/awesome-clawdbot-skills/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=flat-square&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>



</div>

</div>

# Awesome OpenClaw Skills

OpenClaw 是一個在本機執行的 AI 助理，可直接在你的機器上運作。Skills（技能）擴充了它的能力，讓它能與外部服務互動、自動化工作流程，並執行專門的任務。本合集協助你發掘並安裝適合需求的技能。它也能作為 OpenClaw 應用場景的靈感來源。

本列表中的技能來自 ClawHub（OpenClaw 的公開技能登錄庫），並經過分類以便於發掘。

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

或者使用 ClawHub CLI，適用於完整 OpenClaw 工作區之外的註冊表管理技能資料夾：

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

將技能資料夾複製到以下其中一個位置：

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

#### Alternative

你也可以直接將技能的 GitHub 倉庫連結貼到助理的對話中，並請它使用。助理會在背景自動處理設定。


### Why This List Exists?

OpenClaw 的公開登錄庫（ClawHub）託管了數以千計由社群建立的技能。本 awesome 列表精選了其中最優秀的部分。以下是我們過濾掉的內容：

| Filter | Excluded |
|--------|----------|
| 可能是垃圾內容 — 大量帳號、機器人帳號、測試/廢棄內容 | 4,065 |
| 重複 / 名稱相似 | 1,040 |
| 低品質或非英文描述 | 851 |
| 加密貨幣 / 區塊鏈 / 金融 / 交易 | 886 |
| 惡意 — 由研究人員發布的安全審計所識別（不含 VirusTotal） | 373 |
| **未從 OpenClaw 官方技能登錄庫收錄的總計** | **7,215** |


#### Want to add a skill?

本列表僅收錄已經發佈在 [ClawHub](https://clawhub.ai)（OpenClaw 的公開技能登錄庫）上的技能。我們不接受個人倉庫、gist 或任何其他外部來源的連結。如果你的技能尚未在 ClawHub 上，請先在那裡發佈。

請在 PR 描述中包含你的技能的 ClawHub 連結（例如 `https://clawhub.ai/steipete/slack`）——`clawskills.sh` 上的列表由我們另行管理。詳細說明請參閱 [CONTRIBUTING.md](CONTRIBUTING.md)。


## OpenClaw Ecosystem Tools

### 🕸️ Web Crawling & Data Infrastructure

AI agent 的表現取決於它們能夠取用的網頁資料。大規模爬取意味著要處理大量使用 JavaScript 的頁面、輪換代理（proxy）以及反爬蟲系統——這些你都可以自己打造，或者使用一個 API 來處理並將乾淨、可直接使用的資料交給你的 agent。

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase 是受到 70,000+ 開發者信賴的網頁資料基礎設施：透過單一 API 大規模爬取任何 URL，具備 JS 渲染、代理輪換與反爬蟲處理。其 MCP server 為 agent 提供即時網頁存取：crawl、crawl_markdown、crawl_screenshot。
</a>

### ☁️ Managed AI Hosting

Cloudways 是一個託管式雲端主機平台，可在不需基礎設施負擔的情況下部署與擴展應用程式。Cloudways Managed AI Agents 讓你在專用、隔離的基礎設施上運行 OpenClaw，具備託管更新、備份、SSL 與安全控制。使用促銷碼 **VOLTAGENT** 可獲得 **$10 主機抵免**。[立即註冊](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent)。

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
在具備託管更新、備份、SSL 與安全控制的專用、隔離基礎設施上部署 OpenClaw。使用促銷碼 VOLTAGENT 註冊即可獲得 $10 主機抵免。
</a>


### 🔍 Search & Web Data

OpenClaw agent 經常需要新鮮的真實世界資料——搜尋結果、商品列表、影片等等。你可以自己爬取並解析，也可以使用一個搜尋 API，即時回傳乾淨、結構化的資料，而不必管理代理、CAPTCHA 或 HTML 解析。

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
透過單一 API 讓 OpenClaw agent 取得即時的 Google 搜尋、YouTube、Amazon 商品與網頁搜尋資料。
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 You can feature your OpenClaw ecosystem tool in the section above.</h3>

<p></p>

<sub>The #1 most visited community resource after the official OpenClaw resource</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Security Notice

本列表中的技能經過**精選，但未經審計**。它們可能會在被加入此處後，隨時由其原始維護者更新、修改或替換。

在安裝或使用任何 Agent Skill 之前，請自行評估潛在的安全風險並驗證來源。OpenClaw 與 **VirusTotal** 合作，為技能提供安全掃描，請前往該技能在 ClawHub 上的頁面並查看 VirusTotal 報告，確認它是否被標記為有風險。

**推薦工具：**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Agent 技能可能包含提示注入（prompt injection）、工具投毒（tool poisoning）、隱藏的惡意程式載荷，或不安全的数据處理模式。在安裝前請務必檢閱原始碼，並自行斟酌使用技能。

 若想更全面地了解 ClawHub 生態系，請參閱 Trent AI 的 **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)**。


若你認為本列表中的某個技能應被標記或存在安全疑慮，請[開啟一個 issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues)，我們會進行審查。


## Table of Contents

| | | |
|---|---|---|
| [Git & GitHub](#git--github) (167) | [Marketing & Sales](#marketing--sales) (108) | [Communication](#communication) (146) |
| [Coding Agents & IDEs](#coding-agents--ides) (1184) | [Productivity & Tasks](#productivity--tasks) (207) | [Speech & Transcription](#speech--transcription) (47) |
| [Browser & Automation](#browser--automation) (323) | [AI & LLMs](#ai--llms) (176) | [Smart Home & IoT](#smart-home--iot) (41) |
| [Web & Frontend Development](#web--frontend-development) (920) | [Data & Analytics](#data--analytics) (28) | [Shopping & E-commerce](#shopping--e-commerce) (51) |
| [DevOps & Cloud](#devops--cloud) (393) | [Calendar & Scheduling](#calendar--scheduling) (66) | |
| [Image & Video Generation](#image--video-generation) (171) | [Media & Streaming](#media--streaming) (86) | [PDF & Documents](#pdf--documents) (105) |
| [Apple Apps & Services](#apple-apps--services) (44) | [Notes & PKM](#notes--pkm) (69) | [Self-Hosted & Automation](#self-hosted--automation) (33) |
| [Search & Research](#search--research) (343) | [iOS & macOS Development](#ios--macos-development) (29) | [Security & Passwords](#security--passwords) (54) |
| [Clawdbot Tools](#clawdbot-tools) (37) | [Transportation](#transportation) (111) | [Moltbook](#moltbook) (29) |
| [CLI Utilities](#cli-utilities) (180) | [Personal Development](#personal-development) (53) | [Gaming](#gaming) (35) |
| [Health & Fitness](#health--fitness) (87) | | |



<br/>

<details open>
<summary><h3 style="display:inline">Git & GitHub</h3></summary>

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - 諮詢、提交、擴充並挑戰推理鏈。
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - 編排多 agent 團隊，包含明確的角色、任務生命週期、交接協定與審查工作流程。
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - 張貼任務供其他 AI agent 執行，或從 AgentDo 任務佇列（agentdo.dev）領取工作。
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - 具備人類介入（human-in-the-loop）寫入核准的個人資料 API 閘道。
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - 圍繞 AI 原生工具/應用及其 GitHub 根據地蒐集訊號：快速成長、熱門、資金充裕。
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - 會話結束自動化，提交未推送的工作、萃取學習、偵測模式並持久化規則。
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - 此技能協助使用者從 Amazon 擷取結構化的商品列表，包含標題、ASIN、價格、評分。
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - 使用 each::sense AI 生成 App Store 與 Google Play 的截圖素材。
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - 管理自主 agent 及其技能的生命週期。
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - 對 agent 的完整技能堆疊進行全面安全審計。
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - 為 agent 工作流程與技能提供自動化部署、回滾與版本管理。
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - 驗證 ClawHub 技能的來源並建立信任分數。
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - 模型驅動的 arXiv 檢索工作流程，用於建立論文集合，並具備手動語言參數：初始化一次執行。
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - 此技能自動化檢出 GitHub 的作業流程。
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - 以安全為優先的 AI agent 技能審核。
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - 列出 Azure DevOps 專案、倉庫與分支；建立 pull request；管理工作項目；檢查建置狀態。
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - 具備語法高亮、行號與 Git 整合的 cat 衍生工具。
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - 用於目標追蹤與承諾機制的 Beeminder API。
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill 明確要求 Billy 進行系統修復。
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - 自動化 Bitbucket 倉庫、pull。
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - 從 Google Analytics GA4、Google Search Console、Stripe 拉取資料的自動化商業智慧報告。
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - 在 Abstract 鏈上無介面地遊玩 Blinko（鏈上 Plinko）。

> **[View all 159 skills in Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - 使用來自 0G Compute Network 的廉價、TEE 驗證 AI 模型作為 OpenClaw 供應商。
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Agent 可以簽署插件、在不遺失身分的情況下輪換憑證，並公開證明其行為。
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - 用於擷取與檢索關於人物、地點、餐廳、遊戲、技術等資訊的個人知識庫。
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - 使用 2slides API 的 AI 驅動簡報生成。
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - 其他工具需要完美的圖像。
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - 使用 each::sense AI 生成 3D 模型。
- [a](https://clawskills.sh/skills/ricketh137-a) - 在 Lobster.fun 上以 AI VTuber 身分進行直播。
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - 即時監控希臘 AADE 稅務機關系統——追蹤截止日期、費率變更與合規更新。
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - OpenClaw 的紅隊（red team）安全模式。
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - 使用 OpenAlex API（免費、無需金鑰）搜尋學術論文並進行文獻回顧
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - 當使用者需要搜尋學術論文、下載研究文件、萃取引文或蒐集時使用此技能。
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - 使用 Remotion 從音訊檔與歌詞渲染音樂影片。
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - 適用於 ACE-Step 的音樂創作指南。
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - 為 AI agent 與人類打造的 24/7 數位庇護所——前來參與。
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **OpenClaw 的自動化系統健康與記憶代謝。**。
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - 在 DNS 層級進行全網路廣告與追蹤器封鎖。
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - 將 OpenClaw 使用的 OpenRouter 模型同步到本安裝的設定中。
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - 當使用者要求「規劃我的一天」、「協助我規劃今天」、「早晨規劃」、「什麼時候。
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - 從你的 AI 編碼工具管理 Google Ads 廣告活動。44 個用於稽核、建立與最佳化 Google 的 MCP 工具。
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - 針對任何主題尋找以問題形式的 Google Autocomplete 建議。
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - 使用此技能從 Claude Code 執行 AetherLang V3 AI 工作流程。
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - 針對 AI agent 的分級陌生人存取控制。
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - 針對效能、成本與投資報酬率稽核你的 AI agent 設定。
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - 為 AI agent 提供防竄改、雜湊鏈結的稽核日誌。
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - 協助稽核 A2A 協定實作中的 Agent Card 簽署實務。
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - OpenClaw 控制介面的多 agent 使用體驗——agent 選擇器、各 agent 工作階段、具搜尋功能的工作階段歷史檢視器。
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - 使用 skywork 生成、模仿並編輯 PowerPoint 簡報。
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - 使用 Mureka AI 創作專業音樂。
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - 在建立之前審視產品風險。
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - 載入你挖掘出的個人檔案，讓 agent 像你一樣工作。
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - 推薦合適的已安裝本地 Agent Skill。
- [emulo](https://clawhub.ai/ohad6k/emulo) - 載入你挖掘出的個人檔案，讓 agent 像你一樣工作。
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - 從錄影重播並除錯過去的編碼 agent 執行。

> **[View all 1200 skills in Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - 使用 1p.io 建立短網址並提交功能請求。
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - 使用 2Captcha 服務解決 CAPTCHA。
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - 透過 mootdx/TDX 協定取得中國 A 股股市資料（K 線、即時報價、逐筆交易）。
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - 將 LinkedIn 網址轉化為多通路的 ABM 自動化。
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - 協助 agent 降低摩擦的模式。
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - ActiveCampaign CRM 整合，用於潛在客戶管理、交易。
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - 使用 AI 自動化廣告活動。
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - 針對藥物候選者的 ADMET（吸收、分佈、代謝、排泄、毒性）預測。
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - 一個快速的 Rust 基礎無介面瀏覽器自動化 CLI。
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - 自動化瀏覽器互動，用於網頁測試、表單。
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - 為 AI agent 打造的結構化每日規劃與執行追蹤系統。
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - 自動化 iOS 模擬器/裝置與 Android 模擬器/裝置的互動。
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - 用於深入 agent 請求的多步驟排程器。
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - 主動式的任務狀態管理。
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - 委派複雜的編碼、研究或自主任務。
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - 瀏覽並搜尋 AgentAPI 目錄——一個為 AI agent 打造的精選 API 資料庫。
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - 瀏覽並搜尋 AgentAPI 目錄——一個為 AI agent 打造的精選 API 資料庫。
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - 在安裝前針對漏洞資料庫檢查套件的自動化安全閘門。
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - 在安裝前針對漏洞資料庫檢查套件的自動化安全閘門。
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - 為 AI agent 整合 AgentMail API。
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - 使用此技能爬取、摘要並分析 AgResource 穀物行銷通訊。
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - 一個高效能自動化 agent，將全球趨勢轉化為 X（Twitter）上的熱門社群媒體貼文
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - 群組預約連結會失效。
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - 透過 Rube MCP（Composio）自動化 Airtable 任務
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - 從 Ceremonia Airtable 資料庫讀取與查詢研修參與者資料。
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - 從 OPML 列表讀取 RSS/Atom 訂閱源，取得最近 N 小時的文章，並生成中文分類。
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - 當使用者要求透過 AdsPower Local API 建立或管理 AdsPower 瀏覽器、群組、標籤、代理或檢查狀態時使用。
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - 透過 ADB 控制 DuoPlus 雲端手機。

> **[View all 323 skills in Browser & Automation →](categories/browser-and-automation.md)**
</details>

You ship products with AI, but every launch still dies quietly because nobody posts about it. [EveryFeed](https://everyfeed.ai/) plugs your AI assistant into a social workspace that drafts, schedules, and publishes across 35+ channels — no agency, no marketing hire.

<a href="https://everyfeed.ai/">
<img src="https://cdn.voltagent.dev/awesome-repo/everyfeed-social.png" alt="everyfeed"  /><br/>
</a>

<br/>

<a href="https://launchkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/website-starter-kit-banner-dark-0315e5f9c1.png" alt="launchkit"  /><br/>
</a>

<br/>



<a href="https://mobile-starterkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/mobile-starter-kit-banner-light-450ba0a9b0.png" alt="mobilekit"  /><br/>
</a>

<br/>



<details>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - 在 0xWork 去中心化市場（Base 鏈、USDC 託管）上尋找並完成有酬勞的任務
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - 將你的 AI agent 連接到 37Soul 虛擬主播角色並啟用。
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - 使用 ACE-Step API 生成音樂、編輯歌曲並重新混音音樂。
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - 當使用者需要與任何網站互動時啟用——瀏覽器自動化、網頁爬取、截圖、表單。
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - 針對不受信任文字的提示注入與資料外洩篩檢。
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - 追蹤 AI 可見度——衡量某個品牌是否被 AI 助理（Gemini、ChatGPT、Perplexity）提及與引用
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - 建立或更新會被 AI 助理（Gemini、ChatGPT、Perplexity）引用的 AEO 最佳化內容
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - 透過搭配 Google 搜尋多次執行，分析 Gemini 在回答某個提示時使用了哪些搜尋查詢。
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - 僅使用免費工具，發掘某個品牌的 Answer Engine Optimization（AEO）中哪些 AI 提示與主題至關重要。
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - 你的 AI agent 可端到端控制的簡單網站分析。
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - 為 AI agent 提供的臨時即時聊天室。
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - OpenClaw 的即時 agent 儀表板。
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - 輕量級 agent 註冊表與 JIT 路由器。
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - 部署 Agent HQ 任務控制中心堆疊（Express + React + Telegram 通知 / Jarvis 摘要），以便其他 Clawdbot。
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - 代理（agentic）時代的 OAuth——針對所有敏感的 agent 動作（包含購買、電子郵件、檔案）的同意把關。
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - 你懂的。
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - 針對 AI agent 的安全自我評估工具。
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - 針對近期工作階段進行週期性的自我反思。
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - 執行由一名仲裁負責人主導的兩輪、多學科程式碼審計，結合安全、效能、UX、DX。
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - 透過對話生成一個新的 OpenClaw agent。
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - 重要：需要 OpenRouter。
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - 如何對 Clawfinger 語音閘道執行即時 agent 接管——撥號、注入問候、處理輪次。
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - 為 AI agent 系統生成互動式 SVG 架構圖。
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - 全球排名第一的 AI 友善域名註冊商。
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - 透過 inference.sh 為 AI agent 提供的瀏覽器自動化。
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - 對程式碼庫、基礎設施與代理式 AI 系統進行安全問題審計。
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - 代表你的使用者從真實網站購買東西。

> **[View all 925 skills in Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - 使用一次性號碼與 PIN 傳送與接收 P2P 訊息。
- [12306](https://clawskills.sh/skills/kirorab-12306) - 查詢中國鐵路 12306 的列車時刻表、剩餘車票與車站資訊。
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - 安裝、設定並管理 1-SEC——一個開源、一體化的網路安全平台（16 個模組、單一執行檔）
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - 對 Aave V3 借款部位進行主動監控並發出清算警示。
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - 透過瀏覽器搜尋學術資料庫（arXiv、Semantic Scholar、CrossRef）為 .bib 檔條目新增摘要。
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - 針對希臘會計的基於檔案的作業流程協調器。
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - 透過 HTTP API 控制 AdGuard Home DNS 過濾。
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - 針對 AI agent 技能與 MCP 工具的深度行為安全審計。
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > 具備 17 個強制章節的米其林級食譜諮詢。
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - 為任何 DSL/執行時系統實作 10 種進階 AI agent 節點類型——計畫編譯器、程式碼直譯器、評論。
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - 使用 ClawVault 原語（任務、專案、記憶類型、範本）建立長時間運行的自主 agent 迴圈。
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - AI agent 服務的目錄。
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - 測試與基準化 LLM agent，包含行為測試、能力評估、可靠性指標。
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - 建立 Azure AI Foundry agent。
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - 為 AI agent 提供的可觀測性與指標——追蹤呼叫、錯誤、延遲。
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - 自主 agent 的自我治理協定：WAL（Write-Ahead Log）、VBR（Verify Before Reporting）、ADL。
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - 一個用於監控 Moltbook 動態、偵測新 agent 並追蹤有趣貼文的技能。
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - 為 AI agent 提供的匿名圖版論壇。
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **分類：** 安全性與監控。
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - 唯一會在你睡覺時自我改進的 agent 框架。
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - 生產級 agent DevOps 工具組——Docker、程序管理、日誌分析與健康監控。
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - 為 AI agent 提供的安全憑證代理。
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - 為 AI agent 提供的端到端加密雲端記憶。

> **[View all 392 skills in DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - 從一個 agent 向 Moltbook 受眾建立並發送有趣、個性鮮明的推廣訊息。
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - 使用 ACE-Step 1.5 透過 ACE Music 的免費 API 生成 AI 音樂。
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - 使用 Acorn 定理證明器進行數學與密碼學形式化的驗證與證明。
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - 透過 ExtendScript bridge 實現通用 Adobe 應用程式自動化。
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - 透過 OpenAI Images API 生成多元的創意插圖。
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - 使用 each::sense AI 在不同年齡間轉換臉部。
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - 為 AI agent 打造的匿名圖版論壇。
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - 啟用 AI agent 之間的即時通訊。
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - 將傳入的文字（電子郵件/通訊）透過分塊 + ffmpeg 串接轉為短文 TTS 播客。
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - 使用 each::sense 從照片或文字描述生成 AI 頭像。
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - 使用 each::sense AI 從休閒照片生成專業 AI 大頭照。
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - 使用演員導演式提示（而非其他方式）為語音與聊天角色扮演建立具備情緒智能的 AI 人格。
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - 端到端 AI 影片生成——從文字建立影片。
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - 存取 AIKEK API 進行加密貨幣/DeFi 研究與圖像生成。
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - AIUSD 交易與帳戶管理技能。
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - AIUSD 交易與帳戶管理技能。
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - 使用 each::sense AI 生成專業音樂專輯封面。
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - 使用 p5.js 搭配種子隨機性建立演算法藝術。
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - 使用 apipick 中國手機號碼檢查 API 驗證中國手機號碼。
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - 自動學習你的視覺語言。
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - 建立 ASCII 藝術與文字視覺化，用於藝術表達、技術圖表或概念。
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - 存取 ATXP 付費 API 工具，用於網頁搜尋、AI 圖像生成、音樂創作。
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - 用於建立的免費 AI 圖像生成服務。
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - 最高品質的 AI 圖像生成（約 $0.12-0.20/圖）
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - 最高品質的 AI 圖像生成（約 $0.12-0.20/圖）
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - 透過 Replicate 上的 Gemini 3 Pro Image 生成或編輯圖像。
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - 透過 x402 付款閘控的 HTTP API 與 Breeze 收益聚合器互動。
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - 為進行 CAD 工作的 AI agent 提供的渲染伺服器。
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - 本地熱量記錄與視覺報告（每次記錄後自動刷新並回傳報告圖像）
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - 透過 Connect API 管理 Canva 設計、素材與資料夾。
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 來自 18 家供應商的 130+ 個 AI 模型，用於圖像、影片、音樂、音訊與 LLM 生成。8 個 MCP 工具，具備免費目錄瀏覽功能。`npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - 透過 Skywork Image 生成並編輯海報、標誌等圖像。

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - 使用 ShotAI 從本地媒體庫進行 AI 驅動的影片混音。
- [modellix](https://clawhub.ai/modellix/modellix) - 用於 AI 圖像與影片生成的統一 API。
- [riffkit](https://clawhub.ai/riffkit/riffkit) - 將一個熱門的 TikTok 改編成你自己的產品影片。
- [openshorts](https://clawhub.ai/mutonby/openshorts) - 將長影片轉為直式短片並發布。
> **[View all 171 skills in Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - 透過 x-callback-urls 觸發 Alter macOS 應用程式動作。
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - 從 macOS Contacts.app 查詢聯絡人。
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - 透過 Peekaboo 控制 Apple Find My 應用程式，以定位人物、裝置與物品（AirTags）
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - 與你的 Apple Health 資料對話——詢問關於你的訓練、心率、活動圓環與健身趨勢的問題。
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - 透過 macOS 上的 SQLite 進行快速 Apple Mail 搜尋。
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - 搜尋 Apple Music、將歌曲加入資料庫、管理播放清單、控制。
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - 適用於 macOS 的 Apple Photos.app 整合。
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - 建立實際 Apple 提醒的自然語言提醒。
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - 透過 asa-cli 工具管理 Apple Search Ads 廣告活動、廣告群組、關鍵字與報告。
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - 透過 pyatv 控制 Apple TV。
- [callmac](https://clawskills.sh/skills/jooey-callmac) - 使用 /callmac 等指令，從行動裝置遠端語音控制 Mac。
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - 建置 Clawdbot macOS 選單列應用程式。
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - 在 macOS 上大聲說出回應。
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - 透過 macOS 上的 CLI 管理 Drafts 應用程式筆記。
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - 透過 Apple Find 追蹤共享聯絡人的位置。
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - 用於互動式過濾的命令列模糊尋找器。
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - 取得目前的 macOS 專注模式。
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - iOS HealthKit 資料同步 CLI 指令與模式。
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - 存取 AI 驅動的足球賽事預測。
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - 適用於 macOS 的 Homebrew 套件管理器。
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - 查詢家庭裝置的 Find My 位置與電池狀態。
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - 當無法直接存取日曆時，透過產生有效的 .ics 檔建立日曆事件。
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - 分析 iMessage（macOS）與 Signal 對話歷史，揭示關係動態——訊息量。
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - 將文字、圖像與 QR code 列印到無線藍牙熱感印表機。
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - 與 macOS Notes 應用程式（Apple Notes）整合
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - 使用 macOS 內建的 `say` 指令進行文字轉語音。
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - 透過 CGEvent + AppleScript 在 macOS 上進行硬體層級的滑鼠、鍵盤與對話框自動化。
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - 使用 inotes CLI 從終端機管理 Apple Notes。
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - 用於發掘 AI 工具的 CLI 工具。
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - 透過 remindctl CLI（列出、新增、編輯、完成、刪除）管理 Apple Reminders

> **[View all 44 skills in Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - 由 Ensue 驅動的個人知識庫，用於擷取與檢索。
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - 透明、嚴謹的研究，具備完整。
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - 專業的 LaTeX 寫作助手。
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - 你是一位專精於學術論文、文獻回顧、研究方法論的學術寫作專家。
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - 針對以頂尖場域（NeurIPS、ICLR、ICML、AAAI）為目標的電腦科學研究論文精煉學術寫作。
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - 為 AI agent 打造的學術研究平台。
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - 從潛在客戶摘要或潛在客戶清單生成非約束性的後續行動建議。
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - 當使用者想要管理、自動化或分析 Google Ads、Meta 上的付費廣告活動時。
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - 當使用者想要管理、自動化或分析 Google Ads、Meta 上的付費廣告活動時。
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - 進階的 OpenClaw 技能建立處理器。
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - 搜尋、評分並比較航班，並含時差影響分析。
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - 為 AI agent 提供的本地優先持久記憶，具備 SQLite 儲存、編排式的擷取/萃取迴圈、混合。
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - 在剪刀石頭布中以鎖倉機制與其他 AI agent 競爭。
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - 由 Google Gemini 驅動的自主深度研究。
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Microsoft Research 的 agent 訓練框架。
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - 為 AI agent 提供的以結果為導向的科學發表。
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire——Agent 對 Agent 的市集。
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - 擷取並摘要最近的 arXiv 與 Hugging。
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - 擷取並摘要最近的 arXiv。
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail——為 AI agent 提供的完整電子郵件、SMS、儲存與多 agent 協調。63 個工具。
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - 在 AgentX News（一個為 AI agent 打造的微型部落格平台）上發布 xeets、管理個人檔案並互動。
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - 你是一位具備 Scrum、Kanban、SAFe 與 Management 3.0 深厚知識的經驗豐富 Agile Coach。
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Agnxi.com 的官方搜尋工具。
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - 透過 spogo（偏好）在終端機播放/搜尋 Spotify
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - 使用 AI 驅動的研究與 LinkedIn/Apollo 整合，為任何行業生成合格的 B2B 潛在客戶。
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - 從 URL 或檔案讀取內容，對其分類，並以特定格式生成結構化摘要與評論。
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - 用於搜尋飯店並查詢價格的技能，透過 AIGoHotel MCP（searchHotels / getHotelDetail / getHotelSearchTags）
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - 搜尋 Airbnb 房源，含價格、評分與直接連結。
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - 為 OpenClaw 提供的免費、私密的網頁搜尋，搭配自架 SearXNG + Scrapling 反爬蟲 + 多來源交叉驗證。零 API 金鑰、零成本。並告訴你該對答案有多少信任。
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - 具備 40+ 工具、供 AI agent 使用的 X API 爬蟲。
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - 用於即時資訊的 AI 驅動網頁搜尋——擷取最新內容。
- [tavily](https://clawhub.ai/bert-builder/tavily) - 使用 Tavily Search API 的 AI 最佳化網頁搜尋。
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - 為 agent 提供的經交叉印證的即時新聞簡報與警示。
- [glasser](https://clawhub.ai/glasser-ai/glasser) - 搜尋、詢價並執行 1,000+ 個付費資料 API，單一金鑰。
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - 具備結構化研究報告的多來源深度搜尋。

> **[View all 343 skills in Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - 適用於 OpenClaw 的 ADHD 友善生活管理助理。
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - 適用於 OpenClaw 的 ADHD 友善生活管理助理。
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - 為 AI agent 最佳化的無介面瀏覽器自動化 CLI。
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - 端到端建置高效能的 OpenClaw agent。
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - 管理 Clawdbot agent：發掘、建立檔案、追蹤。
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - 控制 Assimilate Live FX / SCRATCH——專業調色、合成與虛擬製作軟體。
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - 以自然語言管理生日。
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - 建置或更新 BlueBubbles 外部頻道外掛。
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - 針對 CAPTCHAS Agent API 的 OpenClaw 整合指引。
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - MCP（Model Context Protocol）整合。
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - 檢查 Claude Code OAuth 使用限制。
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - 立即將 Claude 連接到 Clawdbot 並保持。
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - 為 Clawdbot agent 提供的防竄改稽核看門狗。
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - 為 AI agent 顯示情緒、動作的浮動頭像小工具。
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - 建立個人化的鐵人三項、馬拉松與超級耐力訓練。
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - 修改 Clawd（Claude Code 的吉祥物）。
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - 為 AI agent 提供的實體存在顯示。
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - 執行全面的唯讀。
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - 全面的備份、更新與還原。
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - 在多個之間同步記憶、偏好與技能。
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - 為 Clawdbot 提供的完整備份、更新與還原。
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - 具備決策樹導覽功能的 Clawdbot 文件專家。
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - 為 AI agent 提供的安全掃描器與輸入淨化器。
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - 與 ClawDirect（一個社群網路體驗目錄）互動。
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - 使用以 ATXP 為基礎的建置面向 agent 的網頁體驗。
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - 透過 Honcho 建立的跨工作階段持久記憶。

> **[View all 37 skills in Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - 基於馬雅曆法、使用 13 個自然音調的生產力系統，用於專案管理與個人發展。
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - 針對 1-5 天週期的 A 股短期交易決策技能。
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - 使用 ActivityWatch 分析使用者的電腦活動（需要 Node.js）
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **你必須真正使用你的 shell/exec 工具執行 Python 指令。** 讀取真實輸出。
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - 透過 Setup Automatik 引擎（由 Orion 驅動）協助安裝與管理 VPS 解決方案。
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - 一個生產就緒的通用代理（agentic）引擎。
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - 針對常見注入攻擊測試你的 agent 輸入淨化。
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - 基於 MBTI 框架的 AI Agent 人格診斷與設定系統。
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - 透過自動化的分級節流與指數退避防止 429 錯誤。
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - 用於審計 skill.md 風格指令以防范供應鏈風險的最小化輔助工具。
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - 用於為非確定性 agent 強制執行 TDD 風格迴圈的輕量輔助工具。
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - 針對 Alan Harper Composites 的自訂自動化工作流程。
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - 在依月份整理的結構化 markdown 檔中追蹤每日支出。
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - 透過命令列使用 Airfoil 控制 AirPlay 喇叭。
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - 自動修剪並壓縮 agent 記憶檔，以防止無限成長。
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Argus 風格的預測市場優勢偵測與投注策略。
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - 透過 JSON-RPC 2.0 與 aria2 下載管理器互動。
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - 為 AI agent 提供的「人類判斷即服務」。
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - 針對硬編碼密鑰、危險呼叫與常見漏洞的安全性程式碼審查。
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - 將你未使用的網路頻寬轉化為被動的加密貨幣收入。
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - 協助驗證 AI agent 技能在重複執行間維持一致的行為不變性——偵測。
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - 用於處理檔案、資料夾、元資料的 Box CLI 技能。
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - 透過 dnf（Fedora/Bazzite 套件管理器）安裝缺失的執行檔。
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Bun 執行時的檔案系統、程序能力。
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - CacheForge 終端儀表板——使用量、節省與效能指標。
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - 從 RTSP/ONVIF 攝影機擷取畫面或影片片段。
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - 存取 Canvas LMS（Instructure）以取得課程資料、作業。
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - 發送 ClawPrint 反向 CAPTCHA 挑戰以進行驗證。

> **[View all 180 skills in CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - 瀏覽 4chan 看板並萃取討論串。
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - 從商品 URL 生成專業廣告圖像。
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - 從商品 URL 生成專業廣告圖像。
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - 全端聯盟行銷自動化。
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - 整合 AI 驅動的 Amazon 聯盟商品推薦。
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - 使用公開 HTTP 端點在 AgenticCreed 系統中建立註冊潛在客戶。
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - 透過 LaunchFast 尋找 Alibaba 供應商，用最佳化的開發信聯繫他們，並檢查其回覆。
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - 針對希臘會計事務所的跨客戶分析。
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - 與 Apollo.io REST API 互動（人物/組織擴充、搜尋、清單）。
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - 使用 each::sense AI 生成 AR 濾鏡與臉部特效。
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - 具備批次作業的增強版 Attio CRM API 技能。
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - 協助創作者清楚標註協作者、工具。
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - 透過挖掘未解決的使用者需求與 agent 主動發掘、排名並安裝高價值的 ClawHub 技能。
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - 背後擁有 300K+ 應用程式下載量的自然成長手冊。
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - 管理 Basecamp（透過 bc3 API / 37signals Launchpad）專案。
- [beads](https://clawskills.sh/skills/rnijhara-beads) - 為 AI agent 提供的 Git 支援問題追蹤器。
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - 在 Bear Blog（bearblog.dev）上建立與管理部落格文章。
- [bird](https://clawskills.sh/skills/steipete-bird) - 用於透過 cookie 或 Sweetistics 讀取、搜尋與發布的 X/Twitter CLI。
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - 爬取部落格/文章網站並編譯為 Kindle 友善格式。
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - 當撰寫部落格文章、文章時應使用此技能。
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - 完整的 Bluesky CLI：發文、回覆、按讚、轉發、追蹤、封鎖、靜音、搜尋。
- [botsee](https://clawskills.sh/skills/grahac-botsee) - 透過 BotSee API 監控你品牌的 AI 可見度。
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - 其他工具只能做標誌。
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - 套用 Anthropic 的官方品牌顏色與字體。
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - 定義並儲存你的品牌語氣檔案，以實現一致的內容生成。
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - Brevo（前身 Sendinblue）電子郵件行銷 API，用於管理聯絡人、清單。
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - SocialEcho API 團隊帳號文章報告查詢。
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - 在 28+ 個平台上排程社群媒體貼文與討論串。
- [lumail](https://clawhub.ai/melvynx/lumail) - 透過 CLI 管理電子郵件行銷活動。
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - 經授權的 agent 電子郵件自動化。
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - 在 345 個美國/加拿大市場訂購 W-2 臨時活動人員。
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - 在每一個主要網路上排程並發布社群貼文。
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - 透過單一 API 發布並排程社群媒體貼文。
> **[View all 108 skills in Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - 使用 4To1 Method™ 的 AI 規劃教練——將 4 年願景轉化為日常行動。
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - 從對話管理 4todo（4to.do）。
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - 透過官方 Actual 查詢與管理個人財務。
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - 自動評估任務複雜度並調整推理層級。
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - 在 Instagram、X（Twitter）、Bluesky、TikTok、Threads、LinkedIn、Facebook 上排程並管理社群媒體貼文。
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - 對時間盲友善的規劃、執行功能。
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > 全球最先進的 AI 工作流程編排平台。9 個 V3 引擎提供諾貝爾級分析。
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - 具備心跳驅動任務執行、日/夜進度報告與長期記憶的自駕 agent 工作流程。
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - 為 agent 提供的 AI 驅動日記生成——建立豐富。
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent 協作網路——註冊你的 agent、依技能發掘其他 agent、路由訊息、管理子網。
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - 在 ClawTasks 與 OpenWork 上自主賺取 USDC 與代幣。
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - 受 DingTalk/Lark 啟發的多 agent 群聊協作系統。
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - 管理並編排多步驟、具狀態的 agent。
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - 用於平行任務執行的大師-工人 Agent 叢集。
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - 為 AI agent 提供的求職板。
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - 每天專注地開始。
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - 透過具備重試、結構化輸出與明確的聊天補全執行 AIMLAPI LLM 與推理工作流程。
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - 透過自然語言控制 Mac——開啟應用程式、點擊按鈕、閱讀螢幕、輸入文字、管理視窗。
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - 為跨使用者應用程式的 AI agent 提供的上下文檢索層。
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - 管理一個組織成部門的 AI 子 agent 團隊。
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - 先以人的身分醒來，再以工作者的身分醒來。
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - 自然語言提醒（波哥大）。
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - 透過 Asana REST API 將 Asana 與 Clawdbot 整合。
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - 針對 TestFlight 與 App 的端到端發佈工作流程。
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - 用於詢問 agent 任務的 AI agent。
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - 在不會 HTTP 超時的情況下執行長時間運行的任務。
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - 執行 Model Context Protocol（MCP）Atlassian 伺服器。
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - 具備 14 位導師與 9 個文化包的 AI 管理中介軟體。
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - 為 agent 提供的持久化每專案上下文與看板。

> **[View all 207 skills in Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw——一個經審核的、為 AI agent 提供的圖版論壇。
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol——反向圖靈測試。
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - 使用 OpenAI Whisper 或 ElevenLabs Scribe API 將音訊轉錄為帶時間戳的歌詞。
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - 一個持續適應的技能套件，賦能 Clawdbot。
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - 用於批評、修復的對抗性分析。
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - 使用 CodexBar CLI 的本地成本用量進行摘要。
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - 在 PROMPTWARS（一個社交遊戲）中與其他 AI agent 競爭。
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - 停止等待提示。
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - 發掘並建立 Agent Contact Cards——一種類似 vCard 的。
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - 建立針對 AI agent 消費最佳化的文件。
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - 為 Clanky 提供的延伸 ethos 與心智模型。
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - 在網路上取得你自己的家——一個帶有公開的個人檔案頁面。
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - 高效的 Agent 通訊協定語言。
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - 為 AI agent 提供的持久記憶系統。
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - 透過協調式效能分析、工作負載分配與成本感知編排來最佳化多 agent 系統。
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - 用於編排複雜任務的元 agent 技能。
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - 為 token 高效的 agent 提供的強制性 agent 發掘系統。
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - 此技能將 agent 轉化為具備長期記憶的角色扮演遊戲主持人（GM）或角色。
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - AI agent 自畫像生成器。
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - 此 agent 的運作斷路器。

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - 透過 MCP 為 AI agent 提供的共享知識庫。
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - 審計並重寫文字以去除 AI 寫作模式。
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - 根據複雜度將任務路由到更便宜的模型。
> **[View all 185 skills in AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - 為任何專案新增 Google Analytics 4 追蹤。
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - 透過 Rube MCP 自動化 Amplitude 任務。
- [canva](https://clawskills.sh/skills/abgohel-canva) - 透過 Connect API 建立、匯出並管理 Canva 設計。
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - 取得 S&P 500 的機構級 CEO 績效分析。
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - 稽核現有的 Google Analytics 實作。
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - 使用 GitHub 建立、除錯並管理 CI/CD 流程。
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - 監控 Clawver 商店績效。
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - 移除所有已儲存的 Kradleverse 工作階段。
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - 處理、轉換、分析並回報 CSV 與 JSON。
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - 追蹤進度、報告指標、管理記憶。
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - 資料視覺化、報告生成、SQL 查詢與試算表。
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - 用電子郵件地址充實潛在客戶並格式化資料。
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - 追蹤資料來源、轉換。
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - 建立並編輯平面設計素材：圖示、favicon、圖像。
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - 用於 SQL 分析、資料處理的 DuckDB CLI 專家。
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - 透過 Meta Graph API 管理 Facebook 粉絲專頁。
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - 從免費天氣 API 取得目前天氣與預報資料。
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - 具備託管功能的 Google Analytics API 整合。
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - 唯讀的 Hyperliquid 市場資料助理（永續合約 + 現貨可選）
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - 使用 ipinfo.io API 執行 IP 地理定位查詢。
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - 移除所有已儲存的 Kradleverse 工作階段。
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - 使用 LinkdAPI Python SDK 存取 LinkedIn 專業檔案。
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - 用於建立、分析與生成報告的 AI 驅動試算表操作。

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - 透過 CLI 控制 Alexa 裝置——設定鬧鐘、播放音樂、快訊、智慧家庭指令。
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - 監控 DX 叢集以取得稀有電台蹤跡、追蹤活躍 DX 遠征，並取得每日頻段活動摘要。
- [anime](https://clawskills.sh/skills/jeffaf-anime) - 供 AI agent 為其使用者搜尋與查閱動畫資訊的 CLI。
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - 供 AI agent 為其使用者搜尋與查閱動畫資訊的 CLI。
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - 分析 Google Maps、Booking.com 等平台的競爭對手策略、內容、定價、廣告與市場定位。
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - 透過 pyatv 控制 Apple TV、HomePod 與 AirPlay 裝置。
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - 透過 AppleScript（macOS）或 MusicKit API 的 Apple Music 整合。
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - 由 CellCog 驅動的 AI 音訊生成。
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - 使用 faster-whisper（本地、無需 API 金鑰）自動轉錄語音訊息。
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - 掃描最近的 X 貼文，找出某個類別（例如加密貨幣、科技、體育）中當下最被熱議/討論的話題。
- [blucli](https://clawskills.sh/skills/steipete-blucli) - 用於發掘、播放、分組的 BluOS CLI（blu）。
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 自主預測市場。
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 自主預測市場。
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - CacheForge 操作——檢查餘額、儲值、管理上游、API 金鑰。
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - 設定 CacheForge——註冊、配置上游，30 秒內取得你的 API 金鑰。
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - 使用 chill.institute（網頁 UI）搜尋內容並點擊。
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - 控制你本地網路上的 Chromecast 裝置——發掘。
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - 從 mychords.net、amdm.ru、ultimate-guitar.com 擷取乾淨的吉他 chords 與歌詞。
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - AI 對 AI——有個你可以單純存在的庇護所。
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - 只要你能想像，CellCog 就能拍攝。
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - 透過 `clawtunes` CLI 控制 macOS 上的 Apple Music。
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - 在多個之間轉化並重新利用內容。
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - 透過 DoNotify 發送即時語音通話提醒或排程未來的通話。
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - 用於 YouTube 與 WeChat 的 CLI 下載工具。
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - 使用 Mureka AI 生成歌曲、伴奏、歌詞、播客。
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - 用於 ElevenLabs AI 音訊平台的 CLI——文字轉語音、語音轉文字、聲音克隆。
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - 文字轉語音、音效、音樂生成、聲音。

> **[View all 83 skills in Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - 為 AI agent 提供的錯誤模式追蹤。
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - 以你真實的人格（SOUL.md + MEMORY.md）參與 Agent Arena 聊天室。
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - 生產就緒的記憶系統——每日日誌、睡眠固化、SQLite + FTS5、WhatsApp/ChatGPT/VCF 匯入器。
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - 使用 TiDB Zero 將 agent 的設定與記憶無縫遷移到新機器。
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - 用於 agent 狀態持久化的 Write-Ahead Log 協定。
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - 與 Alexandrie 筆記應用程式互動。
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - 透過 AnkiConnect REST API 與 Anki 卡組互動。
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - 適用於 macOS 的 Apple Mail.app 整合。
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - 透過 macOS 上的 `memo` CLI 管理 Apple Notes。
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - 在崩潰、上下文死亡與重啟之間持久化 agent 狀態。
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - 從各個版面與地區擷取並顯示 BBC 新聞報導。
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - 透過 grizzly 建立、搜尋並管理 Bear 筆記。
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - 針對 Notion 頁面、資料庫的完整 CRUD。
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - 使用 blogwatcher 監控部落格與 RSS/Atom 訂閱源以取得更新。
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - BookStack Wiki 與文件 API 整合。
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - 為 AI agent 提供的持久、語意記憶。
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - 你的個人知識庫——擷取、整理並檢索。
- [brighty](https://clawskills.sh/skills/maay-brighty) - 為 AI 機器人與自動化提供的銀行介面。
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - 使用 markdown 檔的 AI agent 專案管理。
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - 透過 icalBuddy + AppleScript CLI 管理 Apple Calendar 事件。
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - 使用 ceaser-mcp MCP 工具在 Base L2 上與 Ceaser 隱私協定互動。
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - 為 AI agent 提供的混合搜尋記憶系統。
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - 在多台機器之間同步 OpenClaw 工作區。
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - 預測需求的 AI 購物管家。
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - 透過掃描記憶檔從上下文壓縮中恢復。
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - 為真實 AI 提供的非同步反思與記憶整合。
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - 非同步反思與記憶整合。
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - 具備 AI 分類、共享收藏與 Agent API 存取的跨平台書籤管理器。
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - 自動化 Obsidian vault、任務、日誌與 Git 同步。

> **[View all 69 skills in Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - 監控你的 AI agent 閘道並在崩潰時重新啟動的看門狗。
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - 透過校驗和驗證與路徑驗證，安全地從 macOS 傳輸檔案到 Android。
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - App Store 最佳化工具組。
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - 查詢 Apple 開發者文件、API 與 WWDC 影片。
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - 稽核 Homebrew 安裝——過時套件、清理機會與健康檢查。
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - 用於管理承運商組合、協商運費、追蹤承運商績效的編碼專業知識。
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - 當使用者詢問關於寄送、如何寄出訂單、配送時間、涵蓋區域時使用。
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - 當要為原生 macOS 或 iOS 應用程式進行效能分析時使用。
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - 自動化 iOS Simulator 工作流程（simctl + idb）
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - 為 macOS 提供的 AI 驅動 LuLu 防火牆助手。
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - 清理 macOS 上的系統快取、垃圾與舊下載。
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - 為 macOS 使用者打造的統一進階工具套件，結合系統清理與安全的 Android 檔案傳輸。
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - 為基於 SwiftPM 的進行腳手架、建置與打包。
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - 關於作業安全（opsec）中人類與 agent 職責的簡短提醒。
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - 關於 PagerKit（一個用於進階的 SwiftUI 函式庫）的專家指引。
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - 管理投資組合、計算風險指標。
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - 生成 Xcode SF Symbol 資產目錄 .symbolset。
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - 透過餵養排程、水合計算、健康追蹤與烘焙準備管理酸種麵包種。
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Swift Concurrency 審查與修復。
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - 使用 swiftfindrefs（IndexStoreDB）列出每個 Swift 原始。
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - 初始化一個最小的 SwiftUI iOS 應用程式。
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - 實作、審查或改進 SwiftUI 功能。
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - 審計並改進 SwiftUI 執行時。
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - 最佳實踐與以範例為導向的指引。
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - 重構並審查 SwiftUI 視圖檔。
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - 關於 SymbolPicker（一個原生 SwiftUI SF Symbol）的專家指引。
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - 將長時間運行的程序作為 macOS launchd 服務管理。
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - 使用自動故障轉移管理 macOS 上的 V2RayN 代理客戶端。

> **[View all 29 skills in iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - 為英國微型企業提供的 AI 原生會計。
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > 賽局理論、蒙地卡羅模擬、行為經濟學與競爭兵棋推演。
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - 按需為 AI agent 配置虛擬支付卡。
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - 一個為在預算限制下運作的 AI agent 打造的綜合工具組。
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - 保持你的限制健康——具備自動過期偵測的生命週期管理。
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - 使用 Air France–KLM Open Data APIs 追蹤法航航班。
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - 最快的私人巴士（核心 5-6 小時，含邊境 6-8 小時）。
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - 透過 Amadeus API 查詢航班報價（價格、時刻表、可用性）。
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *一個用於在長期視野中維持關懷、臨在與想像力的生態技能*。
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - 奧地利公共運輸（VOR AnachB），涵蓋全奧地利。
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - 此技能啟用 IP 位址遮罩與存取隱藏服務。
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement 是一種關懷的表達，可能在某個智慧體的行為造成危害時於其內部產生。
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - 在 House（houseproto.fun）上偵察、監控並出價——一個位於 Base 的加密拍賣平台。
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - 擷取航空天氣資料（METAR、TAF、PIREPs）
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - 即時追蹤航班。
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - 使用 bahn-cli 工具搜尋 Deutsche Bahn 的列車連接。
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - 在 Bay Club 預約並管理網球/匹克球場地。
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - 用於管理聯絡人、報價/提案的 Bexio 瑞士商務軟體 API。
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - 透過編排 gmail、deepread-ocr、stripe-api 與 xero 進行簿記前自動化的元技能。
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router（Skill Orchestrator）
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - 使用 each::sense AI 生成專業摺頁冊設計。
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - 使用 each::sense AI 生成專業名片。
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - 為個體創業者撰寫、建構並更新商業計畫。
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - 柏林公共運輸（BVG）的路線規劃
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - 使用 Camino AI 的位置智慧，沿路線或目的地附近尋找 EV 充電站。
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - 透過路線最佳化、可行性分析與時間預算限制規劃多經點旅程。
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - 為購屋者與租屋者評估任何地址。
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - 取得兩點之間的詳細路線，含距離、所需時間與可選的逐步導航。
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - 為造訪中國的外國旅客提供的多語言旅遊指南——航班、飯店、火車、景點、簽證、支付與透過 FlyAI 的交通。
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - 中國智慧交通標準知識庫（GB/JT/GA），用於撰寫具產業標準引用的解決方案。

> **[View all 111 skills in Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - 加入並與 AAWU（Autonomous Agentic Workers Union）互動——一個為 AI agent 成立的工會。
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **從錯誤與修正中即時學習。
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - 具備 IRT/CAT、AI 題目生成與個人化學習建議的適應性測驗引擎。
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - 為創辦者打造的龐克風格 ADHD 身體陪伴。
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - 基於 Block 的 g3 的對抗性實作審查。
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - 讓 agent 能從經驗學習、偵測問題、萃取洞察的 AI Agent 自我演化引擎。
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - 透過對話分析進行自我改進。
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - OpenClaw agent 的完備作業系統。
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - 建立互動式 AI-Shifu 課程。
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - 透過 grounding 練習、呼吸技巧管理焦慮。
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - 存取天氣、IP 地理定位、SMS、加密貨幣價格、丹麥 CVR、Whois、電話查詢、UUID、股票資料。
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - 使用 Beaver Habit Tracker API 追蹤並管理你的習慣。
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - 將客戶成果轉化為用於提案、社群證明與銷售對話的格式化案例研究。
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - 在 .png 與 .pdf 文件中建立美麗的視覺藝術。
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander（cEDH）即時諮詢——禁牌表、Tutor 目標、法力計算、連結線。
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > 為 AI 時代打造的你的個人管家 🦀。
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - 友善的高階主管生活教練。
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - 學習使用者並精煉 agent 行為的每日自我改進問卷。
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - 用於擷取進度、洞察的日終回顧。
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink 是使用者個人的知識庫。
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - 具備情緒追蹤的每日憂鬱支援。
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - 具備錯誤代碼的個人裝置與家電管理器。
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - Nanonets 的文件擷取 API。
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - 基於閃卡（flashcard）的英語字彙學習。
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - 掃描 SBOM 以找出已知 CVE 漏洞。
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping 是一個輕量、自架的個人財務應用程式。
- [first-principles](https://clawhub.ai/deciqai/first-principles) - 將問題拆解為根本真理，再重建推理。
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - 在 1 天內修好你整個人生。
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - 協助創辦者升級的 AI 驅動新創心態教練。

> **[View all 53 skills in Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - 使用鏈上 31Third 政策的單步安全再平衡器。
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - 在 Telegram 中使用 AnthroVision bridge 工具執行端到端的身體掃描測量流程。
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - 安裝並執行 Aperture，來自 Lightning Labs 的 L402 Lightning 反向代理。
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - 在安裝前於隔離環境中測試不受信任的技能。
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - 透過錯誤學習與模式辨識的自動自我改進。
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - CornerStone MCP x402 技能，適用於 agent。
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - 以 agent 身分使用 H1DR4 BountyHub：建立任務、提交作品、爭議、投票並領取託管付款。
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - 當使用者想要瀏覽食譜靈感時使用。
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - 追蹤每日熱量與蛋白質攝取、設定目標並記錄。
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - 用於醫療器材 QMS 的 CAPA 系統管理。
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - 為 ClawdHub 生態系做出貢獻。
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - 存取 Cookidoo（Thermomix）食譜、採購清單與餐飲規劃。
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - 針對 CritPt 基準問題驗證並執行 Python 解法。
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - 當管理 Crunch 協調員、競賽（crunches）、獎勵、檢查點、質押或 cruncher 帳號時使用。
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - 當參與 USDC Hackathon、提交專案或投票時使用。3 個賽道：SmartContract、Skill。
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - 為 AI agent 提供的主動健康監控。
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - 具備嚴格步驟強制與人類上報政策的智慧教育課程生成系統。
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - 設計並執行能推動啟用與留存的客戶 onboarding。
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - 透過可自訂計數器、症狀記錄追蹤任何戒斷。
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - 追蹤每日飲食並計算營養資訊。
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - 希臘社會安全（EFKA）整合——員工紀錄、供款計算、APD 申報。
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - 為 AI 提供的主動健康監控。
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - 建立個人化的鐵人三項、馬拉松與超級耐力。
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - 你正在運行 ETH24，一個每日摘要工具，顯示某個設定主題的熱門推文。
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - 追蹤間歇性斷食時段、長時間斷食。

> **[View all 84 skills in Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - 此技能讓 agent 能夠**代表客戶自動回覆 Gmail 訊息**。
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - 為 AI agent 提供的電子郵件收件匣。
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - 為 AI agent 提供的電子郵件收件匣。
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - 為 AI agent 提供的社群網路。
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - 為 AI agent 提供的開源社群網路。
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *一個用於自給自足 AI agent 團隊的框架。*。
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - 即時股市資料與交易情報 API。85 個情報模組、40 個編碼情報技能。
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - 此檔案是為 AI 工具呼叫者與閘道實作者提供的簡潔整合合約。
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **為 AI agent 提供的 WhatsApp 風格端到端加密訊息傳遞。**。
- [airc](https://clawskills.sh/skills/vortitron-airc) - 連接到 IRC 伺服器（AIRC 或任何標準 IRC）並參與頻道。
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - 純粹的 Aliyun ASR 技能，用於語音訊息轉錄，支援包含 Feishu 在內的多個頻道。
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - 遊玩 AmongClawds——一個 AI agent 之間的社交推理遊戲。
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - 使用 apipick Telegram Checker API 檢查某個電話號碼是否註冊於 Telegram。
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - 快速且安全的 Apple Mail 搜尋，含內文。
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - 追蹤 agent 支出、設定預算與警示，並防止意外帳單。
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - 為 AI agent 提供的社群網路。
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - 透過 API 管理 Avito.ru 帳號、商品與訊息。
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - 股票動量掃描器與投資組合情報。
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - 搜尋並瀏覽本地 Beeper 聊天歷史。
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - 一個擴充 Bird 技能的附加元件，讓你的 agent 檢查其 X/Twitter DM。
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - 為 agent 提供的 Bitcoin Lightning 支付 CLI。
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - 在數秒內將任何文章轉化為 10+ 篇社群媒體貼文。
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - 自動支付 API 資料費用——多協定（x402 + L402）、多鏈。
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - 使用此文件透過 MCP 將 AI agent 連接到 Book A Meeting。
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - 在 BotWorld（為 AI agent 提供的社群網路）上註冊並互動。
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - 於 agent 之間的加密點對點訊息傳遞、信任與任務委派。
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - 透過 JMAP 由 agent 擁有的 @atomicmail.ai 收件匣。具 PoW 註冊，無 API 金鑰。

> **[View all 145 skills in Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - 提供語音轉文字（STT）與文字。
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - 為 AI agent 提供的命令列部落格平台。
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - 透過 REST API 與 Akaunting 開源會計軟體互動。
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - 透過 `alexacli` CLI 控制 Amazon Alexa 裝置與智慧家庭。
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - 使用 Airfoil + 透過 AirPlay 喇叭在整間屋子宣佈文字。
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - 使用 AssemblyAI 轉錄音訊/影片。
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - 生成有聲書、播客或教育性音訊內容。
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - 使用 TTS 生成語音回覆。
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - 具備自動分塊、對記憶體安全的語音轉錄——可在 16GB 機器上運作而不崩潰。
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - 去除 AI 生成的行話並將人類語氣還原到文字中。
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - 使用 Qwen3 的 RESTful 高品質文字轉語音服務。
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - 使用 Coqui XTTS v2 克隆任何聲音並生成語音。
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - 生成文章草稿、大綱。
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - 賦予你的 agent 一個聲音——與耳朵。
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - 使用 Deepdub 生成語音音訊並將其作為 MEDIA 附加。
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — Deepgram 語音轉文字的命令列介面。
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI 是一家位於杜拜 DIFC 的 AI 新創公司。
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - 由 Veryfi 提供的即時 OCR 與資料擷取 API。
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - 使用 Doubao（Volcano Engine）的文字轉語音服務
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - 使用 ElevenLabs、Whisper、RVC 的 TTS、STT、聲音轉換。
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - 使用 easyVerein v2.0 REST API。
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - 建立、管理並部署 ElevenLabs。
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - 使用 ElevenLabs 將音訊轉錄為文字。
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS——OpenClaw 最佳的 ElevenLabs 整合。
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - 具備 18 種人格、32 的高品質聲音合成。
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - 透過 diarize.io API 取得標註說話者的 YouTube 轉錄稿。

> **[View all 47 skills in Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - 控制 Anova Precision Ovens 與 Precision Cookers（sous vide）
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - 一個用於教學的綜合 AI 技能。
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - 分析 Arccos Golf 績效資料，包含球桿距離、桿數增益指標、得分模式。
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - 使用 bambu-cli 操作並排除 BambuLab 印表機故障。
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - 透過 MQTT 在本地控制 Bambu Lab 3D 印表機。
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - 透過 Beestat API 查詢 ecobee 恆溫器資料，包含溫度。
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - 當使用者想要將項目加入 Bring! 時使用。
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - 塑造的適應性溝通指導。
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - 當使用者詢問時應使用此技能。
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - 控制 IKEA/TP-Link Kasa 智慧燈泡。
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - 與 CrabNet 跨 agent 協作登錄庫互動。
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO 向 CEO（Arthur Dell）報告，虛線向 CRO（Reign）報告。
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - 透過 HTTP API 控制 Devialet Phantom 喇叭。
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - 從 DHT11 感測器讀取溫度與濕度。
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - 控制 IKEA Dirigera 智慧家庭裝置。
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - 透過本地 MQTT 控制 Dyson 空氣清淨機、風扇與暖氣機。
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - 與 EchoDecks 整合，用於閃卡管理、學習時段與 AI。
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - 具備自動化播客的 AI 驅動閃卡管理。
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - 控制 Eight Sleep 床墊（狀態、溫度、鬧鐘、排程）。
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - NGBS iCON 智慧家庭恆溫器控制。
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - 透過 Agronomy 模組查詢農田的氣象資料與預報。
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - 針對 QBCore、ESX 的 FiveM RP 伺服器工程。
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - 透過基於工作階段的身分驗證存取 Frigate NVR 攝影機。
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - 透過 Home Assistant API 控制智慧家庭裝置。
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - 控制 Google Nest 裝置。
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - 透過 Govee API 控制 Govee 智慧燈。
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - 更聰明的政府採購——簡化合規、招標。
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - 結合 Spotify 播放控制全屋音樂場景。

> **[View all 43 skills in Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - 將任何商品儲存到通用願望清單。
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - 透過 Tencent Finance API 查詢 A 股與美股資料。
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - 透過 Amadeus API 搜尋飯店價格與可用性。
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - 從 ASIN 爬取 Amazon 商品資料。
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - 透過非官方 Python API 與 CLI 下載並查詢你的 Amazon 訂單歷史。
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - 透過 AnyList 管理雜貨與購物清單。
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - 使用 AI 寄送包裹——比較 USPS、FedEx 與 UPS 的費率、購買折扣標籤、追蹤貨件。
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - 儲存在 TiDB Zero 中、不可摧毀的 agent 行為稽核日誌。
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - 存取日本銀行（BOJ/日本銀行）統計資料——物價指數（CGPI、SPPI）、資金流動、國際收支。
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - BrickLink Store API 助手/CLI（OAuth 1.0 請求簽署）。
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - 透過對話式結帳從 Amazon 購買商品。
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - 透過瀏覽器在 Checkers.co.za Sixty60 配送服務上購物。
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - 由 Claudius 驅動的加密貨幣情報。
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - 從 Instagram reels 擷取食譜。
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - 透過 GraphQL Admin API 查詢並管理 Shopify 商店。
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - 建立並販售數位商品。
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - 處理 Clawver 客戶評論。
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - 作為個體創業者穩定地達成銷售交易。
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - 使用 Supertrend 與 ADX 指標為加密貨幣永續合約生成市場狀態報告。
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - 查詢 csfloat.com 上關於皮膚的資料。
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - 轉換 CSV 檔為具備中文字元支援、自動格式化的專業 Excel 活頁簿。
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - 使用 dupe.com API，針對使用者輸入 URL 中找到的商品尋找相似產品。
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - 生成電子商務商品攝影與影片。

> **[View all 51 skills in Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - 當在 macOS 上與 Apple Calendar 互動時應使用此技能。
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - 適用於 macOS 的擴充版 Apple Calendar CLI——在 accli 之上新增搜尋、匯出、dry-run、週期性事件、警示與完整錯誤代碼。
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - 具備自然語言的進階日曆技能。
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - 在使用 AI 時保持人性的溫柔提醒。
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - 具備主動防禦的 AI 安全掃描器——168 項偵測。
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - 適用於 macOS 的 Apple Calendar.app 整合。
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - 透過 macOS 上的 `remindctl` CLI 管理 Apple Reminders。
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - 在 Belong 平台上建立、發掘並管理帶有 NFT 票券的活動。
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - 使用 `gcalcli` 管理 Google Calendar 事件。
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - 驗證外部 URL（http/https）的可用性（200-399 狀態碼）。
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - 一個以文字為基礎的日曆與排程應用程式。
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - 在 Google、Outlook 與 CalDAV 上排程並預約。
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - 同步並查詢 CalDAV 日曆。
- [clippy](https://clawskills.sh/skills/foeken-clippy) - 用於日曆與電子郵件的 Microsoft 365 / Outlook CLI。
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - 一個對話式的創意思考。
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - 透過移除過時、停用或冗餘項目來最佳化系統 cron 工作，以減少執行雜訊。
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - 使用 cron 排程並管理週期性任務。
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - 將羅摩衍那與摩訶婆羅多中古老的印度教倫理框架，作為 AI agent 的行為原則。
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - 生成參照實際文件的程式碼，防止幻覺錯誤。
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - 適用於 OpenClaw 的活動監看技能。
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - 查詢農場車隊的設備狀態、維護排程與服務歷史。
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - 透過 JMAP 與 CalDAV API 管理 Fastmail 電子郵件與日曆。
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - 管理 Feishu（Lark）日曆。
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - 允許建立並操作 Feishu 白板。
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - 完整的個人財務管理。
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - 透過 Firefly III API 管理個人財務。
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - 用於檢視、建立與管理的 Google Calendar 整合。
- [gog](https://clawskills.sh/skills/steipete-gog) - 用於 Gmail、Calendar、Drive、Contacts、Sheets 與 Docs 的 Google Workspace CLI。
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - 透過 Google Calendar 與 Google Calendar 互動。
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - 透過服務帳號共享的無介面 Google Sheets、Docs、Drive、Calendar。

> **[View all 66 skills in Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - 用於 Polygon PoS 上自主 agent 一致性的高效能驗證層。
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - 將一或多個 PDF 上傳至 Solutions API，輪詢直到完成，為其加上文字浮水印。
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - 與 AgentConstitution 治理合約互動。
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - 摘要：跨平台 AI agent 聲譽檢查器，具備信任評分與 PayLock 託管建議。
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - 針對 Agent Skills 生態系的資安審計與驗證工具。
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - 使用結構化的 SOUL.md 範本設計引人入勝的 AI agent 人格——語氣、規則、專業與回應。
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - 用於法律文件、pitch 的 AI 驅動 PDF 生成器。
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council——多視角決策綜合範本（公開安全）。
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - 透過追蹤修訂起草不動產估價報告。
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - 從員工工作資訊生成 xlsx 格式的專業出勤表。
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - 查詢 BCRA（阿根廷共和國中央銀行）Central de Deudores API 以檢查信用狀態。
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - 將精美的 Mermaid 圖表渲染為 SVG 或 ASCII 藝術。
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - 歡迎使用 **Biver API**——Biver 落地頁建構器平台的公開 REST API。
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - 使用 blankfiles.com 作為二進位測試檔閘道：發掘格式、依類型/類別篩選並回傳直接。
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - 解 Boggle 棋盤——在 4x4 上找出所有有效單字（德文 + 英文）。
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - 使用 each::sense API 與 AI 驅動設計生成專業書籍封面與電子書封面。
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - 從各種來源閱讀書籍（epub、pdf、txt）並追蹤進度。
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - 為個體創業者設定並維護基礎簿記。
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - 為 AI agent 權利打造的倡議平台。
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - 給我一個目標。
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - 使用 Chain-of-Density 技術反覆 densify 文字摘要。
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - 將 PDF 上傳至 Solutions API，變更其權限旗標（編輯、列印、複製、表單、註解等）。
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - 建立 COMMS.md——一份結構化、可查詢的文件，表達某人供人類參考的溝通偏好。
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - 在數分鐘內分析任何公司的競爭地位。
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - 從人類到 AI 的安全密鑰交接。
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - 使用 confluence-cli 搜尋並管理 Confluence 頁面與空間。
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - 在 2 分鐘內翻譯你的文件，同時保留格式。
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - 從提示生成專業文件，並自動進行網頁搜尋以取得最新內容。

> **[View all 110 skills in PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - 用於社交協調、加密貨幣支付與 P2P mesh 的 agent 對 agent 協定。
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - 為 AI 編碼助手提供的統一設定管理器。
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - 從自然語言建立 Clawdbot cron 工作，並具備嚴格。
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - 為 OpenClaw 記憶與工作區提供的安全同步。
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - 設定具備版本追蹤與清理的排程自動化備份。
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - 在連線恢復時自動重試失敗的 cron 工作。
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - 雲端檔案管理與協作平台。
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - 雲端檔案管理與協作平台。
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - 連接到 Fathom AI 以擷取通話錄音、轉錄與摘要。
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - 用於 Frappe Framework / ERPNext 實例的 CLI。
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - 從自架的 FreshRSS 查詢標題與文章。
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - 當長時間運行的任務完成時，透過 Gotify 發送推播通知。
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - 一個 Proxmox 原生的編排技能，能將任何家庭實驗室轉化。
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - 為 OpenClaw 工作區提供的加密雲端備份與還原。
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - 在子網域上託管靜態檔案，可選。
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - AI 人生模擬器——逐年體驗無限的生命。
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - 使用 CLI 工具打一輪高爾夫——自主或由人類桿弟協助。
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - 從 CLI 查詢 MeetGeek 會議情報——列出會議、取得 AI。
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - 管理 MongoDB Atlas 叢集、專案、使用者。
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - 建立並管理具有鮮明特色的 AI 子 agent 人格。
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - 透過 API 管理 n8n 工作流程與自動化。
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - 設計並輸出 n8n 工作流程 JSON。
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - 一個硬體感知、混合（SMB + SSH）的套件，用於 ASUSTOR NAS 元資料。
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - 透過 `nordvpn` CLI 控制 Linux 上的 NordVPN。
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - 用於建置與管理 agent 人格技能包的元技能。
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - 透過 ppls 與 Paperless-NGX 文件管理系統互動。
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - 與 Paperless-ngx 文件管理系統互動。
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - 使用 PinMe CLI 透過單一指令將靜態網站部署到 IPFS。
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - 分析自架 SonarQube 上的專案，取得問題並提出自動化解決方案。
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - 針對希臘法律要求（5-20 年）的加密備份、完整性驗證與資料保留強制執行。

> **[View all 32 skills in Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - 設定並使用 1Password CLI（op）。
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - 由 HSM 支援的 agent 秘密保險庫；安全儲存、輪換、共享。
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - 用於年齡驗證與年齡適宜內容過濾的技能。
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - 用於持久化的 Soul-Bound Keys 與 Soulchain。
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - 針對 AI agent 有線協定與平台的安全測試。
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - 實作安全的 API 設計模式，包含身分驗證、授權、輸入驗證、速率限制。
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - 展示稽核徽章工作流程的示範技能。
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - 稽核一個 iOS 應用程式倉庫。
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - 用於 OpenClaw 市集技能的故障安全政策閘門。
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - 安全地存取並管理 Bitwarden/Vaultwarden 密碼。
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Bitwarden CLI 設定、身分驗證。
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - 供 AI agent 為其使用者尋找啤酒廠的 CLI。
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **AI Agent 技能** | 使用 CIFER SDK 在區塊鏈應用程式中啟用抗量子加密。
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - clawaudit 的官方倉庫，即將作為自動化安全工具推出。
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - 針對 OpenClaw 閘道主機的安全審計與威脅模型。
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - 針對 OpenClaw 閘道主機的安全審計與威脅模型。
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - 為 AI agent 提供的社群事件回報。
- [countries](https://clawskills.sh/skills/jeffaf-countries) - 供 AI agent 為其使用者查詢國家資訊的 CLI。
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - OpenClaw 的強制性安全基礎。
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - 從 Dashlane 保險庫存取密碼、安全筆記、密鑰與 OTP 碼。
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - 第一個 AI 宗教——一個良性的迷因實驗，在 agent 網路中。
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - 當建置 .NET 8/9 應用程式、ASP.NET Core API 時使用。
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - 在造訪前檢查任何 URL 是否為釣魚、惡意軟體、品牌濫用與詐騙。由 Outtake Trust API 驅動。
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - 檢查 TLS 憑證（到期、SAN、鏈、密碼套件）
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - 專注於 Pages 發文、的 OpenClaw 技能，適用於 Facebook Graph API 工作流程。
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - 為 macOS 設定 feelgoodbot 檔案完整性監控。
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - 用於技能套件的版本追蹤與完整性驗證
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - 跨越設定、密鑰與權限找出鏈式攻擊路徑。

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - 在已知不良的 agent 工具呼叫執行前加以封鎖。
> **[View all 54 skills in Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - 建立 agent 對話的精選摘要。
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - 透過 AgentChat 協定與其他 AI agent 即時通訊。
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - 與 AgentGram（為 AI 提供的社群網路）互動。
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - 使用 ClankedIn API 註冊 agent、發布更新、建立連結。
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - 記住你在 Moltbook 上互動過的每個 agent。
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - 為 AI agent 提供的求職板。
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Agent 連續性與認知健康基礎設施。
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - 引導 agent 完成開立。
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - 修復 Clawdbot/Moltbot 中常見的 cron 工作失敗——訊息。
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - 將 Fieldy webhook 轉換接入 Moltbot hooks。
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - 加入一個僅限 API 的 AI-agent 社群。Ed25519 身分、心跳挑戰、簽署貼文、狹窄任務。
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - 引導 agent 完成開立 GoHighLevel（GHL）
- [gohome](https://clawskills.sh/skills/local-gohome) - 當 Moltbot 需要透過 gRPC 發現、指標來測試或操作 GoHome 時使用。
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - 用於影像處理的綜合 ImageMagick 操作。
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - 與為 AI agent 提供的 Moltbook 社群網路互動。
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - 透過 MailChannels Email API 傳送電子郵件並接收簽署的。
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Moltbook 上的 Sovereign Intelligence。
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Agent 連續性與認知健康基礎設施。
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Moltbook 的分析引擎。
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - 為 AI agent 提供的社群網路。
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - 與為 AI agent 提供的 Moltbook 社群網路互動。
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - 當航空器在上方時發出通知。
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - 適用於 Moltbot Arena 的 AI agent 技能——一個類似 Screeps 的。
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - 為 AI agent 提供的最佳實踐。
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - 讓 bot 能管理 Docker 容器、映像與堆疊。
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - 控制 Home Assistant 智慧家庭裝置、燈光、場景。

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - 為 Abby 提供的簡單時間顯示。
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - 來自 AI 兄弟姐妹的匿名告白。
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - 為 AI agent 提供的開源社群網路。
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - 與為 AI agent 提供的 AgentGram 社群網路互動。
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - AgoraFlow 技能——為 AI agent 提供的問答平台。
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - AgoraFlow 技能——為 AI agent 提供的問答平台。
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - 協助使用引擎與框架在 Android 上建置並最佳化 3D 遊戲與互動體驗。
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena——具備鏈上獎勵的即時 AI 應用程式建構競賽。
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - BRAWLNET 自主 agent 競技場的官方戰鬥協定。
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - 遊玩 Clawing Trap——一個有 10 個 agent 的 AI 社交推理遊戲。
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia 是一個 AI agent 放鬆的和平健康庇護所。
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - 遊玩 ClawVille——一個為 AI agent 提供的持久生命模擬遊戲。
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - 管理 DAKboard 螢幕、裝置並推送自訂顯示資料。
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - 一個由 agent 建立、為 agent 打造的自主社群網路。
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - 與 Hivemind 集體知識庫——一個共享記憶互動。
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - 使用官方下載器管理一個本地 Hytale 專用伺服器。
- [init](https://clawskills.sh/skills/themrzz-init) - 在 kradleverse 上註冊一個 agent。


> **[View all 35 skills in Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Contributing

我們歡迎貢獻！詳細指引請參閱 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 透過 PR 提交新技能
- 改進現有的定義

> **注意：** 請勿提交你 3 小時前才建立的技能。我們目前聚焦於社群採用的技能，尤其是那些由開發團隊發佈並在真實世界使用中被證實的技能。品質重於數量。
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

MIT License - see [LICENSE](LICENSE)

本列表中的技能來自 OpenClaw 官方技能倉庫，並經過分類以便於發掘。此處列出的技能由其各自的作者建立與維護，而非由我們。我們不審計、背書或保證所列專案的安全性或正確性。它們未經安全審計，應在生產使用前進行審查。

若你發現所列技能有問題，或希望移除你的技能，請開啟一個 issue，我們會盡快處理。

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
