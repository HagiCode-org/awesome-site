# 마이크로서비스 관련 자료 모음 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Microservice Architecture 관련 원칙과 기술의 큐레이터 목록.

**본문 바로가기**

- [플랫폼](#platforms)
- [프레임 워크 / Runtimes](#frameworks--runtimes)
- [서비스 툴킷](#service-toolkits)
  - [폴리그로](#polyglot)
  - [₢ 킹](#c)
  - [사이트맵](#c-1)
  - [사이트맵](#csharp)
  - [사이트맵](#d)
  - [어랭 VM](#erlang-vm)
  - [이름 *](#go)
  - [스낵 바](#haskell)
  - [자바 VM](#java-vm)
  - [노드.js](#nodejs)
  - [₢ 킹](#perl)
  - [PHP를](#php)
  - [프로젝트](#python)
  - [뚱 베어](#ruby)
  - [뚱 베어](#rust)
- [친구 / UI](#frontend--ui)
- [회사연혁](#capabilities)
  - [API 게이트웨이 / Edge 서비스](#api-gateways--edge-services)
  - [구성 및 발견](#configuration--discovery)
  - [작업 흐름 Orchestration](#workflow-orchestration)
  - [탄력성](#elasticity)
  - [Job Schedulers / 워크로드 자동화](#job-schedulers--workload-automation)
  - [지역 개발](#local-development)
  - [로그아웃](#logging)
  - [이름 *](#messaging)
  - [모니터링 및 디버깅](#monitoring--debugging)
  - [반응성](#reactivity)
  - [제품 설명](#resilience)
  - [보안 보안](#security)
  - [직렬화](#serialization)
  - [제품 정보](#storage)
  - [제품정보](#testing)
- [연속 통합 및 납품](#continuous-integration--delivery)
- [웹 API 모델링 및 문서](#web-api-modeling--documentation)
  - [Async의 장점](#async)
  - [그래프QL](#graphql)
  - [구글 맵](#json)
  - [사이트맵](#rest)
- [표준 / 권고](#standards--recommendations)
  - [월드 와이드 웹](#world-wide-web)
  - [Self-sovereignty 및 분산](#self-sovereignty--decentralisation)
  - [HTTP / 1.1의](#http11)
  - [HTTP / 2의](#http2)
  - [견적 요청](#quic)
  - [사이트맵](#rpc)
  - [이름 *](#messaging-1)
  - [보안 보안](#security-1)
  - [서비스 디스커버리](#service-discovery)
  - [데이터 형식](#data-formats)
  - [관련 기사](#vocabularies)
  - [유니코드](#unicode)
- [조직 설계 / 팀 역학](#organization-design--team-dynamics)
- [기업 & 수직](#enterprise--verticals)
- [더 보기](#theory)
  - [기사 및 논문](#articles--papers)
  - [사이트 및 조직](#sites--organizations)
- [이름 *](#license)
- [관련 기사](#contributing)

## 플랫폼

- [1Backend](https://github.com/1backend/1backend) - AI-native microservices 플랫폼.
- [Jolie](https://jolie-lang.org) - 오픈 소스 마이크로서비스 중심 프로그래밍 언어.
- [OpenWhisk](https://github.com/apache/openwhisk) - Serverless, 어떤 스케일에서 이벤트에 대한 응답에서 기능을 실행하는 오픈 소스 클라우드 플랫폼.
- [Pulumi](https://pulumi.io/) - 코드로 클라우드 네이티브 인프라 SDK 앱과 인프라에 대한 업데이트를 미리 확인하고 관리하기 위해 좋아하는 언어를 사용하여 클라우드에 지속적으로 배포합니다.
- [Triton](https://github.com/joyent/triton) - 차세대, 컨테이너 기반, 서비스 중심 인프라를 제공하는 Open-source 클라우드 관리 플랫폼.

## 프레임 워크 / Runtimes

- [Akka](http://akka.io/) - JVM에 매우 동시, 배포 및 탄력 메시지 구동 응용 프로그램을 구축하기위한 도구 키트 및 실행 시간.
- [Axon (c)](https://axoniq.io/) - JVM에서 DDD, CQRS 및 Event Sourcing 애플리케이션을 쉽게 개발 및 실행하기위한 엔드 투 엔드 개발 및 인프라 플랫폼.
- [Ballerina](https://ballerina.io) - Cloud native 프로그래밍 언어.
- [Bun](https://bun.sh/) - 빠른 올인원 자바 스크립트 실행 시간.
- [Dapr](https://dapr.io) - 어떤 프로그래밍 언어를 사용하여 고도로 실행되는 microservices를 쓰기위한 오픈 소스 실행 시간.
- [Deno](https://deno.land/) - JavaScript, TypeScript 및 WebAssembly runtime with secure defaults 및 훌륭한 개발자 경험.
- [Eclipse Microprofile](https://microprofile.io/) - 여러 구현과 표준화의 목표와 관심의 일반적인 영역에서 협업하여 마이크로서비스 아키텍처를 위한 엔터프라이즈 Java를 최적화하는 개방형 포럼.
- [Erlang/OTP](https://github.com/erlang/otp) - 높은 가용성에 대한 요구 사항이있는 대규모 확장 가능한 부드러운 실시간 시스템을 구축하는 데 사용되는 프로그래밍 언어.
- [Finagle](http://twitter.github.io/finagle) - JVM을 위한 Extensible RPC 시스템은 높은 통화 서버를 구성하는 데 사용됩니다.
- [Gleam](https://gleam.run/) - 유형 안전, 확장 가능한 시스템 구축을위한 친절한 언어.
- [GraalVM](https://www.graalvm.org/) - Microservices에 이상적인 애플리케이션 성능 및 효율성을 크게 개선하는 고성능 런타임.
- [Helidon](https://helidon.io/) - Netty에 의해 구동되는 빠른 웹 코어에서 실행되는 microservices를 작성하는 Java 라이브러리 컬렉션.
- [Ice](https://github.com/zeroc-ice/ice) - C++, C#, Java, JavaScript, Python 등 다양한 RPC 프레임워크
- [Light-4j](https://github.com/networknt/light-4j) - 높은 처리량, 낮은 지연 시간, 작은 기억 발자국 및 더 생산적인 microservices 플랫폼.
- [Micronaut](http://micronaut.io/) - 현대, JVM 기반, 모듈을 구축하기위한 풀 스택 프레임 워크, 쉽게 테스트 가능한 마이크로 서비스 응용.
- [Moleculer](http://moleculer.services/) - Node.js, Java, Go 및 Ruby에 대한 빠르고 강력한 마이크로 서비스 프레임 워크.
- [Open Liberty](https://openliberty.io/) - 빠르고 효율적인 클라우드 네이티브 Java microservices 구축을위한 경량 오픈 프레임 워크.
- [Pears](https://github.com/holepunchto/pear) - Peer-to-peer runtime, 개발 및 배포.
- [SmallRye](https://smallrye.io/) - Eclipse MicroProfile을 포함한 클라우드 개발을 위한 API 및 구현
- [Spin](https://github.com/fermyon/spin) - WebAssembly와 함께 빠르고 안전한 클라우드 마이크로서비스 구축 및 실행을위한 오픈 소스 프레임 워크.
- [ScaleCube](https://github.com/scalecube/scalecube) - JVM을 위한 민감하는 microservices를 건축하는 Toolkit: 저경도, 높강도, 확장 가능하고 탄력.
- [Vert.X](http://vertx.io/) - JVM에 민감하는 신청을 위한 툴킷.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Reactive microservice 응용 프로그램을 구축하기 위해 Vert.x 구성 요소 세트.
- [Wangle](https://github.com/facebook/wangle) - 일관되게, 모듈 및 작곡 가능한 방식으로 건물 서비스를 위한 일반적인 클라이언트/서버 요약 세트를 제공하는 기구.

## 서비스 툴킷

### 폴리그로

- [GRPC](http://www.grpc.io/) - 고성능, 오픈 소스, 모바일 및 HTTP / 2를 먼저 넣어 일반 RPC 프레임 워크. C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP 및 C#의 라이브러리.

### ₢ 킹

- [Lwan](http://lwan.ws/) - 고성능 및 확장 가능한 웹 서버.
- [uSockets](https://github.com/uNetworking/uSockets) - Miniscule cross-platform eventing, 네트워크 및 암호화 동기화 응용 프로그램.

### 사이트맵
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Cap'n Proto C++ RPC 구현
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - OSGi-like C++ 동적 모듈 시스템 및 서비스 레지스트리.
- [Enduro/X](https://github.com/endurox-dev/endurox/) - GNU/Linux의 XATMI 기반 서비스 프레임 워크.
- [Pistache](https://github.com/oktal/pistache) - C++에서 작성된 고성능 REST 툴킷.
- [Poco](http://pocoproject.org/) - C++ 클래스 라이브러리 구축 네트워크 기반 애플리케이션 및 서버.
- [Sogou Workflow](https://github.com/sogou/workflow) - 백엔드 개발 요구 사항의 대부분을 만족시키는 Enterprise-grade 프로그래밍 엔진.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - 애플리케이션의 가장 까다로운 웹 서버를 위한 간단하고 안전한 & 표준 준수.

### 사이트맵

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - 멋진 교육 시리즈, 기사, 비디오, 책, 코스, 샘플 프로젝트 및 .NET 코어에서 마이크로 서비스를위한 도구 모음.

### 사이트맵

- [Vibe.d](http://vibed.org/) - Asynchronous I/O는 D.에 작성된 당신의 방법으로 얻을 수 없습니다.

### 어랭 VM

#### 언어 선택

- [Phoenix](http://www.phoenixframework.org/) - HTML5 앱, API 백엔드 및 분산 시스템 구축을위한 프레임 워크.
- [Plug](https://github.com/elixir-lang/plug) - 웹 애플리케이션 사이의 구성 가능한 모듈의 사양 및 편의성.

#### 언어 선택

- [Cowboy](https://github.com/ninenines/cowboy) - Erlang에서 작성된 작고 빠른 모듈식 HTTP 서버.
- [Mochiweb](https://github.com/mochi/mochiweb) - 경량 HTTP 서버를 구축하는 Erlang 라이브러리.

### 이름 *

- [Chi](https://github.com/go-chi/chi) - 경량, 관용 및 작곡 가능한 라우터 Go HTTP 서비스.
- [Echo](https://echo.labstack.com/) - 이동을 위한 빠르고 unfancy HTTP 서버 기구. 나머지 보다는 10x까지 빨리.
- [Fiber](https://github.com/gofiber/fiber) - 빠른 HTTP 상단에 내장 된 웹 프레임 워크를 표현, 이동을위한 가장 빠른 HTTP 엔진. 0 메모리 할당 및 성능으로 빠른 개발을 용이하게 설계.
- [Gin](https://github.com/gin-gonic/gin) - Gin은 Go (Golang)에서 작성된 HTTP 웹 프레임 워크입니다. 그것은 매우 더 나은 성능을 가진 Martini-like API를, 40배 빨리 특색짓습니다.
- [Goa](https://github.com/goadesign/goa) - 디자인 기반 HTTP microservices in Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Microservice 개발 프레임 워크는 확장성 및 견고성을 강조합니다. microservices의 개발을 단순화하도록 설계되었습니다.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - 몇 가지 클라우드 생태계와 통합하기 쉬운 이동의 신속한 개발을위한 프레임 워크.
- [Go-micro](https://github.com/micro/go-micro) - 분산 시스템 개발 프레임 워크.
- [Go-zero](https://github.com/tal-tech/go-zero) - 웹 및 rpc 분산 시스템 개발 프레임 워크.
- [Gorilla](http://www.gorillatoolkit.org/) - Go 프로그래밍 언어를위한 웹 툴킷.
- [Iris](https://github.com/kataras/iris) - 이동을 위한 빠르고, 간단하고 능률적인 마이크로 웹 기구.
- [Lura](https://github.com/luraproject/lura) - Midwares의 초 성능 API 게이트웨이 구축.
- [RPCX](https://github.com/smallnest/rpcx) - Alibaba Dubbo와 Weibo Motan 같이 NET/RPC에 근거를 둔 분산 RPC 서비스 기구.

### 스낵 바

- [Scotty](https://github.com/scotty-web/scotty) - Ruby 's Sinatra에서 영감을 받은 마이크로 웹 프레임 워크.
- [Servant](https://github.com/haskell-servant/servant) - 유형 수준 웹 DSL.
- [Yesod](https://github.com/yesodweb/yesod) - Haskell RESTful 웹 프레임 워크.

### 자바 VM

#### 프로모션

- [Compojure](https://github.com/weavejester/compojure) - Ring/Clojure를 위한 concise 여정 도서관.
- [Duct](https://duct-framework.org/) - Clojure를 위한 서버 측 기구.
- [System](https://github.com/danielsz/system) - Stuart Sierra의 구성요소 라이브러리의 상단에 내장된 이 구성요소 세트를 제공합니다.
- [Tesla](https://github.com/otto-de/tesla-microservice) - Otto.de의 Clojure microservices의 일부에 대한 일반적인 기초.

#### 다운로드

- [ActiveJ](https://github.com/activej/activej) - 경량 및 빠른 라이브러리 복잡한 하이로드 분산 응용 프로그램 및 Memcached-like 솔루션.
- [Airlift](https://github.com/airlift/airlift) - Java에서 REST 서비스를 구축하기위한 프레임 워크.
- [Armeria](https://line.github.io/armeria/) - Java 8, Netty, Thrift 및 gRPC의 상단에 내장된 오픈 소스 비동기 HTTP/2 RPC/REST 클라이언트/서버 라이브러리.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - 고성능 inter-thread 메시징 라이브러리.
- [Dropwizard](https://github.com/dropwizard/dropwizard) - ops-friendly, high-performance, RESTful 웹 서비스를 개발하기위한 Java 프레임 워크.
- [Dubbo](https://github.com/apache/dubbo) - 고성능, java 기반 RPC 프레임 워크 Alibaba에 의해 오픈 소스.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - 클라이언트와 Dropwizard/Jersey로 Feign 또는 Retrofit을 기반으로 RESTish/RPC 서버 및 클라이언트를 정의하고 생성하기 위한 라이브러리의 Opinionated 세트.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - Java의 RESTful 서비스. JAX-RS 참조 구현.
- [Quarkus](https://quarkus.io/) - 아 Kubernetes OpenJDK HotSpot 및 GraalVM에 적합한 네이티브 Java 스택
- [Ratpack](https://ratpack.io/) - 빠른, 능률, evolvable 및 잘 시험된 HTTP 신청을 촉진하는 Java 라이브러리의 세트. Groovy 언어에 대한 특정 지원이 제공됩니다.
- [Spring Boot](http://projects.spring.io/spring-boot/) - stand-alone, production-grade Spring 기반 응용 프로그램을 쉽게 만들 수 있습니다.

#### 채용 정보

- [Http4k](https://www.http4k.org/) - Pure Kotlin에서 작성된 경량하지만 완전 기능을 갖춘 HTTP 툴킷은 기능적이고 일관성있는 방식으로 HTTP 서비스 제공 및 구성을 가능하게합니다.
- [Ktor](https://ktor.io/) - Kotlin 프로그래밍 언어를 사용하여 비동기 서버 및 클라이언트를 구축하기위한 프레임 워크.

#### 스칼라

- [Finatra](http://twitter.github.io/finatra/) - 빠른, 테스트 가능, Scala HTTP 서비스는 Twitter-Server 및 Finagle에 내장되어 있습니다.
- [Http4s](http://http4s.org/) - HTTP를 위한 최소한의 관용 Scala 공용영역
- [Play](https://www.playframework.com/) - Java 및 Scala의 고속 웹 프레임 워크.

### 노드.js

- [Actionhero](http://www.actionherojs.com/) - 통합 클러스터 기능을 갖춘 Multi-transport Node.js API 서버 및 지연 작업.
- [Express](http://expressjs.com/) - Node.js를 위한 빠른, unopinionated, 최소 웹 프레임 워크
- [Fastify](https://www.fastify.io/) - Node.js에 대한 빠르고 낮은 오버헤드 웹 프레임 워크.
- [FeathersJS](http://feathersjs.com/) - 현대 신청을 위한 열려있는 근원 REST와 순간 API 층.
- [Hono](https://hono.dev/) - Edge를 위한 작은, 간단하고, 매우 빠른 웹 기구. 모든 JavaScript 런타임에서 작동합니다.
- [Koa](http://koajs.com/) - Node.js의 차세대 웹 프레임워크
- [Loopback](http://loopback.io/) - API를 생성하고 데이터를 백업하는 Node.js 프레임워크
- [NestJS](https://docs.nestjs.com/) - 내장 microservices 지원과 효율적인 확장 가능한 서버 측 응용 프로그램을 구축하기위한 Node.js 프레임 워크.
- [Seneca](https://github.com/senecajs/seneca) - Node.js의 microservices 툴킷
- [Serverless](https://github.com/serverless/serverless) - AWS Lambda 및 API Gateway에서 실행되는 웹, 모바일 및 IoT 애플리케이션 구축 및 유지 (이전 JAWS로 알려져 있음).
- [tRPC](https://github.com/trpc/trpc) - End-to-end typesafe APIs.

### ₢ 킹

- [Cro](http://cro.services/) - Perl 6.를 사용하여 재활성 분산 시스템을 만드는 라이브러리
- [Mojolicious](https://mojolicious.org/) - Perl의 차세대 웹 프레임워크.

### PHP를

- [API Platform](https://api-platform.com/) - JSON-LD, Schema.org 및 Hydra 지원과 Symfony의 상단에 API-First 웹 프레임 워크.
- [Ecotone](https://docs.ecotone.tech/) - DDD, CQRS 및 Event Sourcing의 건축 원칙을 기반으로 구축 블록을 제공하고 확장 가능한 응용 프로그램을 만들 수 있습니다.
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf는 Swoole 4.5+를 기반으로 한 매우 성능이 뛰어나고 유연한 PHP CLI 프레임 워크로, 최첨단 코우틴 서버와 다수의 전투 테스트 구성 요소에 의해 구동됩니다.
- [Lumen](https://lumen.laravel.com/) - 멋진 빠른 마이크로 프레임 워크.
- [Slim](http://www.slimframework.com/) - 빠르고 강력한 웹 애플리케이션 및 API를 작성하는 Micro-framework.
- [Spiral](https://spiral.dev/) - 긴 실행 애플리케이션을 위해 설계된 Framework [RoadRunner](https://roadrunner.dev/). 그것은 통합과 같은 고급 기능을 제공합니다 [Temporal](https://temporal.io/) 작업 흐름 및 [Centrifugo](https://centrifugal.dev/) 웹소켓 서버. Microservices 아키텍처에 특히 효과적이며 REST API 및 gRPC 서비스에 강력한 지원을 제공합니다.
- [Swoft](https://github.com/swoft-cloud/swoft/) - 고성능 웹 시스템, API, 미들웨어 및 기본 서비스 구축을 위한 PHP microservices coroutine Framework.
- [Symfony](https://symfony.com/) - Symfony 구성 요소에 따라 Micro-framework.

### 프로젝트

- [Aiohttp](https://github.com/aio-libs/aiohttp) - asyncio의 HTTP 클라이언트/서버.
- [Bottle](https://bottlepy.org) - Python을 위한 빠르고, 간단하고 경량 WSGI 마이크로 웹 프레임 워크.
- [Connexion](https://github.com/zalando/connexion) - 자동 엔드포인트 검증 및 OAuth2 지원과 플라스크의 상단에 Python 용 Swagger / OpenAPI 프레임 워크.
- [Falcon](https://falconframework.org/) - 매우 빠른 앱 백엔드 및 microservices 구축을 위한 Bare-metal Python 웹 API 프레임 워크.
- [FastAPI](https://fastapi.tiangolo.com/) - 현대, 빠른 (고기능), 표준 파이썬 타입 힌트를 기반으로 Python 3.6+를 구축하는 웹 프레임 워크.
- [Flask](http://flask.pocoo.org/) - Werkzeug 및 Jinja 2.를 기반으로 마이크로 서비스를위한 Python 프레임 워크
- [Nameko](https://github.com/onefinestay/nameko) - microservices 구축을위한 Python 프레임 워크.
- [Sanic](https://github.com/sanic-org/sanic) - Sanic은 Python 3.5+ 웹 서버로 빠르게 이동할 수 있습니다.
- [Tornado](http://www.tornadoweb.org/) - 웹 프레임 워크 및 비동기 네트워킹 라이브러리.
- [Twisted](https://twisted.org/) - 이벤트 구동 네트워크 프로그래밍 엔진.
- [Web.py](https://github.com/webpy/webpy/) - Python 용 Minimalist 웹 프레임 워크.

### 뚱 베어

- [Grape](https://github.com/ruby-grape/grape) - REST-like APIs 생성에 대한 의견 프레임 워크
- [Hanami](https://github.com/hanami) - Ruby를 위한 현대 웹 기구.
- [Praxis](https://github.com/rightscale/praxis) - API 설계 및 구현 모두를 위한 Framework.
- [Scorched](https://github.com/wardrop/Scorched) - Ruby를 위한 경량 웹 기구.
- [Sinatra](http://www.sinatrarb.com/) - Sinatra는 최소한의 노력으로 Ruby에서 웹 응용 프로그램을 빠르게 만드는 DSL입니다.

### 뚱 베어

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Rust에서 웹 프로그래밍의 현재 상태 요약.
- [Actix](https://actix.rs/) - Rust를 위한 강력한, pragmatic 및 매우 빠른 웹 기구.
- [Tarpc](https://github.com/google/tarpc) - 사용의 용이성에 초점을 맞춘 Rust를 위한 RPC 프레임워크.
- [Tokio](https://tokio.rs) - 네트워크 애플리케이션을 작성하는 비동기 실행 시간.
- [Tower](https://github.com/tower-rs/tower) - 견고한 네트워킹 클라이언트 및 서버를 구축하기위한 모듈 및 재사용 가능한 구성 요소의 라이브러리.
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2 클라이언트/서버 프레임워크.

## 친구 / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - Micro Frontends에 대한 리소스의 큐레이터 목록.
- [Electrode](https://github.com/electrode-io) - Universal React/Node.js 애플리케이션 플랫폼.
- [Micro Frontends](https://micro-frontends.org) - microservice 아이디어를 프론트엔드 개발에 확장합니다.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniApp 표준화 백서.

## 회사연혁

### API 게이트웨이 / Edge 서비스

- [Ambassador (c)](https://www.getambassador.io) - - - Kubernetes- Envoy에 내장 된 microservices 용 API 게이트웨이.
- [Apache APISIX](https://apisix.apache.org/) - NGINX 및 etcd에 내장 된 고성능, 실시간 API 게이트웨이 및 AI 게이트웨이.
- [APIcast](https://github.com/3scale/APIcast) - APIcast는 NGINX 상단에 내장된 API 게이트웨이입니다. Red Hat 3scale API Management Platform의 일부입니다.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - 웹 앱 호스팅 및 역 프록시는 기본적으로 안전합니다.
- [Caddy](https://caddyserver.com/) - 자동적인 HTTPS를 가진 Extensible HTTP/2 웹 서버.
- [Camel](http://camel.apache.org/) - Java 기반 플런트 API, Spring 또는 Blueprint XML 구성 파일 및 Scala DSL을 포함한 다양한 도메인 별 언어의 라우팅 및 미디어 룰을 정의하는 데 필요한 역량을 갖추고 있습니다.
- [Envoy](https://github.com/lyft/envoy) - Lyft의 개발자로부터 오픈 소스 가장자리 및 서비스 프록시.
- [HAProxy](https://github.com/haproxy/haproxy) - 믿을 수 있는, 고성능 TCP/HTTP 짐 밸런서.
- [Istio](https://istio.io/) - 연결, 관리, 안전한 microservices를 위한 개방형 플랫폼.
- [Keepalived](http://www.keepalived.org/) - Linux 시스템 및 Linux 기반 인프라에 로드밸런싱 및 높은 가용성을위한 간단하고 강력한 기능.
- [Kong](https://github.com/kong/kong) - API를 위한 오픈 소스 관리 층.
- [KrakenD](http://krakend.io/) - 오픈 소스 울트라 성능 API 게이트웨이.
- [Kuma](https://kuma.io/) - 플랫폼 agnostic는 서비스 메시와 microservices를 위한 근원 통제 비행기를 엽니다.
- [Linkerd](https://linkerd.io/) - 클라우드 네이티브 앱을 위한 탄력 있는 서비스 메시.
- [Neutrino](https://github.com/eBay/Neutrino) - Extensible 소프트웨어 로드밸런서.
- [OpenResty](http://openresty.org/) - Nginx의 상단에 내장된 빠른 웹 애플리케이션 서버.
- [Open Service Mesh](https://openservicemesh.io/) - 경량과 확장 가능한 클라우드 네이티브 서비스 메쉬.
- [Otoroshi](https://www.otoroshi.io/) - 경량 API 관리를 가진 현대 HTTP 반전 프록시.
- [Pingora](https://github.com/cloudflare/pingora) - 빠르고 믿을 수 있고 evolvable 네트워크 서비스를 건축하는 도서관.
- [Skipper](https://github.com/zalando/skipper) - 서비스 로직에서 디코딩 라우팅에 유용한 HTTP 라우터.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - 봄 MVC 정상에 API 게이트웨이. API에 대한 간단한, 아직 효과적인 방법을 제공합니다.
- [Tengine](http://tengine.taobao.org/) - 몇 가지 고급 기능을 가진 Nginx의 배포.
- [Træfɪk](http://traefik.io/) - microservices를 쉽게 배치하기 위해 만들어진 현대 HTTP 반전 프록시 및 로드밸런서.
- [Traffic Server](https://github.com/apache/trafficserver) - 클라우드 서비스용 고성능 빌딩 블록
- [Tyk](https://tyk.io/) - 오픈 소스, 빠르고 확장 가능한 API 게이트웨이, 포털 및 API 관리 플랫폼.
- [Vulcand](https://github.com/vulcand/vulcand) - etcd에 의해 역행되는 Programmatic 짐 balancer.
- [Zuul](https://github.com/Netflix/zuul) - 동적 라우팅, 모니터링, 탄력성, 보안 등을 제공하는 가장자리 서비스.

### 구성 및 발견

- [Central Dogma](https://line.github.io/centraldogma/) - Git, ZooKeeper 및 HTTP/2에 기반한 Open-source 높게 사용 가능한 버전 제어 서비스 구성 저장소.
- [Consul](https://www.consul.io/) - 서비스 발견 및 구성이 용이합니다. 분산, 높은 사용 가능, datacenter-aware.
- [Etcd](https://github.com/coreos/etcd) - 공유 구성 및 서비스 검색에 대한 높은 사용 가능한 키 값 저장소.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - AWS 클라우드에 주로 사용되는 REST 기반 서비스로, 로드 밸런싱 및 중간 계층 서버의 장애를 위한 서비스 제공
- [Microconfig](https://microconfig.io) - microservice 구성 관리의 현대적이고 간단한 방법.
- [Nacos](https://github.com/alibaba/nacos) - 사용하기 쉬운 동적 서비스 발견, 구성 및 서비스 관리 플랫폼.
- [SkyDNS](https://github.com/skynetservices/skydns) - 기타 서비스의 발표 및 발견을위한 분산 서비스. DNS 쿼리를 사용하여 사용 가능한 서비스를 발견합니다.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - 분산 시스템의 외부 구성에 대한 서버 및 클라이언트 측면 지원 제공.
- [ZooKeeper](https://zookeeper.apache.org/) - 신뢰할 수있는 분산 된 조정을 가능하게하는 오픈 소스 서버.

### 작업 흐름 Orchestration

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - 시각적 워크플로우를 사용하여 분산 애플리케이션 및 마이크로서비스의 구성을 조정합니다.
- [Cadence](https://cadenceworkflow.io/) - Fault-oblivious stateful 코드 플랫폼.
- [Conductor](https://github.com/Netflix/conductor) - microservices 관현 기관.
- [Inngest](https://github.com/inngest/inngest) - 배경 작업부터 복잡한 워크플로우까지 신뢰할 수 있는 배경 논리를 위한 튼튼한 기능.
- [Kestra](https://github.com/kestra-io/kestra) - 오픈 소스 마이크로 서비스 이벤트 구동, 언어 학습 관현 및 스케줄링 플랫폼.
- [Temporal](https://github.com/temporalio/temporal) - Open source microservices Orchestration platform for running mission Critical code at any scale.
- [Zeebe](https://camunda.com/platform/zeebe/) - Microservices를 통한 비즈니스 프로세스를 정의, 오케스트라, 모니터링합니다.

### 탄력성

- [Hazelcast](http://hazelcast.org/) - 오픈 소스 in-memory data-grid. 서버, 클러스터 및 Geographies를 통해 데이터 및 계산을 배포할 수 있으며, 매우 큰 데이터 세트 또는 높은 데이터 섭취량을 관리할 수 있습니다. 성숙한 기술.
- [Helix](http://helix.apache.org/) - 노드 클러스터에서 호스팅되는 파티션, 복제 및 배포 리소스의 자동 관리에 사용되는 일반적인 클러스터 관리 프레임워크.
- [Ignite](http://ignite.apache.org/) - 고성능, 통합 및 분산 된 인 메모리 플랫폼은 실시간 대용량 데이터 세트에서 컴퓨팅 및 투명성을 위해 전통적인 디스크 기반 또는 플래시 기술로 가능한 것보다 더 빠르게 확대합니다.
- [Libp2p](https://libp2p.io/) - 피어 투 피어 네트워크 응용 프로그램에 대한 프로토콜의 프레임 워크 및 스위트.
- [Mesos](https://mesos.apache.org/) - 기계 (physical 또는 virtual)에서 CPU, 메모리, 저장 및 다른 compute 리소스를 쉽게 구축하고 효과적으로 실행 할 수있는 결함 허용 및 탄성 분산 시스템을 가능하게합니다.
- [Nomad](https://www.nomadproject.io/) - 분산, 매우 사용 가능, datacenter-aware Scheduler.
- [Redisson](https://github.com/mrniko/redisson) - Redis 서버의 상단에 분산 및 확장 가능한 Java 데이터 구조.
- [Serf](https://www.serf.io/) - 클러스터 회원, 장애 감지 및 관현을 위한 분산 솔루션.
- [Valkey](https://github.com/valkey-io/valkey) - 이전 오픈 소스 Redis 프로젝트에서 개발을 재개하는 새로운 프로젝트.
- [Zenoh](https://zenoh.io/) - Pub/sub/query 의정서는 동의, 나머지와 계산에 자료에 있는 자료를 삭제합니다. 효율적으로 지오 분산 스토리지, 쿼리 및 계산과 함께 전통적인 pub/sub을 혼합합니다.

### Job Schedulers / 워크로드 자동화

- [Celery](https://github.com/celery/celery) - 분산 된 메시지 전달을 기반으로 한 비동기 작업 큐 / 작업 큐. 실시간 작업에 집중하고 스케줄링을 지원합니다.
- [Dkron](http://dkron.io/) - 분산, 결함 tolerant 작업 스케줄링 시스템.
- [Faktory](https://github.com/contribsys/faktory) - 언어 배경 작업 서버.
- [Rundeck (c)](http://rundeck.org/) - 작업 스케줄러 및 runbook 자동화. 기존 스크립트 및 도구에 셀프 서비스 액세스가 가능합니다.
- [Schedulix](https://github.com/schedulix/schedulix) - 오픈소스 엔터프라이즈 작업 스케줄링 시스템은 고급 시스템 환경에서 IT 프로세스의 전문 자동화를 위한 획기적인 표준을 제공합니다.

### 지역 개발

- [mirrord](https://metalbear.com/mirrord/) - 로컬 코드를 실행하면 팟이 원격으로 Kubernetes 클러스터.

### 로그아웃

- [Fluentd](http://www.fluentd.org/) - 통합 로깅 레이어의 오픈 소스 데이터 수집기.
- [Graylog](https://www.graylog.org/) - 완전 통합 오픈 소스 로그 관리 플랫폼.
- [Kibana](https://www.elastic.co/products/kibana) - 유연한 분석 및 시각화 플랫폼.
- [LogDNA (c)](https://logdna.com/) - 중앙 로그 관리 소프트웨어. 즉시 수집, 중앙화, 어떤 플랫폼에서 실시간 로그 분석, 어떤 볼륨.
- [Logstash](https://www.elastic.co/logstash) - 이벤트 및 로그 관리 도구.
- [Loki](https://github.com/grafana/loki) - Prometheus 처럼, 하지만 로그에 대 한.

### 이름 *

- [ØMQ](http://zeromq.org/) - Brokerless 지적인 수송 층.
- [ActiveMQ](http://activemq.apache.org/) - 강력한 오픈 소스 메시징 및 통합 패턴 서버.
- [Aeron](https://github.com/real-logic/Aeron) - 능률적인 믿을 수 있는 UDP unicast, UDP multicast 및 IPC 메시지 수송.
- [Beanstalk](https://beanstalkd.github.io/) - 단순, 빠른 작업 큐.
- [Bull](https://github.com/OptimalBits/bull) - Node의 빠르고 신뢰할 수 있는 Redis 기반 큐.
- [Crossbar](https://github.com/crossbario/crossbar) - 분산 및 microservice 응용 프로그램에 대한 오픈 소스 네트워킹 플랫폼. 개방형 웹 애플리케이션 메시징 프로토콜(WAMP)을 구현합니다.
- [Kafka](http://kafka.apache.org/) - 배포된 커밋 로그로 재발송된 메시징.
- [Malamute](https://github.com/zeromq/malamute) - ZeroMQ 기업 메시징 브로커.
- [Mosquitto](http://mosquitto.org/) - MQTT 프로토콜을 구현하는 오픈 소스 메시지 브로커.
- [NATS](https://nats.io/) - 오픈 소스, 고성능, 경량 클라우드 메시징 시스템.
- [NSQ](http://nsq.io/) - 실시간 분산 메시징 플랫폼.
- [Pulsar](https://pulsar.apache.org/) - 분산 pub-sub 메시징 시스템.
- [RabbitMQ](https://www.rabbitmq.com/) - 오픈 소스 Erlang 기반 메시지 브로커 그냥 작동.
- [Redpanda](https://github.com/redpanda-data/redpanda/) - 개발자용 데이터 플랫폼: Kafka API 호환, 10x 빠른, ZooKeeper 및 JVM 없음.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - alibaba 대규모 메시징 사업에서 태어난 메시지 중심 미들웨어를 사용하기 쉬운 낮은 대기 시간, 믿을 수 있는, 확장 가능.

### 모니터링 및 디버깅

- [Beats](https://www.elastic.co/beats/) - Elasticsearch & Logstash의 경량 배퍼.
- [Elastalert](https://github.com/yelp/elastalert) - Elasticsearch에 대한 쉽고 유연한 경고.
- [Ganglia](http://ganglia.info/) - 클러스터 및 그리드와 같은 고성능 컴퓨팅 시스템을 위한 확장 가능한 분산 모니터링 시스템.
- [Grafana](http://grafana.org/) - 열려있는 근원, 특징 흑연을 위한 부유한 미터 대쉬보드 그리고 도표 편집기, InfluxDB & OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - 확장 가능한 실시간 그래프.
- [IOpipe (c)](https://www.iopipe.com/) - Amazon Lambda용 애플리케이션 성능 모니터링
- [Jaeger](https://www.jaegertracing.io/) - 오픈 소스, 엔드 투 엔드 배포
- [OpenTelemetry](https://opentelemetry.io/) - 고품질, ubiquitous 및 효과적인 관찰성을 가능하게하는 휴대용 원격 측정.
- [Prometheus](http://prometheus.io/) - 오픈 소스 서비스 모니터링 시스템 및 시간 시리즈 데이터베이스.
- [Riemann](http://riemann.io/) - 모니터 분산 시스템.
- [Sensu](https://github.com/sensu) - 오늘의 인프라 모니터링.
- [SkyWalking](https://skywalking.apache.org/) - microservices, 클라우드 네이티브 및 컨테이너 기반 (Docker, K8s, Mesos) 건축술.
- [Zabbix](http://www.zabbix.com/) - 오픈소스 엔터프라이즈급 모니터링 솔루션.
- [Zipkin](http://zipkin.io) - 분산된 tracing 체계.

### 반응성

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - 분산 된 스트림 처리 엔진은 변환, 필터, 집계, SQL을 작성하여 데이터 스트림에 가입.
- [Reactor.io](https://github.com/reactor) - Reactive Streams Specification을 기반으로 JVM의 비 차단 응용 프로그램을 구축하기위한 두 번째 세대 반응 라이브러리.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Apache Kafka에 대한 민감성 스트림 API.
- [ReactiveX](http://reactivex.io/) - 관찰 가능한 스트림과 비동기 프로그래밍을위한 API. Java, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby 등에서 사용할 수 있습니다.
- [RSocket](https://rsocket.io/) - Reactive Streams semantics를 제공하는 응용 프로토콜.

### 제품 설명

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - 멋진 chaos 엔지니어링 리소스의 큐레이터 목록.
- [Raft Consensus](https://raft.github.io/) - 이해하기 쉽습니다. 그것은 결함 관능 및 성과에 있는 Paxos와 동등합니다.
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Java8 및 기능 프로그래밍을 위해 설계된 Fault tolerance 라이브러리.
- [Svix](https://svix.com) - Webhooks 서비스를 통해 웹훅을 전체 재량 일정, 만료 후, 서명 검증 및 이벤트 유형으로 사용자에게 보냅니다.

### 보안 보안

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 승인, 테스트 및 액세스 정책을 배포하기위한 권한 관리 시스템. microservice 건축에 있는 확장 가능한, 정밀한 grained 허가.
- [Dex](https://github.com/coreos/dex) - pluggable 연결관을 가진 Opinionated auth/directory 서비스. OpenID는 공급자와 제삼자 OAuth 2.0 위임을 연결합니다.
- [JWT](http://jwt.io/) - JSON Web Tokens는 개방적이고 업계 표준 RFC 7519 방법이며, 두 당사자간에 안전하게 주장합니다.
- [Keycloak](https://github.com/keycloak/keycloak) - 전체 기능 및 확장 가능한 auth 서비스. OpenID는 공급자와 제삼자 OAuth 2.0 위임을 연결합니다.
- [OAuth](http://oauth.net/2/) - 웹 애플리케이션, 데스크탑 애플리케이션, 휴대 전화 및 거실 장치에 대한 특정 권한 흐름을 제공합니다. 많은 구현.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - 현재 OpenID 사양 및 관련 사양을 구현하는 라이브러리, 제품 및 도구.
- [Open Ziti](https://openziti.io/) - 순수한 오픈 소스 소프트웨어로 Zero 신뢰 보안 및 오버레이 네트워킹.
- [ORY](https://www.ory.sh/) - 오픈 소스 ID 인프라 및 서비스.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) - AI 에이전트 메모리 중독을위한 런타임 방어 층 (OWASP ASI06). 탬퍼 메모리 항목, 메모리 경로의 신속한 주입, 및 비밀 누설을 감지합니다. YAML 정책, microsecond 대기권, 0개의 외부 의존성.
- [SCIM](https://simplecloud.info/) - Cross-domain Identity Management 시스템
- [Vault](https://www.vaultproject.io/) - 토큰, 암호, 인증서, API 키 및 현대 컴퓨팅의 기타 비밀에 대한 보안, 상점 및 단단히 액세스 제어.

### 직렬화

- [Avro](https://avro.apache.org/) - Apache data serialization system은 컴팩트하고 빠른 이진 데이터 형식의 풍부한 데이터 구조를 제공합니다.
- [Bond](https://github.com/microsoft/bond/) - schematized 데이터 작업을위한 크로스 플랫폼 프레임 프레임 워크, 확장 서비스에서 Microsoft에서 널리 사용됩니다.
- [BooPickle](https://github.com/ochrons/boopickle) - 효율적인 네트워크 통신을위한 Binary serialization 라이브러리. Scala 및 Scala.js에 대해
- [Cap’n Proto](https://capnproto.org/) - Insanely 빠른 데이터 교환 형식 및 기능 기반 RPC 시스템.
- [CBOR](http://cbor.io/) - 많은 언어에서 CBOR 표준 (RFC 7049)의 구현.
- [Cereal](http://uscilab.github.io/cereal/) - 직렬화를위한 C++11 라이브러리.
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON 및 JSON SMILE 인코딩 / 디코딩.
- [Etch](http://etch.apache.org/) - Cross-platform, 언어 및 운송 독립 프레임 워크 구축 및 구성 네트워크 서비스.
- [Fastjson](https://github.com/alibaba/fastjson) - 빠른 JSON 프로세서.
- [Ffjson](https://github.com/pquerna/ffjson) - 이동을 위한 더 빠른 JSON serialization.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - 빠른 java serialization 하락 in-replacement.
- [Jackson](https://github.com/FasterXML/jackson) - JSON 데이터 형식을 처리하기위한 다목적 Java 라이브러리.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - bytecode 생성을 사용하는 Jackson 모듈은 데이터 바인딩 (+30-40% serialization, deserialization)을 가속화합니다.
- [Kryo](https://github.com/EsotericSoftware/kryo) - Java 직렬화 및 복제 : 빠르고 효율적인 자동.
- [Lite³](https://github.com/fastserial/lite3) - JSON 호환 Zero-copy 직렬화 형식.
- [MessagePack](http://msgpack.org/) - 효율적인 바이너리 직렬화 형식.
- [Protostuff](https://github.com/protostuff/protostuff) - 앞으로의 호환성 (schema 진화) 및 검증을 위한 내장된 지원과 직렬화 라이브러리.
- [SBinary](https://github.com/harrah/sbinary) - Scala 유형의 바이너리 형식을 설명하는 라이브러리.
- [Thrift](http://thrift.apache.org/) - Apache Thrift 소프트웨어 프레임워크, 확장 가능한 크로스 언어 서비스 개발.
- [yyjson](https://github.com/ibireme/yyjson) - C에서 가장 빠른 JSON 라이브러리.

### 제품 정보

- [Apache Cassandra](http://cassandra.apache.org) - 열심도가 높고 고장이 없는 높은 가용성을 제공합니다.
- [Aerospike (c)](http://www.aerospike.com/) - 고성능 NoSQL 데이터베이스는 스케일에서 속도를 전달합니다.
- [ArangoDB](https://www.arangodb.com/) - 무료 배포 및 문서, 그래프 및 키 값에 대한 유연한 데이터 모델과 오픈 소스 데이터베이스.
- [Citus](https://github.com/citusdata/citus) - 확장으로 Distributed PostgreSQL.
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Google 스패너 후 Cloud-native SQL 데이터베이스 모델링.
- [Couchbase](https://github.com/couchbase) - 성능, 확장성 및 단순화 된 관리에 대한 분산 된 데이터베이스.
- [Crate (c)](https://crate.io/) - NoSQL Goodies와 확장 가능한 SQL 데이터베이스.
- [Druid](http://druid.io/) - 빠른 열 중심 분산 데이터 저장소.
- [Elasticsearch](https://www.elastic.co/elasticsearch) - 오픈 소스 배포, 확장 가능, 매우 사용 가능한 검색 서버.
- [Geode](http://geode.incubator.apache.org/) - 오픈 소스, 분산, in-memory 데이터베이스는 Scale-out 응용 프로그램에.
- [Infinispan](http://infinispan.org/) - 캐싱에 사용되는 높은 concurrent key/value datastore.
- [InfluxDB](https://github.com/influxdata/influxdb) - 미터, 이벤트 및 실시간 분석을위한 확장 가능한 데이터 저장소.
- [RethinkDB](http://rethinkdb.com/) - 오픈 소스, 실시간 앱을 쉽게 구축 할 수 있는 데이터베이스.
- [TiKV](https://github.com/tikv) - 분산된 거래 키 값 데이터베이스.
- [TimescaleDB](https://github.com/timescale/timescaledb) - Postgres 확장으로 패키지된 고성능 실시간 분석을위한 시간 시리즈 데이터베이스.
- [Trino](https://trino.io/) - 대용량 데이터 분석을위한 빠른 분산 SQL 쿼리 엔진은 데이터 우주를 탐구하는 데 도움이됩니다.

### 제품정보

- [Goreplay](https://github.com/buger/goreplay) - 테스트 환경에 HTTP 트래픽을 캡처하고 재생하는 도구.
- [Keploy](https://keploy.io) - API 테스트를 위한 오픈 소스 도구 및 실제 트래픽을 캡처하고 테스트 케이스와 스텁으로 변환하여 신뢰할 수 있는 마이크로 서비스 테스트를 가능하게 합니다.
- [Mitmproxy](https://mitmproxy.org/) - 교통 흐름을 허용하는 대화 형 콘솔 프로그램, 검사, 수정 및 재생.
- [MockServer](https://www.mock-server.com) - 여러 프로토콜 (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP 및 기타)에 대한 Mocking, 디버깅 프록시 및 chaos 엔지니어링; 모의 의존성, 기록 / 재생 트래픽, 요청 확인 및 통합 및 탄력 테스트에 대한 결함을 주입합니다.
- [Mountebank](http://www.mbtest.org/) - Cross-platform, 멀티프로토콜 시험은 철사에 두배로 합니다.
- [Pact](https://docs.pact.io) - HTTP API 및 비-HTTP 비동기 메시징 시스템에 대한 계약 테스트 프레임워크.
- [RestQA](https://github.com/restqa/restqa) - microservices 조깅, 단위 및 성능 테스트를 로컬에서 클래스 개발자 경험으로 관리하는 도구.
- [Specmatic](https://specmatic.io) - API 사양 (OpenAPI, AsyncAPI, GraphQL, gRPC 등)을 자동화된 테스트, 서비스 가상화 및 백업 호환성 검증을 위한 실행 가능한 계약으로 변환합니다.
- [VCR](https://github.com/vcr/vcr) - 테스트 스위트의 HTTP 상호 작용을 기록하고 미래의 테스트에서 재생하는 것은 빠르고, 치열한, 정확한 테스트입니다. 다른 언어의 구현을위한 포트 목록을 참조하십시오.
- [Wilma](https://github.com/epam/Wilma) - 결합된 HTTP/HTTPS 서비스 stub와 투명한 프록시 해결책.
- [WireMock](http://wiremock.org/) - 웹서비스를 구축하고 모이는 유연한 라이브러리. 일반적인 목적의 모이는 도구와는 달리, 실제 HTTP 서버를 생성하여 테스트 밑에 코드가 실제 웹 서비스로 연결될 수 있습니다.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - 개발자와 테스터를 위한 경량 서비스 virtualization/API 시뮬레이션 도구.

## 연속 통합 및 납품

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - 지속적인 통합, 지속적인 납품 및 DevOps를 위한 최고 공구의 curated 명부.

## 웹 API 모델링 및 문서

### Async의 장점
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI 사양, 비동기 API를 정의하는 업계 표준.

### 그래프QL

- [GraphQL](http://graphql.org/) - Query language는 데이터 요구 사항 및 상호 작용을 설명하기 위해 직관적이고 유연한 구문 및 시스템을 제공함으로써 클라이언트 애플리케이션을 구축하도록 설계되었습니다.

### 구글 맵

- [JSON:API](https://jsonapi.org/) - 클라이언트가 리소스가 fetched 또는 수정되거나, 서버가 그 요청에 어떻게 응답해야 하는지에 대한 사양.

### 사이트맵

- [API Blueprint](https://apiblueprint.org/) - 전체 API 수명주기 도구. 다른 사람들과 API를 논의하기 위해 그것을 사용합니다. 문서 생성 또는 테스트 스위트. 또는 일부 코드.
- [OpenAPI](https://www.openapis.org/) - OpenAPI 사양 (OAS)은 API 수명주기의 각 단계를 통해 정보를 수행하는 일관된 수단을 제공합니다.
- [RAML](http://raml.org/) - RESTful API 모델링 언어, 실질적으로 숙련 된 API를 설명하는 간단하고 succinct 방법.
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger 생성된 API 문서.
- [Scalar](https://github.com/scalar/scalar) - 오픈 소스 API 플랫폼: 아름다운 API 참조 및 1st 클래스 OpenAPI/Swagger 지원.
- [Slate](https://github.com/slatedocs/slate) - API에 대한 아름다운 정적 문서.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - 봄 MVC 시험과 함께 제작된 자동 생성된 스니펫을 결합하여 문서 RESTful 서비스.
- [Swagger](https://swagger.io/) - RESTful API의 단순하지만 강력한 표현.

## 표준 / 권고

### 월드 와이드 웹

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - World Wide Web의 건축, Volume One.
- [RFC3986](https://tools.ietf.org/html/rfc3986) - Uniform Resource Identifier (URI) : 일반 구문.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - URI 템플릿.
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URI 디자인 및 소유권.

### Self-sovereignty 및 분산

- [DID](https://www.w3.org/TR/did-core/) - 분산 식별자 (DIDs)의 W3C 사양 : 검증 가능한 분산 디지털 ID를 가능하게하는 새로운 유형의 식별자.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - 개인 통신 방법론은 DID의 분산 된 디자인을 구축.
- [DIDComm Protocols](https://didcomm.org/) - DIDComm에 내장 된 프로토콜의 레지스트리, 높은 신뢰를 위해, 어떤 수송에 자기 - sovereign 상호 작용.
- [IDSA](https://internationaldataspaces.org/) - 국제 데이터 공간 협회 (IDSA)는 국제 데이터 공간 (IDS), 보안, 모든 참가자가 데이터의 전체 가치를 실현할 수 있는 데이터 공유 시스템인 International Data Spaces Association (IDSA)와 함께 글로벌 디지털 경제의 미래를 만들 수있는 임무에 있습니다.

### HTTP / 1.1의

- [RFC7230](https://tools.ietf.org/html/rfc7230) - 메시지 Syntax 및 Routing.
- [RFC7231](https://tools.ietf.org/html/rfc7231) - Semantics 및 내용.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - 조건 요청.
- [RFC7233](https://tools.ietf.org/html/rfc7233) - 범위 요구.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - 캐싱.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - 인증.
- [RFC7807](https://tools.ietf.org/html/rfc7807) - HTTP API에 대한 문제 세부 사항.

### HTTP / 2의

- [RFC7540](https://tools.ietf.org/html/rfc7540) - Hypertext Transfer 프로토콜 버전 2.

### 견적 요청

- [QUIC-WG](https://quicwg.org/) - IETF Working Group은 인터넷의 다음 운송 프로토콜을 전달하기 위해 전세됩니다.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - UDP 기반 다중화 및 안전한 운송.

### 사이트맵

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - 무연, 경량 원격 절차 통화 (RPC) 프로토콜.
- [Open RPC](https://open-rpc.org/) - OpenRPC 사양은 JSON-RPC 2.0 API에 대한 표준, 프로그래밍 언어 학습 인터페이스 설명을 정의합니다.

### 이름 *

- [AMQP](https://www.amqp.org/) - 고급 메시지 Queuing 프로토콜.
- [MQTT](https://mqtt.org/) - MQ 원격 측정 전송.
- [STOMP](https://stomp.github.io/) - 간단한 텍스트 지향 메시징 프로토콜.

### 보안 보안

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - Grant Negotiation 및 Authorization Protocol은 소프트웨어의 조각에 위임하는 메커니즘을 정의하고 소프트웨어에 위임을 전달합니다. 이 위임은 API의 집합과 소프트웨어에 직접 전달된 정보에 접근할 수 있습니다.<sup>사이트맵</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0은 OAuth 2.0 프로토콜의 상단에 간단한 정체 레이어입니다. 클라이언트는 Authorization Server에서 수행 한 인증에 따라 최종 사용자의 ID를 확인하고 상호 운용성 및 REST-like 방식으로 최종 사용자에 대한 기본 프로필 정보를 얻을 수 있습니다.
- [PASETO](https://paseto.io/) - Paseto는 당신이 JOSE (JWT, JWE, JWS)에 관하여 JOSE 기준을 격상시키는 많은 디자인 적능력의 무엇이든 없이 모든 것을 사랑합니다. <sup>사이트맵</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - 전송 층 보안 (TLS) 프로토콜 버전 1.2.
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLS 확장.
- [RFC6347](https://tools.ietf.org/html/rfc6347) - Datagram 전송 층 보안 버전 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) - OAuth 2.0 인증 프레임 워크.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - 인증서 투명성.
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signature (JWS)는 JSON 기반 데이터 구조를 사용하여 디지털 서명 또는 메시지 인증 코드 (MAC)로 안전하게 콘텐츠를 나타냅니다.
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web Token (JWT)은 두 당사자간에 전송되는 청구를 나타내는 URL-safe 수단입니다.
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM : 정의, 개요, 개념 및 요구 사항.
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM : Core Schema는 사용자 및 그룹을 대표하기위한 플랫폼 중립 스키마 및 확장 모델을 제공합니다.
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM: Protocol, Application-level, REST 프로토콜은 웹의 정체성 데이터를 제공하고 관리합니다.

### 서비스 디스커버리
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - 클라이언트를위한 메커니즘은 표준 DNS 쿼리를 사용하여 서비스의 명명 된 인스턴스의 목록을 발견합니다.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - 서비스 위치 지정 DNS RR (DNS SRV).

### 데이터 형식

- [RFC4627](https://tools.ietf.org/html/rfc4627) - JavaScript 개체 표기(JSON)
- [RFC7049](https://tools.ietf.org/html/rfc7049) - Binary Object Representation (CBOR)를 활용합니다.
- [BSON](http://bsonspec.org/) - 바이너리 JSON (BSON).
- [JSON-LD](http://json-ld.org/) - Linking Data를 위한 JSON.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - 간단한 바이너리 인코딩 (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - MessagePack 명세.

### 관련 기사

- [JSON Schema](http://json-schema.org/) - Vocabulary는 주석 및 JSON 문서를 검증 할 수 있습니다.
- [Schema.org](http://schema.org/) - 콜라보레이션, 커뮤니티 활동은 인터넷에 구조화된 데이터, 웹 페이지, 이메일 메시지, 그리고 그 이상으로 만들 수 있는 사명을 가지고 있습니다.

### 유니코드

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - 유니코드 컨소시엄. 유니코드 표준, 버전 8.0.0, (산인 전망, 캘리포니아: 유니코드 컨소시엄, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, ISO 10646의 변환 형식.

## 조직 설계 / 팀 역학

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - Melvin E. Conway, 데이터 매칭 매거진 1968. Conway의 법칙을 정의하는 원본 기사.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - 각 팀은 1개 이상 사업 기능 (예: 사업 기능)를 책임집니다. 팀은 하나 이상의 모듈로 구성된 코드베이스를 소유합니다. 그것의 부호 기초는 팀의 인식 수용량을 초과하지 않기 때문에 치수를 잽니다. 팀은 하나의 서비스로 코드를 배포합니다. 팀은 여러 서비스를 가지고 입증 된 필요가없는 한 가지 서비스를 정확히해야합니다.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YTN</sup> - DOES19 런던. "monoliths vs microservices"는 종종 기술 측면, ignoring 전략 및 팀 동적에 중점을 둡니다. 기술 대신 smart-thinking 조직은 현대 소프트웨어에 대한 인도 원칙으로 팀인지 부하로 시작된다. 이 이야기에서, 우리는 방법과 왜, 실제 사례 연구에 의해 설명.

## 기업 & 수직

- [Commercetools](https://commercetools.com/) - 헤드리스 커머스 플랫폼.
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinox는 모든 채널과 터치포인트를 통해 풍부한 하이퍼인화 된 경험을 지원하는 인간 중심의 상거래 및 마케팅 플랫폼입니다.
- [Flamingo](https://www.flamingo.me/) - 유연한 현대 전자 상거래 응용 프로그램을 구축 할 프레임 워크.
- [Medusa](https://medusajs.com/) - 헤드리스 오픈 소스 커머스 플랫폼.

## 더 보기

### 기사 및 논문

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - 복잡한 과학 이론을 통해 적응성 hyperliminal 시스템 설계에 대한 철학적 소개.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - 확장 가능한, 신뢰할 수 있고, 실행 가능한 대규모 시스템의 패턴을 설명하는 업데이트 및 조직 판독 목록. 개념은 탁월한 엔지니어와 신뢰할 수있는 참조의 기사에서 설명됩니다. 사례 연구는 수백만 명의 사용자가 봉사하는 전투 테스트 시스템에서 촬영됩니다.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - 모델은 서비스를 확장하기 위해 크기를 묘사합니다.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - 논리적인 monotonicity로 일관된.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - 기술 전체 인프라에 밖으로 회전하기 전에 사용자의 작은 하위 세트로 천천히 생산에 새로운 소프트웨어 버전을 도입의 위험을 감소시키고 모든 사람에게 사용할 수 있도록.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - 분배된 컴퓨터 체계를 위해 불가능한 미국은 뒤에 오는 보증의 모든 3를 동시에 제공합니다: 일관된, 가용성 및 분할 포용력.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - Serverless 컴퓨팅 요약은 프로그래머가 코드를 작성하고 이유를 작성하기 위해 열심히 만드는 몇 가지 낮은 수준의 작동 세부 사항을 노출합니다. 이 문서는 λ, serverless 컴퓨팅의 본질의 운영적 semantics를 제시함으로써이 문제에 빛을 흘렸습니다.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - 독립적으로 배포 가능한 서비스로 소프트웨어 응용 프로그램을 설계하는 방법.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - F5의 7 부분 시리즈 마이크로 서비스.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - microservices 접근에 대한 몇 가지 문제에 대한 중요한 조언.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - mircoservices 건축 스타일의 비용과 이점을 렌더링하는 가이드.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Reactive 시스템 정의.
- [Reactive Streams](http://www.reactive-streams.org/) - Non-blocking back Pressure를 이용한 비동기 스트림 처리를 위한 표준을 제공하는 이니셔티브.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - Adaptive Systems에 대한 Resource Oriented Computing.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - 소프트웨어 생태계 이해 : 전략적 모델링 접근법.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - 여러 가지 독립적으로 배포 가능한 구성 요소의 추가 테스트 복잡성을 관리하기위한 접근법.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF 파일</sup> - 안전한, 모듈형, 효율적인 서버 소프트웨어 구축을 위한 강력한 프로그래밍 모델을 제시하는 세 가지 요약 설명 : Composable Futures, 서비스 및 필터.

### 사이트 및 조직

- [Cloud Native Computing Foundation](https://www.cncf.io/) - Cloud Native Computing Foundation은 지속 가능한 생태계를 구축하고 마이크로 서비스 아키텍처의 일부로서 고품질의 프로젝트의 별자리 주위에 커뮤니티를 육성합니다.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - 클라우드 네이티브 기술의 상호적인 풍경.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - Martin Fowler의 기사, 비디오, 책 및 팟 캐스트의 선택은 microservices 건축 스타일에 대해 더 많은 것을 가르칠 수 있습니다.
- [Microservice Patterns](http://microservices.io/) - Microservice 아키텍처 패턴 및 모범 사례.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - Microservice 주로 알려진 antipatterns 및 pitfalls.

## 이름 *

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## 관련 기사

자주 묻는 질문 [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) 당신의 제안을 제출하기 전에.

무료 체험 [open an issue](https://github.com/mfornos/awesome-microservices/issues) 또는 [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) 더 알아보기

:star2: 감사합니다!
