# Awesome 微服務 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Micro service Architecture 相關原則與技術,

**表格**

- [平台](#platforms)
- [框架/ 執行時間](#frameworks--runtimes)
- [服務工具箱](#service-toolkits)
  - [多晶體](#polyglot)
  - [C](#c)
  - [C++ :](#c-1)
  - [丙#](#csharp)
  - [D](#d)
  - [埃朗 VM](#erlang-vm)
  - [走](#go)
  - [哈斯凱爾](#haskell)
  - [Java VM](#java-vm)
  - [節點.js](#nodejs)
  - [佩爾](#perl)
  - [前一頁](#php)
  - [Py](#python)
  - [露比](#ruby)
  - [拉斯特](#rust)
- [前端 / UI](#frontend--ui)
- [能力](#capabilities)
  - [API 网关/ 邊緣服務](#api-gateways--edge-services)
  - [配置發現( D)](#configuration--discovery)
  - [工作流程管弦](#workflow-orchestration)
  - [弹性](#elasticity)
  - [工作排程器/ 工作负荷自动化](#job-schedulers--workload-automation)
  - [本地發展](#local-development)
  - [日志](#logging)
  - [訊息](#messaging)
  - [監控除錯( D)](#monitoring--debugging)
  - [反應](#reactivity)
  - [复原力](#resilience)
  - [安全](#security)
  - [序列化](#serialization)
  - [儲存](#storage)
  - [測試](#testing)
- [连续集成和交付](#continuous-integration--delivery)
- [Web API 建模與文件](#web-api-modeling--documentation)
  - [同步](#async)
  - [图QL](#graphql)
  - [杰森](#json)
  - [瑞斯特](#rest)
- [标准/](#standards--recommendations)
  - [万维网](#world-wide-web)
  - [自我主权和分散](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2](#http2)
  - [快速](#quic)
  - [RPC](#rpc)
  - [訊息](#messaging-1)
  - [安全](#security-1)
  - [服務發現](#service-discovery)
  - [資料格式](#data-formats)
  - [词汇](#vocabularies)
  - [單碼](#unicode)
- [設計與團隊動力](#organization-design--team-dynamics)
- [企业垂直( V)](#enterprise--verticals)
- [理論](#theory)
  - [文章和文件( P)](#articles--papers)
  - [站台和组织( O)](#sites--organizations)
- [執照](#license)
- [捐款](#contributing)

## 平台

- [1Backend](https://github.com/1backend/1backend) - 人工智能微服務平台
- [Jolie](https://jolie-lang.org) - 開源微服務导向的程式語言。
- [OpenWhisk](https://github.com/apache/openwhisk) - 無伺服器的開源雲平台, 以應付任何规模的事件。
- [Pulumi](https://pulumi.io/) - 云原生基建的SDK是代碼 使用您最愛的語言來預覽和管理您的應用程式和基础设施的更新, 並繼續部署到任何雲( 不需要YAML) 。
- [Triton](https://github.com/joyent/triton) 開源雲管理平台 提供下一代 以容器為基礎 以服務為主的基础设施 跨越一個或更多的數據中心

## 框架/ 執行時間

- [Akka](http://akka.io/) 在JVM上建立高度同步、分布式和回應性訊息的應用程式。
- [Axon (c)](https://axoniq.io/) - 一個端到端的發展與基建平台,
- [Ballerina](https://ballerina.io) - 云土程式語言
- [Bun](https://bun.sh/) - 快速全在JavaScript运行時間。
- [Dapr](https://dapr.io) - 使用任何程式語言寫作高性能微服務的開放源程 。
- [Deno](https://deno.land/) - JavaScript, TypeScript, 和WebAssembly 的运行時間, 都有安全的預設, 而且有很好的開發經驗 。
- [Eclipse Microprofile](https://microprofile.io/) 透過多項實施的創新, 在共同關注的領域上合作,
- [Erlang/OTP](https://github.com/erlang/otp) - 編程語言,用于建立大量可伸縮的軟體实时系統,要求高可用性。
- [Finagle](http://twitter.github.io/finagle) - JVM的廣泛RPC系統 用于建構高通量伺服器
- [Gleam](https://gleam.run/) - 一种友好的語言,用于建立安全型,可伸展的系統。
- [GraalVM](https://www.graalvm.org/) - 高性能的跑步時間,能大大提高應用性能和效率,這是微服務的理想。
- [Helidon](https://helidon.io/) - Java 圖書館的收藏 寫作微信服務,
- [Ice](https://github.com/zeroc-ice/ice) - 支持C++、C#、Java、JavaScript、Python等的全面RPC框架。
- [Light-4j](https://github.com/networknt/light-4j) - 高吞吐量,低耐用度,小的記憶腳印 以及更有成效的微服務平台。
- [Micronaut](http://micronaut.io/) - 以JVM為基礎的現代全裝框架,
- [Moleculer](http://moleculer.services/) - 節點、Java、Go和Ruby的快速和強大的微服務框架。
- [Open Liberty](https://openliberty.io/) - 建立快速高效云母Java微服務的輕量级開放框架。
- [Pears](https://github.com/holepunchto/pear) - 相對跑步、發展和部署
- [SmallRye](https://smallrye.io/) 包括Eclipse MicroProfile。
- [Spin](https://github.com/fermyon/spin) 用WebAssembly建設與運作的開源框架,
- [ScaleCube](https://github.com/scalecube/scalecube) - 为JVM建立反應性微服務工具箱:低纬度、高通量、可伸展性和弹性。
- [Vert.X](http://vertx.io/) - 在JVM上建立反應應用工具箱。
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - 一套Vert.x元件來建立反應性微服務應用程式。
- [Wangle](https://github.com/facebook/wangle) 提供一套共同的客戶端/伺服器抽象,

## 服務工具箱

### 多晶體

- [GRPC](http://www.grpc.io/) - 高性能,開源,一般的RPC框架,把手機和HTTP/2放在首位。 C、C++、Java、Go、Node.js、Python、Ruby、Object-C、PHP和C#的圖書館。

### C

- [Lwan](http://lwan.ws/) - 高性能和可伸縮的網路伺服器。
- [uSockets](https://github.com/uNetworking/uSockets) - 小型跨平台事件, 建立網路與加密,

### C++ :
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Capn Proto C++ RPC 實施。
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - OSGi 類型 C++ 动态模組系統與服務登記 。
- [Enduro/X](https://github.com/endurox-dev/endurox/) - GNU/Linux 基于 XATMI 的服務框架。
- [Pistache](https://github.com/oktal/pistache) - 用C++寫作的高性能 REST工具箱。
- [Poco](http://pocoproject.org/) - C++ 建置基于網路的應用程式和伺服器的類型文庫。
- [Sogou Workflow](https://github.com/sogou/workflow) - 企業級編程引擎 旨在满足大部分後端發展要求
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - 簡易、安全、符合標準的網路伺服器,

### 分割

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: 包括精彩的訓練系列、文章、影片、書本、課程、樣本、微服務工具。

### D

- [Vibe.d](http://vibed.org/) 以D字寫道,

### 埃朗 VM

#### 埃利克斯

- [Phoenix](http://www.phoenixframework.org/) - 构建 HTML5 應用程式、 API 后端和分布式系統的框架 。
- [Plug](https://github.com/elixir-lang/plug) - 網絡應用程式之間可混凝土模組的规格和方便性。

#### 厄朗

- [Cowboy](https://github.com/ninenines/cowboy) 用 Erlang 寫成的小型、快速、模块化的 HTTP 伺服器。
- [Mochiweb](https://github.com/mochi/mochiweb) - Erlang 圖書館,用于建立輕量级的 HTTP 伺服器。

### 走

- [Chi](https://github.com/go-chi/chi) 建立Go HTTP服務的輕量级、平庸和可混凝土路由器。
- [Echo](https://echo.labstack.com/) - Go 的快速且不靈敏的 HTTP 伺服器框架。 最高比其它的快 10x 。
- [Fiber](https://github.com/gofiber/fiber) Express 啟發的網絡框架建在 Fasthttp 之上, 是 Go 最快的 HTTP 引擎。 其設計旨在減輕快速發展的問題, 預計到零內存分配和性能 。
- [Gin](https://github.com/gin-gonic/gin) - Gin 是用 Go (Golang) 寫成的 HTTP 網頁框架 。 它的特徵是馬提尼式的API 性能要好得多 速度要快40倍
- [Goa](https://github.com/goadesign/goa) - Go的HTTP微服務
- [GoFr](https://github.com/gofr-dev/gofr) 有觀點的微服務發展框架, 旨在简化微服務的發展.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Go的微型服務快速發展框架,
- [Go-micro](https://github.com/micro/go-micro) - 分布式系统开发框架。
- [Go-zero](https://github.com/tal-tech/go-zero) - 网络和 rpc 分布式系統發展框架。
- [Gorilla](http://www.gorillatoolkit.org/) - Go程式語言的Web工具箱。
- [Iris](https://github.com/kataras/iris) - Go的快速、簡單和高效的微網路框架。
- [Lura](https://github.com/luraproject/lura) - 搭建超性能 API Gateways的框架 中間軟件。
- [RPCX](https://github.com/smallnest/rpcx) Alibaba Dubbo和微博Motan等,

### 哈斯凱爾

- [Scotty](https://github.com/scotty-web/scotty) 使用WAI和Warp。
- [Servant](https://github.com/haskell-servant/servant) - 類型的網路 DSL。
- [Yesod](https://github.com/yesodweb/yesod) -哈斯克爾的網路框架

### Java VM

#### 克洛珠

- [Compojure](https://github.com/weavejester/compojure) - Ring/Clojure的簡便路線圖書館。
- [Duct](https://duct-framework.org/) Clojure的伺服器邊框
- [System](https://github.com/danielsz/system) - 建在斯圖爾特·塞拉的元件圖書館上面 提供一套現成的元件
- [Tesla](https://github.com/otto-de/tesla-microservice) Otto.de的一些Clojure微服務的通用基礎

#### 爪哇

- [ActiveJ](https://github.com/activej/activej) - 輕量级和快速的函式庫, 用于複雜的高负荷分配應用程式和類似Memcached的溶液。
- [Airlift](https://github.com/airlift/airlift) - 在Java建立REST服務框架。
- [Armeria](https://line.github.io/armeria/) - 開源 HTTP/2 RPC/REST 用戶端/伺服器文庫,建在 Java 8, Netty, Thrift 和 gRPC 上面 。
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - 高性能的間接信箱
- [Dropwizard](https://github.com/dropwizard/dropwizard) - Java框架 發展Ops友好,高性能,RESTful的網絡服務。
- [Dubbo](https://github.com/apache/dubbo) - 一個高性能的、基于Java的RPC框架,由阿里巴巴開源。
- [Conjure](https://github.com/palantir/conjure-java-runtime) Dropwizard/Jersey與JAX-RS服務定義為伺服器。
- [Jersey](https://github.com/eclipse-ee4j/jersey) JAX -RS的參考服務
- [Quarkus](https://quarkus.io/) - A Kubernetes OpenJDK HotSpot和GraalVM的原生Java堆栈,
- [Ratpack](https://ratpack.io/) - 一套 Java 文庫, 方便快速、 高效、 可轉動和經驗良好的 HTTP 應用程式。 提供格魯維語的具体支持。
- [Spring Boot](http://projects.spring.io/spring-boot/) - 很容易建立獨立的 產品級的 Spring 應用程式

#### 科特林

- [Http4k](https://www.http4k.org/) - 輕而易舉但完全適合的 HTTP 工具箱,用純的 Kotlin 寫成, 使 HTTP 服務的服務和消耗以功能和一致的方式。
- [Ktor](https://ktor.io/) - 使用 Kotlin 編程語言建立連接系統同步伺服器和客戶端的框架。

#### 斯卡拉

- [Finatra](http://twitter.github.io/finatra/) Scala HTTP服務建在Twitter-Server和Finagle上。
- [Http4s](http://http4s.org/) - HTTP 的最小、平凡的 Scala 介面
- [Play](https://www.playframework.com/) - Java和Scala的高速網路框架。

### 節點.js

- [Actionhero](http://www.actionherojs.com/) - 多運輸節點Js API伺服器,具有集成群組能力和延遲工作.
- [Express](http://expressjs.com/) - 快速、無意識、最小化的Node.js網頁框架
- [Fastify](https://www.fastify.io/) - 快速和低水平的網頁框架,供Node.js使用。
- [FeathersJS](http://feathersjs.com/) - 用于現代應用程式的開源 REST 與实时 API 層。
- [Hono](https://hono.dev/) - 邊緣小、簡單、超快的網絡框架 它在任何 JavaScript 執行時效應 。
- [Koa](http://koajs.com/) - Node.js 的下一代網路框架
- [Loopback](http://loopback.io/) - 建立 API 的節點. js 框架, 很容易連接到後端資料來源 。
- [NestJS](https://docs.nestjs.com/) - 建設高效且可縮放的伺服器端應用程式的節點(Node.js)框架,
- [Seneca](https://github.com/senecajs/seneca) - 用于Node.js的微服務工具箱
- [Serverless](https://github.com/serverless/serverless) - 在AWS Lambda和API Gateway(前稱JAWS)上建立和维护網路、手機和IOT應用程式。
- [tRPC](https://github.com/trpc/trpc) - 端到端型安全API。

### 佩爾

- [Cro](http://cro.services/) - 使用 Perl 6 建立反應分配系統的圖書館
- [Mojolicious](https://mojolicious.org/) - Perl的下一代網絡框架。

### 前一頁

- [API Platform](https://api-platform.com/) - API第一網絡框架,
- [Ecotone](https://docs.ecotone.tech/) 以 DDD 、 CQRS 和 Event Surcing 的建築原理为基础的框架,
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf是一個極具性能且灵活的PHP CLI框架,以Swoole 4.5+为基础,由最先进的coroutine伺服器和大量的戰鬥測試元件提供动力.
- [Lumen](https://lumen.laravel.com/) - 超快的微架子
- [Slim](http://www.slimframework.com/) 幫助你快速寫入簡單而強大的網路應用程式和API的微架构。
- [Spiral](https://spiral.dev/) - 使用 [RoadRunner](https://roadrunner.dev/)它提供先进的特征,如与 [Temporal](https://temporal.io/) 工作流程引擎及 [Centrifugo](https://centrifugal.dev/) Websocket 伺服器 。 它對微服務架构尤其有效,
- [Swoft](https://github.com/swoft-cloud/swoft/) 建立高性能網路系統的PHP微服務框架、API、中件和基本服務。
- [Symfony](https://symfony.com/) - 基于Symfony元件的微型框架。

### Py

- [Aiohttp](https://github.com/aio-libs/aiohttp) - HTTP 用戶端/伺服器的Ayncio。
- [Bottle](https://bottlepy.org) - Python的快速、簡單和輕巧的WSGI微網框。
- [Connexion](https://github.com/zalando/connexion) - Swagger/ OpenAPI 弗拉斯克上方的 Python 框架, 有自動端點驗證和 OAuth2 支援 。
- [Falcon](https://falconframework.org/) - 建立非常快的app后端和微服務的 裸金屬 Python 網頁 API 框架
- [FastAPI](https://fastapi.tiangolo.com/) - 現代、快速( 高性能) 、 基于標準的 Python 型態提示建立 API 的網頁框架 。
- [Flask](http://flask.pocoo.org/) - 基于Werkzeug和Jinja 2的 Python 微服務框架
- [Nameko](https://github.com/onefinestay/nameko) -建微服務的Python框架。
- [Sanic](https://github.com/sanic-org/sanic) - Sanic是弗拉斯克式的Python 3.5+網頁伺服器,寫的快
- [Tornado](http://www.tornadoweb.org/) - 網絡框架和同步網路文庫。
- [Twisted](https://twisted.org/) - 事件驱动的網路程式引擎。
- [Web.py](https://github.com/webpy/webpy/) - Python的最小網路框架。

### 露比

- [Grape](https://github.com/ruby-grape/grape) - 建立 REST 類似 API 的觀點框架
- [Hanami](https://github.com/hanami) -魯比的現代網絡框架
- [Praxis](https://github.com/rightscale/praxis) - 设计和实施API的框架。
- [Scorched](https://github.com/wardrop/Scorched) 露比的輕量級網絡框架
- [Sinatra](http://www.sinatrarb.com/) Sinatra是一款DSL,

### 拉斯特

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Rust的網絡編程狀態概述。
- [Actix](https://actix.rs/) 強大、务实、快速的Rust網絡框架。
- [Tarpc](https://github.com/google/tarpc) - RPC Rust框架,侧重于易用性。
- [Tokio](https://tokio.rs) - 寫作網路應用程式的同步运行時間。
- [Tower](https://github.com/tower-rs/tower) - 建立牢固的網路客戶端和伺服器的模块化和可重用元件库。
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2 客戶端/伺服器框架。

## 前端 / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: 關於微前端的資源清單
- [Electrode](https://github.com/electrode-io) - 通用反應/節點Js應用平台。
- [Micro Frontends](https://micro-frontends.org) - 把微服務想法延伸至前端發展
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniApp标准化白皮书。

## 能力

### API 网关/ 邊緣服務

- [Ambassador (c)](https://www.getambassador.io) - – Kubernetes- 以特使為基礎的微型服務的內生API网關
- [Apache APISIX](https://apisix.apache.org/) - 高性能、实时API网关和AI网关建在NGINX等上,有熱重載路由和100+插件。
- [APIcast](https://github.com/3scale/APIcast) - APIcast是建在NGINX上面的API网关. 它是紅帽3級API管理平台的一部分.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - 網絡應用程式主機和逆向代理安全
- [Caddy](https://caddyserver.com/) - 廣泛的 HTTP/2 網路伺服器,有自動的 HTTPS 。
- [Camel](http://camel.apache.org/) - 授权您用不同網域特有語言來定義路由與介面規則, 包括一個基于 Java 的流動 API, Spring 或 Bluint XML 設定檔, 以及 Scala DSL 。
- [Envoy](https://github.com/lyft/envoy) -開源邊緣和服务代理商 來自Lyft的開源邊緣
- [HAProxy](https://github.com/haproxy/haproxy) - 可靠、高性能的TCP/HTTP负荷平衡器。
- [Istio](https://istio.io/) - 一個開放的平台 連接,管理,以及安全的微服務。
- [Keepalived](http://www.keepalived.org/) Linux 系統和 Linux 基礎基礎建設的裝載平衡和高可用性。
- [Kong](https://github.com/kong/kong) - API的開源管理層。
- [KrakenD](http://krakend.io/) - 開源超強性能 API Gateway.
- [Kuma](https://kuma.io/) - 平台不可知的開源控制平面 服務網格和微服務。
- [Linkerd](https://linkerd.io/) 云母應用程式的耐力服務網格
- [Neutrino](https://github.com/eBay/Neutrino) - 廣泛的軟體負載平衡器
- [OpenResty](http://openresty.org/) - 在Nginx上建的快速網路應用伺服器。
- [Open Service Mesh](https://openservicemesh.io/) - 輕量级和可延伸的云母服務网
- [Otoroshi](https://www.otoroshi.io/) - 現代HTTP反轉代理 配有輕量级API管理.
- [Pingora](https://github.com/cloudflare/pingora) - 建立快速、可靠和可動的網路服務的圖書館。
- [Skipper](https://github.com/zalando/skipper) - HTTP 路由器 有用於把路由與服務邏輯分離
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - API Gateway 在春季MVC的上面。 目的是提供通向API的簡單而有效的方式.
- [Tengine](http://tengine.taobao.org/) - 配送Nginx 有一些先进的功能。
- [Træfɪk](http://traefik.io/) - 現代的HTTP反轉代碼和負载平衡器 以輕易地部署微服務。
- [Traffic Server](https://github.com/apache/trafficserver) - 云服務的高性能构件
- [Tyk](https://tyk.io/) - 開源、快速可伸展的API网关、门户网站和API管理平台。
- [Vulcand](https://github.com/vulcand/vulcand) - 由 Etcd 支持的程序載重平衡器
- [Zuul](https://github.com/Netflix/zuul) 提供动态路線、監控、耐力、安全等等的邊緣服務。

### 配置發現( D)

- [Central Dogma](https://line.github.io/centraldogma/) - 基于 Git, Zookeeper 和 HTTP/2 的開源高版本控制服務設定主目錄。
- [Consul](https://www.consul.io/) - 服務的發現和設型就容易了 分布, 高度可用, 和數據中心 - 知識。
- [Etcd](https://github.com/coreos/etcd) - 供共享配置和服务發現的金鑰價值商店。
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - 基于 REST 的服務,主要在 AWS 雲中用于定位服務,以平衡中端伺服器的載入和失效。
- [Microconfig](https://microconfig.io) - 現代和簡單的微服務配置管理方式。
- [Nacos](https://github.com/alibaba/nacos) ——易用动态服務發現,配置和服务管理平台.
- [SkyDNS](https://github.com/skynetservices/skydns) - 分布式服務, 它利用 DNS 查詢來發現可用的服務 。
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - 提供伺服器和客戶端對分布式系統外化設定的支持。
- [ZooKeeper](https://zookeeper.apache.org/) - 開源伺服器,可以高度可靠的分布式协调。

### 工作流程管弦

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - 利用視覺工作流程协调分布式應用程式和微服務的元件。
- [Cadence](https://cadenceworkflow.io/) - 錯誤 - 不可思議的代碼平台
- [Conductor](https://github.com/Netflix/conductor) - 微型服務管弦機
- [Inngest](https://github.com/inngest/inngest) - 可靠背景邏輯的持久函數, 從背景工作到複雜的工作流程。
- [Kestra](https://github.com/kestra-io/kestra) 開放源碼微服務由事件導引 語言不可知的管弦和排程平台。
- [Temporal](https://github.com/temporalio/temporal) -開源微服務 管弦樂平台 以執行任何大小的任務關鍵碼
- [Zeebe](https://camunda.com/platform/zeebe/) - 界定、安排和監控微型服務的經營流程。

### 弹性

- [Hazelcast](http://hazelcast.org/) - 開源內存資料網 允許您在伺服器、群組與地圖中分配數據與計算, 並管理大數據集或高數據摄入率。 成熟科技.
- [Helix](http://helix.apache.org/) - 通用群組管理框架,用于自動管理集團節點所主控的分割、复制和分配的資源。
- [Ignite](http://ignite.apache.org/) - 高性能、集成和分布式的內存平台,
- [Libp2p](https://libp2p.io/) - 建立對等網路應用程式的框架和套件。
- [Mesos](https://mesos.apache.org/) - 抽象 CPU 、 內存、 儲存、 以及從機器( 物理或虛擬) 中移動其他計算資源,
- [Nomad](https://www.nomadproject.io/) - 分布, 高度可用, 數據中心 - 知識排程器。
- [Redisson](https://github.com/mrniko/redisson) - 在 Redis 伺服器上方分布和可縮放的 Java 資料結構 。
- [Serf](https://www.serf.io/) - 集團成員、故障偵測和編號的分散解决方案。
- [Valkey](https://github.com/valkey-io/valkey) 重新開源的Redis計畫。
- [Zenoh](https://zenoh.io/) - Pub/sub/query 協議將數據整合在動中,數據在休息和計算中。 高效地將傳統的酒吧/潛艇與地理分布式儲存、查詢和計算相融合。

### 工作排程器/ 工作负荷自动化

- [Celery](https://github.com/celery/celery) - 以分发信件傳送為基礎的同步工作排隊/工作排队 。 注重实时操作,支持排程.
- [Dkron](http://dkron.io/) - 分配,錯誤容忍的工作排程系統。
- [Faktory](https://github.com/contribsys/faktory) -語言不可知的持續背景工作伺服器。
- [Rundeck (c)](http://rundeck.org/) - 工作排程和跑本自動。 開啟對已有文稿和工具的自我服務存取 。
- [Schedulix](https://github.com/schedulix/schedulix) - 開源企業工作表系統 规定了在先进系統环境中 IT 流程專業自动化的突破性標準

### 本地發展

- [mirrord](https://metalbear.com/mirrord/) - 執行本地代碼 仿佛是遙控器的艙 Kubernetes 群組。

### 日志

- [Fluentd](http://www.fluentd.org/) - 用于統一伐木層的開源數據收集器。
- [Graylog](https://www.graylog.org/) - 完全一体化的開源日志管理平台。
- [Kibana](https://www.elastic.co/products/kibana) - 灵活的分析與視覺化平台
- [LogDNA (c)](https://logdna.com/) - 集中的日志管理軟體。 即時收集、集中和分析任何平台的日志,
- [Logstash](https://www.elastic.co/logstash) - 管理事件和日志的工具。
- [Loki](https://github.com/grafana/loki) - 像普羅米修斯,但為了木頭。

### 訊息

- [ØMQ](http://zeromq.org/) -無经纪智能交通層
- [ActiveMQ](http://activemq.apache.org/) - 強大的開源訊息和整合模式伺服器。
- [Aeron](https://github.com/real-logic/Aeron) - 高效可靠的 UDP unicast, UDP 多播, 以及 IPC 訊息傳送 。
- [Beanstalk](https://beanstalkd.github.io/) - 簡單,快速的工作排隊。
- [Bull](https://github.com/OptimalBits/bull) - 快速可靠的 Redis 節點排隊 。
- [Crossbar](https://github.com/crossbario/crossbar) - 分布式和微服務的開源網路平台。 它執行開啟的Web應用程式訊息协议(WAMP).
- [Kafka](http://kafka.apache.org/) - 發佈訂閱訊息,
- [Malamute](https://github.com/zeromq/malamute) -ZeroMQ公司訊息經紀人
- [Mosquitto](http://mosquitto.org/) - 執行 MQTT 協議的開源訊息代理商 。
- [NATS](https://nats.io/) 開源,高性能,輕量级云訊系統
- [NSQ](http://nsq.io/) - 实时的發布訊息平台
- [Pulsar](https://pulsar.apache.org/) - 分散的酒吧子訊息系統
- [RabbitMQ](https://www.rabbitmq.com/) - 開放源 Erlang 的訊息經紀人,只是工作。
- [Redpanda](https://github.com/redpanda-data/redpanda/) - 流動數據平台供開發者使用: Kafka API 兼容, 10x 速度更快, 沒有 Zookeeper 和 JVM 。
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - 低空、可靠、可伸展、易用 ALibaba 大型訊息業生產的、面向訊息的中間器件。

### 監控除錯( D)

- [Beats](https://www.elastic.co/beats/) - Elasticsearch & Logstash 的輕量级運輸商。
- [Elastalert](https://github.com/yelp/elastalert) - Elasticsearch 的易用和灵活的警示 。
- [Ganglia](http://ganglia.info/) - 高性能計算系統的可伸展分布式監控系統,如群組和网格。
- [Grafana](http://grafana.org/) - 一個開放的來源,
- [Graphite](http://graphite.wikidot.com/) -可伸縮的实时圖片
- [IOpipe (c)](https://www.iopipe.com/) - Amazon Lambda的應用性能監控
- [Jaeger](https://www.jaegertracing.io/) - 開放源碼,端到端的分布式追蹤
- [OpenTelemetry](https://opentelemetry.io/) - 高质量、無所不在和便携式的遥测,以便有效可觀性。
- [Prometheus](http://prometheus.io/) -開源服務監控系統和時序數據庫
- [Riemann](http://riemann.io/) - 監控發布系統
- [Sensu](https://github.com/sensu) - 監控今天的基建
- [SkyWalking](https://skywalking.apache.org/) - 分布式系統的應用性能監控工具,尤其是為微服務、云母和容器而設計的(Docker, K8s梅索斯的建筑
- [Zabbix](http://www.zabbix.com/) 開源企業級監控方案
- [Zipkin](http://zipkin.io) 分布式追蹤系統

### 反應

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - 分佈流處理引擎,以轉換,過滤,聚合,并通过寫入 SQL 加入數據流。
- [Reactor.io](https://github.com/reactor) - 第二代反應函數庫,
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Apache Kafka的反應流 API
- [ReactiveX](http://reactivex.io/) - API 用于與可觀察流同步編程 。 可用于平庸的Java, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby等.
- [RSocket](https://rsocket.io/) - 應用程式提供反應流語言。

### 复原力

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - 一個很棒的混亂工程資源列表
- [Raft Consensus](https://raft.github.io/) - 协商一致算法是設計成易懂的 這和帕克索斯的錯誤容忍和表演是一樣的
- [Resilience4j](https://github.com/resilience4j/resilience4j) - 為Java8和功能程式設計的錯誤容力圖書館。
- [Svix](https://svix.com) - Webhooks 服務, 將webhooks發送給您的使用者, 包含完整的重試排程, 成倍反轉, 簽署檢查, 以及事件類型 。

### 安全

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 授權管理系統,用于寫作、測試和部署存取政策。 在微服務架构中建立可伸展的,精美的授權.
- [Dex](https://github.com/coreos/dex) - 有可插入連接器的見證/指令服務。 OpenID 連接提供者和第三方 OAuth 2.0 代表团 。
- [JWT](http://jwt.io/) JSON Web Tokens是一種開放的,工業標準的RFC 7519方法,在兩方之間安全地代表索赔.
- [Keycloak](https://github.com/keycloak/keycloak) - 全面且可延伸的认证服務。 OpenID 連接提供者和第三方 OAuth 2.0 代表团 。
- [OAuth](http://oauth.net/2/) 提供網路應用程式、桌面應用程式、手機及客廳設備的具体授權流。 多次实施。
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - 圖書館、產品和工具,
- [Open Ziti](https://openziti.io/) - 零信任安全 和覆蓋網絡 作为純開源軟體。
- [ORY](https://www.ory.sh/) - 開源身份基建和服務。
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) ——AI代理記憶體中毒的runtime防禦層(OWASP ASI06). 偵測器篡改了記憶體的項目 迅速注入記憶體的路徑 以及秘密的漏水 YAML 政策, 微秒空間, 無外部依賴性 。
- [SCIM](https://simplecloud.info/) - 跨域身份管理系统。
- [Vault](https://www.vaultproject.io/) - 安全 商店 嚴格控制 信使 密碼 憑證 API 鑰匙

### 序列化

- [Avro](https://avro.apache.org/) - Apache 資料序列化系統, 以緊密、 快速、 二進制的資料格式提供丰富的資料結構 。
- [Bond](https://github.com/microsoft/bond/) - 跨平台框架,
- [BooPickle](https://github.com/ochrons/boopickle) - 二進制序列化文库,以高效的網路通信。 斯卡拉和斯卡拉
- [Cap’n Proto](https://capnproto.org/) - 异常快速的數據交換格式和基于能力的RPC系統。
- [CBOR](http://cbor.io/) - 多种語言的CBOR標準(RFC 7049)的實施。
- [Cereal](http://uscilab.github.io/cereal/) - C++11 序列化文库。
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON和JSON SMILE編碼/解碼。
- [Etch](http://etch.apache.org/) - 跨平台、語言和交通獨立框架
- [Fastjson](https://github.com/alibaba/fastjson) -快JSON處理器
- [Ffjson](https://github.com/pquerna/ffjson) - 更快的JSON系列化的Go。
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - 快速Java序列化下降的替代。
- [Jackson](https://github.com/FasterXML/jackson) - 用于處理 JSON 資料格式的多用途 Java 文庫。
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - Jackson模組,使用字節碼產生來进一步加速數據捆綁(+30-40%的吞吐量用于串行化,去串行化).
- [Kryo](https://github.com/EsotericSoftware/kryo) - Java序列化和克隆:快速、高效、自動。
- [Lite³](https://github.com/fastserial/lite3) - JSON相容的零拷贝系列化格式。
- [MessagePack](http://msgpack.org/) - 高效的二進制序列化格式。
- [Protostuff](https://github.com/protostuff/protostuff) - 串行化文庫, 內置支持前向相容性( schema 演化) 和驗證 。
- [SBinary](https://github.com/harrah/sbinary) - 描述斯卡拉類型的二進制格式的圖書館。
- [Thrift](http://thrift.apache.org/) Apache Thrift軟體框架,
- [yyjson](https://github.com/ibireme/yyjson) - 最快的JSON圖書館

### 儲存

- [Apache Cassandra](http://cassandra.apache.org) - 以列為方向,提供高可用性而無任何故障點。
- [Aerospike (c)](http://www.aerospike.com/) - 高性能 NoSQL 數據庫 傳送速度
- [ArangoDB](https://www.arangodb.com/) - 分布式自由開源數據庫,有灵活的文件、圖和金鑰數據模型。
- [Citus](https://github.com/citusdata/citus) - 分配的 PostgreSQL 作為延伸 。
- [CockroachDB (c)](https://www.cockroachlabs.com/) 仿照Google Spanner的 云母 SQL 資料庫
- [Couchbase](https://github.com/couchbase) - 一個為性能、可伸縮性和簡化管理而設計的分布式數據庫。
- [Crate (c)](https://crate.io/) - 可調整的 SQL 數據庫和 NoSQL 的好。
- [Druid](http://druid.io/) - 快速專欄分布式數據庫。
- [Elasticsearch](https://www.elastic.co/elasticsearch) - 開放源碼、可縮放、以及大量可用的搜尋伺服器。
- [Geode](http://geode.incubator.apache.org/) - 開放源碼, 分布式, 用于擴散應用程式的內存資料庫 。
- [Infinispan](http://infinispan.org/) - 用于缓存的高度并行的金鑰/值數據庫。
- [InfluxDB](https://github.com/influxdata/influxdb) -可調整的數據庫 指標、事件和实时分析
- [RethinkDB](http://rethinkdb.com/) - 開放源碼,可縮放的數據庫 讓建立实时應用程式更容易。
- [TiKV](https://github.com/tikv) - 分散的金鑰數據庫。
- [TimescaleDB](https://github.com/timescale/timescaledb) - 高性能实时分析的時序數據庫 包裝成 Postgres 延伸
- [Trino](https://trino.io/) - 快速分布的 SQL 查詢引擎,用于大數據分析,幫助您探索您的數據宇宙。

### 測試

- [Goreplay](https://github.com/buger/goreplay) - 用來捕捉和重播 HTTP 流量的實驗環境的工具。
- [Keploy](https://keploy.io) - API測試與嘲笑的開源工具,
- [Mitmproxy](https://mitmproxy.org/) - 互動控制台程序,
- [MockServer](https://www.mock-server.com) - 多重協議(HTTP、gRPC、GraphQL、LLM、MCP、Kafka、TCP等)的混亂工程;
- [Mountebank](http://www.mbtest.org/) -跨平台,多模具測試雙倍超過線
- [Pact](https://docs.pact.io) HTTP API 和非 HTTP 同步訊息系統的合同測試框架 。
- [RestQA](https://github.com/restqa/restqa) - 管理嘲笑的微服務的工具,
- [Specmatic](https://specmatic.io) 將 API 的规格( OpenAPI 、 AsyncAPI 、 GraphQL 、 gRPC 等) 轉換成可執行的自動測試、 服務虛擬化 、 以及 反向兼容驗證而不寫入碼 。
- [VCR](https://github.com/vcr/vcr) - 錄制你的測試套件的 HTTP 相互作用 并在未來的測試中重放 以便快速的 決定性的 准确的測試 參考其他語言的執行端口列表 。
- [Wilma](https://github.com/epam/Wilma) HTTP/ HTTPS 服務的結構和透明代理溶液。
- [WireMock](http://wiremock.org/) - 軟體文庫, 不同於一般目的嘲弄工具, 它的工作原理是建立一個實際的 HTTP 伺服器, 您的代碼在測試中可以連接到, 因為它會是一個真正的網路服務 。
- [Hoverfly](https://github.com/spectolabs/hoverfly) - 開發者和測試者的輕量級服務虛擬化/API仿真工具。

## 连续集成和交付

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - 一個高級工具列表 供繼續整合 繼續提供和DevOps使用

## Web API 建模與文件

### 同步
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI规格, 用于定义同步API的業務標準 。

### 图QL

- [GraphQL](http://graphql.org/) - 查詢語言,

### 杰森

- [JSON:API](https://jsonapi.org/) - 說明客戶端如何要求取取或修改資源, 以及伺服器如何應答這些要求 。

### 瑞斯特

- [API Blueprint](https://apiblueprint.org/) -你的API生命周期的工具 用它與其他人討論你的API。 自動產生文件 。 或者一個測試套房 甚至一些密碼。
- [OpenAPI](https://www.openapis.org/) - OpenAPI规格(OAS)提供了連接方式,
- [RAML](http://raml.org/) 簡易簡易地描述實際上的 API。
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/ Swagger 產生的 API 文件 。
- [Scalar](https://github.com/scalar/scalar) - 開源 API 平台: 美麗的 API 參考和 1 等級 OpenAPI/ Swagger 支援 。
- [Slate](https://github.com/slatedocs/slate) - 你的API的漂亮靜態文件
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) 由Spring MVC Test製作的自動片段。
- [Swagger](https://swagger.io/) - 一個簡單而有力的代表你的API。

## 标准/

### 万维网

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - 环球網的建築 第一卷
- [RFC3986](https://tools.ietf.org/html/rfc3986) 通用語法。
- [RFC6570](https://tools.ietf.org/html/rfc6570) -URI模板。
- [RFC7320](https://tools.ietf.org/html/rfc7320) -URI設計和擁有權

### 自我主权和分散

- [DID](https://www.w3.org/TR/did-core/) - 分散式标识符(DID)的 W3C 规格:一种新型标识符,它能提供可核查的分散式數位身份。
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - 私人的通訊方法 建立於分散式的DIDs的設計。
- [DIDComm Protocols](https://didcomm.org/) - 在DIDComm上建立的协议的登記, 高度信任的,自我主權的相互作用 任何運輸。
- [IDSA](https://internationaldataspaces.org/) - 國際數據空間協會(IDSA)的任務是創造全球數位經濟未來,

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - 訊息語法和游戲
- [RFC7231](https://tools.ietf.org/html/rfc7231) - 語言和內容
- [RFC7232](https://tools.ietf.org/html/rfc7232) - 條件要求
- [RFC7233](https://tools.ietf.org/html/rfc7233) - 射程要求
- [RFC7234](https://tools.ietf.org/html/rfc7234) - 咳嗽。
- [RFC7235](https://tools.ietf.org/html/rfc7235) - 認證
- [RFC7807](https://tools.ietf.org/html/rfc7807) HTTP API 的問題細節 。

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) - 超文本传输协议版本 2 。

### 快速

- [QUIC-WG](https://quicwg.org/) - IETF工作室被包租來提供下一個網路運輸協議。
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - 以UDP为基础的多路交通和安全交通。

### RPC

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - 無國性、輕量级的遠程程序程序程序
- [Open RPC](https://open-rpc.org/) - OpenRPC Specification 定义了 JSON-RPC 2.0 APIs 的標準,程式化語言不可知介面描述.

### 訊息

- [AMQP](https://www.amqp.org/) 高级訊息排隊協議 。
- [MQTT](https://mqtt.org/) -MQ遥測傳送
- [STOMP](https://stomp.github.io/) - 簡單的文字定向訊息协议。

### 安全

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - 授權談判與授權協議 規定了一個机制 授予一個軟體的授權 并傳達給軟體 包括存取一套API,<sup>草案</sup>
- [OIDCONN](http://openid.net/connect/) OpenID Connect 1.0 是 OAuth 2.0 协议之上的一個簡單的身份層. 它能讓客戶端基于授權伺服器的認證來驗證最终用户的身份,以及以互動和REST類似的方式取得最终用户的基本配置信息.
- [PASETO](https://paseto.io/) Paseto是關於JOSE(JWT, JWE, JWS)的一切, <sup>草案</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - 运输層安全协议1.2版。
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLS延伸
- [RFC6347](https://tools.ietf.org/html/rfc6347) - Datagram 傳送層安全1.2版。
- [RFC6749](https://tools.ietf.org/html/rfc6749) - OAuth 2.0批准框架。
- [RFC6962](https://tools.ietf.org/html/rfc6962) - 憑證透明
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signment(JWS) 代表使用基于 JSON 的數位簽章或訊息認證代碼(MAC)來保障內容 。
- [RFC7519](https://tools.ietf.org/html/rfc7519) JSON Web Token(JWT)是代表兩方交接的债权的緊密、安全網址的手段。
- [RFC7642](https://tools.ietf.org/html/rfc7642) 定義、概述、概念和要求。
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM: Core Schema,提供代表使用者和群組的平台中性方案和推广模型。
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM: 協議,一個應用層面,REST協議,供應和管理網路上的身份資料。

### 服務發現
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - 用標準的 DNS 查詢, 供客戶查詢某服務的指定实例清單的機制 。
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - 指定服務位置的DNS RR(DNS SRV)。

### 資料格式

- [RFC4627](https://tools.ietf.org/html/rfc4627) - JavaScript 物件標注( JSON) 。
- [RFC7049](https://tools.ietf.org/html/rfc7049) - 简明二元物件表示。
- [BSON](http://bsonspec.org/) - 二等兵JSON (BSON).
- [JSON-LD](http://json-ld.org/) - JSON的連結資料。
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - 簡單的二進制編碼( SBE) 。
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - 信息包规格。

### 词汇

- [JSON Schema](http://json-schema.org/) - 字典,讓你能對JSON文件做註解和驗證
- [Schema.org](http://schema.org/) 在網路、網頁、電子郵件等網站上,

### 單碼

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) -Unicode集團 Unicode Standard, version 8.0.0, (Mountain View, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8,ISO 10646的轉換格式.

## 設計與團隊動力

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> - Melvin E. Conway 1968年的數據雜誌 最初的描述康威律法的文章.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) – 每支隊伍都負責一項或多項企業功能(例如企業能力). 一個團隊擁有一個包含一個或多個模組的碼基底. 它的碼基是大小的,以不超出團隊的认知能力. 團隊把密碼部署成一個或一個以上的服務 除非證明有必要提供多种服務,
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> -倫敦19區 也忽略策略與團隊動力。 而不是科技, 我們用實際的案例研究來解釋原因,

## 企业垂直( V)

- [Commercetools](https://commercetools.com/) -無頭商業平台
- [Equinox](https://www.infosysequinox.com/) Infosys Equinox是一個以人为中心的商業和銷售平台,
- [Flamingo](https://www.flamingo.me/) - 建立灵活和现代电子商务应用的框架。
- [Medusa](https://medusajs.com/) 無頭開源商業平台

## 理論

### 文章和文件( P)

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - 哲學家介紹 通過複雜的科學理論 設計适应性超記憶系統
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - 更新且有組織的讀取清單, 在知名工程師的文章和可信引用中, 數以百萬計的使用者,
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - 描述某種服務的尺寸的模型
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> - 符合逻辑的單調
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) 以減少在製作中引入新軟體版本的風險,
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - 表示分布式電腦系統不可能同时提供以下三种保障:一致性、可用性和分部分容忍性。
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> 沒有伺服器的計算抽象 暴露了幾項低層操作細節 讓程序員很難寫作 也很難解釋他們的密碼 這篇文介紹了無伺服器計算精髓的操作語言,
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) 設計軟體應用程式,
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> -F5的7集 微信服務
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) 關於微服務方法的一些問題,
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - 思考Mircoservices建筑風格的成本和利益指南。
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - 反應系統定義。
- [Reactive Streams](http://www.reactive-streams.org/) - 提供無阻后壓的同步流處理標準
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> - 适应性系統的資源定向電腦。
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> - 了解軟體生态系统:一种战略建模方法。
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - 管理多种可独立部署的部件的额外測試複雜性的方法。
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF 檔案</sup> - 描述三种抽象,

### 站台和组织( O)

- [Cloud Native Computing Foundation](https://www.cncf.io/) - 云原電算基金會建立可持续的生态系统,
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - 云原科技的交互式景观。
- [Microservices Resource Guide](http://martinfowler.com/microservices/) 馬丁·福勒的選擇 文章、影片、書本和播客 可以教你更多關於微服務的建築風格
- [Microservice Patterns](http://microservices.io/) - 微型服務架构模式和最佳做法。
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - 微型服務大多是已知的反毒藥和陷阱

## 執照

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## 捐款

請讀讀 [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) 在你提議之前

隨你便 [open an issue](https://github.com/mfornos/awesome-microservices/issues) 或 [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) 加上你的增加。

:star2: 謝謝你!
