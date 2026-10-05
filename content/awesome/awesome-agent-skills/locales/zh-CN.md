
<a href="https://github.com/VoltAgent/voltagent">
     <img width="1500" alt="claude-skills" src="https://github.com/user-attachments/assets/a890e563-e999-4b1f-8ce1-20399b0574f8" />
</a>


<br/>
<br/>

<div align="center">
    <strong>来自领先开发团队和社区的官方 Agent Skills 合集。
    <br />
    精心挑选，绝非 AI 垃圾生成。
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

# 精选智能体技能 <a id="awesome-agent-skills"></a>

与许多批量生成的技能仓库不同，本合集专注于由真实工程团队创建并实际使用的 Agent Skills，而非大量 AI 生成的内容。


兼容 Claude Code、Codex、Antigravity、Gemini CLI、Cursor、GitHub Copilot、OpenCode、Windsurf 等工具。路径和文档请参阅下表。

这是贡献人数最多的 Agent Skills 仓库，由社区共同构建和维护。


## 💛 赞助商 <a id="-sponsors"></a>

|  |  |
| :-: | :-- |
| <a href="https://www.testmuai.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/testmui/testmuai-white.png"><img alt="TestMu AI" src="https://cdn.voltagent.dev/awesome-repo/testmui/testmuai-black.png" width="425"></picture></a> | [TestMu AI (formerly LambdaTest)](https://www.testmuai.com) 是一个原生支持 AI 的测试云平台，专为现代工程团队打造。涵盖自主测试创建和快速执行，以及对 AI 智能体、聊天机器人和语音助手进行测试。 |
| <a href="https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 是获得 70,000 多名开发者信赖的 Web 数据基础设施。其 Crawling API、MCP 服务器和集成可让 AI 智能体实时访问任意网页，并提供 JavaScript 渲染、代理轮换和反机器人防护。 |
| <a href="https://serpapi.com/awesome-agent-skills"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-agent-skills) 是面向 AI 应用的 Web Search API，提供 Markdown 和 JSON 格式，可用于任意集成。 |

<br />

<a href="https://sponsors.voltagent.dev/#awesome-agent-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>


## 目录 <a id="table-of-contents"></a>

