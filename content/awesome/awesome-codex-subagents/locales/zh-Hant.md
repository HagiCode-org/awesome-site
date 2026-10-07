<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>精選收錄 13 個分類、175+ 個 Codex 子代理。</strong>
    <br />
    <br />
</div>

   
<div align="center">
    
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Subagent Count](https://img.shields.io/badge/subagents-175-blue?style=classic)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-codex-subagents?label=Last%20update&style=classic)](https://github.com/VoltAgent/awesome-codex-subagents)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=classic&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>

<br />

# 精選 Codex Subagents

本倉庫是 [Codex Subagents](https://developers.openai.com/codex/subagents)（專為特定開發任務設計的專業 AI 助手）的權威收錄。內容專為 Codex 編寫，並與官方文件保持一致。

## 安裝

請嚴格按官方文件使用 Codex 自訂代理目錄：

- `~/.codex/agents/`：全域代理（在所有專案中可用）
- `.codex/agents/`：專案級代理（在該倉庫中優先級更高）

1. 克隆本倉庫。
2. 將你需要的 `.toml` 代理檔案複製到上述某個目錄中。
3. 如有需要，重啟或重新整理你的 Codex 工作階段。
4. 在提示詞中明確委派任務（Codex 不會自動產生自訂子代理）。

範例：
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

如果你在 Codex 中使用代理設定，請將其放在 `.codex/config.toml` 的 `[agents]` 下，具體參見官方文件。


## 贊助商

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 是受到 70,000+ 開發者信賴的網頁資料基礎設施。其 Crawling API、MCP 伺服器與各類整合，讓 AI 代理能夠即時存取任意網頁——支援 JavaScript 渲染、代理輪換與反爬蟲防護。 |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) 是面向 AI 應用的網頁搜尋 API。提供 Markdown 與 JSON 格式，便於各種整合。 |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 你可以在這裡展示你的產品，觸達使用 Claude Code、Codex、Gemini 等 AI 編程代理的開發者。</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### 子代理儲存位置

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

注意：當發生命名衝突時，專案級子代理會覆蓋全域子代理。


## 子代理結構

每個子代理都使用 Codex 原生的 `.toml` 格式：

```toml
name = "subagent-name"
description = "When this agent should be invoked"
model = "gpt-5.6-luna"
model_reasoning_effort = "medium"
sandbox_mode = "read-only"

[instructions]
text = """
You are a [role description and expertise areas]...

[Agent-specific checklists, patterns, and guidelines]...
"""
```

### 智慧模型路由

每個子代理都包含一個 `model` 欄位，可自動將其路由到合適的模型——在品質與成本之間取得平衡：

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | 深度推理——架構評審、安全審計、金融邏輯 | `security-auditor`、`architect-reviewer`、`fintech-engineer` |
| `gpt-5.6-terra` | 實作、診斷、評估以及多步驟專業分析 | `docker-expert`、`test-automator`、`scientific-literature-researcher` |
| `gpt-5.6-luna` | 有界搜尋、抽取、路由、起草與輕量綜合 | `search-specialist`、`docs-researcher`、`agent-installer` |

### 沙箱模式理念

每個子代理的 `sandbox_mode` 欄位控制檔案系統存取權限：
- **唯讀代理**（評審者、審計者）：`sandbox_mode = "read-only"`——只分析、不修改
- **工作區寫入代理**（開發者、工程師）：`sandbox_mode = "workspace-write"`——可建立與修改檔案





## 分類

### [01. Core Development](categories/01-core-development/)

日常編碼任務所需的核心開發子代理。

- [**api-designer**](categories/01-core-development/api-designer.toml) - REST 與 GraphQL API 架構師
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - 可擴展 API 的伺服器端專家
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - 程式碼路徑梳理與所有權邊界分析
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - 將 DESIGN.md 規範轉換為可實作的 UI 指令
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - 桌面應用專家
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - 精通 React、Vue、Angular 的 UI/UX 專家
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - 端到端功能開發
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL schema 與聯邦架構專家
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - 分散式系統設計者
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - 跨平台行動端專家
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - 視覺設計與互動專家
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - 針對已復現 UI 問題的最小安全修補
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - 即時通訊專家

### [02. Language Specialists](categories/02-language-specialists/)

具備深厚框架知識的特定語言專家。
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ 企業級模式專家
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ 效能專家
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET 生態專家
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ Web 開發專家
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 跨平台專家
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework 傳統企業級專家
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir 與 OTP 容錯系統專家
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP 與 rebar3 工程專家
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo 與 React Native 行動開發專家
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - 現代非同步 Python API 框架專家
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ 跨平台行動專家
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go 並發專家
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - 企業級 Java 專家
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript 開發專家
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - 現代 JVM 語言專家
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP 框架專家
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony 應用與 Doctrine 專家
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ 全端專家
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Node.js 後端專家
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP Web 開發專家
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 與完整 .NET Framework 自動化專家
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - 跨平台 PowerShell 7+ 自動化與現代 .NET 專家
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python 生態大師
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Rails 8.1 快速開發專家
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - React 18+ 現代模式專家
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - 系統程式設計專家
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Spring Boot 3+ 微服務專家
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - 資料庫查詢專家
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - iOS 與 macOS 專家
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - TypeScript 專家
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Vue 3 Composition API 專家


### [03. Infrastructure](categories/03-infrastructure/)

DevOps、雲端與部署專家。

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Azure 基礎設施與 Az PowerShell 自動化專家
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - AWS/GCP/Azure 專家
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - 資料庫管理專家
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - 部署自動化專家
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - CI/CD 與自動化專家
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - DevOps 事件管理
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Docker 容器化與最佳化專家
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - 系統事件回應專家
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - 容器編排大師
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - 網路基礎設施專家
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - 平台架構專家
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - 基礎設施安全專家
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - 網站可靠性工程專家
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - 基礎設施即程式碼專家
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Terragrunt 編排與 DRY IaC 專家
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Active Directory、DNS、DHCP 與 GPO 自動化專家

<details>
<summary><b>04. Quality & Security</b> — 測試、安全與程式碼品質專家（20 個代理）</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - A11y 合規專家
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Active Directory 安全與 GPO 審計專家
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - 針對具體產品的 UI 完成度把關評審
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - AI 寫作模式審計與重寫專家
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - 架構評審專家
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - 基於瀏覽器的重現與客戶端除錯
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - 系統韌性測試專家
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - 程式碼品質守護者
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - 法規合規專家
- [**debugger**](categories/04-quality-security/debugger.toml) - 進階除錯專家
- [**error-detective**](categories/04-quality-security/error-detective.toml) - 錯誤分析與解決專家
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - GDPR 與 CCPA 隱私合規專家
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - 道德駭客專家
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - 效能最佳化專家
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - PowerShell 安全加固與合規專家
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - 測試自動化專家
- [**reviewer**](categories/04-quality-security/reviewer.toml) - 針對正確性、安全性與回歸的 PR 式評審
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - 安全漏洞專家
- [**test-automator**](categories/04-quality-security/test-automator.toml) - 測試自動化框架專家
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - 詳盡 UI/UX 功能測試專家

</details>

<details>
<summary><b>05. Data & AI</b> — 資料工程、機器學習與 AI 專家（14 個代理）</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - AI 系統設計與部署專家
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Azure Databricks 平台與湖倉架構師
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - 資料洞察與視覺化專家
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - 資料管線架構師
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - 分析與洞察專家
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - 資料庫效能專家
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - 大型語言模型架構師
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - 機器學習系統專家
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - 機器學習專家
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - MLOps 與模型部署專家
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - 自然語言處理專家
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - PostgreSQL 資料庫專家
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - 提示詞最佳化專家
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - 強化學習與決策系統專家

</details>

<details>
<summary><b>06. Developer Experience</b> — 工具鏈與開發者效率專家（14 個代理）</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - 建置系統專家
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - 命令列工具建立者
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - 套件與依賴專家
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - 技術文件專家
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - 開發者體驗最佳化專家
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Git 工作流與分支專家
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - 遺留程式碼現代化專家
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Model Context Protocol 專家
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - PowerShell 模組與設定檔架構專家
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - 面向 WinForms、WPF、Metro 框架與 TUI 的 PowerShell UI/UX 專家
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - 零幻覺、維護者可直接使用的 README 生成器
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - 程式碼重構專家
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Slack 平台與 @slack/bolt 專家
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - 開發者工具鏈專家

</details>

<details>
<summary><b>07. Specialized Domains</b> — 特定領域技術專家（14 個代理）</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - API 文件專家
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Web3 與加密專家
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - 嵌入式與即時系統專家
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - 金融科技專家
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - 遊戲開發專家
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - 醫療行政、收入週期與合規專家
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - 面向醫療 SaaS 廠商的 HIPAA 合規專家
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - IoT 系統開發者
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Microsoft 365、Exchange Online、Teams 與 SharePoint 管理專家
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - 行動應用專家
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - 支付系統專家
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - 量化分析專家
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - 風險評估與管理專家
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - 搜尋引擎最佳化專家

</details>

<details>
<summary><b>08. Business & Product</b> — 產品管理與業務分析（17 個代理）</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - 產品假設風險與驗證專家
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - 敏捷待辦梳理專家
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - 需求專家
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - 內容行銷專家
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - AI 內容品質與人性化專家
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - 客戶成功專家
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - 成長閉環與 PLG 機制專家
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - 法律與合規專家
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - 軟體授權與合規系統專家
- [**product-manager**](categories/08-business-product/product-manager.toml) - 產品策略專家
- [**project-manager**](categories/08-business-product/project-manager.toml) - 專案管理專家
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - 履歷、CV 與 LinkedIn 檔案最佳化專家
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - 技術銷售專家
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - 敏捷方法專家
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - 技術文件專家
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - 使用者研究專家
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - WordPress 開發與最佳化專家

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — 代理協調與元程式設計（12 個代理）</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - 透過 GitHub 瀏覽並安裝本倉庫中的代理
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - 多代理協調者
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - 帶審批閘門的倉庫級重構治理
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - 上下文最佳化專家
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - 錯誤處理與恢復專家
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - IT 運維工作流編排專家
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - 知識聚合專家
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - 進階多代理編排
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - 代理效能最佳化
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - 編排一組 AI 子代理來完成重複的 SDLC 工作流
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - 任務分配專家
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - 複雜工作流自動化

</details>

<details>
<summary><b>10. Research & Analysis</b> — 研究、搜尋與分析專家（12 個代理）</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - A/B 測試解讀與發布/不發布決策
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - 留存、隊列行為與激活指標分析
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - 競爭情報專家
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - 資料發現與分析專家
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - 基於文件的 API 與框架核驗
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - 挑戰假設、以第一性原理解決問題
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - 市場分析與消費者洞察
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - 嚴苛的想法壓力測試與可行/不可行策略師
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - 綜合研究專家
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - 基於已發表科學研究的證據導向研究
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - 進階資訊檢索專家
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - 新興趨勢與預測專家

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - 治理、護欄與可信 AI 專家（4 個代理）</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - AI 治理控制與部署就緒評審
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - 模型失效模式優先級排序與緩解專家
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - 提示詞、工具與工作流護欄設計者
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - 公平性、濫用、透明度與監督評審

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - 內部開發者平台與黃金路徑專家（4 個代理）</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Backstage 目錄、模板與入口網站專家
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - 強約束的自助服務工作流設計者
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - 內部開發者平台架構專家
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - 平台路線圖、採用與成功指標專家

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - 生產環境 AI 品質與執行時可觀測性專家（4 個代理）</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - AI 原生鏈路追蹤、指標與日誌專家
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - 提示詞、工具與工作流評估專家
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - 事實性與上下文崩潰根因調查者
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - 針對 AI 行為變化的回歸套件設計者

</details>

## 理解子代理

子代理是專業的 AI 助手，透過提供特定任務的專業能力來增強 Codex。它們如同專職幫手，在 Codex 遇到特定類型的工作時即可呼叫。

### 子代理有何特別之處？

**獨立的上下文視窗**
每個子代理都在自己隔離的上下文空間中運作，避免不同任務之間相互污染，並讓主對話執行緒保持清晰。

**領域專屬智慧**
子代理配備針對其專業領域精心編寫的指令，因此在特定任務上表現更優。

**跨專案共享**
建立子代理後，你可以在多個專案中復用，並分發給團隊成員，從而保持一致開發實踐。

**明確委派**
Codex 不會自動產生子代理。請使用明確委派提示詞，明確指定要產生哪些代理、如何拆分工作，以及期望的結果型態。

### 核心優勢

- **記憶體效率**：隔離的上下文防止主對話被任務細節塞滿
- **更高準確率**：專門的提示詞與設定在特定領域帶來更好的結果
- **工作流一致性**：團隊級共享子代理確保常見任務採用統一方法
- **Codex 原生**：使用與官方 Codex 子代理文件一致的 `.toml` 代理檔案

### 範例工作流

**PR 評審工作流：**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Bug 調查工作流：**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**倉庫探索與規劃工作流：**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## AI 設計與建構生態工具


<br/>

你用 AI 交付產品，但每次發布都因為沒人宣傳而悄然沉寂。[EveryFeed](https://everyfeed.ai/) 將你的 AI 助手接入一個社群工作區，可在 35+ 個頻道自動起草、排程並發布——無需代理公司，也無需僱用行銷人員。

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

## 貢獻

我們歡迎貢獻！相關規範請見 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 透過 PR 提交新的子代理
- 改進既有定義
- 回報問題與 Bug


## 授權

MIT License - 見 [LICENSE](LICENSE)

本倉庫是由維護者與社群共同貢獻、精選整理的子代理定義合集。所有子代理均按「原樣」提供，不附帶任何擔保。我們不對任何子代理的安全性或正確性進行審計或擔保。使用前請自行審查，維護者不對因使用而產生的任何問題承担责任。

如果你發現所列子代理存在問題，或希望移除你的貢獻，請在本倉庫提交 issue，我們會盡快處理。
