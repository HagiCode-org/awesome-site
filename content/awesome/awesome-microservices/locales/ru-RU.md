# Подборка материалов о микросервисах [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Список принципов и технологий, связанных с микросервисной архитектурой.

**Таблица содержимого**

- [Платформы](#platforms)
- [Рамки / Runtimes](#frameworks--runtimes)
- [Сервисные инструменты](#service-toolkits)
  - [полиглот](#polyglot)
  - [C](#c)
  - [C++](#c-1)
  - [C#](#csharp)
  - [D](#d)
  - [Эрланг ВМ](#erlang-vm)
  - [Иди.](#go)
  - [Хаскелл](#haskell)
  - [Java VM](#java-vm)
  - [Node.js](#nodejs)
  - [Перл](#perl)
  - [PHP](#php)
  - [Python](#python)
  - [Рубин](#ruby)
  - [Ржавчина](#rust)
- [Frontend/UI](#frontend--ui)
- [Возможности](#capabilities)
  - [API-шлюзы / Edge Services](#api-gateways--edge-services)
  - [Конфигурация и открытие](#configuration--discovery)
  - [Оркестр рабочего процесса](#workflow-orchestration)
  - [эластичность](#elasticity)
  - [Расписание рабочих мест / Автоматизация рабочей нагрузки](#job-schedulers--workload-automation)
  - [Местное развитие](#local-development)
  - [лесозаготовка](#logging)
  - [сообщение](#messaging)
  - [Мониторинг и отладка](#monitoring--debugging)
  - [реактивность](#reactivity)
  - [Устойчивость](#resilience)
  - [Безопасность](#security)
  - [Сериализация](#serialization)
  - [хранение](#storage)
  - [Испытание](#testing)
- [Непрерывная интеграция и доставка](#continuous-integration--delivery)
- [Моделирование и документирование Web API](#web-api-modeling--documentation)
  - [асинхронный](#async)
  - [GraphQL](#graphql)
  - [Джон](#json)
  - [отдых](#rest)
- [Стандарты/рекомендации](#standards--recommendations)
  - [World Wide Web](#world-wide-web)
  - [Самоуправление и децентрализация](#self-sovereignty--decentralisation)
  - [HTTP/1.1.](#http11)
  - [HTTP/2](#http2)
  - [КВИК](#quic)
  - [РПК](#rpc)
  - [сообщение](#messaging-1)
  - [Безопасность](#security-1)
  - [Сервис Discovery](#service-discovery)
  - [Форматы данных](#data-formats)
  - [Словари](#vocabularies)
  - [Уникод](#unicode)
- [Дизайн организации / Team Dynamics](#organization-design--team-dynamics)
- [Предприятие и вертикали](#enterprise--verticals)
- [Теория](#theory)
  - [Статьи и документы](#articles--papers)
  - [Сайты и организации](#sites--organizations)
- [Лицензия](#license)
- [Вклад](#contributing)

## Платформы

- [1Backend](https://github.com/1backend/1backend) Платформа микросервисов AI-native.
- [Jolie](https://jolie-lang.org) - Язык программирования, ориентированный на микросервисы с открытым исходным кодом.
- [OpenWhisk](https://github.com/apache/openwhisk) Безсерверная облачная платформа с открытым исходным кодом, которая выполняет функции в ответ на события любого масштаба.
- [Pulumi](https://pulumi.io/) SDK для нативной облачной инфраструктуры в виде кода. Используйте свой любимый язык для предварительного просмотра и управления обновлениями ваших приложений и инфраструктуры, а также для постоянного развертывания в любом облаке.
- [Triton](https://github.com/joyent/triton) Платформа облачного управления с открытым исходным кодом, которая обеспечивает инфраструктуру следующего поколения на основе контейнеров и услуг в одном или нескольких центрах обработки данных.

## Рамки / Runtimes

- [Akka](http://akka.io/) Инструментарий и время выполнения для создания высококонкурентных, распределенных и устойчивых приложений, управляемых сообщениями, на JVM.
- [Axon (c)](https://axoniq.io/) Сквозная платформа разработки и инфраструктуры для легкой разработки и запуска любых приложений DDD, CQRS и Event Sourcing на JVM.
- [Ballerina](https://ballerina.io) Облачный родной язык программирования.
- [Bun](https://bun.sh/) - Быстрое время выполнения JavaScript "все в одном".
- [Dapr](https://dapr.io) Среда выполнения с открытым исходным кодом для написания высокопроизводительных микросервисов с использованием любого языка программирования.
- [Deno](https://deno.land/) JavaScript, TypeScript и WebAssembly с безопасными по умолчанию и отличным опытом разработчика.
- [Eclipse Microprofile](https://microprofile.io/) Открытый форум для оптимизации Enterprise Java для архитектуры микросервисов путем внедрения инноваций в нескольких реализациях и сотрудничества в общих областях интересов с целью стандартизации.
- [Erlang/OTP](https://github.com/erlang/otp) Язык программирования, используемый для построения масштабируемых мягких систем реального времени с требованиями высокой доступности.
- [Finagle](http://twitter.github.io/finagle) Расширяемая система RPC для JVM, используемая для создания высококонкурентных серверов.
- [Gleam](https://gleam.run/) Дружелюбный язык для построения безопасных, масштабируемых систем.
- [GraalVM](https://www.graalvm.org/) Высокопроизводительное время выполнения, которое обеспечивает значительное улучшение производительности и эффективности приложений, что идеально подходит для микросервисов.
- [Helidon](https://helidon.io/) Коллекция библиотек Java для написания микросервисов, которые работают на быстром веб-ядре, работающем на Netty.
- [Ice](https://github.com/zeroc-ice/ice) - Комплексный RPC фреймворк с поддержкой C++, C#, Java, JavaScript, Python и многое другое.
- [Light-4j](https://github.com/networknt/light-4j) Высокая пропускная способность, низкая задержка, небольшой объем памяти и более продуктивная платформа микросервисов.
- [Micronaut](http://micronaut.io/) - Современный, основанный на JVM, полнотекстовый фреймворк для создания модульных, легко тестируемых приложений микросервисов.
- [Moleculer](http://moleculer.services/) Быстрые и мощные микросервисы для Node.js, Java, Go и Ruby.
- [Open Liberty](https://openliberty.io/) Легкий открытый фреймворк для создания быстрых и эффективных облачных микросервисов Java.
- [Pears](https://github.com/holepunchto/pear) - Одноранговое время выполнения, разработка и развертывание.
- [SmallRye](https://smallrye.io/) API и реализации, адаптированные для облачной разработки, включая Eclipse MicroProfile.
- [Spin](https://github.com/fermyon/spin) - фреймворк с открытым исходным кодом для создания и запуска быстрых, безопасных и композитных облачных микросервисов с помощью WebAssembly.
- [ScaleCube](https://github.com/scalecube/scalecube) - Инструментарий для создания реактивных микросервисов для СПМ: малозадержка, высокая пропускная способность, масштабируемость и устойчивость.
- [Vert.X](http://vertx.io/) - Инструментарий для создания реактивных приложений на СПМ.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) Набор компонентов Vert.x для создания реактивных приложений микросервисов.
- [Wangle](https://github.com/facebook/wangle) - фреймворк, обеспечивающий набор общих абстракций клиента/сервера для построения услуг последовательным, модульным и композитным способом.

## Сервисные инструменты

### полиглот

- [GRPC](http://www.grpc.io/) Высокая производительность, открытый исходный код, общий RPC фреймворк, который ставит на первое место мобильный и HTTP/2. Библиотеки на C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP и C#.

### C

- [Lwan](http://lwan.ws/) Высокопроизводительный и масштабируемый веб-сервер.
- [uSockets](https://github.com/uNetworking/uSockets) - Скромное кросс-платформенное событие, сеть и криптография для приложений асинхронизации.

### C++
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Реализация Cap’n Proto C++ RPC.
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) OSGi-подобная система динамических модулей C++ и реестр служб.
- [Enduro/X](https://github.com/endurox-dev/endurox/) - Основы XATMI для GNU/Linux.
- [Pistache](https://github.com/oktal/pistache) Высокопроизводительный инструментарий REST, написанный на C++.
- [Poco](http://pocoproject.org/) Библиотеки классов C++ для создания сетевых приложений и серверов.
- [Sogou Workflow](https://github.com/sogou/workflow) - Программный движок корпоративного уровня, предназначенный для удовлетворения большинства требований к разработке бэкэнда.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) Простой, безопасный и соответствующий стандартам веб-сервер для самых требовательных приложений.

### Шарп

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: Коллекция удивительных учебных серий, статей, видео, книг, курсов, образцовых проектов и инструментов для микросервисов в .NET Core.

### D

- [Vibe.d](http://vibed.org/) - Асинхронный I/O, который не мешает вам, написанный на D.

### Эрланг ВМ

#### эликсир

- [Phoenix](http://www.phoenixframework.org/) - Framework для создания приложений HTML5, бэкэндов API и распределенных систем.
- [Plug](https://github.com/elixir-lang/plug) Спецификация и удобства для композитных модулей между веб-приложениями.

#### Эрланг

- [Cowboy](https://github.com/ninenines/cowboy) Небольшой, быстрый, модульный HTTP-сервер, написанный на Erlang.
- [Mochiweb](https://github.com/mochi/mochiweb) Библиотека Erlang для создания легких HTTP-серверов.

### Иди.

- [Chi](https://github.com/go-chi/chi) Легкий, идиоматический и композитный маршрутизатор для создания сервисов Go HTTP.
- [Echo](https://echo.labstack.com/) Быстрый и непривлекательный фреймворк HTTP-сервера для Go. До 10 раз быстрее остальных.
- [Fiber](https://github.com/gofiber/fiber) - Вдохновленный Express веб-фреймворк, построенный поверх Fasthttp, самого быстрого HTTP-движка для Go. Разработан, чтобы облегчить работу для быстрой разработки с нулевым распределением памяти и производительностью.
- [Gin](https://github.com/gin-gonic/gin) Gin - это веб-фреймворк HTTP, написанный на Go (Golang). Он оснащен API, похожим на Martini, с гораздо лучшей производительностью, до 40 раз быстрее.
- [Goa](https://github.com/goadesign/goa) Дизайнерские HTTP-микросервисы в Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Модели разработки микросервисов с акцентом на масштабируемость и надежность. Предназначен для упрощения разработки микросервисов.
- [Go Chassis](https://github.com/go-chassis/go-chassis) Рамки для быстрого развития микросервисов в Go, которые легко интегрировать с некоторыми облачными экосистемами.
- [Go-micro](https://github.com/micro/go-micro) - Рамки разработки распределенных систем.
- [Go-zero](https://github.com/tal-tech/go-zero) - фреймворк разработки распределенных систем Web и rpc.
- [Gorilla](http://www.gorillatoolkit.org/) Веб-инструментарий для языка программирования Go.
- [Iris](https://github.com/kataras/iris) Быстрый, простой и эффективный микро-фреймворк для Go.
- [Lura](https://github.com/luraproject/lura) - Framework для создания ультрапроизводительных API Gateways с промежуточной программой.
- [RPCX](https://github.com/smallnest/rpcx) Распределенная платформа RPC, основанная на NET/RPC, таких как Alibaba Dubbo и Weibo Motan.

### Хаскелл

- [Scotty](https://github.com/scotty-web/scotty) Микро-фреймворк, вдохновленный Sinatra от Ruby, с использованием WAI и Warp.
- [Servant](https://github.com/haskell-servant/servant) - Web DSL на уровне типов.
- [Yesod](https://github.com/yesodweb/yesod) Haskell RESTful Web Framework.

### Java VM

#### Клохьюр

- [Compojure](https://github.com/weavejester/compojure) - Краткая библиотека маршрутизации для Ring/Clojure.
- [Duct](https://duct-framework.org/) - фреймворк на стороне сервера для Clojure.
- [System](https://github.com/danielsz/system) Построенный поверх библиотеки компонентов Стюарта Сьерры, предлагает набор готовых компонентов.
- [Tesla](https://github.com/otto-de/tesla-microservice) - Общая основа для некоторых микросервисов Otto.de Clojure.

#### Java

- [ActiveJ](https://github.com/activej/activej) Легкая и быстрая библиотека для сложных высоконагруженных распределенных приложений и решений, подобных Memcached.
- [Airlift](https://github.com/airlift/airlift) Рамки для построения REST-сервисов на Java.
- [Armeria](https://line.github.io/armeria/) - Асинхронная библиотека HTTP/2 RPC/REST клиент/сервер с открытым исходным кодом, построенная поверх Java 8, Netty, Thrift и gRPC.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) Высокопроизводительная межпоточная библиотека сообщений.
- [Dropwizard](https://github.com/dropwizard/dropwizard) Java Framework для разработки ops-дружественных, высокопроизводительных, RESTful веб-сервисов.
- [Dubbo](https://github.com/apache/dubbo) Высокопроизводительный, основанный на Java фреймворк RPC с открытым исходным кодом от Alibaba.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - Утвержденный набор библиотек для определения и создания серверов и клиентов RESTish/RPC на основе Feign или Retrofit в качестве клиента и Dropwizard/Jersey с определениями сервиса JAX-RS в качестве сервера.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - RESTful services in Java. JAX-RS reference implementation.
- [Quarkus](https://quarkus.io/) - А Kubernetes Нативный стек Java, адаптированный для OpenJDK HotSpot и GraalVM, созданный из лучших библиотек и стандартов Java.
- [Ratpack](https://ratpack.io/) Набор библиотек Java, которые облегчают быстрые, эффективные, эволюционируемые и хорошо протестированные HTTP-приложения. Оказана конкретная поддержка языка Гроовы.
- [Spring Boot](http://projects.spring.io/spring-boot/) - Упрощает создание автономных приложений на основе Spring производственного класса.

#### Котлин

- [Http4k](https://www.http4k.org/) Легкий, но полнофункциональный инструментарий HTTP, написанный в чистом Kotlin, который позволяет обслуживать и потреблять HTTP-сервисы функционально и последовательно.
- [Ktor](https://ktor.io/) Структура для построения асинхронных серверов и клиентов в подключенных системах с использованием языка программирования Kotlin.

#### Скала

- [Finatra](http://twitter.github.io/finatra/) Быстрые, тестируемые, Scala HTTP-сервисы, построенные на Twitter-Server и Finagle.
- [Http4s](http://http4s.org/) Минимальный идиоматический интерфейс Scala для HTTP
- [Play](https://www.playframework.com/) Высокоскоростной веб-фреймворк для Java и Scala.

### Node.js

- [Actionhero](http://www.actionherojs.com/) Многотранспортный API-сервер Node.js с интегрированными кластерными возможностями и отложенными задачами.
- [Express](http://expressjs.com/) Быстрый, непредвзятый, минималистичный веб-фреймворк для Node.js
- [Fastify](https://www.fastify.io/) Fastify, Fast and Low Overhead Web Framework для Node.js.
- [FeathersJS](http://feathersjs.com/) Открытый уровень REST и API в реальном времени для современных приложений.
- [Hono](https://hono.dev/) - Маленький, простой и сверхбыстрый веб-фреймворк для Эджеса. Работает на любом JavaScript Runtime.
- [Koa](http://koajs.com/) Веб-фреймворк нового поколения для Node.js
- [Loopback](http://loopback.io/) - Node.js фреймворк для создания API и легкого подключения к бэкэнд-источникам данных.
- [NestJS](https://docs.nestjs.com/) - фреймворк Node.js для создания эффективных и масштабируемых серверных приложений со встроенной поддержкой микросервисов.
- [Seneca](https://github.com/senecajs/seneca) Инструментарий микросервисов для Node.js
- [Serverless](https://github.com/serverless/serverless) Создание и поддержка веб-приложений, мобильных приложений и IoT, работающих на AWS Lambda и API Gateway (ранее известный как JAWS).
- [tRPC](https://github.com/trpc/trpc) - Сквозные безопасные API.

### Перл

- [Cro](http://cro.services/) Библиотеки для создания реактивных распределенных систем с использованием Perl 6.
- [Mojolicious](https://mojolicious.org/) - Веб-фреймворк следующего поколения для Perl.

### PHP

- [API Platform](https://api-platform.com/) - API-интерфейс поверх Symfony с поддержкой JSON-LD, Schema.org и Hydra.
- [Ecotone](https://docs.ecotone.tech/) Структура, основанная на архитектурных принципах DDD, CQRS и Event Sourcing, которая обеспечивает строительные блоки для создания масштабируемых и расширяемых приложений.
- [Hyperf](https://github.com/hyperf/hyperf) Hyperf - чрезвычайно эффективный и гибкий PHP CLI фреймворк, основанный на Swoole 4.5+, оснащенный самым современным сервером и большим количеством проверенных в бою компонентов.
- [Lumen](https://lumen.laravel.com/) Потрясающе быстрый микрофреймворк.
- [Slim](http://www.slimframework.com/) Микро-фреймворк, который помогает быстро писать простые, но мощные веб-приложения и API.
- [Spiral](https://spiral.dev/) - фреймворк, предназначенный для долгосрочных приложений, использующих [RoadRunner](https://roadrunner.dev/)Он предлагает расширенные функции, такие как интеграция с [Temporal](https://temporal.io/) двигатель рабочего процесса и [Centrifugo](https://centrifugal.dev/) Websocket сервер. Он особенно эффективен для архитектуры микросервисов, обеспечивая надежную поддержку REST API и сервисов gRPC.
- [Swoft](https://github.com/swoft-cloud/swoft/) - PHP microservices coroutine framework для создания высокопроизводительных веб-систем, API, промежуточного ПО и базовых сервисов.
- [Symfony](https://symfony.com/) Микро-фреймворк на основе компонентов Symfony.

### Python

- [Aiohttp](https://github.com/aio-libs/aiohttp) HTTP-клиент/сервер для Asyncio.
- [Bottle](https://bottlepy.org) Быстрый, простой и легкий WSGI микро-фреймворк для Python.
- [Connexion](https://github.com/zalando/connexion) - фреймворк Swagger/OpenAPI для Python поверх Flask с автоматической валидацией конечных точек и поддержкой OAuth2.
- [Falcon](https://falconframework.org/) Bare-metal Python Web API Framework для создания очень быстрых бэкэндов приложений и микросервисов.
- [FastAPI](https://fastapi.tiangolo.com/) Современный, быстрый (высокопроизводительный), веб-фреймворк для создания API с Python 3.6+ на основе стандартных подсказок типа Python.
- [Flask](http://flask.pocoo.org/) Python Framework для микросервисов на основе Werkzeug и Jinja 2.
- [Nameko](https://github.com/onefinestay/nameko) Python Framework для создания микросервисов.
- [Sanic](https://github.com/sanic-org/sanic) Sanic - это веб-сервер Python 3.5 +, похожий на Flask, который написан для быстрого запуска.
- [Tornado](http://www.tornadoweb.org/) - Веб-фреймворк и асинхронная сетевая библиотека.
- [Twisted](https://twisted.org/) - движок сетевого программирования, управляемый событиями.
- [Web.py](https://github.com/webpy/webpy/) Минималистическая веб-фреймворк для Python.

### Рубин

- [Grape](https://github.com/ruby-grape/grape) - Мотивированная структура для создания REST-подобных API
- [Hanami](https://github.com/hanami) Современный веб-фреймворк для Ruby.
- [Praxis](https://github.com/rightscale/praxis) - Рамки для проектирования и реализации API.
- [Scorched](https://github.com/wardrop/Scorched) Легкий веб-фреймворк для Ruby.
- [Sinatra](http://www.sinatrarb.com/) Sinatra - это DSL для быстрого создания веб-приложений в Ruby с минимальными усилиями.

### Ржавчина

- [Are we web yet?](https://www.arewewebyet.org/)  :star: Резюме текущего состояния веб-программирования в Rust.
- [Actix](https://actix.rs/) Мощный, прагматичный и чрезвычайно быстрый веб-фреймворк для Rust.
- [Tarpc](https://github.com/google/tarpc) - Рамки RPC для Rust с акцентом на простоту использования.
- [Tokio](https://tokio.rs) - Асинхронное время выполнения для написания сетевых приложений.
- [Tower](https://github.com/tower-rs/tower) Библиотека модульных и многоразовых компонентов для создания надежных сетевых клиентов и серверов.
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2 клиент/сервер.

## Frontend/UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: Список ресурсов о Micro Frontends.
- [Electrode](https://github.com/electrode-io) - Прикладная платформа Universal React/Node.js.
- [Micro Frontends](https://micro-frontends.org) Расширение идеи микросервиса до фронтенд-разработки.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - Белая книга стандартизации MiniApp.

## Возможности

### API-шлюзы / Edge Services

- [Ambassador (c)](https://www.getambassador.io) - KubernetesНативный API шлюз для микросервисов, построенный на Envoy.
- [Apache APISIX](https://apisix.apache.org/) Высокопроизводительный шлюз API в реальном времени и шлюз AI, построенный на NGINX и т. Д., С горячей перезагрузкой маршрутизации и 100+ плагинов.
- [APIcast](https://github.com/3scale/APIcast) APIcast - это шлюз API, построенный поверх NGINX. Он является частью платформы управления API Red Hat 3scale.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) Веб-хостинг приложений и обратный прокси по умолчанию.
- [Caddy](https://caddyserver.com/) Расширяемый веб-сервер HTTP/2 с автоматическим HTTPS.
- [Camel](http://camel.apache.org/) - Позволяет вам определять правила маршрутизации и посредничества в различных доменных языках, включая Java-ориентированный API, файлы конфигурации Spring или Blueprint XML и Scala DSL.
- [Envoy](https://github.com/lyft/envoy) - Open Source edge и сервисный прокси от разработчиков Lyft.
- [HAProxy](https://github.com/haproxy/haproxy) Надежный высокопроизводительный балансировщик нагрузки TCP/HTTP.
- [Istio](https://istio.io/) Открытая платформа для подключения, управления и защиты микросервисов.
- [Keepalived](http://www.keepalived.org/) Простые и надежные средства для балансировки нагрузки и высокой доступности систем Linux и инфраструктур на основе Linux.
- [Kong](https://github.com/kong/kong) Уровень управления с открытым исходным кодом для API.
- [KrakenD](http://krakend.io/) Открытый исходный код Ultra Performance API Gateway.
- [Kuma](https://kuma.io/) - Агностическая плоскость управления с открытым исходным кодом платформы для сервисных сеток и микросервисов.
- [Linkerd](https://linkerd.io/) - Устойчивая сервисная сетка для нативных облачных приложений.
- [Neutrino](https://github.com/eBay/Neutrino) - Расширяемый программный балансировщик нагрузки.
- [OpenResty](http://openresty.org/) Быстрый сервер веб-приложений, построенный поверх Nginx.
- [Open Service Mesh](https://openservicemesh.io/) - Легкая и расширяемая облачная нативная сервисная сетка.
- [Otoroshi](https://www.otoroshi.io/) Современный HTTP-прокси с легким управлением API.
- [Pingora](https://github.com/cloudflare/pingora) Библиотека для создания быстрых, надежных и эволюционируемых сетевых сервисов.
- [Skipper](https://github.com/zalando/skipper) HTTP-маршрутизатор полезен для отсоединения маршрутизации от логики обслуживания.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) API Gateway на вершине Spring MVC Цель состоит в том, чтобы обеспечить простой, но эффективный способ маршрутизации к API.
- [Tengine](http://tengine.taobao.org/) Распределение Nginx с некоторыми расширенными функциями.
- [Træfɪk](http://traefik.io/) Современный HTTP-прокси-сервер и балансировщик нагрузки, предназначенный для легкого развертывания микросервисов.
- [Traffic Server](https://github.com/apache/trafficserver) Высокопроизводительный строительный блок для облачных сервисов.
- [Tyk](https://tyk.io/) - Открытый исходный код, быстрый и масштабируемый API шлюз, портал и платформа управления API.
- [Vulcand](https://github.com/vulcand/vulcand) - Программный балансировщик нагрузки, поддерживаемый Etcd.
- [Zuul](https://github.com/Netflix/zuul) - edge сервис, который обеспечивает динамическую маршрутизацию, мониторинг, отказоустойчивость, безопасность и многое другое.

### Конфигурация и открытие

- [Central Dogma](https://line.github.io/centraldogma/) - Репозиторий конфигурации служб с открытым исходным кодом, управляемый версиями, основанный на Git, ZooKeeper и HTTP/2.
- [Consul](https://www.consul.io/) - Обнаружение и конфигурация сервиса упростились. Распределенный, высокодоступный и осведомленный о центрах обработки данных.
- [Etcd](https://github.com/coreos/etcd) Высокодоступный магазин ключей для общей конфигурации и обнаружения сервисов.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) Сервис на основе REST, который в основном используется в облаке AWS для поиска сервисов с целью балансировки нагрузки и отказа серверов среднего уровня.
- [Microconfig](https://microconfig.io) Современный и простой способ управления конфигурацией микросервиса.
- [Nacos](https://github.com/alibaba/nacos) - Удобная в использовании динамическая платформа обнаружения, настройки и управления услугами.
- [SkyDNS](https://github.com/skynetservices/skydns) Распределенный сервис для объявления и обнаружения сервисов, построенных поверх и т.д. Он использует DNS-запросы для поиска доступных сервисов.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) Обеспечивает серверную и клиентскую поддержку экстернализованной конфигурации в распределенной системе.
- [ZooKeeper](https://zookeeper.apache.org/) Сервер с открытым исходным кодом, который обеспечивает высоконадежную распределенную координацию.

### Оркестр рабочего процесса

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) Координировать компоненты распределенных приложений и микросервисов с помощью визуальных рабочих процессов.
- [Cadence](https://cadenceworkflow.io/) - Неисправно забытая государственная кодовая платформа.
- [Conductor](https://github.com/Netflix/conductor) - Механизм оркестровки микросервисов.
- [Inngest](https://github.com/inngest/inngest) Прочные функции для надежной фоновой логики, от фоновых заданий до сложных рабочих процессов.
- [Kestra](https://github.com/kestra-io/kestra) - Микросервисы с открытым исходным кодом, ориентированные на события, языковая агностическая оркестровка и платформа планирования.
- [Temporal](https://github.com/temporalio/temporal) Платформа оркестровки микросервисов с открытым исходным кодом для запуска критического кода миссии в любом масштабе.
- [Zeebe](https://camunda.com/platform/zeebe/) Определение, организация и мониторинг бизнес-процессов в микросервисах.

### эластичность

- [Hazelcast](http://hazelcast.org/) - Сетка данных с открытым исходным кодом. Позволяет распределять данные и вычисления между серверами, кластерами и географическими регионами, а также управлять очень большими наборами данных или высокими показателями потребления данных. Зрелые технологии.
- [Helix](http://helix.apache.org/) Общие рамки управления кластерами, используемые для автоматического управления разделяемыми, реплицируемыми и распределенными ресурсами, размещенными на кластере узлов.
- [Ignite](http://ignite.apache.org/) Высокопроизводительная, интегрированная и распределенная платформа in-memory для вычислений и транзакций на крупномасштабных наборах данных в режиме реального времени, на порядок быстрее, чем это возможно с традиционными дисковыми или флэш-технологиями.
- [Libp2p](https://libp2p.io/) - фреймворк и набор протоколов для создания одноранговых сетевых приложений.
- [Mesos](https://mesos.apache.org/) Абстракты процессора, памяти, хранения и других вычислительных ресурсов от машин (физических или виртуальных), что позволяет легко создавать и эффективно работать отказоустойчивым и эластичным распределенным системам.
- [Nomad](https://www.nomadproject.io/) Распределенный, высокодоступный, осведомленный о центрах обработки данных планировщик.
- [Redisson](https://github.com/mrniko/redisson) Распределенные и масштабируемые структуры данных Java поверх сервера Redis.
- [Serf](https://www.serf.io/) Децентрализованное решение для членства в кластере, обнаружения отказов и оркестровки.
- [Valkey](https://github.com/valkey-io/valkey) Новый проект по возобновлению разработки проекта Redis с открытым исходным кодом.
- [Zenoh](https://zenoh.io/) Протокол Pub/sub/query, объединяющий данные в движении, данные в покое и вычисления. Эффективно смешивает традиционный паб с геораспределенным хранилищем, запросами и вычислениями.

### Расписание рабочих мест / Автоматизация рабочей нагрузки

- [Celery](https://github.com/celery/celery) Асинхронная очередь задач / очередь работы на основе распределенной передачи сообщений. Сосредоточен на работе в режиме реального времени и поддерживает планирование.
- [Dkron](http://dkron.io/) Распределенная, отказоустойчивая система планирования работы.
- [Faktory](https://github.com/contribsys/faktory) Языко-агностический постоянный фоновый сервер.
- [Rundeck (c)](http://rundeck.org/) - Планировщик работы и автоматизация ручек. Обеспечить доступ к существующим скриптам и инструментам самообслуживания.
- [Schedulix](https://github.com/schedulix/schedulix) Система планирования рабочих мест с открытым исходным кодом устанавливает новаторские стандарты для профессиональной автоматизации ИТ-процессов в передовых системных средах.

### Местное развитие

- [mirrord](https://metalbear.com/mirrord/) Запускайте локальный код, как если бы он был стручкой в пульте Kubernetes кластер.

### лесозаготовка

- [Fluentd](http://www.fluentd.org/) - Сбор данных с открытым исходным кодом для унифицированного слоя регистрации.
- [Graylog](https://www.graylog.org/) Полностью интегрированная платформа управления журналами с открытым исходным кодом.
- [Kibana](https://www.elastic.co/products/kibana) Гибкая платформа аналитики и визуализации.
- [LogDNA (c)](https://logdna.com/) - Централизованное программное обеспечение для управления журналами. Мгновенный сбор, централизация и анализ журналов в режиме реального времени с любой платформы, в любом объеме.
- [Logstash](https://www.elastic.co/logstash) - Инструмент для управления событиями и журналами.
- [Loki](https://github.com/grafana/loki) - Как Прометей, только для бревен.

### сообщение

- [ØMQ](http://zeromq.org/) - Без брокеров интеллектуальный транспортный слой.
- [ActiveMQ](http://activemq.apache.org/) Мощный сервер с открытым исходным кодом и шаблонами интеграции.
- [Aeron](https://github.com/real-logic/Aeron) Эффективная надежная передача сообщений UDP unicast, UDP multicast и IPC.
- [Beanstalk](https://beanstalkd.github.io/) - Простая, быстрая очередь.
- [Bull](https://github.com/OptimalBits/bull) Быстрая и надежная очередь на основе Redis для Node.
- [Crossbar](https://github.com/crossbario/crossbar) Сетевая платформа с открытым исходным кодом для распределенных и микросервисных приложений. Он реализует открытый протокол обмена сообщениями веб-приложений (WAMP).
- [Kafka](http://kafka.apache.org/) - Переосмысление сообщений Publish-subscribe в виде распределенного журнала фиксации.
- [Malamute](https://github.com/zeromq/malamute) - Брокер корпоративных сообщений ZeroMQ.
- [Mosquitto](http://mosquitto.org/) Брокер сообщений с открытым исходным кодом, который реализует протокол MQTT.
- [NATS](https://nats.io/) Открытый исходный код, высокопроизводительная, легкая облачная система обмена сообщениями.
- [NSQ](http://nsq.io/) Распределенная платформа обмена сообщениями в реальном времени.
- [Pulsar](https://pulsar.apache.org/) - Распределенная система обмена сообщениями.
- [RabbitMQ](https://www.rabbitmq.com/) - Брокер сообщений на основе Erlang с открытым исходным кодом, который просто работает.
- [Redpanda](https://github.com/redpanda-data/redpanda/) Платформа потоковых данных для разработчиков: Kafka API совместима, в 10 раз быстрее, без ZooKeeper и без JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) Низкая задержка, надежное, масштабируемое, простое в использовании промежуточное ПО, ориентированное на сообщения, рожденное в крупном бизнесе обмена сообщениями alibaba.

### Мониторинг и отладка

- [Beats](https://www.elastic.co/beats/) Легкие грузоотправители для Elasticsearch & Logstash.
- [Elastalert](https://github.com/yelp/elastalert) Простое и гибкое оповещение для Elasticsearch.
- [Ganglia](http://ganglia.info/) Масштабируемая распределенная система мониторинга для высокопроизводительных вычислительных систем, таких как кластеры и сетки.
- [Grafana](http://grafana.org/) - Открытый исходный код, с богатой метрической панелью приборов и графическим редактором для Graphite, InfluxDB и OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - Масштабируемый график в реальном времени.
- [IOpipe (c)](https://www.iopipe.com/) Контроль производительности приложений для Amazon Lambda.
- [Jaeger](https://www.jaegertracing.io/) - Сквозное распределенное отслеживание с открытым исходным кодом
- [OpenTelemetry](https://opentelemetry.io/) Высококачественная, вездесущая и портативная телеметрия для обеспечения эффективной наблюдаемости.
- [Prometheus](http://prometheus.io/) - Система мониторинга служб с открытым исходным кодом и база данных временных рядов.
- [Riemann](http://riemann.io/) Мониторинг распределенных систем.
- [Sensu](https://github.com/sensu) - Мониторинг современной инфраструктуры.
- [SkyWalking](https://skywalking.apache.org/) - инструмент мониторинга производительности приложений для распределенных систем, особенно предназначенный для микросервисов, облачных и контейнерных (Docker, K8sМесос) Архитектура.
- [Zabbix](http://www.zabbix.com/) - Открытое решение для мониторинга корпоративного класса.
- [Zipkin](http://zipkin.io) - Распределенная система отслеживания.

### реактивность

- [Arroyo](https://github.com/ArroyoSystems/arroyo) Распределенный механизм обработки потоков для преобразования, фильтрации, агрегирования и объединения потоков данных путем написания SQL.
- [Reactor.io](https://github.com/reactor) Реактивная библиотека второго поколения для создания неблокирующих приложений на JVM на основе спецификации реактивных потоков.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) API реактивных потоков для Apache Kafka
- [ReactiveX](http://reactivex.io/) API для асинхронного программирования с наблюдаемыми потоками. Доступен для идиоматических Java, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby и других.
- [RSocket](https://rsocket.io/) Протокол приложения, обеспечивающий семантику реактивных потоков.

### Устойчивость

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: Список удивительных инженерных ресурсов хаоса.
- [Raft Consensus](https://raft.github.io/) Алгоритм консенсуса, разработанный, чтобы его было легко понять. Это эквивалентно Paxos в отказоустойчивости и производительности.
- [Resilience4j](https://github.com/resilience4j/resilience4j) Библиотека отказоустойчивости, предназначенная для Java8 и функционального программирования.
- [Svix](https://svix.com) - Сервис Webhooks, который отправляет веб-хуки вашим пользователям с полным графиком повторных попыток, экспоненциальным обратным выключением, проверкой подписи и типами событий.

### Безопасность

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) Система управления авторизацией для разработки, тестирования и развертывания политик доступа. Построенная масштабируемая, мелкозернистая авторизация в архитектуре микросервиса.
- [Dex](https://github.com/coreos/dex) - Предполагаемая услуга auth/directory с подключаемыми разъемами. Поставщик OpenID Connect и сторонняя делегация OAuth 2.0.
- [JWT](http://jwt.io/) JSON Web Tokens - это открытый отраслевой стандарт RFC 7519 для безопасного представления претензий между двумя сторонами.
- [Keycloak](https://github.com/keycloak/keycloak) - Полнофункциональный и расширяемый сервис auth. Поставщик OpenID Connect и сторонняя делегация OAuth 2.0.
- [OAuth](http://oauth.net/2/) - Обеспечивает конкретные потоки авторизации для веб-приложений, настольных приложений, мобильных телефонов и устройств гостиной. Много реализаций.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) Библиотеки, продукты и инструменты, реализующие текущие спецификации OpenID и соответствующие спецификации.
- [Open Ziti](https://openziti.io/) Zero Trust Security и Overlay Networking как чистое программное обеспечение с открытым исходным кодом.
- [ORY](https://www.ory.sh/) Инфраструктура и услуги идентификации с открытым исходным кодом.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) Слой защиты от отравления памятью агента ИИ (OWASP ASI06). Обнаруживает подделанные записи памяти, быструю инъекцию в пути памяти и секретную утечку. Политика YAML, микросекундная задержка, нулевая внешняя зависимость.
- [SCIM](https://simplecloud.info/) - Система управления кросс-доменами.
- [Vault](https://www.vaultproject.io/) Защищает, хранит и жестко контролирует доступ к токенам, паролям, сертификатам, ключам API и другим секретам в современных вычислениях.

### Сериализация

- [Avro](https://avro.apache.org/) Система сериализации данных Apache, обеспечивающая богатые структуры данных в компактном, быстром, двоичном формате данных.
- [Bond](https://github.com/microsoft/bond/) Кроссплатформенный фреймворк для работы со схематизированными данными, широко используемый в Microsoft в крупномасштабных сервисах.
- [BooPickle](https://github.com/ochrons/boopickle) Бинарная библиотека сериализации для эффективной сетевой связи. Для Scala и Scala.js
- [Cap’n Proto](https://capnproto.org/) Безумно быстрый формат обмена данными и система RPC на основе возможностей.
- [CBOR](http://cbor.io/) Реализация стандарта CBOR (RFC 7049) на многих языках.
- [Cereal](http://uscilab.github.io/cereal/) Библиотека C++11 для сериализации.
- [Cheshire](https://github.com/dakrone/cheshire) Clojure JSON и JSON SMILE кодирование/декодирование.
- [Etch](http://etch.apache.org/) Кроссплатформенная, языковая и транспортно-независимая структура для построения и потребления сетевых услуг.
- [Fastjson](https://github.com/alibaba/fastjson) - Быстрый процессор JSON.
- [Ffjson](https://github.com/pquerna/ffjson) Быстрая сериализация JSON для Go.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - Быстрое снижение серийности Java.
- [Jackson](https://github.com/FasterXML/jackson) Многоцелевая библиотека Java для обработки формата данных JSON.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - модуль Джексона, который использует генерацию байт-кода для дальнейшего ускорения связывания данных (+30-40% пропускной способности для сериализации, десериализации).
- [Kryo](https://github.com/EsotericSoftware/kryo) Сериализация и клонирование Java: быстро, эффективно, автоматически.
- [Lite³](https://github.com/fastserial/lite3) JSON-совместимый формат сериализации с нулевой копией.
- [MessagePack](http://msgpack.org/) Эффективный формат бинарной сериализации.
- [Protostuff](https://github.com/protostuff/protostuff) Библиотека сериализации со встроенной поддержкой обратной совместимости (эволюция схемы) и валидации.
- [SBinary](https://github.com/harrah/sbinary) Библиотека для описания двоичных форматов для типов Scala.
- [Thrift](http://thrift.apache.org/) - Apache Thrift программный фреймворк для масштабируемой кросс-языковой разработки сервисов.
- [yyjson](https://github.com/ibireme/yyjson) - Самая быстрая библиотека JSON в Си.

### хранение

- [Apache Cassandra](http://cassandra.apache.org) Колонно-ориентированный и обеспечивающий высокую доступность без единой точки отказа.
- [Aerospike (c)](http://www.aerospike.com/) - Высокопроизводительная база данных NoSQL, обеспечивающая скорость в масштабе.
- [ArangoDB](https://www.arangodb.com/) Распределенная бесплатная и открытая база данных с гибкой моделью данных для документов, графиков и ключевых значений.
- [Citus](https://github.com/citusdata/citus) Распределенный PostgreSQL как расширение.
- [CockroachDB (c)](https://www.cockroachlabs.com/) База данных SQL, созданная по модели Google Spanner.
- [Couchbase](https://github.com/couchbase) Распределенная база данных, спроектированная для производительности, масштабируемости и упрощенного администрирования.
- [Crate (c)](https://crate.io/) Масштабируемая база данных SQL с лакомствами NoSQL.
- [Druid](http://druid.io/) - Быстрый колонно-ориентированный распределенный хранилище данных.
- [Elasticsearch](https://www.elastic.co/elasticsearch) Распределенный, масштабируемый и высокодоступный поисковый сервер с открытым исходным кодом.
- [Geode](http://geode.incubator.apache.org/) - Открытый исходный код, распределенная база данных в памяти для масштабируемых приложений.
- [Infinispan](http://infinispan.org/) - Высокосовременный хранилище данных ключа/значения, используемое для кэширования.
- [InfluxDB](https://github.com/influxdata/influxdb) Масштабируемое хранилище данных для метрик, событий и аналитики в реальном времени.
- [RethinkDB](http://rethinkdb.com/) Открытый исходный код, масштабируемая база данных, которая облегчает создание приложений в реальном времени.
- [TiKV](https://github.com/tikv) Распределенная транзакционная база данных ключевых значений.
- [TimescaleDB](https://github.com/timescale/timescaledb) База данных временных рядов для высокопроизводительной аналитики в реальном времени, упакованная в виде расширения Postgres.
- [Trino](https://trino.io/) Быстрый распределенный механизм SQL-запроса для анализа больших данных, который поможет вам исследовать вселенную данных.

### Испытание

- [Goreplay](https://github.com/buger/goreplay) Инструмент для захвата и воспроизведения реального HTTP-трафика в тестовой среде.
- [Keploy](https://keploy.io) Инструмент с открытым исходным кодом для тестирования API и макетирования путем захвата реального трафика и преобразования его в тестовые кейсы и заглушки, что позволяет проводить надежное тестирование микросервисов.
- [Mitmproxy](https://mitmproxy.org/) Интерактивная консольная программа, которая позволяет перехватывать, проверять, изменять и воспроизводить потоки трафика.
- [MockServer](https://www.mock-server.com) - Пересматривание, отладка прокси-сервера и инжиниринг хаоса для нескольких протоколов (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP и т. Д.); Имитация зависимостей, запись / воспроизведение трафика, проверка запросов и ввод неисправностей для интеграции и тестирования устойчивости.
- [Mountebank](http://www.mbtest.org/) - Кроссплатформенный, многопротокольный тест удваивается по проводу.
- [Pact](https://docs.pact.io) - Контрактное тестирование для HTTP API и не-HTTP асинхронных систем обмена сообщениями.
- [RestQA](https://github.com/restqa/restqa) Инструмент для управления макетированием микросервисов, тестированием юнитов и производительности локально с лучшим опытом разработчика в классе.
- [Specmatic](https://specmatic.io) Преобразует спецификации API (OpenAPI, AsyncAPI, GraphQL, gRPC и т.д.) в исполняемые контракты для автоматизированного тестирования, виртуализации услуг и проверки обратной совместимости без написания кода.
- [VCR](https://github.com/vcr/vcr) Записывайте HTTP-взаимодействия вашего набора тестов и воспроизводите их во время будущих тестов для быстрых, детерминированных и точных тестов. Список портов для реализации на других языках.
- [Wilma](https://github.com/epam/Wilma) Комбинированное решение HTTP/HTTPS и прозрачное прокси-решение.
- [WireMock](http://wiremock.org/) Гибкая библиотека для перетаскивания и насмешки веб-сервисов. В отличие от инструментов общего назначения, он работает, создавая фактический HTTP-сервер, к которому ваш тестируемый код может подключаться, как к реальному веб-сервису.
- [Hoverfly](https://github.com/spectolabs/hoverfly) Легкий сервис виртуализации / инструмент моделирования API для разработчиков и тестеров.

## Непрерывная интеграция и доставка

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: Список удивительных инструментов для непрерывной интеграции, непрерывной доставки и DevOps.

## Моделирование и документирование Web API

### асинхронный
- [AsyncAPI](https://github.com/asyncapi/spec) - спецификация AsyncAPI, отраслевой стандарт для определения асинхронных API.

### GraphQL

- [GraphQL](http://graphql.org/) Язык запросов, предназначенный для создания клиентских приложений, предоставляя интуитивно понятный и гибкий синтаксис и систему для описания требований к данным и взаимодействий.

### Джон

- [JSON:API](https://jsonapi.org/) Спецификация того, как клиент должен запрашивать, чтобы ресурсы были извлечены или изменены, и как сервер должен отвечать на эти запросы.

### отдых

- [API Blueprint](https://apiblueprint.org/) Инструменты для всего жизненного цикла API. Используйте его, чтобы обсудить свой API с другими. Создавайте документацию автоматически. Или набор для испытаний. Или даже какой-то код.
- [OpenAPI](https://www.openapis.org/) Спецификация OpenAPI (OAS) обеспечивает последовательное средство для передачи информации на каждом этапе жизненного цикла API.
- [RAML](http://raml.org/) Язык моделирования RESTful API, простой и лаконичный способ описания практически RESTful API.
- [ReDoc](https://github.com/Redocly/redoc) OpenAPI/Swagger-generated API Документация.
- [Scalar](https://github.com/scalar/scalar) Платформа API с открытым исходным кодом: красивые ссылки на API и поддержка OpenAPI / Swagger 1-го класса.
- [Slate](https://github.com/slatedocs/slate) Прекрасная статическая документация для вашего API.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) Документы RESTful услуги путем объединения рукописной документации с автоматически генерируемыми фрагментами, произведенными с Spring MVC Test.
- [Swagger](https://swagger.io/) Простое, но мощное представление вашего RESTful API.

## Стандарты/рекомендации

### World Wide Web

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) Архитектура Всемирной паутины, том первый.
- [RFC3986](https://tools.ietf.org/html/rfc3986) Унифицированный идентификатор ресурса (URI): общий синтаксис.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - Шаблон УРИ.
- [RFC7320](https://tools.ietf.org/html/rfc7320) URI дизайн и собственность.

### Самоуправление и децентрализация

- [DID](https://www.w3.org/TR/did-core/) W3C спецификация децентрализованных идентификаторов (DID): новый тип идентификатора, который позволяет проверять децентрализованную цифровую идентификацию.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - Методология частной коммуникации, построенная на основе децентрализованного дизайна DID.
- [DIDComm Protocols](https://didcomm.org/) Реестр протоколов, построенных на DIDComm, для высоконадежных, самоуправляющихся взаимодействий на любом транспорте.
- [IDSA](https://internationaldataspaces.org/) Международная Ассоциация Пространств Данных (IDSA) ставит перед собой задачу создать будущее глобальной цифровой экономики с Международными Пространствами Данных (IDS), безопасной, суверенной системой обмена данными, в которой все участники могут реализовать всю ценность своих данных.

### HTTP/1.1.

- [RFC7230](https://tools.ietf.org/html/rfc7230) - Синтаксис сообщений и маршрутизация.
- [RFC7231](https://tools.ietf.org/html/rfc7231) Семантика и содержание.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - Условные запросы.
- [RFC7233](https://tools.ietf.org/html/rfc7233) - Запросы на диапазон.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - Кеширование.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - Аутентификация.
- [RFC7807](https://tools.ietf.org/html/rfc7807) Детали проблемы для HTTP API.

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) Протокол передачи гипертекста версии 2.

### КВИК

- [QUIC-WG](https://quicwg.org/) Рабочая группа IETF, которая зафрахтована для доставки следующего транспортного протокола для Интернета.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - мультиплексный и безопасный транспорт на основе UDP.

### РПК

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - Протокол дистанционного вызова процедур (RPC) без состояния.
- [Open RPC](https://open-rpc.org/) Спецификация OpenRPC определяет стандартное описание языков программирования для API JSON-RPC 2.0.

### сообщение

- [AMQP](https://www.amqp.org/) - Расширенный протокол очередей сообщений.
- [MQTT](https://mqtt.org/) - Телеметрический транспорт MQ.
- [STOMP](https://stomp.github.io/) Простой протокол текстовых сообщений.

### Безопасность

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) Протокол о переговорах и разрешении грантов определяет механизм делегирования разрешения части программного обеспечения и передачи этой делегации в программное обеспечение. Эта делегация может включать в себя доступ к набору API, а также информацию, передаваемую непосредственно программному обеспечению.<sup>ДРАФТ</sup>
- [OIDCONN](http://openid.net/connect/) OpenID Connect 1.0 - это простой уровень идентификации поверх протокола OAuth 2.0. Он позволяет клиентам проверять личность конечного пользователя на основе аутентификации, выполняемой сервером авторизации, а также получать базовую информацию о профиле конечного пользователя в совместимой и REST-подобной манере.
- [PASETO](https://paseto.io/) Paseto - это все, что вам нравится в JOSE (JWT, JWE, JWS) без каких-либо недостатков дизайна, которые мешают стандартам JOSE. <sup>ДРАФТ</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) Протокол безопасности транспортного уровня (TLS) Версия 1.2.
- [RFC6066](https://tools.ietf.org/html/rfc6066) - Расширения TLS.
- [RFC6347](https://tools.ietf.org/html/rfc6347) Datagram Transport Layer Security Версия 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) Основы авторизации OAuth 2.0.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - Прозрачность сертификата.
- [RFC7515](https://tools.ietf.org/html/rfc7515) JSON Web Signature (JWS) представляет собой контент, защищенный цифровыми подписями или кодами аутентификации сообщений (MAC) с использованием структур данных на основе JSON.
- [RFC7519](https://tools.ietf.org/html/rfc7519) JSON Web Token (JWT) - это компактный, безопасный для URL способ представления претензий, которые передаются между двумя сторонами.
- [RFC7642](https://tools.ietf.org/html/rfc7642) SCIM: Определения, обзор, концепции и требования.
- [RFC7643](https://tools.ietf.org/html/rfc7643) SCIM: Core Schema, обеспечивает нейтральную схему платформы и модель расширения для представления пользователей и групп.
- [RFC7644](https://tools.ietf.org/html/rfc7644) SCIM: Протокол, протокол уровня приложений, REST для предоставления и управления идентификационными данными в Интернете.

### Сервис Discovery
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - Механизм обнаружения клиентами списка именованных экземпляров сервиса с использованием стандартных DNS-запросов.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) DNS RR для определения местоположения служб (DNS SRV).

### Форматы данных

- [RFC4627](https://tools.ietf.org/html/rfc4627) JavaScript Object Notation (JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) Краткое представление бинарных объектов (CBOR).
- [BSON](http://bsonspec.org/) Бинарный JSON (BSON).
- [JSON-LD](http://json-ld.org/) JSON для связывания данных.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) Простое двоичное кодирование (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) Спецификация MessagePack.

### Словари

- [JSON Schema](http://json-schema.org/) Словарь, который позволяет аннотировать и проверять документы JSON.
- [Schema.org](http://schema.org/) Совместная деятельность сообщества с миссией по созданию, поддержанию и продвижению схем структурированных данных в Интернете, на веб-страницах, в сообщениях электронной почты и за ее пределами.

### Уникод

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - Консорциум Unicode. Unicode Standard, Version 8.0.0, (Mountain View, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, формат преобразования ISO 10646.

## Дизайн организации / Team Dynamics

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF</sup> Мелвин Э. Конвей, журнал Datamation 1968. Оригинальное название: Conway's Law.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) Каждая команда отвечает за одну или несколько бизнес-функций (например, бизнес-возможности). Команда владеет кодовой базой, состоящей из одного или нескольких модулей. Его кодовая база имеет размер, не превышающий когнитивные способности команды. Команда использует свой код в качестве одной или нескольких служб. Команда должна иметь ровно одну услугу, если нет доказанной необходимости иметь несколько услуг.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> - В Лондоне 19. Дискуссия «Монолит против микросервисов» часто фокусируется на технологических аспектах, игнорируя стратегию и командную динамику. Вместо технологий умные организации начинают с командной когнитивной нагрузки в качестве руководящего принципа для современного программного обеспечения. В этом выступлении мы объясним, как и почему, на примере реальных тематических исследований.

## Предприятие и вертикали

- [Commercetools](https://commercetools.com/) - Торговая платформа без головы.
- [Equinox](https://www.infosysequinox.com/) Infosys Equinox - это ориентированная на человека торговая и маркетинговая платформа, которая поддерживает богатый, гиперперсонализированный опыт по любому каналу и точке соприкосновения.
- [Flamingo](https://www.flamingo.me/) Рамки для создания гибких и современных приложений электронной коммерции.
- [Medusa](https://medusajs.com/) - Безголовая торговая платформа с открытым исходным кодом.

## Теория

### Статьи и документы

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) Философское введение в проектирование адаптивных гиперлиминальных систем с помощью научных теорий сложности.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: Обновленный и организованный список чтения для иллюстрации моделей масштабируемых, надежных и эффективных крупномасштабных систем. Концепции объясняются в статьях выдающихся инженеров и достоверных ссылках. Тематические исследования взяты из проверенных в бою систем, которые обслуживают миллионы и миллиарды пользователей.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - Модель, изображающая размеры для масштабирования услуги.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF</sup> Последовательность как логическая монотонность.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) Техника снижения риска внедрения новой версии программного обеспечения в производство путем медленного развертывания изменения для небольшого подмножества пользователей, прежде чем развернуть его на всю инфраструктуру и сделать его доступным для всех.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - заявляет, что распределенная компьютерная система не может одновременно предоставлять все три из следующих гарантий: согласованность, доступность и допуск разделов.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF</sup> Абстракция безсерверных вычислений раскрывает несколько низкоуровневых рабочих деталей, которые затрудняют для программистов написание и рассуждение о своем коде. Эта статья проливает свет на эту проблему, представляя λ, оперативную семантику сущности бессерверных вычислений.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - Конкретный способ проектирования программных приложений как наборов независимо развертываемых сервисов.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF</sup> Серия из семи частей F5 по микросервисам.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) Критические советы о некоторых проблемах, связанных с микросервисами.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - Руководство по оценке затрат и преимуществ архитектурного стиля mircoservices.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Определение реактивных систем.
- [Reactive Streams](http://www.reactive-streams.org/) - Инициатива по обеспечению стандарта асинхронной обработки потока с неблокирующим обратным давлением.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF</sup> Ресурсно-ориентированные вычисления для адаптивных систем.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF</sup> Понимание программных экосистем: стратегический подход к моделированию.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) Подходы для управления дополнительной сложностью тестирования нескольких независимо развертываемых компонентов.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF</sup> Описаны три абстракции, которые объединяются, чтобы представить мощную модель программирования для создания безопасного, модульного и эффективного серверного программного обеспечения: Композитные фьючерсы, услуги и фильтры.

### Сайты и организации

- [Cloud Native Computing Foundation](https://www.cncf.io/) Cloud Native Computing Foundation строит устойчивые экосистемы и поддерживает сообщество вокруг группы высококачественных проектов, которые организуют контейнеры в рамках архитектуры микросервисов.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) Интерактивный ландшафт облачных нативных технологий.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) Выбор Мартина Фаулера статей, видео, книг и подкастов, которые могут рассказать вам больше об архитектурном стиле микросервисов.
- [Microservice Patterns](http://microservices.io/) - Архитектура микросервисов и лучшие практики.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) Микросервис в основном известен антипаттернами и подводными камнями.

## Лицензия

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Вклад

Пожалуйста, читайте [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) Перед тем, как подать свое предложение.

Не стесняйся [open an issue](https://github.com/mfornos/awesome-microservices/issues) или [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) со своими дополнениями.

:star2: Спасибо!
