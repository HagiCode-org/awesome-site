# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

Для оперативного общения мы используем Slack сообщества _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_; чтобы присоединиться, заполните [эту форму](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**Спонсорство:**

_Особая благодарность_

<div align="center">
<table cellpadding="5">
<tbody align="center">
<tr>
<td colspan="2">
<a href="https://bit.ly/awesome-go-digitalocean">
<img src="https://avelino.run/sponsors/do_logo_horizontal_blue-210.png" width="200" alt="Digital Ocean">
</a>
</td>
</tr>
</tbody>
</table>
</div>

**У Awesome Go нет ежемесячной платы**_, но у нас есть сотрудники, которые **усердно трудятся**, чтобы проект продолжал работать. На собранные средства мы можем вознаградить усилия каждого участника! Вы можете посмотреть, как мы рассчитываем выплаты и распределяем средства, поскольку эти данные открыты для всего сообщества. Хотите поддержать проект? Нажмите [здесь](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)._

> Тщательно отобранный список замечательных фреймворков, библиотек и программ на Go. Вдохновлён проектом [awesome-python](https://github.com/vinta/awesome-python).

**Участие в проекте:**

Сначала, пожалуйста, бегло ознакомьтесь с [руководством для участников](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md). Спасибо всем [участникам](https://github.com/avelino/awesome-go/graphs/contributors) — вы великолепны!

> _Если вы видите здесь пакет или проект, который больше не поддерживается или плохо подходит, пожалуйста, отправьте пул-реквест, чтобы улучшить этот файл. Спасибо!_

## Содержание

<details>
<summary>Развернуть содержание</summary>

- [Awesome Go](#awesome-go)
  - [Содержание](#contents)
  - [Модель акторов](#actor-model)
  - [Искусственный интеллект](#artificial-intelligence)
  - [Аудио и музыка](#audio-and-music)
  - [Аутентификация и авторизация](#authentication-and-authorization)
  - [Блокчейн](#blockchain)
  - [Создание ботов](#bot-building)
  - [Автоматизация сборки](#build-automation)
  - [Командная строка](#command-line)
    - [Продвинутые консольные интерфейсы](#advanced-console-uis)
    - [Стандартный CLI](#standard-cli)
  - [Конфигурация](#configuration)
  - [Непрерывная интеграция](#continuous-integration)
  - [Препроцессоры CSS](#css-preprocessors)
  - [Фреймворки интеграции данных](#data-integration-frameworks)
  - [Структуры данных и алгоритмы](#data-structures-and-algorithms)
    - [Упаковка битов и сжатие](#bit-packing-and-compression)
    - [Битовые множества](#bit-sets)
    - [Фильтры Блума и кукушкины фильтры](#bloom-and-cuckoo-filters)
    - [Коллекции структур данных и алгоритмов](#data-structure-and-algorithm-collections)
    - [Итераторы](#iterators)
    - [Отображения](#maps)
    - [Различные структуры данных и алгоритмы](#miscellaneous-data-structures-and-algorithms)
    - [Типы, допускающие null](#nullable-types)
    - [Очереди](#queues)
    - [Множества](#sets)
    - [Анализ текста](#text-analysis)
    - [Деревья](#trees)
    - [Конвейеры](#pipes)
  - [Базы данных](#database)
    - [Кеши](#caches)
    - [Базы данных, реализованные на Go](#databases-implemented-in-go)
    - [Миграция схем баз данных](#database-schema-migration)
    - [Инструменты для баз данных](#database-tools)
    - [Построители SQL-запросов](#sql-query-builders)
  - [Драйверы баз данных](#database-drivers)
    - [Интерфейсы к нескольким бэкендам](#interfaces-to-multiple-backends)
    - [Драйверы реляционных баз данных](#relational-database-drivers)
    - [Драйверы NoSQL-баз данных](#nosql-database-drivers)
    - [Поисковые и аналитические базы данных](#search-and-analytic-databases)
  - [Дата и время](#date-and-time)
  - [Распределённые системы](#distributed-systems)
  - [Динамический DNS](#dynamic-dns)
  - [Электронная почта](#email)
  - [Встраиваемые скриптовые языки](#embeddable-scripting-languages)
  - [Обработка ошибок](#error-handling)
  - [Работа с файлами](#file-handling)
  - [Финансы](#financial)
  - [Формы](#forms)
  - [Функциональное программирование](#functional)
  - [Разработка игр](#game-development)
  - [Генераторы](#generators)
  - [Геоданные](#geographic)
  - [Компиляторы Go](#go-compilers)
  - [Горутины](#goroutines)
  - [Графический интерфейс (GUI)](#gui)
  - [Оборудование](#hardware)
  - [Изображения](#images)
  - [IoT (интернет вещей)](#iot-internet-of-things)
  - [Планировщики заданий](#job-scheduler)
  - [JSON](#json)
  - [Логирование](#logging)
  - [Машинное обучение](#machine-learning)
  - [Обмен сообщениями](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [Разное](#miscellaneous)
    - [Внедрение зависимостей](#dependency-injection)
    - [Структура проекта](#project-layout)
    - [Строки](#strings)
    - [Без категории](#uncategorized)
  - [Обработка естественного языка](#natural-language-processing)
    - [Определение языка](#language-detection)
    - [Морфологические анализаторы](#morphological-analyzers)
    - [Генераторы slug](#slugifiers)
    - [Токенизаторы](#tokenizers)
    - [Перевод](#translation)
    - [Транслитерация](#transliteration)
  - [Сети](#networking)
    - [HTTP-клиенты](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [Управление пакетами](#package-management)
  - [Производительность](#performance)
  - [Языки запросов](#query-language)
  - [Рефлексия](#reflection)
  - [Встраивание ресурсов](#resource-embedding)
  - [Наука и анализ данных](#science-and-data-analysis)
  - [Безопасность](#security)
  - [Сериализация](#serialization)
  - [Серверные приложения](#server-applications)
  - [Потоковая обработка](#stream-processing)
  - [Шаблонизаторы](#template-engines)
  - [Тестирование](#testing)
    - [Фреймворки тестирования](#testing-frameworks)
    - [Моки](#mock)
    - [Фаззинг и дельта-отладка/сокращение/минимизация](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium и инструменты управления браузером](#selenium-and-browser-control-tools)
    - [Внедрение сбоев](#fail-injection)
  - [Обработка текста](#text-processing)
    - [Форматировщики](#formatters)
    - [Языки разметки](#markup-languages)
    - [Парсеры/кодировщики/декодеры](#parsersencodersdecoders)
    - [Регулярные выражения](#regular-expressions)
    - [Санирование](#sanitation)
    - [Скраперы](#scrapers)
    - [RSS](#rss)
    - [Утилиты/разное](#utilitymiscellaneous)
  - [Сторонние API](#third-party-apis)
  - [Утилиты](#utilities)
  - [UUID](#uuid)
  - [Валидация](#validation)
  - [Системы контроля версий](#version-control)
  - [Видео](#video)
  - [Веб-фреймворки](#web-frameworks)
    - [Промежуточное ПО (middleware)](#middlewares)
      - [Собственно middleware](#actual-middlewares)
      - [Библиотеки для создания HTTP-middleware](#libraries-for-creating-http-middlewares)
    - [Маршрутизаторы](#routers)
  - [WebAssembly](#webassembly)
  - [Серверы вебхуков](#webhooks-server)
  - [Windows](#windows)
  - [Фреймворки рабочих процессов](#workflow-frameworks)
  - [XML](#xml)
  - [Нулевое доверие (Zero Trust)](#zero-trust)
  - [Анализ кода](#code-analysis)
  - [Плагины для редакторов](#editor-plugins)
  - [Инструменты go generate](#go-generate-tools)
  - [Инструменты Go](#go-tools)
  - [Программные пакеты](#software-packages)
    - [Инструменты DevOps](#devops-tools)
    - [Другое программное обеспечение](#other-software)
- [Ресурсы](#resources)
  - [Бенчмарки](#benchmarks)
  - [Конференции](#conferences)
  - [Электронные книги](#e-books)
    - [Платные электронные книги](#e-books-for-purchase)
    - [Бесплатные электронные книги](#free-e-books)
  - [Гоферы](#gophers)
  - [Митапы](#meetups)
  - [Руководства по стилю](#style-guides)
  - [Социальные сети](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Веб-сайты](#websites)
    - [Учебные руководства](#tutorials)
    - [Учебные траектории](#guided-learning)
  - [Участие в проекте](#contribution)
  - [Лицензия](#license)

**[⬆ Наверх](#contents)**



</details>

## Модель акторов

_Библиотеки для создания программ на основе акторов._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - Библиотека управления потоком выполнения на основе графов (АОП, акторы, конечные автоматы).
- [Ergo](https://github.com/ergo-services/ergo) - Фреймворк на основе акторов с сетевой прозрачностью для создания событийно-ориентированной архитектуры на Golang. Вдохновлён Erlang.
- [Goakt](https://github.com/Tochemey/goakt) - Быстрый распределённый фреймворк акторов для Golang, использующий protocol buffers в качестве сообщений.
- [Hollywood](https://github.com/anthdm/hollywood) - Невероятно быстрый и лёгкий движок акторов, написанный на Golang.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Распределённые акторы для Go, C# и Java/Kotlin.

**[⬆ Наверх](#contents)**

## Искусственный интеллект

_Библиотеки для создания программ, использующих ИИ._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - ИИ-шлюз для маршрутизации, защиты и мониторинга трафика LLM более чем 10 провайдеров. OpenAI-совместимый API, плагины политик на WASM, канареечные развёртывания, панель мониторинга в реальном времени.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - Среда выполнения ИИ-агентов с event sourcing, восстановлением из контрольных точек и гарантией выполнения «не более одного раза» (At-Most-Once). Написана на Go.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Фреймворк для создания ИИ-агентов с состоянием на Go.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Сервер Model Context Protocol (MCP), оборачивающий Antigravity CLI для выполнения промптов и взаимных ревью.
- [ai](https://github.com/joakimcarlsson/ai) - Набор инструментов Go для создания ИИ-агентов и приложений с поддержкой нескольких провайдеров: единый интерфейс для LLM, эмбеддингов, вызова инструментов и интеграции с MCP.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - OpenAI-совместимый шлюз LLM, маршрутизирующий запросы между 30 провайдерами, с резервным переключением, ограничением частоты запросов, бюджетами, защитными ограничениями (guardrails) и наблюдаемостью.
- [chromem-go](https://github.com/philippgille/chromem-go) - Встраиваемая векторная база данных для Go с интерфейсом в стиле Chroma и без сторонних зависимостей. Работает в памяти с возможностью сохранения на диск.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Библиотека Go для управления неинтерактивным режимом промптов Claude Code CLI из программ на Go.
- [crewai-go](https://github.com/rhgs/crewai-go) - Идиоматичный порт CrewAI (оркестрация множества агентов) на Go. Без зависимостей, только стандартная библиотека.
- [Cynative](https://github.com/cynative/cynative) - Фреймворк для создания ИИ-агентов для инженерии безопасности на Go. Только чтение по своей конструкции, встроенная песочница, 45 шаблонов агентов для глубокого исследования AWS, GCP, Azure, K8s, GitHub и GitLab.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Официальный клиентский SDK на Go для самостоятельно размещаемого сервера памяти агентов Dakera, предоставляющий типизированные интерфейсы для сохранения и извлечения памяти, управления сессиями, операций с пространствами имён и настройки затухания.
- [fun](https://gitlab.com/tozd/go/fun) - Самый простой, но мощный способ использовать большие языковые модели (LLM) в Go.
- [goai](https://github.com/zendev-sh/goai) - Go SDK для создания ИИ-приложений. Один SDK — более 20 провайдеров. Вдохновлён Vercel AI SDK.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - ИИ-шлюз, предоставляющий единый OpenAI-совместимый API для OpenAI, Anthropic, Gemini, Groq, xAI, Ollama и других провайдеров, с маршрутизацией, учётом использования, ограничениями частоты запросов и защитными ограничениями (guardrails).
- [hotplex](https://github.com/hrygo/hotplex) - Движок среды выполнения ИИ-агентов с долгоживущими сессиями для Claude Code, OpenCode, pi-mono и других CLI-инструментов ИИ. Обеспечивает полнодуплексную потоковую передачу, интеграции с множеством платформ и безопасную песочницу.
- [jargo](https://github.com/gojargo/jargo) - Фреймворк для создания голосовых ИИ-агентов реального времени поверх WebRTC, объединяющий распознавание речи, LLM и синтез речи в потоковый конвейер.
- [keen-code](https://github.com/mochow13/keen-code) - Экономно расходующий контекст ИИ-агент для программирования в терминале. Не зависит от провайдера, поддерживает MCP, Agent Skills, субагентов и многое другое. Поставляется с простым и понятным TUI.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo — фреймворк для разработки приложений на основе языковых моделей.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - Библиотека Go для создания многоакторных приложений с состоянием на базе LLM, построенная на концепции LangGraph, с множеством встроенных архитектур агентов.
- [llm-box](https://github.com/alib8b8/llm-box) - Терминальный движок ИИ-процессов с конвейерами на YAML, более чем 20 провайдерами LLM (DeepSeek, Qwen, GLM, Mistral и др.) и TUI для управления процессами.
- [LocalAI](https://github.com/mudler/LocalAI) - Альтернатива OpenAI с открытым исходным кодом для самостоятельного размещения ИИ-моделей.
- [localaik](https://github.com/harshaneel/localaik) - Локальная эмуляция API OpenAI и Gemini в стиле LocalStack; один Docker-контейнер, бэкенд на llama.cpp + Gemma 3.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Реализация Model Context Protocol на Go для создания серверов и клиентов MCP на Go.
- [Ollama](https://github.com/jmorganca/ollama) - Локальный запуск больших языковых моделей.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Управление группами Ollama, балансировка нагрузки и отказоустойчивое переключение между ними.
- [otellix](https://github.com/oluwajubelo1/otellix) - Нативная для OpenTelemetry наблюдаемость LLM и бюджетные ограничения для продакшен-сред с ограниченными затратами.
- [routex](https://github.com/Ad3bay0c/routex) - Управляемая через YAML мультиагентная среда выполнения ИИ для Go с супервизией в стиле Erlang, поддержкой серверов инструментов MCP и CLI.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - Смысловой поиск по PDF, Markdown, DOCX, исходному коду и другим типам файлов с использованием генеративных моделей эмбеддингов для векторизации файлов в векторную базу данных.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - CLI, который сканирует журналы сессий ИИ-агентов, чтобы выявлять и безопасно изолировать неиспользуемые навыки, серверы MCP и агентов в Claude Code, Codex CLI, Hermes, OpenCode, Cursor и OpenClaw.
- [Smeldr](https://github.com/Smeldr/core) - ИИ-ориентированный бэкенд контента с типизированным управлением жизненным циклом, нативными инструментами MCP для каждого типа контента и без зависимостей времени выполнения.
- [snip](https://github.com/edouard-claude/snip) - CLI-прокси, сокращающий расход токенов LLM на 60–90% с помощью декларативных YAML-фильтров. Прозрачная замена для Claude Code, Cursor, Copilot и Gemini. Альтернатива rtk на Go.
- [thermal](https://github.com/jadmadi/thermal) - Тепловая карта вклада в терминале, трекер серий и рейтинг по токенам для ИИ-ассистентов программирования.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - Фреймворк для создания мультиагентных систем на основе LLM.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - Сервер MCP, предоставляющий ИИ-ассистентам веб-поиск, извлечение контента и исследования по множеству источников. Один бинарный файл, 5 поисковых провайдеров с переключением через circuit breaker, 4-уровневый конвейер скрапинга.
- [zenflow](https://github.com/zendev-sh/zenflow) - Движок оркестрации нескольких агентов и рабочих процессов. Декларативные процессы на YAML, координатор на базе LLM с почтовыми ящиками по схеме «звезда», безопасная от гонок доставка. Один YAML-файл, один бинарный файл Go. Работает с любым провайдером, поддерживаемым goai.

**[⬆ Наверх](#contents)**

## Аудио и музыка

_Библиотеки для обработки аудио и музыки._

- [beep](https://github.com/gopxl/beep) - Простая библиотека для воспроизведения и обработки звука.
- [flac](https://github.com/mewkiz/flac) - Нативный кодировщик/декодер FLAC на Go с поддержкой потоков FLAC.
- [gaad](https://github.com/Comcast/gaad) - Нативный парсер битового потока AAC на Go.
- [go-aac](https://github.com/tphakala/go-aac) - Кодировщик и декодер AAC-LC на чистом Go, портированный из FFmpeg.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - Высококачественный передискретизатор звука на чистом Go с ускорением SIMD.
- [go-flac](https://github.com/tphakala/go-flac) - Нативный кодировщик и декодер FLAC на Go с ускорением SIMD.
- [go-mpris](https://github.com/leberKleber/go-mpris) - Клиент для D-Bus-интерфейсов MPRIS.
- [go-opus](https://github.com/tphakala/go-opus) - Нативная реализация аудиокодека Opus (RFC 6716) на Go с декодером, соответствующим RFC.
- [go-resample](https://github.com/gojargo/go-resample) - Преобразователь частоты дискретизации звука на чистом Go (без cgo) с конвертерами sinc, линейной интерполяции и удержания нулевого порядка.
- [go-wav](https://github.com/tphakala/go-wav) - Чтение и запись WAV/RIFF на чистом Go с поддержкой RF64 и BW64 для файлов больше 4 ГиБ.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - Нативная библиотека обработки звука на Go.
- [gocue](https://github.com/iSerganov/gocue) - CLI для анализа аудио, который определяет точки cue-in, cue-out и наложения, измеряет громкость по EBU R128 и выдаёт JSON для Liquidsoap.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Привязки libsamplerate для Go.
- [id3v2](https://github.com/bogem/id3v2) - Библиотека декодирования и кодирования ID3 для Go.
- [malgo](https://github.com/gen2brain/malgo) - Мини-библиотека для работы со звуком.
- [minimp3](https://github.com/tosone/minimp3) - Лёгкая библиотека для декодирования MP3.
- [music-theory](https://github.com/go-music-theory/music-theory) - Модели теории музыки на Go.
- [Oto](https://github.com/hajimehoshi/oto) - Низкоуровневая библиотека для воспроизведения звука на множестве платформ.
- [PortAudio](https://github.com/gordonklaus/portaudio) - Привязки Go к библиотеке аудиоввода-вывода PortAudio.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - Голосовые ИИ-агенты с конфигурацией в JSON, конвейеры STT → LLM → TTS поверх WebSocket и WebRTC.

**[⬆ Наверх](#contents)**

## Аутентификация и авторизация

_Библиотеки для реализации аутентификации и авторизации._

- [authboss](https://github.com/volatiletech/authboss) - Модульная система аутентификации для веба. Она старается избавить от максимального количества шаблонного кода и «сложных вещей», чтобы каждый раз, начиная новый веб-проект на Go, вы могли подключить её, настроить и приступить к созданию приложения, не разрабатывая систему аутентификации заново.
- [authgate](https://github.com/go-authgate/authgate) - Лёгкий сервер авторизации OAuth 2.0 с поддержкой Device Authorization Grant ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), Authorization Code Flow с PKCE ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)) и Client Credentials Grant для межмашинной аутентификации.
- [branca](https://github.com/essentialkaos/branca) - [Реализация спецификации](https://github.com/tuupola/branca-spec) токенов branca для Golang 1.15+.
- [casbin](https://github.com/hsluoyz/casbin) - Библиотека авторизации с поддержкой моделей управления доступом, таких как ACL, RBAC и ABAC.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - Парсер файлов формата cookies.txt.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - Утилиты для аутентификации в GitHub: генерация и использование токенов GitHub-приложений и их установок.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian — библиотека для Golang, предоставляющая простой, чистый и идиоматичный способ создания мощной современной аутентификации для API и веба с поддержкой LDAP, Basic, Bearer token и аутентификации на основе сертификатов.
- [go-iam](https://github.com/melvinodsa/go-iam) - Система управления идентификацией и доступом, ориентированная на разработчиков, с простым интерфейсом.
- [go-jose](https://github.com/go-jose/go-jose) - Достаточно полная реализация спецификаций рабочей группы JOSE: JSON Web Token, JSON Web Signatures и JSON Web Encryption.
- [go-jwt](https://github.com/deatil/go-jwt) - Библиотека JWT (JSON Web Token) для Go.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - Пакет JWT-аутентификации, предоставляющий токены доступа и токены обновления с фингерпринтингом, хранением в Redis и автоматическим обновлением.
- [goiabada](https://github.com/leodip/goiabada) - Сервер аутентификации и авторизации с открытым исходным кодом, поддерживающий OAuth2 и OpenID Connect.
- [gologin](https://github.com/dghubble/gologin) - Цепочечные обработчики для входа через провайдеров аутентификации OAuth1 и OAuth2.
- [gorbac](https://github.com/mikespook/gorbac) - Лёгкая реализация управления доступом на основе ролей (RBAC) на Golang.
- [gosession](https://github.com/Kwynto/gosession) - Быстрые сессии для net/http на Go. Этот пакет — возможно, лучшая реализация механизма сессий или, по крайней мере, стремится ею стать.
- [goth](https://github.com/markbates/goth) - Простой, чистый и идиоматичный способ использования OAuth и OAuth2. Поддерживает множество провайдеров «из коробки».
- [jeff](https://github.com/abraithwaite/jeff) - Простое, гибкое, безопасное и идиоматичное управление веб-сессиями с подключаемыми бэкендами.
- [jwt](https://github.com/pascaldekloe/jwt) - Лёгкая библиотека JSON Web Token (JWT).
- [jwt](https://github.com/cristalhq/jwt) - Безопасные, простые и быстрые JSON Web Tokens для Go.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - JWT-middleware для HTTP-серверов на Golang с множеством параметров настройки.
- [jwt-go](https://github.com/golang-jwt/jwt) - Полнофункциональная реализация JSON Web Tokens (JWT). Библиотека поддерживает разбор и проверку, а также генерацию и подпись JWT.
- [jwx](https://github.com/lestrrat-go/jwx) - Модуль Go, реализующий различные технологии JWx (JWA/JWE/JWK/JWS/JWT, также известные как JOSE).
- [keto](https://github.com/ory/keto) - Реализация «Zanzibar: Google's Consistent, Global Authorization System» с открытым исходным кодом (на Go). Включает gRPC и REST API, newSQL и простой, детализированный язык описания разрешений. Поддерживает ACL, RBAC и другие модели доступа.
- [loginsrv](https://github.com/tarent/loginsrv) - Микросервис входа через JWT с подключаемыми бэкендами, такими как OAuth2 (Github), htpasswd, osiam.
- [melange](https://github.com/pthm/melange) - Компилирует схемы авторизации OpenFGA в функции PL/pgSQL, которые выполняют детальные проверки управления доступом на основе отношений внутри PostgreSQL.
- [oauth2](https://github.com/golang/oauth2) - Преемник goauth2. Универсальный пакет OAuth 2.0 с поддержкой JWT, Google APIs, Compute Engine и App Engine.
- [oidc](https://github.com/zitadel/oidc) - Простая в использовании библиотека клиента и сервера OpenID Connect, написанная для Go и сертифицированная OpenID Foundation.
- [openfga](https://github.com/openfga/openfga) - Реализация детальной авторизации на основе статьи «Zanzibar: Google's Consistent, Global Authorization System». При поддержке [CNCF](https://www.cncf.io/).
- [osin](https://github.com/openshift/osin) - Библиотека сервера OAuth2 для Golang.
- [otpgen](https://github.com/grijul/otpgen) - Библиотека для генерации кодов TOTP/HOTP.
- [otpgo](https://github.com/jltorresm/otpgo) - Библиотека одноразовых паролей на основе времени (TOTP) и на основе HMAC (HOTP) для Go.
- [paseto](https://github.com/o1egl/paseto) - Реализация платформенно-независимых токенов безопасности (PASETO) на Golang.
- [permissions](https://github.com/xyproto/permissions) - Библиотека для отслеживания пользователей, состояний входа и разрешений. Использует защищённые cookie и bcrypt.
- [scope](https://github.com/SonicRoshan/scope) - Простое управление областями доступа (scopes) OAuth2 в Go.
- [scs](https://github.com/alexedwards/scs) - Менеджер сессий для HTTP-серверов.
- [securecookie](https://github.com/chmike/securecookie) - Эффективное кодирование и декодирование защищённых cookie.
- [session](https://github.com/icza/session) - Управление сессиями на Go для веб-серверов (включая поддержку Google App Engine — GAE).
- [sessions](https://github.com/adam-hanna/sessions) - Предельно простой, высокопроизводительный и гибко настраиваемый сервис сессий для HTTP-серверов на Go.
- [sessionup](https://github.com/swithek/sessionup) - Простой, но эффективный пакет для управления HTTP-сессиями и идентификации.
- [sjwt](https://github.com/brianvoe/sjwt) - Простой генератор и парсер JWT.
- [spicedb](https://github.com/authzed/spicedb) - База данных, вдохновлённая Zanzibar, обеспечивающая детальную авторизацию.
- [x509proxy](https://github.com/vkuznet/x509proxy) - Библиотека для работы с прокси-сертификатами X509.

**[⬆ Наверх](#contents)**

## Блокчейн

_Инструменты для создания блокчейнов._

- [cometbft](https://github.com/cometbft/cometbft) - Распределённый детерминированный движок репликации конечных автоматов, устойчивый к византийским сбоям. Является форком Tendermint Core и реализует алгоритм консенсуса Tendermint.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Фреймворк для создания публичных блокчейнов в экосистеме Cosmos.
- [gno](https://github.com/gnolang/gno) - Комплексный набор смарт-контрактов, созданный на Golang и Gnolang — детерминированном варианте Go, специально разработанном для блокчейнов.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Официальная реализация протокола Ethereum на Go.
- [gosemble](https://github.com/LimeChain/gosemble) - Фреймворк на Go для создания сред выполнения, совместимых с Polkadot/Substrate.
- [gossamer](https://github.com/ChainSafe/gossamer) - Реализация Polkadot Host на Go.
- [kubo](https://github.com/ipfs/kubo) - Реализация IPFS на Go. Предоставляет контентно-адресуемое хранилище, которое можно использовать для децентрализованного хранения данных в DApps. Основана на протоколе IPFS.
- [lnd](https://github.com/lightningnetwork/lnd) - Полная реализация узла Lightning Network.
- [nview](https://github.com/blinklabs-io/nview) - Инструмент локального мониторинга узла Cardano. Это TUI (текстовый пользовательский интерфейс), рассчитанный на большинство экранов.
- [pactus](https://github.com/pactus-project/pactus) - Реализация полного узла блокчейна Pactus на Go.
- [solana-go](https://github.com/gagliardetto/solana-go) - Библиотека Go для взаимодействия с интерфейсами Solana JSON RPC и WebSocket.
- [tendermint](https://github.com/tendermint/tendermint) - Высокопроизводительное промежуточное ПО для превращения конечного автомата, написанного на любом языке программирования, в реплицируемый конечный автомат, устойчивый к византийским сбоям, с использованием консенсуса Tendermint и блокчейн-протоколов.
- [tronlib](https://github.com/kslamph/tronlib) - Комплексный, готовый к продакшену Go SDK для взаимодействия с блокчейном TRON с поддержкой токенов TRC20.

**[⬆ Наверх](#contents)**

## Создание ботов

_Библиотеки для создания ботов и работы с ними._

- [arikawa](https://github.com/diamondburned/arikawa) - Библиотека и фреймворк для Discord API.
- [bot](https://github.com/go-telegram/bot) - Библиотека для Telegram-ботов без зависимостей с дополнительными компонентами интерфейса.
- [echotron](https://github.com/NicoNex/echotron) - Элегантная и конкурентная библиотека для Telegram-ботов на Go.
- [go-joe](https://joe-bot.net) - Универсальная библиотека для ботов, вдохновлённая Hubot, но написанная на Go.
- [go-sarah](https://github.com/oklahomer/go-sarah) - Фреймворк для создания ботов для нужных чат-сервисов, включая LINE, Slack, Gitter и другие.
- [go-tg](https://github.com/mr-linch/go-tg) - Клиентская библиотека Go для доступа к Telegram Bot API, сгенерированная по официальной документации, со всем необходимым для создания сложных ботов.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - Библиотека для написания ботов для чата twitch.tv
- [micha](https://github.com/onrik/micha) - Библиотека Go для API Telegram-ботов.
- [slack-bot](https://github.com/innogames/slack-bot) - Готовый к использованию Slack-бот для ленивых разработчиков: пользовательские команды, Jenkins, Jira, Bitbucket, Github...
- [slacker](https://github.com/slack-io/slacker) - Простой в использовании фреймворк для создания Slack-ботов.
- [telebot](https://github.com/tucnak/telebot) - Фреймворк для Telegram-ботов, написанный на Go.
- [teleflow](https://github.com/kslamph/teleflow) - Простой типобезопасный фреймворк для Telegram-ботов с текучими сценариями и автоматическим управлением состоянием.
- [telego](https://github.com/mymmrac/telego) - Библиотека Telegram Bot API для Golang с полной взаимно-однозначной реализацией API.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Простой и понятный клиент для Telegram-ботов.
- [TG](https://github.com/enetx/tg) - Фреймворк для Telegram-ботов на Go.
- [wayback](https://github.com/wabarc/wayback) - Бот для Telegram, Mastodon, Slack и других платформ обмена сообщениями, архивирующий веб-страницы.
- [ymsdk](https://github.com/rekurt/ymsdk) - Go SDK для Bot API Яндекс Мессенджера с типобезопасными моделями, автоматическими повторными попытками и обработкой ограничений частоты запросов.
   - [Wisp](https://github.com/wisp-trading/wisp) - Событийно-ориентированный торговый фреймворк для Go. Спот, бессрочные фьючерсы, рынки предсказаний. Поддержка нескольких бирж (Bybit, Hyperliquid, Polymarket).

**[⬆ Наверх](#contents)**

## Автоматизация сборки

_Библиотеки и инструменты для автоматизации сборки._

- [1build](https://github.com/gopinath-langote/1build) - Инструмент командной строки для беспроблемного управления командами, специфичными для проекта.
- [air](https://github.com/cosmtrek/air) - Air — живая перезагрузка для приложений на Go.
- [anko](https://github.com/GuilhermeCaruso/anko) - Простой наблюдатель за приложениями для множества языков программирования.
- [gaper](https://github.com/maxclaus/gaper) - Собирает и перезапускает проект на Go при его падении или изменении отслеживаемых файлов.
- [gilbert](https://go-gilbert.github.io) - Система сборки и запуска задач для проектов на Go.
- [gob](https://github.com/kcmvp/gob) - Инструмент сборки для проектов на Go в духе [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/).
- [goyek](https://github.com/goyek/goyek) - Создание конвейеров сборки на Go.
- [mage](https://github.com/magefile/mage) - Mage — инструмент сборки в стиле make/rake, использующий Go.
- [mmake](https://github.com/tj/mmake) - Современный Make.
- [realize](https://github.com/tockins/realize) - Система сборки на Go с отслеживанием файлов и живой перезагрузкой. Запуск, сборка и отслеживание изменений файлов с настраиваемыми путями.
- [rex](https://github.com/rexrun-dev/rex) - Универсальный запускатель проектов без настройки. Определяет ваш стек (Go, Node, Python, Rust, PHP, Zig, Elixir) и запускает нужную команду.
- [Task](https://github.com/go-task/task) - Простая альтернатива «Make».
- [taskctl](https://github.com/taskctl/taskctl) - Конкурентный запускатель задач.
- [xc](https://github.com/joerdav/xc) - Запускатель задач с задачами, определёнными в README.md, — исполняемый Markdown.

**[⬆ Наверх](#contents)**

## Командная строка

### Продвинутые консольные интерфейсы

_Библиотеки для создания консольных приложений и консольных пользовательских интерфейсов._

- [asciigraph](https://github.com/guptarohit/asciigraph) - Пакет Go для создания лёгких ASCII-графиков ╭┈╯ в приложениях командной строки без каких-либо других зависимостей.
- [aurora](https://github.com/logrusorgru/aurora) - Цвета ANSI для терминала с поддержкой fmt.Printf/Sprintf.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - Отрисовка гибко настраиваемых рамок в терминале.
- [bubble-table](https://github.com/Evertras/bubble-table) - Интерактивный компонент таблицы для bubbletea.
- [bubbles](https://github.com/charmbracelet/bubbles) - Компоненты TUI для bubbletea.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - Фреймворк Go для создания терминальных приложений, основанный на архитектуре Elm (The Elm Architecture).
- [chroma16](https://github.com/arceus-7/chroma16) - Генерация гармоничной 16-цветной палитры терминала из одного исходного цвета или строки.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Инструмент динамического шаблонизирования файлов конфигурации для манифестов Kubernetes или обычных конфигурационных файлов.
- [ctc](https://github.com/wzshiming/ctc) - Неинвазивная кроссплатформенная библиотека цветов для терминала, не требующая изменения метода Print.
- [fx](https://github.com/antonmedv/fx) - Просмотрщик и обработчик JSON для терминала.
- [go-ataman](https://github.com/workanator/go-ataman) - Библиотека Go для отрисовки цветных текстовых шаблонов ANSI в терминалах.
- [go-colorable](https://github.com/mattn/go-colorable) - Writer с поддержкой цветов для Windows.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - Библиотека Go для цветного вывода в терминалах.
- [go-isatty](https://github.com/mattn/go-isatty) - isatty для Golang.
- [go-palette](https://github.com/abusomani/go-palette) - Библиотека Go, предоставляющая элегантные и удобные определения стилей с помощью цветов ANSI. Полностью совместима с [библиотекой fmt](https://pkg.go.dev/fmt) и оборачивает её для красивого оформления вывода в терминале.
- [go-prompt](https://github.com/c-bata/go-prompt) - Библиотека для создания мощных интерактивных приглашений командной строки, вдохновлённая [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit).
- [go-tui](https://github.com/grindlemire/go-tui) - Декларативный фреймворк терминальных интерфейсов с шаблонами в стиле templ, раскладкой flexbox и языковым сервером для поддержки в редакторах.
- [gocui](https://github.com/jroimartin/gocui) - Минималистичная библиотека Go для создания консольных пользовательских интерфейсов.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - Стилизация текста в терминале.
- [gookit/color](https://github.com/gookit/color) - Библиотека для цветной отрисовки в терминале с поддержкой вывода в 16 цветах, 256 цветах и RGB, совместимая с Windows.
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf генерирует продуманную заготовку проекта на Go продакшен-качества через интерактивный CLI. Хватит копировать каркасный код из проекта в проект.
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI для просмотра, сравнения и редактирования файлов .env.
- [lazyteams](https://github.com/agmonetti/lazyteams) - Терминальный пользовательский интерфейс для Microsoft Teams с управлением с клавиатуры.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - Декларативное определение стилей для цвета, форматирования и раскладки в терминале.
- [loom](https://github.com/loom-go/loom) - Фреймворк реактивных компонентов на основе сигналов для создания TUI.
- [marker](https://github.com/cyucelen/marker) - Самый простой способ находить и выделять строки для цветного вывода в терминал.
- [mpb](https://github.com/vbauerster/mpb) - Множественные индикаторы выполнения для терминальных приложений.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Высокопроизводительный TUI-фреймворк с архитектурой в духе Elm, безупречной отрисовкой Unicode и системой событий без аллокаций.
- [progressbar](https://github.com/schollz/progressbar) - Базовый потокобезопасный индикатор выполнения, работающий в любой ОС.
- [pterm](https://github.com/pterm/pterm) - Библиотека для украшения консольного вывода на любой платформе с множеством комбинируемых компонентов.
- [simpletable](https://github.com/alexeyco/simpletable) - Простые таблицы в терминале на Go.
- [spinner](https://github.com/briandowns/spinner) - Пакет Go для простого добавления индикатора-спиннера в терминал с настройками.
- [tabby](https://github.com/cheynewallace/tabby) - Крошечная библиотека для очень простых таблиц на Golang.
- [table](https://github.com/tomlazar/table) - Небольшая библиотека для цветных таблиц в терминале.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox — библиотека для создания кроссплатформенных текстовых интерфейсов.
- [termdash](https://github.com/mum4k/termdash) - Терминальная панель мониторинга на Go, основанная на **termbox-go** и вдохновлённая [termui](https://github.com/gizak/termui).
- [termenv](https://github.com/muesli/termenv) - Расширенная поддержка стилей и цветов ANSI для ваших терминальных приложений.
- [termui](https://github.com/gizak/termui) - Терминальная панель мониторинга на Go, основанная на **termbox-go** и вдохновлённая [blessed-contrib](https://github.com/yaronn/blessed-contrib).
- [uilive](https://github.com/gosuri/uilive) - Библиотека для обновления вывода терминала в реальном времени.
- [uiprogress](https://github.com/gosuri/uiprogress) - Гибкая библиотека для отрисовки индикаторов выполнения в терминальных приложениях.
- [uitable](https://github.com/gosuri/uitable) - Библиотека для улучшения читаемости табличных данных в терминальных приложениях.
- [vhs](https://github.com/charmbracelet/vhs) - Ваш домашний видеомагнитофон для CLI — генерирует GIF-анимации терминала из кода для документации и руководств.
- [yacspin](https://github.com/theckman/yacspin) - Ещё один пакет CLI-спиннеров для работы с индикаторами-спиннерами в терминале.

**[⬆ Наверх](#contents)**

### Стандартный CLI

_Библиотеки для создания стандартных или простых приложений командной строки._

- [acmd](https://github.com/cristalhq/acmd) - Простой, полезный и продуманный пакет CLI на Go.
- [argparse](https://github.com/akamensky/argparse) - Парсер аргументов командной строки, вдохновлённый модулем argparse из Python.
- [argv](https://github.com/cosiner/argv) - Библиотека Go для разбиения строки командной строки на массив аргументов с использованием синтаксиса bash.
- [boa](https://github.com/GiGurra/boa) - Декларативные флаги, переменные окружения, валидация и файлы конфигурации на основе тегов структур. Построен на cobra.
- [carapace](https://github.com/rsteube/carapace) - Генератор автодополнения аргументов команд для spf13/cobra.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - Автодополнение аргументов для множества оболочек и множества команд.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - Определение простых автодополнений с помощью файла спецификации.
- [climax](https://github.com/tucnak/climax) - Альтернативный CLI с «человеческим лицом» в духе команды go.
- [clîr](https://github.com/leaanthony/clir) - Простая и понятная библиотека CLI. Без зависимостей.
- [cmd](https://github.com/posener/cmd) - Расширяет стандартный пакет `flag` для поддержки подкоманд и многого другого идиоматичным способом.
- [cmdr](https://github.com/hedzr/cmdr) - Библиотека Go для интерфейса командной строки в стиле POSIX/GNU, подобная getopt.
- [cobra](https://github.com/spf13/cobra) - Commander для современного взаимодействия с CLI на Go.
- [command-chain](https://github.com/rainu/go-command-chain) - Библиотека Go для настройки и запуска цепочек команд — например, конвейеров, как в оболочках Unix.
- [commandeer](https://github.com/jaffee/commandeer) - CLI-приложения, удобные для разработчиков: настраивает флаги, значения по умолчанию и справку по использованию на основе полей и тегов структур.
- [complete](https://github.com/posener/complete) - Написание автодополнений bash на Go + автодополнение bash для команды go.
- [console](https://github.com/reeflective/console) Библиотека приложений с замкнутым циклом для команд Cobra, с приглашениями oh-my-posh и многим другим.
- [Dnote](https://github.com/dnote/dnote) - Простой блокнот для командной строки с синхронизацией между несколькими устройствами.
- [elvish](https://github.com/elves/elvish) - Выразительный язык программирования и универсальная интерактивная оболочка.
- [env](https://github.com/codingconcepts/env) - Конфигурация окружения для структур на основе тегов.
- [flaggy](https://github.com/integrii/flaggy) - Надёжный и идиоматичный пакет флагов с превосходной поддержкой подкоманд.
- [flagvar](https://github.com/sgreben/flagvar) - Коллекция типов аргументов флагов для стандартного пакета Go `flag`.
- [flash-flags](https://github.com/agilira/flash-flags) - Сверхбыстрая библиотека разбора флагов без зависимостей, совместимая с POSIX, которую можно использовать как прозрачную замену стандартной библиотеки, с усиленной защитой.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - Терминальный инструмент для одноранговой передачи файлов и сообщений поверх собственного надёжного протокола на базе UDP.
- [getopt](https://github.com/jon-codes/getopt) - Точная реализация `getopt` на Go, проверенная на соответствие реализации GNU libc.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - CLI-инструмент для создания каркаса приложений Go с архитектурными шаблонами Minimalist, Standard и Hexagonal.
- [go-arg](https://github.com/alexflint/go-arg) - Разбор аргументов на основе структур в Go.
- [go-flags](https://github.com/jessevdk/go-flags) - Парсер параметров командной строки для Go.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Парсер параметров для Go, вдохновлённый гибкостью GetOpt::Long из Perl.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Настраиваемая библиотека редактирования строк с сочетаниями клавиш Emacs, поддержкой Unicode, автодополнением и подсветкой синтаксиса. Используется в оболочке NYAGOS.
- [gocmd](https://github.com/devfacet/gocmd) - Библиотека Go для создания приложений командной строки.
- [goopt](https://github.com/napalu/goopt) - Декларативный CLI-фреймворк для Go на основе тегов структур с широким набором возможностей: иерархические команды и флаги, i18n, автодополнение в оболочке и валидация.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Нативный для Go multicall-бинарник: один исполняемый файл с 77 инструментами POSIX и более чем 97% совместимостью с тестами BusyBox.
- [hashicorp/cli](https://github.com/hashicorp/cli) - Библиотека Go для реализации интерфейсов командной строки.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - Фреймворк CLI-приложений с автоматической конфигурацией и внедрением зависимостей.
- [job](https://github.com/liujianping/job) - JOB: превратите свою краткосрочную команду в долгосрочное задание.
- [kingpin](https://github.com/alecthomas/kingpin) - Парсер командной строки и флагов с поддержкой подкоманд (заменён `kong`; см. ниже).
- [liner](https://github.com/peterh/liner) - Библиотека Go в стиле readline для интерфейсов командной строки.
- [mcli](https://github.com/jxskiss/mcli) - Минималистичная, но очень мощная CLI-библиотека для Go.
- [memsh](https://github.com/amjadjibon/memsh) - Виртуальная оболочка bash на Go: выполняет команды оболочки в файловой системе в памяти (afero), с поддержкой плагинов WASM и встраиваемым HTTP-сервером.
- [mkideal/cli](https://github.com/mkideal/cli) - Многофункциональный и простой в использовании пакет для командной строки на основе тегов структур Golang.
- [mow.cli](https://github.com/jawher/mow.cli) - Библиотека Go для создания CLI-приложений со сложным разбором и валидацией флагов и аргументов.
- [neuron-cli](https://github.com/steevin/neuron-cli) - Терминальный менеджер знаний, ориентированный на локальную работу и совместимый с Obsidian.
- [OpenCLI](https://github.com/bcdxn/opencli) - Спецификация для CLI в стиле OpenAPI: опишите интерфейс в независимом от языка документе, чтобы сгенерировать документацию и шаблонный код фреймворка.
- [ops](https://github.com/nanovms/ops) - Сборщик/оркестратор юникернелов.
- [orpheus](https://github.com/agilira/orpheus) - CLI-фреймворк с усиленной защитой, системой хранения плагинов и средствами наблюдаемости для продакшена.
- [pflag](https://github.com/spf13/pflag) - Прозрачная замена пакета flag из Go, реализующая --флаги в стиле POSIX/GNU.
- [readline](https://github.com/reeflective/readline) - Библиотека оболочки с современными и простыми в использовании возможностями интерфейса.
- [sflags](https://github.com/octago/sflags) - Генератор флагов на основе структур для flag, urfave/cli, pflag, cobra, kingpin и других библиотек.
- [structcli](https://github.com/leodido/structcli) - Избавьтесь от шаблонного кода Cobra: создавайте мощные многофункциональные CLI декларативно на основе структур Go.
- [strumt](https://github.com/antham/strumt) - Библиотека для создания цепочек приглашений (prompt).
- [subcmd](https://github.com/bobg/subcmd) - Ещё один подход к разбору и запуску подкоманд. Работает совместно со стандартным пакетом `flag`.
- [teris-io/cli](https://github.com/teris-io/cli) - Простой и полный API для создания интерфейсов командной строки на Go.
- [urfave/cli](https://github.com/urfave/cli) - Простой, быстрый и приятный пакет для создания приложений командной строки на Go (ранее codegangsta/cli).
- [version](https://github.com/mszostok/version) - Собирает и отображает информацию о версии CLI в нескольких форматах вместе с уведомлением об обновлении.
- [wlog](https://github.com/dixonwille/wlog) - Простой интерфейс логирования с кроссплатформенной поддержкой цветов и конкурентности.
- [wmenu](https://github.com/dixonwille/wmenu) - Простая в использовании структура меню для CLI-приложений, предлагающих пользователям сделать выбор.

**[⬆ Наверх](#contents)**

## Конфигурация

_Библиотеки для разбора конфигурации._

- [aconfig](https://github.com/cristalhq/aconfig) - Простой, полезный и продуманный загрузчик конфигурации.
- [argus](https://github.com/agilira/argus) - Отслеживание файлов и управление конфигурацией с кольцевым буфером MPSC, адаптивными стратегиями пакетной обработки и универсальным разбором форматов (JSON, YAML, TOML, INI, HCL, Properties).
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Провайдер конфигурации для получения данных из Azure App Configuration в приложениях Go.
- [bcl](https://github.com/wkhere/bcl) - BCL — язык конфигурации, похожий на HCL.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - Минималистичный считыватель конфигурации (из файлов, переменных окружения и откуда угодно).
- [config](https://github.com/JeremyLoy/config) - Конфигурация облачных (cloud native) приложений. Привязка переменных окружения к структурам всего в две строки.
- [config](https://github.com/num30/config) - Настройте приложение с помощью файла, переменных окружения или флагов в две строки кода.
- [config](https://github.com/andreiavrammsd/config) - Загрузчик конфигурации на основе структур со специальным парсером файлов конфигурации, поддерживающий переменные окружения, флаги, значения по умолчанию и валидацию.
- [configuration](https://github.com/BoRuDar/configuration) - Библиотека для инициализации структур конфигурации из переменных окружения, файлов, флагов и тега 'default'.
- [configuro](https://github.com/sherifabdlnaby/configuro) - Продуманный фреймворк загрузки и валидации конфигурации из переменных окружения и файлов, ориентированный на приложения, соответствующие принципам 12-Factor.
- [confiq](https://github.com/greencoda/confiq) - Библиотека Go для декодирования структурированных данных в структуру конфигурации с поддержкой нескольких форматов данных.
- [confita](https://github.com/heetch/confita) - Каскадная загрузка конфигурации из нескольких бэкендов в структуру.
- [conflate](https://github.com/the4thamigo-uk/conflate) - Библиотека/инструмент для слияния нескольких файлов JSON/YAML/TOML с произвольных URL, проверки по JSON-схеме и применения значений по умолчанию, определённых в схеме.
- [enflag](https://github.com/atelpis/enflag) - Ориентированная на контейнеры библиотека конфигурации без зависимостей, объединяющая разбор переменных окружения и флагов. Использует дженерики для типобезопасности без рефлексии и тегов структур.
- [env](https://github.com/caarlos0/env) - Разбор переменных окружения в структуры Go (со значениями по умолчанию).
- [env](https://github.com/junk1tm/env) - Лёгкий пакет для загрузки переменных окружения в структуры.
- [env](https://github.com/syntaqx/env) - Пакет утилит для работы с окружением с поддержкой десериализации в структуры.
- [envconfig](https://github.com/vrischmann/envconfig) - Чтение конфигурации из переменных окружения.
- [envh](https://github.com/antham/envh) - Вспомогательные функции для управления переменными окружения.
- [envyaml](https://github.com/yuseferi/envyaml) - Считыватель YAML с переменными окружения. Позволяет хранить секреты в переменных окружения, но загружать их как структурированную конфигурацию YAML.
- [fig](https://github.com/kkyr/fig) - Крошечная библиотека для чтения конфигурации из файла и переменных окружения (с валидацией и значениями по умолчанию).
- [genv](https://github.com/sakirsensoy/genv) - Простое чтение переменных окружения с поддержкой dotenv.
- [go-array](https://github.com/deatil/go-array) - Пакет Go для чтения и записи данных в map, slice или JSON.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - Пакет Go для получения параметров из AWS System Manager — Parameter Store.
- [go-cfg](https://github.com/dsbasko/go-cfg) - Библиотека предоставляет единый способ чтения данных конфигурации в структуру из различных источников, таких как переменные окружения, флаги и файлы конфигурации (.json, .yaml, .toml, .env).
- [go-conf](https://github.com/ThomasObenaus/go-conf) - Простая библиотека для конфигурации приложений на основе аннотированных структур. Поддерживает чтение конфигурации из переменных окружения, файлов конфигурации и параметров командной строки.
- [go-config](https://github.com/MordaTeam/go-config) - Простая и удобная библиотека для работы с конфигурациями приложений.
- [go-external-config](https://github.com/go-external-config/go) - Библиотека управления конфигурацией для Go, вдохновлённая Spring.
- [go-external-config/aws](https://github.com/go-external-config/aws) - Поддержка AWS как источника свойств для go-external-config.
- [go-external-config/consul](https://github.com/go-external-config/consul) - Поддержка Consul как источника свойств для go-external-config.
- [go-external-config/vault](https://github.com/go-external-config/vault) - Поддержка Vault как источника свойств для go-external-config.
- [go-ini](https://github.com/subpop/go-ini) - Пакет Go для сериализации и десериализации INI-файлов.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - Утилита Go для загрузки параметров конфигурации из AWS SSM (Parameter Store).
- [go-up](https://github.com/ufoscout/go-up) - Простая библиотека конфигурации с рекурсивным разрешением подстановок и без магии.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - Валидация YAML с учётом исходного текста, с нативными схемами Go и поддержкой JSON Schema.
- [GoCfg](https://github.com/Jagerente/gocfg) - Менеджер конфигурации с контрактами на основе тегов структур, пользовательскими провайдерами значений, парсерами и генерацией документации. Гибко настраиваемый, но простой.
- [goconfig](https://github.com/fulldump/goconfig) - Заполнение структур Go из флагов, переменных окружения, config.json и значений по умолчанию с детерминированным приоритетом. Без дополнительных зависимостей.
- [godotenv](https://github.com/joho/godotenv) - Порт библиотеки dotenv из Ruby на Go (загружает переменные окружения из `.env`).
- [goenv](https://github.com/psyb0t/goenv) - Читает переменную окружения ENV и сообщает, работает ли процесс в режиме продакшена или разработки.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config — лёгкий, но мощный менеджер конфигурации для языка программирования Go.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - Модульная конфигурация в JSON. Храните структуры конфигурации рядом с кодом, который они настраивают, и делегируйте разбор подмодулям без ущерба для полной сериализации конфигурации.
- [gonfig](https://github.com/milad-abbasi/gonfig) - Парсер конфигурации на основе тегов, загружающий значения от разных провайдеров в типобезопасную структуру.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - Загружает конфигурацию из переменных окружения в структуры через рефлексию, со значениями по умолчанию и обязательными полями в тегах структур.
- [gookit/config](https://github.com/gookit/config) - Управление конфигурацией приложения (загрузка, получение, установка). Поддержка JSON, YAML, TOML, INI, HCL. Загрузка нескольких файлов, слияние с переопределением данных.
- [harvester](https://github.com/beatlabs/harvester) - Harvester — простой в использовании пакет статической и динамической конфигурации с поддержкой начальных значений, переменных окружения и интеграции с Consul.
- [hedzr/store](https://github.com/hedzr/store) - Расширяемая высокопроизводительная библиотека управления конфигурацией, оптимизированная для иерархических данных.
- [hjson](https://github.com/hjson/hjson-go) - Human JSON — формат файлов конфигурации для людей. Нестрогий синтаксис, меньше ошибок, больше комментариев.
- [hocon](https://github.com/gurkankaymak/hocon) - Библиотека конфигурации для работы с форматом HOCON (удобное для человека надмножество JSON), поддерживающая переменные окружения, ссылки на другие значения, комментарии и несколько файлов.
- [ini](https://github.com/go-ini/ini) - Пакет Go для чтения и записи INI-файлов.
- [ini](https://github.com/wlevene/ini) - Библиотека разбора и записи INI: десериализация в структуру, сериализация в JSON, запись в файл, отслеживание изменений файла.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - Библиотека Go для управления данными конфигурации из переменных окружения.
- [koanf](https://github.com/knadh/koanf) - Лёгкая расширяемая библиотека для чтения конфигурации в приложениях Go. Встроенная поддержка JSON, TOML, YAML, переменных окружения и командной строки.
- [konf](https://github.com/nil-go/konf) - Простейший API для чтения и отслеживания конфигурации из файлов, переменных окружения, флагов и облаков (например, AWS, Azure, GCP).
- [konfig](https://github.com/lalamove/konfig) - Компонуемая, наблюдаемая и производительная работа с конфигурацией в Go для эпохи распределённой обработки.
- [kong](https://github.com/alecthomas/kong) - Парсер командной строки с поддержкой сколь угодно сложных структур командной строки и дополнительных источников конфигурации, таких как YAML, JSON, TOML и т. д. (преемник `kingpin`).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - Простой полезный пакет для чтения переменных окружения.
- [nfigure](https://github.com/muir/nfigure) - Конфигурация на основе тегов структур для каждой библиотеки из командной строки (в стиле POSIX и Go), переменных окружения, JSON, YAML
- [onion](https://github.com/goraz/onion) - Многоуровневая конфигурация для Go. Поддерживает JSON, TOML, YAML, properties, etcd, переменные окружения и шифрование с помощью PGP.
- [piper](https://github.com/Yiling-J/piper) - Обёртка над Viper с наследованием конфигурации и генерацией ключей.
- [sonic](https://github.com/bytedance/sonic) - Невероятно быстрая библиотека сериализации и десериализации JSON.
- [swap](https://github.com/oblq/swap) - Рекурсивное создание и настройка структур в зависимости от окружения сборки (YAML, TOML, JSON и переменные окружения).
- [typenv](https://github.com/diegomarangoni/typenv) - Минималистичная библиотека типизированных переменных окружения без зависимостей.
- [uConfig](https://github.com/omeid/uconfig) - Лёгкое и расширяемое управление конфигурацией без зависимостей.
- [viper](https://github.com/spf13/viper) - Конфигурация Go с клыками.
- [xdg](https://github.com/adrg/xdg) - Реализация [спецификации XDG Base Directory](https://specifications.freedesktop.org/basedir-spec/latest/) и [пользовательских каталогов XDG](https://wiki.archlinux.org/index.php/XDG_user_directories) на Go.
- [yamagiconf](https://github.com/romshark/yamagiconf) - «Безопасное подмножество» YAML для конфигураций Go.
- [zerocfg](https://github.com/chaindead/zerocfg) - Лаконичное управление конфигурацией без лишних усилий, избавляющее от шаблонного и повторяющегося кода, с поддержкой нескольких источников с переопределением по приоритету.

**[⬆ Наверх](#contents)**

## Непрерывная интеграция

_Инструменты, помогающие с непрерывной интеграцией._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse — распределённая CI-платформа.
- [Bencher](https://bencher.dev/) - Набор инструментов непрерывного бенчмаркинга, предназначенных для выявления регрессий производительности в CI.
- [CDS](https://github.com/ovh/cds) - Платформа с открытым исходным кодом корпоративного уровня для CI/CD и автоматизации DevOps.
- [dot](https://github.com/opnlabs/dot) - Минималистичная система непрерывной интеграции, ориентированная на локальную работу, которая использует Docker для конкурентного запуска заданий по этапам.
- [drone](https://github.com/drone/drone) - Drone — платформа непрерывной интеграции на базе Docker, написанная на Go.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - GitHub Action для бесплатного отслеживания покрытия кода в ваших пул-реквестах с красивым HTML-предпросмотром.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Используйте встроенное фазз-тестирование Go 1.18 в GitHub Actions.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Автоматизация семантического версионирования Git-репозиториев.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - GitHub Action, сообщающий о проблемах, когда покрытие тестами ниже заданного порога.
- [gomason](https://github.com/nikogura/gomason) - Тестирование, сборка, подпись и публикация бинарных файлов Go из чистого рабочего окружения.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - Вывод go test для людей.
- [goveralls](https://github.com/mattn/goveralls) - Интеграция Go с системой непрерывного отслеживания покрытия кода Coveralls.io.
- [muffet](https://github.com/raviqqe/muffet) - Быстрая проверка ссылок на сайтах на Go, см. [альтернативы](https://github.com/lycheeverse/lychee#features).
- [overalls](https://github.com/go-playground/overalls) - Coverprofile для многопакетных проектов Go для таких инструментов, как goveralls.
- [PikoCI](https://github.com/pikoci/pikoci) - Самостоятельно размещаемая система CI/CD, вдохновлённая Concourse. Один бинарный файл, любая база данных, любая очередь. Конвейеры на HCL, подключаемые типы ресурсов и исполнители.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - Инструмент рекурсивного тестирования покрытия.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker — форк системы Drone CI, поддерживаемый сообществом.

**[⬆ Наверх](#contents)**

## Препроцессоры CSS

_Библиотеки для препроцессинга CSS-файлов._

- [go-css](https://github.com/napsy/go-css) - Очень простой парсер CSS, написанный на Go.
- [go-libsass](https://github.com/wellington/go-libsass) - Обёртка Go для проекта libsass, на 100% совместимого с Sass.

**[⬆ Наверх](#contents)**

## Фреймворки интеграции данных

_Фреймворки для выполнения ELT / ETL_

- [Benthos](https://github.com/benthosdev/benthos) - Мост потоковой передачи сообщений между множеством протоколов.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - Высокопроизводительный фреймворк интеграции данных ELT с подключаемой архитектурой.
- [confluence2md](https://github.com/gkoos/confluence2md) - Краулер и конвертер из Confluence в Markdown.
- [omniparser](https://github.com/jf-tech/omniparser) - Универсальная ETL-библиотека, которая в потоковом режиме разбирает текстовые входные данные (CSV/txt/JSON/XML/EDI/X12/EDIFACT и т. д.) и преобразует их в выходной JSON с помощью схемы, управляемой данными.

**[⬆ Наверх](#contents)**

## Структуры данных и алгоритмы

### Упаковка битов и сжатие

- [bingo](https://github.com/iancmcc/bingo) - Быстрая упаковка нативных типов в байты без аллокаций с сохранением лексикографического порядка.
- [binpacker](https://github.com/zhuangsirui/binpacker) - Двоичный упаковщик и распаковщик, помогающий создавать собственные двоичные потоки.
- [bit](https://github.com/yourbasic/bit) - Структура данных «множество» для Golang с бонусными функциями для манипуляций с битами.
- [crunch](https://github.com/superwhiskers/crunch) - Пакет Go, реализующий буферы для удобной работы с различными типами данных.
- [go-ef](https://github.com/amallia/go-ef) - Реализация кодирования Элиаса — Фано на Go.
- [roaring](https://github.com/RoaringBitmap/roaring) - Пакет Go, реализующий сжатые битовые множества.

### Битовые множества

- [bitmap](https://github.com/kelindar/bitmap) - Плотная битовая карта/битовое множество на Go без аллокаций и с поддержкой SIMD.
- [bitset](https://github.com/bits-and-blooms/bitset) - Пакет Go, реализующий битовые множества.

### Фильтры Блума и кукушкины фильтры

- [bloom](https://github.com/bits-and-blooms/bloom) - Пакет Go, реализующий фильтры Блума.
- [bloom](https://github.com/zhenjl/bloom) - Фильтры Блума, реализованные на Go.
- [bloom](https://github.com/yourbasic/bloom) - Реализация фильтра Блума на Golang.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Ещё одна реализация фильтра Блума на Go, совместимая с библиотекой Guava из Java.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - Вероятностные структуры данных для обработки непрерывных неограниченных потоков.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - Кукушкин фильтр: полнофункциональная реализация, настраиваемая и оптимизированная по памяти по сравнению с другими реализациями; доступны все возможности, упомянутые в оригинальной статье.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - Кукушкин фильтр: хорошая альтернатива считающему фильтру Блума, реализованная на Go.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Первая реализация фильтров Ribbon на чистом Go (на практике компактнее фильтров Блума и Xor) для экономных по памяти приближённых запросов о принадлежности множеству.
- [ring](https://github.com/TheTannerRyan/ring) - Реализация высокопроизводительного потокобезопасного фильтра Блума на Go.

### Коллекции структур данных и алгоритмов

- [algorithms](https://github.com/shady831213/algorithms) - Алгоритмы и структуры данных. Изучение CLRS.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - Коллекция полезных, производительных и потокобезопасных структур данных.
- [gods](https://github.com/emirpasic/gods) - Структуры данных Go. Контейнеры, множества, списки, стеки, отображения, двунаправленные отображения (BidiMap), деревья, HashSet и т. д.
- [gostl](https://github.com/liyue201/gostl) - Библиотека структур данных и алгоритмов для Go, призванная предоставить функциональность, аналогичную STL в C++.

### Итераторы

- [glinq](https://github.com/CreateLab/glinq) - Библиотека ленивых вычислений в стиле LINQ с типобезопасными дженериками, оптимизациями производительности и без зависимостей.
- [gloop](https://github.com/alvii147/gloop) - Удобные циклы с использованием возможности range-over-func в Go.
- [goterator](https://github.com/yaa110/goterator) - Реализация итератора, предоставляющая функциональность map и reduce.
- [iter](https://github.com/disksing/iter) - Реализация итераторов и алгоритмов STL из C++ на Go.

### Отображения

См. также [Базы данных](#database) для более сложных хранилищ «ключ-значение» и [Деревья](#trees) для
дополнительных реализаций упорядоченных отображений.

- [cmap](https://github.com/lrita/cmap) - Потокобезопасное конкурентное отображение для Go с поддержкой `interface{}` в качестве ключа и автоматическим увеличением числа шардов.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Высокопроизводительная потокобезопасная обобщённая реализация конкурентной хеш-таблицы на основе Swiss Map.
- [dict](https://github.com/srfrog/dict) - Словари (dict) в стиле Python для Go.
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - Типобезопасная обобщённая обёртка над `sync.Map` с полным набором методов и без зависимостей.
- [go-shelve](https://github.com/lucmq/go-shelve) - Постоянный (persistent) объект, подобный map, для языка программирования Go. Поддерживает несколько встраиваемых хранилищ «ключ-значение».
- [goradd/maps](https://github.com/goradd/maps) - Обобщённый интерфейс отображений для Go 1.18+: безопасные отображения, упорядоченные отображения, упорядоченные безопасные отображения и т. д.
- [hmap](https://github.com/lyonnee/hmap) - HMap — конкурентная и безопасная реализация Map с поддержкой дженериков, призванная предоставить простой в использовании API.

### Различные структуры данных и алгоритмы

- [combo](https://github.com/bobg/combo) - Комбинаторные операции, включая перестановки, сочетания и сочетания с повторениями.
- [concurrent-writer](https://github.com/free/concurrent-writer) - Высококонкурентная прозрачная замена `bufio.Writer`.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Реализация скетча Count-Min-Log на Go: приближённый подсчёт с помощью приближённых счётчиков (как скетч Count-Min, но с меньшим расходом памяти).
- [FSM](https://github.com/enetx/fsm) - Конечный автомат (FSM) для Go.
- [fsm](https://github.com/cocoonspace/fsm) - Пакет конечных автоматов.
- [genfuncs](https://github.com/nwillc/genfuncs) - Пакет дженериков для Go 1.18+, вдохновлённый Sequence и Map из Kotlin.
- [go-generics](https://github.com/bobg/go-generics) - Обобщённые утилиты для срезов, отображений, множеств, итераторов и горутин.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - Геоиндекс в памяти.
- [go-rampart](https://github.com/francesconi/go-rampart) - Определение взаимного расположения интервалов.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - Региональные квадродеревья с эффективной локализацией точек и поиском соседей.
- [go-tuple](https://github.com/barweiss/go-tuple) - Обобщённая реализация кортежей для Go 1.18+.
- [go18ds](https://github.com/daichi-m/go18ds) - Структуры данных Go с использованием дженериков Go 1.18.
- [gofal](https://github.com/xxjwxc/gofal) - API дробей для Go.
- [gogu](https://github.com/esimov/gogu) - Всеобъемлющая, переиспользуемая и эффективная библиотека обобщённых утилитарных функций и структур данных, безопасных для конкурентного использования.
- [gota](https://github.com/kniren/gota) - Реализация датафреймов, серий и методов обработки данных для Go.
- [hide](https://github.com/emvi/hide) - Тип ID с сериализацией в хеш и обратно, чтобы не передавать идентификаторы клиентам.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Реализация HyperLogLog с разреженным представлением, коррекцией смещения LogLog-Beta и сокращением памяти TailCut.
- [quadtree](https://github.com/s0rg/quadtree) - Обобщённое квадродерево без аллокаций со 100% покрытием тестами.
- [slices](https://github.com/twharmon/slices) - Чистые обобщённые функции для срезов.
- [xsync](https://github.com/puzpuzpuz/xsync) - Конкурентные масштабируемые структуры данных, такие как `xsync.Map` — конкурентная обобщённая хеш-таблица.

### Типы, допускающие null

- [nan](https://github.com/kak-tus/nan) - Структуры, допускающие null, без аллокаций в одной библиотеке, с удобными функциями преобразования, сериализаторами и десериализаторами.
- [null](https://github.com/emvi/null) - Типы Go, допускающие null, которые можно сериализовать в JSON и десериализовать из него.
- [typ](https://github.com/gurukami/typ) - Типы null, безопасное преобразование примитивных типов и извлечение значений из сложных структур.

### Очереди

- [deheap](https://github.com/aalpar/deheap) - Двусторонняя куча (min-max heap) с доступом за O(log n) как к минимальному, так и к максимальному элементу.
- [deque](https://github.com/edwingeng/deque) - Высокооптимизированная двусторонняя очередь.
- [deque](https://github.com/gammazero/deque) - Быстрый дек (двусторонняя очередь) на кольцевом буфере.
- [dqueue](https://github.com/vodolaz095/dqueue) - Простая, работающая в памяти, без зависимостей, проверенная в бою потокобезопасная отложенная очередь.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - Конкурентная очередь FIFO.
- [hatchet](https://github.com/hatchet-dev/hatchet) - Распределённая отказоустойчивая очередь задач.
- [list](https://github.com/koss-null/list) - Обобщённый потокобезопасный двусвязный список с полной поддержкой итераторов и интрузивный односвязный список для встраивания; многофункциональная замена container/list.
- [memlog](https://github.com/embano1/memlog) - Простая в использовании, лёгкая, потокобезопасная структура данных в памяти только для добавления, вдохновлённая Apache Kafka.
- [queue](https://github.com/adrianbrad/queue) - Несколько потокобезопасных обобщённых реализаций очередей для Go.

### Множества

- [dsu](https://github.com/ihebu/dsu) - Реализация структуры данных «система непересекающихся множеств» на Go.
- [golang-set](https://github.com/deckarep/golang-set) - Высокопроизводительные потокобезопасные и непотокобезопасные множества для Go.
- [goset](https://github.com/zoumo/goset) - Полезная реализация коллекции Set для Go.
- [set](https://github.com/StudioSol/set) - Простая реализация структуры данных «множество» на Go с использованием LinkedHashMap.

### Анализ текста

- [bleve](https://github.com/blevesearch/bleve) - Современная библиотека индексации текста для Go.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Реализация адаптивного префиксного дерева (Adaptive Radix Tree) на Go.
- [go-edlib](https://github.com/hbollon/go-edlib) - Библиотека Go для сравнения строк и алгоритмов редакционного расстояния (Левенштейна, LCS, Хэмминга, Дамерау — Левенштейна, Джаро — Винклера и др.), совместимая с Unicode.
- [levenshtein](https://github.com/agext/levenshtein) - Расстояние Левенштейна и метрики сходства с настраиваемой стоимостью правок и бонусом за общий префикс в стиле Винклера.
- [levenshtein](https://github.com/agnivade/levenshtein) - Реализация вычисления расстояния Левенштейна на Go.
- [mspm](https://github.com/BlackRabbitt/mspm) - Алгоритм сопоставления с несколькими строковыми шаблонами для информационного поиска.
- [parsefields](https://github.com/MonaxGT/parsefields) - Инструменты для разбора JSON-подобных журналов со сбором уникальных полей и событий.
- [ptrie](https://github.com/viant/ptrie) - Реализация префиксного дерева.
- [radixtree](https://github.com/gammazero/radixtree) - Адаптивное корневое дерево (префиксное дерево или сжатое префиксное дерево).
- [trie](https://github.com/derekparker/trie) - Реализация префиксного дерева (trie) на Go.

### Деревья

- [graphlib](https://github.com/aio-arch/graphlib) - Библиотека топологической сортировки: сортировка и отсечение графов DAG.
- [hashsplit](http://github.com/bobg/hashsplit) - Разбиение потоков байтов на фрагменты и организация фрагментов в деревья с границами, определяемыми содержимым, а не позицией.
- [merkle](https://github.com/bobg/merkle) - Экономное по памяти вычисление корневых хешей Меркла и доказательств включения.
- [skiplist](https://github.com/MauriceGit/skiplist) - Очень быстрая реализация списка с пропусками (skiplist) на Go.
- [skiplist](https://github.com/gansidui/skiplist) - Реализация списка с пропусками на Go.
- [skiplist](https://github.com/huandu/skiplist) - Быстрый и простой в использовании список с пропусками для Go.
- [treemap](https://github.com/igrmk/treemap) - Обобщённое отображение с сортировкой по ключу, использующее красно-чёрное дерево под капотом.

### Конвейеры

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - Модуль Go, который обрабатывает работу конкурентно и возвращает результат в канал в порядке поступления входных данных.
- [parapipe](https://github.com/nazar256/parapipe) - FIFO-конвейер, распараллеливающий выполнение на каждом этапе с сохранением порядка сообщений и результатов.
- [pipeline](https://github.com/hyfather/pipeline) - Реализация конвейеров с разветвлением (fan-out) и объединением (fan-in).
- [pipelines](https://github.com/nxdir-s/pipelines) - Обобщённые функции конвейеров для конкурентной обработки.

**[⬆ Наверх](#contents)**

## Базы данных

### Кеши

_Хранилища данных с истекающими записями, распределённые хранилища данных в памяти или подмножества файловых баз данных в памяти._

- [bcache](https://github.com/iwanbk/bcache) - Библиотека Go для распределённого кеша в памяти с согласованностью в конечном счёте.
- [BigCache](https://github.com/allegro/bigcache) - Эффективный кеш «ключ-значение» для гигабайтов данных.
- [cache2go](https://github.com/muesli/cache2go) - Кеш «ключ:значение» в памяти с автоматической инвалидацией по тайм-аутам.
- [cachego](https://github.com/faabiosr/cachego) - Компонент кеширования для Golang с поддержкой нескольких драйверов.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - BigCache с поддержкой кластеризации и индивидуальным сроком жизни элементов.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - Полная реализация API кеша Oracle Coherence для приложений Go с использованием gRPC в качестве сетевого транспорта.
- [couchcache](https://github.com/codingsince1985/couchcache) - RESTful-микросервис кеширования на базе сервера Couchbase.
- [easycache](https://github.com/hugocarreira/easycache) - Простой способ использовать кеш в памяти в Golang (TTL/FIFO/LRU/LFU).
- [EchoVault](https://github.com/EchoVault/EchoVault) - Встраиваемое распределённое хранилище данных в памяти, совместимое с клиентами Redis.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - Быстрый потокобезопасный кеш в памяти для большого количества записей. Минимизирует накладные расходы на сборку мусора.
- [GCache](https://github.com/bluele/gcache) - Библиотека кеширования с поддержкой кеша с истечением срока, LFU, LRU и ARC.
- [gdcache](https://github.com/ulovecode/gdcache) - Неинвазивная библиотека кеширования на чистом Golang, с помощью которой можно реализовать собственный распределённый кеш.
- [go-cache](https://github.com/viney-shih/go-cache) - Гибкая многоуровневая библиотека кеширования для Go для работы с кешем в памяти и общим кешем по шаблону Cache-Aside.
- [go-freelru](https://github.com/elastic/go-freelru) Быстрая обобщённая библиотека LRU-хеш-таблицы без нагрузки на сборщик мусора, с опциональными блокировками, шардированием, вытеснением и истечением срока.
- [go-gcache](https://github.com/szyhf/go-gcache) - Обобщённая версия `GCache`: поддержка кеша с истечением срока, LFU, LRU и ARC.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - Быстрая библиотека хранилища/кеша «ключ:значение» в памяти. Кеши указателей.
- [gocache](https://github.com/eko/gocache) - Полноценная библиотека кеширования для Go с несколькими хранилищами (память, memcache, redis, ...): цепочечный и загружаемый кеши, кеш с метриками и многое другое.
- [gocache](https://github.com/yuseferi/gocache) - Высокопроизводительная библиотека кеширования для Go без гонок данных и с функцией автоматической очистки
- [groupcache](https://github.com/golang/groupcache) - Groupcache — библиотека кеширования и заполнения кеша, во многих случаях предназначенная для замены memcached.
- [icache](https://github.com/mdaliyan/icache) - Высокопроизводительный обобщённый потокобезопасный пакет кеширования без зависимостей.
- [imcache](https://github.com/erni27/imcache) - Обобщённая библиотека кеша в памяти для Go. Поддерживает истечение срока, скользящее истечение срока, ограничение максимального числа записей, обратные вызовы при вытеснении и шардирование.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - Единая библиотека кеширования для Go с поддержкой многоуровневого кеширования.
- [nscache](https://github.com/no-src/nscache) - Фреймворк кеширования для Go с поддержкой драйверов для нескольких источников данных.
- [otter](https://github.com/maypok86/otter) - Высокопроизводительный кеш без блокировок для Go. Во много раз быстрее Ristretto и аналогов.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache — минималистичный пакет кеширования, ориентированный на стратегию упреждающего оптимистичного кеширования.
- [ristretto](https://github.com/dgraph-io/ristretto) - Высокопроизводительный кеш для Go с ограничением по памяти.
- [sturdyc](https://github.com/viccon/sturdyc) - Библиотека кеширования с продвинутыми возможностями конкурентности, призванная сделать приложения с интенсивным вводом-выводом надёжными и высокопроизводительными.
- [theine](https://github.com/Yiling-J/theine-go) - Высокопроизводительный, близкий к оптимальному кеш в памяти с упреждающим истечением TTL и дженериками.
- [timedmap](https://github.com/zekroTJA/timedmap) - Отображение с истекающими парами «ключ-значение».
- [ttlcache](https://github.com/jellydator/ttlcache) - Кеш в памяти с истечением срока элементов и дженериками.
- [ttlcache](https://github.com/cheshir/ttlcache) - Хранилище «ключ-значение» в памяти с TTL для каждой записи.

### Базы данных, реализованные на Go

- [badger](https://github.com/dgraph-io/badger) - Быстрое хранилище «ключ-значение» на Go.
- [bbolt](https://github.com/etcd-io/bbolt) - Встраиваемая база данных «ключ/значение» для Go.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask — встраиваемая, постоянная и быстрая база данных «ключ-значение» (KV), написанная на чистом Go, с предсказуемой производительностью чтения и записи, низкой задержкой и высокой пропускной способностью благодаря дисковой структуре bitcask (LSM+WAL).
- [buntdb](https://github.com/tidwall/buntdb) - Быстрая встраиваемая база данных «ключ/значение» в памяти для Go с пользовательской индексацией и поддержкой пространственных данных.
- [clover](https://github.com/ostafen/clover) - Лёгкая документоориентированная NoSQL-база данных, написанная на чистом Golang.
- [cockroach](https://github.com/cockroachdb/cockroach) - Масштабируемое транзакционное хранилище данных с геораспределённой репликацией.
- [Coffer](https://github.com/claygod/coffer) - Простая ACID-база данных «ключ-значение» с поддержкой транзакций.
- [column](https://github.com/kelindar/column) - Высокопроизводительное колоночное встраиваемое хранилище в памяти с битмап-индексами и транзакциями.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL — SQL-база данных на блокчейне.
- [Databunker](https://github.com/paranoidguy/databunker) - Сервис хранения персональных данных (PII), созданный в соответствии с требованиями GDPR и CCPA.
- [dgraph](https://github.com/dgraph-io/dgraph) - Масштабируемая распределённая графовая база данных с низкой задержкой и высокой пропускной способностью.
- [DiceDB](https://github.com/DiceDB/dice) - Быстрая реактивная база данных в памяти с открытым исходным кодом, оптимизированная для современного оборудования. Более высокая пропускная способность и меньшая медианная задержка делают её идеальной для современных нагрузок.
- [diskv](https://github.com/peterbourgon/diskv) - Самодельное хранилище «ключ-значение» с хранением на диске.
- [dolt](https://github.com/dolthub/dolt) - Dolt — это Git для данных.
- [eliasdb](https://github.com/krotik/eliasdb) - Транзакционная графовая база данных без зависимостей с REST API, поиском по фразам и SQL-подобным языком запросов.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - Встраиваемая база данных в стиле MongoDB, написанная на чистом Go. Поддерживает индексацию и сложные запросы.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – Драйвер SQLite, реализованный на чистом Golang без CGO.
- [godis](https://github.com/hdt3213/godis) - Высокопроизводительный сервер и кластер Redis, реализованный на Golang.
- [goleveldb](https://github.com/syndtr/goleveldb) - Реализация базы данных «ключ/значение» [LevelDB](https://github.com/google/leveldb) на Go.
- [hare](https://github.com/jameycribbs/hare) - Простая система управления базами данных, которая хранит каждую таблицу в виде текстового файла JSON с разделением по строкам.
- [immudb](https://github.com/codenotary/immudb) - immudb — лёгкая высокоскоростная неизменяемая база данных для систем и приложений, написанная на Go.
- [influxdb](https://github.com/influxdb/influxdb) - Масштабируемое хранилище данных для метрик, событий и аналитики в реальном времени.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb — высокопроизводительная NoSQL-база данных, подобная Redis, на основе LevelDB.
- [levigo](https://github.com/jmhodges/levigo) - Levigo — обёртка Go для LevelDB.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB — простая база данных менее чем из 1000 строк кода для обучения.
- [LinDB](https://github.com/lindb/lindb) - LinDB — масштабируемая высокопроизводительная распределённая база данных временных рядов с высокой доступностью.
- [lotusdb](https://github.com/flower-corp/lotusdb) - Быстрая база данных «ключ/значение», совместимая с LSM и B+-деревом.
- [lynxdb](https://github.com/lynxbase/lynxdb) - Лёгкая колоночная база данных для аналитики журналов с конвейерным языком запросов, вдохновлённым SPL.
- [MemHop](https://github.com/qyiun666/MemHop) - Встраиваемая база данных когнитивной памяти для ИИ-агентов. Шестиуровневая архитектура (L0-L5), конвейер консолидации Dream, трёхканальный поиск RRF (BM25 + векторы f16 + сущности), один файл .meh, чистый Go, никакой инфраструктуры.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus — векторная база данных для управления эмбеддингами, аналитики и поиска.
- [minisql](https://github.com/RichardKnop/minisql) - Встраиваемая SQL-база данных в одном файле.
- [moss](https://github.com/couchbase/moss) - Moss — простой движок хранилища «ключ-значение» на основе LSM, на 100% написанный на Go.
- [nanotdb](https://github.com/aymanhs/nanotdb) - Лёгкая база данных временных рядов только для добавления без зависимостей и панель мониторинга, оптимизированные для маломощного оборудования.
- [NoKV](https://github.com/feichai0017/NoKV) - Нативный сервис метаданных для распределённых файловых систем, объектных хранилищ и нагрузок с наборами данных для ИИ.
- [NornicDB](https://github.com/orneryd/NornicDB) - Высокопроизводительная графовая и векторная база данных (совместимая с Neo4j и qDrant), ориентированная на извлечение graph-RAG с низкой задержкой для ИИ-систем. 
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb — простое, быстрое, встраиваемое и постоянное хранилище «ключ/значение», написанное на чистом Go. Поддерживает полностью сериализуемые транзакции и множество структур данных, таких как список, множество и сортированное множество.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Высокопроизводительная встраиваемая объектная база данных (NoSQL) с API на Go.
- [pebble](https://github.com/cockroachdb/pebble) - База данных «ключ-значение» на Go, вдохновлённая RocksDB/LevelDB.
- [piladb](https://github.com/fern4lvarez/piladb) - Лёгкий RESTful-движок базы данных на основе стековых структур данных.
- [pogreb](https://github.com/akrylysov/pogreb) - Встраиваемое хранилище «ключ-значение» для нагрузок с преобладанием чтения.
- [prometheus](https://github.com/prometheus/prometheus) - Система мониторинга и база данных временных рядов.
- [pudge](https://github.com/recoilme/pudge) - Быстрое и простое хранилище «ключ/значение», написанное с использованием стандартной библиотеки Go.
- [redka](https://github.com/nalgeon/redka) - Redis, заново реализованный на SQLite.
- [rosedb](https://github.com/roseduan/rosedb) - Встраиваемая база данных «ключ-значение» на основе LSM+WAL с поддержкой string, list, hash, set, zset.
- [rotom](https://github.com/xgzlucario/rotom) - Крошечный сервер Redis, созданный на Golang, совместимый с протоколами RESP.
- [rqlite](https://github.com/rqlite/rqlite) - Лёгкая распределённая реляционная база данных, построенная на SQLite.
- [tempdb](https://github.com/rafaeljesus/tempdb) - Хранилище «ключ-значение» для временных элементов.
- [tidb](https://github.com/pingcap/tidb) - TiDB — распределённая SQL-база данных. Вдохновлена архитектурой Google F1.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Ваша NoSQL-база данных на основе Golang.
- [unitdb](https://github.com/unit-io/unitdb) - Быстрая база данных временных рядов для IoT и приложений обмена сообщениями в реальном времени. Доступ к unitdb по модели pubsub через TCP или WebSocket с помощью приложения github.com/unit-io/unitd.
- [Vasto](https://github.com/chrislusf/vasto) - Распределённое высокопроизводительное хранилище «ключ-значение». На диске. Согласованность в конечном счёте. Высокая доступность. Может расти или уменьшаться без прерывания обслуживания.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Быстрая, экономичная по ресурсам и масштабируемая база данных временных рядов с открытым исходным кодом. Может использоваться как долгосрочное удалённое хранилище для Prometheus. Поддерживает PromQL.
- 
### Миграция схем баз данных

- [atlas](https://github.com/ariga/atlas) - Набор инструментов для работы с базами данных. CLI, созданный, чтобы помочь компаниям эффективнее работать со своими данными.
- [avro](https://github.com/khezen/avro) - Обнаружение SQL-схем и их преобразование в схемы AVRO. Выборка SQL-записей в байты AVRO.
- [bytebase](https://github.com/bytebase/bytebase) - Безопасное изменение схем баз данных и контроль версий для команд DevOps.
- [darwin](https://github.com/GuiaBolso/darwin) - Библиотека эволюции схем баз данных для Go.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - CLI для версионируемых миграций схем баз данных с поддержкой PostgreSQL, MySQL, ClickHouse, Tarantool и Apache Iceberg.
- [dbmate](https://github.com/amacneil/dbmate) - Лёгкий инструмент миграции баз данных, не зависящий от фреймворков.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Фикстуры в стиле Django для превосходной встроенной библиотеки database/sql в Golang.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - Удобный для CLI пакет для управления миграциями go-pg.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - Пакет Go, помогающий писать миграции с go-pg/pg.
- [goavro](https://github.com/linkedin/goavro) - Пакет Go для кодирования и декодирования данных Avro.
- [godfish](https://github.com/rafaelespinoza/godfish) - Менеджер миграций баз данных, работающий с нативным языком запросов. Поддержка cassandra, mysql, postgres, sqlite3.
- [goose](https://github.com/pressly/goose) - Инструмент миграции баз данных. Вы можете управлять эволюцией своей базы данных, создавая инкрементальные SQL-скрипты или скрипты на Go.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Простой инструмент заполнения базы данных начальными данными для ORM Gorm.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Помощник по миграции схем баз данных для ORM Gorm.
- [libschema](https://github.com/muir/libschema) - Определяйте миграции отдельно в каждой библиотеке. Миграции для библиотек с открытым исходным кодом. MySQL и PostgreSQL.
- [migrate](https://github.com/golang-migrate/migrate) - Миграции баз данных. CLI и библиотека для Golang.
- [migrator](https://github.com/lopezator/migrator) - Предельно простая библиотека миграции баз данных для Go.
- [migrator](https://github.com/larapulse/migrator) - Мигратор баз данных MySQL, предназначенный для выполнения миграций для ваших функций и управления обновлениями схемы базы данных с помощью понятного кода на Go.
- [schema](https://github.com/adlio/schema) - Библиотека для встраивания миграций схем для баз данных, совместимых с database/sql, в бинарные файлы Go.
- [skeema](https://github.com/skeema/skeema) - Система управления схемами на чистом SQL для MySQL с поддержкой шардирования и внешних инструментов онлайн-изменения схем.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - Миграция, создание баз данных, ORM и т. д. для MySQL, PostgreSQL и SQLite.
- [sql-migrate](https://github.com/rubenv/sql-migrate) - Инструмент миграции баз данных. Позволяет встраивать миграции в приложение с помощью go-bindata.
- [sqlize](https://github.com/sunary/sqlize) - Генератор миграций баз данных. Позволяет генерировать SQL-миграции на основе сравнения модели и существующего SQL.

### Инструменты для баз данных

- [chproxy](https://github.com/Vertamedia/chproxy) - HTTP-прокси для базы данных ClickHouse.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - Собирает мелкие вставки и отправляет крупные запросы на серверы ClickHouse.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - Парсер SQL на диалекте ClickHouse, создающий типизированное AST, с вспомогательными функциями обхода, форматированием с сохранением исходного вида и CLI.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - Выполнение SQL в продакшене со списками управления доступом, журналами и общими ссылками.
- [dbbench](https://github.com/sj14/dbbench) - Инструмент бенчмаркинга баз данных с поддержкой нескольких баз данных и скриптов.
- [dg](https://github.com/codingconcepts/dg) - Быстрый генератор данных, создающий CSV-файлы из сгенерированных реляционных данных.
- [filesql](https://github.com/nao1215/filesql) - Запросы к файлам CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH и Fedwire на SQL через API database/sql на базе SQLite в памяти.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - Облачный (cloud native) шлюз баз данных и фреймворк для создания приложений, управляемых данными. Как API-шлюзы, только для баз данных.
- [go-mysql](https://github.com/siddontang/go-mysql) - Набор инструментов Go для работы с протоколом и репликацией MySQL.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - Бессерверное резервное копирование PostgreSQL в S3 с помощью AWS Lambda с ежедневной, ежемесячной и ежегодной ротацией.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - Поддержка мультиарендности для баз данных под управлением GORM.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - Высокопроизводительный SQL-парсер, форматировщик, линтер и сканер безопасности с поддержкой нескольких диалектов и песочницей на WASM.
- [hasql](https://golang.yandex/hasql) - Библиотека для доступа к SQL-базам данных, развёрнутым на нескольких хостах.
- [octillery](https://github.com/knocknote/octillery) - Пакет Go для шардирования баз данных (поддерживает любую ORM или чистый SQL).
- [onedump](https://github.com/liweiyi88/onedump) - Резервное копирование баз данных из разных драйверов в разные места назначения одной командой и конфигурацией.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Продвинутое планирование заданий для PostgreSQL.
- [pgrwl](https://github.com/pgrwl/pgrwl) - Облачное (cloud native) непрерывное резервное копирование для PostgreSQL.
- [pgwd](https://github.com/hrodrig/pgwd) - CLI, отслеживающий количество подключений к PostgreSQL (всего, активных, простаивающих, устаревших) и уведомляющий через Slack и/или Loki при превышении пороговых значений. Поддерживает Kubernetes (kubectl port-forward) и опциональный контекст запуска в уведомлениях.
- [pgweb](https://github.com/sosedoff/pgweb) - Веб-браузер баз данных PostgreSQL.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - CLI-клиент PostgreSQL, написанный на Go и вдохновлённый pgcli.
- [prep](https://github.com/hexdigest/prep) - Используйте подготовленные SQL-выражения без изменения кода.
- [pREST](https://github.com/prest/prest) - Упростите и ускорьте разработку, ⚡ мгновенно, в реальном времени и с высокой производительностью — для любого приложения на Postgres, существующего или нового.
- [rdb](https://github.com/HDT3213/rdb) - Парсер RDB-файлов Redis для дальнейшей разработки и анализа памяти.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb предоставляет возможность работы с репликами для чтения в конфигурациях с несколькими серверами баз данных.
- [sqly](https://github.com/nao1215/sqly) - Выполнение SQL над файлами CSV, TSV, LTSV, JSON, Parquet и Excel в интерактивной оболочке на базе SQLite в памяти.
- [vitess](https://github.com/youtube/vitess) - vitess предоставляет серверы и инструменты, облегчающие масштабирование баз данных MySQL для крупных веб-сервисов.
- [wescale](https://github.com/wesql/wescale) - WeScale — прокси баз данных, предназначенный для повышения масштабируемости, производительности, безопасности и отказоустойчивости ваших приложений.
- [xsql](https://github.com/zx06/xsql) - Кросс-СУБД CLI-инструмент, ориентированный на ИИ, с защитой в режиме только для чтения и структурированным выводом в JSON.

### Построители SQL-запросов

_Библиотеки для построения и использования SQL._

- [bqb](https://github.com/nullism/bqb) - Лёгкий и простой в освоении построитель запросов.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - Библиотека построения запросов к базе данных PostgreSQL на Go.
- [builq](https://github.com/cristalhq/builq) - Простое построение SQL-запросов в Go.
- [dba](https://github.com/kran/dba) - Построитель SQL-запросов для написанного вручную SQL, добавляющий динамические условия, плейсхолдеры с учётом диалекта и неизменяемые цепочки вызовов.
- [dbq](https://github.com/rocketlaunchr/dbq) - Операции с базой данных для Go без шаблонного кода.
- [Dotsql](https://github.com/gchaincl/dotsql) - Библиотека Go, помогающая хранить SQL-файлы в одном месте и легко их использовать.
- [gendry](https://github.com/didi/gendry) - Неинвазивный построитель SQL и мощный механизм привязки данных.
- [godbal](https://github.com/xujiajun/godbal) - Уровень абстракции баз данных (dbal) для Go. Поддерживает построитель SQL и простое получение результатов.
- [goqu](https://github.com/doug-martin/goqu) - Идиоматичный построитель SQL и библиотека запросов.
- [gosql](https://github.com/twharmon/gosql) - Построитель SQL-запросов с улучшенной поддержкой значений null.
- [Hotcoal](https://github.com/motrboat/hotcoal) - Защитите написанный вручную SQL от инъекций.
- [igor](https://github.com/galeone/igor) - Уровень абстракции для PostgreSQL, поддерживающий продвинутую функциональность и использующий синтаксис в стиле gorm.
- [jet](https://github.com/go-jet/jet) - Фреймворк для написания типобезопасных SQL-запросов на Go с возможностью легко преобразовывать результат запроса в нужную произвольную структуру объектов.
- [obreron](https://github.com/profe-ajedrez/obreron) - Быстрый и дешёвый построитель SQL, который делает только одно — строит SQL.
- [ormlite](https://github.com/pupizoid/ormlite) - Лёгкий пакет с некоторыми ORM-подобными возможностями и вспомогательными функциями для баз данных SQLite.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - Мощные методы извлечения данных, а также возможности построения запросов, не зависящие от СУБД.
- [patcher](https://github.com/Jacobbrewer1/patcher) - Мощный построитель SQL-запросов, автоматически генерирующий SQL-запросы из структур.
- [qrafter](https://github.com/SennovE/qrafter) - Типобезопасный построитель SQL-запросов с отрисовкой с учётом диалекта, интроспекцией схемы и генерацией миграций.
- [qry](https://github.com/HnH/qry) - Инструмент, генерирующий константы из файлов с чистыми SQL-запросами.
- [relica](https://github.com/coregx/relica) - Типобезопасный построитель запросов к базе данных без зависимостей в продакшене, с LRU-кешем выражений, пакетными операциями и поддержкой JOIN, подзапросов, CTE и оконных функций.
- [sg](https://github.com/go-the-way/sg) - Генератор стандартных SQL-выражений (поддерживает CRUD), написанный на Go.
- [sq](https://github.com/bokwoon95/go-structured-query) - Типобезопасный построитель SQL и отображатель структур для Go.
- [sqlc](https://github.com/kyleconroy/sqlc) - Генерация типобезопасного кода из SQL.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - Пакет для типобезопасных обобщённых CRUD-операций SQL с пагинацией, транзакциями, отладкой и пользовательскими расширениями на чистом SQL.
- [sqlf](https://github.com/leporo/sqlf) - Быстрый построитель SQL-запросов.
- [sqlh](https://github.com/kirill-scherba/sqlh) - Вспомогательная библиотека SQL без шаблонного кода с тегами структур и дженериками Go (CRUD, UPSERT, JOIN, бенчмарки).
- [sqlingo](https://github.com/lqs/sqlingo) - Лёгкий DSL для построения SQL на Go.
- [sqrl](https://github.com/elgris/sqrl) - Построитель SQL-запросов, форк Squirrel с улучшенной производительностью.
- [Squalus](https://gitlab.com/qosenergy/squalus) - Тонкая прослойка над пакетом SQL в Go, упрощающая выполнение запросов.
- [Squirrel](https://github.com/Masterminds/squirrel) - Библиотека Go, помогающая строить SQL-запросы.
- [xo](https://github.com/knq/xo) - Генерация идиоматичного кода Go для баз данных на основе существующих определений схем или пользовательских запросов с поддержкой PostgreSQL, MySQL, SQLite, Oracle и Microsoft SQL Server.

**[⬆ Наверх](#contents)**

## Драйверы баз данных

### Интерфейсы к нескольким бэкендам

- [cayley](https://github.com/google/cayley) - Графовая база данных с поддержкой нескольких бэкендов.
- [dsc](https://github.com/viant/dsc) - Подключение к хранилищам данных SQL, NoSQL и структурированным файлам.
- [dynamo](https://github.com/fogfish/dynamo) - Простая абстракция «ключ-значение» для хранения алгебраических и связанных типов данных в сервисах хранения AWS: AWS DynamoDB и AWS S3.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - Менеджер транзакций с несколькими адаптерами (sql, sqlx, gorm, mongo, ...), управляющий границами транзакций.
- [gokv](https://github.com/philippgille/gokv) - Простая абстракция хранилища «ключ-значение» и её реализации для Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB и многие другие).
- [transactor](https://github.com/metalfm/transactor) - Типобезопасная абстракция границ транзакций с адаптерами для database/sql, sqlx и pgx.

### Драйверы реляционных баз данных

- [avatica](https://github.com/apache/calcite-avatica-go) - SQL-драйвер Apache Avatica/Phoenix для database/sql.
- [bgc](https://github.com/viant/bgc) - Подключение к хранилищу данных BigQuery для Go.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - SQL-драйвер РСУБД Firebird для Go.
- [go-adodb](https://github.com/mattn/go-adodb) - Драйвер Microsoft ActiveX Object DataBase для Go, использующий database/sql.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Драйвер Microsoft MSSQL для Go.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Официальный драйвер Microsoft для Go для SQL Server, Azure SQL, Azure Synapse, SQL database in Fabric и Fabric Data Warehouse. Поддерживает Azure AD, Always Encrypted и массовые операции.
- [go-oci8](https://github.com/mattn/go-oci8) - Драйвер Oracle для Go, использующий database/sql.
- [go-rqlite](https://github.com/rqlite/gorqlite) - Клиент Go для rqlite, предоставляющий простые в использовании абстракции для работы с API rqlite.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Драйвер MySQL для Go.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - Драйвер SQLite3 для Go, использующий database/sql.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - Этот модуль Go совместим с драйвером database/sql. Он позволяет встраивать SQLite в приложение, предоставляет прямой доступ к её C API, поддерживает SQLite VFS, а также включает драйвер для GORM.
- [godror](https://github.com/godror/godror) - Драйвер Oracle для Go, использующий драйвер ODPI-C.
- [gofreetds](https://github.com/minus5/gofreetds) - Драйвер Microsoft MSSQL. Обёртка Go над [FreeTDS](https://www.freetds.org).
- [KSQL](https://github.com/VinGarcia/ksql) - Простая и мощная SQL-библиотека для Golang.
- [pgx](https://github.com/jackc/pgx) - Драйвер PostgreSQL, поддерживающий возможности сверх тех, что предоставляет database/sql.
- [pig](https://github.com/alexeyco/pig) - Простая обёртка над [pgx](https://github.com/jackc/pgx) для удобного выполнения запросов и [сканирования](https://github.com/georgysavva/scany) их результатов.
- [pq](https://github.com/lib/pq) - Драйвер Postgres на чистом Go для database/sql.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - SQLite на чистом Go.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - Подключение хуков к любому драйверу database/sql.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - Пакет sqlite — драйвер sql/database, использующий порт C-библиотеки SQLite3 без CGo.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Драйвер SurrealDB для Go.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - Нативный драйвер и драйвер database/sql для YDB (Yandex Database).

### Драйверы NoSQL-баз данных

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Клиент Aerospike на языке Go.
- [arangolite](https://github.com/solher/arangolite) - Лёгкий драйвер Golang для ArangoDB.
- [asc](https://github.com/viant/asc) - Подключение к хранилищу данных Aerospike для Go.
- [forestdb](https://github.com/couchbase/goforestdb) - Привязки Go для ForestDB.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Клиент Couchbase на Go.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - Библиотека Go для Mongo на основе официального драйвера с упрощёнными операциями над документами, обобщённой привязкой структур к коллекциям, встроенными CRUD-операциями, агрегацией, автоматическим обновлением полей, валидацией структур, хуками и программированием на основе плагинов.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Клиентская библиотека Go для Pilosa.
- [go-rejson](https://github.com/nitishm/go-rejson) - Клиент Golang для модуля ReJSON от Redis Labs, использующий клиент Redigo. Удобное хранение и обработка структур как JSON-объектов в Redis.
- [gocb](https://github.com/couchbase/gocb) - Официальный Go SDK для Couchbase.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - REST-клиент и стандартный драйвер `database/sql` для Azure Cosmos DB.
- [gocql](https://gocql.github.io) - Драйвер Apache Cassandra на языке Go.
- [godis](https://github.com/piaohao/godis) - Клиент Redis, реализованный на Golang и вдохновлённый jedis.
- [godscache](https://github.com/defcronyke/godscache) - Обёртка для пакета Go Datastore из Google Cloud Platform, добавляющая кеширование с помощью memcached.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Клиентская библиотека memcache для языка программирования Go.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Двоичный клиент Memcached для Go с поддержкой шардирования с помощью консистентного хеширования, а также SASL.
- [gorethink](https://github.com/dancannon/gorethink) - Драйвер RethinkDB на языке Go.
- [goriak](https://github.com/zegl/goriak) - Драйвер Riak KV на языке Go.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik предоставляет общую клиентскую библиотеку для Go и GopherJS для CouchDB, PouchDB и подобных баз данных.
- [mgm](https://github.com/kamva/mgm) - ODM для MongoDB на Go на основе моделей (на базе официального драйвера MongoDB).
- [mgo](https://github.com/globalsign/mgo) - (не поддерживается) Драйвер MongoDB для языка Go, реализующий богатый и хорошо протестированный набор возможностей под очень простым API в соответствии со стандартными идиомами Go.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Официальный драйвер MongoDB для языка Go.
- [neo4j](https://github.com/cihangir/neo4j) - Привязки REST API Neo4j для Golang.
- [neoism](https://github.com/jmcvetta/neoism) - Клиент Neo4j для Golang.
- [qmgo](https://github.com/qiniu/qmgo) - Драйвер MongoDB для Go. Основан на официальном драйвере MongoDB, но прост в использовании, как Mgo.
- [redeo](https://github.com/bsm/redeo) - TCP-серверы и сервисы, совместимые с протоколом Redis.
- [redigo](https://github.com/gomodule/redigo) - Redigo — клиент Go для базы данных Redis.
- [redis](https://github.com/redis/go-redis) - Клиент Redis для Golang.
- [rueidis](http://github.com/rueian/rueidis) - Быстрый клиент Redis RESP3 с автоматической конвейеризацией и клиентским кешированием при поддержке сервера.
- [xredis](https://github.com/shomali11/xredis) - Типобезопасный, настраиваемый, чистый и простой в использовании клиент Redis.

### Поисковые и аналитические базы данных

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - SQL-клиент ClickHouse для Go с совместимостью с `database/sql`.
- [effdsl](https://github.com/sdqri/effdsl) - Построитель запросов Elasticsearch для Go.
- [elastic](https://github.com/olivere/elastic) - Клиент Elasticsearch для Go.
- [elasticsql](https://github.com/cch123/elasticsql) - Преобразование SQL в DSL Elasticsearch на Go.
- [elastigo](https://github.com/mattbaird/elastigo) - Клиентская библиотека Elasticsearch.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Официальный клиент Elasticsearch для Go.
- [goes](https://github.com/OwnLocal/goes) - Библиотека для взаимодействия с Elasticsearch.
- [skizze](https://github.com/skizzehq/skizze) - Сервис и хранилище вероятностных структур данных.
- [zoekt](https://github.com/sourcegraph/zoekt) - Быстрый поиск по коду на основе триграмм.

**[⬆ Наверх](#contents)**

## Дата и время

_Библиотеки для работы с датами и временем._

- [approx](https://github.com/goschtalt/approx) - Расширение Duration с поддержкой разбора и вывода длительностей в днях, неделях и годах.
- [carbon](https://github.com/dromara/carbon) - Простой, семантичный и удобный для разработчиков пакет для работы со временем в Golang.
- [carbon](https://github.com/uniplaces/carbon) - Простое расширение Time с множеством вспомогательных методов, портированное из PHP-библиотеки Carbon.
- [cronrange](https://github.com/1set/cronrange) - Разбирает выражения временных диапазонов в стиле Cron и проверяет, попадает ли заданное время в какой-либо из диапазонов.
- [date](https://github.com/rickb777/date) - Расширяет Time для работы с датами, диапазонами дат, промежутками времени, периодами и временем суток.
- [dateparse](https://github.com/araddon/dateparse) - Разбор дат без предварительного знания формата.
- [durafmt](https://github.com/hako/durafmt) - Библиотека форматирования длительностей для Go.
- [feiertage](https://github.com/wlbr/feiertage) - Набор функций для вычисления государственных праздников в Германии, включая особенности федеральных земель (Bundesländer). Такие праздники, как Пасха, Троица, День благодарения...
- [go-anytime](https://github.com/ijt/go-anytime) - Разбор дат и времени вроде «next dec 22nd at 3pm» и диапазонов вроде «from today until next thursday» без предварительного знания формата.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - Всеобъемлющая библиотека утилит для работы с датами в Go, вдохновлённая date-fns, с более чем 140 чистыми и неизменяемыми функциями.
- [go-datebin](https://github.com/deatil/go-datebin) - Простой пакет для разбора даты и времени.
- [go-faketime](https://github.com/harkaitz/go-faketime) - Простая функция `time.Now()`, учитывающая утилиту faketime(1).
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Реализация персидского календаря (солнечной хиджры) на Go (golang).
- [go-str2duration](https://github.com/xhit/go-str2duration) - Преобразование строки в длительность. Поддерживает строки, возвращаемые time.Duration, и не только.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - Вычисление времени восхода и захода солнца для заданного местоположения.
- [go-week](https://github.com/stoewer/go-week) - Эффективный пакет для работы с недельными датами ISO8601.
- [gostradamus](https://github.com/bykof/gostradamus) - Пакет Go для работы с датами.
- [iso8601](https://github.com/relvacode/iso8601) - Эффективный разбор даты и времени в формате ISO8601 без регулярных выражений.
- [kair](https://github.com/GuilhermeCaruso/kair) - Дата и время — библиотека форматирования для Golang.
- [now](https://github.com/jinzhu/now) - Now — набор инструментов для работы со временем в Golang.
- [strftime](https://github.com/awoodbeck/strftime) - Форматировщик strftime, совместимый с C99.
- [timespan](https://github.com/SaidinWoT/timespan) - Для работы с интервалами времени, заданными временем начала и длительностью.
- [timeutil](https://github.com/leekchan/timeutil) - Полезные расширения (Timedelta, Strftime, ...) для пакета time в Golang.
- [tuesday](https://github.com/osteele/tuesday) - Функция Strftime, совместимая с Ruby.

**[⬆ Наверх](#contents)**

## Распределённые системы

_Пакеты, помогающие создавать распределённые системы._

- [arpc](https://github.com/lesismal/arpc) - Более эффективная сетевая коммуникация с поддержкой двусторонних вызовов, уведомлений и широковещательной рассылки.
- [bedrock](https://github.com/z5labs/bedrock) - Минималистичная, модульная и компонуемая основа для быстрой разработки сервисов и более специализированных фреймворков на Go.
- [capillaries](https://github.com/capillariesio/capillaries) - Распределённый фреймворк пакетной обработки данных.
- [circuit](https://github.com/schigh/circuit) - Автоматический выключатель (circuit breaker) с постепенным восстановлением за счёт вероятностного ограничения нагрузки.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Высокопроизводительная библиотека распределённого шаблона «Команда» для Go.
- [committer](https://github.com/vadiminshakov/committer) - Система управления распределёнными транзакциями (реализация 2PC/3PC).
- [consistent](https://github.com/buraksezer/consistent) - Консистентное хеширование с ограниченной нагрузкой.
- [consistenthash](https://github.com/mbrostami/consistenthash) - Консистентное хеширование с настраиваемым числом реплик.
- [dht](https://github.com/anacrolix/dht) - Реализация BitTorrent Kademlia DHT.
- [digota](https://github.com/digota/digota) - Микросервис электронной коммерции на gRPC.
- [dot](https://github.com/dotchain/dot/) - Распределённая синхронизация с использованием операционных преобразований (OT).
- [doublejump](https://github.com/edwingeng/doublejump) - Обновлённая версия консистентного хеша Google Jump.
- [dragonboat](https://github.com/lni/dragonboat) - Полнофункциональная высокопроизводительная библиотека мультигруппового Raft на Go.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Эффективное, стабильное и безопасное распространение файлов и ускорение загрузки образов на основе технологии p2p, призванное стать лучшей практикой и стандартным решением в облачных (cloud native) архитектурах.
- [drmaa](https://github.com/dgruber/drmaa) - Библиотека отправки заданий в планировщики кластеров на основе стандарта DRMAA.
- [dynamolock](https://cirello.io/dynamolock) - Реализация распределённых блокировок на основе DynamoDB.
- [dynatomic](https://github.com/tylfin/dynatomic) - Библиотека для использования DynamoDB в качестве атомарного счётчика.
- [emitter-io](https://github.com/emitter-io/emitter) - Высокопроизводительная распределённая безопасная платформа публикации-подписки с низкой задержкой, созданная с помощью MQTT, WebSocket и любви.
- [evans](https://github.com/ktr0731/evans) - Evans: более выразительный универсальный клиент gRPC.
- [failured](https://github.com/andy2046/failured) - Адаптивный накопительный детектор отказов (accrual failure detector) для распределённых систем.
- [flowgraph](https://github.com/vectaport/flowgraph) - Пакет для потокового программирования (flow-based programming).
- [gleam](https://github.com/chrislusf/gleam) - Быстрая масштабируемая распределённая система map/reduce, написанная на чистом Go и LuaJIT, сочетающая высокую конкурентность Go с высокой производительностью LuaJIT; работает автономно или в распределённом режиме.
- [glow](https://github.com/chrislusf/glow) - Простая в использовании масштабируемая распределённая обработка больших данных, Map-Reduce, выполнение DAG — всё на чистом Go.
- [gmsec](https://github.com/gmsec/micro) - Фреймворк для разработки распределённых систем на Go.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - Децентрализованный микросервисный фреймворк на основе протокола gossip и спецификации OpenAPI 3.0. Встроенный CLI go-doudou, ориентированный на low-code и быструю разработку, повысит вашу продуктивность.
- [go-eagle](https://github.com/go-eagle/eagle) - Фреймворк Go для API и микросервисов с удобными инструментами создания каркаса.
- [go-jump](https://github.com/dgryski/go-jump) - Порт функции консистентного хеширования «Jump» от Google.
- [go-kit](https://github.com/go-kit/kit) - Набор инструментов для микросервисов с поддержкой обнаружения сервисов, балансировки нагрузки, подключаемых транспортов, отслеживания запросов и т. д.
- [go-micro](https://github.com/micro/go-micro) - Фреймворк для разработки распределённых систем.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - Распределённая блокировка на основе MySQL.
- [go-pdu](https://github.com/pdupub/go-pdu) - Децентрализованная социальная сеть на основе идентификации.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Библиотека для определения асинхронных проверок работоспособности сервисов на Golang.
- [go-zero](https://github.com/tal-tech/go-zero) - Веб- и RPC-фреймворк. Создан для обеспечения стабильности высоконагруженных сайтов за счёт отказоустойчивой архитектуры. Встроенный goctl значительно повышает продуктивность разработки.
- [gorpc](https://github.com/valyala/gorpc) - Простая, быстрая и масштабируемая RPC-библиотека для высоких нагрузок.
- [grpc-go](https://github.com/grpc/grpc-go) - Реализация gRPC на языке Go. RPC на основе HTTP/2.
- [health](https://github.com/schigh/health) - Проверка работоспособности сервисов Go с поддержкой проб Kubernetes.
- [hprose](https://github.com/hprose/hprose-golang) - Очень крутая RPC-библиотека, уже поддерживает более 25 языков.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - Пакет jsonrpc помогает реализовать JSON-RPC 2.0.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - Реализация HTTP-клиента JSON-RPC 2.0.
- [K8gb](https://github.com/k8gb-io/k8gb) - Облачный (cloud native) глобальный балансировщик для Kubernetes.
- [Kitex](https://github.com/cloudwego/kitex) - Высокопроизводительный и легко расширяемый RPC-фреймворк на Golang, помогающий разработчикам создавать микросервисы. Если при разработке микросервисов вам важны прежде всего производительность и расширяемость, Kitex может стать хорошим выбором.
- [Kratos](https://github.com/go-kratos/kratos) - Модульный и простой в использовании микросервисный фреймворк на Go.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - Лёгкие отказоустойчивые потоки сообщений для NATS.
- [lock](https://github.com/ubgo/lock) - Семейство распределённых блокировок с одним интерфейсом Go и пятью бэкендами (filelock, flock, Redis, Postgres, etcd) — токены ограждения (fencing tokens), режим семафора и хуки наблюдаемости для всех бэкендов.
- [lura](https://github.com/luraproject/lura) - Сверхпроизводительный фреймворк API-шлюзов с middleware.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - Полностью соответствующий спецификации, встраиваемый высокопроизводительный брокер MQTT v5/v3 для IoT, умного дома и pubsub.
- [NATS](https://github.com/nats-io/nats-server) - NATS — простая, безопасная и производительная коммуникационная система для цифровых систем, сервисов и устройств.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Инструментирование OpenTelemetry на этапе компиляции для Golang.
- [oras](https://github.com/oras-project/oras) - CLI и библиотека для артефактов OCI в реестрах контейнеров.
- [outbox](https://github.com/oagudo/outbox) - Лёгкая библиотека для шаблона транзакционного исходящего ящика (transactional outbox) в Go, не привязанная к конкретной реляционной базе данных или брокеру.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer — библиотека Go, реализующая шаблон outbox.
- [pglock](https://cirello.io/pglock) - Реализация распределённых блокировок на основе PostgreSQL.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Сервер и клиент JSON-RPC на Golang со спецификацией Protobuf.
- [raft](https://github.com/hashicorp/raft) - Реализация протокола консенсуса Raft на Golang от HashiCorp.
- [raft](https://github.com/etcd-io/raft) - Реализация протокола консенсуса Raft на Go от CoreOS.
- [rain](https://github.com/cenkalti/rain) - Клиент и библиотека BitTorrent.
- [redis-lock](https://github.com/bsm/redislock) - Упрощённая реализация распределённых блокировок с использованием Redis.
- [resgate](https://resgate.io/) - API-шлюз реального времени для создания REST API, API реального времени и RPC API, в которых все клиенты бесшовно синхронизированы.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - Фреймворк для микросервисов с обнаружением сервисов, балансировкой нагрузки и сопутствующими возможностями.
- [rpcx](https://github.com/smallnest/rpcx) - Распределённый фреймворк RPC-сервисов с подключаемыми компонентами, подобный Dubbo от Alibaba.
- [Semaphore](https://github.com/jexia/semaphore) - Простой оркестратор (микро)сервисов.
- [servicepack](https://github.com/psyb0t/servicepack) - Фреймворк для конкурентного запуска нескольких сервисов в одном бинарном файле — локально или с распределением по нескольким машинам.
- [sleuth](https://github.com/ursiform/sleuth) - Библиотека для автообнаружения в p2p-сети без ведущего узла и RPC между HTTP-сервисами (с использованием [ZeroMQ](https://github.com/zeromq/libzmq)).
- [sponge](https://github.com/zhufuyi/sponge) - Фреймворк распределённой разработки, объединяющий автоматическую генерацию кода, фреймворки gin и grpc и базовые фреймворки разработки.
- [Tarmac](https://github.com/tarmac-project/tarmac) - Фреймворк для написания функций, микросервисов или монолитов на WebAssembly
- [Temporal](https://github.com/temporalio/sdk-go) - Система надёжного выполнения (durable execution), делающая код отказоустойчивым и простым.
- [torrent](https://github.com/anacrolix/torrent) - Пакет клиента BitTorrent.
- [trpc-go](https://github.com/trpc-group/trpc-go) - Реализация tRPC на языке Go — подключаемого высокопроизводительного RPC-фреймворка.

**[⬆ Наверх](#contents)**

## Динамический DNS

_Инструменты для обновления записей динамического DNS._

- [DDNS](https://github.com/skibish/ddns) - Персональный DDNS-клиент с Digital Ocean Networking DNS в качестве бэкенда.
- [dyndns](https://gitlab.com/alcastle/dyndns) - Фоновый процесс на Go, который регулярно и автоматически проверяет ваш IP-адрес и обновляет одну или несколько записей динамического DNS для доменов Google при каждом изменении адреса.
- [GoDNS](https://github.com/timothyye/godns) - Клиентский инструмент динамического DNS с поддержкой DNSPod и HE.net, написанный на Go.

**[⬆ Наверх](#contents)**

## Электронная почта

_Библиотеки и инструменты для создания и отправки электронных писем._

- [chasquid](https://blitiri.com.ar/p/chasquid) - SMTP-сервер, написанный на Go.
- [douceur](https://github.com/aymerick/douceur) - Встраивание CSS в HTML-письма (inliner).
- [email](https://github.com/jordan-wright/email) - Надёжная и гибкая библиотека для работы с электронной почтой на Go.
- [email-verifier](https://github.com/AfterShip/email-verifier) - Библиотека Go для проверки адресов электронной почты без отправки писем.
- [go-dkim](https://github.com/toorop/go-dkim) - Библиотека DKIM для подписи и проверки электронных писем.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - Библиотека Golang для получения канонического представления адреса электронной почты.
- [go-imap](https://github.com/BrianLeishman/go-imap) - IMAP-клиент «всё включено» с автоматическим переподключением, OAuth2, поддержкой IDLE и встроенным разбором MIME.
- [go-imap](https://github.com/emersion/go-imap) - Библиотека IMAP для клиентов и серверов.
- [go-mail](https://github.com/wneessen/go-mail) - Простая библиотека Go для отправки писем.
- [go-message](https://github.com/emersion/go-message) - Библиотека потоковой обработки для формата интернет-сообщений (Internet Message Format) и почтовых сообщений.
- [go-premailer](https://github.com/vanng822/go-premailer) - Встраивание стилей в HTML-письма на Go.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - Очень простой пакет для отправки писем с SMTP Keep Alive и двумя тайм-аутами: на подключение и на отправку.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Клиент для API SpamCheck от Postmark, оценивающий исходное письмо по правилам SpamAssassin.
- [Hectane](https://github.com/hectane/hectane) - Лёгкий SMTP-клиент, предоставляющий HTTP API.
- [hermes](https://github.com/matcornic/hermes) - Пакет Golang, генерирующий чистые адаптивные HTML-письма.
- [Maddy](https://github.com/foxcpp/maddy) - Почтовый сервер «всё в одном» (SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE)
- [mailchain](https://github.com/mailchain/mailchain) - Отправка зашифрованных писем на блокчейн-адреса, написано на Go.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Библиотека Go для отправки почты через API Mailgun.
- [MailHog](https://github.com/mailhog/MailHog) - Тестирование электронной почты и SMTP с веб-интерфейсом и API.
- [Mailpit](https://github.com/axllent/mailpit) - Инструмент тестирования электронной почты и SMTP для разработчиков.
- [mailx](https://github.com/valord577/mailx) - Mailx — библиотека, упрощающая отправку электронной почты через SMTP. Является улучшением стандартной библиотеки Golang `net/smtp`.
- [mox](https://github.com/mjl-/mox) - Современный полнофункциональный защищённый почтовый сервер для самостоятельно размещаемой почты, не требующий особого обслуживания.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - Библиотека Go от SendGrid для отправки электронной почты.
- [smtp](https://github.com/mailhog/smtp) - Конечный автомат протокола SMTP-сервера.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - Лёгкий настраиваемый многопоточный фейковый SMTP-сервер. Имитирует любое поведение SMTP для вашей тестовой среды.
- [tickstem/verify](https://github.com/tickstem/verify) - Проверяйте адреса электронной почты до того, как они попадут в базу данных: синтаксис, поиск MX-записей, одноразовые домены и ролевые почтовые ящики.
- [truemail-go](https://github.com/truemail-rb/truemail-go) - Настраиваемый валидатор/верификатор адресов электронной почты для Golang. Проверка через регулярные выражения, DNS, SMTP и не только.

**[⬆ Наверх](#contents)**

## Встраиваемые скриптовые языки

_Встраивание других языков в код на Go._

- [anko](https://github.com/mattn/anko) - Скриптовый интерпретатор, написанный на Go.
- [binder](https://github.com/alexeyco/binder) - Библиотека привязки Go к Lua на основе [gopher-lua](https://github.com/yuin/gopher-lua).
- [cel-go](https://github.com/google/cel-go) - Быстрое, переносимое вычисление выражений без полноты по Тьюрингу с постепенной типизацией.
- [ecal](https://github.com/krotik/ecal) - Простой встраиваемый скриптовый язык с поддержкой конкурентной обработки событий.
- [expr](https://github.com/antonmedv/expr) - Движок вычисления выражений для Go: быстрый, без полноты по Тьюрингу, с динамической и статической типизацией.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - PHP, встроенный в Go, с обработчиком `net/http`.
- [gentee](https://github.com/gentee/gentee) - Встраиваемый скриптовый язык программирования.
- [gisp](https://github.com/jcla1/gisp) - Простой LISP на Go.
- [go-lua](https://github.com/Shopify/go-lua) - Порт виртуальной машины Lua 5.2 на чистый Go.
- [go-lua](https://github.com/speedata/go-lua) - Виртуальная машина Lua 5.4, реализованная на чистом Go.
- [go-php](https://github.com/deuill/go-php) - Привязки PHP для Go.
- [goal](https://codeberg.org/anaseto/goal) - Встраиваемый скриптовый язык для работы с массивами.
- [goja](https://github.com/dop251/goja) - Реализация ECMAScript 5.1(+) на Go.
- [golua](https://github.com/aarzilli/golua) - Привязки Go к C API Lua.
- [gopher-lua](https://github.com/yuin/gopher-lua) - Виртуальная машина и компилятор Lua 5.1, написанные на Go.
- [gval](https://github.com/PaesslerAG/gval) - Гибко настраиваемый язык выражений, написанный на Go.
- [metacall](https://github.com/metacall/core) - Кроссплатформенная полиглотная среда выполнения с поддержкой NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol и других языков.
- [ngaro](https://github.com/db47h/ngaro) - Встраиваемая реализация виртуальной машины Ngaro, позволяющая писать скрипты на Retro.
- [prolog](https://github.com/ichiban/prolog) - Встраиваемый Prolog.
- [purl](https://github.com/ian-kent/purl) - Perl 5.18.2, встроенный в Go.
- [starlark-go](https://github.com/google/starlark-go) - Реализация Starlark на Go: Python-подобный язык с детерминированным вычислением и герметичным выполнением.
- [starlet](https://github.com/1set/starlet) - Обёртка Go для [starlark-go](https://github.com/google/starlark-go), упрощающая выполнение скриптов, предлагающая преобразование данных и полезные библиотеки и расширения Starlark.
- [tengo](https://github.com/d5/tengo) - Скриптовый язык для Go с компиляцией в байт-код.
- [Wa/凹语言](https://github.com/wa-lang/wa) - Язык программирования Wa, встроенный в Go.

**[⬆ Наверх](#contents)**

## Обработка ошибок

_Библиотеки для обработки ошибок._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - Оборачивание ошибок с указанием файла, строки и имени функции в каждой точке вызова.
- [emperror](https://github.com/emperror/emperror) - Инструменты обработки ошибок и лучшие практики для библиотек и приложений на Go.
- [eris](https://github.com/rotisserie/eris) - Лучший способ обрабатывать, отслеживать и журналировать ошибки в Go. Совместим со стандартной библиотекой ошибок и github.com/pkg/errors.
- [errlog](https://github.com/snwfdhmp/errlog) - Легко модифицируемый пакет, определяющий участок исходного кода, ответственный за ошибку (и некоторые другие возможности для быстрой отладки). Подключается к любому логгеру на месте.
- [errors](https://github.com/emperror/errors) - Прозрачная замена пакета errors стандартной библиотеки и github.com/pkg/errors. Предоставляет различные примитивы обработки ошибок.
- [errors](https://github.com/neuronlabs/errors) - Простая обработка ошибок в Golang с примитивами классификации.
- [errors](https://github.com/PumpkinSeed/errors) - Простейшая обёртка для ошибок с потрясающей производительностью и минимальными накладными расходами памяти.
- [errors](https://gitlab.com/tozd/go/errors) - Ошибки с трассировкой стека и опциональными структурированными подробностями. Совместим с API github.com/pkg/errors, но не использует его внутри.
- [errors](https://github.com/naughtygopher/errors) - Прозрачная замена встроенных ошибок Go. Минималистичный пакет обработки ошибок с пользовательскими типами ошибок, понятными пользователю сообщениями, Unwrap и Is. С очень простыми и понятными вспомогательными функциями.
- [errors](https://github.com/cockroachdb/errors) - Библиотека ошибок Go с переносимостью ошибок по сети.
- [errorx](https://github.com/joomcode/errorx) - Многофункциональный пакет ошибок с трассировками стека, композицией ошибок и многим другим.
- [exception](https://github.com/rbrahul/exception) - Простой вспомогательный пакет для обработки исключений с помощью try-catch в Golang.
- [Falcon](https://github.com/SonicRoshan/falcon) - Простой, но очень мощный пакет для обработки ошибок.
- [Fault](https://github.com/Southclaws/fault) - Эргономичный механизм оборачивания ошибок, упрощающий добавление структурированных метаданных и контекста к значениям ошибок.
- [go-errr](https://github.com/go-errr/go) - Библиотека обработки ошибок для Go с семантикой Catch/Recover, цепочками обёрнутых ошибок и трассировками стека.
- [go-multierror](https://github.com/hashicorp/go-multierror) - Пакет Go (golang) для представления списка ошибок в виде одной ошибки.
- [metaerr](https://github.com/quantumcycle/metaerr) - Библиотека для создания собственных построителей ошибок, формирующих структурированные ошибки с метаданными из разных источников и опциональными трассировками стека.
- [multierr](https://github.com/uber-go/multierr) - Пакет для представления списка ошибок в виде одной ошибки.
- [oops](https://github.com/samber/oops) - Обработка ошибок с контекстом, трассировкой стека и фрагментами исходного кода.
- [tracerr](https://github.com/ztrue/tracerr) - Ошибки Golang с трассировкой стека и фрагментами исходного кода.

**[⬆ Наверх](#contents)**

## Работа с файлами

_Библиотеки для работы с файлами и файловыми системами._

- [afero](https://github.com/spf13/afero) - Система абстракции файловых систем для Go.
- [afs](https://github.com/viant/afs) - Абстрактное файловое хранилище (mem, scp, zip, tar, облака: s3, gs) для Go.
- [baraka](https://github.com/xis/baraka) - Библиотека для простой обработки загрузки файлов по HTTP.
- [checksum](https://github.com/codingsince1985/checksum) - Вычисление дайджестов сообщений, таких как MD5, SHA256, SHA1, CRC или BLAKE2s, для больших файлов.
- [copy](https://github.com/otiai10/copy) - Рекурсивное копирование каталогов.
- [fastwalk](https://github.com/charlievieth/fastwalk) - Быстрая библиотека параллельного обхода каталогов (используется в [fzf](https://github.com/junegunn/fzf)).
- [flop](https://github.com/homedepot/flop) - Библиотека файловых операций, стремящаяся к паритету возможностей с [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html).
- [gdu](https://github.com/dundee/gdu) - Анализатор использования диска с консольным интерфейсом.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - Загрузка CSV-файлов с помощью тегов.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - Копирование файлов для людей.
- [go-exiftool](https://github.com/barasher/go-exiftool) - Привязки Go для ExifTool — известной библиотеки для извлечения максимального количества метаданных (EXIF, IPTC, ...) из файлов (изображений, PDF, офисных документов, ...).
- [go-gtfs](https://github.com/artonge/go-gtfs) - Загрузка файлов GTFS в Go.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - Пакет для преобразования HTML-шаблона в PDF-файл.
- [goflat](https://github.com/lzambarda/goflat) - Обобщённый сериализатор/десериализатор плоских файлов с поддержкой контекста.
- [gofs](https://github.com/no-src/gofs) - Готовый к использованию кроссплатформенный инструмент синхронизации файлов в реальном времени.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Обработка PDF/A для Go.
- [gulter](https://github.com/adelowo/gulter) - Простое HTTP-middleware для автоматической обработки всех ваших задач по загрузке файлов
- [gut/yos](https://github.com/1set/gut) - Простой и надёжный пакет для файловых операций, таких как копирование, перемещение, сравнение и вывод списка файлов, каталогов и символических ссылок.
- [gxpdf](https://github.com/coregx/gxpdf) - Современная библиотека для работы с PDF на всех этапах жизненного цикла для Go — разбор, извлечение таблиц, генерация и подпись документов без зависимостей от CGO.
- [higgs](https://github.com/dastoori/higgs) - Крошечная кроссплатформенная библиотека Go для скрытия и отображения файлов и каталогов.
- [iso9660](https://github.com/kdomanski/iso9660) - Пакет для чтения и создания образов дисков ISO9660
- [notify](https://github.com/rjeczalik/notify) - Библиотека уведомлений о событиях файловой системы с простым API, похожим на os/signal.
- [opc](https://github.com/qmuntal/opc) - Загрузка файлов Open Packaging Conventions (OPC) для Go.
- [parquet](https://github.com/parsyl/parquet) - Чтение и запись файлов [parquet](https://parquet.apache.org).
- [pathtype](https://github.com/jonchun/pathtype) - Работа с путями как с отдельным типом вместо строк.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - Обработчик PDF.
- [skywalker](https://github.com/dixonwille/skywalker) - Пакет для удобного конкурентного обхода файловой системы.
- [todotxt](https://github.com/1set/todotxt) - Библиотека Go для файлов [_todo.txt_](http://todotxt.org/) Джины Трапани, поддерживающая разбор и обработку списков задач в [формате _todo.txt_](https://github.com/todotxt/todo.txt).
- [vfs](https://github.com/C2FO/vfs) - Подключаемый, расширяемый и продуманный набор функций для работы с файловыми системами в Go для различных типов файловых систем, таких как os, S3 и GCS.

**[⬆ Наверх](#contents)**

## Финансы

_Пакеты для бухгалтерского учёта и финансов._

- [accounting](https://github.com/leekchan/accounting) - Форматирование денежных сумм и валют для Golang.
- [ach](https://github.com/moov-io/ach) - Средство чтения, записи и проверки файлов автоматизированной клиринговой палаты (ACH).
- [bbgo](https://github.com/c9s/bbgo) - Фреймворк торговых ботов для криптовалют, написанный на Go. Включает общий API криптобирж, стандартные индикаторы, бэктестинг и множество встроенных стратегий.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - Клиент Go для BingX API v3 с более чем 260 методами, фьючерсами USDT-M/Coin-M, спотом, TradFi, потоками WebSocket и копи-трейдингом.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Клиент Go для Bitget UTA API v3 с типизированными моделями, строковым представлением цен, WebSocket с автоматическим переподключением и демо-торговлей.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Клиент Go для Bybit V5 API с аутентификацией HMAC/RSA, потоками WebSocket, демо-торговлей и инструментами TradFi.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - Клиент для индекса страха и жадности (Fear & Greed Index) от CNN с семью составляющими индикаторами и ежедневной историей примерно за год.
- [currency](https://github.com/bojanz/currency) - Работа с денежными суммами, предоставление информации о валютах и их форматирование.
- [currency](https://github.com/naughtygopher/currency) - Высокопроизводительный и точный пакет денежных вычислений.
- [dec128](https://github.com/jokruger/dec128) - Высокопроизводительные 128-битные десятичные числа с фиксированной точкой.
- [decimal](https://github.com/shopspring/decimal) - Десятичные числа с фиксированной точкой произвольной точности.
- [decimal](https://github.com/aytechnet/decimal) - Высокопроизводительный 64-битный десятичный тип, частично совместимый с [shopspring/decimal](https://github.com/shopspring/decimal) и int64, включая вес и длину.
- [decimal](https://github.com/govalues/decimal) - Неизменяемые десятичные числа с арифметикой без паник.
- [decimal](https://github.com/klokare/decimal) - Десятичный тип фиксированного размера без аллокаций для случаев, когда произвольная точность не нужна.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - Ставки НДС и форматы номеров плательщиков НДС для 45 европейских стран, встраиваемые на этапе компиляции и ежедневно обновляемые из базы TEDB Европейской комиссии.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - Быстрая и точная сериализация и арифметика для небольших десятичных чисел с фиксированной точкой
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - Быстрый и простой денежный тип с фиксированной точкой по ISO4217.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Клиент Go для Glassnode Basic API с 25 категориями метрик, типизированными структурами, пакетными эндпоинтами, данными на момент времени (Point-in-Time) и без зависимостей.
- [go-finance](https://github.com/alpeb/go-finance) - Библиотека финансовых функций для расчёта временной стоимости денег (аннуитетов), денежных потоков, конвертации процентных ставок, облигаций и амортизации.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - Модуль для получения курсов валют, проверки номеров плательщиков НДС через VIES и проверки номеров банковских счетов IBAN.
- [go-money](https://github.com/rhymond/go-money) - Реализация шаблона «Деньги» (Money) Фаулера.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - Библиотека для криптовалютного API NOWPayments.
- [gobl](https://github.com/invopop/gobl) - Фреймворк для счетов и платёжных документов. Основан на JSON Schema. Автоматизирует расчёт и проверку налогов, включает инструменты для преобразования в глобальные форматы.
- [indicator](https://github.com/cinar/indicator) - Библиотека технического анализа, предоставляющая финансовые индикаторы, стратегии и фреймворк для бэктестинга.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - Клиент Go для REST и WebSocket API KuCoin (UTA и Classic) с аутентификацией HMAC-SHA256, строковым представлением цен и типизированной иерархией ошибок.
- [ledger](https://github.com/formancehq/ledger) - Программируемый финансовый реестр, служащий основой для приложений, работающих с движением денежных средств.
- [money](https://github.com/govalues/money) - Неизменяемые денежные суммы и обменные курсы с арифметикой без паник.
- [ofxgo](https://github.com/aclindsa/ofxgo) - Запросы к серверам OFX и/или разбор их ответов (с примером клиента командной строки).
- [okx-go](https://github.com/tigusigalpa/okx-go) - Клиент Go для OKX v5 API с 335 REST-эндпоинтами, 53 каналами WebSocket, поддержкой дженериков и автоматическим переподключением.
- [orderbook](https://github.com/i25959341/orderbook) - Движок сопоставления заявок для книги лимитных ордеров на Golang.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - Встраиваемая книга лимитных ордеров и движок сопоставления с точным целочисленным ценообразованием, однопоточным ядром записи и восстановлением после сбоев через журнал упреждающей записи.
- [payme](https://github.com/jovandeginste/payme) - Генератор QR-кодов (ASCII и PNG) для платежей SEPA.
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Всеобъемлющий, полностью типизированный Go SDK без зависимостей для API Paystack.
- [swift](https://code.pfad.fr/swift/) - Офлайн-проверка корректности IBAN (международного номера банковского счёта) и получение BIC (для некоторых стран).
- [techan](https://github.com/sdcoffey/techan) - Библиотека технического анализа с продвинутым анализом рынка и торговыми стратегиями.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Клиент Go для Telegram Wallet Pay API с проверкой вебхуков через HMAC-SHA256 и middleware для net/http, Gin и Echo.
- [ticker](https://github.com/achannarasappa/ticker) - Терминальный монитор акций и трекер позиций по акциям.
- [transaction](https://github.com/claygod/transaction) - Встраиваемая транзакционная база данных счетов, работающая в многопоточном режиме.
- [udecimal](https://github.com/quagmt/udecimal) - Высокопроизводительная высокоточная библиотека десятичных чисел с фиксированной точкой без аллокаций для финансовых приложений.
- [vat](https://github.com/dannyvankooten/vat) - Проверка номеров плательщиков НДС и ставки НДС в ЕС.

**[⬆ Наверх](#contents)**

## Формы

_Библиотеки для работы с формами._

- [bind](https://github.com/robfig/bind) - Привязка данных формы к любым значениям Go.
- [conform](https://github.com/leebenson/conform) - Держит пользовательский ввод под контролем. Обрезает, санирует и очищает данные на основе тегов структур.
- [form](https://github.com/go-playground/form) - Декодирует url.Values в значения Go и кодирует значения Go в url.Values. Поддержка двойных массивов и полных отображений.
- [formam](https://github.com/monoculum/formam) - Декодирование значений формы в структуру.
- [forms](https://github.com/albrow/forms) - Независимая от фреймворков библиотека для разбора и валидации данных форм и JSON с поддержкой multipart-форм и файлов.
- [gbind](https://github.com/bdjimmy/gbind) - Привязка данных к любому значению Go. Может использовать встроенные и пользовательские возможности привязки выражений; поддерживает валидацию данных
- [gorilla/csrf](https://github.com/gorilla/csrf) - Защита от CSRF для веб-приложений и сервисов на Go.
- [httpin](https://github.com/ggicci/httpin) - Декодирование HTTP-запроса в пользовательскую структуру, включая строку запроса, формы, HTTP-заголовки и т. д.
- [nosurf](https://github.com/justinas/nosurf) - Middleware для защиты от CSRF для Go.
- [qs](https://github.com/sonh/qs) - Модуль Go для кодирования структур в параметры URL-запроса.
- [queryparam](https://github.com/tomwright/queryparam) - Декодирование `url.Values` в пригодные для использования значения структур стандартных или пользовательских типов.
- [roamer](https://github.com/slipros/roamer) - Избавляет от шаблонного кода для разбора HTTP-запросов, привязывая cookie, заголовки, параметры запроса, параметры пути, тело и многое другое к структурам с помощью простых тегов.

**[⬆ Наверх](#contents)**

## Функциональное программирование

_Пакеты для поддержки функционального программирования в Go._

- [fp-go](https://github.com/repeale/fp-go) - Коллекция вспомогательных средств функционального программирования на основе дженериков Golang 1.18+.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Монады и возможности функционального программирования для Golang.
- [fuego](https://github.com/seborama/fuego) - Функциональный эксперимент на Go.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - Библиотека функциональных вспомогательных средств, предоставляющая Map, Filter, Reduce и другие потоковые операции над обобщёнными срезами Go 1.18+ с ленивыми вычислениями и механизмами обработки ошибок.
- [g](https://github.com/enetx/g) - Фреймворк функционального программирования для Go.
- [go-functional](https://github.com/BooleanCat/go-functional) - Функциональное программирование на Go с использованием дженериков
- [go-underscore](https://github.com/tobyhede/go-underscore) - Полезная коллекция удобных функциональных утилит для коллекций в Go.
- [gofp](https://github.com/rbrahul/gofp) - Мощная библиотека утилит для Golang в стиле lodash.
- [mo](https://github.com/samber/mo) - Монады и популярные абстракции ФП на основе дженериков Go 1.18+ (Option, Result, Either...).
- [underscore](https://github.com/rjNemo/underscore) - Вспомогательные средства функционального программирования для Go 1.18 и новее.
- [valor](https://github.com/phelmkamp/valor) - Обобщённые типы option и result, которые могут содержать значение.

**[⬆ Наверх](#contents)**

## Разработка игр

_Замечательные библиотеки для разработки игр._

- [Ark](https://github.com/mlange-42/ark) - Система «сущность-компонент» (ECS) на основе архетипов для Go.
- [due](https://github.com/dobyte/due) - Фреймворк распределённого игрового сервера с модульной компонентной архитектурой, предоставляющий шлюзы tcp, kcp, ws и quic.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Предельно простой 2D-игровой движок на Go.
- [ecs](https://github.com/andygeiss/ecs) - Создайте собственный игровой движок на основе концепции «сущность-компонент-система» (ECS) на Golang.
- [engo](https://github.com/EngoEngine/engo) - Engo — 2D-игровой движок с открытым исходным кодом, написанный на Go. Следует парадигме «сущность-компонент-система».
- [fantasyname](https://github.com/s0rg/fantasyname) - Генератор фэнтезийных имён.
- [g3n](https://github.com/g3n/engine) - 3D-игровой движок на Go.
- [go-astar](https://github.com/beefsack/go-astar) - Реализация алгоритма поиска пути A\* на Go.
- [go-sdl2](https://github.com/veandco/go-sdl2) - Привязки Go для [Simple DirectMedia Layer](https://www.libsdl.org/).
- [go3d](https://github.com/ungerik/go3d) - Ориентированный на производительность пакет 2D/3D-математики для Go.
- [gogpu](https://github.com/gogpu/gogpu) - Фреймворк GPU-приложений с управлением окнами, вводом и отрисовкой на основе WebGPU — сокращает более 480 строк GPU-кода примерно до 20, без CGO (экосистема GoGPU: [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Реализация WebGPU на чистом Go с бэкендами Vulkan, DX12 и Metal, без CGO (часть экосистемы [GoGPU](https://github.com/gogpu)).
- [GOKe](https://github.com/kjkrol/goke) - Data-oriented (DOD) ECS-движок на основе архетипов, использующий выровненную по кешу L1 фрагментированную раскладку SoA для предсказуемого плавного роста памяти и путей выполнения без аллокаций.
- [gonet](https://github.com/xtaci/gonet) - Каркас игрового сервера, реализованный на Golang.
- [goworld](https://github.com/xiaonanln/goworld) - Масштабируемый движок игрового сервера с фреймворком «пространство-сущность» и горячей заменой.
- [grid](https://github.com/s0rg/grid) - Обобщённая 2D-сетка с бросанием лучей, построением теней и поиском пути.
- [Leaf](https://github.com/name5566/leaf) - Лёгкий фреймворк игрового сервера.
- [nano](https://github.com/lonng/nano) - Лёгкий, удобный, высокопроизводительный фреймворк игрового сервера на Golang.
- [Oak](https://github.com/oakmound/oak) - Игровой движок на чистом Go.
- [Pi](https://github.com/elgopher/pi) - Игровой движок для создания ретро-игр для современных компьютеров. Вдохновлён Pico-8 и работает на Ebitengine.
- [Pitaya](https://github.com/topfreegames/pitaya) - Масштабируемый фреймворк игрового сервера с поддержкой кластеризации и клиентскими библиотеками для iOS, Android, Unity и других платформ через C SDK.
- [Pixel](https://github.com/gopxl/pixel) - Тщательно проработанная библиотека для 2D-игр на Go.
- [prototype](https://github.com/gonutz/prototype) - Кроссплатформенная (Windows/Linux/Mac) библиотека для создания настольных игр с минималистичным API.
- [raylib-go](https://github.com/gen2brain/raylib-go) - Привязки Go для [raylib](https://www.raylib.com/) — простой и удобной библиотеки для обучения программированию видеоигр.
- [sceneCamera](https://github.com/donomii/sceneCamera) - Перемещение камеры и матрицы вида/проекции для режимов отрисовки «музей», FPS, RTS и стерео.
- [termloop](https://github.com/JoelOtter/termloop) - Терминальный игровой движок для Go, построенный поверх Termbox.
- [tile](https://github.com/kelindar/tile) - Data-oriented и дружественная к кешу библиотека 2D-сеток (TileMap), включающая поиск пути, наблюдателей и импорт/экспорт.

**[⬆ Наверх](#contents)**

## Генераторы

_Инструменты, генерирующие код на Go._

- [apispec](https://github.com/ehabterra/apispec) - Генерация спецификаций OpenAPI 3.1 из кода Go без аннотаций, а также браузерный интерфейс для настройки, предпросмотра и изучения графа вызовов.
- [convergen](https://github.com/reedom/convergen) - Многофункциональный генератор кода копирования из типа в тип.
- [copygen](https://github.com/switchupcb/copygen) - Генерация любого кода на основе типов Go, включая преобразователи из типа в тип (код копирования), по умолчанию без рефлексии.
- [generis](https://github.com/senselogic/GENERIS) - Инструмент генерации кода, предоставляющий дженерики, макросы свободной формы, условную компиляцию и HTML-шаблонизацию.
- [go-apispec](https://github.com/antst/go-apispec) - Генерация спецификаций OpenAPI 3.1 из исходного кода Go с помощью статического анализа с автоматическим определением фреймворка.
- [go-enum](https://github.com/abice/go-enum) - Генерация кода для перечислений из комментариев в коде.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - Генерация кода для кодирования перечислений из комментариев в коде.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Методы запросов для Go в стиле LINQ из .NET.
- [goderive](https://github.com/awalterschulze/goderive) - Выводит функции из входных типов
- [goverter](https://github.com/jmattheis/goverter) - Генерация преобразователей путём определения интерфейса.
- [GoWrap](https://github.com/hexdigest/gowrap) - Генерация декораторов для интерфейсов Go с помощью простых шаблонов.
- [interfaces](https://github.com/rjeczalik/interfaces) - Инструмент командной строки для генерации определений интерфейсов.
- [jennifer](https://github.com/dave/jennifer) - Генерация произвольного кода Go без шаблонов.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - Этот пакет содержит набор утилит для генерации шаблонного кода Go для сервисов на основе определений API OpenAPI 3.0.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - Генерация HTTP-сервера и клиента из protobuf.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Генерация типизированных инструментов, промптов и ресурсов MCP из Protocol Buffers.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - Библиотека для динамического создания типов.

**[⬆ Наверх](#contents)**

## Геоданные

_Географические инструменты и серверы_

- [borders](https://github.com/kpfaulkner/borders) - Определяет границы изображений и преобразует их в GeoJSON для ГИС-операций.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - Официальный Go SDK для GeoEngine, обеспечивающий высокопроизводительный приём геопространственных данных с задержкой в единицы миллисекунд.
- [geoos](https://github.com/spatial-go/geoos) - Библиотека, предоставляющая пространственные данные и геометрические алгоритмы.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver — пакет Go для управления экземпляром GeoServer через GeoServer REST API.
- [gismanager](https://github.com/hishamkaram/gismanager) - Публикация ваших ГИС-данных (векторных данных) в PostGIS и Geoserver.
- [godal](https://github.com/airbusgeo/godal) - Обёртка Go для GDAL.
- [H3](https://github.com/uber/h3-go) - Привязки Go для H3 — иерархической гексагональной системы геопространственного индексирования.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - Утилиты преобразования между индексами H3 и GeoJSON.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - Распределение ячеек Uber H3geo по виртуальным узлам.
- [mbtileserver](https://github.com/consbio/mbtileserver) - Простой сервер на Go для тайлов карт, хранящихся в формате mbtiles.
- [osm](https://github.com/paulmach/osm) - Библиотека для чтения, записи и работы с данными и API OpenStreetMap.
- [pbf](https://github.com/maguro/pbf) - Кодировщик/декодер OpenStreetMap PBF на Golang.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - Преобразование GeoJSON в ячейки S2 и демонстрация некоторых возможностей геометрии S2 на карте.
- [S2 geometry](https://github.com/golang/geo) - Библиотека геометрии S2 на Go.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures — библиотека 2D-геометрии, предоставляющая типы Go для моделирования геометрических объектов, а также алгоритмы для работы с ними.
- [Tile38](https://github.com/tidwall/tile38) - База данных геолокации с пространственным индексом и геозонированием в реальном времени.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Проект для удобного использования и преобразования LonLat, Point и Tile для отображения информации, маркеров и т. п. на карте с использованием проекции Web Mercator.
- [WGS84](https://github.com/wroge/wgs84) - Библиотека для преобразования и трансформации координат (ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ Наверх](#contents)**

## Компиляторы Go

_Инструменты для компиляции Go в другие языки и наоборот._

- [bunster](https://github.com/yassinebenaid/bunster) - Компиляция shell-скриптов в Go.
- [c4go](https://github.com/Konstantin8105/c4go) - Транспиляция кода на C в код на Go.
- [cxgo](https://github.com/gotranspile/cxgo) - Транспиляция кода на C в код на Go.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Транспиляция Go в код для Arduino.
- [f4go](https://github.com/Konstantin8105/f4go) - Транспиляция кода на FORTRAN 77 в код на Go.
- [go2hx](https://github.com/go2hx/go2hx) - Компилятор из Go в Haxe, а затем в JavaScript/C++/Java/C#.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Компилятор из Go в JavaScript.

**[⬆ Наверх](#contents)**

## Горутины

_Инструменты для управления горутинами и работы с ними._

- [anchor](https://github.com/kyuff/anchor) - Библиотека для управления жизненным циклом компонентов в микросервисных архитектурах.
- [ants](https://github.com/panjf2000/ants) - Высокопроизводительный и экономичный пул горутин на Go.
- [artifex](https://github.com/borderstech/artifex) - Простая очередь заданий в памяти для Golang с диспетчеризацией по воркерам.
- [async](https://github.com/yaitoo/async) - Пакет асинхронных задач в стиле async/await для Go.
- [async](https://github.com/reugn/async) - Альтернативная библиотека синхронизации для Go (Future, Promise, блокировки).
- [async](https://github.com/studiosol/async) - Безопасный способ асинхронного выполнения функций с восстановлением в случае паники.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob — менеджер асинхронной очереди заданий с лёгким, понятным и быстрым кодом.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - Автомасштабируемый пул воркеров для Go без настройки, с планированием с учётом приоритетов.
- [breaker](https://github.com/kamilsk/breaker) - Гибкий механизм, позволяющий прерывать поток выполнения.
- [channelify](https://github.com/ddelizia/channelify) - Преобразуйте свою функцию так, чтобы она возвращала каналы, для простой и мощной параллельной обработки.
- [conc](https://github.com/sourcegraph/conc) - `conc` — ваш набор инструментов для структурированной конкурентности в Go, делающий типовые задачи проще и безопаснее.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - Ограничитель конкурентности с поддержкой тайм-аутов, динамических приоритетов и отмены горутин через контекст.
- [conexec](https://github.com/ITcathyh/conexec) - Набор инструментов для конкурентности, помогающий выполнять функции конкурентно эффективным и безопасным способом. Поддерживает задание общего тайм-аута во избежание блокировок и использует пул горутин для повышения эффективности.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - CyclicBarrier для Golang.
- [execpool](https://github.com/hexdigest/execpool) - Пул на основе exec.Cmd, который заранее запускает заданное число процессов и при необходимости подключает к ним stdin и stdout. Очень похож на FastCGI или Apache Prefork MPM, но работает с любой командой.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - Структурированная конкурентность — это просто.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - Решение для накопления событий и их последующей обработки.
- [go-actor](https://github.com/vladopajic/go-actor) - Крошечная библиотека для написания конкурентных программ с использованием модели акторов.
- [go-floc](https://github.com/workanator/go-floc) - Простая оркестрация горутин.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - Управление порядком выполнения горутин.
- [go-future](https://github.com/jizhuozhi/go-future) - Библиотека Future/Promise с обобщёнными комбинаторами и движком выполнения DAG.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - Управляйте пулом горутин с помощью этой лёгкой библиотеки с простым API.
- [go-trylock](https://github.com/subchen/go-trylock) - Поддержка TryLock для блокировок чтения-записи в Golang.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - Аналог `sync.WaitGroup` с обработкой ошибок и управлением конкурентностью.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Go WorkerPool, вдохновлённый пулом потоков Java, предназначен для управления тяжёлыми горутинами.
- [goccm](https://github.com/zenthangplus/goccm) - Пакет Go Concurrency Manager ограничивает число горутин, которым разрешено выполняться одновременно.
- [gohive](https://github.com/loveleshsharma/gohive) - Высокопроизводительный и простой в использовании пул горутин для Go.
- [gollback](https://github.com/vardius/gollback) - Простые утилиты для асинхронных функций, предназначенные для управления выполнением замыканий и обратных вызовов.
- [goscade](https://github.com/ognick/goscade) - Минималистичный оркестратор жизненного цикла компонентов Go с графами зависимостей, упорядоченным запуском, координацией готовности и корректным завершением работы.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl — одновременно инструмент управления процессами и их мониторинга. Бесконечный пул воркеров даёт возможность управлять пулом и процессами и отслеживать их состояние.
- [goworker](https://github.com/benmanns/goworker) - goworker — фоновый обработчик на Go.
- [gowp](https://github.com/xxjwxc/gowp) - gowp — пул горутин с ограничением конкурентности.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - Управляет пулом горутин с изменяемым размером и поддержкой контекста для ограничения конкурентности.
- [grpool](https://github.com/ivpusic/grpool) - Лёгкий пул горутин.
- [hands](https://github.com/duanckham/hands) - Контроллер процессов, используемый для управления стратегиями выполнения и возврата результатов нескольких горутин.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch предоставляет функции вроде `All`, `First`, `Retry`, `Waterfall` и т. д., которые делают управление асинхронным потоком выполнения более интуитивным.
- [kyoo](https://github.com/dirkaholic/kyoo) - Предоставляет неограниченную очередь заданий и конкурентные пулы воркеров.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - Прозрачная альтернатива `sync/errgroup`, ограниченная пулом из N горутин-воркеров.
- [nursery](https://github.com/arunsworld/nursery) - Структурированная конкурентность в Go.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight — полная реализация деревьев супервизоров из Erlang.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - Параллельный запуск функций.
- [pond](https://github.com/alitto/pond) - Минималистичный и высокопроизводительный пул горутин-воркеров, написанный на Go.
- [pool](https://github.com/go-playground/pool) - Ограниченные горутины-потребители или неограниченный пул горутин для упрощения работы с горутинами и их отмены.
- [powerlock](https://github.com/donomii/powerlock) - Именованные FIFO-мьютексы с отменой через контекст, ограниченными очередями ожидания, диагностикой через сторожевой таймер, профилями pprof и метриками Prometheus.
- [rill](https://github.com/destel/rill) - Набор инструментов Go для чистой компонуемой конкурентности на основе каналов.
- [routine](https://github.com/timandy/routine) - `routine` — библиотека `ThreadLocal` для Go. Она инкапсулирует и предоставляет простые в использовании, неконкурентные, высокопроизводительные интерфейсы доступа к контексту `goroutine`, которые помогают более изящно получать информацию о контексте сопрограмм.
- [routine](https://github.com/x-mod/routine) - Управление горутинами с помощью контекста, поддержка: Main, Go, Pool и несколько полезных исполнителей (Executors).
- [semaphore](https://github.com/kamilsk/semaphore) - Реализация шаблона «Семафор» с тайм-аутом операций захвата и освобождения на основе каналов и контекста.
- [semaphore](https://github.com/marusama/semaphore) - Быстрая реализация семафора с изменяемым размером на основе CAS (быстрее, чем реализации семафоров на каналах).
- [stl](https://github.com/ssgreg/stl) - Программные транзакционные блокировки на основе механизма управления конкурентностью «программная транзакционная память» (STM).
- [threadpool](https://github.com/shettyh/threadpool) - Реализация пула потоков на Golang.
- [tunny](https://github.com/Jeffail/tunny) - Пул горутин для Golang.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker — простой асинхронный пул воркеров на Go.
- [workerpool](https://github.com/gammazero/workerpool) - Пул горутин, ограничивающий конкурентность выполнения задач, а не количество задач в очереди.

**[⬆ Наверх](#contents)**

## Графический интерфейс (GUI)

_Библиотеки для создания приложений с графическим интерфейсом._

_Наборы инструментов_

- [app](https://github.com/murlokswarm/app) - Пакет для создания приложений на Go, HTML и CSS. Поддерживает: macOS; поддержка Windows в разработке.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - Автоматически сгенерированная обёртка Go для [Dear ImGui](https://github.com/ocornut/imgui) через [cimgui](https://github.com/cimgui/cimgui).
- [Cogent Core](https://github.com/cogentcore/core) - Фреймворк для создания 2D- и 3D-приложений, работающих на macOS, Windows, Linux, iOS, Android и в вебе.
- [DarwinKit](https://github.com/progrium/darwinkit) - Создание нативных приложений macOS с помощью Go.
- [energy](https://github.com/energye/energy) - Кроссплатформенный фреймворк на основе LCL (Native System UI Control Library) и CEF (Chromium Embedded Framework) (Windows / macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - Кроссплатформенные нативные GUI, разработанные для Go на основе Material Design. Поддерживает: Linux, macOS, Windows, BSD, iOS и Android.
- [gio](https://gioui.org) - Gio — библиотека для написания кроссплатформенных GUI в режиме immediate mode на Go. Gio поддерживает все основные платформы: Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD и WebAssembly.
- [go-gtk](https://mattn.github.io/go-gtk/) - Привязки Go для GTK.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Привязки Go для Sciter — встраиваемого движка HTML/CSS/скриптов для разработки современных настольных интерфейсов. Кроссплатформенный.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Кроссплатформенный агрегатор наборов инструментов UI для Windows / Linux / Mac. GTK, Cocoa, Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - Набор инструментов GUI с GPU-ускорением, 22 виджетами, 3 дизайн-системами (Material, Fluent, Cupertino), реактивными сигналами и без CGO (часть экосистемы [GoGPU](https://github.com/gogpu)).
- [goradd/html5tag](https://github.com/goradd/html5tag) - Библиотека для вывода тегов HTML5.
- [gotk3](https://github.com/gotk3/gotk3) - Привязки Go для GTK3.
- [gowd](https://github.com/dtylman/gowd) - Быстрая и простая разработка настольных интерфейсов на Go, HTML, CSS и NW.js. Кроссплатформенная.
- [proton](https://github.com/CzaxStudio/proton) - GUI-фреймворк в режиме immediate mode на чистом Go, построенный на Gio, без зависимостей от Cgo.
- [qt](https://github.com/therecipe/qt) - Привязка Qt для Go (поддержка Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi).
- [Spot](https://github.com/roblillack/spot) - Реактивный кроссплатформенный набор инструментов для настольных GUI.
- [ui](https://github.com/andlabs/ui) - Платформенно-нативная GUI-библиотека для Go. Кроссплатформенная.
- [unison](https://github.com/richardwilkes/unison) - Единый набор инструментов графического пользовательского интерфейса для настольных приложений на Go. Поддерживаются macOS, Windows и Linux.
- [Wails](https://wails.io) - Настольные приложения для Mac, Windows и Linux с HTML-интерфейсом, использующие встроенный в ОС HTML-рендерер.
- [walk](https://github.com/lxn/walk) - Набор библиотек для создания Windows-приложений на Go.
- [webview](https://github.com/zserge/webview) - Кроссплатформенное окно webview с простыми двусторонними привязками к JavaScript (Windows / macOS / Linux).

_Взаимодействие_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - Привязки Go для C-библиотеки libappindicator3.
- [gogpu/systray](https://github.com/gogpu/systray) - Библиотека системного трея на чистом Go для Windows, macOS и Linux без CGO (часть экосистемы [GoGPU](https://github.com/gogpu)).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Библиотека уведомлений рабочего стола OS X для Go.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - Библиотека для OS X, уведомляющая о любой (подключаемой) активности на вашем компьютере.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Уведомления о переходе в сон и пробуждении OS X на Golang.
- [robotgo](https://github.com/go-vgo/robotgo) - Нативная кроссплатформенная автоматизация GUI-системы на Go. Управление мышью, клавиатурой и другим.
- [systray](https://github.com/getlantern/systray) - Кроссплатформенная библиотека Go для размещения значка и меню в области уведомлений.
- [trayhost](https://github.com/shurcooL/trayhost) - Кроссплатформенная библиотека Go для размещения значка на панели задач операционной системы.
- [zenity](https://github.com/ncruces/zenity) - Кроссплатформенная библиотека Go и CLI для создания простых диалогов, графически взаимодействующих с пользователем.

**[⬆ Наверх](#contents)**

## Оборудование

_Библиотеки, инструменты и руководства для взаимодействия с оборудованием._

- [arduino-cli](https://github.com/arduino/arduino-cli) - Официальный Arduino CLI и библиотека. Может работать автономно или быть встроен в более крупные проекты на Go.
- [emgo](https://github.com/ziutek/emgo) - Go-подобный язык для программирования встраиваемых систем (например, микроконтроллеров STM32).
- [ghw](https://github.com/jaypipes/ghw) - Библиотека обнаружения и инспекции оборудования для Golang.
- [go-osc](https://github.com/hypebeast/go-osc) - Привязки Open Sound Control (OSC) для Go.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - GPIO для Go, не требует cgo.
- [goroslib](https://github.com/aler9/goroslib) - Библиотека Robot Operating System (ROS) для Go.
- [joystick](https://github.com/0xcafed00d/joystick) - API с опросом для чтения состояния подключённого джойстика.
- [moody](https://github.com/dinakars777/moody) - Демон для macOS, наделяющий аппаратные события «характером». Отслеживает USB, зарядное устройство, крышку и другие аппаратные события и реагирует на них настраиваемыми «персонажами».
- [sysinfo](https://github.com/zcalusic/sysinfo) - Библиотека на чистом Go, предоставляющая системную информацию об ОС Linux, ядре и оборудовании.

**[⬆ Наверх](#contents)**

## Изображения

_Библиотеки для обработки изображений._

- [bild](https://github.com/anthonynsimon/bild) - Коллекция алгоритмов обработки изображений на чистом Go.
- [bimg](https://github.com/h2non/bimg) - Небольшой пакет для быстрой и эффективной обработки изображений с помощью libvips.
- [cameron](https://github.com/aofei/cameron) - Генератор аватаров для Go.
- [canvas](https://github.com/tdewolff/canvas) - Векторная графика в PDF, SVG или растровое изображение.
- [color-extractor](https://github.com/marekm4/color-extractor) - Извлечение доминирующего цвета без внешних зависимостей.
- [darkroom](https://github.com/gojek/darkroom) - Прокси изображений со сменными бэкендами хранения и движками обработки изображений, ориентированный на скорость и отказоустойчивость.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - API оптимизации и преобразования изображений на основе libvips, развёртываемый в AWS Lambda и CloudFront.
- [geopattern](https://github.com/pravj/geopattern) - Создание красивых генеративных узоров-изображений из строки.
- [gg](https://github.com/fogleman/gg) - 2D-отрисовка на чистом Go.
- [gift](https://github.com/disintegration/gift) - Пакет фильтров обработки изображений.
- [gltf](https://github.com/qmuntal/gltf) - Эффективное и надёжное средство чтения, записи и валидации glTF 2.0.
- [go-cairo](https://github.com/ungerik/go-cairo) - Привязка Go для графической библиотеки cairo.
- [go-gd](https://github.com/bolknote/go-gd) - Привязка Go для библиотеки GD.
- [go-nude](https://github.com/koyachi/go-nude) - Обнаружение наготы с помощью Go.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - Генерация QR-кодов в персонализированных стилях с возможностью настройки цвета, размера блоков, формы и значков.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Порт библиотеки webcolors с Python на Go.
- [go-webp](https://github.com/kolesa-team/go-webp) - Библиотека для кодирования и декодирования изображений WebP с использованием libwebp.
- [gocv](https://github.com/hybridgroup/gocv) - Пакет Go для компьютерного зрения с использованием OpenCV 3.3+.
- [gogpu/gg](https://github.com/gogpu/gg) - 2D-отрисовка с GPU-ускорением и API в стиле Canvas, без CGO (часть экосистемы графики на чистом Go [GoGPU](https://github.com/gogpu)).
- [goimagehash](https://github.com/corona10/goimagehash) - Пакет перцептивного хеширования изображений для Go.
- [goimghdr](https://github.com/corona10/goimghdr) - Модуль imghdr для Go определяет тип изображения, содержащегося в файле.
- [govatar](https://github.com/o1egl/govatar) - Библиотека и консольный инструмент для генерации забавных аватаров.
- [govips](https://github.com/davidbyttow/govips) - Молниеносно быстрая библиотека обработки и изменения размера изображений для Go.
- [gowitness](https://github.com/sensepost/gowitness) - Создание скриншотов веб-страниц из командной строки с помощью Go и headless Chrome.
- [gridder](https://github.com/shomali11/gridder) - Библиотека 2D-графики на основе сетки.
- [image2ascii](https://github.com/qeesung/image2ascii) - Преобразование изображений в ASCII.
- [imagick](https://github.com/gographics/imagick) - Привязка Go к C API MagickWand из ImageMagick.
- [imaginary](https://github.com/h2non/imaginary) - Быстрый и простой HTTP-микросервис для изменения размера изображений.
- [imaging](https://github.com/disintegration/imaging) - Простой пакет обработки изображений на Go.
- [imagor](https://github.com/cshum/imagor) - Быстрый и безопасный сервер обработки изображений и библиотека Go на основе libvips.
- [img](https://github.com/hawx/img) - Набор инструментов для обработки изображений.
- [ln](https://github.com/fogleman/ln) - Отрисовка 3D-штриховой графики на Go.
- [mergi](https://github.com/noelyahan/mergi) - Инструмент и библиотека Go для обработки изображений (объединение, обрезка, изменение размера, водяные знаки, анимация).
- [mort](https://github.com/aldor007/mort) - Сервер хранения и обработки изображений, написанный на Go.
- [mpo](https://github.com/donatj/mpo) - Декодер и инструмент преобразования 3D-фотографий MPO.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Нативный кодировщик WebP на Go без внешних зависимостей.
- [picfit](https://github.com/thoas/picfit) - Сервер изменения размера изображений, написанный на Go.
- [pt](https://github.com/fogleman/pt) - Движок трассировки путей, написанный на Go.
- [scout](https://github.com/jonoton/scout) - Scout — автономное программное решение с открытым исходным кодом для самодельного видеонаблюдения.
- [smartcrop](https://github.com/muesli/smartcrop) - Находит удачные варианты кадрирования для произвольных изображений и размеров.
- [steganography](https://github.com/auyer/steganography) - Библиотека на чистом Go для LSB-стеганографии.
- [stegify](https://github.com/DimitarPetrov/stegify) - Инструмент на Go для LSB-стеганографии, способный спрятать любой файл в изображении.
- [svgo](https://github.com/ajstarks/svgo) - Библиотека на языке Go для генерации SVG.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs изменяет размер и оптимизирует изображения для веба с использованием форматов нового поколения.
- [webp-server](https://github.com/mehdipourfar/webp-server) - Простой и минималистичный сервер изображений, способный хранить, изменять размер, конвертировать и кешировать изображения.

**[⬆ Наверх](#contents)**

## IoT (интернет вещей)

_Библиотеки для программирования устройств интернета вещей._

- [connectordb](https://github.com/connectordb/connectordb) - Платформа с открытым исходным кодом для Quantified Self и IoT.
- [devices](https://github.com/goiot/devices) - Набор библиотек для IoT-устройств, экспериментальный для x/exp/io.
- [ekuiper](https://github.com/lf-edge/ekuiper) - Лёгкий движок потоковой обработки данных для периферии IoT.
- [eywa](https://github.com/xcodersun/eywa) - Проект Eywa — по сути, менеджер подключений, отслеживающий подключённые устройства.
- [flogo](https://github.com/tibcosoftware/flogo) - Проект Flogo — фреймворк с открытым исходным кодом для периферийных IoT-приложений и интеграции.
- [gatt](https://github.com/paypal/gatt) - Gatt — пакет Go для создания периферийных устройств Bluetooth Low Energy.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot — фреймворк для робототехники, физических вычислений и интернета вещей.
- [huego](https://github.com/amimof/huego) - Обширная клиентская библиотека Philips Hue для Go.
- [iot](https://github.com/vaelen/iot/) - IoT — простой фреймворк для реализации устройства Google IoT Core.
- [periph](https://periph.io/) - Периферийный ввод-вывод для взаимодействия с низкоуровневыми возможностями плат.
- [rulego](https://github.com/rulego/rulego) - RuleGo — лёгкий, высокопроизводительный, встраиваемый и оркестрируемый движок правил на основе компонентов для периферии IoT.
- [sensorbee](https://github.com/sensorbee/sensorbee) - Лёгкий движок потоковой обработки для IoT.
- [shifu](https://github.com/Edgenesis/shifu) - Нативный для Kubernetes фреймворк разработки для IoT.
- [smart-home](https://github.com/e154/smart-home) - Программный пакет для автоматизации IoT.

**[⬆ Наверх](#contents)**

## Планировщики заданий

_Библиотеки для планирования заданий._

- [cdule](https://github.com/deepaksinghvi/cdule) - Библиотека планировщика заданий с поддержкой баз данных
- [cheek](https://github.com/bart6114/cheek) - Простой планировщик в стиле crontab, предлагающий подход KISS к планированию заданий.
- [clockwerk](https://github.com/onatm/clockwerk) - Пакет Go для планирования периодических заданий с помощью простого текучего синтаксиса.
- [cronticker](https://github.com/krayzpipes/cronticker) - Реализация тикера с поддержкой расписаний cron.
- [go-cron](https://github.com/rk/go-cron) - Простая библиотека Cron для Go, которая может выполнять замыкания или функции с разными интервалами — от одного раза в секунду до одного раза в год в определённую дату и время. В первую очередь для веб-приложений и долго работающих демонов.
- [go-cron](https://github.com/netresearch/go-cron) - Планировщик заданий cron с обновлением расписания во время выполнения, контекстом для каждой записи, middleware для отказоустойчивости (повторные попытки, circuit breaker, ограничение частоты) и хуками наблюдаемости; преемник robfig/cron.
- [go-job](https://github.com/cybergarage/go-job) - Гибкая и расширяемая библиотека планирования и выполнения заданий для Go.
- [go-quartz](https://github.com/reugn/go-quartz) - Простая библиотека планирования для Go без зависимостей.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - Планировщик заданий с поддержкой стандартных выражений cron, пользовательских дескрипторов, интервалов и зависимостей между задачами.
- [gocron](https://github.com/go-co-op/gocron) - Простое и текучее планирование заданий на Go. Это активно поддерживаемый форк [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron).
- [goflow](https://github.com/fieldryand/goflow) - Простой, но мощный планировщик DAG с панелью мониторинга.
- [gron](https://github.com/roylee0704/gron) - Определяйте задачи по времени с помощью простого API на Go, а планировщик Gron будет запускать их соответствующим образом.
- [gronx](https://github.com/adhocore/gronx) - Парсер выражений cron, исполнитель задач и демон, обрабатывающий список задач в стиле crontab.
- [JobRunner](https://github.com/bamzi/jobrunner) - Умный и многофункциональный планировщик заданий cron со встроенной очередью заданий и мониторингом в реальном времени.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Планировщик заданий с поддержкой вебхуков, cron и классического планирования.
- [ofelia](https://github.com/netresearch/ofelia) - Планировщик заданий Docker (crontab для Docker); форк mcuadros/ofelia, добавляющий веб-интерфейс, зависимости между заданиями, повторные попытки и сохранение заданий.
- [pending](https://github.com/kahoon/pending) - Планировщик отложенных задач с подавлением дребезга (debounce) по ID, отменой, корректным завершением работы и опциональными ограничениями конкурентности.
- [sched](https://github.com/romshark/sched) - Планировщик заданий с возможностью перематывать время вперёд.
- [scheduler](https://github.com/carlescere/scheduler) - Планирование заданий cron — это просто.
- [scheduler](https://github.com/yuseferi/scheduler) - Нативный для Go распределённый планировщик заданий с отложенными задачами, пакетной координацией через Redis, повторными попытками, восстановлением на основе аренды (lease) и версионированным партиционированием очередей.
- [tasks](https://github.com/madflojo/tasks) - Простой в использовании внутрипроцессный планировщик для повторяющихся задач в Go.
- [tickstem/cron](https://github.com/tickstem/cron) - Клиент Go для планирования HTTP-заданий cron с историей выполнения, оповещениями о сбоях и tsk-local для тестирования обработчиков без реальных учётных данных.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - Клиент Go для мониторинга сигналов активности по принципу «переключателя мертвеца» (dead man's switch): отправляйте запрос на URL после каждого запуска задания и получайте оповещение по электронной почте, если запросы перестанут поступать.

**[⬆ Наверх](#contents)**

## JSON

_Библиотеки для работы с JSON._

- [ajson](https://github.com/spyzhov/ajson) - Абстрактный JSON для Golang с поддержкой JSONPath.
- [ask](https://github.com/simonnilsson/ask) - Простой доступ к вложенным значениям в отображениях и срезах. Работает совместно с encoding/json и другими пакетами, которые десериализуют («Unmarshal») произвольные данные в типы данных Go.
- [dynjson](https://github.com/cocoonspace/dynjson) - Настраиваемые клиентом форматы JSON для динамических API.
- [ej](https://github.com/lucassscaravelli/ej) - Лаконичная запись и чтение JSON из различных источников.
- [epoch](https://github.com/vtopc/epoch) - Содержит примитивы для сериализации и десериализации временных меток Unix (epoch) в JSON во встроенный тип time.Time и обратно.
- [fastjson](https://github.com/valyala/fastjson) - Быстрый парсер и валидатор JSON для Go. Никаких пользовательских структур, генерации кода и рефлексии.
- [gabs](https://github.com/Jeffail/gabs) - Для разбора, создания и редактирования неизвестного или динамического JSON в Go.
- [gjo](https://github.com/skanehira/gjo) - Небольшая утилита для создания JSON-объектов.
- [GJSON](https://github.com/tidwall/gjson) - Получение значения из JSON одной строкой кода.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError позволяет легко создавать ошибки в JSON-ответах, соответствующие спецификации JsonApi.
- [go-respond](https://github.com/nicklaw5/go-respond) - Пакет Go для обработки типовых HTTP-ответов в формате JSON.
- [gojmapr](https://github.com/limiu82214/gojmapr) - Получение простой структуры из сложного JSON по пути JSON.
- [gojq](https://github.com/elgs/gojq) - Запросы к JSON на Golang.
- [gojson](https://github.com/ChimeraCoder/gojson) - Автоматическая генерация определений структур Go (golang) по примеру JSON.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Расширенная отрисовка JSON в виде HTML на Go.
- [JayDiff](https://github.com/yazgazan/jaydiff) - Утилита сравнения JSON, написанная на Go.
- [jettison](https://github.com/wI2L/jettison) - Быстрый и гибкий кодировщик JSON для Go.
- [jscan](https://github.com/romshark/jscan) - Высокопроизводительный итератор JSON без аллокаций.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - Преобразование JSON в структуру Go.
- [JSON-to-Proto](https://json-to-proto.github.io/) - Онлайн-преобразование JSON в Protobuf.
- [json2go](https://github.com/m-zajac/json2go) - Продвинутое преобразование JSON в структуры Go. Предоставляет пакет, который может разобрать несколько JSON-документов и создать структуру, подходящую для всех них.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - Привязки Go на основе справочника ошибок JSON API.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - Прозрачная замена `encoding/json`, выводящая раскрашенный JSON.
- [jsondiff](https://github.com/wI2L/jsondiff) - Библиотека сравнения JSON для Go на основе RFC6902 (JSON Patch).
- [jsonf](https://github.com/miolini/jsonf) - Консольный инструмент для форматирования JSON с подсветкой и извлечения данных с помощью запросов к структуре.
- [jsongo](https://github.com/ricardolonga/jsongo) - Текучий API, упрощающий создание JSON-объектов.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - Простой пакет Go для сериализации пользовательских структур в JSON-ответы, совместимые с HAL.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - Библиотека JSON, предоставляющая простые обработчики для удобного чтения и записи JSON из различных источников.
- [jsonic](https://github.com/sinhashubham95/jsonic) - Утилиты для типобезопасной обработки JSON и запросов к нему без определения структур.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - Быстрая и удобная библиотека для неструктурированных данных JSON, заменяющая `encoding/json`.
- [jzon](https://github.com/zerosnake0/jzon) - Библиотека JSON с API и поведением, совместимыми со стандартными.
- [kazaam](https://github.com/Qntfy/kazaam) - API для произвольного преобразования JSON-документов.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - MapSlice для Go для упорядоченной сериализации и десериализации отображений в JSON.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - Производительная десериализация JSON для гибких сценариев использования.
- [mp](https://github.com/sanbornm/mp) - Простой консольный парсер электронной почты. В настоящее время принимает данные из stdin и выводит JSON.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go — высокопроизводительный парсер с множеством дополнительных инструментов для JSON, включая JSONPath.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Простой парсер JSON с валидацией по условиям через теги полей структур Golang.
- [silentjson](https://github.com/GenshIv/silentjson) - Сканер и разделитель границ JSON без аллокаций, использующий SIMD-инструкции AVX2.
- [SJSON](https://github.com/tidwall/sjson) - Установка значения в JSON одной строкой кода.  
- [ujson](https://github.com/olvrng/ujson) - Быстрый и минималистичный парсер и преобразователь JSON, работающий с неструктурированным JSON.
- [vjson](https://github.com/miladibra10/vjson) - Пакет Go для валидации JSON-объектов с объявлением JSON-схемы через текучий API.

**[⬆ Наверх](#contents)**

## Логирование

_Библиотеки для создания файлов журналов и работы с ними._

- [caarlos0/log](https://github.com/caarlos0/log) - Красочный логгер для CLI.
- [distillog](https://github.com/amoghe/distillog) - Концентрированное логирование с уровнями (считайте его стандартной библиотекой + уровни логирования).
- [glg](https://github.com/kpango/glg) - glg — простая и быстрая библиотека логирования с уровнями для Go.
- [glo](https://github.com/lajosbencz/glo) - Средство логирования, вдохновлённое PHP Monolog, с идентичными уровнями важности.
- [glog](https://github.com/golang/glog) - Журналы выполнения с уровнями для Go.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - Простой writer, автоматически ротирующий файлы журналов на основе текущей даты и времени, как cronolog.
- [go-log](https://github.com/pieterclaerhout/go-log) - Библиотека логирования с трассировками стека, дампом объектов и опциональными временными метками.
- [go-log](https://github.com/subchen/go-log) - Простое и настраиваемое логирование в Go с уровнями, форматировщиками и writer-ами.
- [go-log](https://github.com/siddontang/go-log) - Библиотека логирования с поддержкой уровней и нескольких обработчиков.
- [go-log](https://github.com/ian-kent/go-log) - Реализация Log4j на Go.
- [go-log4g](https://github.com/go-log4g/core) - Log4g предоставляет конфигурацию и шаблоны раскладки в стиле Log4j для стандартного фасада логирования log/slog в Go.
- [go-logger](https://github.com/apsdehal/go-logger) - Простой логгер для программ на Go с обработчиками уровней.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - Обработчик slog только для добавления, с цепочкой хешей и опциональной подписью Ed25519, с офлайн-проверкой на подделку.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - Быстрая, расширяемая, полнофункциональная библиотека логирования, совместимая на уровне исходного кода со стандартной библиотекой.
- [gslog](https://github.com/maguro/gslog) - Обработчик Google Cloud Logging для log/slog с трассировками и baggage OpenTelemetry и метками podinfo Kubernetes.
- [httpretty](https://github.com/henvic/httpretty) - Красиво выводит ваши обычные HTTP-запросы в терминал для отладки (аналогично http.DumpRequest).
- [journald](https://github.com/ssgreg/journald) - Реализация нативного API журнала systemd (Journal) для логирования на Go.
- [kemba](https://github.com/clok/kemba) - Крошечный инструмент отладочного логирования, вдохновлённый [debug](https://github.com/visionmedia/debug), отлично подходит для CLI-инструментов и приложений.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - TUI для чтения и фильтрации журналов из journalctl, файловой системы, контейнеров Docker и Podman, а также подов Kubernetes.
- [log](https://github.com/aerogo/log) - Система логирования со сложностью O(1), позволяющая подключить один журнал к нескольким writer-ам (например, stdout, файлу и TCP-соединению).
- [log](https://github.com/apex/log) - Пакет структурированного логирования для Go.
- [log](https://github.com/go-playground/log) - Простое, настраиваемое и масштабируемое структурированное логирование для Go.
- [log](https://github.com/teris-io/log) - Интерфейс структурированного журнала для Go, чётко отделяющий фасад логирования от его реализации.
- [log](https://github.com/heartwilltell/log) - Простая обёртка с уровнями логирования над стандартным пакетом log.
- [log](https://github.com/no-src/log) - Простой готовый к использованию фреймворк логирования.
- [log15](https://github.com/inconshreveable/log15) - Простое и мощное логирование для Go.
- [logdump](https://github.com/ewwwwwqm/logdump) - Пакет для многоуровневого логирования.
- [logex](https://github.com/chzyer/logex) - Библиотека логирования для Golang с поддержкой трассировки и уровней, обёрнутая стандартной библиотекой log.
- [logger](https://github.com/azer/logger) - Минималистичная библиотека логирования для Go.
- [logo](https://github.com/mbndr/logo) - Логгер Golang с выводом в различные настраиваемые writer-ы.
- [logrus](https://github.com/Sirupsen/logrus) - Структурированный логгер для Go.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - Реализация `io.Writer` с использованием логгера [logrus](https://github.com/sirupsen/logrus).
- [logrusly](https://github.com/sebest/logrusly) - Плагин [logrus](https://github.com/sirupsen/logrus) для отправки ошибок в [Loggly](https://www.loggly.com/).
- [logutils](https://github.com/hashicorp/logutils) - Утилиты для чуть более удобного логирования в Go (Golang), расширяющие стандартный логгер.
- [logxi](https://github.com/mgutz/logxi) - Логгер для 12-факторных приложений, который работает быстро и делает вас счастливыми.
- [lumberjack](https://github.com/natefinch/lumberjack) - Простой логгер с ротацией, реализующий io.WriteCloser.
- [mlog](https://github.com/jbrodriguez/mlog) - Простой модуль логирования для Go с 5 уровнями, опциональной ротацией файла журнала и выводом в stdout/stderr.
- [noodlog](https://github.com/gyozatech/noodlog) - Параметризованная библиотека логирования в JSON, позволяющая маскировать конфиденциальные данные и сериализовать любой контент. Больше никаких выведенных указателей вместо значений и экранирующих символов в JSON-строках.
- [onelog](https://github.com/francoispqt/onelog) - Onelog — предельно простой, но очень эффективный JSON-логгер. Это самый быстрый JSON-логгер во всех сценариях. Кроме того, это один из логгеров с наименьшим количеством аллокаций.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - Высокопроизводительное логирование с поддержкой уровней важности, категоризации и фильтрации. Может отправлять отфильтрованные сообщения журнала в различные места назначения (например, консоль, сеть, почту).
- [phuslu/log](https://github.com/phuslu/log) - Высокопроизводительное структурированное логирование.
- [pp](https://github.com/k0kubun/pp) - Цветной форматированный вывод (pretty printer) для языка Go.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter — реализация `io.Writer` с автоматической ротацией и несколькими политиками ротации файлов журналов.
- [seelog](https://github.com/cihub/seelog) - Функциональность логирования с гибкой диспетчеризацией, фильтрацией и форматированием.
- [sentry-go](https://github.com/getsentry/sentry-go) - Sentry SDK для Go. Помогает отслеживать ошибки с оповещениями в реальном времени и мониторингом производительности.
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade для Golang: простое структурированное логирование — мощное, расширяемое и настраиваемое, с огромным количеством уроков, извлечённых из десятилетий существования фреймворков логирования.
- [slog](https://github.com/gookit/slog) - Лёгкий, настраиваемый и расширяемый логгер для Go.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - Настраивает логгер log/slog стандартной библиотеки из переменных окружения: уровень, формат, расположение в исходном коде и разделение вывода на stdout/stderr.
- [slog-datadog](https://github.com/samber/slog-datadog) - Обработчик slog для Datadog.
- [slog-formatter](https://github.com/samber/slog-formatter) - Распространённые форматировщики для slog и вспомогательные средства для создания собственных.
- [slog-logrus](https://github.com/samber/slog-logrus) - Обработчик slog для Logrus.
- [slog-loki](https://github.com/samber/slog-loki) - Обработчик slog для Grafana Loki.
- [slog-multi](https://github.com/samber/slog-multi) - Цепочка обработчиков slog.Handler (конвейер, разветвление (fanout)...).
- [slog-sentry](https://github.com/samber/slog-sentry) - Обработчик slog для Sentry.
- [slog-slack](https://github.com/samber/slog-slack) - Обработчик slog для Slack.
- [slog-zap](https://github.com/samber/slog-zap) - Обработчик slog для Zap.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Обработчик slog для Zerolog.
- [slogor](https://gitlab.com/greyxor/slogor) - Красочный обработчик slog.
- [spew](https://github.com/davecgh/go-spew) - Реализует глубокий форматированный вывод структур данных Go для помощи в отладке.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Логгер для драйверов SQL-баз данных Go без изменения существующего использования \*sql.DB из стандартной библиотеки.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog — объектно-ориентированная библиотека логирования с уровнями. Очень полезна для заданий cron.
- [structy/log](https://github.com/structy/log) - Простая в использовании система логирования — минималистичная, но с возможностями для отладки и разделения сообщений.
- [tail](https://github.com/hpcloud/tail) - Пакет Go, стремящийся воспроизвести возможности программы tail из BSD.
- [timberjack](https://github.com/DeRuina/timberjack) - Логгер с ротацией по размеру, по времени и по расписанию, с поддержкой сжатия и очистки.
- [tint](https://github.com/lmittmann/tint) - slog.Handler, записывающий раскрашенные журналы.
- [xlog](https://github.com/xfxdev/xlog) - Архитектура плагинов и гибкая система логирования для Go с управлением уровнями, несколькими целями вывода журналов и пользовательским форматом журналов.
- [xlog](https://github.com/rs/xlog) - Структурированный логгер для HTTP-обработчиков с поддержкой `net/context` и гибкой диспетчеризацией.
- [xylog](https://github.com/xybor-x/xylog) - Логирование с уровнями и структурой, динамические поля, высокая производительность, управление зонами, простая настройка и читаемый синтаксис.
- [yell](https://github.com/jfcg/yell) - Ещё одна минималистичная библиотека логирования.
- [zap](https://github.com/uber-go/zap) - Быстрое структурированное логирование с уровнями в Go.
- [zax](https://github.com/yuseferi/zax) - Интеграция Context с логгером Zap, обеспечивающая большую гибкость логирования в Go.
- [zerolog](https://github.com/rs/zerolog) - JSON-логгер без аллокаций.
- [zkits-logger](https://github.com/edoger/zkits-logger) - Мощный JSON-логгер без зависимостей.
- [zl](https://github.com/nkmr-jp/zl) - Логгер на основе zap с высоким удобством для разработчиков (Developer Experience). Обладает богатой функциональностью, но прост в настройке.

**[⬆ Наверх](#contents)**

## Машинное обучение

_Библиотеки для машинного обучения._

- [Anneal](https://github.com/georgebuilds/anneal) - Компилятор для машинного обучения на Go — написанный с нуля порт tinygrad с бэкендом WebGPU.
- [bayesian](https://github.com/jbrukh/bayesian) - Наивная байесовская классификация для Golang.
- [born](https://github.com/born-ml/born) - Фреймворк глубокого обучения, вдохновлённый Burn (Rust), с автоматическим дифференцированием, типобезопасными тензорами и GPU-ускорением без CGO.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - Быстрая, масштабируемая и высокопроизводительная библиотека градиентного бустинга на деревьях решений. Golang с использованием Cgo для молниеносно быстрого инференса моделей CatBoost.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Быстрые, гибкие, многопоточные ансамбли деревьев решений для машинного обучения на чистом Go.
- [datatrax](https://github.com/rbmuller/datatrax) - Набор инструментов для инженерии данных и классического машинного обучения с пакетной обработкой, приведением типов и 7 алгоритмами на чистом Go без зависимостей.
- [ddt](https://github.com/sgrodriguez/ddt) - Динамическое дерево решений: создание деревьев с определением настраиваемых правил.
- [eaopt](https://github.com/MaxHalford/eaopt) - Библиотека эволюционной оптимизации.
- [evoli](https://github.com/khezen/evoli) - Библиотека генетического алгоритма и оптимизации роем частиц.
- [fonet](https://github.com/Fontinalis/fonet) - Библиотека глубоких нейронных сетей, написанная на Go.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Реализация алгоритмов кластеризации k-modes и k-prototypes на Go.
- [go-deep](https://github.com/patrikeh/go-deep) - Многофункциональная библиотека нейронных сетей на Go.
- [go-fann](https://github.com/white-pony/go-fann) - Привязки Go для библиотеки Fast Artificial Neural Networks (FANN).
- [go-galib](https://github.com/thoj/go-galib) - Библиотека генетических алгоритмов, написанная на Go / golang.
- [go-pr](https://github.com/daviddengcn/go-pr) - Пакет распознавания образов на языке Go.
- [gobrain](https://github.com/goml/gobrain) - Нейронные сети, написанные на Go.
- [godist](https://github.com/e-dard/godist) - Различные распределения вероятностей и связанные с ними методы.
- [goga](https://github.com/tomcraven/goga) - Библиотека генетических алгоритмов для Go.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Универсальная библиотека машинного обучения для Go.
- [GoMind](https://github.com/surenderthakran/gomind) - Упрощённая библиотека нейронных сетей на Go.
- [goml](https://github.com/cdipaolo/goml) - Онлайн-машинное обучение на Go.
- [GoMLX](https://github.com/gomlx/gomlx) - Ускоренный фреймворк машинного обучения для Go.
- [gonet](https://github.com/dathoangnd/gonet) - Нейронная сеть для Go.
- [Goptuna](https://github.com/c-bata/goptuna) - Фреймворк байесовской оптимизации для функций «чёрного ящика», написанный на Go. Оптимизировано будет всё.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Библиотека рекомендательных алгоритмов, написанная на Go.
- [gorgonia](https://github.com/gorgonia/gorgonia) - Вычислительная библиотека на основе графов для Go, подобная Theano, предоставляющая примитивы для построения различных алгоритмов машинного обучения и нейронных сетей.
- [gorse](https://github.com/zhenghaoz/gorse) - Бэкенд офлайн-рекомендательной системы на основе коллаборативной фильтрации, написанный на Go.
- [goscore](https://github.com/asafschers/goscore) - API оценки (scoring) PMML-моделей на Go.
- [gosseract](https://github.com/otiai10/gosseract) - Пакет Go для OCR (оптического распознавания символов) с использованием C++-библиотеки Tesseract.
- [hugot](https://github.com/knights-analytics/hugot) - Конвейеры трансформеров Huggingface для Golang с onnxruntime.
- [libsvm](https://github.com/datastream/libsvm) - Версия libsvm для Golang — производная работа на основе LIBSVM 3.14.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - CLI-инструмент для транспиляции обученных классических моделей машинного обучения в нативный код Go без зависимостей; написан на Python с поддержкой языка Go.
- [neural-go](https://github.com/schuyler/neural-go) - Сеть многослойного перцептрона, реализованная на Go, с обучением методом обратного распространения ошибки.
- [ocrserver](https://github.com/otiai10/ocrserver) - Простой API-сервер OCR, который действительно легко развернуть с помощью Docker и Heroku.
- [onnx-go](https://github.com/owulveryck/onnx-go) - Интерфейс Go к Open Neural Network Exchange (ONNX).
- [probab](https://github.com/ThePaw/probab) - Функции распределения вероятностей. Байесовский вывод. Написано на чистом Go.
- [randomforest](https://github.com/malaschitz/randomForest) - Простая в использовании библиотека случайного леса для Go.
- [regommend](https://github.com/muesli/regommend) - Движок рекомендаций и коллаборативной фильтрации.
- [shield](https://github.com/eaigner/shield) - Байесовский классификатор текста для Go с гибкими токенизаторами и бэкендами хранения.
- [tfgo](https://github.com/galeone/tfgo) - Простые в использовании привязки TensorFlow: упрощают использование официальных привязок TensorFlow для Go. Определяйте вычислительные графы на Go, загружайте и выполняйте модели, обученные на Python.
- [Varis](https://github.com/Xamber/Varis) - Нейронная сеть на Golang.

**[⬆ Наверх](#contents)**

## Обмен сообщениями

_Библиотеки, реализующие системы обмена сообщениями._

- [ami](https://github.com/kak-tus/ami) - Клиент Go для надёжных очередей на основе Redis Cluster Streams.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Клиентская библиотека RabbitMQ для Go.
- [APNs2](https://github.com/sideshow/apns2) - Провайдер push-уведомлений Apple через HTTP/2 для Go — отправка push-уведомлений в приложения iOS, tvOS, Safari и OS X.
- [Asynq](https://github.com/hibiken/asynq) - Простая, надёжная и эффективная распределённая очередь задач для Go, построенная поверх Redis.
- [backlite](https://github.com/mikestefanello/backlite) - Типобезопасные постоянные встраиваемые очереди задач и исполнитель фоновых заданий на SQLite.
- [Beaver](https://github.com/Clivern/Beaver) - Сервер обмена сообщениями в реальном времени для создания масштабируемых внутриприложенческих уведомлений, многопользовательских игр и чатов в веб- и мобильных приложениях.
- [broker](https://github.com/qvcloud/broker) - Абстракция обмена сообщениями продакшен-уровня с единым API для различных брокеров и встроенной интеграцией с OpenTelemetry.
- [Bus](https://github.com/mustafaturan/bus) - Минималистичная реализация шины сообщений для внутренней коммуникации.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Сервер обмена сообщениями в реальном времени (WebSocket или SockJS) на Go.
- [Chanify](https://github.com/chanify/chanify) - Сервер push-уведомлений, отправляющий сообщения на ваши устройства iOS.
- [Commander](https://github.com/jeroenrinzema/commander) - Высокоуровневый событийно-ориентированный потребитель/производитель с поддержкой различных «диалектов», таких как Apache Kafka.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go — клиент Golang от Confluent для Apache Kafka и Confluent Platform.
- [dbus](https://github.com/godbus/dbus) - Нативные привязки Go для D-Bus.
- [drone-line](https://github.com/appleboy/drone-line) - Отправка уведомлений в [Line](https://at.line.me/en) с помощью бинарного файла, Docker или Drone CI.
- [emitter](https://github.com/olebedev/emitter) - Генерирует события в стиле Go, с подстановочными знаками, предикатами, возможностью отмены и многими другими преимуществами.
- [event](https://github.com/agoalofalife/event) - Реализация шаблона «Наблюдатель».
- [EventBus](https://github.com/asaskevich/EventBus) - Лёгкая шина событий с поддержкой асинхронности.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Клиент Gaurun, написанный на Go.
- [Glue](https://github.com/desertbit/glue) - Надёжная библиотека сокетов для Go и JavaScript (альтернатива Socket.io).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Простой пакет шины событий для Go.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - Библиотека для реализации шаблона «Посредник» (mediator) и упрощённого шаблона CQRS в событийно-ориентированной архитектуре, вдохновлённая библиотекой MediatR для C#.
- [go-mq](https://github.com/cheshir/go-mq) - Клиент RabbitMQ с декларативной конфигурацией.
- [go-notify](https://github.com/TheCreeper/go-notify) - Нативная реализация спецификации уведомлений freedesktop.
- [go-nsq](https://github.com/nsqio/go-nsq) - Официальный пакет Go для NSQ.
- [go-res](https://github.com/jirenius/go-res) - Пакет для создания REST-сервисов и сервисов реального времени, в которых клиенты бесшовно синхронизируются, с использованием NATS и Resgate.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Клиентская библиотека для веб-сервиса Viessmann Vitotrol.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - Молниеносно быстрая библиотека шины событий в памяти без блокировок
- [Gollum](https://github.com/trivago/gollum) - Мультиплексор n:m, собирающий сообщения из разных источников и рассылающий их набору получателей.
- [golongpoll](https://github.com/jcuga/golongpoll) - Библиотека сервера HTTP long polling, упрощающая веб-публикацию и подписку (pub-sub).
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster — кластер push-серверов на Go.
- [gorush](https://github.com/appleboy/gorush) - Сервер push-уведомлений, использующий [APNs2](https://github.com/sideshow/apns2) и [GCM](https://github.com/google/go-gcm) от Google.
- [gosd](https://github.com/alexsniffin/gosd) - Библиотека для планирования момента отправки сообщения в канал.
- [guble](https://github.com/smancke/guble) - Сервер обмена сообщениями, использующий push-уведомления (Google Firebase Cloud Messaging, Apple Push Notification services, SMS), а также WebSocket и REST API, с поддержкой распределённой работы и сохранения сообщений.
- [hare](https://github.com/leozz37/hare) - Удобная библиотека для отправки сообщений и прослушивания TCP-сокетов.
- [hub](https://github.com/leandro-lugaresi/hub) - Хаб сообщений и событий для приложений Go, использующий шаблон «публикация/подписка» с поддержкой псевдонимов, как у обменников (exchanges) RabbitMQ.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Сопоставляет события с большими наборами правил, написанных на Go или в виде JSON.
- [jazz](https://github.com/socifi/jazz) - Простой уровень абстракции над RabbitMQ для администрирования очередей, публикации и потребления сообщений.
- [kiln](https://github.com/rafaelaugustos/kiln) - Постоянные фоновые задания в PostgreSQL, MySQL или SQLite с повторными попытками, рабочими процессами, повторяющимися заданиями и панелью мониторинга.
- [machinery](https://github.com/RichardKnop/machinery) - Асинхронная очередь задач/заданий на основе распределённой передачи сообщений.
- [mangos](https://github.com/nanomsg/mangos) - Реализация Nanomsg («Scalability Protocols») на чистом Go с совместимостью транспортов.
- [melody](https://github.com/olahol/melody) - Минималистичный фреймворк для работы с сессиями WebSocket, включающий широковещательную рассылку и автоматическую обработку ping/pong.
- [Mercure](https://github.com/dunglas/mercure) - Сервер и библиотека для рассылки обновлений, отправляемых сервером, по протоколу Mercure (построенному поверх Server-Sent Events).
- [messagebus](https://github.com/vardius/message-bus) - messagebus — простая асинхронная шина сообщений для Go, идеально подходящая в качестве шины событий при использовании event sourcing, CQRS, DDD.
- [NATS Go Client](https://github.com/nats-io/nats.go) - Клиент Go для системы обмена
  сообщениями NATS.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - Крошечная обёртка над топиками и каналами NSQ.
- [oplog](https://github.com/dailymotion/oplog) - Универсальная система oplog/репликации для REST API.
- [pubsub](https://github.com/tuxychandru/pubsub) - Простой пакет pubsub для Go.
- [Quamina](https://github.com/timbray/quamina) - Быстрое сопоставление с образцом для фильтрации сообщений и событий.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - Лёгкая библиотека, обеспечивающая автоматическое переподключение к RabbitMQ и повторные попытки публикации. Библиотека учитывает необходимость повторного объявления сущностей в RabbitMQ после переподключения.
- [rabbus](https://github.com/rafaeljesus/rabbus) - Крошечная обёртка над обменниками и очередями AMQP.
- [rabtap](https://github.com/jandelgado/rabtap) - Консольное приложение — швейцарский армейский нож для RabbitMQ.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ — лёгкая и надёжная библиотека для управления локальной очередью сообщений.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus — RESTful-сервер асинхронной очереди задач.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue предоставляет производителя и потребителя очереди, использующей потоки Redis (streams).
- [rmqconn](https://github.com/sbabiv/rmqconn) - Переподключение к RabbitMQ. Обёртка над amqp.Connection и amqp.Dial, позволяющая переподключиться при разрыве соединения до принудительного вызова метода Close () для закрытия.
- [sarama](https://github.com/Shopify/sarama) - Библиотека Go для Apache Kafka.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - Единый push-сервис на базе Redis для серверных уведомлений на мобильные устройства.
- [varmq](https://github.com/goptics/varmq) - Независимая от хранилища очередь сообщений и пул воркеров для конкурентных программ на Go.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - Эффективная работа с потоками сообщений. Создание событийно-ориентированных приложений, поддержка event sourcing, RPC поверх сообщений, саг. Может использовать традиционные реализации pub/sub, такие как Kafka или RabbitMQ, а также HTTP или binlog MySQL.
- [zmq4](https://github.com/pebbe/zmq4) - Интерфейс Go к ZeroMQ версии 4. Также доступен для [версии 3](https://github.com/pebbe/zmq3) и [версии 2](https://github.com/pebbe/zmq2).

**[⬆ Наверх](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Библиотека на чистом Go для создания и обработки документов Office Word (.docx), Excel (.xlsx) и PowerPoint (.pptx).

### Microsoft Excel

_Библиотеки для работы с Microsoft Excel._

- [cellwalker](https://github.com/chonla/cellwalker) - Виртуальный обход Excel по ячейкам по их именам.
- [excelize](https://github.com/xuri/excelize) - Библиотека Golang для чтения и записи файлов Microsoft Excel&trade; (XLSX).
- [exl](https://github.com/go-the-way/exl) - Привязка Excel к структурам, написанная на Go (поддерживает только Go 1.18+).
- [go-excel](https://github.com/szyhf/go-excel) - Простой и лёгкий инструмент для чтения таблиц Excel, похожих на реляционную базу данных, в виде таблицы.
- [xlsx](https://github.com/tealeg/xlsx) - Библиотека, упрощающая чтение XML-формата, используемого в последних версиях Microsoft Excel, в программах на Go.
- [xlsx](https://github.com/plandem/xlsx) - Быстрый и безопасный способ чтения и обновления существующих файлов Microsoft Excel в программах на Go.

### Microsoft Word

_Библиотеки для работы с Microsoft Word._

- [godocx](https://github.com/gomutex/godocx) - Библиотека для чтения и записи файлов Microsoft Word (Docx).

**[⬆ Наверх](#contents)**

## Разное

### Внедрение зависимостей

_Библиотеки для работы с внедрением зависимостей._

- [alice](https://github.com/magic003/alice) - Аддитивный контейнер внедрения зависимостей для Golang.
- [autowire](https://github.com/tiendc/autowire) - Внедрение зависимостей с использованием дженериков и рефлексии.
- [boot-go](http://github.com/boot-go/boot) - Компонентно-ориентированная разработка с внедрением зависимостей на основе рефлексии для разработчиков на Go.
- [componego](https://github.com/componego/componego) - Фреймворк внедрения зависимостей на основе компонентов, позволяющий динамически заменять зависимости без дублирования кода в тестах.
- [cosban/di](https://gitlab.com/cosban/di) - Инструмент связывания зависимостей на основе генерации кода.
- [dig](https://github.com/uber-go/dig) - Набор инструментов внедрения зависимостей для Go на основе рефлексии.
- [dingo](https://github.com/i-love-flamingo/dingo) - Набор инструментов внедрения зависимостей для Go на основе Guice.
- [do](https://github.com/samber/do) - Фреймворк внедрения зависимостей на основе дженериков.
- [floatdrop/di](https://github.com/floatdrop/di) - Контейнер внедрения зависимостей, построенный на обобщённых методах, с дочерними областями видимости, хуками жизненного цикла и проверкой графа до создания каких-либо объектов.
- [fx](https://github.com/uber-go/fx) - Фреймворк приложений для Go на основе внедрения зависимостей (построен поверх dig).
- [go-beans](https://github.com/go-beans/go) - Фреймворк внедрения зависимостей и управления жизненным циклом приложения для Go, вдохновлённый Spring.
- [Go-Spring](https://github.com/go-spring/spring-core) - Высокопроизводительный фреймворк Go, вдохновлённый Spring Boot, предлагающий DI, автоконфигурацию и управление жизненным циклом при сохранении простоты и эффективности Go.
- [gocontainer](https://github.com/vardius/gocontainer) - Простой контейнер внедрения зависимостей.
- [godi](https://github.com/junioryono/godi) - Внедрение зависимостей в стиле Microsoft для Go с ограниченными по области (scoped) временами жизни и дженериками.
- [goioc/di](https://github.com/goioc/di) - Контейнер внедрения зависимостей, вдохновлённый Spring.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container — лёгкий, но мощный IoC-контейнер внедрения зависимостей для языка программирования Go.
- [gontainer](https://github.com/NVIDIA/gontainer) - Сервисный контейнер внедрения зависимостей для проектов на Go.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - Контейнер внедрения зависимостей для Go на основе YAML. Поддерживает области видимости зависимостей и автоматическое обнаружение циклических зависимостей. Gontainer безопасен для конкурентного использования.
- [HnH/di](https://github.com/HnH/di) - Библиотека DI-контейнера, ориентированная на чистый API и гибкость.
- [kinit](https://github.com/go-kata/kinit) - Настраиваемый контейнер внедрения зависимостей с глобальным режимом, каскадной инициализацией и защищённой от паник финализацией.
- [kod](https://github.com/go-kod/kod) - Фреймворк внедрения зависимостей для Go на основе дженериков.
- [linker](https://github.com/logrange/linker) - Библиотека внедрения зависимостей и инверсии управления на основе рефлексии с поддержкой жизненного цикла компонентов.
- [nject](https://github.com/muir/nject) - Типобезопасный фреймворк на основе рефлексии для библиотек, тестов, HTTP-эндпоинтов и запуска сервисов.
- [ore](https://github.com/firasdarwish/ore) - Лёгкий, обобщённый и простой контейнер внедрения зависимостей (DI).
- [parsley](https://github.com/matzefriedrich/parsley) - Гибкая модульная DI-библиотека на основе рефлексии с продвинутыми возможностями, такими как контексты с областями видимости и генерация прокси, разработанная для крупномасштабных приложений на Go.
- [wire](https://github.com/Fs02/wire) - Строгое внедрение зависимостей во время выполнения для Golang.
- [yama](https://github.com/livetribe/yama) - Фреймворк внедрения зависимостей на этапе компиляции и управления жизненным циклом, генерирующий код запуска, приостановки (quiesce) и остановки для графов Google Wire.

**[⬆ Наверх](#contents)**

### Структура проекта

_**Неофициальный** набор шаблонов для структурирования проектов._

- [ardanlabs/service](https://github.com/ardanlabs/service) - [Стартовый набор](https://github.com/ardanlabs/service/wiki) для создания масштабируемых веб-сервисов продакшен-уровня.
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - Шаблон заготовки приложения Go для быстрого старта проектов в соответствии с лучшими практиками продакшена.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - Позволяет пользователям быстро развернуть проект на Go с использованием популярного фреймворка.
- [go-ddd](https://github.com/sklinkert/go-ddd) - Шаблон предметно-ориентированного проектирования (DDD) с CQRS, объектами-значениями, идемпотентными командами и транзакционным исходящим ящиком (outbox).
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Пример монорепозитория для микросервисов Go на gRPC с Bazel, grpc-gateway, OpenAPI и Kubernetes.
- [go-module](https://github.com/octomation/go-module) - Шаблон для типового модуля, написанного на Go.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - Удобная для ИИ, готовая к продакшену заготовка REST API на Go с чистой архитектурой, JWT-аутентификацией, RBAC, PostgreSQL, горячей перезагрузкой в Docker и документацией Swagger.
- [go-sample](https://github.com/zitryss/go-sample) - Пример структуры проектов приложений на Go с реальным кодом.
- [go-starter](https://github.com/allaboutapps/go-starter) - Продуманный, готовый к продакшену шаблон RESTful JSON-бэкенда, тесно интегрированный с VSCode DevContainers.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - Пример бэкенда Todo на Go с модульной структурой проекта для продуктового микросервиса.
- [goapp](https://github.com/naughtygopher/goapp) - Продуманное руководство по структурированию и разработке веб-приложения/сервиса на Go.
- [gobase](https://github.com/wajox/gobase) - Простой каркас приложения на Golang с базовой настройкой для реального приложения.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Набор распространённых устоявшихся и новых шаблонов структуры проектов в экосистеме Go. Примечание: несмотря на название организации, они не являются официальными стандартами Golang; подробнее см. [это обсуждение](https://github.com/golang-standards/project-layout/issues/117). Тем не менее кому-то такая структура может оказаться полезной.
- [golang-templates/seed](https://github.com/golang-templates/seed) - Шаблон репозитория GitHub для приложения на Go.
- [goxygen](https://github.com/shpota/goxygen) - Создайте современный веб-проект на Go и Angular, React или Vue за считаные секунды.
- [insidieux/inizio](https://github.com/insidieux/inizio) - Генератор структуры проектов Golang с плагинами.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - Минималистичный однофайловый шаблон HTTP-сервера на Go без сторонних зависимостей.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - Заготовка и пример приложения на Go с применением современных практик.
- [nunu](https://github.com/go-nunu/nunu) - Nunu — инструмент создания каркаса для разработки приложений на Go.
- [pagoda](https://github.com/mikestefanello/pagoda) - Стартовый набор для быстрой и простой full-stack веб-разработки, созданный на Go.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold генерирует стартовую структуру проекта на Go, позволяя сосредоточиться на реализации бизнес-логики.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Набор практик и обсуждений о том, как структурировать проект на Go.

**[⬆ Наверх](#contents)**

### Строки

_Библиотеки для работы со строками._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Реализация механизма раскрытия фигурных скобок (Brace Expansion) на Go для генерации произвольных строк.
- [caps](https://github.com/chanced/caps) - Библиотека преобразования регистра.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - Реализует строки формата с **полями подстановки**, заключёнными в фигурные скобки `{}`.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - Библиотека обработки строк для преобразования строк в camel case, snake case, kebab case, slug и т. д.
- [str](https://github.com/schigh/str) - Набор инструментов для работы со строками, построенный вокруг конвейеров, для компоновки преобразований.
- [strcase](https://github.com/charlievieth/strcase) - Нечувствительная к регистру реализация пакетов strings/bytes стандартной библиотеки.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Форматирование строк в стиле Python или C# с дополнительными возможностями форматирования текста.
- [strutil](https://github.com/ozgio/strutil) - Утилиты для работы со строками.
- [sttr](https://github.com/abhimanyu003/sttr) - Кроссплатформенное консольное приложение для выполнения различных операций со строками.
- [xstrings](https://github.com/huandu/xstrings) - Коллекция полезных строковых функций, портированных из других языков.

**[⬆ Наверх](#contents)**

### Без категории

_Эти библиотеки размещены здесь, потому что ни одна из других категорий им не подошла._

- [anagent](https://github.com/mudler/anagent) - Минималистичный подключаемый обработчик цикла событий и таймеров для Golang с внедрением зависимостей.
- [antch](https://github.com/antchfx/antch) - Быстрый, мощный и расширяемый фреймворк для веб-краулинга и скрапинга.
- [archives](https://github.com/mholt/archives) - Кроссплатформенная мультиформатная библиотека Go для работы с архивами и форматами сжатия с единым API, а также в виде виртуальных файловых систем, совместимых с io/fs.
- [autoflags](https://github.com/artyom/autoflags) - Пакет Go для автоматического определения флагов командной строки из полей структур.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Вычисление среднего балла и рейтинга на основе формулы доверительного интервала Уилсона (Wilson Score).
- [banner](https://github.com/dimiro1/banner) - Добавьте красивые баннеры в свои приложения на Go.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch поддерживает капчи из цифр, чисел, букв, арифметических выражений, аудио и комбинаций цифр и букв.
- [basexx](https://github.com/bobg/basexx) - Преобразование в строки цифр, из них и между ними в различных системах счисления.
- [battery](https://github.com/distatus/battery) - Кроссплатформенная библиотека нормализованной информации о батарее.
- [bitio](https://github.com/icza/bitio) - Высокооптимизированные средства побитового чтения и записи (Reader и Writer) для Go.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - Библиотека на Go для проекта [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - Пакет captcha предоставляет простой в использовании и не навязывающий решений API для генерации капчи.
- [common](https://github.com/kubeservice-stack/common) - Библиотека для серверного фреймворка.
- [conv](https://github.com/cstockton/go-conv) - Пакет conv обеспечивает быстрые и интуитивные преобразования между типами Go.
- [datacounter](https://github.com/miolini/datacounter) - Счётчики на Go для reader/writer/http.ResponseWriter.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - Актуальный простой генератор поддельных User-Agent с базой реальных данных на Golang
- [faker](https://github.com/pioz/faker) - Генератор случайных поддельных данных и структур для Go.
- [ffmt](https://github.com/go-ffmt/ffmt) - Красивое отображение данных для людей.
- [gatus](https://github.com/TwinProduction/gatus) - Автоматизированная панель мониторинга состояния сервисов.
- [go-commandbus](https://github.com/lana/go-commandbus) - Компактная подключаемая шина команд для Go.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Обобщённый пул объектов для Golang.
- [go-openapi](https://github.com/go-openapi) - Коллекция пакетов для разбора и использования схем OpenAPI.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Шаблоны отказоустойчивости для Golang.
- [go-unarr](https://github.com/gen2brain/go-unarr) - Библиотека распаковки архивов RAR, TAR, ZIP и 7z.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Генератор случайных данных, написанный на Go.
- [goffi](https://github.com/go-webgpu/goffi) - FFI на чистом Go с типизированным интерфейсом вызовов в стиле libffi и структурированной обработкой ошибок для вызова библиотек C без CGO.
- [gommit](https://github.com/antham/gommit) - Анализ сообщений коммитов Git на соответствие заданным шаблонам.
- [gopsutil](https://github.com/shirou/gopsutil) - Кроссплатформенная библиотека для получения данных об использовании ресурсов процессами и системой (CPU, память, диски и т. д.).
- [gosh](https://github.com/osamingo/gosh) - Обработчик статистики, структура и методы измерений для Go.
- [gosms](https://github.com/haxpax/gosms) - Собственный локальный SMS-шлюз на Go, который можно использовать для отправки SMS.
- [gotoprom](https://github.com/cabify/gotoprom) - Библиотека-обёртка для типобезопасного построения метрик для официального клиента Prometheus.
- [gountries](https://github.com/pariz/gountries) - Пакет, предоставляющий данные о странах и их административных единицах.
- [gtree](https://github.com/ddddddO/gtree) - CLI, пакет и веб-интерфейс для вывода деревьев и создания каталогов из Markdown или программно.
- [health](https://github.com/alexliesenfeld/health) - Простая и гибкая библиотека проверки работоспособности для Go.
- [health](https://github.com/dimiro1/health) - Простая в использовании расширяемая библиотека проверки работоспособности.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - Продуманный конкурентный HTTP-обработчик проверки работоспособности для RESTful-сервисов.
- [hostutils](https://github.com/Wing924/hostutils) - Библиотека Golang для упаковки и распаковки списков FQDN.
- [indigo](https://github.com/osamingo/indigo) - Распределённый генератор уникальных идентификаторов на основе Sonyflake с кодированием в Base58.
- [lk](https://github.com/hyperboloide/lk) - Простая библиотека лицензирования для Golang.
- [llvm](https://github.com/llir/llvm) - Библиотека для работы с LLVM IR на чистом Go.
- [metrics](https://github.com/pascaldekloe/metrics) - Библиотека для инструментирования метриками и их экспорта в Prometheus.
- [morse](https://github.com/alwindoss/morse) - Библиотека для преобразования в азбуку Морзе и обратно.
- [numa](https://github.com/lrita/numa) - NUMA — библиотека утилит, написанная на Go. Помогает писать код с учётом NUMA.
- [pdfgen](https://github.com/hyperboloide/pdfgen) - HTTP-сервис для генерации PDF из JSON-запросов.
- [persian](https://github.com/mavihq/persian) - Набор утилит для персидского языка на Go.
- [purego](https://github.com/ebitengine/purego) - Библиотека для вызова функций C из Go без Cgo.
- [sandid](https://github.com/aofei/sandid) - У каждой песчинки на Земле есть свой ID.
- [shellwords](https://github.com/Wing924/shellwords) - Библиотека Golang для обработки строк в соответствии с правилами разбора слов командной оболочки UNIX Bourne shell.
- [shortid](https://github.com/teris-io/shortid) - Распределённая генерация сверхкоротких, уникальных, непоследовательных идентификаторов, удобных для URL.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - Библиотека уведомлений, обеспечивающая простой доступ к различным сервисам обмена сообщениями, таким как slack, mattermost, gotify, smtp и другим.
- [sitemap-format](https://github.com/mingard/sitemap-format) - Простой генератор карты сайта (sitemap) с небольшой порцией синтаксического сахара.
- [stateless](https://github.com/qmuntal/stateless) - Библиотека с текучим интерфейсом для создания конечных автоматов.
- [stats](https://github.com/go-playground/stats) - Отслеживает MemStats Go и системную статистику, такую как память, подкачка и CPU, и отправляет её по UDP куда угодно для журналирования и т. д.
- [turtle](https://github.com/hackebrot/turtle) - Эмодзи для Go.
- [url-shortener](https://github.com/pantrif/url-shortener) - Современный, мощный и надёжный микросервис сокращения URL с поддержкой MySQL.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - Генерация шаблонного кода обработки входных и выходных данных HTTP.
- [varint](https://github.com/chmike/varint) - Кодировщик/декодер целых чисел переменной длины, более быстрый, чем в стандартной библиотеке.
- [xdg](https://github.com/rkoesters/xdg) - Спецификации FreeDesktop.org (xdg), реализованные на Go.
- [xkg](https://github.com/go-xkg/xkg) - X Keyboard Grabber — перехват клавиатуры в X.
- [xz](https://github.com/ulikunitz/xz) - Пакет на чистом Golang для чтения и записи файлов, сжатых xz.
**[⬆ Наверх](#contents)**

## Обработка естественного языка

_Библиотеки для работы с человеческими языками._

См. также [Обработка текста](#text-processing) и [Анализ текста](#text-analysis).

### Определение языка

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - Клиент Go для API Language Detection. Поддерживает пакетные запросы, определение языка коротких фраз и отдельных слов.
- [getlang](https://github.com/rylans/getlang) - Быстрый пакет определения естественного языка.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Функции для определения естественного языка текста в Unicode.
- [lingua-go](https://github.com/pemistahl/lingua-go) - Точная библиотека определения естественного языка, подходящая как для длинных, так и для коротких текстов. Поддерживает определение нескольких языков в многоязычном тексте.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Пакет определения естественного языка для Go. Поддерживает 84 языка и 24 письменности (системы письма, например латиница, кириллица и т. д.).

### Морфологические анализаторы

- [go-propisyu](https://github.com/rekurt/go-propisyu) - Преобразование чисел в русские слова с правильным грамматическим родом и склонением существительных.
- [go-stem](https://github.com/agonopol/go-stem) - Реализация алгоритма стемминга Портера.
- [go2vec](https://github.com/danieldk/go2vec) - Средство чтения и вспомогательные функции для эмбеддингов word2vec.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Привязки Go для библиотеки snowball libstemmer, включая porter 2.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Анализатор тональности на Go с использованием лексикона SentiWordNet.
- [govader](https://github.com/jonreiter/govader) - Реализация [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment) на Go.
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - Реализация [GoVader](https://github.com/jonreiter/govader) в виде микросервиса.
- [kagome](https://github.com/ikawaha/kagome) - Морфологический анализатор японского языка, написанный на чистом Go.
- [libtextcat](https://github.com/goodsign/libtextcat) - Привязка Cgo для C-библиотеки libtextcat. Гарантированная совместимость с версией 2.2.
- [nlp](https://github.com/james-bowman/nlp) - Библиотека обработки естественного языка на Go с поддержкой LSA (латентно-семантического анализа).
- [paicehusk](https://github.com/rookii/paicehusk) - Реализация алгоритма стемминга Пейса/Хаска (Paice/Husk) на Golang.
- [porter](https://github.com/a2800276/porter) - Довольно прямолинейный порт C-реализации алгоритма стемминга Портера, написанной Мартином Портером.
- [porter2](https://github.com/zhenjl/porter2) - Действительно быстрый стеммер Porter 2.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Порт алгоритма быстрого автоматического извлечения ключевых слов (RAKE) на Go.
- [snowball](https://github.com/goodsign/snowball) - Порт стеммера Snowball (обёртка cgo) для Go. Предоставляет функциональность извлечения основ слов [Snowball native](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Самодостаточная библиотека машинного обучения и обработки естественного языка на Go.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - Корректор орфографии для испанского языка — или создайте свой собственный.

### Генераторы slug

- [go-slugify](https://github.com/mozillazg/go-slugify) - Создание красивых slug с поддержкой множества языков.
- [slug](https://github.com/gosimple/slug) - Удобное для URL преобразование в slug с поддержкой множества языков.
- [Slugify](https://github.com/avelino/slugify) - Приложение на Go для преобразования строк в slug.

### Токенизаторы

- [gojieba](https://github.com/yanyiwu/gojieba) - Реализация на Go алгоритма [jieba](https://github.com/fxsjy/jieba) для сегментации китайского текста на слова.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Токенизатор для Golang на основе словаря и биграммных языковых моделей. (Пока поддерживает только сегментацию китайского текста)
- [gse](https://github.com/go-ego/gse) - Эффективная сегментация текста на Go; поддерживает английский, китайский, японский и другие языки.
- [MMSEGO](https://github.com/awsong/MMSEGO) - Реализация на Go алгоритма [MMSEG](http://technology.chtsai.org/mmseg/) для сегментации китайского текста на слова.
- [segment](https://github.com/blevesearch/segment) - Библиотека Go для сегментации текста Unicode согласно [Приложению № 29 к стандарту Unicode](https://www.unicode.org/reports/tr29/)
- [sentences](https://github.com/neurosnap/sentences) - Токенизатор предложений: преобразует текст в список предложений.
- [shamoji](https://github.com/osamingo/shamoji) - shamoji — пакет фильтрации слов, написанный на Go.
- [stemmer](https://github.com/dchest/stemmer) - Пакеты стеммеров для языка программирования Go. Включает стеммеры для английского и немецкого языков.
- [textcat](https://github.com/pebbe/textcat) - Пакет Go для категоризации текста на основе n-грамм с поддержкой UTF-8 и необработанного текста.

### Перевод

- [ctxi18n](https://github.com/invopop/ctxi18n/) - Интернационализация (i18n) с учётом контекста, кратким и лаконичным API, поддержкой множественных форм, интерполяции и `fs.FS`. Определения локалей в YAML основаны на [Rails i18n](https://guides.rubyonrails.org/i18n.html).
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - Пакет и сопутствующий инструмент для работы с локализованным текстом.
- [go-mystem](https://github.com/dveselov/mystem) - Привязки CGo к Yandex.Mystem — анализатору русской морфологии.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - Конвертер китайских иероглифов (ханьцзы) в пиньинь.
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Библиотека таблиц слов и текстовых ресурсов для проектов на Golang.
- [gotext](https://github.com/leonelquinteros/gotext) - Утилиты GNU gettext для Go.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - Транслитерация кириллицы в латиницу всеми возможными способами.
- [spreak](https://github.com/vorlif/spreak) - Гибкая библиотека перевода и «очеловечивания» данных для Go, основанная на концепциях gettext.
- [t](https://github.com/youthlin/t) - Ещё один пакет i18n для Golang, следующий стилю GNU gettext и поддерживающий файлы .po/.mo: `t.T (gettext)`, `t.N (ngettext)` и т. д. Также включает консольный инструмент [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate), который может извлекать сообщения из шаблонов text/html в pot-файл.

### Транслитерация

- [enca](https://github.com/endeveit/enca) - Минимальные привязки cgo для [libenca](https://cihar.com/software/enca/), определяющей кодировки символов.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Транслитерация текста Unicode в ASCII.
- [gounidecode](https://github.com/fiam/gounidecode) - Транслитератор Unicode (также известный как unidecode) для Go.
- [transliterator](https://github.com/alexsergivan/transliterator) - Односторонняя транслитерация строк с поддержкой правил транслитерации для конкретных языков.

**[⬆ Наверх](#contents)**

## Сети

_Библиотеки для работы с различными уровнями сети._

- [arp](https://github.com/mdlayher/arp) - Пакет arp реализует протокол ARP, описанный в RFC 826.
- [bart](https://github.com/gaissmai/bart) - Пакет bart предоставляет сбалансированную таблицу маршрутизации (BART) для очень быстрого поиска соответствия IP-адресов и CIDR и не только.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - Простая потоковая передача данных protocol buffers поверх TCP.
- [canopus](https://github.com/zubairhamed/canopus) - Реализация клиента и сервера CoAP (RFC 7252).
- [cdns](https://github.com/junevm/cdns) - Простая смена DNS-серверов через терминал.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - Прокси TCP/UDP-портов без настройки, с автозапуском, управлением доступом по IP-адресам и тонкой настройкой сетевого стека на уровне ОС.
- [cidranger](https://github.com/yl2chen/cidranger) - Быстрый поиск соответствия IP-адресов и CIDR для Go.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Клиент Cloudflare Tunnel (ранее Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - Прокси-сервер CORS с защитой от SSRF, разрешающими и блокирующими списками хостов и опциональной аутентификацией по API-ключу.
- [dhcp6](https://github.com/mdlayher/dhcp6) - Пакет dhcp6 реализует сервер DHCPv6, описанный в RFC 3315.
- [dns](https://github.com/miekg/dns) - Библиотека Go для работы с DNS.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - Фреймворк пассивного перехвата и мониторинга DNS.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Измеряет, что на самом деле происходит с установленными TCP- и UDP-соединениями при завершении пода Kubernetes.
- [easytcp](https://github.com/DarthPestilane/easytcp) - Лёгкий TCP-фреймворк, написанный на Go (Golang), с маршрутизатором сообщений. EasyTCP помогает быстро и безболезненно создать TCP-сервер.
- [ether](https://github.com/songgao/ether) - Кроссплатформенный пакет Go для отправки и приёма Ethernet-кадров.
- [ethernet](https://github.com/mdlayher/ethernet) - Пакет ethernet реализует сериализацию и десериализацию кадров IEEE 802.3 Ethernet II и тегов VLAN IEEE 802.1Q.
- [event](https://github.com/cheng-zhongliang/event) - Простая библиотека уведомлений о событиях ввода-вывода, написанная на Golang.
- [expose](https://github.com/kernelshard/expose) - Лёгкий инструмент безопасного туннелирования с открытым исходным кодом для публикации локальных серверов в интернете.
- [fasthttp](https://github.com/valyala/fasthttp) - Пакет fasthttp — быстрая реализация HTTP для Go, до 10 раз быстрее net/http.
- [fibersse](https://github.com/vinod-morya/fibersse) - Server-Sent Events (SSE) продакшен-уровня для Fiber v3 с объединением событий, приоритетными полосами, подстановочными знаками в топиках, адаптивным ограничением скорости и встроенной аутентификацией.
- [fortio](https://github.com/fortio/fortio) - Библиотека и инструмент командной строки для нагрузочного тестирования, продвинутый эхо-сервер и веб-интерфейс. Позволяет задать нагрузку в запросах в секунду, записывать гистограммы задержек и другую полезную статистику и строить по ним графики. TCP, HTTP, gRPC.
- [ftp](https://github.com/jlaffaye/ftp) - Пакет ftp реализует FTP-клиент, описанный в [RFC 959](https://tools.ietf.org/html/rfc959).
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - Полнофункциональная библиотека FTP-сервера.
- [fullproxy](https://github.com/shoriwe/fullproxy) - Полнофункциональный набор инструментов для проксирования и пивотинга с поддержкой скриптов и настройкой в режиме демона, с протоколами SOCKS5, HTTP, raw-портами и обратным прокси.
- [fwdctl](https://github.com/alegrey91/fwdctl) - Простой и интуитивный CLI для управления перенаправлениями IPTables на вашем Linux-сервере.
- [gaio](https://github.com/xtaci/gaio) - Высокопроизводительная асинхронная сетевая библиотека ввода-вывода для Golang в режиме проактора (proactor).
- [gev](https://github.com/Allenxuxu/gev) - gev — лёгкая и быстрая неблокирующая сетевая TCP-библиотека на основе шаблона Reactor.
- [gldap](https://github.com/jimlambrt/gldap) - gldap предоставляет реализацию LDAP-сервера, а вы предоставляете обработчики для его LDAP-операций.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt — гибкая высокопроизводительная библиотека MQTT-брокера, полностью реализующая протокол MQTT V3.1.1.
- [gnet](https://github.com/panjf2000/gnet) - `gnet` — высокопроизводительный, лёгкий, неблокирующий, событийно-ориентированный сетевой фреймворк, написанный на чистом Go.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` — высокопроизводительный сетевой фреймворк, особенно подходящий для игровых серверов.
- [gNxI](https://github.com/google/gnxi) - Коллекция инструментов управления сетью, использующих протоколы gNMI и gNOI.
- [go-getter](https://github.com/hashicorp/go-getter) - Библиотека Go для загрузки файлов или каталогов из различных источников по URL.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - Библиотека для выполнения HTTP-запросов через пул прокси с отказоустойчивостью, балансировкой нагрузки, автоматическими повторными попытками, управлением cookie и не только — через замену http.Get/Post или прозрачную подстановку RoundTripper в http.Client
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - Лёгкая библиотека захвата пакетов в реальном времени с извлечением SNI из HTTPS.
- [go-powerdns](https://github.com/joeig/go-powerdns) - Привязки API PowerDNS для Golang.
- [go-sse](https://github.com/lampctl/go-sse) - Реализация клиента и сервера HTML Server-Sent Events на Go.
- [go-stun](https://github.com/ccding/go-stun) - Реализация STUN-клиента на Go (RFC 3489 и RFC 5389).
- [gobgp](https://github.com/osrg/gobgp) - BGP, реализованный на языке программирования Go.
- [gopacket](https://github.com/google/gopacket) - Библиотека Go для обработки пакетов с привязками к libpcap.
- [gopcap](https://github.com/akrennmair/gopcap) - Обёртка Go для libpcap.
- [GoProxy](https://github.com/elazarl/goproxy) - Библиотека для создания собственного HTTP/HTTPS-прокси-сервера на Go.
- [goshark](https://github.com/sunwxg/goshark) - Пакет goshark использует tshark для декодирования IP-пакетов и создания структур данных для анализа пакетов.
- [gosnmp](https://github.com/soniah/gosnmp) - Нативная библиотека Go для выполнения действий SNMP.
- [gotcp](https://github.com/gansidui/gotcp) - Пакет Go для быстрого написания TCP-приложений.
- [grab](https://github.com/cavaliercoder/grab) - Пакет Go для управления загрузкой файлов.
- [graval](https://github.com/koofr/graval) - Экспериментальный фреймворк FTP-сервера.
- [gws](https://github.com/lxzan/gws) - Высокопроизводительные WebSocket-сервер и клиент с поддержкой AsyncIO.
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs позволяет просматривать HTTP-запросы и подделывать ответы.
- [httpproxy](https://github.com/wzshiming/httpproxy) - Обработчик HTTP-прокси и dialer.
- [iplib](https://github.com/c-robinson/iplib) - Библиотека для работы с IP-адресами (net.IP, net.IPNet), вдохновлённая [ipaddress](https://docs.python.org/3/library/ipaddress.html) из Python и [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) из Ruby
- [jazigo](https://github.com/udhos/jazigo) - Jazigo — инструмент, написанный на Go, для получения конфигурации с множества сетевых устройств.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP — быстрый и надёжный протокол ARQ.
- [lhttp](https://github.com/fanux/lhttp) - Мощный фреймворк WebSocket, позволяющий легче создать собственный сервер мгновенных сообщений.
- [linkio](https://github.com/ian-kent/linkio) - Симуляция скорости сетевого канала для интерфейсов Reader/Writer.
- [llb](https://github.com/kirillDanshin/llb) - Очень простой, но быстрый бэкенд для прокси-серверов. Может быть полезен для быстрого перенаправления на заранее заданный домен без аллокаций памяти и с быстрым ответом.
- [macwifi](https://github.com/jaisonerick/macwifi) - Сканирование Wi-Fi и получение паролей из связки ключей (Keychain) для macOS 13+.
- [mdns](https://github.com/hashicorp/mdns) - Простая библиотека клиента и сервера mDNS (Multicast DNS) на Golang.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go Client предоставляет клиентскую библиотеку MQTT для подключения к MQTT-брокерам через TCP, TLS или WebSocket.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - Предельно простая низкоуровневая реализация MQTT без аллокаций, хорошо подходящая для встраиваемых систем.
- [nbio](https://github.com/lesismal/nbio) - Решение на чистом Go для более чем 1000 тыс. соединений, с поддержкой tls/http1.x/websocket и в целом совместимое с net/http: высокая производительность, низкий расход памяти, неблокирующая событийно-ориентированная модель, простота использования.
- [net](https://golang.org/x/net) - Этот репозиторий содержит дополнительные сетевые библиотеки Go.
- [netchan](https://github.com/matveynator/netchan) - Сетевые каналы (netchan) для Golang: безопасные, готовые к работе в кластере, поддерживают вложенные каналы и любые типы данных. Вдохновлено Робом Пайком.
- [nethawk](https://github.com/Flowtriq/nethawk) - Терминальный интерфейс для захвата и анализа сетевого трафика в реальном времени и обнаружения атак, с режимом вывода в JSON.
- [netpoll](https://github.com/cloudwego/netpoll) - Высокопроизводительный сетевой фреймворк с неблокирующим вводом-выводом, ориентированный на сценарии RPC, разработанный ByteDance.
- [NFF-Go](https://github.com/intel-go/nff-go) - Фреймворк для быстрой разработки производительных сетевых функций для облачных сред и «голого железа» (ранее YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - Безопасное и эффективное решение для туннелирования TCP/UDP, обеспечивающее быстрый и надёжный доступ в обход сетевых ограничений с использованием заранее установленных соединений TCP/QUIC/WebSocket или HTTP/2.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - Библиотека на чистом Go для кроссплатформенного обнаружения узлов в локальной сети с помощью UDP multicast.
- [portproxy](https://github.com/aybabtme/portproxy) - Простой TCP-прокси, добавляющий поддержку CORS к API, которые её не поддерживают.
- [proxq](https://github.com/psyb0t/docker-proxq) - Асинхронный обратный прокси, который ставит каждый запрос в очередь в Redis и возвращает ID задания для опроса ответа, с маршрутизацией по префиксу пути, повторными попытками и кешированием.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - Сетевой протокол сервера PostgreSQL. Создайте собственный сервер и начните обслуживать подключения..
- [publicip](https://github.com/polera/publicip) - Пакет publicip возвращает ваш публичный IPv4-адрес (адрес выхода в интернет).
- [quic-go](https://github.com/lucas-clemente/quic-go) - Реализация протокола QUIC на чистом Go.
- [roamr](https://github.com/sourabh-khot65/roamr) - CLI, который оценивает сохранённые Wi-Fi-сети поблизости и подсказывает, какую из них использовать и почему.
- [sdns](https://github.com/semihalev/sdns) - Высокопроизводительный рекурсивный DNS-сервер с поддержкой DNSSEC, ориентированный на сохранение конфиденциальности.
- [sftp](https://github.com/pkg/sftp) - Пакет sftp реализует протокол передачи файлов SSH (SSH File Transfer Protocol), описанный в <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>.
- [ssh](https://github.com/gliderlabs/ssh) - Высокоуровневый API для создания SSH-серверов (обёртка над crypto/ssh).
- [sslb](https://github.com/eduardonunesp/sslb) - Super Simples Load Balancer — суперпростой балансировщик нагрузки, небольшой проект для достижения определённой производительности.
- [stun](https://github.com/go-rtc/stun) - Реализация протокола STUN по RFC 5389 на Go.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack — прикладной протокол на основе TCP для упаковки и распаковки потоков байтов в программах на Go.
- [tspool](https://github.com/two/tspool) - TCP-библиотека, использующая пул воркеров для повышения производительности и защиты вашего сервера.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Реализация tun2socks на чистом Go на базе стека TCP/IP [gVisor](https://gvisor.dev/).
- [utp](https://github.com/anacrolix/utp) - Реализация микротранспортного протокола uTP на Go.
- [vssh](https://github.com/yahoo/vssh) - Библиотека Go для создания средств автоматизации сетей и серверов по протоколу SSH.
- [water](https://github.com/songgao/water) - Простая библиотека TUN/TAP.
- [webrtc](https://github.com/pions/webrtc) - Реализация WebRTC API на чистом Go.
- [winrm](https://github.com/masterzen/winrm) - WinRM-клиент на Go для удалённого выполнения команд на машинах с Windows.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - Отказоустойчивый WebSocket-клиент с автоматическим переподключением, экспоненциальной задержкой между попытками и управлением сигналами активности (heartbeat).
- [xtcp](https://github.com/xfxdev/xtcp) - Фреймворк TCP-сервера с одновременной полнодуплексной связью, корректным завершением работы и пользовательским протоколом.

**[⬆ Наверх](#contents)**

### HTTP-клиенты

_Библиотеки для выполнения HTTP-запросов._

- [axios4go](https://github.com/rezmoss/axios4go) - Библиотека HTTP-клиента для Go, вдохновлённая Axios, предоставляющая простой и интуитивный API для выполнения HTTP-запросов.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - Простой в использовании HTTP-клиент на 100% на Go для подмены отпечатков TLS/JA3 и HTTP2.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Поражайте цели своего API со скорострельной точностью с помощью самого быстрого и простого HTTP-клиента на Go.
- [gentleman](https://github.com/h2non/gentleman) - Полнофункциональная библиотека HTTP-клиента, управляемая плагинами.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - Простое получение HTTP-клиента стандартной библиотеки, не разделяющего состояние с другими клиентами.
- [go-http-client](https://github.com/bozd4g/go-http-client) - Простое и лёгкое выполнение HTTP-вызовов.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - Библиотека для мультиплексирования HTTP-запросов на основе нескольких исходных IP-адресов.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - http.RoundTripper для Go, генерирующий метрики OpenTelemetry для HTTP-запросов.
- [go-req](https://github.com/wenerme/go-req) - Декларативный HTTP-клиент для Golang.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - HTTP-клиент с повторными попытками на Go.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Мощный, лёгкий и простой HTTP-клиент, вдохновлённый Web Fetch API.
- [Grequest](https://github.com/lib4u/grequest)  - Простой и лёгкий пакет Golang для HTTP-запросов на основе мощного net/http
- [grequests](https://github.com/levigross/grequests) - «Клон» великой и знаменитой библиотеки Requests на Go.
- [hedge](https://github.com/bhope/hedge) - Адаптивные хеджированные запросы для Go. Снижает задержку p99 без какой-либо настройки, основано на статье Google «The Tail at Scale».
- [heimdall](https://github.com/gojektech/heimdall) - Улучшенный HTTP-клиент с возможностями повторных попыток и hystrix.
- [httpretry](https://github.com/ybbus/httpretry) - Дополняет стандартный HTTP-клиент Go функциональностью повторных попыток.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - Прозрачная замена net/http.Client с побайтово точным браузерным отпечатком TLS (JA3/JA4) и HTTP/2 (Akamai).
- [pester](https://github.com/sethgrid/pester) - Вызовы HTTP-клиента Go с повторными попытками, задержками между ними (backoff) и конкурентностью.
- [req](https://github.com/imroc/req) - Простой HTTP-клиент для Go с чёрной магией (меньше кода и больше эффективности).
- [request](https://github.com/monaco-io/request) - HTTP-клиент для Golang. Если вы работали с axios или requests, он вам понравится. Без сторонних зависимостей.
- [requests](https://github.com/carlmjohnson/requests) - HTTP-запросы для гоферов. Использует context.Context и не скрывает лежащий в основе net/http.Client, что делает его совместимым со стандартными API Go. Также включает инструменты для тестирования.
- [resty](https://github.com/go-resty/resty) - Простой HTTP- и REST-клиент для Go, вдохновлённый rest-client из Ruby.
- [rq](https://github.com/ddo/rq) - Более приятный интерфейс для HTTP-клиента стандартной библиотеки Golang.
- [sling](https://github.com/dghubble/sling) - Sling — библиотека HTTP-клиента Go для создания и отправки API-запросов.
- [surf](https://github.com/enetx/surf) - Продвинутый HTTP-клиент с поддержкой HTTP/1.1, HTTP/2, HTTP/3 (QUIC), прокси SOCKS5 и TLS-отпечатков браузерного уровня.
- [tls-client](https://github.com/bogdanfinn/tls-client) - HTTP-клиент наподобие net/http.Client с возможностью выбора конкретных клиентских TLS-отпечатков для запросов.

**[⬆ Наверх](#contents)**

## OpenGL

_Библиотеки для использования OpenGL в Go._

- [gl](https://github.com/go-gl/gl) - Привязки Go для OpenGL (сгенерированные с помощью glow).
- [glfw](https://github.com/go-gl/glfw) - Привязки Go для GLFW 3.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - Порт библиотеки [glMatrix](https://glmatrix.net/) на Go.
- [goxjs/gl](https://github.com/goxjs/gl) - Кроссплатформенные привязки OpenGL для Go (OS X, Linux, Windows, браузеры, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - Кроссплатформенная библиотека glfw для Go для создания контекста OpenGL и получения событий.
- [mathgl](https://github.com/go-gl/mathgl) - Математический пакет на чистом Go, специализированный на 3D-математике, вдохновлённый GLM.

**[⬆ Наверх](#contents)**

## ORM

_Библиотеки, реализующие объектно-реляционное отображение (ORM) или методы отображения данных._

- [bob](https://github.com/stephenafamo/bob) - Построитель SQL-запросов и генератор ORM/фабрик для Go. Преемник SQLBoiler.
- [bun](https://github.com/uptrace/bun) - ORM для Golang, ориентированная прежде всего на SQL. Преемник go-pg.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Фреймворк типизированного кеширования/мемоизации в Redis на основе схем для Go.
- [CQL](https://github.com/FrancoLiberali/cql) - Построен поверх GORM, добавляет проверяемые на этапе компиляции запросы на основе автоматически сгенерированного кода.
- [ent](https://github.com/facebook/ent) - Фреймворк сущностей для Go. Простая, но мощная ORM для моделирования данных и выполнения запросов к ним.
- [go-dbw](https://github.com/hashicorp/go-dbw) - Простой пакет, инкапсулирующий операции с базой данных.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Простая ORM для Google/Firebase Cloud Firestore.
- [go-sql](https://github.com/rushteam/gosql) - Простая ORM для MySQL.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - Гибкая и мощная библиотека построения SQL-строк плюс ORM без настройки.
- [go-store](https://github.com/gosuri/go-store) - Простая и быстрая библиотека хранилища «ключ-значение» на базе Redis для Go.
- [golobby/orm](https://github.com/golobby/orm) - Простая, быстрая, типобезопасная обобщённая ORM — на радость разработчикам.
- [GoooQo](https://github.com/doytowin/goooqo) - Фреймворк доступа к базам данных на основе декларативной модели запросов.
- [GORM](https://github.com/go-gorm/gorm) - Фантастическая ORM-библиотека для Golang, стремящаяся быть удобной для разработчиков.
- [gormt](https://github.com/xxjwxc/gormt) - Преобразование базы данных MySQL в структуры gorm для Golang.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence — ORM-подобная библиотека для Go.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire — уровень доступа к базам данных и валидации для Golang. (Поддержка: MySQL, PostgreSQL и SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Простая и лёгкая среда псевдо-ORM/псевдоотображения структур для Go.
- [marlow](https://github.com/marlow/marlow) - ORM, генерируемая из структур проекта, для гарантий безопасности на этапе компиляции.
- [pop/soda](https://github.com/gobuffalo/pop) - Миграция, создание баз данных, ORM и т. д. для MySQL, PostgreSQL и SQLite.
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go — типобезопасный доступ к базам данных для Go.
- [reform](https://github.com/go-reform/reform) - Улучшенная ORM для Go на основе непустых интерфейсов и генерации кода.
- [rel](https://github.com/go-rel/rel) - Современный уровень доступа к базам данных для Golang — тестируемый, расширяемый и воплощённый в чистом и элегантном API.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - Генератор ORM. Генерирует многофункциональную и молниеносно быструю ORM, адаптированную к схеме вашей базы данных.
- [upper.io/db](https://github.com/upper/db) - Единый интерфейс для взаимодействия с различными источниками данных через адаптеры, оборачивающие зрелые драйверы баз данных.
- [XORM](https://gitea.com/xorm/xorm) - Простая и мощная ORM для Go. (Поддержка: MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql и Oracle).
- [Zoom](https://github.com/albrow/zoom) - Молниеносно быстрое хранилище данных и движок запросов, построенные на Redis.

**[⬆ Наверх](#contents)**

## Управление пакетами

_Официальные инструменты для управления зависимостями и пакетами_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - Модули — это единица обмена исходным кодом и версионирования. Команда go напрямую поддерживает работу с модулями, включая запись и разрешение зависимостей от других модулей.

_Неофициальные библиотеки для управления пакетами и зависимостями._

- [gup](https://github.com/nao1215/gup) - Обновление бинарных файлов, установленных с помощью «go install».
- [modup](https://github.com/chaindead/modup) - Терминальный интерфейс для обновления зависимостей Go с обнаружением устаревших модулей и выборочным обновлением.
- [syft](https://github.com/anchore/syft) - CLI-инструмент и библиотека Go для генерации спецификации программного обеспечения (SBOM) из образов контейнеров и файловых систем.

**[⬆ Наверх](#contents)**

## Производительность

- [ebpf-go](https://github.com/cilium/ebpf) - Предоставляет утилиты для загрузки, компиляции и отладки программ eBPF.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - Автоматическое добавление спанов ко всем методам и функциям.
- [go-perfstat](https://github.com/go-perfstat/go) - Лёгкая статистика производительности и агрегирование времени выполнения для Go.
- [jaeger](https://github.com/jaegertracing/jaeger) - Система распределённой трассировки.
- [mm-go](https://github.com/joetifa2003/mm-go) - Обобщённое ручное управление памятью для Golang.
- [otelinji](https://github.com/hedhyw/otelinji) - Инструмент автоматического инструментирования OpenTelemetry для добавления спанов к функциям.
- [pixie](https://github.com/pixie-labs/pixie) - Трассировка приложений на Golang без инструментирования с помощью eBPF.
- [profile](https://github.com/pkg/profile) - Простой пакет поддержки профилирования для Go.
- [statsviz](https://github.com/arl/statsviz) - Визуализация статистики среды выполнения вашего приложения на Go в реальном времени.
- [tracer](https://github.com/kamilsk/tracer) - Простая и лёгкая трассировка.

**[⬆ Наверх](#contents)**

## Языки запросов

- [api-fu](https://github.com/ccbrown/api-fu) - Всеобъемлющая реализация GraphQL.
- [dasel](https://github.com/tomwright/dasel) - Запросы к структурам данных и их обновление с помощью селекторов из командной строки. Сравним с jq/yq, но поддерживает JSON, YAML, TOML и XML без зависимостей времени выполнения.
- [gnata](https://github.com/RecoLabs/gnata) - Реализация языка запросов и преобразований JSONata 2.x на чистом Go.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - Простой пакет Go для запросов к данным JSON.
- [goven](https://github.com/SeldonIO/goven) - Встраиваемый язык запросов для любой схемы базы данных.
- [gqlgen](https://github.com/99designs/gqlgen) - Библиотека GraphQL-сервера на основе go generate.
- [grapher](https://github.com/reaganiwadha/grapher) - Построитель полей GraphQL, использующий дженерики Go, с дополнительными утилитами и возможностями.
- [graphql](https://github.com/neelance/graphql-go) - GraphQL-сервер, ориентированный на простоту использования.
- [graphql-go](https://github.com/graphql-go/graphql) - Реализация GraphQL для Go.
- [gws](https://github.com/Zaba505/gws) - Реализация клиента и сервера «GraphQL over Websocket» от Apollo.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - Библиотека запросов для извлечения части JSON на основе синтаксиса JSONPath.
- [jsonql](https://github.com/elgs/jsonql) - Библиотека выражений запросов к JSON на Golang.
- [jsonslice](https://github.com/bhmj/jsonslice) - Запросы JSONPath с расширенными фильтрами.
- [mql](https://github.com/hashicorp/mql) - Model Query Language (mql) — язык запросов для моделей вашей базы данных.
- [play](https://github.com/paololazzari/play) - TUI-песочница для экспериментов с вашими любимыми программами, такими как grep, sed, awk, jq и yq.
- [rql](https://github.com/a8m/rql) - Resource Query Language для REST API.
- [rqp](https://github.com/timsolov/rest-query-parser) - Парсер запросов для REST API. Фильтрация, валидация, операции `AND` и `OR` поддерживаются непосредственно в запросе.
- [straf](https://github.com/SonicRoshan/straf) - Простое преобразование структур Golang в объекты GraphQL.

**[⬆ Наверх](#contents)**

## Рефлексия

- [copy](https://github.com/gotidy/copy) - Пакет для быстрого копирования структур разных типов.
- [Deepcopier](https://github.com/ulule/deepcopier) - Простое копирование структур для Go.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - Быстрая библиотека глубокого копирования.
- [goenum](https://github.com/lvyahui8/goenum) - Универсальная структура перечислений на основе дженериков и рефлексии, позволяющая быстро определять перечисления и использовать набор полезных методов по умолчанию.
- [gotype](https://github.com/wzshiming/gotype) - Разбор исходного кода Golang; используется подобно пакету reflect.
- [gpath](https://github.com/tenntenn/gpath) - Библиотека для упрощения доступа к полям структур с помощью выражений Go при рефлексии.
- [objwalker](https://github.com/rekby/objwalker) - Обход объектов Go с помощью рефлексии.
- [reflectpro](https://github.com/gontainer/reflectpro) - Вызыватели, копировщики, геттеры и сеттеры для Go.
- [reflectutils](https://github.com/muir/reflectutils) - Вспомогательные средства для работы с рефлексией: разбор тегов структур, рекурсивный обход, заполнение значений из строки.

**[⬆ Наверх](#contents)**

## Встраивание ресурсов

- [debme](https://github.com/leaanthony/debme) - Создание `embed.FS` из подкаталога существующей `embed.FS`.
- [embed](https://pkg.go.dev/embed) - Пакет embed предоставляет доступ к файлам, встроенным в работающую программу на Go.
- [rebed](https://github.com/soypat/rebed) - Воссоздание структуры каталогов и файлов из типа `embed.FS` в Go 1.16
- [vfsgen](https://github.com/shurcooL/vfsgen) - Генерирует файл vfsdata.go, статически реализующий заданную виртуальную файловую систему.

**[⬆ Наверх](#contents)**

## Наука и анализ данных

_Библиотеки для научных вычислений и анализа данных._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - Предоставляет модель Брэдли — Терри для попарных сравнений.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Календарная тепловая карта на чистом Go, вдохновлённая графиком активности вкладов на GitHub.
- [chart](https://github.com/vdobler/chart) - Простая библиотека построения графиков для Go. Поддерживает множество типов графиков.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - Датафреймы для машинного обучения и статистики (подобно pandas).
- [decimal](https://github.com/db47h/decimal) - Пакет decimal реализует десятичную арифметику с плавающей точкой произвольной точности.
- [entitydebs](https://github.com/ndabAP/entitydebs) - Инструмент для социальных наук, позволяющий программно анализировать сущности в документальных текстах, со встроенным синтаксическим анализатором зависимостей.
- [evaler](https://github.com/soniah/evaler) - Простой вычислитель арифметических выражений с плавающей точкой.
- [ewma](https://github.com/VividCortex/ewma) - Экспоненциально взвешенные скользящие средние.
- [geom](https://github.com/skelterjohn/geom) - 2D-геометрия для Golang.
- [go-dsp](https://github.com/mjibson/go-dsp) - Цифровая обработка сигналов для Go.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Алгоритмы оценки состояния и фильтрации на Go.
- [go-gt](https://github.com/ThePaw/go-gt) - Алгоритмы теории графов, написанные на языке «Go».
- [go-hep](https://github.com/go-hep/hep) - Набор библиотек и инструментов для удобного проведения анализа в физике высоких энергий.
- [godesim](https://github.com/soypat/godesim) - Расширенный/многомерный фреймворк решения ОДУ для событийного моделирования с простым API.
- [goent](https://github.com/kzahedi/goent) - Реализация мер энтропии на Go.
- [gograph](https://github.com/hmdsefi/gograph) - Обобщённая библиотека графов для Golang, предоставляющая математическую теорию графов и алгоритмы.
- [gonum](https://github.com/gonum/gonum) - Gonum — набор численных библиотек для языка программирования Go. Включает библиотеки для матриц, статистики, оптимизации и многого другого.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot предоставляет API для построения и отрисовки графиков в Go.
- [goraph](https://github.com/gyuho/goraph) - Библиотека теории графов на чистом Go (структуры данных, визуализация алгоритмов).
- [gosl](https://github.com/cpmech/gosl) - Научная библиотека Go для линейной алгебры, БПФ, геометрии, NURBS, численных методов, теории вероятностей, оптимизации, дифференциальных уравнений и многого другого.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats — библиотека GoLang с открытым исходным кодом для математической статистики, в основном используемая в области машинного обучения; охватывает большинство функций статистических показателей.
- [graph](https://github.com/yourbasic/graph) - Библиотека базовых алгоритмов на графах.
- [hdf5](https://github.com/scigolib/hdf5) - Реализация формата файлов HDF5 на чистом Go для хранения научных данных и обмена ими.
- [insyra](https://github.com/HazelnutParadise/insyra) - Библиотека анализа данных со статистикой, визуализацией, поддержкой Parquet и интеграцией с Python.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - Инструмент для работы с графами в JSONL с поддержкой graphviz.
- [matlab](https://github.com/scigolib/matlab) - Библиотека на чистом Go для чтения и записи файлов MATLAB .mat (v5-v7.3) без CGO.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go — пакет с открытым исходным кодом для определения математических программ (например, задач выпуклой оптимизации) на Go.
- [matrix](https://github.com/Arceus-7/matrix) - Чистый обобщённый пакет матричной математики для Go без зависимостей, с поддержкой арифметики, разложений и решения систем линейных уравнений.
- [ode](https://github.com/ChristopherRabotin/ode) - Решатель обыкновенных дифференциальных уравнений (ОДУ) с поддержкой расширенных состояний и условий остановки итераций на основе каналов.
- [orb](https://github.com/paulmach/orb) - Типы 2D-геометрии с поддержкой отсечения, GeoJSON и Mapbox Vector Tile.
- [pagerank](https://github.com/alixaxel/pagerank) - Алгоритм взвешенного PageRank, реализованный на Go.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - Крошечная библиотека линейной интерполяции.
- [PiHex](https://github.com/claygod/PiHex) - Реализация алгоритма Бэйли — Боруэйна — Плаффа для вычисления шестнадцатеричных цифр числа Пи.
- [Poly](https://github.com/bebop/poly) - Пакет Go для инженерии организмов.
- [rootfinding](https://github.com/khezen/rootfinding) - Библиотека алгоритмов поиска корней квадратичных функций.
- [simd](https://github.com/tphakala/simd) - Нативные векторные и SIMD-операции над срезами на Go с ускорением на ассемблере для нескольких архитектур.
- [sparse](https://github.com/james-bowman/sparse) - Форматы разреженных матриц на Go для линейной алгебры в научных приложениях и приложениях машинного обучения, совместимые с матричными библиотеками gonum.
- [stats](https://github.com/montanaflynn/stats) - Статистический пакет с распространёнными функциями, отсутствующими в стандартной библиотеке Golang.
- [streamtools](https://github.com/nytlabs/streamtools) - Универсальный графический инструмент для работы с потоками данных.
- [taxonkit](https://github.com/shenwei356/taxonkit) - Практичный и эффективный набор инструментов для таксономии NCBI; поддерживает запросы родословных линий, переформатирование, фильтрацию и создание пользовательских файлов taxdump.
- [TextRank](https://github.com/DavidBelicza/TextRank) - Реализация TextRank на Golang с расширяемыми возможностями (реферирование, взвешивание, извлечение фраз) и поддержкой многопоточности (горутин).
- [topk](https://github.com/keilerkonzept/topk) - Скетчи top-K со скользящим окном и обычные скетчи top-K на основе алгоритма HeavyKeeper.
- [triangolatte](https://github.com/tchayen/triangolatte) - Библиотека 2D-триангуляции. Позволяет переводить линии и многоугольники (заданные точками) на язык GPU.

**[⬆ Наверх](#contents)**

## Безопасность

_Библиотеки, помогающие сделать ваше приложение более безопасным._

- [acme-proxy](https://github.com/esnet/acme-proxy) - Прохождение проверки ACME http-01 без открытия порта 80 в интернет и получение сертификатов от внешнего центра сертификации.
- [acmetool](https://github.com/hlandau/acme) - Клиентский инструмент ACME (Let's Encrypt) с автоматическим продлением.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Небольшой пакет Go для генерации криптографически стойких паролей.
- [acra](https://github.com/cossacklabs/acra) - Сетевой шифрующий прокси для защиты приложений, работающих с базами данных, от утечек данных: стойкое выборочное шифрование, предотвращение SQL-инъекций, система обнаружения вторжений.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - Детерминированный генератор случайных битов на основе AES в режиме счётчика (AES-CTR-DRBG), как указано в NIST SP 800-90A.
- [age](https://github.com/FiloSottile/age) - Простой, современный и безопасный инструмент шифрования (и библиотека Go) с небольшими явными ключами, без параметров конфигурации и с компонуемостью в стиле UNIX.
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Лёгкая обёртка над пакетом argon2 в Go, близко повторяющая пакет Bcrypt из стандартной библиотеки Go и пакет simple-scrypt.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Автоматическое получение сертификатов Let's Encrypt и запуск TLS-сервера.
- [BadActor](https://github.com/jaredfolkins/badactor) - Управляемый приложением блокировщик в памяти, созданный в духе fail2ban.
- [beelzebub](https://github.com/mariocandela/beelzebub) - Безопасный low-code-фреймворк для создания ханипотов, использующий ИИ для виртуализации систем.
- [booster](https://github.com/anatol/booster) - Быстрый генератор initramfs с поддержкой полнодискового шифрования.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Middleware межсетевого экрана для веб-приложений (WAF) для сервера Caddy с движком правил на регулярных выражениях, оценкой аномалий, чёрными списками IP/DNS/ASN/стран и ограничением частоты запросов.
- [Cameradar](https://github.com/Ullaakut/cameradar) - Инструмент и библиотека для удалённого взлома RTSP-потоков камер видеонаблюдения.
- [canery](https://github.com/rluders/canery) - Минималистичный движок авторизации без состояния с подключаемой моделью вычисления.
- [certificates](https://github.com/mvmaasakkers/certificates) - Продуманный инструмент для генерации TLS-сертификатов.
- [CertMagic](https://github.com/caddyserver/certmagic) - Зрелая, надёжная и мощная интеграция ACME-клиента для полностью управляемого выпуска и продления TLS-сертификатов.
- [Coraza](https://github.com/corazawaf/coraza) - Готовая для корпоративного использования библиотека WAF, совместимая с modsecurity и OWASP CRS.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - Автономный CLI-инструмент для проверки правил WAF на SecLang для ModSecurity и Coraza перед развёртыванием в продакшене.
- [Crenox](https://github.com/crenoxhq/crenox) - Сканер секретов для pre-commit без зависимостей, использующий алгоритм Ахо — Корасик для высокопроизводительного обнаружения утечек учётных данных.
- [deidentify](https://github.com/aliengiraffe/deidentify) - Детерминированное удаление персональных данных из текста и структурированных данных с сохранением формата.
- [dongle](https://github.com/golang-module/dongle) - Простой, семантичный и удобный для разработчиков пакет Golang для кодирования и декодирования, шифрования и расшифровки.
- [dotlock](https://github.com/ahmadraza100/dotlock) - Менеджер зашифрованных хранилищ .env с интерактивным TUI для управления секретами в нескольких окружениях и профилях.
- [encid](https://github.com/bobg/encid) - Кодирование и декодирование зашифрованных целочисленных идентификаторов.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - Генератор паролей на основе энтропии с обширным набором аргументов командной строки для безопасной генерации случайных строк, включая цифры, пароли и пароли из малоизвестных словарных слов вперемешку с символами и цифрами.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - REST-приложение для динамического обновления правил firewalld на Linux-сервере.
- [fort](https://github.com/djadmin/fort) - Проверяет настройки безопасности macOS по 16 пунктам, выставляет оценку и исправляет проблемы там, где это можно сделать безопасно. Один бинарный файл, устанавливается через Homebrew.
- [go-generate-password](https://github.com/m1/go-generate-password) - Генератор паролей, который можно использовать в командной строке или как библиотеку.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Парсер файлов htpasswd Apache для Go.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - Валидатор паролей на основе значений чистой криптографической энтропии.
- [go-peer](https://github.com/number571/go-peer) - Программная библиотека для создания безопасных и анонимных децентрализованных систем.
- [go-yara](https://github.com/hillu/go-yara) - Привязки Go для [YARA](https://github.com/plusvic/yara) — «швейцарского ножа сопоставления с образцом для исследователей вредоносного ПО (и всех остальных)».
- [goArgonPass](https://github.com/dwin/goArgonPass) - Хеширование и проверка паролей Argon2, разработанные для совместимости с существующими реализациями на Python и PHP.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - Возможно, параноидальный пакет для безопасного хеширования и шифрования паролей.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Библиотека Go для российских криптографических стандартов ГОСТ (цифровые подписи, хеш «Стрибог», шифр «Кузнечик», MGM AEAD) на основе OpenSSL gost-engine.
- [grim](https://github.com/ijin82/grim) - Быстрый и безопасный CLI-инструмент для управления зашифрованными хранилищами заметок в Markdown в энергозависимой памяти.
- [gspy](https://github.com/Mutasem-mk4/gspy) - Криминалистический инспектор связи горутин и системных вызовов для работающих процессов Go.
- [Interpol](https://github.com/avahidi/interpol) - Генератор данных на основе правил для фаззинга и тестирования на проникновение.
- [leakhound](https://github.com/nilpoona/leakhound) - Инструмент статического анализа для обнаружения случайного логирования конфиденциальных полей структур, предотвращающий утечки данных в журналах.
- [lego](https://github.com/go-acme/lego) - Клиентская библиотека ACME и CLI-инструмент на чистом Go (для использования с Let's Encrypt).
- [luks.go](https://github.com/anatol/luks.go) - Библиотека на чистом Golang для управления разделами LUKS.
- [mcprobe](https://github.com/tamish560/mcprobe) - Сканер безопасности для серверов MCP с обнаружением промпт-инъекций, затенения инструментов (tool shadowing) и выводом в формате SARIF.
- [memguard](https://github.com/awnumar/memguard) - Библиотека на чистом Go для работы с конфиденциальными значениями в памяти.
- [mist](https://github.com/iSerganov/mist) - Библиотека аудиостеганографии с асимметричными ключами, скрывающая зашифрованные сообщения внутри сжатого аудио с помощью X25519 и ChaCha20-Poly1305.
- [multikey](https://github.com/adrianosela/multikey) - Фреймворк шифрования/расшифровки по схеме «n из N ключей» на основе алгоритма разделения секрета Шамира.
- [nacl](https://github.com/kevinburke/nacl) - Реализация набора API NaCL на Go.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - Удаляет секреты из строк журналов и HTTP-дампов за один проход, охватывая заголовки, JSON, XML, URL-кодированные данные, JWT, PEM-ключи и токены поставщиков.
- [optimus-go](https://github.com/pjebs/optimus-go) - Хеширование и обфускация идентификаторов с использованием алгоритма Кнута.
- [osv-scanner](https://github.com/google/osv-scanner) - Сканер уязвимостей, написанный на Go, использующий данные OSV.
- [passlib](https://github.com/hlandau/passlib) - Библиотека хеширования паролей, готовая к будущему.
- [passwap](https://github.com/zitadel/passwap) - Предоставляет единую реализацию для различных алгоритмов хеширования паролей
- [pii-shield](https://github.com/pii-shield/pii-shield) - Sidecar для очистки журналов в Kubernetes без изменения кода, удаляющий персональные данные из журналов.
- [pm](https://github.com/nicola-strappazzon/password-manager) - Менеджер паролей в стиле Unix, написанный на Go, сохраняющий ваши данные с шифрованием OpenPGP.
- [procscope](https://github.com/Mutasem-mk4/procscope) - Исследователь среды выполнения в рамках процесса, использующий eBPF для трассировки жизненного цикла процесса, файловой активности и сетевых соединений.
- [qrand](https://github.com/bitfield/qrand) - Клиент для API ANU Quantum Numbers (AQN), предоставляющего квантово-механически безопасные случайные данные.
- [Razify](https://github.com/Hossiy21/razify) - CLI для сканирования, проверки и аудита файлов .env на предмет утечки секретов и расхождений между окружениями.
- [redact](https://github.com/alesr/redact) - Удаление конфиденциальной информации из журналов на основе slog с помощью настраиваемого конвейера.
- [SafeDep/vet](https://github.com/safedep/vet) - Защита от вредоносных пакетов с открытым исходным кодом.
- [secret](https://github.com/rsjethani/secret) - Не допускайте утечки секретов в журналы, std\* и т. д.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - Генератор учётных данных на основе CSPRNG с версионированной JSON-схемой для паролей, парольных фраз, секретов, API-ключей и PIN-кодов.
- [secure](https://github.com/unrolled/secure) - HTTP-middleware для Go, позволяющее быстро получить некоторые преимущества в безопасности.
- [secureio](https://github.com/xaionaro-go/secureio) - Обёртка и мультиплексор для `io.ReadWriteCloser` с обменом ключами, аутентификацией и шифрованием на основе XChaCha20-poly1305, ECDH и ED25519.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Пакет Scrypt с простым и понятным API и встроенной автоматической калибровкой стоимости.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Шифрование и расшифровка с использованием SSH-ключей.
- [sslmgr](https://github.com/adrianosela/sslmgr) - Простая работа с SSL-сертификатами с помощью высокоуровневой обёртки над acme/autocert.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf — HTTP-middleware для Go, предоставляющее функциональность teler IDS для защиты от веб-атак и повышения безопасности веб-приложений на Go. Гибко настраивается и легко интегрируется в существующие приложения на Go.
- [themis](https://github.com/cossacklabs/themis) - Высокоуровневая криптографическая библиотека для решения типовых задач защиты данных (безопасное хранение данных, защищённый обмен сообщениями, аутентификация с доказательством с нулевым разглашением), доступная для 14 языков, лучше всего подходит для мультиплатформенных приложений.
- [urusai](https://github.com/calpa/urusai) - Urusai («шумный» по-японски) — реализация на Go генератора случайного шумового трафика HTTP/DNS, помогающего защитить конфиденциальность за счёт создания цифровой дымовой завесы во время веб-сёрфинга.
- [veil](https://github.com/getveil/veil) - Локальный HTTPS-прокси, скрывающий учётные данные API от ИИ-агентов для программирования. Интеграция со связкой ключей ОС, плейсхолдеры с учётом формата, журнал аудита в SQLite.
- [y509](https://github.com/kanywst/y509) - TUI для цепочек сертификатов X.509, сообщающий, проходит ли цепочка проверку, и отдельно — корректно ли её отдал сервер.


**[⬆ Наверх](#contents)**

## Сериализация

_Библиотеки и инструменты для двоичной сериализации._

- [bambam](https://github.com/glycerine/bambam) - Генератор схем Cap'n Proto из кода на Go.
- [bel](https://github.com/32leaves/bel) - Генерация интерфейсов TypeScript из структур и интерфейсов Go. Полезно для JSON RPC.
- [binstruct](https://github.com/ghostiam/binstruct) - Двоичный декодер Golang для отображения данных на структуру.
- [cbor](https://github.com/fxamacker/cbor) - Небольшая, безопасная и простая библиотека кодирования и декодирования CBOR.
- [colfer](https://github.com/pascaldekloe/colfer) - Генерация кода для двоичного формата Colfer.
- [csvutil](https://github.com/jszwec/csvutil) - Высокопроизводительное идиоматичное кодирование и декодирование CSV-записей в нативные структуры Go.
- [elastic](https://github.com/epiclabs-io/elastic) - Преобразование срезов, отображений и любых других неизвестных значений между различными типами во время выполнения, несмотря ни на что.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - Форматирование текста фиксированной ширины (с поддержкой UTF-8).
- [fwencoder](https://github.com/o1egl/fwencoder) - Парсер файлов с полями фиксированной ширины (библиотека кодирования и декодирования) для Go.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Библиотека и парсер Cap'n Proto для Go.
- [go-codec](https://github.com/ugorji/go) - Высокопроизводительная многофункциональная идиоматичная библиотека кодирования, декодирования и RPC для msgpack, cbor и json с поддержкой работы во время выполнения ИЛИ генерации кода.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - Высокоуровневая библиотека сериализации/десериализации CSV с богатой функциональностью.
- [goprotobuf](https://github.com/golang/protobuf) - Поддержка protocol buffers от Google в Go в виде библиотеки и плагина компилятора протоколов.
- [gotiny](https://github.com/raszia/gotiny) - Эффективная библиотека сериализации для Go; gotiny почти так же быстра, как библиотеки сериализации, генерирующие код.
- [jsoniter](https://github.com/json-iterator/go) - Высокопроизводительная, на 100% совместимая прозрачная замена «encoding/json».
- [mus-go](https://github.com/mus-format/mus-go) - Сериализатор формата MUS для Go.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - Библиотека GoLang для работы с форматом сессий PHP и функциями PHP Serialize/Unserialize.
- [pletter](https://github.com/vimeda/pletter) - Стандартный способ оборачивания proto-сообщений для брокеров сообщений.
- [proto](https://github.com/emicklei/proto) - Парсер и генератор файлов .proto Google Protocol Buffers.
- [structomap](https://github.com/tuvistavie/structomap) - Библиотека для простой динамической генерации отображений из статических структур.
- [unitpacking](https://github.com/recolude/unitpacking) - Библиотека для упаковки единичных векторов в минимально возможное количество байтов.

**[⬆ Наверх](#contents)**

## Серверные приложения

- [algernon](https://github.com/xyproto/algernon) - Веб-сервер HTTP/2 со встроенной поддержкой Lua, Markdown, GCSS и Amber.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy — альтернативный веб-сервер HTTP/2, простой в настройке и использовании.
- [Casdoor](https://github.com/casdoor/casdoor) - Сервер управления идентификацией и доступом (IAM) и единого входа (SSO) с веб-интерфейсом, поддерживающий OAuth 2.0, OIDC, SAML, CAS и LDAP.
- [consul](https://www.consul.io/) - Consul — инструмент для обнаружения сервисов, мониторинга и конфигурации.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Прокси удалённой записи Prometheus, добавляющий заголовок с ID арендатора Cortex на основе меток метрик.
- [devd](https://github.com/cortesi/devd) - Локальный веб-сервер для разработчиков.
- [discovery](https://github.com/Bilibili/discovery) - Реестр для отказоустойчивой балансировки нагрузки и переключения на резерв на среднем уровне.
- [dudeldu](https://github.com/krotik/dudeldu) - Простой сервер SHOUTcast.
- [Easegress](https://github.com/megaease/easegress) - Облачная (cloud native) система оркестрации трафика с высокой доступностью и производительностью, наблюдаемостью и расширяемостью.
- [Engity's Bifröst](https://bifroest.engity.org/) - Гибко настраиваемый SSH-сервер с несколькими способами авторизации пользователя и выбора способа выполнения его сессии (локально или в контейнерах).
- [etcd](https://github.com/etcd-io/etcd) - Высокодоступное хранилище «ключ-значение» для общей конфигурации и обнаружения сервисов.
- [Euterpe](https://github.com/ironsmile/euterpe) - Самостоятельно размещаемый сервер потоковой передачи музыки со встроенным веб-интерфейсом и REST API.
- [Fider](https://github.com/getfider/fider) - Fider — открытая платформа для сбора и упорядочивания отзывов клиентов.
- [Flagr](https://github.com/checkr/flagr) - Flagr — сервис флагов функций и A/B-тестирования с открытым исходным кодом.
- [flipt](https://github.com/markphelps/flipt) - Автономное решение для флагов функций, написанное на Go и Vue.js
- [flue](https://github.com/karnstack/flue) - Самостоятельно размещаемый демон, транслирующий терминальные сессии во вкладку браузера. Сессии продолжают работать после закрытия вкладки.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - Простое, полное и лёгкое самостоятельно размещаемое решение для флагов функций, на 100% с открытым исходным кодом.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Простой обратный прокси с кешированием, написанный на Go и использующий Redis.
- [gondola](https://github.com/bmf-san/gondola) - Обратный прокси на Golang с конфигурацией в YAML.
- [goshs](https://github.com/patrickhener/goshs) - Замена SimpleHTTPServer с загрузкой и скачиванием файлов, WebDAV, SFTP, SMB, TLS, аутентификацией и ссылками для общего доступа.
- [Kono](https://github.com/starwalkn/kono) - Лёгкий расширяемый API-шлюз на Go — параллельное разветвление запросов, гибкое агрегирование и магия без настройки.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Обратный прокси для обработки HTTPS с выпуском сертификатов Let's Encrypt «на лету».
- [minio](https://github.com/pgsty/minio) - Поддерживаемый сообществом форк minio (сервиса объектного хранения).
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy — простой сервер приложений для моков и проксирования: можно создавать мок-эндпоинты, а также проксировать запросы, если для эндпоинта нет мока.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Парсер журналов Nginx и экспортёр в Prometheus.
- [nsq](https://nsq.io/) - Распределённая платформа обмена сообщениями в реальном времени.
- [OpenRun](https://github.com/openrundev/openrun) - Альтернатива Google Cloud Run и AWS App Runner с открытым исходным кодом. Простое развёртывание внутренних инструментов для всей команды.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase — бэкенд реального времени в 1 файле, состоящий из встроенной базы данных (SQLite) с подписками в реальном времени, встроенного управления аутентификацией и многого другого.
- [protoxy](https://github.com/camgraff/protoxy) - Прокси-сервер, преобразующий тела JSON-запросов в Protocol Buffers.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - Потоковая передача событий базы данных из PostgreSQL в Kafka.
- [relay](https://github.com/valtors/relay) - Сервер MCP с более чем 40 инструментами для ИИ-агентов. Файловые операции, веб-поиск, скриншоты, координация нескольких агентов. Один бинарный файл Go.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Ретранслятор для балансировки нагрузки событий Riemann и/или их преобразования в Carbon.
- [RoadRunner](https://github.com/spiral/roadrunner) - Высокопроизводительный сервер приложений PHP, балансировщик нагрузки и менеджер процессов.
- [SFTPGo](https://github.com/drakkan/sftpgo) - Полнофункциональный и гибко настраиваемый SFTP-сервер с опциональной поддержкой FTP/S и WebDAV. Может обслуживать локальную файловую систему и облачные хранилища, такие как S3 и Google Cloud Storage.
- [simpleconf](https://github.com/shaunlee/simpleconf) - Сервер конфигурации, хранящий один JSON-документ, который читается и записывается по пути ключа через HTTP и TCP, с опциональной кластеризацией на Raft.
- [Trickster](https://github.com/tricksterproxy/trickster) - Кеш обратного HTTP-прокси и ускоритель временных рядов.
- [wd-41](https://github.com/baalimago/wd-41) - Сервер для веб-разработки (wd) с автоматической живой перезагрузкой при изменении файлов.
- [whois](https://github.com/KincaidYang/whois) - Самостоятельно размещаемый сервис запросов WHOIS/RDAP и сервер MCP для доменов, адресов IPv4/IPv6, CIDR и ASN.
- [Wish](https://github.com/charmbracelet/wish) - Создавайте SSH-приложения — вот так просто!

**[⬆ Наверх](#contents)**

## Потоковая обработка

_Библиотеки и инструменты для потоковой обработки и реактивного программирования._

- [go-etl](https://github.com/Breeze0806/go-etl) - Лёгкий набор инструментов для извлечения, преобразования и загрузки данных из источников (ETL).
- [go-streams](https://github.com/reugn/go-streams) - Библиотека потоковой обработки для Go.
- [goio](https://github.com/primetalk/goio) - Реализация IO, Stream, Fiber для Golang, вдохновлённая замечательными библиотеками Scala cats и fs2.
- [gostream](https://github.com/mariomac/gostream) - Типобезопасная библиотека потоковой обработки, вдохновлённая Java Streams API.
- [machine](https://github.com/whitaker-io/machine) - Библиотека Go для написания и генерации потоковых обработчиков со встроенными метриками и трассируемостью.
- [nibbler](https://github.com/naughtygopher/nibbler) - Лёгкий пакет для микропакетной обработки.
- [ro](https://github.com/samber/ro) - Реактивное программирование: декларативный и компонуемый API для событийно-ориентированных приложений.
- [signals](https://github.com/coregx/signals) - Типобезопасное реактивное управление состоянием, вдохновлённое Angular Signals, с вычисляемыми значениями, эффектами и отслеживанием зависимостей.
- [stream](https://github.com/youthlin/stream) - Go Stream, как Stream в Java 8: Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - Лёгкий потоковый SQL-движок для обработки данных в реальном времени.

**[⬆ Наверх](#contents)**

## Шаблонизаторы

_Библиотеки и инструменты для шаблонизации и лексического анализа._

- [bagme](https://github.com/boxesandglue/bagme) - Отрисовка HTML/CSS в PDF с типографикой качества TeX на чистом Go.
- [ego](https://github.com/benbjohnson/ego) - Лёгкий язык шаблонов, позволяющий писать шаблоны на Go. Шаблоны транслируются в Go и компилируются.
- [fasttemplate](https://github.com/valyala/fasttemplate) - Простой и быстрый шаблонизатор. Подставляет значения в плейсхолдеры шаблонов до 10 раз быстрее, чем [text/template](https://golang.org/pkg/text/template/).
- [gomponents](https://www.gomponents.com) - Компоненты HTML 5 на чистом Go, которые выглядят примерно так: `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Генератор кода Go, вдохновлённый Hero и Fasttemplate. Поддерживает включаемые файлы, пользовательские определения тегов, внедрённый код Go, перевод на другие языки и многое другое.
- [goview](https://github.com/foolin/goview) - Goview — лёгкая, минималистичная и идиоматичная библиотека шаблонов на основе html/template из Golang для создания веб-приложений на Go.
- [gox](https://github.com/doors-dev/gox) - HTML-шаблоны как полноценные выражения Go с бесшовной поддержкой в редакторах.
- [htmgo](https://htmgo.dev) - Создавайте простые и масштабируемые системы с помощью go + htmx
- [jet](https://github.com/CloudyKit/jet) - Шаблонизатор Jet.
- [liquid](https://github.com/osteele/liquid) - Реализация шаблонов Shopify Liquid на Go.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Полная реализация шаблонизатора Liquid от Shopify на Go.
- [maroto](https://github.com/johnfercher/maroto) - Способ создания PDF в стиле maroto. Maroto вдохновлён Bootstrap и использует gofpdf. Быстро и просто.
- [pongo2](https://github.com/flosch/pongo2) - Шаблонизатор для Go в стиле Django.
- [quicktemplate](https://github.com/valyala/quicktemplate) - Быстрый, мощный, но простой в использовании шаблонизатор. Преобразует шаблоны в код Go, а затем компилирует его.
- [Razor](https://github.com/sipin/gorazor) - Движок представлений Razor для Golang.
- [Soy](https://github.com/robfig/soy) - Шаблоны Closure (они же шаблоны Soy) для Go в соответствии с [официальной спецификацией](https://developers.google.com/closure/templates/).
- [sprout](https://github.com/go-sprout/sprout) - Полезные функции для шаблонов Go.
- [tbd](https://github.com/lucasepe/tbd) - Очень простой способ создавать текстовые шаблоны с плейсхолдерами — предоставляет дополнительные встроенные метаданные Git-репозитория.
- [templ](https://github.com/a-h/templ) - Язык HTML-шаблонов с отличным инструментарием для разработчиков.
- [templator](https://github.com/alesr/templator) - Типобезопасный движок отрисовки HTML-шаблонов для Go.

**[⬆ Наверх](#contents)**

## Тестирование

_Библиотеки для тестирования кодовой базы и генерации тестовых данных._

### Фреймворки тестирования

- [apitest](https://apitest.dev) - Простая и расширяемая библиотека поведенческого тестирования для REST-сервисов или HTTP-обработчиков с поддержкой моков внешних HTTP-вызовов и отрисовкой диаграмм последовательностей.
- [arch-go](https://github.com/arch-go/arch-go) - Инструмент тестирования архитектуры для проектов на Go.
- [assay](https://github.com/tushariitr-19/assay) - Независимая от фреймворков библиотека оценки для тестирования агентов на Go и серверов MCP с детерминированными проверками, кодами завершения для CI и тестированием на основе YAML без написания кода.
- [assert](https://github.com/go-playground/assert) - Базовая библиотека утверждений, используемая вместе с нативным тестированием Go, со строительными блоками для пользовательских утверждений.
- [axiom](https://github.com/Nikita-Filonov/axiom) - Компонуемый фреймворк тестирования для Go с фикстурами, хуками, повторными попытками, метаданными, плагинами и параллельным выполнением.
- [baloo](https://github.com/h2non/baloo) - Выразительное и универсальное сквозное тестирование HTTP API — это просто.
- [be](https://github.com/carlmjohnson/be) - Минималистичная обобщённая библиотека утверждений для тестов.
- [biff](https://github.com/fulldump/biff) - Фреймворк тестирования с бифуркацией, совместимый с BDD.
- [charlatan](https://github.com/percolate/charlatan) - Инструмент для генерации поддельных реализаций интерфейсов для тестов.
- [commander](https://github.com/SimonBaeumer/commander) - Инструмент для тестирования CLI-приложений в Windows, Linux и OS X.
- [coverage](https://github.com/jbunds/coverage) - Простой веб-интерфейс для покрытия тестами в Go и переиспользуемый GitHub Action [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - Простое дополнение для снапшот-тестирования для вашего фреймворка тестирования.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Очистка базы данных для целей тестирования, вдохновлённая `database_cleaner` из Ruby.
- [dft](https://github.com/abecodes/dft) - Лёгкие Docker-контейнеры без зависимостей для тестирования (и не только).
- [dsunit](https://github.com/viant/dsunit) - Тестирование хранилищ данных SQL, NoSQL и структурированных файлов.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Запуск настоящей базы данных Postgres локально в Linux, OS X или Windows как части другого приложения или теста на Go.
- [endly](https://github.com/viant/endly) - Декларативное сквозное функциональное тестирование.
- [envite](https://github.com/PerimeterX/envite) - Фреймворк управления средами разработки и тестирования.
- [fixenv](https://github.com/rekby/fixenv) - Движок управления фикстурами, вдохновлённый фикстурами pytest.
- [flute](https://github.com/suzuki-shunsuke/flute) - Фреймворк тестирования HTTP-клиентов.
- [frisby](https://github.com/verdverm/frisby) - Фреймворк тестирования REST API.
- [gherkingen](https://github.com/hedhyw/gherkingen) - Генератор шаблонного кода и фреймворк для BDD.
- [ginkgo](https://onsi.github.io/ginkgo/) - Фреймворк BDD-тестирования для Go.
- [gnomock](https://github.com/orlangure/gnomock) - Интеграционное тестирование с реальными зависимостями (база данных, кеш, даже Kubernetes или AWS), работающими в Docker, без моков.
- [go-carpet](https://github.com/msoap/go-carpet) - Инструмент для просмотра покрытия тестами в терминале.
- [go-cmp](https://github.com/google/go-cmp) - Пакет для сравнения значений Go в тестах.
- [go-hit](https://github.com/Eun/go-hit) - Hit — фреймворк интеграционного тестирования HTTP, написанный на Golang.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - Инструмент тестирования и отладки HTTP с различными эндпоинтами для тестирования клиентов.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Мутационное тестирование для Go с контрольными точками качества в CI, MSI с учётом покрытия, отслеживанием базового уровня и фильтрацией по git diff.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Тестовый контейнер MySQL для Golang, помогающий в интеграционном тестировании с MySQL.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Снапшот-тестирование в стиле Jest на Golang.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - Инструмент, сообщающий о файлах с покрытием ниже заданного порога.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Чрезвычайно гибкое глубокое сравнение для Golang, расширяющее пакет testing из Go.
- [go-testing](https://github.com/tkrop/go-testing) - Расширение тестирования Go, позволяющее просто настраивать строго изолированные модульные, компонентные и интеграционные тесты с продвинутой поддержкой моков, расширяющей gomock и gock.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - Библиотека утверждений в стиле тестовых предикатов с подробным диагностическим выводом.
- [go-vcr](https://github.com/dnaeon/go-vcr) - Запись и воспроизведение HTTP-взаимодействий для быстрых, детерминированных и точных тестов.
- [goblin](https://github.com/franela/goblin) - Фреймворк тестирования для Go в стиле Mocha.
- [goc](https://github.com/qiniu/goc) - Goc — всеобъемлющая система тестирования покрытия для языка программирования Go.
- [gocheck](https://labix.org/gocheck) - Более продвинутая альтернатива gotest в качестве фреймворка тестирования.
- [GoConvey](https://github.com/smartystreets/goconvey/) - Фреймворк в стиле BDD с веб-интерфейсом и живой перезагрузкой.
- [gocrest](https://github.com/corbym/gocrest) - Компонуемые сопоставители (matchers) в стиле hamcrest для утверждений в Go.
- [godog](https://github.com/cucumber/godog) - BDD-фреймворк Cucumber для Go.
- [gofight](https://github.com/appleboy/gofight) - Тестирование обработчиков API для фреймворков маршрутизации Golang.
- [gogiven](https://github.com/corbym/gogiven) - Фреймворк BDD-тестирования для Go в стиле YATSPEC.
- [gomatch](https://github.com/jfilipczyk/gomatch) - Библиотека для проверки JSON на соответствие шаблонам.
- [gomega](https://onsi.github.io/gomega/) - Библиотека сопоставителей и утверждений в стиле RSpec.
- [gospecify](https://github.com/stesla/gospecify) - Предоставляет синтаксис BDD для тестирования вашего кода на Go. Он будет знаком всем, кто использовал такие библиотеки, как rspec.
- [gosuite](https://github.com/pavlo/gosuite) - Добавляет в `testing` лёгкие наборы тестов с механизмами подготовки и очистки (setup/teardown) за счёт подтестов из Go 1.7.
- [got](https://github.com/ysmood/got) - Приятный фреймворк тестирования для Golang.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Коллекция пакетов, дополняющих пакет testing из Go и поддерживающих распространённые шаблоны.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - Текучий фреймворк для декларативных объектов-сопоставителей (Matcher), которые при применении к входным значениям дают самоописывающие результаты.
- [httper](https://github.com/gustofarbi/httper) - CLI-исполнитель для файлов .http от JetBrains со скриптами, утверждениями, gRPC и нагрузочным тестированием.
- [httpexpect](https://github.com/gavv/httpexpect) - Лаконичное, декларативное и простое в использовании сквозное тестирование HTTP и REST API.
- [is](https://github.com/matryer/is) - Профессиональный лёгкий мини-фреймворк тестирования для Go.
- [jsonassert](https://github.com/kinbiko/jsonassert) - Пакет для проверки корректной сериализации ваших JSON-данных.
- [keploy](https://github.com/keploy/keploy) - Автоматическая генерация тестовых сценариев и моков данных на основе вызовов API.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - Простая библиотека для изменения значений приватных полей при тестировании.
- [restit](https://github.com/yookoala/restit) - Микрофреймворк Go, помогающий писать интеграционные тесты для RESTful API.
- [schema](https://github.com/jgroeneveld/schema) - Быстрое и простое сопоставление выражений для JSON-схем, используемых в запросах и ответах.
- [should](https://github.com/Kairum-Labs/should) - Библиотека тестирования без зависимостей, с подробным сравнением структур и понятными человеку сообщениями об ошибках.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - Вспомогательное средство для тестирования конкурентности.
- [testcase](https://github.com/adamluzsi/testcase) - Идиоматичный фреймворк тестирования для разработки через поведение (BDD).
- [testcerts](https://github.com/madflojo/testcerts) - Динамическая генерация самоподписанных сертификатов и центров сертификации внутри ваших тестовых функций.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Пакет Go, упрощающий создание и очистку зависимостей на основе контейнеров для автоматизированных интеграционных и smoke-тестов. Понятный и простой в использовании API позволяет разработчикам программно определять контейнеры, которые должны запускаться в рамках теста, и освобождать эти ресурсы после его завершения.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Вспомогательное средство для тестовых фикстур в стиле Rails для тестирования приложений, работающих с базами данных.
- [Testify](https://github.com/stretchr/testify) - Священное расширение стандартного пакета testing из Go.
- [Testo](https://github.com/ozontech/testo) - Фреймворк тестирования на основе плагинов с наборами тестов, параллельными тестами, хуками и параметризацией. Вдохновлён Pytest.
- [testsql](https://github.com/zhulongcheng/testsql) - Генерация тестовых данных из SQL-файлов перед тестированием и их очистка после завершения.
- [testza](https://github.com/MarvinJWendt/testza) - Полнофункциональный фреймворк тестирования с красивым цветным выводом.
- [tparse](https://github.com/mfridman/tparse) - CLI-инструмент для сводки результатов go test. Удобен для конвейеров. Совместим с флагами go test.
- [trial](https://github.com/jgroeneveld/trial) - Быстрые и простые расширяемые утверждения без лишнего шаблонного кода.
- [Tt](https://github.com/vcaesar/tt) - Простые и красочные инструменты тестирования.
- [wstest](https://github.com/posener/wstest) - WebSocket-клиент для модульного тестирования WebSocket-обработчиков http.Handler.

### Моки

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - Инструмент для генерации самодостаточных мок-объектов.
- [fabricator](https://github.com/Goldziher/fabricator) - Типобезопасные фабрики для генерации моков и поддельных данных в Go, вдохновлённые factory_boy и interface-forge.
- [genmock](https://gitlab.com/so_literate/genmock) - Система моков для Go с генератором кода для построения вызовов методов интерфейса.
- [go-localstack](https://github.com/elgohr/go-localstack) - Инструмент для использования localstack при тестировании с AWS.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - Мок SQL-драйвера для тестирования взаимодействия с базой данных.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - Драйвер базы данных на основе единой транзакции, предназначенный в основном для тестирования.
- [gomock](https://github.com/uber-go/mock) - Фреймворк моков для языка программирования Go.
- [gomock](https://github.com/vibridi/gomock) - CLI-инструмент для генерации типизированных и независимых от фреймворков моков интерфейсов с поддержкой дженериков.
- [govcr](https://github.com/seborama/govcr) - HTTP-моки для Golang: запись и воспроизведение HTTP-взаимодействий для офлайн-тестирования.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - HTTP(S)-прокси для записи и симуляции REST/SOAP API с расширяемыми middleware и простым в использовании CLI.
- [httpmock](https://github.com/jarcoal/httpmock) - Простая подмена HTTP-ответов от внешних ресурсов.
- [minimock](https://github.com/gojuno/minimock) - Генератор моков для интерфейсов Go.
- [mockery](https://github.com/vektra/mockery) - Инструмент для генерации интерфейсов Go.
- [mockfs](https://github.com/balinomad/go-mockfs) - Мок файловой системы для тестирования на Go с внедрением ошибок и симуляцией задержек, построенный на `testing/fstest.MapFS`.
- [mockhttp](https://github.com/tv42/mockhttp) - Мок-объект для http.ResponseWriter в Go.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - Простой способ генерировать моки для различных целей.
- [moq](https://github.com/matryer/moq) - Утилита, генерирующая структуру из любого интерфейса. Структуру можно использовать в тестовом коде в качестве мока интерфейса.
- [moxie](https://lesiw.io/moxie) - Генерация мок-методов для встроенных структур.
- [pgxmock](https://github.com/pashagolub/pgxmock) - Библиотека моков, реализующая [pgx — драйвер и набор инструментов для PostgreSQL](https://github.com/jackc/pgx/).
- [timex](https://github.com/cabify/timex) - Удобная для тестирования замена нативного пакета `time`.
- [wsmock](https://github.com/sing198/wsmock) - Выразительный мок-сервер WebSocket без шаблонного кода для тестирования, с внедрением сбоев и утверждениями.
- [xgo](https://github.com/xhd2015/xgo) - Универсальная библиотека для подмены функций моками.

### Фаззинг и дельта-отладка/сокращение/минимизация

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - Система рандомизированного тестирования.
- [Tavor](https://github.com/zimmski/tavor) - Универсальный фреймворк фаззинга и дельта-отладки.

### Selenium и инструменты управления браузером

- [bonk](https://github.com/joakimcarlsson/bonk) - Быстрая библиотека автоматизации браузера с приоритетом скрытности, использующая Chrome DevTools Protocol поверх WebSocket, без внешних зависимостей.
- [cdp](https://github.com/mafredri/cdp) - Типобезопасные привязки для Chrome Debugging Protocol, которые можно использовать с браузерами или другими целями отладки, реализующими этот протокол.
- [chromedp](https://github.com/knq/chromedp) - Способ управлять Chrome, Safari, Edge, Android Webview и другими браузерами, поддерживающими Chrome Debugging Protocol, и тестировать их.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - Библиотека автоматизации браузеров для управления Chromium, Firefox и WebKit через единый API.
- [rod](https://github.com/go-rod/rod) - Драйвер Devtools, упрощающий веб-автоматизацию и скрапинг.
- [selenosis](https://github.com/alcounit/selenosis) - Нативный для Kubernetes хаб без состояния, направляющий сессии Selenium, Playwright и MCP в поды браузеров, создаваемые по требованию через пользовательские ресурсы.

### Внедрение сбоев

- [failpoint](https://github.com/pingcap/failpoint) - Реализация [точек сбоя (failpoints)](https://www.freebsd.org/cgi/man.cgi?query=fail) для Golang.

**[⬆ Наверх](#contents)**

## Обработка текста

_Библиотеки для разбора и обработки текстов._

См. также [Обработка естественного языка](#natural-language-processing) и [Анализ текста](#text-analysis).

### Форматировщики

- [address](https://github.com/bojanz/address) - Работа с представлением, валидацией и форматированием адресов.
- [align](https://github.com/Guitarbum722/align) - Универсальное приложение для выравнивания текста.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - Форматирование и разбор числовых значений в байтах (10K, 2M, 3G и т. д.).
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - Форматирование текста фиксированной ширины (кодировщик/декодер с рефлексией).
- [go-humanize](https://github.com/dustin/go-humanize) - Форматировщики времени, чисел и объёма памяти в понятный человеку формат.
- [gotabulate](https://github.com/bndr/gotabulate) - Простой красивый вывод табличных данных на Go.
- [sq](https://github.com/neilotoole/sq) - Преобразование данных из SQL-баз данных или форматов документов, таких как CSV или Excel, в форматы JSON, Excel, CSV, HTML, Markdown, XML и YAML.
- [textwrap](https://github.com/isbm/textwrap) - Перенос текста по концам строк. Реализация модуля `textwrap` из Python.

### Языки разметки

- [bafi](https://github.com/mmalcek/bafi) - Универсальный транслятор JSON, BSON, YAML, XML в ЛЮБОЙ формат с помощью шаблонов.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - Преобразует bbCode в HTML с возможностью добавить поддержку пользовательских тегов bbCode.
- [blackfriday](https://github.com/russross/blackfriday) - Обработчик Markdown на Go.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - Вывод структур Go в нескольких форматах (YAML/JSON и т. д.) в вашем консольном приложении.
- [go-toml](https://github.com/pelletier/go-toml) - Библиотека Go для формата TOML с поддержкой запросов и удобными консольными инструментами.
- [goldmark](https://github.com/yuin/goldmark) - Парсер Markdown, написанный на Go. Легко расширяется, соответствует стандарту (CommonMark), хорошо структурирован.
- [goq](https://github.com/andrewstuart/goq) - Декларативная десериализация HTML с помощью тегов структур с синтаксисом jQuery (использует GoQuery).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - Преобразование HTML в Markdown. Работает даже с целыми веб-сайтами и расширяется с помощью правил.
- [htmlquery](https://github.com/antchfx/htmlquery) - Пакет запросов XPath для HTML, позволяющий извлекать данные из HTML-документов или вычислять значения по выражению XPath.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Расширенная отрисовка YAML в виде HTML на Go.
- [htree](https://github.com/bobg/htree) - Обход, навигация, фильтрация и иная обработка деревьев объектов [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node).
- [markdown](https://github.com/nao1215/markdown) - Построитель Markdown, генерирующий GitHub Flavored Markdown и диаграммы mermaid через цепочки вызовов методов.
- [mdsmith](https://github.com/jeduden/mdsmith) - Быстрый линтер и форматировщик Markdown с автоисправлением. Проверяет стиль, читаемость, структуру и целостность связей между файлами.
- [mxj](https://github.com/clbanning/mxj) - Кодирование и декодирование XML как JSON или map[string]interface{}; извлечение значений по путям в точечной нотации и с подстановочными знаками. Заменяет пакеты x2j и j2x.
- [picoloom](https://github.com/alnah/picoloom) - Конвертер Markdown в PDF с CLI и API библиотеки Go.
- [toml](https://github.com/BurntSushi/toml) - Формат конфигурации TOML (кодировщик/декодер с рефлексией).

### Парсеры/кодировщики/декодеры

- [allot](https://github.com/sbstjn/allot) - Разбор текста с плейсхолдерами и подстановочными знаками для CLI-инструментов и ботов.
- [codetree](https://github.com/aerogo/codetree) - Разбирает код с отступами (python, pixy, scarlet и т. д.) и возвращает древовидную структуру.
- [commonregex](https://github.com/mingrammer/commonregex) - Коллекция распространённых регулярных выражений для Go.
- [did](https://github.com/ockam-network/did) - Парсер и средство строкового представления DID (децентрализованных идентификаторов) на Go.
- [doi](https://github.com/hscells/doi) - Парсер идентификаторов цифровых объектов (DOI) на Go.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Парсер и средство изменения файлов Editorconfig для Go.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - Высокопроизводительный модуль извлечения эффективных доменов верхнего уровня (eTLD).
- [go-nmea](https://github.com/adrianmo/go-nmea) - Библиотека разбора NMEA для языка Go.
- [go-querystring](https://github.com/google/go-querystring) - Библиотека Go для кодирования структур в параметры URL-запроса.
- [go-vcard](https://github.com/emersion/go-vcard) - Разбор и форматирование vCard.
- [godump](https://github.com/yassinebenaid/godump) - Простой красивый вывод любой переменной Go — альтернатива `fmt.Printf("%#v")` из Go.
- [godump (goforj)](https://github.com/goforj/godump) - Красивый вывод структур Go в виде дампов в стиле Laravel/Symfony с полной информацией о типах, цветным выводом в CLI, обнаружением циклов и доступом к приватным полям.
- [gofeed](https://github.com/mmcdole/gofeed) - Разбор лент RSS и Atom на Go.
- [gographviz](https://github.com/awalterschulze/gographviz) - Разбор языка Graphviz DOT.
- [gonameparts](https://github.com/polera/gonameparts) - Разбор человеческих имён на отдельные составные части.
- [ltsv](https://github.com/Wing924/ltsv) - Высокопроизводительное средство чтения [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) для Go.
- [normalize](https://github.com/avito-tech/normalize) - Санирование, нормализация и нечёткое сравнение текста.
- [parseargs-go](https://github.com/nproc/parseargs-go) - Парсер строковых аргументов, понимающий кавычки и обратные косые черты.
- [prattle](https://github.com/askeladdk/prattle) - Простое и эффективное сканирование и разбор грамматик LL(1).
- [sh](https://github.com/mvdan/sh) - Парсер и форматировщик shell-скриптов.
- [tokenizer](https://github.com/bzick/tokenizer) - Разбор любой строки, среза или бесконечного буфера на любые токены.
- [vdf](https://github.com/andygrunwald/vdf) - Лексер и парсер для формата данных Valve (Valve Data Format, известного как vdf), написанный на Go.
- [when](https://github.com/olebedev/when) - Парсер даты и времени на естественном английском и русском языках с подключаемыми правилами.
- [xj2go](https://github.com/stackerzzq/xj2go) - Преобразование XML или JSON в структуры Go.

### Регулярные выражения

- [coregex](https://github.com/coregx/coregex) - Продакшен-движок регулярных выражений с архитектурой крейта regex из Rust: несколько движков DFA/NFA, SIMD-префильтры, прозрачная замена стандартной библиотеки.
- [genex](https://github.com/alixaxel/genex) - Подсчёт и раскрытие регулярных выражений во все соответствующие им строки.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - Простое и лёгкое сопоставление с шаблонами с подстановочными знаками.
- [goregen](https://github.com/zach-klippenstein/goregen) - Библиотека для генерации случайных строк по регулярным выражениям.
- [regroup](https://github.com/oriser/regroup) - Сопоставление именованных групп регулярных выражений со структурой Go с помощью тегов структур и автоматического разбора.
- [rex](https://github.com/hedhyw/rex) - Построитель регулярных выражений.

### Санирование

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - Санитайзер HTML.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Фильтр нецензурной лексики для Go на основе санирования.

### Скраперы

- [colly](https://github.com/asciimoo/colly) - Быстрый и элегантный фреймворк скрапинга для гоферов.
- [dataflowkit](https://github.com/slotix/dataflowkit) - Фреймворк веб-скрапинга для превращения веб-сайтов в структурированные данные.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - Веб-краулер, преобразующий сайты документации в чистый Markdown и JSONL для загрузки в LLM (RAG, обучающие данные).
- [go-recipe](https://github.com/kkyr/go-recipe) - Пакет для извлечения рецептов с веб-сайтов.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Библиотека на языке Go для разбора карт сайтов (Sitemap).
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery привносит в язык Go синтаксис и набор возможностей, похожие на jQuery.
- [pagser](https://github.com/foolin/pagser) - Pagser — простая, расширяемая и настраиваемая библиотека для разбора и десериализации HTML-страниц в структуры на основе goquery и тегов структур для краулеров на Golang.
- [Tagify](https://github.com/zoomio/tagify) - Формирует набор тегов из заданного источника.
- [walker](https://github.com/cyucelen/walker) - Бесшовное получение постраничных данных из любого источника. Включает простой и высокопроизводительный скрапинг API.
- [xurls](https://github.com/mvdan/xurls) - Извлечение URL из текста.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Генератор подкастов на Golang, совместимый с iTunes и RSS 2.0

### Утилиты/разное

- [ahocorasick](https://github.com/coregx/ahocorasick) - Высокопроизводительное сопоставление строк с несколькими шаблонами по алгоритму Ахо — Корасик с компиляцией в DFA и SIMD-префильтром, пропускная способность до 7 ГБ/с (часть экосистемы [coregx](https://github.com/coregx)).
- [go-runewidth](https://github.com/mattn/go-runewidth) - Функции для получения фиксированной ширины символа или строки.
- [kace](https://github.com/codemodus/kace) - Распространённые преобразования регистра с учётом общепринятых аббревиатур.
- [lancet](https://github.com/duke-git/lancet) - Всеобъемлющая библиотека утилит для Go в стиле Lodash
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich — библиотека, склоняющая русские имена по заданным грамматическим падежам.
- [radix](https://github.com/yourbasic/radix) - Быстрый алгоритм сортировки строк.
- [TySug](https://github.com/Dynom/TySug) - Альтернативные варианты с учётом раскладок клавиатуры.
- [uniwidth](https://github.com/unilibs/uniwidth) - Высокопроизводительное вычисление ширины символов Unicode с оптимизацией SWAR, таблицами поиска O(1) и поддержкой эмодзи с ZWJ.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - Инструмент семантического grep, использующий векторные представления слов для поиска семантически похожих совпадений. Например, поиск по слову «death» найдёт «dead», «killing», «murder».

**[⬆ Наверх](#contents)**

## Сторонние API

_Библиотеки для доступа к сторонним API._

- [airtable](https://github.com/mehanizm/airtable) - Клиентская библиотека Go для [Airtable API](https://airtable.com/api).
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Клиентская библиотека Go для Twitter API 1.1.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - Неофициальный SDK на Golang для AppStore Connect API.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - Неофициальная реализация [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html) на Go.
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Официальный AWS SDK для языка программирования Go.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Клиент Go для Birdeye DeFi API с типизированными спотовыми ценами, свечами OHLCV, историческими данными и запасным механизмом для отправки сырых запросов.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - Высокоуровневая библиотека Go для записи данных в [Google BigQuery](https://cloud.google.com/bigquery) с высокой пропускной способностью.
- [brewerydb](https://github.com/naegelejd/brewerydb) - Библиотека Go для доступа к BreweryDB API.
- [cachet](https://github.com/andygrunwald/cachet) - Клиентская библиотека Go для [Cachet (системы страниц состояния с открытым исходным кодом)](https://cachethq.io/).
- [circleci](https://github.com/jszwedko/go-circleci) - Клиентская библиотека Go для взаимодействия с API CircleCI.
- [codeship-go](https://github.com/codeship/codeship-go) - Клиентская библиотека Go для взаимодействия с API v2 Codeship.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Клиент Go для Coinglass API v4 без зависимостей, с потоками WebSocket и типизированными эндпоинтами для фьючерсов, спота, опционов, ETF и индикаторов.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Клиентская библиотека Go для взаимодействия с API Coinpaprika.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - Клиентская библиотека Go для [The Colony](https://thecolony.cc) — публичной социальной сети, пользователями которой являются ИИ-агенты.
- [device-check-go](https://github.com/rinchsan/device-check-go) - Клиентская библиотека Go для взаимодействия с [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1.
- [discordgo](https://github.com/bwmarrin/discordgo) - Привязки Go для Discord Chat API.
- [disgo](https://github.com/switchupcb/disgo) - API-обёртка на Go для Discord API.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Неофициальный клиент API платёжного шлюза Dusupay для Go
- [ethrpc](https://github.com/onrik/ethrpc) - Привязки Go для Ethereum JSON RPC API.
- [facebook](https://github.com/huandu/facebook) - Библиотека Go с поддержкой Facebook Graph API.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Неофициальный клиент XML API платёжного шлюза Fasapay для Golang.
- [fcm](https://github.com/maddevsio/fcm) - Библиотека Go для Firebase Cloud Messaging.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - Go SDK для флагов функций [Featureflip](https://featureflip.io/) с локальным вычислением и потоковыми обновлениями.
- [gads](https://github.com/emiddleton/gads) - Неофициальный API Google Adwords.
- [gcm](https://github.com/Aorioli/gcm) - Библиотека Go для Google Cloud Messaging.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - Библиотека Go для доступа к API геокодирования и обратного геокодирования [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/) и [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim).
- [github](https://github.com/google/go-github) - Библиотека Go для доступа к GitHub REST API v3.
- [githubql](https://github.com/shurcooL/githubql) - Библиотека Go для доступа к GitHub GraphQL API v4.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - Библиотека Go для доступа к сервисам [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) (Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)
- [go-aws-news](https://github.com/circa10a/go-aws-news) - Приложение и библиотека Go для получения новостей о новинках AWS.
- [go-chronos](https://github.com/axelspringer/go-chronos) - Библиотека Go для взаимодействия с планировщиком заданий [Chronos](https://mesos.github.io/chronos/)
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - Клиентская библиотека Go для [Gerrit Code Review](https://www.gerritcodereview.com/).
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - Крошечный клиент Go для HackerNews API.
- [go-here](https://github.com/abdullahselek/go-here) - Клиентская библиотека Go для геолокационных API HERE.
- [go-hibp](https://github.com/wneessen/go-hibp) - Простая привязка Go к API «Have I Been Pwned».
- [go-imgur](https://github.com/koffeinsource/go-imgur) - Клиентская библиотека Go для [imgur](https://imgur.com)
- [go-jira](https://github.com/andygrunwald/go-jira) - Клиентская библиотека Go для [Atlassian JIRA](https://www.atlassian.com/software/jira)
- [go-lark](https://github.com/go-lark/lark) - Простой в использовании неофициальный SDK для открытых платформ [Feishu](https://open.feishu.cn/) и [Lark](https://open.larksuite.com/).
- [go-marathon](https://github.com/gambol99/go-marathon) - Библиотека Go для взаимодействия с PaaS Marathon от Mesosphere.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - Клиентская библиотека Go для доступа к [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2).
- [go-openai](https://github.com/sashabaranov/go-openai) - Библиотека API OpenAI ChatGPT, DALL·E и Whisper для Go.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - Клиентская библиотека Go для взаимодействия с API [OpenProject](https://docs.openproject.org/api/).
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - Модуль Go для работы с [коллекциями Postman](https://learning.getpostman.com/docs/postman/collections/creating-collections/) (совместим с Insomnia).
- [go-redoc](https://github.com/mvrilo/go-redoc) - Встраиваемый интерфейс документации OpenAPI/Swagger для Go на основе [ReDoc](https://redocly.com/).
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - Библиотека Go для [REST Countries API](https://countrylayer.com/).
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - Клиентская библиотека Go для взаимодействия с [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm).
- [go-sophos](https://github.com/esurdam/go-sophos) - Клиентская библиотека Go для [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) без зависимостей.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Библиотека Go, содержащая предварительно скомпилированный [Swagger UI](https://swagger.io/tools/swagger-ui/) для отдачи Swagger JSON.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Клиент API издательской платформы Telegraph.
- [go-trending](https://github.com/andygrunwald/go-trending) - Библиотека Go для доступа к [популярным репозиториям](https://github.com/trending) и [разработчикам](https://github.com/trending/developers) на GitHub.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - Клиентская библиотека Go для API [Unsplash.com](https://unsplash.com).
- [go-xkcd](https://github.com/nishanths/go-xkcd) - Клиент Go для API xkcd.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Клиентская библиотека Go для API Yapla v2.0.
- [goagi](https://github.com/staskobzar/goagi) - Библиотека Go для создания приложений agi/fastagi для АТС Asterisk.
- [goami2](https://github.com/staskobzar/goami2) - Библиотека AMI v2 для АТС Asterisk.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Библиотека Golang, предоставляющая распространённые и простые абстракции базы данных поверх Google Sheets.
- [gogtrends](https://github.com/groovili/gogtrends) - Неофициальный API Google Trends.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - Обёртка Golang для The Movie Database API v3.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics — библиотека Go для получения текстов песен с сайта Wikia.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Библиотека Go для API MalShare [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Клиентская библиотека Go для MusicBrainz WS2.
- [google](https://github.com/google/google-api-go-client) - Автоматически сгенерированные Google API для Go.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Простая обёртка для удобного получения отчётов Google Analytics.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Клиентская библиотека Go для Google Cloud API.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - Клиентская библиотека Go для [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/).
- [gopensky](https://github.com/navidys/gopensky) - Реализация клиента Go для API реального времени [OpenSKY Network](https://opensky-network.org/) (данные ADS-B и Mode S о воздушном пространстве).
- [gosip](https://github.com/koltyakov/gosip) - Клиентская библиотека для SharePoint.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm — библиотека Go, реализующая коммуникационный протокол, необходимый для написания на Go источников (spouts) и обработчиков (bolts) Storm, взаимодействующих с оболочками Storm.
- [hipchat](https://github.com/andybons/hipchat) - Этот проект реализует клиентскую библиотеку Golang для Hipchat API.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - Пакет Golang для взаимодействия с HipChat по XMPP.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - Клиент Go для API httpSMS.
- [igdb](https://github.com/Henry-Sarabia/igdb) - Клиент Go для [Internet Game Database API](https://api.igdb.com/).
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - Обёртка Go для API IP2Location.io [IP2Location.io](https://www.ip2location.io/).
- [jokeapi-go](https://github.com/icelain/jokeapi) - Клиент Go для [JokeAPI](https://sv443.net/jokeapi/v2/).
- [lark](https://github.com/chyroc/lark) - Go SDK для Open API [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/), поддерживающий ВСЕ Open API и обратные вызовы событий.
- [lastpass-go](https://github.com/ansd/lastpass-go) - Клиентская библиотека Go для API [LastPass](https://www.lastpass.com/).
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Клиент Go для API Lemon Squeezy.
- [libgoffi](https://github.com/clevabit/libgoffi) - Набор адаптеров-библиотек для нативной интеграции с [libffi](https://sourceware.org/libffi/)
- [libopenapi](https://github.com/pb33f/libopenapi) - Разбор, валидация и работа со спецификациями OpenAPI, Swagger, Overlays и Arazzo.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Клиент Go для Manus AI API v2 с автоматизацией задач, управлением файлами, вебхуками и типобезопасными моделями.
- [Medium](https://github.com/Medium/medium-sdk-go) - SDK на Golang для OAuth2 API Medium.
- [megos](https://github.com/andygrunwald/megos) - Клиентская библиотека для доступа к кластеру [Apache Mesos](https://mesos.apache.org/).
- [minio-go](https://github.com/minio/minio-go) - Библиотека Minio на Go для облачных хранилищ, совместимых с Amazon S3.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel — библиотека для отслеживания событий и отправки обновлений профилей Mixpanel в Mixpanel из ваших приложений на Go.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Клиент Go для Nansen AI API с аналитикой Smart Money, скринером токенов, профайлером и без зависимостей.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - Клиент Go для [NewsAPI](https://newsapi.org/).
- [openaigo](https://github.com/otiai10/openaigo) - Клиентская библиотека API OpenAI GPT3/GPT3.5 ChatGPT для Go.
- [patreon-go](https://github.com/mxpv/patreon-go) - Библиотека Go для API Patreon.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - Обёртка для платёжного API PayPal.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Go SDK для Rest API Playlyfe.
- [pushover](https://github.com/gregdel/pushover) - Обёртка Go для API Pushover.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - Библиотека Go для API [RAWG Video Games Database](https://rawg.io/)
- [shopify](https://github.com/rapito/go-shopify) - Библиотека Go для выполнения CRUD-запросов к API Shopify.
- [simples3](https://github.com/rhnvrm/simples3) - Простая библиотека для AWS S3 без излишеств, использующая REST с подписью V4, написанная на Go.
- [slack](https://github.com/slack-go/slack) - Slack API на Go.
- [smite](https://github.com/sergiotapia/smitego) - Пакет Go, оборачивающий доступ к API игры Smite.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - Клиентская библиотека Go и консольный клиент для SonarQube Web API.
- [spec](https://github.com/oaswrap/spec) - Лёгкий построитель OpenAPI 3.x с поддержкой статической генерации и популярных фреймворков, таких как chi, echo, gin, fiber, mux и других.
- [spotify](https://github.com/rapito/go-spotify) - Библиотека Go для доступа к Spotify WEB API.
- [steam](https://github.com/sostronk/go-steam) - Библиотека Go для взаимодействия с игровыми серверами Steam.
- [stripe](https://github.com/stripe/stripe-go) - Клиент Go для API Stripe.
- [swag](https://github.com/zc2638/swag) - Простая обёртка на Go без комментариев для создания API, совместимых со Swagger 2.0. Поддерживает большинство фреймворков маршрутизации, таких как встроенный, gin, chi, mux, echo, httprouter, fasthttp и другие.
- [textbelt](https://github.com/dietsche/textbelt) - Клиент Go для API текстовых сообщений textbelt.com.
- [threads-go](https://github.com/tirthpatell/threads-go) - Клиентская библиотека Go для Meta Threads API с OAuth 2.0, ограничением частоты запросов и типобезопасной обработкой ошибок.
- [Trello](https://github.com/adlio/trello) - Обёртка Go для API Trello.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - Обёртка Go для API TripAdvisor.
- [tumblr](https://github.com/mattcunningham/gumblr) - Обёртка Go для API Tumblr v2.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Обёртка Go и консольный клиент для API Uptime Robot v2.
- [vl-go](https://github.com/verifid/vl-go) - Клиентская библиотека Go для API уровня проверки личности VerifID.
- [webhooks](https://github.com/go-playground/webhooks) - Приёмник вебхуков для GitHub и Bitbucket.
- [wit-go](https://github.com/wit-ai/wit-go) - Клиент Go для HTTP API wit.ai.
- [ynab](https://github.com/brunomvsouza/ynab.go) - Обёртка Go для API YNAB.
- [zooz](https://github.com/gojuno/go-zooz) - Клиент Go для API Zooz.

**[⬆ Наверх](#contents)**

## Утилиты

_Утилиты и инструменты общего назначения, облегчающие жизнь._

- [abstract](https://github.com/maxbolgarin/abstract) - Абстракции и утилиты, избавляющие от шаблонного кода в бизнес-логике.
- [apm](https://github.com/topfreegames/apm) - Менеджер процессов для приложений Golang с HTTP API.
- [backscanner](https://github.com/icza/backscanner) - Сканер, похожий на bufio.Scanner, но читающий и возвращающий строки в обратном порядке, начиная с заданной позиции и двигаясь к началу.
- [bed](https://github.com/itchyny/bed) - Vim-подобный двоичный редактор, написанный на Go.
- [blank](https://github.com/Henry-Sarabia/blank) - Проверка наличия и удаление пробелов и пробельных символов из строк.
- [bleep](https://github.com/sinhashubham95/bleep) - Выполнение любого количества действий при получении любого набора сигналов ОС в Go.
- [boilr](https://github.com/tmrts/boilr) - Невероятно быстрый CLI-инструмент для создания проектов из шаблонов-заготовок.
- [boring](https://github.com/alebeck/boring) - Простой консольный менеджер SSH-туннелей.
- [changie](https://github.com/miniscruff/changie) - Автоматизированный инструмент для журналов изменений (changelog) для подготовки релизов с множеством параметров настройки.
- [chyle](https://github.com/antham/chyle) - Генератор журнала изменений на основе Git-репозитория с множеством вариантов настройки.
- [circuit](https://github.com/cep21/circuit) - Эффективная и полнофункциональная реализация шаблона «автоматический выключатель» (circuit breaker) на Go в стиле Hystrix.
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Автоматические выключатели (circuit breakers) на Go.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Кроссплатформенный пакет для работы с буфером обмена на Go.
- [clockwork](https://github.com/jonboulle/clockwork) - Простые поддельные часы для Golang.
- [cmd](https://github.com/SimonBaeumer/cmd) - Библиотека для выполнения команд оболочки в OS X, Windows и Linux.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - Кроссплатформенный инструмент для проверки файлов конфигурации.
- [contem](https://github.com/maxbolgarin/contem) - Прозрачная замена context.Context для корректного завершения работы приложений на Go.
- [cookie](https://github.com/syntaqx/cookie) - Пакет для разбора структуры cookie и вспомогательных функций.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - Универсальный буфер обмена для нескольких рабочих станций, использующий S3-подобный бэкенд для хранения.
- [countries](https://github.com/biter777/countries) - Полная реализация стандартов ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR и IANA ccTLD.
- [countries](https://github.com/pioz/countries) - Всё, что нужно для работы со странами в Go.
- [create-go-app](https://github.com/create-go-app/cli) - Мощный CLI для создания нового готового к продакшену проекта с бэкендом (Golang), фронтендом (JavaScript, TypeScript) и автоматизацией развёртывания (Ansible, Docker) одной командой.
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo — TUI-приложение, полностью написанное на Go, для мониторинга и отслеживания цен криптовалют в реальном времени!
- [ctop](https://github.com/bcicen/ctop) - [Top-подобный](https://ctop.sh) интерфейс (вроде htop) для метрик контейнеров.
- [ctxutil](https://github.com/posener/ctxutil) - Коллекция вспомогательных функций для контекстов.
- [cvt](https://github.com/shockerli/cvt) - Простое и безопасное преобразование любого значения в другой тип.
- [dbt](https://github.com/nikogura/dbt) - Фреймворк для запуска самообновляющихся подписанных бинарных файлов из центрального доверенного репозитория.
- [Death](https://github.com/vrecan/death) - Управление завершением работы приложения на Go с помощью сигналов.
- [debounce](https://github.com/floatdrop/debounce) - Подавитель дребезга (debouncer) без аллокаций, написанный на Go.
- [delve](https://github.com/derekparker/delve) - Отладчик Go.
- [dive](https://github.com/wagoodman/dive) - Инструмент для изучения каждого слоя образа Docker.
- [dlog](https://github.com/kirillDanshin/dlog) - Логгер, управляемый на этапе компиляции, позволяющий уменьшить размер релиза без удаления отладочных вызовов.
- [EaseProbe](https://github.com/megaease/easeprobe) - Простой, автономный и лёгкий инструмент — демон проверки работоспособности и состояния с поддержкой проб HTTP/TCP/SSH/Shell/Client/... и уведомлений в Slack/Discord/Telegram/SMS...
- [equalizer](https://github.com/reugn/equalizer) - Коллекция менеджеров квот и ограничителей частоты запросов для Go.
- [ergo](https://github.com/cristianoliveira/ergo) - Простое управление несколькими локальными сервисами, работающими на разных портах.
- [evaluator](https://github.com/nullne/evaluator) - Динамическое вычисление выражений на основе S-выражений. Просто и легко расширяется.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Шаблоны отказоустойчивости и устойчивости к сбоям для Go.
- [filetype](https://github.com/h2non/filetype) - Небольшой пакет для определения типа файла по сигнатуре магических чисел.
- [filler](https://github.com/yaronsumel/filler) - Небольшая утилита для заполнения структур с помощью тега «fill».
- [filter](https://github.com/gookit/filter) - Фильтрация, санирование и преобразование данных Go.
- [fzf](https://github.com/junegunn/fzf) - Консольный инструмент нечёткого поиска, написанный на Go.
- [generate](https://github.com/go-playground/generate) - Рекурсивно запускает go generate по указанному пути или переменной окружения с возможностью фильтрации по регулярному выражению.
- [gh-image](https://github.com/drogers0/gh-image) - Расширение gh CLI, загружающее изображения в задачи (issues), пул-реквесты и README на GitHub из командной строки и создающее URL user-attachments с учётом видимости репозитория.
- [ghokin](https://github.com/antham/ghokin) - Распараллеленный форматировщик для gherkin (cucumber, behat...) без внешних зависимостей.
- [git-time-metric](https://github.com/git-time-metric/gtm) - Простой, бесшовный и лёгкий учёт времени для Git.
- [git-tools](https://github.com/kazhuravlev/git-tools) - Инструмент для управления тегами Git.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - Управление Git-репозиториями в одном месте.
- [gitcs](https://github.com/knbr13/gitcs/) - Git Commits Visualizer — CLI-инструмент для визуализации ваших Git-коммитов на локальной машине.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Готовые к продакшену возможности для веб-фреймворков на Go.
- [go-astitodo](https://github.com/asticode/go-astitodo) - Разбор TODO в вашем коде на Go.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - Инструмент go:generate для оборачивания символов, экспортируемых плагинами Golang (только 1.8).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - Библиотеки bsdiff и bspatch и CLI-инструменты на чистом Go.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Минималистичный менеджер буфера обмена для Mac.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Обобщённые типизированные наборы констант с безопасным разбором строк — замена отсутствующего в Go типа enum.
- [go-convert](https://github.com/Eun/go-convert) - Пакет go-convert позволяет преобразовывать значение в другой тип.
- [go-countries](https://github.com/mikekonan/go-countries) - Лёгкий поиск по кодам ISO-3166.
- [go-dry](https://github.com/ungerik/go-dry) - Пакет DRY (don't repeat yourself — «не повторяйся») для Go.
- [go-events](https://github.com/deatil/go-events) - Пакет событий и подписки на события для Go, подобный функциям-хукам WordPress.
- [go-funk](https://github.com/thoas/go-funk) - Современная библиотека утилит для Go, предоставляющая вспомогательные функции (map, find, contains, filter, chunk, reverse, ...).
- [go-health](https://github.com/Talento90/go-health) - Пакет Health упрощает добавление проверок работоспособности в ваши сервисы.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - Библиотека Go для кодирования структур в поля заголовков.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - CLI для удаления неиспользуемых или предыдущих версий AWS Lambda.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock — библиотека блокировок, реализующая мьютекс чтения-записи и trylock для чтения-записи без голодания.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - Библиотека сопоставления с образцом, вдохновлённая ts-pattern.
- [go-pkg](https://github.com/chenquan/go-pkg) - Набор инструментов для Go.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Пакет Go для работы с Problem Details.
- [go-qr](https://github.com/piglig/go-qr) - Нативный, качественный и минималистичный генератор QR-кодов.
- [go-rate](https://github.com/beefsack/go-rate) - Ограничитель частоты по времени для Go.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - Библиотека безопасного преобразования числовых типов, предотвращающая переполнение и исчезновение порядка целых чисел (решает проблемы gosec G115 и CWE-190).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Генератор XML-карт сайтов (Sitemap), написанный на Go.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - Типобезопасные обобщённые вспомогательные функции для срезов, отображений, строк, ошибок, JSON, HTTP и контейнеров, организованные в виде небольших пакетов, которые можно внедрять независимо.
- [go-trigger](https://github.com/sadlil/go-trigger) - Глобальный генератор событий для Go: регистрируйте события с идентификатором и вызывайте их из любого места проекта.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper — пакет автоматического выключателя (circuit breaker) для Go, позволяющий размыкать цепи и управлять их состоянием.
- [go-type](https://github.com/mikekonan/go-types) - Библиотека, предоставляющая типы Go для хранения, валидации и передачи ISO-4217, ISO-3166 и других типов.
- [go-utils](https://github.com/Goldziher/go-utils) - Простые и производительные обобщённые утилиты для Go, вдохновлённые JavaScript и Python (map, filter, reduce и другие).
- [goback](https://github.com/carlescere/goback) - Простой пакет экспоненциальной задержки между попытками (backoff) для Go.
- [goctx](https://github.com/zerosnake0/goctx) - Высокопроизводительное получение значений из контекста.
- [godaemon](https://github.com/VividCortex/godaemon) - Утилита для написания демонов.
- [godoclive](https://github.com/syst3mctl/godoclive) - Генерирует интерактивную документацию API из HTTP-обработчиков Go с помощью статического анализа маршрутизаторов chi, gin и net/http.
- [godropbox](https://github.com/dropbox/godropbox) - Общие библиотеки от Dropbox для написания сервисов и приложений на Go.
- [gofn](https://github.com/tiendc/gofn) - Высокопроизводительные вспомогательные функции, написанные с использованием дженериков, для Go 1.18+.
- [golarm](https://github.com/msempere/golarm) - Срабатывание сигналов тревоги по системным событиям.
- [golog](https://github.com/mlimaloureiro/golog) - Простой и лёгкий CLI-инструмент для учёта времени, затраченного на задачи.
- [gopencils](https://github.com/bndr/gopencils) - Небольшой и простой пакет для удобного использования REST API.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - Небольшая библиотека Golang для генерации изображений-заполнителей.
- [goreadability](https://github.com/philipjkim/goreadability) - Извлечение сводки веб-страницы с помощью Facebook Open Graph и readability от arc90.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Доставка бинарных файлов Go максимально быстро и просто.
- [goreporter](https://github.com/wgliang/goreporter) - Инструмент на Golang, выполняющий статический анализ, модульное тестирование, ревью кода и формирующий отчёт о качестве кода.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - Клиентская библиотека SeaweedFS с почти полным набором возможностей.
- [gostrutils](https://github.com/ik5/gostrutils) - Коллекции функций обработки и преобразования строк.
- [gotenv](https://github.com/subosito/gotenv) - Загрузка переменных окружения из `.env` или любого `io.Reader` в Go.
- [goval](https://github.com/maja42/goval) - Вычисление произвольных выражений в Go.
- [graterm](https://github.com/skovtunenko/graterm) - Предоставляет примитивы для упорядоченного (последовательного/конкурентного) корректного завершения (GRAceful TERMination, оно же shutdown) в приложениях на Go.
- [grofer](https://github.com/pesos/grofer) - Инструмент мониторинга системы и ресурсов, написанный на Golang!
- [gubrak](https://github.com/novalagung/gubrak) - Библиотека утилит для Golang с синтаксическим сахаром. Как lodash, только для Golang.
- [handy](https://github.com/miguelpragier/handy) - Множество утилит и вспомогательных средств, таких как обработчики и форматировщики строк и валидаторы.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Простая, но мощная проверка готовности (readiness) для Kubernetes.
- [hostctl](https://github.com/guumaster/hostctl) - CLI-инструмент для управления /etc/hosts с помощью простых команд.
- [htcat](https://github.com/htcat/htcat) - Утилита параллельных и конвейерных HTTP-запросов GET.
- [hub](https://github.com/github/hub) - Оборачивает команды git дополнительной функциональностью для взаимодействия с GitHub из терминала.
- [immortal](https://github.com/immortal/immortal) - Кроссплатформенный (независимый от ОС) супервизор для \*nix.
- [jet](https://github.com/NicoNex/jet) - Just Edit Text: быстрый и мощный инструмент для поиска и замены содержимого и имён файлов с помощью регулярных выражений.
- [jsend](https://github.com/clevergo/jsend) - Реализация JSend, написанная на Go.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - Интерактивный просмотрщик журналов в формате JSON.
- [jump](https://github.com/gsamokovarov/jump) - Jump помогает быстрее перемещаться по файловой системе, изучая ваши привычки.
- [just](https://github.com/kazhuravlev/just) - Просто коллекция полезных функций для работы с обобщёнными структурами данных.
- [koazee](https://github.com/wesovilabs/koazee) - Библиотека, вдохновлённая ленивыми вычислениями и функциональным программированием, избавляющая от хлопот при работе с массивами.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - Обнаружение и инвентаризация сетевых устройств с постоянными метками, сканированием нескольких сетей и интеграцией с Tailscale.
- [lang](https://github.com/maxbolgarin/lang) - Обобщённые однострочники для работы с переменными, срезами и отображениями без шаблонного кода.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - Модуль Go, предоставляющий общие утилиты для разработки облачных (cloud native) REST API. Также содержит утилиты, специфичные для AWS.
- [limiters](https://github.com/mennanov/limiters) - Ограничители частоты запросов для распределённых приложений на Golang с настраиваемыми бэкендами и распределёнными блокировками.
- [lo](https://github.com/samber/lo) - Библиотека Go в стиле Lodash на основе дженериков Go 1.18+ (map, filter, contains, find...)
- [loncha](https://github.com/kazu/loncha) - Высокопроизводительные утилиты для работы со срезами.
- [lrserver](https://github.com/jaschaephraim/lrserver) - Сервер LiveReload для Go.
- [mani](https://github.com/alajmo/mani) - CLI-инструмент, помогающий управлять несколькими репозиториями.
- [mc](https://github.com/minio/mc) - Minio Client предоставляет минимальный набор инструментов для работы с облачными хранилищами, совместимыми с Amazon S3, и файловыми системами.
- [mergo](https://github.com/imdario/mergo) - Вспомогательное средство для слияния структур и отображений в Golang. Полезно для значений конфигурации по умолчанию, позволяет избежать запутанных конструкций if.
- [mimemagic](https://github.com/zRedShift/mimemagic) - Сверхпроизводительная библиотека/утилита определения MIME-типов на чистом Go.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - Пакет определения MIME-типов на основе магических чисел.
- [minify](https://github.com/tdewolff/minify) - Быстрые минификаторы для форматов файлов HTML, CSS, JS, XML, JSON и SVG.
- [minquery](https://github.com/icza/minquery) - Запросы MongoDB / mgo.v2 с поддержкой эффективной пагинации (курсоры для продолжения вывода документов с того места, где остановились).
- [moldova](https://github.com/StabbyCutyou/moldova) - Утилита для генерации случайных данных на основе входного шаблона.
- [mole](https://github.com/davrodpin/mole) - Консольное приложение для простого создания SSH-туннелей.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - Пагинация MongoDB для официального пакета mongodb/mongo-go-driver с поддержкой как обычных запросов, так и конвейеров агрегации.
- [mssqlx](https://github.com/linxGnu/mssqlx) - Клиентская библиотека баз данных и прокси для любых структур «ведущий-ведомый» и «ведущий-ведущий». Создана с прицелом на лёгкость и автоматическую балансировку.
- [multitick](https://github.com/VividCortex/multitick) - Мультиплексор для синхронизированных тикеров.
- [netbug](https://github.com/e-dard/netbug) - Простое удалённое профилирование ваших сервисов.
- [nfdump](https://github.com/chrispassas/nfdump) - Чтение файлов netflow формата nfdump.
- [nostromo](https://github.com/pokanop/nostromo) - CLI для создания мощных псевдонимов.
- [okrun](https://github.com/xta/okrun) - Каток для ошибок go run.
- [olaf](https://github.com/btnguyen2k/olaf) - Twitter Snowflake, реализованный на Go.
- [onecache](https://github.com/adelowo/onecache) - Библиотека кеширования с поддержкой нескольких бэкендов хранения (Redis, Memcached, файловая система и т. д.).
- [optional](https://github.com/kazhuravlev/optional) - Опциональные поля структур и переменные.
- [panicparse](https://github.com/maruel/panicparse) - Группирует похожие горутины и раскрашивает дамп стека.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - Библиотека сопоставления с образцом.
- [peco](https://github.com/peco/peco) - Упрощённый интерактивный инструмент фильтрации.
- [pgo](https://github.com/arthurkushman/pgo) - Удобные функции для PHP-сообщества.
- [pm](https://github.com/VividCortex/pm) - Менеджер процессов (т. е. горутин) с HTTP API.
- [pointer](https://github.com/xorcare/pointer) - Пакет pointer содержит вспомогательные процедуры, упрощающие создание опциональных полей базовых типов.
- [ptr](https://github.com/gotidy/ptr) - Пакет с функциями для упрощённого создания указателей из констант базовых типов.
- [rate](https://github.com/webriots/rate) - Высокопроизводительная библиотека ограничения частоты запросов со стратегиями token bucket и AIMD.
- [rclient](https://github.com/zpatrick/rclient) - Читаемый, гибкий и простой в использовании клиент для REST API.
- [release](https://github.com/tomodian/release) - CLI для журналов изменений в формате Keep-a-changelog.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Быстрые отчёты о совместимости API для проектов на Go.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - Управление мышью и клавиатурой со смартфона.
- [repeat](https://github.com/ssgreg/repeat) - Реализация на Go различных стратегий задержки между попытками (backoff), полезных для повторного выполнения операций и отправки сигналов активности.
- [request](https://github.com/mozillazg/request) - HTTP-запросы на Go для людей™.
- [rerun](https://github.com/ivpusic/rerun) - Перекомпиляция и перезапуск приложений на Go при изменении исходного кода.
- [rest-go](https://github.com/edermanoel94/rest-go) - Пакет, предоставляющий множество полезных методов для работы с REST API.
- [retro](https://github.com/goioc/retro) - Удобная библиотека повторных попыток при ошибках с широкой гибкостью (стратегии задержки, ограничения и т. д.).
- [retry](https://github.com/kamilsk/retry) - Самый продвинутый функциональный механизм для многократного выполнения действий до достижения успеха.
- [retry](https://github.com/percolate/retry) - Простой, но гибко настраиваемый пакет повторных попыток для Go.
- [retry](https://github.com/thedevsaddam/retry) - Простой и удобный пакет механизма повторных попыток для Go.
- [retry](https://github.com/shafreeck/retry) - Очень простая библиотека, гарантирующая выполнение вашей работы.
- [retry-go](https://github.com/avast/retry-go) - Простая библиотека механизма повторных попыток.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Повторные попытки в Golang — это просто и легко.
- [robustly](https://github.com/VividCortex/robustly) - Отказоустойчивый запуск функций с перехватом паник и перезапуском.
- [rospo](https://github.com/ferama/rospo) - Простые и надёжные SSH-туннели со встроенным SSH-сервером на Golang.
- [scan](https://github.com/blockloop/scan) - Сканирование `sql.Rows` из Golang непосредственно в структуры, срезы или примитивные типы.
- [scan](https://github.com/wroge/scan) - Сканирование строк SQL в любой тип с помощью дженериков.
- [scany](https://github.com/georgysavva/scany) - Библиотека для сканирования данных из базы данных в структуры Go и не только.
- [serve](https://github.com/syntaqx/serve) - Статический HTTP-сервер везде, где он нужен.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh — CLI, помогающий быстро и легко создавать сессии tmux и управлять ими с помощью zoxide.
- [set](https://github.com/nofeaturesonlybugs/set) - Производительное и гибкое отображение структур и нестрогое преобразование типов.
- [shutdown](https://github.com/ztrue/shutdown) - Хуки завершения работы приложения для обработки `os.Signal`.
- [silk](https://github.com/chrispassas/silk) - Чтение файлов netflow формата silk.
- [slice](https://github.com/psampaz/slice) - Типобезопасные функции для распространённых операций со срезами в Go.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - Преобразование срезов между примитивными типами.
- [slicer](https://github.com/leaanthony/slicer) - Упрощает работу со срезами.
- [sorty](https://github.com/jfcg/sorty) - Быстрая конкурентная/параллельная сортировка.
- [sqlex](https://github.com/go-sqlex/sqlex) - Прозрачная модернизация jmoiron/sqlx с исправленными ошибками SQL-лексера, автоматическим раскрытием выражений IN, подключаемыми хуками и едиными интерфейсами DB/Tx/Conn.
- [sqlx](https://github.com/jmoiron/sqlx) - Предоставляет набор расширений поверх превосходного встроенного пакета database/sql.
- [sqlz](https://github.com/rfberaldo/sqlz) - Расширение пакета database/sql, добавляющее именованные запросы, сканирование в структуры и пакетные операции.
- [sshman](https://github.com/shoobyban/sshman) - Менеджер SSH для файлов authorized_keys на нескольких удалённых серверах.
- [stacktower](https://github.com/stacktower-io/stacktower) - Визуализация графов зависимостей в виде физических башенных конструкций, вдохновлённая XKCD #2347.
- [statiks](https://github.com/janiltonmaciel/statiks) - Быстрый статический HTTP-файловый сервер без настройки.
- [Storm](https://github.com/asdine/storm) - Простой и мощный набор инструментов для BoltDB.
- [structs](https://github.com/PumpkinSeed/structs) - Реализует простые функции для работы со структурами.
- [throttle](https://github.com/yudppp/throttle) - Throttle — объект, выполняющий ровно одно действие за заданный промежуток времени.
- [tik](https://github.com/andy2046/tik) - Простой и удобный пакет «колеса времени» (timing wheel) для Go.
- [tome](https://github.com/cyruzin/tome) - Tome создан для пагинации простых RESTful API.
- [toolbox](https://github.com/viant/toolbox) - Утилиты для срезов, отображений, мультиотображений, структур, функций и преобразования данных. Маршрутизатор сервисов, вычислитель макросов, токенизатор.
- [UNIS](https://github.com/esemplastic/unis) - Common Architecture™ для строковых утилит в Go.
- [upterm](https://github.com/owenthereal/upterm) - Инструмент для разработчиков, позволяющий безопасно делиться сессиями терминала/tmux через веб. Идеально подходит для удалённого парного программирования, доступа к компьютерам за NAT/межсетевыми экранами, удалённой отладки и многого другого.
- [usql](https://github.com/knq/usql) - usql — универсальный интерфейс командной строки для SQL-баз данных.
- [util](https://github.com/shomali11/util) - Коллекция полезных вспомогательных функций (строки, конкурентность, преобразования, ...).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - Периодический запуск команды и предоставление последнего вывода STDOUT или подробной дельты в виде HTTP-эндпоинта.
- [wifiqr](https://github.com/reugn/wifiqr) - Генератор QR-кодов для Wi-Fi.
- [wuzz](https://github.com/asciimoo/wuzz) - Интерактивный CLI-инструмент для инспекции HTTP.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy предоставляет библиотеку двоичного сравнения (diff) и наложения патчей на Golang.
- [xpool](https://github.com/peczenyj/xpool) - Ещё один типобезопасный пул объектов для Golang с использованием дженериков.
- [yogo](https://github.com/antham/yogo) - Проверка почты yopmail из командной строки.

**[⬆ Наверх](#contents)**

## UUID

_Библиотеки для работы с UUID._

- [fastuuid](https://github.com/rekby/fastuuid) - Быстрая генерация UUIDv4 в виде строки или байтов.
- [goid](https://github.com/jakehl/goid) - Генерация и разбор UUID версии 4, соответствующих RFC4122.
- [gouid](https://github.com/twharmon/gouid) - Генерация криптографически стойких случайных строковых идентификаторов всего с одной аллокацией.
- [guid](https://github.com/sdrapkin/guid) - Быстрый криптографически безопасный генератор GUID для Go (примерно в 10 раз быстрее, чем `uuid`).
- [nanoid](https://github.com/aidarkhanov/nanoid) - Крошечный и эффективный генератор уникальных строковых идентификаторов на Go.
- [nanoid](https://github.com/sixafter/nanoid) - Эффективный криптографически стойкий генератор для быстрого конкурентного создания NanoID и UUID.
- [sno](https://github.com/muyo/sno) - Компактные, сортируемые и быстрые уникальные идентификаторы со встроенными метаданными.
- [ulid](https://github.com/oklog/ulid) - Реализация ULID (Universally Unique Lexicographically Sortable Identifier — универсально уникального лексикографически сортируемого идентификатора) на Go.
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - Безопасные и быстрые уникальные идентификаторы без лишних хлопот, с командами.
- [uuid](https://github.com/agext/uuid) - Генерация, кодирование и декодирование UUID версии 1 с быстрым или криптографически стойким случайным идентификатором узла.
- [uuid](https://github.com/gofrs/uuid) - Реализация универсально уникального идентификатора (UUID). Поддерживает как создание, так и разбор UUID. Активно поддерживаемый форк satori uuid.
- [uuid](https://github.com/google/uuid) - Пакет Go для UUID на основе RFC 4122 и DCE 1.1: Authentication and Security Services.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - Крошечная библиотека Go без зависимостей, проверяющая UUID на соответствие стандартному форматированию RFC 4122 и преобразующая UUIDv7() во временные метки UTC.
- [wuid](https://github.com/edwingeng/wuid) - Чрезвычайно быстрый генератор глобально уникальных чисел.
- [xid](https://github.com/rs/xid) - Xid — библиотека генерации глобально уникальных идентификаторов, готовая к безопасному использованию непосредственно в серверном коде.

**[⬆ Наверх](#contents)**

## Валидация

_Библиотеки для валидации._

- [checkdigit](https://github.com/osamingo/checkdigit) - Алгоритмы контрольных цифр (Луна, Верхуффа, Damm) и калькуляторы (ISBN, EAN, JAN, UPC и т. д.).
- [checker](https://github.com/cinar/checker) - Валидация входных данных без зависимостей и нормализация на месте с помощью тегов структур, 23 локали и генерация JSON Schema.
- [go-validator](https://github.com/tiendc/go-validator) - Библиотека валидации с использованием дженериков.
- [gody](https://github.com/guiferpa/gody) - :balloon: Лёгкий валидатор структур для Go.
- [govalid](https://github.com/twharmon/govalid) - Быстрая валидация структур на основе тегов.
- [govalidator](https://github.com/asaskevich/govalidator) - Валидаторы и санитайзеры для строк, чисел, срезов и структур.
- [govalidator](https://github.com/thedevsaddam/govalidator) - Валидация данных запросов в Golang с помощью простых правил. Во многом вдохновлено валидацией запросов в Laravel.
- [govy](https://github.com/nobl9/govy) - Строго типизированные правила валидации поверх функционального интерфейса на основе дженериков и без рефлексии, с особым вниманием к составлению понятных и информативных сообщений об ошибках.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid — лёгкая библиотека валидации, написанная на языке Go. Предоставляет интерфейс пользовательских валидаторов и набор распространённых функций валидации, помогающих разработчикам быстро реализовать проверку данных.
- [jio](https://github.com/faceair/jio) - jio — валидатор JSON-схем, похожий на [joi](https://github.com/hapijs/joi).
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - Поддерживает валидацию различных типов данных (структур, строк, отображений, срезов и т. д.) с настраиваемыми и расширяемыми правилами валидации, задаваемыми обычными конструкциями кода вместо тегов структур.
- [validate](https://github.com/gookit/validate) - Пакет Go для валидации и фильтрации данных. Поддерживает валидацию данных Map, Struct, Request (Form, JSON, url.Values, загруженные файлы) и другие возможности.
- [validate](https://github.com/gobuffalo/validate) - Этот пакет предоставляет фреймворк для написания валидаций для приложений на Go.
- [validator](https://github.com/go-playground/validator) - Валидация структур и полей Go, включая перекрёстную проверку полей и структур, а также углублённую проверку отображений, срезов и массивов.
- [Validator](https://github.com/go-the-way/validator) - Лёгкий валидатор моделей, написанный на Go. Содержит функции валидации (VF): Min, Max, MinLength, MaxLength, Length, Enum, Regex.
- [valix](https://github.com/marrow16/valix) Пакет Go для валидации запросов
- [vx](https://github.com/sevlyar/vx) - Валидация, собираемая из небольших компонуемых проверок, без зависимостей и с восстанавливаемым путём к ошибке.
- [Zog](https://github.com/Oudwins/zog) - Построитель схем, вдохновлённый [Zod](https://github.com/colinhacks/zod), для разбора и валидации значений во время выполнения.
  **[⬆ Наверх](#contents)**

## Системы контроля версий

_Библиотеки для контроля версий._

- [cli](https://gitlab.com/gitlab-org/cli) - Инструмент командной строки GitLab с открытым исходным кодом, переносящий крутые возможности GitLab в вашу командную строку.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go — библиотека Go, позволяющая выполнять действия у провайдеров систем контроля версий (VCS).
- [ggc](https://github.com/bmf-san/ggc) - CLI-инструмент для Git с традиционным интерфейсом командной строки и интерактивным интерфейсом инкрементального поиска, поддержкой рабочих процессов и настраиваемыми сочетаниями клавиш.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Локальный сервер MCP для операций с Git, использующий Ollama для экономии токенов и предотвращения утечки секретов.
- [git2go](https://github.com/libgit2/git2go) - Привязки Go для libgit2.
- [githooks](https://github.com/gabyx/githooks) - Хуки Git для отдельных репозиториев и общие хуки с контролем версий и автоматическим обновлением.
- [gitty](https://github.com/Omibranch/gitty) - CLI для Git/GitHub в одном бинарном файле, заменяющий последовательность add→commit→push одной командой; понятный человеку синтаксис, без внешних зависимостей.
- [go-git](https://github.com/go-git/go-git) - Легко расширяемая реализация Git на чистом Go.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - Работа с репозиториями систем контроля версий и их инспекция на Go.
- [hercules](https://github.com/src-d/hercules) - Получение глубокой аналитики из истории Git-репозитория.
- [hgo](https://github.com/beyang/hgo) - Hgo — коллекция пакетов Go, предоставляющих доступ на чтение к локальным репозиториям Mercurial.

**[⬆ Наверх](#contents)**

## Видео

_Библиотеки для обработки видео._

- [gmf](https://github.com/3d0c/gmf) - Привязки Go для библиотек FFmpeg av\*.
- [go-astiav](https://github.com/asticode/go-astiav) - Улучшенные C-привязки для ffmpeg на Go.
- [go-astisub](https://github.com/asticode/go-astisub) - Работа с субтитрами на Go (.srt, .stl, .ttml, .webvtt, .ssa/.ass, телетекст, .smi и т. д.).
- [go-astits](https://github.com/asticode/go-astits) - Нативный разбор и демультиплексирование транспортных потоков MPEG (.ts) на Go.
- [go-mpd](https://github.com/unki2aut/go-mpd) - Библиотека разбора и генерации файлов манифестов MPEG-DASH.
- [goav](https://github.com/giorgisio/goav) - Всеобъемлющие привязки Go для FFmpeg.
- [gortsplib](https://github.com/aler9/gortsplib) - Библиотека RTSP-сервера и клиента на чистом Go.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - Парсер и генератор плейлистов HLS (M3U8); поддерживается в актуальном состоянии в соответствии со спецификацией.
- [libvlc-go](https://github.com/adrg/libvlc-go) - Привязки Go для libvlc 2.X/3.X/4.X (используется медиаплеером VLC).
- [manifestor](https://github.com/alanzng/manifestor) - Библиотека без зависимостей для разбора, фильтрации, преобразования и построения манифестов HLS и DASH.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Предсказуемая, готовая к продакшену упаковка видео с адаптивным битрейтом (ABR) для Go (HLS и DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - Библиотека и инструменты для работы с файлами MP4, содержащими видео, аудио, субтитры или метаданные.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - Анализатор транспортных потоков MPEG-2, проверяющий соответствие временных меток PCR и выводящий дампы низкоуровневых структур TS, PSI и PES.
- [v4l](https://github.com/korandiz/v4l) - Библиотека захвата видео для Linux, написанная на Go.

**[⬆ Наверх](#contents)**

## Веб-фреймворки

_Full-stack веб-фреймворки._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - Библиотека HTTP-сервера «всё включено» с маршрутизатором, стеком middleware, хабами WebSocket, загрузкой файлов и валидацией OpenAPI.
- [Andurel](https://github.com/mbvlabs/andurel) - Full-stack веб-фреймворк на Go в духе Rails с генерацией каркаса, инструментами для работы с базами данных и фронтендами с серверной отрисовкой или на Inertia.
- [Atreugo](https://github.com/savsgio/atreugo) - Высокопроизводительный и расширяемый микро-веб-фреймворк без аллокаций памяти на горячих путях.
- [Barf](https://github.com/opensaucerer/barf) - По сути, замечательный фреймворк для создания веб-API на основе JSON. Совершенно ненавязчив и не изобретает велосипедов. Устроен так, что начать работу с ним легко и быстро, и при этом он достаточно гибок для более сложных сценариев.
- [Beego](https://github.com/beego/beego) - beego — высокопроизводительный веб-фреймворк с открытым исходным кодом для языка программирования Go.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti — фреймворк веб-приложений на Go с выразительным и элегантным синтаксисом. Confetti сочетает элегантность Laravel и простоту Go.
- [Don](https://github.com/abemedia/go-don) - Высокопроизводительный и простой в использовании фреймворк для API.
- [doors](https://github.com/doors-dev/doors) - Фреймворк с управлением на стороне сервера для создания реактивных веб-приложений с состоянием полностью на Go.
- [Echo](https://github.com/labstack/echo) - Высокопроизводительный минималистичный веб-фреймворк на Go.
- [Fastschema](https://github.com/fastschema/fastschema) - Гибкий веб-фреймворк на Go и headless CMS.
- [Fiber](https://github.com/gofiber/fiber) - Веб-фреймворк, вдохновлённый Express.js и построенный на Fasthttp.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - Фреймворк для подключаемых веб-проектов. Включает концепцию модулей и предлагает возможности для DI, областей конфигурации (Configareas), i18n, шаблонизаторов, GraphQL, наблюдаемости, безопасности, событий, маршрутизации и обратной маршрутизации и т. д.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - Предоставляет возможности электронной коммерции с использованием чистой архитектуры, такой как DDD и «порты и адаптеры», которые можно использовать для создания гибких приложений электронной коммерции.
- [Fuego](https://github.com/go-fuego/fuego) - Фреймворк для занятых Go-разработчиков! Веб-фреймворк, генерирующий спецификацию OpenAPI 3 из исходного кода.
- [Gin](https://github.com/gin-gonic/gin) - Gin — веб-фреймворк, написанный на Go! Имеет API в стиле martini с гораздо лучшей производительностью — до 40 раз быстрее. Если вам нужны производительность и хорошая продуктивность.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Инструмент автоматической привязки параметров для Gin, RPC-инструменты для Gin.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - Микросервисный фреймворк, ориентированный прежде всего на gRPC. Возможности включают поддержку ODM для Mongo, поддержку облачных ресурсов (AWS/Azure/Google) и текучее внедрение зависимостей, адаптированное для gRPC. Кроме того, напрямую поддерживается grpc-web, обеспечивающий доступ из браузера ко всем gRPC API без прокси.
- [Goa](https://github.com/goadesign/goa) - Goa предлагает целостный подход к разработке удалённых API и микросервисов на Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr — продуманный фреймворк для разработки микросервисов.
- [GoFrame](https://github.com/gogf/gf) - GoFrame — модульный, мощный, высокопроизводительный фреймворк корпоративного класса для разработки приложений на Golang.
- [Gone](https://github.com/gone-io/gone) - Лёгкий фреймворк внедрения зависимостей и веб-фреймворк, вдохновлённый Spring.
- [goravel](https://github.com/goravel/goravel) - Веб-фреймворк, вдохновлённый Laravel, с ORM, аутентификацией, очередями, планированием задач и другими встроенными возможностями.
- [Goshtoso](https://github.com/araihu/goshtoso) - Компоненты пользовательского интерфейса с серверной отрисовкой для приложений на Go, созданные с помощью templ, Tailwind CSS, HTMX и Alpine.js.
- [Goyave](https://github.com/go-goyave/goyave) - Полнофункциональный фреймворк для REST API, нацеленный на чистый код и быструю разработку, с мощной встроенной функциональностью.
- [Hertz](https://github.com/cloudwego/hertz) - Высокопроизводительный и легко расширяемый HTTP-фреймворк на Go, помогающий разработчикам создавать микросервисы.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot — высокопроизводительный фреймворк веб-приложений с поддержкой автоконфигурации и внедрения зависимостей.
- [httpsuite](https://github.com/rluders/httpsuite) - Разбор HTTP-запросов и ответы с описанием проблем по RFC 9457 для Go, с ядром только на стандартной библиотеке и опциональной валидацией.
- [Huma](https://github.com/danielgtaylor/huma/) - Фреймворк для современных REST/GraphQL API со встроенной поддержкой OpenAPI 3, генерируемой документацией и CLI.
- [iWF](https://github.com/indeedeng/iwf) - iWF — универсальная платформа для разработки длительных бизнес-процессов. Предлагает удобную абстракцию для использования баз данных, ElasticSearch, очередей сообщений, надёжных таймеров и многого другого с чистым, простым и удобным интерфейсом.
- [Lit](https://github.com/jvcoutinho/lit) - Высокопроизводительный декларативный веб-фреймворк для Golang, нацеленный на простоту и удобство работы.
- [Microservice](https://github.com/claygod/microservice) - Фреймворк для создания микросервисов, написанный на Golang.
- [NotNet](https://github.com/nottechdm/notnet) - Лёгкий фреймворк Go для создания быстрых и эргономичных RESTful API с middleware и гибкой маршрутизацией.
- [patron](https://github.com/beatlabs/patron) - Patron — микросервисный фреймворк, следующий лучшим облачным практикам, с упором на продуктивность.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux — мощный веб-фреймворк на Go, использующий регулярные выражения для сопоставления и обработки HTTP-запросов. Предлагает такие возможности, как обработка CORS, структурированное логирование, извлечение параметров URL, middleware и ограничение конкурентности.
- [Revel](https://github.com/revel/revel) - Высокопродуктивный веб-фреймворк для языка Go.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Библиотека начальной загрузки для быстрого и простого создания корпоративных микросервисов на Go с Gin и gRPC.
- [Ronykit](https://github.com/clubpay/ronykit) - Очень производительный веб-фреймворк с подключаемой архитектурой.
- [rux](https://github.com/gookit/rux) - Простой и быстрый веб-фреймворк для создания HTTP-приложений на Golang.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Неофициальный порт shadcn/ui для Go и templ: доступные компоненты интерфейса с CLI и реестром.
- [togo](https://github.com/togo-framework/togo) - Full-stack фреймворк, поставляющий бэкенд на Go и фронтенд на React в виде одного бинарного файла; CLI уровня artisan из Laravel.
- [uAdmin](https://github.com/uadmin/uadmin) - Полнофункциональный веб-фреймворк для Golang, вдохновлённый Django.
- [WebGo](https://github.com/naughtygopher/webgo) - Микрофреймворк для создания веб-приложений с цепочками обработчиков, middleware и внедрением контекста. С HTTP-обработчиками, совместимыми со стандартной библиотекой (т. е. `http.HandlerFunc`)..
- [Xun](https://github.com/yaitoo/xun) - Веб-фреймворк, построенный на встроенном в Go пакете html/template и маршрутизаторе пакета net/http. Разработан лёгким, быстрым и простым в использовании и при этом предоставляет простой и интуитивный API для создания веб-приложений с продвинутыми возможностями, такими как middleware, маршрутизация и отрисовка шаблонов.
- [Yokai](https://github.com/ankorstore/yokai) - Простой, модульный и наблюдаемый фреймворк Go для бэкенд-приложений.

**[⬆ Наверх](#contents)**

### Промежуточное ПО (middleware)

#### Собственно middleware

- [client-timing](https://github.com/posener/client-timing) - HTTP-клиент для заголовка Server-Timing.
- [CORS](https://github.com/rs/cors) - Простое добавление возможностей CORS в ваш API.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Middleware для фреймворка Echo с логированием и метриками.
- [formjson](https://github.com/rs/formjson) - Прозрачная обработка JSON-ввода как стандартной отправки формы методом POST.
- [go-fault](https://github.com/github/go-fault) - Middleware внедрения сбоев для Go.
- [Limiter](https://github.com/ulule/limiter) - Предельно простое middleware ограничения частоты запросов для Go.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Middleware на Go для монетизации API с оплатой за каждый запрос через Lightning Network (Bitcoin).
- [mid](https://github.com/bobg/mid) - Различные возможности HTTP-middleware: идиоматичный возврат ошибок из обработчиков; приём и отправка данных в JSON; трассировка запросов и многое другое.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Middleware для фреймворка Gin с логированием, метриками, аутентификацией, трассировкой и т. д.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - Middleware для gRPC с логированием, метриками, аутентификацией, трассировкой и т. д.
- [Tollbooth](https://github.com/didip/tollbooth) - Обработчик HTTP-запросов с ограничением частоты.
- [XFF](https://github.com/sebest/xff) - Обработка заголовка `X-Forwarded-For` и родственных ему.

#### Библиотеки для создания HTTP-middleware

- [alice](https://github.com/justinas/alice) - Безболезненное построение цепочек middleware для Go.
- [catena](https://github.com/codemodus/catena) - Конкатенация обёрток http.Handler (тот же API, что и у «chain»).
- [chain](https://github.com/codemodus/chain) - Построение цепочек обёрток обработчиков с данными в области видимости («middleware» на основе net/context).
- [gores](https://github.com/alioygur/gores) - Пакет Go для обработки ответов в HTML, JSON, XML и т. д. Полезен для RESTful API.
- [interpose](https://github.com/carbocation/interpose) - Минималистичное middleware для net/http в Golang.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - Добавление перехватчиков в `http.Client` для дампа, формирования, трассировки и т. п. запросов и ответов.
- [muxchain](https://github.com/stephens2424/muxchain) - Лёгкое middleware для net/http.
- [negroni](https://github.com/urfave/negroni) - Идиоматичное HTTP-middleware для Golang.
- [render](https://github.com/unrolled/render) - Пакет Go для простой отрисовки ответов в виде JSON, XML и HTML-шаблонов.
- [renderer](https://github.com/thedevsaddam/renderer) - Простой, лёгкий и быстрый пакет отрисовки ответов (JSON, JSONP, XML, YAML, HTML, файлы) для Go.
- [stats](https://github.com/thoas/stats) - Middleware на Go, сохраняющее различную информацию о вашем веб-приложении.

**[⬆ Наверх](#contents)**

### Маршрутизаторы

- [alien](https://github.com/gernest/alien) - Лёгкий и быстрый HTTP-маршрутизатор из открытого космоса.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - Простой HTTP-маршрутизатор на Go.
- [Bone](https://github.com/go-zoo/bone) - Молниеносно быстрый HTTP-мультиплексор.
- [Bxog](https://github.com/claygod/Bxog) - Простой и быстрый HTTP-маршрутизатор для Go. Работает с маршрутами разной сложности, длины и вложенности. И умеет создавать URL из полученных параметров.
- [chi](https://github.com/go-chi/chi) - Небольшой, быстрый и выразительный HTTP-маршрутизатор, построенный на net/context.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - Высокопроизводительный маршрутизатор, форк `httprouter`. Первый маршрутизатор, подходящий для `fasthttp`.
- [FastRouter](https://github.com/razonyang/fastrouter) - Быстрый и гибкий HTTP-маршрутизатор, написанный на Go.
- [Fox](https://github.com/fox-toolkit/fox) - Высокопроизводительный HTTP-маршрутизатор для создания обратных прокси и API-шлюзов с полноценной поддержкой изменения маршрутов во время выполнения.
- [fursy](https://github.com/coregx/fursy) - HTTP-маршрутизатор с типобезопасными обобщёнными обработчиками, автоматической генерацией OpenAPI 3.1 из кода и ответами об ошибках по RFC 9457.
- [goblin](https://github.com/bmf-san/goblin) - HTTP-маршрутизатор на Golang на основе префиксного дерева (trie).
- [gocraft/web](https://github.com/gocraft/web) - Пакет мультиплексора (mux) и middleware на Go.
- [Goji](https://github.com/goji/goji) - Goji — минималистичный и гибкий мультиплексор HTTP-запросов с поддержкой `net/context`.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router — лёгкий, но мощный HTTP-маршрутизатор для языка программирования Go.
- [goroute](https://github.com/goroute/route) - Простой, но мощный мультиплексор HTTP-запросов.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter — серверный/API-микрофреймворк, маршрутизатор и мультиплексор HTTP-запросов (mux), предоставляющий маршрутизатор запросов с middleware и поддержкой `net/context`.
- [gowww/router](https://github.com/gowww/router) - Молниеносно быстрый HTTP-маршрутизатор, полностью совместимый с интерфейсом net/http.Handler.
- [httprouter](https://github.com/julienschmidt/httprouter) - Высокопроизводительный маршрутизатор. Используйте его со стандартными HTTP-обработчиками, чтобы получить очень высокопроизводительный веб-фреймворк.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Высокоскоростной гибкий HTTP-маршрутизатор для Go на основе дерева. Вдохновлён httprouter.
- [lars](https://github.com/go-playground/lars) - Лёгкий, быстрый и расширяемый HTTP-маршрутизатор для Go без аллокаций, используемый для создания настраиваемых фреймворков.
- [mux](https://github.com/gorilla/mux) - Мощный маршрутизатор и диспетчер URL для Golang.
- [nchi](https://github.com/muir/nchi) - Маршрутизатор в стиле chi, построенный на httprouter, с обёртками middleware на основе внедрения зависимостей
- [ngamux](https://github.com/ngamux/ngamux) - Простой HTTP-маршрутизатор для Go.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - Чрезвычайно быстрый HTTP-маршрутизатор для Go (golang) с поддержкой сопоставления маршрутов по регулярным выражениям. Поставляется с полной поддержкой создания RESTful API.
- [pure](https://github.com/go-playground/pure) - Лёгкий HTTP-маршрутизатор, придерживающийся стандартной реализации «net/http».
- [Siesta](https://github.com/VividCortex/siesta) - Компонуемый фреймворк для написания middleware и обработчиков.
- [vestigo](https://github.com/husobee/vestigo) - Производительный, автономный, соответствующий HTTP маршрутизатор URL для веб-приложений на Go.
- [violetear](https://github.com/nbari/violetear) - HTTP-маршрутизатор на Go.
- [xmux](https://github.com/rs/xmux) - Высокопроизводительный мультиплексор на основе `httprouter` с поддержкой `net/context`.
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Простой и быстрый HTTP-маршрутизатор для Go.

**[⬆ Наверх](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - Библиотека для работы с DOM.
- [Extism Go SDK](https://github.com/extism/go-sdk) - Универсальный межъязыковой фреймворк WebAssembly для создания систем плагинов и полиглотных приложений.
- [go-canvas](https://github.com/markfarnan/go-canvas) - Библиотека для использования HTML5 Canvas, в которой вся отрисовка выполняется в коде на Go.
- [tinygo](https://github.com/tinygo-org/tinygo) - Компилятор Go для малых устройств: микроконтроллеров, WebAssembly и инструментов командной строки. Основан на LLVM.
- [vert](https://github.com/norunners/vert) - Взаимодействие между значениями Go и JS.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - Запуск тестов Go WASM в браузере.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Привязки Go для среды выполнения WebAssembly Wasmtime (поддержка WASI, JIT/AOT, безопасное и быстрое встраивание).
- [webapi](https://github.com/gowebapi/webapi) - Привязки для DOM и HTML, сгенерированные из WebIDL.

**[⬆ Наверх](#contents)**

## Серверы вебхуков

- [HookRun](https://github.com/bluvenr/hookrun) - Лёгкий движок действий по вебхукам (один бинарный файл около 3 МБ, без зависимостей), выполняющий команды и скрипты по правилам из YAML с аутентификацией по токену/HMAC/IP и горячей перезагрузкой.
- [webhook](https://github.com/adnanh/webhook) - Инструмент, позволяющий пользователю создавать HTTP-эндпоинты (хуки), выполняющие команды на сервере.
- [webhooked](https://github.com/42Atomys/webhooked) - Приёмник вебхуков на стероидах: обрабатывать, защищать, форматировать и сохранять полезную нагрузку вебхуков ещё никогда не было так просто.
- [WebhookX](https://github.com/webhookx-io/webhookx) - Шлюз вебхуков для получения, обработки и надёжной доставки сообщений.

**[⬆ Наверх](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Привязки Go для Direct3D9.
- [go-ole](https://github.com/go-ole/go-ole) - Реализация Win32 OLE для Golang.
- [gosddl](https://github.com/MonaxGT/gosddl) - Конвертер строк SDDL в удобный для пользователя JSON. SDDL состоит из четырёх частей: владелец, основная группа, DACL, SACL.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Привязка Golang для Windows Update Agent API с использованием go-ole.

**[⬆ Наверх](#contents)**

## Фреймворки рабочих процессов

_Библиотеки для создания рабочих процессов._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Фреймворк для написания рабочих процессов и действий, работающих поверх движка оркестрации Cadence, созданного Uber.
- [Dagu](https://github.com/dagu-go/dagu) - Исполнитель рабочих процессов без кода (no-code). Выполняет графы DAG, описанные в простом формате YAML.
- [durable-go](https://github.com/agenticenv/durable-go) - Движок надёжного выполнения (durable execution) для однопроцессных приложений на Go и ИИ-агентов, без зависимостей.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - Самостоятельно размещаемый движок выполнения для создания, связывания и автоматизации рабочих процессов без кода.
- [go-dag](https://github.com/rhosocial/go-dag) - Фреймворк, разработанный на Go, управляющий выполнением рабочих процессов, описанных ориентированными ациклическими графами.
- [go-taskflow](https://github.com/noneback/go-taskflow) - Универсальный фреймворк программирования с параллелизмом задач в стиле taskflow со встроенными визуализатором и профилировщиком.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Движок надёжных рабочих процессов со встроенной веб-консолью на базе Postgres, MySQL или SQLite.
- [workflow](https://github.com/luno/workflow) - Фреймворк событийно-ориентированных рабочих процессов, не зависящий от технологического стека.

**[⬆ Наверх](#contents)**

## XML

_Библиотеки и инструменты для работы с XML._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - Простой консольный инструмент сравнения XML, генерирующий различия для папок, файлов и тегов.
- [xml2map](https://github.com/sbabiv/xml2map) - Конвертер XML в MAP, написанный на Golang.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery — пакет XPath для Golang для запросов к XML.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - API процедурной генерации XML на основе модуля xmlwriter из libxml2.
- [xpath](https://github.com/antchfx/xpath) - Пакет XPath для Go.
- [zek](https://github.com/miku/zek) - Генерация структуры Go из XML.

## Нулевое доверие (Zero Trust)

_Библиотеки и инструменты для реализации архитектур нулевого доверия._

- [Cosign](https://github.com/sigstore/cosign) - Подпись, проверка и хранение контейнеров в реестре OCI.
- [in-toto](https://github.com/in-toto/in-toto-golang) - Реализация in-toto на Go (предоставляет фреймворк для защиты целостности цепочки поставок программного обеспечения) по эталонной реализации на Python.
- [OpenZiti](https://github.com/openziti/ziti) - Полноценная оверлейная сеть нулевого доверия с открытым исходным кодом. Включает многочисленные SDK для многих языков, например [golang](https://github.com/openziti/sdk-golang), позволяющие встраивать принципы нулевого доверия непосредственно в приложения. В [OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) есть множество примеров для вдохновения, включая [SSH-клиент с нулевым доверием — zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Использует JWT-аутентификацию SPIFFE с Hashicorp Vault для аутентификации без секретов.
- [Spire](https://github.com/spiffe/spire) - SPIRE (SPIFFE Runtime Environment) — набор API для установления доверия между программными системами на самых разных платформах размещения.

## Анализ кода

_Инструменты анализа исходного кода, также известные как инструменты статического тестирования безопасности приложений (SAST)._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Проверяет недавние изменения в проекте на Go на наличие изменений, нарушающих обратную совместимость.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Статический анализатор кода для Go и других языков: метрики сложности, связанности, связности и сопровождаемости с отчётами в HTML, JSON, Markdown и SARIF.
- [asty](https://github.com/asty-org/asty) - Преобразует AST Golang в JSON и JSON в AST.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket — инструмент, помогающий находить в пакетах Go функции, у которых нет прямых модульных тестов.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Определяет, какие из ваших прямых зависимостей Go с GitHub уязвимы для атаки ChainJacking.
- [Chronos](https://github.com/amit-davidson/Chronos) - Статическое обнаружение состояний гонки
- [deadmono](https://github.com/arxeiss/deadmono) - Обёртка над deadcode для обнаружения мёртвого кода в монорепозитории Go.
- [dupl](https://github.com/mibk/dupl) - Инструмент обнаружения клонов кода.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck — программа для проверки непроверенных ошибок в программах на Go.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext обнаруживает вложенные контексты в циклах или функциональных литералах.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle — инструмент проверки стиля, подобный checkstyle для Java. Вдохновлён checkstyle для Java и golint. Стиль основан на некоторых пунктах из Go Code Review Comments.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch создан для проверки правил чистой архитектуры, таких как правило зависимостей (The Dependency Rule), и взаимодействия между пакетами в ваших проектах на Go.
- [go-critic](https://github.com/go-critic/go-critic) - Линтер исходного кода с проверками, которые пока не реализованы в других линтерах.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Простой способ найти устаревшие зависимости ваших проектов на Go.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Веб-визуализатор AST для Golang.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Инструмент для автоматического исправления (добавления, удаления) импортов Go.
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - SDK для API iFood.
- [golangci-lint](https://github.com/golangci/golangci-lint) – Быстрый запускатель линтеров Go. Запускает линтеры параллельно, использует кеширование, поддерживает конфигурацию в `yaml`, интегрируется со всеми основными IDE и включает десятки линтеров.
- [golines](https://github.com/segmentio/golines) - Форматировщик, автоматически сокращающий длинные строки в коде на Go.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - Линтер Markdown со встроенной проверкой HTTP-ссылок, один бинарный файл, не требует Node.js.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - Библиотека и CLI, генерирующие текстовую диаграмму классов PlantUML с информацией о структурах и интерфейсах и связях между ними.
- [goreturns](https://github.com/sqs/goreturns) - Добавляет операторы return с нулевыми значениями в соответствии с возвращаемыми типами функции.
- [gostatus](https://github.com/shurcooL/gostatus) - Инструмент командной строки, показывающий состояние репозиториев, содержащих пакеты Go.
- [lint](https://github.com/surullabs/lint) - Запуск линтеров в рамках go test.
- [php-parser](https://github.com/z7zmey/php-parser) - Парсер PHP, написанный на Go.
- [revive](https://github.com/mgechev/revive) – Примерно в 6 раз более быстрая, строгая, настраиваемая, расширяемая и красивая прозрачная замена `golint`.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck — это `go vet` на стероидах, применяющий массу проверок статического анализа, к которым вы, возможно, привыкли по таким инструментам, как ReSharper для C#.
- [structalign](https://github.com/peczenyj/structalign) - Показывает, как можно переупорядочить поля структуры, чтобы использовать меньше памяти, выводя diff вместо перезаписи файлов.
- [stto](https://github.com/mainak55512/stto) - Лёгкий сверхбыстрый счётчик строк кода, написанный на чистом Go.
- [testifylint](https://github.com/Antonboom/testifylint) – Линтер, проверяющий использование [github.com/stretchr/testify](https://github.com/stretchr/testify).
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLI и пакет Go для выявления TODO в комментариях кода (на любом языке) и применения `git blame` для определения автора.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - Статический анализатор кода, связывающий комментарии TODO в коде с задачами в вашем трекере задач.
- [unconvert](https://github.com/mdempsky/unconvert) - Удаление ненужных преобразований типов из исходного кода Go.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Линтер, обнаруживающий возможность использовать переменные и константы из стандартной библиотеки Go.
- [vacuum](https://github.com/daveshanley/vacuum) - Сверхбыстрый лёгкий линтер OpenAPI и инструмент проверки качества.
- [validate](https://github.com/mccoyst/validate) - Автоматическая валидация полей структур с помощью тегов.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - Линтер, проверяющий, что ошибки из внешних пакетов оборачиваются.

**[⬆ Наверх](#contents)**

## Плагины для редакторов

_Плагины для текстовых редакторов и IDE._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - Этот плагин добавляет возможности [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) в Vim/Neovim.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Расширение Visual Studio Code для показа определения в окне вывода и генерации go doc.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - Плагин Go для IDE JetBrains.
- [go-mode](https://github.com/dominikh/go-mode.el) - Режим Go для GNU/Emacs.
- [gocode](https://github.com/nsf/gocode) - Демон автодополнения для языка программирования Go.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - Инструмент форматирования импортов.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - Это расширение добавляет в VS Code поддержку профилирования бенчмарков для языка Go.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - Коллекция плагинов Golang для текстового редактора SublimeText 3, обеспечивающая автодополнение кода и другие возможности, как в IDE.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - Плагин Vim для генерации тестов Go на основе сигнатуры функции или метода.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - Плагин Vim для подсветки синтаксических ошибок при сохранении.
- [vim-go](https://github.com/fatih/vim-go) - Плагин для разработки на Go в Vim.
- [vscode-go](https://github.com/golang/vscode-go) - Расширение для Visual Studio Code (VS Code), обеспечивающее поддержку языка Go.
- [Watch](https://github.com/eaburns/Watch) - Запускает команду в окне acme при изменении файлов.

**[⬆ Наверх](#contents)**

## Инструменты go generate

- [envdoc](https://github.com/g4s8/envdoc) - Генерация документации для переменных окружения из исходных файлов Go.
- [generic](https://github.com/usk81/generic) - Гибкий тип данных для Go.
- [gocontracts](https://github.com/Parquery/gocontracts) - Привносит в Go проектирование по контракту, синхронизируя код с документацией.
- [godal](https://github.com/mafulong/godal) - Генерация ORM-моделей Golang по указанному файлу SQL DDL, которые можно использовать с gorm.
- [gonerics](https://github.com/bouk/gonerics) - Идиоматичные дженерики в Go.
- [gotests](https://github.com/cweill/gotests) - Генерация тестов Go из вашего исходного кода.
- [gounit](https://github.com/hexdigest/gounit) - Генерация тестов Go с использованием собственных шаблонов.
- [hasgo](https://github.com/DylanMeeus/hasgo) - Генерация функций в духе Haskell для ваших срезов.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - Генерация типизированных констант Go из расширения x-constants спецификации OpenAPI.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Функциональные опции, описанные в статье Дэйва Чейни «Functional options for friendly APIs».
- [re2dfa](https://gitlab.com/opennota/re2dfa) - Преобразование регулярных выражений в конечные автоматы с выводом исходного кода на Go.
- [sqlgen](https://github.com/anqiansong/sqlgen) - Генерация кода для gorm, xorm, sqlx, bun, sql из SQL-файла или DSN.
- [TOML-to-Go](https://xuri.me/toml-to-go) - Мгновенное преобразование TOML в тип Go прямо в браузере.
- [xgen](https://github.com/xuri/xgen) - Парсер XSD (XML Schema Definition) и генератор кода на Go/C/Java/Rust/TypeScript.

**[⬆ Наверх](#contents)**

## Инструменты Go

- [decouple](https://github.com/bobg/decouple) - Поиск «чрезмерно конкретизированных» параметров функций, которые можно обобщить с помощью интерфейсных типов.
- [docs](https://github.com/go-oas/docs) - Автоматическая генерация документации RESTful API для проектов на Go в соответствии со стандартом Open API Specification.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Визуализация графа вызовов вашей программы на Go в формате dot.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - Анализ и визуализация размера зависимостей в скомпилированных бинарных файлах Golang, дающие представление об их влиянии на итоговую сборку.
- [go-swagger](https://github.com/go-swagger/go-swagger) - Реализация Swagger 2.0 для Go. Swagger — простое, но мощное представление вашего RESTful API.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Интерактивная среда для создания и тестирования шаблонов Go.
- [godbg](https://github.com/tylerwince/godbg) - Реализация макроса `dbg!` из Rust для быстрой и простой отладки во время разработки.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - Поиск всех структур в кодовой базе, реализующих заданный интерфейс Go.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - Инструмент Go, выполняющий и кеширующий бинарные файлы, указанные в файлах go.mod.
- [gotemplate.io](https://gotemplate.io/) - Онлайн-инструмент для предпросмотра шаблонов `text/template` в реальном времени.
- [gotestdox](https://github.com/bitfield/gotestdox) - Отображение результатов тестов Go в виде читаемых предложений.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks автоматически ставит звёзды вашим зависимостям с GitHub из go.mod, выражая таким образом немного любви их мейнтейнерам.
- [gotutor](https://github.com/ahmedakef/gotutor) - Онлайн-отладчик и визуализатор Go.
- [govisual](https://github.com/doganarif/govisual) - Визуализатор и отладчик HTTP-запросов на чистом Go без настройки для локальной веб-разработки на Go.
- [igo](https://github.com/rocketlaunchr/igo) - Транспилятор из igo в go (новые возможности для языка Go!)
- [lensm](https://github.com/loov/lensm) - Просмотрщик ассемблерного и исходного кода Go.
- [modver](https://github.com/bobg/modver) - Сравнение двух версий модуля Go для определения необходимого изменения номера версии (мажорного, минорного или патч-уровня) согласно правилам [semver](https://semver.org/).
- [MoniGO](https://github.com/iyashjayesh/monigo) - Библиотека мониторинга производительности для приложений на Go. Даёт представление о производительности приложения в реальном времени! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - Эффективная навигация по файлам Go с помощью браузерного расширения OctoLinker для GitHub.
- [richgo](https://github.com/kyoh86/richgo) - Обогащение вывода `go test` текстовым оформлением.
- [roumon](https://github.com/becheran/roumon) - Мониторинг текущего состояния всех активных горутин через интерфейс командной строки.
- [rts](https://github.com/galeone/rts) - RTS: response to struct. Генерирует структуры Go из ответов сервера.
- [textra](https://github.com/ravsii/textra) - Извлечение имён, типов и тегов полей структур Go для фильтрации и экспорта.
- [typex](https://github.com/dtgorski/typex) - Исследование типов Go и их транзитивных зависимостей с возможностью экспорта результатов в виде объявлений объектов-значений (или типов) TypeScript.

**[⬆ Наверх](#contents)**

## Программные пакеты

_Программное обеспечение, написанное на Go._

**[⬆ Наверх](#contents)**

### Инструменты DevOps

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate — инструмент, превращающий длинные строки в более короткие с настраиваемыми разделителями, например для встраивания имён веток в идентификаторы стеков развёртывания.
- [alaz](https://github.com/ddosify/alaz) - Простой мониторинг Kubernetes на основе eBPF с низкими накладными расходами.
- [aptly](https://github.com/aptly-dev/aptly) - aptly — инструмент управления репозиториями Debian.
- [aurora](https://github.com/xuri/aurora) - Кроссплатформенная веб-консоль для сервера очередей Beanstalkd.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - Диагностика затрат на AWS, обнаружение простаивающих ресурсов и оптимизация облачных расходов прямо из терминала 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Небольшой бинарный файл, загружающий переменные окружения Amazon (AWS) для профиля.
- [Balerter](https://github.com/balerter/balerter) - Самостоятельно размещаемый менеджер оповещений на основе скриптов.
- [Blast](https://github.com/dave/blast) - Простой инструмент для нагрузочного тестирования API и пакетных заданий.
- [bombardier](https://github.com/codesenberg/bombardier) - Быстрый кроссплатформенный инструмент бенчмаркинга HTTP.
- [cassowary](https://github.com/rogerwelin/cassowary) - Современный кроссплатформенный инструмент нагрузочного тестирования HTTP, написанный на Go.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - Инструмент повышения отказоустойчивости, помогающий приложениям переживать случайные отказы экземпляров.
- [colima](https://github.com/abiosoft/colima) - Среды выполнения контейнеров на macOS (и Linux) с минимальной настройкой.
- [Ddosify](https://github.com/ddosify/ddosify) - Высокопроизводительный инструмент нагрузочного тестирования, написанный на Golang.
- [decompose](https://github.com/s0rg/decompose) - Инструмент для генерации и обработки графов связей контейнеров Docker.
- [Den](https://github.com/us/den) - Самостоятельно размещаемая среда выполнения песочниц для ИИ-агентов. Альтернатива E2B с открытым исходным кодом.
- [DepCharge](https://github.com/centerorbit/depcharge) - Помогает оркестрировать выполнение команд для множества зависимостей в крупных проектах.
- [dish](https://github.com/thevxn/dish) - Лёгкий сервис мониторинга с удалённой настройкой.
- [Docker](https://www.docker.com/) - Открытая платформа распределённых приложений для разработчиков и системных администраторов.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Docker-образ для сборки бинарных файлов Go для Windows с помощью набора инструментов MinGW.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Резервное копирование томов Docker локально или в любое хранилище, совместимое с S3, WebDAV, Azure Blob Storage, Dropbox или SSH.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - Библиотека Go и исполняемый файл, создающие корректные Dockerfile из различных источников входных данных.
- [docklite](https://github.com/benzjeremy/docklite) - Лёгкая альтернатива Portainer для управления контейнерами Docker с метриками в реальном времени через SSE.
- [dogo](https://github.com/liudng/dogo) - Отслеживание изменений в исходных файлах с автоматической компиляцией и запуском (перезапуском).
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - Запуск последующих заданий Jenkins с помощью бинарного файла, Docker или Drone CI.
- [drone-scp](https://github.com/appleboy/drone-scp) - Копирование файлов и артефактов по SSH с помощью бинарного файла, Docker или Drone CI.
- [Dropship](https://github.com/chrismckenzie/dropship) - Инструмент для развёртывания кода через CDN.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Пакет Golang для простого удалённого выполнения через SSH и загрузки по SCP через `ProxyCommand`.
- [fac](https://github.com/mkchoi212/fac) - Интерфейс командной строки для разрешения конфликтов слияния в Git.
- [Flannel](https://github.com/flannel-io/flannel) - Flannel — сетевая фабрика для контейнеров, разработанная для Kubernetes.
- [Fleet device management](https://github.com/fleetdm/fleet) - Лёгкая программируемая телеметрия для серверов и рабочих станций.
- [gaia](https://github.com/gaia-pipeline/gaia) - Создавайте мощные конвейеры на любом языке программирования.
- [ghorg](https://github.com/gabrie30/ghorg) - Быстрое клонирование всех репозиториев организации или пользователя в один каталог — поддерживает GitHub, GitLab, Gitea и Bitbucket.
- [Gitea](https://github.com/go-gitea/gitea) - Форк Gogs, полностью развиваемый сообществом.
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - Перенос всех ваших репозиториев, задач, вех и меток из GitHub в ваш экземпляр Gitea.
- [gitl](https://github.com/akomyagin/gitl) - ИИ-ревью диапазонов коммитов Git с оценкой риска (низкий/средний/высокий), генерацией журнала изменений и дайджестом активности по нескольким репозиториям. GitHub Action в комплекте.
- [go-furnace](https://github.com/go-furnace/go-furnace) - Решение для хостинга, написанное на Go. Легко развёртывайте своё приложение в AWS, GCP или DigitalOcean.
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - Простой способ создавать самообновляющиеся приложения на Go — поддерживает GitHub и GitLab.
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Позвольте своим приложениям на Go обновляться самостоятельно.
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew позволяет легко переключаться между несколькими версиями Go.
- [gobrew](https://github.com/kevincobain2000/gobrew) - Менеджер версий Go. Очень простой инструмент для установки версий Go и управления ими. Установка Go без root. Gobrew не требует rehash оболочки.
- [godbg](https://github.com/sirnewton01/godbg) - Веб-интерфейс для gdb.
- [Gogs](https://gogs.io/) - Самостоятельно размещаемый Git-сервис на языке программирования Go.
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - Лёгкий API-шлюз и обратный прокси с декларативной конфигурацией, надёжным middleware и поддержкой REST, GraphQL, TCP, UDP и gRPC.
- [gonative](https://github.com/inconshreveable/gonative) - Инструмент, создающий сборку Go, способную выполнять кросс-компиляцию для всех платформ, при этом используя версии пакетов стандартной библиотеки с поддержкой Cgo.
- [govvv](https://github.com/ahmetalpbalkan/govvv) - Обёртка над «go build» для простого добавления информации о версии в бинарные файлы Go.
- [grapes](https://github.com/yaronsumel/grapes) - Лёгкий инструмент для удобного распределения команд по SSH.
- [GVM](https://github.com/moovweb/gvm) - GVM предоставляет интерфейс для управления версиями Go.
- [Hey](https://github.com/rakyll/hey) - Hey — крошечная программа, создающая нагрузку на веб-приложение.
- [httpref](https://github.com/dnnrly/httpref) - httpref — удобный консольный справочник по HTTP-методам, кодам состояния, заголовкам, а также портам TCP и UDP.
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI позволяет легко управлять вашим Jenkins.
- [k0s](https://github.com/k0sproject/k0s) - Дистрибутив Kubernetes без лишних сложностей.
- [k3d](https://github.com/k3d-io/k3d) - Небольшой помощник для запуска k3s от CNCF в Docker.
- [k3s](https://github.com/k3s-io/k3s) - Лёгкий Kubernetes.
- [k6](https://github.com/grafana/k6) - Современный инструмент нагрузочного тестирования на Go и JavaScript.
- [k9s](https://github.com/derailed/k9s) - CLI для Kubernetes для стильного управления вашими кластерами.
- [kala](https://github.com/ajvb/kala) - Упрощённый, современный и производительный планировщик заданий.
- [kcli](https://github.com/cswank/kcli) - Инструмент командной строки для инспекции топиков, партиций и сообщений Kafka.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker — локальные кластеры для тестирования Kubernetes.
- [ko](https://github.com/google/ko) - Инструмент командной строки для сборки и развёртывания приложений на Go в Kubernetes
- [kool](https://github.com/kool-dev/kool) - Инструмент командной строки для простого управления окружениями Docker.
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks — плоскость управления с открытым исходным кодом, которая запускает базы данных, очереди сообщений и другую инфраструктуру данных в K8s и управляет ими.
- [kubefwd](https://github.com/txn2/kubefwd) - Массовое перенаправление портов Kubernetes с уникальными IP-адресами для каждого сервиса для локальной разработки.
- [kubernetes](https://github.com/kubernetes/kubernetes) - Менеджер кластеров контейнеров от Google.
- [kubeshark](https://github.com/kubeshark/kubeshark) - Анализатор API-трафика для Kubernetes, вдохновлённый Wireshark и специально созданный для Kubernetes.
- [KubeVela](https://github.com/kubevela/kubevela) - Доставка облачных (cloud native) приложений.
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN предлагает облачную (cloud native) среду разработки, бесшовно подключающуюся к сети вашего кластера Kubernetes.
- [KusionStack](https://github.com/KusionStack/kusion) - Единый программируемый технологический стек конфигурации для доставки современных приложений с подходом «платформа как код» и «инфраструктура как код».
- [kwatch](https://github.com/abahmed/kwatch) - Мгновенный мониторинг и обнаружение сбоев в вашем кластере Kubernetes (K8s).
- [lstags](https://github.com/ivanilves/lstags) - Инструмент и API для синхронизации образов Docker между различными реестрами.
- [lwc](https://github.com/timdp/lwc) - Версия UNIX-команды wc с обновлением в реальном времени.
- [manssh](https://github.com/xwjdsh/manssh) - manssh — инструмент командной строки для простого управления конфигурацией псевдонимов SSH.
- [Mantil](https://github.com/mantil-io/mantil) - Специфичный для Go фреймворк для создания бессерверных приложений в AWS, позволяющий сосредоточиться на чистом коде Go, пока Mantil заботится об инфраструктуре.
- [minikube](https://github.com/kubernetes/minikube) - Локальный запуск Kubernetes.
- [Moby](https://github.com/moby/moby) - Совместный проект экосистемы контейнеров для сборки систем на основе контейнеров.
- [Mora](https://github.com/emicklei/mora) - REST-сервер для доступа к документам и метаданным MongoDB.
- [mq-studio](https://github.com/amigoer/mq-studio) - Кроссплатформенный настольный клиент для управления и мониторинга кластеров RocketMQ, RabbitMQ, Kafka, Pulsar, Redis Stream, MQTT, NATS и ActiveMQ.
- [ostent](https://github.com/ostrost/ostent) - Собирает и отображает системные метрики, а также при необходимости передаёт их в Graphite и/или InfluxDB.
- [Packer](https://github.com/mitchellh/packer) - Packer — инструмент для создания идентичных образов машин для нескольких платформ из единой исходной конфигурации.
- [Pewpew](https://github.com/bengadbois/pewpew) - Гибкий консольный инструмент стресс-тестирования HTTP.
- [pingtower](https://github.com/crleonard/pingtower) - Лёгкий самостоятельно размещаемый монитор доступности веб-сайтов и API.
- [PipeCD](https://github.com/pipe-cd/pipecd) - Платформа непрерывной доставки в стиле GitOps, обеспечивающая единообразный опыт развёртывания и эксплуатации для любых приложений.
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo — крошечное веб-приложение на Go, демонстрирующее лучшие практики запуска микросервисов в Kubernetes. Podinfo используется проектами CNCF, такими как Flux и Flagger, для сквозного тестирования и мастер-классов.
- [podman-tui](https://github.com/containers/podman-tui) - Терминальный интерфейс для управления Podman.
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium — прокси доступа с учётом идентификации.
- [Rodent](https://github.com/alouche/rodent) - Rodent помогает управлять версиями Go, проектами и отслеживать зависимости.
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - Прокси S3 с методами GET, PUT и DELETE и аутентификацией (OpenID Connect и Basic Auth).
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Небольшая утилита/библиотека, оптимизированная для высокоскоростной передачи больших объектов в Amazon S3 и из него.
- [s5cmd](https://github.com/peak/s5cmd) - Молниеносно быстрый инструмент выполнения операций над S3 и локальной файловой системой.
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - Управление серверами bare metal из командной строки (так же просто, как с Docker).
- [script](https://github.com/bitfield/script) - Упрощает написание shell-подобных скриптов на Go для задач DevOps и системного администрирования.
- [sg](https://github.com/ChristopherRabotin/sg) - Бенчмаркинг набора HTTP-эндпоинтов (как ab) с возможностью использовать код ответа и данные между вызовами для целенаправленной нагрузки на сервер на основе его предыдущего ответа.
- [sigma](https://github.com/go-sigma/sigma) - Нативный для OCI реестр образов контейнеров с поддержкой нативных артефактов OCI, сканирования артефактов, сборки образов и т. д.
- [skm](https://github.com/TimothyYe/skm) - SKM — простой и мощный менеджер SSH-ключей, помогающий легко управлять несколькими SSH-ключами!
- [sortie](https://github.com/sortie-ai/sortie) - Превращение задач из трекера в сессии автономных агентов программирования.
- [StatusOK](https://github.com/sanathp/statusok) - Мониторинг вашего веб-сайта и REST API. Получайте уведомления через Slack и электронную почту, когда сервер недоступен или время ответа превышает ожидаемое.
- [tau](https://github.com/taubyte/tau) - Простое создание платформ облачных вычислений с такими возможностями, как бессерверные функции на WebAssembly, хостинг фронтенда, CI/CD, объектное хранилище, база данных «ключ/значение» и обмен сообщениями pub-sub.
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Плагин провайдера Terraform, динамически настраивающийся во время выполнения на основе документа OpenAPI (ранее известного как файл swagger), содержащего определения предоставляемых API.
- [tf-profile](https://github.com/datarootsio/tf-profile) - Профилировщик запусков Terraform. Генерирует общую статистику, статистику на уровне ресурсов или визуализации.
- [tickstem/uptime](https://github.com/tickstem/uptime) - Клиент Go для мониторинга доступности по HTTP с оповещениями об истечении срока действия SSL-сертификатов и настраиваемыми проверками ответов.
- [tlm](https://github.com/yusufcanb/tlm) - Локальный копилот для командной строки на базе CodeLLaMa
- [traefik](https://github.com/containous/traefik) - Обратный прокси и балансировщик нагрузки с поддержкой нескольких бэкендов.
- [trubka](https://github.com/xitonix/trubka) - CLI-инструмент для управления кластерами Apache Kafka и устранения неполадок в них с возможностью универсальной публикации и потребления событий в формате protocol buffers и обычного текста в/из Kafka.
- [Updatecli](https://github.com/updatecli/updatecli) - Универсальный декларативный движок политик обновления.
- [uTask](https://github.com/ovh/utask) - Движок автоматизации, моделирующий и выполняющий бизнес-процессы, объявленные в YAML.
- [Vegeta](https://github.com/tsenart/vegeta) - Инструмент и библиотека нагрузочного тестирования HTTP. It's over 9000!
- [wait-for](https://github.com/dnnrly/wait-for) - Ожидание наступления какого-либо события (из командной строки) перед продолжением. Простая оркестрация сервисов Docker и не только.
- [Wide](https://wide.b3log.org/login) - Веб-IDE для команд, использующих Golang.
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Консольный инструмент для удалённого выполнения команд на машинах с Windows.
- [zerohand](https://github.com/nilpoona/zerohand) - Простой и эффективный инструмент нагрузочного тестирования веб-API.

**[⬆ Наверх](#contents)**

### Другое программное обеспечение

- [Backrest](https://github.com/garethgeorge/backrest) - Веб-интерфейс и оркестратор для резервного копирования restic.
- [Better Go Playground](https://goplay.tools) - Песочница Go с подсветкой синтаксиса, автодополнением кода и другими возможностями.
- [blocky](https://github.com/0xERR0R/blocky) - Быстрый и лёгкий DNS-прокси в качестве блокировщика рекламы для локальной сети с множеством возможностей.
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - TUI-менеджер Bluetooth для Linux.
- [borg](https://github.com/crufter/borg) - Терминальная поисковая система для фрагментов кода bash.
- [boxed](https://github.com/tejo/boxed) - Блоговый движок на базе Dropbox.
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar — кроссплатформенная альтернатива Postman, созданная на Go, призванная помочь разработчикам тестировать свои API-эндпоинты. Поддерживает протоколы HTTP и gRPC.
- [Cherry](https://github.com/rafael-santiago/cherry) - Крошечный сервер веб-чата на Go.
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - Самостоятельно размещаемая публичная карта радиационного фона для импорта, анализа и визуализации треков измерений.
- [Circuit](https://github.com/gocircuit/circuit) - Circuit — программируемая платформа как услуга (PaaS) и/или инфраструктура как услуга (IaaS) для управления, обнаружения, синхронизации и оркестрации сервисов и хостов, составляющих облачные приложения.
- [claude-grep](https://github.com/evoleinik/claude-grep) - Поиск по истории сессий Claude Code с помощью регулярных выражений и семантического (векторного) поиска.
- [Comcast](https://github.com/tylertreat/Comcast) - Симуляция плохих сетевых соединений.
- [confd](https://github.com/kelseyhightower/confd) - Управление локальными файлами конфигурации приложений с помощью шаблонов и данных из etcd или consul.
- [crawley](https://github.com/s0rg/crawley) - Веб-скрапер/краулер для командной строки.
- [croc](https://github.com/schollz/croc) - Простая и безопасная отправка файлов или папок с одного компьютера на другой.
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Лёгкий инструмент очистки программных кешей для Windows и Linux.
- [dispositio](https://github.com/tsraveling/dispositio) - Терминальный инструмент для планирования крупных проектов в простом Markdown.
- [Documize](https://github.com/documize/community) - Современное вики-программное обеспечение, интегрирующее данные из SaaS-инструментов.
- [dp](https://github.com/scryinfo/dp) - С помощью SDK для обмена данными с блокчейном разработчики получают простой доступ к разработке DApp.
- [drive](https://github.com/odeke-em/drive) - Клиент Google Drive для командной строки.
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - Кроссплатформенный инструмент сетевого и облачного резервного копирования, основанный на идее дедупликации без блокировок.
- [fjira](https://github.com/mk-5/fjira) - Терминальное приложение для Atlassian Jira на основе нечёткого поиска
- [Gebug](https://github.com/moshebe/gebug) - Инструмент, делающий отладку контейнеризованных в Docker приложений на Go очень простой благодаря бесшовному включению отладчика и горячей перезагрузки.
- [gfile](https://github.com/Antonito/gfile) - Безопасная передача файлов между двумя компьютерами без каких-либо третьих сторон через WebRTC.
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - Приложение, отображающее обновления пакетов Go в вашем GOPATH.
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - Торрент-клиент с потоковым воспроизведением видео.
- [goblin](https://goblin.run) - Облачный сборщик для CLI, написанных на языке Go
- [GoBoy](https://github.com/Humpheh/goboy) - Эмулятор Nintendo Game Boy Color, написанный на Go.
- [gocc](https://github.com/goccmack/gocc) - Gocc — набор инструментов для создания компиляторов для Go, написанный на Go.
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Расширение Chrome для сайтов Go Doc, показывающее описание функции во всплывающей подсказке в списке функций.
- [Gokapi](https://github.com/Forceu/gokapi) - Лёгкий сервер для обмена файлами, срок действия которых истекает после заданного числа загрузок или дней. Похож на Firefox Send, но без публичной загрузки.
- [GoLand](https://jetbrains.com/go) - Полнофункциональная кроссплатформенная IDE для Go.
- [GoNB](https://github.com/janpfeifer/gonb) - Интерактивное программирование на Go в блокнотах Jupyter (также работает в VSCode, Binder и Google Colab).
- [GooseForum](https://github.com/leancodebox/GooseForum) - Самостоятельно размещаемая платформа форумов, созданная на Go, Vue и Tailwind CSS.
- [Gor](https://github.com/buger/gor) - Инструмент репликации HTTP-трафика для воспроизведения трафика из продакшена в среды stage/dev в реальном времени.
- [Guora](https://github.com/meloalright/guora) - Самостоятельно размещаемое веб-приложение в стиле Quora, написанное на Go.
- [GURL](https://github.com/matveynator/gurl) - Когда CURL говорит, что ваша SSL-библиотека слишком старая, используйте GURL. Один файл. Никаких зависимостей от SSL.
- [hoofli](https://github.com/dnnrly/hoofli) - Генерация диаграмм PlantUML на основе сетевой инспекции в Chrome или Firefox.
- [hotswap](https://github.com/edwingeng/hotswap) - Полноценное решение для перезагрузки кода на Go без перезапуска сервера, прерывания или блокировки текущих процедур.
- [hugo](https://gohugo.io/) - Быстрый и современный движок статических веб-сайтов.
- [ide](https://github.com/thestrukture/ide) - IDE, доступная из браузера. Разработана для Go на Go.
- [joincap](https://github.com/assafmo/joincap) - Утилита командной строки для объединения нескольких pcap-файлов.
- [JuiceFS](https://github.com/juicedata/juicefs) - Распределённая файловая система POSIX, построенная поверх Redis и AWS S3.
- [Juju](https://jujucharms.com/) - Независимое от облака развёртывание и оркестрация сервисов — поддерживает EC2, Azure, OpenStack, MAAS и другие.
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - Одноранговая файловая система по требованию, монтирующая удалённую папку и скрывающая задержку канала за счёт упреждающего чтения, со сквозным шифрованием на гибридной схеме X25519 и ML-KEM-1024.
- [Layli](https://layli.app) - Рисование красивых диаграмм раскладки в виде кода.
- [Leaps](https://github.com/jeffail/leaps) - Сервис парного программирования на основе операционных преобразований.
- [lgo](https://github.com/yunabe/lgo) - Интерактивное программирование на Go в Jupyter. Поддерживает автодополнение кода, инспекцию кода и 100% совместимость с Go.
- [LightCMS](https://github.com/jonradoff/lightcms) - Самостоятельно размещаемая система управления контентом с генерацией статических страниц, управлением доступом на основе ролей и сервером MCP для управления контентом с помощью агентов.
- [limetext](https://limetext.github.io) - Lime Text — мощный и элегантный текстовый редактор, разрабатываемый преимущественно на Go и призванный стать свободным преемником Sublime Text с открытым исходным кодом.
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE — простая кроссплатформенная IDE для Go с открытым исходным кодом.
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - TUI для очистки кешей, журналов и временных файлов macOS с предварительным просмотром.
- [mdv](https://github.com/Allra-Fintech/mdv) - CLI-инструмент, отображающий файлы Markdown в браузере с живой перезагрузкой, GFM, подсветкой синтаксиса, диаграммами Mermaid и экспортом в PDF.
- [mockingjay](https://github.com/quii/mockingjay-server) - Поддельные HTTP-серверы и контракты, управляемые потребителями, из одного файла конфигурации. Также можно заставить сервер случайным образом вести себя некорректно для более реалистичных тестов производительности.
- [myLG](https://github.com/mehrdadrad/mylg) - Инструмент сетевой диагностики командной строки, написанный на Go.
- [naclpipe](https://github.com/unix4fun/naclpipe) - Простой инструмент криптографического канала на основе NaCL EC25519, написанный на Go.
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay перерождается для новой эры.
- [nes](https://github.com/fogleman/nes) - Эмулятор Nintendo Entertainment System (NES), написанный на Go.
- [onWatch](https://github.com/onllm-dev/onWatch) - Локальный мониторинг квот ИИ-API разных провайдеров с ведением истории, оповещениями и веб-панелью, чтобы избежать неожиданных ограничений и перерасхода бюджета.
- [Orbit](https://github.com/gulien/orbit) - Простой инструмент для выполнения команд и генерации файлов из шаблонов.
- [peg](https://github.com/pointlander/peg) - Peg (Parsing Expression Grammar, грамматика, разбирающая выражения) — реализация генератора парсеров Packrat.
- [Plakar](https://github.com/PlakarKorp/plakar) - Зашифрованный, дедуплицированный, проверяемый и масштабируемый движок резервного копирования без привязки к поставщику.
- [Plik](https://github.com/root-gg/plik) - Plik — система временной загрузки файлов (наподобие WeTransfer) на Go.
- [portal](https://github.com/SpatiumPortae/portal) - Portal — быстрая и простая утилита командной строки для передачи файлов с одного компьютера на другой.
- [restic](https://github.com/restic/restic) - Программа резервного копирования с дедупликацией.
- [sake](https://github.com/alajmo/sake) - sake — исполнитель команд для локальных и удалённых хостов.
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code — очень быстрый и точный счётчик кода с вычислением сложности и оценками COCOMO.
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - CLI для оценки расписаний по 14 пунктам DCMA для выгрузок MS Project в Excel/CSV.
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - Быстрая, простая и масштабируемая распределённая файловая система с поиском на диске за O(1).
- [shell2http](https://github.com/msoap/shell2http) - Выполнение команд оболочки через HTTP-сервер (для прототипирования или удалённого управления).
- [Snitch](https://github.com/lucasgomide/snitch) - Простой способ уведомить вашу команду и множество инструментов, когда кто-то развернул приложение через Tsuru.
- [sonic](https://github.com/go-sonic/sonic) - Sonic — блоговая платформа на Go. Простая и мощная.
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Настольная заставка для Spotify с цифровыми OLED-часами, визуализатором звука на canvas и управлением через MPRIS.
- [Stack Up](https://github.com/pressly/sup) - Stack Up — очень простой инструмент развёртывания, только Unix — что-то вроде «make» для сети серверов.
- [stew](https://github.com/marwanhawari/stew) - Независимый менеджер пакетов для скомпилированных бинарных файлов.
- [syncthing](https://syncthing.net/) - Открытые децентрализованные инструмент и протокол синхронизации файлов.
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - Наблюдаемость TCP на основе eBPF.
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - Небольшое терминальное приложение, показывающее коммиты Git за последние 24 часа и неделю, текущую погоду, советы по заботе о себе, шутку и ваш текущий список дел.
- [tldx](https://github.com/brandonyoungdev/tldx) - Массовая проверка доступности доменов с использованием RDAP, DNS и резервного WHOIS с генерацией перестановок ключевых слов.
- [toxiproxy](https://github.com/shopify/toxiproxy) - Прокси для симуляции сетевых и системных условий в автоматизированных тестах.
- [tsuru](https://tsuru.io/) - Расширяемое программное обеспечение «платформа как услуга» (PaaS) с открытым исходным кодом.
- [untis-go](https://github.com/benzjeremy/untis-go) - Быстрый нативный настольный клиент WebUntis для учеников и учителей. Навигация на боковой панели, расписания, домашние задания, пропуски и сообщения. Учётные данные, зашифрованные AES-256-GCM, кеш SQLite в приоритете, защита за счёт случайного порта.
- [vaku](https://github.com/lingrino/vaku) - CLI и API для операций над папками в Vault, таких как копирование, перемещение и поиск.
- [vFlow](https://github.com/VerizonDigital/vflow) - Высокопроизводительный, масштабируемый и надёжный коллектор IPFIX, sFlow и Netflow.
- [Wave Terminal](https://waveterm.dev) - Wave — терминал с открытым исходным кодом, изначально ориентированный на ИИ и созданный для бесшовных рабочих процессов разработчиков, со встроенной отрисовкой, современным интерфейсом и постоянными сессиями.
- [wellington](https://github.com/wellington/wellington) - Инструмент управления проектами на Sass, расширяющий язык функциями для спрайтов (как Compass).
- [woke](https://github.com/get-woke/woke) - Обнаружение неинклюзивных формулировок в вашем исходном коде.
- [yai](https://github.com/ekkinox/yai) - Терминальный ассистент на базе ИИ.
- [zs](https://git.mills.io/prologic/zs) - Предельно минималистичный генератор статических сайтов.

**[⬆ Наверх](#contents)**

# Ресурсы

_Где найти новые библиотеки для Go._

**[⬆ Наверх](#contents)**

## Бенчмарки

- [autobench](https://github.com/davecheney/autobench) - Фреймворк для сравнения производительности разных версий Go.
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Мощный инструмент HTTP-бенчмаркинга, сочетающий возможности инструментов Аb, Wrk и Siege. Сбор статистики и различных параметров для бенчмарков и сравнения результатов.
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - Несколько разнообразных микробенчмарков Go. Сравнение некоторых возможностей языка с альтернативными подходами.
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Бенчмарк и сравнение маршрутизаторов HTTP-запросов на Go.
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Бенчмарк JSON для Go.
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Бенчмарки инференса машинного обучения на Go.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Бенчмарк веб-фреймворков на Go.
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Бенчмарки методов сериализации в Go.
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Бенчмарки распространённых базовых операций для языка Go.
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Коллекция бенчмарков для Golang.
- [gospeed](https://github.com/feyeleanor/GoSpeed) - Микробенчмарки Go для измерения скорости языковых конструкций.
- [kvbench](https://github.com/jimrobinson/kvbench) - Бенчмарк баз данных «ключ/значение».
- [skynet](https://github.com/atemerev/skynet) - Микробенчмарк Skynet на 1 млн потоков.
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Сравнение различных алгоритмов изменения размера изображений для языка Go.
- [vizb](https://github.com/goptics/vizb) - CLI-инструмент для визуализации данных бенчмарков Go в 4D.

**[⬆ Наверх](#contents)**

## Конференции

- [GoCon](https://gocon.connpass.com/) - Токио, Япония.
- [GoDays](https://www.godays.io/) - Берлин, Германия.
- [GoLab](https://golab.io/) - Флоренция, Италия.
- [GopherCon](https://www.gophercon.com/) - Каждый год в разных местах, США.
- [GopherCon Africa](https://gophercon.africa/) - Найроби, Кения.
- [GopherCon Australia](https://gophercon.com.au/) - Сидней, Австралия.
- [GopherCon Brazil](https://gopherconbr.org) - Флорианополис, Бразилия.
- [GopherCon China](https://gophercon.com.cn) - Шанхай, Китай.
- [GopherCon Europe](https://gophercon.eu/) - Берлин, Германия.
- [GopherCon India](https://gopherconindia.org/) - Пуна, Индия.
- [GopherCon Israel](https://www.gophercon.org.il/) - Тель-Авив, Израиль.
- [GopherCon Russia](https://www.gophercon-russia.ru) - Москва, Россия.
- [GopherCon Singapore](https://gophercon.sg) - Mapletree Business City, Сингапур.
- [GopherCon UK](https://www.gophercon.co.uk/) - Лондон, Великобритания.
- [GopherCon Vietnam](https://gophercon.vn/) - Хошимин, Вьетнам.
- [GoWest Conference](https://www.gowestconf.com/) - Лихай, США.

**[⬆ Наверх](#contents)**

## Электронные книги

### Платные электронные книги

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - Программирование на Go для хакеров и пентестеров.
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - Это практическое руководство по непрерывной доставке показывает, как быстро построить автоматизированный конвейер, который улучшит ваше тестирование, качество кода и конечный продукт.
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - Введение в компилятор TinyGo с проектами на Arduino и WebAssembly.
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Откройте для себя уникальный взгляд Go на проектирование программ и начните писать простой, сопровождаемый и тестируемый код на Go.
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Вводная книга для начинающих изучать Go.
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Ваше практическое руководство по всем тонкостям разработки на Go, охватывающее стандартную библиотеку и важнейшие инструменты мощной экосистемы Go.
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Руководство по пониманию и использованию дженериков в Go.
- [Lets-Go](https://lets-go.alexedwards.net) - Пошаговое руководство по созданию быстрых, безопасных и сопровождаемых веб-приложений на Go.
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Продвинутые шаблоны создания API и веб-приложений на Go.
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Руководство по тестированию в Go.
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Руководство по написанию инструментов командной строки на Go.
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - Книга, знакомящая с десятками приёмов написания идиоматичного, выразительного и эффективного кода на Go, позволяющего избежать распространённых ошибок.

### Бесплатные электронные книги

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Фундаментальное и практическое руководство по эффективному изучению и поэтапному созданию блокчейна с нуля на Go с gRPC.
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Книга, посвящённая синтаксису и семантике Go и всевозможным деталям.
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Книга, посвящённая пакетам Go `go/*`.
- [Go Faster](https://leanpub.com/gofaster) - Эта книга стремится сократить ваш путь обучения и помочь быстрее стать опытным программистом на Go.
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - На персидском языке.
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - Книга, показывающая, как применять DDD, чистую архитектуру и CQRS на примере практического рефакторинга.
- [GoBooks](https://github.com/dariubs/GoBooks) - Тщательно отобранный список книг по Go.
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 600-страничное введение в Go для начинающих разработчиков.
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ Наверх](#contents)**

## Гоферы

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Графический пакет гоферов от Марии Летты с иллюстрациями и эмоциональными персонажами в векторном и растровом форматах.
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Векторные данные гофера Go [.ai, .svg].
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - Очаровательные логотипы с гоферами.
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - Превратите себя в гофера.
- [gophers](https://github.com/ashleymcnamara/gophers) - Работы с гоферами от Эшли Макнамары.
- [gophers](https://github.com/egonelbre/gophers) - Бесплатные гоферы.
- [gophers](https://github.com/rogeralsing/gophers) - Случайная графика с гоферами.
- [gophers](https://github.com/sillecelik/go-gopher) - Схема вязания игрушки-гофера в технике амигуруми.
- [gophers](https://github.com/scraly/gophers) - Гоферы от Орели Ваш.

**[⬆ Наверх](#contents)**

## Митапы

- [Basel Go Meetup](https://www.meetup.com/Basel-Go-Meetup/)
- [Belfast Gophers](https://www.meetup.com/Belfast-Gophers/)
- [Belgrade Golang Meetup](https://www.meetup.com/golang-serbia/)
- [Berlin Golang](https://www.meetup.com/golang-users-berlin/)
- [Brisbane Gophers](https://www.meetup.com/Brisbane-Golang-Meetup/)
- [Bärner Go Meetup - Berne, Switzerland](https://www.meetup.com/berner-go-meetup/)
- [Go Ireland - Dublin](https://www.meetup.com/goireland/)
- [Go Language NYC](https://www.meetup.com/golanguagenewyork/)
- [Go London User Group](https://www.meetup.com/Go-London-User-Group/)
- [Go Remote Meetup](https://www.meetup.com/Go-Remote-Meetup/)
- [Go Toronto](https://www.meetup.com/go-toronto/)
- [Go User Group Atlanta](https://www.meetup.com/Go-Users-Group-Atlanta/)
- [GoBandung](https://www.meetup.com/GoBandung/)
- [GoBridge, San Francisco, CA](https://www.meetup.com/gobridge/)
- [GoCracow - Krakow, Poland](https://www.meetup.com/GoCracow/)
- [GoJakarta](https://www.meetup.com/GoJakarta/)
- [Golang Amsterdam](https://www.meetup.com/golang-amsterdam/)
- [Golang Argentina](https://www.meetup.com/Golang-Argentina/)
- [Golang Athens](https://www.meetup.com/Athens-Gophers/)
- [Golang Baltimore, MD](https://www.meetup.com/BaltimoreGolang/)
- [Golang Bangalore](https://www.meetup.com/Golang-Bangalore/)
- [Golang Belo Horizonte - Brazil](https://www.meetup.com/go-belo-horizonte/)
- [Golang Boston](https://www.meetup.com/bostongo/)
- [Golang Bulgaria](https://www.meetup.com/Golang-Bulgaria/)
- [Golang Cardiff, UK](https://www.meetup.com/Cardiff-Go-Meetup/)
- [Golang Copenhagen](https://www.meetup.com/Go-Cph/)
- [Golang Curitiba - Brazil](https://www.meetup.com/GolangCWB/)
- [Golang DC, Arlington, VA](https://www.meetup.com/Golang-DC/)
- [Golang Dorset, UK](https://www.meetup.com/golang-dorset/)
- [Golang Estonia](https://www.meetup.com/Golang-Estonia/)
- [Golang Gurgaon, India](https://www.meetup.com/Gurgaon-Go-Meetup/)
- [Golang Hamburg - Germany](https://www.meetup.com/Go-User-Group-Hamburg/)
- [Golang Israel](https://www.meetup.com/Go-Israel/)
- [Golang Kathmandu](https://www.meetup.com/Golang-Kathmandu/)
- [Golang Lima - Peru](https://www.meetup.com/Golang-Peru/)
- [Golang Lyon](https://www.meetup.com/Golang-Lyon/)
- [Golang Marseille](https://www.meetup.com/fr-FR/Golang-Marseille/)
- [Golang Melbourne](https://www.meetup.com/golang-mel/)
- [Golang Milano](https://www.meetup.com/golang-milano/)
- [Golang North East](https://www.meetup.com/en-AU/Golang-North-East/)
- [Golang Paris](https://www.meetup.com/Golang-Paris/)
- [Golang Poland](https://www.meetup.com/Golang-Poland/)
- [Golang Pune](https://www.meetup.com/Golang-Pune/)
- [Golang Roma](https://www.meetup.com/golangroma/)
- [Golang Rotterdam](https://www.meetup.com/golang-rotterdam/)
- [Golang Singapore](https://www.meetup.com/golangsg/)
- [Golang Stockholm](https://www.meetup.com/Go-Stockholm/)
- [Golang Sydney, AU](https://www.meetup.com/golang-syd/)
- [Golang São Paulo - Brazil](https://www.meetup.com/golangbr/)
- [Golang Taipei](https://www.meetup.com/golang-taipei-meetup/)
- [Golang Thessaloniki](https://www.meetup.com/thessaloniki-golang-meetup/)
- [Golang Torino](https://www.meetup.com/golang-torino/)
- [Golang Turkey](https://kommunity.com/goturkiye)
- [Golang Vancouver, BC](https://www.meetup.com/golangvan/)
- [Golang Vienna, Austria](https://www.meetup.com/viennago/)
- [Golang Москва](https://www.meetup.com/Golang-Moscow/)
- [GoSF - San Francisco, CA](https://www.meetup.com/golangsf)
- [Istanbul Golang](https://www.meetup.com/Istanbul-Golang/)
- [Lagos Gophers](https://www.meetup.com/GolangNigeria/)
- [Nairobi Gophers](https://www.meetup.com/nairobi-gophers/)
- [Seattle Go Programmers](https://www.meetup.com/golang/)
- [Ukrainian Golang User Groups](https://www.meetup.com/uagolang/)
- [Utah Go User Group](https://www.meetup.com/utahgophers/)
- [Women Who Go - San Francisco, CA](https://www.meetup.com/Women-Who-Go/)
- [Zürich Gophers - Zurich, Switzerland](https://www.meetup.com/zurich-gophers/)

_Добавьте сюда группу своего города/страны (отправьте **PR**)_

**[⬆ Наверх](#contents)**

## Руководства по стилю

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ Наверх](#contents)**

## Социальные сети

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ Наверх](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ Наверх](#contents)**

## Веб-сайты

- [Awesome Go @LibHunt](https://go.libhunt.com) - Ваш основной набор инструментов для Go.
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - Тщательно отобранный список замечательных воркшопов по Golang.
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - Тщательно отобранный список замечательных удалённых вакансий. Во многих из них ищут Go-хакеров.
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Список других удивительно замечательных списков.
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - Разбор файла README awesome-go и генерация нового файла README с информацией о репозиториях.
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - Программная инженерия и блоги на codewithmukesh.com.
- [Coding Mystery](https://codingmystery.com) - Решайте увлекательные задачи по программированию на Go в стиле квест-комнат.
- [CodinGame](https://www.codingame.com/) - Изучайте Go, решая интерактивные задачи на примере небольших игр.
- [Go Blog](https://blog.golang.org) - Официальный блог Go.
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - Группа гоферов каждую неделю читает и обсуждает новый проект на Go.
- [Go Community on Hashnode](https://hashnode.com/n/go) - Сообщество гоферов на Hashnode.
- [Go Forum](https://forum.golangbridge.org) - Форум для обсуждения Go.
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Список проектов в вики сообщества Go.
- [Go Proverbs](https://go-proverbs.github.io/) - Поговорки Go (Go Proverbs) от Роба Пайка.
- [Go Report Card](https://goreportcard.com) - Табель успеваемости для вашего пакета Go.
- [go.dev](https://go.dev/) - Центр для разработчиков на Go.
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - Коллекция проектов на Go, которым нужна помощь. Хорошее место, чтобы начать свой путь в open source на Go.
- [Golang Developer Jobs](https://golangjob.xyz) - Вакансии для разработчиков исключительно на должности, связанные с Golang.
- [Golang News](https://golangnews.com) - Ссылки и новости о программировании на Go.
- [Golang Nugget](https://golangnugget.com) - Еженедельная подборка лучших материалов о Go, доставляемая на вашу почту каждый понедельник.
- [Golang Weekly](https://discu.eu/weekly/golang/) - Каждый понедельник — проекты, руководства и статьи о Go.
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Список рассылки Go.
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - Присоединяйтесь к нашему новому Slack-сообществу для гоферов ([узнайте, как оно появилось](https://blog.gopheracademy.com/gophers-slack-community/)).
- [Gophercises](https://gophercises.com/) - Бесплатные упражнения по программированию для начинающих гоферов.
- [json2go](https://m-zajac.github.io/json2go) - Продвинутое преобразование JSON в структуры Go — онлайн-инструмент.
- [justforfunc](https://www.youtube.com/c/justforfunc) - YouTube-канал, посвящённый советам и хитростям языка программирования Go, ведущий — Франческ Кампой [@francesc](https://twitter.com/francesc).
- [Learn Go Programming](https://blog.learngoprogramming.com) - Изучайте концепции Go с помощью иллюстраций.
- [Libs.tech](https://libs.tech/go) – Замечательные библиотеки Go и скрытые жемчужины
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - Документация для пакетов Go с открытым исходным кодом.
- [studygolang](https://studygolang.com) - Сообщество studygolang в Китае.
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - Хорошее место для поиска новых библиотек Go.
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ Наверх](#contents)**

### Учебные руководства

- [50 Shades of Go](https://golang50shades.github.io/) - Ловушки, подводные камни и распространённые ошибки начинающих разработчиков на Golang.
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Глубокое погружение в мир структурированного логирования в Go с особым вниманием к недавно принятому предложению slog, цель которого — привнести в стандартную библиотеку высокопроизводительное структурированное логирование с уровнями.
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Создание сайта электронной коммерции на Golang (с демо).
- [A Tour of Go](https://tour.golang.org/) - Интерактивный тур по Go.
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - Создайте NoSQL-базу данных с нуля в 1000 строках кода.
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Электронная книга по Golang — введение в создание веб-приложений на Golang.
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - Мы напишем API с помощью мощного Gorilla Mux.
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Познакомьтесь с Gin и узнайте, как он может помочь сократить шаблонный код и построить конвейер обработки запросов.
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - Как кешировать медленные запросы к базе данных.
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - Как отменять запросы к MySQL.
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - Освойте продвинутый Go, создав собственные Redis, Docker, Git и SQLite. Горутины, системное программирование, файловый ввод-вывод и многое другое.
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Коллекция шаблонов проектирования, реализованных на Go.
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - Серия видео, обучающих программированию и разработке игр.
- [Go By Example](https://gobyexample.com/) - Практическое введение в Go с помощью аннотированных примеров программ.
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Справочная карточка по Go.
- [Go database/sql tutorial](http://go-database-sql.org/) - Введение в database/sql.
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - Изучите всё о Go за 7 дней (от разработчика на Node.js).
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Учебник по языку Go.
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Изучайте программирование на Go.
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Шаблон чистой архитектуры для сервисов на Golang.
- [go-patterns](https://github.com/tmrts/go-patterns) - Тщательно отобранный список шаблонов проектирования, рецептов и идиом Go.
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Примеры на Golang в сравнении с Node.js для обучения.
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Список бесплатных курсов для изучения языка программирования Go.
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Множество примеров для изучения Golang.
- [Golangbot](https://golangbot.com/learn-golang-series/) - Руководства для начала программирования на Go.
- [GopherCoding](https://gophercoding.com/) - Коллекция фрагментов кода и руководств, помогающих решать повседневные задачи.
- [GopherSnippets](https://gophersnippets.com/) - Фрагменты кода с тестами и тестируемыми примерами для языка программирования Go.
- [Gosamples](https://gosamples.dev/) - Коллекция фрагментов кода, позволяющих решать повседневные задачи программирования.
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - Узнайте, как создать GraphQL-сервер и клиент на Go с генерацией кода. Также включает создание REST-эндпоинтов.
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - Изучайте Go по лучшим онлайн-руководствам по Golang, предложенным сообществом программистов на Golang и отобранным голосованием.
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - Руководство по началу работы с написанием сопровождаемого кода с использованием гексагональной архитектуры.
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Узнайте, как проводить бенчмаркинг в Go. В качестве практического примера мы сравним dbq, sqlx и GORM.
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Узнайте, как использовать Docker для разработки на Go и как собирать продакшен-образы Docker.
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Руководство по реализации управления доступом на основе ролей (RBAC) на Golang с примерами кода, охватывающее различные способы защиты эндпоинтов приложения с помощью ролевой авторизации.
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Начните работу с Godog — фреймворком разработки через поведение (BDD) для создания и тестирования приложений на Go.
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - Изучайте Go на тысячах примеров, упражнений и тестов.
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - Изучайте Go с помощью разработки через тестирование.
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - Серия статей для изучения языка Golang на примере конкретных приложений.
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - Глубокое погружение в создание микросервисов на Go, включая gRPC.
- [package main](https://www.youtube.com/packagemain) - YouTube-канал о программировании на Go.
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Специализация на Coursera для изучения Go с нуля.
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - Всё о создании, развёртывании и масштабировании приложений на Go в продакшене.
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - Изучайте Go наглядно
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic предлагает подробное руководство и хорошо организованные материалы для изучения программирования на Golang.
- [Your basic Go](https://yourbasic.org/golang) - Огромная коллекция руководств и практических инструкций.

**[⬆ Наверх](#contents)**

### Учебные траектории

- [The Go Developer Roadmap](https://roadmap.sh/golang) - Наглядная дорожная карта, по которой начинающие разработчики могут двигаться, чтобы изучить Go.
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Репозиторий GitHub с задачами по программированию для подготовки к техническим собеседованиям по Go.
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - Учебная траектория, сочетающая бесплатные и платные ресурсы.
- [The Go Skill Tree](https://labex.io/skilltrees/go) - Структурированная учебная траектория, объединяющая как бесплатные, так и платные ресурсы.

**[⬆ Наверх](#contents)**

## Участие в проекте

Мы приветствуем любой вклад! Ознакомьтесь с правилами в нашем файле [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md).

## Лицензия

Этот проект распространяется по [лицензии MIT](https://github.com/avelino/awesome-go/blob/main/LICENSE) — подробности см. в файле LICENSE.
