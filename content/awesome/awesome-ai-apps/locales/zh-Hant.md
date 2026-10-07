![Banner](/assets/awesome_banner.png)

<div align="center">

# Awesome AI 應用 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://trendshift.io/repositories/14662" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14662" alt="Arindam200%2Fawesome-ai-apps | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</div>

本倉庫是一份全面的集合，包含 **132 個專案**、教學以及用於建構強大 LLM 驅動應用的配方，涵蓋文字智能體、語音助手、RAG 應用，以及由 MCP 支撐的工具。這些專案為使用各類 AI 框架與技術堆疊的開發者提供了指南。

## 📋 目錄

- [🚀 精選 AI 應用](#-featured-ai-apps)
  - [🧩 入門智能體](#-starter-agents)
  - [🪶 簡單智能體](#-simple-agents)
  - [🎙️ 語音智能體](#-voice-agents)
  - [🗂️ MCP 智能體](#️-mcp-agents)
  - [🧠 記憶智能體](#-memory-agents)
  - [📚 RAG 應用](#-rag-applications)
  - [🔬 進階智能體](#-advanced-agents)
  - [🧬 微調](#-fine-tuning)
- [📺 教學與影片](#-tutorials--videos)
- [🚀 快速開始](#getting-started)
- [🤝 貢獻](#-contributing)

---

<div align="center">

## 💎 贊助者

<p align="center">
  衷心感謝我們的贊助者給予的慷慨支持！
</p>

<table align="center" cellpadding="10" style="width:100%; border-collapse:collapse;">
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/brightdata" target="_blank" title="訪問 Bright Data">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bright_Data.svg" height="35" style="max-width:180px;" alt="Bright Data - Web Data Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">網路資料平台</span>
        <br>
        <a href="https://dub.sh/brightdata" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 Bright Data 網站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/nebius" target="_blank" title="訪問 Nebius Token Factory">
        <img src="./assets/nebius.png" height="36" style="max-width:180px;" alt="Nebius Token Factory">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 推論服務提供商</span>
        <br>
        <a href="https://dub.sh/nebius" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 Nebius Token Factory">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scrapegraphai" target="_blank" title="在 GitHub 上訪問 ScrapeGraphAI">
        <img src="https://raw.githubusercontent.com/ScrapeGraphAI/ScrapeGraph-AI/main/docs/assets/scrapegraphai_logo.png" height="44" style="max-width:180px;" alt="ScrapeGraphAI - Web Scraping Library">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 網頁抓取框架</span>
        <br>
        <a href="https://dub.sh/scrapegraphai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="在 GitHub 上查看 ScrapeGraphAI">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/memorilabs" target="_blank" title="訪問 Memorilabs">
        <img src="assets/memori.png" height="36" style="max-width:180px;" alt="Memori - SQL Native Memory for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 的原生 SQL 記憶</span>
        <br>
        <a href="https://dub.sh/memorilabs" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 Memorilabs 網站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/copilotkit" target="_blank" title="訪問 CopilotKit">
        <img src="assets/copilot-kit-logo.svg" height="36" style="max-width:180px;" alt="CopilotKit - Agentic Application Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">智能體應用平台</span>
        <br>
        <a href="https://dub.sh/copilotkit" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 CopilotKit 網站">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scalekitt" target="_blank" title="訪問 ScaleKit">
        <img src="assets/scalekit.svg" height="36" style="max-width:180px;" alt="ScaleKit - Auth Stack for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 的認證技術堆疊</span>
        <br>
        <a href="https://dub.sh/scalekitt" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 ScaleKit 網站">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="200" valign="middle" align="center">
      <a href="https://okahu.ai" target="_blank" title="訪問 Okahu">
        <img src="assets/okahu.png" height="36" style="max-width:180px;" alt="Okahu - AI Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">AI 可觀測性平台</span>
        <br>
        <a href="https://okahu.ai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 Okahu 網站">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/agentfield" target="_blank" title="訪問 AgentField">
        <img src="assets/agentfield.png" height="40" style="max-width:180px;" alt="AgentField - Kubernetes for AI Agents">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">面向 AI 智能體的 Kubernetes</span>
        <br>
        <a href="https://dub.sh/agentfield" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 AgentField 網站">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/byteful" target="_blank" title="訪問 Byteful">
      <img src="https://byteful.com/favicon.ico" height="40" style="max-width:180px;" alt="Byteful">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Byteful</span>
        <br>
        <a href="https://dub.sh/byteful" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="訪問 Byteful 網站">
        </a>
      </sub>
    </td>
  </tr>

</table>

### 💎 成為贊助者

<p align="center">
有興趣贊助本專案？歡迎隨時聯絡我們！
<br/>
<a href="mailto:contact@studio1hq.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>
</p>

</div>

---

## 🚀 精選 AI 應用

### 🧩 入門智能體

**用於學習和擴充不同 AI 框架的快速上手智能體。** _21 個專案_

- [AutoGen 工具呼叫入門](starter_ai_agents/autogen_starter)：基於 Microsoft AutoGen `AssistantAgent` 並搭配自訂工具，由 Nebius Token Factory 提供支援
- [AWS Strands 智能體入門](starter_ai_agents/aws_strands_starter)：使用 AWS Strands SDK 的天氣播報智能體
- [CAMEL AI 模型基準測試](starter_ai_agents/camel_ai_starter)：用於比較各類 AI 模型效能的基準測試工具
- [編碼測試框架入門](starter_ai_agents/coding_harness_starter)：基於 OpenAI Agents SDK 的編碼迴圈，包含規劃、需審批的編輯、固定測試與有界審查，由 Nebius Token Factory 提供支援
- [CrewAI 研究小組](starter_ai_agents/crewai_starter)：多智能體研究團隊範例
- [Docker cagent 多智能體入門](starter_ai_agents/cagent_starter)：Docker 開源的可客製化多智能體執行環境
- [DSPy 最佳化入門](starter_ai_agents/dspy_starter)：用於建構和最佳化 AI 系統的 DSPy 框架
- [Google Agent Development Kit 入門](starter_ai_agents/google_adk_starter)：Google Agent Development Kit 入門模板
- [Hacker News 趨勢分析器（Agno）](starter_ai_agents/agno_starter)：基於 Agno 的 Hacker News 趨勢分析智能體
- [Hugging Face smolagents 入門](starter_ai_agents/smolagents_starter)：Hugging Face smolagents 程式碼優先的網路搜尋智能體
- [KAOS Kubernetes 多智能體入門](starter_ai_agents/kaos_starter)：具有 MCP 工具與叢集內 LLM 的 Kubernetes 原生多智能體系統
- [LangChain 工具呼叫入門](starter_ai_agents/langchain_starter)：使用 `create_tool_calling_agent` + `AgentExecutor` 的 LangChain 工具呼叫智能體，由 Nebius 提供支援
- [LangGraph ReAct 智能體入門](starter_ai_agents/langgraph_starter)：帶有自訂工具的 LangGraph 預建 ReAct 智能體（`create_react_agent`），由 Nebius 提供支援
- [Letta 有狀態記憶智能體](starter_ai_agents/letta_starter)：跨會話具備持久長期記憶的有狀態智能體
- [LlamaIndex 任務管理器](starter_ai_agents/llamaindex_starter)：由 LlamaIndex 驅動的任務助手
- [Mastra 工具呼叫入門](starter_ai_agents/mastra_starter)：TypeScript 優先的智能體，搭配自訂工具，由 Nebius Token Factory 提供支援
- [Microsoft Agent Framework 入門](starter_ai_agents/microsoft_agents_starter)：基於 Microsoft Agent Framework 建構的多智能體旅行規劃示範
- [OpenAI Agents SDK 入門](starter_ai_agents/openai_agents_sdk)：包含郵件助手與俳句寫作器範例的 OpenAI Agents SDK
- [PydanticAI 天氣機器人](starter_ai_agents/pydantic_starter)：提供即時天氣資訊的智能體
- [Sayna 即時語音智能體](starter_ai_agents/sayna_starter)：具備多供應商 STT/TTS（Deepgram、ElevenLabs、Azure、Google）與 WebSocket 串流傳輸的即時語音基礎設施
- [Semantic Kernel 入門](starter_ai_agents/semantic_kernel_starter)：基於 Microsoft Semantic Kernel `ChatCompletionAgent` 並支援外掛式工具呼叫的智能體

### 🪶 簡單智能體

**面向日常 AI 應用的直觀、實用用例。** _18 個專案_

- [Agno 智能體範例](simple_ai_agents/agno_ai_examples)：包含網路搜尋與知識庫的從簡單到多智能體範例
- [Agno 智能體介面](simple_ai_agents/agno_ui_agent)：用於網路與金融智能體的互動式介面
- [AI 智能體註冊表瀏覽器](simple_ai_agents/agent_discovery_agent)：在 NANDA、MCP、Virtuals、A2A 與 ERC-8004 註冊表之間查找並比較 AI 智能體
- [日曆助手](simple_ai_agents/cal_scheduling_agent)：與 Cal.com 整合的日曆排程工具
- [成本感知模型路由（RouteLLM）](simple_ai_agents/llm_router)：使用 RouteLLM（GPT-4o-mini 對比 Nebius Llama）進行智慧模型路由以最佳化成本
- [郵件轉日曆助手](simple_ai_agents/email_to_calendar_scheduler)：由 AI 驅動的 Gmail 閱讀器與 Google 日曆管理器
- [金融推理智能體](simple_ai_agents/reasoning_agent)：分步金融推理示範
- [人在迴路智能體](simple_ai_agents/human_in_the_loop_agent)：用於安全執行 AI 任務的人在迴路操作
- [LangChain 運維智能體集合](simple_ai_agents/langchain_simple_agents)：由 Nebius 提供支援的事故回應、客服、供應商風險與資料品質智能體，具備型別化輸出與受保護工具
- [Mastra 天氣機器人](simple_ai_agents/mastra_ai_weather_agent)：使用 Mastra AI 框架的天氣更新工具
- [自然語言資料庫助手](simple_ai_agents/talk_to_db)：使用 GibsonAI 與 LangChain 的自然語言資料庫查詢
- [自然語言 SQL 智能體（LangChain）](simple_ai_agents/langchain_data_agent_poc)：使用 LangGraph、Nebius、唯讀 SQL 安全機制與 Streamlit 圖表的自然語言轉 SQL 資料智能體
- [Nebius 聊天](simple_ai_agents/nebius_chat)：面向 Nebius Token Factory 的聊天介面
- [新聞通訊生成器](simple_ai_agents/newsletter_agent)：與 Firecrawl 整合、由 AI 驅動的新聞通訊建構工具
- [股票市場金融智能體](simple_ai_agents/finance_agent)：即時股票與市場資料追蹤智能體
- [股票投資組合分析師](simple_ai_agents/stock_portfolio_analyst)：使用 Agno 進行的即時組合估值、集中度分析、風險標記與再平衡建議
- [VoyageCompass 旅行規劃器](simple_ai_agents/nebius_travel_planner)：使用 LangChain 與 Nebius 的旅行規劃器，具備天氣、研究、貨幣換算、預算與打包工具
- [網頁自動化智能體](simple_ai_agents/browser_agent)：使用 Nebius 與 browser-use 的瀏覽器自動化智能體

### 🎙️ 語音智能體

**即時語音助手與串流語音管線** —— 包含 LiveKit、Pipecat、Gradium，以及 [VoxCode](voice_agents/Cursor_code_editor)（Deepgram + Cursor SDK）。 _9 個專案_

- [AI 演講教練（Gradium + Nebius）](voice_agents/voice-agent-gradium-nebius-langchain)：使用 Gradium STT/TTS、LangChain 編排與 Nebius 推理的對話式演講教練
- [客服語音智能體（LiveKit）](voice_agents/customer_support_agent)：由 Nebius 提供支援的語音客服智能體，具備上下文保留的 AI 主管交接、降噪與閒置處理
- [Gemini 即時語音智能體（LiveKit）](voice_agents/livekit_gemini_agents)：在 LiveKit 房間中使用 Google Gemini Live（`gemini` 多模態即時）實現低延遲語音對話的 LiveKit Agents
- [醫療語音聯絡中心](voice_agents/healthcare_contact_center)：具備預約預訂、常見問題處理與主管升級的 Pipecat 醫療聯絡中心
- [多語言語音智能體（Pipecat + Sarvam）](voice_agents/pipecat_agent)：使用 Sarvam STT/TTS 與 OpenAI 進行聊天的 Pipecat 語音管線；透過 Pipecat runner 使用 WebRTC（瀏覽器）或 Daily 傳輸
- [RSVP 確認語音智能體（LiveKit）](voice_agents/livekit_rsvp_agent)：向參與者撥打電話、確認 RSVP 並更新基於 JSON 的活動資料庫的外呼語音智能體
- [極速回應銷售語音智能體](voice_agents/speed_to_lead_agent)：基於 LiveKit 的語音智能體，可即時聯絡入站線索、將其轉接給專家，並記錄到模擬 CRM
- [VoxCode —— Deepgram + Cursor 語音編碼智能體](voice_agents/Cursor_code_editor)：用於程式碼庫摘要與架構問答的本地語音工作區；Deepgram Voice Agent 編排、Nebius 推理，以及可選的 Cursor SDK 檔案檢查與編輯
- [網路搜尋語音智能體（LiveKit）](voice_agents/livekit_web_search_agent)：LiveKit + Gemini 即時語音智能體，配備由 Olostep 支撐的 `web_search` 工具，提供新鮮且帶來源引用的答案

### 🗂️ MCP 智能體

**使用模型上下文協定（Model Context Protocol）進行外部工具整合的範例。** _14 個專案_

- [Couchbase LangGraph MCP 智能體](mcp_ai_agents/langchain_langgraph_mcp_agent)：與 Couchbase 整合的 LangChain ReAct 智能體
- [Couchbase MCP 伺服器](mcp_ai_agents/couchbase_mcp_server)：使用 MCP 協定的 Couchbase 資料庫整合
- [自訂 MCP 伺服器入門](mcp_ai_agents/custom_mcp_server)：自訂 MCP 伺服器實作範例
- [文件問答 MCP 智能體](mcp_ai_agents/docs_qna_agent)：使用 MCP 的文件問答智能體
- [文件 RAG MCP 伺服器](mcp_ai_agents/doc_mcp)：語意化的 RAG 文件與問答系統
- [GibsonAI 資料庫 MCP 智能體](mcp_ai_agents/database_mcp_agent)：用於管理 GibsonAI 資料庫專案與架構的對話式 AI 智能體
- [GitHub MCP 智能體](mcp_ai_agents/github_mcp_agent)：透過 MCP 取得倉庫洞察與分析
- [GitHub MCP 智能體入門](mcp_ai_agents/mcp_starter)：GitHub 倉庫分析器入門模板
- [酒店查找智能體](mcp_ai_agents/hotel_finder_agent)：使用 MCP 整合進行酒店搜尋與預訂
- [沙箱化程式碼執行 MCP 智能體（Docker + E2B）](mcp_ai_agents/e2b_docker_mcp_agent)：透過 MCP Gateway 在沙箱化 Docker 環境中安全執行智能體的安全 AI 智能體
- [安全資料庫 MCP 智能體（MCP Toolbox）](mcp_ai_agents/mcp_toolbox_security_agent)：運行於 PostgreSQL 與 MongoDB 之上的安全電商智能體；MCP Toolbox 強制執行每使用者資料存取、最小權限角色與授權工具
- [安全 MCP 存取智能體（ScaleKit + Exa）](mcp_ai_agents/scalekit-exa-mcp-security)：結合 Exa 搜尋、以安全為核心的 MCP 整合
- [自修復文字轉 SQL 智能體（Okahu）](mcp_ai_agents/telemetry-mcp-okahu)：使用 Okahu Cloud 鏈路追蹤、透過託管 MCP 實現的自修復文字轉 SQL 示範
- [Taskade MCP 智能體](mcp_ai_agents/taskade_mcp_agent)：透過 Taskade MCP 管理專案、任務與工作流、由 AI 驅動的工作區智能體

### 🧠 記憶智能體

**具備進階記憶能力、用於上下文保留與個人化的智能體。** _13 個專案_

- [具備長期記憶的 AI 研究顧問](memory_agents/ai_consultant_agent/)：使用 **Memori v3** 作為長期記憶載體、並使用 **ExaAI** 進行研究的 AI 驅動諮詢智能體
- [使用 Memori 的 arXiv 研究智能體](memory_agents/arxiv_researcher_agent_with_memori)：使用 OpenAI Agents 與 GibsonAI Memori 的研究助手
- [AWS Strands 持久記憶智能體](memory_agents/aws_strands_agent_with_memori)：借助 Memori 記憶系統增強的 AWS Strands 智能體
- [部落格寫作智能體](memory_agents/blog_writing_agent)：具備記憶能力、可保持風格一致性的個人化部落格寫作智能體
- [品牌聲譽監控器](memory_agents/brand_reputation_monitor)：透過新聞分析與情感追蹤、由 AI 驅動的品牌聲譽監控工具
- [客服語音智能體](memory_agents/customer_support_voice_agent)：具備語音能力的客服助手，使用 Memori v3 與 Firecrawl 管理知識庫
- [工程內容智能體](memory_agents/engineering_content_agent)：以聊天為核心的 Agno 應用，將 HN 需求、DEV.to 供給缺口與 Weaviate Engram 記憶轉化為開發者趨勢摘要，並透過 Nebius 生成 DevRel 演講與部落格創意
- [求職智能體](memory_agents/job_search_agent)：具備記憶能力、可追蹤偏好的求職智能體
- [持久記憶智能體（Agno）](memory_agents/agno_memory_agent)：具備持久記憶能力的基於 Agno 的智能體
- [產品發布智能體](memory_agents/product_launch_agent)：用於分析競品產品發布的競爭情報工具
- [社群媒體智能體](memory_agents/social_media_agent)：具備記憶能力、可保持品牌聲音的社群媒體自動化智能體
- [學習教練智能體](memory_agents/study_coach_agent)：使用 Memori v3 與 LangGraph 對理解程度進行多步驗證的 AI 驅動學習教練
- [YouTube 趨勢智能體](memory_agents/youtube_trend_agent)：使用 Memori、Agno 與 Exa 進行趨勢分析與影片創意的 YouTube 頻道分析智能體

### 📚 RAG 應用

**用於文件理解與知識庫的檢索增強生成範例。** _18 個專案_

- [使用 Agno 與 GPT-5 的智能體 RAG](rag_apps/agentic_rag)：基於 Agno 與 GPT-5 的智能體 RAG 實作
- [使用 LlamaIndex 的型別化智能體 RAG](rag_apps/agentic_typed_rag_llamaindex)：具備結構化答案、本地文件解析，以及對證據薄弱情況確定性拒絕的型別化、引用可驗證 RAG
- [程式碼庫問答 RAG](rag_apps/chat_with_code)：對話式程式碼探索器與文件助手
- [企業級上下文 RAG](rag_apps/contextual_ai_rag)：具備託管資料存放區與品質評估的企業級 RAG
- [Gemma 3 文件 OCR](rag_apps/gemma_ocr/)：使用 Gemma 3 模型的基於 OCR 的文件與影像處理工具
- [使用 Neo4j 的 GraphRAG](rag_apps/graphrag_neo4j)：使用 Neo4j 與 Nebius 的知識圖譜提取與 Cypher 支撐的檢索
- [LiteParse 發票與收據審計器](rag_apps/liteparse_invoice_auditor)：本地 OCR 搭配 LiteParse 邊界框、Nebius LLM 審計數學錯誤與重複收費、在掃描件上固定證據，以及 LLM 批次摘要
- [LlamaIndex RAG 入門](rag_apps/llamaIndex_starter)：LlamaIndex 與 Nebius 的 RAG 入門模板
- [LLM 與 RAG 偵錯器（WFGY 16 問題圖譜）](rag_apps/wfgy_llm_debugger)：針對 LLM 與 RAG 缺陷的 16 模式圖譜式偵錯器
- [多 PDF RAG 分析器](rag_apps/pdf_rag_analyser)：多 PDF 聊天與分析系統
- [Nebius RAG 入門](rag_apps/simple_rag)：使用 Nebius 的基礎 RAG 實作，便於快速上手
- [NVIDIA Nemotron 文件 OCR](rag_apps/nvidia_ocr/)：使用 NVIDIA Nemotron-Nano-V2-12b 的基於 OCR 的文件與影像解析
- [帶重排序的生產級 PDF RAG](rag_apps/advanced_rag_with_reranking)：具備上下文檢索、Qdrant 混合搜尋、重排序、串流答案、上傳攝取與可點擊引用的生產形態 PDF RAG
- [Qwen3 PDF RAG 聊天](rag_apps/qwen3_rag)：使用 Streamlit 建構的 PDF 聊天機器人介面
- [履歷最佳化器](rag_apps/resume_optimizer)：由 AI 驅動的履歷最佳化與增強工具
- [可信 RAG](rag_apps/trustworthy_rag)：對 RAG 答案進行引用驗證、逐條證據檢查與幻覺評分
- [帶時間戳引用的影片問答](rag_apps/video_rag)：使用 Gemini 嵌入、Weaviate、Nebius 與可點擊時間戳引用的多模態影片檢索
- [網路增強的智能體 RAG](rag_apps/agentic_rag_with_web_search)：結合 CrewAI、Qdrant 與 Exa 實現混合搜尋能力的高級 RAG

### 🔬 進階智能體

**用於生產級端到端工作流的複雜多智能體管線。** _35 個專案_

- [AI 對沖基金研究團隊](advance_ai_agents/ai-hedgefund)：用於全面金融分析智能體工作流
- [AI 趨勢研究智能體](advance_ai_agents/trend_analyzer_agent)：使用 Google ADK 的 AI 趨勢挖掘與分析
- [候選人檔案分析器（Candilyzer）](advance_ai_agents/candidate_analyser)：針對 GitHub 與 LinkedIn 檔案的候選人分析工具
- [汽車查找智能體](advance_ai_agents/car_finder_agent)：使用 CrewAI 與 MongoDB、由 AI 驅動的中古車推薦系統
- [會議提案生成器](advance_ai_agents/conference_agnositc_cfp_generator)：自動化的會議提案生成系統
- [會議演講摘要生成器](advance_ai_agents/conference_talk_abstract_generator)：使用 Google ADK 與 Couchbase 自動生成演講摘要
- [合約審查小組（律師助理）](advance_ai_agents/paralegal_crew)：用於條款提取、風險分析與建議修訂標記的 CrewAI 合約審查工作流
- [Cosmos Arena 辯論委員會](advance_ai_agents/cosmos_arena_debate_council)：基於 LangGraph 與 NVIDIA Cosmos 推理模型、經 Nebius Token Factory 提供的多智能體辯論委員會
- [客服解決方案智能體](advance_ai_agents/customer_support_resolution_agent)：使用 LangChain 與 Nebius 的客服智能體，具備知識庫檢索、訂單查詢與人工工單升級
- [深度研究與寫作智能體工作坊](advance_ai_agents/deep_research_writing_agents_nebius_okahu)：由 Nebius 提供支援的 LangChain MCP 工作坊，包含 Exa 研究、Gemini 圖像生成，以及 Okahu/Monocle 評估可觀測性
- [深度研究工作流](advance_ai_agents/deep_researcher_agent)：使用 Agno 與 ScrapeGraph AI 的多階段研究智能體
- [盡職調查智能體](advance_ai_agents/due_diligence_agent)：使用 AG2 與 TinyFish 深度網路抓取的、多智能體公司盡職調查管線
- [金融文件作業系統](advance_ai_agents/financial_document_os)：將金融 PDF 轉化為帶有來源級引用的可編輯關聯式資料庫
- [金融市場資料服務](advance_ai_agents/finance_service_agent)：使用 Agno 的、用於股票資料與預測的 FastAPI 伺服器
- [金融研究智能體（AgentField）](advance_ai_agents/agentfield_finance_research_agent)：使用 AgentField 的金融研究智能體
- [GitHub 與 LinkedIn 求職查找器](advance_ai_agents/job_finder_agent)：與 Bright Data 整合、自動化的 LinkedIn 職缺搜尋
- [Jev 社群研究智能體](advance_ai_agents/jev_social_research_agent)：型別化 Jev 路由、本地 socai CLI 證據，以及面向 Instagram、TikTok 與 LinkedIn 研究的、帶證據連結的 Nebius 綜合
- [本地檔案編輯智能體原型](advance_ai_agents/coding_harness_agent)：具備檔案發現、讀取與編輯工具的本地編碼智能體原型
- [維護者情報簡報](advance_ai_agents/maintainer_brief)：來自社群、安全與文件信號、帶來源引用的每週開源情報簡報
- [會議助手智能體](advance_ai_agents/meeting_assistant_agent)：根據對話自動生成會議記錄與任務
- [多智能體編碼框架](advance_ai_agents/coding_agent_harness)：具備規劃、倉庫探索、人工把關檔案編輯與 E2B 沙箱測試迴圈的深層 LangGraph 編碼小組
- [Nebius 自主管線最佳化器](advance_ai_agents/nebius-autoresearch-autoresearch-mar30)：使用即時或批次 Nebius Token Factory 推理進行迭代程式碼搜尋的紐約計程車分析管線最佳化器
- [會前情報智能體（簡報室）](advance_ai_agents/meeting_briefing_agent)：使用 Tavily 網路搜尋的 LangGraph 規劃-研究-反思迴圈，將公司名稱轉化為帶引用的單頁會議簡報
- [價格監控智能體](advance_ai_agents/price_monitoring_agent)：由 CrewAI、Twilio 與 Nebius 提供支援的價格監控與告警智能體
- [提示詞格式基準測試](advance_ai_agents/context_engineering_pipeline)：用於在準確率、延遲與令牌消耗方面比較 XML、JSON 與 Markdown 提示詞格式的基準測試框架
- [沙箱化瀏覽器遊戲生成器](advance_ai_agents/pydantic_game_agent)：使用 Pydantic AI 與運行於 Nebius 的 GLM-5.2、從單個提示詞生成沙箱化瀏覽器遊戲的多智能體 FastAPI 工作室
- [SEO 內容策略團隊](advance_ai_agents/content_team_agent)：使用 Agno 與 SerpAPI 針對 Google AI 搜尋排名最佳化的 SEO 內容工作流
- [Shark Tank 路演練習智能體](advance_ai_agents/shark_tank_agent)：具備三個由 Nebius 支援的 Mastra 投資人「鯊魚」、基於回合的問答、交易備忘錄與 SQLite 報告歷史的交互式 3D Shark Tank 房間
- [軟體工程模型競技場](advance_ai_agents/coding_model_arena)：使用 [Nebius Token Factory](https://dub.sh/nebius) 對兩個編碼模型進行基準測試，包含七個精選挑戰、加權本地隱藏測試、部分給分評分，以及獨立裁判
- [新創公司進入市場策略智能體](advance_ai_agents/smart_gtm_agent)：進入市場策略與競爭分析智能體
- [新創點子驗證智能體](advance_ai_agents/startup_idea_validator_agent)：用於驗證與分析新創點子的智能體工作流
- [Temporal 智能體](advance_ai_agents/temporal_agents/)：基於 Temporal 的 AI 智能體範例
- [Temporal 交易智能體評估（Okahu + Monocle）](advance_ai_agents/temporal_agents/temporal_okahu_agent/temporal-tx-agent-eval)：針對 Temporal 詐欺處理智能體的評估與迴歸迴圈，使用 OpenTelemetry 鏈路追蹤、確定性檢查與 LLM 評分的 Okahu 評估
- [網路情報智能體](advance_ai_agents/web_intelligence_agent)：將 Olostep 網路證據轉化為經 Nemotron 驗證的案例研究、具備 SQLite 持久化與 Velt 審計軌跡的 Mastra 多智能體管線
- [工作流審計軌跡（FlowSentinel）](advance_ai_agents/flowsentinal_audittrail)：使用 Nebius Nemotron 推理、n8n 編排、Velt 活動日誌以及可選的 Tailscale Funnel 暴露的 Next.js 工作流指揮中心

### 🧬 微調

**從資料準備到部署、端到端微調開源 LLM 的範例。** _6 個專案_

- [使用 Data Lab 的客服微調](fine_tuning/customer_support_datalab)：用於生成客服資料、在 Data Lab 中整理、微調並部署的教師-學生蒸餾工作流
- [保險理賠微調](fine_tuning/insurance_claims_finetuning)：Data Lab、LoRA 微調，以及用於保險理賠的 Gradio 對比應用
- [法律科技微調（自託管）](fine_tuning/legal-tech-fine-tuning-nebius-cloud)：使用 LoRA 在 UK 立法資料上微調 Gemma，以 vLLM 提供服務，並暴露 FastAPI 層
- [法律科技微調（Token Factory）](fine_tuning/legal-tech-fine-tuning-token-factory)：在 Nebius Token Factory 上進行託管式 LoRA 微調，並支援私有模型部署
- [Token Factory 上的開源 LLM 微調](fine_tuning/open_source_llms_token_factory)：以 Colab 為主的 LoRA 微調演練，用於上傳資料集、訓練、監控與部署
- [獨立客服微調（Colab）](fine_tuning/customer_support_standalone_colab)：用於客服蒸餾與微調流程的完全獨立 Colab 筆記本

## 📺 教學與影片

### 🎓 課程播放清單

- [**AWS Strands 課程**](course/aws_strands)：使用 AWS Strands SDK 建構 AI 智能體的完整 8 課課程（[觀看播放清單](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lrc43ZtUXAwYu9DhnqxzRKZ)）
- [**語音智能體播放清單**](https://www.youtube.com/watch?v=c6t4q0tE61E&list=PLKCdxubW1354)：建構語音智能體的教學

### 🔧 框架教學

- [**AI 智能體、MCP 以及更多……**](https://www.youtube.com/playlist?list=PL2ambAOfYA6-LDz0KpVKu9vJKAqhv0KKI)：混合教學與專案示範
- [**建構 AI 智能體**](https://www.youtube.com/playlist?list=PLMZM1DAlf0LqixhAG9BDk4O_FjqnaogK8)：通用 AI 智能體開發教學
- [**使用 MCP 建構**](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lolxax4L2HS54Me8gn1gkz4)：模型上下文協定教學與範例

---

<div align="center">

## 📥 使用每日 AI 洞察保持更新！

取得通俗易懂的每週教學，以及對 AI、LLM 與智能體框架的深入解析。非常適合希望學習、建構並借助新技術保持領先的開發者。訂閱我們的新聞通訊吧！

[![訂閱我們的新聞通訊](https://github.com/user-attachments/assets/990d1947-337b-4e87-a7e6-e619ec19dee6)](https://mranand.substack.com/subscribe)

</div>

---

## 快速開始

### 前置條件

- **Python 3.10+**（較新專案推薦使用 Python 3.11+）
- **Git**：用於克隆倉庫
- **套件管理器**：`pip` 或 `uv`（推薦使用以獲得更快的安裝速度）
- **API 金鑰**：大多數專案都需要 API 金鑰（詳見各專案的 README）

### 快速開始

1. **克隆倉庫**

   ```bash
   git clone https://github.com/Arindam200/awesome-ai-apps.git
   cd awesome-ai-apps
   ```

2. **選擇一個專案**並進入其目錄

   ```bash
   cd starter_ai_agents/agno_starter  # 範例：從 Agno 入門開始
   ```

3. **設定環境變數**

   ```bash
   cp .env.example .env  # 複製環境變數範例檔案
   # 使用你的 API 金鑰編輯 .env
   ```

4. **安裝依賴**

   ```bash
   # 使用 pip
   pip install -r requirements.txt

   # 或 使用 uv（推薦 - 更快）
   uv sync
   # 或
   uv pip install -e .
   ```

5. **執行專案**

   ```bash
   python main.py
   # 或 對於 Streamlit 應用
   streamlit run app.py
   ```

## 🤝 貢獻

我們歡迎社群的貢獻！你可以透過以下方式提供協助：

- 💡 **新增新專案**：提交你自己的 AI 智能體範例
- 🔧 **修復問題**：貢獻程式碼改進與缺陷修復
- 📝 **改進文件**：協助讓專案更易於上手
- 🐛 透過 [GitHub Issues](https://github.com/Arindam200/awesome-ai-apps/issues) **回報缺陷**或提出建議

**貢獻之前：**

- 閱讀我們的 [貢獻指南](CONTRIBUTING.md) 以取得詳細資訊
- 檢查現有問題以避免重複
- 遵循專案結構與命名約定
- 確保你的專案包含一份完整的 README.md

**重要：** 本專案遵循 [貢獻者行為準則](CODE_OF_CONDUCT.md)。參與即表示你同意遵守其條款。

## 📜 授權

本倉庫基於 [MIT 授權條款](./LICENSE) 授權。你可以自由地將範例用於你的專案並進行修改。

## 👥 核心維護者

本專案由以下人員積極維護：

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

如有任何疑問、建議或貢獻，歡迎隨時聯絡維護者。

## 感謝支持！🙏

[![Star History Chart](https://star-history.dera.page/svg?repos=Arindam200/awesome-ai-apps&type=Date)](https://star-history.dera.page/#Arindam200/awesome-ai-apps&Date)
