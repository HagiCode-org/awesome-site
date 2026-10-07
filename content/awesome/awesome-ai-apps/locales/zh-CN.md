![Banner](/assets/awesome_banner.png)

<div align="center">

# Awesome AI 应用 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://trendshift.io/repositories/14662" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14662" alt="Arindam200%2Fawesome-ai-apps | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</div>

本仓库是一份全面的集合，包含 **132 个项目**、教程以及用于构建强大 LLM 驱动应用的配方，涵盖文本智能体、语音助手、RAG 应用，以及由 MCP 支撑的工具。这些项目为使用各类 AI 框架与技术栈的开发者提供了指南。

## 📋 目录

- [🚀 精选 AI 应用](#-featured-ai-apps)
  - [🧩 入门智能体](#-starter-agents)
  - [🪶 简单智能体](#-simple-agents)
  - [🎙️ 语音智能体](#-voice-agents)
  - [🗂️ MCP 智能体](#️-mcp-agents)
  - [🧠 记忆智能体](#-memory-agents)
  - [📚 RAG 应用](#-rag-applications)
  - [🔬 进阶智能体](#-advanced-agents)
  - [🧬 微调](#-fine-tuning)
- [📺 教程与视频](#-tutorials--videos)
- [🚀 快速开始](#getting-started)
- [🤝 贡献](#-contributing)

---

<div align="center">

## 💎 赞助者

<p align="center">
  衷心感谢我们的赞助者给予的慷慨支持！
</p>

<table align="center" cellpadding="10" style="width:100%; border-collapse:collapse;">
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/brightdata" target="_blank" title="访问 Bright Data">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bright_Data.svg" height="35" style="max-width:180px;" alt="Bright Data - Web Data Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">网络数据平台</span>
        <br>
        <a href="https://dub.sh/brightdata" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 Bright Data 网站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/nebius" target="_blank" title="访问 Nebius Token Factory">
        <img src="./assets/nebius.png" height="36" style="max-width:180px;" alt="Nebius Token Factory">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 推理服务提供商</span>
        <br>
        <a href="https://dub.sh/nebius" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 Nebius Token Factory">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scrapegraphai" target="_blank" title="在 GitHub 上访问 ScrapeGraphAI">
        <img src="https://raw.githubusercontent.com/ScrapeGraphAI/ScrapeGraph-AI/main/docs/assets/scrapegraphai_logo.png" height="44" style="max-width:180px;" alt="ScrapeGraphAI - Web Scraping Library">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 网页抓取框架</span>
        <br>
        <a href="https://dub.sh/scrapegraphai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="在 GitHub 上查看 ScrapeGraphAI">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/memorilabs" target="_blank" title="访问 Memorilabs">
        <img src="assets/memori.png" height="36" style="max-width:180px;" alt="Memori - SQL Native Memory for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 的原生 SQL 记忆</span>
        <br>
        <a href="https://dub.sh/memorilabs" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 Memorilabs 网站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/copilotkit" target="_blank" title="访问 CopilotKit">
        <img src="assets/copilot-kit-logo.svg" height="36" style="max-width:180px;" alt="CopilotKit - Agentic Application Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">智能体应用平台</span>
        <br>
        <a href="https://dub.sh/copilotkit" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 CopilotKit 网站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scalekitt" target="_blank" title="访问 ScaleKit">
        <img src="assets/scalekit.svg" height="36" style="max-width:180px;" alt="ScaleKit - Auth Stack for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 的认证技术栈</span>
        <br>
        <a href="https://dub.sh/scalekitt" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 ScaleKit 网站">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="200" valign="middle" align="center">
      <a href="https://okahu.ai" target="_blank" title="访问 Okahu">
        <img src="assets/okahu.png" height="36" style="max-width:180px;" alt="Okahu - AI Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 可观测性平台</span>
        <br>
        <a href="https://okahu.ai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 Okahu 网站">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/agentfield" target="_blank" title="访问 AgentField">
        <img src="assets/agentfield.png" height="40" style="max-width:180px;" alt="AgentField - Kubernetes for AI Agents">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 智能体的 Kubernetes</span>
        <br>
        <a href="https://dub.sh/agentfield" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 AgentField 网站">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/byteful" target="_blank" title="访问 Byteful">
      <img src="https://byteful.com/favicon.ico" height="40" style="max-width:180px;" alt="Byteful">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Byteful</span>
        <br>
        <a href="https://dub.sh/byteful" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="访问 Byteful 网站">
        </a>
      </sub>
    </td>
  </tr>

</table>

### 💎 成为赞助者

<p align="center">
有兴趣赞助本项目？欢迎随时联系我们！
<br/>
<a href="mailto:contact@studio1hq.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>
</p>

</div>

---

## 🚀 精选 AI 应用

### 🧩 入门智能体

**用于学习和扩展不同 AI 框架的快速上手智能体。** _21 个项目_

- [AutoGen 工具调用入门](starter_ai_agents/autogen_starter)：基于 Microsoft AutoGen `AssistantAgent` 并配合自定义工具，由 Nebius Token Factory 提供支持
- [AWS Strands 智能体入门](starter_ai_agents/aws_strands_starter)：使用 AWS Strands SDK 的天气播报智能体
- [CAMEL AI 模型基准测试](starter_ai_agents/camel_ai_starter)：用于比较各类 AI 模型性能的基准测试工具
- [编码测试框架入门](starter_ai_agents/coding_harness_starter)：基于 OpenAI Agents SDK 的编码循环，包含规划、需审批的编辑、固定测试与有界审查，由 Nebius Token Factory 提供支持
- [CrewAI 研究小组](starter_ai_agents/crewai_starter)：多智能体研究团队示例
- [Docker cagent 多智能体入门](starter_ai_agents/cagent_starter)：Docker 开源的可定制多智能体运行时
- [DSPy 优化入门](starter_ai_agents/dspy_starter)：用于构建和优化 AI 系统的 DSPy 框架
- [Google Agent Development Kit 入门](starter_ai_agents/google_adk_starter)：Google Agent Development Kit 入门模板
- [Hacker News 趋势分析器（Agno）](starter_ai_agents/agno_starter)：基于 Agno 的 Hacker News 趋势分析智能体
- [Hugging Face smolagents 入门](starter_ai_agents/smolagents_starter)：Hugging Face smolagents 代码优先的网络搜索智能体
- [KAOS Kubernetes 多智能体入门](starter_ai_agents/kaos_starter)：具有 MCP 工具与集群内 LLM 的 Kubernetes 原生多智能体系统
- [LangChain 工具调用入门](starter_ai_agents/langchain_starter)：使用 `create_tool_calling_agent` + `AgentExecutor` 的 LangChain 工具调用智能体，由 Nebius 提供支持
- [LangGraph ReAct 智能体入门](starter_ai_agents/langgraph_starter)：带有自定义工具的 LangGraph 预构建 ReAct 智能体（`create_react_agent`），由 Nebius 提供支持
- [Letta 有状态记忆智能体](starter_ai_agents/letta_starter)：跨会话具备持久长期记忆的有状态智能体
- [LlamaIndex 任务管理器](starter_ai_agents/llamaindex_starter)：由 LlamaIndex 驱动的任务助手
- [Mastra 工具调用入门](starter_ai_agents/mastra_starter)：TypeScript 优先的智能体，配合自定义工具，由 Nebius Token Factory 提供支持
- [Microsoft Agent Framework 入门](starter_ai_agents/microsoft_agents_starter)：基于 Microsoft Agent Framework 构建的多智能体旅行规划演示
- [OpenAI Agents SDK 入门](starter_ai_agents/openai_agents_sdk)：包含邮件助手与俳句写作器示例的 OpenAI Agents SDK
- [PydanticAI 天气机器人](starter_ai_agents/pydantic_starter)：提供实时天气信息的智能体
- [Sayna 实时语音智能体](starter_ai_agents/sayna_starter)：具备多供应商 STT/TTS（Deepgram、ElevenLabs、Azure、Google）与 WebSocket 流式传输的实时语音基础设施
- [Semantic Kernel 入门](starter_ai_agents/semantic_kernel_starter)：基于 Microsoft Semantic Kernel `ChatCompletionAgent` 并支持插件式工具调用的智能体

### 🪶 简单智能体

**面向日常 AI 应用的直观、实用用例。** _18 个项目_

- [Agno 智能体示例](simple_ai_agents/agno_ai_examples)：包含网络搜索与知识库的从简单到多智能体示例
- [Agno 智能体界面](simple_ai_agents/agno_ui_agent)：用于网络与金融智能体的交互式界面
- [AI 智能体注册表浏览器](simple_ai_agents/agent_discovery_agent)：在 NANDA、MCP、Virtuals、A2A 与 ERC-8004 注册表之间查找并比较 AI 智能体
- [日历助手](simple_ai_agents/cal_scheduling_agent)：与 Cal.com 集成的日历排程工具
- [成本感知模型路由（RouteLLM）](simple_ai_agents/llm_router)：使用 RouteLLM（GPT-4o-mini 对比 Nebius Llama）进行智能模型路由以优化成本
- [邮件转日历助手](simple_ai_agents/email_to_calendar_scheduler)：由 AI 驱动的 Gmail 阅读器与 Google 日历管理器
- [金融推理智能体](simple_ai_agents/reasoning_agent)：分步金融推理演示
- [人在回路智能体](simple_ai_agents/human_in_the_loop_agent)：用于安全执行 AI 任务的人在回路操作
- [LangChain 运维智能体集合](simple_ai_agents/langchain_simple_agents)：由 Nebius 提供支持的事故响应、客服、供应商风险与数据质量智能体，具备类型化输出与受保护工具
- [Mastra 天气机器人](simple_ai_agents/mastra_ai_weather_agent)：使用 Mastra AI 框架的天气更新工具
- [自然语言数据库助手](simple_ai_agents/talk_to_db)：使用 GibsonAI 与 LangChain 的自然语言数据库查询
- [自然语言 SQL 智能体（LangChain）](simple_ai_agents/langchain_data_agent_poc)：使用 LangGraph、Nebius、只读 SQL 安全机制与 Streamlit 图表的自然语言转 SQL 数据智能体
- [Nebius 聊天](simple_ai_agents/nebius_chat)：面向 Nebius Token Factory 的聊天界面
- [新闻通讯生成器](simple_ai_agents/newsletter_agent)：与 Firecrawl 集成、由 AI 驱动的新闻通讯构建工具
- [股票市场金融智能体](simple_ai_agents/finance_agent)：实时股票与市场数据追踪智能体
- [股票投资组合分析师](simple_ai_agents/stock_portfolio_analyst)：使用 Agno 进行的实时组合估值、集中度分析、风险标记与再平衡建议
- [VoyageCompass 旅行规划器](simple_ai_agents/nebius_travel_planner)：使用 LangChain 与 Nebius 的旅行规划器，具备天气、研究、货币换算、预算与打包工具
- [网页自动化智能体](simple_ai_agents/browser_agent)：使用 Nebius 与 browser-use 的浏览器自动化智能体

### 🎙️ 语音智能体

**实时语音助手与流式语音管线** —— 包含 LiveKit、Pipecat、Gradium，以及 [VoxCode](voice_agents/Cursor_code_editor)（Deepgram + Cursor SDK）。 _9 个项目_

- [AI 演讲教练（Gradium + Nebius）](voice_agents/voice-agent-gradium-nebius-langchain)：使用 Gradium STT/TTS、LangChain 编排与 Nebius 推理的对话式演讲教练
- [客服语音智能体（LiveKit）](voice_agents/customer_support_agent)：由 Nebius 提供支持的语音客服智能体，具备上下文保留的 AI 主管交接、降噪与闲置处理
- [Gemini 实时语音智能体（LiveKit）](voice_agents/livekit_gemini_agents)：在 LiveKit 房间中使用 Google Gemini Live（`gemini` 多模态实时）实现低延迟语音对话的 LiveKit Agents
- [医疗语音联络中心](voice_agents/healthcare_contact_center)：具备预约预订、常见问题处理与主管升级的 Pipecat 医疗联络中心
- [多语言语音智能体（Pipecat + Sarvam）](voice_agents/pipecat_agent)：使用 Sarvam STT/TTS 与 OpenAI 进行聊天的 Pipecat 语音管线；通过 Pipecat runner 使用 WebRTC（浏览器）或 Daily 传输
- [RSVP 确认语音智能体（LiveKit）](voice_agents/livekit_rsvp_agent)：向参会者拨打电话、确认 RSVP 并更新基于 JSON 的活动数据库的外呼语音智能体
- [极速响应销售语音智能体](voice_agents/speed_to_lead_agent)：基于 LiveKit 的语音智能体，可即时联系入站线索、将其转接给专家，并记录到模拟 CRM
- [VoxCode —— Deepgram + Cursor 语音编码智能体](voice_agents/Cursor_code_editor)：用于代码库摘要与架构问答的本地语音工作区；Deepgram Voice Agent 编排、Nebius 推理，以及可选的 Cursor SDK 文件检查与编辑
- [网络搜索语音智能体（LiveKit）](voice_agents/livekit_web_search_agent)：LiveKit + Gemini 实时语音智能体，配备由 Olostep 支撑的 `web_search` 工具，提供新鲜且带来源引用的答案

### 🗂️ MCP 智能体

**使用模型上下文协议（Model Context Protocol）进行外部工具集成的示例。** _14 个项目_

- [Couchbase LangGraph MCP 智能体](mcp_ai_agents/langchain_langgraph_mcp_agent)：与 Couchbase 集成的 LangChain ReAct 智能体
- [Couchbase MCP 服务器](mcp_ai_agents/couchbase_mcp_server)：使用 MCP 协议的 Couchbase 数据库集成
- [自定义 MCP 服务器入门](mcp_ai_agents/custom_mcp_server)：自定义 MCP 服务器实现示例
- [文档问答 MCP 智能体](mcp_ai_agents/docs_qna_agent)：使用 MCP 的文档问答智能体
- [文档 RAG MCP 服务器](mcp_ai_agents/doc_mcp)：语义化的 RAG 文档与问答系统
- [GibsonAI 数据库 MCP 智能体](mcp_ai_agents/database_mcp_agent)：用于管理 GibsonAI 数据库项目与架构的对话式 AI 智能体
- [GitHub MCP 智能体](mcp_ai_agents/github_mcp_agent)：通过 MCP 获取仓库洞察与分析
- [GitHub MCP 智能体入门](mcp_ai_agents/mcp_starter)：GitHub 仓库分析器入门模板
- [酒店查找智能体](mcp_ai_agents/hotel_finder_agent)：使用 MCP 集成进行酒店搜索与预订
- [沙箱化代码执行 MCP 智能体（Docker + E2B）](mcp_ai_agents/e2b_docker_mcp_agent)：通过 MCP Gateway 在沙箱化 Docker 环境中安全运行智能体的安全 AI 智能体
- [安全数据库 MCP 智能体（MCP Toolbox）](mcp_ai_agents/mcp_toolbox_security_agent)：运行于 PostgreSQL 与 MongoDB 之上的安全电商智能体；MCP Toolbox 强制执行每用户数据访问、最小权限角色与授权工具
- [安全 MCP 访问智能体（ScaleKit + Exa）](mcp_ai_agents/scalekit-exa-mcp-security)：结合 Exa 搜索、以安全为核心的 MCP 集成
- [自修复文本转 SQL 智能体（Okahu）](mcp_ai_agents/telemetry-mcp-okahu)：使用 Okahu Cloud 链路追踪、通过托管 MCP 实现的自修复文本转 SQL 演示
- [Taskade MCP 智能体](mcp_ai_agents/taskade_mcp_agent)：通过 Taskade MCP 管理项目、任务与工作流、由 AI 驱动的工作区智能体

### 🧠 记忆智能体

**具备高级记忆能力、用于上下文保留与个性化的智能体。** _13 个项目_

- [具备长期记忆的 AI 研究顾问](memory_agents/ai_consultant_agent/)：使用 **Memori v3** 作为长期记忆载体、并使用 **ExaAI** 进行研究的 AI 驱动咨询智能体
- [使用 Memori 的 arXiv 研究智能体](memory_agents/arxiv_researcher_agent_with_memori)：使用 OpenAI Agents 与 GibsonAI Memori 的研究助手
- [AWS Strands 持久记忆智能体](memory_agents/aws_strands_agent_with_memori)：借助 Memori 记忆系统增强的 AWS Strands 智能体
- [博客写作智能体](memory_agents/blog_writing_agent)：具备记忆能力、可保持风格一致性的个性化博客写作智能体
- [品牌声誉监控器](memory_agents/brand_reputation_monitor)：通过新闻分析与情感追踪、由 AI 驱动的品牌声誉监控工具
- [客服语音智能体](memory_agents/customer_support_voice_agent)：具备语音能力的客服助手，使用 Memori v3 与 Firecrawl 管理知识库
- [工程内容智能体](memory_agents/engineering_content_agent)：以聊天为核心的 Agno 应用，将 HN 需求、DEV.to 供给缺口与 Weaviate Engram 记忆转化为开发者趋势摘要，并通过 Nebius 生成 DevRel 演讲与博客创意
- [求职智能体](memory_agents/job_search_agent)：具备记忆能力、可追踪偏好的求职智能体
- [持久记忆智能体（Agno）](memory_agents/agno_memory_agent)：具备持久记忆能力的基于 Agno 的智能体
- [产品发布智能体](memory_agents/product_launch_agent)：用于分析竞品产品发布的竞争情报工具
- [社交媒体智能体](memory_agents/social_media_agent)：具备记忆能力、可保持品牌声音的社交媒体自动化智能体
- [学习教练智能体](memory_agents/study_coach_agent)：使用 Memori v3 与 LangGraph 对理解程度进行多步验证的 AI 驱动学习教练
- [YouTube 趋势智能体](memory_agents/youtube_trend_agent)：使用 Memori、Agno 与 Exa 进行趋势分析与视频创意的 YouTube 频道分析智能体

### 📚 RAG 应用

**用于文档理解与知识库的检索增强生成示例。** _18 个项目_

- [使用 Agno 与 GPT-5 的智能体 RAG](rag_apps/agentic_rag)：基于 Agno 与 GPT-5 的智能体 RAG 实现
- [使用 LlamaIndex 的类型化智能体 RAG](rag_apps/agentic_typed_rag_llamaindex)：具备结构化答案、本地文档解析，以及对证据薄弱情况确定性拒绝的类型化、引用可验证 RAG
- [代码库问答 RAG](rag_apps/chat_with_code)：对话式代码探索器与文档助手
- [企业级上下文 RAG](rag_apps/contextual_ai_rag)：具备托管数据存储与质量评估的企业级 RAG
- [Gemma 3 文档 OCR](rag_apps/gemma_ocr/)：使用 Gemma 3 模型的基于 OCR 的文档与图像处理工具
- [使用 Neo4j 的 GraphRAG](rag_apps/graphrag_neo4j)：使用 Neo4j 与 Nebius 的知识图谱提取与 Cypher 支撑的检索
- [LiteParse 发票与收据审计器](rag_apps/liteparse_invoice_auditor)：本地 OCR 配合 LiteParse 边界框、Nebius LLM 审计数学错误与重复收费、在扫描件上固定证据，以及 LLM 批量摘要
- [LlamaIndex RAG 入门](rag_apps/llamaIndex_starter)：LlamaIndex 与 Nebius 的 RAG 入门模板
- [LLM 与 RAG 调试器（WFGY 16 问题图谱）](rag_apps/wfgy_llm_debugger)：针对 LLM 与 RAG 缺陷的 16 模式图谱式调试器
- [多 PDF RAG 分析器](rag_apps/pdf_rag_analyser)：多 PDF 聊天与分析系统
- [Nebius RAG 入门](rag_apps/simple_rag)：使用 Nebius 的基础 RAG 实现，便于快速上手
- [NVIDIA Nemotron 文档 OCR](rag_apps/nvidia_ocr/)：使用 NVIDIA Nemotron-Nano-V2-12b 的基于 OCR 的文档与图像解析
- [带重排序的生产级 PDF RAG](rag_apps/advanced_rag_with_reranking)：具备上下文检索、Qdrant 混合搜索、重排序、流式答案、上传摄取与可点击引用的生产形态 PDF RAG
- [Qwen3 PDF RAG 聊天](rag_apps/qwen3_rag)：使用 Streamlit 构建的 PDF 聊天机器人界面
- [简历优化器](rag_apps/resume_optimizer)：由 AI 驱动的简历优化与增强工具
- [可信 RAG](rag_apps/trustworthy_rag)：对 RAG 答案进行引用验证、逐条证据检查与幻觉评分
- [带时间戳引用的视频问答](rag_apps/video_rag)：使用 Gemini 嵌入、Weaviate、Nebius 与可点击时间戳引用的多模态视频检索
- [网络增强的智能体 RAG](rag_apps/agentic_rag_with_web_search)：结合 CrewAI、Qdrant 与 Exa 实现混合搜索能力的高级 RAG

### 🔬 进阶智能体

**用于生产级端到端工作流的复杂多智能体管线。** _35 个项目_

- [AI 对冲基金研究团队](advance_ai_agents/ai-hedgefund)：用于全面金融分析的智能体工作流
- [AI 趋势研究智能体](advance_ai_agents/trend_analyzer_agent)：使用 Google ADK 的 AI 趋势挖掘与分析
- [候选人档案分析器（Candilyzer）](advance_ai_agents/candidate_analyser)：针对 GitHub 与 LinkedIn 档案的候选人分析工具
- [汽车查找智能体](advance_ai_agents/car_finder_agent)：使用 CrewAI 与 MongoDB、由 AI 驱动的二手车推荐系统
- [会议提案生成器](advance_ai_agents/conference_agnositc_cfp_generator)：自动化的会议提案生成系统
- [会议演讲摘要生成器](advance_ai_agents/conference_talk_abstract_generator)：使用 Google ADK 与 Couchbase 自动生成演讲摘要
- [合同审查小组（律师助理）](advance_ai_agents/paralegal_crew)：用于条款提取、风险分析与建议修订标记的 CrewAI 合同审查工作流
- [Cosmos Arena 辩论委员会](advance_ai_agents/cosmos_arena_debate_council)：基于 LangGraph 与 NVIDIA Cosmos 推理模型、经 Nebius Token Factory 提供的多智能体辩论委员会
- [客服解决方案智能体](advance_ai_agents/customer_support_resolution_agent)：使用 LangChain 与 Nebius 的客服智能体，具备知识库检索、订单查询与人工工单升级
- [深度研究与写作智能体工作坊](advance_ai_agents/deep_research_writing_agents_nebius_okahu)：由 Nebius 提供支持的 LangChain MCP 工作坊，包含 Exa 研究、Gemini 图像生成，以及 Okahu/Monocle 评估可观测性
- [深度研究工作流](advance_ai_agents/deep_researcher_agent)：使用 Agno 与 ScrapeGraph AI 的多阶段研究智能体
- [尽职调查智能体](advance_ai_agents/due_diligence_agent)：使用 AG2 与 TinyFish 深度网络抓取的、多智能体公司尽职调查管线
- [金融文档操作系统](advance_ai_agents/financial_document_os)：将金融 PDF 转化为带有来源级引用的可编辑关系型数据库
- [金融市场数据服务](advance_ai_agents/finance_service_agent)：使用 Agno 的、用于股票数据与预测的 FastAPI 服务器
- [金融研究智能体（AgentField）](advance_ai_agents/agentfield_finance_research_agent)：使用 AgentField 的金融研究智能体
- [GitHub 与 LinkedIn 求职查找器](advance_ai_agents/job_finder_agent)：与 Bright Data 集成、自动化的 LinkedIn 职位搜索
- [Jev 社交研究智能体](advance_ai_agents/jev_social_research_agent)：类型化 Jev 路由、本地 socai CLI 证据，以及面向 Instagram、TikTok 与 LinkedIn 研究的、带证据链接的 Nebius 综合
- [本地文件编辑智能体原型](advance_ai_agents/coding_harness_agent)：具备文件发现、读取与编辑工具的本地编码智能体原型
- [维护者情报简报](advance_ai_agents/maintainer_brief)：来自社区、安全与文档信号、带来源引用的每周开源情报简报
- [会议助手智能体](advance_ai_agents/meeting_assistant_agent)：根据对话自动生成会议记录与任务
- [多智能体编码框架](advance_ai_agents/coding_agent_harness)：具备规划、仓库探索、人工把关文件编辑与 E2B 沙箱测试循环的深层 LangGraph 编码小组
- [Nebius 自主管线优化器](advance_ai_agents/nebius-autoresearch-autoresearch-mar30)：使用实时或批量 Nebius Token Factory 推理进行迭代代码搜索的纽约出租车分析管线优化器
- [会前情报智能体（简报室）](advance_ai_agents/meeting_briefing_agent)：使用 Tavily 网络搜索的 LangGraph 规划-研究-反思循环，将公司名称转化为带引用的单页会议简报
- [价格监控智能体](advance_ai_agents/price_monitoring_agent)：由 CrewAI、Twilio 与 Nebius 提供支持的价格监控与告警智能体
- [提示词格式基准测试](advance_ai_agents/context_engineering_pipeline)：用于在准确率、延迟与令牌消耗方面比较 XML、JSON 与 Markdown 提示词格式的基准测试框架
- [沙箱化浏览器游戏生成器](advance_ai_agents/pydantic_game_agent)：使用 Pydantic AI 与运行于 Nebius 的 GLM-5.2、从单个提示词生成沙箱化浏览器游戏的多智能体 FastAPI 工作室
- [SEO 内容策略团队](advance_ai_agents/content_team_agent)：使用 Agno 与 SerpAPI 针对 Google AI 搜索排名优化的 SEO 内容工作流
- [Shark Tank 路演练习智能体](advance_ai_agents/shark_tank_agent)：具备三个由 Nebius 支持的 Mastra 投资人"鲨鱼"、基于回合的问答、交易备忘录与 SQLite 报告历史的交互式 3D Shark Tank 房间
- [软件工程模型竞技场](advance_ai_agents/coding_model_arena)：使用 [Nebius Token Factory](https://dub.sh/nebius) 对两个编码模型进行基准测试，包含七个精选挑战、加权本地隐藏测试、部分给分评分，以及独立裁判
- [初创公司进入市场策略智能体](advance_ai_agents/smart_gtm_agent)：进入市场策略与竞争分析智能体
- [初创创意验证智能体](advance_ai_agents/startup_idea_validator_agent)：用于验证与分析初创创意的智能体工作流
- [Temporal 智能体](advance_ai_agents/temporal_agents/)：基于 Temporal 的 AI 智能体示例
- [Temporal 交易智能体评估（Okahu + Monocle）](advance_ai_agents/temporal_agents/temporal_okahu_agent/temporal-tx-agent-eval)：针对 Temporal 欺诈处理智能体的评估与回归循环，使用 OpenTelemetry 链路追踪、确定性检查与 LLM 评分的 Okahu 评估
- [网络情报智能体](advance_ai_agents/web_intelligence_agent)：将 Olostep 网络证据转化为经 Nemotron 验证的案例研究、具备 SQLite 持久化与 Velt 审计轨迹的 Mastra 多智能体管线
- [工作流审计轨迹（FlowSentinel）](advance_ai_agents/flowsentinal_audittrail)：使用 Nebius Nemotron 推理、n8n 编排、Velt 活动日志以及可选的 Tailscale Funnel 暴露的 Next.js 工作流指挥中心

### 🧬 微调

**从数据准备到部署、端到端微调开源 LLM 的示例。** _6 个项目_

- [使用 Data Lab 的客服微调](fine_tuning/customer_support_datalab)：用于生成客服数据、在 Data Lab 中整理、微调并部署的教师-学生蒸馏工作流
- [保险理赔微调](fine_tuning/insurance_claims_finetuning)：Data Lab、LoRA 微调，以及用于保险理赔的 Gradio 对比应用
- [法律科技微调（自托管）](fine_tuning/legal-tech-fine-tuning-nebius-cloud)：使用 LoRA 在 UK 立法数据上微调 Gemma，以 vLLM 提供服务，并暴露 FastAPI 层
- [法律科技微调（Token Factory）](fine_tuning/legal-tech-fine-tuning-token-factory)：在 Nebius Token Factory 上进行托管式 LoRA 微调，并支持私有模型部署
- [Token Factory 上的开源 LLM 微调](fine_tuning/open_source_llms_token_factory)：以 Colab 为主的 LoRA 微调演练，用于上传数据集、训练、监控与部署
- [独立客服微调（Colab）](fine_tuning/customer_support_standalone_colab)：用于客服蒸馏与微调流程的完全独立 Colab 笔记本

## 📺 教程与视频

### 🎓 课程播放列表

- [**AWS Strands 课程**](course/aws_strands)：使用 AWS Strands SDK 构建 AI 智能体的完整 8 课课程（[观看播放列表](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lrc43ZtUXAwYu9DhnqxzRKZ)）
- [**语音智能体播放列表**](https://www.youtube.com/watch?v=c6t4q0tE61E&list=PLKCdxubW1354)：构建语音智能体的教程

### 🔧 框架教程

- [**AI 智能体、MCP 以及更多……**](https://www.youtube.com/playlist?list=PL2ambAOfYA6-LDz0KpVKu9vJKAqhv0KKI)：混合教程与项目演示
- [**构建 AI 智能体**](https://www.youtube.com/playlist?list=PLMZM1DAlf0LqixhAG9BDk4O_FjqnaogK8)：通用 AI 智能体开发教程
- [**使用 MCP 构建**](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lolxax4L2HS54Me8gn1gkz4)：模型上下文协议教程与示例

---

<div align="center">

## 📥 使用每日 AI 洞察保持更新！

获取通俗易懂的每周教程，以及对 AI、LLM 与智能体框架的深入解析。非常适合希望学习、构建并借助新技术保持领先的开发者。订阅我们的新闻通讯吧！

[![订阅我们的新闻通讯](https://github.com/user-attachments/assets/990d1947-337b-4e87-a7e6-e619ec19dee6)](https://mranand.substack.com/subscribe)

</div>

---

## 快速开始

### 前置条件

- **Python 3.10+**（较新项目推荐使用 Python 3.11+）
- **Git**：用于克隆仓库
- **包管理器**：`pip` 或 `uv`（推荐使用以获得更快的安装速度）
- **API 密钥**：大多数项目都需要 API 密钥（详见各项目的 README）

### 快速开始

1. **克隆仓库**

   ```bash
   git clone https://github.com/Arindam200/awesome-ai-apps.git
   cd awesome-ai-apps
   ```

2. **选择一个项目**并进入其目录

   ```bash
   cd starter_ai_agents/agno_starter  # 示例：从 Agno 入门开始
   ```

3. **设置环境变量**

   ```bash
   cp .env.example .env  # 复制环境变量示例文件
   # 使用你的 API 密钥编辑 .env
   ```

4. **安装依赖**

   ```bash
   # 使用 pip
   pip install -r requirements.txt

   # 或 使用 uv（推荐 - 更快）
   uv sync
   # 或
   uv pip install -e .
   ```

5. **运行项目**

   ```bash
   python main.py
   # 或 对于 Streamlit 应用
   streamlit run app.py
   ```

## 🤝 贡献

我们欢迎社区的贡献！你可以通过以下方式提供帮助：

- 💡 **添加新项目**：提交你自己的 AI 智能体示例
- 🔧 **修复问题**：贡献代码改进与缺陷修复
- 📝 **改进文档**：帮助让项目更易于上手
- 🐛 通过 [GitHub Issues](https://github.com/Arindam200/awesome-ai-apps/issues) **报告缺陷**或提出建议

**贡献之前：**

- 阅读我们的 [贡献指南](CONTRIBUTING.md) 以获取详细信息
- 检查现有问题以避免重复
- 遵循项目结构与命名约定
- 确保你的项目包含一份完整的 README.md

**重要：** 本项目遵循 [贡献者行为准则](CODE_OF_CONDUCT.md)。参与即表示你同意遵守其条款。

## 📜 许可证

本仓库基于 [MIT 许可证](./LICENSE) 授权。你可以自由地将示例用于你的项目并进行修改。

## 👥 核心维护者

本项目由以下人员积极维护：

<p align="center">
  <a href="https://github.com/Arindam200" title="Arindam Majumder">
    <img src="https://avatars.githubusercontent.com/u/109217591?s=128&v=4" width="72" height="72" alt="Arindam Majumder" style="border-radius: 50%;" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/shivaylamba" title="Shivay Lamba">
    <img src="https://avatars.githubusercontent.com/u/19529592?s=128&v=4" width="72" height="72" alt="Shivay Lamba" style="border-radius: 50%;" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Astrodevil" title="Astrodevil">
    <img src="https://avatars.githubusercontent.com/u/73425223?s=128&v=4" width="72" height="72" alt="Astrodevil" style="border-radius: 50%;" />
  </a>
</p>

<p align="center">
  <sub>
    <a href="https://github.com/Arindam200">Arindam Majumder</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/shivaylamba">Shivay Lamba</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/Astrodevil">Amitesh Anand</a>
  </sub>
</p>

如有任何疑问、建议或贡献，欢迎随时联系维护者。

## 感谢支持！🙏

[![Star History Chart](https://star-history.dera.page/svg?repos=Arindam200/awesome-ai-apps&type=Date)](https://star-history.dera.page/#Arindam200/awesome-ai-apps&Date)
