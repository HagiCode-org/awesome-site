
<a href="https://github.com/VoltAgent/voltagent">
     <img width="1500" alt="claude-skills" src="https://github.com/user-attachments/assets/a890e563-e999-4b1f-8ce1-20399b0574f8" />
</a>


<br/>
<br/>

<div align="center">
由頂尖開發團隊與社群提供的官方 Agent Skills 精選集。
    <br />
精心挑選，非 AI 垃圾內容生成。
    </strong>
    <br />
    <br />

</div>

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Skills Count](https://img.shields.io/badge/Skills-1497+-blue?style=flat-square)
![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-agent-skills?label=Last%20update&style=flat-square)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)


</div>

</div>

# 精選 Agent Skills <a id="awesome-agent-skills"></a>

與許多大量生成的技能儲存庫不同，本精選集著重於真實工程團隊建立並實際使用的 Agent Skills，而非大量 AI 生成內容。


相容於 Claude Code、Codex、Antigravity、Gemini CLI、Cursor、GitHub Copilot、OpenCode、Windsurf 等工具。路徑與文件請參閱下表。

這是貢獻者最多的 Agent Skills 儲存庫，由社群共同建置與維護。


## 💛 贊助商 <a id="-sponsors"></a>

|  |  |
| :-: | :-- |
| <a href="https://www.testmuai.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/testmui/testmuai-white.png"><img alt="TestMu AI" src="https://cdn.voltagent.dev/awesome-repo/testmui/testmuai-black.png" width="425"></picture></a> | [TestMu AI（原名 LambdaTest）](https://www.testmuai.com) 是專為現代工程團隊打造的 AI 原生測試雲端平台，涵蓋自主測試建立、快速執行，以及 AI 代理、聊天機器人與語音助理測試。 |
| <a href="https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 是深受 70,000 多名開發者信賴的網頁資料基礎設施。其 Crawling API、MCP 伺服器與整合功能，讓 AI 代理能即時存取任何網頁，並提供 JavaScript 渲染、代理輪替與反機器人防護。 |
| <a href="https://serpapi.com/awesome-agent-skills"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-agent-skills) 是為 AI 應用程式提供的網頁搜尋 API，提供 Markdown 與 JSON 格式，方便任何整合使用。 |

<br />

<a href="https://sponsors.voltagent.dev/#awesome-agent-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>


## 目錄 <a id="table-of-contents"></a>

### 官方技能提供者 <a id="official-skills-by"></a>

