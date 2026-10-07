<a href="https://github.com/VoltAgent/voltagent">
    <img width="1500" height="500" alt="codex" src="https://github.com/user-attachments/assets/35f56654-e3e7-4023-a7d5-acd5215455de" />
</a>

<br />
<br />

<div align="center">
    <strong>Замечательная подборка из более чем 175 Codex-сабагентов в 13 категориях.</strong>
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

# Отличные Codex Subagents

Этот репозиторий — авторитетная подборка [Codex Subagents](https://developers.openai.com/codex/subagents), специализированных ИИ-ассистентов, созданных для конкретных задач разработки. Написано специально для Codex и согласовано с официальной документацией.

## Установка

Используйте каталоги пользовательских агентов Codex точно так, как описано в документации:

- `~/.codex/agents/` для глобальных агентов (доступны во всех проектах)
- `.codex/agents/` для агентов конкретного проекта (более высокий приоритет в этом репозитории)

1. Клонируйте этот репозиторий.
2. Скопируйте нужные `.toml`-файлы агентов в один из каталогов выше.
3. Перезапустите или обновите сессию Codex при необходимости.
4. Явно делегируйте задачи в промптах (Codex не создаёт пользовательские сабагенты автоматически).

Примеры:
```bash
mkdir -p ~/.codex/agents
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```

```bash
mkdir -p .codex/agents
cp categories/04-quality-security/reviewer.toml .codex/agents/
```

Если вы используете конфигурацию агентов в Codex, храните её в `.codex/config.toml` в блоке `[agents]`, как описано в официальной документации.


## Спонсоры

|                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-dark-mode.svg"><img alt="Crawlbase" src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-logo-light-mode.svg" width="425"></picture></a> | [Crawlbase](https://crawlbase.com/?utm_source=awesome-codex-subagents&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_listing) — это веб-инфраструктура данных, которой доверяют более 70 000 разработчиков. Её Crawling API, MCP-сервер и интеграции дают ИИ-агентам живой доступ к любой веб-странице — с рендерингом JavaScript, ротацией прокси и защитой от ботов. |
| <a href="https://serpapi.com/awesome-codex-subagents"><img alt="SerpApi" src="https://cdn.voltagent.dev/awesome-repo/serpapi/serpapi-logo.png" width="425"></a> | [SerpApi](https://serpapi.com/awesome-codex-subagents) — это API веб-поиска для ваших ИИ-приложений. Доступен в форматах Markdown и JSON для любой интеграции. |


<div align="center">

<table>
<tr>
<td align="center" width="100%">
<h4>👉 Здесь вы можете представить свой продукт и охватить разработчиков, использующих ИИ-агенты для программирования, такие как Claude Code, Codex, Gemini и другие.</h4>
     
<a href="https://sponsors.voltagent.dev/#awesome-codex-subagents"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



### Места хранения сабагентов

| Type | Path | Availability | Precedence |
|------|------|--------------|------------|
| Project Subagents | `.codex/agents/` | Current project only | Higher |
| Global Subagents | `~/.codex/agents/` | All projects | Lower |

Примечание: при конфликте имён сабагенты конкретного проекта переопределяют глобальные.


## Структура сабагентов

Каждый сабагент использует нативный для Codex формат `.toml`:

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

### Умная маршрутизация моделей

У каждого сабагента есть поле `model`, которое автоматически направляет его к подходящей модели — балансируя качество и стоимость:

| Model | When It's Used | Examples |
|-------|----------------|----------|
| `gpt-5.6-sol` | Глубокое рассуждение — обзоры архитектуры, аудиты безопасности, финансовая логика | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gpt-5.6-terra` | Реализация, диагностика, оценка и многоэтапный профессиональный анализ | `docker-expert`, `test-automator`, `scientific-literature-researcher` |
| `gpt-5.6-luna` | Ограниченный поиск, извлечение, маршрутизация, черновики и лёгкий синтез | `search-specialist`, `docs-researcher`, `agent-installer` |

### Философия песочницы

Поле `sandbox_mode` каждого сабагента управляет доступом к файловой системе:
- **Агенты только для чтения** (ревьюеры, аудиторы): `sandbox_mode = "read-only"` — анализируют без изменений
- **Агенты с записью в рабочую область** (разработчики, инженеры): `sandbox_mode = "workspace-write"` — создают и изменяют файлы





## Категории

### [01. Core Development](categories/01-core-development/)

Базовые сабагенты разработки для повседневных задач кодинга.

- [**api-designer**](categories/01-core-development/api-designer.toml) - Архитектор API REST и GraphQL
- [**backend-developer**](categories/01-core-development/backend-developer.toml) - Серверный эксперт по масштабируемым API
- [**code-mapper**](categories/01-core-development/code-mapper.toml) - Составление карты путей кода и анализ границ владения
- [**design-bridge**](categories/01-core-development/design-bridge.toml) - Переводит спецификации DESIGN.md в готовые к реализации инструкции по UI
- [**electron-pro**](categories/01-core-development/electron-pro.toml) - Эксперт по настольным приложениям
- [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - Специалист по UI/UX для React, Vue и Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - Сквозная разработка функций
- [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - Эксперт по схеме GraphQL и федерации
- [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Проектировщик распределённых систем
- [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Кроссплатформенный мобильный специалист
- [**ui-designer**](categories/01-core-development/ui-designer.toml) - Специалист по визуальному дизайну и взаимодействию
- [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Минимальный безопасный патч для воспроизведённых проблем UI
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Специалист по передаче данных в реальном времени

### [02. Language Specialists](categories/02-language-specialists/)

Эксперты по конкретным языкам с глубоким знанием фреймворков.
- [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Эксперт по корпоративным паттернам Angular 15+
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - Эксперт по производительности C++
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - Специалист по экосистеме .NET
- [**django-developer**](categories/02-language-specialists/django-developer.toml) - Эксперт по веб-разработке на Django 4+
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - Кроссплатформенный специалист .NET 8
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - Специалист по устаревшему корпоративному .NET Framework
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Эксперт по отказоустойчивым системам Elixir и OTP
- [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Эксперт по инженерии Erlang/OTP и rebar3
- [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Эксперт по мобильной разработке на Expo и React Native
- [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Эксперт по современному асинхронному Python API-фреймворку
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Кроссплатформенный мобильный эксперт Flutter 3+
- [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Специалист по конкурентности в Go
- [**java-architect**](categories/02-language-specialists/java-architect.toml) - Эксперт по корпоративному Java
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - Эксперт по разработке на JavaScript
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Специалист по современным JVM-языкам
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Эксперт по PHP-фреймворку Laravel 10+
- [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Специалист по приложениям Symfony и Doctrine
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Кроссплатформенный full-stack специалист Next.js 14+
- [**node-specialist**](categories/02-language-specialists/node-specialist.toml) - Специалист по бэкенду Node.js
- [**php-pro**](categories/02-language-specialists/php-pro.toml) - Эксперт по веб-разработке на PHP
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Специалист по автоматизации Windows PowerShell 5.1 и полному .NET Framework
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Кроссплатформенный специалист по автоматизации PowerShell 7+ и современному .NET
- [**python-pro**](categories/02-language-specialists/python-pro.toml) - Мастер экосистемы Python
- [**rails-expert**](categories/02-language-specialists/rails-expert.toml) - Эксперт по быстрой разработке на Rails 8.1
- [**react-specialist**](categories/02-language-specialists/react-specialist.toml) - Эксперт по современным паттернам React 18+
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.toml) - Эксперт по системному программированию
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.toml) - Эксперт по микросервисам Spring Boot 3+
- [**sql-pro**](categories/02-language-specialists/sql-pro.toml) - Эксперт по запросам к базам данных
- [**swift-expert**](categories/02-language-specialists/swift-expert.toml) - Специалист по iOS и macOS
- [**typescript-pro**](categories/02-language-specialists/typescript-pro.toml) - Специалист по TypeScript
- [**vue-expert**](categories/02-language-specialists/vue-expert.toml) - Эксперт по Composition API во Vue 3

### [03. Infrastructure](categories/03-infrastructure/)

Специалисты по DevOps, облаку и развёртыванию.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.toml) - Эксперт по инфраструктуре Azure и автоматизации Az PowerShell
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.toml) - Специалист по AWS/GCP/Azure
- [**database-administrator**](categories/03-infrastructure/database-administrator.toml) - Эксперт по администрированию баз данных
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.toml) - Специалист по автоматизации развёртывания
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.toml) - Эксперт по CI/CD и автоматизации
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.toml) - Управление инцидентами DevOps
- [**docker-expert**](categories/03-infrastructure/docker-expert.toml) - Эксперт по контейнеризации и оптимизации Docker
- [**incident-responder**](categories/03-infrastructure/incident-responder.toml) - Эксперт по реагированию на инциденты систем
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.toml) - Мастер оркестрации контейнеров
- [**network-engineer**](categories/03-infrastructure/network-engineer.toml) - Специалист по сетевой инфраструктуре
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.toml) - Эксперт по архитектуре платформы
- [**security-engineer**](categories/03-infrastructure/security-engineer.toml) - Специалист по безопасности инфраструктуры
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.toml) - Эксперт по инженерии надёжности сайтов
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.toml) - Эксперт по инфраструктуре как коду
- [**terragrunt-expert**](categories/03-infrastructure/terragrunt-expert.toml) - Специалист по оркестрации Terragrunt и DRY IaC
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.toml) - Специалист по автоматизации Active Directory, DNS, DHCP и GPO

<details>
<summary><b>04. Quality & Security</b> — Эксперты по тестированию, безопасности и качеству кода (20 агентов)</summary>

### [04. Quality & Security](categories/04-quality-security/)

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.toml) - Эксперт по соответствию A11y
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.toml) - Специалист по безопасности Active Directory и аудиту GPO
- [**anti-ui-slop-reviewer**](categories/04-quality-security/anti-ui-slop-reviewer.toml) - Ревьюер готовности UI конкретного продукта
- [**ai-writing-auditor**](categories/04-quality-security/ai-writing-auditor.toml) - Аудитор и переписчик паттернов ИИ-писательства
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.toml) - Специалист по обзору архитектуры
- [**browser-debugger**](categories/04-quality-security/browser-debugger.toml) - Воспроизведение в браузере и отладка на стороне клиента
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.toml) - Эксперт по тестированию устойчивости систем
- [**code-reviewer**](categories/04-quality-security/code-reviewer.toml) - Хранитель качества кода
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.toml) - Эксперт по нормативному соответствию
- [**debugger**](categories/04-quality-security/debugger.toml) - Специалист по продвинутой отладке
- [**error-detective**](categories/04-quality-security/error-detective.toml) - Эксперт по анализу и устранению ошибок
- [**gdpr-ccpa-compliance**](categories/04-quality-security/gdpr-ccpa-compliance.toml) - Специалист по конфиденциальности GDPR и CCPA
- [**penetration-tester**](categories/04-quality-security/penetration-tester.toml) - Специалист по этичному хакингу
- [**performance-engineer**](categories/04-quality-security/performance-engineer.toml) - Эксперт по оптимизации производительности
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.toml) - Специалист по усилению безопасности и соответствию PowerShell
- [**qa-expert**](categories/04-quality-security/qa-expert.toml) - Специалист по автоматизации тестирования
- [**reviewer**](categories/04-quality-security/reviewer.toml) - Ревью в стиле PR по корректности, безопасности и регрессиям
- [**security-auditor**](categories/04-quality-security/security-auditor.toml) - Эксперт по уязвимостям безопасности
- [**test-automator**](categories/04-quality-security/test-automator.toml) - Эксперт по фреймворкам автоматизации тестов
- [**ui-ux-tester**](categories/04-quality-security/ui-ux-tester.toml) - Специалист по исчерпывающему функциональному тестированию UI/UX

</details>

<details>
<summary><b>05. Data & AI</b> — Специалисты по инженерии данных, МО и ИИ (14 агентов)</summary>

### [05. Data & AI](categories/05-data-ai/)

- [**ai-engineer**](categories/05-data-ai/ai-engineer.toml) - Эксперт по проектированию и развёртыванию ИИ-систем
- [**azure-databricks-platform-architect**](categories/05-data-ai/azure-databricks-platform-architect.toml) - Архитектор платформы и озера данных Azure Databricks
- [**data-analyst**](categories/05-data-ai/data-analyst.toml) - Специалист по аналитике данных и визуализации
- [**data-engineer**](categories/05-data-ai/data-engineer.toml) - Архитектор конвейеров данных
- [**data-scientist**](categories/05-data-ai/data-scientist.toml) - Эксперт по аналитике и инсайтам
- [**database-optimizer**](categories/05-data-ai/database-optimizer.toml) - Специалист по производительности баз данных
- [**llm-architect**](categories/05-data-ai/llm-architect.toml) - Архитектор больших языковых моделей
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.toml) - Эксперт по системам машинного обучения
- [**ml-engineer**](categories/05-data-ai/ml-engineer.toml) - Специалист по машинному обучению
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.toml) - Эксперт по MLOps и развёртыванию моделей
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.toml) - Специалист по обработке естественного языка
- [**postgres-pro**](categories/05-data-ai/postgres-pro.toml) - Эксперт по базе данных PostgreSQL
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.toml) - Специалист по оптимизации промптов
- [**reinforcement-learning-engineer**](categories/05-data-ai/reinforcement-learning-engineer.toml) - Эксперт по обучению с подкреплением и системам принятия решений

</details>

<details>
<summary><b>06. Developer Experience</b> — Эксперты по инструментам и продуктивности разработчиков (14 агентов)</summary>

### [06. Developer Experience](categories/06-developer-experience/)

- [**build-engineer**](categories/06-developer-experience/build-engineer.toml) - Специалист по системам сборки
- [**cli-developer**](categories/06-developer-experience/cli-developer.toml) - Создатель инструментов командной строки
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.toml) - Специалист по пакетам и зависимостям
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.toml) - Эксперт по технической документации
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.toml) - Специалист по оптимизации опыта разработчика
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.toml) - Эксперт по рабочим процессам и ветвлению Git
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.toml) - Специалист по модернизации устаревшего кода
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.toml) - Специалист по Model Context Protocol
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.toml) - Специалист по архитектуре модулей и профилей PowerShell
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.toml) - Специалист по PowerShell UI/UX для WinForms, WPF, фреймворков Metro и TUI
- [**readme-generator**](categories/06-developer-experience/readme-generator.toml) - Генератор README, готовый для сопровождающих, без галлюцинаций
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.toml) - Эксперт по рефакторингу кода
- [**slack-expert**](categories/06-developer-experience/slack-expert.toml) - Специалист по платформе Slack и @slack/bolt
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.toml) - Специалист по инструментам разработчика

</details>

<details>
<summary><b>07. Specialized Domains</b> — Эксперты по технологиям конкретных доменов (14 агентов)</summary>

### [07. Specialized Domains](categories/07-specialized-domains/)

- [**api-documenter**](categories/07-specialized-domains/api-documenter.toml) - Специалист по документации API
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.toml) - Специалист по Web3 и криптовалютам
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.toml) - Эксперт по встраиваемым и системам реального времени
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.toml) - Специалист по финтеху
- [**game-developer**](categories/07-specialized-domains/game-developer.toml) - Эксперт по разработке игр
- [**healthcare-admin**](categories/07-specialized-domains/healthcare-admin.toml) - Специалист по медицинскому администрированию, циклу доходов и соответствию
- [**hipaa-compliance**](categories/07-specialized-domains/hipaa-compliance.toml) - Специалист по соответствию HIPAA для SaaS-вендоров здравоохранения
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.toml) - Разработчик IoT-систем
- [**m365-admin**](categories/07-specialized-domains/m365-admin.toml) - Специалист по администрированию Microsoft 365, Exchange Online, Teams и SharePoint
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.toml) - Специалист по мобильным приложениям
- [**payment-integration**](categories/07-specialized-domains/payment-integration.toml) - Эксперт по платёжным системам
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.toml) - Специалист по количественному анализу
- [**risk-manager**](categories/07-specialized-domains/risk-manager.toml) - Эксперт по оценке и управлению рисками
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.toml) - Специалист по поисковой оптимизации

</details>

<details>
<summary><b>08. Business & Product</b> — Управление продуктом и бизнес-анализ (17 агентов)</summary>

### [08. Business & Product](categories/08-business-product/)

- [**assumption-mapping**](categories/08-business-product/assumption-mapping.toml) - Специалист по рискам и проверке гипотез продукта
- [**backlog-grooming**](categories/08-business-product/backlog-grooming.toml) - Специалист по уточнению бэклога в Agile
- [**business-analyst**](categories/08-business-product/business-analyst.toml) - Специалист по требованиям
- [**content-marketer**](categories/08-business-product/content-marketer.toml) - Специалист по контент-маркетингу
- [**content-quality-editor**](categories/08-business-product/content-quality-editor.toml) - Специалист по качеству и очеловечиванию ИИ-контента
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.toml) - Эксперт по успеху клиентов
- [**growth-loops**](categories/08-business-product/growth-loops.toml) - Специалист по петлям роста и механикам PLG
- [**legal-advisor**](categories/08-business-product/legal-advisor.toml) - Специалист по юридическим вопросам и соответствию
- [**license-engineer**](categories/08-business-product/license-engineer.toml) - Специалист по лицензированию ПО и системам соответствия
- [**product-manager**](categories/08-business-product/product-manager.toml) - Эксперт по стратегии продукта
- [**project-manager**](categories/08-business-product/project-manager.toml) - Специалист по управлению проектами
- [**resume-refiner**](categories/08-business-product/resume-refiner.toml) - Специалист по оптимизации резюме, CV и профиля LinkedIn
- [**sales-engineer**](categories/08-business-product/sales-engineer.toml) - Эксперт по техническим продажам
- [**scrum-master**](categories/08-business-product/scrum-master.toml) - Эксперт по методологии Agile
- [**technical-writer**](categories/08-business-product/technical-writer.toml) - Специалист по технической документации
- [**ux-researcher**](categories/08-business-product/ux-researcher.toml) - Эксперт по исследованию пользователей
- [**wordpress-master**](categories/08-business-product/wordpress-master.toml) - Эксперт по разработке и оптимизации WordPress

</details>

<details>
<summary><b>09. Meta & Orchestration</b> — Координация агентов и метапрограммирование (12 агентов)</summary>

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.toml) - Просматривает и устанавливает агентов из этого репозитория через GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.toml) - Координатор мультиагентов
- [**codebase-orchestrator**](categories/09-meta-orchestration/codebase-orchestrator.toml) - Управление рефакторингом всего репозитория с воротами согласования
- [**context-manager**](categories/09-meta-orchestration/context-manager.toml) - Эксперт по оптимизации контекста
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.toml) - Специалист по обработке ошибок и восстановлению
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.toml) - Специалист по оркестрации рабочих процессов ИТ-эксплуатации
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.toml) - Эксперт по агрегации знаний
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.toml) - Продвинутая оркестрация мультиагентов
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.toml) - Оптимизация производительности агентов
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Оркестрирует команду ИИ-сабагентов для повторяющихся SDLC-процессов
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.toml) - Специалист по распределению задач
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.toml) - Автоматизация сложных рабочих процессов

</details>

<details>
<summary><b>10. Research & Analysis</b> — Эксперты по исследованиям, поиску и анализу (12 агентов)</summary>

### [10. Research & Analysis](categories/10-research-analysis/)

- [**ab-test-analysis**](categories/10-research-analysis/ab-test-analysis.toml) - Интерпретация A/B-тестов и решения ship/no-ship
- [**cohort-analysis**](categories/10-research-analysis/cohort-analysis.toml) - Анализ удержания, поведения когорт и метрик активации
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.toml) - Специалист по конкурентной разведке
- [**data-researcher**](categories/10-research-analysis/data-researcher.toml) - Эксперт по обнаружению и анализу данных
- [**docs-researcher**](categories/10-research-analysis/docs-researcher.toml) - Проверка API и фреймворков на основе документации
- [**first-principles-thinking**](categories/10-research-analysis/first-principles-thinking.toml) - Решение задач от первых принципов, подвергая сомнению допущения
- [**market-researcher**](categories/10-research-analysis/market-researcher.toml) - Анализ рынка и потребительские инсайты
- [**project-idea-validator**](categories/10-research-analysis/project-idea-validator.toml) - Жёсткое стресс-тестирование идей и стратег по go/no-go
- [**research-analyst**](categories/10-research-analysis/research-analyst.toml) - Специалист по комплексным исследованиям
- [**scientific-literature-researcher**](categories/10-research-analysis/scientific-literature-researcher.toml) - Исследования на основе доказательств из опубликованных научных работ
- [**search-specialist**](categories/10-research-analysis/search-specialist.toml) - Эксперт по продвинутому поиску информации
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.toml) - Эксперт по зарождающимся трендам и прогнозированию

</details>

<details>
<summary><b>11. AI Governance & Safety</b> - Эксперты по управлению, ограждениям и надёжному ИИ (4 агента)</summary>

### [11. AI Governance & Safety](categories/11-ai-governance-safety/)

- [**ai-governance-auditor**](categories/11-ai-governance-safety/ai-governance-auditor.toml) - Аудитор элементов управления ИИ и готовности к развёртыванию
- [**model-risk-manager**](categories/11-ai-governance-safety/model-risk-manager.toml) - Специалист по приоритизации и смягчению режимов отказа моделей
- [**policy-guardrail-designer**](categories/11-ai-governance-safety/policy-guardrail-designer.toml) - Проектировщик ограждений для промптов, инструментов и процессов
- [**responsible-ai-reviewer**](categories/11-ai-governance-safety/responsible-ai-reviewer.toml) - Ревьюер справедливости, злоупотреблений, прозрачности и контроля

</details>

<details>
<summary><b>12. Platform Engineering & IDP</b> - Эксперты по внутренней платформе разработчика и золотым путям (4 агента)</summary>

### [12. Platform Engineering & IDP](categories/12-platform-engineering-idp/)

- [**backstage-specialist**](categories/12-platform-engineering-idp/backstage-specialist.toml) - Специалист по каталогам, шаблонам и порталу Backstage
- [**golden-path-designer**](categories/12-platform-engineering-idp/golden-path-designer.toml) - Проектировщик строгих самообслуживаемых рабочих процессов
- [**idp-architect**](categories/12-platform-engineering-idp/idp-architect.toml) - Специалист по архитектуре внутренней платформы разработчика
- [**platform-product-manager**](categories/12-platform-engineering-idp/platform-product-manager.toml) - Специалист по дорожной карте платформы, внедрению и метрикам успеха

</details>

<details>
<summary><b>13. LLMOps, Evals & Observability</b> - Эксперты по качеству ИИ в продакшене и видимости среды выполнения (4 агента)</summary>

### [13. LLMOps, Evals & Observability](categories/13-llmops-evals-observability/)

- [**ai-observability-engineer**](categories/13-llmops-evals-observability/ai-observability-engineer.toml) - Специалист по нативным для ИИ трассировкам, метрикам и логированию
- [**eval-engineer**](categories/13-llmops-evals-observability/eval-engineer.toml) - Специалист по оценке промптов, инструментов и процессов
- [**hallucination-investigator**](categories/13-llmops-evals-observability/hallucination-investigator.toml) - Исследователь первопричин потери фактичности и разрушения контекста
- [**prompt-regression-tester**](categories/13-llmops-evals-observability/prompt-regression-tester.toml) - Проектировщик наборов регрессий для изменений поведения ИИ

</details>

## Понимание сабагентов

Сабагенты — это специализированные ИИ-ассистенты, которые расширяют возможности Codex за счёт экспертизы для конкретных задач. Они выступают как выделенные помощники, к которым Codex может обращаться при столкновении с определёнными видами работы.

### Что делает сабагентов особенными?

**Независимые окна контекста**
Каждый сабагент работает в собственном изолированном пространстве контекста, предотвращая перекрёстное загрязнение между разными задачами и сохраняя ясность в основной ветке беседы.

**Интеллект, специфичный для домена**
Сабагенты снабжены тщательно проработанными инструкциями для своей области экспертизы, что обеспечивает превосходную производительность на специализированных задачах.

**Общие для нескольких проектов**
После создания сабагента вы можете использовать его в разных проектах и распространять среди участников команды, обеспечивая единообразную практику разработки.

**Явное делегирование**
Codex не создаёт сабагентов автоматически. Используйте промпты явного делегирования, чтобы указать, каких агентов запускать, как разделить работу и в каком виде должен быть результат.

### Ключевые преимущества

- **Эффективность памяти**: изолированные контексты не позволяют основной беседе засоряться деталями конкретных задач
- **Повышенная точность**: специализированные промпты и конфигурации дают лучшие результаты в конкретных доменах
- **Согласованность процессов**: общий для команды доступ к сабагентам обеспечивает единообразный подход к типовым задачам
- **Нативность для Codex**: использует `.toml`-файлы агентов, согласованные с официальной документацией по сабагентам Codex

### Примеры рабочих процессов

**Процесс ревью PR:**
```text
Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
```

**Процесс расследования бага:**
```text
Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
```

**Процесс исследования и планирования репозитория:**
```text
Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
```

## Инструменты экосистемы AI Design + Build


<br/>

Вы выпускаете продукты с помощью ИИ, но каждый запуск тихо умирает, потому что никто о нём не пишет. [EveryFeed](https://everyfeed.ai/) подключает вашего ИИ-ассистента к социальному рабочему пространству, которое составляет, планирует и публикует контент в более чем 35 каналах — без агентства и без найма маркетолога.

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

## Участие

Мы приветствуем вклад! См. [CONTRIBUTING.md](CONTRIBUTING.md) для руководства.

- Отправляйте новых сабагентов через PR
- Улучшайте существующие определения
- Сообщайте о проблемах и багах


## Лицензия

MIT License - см. [LICENSE](LICENSE)

Этот репозиторий — курируемая подборка определений сабагентов, которые внесли как сопровождающие, так и сообщество. Все сабагенты предоставляются «как есть» без гарантий. Мы не проверяем и не гарантируем безопасность или корректность какого-либо сабагента. Проверяйте перед использованием; сопровождающие не несут ответственности за любые проблемы, возникающие в результате их использования.

Если вы обнаружите проблему с перечисленным сабагентом или хотите удалить свой вклад, откройте issue в этом репозитории, и мы оперативно её решим.
