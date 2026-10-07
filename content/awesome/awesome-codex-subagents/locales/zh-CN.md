<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>精选收录 13 个分类、175+ 个 Codex 子代理。</strong>
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

# 精选 Codex Subagents

本仓库是 [Codex Subagents](https://developers.openai.com/codex/subagents)（专为特定开发任务设计的专业 AI 助手）的权威收录。内容专为 Codex 编写，并与官方文档保持一致。

## 安装

请严格按官方文档使用 Codex 自定义代理目录：

- `~/.codex/agents/`：全局代理（在所有项目中可用）
- `.codex/agents/`：项目级代理（在该仓库中优先级更高）

1. 克隆本仓库。
2. 将你需要的 `.toml` 代理文件复制到上述某个目录中。
3. 如有需要，重启或刷新你的 Codex 会话。
4. 在提示词中显式委派任务（Codex 不会自动生成自定义子代理）。

示例：
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

如果你在 Codex 中使用代理配置，请将其放在 `.codex/config.toml` 的 `[agents]` 下，具体参见官方文档。


## 赞助商

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 是受到 70,000+ 开发者信赖的网页数据基础设施。其 Crawling API、MCP 服务器与各类集成，让 AI 代理能够实时访问任意网页——支持 JavaScript 渲染、代理轮换与反爬虫防护。 |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) 是面向 AI 应用的网页搜索 API。提供 Markdown 与 JSON 格式，便于各种集成。 |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 你可以在这里展示你的产品，触达使用 Claude Code、Codex、Gemini 等 AI 编程代理的开发者。</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### 子代理存储位置

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

注意：当发生命名冲突时，项目级子代理会覆盖全局子代理。


## 子代理结构

每个子代理都使用 Codex 原生的 `.toml` 格式：

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

### 智能模型路由

每个子代理都包含一个 `model` 字段，可自动将其路由到合适的模型——在质量与成本之间取得平衡：

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | 深度推理——架构评审、安全审计、金融逻辑 | `security-auditor`、`architect-reviewer`、`fintech-engineer` |
| `gpt-5.6-terra` | 实现、诊断、评估以及多步骤专业分析 | `docker-expert`、`test-automator`、`scientific-literature-researcher` |
| `gpt-5.6-luna` | 有界搜索、抽取、路由、起草与轻量综合 | `search-specialist`、`docs-researcher`、`agent-installer` |

### 沙箱模式理念

每个子代理的 `sandbox_mode` 字段控制文件系统访问权限：
- **只读代理**（评审者、审计者）：`sandbox_mode = "read-only"`——只分析、不修改
- **工作区写入代理**（开发者、工程师）：`sandbox_mode = "workspace-write"`——可创建与修改文件





## 分类

### [01. Core Development](categories/01-core-development/)

日常编码任务所需的核心开发子代理。

- [**api-designer**](categories/01-core-development/api-designer.toml) - REST 与 GraphQL API 架构师
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - 可扩展 API 的服务端专家
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - 代码路径梳理与所有权边界分析
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - 将 DESIGN.md 规范转换为可实现的 UI 指令
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - 桌面应用专家
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - 精通 React、Vue、Angular 的 UI/UX 专家
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - 端到端功能开发
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL schema 与联邦架构专家
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - 分布式系统设计者
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - 跨平台移动端专家
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - 视觉设计与交互专家
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - 针对已复现 UI 问题的最小安全补丁
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - 实时通信专家

### [02. Language Specialists](categories/02-language-specialists/)

具备深厚框架知识的特定语言专家。
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ 企业级模式专家
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ 性能专家
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET 生态专家
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ Web 开发专家
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 跨平台专家
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework 传统企业级专家
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir 与 OTP 容错系统专家
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP 与 rebar3 工程专家
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo 与 React Native 移动开发专家
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - 现代异步 Python API 框架专家
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ 跨平台移动专家
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go 并发专家
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - 企业级 Java 专家
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript 开发专家
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - 现代 JVM 语言专家
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP 框架专家
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony 应用与 Doctrine 专家
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ 全栈专家
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Node.js 后端专家
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP Web 开发专家
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 与完整 .NET Framework 自动化专家
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - 跨平台 PowerShell 7+ 自动化与现代 .NET 专家
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python 生态大师
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Rails 8.1 快速开发专家
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - React 18+ 现代模式专家
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - 系统编程专家
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Spring Boot 3+ 微服务专家
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - 数据库查询专家
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - iOS 与 macOS 专家
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - TypeScript 专家
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Vue 3 Composition API 专家