### 官方技能提供方 <a id="official-skills-by"></a>

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
| [Red Hat](#skills-by-redhat) | [Community](#community-skills) | [Redis](#skills-by-redis) | [NVIDIA](#skills-by-nvidia) |
| [Google Cloud](#skills-by-google-cloud) | [Quality Standards](#skill-quality-standards) |  |  |



<br/>

你用 AI 开发产品，但每次发布都悄无声息地失败，因为没人宣传。 [EveryFeed](https://everyfeed.ai/) 可将 AI 助手接入社交工作区，帮助起草、安排并发布到 35 多个渠道——无需代理机构或专职营销人员。

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

- **[anthropics/docx](https://officialskills.sh/anthropics/skills/docx)** - 创建、编辑和分析 Word 文档
- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** - 协作编辑与共同撰写文档
- **[anthropics/pptx](https://officialskills.sh/anthropics/skills/pptx)** - 创建、编辑和分析 PowerPoint 演示文稿
- **[anthropics/xlsx](https://officialskills.sh/anthropics/skills/xlsx)** - 创建、编辑和分析 Excel 电子表格
- **[anthropics/pdf](https://officialskills.sh/anthropics/skills/pdf)** - 提取文本、创建 PDF 并处理表单
- **[anthropics/algorithmic-art](https://officialskills.sh/anthropics/skills/algorithmic-art)** - 使用带种子的随机性创作生成式艺术作品（基于 p5.js）
- **[anthropics/canvas-design](https://officialskills.sh/anthropics/skills/canvas-design)** - 以 PNG 和 PDF 格式设计视觉艺术作品
- **[anthropics/frontend-design](https://officialskills.sh/anthropics/skills/frontend-design)** - 前端设计与 UI/UX 开发工具
- **[anthropics/slack-gif-creator](https://officialskills.sh/anthropics/skills/slack-gif-creator)** - 创建符合 Slack 尺寸限制的动画 GIF
- **[anthropics/theme-factory](https://officialskills.sh/anthropics/skills/theme-factory)** - 使用专业主题为成品设定样式，或生成自定义主题
- **[anthropics/web-artifacts-builder](https://officialskills.sh/anthropics/skills/web-artifacts-builder)** - 使用 React 和 Tailwind 构建复杂的 claude.ai HTML 成品
- **[anthropics/mcp-builder](https://officialskills.sh/anthropics/skills/mcp-builder)** - 创建 MCP 服务器以集成外部 API 和服务
- **[anthropics/webapp-testing](https://officialskills.sh/anthropics/skills/webapp-testing)** - 使用 Playwright 测试本地 Web 应用
- **[anthropics/brand-guidelines](https://officialskills.sh/anthropics/skills/brand-guidelines)** - 将 Anthropic 品牌色彩和字体应用于成品
- **[anthropics/internal-comms](https://officialskills.sh/anthropics/skills/internal-comms)** - 撰写状态报告、新闻简报和常见问题解答
- **[anthropics/skill-creator](https://officialskills.sh/anthropics/skills/skill-creator)** - 指导创建可扩展 Claude 功能的技能
- **[anthropics/template](https://officialskills.sh/anthropics/skills/template)** - 用于创建新技能的基础模板

</details>

<details>
<summary><h3 id="skills-by-voltagent" style="display:inline">VoltAgent 技能</h3></summary>

为 VoltAgent TypeScript 框架构建 AI 智能体的官方技能。
- **[voltagent/create-voltagent](https://officialskills.sh/voltagent/skills/create-voltagent)** - 包含 CLI 和手动步骤的项目设置指南
- **[voltagent/voltagent-best-practices](https://officialskills.sh/voltagent/skills/voltagent-best-practices)** - 智能体、工作流、记忆和服务器的架构与使用模式
- **[voltagent/voltagent-core-reference](https://officialskills.sh/voltagent/skills/voltagent-core-reference)** - VoltAgent 类选项和生命周期方法的参考资料
- **[voltagent/voltagent-docs-bundle](https://officialskills.sh/voltagent/skills/voltagent-docs-bundle)** - 查阅 @voltagent/core 中嵌入的、与版本匹配的文档

</details>

<details>
<summary><h3 id="skills-by-serpapi" style="display:inline">SerpApi 技能</h3></summary>

来自 [SerpApi](https://serpapi.com/awesome-agent-skills) 团队的官方技能——SerpApi 是面向 AI 应用的 Web Search API。这些技能通过 130 多种引擎为智能体提供结构化、机器可读的搜索数据，涵盖 Google 网页和学术搜索、地图、航班、酒店和购物。

- **[serpapi/serpapi-web-search](https://officialskills.sh/serpapi/skills/serpapi-web-search)** - 通过 130 多种引擎获取结构化搜索数据：选择合适的引擎、提取所需字段并从错误中恢复
- **[serpapi/agent-usability-test](https://officialskills.sh/serpapi/skills/agent-usability-test)** - 测试智能体能否发现并使用你的工具——测试对象是界面，而不是智能体

SerpApi 的其他工具（并非技能，但与其配套使用）：

- **[serpapi/serpapi-search-tools-python](https://github.com/serpapi/serpapi-search-tools-python)** - 为 Python 智能体提供实时搜索工具，并原生支持常用智能体 SDK
- **[serpapi/serpapi-cli](https://github.com/serpapi/serpapi-cli)** - 命令行 SerpApi 客户端，涵盖全部 130 多种引擎

</details>

<details>
<summary><h3 id="skills-by-crawlbase" style="display:inline">Crawlbase 技能</h3></summary>

[Crawlbase](https://crawlbase.com/?utm_source=awesome-agent-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) 团队提供的官方技能，通过 Crawlbase MCP 服务器为 AI 智能体提供实时网络访问：可将任意 URL 抓取为原始 HTML、整洁的 Markdown 或屏幕截图，并在 Crawlbase Cloud Storage 中管理结果。

- **[crawlbase/crawl-html](https://officialskills.sh/crawlbase/skills/crawl-html)** - 抓取 URL 并返回原始 HTML，支持 JS 渲染、设备模拟和地理定位
- **[crawlbase/crawl-markdown](https://officialskills.sh/crawlbase/skills/crawl-markdown)** - 从任意 URL 提取干净、适用于 LLM 的 Markdown，并去除广告和样板内容
- **[crawlbase/crawl-screenshot](https://officialskills.sh/crawlbase/skills/crawl-screenshot)** - 为桌面端或移动端网页截取整页或视口截图
- **[crawlbase/storage-get](https://officialskills.sh/crawlbase/skills/storage-get)** - 以 JSON、HTML 或 Markdown 格式从 Crawlbase Cloud Storage 获取已存储的页面
- **[crawlbase/storage-list](https://officialskills.sh/crawlbase/skills/storage-list)** - 使用基于滚动的分页列出已存储的 RID，每次最多 1000 个
- **[crawlbase/storage-bulk-get](https://officialskills.sh/crawlbase/skills/storage-bulk-get)** - 一次调用最多获取 100 个已存储页面，并可选择自动删除
- **[crawlbase/storage-count](https://officialskills.sh/crawlbase/skills/storage-count)** - 统计某个令牌在 Crawlbase Cloud Storage 中存储的文档数量
- **[crawlbase/storage-delete](https://officialskills.sh/crawlbase/skills/storage-delete)** - 通过 RID 从 Crawlbase Cloud Storage 删除单个已存储页面
- **[crawlbase/storage-bulk-delete](https://officialskills.sh/crawlbase/skills/storage-bulk-delete)** - 一次调用最多从 Crawlbase Cloud Storage 删除 100 个已存储页面

Crawlbase 的其他工具（并非技能，但与其配套使用）：

- **[crawlbase/crawlbase-mcp](https://github.com/crawlbase/crawlbase-mcp)** - 这些技能背后的 MCP 服务器（npm 包 `@crawlbase/mcp`），支持 JS 渲染、代理轮换和反机器人防护
- **[crawlbase/langchain-crawlbase](https://github.com/crawlbase/langchain-crawlbase)** - 由 Crawling API 支持的 LangChain 文档加载器、工具和检索器
- **[crawlbase/n8n-nodes-crawlbase](https://github.com/crawlbase/n8n-nodes-crawlbase)** - 适用于 n8n 的原生 Crawlbase 节点，提供凭据和 Crawling API 选项

</details>

<details>
<summary><h3 id="skills-by-testmu-ai" style="display:inline">TestMu AI 技能</h3></summary>

TestMu AI（原 LambdaTest）团队维护的生产级 Agent Skills，覆盖所有主流测试自动化框架。它们帮助 AI 编码助手在 Web、移动端、API、BDD 和单元测试技术栈中生成专家级测试自动化代码。

- **[testmu-ai/api-skill](https://github.com/LambdaTest/agent-skills/tree/main/api-skill)** - 一套 API 技能，用于设计、模拟、编写文档、保护并为 REST/GraphQL/gRPC API 生成测试
- **[testmu-ai/appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill)** - 使用 Java、Python 或 JS 为 Android 和 iOS 生成 Appium 移动自动化测试
- **[testmu-ai/behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill)** - 使用 Gherkin 和 Mink 为 PHP 生成 Behat BDD 测试
- **[testmu-ai/behave-skill](https://github.com/LambdaTest/agent-skills/tree/main/behave-skill)** - 使用 Gherkin 和步骤实现为 Python 生成 Behave BDD 测试
- **[testmu-ai/capybara-skill](https://github.com/LambdaTest/agent-skills/tree/main/capybara-skill)** - 在 Ruby 中生成集成 RSpec 的 Capybara 端到端测试
- **[testmu-ai/cicd-pipeline-skill](https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill)** - 为 GitHub Actions、Jenkins、GitLab CI 和 Azure DevOps 生成测试 CI/CD 流水线
- **[testmu-ai/codeception-skill](https://github.com/LambdaTest/agent-skills/tree/main/codeception-skill)** - 为 PHP 生成 Codeception 验收、功能和单元测试
- **[testmu-ai/cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill)** - 使用 Gherkin 和步骤定义，以 Java、JS 或 Ruby 生成 Cucumber BDD 测试
- **[testmu-ai/cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill)** - 使用 JavaScript 或 TypeScript 生成 Cypress 端到端和组件测试
- **[testmu-ai/detox-skill](https://github.com/LambdaTest/agent-skills/tree/main/detox-skill)** - 使用 JavaScript 为 React Native 应用生成 Detox 灰盒端到端测试
- **[testmu-ai/espresso-skill](https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill)** - 使用 Kotlin 或 Java 为 Android 应用生成 Espresso UI 测试
- **[testmu-ai/flutter-testing-skill](https://github.com/LambdaTest/agent-skills/tree/main/flutter-testing-skill)** - 使用 Dart 生成 Flutter 组件、集成和黄金测试
- **[testmu-ai/gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill)** - 使用 Markdown 生成 Gauge 规范，并以 Java、Python、JS 或 Ruby 编写步骤
- **[testmu-ai/geb-skill](https://github.com/LambdaTest/agent-skills/tree/main/geb-skill)** - 使用 Spock 和页面对象，以 Groovy 生成 Geb 浏览器自动化测试
- **[testmu-ai/hyperexecute-skill](https://github.com/LambdaTest/agent-skills/tree/main/hyperexecute-skill)** - 端到端操作 TestMu AI HyperExecute：包括 YAML、CLI 运行、调试和 CI 接入
- **[testmu-ai/jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill)** - 使用间谍对象和异步支持，以 JavaScript 生成 Jasmine BDD 测试
- **[testmu-ai/jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill)** - 使用模拟和快照功能，以 JS/TS 生成 Jest 单元和集成测试
- **[testmu-ai/junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill)** - 使用 Mockito 以 Java 生成 JUnit 5 单元和集成测试
- **[testmu-ai/kanecli-skill](https://github.com/LambdaTest/agent-skills/tree/main/kanecli-skill)** - 通过 kane-cli 根据自然语言目标生成并运行浏览器测试
- **[testmu-ai/karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill)** - 为基于浏览器的 JS 测试生成 Karma 测试运行器配置
- **[testmu-ai/laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill)** - 使用 PHP 生成基于 Chrome 的 Laravel Dusk 浏览器测试
- **[testmu-ai/lettuce-skill](https://github.com/LambdaTest/agent-skills/tree/main/lettuce-skill)** - 为 Python 生成 Lettuce BDD 测试（旧版；建议使用 Behave）
- **[testmu-ai/mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill)** - 使用 Chai 和 Sinon，以 JavaScript 生成 Mocha 测试
- **[testmu-ai/mstest-skill](https://github.com/LambdaTest/agent-skills/tree/main/mstest-skill)** - 为 .NET 使用 C# 生成 MSTest 测试
- **[testmu-ai/nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill)** - 为 Node.js 生成基于 Selenium 的 Nemo.js 测试
- **[testmu-ai/nightwatchjs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nightwatchjs-skill)** - 使用 Selenium WebDriver，以 JavaScript 生成 NightwatchJS 端到端测试
- **[testmu-ai/nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill)** - 使用约束模型和 Moq，以 C# 生成 NUnit 3 测试
- **[testmu-ai/phpunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/phpunit-skill)** - 使用数据提供程序和模拟，为 PHP 生成 PHPUnit 测试
- **[testmu-ai/playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill)** - 使用 TS、JS、Python、Java 或 C# 生成 Playwright 端到端测试
- **[testmu-ai/protractor-skill](https://github.com/LambdaTest/agent-skills/tree/main/protractor-skill)** - 使用 JS/TS 为 Angular 生成 Protractor 端到端测试（已弃用；建议使用 Playwright/Cypress）
- **[testmu-ai/puppeteer-skill](https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill)** - 生成用于浏览器自动化、网页抓取和 PDF 生成的 Puppeteer 脚本
- **[testmu-ai/pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill)** - 使用夹具、参数化和模拟，以 Python 生成 pytest 测试
- **[testmu-ai/reqnroll-skill](https://github.com/LambdaTest/agent-skills/tree/main/reqnroll-skill)** - 使用 C# 为 Web 和移动端生成 Reqnroll BDD 测试
- **[testmu-ai/robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill)** - 使用 Python 生成关键字驱动的 Robot Framework 测试
- **[testmu-ai/rspec-skill](https://github.com/LambdaTest/agent-skills/tree/main/rspec-skill)** - 使用匹配器、钩子和模拟，以 Ruby 生成 RSpec 测试
- **[testmu-ai/selenide-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenide-skill)** - 使用自动等待和流畅 API，以 Java 生成 Selenide UI 测试
- **[testmu-ai/selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill)** - 使用 Java、Python、JS、C#、Ruby 或 PHP 生成 Selenium WebDriver 测试
- **[testmu-ai/serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill)** - 使用 Screenplay 模式和报告功能，以 Java 生成 Serenity BDD 测试
- **[testmu-ai/smartui-skill](https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill)** - 生成用于截图比对的 SmartUI 视觉回归配置
- **[testmu-ai/specflow-skill](https://github.com/LambdaTest/agent-skills/tree/main/specflow-skill)** - 使用 Gherkin 和步骤绑定，为 C#/.NET 生成 SpecFlow BDD 测试
- **[testmu-ai/test-framework-migration-skill](https://github.com/LambdaTest/agent-skills/tree/main/test-framework-migration-skill)** - 在 Selenium、Playwright、Puppeteer 和 Cypress 之间迁移测试
- **[testmu-ai/testcafe-skill](https://github.com/LambdaTest/agent-skills/tree/main/testcafe-skill)** - 使用 JavaScript 或 TypeScript 生成 TestCafe 自动化测试
- **[testmu-ai/testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill)** - 使用数据提供程序和并行执行，以 Java 生成 TestNG 测试
- **[testmu-ai/testunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/testunit-skill)** - 在 Ruby 中生成 xUnit 风格的 Test::Unit 测试
- **[testmu-ai/unittest-skill](https://github.com/LambdaTest/agent-skills/tree/main/unittest-skill)** - 使用 TestCase 和 setUp/tearDown 生成 Python unittest 测试
- **[testmu-ai/vitest-skill](https://github.com/LambdaTest/agent-skills/tree/main/vitest-skill)** - 使用兼容 Jest 的 API 和 ESM，以 JS/TS 生成 Vitest 测试
- **[testmu-ai/webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill)** - 使用 JavaScript 或 TypeScript 生成 WebdriverIO (WDIO) 自动化测试
- **[testmu-ai/xcuitest-skill](https://github.com/LambdaTest/agent-skills/tree/main/xcuitest-skill)** - 使用 Swift 为 iOS/iPadOS 应用生成 XCUITest UI 测试
- **[testmu-ai/xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill)** - 使用 Fact/Theory 和 FluentAssertions，以 C# 生成 xUnit.net 测试

</details>

<details>
<summary><h3 id="skills-by-modem-dev" style="display:inline">Modem Dev 技能</h3></summary>

- **[modem-dev/skills](https://github.com/modem-dev/skills)** - 来自 [Modem](https://modem.dev/go/awesome-agent-skills) 的智能体技能，首先推出 write-discoverable-code

</details>

<details>
<summary><h3 id="skills-by-zero" style="display:inline">Zero 技能</h3></summary>


- **[zero/zero](https://github.com/officialzeroxyz/zero-plugins/blob/main/plugins/zero/skills/zero/SKILL.md)** - 为 Claude Code 智能体发现并调用外部付费工具，而不是停下来要求用户注册或获取 API 密钥
- **[zero/zero-gemini](https://github.com/officialzeroxyz/zero-plugins/tree/main/plugins/zero-gemini)** - 同一 Zero 工具发现与支付层，打包为 Gemini CLI 扩展

</details>

<details>
<summary><h3 id="skills-by-angular" style="display:inline">Angular 技能</h3></summary>

- **[angular/angular-developer](https://github.com/angular/skills)** - 为组件、服务和响应式编写 Angular 代码并提供架构指导
- **[angular/angular-new-app](https://github.com/angular/skills)** - 使用 CLI 和现代最佳实践创建新的 Angular 应用

</details>

<details>
<summary><h3 id="skills-by-composio-team" style="display:inline">Composio 团队技能</h3></summary>

- **[composiohq/composio](https://officialskills.sh/composiohq/skills/composio)** - 通过托管身份验证将 AI 智能体连接到 1000 多个外部应用

</details>

<details>
<summary><h3 id="skills-by-supabase-team" style="display:inline">Supabase 团队技能</h3></summary>

- **[supabase/postgres-best-practices](https://officialskills.sh/supabase/skills/postgres-best-practices)** - Supabase 的 PostgreSQL 最佳实践

</details>

<details>
<summary><h3 id="skills-by-google-gemini" style="display:inline">Google Gemini 技能</h3></summary>

- **[google-gemini/gemini-api-dev](https://officialskills.sh/google-gemini/skills/gemini-api-dev)** - 使用 Gemini API 开发 Gemini 应用的最佳实践
- **[google-gemini/vertex-ai-api-dev](https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev)** - 使用 Gen AI SDK 在 Google Cloud Vertex AI 上开发 Gemini 应用
- **[google-gemini/gemini-live-api-dev](https://officialskills.sh/google-gemini/skills/gemini-live-api-dev)** - 使用 Gemini Live API 构建实时双向流式应用
- **[google-gemini/gemini-interactions-api](https://officialskills.sh/google-gemini/skills/gemini-interactions-api)** - 使用 Gemini Interactions API 构建支持文本、聊天、流式传输和图像生成的应用

</details>

<details>
<summary><h3 id="skills-by-stripe-team" style="display:inline">Stripe 团队技能</h3></summary>

- **[stripe/stripe-best-practices](https://officialskills.sh/stripe/skills/stripe-best-practices)** - 构建 Stripe 集成的最佳实践
- **[stripe/upgrade-stripe](https://officialskills.sh/stripe/skills/upgrade-stripe)** - 升级 Stripe SDK 和 API 版本

</details>

<details>
<summary><h3 id="skills-by-courier" style="display:inline">Courier 技能</h3></summary>

- **[trycourier/courier-skills](https://github.com/trycourier/courier-skills)** - 通过电子邮件、短信、推送和聊天发送多渠道通知

</details>

<details>
<summary><h3 id="skills-by-callstack" style="display:inline">CallStack 技能</h3></summary>

- **[callstackincubator/react-native-best-practices](https://officialskills.sh/callstackincubator/skills/react-native-best-practices)** - Callstack 提供的 React Native 应用性能优化
- **[callstackincubator/github](https://officialskills.sh/callstackincubator/skills/github)** - GitHub 工作流模式：PR、代码审查和分支
- **[callstackincubator/upgrading-react-native](https://officialskills.sh/callstackincubator/skills/upgrading-react-native)** - React Native 升级工作流：模板、依赖项和常见陷阱

</details>

<details>
<summary><h3 id="skills-by-better-auth-team" style="display:inline">Better Auth 团队技能</h3></summary>

- **[better-auth/best-practices](https://officialskills.sh/better-auth/skills/best-practices)** - Better Auth 集成的最佳实践
- **[better-auth/explain-error](https://officialskills.sh/better-auth/skills/explain-error)** - 解释 Better Auth 错误消息
- **[better-auth/providers](https://officialskills.sh/better-auth/skills/providers)** - Better Auth 身份验证提供程序
- **[better-auth/create-auth](https://officialskills.sh/better-auth/skills/create-auth)** - 使用 Better Auth 创建身份验证设置
- **[better-auth/emailAndPassword](https://officialskills.sh/better-auth/skills/emailAndPassword)** - 使用 Better Auth 进行电子邮件和密码身份验证
- **[better-auth/organization](https://officialskills.sh/better-auth/skills/organization)** - Better Auth 组织管理
- **[better-auth/twoFactor](https://officialskills.sh/better-auth/skills/twoFactor)** - Better Auth 双重身份验证

</details>

<details>
<summary><h3 id="skills-by-tinybird-team" style="display:inline">Tinybird 团队技能</h3></summary>

- **[tinybirdco/tinybird-best-practices](https://officialskills.sh/tinybirdco/skills/tinybird-best-practices)** - Tinybird 项目指南：数据源、管道、端点和 SQL
- **[tinybirdco/tinybird-cli-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-cli-guidelines)** - Tinybird CLI 使用指南和命令
- **[tinybirdco/tinybird-python-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-python-sdk-guidelines)** - Tinybird Python SDK 使用指南
- **[tinybirdco/tinybird-typescript-sdk-guidelines](https://officialskills.sh/tinybirdco/skills/tinybird-typescript-sdk-guidelines)** - Tinybird TypeScript SDK 使用指南

</details>

<details>
<summary><h3 id="skills-by-hashicorp-team-for-terraform" style="display:inline">HashiCorp 团队 Terraform 技能</h3></summary>

- **[hashicorp/azure-verified-modules](https://officialskills.sh/hashicorp/skills/azure-verified-modules)** - Terraform 模块的 Azure Verified Modules (AVM) 认证标准
- **[hashicorp/new-terraform-provider](https://officialskills.sh/hashicorp/skills/new-terraform-provider)** - 使用 Plugin Framework 搭建新的 Terraform Provider 项目
- **[hashicorp/provider-resources](https://officialskills.sh/hashicorp/skills/provider-resources)** - 使用 Plugin Framework 实现 Terraform Provider 资源和数据源
- **[hashicorp/provider-test-patterns](https://officialskills.sh/hashicorp/skills/provider-test-patterns)** - 使用 terraform-plugin-testing 编写 Terraform Provider 验收测试的模式
- **[hashicorp/provider-actions](https://officialskills.sh/hashicorp/skills/provider-actions)** - 使用 Plugin Framework 实现 Terraform Provider Actions
- **[hashicorp/run-acceptance-tests](https://officialskills.sh/hashicorp/skills/run-acceptance-tests)** - 使用 Go 测试运行器运行 Terraform Provider 验收测试
- **[hashicorp/refactor-module](https://officialskills.sh/hashicorp/skills/refactor-module)** - 将单体 Terraform 配置改造为可复用模块
- **[hashicorp/terraform-search-import](https://officialskills.sh/hashicorp/skills/terraform-search-import)** - 发现现有云资源并将其批量导入 Terraform 状态
- **[hashicorp/terraform-style-guide](https://officialskills.sh/hashicorp/skills/terraform-style-guide)** - 按照 HashiCorp 官方风格规范生成 Terraform HCL 代码
- **[hashicorp/terraform-stacks](https://officialskills.sh/hashicorp/skills/terraform-stacks)** - 跨多个环境、区域和云账户管理基础设施
- **[hashicorp/terraform-test](https://officialskills.sh/hashicorp/skills/terraform-test)** - 用于 Terraform 配置的内置测试框架，采用 .tftest.hcl 文件

</details>

<details>
<summary><h3 id="skills-by-sanity-team" style="display:inline">Sanity 团队技能</h3></summary>

- **[sanity-io/sanity-best-practices](https://officialskills.sh/sanity-io/skills/sanity-best-practices)** - Sanity Studio、GROQ 查询和内容工作流的最佳实践
- **[sanity-io/content-modeling-best-practices](https://officialskills.sh/sanity-io/skills/content-modeling-best-practices)** - 设计可扩展 Sanity 内容模型的指南
- **[sanity-io/seo-aeo-best-practices](https://officialskills.sh/sanity-io/skills/seo-aeo-best-practices)** - 内容网站的 SEO 和答案引擎优化模式
- **[sanity-io/content-experimentation-best-practices](https://officialskills.sh/sanity-io/skills/content-experimentation-best-practices)** - 内容 A/B 测试和实验工作流

</details>

<details>
<summary><h3 id="skills-by-firecrawl-team" style="display:inline">Firecrawl 团队技能</h3></summary>

- **[firecrawl/firecrawl-build](https://officialskills.sh/firecrawl/skills/firecrawl-build)** - 将 Firecrawl 集成到应用代码中，以支持 Web 搜索、抓取、提取和浏览器交互
- **[firecrawl/firecrawl-build-interact](https://officialskills.sh/firecrawl/skills/firecrawl-build-interact)** - 多步骤 Firecrawl 浏览器流程：点击、填写表单、翻页以及感知身份验证的导航
- **[firecrawl/firecrawl-build-onboarding](https://officialskills.sh/firecrawl/skills/firecrawl-build-onboarding)** - 在项目中为首次集成配置 Firecrawl 凭据和 SDK
- **[firecrawl/firecrawl-build-scrape](https://officialskills.sh/firecrawl/skills/firecrawl-build-scrape)** - 从产品代码集成 Firecrawl `/scrape`，以提取单个页面
- **[firecrawl/firecrawl-build-search](https://officialskills.sh/firecrawl/skills/firecrawl-build-search)** - 集成 Firecrawl `/search`，通过查询优先发现内容，并可选择补充内容

</details>

<details>
<summary><h3 id="skills-by-neon" style="display:inline">Neon 技能</h3></summary>

- **[neondatabase/neon-postgres](https://officialskills.sh/neondatabase/skills/neon-postgres)** - Neon Serverless Postgres 最佳实践
- **[neondatabase/claimable-postgres](https://officialskills.sh/neondatabase/skills/claimable-postgres)** - 使用 Neon 配置可认领的 Postgres 数据库
- **[neondatabase/neon-postgres-egress-optimizer](https://officialskills.sh/neondatabase/skills/neon-postgres-egress-optimizer)** - 优化 Neon Postgres 出口流量和数据传输

</details>

<details>
<summary><h3 id="skills-by-clickhouse" style="display:inline">ClickHouse 技能</h3></summary>

- **[clickhouse/clickhouse-best-practices](https://officialskills.sh/clickhouse/skills/clickhouse-best-practices)** - 使用 ClickHouse 的最佳实践
- **[clickhouse/chdb-datastore](https://officialskills.sh/clickhouse/skills/chdb-datastore)** - 可替代 pandas 的工具，借助 ClickHouse 性能处理 16 种以上数据源
- **[clickhouse/chdb-sql](https://officialskills.sh/clickhouse/skills/chdb-sql)** - 用于 Python 的进程内 ClickHouse SQL 引擎——无需服务器即可查询文件、数据库和云存储
- **[clickhouse/clickhouse-architecture-advisor](https://officialskills.sh/clickhouse/skills/clickhouse-architecture-advisor)** - 设计 ClickHouse 架构，并将最佳实践转化为针对具体工作负载的决策
- **[clickhouse/clickhousectl-cloud-deploy](https://officialskills.sh/clickhouse/skills/clickhousectl-cloud-deploy)** - 使用 clickhousectl 部署到 ClickHouse Cloud 并从本地环境迁移
- **[clickhouse/clickhousectl-local-dev](https://officialskills.sh/clickhouse/skills/clickhousectl-local-dev)** - 使用 clickhousectl 从零启动本地 ClickHouse 开发环境

</details>

<details>
<summary><h3 id="skills-by-remotion" style="display:inline">Remotion 技能</h3></summary>

- **[remotion-dev/remotion](https://officialskills.sh/remotion-dev/skills/remotion)** - 使用 React 以编程方式创建视频

</details>

<details>
<summary><h3 id="skills-by-replicate" style="display:inline">Replicate 技能</h3></summary>

- **[replicate/replicate](https://officialskills.sh/replicate/skills/replicate)** - 通过 Replicate API 发现、比较并运行 AI 模型

</details>

<details>
<summary><h3 id="skills-by-typefully" style="display:inline">Typefully 技能</h3></summary>

- **[typefully/typefully](https://officialskills.sh/typefully/skills/typefully)** - 在 X、LinkedIn、Threads、Bluesky 和 Mastodon 上创建、安排并发布社交媒体内容

</details>

<details>
<summary><h3 id="skills-by-veniceai" style="display:inline">Venice.ai 技能</h3></summary>

Venice.ai 为 Venice API 发布的官方技能。

- **[veniceai/venice-api-overview](https://github.com/veniceai/skills/tree/main/skills/venice-api-overview)** - API 基础知识、身份验证模式、定价和版本控制
- **[veniceai/venice-auth](https://github.com/veniceai/skills/tree/main/skills/venice-auth)** - Venice 身份验证中的 API 密钥和钱包
- **[veniceai/venice-chat](https://github.com/veniceai/skills/tree/main/skills/venice-chat)** - 聊天补全、多模态输入、工具和流式传输
- **[veniceai/venice-responses](https://github.com/veniceai/skills/tree/main/skills/venice-responses)** - 适用于 Venice 的 OpenAI 兼容 Responses API
- **[veniceai/venice-embeddings](https://github.com/veniceai/skills/tree/main/skills/venice-embeddings)** - 嵌入模型、维度和编码格式
- **[veniceai/venice-image-generate](https://github.com/veniceai/skills/tree/main/skills/venice-image-generate)** - 图像生成端点和可用样式
- **[veniceai/venice-image-edit](https://github.com/veniceai/skills/tree/main/skills/venice-image-edit)** - 图像编辑、放大和背景移除
- **[veniceai/venice-audio-speech](https://github.com/veniceai/skills/tree/main/skills/venice-audio-speech)** - 文本转语音模型、声音、格式和流式传输
- **[veniceai/venice-audio-music](https://github.com/veniceai/skills/tree/main/skills/venice-audio-music)** - 音乐生成的排队、检索和完成端点
- **[veniceai/venice-audio-transcription](https://github.com/veniceai/skills/tree/main/skills/venice-audio-transcription)** - 音频转录模型和语音转文本选项
- **[veniceai/venice-video](https://github.com/veniceai/skills/tree/main/skills/venice-video)** - 视频生成和转录工作流
- **[veniceai/venice-models](https://github.com/veniceai/skills/tree/main/skills/venice-models)** - 模型目录、特征和兼容性映射
- **[veniceai/venice-characters](https://github.com/veniceai/skills/tree/main/skills/venice-characters)** - 角色端点和 `character_slug` 的用法
- **[veniceai/venice-api-keys](https://github.com/veniceai/skills/tree/main/skills/venice-api-keys)** - API 密钥增删改查、速率限制和 Web3 密钥
- **[veniceai/venice-billing](https://github.com/veniceai/skills/tree/main/skills/venice-billing)** - 余额、用量和计费分析端点
- **[veniceai/venice-x402](https://github.com/veniceai/skills/tree/main/skills/venice-x402)** - Base 上的钱包额度和 x402 支付
- **[veniceai/venice-crypto-rpc](https://github.com/veniceai/skills/tree/main/skills/venice-crypto-rpc)** - 支持的加密网络的 JSON-RPC 代理转发
- **[veniceai/venice-augment](https://github.com/veniceai/skills/tree/main/skills/venice-augment)** - 搜索、抓取和文本解析端点
- **[veniceai/venice-errors](https://github.com/veniceai/skills/tree/main/skills/venice-errors)** - 错误处理、重试和 API 状态码

</details>

<details>
<summary><h3 id="skills-by-vercel-engineering-team" style="display:inline">Vercel 工程团队技能</h3></summary>

- **[vercel-labs/next-best-practices](https://officialskills.sh/vercel-labs/skills/next-best-practices)** - Next.js 最佳实践和推荐模式
- **[vercel-labs/next-cache-components](https://officialskills.sh/vercel-labs/skills/next-cache-components)** - Next.js 中的缓存策略和感知缓存的组件
- **[vercel-labs/next-upgrade](https://officialskills.sh/vercel-labs/skills/next-upgrade)** - 将 Next.js 项目升级到较新版本

</details>

<details>
<summary><h3 id="skills-by-cloudflare-team" style="display:inline">Cloudflare 团队技能</h3></summary>

- **[cloudflare/agents-sdk](https://officialskills.sh/cloudflare/skills/agents-sdk)** - 使用调度、RPC 和 MCP 服务器构建有状态 AI 智能体
- **[cloudflare/cloudflare](https://officialskills.sh/cloudflare/skills/cloudflare)** - 全面的 Cloudflare 平台技能，涵盖 Workers、Pages、存储、AI、网络、安全和 IaC
- **[cloudflare/cloudflare-email-service](https://officialskills.sh/cloudflare/skills/cloudflare-email-service)** - 使用 Cloudflare Email Sending 和 Email Routing 发送事务性邮件并路由收件邮件
- **[cloudflare/durable-objects](https://officialskills.sh/cloudflare/skills/durable-objects)** - 使用 RPC、SQLite 和 WebSockets 实现有状态协调
- **[cloudflare/sandbox-sdk](https://officialskills.sh/cloudflare/skills/sandbox-sdk)** - 在 Workers 上构建沙箱应用，实现安全、隔离的代码执行
- **[cloudflare/web-perf](https://officialskills.sh/cloudflare/skills/web-perf)** - 审查 Core Web Vitals 和阻塞渲染的资源
- **[cloudflare/workers-best-practices](https://officialskills.sh/cloudflare/skills/workers-best-practices)** - 依据生产环境最佳实践和 wrangler.jsonc 规范审查并编写 Workers 代码
- **[cloudflare/wrangler](https://officialskills.sh/cloudflare/skills/wrangler)** - 部署和管理 Workers、KV、R2、D1、Vectorize、Queues、Workflows
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** - 多阶段安全审计，提供经过独立验证、机器可读的发现结果

</details>

<details>
<summary><h3 id="skills-by-netlify-team" style="display:inline">Netlify 团队技能</h3></summary>

- **[netlify/netlify-functions](https://officialskills.sh/netlify/skills/netlify-functions)** - 构建无服务器 API 端点和后台任务
- **[netlify/netlify-edge-functions](https://officialskills.sh/netlify/skills/netlify-edge-functions)** - 低延迟边缘中间件和地理位置逻辑
- **[netlify/netlify-blobs](https://officialskills.sh/netlify/skills/netlify-blobs)** - 用于文件和数据的键值对象存储
- **[netlify/netlify-db](https://officialskills.sh/netlify/skills/netlify-db)** - 托管 Postgres，支持部署预览分支
- **[netlify/netlify-image-cdn](https://officialskills.sh/netlify/skills/netlify-image-cdn)** - 通过 CDN 优化和转换图像
- **[netlify/netlify-forms](https://officialskills.sh/netlify/skills/netlify-forms)** - 支持垃圾信息过滤的 HTML 表单处理
- **[netlify/netlify-frameworks](https://officialskills.sh/netlify/skills/netlify-frameworks)** - 部署支持 SSR 的 Web 框架
- **[netlify/netlify-caching](https://officialskills.sh/netlify/skills/netlify-caching)** - 配置 CDN 缓存和缓存清除
- **[netlify/netlify-config](https://officialskills.sh/netlify/skills/netlify-config)** - netlify.toml 站点配置参考
- **[netlify/netlify-cli-and-deploy](https://officialskills.sh/netlify/skills/netlify-cli-and-deploy)** - CLI 设置、本地开发和部署工作流
- **[netlify/netlify-deploy](https://officialskills.sh/netlify/skills/netlify-deploy)** - Netlify 站点的自动化部署工作流
- **[netlify/netlify-ai-gateway](https://officialskills.sh/netlify/skills/netlify-ai-gateway)** - 通过统一网关端点访问 AI 模型

</details>

<details>
<summary><h3 id="skills-by-google-labs-stitch" style="display:inline">Google Labs（Stitch）技能</h3></summary>

适用于 Stitch MCP 服务器的 Agent Skills，兼容 Claude Code、Gemini CLI、Cursor 等工具。

- **[google-labs-code/design-md](https://officialskills.sh/google-labs-code/skills/design-md)** - 创建和管理 DESIGN.md 文件
- **[google-labs-code/enhance-prompt](https://officialskills.sh/google-labs-code/skills/enhance-prompt)** - 使用设计规范和 UI/UX 词汇改进提示词
- **[google-labs-code/react-components](https://officialskills.sh/google-labs-code/skills/react-components)** - 将 Stitch 转换为 React 组件
- **[google-labs-code/remotion](https://officialskills.sh/google-labs-code/skills/remotion)** - 根据 Stitch 应用设计生成演示视频
- **[google-labs-code/shadcn-ui](https://officialskills.sh/google-labs-code/skills/shadcn-ui)** - 使用 shadcn/ui 构建 UI 组件
- **[google-labs-code/stitch-loop](https://officialskills.sh/google-labs-code/skills/stitch-loop)** - 迭代式设计到代码反馈循环

</details>

<details>
<summary><h3 id="skills-by-google-workspace-cli" style="display:inline">Google Workspace CLI 技能</h3></summary>

用于通过 `gws` CLI 工具管理 Google Workspace 服务的官方 Google Workspace CLI 技能。

- **[googleworkspace/gws-shared](https://officialskills.sh/googleworkspace/skills/gws-shared)** - 共享身份验证、全局标志和输出格式设置
- **[googleworkspace/gws-drive](https://officialskills.sh/googleworkspace/skills/gws-drive)** - 管理 Google Drive 文件、文件夹和共享云端硬盘
- **[googleworkspace/gws-sheets](https://officialskills.sh/googleworkspace/skills/gws-sheets)** - 读取和写入 Google Sheets 电子表格
- **[googleworkspace/gws-gmail](https://officialskills.sh/googleworkspace/skills/gws-gmail)** - 发送、读取和管理 Gmail 邮件
- **[googleworkspace/gws-calendar](https://officialskills.sh/googleworkspace/skills/gws-calendar)** - 管理 Google Calendar 日历和活动
- **[googleworkspace/gws-admin-reports](https://officialskills.sh/googleworkspace/skills/gws-admin-reports)** - Workspace 审计日志和使用情况报告
- **[googleworkspace/gws-docs](https://officialskills.sh/googleworkspace/skills/gws-docs)** - 读取和写入 Google Docs 文档
- **[googleworkspace/gws-slides](https://officialskills.sh/googleworkspace/skills/gws-slides)** - 读取和写入 Google Slides 演示文稿
- **[googleworkspace/gws-tasks](https://officialskills.sh/googleworkspace/skills/gws-tasks)** - 管理 Google Tasks 任务列表和任务
- **[googleworkspace/gws-people](https://officialskills.sh/googleworkspace/skills/gws-people)** - 管理 Google People 联系人和个人资料
- **[googleworkspace/gws-chat](https://officialskills.sh/googleworkspace/skills/gws-chat)** - 管理 Google Chat 空间和消息
- **[googleworkspace/gws-classroom](https://officialskills.sh/googleworkspace/skills/gws-classroom)** - 管理 Google Classroom 课程、名册和课业
- **[googleworkspace/gws-forms](https://officialskills.sh/googleworkspace/skills/gws-forms)** - 读取和写入 Google Forms
- **[googleworkspace/gws-keep](https://officialskills.sh/googleworkspace/skills/gws-keep)** - 管理 Google Keep 便笺
- **[googleworkspace/gws-events](https://officialskills.sh/googleworkspace/skills/gws-events)** - 订阅 Google Workspace 事件
- **[googleworkspace/gws-modelarmor](https://officialskills.sh/googleworkspace/skills/gws-modelarmor)** - 对用户生成的内容进行安全过滤
- **[googleworkspace/gws-workflow](https://officialskills.sh/googleworkspace/skills/gws-workflow)** - 跨服务的 Google Workspace 生产力工作流

</details>

<details>
<summary><h3 id="skills-by-expo-team" style="display:inline">Expo 团队技能</h3></summary>

Expo 团队为构建、部署和调试 Expo 应用提供的官方 AI 智能体技能。

- **[expo/building-native-ui](https://officialskills.sh/expo/skills/building-native-ui)** - 使用 Expo Router、样式、组件、导航和动画构建应用
- **[expo/expo-api-routes](https://officialskills.sh/expo/skills/expo-api-routes)** - 使用 EAS Hosting 在 Expo Router 中创建 API 路由
- **[expo/expo-cicd-workflows](https://officialskills.sh/expo/skills/expo-cicd-workflows)** - Expo 项目的 CI/CD 工作流
- **[expo/expo-deployment](https://officialskills.sh/expo/skills/expo-deployment)** - 将 Expo 应用部署到生产环境
- **[expo/expo-dev-client](https://officialskills.sh/expo/skills/expo-dev-client)** - 在本地或通过 TestFlight 构建并分发 Expo 开发客户端
- **[expo/expo-tailwind-setup](https://officialskills.sh/expo/skills/expo-tailwind-setup)** - 在 Expo 中使用 NativeWind v5 配置 Tailwind CSS v4
- **[expo/expo-ui-jetpack-compose](https://officialskills.sh/expo/skills/expo-ui-jetpack-compose)** - 适用于 Expo 的 Jetpack Compose UI 组件
- **[expo/expo-ui-swift-ui](https://officialskills.sh/expo/skills/expo-ui-swift-ui)** - 适用于 Expo 的 SwiftUI 组件
- **[expo/native-data-fetching](https://officialskills.sh/expo/skills/native-data-fetching)** - 网络请求、API 调用、缓存和离线支持
- **[expo/upgrading-expo](https://officialskills.sh/expo/skills/upgrading-expo)** - 升级 Expo SDK 版本
- **[expo/use-dom](https://officialskills.sh/expo/skills/use-dom)** - 使用 DOM 组件在原生应用的 WebView 中运行 Web 代码

</details>

<details>
<summary><h3 id="skills-by-hugging-face-team" style="display:inline">Hugging Face 团队技能</h3></summary>

Hugging Face 团队为 ML 工作流提供的官方 AI 智能体技能。

- **[huggingface/hf-cli](https://officialskills.sh/huggingface/skills/hf-cli)** - 用于 Hub 操作的 HF CLI 工具
- **[huggingface/hugging-face-dataset-viewer](https://officialskills.sh/huggingface/skills/hugging-face-dataset-viewer)** - 使用 Dataset Viewer API 浏览和查询 HF 数据集
- **[huggingface/hugging-face-datasets](https://officialskills.sh/huggingface/skills/hugging-face-datasets)** - 使用配置和 SQL 查询创建并管理数据集
- **[huggingface/hugging-face-evaluation](https://officialskills.sh/huggingface/skills/hugging-face-evaluation)** - 使用 vLLM/lighteval 和评估表进行模型评估
- **[huggingface/hugging-face-jobs](https://officialskills.sh/huggingface/skills/hugging-face-jobs)** - 在 HF 基础设施上运行计算任务和 Python 脚本
- **[huggingface/hugging-face-model-trainer](https://officialskills.sh/huggingface/skills/hugging-face-model-trainer)** - 使用 TRL 训练模型：SFT、DPO、GRPO 和 GGUF 转换
- **[huggingface/hugging-face-paper-pages](https://officialskills.sh/huggingface/skills/hugging-face-paper-pages)** - 在 HF Hub 上创建和管理论文页面
- **[huggingface/hugging-face-paper-publisher](https://officialskills.sh/huggingface/skills/hugging-face-paper-publisher)** - 在 HF Hub 上发布论文，并链接模型/数据集
- **[huggingface/hugging-face-tool-builder](https://officialskills.sh/huggingface/skills/hugging-face-tool-builder)** - 为 HF API 操作构建可复用脚本
- **[huggingface/hugging-face-trackio](https://officialskills.sh/huggingface/skills/hugging-face-trackio)** - 使用实时仪表板跟踪 ML 实验
- **[huggingface/hugging-face-vision-trainer](https://officialskills.sh/huggingface/skills/hugging-face-vision-trainer)** - 在 HF 基础设施上训练视觉模型
- **[huggingface/huggingface-gradio](https://officialskills.sh/huggingface/skills/huggingface-gradio)** - 构建 Gradio 应用并部署到 HF Spaces
- **[huggingface/transformers.js](https://officialskills.sh/huggingface/skills/transformers.js)** - 在浏览器中使用 Transformers.js 运行 ML 模型

</details>

<details>
<summary><h3 id="security-skills-by-trail-of-bits-team" style="display:inline">Trail of Bits 团队安全技能</h3></summary>

- **[trailofbits/ask-questions-if-underspecified](https://officialskills.sh/trailofbits/skills/ask-questions-if-underspecified)** - 针对含糊的需求请求澄清
- **[trailofbits/audit-context-building](https://officialskills.sh/trailofbits/skills/audit-context-building)** - 通过超细粒度代码分析深入了解架构上下文
- **[trailofbits/building-secure-contracts](https://officialskills.sh/trailofbits/skills/building-secure-contracts)** - 面向 6 种区块链、包含漏洞扫描器的智能合约安全工具包
- **[trailofbits/burpsuite-project-parser](https://officialskills.sh/trailofbits/skills/burpsuite-project-parser)** - 搜索并提取 Burp Suite 项目文件中的数据
- **[trailofbits/claude-in-chrome-troubleshooting](https://officialskills.sh/trailofbits/skills/claude-in-chrome-troubleshooting)** - 诊断并修复 Claude in Chrome MCP 扩展连接问题
- **[trailofbits/constant-time-analysis](https://officialskills.sh/trailofbits/skills/constant-time-analysis)** - 检测加密代码中由编译器引起的时序侧信道
- **[trailofbits/culture-index](https://officialskills.sh/trailofbits/skills/culture-index)** - 索引和搜索文化文档
- **[trailofbits/differential-review](https://officialskills.sh/trailofbits/skills/differential-review)** - 结合 Git 历史分析、以安全为重点的差异审查
- **[trailofbits/dwarf-expert](https://officialskills.sh/trailofbits/skills/dwarf-expert)** - DWARF 调试格式专业知识
- **[trailofbits/entry-point-analyzer](https://officialskills.sh/trailofbits/skills/entry-point-analyzer)** - 识别智能合约中会改变状态的入口点
- **[trailofbits/firebase-apk-scanner](https://officialskills.sh/trailofbits/skills/firebase-apk-scanner)** - 扫描 Android APK，查找 Firebase 配置错误和安全漏洞
- **[trailofbits/insecure-defaults](https://officialskills.sh/trailofbits/skills/insecure-defaults)** - 检测不安全的默认配置，例如硬编码密钥、默认凭据和弱加密
- **[trailofbits/modern-python](https://officialskills.sh/trailofbits/skills/modern-python)** - 采用 uv、ruff、ty 和 pytest 最佳实践的现代 Python 工具链
- **[trailofbits/property-based-testing](https://officialskills.sh/trailofbits/skills/property-based-testing)** - 适用于多种语言和智能合约的基于属性测试
- **[trailofbits/semgrep-rule-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-creator)** - 创建和改进用于漏洞检测的 Semgrep 规则
- **[trailofbits/semgrep-rule-variant-creator](https://officialskills.sh/trailofbits/skills/semgrep-rule-variant-creator)** - 通过测试驱动验证，将现有 Semgrep 规则移植到新的目标语言
- **[trailofbits/sharp-edges](https://officialskills.sh/trailofbits/skills/sharp-edges)** - 识别容易出错的 API 和危险配置
- **[trailofbits/spec-to-code-compliance](https://officialskills.sh/trailofbits/skills/spec-to-code-compliance)** - 用于区块链审计的规范到代码合规性检查器
- **[trailofbits/static-analysis](https://officialskills.sh/trailofbits/skills/static-analysis)** - 包含 CodeQL、Semgrep 和 SARIF 的静态分析工具包
- **[trailofbits/testing-handbook-skills](https://officialskills.sh/trailofbits/skills/testing-handbook-skills)** - 测试手册技能：模糊测试器、静态分析和消毒器
- **[trailofbits/variant-analysis](https://officialskills.sh/trailofbits/skills/variant-analysis)** - 通过基于模式的分析查找相似漏洞

</details>

<details>
<summary><h3 id="skills-by-sentry-team-for-their-dev-team" style="display:inline">Sentry 开发团队技能</h3></summary>

- **[getsentry/sentry-sdk-setup](https://officialskills.sh/getsentry/skills/sentry-sdk-setup)** - 在任意语言或框架中设置 Sentry——自动检测平台并选择相应 SDK
- **[getsentry/sentry-workflow](https://officialskills.sh/getsentry/skills/sentry-workflow)** - Sentry 端到端工作流：修复生产问题，并结合 Sentry 上下文审查代码
- **[getsentry/sentry-fix-issues](https://officialskills.sh/getsentry/skills/sentry-fix-issues)** - 通过 MCP，结合堆栈跟踪、面包屑和跟踪上下文查找并修复 Sentry 问题
- **[getsentry/sentry-code-review](https://officialskills.sh/getsentry/skills/sentry-code-review)** - 使用 Sentry 问题和跟踪上下文审查代码变更
- **[getsentry/sentry-pr-code-review](https://officialskills.sh/getsentry/skills/sentry-pr-code-review)** - 审查 Seer Bug Prediction 的 PR 评论和 Sentry 反馈
- **[getsentry/sentry-create-alert](https://officialskills.sh/getsentry/skills/sentry-create-alert)** - 使用电子邮件、Slack、PagerDuty、Discord 等创建 Sentry 警报
- **[getsentry/sentry-feature-setup](https://officialskills.sh/getsentry/skills/sentry-feature-setup)** - 配置高级 Sentry 功能：AI 监控、OTel 管道和警报
- **[getsentry/sentry-otel-exporter-setup](https://officialskills.sh/getsentry/skills/sentry-otel-exporter-setup)** - 使用 Sentry Exporter 配置 OpenTelemetry Collector
- **[getsentry/sentry-setup-ai-monitoring](https://officialskills.sh/getsentry/skills/sentry-setup-ai-monitoring)** - 为 OpenAI、Anthropic、Vercel AI、LangChain、Google GenAI 和 Pydantic AI 添加仪表
- **[getsentry/sentry-sdk-upgrade](https://officialskills.sh/getsentry/skills/sentry-sdk-upgrade)** - 跨主要版本升级 Sentry JavaScript SDK
- **[getsentry/sentry-sdk-skill-creator](https://officialskills.sh/getsentry/skills/sentry-sdk-skill-creator)** - 为某个平台创建新的 Sentry SDK 技能包
- **[getsentry/sentry-android-sdk](https://officialskills.sh/getsentry/skills/sentry-android-sdk)** - 为 Android（Kotlin 和 Java）完整设置 Sentry SDK
- **[getsentry/sentry-browser-sdk](https://officialskills.sh/getsentry/skills/sentry-browser-sdk)** - 为浏览器 JavaScript 完整设置 Sentry SDK
- **[getsentry/sentry-cloudflare-sdk](https://officialskills.sh/getsentry/skills/sentry-cloudflare-sdk)** - 为 Cloudflare Workers、Pages、Durable Objects、Queues 和 Workflows 完整设置 Sentry SDK
- **[getsentry/sentry-cocoa-sdk](https://officialskills.sh/getsentry/skills/sentry-cocoa-sdk)** - 为 Apple 平台（iOS、macOS、tvOS、watchOS、visionOS）完整设置 Sentry SDK
- **[getsentry/sentry-dotnet-sdk](https://officialskills.sh/getsentry/skills/sentry-dotnet-sdk)** - 为 .NET（ASP.NET Core、MAUI、WPF、WinForms、Blazor、Azure Functions）完整设置 Sentry SDK
- **[getsentry/sentry-elixir-sdk](https://officialskills.sh/getsentry/skills/sentry-elixir-sdk)** - 为 Elixir、Phoenix、Plug、LiveView、Oban 和 Quantum 完整设置 Sentry SDK
- **[getsentry/sentry-flutter-sdk](https://officialskills.sh/getsentry/skills/sentry-flutter-sdk)** - 为所有平台上的 Flutter 和 Dart 完整设置 Sentry SDK
- **[getsentry/sentry-go-sdk](https://officialskills.sh/getsentry/skills/sentry-go-sdk)** - 为 Go（net/http、Gin、Echo、Fiber、FastHTTP、Iris、Negroni）完整设置 Sentry SDK
- **[getsentry/sentry-nestjs-sdk](https://officialskills.sh/getsentry/skills/sentry-nestjs-sdk)** - 为使用 Express 或 Fastify 的 NestJS、GraphQL 和微服务完整设置 Sentry SDK
- **[getsentry/sentry-nextjs-sdk](https://officialskills.sh/getsentry/skills/sentry-nextjs-sdk)** - 为 Next.js 13+（App Router 和 Pages Router）完整设置 Sentry SDK
- **[getsentry/sentry-node-sdk](https://officialskills.sh/getsentry/skills/sentry-node-sdk)** - 为 Node.js、Bun 和 Deno 完整设置 Sentry SDK
- **[getsentry/sentry-php-sdk](https://officialskills.sh/getsentry/skills/sentry-php-sdk)** - 为 PHP、Laravel 和 Symfony 完整设置 Sentry SDK
- **[getsentry/sentry-python-sdk](https://officialskills.sh/getsentry/skills/sentry-python-sdk)** - 为 Python（Django、Flask、FastAPI、Celery、Starlette、AIOHTTP、Tornado）完整设置 Sentry SDK
- **[getsentry/sentry-react-native-sdk](https://officialskills.sh/getsentry/skills/sentry-react-native-sdk)** - 为 React Native 和 Expo 完整设置 Sentry SDK
- **[getsentry/sentry-react-sdk](https://officialskills.sh/getsentry/skills/sentry-react-sdk)** - 为 React（React Router v5-v7、TanStack Router、Redux、Vite、webpack）完整设置 Sentry SDK
- **[getsentry/sentry-ruby-sdk](https://officialskills.sh/getsentry/skills/sentry-ruby-sdk)** - 为 Ruby（Rails、Sinatra、Rack、Sidekiq、Resque）完整设置 Sentry SDK
- **[getsentry/sentry-svelte-sdk](https://officialskills.sh/getsentry/skills/sentry-svelte-sdk)** - 为 Svelte 和 SvelteKit 完整设置 Sentry SDK

</details>

<details>
<summary><h3 id="skills-by-microsoft" style="display:inline">Microsoft 技能</h3></summary>

面向 Azure SDK 和 Microsoft AI Foundry 开发的领域专属知识。共 133 项技能，覆盖 6 种语言。

### 核心技能 <a id="core-skills"></a>

- **[microsoft/cloud-solution-architect](https://officialskills.sh/microsoft/skills/cloud-solution-architect)** - 设计架构完善的 Azure 云系统
- **[microsoft/continual-learning](https://officialskills.sh/microsoft/skills/continual-learning)** - Azure AI 持续学习模式
- **[microsoft/copilot-sdk](https://officialskills.sh/microsoft/skills/copilot-sdk)** - 构建由 GitHub Copilot SDK 驱动的应用
- **[microsoft/entra-agent-id](https://officialskills.sh/microsoft/skills/entra-agent-id)** - 通过 Graph API 使用 Microsoft Entra Agent ID OAuth2 身份
- **[microsoft/frontend-design-review](https://officialskills.sh/microsoft/skills/frontend-design-review)** - 审查并创建独具特色的前端界面
- **[microsoft/github-issue-creator](https://officialskills.sh/microsoft/skills/github-issue-creator)** - 根据笔记生成结构化的 GitHub 问题报告
- **[microsoft/mcp-builder](https://officialskills.sh/microsoft/skills/mcp-builder)** - 用于 LLM 工具集成的 MCP 服务器创建指南
- **[microsoft/podcast-generation](https://officialskills.sh/microsoft/skills/podcast-generation)** - 使用 Azure OpenAI Realtime API 生成 AI 播客音频
- **[microsoft/skill-creator](https://officialskills.sh/microsoft/skills/skill-creator)** - 为 AI 编码智能体创建有效技能的指南

### .NET 技能 <a id="net-skills"></a>

- **[microsoft/azure-ai-document-intelligence-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-dotnet)** - 文档文本、表格和数据提取
- **[microsoft/azure-ai-openai-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-openai-dotnet)** - GPT-4、嵌入、DALL-E 和 Whisper 客户端
- **[microsoft/azure-ai-projects-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-projects-dotnet)** - AI Foundry 项目管理 SDK
- **[microsoft/azure-ai-voicelive-dotnet](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-dotnet)** - 实时双向语音 AI
- **[microsoft/azure-eventgrid-dotnet](https://officialskills.sh/microsoft/skills/azure-eventgrid-dotnet)** - Event Grid 主题和域发布
- **[microsoft/azure-eventhub-dotnet](https://officialskills.sh/microsoft/skills/azure-eventhub-dotnet)** - 高吞吐量事件流
- **[microsoft/azure-identity-dotnet](https://officialskills.sh/microsoft/skills/azure-identity-dotnet)** - Microsoft Entra ID 身份验证
- **[microsoft/azure-maps-search-dotnet](https://officialskills.sh/microsoft/skills/azure-maps-search-dotnet)** - 地理编码、路线规划和天气服务
- **[microsoft/azure-mgmt-apicenter-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-dotnet)** - API 清单和治理
- **[microsoft/azure-mgmt-apimanagement-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-dotnet)** - 通过 ARM 配置 API Management
- **[microsoft/azure-mgmt-applicationinsights-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-applicationinsights-dotnet)** - Application Insights 资源管理
- **[microsoft/azure-mgmt-arizeaiobservabilityeval-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-arizeaiobservabilityeval-dotnet)** - Arize AI 可观测性管理
- **[microsoft/azure-mgmt-botservice-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-dotnet)** - 通过 ARM 配置 Bot Service
- **[microsoft/azure-mgmt-fabric-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-dotnet)** - Microsoft Fabric 容量管理
- **[microsoft/azure-mgmt-mongodbatlas-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-mongodbatlas-dotnet)** - 将 MongoDB Atlas 作为 ARM 资源管理
- **[microsoft/azure-mgmt-weightsandbiases-dotnet](https://officialskills.sh/microsoft/skills/azure-mgmt-weightsandbiases-dotnet)** - Weights & Biases 部署管理
- **[microsoft/azure-resource-manager-cosmosdb-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-cosmosdb-dotnet)** - Cosmos DB 资源配置
- **[microsoft/azure-resource-manager-durabletask-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-durabletask-dotnet)** - Durable Task Scheduler 管理
- **[microsoft/azure-resource-manager-mysql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-mysql-dotnet)** - MySQL Flexible Server 管理
- **[microsoft/azure-resource-manager-playwright-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-playwright-dotnet)** - Playwright Testing 工作区管理
- **[microsoft/azure-resource-manager-postgresql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-postgresql-dotnet)** - PostgreSQL Flexible Server 管理
- **[microsoft/azure-resource-manager-redis-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-redis-dotnet)** - Azure Cache for Redis 配置
- **[microsoft/azure-resource-manager-sql-dotnet](https://officialskills.sh/microsoft/skills/azure-resource-manager-sql-dotnet)** - Azure SQL 资源管理
- **[microsoft/azure-search-documents-dotnet](https://officialskills.sh/microsoft/skills/azure-search-documents-dotnet)** - 全文、向量和混合搜索
- **[microsoft/azure-security-keyvault-keys-dotnet](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-dotnet)** - 加密密钥管理
- **[microsoft/azure-servicebus-dotnet](https://officialskills.sh/microsoft/skills/azure-servicebus-dotnet)** - 使用队列和主题实现企业消息传递
- **[microsoft/m365-agents-dotnet](https://officialskills.sh/microsoft/skills/m365-agents-dotnet)** - M365、Teams 和 Copilot Studio 智能体
- **[microsoft/microsoft-azure-webjobs-extensions-authentication-events-dotnet](https://officialskills.sh/microsoft/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet)** - Entra ID 自定义身份验证事件处理程序

### Java 技能 <a id="java-skills"></a>

- **[microsoft/azure-ai-anomalydetector-java](https://officialskills.sh/microsoft/skills/azure-ai-anomalydetector-java)** - 异常检测应用
- **[microsoft/azure-ai-contentsafety-java](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-java)** - 内容审核与安全
- **[microsoft/azure-ai-formrecognizer-java](https://officialskills.sh/microsoft/skills/azure-ai-formrecognizer-java)** - 文档分析和表单提取
- **[microsoft/azure-ai-projects-java](https://officialskills.sh/microsoft/skills/azure-ai-projects-java)** - AI Foundry 项目管理
- **[microsoft/azure-ai-vision-imageanalysis-java](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-java)** - 图像描述、OCR 和对象检测
- **[microsoft/azure-ai-voicelive-java](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-java)** - 实时双向语音 AI
- **[microsoft/azure-appconfiguration-java](https://officialskills.sh/microsoft/skills/azure-appconfiguration-java)** - 集中式应用配置管理
- **[microsoft/azure-communication-callautomation-java](https://officialskills.sh/microsoft/skills/azure-communication-callautomation-java)** - 通过 IVR 和 AI 实现呼叫自动化
- **[microsoft/azure-communication-callingserver-java](https://officialskills.sh/microsoft/skills/azure-communication-callingserver-java)** - 旧版 CallingServer SDK
- **[microsoft/azure-communication-chat-java](https://officialskills.sh/microsoft/skills/azure-communication-chat-java)** - 支持线程和回执的实时聊天
- **[microsoft/azure-communication-common-java](https://officialskills.sh/microsoft/skills/azure-communication-common-java)** - Communication Services 通用实用工具
- **[microsoft/azure-communication-sms-java](https://officialskills.sh/microsoft/skills/azure-communication-sms-java)** - 短信发送和送达报告
- **[microsoft/azure-compute-batch-java](https://officialskills.sh/microsoft/skills/azure-compute-batch-java)** - 大规模并行和 HPC 批处理作业
- **[microsoft/azure-cosmos-java](https://officialskills.sh/microsoft/skills/azure-cosmos-java)** - 支持全球分布的 Cosmos DB NoSQL
- **[microsoft/azure-data-tables-java](https://officialskills.sh/microsoft/skills/azure-data-tables-java)** - NoSQL 键值表存储
- **[microsoft/azure-eventgrid-java](https://officialskills.sh/microsoft/skills/azure-eventgrid-java)** - 事件驱动的发布/订阅消息传递
- **[microsoft/azure-eventhub-java](https://officialskills.sh/microsoft/skills/azure-eventhub-java)** - 实时高吞吐量流处理
- **[microsoft/azure-identity-java](https://officialskills.sh/microsoft/skills/azure-identity-java)** - Microsoft Entra ID 身份验证
- **[microsoft/azure-messaging-webpubsub-java](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsub-java)** - 实时 WebSocket 消息传递
- **[microsoft/azure-monitor-ingestion-java](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-java)** - 将自定义日志摄取到 Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-java](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-java)** - 将 OpenTelemetry 导出到 Azure Monitor
- **[microsoft/azure-monitor-query-java](https://officialskills.sh/microsoft/skills/azure-monitor-query-java)** - 查询 Azure Monitor 日志和指标
- **[microsoft/azure-security-keyvault-keys-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-keys-java)** - 加密密钥管理
- **[microsoft/azure-security-keyvault-secrets-java](https://officialskills.sh/microsoft/skills/azure-security-keyvault-secrets-java)** - 密码和密钥管理
- **[microsoft/azure-storage-blob-java](https://officialskills.sh/microsoft/skills/azure-storage-blob-java)** - 用于文件管理的 Blob 存储

### Python 技能 <a id="python-skills"></a>

- **[microsoft/agent-framework-azure-ai-py](https://officialskills.sh/microsoft/skills/agent-framework-azure-ai-py)** - 面向 Azure AI Foundry 的 Agent Framework
- **[microsoft/agents-v2-py](https://officialskills.sh/microsoft/skills/agents-v2-py)** - Foundry Agents SDK——使用自定义映像的基于容器的智能体
- **[microsoft/azure-ai-contentsafety-py](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-py)** - 有害内容检测
- **[microsoft/azure-ai-contentunderstanding-py](https://officialskills.sh/microsoft/skills/azure-ai-contentunderstanding-py)** - 多模态内容提取
- **[microsoft/azure-ai-ml-py](https://officialskills.sh/microsoft/skills/azure-ai-ml-py)** - Azure ML 工作区和作业管理
- **[microsoft/azure-ai-projects-py](https://officialskills.sh/microsoft/skills/azure-ai-projects-py)** - AI Foundry 项目客户端和智能体
- **[microsoft/azure-ai-textanalytics-py](https://officialskills.sh/microsoft/skills/azure-ai-textanalytics-py)** - 自然语言处理：情感、实体和关键短语
- **[microsoft/azure-ai-transcription-py](https://officialskills.sh/microsoft/skills/azure-ai-transcription-py)** - 语音转文本转录
- **[microsoft/azure-ai-translation-document-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-document-py)** - 批量文档翻译
- **[microsoft/azure-ai-translation-text-py](https://officialskills.sh/microsoft/skills/azure-ai-translation-text-py)** - 实时文本翻译
- **[microsoft/azure-ai-vision-imageanalysis-py](https://officialskills.sh/microsoft/skills/azure-ai-vision-imageanalysis-py)** - 图像描述、标签、OCR 和对象
- **[microsoft/azure-ai-voicelive-py](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-py)** - 实时双向语音 AI
- **[microsoft/azure-appconfiguration-py](https://officialskills.sh/microsoft/skills/azure-appconfiguration-py)** - 功能标志和动态设置
- **[microsoft/azure-containerregistry-py](https://officialskills.sh/microsoft/skills/azure-containerregistry-py)** - 容器映像和注册表管理
- **[microsoft/azure-cosmos-db-py](https://officialskills.sh/microsoft/skills/azure-cosmos-db-py)** - Cosmos DB 的 Python/FastAPI 模式
- **[microsoft/azure-cosmos-py](https://officialskills.sh/microsoft/skills/azure-cosmos-py)** - Cosmos DB NoSQL 客户端库
- **[microsoft/azure-data-tables-py](https://officialskills.sh/microsoft/skills/azure-data-tables-py)** - NoSQL 键值表存储
- **[microsoft/azure-eventgrid-py](https://officialskills.sh/microsoft/skills/azure-eventgrid-py)** - 事件驱动的发布/订阅路由
- **[microsoft/azure-eventhub-py](https://officialskills.sh/microsoft/skills/azure-eventhub-py)** - 高吞吐量事件流
- **[microsoft/azure-identity-py](https://officialskills.sh/microsoft/skills/azure-identity-py)** - Microsoft Entra ID 身份验证
- **[microsoft/azure-keyvault-py](https://officialskills.sh/microsoft/skills/azure-keyvault-py)** - 机密、密钥和证书管理
- **[microsoft/azure-messaging-webpubsubservice-py](https://officialskills.sh/microsoft/skills/azure-messaging-webpubsubservice-py)** - 实时 WebSocket 消息传递
- **[microsoft/azure-mgmt-apicenter-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apicenter-py)** - API 清单和治理
- **[microsoft/azure-mgmt-apimanagement-py](https://officialskills.sh/microsoft/skills/azure-mgmt-apimanagement-py)** - API Management 服务管理
- **[microsoft/azure-mgmt-botservice-py](https://officialskills.sh/microsoft/skills/azure-mgmt-botservice-py)** - Bot Service 资源管理
- **[microsoft/azure-mgmt-fabric-py](https://officialskills.sh/microsoft/skills/azure-mgmt-fabric-py)** - Microsoft Fabric 容量管理
- **[microsoft/azure-monitor-ingestion-py](https://officialskills.sh/microsoft/skills/azure-monitor-ingestion-py)** - 将自定义日志摄取到 Azure Monitor
- **[microsoft/azure-monitor-opentelemetry-exporter-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-exporter-py)** - 将 OpenTelemetry 导出到 Application Insights
- **[microsoft/azure-monitor-opentelemetry-py](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-py)** - 一行代码配置 Application Insights
- **[microsoft/azure-monitor-query-py](https://officialskills.sh/microsoft/skills/azure-monitor-query-py)** - 查询 Azure Monitor 日志和指标
- **[microsoft/azure-search-documents-py](https://officialskills.sh/microsoft/skills/azure-search-documents-py)** - 全文、向量和混合搜索
- **[microsoft/azure-servicebus-py](https://officialskills.sh/microsoft/skills/azure-servicebus-py)** - 使用队列和主题实现企业消息传递
- **[microsoft/azure-speech-to-text-rest-py](https://officialskills.sh/microsoft/skills/azure-speech-to-text-rest-py)** - 用于短音频的 REST 语音转文本
- **[microsoft/azure-storage-blob-py](https://officialskills.sh/microsoft/skills/azure-storage-blob-py)** - Blob 对象存储客户端
- **[microsoft/azure-storage-file-datalake-py](https://officialskills.sh/microsoft/skills/azure-storage-file-datalake-py)** - 分层数据湖存储
- **[microsoft/azure-storage-file-share-py](https://officialskills.sh/microsoft/skills/azure-storage-file-share-py)** - SMB 文件共享管理
- **[microsoft/azure-storage-queue-py](https://officialskills.sh/microsoft/skills/azure-storage-queue-py)** - 简单消息队列
- **[microsoft/fastapi-router-py](https://officialskills.sh/microsoft/skills/fastapi-router-py)** - 带 CRUD 和身份验证的 FastAPI 路由器
- **[microsoft/m365-agents-py](https://officialskills.sh/microsoft/skills/m365-agents-py)** - M365、Teams 和 Copilot Studio 智能体
- **[microsoft/pydantic-models-py](https://officialskills.sh/microsoft/skills/pydantic-models-py)** - 用于 API 架构的 Pydantic 模型

### Rust 技能 <a id="rust-skills"></a>

- **[microsoft/azure-cosmos-rust](https://officialskills.sh/microsoft/skills/azure-cosmos-rust)** - Cosmos DB NoSQL 客户端
- **[microsoft/azure-eventhub-rust](https://officialskills.sh/microsoft/skills/azure-eventhub-rust)** - Event Hubs 流处理客户端
- **[microsoft/azure-identity-rust](https://officialskills.sh/microsoft/skills/azure-identity-rust)** - Microsoft Entra ID 身份验证
- **[microsoft/azure-keyvault-certificates-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-certificates-rust)** - Key Vault 证书管理
- **[microsoft/azure-keyvault-keys-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-rust)** - Key Vault 加密密钥管理
- **[microsoft/azure-keyvault-secrets-rust](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-rust)** - Key Vault 机密存储
- **[microsoft/azure-storage-blob-rust](https://officialskills.sh/microsoft/skills/azure-storage-blob-rust)** - Blob 对象存储客户端

### TypeScript 技能 <a id="typescript-skills"></a>

- **[microsoft/azure-ai-contentsafety-ts](https://officialskills.sh/microsoft/skills/azure-ai-contentsafety-ts)** - 文本和图像内容安全
- **[microsoft/azure-ai-document-intelligence-ts](https://officialskills.sh/microsoft/skills/azure-ai-document-intelligence-ts)** - 文档文本和表格提取
- **[microsoft/azure-ai-projects-ts](https://officialskills.sh/microsoft/skills/azure-ai-projects-ts)** - AI Foundry 项目客户端和智能体
- **[microsoft/azure-ai-translation-ts](https://officialskills.sh/microsoft/skills/azure-ai-translation-ts)** - 文本和文档翻译
- **[microsoft/azure-ai-voicelive-ts](https://officialskills.sh/microsoft/skills/azure-ai-voicelive-ts)** - 实时双向语音 AI
- **[microsoft/azure-appconfiguration-ts](https://officialskills.sh/microsoft/skills/azure-appconfiguration-ts)** - 应用配置、功能标志和动态刷新
- **[microsoft/azure-cosmos-ts](https://officialskills.sh/microsoft/skills/azure-cosmos-ts)** - Cosmos DB NoSQL CRUD 操作和查询
- **[microsoft/azure-eventhub-ts](https://officialskills.sh/microsoft/skills/azure-eventhub-ts)** - 高吞吐量事件流
- **[microsoft/azure-identity-ts](https://officialskills.sh/microsoft/skills/azure-identity-ts)** - Microsoft Entra ID 身份验证
- **[microsoft/azure-keyvault-keys-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-keys-ts)** - 加密密钥管理
- **[microsoft/azure-keyvault-secrets-ts](https://officialskills.sh/microsoft/skills/azure-keyvault-secrets-ts)** - 机密存储和检索
- **[microsoft/azure-microsoft-playwright-testing-ts](https://officialskills.sh/microsoft/skills/azure-microsoft-playwright-testing-ts)** - 在 Azure 上大规模运行 Playwright 测试
- **[microsoft/azure-monitor-opentelemetry-ts](https://officialskills.sh/microsoft/skills/azure-monitor-opentelemetry-ts)** - Application Insights 跟踪和指标
- **[microsoft/azure-postgres-ts](https://officialskills.sh/microsoft/skills/azure-postgres-ts)** - 连接 PostgreSQL Flexible Server
- **[microsoft/azure-search-documents-ts](https://officialskills.sh/microsoft/skills/azure-search-documents-ts)** - 带语义排名的向量/混合搜索
- **[microsoft/azure-servicebus-ts](https://officialskills.sh/microsoft/skills/azure-servicebus-ts)** - 使用队列和主题进行消息传递
- **[microsoft/azure-storage-blob-ts](https://officialskills.sh/microsoft/skills/azure-storage-blob-ts)** - Blob 上传、下载和管理
- **[microsoft/azure-storage-file-share-ts](https://officialskills.sh/microsoft/skills/azure-storage-file-share-ts)** - SMB 文件共享操作
- **[microsoft/azure-storage-queue-ts](https://officialskills.sh/microsoft/skills/azure-storage-queue-ts)** - 队列消息操作
- **[microsoft/azure-web-pubsub-ts](https://officialskills.sh/microsoft/skills/azure-web-pubsub-ts)** - 实时 WebSocket 发布/订阅消息传递
- **[microsoft/frontend-ui-dark-ts](https://officialskills.sh/microsoft/skills/frontend-ui-dark-ts)** - 使用 Tailwind 和动画构建深色主题 React 界面
- **[microsoft/m365-agents-ts](https://officialskills.sh/microsoft/skills/m365-agents-ts)** - M365、Teams 和 Copilot Studio 智能体
- **[microsoft/react-flow-node-ts](https://officialskills.sh/microsoft/skills/react-flow-node-ts)** - 使用 Zustand 构建 React Flow 节点组件
- **[microsoft/zustand-store-ts](https://officialskills.sh/microsoft/skills/zustand-store-ts)** - 带中间件模式的 Zustand store

</details>

<details>
<summary><h3 id="skills-by-falai-team" style="display:inline">fal.ai 团队技能</h3></summary>

- **[fal-ai-community/fal-3d](https://officialskills.sh/fal-ai-community/skills/fal-3d)** - 根据文本或图像生成 3D 模型
- **[fal-ai-community/fal-audio](https://officialskills.sh/fal-ai-community/skills/fal-audio)** - 使用 fal.ai 音频模型进行文本转语音和语音转文本
- **[fal-ai-community/fal-generate](https://officialskills.sh/fal-ai-community/skills/fal-generate)** - 使用 fal.ai AI 模型生成图像和视频
- **[fal-ai-community/fal-image-edit](https://officialskills.sh/fal-ai-community/skills/fal-image-edit)** - 使用风格迁移和对象移除进行 AI 图像编辑
- **[fal-ai-community/fal-kling-o3](https://officialskills.sh/fal-ai-community/skills/fal-kling-o3)** - 使用 Kling O3 生成图像和视频——Kling 最强大的模型系列
- **[fal-ai-community/fal-lip-sync](https://officialskills.sh/fal-ai-community/skills/fal-lip-sync)** - 创建人物讲解视频并将音频口型同步到视频
- **[fal-ai-community/fal-platform](https://officialskills.sh/fal-ai-community/skills/fal-platform)** - 用于模型管理、定价和用量跟踪的平台 API
- **[fal-ai-community/fal-realtime](https://officialskills.sh/fal-ai-community/skills/fal-realtime)** - 实时和流式 AI 图像生成
- **[fal-ai-community/fal-restore](https://officialskills.sh/fal-ai-community/skills/fal-restore)** - 修复并改善图像质量——去模糊、降噪、修复人脸、恢复文档
- **[fal-ai-community/fal-train](https://officialskills.sh/fal-ai-community/skills/fal-train)** - 在 fal.ai 上训练自定义 AI 模型（LoRA），实现个性化图像生成
- **[fal-ai-community/fal-tryon](https://officialskills.sh/fal-ai-community/skills/fal-tryon)** - 虚拟试穿——查看衣服穿在人物身上的效果
- **[fal-ai-community/fal-upscale](https://officialskills.sh/fal-ai-community/skills/fal-upscale)** - 使用 AI 放大并增强图像和视频分辨率
- **[fal-ai-community/fal-video-edit](https://officialskills.sh/fal-ai-community/skills/fal-video-edit)** - 使用 AI 编辑现有视频——重新混合风格、放大、移除背景、添加音频
- **[fal-ai-community/fal-vision](https://officialskills.sh/fal-ai-community/skills/fal-vision)** - 分析图像——分割对象、检测、OCR、描述和视觉问答
- **[fal-ai-community/fal-workflow](https://officialskills.sh/fal-ai-community/skills/fal-workflow)** - 生成用于串联 AI 模型的工作流 JSON 文件

</details>

<details>
<summary><h3 id="skills-by-wordpress-development-team" style="display:inline">WordPress 开发团队技能</h3></summary>

- **[WordPress/wordpress-router](https://officialskills.sh/WordPress/skills/wordpress-router)** - 对 WordPress 仓库分类并转入正确的工作流
- **[WordPress/wp-project-triage](https://officialskills.sh/WordPress/skills/wp-project-triage)** - 自动检测项目类型、工具链和版本
- **[WordPress/wp-block-development](https://officialskills.sh/WordPress/skills/wp-block-development)** - Gutenberg 区块：block.json、属性、渲染和弃用
- **[WordPress/wp-block-themes](https://officialskills.sh/WordPress/skills/wp-block-themes)** - 区块主题：theme.json、模板、模式和样式变体
- **[WordPress/wp-plugin-development](https://officialskills.sh/WordPress/skills/wp-plugin-development)** - 插件架构、钩子、设置 API 和安全性
- **[WordPress/wp-rest-api](https://officialskills.sh/WordPress/skills/wp-rest-api)** - REST API 路由/端点、架构、身份验证和响应塑形
- **[WordPress/wp-interactivity-api](https://officialskills.sh/WordPress/skills/wp-interactivity-api)** - 使用 data-wp-* 指令和 store 实现前端交互
- **[WordPress/wp-abilities-api](https://officialskills.sh/WordPress/skills/wp-abilities-api)** - 基于功能的权限和 REST API 身份验证
- **[WordPress/wp-wpcli-and-ops](https://officialskills.sh/WordPress/skills/wp-wpcli-and-ops)** - WP-CLI 命令、自动化、多站点和搜索替换
- **[WordPress/wp-performance](https://officialskills.sh/WordPress/skills/wp-performance)** - 性能分析、缓存、数据库优化和 Server-Timing
- **[WordPress/wp-phpstan](https://officialskills.sh/WordPress/skills/wp-phpstan)** - 针对 WordPress 项目的 PHPStan 静态分析
- **[WordPress/wp-playground](https://officialskills.sh/WordPress/skills/wp-playground)** - 用于即时本地环境的 WordPress Playground
- **[WordPress/wpds](https://officialskills.sh/WordPress/skills/wpds)** - WordPress 设计系统

</details>

<details>
<summary><h3 id="skills-by-openai" style="display:inline">OpenAI 技能</h3></summary>

来自 OpenAI 技能仓库的官方精选技能。

- **[openai/cloudflare-deploy](https://officialskills.sh/openai/skills/cloudflare-deploy)** - 使用 Workers、Pages 和平台服务将应用部署到 Cloudflare
- **[openai/develop-web-game](https://officialskills.sh/openai/skills/develop-web-game)** - 使用 Playwright 和时间步进迭代构建并测试网页游戏
- **[openai/doc](https://officialskills.sh/openai/skills/doc)** - 读取、创建和编辑 .docx 文档，同时保留格式与布局
- **[openai/gh-address-comments](https://officialskills.sh/openai/skills/gh-address-comments)** - 通过 CLI 处理开放 GitHub PR 中的审查和问题评论
- **[openai/gh-fix-ci](https://officialskills.sh/openai/skills/gh-fix-ci)** - 通过检查日志调试并修复失败的 GitHub Actions PR 检查
- **[openai/imagegen](https://officialskills.sh/openai/skills/imagegen)** - 使用 OpenAI 的 Image API 为项目生成和编辑图像
- **[openai/jupyter-notebook](https://officialskills.sh/openai/skills/jupyter-notebook)** - 为实验和教程创建整洁且可复现的 Jupyter 笔记本
- **[openai/linear](https://officialskills.sh/openai/skills/linear)** - 在 Linear 中管理问题、项目和团队工作流
- **[openai/netlify-deploy](https://officialskills.sh/openai/skills/netlify-deploy)** - 通过 CLI 身份验证、关联和环境支持自动化 Netlify 部署
- **[openai/notion-knowledge-capture](https://officialskills.sh/openai/skills/notion-knowledge-capture)** - 将对话转换为结构化、可搜索的 Notion wiki 条目
- **[openai/notion-meeting-intelligence](https://officialskills.sh/openai/skills/notion-meeting-intelligence)** - 提取 Notion 上下文并定制议程，为会议做准备
- **[openai/notion-research-documentation](https://officialskills.sh/openai/skills/notion-research-documentation)** - 研究 Notion 内容并将发现综合为结构化简报
- **[openai/notion-spec-to-implementation](https://officialskills.sh/openai/skills/notion-spec-to-implementation)** - 将 Notion 规范转换为相互链接的实施计划和任务
- **[openai/openai-docs](https://officialskills.sh/openai/skills/openai-docs)** - 根据 OpenAI 开发者文档提供权威指导
- **[openai/pdf](https://officialskills.sh/openai/skills/pdf)** - 读取、创建和审阅 PDF，同时保持布局和视觉格式完整
- **[openai/playwright](https://officialskills.sh/openai/skills/playwright)** - 自动执行真实浏览器交互，用于导航、填写表单和抓取
- **[openai/render-deploy](https://officialskills.sh/openai/skills/render-deploy)** - 通过基于 Git 的服务将应用部署到 Render 云平台
- **[openai/screenshot](https://officialskills.sh/openai/skills/screenshot)** - 跨操作系统平台截取桌面、应用窗口或像素区域
- **[openai/security-best-practices](https://officialskills.sh/openai/skills/security-best-practices)** - 审查代码中的特定语言安全漏洞
- **[openai/security-ownership-map](https://officialskills.sh/openai/skills/security-ownership-map)** - 绘制人员与文件的所有权关系、计算巴士因子并识别风险
- **[openai/security-threat-model](https://officialskills.sh/openai/skills/security-threat-model)** - 生成仓库专属威胁模型并识别信任边界
- **[openai/sentry](https://officialskills.sh/openai/skills/sentry)** - 检查 Sentry 问题、总结生产错误并提取健康数据
- **[openai/sora](https://officialskills.sh/openai/skills/sora)** - 通过 OpenAI 的 Sora API 生成、混剪和管理短视频片段
- **[openai/speech](https://officialskills.sh/openai/skills/speech)** - 使用 OpenAI API 和内置语音根据文本生成语音音频
- **[openai/spreadsheet](https://officialskills.sh/openai/skills/spreadsheet)** - 使用公式创建、编辑、分析和可视化电子表格
- **[openai/transcribe](https://officialskills.sh/openai/skills/transcribe)** - 将音频文件转录为文本，并可选择说话人分离
- **[openai/vercel-deploy](https://officialskills.sh/openai/skills/vercel-deploy)** - 使用预览或生产选项将应用和网站部署到 Vercel
- **[openai/yeet](https://officialskills.sh/openai/skills/yeet)** - 通过 CLI 暂存、提交、推送代码并创建 GitHub 拉取请求
- **[openai/aspnet-core](https://officialskills.sh/openai/skills/aspnet-core)** - 构建、审查和设计 ASP.NET Core 应用（Blazor、MVC、Minimal API 等）
- **[openai/chatgpt-apps](https://officialskills.sh/openai/skills/chatgpt-apps)** - 使用 MCP 服务器和小组件 UI 构建、搭建并排查 ChatGPT Apps SDK 应用
- **[openai/figma](https://officialskills.sh/openai/skills/figma)** - 使用 Figma MCP 服务器获取设计上下文，并将节点转换为生产代码
- **[openai/figma-code-connect-components](https://officialskills.sh/openai/skills/figma-code-connect-components)** - 使用 Code Connect 将 Figma 设计组件与代码组件关联
- **[openai/figma-create-design-system-rules](https://officialskills.sh/openai/skills/figma-create-design-system-rules)** - 使用 Figma MCP 服务器实现 Figma 设计的规则
- **[openai/figma-create-new-file](https://officialskills.sh/openai/skills/figma-create-new-file)** - 创建新的空白 Figma 文件或 FigJam 文件
- **[openai/figma-generate-design](https://officialskills.sh/openai/skills/figma-generate-design)** - 使用设计系统令牌将应用页面和布局转换为 Figma 设计
- **[openai/figma-generate-library](https://officialskills.sh/openai/skills/figma-generate-library)** - 根据代码库在 Figma 中构建或更新专业级设计系统
- **[openai/figma-implement-design](https://officialskills.sh/openai/skills/figma-implement-design)** - 将 Figma 设计转换为视觉效果 1:1 的生产就绪代码
- **[openai/figma-use](https://officialskills.sh/openai/skills/figma-use)** - 每次调用 use_figma 工具前的必备技能——在 Figma 上下文中执行写入/读取操作
- **[openai/frontend-skill](https://officialskills.sh/openai/skills/frontend-skill)** - 以克制的构图创建视觉效果出众的落地页、网站和应用 UI
- **[openai/playwright-interactive](https://officialskills.sh/openai/skills/playwright-interactive)** - 通过 js_repl 持续交互浏览器和 Electron，以迭代调试 UI
- **[openai/slides](https://officialskills.sh/openai/skills/slides)** - 使用 PptxGenJS 创建和编辑 .pptx 演示文稿
- **[openai/winui-app](https://officialskills.sh/openai/skills/winui-app)** - 使用 C# 和 Windows App SDK 搭建并开发现代 WinUI 3 桌面应用

</details>

<details>
<summary><h3 id="skills-by-figma" style="display:inline">Figma 技能</h3></summary>

来自 Figma MCP 服务器指南的官方技能。

- **[figma/figma-code-connect-components](https://officialskills.sh/figma/skills/figma-code-connect-components)** - 使用 Code Connect 将 Figma 设计组件与代码组件关联
- **[figma/figma-create-design-system-rules](https://officialskills.sh/figma/skills/figma-create-design-system-rules)** - 为 Figma 到代码的工作流生成项目专属设计系统规则
- **[figma/figma-create-new-file](https://officialskills.sh/figma/skills/figma-create-new-file)** - 创建新的空白 Figma Design 或 FigJam 文件
- **[figma/figma-generate-design](https://officialskills.sh/figma/skills/figma-generate-design)** - 使用设计系统组件，根据代码或描述在 Figma 中构建或更新界面
- **[figma/figma-generate-library](https://officialskills.sh/figma/skills/figma-generate-library)** - 根据代码库在 Figma 中构建或更新设计系统库
- **[figma/figma-implement-design](https://officialskills.sh/figma/skills/figma-implement-design)** - 将 Figma 设计转换为生产就绪的应用代码，并达到 1:1 的还原度
- **[figma/figma-use](https://officialskills.sh/figma/skills/figma-use)** - 运行 Figma Plugin API 脚本，以写入画布、执行检查、管理变量和开展设计系统工作

</details>

<details>
<summary><h3 id="marketing-skills-by-corey-haines" style="display:inline">Corey Haines 的营销技能</h3></summary>

[Corey Haines](https://github.com/coreyhaines31) 提供的官方营销技能，覆盖完整 SaaS 营销技术栈，从 SEO 和文案写作到增长、CRO 和付费获客。

- **[coreyhaines31/ab-testing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ab-testing)** - 为任意数字化体验规划并实施 A/B 测试或实验
- **[coreyhaines31/ad-creative](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ad-creative)** - 生成并迭代广告创意，包括标题、描述和正文
- **[coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo)** - 优化内容，使其出现在 AI 生成的答案和 LLM 搜索结果中
- **[coreyhaines31/analytics](https://github.com/coreyhaines31/marketingskills/tree/main/skills/analytics)** - 设置并审计分析跟踪和测量管道
- **[coreyhaines31/churn-prevention](https://github.com/coreyhaines31/marketingskills/tree/main/skills/churn-prevention)** - 构建取消流程和挽留优惠，并挽回支付失败的用户
- **[coreyhaines31/cold-email](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cold-email)** - 撰写能够促成转化的 B2B 冷邮件和后续邮件序列
- **[coreyhaines31/competitors](https://github.com/coreyhaines31/marketingskills/tree/main/skills/competitors)** - 构建面向 SEO 的竞品比较页和替代方案落地页
- **[coreyhaines31/content-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/content-strategy)** - 制定内容策略，确定优先考虑的主题和格式
- **[coreyhaines31/copy-editing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing)** - 编辑并改进现有营销文案，使其更清晰、更有影响力
- **[coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting)** - 为落地页、主页和广告撰写或改写营销文案
- **[coreyhaines31/emails](https://github.com/coreyhaines31/marketingskills/tree/main/skills/emails)** - 构建电子邮件序列、滴灌营销活动和生命周期邮件流程
- **[coreyhaines31/free-tools](https://github.com/coreyhaines31/marketingskills/tree/main/skills/free-tools)** - 规划并构建用于获客且具有 SEO 价值的免费工具
- **[coreyhaines31/launch](https://github.com/coreyhaines31/marketingskills/tree/main/skills/launch)** - 规划产品发布、功能公告和上市策略
- **[coreyhaines31/marketing-ideas](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-ideas)** - 为 SaaS 产品生成营销策略和营销活动创意
- **[coreyhaines31/marketing-psychology](https://github.com/coreyhaines31/marketingskills/tree/main/skills/marketing-psychology)** - 将心理学原理和行为科学应用于文案与设计
- **[coreyhaines31/onboarding](https://github.com/coreyhaines31/marketingskills/tree/main/skills/onboarding)** - 优化注册后的引导流程和用户激活，以缩短价值实现时间
- **[coreyhaines31/cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cro)** - 提高任意营销页面或表单的转化率，包括主页、落地页和联系表单
- **[coreyhaines31/ads](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ads)** - 在 Google、Meta、LinkedIn 等平台创建并优化付费营销活动
- **[coreyhaines31/paywalls](https://github.com/coreyhaines31/marketingskills/tree/main/skills/paywalls)** - 设计并优化升级页面、付费墙和追加销售弹窗
- **[coreyhaines31/popups](https://github.com/coreyhaines31/marketingskills/tree/main/skills/popups)** - 创建并优化弹窗、模态框和滑入式窗口以提高转化率
- **[coreyhaines31/pricing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing)** - 制定 SaaS 产品的定价、套餐和变现策略
- **[coreyhaines31/product-marketing](https://github.com/coreyhaines31/marketingskills/tree/main/skills/product-marketing)** - 创建并维护产品营销上下文文档，确保信息传达一致
- **[coreyhaines31/programmatic-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/programmatic-seo)** - 为大规模内容生成构建由 SEO 驱动的页面模板
- **[coreyhaines31/referrals](https://github.com/coreyhaines31/marketingskills/tree/main/skills/referrals)** - 设计并优化推荐、联盟和口碑营销计划
- **[coreyhaines31/revops](https://github.com/coreyhaines31/marketingskills/tree/main/skills/revops)** - 简化营收运营、潜在客户生命周期以及营销到销售的交接
- **[coreyhaines31/sales-enablement](https://github.com/coreyhaines31/marketingskills/tree/main/skills/sales-enablement)** - 创建推介演示文稿、单页简介、异议处理文档和演示脚本
- **[coreyhaines31/schema](https://github.com/coreyhaines31/marketingskills/tree/main/skills/schema)** - 添加并优化 Schema 标记和结构化数据，以改善 SEO
- **[coreyhaines31/seo-audit](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit)** - 审计并诊断网站上的技术 SEO 和页面 SEO 问题
- **[coreyhaines31/signup](https://github.com/coreyhaines31/marketingskills/tree/main/skills/signup)** - 优化注册、登记和试用激活流程以提高转化率
- **[coreyhaines31/site-architecture](https://github.com/coreyhaines31/marketingskills/tree/main/skills/site-architecture)** - 规划并重组页面层级、导航和 URL 结构
- **[coreyhaines31/social](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social)** - 为 LinkedIn、Twitter/X 和 Instagram 创建并安排社交媒体内容

</details>

<details>
<summary><h3 id="advertising-skills-by-kim-barrett" style="display:inline">Kim Barrett 的广告技能</h3></summary>

Kim Barrett 提供的效果广告技能，分为基础、文案主管、运营系统、编排器和 QA，涵盖用户画像、报价设计、Schwartz 风格文案、创意测试和完整营销漏斗编排。

- **[realkimbarrett/avatar-extraction](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/foundations/avatar-extraction)** - 准确界定买家是谁、他们想要什么、尝试过什么，以及哪些因素影响他们的决策
- **[realkimbarrett/offer-extraction](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/foundations/offer-extraction)** - 将产品或服务打造成有吸引力且高转化的报价
- **[realkimbarrett/schwartz-awareness-mapper](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/schwartz-awareness-mapper)** - 判断受众的认知阶段并选择恰当的信息传达方式
- **[realkimbarrett/mechanism-builder](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/mechanism-builder)** - 通过独特机制解释你的方案为何有效、其他方案为何失败
- **[realkimbarrett/headline-matrix](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/headline-matrix)** - 从不同角度生成高效标题变体
- **[realkimbarrett/objection-crusher](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/copy-chief/objection-crusher)** - 识别并消除买家的异议和犹豫
- **[realkimbarrett/ad-angle-multiplier](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/ad-angle-multiplier)** - 将核心创意扩展为多个不同的广告角度，用于创意测试
- **[realkimbarrett/scroll-stopping-creative](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/scroll-stopping-creative)** - 设计能在头 3 秒吸引注意力的广告概念
- **[realkimbarrett/conversion-path-builder](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/conversion-path-builder)** - 设计从点击到转化和预约通话的最佳漏斗
- **[realkimbarrett/performance-diagnosis](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/operator-os/performance-diagnosis)** - 诊断营销活动表现不佳的原因——转化率低、CPL 高或广告效果差
- **[realkimbarrett/full-funnel-campaign-orchestrator](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/orchestrators/full-funnel-campaign-orchestrator)** - 协调所有技能，端到端构建完整的广告和营销漏斗活动
- **[realkimbarrett/generic-language-killer](https://github.com/realkimbarrett/advertising-skills/tree/main/skills/qa/generic-language-killer)** - 去除含糊、官腔或听起来像 AI 的措辞，改用清晰、具体、自然的表达

</details>

<details>
<summary><h3 id="skills-by-binance" style="display:inline">Binance 技能</h3></summary>

Binance 团队提供的官方 Web3 和交易技能，涵盖加密货币市场数据、链上分析、代币安全审计以及通过 Binance API 进行现货交易。

- **[binance/crypto-market-rank](https://officialskills.sh/binance/skills/crypto-market-rank)** - 查询加密货币市场排名，包括热门代币、聪明钱流入、迷因币排名和顶级交易者盈亏榜
- **[binance/meme-rush](https://officialskills.sh/binance/skills/meme-rush)** - 跟踪发射平台（Pump.fun、Four.meme）的实时迷因代币列表，以及按净流入排名的 AI 热门市场主题
- **[binance/query-address-info](https://officialskills.sh/binance/skills/query-address-info)** - 获取 BSC、Base 或 Solana 上任意钱包地址的所有代币持仓和投资组合仓位
- **[binance/query-token-audit](https://officialskills.sh/binance/skills/query-token-audit)** - 审计代币安全性，检测 BSC、Base、Solana 和 Ethereum 上的骗局、蜜罐和恶意合约
- **[binance/query-token-info](https://officialskills.sh/binance/skills/query-token-info)** - 按关键字或合约地址搜索代币，并获取元数据、实时市场数据和 K 线图
- **[binance/trading-signal](https://officialskills.sh/binance/skills/trading-signal)** - 监控 Solana 和 BSC 链上的聪明钱买卖信号，包括价格、最大涨幅和退出率数据
- **[binance/spot](https://officialskills.sh/binance/skills/spot)** - 通过 API 密钥身份验证在 Binance 上下达并管理现货交易订单，支持主网和测试网

</details>

<details>
<summary><h3 id="skills-by-apollo-graphql" style="display:inline">Apollo GraphQL 技能</h3></summary>

Apollo GraphQL 团队提供的官方技能，用于构建 GraphQL 客户端、服务器、联邦超级图和 Apollo Router。

- **[apollographql/apollo-client](https://officialskills.sh/apollographql/skills/apollo-client)** - 使用 Apollo Client 4 构建 React 应用
- **[apollographql/apollo-connectors](https://officialskills.sh/apollographql/skills/apollo-connectors)** - 使用 Apollo Connectors 将 REST API 集成到 GraphQL 超级图中
- **[apollographql/apollo-federation](https://officialskills.sh/apollographql/skills/apollo-federation)** - 编写 Apollo Federation 2 子图架构并将其组合为超级图
- **[apollographql/apollo-kotlin](https://officialskills.sh/apollographql/skills/apollo-kotlin)** - 面向 Android、JVM 和 Kotlin Multiplatform 项目的 GraphQL 客户端
- **[apollographql/apollo-mcp-server](https://officialskills.sh/apollographql/skills/apollo-mcp-server)** - 通过模型上下文协议将 AI 智能体连接到 GraphQL API
- **[apollographql/apollo-router](https://officialskills.sh/apollographql/skills/apollo-router)** - 面向基于 Rust 的 Apollo Router 的版本感知配置生成器
- **[apollographql/apollo-router-plugin-creator](https://officialskills.sh/apollographql/skills/apollo-router-plugin-creator)** - 为 Apollo Router 编写原生 Rust 插件
- **[apollographql/apollo-server](https://officialskills.sh/apollographql/skills/apollo-server)** - 使用 Apollo Server 5 构建 GraphQL 服务器
- **[apollographql/graphql-operations](https://officialskills.sh/apollographql/skills/graphql-operations)** - 遵循最佳实践编写 GraphQL 查询、变更和订阅
- **[apollographql/graphql-schema](https://officialskills.sh/apollographql/skills/graphql-schema)** - 用于设计清晰、可演进 GraphQL 架构的参考指南
- **[apollographql/rover](https://officialskills.sh/apollographql/skills/rover)** - 用于管理 Apollo GraphOS 中 GraphQL 架构的 CLI 工具
- **[apollographql/rust-best-practices](https://officialskills.sh/apollographql/skills/rust-best-practices)** - 根据 Apollo GraphQL 内部手册整理的 Rust 编码指南
- **[apollographql/skill-creator](https://officialskills.sh/apollographql/skills/skill-creator)** - 创建并组织专注于 Apollo GraphQL 的智能体技能

</details>

<details>
<summary><h3 id="skills-by-auth0" style="display:inline">Auth0 技能</h3></summary>

Auth0 团队提供的官方身份验证和身份管理技能，涵盖常用框架的 SDK，以及多重身份验证、迁移和快速入门检测工作流。

- **[auth0/auth0-android](https://officialskills.sh/auth0/skills/auth0-android)** - 使用 Auth0 SDK 为原生 Android 应用添加身份验证
- **[auth0/auth0-angular](https://officialskills.sh/auth0/skills/auth0-angular)** - 使用 @auth0/auth0-angular 为 Angular 应用添加身份验证
- **[auth0/auth0-aspnetcore-api](https://officialskills.sh/auth0/skills/auth0-aspnetcore-api)** - 为 ASP.NET Core API 添加 JWT 访问令牌验证
- **[auth0/auth0-express](https://officialskills.sh/auth0/skills/auth0-express)** - 为 Express.js 应用添加基于会话的身份验证
- **[auth0/auth0-fastify](https://officialskills.sh/auth0/skills/auth0-fastify)** - 为 Fastify Web 应用添加基于会话的身份验证
- **[auth0/auth0-fastify-api](https://officialskills.sh/auth0/skills/auth0-fastify-api)** - 使用 JWT ****** 验证保护 Fastify API 端点
- **[auth0/auth0-mfa](https://officialskills.sh/auth0/skills/auth0-mfa)** - 为 Auth0 驱动的应用添加多重身份验证
- **[auth0/auth0-migration](https://officialskills.sh/auth0/skills/auth0-migration)** - 从其他提供商将用户和身份验证流程迁移到 Auth0
- **[auth0/auth0-nextjs](https://officialskills.sh/auth0/skills/auth0-nextjs)** - 为 Next.js 应用添加身份验证
- **[auth0/auth0-nuxt](https://officialskills.sh/auth0/skills/auth0-nuxt)** - 使用加密 Cookie 会话为 Nuxt 3/4 应用添加 Auth0 身份验证
- **[auth0/auth0-quickstart](https://officialskills.sh/auth0/skills/auth0-quickstart)** - 自动检测框架并搭建 Auth0 集成
- **[auth0/auth0-react](https://officialskills.sh/auth0/skills/auth0-react)** - 使用 @auth0/auth0-react 为 React SPA 添加身份验证
- **[auth0/auth0-react-native](https://officialskills.sh/auth0/skills/auth0-react-native)** - 为 React Native 和 Expo 移动应用添加身份验证
- **[auth0/auth0-vue](https://officialskills.sh/auth0/skills/auth0-vue)** - 为 Vue.js 应用添加身份验证

</details>

<details>
<summary><h3 id="skills-by-brave" style="display:inline">Brave 技能</h3></summary>

Brave 团队提供的官方技能，用于访问 Brave Search API，包括网页、图像、视频、新闻和本地兴趣点数据。

- **[brave/answers](https://officialskills.sh/brave/skills/answers)** - 以实时 Web 搜索结果为依据的 AI 生成答案
- **[brave/bx](https://officialskills.sh/brave/skills/bx)** - 专为 AI 智能体打造的 Web 搜索 CLI 工具
- **[brave/images-search](https://officialskills.sh/brave/skills/images-search)** - 使用 Brave Search API 搜索图像
- **[brave/llm-context](https://officialskills.sh/brave/skills/llm-context)** - 从 Brave Search 返回预先提取的网页内容（文本、表格、代码）
- **[brave/local-descriptions](https://officialskills.sh/brave/skills/local-descriptions)** - 获取地点的 AI 生成文本描述
- **[brave/local-pois](https://officialskills.sh/brave/skills/local-pois)** - 检索本地商家和兴趣点的详细信息
- **[brave/news-search](https://officialskills.sh/brave/skills/news-search)** - 通过文章元数据搜索 Brave 新闻索引
- **[brave/spellcheck](https://officialskills.sh/brave/skills/spellcheck)** - 检查搜索查询中的拼写错误并获取更正建议
- **[brave/suggest](https://officialskills.sh/brave/skills/suggest)** - 通过 Brave Search API 查询自动补全建议
- **[brave/videos-search](https://officialskills.sh/brave/skills/videos-search)** - 通过 Brave Search API 搜索全网视频
- **[brave/web-search](https://officialskills.sh/brave/skills/web-search)** - 通过 Brave Search API 搜索网页并返回排名结果

</details>

<details>
<summary><h3 id="skills-by-browserbase" style="display:inline">Browserbase 技能</h3></summary>

Browserbase 团队提供的官方浏览器自动化技能，涵盖无头浏览、Cookie 同步、无服务器函数和对抗性 UI 测试。

- **[browserbase/browser](https://officialskills.sh/browserbase/skills/browser)** - 通过自然语言 CLI 命令自动执行网页浏览器交互
- **[browserbase/browserbase-cli](https://officialskills.sh/browserbase/skills/browserbase-cli)** - Browserbase 平台 CLI 封装工具
- **[browserbase/cookie-sync](https://officialskills.sh/browserbase/skills/cookie-sync)** - 将本地 Chrome 中的 Cookie 导出到 Browserbase 持久化上下文
- **[browserbase/fetch](https://officialskills.sh/browserbase/skills/fetch)** - 通过 Browserbase API 获取 HTML、JSON、标头和状态码
- **[browserbase/functions](https://officialskills.sh/browserbase/skills/functions)** - 将浏览器自动化脚本部署为无服务器云函数
- **[browserbase/search](https://officialskills.sh/browserbase/skills/search)** - 通过 Browserbase API 搜索网页并获取结构化结果
- **[browserbase/ui-test](https://officialskills.sh/browserbase/skills/ui-test)** - 通过在真实浏览器中分析 Git 差异来运行对抗性 UI 测试

</details>

<details>
<summary><h3 id="skills-by-coderabbit" style="display:inline">CodeRabbit 技能</h3></summary>

CodeRabbit 团队提供的官方 AI 代码审查技能。

- **[coderabbitai/autofix](https://officialskills.sh/coderabbitai/skills/autofix)** - 从 GitHub PR 获取未解决的 CodeRabbit 审查评论并应用修复
- **[coderabbitai/code-review](https://officialskills.sh/coderabbitai/skills/code-review)** - 通过 CodeRabbit CLI 运行 AI 驱动的代码审查

</details>

<details>
<summary><h3 id="skills-by-coinbase" style="display:inline">Coinbase 技能</h3></summary>

Coinbase 团队提供的官方钱包、支付和交易技能，涵盖 USDC 转账、链上查询、x402 付费 API 和 Base 交易。

- **[coinbase/authenticate-wallet](https://officialskills.sh/coinbase/skills/authenticate-wallet)** - 通过电子邮件 OTP 登录 Coinbase 支付钱包
- **[coinbase/fund](https://officialskills.sh/coinbase/skills/fund)** - 通过 Coinbase Onramp 将 USDC 充值到 Coinbase 驱动的钱包
- **[coinbase/monetize-service](https://officialskills.sh/coinbase/skills/monetize-service)** - 搭建一个使用 x402 按请求收取 USDC 的 Express 服务器
- **[coinbase/pay-for-service](https://officialskills.sh/coinbase/skills/pay-for-service)** - 通过自动 USDC 支付调用采用 x402 协议的付费 API 端点
- **[coinbase/query-onchain-data](https://officialskills.sh/coinbase/skills/query-onchain-data)** - 查询 Base 上解码后的链上数据（事件、交易、区块）
- **[coinbase/search-for-service](https://officialskills.sh/coinbase/skills/search-for-service)** - 搜索和浏览 x402 bazaar 市场
- **[coinbase/send-usdc](https://officialskills.sh/coinbase/skills/send-usdc)** - 在 Base 上向任意 Ethereum 地址或 ENS 名称发送 USDC
- **[coinbase/trade](https://officialskills.sh/coinbase/skills/trade)** - 使用 CDP Swap API 在 Base 上兑换和交易代币
- **[coinbase/x402](https://officialskills.sh/coinbase/skills/x402)** - 使用 x402 支付协议发现并调用付费 API 端点

</details>


<details>
<summary><h3 id="skills-by-datadog-labs" style="display:inline">Datadog Labs 技能</h3></summary>

Datadog Labs 提供的可观测性技能，通过 pup CLI 支持 APM、日志、监视器和 LLM 可观测性工作流。

- **[datadog-labs/dd-apm](https://officialskills.sh/datadog-labs/skills/dd-apm)** - 直接从编辑器查询 Datadog APM 数据
- **[datadog-labs/dd-docs](https://officialskills.sh/datadog-labs/skills/dd-docs)** - 通过针对 LLM 优化的文档索引查找 Datadog 文档
- **[datadog-labs/dd-llmo-eval-bootstrap](https://officialskills.sh/datadog-labs/skills/dd-llmo-eval-bootstrap)** - 分析生产环境 LLM 跟踪并生成评估器
- **[datadog-labs/dd-llmo-eval-trace-rca](https://officialskills.sh/datadog-labs/skills/dd-llmo-eval-trace-rca)** - 使用评估跟踪对 LLM 应用故障进行根因分析
- **[datadog-labs/dd-llmo-experiment-analyzer](https://officialskills.sh/datadog-labs/skills/dd-llmo-experiment-analyzer)** - 分析单个或对比式 LLM 实验结果
- **[datadog-labs/dd-logs](https://officialskills.sh/datadog-labs/skills/dd-logs)** - 通过 pup CLI 搜索、筛选和归档 Datadog 日志
- **[datadog-labs/dd-monitors](https://officialskills.sh/datadog-labs/skills/dd-monitors)** - 通过 pup CLI 管理 Datadog 监视器
- **[datadog-labs/dd-pup](https://officialskills.sh/datadog-labs/skills/dd-pup)** - 用于调用 Datadog API 的 Rust CLI（pup）

</details>

<details>
<summary><h3 id="skills-by-firebase" style="display:inline">Firebase 技能</h3></summary>

Firebase 团队提供的官方技能，涵盖设置、身份验证、Firestore、托管、Genkit AI SDK 和安全规则审计。

- **[firebase/developing-genkit-dart](https://officialskills.sh/firebase/skills/developing-genkit-dart)** - 使用 Genkit Dart SDK 构建 AI 应用
- **[firebase/developing-genkit-go](https://officialskills.sh/firebase/skills/developing-genkit-go)** - 使用 Genkit Go SDK 构建 AI 应用
- **[firebase/developing-genkit-js](https://officialskills.sh/firebase/skills/developing-genkit-js)** - 在 Node.js 中使用 Firebase Genkit 构建 AI 驱动的应用
- **[firebase/firebase-ai-logic-basics](https://officialskills.sh/firebase/skills/firebase-ai-logic-basics)** - 通过 Firebase AI Logic 在 Web 和移动应用中调用 Gemini 模型
- **[firebase/firebase-app-hosting-basics](https://officialskills.sh/firebase/skills/firebase-app-hosting-basics)** - 部署并管理全栈 Web 应用（Next.js、Angular 等）
- **[firebase/firebase-auth-basics](https://officialskills.sh/firebase/skills/firebase-auth-basics)** - 使用登录提供商设置 Firebase Authentication
- **[firebase/firebase-basics](https://officialskills.sh/firebase/skills/firebase-basics)** - 处理 Firebase CLI 安装、身份验证和日常工作流
- **[firebase/firebase-data-connect-basics](https://officialskills.sh/firebase/skills/firebase-data-connect-basics)** - 构建由 Cloud SQL 提供支持的 Firebase Data Connect 后端
- **[firebase/firebase-firestore-enterprise-native-mode](https://officialskills.sh/firebase/skills/firebase-firestore-enterprise-native-mode)** - 设置并使用 Firestore Enterprise Native Mode
- **[firebase/firebase-firestore-standard](https://officialskills.sh/firebase/skills/firebase-firestore-standard)** - Cloud Firestore Standard Edition 完整指南
- **[firebase/firebase-hosting-basics](https://officialskills.sh/firebase/skills/firebase-hosting-basics)** - 将静态网站、SPA 和微服务部署到 Firebase Hosting
- **[firebase/firebase-security-rules-auditor](https://officialskills.sh/firebase/skills/firebase-security-rules-auditor)** - 审计 Firestore 安全规则并标记高风险模式

</details>

<details>
<summary><h3 id="skills-by-flutter" style="display:inline">Flutter 技能</h3></summary>

Flutter 团队提供的官方技能，涵盖跨平台 Flutter 应用的布局、状态、导航、原生互操作、平台设置和测试。

- **[flutter/flutter-adding-home-screen-widgets](https://officialskills.sh/flutter/skills/flutter-adding-home-screen-widgets)** - 为 Android 和 iOS 上的 Flutter 应用添加主屏幕小组件
- **[flutter/flutter-animating-apps](https://officialskills.sh/flutter/skills/flutter-animating-apps)** - 实现动画效果、过渡和动态效果
- **[flutter/flutter-architecting-apps](https://officialskills.sh/flutter/skills/flutter-architecting-apps)** - 使用分层架构组织 Flutter 应用
- **[flutter/flutter-building-forms](https://officialskills.sh/flutter/skills/flutter-building-forms)** - 构建带验证和用户输入的 Flutter 表单
- **[flutter/flutter-building-layouts](https://officialskills.sh/flutter/skills/flutter-building-layouts)** - 使用约束系统（Row、Column、Stack）构建并修复布局
- **[flutter/flutter-building-plugins](https://officialskills.sh/flutter/skills/flutter-building-plugins)** - 创建连接 Dart 与平台代码的 Flutter 插件
- **[flutter/flutter-caching-data](https://officialskills.sh/flutter/skills/flutter-caching-data)** - 实现离线优先缓存策略
- **[flutter/flutter-embedding-native-views](https://officialskills.sh/flutter/skills/flutter-embedding-native-views)** - 在 Flutter 小组件中嵌入原生 Android、iOS 和 macOS 视图
- **[flutter/flutter-handling-concurrency](https://officialskills.sh/flutter/skills/flutter-handling-concurrency)** - 在后台 Dart isolate 中执行繁重任务
- **[flutter/flutter-handling-http-and-json](https://officialskills.sh/flutter/skills/flutter-handling-http-and-json)** - 处理 HTTP 请求和 JSON 序列化
- **[flutter/flutter-implementing-navigation-and-routing](https://officialskills.sh/flutter/skills/flutter-implementing-navigation-and-routing)** - 处理路由、导航和深层链接
- **[flutter/flutter-improving-accessibility](https://officialskills.sh/flutter/skills/flutter-improving-accessibility)** - 为屏幕阅读器和辅助技术配置 Flutter
- **[flutter/flutter-interoperating-with-native-apis](https://officialskills.sh/flutter/skills/flutter-interoperating-with-native-apis)** - 将 Flutter 与原生平台 API 桥接
- **[flutter/flutter-localizing-apps](https://officialskills.sh/flutter/skills/flutter-localizing-apps)** - 为多种语言和地区配置 Flutter
- **[flutter/flutter-managing-state](https://officialskills.sh/flutter/skills/flutter-managing-state)** - 管理本地小组件状态和共享应用状态
- **[flutter/flutter-reducing-app-size](https://officialskills.sh/flutter/skills/flutter-reducing-app-size)** - 测量并优化 Flutter 应用包大小
- **[flutter/flutter-setting-up-on-linux](https://officialskills.sh/flutter/skills/flutter-setting-up-on-linux)** - 为 Flutter 桌面开发配置 Linux 计算机
- **[flutter/flutter-setting-up-on-macos](https://officialskills.sh/flutter/skills/flutter-setting-up-on-macos)** - 为 Flutter 开发配置 macOS 计算机
- **[flutter/flutter-setting-up-on-windows](https://officialskills.sh/flutter/skills/flutter-setting-up-on-windows)** - 为 Flutter 开发配置 Windows 计算机
- **[flutter/flutter-testing-apps](https://officialskills.sh/flutter/skills/flutter-testing-apps)** - 实现单元、小组件和集成测试
- **[flutter/flutter-theming-apps](https://officialskills.sh/flutter/skills/flutter-theming-apps)** - 通过主题系统自定义 Flutter 应用外观
- **[flutter/flutter-working-with-databases](https://officialskills.sh/flutter/skills/flutter-working-with-databases)** - 使用 SQLite 构建结构化数据层

</details>

<details>
<summary><h3 id="product-manager-skills-by-dean-peters" style="display:inline">Dean Peters 的产品经理技能</h3></summary>

[Dean Peters](https://github.com/deanpeters) 提供的 46 项实战验证产品管理技能。界定问题、寻找机会、搭建验证实验，并迅速淘汰糟糕的方案——采用 Teresa Torres、Geoffrey Moore、Amazon、MITRE 等框架。

**Component Skills**

- **[deanpeters/acquisition-channel-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/acquisition-channel-advisor)** - 根据单位经济效益评估渠道，并建议扩大规模、测试或停止
- **[deanpeters/ai-shaped-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/ai-shaped-readiness-advisor)** - 评估五项能力中的自动化与重新设计机会
- **[deanpeters/altitude-horizon-framework](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/altitude-horizon-framework)** - 梳理从 PM 到总监的思维转变，涵盖范围、时间跨度和失败模式
- **[deanpeters/business-health-diagnostic](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/business-health-diagnostic)** - 诊断 SaaS 健康状况、识别危险信号并确定恢复行动的优先级
- **[deanpeters/company-research](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/company-research)** - 深入分析竞争对手或公司
- **[deanpeters/customer-journey-map](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-map)** - 使用 NNGroup 框架绘制跨触点的客户体验
- **[deanpeters/eol-message](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/eol-message)** - 妥善沟通产品或功能弃用
- **[deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis)** - 将计划转化为可测试假设，并设定可衡量的成功指标
- **[deanpeters/finance-metrics-quickref](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-metrics-quickref)** - 包含 32 项以上 SaaS 财务指标、公式和基准值的参考指南
- **[deanpeters/jobs-to-be-done](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/jobs-to-be-done)** - 使用 JTBD 框架了解客户目标
- **[deanpeters/pestel-analysis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pestel-analysis)** - 从政治、经济、社会、技术、环境和法律维度分析外部因素
- **[deanpeters/pol-probe](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe)** - 设计轻量验证实验来测试假设
- **[deanpeters/positioning-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-statement)** - 使用 Geoffrey Moore 的框架定义目标受众、待解决问题和差异化优势
- **[deanpeters/press-release](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/press-release)** - 使用 Amazon 的 Working Backwards 方法，通过未来新闻稿明确产品愿景
- **[deanpeters/problem-statement](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-statement)** - 在着手寻找解决方案前，基于证据厘清客户问题
- **[deanpeters/proto-persona](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/proto-persona)** - 在开展完整研究前创建基于假设的角色画像
- **[deanpeters/recommendation-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/recommendation-canvas)** - 记录 AI 驱动的产品推荐
- **[deanpeters/saas-economics-efficiency-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-economics-efficiency-metrics)** - 计算单位经济效益和资本效率，包括 CAC、LTV、回本周期和 Rule of 40
- **[deanpeters/saas-revenue-growth-metrics](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/saas-revenue-growth-metrics)** - 跟踪收入、留存和增长指标，包括 MRR/ARR、流失率、NRR 和扩张收入
- **[deanpeters/storyboard](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/storyboard)** - 使用 6 格叙事分镜可视化用户旅程
- **[deanpeters/user-story](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story)** - 使用 Mike Cohn 和 Gherkin 格式撰写带验收标准的用户故事
- **[deanpeters/user-story-mapping](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping)** - 使用 Jeff Patton 的故事地图方法，按用户工作流组织故事
- **[deanpeters/user-story-splitting](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-splitting)** - 使用 8 种经过验证的拆分模式分解大型故事

**Interactive Skills**

- **[deanpeters/context-engineering-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/context-engineering-advisor)** - 诊断上下文填塞与工程问题，并指导记忆和检索设计
- **[deanpeters/customer-journey-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/customer-journey-mapping-workshop)** - 引导旅程地图研讨会并识别痛点
- **[deanpeters/director-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/director-readiness-advisor)** - 围绕四种关键情境指导 PM 到总监的转型
- **[deanpeters/discovery-interview-prep](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-interview-prep)** - 根据研究目标，以 Mom Test 风格规划客户访谈
- **[deanpeters/epic-breakdown-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-breakdown-advisor)** - 使用 Richard Lawrence 的 9 种拆分模式将史诗拆分为故事
- **[deanpeters/feature-investment-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/feature-investment-advisor)** - 使用 ROI 和战略价值评分评估功能
- **[deanpeters/finance-based-pricing-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/finance-based-pricing-advisor)** - 使用财务影响分析评估定价变更
- **[deanpeters/lean-ux-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/lean-ux-canvas)** - 使用 Jeff Gothelf 的 Lean UX Canvas v2 制定假设驱动的规划
- **[deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree)** - 生成机会和解决方案，并建议概念验证测试
- **[deanpeters/pol-probe-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/pol-probe-advisor)** - 建议原型类型：可行性、任务导向、叙事、合成或氛围式
- **[deanpeters/positioning-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/positioning-workshop)** - 通过自适应探索问题指导定位定义
- **[deanpeters/prioritization-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prioritization-advisor)** - 根据具体情况推荐合适的优先级框架（RICE、ICE、Kano 等）
- **[deanpeters/problem-framing-canvas](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/problem-framing-canvas)** - 按照 MITRE 问题框定方法引导团队：向内审视、向外观察并重新定义
- **[deanpeters/tam-sam-som-calculator](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/tam-sam-som-calculator)** - 使用真实世界数据和引文预测市场规模
- **[deanpeters/user-story-mapping-workshop](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/user-story-mapping-workshop)** - 逐步讲解如何创建故事地图，包括主干和发布切片
- **[deanpeters/vp-cpo-readiness-advisor](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/vp-cpo-readiness-advisor)** - 指导总监到 VP/CPO 的转型，包括 CEO 面试框架
- **[deanpeters/workshop-facilitation](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/workshop-facilitation)** - 为任意研讨会添加分步引导和编号建议

**Workflow Skills**

- **[deanpeters/discovery-process](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/discovery-process)** - 完整的发现周期：界定问题 → 研究 → 综合 → 验证（3-4 周）
- **[deanpeters/executive-onboarding-playbook](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/executive-onboarding-playbook)** - 适用于 VP/CPO 入职转型的 30-60-90 天诊断手册
- **[deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development)** - 结构化 PRD 流程：问题 → 角色画像 → 解决方案 → 指标 → 故事（2-4 天）
- **[deanpeters/product-strategy-session](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/product-strategy-session)** - 完整战略研讨会：定位 → 问题框定 → 探索 → 路线图（2-4 周）
- **[deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning)** - 战略路线图流程：输入 → 史诗 → 排序 → 编排 → 沟通（1-2 周）
- **[deanpeters/skill-authoring-workflow](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/skill-authoring-workflow)** - 用于编写技能的元工作流：选择路径 → 验证 → 更新文档 → 打包

</details>


<details>
<summary><h3 id="product-management-skills-by-pawel-huryn" style="display:inline">Pawel Huryn 的产品管理技能</h3></summary>

[Paweł Huryn](https://github.com/phuryn) 提供的 65 项产品管理技能；他是 The Product Compass 新闻简报的创作者。涵盖完整 PM 生命周期——从发现和战略到执行、分析及上市，并采用 Teresa Torres、Geoffrey Moore 等框架。

**Data Analytics**

- **[phuryn/ab-test-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/ab-test-analysis)** - 分析 A/B 测试结果，提供统计显著性判断和建议
- **[phuryn/cohort-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/cohort-analysis)** - 群组留存曲线、功能采用情况和细分洞察
- **[phuryn/sql-queries](https://github.com/phuryn/pm-skills/tree/main/pm-data-analytics/skills/sql-queries)** - 根据自然语言生成适用于主流 SQL 方言的查询

**Execution**

- **[phuryn/brainstorm-okrs](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/brainstorm-okrs)** - 制定与公司目标一致的团队 OKR
- **[phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd)** - 使用涵盖问题到发布的八部分模板创建 PRD
- **[phuryn/dummy-dataset](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/dummy-dataset)** - 生成 CSV、JSON 或 SQL 格式的逼真虚拟数据集
- **[phuryn/job-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/job-stories)** - 使用 JTBD 格式创建带验收标准的工作故事
- **[phuryn/outcome-roadmap](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/outcome-roadmap)** - 将产出导向的路线图转变为结果导向的战略计划
- **[phuryn/pre-mortem](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/pre-mortem)** - 对 PRD 和发布计划开展事前验尸风险分析
- **[phuryn/prioritization-frameworks](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/prioritization-frameworks)** - 包含模板的 9 种优先级框架参考指南
- **[phuryn/release-notes](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/release-notes)** - 根据工单或变更日志生成面向用户的发布说明
- **[phuryn/retro](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/retro)** - 引导开展有结构的冲刺回顾并形成行动项
- **[phuryn/sprint-plan](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/sprint-plan)** - 根据产能、故事选择和风险图谱规划冲刺
- **[phuryn/stakeholder-map](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/stakeholder-map)** - 使用权力/利益矩阵和沟通计划构建利益相关者地图
- **[phuryn/summarize-meeting](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/summarize-meeting)** - 将会议转录内容总结为结构化笔记和行动项
- **[phuryn/test-scenarios](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/test-scenarios)** - 根据用户故事创建全面的测试场景
- **[phuryn/user-stories](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/user-stories)** - 按照 3C 结构创建符合 INVEST 原则的用户故事
- **[phuryn/wwas](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/wwas)** - 使用 Why-What-Acceptance 格式创建待办事项

**Go-to-Market**

- **[phuryn/beachhead-segment](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/beachhead-segment)** - 为产品发布确定首个滩头市场细分
- **[phuryn/competitive-battlecard](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/competitive-battlecard)** - 针对特定竞争对手创建可供销售团队使用的竞品战卡
- **[phuryn/growth-loops](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/growth-loops)** - 在 5 种飞轮类型中识别可促进增长的增长循环
- **[phuryn/gtm-motions](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-motions)** - 在包括 PLG 和 ABM 在内的 7 种方式中识别最佳 GTM 模式
- **[phuryn/gtm-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/gtm-strategy)** - 制定包含渠道、信息传达和发布时间表的 GTM 策略
- **[phuryn/ideal-customer-profile](https://github.com/phuryn/pm-skills/tree/main/pm-go-to-market/skills/ideal-customer-profile)** - 根据人口统计、行为和 JTBD 确定 ICP

**Market Research**

- **[phuryn/competitor-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/competitor-analysis)** - 分析竞争对手的优势、劣势和差异化
- **[phuryn/customer-journey-map](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/customer-journey-map)** - 绘制包含触点、情绪和机会的客户旅程
- **[phuryn/market-segments](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-segments)** - 根据 JTBD 和产品契合度识别 3-5 个客户细分
- **[phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing)** - 使用自上而下和自下而上的方法估算 TAM、SAM、SOM
- **[phuryn/sentiment-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/sentiment-analysis)** - 结合情绪评分和 JTBD 洞察分析用户反馈
- **[phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas)** - 创建包含 JTBD、痛点和收益的 3 个用户角色画像
- **[phuryn/user-segmentation](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-segmentation)** - 根据反馈数据，按行为、JTBD 和需求对用户分群

**Marketing & Growth**

- **[phuryn/marketing-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/marketing-ideas)** - 提出 5 个有创意且成本效益高的营销点子，并说明理由
- **[phuryn/north-star-metric](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/north-star-metric)** - 定义北极星指标及其输入指标体系
- **[phuryn/positioning-ideas](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/positioning-ideas)** - 构思与竞争对手形成差异的定位创意
- **[phuryn/product-name](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/product-name)** - 构思 5 个符合品牌价值观、令人难忘的产品名称
- **[phuryn/value-prop-statements](https://github.com/phuryn/pm-skills/tree/main/pm-marketing-growth/skills/value-prop-statements)** - 为营销、销售和引导流程生成价值主张

**Product Discovery**

- **[phuryn/analyze-feature-requests](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/analyze-feature-requests)** - 按主题、影响、工作量和风险确定功能请求的优先级
- **[phuryn/brainstorm-experiments-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-existing)** - 设计实验以测试现有产品的假设
- **[phuryn/brainstorm-experiments-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-experiments-new)** - 为新产品验证设计精简版 pretotyping 实验
- **[phuryn/brainstorm-ideas-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-existing)** - 从产品经理、设计师和工程师的视角构思产品创意
- **[phuryn/brainstorm-ideas-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/brainstorm-ideas-new)** - 在早期探索阶段为新产品构思功能创意
- **[phuryn/identify-assumptions-existing](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-existing)** - 识别价值、可用性、可行性和技术实现方面的风险假设
- **[phuryn/identify-assumptions-new](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/identify-assumptions-new)** - 从 8 个风险类别中识别新产品的风险假设
- **[phuryn/interview-script](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/interview-script)** - 创建包含 JTBD 探索问题的结构化客户访谈脚本
- **[phuryn/metrics-dashboard](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/metrics-dashboard)** - 定义产品指标仪表板及其数据源和警报阈值
- **[phuryn/opportunity-solution-tree](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/opportunity-solution-tree)** - 根据 Teresa Torres 的方法构建机会解决方案树
- **[phuryn/prioritize-assumptions](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-assumptions)** - 使用影响 × 风险矩阵和实验为假设排序
- **[phuryn/prioritize-features](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/prioritize-features)** - 根据影响、工作量、风险和战略一致性为待办事项排序
- **[phuryn/summarize-interview](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery/skills/summarize-interview)** - 使用 JTBD 和行动项总结访谈转录内容

**Product Strategy**

- **[phuryn/ansoff-matrix](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/ansoff-matrix)** - 使用 Ansoff 矩阵分析 4 个增长战略象限
- **[phuryn/business-model](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/business-model)** - 生成包含全部 9 个构建模块的商业模式画布
- **[phuryn/lean-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/lean-canvas)** - 生成包含问题、解决方案、独特价值主张和指标的精益画布
- **[phuryn/monetization-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/monetization-strategy)** - 构思 3-5 种变现策略并设计验证实验
- **[phuryn/pestle-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pestle-analysis)** - 从政治、经济、社会、技术、法律和环境维度开展 PESTLE 分析
- **[phuryn/porters-five-forces](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/porters-five-forces)** - 开展 Porter 五力竞争分析并提供战略洞察
- **[phuryn/pricing-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/pricing-strategy)** - 结合竞争分析和支付意愿估算设计定价策略
- **[phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy)** - 使用包含 9 个部分的产品战略画布制定产品战略
- **[phuryn/product-vision](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-vision)** - 构思鼓舞人心且可实现的产品愿景陈述
- **[phuryn/startup-canvas](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/startup-canvas)** - 生成结合产品战略与商业模式的创业画布
- **[phuryn/swot-analysis](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/swot-analysis)** - 开展 SWOT 分析，并针对每个象限提供可执行建议
- **[phuryn/value-proposition](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/value-proposition)** - 使用包含 6 个部分的 JTBD 模板设计价值主张

**Toolkit**

- **[phuryn/draft-nda](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/draft-nda)** - 起草 NDA，涵盖信息类型、司法管辖区和条款
- **[phuryn/grammar-check](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/grammar-check)** - 识别语法和行文衔接问题，并提供针对性修改建议
- **[phuryn/privacy-policy](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/privacy-policy)** - 起草符合 GDPR 合规要求的隐私政策
- **[phuryn/review-resume](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/review-resume)** - 依据 10 项最佳实践审阅产品经理简历，包括 XYZ+S 公式

</details>

<details>
<summary><h3 id="skills-by-minimax-team" style="display:inline">MiniMax 团队技能</h3></summary>

MiniMax AI 团队提供的 11 项开发和文档生成技能，涵盖前端、全栈、移动端、着色器开发、文档创建（PDF、DOCX、XLSX、PPTX），以及集成 MiniMax API 的 MiniMax AI CLI。

- **[MiniMax-AI/cli](https://officialskills.sh/MiniMax-AI/skills/cli)** - 通过 MiniMax AI 生成文本、图像、视频、语音和音乐
- **[MiniMax-AI/frontend-dev](https://officialskills.sh/MiniMax-AI/skills/frontend-dev)** - 构建全栈前端，包含电影感动画、通过 MiniMax API 生成的 AI 媒体和生成式艺术
- **[MiniMax-AI/fullstack-dev](https://officialskills.sh/MiniMax-AI/skills/fullstack-dev)** - 后端架构：REST API 设计、身份验证流程、实时功能和数据库集成
- **[MiniMax-AI/android-native-dev](https://officialskills.sh/MiniMax-AI/skills/android-native-dev)** - 使用 Kotlin/Jetpack Compose、Material Design 3 和无障碍功能进行 Android 原生开发
- **[MiniMax-AI/ios-application-dev](https://officialskills.sh/MiniMax-AI/skills/ios-application-dev)** - 使用 UIKit、SnapKit 和 SwiftUI 进行 iOS 开发，涵盖导航、深色模式和 HIG 合规
- **[MiniMax-AI/shader-dev](https://officialskills.sh/MiniMax-AI/skills/shader-dev)** - GLSL 着色器技术：光线步进、流体模拟、粒子系统和程序化生成
- **[MiniMax-AI/gif-sticker-maker](https://officialskills.sh/MiniMax-AI/skills/gif-sticker-maker)** - 通过 MiniMax API 将照片转换为 Funko Pop / Pop Mart 风格的动画 GIF 贴纸
- **[MiniMax-AI/minimax-pdf](https://officialskills.sh/MiniMax-AI/skills/minimax-pdf)** - 使用基于令牌的设计系统和 15 种封面样式生成、填写并重新排版 PDF
- **[MiniMax-AI/pptx-generator](https://officialskills.sh/MiniMax-AI/skills/pptx-generator)** - 使用 PptxGenJS 从头创建和编辑 PowerPoint 演示文稿
- **[MiniMax-AI/minimax-xlsx](https://officialskills.sh/MiniMax-AI/skills/minimax-xlsx)** - 创建、读取、分析和验证 Excel/电子表格文件，同时完全保留格式
- **[MiniMax-AI/minimax-docx](https://officialskills.sh/MiniMax-AI/skills/minimax-docx)** - 使用 OpenXML SDK 专业创建和编辑 DOCX 文档

</details>

<details>
<summary><h3 id="skills-by-duckdb" style="display:inline">DuckDB 技能</h3></summary>

DuckDB 官方技能，可直接通过 Claude Code 查询数据、读取文件和搜索文档。

- **[duckdb/attach-db](https://officialskills.sh/duckdb/skills/attach-db)** - 附加 DuckDB 数据库文件，以便交互式查询并自动探索架构
- **[duckdb/query](https://officialskills.sh/duckdb/skills/query)** - 使用 Friendly SQL 方言查询已附加数据库，或直接查询文件
- **[duckdb/read-file](https://officialskills.sh/duckdb/skills/read-file)** - 在本地或远程存储中读取任意数据文件（CSV、JSON、Parquet、Avro、Excel、空间数据）
- **[duckdb/duckdb-docs](https://officialskills.sh/duckdb/skills/duckdb-docs)** - 通过 HTTPS 全文搜索 DuckDB 和 DuckLake 文档
- **[duckdb/read-memories](https://officialskills.sh/duckdb/skills/read-memories)** - 搜索过去的 Claude Code 会话日志，以恢复先前对话的上下文
- **[duckdb/install-duckdb](https://officialskills.sh/duckdb/skills/install-duckdb)** - 通过版本管理安装或更新 DuckDB CLI 和扩展

</details>

<details>
<summary><h3 id="skills-by-gsap-greensock" style="display:inline">GSAP（GreenSock）技能</h3></summary>

GSAP 官方动画技能，涵盖完整的 GreenSock 生态系统——核心 API、时间线、ScrollTrigger、插件、实用工具、React 集成、性能优化和框架支持。

- **[greensock/gsap-core](https://officialskills.sh/greensock/skills/gsap-core)** - 核心 API：gsap.to()、from()、fromTo()、缓动、时长、交错和默认值
- **[greensock/gsap-timeline](https://officialskills.sh/greensock/skills/gsap-timeline)** - 时间线：序列、位置参数、标签、嵌套和播放控制
- **[greensock/gsap-scrolltrigger](https://officialskills.sh/greensock/skills/gsap-scrolltrigger)** - 用于滚动关联动画的 ScrollTrigger：固定、scrub 和刷新处理
- **[greensock/gsap-plugins](https://officialskills.sh/greensock/skills/gsap-plugins)** - 插件包括 ScrollToPlugin、Flip、Draggable、SplitText、SVG 和 physics
- **[greensock/gsap-utils](https://officialskills.sh/greensock/skills/gsap-utils)** - 实用函数，例如 clamp、mapRange、interpolate、snap、selector 和 wrap
- **[greensock/gsap-react](https://officialskills.sh/greensock/skills/gsap-react)** - React 集成：useGSAP 钩子、refs、gsap.context()、清理和 SSR
- **[greensock/gsap-performance](https://officialskills.sh/greensock/skills/gsap-performance)** - 性能提示：变换、will-change、批处理和 ScrollTrigger 优化
- **[greensock/gsap-frameworks](https://officialskills.sh/greensock/skills/gsap-frameworks)** - Vue、Svelte 和其他框架中的生命周期、作用域和清理模式

</details>

<details>
<summary><h3 id="skills-by-garry-tan-gstack" style="display:inline">Garry Tan（gstack）技能</h3></summary>

Y Combinator 首席执行官 [Garry Tan](https://github.com/garrytan) 提供的 28 项技能，可将 Claude Code 转变为虚拟工程团队——以结构化工作流覆盖从构思到生产部署的全过程。60 天交付超过 60 万行生产代码。

- **[garrytan/office-hours](https://officialskills.sh/garrytan/skills/office-hours)** - YC Office Hours：在编写代码前重新审视产品的六个强制性问题
- **[garrytan/plan-ceo-review](https://officialskills.sh/garrytan/skills/plan-ceo-review)** - CEO/创始人计划审查，提供四种模式：扩张、选择性扩张、保持范围、缩减
- **[garrytan/plan-eng-review](https://officialskills.sh/garrytan/skills/plan-eng-review)** - 工程经理审查：确定架构、数据流、图表、边缘情况和测试
- **[garrytan/plan-design-review](https://officialskills.sh/garrytan/skills/plan-design-review)** - 高级设计师审查：为每个设计维度打 0-10 分、说明满分标准并检测 AI Slop
- **[garrytan/design-consultation](https://officialskills.sh/garrytan/skills/design-consultation)** - 从零构建完整设计系统，探索创意风险并制作逼真的产品模型
- **[garrytan/design-review](https://officialskills.sh/garrytan/skills/design-review)** - 会写代码的设计师：先进行视觉审计，再通过原子提交和前后截图修复问题
- **[garrytan/review](https://officialskills.sh/garrytan/skills/review)** - 资深工程师代码审查：找出能通过 CI、却会在生产环境引发故障的错误
- **[garrytan/investigate](https://officialskills.sh/garrytan/skills/investigate)** - 系统化根因调试：未经调查不修复，追踪数据流并验证假设
- **[garrytan/qa](https://officialskills.sh/garrytan/skills/qa)** - QA 负责人：测试应用、查找错误、通过原子提交修复并自动生成回归测试
- **[garrytan/qa-only](https://officialskills.sh/garrytan/skills/qa-only)** - QA 报告员：采用与 /qa 相同的方法，但只报告、不修改代码
- **[garrytan/cso](https://officialskills.sh/garrytan/skills/cso)** - 首席安全官：OWASP Top 10 + STRIDE 威胁模型，不排除任何误报
- **[garrytan/ship](https://officialskills.sh/garrytan/skills/ship)** - 发布工程师：同步 main、运行测试、审计覆盖率、推送并创建 PR
- **[garrytan/land-and-deploy](https://officialskills.sh/garrytan/skills/land-and-deploy)** - 合并 PR，等待 CI 和部署完成，并验证生产环境健康状况
- **[garrytan/canary](https://officialskills.sh/garrytan/skills/canary)** - SRE 部署后监控：监视控制台错误、性能回退和页面故障
- **[garrytan/benchmark](https://officialskills.sh/garrytan/skills/benchmark)** - 性能工程师：建立页面加载时间、Core Web Vitals 和资源大小基线
- **[garrytan/document-release](https://officialskills.sh/garrytan/skills/document-release)** - 技术文档作者：更新项目中的所有文档，使之与刚刚交付的内容一致
- **[garrytan/retro](https://officialskills.sh/garrytan/skills/retro)** - 工程经理每周回顾，按人员拆解并统计连续交付情况
- **[garrytan/browse](https://officialskills.sh/garrytan/skills/browse)** - 用于 QA 的真实 Chromium 浏览器：真实点击、真实截图，每条命令约 100 毫秒
- **[garrytan/setup-browser-cookies](https://officialskills.sh/garrytan/skills/setup-browser-cookies)** - 将真实浏览器中的 Cookie 导入无头会话
- **[garrytan/autoplan](https://officialskills.sh/garrytan/skills/autoplan)** - 一条命令生成完整审查计划：自动依次执行 CEO、设计和工程审查
- **[garrytan/codex](https://officialskills.sh/garrytan/skills/codex)** - 通过 OpenAI Codex CLI 获取第二意见：审查、对抗性挑战和开放式咨询
- **[garrytan/careful](https://officialskills.sh/garrytan/skills/careful)** - 安全护栏：在执行破坏性命令（rm -rf、DROP TABLE、强制推送）前发出警告
- **[garrytan/freeze](https://officialskills.sh/garrytan/skills/freeze)** - 编辑锁：调试时将文件编辑限制在单个目录中
- **[garrytan/guard](https://officialskills.sh/garrytan/skills/guard)** - 完整安全模式：通过一条命令同时启用 /careful 和 /freeze，达到最高安全级别
- **[garrytan/unfreeze](https://officialskills.sh/garrytan/skills/unfreeze)** - 解锁：移除 /freeze 边界
- **[garrytan/setup-deploy](https://officialskills.sh/garrytan/skills/setup-deploy)** - 部署配置器：一次性设置 /land-and-deploy
- **[garrytan/gstack-upgrade](https://officialskills.sh/garrytan/skills/gstack-upgrade)** - 自我更新器：将 gstack 升级到最新版本

</details>

<details>
<summary><h3 id="skills-by-notion" style="display:inline">Notion 技能</h3></summary>

Notion 仓库中的官方技能——具备工作区感知能力，可用于记录知识、准备会议、开展研究并将规范转化为任务。

**From [notion-cookbook](https://github.com/makenotion/notion-cookbook/tree/main/skills/claude):**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - 将对话转换为结构化的 Notion 文档页面，并妥善组织和建立链接
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - 收集 Notion 上下文，准备会议材料、预读资料和议程
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - 搜索 Notion 工作区、综合发现并创建全面的研究报告
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - 将产品/技术规范转化为具体的 Notion 任务，并添加验收标准和进度跟踪

**From [claude-code-notion-plugin](https://github.com/makenotion/claude-code-notion-plugin/tree/main/skills/notion):**

- **[makenotion/knowledge-capture](https://officialskills.sh/makenotion/skills/knowledge-capture)** - 将对话转换为结构化的 Notion 文档页面，并妥善组织和建立链接
- **[makenotion/meeting-intelligence](https://officialskills.sh/makenotion/skills/meeting-intelligence)** - 收集 Notion 上下文，准备会议材料、预读资料和议程
- **[makenotion/research-documentation](https://officialskills.sh/makenotion/skills/research-documentation)** - 搜索 Notion 工作区、综合发现并创建全面的研究报告
- **[makenotion/spec-to-implementation](https://officialskills.sh/makenotion/skills/spec-to-implementation)** - 将产品/技术规范转化为具体的 Notion 任务，并添加验收标准和进度跟踪

</details>

<details>
<summary><h3 id="skills-by-resend" style="display:inline">Resend 技能</h3></summary>

Resend 官方技能，用于发送和接收电子邮件、构建邮件模板，并让智能体掌握电子邮件专业能力。

- **[resend/resend](https://github.com/resend/resend-skills/tree/main/skills/resend)** - 通过 Resend API 发送和管理电子邮件
- **[resend/react-email](https://github.com/resend/resend-skills/tree/main/skills/react-email)** - 使用 React Email 组件构建电子邮件
- **[resend/email-best-practices](https://github.com/resend/resend-skills/tree/main/skills/email-best-practices)** - 电子邮件送达率和设计最佳实践
- **[resend/agent-email-inbox](https://github.com/resend/resend-skills/tree/main/skills/agent-email-inbox)** - AI 智能体电子邮件收件箱管理
- **[resend/resend-cli](https://github.com/resend/resend-skills/tree/main/skills/resend-cli)** - Resend CLI 命令和工作流

</details>

<details>
<summary><h3 id="skills-by---google-chrome-team---addy-osmani-web-quality" style="display:inline">Google Chrome 团队 Addy Osmani（Web 质量）技能</h3></summary>

Addy Osmani（Google Chrome 团队）提供的 Lighthouse 风格 Web 质量技能，涵盖性能、Core Web Vitals、无障碍、SEO 和现代最佳实践——与 Google Lighthouse 审计的领域相同。

- **[addyosmani/web-quality-audit](https://officialskills.sh/addyosmani/skills/web-quality-audit)** - 围绕性能、无障碍、SEO 和最佳实践进行全面质量审查
- **[addyosmani/performance](https://officialskills.sh/addyosmani/skills/performance)** - 加载速度、运行时效率和资源优化
- **[addyosmani/core-web-vitals](https://officialskills.sh/addyosmani/skills/core-web-vitals)** - 针对 LCP、INP 和 CLS 的优化
- **[addyosmani/accessibility](https://officialskills.sh/addyosmani/skills/accessibility)** - WCAG 合规、屏幕阅读器支持和键盘导航
- **[addyosmani/seo](https://officialskills.sh/addyosmani/skills/seo)** - 搜索引擎优化、可抓取性和结构化数据
- **[addyosmani/best-practices](https://officialskills.sh/addyosmani/skills/best-practices)** - 安全性、现代 Web API 和代码质量模式

</details>

<details>
<summary><h3 id="skills-by-mongodb" style="display:inline">MongoDB 技能</h3></summary>

MongoDB 官方 Agent Skills，适用于智能体工作流，涵盖连接管理、架构设计、查询优化、自然语言查询和 Atlas Stream Processing。

- **[mongodb/mongodb-mcp-setup](https://officialskills.sh/mongodb/skills/mongodb-mcp-setup)** - 使用身份验证和连接配置设置 MongoDB MCP 服务器
- **[mongodb/mongodb-connection](https://officialskills.sh/mongodb/skills/mongodb-connection)** - 优化 MongoDB 客户端连接池、超时和无服务器模式
- **[mongodb/mongodb-schema-design](https://officialskills.sh/mongodb/skills/mongodb-schema-design)** - 使用验证和索引模式设计高效文档架构
- **[mongodb/atlas-stream-processing](https://officialskills.sh/mongodb/skills/atlas-stream-processing)** - 使用 Kafka、S3 和 Lambda 集成构建、运维和调试 Atlas Stream Processing 管道
- **[mongodb/mongodb-natural-language-querying](https://officialskills.sh/mongodb/skills/mongodb-natural-language-querying)** - 将自然语言转换为 MongoDB 查询和聚合管道
- **[mongodb/mongodb-query-optimizer](https://officialskills.sh/mongodb/skills/mongodb-query-optimizer)** - 使用 Atlas Performance Advisor 分析并优化查询性能
- **[mongodb/mongodb-search-and-ai](https://officialskills.sh/mongodb/skills/mongodb-search-and-ai)** - 通过 Atlas Search 和 AI 驱动的向量搜索实现推荐

</details>

<details>
<summary><h3 id="skills-by-redis" style="display:inline">Redis 技能</h3></summary>

- **[redis/redis-core](https://github.com/redis/agent-skills/tree/main/skills/redis-core)** - Redis 开发最佳实践——数据结构、查询引擎、向量搜索、缓存和性能优化。

</details>

<details>
<summary><h3 id="skills-by-nvidia" style="display:inline">NVIDIA 技能</h3></summary>

NVIDIA 为其 AI、加速计算、机器人、仿真和开发者平台发布的官方技能。NVIDIA 会频繁更新并重新组织此目录，因此这里链接至持续维护的来源，而不复制快照。

- **[Browse NVIDIA's official Agent Skills catalog](https://github.com/NVIDIA/skills/tree/main/skills)** - 直接在 NVIDIA 的仓库中查看当前集合。

</details>


<details>
<summary><h3 id="skills-by-google-cloud" style="display:inline">Google Cloud 技能</h3></summary>

Google Cloud 官方技能，涵盖 Firebase、BigQuery、Cloud Run、GKE、AlloyDB、Cloud SQL、Gemini Enterprise Agent Platform、网络可观测性和 Well-Architected Framework。共 19 项技能。

- **[google/cloud/agent-platform-skill-registry](https://github.com/google/skills/tree/main/skills/cloud/agent-platform-skill-registry)** - 与 Gemini Enterprise Agent Platform Skill Registry 交互，以创建并搜索可用技能。
- **[google/cloud/alloydb-basics](https://github.com/google/skills/tree/main/skills/cloud/alloydb-basics)** - 管理 AlloyDB for PostgreSQL 的集群、实例和备份，并集成 AlloyDB 模型上下文协议（MCP）工具以自动执行数据库操作。
- **[google/cloud/bigquery-basics](https://github.com/google/skills/tree/main/skills/cloud/bigquery-basics)** - 管理 BigQuery 中的数据集、表和作业，并集成 BigQuery ML 和 Gemini，以实现高级数据分析和 AI 驱动的洞察。
- **[google/cloud/cloud-run-basics](https://github.com/google/skills/tree/main/skills/cloud/cloud-run-basics)** - 管理 Cloud Run 服务、作业和工作池。
- **[google/cloud/cloud-sql-basics](https://github.com/google/skills/tree/main/skills/cloud/cloud-sql-basics)** - 此文件用于生成或说明 Cloud SQL 资源。
- **[google/cloud/firebase-basics](https://github.com/google/skills/tree/main/skills/cloud/firebase-basics)** - 只要你在使用 Firebase 产品或服务（尤其是移动或 Web 应用），就应使用此技能。
- **[google/cloud/gemini-agents-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-agents-api)** - 管理 Gemini Enterprise Agent Platform 上的自定义 Agent 资源。
- **[google/cloud/gemini-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-api)** - 使用 Google Gen AI SDK 指导如何在 Agent Platform 上使用 Gemini API。
- **[google/cloud/gemini-interactions-api](https://github.com/google/skills/tree/main/skills/cloud/gemini-interactions-api)** - 指导如何在 Gemini Enterprise Agent Platform 上使用 Gemini Interactions API。
- **[google/cloud/gke-basics](https://github.com/google/skills/tree/main/skills/cloud/gke-basics)** - 使用黄金路径 Autopilot 配置规划、创建并配置可用于生产环境的 Google Kubernetes Engine (GKE) 集群。
- **[google/cloud/google-cloud-networking-observability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-networking-observability)** - 通过分析日志、指标和诊断信息调查 Google Cloud 网络问题。
- **[google/cloud/google-cloud-recipe-auth](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-recipe-auth)** - 针对 Google Cloud 服务和 API 的身份验证与授权提供专家指导，涵盖人员用户、服务身份、Application Default Credentials (ADC) 以及 b...
- **[google/cloud/google-cloud-recipe-onboarding](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-recipe-onboarding)** - 为开发者介绍 Google Cloud 入门步骤，涵盖创建账户、设置账单、管理项目和部署首个资源。
- **[google/cloud/google-cloud-waf-cost-optimization](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-cost-optimization)** - 根据 Google Cloud Well-Architected Framework (WAF) 为 Google Cloud 工作负载生成成本优化指南。
- **[google/cloud/google-cloud-waf-operational-excellence](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-operational-excellence)** - 根据 Google Cloud Well-Architected Framework 运维卓越支柱中的设计原则和建议，为 Google Cloud 工作负载生成以运维为重点的指南。
- **[google/cloud/google-cloud-waf-performance-optimization](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-performance-optimization)** - 根据 Google Cloud Well-Architected Framework 性能优化支柱中的设计原则和建议，为 Google Cloud 工作负载生成以性能为重点的指南。
- **[google/cloud/google-cloud-waf-reliability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-reliability)** - 根据 Google Cloud Well-Architected Framework 中的设计原则和建议，为 Google Cloud 工作负载生成以可靠性为重点的指南。
- **[google/cloud/google-cloud-waf-security](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-security)** - 根据 Google Cloud Well-Architected Framework (WAF) 中的设计原则和建议，为 Google Cloud 工作负载生成以安全性为重点的指南。
- **[google/cloud/google-cloud-waf-sustainability](https://github.com/google/skills/tree/main/skills/cloud/google-cloud-waf-sustainability)** - 根据 Google Cloud Well-Architected Framework (WAF) 中的设计原则和建议，为 Google Cloud 工作负载生成以可持续性为重点的指南。

</details>

<details>
<summary><h3 id="skills-by-redhat" style="display:inline">Red Hat 技能</h3></summary>

借助精选的技能、智能体和 MCP 服务器库，全面提升组织中的 AI 能力——所有内容均由 Red Hat 订阅提供支持。无论你是在 Cursor 中优化工作流的 SRE，还是构建智能界面的架构师，都可以利用值得信赖的构件，自信地部署和扩展智能体自动化。

- **[redhat/cve-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-customers#agent-and-skills)** - 了解 CVE、检查产品生命周期状态、收集诊断信息，并按恰当的严重级别提交支持案例——适用于日常运维的 Red Hat 必备技能。

- **[redhat/sre-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-site-reliability-engineers)** - 在整个 RHEL 服务器群中发现、修复并验证 CVE——通过单一工作流协调 Red Hat Lightspeed 和 Ansible Automation Platform。

- **[redhat/openshift-skillpack](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-openshift)** - 通过单一对话式工作流配置 OpenShift 集群、维护清单并生成报告，覆盖 Assisted Installer、OCM、ROSA、ARO 和 kubeconfig 集群。

- **[redhat/openshift-virtualization](https://catalog.redhat.com/en/ai/skills/detail/agentic-skill-pack-for-red-hat-openshift-virtualization)** - 通过单一对话式工作流管理 OpenShift Virtualization 中虚拟机的完整生命周期——创建、克隆、快照、恢复、重新平衡和生成报告。

</details>

<details>
<summary><h3 id="skills-by-cypress" style="display:inline">Cypress 技能</h3></summary>

Cypress 官方发布的技能，可帮助创建、维护、理解和修复 Cypress 测试。共 3 项技能。

- **[cypress-io/cypress-author](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-author)** - 创建、更新并修复 Cypress 端到端和组件测试。
- **[cypress-io/cypress-explain](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-explain)** - 解释 Cypress 端到端和组件测试，并回答有关 Cypress 用法和行为的问题。
- **[cypress-io/cypress-docs](https://github.com/cypress-io/ai-toolkit/tree/main/skills/cypress-docs)** - 从官方文档中搜索并提取 Cypress 信息。

</details>


### 社区技能 <a id="community-skills"></a>

<details>
<summary><h3 id="vector-databases" style="display:inline">向量数据库</h3></summary>

- **[qdrant/skills](https://github.com/qdrant/skills)** - Qdrant 向量搜索智能体技能，涵盖扩展、性能优化、搜索质量、监控、部署、模型迁移、版本升级，以及 Python、TypeScript、Rust、Go、.NET 和 Java SDK 的用法

</details>

<details>
<summary><h3 id="marketing" style="display:inline">营销</h3></summary>

- **[BrianRWagner/ai-marketing-claude-code-skills](https://github.com/BrianRWagner/ai-marketing-claude-code-skills)** - 17 种营销框架，适用于冷启动外联、主页审计、社交卡片等场景
- **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** - 用于全面分析和优化网站的通用 SEO 技能
- **[wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill)** - 向 X/Twitter 发布文章
- **[CosmoBlk/email-marketing-bible](https://github.com/CosmoBlk/email-marketing-bible)** - 以 AI 技能形式提供的 5.5 万字电子邮件营销指南
- **[smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)** - 配备递归自评估的 AI 创意总监：20 多种方法论（SIT、TRIZ、Bisociation、SCAMPER、Synectics），以 Cannes/D&AD/HumanKind 为基准的三轴评估，以及从简报到演示的五阶段流程
- **[Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)** - 搜索推文、查看个人资料推文、导出关注者、管理媒体和发帖、回复及 MCP
- **[Xquik-dev/tweetclaw](https://github.com/Xquik-dev/tweetclaw)** - 发布推文、回复和私信；搜索、监控并运行抽奖活动
- **[SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose)** - 严格的写作风格约定，要求以不带 AI 痕迹的隽永有力英语写作
- **[blader/humanizer](https://github.com/blader/humanizer)** - 去除文本中 AI 生成写作的痕迹，让表达更自然、更像真人
- **[MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop)** - 移除具名的 AI 写作痕迹（三段并列、破折号堆叠、层层保留、谄媚式开场，以及“delve”“crucial”等陈词滥调）。将 lint 和改写模式分开，便于审查自有文本而不自动重写。提供五种强度级别，采用 MIT 许可
- **[Eronred/aso-skills](https://github.com/Eronred/aso-skills)** - 30 多项 App Store Optimization 技能，借助 Appeeky API 支持关键词研究、元数据优化、竞品分析、创意优化和移动端增长策略
- **[degausai/wonda](https://github.com/degausai/wonda)** - AI 内容创作：图像、视频、音乐、音频、编辑和发布
- **[gitroomhq/postiz-agent](https://github.com/gitroomhq/postiz-agent)** - 以编程方式在 28 个以上平台安排社交媒体帖子
- **[taisly/agent](https://github.com/taisly/agent)** - Codex 插件、智能体技能、CLI 和 MCP 服务器，可通过 Taisly 将经批准的短视频发布到 TikTok、Instagram Reels、YouTube Shorts、X 和 Facebook
- **[indranilbanerjee/digital-marketing-pro](https://github.com/indranilbanerjee/digital-marketing-pro)** - 150 项技能的互动方法论——12 部分策略流程、25 个专业智能体，符合欧盟《人工智能法案》第 50 条要求（C2PA 签名），覆盖 6 个平台的 AEO/GEO，包括 Google AI Mode
- **[infrasity-labs/dev-gtm-claude-skills](https://github.com/infrasity-labs/dev-gtm-claude-skills)**: 面向开发者上市流程的 GTM 技能集合，涵盖发布规划、定位和外联序列。
- **[nowork-studio/notfair-plugin](https://github.com/nowork-studio/notfair-plugin)** - 包含实时数据的 SEO、GEO、Google Ads 和 Meta Ads 技能
- **[aaron-he-zhu/aaron-marketing-skills](https://github.com/aaron-he-zhu/aaron-marketing-skills)** - 69 项营销技能共享同一契约，涵盖 SEO/GEO、网红营销、付费广告和电子邮件，并设置 5 个由基准驱动的审计门槛（CORE-EEAT、CITE、C³、ROAS、SEND）及无需密钥的数据连接器
- **[gooseworks-ai/goose-skills](https://github.com/gooseworks-ai/goose-skills)** - 125 项增长和 GTM 技能：广告、内容、潜在客户开发和 SEO
- **[sergebulaev/linkedin-skills](https://github.com/sergebulaev/linkedin-skills)** - LinkedIn 营销技能：病毒式传播的开场、评论起草、算法审计和人性化改写
- **[Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru)** - 去除俄语文本中的 AI 写作痕迹
- **[Bomx/distribb-skill](https://github.com/Bomx/distribb-skill)** - SEO 文章、关键词研究、CMS 发布和高 DR 反向链接交换
- **[Citlyze/citlyze-skills](https://github.com/citlyze/citlyze-skills)** - Citlyze 团队的 AI 搜索可见性技能：通过 Citlyze MCP 服务器提供环比可见性报告、引用差距分析、提示词审计和行动计划；另含独立的 AEO 页面审计，无需账户即可为任意 URL 评分
- **[AIDevGTM/gtm-cofounder](https://github.com/AIDevGTM/gtm-cofounder)** - 面向独立技术创始人的 18 项上市技能：定位、首批用户、发布、定价和创始人主导的销售；内容依据 Adam Frankl 和 Jakub Czakon 的方法
- **[mailtrap/mailtrap-skills](https://github.com/mailtrap/mailtrap-skills)** - 通过 API/SMTP 发送电子邮件，并使用沙箱测试
- **[YannisKiefer/dark-psychology-skills](https://github.com/YannisKiefer/dark-psychology-skills)** - 从 36 本书中提炼出 13 项面向智能体的销售和谈判技能（CIA 心理战手册、FBI 行为研究、宣传科学和经典说服术）；所有技巧都需通过诚实影响力筛选：即使完全公开也必须有效
- **[SupercmoHQ/superCMO-skills](https://github.com/SupercmoHQ/superCMO-skills)** - 用于营销视频和图像制作的开源技能与本地 MCP 服务器：根据产品照片和简报制作 UGC 视频、广告视频、产品摄影和图像广告；可生成 AI 演员、挑选最佳图像/视频模型、编辑任意长度且演员和产品一致的片段，并研究竞品广告。可自带密钥或使用托管密钥，采用 Apache-2.0 许可
- **[sandbaseai/sandbase-skills/multi-source-search](https://github.com/sandbaseai/sandbase-skills/tree/main/research/multi-source-search)** - 通过多来源研究和离线验证提供以证据为依据的结论
- **[Nanako0129/sepia](https://github.com/Nanako0129/sepia)** - 优先修复叙事结构、再调整措辞的去 AI 化写作技能
- **[axelfreeman/marketing-mindset](https://github.com/axelfreeman/marketing-mindset)** - 面向 AI 智能体的营销操作系统——先像营销人员一样思考，再输出战术
- **[ScrapeCreators/social-media-research-skills](https://github.com/ScrapeCreators/social-media-research-skills)** - 研究社交媒体上的异常热门内容、评论、竞争对手、广告和趋势
- **[ilyautov/humanizer-ru](https://github.com/ilyautov/humanizer-ru/tree/main/skills/humanizer-ru)** - 去除俄语文本中的 64 种 AI 写作痕迹，并提供扫描器
- **[socai-io/jev-social](https://github.com/socai-io/jev-social/tree/v0.1.10/skills/jev-social)** - 通过 Jev 和 socai CLI 路由本地社交媒体研究
- **[explorium-ai/vibe-prospecting](https://github.com/explorium-ai/vibeprospecting-plugin/tree/main/skills/vibe-prospecting)** - B2B 潜在客户拓展、信息丰富和 GTM 数据工作流

</details>

<details>
<summary><h3 id="productivity-and-collaboration" style="display:inline">生产力与协作</h3></summary>

- **[PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill)** - 通过 Nutrient DWS API 处理文档：转换（PDF/DOCX/XLSX/PPTX/HTML/图像）、提取文本/表格、OCR（20 多种语言）、编辑个人身份信息（基于模式和 AI）、添加水印、数字签名及填写表单。另提供 [MCP 服务器](https://www.npmjs.com/package/@nutrient-sdk/dws-mcp-server)。
- **[notiondevs/Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)** - 用于处理 Notion 的技能
- **[op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)** - 通过文档分析和风格化图像生成 AI 驱动的 PPT
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - 生成带有丰富动画和视觉风格预览的 HTML 演示文稿
- **[gokapso/integrate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/integrate-whatsapp)** - 连接 WhatsApp、设置 Webhook 并发送消息
- **[gokapso/automate-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/automate-whatsapp)** - 使用工作流和智能体构建 WhatsApp 自动化
- **[gokapso/observe-whatsapp](https://github.com/gokapso/agent-skills/tree/master/skills/observe-whatsapp)** - 调试 WhatsApp 送达问题并运行健康检查
- **[PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill)** - 与 NotebookLM 交互，开展基于文档的对话
- **[obra/superpowers-lab](https://github.com/obra/superpowers-lab)** - 用于 Claude 超能力的实验环境
- **[obra/brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)** - 生成并探索创意
- **[obra/writing-plans](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)** - 创建战略文档
- **[obra/executing-plans](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md)** - 实施并执行战略计划
- **[obra/dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)** - 协调多个同时运行的智能体
- **[obra/using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md)** - 充分利用平台核心能力
- **[op7418/Youtube-clipper-skill](https://github.com/op7418/Youtube-clipper-skill)** - 通过自动化工作流生成和编辑 YouTube 片段
- **[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills)** - 为创始人提供的 Claude 技能，包含打包好的创业工作流
- **[EveryInc/charlie-cfo-skill](https://github.com/EveryInc/charlie-cfo-skill)** - 借鉴 Charlie Munger 思想的自举式 CFO 财务管理
- **[openaccountants/openaccountants](https://github.com/openaccountants/openaccountants)** - 覆盖 134 个国家的 371 项税务分类技能
- **[wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill)** - 管理 Linear 问题、项目和团队
- **[hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill)** - 精简、低摩擦的分层记忆系统，支持后台智能体并通过文件系统持久化
- **[xberg-io/xberg](https://github.com/xberg-io/xberg/tree/main/plugin/skills/xberg)** - 从 101 种以上文档格式中提取文本、表格和元数据
- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - 20 项专业技能，适用于简历优化、ATS 分析、面试准备和职业转型
- **[bevibing/tutor-skills](https://github.com/bevibing/tutor-skills)** - 将文档或代码库转换为带交互式测验的 Obsidian StudyVault
- **[NeoLabHQ/write-concisely](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/docs/skills/write-concisely)** - 运用经典著作《The Elements of Style》的原则，使文档和写作更清晰、更专业：删减冗词并改善结构。
- **[ReScienceLab/opc-skills](https://github.com/ReScienceLab/opc-skills)** - 为个体创业者提供的智能体技能，包含 SEO、GEO 和 LLM 工具
- **[SeanZoR/claude-speed-reader](https://github.com/SeanZoR/claude-speed-reader)** - 使用 RSVP 和 Spritz 风格 ORP 高亮，以每分钟 600 多词的速度快速阅读 Claude 的回答
- **[Charlie85270/Dorothy](https://github.com/Charlie85270/Dorothy)** - 通过自动化和 MCP 服务器编排多个 AI CLI 智能体
- **[Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills)** - 资深产品经理智能体，包含 30 多种框架和 SaaS 指标
- **[deusyu/translate-book](https://github.com/deusyu/translate-book)** - 通过并行子智能体翻译书籍（PDF/DOCX/EPUB），并支持断点续作
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** - 研究 Reddit、X、YouTube、HN、Polymarket 和全网的任意主题，按点赞、喜欢数和真实资金排序，而非由编辑筛选
- **[santifer/career-ops](https://github.com/santifer/career-ops)** - 包含 14 项技能的 AI 求职工具集：A-F 评分的职位描述评估、针对 ATS 优化的 PDF 生成、招聘门户扫描器（Greenhouse/Ashby/Lever）、STAR+R 面试准备、批量处理和 Go 仪表板 TUI
- **[Linked-API/linkedin](https://github.com/Linked-API/linkedin-skills/tree/main/linkedin)** - 在 Claude Code、Codex、Cursor 和 Windsurf 中获取 LinkedIn 个人资料、搜索人员和公司、发送消息、管理联系人、创建帖子、点赞、评论并运行自定义 LinkedIn 工作流。
- **[pattern-ai-labs/agentcall](https://github.com/pattern-ai-labs/agentcall)** - 让 AI 智能体加入 Google Meet、Zoom 和 Teams 通话，像真正的队友一样协作。
- **[Sendmux/skills](https://github.com/Sendmux/skills)** - 供智能体使用的 Sendmux 电子邮件和邮箱工作流
- **[tjboudreaux/cc-thinking-skills](https://github.com/tjboudreaux/cc-thinking-skills)** - 28 种经过评估的思维模型，适用于决策、调试、系统和战略
- **[JimmySadek/youtube-fetcher](https://github.com/JimmySadek/youtube-fetcher-to-markdown)** - 根据 YouTube 视频创建适用于 Obsidian 的 Markdown 笔记
- **[zapier/zapier-mcp](https://github.com/zapier/zapier-mcp)** - 用于托管 Zapier MCP 服务器的官方插件分发渠道。可将 Claude 连接到数千种应用——发送消息、提取数据并触发工作流。
- **[Neeeophytee/finding-unknowns-skills](https://github.com/Neeeophytee/finding-unknowns-skills)** - 8 项元技能，帮助编码智能体在问题变得昂贵前暴露未知事项：盲点检查、访谈、参考资料搜寻、实施计划/笔记、推介资料打包和合并前变更测验。通过 agentskills.io SKILL.md 格式支持 Claude Code、Codex 和 Cursor
- **[kgraph57/strategy-consulting-visualization](https://github.com/kgraph57/mckinsey-style-visualization-skill)** - 麦肯锡风格图表和咨询演示文稿
- **[vaibhavarora14/job-application-agent](https://github.com/vaibhavarora14/job-application-agent)** - 注重隐私的求职发现和跟踪工具
- **[wgwtest/novel-writing](https://github.com/wgwtest/novel-writing)** - 通过视角、对话和风格检查规划并修订小说。
- **[cyperx84/claude-skills-mental-models](https://github.com/cyperx84/claude-skills-mental-models)** - 以文件形式加入自己的思维模型；内置 21 个
- **[manavmishra/zero-slop](https://github.com/manavmishra/ZeroSlop/blob/main/SKILL.md)** - 编辑听起来像 AI 的文字，同时保留事实、语气和格式
- **[OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills)** - 225 项商业、日常生活和编码技能，其中许多包含脚本
- **[GiaSip/giasip-research](https://github.com/GiaSip/giasip-skills/tree/main/skills/giasip-research)** - 带有明确未解决检查项并链接来源的研究报告
- **[tronghieu/agent-skills](https://github.com/tronghieu/agent-skills)** - 面向知识工作的 18 项方法驱动技能：战略、研究和写作
- **[dmoshehun-prog/learn-from-materials](https://github.com/dmoshehun-prog/learn-from-materials)** - 将文档转换为以来源为依据、供 AI 智能体使用的交互式学习页面

</details>

<details>
<summary><h3 id="development-and-testing" style="display:inline">开发与测试</h3></summary>

- **[VoDaiLocz/kilo-kit-mcp](https://github.com/VoDaiLocz/kilo-kit-mcp)** - 包含 177 项精选技能的综合库，配备 MCP 运行时以强制执行协议级 C4 工作流门禁、带安全护栏的严格命令执行，以及 5 种认知推理引擎（思维树 DAG、对抗式拷问、5 Why 根因追踪器、上下文压缩器、自我进化），支持 Claude Code、Cursor、Antigravity 和 Codex

- **[hedralab/eskill](https://github.com/hedralab/eskill)** - 用于构建顶级智能体技能的元技能：符合规范的 SKILL.md、评估循环、验证器、市场研究和编号文件流水线
- **[robzolkos/skill-rails-upgrade](https://github.com/robzolkos/skill-rails-upgrade)** - 分析 Rails 应用并提供升级评估
- **[antonbabenko/terraform-skill](https://github.com/antonbabenko/terraform-skill)** - Terraform 和 OpenTofu 模式：测试、模块、状态及 CI/CD。
- **[zxkane/aws-skills](https://github.com/zxkane/aws-skills)** - AWS 开发，涵盖基础设施自动化和云架构模式
- **[Rootly-AI-Labs/rootly-incident-responder](https://github.com/rootlyhq/rootly-mcp-server/blob/main/examples/skills/rootly-incident-responder.md)** - AI 驱动的事件响应，包含 ML 相似性匹配、解决方案建议和待命协调。需要 [Rootly MCP Server](https://github.com/rootlyhq/rootly-mcp-server)
- **[conorluddy/ios-simulator-skill](https://github.com/conorluddy/ios-simulator-skill)** - 控制 iOS 模拟器
- **[ramzesenok/iOS-Accessibility-Audit-Skill](https://github.com/ramzesenok/iOS-Accessibility-Audit-Skill)** - 根据无障碍规范审计 iOS 应用
- **[truongduy2611/app-store-preflight-skills](https://github.com/truongduy2611/app-store-preflight-skills)** - 扫描 iOS/macOS 项目，在提交前发现可能导致 App Store 拒绝的常见问题
- **[coderabbitai/skills](https://github.com/coderabbitai/skills)** - 面向编码智能体的代码审查和 PR 自动修复工作流
- **[sanjay3290/postgres](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres)** - 针对 PostgreSQL 数据库执行安全的只读 SQL 查询
- **[sanjay3290/deep-research](https://github.com/sanjay3290/ai-skills/tree/main/skills/deep-research)** - 使用 Gemini Deep Research Agent 开展自主多步骤研究
- **[jthack/ffuf-claude-skill](https://github.com/jthack/ffuf_claude_skill)** - 使用 ffuf 进行 Web 模糊测试
- **[lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill)** - 使用 Playwright 自动化浏览器
- **[woniu9524/open-web-bridge](https://github.com/woniu9524/open-web-bridge)** - 通过 CDP 在 Claude Code、Codex 或 Gemini CLI 中驱动已登录的真实 Chrome：支持语义快照、真实鼠标点击、验证码和登录的人为接管、HAR 捕获与重放
- **[ibelick/ui-skills](https://github.com/ibelick/ui-skills)** - 在构建界面时为智能体提供指导的明确且不断演进的约束
- **[muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams)** - 根据提示生成手绘风格 Excalidraw 图表——包含动画 SVG、托管编辑链接和 PNG 导出。支持 Claude Code、Codex、Gemini CLI 以及任何支持标准技能路径的智能体
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** - UI/UX 设计模式和最佳实践
- **[ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills)** - 适用于跨平台应用的 300 多条设计规则，涵盖 Apple HIG、Material Design 3 和 WCAG 2.2
- **[Kayforkind/reimagine-it](https://github.com/Kayforkind/reimagine-it)** - 仅使用现有内容重新设计 HTML 页面
- **[scarletkc/vexor](https://github.com/scarletkc/vexor)** - 基于向量的 CLI，可通过 Claude/Codex 技能进行语义文件搜索
- **[obra/test-driven-development](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)** - 先编写测试，再实现代码
- **[obra/subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)** - 使用多个子智能体进行开发
- **[obra/systematic-debugging](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md)** - 以有条理的方法解决代码问题
- **[obra/finishing-a-development-branch](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md)** - 完成 Git 代码分支
- **[obra/requesting-code-review](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md)** - 启动代码审查流程
- **[obra/receiving-code-review](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md)** - 处理并吸收代码反馈
- **[obra/using-git-worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md)** - 管理多个 Git 工作树
- **[obra/verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md)** - 在定稿前验证工作
- **[obra/writing-skills](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)** - 开发并记录功能
- **[fvadicamo/dev-agent-skills](https://github.com/fvadicamo/dev-agent-skills)** - 用于提交、PR 和代码审查的 Git 与 GitHub 工作流技能
- **[omkamal/pypict-skill](https://github.com/omkamal/pypict-claude-skill/blob/main/SKILL.md)** - 成对测试生成
- **[alinaqi/maggy](https://github.com/alinaqi/maggy)** - 观点鲜明的项目初始化流程，具备安全优先护栏、规范驱动的原子待办事项、LLM 测试模式和 CLI 工具编排（gh、vercel、supabase）
- **[ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills)** - 面向 Rust 应用的 Makepad UI 开发技能：设置、模式、着色器、打包和故障排查。
- **[massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill)** - 通过基于 RLM 研究的递归分解策略处理长上下文任务（100 多个文件、5 万多个令牌）
- **[AvdLee/swiftui-expert-skill](https://github.com/AvdLee/SwiftUI-Agent-Skill/tree/main/swiftui-expert-skill)** - 现代 SwiftUI 最佳实践和 iOS 26+ Liquid Glass 采用指南
- **[efremidze/swift-patterns-skill](https://github.com/efremidze/swift-patterns-skill/tree/main/swift-patterns)** - 现代 Swift/SwiftUI 最佳实践
- **[wendylabsinc/claude-skills](https://github.com/wendylabsinc/claude-skills)** - Swift Server 开发指南，附带用于检查最佳实践的 lint 工具
- **[rorkai/app-store-connect-cli-skills](https://github.com/rorkai/app-store-connect-cli-skills)** - 使用 ASC CLI 自动化 App Store 部署和管理
- **[rameerez/claude-code-startup-skills](https://github.com/rameerez/claude-code-startup-skills)** - 用于构建和运营软件创业项目、应用及 SaaS 的技能
- **[zscole/model-hierarchy-skill](https://github.com/zscole/model-hierarchy-skill)** - 根据任务复杂度优化成本的模型路由
- **[CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills)** - 用于创建 3D 元素和交互式体验的 Three.js 技能
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** - 高自主性的前端技能，为 AI 提供良好审美，并可调节设计变化、动态强度和视觉密度，从而避免生成千篇一律的 UI
- **[testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)** - 70 多种经生产环境验证的 Playwright 自动化测试模式：端到端、POM、CI/CD、迁移和 CLI
- **[NeoLabHQ/review](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/review)** - 使用专用智能体进行全面 PR 代码审查：错误猎手、安全审计员、代码质量审查员、契约审查员、历史上下文审查员和测试覆盖率审查员
- **[NeoLabHQ/reflexion](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/reflexion)** - 强制 LLM 反思先前输出并自行纠正的自我完善循环。
- **[NeoLabHQ/sdd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sdd)** - 规范驱动的开发工作流，通过结构化规划、架构设计和基于 LLM-as-a-Judge 的质量门禁，将提示词转化为生产就绪的实现。
- **[NeoLabHQ/ddd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd)** - 领域驱动开发技能，同时涵盖整洁架构、SOLID 原则和设计模式。
- **[NeoLabHQ/sadd](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd)** - 为各项任务调度独立子智能体，并在每轮迭代之间设置代码审查检查点，以实现快速、可控的开发。
- **[NeoLabHQ/kaizen](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen)** - 应用持续改进方法，结合多种分析方式，基于日本改善哲学和精益方法论。
- **[uucz/moyu](https://github.com/uucz/moyu)** - 反过度工程技能，包含 5 种变体和 10 个平台
- **[mattpocock/skills](https://github.com/mattpocock/skills)** - 17 项开发工作流技能：PRD 编写、TDD、代码库架构、Git 护栏、问题分诊、重构计划等
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** - 覆盖 38 个领域的 753 项网络安全技能：云安全、渗透测试、红队、DFIR、恶意软件分析、威胁情报等（映射至 MITRE ATT&CK）
- **[wrsmith108/varlock-claude-skill](https://github.com/wrsmith108/varlock-claude-skill)** - 安全管理环境变量，确保机密绝不会暴露在 Claude 会话、终端、日志或 Git 提交中
- **[Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** - 几分钟内自动将文档网站、GitHub 仓库和 PDF 转换为 Claude AI 技能
- **[NoizAI/skills](https://github.com/NoizAI/skills)** - 结合本地/云 API 和应用交付实现类人语音合成工作流
- **[Kevin7Qi/codex-collab](https://github.com/Kevin7Qi/codex-collab)** - 在 Claude Code 中与 Codex 协作
- **[ethos-link/rails-conventions](https://github.com/ethos-link/rails-conventions)** - Rails 8 约定，确保生产代码变更保持一致
- **[mcollina/skills](https://github.com/mcollina/skills/tree/main/skills)** - Matteo Collina 提供的 11 项技能：Node.js、Fastify、TypeScript、OAuth、Git/GitHub、ESLint neostandard、文档（Diataxis）、Node.js 核心内部机制、技能优化器等
- **[Lum1104/understand-anything](https://github.com/Egonex-AI/Understand-Anything)** - 通过多智能体 LLM 分析构建交互式代码库知识图谱
- **[hqhq1025/skill-optimizer](https://github.com/hqhq1025/skill-optimizer)** - 使用真实会话数据和有研究依据的静态分析诊断并优化智能体技能（SKILL.md）。支持 Claude Code、Codex 和任何兼容 Agent Skills 的智能体
- **[LambdaTest/agent-skills](https://github.com/LambdaTest/agent-skills)** - TestMu AI（原 LambdaTest）Skills 是精选的智能体技能集合，教 AI 编码助手编写生产级测试自动化代码。
- **[foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills)** - 由技能治理的即插即用工具框架，用于分阶段、测试驱动的技能编排
- **[metalbear-co/skills](https://github.com/metalbear-co/skills)** - 让智能体能够使用 mirrord 针对你的 Kubernetes 集群编写代码并测试的技能
- **[dembrandt/dembrandt-skills](https://github.com/dembrandt/dembrandt-skills)** - UX 和设计系统技能：层级、字体、无障碍、交互
- **[GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis)** - 为 AI 编码智能体提供的证据驱动方法包
- **[baskduf/codex-fable5](https://github.com/baskduf/FableCodex/tree/main/plugins/codex-fable5/skills/codex-fable5)** - Codex 的循证工作流门禁
- **[csthink/dashmotion](https://github.com/csthink/dashmotion/tree/main/skills/dashmotion)** - 根据通俗英语或 Mermaid 创建动画技术图表，输出自包含 HTML/SVG
- **[plasma-ai/fractal](https://github.com/plasma-ai/fractal/tree/main/fractal/skills/fractal)** - 在隔离的 Git 工作树中运行有界分层智能体循环
- **[reliefeai/browser-relay](https://github.com/reliefeai/browser-relay/tree/v1.4.1/skills/browser-relay)** - 控制现有的已登录 Chrome，且不抢占焦点
- **[squirrelscan/squirrelscan](https://github.com/squirrelscan/skills)** - 审计网站的 SEO、性能、安全性和无障碍，并提供修复方案
- **[Simon-He95/markstream-install](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-install)** - 在五种前端框架中安装流式 Markdown 渲染器
- **[eduardo-sl/go-agent-skills](https://github.com/eduardo-sl/go-agent-skills)** - 精选的 Go 技能，涵盖代码审查、并发、测试和架构
- **[drogers0/github-image-upload](https://github.com/drogers0/gh-image/tree/main/skills/github-image-upload)** - 将截图、PDF、日志、压缩包和视频附加到 GitHub PR、问题和评论，并返回规范的 user-attachments URL。GitHub 没有公开的附件上传 API。支持 Claude Code、Codex、Cursor 和 Gemini CLI
- **[browser-act/browser-act](https://github.com/browser-act/skills/tree/main/browser-act)** - 自动化需身份验证的浏览器，支持内容提取和人工接管
- **[agiwhitelist/auteur](https://github.com/agiwhitelist/auteur)** - 构建由反劣质生成 lint 工具和动态效果 QA 护栏保障的网站
- **[JasonColapietro/suede-creator-skills](https://github.com/JasonColapietro/suede-creator-skills)** - 设计、UI 润色、代码审查评分、AI 评估和 SEO 审计。
- **[superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill)** - 根据现有代码库创建设计系统并迭代 UI 草稿
- **[Ryan-yang125/motion-lexicon](https://github.com/Ryan-yang125/motion-lexicon/tree/main/skills/motion-lexicon)** - 使用可安装的 React 组件构建并审查产品动态效果
- **[Maksim-Burtsev/simple-man](https://github.com/Maksim-Burtsev/simple-man)** - 剔除智能体回答中的赞美、复述和填充语，同时保留所有可供行动的事实：发现结果附带位置和修复方案，拒绝操作时提供安全步骤，教程仍保持长篇完整。基于 1,793 次预先注册的真实调用进行基准测试，并提交原始记录。支持 Claude Code、Codex、Gemini CLI 和 Cursor
- **[aeonfun/aeon](https://github.com/aeonfun/aeon)** - 70 多项 Claude Code 技能和自主 GitHub Actions 智能体框架
- **[KhazP/vibe-coding-prompt-template](https://github.com/KhazP/vibe-coding-prompt-template)** - 将 MVP 规划为 PRD、技术设计和 AGENTS.md
- **[lindblomstefan/skills-library](https://github.com/lindblomstefan/skills-library)** - 面向 Claude Code 的引导式探索技能：通过访谈从包含 100 多项 AI 技能的目录中推荐技能；记录会话反馈，随时间验证候选项
- **[rainmanjam/poka-yoke](https://github.com/rainmanjam/poka-yoke)** - 让误用无法表达：审计、设计并强制实施防错装置
- **[scarletkc/agents](https://github.com/scarletkc/agents)** - 面向 AI 编码智能体的可复用标准和工作流技能
- **[dannwaneri/spec-writer](https://github.com/dannwaneri/spec-writer)** - 将含糊请求转化为规范、计划和任务
- **[Continuum-AI-Corp/orca-replay](https://github.com/Continuum-AI-Corp/OrcaReplay/tree/main/skills/orca-replay)** - 根据录制内容回答有关过去智能体运行的问题
- **[tt-a1i/archify](https://github.com/tt-a1i/archify/tree/main/archify)** - 根据代码库或系统描述生成经过验证的交互式架构图
- **[d1vai/d1v](https://github.com/d1vai/d1v-cli/blob/main/skills/d1v/SKILL.md)** - 部署 Web 项目，提供经过验证的预览并确认生产发布
- **[kensaurus/cursor-kenji](https://github.com/kensaurus/cursor-kenji)** - 编码智能体可自动触发的现成操作手册
- **[saleh-alhaddad/itqan-engineering](https://github.com/saleh-alhaddad/itqan-engineering)** - 通过 12 项技能覆盖完整软件工程生命周期：可恢复的编排器，以及规范、计划、TDD 构建、验证、五维审查、安全和发布——编写代码前设审批门禁，标记“完成”前须提供证据
- **[hermes-labs-ai/lintlang](https://github.com/hermes-labs-ai/lintlang/blob/main/.agents/skills/lintlang/SKILL.md)** - 检查智能体指令中的工具歧义和缺少的边界
- **[fishzjp/qa-skills](https://github.com/fishzjp/qa-skills)** - AI 编码智能体的 QA 工程：覆盖完整生命周期并衡量收益
- **[UiPath/check-skill](https://github.com/UiPath/coder_eval/tree/main/plugins/coder-eval/skills/check-skill)** - 衡量 Claude Code 技能是否触发：精确率和召回率
- **[lukstei/slop-grader](https://github.com/lukstei/slop-grader)** - 基于 TypeSafe Jev 的规则驱动 CLI 工具，可根据自定义规则集评估文档，生成文档评分和逐行违规标记，以指导 AI 智能体自动修复
- **[fujibee/agmsg](https://github.com/fujibee/agmsg)** - 在 Claude Code、Codex 和 Gemini CLI 会话间传递消息
- **[exadel-inc/agentic-readiness-assessment](https://github.com/exadel-inc/agentic-readiness-assessment/tree/main/skills/agentic-readiness-assessment)** - 评估代码仓库对 AI 编码智能体的就绪程度，并确定修复优先级

</details>

<details>
<summary><h3 id="context-engineering" style="display:inline">上下文工程</h3></summary>

- **[muratcankoylan/context-fundamentals](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-fundamentals)** - 了解上下文是什么、为何重要，以及智能体系统中上下文的构成
- **[muratcankoylan/context-degradation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-degradation)** - 识别上下文失效模式：中间信息丢失、投毒、干扰和冲突
- **[muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression)** - 为长时间运行的会话设计并评估压缩策略
- **[muratcankoylan/context-optimization](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-optimization)** - 应用压缩、掩码和缓存策略
- **[muratcankoylan/multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)** - 精通主从编排、点对点和分层多智能体架构
- **[muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems)** - 设计短期、长期和基于图的记忆架构
- **[muratcankoylan/tool-design](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/tool-design)** - 构建智能体可有效使用的工具，包括架构精简模式
- **[muratcankoylan/evaluation](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/evaluation)** - 为智能体系统构建评估框架
- **[k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol)** - 面向 AI（LLM）编码智能体的基于图的长期记忆技能——加快上下文处理、减少令牌并确保重构安全
- **[awrshift/claude-memory-kit](https://github.com/awrshift/claude-memory-kit)** - 为多项目工作流提供持久化记忆、钩子、wiki 和每日综合
- **[NeoLabHQ/prompt-engineering](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering)** - 广泛应用的提示词工程技术和模式，包括 Anthropic 最佳实践和智能体说服原则。
- **[sametbrr/llm-wiki-manager](https://github.com/sametbrr/llm-wiki-manager)** - 由 LLM 持续管理的个人 wiki——模型负责撰写、交叉引用并维护知识库，你负责整理来源。采用 Karpathy 的 LLM Wiki 模式，提供 8 种运行模式。
- **[dankofly/perfectify](https://github.com/dankofly/perfectify)** - 自我改进控制内核（DAGx AGI Kernel）：对不可逆操作设置硬性审批停顿、通过证据门禁确认完成，并提供带偏移治理的自学习操作手册。经过行为评估，支持 Claude Code、Codex、Hermes 和 OpenCode
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** - 适用于 17 个网站（包括中国平台）的多平台搜索 CLI
- **[zilliztech/mfs](https://github.com/zilliztech/mfs)** - `mfs-find` / `mfs-ingest` 技能，可跨代码、文档、聊天（Slack/Gmail/Jira）、数据库和对象存储执行搜索、grep 和读取，并统一呈现为类文件的可搜索命名空间；自行托管，使用本地 ONNX 嵌入
- **[ohad6k/emulo](https://github.com/ohad6k/emulo)** - 将 AI 编码日志挖掘为个人智能体档案
- **[Tubo2333/obsidian-knowledge-brain](https://github.com/Tubo2333/obsidian-knowledge-brain)** - 为 AI 编码智能体提供跨会话知识记忆和规则演进
- **[stjbrown/agent-knowledge](https://github.com/stjbrown/agent-knowledge)** - 以纯 Markdown 维护便于移植且带引文的智能体知识库
- **[khendzel/skills-janitor](https://github.com/khendzel/skills-janitor)** - 令牌审计、使用跟踪和滑动删除式技能精简。
- **[oliver-zehentleitner/keep-the-why](https://github.com/oliver-zehentleitner/keep-the-why)** - 保留代码库背后的推理过程——决策、变通方案和被否决的替代方案
- **[chrono-meta/context-doctor](https://github.com/chrono-meta/forge-harness/tree/main/plugins/fh-meta/skills/context-doctor)** - 生成 .claudeignore，并在上下文膨胀造成令牌成本前发出标记
- **[thousandflowers/skillreaper](https://github.com/thousandflowers/skillreaper)** - 根据转录记录精简未使用的技能、MCP 服务器和子智能体
- **[orziz/odai](https://github.com/orziz/odai/tree/main/skills/odai)** - 治理证据、责任路由、安全边界和已验证交付
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** - 跨会话压缩并持久化智能体记忆
- **[vshulcz/deja-history](https://github.com/vshulcz/deja-vu/tree/main/claude-plugin/skills/deja-history)** - 搜索你在 20 种编码智能体中的过往会话
- **[amirkiarafiei/subagent-cli-skills](https://github.com/amirkiarafiei/subagent-cli-skills/tree/main/skills)** - 将繁重工作委派给其他 15 种智能体 CLI，作为子智能体运行
- **[rebelytics/task-observer](https://github.com/rebelytics/one-skill-to-rule-them-all)** - 用于持续改进技能和自动创建技能的元技能。
- **[Qiuner/birdview](https://github.com/Qiuner/birdview)** - 让架构和约束成为 AI 编码的核心

</details>

<details>
<summary><h3 id="specialized-domains" style="display:inline">专业领域</h3></summary>

- **[ZeKaiNie/universal-examprep-skill](https://github.com/ZeKaiNie/universal-examprep-skill)** - 面向大学教材（PDF/PPTX/DOCX）的多模态、有依据的主动学习辅导工具。功能包括原生 PDF 矢量图裁剪（`pypdfium2`）、真实作业测验题库、严格基于退出码的反幻觉措施，以及跨会话持久状态。已使用小型廉价模型在 1,000 多页真实大学课程材料上测试。
- **[shouldnotappearcalm/a-share-skill](https://github.com/shouldnotappearcalm/a-share-skill)** - 中国 A 股（沪深）技能：实时行情、K 线历史、技术指标、事件、资金流、板块热力图和模拟交易。支持 Claude Code、Cursor、Codex 和 Qoder
- **[transloadit/skills](https://github.com/transloadit/skills/tree/main/skills)** - Transloadit 技能集合（6 项）
- **[honeydew-ai/honeydew-ai-coding-agents-plugins](https://github.com/honeydew-ai/honeydew-ai-coding-agents-plugins)** - 适用于 Snowflake、Databricks 和 BigQuery 上 Honeydew 语义层的 11 项技能：模型探索、实体/关系/属性/指标/上下文/领域创建、验证、查询、筛选和工作区分支
- **[raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor)** - Apple Human Interface Guidelines 拆分为 14 项智能体技能，涵盖 iOS、macOS、visionOS、watchOS 和 tvOS 的平台、基础、组件、模式、输入及技术
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** - 科学研究和分析技能
- **[NotMyself/claude-win11-speckit-update-skill](https://github.com/NotMyself/claude-win11-speckit-update-skill)** - Windows 11 系统管理
- **[sanjay3290/imagen](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen)** - 使用 Google Gemini API 生成图像
- **[SHADOWPR0/security-bluebook-builder](https://github.com/SHADOWPR0/security-bluebook-builder)** - 为敏感应用构建安全蓝皮书
- **[huifer/WellAlly-health](https://github.com/huifer/WellAlly-health)** - 用于医疗信息分析、症状跟踪和健康指导的健康助手技能。
- **[frmoretto/clarity-gate](https://github.com/frmoretto/clarity-gate)** - 验证 RAG 系统的认知质量
- **[wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)** - 通过跨模型审查循环和 GPU 部署开展自主机器学习研究
- **[Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs)** - 面向模型训练、推理和 MLOps 的 AI 研究技能
- **[komal-SkyNET/claude-skill-homeassistant](https://github.com/komal-SkyNET/claude-skill-homeassistant)** - 增强并管理 Home Assistant 工作流
- **[more-io/apple-bridges](https://github.com/more-io/claude-apple-bridges)** - 原生访问 macOS 应用——通过 Swift CLI 桥接工具管理 Apple Reminders、Calendar、Contacts、Notes、Mail 和 tmux 会话
- **[hanhuark/mechanical-engineering-research-skill](https://github.com/hanhuark/mechanical-engineering-research-skill)** - 热流体研究写作、提案、DOE 和演示反馈
- **[prompt-security/clawsec](https://github.com/prompt-security/clawsec)** - 安全技能套件，包含偏移检测、自动化审计和技能完整性验证
- **[BehiSecc/vibesec](https://github.com/BehiSecc/VibeSec-Skill)** - 通过防止 IDOR、XSS、SQL 注入、SSRF 和身份验证薄弱等常见漏洞，帮助编写安全代码；采用漏洞猎手的视角审查代码
- **[lawve-ai/awesome-legal-skills](https://github.com/lawve-ai/awesome-legal-skills)** - 用于自动化法律工作流的精选智能体技能
- **[peas/genealogy-research](https://paulo.com.br/skills/genealogy-research/SKILL.md)** - 具备 OCR、FamilySearch、YAML 数据和人工参与环节的家谱研究智能体
- **[vmware-skills/VMware-AIops](https://github.com/vmware-skills/VMware-AIops)** - AI 驱动的 VMware vCenter/ESXi 监控和运维：清单查询、健康状况/警报、虚拟机生命周期（创建、删除、快照、克隆、迁移）、vSAN 管理、Aria Operations 分析和定期日志扫描。支持 Claude Code、Gemini CLI、Codex、Aider、Trae、Kimi 和 MCP。
- **[video-db/skills](https://github.com/video-db/skills)** - 实时和批量视频工作流：采集屏幕/音频、导入 URL/YouTube/RTSP、转录、索引、搜索、生成字幕、编辑时间线并输出 HLS 流
- **[materials-simulation-skills](https://github.com/HeshamFS/materials-simulation-skills)** - 面向计算材料科学的智能体技能：数值稳定性、时间步进、线性求解器、网格生成、模拟验证、参数优化和后处理
- **[Ericyoung-183/alpha-insights](https://github.com/Ericyoung-183/alpha-insights)** - 面向 Claude Code 和 Codex 的工具框架强制型商业研究
- **[takechanman1228/claude-ecom](https://github.com/takechanman1228/claude-ecom)** - 将电商 CSV 转换为包含 KPI 拆解的业务回顾
- **[talkstream/ru-text](https://github.com/talkstream/ru-text)** - 俄语文本质量：约 1,040 条排版、信息风格、编辑、UX 写作和商务函件规则。跨平台支持：Claude Code、Codex CLI、Gemini CLI、Cursor。
- **[helius-labs/helius-skills](https://github.com/helius-labs/core-ai/tree/main/helius-skills)** - 端到端交付 Solana 应用；通过 Helius API、DFlow 交易和 Phantom 钱包集成，支持交易发送、资产查询、实时流、代币兑换、预测市场、浏览器钱包，以及对协议内部机制的深入研究
- **[meodai/skill.color-expert](https://github.com/meodai/skill.color-expert)** - 色彩科学专家技能，含 28.6 万字参考资料，涵盖 OKLCH/OKLAB、调色板生成、无障碍/对比度、颜色命名、颜料混合和历史色彩理论
- **[aklofas/kicad-happy](https://github.com/aklofas/kicad-happy)** - AI 驱动的 KiCad 电子设计审查与分析
- **[bitwize-music-studio/claude-ai-music-skills](https://github.com/bitwize-music-studio/claude-ai-music-skills)** - AI 全生命周期音乐专辑制作
- **[Alisa0808/vibe-creating-skill](https://github.com/Alisa0808/vibe-creating-skill)** - 将粗略创意或镜头脚本改写为文生视频提示词
- **[HUANGCHIHHUNGLeo/claude-real-video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)** - 具备场景感知关键帧和转录内容，让任意 LLM 都能理解视频
- **[Optim-Agent/optim-agent](https://github.com/Optim-Agent/optim-agent)** - 通过智能体引导优化，实现可衡量的系统调优。
- **[Orkas-AI/video-router](https://github.com/Orkas-AI/Orkas-VideoStudio/tree/main/packages/skills/video-router)** - 将视频请求路由至确定性的智能体制作阶段
- **[perso-ai/perso-dubbing](https://github.com/perso-ai/perso-dubbing-plugin)** - 视频翻译：配音、口型同步、字幕和短片段
- **[GarethManning/regenerative-project-design-orchestrator](https://github.com/GarethManning/education-agent-skills/tree/main/skills/original-frameworks/regenerative-project-design-orchestrator)** - 编排适度的再生式学习项目，并提供保障和管理
- **[GarethManning/learning-target-authoring-guide](https://github.com/GarethManning/education-agent-skills/tree/main/skills/original-frameworks/learning-target-authoring-guide)** - 跨发展阶段撰写可观察的能力学习目标
- **[GarethManning/assessment-validity-checker](https://github.com/GarethManning/education-agent-skills/tree/main/skills/curriculum-assessment/assessment-validity-checker)** - 审查评估的有效性、可靠性和学习目标一致性
- **[GarethManning/progressive-hint-ladder](https://github.com/GarethManning/education-agent-skills/tree/main/skills/student-learning/progressive-hint-ladder)** - 逐步提供提示，同时保留学习者的思考和自主性
- **[GarethManning/competency-unpacker](https://github.com/GarethManning/education-agent-skills/tree/main/skills/curriculum-assessment/competency-unpacker)** - 将宽泛能力拆解为可评估的子技能和成功标准
- **[ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills)** - 面向 YouTube 的智能体技能：通过 TranscriptAPI 获取视频转录，并发现视频（搜索、频道和播放列表列表）。
- **[morluto/rea](https://github.com/morluto/rea/tree/main/skills/reverse-engineer-anything)** - 使用 REA 对二进制文件、应用和运行时进行逆向工程
- **[apitube/news-api-skills](https://github.com/apitube/news-api-skills)** - 按关键词、实体、情感、来源和日期搜索全球新闻
- **[zincio/universal-checkout](https://github.com/zincio/skills/tree/master/skills/universal-checkout)** - 通过 Zinc 官方 API（zinc.com）在 50 多家美国零售商结账
- **[swaylq/humanize-chinese](https://github.com/swaylq/humanize-chinese)** - 完全离线且无需 LLM，检测并改写 AI 生成的中文文本
- **[renezander030/capcut-edit](https://github.com/renezander030/capcut-cli/tree/master/skills/capcut-edit)** - 通过任意智能体编辑 CapCut 和剪映视频项目
- **[MartinDelophy/edit-timeline-studio](https://github.com/MartinDelophy/ai-video-editor/tree/main/skills/edit-timeline-studio)** - 创建可编辑视频时间线，包含字幕、配音和已验证的导出文件。
- **[Tencent/aig-agent-redteam](https://github.com/Tencent/AI-Infra-Guard/tree/main/skills/aig-agent-redteam)** - 一键式智能体红队安全评估技能
- **[ilyautov/small-business-ru](https://github.com/ilyautov/small-business-ru/tree/main/small-business-ru/skills)** - 面向俄罗斯小型企业的 34 项技能：税务、截止日期和交易对手核查
- **[eatmoreduck/boss-zhipin-scraper](https://github.com/eatmoreduck/boss-zhipin-scraper)** - 通过 Chrome CDP 抓取 BOSS 直聘（zhipin.com）职位，并以纯文本输出薪资

</details>

<details>
<summary><h3 id="n8n-automation" style="display:inline">n8n 自动化</h3></summary>

- **[czlonkowski/n8n-code-javascript](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-javascript)** - n8n Code 节点中的 JavaScript 和数据访问模式
- **[czlonkowski/n8n-code-python](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-code-python)** - n8n Code 节点中的 Python 编码及其限制
- **[czlonkowski/n8n-expression-syntax](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-expression-syntax)** - n8n 表达式语法，包含 {{}} 和 $json/$node 变量
- **[czlonkowski/n8n-mcp-tools-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-mcp-tools-expert)** - MCP 工具指南：工具选择和节点格式
- **[czlonkowski/n8n-node-configuration](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-node-configuration)** - 遵循依赖规则和 AI 连接的节点配置
- **[czlonkowski/n8n-validation-expert](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-validation-expert)** - 使用错误目录修复 n8n 验证错误
- **[czlonkowski/n8n-workflow-patterns](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-workflow-patterns)** - 适用于 Webhook、HTTP、数据库和 AI 任务的工作流模式

</details>




## 🔒 安全须知 <a id="-security-notice"></a>

此列表中的技能经过精选，但未经审计。添加到此处后，原始维护者可能随时更新、修改或替换这些技能。

安装或使用任何 Agent Skill 之前，请审查潜在安全风险并自行验证来源。

推荐工具：

- [Synk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)

智能体技能可能包含提示注入、工具投毒、隐藏的恶意软件载荷或不安全的数据处理模式。务必审查代码，并自行承担使用技能的风险。


## 其他 AI 编码助手的技能路径 <a id="skills-paths-for-other-ai-coding-assistants"></a>

| 工具 | 项目路径 | 全局路径 | 官方文档 |
|------|-------------|-------------|---------------|
| Antigravity | `.agents/skills/` | `~/.gemini/config/skills/` | [Antigravity Skills](https://antigravity.google/docs/skills) |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills) |
| Codex | `.agents/skills/` | `~/.agents/skills/` | [Codex Skills](https://developers.openai.com/codex/skills) |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` | [Cursor Skills](https://cursor.com/docs/context/skills) |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` | [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/) |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` | [Copilot Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` | [OpenCode Skills](https://opencode.ai/docs/skills) |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` | [Windsurf Cascade Skills](https://docs.windsurf.com/windsurf/cascade/skills) |
| [mblode/agent-skills](https://github.com/mblode/agent-skills) | 没有人会故意发布 AI 垃圾内容。这些技能能确保你不会如此。涵盖 UI 审计、字体排印、文档、PR 审查和发布。`npx skills add mblode/agent-skills` |


## 技能质量标准 <a id="skill-quality-standards"></a>

随着生态系统不断发展，一致的质量有助于智能体可靠地发现和使用技能。以下参考资料和标准有助于维持高要求。


### 质量标准 <a id="quality-criteria"></a>

| 领域 | 指南 |
|------|-----------|
| **描述** | 使用第三人称撰写。说明技能 *做什么* 以及 *何时* 使用。使用智能体可据以匹配的具体关键词（例如“PostgreSQL 迁移”，而非“数据库相关内容”）。 |
| **渐进式披露** | 将顶层元数据控制在约 100 个令牌以内。技能正文应少于 500 行。按需加载资源（大型文档、架构），而不是内联放入。 |
| **避免绝对路径** | 切勿硬编码 `/Users/alice/` 等特定于机器的路径。请使用相对路径或常见变量（`$HOME`、`$PROJECT_ROOT`）。 |
| **限定工具范围** | 仅请求技能实际需要的工具。避免使用宽泛的 `"tools": ["*"]`。明确声明工具依赖项。 |


## 🤝 贡献指南 <a id="-contributing"></a>

欢迎贡献！指南请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 通过 PR 提交新技能
- 改进现有技能定义

**注意：** 请不要提交三小时前才创建的技能。我们目前重点关注已被社区采用的技能，尤其是由开发团队发布并在实际使用中得到验证的技能。重质不重量。

## 贡献者鸣谢 ♥️ <a id="contributor-️-thanks"></a>
![Contributors](https://contrib.rocks/image?repo=voltagent/awesome-agent-skills&max=500&columns=20&anon=1)

## 许可证 <a id="license"></a>

MIT 许可证 - 参见 [LICENSE](LICENSE)

这是一个精选列表。此处列出的技能由各自的作者和团队创建并维护，而非由我们维护。我们选择获得社区采用且经过验证的技能，但不审计、背书或保证所列项目的安全性或正确性。这些项目未经安全审计，投入生产前应进行审查。

如果你发现列表中的技能存在问题，或希望移除自己的技能，请[提交 issue](https://github.com/VoltAgent/awesome-agent-skills/issues)，我们会尽快处理。

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
