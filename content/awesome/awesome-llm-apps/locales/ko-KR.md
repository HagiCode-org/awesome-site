<div align="center">

# Awesome LLM 앱 모음

**100개 이상의 오픈소스 AI 에이전트, 에이전트 스킬 및 RAG 앱. 직접 제작하고 엔드투엔드로 테스트했으며 Apache-2.0 라이선스를 적용했습니다.**

복제하고 출시하고 판매하세요 — 100% 무료 오픈소스

Claude, Gemini, GPT, DeepSeek, Llama, Qwen 및 기타 오픈소스 모델과 함께 사용할 수 있습니다.

**[Unwind AI 단계별 튜토리얼](https://www.theunwindai.com) · [빠른 시작](#-run-one-now) · [모든 템플릿 둘러보기](#-browse-all-templates)**


<a href="https://trendshift.io/repositories/9876" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/9876" width="220" alt="Trendshift 오늘의 1위 저장소로 선정">
</a>

<br>

</div>

<table>
  <tr>
    <td width="33.3%" align="center">
      <a href="agent_skills/project-graveyard/"><img src="docs/gallery/project-graveyard.png" alt="Project Graveyard: 버려둔 사이드 프로젝트를 분석하는 에이전트"></a>
      <sub><b>Project Graveyard</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="voice_ai_agents/insurance_claim_live_agent_team/"><img src="docs/gallery/insurance-claim-live-team.png" alt="Insurance Claim Live Agent Team: 실시간 음성 보험 청구 처리"></a>
      <sub><b>Insurance Claim Live Agent Team</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/"><img src="docs/gallery/ai-fraud-investigation.png" alt="AI Fraud Investigation Agent: 공공 기록을 교차 조사"></a>
      <sub><b>AI Fraud Investigation Agent</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="agent_skills/self-improving-agent-skills/"><img src="docs/gallery/self-improving-agent-skills.png" alt="Self-Improving Agent Skills: 평가 결과에 맞춰 스스로 다시 작성하는 스킬"></a>
      <sub><b>Self-Improving Agent Skills</b></sub>
    </td>
    <td align="center">
      <a href="advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent"><img src="docs/gallery/ai-home-renovation.png" alt="AI Home Renovation Agent: 사진 입력, 사실적인 리모델링 결과"></a>
      <sub><b>AI Home Renovation Agent</b></sub>
    </td>
    <td align="center">
      <a href="always_on_agents/always_on_hn_briefing_agent/"><img src="docs/gallery/always-on-hn-briefing.png" alt="Always-on HN Briefing Agent: 잠든 동안 Hacker News를 읽습니다"></a>
      <sub><b>Always-on HN Briefing Agent</b></sub>
    </td>
  </tr>
</table>

## 🙏 후원자 여러분께 감사드립니다

<table align="center" cellpadding="16" cellspacing="12">
  <tr>
    <td align="center">
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" title="TinyFish">
        <img src="docs/banner/sponsors/tinyfish_community.png" alt="TinyFish 커뮤니티 프로그램: 학생 및 앰배서더 프로그램 참여" width="500">
      </a>
      <br>
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        TinyFish
      </a>
    </td>
    <td align="center">
      <a href="https://sponsorunwindai.com/" title="후원자가 되기">
        <img src="docs/banner/sponsor_awesome_llm_apps.png" alt="후원자가 되기" width="500">
      </a>
      <br>
      <a href="https://sponsorunwindai.com/" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        후원자가 되기
      </a>
    </td>
  </tr>
</table>

## 🚀 지금 실행하기

10초 만에 코딩 에이전트에 새 스킬 추가하기:

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

그런 다음 이렇게 물어보세요: *“왜 나는 사이드 프로젝트를 늘 끝내지 못할까?”*

또는 30초 만에 에이전트를 복제해 실행하세요:

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 매주 새 템플릿이 공개됩니다. [Unwind AI에서 이메일로 받아보세요](https://www.theunwindai.com).

## 📂 모든 템플릿 둘러보기

### 🧩 에이전트 스킬

*코딩 에이전트에 새로운 기능을 추가하세요. 명령 하나로 설치하고 쉬운 말로 사용합니다. 모든 스킬은 실제 코드를 포함하며 보안 및 평가 CI 관문을 통과합니다. Claude Code, Codex, Cursor 등과 호환됩니다. [모든 스킬 보기 →](agent_skills/)*

*   [⚰️ Project Graveyard](agent_skills/project-graveyard/) - 포기한 모든 사이드 프로젝트를 찾아 실패 이유를 알려주고 다시 시작할 가치가 있는 프로젝트의 완성을 돕습니다
*   [👁️ First Reader](agent_skills/first-reader/) - 실제 독자가 초안을 읽는 상황을 시뮬레이션해 흥미를 잃거나 읽기를 멈추는 지점, 나중에 기억하는 내용을 보고합니다. 한 글자도 다시 쓰지 않습니다
*   [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) - diff가 명시된 목적을 벗어났는지 확인하고 유지·분리·정당화할 내용을 제안합니다
*   [🏺 Commit Archaeologist](agent_skills/commit-archaeologist/) - 도입 커밋, 이후 수정, 함께 바뀐 내용과 의도 단서로 파일이나 코드 영역이 존재하는 이유를 재구성합니다
*   [🩺 Dependency Doctor](agent_skills/dependency-doctor/) - 의존성 매니페스트에서 표준 라이브러리 고정, 오래된 백포트, 미고정 항목, 중복 제약, 철회된 릴리스를 확인합니다
*   [🧠 Advisor Orchestrator Worker](agent_skills/advisor-orchestrator-worker/) - Claude Fable 5.1이 조언자, GPT-6 Astra가 오케스트레이터, Gemini 3.8 Flash가 작업자인 메타 루프
*   [🎙️ Thinking Out Loud](agent_skills/thinking-out-loud/) - 음성으로 떠든 내용을 훑어보기 쉬운 요약으로 바꾸고 모델의 추측을 분리하며 생각이 바뀐 부분을 표시합니다
*   [♾️ Self-Improving Agent Skills](agent_skills/self-improving-agent-skills/) - Gemini와 ADK로 에이전트 스킬을 자동 최적화합니다

### 🌱 입문용 AI 에이전트

*API 키만으로 실행되는 단일 파일 에이전트로 시작하기 좋습니다.*

*   [🎙️ AI Blog to Podcast Agent](starter_ai_agents/ai_blog_to_podcast_agent/) - 어떤 블로그 URL이든 내레이션이 있는 팟캐스트 에피소드로 변환합니다
*   [❤️‍🩹 AI Breakup Recovery Agent](starter_ai_agents/ai_breakup_recovery_agent/) - 이별 후 힘든 시기를 함께하는 에이전트 팀
*   [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) - 어떤 CSV 또는 Excel 파일이든 자연스러운 말로 질문합니다
*   [🩻 AI Medical Imaging Agent](starter_ai_agents/ai_medical_imaging_agent/) - Gemini를 이용한 X선 및 스캔 진단 분석
*   [😂 AI Meme Generator Agent (Browser)](starter_ai_agents/ai_meme_generator_agent_browseruse/) - 이미지 API가 아니라 실제 브라우저를 조작해 밈을 만듭니다
*   [🎵 AI Music Generator Agent](starter_ai_agents/ai_music_generator_agent/) - 프롬프트 입력, MP3 트랙 출력
*   [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) - 하루 단위 맞춤 여행 일정
*   [💸 AI x402 Paying Agent](starter_ai_agents/ai_x402_paying_agent/) - 필요한 데이터를 호출별로 결제하는 지갑 보유 에이전트 — API 키 불필요
*   [✨ Gemini Multimodal Agent](starter_ai_agents/multimodal_ai_agent/) - 하나의 에이전트에서 동영상 분석과 웹 검색 제공
*   [🔄 Mixture of Agents](starter_ai_agents/mixture_of_agents/) - 여러 LLM이 답하고 하나가 최선의 답을 종합합니다
*   [📊 xAI Finance Agent](starter_ai_agents/xai_finance_agent/) - Grok 기반 실시간 주식 분석
*   [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) - OpenAI Agents SDK를 이용한 멀티 에이전트 주제 조사
*   [🕸️ Web Scraping AI Agent](starter_ai_agents/web_scraping_ai_agent/) - 추출할 항목을 설명하면 에이전트가 스크랩합니다

### 🚀 고급 AI 에이전트

*도구, 메모리, 다단계 추론을 갖춘 프로덕션 수준의 에이전트입니다.*

*   [🏚️ 🍌 AI Home Renovation Agent with Nano Banana Pro](advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent) - 공간 사진으로 리모델링 계획과 사실적인 렌더링 생성
*   [🧠 DevPulse AI - Multi-Agent Signal Intelligence](advanced_ai_agents/multi_agent_apps/devpulse_ai/) - 기술 신호를 모으고 평가해 일일 인텔리전스 요약을 만듭니다
*   [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) - OpenAI Agents SDK와 Firecrawl을 사용한 종합 웹 조사
*   [📊 AI VC Due Diligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team) - Gemini 3 기반 멀티 에이전트 스타트업 투자 분석
*   [🔬 AI Research Planner & Executor (Google Interactions API)](advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api) - 상태 저장 대화와 자동 생성 인포그래픽을 지원하는 다단계 조사
*   [🤝 AI Consultant Agent](advanced_ai_agents/single_agent_apps/ai_consultant_agent) - 실시간 웹 조사 기반 시장 분석 및 전략 제안
*   [🏗️ AI System Architect Agent](advanced_ai_agents/single_agent_apps/ai_system_architect_r1/) - DeepSeek R1 추론과 Claude를 이용한 아키텍처 검토
*   [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) - 맞춤형 예산·부채·저축 분석
*   [🎬 AI Movie Production Agent](advanced_ai_agents/single_agent_apps/ai_movie_production_agent/) - 한 줄짜리 영화 아이디어로 대본 초안과 캐스팅 아이디어 생성
*   [📈 AI Investment Agent](advanced_ai_agents/single_agent_apps/ai_investment_agent/) - Yahoo Finance 데이터 기반 주식 비교 보고서
*   [📡 Earnings Call Analyst Agent](advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/) - YouTube 실적 발표 통화를 재생 위치와 동기화된 분석 작업 공간으로 바꿉니다
*   [🏋️‍♂️ AI Health & Fitness Agent](advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/) - 목표에 맞춘 식단 및 운동 계획
*   [🚀 AI Product Launch Intelligence Agent](advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent) - 경쟁사의 출시 동향에 관한 시장 진출 인텔리전스
*   [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) - 공공 기록을 교차 참조해 앞뒤가 맞지 않는 시설을 표시합니다
*   [🗞️ AI Journalist Agent](advanced_ai_agents/single_agent_apps/ai_journalist_agent/) - 어떤 주제든 조사하고 글을 쓰고 편집합니다
*   [🧠 AI Mental Wellbeing Agent](advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/) - 정신 건강 지원 계획을 위한 협업 에이전트 팀
*   [📑 AI Meeting Agent](advanced_ai_agents/single_agent_apps/ai_meeting_agent/) - 만나기 전 필요한 맥락, 업계 통찰 및 전략 브리프
*   [🧬 AI Self-Evolving Agent](advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/) - EvoAgentX로 자체 워크플로를 다시 쓰는 에이전트
*   [👨🏻‍💼 AI Sales Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team) - 실시간 경쟁 영업 배틀카드 생성
*   [🎧 AI Social Media News and Podcast Agent](advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/) - 신뢰하는 자료를 요약과 생성형 팟캐스트로 큐레이션합니다
*   [🌐 Openwork - Open Browser Automation Agent](https://github.com/accomplish-ai/coworker) <sub>↗ 외부</sub> - 실제 브라우저를 조작하는 오픈소스 에이전트
*   [🛡️ Trust-Gated Multi-Agent Research Team](advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/) - 모든 에이전트를 검증하고 모든 작업을 해시 체인 감사 기록에 남깁니다

### 🛰️ 상시 실행 에이전트

*일정이나 이벤트에 따라 실행되고 변화하는 맥락을 감시하며 주의할 일을 판단해 업데이트·결과물·작업을 선제적으로 제공합니다.*

*   [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) - 예약된 정찰 에이전트가 순위가 매겨진 일일 브리프를 Slack 또는 이메일로 보냅니다
*   [📡 Release Radar Agent](always_on_agents/release_radar_agent/) - 의존성 릴리스를 감시하고 호환성 파괴·지원 중단·보안·메이저 버전 변경을 요약합니다

### 🤝 멀티 에이전트 팀

*여러 에이전트가 협력해 복잡한 다분야 작업을 수행합니다.*

*   [🧲 AI Competitor Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/) - 경쟁사 자체 웹사이트를 바탕으로 한 구조화된 경쟁 분석
*   [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) - Python 20줄로 구현한 금융 분석 팀
*   [🎨 AI Game Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/) - 디자인 전문가 집단이 완성된 게임 콘셉트를 만듭니다
*   [🧭 AG2 Adaptive Research Team](advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/) - AG2 기반 라우팅 및 대체 경로를 갖춘 에이전트 협업
*   [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) - 전문 법률팀의 조사·계약 분석·전략
*   [💼 AI Recruitment Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/) - 이력서 검토부터 면접 일정 조정까지 전 과정
*   [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) - 부동산 검색, 시장 분석 및 추천
*   [👨‍💼 AI Services Agency (CrewAI)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/) - 소프트웨어 프로젝트의 범위를 정하고 계획하는 디지털 에이전시
*   [👨‍🏫 AI Teaching Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/) - 에이전트 교수진이 전체 학습 경로를 만듭니다
*   [💻 Multimodal Coding Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/) - 코딩 문제를 촬영하면 샌드박스에서 실행할 수 있는 해답을 제공합니다
*   [✨ Multimodal Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/) - Gemini 기반 전문가 패널의 디자인 비평
*   [🎨 🍌 Multimodal UI/UX Feedback Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/) - 랜딩 페이지 피드백과 자동 생성된 개선 버전
*   [🌏 AI Travel Planner Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/) - 팀이 만드는 완전한 여행 일정
*   [⚖️ LLM Panel Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/llm_panel_agent_team/) - 세 공급업체가 동일한 diff를 블라인드 검토한 뒤 익명으로 토론합니다

### 🗣️ 음성 AI 에이전트

*실시간 음성 API를 사용해 음성을 입력하고 출력하는 에이전트입니다.*

*   [🗣️ AI Audio Tour Agent](voice_ai_agents/ai_audio_tour_agent/) - 위치·관심사·속도에 맞춘 셀프 가이드 오디오 투어
*   [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) - 자체 문서에 근거한 음성 답변
*   [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) - Gemini 3.8 Live 음성 보험 청구 접수: 현장 기록 작성, 웹캠으로 손상 확인, 사고 스케치
*   [🔊 Voice RAG Agent (OpenAI SDK)](voice_ai_agents/voice_rag_openaisdk/) - PDF에 질문하고 답변을 들을 수 있습니다
*   [🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)](https://github.com/akshayaggarwal99/jarvis-ai-assistant) <sub>↗ 외부</sub> - 말하는 위치에 입력하는 오픈소스 음성 받아쓰기

### 🖼️ 생성형 UI 및 에이전트 프런트엔드

*텍스트뿐 아니라 양식·카드·차트·편집 가능한 계획 등 대화형 UI를 렌더링하는 에이전트입니다.*

*   [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) - 에이전트와 함께 채팅으로 작업하는 칸반 보드
*   [🪙 AI Financial Coach Agent](generative_ui_agents/ai-financial-coach-agent/) - 예산·저축·부채 계획을 인터랙티브 카드로 표시합니다
*   [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) - 채팅으로 대시보드를 설명하면 라이브 캔버스에 차트가 구성됩니다
*   [🛠️ AI MCP App Builder](generative_ui_agents/ai-mcp-app-builder/) - MCP 앱을 설명하면 실행 가능한 샌드박스 인스턴스를 제공합니다
*   [✈️ MCP Apps Generative UI Showcase](generative_ui_agents/mcp-apps-generative-ui-showcase/) - 항공편 검색을 포함해 실제 인터랙티브 UI를 렌더링하는 MCP 앱
*   [🎛️ AI Shadcn Component Generator](generative_ui_agents/ai-shadcn-component-generator/) - 채팅으로 프로덕션에 바로 쓸 shadcn 컴포넌트 생성
*   [🔍 AI Deep Research Agent](generative_ui_agents/ai-deep-research-agent/) - 모든 도구 호출을 라이브 작업 공간 카드로 보여주는 조사

### 🎮 자율 게임 플레이 에이전트

*추론·전략·행동을 통해 게임을 처음부터 끝까지 플레이하는 에이전트입니다.*

*   [🎮 AI 3D Pygame Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/) - DeepSeek R1이 PyGame 코드를 작성하고 브라우저 에이전트가 실시간 실행
*   [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) - 합법적인 수를 검증하는 에이전트 백 대 에이전트 흑
*   [🎲 AI Tic-Tac-Toe Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/) - 서로 다른 두 LLM이 한 수씩 대결합니다

### ♾️ MCP AI 에이전트

*Model Context Protocol을 통해 외부 도구와 데이터에 연결하는 에이전트입니다.*

*   [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) - MCP를 통해 자연어로 실제 브라우저를 제어합니다
*   [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) - 어떤 저장소든 쉬운 말로 탐색하고 분석합니다
*   [📑 Notion MCP Agent](mcp_ai_agents/notion_mcp_agent) - 터미널에서 Notion 페이지와 대화합니다
*   [🌍 AI Travel Planner MCP Agent](mcp_ai_agents/ai_travel_planner_mcp_agent_team) - Airbnb와 Google Maps의 실시간 데이터 기반 일정
*   [🔀 Multi-MCP Agent Router](mcp_ai_agents/multi_mcp_agent_router/) - 각자 전용 MCP 서버에 연결된 전문 에이전트
*   [🔌 OpenAI Remote MCP Tool Bridge](mcp_ai_agents/openai_remote_mcp_bridge/) - OpenAI 함수 호출을 원격 MCP 서버에 직접 연결합니다

### 📀 RAG(검색 증강 생성)

*단순 체인부터 에이전트형·다중 소스 검색까지의 파이프라인입니다.*

*   [🔥 Agentic RAG with Embedding Gemma](rag_tutorials/agentic_rag_embedding_gemma) - EmbeddingGemma와 Llama 3.2를 사용하는 완전 로컬 에이전트형 RAG
*   [🧐 Agentic RAG with Reasoning](rag_tutorials/agentic_rag_with_reasoning/) - 검색 중 에이전트의 단계별 추론을 확인합니다
*   [📰 AI Blog Search (RAG)](rag_tutorials/ai_blog_search/) - LangGraph 기반 블로그 콘텐츠 에이전트 검색
*   [🔍 Autonomous RAG](rag_tutorials/autonomous_rag/) - GPT-4o가 PDF를 근거로 답하고 필요하면 웹 검색으로 전환합니다
*   [🔄 Contextual AI RAG Agent](rag_tutorials/contextualai_rag_agent/) - 데이터 저장소에서 근거 기반 채팅까지 몇 분 만에 구현하는 관리형 RAG
*   [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) - 답변 전에 자체 평가하고 재시도하는 검색
*   [📎 Typed Agentic RAG with Pydantic AI](rag_tutorials/agentic_typed_rag_pydanticai/) - 정확한 인용이 포함된 검증된 답변, 근거가 약하면 응답 거부
*   [🐋 Deepseek Local RAG Agent](rag_tutorials/deepseek_local_rag_agent/) - 자체 문서를 대상으로 한 로컬 DeepSeek 추론
*   [🤔 Gemini Agentic RAG](rag_tutorials/gemini_agentic_rag/) - Gemini Flash Thinking으로 질의를 다시 작성하고 웹 검색으로 대체
*   [👀 Hybrid Search RAG (Cloud)](rag_tutorials/hybrid_search_rag/) - Claude로 전달하는 키워드 및 벡터 검색
*   [🔄 Llama 3.1 Local RAG](rag_tutorials/llama3.1_local_rag/) - 완전히 오프라인으로 어떤 웹페이지와도 채팅합니다
*   [🖥️ Local Hybrid Search RAG](rag_tutorials/local_hybrid_search_rag/) - 모든 것이 내 컴퓨터에서 실행되는 하이브리드 검색
*   [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) - 텍스트·PDF·이미지·오디오·비디오에 인용과 함께 답합니다
*   [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) - Llama 3.2와 Qdrant, API 키 불필요
*   [🧩 RAG-as-a-Service](rag_tutorials/rag-as-a-service/) - 50줄 미만으로 프로덕션 RAG 서비스 구성
*   [✨ RAG Agent with Cohere](rag_tutorials/rag_agent_cohere/) - Command R7B 검색 및 웹 검색 대체 경로
*   [⛓️ Basic RAG Chain](rag_tutorials/rag_chain/) - 제약 연구에 적용한 최소 검색 파이프라인
*   [📠 RAG with Database Routing](rag_tutorials/rag_database_routing/) - 질문마다 올바른 데이터베이스로 자동 라우팅합니다
*   [🖼️ Vision RAG](rag_tutorials/vision_rag/) - Embed-4로 이미지와 PDF 페이지에 질문합니다
*   [🩺 RAG Failure Diagnostics Clinic](rag_tutorials/rag_failure_diagnostics_clinic/) - RAG 파이프라인이 잘못된 이유를 체계적으로 찾습니다
*   [🕸️ Knowledge Graph RAG with Citations](rag_tutorials/knowledge_graph_rag_citations/) - 검증 가능한 출처를 제공하는 멀티홉 답변

### 🔎 AI 브라우저 도구

*일상적인 브라우징에 AI를 더하는 작은 도구입니다.*

*   [🪡 Needle - A New Way to Find](advanced_llm_apps/needle/) - TypeSafe Jev 기반 Chrome 확장 프로그램으로 웹페이지를 의미 검색하고 가장 강력한 출처 문장을 강조합니다
*   [🌀 Ripple - Change One Thing, Find What Else Needs to Change](advanced_llm_apps/ripple/) - TypeSafe Jev와 Gemini로 Google 문서를 편집하면서 관련 불일치와 수정안을 찾습니다

### 💾 메모리가 있는 LLM 앱

*세션을 넘어 대화와 사용자 상태를 기억하는 에이전트 및 챗봇입니다.*

*   [💾 AI ArXiv Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/) - 연구 관심사를 기억하는 논문 검색
*   [🛩️ AI Travel Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/) - 선호를 기억하는 여행 도우미
*   [💬 Llama3 Stateful Chat](advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/) - 세션 간 상태를 유지하는 Llama 3 채팅
*   [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) - 대화 사이에 맥락을 유지하는 챗봇
*   [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) - 완전 로컬 실행, 사용자별 개인 메모리
*   [🧠 Multi-LLM Application with Shared Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/multi_llm_memory/) - 서로 다른 모델이 하나의 대화 메모리를 공유합니다

### 💬 X와 채팅하기

*모든 데이터 소스를 채팅 인터페이스로 바꿉니다.*

*   [💬 Chat with GitHub (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_github/) - RAG 30줄로 어떤 저장소든 답변
*   [📨 Chat with Gmail](advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/) - 받은 편지함에 질문하기
*   [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) - Python 30줄로 구현한 고전 예제
*   [📚 Chat with Research Papers (ArXiv) (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/) - GPT-4o와 대화하며 arXiv 탐색
*   [📝 Chat with Substack](advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/) - 어떤 Substack 뉴스레터든 아카이브와 채팅
*   [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) - 자막으로 동영상에 질문하기

### 🎯 LLM 최적화 도구

*품질을 유지하면서 토큰 사용량, 컨텍스트 크기, API 비용을 줄입니다.*

*   [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) - TOON 형식으로 LLM API 비용 30~60% 절감
*   [🧠 Headroom Context Optimization](advanced_llm_apps/llm_optimization_tools/headroom_context_optimization/) - LLM API 비용 50~90% 절감

### 🔧 LLM 파인튜닝

*오픈소스 모델을 위한 엔드투엔드 파인튜닝 레시피입니다.*

*   [🦥 Gemma 3 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/gemma3_finetuning/) - Unsloth 기반 4비트 LoRA, 작고 읽기 쉬운 구현
*   [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) - Colab에서 무료로 30줄 만에 파인튜닝

### 🧑‍🏫 AI 에이전트 프레임워크 속성 과정

*주요 에이전트 프레임워크를 깊이 있게 다루는 튜토리얼입니다.*

*   [Google ADK Crash Course](ai_agent_framework_crash_course/google_adk_crash_course/) - 시작 에이전트, 구조화된 출력, 내장·함수·타사·MCP 도구, 메모리, 콜백, 플러그인, 멀티 에이전트 패턴. 모델에 독립적
*   [OpenAI Agents SDK Crash Course](ai_agent_framework_crash_course/openai_sdk_crash_course/) - 시작 에이전트, 함수 호출, 구조화된 출력, 도구, 메모리, 평가, 핸드오프, 군집 오케스트레이션 및 라우팅 로직

---

<div align="center">

⭐ **[저장소에 별표를 추가](https://github.com/Shubhamsaboo/awesome-llm-apps/stargazers)**하면 새 템플릿 알림을 받을 수 있습니다.

<sub>
<!-- 이 링크를 유지하세요. 번역은 README에 맞춰 자동으로 업데이트됩니다. -->
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=de">Deutsch</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=es">Español</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=fr">français</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ja">日本語</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ko">한국어</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=pt">Português</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ru">Русский</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=zh">中文</a>
</sub>

<sub>Apache-2.0 · <a href="LICENSE">LICENSE</a> 참조 · 포크하고 출시하고 판매하세요.</sub>

</div>