| | | | | 
|---|---|---|---|
| [Claude](#official-claude-skills) | [VoltAgent](#skills-by-voltagent) | [SerpApi](#skills-by-serpapi) | [Crawlbase](#skills-by-crawlbase) |
| [TestMu AI](#skills-by-testmu-ai) | [Modem Dev](#skills-by-modem-dev) | [Angular](#skills-by-angular) | [Composio](#skills-by-composio-team) |
| [Supabase](#skills-by-supabase-team) | [Google Gemini](#skills-by-google-gemini) | [Stripe](#skills-by-stripe-team) | [Courier](#skills-by-courier) |
| [CallStack](#skills-by-callstack) | [Expo](#skills-by-expo-team) | [Better Auth](#skills-by-better-auth-team) | [Tinybird](#skills-by-tinybird-team) |
| [HashiCorp](#skills-by-hashicorp-team-for-terraform) | [Sanity](#skills-by-sanity-team) | [Firecrawl](#skills-by-firecrawl-team) | [Neon](#skills-by-neon-team) |
| [ClickHouse](#skill-by-clickhouse) | [Remotion](#skills-by-remotion) | [Replicate](#skills-by-replicate) | [Typefully](#skills-by-typefully) |
| [Vercel](#skills-by-vercel-engineering-team) | [Cloudflare](#skills-by-cloudflare-team) | [Netlify](#skills-by-netlify-team) | [Google Labs (Stitch)](#skills-by-google-labs-stitch) |
| [Google Workspace CLI](#skills-by-google-workspace-cli) | [Hugging Face](#skills-by-hugging-face-team) | [Trail of Bits](#security-skills-by-trail-of-bits-team) | [Sentry](#skills-by-sentry-team-for-their-dev-team) |
| [Microsoft](#skills-by-microsoft) | [fal.ai](#skills-by-falai-team) | [WordPress](#skills-by-wordpress-development-team) | [OpenAI](#skills-by-openai) |
| [Figma](#skills-by-figma) | [Corey Haines](#marketing-skills-by-corey-haines) | [Binance](#skills-by-binance) | [Dean Peters](#product-manager-skills-by-dean-peters) |
| [Paweł Huryn](#product-management-skills-by-pawel-huryn) | [MiniMax](#skills-by-minimax-team) | [DuckDB](#skills-by-duckdb) | [GSAP](#skills-by-gsap-greensock) |
| [Garry Tan (gstack)](#skills-by-garry-tan-gstack) | [Notion](#skills-by-notion) | [Resend](#skills-by-resend) | [Addy Osmani (Web Quality)](#skills-by-addy-osmani-web-quality) |
| [MongoDB](#skills-by-mongodb) | [Kim Barrett (Advertising)](#advertising-skills-by-kim-barrett) | [Apollo GraphQL](#skills-by-apollo-graphql) | [Auth0](#skills-by-auth0) |
| [Brave](#skills-by-brave) | [Browserbase](#skills-by-browserbase) | [CodeRabbit](#skills-by-coderabbit) | [Coinbase](#skills-by-coinbase) |
| [Datadog Labs](#skills-by-datadog-labs) | [Firebase](#skills-by-firebase) | [Flutter](#skills-by-flutter) | [Venice.ai](#skills-by-veniceai) |
| [Red Hat](#skills-by-redhat) | [社群](#community-skills) | [Redis](#skills-by-redis) | [NVIDIA](#skills-by-nvidia) |
| [Google Cloud](#skills-by-google-cloud) | [品質標準](#skill-quality-standards) |  |  |



<br/>

你用 AI 推出產品，但每次發布仍悄然無人問津。[EveryFeed](https://everyfeed.ai/) 將 AI 助理連接至社群工作空間，協助草擬、排程並發布至 35 個以上的管道——不需代理商，也不必聘請行銷人員。

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


<details open>
<summary><h3 id="official-claude-skills" style="display:inline">Claude 官方技能</h3></summary>

- **[anthropics/docx](https://officialskills.sh/anthropics/skills/docx)** - 建立、編輯與分析 Word 文件
- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** - 協作編輯與共同撰寫文件
- **[anthropics/pptx](https://officialskills.sh/anthropics/skills/pptx)** - 建立、編輯與分析 PowerPoint 簡報
- **[anthropics/xlsx](https://officialskills.sh/anthropics/skills/xlsx)** - 建立、編輯與分析 Excel 試算表
- **[anthropics/pdf](https://officialskills.sh/anthropics/skills/pdf)** - 擷取文字、建立 PDF 並處理表單
- **[anthropics/algorithmic-art](https://officialskills.sh/anthropics/skills/algorithmic-art)** - 使用 p5.js 與具種子的隨機性建立生成藝術
- **[anthropics/canvas-design](https://officialskills.sh/anthropics/skills/canvas-design)** - 以 PNG 和 PDF 格式設計視覺藝術
- **[anthropics/frontend-design](https://officialskills.sh/anthropics/skills/frontend-design)** - 前端設計與 UI/UX 開發工具
- **[anthropics/slack-gif-creator](https://officialskills.sh/anthropics/skills/slack-gif-creator)** - 建立符合 Slack 大小限制的動畫 GIF
- **[anthropics/theme-factory](https://officialskills.sh/anthropics/skills/theme-factory)** - 以專業主題為素材設定風格，或產生自訂主題
- **[anthropics/web-artifacts-builder](https://officialskills.sh/anthropics/skills/web-artifacts-builder)** - 使用 React 與 Tailwind 建置複雜的 claude.ai HTML artifacts
- **[anthropics/mcp-builder](https://officialskills.sh/anthropics/skills/mcp-builder)** - 建立 MCP 伺服器以整合外部 API 與服務
- **[anthropics/webapp-testing](https://officialskills.sh/anthropics/skills/webapp-testing)** - 使用 Playwright 測試本機網頁應用程式
- **[anthropics/brand-guidelines](https://officialskills.sh/anthropics/skills/brand-guidelines)** - 將 Anthropic 品牌色彩與字體套用至 artifacts
- **[anthropics/internal-comms](https://officialskills.sh/anthropics/skills/internal-comms)** - 撰寫狀態報告、電子報與常見問題
- **[anthropics/skill-creator](https://officialskills.sh/anthropics/skills/skill-creator)** - 引導建立可擴充 Claude 能力的技能
- **[anthropics/template](https://officialskills.sh/anthropics/skills/template)** - 用於建立技能的基本範本

</details>

<details>
<summary><h3 id="skills-by-voltagent" style="display:inline">VoltAgent 提供的技能</h3></summary>

VoltAgent 提供的官方技能，使用 VoltAgent TypeScript 框架建置 AI 代理。
- **[voltagent/create-voltagent](https://officialskills.sh/voltagent/skills/create-voltagent)** - 使用 CLI 與手動步驟的專案設定指南
- **[voltagent/voltagent-best-practices](https://officialskills.sh/voltagent/skills/voltagent-best-practices)** - 代理、工作流程、記憶體與伺服器的架構和使用模式
- **[voltagent/voltagent-core-reference](https://officialskills.sh/voltagent/skills/voltagent-core-reference)** - VoltAgent 類別選項與生命週期方法參考
- **[voltagent/voltagent-docs-bundle](https://officialskills.sh/voltagent/skills/voltagent-docs-bundle)** - 查閱內嵌於 @voltagent/core 的文件，取得符合版本的說明

</details>

<details>
<summary><h3 id="skills-by-serpapi" style="display:inline">SerpApi 提供的技能</h3></summary>

由 [SerpApi](https://serpapi.com/awesome-agent-skills) 團隊提供的官方技能。SerpApi 是 AI 應用程式的網頁搜尋 API，透過 130 多種引擎提供結構化、機器可讀的搜尋資料，涵蓋 Google 網頁搜尋與 Scholar，以及地圖、航班、飯店和購物。

- **[serpapi/serpapi-web-search](https://officialskills.sh/serpapi/skills/serpapi-web-search)** - 透過 130 多種引擎取得結構化搜尋資料：選擇合適的引擎、擷取正確的欄位，並從錯誤中復原
- **[serpapi/agent-usability-test](https://officialskills.sh/serpapi/skills/agent-usability-test)** - 測試代理能否找到並使用你的工具——受測對象是介面，而非代理

SerpApi 的其他工具（非技能，但可搭配使用）：

- **[serpapi/serpapi-search-tools-python](https://github.com/serpapi/serpapi-search-tools-python)** - 適用於 Python 代理的即時搜尋工具，原生支援熱門代理 SDK
- **[serpapi/serpapi-cli](https://github.com/serpapi/serpapi-cli)** - 涵蓋全部 130 多種引擎的 SerpApi 命令列用戶端

</details>

<details>
<summary><h3 id="skills-by-crawlbase" style="display:inline">Crawlbase 提供的技能</h3></summary>

由 [Crawlbase](https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 團隊提供的官方技能，透過 Crawlbase MCP 伺服器讓 AI 代理即時存取網頁：以原始 HTML、清理後的 Markdown 或螢幕截圖擷取任何網址，並在 Crawlbase Cloud Storage 管理結果。

- **[crawlbase/crawl-html](https://officialskills.sh/crawlbase/skills/crawl-html)** - 擷取網址並回傳原始 HTML，支援 JS 渲染、裝置模擬與地理位置指定
- **[crawlbase/crawl-markdown](https://officialskills.sh/crawlbase/skills/crawl-markdown)** - 從任何網址擷取乾淨、適合 LLM 使用的 Markdown，移除廣告與樣板內容
- **[crawlbase/crawl-screenshot](https://officialskills.sh/crawlbase/skills/crawl-screenshot)** - 在桌面或行動裝置上擷取任何網址的完整頁面或可視區域螢幕截圖
- **[crawlbase/storage-get](https://officialskills.sh/crawlbase/skills/storage-get)** - 以 JSON、HTML 或 Markdown 格式，從 Crawlbase Cloud Storage 取回已儲存的頁面
- **[crawlbase/storage-list](https://officialskills.sh/crawlbase/skills/storage-list)** - 使用以捲動為基礎的分頁列出已儲存的 RID，每次呼叫最多 1000 筆
- **[crawlbase/storage-bulk-get](https://officialskills.sh/crawlbase/skills/storage-bulk-get)** - 一次呼叫最多取回 100 個已儲存頁面，並可選擇自動刪除
- **[crawlbase/storage-count](https://officialskills.sh/crawlbase/skills/storage-count)** - 計算指定權杖在 Crawlbase Cloud Storage 中保存的文件數量
- **[crawlbase/storage-delete](https://officialskills.sh/crawlbase/skills/storage-delete)** - 依 RID 從 Crawlbase Cloud Storage 刪除單一已儲存頁面
- **[crawlbase/storage-bulk-delete](https://officialskills.sh/crawlbase/skills/storage-bulk-delete)** - 一次呼叫最多從 Crawlbase Cloud Storage 刪除 100 個已儲存頁面

Crawlbase 的其他工具（非技能，但可搭配使用）：

- **[crawlbase/crawlbase-mcp](https://github.com/crawlbase/crawlbase-mcp)** - 這些技能背後的 MCP 伺服器（npm `@crawlbase/mcp`），支援 JS 渲染、代理輪替與反機器人防護
- **[crawlbase/langchain-crawlbase](https://github.com/crawlbase/langchain-crawlbase)** - 由 Crawling API 驅動的 LangChain 文件載入器、工具與檢索器
- **[crawlbase/n8n-nodes-crawlbase](https://github.com/crawlbase/n8n-nodes-crawlbase)** - 適用於 n8n 的原生 Crawlbase 節點，支援憑證與 Crawling API 選項

</details>

<details>
<summary><h3 id="skills-by-testmu-ai" style="display:inline">TestMu AI 提供的技能</h3></summary>

TestMu AI（原名 LambdaTest）團隊維護的正式環境級 Agent Skills，涵蓋所有主要測試自動化框架。協助 AI 程式設計助理在網頁、行動裝置、API、BDD 與單元測試技術堆疊中產生專家級測試自動化程式碼。

- **[testmu-ai/api-skill](https://github.com/LambdaTest/agent-skills/tree/main/api-skill)** - 用於設計、模擬、撰寫文件、保護 REST/GraphQL/gRPC API，並為其產生測試的一系列 API 技能
- **[testmu-ai/appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill)** - 以 Java、Python 或 JS 為 Android 與 iOS 產生 Appium 行動自動化
- **[testmu-ai/behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill)** - 使用 Gherkin 與 Mink 為 PHP 產生 Behat BDD 測試
- **[testmu-ai/behave-skill](https://github.com/LambdaTest/agent-skills/tree/main/behave-skill)** - 使用 Gherkin 與步驟實作為 Python 產生 Behave BDD 測試
- **[testmu-ai/capybara-skill](https://github.com/LambdaTest/agent-skills/tree/main/capybara-skill)** - 在 Ruby 中產生整合 RSpec 的 Capybara E2E 測試
- **[testmu-ai/cicd-pipeline-skill](https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill)** - 為 GitHub Actions、Jenkins、GitLab CI 與 Azure DevOps 的測試產生 CI/CD 管線
- **[testmu-ai/codeception-skill](https://github.com/LambdaTest/agent-skills/tree/main/codeception-skill)** - 以 PHP 產生 Codeception 驗收、功能與單元測試
- **[testmu-ai/cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill)** - 使用 Gherkin 與步驟定義，以 Java、JS 或 Ruby 產生 Cucumber BDD 測試
- **[testmu-ai/cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill)** - 以 JavaScript 或 TypeScript 產生 Cypress E2E 與元件測試
- **[testmu-ai/detox-skill](https://github.com/LambdaTest/agent-skills/tree/main/detox-skill)** - 以 JavaScript 為 React Native 應用程式產生 Detox 灰箱 E2E 測試
- **[testmu-ai/espresso-skill](https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill)** - 以 Kotlin 或 Java 為 Android 應用程式產生 Espresso UI 測試
- **[testmu-ai/flutter-testing-skill](https://github.com/LambdaTest/agent-skills/tree/main/flutter-testing-skill)** - 以 Dart 產生 Flutter widget、整合與 golden 測試
- **[testmu-ai/gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill)** - 以 Markdown 產生 Gauge 規格，並使用 Java、Python、JS 或 Ruby 編寫步驟
- **[testmu-ai/geb-skill](https://github.com/LambdaTest/agent-skills/tree/main/geb-skill)** - 以 Groovy 產生搭配 Spock 與頁面物件的 Geb 瀏覽器自動化
- **[testmu-ai/hyperexecute-skill](https://github.com/LambdaTest/agent-skills/tree/main/hyperexecute-skill)** - 端對端操作 TestMu AI HyperExecute：YAML、CLI 執行、偵錯與 CI 串接
- **[testmu-ai/jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill)** - 以 JavaScript 產生支援 spies 與非同步操作的 Jasmine BDD 測試
- **[testmu-ai/jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill)** - 以 JS/TS 產生支援模擬與快照的 Jest 單元與整合測試
- **[testmu-ai/junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill)** - 使用 Mockito 以 Java 產生 JUnit 5 單元與整合測試
- **[testmu-ai/kanecli-skill](https://github.com/LambdaTest/agent-skills/tree/main/kanecli-skill)** - 透過 kane-cli 以自然語言目標產生並執行瀏覽器測試
- **[testmu-ai/karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill)** - 產生用於瀏覽器 JS 測試的 Karma 測試執行器設定
- **[testmu-ai/laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill)** - 以 PHP 產生 Laravel Dusk Chrome 瀏覽器測試
- **[testmu-ai/lettuce-skill](https://github.com/LambdaTest/agent-skills/tree/main/lettuce-skill)** - 以 Python 產生 Lettuce BDD 測試（舊版；建議改用 Behave）
- **[testmu-ai/mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill)** - 以 JavaScript 產生搭配 Chai 與 Sinon 的 Mocha 測試
- **[testmu-ai/mstest-skill](https://github.com/LambdaTest/agent-skills/tree/main/mstest-skill)** - 以 C# 產生 .NET 的 MSTest 測試
- **[testmu-ai/nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill)** - 為 Node.js 產生以 Selenium 為基礎的 Nemo.js 測試
- **[testmu-ai/nightwatchjs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nightwatchjs-skill)** - 以 JavaScript 和 Selenium WebDriver 產生 NightwatchJS E2E 測試
- **[testmu-ai/nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill)** - 使用 constraint model 與 Moq 以 C# 產生 NUnit 3 測試
- **[testmu-ai/phpunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/phpunit-skill)** - 以 PHP 產生使用 data providers 與 mocking 的 PHPUnit 測試
- **[testmu-ai/playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill)** - 以 TS、JS、Python、Java 或 C# 產生 Playwright E2E 測試
- **[testmu-ai/protractor-skill](https://github.com/LambdaTest/agent-skills/tree/main/protractor-skill)** - 為 Angular 以 JS/TS 產生 Protractor E2E 測試（已棄用；建議改用 Playwright/Cypress）
- **[testmu-ai/puppeteer-skill](https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill)** - 產生用於瀏覽器自動化、網頁擷取與 PDF 生成的 Puppeteer 指令碼
- **[testmu-ai/pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill)** - 以 Python 產生使用 fixtures、parametrize 與 mocking 的 pytest 測試
- **[testmu-ai/reqnroll-skill](https://github.com/LambdaTest/agent-skills/tree/main/reqnroll-skill)** - 以 C# 產生適用於網頁與行動裝置的 Reqnroll BDD 測試
- **[testmu-ai/robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill)** - 以 Python 產生關鍵字驅動的 Robot Framework 測試
- **[testmu-ai/rspec-skill](https://github.com/LambdaTest/agent-skills/tree/main/rspec-skill)** - 以 Ruby 產生使用 matchers、hooks 與 mocking 的 RSpec 測試
- **[testmu-ai/selenide-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenide-skill)** - 以 Java 產生具備自動等待與流暢 API 的 Selenide UI 測試
- **[testmu-ai/selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill)** - 以 Java、Python、JS、C#、Ruby 或 PHP 產生 Selenium WebDriver 測試
- **[testmu-ai/serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill)** - 以 Java 使用 Screenplay 模式與報告功能產生 Serenity BDD 測試
- **[testmu-ai/smartui-skill](https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill)** - 產生用於螢幕截圖比對的 SmartUI 視覺回歸設定
- **[testmu-ai/specflow-skill](https://github.com/LambdaTest/agent-skills/tree/main/specflow-skill)** - 使用 Gherkin 與步驟繫結，以 C#/.NET 產生 SpecFlow BDD 測試
- **[testmu-ai/test-framework-migration-skill](https://github.com/LambdaTest/agent-skills/tree/main/test-framework-migration-skill)** - 在 Selenium、Playwright、Puppeteer 與 Cypress 之間移轉測試
- **[testmu-ai/testcafe-skill](https://github.com/LambdaTest/agent-skills/tree/main/testcafe-skill)** - 以 JavaScript 或 TypeScript 產生 TestCafe 自動化測試
- **[testmu-ai/testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill)** - 以 Java 產生使用 data providers 與平行執行的 TestNG 測試
- **[testmu-ai/testunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/testunit-skill)** - 以 Ruby 產生 xUnit 風格的 Test::Unit 測試
- **[testmu-ai/unittest-skill](https://github.com/LambdaTest/agent-skills/tree/main/unittest-skill)** - 以 Python 產生使用 TestCase 與 setUp/tearDown 的 unittest 測試
- **[testmu-ai/vitest-skill](https://github.com/LambdaTest/agent-skills/tree/main/vitest-skill)** - 以 JS/TS 產生採用相容 Jest API 與 ESM 的 Vitest 測試
- **[testmu-ai/webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill)** - 以 JavaScript 或 TypeScript 產生 WebdriverIO（WDIO）自動化測試
- **[testmu-ai/xcuitest-skill](https://github.com/LambdaTest/agent-skills/tree/main/xcuitest-skill)** - 以 Swift 為 iOS/iPadOS 應用程式產生 XCUITest UI 測試
- **[testmu-ai/xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill)** - 以 C# 產生使用 Fact/Theory 與 FluentAssertions 的 xUnit.net 測試

</details>

<details>
<summary><h3 id="skills-by-modem-dev" style="display:inline">Skills by Modem Dev</h3></summary>

- **[modem-dev/skills](https://github.com/modem-dev/skills)** - [Modem](https://modem.dev/go/awesome-agent-skills) 提供的 Agent Skills，從 write-discoverable-code 開始

</details>

<details>
<summary><h3 id="skills-by-zero" style="display:inline">Zero 提供的技能</h3></summary>


- **[zero/zero](https://github.com/officialzeroxyz/zero-plugins/blob/main/plugins/zero/skills/zero/SKILL.md)** - 為 Claude Code 代理探索並呼叫外部付費工具，不必停下來要求使用者註冊或取得 API 金鑰
- **[zero/zero-gemini](https://github.com/officialzeroxyz/zero-plugins/tree/main/plugins/zero-gemini)** - 將相同的 Zero 工具探索與付款層封裝為 Gemini CLI 擴充功能

</details>

<details>
<summary><h3 id="skills-by-angular" style="display:inline">Angular 提供的技能</h3></summary>

- **[angular/angular-developer](https://github.com/angular/skills)** - 產生 Angular 程式碼，並提供元件、服務與 reactivity 的架構指引
- **[angular/angular-new-app](https://github.com/angular/skills)** - 使用 CLI 和現代最佳實務建立新的 Angular 應用程式

</details>

<details>
<summary><h3 id="skills-by-composio-team" style="display:inline">Composio 團隊提供的技能</h3></summary>

- **[composiohq/composio](https://officialskills.sh/composiohq/skills/composio)** - 透過受管理的驗證機制將 AI 代理連接到 1000 多個外部應用程式

</details>

<details>
<summary><h3 id="skills-by-supabase-team" style="display:inline">Supabase 團隊提供的技能</h3></summary>

- **[supabase/postgres-best-practices](https://officialskills.sh/supabase/skills/postgres-best-practices)** - Supabase 的 PostgreSQL 最佳實務

</details>

<details>
<summary><h3 id="skills-by-google-gemini" style="display:inline">Google Gemini 提供的技能</h3></summary>

- **[google-gemini/gemini-api-dev](https://officialskills.sh/google-gemini/skills/gemini-api-dev)** - 使用 Gemini API 開發 Gemini 應用程式的最佳實務
- **[google-gemini/vertex-ai-api-dev](https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev)** - 使用 Gen AI SDK 在 Google Cloud Vertex AI 上開發 Gemini 應用程式
- **[google-gemini/gemini-live-api-dev](https://officialskills.sh/google-gemini/skills/gemini-live-api-dev)** - 使用 Gemini Live API 建置即時雙向串流應用程式
- **[google-gemini/gemini-interactions-api](https://officialskills.sh/google-gemini/skills/gemini-interactions-api)** - 使用 Gemini Interactions API 建置文字、聊天、串流與圖像生成應用程式

</details>

<details>
<summary><h3 id="skills-by-stripe-team" style="display:inline">Stripe 團隊提供的技能</h3></summary>

- **[stripe/stripe-best-practices](https://officialskills.sh/stripe/skills/stripe-best-practices)** - 建置 Stripe 整合功能的最佳實務
- **[stripe/upgrade-stripe](https://officialskills.sh/stripe/skills/upgrade-stripe)** - 升級 Stripe SDK 與 API 版本

</details>

<details>
<summary><h3 id="skills-by-courier" style="display:inline">Courier 提供的技能</h3></summary>

- **[trycourier/courier-skills](https://github.com/trycourier/courier-skills)** - 透過電子郵件、簡訊、推播與聊天傳送多管道通知

</details>

<details>
<summary><h3 id="skills-by-callstack" style="display:inline">CallStack 提供的技能</h3></summary>

- **[callstackincubator/react-native-best-practices](https://officialskills.sh/callstackincubator/skills/react-native-best-practices)** - Callstack 提供的 React Native 應用程式效能最佳化
- **[callstackincubator/github](https://officialskills.sh/callstackincubator/skills/github)** - 適用於 PR、程式碼審查與分支的 GitHub 工作流程模式
- **[callstackincubator/upgrading-react-native](https://officialskills.sh/callstackincubator/skills/upgrading-react-native)** - React Native 升級流程：範本、相依性與常見陷阱

</details>

<details>
<summary><h3 id="skills-by-better-auth-team" style="display:inline">Better Auth 團隊提供的技能</h3></summary>

- **[better-auth/best-practices](https://officialskills.sh/better-auth/skills/best-practices)** - Better Auth 整合的最佳實務
- **[better-auth/explain-error](https://officialskills.sh/better-auth/skills/explain-error)** - 說明 Better Auth 錯誤訊息
- **[better-auth/providers](https://officialskills.sh/better-auth/skills/providers)** - Better Auth 驗證提供者
- **[better-auth/create-auth](https://officialskills.sh/better-auth/skills/create-auth)** - 使用 Better Auth 建立驗證設定
- **[better-auth/emailAndPassword](https://officialskills.sh/better-auth/skills/emailAndPassword)** - 使用 Better Auth 進行電子郵件與密碼驗證
- **[better-auth/organization](https://officialskills.sh/better-auth/skills/organization)** - 使用 Better Auth 管理組織
- **[better-auth/twoFactor](https://officialskills.sh/better-auth/skills/twoFactor)** - 使用 Better Auth 進行雙因素驗證

</details>

<details>
<summary><h3 id="skills-by-tinybird-team" style="display:inline">Tinybird 團隊提供的技能</h3></summary>

- **[tinybirdco/tinybird-best-practices](https://officialskills.sh/tinybirdco/skills/tinybird-best-practices)** - Tinybird 專案中資料來源、管線、端點與 SQL 的指南
- **[tinybirdco/tinybird-cli-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-cli-guidelines)** - Tinybird CLI 使用指南與指令
- **[tinybirdco/tinybird-python-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-python-sdk-guidelines)** - Tinybird Python SDK 使用指南
- **[tinybirdco/tinybird-typescript-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-typescript-sdk-guidelines)** - Tinybird TypeScript SDK 使用指南

</details>

<details>
<summary><h3 id="skills-by-hashicorp-team-for-terraform" style="display:inline">HashiCorp Terraform 團隊提供的技能</h3></summary>

- **[hashicorp/azure-verified-modules](https://officialskills.sh/hashicorp/skills/azure-verified-modules)** - Terraform 模組的 Azure Verified Modules（AVM）認證標準
- **[hashicorp/new-terraform-provider](https://officialskills.sh/hashicorp/skills/new-terraform-provider)** - 使用 Plugin Framework 建立新的 Terraform provider 專案骨架
- **[hashicorp/provider-resources](https://officialskills.sh/hashicorp/skills/provider-resources)** - 使用 Plugin Framework 實作 Terraform Provider 資源與資料來源
- **[hashicorp/provider-test-patterns](https://officialskills.sh/hashicorp/skills/provider-test-patterns)** - 使用 terraform-plugin-testing 撰寫 Terraform provider 驗收測試的模式
- **[hashicorp/provider-actions](https://officialskills.sh/hashicorp/skills/provider-actions)** - 使用 Plugin Framework 實作 Terraform Provider Actions
- **[hashicorp/run-acceptance-tests](https://officialskills.sh/hashicorp/skills/run-acceptance-tests)** - 使用 Go 測試執行器執行 Terraform provider 驗收測試
- **[hashicorp/refactor-module](https://officialskills.sh/hashicorp/skills/refactor-module)** - 將單體式 Terraform 設定轉換為可重複使用的模組
- **[hashicorp/terraform-search-import](https://officialskills.sh/hashicorp/skills/terraform-search-import)** - 探索現有雲端資源並批次匯入 Terraform state
- **[hashicorp/terraform-style-guide](https://officialskills.sh/hashicorp/skills/terraform-style-guide)** - 依照 HashiCorp 官方風格慣例產生 Terraform HCL 程式碼
- **[hashicorp/terraform-stacks](https://officialskills.sh/hashicorp/skills/terraform-stacks)** - 跨多個環境、區域與雲端帳戶管理基礎架構
- **[hashicorp/terraform-test](https://officialskills.sh/hashicorp/skills/terraform-test)** - 使用 .tftest.hcl 檔案為 Terraform 設定提供內建測試框架

</details>

<details>
<summary><h3 id="skills-by-sanity-team" style="display:inline">Sanity 團隊提供的技能</h3></summary>

- **[sanity-io/sanity-best-practices](https://officialskills.sh/sanity-io/skills/sanity-best-practices)** - Sanity Studio、GROQ 查詢與內容工作流程的最佳實務
- **[sanity-io/content-modeling-best-practices](https://officialskills.sh/sanity-io/skills/content-modeling-best-practices)** - 設計可擴充 Sanity 內容模型的指南
- **[sanity-io/seo-aeo-best-practices](https://officialskills.sh/sanity-io/skills/seo-aeo-best-practices)** - 內容網站的 SEO 與答案引擎最佳化模式
- **[sanity-io/content-experimentation-best-practices](https://officialskills.sh/sanity-io/skills/content-experimentation-best-practices)** - 內容 A/B 測試與實驗工作流程

</details>

<details>
<summary><h3 id="skills-by-firecrawl-team" style="display:inline">Firecrawl 團隊提供的技能</h3></summary>

- **[firecrawl/firecrawl-build](https://officialskills.sh/firecrawl/skills/firecrawl-build)** - 在應用程式程式碼中整合 Firecrawl，以進行網頁搜尋、擷取、資料抽取與瀏覽器互動
- **[firecrawl/firecrawl-build-interact](https://officialskills.sh/firecrawl/skills/firecrawl-build-interact)** - 多步驟 Firecrawl 瀏覽器流程：點擊、填寫表單、分頁與支援驗證的導覽
- **[firecrawl/firecrawl-build-onboarding](https://officialskills.sh/firecrawl/skills/firecrawl-build-onboarding)** - 在專案中設定 Firecrawl 憑證與 SDK，完成首次整合
- **[firecrawl/firecrawl-build-scrape](https://officialskills.sh/firecrawl/skills/firecrawl-build-scrape)** - 從產品程式碼整合 Firecrawl `/scrape`，擷取單一頁面
- **[firecrawl/firecrawl-build-search](https://officialskills.sh/firecrawl/skills/firecrawl-build-search)** - 整合 Firecrawl `/search`，以查詢為優先進行探索，並可選擇載入內容

</details>

<details>
<summary><h3 id="skills-by-neon" style="display:inline">Neon 提供的技能<a id="skills-by-neon-team"></a></h3></summary>

- **[neondatabase/neon-postgres](https://officialskills.sh/neondatabase/skills/neon-postgres)** - Neon Serverless Postgres 的最佳實務
- **[neondatabase/claimable-postgres](https://officialskills.sh/neondatabase/skills/claimable-postgres)** - 使用 Neon 配置可認領的 Postgres 資料庫
- **[neondatabase/neon-postgres-egress-optimizer](https://officialskills.sh/neondatabase/skills/neon-postgres-egress-optimizer)** - 最佳化 Neon Postgres 的輸出流量與資料傳輸

</details>

<details>
<summary><h3 id="skills-by-clickhouse" style="display:inline">ClickHouse 提供的技能<a id="skill-by-clickhouse"></a></h3></summary>

- **[clickhouse/clickhouse-best-practices](https://officialskills.sh/clickhouse/skills/clickhouse-best-practices)** - 使用 ClickHouse 的最佳實務
- **[clickhouse/chdb-datastore](https://officialskills.sh/clickhouse/skills/chdb-datastore)** - 可直接替代 pandas，透過 16 種以上資料來源展現 ClickHouse 效能
- **[clickhouse/chdb-sql](https://officialskills.sh/clickhouse/skills/chdb-sql)** - 行程內 ClickHouse SQL 引擎，可在沒有伺服器的情況下查詢檔案、資料庫與雲端儲存空間
- **[clickhouse/clickhouse-architecture-advisor](https://officialskills.sh/clickhouse/skills/clickhouse-architecture-advisor)** - 設計 ClickHouse 架構，並將最佳實務轉化為符合工作負載需求的決策
- **[clickhouse/clickhousectl-cloud-deploy](https://officialskills.sh/clickhouse/skills/clickhousectl-cloud-deploy)** - 使用 clickhousectl 部署至 ClickHouse Cloud，並從本機設定移轉
- **[clickhouse/clickhousectl-local-dev](https://officialskills.sh/clickhouse/skills/clickhousectl-local-dev)** - 使用 clickhousectl 從零啟動本機 ClickHouse 開發環境

</details>

<details>
<summary><h3 id="skills-by-remotion" style="display:inline">Remotion 提供的技能</h3></summary>

- **[remotion-dev/remotion](https://officialskills.sh/remotion-dev/skills/remotion)** - 使用 React 以程式方式建立影片

</details>

<details>
<summary><h3 id="skills-by-replicate" style="display:inline">Replicate 提供的技能</h3></summary>

- **[replicate/replicate](https://officialskills.sh/replicate/skills/replicate)** - 使用 Replicate API 探索、比較並執行 AI 模型

</details>

<details>
<summary><h3 id="skills-by-typefully" style="display:inline">Typefully 提供的技能</h3></summary>

- **[typefully/typefully](https://officialskills.sh/typefully/skills/typefully)** - 在 X、LinkedIn、Threads、Bluesky 與 Mastodon 上建立、排程並發布社群媒體內容

</details>

<details>
<summary><h3 id="skills-by-veniceai" style="display:inline">Venice.ai 提供的技能</h3></summary>

Venice.ai 提供的 Venice API 官方技能。

- **[veniceai/venice-api-overview](https://github.com/veniceai/skills/tree/main/skills/venice-api-overview)** - API 基礎、驗證模式、定價與版本管理
- **[veniceai/venice-auth](https://github.com/veniceai/skills/tree/main/skills/venice-auth)** - API 金鑰與以錢包為基礎的 Venice 驗證
- **[veniceai/venice-chat](https://github.com/veniceai/skills/tree/main/skills/venice-chat)** - 聊天完成、 多模態輸入、工具與串流
- **[veniceai/venice-responses](https://github.com/veniceai/skills/tree/main/skills/venice-responses)** - 相容 OpenAI 的 Venice Responses API
- **[veniceai/venice-embeddings](https://github.com/veniceai/skills/tree/main/skills/venice-embeddings)** - 嵌入模型、維度與編碼格式
- **[veniceai/venice-image-generate](https://github.com/veniceai/skills/tree/main/skills/venice-image-generate)** - 圖像生成端點與可用樣式
- **[veniceai/venice-image-edit](https://github.com/veniceai/skills/tree/main/skills/venice-image-edit)** - 圖像編輯、升頻與背景移除
- **[veniceai/venice-audio-speech](https://github.com/veniceai/skills/tree/main/skills/venice-audio-speech)** - 文字轉語音模型、語音、格式與串流
- **[veniceai/venice-audio-music](https://github.com/veniceai/skills/tree/main/skills/venice-audio-music)** - 音樂生成佇列、檢索與完成端點
- **[veniceai/venice-audio-transcription](https://github.com/veniceai/skills/tree/main/skills/venice-audio-transcription)** - 音訊轉錄模型與語音轉文字選項
- **[veniceai/venice-video](https://github.com/veniceai/skills/tree/main/skills/venice-video)** - 影片生成與轉錄工作流程
- **[veniceai/venice-models](https://github.com/veniceai/skills/tree/main/skills/venice-models)** - 模型目錄、特性與相容性對應
- **[veniceai/venice-characters](https://github.com/veniceai/skills/tree/main/skills/venice-characters)** - 角色端點與 `character_slug` 用法
- **[veniceai/venice-api-keys](https://github.com/veniceai/skills/tree/main/skills/venice-api-keys)** - API 金鑰 CRUD、速率限制與 Web3 金鑰
- **[veniceai/venice-billing](https://github.com/veniceai/skills/tree/main/skills/venice-billing)** - 餘額、使用量與帳務分析端點
- **[veniceai/venice-x402](https://github.com/veniceai/skills/tree/main/skills/venice-x402)** - Base 上的錢包額度與 x402 付款
- **[veniceai/venice-crypto-rpc](https://github.com/veniceai/skills/tree/main/skills/venice-crypto-rpc)** - 支援的加密貨幣網路之 JSON-RPC 代理
- **[veniceai/venice-augment](https://github.com/veniceai/skills/tree/main/skills/venice-augment)** - 搜尋、網頁擷取與文字剖析端點
- **[veniceai/venice-errors](https://github.com/veniceai/skills/tree/main/skills/venice-errors)** - 錯誤處理、重試與 API 狀態碼

</details>

<details>
<summary><h3 id="skills-by-vercel-engineering-team" style="display:inline">Vercel 工程團隊提供的技能</h3></summary>

- **[vercel-labs/next-best-practices](https://officialskills.sh/vercel-labs/skills/next-best-practices)** - Next.js 最佳實務與建議模式
- **[vercel-labs/next-cache-components](https://officialskills.sh/vercel-labs/skills/next-cache-components)** - Next.js 的快取策略與快取感知元件
- **[vercel-labs/next-upgrade](https://officialskills.sh/vercel-labs/skills/next-upgrade)** - 將 Next.js 專案升級至較新版本

</details>

<details>
<summary><h3 id="skills-by-cloudflare-team" style="display:inline">Cloudflare 團隊提供的技能</h3></summary>

- **[cloudflare/agents-sdk](https://officialskills.sh/cloudflare/skills/agents-sdk)** - 建置具備排程、RPC 與 MCP 伺服器的有狀態 AI 代理
- **[cloudflare/cloudflare](https://officialskills.sh/cloudflare/skills/cloudflare)** - 涵蓋 Workers、Pages、儲存、AI、網路、安全性與 IaC 的完整 Cloudflare 平台技能
- **[cloudflare/cloudflare-email-service](https://officialskills.sh/cloudflare/skills/cloudflare-email-service)** - 使用 Cloudflare Email Sending 與 Email Routing 傳送交易電子郵件並路由傳入郵件
- **[cloudflare/durable-objects](https://officialskills.sh/cloudflare/skills/durable-objects)** - 使用 RPC、SQLite 與 WebSockets 進行有狀態協調
- **[cloudflare/sandbox-sdk](https://officialskills.sh/cloudflare/skills/sandbox-sdk)** - 為 Workers 建置安全、隔離程式碼執行的沙箱應用程式
- **[cloudflare/web-perf](https://officialskills.sh/cloudflare/skills/web-perf)** - 稽核 Core Web Vitals 與阻塞渲染的資源
- **[cloudflare/workers-best-practices](https://officialskills.sh/cloudflare/skills/workers-best-practices)** - 依照正式環境最佳實務與 wrangler.jsonc 慣例審查並撰寫 Workers 程式碼
- **[cloudflare/wrangler](https://officialskills.sh/cloudflare/skills/wrangler)** - 部署與管理 Workers、KV、R2、D1、Vectorize、Queues、Workflows
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** - 多階段安全稽核，產出經獨立驗證、機器可讀的發現項目

</details>

<details>
<summary><h3 id="skills-by-netlify-team" style="display:inline">Netlify 團隊提供的技能</h3></summary>

- **[netlify/netlify-functions](https://officialskills.sh/netlify/skills/netlify-functions)** - 建置無伺服器 API 端點與背景工作
- **[netlify/netlify-edge-functions](https://officialskills.sh/netlify/skills/netlify-edge-functions)** - 低延遲邊緣中介軟體與地理位置邏輯
- **[netlify/netlify-blobs](https://officialskills.sh/netlify/skills/netlify-blobs)** - 用於檔案與資料的鍵值物件儲存
- **[netlify/netlify-db](https://officialskills.sh/netlify/skills/netlify-db)** - 支援部署預覽分支的受管理 Postgres
- **[netlify/netlify-image-cdn](https://officialskills.sh/netlify/skills/netlify-image-cdn)** - 透過 CDN 最佳化並轉換圖像
- **[netlify/netlify-forms](https://officialskills.sh/netlify/skills/netlify-forms)** - 具備垃圾訊息過濾功能的 HTML 表單處理
- **[netlify/netlify-frameworks](https://officialskills.sh/netlify/skills/netlify-frameworks)** - 部署支援 SSR 的網頁框架
- **[netlify/netlify-caching](https://officialskills.sh/netlify/skills/netlify-caching)** - 設定 CDN 快取與清除快取
- **[netlify/netlify-config](https://officialskills.sh/netlify/skills/netlify-config)** - netlify.toml 網站設定參考
- **[netlify/netlify-cli-and-deploy](https://officialskills.sh/netlify/skills/netlify-cli-and-deploy)** - CLI 設定、本機開發與部署工作流程
- **[netlify/netlify-deploy](https://officialskills.sh/netlify/skills/netlify-deploy)** - Netlify 網站的自動化部署工作流程
- **[netlify/netlify-ai-gateway](https://officialskills.sh/netlify/skills/netlify-ai-gateway)** - 透過統一閘道端點存取 AI 模型

</details>

<details>
<summary><h3 id="skills-by-google-labs-stitch" style="display:inline">Google Labs（Stitch）提供的技能</h3></summary>

適用於 Stitch MCP 伺服器的 Agent Skills，相容於 Claude Code、Gemini CLI、Cursor 等工具。

- **[google-labs-code/design-md](https://officialskills.sh/google-labs-code/skills/design-md)** - 建立與管理 DESIGN.md 檔案
- **[google-labs-code/enhance-prompt](https://officialskills.sh/google-labs-code/skills/enhance-prompt)** - 使用設計規格與 UI/UX 詞彙改善提示詞
- **[google-labs-code/react-components](https://officialskills.sh/google-labs-code/skills/react-components)** - 將 Stitch 轉換為 React 元件
- **[google-labs-code/remotion](https://officialskills.sh/google-labs-code/skills/remotion)** - 從 Stitch 應用程式設計產生導覽影片
- **[google-labs-code/shadcn-ui](https://officialskills.sh/google-labs-code/skills/shadcn-ui)** - 使用 shadcn/ui 建置 UI 元件
- **[google-labs-code/stitch-loop](https://officialskills.sh/google-labs-code/skills/stitch-loop)** - 反覆迭代的設計轉程式碼回饋循環

</details>

<details>
<summary><h3 id="skills-by-google-workspace-cli" style="display:inline">Google Workspace CLI 提供的技能</h3></summary>

透過 `gws` CLI 工具管理 Google Workspace 服務的官方 Google Workspace CLI 技能。

- **[googleworkspace/gws-shared](https://officialskills.sh/googleworkspace/skills/gws-shared)** - 共用驗證、全域旗標與輸出格式
- **[googleworkspace/gws-drive](https://officialskills.sh/googleworkspace/skills/gws-drive)** - 管理 Google Drive 檔案、資料夾與共用雲端硬碟
- **[googleworkspace/gws-sheets](https://officialskills.sh/googleworkspace/skills/gws-sheets)** - 讀取與寫入 Google Sheets 試算表
- **[googleworkspace/gws-gmail](https://officialskills.sh/googleworkspace/skills/gws-gmail)** - 傳送、讀取與管理 Gmail 電子郵件
- **[googleworkspace/gws-calendar](https://officialskills.sh/googleworkspace/skills/gws-calendar)** - 管理 Google Calendar 日曆與活動
- **[googleworkspace/gws-admin-reports](https://officialskills.sh/googleworkspace/skills/gws-admin-reports)** - Workspace 稽核記錄與使用報告
- **[googleworkspace/gws-docs](https://officialskills.sh/googleworkspace/skills/gws-docs)** - 讀取與撰寫 Google Docs 文件
- **[googleworkspace/gws-slides](https://officialskills.sh/googleworkspace/skills/gws-slides)** - 讀取與撰寫 Google Slides 簡報
- **[googleworkspace/gws-tasks](https://officialskills.sh/googleworkspace/skills/gws-tasks)** - 管理 Google Tasks 工作清單與工作
- **[googleworkspace/gws-people](https://officialskills.sh/googleworkspace/skills/gws-people)** - 管理 Google People 聯絡人與個人資料
- **[googleworkspace/gws-chat](https://officialskills.sh/googleworkspace/skills/gws-chat)** - 管理 Google Chat 聊天室與訊息
- **[googleworkspace/gws-classroom](https://officialskills.sh/googleworkspace/skills/gws-classroom)** - 管理 Google Classroom 班級、名冊與課程作業
- **[googleworkspace/gws-forms](https://officialskills.sh/googleworkspace/skills/gws-forms)** - 讀取與撰寫 Google Forms
- **[googleworkspace/gws-keep](https://officialskills.sh/googleworkspace/skills/gws-keep)** - 管理 Google Keep 筆記
- **[googleworkspace/gws-events](https://officialskills.sh/googleworkspace/skills/gws-events)** - 訂閱 Google Workspace 事件
- **[googleworkspace/gws-modelarmor](https://officialskills.sh/googleworkspace/skills/gws-modelarmor)** - 安全過濾使用者產生的內容
- **[googleworkspace/gws-workflow](https://officialskills.sh/googleworkspace/skills/gws-workflow)** - 跨服務的 Google Workspace 生產力工作流程

</details>

<details>
<summary><h3 id="skills-by-expo-team" style="display:inline">Expo 團隊提供的技能</h3></summary>

Expo 團隊提供的官方 AI 代理技能，用於建置、部署與偵錯 Expo 應用程式。

- **[expo/building-native-ui](https://officialskills.sh/expo/skills/building-native-ui)** - 使用 Expo Router、樣式、元件、導覽與動畫建置應用程式
- **[expo/expo-api-routes](https://officialskills.sh/expo/skills/expo-api-routes)** - 使用 EAS Hosting 在 Expo Router 中建立 API 路由
- **[expo/expo-cicd-workflows](https://officialskills.sh/expo/skills/expo-cicd-workflows)** - Expo 專案的 CI/CD 工作流程
- **[expo/expo-deployment](https://officialskills.sh/expo/skills/expo-deployment)** - 將 Expo 應用程式部署至正式環境
- **[expo/expo-dev-client](https://officialskills.sh/expo/skills/expo-dev-client)** - 在本機或透過 TestFlight 建置並散佈 Expo 開發用戶端
- **[expo/expo-tailwind-setup](https://officialskills.sh/expo/skills/expo-tailwind-setup)** - 在 Expo 中使用 NativeWind v5 設定 Tailwind CSS v4
- **[expo/expo-ui-jetpack-compose](https://officialskills.sh/expo/skills/expo-ui-jetpack-compose)** - Expo 的 Jetpack Compose UI 元件
- **[expo/expo-ui-swift-ui](https://officialskills.sh/expo/skills/expo-ui-swift-ui)** - Expo 的 SwiftUI 元件
- **[expo/native-data-fetching](https://officialskills.sh/expo/skills/native-data-fetching)** - 網路要求、API 呼叫、快取與離線支援
- **[expo/upgrading-expo](https://officialskills.sh/expo/skills/upgrading-expo)** - 升級 Expo SDK 版本
- **[expo/use-dom](https://officialskills.sh/expo/skills/use-dom)** - 在原生環境的 webview 中使用 DOM 元件執行網頁程式碼

</details>

<details>
<summary><h3 id="skills-by-hugging-face-team" style="display:inline">Hugging Face 團隊提供的技能</h3></summary>

Hugging Face 團隊提供的官方 AI 代理技能，適用於 ML 工作流程。

- **[huggingface/hf-cli](https://officialskills.sh/huggingface/skills/hf-cli)** - 用於 Hub 作業的 HF CLI 工具
- **[huggingface/hugging-face-dataset-viewer](https://officialskills.sh/huggingface/skills/hugging-face-dataset-viewer)** - 使用 Dataset Viewer API 瀏覽與查詢 HF 資料集
- **[huggingface/hugging-face-datasets](https://officialskills.sh/huggingface/skills/hugging-face-datasets)** - 使用設定檔與 SQL 查詢建立及管理資料集
- **[huggingface/hugging-face-evaluation](https://officialskills.sh/huggingface/skills/hugging-face-evaluation)** - 使用 vLLM/lighteval 與評估表格評估模型
- **[huggingface/hugging-face-jobs](https://officialskills.sh/huggingface/skills/hugging-face-jobs)** - 在 HF 基礎架構上執行運算工作與 Python 指令碼
- **[huggingface/hugging-face-model-trainer](https://officialskills.sh/huggingface/skills/hugging-face-model-trainer)** - 使用 TRL 訓練模型：SFT、DPO、GRPO、GGUF 轉換
- **[huggingface/hugging-face-paper-pages](https://officialskills.sh/huggingface/skills/hugging-face-paper-pages)** - 在 HF Hub 上建立與管理論文頁面
- **[huggingface/hugging-face-paper-publisher](https://officialskills.sh/huggingface/skills/hugging-face-paper-publisher)** - 在 HF Hub 上發布附有模型／資料集連結的論文
- **[huggingface/hugging-face-tool-builder](https://officialskills.sh/huggingface/skills/hugging-face-tool-builder)** - 為 HF API 作業建立可重複使用的指令碼
- **[huggingface/hugging-face-trackio](https://officialskills.sh/huggingface/skills/hugging-face-trackio)** - 透過即時儀表板追蹤 ML 實驗
- **[huggingface/hugging-face-vision-trainer](https://officialskills.sh/huggingface/skills/hugging-face-vision-trainer)** - 在 HF 基礎架構上訓練視覺模型
- **[huggingface/huggingface-gradio](https://officialskills.sh/huggingface/skills/huggingface-gradio)** - 建立 Gradio 應用程式並部署到 HF Spaces
- **[huggingface/transformers.js](https://officialskills.sh/huggingface/skills/transformers.js)** - 使用 Transformers.js 在瀏覽器中執行 ML 模型

</details>

<details>
<summary><h3 id="security-skills-by-trail-of-bits-team" style="display:inline">Trail of Bits 團隊提供的安全技能</h3></summary>

- **[trailofbits/ask-questions-if-underspecified](https://officialskills.sh/trailofbits/skills/ask-questions-if-underspecified)** - 針對模糊需求提出澄清問題
- **[trailofbits/audit-context-building](https://officialskills.sh/trailofbits/skills/audit-context-building)** - 透過超細緻的程式碼分析深入掌握架構脈絡
- **[trailofbits/building-secure-contracts](https://officialskills.sh/trailofbits/skills/building-secure-contracts)** - 提供涵蓋 6 條區塊鏈、含弱點掃描器的智慧合約安全工具組
- **[trailofbits/burpsuite-project-parser](https://officialskills.sh/trailofbits/skills/burpsuite-project-parser)** - 搜尋並擷取 Burp Suite 專案檔案中的資料
- **[trailofbits/claude-in-chrome-troubleshooting](https://officialskills.sh/trailofbits/skills/claude-in-chrome-troubleshooting)** - 診斷並修復 Claude in Chrome MCP 擴充功能的連線問題
- **[trailofbits/constant-time-analysis](https://officialskills.sh/trailofbits/skills/constant-time-analysis)** - 偵測加密程式碼中由編譯器引起的計時側通道
- **[trailofbits/culture-index](https://officialskills.sh/trailofbits/skills/culture-index)** - 索引與搜尋文化文件
- **[trailofbits/differential-review](https://officialskills.sh/trailofbits/skills/differential-review)** - 結合 Git 歷史分析、以安全性為重點的差異審查
- **[trailofbits/dwarf-expert](https://officialskills.sh/trailofbits/skills/dwarf-expert)** - DWARF 偵錯格式專業知識
- **[trailofbits/entry-point-analyzer](https://officialskills.sh/trailofbits/skills/entry-point-analyzer)** - 識別智慧合約中會變更狀態的進入點
- **[trailofbits/firebase-apk-scanner](https://officialskills.sh/trailofbits/skills/firebase-apk-scanner)** - 掃描 Android APK 中的 Firebase 設定錯誤與安全漏洞
- **[trailofbits/insecure-defaults](https://officialskills.sh/trailofbits/skills/insecure-defaults)** - 偵測硬編碼密鑰、預設憑證與弱加密等不安全預設設定
- **[trailofbits/modern-python](https://officialskills.sh/trailofbits/skills/modern-python)** - 使用 uv、ruff、ty 與 pytest 最佳實務的現代 Python 工具
- **[trailofbits/property-based-testing](https://officialskills.sh/trailofbits/skills/property-based-testing)** - 適用於多種語言與智慧合約的屬性式測試
- **[trailofbits/semgrep-rule-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-creator)** - 建立並精修 Semgrep 規則以偵測弱點
- **[trailofbits/semgrep-rule-variant-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-variant-creator)** - 將現有 Semgrep 規則移植至新目標語言，並以測試驅動驗證
- **[trailofbits/sharp-edges](https://officialskills.sh/trailofbits/skills/sharp-edges)** - 識別容易出錯的 API 與危險設定
- **[trailofbits/spec-to-code-compliance](https://officialskills.sh/trailofbits/skills/spec-to-code-compliance)** - 用於區塊鏈稽核的規格與程式碼相符性檢查器
- **[trailofbits/static-analysis](https://officialskills.sh/trailofbits/skills/static-analysis)** - 含 CodeQL、Semgrep 與 SARIF 的靜態分析工具組
- **[trailofbits/testing-handbook-skills](https://officialskills.sh/trailofbits/skills/testing-handbook-skills)** - Testing Handbook 技能：模糊測試器、靜態分析、消毒器
- **[trailofbits/variant-analysis](https://officialskills.sh/trailofbits/skills/variant-analysis)** - 透過模式分析找出相似弱點

</details>

<details>
<summary><h3 id="skills-by-sentry-team-for-their-dev-team" style="display:inline">Sentry 開發團隊提供的技能</h3></summary>

- **[getsentry/sentry-sdk-setup](https://officialskills.sh/getsentry/skills/sentry-sdk-setup)** - 在任何語言或框架中設定 Sentry——自動偵測平台並選擇適用的 SDK
- **[getsentry/sentry-workflow](https://officialskills.sh/getsentry/skills/sentry-workflow)** - 端對端 Sentry 工作流程：使用 Sentry 脈絡修正正式環境問題並審查程式碼
- **[getsentry/sentry-fix-issues](https://officialskills.sh/getsentry/skills/sentry-fix-issues)** - 透過 MCP 搭配堆疊追蹤、麵包屑與追蹤脈絡尋找並修復 Sentry 問題
- **[getsentry/sentry-code-review](https://officialskills.sh/getsentry/skills/sentry-code-review)** - 使用 Sentry 問題與追蹤脈絡審查程式碼變更
- **[getsentry/sentry-pr-code-review](https://officialskills.sh/getsentry/skills/sentry-pr-code-review)** - 審查 Seer Bug Prediction 與 Sentry 回饋留下的 PR 留言
- **[getsentry/sentry-create-alert](https://officialskills.sh/getsentry/skills/sentry-create-alert)** - 使用電子郵件、Slack、PagerDuty、Discord 等服務建立 Sentry 警示
- **[getsentry/sentry-feature-setup](https://officialskills.sh/getsentry/skills/sentry-feature-setup)** - 設定進階 Sentry 功能：AI 監控、OTel 管線與警示
- **[getsentry/sentry-otel-exporter-setup](https://officialskills.sh/getsentry/skills/sentry-otel-exporter-setup)** - 使用 Sentry Exporter 設定 OpenTelemetry Collector
- **[getsentry/sentry-setup-ai-monitoring](https://officialskills.sh/getsentry/skills/sentry-setup-ai-monitoring)** - 為 OpenAI、Anthropic、Vercel AI、LangChain、Google GenAI 與 Pydantic AI 加入檢測
- **[getsentry/sentry-sdk-upgrade](https://officialskills.sh/getsentry/skills/sentry-sdk-upgrade)** - 跨主要版本升級 Sentry JavaScript SDK
- **[getsentry/sentry-sdk-skill-creator](https://officialskills.sh/getsentry/skills/sentry-sdk-skill-creator)** - 為平台建立新的 Sentry SDK 技能套件
- **[getsentry/sentry-android-sdk](https://officialskills.sh/getsentry/skills/sentry-android-sdk)** - Android 的完整 Sentry SDK 設定（Kotlin 與 Java）
- **[getsentry/sentry-browser-sdk](https://officialskills.sh/getsentry/skills/sentry-browser-sdk)** - 瀏覽器 JavaScript 的完整 Sentry SDK 設定
- **[getsentry/sentry-cloudflare-sdk](https://officialskills.sh/getsentry/skills/sentry-cloudflare-sdk)** - Cloudflare Workers、Pages、Durable Objects、Queues 與 Workflows 的完整 Sentry SDK 設定
- **[getsentry/sentry-cocoa-sdk](https://officialskills.sh/getsentry/skills/sentry-cocoa-sdk)** - Apple 平台（iOS、macOS、tvOS、watchOS、visionOS）的完整 Sentry SDK 設定
- **[getsentry/sentry-dotnet-sdk](https://officialskills.sh/getsentry/skills/sentry-dotnet-sdk)** - .NET 的完整 Sentry SDK 設定（ASP.NET Core、MAUI、WPF、WinForms、Blazor、Azure Functions）
- **[getsentry/sentry-elixir-sdk](https://officialskills.sh/getsentry/skills/sentry-elixir-sdk)** - Elixir、Phoenix、Plug、LiveView、Oban 與 Quantum 的完整 Sentry SDK 設定
- **[getsentry/sentry-flutter-sdk](https://officialskills.sh/getsentry/skills/sentry-flutter-sdk)** - 所有平台的 Flutter 與 Dart 完整 Sentry SDK 設定
- **[getsentry/sentry-go-sdk](https://officialskills.sh/getsentry/skills/sentry-go-sdk)** - Go 的完整 Sentry SDK 設定（net/http、Gin、Echo、Fiber、FastHTTP、Iris、Negroni）
- **[getsentry/sentry-nestjs-sdk](https://officialskills.sh/getsentry/skills/sentry-nestjs-sdk)** - 搭配 Express 或 Fastify、GraphQL、微服務的 NestJS 完整 Sentry SDK 設定
- **[getsentry/sentry-nextjs-sdk](https://officialskills.sh/getsentry/skills/sentry-nextjs-sdk)** - Next.js 13+ 的完整 Sentry SDK 設定（App Router 與 Pages Router）
- **[getsentry/sentry-node-sdk](https://officialskills.sh/getsentry/skills/sentry-node-sdk)** - Node.js、Bun 與 Deno 的完整 Sentry SDK 設定
- **[getsentry/sentry-php-sdk](https://officialskills.sh/getsentry/skills/sentry-php-sdk)** - PHP、Laravel 與 Symfony 的完整 Sentry SDK 設定
- **[getsentry/sentry-python-sdk](https://officialskills.sh/getsentry/skills/sentry-python-sdk)** - Python 的完整 Sentry SDK 設定（Django、Flask、FastAPI、Celery、Starlette、AIOHTTP、Tornado）
- **[getsentry/sentry-react-native-sdk](https://officialskills.sh/getsentry/skills/sentry-react-native-sdk)** - React Native 與 Expo 的完整 Sentry SDK 設定
- **[getsentry/sentry-react-sdk](https://officialskills.sh/getsentry/skills/sentry-react-sdk)** - React 的完整 Sentry SDK 設定（React Router v5-v7、TanStack Router、Redux、Vite、webpack）
- **[getsentry/sentry-ruby-sdk](https://officialskills.sh/getsentry/skills/sentry-ruby-sdk)** - Ruby 的完整 Sentry SDK 設定（Rails、Sinatra、Rack、Sidekiq、Resque）
- **[getsentry/sentry-svelte-sdk](https://officialskills.sh/getsentry/skills/sentry-svelte-sdk)** - Svelte 與 SvelteKit 的完整 Sentry SDK 設定

</details>

<details>
<summary><h3 id="skills-by-microsoft" style="display:inline">Microsoft 提供的技能</h3></summary>

適用於 Azure SDK 與 Microsoft AI Foundry 開發的領域專業知識，涵蓋 6 種語言的 133 項技能。

### 核心技能 <a id="core-skills"></a>

- **[microsoft/cloud-solution-architect](https://officialskills.sh/microsoft/skills/cloud-solution-architect)** - 設計符合架構良好原則的 Azure 雲端系統
- **[microsoft/continual-learning](https://officialskills.sh/microsoft/skills/continual-learning)** - Azure AI 的持續學習模式
- **[microsoft/copilot-sdk](https://officialskills.sh/microsoft/skills/copilot-sdk)** - 建置由 GitHub Copilot SDK 驅動的應用程式
- **[microsoft/entra-agent-id](https://officialskills.sh/microsoft/skills/entra-agent-id)** - 透過 Graph API 使用 Microsoft Entra Agent ID OAuth2 身分識別
- **[microsoft/frontend-design-review](https://officialskills.sh/microsoft/skills/frontend-design-review)** - 審查並建立獨具特色的前端介面
- **[microsoft/github-issue-creator](https://officialskills.sh/microsoft/skills/github-issue-creator)** - 根據筆記撰寫結構化的 GitHub issue 報告
- **[microsoft/mcp-builder](https://officialskills.sh/microsoft/skills/mcp-builder)** - LLM 工具整合的 MCP 伺服器建立指南
- **[microsoft/podcast-generation](https://officialskills.sh/microsoft/skills/podcast-generation)** - 使用 Azure OpenAI Realtime API 產生 AI Podcast 音訊
- **[microsoft/skill-creator](https://officialskills.sh/microsoft/skills/skill-creator)** - 建立適用於 AI 程式設計代理的有效技能指南

### .NET 技能 <a id="net-skills"></a>

- **[microsoft/azure-ai-document-intelligence-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-dotnet)** - 文件文字、表格與資料擷取
- **[microsoft/azure-ai-openai-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-openai-dotnet)** - GPT-4、embeddings、DALL-E 與 Whisper 用戶端
- **[microsoft/azure-ai-projects-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-projects-dotnet)** - AI Foundry 專案管理 SDK
- **[microsoft/azure-ai-voicelive-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-dotnet)** - 即時雙向語音 AI
- **[microsoft/azure-eventgrid-dotnet](https://officialskills.sh/microsoft/skills/azure-eventgrid-dotnet)** - Event Grid 主題與網域發布
- **[microsoft/azure-eventhub-dotnet](https://officialskills.sh/microsoft/skills/azure-eventhub-dotnet)** - 高輸送量事件串流
- **[microsoft/azure-identity-dotnet](https://officialskills.sh/microsoft/skills/azure-identity-dotnet)** - Microsoft Entra ID 驗證
- **[microsoft/azure-maps-search-dotnet](https://officialskills.sh/microsoft/skills/azure-maps-search-dotnet)** - 地理編碼、路由與天氣服務
- **[microsoft/azure-mgmt-apicenter-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-dotnet)** - API 目錄與治理
- **[microsoft/azure-mgmt-apimanagement-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-dotnet)** - 透過 ARM 配置 API Management
- **[microsoft/azure-mgmt-applicationinsights-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-applicationinsights-dotnet)** - Application Insights 資源管理
- **[microsoft/azure-mgmt-arizeaiobservabilityeval-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-arizeaiobservabilityeval-dotnet)** - Arize AI 可觀測性管理
- **[microsoft/azure-mgmt-botservice-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-dotnet)** - 透過 ARM 配置 Bot Service
- **[microsoft/azure-mgmt-fabric-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-dotnet)** - Microsoft Fabric 容量管理
- **[microsoft/azure-mgmt-mongodbatlas-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-mongodbatlas-dotnet)** - 以 ARM 資源管理 MongoDB Atlas
- **[microsoft/azure-mgmt-weightsandbiases-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-weightsandbiases-dotnet)** - Weights & Biases 部署管理
- **[microsoft/azure-resource-manager-cosmosdb-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-cosmosdb-dotnet)** - Cosmos DB 資源配置
- **[microsoft/azure-resource-manager-durabletask-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-durabletask-dotnet)** - Durable Task Scheduler 管理
- **[microsoft/azure-resource-manager-mysql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-mysql-dotnet)** - MySQL Flexible Server 管理
- **[microsoft/azure-resource-manager-playwright-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-playwright-dotnet)** - Playwright Testing 工作區管理
- **[microsoft/azure-resource-manager-postgresql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-postgresql-dotnet)** - PostgreSQL Flexible Server 管理
- **[microsoft/azure-resource-manager-redis-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-redis-dotnet)** - Azure Cache for Redis 資源配置
- **[microsoft/azure-resource-manager-sql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-sql-dotnet)** - Azure SQL 資源管理
- **[microsoft/azure-search-documents-dotnet](https://officialskills.sh/microsoft/skills/azure-search-documents-dotnet)** - 全文、向量與混合式搜尋
- **[microsoft/azure-security-keyvault-keys-dotnet](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-dotnet)** - 加密金鑰管理
- **[microsoft/azure-servicebus-dotnet](https://officialskills.sh/microsoft/skills/azure-servicebus-dotnet)** - 使用佇列與主題的企業級訊息傳遞
- **[microsoft/m365-agents-dotnet](https://officialskills.sh/microsoft/skills/m365-agents-dotnet)** - M365、Teams 與 Copilot Studio 代理
- **[microsoft/microsoft-azure-webjobs-extensions-authentication-events-dotnet](https://officialskills.sh/microsoft/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet)** - Entra ID 自訂驗證事件處理常式

### Java 技能 <a id="java-skills"></a>

- **[microsoft/azure-ai-anomalydetector-java](https://officialskills.sh/microsoft/skills/azure-ai-anomalydetector-java)** - 異常偵測應用程式
- **[microsoft/azure-ai-contentsafety-java](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-java)** - 內容審核與安全性
- **[microsoft/azure-ai-formrecognizer-java](https://officialskills.sh/microsoft/skills/azure-ai-formrecognizer-java)** - 文件分析與表單擷取
- **[microsoft/azure-ai-projects-java](https://officialskills.sh/microsoft/skills/azure-ai-projects-java)** - AI Foundry 專案管理
- **[microsoft/azure-ai-vision-imageanalysis-java](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-java)** - 圖像說明、OCR 與物件偵測
- **[microsoft/azure-ai-voicelive-java](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-java)** - 即時雙向語音 AI
- **[microsoft/azure-appconfiguration-java](https://officialskills.sh/microsoft/skills/azure-appconfiguration-java)** - 集中式應用程式設定管理
- **[microsoft/azure-communication-callautomation-java](https://officialskills.sh/microsoft/skills/azure-communication-callautomation-java)** - 使用 IVR 與 AI 進行通話自動化
- **[microsoft/azure-communication-callingserver-java](https://officialskills.sh/microsoft/skills/azure-communication-callingserver-java)** - CallingServer 舊版 SDK
- **[microsoft/azure-communication-chat-java](https://officialskills.sh/microsoft/skills/azure-communication-chat-java)** - 具備討論串與回執的即時聊天
- **[microsoft/azure-communication-common-java](https://officialskills.sh/microsoft/skills/azure-communication-common-java)** - Communication Services 共用工具
- **[microsoft/azure-communication-sms-java](https://officialskills.sh/microsoft/skills/azure-communication-sms-java)** - 簡訊傳送與送達報告
- **[microsoft/azure-compute-batch-java](https://officialskills.sh/microsoft/skills/azure-compute-batch-java)** - 大規模平行與 HPC 批次工作
- **[microsoft/azure-cosmos-java](https://officialskills.sh/microsoft/skills/azure-cosmos-java)** - 具備全球分佈的 Cosmos DB NoSQL
- **[microsoft/azure-data-tables-java](https://officialskills.sh/microsoft/skills/azure-data-tables-java)** - NoSQL 鍵值資料表儲存
- **[microsoft/azure-eventgrid-java](https://officialskills.sh/microsoft/skills/azure-eventgrid-java)** - 事件驅動的 pub/sub 訊息傳遞
- **[microsoft/azure-eventhub-java](https://officialskills.sh/microsoft/skills/azure-eventhub-java)** - 即時高輸送量串流
- **[microsoft/azure-identity-java](https://officialskills.sh/microsoft/skills/azure-identity-java)** - Microsoft Entra ID 驗證
- **[microsoft/azure-messaging-webpubsub-java](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsub-java)** - 即時 WebSocket 訊息傳遞
- **[microsoft/azure-monitor-ingestion-java](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-java)** - 將自訂記錄擷取至 Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-java](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-java)** - 將 OpenTelemetry 匯出至 Azure Monitor
- **[microsoft/azure-monitor-query-java](https://officialskills.sh/microsoft/skills/azure-monitor-query-java)** - 查詢 Azure Monitor 記錄與指標
- **[microsoft/azure-security-keyvault-keys-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-java)** - 加密金鑰管理
- **[microsoft/azure-security-keyvault-secrets-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-secrets-java)** - 密碼與金鑰的機密管理
- **[microsoft/azure-storage-blob-java](https://officialskills.sh/microsoft/skills/azure-storage-blob-java)** - 用於檔案管理的 Blob 儲存體

### Python 技能 <a id="python-skills"></a>

- **[microsoft/agent-framework-azure-ai-py](https://officialskills.sh/microsoft/skills/agent-framework-azure-ai-py)** - 適用於 Azure AI Foundry 的 Agent Framework
- **[microsoft/agents-v2-py](https://officialskills.sh/microsoft/skills/agents-v2-py)** - Foundry Agents SDK——使用自訂映像的容器式代理
- **[microsoft/azure-ai-contentsafety-py](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-py)** - 有害內容偵測
- **[microsoft/azure-ai-contentunderstanding-py](https://officialskills.sh/microsoft/skills/azure-ai-contentunderstanding-py)** - 多模態內容擷取
- **[microsoft/azure-ai-ml-py](https://officialskills.sh/microsoft/skills/azure-ai-ml-py)** - Azure ML 工作區與工作管理
- **[microsoft/azure-ai-projects-py](https://officialskills.sh/microsoft/skills/azure-ai-projects-py)** - AI Foundry 專案用戶端與代理
- **[microsoft/azure-ai-textanalytics-py](https://officialskills.sh/microsoft/skills/azure-ai-textanalytics-py)** - NLP：情緒、實體、關鍵詞組
- **[microsoft/azure-ai-transcription-py](https://officialskills.sh/microsoft/skills/azure-ai-transcription-py)** - 語音轉文字轉錄
- **[microsoft/azure-ai-translation-document-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-document-py)** - 批次文件翻譯
- **[microsoft/azure-ai-translation-text-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-text-py)** - 即時文字翻譯
- **[microsoft/azure-ai-vision-imageanalysis-py](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-py)** - 圖像說明、標籤、OCR、物件
- **[microsoft/azure-ai-voicelive-py](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-py)** - 即時雙向語音 AI
- **[microsoft/azure-appconfiguration-py](https://officialskills.sh/microsoft/skills/azure-appconfiguration-py)** - 功能旗標與動態設定
- **[microsoft/azure-containerregistry-py](https://officialskills.sh/microsoft/skills/azure-containerregistry-py)** - 容器映像與登錄檔管理
- **[microsoft/azure-cosmos-db-py](https://officialskills.sh/microsoft/skills/azure-cosmos-db-py)** - 使用 Python/FastAPI 模式的 Cosmos DB
- **[microsoft/azure-cosmos-py](https://officialskills.sh/microsoft/skills/azure-cosmos-py)** - Cosmos DB NoSQL 用戶端程式庫
- **[microsoft/azure-data-tables-py](https://officialskills.sh/microsoft/skills/azure-data-tables-py)** - NoSQL 鍵值資料表儲存
- **[microsoft/azure-eventgrid-py](https://officialskills.sh/microsoft/skills/azure-eventgrid-py)** - 事件驅動的 pub/sub 路由
- **[microsoft/azure-eventhub-py](https://officialskills.sh/microsoft/skills/azure-eventhub-py)** - 高輸送量事件串流
- **[microsoft/azure-identity-py](https://officialskills.sh/microsoft/skills/azure-identity-py)** - Microsoft Entra ID 驗證
- **[microsoft/azure-keyvault-py](https://officialskills.sh/microsoft/skills/azure-keyvault-py)** - 機密、金鑰與憑證管理
- **[microsoft/azure-messaging-webpubsubservice-py](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsubservice-py)** - 即時 WebSocket 訊息傳遞
- **[microsoft/azure-mgmt-apicenter-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-py)** - API 目錄與治理
- **[microsoft/azure-mgmt-apimanagement-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-py)** - API Management 服務管理
- **[microsoft/azure-mgmt-botservice-py](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-py)** - Bot Service 資源管理
- **[microsoft/azure-mgmt-fabric-py](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-py)** - Microsoft Fabric 容量管理
- **[microsoft/azure-monitor-ingestion-py](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-py)** - 將自訂記錄擷取至 Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-py)** - 將 OpenTelemetry 匯出至 Application Insights
- **[microsoft/azure-monitor-opentelemetry-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-py)** - 一行指令設定 Application Insights
- **[microsoft/azure-monitor-query-py](https://officialskills.sh/microsoft/skills/azure-monitor-query-py)** - 查詢 Azure Monitor 記錄與指標
- **[microsoft/azure-search-documents-py](https://officialskills.sh/microsoft/skills/azure-search-documents-py)** - 全文、向量與混合式搜尋
- **[microsoft/azure-servicebus-py](https://officialskills.sh/microsoft/skills/azure-servicebus-py)** - 使用佇列與主題的企業級訊息傳遞
- **[microsoft/azure-speech-to-text-rest-py](https://officialskills.sh/microsoft/skills/azure-speech-to-text-rest-py)** - 適用於短音訊的 REST 語音轉文字
- **[microsoft/azure-storage-blob-py](https://officialskills.sh/microsoft/skills/azure-storage-blob-py)** - Blob 物件儲存用戶端
- **[microsoft/azure-storage-file-datalake-py](https://officialskills.sh/microsoft/skills/azure-storage-file-datalake-py)** - 階層式資料湖儲存
- **[microsoft/azure-storage-file-share-py](https://officialskills.sh/microsoft/skills/azure-storage-file-share-py)** - SMB 檔案共用管理
- **[microsoft/azure-storage-queue-py](https://officialskills.sh/microsoft/skills/azure-storage-queue-py)** - 簡易訊息佇列
- **[microsoft/fastapi-router-py](https://officialskills.sh/microsoft/skills/fastapi-router-py)** - 支援 CRUD 與驗證的 FastAPI 路由器
- **[microsoft/m365-agents-py](https://officialskills.sh/microsoft/skills/m365-agents-py)** - M365、Teams 與 Copilot Studio 代理
- **[microsoft/pydantic-models-py](https://officialskills.sh/microsoft/skills/pydantic-models-py)** - 用於 API 結構描述的 Pydantic 模型

### Rust 技能 <a id="rust-skills"></a>

- **[microsoft/azure-cosmos-rust](https://officialskills.sh/microsoft/skills/azure-cosmos-rust)** - Cosmos DB NoSQL 用戶端
- **[microsoft/azure-eventhub-rust](https://officialskills.sh/microsoft/skills/azure-eventhub-rust)** - Event Hubs 串流用戶端
- **[microsoft/azure-identity-rust](https://officialskills.sh/microsoft/skills/azure-identity-rust)** - Microsoft Entra ID 驗證
- **[microsoft/azure-keyvault-certificates-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-certificates-rust)** - Key Vault 憑證管理
- **[microsoft/azure-keyvault-keys-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-rust)** - Key Vault 加密金鑰管理
- **[microsoft/azure-keyvault-secrets-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-rust)** - Key Vault 機密儲存
- **[microsoft/azure-storage-blob-rust](https://officialskills.sh/microsoft/skills/azure-storage-blob-rust)** - Blob 物件儲存用戶端

### TypeScript 技能 <a id="typescript-skills"></a>

- **[microsoft/azure-ai-contentsafety-ts](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-ts)** - 文字與圖像內容安全
- **[microsoft/azure-ai-document-intelligence-ts](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-ts)** - 文件文字與表格擷取
- **[microsoft/azure-ai-projects-ts](https://officialskills.sh/microsoft/skills/azure-ai-projects-ts)** - AI Foundry 專案用戶端與代理
- **[microsoft/azure-ai-translation-ts](https://officialskills.sh/microsoft/skills/azure-ai-translation-ts)** - 文字與文件翻譯
- **[microsoft/azure-ai-voicelive-ts](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-ts)** - 即時雙向語音 AI
- **[microsoft/azure-appconfiguration-ts](https://officialskills.sh/microsoft/skills/azure-appconfiguration-ts)** - 應用程式設定、功能旗標、動態重新整理
- **[microsoft/azure-cosmos-ts](https://officialskills.sh/microsoft/skills/azure-cosmos-ts)** - Cosmos DB NoSQL CRUD 與查詢
- **[microsoft/azure-eventhub-ts](https://officialskills.sh/microsoft/skills/azure-eventhub-ts)** - 高輸送量事件串流
- **[microsoft/azure-identity-ts](https://officialskills.sh/microsoft/skills/azure-identity-ts)** - Microsoft Entra ID 驗證
- **[microsoft/azure-keyvault-keys-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-ts)** - 加密金鑰管理
- **[microsoft/azure-keyvault-secrets-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-ts)** - 機密儲存與擷取
- **[microsoft/azure-microsoft-playwright-testing-ts](https://officialskills.sh/microsoft/skills/azure-microsoft-playwright-testing-ts)** - 在 Azure 上大規模執行 Playwright 測試
- **[microsoft/azure-monitor-opentelemetry-ts](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-ts)** - Application Insights 追蹤與指標
- **[microsoft/azure-postgres-ts](https://officialskills.sh/microsoft/skills/azure-postgres-ts)** - PostgreSQL Flexible Server 連線
- **[microsoft/azure-search-documents-ts](https://officialskills.sh/microsoft/skills/azure-search-documents-ts)** - 具備語意排名的向量／混合式搜尋
- **[microsoft/azure-servicebus-ts](https://officialskills.sh/microsoft/skills/azure-servicebus-ts)** - 使用佇列與主題進行訊息傳遞
- **[microsoft/azure-storage-blob-ts](https://officialskills.sh/microsoft/skills/azure-storage-blob-ts)** - Blob 上傳、下載與管理
- **[microsoft/azure-storage-file-share-ts](https://officialskills.sh/microsoft/skills/azure-storage-file-share-ts)** - SMB 檔案共用作業
- **[microsoft/azure-storage-queue-ts](https://officialskills.sh/microsoft/skills/azure-storage-queue-ts)** - 佇列訊息作業
- **[microsoft/azure-web-pubsub-ts](https://officialskills.sh/microsoft/skills/azure-web-pubsub-ts)** - 即時 WebSocket pub/sub 訊息傳遞
- **[microsoft/frontend-ui-dark-ts](https://officialskills.sh/microsoft/skills/frontend-ui-dark-ts)** - 使用 Tailwind 與動畫打造深色主題 React 介面
- **[microsoft/m365-agents-ts](https://officialskills.sh/microsoft/skills/m365-agents-ts)** - M365、Teams 與 Copilot Studio 代理
- **[microsoft/react-flow-node-ts](https://officialskills.sh/microsoft/skills/react-flow-node-ts)** - 搭配 Zustand 的 React Flow 節點元件
- **[microsoft/zustand-store-ts](https://officialskills.sh/microsoft/skills/zustand-store-ts)** - 使用中介軟體模式的 Zustand store

</details>

<details>
<summary><h3 id="skills-by-falai-team" style="display:inline">fal.ai 團隊提供的技能</h3></summary>

- **[fal-ai-community/fal-3d](https://officialskills.sh/fal-ai-community/skills/fal-3d)** - 從文字或圖像產生 3D 模型
- **[fal-ai-community/fal-audio](https://officialskills.sh/fal-ai-community/skills/fal-audio)** - 使用 fal.ai 音訊模型進行文字轉語音與語音轉文字
- **[fal-ai-community/fal-generate](https://officialskills.sh/fal-ai-community/skills/fal-generate)** - 使用 fal.ai AI 模型產生圖像與影片
- **[fal-ai-community/fal-image-edit](https://officialskills.sh/fal-ai-community/skills/fal-image-edit)** - 透過風格轉換與物件移除實現 AI 圖像編輯
- **[fal-ai-community/fal-kling-o3](https://officialskills.sh/fal-ai-community/skills/fal-kling-o3)** - 使用 Kling O3 產生圖像與影片——Kling 最強大的模型系列
- **[fal-ai-community/fal-lip-sync](https://officialskills.sh/fal-ai-community/skills/fal-lip-sync)** - 建立會說話的人像影片，並將音訊與影片對嘴
- **[fal-ai-community/fal-platform](https://officialskills.sh/fal-ai-community/skills/fal-platform)** - 模型管理、定價與使用量追蹤的平台 API
- **[fal-ai-community/fal-realtime](https://officialskills.sh/fal-ai-community/skills/fal-realtime)** - 即時與串流 AI 圖像生成
- **[fal-ai-community/fal-restore](https://officialskills.sh/fal-ai-community/skills/fal-restore)** - 修復並改善圖像品質——去模糊、降噪、修復人臉與文件
- **[fal-ai-community/fal-train](https://officialskills.sh/fal-ai-community/skills/fal-train)** - 在 fal.ai 上訓練自訂 AI 模型（LoRA），以個人化圖像生成
- **[fal-ai-community/fal-tryon](https://officialskills.sh/fal-ai-community/skills/fal-tryon)** - 虛擬試穿——預覽衣服穿在人身上的效果
- **[fal-ai-community/fal-upscale](https://officialskills.sh/fal-ai-community/skills/fal-upscale)** - 使用 AI 提升並改善圖像與影片解析度
- **[fal-ai-community/fal-video-edit](https://officialskills.sh/fal-ai-community/skills/fal-video-edit)** - 使用 AI 編輯現有影片——重新混合風格、升頻、移除背景、加入音訊
- **[fal-ai-community/fal-vision](https://officialskills.sh/fal-ai-community/skills/fal-vision)** - 分析圖像——分割物件、偵測、OCR、描述、視覺問答
- **[fal-ai-community/fal-workflow](https://officialskills.sh/fal-ai-community/skills/fal-workflow)** - 產生串接 AI 模型的工作流程 JSON 檔案

</details>

<details>
<summary><h3 id="skills-by-wordpress-development-team" style="display:inline">WordPress 開發團隊提供的技能</h3></summary>

- **[WordPress/wordpress-router](https://officialskills.sh/WordPress/skills/wordpress-router)** - 分類 WordPress 儲存庫並導向適當工作流程
- **[WordPress/wp-project-triage](https://officialskills.sh/WordPress/skills/wp-project-triage)** - 自動偵測專案類型、工具與版本
- **[WordPress/wp-block-development](https://officialskills.sh/WordPress/skills/wp-block-development)** - Gutenberg 區塊：block.json、屬性、渲染、棄用
- **[WordPress/wp-block-themes](https://officialskills.sh/WordPress/skills/wp-block-themes)** - 區塊佈景主題：theme.json、範本、模式、樣式變體
- **[WordPress/wp-plugin-development](https://officialskills.sh/WordPress/skills/wp-plugin-development)** - 外掛架構、hooks、設定 API、安全性
- **[WordPress/wp-rest-api](https://officialskills.sh/WordPress/skills/wp-rest-api)** - REST API 路由／端點、結構描述、驗證與回應塑形
- **[WordPress/wp-interactivity-api](https://officialskills.sh/WordPress/skills/wp-interactivity-api)** - 使用 data-wp-* 指令與 store 實作前端互動
- **[WordPress/wp-abilities-api](https://officialskills.sh/WordPress/skills/wp-abilities-api)** - 以能力為基礎的權限與 REST API 驗證
- **[WordPress/wp-wpcli-and-ops](https://officialskills.sh/WordPress/skills/wp-wpcli-and-ops)** - WP-CLI 指令、自動化、多站點、搜尋取代
- **[WordPress/wp-performance](https://officialskills.sh/WordPress/skills/wp-performance)** - 剖析、快取、資料庫最佳化、Server-Timing
- **[WordPress/wp-phpstan](https://officialskills.sh/WordPress/skills/wp-phpstan)** - WordPress 專案的 PHPStan 靜態分析
- **[WordPress/wp-playground](https://officialskills.sh/WordPress/skills/wp-playground)** - 用於即時本機環境的 WordPress Playground
- **[WordPress/wpds](https://officialskills.sh/WordPress/skills/wpds)** - WordPress 設計系統

</details>

<details>
<summary><h3 id="skills-by-openai" style="display:inline">OpenAI 提供的技能</h3></summary>

OpenAI 技能儲存庫的官方精選技能。

- **[openai/cloudflare-deploy](https://officialskills.sh/openai/skills/cloudflare-deploy)** - 使用 Workers、Pages 與平台服務將應用程式部署至 Cloudflare
- **[openai/develop-web-game](https://officialskills.sh/openai/skills/develop-web-game)** - 使用 Playwright 與時間步進迭代建置並測試網頁遊戲
- **[openai/doc](https://officialskills.sh/openai/skills/doc)** - 以保留格式與版面忠實度的方式讀取、建立與編輯 .docx 文件
- **[openai/gh-address-comments](https://officialskills.sh/openai/skills/gh-address-comments)** - 透過 CLI 處理 GitHub PR 的審查與 issue 留言
- **[openai/gh-fix-ci](https://officialskills.sh/openai/skills/gh-fix-ci)** - 透過檢視記錄偵錯並修復失敗的 GitHub Actions PR 檢查
- **[openai/imagegen](https://officialskills.sh/openai/skills/imagegen)** - 使用 OpenAI Image API 為專案產生與編輯圖像
- **[openai/jupyter-notebook](https://officialskills.sh/openai/skills/jupyter-notebook)** - 為實驗與教學建立乾淨、可重現的 Jupyter notebook
- **[openai/linear](https://officialskills.sh/openai/skills/linear)** - 在 Linear 管理 issues、專案與團隊工作流程
- **[openai/netlify-deploy](https://officialskills.sh/openai/skills/netlify-deploy)** - 使用 CLI 驗證、連結與環境支援自動化 Netlify 部署
- **[openai/notion-knowledge-capture](https://officialskills.sh/openai/skills/notion-knowledge-capture)** - 將對話轉換為結構化、可搜尋的 Notion wiki 項目
- **[openai/notion-meeting-intelligence](https://officialskills.sh/openai/skills/notion-meeting-intelligence)** - 擷取 Notion 脈絡並量身訂製議程，做好會議準備
- **[openai/notion-research-documentation](https://officialskills.sh/openai/skills/notion-research-documentation)** - 研究 Notion 內容並將發現綜整為結構化簡報
- **[openai/notion-spec-to-implementation](https://officialskills.sh/openai/skills/notion-spec-to-implementation)** - 將 Notion 規格轉換為互相連結的實作計畫與工作
- **[openai/openai-docs](https://officialskills.sh/openai/skills/openai-docs)** - 根據 OpenAI 開發者文件提供權威指引
- **[openai/pdf](https://officialskills.sh/openai/skills/pdf)** - 讀取、建立與審閱 PDF，同時維持版面與視覺格式完整性
- **[openai/playwright](https://officialskills.sh/openai/skills/playwright)** - 自動化瀏覽器中的實際互動，以進行導覽、表單填寫與網頁擷取
- **[openai/render-deploy](https://officialskills.sh/openai/skills/render-deploy)** - 使用 Git 支援的服務將應用程式部署至 Render 雲端平台
- **[openai/screenshot](https://officialskills.sh/openai/skills/screenshot)** - 跨作業系統平台擷取桌面、應用程式視窗或像素區域
- **[openai/security-best-practices](https://officialskills.sh/openai/skills/security-best-practices)** - 審查程式碼中的語言專屬安全漏洞
- **[openai/security-ownership-map](https://officialskills.sh/openai/skills/security-ownership-map)** - 建立人員與檔案的負責關係圖、計算 bus factor 並識別風險
- **[openai/security-threat-model](https://officialskills.sh/openai/skills/security-threat-model)** - 產生依儲存庫量身打造、識別信任邊界的威脅模型
- **[openai/sentry](https://officialskills.sh/openai/skills/sentry)** - 檢視 Sentry 問題、摘要正式環境錯誤並擷取健康狀態資料
- **[openai/sora](https://officialskills.sh/openai/skills/sora)** - 透過 OpenAI Sora API 產生、重新混製與管理短片
- **[openai/speech](https://officialskills.sh/openai/skills/speech)** - 使用 OpenAI API 內建語音，從文字產生語音
- **[openai/spreadsheet](https://officialskills.sh/openai/skills/spreadsheet)** - 使用公式建立、編輯、分析與視覺化試算表
- **[openai/transcribe](https://officialskills.sh/openai/skills/transcribe)** - 將音訊檔案轉錄為文字，並可選擇進行說話者分離
- **[openai/vercel-deploy](https://officialskills.sh/openai/skills/vercel-deploy)** - 使用預覽或正式環境選項將應用程式與網站部署至 Vercel
- **[openai/yeet](https://officialskills.sh/openai/skills/yeet)** - 透過 CLI 暫存、提交、推送程式碼並建立 GitHub pull request
- **[openai/aspnet-core](https://officialskills.sh/openai/skills/aspnet-core)** - 建置、審查與規劃 ASP.NET Core 應用程式架構（Blazor、MVC、Minimal APIs 等）
- **[openai/chatgpt-apps](https://officialskills.sh/openai/skills/chatgpt-apps)** - 使用 MCP 伺服器與 widget UI 建置、建立骨架並排解 ChatGPT Apps SDK 應用程式問題
- **[openai/figma](https://officialskills.sh/openai/skills/figma)** - 使用 Figma MCP 伺服器取得設計脈絡，並將節點轉換為正式環境程式碼
- **[openai/figma-code-connect-components](https://officialskills.sh/openai/skills/figma-code-connect-components)** - 使用 Code Connect 將 Figma 設計元件連結至程式碼元件
- **[openai/figma-create-design-system-rules](https://officialskills.sh/openai/skills/figma-create-design-system-rules)** - 使用 Figma MCP 伺服器實作 Figma 設計的規則
- **[openai/figma-create-new-file](https://officialskills.sh/openai/skills/figma-create-new-file)** - 建立新的空白 Figma 或 FigJam 檔案
- **[openai/figma-generate-design](https://officialskills.sh/openai/skills/figma-generate-design)** - 使用設計系統 token 將應用程式頁面與版面轉換為 Figma 設計
- **[openai/figma-generate-library](https://officialskills.sh/openai/skills/figma-generate-library)** - 根據程式碼庫在 Figma 中建置或更新專業級設計系統
- **[openai/figma-implement-design](https://officialskills.sh/openai/skills/figma-implement-design)** - 以 1:1 視覺保真度將 Figma 設計轉換為可供正式環境使用的程式碼
- **[openai/figma-use](https://officialskills.sh/openai/skills/figma-use)** - 每次呼叫 use_figma 工具的必要先修技能——在 Figma 脈絡中進行寫入／讀取操作
- **[openai/frontend-skill](https://officialskills.sh/openai/skills/frontend-skill)** - 使用克制的構圖建立視覺表現出色的著陸頁、網站與應用程式 UI
- **[openai/playwright-interactive](https://officialskills.sh/openai/skills/playwright-interactive)** - 透過 js_repl 持續與瀏覽器和 Electron 互動，以迭代偵錯 UI
- **[openai/slides](https://officialskills.sh/openai/skills/slides)** - 使用 PptxGenJS 建立與編輯 .pptx 簡報
- **[openai/winui-app](https://officialskills.sh/openai/skills/winui-app)** - 使用 C# 與 Windows App SDK 建立並開發現代 WinUI 3 桌面應用程式

</details>

<details>
<summary><h3 id="skills-by-figma" style="display:inline">Figma 提供的技能</h3></summary>

Figma MCP 伺服器指南中的官方技能。

- **[figma/figma-code-connect-components](https://officialskills.sh/figma/skills/figma-code-connect-components)** - 使用 Code Connect 將 Figma 設計元件連結至程式碼元件
- **[figma/figma-create-design-system-rules](https://officialskills.sh/figma/skills/figma-create-design-system-rules)** - 為 Figma 轉程式碼工作流程產生專案專屬的設計系統規則
- **[figma/figma-create-new-file](https://officialskills.sh/figma/skills/figma-create-new-file)** - 建立新的空白 Figma Design 或 FigJam 檔案
- **[figma/figma-generate-design](https://officialskills.sh/figma/skills/figma-generate-design)** - 使用設計系統元件，從程式碼或描述在 Figma 中建置或更新畫面
- **[figma/figma-generate-library](https://officialskills.sh/figma/skills/figma-generate-library)** - 根據程式碼庫在 Figma 中建置或更新設計系統程式庫
- **[figma/figma-implement-design](https://officialskills.sh/figma/skills/figma-implement-design)** - 以 1:1 保真度將 Figma 設計轉換為可供正式環境使用的應用程式程式碼
- **[figma/figma-use](https://officialskills.sh/figma/skills/figma-use)** - 執行 Figma Plugin API 指令碼，以寫入畫布、檢查內容、管理變數與處理設計系統

</details>

<details>
<summary><h3 id="marketing-skills-by-corey-haines" style="display:inline">Corey Haines 提供的行銷技能</h3></summary>

[Corey Haines](https://github.com/coreyhaines31) 提供的官方行銷技能，涵蓋完整 SaaS 行銷堆疊，從 SEO 與文案撰寫到成長、CRO 與付費獲客。

- **[coreyhaines31/ab-testing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ab-testing)** - 為任何數位體驗規劃並執行 A/B 測試或實驗
- **[coreyhaines31/ad-creative](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ad-creative)** - 產生並迭代廣告創意，包括標題、描述與主要文案
- **[coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo)** - 最佳化內容，使其出現在 AI 生成的答案與 LLM 搜尋結果中
- **[coreyhaines31/analytics](https://github.com/coreyhaines31/marketingskills/tree/main/skills/analytics)** - 設定並稽核分析追蹤與衡量管線
- **[coreyhaines31/churn-prevention](https://github.com/coreyhaines31/marketingskills/tree/main/skills/churn-prevention)** - 建立取消流程、挽留優惠並挽回付款失敗
- **[coreyhaines31/cold-email](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cold-email)** - 撰寫能促成轉換的 B2B 冷郵件與後續追蹤序列
- **[coreyhaines31/competitors](https://github.com/coreyhaines31/marketingskills/tree/main/skills/competitors)** - 建立競爭者比較頁與替代方案著陸頁，以提升 SEO
- **[coreyhaines31/content-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/content-strategy)** - 規劃內容策略，決定優先處理的主題與格式
- **[coreyhaines31/copy-editing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing)** - 編輯並改善現有行銷文案，提升清晰度與影響力
- **[coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting)** - 為著陸頁、首頁與廣告撰寫及改寫行銷文案
- **[coreyhaines31/emails](https://github.com/coreyhaines31/marketingskills/tree/main/skills/emails)** - 建立電子郵件序列、滴灌行銷活動與客戶生命週期郵件流程
- **[coreyhaines31/free-tools](https://github.com/coreyhaines31/marketingskills/tree/main/skills/free-tools)** - 規劃並建置免費工具，以產生潛在客戶並提升 SEO 價值
- **[coreyhaines31/launch](https://github.com/coreyhaines31/marketingskills/tree/main/skills/launch)** - 規劃產品發布、功能公告與上市策略
- **[coreyhaines31/marketing-ideas](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-ideas)** - 為 SaaS 產品產生行銷策略與行銷活動構想
- **[coreyhaines31/marketing-psychology](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-psychology)** - 將心理學原則與行為科學應用於文案與設計
- **[coreyhaines31/onboarding](https://github.com/coreyhaines31/marketingskills/tree/main/skills/onboarding)** - 最佳化註冊後的引導流程與使用者啟用，以縮短取得價值所需時間
- **[coreyhaines31/cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cro)** - 改善任何行銷頁面或表單的轉換率，包括首頁、著陸頁與聯絡表單
- **[coreyhaines31/ads](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ads)** - 建立並最佳化 Google、Meta、LinkedIn 等平台的付費行銷活動
- **[coreyhaines31/paywalls](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paywalls)** - 設計並最佳化升級畫面、付費牆與追加銷售彈出視窗
- **[coreyhaines31/popups](https://github.com/coreyhaines31/marketingskills/tree/main/skills/popups)** - 建立並最佳化可提升轉換的彈出視窗、對話框與滑入式視窗
- **[coreyhaines31/pricing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing)** - 為 SaaS 產品制定定價、包裝與營利策略
- **[coreyhaines31/product-marketing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/product-marketing)** - 建立並維護產品行銷脈絡文件，確保訊息一致
- **[coreyhaines31/programmatic-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/programmatic-seo)** - 為大規模內容生成建立 SEO 導向頁面範本
- **[coreyhaines31/referrals](https://github.com/coreyhaines31/marketingskills/tree/main/skills/referrals)** - 設計並最佳化推薦、聯盟行銷與口碑計畫
- **[coreyhaines31/revops](https://github.com/coreyhaines31/marketingskills/tree/main/skills/revops)** - 簡化營收營運、潛在客戶生命週期與行銷到銷售的交接流程
- **[coreyhaines31/sales-enablement](https://github.com/coreyhaines31/marketingskills/tree/main/skills/sales-enablement)** - 建立提案簡報、單頁文件、異議處理文件與產品展示腳本
- **[coreyhaines31/schema](https://github.com/coreyhaines31/marketingskills/tree/main/skills/schema)** - 加入並最佳化結構描述標記與結構化資料，以改善 SEO
- **[coreyhaines31/seo-audit](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit)** - 稽核並診斷網站上的技術 SEO 與頁面 SEO 問題
- **[coreyhaines31/signup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/signup)** - 最佳化註冊、登記與試用啟用流程，以提高轉換率
- **[coreyhaines31/site-architecture](https://github.com/coreyhaines31/marketingskills/tree/main/skills/site-architecture)** - 規劃並重整頁面層級、導覽與 URL 結構
- **[coreyhaines31/social](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social)** - 為 LinkedIn、Twitter/X 與 Instagram 建立並排程社群媒體內容

</details>

<details>
<summary><h3 id="advertising-skills-by-kim-barrett" style="display:inline">Kim Barrett 提供的廣告技能</h3></summary>

Kim Barrett 的直接回應式廣告技能，分為基礎、文案總監、操作系統、協調器與 QA，涵蓋客群角色、優惠設計、Schwartz 式文案撰寫、創意測試及完整漏斗行銷活動協調。

- **[realkimbarrett/avatar-extraction](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/foundations/avatar-extraction)** - 明確界定買家是誰、他們想要什麼、嘗試過什麼，以及影響其決策的因素
- **[realkimbarrett/offer-extraction](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/foundations/offer-extraction)** - 將產品或服務轉化為具說服力且高轉換率的優惠
- **[realkimbarrett/schwartz-awareness-mapper](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/schwartz-awareness-mapper)** - 判斷受眾的認知程度並選擇正確的訊息傳達方式
- **[realkimbarrett/mechanism-builder](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/mechanism-builder)** - 透過獨特機制說明你的解決方案為何有效，以及其他方案為何失敗
- **[realkimbarrett/headline-matrix](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/headline-matrix)** - 針對不同角度產生高成效標題變體
- **[realkimbarrett/objection-crusher](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/objection-crusher)** - 識別並消除買家的疑慮與猶豫
- **[realkimbarrett/ad-angle-multiplier](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/ad-angle-multiplier)** - 將核心構想擴展為多種不同廣告角度，以供創意測試
- **[realkimbarrett/scroll-stopping-creative](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/scroll-stopping-creative)** - 打造能在前三秒抓住注意力的廣告概念
- **[realkimbarrett/conversion-path-builder](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/conversion-path-builder)** - 設計從點擊到轉換與預約通話的最佳漏斗
- **[realkimbarrett/performance-diagnosis](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/performance-diagnosis)** - 診斷行銷活動表現不佳的原因——轉換率低、CPL 高、廣告成效差
- **[realkimbarrett/full-funnel-campaign-orchestrator](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/orchestrators/full-funnel-campaign-orchestrator)** - 協調所有技能，從頭到尾建置完整的廣告與漏斗行銷活動
- **[realkimbarrett/generic-language-killer](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/qa/generic-language-killer)** - 刪除含糊、企業腔或像 AI 生成的語言，改用清楚、具體且自然的措辭

</details>

<details>
<summary><h3 id="skills-by-binance" style="display:inline">Binance 提供的技能</h3></summary>

Binance 團隊提供的官方 Web3 與交易技能，涵蓋加密貨幣市場資料、鏈上分析、代幣安全稽核，以及透過 Binance API 進行現貨交易。

- **[binance/crypto-market-rank](https://officialskills.sh/binance/skills/crypto-market-rank)** - 查詢加密貨幣市場排名，包括熱門代幣、Smart Money 流入、迷因幣排行與頂尖交易者 PnL 排行榜
- **[binance/meme-rush](https://officialskills.sh/binance/skills/meme-rush)** - 追蹤 launchpad（Pump.fun、Four.meme）的即時迷因代幣清單，以及依淨流入排名的 AI 熱門市場主題
- **[binance/query-address-info](https://officialskills.sh/binance/skills/query-address-info)** - 取得 BSC、Base 或 Solana 上任意錢包地址的所有代幣持有量與投資組合部位
- **[binance/query-token-audit](https://officialskills.sh/binance/skills/query-token-audit)** - 稽核代幣安全性，偵測 BSC、Base、Solana 與 Ethereum 上的詐騙、蜜罐與惡意合約
- **[binance/query-token-info](https://officialskills.sh/binance/skills/query-token-info)** - 依關鍵字或合約地址搜尋代幣，並擷取中繼資料、即時市場資料與 K 線圖表
- **[binance/trading-signal](https://officialskills.sh/binance/skills/trading-signal)** - 監控 Solana 與 BSC 上 Smart Money 鏈上買賣訊號，包含價格、最大漲幅與退出率資料
- **[binance/spot](https://officialskills.sh/binance/skills/spot)** - 透過 API 金鑰驗證在 Binance 下達與管理現貨交易訂單，支援主網與測試網

</details>

<details>
<summary><h3 id="skills-by-apollo-graphql" style="display:inline">Apollo GraphQL 提供的技能</h3></summary>

Apollo GraphQL 團隊提供的官方技能，用於建置 GraphQL 用戶端、伺服器、聯邦超級圖與 Apollo Router。

- **[apollographql/apollo-client](https://officialskills.sh/apollographql/skills/apollo-client)** - 使用 Apollo Client 4 建置 React 應用程式
- **[apollographql/apollo-connectors](https://officialskills.sh/apollographql/skills/apollo-connectors)** - 使用 Apollo Connectors 將 REST API 整合至 GraphQL 超級圖
- **[apollographql/apollo-federation](https://officialskills.sh/apollographql/skills/apollo-federation)** - 撰寫 Apollo Federation 2 子圖結構描述並組合成超級圖
- **[apollographql/apollo-kotlin](https://officialskills.sh/apollographql/skills/apollo-kotlin)** - 適用於 Android、JVM 與 Kotlin Multiplatform 專案的 GraphQL 用戶端
- **[apollographql/apollo-mcp-server](https://officialskills.sh/apollographql/skills/apollo-mcp-server)** - 透過 Model Context Protocol 將 AI 代理連接至 GraphQL API
- **[apollographql/apollo-router](https://officialskills.sh/apollographql/skills/apollo-router)** - 適用於 Rust Apollo Router、可感知版本的設定產生器
- **[apollographql/apollo-router-plugin-creator](https://officialskills.sh/apollographql/skills/apollo-router-plugin-creator)** - 為 Apollo Router 撰寫原生 Rust 外掛
- **[apollographql/apollo-server](https://officialskills.sh/apollographql/skills/apollo-server)** - 使用 Apollo Server 5 建置 GraphQL 伺服器
- **[apollographql/graphql-operations](https://officialskills.sh/apollographql/skills/graphql-operations)** - 依循最佳實務撰寫 GraphQL 查詢、變更與訂閱
- **[apollographql/graphql-schema](https://officialskills.sh/apollographql/skills/graphql-schema)** - 設計簡潔、可演進 GraphQL 結構描述的參考指南
- **[apollographql/rover](https://officialskills.sh/apollographql/skills/rover)** - 在 Apollo GraphOS 中管理 GraphQL 結構描述的 CLI 工具
- **[apollographql/rust-best-practices](https://officialskills.sh/apollographql/skills/rust-best-practices)** - 取自 Apollo GraphQL 內部手冊的 Rust 程式設計指南
- **[apollographql/skill-creator](https://officialskills.sh/apollographql/skills/skill-creator)** - 建立並組織專注於 Apollo GraphQL 的 Agent Skills

</details>

<details>
<summary><h3 id="skills-by-auth0" style="display:inline">Auth0 提供的技能</h3></summary>

Auth0 團隊提供的官方驗證與身分識別技能，涵蓋熱門框架 SDK，以及 MFA、移轉與快速入門偵測工作流程。

- **[auth0/auth0-android](https://officialskills.sh/auth0/skills/auth0-android)** - 使用 Auth0 SDK 為原生 Android 應用程式加入驗證
- **[auth0/auth0-angular](https://officialskills.sh/auth0/skills/auth0-angular)** - 使用 @auth0/auth0-angular 為 Angular 應用程式加入驗證
- **[auth0/auth0-aspnetcore-api](https://officialskills.sh/auth0/skills/auth0-aspnetcore-api)** - 為 ASP.NET Core API 加入 JWT 存取權杖驗證
- **[auth0/auth0-express](https://officialskills.sh/auth0/skills/auth0-express)** - 為 Express.js 應用程式加入以工作階段為基礎的驗證
- **[auth0/auth0-fastify](https://officialskills.sh/auth0/skills/auth0-fastify)** - 為 Fastify 網頁應用程式加入以工作階段為基礎的驗證
- **[auth0/auth0-fastify-api](https://officialskills.sh/auth0/skills/auth0-fastify-api)** - 使用 JWT ****** 驗證保護 Fastify API 端點
- **[auth0/auth0-mfa](https://officialskills.sh/auth0/skills/auth0-mfa)** - 為由 Auth0 驅動的應用程式加入多因素驗證
- **[auth0/auth0-migration](https://officialskills.sh/auth0/skills/auth0-migration)** - 將使用者與驗證流程從其他提供者移轉至 Auth0
- **[auth0/auth0-nextjs](https://officialskills.sh/auth0/skills/auth0-nextjs)** - 為 Next.js 應用程式加入驗證
- **[auth0/auth0-nuxt](https://officialskills.sh/auth0/skills/auth0-nuxt)** - 使用加密 Cookie 工作階段為 Nuxt 3/4 應用程式加入 Auth0 驗證
- **[auth0/auth0-quickstart](https://officialskills.sh/auth0/skills/auth0-quickstart)** - 自動偵測框架並建立 Auth0 整合骨架
- **[auth0/auth0-react](https://officialskills.sh/auth0/skills/auth0-react)** - 使用 @auth0/auth0-react 為 React SPA 加入驗證
- **[auth0/auth0-react-native](https://officialskills.sh/auth0/skills/auth0-react-native)** - 為 React Native 與 Expo 行動應用程式加入驗證
- **[auth0/auth0-vue](https://officialskills.sh/auth0/skills/auth0-vue)** - 為 Vue.js 應用程式加入驗證

</details>

<details>
<summary><h3 id="skills-by-brave" style="display:inline">Brave 提供的技能</h3></summary>

Brave 團隊提供的官方技能，用於存取 Brave Search API，包括網頁、圖像、影片、新聞與本機興趣點資料。

- **[brave/answers](https://officialskills.sh/brave/skills/answers)** - 以即時網頁搜尋結果為根據的 AI 生成答案
- **[brave/bx](https://officialskills.sh/brave/skills/bx)** - 專為 AI 代理打造的網頁搜尋 CLI 工具
- **[brave/images-search](https://officialskills.sh/brave/skills/images-search)** - 使用 Brave Search API 搜尋圖像
- **[brave/llm-context](https://officialskills.sh/brave/skills/llm-context)** - 從 Brave Search 傳回預先擷取的網頁內容（文字、表格、程式碼）
- **[brave/local-descriptions](https://officialskills.sh/brave/skills/local-descriptions)** - 擷取 AI 產生的興趣點文字描述
- **[brave/local-pois](https://officialskills.sh/brave/skills/local-pois)** - 取得本地商家與興趣點的詳細資訊
- **[brave/news-search](https://officialskills.sh/brave/skills/news-search)** - 使用文章中繼資料搜尋 Brave 新聞索引
- **[brave/spellcheck](https://officialskills.sh/brave/skills/spellcheck)** - 檢查搜尋查詢中的拼字錯誤並取得修正建議
- **[brave/suggest](https://officialskills.sh/brave/skills/suggest)** - 透過 Brave Search API 查詢自動完成建議
- **[brave/videos-search](https://officialskills.sh/brave/skills/videos-search)** - 透過 Brave Search API 搜尋全網影片
- **[brave/web-search](https://officialskills.sh/brave/skills/web-search)** - 透過 Brave Search API 搜尋網頁並取得排序結果

</details>

<details>
<summary><h3 id="skills-by-browserbase" style="display:inline">Browserbase 提供的技能</h3></summary>

Browserbase 團隊提供的官方瀏覽器自動化技能，涵蓋無頭瀏覽、Cookie 同步、無伺服器函式與對抗式 UI 測試。

- **[browserbase/browser](https://officialskills.sh/browserbase/skills/browser)** - 透過自然語言 CLI 指令自動化網頁瀏覽器互動
- **[browserbase/browserbase-cli](https://officialskills.sh/browserbase/skills/browserbase-cli)** - Browserbase 平台的 CLI 包裝工具
- **[browserbase/cookie-sync](https://officialskills.sh/browserbase/skills/cookie-sync)** - 將本機 Chrome 的 Cookie 匯出至 Browserbase 持續性脈絡
- **[browserbase/fetch](https://officialskills.sh/browserbase/skills/fetch)** - 透過 Browserbase API 擷取 HTML、JSON、標頭與狀態碼
- **[browserbase/functions](https://officialskills.sh/browserbase/skills/functions)** - 將瀏覽器自動化指令碼部署為無伺服器雲端函式
- **[browserbase/search](https://officialskills.sh/browserbase/skills/search)** - 透過 Browserbase API 使用結構化結果搜尋網頁
- **[browserbase/ui-test](https://officialskills.sh/browserbase/skills/ui-test)** - 在真實瀏覽器中分析 git 差異並執行對抗式 UI 測試

</details>

<details>
<summary><h3 id="skills-by-coderabbit" style="display:inline">CodeRabbit 提供的技能</h3></summary>

CodeRabbit 團隊提供的官方 AI 程式碼審查技能。

- **[coderabbitai/autofix](https://officialskills.sh/coderabbitai/skills/autofix)** - 從 GitHub PR 擷取尚未解決的 CodeRabbit 審查意見並套用修正
- **[coderabbitai/code-review](https://officialskills.sh/coderabbitai/skills/code-review)** - 透過 CodeRabbit CLI 執行 AI 驅動的程式碼審查

</details>

<details>
<summary><h3 id="skills-by-coinbase" style="display:inline">Coinbase 提供的技能</h3></summary>

Coinbase 團隊提供的官方錢包、付款與交易技能，涵蓋 USDC 轉帳、鏈上查詢、x402 付費 API 與 Base 交易。

- **[coinbase/authenticate-wallet](https://officialskills.sh/coinbase/skills/authenticate-wallet)** - 透過電子郵件 OTP 處理 Coinbase 付款錢包的登入
- **[coinbase/fund](https://officialskills.sh/coinbase/skills/fund)** - 透過 Coinbase Onramp 將 USDC 加入 Coinbase 驅動的錢包
- **[coinbase/monetize-service](https://officialskills.sh/coinbase/skills/monetize-service)** - 建立使用 x402 按要求收取 USDC 的 Express 伺服器骨架
- **[coinbase/pay-for-service](https://officialskills.sh/coinbase/skills/pay-for-service)** - 呼叫使用 x402 協定且自動以 USDC 付款的付費 API 端點
- **[coinbase/query-onchain-data](https://officialskills.sh/coinbase/skills/query-onchain-data)** - 查詢 Base 上已解碼的鏈上資料（事件、交易、區塊）
- **[coinbase/search-for-service](https://officialskills.sh/coinbase/skills/search-for-service)** - 搜尋並瀏覽 x402 市集
- **[coinbase/send-usdc](https://officialskills.sh/coinbase/skills/send-usdc)** - 將 USDC 傳送至 Base 上任何 Ethereum 地址或 ENS 名稱
- **[coinbase/trade](https://officialskills.sh/coinbase/skills/trade)** - 使用 CDP Swap API 在 Base 上兌換與交易代幣
- **[coinbase/x402](https://officialskills.sh/coinbase/skills/x402)** - 使用 x402 付款協定探索並呼叫付費 API 端點

</details>


<details>
<summary><h3 id="skills-by-datadog-labs" style="display:inline">Datadog Labs 提供的技能</h3></summary>

Datadog Labs 提供的可觀測性技能，適用於 APM、記錄、監控，以及由 pup CLI 驅動的 LLM 可觀測性工作流程。

- **[datadog-labs/dd-apm](https://officialskills.sh/datadog-labs/skills/dd-apm)** - 直接從編輯器查詢 Datadog APM 資料
- **[datadog-labs/dd-docs](https://officialskills.sh/datadog-labs/skills/dd-docs)** - 透過 LLM 最佳化文件索引查閱 Datadog 文件
- **[datadog-labs/dd-llmo-eval-bootstrap](https://officialskills.sh/datadog-labs/skills/dd-llmo-eval-bootstrap)** - 分析正式環境 LLM 追蹤記錄並產生評估器
- **[datadog-labs/dd-llmo-eval-trace-rca](https://officialskills.sh/datadog-labs/skills/dd-llmo-eval-trace-rca)** - 使用評估追蹤記錄找出 LLM 應用程式失敗的根本原因
- **[datadog-labs/dd-llmo-experiment-analyzer](https://officialskills.sh/datadog-labs/skills/dd-llmo-experiment-analyzer)** - 分析單一或比較式 LLM 實驗結果
- **[datadog-labs/dd-logs](https://officialskills.sh/datadog-labs/skills/dd-logs)** - 透過 pup CLI 搜尋、篩選與封存 Datadog 記錄
- **[datadog-labs/dd-monitors](https://officialskills.sh/datadog-labs/skills/dd-monitors)** - 透過 pup CLI 管理 Datadog 監控項目
- **[datadog-labs/dd-pup](https://officialskills.sh/datadog-labs/skills/dd-pup)** - 用於連接 Datadog API 的 Rust CLI（pup）

</details>

<details>
<summary><h3 id="skills-by-firebase" style="display:inline">Firebase 提供的技能</h3></summary>

Firebase 團隊提供的官方技能，涵蓋設定、驗證、Firestore、託管、Genkit AI SDK 與安全規則稽核。

- **[firebase/developing-genkit-dart](https://officialskills.sh/firebase/skills/developing-genkit-dart)** - 使用 Genkit Dart SDK 建置 AI 應用程式
- **[firebase/developing-genkit-go](https://officialskills.sh/firebase/skills/developing-genkit-go)** - 使用 Genkit Go SDK 建置 AI 應用程式
- **[firebase/developing-genkit-js](https://officialskills.sh/firebase/skills/developing-genkit-js)** - 在 Node.js 中使用 Firebase Genkit 建置 AI 驅動的應用程式
- **[firebase/firebase-ai-logic-basics](https://officialskills.sh/firebase/skills/firebase-ai-logic-basics)** - 透過 Firebase AI Logic 從網頁與行動應用程式呼叫 Gemini 模型
- **[firebase/firebase-app-hosting-basics](https://officialskills.sh/firebase/skills/firebase-app-hosting-basics)** - 部署並管理全端網頁應用程式（Next.js、Angular 等）
- **[firebase/firebase-auth-basics](https://officialskills.sh/firebase/skills/firebase-auth-basics)** - 使用登入提供者設定 Firebase Authentication
- **[firebase/firebase-basics](https://officialskills.sh/firebase/skills/firebase-basics)** - 處理 Firebase CLI 安裝、驗證與日常工作流程
- **[firebase/firebase-data-connect-basics](https://officialskills.sh/firebase/skills/firebase-data-connect-basics)** - 建置由 Cloud SQL 支援的 Firebase Data Connect 後端
- **[firebase/firebase-firestore-enterprise-native-mode](https://officialskills.sh/firebase/skills/firebase-firestore-enterprise-native-mode)** - 設定並使用 Firestore Enterprise 原生模式
- **[firebase/firebase-firestore-standard](https://officialskills.sh/firebase/skills/firebase-firestore-standard)** - Cloud Firestore Standard Edition 完整指南
- **[firebase/firebase-hosting-basics](https://officialskills.sh/firebase/skills/firebase-hosting-basics)** - 將靜態網站、SPA 與微服務部署至 Firebase Hosting
- **[firebase/firebase-security-rules-auditor](https://officialskills.sh/firebase/skills/firebase-security-rules-auditor)** - 稽核 Firestore 安全規則並標記高風險模式

</details>

<details>
<summary><h3 id="skills-by-flutter" style="display:inline">Flutter 提供的技能</h3></summary>

Flutter 團隊提供的官方技能，涵蓋跨平台 Flutter 應用程式的版面、狀態、導覽、原生互通、平台設定與測試。

- **[flutter/flutter-adding-home-screen-widgets](https://officialskills.sh/flutter/skills/flutter-adding-home-screen-widgets)** - 為 Android 與 iOS 上的 Flutter 應用程式新增主畫面 widget
- **[flutter/flutter-animating-apps](https://officialskills.sh/flutter/skills/flutter-animating-apps)** - 實作動畫效果、轉場與動態效果
- **[flutter/flutter-architecting-apps](https://officialskills.sh/flutter/skills/flutter-architecting-apps)** - 使用分層架構組織 Flutter 應用程式
- **[flutter/flutter-building-forms](https://officialskills.sh/flutter/skills/flutter-building-forms)** - 建置含驗證與使用者輸入的 Flutter 表單
- **[flutter/flutter-building-layouts](https://officialskills.sh/flutter/skills/flutter-building-layouts)** - 使用限制系統（Row、Column、Stack）建置並修正版面
- **[flutter/flutter-building-plugins](https://officialskills.sh/flutter/skills/flutter-building-plugins)** - 建立連接 Dart 與平台程式碼的 Flutter 外掛
- **[flutter/flutter-caching-data](https://officialskills.sh/flutter/skills/flutter-caching-data)** - 實作離線優先的快取策略
- **[flutter/flutter-embedding-native-views](https://officialskills.sh/flutter/skills/flutter-embedding-native-views)** - 在 Flutter widget 中嵌入原生 Android、iOS 與 macOS 檢視畫面
- **[flutter/flutter-handling-concurrency](https://officialskills.sh/flutter/skills/flutter-handling-concurrency)** - 在背景 Dart isolate 中執行繁重工作
- **[flutter/flutter-handling-http-and-json](https://officialskills.sh/flutter/skills/flutter-handling-http-and-json)** - 處理 HTTP 要求與 JSON 序列化
- **[flutter/flutter-implementing-navigation-and-routing](https://officialskills.sh/flutter/skills/flutter-implementing-navigation-and-routing)** - 處理路由、導覽與深層連結
- **[flutter/flutter-improving-accessibility](https://officialskills.sh/flutter/skills/flutter-improving-accessibility)** - 設定 Flutter 以支援螢幕閱讀器與輔助技術
- **[flutter/flutter-interoperating-with-native-apis](https://officialskills.sh/flutter/skills/flutter-interoperating-with-native-apis)** - 讓 Flutter 與原生平台 API 互通
- **[flutter/flutter-localizing-apps](https://officialskills.sh/flutter/skills/flutter-localizing-apps)** - 設定 Flutter 以支援多種語言與地區
- **[flutter/flutter-managing-state](https://officialskills.sh/flutter/skills/flutter-managing-state)** - 管理本機 widget 狀態與共用應用程式狀態
- **[flutter/flutter-reducing-app-size](https://officialskills.sh/flutter/skills/flutter-reducing-app-size)** - 衡量並最佳化 Flutter 應用程式套件大小
- **[flutter/flutter-setting-up-on-linux](https://officialskills.sh/flutter/skills/flutter-setting-up-on-linux)** - 設定 Linux 電腦以進行 Flutter 桌面開發
- **[flutter/flutter-setting-up-on-macos](https://officialskills.sh/flutter/skills/flutter-setting-up-on-macos)** - 設定 macOS 電腦以進行 Flutter 開發
- **[flutter/flutter-setting-up-on-windows](https://officialskills.sh/flutter/skills/flutter-setting-up-on-windows)** - 為 Flutter 開發設定 Windows 電腦
- **[flutter/flutter-testing-apps](https://officialskills.sh/flutter/skills/flutter-testing-apps)** - 實作單元、widget 與整合測試
- **[flutter/flutter-theming-apps](https://officialskills.sh/flutter/skills/flutter-theming-apps)** - 透過主題系統自訂 Flutter 應用程式外觀
- **[flutter/flutter-working-with-databases](https://officialskills.sh/flutter/skills/flutter-working-with-databases)** - 使用 SQLite 建置結構化資料層

</details>

<details>
<summary><h3 id="product-manager-skills-by-dean-peters" style="display:inline">Dean Peters 提供的產品經理技能</h3></summary>

[Dean Peters](https://github.com/deanpeters) 提供的 46 項實戰驗證產品管理技能。定義問題、尋找機會、建立驗證實驗骨架，並快速終止不值得投入的方案——採用 Teresa Torres、Geoffrey Moore、Amazon、MITRE 等框架。

**元件技能**

- **[deanpeters/acquisition-channel-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/acquisition-channel-advisor)** - 使用單位經濟效益評估管道，並建議擴大／測試／終止決策
- **[deanpeters/ai-shaped-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/ai-shaped-readiness-advisor)** - 評估五項能力中自動化與重新設計的機會
- **[deanpeters/altitude-horizon-framework](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/altitude-horizon-framework)** - 導覽 PM→Director 思維轉變，涵蓋範疇、時間視野與失敗模式
- **[deanpeters/business-health-diagnostic](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/business-health-diagnostic)** - 診斷 SaaS 健康狀況、識別警訊並排定復原行動優先順序
- **[deanpeters/company-research](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/company-research)** - 深入分析競爭者或公司
- **[deanpeters/customer-journey-map](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-map)** - 使用 NNGroup 框架描繪各接觸點的客戶體驗
- **[deanpeters/eol-message](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/eol-message)** - 妥善傳達產品或功能的棄用資訊
- **[deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis)** - 將倡議轉化為可測試假設，並訂定可衡量的成功指標
- **[deanpeters/finance-metrics-quickref](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-metrics-quickref)** - 含公式與基準的 32 項以上 SaaS 財務指標參考指南
- **[deanpeters/jobs-to-be-done](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/jobs-to-be-done)** - 使用 JTBD 框架了解客戶目標
- **[deanpeters/pestel-analysis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pestel-analysis)** - 從政治、經濟、社會、科技、環境與法律層面分析外部因素
- **[deanpeters/pol-probe](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe)** - 定義精簡的驗證實驗以測試假設
- **[deanpeters/positioning-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-statement)** - 使用 Geoffrey Moore 框架定義目標受眾、解決的問題與差異化特色
- **[deanpeters/press-release](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/press-release)** - 使用 Amazon 的 Working Backwards 方法，透過未來新聞稿釐清產品願景
- **[deanpeters/problem-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-statement)** - 先以證據界定客戶問題，再著手尋找解決方案
- **[deanpeters/proto-persona](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/proto-persona)** - 在進行完整研究之前，建立以假設為導向的角色原型
- **[deanpeters/recommendation-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/recommendation-canvas)** - 記錄 AI 驅動的產品建議
- **[deanpeters/saas-economics-efficiency-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-economics-efficiency-metrics)** - 計算單位經濟效益與資本效率，包括 CAC、LTV、回收期與 Rule of 40
- **[deanpeters/saas-revenue-growth-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-revenue-growth-metrics)** - 追蹤營收、留存與成長指標，包括 MRR/ARR、流失率、NRR 與擴張
- **[deanpeters/storyboard](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/storyboard)** - 使用 6 格敘事分鏡圖呈現使用者旅程
- **[deanpeters/user-story](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story)** - 使用 Mike Cohn 與 Gherkin 格式，依驗收條件撰寫使用者故事
- **[deanpeters/user-story-mapping](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping)** - 使用 Jeff Patton 的故事地圖方法，依使用者工作流程組織故事
- **[deanpeters/user-story-splitting](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-splitting)** - 使用 8 種經驗證的拆分模式分解大型故事

**互動式技能**

- **[deanpeters/context-engineering-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/context-engineering-advisor)** - 診斷脈絡塞入與脈絡工程的差異，並引導記憶體與檢索設計
- **[deanpeters/customer-journey-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-mapping-workshop)** - 引導旅程地圖工作坊並識別痛點
- **[deanpeters/director-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/director-readiness-advisor)** - 針對四種關鍵情境輔導 PM→Director 轉職
- **[deanpeters/discovery-interview-prep](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-interview-prep)** - 根據研究目標，使用 Mom Test 風格規劃客戶訪談
- **[deanpeters/epic-breakdown-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-breakdown-advisor)** - 使用 Richard Lawrence 的 9 種拆分模式將 epic 拆解為故事
- **[deanpeters/feature-investment-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/feature-investment-advisor)** - 使用 ROI 與策略價值評分評估功能
- **[deanpeters/finance-based-pricing-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-based-pricing-advisor)** - 使用財務影響分析評估定價變更
- **[deanpeters/lean-ux-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/lean-ux-canvas)** - 使用 Jeff Gothelf 的 Lean UX Canvas v2 建立以假設為導向的規劃
- **[deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree)** - 產生機會與解決方案，並建議概念驗證測試
- **[deanpeters/pol-probe-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe-advisor)** - 建議原型類型：可行性、任務導向、敘事、合成或 Vibe
- **[deanpeters/positioning-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-workshop)** - 透過自適應探索問題引導定義產品定位
- **[deanpeters/prioritization-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prioritization-advisor)** - 依據情境建議適用的優先排序框架（RICE、ICE、Kano 等）
- **[deanpeters/problem-framing-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-framing-canvas)** - 引導完成 MITRE 問題界定：向內觀察、向外觀察並重新界定
- **[deanpeters/tam-sam-som-calculator](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/tam-sam-som-calculator)** - 使用真實資料與引用資料推估市場規模
- **[deanpeters/user-story-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping-workshop)** - 逐步建立具備骨幹與發布切片的故事地圖
- **[deanpeters/vp-cpo-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/vp-cpo-readiness-advisor)** - 輔導 Director→VP/CPO 轉職，包括 CEO 訪談框架
- **[deanpeters/workshop-facilitation](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/workshop-facilitation)** - 為任何工作坊加入附編號建議的逐步引導流程

**工作流程技能**

- **[deanpeters/discovery-process](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-process)** - 完整探索週期：界定問題 → 研究 → 綜整 → 驗證（3–4 週）
- **[deanpeters/executive-onboarding-playbook](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/executive-onboarding-playbook)** - 供 VP/CPO 到任使用的 30-60-90 天診斷手冊
- **[deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development)** - 結構化 PRD 流程：問題 → 角色 → 解決方案 → 指標 → 故事（2–4 天）
- **[deanpeters/product-strategy-session](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/product-strategy-session)** - 完整策略會議：定位 → 界定 → 探索 → 路線圖（2–4 週）
- **[deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning)** - 策略路線圖流程：輸入 → epic → 排定優先順序 → 排程 → 溝通（1–2 週）
- **[deanpeters/skill-authoring-workflow](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/skill-authoring-workflow)** - 撰寫技能的元工作流程：選擇路徑 → 驗證 → 更新文件 → 打包

</details>


<details>
<summary><h3 id="product-management-skills-by-pawel-huryn" style="display:inline">Paweł Huryn 提供的產品管理技能</h3></summary>

[Paweł Huryn](https://github.com/phuryn) 提供的 65 項產品管理技能；他是 The Product Compass 電子報的創辦人。涵蓋完整 PM 生命週期——從探索與策略到執行、分析及上市——採用 Teresa Torres、Geoffrey Moore 等人的框架。

**資料分析**

- **[phuryn/ab-test-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/ab-test-analysis)** - 以統計顯著性與建議分析 A/B 測試結果
- **[phuryn/cohort-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/cohort-analysis)** - 群組留存曲線、功能採用情形與區隔洞察
- **[phuryn/sql-queries](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/sql-queries)** - 以自然語言跨主要方言產生 SQL 查詢

**執行**

- **[phuryn/brainstorm-okrs](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/brainstorm-okrs)** - 構思與公司目標一致的團隊 OKR
- **[phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd)** - 使用涵蓋問題至發布的 8 節範本建立 PRD
- **[phuryn/dummy-dataset](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/dummy-dataset)** - 以 CSV、JSON 或 SQL 產生逼真的虛擬資料集
- **[phuryn/job-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/job-stories)** - 以 JTBD 格式建立含驗收條件的工作故事
- **[phuryn/outcome-roadmap](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/outcome-roadmap)** - 將產出導向的路線圖轉化為以成果為重點的策略計畫
- **[phuryn/pre-mortem](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/pre-mortem)** - 對 PRD 與發布計畫執行事前驗屍風險分析
- **[phuryn/prioritization-frameworks](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/prioritization-frameworks)** - 含範本的 9 種優先排序框架參考指南
- **[phuryn/release-notes](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/release-notes)** - 根據 tickets 或變更記錄產生面向使用者的版本說明
- **[phuryn/retro](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/retro)** - 使用行動項目引導結構化 sprint 回顧
- **[phuryn/sprint-plan](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/sprint-plan)** - 依容量、故事選擇與風險對應規劃 sprint
- **[phuryn/stakeholder-map](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/stakeholder-map)** - 使用權力／關注度矩陣與溝通計畫建立利害關係人地圖
- **[phuryn/summarize-meeting](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/summarize-meeting)** - 將會議逐字稿摘要為結構化筆記與行動項目
- **[phuryn/test-scenarios](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/test-scenarios)** - 根據使用者故事建立完整測試情境
- **[phuryn/user-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/user-stories)** - 依 3 C 結構建立符合 INVEST 原則的使用者故事
- **[phuryn/wwas](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/wwas)** - 以 Why-What-Acceptance 格式建立待辦項目

**上市策略**

- **[phuryn/beachhead-segment](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/beachhead-segment)** - 識別產品發布的第一個灘頭堡市場區隔
- **[phuryn/competitive-battlecard](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/competitive-battlecard)** - 針對特定競爭者建立可供銷售團隊使用的競爭戰卡
- **[phuryn/growth-loops](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/growth-loops)** - 識別 5 種飛輪類型中的成長循環以提升牽引力
- **[phuryn/gtm-motions](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-motions)** - 識別 7 種 GTM 模式中的最佳方案，包括 PLG 與 ABM
- **[phuryn/gtm-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-strategy)** - 使用通路、訊息與發布時程建立 GTM 策略
- **[phuryn/ideal-customer-profile](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/ideal-customer-profile)** - 根據人口統計、行為與 JTBD 識別理想客戶檔案（ICP）

**市場研究**

- **[phuryn/competitor-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/competitor-analysis)** - 分析競爭者的優勢、弱點與差異化特色
- **[phuryn/customer-journey-map](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/customer-journey-map)** - 使用接觸點、情緒與機會描繪客戶旅程
- **[phuryn/market-segments](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-segments)** - 使用 JTBD 與產品契合度識別 3–5 個客戶區隔
- **[phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing)** - 使用由上而下與由下而上的方法估算 TAM、SAM、SOM
- **[phuryn/sentiment-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/sentiment-analysis)** - 使用情緒分數與 JTBD 洞察分析使用者回饋
- **[phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas)** - 建立 3 個包含 JTBD、痛點與收穫的使用者角色
- **[phuryn/user-segmentation](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-segmentation)** - 根據回饋資料，依行為、JTBD 與需求劃分使用者

**行銷與成長**

- **[phuryn/marketing-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/marketing-ideas)** - 提出 5 個具創意、符合成本效益且附理由的行銷構想
- **[phuryn/north-star-metric](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/north-star-metric)** - 定義 North Star Metric 與輸入指標群集
- **[phuryn/positioning-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/positioning-ideas)** - 構思與競爭者有所區隔的產品定位
- **[phuryn/product-name](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/product-name)** - 構思 5 個符合品牌價值、令人印象深刻的產品名稱
- **[phuryn/value-prop-statements](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/value-prop-statements)** - 為行銷、銷售與新手引導產生價值主張

**產品探索**

- **[phuryn/analyze-feature-requests](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/analyze-feature-requests)** - 依主題、影響、工作量與風險排列功能請求的優先順序
- **[phuryn/brainstorm-experiments-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-existing)** - 為現有產品設計實驗以測試假設
- **[phuryn/brainstorm-experiments-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-new)** - 為新產品驗證設計精實 pretotypes
- **[phuryn/brainstorm-ideas-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-existing)** - 從 PM、設計師與工程師的觀點構思產品點子
- **[phuryn/brainstorm-ideas-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-new)** - 在早期探索階段為新產品構思功能
- **[phuryn/identify-assumptions-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-existing)** - 識別價值、易用性、可行性與實作可能性各方面的風險假設
- **[phuryn/identify-assumptions-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-new)** - 在 8 種風險類別中識別新產品的風險假設
- **[phuryn/interview-script](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/interview-script)** - 建立含 JTBD 探索問題的結構化客戶訪談腳本
- **[phuryn/metrics-dashboard](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/metrics-dashboard)** - 定義含資料來源與警示門檻的產品指標儀表板
- **[phuryn/opportunity-solution-tree](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/opportunity-solution-tree)** - 根據 Teresa Torres 的方法建立 Opportunity Solution Tree
- **[phuryn/prioritize-assumptions](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-assumptions)** - 使用影響 × 風險矩陣與實驗排定假設優先順序
- **[phuryn/prioritize-features](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-features)** - 依影響、工作量、風險與策略一致性排列待辦功能優先順序
- **[phuryn/summarize-interview](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/summarize-interview)** - 使用 JTBD 與行動項目摘要訪談逐字稿

**產品策略**

- **[phuryn/ansoff-matrix](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/ansoff-matrix)** - 分析涵蓋 4 個成長策略象限的 Ansoff 矩陣
- **[phuryn/business-model](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/business-model)** - 產生包含全部 9 個組成區塊的 Business Model Canvas
- **[phuryn/lean-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/lean-canvas)** - 產生包含問題、解決方案、UVP 與指標的 Lean Canvas
- **[phuryn/monetization-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/monetization-strategy)** - 構思 3–5 種營利策略並規劃驗證實驗
- **[phuryn/pestle-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pestle-analysis)** - 分析政治、經濟、社會、科技、法律與環境因素的 PESTLE
- **[phuryn/porters-five-forces](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/porters-five-forces)** - 使用 Porter 五力進行競爭分析並提供策略洞察
- **[phuryn/pricing-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pricing-strategy)** - 設計定價策略並進行競爭分析與 WTP 估算
- **[phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy)** - 使用 9 節 Product Strategy Canvas 建立產品策略
- **[phuryn/product-vision](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-vision)** - 構思鼓舞人心且可實現的產品願景宣言
- **[phuryn/startup-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/startup-canvas)** - 結合產品策略與商業模式產生 Startup Canvas
- **[phuryn/swot-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/swot-analysis)** - 依各象限提供可執行建議的 SWOT 分析
- **[phuryn/value-proposition](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/value-proposition)** - 使用 6 部分 JTBD 範本設計價值主張

**工具箱**

- **[phuryn/draft-nda](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/draft-nda)** - 草擬涵蓋資訊類型、司法管轄區與條款的 NDA
- **[phuryn/grammar-check](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/grammar-check)** - 找出文法與行文錯誤，並提供針對性修正建議
- **[phuryn/privacy-policy](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/privacy-policy)** - 草擬納入 GDPR 合規考量的隱私權政策
- **[phuryn/review-resume](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/review-resume)** - 依據 10 項最佳實務（包括 XYZ+S 公式）審閱 PM 履歷

</details>

<details>
<summary><h3 id="skills-by-minimax-team" style="display:inline">MiniMax 團隊提供的技能</h3></summary>

MiniMax AI 團隊提供的 11 項開發與文件生成技能，涵蓋前端、全端、行動裝置、著色器開發、文件建立（PDF、DOCX、XLSX、PPTX），以及整合 MiniMax API 的 MiniMax AI CLI。

- **[MiniMax-AI/cli](https://officialskills.sh/MiniMax-AI/skills/cli)** - 透過 MiniMax AI 產生文字、圖像、影片、語音與音樂
- **[MiniMax-AI/frontend-dev](https://officialskills.sh/MiniMax-AI/skills/frontend-dev)** - 全端前端開發，支援電影感動畫、透過 MiniMax API 產生 AI 媒體與生成藝術
- **[MiniMax-AI/fullstack-dev](https://officialskills.sh/MiniMax-AI/skills/fullstack-dev)** - 後端架構：REST API 設計、驗證流程、即時功能與資料庫整合
- **[MiniMax-AI/android-native-dev](https://officialskills.sh/MiniMax-AI/skills/android-native-dev)** - 使用 Kotlin/Jetpack Compose、Material Design 3 與無障礙功能進行 Android 原生開發
- **[MiniMax-AI/ios-application-dev](https://officialskills.sh/MiniMax-AI/skills/ios-application-dev)** - 以 UIKit、SnapKit 與 SwiftUI 開發 iOS，涵蓋導覽、深色模式與 HIG 合規
- **[MiniMax-AI/shader-dev](https://officialskills.sh/MiniMax-AI/skills/shader-dev)** - 用於 ray marching、流體模擬、粒子系統與程序化生成的 GLSL 著色器技術
- **[MiniMax-AI/gif-sticker-maker](https://officialskills.sh/MiniMax-AI/skills/gif-sticker-maker)** - 透過 MiniMax API 將照片轉換為 Funko Pop／Pop Mart 風格的動畫 GIF 貼圖
- **[MiniMax-AI/minimax-pdf](https://officialskills.sh/MiniMax-AI/skills/minimax-pdf)** - 使用 token 設計系統與 15 種封面樣式產生、填寫與重新排版 PDF
- **[MiniMax-AI/pptx-generator](https://officialskills.sh/MiniMax-AI/skills/pptx-generator)** - 使用 PptxGenJS 從零建立並編輯 PowerPoint 簡報
- **[MiniMax-AI/minimax-xlsx](https://officialskills.sh/MiniMax-AI/skills/minimax-xlsx)** - 建立、讀取、分析與驗證 Excel／試算表檔案，完全不損失格式
- **[MiniMax-AI/minimax-docx](https://officialskills.sh/MiniMax-AI/skills/minimax-docx)** - 使用 OpenXML SDK 專業地建立與編輯 DOCX 文件

</details>

<details>
<summary><h3 id="skills-by-duckdb" style="display:inline">DuckDB 提供的技能</h3></summary>

可直接在 Claude Code 中使用的 DuckDB 官方技能，適用於資料查詢、檔案讀取與文件搜尋。

- **[duckdb/attach-db](https://officialskills.sh/duckdb/skills/attach-db)** - 附加 DuckDB 資料庫檔案以互動式查詢，並自動探索結構描述
- **[duckdb/query](https://officialskills.sh/duckdb/skills/query)** - 使用 Friendly SQL 方言，對已附加資料庫或檔案執行 SQL 查詢
- **[duckdb/read-file](https://officialskills.sh/duckdb/skills/read-file)** - 在本機或遠端儲存空間讀取任何資料檔案（CSV、JSON、Parquet、Avro、Excel、空間資料）
- **[duckdb/duckdb-docs](https://officialskills.sh/duckdb/skills/duckdb-docs)** - 透過 HTTPS 對全文搜尋 DuckDB 與 DuckLake 文件
- **[duckdb/read-memories](https://officialskills.sh/duckdb/skills/read-memories)** - 搜尋過往 Claude Code 工作階段記錄以還原脈絡
- **[duckdb/install-duckdb](https://officialskills.sh/duckdb/skills/install-duckdb)** - 安裝或更新 DuckDB CLI 與擴充功能，並管理版本

</details>

<details>
<summary><h3 id="skills-by-gsap-greensock" style="display:inline">GSAP（GreenSock）提供的技能</h3></summary>

GSAP 動畫官方技能，涵蓋完整 GreenSock 生態系——核心 API、時間軸、ScrollTrigger、外掛、工具程式、React 整合、效能最佳化與框架支援。

- **[greensock/gsap-core](https://officialskills.sh/greensock/skills/gsap-core)** - 核心 API，包含 gsap.to()、from()、fromTo()、easing、duration、stagger 與 defaults
- **[greensock/gsap-timeline](https://officialskills.sh/greensock/skills/gsap-timeline)** - 具備序列、位置參數、標籤、巢狀結構與播放控制的時間軸
- **[greensock/gsap-scrolltrigger](https://officialskills.sh/greensock/skills/gsap-scrolltrigger)** - 用於與捲動連動的動畫、固定、scrub 與重新整理處理的 ScrollTrigger
- **[greensock/gsap-plugins](https://officialskills.sh/greensock/skills/gsap-plugins)** - 外掛包括 ScrollToPlugin、Flip、Draggable、SplitText、SVG 與 physics
- **[greensock/gsap-utils](https://officialskills.sh/greensock/skills/gsap-utils)** - 工具函式，例如 clamp、mapRange、interpolate、snap、selector 與 wrap
- **[greensock/gsap-react](https://officialskills.sh/greensock/skills/gsap-react)** - React 整合，包含 useGSAP hook、refs、gsap.context()、清理與 SSR
- **[greensock/gsap-performance](https://officialskills.sh/greensock/skills/gsap-performance)** - transform、will-change、批次處理與 ScrollTrigger 最佳化等效能技巧
- **[greensock/gsap-frameworks](https://officialskills.sh/greensock/skills/gsap-frameworks)** - Vue、Svelte 與其他框架的生命週期、範圍限定與清理模式

</details>

<details>
<summary><h3 id="skills-by-garry-tan-gstack" style="display:inline">Garry Tan（gstack）提供的技能</h3></summary>

[Garry Tan](https://github.com/garrytan)（Y Combinator 執行長）提供的 28 項技能，可將 Claude Code 轉變為虛擬工程團隊——從構想至正式環境部署的結構化工作流程。60 天內交付超過 60 萬行正式環境程式碼。

- **[garrytan/office-hours](https://officialskills.sh/garrytan/skills/office-hours)** - YC Office Hours：六個引導式問題，在撰寫程式碼前重新界定產品
- **[garrytan/plan-ceo-review](https://officialskills.sh/garrytan/skills/plan-ceo-review)** - CEO／創辦人計畫審查，提供四種模式：擴張、選擇性擴張、維持範疇、縮減
- **[garrytan/plan-eng-review](https://officialskills.sh/garrytan/skills/plan-eng-review)** - 工程經理審查：確定架構、資料流程、圖表、邊界案例與測試
- **[garrytan/plan-design-review](https://officialskills.sh/garrytan/skills/plan-design-review)** - 資深設計師審查：各設計面向評分 0–10、說明 10 分的樣貌，並偵測 AI Slop
- **[garrytan/design-consultation](https://officialskills.sh/garrytan/skills/design-consultation)** - 從零建置完整設計系統，加入創意風險與逼真產品模型
- **[garrytan/design-review](https://officialskills.sh/garrytan/skills/design-review)** - 會寫程式的設計師：先進行視覺稽核，再以原子提交與前後截圖修正
- **[garrytan/review](https://officialskills.sh/garrytan/skills/review)** - Staff Engineer 程式碼審查：找出能通過 CI、卻會在正式環境出問題的錯誤
- **[garrytan/investigate](https://officialskills.sh/garrytan/skills/investigate)** - 系統化根因偵錯：未調查前不修正、追蹤資料流程並測試假設
- **[garrytan/qa](https://officialskills.sh/garrytan/skills/qa)** - QA 負責人：測試應用程式、找出錯誤、以原子提交修復並自動產生回歸測試
- **[garrytan/qa-only](https://officialskills.sh/garrytan/skills/qa-only)** - QA 報告者：方法與 /qa 相同，但只回報、不變更程式碼
- **[garrytan/cso](https://officialskills.sh/garrytan/skills/cso)** - 資訊安全長：OWASP Top 10 + STRIDE 威脅模型，不排除任何誤報
- **[garrytan/ship](https://officialskills.sh/garrytan/skills/ship)** - 發布工程師：同步 main、執行測試、稽核涵蓋率、推送並建立 PR
- **[garrytan/land-and-deploy](https://officialskills.sh/garrytan/skills/land-and-deploy)** - 合併 PR、等待 CI 與部署，並驗證正式環境健康狀態
- **[garrytan/canary](https://officialskills.sh/garrytan/skills/canary)** - SRE 部署後監控：監看主控台錯誤、效能退化與頁面失敗
- **[garrytan/benchmark](https://officialskills.sh/garrytan/skills/benchmark)** - 效能工程師：建立頁面載入時間、Core Web Vitals 與資源大小基準
- **[garrytan/document-release](https://officialskills.sh/garrytan/skills/document-release)** - 技術文件撰寫者：更新所有專案文件，使其符合剛交付的內容
- **[garrytan/retro](https://officialskills.sh/garrytan/skills/retro)** - 工程經理每週回顧，包含個人分析與連續交付紀錄
- **[garrytan/browse](https://officialskills.sh/garrytan/skills/browse)** - 用於 QA 的真實 Chromium 瀏覽器：真實點擊、真實螢幕截圖，每個指令約 100 毫秒
- **[garrytan/setup-browser-cookies](https://officialskills.sh/garrytan/skills/setup-browser-cookies)** - 將真實瀏覽器的 Cookie 匯入無頭工作階段
- **[garrytan/autoplan](https://officialskills.sh/garrytan/skills/autoplan)** - 一個指令產生完整審閱的計畫：自動執行 CEO → 設計 → 工程審查
- **[garrytan/codex](https://officialskills.sh/garrytan/skills/codex)** - 透過 OpenAI Codex CLI 尋求第二意見：審查、對抗式挑戰與開放諮詢
- **[garrytan/careful](https://officialskills.sh/garrytan/skills/careful)** - 安全防護：在破壞性指令（rm -rf、DROP TABLE、強制推送）前發出警告
- **[garrytan/freeze](https://officialskills.sh/garrytan/skills/freeze)** - 編輯鎖：偵錯期間將檔案編輯限制在單一目錄
- **[garrytan/guard](https://officialskills.sh/garrytan/skills/guard)** - 完整安全性：以一個指令同時啟用 /careful + /freeze，達到最高防護
- **[garrytan/unfreeze](https://officialskills.sh/garrytan/skills/unfreeze)** - 解除鎖定：移除 /freeze 邊界
- **[garrytan/setup-deploy](https://officialskills.sh/garrytan/skills/setup-deploy)** - 部署設定器：為 /land-and-deploy 一次性設定
- **[garrytan/gstack-upgrade](https://officialskills.sh/garrytan/skills/gstack-upgrade)** - 自動更新器：將 gstack 升級至最新版

</details>

<details>
<summary><h3 id="skills-by-notion" style="display:inline">Notion 提供的技能</h3></summary>

來自 Notion 儲存庫的官方技能——具工作區脈絡感知功能，用於擷取知識、準備會議、研究及將規格轉為工作項目。

**來自 [notion-cookbook](https://github.com/makenotion/notion-cookbook/tree/main/skills/claude)：**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - 將對話轉換為組織妥善、連結完善的結構化 Notion 文件頁面
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - 蒐集 Notion 脈絡並建立會前資料與議程，準備會議材料
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - 搜尋 Notion 工作區、綜整發現並建立完整研究報告
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - 將產品／技術規格轉換為具體 Notion 工作項目，並附驗收條件與進度追蹤

**來自 [claude-code-notion-plugin](https://github.com/makenotion/claude-code-notion-plugin/tree/main/skills/notion)：**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - 將對話轉換為組織妥善、連結完善的結構化 Notion 文件頁面
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - 蒐集 Notion 脈絡並建立會前資料與議程，準備會議材料
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - 搜尋 Notion 工作區、綜整發現並建立完整研究報告
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - 將產品／技術規格轉換為具體 Notion 工作項目，並附驗收條件與進度追蹤

</details>

<details>
<summary><h3 id="skills-by-resend" style="display:inline">Resend 提供的技能</h3></summary>

Resend 官方技能，可傳送與接收電子郵件、建立郵件範本，並為代理提供電子郵件專業知識。

- **[resend/resend](https://github.com/resend/resend-skills/tree/main/skills/resend)** - 透過 Resend API 傳送與管理電子郵件
- **[resend/react-email](https://github.com/resend/resend-skills/tree/main/skills/react-email)** - 使用 React Email 元件建立電子郵件
- **[resend/email-best-practices](https://github.com/resend/resend-skills/tree/main/skills/email-best-practices)** - 電子郵件送達率與設計最佳實務
- **[resend/agent-email-inbox](https://github.com/resend/resend-skills/tree/main/skills/agent-email-inbox)** - AI 代理電子郵件收件匣管理
- **[resend/resend-cli](https://github.com/resend/resend-skills/tree/main/skills/resend-cli)** - Resend CLI 指令與工作流程

</details>

<details>
<summary><h3 id="skills-by---google-chrome-team---addy-osmani-web-quality" style="display:inline">Google Chrome 團隊 Addy Osmani（Web Quality）提供的技能<a id="skills-by-addy-osmani-web-quality"></a></h3></summary>

Addy Osmani（Google Chrome 團隊）提供的 Lighthouse 風格網頁品質技能，涵蓋效能、Core Web Vitals、無障礙、SEO 與現代最佳實務——與 Google Lighthouse 稽核的核心面向相同。

- **[addyosmani/web-quality-audit](https://officialskills.sh/addyosmani/skills/web-quality-audit)** - 跨效能、無障礙、SEO 與最佳實務類別進行全面品質審查
- **[addyosmani/performance](https://officialskills.sh/addyosmani/skills/performance)** - 載入速度、執行階段效率與資源最佳化
- **[addyosmani/core-web-vitals](https://officialskills.sh/addyosmani/skills/core-web-vitals)** - 針對 LCP、INP 與 CLS 的最佳化
- **[addyosmani/accessibility](https://officialskills.sh/addyosmani/skills/accessibility)** - 符合 WCAG、支援螢幕閱讀器與鍵盤導覽
- **[addyosmani/seo](https://officialskills.sh/addyosmani/skills/seo)** - 搜尋引擎最佳化、可檢索性與結構化資料
- **[addyosmani/best-practices](https://officialskills.sh/addyosmani/skills/best-practices)** - 安全性、現代網頁 API 與程式碼品質模式

</details>

<details>
<summary><h3 id="skills-by-mongodb" style="display:inline">MongoDB 提供的技能</h3></summary>

MongoDB 官方 Agent Skills，適用於代理工作流程——連線管理、結構描述設計、查詢最佳化、自然語言查詢與 Atlas Stream Processing。

- **[mongodb/mongodb-mcp-setup](https://officialskills.sh/mongodb/skills/mongodb-mcp-setup)** - 設定 MongoDB MCP 伺服器，包括驗證與連線設定
- **[mongodb/mongodb-connection](https://officialskills.sh/mongodb/skills/mongodb-connection)** - 最佳化 MongoDB 用戶端連線集區、逾時與無伺服器模式
- **[mongodb/mongodb-schema-design](https://officialskills.sh/mongodb/skills/mongodb-schema-design)** - 使用驗證與索引模式設計高效率文件結構描述
- **[mongodb/atlas-stream-processing](https://officialskills.sh/mongodb/skills/atlas-stream-processing)** - 使用 Kafka、S3 與 Lambda 整合，建置、操作並偵錯 Atlas Stream Processing 管線
- **[mongodb/mongodb-natural-language-querying](https://officialskills.sh/mongodb/skills/mongodb-natural-language-querying)** - 將自然語言轉換為 MongoDB 查詢與聚合管線
- **[mongodb/mongodb-query-optimizer](https://officialskills.sh/mongodb/skills/mongodb-query-optimizer)** - 使用 Atlas Performance Advisor 分析並最佳化查詢效能
- **[mongodb/mongodb-search-and-ai](https://officialskills.sh/mongodb/skills/mongodb-search-and-ai)** - 使用向量搜尋實作 Atlas Search 與 AI 驅動的建議功能

</details>

<details>
<summary><h3 id="skills-by-redis" style="display:inline">Redis 提供的技能</h3></summary>

- **[redis/redis-core](https://github.com/redis/agent-skills/tree/main/skills/redis-core)** - Redis 開發最佳實務——資料結構、查詢引擎、向量搜尋、快取與效能最佳化。

</details>

<details>
<summary><h3 id="skills-by-nvidia" style="display:inline">NVIDIA 提供的技能</h3></summary>

NVIDIA 發布的官方技能，適用於其 AI、加速運算、機器人、模擬與開發者平台。NVIDIA 經常更新並重新整理此目錄，因此本清單連結至持續維護的來源，而非重複保存快照。

- **[Browse NVIDIA's official Agent Skills catalog](https://github.com/NVIDIA/skills/tree/main/skills)** - 直接在 NVIDIA 儲存庫中檢視目前的技能集合。

</details>


<details>
<summary><h3 id="skills-by-google-cloud" style="display:inline">Google Cloud 提供的技能</h3></summary>

Google Cloud 官方技能，涵蓋 Firebase、BigQuery、Cloud Run、GKE、AlloyDB、Cloud SQL、Gemini Enterprise Agent Platform、網路可觀測性與 Well-Architected Framework，共 19 項技能。

- **[google/cloud/agent-platform-skill-registry](https://github.com/google/skills/tree/main/skills/cloud/agent-platform-skill-registry)** - 與 Gemini Enterprise Agent Platform Skill Registry 互動，以建立及搜尋可用技能。
- **[google/cloud/alloydb-basics](https://github.com/google/skills/tree/main/skills/cloud/alloydb-basics)** - 管理 AlloyDB for PostgreSQL 的叢集、執行個體與備份，並整合 AlloyDB Model Context Protocol（MCP）工具以自動化資料庫作業。
- **[google/cloud/bigquery-basics](https://github.com/google/skills/tree/main/skills/cloud/bigquery-basics)** - 管理 BigQuery 中的資料集、資料表與工作，並整合 BigQuery ML 與 Gemini，以進行進階資料分析與 AI 驅動的洞察。
- **[google/cloud/cloud-run-basics](https://github.com/google/skills/tree/main/skills/cloud/cloud-run-basics)** - 管理 Cloud Run 服務、工作與工作者集區。
- **[google/cloud/cloud-sql-basics](https://github.com/google/skills/tree/main/skills/cloud/cloud-sql-basics)** - 此檔案會產生或說明 Cloud SQL 資源。
- **[google/cloud/firebase-basics](https://github.com/google/skills/tree/main/skills/cloud/firebase-basics)** - 凡是處理使用 Firebase 產品或服務的專案時，尤其是行動或網頁應用程式，請使用此技能。
- **[google/cloud/gemini-agents-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-agents-api)** - 管理 Gemini Enterprise Agent Platform 上的自訂 Agent 資源。
- **[google/cloud/gemini-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-api)** - 使用 Google Gen AI SDK 指引在 Agent Platform 上使用 Gemini API。
- **[google/cloud/gemini-interactions-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-interactions-api)** - 指引如何在 Gemini Enterprise Agent Platform 上使用 Gemini Interactions API。
- **[google/cloud/gke-basics](https://github.com/google/skills/tree/main/skills/cloud/gke-basics)** - 使用 golden path Autopilot 設定，規劃、建立與設定可供正式環境使用的 Google Kubernetes Engine（GKE）叢集。
- **[google/cloud/google-cloud-networking-observability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-networking-observability)** - 透過分析記錄、指標與診斷資料調查 Google Cloud 網路問題。
- **[google/cloud/google-cloud-recipe-auth](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-recipe-auth)** - 提供 Google Cloud 服務與 API 的驗證及授權專家指引，涵蓋人類使用者、服務身分、Application Default Credentials（ADC）以及……
- **[google/cloud/google-cloud-recipe-onboarding](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-recipe-onboarding)** - 提供開發人員在 Google Cloud 上的入門指引，涵蓋帳戶建立、帳務設定、專案管理與部署第一項資源。
- **[google/cloud/google-cloud-waf-cost-optimization](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-cost-optimization)** - 根據 Google Cloud Well-Architected Framework（WAF）為 Google Cloud 工作負載產生成本最佳化指引。
- **[google/cloud/google-cloud-waf-operational-excellence](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-operational-excellence)** - 根據 Google Cloud Well-Architected Framework 的 Operational Excellence 支柱設計原則與建議，為 Google Cloud 工作負載產生以營運為重點的指引。
- **[google/cloud/google-cloud-waf-performance-optimization](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-performance-optimization)** - 根據 Google Cloud Well-Architected Framework 的 Performance Optimization 支柱設計原則與建議，為 Google Cloud 工作負載產生以效能為重點的指引。
- **[google/cloud/google-cloud-waf-reliability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-reliability)** - 根據 Google Cloud Well-Architected Framework 的設計原則與建議，為 Google Cloud 工作負載產生以可靠性為重點的指引。
- **[google/cloud/google-cloud-waf-security](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-security)** - 根據 Google Cloud Well-Architected Framework（WAF）的設計原則與建議，為 Google Cloud 工作負載產生以安全性為重點的指引。
- **[google/cloud/google-cloud-waf-sustainability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-sustainability)** - 根據 Google Cloud Well-Architected Framework（WAF）的設計原則與建議，為 Google Cloud 工作負載產生以永續性為重點的指引。

</details>

<details>
<summary><h3 id="skills-by-redhat" style="display:inline">Red Hat 提供的技能</h3></summary>

透過由 Red Hat 訂閱支援的精選技能、代理與 MCP 伺服器程式庫，將 AI 的力量擴展至整個組織。無論你是在 Cursor 中最佳化工作流程的 SRE，或是打造智慧介面的架構師，都能運用值得信賴的建構基礎，安心部署並擴展代理式自動化。

- **[redhat/cve-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-customers#agent-and-skills)** - 了解 CVE、檢查產品生命週期狀態、蒐集診斷資料，並依正確嚴重性提交支援案例——日常維運不可或缺的 Red Hat 技能。

- **[redhat/sre-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-site-reliability-engineers)** - 在整個 RHEL 機群中探索、修復並驗證 CVE——透過單一工作流程協調 Red Hat Lightspeed 與 Ansible Automation Platform。

- **[redhat/openshift-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-openshift)** - 透過單一對話式工作流程配置 OpenShift 叢集、盤點資源並產生報告——涵蓋 Assisted Installer、OCM、ROSA、ARO 與 kubeconfig 機群。

- **[redhat/openshift-virtualization](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-openshift-virtualization)** - 透過單一對話式工作流程管理 OpenShift Virtualization 的完整 VM 生命週期——建立、複製、建立快照、還原、重新平衡並產生報告。

</details>

<details>
<summary><h3 id="skills-by-cypress" style="display:inline">Cypress 提供的技能</h3></summary>

Cypress 發布的官方技能，協助建立、維護、理解與修復 Cypress 測試，共 3 項技能。

- **[cypress-io/cypress-author](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-author)** - 建立、更新與修復 Cypress E2E 及元件測試。
- **[cypress-io/cypress-explain](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-explain)** - 說明 Cypress E2E 與元件測試，並回答 Cypress 使用方式與行為相關問題。
- **[cypress-io/cypress-docs](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-docs)** - 從官方文件搜尋並擷取 Cypress 資訊。

</details>


### 社群技能 <a id="community-skills"></a>

<details>
<summary><h3 id="vector-databases" style="display:inline">向量資料庫</h3></summary>

- **[qdrant/skills](https://github.com/qdrant/skills)** - Qdrant Agent Skills，涵蓋向量搜尋的擴充、效能最佳化、搜尋品質、監控、部署、模型移轉、版本升級，以及 Python、TypeScript、Rust、Go、.NET 與 Java SDK 的使用方式。

</details>

<details>
<summary><h3 id="marketing" style="display:inline">行銷</h3></summary>

- **[BrianRWagner/ai-marketing-claude-code-skills](https://github.com/BrianRWagner/ai-marketing-claude-code-skills)** - 17 種行銷框架，適用於陌生開發、首頁稽核、社群卡片等情境
- **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** - 用於全面網站分析與最佳化的通用 SEO 技能
- **[wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill)** - 發布文章至 X/Twitter
- **[CosmoBlk/email-marketing-bible](https://github.com/CosmoBlk/email-marketing-bible)** - 以 AI 技能形式提供的 5.5 萬字電子郵件行銷指南
- **[smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)** - 透過遞迴自我評估運作的 AI 創意總監：20 多種方法論（SIT、TRIZ、Bisociation、SCAMPER、Synectics）、以 Cannes/D&AD/HumanKind 為基準的三軸評估，以及從簡報到提案的五階段流程
- **[Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)** - 推文搜尋、個人檔案推文、粉絲匯出、媒體、發布、回覆、MCP
- **[Xquik-dev/tweetclaw](https://github.com/Xquik-dev/tweetclaw)** - 發布推文、回覆與私訊；搜尋、監控並舉辦抽獎
- **[SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose)** - 嚴格的寫作風格規範，要求撰寫不受 AI 習慣影響、歷久彌新的有力英文文章
- **[blader/humanizer](https://github.com/blader/humanizer)** - 移除文字中 AI 生成寫作的痕跡，使其聽起來更自然、像真人撰寫
- **[MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop)** - 移除明列的 AI 寫作習慣（分號三連、過度使用 em dash、層層保留語、諂媚開場、delve／crucial 等制式詞彙）。提供 lint／改寫兩種模式，可在不自動改寫的情況下稽核文字。五種強度，MIT 授權
- **[Eronred/aso-skills](https://github.com/Eronred/aso-skills)** - 30 多項 App Store 最佳化技能，透過 Appeeky API 進行關鍵字研究、中繼資料最佳化、競爭者分析、創意最佳化與行動成長策略
- **[degausai/wonda](https://github.com/degausai/wonda)** - AI 內容創作：圖像、影片、音樂、音訊、編輯與發布
- **[gitroomhq/postiz-agent](https://github.com/gitroomhq/postiz-agent)** - 以程式方式跨 28 個以上平台排程社群媒體貼文
- **[taisly/agent](https://github.com/taisly/agent)** - 用於 Codex 外掛、Agent Skill、CLI 與 MCP 伺服器，透過 Taisly 將核准的短影音發布至 TikTok、Instagram Reels、YouTube Shorts、X 與 Facebook
- **[indranilbanerjee/digital-marketing-pro](https://github.com/indranilbanerjee/digital-marketing-pro)** - 150 項技能的互動方法論——12 部分策略流程、25 個專家代理、符合 EU AI Act Article 50（C2PA 簽署），並涵蓋 6 個平台的 AEO/GEO，包括 Google AI Mode
- **[infrasity-labs/dev-gtm-claude-skills](https://github.com/infrasity-labs/dev-gtm-claude-skills)**: 以 GTM 為核心的技能集合，適用於開發者上市工作流程，包括發布規劃、定位與外展序列。
- **[nowork-studio/notfair-plugin](https://github.com/nowork-studio/notfair-plugin)** - 具備即時資料的 SEO、GEO、Google Ads 與 Meta Ads 技能
- **[aaron-he-zhu/aaron-marketing-skills](https://github.com/aaron-he-zhu/aaron-marketing-skills)** - 69 項行銷技能，涵蓋 SEO/GEO、網紅、付費廣告與電子郵件，共用同一契約，並設有 5 個以基準測試驅動的稽核關卡（CORE-EEAT、CITE、C³、ROAS、SEND）及免金鑰資料連接器
- **[gooseworks-ai/goose-skills](https://github.com/gooseworks-ai/goose-skills)** - 125 項成長與上市技能：廣告、內容、潛在客戶開發、SEO
- **[sergebulaev/linkedin-skills](https://github.com/sergebulaev/linkedin-skills)** - LinkedIn 行銷技能：病毒式開場、留言草擬、演算法稽核、文字潤飾
- **[Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru)** - 移除俄文文字中的 AI 寫作痕跡
- **[Bomx/distribb-skill](https://github.com/Bomx/distribb-skill)** - SEO 文章、關鍵字研究、CMS 發布、高 DR 反向連結交換
- **[Citlyze/citlyze-skills](https://github.com/citlyze/citlyze-skills)** - Citlyze 團隊提供的 AI 搜尋能見度技能：透過 Citlyze MCP 伺服器產生跨期間能見度報告、引用落差分析、提示詞稽核與行動計畫，另提供獨立 AEO 頁面稽核，無須帳戶即可評估任何 URL
- **[AIDevGTM/gtm-cofounder](https://github.com/AIDevGTM/gtm-cofounder)** - 為個人技術創辦人提供的 18 項上市技能：定位、首批使用者、發布、定價與創辦人主導銷售；以 Adam Frankl 與 Jakub Czakon 的觀點為基礎
- **[mailtrap/mailtrap-skills](https://github.com/mailtrap/mailtrap-skills)** - 透過 API/SMTP 傳送電子郵件並使用沙箱測試
- **[YannisKiefer/dark-psychology-skills](https://github.com/YannisKiefer/dark-psychology-skills)** - 從 36 本書萃取的 13 項代理銷售與談判技能（CIA 心理戰手冊、FBI 行為研究、宣傳科學、經典說服技巧）；每項策略皆須通過誠實影響力檢驗：完全揭露後仍須有效
- **[SupercmoHQ/superCMO-skills](https://github.com/SupercmoHQ/superCMO-skills)** - 開放原始碼技能與本機 MCP 伺服器，用於行銷影片與圖像製作：從產品照片與簡介建立 UGC 影片、廣告影片、產品攝影與圖像廣告；選用 AI 演員與最佳影音模型、剪輯任意長度並維持演員與產品一致，且研究競爭者廣告。自備金鑰或使用代管金鑰，Apache-2.0
- **[sandbaseai/sandbase-skills/multi-source-search](https://github.com/sandbaseai/sandbase-skills/tree/main/research/multi-source-search)** - 具離線驗證的多來源證據導向研究
- **[Nanako0129/sepia](https://github.com/Nanako0129/sepia)** - 先修正敘事結構、再處理措辭的去 AI 寫作技能
- **[axelfreeman/marketing-mindset](https://github.com/axelfreeman/marketing-mindset)** - 面向 AI 代理的行銷作業系統——先像行銷人員一樣思考，再產生策略手法
- **[ScrapeCreators/social-media-research-skills](https://github.com/ScrapeCreators/social-media-research-skills)** - 研究社群貼文表現突出者、留言、競爭者、廣告與趨勢
- **[ilyautov/humanizer-ru](https://github.com/ilyautov/humanizer-ru/tree/main/skills/humanizer-ru)** - 使用掃描器，從俄文文字中移除 64 種 AI 寫作痕跡
- **[socai-io/jev-social](https://github.com/socai-io/jev-social/tree/v0.1.10/skills/jev-social)** - 透過 Jev 與 socai CLI 將本機社群研究導向處理
- **[explorium-ai/vibe-prospecting](https://github.com/explorium-ai/vibeprospecting-plugin/tree/main/skills/vibe-prospecting)** - B2B 潛在客戶探索資料補全與上市資料工作流程

</details>

<details>
<summary><h3 id="productivity-and-collaboration" style="display:inline">生產力與協作</h3></summary>

- **[PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill)** - 使用 Nutrient DWS API 處理文件：轉換（PDF/DOCX/XLSX/PPTX/HTML／圖像）、擷取文字／表格、OCR（20 多種語言）、遮蔽個人識別資訊（模式 + AI）、加浮水印、數位簽章與填寫表單。[亦提供 MCP 伺服器](https://www.npmjs.com/package/@nutrient-sdk/dws-mcp-server)。
- **[notiondevs/Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)** - 用於操作 Notion 的技能
- **[op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)** - 以 AI 產生 PPT，支援文件分析與樣式化圖像
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - 產生動畫豐富、附視覺風格預覽的 HTML 簡報
- **[gokapso/integrate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/integrate-whatsapp)** - 連接 WhatsApp、設定 webhooks 並傳送訊息
- **[gokapso/automate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/automate-whatsapp)** - 使用工作流程與代理建置 WhatsApp 自動化
- **[gokapso/observe-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/observe-whatsapp)** - 偵錯 WhatsApp 訊息送達問題並執行健康檢查
- **[PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill)** - 使用 NotebookLM 進行文件式對話
- **[obra/superpowers-lab](https://github.com/obra/superpowers-lab)** - Claude superpowers 實驗室環境
- **[obra/brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)** - 產生並探索構想
- **[obra/writing-plans](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)** - 建立策略文件
- **[obra/executing-plans](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md)** - 實作並執行策略計畫
- **[obra/dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)** - 協調多個同時執行的代理
- **[obra/using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md)** - 善用平台核心功能
- **[op7418/Youtube-clipper-skill](https://github.com/op7418/Youtube-clipper-skill)** - 使用自動化工作流程產生與編輯 YouTube 短片
- **[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills)** - 為創辦人提供含打包新創工作流程的 Claude 技能
- **[EveryInc/charlie-cfo-skill](https://github.com/EveryInc/charlie-cfo-skill)** - 受 Charlie Munger 啟發的自力創業 CFO 財務管理
- **[openaccountants/openaccountants](https://github.com/openaccountants/openaccountants)** - 涵蓋 134 個國家的 371 項稅務分類技能
- **[wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill)** - 管理 Linear issues、專案與團隊
- **[hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill)** - 精簡、低摩擦的階層式記憶系統，使用背景代理與檔案系統持續保存
- **[xberg-io/xberg](https://github.com/xberg-io/xberg/tree/main/plugin/skills/xberg)** - 從 101 種以上文件格式擷取文字、表格與中繼資料
- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - 20 項專業技能，適用於履歷最佳化、ATS 分析、面試準備與職涯轉換
- **[bevibing/tutor-skills](https://github.com/bevibing/tutor-skills)** - 將文件或程式碼庫轉換為含互動測驗的 Obsidian StudyVault
- **[NeoLabHQ/write-concisely](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/docs/skills/write-concisely)** - 運用知名著作 *The Elements of Style* 的原則，消除冗詞並改善結構，讓文件與寫作更清晰、專業。
- **[ReScienceLab/opc-skills](https://github.com/ReScienceLab/opc-skills)** - 為個人創業者提供含 SEO、地理資訊與 LLM 工具的 Agent Skills
- **[SeanZoR/claude-speed-reader](https://github.com/SeanZoR/claude-speed-reader)** - 使用 RSVP 與 Spritz 風格 ORP 標示，以每分鐘 600 字以上速度閱讀 Claude 回覆
- **[Charlie85270/Dorothy](https://github.com/Charlie85270/Dorothy)** - 使用自動化與 MCP 伺服器協調多個 AI CLI 代理
- **[Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills)** - 具備 30 多種框架與 SaaS 指標的資深 PM 代理
- **[deusyu/translate-book](https://github.com/deusyu/translate-book)** - 透過平行子代理與續傳功能翻譯書籍（PDF/DOCX/EPUB）
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** - 跨 Reddit、X、YouTube、HN、Polymarket 與網路研究任何主題，依讚數、喜歡數與實際金額排序，而非依編輯選擇
- **[santifer/career-ops](https://github.com/santifer/career-ops)** - 14 項技能的 AI 求職工具集：以 A–F 評分評估職缺描述、產生 ATS 最佳化 PDF、掃描求職平台（Greenhouse/Ashby/Lever）、使用 STAR+R 準備面試、批次處理與 Go 儀表板 TUI
- **[Linked-API/linkedin](https://github.com/Linked-API/linkedin-skills/tree/main/linkedin)** - 從 Claude Code、Codex、Cursor 與 Windsurf 擷取 LinkedIn 個人檔案、搜尋使用者與公司、傳送訊息、管理聯絡人、建立貼文、回應、留言並執行自訂 LinkedIn 工作流程。
- **[pattern-ai-labs/agentcall](https://github.com/pattern-ai-labs/agentcall)** - 讓 AI 代理加入 Google Meet、Zoom、Teams 通話，像真正的隊友一樣協作。
- **[Sendmux/skills](https://github.com/Sendmux/skills)** - 為代理提供 Sendmux 電子郵件與信箱工作流程
- **[tjboudreaux/cc-thinking-skills](https://github.com/tjboudreaux/cc-thinking-skills)** - 28 種由評估研究啟發的心智模型，適用於決策、偵錯、系統與策略
- **[JimmySadek/youtube-fetcher](https://github.com/JimmySadek/youtube-fetcher-to-markdown)** - 從 YouTube 影片建立適用於 Obsidian 的 Markdown 筆記
- **[zapier/zapier-mcp](https://github.com/zapier/zapier-mcp)** - 代管 Zapier MCP 伺服器的官方外掛發佈套件。將 Claude 連接至數千個應用程式——傳送訊息、擷取資料並觸發工作流程。
- **[Neeeophytee/finding-unknowns-skills](https://github.com/Neeeophytee/finding-unknowns-skills)** - 8 種元技能，可在未知問題變得昂貴前讓程式設計代理先找出來：盲點檢視、訪談、參考資料搜尋、實作計畫／筆記、提案套件與合併前變更測驗。透過 agentskills.io SKILL.md 格式支援 Claude Code、Codex 與 Cursor。
- **[kgraph57/strategy-consulting-visualization](https://github.com/kgraph57/mckinsey-style-visualization-skill)** - McKinsey 風格圖表與顧問簡報
- **[vaibhavarora14/job-application-agent](https://github.com/vaibhavarora14/job-application-agent)** - 以隱私為先的求職探索與追蹤
- **[wgwtest/novel-writing](https://github.com/wgwtest/novel-writing)** - 以觀點、對話與風格檢查規劃並修訂小說。
- **[cyperx84/claude-skills-mental-models](https://github.com/cyperx84/claude-skills-mental-models)** - 以檔案形式加入你自己的心智模型；內含 21 種模型
- **[manavmishra/zero-slop](https://github.com/manavmishra/ZeroSlop/blob/main/SKILL.md)** - 在保留事實、語氣與格式的前提下，編輯聽起來像 AI 生成的文字
- **[OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills)** - 225 項商業、日常生活與程式設計技能，許多附有指令碼
- **[GiaSip/giasip-research](https://github.com/GiaSip/giasip-skills/tree/main/skills/giasip-research)** - 附來源連結且明確列出未解檢查事項的研究報告
- **[tronghieu/agent-skills](https://github.com/tronghieu/agent-skills)** - 18 項以方法為導向的知識工作技能：策略、研究、寫作
- **[dmoshehun-prog/learn-from-materials](https://github.com/dmoshehun-prog/learn-from-materials)** - 將文件轉化為以來源為依據、可供 AI 代理互動學習的頁面

</details>

<details>
<summary><h3 id="development-and-testing" style="display:inline">開發與測試</h3></summary>

- **[VoDaiLocz/kilo-kit-mcp](https://github.com/VoDaiLocz/kilo-kit-mcp)** - 包含 177 項精選技能的完整程式庫，搭配強制執行協定層級 C4 工作流程關卡的 MCP 執行環境、附安全防護的硬性指令執行閘門，以及 5 種認知推理引擎（Tree of Thoughts DAG、對抗式盤問、5 Whys 根因追蹤器、脈絡壓縮器、自我演進），適用於 Claude Code、Cursor、Antigravity 與 Codex。

- **[hedralab/eskill](https://github.com/hedralab/eskill)** - 建置頂尖 Agent Skills 的元技能：符合規格的 SKILL.md、評估迴圈、驗證器、市場研究與編號檔案管線
- **[robzolkos/skill-rails-upgrade](https://github.com/robzolkos/skill-rails-upgrade)** - 分析 Rails 應用程式並提供升級評估
- **[antonbabenko/terraform-skill](https://github.com/antonbabenko/terraform-skill)** - Terraform 與 OpenTofu 模式：測試、模組、state、CI/CD。
- **[zxkane/aws-skills](https://github.com/zxkane/aws-skills)** - 使用基礎架構自動化與雲端架構模式進行 AWS 開發
- **[Rootly-AI-Labs/rootly-incident-responder](https://github.com/rootlyhq/rootly-mcp-server/blob/main/examples/skills/rootly-incident-responder.md)** - 由 AI 驅動的事件應變，具備 ML 相似性比對、解決方案建議與值班協調功能。需要 [Rootly MCP Server](https://github.com/rootlyhq/rootly-mcp-server)
- **[conorluddy/ios-simulator-skill](https://github.com/conorluddy/ios-simulator-skill)** - 控制 iOS Simulator
- **[ramzesenok/iOS-Accessibility-Audit-Skill](https://github.com/ramzesenok/iOS-Accessibility-Audit-Skill)** - 依無障礙規範稽核 iOS App
- **[truongduy2611/app-store-preflight-skills](https://github.com/truongduy2611/app-store-preflight-skills)** - 在提交前掃描 iOS/macOS 專案，找出可能導致 App Store 拒絕的常見錯誤
- **[coderabbitai/skills](https://github.com/coderabbitai/skills)** - 供程式設計代理使用的程式碼審查與 PR 自動修正工作流程
- **[sanjay3290/postgres](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres)** - 對 PostgreSQL 資料庫執行安全的唯讀 SQL 查詢
- **[sanjay3290/deep-research](https://github.com/sanjay3290/ai-skills/tree/main/skills/deep-research)** - 使用 Gemini Deep Research Agent 自主進行多步驟研究
- **[jthack/ffuf-claude-skill](https://github.com/jthack/ffuf_claude_skill)** - 使用 ffuf 進行網頁模糊測試
- **[lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill)** - 使用 Playwright 進行瀏覽器自動化
- **[woniu9524/open-web-bridge](https://github.com/woniu9524/open-web-bridge)** - 從 Claude Code、Codex 或 Gemini CLI 透過 CDP 操作已登入的真實 Chrome：語意快照、真實滑鼠點擊、驗證碼與登入的人工作業交接、HAR 擷取與重播
- **[ibelick/ui-skills](https://github.com/ibelick/ui-skills)** - 引導代理建置介面時遵循不斷演進、立場鮮明的限制
- **[muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams)** - 根據提示產生手繪 Excalidraw 圖表——動畫 SVG、託管編輯連結與 PNG 匯出。支援 Claude Code、Codex、Gemini CLI，以及任何支援標準技能路徑的代理。
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** - UI/UX 設計模式與最佳實務
- **[ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills)** - 來自 Apple HIG、Material Design 3 與 WCAG 2.2 的 300 多項跨平台應用程式設計規則
- **[Kayforkind/reimagine-it](https://github.com/Kayforkind/reimagine-it)** - 只使用現有內容重新設計 HTML 頁面
- **[scarletkc/vexor](https://github.com/scarletkc/vexor)** - 搭配 Claude/Codex 技能的語意檔案搜尋向量 CLI
- **[obra/test-driven-development](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)** - 在實作程式碼前先撰寫測試
- **[obra/subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)** - 使用多個子代理進行開發
- **[obra/systematic-debugging](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md)** - 以有條理的方法解決程式碼問題
- **[obra/finishing-a-development-branch](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md)** - 完成 Git 程式碼分支
- **[obra/requesting-code-review](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md)** - 啟動程式碼審查流程
- **[obra/receiving-code-review](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md)** - 處理並納入程式碼回饋
- **[obra/using-git-worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md)** - 管理多個 Git 工作樹
- **[obra/verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md)** - 完成前驗證工作
- **[obra/writing-skills](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)** - 開發並記錄功能
- **[fvadicamo/dev-agent-skills](https://github.com/fvadicamo/dev-agent-skills)** - Git 與 GitHub 工作流程技能，適用於提交、PR 與程式碼審查
- **[omkamal/pypict-skill](https://github.com/omkamal/pypict-claude-skill/blob/main/SKILL.md)** - 兩兩測試產生
- **[alinaqi/maggy](https://github.com/alinaqi/maggy)** - 立場鮮明的專案初始化，具備安全優先防護、規格驅動的原子待辦事項、LLM 測試模式與 CLI 工具協調（gh、vercel、supabase）
- **[ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills)** - Rust 應用程式的 Makepad UI 開發技能：設定、模式、著色器、打包與疑難排解。
- **[massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill)** - 根據 RLM 研究，使用遞迴分解策略處理長脈絡任務（100 多個檔案、5 萬多個 token）
- **[AvdLee/swiftui-expert-skill](https://github.com/AvdLee/SwiftUI-Agent-Skill/tree/main/swiftui-expert-skill)** - 現代 SwiftUI 最佳實務與 iOS 26+ Liquid Glass 採用
- **[efremidze/swift-patterns-skill](https://github.com/efremidze/swift-patterns-skill/tree/main/swift-patterns)** - 現代 Swift/SwiftUI 最佳實務
- **[wendylabsinc/claude-skills](https://github.com/wendylabsinc/claude-skills)** - 附最佳實務 lint 工具的 Swift Server 開發指引
- **[rorkai/app-store-connect-cli-skills](https://github.com/rorkai/app-store-connect-cli-skills)** - 使用 ASC CLI 自動化 App Store 部署與管理
- **[rameerez/claude-code-startup-skills](https://github.com/rameerez/claude-code-startup-skills)** - 建立並營運軟體新創、應用程式與 SaaS 的技能
- **[zscole/model-hierarchy-skill](https://github.com/zscole/model-hierarchy-skill)** - 依任務複雜度進行成本最佳化模型路由
- **[CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills)** - 建立 3D 元素與互動體驗的 Three.js 技能
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** - 高自主性的前端技能，可調整設計變化、動態強度與視覺密度，讓 AI 擁有好品味並避免產生千篇一律的 UI 垃圾
- **[testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)** - 70 多種經正式環境測試的 Playwright 自動化測試模式：E2E、POM、CI/CD、移轉、CLI
- **[NeoLabHQ/review](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/review)** - 使用專業代理進行完整 PR 程式碼審查：bug-hunter、security-auditor、code-quality-reviewer、contracts-reviewer、historical-context-reviewer、test-coverage-reviewer
- **[NeoLabHQ/reflexion](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/reflexion)** - 強制 LLM 反思並修正先前輸出的自我精煉迴圈。
- **[NeoLabHQ/sdd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sdd)** - 規格驅動的開發工作流程，透過結構化規劃、架構設計與 LLM-as-a-Judge 品質關卡，將提示詞轉化為可供正式環境使用的實作。
- **[NeoLabHQ/ddd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd)** - 領域驅動開發技能，另涵蓋 Clean Architecture、SOLID 原則與設計模式。
- **[NeoLabHQ/sadd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd)** - 在各次迭代間以程式碼審查檢查點派遣獨立子代理執行個別工作，促成快速且受控的開發。
- **[NeoLabHQ/kaizen](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen)** - 運用多種分析方法實踐持續改善，奠基於日本 Kaizen 哲學與 Lean 方法論。
- **[uucz/moyu](https://github.com/uucz/moyu)** - 含 5 種變體與 10 個平台的反過度工程技能
- **[mattpocock/skills](https://github.com/mattpocock/skills)** - 17 項開發工作流程技能：PRD 撰寫、TDD、程式碼庫架構、git 防護、issue 分流、重構計畫等
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** - 涵蓋 38 個領域的 753 項網路安全技能：雲端安全、滲透測試、紅隊演練、DFIR、惡意軟體分析、威脅情報等（對應 MITRE ATT&CK）
- **[wrsmith108/varlock-claude-skill](https://github.com/wrsmith108/varlock-claude-skill)** - 安全管理環境變數，確保機密不會暴露於 Claude 工作階段、終端機、記錄或 git 提交中
- **[Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** - 在數分鐘內自動將文件網站、GitHub 儲存庫與 PDF 轉換為 Claude AI 技能
- **[NoizAI/skills](https://github.com/NoizAI/skills)** - 搭配本機／雲端 API 與應用程式交付流程的擬真人 TTS 工作流程
- **[Kevin7Qi/codex-collab](https://github.com/Kevin7Qi/codex-collab)** - 在 Claude Code 中與 Codex 協作
- **[ethos-link/rails-conventions](https://github.com/ethos-link/rails-conventions)** - 確保正式環境程式碼變更一致的 Rails 8 慣例
- **[mcollina/skills](https://github.com/mcollina/skills/tree/main/skills)** - Matteo Collina 提供的 11 項技能：Node.js、Fastify、TypeScript、OAuth、Git/GitHub、ESLint neostandard、文件（Diataxis）、Node.js 核心內部、技能最佳化等
- **[Lum1104/understand-anything](https://github.com/Egonex-AI/Understand-Anything)** - 透過多代理 LLM 分析建立互動式程式碼庫知識圖譜
- **[hqhq1025/skill-optimizer](https://github.com/hqhq1025/skill-optimizer)** - 使用真實工作階段資料與研究支援的靜態分析，診斷並最佳化 Agent Skills（SKILL.md）。支援 Claude Code、Codex 與任何相容 Agent Skills 的代理。
- **[LambdaTest/agent-skills](https://github.com/LambdaTest/agent-skills)** - TestMu AI（前身為 LambdaTest）技能精選集，教導 AI 程式設計助理撰寫正式環境級測試自動化。
- **[foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills)** - 支援分階段、測試驅動技能協調的外掛即用型技能框架
- **[metalbear-co/skills](https://github.com/metalbear-co/skills)** - 讓代理使用 mirrord，直接對你的 Kubernetes 叢集進行程式設計與測試
- **[dembrandt/dembrandt-skills](https://github.com/dembrandt/dembrandt-skills)** - UX 與設計系統技能：層級、字體、無障礙、互動
- **[GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis)** - 供 AI 程式設計代理使用的證據導向方法套件
- **[baskduf/codex-fable5](https://github.com/baskduf/FableCodex/tree/main/plugins/codex-fable5/skills/codex-fable5)** - Codex 的證據導向工作流程關卡
- **[csthink/dashmotion](https://github.com/csthink/dashmotion/tree/main/skills/dashmotion)** - 由白話英文或 Mermaid 產生自包含的 HTML/SVG 動態技術圖表
- **[plasma-ai/fractal](https://github.com/plasma-ai/fractal/tree/main/fractal/skills/fractal)** - 在隔離的 git 工作樹中執行有界階層式代理迴圈
- **[reliefeai/browser-relay](https://github.com/reliefeai/browser-relay/tree/v1.4.1/skills/browser-relay)** - 不搶奪焦點即可控制現有已登入的 Chrome
- **[squirrelscan/squirrelscan](https://github.com/squirrelscan/skills)** - 稽核網站的 SEO、效能、安全性與無障礙，並提供修正
- **[Simon-He95/markstream-install](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-install)** - 在五種前端框架中安裝串流 Markdown 渲染器
- **[eduardo-sl/go-agent-skills](https://github.com/eduardo-sl/go-agent-skills)** - 精選 Go 技能，涵蓋程式碼審查、並行、測試與架構
- **[drogers0/github-image-upload](https://github.com/drogers0/gh-image/tree/main/skills/github-image-upload)** - 將螢幕截圖、PDF、記錄檔、zip 與影片附加至 GitHub PR、issues 與留言，並回傳標準使用者附件 URL。GitHub 沒有公開附件上傳 API。支援 Claude Code、Codex、Cursor 與 Gemini CLI。
- **[browser-act/browser-act](https://github.com/browser-act/skills/tree/main/browser-act)** - 使用擷取功能與人工作業交接自動化已驗證的瀏覽器
- **[agiwhitelist/auteur](https://github.com/agiwhitelist/auteur)** - 建立由反垃圾 lint 工具與動態 QA 把關的網站
- **[JasonColapietro/suede-creator-skills](https://github.com/JasonColapietro/suede-creator-skills)** - 設計、UI 潤飾、程式碼審查評分、AI 評估、SEO 稽核。
- **[superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill)** - 從現有程式碼庫建立設計系統，並反覆修訂 UI 草稿
- **[Ryan-yang125/motion-lexicon](https://github.com/Ryan-yang125/motion-lexicon/tree/main/skills/motion-lexicon)** - 使用可安裝的 React 元件建立並審查產品動態效果
- **[Maksim-Burtsev/simple-man](https://github.com/Maksim-Burtsev/simple-man)** - 從代理回答中移除讚美、重述與填充內容，同時保留所有可行動事實：發現事項附位置與修正方式，拒絕時提供安全程序，教學則保留長篇形式。以 1,793 次預先登錄的真實呼叫進行基準測試並提交原始記錄。支援 Claude Code、Codex、Gemini CLI、Cursor。
- **[aeonfun/aeon](https://github.com/aeonfun/aeon)** - 70 多項 Claude Code 技能 + 自主 GitHub Actions 代理框架
- **[KhazP/vibe-coding-prompt-template](https://github.com/KhazP/vibe-coding-prompt-template)** - 將 MVP 規劃為 PRD、技術設計與 AGENTS.md
- **[lindblomstefan/skills-library](https://github.com/lindblomstefan/skills-library)** - Claude Code 的引導探索技能：透過訪談從 100 多項 AI 技能目錄中推薦技能，並記錄工作階段回饋，長期驗證候選技能
- **[rainmanjam/poka-yoke](https://github.com/rainmanjam/poka-yoke)** - 讓誤用變得不可能：稽核、設計並強制執行防錯裝置
- **[scarletkc/agents](https://github.com/scarletkc/agents)** - 供 AI 程式設計代理重複使用的標準與工作流程技能
- **[dannwaneri/spec-writer](https://github.com/dannwaneri/spec-writer)** - 將模糊需求轉化為規格、計畫與工作項目
- **[Continuum-AI-Corp/orca-replay](https://github.com/Continuum-AI-Corp/OrcaReplay/tree/main/skills/orca-replay)** - 根據錄製內容回答過往代理執行的相關問題
- **[tt-a1i/archify](https://github.com/tt-a1i/archify/tree/main/archify)** - 從程式碼庫或系統描述產生經驗證的互動式架構圖
- **[d1vai/d1v](https://github.com/d1vai/d1v-cli/blob/main/skills/d1v/SKILL.md)** - 部署網頁專案，提供經驗證的預覽與確認的正式發布
- **[kensaurus/cursor-kenji](https://github.com/kensaurus/cursor-kenji)** - 程式設計代理可自動觸發的現成操作手冊
- **[saleh-alhaddad/itqan-engineering](https://github.com/saleh-alhaddad/itqan-engineering)** - 涵蓋 12 項技能的完整軟體工程生命週期：可續作協調器，加上規格、計畫、TDD 建置、驗證、五軸審查、安全性與發布——撰寫程式碼前須經核准，標記「完成」前須提供證據
- **[hermes-labs-ai/lintlang](https://github.com/hermes-labs-ai/lintlang/blob/main/.agents/skills/lintlang/SKILL.md)** - 針對含糊工具與缺少界限的代理指令進行 lint
- **[fishzjp/qa-skills](https://github.com/fishzjp/qa-skills)** - AI 程式設計代理的 QA 工程：完整生命週期、成效可衡量
- **[UiPath/check-skill](https://github.com/UiPath/coder_eval/tree/main/plugins/coder-eval/skills/check-skill)** - 衡量 Claude Code 技能是否觸發：精確率與召回率
- **[lukstei/slop-grader](https://github.com/lukstei/slop-grader)** - 由 TypeSafe Jev 驅動的規則式 CLI 工具，依自訂規則集評估文件並產生分數與逐行違規標記，協助 AI 代理自動修正
- **[fujibee/agmsg](https://github.com/fujibee/agmsg)** - Claude Code、Codex 與 Gemini CLI 工作階段之間的訊息傳遞
- **[exadel-inc/agentic-readiness-assessment](https://github.com/exadel-inc/agentic-readiness-assessment/tree/main/skills/agentic-readiness-assessment)** - 評估儲存庫對 AI 程式設計代理的就緒程度，並排列修正優先順序。

</details>

<details>
<summary><h3 id="context-engineering" style="display:inline">脈絡工程</h3></summary>

- **[muratcankoylan/context-fundamentals](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-fundamentals)** - 了解脈絡是什麼、為何重要，以及代理系統中的脈絡組成
- **[muratcankoylan/context-degradation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-degradation)** - 辨識脈絡失效模式：中段遺失、污染、干擾與衝突
- **[muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression)** - 為長時間執行的工作階段設計並評估壓縮策略
- **[muratcankoylan/context-optimization](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-optimization)** - 套用精簡、遮罩與快取策略
- **[muratcankoylan/multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)** - 精通主從協調器、點對點與階層式多代理架構
- **[muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems)** - 設計短期、長期與圖譜式記憶架構
- **[muratcankoylan/tool-design](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/tool-design)** - 建置代理可有效使用的工具，包括架構簡化模式
- **[muratcankoylan/evaluation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/evaluation)** - 為代理系統建立評估框架
- **[k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol)** - 供 AI（LLM）程式設計代理使用的圖譜式長期記憶技能——更快的脈絡、更少的 token、更安全的重構
- **[awrshift/claude-memory-kit](https://github.com/awrshift/claude-memory-kit)** - 透過 hooks、wiki 與每日綜整，為多專案工作流程提供持續記憶
- **[NeoLabHQ/prompt-engineering](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering)** - 廣泛使用的提示詞工程技術與模式，包括 Anthropic 最佳實務及代理說服原則。
- **[sametbrr/llm-wiki-manager](https://github.com/sametbrr/llm-wiki-manager)** - 由 LLM 持續管理的個人 wiki——模型負責撰寫、交叉參照並維護知識庫，你則整理來源。實作 Karpathy 的 LLM Wiki 模式，並提供 8 種操作模式。
- **[dankofly/perfectify](https://github.com/dankofly/perfectify)** - 自我改善的控制核心（DAGx AGI Kernel）：對不可逆操作設定硬性核准停止點、以證據把關完成狀態，並提供具漂移治理功能的自我學習操作手冊。已進行行為評估；支援 Claude Code、Codex、Hermes 與 OpenCode。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** - 適用於 17 個網站（包括中國平台）的多平台搜尋 CLI
- **[zilliztech/mfs](https://github.com/zilliztech/mfs)** - `mfs-find`／`mfs-ingest` 技能可跨程式碼、文件、聊天（Slack/Gmail/Jira）、資料庫與物件儲存空間搜尋、grep 與讀取內容，並整合為類似檔案、可搜尋的命名空間；使用本機 ONNX embeddings 自行託管
- **[ohad6k/emulo](https://github.com/ohad6k/emulo)** - 將 AI 程式設計記錄資料挖掘為個人代理設定檔
- **[Tubo2333/obsidian-knowledge-brain](https://github.com/Tubo2333/obsidian-knowledge-brain)** - 為 AI 程式設計代理提供跨工作階段知識記憶與規則演進
- **[stjbrown/agent-knowledge](https://github.com/stjbrown/agent-knowledge)** - 以純 Markdown 維護可攜、附引用來源的代理知識庫
- **[khendzel/skills-janitor](https://github.com/khendzel/skills-janitor)** - Token 稽核、使用追蹤與滑動刪除式技能修剪。
- **[oliver-zehentleitner/keep-the-why](https://github.com/oliver-zehentleitner/keep-the-why)** - 保留程式碼庫背後的推理脈絡——決策、權宜作法與遭否決的替代方案
- **[chrono-meta/context-doctor](https://github.com/chrono-meta/forge-harness/tree/main/plugins/fh-meta/skills/context-doctor)** - 產生 .claudeignore，並在脈絡膨脹消耗 token 前發出警示
- **[thousandflowers/skillreaper](https://github.com/thousandflowers/skillreaper)** - 根據逐字稿證據修剪未使用的技能、MCP 伺服器與子代理
- **[orziz/odai](https://github.com/orziz/odai/tree/main/skills/odai)** - 治理證據、責任路由、安全邊界與經驗證的交付
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** - 跨工作階段壓縮並持續保存代理記憶
- **[vshulcz/deja-history](https://github.com/vshulcz/deja-vu/tree/main/claude-plugin/skills/deja-history)** - 搜尋你在 20 種程式設計代理中的過往工作階段
- **[amirkiarafiei/subagent-cli-skills](https://github.com/amirkiarafiei/subagent-cli-skills/tree/main/skills)** - 將繁重工作委派給其他 15 種代理 CLI 作為子代理
- **[rebelytics/task-observer](https://github.com/rebelytics/one-skill-to-rule-them-all)** - 持續改善技能與自動建立技能的元技能。
- **[Qiuner/birdview](https://github.com/Qiuner/birdview)** - 以架構與限制為 AI 程式設計的核心

</details>

<details>
<summary><h3 id="specialized-domains" style="display:inline">專業領域</h3></summary>

- **[ZeKaiNie/universal-examprep-skill](https://github.com/ZeKaiNie/universal-examprep-skill)** - 為大學教科書（PDF/PPTX/DOCX）提供多模態、紮根內容的主動學習家教。功能包括原生 PDF 向量圖裁切（`pypdfium2`）、真實作業題庫、透過硬性結束碼防止幻覺，以及跨工作階段持續狀態。已使用小型、低成本模型測試超過 1,000 頁真實大學教材。
- **[shouldnotappearcalm/a-share-skill](https://github.com/shouldnotappearcalm/a-share-skill)** - 中國 A 股（上海／深圳）技能：即時報價、K 線歷史、技術指標、事件、資金流向、產業熱度圖與模擬交易。支援 Claude Code、Cursor、Codex 與 Qoder
- **[transloadit/skills](https://github.com/transloadit/skills/tree/main/skills)** - Transloadit 技能集合（6 項）
- **[honeydew-ai/honeydew-ai-coding-agents-plugins](https://github.com/honeydew-ai/honeydew-ai-coding-agents-plugins)** - Honeydew 語意層在 Snowflake、Databricks 與 BigQuery 上的 11 項技能：模型探索，以及實體／關係／屬性／指標／脈絡／網域建立、驗證、查詢、篩選與工作區分支
- **[raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor)** - Apple Human Interface Guidelines 化為 14 項代理技能，涵蓋 iOS、macOS、visionOS、watchOS 與 tvOS 的平台、基礎、元件、模式、輸入與技術
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** - 科學研究與分析技能
- **[NotMyself/claude-win11-speckit-update-skill](https://github.com/NotMyself/claude-win11-speckit-update-skill)** - Windows 11 系統管理
- **[sanjay3290/imagen](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen)** - 使用 Google Gemini API 產生圖像
- **[SHADOWPR0/security-bluebook-builder](https://github.com/SHADOWPR0/security-bluebook-builder)** - 為敏感應用程式建立安全藍皮書
- **[huifer/WellAlly-health](https://github.com/huifer/WellAlly-health)** - 用於醫療資訊分析、症狀追蹤與健康指引的健康助理技能。
- **[frmoretto/clarity-gate](https://github.com/frmoretto/clarity-gate)** - RAG 系統的認知品質驗證
- **[wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)** - 自主 ML 研究，具備跨模型審查循環與 GPU 部署
- **[Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs)** - 適用於模型訓練、推論與 MLOps 的 AI 研究技能
- **[komal-SkyNET/claude-skill-homeassistant](https://github.com/komal-SkyNET/claude-skill-homeassistant)** - 強化並管理 Home Assistant 工作流程
- **[more-io/apple-bridges](https://github.com/more-io/claude-apple-bridges)** - 透過 Swift CLI bridge 原生存取 macOS 應用程式——管理 Apple Reminders、Calendar、Contacts、Notes、Mail 與 tmux 工作階段
- **[hanhuark/mechanical-engineering-research-skill](https://github.com/hanhuark/mechanical-engineering-research-skill)** - 熱流體研究寫作、提案、DOE 與簡報回饋
- **[prompt-security/clawsec](https://github.com/prompt-security/clawsec)** - 具備漂移偵測、自動稽核與技能完整性驗證的安全技能套件
- **[BehiSecc/vibesec](https://github.com/BehiSecc/VibeSec-Skill)** - 從漏洞獵人的角度協助撰寫安全程式碼，避免 IDOR、XSS、SQL injection、SSRF 與弱驗證等常見弱點
- **[lawve-ai/awesome-legal-skills](https://github.com/lawve-ai/awesome-legal-skills)** - 用於自動化法律工作流程的精選 Agent Skills
- **[peas/genealogy-research](https://paulo.com.br/skills/genealogy-research/SKILL.md)** - 具備 OCR、FamilySearch、YAML 資料與人機協作流程的家譜研究代理
- **[vmware-skills/VMware-AIops](https://github.com/vmware-skills/VMware-AIops)** - 由 AI 驅動的 VMware vCenter/ESXi 監控與作業：資產查詢、健康狀態／警示、VM 生命週期（建立、刪除、快照、複製、移轉）、vSAN 管理、Aria Operations 分析與排程記錄掃描。支援 Claude Code、Gemini CLI、Codex、Aider、Trae、Kimi 與 MCP。
- **[video-db/skills](https://github.com/video-db/skills)** - 即時與批次影片工作流程：擷取螢幕／音訊、匯入 URL／YouTube／RTSP、轉錄、建立索引、搜尋、產生字幕、編輯時間軸並串流 HLS 輸出
- **[materials-simulation-skills](https://github.com/HeshamFS/materials-simulation-skills)** - 計算材料科學代理技能：數值穩定性、時間步進、線性求解器、網格產生、模擬驗證、參數最佳化與後處理
- **[Ericyoung-183/alpha-insights](https://github.com/Ericyoung-183/alpha-insights)** - 由 Harness 強制執行的 Claude Code 與 Codex 商業研究
- **[takechanman1228/claude-ecom](https://github.com/takechanman1228/claude-ecom)** - 將電商 CSV 轉化為含 KPI 分解的商業檢討
- **[talkstream/ru-text](https://github.com/talkstream/ru-text)** - 俄文文字品質：涵蓋排版、資訊風格、編輯、UX 寫作與商業書信的約 1,040 項規則。跨平台支援：Claude Code、Codex CLI、Gemini CLI、Cursor。
- **[helius-labs/helius-skills](https://github.com/helius-labs/core-ai/tree/main/helius-skills)** - 端對端推出 Solana 應用程式；透過 Helius API、DFlow 交易與 Phantom 錢包整合，支援交易傳送、資產查詢、即時串流、代幣兌換、預測市場、瀏覽器錢包，並深入研究協定內部
- **[meodai/skill.color-expert](https://github.com/meodai/skill.color-expert)** - 色彩科學專家技能，含 28.6 萬字參考資料，涵蓋 OKLCH/OKLAB、調色盤生成、無障礙／對比、色彩命名、顏料混合與歷史色彩理論
- **[aklofas/kicad-happy](https://github.com/aklofas/kicad-happy)** - 由 AI 驅動的 KiCad 電子設計審查與分析
- **[bitwize-music-studio/claude-ai-music-skills](https://github.com/bitwize-music-studio/claude-ai-music-skills)** - AI 音樂專輯的完整生命週期製作
- **[Alisa0808/vibe-creating-skill](https://github.com/Alisa0808/vibe-creating-skill)** - 將粗略構想或分鏡腳本改寫為文字轉影片提示詞
- **[HUANGCHIHHUNGLeo/claude-real-video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)** - 具備場景感知關鍵影格與逐字稿，讓任何 LLM 都能觀看影片
- **[Optim-Agent/optim-agent](https://github.com/Optim-Agent/optim-agent)** - 由代理引導、可衡量系統調校成效的最佳化。
- **[Orkas-AI/video-router](https://github.com/Orkas-AI/Orkas-VideoStudio/tree/main/packages/skills/video-router)** - 透過確定性的代理製作階段路由影片要求
- **[perso-ai/perso-dubbing](https://github.com/perso-ai/perso-dubbing-plugin)** - 影片翻譯：配音、唇形同步、字幕與短片
- **[GarethManning/regenerative-project-design-orchestrator](https://github.com/GarethManning/education-agent-skills/tree/main/skills/original-frameworks/regenerative-project-design-orchestrator)** - 協調適度的再生式學習專案，同時落實安全保障與責任管理
- **[GarethManning/learning-target-authoring-guide](https://github.com/GarethManning/education-agent-skills/tree/main/skills/original-frameworks/learning-target-authoring-guide)** - 跨不同發展階段撰寫可觀察的能力學習目標
- **[GarethManning/assessment-validity-checker](https://github.com/GarethManning/education-agent-skills/tree/main/skills/curriculum-assessment/assessment-validity-checker)** - 稽核評量的效度、信度與學習目標一致性
- **[GarethManning/progressive-hint-ladder](https://github.com/GarethManning/education-agent-skills/tree/main/skills/student-learning/progressive-hint-ladder)** - 提供循序漸進的提示，同時保留學習者思考與自主性
- **[GarethManning/competency-unpacker](https://github.com/GarethManning/education-agent-skills/tree/main/skills/curriculum-assessment/competency-unpacker)** - 將廣泛能力拆解為可評量的子技能與成功準則
- **[ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills)** - YouTube 代理技能：透過 TranscriptAPI 擷取影片逐字稿並探索影片（搜尋、頻道與播放清單清單）。
- **[morluto/rea](https://github.com/morluto/rea/tree/main/skills/reverse-engineer-anything)** - 使用 REA 對二進位檔、應用程式與執行環境進行逆向工程
- **[apitube/news-api-skills](https://github.com/apitube/news-api-skills)** - 依關鍵字、實體、情緒、來源與日期搜尋全球新聞
- **[zincio/universal-checkout](https://github.com/zincio/skills/tree/master/skills/universal-checkout)** - 使用官方 Zinc API（zinc.com）在美國 50 多家零售商結帳
- **[swaylq/humanize-chinese](https://github.com/swaylq/humanize-chinese)** - 完全離線、不使用 LLM 偵測並改寫 AI 生成的中文文字
- **[renezander030/capcut-edit](https://github.com/renezander030/capcut-cli/tree/master/skills/capcut-edit)** - 使用任意代理編輯 CapCut 與剪映影片專案
- **[MartinDelophy/edit-timeline-studio](https://github.com/MartinDelophy/ai-video-editor/tree/main/skills/edit-timeline-studio)** - 建立可編輯的影片時間軸，含字幕、旁白與經驗證的匯出檔。
- **[Tencent/aig-agent-redteam](https://github.com/Tencent/AI-Infra-Guard/tree/main/skills/aig-agent-redteam)** - 一鍵式 Agent 紅隊安全評估技能
- **[ilyautov/small-business-ru](https://github.com/ilyautov/small-business-ru/tree/main/small-business-ru/skills)** - 俄羅斯小型企業的 34 項技能：稅務、截止日期、交易對象查核
- **[eatmoreduck/boss-zhipin-scraper](https://github.com/eatmoreduck/boss-zhipin-scraper)** - 透過 Chrome CDP 擷取 BOSS 直聘（zhipin.com）職缺，薪資以純文字呈現

</details>

<details>
<summary><h3 id="n8n-automation" style="display:inline">n8n 自動化</h3></summary>

- **[czlonkowski/n8n-code-javascript](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-javascript)** - n8n Code 節點中的 JavaScript 與資料存取模式
- **[czlonkowski/n8n-code-python](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-python)** - 具有限制說明的 n8n Code 節點 Python 程式設計
- **[czlonkowski/n8n-expression-syntax](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-expression-syntax)** - 使用 {{}} 與 $json/$node 變數的 n8n 運算式語法
- **[czlonkowski/n8n-mcp-tools-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-mcp-tools-expert)** - MCP 工具指南，涵蓋工具選擇與節點格式
- **[czlonkowski/n8n-node-configuration](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-node-configuration)** - 含相依性規則與 AI 連線的節點設定
- **[czlonkowski/n8n-validation-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-validation-expert)** - 使用錯誤目錄修正 n8n 驗證錯誤
- **[czlonkowski/n8n-workflow-patterns](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-workflow-patterns)** - Webhook、HTTP、資料庫與 AI 工作的工作流程模式

</details>




## 🔒 安全性聲明 <a id="-security-notice"></a>

本清單中的技能經過精選，但未經稽核。加入清單後，原維護者可能隨時更新、修改或取代這些技能。

安裝或使用任何 Agent Skill 前，請先檢視潛在安全風險並自行驗證來源。

建議使用的工具：

- [Synk 技能安全掃描器](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)

Agent Skills 可能包含提示詞注入、工具投毒、隱藏惡意軟體負載或不安全的資料處理模式。請務必審查程式碼，並自行判斷是否使用技能。


## 其他 AI 程式設計助理的技能路徑 <a id="skills-paths-for-other-ai-coding-assistants"></a>

| 工具 | 專案路徑 | 全域路徑 | 官方文件 |
|------|-------------|-------------|---------------|
| Antigravity | `.agents/skills/` | `~/.gemini/config/skills/` | [Antigravity Skills](https://antigravity.google/docs/skills) |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills) |
| Codex | `.agents/skills/` | `~/.agents/skills/` | [Codex Skills](https://developers.openai.com/codex/skills) |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` | [Cursor Skills](https://cursor.com/docs/context/skills) |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` | [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/) |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` | [Copilot Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` | [OpenCode Skills](https://opencode.ai/docs/skills) |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` | [Windsurf Cascade Skills](https://docs.windsurf.com/windsurf/cascade/skills) |
| [mblode/agent-skills](https://github.com/mblode/agent-skills) | 沒有人會故意發布 AI 垃圾內容。這些技能能確保你不會這麼做。包括 UI 稽核、字體、文件、PR 審查與發布。`npx skills add mblode/agent-skills`


## 技能品質標準 <a id="skill-quality-standards"></a>

隨著生態系成長，一致的品質有助於代理可靠地發現與使用技能。以下參考資料與準則可維持高標準。


### 品質準則 <a id="quality-criteria"></a>

| 領域 | 指引 |
|------|-----------|
| **描述** | 使用第三人稱撰寫。說明技能「做什麼」以及「何時」使用。使用代理能比對的具體關鍵字（例如「PostgreSQL migration」，而非「database stuff」）。 |
| **漸進式揭露** | 將頂層中繼資料控制在約 100 個 token 以下。技能本文應少於 500 行。按需載入資源（大型文件、結構描述），不要直接內嵌。 |
| **不得使用絕對路徑** | 切勿硬編碼特定機器的路徑，例如 `/Users/alice/`。請使用相對路徑或常見變數（`$HOME`、`$PROJECT_ROOT`）。 |
| **工具範圍** | 僅要求技能實際需要的工具。避免使用寬泛的 `"tools": ["*"]`。明確宣告工具相依性。 |


## 🤝 貢獻 <a id="-contributing"></a>

歡迎貢獻！請參閱 [CONTRIBUTING.md](CONTRIBUTING.md) 了解指引。

- 透過 PR 提交新技能
- 改善現有定義

**注意：**請勿提交你在 3 小時前才建立的技能。我們現在著重於已獲社群採用的技能，尤其是由開發團隊發布並經真實使用證明的技能。重質不重量。

## 貢獻者 ♥️ 致謝 <a id="contributor-️-thanks"></a>
![Contributors](https://contrib.rocks/image?repo=voltagent/awesome-agent-skills&max=500&columns=20&anon=1)

## 授權條款 <a id="license"></a>

MIT 授權條款 - 請參閱 [LICENSE](LICENSE)

這是一份精選清單。此處列出的技能由其各自作者與團隊建立及維護，而非由我們建立。我們挑選已獲社群採用且經驗證的技能，但不會稽核、背書，也不保證所列專案的安全性或正確性。這些技能未經安全稽核，正式環境使用前應先行審查。

若你發現清單中的技能有問題，或希望移除自己的技能，請[開啟 issue](https://github.com/VoltAgent/awesome-agent-skills/issues)，我們會盡快處理。

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
