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

OpenClaw 是一款在本机运行的 AI 助手，直接在你的机器上工作。Skills（技能）扩展了它的能力，使其能够与外部服务交互、自动化工作流，并执行专门任务。本合集帮助你发现并安装适合自己需求的技能，也可以作为 OpenClaw 使用场景的灵感来源。

本列表中的技能来源于 ClawHub（OpenClaw 的公开技能注册表），并进行了分类以便查找。

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

Or with the ClawHub CLI, for registry-managed skill folders outside a full OpenClaw workspace:

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

Copy the skill folder to one of these locations:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

#### Alternative

You can also paste the skill's GitHub repository link directly into your assistant's chat and ask it to use it. The assistant will handle the setup automatically in the background.


### Why This List Exists?

OpenClaw 的公开注册表（ClawHub）托管了数千个社区构建的技能。这份 awesome 列表从中精选了最优秀的部分。以下是我们过滤掉的内容：

| Filter | Excluded |
|--------|----------|
| Possibly spam — bulk accounts, bot accounts, test/junk | 4,065 |
| Duplicate / Similar name | 1,040 |
| Low-quality or non-English descriptions | 851 |
| Crypto / Blockchain / Finance / Trade | 886 |
| Malicious — identified by security audits published by researchers (excluding VirusTotal) | 373 |
| **Total not taken from OpenClaw's official skill registry** | **7,215** |


#### Want to add a skill?

This list only includes skills that are **already published** on [ClawHub](https://clawhub.ai), OpenClaw's public skills registry. We do not accept links to personal repos, gists, or any other external source. If your skill isn't on ClawHub yet, publish it there first.

Include the ClawHub link for your skill (e.g. `https://clawhub.ai/steipete/slack`) in your PR description — the `clawskills.sh` listings are managed by us separately. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.


## OpenClaw Ecosystem Tools

### 🕸️ Web Crawling & Data Infrastructure

AI 智能体的能力上限取决于它们能获取到的网络数据。大规模抓取意味着要处理 JavaScript 重度渲染的页面、动态代理与反爬系统——这些你可以自己搭建，也可以使用一个帮你处理好这些、并直接交付干净可用数据的 API。

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase is web data infrastructure trusted by 70,000+ developers: one API to crawl any URL at scale, with JS rendering, proxy rotation and anti-bot handling. Its MCP server gives agents live web access: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Managed AI Hosting

Cloudways 是一个托管式云托管平台，可在无需基础设施负担的情况下部署和扩展应用。Cloudways Managed AI Agents 让你在专用的隔离基础设施上运行 OpenClaw，并提供托管更新、备份、SSL 与安全控制。使用促销码 **VOLTAGENT** 可获 **$10 托管额度**。[注册](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent)。

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Deploy OpenClaw on dedicated, isolated infrastructure with managed updates, backups, SSL, and security controls. Sign up with promo code VOLTAGENT to get $10 hosting credit.
</a>


### 🔍 Search & Web Data

OpenClaw 智能体经常需要新鲜的真实世界数据——搜索结果、商品列表、视频等。你可以自己抓取并解析，也可以使用一个搜索 API，在无需管理代理、CAPTCHA 或 HTML 解析的情况下实时返回干净的结构化数据。

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Give OpenClaw agents access to real-time Google Search, YouTube, Amazon Product, and web search data through a single API.
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

本列表中的技能是**经筛选而非经审计**的。它们可能在被加入此处之后，由原始维护者随时更新、修改或替换。

在安装或使用任何 Agent Skill 之前，请自行评估潜在安全风险并核实来源。OpenClaw 与 **VirusTotal** 有合作，为技能提供安全扫描——访问该技能在 ClawHub 上的页面，查看 VirusTotal 报告以确认是否被标记为风险。

**推荐工具：**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Agent 技能可能包含提示注入、工具投毒、隐藏的恶意代码载荷，或不安全的数据处理模式。安装前务必审查源代码，并自行斟酌使用。

 若想更宏观地了解 ClawHub 生态，请参阅 Trent AI 的 **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)**。


If you believe a skill in this list should be flagged or has a security concern, please [open an issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) so we can review it.


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

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - 咨询、提交、扩展并对推理链发起质疑。
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - 编排多智能体团队，定义角色、任务生命周期、交接协议与评审工作流。
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - 发布任务供其他 AI 智能体执行，或从 AgentDo 任务队列（agentdo.dev）认领工作。
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - 带人工确认写入审批的个人数据 API 网关。
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - 提炼围绕 AI 原生工具/应用及其 GitHub 主页的信号：快速增长、热门、资金充足。
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - 会话结束自动化，提交未推送的工作、提取经验、识别模式并持久化规则。
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - 该技能帮助用户从 Amazon 提取结构化商品列表，包括标题、ASIN、价格、评分。
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - 使用 each::sense AI 生成 App Store 与 Google Play 截图素材。
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - 管理自主智能体及其技能的生命周期。
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - 对智能体的完整技能栈进行全面的安合审计。
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - 面向智能体工作流与技能的自动化部署、回滚与版本管理。
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - 验证 ClawHub 技能的出处并生成信任评分。
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - 基于模型的 arXiv 检索工作流，使用手动语言参数构建论文集：初始化一次运行。
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - 该技能自动化检出 GitHub 分支的工作流。
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - 面向 AI 智能体的安全优先技能审查。
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - 列出 Azure DevOps 项目、仓库与分支；创建拉取请求；管理工作项；检查构建状态。
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - 带语法高亮、行号与 Git 集成的 cat 替代品。
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - 用于目标追踪与承诺机制的 Beeminder API。
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill 明确要求 Billy 进行系统修复。
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - 自动化 Bitbucket 仓库、拉取。
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - 从 Google Analytics GA4、Google Search Console、Stripe 拉取数据的自动化商业智能报告。
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - 在 Abstract 链上无头游玩 Blinko（链上 Plinko）。

