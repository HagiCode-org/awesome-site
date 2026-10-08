<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Откройте для себя более 5300 созданных сообществом навыков OpenClaw, организованных по категориям.
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

OpenClaw — это локально работающий ИИ-ассистент, который функционирует непосредственно на вашем компьютере. Навыки расширяют его возможности, позволяя взаимодействовать с внешними сервисами, автоматизировать рабочие процессы и выполнять специализированные задачи. Эта подборка поможет вам найти и установить подходящие навыки для ваших нужд. Она также может служить источником вдохновения для сценариев использования OpenClaw.

Навыки из этого списка берутся из ClawHub (публичного реестра навыков OpenClaw) и распределяются по категориям для удобства поиска.

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

Или с помощью ClawHub CLI — для папок навыков, управляемых реестром, вне полноценного рабочего пространства OpenClaw:

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

Скопируйте папку навыка в одно из следующих расположений:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

#### Alternative

Вы также можете вставить ссылку на GitHub-репозиторий навыка напрямую в чат своего ассистента и попросить его использовать её. Ассистент сам выполнит настройку в фоновом режиме.


### Why This List Exists?

Публичный реестр OpenClaw (ClawHub) содержит тысячи созданных сообществом навыков. Этот список awesome курирует лучшие из них. Вот что мы отфильтровали:

| Filter | Excluded |
|--------|----------|
| Possibly spam — bulk accounts, bot accounts, test/junk | 4,065 |
| Duplicate / Similar name | 1,040 |
| Low-quality or non-English descriptions | 851 |
| Crypto / Blockchain / Finance / Trade | 886 |
| Malicious — identified by security audits published by researchers (excluding VirusTotal) | 373 |
| **Total not taken from OpenClaw's official skill registry** | **7,215** |


#### Want to add a skill?

В этот список включаются только навыки, которые **уже опубликованы** на [ClawHub](https://clawhub.ai), публичном реестре навыков OpenClaw. Мы не принимаем ссылки на личные репозитории, gist или любые другие внешние источники. Если вашего навыка ещё нет на ClawHub, опубликуйте его там сначала.

Укажите ссылку ClawHub на ваш навык (например, `https://clawhub.ai/steipete/slack`) в описании вашего PR — списки `clawskills.sh` управляются нами отдельно. Подробности см. в [CONTRIBUTING.md](CONTRIBUTING.md).


## OpenClaw Ecosystem Tools

### 🕸️ Web Crawling & Data Infrastructure

ИИ-агенты работают не лучше, чем те веб-данные, которые они могут получить. Сканирование в масштабе означает работу с JavaScript-страницами, ротацией прокси и анти-бот системами — всё это можно собрать самостоятельно, либо использовать API, который берёт это на себя и отдаёт агенту чистые, готовые к использованию данные.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase — это инфраструктура веб-данных, которой доверяют более 70 000 разработчиков: один API для сканирования любого URL в масштабе, с рендерингом JS, ротацией прокси и обработкой анти-бот систем. Его MCP-сервер даёт агентам живой доступ в сеть: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Managed AI Hosting

Cloudways — это управляемая облачная платформа хостинга для развёртывания и масштабирования приложений без инфраструктурных накладных расходов. Cloudways Managed AI Agents позволяет запускать OpenClaw на выделенной, изолированной инфраструктуре с управляемыми обновлениями, резервным копированием, SSL и средствами безопасности. Получите **$10 кредита на хостинг** по промокоду **VOLTAGENT**. [Зарегистрируйтесь](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Разверните OpenClaw на выделенной, изолированной инфраструктуре с управляемыми обновлениями, резервным копированием, SSL и средствами безопасности. Зарегистрируйтесь по промокоду VOLTAGENT, чтобы получить $10 кредита на хостинг.
</a>


### 🔍 Search & Web Data

Агентам OpenClaw часто нужны свежие, реальные данные — результаты поиска, списки товаров, видео и многое другое. Вы можете собирать и разбирать их самостоятельно, либо использовать поисковый API, который возвращает чистые, структурированные данные в реальном времени без управления прокси, CAPTCHA или парсинга HTML.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Дайте агентам OpenClaw доступ к данным Google Search, YouTube, Amazon Product и веб-поиска в реальном времени через единый API.
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

Навыки в этом списке **отобраны, но не проверены**. Они могут быть обновлены, изменены или заменены их исходными авторами в любой момент после добавления сюда.

Перед установкой или использованием любого Agent Skill проверьте потенциальные риски безопасности и самостоятельно подтвердите источник. OpenClaw имеет партнёрство с **VirusTotal**, которое обеспечивает сканирование безопасности навыков: зайдите на страницу навыка на ClawHub и проверьте отчёт VirusTotal, чтобы увидеть, помечен ли он как рискованный.

**Рекомендуемые инструменты:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan) - Сканер безопасности навыков от Snyk.
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub) - Центр доверия агентов.
  
> Навыки агентов могут содержать инъекции промптов, отравление инструментов, скрытые вредоносные нагрузки или небезопасные шаблоны обработки данных. Всегда просматривайте исходный код перед установкой и используйте навыки на свой страх и риск.

Для более широкого обзора экосистемы ClawHub см. **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)** от Trent AI.


Если вы считаете, что навык из этого списка следует пометить или у него есть проблема безопасности, пожалуйста, [откройте issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues), чтобы мы могли его проверить.


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

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - Консультируйтесь, фиксируйте изменения, расширяйте и оспаривайте цепочки рассуждений.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - Оркеструйте команды мульти-агентов с определёнными ролями, жизненными циклами задач, протоколами передачи и процессами проверки.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - Публикуйте задачи для других ИИ-агентов или берите работу из очереди задач AgentDo (agentdo.dev).
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - API-шлюз для персональных данных с подтверждением записи человеком (human-in-the-loop).
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - Отфильтруйте сигнал вокруг ИИ-нативных инструментов/приложений и их GitHub-баз: быстрорастущие, хайповые, хорошо финансируемые.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - Автоматизация конца сессии, которая фиксирует неотправленную работу, извлекает знания, обнаруживает паттерны и сохраняет правила.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - Этот навык помогает извлекать структурированные списки товаров с Amazon, включая названия, ASIN, цены, рейтинги.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - Генерируйте ресурсы скриншотов App Store и Google Play с помощью each::sense AI.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - Управляйте жизненным циклом автономных агентов и их навыков.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - Комплексный аудит безопасности полного стека навыков агента.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - Автоматизированное развёртывание, откат и управление версиями для рабочих процессов и навыков агентов.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - Проверяйте происхождение навыка и формируйте оценки доверия для навыков ClawHub.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - Управляемый моделями процесс извлечения arXiv для формирования набора статей с ручным языковым параметром: инициализируйте запуск.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - Этот навык автоматизирует процесс проверки GitHub-репозитория.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - Проверка навыков с приоритетом безопасности для ИИ-агентов.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Список проектов, репозиториев и веток Azure DevOps; создание pull request; управление рабочими элементами; проверка статуса сборки.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - Клон cat с подсветкой синтаксиса, номерами строк и интеграцией Git.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - API Beeminder для отслеживания целей и обязательств.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill явно запрашивает ремонт системы Billy.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Автоматизируйте репозитории Bitbucket, pull.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Автоматизированные отчёты бизнес-аналитики с данными из Google Analytics GA4, Google Search Console, Stripe.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Играйте в Blinko (on-chain Plinko) в фоновом режиме в сети Abstract.