### [03. Infrastructure](categories/03-infrastructure/)

DevOps、云与部署专家。

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Azure 基础设施与 Az PowerShell 自动化专家
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - AWS/GCP/Azure 专家
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - 数据库管理专家
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - 部署自动化专家
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - CI/CD 与自动化专家
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - DevOps 事件管理
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Docker 容器化与优化专家
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - 系统事件响应专家
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - 容器编排大师
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - 网络基础设施专家
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - 平台架构专家
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - 基础设施安全专家
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - 站点可靠性工程专家
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - 基础设施即代码专家
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Terragrunt 编排与 DRY IaC 专家
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Active Directory、DNS、DHCP 与 GPO 自动化专家

<details>
<summary><b>04. Quality & Security</b> — 测试、安全与代码质量专家（20 个代理）</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - A11y 合规专家
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Active Directory 安全与 GPO 审计专家
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - 针对具体产品的 UI 完成度把关评审
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - AI 写作模式审计与重写专家
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - 架构评审专家
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - 基于浏览器的复现与客户端调试
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - 系统韧性测试专家
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - 代码质量守护者
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - 法规合规专家
- [**debugger**](categories/04-quality-security/debugger.toml) - 高级调试专家
- [**error-detective**](categories/04-quality-security/error-detective.toml) - 错误分析与解决专家
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - GDPR 与 CCPA 隐私合规专家
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - 道德黑客专家
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - 性能优化专家
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - PowerShell 安全加固与合规专家
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - 测试自动化专家
- [**reviewer**](categories/04-quality-security/reviewer.toml) - 针对正确性、安全性与回归的 PR 式评审
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - 安全漏洞专家
- [**test-automator**](categories/04-quality-security/test-automator.toml) - 测试自动化框架专家
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - 详尽 UI/UX 功能测试专家

</details>

<details>
<summary><b>05. Data & AI</b> — 数据工程、机器学习与 AI 专家（14 个代理）</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - AI 系统设计与部署专家
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Azure Databricks 平台与湖仓架构师
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - 数据洞察与可视化专家
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - 数据管道架构师
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - 分析与洞察专家
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - 数据库性能专家
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - 大语言模型架构师
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - 机器学习系统专家
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - 机器学习专家
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - MLOps 与模型部署专家
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - 自然语言处理专家
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - PostgreSQL 数据库专家
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - 提示词优化专家
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - 强化学习与决策系统专家

</details>

<details>
<summary><b>06. Developer Experience</b> — 工具链与开发者效率专家（14 个代理）</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - 构建系统专家
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - 命令行工具创建者
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - 包与依赖专家
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - 技术文档专家
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - 开发者体验优化专家
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Git 工作流与分支专家
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - 遗留代码现代化专家
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Model Context Protocol 专家
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - PowerShell 模块与配置档案架构专家
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - 面向 WinForms、WPF、Metro 框架与 TUI 的 PowerShell UI/UX 专家
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - 零幻觉、维护者可直接使用的 README 生成器
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - 代码重构专家
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Slack 平台与 @slack/bolt 专家
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - 开发者工具链专家

</details>

<details>
<summary><b>07. Specialized Domains</b> — 特定领域技术专家（14 个代理）</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - API 文档专家
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Web3 与加密专家
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - 嵌入式与实时系统专家
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - 金融科技专家
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - 游戏开发专家
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - 医疗行政、收入周期与合规专家
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - 面向医疗 SaaS 厂商的 HIPAA 合规专家
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - IoT 系统开发者
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Microsoft 365、Exchange Online、Teams 与 SharePoint 管理专家
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - 移动应用专家
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - 支付系统专家
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - 量化分析专家
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - 风险评估与管理专家
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - 搜索引擎优化专家

</details>