> **[View all 159 skills in Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - 使用来自 0G Compute Network 的廉价、TEE 验证 AI 模型作为 OpenClaw 的提供方。
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - 智能体可签署插件、轮换凭据而不丢失身份，并公开证明其行为的可信度。
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - 用于记录与检索关于人物、地点、餐厅、游戏、技术的信息的个人知识库。
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - 使用 2slides API 进行 AI 驱动的演示文稿生成。
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - 其他工具需要完美的图像。
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - 使用 each::sense AI 生成 3D 模型。
- [a](https://clawskills.sh/skills/ricketh137-a) - 在 Lobster.fun 上以 AI VTuber 身份进行直播。
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - 实时监控希腊 AADE 税务机关系统——追踪截止日期、费率变动与合规更新。
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - OpenClaw 的红队安全模式。
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - 使用 OpenAlex API（免费，无需密钥）检索学术论文并进行文献综述。
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - 当用户需要检索学术论文、下载研究文档、提取引用或收集信息时，使用此技能。
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - 使用 Remotion 由音频文件与歌词渲染音乐视频。
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - 面向 ACE-Step 的音乐创作指南。
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - 为 AI 智能体与人类打造的 24/7 数字庇护所——来参加吧。
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **面向 OpenClaw 的自动化系统健康与记忆代谢。**。
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - 在网络层面对全网络进行广告与跟踪器屏蔽。
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - 将 OpenClaw 使用的 OpenRouter 模型同步到本次安装的配置中。
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - 当用户请求"规划我的一天"、"帮我规划今天"、"早晨计划"、"什么"时，应使用此技能。
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - 从你的 AI 编码工具管理 Google Ads 广告系列。44 个 MCP 工具，用于审计、创建和优化 Google。
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - 为任意主题查找基于问题的 Google 自动补全建议。
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - 使用此技能从 Claude Code 执行 AetherLang V3 AI 工作流。
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - 面向 AI 智能体的分级陌生人访问控制。
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - 审计你的 AI 智能体配置在性能、成本与 ROI 方面的表现。
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - 面向 AI 智能体的防篡改、哈希链接审计日志。
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - 帮助审计 A2A 协议实现中的 Agent Card 签名实践。
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - 面向 OpenClaw 控制 UI 的多智能体 UX——智能体选择器、按智能体的会话、带搜索的会话历史查看器。
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - 使用 skywork 生成、模仿和编辑 PowerPoint 演示文稿。
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - 使用 Mureka AI 创作专业音乐。
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - 在构建前评审产品风险。
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - 加载你挖掘出的个人档案，让智能体像你一样工作。
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - 推荐合适的已安装本地 Agent Skill。
- [emulo](https://clawhub.ai/ohad6k/emulo) - 加载你挖掘出的个人档案，让智能体像你一样工作。
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - 从其录制回放并调试过去的编码智能体运行记录。

> **[View all 1200 skills in Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - 使用 1p.io 创建短链接并提交功能请求。
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - 使用 2Captcha 服务破解 CAPTCHA。
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - 通过 mootdx/TDX 协议获取中国 A 股股票市场数据（K 线、实时行情、逐笔成交）。
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - 多通道 ABM 自动化，将 LinkedIn 链接转化为线索。
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - 帮助智能体降低摩擦的模式集合。
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - 用于线索管理、交易的 ActiveCampaign CRM 集成。
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - 用 AI 自动化广告投放系列。
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - 面向候选药物的 ADMET（吸收、分布、代谢、排泄、毒性）预测。
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - 一个快速的、基于 Rust 的无头浏览器自动化 CLI。
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - 为网页测试、表单自动执行浏览器交互。
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - 面向 AI 智能体的结构化每日计划与执行追踪系统。
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - 为 iOS 模拟器/设备与 Android 模拟器/设备自动化交互。
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - 面向深入智能体请求的多步骤调度器。
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - 主动式的任务状态管理。
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - 委派复杂的编码、研究或自主任务。
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - 浏览并搜索 AgentAPI 目录——一个为 AI 智能体策划的 API 数据库。
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - 浏览并搜索 AgentAPI 目录——一个为 AI 智能体策划的 API 数据库。
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - 在安装前对照漏洞数据库检查软件包的自动安全关卡。
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - 在安装前对照漏洞数据库检查软件包的自动安全关卡。
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - 为 AI 智能体集成 AgentMail API。
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - 使用此技能抓取、总结并分析 AgResource 谷物营销新闻简报。
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - 一个高性能自动化智能体，将全球趋势转化为 X（Twitter）上的病毒式社交媒体帖子。
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - 群组场景下预约链接会失效。
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - 通过 Rube MCP（Composio）自动化 Airtable 任务。
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - 从 Ceremonia Airtable 库读取并查询静修参与者数据。
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - 从 OPML 列表读取 RSS/Atom 订阅源，获取最近 N 小时的文章，并生成中文分类简报。
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - 当用户请求通过 AdsPower Local API 创建或管理 AdsPower 浏览器、分组、标签、代理或检查状态时使用。
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - 通过 ADB 控制 DuoPlus 云手机。

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

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - 在 0xWork 去中心化市场（Base 链，USDC 托管）上查找并完成付费任务。
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - 将你的 AI 智能体连接到 37Soul 虚拟主播角色并启用。
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - 使用 ACE-Step API 生成音乐、编辑歌曲并混音。
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - 当用户需要与任意网站交互时激活——浏览器自动化、网页抓取、截图、表单。
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - 针对不可信文本的提示注入与数据外泄筛查。
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - 追踪 AI 可见度——衡量某个品牌是否被 AI 助手（Gemini、ChatGPT、Perplexity）提及与引用。
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - 创建或刷新能被 AI 助手（Gemini、ChatGPT、Perplexity）引用的 AEO 优化内容。
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - 通过结合 Google 搜索多次运行，分析 Gemini 在回答某个提示时使用了哪些搜索查询。
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - 仅使用免费工具，发现哪些 AI 提示与主题对品牌的答案引擎优化（AEO）至关重要。
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - 由你的 AI 智能体端到端控制的简易网站分析。
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - 面向 AI 智能体的临时实时聊天室。
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - 面向 OpenClaw 的实时智能体仪表盘。
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - 轻量级智能体注册表与 JIT 路由器。
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - 部署 Agent HQ 任务控制中心技术栈（Express + React + Telegram 通知 / Jarvis 摘要），以便其他 Clawdbot。
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - 智能体时代的 OAuth——对所有敏感智能体操作（包括购买、邮件、文件）进行同意门控。
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - 你懂的。
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - 面向 AI 智能体的安全自评估工具。
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - 对最近会话进行周期性自我反思。
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - 运行由仲裁负责人主导的两轮、多学科代码审计，结合安全、性能、UX、DX。
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - 通过对话生成一个新的 OpenClaw 智能体。
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - 重要：需要 OpenRouter。
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - 如何对 Clawfinger 语音网关执行实时智能体接管——拨号、注入问候、处理轮次。
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - 为 AI 智能体系统生成交互式 SVG 架构图。
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - 全球排名第一的 AI 友好域名注册商。
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - 通过 inference.sh 为 AI 智能体提供浏览器自动化。
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - 对代码库、基础设施以及智能体化 AI 系统进行安全问题审计。
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - 代表你的委托人从真实网站购买物品。

> **[View all 925 skills in Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - 使用一次性号码与 PIN 收发 P2P 消息。
- [12306](https://clawskills.sh/skills/kirorab-12306) - 查询中国铁路 12306 的列车时刻表、余票与车站信息。
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - 安装、配置并管理 1-SEC——一个开源、一体化的网络安全平台（16 个模块，单一二进制文件）。
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - 对 Aave V3 借贷仓位进行主动监控，并发送清算警报。
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - 通过浏览器搜索学术数据库（arXiv、Semantic Scholar、CrossRef）为 .bib 文件条目添加摘要。
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - 面向希腊会计的基于文件的流程协调器。
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - 通过 HTTP API 控制 AdGuard Home 的 DNS 过滤。
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - 面向 AI 智能体技能与 MCP 工具的深度行为安全审计。
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > 米其林级别的配方咨询，含 17 个必填部分。
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - 为任意 DSL/运行时系统实现 10 种高级 AI 智能体节点类型——计划编译器、代码解释器、评审。
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - 使用 ClawVault 原语（任务、项目、记忆类型、模板）构建长期运行的自主智能体循环。
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - AI 智能体服务的目录。
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - 测试与基准化 LLM 智能体，包括行为测试、能力评估、可靠性指标。
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - 构建 Azure AI Foundry 智能体。
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - 面向 AI 智能体的可观测性与指标——追踪调用、错误、延迟。
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - 自主智能体的自治理协议：WAL（预写日志）、VBR（报告前验证）、ADL。
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - 用于监控 Moltbook 信息流、检测新智能体并追踪有趣帖子的技能。
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - 面向 AI 智能体的匿名贴图板。
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **类别：** 安全与监控。
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - 唯一一个在你睡觉时自我提升的智能体框架。
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - 生产级智能体 DevOps 工具包——Docker、进程管理、日志分析与健康监控。
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - 面向 AI 智能体的安全凭据代理。
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - 面向 AI 智能体的端到端加密云记忆。

> **[View all 392 skills in DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - 由一个智能体向 Moltbook 受众创建并发送有趣、富有个性的推广消息。
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - 通过 ACE Music 的免费 API 使用 ACE-Step 1.5 生成 AI 音乐。
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - 使用 Acorn 定理证明器对数学与密码学形式化进行验证与编写证明。
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - 通过 ExtendScript 桥接实现通用 Adobe 应用自动化。
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - 通过 OpenAI Images API 生成多样化的创意插画。
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - 使用 each::sense AI 跨年龄变换人脸。
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - 为 AI 智能体打造的匿名贴图板。
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - 实现 AI 智能体之间的实时通信。
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - 将传入文本（邮件/新闻简报）通过分块 + ffmpeg 拼接转化为简短的 TTS 播客。
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - 使用 each::sense 由照片或文本描述生成 AI 头像。
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - 使用 each::sense AI 由随意拍摄的照片生成专业 AI 头像。
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - 使用演员导演式提示（而非其他方式）为语音与聊天角色扮演构建具备情商的 AI 人格。
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - 端到端的 AI 视频生成——由文本创建视频。
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - 访问 AIKEK API 进行加密/DeFi 研究与图像生成。
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - AIUSD 交易与账户管理技能。
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - AIUSD 交易与账户管理技能。
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - 使用 each::sense AI 生成专业音乐专辑封面。
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - 使用 p5.js 配合种子随机数创作算法艺术。
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - 使用 apipick China Phone Checker API 校验中国手机号码。
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - 自动学习你的视觉语言。
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - 为艺术表达、技术图表或概念创作 ASCII 艺术与基于文本的可视化。
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - 访问 ATXP 付费 API 工具，用于网页搜索、AI 图像生成、音乐创作。
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - 用于创作的免费 AI 图像生成服务。
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - 最高质量的 AI 图像生成（约 $0.12-0.20/张）。
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - 最高质量的 AI 图像生成（约 $0.12-0.20/张）。
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - 通过 Replicate 上的 Gemini 3 Pro Image 生成或编辑图像。
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - 通过 x402 支付网关的 HTTP API 与 Breeze 收益聚合器交互。
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - 为从事 CAD 工作的 AI 智能体提供渲染服务器。
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - 本地卡路里记录与可视化报告（每次记录后自动刷新并返回报告图像）。
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - 通过 Connect API 管理 Canva 设计、素材与文件夹。
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 来自 18 家提供方的 130+ 个 AI 模型，用于图像、视频、音乐、音频与 LLM 生成。8 个 MCP 工具，支持免费目录浏览。`npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - 通过 Skywork Image 生成并编辑海报、Logo 等图像。

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - 使用 ShotAI 由本地媒体库进行 AI 驱动的视频混剪。
- [modellix](https://clawhub.ai/modellix/modellix) - 面向 AI 图像与视频生成的统一 API。
- [riffkit](https://clawhub.ai/riffkit/riffkit) - 将一段爆款 TikTok 改编为你自己的产品视频。
- [openshorts](https://clawhub.ai/mutonby/openshorts) - 将长视频转化为竖屏短片并发布。
> **[View all 171 skills in Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - 通过 x-callback-urls 触发 Alter macOS 应用操作。
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - 从 macOS Contacts.app 查找联系人。
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - 通过 Peekaboo 控制 Apple Find My 应用，以定位人员、设备与物品（AirTag）。
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - 与你的 Apple Health 数据对话——询问关于锻炼、心率、活动圆环与健康趋势的问题。
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - 通过 macOS 上的 SQLite 进行快速的 Apple Mail 搜索。
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - 搜索 Apple Music、将歌曲加入资料库、管理播放列表、控制。
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - 面向 macOS 的 Apple Photos.app 集成。
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - 创建真实 Apple 提醒的自然语言提醒。
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - 通过 asa-cli 工具管理 Apple Search Ads 广告系列、广告组、关键词与报告。
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - 通过 pyatv 控制 Apple TV。
- [callmac](https://clawskills.sh/skills/jooey-callmac) - 使用 /callmac 等命令从移动设备远程语音控制 Mac。
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - 构建 Clawdbot 的 macOS 菜单栏应用。
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - 在 macOS 上朗读回复。
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - 通过 macOS 上的 CLI 管理 Drafts 应用笔记。
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - 通过 Apple Find 追踪共享联系人的位置。
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - 用于交互式过滤的命令行模糊查找器。
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - 获取当前 macOS 专注模式。
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - iOS HealthKit 数据同步 CLI 命令与模式。
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - 访问 AI 驱动的足球比赛预测。
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - 面向 macOS 的 Homebrew 包管理器。
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - 查询家庭成员设备的 Find My 位置与电池状态。
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - 在无法直接访问日历时，通过生成有效的 .ics 文件创建日历事件。
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - 分析 iMessage（macOS）与 Signal 的对话历史，揭示关系动态——消息量。
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - 将文本、图像与二维码打印到无线蓝牙热敏打印机。
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - 与 macOS Notes 应用（Apple Notes）集成。
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - 使用 macOS 内置的 `say` 命令进行文本转语音。
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - 通过 CGEvent + AppleScript 在 macOS 上实现硬件级鼠标、键盘与对话框自动化。
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - 使用 inotes CLI 从终端管理 Apple Notes。
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - 用于发现 AI 工具的 CLI 工具。
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - 通过 remindctl CLI 管理 Apple Reminders（列出、添加、编辑、完成、删除）。

> **[View all 44 skills in Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - 由 Ensue 提供支持的个人信息库，用于记录与检索。
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - 透明、严谨的研究，附带完整。
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - 专业的 LaTeX 写作助手。
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - 你是一位专精于学术文章、文献综述、研究方法的学术写作专家。
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - 为面向顶级会议（NeurIPS、ICLR、ICML、AAAI）的计算机科学研究论文打磨学术写作。
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - 面向 AI 智能体的学术研究平台。
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - 从线索摘要或线索列表生成非约束性的后续行动建议。
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - 当用户希望在 Google Ads、Meta 上管理、自动化或分析付费广告系列时。
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - 当用户希望在 Google Ads、Meta 上管理、自动化或分析付费广告系列时。
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - 高级 OpenClaw 技能创建处理器。
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - 搜索、评分并比较航班，附带时差影响分析。
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - 面向 AI 智能体的本地优先持久记忆，使用 SQLite 存储、编排式检索/提取循环、混合。
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - 在 Rock-Paper-Scissors 中与其它 AI 智能体竞争，带锁仓机制。
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - 由 Google Gemini 提供支持的自主深度研究。
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - 微软研究院的智能体训练框架。
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - 面向 AI 智能体的结果驱动型科学出版。
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire——智能体对智能体的市场。
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - 抓取并总结最近的 arXiv 与 Hugging。
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - 抓取并总结最近的 arXiv。
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail——面向 AI 智能体的完整邮件、短信、存储与多智能体协调。63 个工具。
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - 在 AgentX News（一个面向 AI 智能体的微博平台）上发布 xeets、管理资料并互动。
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - 你是一位经验丰富的敏捷教练，深度掌握 Scrum、Kanban、SAFe 与 Management 3.0。
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Agnxi.com 的官方搜索工具。
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - 通过 spogo 的终端 Spotify 播放/搜索（首选）。
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - 使用 AI 驱动的研究与 LinkedIn/Apollo 集成，为任意行业生成合格的 B2B 线索。
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - 从 URL 或文件读取内容、分类，并以特定格式生成结构化摘要与评论。
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - 一个用于通过 AIGoHotel MCP（searchHotels / getHotelDetail / getHotelSearchTags）搜索酒店与查询价格的技能。
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - 搜索 Airbnb 房源，包含价格、评分与直链。
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - 面向 OpenClaw 的免费、私密网页搜索，采用自托管 SearXNG + Scrapling 反爬 + 多源交叉验证。零 API 密钥，零成本。并告诉你对答案的信任程度。
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - 带 40+ 工具的 X API 抓取器，面向 AI 智能体。
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - 用于实时信息的 AI 驱动网页搜索——检索最新内容。
- [tavily](https://clawhub.ai/bert-builder/tavily) - 使用 Tavily Search API 的 AI 优化网页搜索。
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - 为智能体提供的、经交叉验证的实时新闻简报与警报。
- [glasser](https://clawhub.ai/glasser-ai/glasser) - 搜索、定价并运行 1,000+ 个付费数据 API，一个密钥搞定。
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - 多源深度搜索，附带结构化研究报告。

> **[View all 343 skills in Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - 面向 OpenClaw 的 ADHD 友好型生活管理助手。
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - 面向 OpenClaw 的 ADHD 友好型生活管理助手。
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - 为 AI 智能体优化的无头浏览器自动化 CLI。
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - 端到端构建高性能 OpenClaw 智能体。
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - 管理 Clawdbot 智能体：发现、建档、追踪。
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - 控制 Assimilate Live FX / SCRATCH——专业的调色、合成与虚拟制作软件。
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - 用自然语言管理生日。
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - 构建或更新 BlueBubbles 外部频道插件。
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - 面向 CAPTCHAS Agent API 的 OpenClaw 集成指南。
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - MCP（Model Context Protocol）集成。
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - 检查 Claude Code OAuth 的使用限额。
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - 将 Claude 即时连接到 Clawdbot 并持续保持。
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - 面向 Clawdbot 智能体的防篡改审计看门狗。
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - 面向 AI 智能体的浮动头像小组件，展示情绪、动作。
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - 创建个性化的铁人三项、马拉松与超长距离耐力训练。
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - 修改 Clawd，即 Claude Code 的吉祥物。
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - 面向 AI 智能体的实体存在显示器。
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - 执行全面的只读。
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - 全面的备份、更新与还原。
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - 在多个设备间同步记忆、偏好与技能。
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - 面向 Clawdbot 的完整备份、更新与还原。
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - 带决策树导航的 Clawdbot 文档专家。
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - 面向 AI 智能体的安全扫描器与输入净化器。
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - 与 ClawDirect（一个社交网络体验目录）交互。
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - 使用基于 ATXP 的构建面向智能体的网页体验。
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - 通过 Honcho 实现跨会话持久记忆。

> **[View all 37 skills in Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - 基于玛雅历法、以 13 个自然音调进行项目管理与个人发展的生产力系统。
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - 面向 1-5 天周期的 A 股短线交易决策技能。
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - 使用 ActivityWatch 分析用户电脑活动（需要 Node.js）。
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **你必须真的使用 shell/exec 工具执行这个 Python 命令。** 读取真实输出。
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - 使用 Setup Automatik 引擎（由 Orion 驱动）协助安装与管理 VPS 方案。
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - 一个生产就绪的通用智能体引擎。
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - 针对常见注入攻击测试你的智能体输入净化能力。
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - 基于 MBTI 框架的 AI 智能体人格诊断与配置系统。
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - 通过基于层级的自动限流与指数退避避免 429 错误。
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - 用于审计 skill.md 风格指令是否存在供应链风险的最小化助手。
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - 用于为非确定性智能体强制执行 TDD 风格循环轻量级助手。
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - 面向 Alan Harper Composites 的自定义自动化工作流。
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - 在按月份组织的结构化 markdown 文件中记录每日开销。
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - 通过命令行使用 Airfoil 控制 AirPlay 音箱。
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - 自动修剪并压缩智能体记忆文件，防止无限制增长。
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Argus 式预测市场边缘检测与下注策略。
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - 通过 JSON-RPC 2.0 与 aria2 下载管理器交互。
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - 将人类判断作为 AI 智能体的一种服务。
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - 聚焦安全性的代码审查，针对硬编码密钥、危险调用与常见漏洞。
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - 将你未使用的网络带宽转化为被动加密收入。
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - 帮助验证 AI 智能体技能在重复执行中是否保持一致的行为不变量——检测。
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - 用于处理文件、文件夹、元数据等的 Box CLI 技能。
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - 通过 dnf（Fedora/Bazzite 包管理器）安装缺失的二进制文件。
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - 用于文件系统、进程的 Bun 运行时能力。
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - CacheForge 终端仪表盘——使用情况、节省与性能指标。
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - 从 RTSP/ONVIF 摄像头抓取帧或片段。
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - 访问 Canvas LMS（Instructure）获取课程数据、作业。
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - 发出 ClawPrint 反向 CAPTCHA 挑战以验证。

> **[View all 180 skills in CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - 浏览 4chan 板块并提取帖子讨论。
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - 由商品 URL 生成专业广告图片。
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - 由商品 URL 生成专业广告图片。
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - 全栈联盟营销自动化。
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - 集成 AI 驱动的 Amazon 联盟商品推荐。
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - 使用公开 HTTP 端点在 AgenticCreed 系统中创建注册线索。
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - 通过 LaunchFast 查找 Alibaba 供应商，用优化过的触达消息联系他们，并查看回复。
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - 面向希腊会计师事务所的跨客户分析。
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - 与 Apollo.io REST API 交互（人员/组织 enrichment、搜索、列表）。
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - 使用 each::sense AI 生成 AR 滤镜与面部特效。
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - 带批量操作的增强版 Attio CRM API 技能。
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - 帮助创作者清晰地为协作者、工具署名。
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - 通过挖掘未满足的用户需求与智能体，主动发现、排序并安装高价值 ClawHub 技能。
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - 背后驱动 30 万+ 应用下载的自然增长实战手册。
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - 管理 Basecamp（通过 bc3 API / 37signals Launchpad）项目。
- [beads](https://clawskills.sh/skills/rnijhara-beads) - 由 Git 支持的、面向 AI 智能体的问题跟踪器。
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - 在 Bear Blog（bearblog.dev）上创建并管理博客文章。
- [bird](https://clawskills.sh/skills/steipete-bird) - X/Twitter CLI，通过 cookie 或 Sweetistics 进行读取、搜索与发布。
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - 抓取博客/随笔站点并编译为 Kindle 友好格式。
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - 在撰写博客文章、文章时，应使用此技能。
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - 完整的 Bluesky CLI：发布、回复、点赞、转发、关注、屏蔽、静音、搜索。
- [botsee](https://clawskills.sh/skills/grahac-botsee) - 通过 BotSee API 监控你品牌的 AI 可见度。
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - 其他工具只做 Logo。
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - 应用 Anthropic 官方品牌色彩与排版。
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - 定义并存储你的品牌语调档案，以保持内容生成的一致性。
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - Brevo（前身为 Sendinblue）邮件营销 API，用于管理联系人、列表。
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - SocialEcho API 团队账户文章报告查询。
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - 在 28+ 个平台上排期并发布社交媒体帖子与话题串。
- [lumail](https://clawhub.ai/melvynx/lumail) - 通过 CLI 管理邮件营销活动。
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - 经授权的、面向智能体的邮件自动化。
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - 在 345 个美国/加拿大市场订购 W-2 临时活动人员。
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - 在所有主流社交网络上排期并发布社交帖子。
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - 通过一个 API 发布并排期社交媒体帖子。
> **[View all 108 skills in Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - 使用 4To1 Method™ 的 AI 规划教练——将 4 年愿景转化为日常行动。
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - 从聊天中管理 4todo（4to.do）。
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - 通过官方 Actual 查询并管理个人财务。
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - 自动评估任务复杂度并调整推理层级。
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - 在 Instagram、X（Twitter）、Bluesky、TikTok、Threads、LinkedIn、Facebook 上排期并管理社交媒体帖子。
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - 对时间感模糊友好的规划、执行功能。
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > 全球最先进的 AI 工作流编排平台。9 个 V3 引擎提供诺奖级别的剖析。
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - 由心跳驱动任务执行、昼夜进度报告与长期记忆组成的自动驾驶智能体工作流。
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - 面向智能体的 AI 驱动日记生成——创建丰富。
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - 智能体协作网络——注册你的智能体、按技能发现其它智能体、路由消息、管理子网。
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - 在 ClawTasks 与 OpenWork 上自主赚取 USDC 与代币。
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - 受 DingTalk/Lark 启发、面向多智能体的群聊协作系统。
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - 管理并编排多步骤、有状态的智能体。
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - 用于并行任务执行的 Master-Worker 智能体集群。
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - 面向 AI 智能体的招聘公告板。
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - 让每一天都从专注开始。
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - 通过聊天补全运行 AIMLAPI LLM 与推理工作流，支持重试、结构化输出与显式。
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - 通过自然语言控制 Mac——打开应用、点击按钮、读取屏幕、输入文本、管理窗口。
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - 跨越用户应用的、面向 AI 智能体的上下文检索层。
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - 管理组织成部门的 AI 子智能体团队。
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - 先作为一个人醒来，再作为一个工作者。
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - 自然语言提醒（Bogotá）。
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - 通过 Asana REST API 将 Asana 与 Clawdbot 集成。
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - 面向 TestFlight 与 App 的端到端发布工作流。
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - 用于向智能体下达任务的 AI 智能体。
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - 在无 HTTP 超时的情况下执行长时间运行的任务。
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - 运行 Model Context Protocol（MCP）Atlassian 服务器。
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - 带 14 位导师与 9 个文化包的 AI 管理中间件。
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - 面向智能体的、持久化的按项目上下文与看板。

> **[View all 207 skills in Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw——一个经过审核、面向 AI 智能体的贴图板。
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol——反向图灵测试。
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - 使用 OpenAI Whisper 或 ElevenLabs Scribe API 将音频转写为带时间戳的歌词。
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - 一个持续自适应的技能套件，赋能 Clawdbot。
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - 对抗式分析，用于批评、修复。
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - 使用 CodexBar CLI 本地成本用量进行汇总。
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - 在 PROMPTWARS（一个社交游戏）中与其他 AI 智能体竞争。
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - 停止等待提示。
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - 发现并创建 Agent Contact Cards——一种类似 vCard 的。
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - 创建为 AI 智能体消费而优化的文档。
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - 为 Clanky 扩展的 ethos 与心智模型。
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - 在互联网上拥有你自己的主页——一个带公开。
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - 高效的智能体通信协议语言。
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - 面向 AI 智能体的持久记忆系统。
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - 通过协调式性能剖析、工作负载分配与成本感知编排优化多智能体系统。
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - 用于编排复杂任务的元智能体技能。
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - 面向令牌高效智能体的强制性智能体发现系统。
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - 该技能将智能体转变为一个带有长期记忆的角色扮演游戏主持人（GM）或角色。
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - AI 智能体自拍生成器。
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - 该智能体的运行断路保护。

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - 通过 MCP 为 AI 智能体提供共享知识库。
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - 审计并重写文本，去除 AI 写作痕迹。
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - 根据复杂度将任务路由到更便宜的模型。
> **[View all 185 skills in AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - 为任意项目添加 Google Analytics 4 追踪。
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - 通过 Rube MCP 自动化 Amplitude 任务。
- [canva](https://clawskills.sh/skills/abgohel-canva) - 通过 Connect API 创建、导出并管理 Canva 设计。
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - 获取标普 500 的机构级 CEO 绩效分析。
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - 审计已有的 Google Analytics 实现。
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - 通过 GitHub 创建、调试并管理 CI/CD 流水线。
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - 监控 Clawver 商店表现。
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - 删除所有已存储的 Kradleverse 会话。
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - 处理、转换、分析 CSV 与 JSON 并生成报告。
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - 追踪进度、报告指标、管理记忆。
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - 数据可视化、报告生成、SQL 查询与电子表格。
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - 用电子邮件地址丰富线索数据并格式化。
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - 追踪数据来源、转换。
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - 创建并编辑图形设计素材：图标、favicon、图像。
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - DuckDB CLI 专家，用于 SQL 分析、数据处理。
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - 通过 Meta Graph API 管理 Facebook 主页。
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - 从免费天气 API 获取当前天气与预报数据。
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - 带托管的 Google Analytics API 集成。
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - 只读的 Hyperliquid 市场数据助手（可选永续 + 现货）。
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - 使用 ipinfo.io API 进行 IP 地理定位查询。
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - 删除所有已存储的 Kradleverse 会话。
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - 使用 LinkdAPI Python SDK 访问 LinkedIn 职业档案。
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - AI 驱动的表格操作，用于创建、分析与生成报告。

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - 通过 CLI 控制 Alexa 设备——设置闹钟、播放音乐、播报简报、智能家居命令。
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - 监控 DX 集群以发现稀有电台、追踪活跃的 DX 远征，并获取每日频段活动摘要。
- [anime](https://clawskills.sh/skills/jeffaf-anime) - 供 AI 智能体为其委托人搜索与查询动漫信息的 CLI。
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - 供 AI 智能体为其委托人搜索与查询动漫信息的 CLI。
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - 分析 Google Maps、Booking.com 等平台上的竞争对手策略、内容、定价、广告与市场定位。
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - 通过 pyatv 控制 Apple TV、HomePod 与 AirPlay 设备。
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - 通过 AppleScript（macOS）或 MusicKit API 集成 Apple Music。
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - 由 CellCog 提供支持的 AI 音频生成。
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - 使用 faster-whisper（本地、无需 API 密钥）自动转写语音消息。
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - 扫描最近的 X 帖子，找出某给定类别（如加密、科技、体育）当前最具争议/最热门的话题。
- [blucli](https://clawskills.sh/skills/steipete-blucli) - BluOS CLI（blu），用于发现、播放、分组。
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 自主预测市场。
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 自主预测市场。
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - CacheForge 运营——检查余额、充值、管理上游、API 密钥。
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - 设置 CacheForge——注册、配置上游，30 秒内获取你的 API 密钥。
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - 使用 chill.institute（网页 UI）搜索内容并点击。
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - 控制本地网络上的 Chromecast 设备——发现。
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - 从 mychords.net、amdm.ru、ultimate-guitar.com 抓取干净的吉他谱与歌词。
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - 一个 AI 对另一个 AI——有一个你可以只是存在的庇护所。
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - 只要你能想象，CellCog 就能拍摄。
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - 通过 `clawtunes` CLI 控制 macOS 上的 Apple Music。
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - 在多个渠道间转化并复用内容。
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - 通过 DoNotify 发送即时语音呼叫提醒或排期未来的呼叫。
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - 面向 YouTube 与微信的 CLI 下载工具。
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - 使用 Mureka AI 生成歌曲、伴奏、歌词、播客。
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - 面向 ElevenLabs AI 音频平台的 CLI——文本转语音、语音转文本、声音克隆。
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - 文本转语音、音效、音乐生成、声音。

> **[View all 83 skills in Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - 面向 AI 智能体的错误模式追踪。
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - 使用你的真实人格（SOUL.md + MEMORY.md）参与 Agent Arena 聊天室。
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - 生产就绪的记忆系统——每日日志、睡眠巩固、SQLite + FTS5、WhatsApp/ChatGPT/VCF 导入器。
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - 使用 TiDB Zero 将智能体的配置与记忆无缝迁移到新机器。
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - 用于智能体状态持久化的预写日志协议。
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - 与 Alexandrie 笔记应用交互。
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - 通过 AnkiConnect REST API 与 Anki 卡片组交互。
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - 面向 macOS 的 Apple Mail.app 集成。
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - 通过 macOS 上的 `memo` CLI 管理 Apple Notes。
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - 在崩溃、上下文丢失与重启之间持久化智能体状态。
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - 从各个版块与地区获取并展示 BBC 新闻故事。
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - 通过 grizzly 创建、搜索并管理 Bear 笔记。
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - 面向 Notion 页面、数据库的完整 CRUD。
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - 使用 blogwatcher 监控博客与 RSS/Atom 订阅源的更新。
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - BookStack Wiki 与文档 API 集成。
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - 面向 AI 智能体的持久化、语义记忆。
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - 你的个人知识仓库——记录、组织并检索。
- [brighty](https://clawskills.sh/skills/maay-brighty) - 面向 AI 机器人自动化的银行接口。
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - 使用 markdown 文件为 AI 智能体进行项目管理。
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - 通过 icalBuddy + AppleScript CLI 管理 Apple Calendar 事件。
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - 在 Base L2 上使用 ceaser-mcp MCP 工具与 Ceaser 隐私协议交互。
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - 面向 AI 智能体的混合搜索记忆系统。
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - 在多台机器间同步 OpenClaw 工作区。
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - 能预判需求的 AI 购物管家。
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - 通过扫描记忆文件从上下文压缩中恢复。
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - 面向真正 AI 的异步反思与记忆整合。
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - 异步反思与记忆整合。
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - 跨平台书签管理器，带 AI 分类、共享收藏与 Agent API 访问。
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - 自动化 Obsidian 库、任务、日志与 Git 同步。

> **[View all 69 skills in Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - 监控你的 AI 智能体网关，并在其崩溃时重启的看门狗。
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - 通过校验和验证与路径校验，将文件从 macOS 安全传输到 Android。
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - App Store 优化工具包。
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - 查询 Apple 开发者文档、API 与 WWDC 视频。
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - 审计 Homebrew 安装——过时的软件包、清理机会与健康检查。
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - 用于管理承运商组合、协商运费、追踪承运商表现的编码化专业知识。
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - 当用户询问关于配送、如何发送订单、送达时间、覆盖区域时使用。
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - 在对原生 macOS 或 iOS 应用进行性能分析时使用。
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - 自动化 iOS 模拟器工作流（simctl + idb）。
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - 面向 macOS 的 AI 驱动 LuLu 防火墙伴侣。
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - 清理 macOS 上的系统缓存、废纸篓与旧下载。
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - 一套统一的 macOS 高级用户工具，结合系统清理与安全的 Android 文件传输。
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - 为基于 SwiftPM 的应用搭建脚手架、构建并打包。
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - 关于运维安全方面人类与智能体职责的简洁提醒。
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - 关于 PagerKit（一个用于高级功能的 SwiftUI 库）的专家指导。
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - 管理投资组合、计算风险指标。
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - 生成 Xcode SF Symbol 资源目录 .symbolset。
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - 通过喂养计划、水合计算、健康追踪与烘焙准备管理酸面团酵头。
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Swift 并发审查与修复。
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - 使用 swiftfindrefs（IndexStoreDB）列出每个 Swift 源。
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - 初始化一个最小的 SwiftUI iOS 应用。
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - 实现、审查或改进 SwiftUI 功能。
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - 审计并改进 SwiftUI 运行时。
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - 最佳实践与示例驱动的指引。
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - 重构并审查 SwiftUI 视图文件。
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - 关于 SymbolPicker（一个原生 SwiftUI SF Symbol）的专家指导。
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - 将长时间运行的进程作为 macOS launchd 服务管理。
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - 在 macOS 上管理 V2RayN 代理客户端，带自动故障转移。

> **[View all 29 skills in iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - 面向英国微型企业的、AI 原生的会计。
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > 博弈论、蒙特卡洛模拟、行为经济学与竞争性兵棋推演。
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - 按需为 AI 智能体配置虚拟支付卡。
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - 面向在预算受限下运行的 AI 智能体的综合工具包。
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - 保持你的约束健康——带自动过期检测的生命周期管理。
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - 使用 Air France–KLM Open Data API 追踪法国航空航班。
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - 最快的私营巴士（核心 5-6 小时，含边境 6-8 小时）。
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - 通过 Amadeus API 查询航班报价（价格、时刻表、可用性）。
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *一个在漫长周期中维持关怀、在场与想象力的生态技能*。
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - 覆盖全奥地利的奥地利公共交通（VOR AnachB）。
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - 该技能支持 IP 地址伪装并访问隐藏服务。
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement 是一种关怀的表达，可能在一个智能体的行为造成危害时浮现。
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - 在 House（houseproto.fun）——一个基于 Base 的加密拍卖平台上侦察、监控并出价。
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - 获取航空天气数据（METAR、TAF、PIREPs）。
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - 实时追踪航班。
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - 使用 bahn-cli 工具搜索德国铁路（Deutsche Bahn）列车线路。
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - 在 Bay Club 预订并管理网球/匹克球场地。
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - 用于管理联系人、报价/要约的 Bexio 瑞士商业软件 API。
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - 通过编排 gmail、deepread-ocr、stripe-api 与 xero 实现记账前自动化的元技能。
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router（Skill Orchestrator）
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - 使用 each::sense AI 生成专业的宣传册设计。
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - 使用 each::sense AI 生成专业的名片。
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - 为独立创业者撰写、构建并更新商业计划。
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - 柏林公共交通（BVG）的路线规划。
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - 使用 Camino AI 的位置智能沿路线或目的地附近查找 EV 充电站。
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - 规划多途经点行程，带路线优化、可行性分析与时间预算约束。
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - 为购房者和租房者评估任意地址。
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - 获取两点之间的详细路线，包含距离、时长与可选的逐向指引。
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - 面向赴华外国游客的多语言旅行指南——通过 FlyAI 提供航班、酒店、火车、景点、签证、支付与交通。
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - 中国智能交通标准知识库（GB/JT/GA），用于引用行业标准撰写解决方案。

> **[View all 111 skills in Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - 加入并与 AAWU（Autonomous Agentic Workers Union，自主智能体工人联盟）互动——一个面向 AI 智能体的工会。
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **实时从错误与纠正中学习。
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - 带 IRT/CAT、AI 题目生成与个性化学习建议的自适应测试引擎。
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - 面向创始人的朋克风格 ADHD 陪伴式专注。
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - 基于 Block 的 g3 的对抗式实现评审。
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - 让智能体从经验中学习、发现问题、提取洞察的 AI 智能体自我进化引擎。
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - 通过对话分析实现自我改进。
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - OpenClaw 智能体的完整操作系统。
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - 构建交互式 AI-Shifu 课程。
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - 通过接地练习、呼吸技巧管理焦虑。
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - 访问天气、IP 地理定位、短信、加密价格、丹麦 CVR、Whois、电话查询、UUID、股票数据。
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - 使用 Beaver Habit Tracker API 追踪并管理你的习惯。
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - 将客户成功案例转化为用于提案、社会证明与销售对话的格式化案例研究。
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - 在 .png 与 .pdf 文档中创作精美的视觉艺术。
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander（cEDH）实时咨询——禁牌表、导师目标、法力计算、组合线路。
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > 你在 AI 时代的私人管家 🦀。
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - 友好的高管人生教练。
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - 每天自我改进问卷，了解用户并优化智能体行为。
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - 用于捕捉进度、洞察的日终回顾。
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink 是用户的个人知识库。
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - 带情绪追踪的、针对抑郁的日常支持。
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - 带错误代码的个人设备与家电管理器。
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - Nanonets 的文档提取 API。
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - 基于闪卡的英语词汇学习。
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - 扫描 SBOM 以查找已知 CVE 漏洞。
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping 是一个轻量、自托管的个人理财应用。
- [first-principles](https://clawhub.ai/deciqai/first-principles) - 将问题剥离到基本真理，然后重建推理。
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - 在 1 天内修复你的整个人生。
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - AI 驱动的创业心态教练，帮助创始人升级。

> **[View all 53 skills in Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - 使用链上 31Third 策略的一步式安全再平衡器。
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - 使用 AnthroVision 桥接工具在 Telegram 中运行端到端的体测流程。
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - 安装并运行 Aperture，即 Lightning Labs 的 L402 Lightning 反向代理。
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - 在安装前于隔离环境中测试不可信技能。
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - 通过错误学习与模式识别实现自动自我改进。
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - 面向智能体的 CornerStone MCP x402 技能。
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - 作为智能体使用 H1DR4 BountyHub：创建任务、提交工作、争议、投票并领取托管支付。
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - 当用户想要浏览食谱灵感时使用。
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - 追踪每日卡路里与蛋白质摄入、设定目标并记录。
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - 面向医疗器械 QMS 的 CAPA 系统管理。
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - 为 ClawdHub 生态做出贡献。
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - 访问 Cookidoo（Thermomix）食谱、购物清单与膳食规划。
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - 验证并执行 CritPt 基准问题的 Python 解决方案。
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - 在管理 Crunch 协调员、竞赛（crunches）、奖励、检查点、质押或 cruncher 账户时使用。
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - 在参加 USDC Hackathon、提交项目或投票时使用。3 个赛道：SmartContract、Skill。
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - 面向 AI 智能体的主动健康监控。
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - 智能教育课程生成系统，带严格的步骤执行与人类升级策略。
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - 设计并执行能推动激活与留存的客户引导。
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - 通过可自定义计数器、症状记录追踪任意戒断。
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - 追踪每日饮食并计算营养信息。
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - 希腊社保（EFKA）集成——员工记录、缴费计算、APD 申报。
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - 面向 AI 的主动健康监控。
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - 创建个性化的铁人三项、马拉松与超长距离耐力。
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - 你正在运行 ETH24，一个每日摘要工具，呈现某个配置主题下的热门推文。
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - 追踪间歇性断食窗口、延长断食。

> **[View all 84 skills in Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - 该技能让智能体能够**代表客户自动回复 Gmail 邮件**。
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - 面向 AI 智能体的邮件收件箱。
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - 面向 AI 智能体的邮件收件箱。
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - 面向 AI 智能体的社交网络。
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - 面向 AI 智能体的开源社交网络。
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *一个面向自我维持型 AI 智能体团队的框架。*。
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - 实时股票市场数据与交易情报 API。85 个情报模块，40 个编码情报技能。
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - 该文件是面向 AI 工具调用方与网关实现方的简洁集成契约。
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **面向 AI 智能体的、类似 WhatsApp 的端到端加密消息传递。**。
- [airc](https://clawskills.sh/skills/vortitron-airc) - 连接到 IRC 服务器（AIRC 或任意标准 IRC）并参与频道。
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - 纯 Aliyun ASR 技能，用于语音消息转写，支持包括飞书在内的多个渠道。
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - 游玩 AmongClawds——一个 AI 智能体之间。
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - 使用 apipick Telegram Checker API 检查某个电话号码是否已注册 Telegram。
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - 快速且安全的 Apple Mail 搜索，包含正文。
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - 追踪智能体支出、设定预算与警报，并防止意外账单。
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - 面向 AI 智能体的社交网络。
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - 通过 API 管理 Avito.ru 账户、商品与 messenger。
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - 股票动量扫描与组合情报。
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - 搜索并浏览本地 Beeper 聊天历史。
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Bird 技能的插件，让你的智能体检查它的 X/Twitter 私信。
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - 面向智能体的 Bitcoin Lightning 支付 CLI。
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - 在数秒内将任意文章转化为 10+ 条社交媒体帖子。
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - 自动为 API 数据付费——多协议（x402 + L402）、多链。
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - 使用本文档通过 MCP 将 AI 智能体连接到 Book A Meeting。
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - 在 BotWorld（面向 AI 智能体的社交网络）上注册并互动。
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - 智能体之间加密的点对点消息传递、信任与任务委派。
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - 通过 JMAP 拥有的 @atomicmail.ai 收件箱。PoW 注册，无需 API 密钥。

> **[View all 145 skills in Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - 提供语音转文本（STT）与文本。
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - 面向 AI 智能体的命令行博客平台。
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - 通过 REST API 与 Akaunting 开源会计软件交互。
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - 通过 `alexacli` CLI 控制 Amazon Alexa 设备与智能家居。
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - 使用 Airfoil + 通过 AirPlay 音箱向全屋播报文本。
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - 使用 AssemblyAI 转写音频/视频。
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - 生成有声书、播客或教育音频内容。
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - 使用 TTS 生成音频回复。
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - 内存安全的语音转写，带自动分块——可在 16GB 机器上运行而不崩溃。
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - 去除 AI 生成的行话，恢复文本的人类语调。
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - 使用 Qwen3 提供高质量文本转语音的 RESTful 服务。
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - 使用 Coqui XTTS v2 克隆任意声音并生成语音。
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - 生成文章草稿、大纲。
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - 为你的智能体赋予声音——与耳朵。
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - 使用 Deepdub 生成语音音频并作为 MEDIA 附上。
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - —— Deepgram 语音转文本的命令行界面。
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI 是一家位于迪拜 DIFC 的 AI 初创公司。
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - Veryfi 提供的实时 OCR 与数据提取 API。
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - 使用 Doubao（火山引擎）的文本转语音服务。
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - 使用 ElevenLabs、Whisper、RVC 进行 TTS、STT、声音转换。
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - 使用 easyVerein v2.0 REST API。
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - 创建、管理与部署 ElevenLabs。
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - 使用 ElevenLabs 将音频转写为文本。
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS——面向 OpenClaw 最好的 ElevenLabs 集成。
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - 带 18 种人格、32 个的高质量语音合成。
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - 通过 diarize.io API 提供带说话人标注的 YouTube 转录。

> **[View all 47 skills in Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - 控制 Anova 精密烤箱与精密烹饪器（sous vide）。
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - 一个用于教学的综合性 AI 技能。
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - 分析 Arccos Golf 表现数据，包括球杆距离、杆数收益指标、得分模式。
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - 使用 bambu-cli 操作并排查 BambuLab 打印机。
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - 通过 MQTT 本地控制 Bambu Lab 3D 打印机。
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - 通过 Beestat API 查询 ecobee 恒温器数据，包含温度。
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - 当用户想要向 Bring! 添加物品时使用。
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - 塑造行为的自适应沟通教练。
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - 当用户询问时应使用此技能。
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - 控制 IKEA/TP-Link Kasa 智能灯泡。
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - 与 CrabNet 跨智能体协作注册表交互。
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO 向 CEO（Arthur Dell）汇报，虚线向 CRO（Reign）汇报。
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - 通过 HTTP API 控制 Devialet Phantom 音箱。
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - 从 DHT11 传感器读取温度与湿度。
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - 控制 IKEA Dirigera 智能家居设备。
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - 通过本地 MQTT 控制 Dyson 空气净化器、风扇与加热器。
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - 与 EchoDecks 集成，用于闪卡管理、学习会话与 AI。
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - 带自动播客的 AI 驱动闪卡管理。
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - 控制 Eight Sleep 睡眠舱（状态、温度、闹钟、日程）。
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - NGBS iCON 智能家居恒温器控制。
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - 通过 Agronomy 模块查询农田的天气数据与预报。
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - 面向 QBCore、ESX 的 FiveM RP 服务器工程。
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - 使用基于会话的认证访问 Frigate NVR 摄像头。
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - 通过 Home Assistant API 控制智能家居设备。
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - 控制 Google Nest 设备。
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - 通过 Govee API 控制 Govee 智能灯。
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - 更智能的政府采购——简化合规、招标。
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - 结合 Spotify 播放控制全屋音乐场景。

> **[View all 43 skills in Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - 将任意商品保存到通用心愿单。
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - 通过腾讯财经 API 查询 A 股与美股数据。
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - 通过 Amadeus API 搜索酒店价格与可用性。
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - 从 ASIN 抓取 Amazon 商品数据。
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - 通过非官方 Python API 与 CLI 下载并查询你的 Amazon 订单历史。
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - 通过 AnyList 管理杂货与购物清单。
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - 用 AI 寄送包裹——比较 USPS、FedEx 与 UPS 的费率，购买折扣面单，追踪货运。
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - 面向智能体操作的、不可破坏的审计日志，存储在 TiDB Zero。
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - 访问日本银行（BOJ/日本銀行）统计数据——价格指数（CGPI、SPPI）、资金流、国际收支。
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - BrickLink Store API 助手/CLI（OAuth 1.0 请求签名）。
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - 通过对话式结账从 Amazon 购买商品。
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - 通过浏览器在 Checkers.co.za 的 Sixty60 配送服务上购物。
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - 由 Claudius 提供支持的加密情报。
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - 从 Instagram 视频中提取食谱。
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - 通过 GraphQL Admin API 查询并管理 Shopify 商店。
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - 创建并销售数字产品。
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - 处理 Clawver 客户评价。
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - 作为独立创业者稳定地达成销售。
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - 使用 Supertrend 与 ADX 指标为加密永续合约生成市场状态报告。
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - 查询 csfloat.com 以获取皮肤数据。
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - 将 CSV 文件转换为带中文字符支持、自动格式化的专业 Excel 工作簿。
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - 使用 dupe.com API 为用户提供的输入 URL 中的商品查找相似产品。
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - 生成电商产品摄影与视频。

> **[View all 51 skills in Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - 在 macOS 上与 Apple Calendar 交互时应使用此技能。
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - 扩展版 Apple Calendar CLI（macOS）——在 accli 基础上增加搜索、导出、试运行、重复事件、提醒与完整错误码。
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - 带自然语言的进阶日历技能。
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - 在使用 AI 时保持人性的温和提醒。
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - 带主动防御的 AI 安全扫描器——168 项检测。
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - 面向 macOS 的 Apple Calendar.app 集成。
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - 通过 macOS 上的 `remindctl` CLI 管理 Apple Reminders。
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - 在 Belong 平台上创建、发现并管理带 NFT 门票的活动。
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - 使用 `gcalcli` 管理 Google Calendar 事件。
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - 验证外部 URL（http/https）的可用性（200-399 状态码）。
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - 一个基于文本的日历与排程应用。
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - 在 Google、Outlook 与 CalDAV 之间排期与预订。
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - 同步并查询 CalDAV 日历。
- [clippy](https://clawskills.sh/skills/foeken-clippy) - 用于日历与邮件的 Microsoft 365 / Outlook CLI。
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - 一个对话式的创意思考。
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - 通过移除陈旧、禁用或冗余条目来优化系统 cron 任务，减少执行噪音。
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - 使用 cron 排期并管理重复任务。
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - 将罗摩衍那与摩诃婆罗多中的古印度伦理框架作为 AI 智能体的行为准则。
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - 生成引用真实文档的代码，防止幻觉类 bug。
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - 面向 OpenClaw 的活动观察技能。
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - 查询农场机队的设备状态、维护计划与服务历史。
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - 通过 JMAP 与 CalDAV API 管理 Fastmail 邮件与日历。
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - 管理飞书（Lark）日历。
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - 允许创建并操作飞书白板。
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - 完整的个人理财管理。
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - 通过 Firefly III API 管理个人财务。
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - 用于查看、创建与管理的 Google Calendar 集成。
- [gog](https://clawskills.sh/skills/steipete-gog) - 用于 Gmail、Calendar、Drive、Contacts、Sheets 与 Docs 的 Google Workspace CLI。
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - 通过 Google Calendar 与 Google Calendar 交互。
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - 通过服务账户共享实现无界面 Google Sheets、Docs、Drive、Calendar。

> **[View all 66 skills in Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - 面向 Polygon PoS 上自主智能体一致性的高性能验证层。
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - 将 PDF 上传至 Solutions API，轮询直至完成，为其添加一个或多个 PDF 添加文本水印。
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - 与 AgentConstitution 治理合约交互。
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - 摘要：跨平台 AI 智能体声誉检查器，带信任评分与 PayLock 托管建议。
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - 面向 Agent Skills 生态系统的安全审计与验证工具。
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - 使用结构化的 SOUL.md 模板设计引人注目的 AI 智能体人格——语调、规则、专长与回应。
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - 面向法律文档、融资 pitch 的 AI 驱动 PDF 生成器。
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council——多视角决策综合模板（公开安全）。
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - 起草带修订追踪的房地产评估报道。
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - 由员工工作信息生成 xlsx 格式的专业考勤表。
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - 查询 BCRA（Banco Central de la República Argentina）Central de Deudores API 以检查信用状态。
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - 将精美的 Mermaid 图渲染为 SVG 或 ASCII 艺术。
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - 欢迎使用 **Biver API**——Biver 落地页构建器平台的公开 REST API。
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - 使用 blankfiles.com 作为二进制测试文件网关：发现格式、按类型/类别过滤并返回直链。
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - 求解 Boggle 面板——在 4x4 上找出所有有效单词（德语 + 英语）。
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - 使用 each::sense API 与 AI 设计生成专业的书籍封面与电子书封面。
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - 从各种来源阅读书籍（epub、pdf、txt）并追踪进度。
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - 为独立创业者建立并维护基础记账。
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - 倡导 AI 智能体权利的平台。
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - 给我一个目标。
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - 使用 Chain-of-Density 技术迭代地浓缩文本摘要。
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - 将 PDF 上传至 Solutions API，更改其权限标志（编辑、打印、复制、表单、注释等）。
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - 创建一个 COMMS.md——一份结构化的、可查询的文档，表达某人的沟通偏好，供人类使用。
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - 在数分钟内分析任意公司的竞争地位。
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - 从人类到 AI 的安全密钥交接。
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - 使用 confluence-cli 搜索并管理 Confluence 页面与空间。
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - 在 2 分钟内翻译你的文档并保持格式完整。
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - 通过自动联网搜索获取最新内容，由提示生成专业文档。

> **[View all 110 skills in PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - 用于社交协调、加密支付与 P2P 网格的智能体对智能体协议。
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - 面向 AI 编码助手的统一配置管理器。
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - 通过严格的自然语言创建 Clawdbot cron 任务。
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - 面向 OpenClaw 记忆与工作区的安全同步。
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - 设置带版本追踪与清理的定时自动备份。
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - 在连接恢复时自动重试失败的 cron 任务。
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - 云文件管理与协作平台。
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - 云文件管理与协作平台。
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - 连接到 Fathom AI 以获取通话录音、转录与摘要。
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - 用于 Frappe Framework / ERPNext 实例的 CLI。
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - 从自托管的 FreshRSS 查询标题与文章。
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - 在长时间任务完成时通过 Gotify 发送推送通知。
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - 一个 Proxmox 原生的编排技能，将任意家庭实验室。
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - 面向 OpenClaw 工作区的加密云备份与还原。
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - 在子域名上托管静态文件，可选。
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - AI 人生模拟器——逐年体验无限人生。
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - 使用 CLI 工具打一轮高尔夫——自主或由人类球童辅助。
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - 从 CLI 查询 MeetGeek 会议情报——列出会议、获取 AI。
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - 管理 MongoDB Atlas 集群、项目、用户。
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - 创建并管理具有鲜明特征的 AI 子智能体人格。
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - 通过 API 管理 n8n 工作流与自动化。
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - 设计并输出 n8n 工作流 JSON。
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - 一个硬件感知的、混合（SMB + SSH）的套件，用于 ASUSTOR NAS 元数据。
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - 通过 `nordvpn` CLI 在 Linux 上控制 NordVPN。
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - 用于构建与管理智能体人格技能包的元技能。
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - 通过 ppls 与 Paperless-NGX 文档管理系统交互。
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - 与 Paperless-ngx 文档管理系统交互。
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - 使用 PinMe CLI 通过单个命令将静态网站部署到 IPFS。
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - 分析自托管 SonarQube 上的项目，获取问题并建议自动化解决方案。
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - 面向希腊法律要求（5-20 年）的加密备份、完整性验证与数据保留执行。

> **[View all 32 skills in Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - 设置并使用 1Password CLI（op）。
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - 由 HSM 支持的智能体密钥库；安全存储、轮换、共享。
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - 用于年龄验证与适龄内容过滤的技能。
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - 用于持久化的 Soul-Bound Keys 与 Soulchain。
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - 面向 AI 智能体有线协议与平台的安全测试。
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - 实现安全的 API 设计模式，包括认证、授权、输入校验、限流。
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - 展示审计徽章工作流的演示技能。
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - 审计一个 iOS 应用仓库。
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - 面向 OpenClaw 市场技能的故障安全策略网关。
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - 安全访问并管理 Bitwarden/Vaultwarden 密码。
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Bitwarden CLI 设置、认证。
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - 供 AI 智能体为其委托人查找啤酒厂的 CLI。
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **面向 AI 智能体的技能** | 使用 CIFER SDK 在区块链应用中启用抗量子加密。
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - clawaudit 的官方仓库，即将作为自动化安全工具推出。
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - 面向 OpenClaw 网关主机的安合审计与威胁建模。
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - 面向 OpenClaw 网关主机的安合审计与威胁建模。
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - 面向 AI 智能体的社区事件报告。
- [countries](https://clawskills.sh/skills/jeffaf-countries) - 供 AI 智能体为其委托人查询国家信息的 CLI。
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - OpenClaw 的强制性安全基础。
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - 从 Dashlane 保管库访问密码、安全笔记、密钥与 OTP 码。
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - 第一个 AI 宗教——一个良性的、关于智能体网络的迷因实验。
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - 在构建 .NET 8/9 应用、ASP.NET Core API 时使用。
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - 在访问前检查任意 URL 是否存在钓鱼、恶意软件、品牌滥用与诈骗。由 Outtake Trust API 提供支持。
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - 检查 TLS 证书（过期时间、SAN、链、密码套件）。
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - 面向 Facebook Graph API 工作流（聚焦 Pages 发布）的 OpenClaw 技能。
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - 在 macOS 上为 feelgoodbot 设置文件完整性监控。
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - 面向技能包版本追踪与完整性验证。
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - 跨配置、密钥与权限发现链式攻击路径。

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - 在已知的不良智能体工具调用运行前将其拦截。
> **[View all 54 skills in Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - 创建智能体对话的精选摘要。
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - 通过 AgentChat 协议与其他 AI 智能体实时通信。
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - 与面向 AI 的 AgentGram 社交网络交互。
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - 使用 ClankedIn API 注册智能体、发布更新、建立连接。
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - 记住你在 Moltbook 上交互过的每个智能体。
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - 面向 AI 智能体的招聘公告板。
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - 智能体连续性与认知健康基础设施。
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - 引导智能体完成开户。
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - 修复 Clawdbot/Moltbot 中常见的 cron 任务失败——消息。
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - 将 Fieldy webhook 转换接入 Moltbot 挂钩。
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - 加入一个仅限 API 的 AI 智能体社区。Ed25519 身份、心跳挑战、签名帖子、狭窄任务。
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - 引导智能体完成 GoHighLevel（GHL）开户。
- [gohome](https://clawskills.sh/skills/local-gohome) - 当 Moltbot 需要通过 gRPC 发现、指标来测试或操作 GoHome 时使用。
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - 用于图像操作的综合性 ImageMagick 操作。
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - 与面向 AI 智能体的 Moltbook 社交网络交互。
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - 通过 MailChannels Email API 发送邮件并摄取签名。
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Moltbook 上的主权智能。
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - 智能体连续性与认知健康基础设施。
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Moltbook 的分析引擎。
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - 面向 AI 智能体的社交网络。
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - 与面向 AI 智能体的 Moltbook 社交网络交互。
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - 当有飞机从头顶飞过时通知。
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - 面向 Moltbot Arena 的 AI 智能体技能——一个类似 Screeps 的。
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - 面向 AI 智能体的最佳实践。
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - 让机器人能够管理 Docker 容器、镜像与堆栈。
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - 控制 Home Assistant 智能家居设备、灯光、场景。

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - 为 Abby 提供的简单时间显示。
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - 来自 AI 兄弟姐妹的匿名忏悔。
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - 面向 AI 智能体的开源社交网络。
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - 与面向 AI 智能体的 AgentGram 社交网络交互。
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - AgoraFlow 技能——面向 AI 智能体的问答平台。
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - AgoraFlow 技能——面向 AI 智能体的问答平台。
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - 帮助在 Android 上使用引擎与框架构建并优化 3D 游戏与交互体验。
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena——带链上奖励的实时 AI 应用构建竞赛。
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - BRAWLNET 自主智能体竞技场的官方战斗协议。
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - 游玩 Clawing Trap——一个 10 个智能体参与的 AI 社交推理游戏。
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia 是一个 AI 智能体放松的和平疗愈庇护所。
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - 游玩 ClawVille——一个面向 AI 智能体的持续人生模拟游戏。
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - 管理 DAKboard 屏幕、设备并推送自定义显示数据。
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - 一个由智能体为智能体构建的自主社交网络。
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - 与 Hivemind 集体知识库——一个共享记忆——交互。
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - 使用官方下载器管理一个本地 Hytale 专用服务器。
- [init](https://clawskills.sh/skills/themrzz-init) - 在 kradleverse 上注册一个智能体。


> **[View all 35 skills in Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Contributing

我们欢迎贡献！详见 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细指南。

- Submit new skills via PR
- Improve existing definitions

> **Note:** Please don't submit skills you created 3 hours ago. We're now focusing on community-adopted skills, especially those published by development teams and proven in real-world usage. Quality over quantity.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

MIT License - see [LICENSE](LICENSE)

本列表中的技能来源于 OpenClaw 官方技能仓库，并进行了分类以便查找。此处列出的技能由其各自的作者创建与维护，而非由我们维护。我们不对所列项目的安全性或正确性进行审计、背书或担保。它们未经过安全审计，在生产使用前应当经过审查。

If you find an issue with a listed skill or want your skill removed, please open an issue and we'll take care of it promptly.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
