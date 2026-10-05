# Awesome .NET!

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Build Status](https://github.com/quozd/awesome-dotnet/actions/workflows/awesome-bot.yml/badge.svg)](https://github.com/quozd/awesome-dotnet/actions/workflows/awesome-bot.yml)
[![Join the chat at https://gitter.im/quozd/awesome-dotnet](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/quozd/awesome-dotnet?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Подборка замечательных библиотек, инструментов, платформ и программного обеспечения для .NET.

Вдохновлено списками [awesome-ruby](https://github.com/markets/awesome-ruby), [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python), [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks) и [ruby-bookmarks](https://github.com/dreikanter/ruby-bookmarks).

Вклад всегда приветствуется! Сначала ознакомьтесь со страницами [рекомендаций для участников и стандартов качества](https://github.com/quozd/awesome-dotnet/blob/master/CONTRIBUTING.md). Мы также принимаем проприетарное и коммерческое программное обеспечение.

Спасибо всем [участникам](https://github.com/quozd/awesome-dotnet/graphs/contributors): вы замечательные, и без вас ничего бы не получилось! Наша цель — создать тематическую подборку широко известных ресурсов, формируемую сообществом.

# Лицензия

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

В максимально допустимой законом степени [Vitali Fokin](https://github.com/quozd) отказался от всех авторских и смежных прав на эту работу.

# Содержание

* [Замечательный .NET](#awesome-dotnet)
  * [Алгоритмы и структуры данных](#algorithms-and-data-structures)
  * [API](#api)
  * [Прикладные платформы](#application-frameworks)
  * [Шаблоны приложений](#application-templates)
  * [Искусственный интеллект](#artificial-intelligence)
  * [Работа со сборками](#assembly-manipulation)
  * [Ресурсы](#assets)
  * [Аутентификация и авторизация](#authentication-and-authorization)
  * [Фоновая обработка](#background-processing)
  * [Blazor](#blazor)
  * [Автоматизация сборки](#build-automation)
  * [Бизнес-аналитика и отчётность](#business-intelligence)
  * [Кэширование](#caching)
  * [Календарь](#calendar)
  * [Чат](#chat)
  * [CLI](#cli)
  * [CLR](#clr)
  * [CMS](#cms)
  * [Анализ кода и метрики](#code-analysis-and-metrics)
  * [Фрагменты кода](#code-snippets)
  * [Компиляторы, транспиляторы и языки](#compilers-transpilers-and-languages)
  * [Сжатие](#compression)
  * [Конфигурация](#configuration)
  * [Непрерывная интеграция](#continuous-integration)
  * [Криптография](#cryptography)
  * [Облачное хранилище](#cloud-storage)
  * [Базы данных](#database)
  * [Драйверы баз данных](#database-drivers)
  * [Дата и время](#datetime)
  * [Декомпиляция](#decompilation)
  * [Развёртывание](#deployment)
  * [Рабочий стол](#desktop)
  * [DirectX](#directx)
  * [Распределённые вычисления](#distributed-computing)
  * [DLR](#dlr)
  * [Документация](#documentation)
  * [Электронная коммерция и платежи](#e-commerce-and-payments)
  * [Эмуляторы](#emulators)
  * [Управление окружением](#environment-management)
  * [ETL](#etl)
  * [Агрегаторы событий и обмен сообщениями](#event-aggregator-and-messenger)
  * [Исключения](#exceptions)
  * [Библиотеки расширений](#extensions)
  * [Управление функциями](#feature-management)
  * [Функциональное программирование](#functional-programming)
  * [Игры](#game)
  * [ГИС](#gis)
  * [Инструменты Git](#git-tools)
  * [Графика](#graphics)
  * [GraphQL](#graphql)
  * [GUI](#gui)
  * [HTML и CSS](#html-and-css)
  * [HTTP](#http)
  * [IDE](#ide)
  * [Обработка изображений](#image-processing)
  * [Инструменты установки](#install-tools)
  * [Интернационализация](#internationalization)
  * [Взаимодействие](#interoperability)
  * [IoC](#ioc)
  * [Движки JavaScript](#javascript-engines)
  * [Журналирование](#logging)
  * [Почта](#mail)
  * [Машинное обучение и наука о данных](#machine-learning-and-data-science)
  * [Обработчики Markdown](#markdown-processors)
  * [Математика](#mathematics)
  * [Медиа](#media)
  * [Метрики](#metrics)
  * [Микрофреймворки](#micro-framework)
  * [Минификация](#minification)
  * [Разное](#misc)
  * [MQTT](#mqtt)
  * [MVVM](#mvvm)
  * [Сетевые технологии](#networking)
  * [Сопоставление объектов](#object-to-object-mapping)
  * [Офис](#office)
  * [OpenAI](#openai)
  * [ORM](#orm)
  * [Управление пакетами](#package-management)
  * [PDF](#pdf)
  * [Профилировщики](#profiler)
  * [Протоколы](#protocols)
  * [Push-уведомления](#push-notifications)
  * [Построители запросов](#query-builders)
  * [Очереди](#queue)
  * [RPC](#RPC)
  * [Реактивное программирование](#reactive-programming)
  * [Общение в реальном времени](#real-time-communications)
  * [Регулярные выражения](#regular-expression)
  * [Планирование задач](#scheduling)
  * [Клиенты SDK и API](#sdk-and-api-clients)
  * [Поиск](#search)
  * [Сериализация](#serialization)
  * [SMS и телефонные звонки](#sms-and-phone-calls)
  * [Конечные автоматы](#state-machines)
  * [Генераторы статических сайтов](#static-site-generators)
  * [Строгая подпись](#strong-naming)
  * [Руководство по стилю](#style-guide)
  * [Шаблонизаторы](#template-engine)
  * [Тестирование](#testing)
  * [Инструменты](#tools)
  * [Торговля](#trading)
  * [Автоматизация пользовательского интерфейса](#ui-automation)
  * [Плагины Visual Studio](#visual-studio-plugins)
  * [Веб-браузеры](#web-browsers)
  * [Веб-фреймворки](#web-frameworks)
  * [Веб-серверы](#web-servers)
  * [WebSocket](#websocket)
  * [Службы Windows](#windows-services)
  * [WPF](#wpf)
  * [Библиотеки парсеров](#parser-library)
  * [Генераторы исходного кода](#source-generator)
* [Другие списки](#other-lists)
* [Ресурсы](#resources)

## Алгоритмы и структуры данных

* [OneOf](https://github.com/mcintyre321/OneOf) - OneOf предоставляет для C# дискриминированные объединения с исчерпывающим сопоставлением во время компиляции.
* [Algorithmia](https://github.com/SolutionsDesign/Algorithmia) - Библиотека алгоритмов и структур данных для .NET 3.5 и выше. Algorithmia включает сложные алгоритмы и структуры данных, такие как графы, очереди с приоритетом, команды, отмена и повтор действий и многое другое.
* [Towel](https://github.com/ZacharyPatten/Towel) - Структуры данных, алгоритмы, математика, метаданные, расширения, консоль, измерения и другие полезные вещи.
* [Akade.IndexedSet](https://github.com/akade/Akade.IndexedSet) - Удобная структура данных для эффективной индексации и поиска в памяти, включая запросы по диапазонам и нечёткое сопоставление строк.

## API

* [FastEndpoints](https://github.com/FastEndpoints/FastEndpoints) - Высокопроизводительное промежуточное решение между классическими контроллерами API ASP.NET Core и Minimal API. Используя шаблон REPR ([Request-Endpoint-Response](https://deviq.com/design-patterns/repr-design-pattern)), библиотека устраняет шаблонный код и излишнюю монолитность контроллеров за счёт более тесного размещения связанного кода.
* [Telegram.Bot](https://github.com/TelegramBots/Telegram.Bot) - Клиент .NET для [Telegram Bot API](https://core.telegram.org/bots/api).
* [WTelegramClient](https://github.com/wiz0u/WTelegramClient) - Автоматизация пользовательского аккаунта Telegram с использованием последней версии [Telegram Client API](https://core.telegram.org/methods).
* [ASP.NET Web API](https://dotnet.microsoft.com/apps/aspnet/apis) - Фреймворк, упрощающий создание HTTP-сервисов для широкого круга клиентов, включая браузеры и мобильные устройства.
* [Breeze](https://breeze.github.io/doc-net/) - Фреймворк API, обеспечивающий расширенный доступ к данным с помощью протокола OData 3. Клиентские библиотеки доступны для JavaScript и C#.
* [Mobius: C# API for Spark](https://github.com/Microsoft/Mobius) - Mobius добавляет привязку языка C# к Apache Spark, позволяя реализовывать код драйверов Spark и операции обработки данных на C#.
* [ServiceStack](https://github.com/ServiceStack/ServiceStack) - Продуманные, невероятно быстрые и удобные веб-службы для всех.
* [Ocelot](https://github.com/ThreeMammals/Ocelot) - Шлюз API для .NET Core.
* [CommandQuery](https://github.com/hlaueriksson/CommandQuery) - Разделение команд и запросов для 🌐ASP.NET Core ⚡AWS Lambda ⚡Azure Functions ⚡Google Cloud Functions 🌐ASP.NET Web API 2.
* [Population.NET](https://github.com/Authentic199/Population.NET) - Библиотека .NET, позволяющая клиентам указывать только необходимые поля и сокращать избыточную передачу данных, не загружая все поля по умолчанию.
* [Wissance.WebApiTookit](https://github.com/Wissance/WebApiToolkit) - Набор библиотек и классов, упрощающих создание REST API и служб gRPC и сокращающих объём кода вплоть до одной строки для полностью работоспособного REST-контроллера.

## Прикладные платформы

* [.NET Boxed Framework](https://github.com/Dotnet-Boxed/Framework) - Расширения .NET Core и вспомогательные пакеты NuGet.
* [ASP.NET Boilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) - Отправная точка для создания современных веб-приложений ASP.NET MVC с использованием лучших практик и популярных инструментов.
* [ABP](https://github.com/abpframework/abp) - Платформа веб-приложений нового поколения, развивающая ASP.NET Boilerplate.
* [Orleans](https://github.com/dotnet/orleans) - Фреймворк, упрощающий создание масштабных распределённых вычислительных приложений без необходимости изучать и применять сложные модели параллелизма и масштабирования.
* [Runtime](https://github.com/dotnet/runtime) - Репозиторий среды выполнения содержит реализацию библиотек .NET (5+), ранее называвшуюся «CoreFX». В него входят System.Collections, System.IO, System.Xml и многие другие компоненты.
* [CSLA .NET](https://github.com/MarimerLLC/csla) - Фреймворк для разработки бизнес-слоя https://cslanet.com/
* [Mono](https://github.com/mono/mono) - Реализация ECMA CLI, C#, F#, VB и .NET с открытым исходным кодом.
* [peasy](https://github.com/peasy/Peasy.NET) - Peasy — это фреймворк среднего уровня с простым и гибким механизмом правил, предназначенный для решения распространённых задач: параллелизма, транзакций, отказоустойчивости, многопоточности, масштабирования, асинхронности, поддержки нескольких клиентов и тестирования. Для освоения не требуется много времени.
* [Plastic](https://github.com/sang-hyeon/Plastic) - Plastic инкапсулирует такие понятия, как домен, правила приложения, бизнес-правила и бизнес-логику приложения, используя для этого шаблон «Команда».
* [Signals](https://github.com/EmitKnowledge/Signals) - Фреймворк на базе .NET 5, повышающий качество и продуктивность команд разработки благодаря инструментам, аспектам и процессам.
* [Spring.Net](https://github.com/spring-projects/spring-net) - Spring.NET — это платформа приложений с открытым исходным кодом, упрощающая создание корпоративных приложений .NET.
* [DotNetty](https://github.com/Azure/DotNetty) - Порт Netty — асинхронного событийно-ориентированного сетевого фреймворка для быстрой разработки поддерживаемых высокопроизводительных серверов и клиентов протоколов.
* [AspectCore Framework](https://github.com/dotnetcore/AspectCore-Framework) - Кроссплатформенный фреймворк для .NET Core и .NET Framework на основе аспектно-ориентированного программирования. Поддерживает перехват аспектов, интеграцию внедрения зависимостей, веб-приложения, проверку данных и многое другое.
* [ActualLab.Fusion](https://github.com/ActualLab/Fusion) - Забудьте о SignalR и gRPC. Создавайте приложения Blazor и MAUI с обновлениями в реальном времени, написав лишь 0,1 % обычного кода обновлений. Обрабатывайте в 10 раз больше запросов API с протоколом ActualLab.Rpc или в 1000 раз больше благодаря прозрачному и полностью согласованному кэшированию Fusion. [Примеры](https://github.com/ActualLab/Fusion.Samples). [Документация](https://fusion.actuallab.net/).
* [silky](https://github.com/liuhll/silky) - Фреймворк Silky помогает разработчикам быстро создавать платформу для разработки микросервисов на .NET с помощью простого кода и конфигурации.
* [Positron-JS](https://github.com/Positron-JS/positron-web-view) - Продвинутое веб-представление PositronWebView со встроенным контекстом JavaScript для доступа к API .NET из гибридных приложений; создано под влиянием Capacitor и Cordova.

## Шаблоны приложений

* [.NET Boxed Templates](https://github.com/Dotnet-Boxed/Templates) - Шаблоны проектов .NET со всем необходимым, содержащие минимум кода для быстрого старта.
* [ASP.NET Core Starter Kit](https://github.com/kriasoft/aspnet-starter-kit) - Бэкенд: .NET Core, EF Core, C#; фронтенд: Babel, Webpack, React, CSS Modules.
* [ProjectScaffold](https://github.com/fsprojects/ProjectScaffold) - Типовое решение .NET, рекомендованное F# Foundation: включает настройку файловой системы, Paket для управления зависимостями и FAKE для автоматизации сборки и тестирования. По умолчанию процесс сборки также компилирует документацию и создаёт пакеты NuGet.
* [Serene](https://github.com/volkanceylan/Serenity) - Платформа приложений ASP.NET MVC, упрощающая и ускоряющая разработку бизнес-приложений, ориентированных на данные и построенных на сервисной архитектуре. Serene — стартовый шаблон для приложений Serenity.
* [Side-Waffle](https://github.com/LigerShark/side-waffle) - Большая коллекция полезных шаблонов для веб-разработки и разработки настольных приложений.
* [Template10](https://github.com/Windows-XAML/Template10) - Шаблоны Windows 10 с шаблонами проектирования.
* [Nucleus](https://github.com/alirizaadiyahsi/Nucleus) - Стартовый шаблон приложения Vue с многоуровневой архитектурой API ASP.NET Core на серверной стороне и аутентификацией на основе JWT.
* [JHipster.NET](https://github.com/jhipster/jhipster-dotnetcore) Чертёж JHipster, заменяющий исходный бэкенд Spring Boot на ASP.NET Core. Генератор JHipster в первую очередь демонстрирует лучшие практики современной веб-разработки на Java; цель этого проекта — сделать то же для .NET. Фронтенд можно сгенерировать на Angular или React, а вскоре и на Blazor. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET

## Искусственный интеллект
* [LLamaSharp](https://github.com/SciSharp/LLamaSharp) - Привязка llama.cpp к C#/.NET, позволяющая запускать модели LLaMA/GPT на C# без компиляции lama.cpp.
* [LlmTornado](https://github.com/lofcz/LlmTornado) - Единая библиотека .NET для работы с API OpenAI, Anthropic, Cohere, Google, Azure, Groq и собственными API.

## Работа со сборками

* [Fody](https://github.com/Fody/Fody) - Расширяемый инструмент для внедрения кода в сборки .NET.
* [ILRepack](https://github.com/gluck/il-repack) - Альтернатива ILMerge с открытым исходным кодом.
* [Mono.Cecil](https://github.com/jbevain/cecil) - Cecil — библиотека для создания и анализа программ и библиотек в формате ECMA CIL.

## Ресурсы
* [Bundle Transformer](https://github.com/Taritsyn/BundleTransformer) - Модульное расширение для [Microsoft ASP.NET Web Optimization Framework](https://www.nuget.org/packages/Microsoft.AspNet.Web.Optimization). Его модули поддерживают LESS, Sass, CoffeeScript, TypeScript, Mustache, Handlebars, Autoprefixer, а также множество минификаторов JS и CSS.

## Аутентификация и авторизация

* [Abblix OIDC Server](https://github.com/Abblix/Oidc.Server) - Полностью сертифицированная OpenID Foundation серверная библиотека OpenID Connect для .NET с комплексной поддержкой OAuth2 и OpenID Connect во всех профилях. **[$][Бесплатно для некоммерческого использования]**
* [ASP.NET Core Identity](https://github.com/dotnet/aspnetcore/) - Новая система управления пользователями для приложений ASP.NET.
* [ASP.NET SAML](https://github.com/jitbit/AspNetSaml) - Поддержка аутентификации SAML в приложениях ASP.NET.
* [Logibit Hawk](https://github.com/logibit/logibit.hawk/) - Библиотека аутентификации [Hawk](https://github.com/outmoded/hawk) для F#.
* [Logto](https://github.com/logto-io/csharp) - Инфраструктура IAM для современных приложений и продуктов SaaS с поддержкой OIDC, OAuth 2.0 и SAML для аутентификации и авторизации. **[$][Бесплатно для ПО с открытым исходным кодом]**
* [IdentityModel](https://github.com/IdentityModel) - Вспомогательная библиотека для управления удостоверениями и доступом в .NET 4.5 и MVC4/Web API.
* [openiddict](https://github.com/openiddict/openiddict-core) - Гибкий и универсальный стек OAuth 2.0/OpenID Connect для .NET.
* [Topaz](https://www.topaz.sh/docs/software-development-kits/dotnet/install) - Система детализированной авторизации с SDK для .NET.
* [Enforcer](https://www.identityserver.com/products/enforcer) - Создание политик детализированной авторизации на простом для чтения языке с компиляцией в нативный код .NET. **[$]**
* [SAML IdentityServer](https://www.identityserver.com/products/saml2p) - Добавляет поддержку SAML 2P в Duende IdentityServer. **[$]**
* [SAML OpenIddict](https://www.openiddictcomponents.com/home/) - Добавляет поддержку SAML 2P в OpenIddict. **[$]**

## Фоновая обработка

* [BusyBee](https://github.com/mikasjp/BusyBee) - Быстрая обработка фоновых задач в памяти для приложений .NET с настраиваемыми очередями, тайм-аутами, параллелизмом и встроенной поддержкой OpenTelemetry.

## Blazor

* [BootstrapBlazor](https://github.com/dotnetcore/BootstrapBlazor) - Набор корпоративных компонентов пользовательского интерфейса на основе Bootstrap и Blazor. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [ant-design-blazor](https://github.com/ant-design-blazor/ant-design-blazor) - Набор корпоративных компонентов пользовательского интерфейса на основе Ant Design и Blazor WebAssembly.
* [MASA.Blazor](https://github.com/BlazorComponent/MASA.Blazor) - Набор корпоративных компонентов пользовательского интерфейса на основе Material Design и Blazor WebAssembly.
* [Megabit.Blazorise](https://github.com/Megabit/Blazorise) - Blazorise — библиотека компонентов на базе Blazor и CSS-фреймворков, таких как Bootstrap, Bulma и Material. Очень проста в использовании.
* [blazork8s](https://github.com/weibaohui/blazork8s) - Интерфейс управления k8s на Blazor и .NET Core.
* [MudBlazor](https://github.com/MudBlazor/MudBlazor) - Фреймворк Material Design для Blazor, позволяющий разработчикам .NET быстро создавать веб-приложения; включает подробную документацию и примеры.

## Блокчейн

* [Nethermind](https://github.com/NethermindEth/nethermind) - Полнофункциональный клиент Ethereum на .NET Core.

## Автоматизация сборки

* [Psake](https://github.com/psake/psake) - Инструмент автоматизации сборки на .NET, написанный на PowerShell.
* [FAKE](https://github.com/fsharp/FAKE) - F# Make — кроссплатформенная система автоматизации сборки.
* [Invoke-Build](https://github.com/nightroman/Invoke-Build) - Инструмент автоматизации сборки и тестирования на PowerShell, созданный под влиянием Psake.
* [MSBuild](https://github.com/dotnet/msbuild) - Microsoft Build Engine (MSBuild) — платформа сборки для .NET и Visual Studio.
* [Cake](https://github.com/cake-build/cake) - Cake (C# Make) — кроссплатформенная система автоматизации сборки с DSL на C#.
* [Nake](https://github.com/yevhen/Nake) - Скриптовый исполнитель задач на C#.
* [Nuke](https://github.com/nuke-build/nuke) - Кроссплатформенная система автоматизации сборки.
* [FlubuCore](https://github.com/dotnetcore/FlubuCore) - Кроссплатформенная система автоматизации сборки и развёртывания проектов и выполнения сценариев развёртывания на C#. - **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [ModularPipelines](https://github.com/thomhurst/ModularPipelines) - Создание конвейеров на C#.

## Бизнес-аналитика

* [FastReport](https://github.com/FastReports/FastReport) - Генератор отчётов с открытым исходным кодом для .NET Core 2.x/.NET Framework 4.x. FastReport можно использовать в приложениях ASP.NET MVC и Web API.
* [NReco PivotData](https://www.nrecosite.com/pivot_data_library_net.aspx) - Библиотека агрегации данных и OLAP в памяти, создание сводных таблиц (вывод в HTML, экспорт), элемент управления построителем сводных таблиц для ASP.NET. **[$][Бесплатно для одиночного развёртывания/не SaaS]**

## Кэширование

* [CacheCow](https://github.com/aliostad/CacheCow) - Реализация HTTP-кэширования для ASP.NET Web API на клиентской и серверной сторонах.
* [Akavache](https://github.com/reactiveui/Akavache) - Асинхронное постоянное хранилище «ключ — значение».
* [EasyCaching](https://github.com/dotnetcore/EasyCaching) - Библиотека кэширования с базовыми и расширенными сценариями использования, упрощающая работу с кэшем. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [CacheManager](https://github.com/MichaCo/CacheManager) - Универсальный интерфейс и уровень абстракции для кэширования.
* [FastCache](https://github.com/jitbit/FastCache) - Альтернатива `MemoryCache` для .NET, работающая в 10 раз быстрее.
* [Foundatio](https://github.com/FoundatioFx/Foundatio#caching) - Универсальный интерфейс с реализациями в памяти, на Redis и гибридными реализациями.
* [Cache Tower](https://github.com/TurnerSoftware/CacheTower) - Эффективная многоуровневая система кэширования для .NET (память, Redis, база данных, файлы и т. д.).
* [FusionCache](https://github.com/jodydonetti/ZiggyCreatures.FusionCache) - Простой в использовании, высокопроизводительный и надёжный кэш с дополнительным распределённым вторым уровнем и расширенными возможностями, такими как отказоустойчивость и гибкая настройка тайм-аутов.
* [BitFaster.Caching](https://github.com/bitfaster/BitFaster.Caching) - Потокобезопасные кэши в памяти, оптимизированные для очень высокой конкурентной пропускной способности, почти оптимальной частоты попаданий и низкой задержки.

## Календарь

* [iCal.NET](https://github.com/rianjs/ical.net) iCal.NET — библиотека классов iCalendar (RFC 5545) для .NET, обеспечивающая соответствие RFC 5545 и полную совместимость с популярными календарными приложениями и библиотеками.

## Чат

* [Stream](https://github.com/GetStream/stream-chat-net) Официальный клиент API .NET для Stream Chat — сервиса для создания чат-приложений.

## CLI

* [Argu](https://github.com/fsprojects/Argu) - Декларативный анализатор аргументов CLI и конфигурации XML для приложений F#.
* [CliFx](https://github.com/Tyrrrz/CliFx) - Декларативный фреймворк для создания интерфейсов командной строки.
* [CliWrap](https://github.com/Tyrrrz/CliWrap) - Обёртка для интерфейсов командной строки.
* [CommandDotNet](https://github.com/bilal-fazlani/commanddotnet) - Создание компонуемой модели консольного приложения на C#: определяйте команды методами, а подкоманды — свойствами или вложенными классами. Поддерживаются расширяемые разбор и выполнение команд.
* [Command Line Parser](https://github.com/commandlineparser/commandline) - Библиотека Command Line Parser предоставляет приложениям CLR чистый и лаконичный API для работы с аргументами командной строки и связанными задачами.
* [CommandLineUtils](https://github.com/natemcmaster/CommandLineUtils) - Ответвление Microsoft.Extensions.CommandLineUtils, активная разработка которого прекращена.
* [Docopt](https://github.com/docopt/docopt.net) - Язык описания интерфейсов командной строки, который вас порадует.
* [Gui.cs](https://github.com/migueldeicaza/gui.cs) - Инструментарий терминального пользовательского интерфейса для .NET.
* [Power Args](https://github.com/adamabdelhamed/PowerArgs) - PowerArgs преобразует аргументы командной строки в объекты .NET, с которыми удобно работать в коде. Также доступны многочисленные дополнительные функции: проверка аргументов, автоматическая генерация справки, автодополнение и расширяемость.
* [SharpNetSH](https://github.com/rpetz/SharpNetSH) - Простая библиотека netsh для C#.
* [spectre.console](https://github.com/spectresystems/spectre.console) - Библиотека, упрощающая создание красивых консольных приложений.

## CLR

* [Runtime](https://github.com/dotnet/runtime) - Среды выполнения .NET Mono и CoreCLR, стандартная библиотека и некоторые компоненты более высокого уровня, например `System.Linq` и `System.Text.Json`.

## CMS

* [FluentCMS](https://github.com/fluentcms/FluentCMS) - Система управления контентом (CMS) с открытым исходным кодом на ASP.NET Core и Blazor, управляемая искусственным интеллектом.
* [Composite C1](https://github.com/Orckestra/C1-CMS-Foundation) - Веб-CMS, ориентированная на удобство использования и адаптивность.
* [mojoPortal ](https://github.com/i7media/mojoportal) - MojoPortal — расширяемая, поддерживающая разные базы данных и мобильные устройства система управления веб-контентом (CMS) и веб-фреймворк на C# и ASP.NET.
* [Orchard ](https://github.com/OrchardCMS/Orchard) - Бесплатный проект с открытым исходным кодом, создаваемый сообществом для разработки приложений и повторно используемых компонентов на платформе ASP.NET.
* [Piranha CMS](https://github.com/PiranhaCMS/piranha.core) - Piranha — удобный, быстрый и лёгкий фреймворк .NET для разработки веб-приложений на базе CMS с дополнительными возможностями. Он построен на ASP.NET MVC и Web Pages и полностью совместим с Visual Studio и WebMatrix. https://piranhacms.org
* [Umbraco](https://github.com/umbraco/Umbraco-CMS) - Бесплатная CMS с открытым исходным кодом на платформе ASP.NET.
* [DotNetNuke](https://www.dnnsoftware.com/community/download) - Платформа DNN — бесплатная веб-CMS с открытым исходным кодом и основа каждого профессионального решения DNN. Более 750 000 организаций по всему миру создали сайты на платформе DNN.
* [Squidex](https://github.com/Squidex/squidex) ![GitHub stars](https://img.shields.io/github/stars/Squidex/squidex?style=flat-square&cacheSeconds=604800) ![GitHub stars](https://img.shields.io/github/last-commit/Squidex/squidex?style=flat-square&cacheSeconds=86400) - Headless CMS и центр управления контентом с открытым исходным кодом.  https://squidex.io
* [fluent-cms](https://github.com/fluent-cms/fluent-cms) - RESTful API для CRUD (создание, чтение, обновление, удаление), веб-страницы панели администратора, конструктор запросов в стиле GraphQL и визуальный конструктор веб-страниц WYSIWYG; всё полностью настраивается без написания кода.

## Анализ кода и метрики

* [.NET Compiler Platform ("Roslyn") Analyzers](https://github.com/dotnet/roslyn-analyzers) - Набор диагностических анализаторов Roslyn, изначально созданных для проработки проектирования и реализации API статического анализа.
* [PVS-Studio](https://pvs-studio.com/en/pvs-studio/) - PVS-Studio — анализатор статического кода для обеспечения качества, безопасности (SAST) и надёжности кода. **[[Бесплатно для ПО с открытым исходным кодом](https://pvs-studio.com/en/order/open-source-license/)]** **[$]**
* [NDepend](https://www.ndepend.com) - Расширение Visual Studio и VS Team Services для оценки качества кода .NET и технического долга; позволяет создавать правила анализа на синтаксисе C# LINQ, визуализировать структуру кода и отслеживать изменения и развитие. **[$]**
* [StyleCop](https://github.com/StyleCop) - StyleCop анализирует исходный код C#, проверяя соблюдение набора правил стиля и единообразия.
* [BenchmarkDotNet](https://github.com/dotnet/BenchmarkDotNet) - Мощная библиотека .NET для тестирования производительности.
* [Bencher](https://bencher.dev/) - Набор инструментов непрерывного тестирования производительности для выявления регрессий в CI.
* [NsDepCop](https://github.com/realvizu/NsDepCop) - Инструмент статического анализа кода для контроля правил зависимости пространств имён в проектах C#.
* [WebBen](https://github.com/omerfarukz/WebBen) - Инструмент для тестирования производительности сервера протокола передачи гипертекста (HTTP).

## Фрагменты кода

* [.NET Fiddle](https://dotnetfiddle.net/) - Пишите, компилируйте и запускайте код C#, F# и VB в браузере. Аналог JSFiddle для .NET.
* [Sharplab](https://sharplab.io/) - Запускайте код C# с разными ветками и версиями Roslyn, просматривайте полученный IL и анализируйте вывод JIT-компилятора.
* [Entity Framework Playground](https://efplayground.io) - Изучайте SQL, создаваемый для миграций и запросов: в браузере пишите `DbContext` и запросы к нему. Учитесь на примерах, сравнивайте версии Entity Framework и поставщиков, например MS SQL, PostgreSql и Sqlite.

## Компиляторы, транспиляторы и языки

* [ClojureCLR](https://github.com/clojure/clojure-clr) - Порт языка Clojure на CLR, написанный на C#.
* [ClojureCLR Next](https://github.com/dmiller/clojure-clr-next?tab=readme-ov-file) - Переписанная на F# версия Clojure CLR.
* [F#](https://github.com/fsharp/fsharp/) - Язык программирования F# помогает каждому писать лаконичный, надёжный и производительный код.
* [Fable](https://github.com/fable-compiler/Fable) - Транспилятор из F# в JavaScript, TypeScript, JSX, Python, Dart и Rust.
* [Eiffel](https://www.eiffel.org/doc/solutions/The_Eiffel_for_.NET_language) - Eiffel для .NET — язык программирования Eiffel, доступный в среде .NET.
* [Rust](https://github.com/FractalFir/rustc_codegen_clr) - Экспериментальный компилятор Rust для .NET.
* [Wrapped Mono](https://github.com/FractalFir/wrapped_mono) - Среда выполнения Mono, встроенная в Rust.
* [Hybridizer](https://www.altimesh.com/hybridizer-essentials/) - Компилятор из CIL (C#, VB.Net, F#, ClojureCLR и др.) в CUDA. **[$]**
* [IronScheme](https://github.com/IronScheme/IronScheme) - Компилятор и среда выполнения Scheme R6RS, а также множество стандартных библиотек.
* [Mond](https://github.com/Rohansi/Mond) - Динамически типизированный скриптовый язык на C# с REPL, отладчиком и простым API для встраивания.
* [Lua-C#](https://github.com/nuskey8/Lua-CSharp) - Реализация Lua на .NET, написанная на C#.
* [Nemerle](https://github.com/rsdn/nemerle) - Nemerle — высокоуровневый статически типизированный язык программирования для .NET. Он поддерживает функциональные, объектно-ориентированные и императивные возможности, имеет простой синтаксис, похожий на C#, и мощную систему метапрограммирования.
* [P](https://github.com/p-org/P) - Язык для асинхронного событийно-ориентированного программирования.
* [PeachPie](https://github.com/peachpiecompiler/peachpie) - Компилятор и среда выполнения PHP для .NET и .NET Core, позволяющие запускать целые PHP-приложения на современных, безопасных и производительных платформах .NET и .NET Core.
* [Roslyn](https://github.com/dotnet/roslyn) - Платформа компиляторов .NET («Roslyn») предоставляет компиляторы C# и Visual Basic с открытым исходным кодом и развитые API анализа кода. С её помощью можно создавать инструменты анализа, используя те же API, что и Visual Studio.
* [PascalABC.NET](https://github.com/pascalabcnet/pascalabcnet) Реализация Pascal на .NET.
* [Iron Python](https://github.com/IronLanguages/ironpython3) - Реализация Python 3, интегрированная с платформой .NET.
* [IKVM](https://ikvm.org) - Виртуальная машина Java и преобразователь байт-кода в IL для .NET. Позволяет выполнять на .NET скомпилированный код Java (байт-код).
* [Lib.Harmony](https://github.com/pardeike/Harmony) - Библиотека для исправления, замены и декорирования методов .NET и Mono во время выполнения; в основном используется для модификации игр.
* [dotnet-repl](https://github.com/jonsequitur/dotnet-repl) - Многоязычный REPL на базе .NET Interactive.

## Сжатие

* [SharpCompress](https://github.com/adamhathcock/sharpcompress) - SharpCompress — библиотека сжатия для .NET/Mono/Silverlight/WP7, умеющая распаковывать RAR, 7z, ZIP, TAR, BZip2 и GZip с последовательным чтением и API произвольного доступа к файлам. Реализована запись в ZIP/TAR/BZip2/GZip.
* [FastLZMA2NET](https://github.com/kingsznhone/FastLZMA2Net) - Обёртка .NET для [алгоритма Fast LZMA2](https://github.com/conor42/fast-lzma2).

## Конфигурация
* [AgileConfig](https://github.com/dotnetcore/AgileConfig) - AgileConfig — лёгкий центр конфигурации, который помогает управлять всеми настройками приложения через веб-сайт. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET

## Непрерывная интеграция
* [TeamCity](https://www.jetbrains.com/teamcity/) - Готовый к работе, расширяемый и удобный для разработчиков сервер сборки «из коробки». **[$]**
* [MyGet](https://www.myget.org/) - Непрерывная интеграция и развёртывание, размещённый репозиторий пакетов для NuGet, NPM, Bower и VSIX. **[$]**
* [AppVeyor](https://www.appveyor.com/) - Непрерывная интеграция и развёртывание .NET в виде службы. **[$]** **[Бесплатно для ПО с открытым исходным кодом]**

## Криптография

* [BouncyCastle](https://bouncycastle.org/) - Вместе с .NET System.Security.Cryptography — эталонная реализация криптографических алгоритмов для CLR.
* [NaCl.Core](https://github.com/daviddesmet/NaCl.Core) - Криптографическая библиотека для .NET, полностью реализованная на управляемом коде и предоставляющая современные криптографические примитивы.
* [Paseto.Core](https://github.com/daviddesmet/paseto-dotnet) - Реализация Paseto (платформонезависимых токенов безопасности) для .NET.
* [Pkcs11Interop](https://github.com/Pkcs11Interop/Pkcs11Interop) - Управляемая обёртка .NET для неуправляемых библиотек PKCS#11, обеспечивающих доступ к криптографическому оборудованию.
* [SecurityDriven.Inferno](https://github.com/sdrapkin/SecurityDriven.Inferno) - Криптографическая библиотека .NET, прошедшая профессиональный аудит.
* [CryptoNet](https://github.com/maythamfahmi/CryptoNet) - Простая криптографическая библиотека для .NET на нативном C#.

## Облачное хранилище

* [Foundatio](https://github.com/FoundatioFx/Foundatio#jobs) - Библиотека облачного хранилища с поддержкой AWS, Azure и многих других поставщиков.
* [FluentStorage](https://github.com/robinrodricks/FluentStorage) - Уровень абстракции облачного хранилища .NET для нескольких облачных платформ, ранее известный как Storage.Net. Предоставляет общий интерфейс для хранилищ BLOB-объектов (AWS S3, GCP, FTP, SFTP, Azure Blob/File/Event Hub/Data Lake) и обмена сообщениями (AWS SQS, Azure Queue/ServiceBus).
* [Stowage](https://github.com/aloneguid/stowage) - Компактный комплект облачного хранилища .NET без зависимостей, поддерживающий как минимум ВСЕ основные облачные платформы.
* [Cloud Storage](https://github.com/managedcode/Storage):- Библиотека предоставляет универсальный интерфейс для доступа к данным и управления ими в разных облачных хранилищах BLOB-объектов (Azure Storage, AWS S3, Google Cloud Storage). Она упрощает переключение между поставщиками и одновременную работу с несколькими поставщиками без необходимости изучать разные API.

## Базы данных

* [RocksDB](https://github.com/curiosity-ai/rocksdb-sharp) - Привязка Facebook RocksDB — хранилища «ключ — значение» — к C#, а также нативные сборки для Windows, macOS и Linux.
* [DBreeze](https://github.com/hhblaze/DBreeze) - DBreeze — встраиваемое хранилище «ключ — значение» с открытым исходным кодом.
* [Event Store](https://github.com/EventStore/EventStore) - Функциональная база данных с открытым исходным кодом и обработкой сложных событий на JavaScript.
* [LiteDB](https://github.com/mbdavid/LiteDB) - Документная база данных NoSQL для .NET в одном файле данных — https://www.litedb.org
* [RavenDB](https://github.com/ravendb/ravendb) - Документная база данных для .NET с поддержкой LINQ.
* [Marten](https://github.com/JasperFx/marten) - PostgreSQL как документная база данных и хранилище событий для приложений .NET.
* [Realm Xamarin](https://github.com/realm/realm-dotnet) - Быстрая и удобная альтернатива SQLite и ORM — https://realm.io/docs/dotnet/latest/
* [Streamstone](https://github.com/yevhen/Streamstone) - Хранилище событий для Azure Table Storage.
* [Ignite](https://github.com/apache/ignite) - Распределённая платформа в памяти: документная база данных с поддержкой SQL и LINQ, распределённые вычисления, службы и события.
* [Yessql](https://github.com/sebastienros/yessql) - Документная база данных .NET, работающая с любой реляционной СУБД.
* [JsonFlatFileDataStore](https://github.com/ttu/json-flatfile-datastore) - Простое хранилище данных в плоских файлах JSON с поддержкой типизированных и динамических данных.
* [ZoneTree](https://github.com/koculu/ZoneTree) - Постоянная высокопроизводительная транзакционная упорядоченная база данных «ключ — значение» для .NET, совместимая с ACID.

## Драйверы баз данных

* [DuckDB.NET](https://github.com/Giorgi/DuckDB.NET) - Поставщик данных .NET для DuckDB.
* [MySQL Connector](https://dev.mysql.com/downloads/connector/net/) - Connector/Net — полностью управляемый драйвер ADO.NET для MySQL.
* [Npgsql](https://github.com/npgsql/Npgsql) - Поставщик данных .NET для PostgreSQL.
* [MongoDB](https://github.com/mongodb/mongo-csharp-driver) - Официальный драйвер MongoDB для C#.
* [ServiceStack Redis](https://github.com/ServiceStack/ServiceStack) - Ведущий клиент Redis для C# и .NET.
* [StackExchange Redis](https://github.com/ServiceStack/ServiceStack) - Универсальный клиент Redis от StackExchange.
* [Cassandra](https://github.com/datastax/csharp-driver) - Драйвер DataStax для Apache Cassandra на .NET.
* [Couchbase](https://github.com/couchbase/couchbase-net-client) - Официальная клиентская библиотека Couchbase для .NET на базе клиента Memcached от Enyim.
* [Firebird.NET](https://sourceforge.net/projects/firebird/) - Поставщик данных .NET написан на C# и обеспечивает высокопроизводительную нативную реализацию API Firebird.
* [Rqlite-dotnet](https://github.com/rqlite/rqlite-dotnet) - Клиент .NET для rqlite (распределённой реляционной базы данных на основе SQLite).

## Дата и время

* [NodaTime](https://github.com/nodatime/nodatime) - Noda Time — альтернативный API даты и времени для .NET. Он помогает яснее понимать данные и точнее выражать операции над ними. https://nodatime.org/
* [DateTimeExtensions](https://github.com/joaomatossilva/DateTimeExtensions) - Распространённые операции с датой и временем в виде расширений для `System.DateTime`, включая вычисление праздников и рабочих дней для разных культур.
* [Exceptionless.DateTimeExtensions](https://github.com/exceptionless/Exceptionless.DateTimeExtensions) - DateTimeRange, рабочие дни и различные методы расширения для `DateTime`, `DateTimeOffset` и `TimeSpan`.

## Декомпиляция

* [dnSpy](https://github.com/0xd4d/dnSpy) - Браузер сборок .NET, редактор, декомпилятор и отладчик с открытым исходным кодом.
* [dnSpyEx](https://github.com/dnSpyEx/dnSpy) - Неофициальное возрождение dnSpy.
* [ILSpy](https://ilspy.net/) - ILSpy — браузер сборок .NET и декомпилятор с открытым исходным кодом.
* [dotPeek](https://www.jetbrains.com/decompiler/) - Бесплатный автономный инструмент на основе декомпилятора, входящего в ReSharper. Надёжно декомпилирует любую сборку .NET в эквивалентный код C# или IL и просто создаёт решения Visual Studio на основе исходных двоичных файлов. **[Проприетарное]** **[Бесплатно]**

## Развёртывание
* [DbUp](https://github.com/DbUp/DbUp) - Библиотека .NET для развёртывания изменений в базах данных SQL Server. Она отслеживает уже выполненные SQL-сценарии и запускает сценарии изменений, необходимые для обновления базы данных.


## DirectX

* [Vortice.Windows](https://github.com/amerkoleci/Vortice.Windows) - Кроссплатформенные библиотеки .NET Standard для DirectX, WIC, Direct2D1, XInput, XAudio и X3DAudio.

## Рабочий стол

* [Sucrose Wallpaper Engine](https://github.com/Taiizor/Sucrose) - Sucrose — универсальный движок обоев, оживляющий рабочий стол с помощью широкого набора интерактивных обоев.

## Распределённые вычисления

* [.NEXT Raft](https://github.com/dotnet/dotNext) - Реализация Raft для .NET и ASP.NET Core, позволяющая создавать кластерные микросервисы на основе распределённого консенсуса и репликации.
* [Orleans](https://github.com/dotnet/orleans) - Orleans — фреймворк, упрощающий создание масштабных распределённых вычислительных приложений без необходимости изучать и применять сложные модели параллелизма и масштабирования. Создан Microsoft Research.
* [Orleankka](https://github.com/OrleansContrib/Orleankka) - Orleankka — функциональный API для Microsoft Orleans. Он особенно подходит для сценариев, где нужен компонуемый единообразный интерфейс взаимодействия, например CQRS, источники событий, перенаправление, конечные автоматы и т. д. Также доступен дополнительный API для F# под названием Orleankka.FSharp.
* [Akka.net](https://github.com/akkadotnet/akka.net) - Akka.NET — порт популярного фреймворка Akka для Java/Scala на .NET. Это порт, развиваемый сообществом и не связанный с Typesafe, создавшей исходную версию для Java/Scala.
* [Zebus](https://github.com/Abc-Arbitrage/Zebus) - Zebus — лёгкая и универсальная одноранговая шина служб, разработанная с учётом принципов CQRS. Она обеспечивает простое и быстрое взаимодействие приложений. Большая часть сложности скрыта в библиотеке, поэтому можно сосредоточиться на полезном коде, а не на отладке обмена сообщениями. Фундаментальная основа для любого распределённого приложения.
* [protoactor-dotnet](https://github.com/AsynkronIT/protoactor-dotnet) - Proto Actor — сверхбыстрые распределённые акторы для Golang и C#.

## DLR

## Документация

* [Sandcastle](https://github.com/EWSoftware/SHFB) - Sandcastle Help File Builder — аналог NDoc.
* [SourceBrowser](https://github.com/KirillOsenkov/SourceBrowser) - Генератор веб-сайтов для просмотра исходного кода, на котором работает https://referencesource.microsoft.com
* [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.WebApi) - Легко добавляет Swagger в проекты Web API.
* [F# Formatting](https://fsprojects.github.io/FSharp.Formatting/) - Инструменты документирования проектов F# и C# по файлам сценариев F#, документам Markdown и встроенным комментариям XML или Markdown.
* [DocFX](https://github.com/dotnet/docfx) - Инструменты сборки и публикации документации API для проектов .NET.
* [DocNet](https://github.com/FransBouma/DocNet) - Удобный генератор статической документации, создающий содержимое на основе файлов Markdown.
* [HubDocs](https://github.com/mberrishdev/HubDocs) - Инструмент интерфейса, похожий на Swagger, для концентраторов SignalR: автоматически находит концентраторы, позволяет изучать методы, вызывать их и просматривать сообщения клиентов в реальном времени.

## Электронная коммерция и платежи

* [NopCommerce](https://github.com/nopSolutions/nopCommerce) - nopCommerce — бесплатная корзина интернет-магазина с открытым исходным кодом на ASP.NET Core.
* [ServiceStack.Stripe](https://github.com/ServiceStack/ServiceStack) - Типизированные клиенты .NET для REST API stripe.com.
* [SmartStoreNET](https://github.com/smartstore/Smartstore) - Бесплатное решение корзины интернет-магазина на ASP.NET Core MVC.
* [Stripe.Net](https://github.com/stripe/stripe-dotnet) - Stripe.net — полнофункциональный API .NET для https://stripe.com/
* [Virto Commerce](https://github.com/VirtoCommerce/vc-platform) - Virto Commerce — второе поколение продукта и единственная корпоративная платформа электронной коммерции, полностью доступная по лицензии с открытым исходным кодом. Она основана на .NET 4.5 и широко использует MVC, IoC, EF, Azure, AngularJS и другие передовые технологии. Её можно развернуть в Microsoft Cloud (Azure), Amazon Web Services (AWS) и локально. https://virtocommerce.com
* [SimplCommerce](https://github.com/simplcommerce/simplcommerce) - Очень простая система электронной коммерции на .NET Core: удобная в использовании и настройке. Благодаря .NET Core SimplCommerce работает в Windows и Linux и поддерживает разные реляционные СУБД: Microsoft SQL Server, PostgreSQL и MySQL.
* [GrandNode](https://github.com/grandnode/grandnode2) - Headless-платформа электронной коммерции с несколькими продавцами и арендаторами, одна из самых продвинутых платформ с открытым исходным кодом на .NET Core 5.0 и MongoDB.
* [Adyen](https://github.com/Adyen/adyen-dotnet-api-library) - Официальная библиотека Payment API Adyen для .NET.

## Эмуляторы

* [Blzhawk](https://github.com/TASEmulators/BizHawk) - BizHawk — мультисистемный эмулятор на C#. Помимо полноэкранного режима и поддержки геймпадов, он предоставляет любителям игр полные средства повторной записи и отладки для ядер всех систем.

## Управление окружением

* [Dotnet CLI](https://github.com/dotnet/sdk) - Кроссплатформенная утилита командной строки из инструментария .NET Core.

## ETL

* [Cinchoo ETL](https://github.com/Cinchoo/ChoETL) - ETL-фреймворк для .NET (чтение и запись файлов CSV, плоских файлов, XML, JSON и формата «ключ — значение»).
* [EtlBox.Classic](https://github.com/rpsft/etlbox) - Лёгкая библиотека ETL (извлечение, преобразование, загрузка) и набор инструментов интеграции данных для .NET на базе Microsoft TPL.Dataflow.

## Агрегаторы событий и обмен сообщениями

* [Mediator.Net](https://github.com/mayuanyang/Mediator.Net) - Простой посредник для .NET с поддержкой конвейеров для отправки команд, публикации событий и шаблона «запрос — ответ».
* [MediatR](https://github.com/jbogard/MediatR) - Простая и непритязательная реализация посредника для .NET.
* [EventFlow](https://github.com/eventflow/EventFlow) - EventFlow — фреймворк DDD для .NET, ориентированный на async/await, CQRS и источники событий.
* [LiteBus](https://github.com/litenova/LiteBus) - Простой в использовании внутрипроцессный посредник, предоставляющий основу для реализации разделения команд и запросов (CQS).

## Исключения
* [Exceptionless](https://github.com/exceptionless/Exceptionless.Net) - Клиент Exceptionless для .NET.

## Библиотеки расширений
* [ExtensionMethods.Net](https://www.extensionmethod.net/csharp) - Сайт с коллекцией методов расширения.

## Управление функциями
* [Microsoft.FeatureManagement](https://github.com/microsoft/FeatureManagement-Dotnet) - Библиотека позволяет разрабатывать и предоставлять функции приложения на основе флагов функций. Она поддерживает, например, поэтапное включение новых функций и A/B-тестирование, а также интегрируется с распространёнными шаблонами разработки .NET и ASP.NET Core.
* [OpenFeature](https://openfeature.dev) - OpenFeature — открытый стандарт управления флагами функций с единым API и SDK, позволяющий отделить оценку флагов от реализаций конкретных поставщиков. Он способствует совместимости, гибкости и стандартизации управления флагами в разных инструментах и платформах.

## Функциональное программирование
* [language-ext](https://github.com/louthy/language-ext) - Библиотека активно использует возможности C# 6+, предоставляя функциональную «базовую библиотеку классов», которая при желании может показаться расширением самого языка. Также включает похожую на Erlang систему процессов (акторов), которая при необходимости сохраняет сообщения и состояние в Redis (для обмена сообщениями внутри приложения Redis не обязателен). Кроме того, система процессов поддерживает Rx-потоки сообщений и состояния, образуя полноценную систему реактивных событий и диспетчеризации сообщений.
* [MoreLinq](https://github.com/MoreLinq/MoreLinq) - Добавляет методы для LINQ to Objects.

## Игры

* [MonoGame](https://github.com/MonoGame/MonoGame) - Единый фреймворк для создания мощных кроссплатформенных игр.
* [FNA](https://github.com/FNA-XNA/FNA) - FNA — повторная реализация XNA4, цель которой — создать полностью точную среду выполнения XNA4 для настольных компьютеров.
* [Duality](https://github.com/AdamsLair/duality) - Duality — фреймворк для разработки 2D-игр, ориентированный на модульность и включающий визуальный редактор.
* [Stride Game Engine](https://stride3d.net/ ) - Кроссплатформенный игровой движок Stride для 2D/3D с редактором сцен, частицами, физически корректным рендерингом (PBR), сценариями и многим другим.
* [Wave Engine](https://waveengine.net/Engine) - Wave Engine — бесплатный современный компонентный игровой движок на C# для создания кроссплатформенных игр с поддержкой Kinect, Oculus Rift, Vuforia, Cardboard, Leap Motion и многого другого. **[Бесплатно][Проприетарное]**
* [Nez](https://github.com/prime31/Nez) - Nez — бесплатный фреймворк, ориентированный на 2D и совместимый с MonoGame и FNA.
* [BEPUphysics](https://github.com/bepu/bepuphysics2) - BEPUphysics — чистая библиотека трёхмерной физики на C#.
* [osu!framework](https://github.com/ppy/osu-framework) - 2D-приложение/игра, созданное с расчётом на потрясающие игры.
* [DotRecast](https://github.com/ikpil/DotRecast) - Порт Recast и Detour — набора инструментов навигационных сеток для игр, Unity3D, серверов и C#.
* [Foster](https://github.com/FosterFramework/Foster) - Foster — небольшой кроссплатформенный фреймворк для 2D-игр на C#.
* [Friflo.Engine.ECS](https://github.com/friflo/Friflo.Engine.ECS) - Высокопроизводительная ECS на C# с простым API. Поддерживает .NET, WASM/WebAssembly, Native AOT, Unity, Godot, MonoGame и др.
* [Box2D.NET](https://github.com/ikpil/Box2D.NET) - Порт Box2D на C# — двумерного физического движка для игр, серверов и Unity3D.

## ГИС

 * [NetTopologySuite](https://github.com/NetTopologySuite/NetTopologySuite/)  Быстрое и надёжное ГИС-решение .NET для платформы .NET.
 * [OsmSharp](https://www.osmsharp.com/) - Библиотека C# для работы с данными OpenStreetMap (OSM): чтение, запись и построение маршрутов.
 * [GeoJSON.NET](https://github.com/GeoJSON-Net/GeoJSON.Net) - Библиотека .NET для типов GeoJSON и соответствующих сериализаторов/десериализаторов Json.Net.
 * [CoordinateSharp](https://github.com/Tronald/CoordinateSharp) - Удобный разбор и преобразование форматов координат, а также вычисление сведений о местоположении на основе положения Солнца и Луны.
 * [DEM Net Elevation API](https://github.com/dem-net/dem.net) - Библиотека .NET для цифровых моделей рельефа, позволяющая создавать трёхмерный ландшафт в форматах glTF и STL.

## Инструменты Git

* [Husky.Net](https://github.com/alirezanet/Husky.Net) - Упрощает работу с хуками Git благодаря встроенному исполнителю задач Husky.Net. Можно проверять сообщения коммитов, запускать тесты, анализировать код и выполнять другие действия при коммите или отправке. Поддерживаются сценарии C#, хуки Gitflow и несколько состояний файлов (индекс, последний коммит, glob).
* [GitExtensions](https://github.com/gitextensions/gitextensions) - GitExtensions — расширение оболочки, плагин для Visual Studio 2008/2010/2012/2013 и автономный инструмент для работы с репозиториями Git. https://gitextensions.github.io/
* [GitVersion](https://github.com/GitTools/GitVersion) - Создание номера семантической версии на основе состояния репозитория Git.
* [LibGit2Sharp](https://github.com/libgit2/libgit2sharp) - LibGit2Sharp переносит всю мощь и скорость нативной реализации Git libgit2 в управляемую среду .NET и Mono.
* [posh-git](https://github.com/dahlbyk/posh-git) - Среда PowerShell для Git.
* [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) - Помогает решать проблемы с учётными данными.

## Графика

* [Oxyplot](https://github.com/oxyplot/) - Кроссплатформенная библиотека построения графиков для .NET.
* [OpenTK](https://github.com/opentk/opentk) - Open Toolkit — продвинутая низкоуровневая библиотека C#, предоставляющая обёртки над OpenGL, OpenCL и OpenAL.
* [Aspose.Drawing](https://products.aspose.com/drawing/net) - Полностью управляемая кроссплатформенная библиотека двумерной графики для рисования текста, геометрических фигур и изображений с API, совместимым с System.Drawing. **[$]**
* [ScottPlot](https://swharden.com/scottplot/) - Библиотека интерактивного построения графиков для больших наборов данных: линейные графики, столбчатые и круговые диаграммы, точечные графики и многое другое. Поддерживает WinForms, WPF, Avalonia и консоль.
* [LiveCharts2](https://github.com/beto-rodriguez/LiveCharts2) - Простые, гибкие, интерактивные и мощные диаграммы, карты и индикаторы для .NET. LiveCharts2 поддерживает WPF, WinForms, Xamarin, Avalonia, WinUI и UWP.
* [Helix Toolkit](https://github.com/helix-toolkit/helix-toolkit) - Helix Toolkit — набор компонентов трёхмерной графики для .NET.
* [AssimpNet](https://bitbucket.org/Starnick/assimpnet) - Кроссплатформенная обёртка .NET Standard для Open Asset Importer («Assimp»). Библиотека позволяет импортировать, обрабатывать и экспортировать трёхмерные модели для визуализации в графических и игровых приложениях. Поддерживается импорт более 40 форматов (например, OBJ, FBX, GLTF, 3DS, Collada) и экспорт в некоторые из них (например, OBJ, GLTF, 3DS, Collada). Средства обработки сеток позволяют создавать и оптимизировать данные сеток для визуализации в реальном времени.
* [Silk.NET](https://github.com/dotnet/Silk.NET) - Кроссплатформенная высокопроизводительная низкоуровневая обёртка .NET Standard для множества современных API, включая OpenGL, OpenCL, OpenAL, OpenXR, Assimp и GLFW. Помимо обёрток над нативными API, включает собственные абстракции окон и ввода. Это упрощает разработку игр и приложений на Silk.NET и предоставляет почти всё необходимое разработчику 3D-приложений.
* [Veldrid](https://github.com/mellinoe/veldrid) - Низкоуровневая переносимая графическая и вычислительная библиотека для .NET.
* [VectSharp](https://github.com/arklumpus/VectSharp) - Библиотека .NET для создания векторной графики и текста с последующим экспортом в PDF, SVG и растровые форматы.

## GraphQL
* [GraphQL.NET](https://github.com/graphql-dotnet/graphql-dotnet) - Реализация [GraphQL от Facebook](https://github.com/graphql/graphql-spec) на .NET.
* [HotChocolate](https://github.com/ChilliCream/hotchocolate) - Сервер GraphQL, совместимый со всеми клиентами, поддерживающими GraphQL, включая Strawberry Shake, Relay, Apollo Client и различные другие клиенты и инструменты.
* [EntityGraphQL](https://github.com/EntityGraphQL/EntityGraphQL) - Библиотека для создания API GraphQL поверх модели данных с возможностью легко объединять несколько источников данных в одной схеме GraphQL (Entity Framework не обязателен: подойдёт любая ORM с LinqProvider или объект в памяти).
* [ZeroQL](https://github.com/byme8/ZeroQL) - Высокопроизводительный клиент GraphQL, удобный для C#. Поддерживает синтаксис в стиле LINQ, не требует Reflection.Emit или выражений и обеспечивает производительность, близкую к прямому HTTP-вызову.

## Графический интерфейс

### GUI — фреймворки

* [Avalonia](https://github.com/AvaloniaUI/Avalonia) - Мультиплатформенный UI-фреймворк .NET, ранее известный как Perspex.
* [Windows UI Library](https://github.com/microsoft/microsoft-ui-xaml) - Windows UI Library (WinUI) предоставляет официальные нативные элементы управления и функции Microsoft для приложений Windows UWP.
* [UNO Platform](https://github.com/unoplatform) - Единственная платформа для создания нативных мобильных и настольных приложений и приложений WebAssembly на C# и XAML из единой кодовой базы. Открытый исходный код и профессиональная поддержка. Сайт: [platform.uno](https://platform.uno/)
* [Xamarin.Forms](https://github.com/xamarin/Xamarin.Forms) - Создание нативных интерфейсов для iOS, Android и Windows из общей кодовой базы C#.
* [Eto.Forms](https://github.com/picoe/Eto) - Кроссплатформенный графический фреймворк для настольных и мобильных приложений на .NET и Mono.
* [Gtk#](https://github.com/mono/gtk-sharp) - Gtk# — привязка Gtk+ к Mono/.NET для кроссплатформенной разработки графических интерфейсов и основа большинства GUI-приложений на Mono.
* [QtSharp](https://github.com/ddobrev/QtSharp) - Привязки Qt для Mono/.NET.
* [SciterSharp](https://github.com/ramon-mendes/SciterSharp) - Создание кроссплатформенных настольных приложений .NET с помощью HTML и всех возможностей движка Sciter: CSS3, SVG, сценариев, AJAX, &lt;video&gt; и др. Sciter бесплатен для коммерческого использования.
* [XWT](https://github.com/mono/xwt) - Кроссплатформенный инструментарий пользовательского интерфейса для настольных приложений на .NET и Mono.
* [Qml.Net](https://github.com/qmlnet/qmlnet) - Кроссплатформенная интеграция Qml и .NET для Mono/.NET/.NET Core.
* [Lara](https://github.com/integrativesoft/lara) - Lara Web Engine — библиотека для разработки веб-интерфейсов на C# (альтернатива Blazor Server-Side).
* [Neutronium](https://github.com/NeutroniumCore/Neutronium) - Создание настольных приложений .NET с использованием HTML, CSS, JavaScript и привязок MVVM, например WPF.
* [photino.NET](https://github.com/tryphotino/photino.NET) - Photino — лёгкий фреймворк с открытым исходным кодом для создания нативных кроссплатформенных настольных приложений с использованием веб-технологий пользовательского интерфейса.
  
### GUI — наборы стилизованных элементов управления

* [Modern UI for WPF - MUI](https://github.com/firstfloorsoftware/mui) - Набор элементов управления и стилей для преобразования приложений WPF в привлекательные приложения с современным интерфейсом.
* [MahApps.Metro](https://github.com/MahApps/MahApps.Metro) - Инструментарий для создания приложений WPF в стиле Metro.
* [MaterialSkin](https://github.com/IgnaceMaes/MaterialSkin) - Тематическое оформление .NET WinForms на C# или VB.Net в соответствии с принципами Material Design от Google.
* [AdonisUI](https://github.com/benruehl/adonis-ui) - Лёгкий инструментарий интерфейса для приложений WPF с классическим, но улучшенным оформлением Windows.
* [Bunifu UI Framework](https://bunifuframework.com) - Тщательно разработанные элементы управления и компоненты WinForms для создания впечатляющих современных интерфейсов приложений. **[$]**
* [HandyControl](https://github.com/HandyOrg/HandyControl) - Содержит простые и часто используемые элементы управления WPF.
* [MaterialDesignInXamlToolkit](http://materialdesigninxaml.net/) - Инструментарий для создания приложений WPF в стиле Material Design.
* [UWP Community Toolkit](https://github.com/windows-toolkit/WindowsCommunityToolkit) - UWP Community Toolkit — набор вспомогательных функций, пользовательских элементов управления и служб приложений. Он упрощает распространённые задачи разработки приложений UWP для Windows 10 и демонстрирует их выполнение.
* [Empty Keys UI](https://www.emptykeys.com/ui_library/) - Мультиплатформенная и мультимодульная библиотека интерфейсов на основе XAML. **[Бесплатно][Проприетарное]**

### GUI — прочее

* [Callisto](https://github.com/timheuer/callisto) - Набор элементов управления для приложений Windows 8 на XAML. Включает компоненты, упрощающие создание приложений в стиле Windows UI для Windows Store согласно рекомендациям Windows UI.
* [WinApi](https://github.com/prasannavl/WinApi) - Простая, прямая и сверхтонкая библиотека CLR для высокопроизводительного взаимодействия с нативным Win32, с помощниками для автоматизации, окон, DirectX, OpenGL и Skia.
* [ObjectListView](http://objectlistview.sourceforge.net/cs/index.html) - ObjectListView — обёртка C# над .NET ListView, упрощающая его использование и добавляющая новые возможности.
* [DockPanelSuite](https://sourceforge.net/projects/dockpanelsuite/) - Библиотека стыковки для .NET WinForms, вдохновлённая Visual Studio.
* [AvalonEdit](https://github.com/icsharpcode/AvalonEdit) - Компонент текстового редактора на WPF, используемый в SharpDevelop.

## HTML и CSS

* [AngleSharp](https://github.com/AngleSharp/AngleSharp) - Полная реализация построения HTML5 DOM и CSS3 OM.
* [dotless](https://github.com/dotless/dotless) - Порт библиотеки Ruby Less CSS для .NET http://www.dotlesscss.org
* [ExCSS](https://github.com/TylerBrinks/ExCSS) - Библиотека парсера CSS3 для C#.
* [HtmlAgilityPack](https://html-agility-pack.net/?z=codeplex) - Гибкий парсер HTML, создающий DOM для чтения и записи и поддерживающий обычный XPath и XSLT.
* [LibSass Host](https://github.com/Taritsyn/LibSassHost) - Обёртка .NET для библиотеки [libSass](https://sass-lang.com/libsass) с поддержкой виртуальной файловой системы.

## HTTP

* [RestSharp](https://github.com/restsharp/RestSharp) - Простой клиент REST и HTTP API для .NET.
* [Flurl](https://flurl.dev) - Гибкая, переносимая и тестируемая клиентская библиотека REST/HTTP.
* [Refit](https://github.com/reactiveui/refit) - Автоматическая типобезопасная REST-библиотека для Xamarin и .NET.
* [WebApiClient](https://github.com/dotnetcore/WebApiClient) Проект с открытым исходным кодом на базе HttpClient. Достаточно определить интерфейс на C# и настроить соответствующие атрибуты, чтобы асинхронно вызывать клиентскую библиотеку удалённого HTTP-интерфейса.
* [Apizr](https://github.com/Respawnsive/Apizr) Клиент веб-API на основе Refit с повышенной отказоустойчивостью (повторные попытки, подключение, кэш, аутентификация, журналирование, приоритет и т. д.).
* [Fluxzy.Core](https://github.com/haga-rak/fluxzy.core) - Полностью управляемая потоковая библиотека «человек посередине» для перехвата, записи и изменения трафика HTTP/1.1, H2 и WebSocket по открытым и защищённым каналам.
* [NotoriousClient](https://github.com/Notorious-Coding/Notorious-Client) – Строго типизированный расширяемый HTTP-клиент с гибким построителем запросов, потоковой передачей и multipart. Построен на .NET HttpRequestMessage.

## IDE
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - Полнофункциональная интегрированная среда разработки.
* [Waf DotNetPad](https://jbe2277.github.io/dotnetpad/) - Простой и быстрый редактор кода, позволяющий с удовольствием программировать на C# или Visual Basic.
* [Visual Studio Code](https://code.visualstudio.com/) - Отличный редактор с открытым исходным кодом от Microsoft на базе Electron.
* [Ionide](http://ionide.io/) - Набор пакетов для редакторов Atom и Visual Studio Code для кроссплатформенной разработки на F#.
* [Rider](https://www.jetbrains.com/rider/) - Кроссплатформенная IDE C# на платформе IntelliJ и ReSharper.
* [RoslynPad](https://github.com/aelij/RoslynPad) - Простой редактор C# на базе Roslyn и AvalonEdit.
* [Consulo](https://consulo.io) - Кроссплатформенная IDE с поддержкой C# и Java, ответвление IntelliJ IDEA Community Edition.
* [vvvv](https://visualprogramming.net) Визуальная среда интерактивного программирования для .NET. **[Бесплатно для ПО с открытым исходным кодом]**
* [CSharp Analyzer by MongoDB](https://github.com/mongodb/mongo-csharp-analyzer) Бесплатное расширение Visual Studio для пользователей MongoDB, помогающее преобразовывать код в запросы MongoDB.

## Обработка изображений

* [ImageWizard](https://github.com/usercode/ImageWizard) - Веб-служба обработки изображений на ASP.NET Core и ImageSharp / SkiaSharp / SvgNet / DocNET.
* [ImageResizer](https://imageresizing.net/) - Добавляйте команды к URL изображений, чтобы за миллисекунды получать изменённые версии: масштабировать, редактировать и т. д. можно в реальном времени.
* [ImageSharp](https://github.com/SixLabors/ImageSharp) - Полностью управляемая кроссплатформенная библиотека для обработки файлов изображений.
* [MagicScaler](https://github.com/saucecontrol/PhotoSauce) - Высокопроизводительный конвейер обработки изображений для .NET, упрощающий сложные задачи обработки.
* [MetadataExtractor](https://github.com/drewnoakes/metadata-extractor-dotnet) - Извлекает из файлов изображений метаданные Exif, IPTC, XMP, ICC и другие.
* [Emgu CV](http://www.emgu.com/wiki/index.php/Main_Page) - Кроссплатформенная обёртка .NET для библиотеки OpenCV.
* [SimpleITK](https://simpleitk.org/) - Упрощённый способ работы с Insight. Библиотека анализа многомерных изображений с открытым исходным кодом для Python, R, Java, C#, Lua, Ruby, TCL и C++. Разработана сообществом Insight Toolkit для биомедицины и других областей.
* [Magick.NET](https://github.com/dlemstra/Magick.NET) - Обёртка .NET для библиотеки ImageMagick.
* [OpenCvSharp](https://github.com/shimat/opencvsharp/) - Кроссплатформенная обёртка OpenCV для .NET Framework.
* [PixelViewer](https://github.com/carina-studio/PixelViewer) - Кроссплатформенная программа просмотра изображений для Windows/macOS/Linux, считывающая необработанные данные пикселей яркости/YUV/RGB/ARGB/Bayer из файлов и отображающая их. Начиная с версии 1.99+ поддерживаются также YUV 10/16 бит и просмотр последовательностей кадров.
* [Colourful](https://github.com/tompazourek/Colourful) - Библиотека .NET с открытым исходным кодом для работы с цветовыми пространствами.
* [Unicolour](https://github.com/waacton/Unicolour) - Преобразование, интерполяция и сравнение цветов для .NET.

## Инструменты установки

* [Wix Toolset](https://github.com/wixtoolset/wix) - Самый мощный набор инструментов для создания процесса установки приложений Windows.
* [Squirrel](https://github.com/squirrel/squirrel.windows) - Squirrel — набор инструментов и библиотека для полного управления установкой и обновлением настольного приложения Windows.
* [Chocolatey](https://github.com/chocolatey/choco) - Аналог `yum` или `apt-get` для Windows.
* [Onova](https://github.com/Tyrrrz/Onova) - Непредвзятый фреймворк автоматического обновления настольных приложений.

## Интерактивное программирование

* [.NET Interactive](https://github.com/dotnet/interactive) - .NET Interactive привносит возможности .NET в интерактивные сценарии.

## Интернационализация

* [MessageFormat.NET](https://github.com/jeffijoe/MessageFormat.NET) - Реализация ICU MessageFormat для .NET, позволяющая создавать контекстные сообщения пользовательского интерфейса (библиотека PCL).
* [ResX Resource Manager](https://github.com/dotnet/ResXResourceManager) - Самый популярный бесплатный инструмент локализации приложений разных типов с использованием ресурсов resx.

## Взаимодействие

* [CppSharp](https://github.com/mono/CppSharp) - Инструменты для предоставления API C++ в C#.
* [pythonnet](https://github.com/pythonnet/pythonnet) - Фреймворк взаимодействия Python и .NET.
* [pinvoke](https://github.com/dotnet/pinvoke) - Библиотека с кодом P/Invoke для последних версий Windows.
* [Pyrolite](https://github.com/irmen/Pyrolite) - Эта библиотека позволяет легко подключать программы на Java или .NET к миру Python.
Она использует протокол Pyro для вызова методов удалённых объектов.

## IoC
* [Autofac](https://github.com/autofac/Autofac) - Удобный IoC-контейнер для .NET.
* [DryIoc](https://github.com/dadhi/DryIoc) - Простой, быстрый и полнофункциональный IoC-контейнер.
* [Ninject](https://github.com/ninject/ninject) - Ниндзя среди контейнеров внедрения зависимостей .NET.
* [Spring.Net](https://github.com/spring-projects/spring-net) - Spring.NET — платформа приложений с открытым исходным кодом, упрощающая создание корпоративных приложений .NET.
* [Lamar](https://jasperfx.github.io/lamar/) - Быстрый IoC-контейнер, оптимизированный для ASP.NET Core и других серверных приложений .NET.
* [LightInject](https://github.com/seesharper/LightInject) - Сверхлёгкий IoC-контейнер.
* [Simple Injector](https://github.com/simpleinjector/SimpleInjector) - Удобная библиотека внедрения зависимостей (DI) для .NET 4+, поддерживающая Silverlight 4+, Windows Phone 8, Windows 8 (включая универсальные приложения) и Mono.
* [Microsoft.Extensions.DependencyInjection](https://github.com/dotnet/runtime/tree/main/src/libraries/Microsoft.Extensions.DependencyInjection) - IoC-контейнер по умолчанию для приложений .NET.
* [Scrutor](https://github.com/khellang/Scrutor) - Расширения сканирования сборок для Microsoft.Extensions.DependencyInjection.
* [VS MEF](https://github.com/Microsoft/vs-mef) - Реализация Managed Extensibility Framework (MEF), используемая в Visual Studio.
* [Stashbox](https://github.com/z4kn4fein/stashbox) - Лёгкий переносимый фреймворк внедрения зависимостей для решений на .NET.

## Движки JavaScript

* [ClearScript](https://github.com/Microsoft/ClearScript) - Библиотека, упрощающая добавление сценариев в приложения .NET. Сейчас поддерживаются JavaScript (через V8 и JScript) и VBScript.
* [Edge.js](https://github.com/tjanczuk/edge) - Выполнение кода .NET и Node.js в одном процессе в Windows, macOS и Linux.
* [Jint](https://github.com/sebastienros/jint) - Интерпретатор JavaScript для .NET с полной совместимостью с ECMA 5.1, работающий на любой платформе .NET.
* [Jurassic](https://github.com/paulbartrum/jurassic) - Реализация языка и среды выполнения ECMAScript. Цель проекта — предоставить для .NET самую производительную и наиболее соответствующую стандартам реализацию JavaScript.
* [YantraJS](https://github.com/yantrajs/yantra) - Среда выполнения JavaScript (аналог NodeJS) для .NET Standard, компилирующая JavaScript в IL и поддерживающая многие функции ES6, генераторы, модули CommonJS и CSX, а также компилятор выражений.

## Журналирование

* [NLog](https://github.com/nlog/NLog/) - NLog — продвинутая библиотека журналирования для .NET и Silverlight.
* [Logazmic](https://github.com/ihtfw/Logazmic) - Просмотрщик NLog с открытым исходным кодом для Windows.
* [ELMAH](https://elmah.github.io/) - Официальный сайт ELMAH.
* [Elmah MVC](https://github.com/alexbeletsky/elmah-mvc) - Elmah для MVC.
* [Logary](https://github.com/logary/logary) - Logary — высокопроизводительная библиотека журналирования, метрик, трассировки и проверки работоспособности с несколькими целевыми системами для Mono и .NET. Аналог DropWizard для .NET. Поддерживает множество целей и предназначена для микросервисов.
* [Log4Net](https://logging.apache.org/log4net/) - Библиотека Apache log4net помогает программистам выводить записи журнала в различные целевые системы.
* [Rollbar.NET](https://github.com/rollbar/Rollbar.NET) - Упрощает удалённый мониторинг ошибок в реальном времени с помощью Rollbar.com. Открытый SDK-уведомитель Rollbar для любого технологического стека на .NET. Подходит для приложений на .NET Core 2.0+, .NET Standard 2.0+, .NET Full Framework 4.5.1+, Mono, Xamarin и, в целом, любой реализации .NET Standard 2.0+. Упрощает создание полезной нагрузки на основе исключений, данных трассировки, информационных сообщений и телеметрии, а также отправляет её в API Rollbar для удалённого мониторинга и анализа поведения приложения. **[Подключается к проприетарной службе]** **[Бесплатный тариф]**
* [Sentry](https://github.com/getsentry/sentry-dotnet) - SDK .NET для [Sentry](https://sentry.io/welcome/) — отслеживания ошибок с открытым исходным кодом, которое помогает разработчикам наблюдать за сбоями и устранять их в реальном времени.
* [Serilog](https://github.com/serilog/serilog) - Простая и практичная библиотека журналирования для эпохи NoSQL. Объединяет лучшие подходы традиционного и структурированного диагностического журналирования в удобном пакете.
* [StackExchange.Exceptional](https://github.com/NickCraver/StackExchange.Exceptional) - Обработчик ошибок, используемый сетью Stack Exchange.
* [ULogViewer](https://github.com/carina-studio/ULogViewer) - Универсальный кроссплатформенный просмотрщик журналов для Windows/macOS/Linux, читающий и разбирающий различные типы журналов. Можно также задать собственный профиль разбора и отображения.
* [Foundatio](https://github.com/FoundatioFx/Foundatio#logging) - Гибкий API журналирования для записи сообщений во всём приложении.
* [Exceptionless](https://github.com/exceptionless/Exceptionless.Net) - Клиент Exceptionless для .NET.
* [Loupe](https://onloupe.com) - Централизованное журналирование и мониторинг для .NET. **[Проприетарное]** **[Бесплатный тариф]**
* [elmah.io](https://elmah.io) - Облачное журналирование веб-приложений .NET с помощью ELMAH. Находите ошибки до запуска в эксплуатацию. Мощный поиск, API, интеграция со Slack, GitHub, Visual Studio и др. **[[Бесплатно для ПО с открытым исходным кодом](https://elmah.io/sponsorship/opensource)]** **[$]**
* [BugSnag](https://docs.bugsnag.com/platforms/dotnet/) - Записывает ошибки и полезные диагностические данные, например стек вызовов, сеанс и выпуск. Есть бесплатный тариф. **[Бесплатно для ПО с открытым исходным кодом][$]**
* [ZeroLog](https://github.com/Abc-Arbitrage/ZeroLog) - ZeroLog — библиотека журналирования .NET без выделения памяти. Предоставляет базовые функции журналирования для приложений, чувствительных к задержкам, где сборка мусора нежелательна.
* [AutoLoggerMessage](https://github.com/stbychkov/AutoLoggerMessage) - Генератор исходного кода, автоматически преобразующий все вызовы журналирования в высокопроизводительную версию `LoggerMessage`.

## Машинное обучение и наука о данных
* [Infer.NET](https://dotnet.github.io/infer/) - Фреймворк для байесовского вывода в графических моделях. Также подходит для вероятностного программирования.
* [Catalyst](https://github.com/curiosity-ai/catalyst) Кроссплатформенная библиотека обработки естественного языка (NLP), вдохновлённая spaCy: предварительно обученные модели, готовая поддержка обучения векторных представлений слов и документов и гибкие модели распознавания сущностей. Часть [SciSharp Stack](https://scisharp.github.io/SciSharp/).
* [FsLab](https://fslab.org/) - Набор библиотек науки о данных и машинного обучения для F# и .NET.
* [GeneticSharp](https://github.com/giacomelli/GeneticSharp) - Мультиплатформенная библиотека генетических алгоритмов для .NET Core и .NET Framework. Включает несколько реализаций операторов генетического алгоритма: отбора, скрещивания, мутации, реинсерции и завершения.
* [ML.NET](https://github.com/dotnet/machinelearning) - Кроссплатформенный фреймворк машинного обучения с открытым исходным кодом, делающий машинное обучение доступным разработчикам .NET.
* [F# Data](https://github.com/fsprojects/FSharp.Data) - Поставщики типов F# для доступа к XML-, JSON-, CSV- и HTML-файлам (на основе образцов документов) и данным World Bank.
* [SciSharp STACK](https://scisharp.github.io/SciSharp/) - Развитая экосистема машинного обучения для .NET, созданная портированием наиболее популярных библиотек Python на C#.
* [OpenGA.Net](https://github.com/asarnaout/OpenGeneticAlgorithm.NET) - Библиотека генетических алгоритмов .NET для решения задач оптимизации с расширяемыми операторами и адаптивным выбором стратегий.

## Обработчики Markdown
* [F# Formatting](https://fsprojects.github.io/FSharp.Formatting/) - Инструменты документирования проектов F# и C#. Расширяемый парсер Markdown является основным компонентом библиотеки.
* [markdig](https://github.com/lunet-io/markdig) - Быстрый, мощный, расширяемый обработчик Markdown для .NET, совместимый с CommonMark.

## Почта

* [MailKit](https://github.com/jstedfast/MailKit) - Полный кроссплатформенный стек электронной почты с поддержкой IMAP, POP3, SMTP, аутентификации и многого другого. Построен на MimeKit.
* [MailKitSimplified](https://github.com/danzuep/MailKitSimplified) - Полнофункциональная гибкая обёртка для MailKit, упрощающая отправку _и получение_ электронных писем.
* [MimeKit](https://github.com/jstedfast/MimeKit) - Кроссплатформенная библиотека .NET для создания и разбора MIME с поддержкой S/MIME, PGP, TNEF и файловых хранилищ Unix mbox.
* [PreMailer.Net](https://github.com/milkshakesoftware/PreMailer.Net) - Библиотека C#, перемещающая таблицы стилей во встроенные атрибуты стиля для максимальной совместимости с почтовыми клиентами.
* [StrongGrid](https://github.com/Jericho/StrongGrid) - Клиент API SendGrid v3. Позволяет отправлять электронные письма, массово импортировать контакты, управлять списками и сегментами, создавать пользовательские поля списков и многое другое. Также включает парсер веб-перехватчиков SendGrid.

## Математика

* [MathFlow](https://github.com/Nonanti/MathFlow) - Универсальная библиотека математических выражений с поддержкой символьных вычислений, включая дифференцирование, упрощение и решение уравнений.
* [MathNet](https://www.mathdotnet.com/) - Math.NET — инициатива с открытым исходным кодом по разработке и сопровождению наборов инструментов для фундаментальной математики, отвечающих как сложным, так и повседневным потребностям разработчиков .NET.
* [Microsoft Automatic Graph Layout](https://github.com/Microsoft/automatic-graph-layout) - Набор инструментов для компоновки и просмотра графов.
* [ALGLIB](https://www.alglib.net/) - ALGLIB — кроссплатформенная библиотека численного анализа и обработки данных. Поддерживает несколько языков программирования (C++, C#, Delphi) и операционных систем (Windows и POSIX, включая Linux). **[Проприетарная]** и **[Бесплатная редакция]**
* [GeometRi](https://github.com/RiSearcher/GeometRi.CSharp) - Простая и лёгкая библиотека вычислительной геометрии для .NET.
* [Rationals](https://github.com/tompazourek/Rationals) - Реализация арифметики рациональных чисел произвольной точности для .NET.
* [MKL.NET](https://github.com/AnthonyLloyd/MKL.NET) - Простой кроссплатформенный API .NET для Intel MKL.
* [AngouriMath](https://github.com/asc-community/AngouriMath) - Библиотека символьной математики и компьютерной алгебры с открытым исходным кодом, созданная преимущественно для C# и F#. Предоставляет широкий набор функций и может рассматриваться как альтернатива SymPy для .NET.
* [WPF-Math](https://github.com/ForNeVeR/wpf-math) - Библиотека .NET для отображения математических формул в стиле вёрстки LaTeX во фреймворке WPF.
* [Jodo.Numerics](https://github.com/JosephJShort/Jodo/#numerics) - Предоставляет дополнительные числовые типы (например, числа с фиксированной точкой и без переполнения) с полной поддержкой операторов, математики, разбора строк и т. д. Тщательно протестирована и совместима с разными платформами.

## Медиа

* [CSCore](https://github.com/filoe/cscore) - Продвинутая аудиобиблиотека с поддержкой воспроизведения, записи, декодирования, кодирования и обработки аудиоданных в реальном времени (эффекты, визуализация и др.).
* [TagLib#](https://github.com/mono/taglib-sharp) - TagLib# (также известная как taglib-sharp) — библиотека для чтения и записи
метаданных медиафайлов, включая видео, аудио и фотографии.
* [LibVLCSharp](https://github.com/videolan/libvlcsharp) - Привязки libvlc для Xamarin — мультимедийного фреймворка, лежащего в основе приложений VLC от VideoLAN.
* [NAudio](https://github.com/naudio/NAudio) - Воспроизведение, декодирование и кодирование аудио в различных форматах файлов: MP3, MP4, WAV, AIFF, Speex и др.
* [Xabe.FFmpeg](https://github.com/tomaszzmuda/Xabe.FFmpeg) - Обёртка FFmpeg для .NET Standard. Позволяет обрабатывать медиа без знания устройства FFmpeg и передавать ему пользовательские аргументы из приложения C#. **[$]**
* [Sonora](https://github.com/ImAxel0/Sonora) - Аудиофреймворк .NET для воспроизведения и редактирования аудио и MIDI, а также интеграции плагинов.

## Метрики

* [Foundatio](https://github.com/FoundatioFx/Foundatio#metrics) - Универсальный интерфейс с реализациями для памяти, Redis, StatsD и Metrics.NET.

## Микрофреймворки


## Минификация

* [Web Markup Minifier](https://github.com/Taritsyn/WebMarkupMin) - Библиотека .NET с набором минификаторов разметки. Цель проекта — повысить производительность веб-приложений за счёт уменьшения размера HTML-, XHTML- и XML-кода.
* [CompressedStaticFiles](https://github.com/AnderssonPeter/CompressedStaticFiles) - Отправляет браузеру сжатые статические файлы без сжатия по запросу, а также поддерживает отправку более современных форматов изображений, если браузер сообщает о такой поддержке.

## Разное
* [RazorKit](https://github.com/ekondur/RazorKit) - Коллекция лёгких HTML-помощников Razor с гибким интерфейсом, упрощающих интеграцию популярных библиотек JavaScript в приложения ASP.NET.
* [CSharp Pad](http://csharppad.com) - Веб-версия REPL для C# с удобным автодополнением кода.
* [AzureCrawler](https://github.com/yagopv/AzureCrawler) - Создание снимков HTML для приложений Angular, Ember, Durandal и любых других приложений JavaScript.
* [CSScript](https://www.cs-script.net/) - CS-Script — система сценариев на базе CLR, использующая C#. Сейчас она ориентирована на реализацию CLR от Microsoft (.NET 2.0/3.0/3.5/4.0/4.5) и полностью поддерживает Mono. Предоставляет множество дополнительных функций, включая размещение сценариев.
* [CsvHelper](https://github.com/JoshClose/CsvHelper) - Библиотека для чтения и записи CSV-файлов https://github.com/JoshClose/CsvHelper
* [RecordParser](https://github.com/leandromoh/recordparser) - Библиотека для чтения и записи CSV- и плоских файлов без выделения памяти в куче.
* [Sep](https://github.com/nietras/Sep) - Самый быстрый в мире парсер CSV для .NET. Современное минималистичное решение для быстрого чтения и записи разделённых значений (`csv`, `tsv` и др.) без выделения памяти. Кроссплатформенное, поддерживает обрезку и совместимо с AOT/NativeAOT.
* [ConsoleTableExt](https://github.com/minhhungit/ConsoleTableExt) - Гибкая библиотека для создания таблиц в консольных приложениях .NET.
* [FluentValidation](https://github.com/FluentValidation/FluentValidation) - Небольшая библиотека проверки данных для .NET, использующая гибкий интерфейс и лямбда-выражения для построения правил валидации.
* [Validot](https://github.com/bartoszlenar/Validot) - Validot — компактная библиотека расширенной проверки моделей, ориентированная на производительность. Простой декларативный гибкий интерфейс эффективно обрабатывает классы, структуры, вложенные элементы, коллекции, nullable-типы и любые их отношения и комбинации. Также поддерживаются переводы, расширения пользовательской логики с тестами и DI-контейнеры.
* [Humanizer](https://github.com/Humanizr/Humanizer) - Humanizer удовлетворяет потребности .NET в обработке и отображении строк, перечислений, дат, времени, интервалов, чисел и величин.
* [LINQPad](https://www.linqpad.net) - Рабочая среда C#/VB/F#, мгновенно выполняющая выражения, блоки инструкций и программы с богатыми возможностями форматирования вывода. Также позволяет интерактивно запрашивать базы данных с помощью LINQ. [$]
* [LINQPad.QueryPlanVisualizer](https://github.com/Giorgi/LINQPad.QueryPlanVisualizer/)  - Просмотр планов запросов SQL Server и Postgres непосредственно в LINQPad.
* [Polly](https://github.com/App-vNext/Polly) - Гибкое описание политик обработки временных исключений и отказоустойчивости, таких как повторные попытки, ожидание и повтор, автоматический выключатель и изоляция bulkhead. Полностью потокобезопасна и поддерживает асинхронность. (4.0 / 4.5 / .NET Core / .NET Standard / Xamarin).
* [Aeron.NET](https://github.com/AdaptiveConsulting/Aeron.NET) - Эффективная надёжная передача сообщений через UDP unicast, UDP multicast и IPC; порт Aeron для .NET.
* [TypeShape](https://github.com/eiriktsarpalis/TypeShape) - TypeShape — небольшая расширяемая библиотека F# для практического обобщённого программирования.
* [ByteSize](https://github.com/omar/ByteSize) - ByteSize — вспомогательный класс, упрощающий представление размеров в байтах в коде и устраняющий неоднозначность значений. ByteSize для байтов — то же, что System.TimeSpan для времени.
* [Jot](https://github.com/anakic/jot) - Библиотека для сохранения и восстановления состояния приложения (улучшенная альтернатива файлам .settings).
* [Enums.NET](https://github.com/TylerBrinkley/Enums.NET) - Enums.NET — высокопроизводительная типобезопасная вспомогательная библиотека перечислений для .NET.
* [YoutubeExplode](https://github.com/Tyrrrz/YoutubeExplode) - Универсальная библиотека для извлечения метаданных и загрузки видео и плейлистов YouTube.
* [DeviceId](https://github.com/MatthewKing/DeviceId) - Генерация «идентификатора устройства» для уникального распознавания компьютера.
* [DeviceDetector.NET](https://github.com/totpero/DeviceDetector.NET) - Универсальная библиотека обнаружения устройств, анализирующая любой User Agent и определяющая браузер, операционную систему, тип устройства (настольный компьютер, планшет, телефон, телевизор, автомобиль, консоль и т. д.), марку и модель.
* [NaturalSort.Extension](https://github.com/tompazourek/NaturalSort.Extension) - Метод расширения для StringComparer, добавляющий естественную сортировку (например, «abc1», «abc2», «abc10» вместо «abc1», «abc10», «abc2»).
* [Coravel](https://github.com/jamesmh/coravel) Библиотека .NET Core почти без настройки, упрощающая планирование задач, кэширование, очереди, отправку почты, трансляцию событий и многое другое.
* [Build Versioning](https://github.com/TurnerSoftware/BuildVersioning) - Простое управление версиями сборок .NET на основе тегов Git.
* [SystemTextJson.JsonDiffPatch](https://github.com/weichch/system-text-json-jsondiffpatch) - Высокопроизводительное расширение с малым числом выделений памяти для сравнения и применения изменений JSON-объектов в System.Text.Json. Поддерживает создание документов изменений в формате JSON Patch RFC 6902.
* [dotnet-exec](https://github.com/WeihanLi/dotnet-exec) - Инструмент командной строки для выполнения программы C# без файла проекта; позволяет задать точку входа, отличную от метода Main.
* [ComputeSharp](https://github.com/Sergio0694/ComputeSharp) - Библиотека .NET для параллельного выполнения кода C# на GPU с помощью DX12, D2D1 и динамически создаваемых вычислительных и пиксельных шейдеров HLSL.
* [ILGPU](https://github.com/m4rs-mt/ILGPU) - JIT-компилятор (компилятор «точно вовремя») высокопроизводительных программ GPU, написанных на языках платформы .NET.

## MQTT

* [HiveMQtt](https://github.com/hivemq/hivemq-mqtt-client-dotnet) - MQTT-клиент HiveMQ на C# для .NET.
* [MQTTNet](https://github.com/dotnet/MQTTnet) - Высокопроизводительная библиотека .NET для обмена сообщениями по MQTT. Предоставляет MQTT-клиент и MQTT-сервер (брокер).

## MVVM

* [Community Toolkit](https://github.com/CommunityToolkit) - Коллекция библиотек элементов управления и вспомогательных средств, а также примеров для различных технологий .NET. Включает современную библиотеку MVVM с поддержкой Microsoft, а также [Windows Community Toolkit](https://github.com/CommunityToolkit/WindowsCommunityToolkit), [MAUI Community Toolkit](https://github.com/CommunityToolkit/Maui) и [Dotnet Community Toolkit](https://github.com/CommunityToolkit/dotnet).
* [Caliburn.Micro](https://github.com/Caliburn-Micro/Caliburn.Micro) - Небольшой, но мощный фреймворк для создания приложений на всех платформах XAML. Надёжная поддержка шаблонов MV* позволяет быстро создавать решения без ущерба для качества кода и тестируемости.
* [Catel](https://github.com/Catel/Catel) - Catel — платформа разработки приложений с упором на MVVM (WPF, Silverlight, Windows Phone и WinRT) и MVC (ASP.NET MVC). Ядро Catel содержит IoC-контейнер, модели, проверку данных, memento, посредник сообщений, проверку аргументов и др.
* [ReactiveUI](https://github.com/reactiveui/reactiveui/) - Фреймворк MVVM для .NET, интегрирующий Reactive Extensions (Rx) и позволяющий создавать элегантные тестируемые приложения с помощью WPF, Windows Store Apps, WP8 или Xamarin.
* [Prism](https://github.com/PrismLibrary/Prism) - Кроссплатформенный фреймворк разработки MVVM для настольных и мобильных приложений.
* [Win Application Framework (WAF)](https://github.com/jbe2277/waf) - Лёгкий фреймворк для создания хорошо структурированных приложений WPF и UWP. Помогает применять многоуровневую архитектуру и шаблон Model-View-ViewModel.
* [MVVMCross](https://github.com/MvvmCross/MvvmCross) - Кроссплатформенный фреймворк мобильной разработки MVVM для WPF, Silverlight для WP7 и WP8, Mono для Android, MonoTouch для iOS и проектов Windows Universal (WPA8.1 и приложений Windows 8.1 Store). Активно использует переносимые библиотеки классов (PCL) для создания сопровождаемых кроссплатформенных нативных приложений C#.
* [Stylet](https://github.com/canton7/stylet/) - Минимальный фреймворк MVVM под влиянием Caliburn Micro с хорошей документацией, высоким покрытием тестами и собственным IoC-контейнером.
* [Toms Toolbox](https://github.com/tom-englert/TomsToolbox) - Фреймворк визуальной композиции для удобного создания модульных приложений MVVM на основе [Managed Extensibility Framework (MEF)](https://docs.microsoft.com/en-us/dotnet/framework/mef/).
* [MVVM Dialogs](https://github.com/FantasticFiasco/mvvm-dialogs) - Фреймворк, упрощающий открытие диалоговых окон из модели представления при использовании MVVM в WPF или UWP.

## Сетевые технологии

* [NetCoreServer](https://github.com/chronoxor/NetCoreServer) - Сверхбыстрая низколатентная асинхронная библиотека серверов и клиентов сокетов C# .NET Core с поддержкой TCP, SSL, UDP, HTTP, HTTPS и WebSocket, решающая проблему 10 тысяч соединений (NETStandard).
* [SharpPcap](https://github.com/chmorgan/sharppcap) - Полностью управляемая кроссплатформенная библиотека .NET для захвата пакетов с сетевых устройств и из файлов в Windows, Mac и Linux.

## Сопоставление объектов

* [AutoMapper](https://github.com/AutoMapper/AutoMapper) - Сопоставитель объектов .NET на основе соглашений. https://automapper.org
* [Mapperly](https://github.com/riok/mapperly) - Генератор исходного кода .NET для создания сопоставлений объектов. Без рефлексии во время выполнения.
* [Mapster](https://github.com/MapsterMapper/Mapster) - Высокопроизводительный сопоставитель объектов для .NET.

## Офис

* [ExcelDna](https://github.com/Excel-DNA/ExcelDna) - ExcelDna упрощает создание и развёртывание надстроек Excel с помощью C#, F# или VB .NET.
* [ClosedXML](https://github.com/ClosedXML/ClosedXML) - ClosedXML упрощает разработчикам создание файлов Excel 2007/2010.
* [OfficeIMO](https://github.com/EvotecIt/OfficeIMO) - OfficeIMO упрощает создание и изменение файлов Word (docx) без установленного Microsoft Word или Office.
* [NPOI](https://github.com/tonyqus/npoi) - Этот проект — версия проекта POI для Java на .NET: https://poi.apache.org/.
* [EPPlus](https://github.com/EPPlusSoftware/EPPlus) - EPPlus — библиотека .NET для чтения и записи файлов Excel 2007/2010 в формате Open Office XML (xlsx).
**[Доступен исходный код]** **[Бесплатный тариф]**
* [Open XML SDK](https://github.com/officedev/open-xml-sdk) - Open XML SDK предоставляет библиотеки с открытым исходным кодом для работы с документами Open XML (DOCX, XLSX и PPTX).
* [DocX](https://github.com/xceedsoftware/DocX) - DocX — библиотека .NET, позволяющая разработчикам работать с файлами Word 2007/2010/2013 без установки Microsoft Word или Office.
* [ExcelDataReader](https://github.com/ExcelDataReader/ExcelDataReader) - Лёгкая и быстрая библиотека на C# для чтения файлов Microsoft Excel (версии 2.0–2007).
* [NetOffice](https://github.com/NetOfficeFw/NetOffice) - Сборки-обёртки .NET для приложений Microsoft Office.
* [GemBox.Bundle](https://www.gemboxsoftware.com/bundle) - Пакет компонентов .NET для быстрой, простой и эффективной обработки офисных файлов (Excel, Word, PowerPoint, PDF и электронной почты). **[$]****[Бесплатные версии Lite]**
* [Outlook Redemption](http://www.dimastr.com/redemption/home.htm) - Библиотека для работы с объектной моделью Outlook и (расширенным) MAPI. Поддерживает Outlook 98–2019. Позволяет работать с объектами, письмами, аккаунтами и папками в Exchange и Outlook. **[$]**
* [ShapeCrawler](https://github.com/ShapeCrawler/ShapeCrawler) - Гибкий API для обработки презентаций PowerPoint без установленного Microsoft Office.
* [MiniExcel](https://github.com/shps951023/MiniExcel) - Миниатюрный помощник Excel, предотвращающий нехватку памяти и обеспечивающий высокую производительность при создании, сопоставлении и заполнении шаблонов данными.
* [MatchFlow](https://github.com/datpham0412/invoice-processor) - Веб-платформа сверки счетов с извлечением данных OCR и автоматическим сопоставлением заказов на закупку на ASP.NET Core и Azure Form Recognizer.
* [Toxy](https://github.com/nissl-lab/toxy) - Фреймворк извлечения текста для .NET с поддержкой нескольких форматов файлов.
* [Syncfusion .NET Word Framework](https://www.syncfusion.com/document-processing/word-framework/net) - Высокопроизводительный фреймворк Word для .NET без зависимостей от Microsoft Office или механизмов взаимодействия. Удобно создавайте, читайте и редактируйте документы Word. Используйте расширенные компоненты редактора для просмотра, редактирования и печати. Легко конвертируйте документы Word в PDF, HTML, RTF, ODT и EPUB с помощью мощных API преобразования. **[$]** **[[Бесплатно для частных лиц и малых предприятий](https://www.syncfusion.com/products/communitylicense)]**
* [Syncfusion .NET Excel Framework](https://www.syncfusion.com/document-processing/excel-framework/net) - Высокопроизводительный фреймворк Excel для .NET без зависимостей от Microsoft Office или механизмов взаимодействия. Удобно создавайте, читайте и редактируйте документы Excel. Используйте элементы управления электронными таблицами для простого создания, редактирования и просмотра. Легко конвертируйте файлы Excel в PDF, изображения и другие форматы с помощью мощных API преобразования. **[$]** **[[Бесплатно для частных лиц и малых предприятий](https://www.syncfusion.com/products/communitylicense)]**
* [Syncfusion .NET PowerPoint Framework](https://www.syncfusion.com/document-processing/powerpoint-framework/net) - Высокопроизводительный фреймворк PowerPoint для .NET без зависимостей от Microsoft Office или механизмов взаимодействия. Удобно создавайте, читайте и редактируйте файлы PowerPoint. Легко конвертируйте файлы PowerPoint в PDF и изображения с помощью мощных API преобразования. **[$]** **[[Бесплатно для частных лиц и малых предприятий](https://www.syncfusion.com/products/communitylicense)]**

## OpenAI


## ORM

* [Entity Framework Core](https://github.com/dotnet/efcore) - Объектно-реляционный сопоставитель, позволяющий разработчикам .NET работать с реляционными данными через объекты предметной области.
* [EntityFramework.Exceptions](https://github.com/Giorgi/EntityFramework.Exceptions) - Использование типизированных исключений Entity Framework Core при нарушении SQL-запросом ограничений базы данных в SqlServer, MySql, PostgreSQL или SQLite.
* [EntityFrameworkCore.SqlServer.SimpleBulks](https://github.com/phongnguyend/EntityFrameworkCore.SqlServer.SimpleBulks) - Простая библиотека для синхронизации большого количества записей из памяти с базой данных. Поддерживаются лямбда-выражения.
* [EFCore.BulkExtensions](https://github.com/borisdj/EFCore.BulkExtensions) - Массовые расширения Entity Framework Core для сверхбыстрых операций CRUD (BulkCopy) и SaveChanges в нескольких базах данных: SQL, PG, My и Lite.
* [Dapper](https://github.com/DapperLib/Dapper) - Простой сопоставитель объектов для .NET от [StackExchange](https://stackexchange.github.io/).
* [Dapper.FastCRUD](https://github.com/MoonStorm/Dapper.FastCRUD) - Самое быстрое расширение микро-ORM для Dapper.
* [DapperQueryBuilder](https://github.com/Drizin/DapperQueryBuilder) - Построитель запросов Dapper с интерполяцией строк и гибким API.
* [SqlSugar](https://github.com/DotNetNext/SqlSugar) - Ещё одна библиотека ORM с поддержкой многих реляционных СУБД, включая MySql, SqlServer, Sqlite, Oracle и Postgresql. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [FreeSql](https:/github.com/dotnetcore/FreeSql) - Удобная ORM для .NET с поддержкой MySql, SqlServer, PostgreSQL, Oracle, Sqlite, Firebird, 达梦, 人大金仓, 神舟通用, 翰高 и Access. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [NHibernate](https://github.com/nhibernate) - Объектно-реляционный сопоставитель NHibernate.
* [Fluent NHibernate](https://github.com/nhibernate/fluent-nhibernate) - Гибкие, основанные на соглашениях, автоматизированные и безопасные при компиляции сопоставления NHibernate без XML.
* [FluentMigrator](https://github.com/fluentmigrator/fluentmigrator) - Гибкий фреймворк миграций для .NET.
* [ServiceStack.OrmLite](https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack.OrmLite) - Лёгкая, простая и быстрая POCO ORM на основе соглашений. **[[Бесплатно для ПО с открытым исходным кодом](https://github.com/ServiceStack/ServiceStack/blob/master/license.txt)]** **[$]**
* [LINQ to DB](https://github.com/linq2db/linq2db) - Самая быстрая библиотека доступа к базам данных через LINQ, предоставляющая простой, лёгкий, быстрый и типобезопасный уровень между объектами POCO и базой данных.
* [PetaPoco](https://github.com/CollaboratingPlatypus/PetaPoco) - Крошечная ORM-подобная библиотека для объектов POCO.
* [NPoco](https://github.com/schotime/NPoco) - Простая микро-ORM, сопоставляющая результаты запроса с объектом POCO. Основана на ветке PetaPoco от Schotime.
* [LLBLGen Pro](https://www.llblgen.com) - Решение моделирования сущностей для Entity Framework, NHibernate, Linq to SQL и собственной ORM: LLBLGen Pro Runtime Framework. **[$][Бесплатная версия Lite]**
* [Insight.Database](https://github.com/jonwagner/Insight.Database) - Insight.Database — быстрая и лёгкая микро-ORM для .NET.
* [RepoDb](https://github.com/mikependon/RepoDb) - Гибридная библиотека ORM для .NET.
* [MongoFramework](https://github.com/TurnerSoftware/MongoFramework) - Интерфейс для MongoDB, похожий на Entity Framework.
* [Friflo.Json.Fliox](https://github.com/friflo/Friflo.Json.Fliox) - Высокопроизводительная ORM для Sqlite, MySql, SqlServer, PostgreSQL и NoSQL. Предоставляет сервер с API REST, GraphQL и WebSocket/PubSub.

## Управление пакетами

* [NuGet](https://www.nuget.org/) - Менеджер пакетов .NET.
* [Cloudsmith](https://cloudsmith.com/nuget-feed/) - Полностью управляемый SaaS для управления пакетами с поддержкой NuGet, Npm, Docker и многого другого. **[Бесплатно для публичных проектов/ПО с открытым исходным кодом]** **[$]**
* [MyGet](https://www.myget.org/) - Размещённый репозиторий пакетов для NuGet, NPM, Bower и VSIX. Также предоставляет CI как услугу. **[$]**
* [Paket](https://github.com/fsprojects/Paket) - Менеджер зависимостей пакетов для .NET с поддержкой пакетов NuGet и репозиториев GitHub. https://fsprojects.github.io/Paket/
* [Sleet](https://github.com/emgarten/sleet/) - Генератор статических лент NuGet v3 с поддержкой AWS S3 и Azure Storage.

## PDF

* [QPdfSharp](https://github.com/svengeance/QPdfSharp) - Обёртка QPdf на C# для удобной работы с PDF, протестированная в Linux и Windows. QPdf — одна из немногих библиотек, поддерживающих линеаризацию PDF; обёртка позволяет использовать последние улучшения базовой библиотеки.
* [Cloudmersive PDF](https://cloudmersive.com/pdf-api) - Cloudmersive PDF — нативная библиотека NuGet и служба API для .NET Framework и .NET Core, способная создавать, изменять, шифровать и преобразовывать PDF-документы в больших масштабах с высоким качеством; бесплатна без ограничения срока действия. **[Бесплатно]**
* [Docotic.Pdf](https://bitmiracle.com/pdf-library/) - Библиотека PDF для создания, чтения, редактирования, рисования и печати PDF-документов в приложениях .NET и .NET Core. Полностью управляемая, без небезопасных блоков. **[$]** **[[Бесплатно для ПО с открытым исходным кодом](https://bitmiracle.com/pdf-library/free-pdf-library.aspx)]**
* [IText](https://github.com/itext/itext-dotnet) - iText — библиотека PDF, позволяющая СОЗДАВАТЬ, АДАПТИРОВАТЬ, ПРОВЕРЯТЬ и СОПРОВОЖДАТЬ документы в формате Portable Document Format (PDF). **[$]** **[Бесплатно для ПО с открытым исходным кодом]**
* [Pdfium.Net SDK](https://pdfium.patagames.com/) - Продвинутая библиотека PDF на C# для отображения, создания, редактирования, объединения, разделения и печати PDF. Просмотрщик PDF с открытым исходным кодом доступен на [GitHub](https://github.com/patagames). Также доступен [пакет NuGet](https://www.nuget.org/packages/Pdfium.Net.SDK/) для удобного подключения к проектам. **[$]**
* [PdfPig](https://uglytoad.github.io/PdfPig/) - Чтение и создание PDF, а также извлечение текста и другого содержимого на C# (порт PdfBox).
* [QuestPDF](https://www.questpdf.com/) - QuestPDF — современная проверенная библиотека для создания PDF-документов с удобным, понятным и предсказуемым гибким API C#. **[Доступен исходный код]** **[Бесплатно для ПО с открытым исходным кодом]**
* [Kevsoft.PDFtk](https://github.com/kevbite/Kevsoft.PDFtk) - Обёртка для управления двоичным файлом pdftk: заполнения PDF-форм, получения сведений о полях, объединения документов или страниц, разделения документов, добавления и замены штампов, прикрепления файлов к страницам и извлечения файлов из них.
* [IronPDF](https://ironpdf.com/)  - Высокопроизводительная библиотека PDF на C# с совместимостью с разными версиями .NET, преобразованием HTML в PDF и преобразованием страниц содержимого, поддержкой форматов файлов (например, DOCX, RTF, MD), адаптивными макетами и широкими возможностями создания, форматирования и редактирования PDF. **[$]** **[Доступна бесплатная пробная версия]**
* [Syncfusion .NET PDF Framework](https://www.syncfusion.com/document-processing/pdf-framework/net)  - Высокопроизводительный фреймворк PDF для .NET без зависимостей от Adobe. Удобно создавайте, читайте и редактируйте PDF-файлы. Используйте элементы управления просмотрщика PDF для просмотра, проверки и печати. Легко преобразуйте HTML, Word, Excel, PowerPoint и изображения в PDF с помощью мощных API преобразования. **[$]** **[[Бесплатно для частных лиц и малых предприятий](https://www.syncfusion.com/products/communitylicense)]**

## Профилировщики

* [MiniProfiler](https://github.com/MiniProfiler/dotnet) - Простой, но эффективный мини-профилировщик для сайтов ASP.NET.

## Протоколы

* [SSH.NET](https://github.com/sshnet/SSH.NET) - Библиотека Secure Shell (SSH) для .NET, оптимизированная для параллелизма. Предоставляет команды SSH, загрузку и скачивание по SFTP/SCP, а также прокси SOCKS4/SOCKS5/HTTP.
* [FluentFTP](https://github.com/robinrodricks/FluentFTP) - Библиотека FTP и FTPS для .NET, оптимизированная по скорости. Предоставляет широкий набор FTP-команд, загрузку и скачивание файлов, а также FTP-прокси.
* [SharpSnmpLib](https://docs.sharpsnmp.com/) - Реализация SNMP с открытым исходным кодом для .NET/Mono/Xamarin. Поддерживаются версии 1, 2c и 3.
* [DnsClient.NET](https://github.com/MichaCo/DnsClient.NET) - Простая, но очень мощная и высокопроизводительная библиотека с открытым исходным кодом для поиска DNS в .NET Framework.
* [Tecan SiLA2 SDK](https://gitlab.com/SiLA2/vendors/sila_tecan) - Библиотека и генератор кода для разработки клиентов и серверов SiLA2.

## Push-уведомления


## Построители запросов
* [SqlKata](https://sqlkata.com) - Элегантный построитель SQL-запросов с поддержкой сложных запросов, объединений, подзапросов, вложенных условий where, разных движков СУБД и многого другого.
* [InterpolatedSql](https://github.com/Drizin/InterpolatedSql) - Построитель SQL-запросов с интерполяцией строк и гибким API.

## Очереди
* [CAP](https://github.com/dotnetcore/CAP) - EventBus с локальным постоянным хранением сообщений для RabbitMQ или Kafka. -  **ПРИМЕЧАНИЕ**: проект не связан с Microsoft или .NET
* [Cap.Outbox](https://github.com/dex-it/dex-common/tree/main/src/Dex.Cap) - Реализация шаблона Outbox и службы OnceExecutor, гарантирующей идемпотентность: операция выполняется ровно один раз.
* [NServiceBus](https://github.com/Particular/NServiceBus) - Самая популярная шина служб для .NET.
* [Hangfire](https://github.com/HangfireIO/Hangfire) - Невероятно простой способ выполнять задачи без ожидания, с задержкой и периодически в приложениях ASP.NET.
* [RabbitMQ.NET](https://github.com/rabbitmq/rabbitmq-dotnet-client) - Реализация клиентской библиотеки AMQP для C# и привязка, предоставляющая службы AMQP через WCF.
* [NetMQ](https://github.com/zeromq/netmq) - NetMQ — полностью нативный порт ZeroMQ на C#.
* [MassTransit](https://github.com/MassTransit/MassTransit) - MassTransit — компактная реализация шины служб для создания слабо связанных приложений на .NET Framework.
* [Rebus](https://github.com/rebus-org/Rebus) - Rebus — компактная реализация шины служб для .NET, похожая на NServiceBus и MassTransit, но ещё легче.
* [EasyNetQ](https://github.com/EasyNetQ/EasyNetQ) - Простой в использовании API .NET для RabbitMQ.
* [Warewolf ESB](https://github.com/Warewolf-ESB/Warewolf) - Простая в использовании шина служб и платформа микросервисов. Удобное создание приложений и служб в визуальной IDE.
* [Confluent's .NET Client](https://github.com/confluentinc/confluent-kafka-dotnet) - Клиент Confluent для Apache Kafka на .NET.
* [Streamiz](https://github.com/LGouellec/streamiz) - Библиотека потоковой обработки для Apache Kafka на .NET.
* [Foundatio](https://github.com/FoundatioFx/Foundatio#queues) - Универсальный интерфейс с реализациями в памяти, на Redis и Azure.
* [Brighter](https://github.com/BrighterCommand/Brighter) - Диспетчер команд, обработчик и распределённая очередь задач https://www.goparamore.io/
* [Silverback](https://silverback-messaging.net) - Простая, но функциональная шина сообщений для .NET Core с поддержкой Kafka, RabbitMQ и MQTT.
* [SlimMessageBus](https://github.com/zarusz/SlimMessageBus) - Лёгкая шина сообщений с транспортами для популярных систем обмена сообщениями (Kafka, Redis, Azure Service Bus и других), а также для взаимодействия в памяти.
* [AsyncMonolith](https://github.com/Timmoth/AsyncMonolith) - Упрощает асинхронный обмен сообщениями в приложениях .NET.
## RPC

* [gRPC](https://github.com/grpc/grpc-dotnet)  Библиотека и фреймворк RPC для .NET Core. Подробнее см. в [документации Microsoft](https://docs.microsoft.com/en-us/aspnet/core/grpc).
* [gRPCurl](https://github.com/fullstorydev/grpcurl) - gRPCurl — инструмент командной строки для взаимодействия с серверами gRPC, по сути curl для gRPC.
* [gRPC UI](https://github.com/fullstorydev/grpcui) - gRPC UI — инструмент командной строки для взаимодействия с серверами gRPC через браузер. Аналог Postman для API gRPC, а не REST.

## Реактивное программирование

* [Rx.NET](https://github.com/dotnet/reactive) - Reactive Extensions (Rx) — библиотека для композиции асинхронных и событийных программ с помощью наблюдаемых последовательностей и операторов запросов в стиле LINQ.
* [Dynamic Data](https://github.com/reactivemarbles/DynamicData) - Reactive Extensions (Rx) для коллекций.

## Общение в реальном времени

* [SIPSorcery](https://github.com/sipsorcery/sipsorcery) - Кроссплатформенная библиотека C# .NET с поддержкой SIP, VoIP и WebRTC.

## Регулярные выражения

## Планирование задач

* [NCrontab](https://github.com/atifaziz/NCrontab) - Библиотека классов для разбора и форматирования выражений [crontab](http://crontab.org/), а также вычисления времени срабатываний по расписанию crontab.
* [NCrontab.Scheduler](https://github.com/thomasgalliker/NCrontab.Scheduler) - Простая библиотека планировщика задач для заданий на основе NCrontab.
* [QuartzNet](https://github.com/quartznet/quartznet) - Корпоративный планировщик Quartz для .NET.
* [Hangfire](https://github.com/HangfireIO) - Простой способ выполнять задачи без ожидания, с задержкой и периодически в приложениях .NET.
* [DurableTask](https://github.com/Azure/durabletask) - Фреймворк позволяет писать длительные сохраняемые рабочие процессы на C#, используя возможности async/await.
* [Workflow Core](https://github.com/danielgerlag/workflow-core) - Лёгкий встраиваемый движок рабочих процессов.
* [Occurify](https://github.com/Occurify/Occurify) - Мощная и понятная библиотека .NET для определения, фильтрации, преобразования и планирования временных шкал мгновений и периодов.
* [TickerQ](https://github.com/Arcenox-co/TickerQ) - Лёгкий высокопроизводительный планировщик задач .NET без рефлексии, с EF Core, выполнением по cron/времени, пользовательскими блокировками и повторными попытками.
* [NCronJob](https://github.com/NCronJob-Dev/NCronJob) - Планировщик задач на базе IHostedService в .NET.
* [NaturalCron](https://github.com/hugoj0s3/NaturalCron) – Библиотека планирования для .NET с понятными человеку выражениями на естественном языке.


## Клиенты SDK и API

* [AWS SDK](https://github.com/aws/aws-sdk-net) - AWS SDK для .NET позволяет разработчикам .NET легко работать с Amazon Web Services.
* [Azure PowerShell](https://github.com/Azure/azure-powershell) - Набор командлетов PowerShell, позволяющих разработчикам и администраторам разрабатывать, развёртывать и управлять приложениями Microsoft Azure.
* [Countly SDK for Windows](https://github.com/Countly/countly-sdk-windows/) - SDK Windows для аналитической и маркетинговой платформы Countly, предназначенной для менеджеров продуктов и маркетинга.
* [Octokit.NET](https://github.com/octokit/octokit.net) - Клиентская библиотека API GitHub для .NET.
* [Dropbox.NET](https://github.com/dropbox/dropbox-sdk-dotnet) - Официальный SDK .NET для API Dropbox.
* [Getty Images API SDK](https://github.com/gettyimages/gettyimages-api_dotnet) - SDK для API Getty Images и iStock.

## Поиск

* [Elasticsearch .NET](https://github.com/elastic/elasticsearch-net) - Elasticsearch.Net и NEST.
* [SolrNet](https://github.com/SolrNet/SolrNet) - Клиент Solr для .NET.
* [Lucene.net](https://lucenenet.apache.org/) - Lucene.Net — порт библиотеки поисковой системы Lucene, написанный на C# для пользователей среды выполнения .NET.

**Встраиваемые библиотеки поиска** - как Lucene, но проще в использовании.
  * [Lunr-Core](https://github.com/bleroy/lunr-core) - Lunr-core — небольшая библиотека полнотекстового поиска для компактных приложений. Порт LUNR.js для .NET.
  * [hOOt](https://github.com/mgholam/hOOt) - Самая компактная поисковая система полнотекстового поиска (замена Lucene), созданная с нуля на основе инвертированного индекса Roaring Bitmap. Отличается компактным хранением и работает в режимах базы данных и документов.
  * [ZoneTree.FullTextSearch](https://github.com/koculu/ZoneTree.FullTextSearch) - Эффективная библиотека полнотекстового поиска, расширяющая ZoneTree. Это быстрая встраиваемая поисковая система для высокопроизводительных приложений, не зависящих от внешних баз данных.

## Сериализация

* [CsvExport](https://github.com/jitbit/CsvExport) - Очень простой и лёгкий экспортёр CSV, совместимый с Excel, экранирующий текст, кавычки и т. п.
* [Protobuf.NET](https://github.com/protobuf-net/protobuf-net) - Protocol Buffers — название двоичного формата сериализации, который Google использует для значительной части обмена данными.
* [Json.NET](https://github.com/JamesNK/Newtonsoft.Json) - Популярный высокопроизводительный фреймворк JSON для .NET.
* [ServiceStack.Text]https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack.Text) - Сериализаторы текста JSON, JSV и CSV, используемые в servicestack.net.
* [Msgpack-Cli](https://github.com/msgpack/msgpack-cli) - Реализация MessagePack для Common Language Infrastructure.
* [FlatSharp](https://github.com/jamescourtney/FlatSharp) - Быстрая идиоматичная реализация FlatBuffers. Используйте файлы .fbs или атрибуты.
* [F# Data](https://fsprojects.github.io/FSharp.Data/) - Поставщики типов F# для доступа к XML-, JSON-, CSV- и HTML-файлам (на основе образцов документов), а также к данным World Bank.
* [Hyperion](https://github.com/akkadotnet/Hyperion) - Высокопроизводительный полиморфный сериализатор для платформы .NET.
* [Migrant](https://github.com/antmicro/Migrant) - Быстрый и гибкий фреймворк сериализации, применимый к классам без атрибутов.
* [ObjectDumper.NET](https://github.com/thomasgalliker/ObjectDumper) - Сериализует объект из памяти в код C#.
* [FluentSerializer](https://github.com/Marvin-Brouwer/FluentSerializer#readme) - Сериализатор нескольких форматов данных на основе профилей.

## SMS и телефонные звонки

* [Twilio-csharp](https://github.com/twilio/twilio-csharp) - Библиотека C#/.NET для отправки и приёма звонков и текстовых сообщений через Twilio.

## Конечные автоматы

* [Stateless](https://github.com/dotnet-state-machine/stateless) - Создание конечных автоматов и лёгких рабочих процессов на их основе непосредственно в коде .NET.

## Генераторы статических сайтов

* [Sandra.Snow](https://github.com/Sandra/Sandra.Snow) - Генерация статических сайтов для .NET под влиянием Jekyll.
* [AspNetStatic](https://github.com/ZarehD/AspNetStatic) - Преобразование веб-приложения ASP.NET Core в генератор статических сайтов.

## Строгая подпись

* [.NET Assembly Strong-Name Signer](https://github.com/brutaldev/StrongNameSigner) - Утилита для подписания сборок .NET строгим именем, включая сборки, исходный код которых недоступен.

## Руководство по стилю

* [C# Style Guide](https://stackoverflow.com/questions/4678178/style-guide-for-c) - Вопросы и ответы на StackOverflow о руководствах по стилю.
* [C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions) - Официальные соглашения MSDN по написанию кода на C#.
* [C# Async Guidance](https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md) - Перечень проблемных асинхронных шаблонов для .NET Core с объяснением способов их устранения.

## Шаблонизаторы

* [RazorLight](https://github.com/toddams/RazorLight) - Движок шаблонов с открытым исходным кодом на основе парсера Razor от Microsoft с поддержкой .NET Standard 2.0.
* [DotLiquid](https://github.com/dotliquid/dotliquid) - Порт языка шаблонов Ruby Liquid на C#.
* [Scriban](https://github.com/lunet-io/scriban) - Быстрый, мощный, безопасный и лёгкий язык и движок текстовых шаблонов для .NET.
* [Morestachio](https://github.com/JPVenson/morestachio) - Полнофункциональный движок шаблонов в стиле {{mustache}}, ориентированный на расширяемость.
* [Fluid](https://github.com/sebastienros/fluid) - Fluid — движок шаблонов .NET с открытым исходным кодом на основе языка шаблонов Liquid.
* [SmartFormat](https://github.com/axuno/SmartFormat) - Лёгкая библиотека текстовых шаблонов на C#, способная заменить string.Format.
* [Handlebars.Net](https://github.com/Handlebars-Net/Handlebars.Net) - Полноценный движок Handlebars для .NET.

## Тестирование

* [ArchUnitNET](https://github.com/TNG/ArchUnitNET) - Простая библиотека для проверки архитектуры кода C# с гибким API.
* [AutoFixture](https://github.com/AutoFixture/AutoFixture) - Фреймворк .NET с открытым исходным кодом, предназначенный для сокращения этапа «Arrange» в модульных тестах.
* [BDTest](https://github.com/thomhurst/BDTest/wiki) - Фреймворк тестирования и отчётности на основе поведения.
* [Bogus](https://github.com/bchavez/Bogus) - Простой и удобный генератор тестовых данных для C#, основанный на популярном faker.js и портированный с него.
* [ExpressionToCode](https://github.com/EamonNerbonne/ExpressionToCode) - Использование обычного синтаксиса C# в утверждениях, чтобы сообщения об ошибках включали значения выражения и его подвыражений.
* [FakeItEasy](https://github.com/FakeItEasy/FakeItEasy) - Удобная библиотека создания заглушек для .NET https://fakeiteasy.github.io
* [Fluent Assertions](https://github.com/fluentassertions/fluentassertions) - Набор методов расширения .NET, позволяющих естественно задавать ожидаемый результат теста в стиле TDD или BDD. **[Доступен исходный код]** **[Бесплатно для ПО с открытым исходным кодом]**
* [FsCheck](https://github.com/fscheck/FsCheck) - Случайное тестирование для .NET.
* [Machine.Specifications](https://github.com/machine/machine.specifications) - Machine.Specifications (MSpec) — фреймворк контекстов и спецификаций, устраняющий языковой шум и упрощающий тесты.
* [Moq](https://github.com/devlooped/moq) - Самый популярный и дружелюбный фреймворк создания заглушек для .NET.
* [NBomber](https://github.com/PragmaticFlow/NBomber) - Очень простой фреймворк нагрузочного тестирования сценариев Pull и Push. Полностью написан на F# и предназначен для .NET Core и полной версии .NET Framework.
* [NCrunch](https://www.ncrunch.net/) - Инструмент автоматического непрерывного параллельного тестирования для Visual Studio. **[$]**
* [NFluent](http://www.n-fluent.net) - NFluent — библиотека утверждений, призванная сделать опыт TDD в .NET более гибким.
* [NSubstitute](https://nsubstitute.github.io/) - Дружелюбная альтернатива фреймворкам создания заглушек для .NET.
* [NUnit](https://github.com/nunit/nunit) - Фреймворк модульного тестирования для всех языков .NET.
* [Testcontainers](https://github.com/testcontainers/testcontainers-dotnet) - Библиотека поддержки тестов с временными экземплярами контейнеров Docker для всех совместимых версий .NET Standard.
* [SecTester](https://github.com/NeuraLegion/sectester-net) - SecTester — новый инструмент, интегрирующий корпоративный сканер [Bright](https://brightsec.com/) непосредственно в интеграционные тесты и сквозные тесты. **[Проприетарное]** **[Бесплатно]**
* [Shouldly](https://github.com/shouldly/shouldly) - Shouldly — фреймворк утверждений, который остаётся простым и лаконичным, но выдаёт понятные сообщения при их сбое.
* [Snapshooter](https://github.com/SwissLife-OSS/snapshooter) - Инструмент тестирования по снимкам для .NET Core и .NET Framework.
* [Stryker.NET](https://github.com/stryker-mutator/stryker-net) - Мутационное тестирование проектов .NET Core.
* [xUnit.net](https://github.com/xunit/xunit) - Бесплатный инструмент модульного тестирования для .NET Framework с открытым исходным кодом, развиваемый сообществом.
* [Canopy](https://github.com/lefthandedgoat/canopy) - Canopy — бесплатный фреймворк автоматизации и тестирования веб-приложений на F# с открытым исходным кодом.
* [Expecto](https://github.com/haf/expecto) - Удобный фреймворк тестирования для F#, в котором тесты представлены как значения. Поддерживает модульное, основанное на свойствах, нагрузочное тестирование и стресс-тесты.
* [ReportPortal](https://reportportal.io) - Панель автоматизации тестирования на базе ИИ. Собирает, объединяет и анализирует отчёты о тестировании для оценки готовности выпуска.
* [Compare-Net-Objects](https://github.com/GregFinzer/Compare-Net-Objects) - Глубокое сравнение любых двух объектов .NET с помощью рефлексии с отображением различий.
* [Verify](https://github.com/VerifyTests/Verify) - Инструмент проверки для простого утверждения сложных моделей и документов.
* [CsCheck](https://github.com/AnthonyLloyd/CsCheck) - Библиотека случайного тестирования для C#, включая тестирование параллелизма, причинное профилирование, регрессионное и нагрузочное тестирование.
* [NotoriousTest](https://github.com/Notorious-Coding/Notorious-Test) - Лёгкий фреймворк .NET, полностью изолирующий интеграционные тесты с помощью оркестрации повторно используемых инфраструктур и окружений, автоматически сбрасываемых между тестами. Встроенная поддержка TestContainers и SQL Server. Основан на XUnit.
## Инструменты

* [Downloader](https://github.com/bezzad/Downloader) - Быстрый и надёжный многопоточный загрузчик с асинхронными событиями выполнения для приложений .NET.
* [Fiddler](https://www.telerik.com/fiddler) - Бесплатный прокси для отладки веб-трафика в любом браузере, системе или на любой платформе. **[Проприетарное]** **[$]** **[Доступна бесплатная пробная версия]**
* [Open Live Writer](https://github.com/OpenLiveWriter/OpenLiveWriter) - Редактор блогов с интеграцией WordPress, Blogger и других платформ. Open Live Writer упрощает написание, предварительный просмотр и публикацию записей.
* [ShareX](https://github.com/ShareX/ShareX) - ShareX — бесплатная программа с открытым исходным кодом для захвата или записи любой области экрана и отправки результата одним нажатием клавиши. Также позволяет загружать изображения, текст и другие файлы в более чем 80 поддерживаемых мест назначения на выбор.
* [Opserver](https://github.com/Opserver/Opserver) - Система мониторинга Stack Exchange.
* [CatLight](https://catlight.io) - Уведомления о состоянии сборки для TFS/Jenkins/Travis/Appveyor. Кроссплатформенное настольное приложение на .NET Core и Electron. **[Доступна бесплатная версия][Проприетарное]**
* [Mockaco](https://github.com/natenho/Mockaco/) - Сервер имитации API с быстрой настройкой для моделирования HTTP-ответов. Использует возможности ASP.NET Core, встроенную генерацию тестовых данных и механизм сценариев C# на базе Roslyn.
* [Papercut](https://github.com/ChangemakerStudios/Papercut-SMTP) - Papercut — локальный просмотрщик тестовых писем с открытым исходным кодом на .NET и встроенным SMTP-сервером для получения тестовых сообщений и уведомлений о них.
* [Fake JSON Server](https://github.com/ttu/dotnet-fake-json-server) - Поддельный REST API для прототипирования или использования в качестве серверной части CRUD. Типы определять не нужно — используется динамическая типизация. Данные хранятся в одном файле JSON. Поддерживаются аутентификация, уведомления WebSocket, длительные асинхронные операции, случайная генерация ошибок/задержек и экспериментальная поддержка GraphQL.
* [NETworkManager](https://github.com/BornToBeRoot/NETworkManager) - Мощный инструмент управления сетями и диагностики сетевых проблем!
* [YARP](https://github.com/microsoft/reverse-proxy) - YARP — набор инструментов обратного прокси для создания быстрых прокси-серверов .NET на инфраструктуре ASP.NET и .NET.
* [JSON Formatter and Validator](https://elmah.io/tools/json-formatter/) - Сверхбыстрый форматировщик и валидатор JSON, который не отправляет JSON на сервер.
* [CSharpier](https://github.com/belav/csharpier) - Авторитетный форматировщик кода C#, основанный на алгоритме форматирования [Prettier](https://github.com/prettier/prettier).
* [UnitsNet](https://github.com/angularsen/UnitsNet) - Немного упрощает работу с единицами измерения.
* [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - Более быстрый, удобный и стабильный графический клиент для управления Redis, совместимый с Linux, Windows и Mac. Кроме того, он не аварийно завершается при загрузке огромного количества ключей.
* [OctaneEngine](https://github.com/gregyjames/OctaneDownloader) - Высокопроизводительный многопоточный загрузчик с поддержкой паузы и возобновления, асинхронного отображения прогресса и ограничения скорости.
* [FastCloner](https://github.com/lofcz/FastCloner) - Быстрая библиотека глубокого клонирования для .NET 8+. Не требует настройки и работает сразу.
* [STranslate](https://github.com/ZGGSONG/STranslate) - STranslate — готовый инструмент перевода и OCR, разработанный на WPF.
* [BouncyHSM](https://github.com/harrison314/BouncyHsm) - Программный симулятор HSM и смарт-карт с HTML-интерфейсом, REST API и интерфейсом PKCS#11.

## Торговля

* [Lean](https://github.com/QuantConnect/Lean) - Lean Engine — полностью управляемый движок алгоритмической торговли на C# с открытым исходным кодом для настольного использования и облака. https://www.quantconnect.com/lean/
* [StockSharp](https://github.com/StockSharp/StockSharp) - Платформа торговли и алгоритмической торговли с открытым исходным кодом (фондовые рынки, форекс, биткойны и опционы). https://stocksharp.com

## Автоматизация пользовательского интерфейса

* [Atata](https://github.com/atata-framework/atata) - Полнофункциональный фреймворк автоматизированного тестирования веб-приложений на базе Selenium WebDriver.
* [Managed Windows API](http://mwinapi.sourceforge.net/) - Анализ и автоматизация сторонних приложений Windows/VC++ без доступа к их исходному коду.
* [FlaUI](https://github.com/FlaUI/FlaUI) - FlaUI — библиотека .NET для автоматизированного тестирования пользовательского интерфейса приложений Windows (Win32, WinForms, WPF, Store Apps и др.).
* [PuppeteerSharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer Sharp — порт официального API Puppeteer для Node.JS на .NET.
* [PuppeteerSharp.Contrib](https://github.com/hlaueriksson/puppeteer-sharp-contrib) - Дополнения к Puppeteer Sharp, позволяющие удобно писать читаемые и надёжные тесты браузеров.

## Плагины Visual Studio

* [EFCore.Visualizer](https://marketplace.visualstudio.com/items?itemName=GiorgiDalakishvili.EFCoreVisualizer) - Просмотр плана запроса Entity Framework Core непосредственно в Visual Studio.
* [VsVIM](https://github.com/VsVim/VsVim) - VIM в Visual Studio.
* [Resharper](https://www.jetbrains.com/resharper/) - Инструмент повышения продуктивности разработчиков для Visual Studio. **[$]**
* [Productivity Power Tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.ProductivityPowerTools) - Набор расширений для Visual Studio Professional и выше, повышающий продуктивность разработчиков.
* [Tabs Studio](https://tabsstudio.com/) - Менеджер вкладок Visual Studio с несколькими рядами, цветовым оформлением и группировкой. **[$]**
* [VSColorOutput](https://marketplace.visualstudio.com/items?itemName=MikeWard-AnnArbor.VSColorOutput) - Подсветка цветом вывода окон «Сборка», «Поиск» и «Отладка». Можно добавлять собственные шаблоны сопоставления и цвета.
* [Roslynator](https://github.com/JosefPihrt/Roslynator) - Коллекция из более чем 500 анализаторов, средств рефакторинга и исправлений для C# на базе Roslyn.
* [SonarSource.sonarlint-visualstudio](https://github.com/SonarSource/sonarlint-visualstudio) - SonarLint — бесплатное расширение Visual Studio 2017, 2019 и 2022 с открытым исходным кодом, предоставляющее разработчикам мгновенную обратную связь о новых ошибках и проблемах качества в C#, VB.NET, C/C++, TypeScript и JavaScript.

## Веб-браузеры

* [CefSharp](https://github.com/cefsharp/CefSharp/) - Веб-браузер на HTML5, CSS3 и JS с движком Chromium для WinForms и WPF.
* [SharpBrowser](https://github.com/sharpbrowser/SharpBrowser) - Полнофункциональный веб-браузер .NET, созданный на C# и CefSharp.

## Веб-фреймворки

* [ASP.NET [Core]](https://dotnet.microsoft.com/apps/aspnet) - ASP.NET — бесплатный веб-фреймворк для создания качественных веб-сайтов и приложений.
* [Coalesce](https://github.com/IntelliTect/Coalesce/) - Coalesce — фреймворк для быстрой разработки веб-приложений ASP.NET Core.
* [CodeBehind Framework](https://github.com/elanatframework/Code_behind) - Современный мощный серверный фреймворк для ASP.NET Core.
* [Suave.IO](https://suave.io/) - Фреймворк, библиотека и веб-сервер, от которых вы будете в восторге, завершив проект досрочно и увидев прекрасный код на F#, который написали.
* [DotVVM](https://github.com/riganti/dotvvm) - Фреймворк MVVM для тех, кто не любит писать JavaScript; поддерживает OWIN и ASP.NET Core и имеет бесплатное расширение для Visual Studio 2015 и 2017.
* [Giraffe](https://github.com/giraffe-fsharp/Giraffe) - Функциональный микрофреймворк ASP.NET Core на F# для создания полнофункциональных веб-приложений.

## Веб-серверы

* [EmbedIO](https://github.com/unosquare/embedio) - Кроссплатформенный веб-сервер на Mono.
* [GenHTTP](https://github.com/Kaliumhexacyanoferrat/GenHTTP) - Лёгкий встраиваемый веб-сервер для быстрой разработки REST API.
* [SimpleW](https://stratdev3.github.io/SimpleW) - Библиотека веб-сервера для .NET Core: предельно простая, молниеносно быстрая и со встроенными компонентами (REST API, JWT, WebSocket, самостоятельная сериализация, OpenTelemetry).

## WebSocket

* [SignalR](https://github.com/SignalR/SignalR) - Библиотека для разработчиков ASP.NET, невероятно упрощающая добавление функций веб-взаимодействия в реальном времени в приложения.
* [SuperSocket](https://github.com/kerryjiang/SuperSocket) - SuperSocket — лёгкий расширяемый фреймворк сокетных приложений.
* [Websocket-Sharp](https://github.com/sta/websocket-sharp) - Реализация клиента и сервера протокола WebSocket на C#.
* [Crossertech](https://crosser.io/) - Предоставляет отличный набор инструментов для создания приложений реального времени на платформе Microsoft.NET и многого другого. **[$]**
* [Websocket.Client](https://github.com/Marfusios/websocket-client) - Мультиплатформенная обёртка над нативным классом C# ClientWebSocket со встроенным переподключением и обработкой ошибок.

## Службы Windows

* [Servy](https://github.com/aelassas/servy) - Инструмент преобразования любого приложения в нативную службу Windows с мощными возможностями настройки и управления (современная альтернатива NSSM и WinSW).

## WPF

* [DeftSharp.Windows.Input](https://github.com/Empiree/DeftSharp.Windows.Input) - Прослушивание глобальных событий клавиатуры и мыши. Простое средство для приложений пользовательского интерфейса Windows (WPF, MAUI, Avalonia).
* [Data Grid Extensions](https://github.com/tom-englert/DataGridExtensions) - Модульные расширения для элемента управления WPF DataGrid: фильтрация, дополнительные события столбцов, расширенное поведение размера звёздочных столбцов и многое другое.
* [Extended WPF Toolkit™](https://github.com/xceedsoftware/wpftoolkit) - Богатая коллекция элементов управления, компонентов и утилит для создания приложений WPF.
* [WPF](https://github.com/dotnet/wpf) - WPF — UI-фреймворк .NET Core для создания настольных приложений Windows.

## Библиотеки парсеров

* [Silverfly](https://github.com/furesoft/Silverfly) - Библиотека парсера Pratt.
* [Pidgin](https://github.com/benjamin-hodgson/Pidgin) - Лёгкая, быстрая и гибкая библиотека разбора для C#, разработанная в Stack Overflow.
* [Superpower](https://github.com/datalust/superpower) - Набор инструментов построения парсеров на C# с качественной отчётностью об ошибках.
* [CSLY](https://github.com/b3b00/CSLY) - Лёгкий встраиваемый генератор лексеров и парсеров C#.
* [Parakeet](https://github.com/ara3d/parakeet) - Библиотека рекурсивного нисходящего разбора с перегрузкой операторов для C#.
  
## Генераторы исходного кода

* [CodegenCS](https://github.com/Drizin/CodegenCS) - Набор инструментов генерации кода, где шаблоны пишутся на обычном C#. Включает инструмент командной строки, задачу MSBuild, расширение Visual Studio и генератор исходного кода Roslyn.
* [M31.FluentAPI](https://github.com/m31coding/M31.FluentAPI) - Простая генерация гибких API для классов C#.
* [Supernova.Enum.Generators](https://github.com/EngRajabi/Enum.Source.Generator) - Генератор исходного кода C# для создания класса перечисления из типа enum. Пакет позволяет очень быстро работать с перечислениями без рефлексии.
* [Vogan](https://github.com/SteveDunn/Vogen) - Генератор объектов-значений с анализаторами.
* [Dunet](https://github.com/domn1995/dunet) - Простой генератор исходного кода дискриминированных объединений в C#.
* [SyncMethodGenerator](https://github.com/zompinc/sync-method-generator) – Генерирует синхронные методы из асинхронных, избегая дублирования кода.


# Другие списки

* [List of Automated Testing Tools and Frameworks for .NET](https://github.com/dariusz-wozniak/List-of-Testing-Tools-and-Frameworks-for-.NET) - Список инструментов и фреймворков автоматизированного тестирования (TDD/BDD/ATDD/SBE) для .NET.
* [.NET-libraries-that-make-your-life-easier](https://github.com/tallesl/net-libraries-that-make-your-life-easier) - Библиотеки .NET с открытым исходным кодом, упрощающие жизнь.
* [awesome-LINQ](https://github.com/aloisdg/awesome-linq) - Подборка замечательных библиотек LINQ, инструментов и многого другого.
* [awesome-analyzers](https://github.com/Cybermaxs/awesome-analyzers) - Подборка диагностических анализаторов и исправлений кода платформы компиляторов .NET («Roslyn»).
* [Awesome .NET Core](https://github.com/thangchung/awesome-dotnet-core) - Подборка замечательных библиотек, инструментов, фреймворков и программ для .NET Core.
* [ASP.NET Core Library and Framework Support](https://github.com/jpsingleton/ANCLAFS) - Список библиотек и фреймворков .NET, поддерживаемых в настоящее время ASP.NET Core и .NET Core).
* [Awesome .NET Performance](https://github.com/adamsitnik/awesome-dot-net-performance) - Подборка замечательных книг, курсов, учебных программ, докладов конференций и блогов о производительности .NET, а также вдохновляющих участников проектов с открытым исходным кодом.
* [awesome-ddd](https://github.com/heynickc/awesome-ddd) - Подборка ресурсов по предметно-ориентированному проектированию (DDD), разделению ответственности команд и запросов (CQRS), источникам событий и моделированию событий.
* [Awesome Unity](https://github.com/RyanNielson/awesome-unity) - Тематическая подборка качественных ресурсов, проектов и материалов для Unity, созданная сообществом.
* [Awesome Xamarin](https://github.com/XamSome/awesome-xamarin) - Коллекция интересных библиотек и инструментов для мобильных проектов Xamarin.
* [Awesome Roslyn](https://github.com/ironcev/awesome-roslyn) - Подборка замечательных книг, учебных материалов, проектов с открытым исходным кодом, анализаторов, исправлений кода и рефакторингов Roslyn.
* [.NET Open Source Developer Projects](https://github.com/Microsoft/dotnet/blob/master/dotnet-developer-projects.md) - Поддерживаемый сообществом список проектов .NET с открытым исходным кодом, полезных для любых аспектов разработки.
* [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore) - Подборка замечательных серий обучающих материалов, статей, видео, книг, курсов, демонстрационных проектов и инструментов для микросервисов на .NET Core.
* [dotnet-console-games](https://github.com/dotnet/dotnet-console-games) - Примеры игр, реализованных в консольных приложениях .NET.
* [extra-awesome-dotnet](https://github.com/ara3d/extra-awesome-dotnet) - Отсортированные списки замечательных репозиториев .NET с количеством звёзд, проблем и форков!

# Ресурсы

* [Discover .NET](https://discoverdot.net) - Замечательные ресурсы сообщества .NET и проекты с открытым исходным кодом.
* [NuGet Trends](https://nugettrends.com) - Статистика распространения пакетов NuGet и самые популярные новинки NuGet.
* [Weekly C# Digest](https://csharpdigest.net/) - Еженедельная рассылка с пятью вручную отобранными ссылками от сообщества .NET.
* [ASP.NET Core Developer Roadmap](https://roadmap.sh/aspnet-core) - Полное руководство по становлению разработчиком ASP.NET.