<details>
<summary><b>08. Business & Product</b> — 产品管理与业务分析（17 个代理）</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - 产品假设风险与验证专家
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - 敏捷待办梳理专家
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - 需求专家
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - 内容营销专家
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - AI 内容质量与人类化专家
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - 客户成功专家
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - 增长闭环与 PLG 机制专家
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - 法律与合规专家
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - 软件许可与合规系统专家
- [**product-manager**](categories/08-business-product/product-manager.toml) - 产品策略专家
- [**project-manager**](categories/08-business-product/project-manager.toml) - 项目管理专家
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - 简历、CV 与 LinkedIn 档案优化专家
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - 技术销售专家
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - 敏捷方法专家
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - 技术文档专家
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - 用户研究专家
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - WordPress 开发与优化专家

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — 代理协调与元编程（12 个代理）</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - 通过 GitHub 浏览并安装本仓库中的代理
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - 多代理协调者
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - 带审批闸门的仓库级重构治理
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - 上下文优化专家
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - 错误处理与恢复专家
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - IT 运维工作流编排专家
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - 知识聚合专家
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - 高级多代理编排
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - 代理性能优化
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - 编排一组 AI 子代理来完成重复的 SDLC 工作流
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - 任务分配专家
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - 复杂工作流自动化

</details>

<details>
<summary><b>10. Research & Analysis</b> — 研究、搜索与分析专家（12 个代理）</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - A/B 测试解读与发布/不发布决策
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - 留存、队列行为与激活指标分析
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - 竞争情报专家
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - 数据发现与分析专家
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - 基于文档的 API 与框架核验
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - 挑战假设、以第一性原理解决问题
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - 市场分析与消费者洞察
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - 严苛的想法压力测试与可行/不可行策略师
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - 综合研究专家
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - 基于已发表科学研究的证据导向研究
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - 高级信息检索专家
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - 新兴趋势与预测专家

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - 治理、护栏与可信 AI 专家（4 个代理）</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - AI 治理控制与部署就绪评审
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - 模型失效模式优先级排序与缓解专家
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - 提示词、工具与工作流护栏设计者
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - 公平性、滥用、透明度与监督评审

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - 内部开发者平台与黄金路径专家（4 个代理）</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Backstage 目录、模板与门户专家
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - 强约束的自助服务工作流设计者
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - 内部开发者平台架构专家
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - 平台路线图、采用与成功指标专家

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - 生产环境 AI 质量与运行时可观测性专家（4 个代理）</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - AI 原生链路追踪、指标与日志专家
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - 提示词、工具与工作流评估专家
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - 事实性与上下文崩溃根因调查者
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - 针对 AI 行为变化的回归套件设计者

</details>

## 理解子代理

子代理是专业的 AI 助手，通过提供特定任务的专业能力来增强 Codex。它们如同专职帮手，在 Codex 遇到特定类型的工作时即可调用。

### 子代理有何特别之处？

**独立的上下文窗口**
每个子代理都在自己隔离的上下文空间中运行，避免不同任务之间相互污染，并让主对话线程保持清晰。

**领域专属智能**
子代理配备针对其专业领域精心编写的指令，因此在特定任务上表现更优。

**跨项目共享**
创建子代理后，你可以在多个项目中复用，并分发给团队成员，从而保持一致的开发实践。

**显式委派**
Codex 不会自动生成子代理。请使用显式委派提示词，明确指定要生成哪些代理、如何拆分工作，以及期望的结果形态。

### 核心优势

- **内存效率**：隔离的上下文防止主对话被任务细节塞满
- **更高准确率**：专门的提示词与配置在特定领域带来更好的结果
- **工作流一致性**：团队级共享子代理确保常见任务采用统一方法
- **Codex 原生**：使用与官方 Codex 子代理文档一致的 `.toml` 代理文件

### 示例工作流

**PR 评审工作流：**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Bug 调查工作流：**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**仓库探索与规划工作流：**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## AI 设计与构建生态工具


<br/>

你用 AI 交付产品，但每次发布都因为没人宣传而悄然沉寂。[EveryFeed](https://everyfeed.ai/) 将你的 AI 助手接入一个社交工作区，可在 35+ 个渠道自动起草、排期并发布——无需代理公司，也无需雇佣市场人员。

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

## 贡献

我们欢迎贡献！相关规范请见 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 通过 PR 提交新的子代理
- 改进已有定义
- 反馈问题与 Bug


## 许可证

MIT License - 见 [LICENSE](LICENSE)

本仓库是由维护者与社区共同贡献、精选整理的子代理定义合集。所有子代理均按"原样"提供，不附带任何担保。我们不对任何子代理的安全性或正确性进行审计或担保。使用前请自行审查，维护者不对因使用而产生的任何问题承担责任。

如果你发现所列子代理存在问题，或希望移除你的贡献，请在本仓库提交 issue，我们会尽快处理。
