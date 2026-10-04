<div align="center">

# Подборка LLM-приложений

**Более 100 ИИ-агентов, навыков и RAG-приложений с открытым исходным кодом. Созданы вручную, протестированы целиком, лицензия Apache-2.0.**

Клонируйте, выпускайте, продавайте — 100% бесплатно и с открытым кодом

Работает с Claude, Gemini, GPT, DeepSeek, Llama, Qwen и другими моделями с открытым кодом.

**[Пошаговые руководства на Unwind AI](https://www.theunwindai.com) · [Быстрый старт](#-run-one-now) · [Все шаблоны](#-browse-all-templates)**


<a href="https://trendshift.io/repositories/9876" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/9876" width="220" alt="На Trendshift: репозиторий дня номер один">
</a>

<br>

</div>

<table>
  <tr>
    <td width="33.3%" align="center">
      <a href="agent_skills/project-graveyard/"><img src="docs/gallery/project-graveyard.png" alt="Project Graveyard: агент проводит вскрытие заброшенных побочных проектов"></a>
      <sub><b>Project Graveyard</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="voice_ai_agents/insurance_claim_live_agent_team/"><img src="docs/gallery/insurance-claim-live-team.png" alt="Insurance Claim Live Agent Team: голосовое урегулирование страховых случаев в реальном времени"></a>
      <sub><b>Insurance Claim Live Agent Team</b></sub>
    </td>
    <td width="33.3%" align="center">
      <a href="advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/"><img src="docs/gallery/ai-fraud-investigation.png" alt="AI Fraud Investigation Agent: перекрёстная проверка открытых записей"></a>
      <sub><b>AI Fraud Investigation Agent</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="agent_skills/self-improving-agent-skills/"><img src="docs/gallery/self-improving-agent-skills.png" alt="Self-Improving Agent Skills: навыки переписывают себя по результатам оценок"></a>
      <sub><b>Self-Improving Agent Skills</b></sub>
    </td>
    <td align="center">
      <a href="advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent"><img src="docs/gallery/ai-home-renovation.png" alt="AI Home Renovation Agent: фото на входе, фотореалистичный проект ремонта на выходе"></a>
      <sub><b>AI Home Renovation Agent</b></sub>
    </td>
    <td align="center">
      <a href="always_on_agents/always_on_hn_briefing_agent/"><img src="docs/gallery/always-on-hn-briefing.png" alt="Always-on HN Briefing Agent: читает Hacker News, пока вы спите"></a>
      <sub><b>Always-on HN Briefing Agent</b></sub>
    </td>
  </tr>
</table>

## 🙏 Спасибо спонсорам

<table align="center" cellpadding="16" cellspacing="12">
  <tr>
    <td align="center">
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" title="TinyFish">
        <img src="docs/banner/sponsors/tinyfish_community.png" alt="Программы сообщества TinyFish: присоединяйтесь к программам для студентов и амбассадоров" width="500">
      </a>
      <br>
      <a href="https://www.tinyfish.ai/ambassadors?utm_source=github&utm_medium=affiliate&utm_campaign=community-launch-marketing-2026q3&utm_term=awesomellmapps" target="_blank" rel="noopener" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        TinyFish
      </a>
    </td>
    <td align="center">
      <a href="https://sponsorunwindai.com/" title="Стать спонсором">
        <img src="docs/banner/sponsor_awesome_llm_apps.png" alt="Стать спонсором" width="500">
      </a>
      <br>
      <a href="https://sponsorunwindai.com/" style="text-decoration: none; color: #333; font-weight: bold; font-size: 18px;">
        Стать спонсором
      </a>
    </td>
  </tr>
</table>

## 🚀 Запустите прямо сейчас

Добавьте новый навык своему агенту программирования за 10 секунд:

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

Затем спросите его: *«Почему я никогда не заканчиваю свои побочные проекты?»*

Или клонируйте и запустите любого агента за 30 секунд:

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 Новые шаблоны выходят каждую неделю. [Получайте их по почте на Unwind AI](https://www.theunwindai.com).

## 📂 Все шаблоны

### 🧩 Навыки агентов

*Добавьте новые возможности агенту программирования. Установка одной командой, использование обычным языком. Каждый навык содержит настоящий код и проходит проверки безопасности и оценки в CI. Работает с Claude Code, Codex, Cursor и другими агентами. [Все навыки →](agent_skills/)*

*   [⚰️ Project Graveyard](agent_skills/project-graveyard/) - Находит все брошенные побочные проекты, объясняет причины провала и помогает завершить тот, к которому стоит вернуться
*   [👁️ First Reader](agent_skills/first-reader/) - Имитирует чтение черновика реальными читателями и сообщает, где они теряют интерес, прекращают чтение и что запоминают, не переписывая ни слова
*   [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) - Проверяет, вышел ли diff за заявленные рамки, и советует, что оставить, разделить или обосновать
*   [🏺 Commit Archaeologist](agent_skills/commit-archaeologist/) - Восстанавливает причины существования файла или фрагмента кода по исходному коммиту, последующим правкам и признакам замысла
*   [🩺 Dependency Doctor](agent_skills/dependency-doctor/) - Проверяет манифест зависимостей: фиксацию стандартной библиотеки, устаревшие бэкпорты, незакреплённые записи, дублирующиеся ограничения и удалённые версии
*   [🧠 Advisor Orchestrator Worker](agent_skills/advisor-orchestrator-worker/) - Метацикл: Claude Fable 5.1 — советник, GPT-6 Astra — оркестратор, Gemini 3.8 Flash — исполнитель
*   [🎙️ Thinking Out Loud](agent_skills/thinking-out-loud/) - Превращает голосовой поток мыслей в удобную сводку, отделяет догадки модели и отмечает перемены вашего мнения
*   [♾️ Self-Improving Agent Skills](agent_skills/self-improving-agent-skills/) - Автоматически оптимизирует навыки агентов с помощью Gemini и ADK

### 🌱 Стартовые ИИ-агенты

*Однофайловые агенты, которым нужен только ключ API — отличный старт.*

*   [🎙️ AI Blog to Podcast Agent](starter_ai_agents/ai_blog_to_podcast_agent/) - Превращает URL любого блога в озвученный подкаст
*   [❤️‍🩹 AI Breakup Recovery Agent](starter_ai_agents/ai_breakup_recovery_agent/) - Команда агентов помогает пережить эмоциональный спад после расставания
*   [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) - Задавайте вопросы на обычном языке по любым файлам CSV или Excel
*   [🩻 AI Medical Imaging Agent](starter_ai_agents/ai_medical_imaging_agent/) - Диагностический анализ рентгеновских снимков и сканов с Gemini
*   [😂 AI Meme Generator Agent (Browser)](starter_ai_agents/ai_meme_generator_agent_browseruse/) - Создаёт мемы, управляя настоящим браузером, а не API изображений
*   [🎵 AI Music Generator Agent](starter_ai_agents/ai_music_generator_agent/) - На входе запрос, на выходе трек MP3
*   [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) - Персональные планы поездок на каждый день
*   [💸 AI x402 Paying Agent](starter_ai_agents/ai_x402_paying_agent/) - Агент с кошельком оплачивает нужные данные при каждом вызове — ключи API не нужны
*   [✨ Gemini Multimodal Agent](starter_ai_agents/multimodal_ai_agent/) - Анализ видео и веб-поиск в одном агенте
*   [🔄 Mixture of Agents](starter_ai_agents/mixture_of_agents/) - Несколько LLM отвечают, один собирает лучший ответ
*   [📊 xAI Finance Agent](starter_ai_agents/xai_finance_agent/) - Анализ акций в реальном времени на базе Grok
*   [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) - Исследование тем несколькими агентами с OpenAI Agents SDK
*   [🕸️ Web Scraping AI Agent](starter_ai_agents/web_scraping_ai_agent/) - Опишите, что нужно извлечь, — агент соберёт данные

### 🚀 Продвинутые ИИ-агенты

*Производственные агенты с инструментами, памятью и многоэтапными рассуждениями.*

*   [🏚️ 🍌 AI Home Renovation Agent with Nano Banana Pro](advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent) - Фото вашего помещения на входе, план ремонта и фотореалистичные изображения на выходе
*   [🧠 DevPulse AI - Multi-Agent Signal Intelligence](advanced_ai_agents/multi_agent_apps/devpulse_ai/) - Собирает и оценивает технические сигналы в ежедневной сводке
*   [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) - Комплексное веб-исследование с OpenAI Agents SDK и Firecrawl
*   [📊 AI VC Due Diligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team) - Мультиагентный анализ инвестиций в стартапы с Gemini 3
*   [🔬 AI Research Planner & Executor (Google Interactions API)](advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api) - Многоэтапное исследование, диалоги с сохранением состояния и автоматически созданная инфографика
*   [🤝 AI Consultant Agent](advanced_ai_agents/single_agent_apps/ai_consultant_agent) - Анализ рынка и стратегические рекомендации на основе веб-исследований в реальном времени
*   [🏗️ AI System Architect Agent](advanced_ai_agents/single_agent_apps/ai_system_architect_r1/) - Архитектурный анализ с рассуждениями DeepSeek R1 и Claude
*   [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) - Персональный анализ бюджета, долгов и сбережений
*   [🎬 AI Movie Production Agent](advanced_ai_agents/single_agent_apps/ai_movie_production_agent/) - Черновики сценариев и идеи кастинга по однострочной задумке фильма
*   [📈 AI Investment Agent](advanced_ai_agents/single_agent_apps/ai_investment_agent/) - Сравнительные отчёты по акциям на основе данных Yahoo Finance
*   [📡 Earnings Call Analyst Agent](advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/) - Превращает отчёты о доходах на YouTube в рабочее пространство, синхронизированное с воспроизведением
*   [🏋️‍♂️ AI Health & Fitness Agent](advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/) - Планы питания и тренировок с учётом ваших целей
*   [🚀 AI Product Launch Intelligence Agent](advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent) - Аналитика выхода на рынок по запускам конкурентов
*   [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) - Сопоставляет открытые записи и выявляет учреждения с несоответствиями
*   [🗞️ AI Journalist Agent](advanced_ai_agents/single_agent_apps/ai_journalist_agent/) - Исследует, пишет и редактирует статьи на любые темы
*   [🧠 AI Mental Wellbeing Agent](advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/) - Скоординированная команда агентов для планов поддержки психического здоровья
*   [📑 AI Meeting Agent](advanced_ai_agents/single_agent_apps/ai_meeting_agent/) - Контекст, отраслевые сведения и стратегические справки перед встречей
*   [🧬 AI Self-Evolving Agent](advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/) - Агенты переписывают собственные рабочие процессы с помощью EvoAgentX
*   [👨🏻‍💼 AI Sales Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team) - Создаёт конкурентные памятки для продаж в реальном времени
*   [🎧 AI Social Media News and Podcast Agent](advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/) - Собирает доверенные источники в сводки и созданные подкасты
*   [🌐 Openwork - Open Browser Automation Agent](https://github.com/accomplish-ai/coworker) <sub>↗ внешняя ссылка</sub> - Открытый агент, работающий с настоящим браузером
*   [🛡️ Trust-Gated Multi-Agent Research Team](advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/) - Каждый агент проверен, каждое действие записано в аудиторский журнал с цепочкой хешей

### 🛰️ Постоянно работающие агенты

*Фоновые агенты запускаются по расписанию или событиям, отслеживают меняющийся контекст, определяют важное и заранее предоставляют обновления, результаты или действия.*

*   [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) - Плановый разведчик отправляет ранжированную ежедневную сводку в Slack или по почте
*   [📡 Release Radar Agent](always_on_agents/release_radar_agent/) - Следит за выпусками зависимостей и сообщает о несовместимых, устаревших, связанных с безопасностью и крупных изменениях

### 🤝 Мультиагентные команды

*Несколько агентов совместно выполняют сложные междисциплинарные задачи.*

*   [🧲 AI Competitor Intelligence Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/) - Структурированный анализ конкурентов по их собственным сайтам
*   [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) - Команда финансовых аналитиков в 20 строках Python
*   [🎨 AI Game Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/) - Полноценные игровые концепции от команды специалистов по дизайну
*   [🧭 AG2 Adaptive Research Team](advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/) - Совместная работа агентов с маршрутизацией и резервным вариантом на базе AG2
*   [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) - Исследования, анализ контрактов и стратегия силами полной юридической команды
*   [💼 AI Recruitment Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/) - Полный цикл — от отбора резюме до назначения собеседований
*   [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) - Поиск недвижимости, анализ рынка и рекомендации
*   [👨‍💼 AI Services Agency (CrewAI)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/) - Цифровое агентство определяет объём и планирует ваш программный проект
*   [👨‍🏫 AI Teaching Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/) - Команда агентов-преподавателей строит полный учебный маршрут
*   [💻 Multimodal Coding Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/) - Сфотографируйте задачу по программированию и получите решение в песочнице
*   [✨ Multimodal Design Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/) - Разборы дизайна экспертной группой на базе Gemini
*   [🎨 🍌 Multimodal UI/UX Feedback Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/) - Отзывы о лендинге и автоматически созданная улучшенная версия
*   [🌏 AI Travel Planner Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/) - Полный план поездки, составленный командой
*   [⚖️ LLM Panel Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/llm_panel_agent_team/) - Три поставщика вслепую проверяют один diff, а затем анонимно спорят

### 🗣️ Голосовые ИИ-агенты

*Агенты с голосовым вводом и выводом через API реального времени.*

*   [🗣️ AI Audio Tour Agent](voice_ai_agents/ai_audio_tour_agent/) - Самостоятельные аудиоэкскурсии с учётом места, интересов и темпа
*   [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) - Голосовые ответы на основе ваших документов
*   [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) - Приём страховых заявлений голосом с Gemini 3.8 Live: записи с места, осмотр повреждений через веб-камеру и схема происшествия
*   [🔊 Voice RAG Agent (OpenAI SDK)](voice_ai_agents/voice_rag_openaisdk/) - Задавайте вопросы PDF и слушайте ответы
*   [🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)](https://github.com/akshayaggarwal99/jarvis-ai-assistant) <sub>↗ внешняя ссылка</sub> - Открытый диктофон печатает там, где вы говорите

### 🖼️ Генеративный UI и агентные интерфейсы

*Агенты отображают интерактивные элементы интерфейса, а не только текст: формы, карточки, графики и изменяемые планы.*

*   [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) - Канбан-доска с управлением через чат для совместной работы с агентом
*   [🪙 AI Financial Coach Agent](generative_ui_agents/ai-financial-coach-agent/) - Планы бюджета, сбережений и погашения долгов в виде интерактивных карточек
*   [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) - Опишите панель в чате — графики соберутся на интерактивном холсте
*   [🛠️ AI MCP App Builder](generative_ui_agents/ai-mcp-app-builder/) - Опишите приложение MCP и получите готовый изолированный экземпляр
*   [✈️ MCP Apps Generative UI Showcase](generative_ui_agents/mcp-apps-generative-ui-showcase/) - Приложения MCP с настоящим интерактивным интерфейсом, включая поиск авиабилетов
*   [🎛️ AI Shadcn Component Generator](generative_ui_agents/ai-shadcn-component-generator/) - Создавайте готовые к production-компоненты shadcn в чате
*   [🔍 AI Deep Research Agent](generative_ui_agents/ai-deep-research-agent/) - Исследование, где каждый вызов инструмента отображается карточкой рабочего пространства

### 🎮 Автономные игровые агенты

*Агенты проходят игру целиком: рассуждают, выбирают стратегию и действуют.*

*   [🎮 AI 3D Pygame Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/) - DeepSeek R1 пишет код PyGame, а браузерные агенты запускают его в реальном времени
*   [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) - Агент Белых против агента Чёрных с проверенными ходами
*   [🎲 AI Tic-Tac-Toe Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/) - Две разные LLM сражаются ход за ходом

### ♾️ ИИ-агенты MCP

*Агенты подключаются к внешним инструментам и данным через Model Context Protocol.*

*   [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) - Управляйте настоящим браузером естественным языком через MCP
*   [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) - Изучайте и анализируйте любые репозитории обычным языком
*   [📑 Notion MCP Agent](mcp_ai_agents/notion_mcp_agent) - Общайтесь со страницами Notion из терминала
*   [🌍 AI Travel Planner MCP Agent](mcp_ai_agents/ai_travel_planner_mcp_agent_team) - Маршруты на основе актуальных данных Airbnb и Google Maps
*   [🔀 Multi-MCP Agent Router](mcp_ai_agents/multi_mcp_agent_router/) - Специализированные агенты, каждый подключён к собственному серверу MCP
*   [🔌 OpenAI Remote MCP Tool Bridge](mcp_ai_agents/openai_remote_mcp_bridge/) - Подключайте вызовы функций OpenAI напрямую к удалённому серверу MCP

### 📀 RAG (генерация с дополненной выборкой)

*Конвейеры поиска: от простых цепочек до агентных систем и множества источников.*

*   [🔥 Agentic RAG with Embedding Gemma](rag_tutorials/agentic_rag_embedding_gemma) - Полностью локальный агентный RAG на EmbeddingGemma и Llama 3.2
*   [🧐 Agentic RAG with Reasoning](rag_tutorials/agentic_rag_with_reasoning/) - Наблюдайте за пошаговыми рассуждениями агента во время поиска
*   [📰 AI Blog Search (RAG)](rag_tutorials/ai_blog_search/) - Агентный поиск по блогам на базе LangGraph
*   [🔍 Autonomous RAG](rag_tutorials/autonomous_rag/) - GPT-4o отвечает по вашим PDF и при необходимости переключается на веб-поиск
*   [🔄 Contextual AI RAG Agent](rag_tutorials/contextualai_rag_agent/) - Управляемый RAG: от хранилища данных до обоснованного чата за минуты
*   [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) - Поиск оценивает себя и повторяет попытку перед ответом
*   [📎 Typed Agentic RAG with Pydantic AI](rag_tutorials/agentic_typed_rag_pydanticai/) - Проверенные ответы с точными цитатами или отказ при слабых доказательствах
*   [🐋 Deepseek Local RAG Agent](rag_tutorials/deepseek_local_rag_agent/) - Локальные рассуждения DeepSeek по вашим документам
*   [🤔 Gemini Agentic RAG](rag_tutorials/gemini_agentic_rag/) - Переформулирование запросов и веб-поиск Gemini Flash Thinking в качестве запасного варианта
*   [👀 Hybrid Search RAG (Cloud)](rag_tutorials/hybrid_search_rag/) - Поиск по ключевым словам и векторам для Claude
*   [🔄 Llama 3.1 Local RAG](rag_tutorials/llama3.1_local_rag/) - Общайтесь с любой веб-страницей полностью офлайн
*   [🖥️ Local Hybrid Search RAG](rag_tutorials/local_hybrid_search_rag/) - Гибридный поиск, полностью работающий на вашем компьютере
*   [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) - Ответы с цитатами по тексту, PDF, изображениям, аудио и видео
*   [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) - Llama 3.2 и Qdrant, ключи API не нужны
*   [🧩 RAG-as-a-Service](rag_tutorials/rag-as-a-service/) - Готовый к production-сервис RAG менее чем в 50 строках
*   [✨ RAG Agent with Cohere](rag_tutorials/rag_agent_cohere/) - Поиск Command R7B с переходом к веб-поиску при необходимости
*   [⛓️ Basic RAG Chain](rag_tutorials/rag_chain/) - Минимальный поисковый конвейер для фармацевтических исследований
*   [📠 RAG with Database Routing](rag_tutorials/rag_database_routing/) - Автоматически направляет каждый вопрос в подходящую базу данных
*   [🖼️ Vision RAG](rag_tutorials/vision_rag/) - Задавайте вопросы по изображениям и страницам PDF с Embed-4
*   [🩺 RAG Failure Diagnostics Clinic](rag_tutorials/rag_failure_diagnostics_clinic/) - Системно выясняйте, почему ваш конвейер RAG работает неверно
*   [🕸️ Knowledge Graph RAG with Citations](rag_tutorials/knowledge_graph_rag_citations/) - Ответы с несколькими переходами и проверяемой атрибуцией источников

### 🔎 ИИ-инструменты для браузера

*Небольшие инструменты, добавляющие ИИ в повседневный веб-сёрфинг.*

*   [🪡 Needle - A New Way to Find](advanced_llm_apps/needle/) - Ищет веб-страницы по смыслу и выделяет самое убедительное исходное предложение с расширением Chrome на TypeSafe Jev
*   [🌀 Ripple - Change One Thing, Find What Else Needs to Change](advanced_llm_apps/ripple/) - Находит связанные несоответствия и предлагает исправления при редактировании Google Docs с TypeSafe Jev и Gemini

### 💾 LLM-приложения с памятью

*Агенты и чат-боты помнят разговоры и состояние пользователя между сеансами.*

*   [💾 AI ArXiv Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/) - Поиск статей, запоминающий ваши научные интересы
*   [🛩️ AI Travel Agent with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/) - Помощник путешественника, запоминающий ваши предпочтения
*   [💬 Llama3 Stateful Chat](advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/) - Чат с Llama 3, сохраняющий состояние между сеансами
*   [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) - Чат-бот сохраняет контекст между разговорами
*   [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) - Полностью локально, с личной памятью для каждого пользователя
*   [🧠 Multi-LLM Application with Shared Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/multi_llm_memory/) - Разные модели, общая память диалога

### 💬 Чат с чем угодно

*Превратите любой источник данных в интерфейс чата.*

*   [💬 Chat with GitHub (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_github/) - Ответы по любому репозиторию с помощью 30 строк RAG
*   [📨 Chat with Gmail](advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/) - Задавайте вопросы почтовому ящику
*   [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) - Классический вариант на 30 строках Python
*   [📚 Chat with Research Papers (ArXiv) (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/) - Изучайте arXiv в диалоге с GPT-4o
*   [📝 Chat with Substack](advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/) - Общайтесь с архивом любой рассылки Substack
*   [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) - Задавайте вопросы по видео через их расшифровки

### 🎯 Инструменты оптимизации LLM

*Сократите расход токенов, размер контекста и стоимость API без потери качества.*

*   [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) - Снижает расходы на API LLM на 30–60% с помощью формата TOON
*   [🧠 Headroom Context Optimization](advanced_llm_apps/llm_optimization_tools/headroom_context_optimization/) - Снижает расходы на API LLM на 50–90%

### 🔧 Дообучение LLM

*Полные рецепты дообучения моделей с открытым кодом.*

*   [🦥 Gemma 3 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/gemma3_finetuning/) - 4-битный LoRA с Unsloth: компактно и понятно
*   [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) - Дообучение за 30 строк, бесплатно в Colab

### 🧑‍🏫 Экспресс-курсы по фреймворкам ИИ-агентов

*Подробные руководства по основным фреймворкам агентов.*

*   [Google ADK Crash Course](ai_agent_framework_crash_course/google_adk_crash_course/) - Стартовый агент, структурированные результаты, встроенные, функциональные, сторонние инструменты и MCP, память, обратные вызовы, плагины и мультиагентные шаблоны. Не зависит от модели.
*   [OpenAI Agents SDK Crash Course](ai_agent_framework_crash_course/openai_sdk_crash_course/) - Стартовый агент, вызов функций, структурированные результаты, инструменты, память, оценка, передача задач, оркестрация роя и логика маршрутизации

---

<div align="center">

⭐ **[Поставьте звезду репозиторию](https://github.com/Shubhamsaboo/awesome-llm-apps/stargazers)**, чтобы получать уведомления о новых шаблонах.

<sub>
<!-- Сохраните эти ссылки. Переводы будут автоматически обновляться вместе с README. -->
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=de">Deutsch</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=es">Español</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=fr">français</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ja">日本語</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ko">한국어</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=pt">Português</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=ru">Русский</a> ·
<a href="https://www.readme-i18n.com/Shubhamsaboo/awesome-llm-apps?lang=zh">中文</a>
</sub>

<sub>Apache-2.0 · См. <a href="LICENSE">LICENSE</a> · Форкайте, выпускайте, продавайте.</sub>

</div>
