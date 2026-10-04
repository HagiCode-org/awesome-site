<div align="center">

# Awesome LLM 應用

**100+ 個開源 AI 代理、代理技能和 RAG 應用程式。手工打造、端對端測試，採用 Apache-2.0 授權。**

複製、發布、銷售——100% 免費且開源

相容 Claude、Gemini、GPT、DeepSeek、Llama、Qwen 和其他開源模型。

**[Unwind AI 步驟教學](https://www.theunwindai.com) · [快速開始](#-run-one-now) · [瀏覽所有範本](#-browse-all-templates)**


<a href="https://trendshift.io/repositories/9876" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/9876" width="220" alt="Trendshift 今日排名第一的精選儲存庫">
</a>

<br>

</div>

<table>
  <tr>
    <td width="33.3%" align="center">
      <a href="agent_skills/project-graveyard/"><img src="docs/gallery/project-graveyard.png" alt="Project Graveyard：為已擱置的副專案進行事後分析的代理"></a>
      <sub><b>Project Graveyard</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="voice_ai_agents/insurance_claim_live_agent_team/"><img src="docs/gallery/insurance-claim-live-team.png" alt="Insurance Claim Live Agent Team：即時處理語音理賠"></a>
      <sub><b>Insurance Claim Live Agent Team</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/"><img src="docs/gallery/ai-fraud-investigation.png" alt="AI Fraud Investigation Agent：交叉查核公開紀錄"></a>
      <sub><b>AI Fraud Investigation Agent</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="agent_skills/self-improving-agent-skills/"><img src="docs/gallery/self-improving-agent-skills.png" alt="Self-Improving Agent Skills：依據評估結果自行改寫的技能"></a>
      <sub><b>Self-Improving Agent Skills</b></sub>
    </td>
    <td align="center">
      <a href="advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent"><img src="docs/gallery/ai-home-renovation.png" alt="AI Home Renovation Agent：輸入照片，輸出逼真改造設計"></a>
      <sub><b>AI Home Renovation Agent</b></sub>
    </td>
    <td align="center">
      <a href="always_on_agents/always_on_hn_briefing_agent/"><img src="docs/gallery/always-on-hn-briefing.png" alt="Always-on HN Briefing Agent：你睡覺時也會閱讀 Hacker News"></a>
      <sub><b>Always-on HN Briefing Agent</b></sub>
    </td>
  </tr>
</table>

## 🙏 感謝贊助商

<table align="center" cellpadding="16" cellspacing="12">
  <tr>
    <td align="center">
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" title="TinyFish">
        <img src="docs/banner/sponsors/tinyfish_community.png" alt="TinyFish 社群計畫：加入學生和大使計畫" width="500">
      </a>
      <br>
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        TinyFish
      </a>
    </td>
    <td align="center">
      <a href="https://sponsorunwindai.com/" title="成為贊助者">
        <img src="docs/banner/sponsor_awesome_llm_apps.png" alt="成為贊助者" width="500">
      </a>
      <br>
      <a href="https://sponsorunwindai.com/" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        成為贊助者
      </a>
    </td>
  </tr>
</table>

## 🚀 立即執行一個

10 秒內為你的程式代理新增技能：

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

接著問它：*「為什麼我總是做不完自己的副專案？」*

或者，30 秒內複製並執行任意代理：

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 每週推出新範本。[在 Unwind AI 訂閱並接收](https://www.theunwindai.com)。

## 📂 瀏覽所有範本

### 🧩 代理技能

*賦予程式代理新能力。一個指令即可安裝，以淺白語言即可使用。每項技能皆附有實際程式碼，並通過安全性與評估 CI 閘門。相容 Claude Code、Codex、Cursor 等程式代理。[瀏覽所有技能 →](agent_skills/)*

*   [⚰️ Project Graveyard](agent_skills/project-graveyard/) - 找出你放棄的每個副專案，分析失敗原因，並協助你完成值得重啟的專案
*   [👁️ First Reader](agent_skills/first-reader/) - 模擬真實讀者閱讀草稿，指出他們何時失去興趣、停止閱讀及讀後記得什麼；不改寫原文
*   [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) - 檢查差異是否超出宣告的目標，並建議保留、拆分或說明哪些內容
*   [🏺 Commit Archaeologist](agent_skills/commit-archaeologist/) - 根據引入提交、後續修改、共同變更和意圖線索，還原檔案或程式碼區段存在的原因
*   [🩺 Dependency Doctor](agent_skills/dependency-doctor/) - 檢查相依清單中的標準程式庫鎖定、過時回移植、未鎖定項目、重複限制和已撤回版本
*   [🧠 Advisor Orchestrator Worker](agent_skills/advisor-orchestrator-worker/) - 由 Claude Fable 5.1 顧問、GPT-6 Astra 編排器和 Gemini 3.8 Flash 執行器組成的元循環
*   [🎙️ Thinking Out Loud](agent_skills/thinking-out-loud/) - 將語音隨想整理成易於瀏覽的簡報，並標示模型猜測和你的觀點反轉
*   [♾️ Self-Improving Agent Skills](agent_skills/self-improving-agent-skills/) - 使用 Gemini 和 ADK 自動最佳化代理技能

### 🌱 入門 AI 代理

*只需 API 金鑰即可執行的單檔代理，是很好的入門起點。*

*   [🎙️ AI Blog to Podcast Agent](starter_ai_agents/ai_blog_to_podcast_agent/) - 將任意部落格網址轉成配音 Podcast
*   [❤️‍🩹 AI Breakup Recovery Agent](starter_ai_agents/ai_breakup_recovery_agent/) - 陪你走過分手後情緒低潮的代理團隊
*   [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) - 用淺白語言詢問任意 CSV 或 Excel 檔案
*   [🩻 AI Medical Imaging Agent](starter_ai_agents/ai_medical_imaging_agent/) - 使用 Gemini 對 X 光片和掃描影像進行診斷分析
*   [😂 AI Meme Generator Agent (Browser)](starter_ai_agents/ai_meme_generator_agent_browseruse/) - 透過操控真實瀏覽器製作迷因，而非呼叫影像 API
*   [🎵 AI Music Generator Agent](starter_ai_agents/ai_music_generator_agent/) - 輸入提示詞，輸出 MP3 音軌
*   [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) - 依日期量身打造的旅遊行程
*   [💸 AI x402 Paying Agent](starter_ai_agents/ai_x402_paying_agent/) - 擁有錢包、按次為所需資料付費的代理，無需 API 金鑰
*   [✨ Gemini Multimodal Agent](starter_ai_agents/multimodal_ai_agent/) - 在單一代理中結合影片分析與網頁搜尋
*   [🔄 Mixture of Agents](starter_ai_agents/mixture_of_agents/) - 多個 LLM 分別作答，由一個模型彙整最佳答案
*   [📊 xAI Finance Agent](starter_ai_agents/xai_finance_agent/) - 由 Grok 驅動的即時股票分析
*   [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) - 使用 OpenAI Agents SDK 進行多代理主題研究
*   [🕸️ Web Scraping AI Agent](starter_ai_agents/web_scraping_ai_agent/) - 描述要擷取的內容，代理便會抓取資料

### 🚀 進階 AI 代理

*具備工具、記憶和多步推理能力的正式環境代理。*

*   [🏚️ 🍌 AI Home Renovation Agent with Nano Banana Pro](advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent) - 輸入空間照片，輸出裝修計畫和逼真效果圖
*   [🧠 DevPulse AI - Multi-Agent Signal Intelligence](advanced_ai_agents/multi_agent_apps/devpulse_ai/) - 彙整並評分技術訊號，產生每日情報摘要
*   [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) - 使用 OpenAI Agents SDK 和 Firecrawl 進行全面網頁研究
*   [📊 AI VC Due Diligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team) - 使用 Gemini 3 進行多代理新創投資分析
*   [🔬 AI Research Planner & Executor (Google Interactions API)](advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api) - 分階段研究，支援有狀態對話並自動產生資訊圖表
*   [🤝 AI Consultant Agent](advanced_ai_agents/single_agent_apps/ai_consultant_agent) - 結合即時網路研究進行市場分析並提出策略建議
*   [🏗️ AI System Architect Agent](advanced_ai_agents/single_agent_apps/ai_system_architect_r1/) - 使用 DeepSeek R1 推理和 Claude 進行架構審查
*   [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) - 個人化預算、債務和儲蓄分析
*   [🎬 AI Movie Production Agent](advanced_ai_agents/single_agent_apps/ai_movie_production_agent/) - 根據一句電影構想產生劇本草稿和選角點子
*   [📈 AI Investment Agent](advanced_ai_agents/single_agent_apps/ai_investment_agent/) - 根據 Yahoo Finance 資料產生股票比較報告
*   [📡 Earnings Call Analyst Agent](advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/) - 將 YouTube 財報電話會轉成與播放進度同步的分析工作區
*   [🏋️‍♂️ AI Health & Fitness Agent](advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/) - 依你的目標量身打造飲食與運動計畫
*   [🚀 AI Product Launch Intelligence Agent](advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent) - 分析競爭者發布動態的市場進入情報
*   [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) - 交叉比對公開紀錄，標示資料不一致的機構
*   [🗞️ AI Journalist Agent](advanced_ai_agents/single_agent_apps/ai_journalist_agent/) - 研究、撰寫並編輯任意主題的文章
*   [🧠 AI Mental Wellbeing Agent](advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/) - 為心理健康支援計畫提供協作代理團隊
*   [📑 AI Meeting Agent](advanced_ai_agents/single_agent_apps/ai_meeting_agent/) - 會面前提供背景、產業洞察和策略簡報
*   [🧬 AI Self-Evolving Agent](advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/) - 使用 EvoAgentX 重寫自身工作流程的代理
*   [👨🏻‍💼 AI Sales Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team) - 即時產生競爭性銷售對戰卡
*   [🎧 AI Social Media News and Podcast Agent](advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/) - 將你信賴的資訊來源整理成簡報和自動產生的 Podcast
*   [🌐 Openwork - Open Browser Automation Agent](https://github.com/accomplish-ai/coworker) <sub>↗ 外部連結</sub> - 可操作真實瀏覽器的開源代理
*   [🛡️ Trust-Gated Multi-Agent Research Team](advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/) - 驗證每個代理，並將每項操作記錄於雜湊鏈稽核軌跡

### 🛰️ 常駐代理

*依排程或事件執行的背景代理，監控變化中的脈絡，判斷需留意的事項，並主動提供更新、成果或採取行動。*

*   [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) - 按排程執行的偵察器，向 Slack 或電子郵件傳送每日排名簡報
*   [📡 Release Radar Agent](always_on_agents/release_radar_agent/) - 監控相依項目發布，並回報重大變更、棄用、安全問題和主版本更新

### 🤝 多代理團隊

*多個代理協作完成複雜的跨領域任務。*

*   [🧲 AI Competitor Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/) - 根據競爭者自有網站產生結構化競品拆解
*   [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) - 用 20 行 Python 實作的金融分析團隊
*   [🎨 AI Game Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/) - 由設計專家群組構思完整遊戲方案
*   [🧭 AG2 Adaptive Research Team](advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/) - 以 AG2 建構，支援路由和備援的代理協作
*   [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) - 由完整法律團隊提供研究、合約分析和策略建議
*   [💼 AI Recruitment Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/) - 端到端完成履歷篩選至面試安排
*   [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) - 房產搜尋、市場分析和推薦
*   [👨‍💼 AI Services Agency (CrewAI)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/) - 為你的軟體專案制定範圍和計畫的數位代理機構
*   [👨‍🏫 AI Teaching Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/) - 由代理教師團隊建構完整學習路徑
*   [💻 Multimodal Coding Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/) - 拍下程式題目，取得沙箱中的解答
*   [✨ Multimodal Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/) - 由 Gemini 驅動的專家小組提供設計評論
*   [🎨 🍌 Multimodal UI/UX Feedback Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/) - 提供登陸頁回饋並自動產生改良版本
*   [🌏 AI Travel Planner Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/) - 由團隊制定完整旅遊行程
*   [⚖️ LLM Panel Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/llm_panel_agent_team/) - 三家廠商盲審同一程式差異，再匿名辯論

### 🗣️ 語音 AI 代理

*使用即時語音 API 的語音輸入、語音輸出代理。*

*   [🗣️ AI Audio Tour Agent](voice_ai_agents/ai_audio_tour_agent/) - 依據你的位置、興趣和步調提供自助語音導覽
*   [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) - 根據你自己的文件提供語音回答
*   [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) - 在 Gemini 3.8 Live 上以語音受理理賠、記錄現場筆記、透過網路攝影機檢視損害並繪製事故示意圖
*   [🔊 Voice RAG Agent (OpenAI SDK)](voice_ai_agents/voice_rag_openaisdk/) - 對 PDF 提問並聆聽答案
*   [🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)](https://github.com/akshayaggarwal99/jarvis-ai-assistant) <sub>↗ 外部連結</sub> - 開源語音聽寫工具，可將語音輸入至目前游標位置

### 🖼️ 生成式 UI 與代理前端

*可呈現互動式 UI 元件而不只是文字的代理：表單、卡片、圖表和可編輯計畫。*

*   [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) - 透過聊天驅動看板，你和代理協作完成工作
*   [🪙 AI Financial Coach Agent](generative_ui_agents/ai-financial-coach-agent/) - 將預算、儲蓄和債務方案呈現為互動卡片
*   [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) - 在聊天中描述儀表板，圖表便會在即時畫布上組裝
*   [🛠️ AI MCP App Builder](generative_ui_agents/ai-mcp-app-builder/) - 描述 MCP 應用程式，即可取得可執行的沙箱實例
*   [✈️ MCP Apps Generative UI Showcase](generative_ui_agents/mcp-apps-generative-ui-showcase/) - 可呈現真實互動介面的 MCP 應用程式，包含航班搜尋
*   [🎛️ AI Shadcn Component Generator](generative_ui_agents/ai-shadcn-component-generator/) - 透過聊天產生可用於正式環境的 shadcn 元件
*   [🔍 AI Deep Research Agent](generative_ui_agents/ai-deep-research-agent/) - 每次工具呼叫都會呈現為即時工作區卡片的研究流程

### 🎮 自主遊戲代理

*端到端玩遊戲的代理：推理、策略與行動。*

*   [🎮 AI 3D Pygame Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/) - DeepSeek R1 撰寫 PyGame 程式碼，瀏覽器代理即時執行
*   [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) - 合法步法驗證的白方代理對黑方代理
*   [🎲 AI Tic-Tac-Toe Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/) - 兩個不同的 LLM 逐步對戰

### ♾️ MCP AI 代理

*透過 Model Context Protocol 連接外部工具和資料的代理。*

*   [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) - 透過 MCP 使用自然語言操控真實瀏覽器
*   [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) - 用淺白語言探索和分析任意程式碼儲存庫
*   [📑 Notion MCP Agent](mcp_ai_agents/notion_mcp_agent) - 在終端機中與 Notion 頁面互動
*   [🌍 AI Travel Planner MCP Agent](mcp_ai_agents/ai_travel_planner_mcp_agent_team) - 根據 Airbnb 和 Google Maps 即時資料產生行程
*   [🔀 Multi-MCP Agent Router](mcp_ai_agents/multi_mcp_agent_router/) - 每個專家代理都連線至自己的 MCP 伺服器
*   [🔌 OpenAI Remote MCP Tool Bridge](mcp_ai_agents/openai_remote_mcp_bridge/) - 將 OpenAI 函式呼叫直接連線至遠端 MCP 伺服器

### 📀 RAG（檢索增強生成）

*從簡單鏈結到代理式、多來源檢索的流程。*

*   [🔥 Agentic RAG with Embedding Gemma](rag_tutorials/agentic_rag_embedding_gemma) - 完全在本機執行，採用 EmbeddingGemma 和 Llama 3.2 的代理式 RAG
*   [🧐 Agentic RAG with Reasoning](rag_tutorials/agentic_rag_with_reasoning/) - 觀察代理擷取資料時逐步展開的推理
*   [📰 AI Blog Search (RAG)](rag_tutorials/ai_blog_search/) - 以 LangGraph 對部落格內容進行代理式搜尋
*   [🔍 Autonomous RAG](rag_tutorials/autonomous_rag/) - GPT-4o 根據 PDF 作答，必要時改用網頁搜尋
*   [🔄 Contextual AI RAG Agent](rag_tutorials/contextualai_rag_agent/) - 數分鐘內從資料儲存庫建立有根據的託管 RAG 聊天
*   [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) - 能自行評估並在回答前重試的擷取流程
*   [📎 Typed Agentic RAG with Pydantic AI](rag_tutorials/agentic_typed_rag_pydanticai/) - 提供經驗證且附精確引文的答案；證據不足時則拒答
*   [🐋 Deepseek Local RAG Agent](rag_tutorials/deepseek_local_rag_agent/) - 在本機使用 DeepSeek 對你自己的文件進行推理
*   [🤔 Gemini Agentic RAG](rag_tutorials/gemini_agentic_rag/) - 使用 Gemini Flash Thinking 改寫查詢，必要時改用網路搜尋
*   [👀 Hybrid Search RAG (Cloud)](rag_tutorials/hybrid_search_rag/) - 以關鍵字和向量搜尋為 Claude 提供檢索結果
*   [🔄 Llama 3.1 Local RAG](rag_tutorials/llama3.1_local_rag/) - 完全離線地與任意網頁聊天
*   [🖥️ Local Hybrid Search RAG](rag_tutorials/local_hybrid_search_rag/) - 所有項目都在你的電腦上執行的混合式搜尋
*   [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) - 針對文字、PDF、影像、音訊和影片作答，並附上引文
*   [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) - 使用 Llama 3.2 和 Qdrant，無需 API 金鑰
*   [🧩 RAG-as-a-Service](rag_tutorials/rag-as-a-service/) - 不到 50 行程式碼即可建立正式環境 RAG 服務
*   [✨ RAG Agent with Cohere](rag_tutorials/rag_agent_cohere/) - 使用 Command R7B 擷取，搜尋不到時改用網路搜尋
*   [⛓️ Basic RAG Chain](rag_tutorials/rag_chain/) - 應用於製藥研究的最精簡檢索流程
*   [📠 RAG with Database Routing](rag_tutorials/rag_database_routing/) - 自動將每個問題路由至適當資料庫
*   [🖼️ Vision RAG](rag_tutorials/vision_rag/) - 使用 Embed-4 對影像和 PDF 頁面提問
*   [🩺 RAG Failure Diagnostics Clinic](rag_tutorials/rag_failure_diagnostics_clinic/) - 有系統地找出 RAG 流程中的錯誤
*   [🕸️ Knowledge Graph RAG with Citations](rag_tutorials/knowledge_graph_rag_citations/) - 提供可驗證來源歸屬的多跳答案

### 🔎 AI 瀏覽器工具

*將 AI 帶入日常瀏覽的小工具。*

*   [🪡 Needle - A New Way to Find](advanced_llm_apps/needle/) - 透過 TypeSafe Jev 驅動的 Chrome 擴充功能按語意搜尋網頁，並標示最有力的來源句子
*   [🌀 Ripple - Change One Thing, Find What Else Needs to Change](advanced_llm_apps/ripple/) - 使用 TypeSafe Jev 和 Gemini，在編輯 Google 文件時找出相關矛盾並建議修正

### 💾 具備記憶功能的 LLM 應用程式

*能跨工作階段記住對話和使用者狀態的代理與聊天機器人。*

*   [💾 AI ArXiv Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/) - 會記住研究興趣的論文搜尋
*   [🛩️ AI Travel Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/) - 會記住你偏好的旅遊助理
*   [💬 Llama3 Stateful Chat](advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/) - 支援工作階段持續儲存的 Llama 3 聊天
*   [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) - 能在多輪對話間保留脈絡的聊天機器人
*   [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) - 完全在本機執行，每位使用者都有個人記憶
*   [🧠 Multi-LLM Application with Shared Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/multi_llm_memory/) - 不同模型共用同一份對話記憶

### 💬 與任意內容聊天

*將任意資料來源轉化為聊天介面。*

*   [💬 Chat with GitHub (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_github/) - 用 30 行 RAG 程式碼回答任意程式碼庫問題
*   [📨 Chat with Gmail](advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/) - 向收件匣提問
*   [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) - 經典範例，只需 30 行 Python
*   [📚 Chat with Research Papers (ArXiv) (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/) - 用 GPT-4o 對 arXiv 論文進行對話式探索
*   [📝 Chat with Substack](advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/) - 與任意 Substack 電子報檔案聊天
*   [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) - 透過影片逐字稿向影片提問

### 🎯 LLM 最佳化工具

*在不犧牲品質的前提下，減少 token 用量、上下文大小和 API 成本。*

*   [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) - 使用 TOON 格式將 LLM API 成本降低 30–60%
*   [🧠 Headroom Context Optimization](advanced_llm_apps/llm_optimization_tools/headroom_context_optimization/) - 將 LLM API 成本降低 50–90%

### 🔧 LLM 微調

*適用於開源模型的端到端微調配方。*

*   [🦥 Gemma 3 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/gemma3_finetuning/) - 使用 Unsloth 進行 4 位元 LoRA 微調，精簡易讀
*   [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) - 只需 30 行程式碼微調，並可在 Colab 免費執行

### 🧑‍🏫 AI 代理框架速成課程

*深入介紹主流代理框架的教學。*

*   [Google ADK Crash Course](ai_agent_framework_crash_course/google_adk_crash_course/) - 入門代理、結構化輸出、工具（內建、函式、第三方、MCP）、記憶、回呼、外掛和多代理模式；不綁定模型
*   [OpenAI Agents SDK Crash Course](ai_agent_framework_crash_course/openai_sdk_crash_course/) - 入門代理、函式呼叫、結構化輸出、工具、記憶、評估、交接、群集協調和路由邏輯

---

<div align="center">

⭐ **[為儲存庫按星號](https://github.com/Shubhamsaboo/awesome-llm-apps/stargazers)**，新範本推出時即可收到通知。

<sub>
<!-- 請保留這些連結。翻譯會隨 README 自動更新。 -->
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=de">Deutsch</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=es">Español</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=fr">français</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ja">日本語</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ko">한국어</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=pt">Português</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ru">Русский</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=zh">中文</a>
</sub>

<sub>Apache-2.0 · 查看 <a href="LICENSE">LICENSE</a> · 複製、發布、銷售。</sub>

</div>
