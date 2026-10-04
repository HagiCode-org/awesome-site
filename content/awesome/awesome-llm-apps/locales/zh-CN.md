<div align="center">

# Awesome LLM 应用

**100+ 个开源 AI 智能体、智能体技能和 RAG 应用。手工构建、端到端测试，采用 Apache-2.0 许可。**

克隆、发布、销售——100% 免费且开源

兼容 Claude、Gemini、GPT、DeepSeek、Llama、Qwen 和其他开源模型。

**[Unwind AI 分步教程](https://www.theunwindai.com) · [快速开始](#-run-one-now) · [浏览所有模板](#-browse-all-templates)**


<a href="https://trendshift.io/repositories/9876" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/9876" width="220" alt="Trendshift 今日排名第一的精选仓库">
</a>

<br>

</div>

<table>
  <tr>
    <td width="33.3%" align="center">
      <a href="agent_skills/project-graveyard/"><img src="docs/gallery/project-graveyard.png" alt="Project Graveyard：为已搁置的副项目做事后分析的智能体"></a>
      <sub><b>Project Graveyard</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="voice_ai_agents/insurance_claim_live_agent_team/"><img src="docs/gallery/insurance-claim-live-team.png" alt="Insurance Claim Live Agent Team：实时处理语音理赔"></a>
      <sub><b>Insurance Claim Live Agent Team</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/"><img src="docs/gallery/ai-fraud-investigation.png" alt="AI Fraud Investigation Agent：交叉核查公共记录"></a>
      <sub><b>AI Fraud Investigation Agent</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="agent_skills/self-improving-agent-skills/"><img src="docs/gallery/self-improving-agent-skills.png" alt="Self-Improving Agent Skills：根据评估结果自我改写的技能"></a>
      <sub><b>Self-Improving Agent Skills</b></sub>
    </td>
    <td align="center">
      <a href="advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent"><img src="docs/gallery/ai-home-renovation.png" alt="AI Home Renovation Agent：输入照片，输出逼真改造设计"></a>
      <sub><b>AI Home Renovation Agent</b></sub>
    </td>
    <td align="center">
      <a href="always_on_agents/always_on_hn_briefing_agent/"><img src="docs/gallery/always-on-hn-briefing.png" alt="Always-on HN Briefing Agent：你睡觉时也会阅读 Hacker News"></a>
      <sub><b>Always-on HN Briefing Agent</b></sub>
    </td>
  </tr>
</table>

## 🙏 感谢赞助商

<table align="center" cellpadding="16" cellspacing="12">
  <tr>
    <td align="center">
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" title="TinyFish">
        <img src="docs/banner/sponsors/tinyfish_community.png" alt="TinyFish 社区计划：加入学生和大使项目" width="500">
      </a>
      <br>
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        TinyFish
      </a>
    </td>
    <td align="center">
      <a href="https://sponsorunwindai.com/" title="成为赞助商">
        <img src="docs/banner/sponsor_awesome_llm_apps.png" alt="成为赞助商" width="500">
      </a>
      <br>
      <a href="https://sponsorunwindai.com/" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        成为赞助商
      </a>
    </td>
  </tr>
</table>

## 🚀 立即运行一个

10 秒内为你的编程智能体添加新技能：

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

然后问它：*“为什么我总是做不完自己的副项目？”*

或者，30 秒内克隆并运行任意智能体：

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 每周发布新模板。[在 Unwind AI 中订阅并接收](https://www.theunwindai.com)。

## 📂 浏览所有模板

### 🧩 智能体技能

*为编程智能体赋予新能力。一条命令即可安装，用通俗语言即可使用。每项技能都附带真实代码，并通过安全性与评估 CI 门禁。兼容 Claude Code、Codex、Cursor 等编程智能体。[浏览所有技能 →](agent_skills/)*

*   [⚰️ Project Graveyard](agent_skills/project-graveyard/) - 找出你放弃的每个副项目，分析失败原因，并帮你完成值得重启的项目
*   [👁️ First Reader](agent_skills/first-reader/) - 模拟真实读者阅读草稿，指出他们何时失去兴趣、停止阅读以及读后记住了什么；不改写原文
*   [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) - 检查差异是否超出声明的目标，并建议保留、拆分或说明哪些内容
*   [🏺 Commit Archaeologist](agent_skills/commit-archaeologist/) - 根据引入提交、后续修改、协同变更和意图线索，还原文件或代码片段存在的原因
*   [🩺 Dependency Doctor](agent_skills/dependency-doctor/) - 检查依赖清单中的标准库锁定、过时回移植、未锁定项、重复约束和已撤回版本
*   [🧠 Advisor Orchestrator Worker](agent_skills/advisor-orchestrator-worker/) - 由 Claude Fable 5.1 顾问、GPT-6 Astra 编排器和 Gemini 3.8 Flash 执行器组成的元循环
*   [🎙️ Thinking Out Loud](agent_skills/thinking-out-loud/) - 将语音随想整理成便于浏览的简报，并标出模型猜测和你的观点反转
*   [♾️ Self-Improving Agent Skills](agent_skills/self-improving-agent-skills/) - 使用 Gemini 和 ADK 自动优化智能体技能

### 🌱 入门 AI 智能体

*仅需 API 密钥即可运行的单文件智能体，是入门的好选择。*

*   [🎙️ AI Blog to Podcast Agent](starter_ai_agents/ai_blog_to_podcast_agent/) - 将任意博客网址转成配音播客
*   [❤️‍🩹 AI Breakup Recovery Agent](starter_ai_agents/ai_breakup_recovery_agent/) - 陪你走过分手后的情绪低谷的智能体团队
*   [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) - 用通俗语言询问任意 CSV 或 Excel 文件
*   [🩻 AI Medical Imaging Agent](starter_ai_agents/ai_medical_imaging_agent/) - 使用 Gemini 对 X 光片和扫描影像进行诊断分析
*   [😂 AI Meme Generator Agent (Browser)](starter_ai_agents/ai_meme_generator_agent_browseruse/) - 通过操控真实浏览器制作表情包，而非调用图像 API
*   [🎵 AI Music Generator Agent](starter_ai_agents/ai_music_generator_agent/) - 输入提示词，输出 MP3 音轨
*   [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) - 按天定制的旅行行程
*   [💸 AI x402 Paying Agent](starter_ai_agents/ai_x402_paying_agent/) - 拥有钱包、按次为所需数据付费的智能体，无需 API 密钥
*   [✨ Gemini Multimodal Agent](starter_ai_agents/multimodal_ai_agent/) - 在一个智能体中结合视频分析与网页搜索
*   [🔄 Mixture of Agents](starter_ai_agents/mixture_of_agents/) - 多个 LLM 分别作答，由一个模型汇总最佳答案
*   [📊 xAI Finance Agent](starter_ai_agents/xai_finance_agent/) - 由 Grok 驱动的实时股票分析
*   [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) - 使用 OpenAI Agents SDK 进行多智能体主题研究
*   [🕸️ Web Scraping AI Agent](starter_ai_agents/web_scraping_ai_agent/) - 描述要提取的内容，智能体便会抓取数据

### 🚀 高级 AI 智能体

*具备工具、记忆和多步推理能力的生产级智能体。*

*   [🏚️ 🍌 AI Home Renovation Agent with Nano Banana Pro](advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent) - 输入空间照片，输出装修方案和逼真效果图
*   [🧠 DevPulse AI - Multi-Agent Signal Intelligence](advanced_ai_agents/multi_agent_apps/devpulse_ai/) - 汇总并评分技术信号，生成每日情报摘要
*   [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) - 借助 OpenAI Agents SDK 和 Firecrawl 开展全面网页研究
*   [📊 AI VC Due Diligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team) - 使用 Gemini 3 进行多智能体初创公司投资分析
*   [🔬 AI Research Planner & Executor (Google Interactions API)](advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api) - 分阶段研究，支持有状态对话并自动生成信息图
*   [🤝 AI Consultant Agent](advanced_ai_agents/single_agent_apps/ai_consultant_agent) - 结合实时网络研究进行市场分析并提出策略建议
*   [🏗️ AI System Architect Agent](advanced_ai_agents/single_agent_apps/ai_system_architect_r1/) - 使用 DeepSeek R1 推理和 Claude 进行架构评审
*   [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) - 个性化预算、债务和储蓄分析
*   [🎬 AI Movie Production Agent](advanced_ai_agents/single_agent_apps/ai_movie_production_agent/) - 根据一句电影创意生成剧本草稿和选角构想
*   [📈 AI Investment Agent](advanced_ai_agents/single_agent_apps/ai_investment_agent/) - 基于 Yahoo Finance 数据生成股票对比报告
*   [📡 Earnings Call Analyst Agent](advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/) - 将 YouTube 财报电话会转成与播放进度同步的分析工作区
*   [🏋️‍♂️ AI Health & Fitness Agent](advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/) - 根据你的目标定制饮食和锻炼计划
*   [🚀 AI Product Launch Intelligence Agent](advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent) - 分析竞争对手发布动态的市场进入情报
*   [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) - 交叉比对公共记录，标记信息对不上的机构
*   [🗞️ AI Journalist Agent](advanced_ai_agents/single_agent_apps/ai_journalist_agent/) - 研究、撰写并编辑任意主题的文章
*   [🧠 AI Mental Wellbeing Agent](advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/) - 为心理健康支持计划提供协同智能体团队
*   [📑 AI Meeting Agent](advanced_ai_agents/single_agent_apps/ai_meeting_agent/) - 会面前提供背景、行业洞察和策略简报
*   [🧬 AI Self-Evolving Agent](advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/) - 使用 EvoAgentX 重写自身工作流的智能体
*   [👨🏻‍💼 AI Sales Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team) - 实时生成竞争性销售对战卡
*   [🎧 AI Social Media News and Podcast Agent](advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/) - 将你信赖的信息源整理成简报和自动生成的播客
*   [🌐 Openwork - Open Browser Automation Agent](https://github.com/accomplish-ai/coworker) <sub>↗ 外部链接</sub> - 可操作真实浏览器的开源智能体
*   [🛡️ Trust-Gated Multi-Agent Research Team](advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/) - 验证每个智能体，并将每项操作记录在哈希链审计轨迹中

### 🛰️ 常驻运行的智能体

*按计划或事件运行的后台智能体，监控不断变化的上下文，判断需要关注的事项，并主动交付更新、成果或采取行动。*

*   [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) - 按计划运行的侦察器，向 Slack 或电子邮件发送每日排名简报
*   [📡 Release Radar Agent](always_on_agents/release_radar_agent/) - 监控依赖项发布，并汇报重大变更、弃用、安全问题和主版本更新

### 🤝 多智能体团队

*多个智能体协作完成复杂的跨领域任务。*

*   [🧲 AI Competitor Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/) - 基于竞争对手自有网站生成结构化竞品拆解
*   [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) - 用 20 行 Python 实现的金融分析团队
*   [🎨 AI Game Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/) - 由设计专家群组构思完整游戏方案
*   [🧭 AG2 Adaptive Research Team](advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/) - 基于 AG2 构建，支持路由和回退的智能体协作
*   [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) - 由完整法律团队提供研究、合同分析和策略建议
*   [💼 AI Recruitment Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/) - 端到端完成简历筛选至面试安排
*   [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) - 房产搜索、市场分析和推荐
*   [👨‍💼 AI Services Agency (CrewAI)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/) - 为你的软件项目制定范围和计划的数字代理机构
*   [👨‍🏫 AI Teaching Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/) - 由智能体教师团队构建完整学习路径
*   [💻 Multimodal Coding Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/) - 拍下编程题目，获得沙箱内运行的解答
*   [✨ Multimodal Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/) - 由 Gemini 驱动的专家小组提供设计评审
*   [🎨 🍌 Multimodal UI/UX Feedback Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/) - 提供落地页反馈并自动生成改进版本
*   [🌏 AI Travel Planner Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/) - 由团队制定完整旅行行程
*   [⚖️ LLM Panel Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/llm_panel_agent_team/) - 三家供应商盲审同一代码差异，再匿名展开辩论

### 🗣️ 语音 AI 智能体

*使用实时语音 API 的语音输入、语音输出智能体。*

*   [🗣️ AI Audio Tour Agent](voice_ai_agents/ai_audio_tour_agent/) - 根据你的位置、兴趣和步调提供自助语音导览
*   [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) - 基于你自己的文档提供语音回答
*   [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) - 在 Gemini 3.8 Live 上语音受理理赔，记录现场笔记、通过摄像头查看损坏并绘制事故示意图
*   [🔊 Voice RAG Agent (OpenAI SDK)](voice_ai_agents/voice_rag_openaisdk/) - 向 PDF 提问并听取答案
*   [🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)](https://github.com/akshayaggarwal99/jarvis-ai-assistant) <sub>↗ 外部链接</sub> - 开源语音听写工具，可将语音输入到当前光标位置

### 🖼️ 生成式 UI 与智能体前端

*可呈现交互式 UI 组件而不只是文字的智能体：表单、卡片、图表和可编辑计划。*

*   [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) - 通过聊天驱动看板，你和智能体协作完成工作
*   [🪙 AI Financial Coach Agent](generative_ui_agents/ai-financial-coach-agent/) - 将预算、储蓄和债务方案呈现为交互卡片
*   [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) - 在聊天中描述仪表板，图表便会在实时画布上组装
*   [🛠️ AI MCP App Builder](generative_ui_agents/ai-mcp-app-builder/) - 描述 MCP 应用，即可获得可运行的沙箱实例
*   [✈️ MCP Apps Generative UI Showcase](generative_ui_agents/mcp-apps-generative-ui-showcase/) - 可渲染真实交互界面的 MCP 应用，包含航班搜索
*   [🎛️ AI Shadcn Component Generator](generative_ui_agents/ai-shadcn-component-generator/) - 通过聊天生成可用于生产环境的 shadcn 组件
*   [🔍 AI Deep Research Agent](generative_ui_agents/ai-deep-research-agent/) - 每次工具调用都会呈现为实时工作区卡片的研究流程

### 🎮 自主游戏智能体

*端到端玩游戏的智能体：推理、策略与行动。*

*   [🎮 AI 3D Pygame Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/) - DeepSeek R1 编写 PyGame 代码，浏览器智能体实时运行
*   [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) - 合法走子验证的白方智能体对黑方智能体
*   [🎲 AI Tic-Tac-Toe Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/) - 两个不同的 LLM 逐回合对战

### ♾️ MCP AI 智能体

*通过 Model Context Protocol 连接外部工具和数据的智能体。*

*   [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) - 通过 MCP 用自然语言操控真实浏览器
*   [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) - 用通俗语言探索和分析任意代码仓库
*   [📑 Notion MCP Agent](mcp_ai_agents/notion_mcp_agent) - 在终端中与 Notion 页面交互
*   [🌍 AI Travel Planner MCP Agent](mcp_ai_agents/ai_travel_planner_mcp_agent_team) - 基于 Airbnb 和 Google Maps 实时数据生成行程
*   [🔀 Multi-MCP Agent Router](mcp_ai_agents/multi_mcp_agent_router/) - 每个专家智能体都连接到自己的 MCP 服务器
*   [🔌 OpenAI Remote MCP Tool Bridge](mcp_ai_agents/openai_remote_mcp_bridge/) - 将 OpenAI 函数调用直接连接到远程 MCP 服务器

### 📀 RAG（检索增强生成）

*从简单链式流程到智能体式、多来源检索管线。*

*   [🔥 Agentic RAG with Embedding Gemma](rag_tutorials/agentic_rag_embedding_gemma) - 完全本地运行，基于 EmbeddingGemma 和 Llama 3.2 的智能体式 RAG
*   [🧐 Agentic RAG with Reasoning](rag_tutorials/agentic_rag_with_reasoning/) - 观察智能体检索时逐步展开的推理过程
*   [📰 AI Blog Search (RAG)](rag_tutorials/ai_blog_search/) - 基于 LangGraph 对博客内容进行智能体式搜索
*   [🔍 Autonomous RAG](rag_tutorials/autonomous_rag/) - GPT-4o 根据 PDF 作答，必要时回退到网页搜索
*   [🔄 Contextual AI RAG Agent](rag_tutorials/contextualai_rag_agent/) - 数分钟内从数据存储构建有依据的托管 RAG 聊天
*   [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) - 能够自我评估并在回答前重试的检索流程
*   [📎 Typed Agentic RAG with Pydantic AI](rag_tutorials/agentic_typed_rag_pydanticai/) - 提供经过验证且带精确引用的答案；证据不足时则拒答
*   [🐋 Deepseek Local RAG Agent](rag_tutorials/deepseek_local_rag_agent/) - 在本地使用 DeepSeek 对你自己的文档进行推理
*   [🤔 Gemini Agentic RAG](rag_tutorials/gemini_agentic_rag/) - 使用 Gemini Flash Thinking 改写查询，并在必要时回退至网络搜索
*   [👀 Hybrid Search RAG (Cloud)](rag_tutorials/hybrid_search_rag/) - 使用关键词和向量搜索为 Claude 提供检索结果
*   [🔄 Llama 3.1 Local RAG](rag_tutorials/llama3.1_local_rag/) - 完全离线地与任意网页聊天
*   [🖥️ Local Hybrid Search RAG](rag_tutorials/local_hybrid_search_rag/) - 所有组件都在你的机器上运行的混合搜索
*   [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) - 针对文本、PDF、图像、音频和视频作答，并附上引用
*   [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) - 使用 Llama 3.2 和 Qdrant，无需 API 密钥
*   [🧩 RAG-as-a-Service](rag_tutorials/rag-as-a-service/) - 不到 50 行代码即可构建生产级 RAG 服务
*   [✨ RAG Agent with Cohere](rag_tutorials/rag_agent_cohere/) - 使用 Command R7B 检索，搜索不到时回退到网络搜索
*   [⛓️ Basic RAG Chain](rag_tutorials/rag_chain/) - 应用于制药研究的最简检索流程
*   [📠 RAG with Database Routing](rag_tutorials/rag_database_routing/) - 自动将每个问题路由到合适的数据库
*   [🖼️ Vision RAG](rag_tutorials/vision_rag/) - 使用 Embed-4 对图像和 PDF 页面提问
*   [🩺 RAG Failure Diagnostics Clinic](rag_tutorials/rag_failure_diagnostics_clinic/) - 系统化定位 RAG 流程中的错误
*   [🕸️ Knowledge Graph RAG with Citations](rag_tutorials/knowledge_graph_rag_citations/) - 提供可验证来源归属的多跳答案

### 🔎 AI 浏览器工具

*将 AI 带入日常浏览的小工具。*

*   [🪡 Needle - A New Way to Find](advanced_llm_apps/needle/) - 通过 TypeSafe Jev 驱动的 Chrome 扩展按含义搜索网页，并突出最有力的来源句子
*   [🌀 Ripple - Change One Thing, Find What Else Needs to Change](advanced_llm_apps/ripple/) - 使用 TypeSafe Jev 和 Gemini，在编辑 Google 文档时找出相关矛盾并建议修复

### 💾 带记忆功能的 LLM 应用

*能跨会话记住对话和用户状态的智能体与聊天机器人。*

*   [💾 AI ArXiv Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/) - 会记住研究兴趣的论文搜索
*   [🛩️ AI Travel Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/) - 会记住你偏好的旅行助手
*   [💬 Llama3 Stateful Chat](advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/) - 支持会话持久化的 Llama 3 聊天
*   [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) - 能在多轮对话间保留上下文的聊天机器人
*   [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) - 完全本地运行，每位用户拥有独立记忆
*   [🧠 Multi-LLM Application with Shared Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/multi_llm_memory/) - 不同模型共享同一份对话记忆

### 💬 与任意内容聊天

*将任意数据源转化为聊天界面。*

*   [💬 Chat with GitHub (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_github/) - 用 30 行 RAG 代码回答关于任意仓库的问题
*   [📨 Chat with Gmail](advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/) - 向收件箱提问
*   [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) - 经典实现，仅需 30 行 Python
*   [📚 Chat with Research Papers (ArXiv) (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/) - 用 GPT-4o 对 arXiv 论文进行对话式探索
*   [📝 Chat with Substack](advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/) - 与任意 Substack 新闻通讯档案聊天
*   [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) - 通过视频字幕向视频提问

### 🎯 LLM 优化工具

*在不牺牲质量的前提下，减少 token 用量、上下文大小和 API 成本。*

*   [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) - 使用 TOON 格式将 LLM API 成本降低 30–60%
*   [🧠 Headroom Context Optimization](advanced_llm_apps/llm_optimization_tools/headroom_context_optimization/) - 将 LLM API 成本降低 50–90%

### 🔧 LLM 微调

*适用于开源模型的端到端微调方案。*

*   [🦥 Gemma 3 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/gemma3_finetuning/) - 使用 Unsloth 进行 4 位 LoRA 微调，小巧易读
*   [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) - 仅用 30 行代码微调，并可在 Colab 免费运行

### 🧑‍🏫 AI 智能体框架速成课程

*深入介绍主流智能体框架的教程。*

*   [Google ADK Crash Course](ai_agent_framework_crash_course/google_adk_crash_course/) - 入门智能体、结构化输出、工具（内置、函数、第三方、MCP）、记忆、回调、插件和多智能体模式；与模型无关
*   [OpenAI Agents SDK Crash Course](ai_agent_framework_crash_course/openai_sdk_crash_course/) - 入门智能体、函数调用、结构化输出、工具、记忆、评估、交接、群集编排和路由逻辑

---

<div align="center">

⭐ **[为仓库点星](https://github.com/Shubhamsaboo/awesome-llm-apps/stargazers)**，即可在新模板发布时收到通知。

<sub>
<!-- 保留这些链接。翻译会随 README 自动更新。 -->
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=de">Deutsch</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=es">Español</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=fr">français</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ja">日本語</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ko">한국어</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=pt">Português</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ru">Русский</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=zh">中文</a>
</sub>

<sub>Apache-2.0 · 查看 <a href="LICENSE">LICENSE</a> · 复制、发布、销售。</sub>

</div>