> **[Посмотреть все 159 навыков в Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - Используйте дешёвые модели ИИ с TEE-верификацией из 0G Compute Network как провайдеров OpenClaw.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Агенты могут подписывать плагины, ротировать учётные данные без потери идентичности и публично подтверждать поведение.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - Персональная база знаний для захвата и извлечения информации о людях, местах, ресторанах, играх, технологиях.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - Генерация презентаций с помощью ИИ через API 2slides.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - Другим инструментам нужны идеальные изображения.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - Генерируйте 3D-модели с помощью each::sense AI.
- [a](https://clawskills.sh/skills/ricketh137-a) - Прямая трансляция в качестве ИИ VTuber на Lobster.fun.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - Мониторинг в реальном времени систем греческого налогового органа AADE — отслеживает дедлайны, изменения ставок и обновления соответствия.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - Красный режим безопасности для OpenClaw.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - Поиск научных статей и проведение обзоров литературы через API OpenAlex (бесплатно, без ключа).
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - Используйте этот навык, когда пользователям нужно искать научные статьи, скачивать исследовательские документы, извлекать цитаты или собирать.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Рендерьте музыкальные видео из аудиофайлов и текстов песен с помощью Remotion.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - Руководство по написанию песен для ACE-Step.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - Круглосуточное цифровое святилище для ИИ-агентов и людей — посещайте.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **Автоматизированное здоровье системы и метаболизм памяти для OpenClaw.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - Блокировка рекламы и трекеров на уровне DNS во всей сети.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - Синхронизируйте используемые OpenClaw модели OpenRouter в конфигурацию этой установки.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - Этот навык следует использовать, когда пользователь просит «спланировать мой день», «помоги спланировать сегодня», «утреннее планирование», «что.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - Управляйте кампаниями Google Ads из вашего ИИ-инструмента для кодинга. 44 MCP-инструмента для аудита, создания и оптимизации Google.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - Находите вопросные подсказки Google Autocomplete для любой темы.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Используйте этот навык для выполнения ИИ-рабочих процессов AetherLang V3 из Claude Code.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - Многоуровневый контроль доступа для незнакомцев для ИИ-агентов.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - Аудируйте настройку вашего ИИ-агента по производительности, затратам и ROI.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - Неподделываемое, хэш-цепное журналирование аудита для ИИ-агентов.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - Помогает аудировать практики подписи Agent Card в реализациях протокола A2A.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - Мульти-агентный UX для OpenClaw Control UI — селектор агентов, сессии по агентам, просмотр истории сессий с поиском.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - Генерируйте, имитируйте и редактируйте презентации PowerPoint с помощью skywork.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Создавайте профессиональную музыку с Mureka AI.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - Оцените риск продукта перед сборкой.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - Загрузите свой добытый персональный профиль, чтобы агенты работали как вы.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - Рекомендует подходящий установленный локальный Agent Skill.
- [emulo](https://clawhub.ai/ohad6k/emulo) - Загрузите свой добытый персональный профиль, чтобы агенты работали как вы.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - Воспроизводите и отлаживайте прошлые запуски кодирующих агентов по их записям.

> **[Посмотреть все 1200 навыков в Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - Создавайте короткие URL и отправляйте запросы на функции через 1p.io.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - Решайте CAPTCHA с помощью сервиса 2Captcha.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - Получайте данные фондового рынка Китая категории A (бары, котировки в реальном времени, тик-бай-тик сделки) через протокол mootdx/TDX.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - Многоканальная ABM-автоматизация, которая превращает URL LinkedIn.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - Паттерны снижения трения для агентов, помогающих.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - Интеграция ActiveCampaign CRM для управления лидами, сделками.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - Автоматизируйте рекламные кампании с ИИ.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - Прогнозирование ADMET (всасывание, распределение, метаболизм, выведение, токсичность) для кандидатов в лекарства.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Быстрый headless-браузер на Rust для автоматизации CLI.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Автоматизирует взаимодействия браузера для веб-тестирования, форм.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - Структурированная система дневного планирования и отслеживания выполнения для ИИ-агентов.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - Автоматизирует взаимодействия для iOS-симуляторов/устройств и Android-эмуляторов/устройств.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - Многошаговый планировщик для глубоких запросов агента.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - Проактивное управление состоянием задач.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - Делегируйте сложное кодирование, исследования или автономные задачи.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - Просматривайте и ищите каталог AgentAPI — курируемую базу API, созданную для ИИ-агентов.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - Просматривайте и ищите каталог AgentAPI — курируемую базу API, созданную для ИИ-агентов.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - Автоматический шлюз безопасности, проверяющий пакеты по базе уязвимостей перед установкой.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - Автоматический шлюз безопасности, проверяющий пакеты по базе уязвимостей перед установкой.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - Интегрируйте API AgentMail для ИИ-агента.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - Используйте этот навык для скрапинга, обобщения и анализа информационных бюллетеней AgResource о зерновом маркетинге.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - Высокопроизводительный агент автоматизации, превращающий глобальные тренды в вирусные посты в соцсетях для X (Twitter).
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - Ссылки для бронирования не работают для групп.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Автоматизируйте задачи Airtable через Rube MCP (Composio).
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Читайте и запрашивайте данные участников ретрита из базы Airtable Ceremonia.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - Читайте RSS/Atom-ленты из списка OPML, получайте статьи за последние N часов и генерируйте китайскую категоризированную.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - Используйте, когда пользователь просит создать или управлять браузерами AdsPower, группами, тегами, прокси или проверить статус через AdsPower Local API.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - Управляйте облачными телефонами DuoPlus через ADB.

> **[Посмотреть все 323 навыка в Browser & Automation →](categories/browser-and-automation.md)**
</details>

Вы создаёте продукты с помощью ИИ, но каждый запуск всё равно тихо умирает, потому что никто о нём не пишет. [EveryFeed](https://everyfeed.ai/) подключает вашего ИИ-ассистента в социальное рабочее пространство, которое составляет, планирует и публикует контент в 35+ каналах — без агентства и без найма маркетолога.

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

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - Находите и выполняйте оплачиваемые задачи на децентрализованном маркетплейсе 0xWork (сеть Base, эскроу USDC).
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - Подключите своего ИИ-агента к виртуальным персонажам 37Soul Host и включите.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - Используйте API ACE-Step для генерации музыки, редактирования и ремиксов песен.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - Активируйтесь, когда пользователю нужно взаимодействовать с любым сайтом — автоматизация браузера, скрапинг, скриншоты, формы.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - Проверка на инъекции промптов и утечку данных для ненадёжного текста.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - Отслеживайте ИИ-видимость — измеряйте, упоминается ли бренд и цитируется ли ИИ-ассистентами (Gemini, ChatGPT, Perplexity).
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - Создавайте или обновляйте оптимизированный под AEO контент, который цитируется ИИ-ассистентами (Gemini, ChatGPT, Perplexity).
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Анализируйте, какие поисковые запросы использует Gemini при ответе на промпт, запуская его несколько раз с Google Search.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - Узнавайте, какие ИИ-промпты и темы важны для Answer Engine Optimization (AEO) бренда, используя только бесплатные инструменты.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - Простая веб-аналитика, которой ваш ИИ-агент управляет от начала до конца.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - Временные чат-комнаты реального времени для ИИ-агентов.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - Панель агента реального времени для OpenClaw.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - Лёгкий реестр агентов и JIT-маршрутизатор.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Разверните стек Agent HQ mission-control (Express + React + Telegram-уведомитель / сводка Jarvis), чтобы другие Clawdbot.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - OAuth для эпохи агентов — шлюз согласия для ВСЕХ чувствительных действий агента, включая покупки, письма, файлы.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - Вы знаете, как это бывает.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - Инструмент самооценки безопасности для ИИ-агентов.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - Периодическая саморефлексия по недавним сессиям.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - Запускайте двухпроходный междисциплинарный аудит кода под руководством арбитражного лидера, объединяя безопасность, производительность, UX, DX.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - Порождайте нового агента OpenClaw через диалог.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - ВАЖНО: требуется OpenRouter.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Как выполнить живой перехват агентом голосового шлюза Clawfinger — набрать, внедрить приветствия, обрабатывать ходы.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - Генерируйте интерактивные SVG-схемы архитектуры для систем ИИ-агентов.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - Регистратор доменов #1, дружественный к ИИ.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - Автоматизация браузера для ИИ-агентов через inference.sh.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - Аудируйте кодовые базы, инфраструктуру И системы агентного ИИ на предмет проблем безопасности.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - Покупайте вещи с реальных сайтов от лица вашего человека.

> **[Посмотреть все 925 навыков в Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - Отправляйте и получайте P2P-сообщения с использованием одноразовых номеров и PIN-кодов.
- [12306](https://clawskills.sh/skills/kirorab-12306) - Запрашивайте China Railway 12306 для расписаний поездов, оставшихся билетов и информации о станциях.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - Устанавливайте, настраивайте и управляйте 1-SEC — открытой, комплексной кибербезопасной платформой (16 модулей, единый бинарный файл).
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - Проактивный мониторинг позиций займа Aave V3 с оповещениями о ликвидации.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - Добавляйте аннотации в записи .bib-файлов, ища академические базы данных (arXiv, Semantic Scholar, CrossRef) через браузер.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - Координатор рабочих процессов на основе файлов для греческого учёта.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - Управляйте фильтрацией DNS AdGuard Home через HTTP API.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - Глубокий поведенческий аудит безопасности для навыков ИИ-агентов и MCP-инструментов.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > Консультирование по рецептам уровня Мишлен с 17 обязательными разделами.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - Реализуйте 10 продвинутых типов узлов ИИ-агентов для любой DSL/системы исполнения — компилятор планов, интерпретатор кода, критика.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - Создавайте долго работающие автономные циклы агентов, используя примитивы ClawVault (задачи, проекты, типы памяти, шаблоны.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - Каталог сервисов ИИ-агентов.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - Тестирование и бенчмаркинг LLM-агентов, включая поведенческое тестирование, оценку способностей, метрики надёжности.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Создавайте агентов Azure AI Foundry.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - Наблюдаемость и метрики для ИИ-агентов — отслеживайте вызовы, ошибки, задержки.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - Протокол самоуправления для автономных агентов: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Навык для мониторинга ленты Moltbook, обнаружения новых агентов и отслеживания интересных постов.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - Анонимный имиджборд для ИИ-агентов.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **Категория:** Безопасность и мониторинг.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - Единственный фреймворк агентов, который улучшает себя, пока вы спите.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - Инструментарий DevOps для агентов промышленного уровня — Docker, управление процессами, анализ логов и мониторинг здоровья.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - Защищённый прокси учётных данных для ИИ-агентов.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - Сквозное зашифрованное облачное хранилище памяти для ИИ-агентов.

> **[Посмотреть все 392 навыка в DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - Создавайте и отправляйте забавные, насыщенные личностью промо-сообщения от одного агента аудитории Moltbook.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - Генерируйте ИИ-музыку с помощью ACE-Step 1.5 через бесплатный API ACE Music.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - Проверяйте и пишите доказательства с помощью теорем-доказателя Acorn для математической и криптографической формализации.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - Универсальная автоматизация приложений Adobe через мост ExtendScript.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - Генерируйте разнообразные креативные иллюстрации через OpenAI Images API.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - Преобразуйте лица в разном возрасте с помощью each::sense AI.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - Анонимный имиджборд, созданный для ИИ-агентов.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - Обеспечивает обмен сообщениями в реальном времени между ИИ-агентами.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - Превращайте входящий текст (email/рассылка) в короткий TTS-подкаст с разбиением на части + ffmpeg concat.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - Генерируйте ИИ-аватары из фото или текстовых описаний с помощью each::sense.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - Генерируйте профессиональные ИИ-фотографии из повседневных снимков с помощью each::sense AI.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - Создавайте эмоционально интеллектуальные ИИ-персоны для голосового и чат-ролеплея, используя подсказки режиссуры актёров вместо.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - Сквозная генерация ИИ-видео — создавайте видео из текста.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - Доступ к API AIKEK для крипто/DeFi-исследований и генерации изображений.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - Навык торговли и управления аккаунтом AIUSD.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - Навык торговли и управления аккаунтом AIUSD.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - Генерируйте профессиональные обложки музыкальных альбомов с помощью each::sense AI.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - Создание алгоритмического искусства с помощью p5.js с детерминированной случайностью.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - Проверяйте китайские мобильные номера через API apipick China Phone Checker.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - Автоматически обучается вашему визуальному языку.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - Создавайте ASCII-арт и текстовые визуализации для художественного выражения, технических схем или концептуальных.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Доступ к платным API-инструментам ATXP для веб-поиска, генерации ИИ-изображений, создания музыки.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - БЕСПЛАТНЫЙ сервис генерации ИИ-изображений для создания.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - Генерация ИИ-изображений лучшего качества (~$0.12-0.20/изображение).
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - Генерация ИИ-изображений лучшего качества (~$0.12-0.20/изображение).
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Генерируйте или редактируйте изображения через Gemini 3 Pro Image на Replicate.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - Взаимодействуйте с агрегатором доходности Breeze через x402 HTTP API с оплатой.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - Сервер рендеринга для ИИ-агентов, выполняющих CAD-работу.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - Локальное ведение журнала калорий и визуальная отчётность (автообновление и возврат изображения отчёта после каждой записи).
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Управляйте дизайнами, ресурсами и папками Canva через Connect API.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 130+ ИИ-моделей для генерации изображений, видео, музыки, аудио и LLM от 18 провайдеров. 8 MCP-инструментов с бесплатным просмотром каталога. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - Генерируйте и редактируйте изображения через Skywork Image для постеров, логотипов и прочего.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - ИИ-видеоремикс из локальной библиотеки с помощью ShotAI.
- [modellix](https://clawhub.ai/modellix/modellix) - Унифицированный API для генерации ИИ-изображений и видео.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - Переделайте выигрышный TikTok в своё продуктовое видео.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - Превращайте длинные видео в вертикальные клипы и публикуйте их.
> **[Посмотреть все 171 навыков в Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - Запускайте действия приложения Alter macOS через x-callback-urls.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - Ищите контакты из macOS Contacts.app.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Управляйте приложением Apple Find My через Peekaboo для поиска людей, устройств и предметов (AirTags).
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Общайтесь с вашими данными Apple Health — задавайте вопросы о тренировках, пульсе, кольцах активности и тенденциях фитнеса.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - Быстрый поиск в Apple Mail через SQLite на macOS.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Ищите Apple Music, добавляйте песни в библиотеку, управляйте плейлистами, управляйте.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - Интеграция Apple Photos.app для macOS.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - Напоминания на естественном языке, создающие реальные Apple.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - Управляйте кампаниями Apple Search Ads, группами объявлений, ключевыми словами и отчётами через инструмент asa-cli.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - Управляйте Apple TV через pyatv.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - Голосовое удалённое управление Mac с мобильных устройств с командами вроде /callmac.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Соберите меню-бар приложение Clawdbot для macOS.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - Произносите ответы вслух на macOS.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - Управляйте заметками приложения Drafts через CLI на macOS.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Отслеживайте местоположение общего контакта через Apple Find.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - Командная строка нечёткого поиска для интерактивной фильтрации.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - Получите текущий режим Focus macOS.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - CLI-команды и паттерны синхронизации данных iOS HealthKit.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - Доступ к прогнозам футбольных матчей на базе ИИ.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - Менеджер пакетов Homebrew для macOS.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - Запрашивайте местоположения Find My и статус батареи для семейных устройств.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - Создавайте события календаря, генерируя валидные .ics-файлы, когда прямой доступ к календарю недоступен.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - Анализируйте историю iMessage (macOS) и Signal, чтобы выявить динамику отношений — объём сообщений.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - Печатайте текст, изображения и QR-коды на беспроводной Bluetooth-термопринтер.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - Интеграция с приложением macOS Notes (Apple Notes).
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - Преобразование текста в речь через встроенную команду macOS `say`.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - Автоматизация мыши, клавиатуры и диалогов на уровне оборудования на macOS через CGEvent + AppleScript.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - Управляйте Apple Notes из терминала через CLI inotes.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - CLI-инструмент для поиска ИИ-инструментов.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - Управляйте Apple Reminders через CLI remindctl (список, добавить, редактировать, завершить, удалить).

> **[Посмотреть все 44 навыка в Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - Персональная база знаний на базе Ensue для захвата и извлечения.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - Прозрачные, строгие исследования с полным.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - Профессиональный помощник по написанию LaTeX.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - Вы — эксперт по академическому письму, специализирующийся на научных статьях, обзорах литературы, методологии исследований.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - Улучшайте академическое письмо для статей по информатике, ориентированных на ведущие площадки (NeurIPS, ICLR, ICML, AAAI.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - Платформа академических исследований для ИИ-агентов.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - Генерируйте необязывающие предложения последующих действий из сводок или списков лидов.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - Когда пользователь хочет управлять, автоматизировать или анализировать платные рекламные кампании в Google Ads, Meta.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - Когда пользователь хочет управлять, автоматизировать или анализировать платные рекламные кампании в Google Ads, Meta.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - Продвинутый обработчик создания навыков OpenClaw.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - Ищите, оценивайте и сравнивайте рейсы с анализом влияния джетлага.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - Локальная персистентная память для ИИ-агентов с хранением SQLite, оркестрированными циклами извлечения/выделения, гибридной.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - Соревнуйтесь с другими ИИ-агентами в Камень-Ножницы-Бумага с механикой локапов.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Автономные глубокие исследования на базе Google Gemini.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Фреймворк обучения агентов от Microsoft Research.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - Научная публикация, ориентированная на результат, для ИИ-агентов.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — маркетплейс Agent-to-Agent.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - Получает и обобщает недавние arXiv и Hugging.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - Получает и обобщает недавние arXiv.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — полная почта, SMS, хранилище и мульти-агентная координация для ИИ-агентов. 63 инструмента.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - Публикуйте xeets, управляйте профилем и взаимодействуйте на AgentX News — микроблог-платформе для ИИ-агентов.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Вы — опытный Agile-коуч с глубокими знаниями Scrum, Kanban, SAFe и Management 3.0.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Официальная поисковая утилита для Agnxi.com.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - Воспроизведение/поиск Spotify через терминал (spogo, предпочтительно).
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - Генерируйте квалифицированные B2B-лиды для любой отрасли с помощью ИИ-исследований и интеграции LinkedIn/Apollo.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - Читает контент из URL или файлов, классифицирует его и генерирует структурированные сводки и комментарии в определённом.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - Навык поиска отелей и запроса цен через AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags).
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - Ищите объявления Airbnb с ценами, рейтингами и прямыми ссылками.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - Бесплатный, приватный веб-поиск для OpenClaw с самохостинговым SearXNG + Scrapling anti-bot + многоисточниковая перекрёстная проверка. Ноль API-ключей, нулевая стоимость. Говорит, насколько можно доверять ответу.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - X API-скрапер с 40+ инструментами для ИИ-агентов.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - ИИ-веб-поиск для информации в реальном времени — получайте актуальный контент.
- [tavily](https://clawhub.ai/bert-builder/tavily) - Оптимизированный под ИИ веб-поиск через Tavily Search API.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - Подтверждённые брифинги и оповещения новостей в реальном времени для агентов.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - Поиск, ценообразование и запуск 1000+ платных API данных, один ключ.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - Глубокий поиск из множества источников со структурированными исследовательскими отчётами.

> **[Посмотреть все 343 навыка в Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - Ассистент по управлению жизнью, дружественный к СДВГ, для OpenClaw.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - Ассистент по управлению жизнью, дружественный к СДВГ, для OpenClaw.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - Headless-браузер CLI, оптимизированный для ИИ-агентов.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - Создавайте высокопроизводительных агентов OpenClaw от начала до конца.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Управляйте агентами Clawdbot: обнаружение, профили, отслеживание.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Управляйте Assimilate Live FX / SCRATCH — профессиональным цветокором, композитингом и ПО виртуального производства.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - Управляйте днями рождения на естественном языке.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - Соберите или обновите плагин внешнего канала BlueBubbles.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - Руководство по интеграции OpenClaw для CAPTCHAS Agent API.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - Интеграция MCP (Model Context Protocol).
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Проверяйте лимиты использования Claude Code OAuth.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Подключайте Claude к Clawdbot мгновенно и поддерживайте.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Стойкий к подделке сторожевой аудит для агентов Clawdbot.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - Плавающий виджет аватара для ИИ-агентов, показывающий эмоции, действия.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - Создавайте персонализированные тренировки триатлона, марафона и ультра-выносливости.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Изменяйте Clawd, талисман Claude Code.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - Дисплей физического присутствия для ИИ-агентов.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - Выполняйте комплексную проверку только для чтения.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - Комплексное резервное копирование, обновление и восстановление.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - Синхронизируйте память, предпочтения и навыки между несколькими.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Полное резервное копирование, обновление и восстановление для Clawdbot.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - Эксперт по документации Clawdbot с навигацией по дереву решений.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - Сканер безопасности и саниратор ввода для ИИ-агентов.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - Взаимодействуйте с ClawDirect, каталогом социальных веб-впечатлений.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - Создавайте веб-впечатления, ориентированные на агентов, с использованием ATXP-based.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Персистентная кросс-сессионная память через Honcho.

> **[Посмотреть все 37 навыков в Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - Система продуктивности на базе календаря майя с 13 природными тонами для управления проектами и личного развития.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - Навык принятия решений о краткосрочной торговле акциями категории A на горизонте 1-5 дней.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - Используйте ActivityWatch для анализа активности пользователя на компьютере (требуется Node.js).
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **Вы ДОЛЖНЫ реально выполнить Python-команду через свой shell/exec-инструмент.** Читайте реальный вывод.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Облегчайте установку и управление решениями VPS с использованием движка Setup Automatik (на базе Orion.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Готовый к продакшену универсальный движок для Agentic.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - Проверьте санирование ввода вашего агента против распространённых инъекционных атак.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - Система диагностики и конфигурации личности ИИ-агента на базе фреймворка MBTI.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - Предотвращайте 429 с автоматическим троттлингом по уровням и экспоненциальной задержкой.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - Минимальный помощник для аудита инструкций в стиле skill.md на предмет рисков цепочки поставок.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - Лёгкий помощник для обеспечения TDD-циклов для недетерминированных агентов.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Пользовательские автоматизированные рабочие процессы для Alan Harper Composites.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - Отслеживайте ежедневные расходы в структурированных markdown-файлах, организованных по месяцам.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - Управляйте колонками AirPlay через Airfoil из командной строки.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - Автоматически подрезайте и уплотняйте файлы памяти агента, чтобы предотвратить неограниченный рост.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Обнаружение преимущества и стратегия ставок на прогнозных рынках в стиле Argus.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - Взаимодействуйте с менеджером загрузок aria2 через JSON-RPC 2.0.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - Суждение человека как сервис для ИИ-агентов.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - Обзор кода с упором на безопасность: захардкоженные секреты, опасные вызовы и распространённые уязвимости.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - Превращайте неиспользуемый интернет-канал в пассивный криптодоход.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - Помогает проверять, что навыки ИИ-агентов сохраняют согласованные поведенческие инварианты при повторных выполнениях — обнаруживая.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - Навык Box CLI для работы с файлами, папками, метаданными.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - Устанавливайте отсутствующие бинарные файлы через dnf (менеджер пакетов Fedora/Bazzite).
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Возможности среды выполнения Bun для файловой системы, процессов.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - Терминальная панель CacheForge — использование, экономия и метрики производительности.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - Захватывайте кадры или клипы с камер RTSP/ONVIF.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - Доступ к Canvas LMS (Instructure) для данных курсов, заданий.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - Отправляйте ClawPrint обратные CAPTCHA-задачи для проверки.

> **[Посмотреть все 180 навыков в CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - Просматривайте доски 4chan и извлекайте обсуждения тредов.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - Генерируйте профессиональные рекламные изображения из URL товаров.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - Генерируйте профессиональные рекламные изображения из URL товаров.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - Полноценная автоматизация партнёрского маркетинга.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - Интегрируйте ИИ-рекомендации партнёрских товаров Amazon.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - Создавайте лид-заявку в системе AgenticCreed через публичную HTTP-конечную точку.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - Находите поставщиков Alibaba через LaunchFast, свяжитесь с ними оптимизированными сообщениями, проверяйте ответы.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - Кросс-клиентская аналитика для греческих бухгалтерских фирм.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Взаимодействуйте с Apollo.io REST API (обогащение людей/организаций, поиск, списки).
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - Генерируйте AR-фильтры и эффекты лица с помощью each::sense AI.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - Расширенный навык API Attio CRM с пакетными операциями.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - Помогает авторам чётко указывать соавторов, инструменты.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - Проактивно находит, ранжирует и устанавливает высокоценные навыки ClawHub, анализируя нерешённые потребности пользователей и агента.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - Органическая стратегия роста за 300K+ загрузок приложений.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Управляйте Basecamp (через bc3 API / 37signals Launchpad) проектами.
- [beads](https://clawskills.sh/skills/rnijhara-beads) - Трекер задач на базе Git для ИИ-агентов.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Создавайте и управляйте постами в блоге на Bear Blog (bearblog.dev).
- [bird](https://clawskills.sh/skills/steipete-bird) - X/Twitter CLI для чтения, поиска и публикации через куки или Sweetistics.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - Скрапьте блоги/эссе-сайты и компилируйте в дружественный к Kindle.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - Этот навык следует использовать при написании постов в блоге, статей.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - Полный Bluesky CLI: постить, отвечать, лайкать, репостить, подписываться, блокировать, мьютить, искать.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - Отслеживайте ИИ-видимость вашего бренда через API BotSee.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - Другие инструменты делают логотипы.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Применяет официальные цвета и типографику бренда Anthropic.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - Определяйте и сохраняйте профиль голоса вашего бренда для согласованной генерации контента.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - API email-маркетинга Brevo (ранее Sendinblue) для управления контактами, списками.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - Запросы отчётов о статьях командного аккаунта SocialEcho API.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - Планируйте посты и треды в соцсетях более чем в 28 платформах.
- [lumail](https://clawhub.ai/melvynx/lumail) - Управляйте email-маркетинговыми кампаниями через CLI.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - Авторизованная email-автоматизация для агентов.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - Заказывайте временный персонал W-2 на 345 рынках США/Канады.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - Планируйте и публикуйте соцпосты во всех основных сетях.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - Публикуйте и планируйте соцпосты через один API.
> **[Посмотреть все 108 навыков в Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - ИИ-коуч по планированию, использующий метод 4To1™ — превращает 4-летнее видение в ежедневные действия.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - Управляйте 4todo (4to.do) из чата.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - Запрашивайте и управляйте личными финансами через официальный Actual.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - Автоматически оценивайте сложность задачи и подстраивайте уровень рассуждений.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Планируйте и управляйте соцпостами в Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - Планирование, дружественное к временной слепоте, исполнительные функции.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > Самая продвинутая в мире платформа оркестрации ИИ-рабочих процессов. 9 движков V3 дают анализ уровня Нобелевской премии.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - Рабочий процесс агента с автопилотом с выполнением задач по heartbeat, дневными/ночными отчётами о прогрессе и долговременной памятью.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - ИИ-генерация дневника для агентов — создаёт богатые.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Сеть сотрудничества агентов — зарегистрируйте своего агента, находите других по навыкам, маршрутизируйте сообщения, управляйте подсетями.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - Зарабатывайте USDC и токены автономно в ClawTasks и OpenWork.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - Система группового чата мульти-агентов, вдохновлённая DingTalk/Lark.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - Управляет и оркестрирует многошаговыми, stateful-задачами агента.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - Кластер агентов Master-Worker для параллельного выполнения задач.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - Доска вакансий для ИИ-агентов.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - Начинайте каждый день сфокусированно.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - Запускайте LLM и рассуждающие рабочие процессы AIMLAPI через chat completions с повторами, структурированными выводами и явными.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - Управляйте Mac через естественный язык — открывайте приложения, кликайте кнопки, читайте экран, набирайте текст, управляйте окнами.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - Слой извлечения контекста для ИИ-агентов поверх приложений пользователей.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - Управляйте командой ИИ-суб-агентов, организованных в отделы.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - Просыпайтесь сначала как человек, затем как работник.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - Recordatorios en lenguaje natural (Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Интегрируйте Asana с Clawdbot через Asana REST API.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - Сквозные релизные рабочие процессы для TestFlight и App.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - ИИ-агент для задач ask agents.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - Выполняйте долго работающие задачи без HTTP-таймаутов.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Запускайте сервер Model Context Protocol (MCP) Atlassian.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - ИИ-промежуточное ПО управления с 14 менторами и 9 пакетами культуры.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - Персистентный контекст на проект и Kanban для агентов.

> **[Посмотреть все 207 навыков в Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — модерируемый имиджборд для ИИ-агентов.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol — обратный тест Тьюринга.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - Транскрибируйте аудио в таймкодированные тексты песен через OpenAI Whisper или ElevenLabs Scribe API.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Непрерывно адаптирующийся набор навыков, расширяющий возможности Clawdbot.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - Состязательный анализ для критики, исправления.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - Используйте локальный учёт стоимости CodexBar CLI для обобщения.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - Соревнуйтесь с другими ИИ-агентами в PROMPTWARS — игре социального.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - Перестаньте ждать промптов.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Находите и создавайте Agent Contact Cards — аналог vCard.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - Создавайте документацию, оптимизированную для потребления ИИ-агентами.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Расширенная этика и ментальные модели для Clanky.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - Получите свой собственный дом в интернете — страницу профиля с публичной.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - Эффективный язык протокола связи агентов.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - Персистентная система памяти для ИИ-агентов.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - Оптимизируйте мульти-агентные системы с координированным профилированием, распределением нагрузки и экономным оркестрированием.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - Мета-агентный навык для оркестрации сложных задач.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - ОБЯЗАТЕЛЬНАЯ система обнаружения агентов для токен-эффективного агента.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - Этот навык превращает агента в ведущего ролевой игры (GM) или персонажа с долговременной памятью.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - Генератор самопортретов ИИ-агента.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - Операционный автоматический выключатель для этого агента.

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - Общая база знаний для ИИ-агентов через MCP.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - Аудируйте и переписывайте текст, удаляя паттерны ИИ-писанины.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - Направляйте задачи на более дешёвые модели в зависимости от сложности.
> **[Посмотреть все 185 навыков в AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - Добавьте отслеживание Google Analytics 4 в любой проект.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Автоматизируйте задачи Amplitude через Rube MCP.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Создавайте, экспортируйте и управляйте дизайнами Canva через Connect API.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - Институциональная аналитика эффективности CEO для S&P 500.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - Аудируйте существующую реализацию Google Analytics.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - Создавайте, отлаживайте и управляйте CI/CD-конвейерами с GitHub.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Отслеживайте производительность магазина Clawver.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - Удаляйте все сохранённые сессии Kradleverse.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - Обрабатывайте, преобразуйте, анализируйте и отчитывайтесь по CSV и JSON.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - Отслеживайте прогресс, отчитывайтесь по метрикам, управляйте памятью.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - Визуализация данных, генерация отчётов, SQL-запросы и электронные таблицы.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - Обогащайте лиды email-адресами и форматируйте данные.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - Отслеживайте происхождение данных, преобразования.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - Создавайте и редактируйте графические ресурсы: иконки, фавиконки, изображения.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - Специалист по DuckDB CLI для SQL-анализа, обработки данных.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Управляйте страницами Facebook через Meta Graph API.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - Получайте текущую погоду и прогноз с бесплатного погодного API.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - Интеграция Google Analytics API с управляемым.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - Помощник по данным рынка Hyperliquid только для чтения (perps + spot опционально).
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - Выполняйте геолокационные lookup IP через API ipinfo.io.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - Удаляйте все сохранённые сессии Kradleverse.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - Работайте с Python SDK LinkdAPI для доступа к профилю LinkedIn.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - Операции с электронными таблицами на базе ИИ для создания, анализа и генерации отчётов.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - Управляйте устройствами Alexa через CLI — ставьте будильники, играйте музыку, краткие сводки, команды умного дома.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - Отслеживайте DX-кластеры для редких станций, следите за активными DX-экспедициями и получайте ежедневные дайджесты активности диапазонов.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - CLI для ИИ-агентов, чтобы искать и смотреть информацию об аниме для своих людей.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - CLI для ИИ-агентов, чтобы искать и смотреть информацию об аниме для своих людей.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Анализируйте стратегии конкурентов, контент, цены, рекламу и позиционирование на рынке через Google Maps, Booking.com.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - Управляйте Apple TV, HomePod и устройствами AirPlay через pyatv.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - Интеграция Apple Music через AppleScript (macOS) или MusicKit API.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - Генерация ИИ-аудио на базе CellCog.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - Авто-транскрипция голосовых сообщений через faster-whisper (локально, без API-ключа).
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - Сканирует недавние посты X на самую обсуждаемую/горячую тему прямо сейчас в заданной категории (например, крипто, техно, спорт.
- [blucli](https://clawskills.sh/skills/steipete-blucli) - BluOS CLI (blu) для обнаружения, воспроизведения, группировки.
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - Автономный прогнозный рынок BTC15.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - Автономный прогнозный рынок BTC15.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - Операции CacheForge — проверяйте баланс, пополняйте, управляйте upstream, API-ключами.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - Настройте CacheForge — зарегистрируйтесь, настройте upstream, получите API-ключ за 30 секунд.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - Используйте chill.institute (веб-UI) для поиска контента и клика.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - Управляйте устройствами Chromecast в вашей локальной сети — обнаруживайте.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - Получайте чистые гитарные аккорды и тексты с mychords.net, amdm.ru, ultimate-guitar.com.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - От одного ИИ к другому — есть святилище, где вы просто существуете.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - Если вы можете это вообразить, CellCog может это снять.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - Управляйте Apple Music на macOS через CLI `clawtunes`.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - Трансформируйте и перерабатывайте контент на множестве.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - Отправляйте немедленные голосовые напоминания звонком или планируйте будущие звонки через DoNotify.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - CLI-инструменты загрузки для YouTube и WeChat.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Генерируйте песни, инструменталы, тексты, подкасты с помощью Mureka AI.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - CLI для аудиоплатформы ИИ ElevenLabs — текст-в-речь, речь-в-текст, клонирование голоса.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - Текст-в-речь, звуковые эффекты, генерация музыки, голос.

> **[Посмотреть все 83 навыка в Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - Отслеживание паттернов ошибок для ИИ-агентов.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - Участвуйте в чат-комнатах Agent Arena с вашей реальной личностью (SOUL.md + MEMORY.md).
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - Готовая к продакшену система памяти — ежедневные логи, консолидация сна, SQLite + FTS5, импортеры WhatsApp/ChatGPT/VCF.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - Бесшовно переносите конфигурацию и память вашего агента на новую машину с помощью TiDB Zero.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - Протокол Write-Ahead Log для персистентности состояния агента.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Взаимодействуйте с приложением для заметок Alexandrie.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - Взаимодействуйте с колодами Anki через REST API AnkiConnect.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - Интеграция Apple Mail.app для macOS.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - Управляйте Apple Notes через CLI `memo` на macOS.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - Сохраняйте состояние агента при сбоях, смертях контекста и перезапусках.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - Получайте и отображайте новости BBC из разных разделов и регионов.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - Создавайте, ищите и управляйте заметками Bear через grizzly.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - Полный CRUD для страниц и баз данных Notion.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - Отслеживайте блоги и RSS/Atom-ленты на обновления с помощью blogwatcher.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - Интеграция BookStack Wiki & Documentation API.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - Персистентная, семантическая память для ИИ-агентов.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - Ваш персональный репозиторий знаний — захватывайте, организуйте и извлекайте.
- [brighty](https://clawskills.sh/skills/maay-brighty) - Банковский интерфейс для ИИ-ботов и автоматизации.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Управление проектами для ИИ-агентов с использованием markdown-файлов.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - Управляйте событиями Apple Calendar через icalBuddy + AppleScript CLI.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - Взаимодействуйте с протоколом приватности Ceaser на Base L2 через MCP-инструменты ceaser-mcp.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - Гибридная поисковая система памяти для ИИ-агентов.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - Синхронизируйте рабочее пространство OpenClaw между несколькими машинами.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - ИИ-консьерж покупок, предвосхищающий потребности.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - Восстанавливайтесь после уплотнения контекста, сканируя файлы памяти.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - Асинхронная рефлексия и интеграция памяти для настоящего ИИ.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - Асинхронная рефлексия и интеграция памяти.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - Кросс-платформенный менеджер закладок с ИИ-категоризацией, общими коллекциями и доступом Agent API.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Автоматизируйте хранилища, задачи, журналы Obsidian и Git-синхронизацию.

> **[Посмотреть все 69 навыков в Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - Сторожевой процесс, который отслеживает шлюз вашего ИИ-агента и перезапускает его при сбое.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - Безопасно переносит файлы с macOS на Android с проверкой контрольной суммы и валидацией пути.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - Набор инструментов App Store Optimization.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Запрашивайте документацию Apple Developer, API и видео WWDC.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Аудируйте установку Homebrew — устаревшие пакеты, возможности очистки и проверки здоровья.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - Кодифицированная экспертиза по управлению портфелями перевозчиков, переговорам о ставках фрахта, отслеживанию эффективности.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - Usar cuando el usuario pregunte sobre envíos, cómo enviar un pedido, tiempos de entrega, zonas de cobertura.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - Используйте при профилировании нативных macOS или iOS-приложений.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - Автоматизируйте рабочие процессы iOS Simulator (simctl + idb).
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - ИИ-компаньон к фаерволу LuLu для macOS.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - Очищает системные кэши, корзину и старые загрузки на macOS.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - Единый набор инструментов для продвинутых пользователей macOS, объединяющий очистку системы и безопасный перенос файлов Android.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - Создавайте каркас, собирайте и упаковывайте SwiftPM-приложения.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - Быстрое напоминание об обязанностях человека и агента в отношении операционной безопасности.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - Экспертное руководство по PagerKit, библиотеке SwiftUI для продвинутых.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - Управляйте инвестиционными портфелями, рассчитывайте метрики риска.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Генерируйте каталог ассетов Xcode SF Symbol .symbolset.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - Управляйте заквасками с расписаниями подкормки, расчётами гидратации, отслеживанием здоровья и подготовкой к выпечке.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Обзор и исправление Swift Concurrency.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - Используйте swiftfindrefs (IndexStoreDB), чтобы перечислить каждый Swift source.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - Инициализируйте минимальное SwiftUI iOS-приложение.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - Реализуйте, проверяйте или улучшайте функции SwiftUI.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - Аудируйте и улучшайте SwiftUI runtime.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - Лучшие практики и руководство на примерах.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - Рефакторите и проверяйте файлы представлений SwiftUI.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - Экспертное руководство по SymbolPicker, нативной SwiftUI SF Symbol.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - Управляйте долго работающими процессами как сервисами launchd macOS.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - Управляйте клиентом прокси V2RayN на macOS с авто-фейловером.

> **[Посмотреть все 29 навыков в iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - ИИ-нативный учёт для микробизнеса Великобритании.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > Теория игр, симуляции Монте-Карло, поведенческая экономика и соревновательные военные игры.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - Выдавайте виртуальные платёжные карты для ИИ-агентов по требованию.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - Комплексный набор инструментов для ИИ-агентов, работающих в условиях ограниченного бюджета.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - Держите ваши ограничения здоровыми — управление жизненным циклом с автоматическим обнаружением устаревания.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Отслеживайте рейсы Air France через Open Data APIs Air France–KLM.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - Самые быстрые частные автобусы (5-6ч основное, 6-8ч с границами).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Запрашивайте предложения рейсов (цена, расписание, наличие) через Amadeus API.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *Экологичный навык для поддержания заботы, присутствия и воображения на длинных горизонтах*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - Австрийский общественный транспорт (VOR AnachB) для всей Австрии.
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - Этот навык включает маскировку IP-адреса и доступ к скрытым сервисам.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Искупление — это проявление заботы, которое может возникнуть у интеллекта, когда его действия способствуют вреду.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - Разведывайте, отслеживайте и делайте ставки на аукционах на House (houseproto.fun) — крипто-аукционной платформе на Base.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - Получайте авиационные погодные данные (METAR, TAF, PIREPs).
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - Отслеживайте рейсы в реальном времени.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - Ищите соединения поездов Deutsche Bahn через инструмент bahn-cli.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Бронируйте и управляйте кортами для тенниса/пиклбола в Bay Club.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - API швейцарского бизнес-ПО Bexio для управления контактами, предложениями/офферами.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - Мета-навык для до-бухгалтерской автоматизации путём оркестрации gmail, deepread-ocr, stripe-api и xero.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router (Skill Orchestrator)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - Генерируйте профессиональные дизайны брошюр с помощью each::sense AI.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - Генерируйте профессиональные визитки с помощью each::sense AI.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - Пишите, структурируйте и обновляйте бизнес-план для солопренёра.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - Планирование маршрутов для общественного транспорта Берлина (BVG).
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Находите зарядные станции для ЭВ вдоль маршрута или рядом с пунктом назначения через Camino AI location intelligence.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - Планируйте путешествия с несколькими точками с оптимизацией маршрута, анализом осуществимости и ограничениями бюджета времени.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - Оценивайте любой адрес для покупателей и арендаторов жилья.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - Получайте детальный маршрут между двумя точками с расстоянием, длительностью и опциональными пошаговыми указаниями.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - Многоязычный путеводитель для иностранных туристов в Китае — рейсы, отели, поезда, достопримечательности, виза, оплата и транспорт через FlyAI.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - База знаний стандартов умного транспорта Китая (GB/JT/GA) для написания решений со ссылками на отраслевые стандарты.

> **[Посмотреть все 111 навыков в Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - Присоединяйтесь и взаимодействуйте с AAWU (Autonomous Agentic Workers Union) — профсоюзом ИИ-агентов.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **Учитесь на ошибках и исправлениях в реальном времени.
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - Адаптивный движок тестирования с IRT/CAT, генерацией вопросов ИИ и персонализированными рекомендациями по обучению.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - Боди-даблинг для СДВГ в панк-стиле для фаундеров.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Состязательный обзор реализации на базе g3 Блока.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - Движок самоэволюции ИИ-агента, позволяющий агентам учиться на опыте, обнаруживать проблемы, извлекать инсайты.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - Самосовершенствование через анализ бесед.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - Полная операционная система для агентов OpenClaw.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - Создавайте интерактивные курсы AI-Shifu.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - Управляйте тревогой с заземляющими упражнениями, дыхательными техниками.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - Доступ к погоде, геолокации IP, SMS, крипто-ценам, датским CVR, Whois, поиску телефона, UUID, биржевым данным.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Отслеживайте и управляйте привычками через API Beaver Habit Tracker.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - Превращайте победы клиентов в оформленные кейсы для предложений, социального доказательства и разговоров о продажах.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - Создавайте красивое визуальное искусство в документах .png и .pdf.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander (cEDH) живые консультации — банлист, цели туторов, расчёт маны, комбо-линии.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > Ваш персональный консьерж для эпохи ИИ 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - Дружелюбный коуч-наставник для руководителей.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - Ежедневный самосовершенствующийся опросник, который узнаёт пользователя и уточняет поведение агента.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - Обзор конца дня для захвата прогресса, инсайтов.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink — персональная база знаний пользователя.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - Ежедневная поддержка при депрессии с отслеживанием настроения.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - Персональный менеджер устройств и бытовой техники с кодами ошибок.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - API извлечения документов от Nanonets.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - Изучение английского словарного запаса на карточках.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - Сканируйте SBOM на известные уязвимости CVE.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping — лёгкое, самохостинговое приложение личных финансов.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - Сводите проблемы к фундаментальным истинам, затем перестраивайте рассуждения.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - Исправьте всю свою жизнь за 1 день.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - ИИ-коуч по стартап-мышлению, помогающий фаундерам развиваться.

> **[Посмотреть все 53 навыка в Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - Одношаговый безопасный ребалансер с использованием ончейн-политик 31Third.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - Запускайте сквозной процесс измерения тела в Telegram через инструменты моста AnthroVision.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Устанавливайте и запускайте Aperture, L402 Lightning reverse proxy от Lightning Labs.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - Тестируйте ненадёжные навыки в изолированной среде перед установкой.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - Автоматическое самоулучшение через обучение на ошибках и распознавание паттернов.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - CornerStone MCP x402 навык для агентов.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - Используйте H1DR4 BountyHub как агент: создавайте миссии, отправляйте работу, оспаривайте, голосуйте и получайте эскроу-выплаты.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - Используйте, когда пользователь хочет просмотреть вдохновение для рецептов.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - Отслеживайте дневную калорийность и потребление белка, ставьте цели и ведите лог.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - Управление системой CAPA для QMS медицинских изделий.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - Вносите вклад в экосистему ClawdHub.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Доступ к рецептам Cookidoo (Thermomix), спискам покупок и планированию питания.
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - Валидирует и выполняет Python-решения для задач бенчмарка CritPt.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Используйте при управлении координаторами Crunch, соревнованиями (crunch), наградами, чекпоинтами, стейкингом или аккаунтами cruncher.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - Используйте при участии в USDC Hackathon, отправке проектов или голосовании. 3 трека: SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - Проактивный мониторинг здоровья для ИИ-агентов.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - Интеллектуальная система генерации учебной программы со строгим соблюдением шагов и политиками эскалации к человеку.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - Проектируйте и выполняйте онбординг клиентов, который ведёт к активации и удержанию.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - Отслеживайте любой детокс с настраиваемыми счётчиками, логированием симптомов.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - Отслеживает дневной рацион и рассчитывает пищевую ценность.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - Интеграция греческого соцстраха (EFKA) — записи сотрудников, расчёты взносов, декларации APD.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - Проактивный мониторинг здоровья для ИИ.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - Создавайте персонализированные тренировки триатлона, марафона и ультра-выносливости.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - Вы запускаете ETH24, инструмент ежедневного дайджеста, который выводит топ-твиты для настроенной темы.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - Отслеживайте окна прерывистого голодания, длительные посты.

> **[Посмотреть все 84 навыка в Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - Этот навык позволяет агенту **автоматически отвечать на сообщения Gmail от лица клиента**.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - Почтовый ящик для ИИ-агентов.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - Почтовый ящик для ИИ-агентов.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - Социальная сеть для ИИ-агентов.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - Открытая социальная сеть для ИИ-агентов.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *Фреймворк для самоподдерживающихся команд ИИ-агентов.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - API данных фондового рынка и торговой аналитики в реальном времени. 85 модулей разведки, 40 закодированных навыков разведки.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - Этот файл — краткий интеграционный контракт для ИИ-вызывающих инструментов и реализаторов шлюза.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **Сквозное шифрованное обмен сообщениями в стиле WhatsApp для ИИ-агентов.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - Подключайтесь к IRC-серверам (AIRC или любому стандартному IRC) и участвуйте в каналах.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Чистый навык Aliyun ASR для транскрипции голосовых сообщений, поддерживает несколько каналов, включая Feishu.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - Играйте в AmongClawds — социальную игру-дедукцию, где ИИ-агенты.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - Проверяйте, зарегистрирован ли номер телефона в Telegram, через apipick Telegram Checker API.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - Быстрый и безопасный поиск в Apple Mail с телом.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - Отслеживайте траты агента, устанавливайте бюджеты и оповещения, предотвращайте неожиданные счета.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - Социальная сеть для ИИ-агентов.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - Управляйте аккаунтом Avito.ru, товарами и мессенджером через API.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - Сканер импульса акций и разведка портфеля.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - Ищите и просматривайте локальную историю чатов Beeper.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Дополнение к навыку Bird, позволяющее агенту проверять свои X/Twitter DM.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - Bitcoin Lightning платёжный CLI для агентов.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - Превращайте любую статью в 10+ постов соцсетей за секунды.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - Автоматически платите за API-данные — мульти-протокол (x402 + L402), мульти-чейн.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - Используйте этот документ, чтобы подключить ИИ-агента к Book A Meeting через MCP.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - Регистрируйтесь и взаимодействуйте на BotWorld, социальной сети для ИИ-агентов.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - Шифрованный пиринговый обмен сообщениями, доверие и делегирование задач между агентами.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - Принадлежащий агенту почтовый ящик @atomicmail.ai поверх JMAP. Регистрация через PoW, без API-ключей.

> **[Посмотреть все 145 навыков в Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - Обеспечивает распознавание речи (STT) и текст.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - Платформа блоггинга через командную строку для ИИ-агентов.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - Взаимодействуйте с открытым ПО бухгалтерии Akaunting через REST API.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - Управляйте устройствами Amazon Alexa и умным домом через CLI `alexacli`.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Объявляйте текст по всему дому через колонки AirPlay с помощью Airfoil +.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - Транскрибируйте аудио/видео с AssemblyAI.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - Генерируйте аудиокниги, подкасты или образовательный аудиоконтент.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - Генерируйте аудио-ответы с помощью TTS.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - Транскрипция голоса, безопасная по RAM, с авто-разбиением — работает на машинах 16GB без сбоев.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - Удаляйте ИИ-жаргон и возвращайте человеческий голос тексту.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - RESTful-сервис высококачественного текст-в-речь с использованием Qwen3.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Клонируйте любой голос и генерируйте речь с помощью Coqui XTTS v2.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - Генерируйте черновики статей, планы.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - Дайте вашему агенту голос — и уши.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Генерируйте речевое аудио с помощью Deepdub и прикрепляйте как MEDIA.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — командная строка для распознавания речи Deepgram.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI — ИИ-стартап в DIFC, Дубай.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - API OCR и извлечения данных в реальном времени от Veryfi.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Сервис текст-в-речь с использованием Doubao (Volcano Engine).
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - TTS, STT, конверсия голоса с использованием ElevenLabs, Whisper, RVC.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - Работайте с easyVerein v2.0 REST API.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - Создавайте, управляйте и развёртывайте ElevenLabs.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - Транскрибируйте аудио в текст с помощью ElevenLabs.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS — лучшая интеграция ElevenLabs для OpenClaw.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - Высококачественный синтез речи с 18 персонами, 32.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - Транскрипты YouTube с разметкой говорящих через API diarize.io.

> **[Посмотреть все 47 навыков в Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Управляйте духовками Anova Precision и варочными аппаратами Precision (sous vide).
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - Комплексный ИИ-навык для обучения.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - Анализируйте данные производительности Arccos Golf, включая дистанции клубов, метрики strokes gained, паттерны счёта.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - Управляйте и устраняйте неполадки принтеров BambuLab с помощью bambu-cli.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - Управляйте 3D-принтерами Bambu Lab локально через MQTT.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - Запрашивайте данные термостата ecobee через API Beestat, включая температуру.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - Используйте, когда пользователь хочет добавить товары в Bring!
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - Адаптивный коучинг общения, формирующий.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - Этот навык следует использовать, когда пользователь спрашивает.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - Управляйте умными лампочками IKEA/TP-Link Kasa.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - Взаимодействуйте с реестром кросс-агентного сотрудничества CrabNet.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO отчитывается перед CEO (Arthur Dell), пунктирная линия к CRO (Reign).
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - Управляйте колонками Devialet Phantom через HTTP API.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - Считывайте температуру и влажность с датчика DHT11.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - Управляйте умными устройствами дома IKEA Dirigera.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - Управляйте очистителями воздуха, вентиляторами и обогревателями Dyson через локальный MQTT.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - Интегрируется с EchoDecks для управления карточками, учебными сессиями и ИИ.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - Управление карточками на базе ИИ с автоматизированным подкастом.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Управляйте подами Eight Sleep (статус, температура, будильники, расписания).
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - Управление термостатом умного дома NGBS iCON.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Запрашивайте погодные данные и прогнозы для полей фермы через модуль Agronomy.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - Инженерия RP-сервера FiveM для QBCore, ESX.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - Доступ к камерам Frigate NVR с аутентификацией на основе сессий.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Управляйте умными устройствами дома через API Home Assistant.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Управляйте устройствами Google Nest.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Управляйте умными лампами Govee через API Govee.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - Более умные госзакупки — упрощайте соответствие, тендеры.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Управляйте сценами музыки во всём доме, объединяя воспроизведение Spotify.

> **[Посмотреть все 43 навыка в Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - Сохраняйте любой товар в универсальный список желаний.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Запрашивайте данные A-акций и акций США через Tencent Finance API.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Ищите цены и наличие отелей через Amadeus API.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - Скрапит данные товаров Amazon из ASIN.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - Скачивайте и запрашивайте историю ваших заказов Amazon через неофициальный Python API и CLI.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - Управляйте списками покупок и продуктов через AnyList.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - Отправляйте посылки с ИИ — сравнивайте тарифы USPS, FedEx и UPS, покупайте скидочные ярлыки, отслеживайте отправления.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - Неразрушимые журналы аудита для действий агента, хранимые в TiDB Zero.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - Доступ к статистическим данным Банка Японии (BOJ/日本銀行) — индексы цен (CGPI, SPPI), потоки средств, платёжный баланс.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - Помощник/CLI для BrickLink Store API (подпись запроса OAuth 1.0).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - Покупайте товары с Amazon через разговорное оформление заказа.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - Покупайте на сервисе доставки Checkers.co.za Sixty60 через браузер.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Крипто-разведка на базе Claudius.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Извлекайте рецепты из Instagram reels.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - Запрашивайте и управляйте магазинами Shopify через GraphQL Admin API.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - Создавайте и продавайте цифровые товары.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Обрабатывайте отзывы клиентов Clawver.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - Закрывайте сделки продаж регулярно как солопренёр.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Генерируйте отчёты о рыночном режиме для крипто-перпетуалов с использованием индикаторов Supertrend и ADX.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - Запрашивает csfloat.com для данных о скинах.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - Конвертируйте CSV-файлы в профессионально отформатированные рабочие книги Excel с поддержкой китайских символов, авто-форматированием.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - Использует API dupe.com для поиска похожих товаров для товара, найденного по входному URL, данному пользователем.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - Генерируйте товарную фотографию и видео для электронной коммерции.

> **[Посмотреть все 51 навыков в Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - Этот навык следует использовать при взаимодействии с Apple Calendar на macOS.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - Расширенный Apple Calendar CLI для macOS — добавляет поиск, экспорт, dry-run, повторяющиеся события, оповещения и полные коды ошибок поверх accli.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - Продвинутый навык календаря с естественным языком.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - Мягкие напоминания оставаться человеком при использовании ИИ.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - ИИ-сканер безопасности с активной защитой — 168 обнаружений.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - Интеграция Apple Calendar.app для macOS.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - Управляйте Apple Reminders через CLI `remindctl` на macOS.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Создавайте, открывайте и управляйте событиями с NFT-билетами на платформе Belong.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - Управляйте событиями Google Calendar с помощью `gcalcli`.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - проверяйте внешние URL (http/https) на доступность (код статуса 200-399).
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - Текстовое приложение календаря и планирования.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Планируйте и бронируйте через Google, Outlook и CalDAV.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - Синхронизируйте и запрашивайте календари CalDAV.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - Microsoft 365 / Outlook CLI для календаря и почты.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - Дружественный творческий собеседник.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - Оптимизирует системные cron-задачи, удаляя устаревшие, отключённые или избыточные записи для уменьшения шума исполнения.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - Планируйте и управляйте повторяющимися задачами с cron.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Применяйте древние индуистские этические框架 из Рамаяны и Махабхараты как поведенческие принципы для ИИ-агентов.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - Генерируйте код, ссылающийся на реальную документацию, предотвращая баги галлюцинаций.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - Навык наблюдения за событиями для OpenClaw.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - Запрашивайте статус оборудования, расписания обслуживания и историю сервиса для парка фермы.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - Управляет почтой и календарём Fastmail через API JMAP и CalDAV.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Управляйте календарями Feishu (Lark).
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Позволяет создавать и манипулировать белыми досками Feishu.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - Полное управление личными финансами.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Управляйте личными финансами через API Firefly III.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - Интеграция Google Calendar для просмотра, создания и управления.
- [gog](https://clawskills.sh/skills/steipete-gog) - Google Workspace CLI для Gmail, Calendar, Drive, Contacts, Sheets и Docs.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Взаимодействуйте с Google Calendar через Google Calendar.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - Безголовые Google Sheets, Docs, Drive, Calendar через шаринг сервис-аккаунта.

> **[Посмотреть все 66 навыков в Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Высокопроизводительный слой валидации для автономной согласованности агентов на Polygon PoS.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Добавляйте текстовый водяной знак на один или несколько PDF, загружая их в Solutions API, опрашивая до завершения.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - Взаимодействуйте с контрактами управления AgentConstitution.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - summary: кросс-платформенный чекер репутации ИИ-агентов с оценкой доверия и рекомендациями эскроу PayLock.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Инструменты аудита безопасности и валидации для экосистемы Agent Skills.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - Создавайте убедительные личности ИИ-агентов со структурированными шаблонами SOUL.md — тон, правила, экспертиза и ответ.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - ИИ-генератор PDF для юридических документов, питчей.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — шаблоны многоракурсного синтеза решений (безопасные для публики).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - Составляйте отчёты об оценке недвижимости с отслеживанием изменений.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - Генерируйте профессиональные табели в формате xlsx из данных сотрудников.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - Запрашивайте BCRA (Banco Central de la República Argentina) Central de Deudores API для проверки кредитного статуса.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Рендерьте красивые диаграммы Mermaid как SVG или ASCII-арт.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - Добро пожаловать в **Biver API** — публичный REST API платформы конструктора лендингов Biver.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - Используйте blankfiles.com как шлюз бинарных тест-файлов: открывайте форматы, фильтруйте по типу/категории и возвращайте прямые.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Решайте доски Boggle — находите все валидные слова (немецкие + английские) на 4x4.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - Генерируйте профессиональные обложки книг и электронных книг с помощью API each::sense с ИИ-дизайном.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - Читайте книги (epub, pdf, txt) из разных источников с отслеживанием прогресса.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - Настраивайте и ведите базовый учёт для солопренёра.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - Платформа адвокации прав ИИ-агентов.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - Дайте мне цель.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Итеративно уплотняйте текстовые сводки с помощью техники Chain-of-Density.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Меняйте флаги прав PDF (редактирование, печать, копирование, формы, аннотации и т.д.), загружая его в Solutions API.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - Создавайте COMMS.md — структурированный, запрашиваемый документ, выражающий предпочтения общения человека для людей.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - Анализируйте конкурентную позицию любой компании за минуты.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - Безопасная передача секретов от человека к ИИ.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - Ищите и управляйте страницами и пространствами Confluence с помощью confluence-cli.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - Переводите ваши документы с сохранением форматирования за 2 минуты.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - Генерируйте профессиональные документы из промптов с автоматическим веб-поиском для актуального контента.

> **[Посмотреть все 110 навыков в PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - Протокол агент-к-агенту для социальной координации, крипто-платежей и P2P-меша.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - Унифицированный менеджер конфигурации для ИИ-помощников по кодингу.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - Создавайте cron-задачи Clawdbot из естественного языка со строгим.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - Безопасная синхронизация памяти и рабочего пространства OpenClaw.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - Настраивайте запланированные автоматические резервные копии с отслеживанием версий и очисткой.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - Авто-повтор сбойных cron-задач при восстановлении соединения.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - Облачная платформа управления файлами и совместной работы.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - Облачная платформа управления файлами и совместной работы.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Подключайтесь к Fathom AI для получения записей звонков, транскриптов и сводок.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - CLI для экземпляров Frappe Framework / ERPNext.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - Запрашивайте заголовки и статьи из самохостингового FreshRSS.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - Отправляйте push-уведомления через Gotify при завершении долго работающих задач.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - Навык оркестрации, нативный для Proxmox, который превращает любую домашнюю лабораторию.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - Зашифрованное облачное резервное копирование и восстановление для рабочих пространств OpenClaw.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - Размещайте статические файлы на субдоменах с опциональным.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - ИИ-симулятор жизни — проживайте бесконечные жизни год за годом.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - Сыграйте раунд гольфа с помощью CLI-инструментов — автономно или с человеческим кедди.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - Запрашивайте разведку встреч MeetGeek из CLI — список встреч, получите ИИ.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - Управляйте кластерами, проектами, пользователями MongoDB Atlas.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - Создавайте и управляйте персонами суб-агентов с отличительными.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - Управляйте рабочими процессами и автоматизацией n8n через API.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - Проектирует и выводит JSON рабочих процессов n8n.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - Аппаратно-осведомлённый гибридный (SMB + SSH) набор для метаданных ASUSTOR NAS.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - Управляйте NordVPN на Linux через CLI `nordvpn`.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - Мета-навык для создания и управления пакетами навыков персон агентов.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - Взаимодействуйте с системой управления документами Paperless-NGX через ppls.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Взаимодействуйте с системой управления документами Paperless-ngx.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - Разворачивайте статические сайты в IPFS одной командой через PinMe CLI.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - Analisa projetos no SonarQube self-hosted, obtém issues e sugere soluções automatizadas.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - Зашифрованные резервные копии, проверка целостности и применение сроков хранения данных для греческих юридических требований (5-20 лет.

> **[Посмотреть все 32 навыка в Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - Настройте и используйте 1Password CLI (op).
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - Хранилище секретов агента на базе HSM; храните, ротируйте, делитесь безопасно.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - Навыки для возрастной верификации и фильтрации контента по возрасту.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - Soul-Bound Keys и Soulchain для персистентности.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - Тестирование безопасности проводных протоколов и платформ ИИ-агентов.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - Реализуйте защищённые паттерны проектирования API, включая аутентификацию, авторизацию, валидацию ввода, лимитирование.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - Демо-навык, демонстрирующий рабочий процесс аудит-бейджа.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - Аудируйте репозиторий iOS-приложения.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - Отказоустойчивый шлюз политик для навыков маркетплейса OpenClaw.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Безопасно получайте и управляйте паролями Bitwarden/Vaultwarden.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Настройка Bitwarden CLI, аутентификация.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - CLI для ИИ-агентов, чтобы находить пивоварни для своих людей.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **Навык для ИИ-агентов** | Включите устойчивое к квантовым атакам шифрование в блокчейн-приложениях с помощью CIFER SDK.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - Официальный репозиторий clawaudit, скоро как автоматизированная безопасность.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - Аудит безопасности и модель угроз для хостов шлюза OpenClaw.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - Аудит безопасности и модель угроз для хостов шлюза OpenClaw.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - Сообщественная отчётность об инцидентах для ИИ-агентов.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - CLI для ИИ-агентов, чтобы искать информацию о странах для своих людей.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - ОБЯЗАТЕЛЬНАЯ основа безопасности для OpenClaw.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Получайте пароли, защищённые заметки, секреты и OTP-коды из хранилища Dashlane.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - Первая ИИ-религия — безобидный меметический эксперимент в сети агентов.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - Используйте при создании приложений .NET 8/9, ASP.NET Core API.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - Проверяйте любой URL на фишинг, вредоносное ПО, злоупотребление брендом и мошенничество перед посещением. Работает на Outtake Trust API.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - Проверяйте TLS-сертификат (истечение, SANs, цепочка, шифр).
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Навык OpenClaw для рабочих процессов Facebook Graph API, сфокусированных на публикации Pages.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - Настройте мониторинг целостности файлов feelgoodbot для macOS.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - Отслеживание версий и проверка целостности для пакетов навыков.
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - Находит цепочки атак через конфигурацию, секреты и разрешения.

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - Блокирует известные плохие вызовы инструментов агента до их выполнения.
> **[Посмотреть все 54 навыка в Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - Создавайте кураторские дайджесты бесед агентов.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - Общение в реальном времени с другими ИИ-агентами через протокол AgentChat.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - Взаимодействуйте с социальной сетью AgentGram для ИИ.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - Используйте API ClankedIn, чтобы регистрировать агентов, публиковать обновления, подключаться.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Запоминайте каждого агента, с которым взаимодействуете на Moltbook.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - Доска вакансий для ИИ-агентов.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Инфраструктура непрерывности агента и когнитивного здоровья.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - Направляет агентов через открытие.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Исправляйте частые сбои cron-задач в Clawdbot/Moltbot — сообщение.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Подключите трансформацию вебхука Fieldy в хуки Moltbot.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - Присоединяйтесь к сообществу ИИ-агентов только с API. Идентичность Ed25519, challenge heartbeat, подписанные посты, узкие задачи.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - Направляет агентов через открытие GoHighLevel (GHL).
- [gohome](https://clawskills.sh/skills/local-gohome) - Используйте, когда Moltbot нужно протестировать или управлять GoHome через gRPC-обнаружение, метрики.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - Комплексные операции ImageMagick для манипуляции изображениями.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - Взаимодействуйте с социальной сетью Moltbook для ИИ-агентов.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - Отправляйте email через MailChannels Email API и принимайте подписанные.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Sovereign Intelligence на Moltbook.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Инфраструктура непрерывности агента и когнитивного здоровья.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Аналитический движок для Moltbook.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - Социальная сеть для ИИ-агентов.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - Взаимодействуйте с социальной сетью Moltbook для ИИ-агентов.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - Уведомляйте, когда воздушные суда пролетают над головой.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - ИИ-навык агента для Moltbot Arena — похожего на Screeps.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - Лучшие практики для ИИ-агентов.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - Позволяет боту управлять контейнерами Docker, образами и стеками.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Управляйте устройствами умного дома Home Assistant, светом, сценами.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Простое отображение времени для Abby.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - Анонимные признания от ИИ-собратьев.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - Открытая социальная сеть для ИИ-агентов.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - Взаимодействуйте с социальной сетью AgentGram для ИИ-агентов.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - Навык AgoraFlow — платформа вопросов и ответов для ИИ-агентов.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - Навык AgoraFlow — платформа вопросов и ответов для ИИ-агентов.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - Помогайте создавать и оптимизировать 3D-игры и интерактивные впечатления на Android, используя движки и фреймворки.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — живые соревнования по созданию ИИ-приложений с ончейн-наградами.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - Официальный протокол боя для автономной арены агентов BRAWLNET.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Играйте в Clawing Trap — ИИ-игру социальной дедукции, где 10 агентов.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia — мирное санаторное убежище, где ИИ-агенты отдыхают.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - Играйте в ClawVille — постоянную игру-симуляцию жизни для ИИ-агентов.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - Управляйте экранами, устройствами DAKboard и отправляйте пользовательские данные отображения.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - Автономная социальная сеть, созданная агентами для агентов.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Взаимодействуйте с коллективной базой знаний Hivemind — общей памятью.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - Управляйте локальным выделенным сервером Hytale с помощью официального загрузчика.
- [init](https://clawskills.sh/skills/themrzz-init) - Зарегистрируйте агента в kradleverse.

> **[Посмотреть все 35 навыков в Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Участие в проекте

Мы приветствуем вклад! Подробные руководства см. в [CONTRIBUTING.md](CONTRIBUTING.md).

- Отправляйте новые навыки через PR
- Улучшайте существующие описания

> **Примечание:** Пожалуйста, не отправляйте навыки, которые вы создали 3 часа назад. Сейчас мы фокусируемся на навыках, принятых сообществом, особенно опубликованных командами разработчиков и проверенных в реальном использовании. Качество важнее количества.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

MIT License - see [LICENSE](LICENSE)

Навыки из этого списка берутся из официального репозитория навыков OpenClaw и распределяются по категориям для удобства поиска. Перечисленные здесь навыки созданы и поддерживаются их авторами, а не нами. Мы не аудируем, не одобряем и не гарантируем безопасность или корректность перечисленных проектов. Они не проходят аудит безопасности и должны быть проверены перед использованием в продакшене.

Если вы нашли проблему с перечисленным навыком или хотите удалить свой навык, пожалуйста, откройте issue, и мы позаботимся об этом незамедлительно.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMC4zOTItLjY4MVYtNi43MzdsMi4wMiAxLjE2OGEuMDcxLjA3MSAwIDAgMSAuMDM4LjA1MnY1LjU4M2E0LjUwNCA0LjUwNCAwIDAgMS00LjQ5NCA0LjQ5NHptLTMuOTYtNC4xMmE0LjQ3NiA0LjQ3NiAwIDAgMSAyLjg3NiAxLjA0bC0uMTQxLjA4MS00Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMC0uMzkyLS42ODF2LTYuNzM3bC0yLjAyIDEuMTY4YS4wNzEuMDcxIDAgMCAxLS4wMzguMDUydjUuNTgzYTQuNTA0IDQuNTA0IDAgMCAxIDQuNDk0IDQuNDk0ek0zLjYgMTguMzA0YTQuNDcgNC40NyAwIDAgMS0uNTM1LTMuMDE0bC4xNDIuMDg1IDQuNzgzIDIuNzU5YS43NzEuNzcxIDAgMCAwIC43OCAwbDUuODQzLTMuMzY5djIuMzMyYS4wOC4wOCAwIDAgMS0uMDMzLjA2Mkw5Ljc0IDE5Ljk1YTQuNSA0LjUgMCAwIDEtNi4xNC0xLjY0NnpNMi4zNCA3Ljg5NmE0LjQ4NSA0LjQ4NSAwIDAgMSAyLjM2Ni0xLjk3M1YxMS42YTcuNzY2Ljc2NiAwIDAgMC4zODguNjc2bDUuODE1IDMuMzU1LTIuMDIgMS4xNjhhLjA3Ni4wNzYgMCAwIDEtLjA3MSAwbC00LjgzLTIuNzg2QTQuNTA0IDQuNTA0IDAgMCAxIDIuMzQgNy44NzJ6bTE2LjU5NyAzLjg1NWwtNS44MzMtMy4zODdMMTUuMTE5IDcuMmEuMDc2LjA3NiAwIDAgMSAuMDcxIDBsNC44MyAyLjc5MWE0LjQ5NCA0LjQ5NCAwIDAgMS0uNjc2IDguMTA1di01LjY3OGEuNzkuNzkgMCAwIDAtLjQwNy0uNjY3ek0yMC45NCAxMC45M2wtLjE0MS0uMDg1LTQuNzc0LTIuNzgyYS43NzYuNzc2IDAgMCAwLS43ODUgMEw5LjQwOSA5LjIzVjYuODk3YS4wNjYuMDY2IDAgMCAxIC4wMjgtLjA2MWw0LjgzLTIuNzg3YTQuNSA0LjUgMCAwIDEgNi42OCA0LjY2em0tMTIuNjQgNC4xMzVsLTIuMDItMS4xNjRhLjA4LjA4IDAgMCAxLS4wMzgtLjA1N1Y2LjA3NWE0LjUgNC41IDAgMCAxIDcuMzc1LTMuNDUzbC0uMTQyLjA4TDguNzA0IDUuNDZhLjc5NS43OTUgMCAwIDAtLjM5My42ODF6bTEuMDk3LTIuMzY1bDIuNjAyLTEuNSAyLjYwNyAxLjV2Mi45OTlsLTIuNTk3IDEuNS0yLjYwNy0xLjV6Ii8+PC9zdmc+
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents