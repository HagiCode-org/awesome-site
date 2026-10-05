# Awesome 微服务 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

微服务建筑相关原则和技术目录.

**目录**

- [平台](#platforms)
- [框架/运行时间](#frameworks--runtimes)
- [服务工具包](#service-toolkits)
  - [聚糖层](#polyglot)
  - [C级](#c)
  - [C++ 组合](#c-1)
  - [C# (韩语)](#csharp)
  - [D级](#d)
  - [Erlang VM 语言](#erlang-vm)
  - [走开](#go)
  - [哈斯凯尔](#haskell)
  - [Java VM 软件](#java-vm)
  - [节点.js](#nodejs)
  - [佩尔](#perl)
  - [ưμ㼯A](#php)
  - [Py](#python)
  - [鲁比](#ruby)
  - [锈](#rust)
- [前端/ 用户界面](#frontend--ui)
- [能力](#capabilities)
  - [API 网关/边缘服务](#api-gateways--edge-services)
  - [配置发现( D)](#configuration--discovery)
  - [工作流程乐团](#workflow-orchestration)
  - [弹性](#elasticity)
  - [工作排程器/ 工作量自动化](#job-schedulers--workload-automation)
  - [地方发展](#local-development)
  - [日志](#logging)
  - [通讯](#messaging)
  - [监视调试( D)](#monitoring--debugging)
  - [反应](#reactivity)
  - [复原力](#resilience)
  - [警卫](#security)
  - [序列化](#serialization)
  - [储存](#storage)
  - [测试](#testing)
- [持续整合和交付](#continuous-integration--delivery)
- [Web API 建模和文档](#web-api-modeling--documentation)
  - [自动同步](#async)
  - [图QL](#graphql)
  - [贾森](#json)
  - [资源](#rest)
- [标准/建议](#standards--recommendations)
  - [万维网](#world-wide-web)
  - [自治和权力下放](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2 导弹](#http2)
  - [快速](#quic)
  - [难民保护委员会](#rpc)
  - [通讯](#messaging-1)
  - [警卫](#security-1)
  - [服务发现](#service-discovery)
  - [数据格式](#data-formats)
  - [词汇](#vocabularies)
  - [统一编码](#unicode)
- [设计/团队动态](#organization-design--team-dynamics)
- [企业垂直( V)](#enterprise--verticals)
- [理论](#theory)
  - [文章和论文](#articles--papers)
  - [站点和组织](#sites--organizations)
- [许可证](#license)
- [捐款](#contributing)

## 平台

- [1Backend](https://github.com/1backend/1backend) ——AI-本土微服务平台.
- [Jolie](https://jolie-lang.org) - 开源微服务导向编程语言.
- [OpenWhisk](https://github.com/apache/openwhisk) - 无服务器的开源云平台,用于针对任何规模的事件执行功能。
- [Pulumi](https://pulumi.io/) - 云原基础设施作为代码的SDK。 使用您最喜欢的语言来预览和管理您的应用程序和基础设施的更新,并持续部署到任何云中(不需要YAML).
- [Triton](https://github.com/joyent/triton) - 开源云管理平台,通过一个或多个数据中心提供下一代、集装箱、服务型基础设施。

## 框架/运行时间

- [Akka](http://akka.io/) - 工具箱和运行时间,用于在联合核查机制上建立高度同步、分布和具有复原力的信息驱动应用程序。
- [Axon (c)](https://axoniq.io/) - 一个端到端的开发和基础设施平台,以便于JVM上任何DDD、CQRS和事件测试应用程序的开发和运行。
- [Ballerina](https://ballerina.io) - 云原编程语言。
- [Bun](https://bun.sh/) - 快速全在JavaScript运行时间。
- [Dapr](https://dapr.io) - 使用任何编程语言撰写高性能微服务的开源运行时间。
- [Deno](https://deno.land/) - JavaScript, TypeScript, 和WebAssembly 运行时间, 具有安全的默认和伟大的开发者经验.
- [Eclipse Microprofile](https://microprofile.io/) - 一个开放论坛,优化企业Java的微观服务架构,办法是在多个实施领域进行创新,并在共同感兴趣的领域开展合作,以实现标准化。
- [Erlang/OTP](https://github.com/erlang/otp) - 编程语言用于建立大规模可扩展的软实时系统,要求高可用性。
- [Finagle](http://twitter.github.io/finagle) - JVM的可扩展RPC系统,用于建造高货币服务器。
- [Gleam](https://gleam.run/) - 一种友好的语言,用于建立安全、可扩展的系统。
- [GraalVM](https://www.graalvm.org/) - 高性能运行时间,大大提高应用性能和效率,这是微观服务的理想。
- [Helidon](https://helidon.io/) - 收集Java图书馆,用于编写由Netty提供动力的快速网络核心上运行的微服务。
- [Ice](https://github.com/zeroc-ice/ice) - 支持C++,C#,Java,JavaScript,Python等综合RPC框架.
- [Light-4j](https://github.com/networknt/light-4j) ——吞吐量高,耐久性低,记忆足迹小,微服务平台产量大.
- [Micronaut](http://micronaut.io/) - 一个现代化的、基于JVM的、完整的框架,用于建立模块化、易于测试的微服务应用程序。
- [Moleculer](http://moleculer.services/) - 为Node.js,Java,Go和Ruby提供快速和强大的微服务框架.
- [Open Liberty](https://openliberty.io/) ——轻量级开放框架,用于建设快速高效的云土Java微服务.
- [Pears](https://github.com/holepunchto/pear) - 对等运行时间、开发和部署。
- [SmallRye](https://smallrye.io/) - 适合云发展的API和执行,包括Eclipse MicroProfile。
- [Spin](https://github.com/fermyon/spin) - 与WebAssembly建立和运行快速、安全和可堆肥的云微服务开源框架。
- [ScaleCube](https://github.com/scalecube/scalecube) - 为JVM建立反应性微服务工具箱:低纬度、高通量、可伸缩性和复原力。
- [Vert.X](http://vertx.io/) - 在JVM上建立反应性应用工具箱。
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) ——一套Vert.x组件,用于构建反应性微服务应用.
- [Wangle](https://github.com/facebook/wangle) - 一个框架,为以一致、模块化和可调和的方式建立服务提供一套共同的客户/服务器抽象。

## 服务工具包

### 聚糖层

- [GRPC](http://www.grpc.io/) - 高性能、开源、一般RPC框架,将移动和HTTP/2放在首位。 C,C++,Java,Go,Node.js,Python,Ruby,Object-C,PHP和C#的图书馆.

### C级

- [Lwan](http://lwan.ws/) - 高性能和可扩展网络服务器。
- [uSockets](https://github.com/uNetworking/uSockets) - 用于Aync应用程序的微型跨平台事件、联网和加密。

### C++ 组合
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Capn Proto C++ RPC的执行。
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - 类似OSGi的C++动态模块系统和服务注册。
- [Enduro/X](https://github.com/endurox-dev/endurox/) - GNU/Linux基于XATMI的服务框架.
- [Pistache](https://github.com/oktal/pistache) - 一个高性能的REST工具包,用C++写成.
- [Poco](http://pocoproject.org/) - C++类库,用于建立基于网络的应用程序和服务器。
- [Sogou Workflow](https://github.com/sogou/workflow) - 企业级编程引擎,旨在满足大部分后端开发要求。
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - 为最需要的应用程序提供简单、安全、符合标准的网络服务器。

### 共享

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - 在.NET Core中收集优秀的培训系列、文章、录像、书籍、课程、样本项目和微观服务工具。

### D级

- [Vibe.d](http://vibed.org/) - 一个同步的I/O,

### Erlang VM 语言

#### 埃利克斯尔

- [Phoenix](http://www.phoenixframework.org/) ——构建HTML5应用,API后端和分布式系统的框架.
- [Plug](https://github.com/elixir-lang/plug) - 网络应用程序之间可混合模块的规格和便利。

#### 尔朗

- [Cowboy](https://github.com/ninenines/cowboy) - 用Erlang写成的小型,快速,模块化的HTTP服务器.
- [Mochiweb](https://github.com/mochi/mochiweb) - Erlang库,用于建造轻量级的HTTP服务器.

### 走开

- [Chi](https://github.com/go-chi/chi) - 用于建设Go HTTP服务的轻量级、异质和可复合路由器。
- [Echo](https://echo.labstack.com/) Go 的快速和不灵敏的 HTTP 服务器框架。 最高比其它的快 10x 。
- [Fiber](https://github.com/gofiber/fiber) – Express 灵感创建于Fasthttp之上的Web框架,是Go最快的HTTP引擎. 设计是为了便于快速开发,同时牢记零内存分配和性能.
- [Gin](https://github.com/gin-gonic/gin) - Gin是用Go(Golang)书写的HTTP网络框架. 它的特征是马提尼式的API,性能要好得多,可达40倍的速度.
- [Goa](https://github.com/goadesign/goa) - Go的基于设计的HTTP微服务.
- [GoFr](https://github.com/gofr-dev/gofr) - 有意见的微观服务发展框架,强调可扩展性和稳健性。 设计简化微服务开发.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - 一个在Go快速发展微型服务的框架,这个框架很容易与一些云生态系统结合。
- [Go-micro](https://github.com/micro/go-micro) - 分布式系统开发框架。
- [Go-zero](https://github.com/tal-tech/go-zero) - 网络和rpc分布式系统开发框架。
- [Gorilla](http://www.gorillatoolkit.org/) - Go编程语言的网络工具包。
- [Iris](https://github.com/kataras/iris) - Go的快速,简单,高效的微网络框架.
- [Lura](https://github.com/luraproject/lura) - 使用中间软件建立超性能API网关的框架。
- [RPCX](https://github.com/smallnest/rpcx) - 基于NET/RPC的分布式RPC服务框架,如Alibaba Dubbo和微博Motan。

### 哈斯凯尔

- [Scotty](https://github.com/scotty-web/scotty) - 由Ruby's Sinatra启发的微网络框架,使用WAI和Warp.
- [Servant](https://github.com/haskell-servant/servant) - 类型级网络DSL。
- [Yesod](https://github.com/yesodweb/yesod) - 哈斯凯尔网络框架。

### Java VM 软件

#### 克洛朱尔

- [Compojure](https://github.com/weavejester/compojure) - Ring/Clojure的简明路由图书馆。
- [Duct](https://duct-framework.org/) - Clojure的服务器侧框架。
- [System](https://github.com/danielsz/system) ——建于斯图尔特·塞拉组件库之上,提供一套现成组件.
- [Tesla](https://github.com/otto-de/tesla-microservice) 奥托·德的一些克洛朱尔微服务的共同基础.

#### 爪哇语

- [ActiveJ](https://github.com/activej/activej) - 用于复杂高负荷分布式应用程序和类似Memcached的解决方案的轻量级和快速库。
- [Airlift](https://github.com/airlift/airlift) - 在爪哇建立REST服务的框架。
- [Armeria](https://line.github.io/armeria/) - 开源同步HTTP/2 RPC/REST客户端/服务器库,建在Java 8,Netty,Thrift和gRPC的顶部.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - 高性能的线间通讯库。
- [Dropwizard](https://github.com/dropwizard/dropwizard) - 开发Ops友好、高性能、RESTful网络服务的Java框架。
- [Dubbo](https://github.com/apache/dubbo) - 一个高性能的、基于Java的RPC框架,由阿里巴巴开源。
- [Conjure](https://github.com/palantir/conjure-java-runtime) - 根据Feign或Retrofit作为客户端和Dropwizard/Jersey作为服务器对RESTish/RPC服务器和客户端进行定义和创建的意见库集;
- [Jersey](https://github.com/eclipse-ee4j/jersey) - 在Java的ReSTful服务。JAX-RS参考执行。
- [Quarkus](https://quarkus.io/) - 一个 Kubernetes 原生Java堆栈为OpenJDK HotSpot和GraalVM定制,由种性Java库和标准最佳设计.
- [Ratpack](https://ratpack.io/) - 一套促进快速、高效、可变和经过良好测试的HTTP应用的Java库。 为格鲁维语提供具体支持。
- [Spring Boot](http://projects.spring.io/spring-boot/) - 容易创建独立、生产级的Spring应用程序。

#### 科特林语Name

- [Http4k](https://www.http4k.org/) - 用纯Kotlin写成的轻量级但具有全面特性的HTTP工具包,使HTTP服务能够以功能和一致的方式提供服务和消费。
- [Ktor](https://ktor.io/) - 在使用Kotlin编程语言的连接系统中建立同步服务器和客户端的框架。

#### 斯卡拉语Name

- [Finatra](http://twitter.github.io/finatra/) - 快速,可测试,Scala HTTP服务建立在Twitter-Server和Finagle上.
- [Http4s](http://http4s.org/) - 用于HTTP的最小、平庸的Scala接口
- [Play](https://www.playframework.com/) - Java和Scala的高速度网络框架。

### 节点.js

- [Actionhero](http://www.actionherojs.com/) - 多运输节点Js API服务器,具有集成集群能力和延迟任务.
- [Express](http://expressjs.com/) - 为Node.js建立快速、无倾向、最小化的网络框架
- [Fastify](https://www.fastify.io/) - 为Node.js简化、快速和低管理网络框架。
- [FeathersJS](http://feathersjs.com/) - 用于现代应用的开源REST和实时API层.
- [Hono](https://hono.dev/) - 边缘小、简单和超快的网络框架。 它在任何JavaScript运行时间上都有作用.
- [Koa](http://koajs.com/) - Node.js的下一代网络框架
- [Loopback](http://loopback.io/) - 用于创建API和方便连接后端数据源的Node.js框架.
- [NestJS](https://docs.nestjs.com/) - 用于构建高效和可扩展的服务器侧应用的节点框架,并有内置微服务支持。
- [Seneca](https://github.com/senecajs/seneca) - 用于Node.js的微服务工具包
- [Serverless](https://github.com/serverless/serverless) - 建立和维护在AWS Lambda和API Gateway(前称JAWS)上运行的网络,移动和IOT应用程序.
- [tRPC](https://github.com/trpc/trpc) - 端对端型安全API.

### 佩尔

- [Cro](http://cro.services/) - 利用Perl 6建立被动分布式系统的图书馆。
- [Mojolicious](https://mojolicious.org/) - Perl的下一代网络框架。

### ưμ㼯A

- [API Platform](https://api-platform.com/) - Symfony顶部的API-First网络框架与JSON-LD,Schema.org和Hydra支持.
- [Ecotone](https://docs.ecotone.tech/) - 以DDD、CQRS和事件测试等建筑原则为基础的框架,为创建可扩展和可扩展的应用程序提供构件。
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf是一个基于Swoole 4.5+的极具性能和弹性的PHP CLI框架,由最先进的Coroutine服务器和大量的战斗测试组件提供动力.
- [Lumen](https://lumen.laravel.com/) - 惊人的快速微架构。
- [Slim](http://www.slimframework.com/) - 帮助您快速编写简单而强大的网络应用程序和API的微架构。
- [Spiral](https://spiral.dev/) - 为长期应用设计的框架 [RoadRunner](https://roadrunner.dev/)它提供了先进的特征,如与残疾人融合。 [Temporal](https://temporal.io/) 工作流程引擎和 [Centrifugo](https://centrifugal.dev/) websocket 服务器. 它对于微观服务架构特别有效,为REST API和GRPC服务提供了强有力的支持.
- [Swoft](https://github.com/swoft-cloud/swoft/) 用于建设高性能网络系统、API、中间软件和基本服务的PHP微服务库框架。
- [Symfony](https://symfony.com/) - 基于Symfony组件的微型框架。

### Py

- [Aiohttp](https://github.com/aio-libs/aiohttp) - Ayncio的HTTP客户端/服务器.
- [Bottle](https://bottlepy.org) - 快速,简单和轻量级的WSGI微网框用于Python.
- [Connexion](https://github.com/zalando/connexion) - Swagger/OpenAPI 弗拉斯克上方的Python框架,具有自动端点验证和OAuth2支持.
- [Falcon](https://falconframework.org/) - 赤金属Python网络API框架,用于建立非常快的app后端和微服务.
- [FastAPI](https://fastapi.tiangolo.com/) -现代,快速(高性能),基于标准Python类型提示的Python 3.6+构建API的网络框架.
- [Flask](http://flask.pocoo.org/) - 基于Werkzeug和Jinja 2的微服务python框架.
- [Nameko](https://github.com/onefinestay/nameko) - 微服务建设的Python框架。
- [Sanic](https://github.com/sanic-org/sanic) - Sanic是一个类似弗拉斯克的Python 3.5+网络服务器,被写成可以快速运行.
- [Tornado](http://www.tornadoweb.org/) - 网络框架和同步联网库。
- [Twisted](https://twisted.org/) - 事件驱动的网络编程引擎。
- [Web.py](https://github.com/webpy/webpy/) - Python的最小网络框架。

### 鲁比

- [Grape](https://github.com/ruby-grape/grape) - 建立类似REST的API的有意见的框架
- [Hanami](https://github.com/hanami) -鲁比的现代网络框架。
- [Praxis](https://github.com/rightscale/praxis) - 设计和实施API的框架。
- [Scorched](https://github.com/wardrop/Scorched) - 鲁比的轻量级网络框架。
- [Sinatra](http://www.sinatrarb.com/) - Sinatra是一个DSL,用于在鲁比快速创建网络应用程序,但付出了最小的努力.

### 锈

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Rust网页编程现状概要.
- [Actix](https://actix.rs/) ——强力,务实,极快的拉斯特网络框架.
- [Tarpc](https://github.com/google/tarpc) - RPC Rust框架,重点是易用性。
- [Tokio](https://tokio.rs) - 编写网络应用程序的同步运行时间。
- [Tower](https://github.com/tower-rs/tower) - 建立强大的网络客户端和服务器的模块化和可重复使用的组件库。
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2客户端/服务器框架。

## 前端/ 用户界面

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: ——微前端资源目录.
- [Electrode](https://github.com/electrode-io) - 通用反应/节点应用平台。
- [Micro Frontends](https://micro-frontends.org) ——将微服务理念延伸至前端开发.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniApp标准化白皮书。

## 能力

### API 网关/边缘服务

- [Ambassador (c)](https://www.getambassador.io) - 怎么样? Kubernetes- 内部API网关的微型服务 建立在特使之上。
- [Apache APISIX](https://apisix.apache.org/) - 高性能,实时API网关和AI网关建在NGINX等上,带有热重装的路由和100+插件.
- [APIcast](https://github.com/3scale/APIcast) - APIcast是一个在NGINX上方建造的API网关. 它是红帽3级API管理平台的一部分.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - 网页应用程序托管和逆向代理默认安全。
- [Caddy](https://caddyserver.com/) - 具有自动HTTPS的可扩展HTTP/2网络服务器。
- [Camel](http://camel.apache.org/) - 授权您以多种特定域语言定义路由和调解规则,包括基于Java的流线API,Spring或Bluint XML配置文件,以及Scala DSL.
- [Envoy](https://github.com/lyft/envoy) - 开源边缘和服务代理,来自Lyft的开发者.
- [HAProxy](https://github.com/haproxy/haproxy) - 可靠、性能高的TCP/HTTP负载平衡器。
- [Istio](https://istio.io/) - 一个连接、管理和保障微服务的开放平台。
- [Keepalived](http://www.keepalived.org/) - 为Linux系统和基于Linux的基础设施提供简单和健全的负载平衡和高可用性设施。
- [Kong](https://github.com/kong/kong) - API的开源管理层.
- [KrakenD](http://krakend.io/) ——开源超性能API Gateway.
- [Kuma](https://kuma.io/) - 服务网点和微服务平台不可知源控制平面。
- [Linkerd](https://linkerd.io/) - 云母应用程序的耐力服务网格。
- [Neutrino](https://github.com/eBay/Neutrino) - 广泛的软件负载平衡器。
- [OpenResty](http://openresty.org/) - 在Nginx上方建造的快速网络应用服务器。
- [Open Service Mesh](https://openservicemesh.io/) - 轻量级和可扩展的云母服务网。
- [Otoroshi](https://www.otoroshi.io/) - 具有轻量级API管理的现代HTTP反向代理.
- [Pingora](https://github.com/cloudflare/pingora) - 建设快速、可靠和可演变的网络服务的图书馆。
- [Skipper](https://github.com/zalando/skipper) – HTTP 路由器,可用于将路由与服务逻辑脱钩.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - API Gateway在春季MVC的顶端。 目的是提供一条简单而有效的途径去API.
- [Tengine](http://tengine.taobao.org/) - 发行带有一些先进特点的Nginx。
- [Træfɪk](http://traefik.io/) - 一个现代的HTTP逆向代理和负载平衡器,以方便地部署微服务。
- [Traffic Server](https://github.com/apache/trafficserver) ——云服务高性能构件.
- [Tyk](https://tyk.io/) - 开源、快速和可扩展的API网关、门户和API管理平台。
- [Vulcand](https://github.com/vulcand/vulcand) - Etcd支持的程序负荷平衡器。
- [Zuul](https://github.com/Netflix/zuul) - 提供动态线路、监测、复原力、安全等等的边缘服务。

### 配置发现( D)

- [Central Dogma](https://line.github.io/centraldogma/) - 基于Git,Zookeeper和HTTP/2的开源高可用版本控制服务配置库.
- [Consul](https://www.consul.io/) - 服务发现和配置变得容易。 分布式,高度可用,并具有数据中心意识.
- [Etcd](https://github.com/coreos/etcd) - 用于共享配置和服务发现的高度可用的钥匙价值商店。
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - 以REST为基础的服务,主要用于AWS云定位服务,目的是中层服务器的负载平衡和故障。
- [Microconfig](https://microconfig.io) ——现代简便的微服务配置管理方式.
- [Nacos](https://github.com/alibaba/nacos) ——易用动态服务发现,配置和服务管理平台.
- [SkyDNS](https://github.com/skynetservices/skydns) - 分配服务,以公布和发现在等等之上建造的服务。 它利用DNS查询来发现现有的服务.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - 为分布式系统中的外部化配置提供服务器和客户端支持。
- [ZooKeeper](https://zookeeper.apache.org/) - 开放源码服务器,能够进行高度可靠的分布式协调。

### 工作流程乐团

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - 利用视觉工作流程协调分布式应用程序和微服务的组成部分。
- [Cadence](https://cadenceworkflow.io/) - 错误的状态代码平台。
- [Conductor](https://github.com/Netflix/conductor) - 一个微服务管弦乐引擎。
- [Inngest](https://github.com/inngest/inngest) - 可靠的背景逻辑的长期功能,从背景工作到复杂的工作流程。
- [Kestra](https://github.com/kestra-io/kestra) - 开放源代码微服务由事件驱动,语言不可知的管弦乐和调度平台。
- [Temporal](https://github.com/temporalio/temporal) - 开源微服务管弦乐平台,用于运行任何规模的任务关键代码。
- [Zeebe](https://camunda.com/platform/zeebe/) - 界定、协调和监测微观服务的业务流程。

### 弹性

- [Hazelcast](http://hazelcast.org/) - 开源内膜数据网. 允许您在服务器,集群和地理图上分发数据和计算,并管理非常大的数据集或高数据摄入率. 腾讯科技.
- [Helix](http://helix.apache.org/) - 通用集群管理框架,用于自动管理在一个集群节点上托管、复制和分配的资源。
- [Ignite](http://ignite.apache.org/) - 高性能、集成和分布的模拟平台,用于实时在大型数据集上进行计算和交易,数量级比传统磁盘技术或闪存技术更快。
- [Libp2p](https://libp2p.io/) - 建立对等网络应用的框架和成套协议。
- [Mesos](https://mesos.apache.org/) - 将CPU、内存、存储和其他计算资源从机器(物理或虚拟)中分离出来,使容错和弹性分布式系统易于建造和有效运行。
- [Nomad](https://www.nomadproject.io/) - 分布式、高可用性、数据中心-认识调度器。
- [Redisson](https://github.com/mrniko/redisson) - Redis服务器顶部分布和可扩展的Java数据结构.
- [Serf](https://www.serf.io/) - 集群成员、故障检测和协同工作的分散解决办法。
- [Valkey](https://github.com/valkey-io/valkey) ——原开源雷迪斯项目恢复开发的新项目.
- [Zenoh](https://zenoh.io/) - Pub/sub/query协议,在运动中统一数据、休息和计算数据。 高效地将传统酒馆/潜水器与地理分布式存储,查询和计算结合起来.

### 工作排程器/ 工作量自动化

- [Celery](https://github.com/celery/celery) - 根据分布式消息的传递,同步任务队列/工作队列。 注重实时运行,支持调度.
- [Dkron](http://dkron.io/) - 分配、过失容忍的工作时间安排制度。
- [Faktory](https://github.com/contribsys/faktory) - 语言不可知的持续背景任务服务器。
- [Rundeck (c)](http://rundeck.org/) - 工作日程安排和运行簿自动化。 启用对现有脚本和工具的自助访问。
- [Schedulix](https://github.com/schedulix/schedulix) - 开放源码企业职务安排系统为先进系统环境下信息技术流程的专业自动化规定了开创性标准。

### 地方发展

- [mirrord](https://metalbear.com/mirrord/) - 运行本地代码 仿佛它是远程的舱 Kubernetes 组合。

### 日志

- [Fluentd](http://www.fluentd.org/) - 统一伐木层的开源数据收集器。
- [Graylog](https://www.graylog.org/) ——全面整合开源日志管理平台.
- [Kibana](https://www.elastic.co/products/kibana) - 弹性分析和可视化平台。
- [LogDNA (c)](https://logdna.com/) - 集中日志管理软件。 即时收集,集中,分析任何平台的日志,在任何卷.
- [Logstash](https://www.elastic.co/logstash) - 管理事件和日志的工具。
- [Loki](https://github.com/grafana/loki) - 像普罗米修斯,但为了木头。

### 通讯

- [ØMQ](http://zeromq.org/) - 无经纪人智能运输层。
- [ActiveMQ](http://activemq.apache.org/) - 强大的开源消息和集成模式服务器。
- [Aeron](https://github.com/real-logic/Aeron) - 高效可靠的UDP unicast、UDP 多播和IPC信息传输。
- [Beanstalk](https://beanstalkd.github.io/) - 简单,快速的工作排队。
- [Bull](https://github.com/OptimalBits/bull) - 快速可靠的Redis为节点排队.
- [Crossbar](https://github.com/crossbario/crossbar) - 用于分布式和微服务应用的开源网络平台。 它执行开放的Web应用程序通讯协议(WAMP).
- [Kafka](http://kafka.apache.org/) - 将订阅消息作为分发的承诺日志重新思考。
- [Malamute](https://github.com/zeromq/malamute) - ZeroMQ企业通讯经纪人
- [Mosquitto](http://mosquitto.org/) - 执行MQTT协议的开源消息经纪人。
- [NATS](https://nats.io/) ——开源,高性能,轻量级云通信系统.
- [NSQ](http://nsq.io/) - 一个实时分发的通讯平台。
- [Pulsar](https://pulsar.apache.org/) - 分配的酒吧子通讯系统。
- [RabbitMQ](https://www.rabbitmq.com/) - 开源 Erlang 消息代理商 刚刚工作。
- [Redpanda](https://github.com/redpanda-data/redpanda/) - 开发者的数据流平台:Kafka API兼容,10x更快,没有动物园保存器和JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - 低潜伏度、可靠、可扩展、易于使用来自ALibaba大规模信息业务的面向信息的中间软件。

### 监视调试( D)

- [Beats](https://www.elastic.co/beats/) - Elasticsearch & Logstash的轻量级托运人。
- [Elastalert](https://github.com/yelp/elastalert) - 方便和灵活地提醒Elasticsearch。
- [Ganglia](http://ganglia.info/) - 高性能计算系统如集群和网格的可扩展分布式监测系统。
- [Grafana](http://grafana.org/) - Graphite、InfluxDB和OpenTSDB的开放源码、特性丰富的计量仪表板和图表编辑器。
- [Graphite](http://graphite.wikidot.com/) - 可缩放的实时绘图。
- [IOpipe (c)](https://www.iopipe.com/) - Amazon Lambda的应用性能监测。
- [Jaeger](https://www.jaegertracing.io/) - 开源、端到端分布式追踪
- [OpenTelemetry](https://opentelemetry.io/) - 高质量、无所不在和便携式遥测,以便有效观察。
- [Prometheus](http://prometheus.io/) - 开放源码服务监测系统和时间序列数据库。
- [Riemann](http://riemann.io/) - 监测分布式系统。
- [Sensu](https://github.com/sensu) - 对今天的基础设施进行监测。
- [SkyWalking](https://skywalking.apache.org/) - 分布式系统的应用性能监测工具,尤其是为微型服务、云母和集装箱设计的(Docker,第1段)。 K8s(原始内容存档于2017-09-21)., Mesos) architectures.
- [Zabbix](http://www.zabbix.com/) - 开放源码企业级监测解决方案。
- [Zipkin](http://zipkin.io) - 分布式追踪系统。

### 反应

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - 分布流处理引擎,通过写入SQL来转换,过滤,聚合,并加入数据流.
- [Reactor.io](https://github.com/reactor) - 第二代反应库,在JVM上基于反应流规格建立非阻塞应用程序。
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Apache Kafka的反演流 API.
- [ReactiveX](http://reactivex.io/) - API用于与可观测流同步编程。 可用于平庸的Java,Scala,C#,C++,Clojure,JavaScript,Python,Groovy,JRuby等.
- [RSocket](https://rsocket.io/) - 提供反应流语义的应用协议。

### 复原力

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - 令人惊奇的混沌工程资源列表
- [Raft Consensus](https://raft.github.io/) - 共识算法 设计起来容易理解。 在过失容忍和表现上相当于帕克索斯.
- [Resilience4j](https://github.com/resilience4j/resilience4j) - 为Java8和功能编程设计的故障容忍库。
- [Svix](https://svix.com) - 向用户发送webhooks的Webhooks服务,提供完整的重试时间表、指数备份、签名验证和事件类型。

### 警卫

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 授权管理系统,用于编写、测试和部署准入政策。 在微服务架构中构建了可伸缩,精细纹饰的授权.
- [Dex](https://github.com/coreos/dex) - 带有可插接连接器的意见认证/指令服务。 OpenID 连接供应商和第三方 OAuth 2.0 代表团.
- [JWT](http://jwt.io/) - JSON Web Tokens是一种开放的行业标准RFC 7519方法,用于在双方之间安全地代表债权。
- [Keycloak](https://github.com/keycloak/keycloak) - 全面、可扩展的认证服务。 OpenID 连接供应商和第三方 OAuth 2.0 代表团.
- [OAuth](http://oauth.net/2/) - 为网络应用程序、桌面应用程序、移动电话和客厅设备提供具体的授权流量。 许多执行。
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - 图书馆、产品和工具,执行目前的OpenID规格和相关规格。
- [Open Ziti](https://openziti.io/) - 作为纯开源软件的零信任安全和覆盖网络。
- [ORY](https://www.ory.sh/) - 开源身份基础设施和服务。
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) ——AI代理记忆中毒的运行时防层(OWASP ASI06). 探测到篡改内存条目,在内存路径中迅速注入,以及秘密泄漏. YAML政策 微秒耐久性 外部依赖性为零.
- [SCIM](https://simplecloud.info/) - 跨域身份管理系统。
- [Vault](https://www.vaultproject.io/) - 安全性、储存和严格控制现代计算中信使、密码、证书、API密钥和其他秘密。

### 序列化

- [Avro](https://avro.apache.org/) - Apache数据序列化系统以紧凑,快捷,二进制的数据格式提供丰富的数据结构.
- [Bond](https://github.com/microsoft/bond/) - 与计划数据合作的跨平台框架,在微软公司广泛用于高规模服务。
- [BooPickle](https://github.com/ochrons/boopickle) 二进制序列化库,用于高效的网络通信. 给斯卡拉和斯卡拉.js
- [Cap’n Proto](https://capnproto.org/) - 异常快速的数据交换格式和基于能力的RPC系统。
- [CBOR](http://cbor.io/) - 用多种语言实施《经济、社会、文化权利国际公约》标准(RFC 7049)。
- [Cereal](http://uscilab.github.io/cereal/) - C++11 序列化库。
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON和JSON SMILE编码/解码.
- [Etch](http://etch.apache.org/) - 建设和消费网络服务的跨平台、语言和运输独立框架。
- [Fastjson](https://github.com/alibaba/fastjson) -快JSON处理器
- [Ffjson](https://github.com/pquerna/ffjson) - 更快的JSON系列化为吴。
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - 快速Java序列化 掉换。
- [Jackson](https://github.com/FasterXML/jackson) - 一个用于处理JSON数据格式的多功能Java库.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - 杰克逊模块,使用字节代码生成来进一步加快数据绑定(+30-40%的吞吐量用于串行化,脱线化).
- [Kryo](https://github.com/EsotericSoftware/kryo) - Java序列化和克隆:快速,高效,自动.
- [Lite³](https://github.com/fastserial/lite3) - JSON兼容的零拷贝系列化格式。
- [MessagePack](http://msgpack.org/) - 高效的二进制序列化格式。
- [Protostuff](https://github.com/protostuff/protostuff) - 串行化库,内置支持向后兼容(schema evolution)和验证。
- [SBinary](https://github.com/harrah/sbinary) - 用于描述斯卡拉类型二进制格式的库。
- [Thrift](http://thrift.apache.org/) - Apache Thrift软件框架,用于可扩展的跨语言服务开发。
- [yyjson](https://github.com/ibireme/yyjson) - C区最快的JSON图书馆

### 储存

- [Apache Cassandra](http://cassandra.apache.org) - 以列为主,提供高可用性,没有单一的故障点。
- [Aerospike (c)](http://www.aerospike.com/) - 高性能 NoSQL 数据库按尺度传送速度。
- [ArangoDB](https://www.arangodb.com/) - 一个分布式免费和开放源码数据库,为文件、图表和密钥值提供灵活的数据模型。
- [Citus](https://github.com/citusdata/citus) - 作为扩展分发的PostgreSQL。
- [CockroachDB (c)](https://www.cockroachlabs.com/) - 仿照Google Spanner制作的云母SQL数据库。
- [Couchbase](https://github.com/couchbase) - 为性能、可扩展性和简化管理而设计的一个分布式数据库。
- [Crate (c)](https://crate.io/) - 可缩放的 SQL 数据库与 NoSQL goodies。
- [Druid](http://druid.io/) - 快速专栏分布式数据库。
- [Elasticsearch](https://www.elastic.co/elasticsearch) - 开放源码分布、可扩展和可大量使用的搜索服务器。
- [Geode](http://geode.incubator.apache.org/) - 用于推广应用的公开源码、分布式、模拟数据库。
- [Infinispan](http://infinispan.org/) - 用于缓存的高度并行的密钥/值数据储存。
- [InfluxDB](https://github.com/influxdata/influxdb) - 计量、事件和实时分析的可扩展数据库。
- [RethinkDB](http://rethinkdb.com/) ——开放源代码,可扩展数据库,使建设实时应用更加便捷.
- [TiKV](https://github.com/tikv) - 分布式交易密钥价值数据库。
- [TimescaleDB](https://github.com/timescale/timescaledb) - 用于作为Postgres扩展件包装的高性能实时分析的时间序列数据库。
- [Trino](https://trino.io/) - 快速分布的SQL查询引擎,用于大数据分析,帮助你探索你的数据宇宙.

### 测试

- [Goreplay](https://github.com/buger/goreplay) - 一个捕获和重播HTTP流量进入测试环境的工具。
- [Keploy](https://keploy.io) - API测试和嘲笑的开源工具,其方法是捕捉真实流量,并将其转换为测试案例和积分,从而能够进行可靠的微服务测试。
- [Mitmproxy](https://mitmproxy.org/) - 一个互动控制台程序,允许拦截、检查、修改和重播交通流量。
- [MockServer](https://www.mock-server.com) - 为多个协议(HTTP、gRPC、GraphQL、LLM、MCP、Kafka、TCP等)进行模拟、调试代理和混沌工程;模拟依赖性、记录/重播流量、核实请求和为整合和复原力测试注入断层。
- [Mountebank](http://www.mbtest.org/) - 跨平台,多protocol测试双倍过线.
- [Pact](https://docs.pact.io) - HTTP API和非HTTP同步消息系统的合同测试框架。
- [RestQA](https://github.com/restqa/restqa) - 管理模拟、单位和性能测试的微服务工具,并具备最佳的班级开发者经验。
- [Specmatic](https://specmatic.io) - 将API规格(OpenAPI,AsyncAPI,GraphQL,gRPC等)转换为可执行合同,用于自动化测试,服务虚拟化,以及不写代码的后向兼容性验证.
- [VCR](https://github.com/vcr/vcr) - 记录你的测试套件的HTTP相互作用,并在未来的测试运行中重新播放,用于快速,决定性,准确的测试. 见以其他语文执行的端口清单。
- [Wilma](https://github.com/epam/Wilma) - 混合HTTP/HTTPS服务支架和透明代理解决方案。
- [WireMock](http://wiremock.org/) - 用于断网和嘲弄网络服务的灵活图书馆。 与一般目的的嘲弄工具不同,它通过创建一个实际的HTTP服务器来工作,在测试中,你的代码可以连接到一个真正的网络服务.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - 用于开发者和测试者的轻量级服务虚拟化/API模拟工具。

## 持续整合和交付

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - 连续整合、连续交付和DevOps的出色工具清单。

## Web API 建模和文档

### 自动同步
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI规格,用于定义同步API的行业标准.

### 图QL

- [GraphQL](http://graphql.org/) - 通过提供直观和灵活的语法和系统来描述其数据要求和相互作用来构建客户端应用程序的查询语言。

### 贾森

- [JSON:API](https://jsonapi.org/) - 说明客户端应如何要求获取或修改资源,以及服务器应如何回应这些请求。

### 资源

- [API Blueprint](https://apiblueprint.org/) - 你整个API生命周期的工具。 用它和别人讨论你的API. 自动生成文档 。 或测试套房。 甚至一些代码。
- [OpenAPI](https://www.openapis.org/) - OpenAPI规格(OAS)为在API生命周期的每个阶段传递信息提供了一致的手段.
- [RAML](http://raml.org/) - RESTFOR API模型语言,一种简单简洁的描述实际RESTful API的方法.
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger生成的API文档.
- [Scalar](https://github.com/scalar/scalar) - 开源API平台:美丽的API参考和1级OpenAPI/Swagger支持.
- [Slate](https://github.com/slatedocs/slate) - 漂亮的静态文档 你的API。
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - 将手写文件与由Spring MVC Test公司生产的自动生成片段相结合,提供文件检索服务。
- [Swagger](https://swagger.io/) - 一个简单而有力的代表 你最优秀的API。

## 标准/建议

### 万维网

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - 万维网的架构,第一卷。
- [RFC3986](https://tools.ietf.org/html/rfc3986) - 统一资源标识符:通用语法。
- [RFC6570](https://tools.ietf.org/html/rfc6570) - URI 模板。
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URI 设计和所有权。

### 自治和权力下放

- [DID](https://www.w3.org/TR/did-core/) - 分散式标识符(DIDs)的W3C规格:一种新型标识符,能够实现可核查的分散式数字身份.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - 私人通信方法的建立取决于分散式设计设计。
- [DIDComm Protocols](https://didcomm.org/) - 登记在DIDComm上建立的协议,以便在任何运输上进行高度信任的、自主的相互作用。
- [IDSA](https://internationaldataspaces.org/) - 国际数据空间协会(数据空间协会)正在执行一项使命,以国际数据空间(数据空间)为全球数字经济的未来创造一个安全、主权的数据共享系统,使所有参与者都能实现其数据的全部价值。

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - 信息语法和规则。
- [RFC7231](https://tools.ietf.org/html/rfc7231) - 语义和内容
- [RFC7232](https://tools.ietf.org/html/rfc7232) - 有条件的请求。
- [RFC7233](https://tools.ietf.org/html/rfc7233) - 距离请求
- [RFC7234](https://tools.ietf.org/html/rfc7234) - 缓冲。
- [RFC7235](https://tools.ietf.org/html/rfc7235) - 认证。
- [RFC7807](https://tools.ietf.org/html/rfc7807) - HTTP API的问题细节。

### HTTP/2 导弹

- [RFC7540](https://tools.ietf.org/html/rfc7540) - 超文本传输协议版本2。

### 快速

- [QUIC-WG](https://quicwg.org/) - IETF工作组,负责提供互联网的下一个运输协议。
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - 基于UDP的多轴和安全运输。

### 难民保护委员会

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - 无国籍、轻量级远程程序程序协议。
- [Open RPC](https://open-rpc.org/) - OpenRPC规格定义了JSON-RPC 2.0 APIs的标准,编程语言不可知界面描述.

### 通讯

- [AMQP](https://www.amqp.org/) - 高级消息排队协议。
- [MQTT](https://mqtt.org/) - MQ遥测运输。
- [STOMP](https://stomp.github.io/) - 简单文字定向通信协议。

### 警卫

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - 授权谈判和授权议定书界定了将授权授予一个软件并将授权传递给该软件的机制。 这个代表团可以包括访问一套API以及直接传递到软件的信息.<sup>草案</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0是OAuth 2.0协议之上的简单身份层. 它允许客户根据授权服务器进行的认证来验证最终用户的身份,并以互操作和REST类似的方式获取最终用户的基本配置信息.
- [PASETO](https://paseto.io/) 帕塞托(Paseto)是你所喜爱的关于JOSE(JWT,JWE,JWS)的一切,没有困扰JOSE标准的许多设计缺陷. <sup>草案</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - 运输层安全协议1.2版。
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLS扩展
- [RFC6347](https://tools.ietf.org/html/rfc6347) - 数据gram 传输层安全版本1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) - OAuth 2.0授权框架。
- [RFC6962](https://tools.ietf.org/html/rfc6962) - 证书透明。
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON网络签名(JWS)代表使用基于JSON的数据结构使用数字签名或信件认证码(MAC)保证的内容.
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web Token(JWT)是一种紧凑的、安全的URL手段,用以代表拟在双方之间转移的索赔。
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM:定义、概述、概念和要求。
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM:Core Schema,为代表用户和团体提供平台中性计划和推广模式.
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM:用于网络上提供和管理身份数据的应用层面的REST协议。

### 服务发现
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - 客户利用标准的DNS查询,发现指定服务实例清单的机制。
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - 指定服务地点的DNS RR(DNS SRV)。

### 数据格式

- [RFC4627](https://tools.ietf.org/html/rfc4627) - JavaScript对象注释(JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) - 简明二进制物体表示。
- [BSON](http://bsonspec.org/) - 二进制JSON(BSON).
- [JSON-LD](http://json-ld.org/) -JSON的链接数据。
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - 简单的二进制编码。
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - 信息包规格

### 词汇

- [JSON Schema](http://json-schema.org/) - 词汇表允许你对JSON文档进行注释和验证.
- [Schema.org](http://schema.org/) - 合作、社区活动,任务是在互联网、网页、电子邮件和电子邮件中建立、维持和促进结构化数据计划。

### 统一编码

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - Unicode集团 "Unicode标准"第8.0.0版(山景,CA:The Unicode Consortium,2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8,一种ISO 10646的转换格式.

## 设计/团队动态

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>专题报告</sup> - Melvin E. Conway),1968年数据学杂志. 定义康威定律的原始条款.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - 每个小组负责一个或多个业务职能(例如业务能力)。 一个团队拥有由一个或多个模块组成的代码基础. 它的代码基础大小,以不超过团队的认知能力. 小组部署其代码为一个或多个服务。 除非证明需要提供多种服务,否则一个小组应提供完全一种服务。
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT 语录</sup> - DOS19伦敦。 "monoliths vs micro services"的争论经常关注技术方面,忽略策略和团队动态. 智能思维组织不是技术,而是以团队认知负荷作为现代软件的指导原则. 在本次谈话中,我们用真正的案例研究来解释原因和方式。

## 企业垂直( V)

- [Commercetools](https://commercetools.com/) - 无头商业平台。
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinox是一个以人为中心的商业和营销平台,通过任何渠道和触点支持丰富、超个性化的经验。
- [Flamingo](https://www.flamingo.me/) ——构建灵活现代电子商务应用框架.
- [Medusa](https://medusajs.com/) ——无头开源商业平台.

## 理论

### 文章和论文

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) ——通过复杂科学理论,对适应性超音速系统设计进行哲学介绍.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - 更新和有组织的阅读清单,以说明可扩展、可靠和能发挥作用的大规模系统的模式。 著名工程师的文章和可信的参考文献对概念作了解释。 案例研究来自为数百万至数十亿用户服务的战役测试系统。
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - 描绘一个服务的规模的模型。
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>专题报告</sup> - 一致是逻辑单调
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - 技术以减少在生产中采用新软件版本的风险,方法是在向整个基础设施推广和向所有人开放之前,慢慢地向一小群用户推广这一变化。
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - 指出分布式计算机系统不可能同时提供以下三项保证:一致性、可用性和分区容忍性。
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>专题报告</sup> ——无服务器计算抽象暴露了几个低级操作细节,使得程序员难以写出和解释他们的代码. 本文通过呈现QQ,无服务器计算本质的操作语义来揭示这个问题.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - 设计软件应用程序作为独立部署服务套件的特殊方式。
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>专题报告</sup> - F5的七段系列关于微服务.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - 就微观服务办法方面的一些问题提出关键建议。
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - 研究米尔科服务建筑风格的成本和效益指南。
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - 反应系统定义。
- [Reactive Streams](http://www.reactive-streams.org/) - 为无阻后压的同步流处理提供标准的倡议。
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>专题报告</sup> - 适应系统资源定向计算。
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>专题报告</sup> - 了解软件生态系统:一种战略建模方法。
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - 管理多种可独立部署组件额外测试复杂性的办法。
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>专题报告</sup> - 描述三种抽象概念,这些抽象概念结合了一种强大的编程模式,用于构建安全、模块化和高效的服务器软件:可编译的未来、服务和过滤器。

### 站点和组织

- [Cloud Native Computing Foundation](https://www.cncf.io/) - 云原电子计算基金会建立可持续的生态系统,并围绕一系列高质量项目培养社区,这些项目将集装箱作为微观服务结构的一部分加以协调。
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - 云土科技互动景观.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - 马丁·福勒(Martin Fowler)对文章,视频,书籍和播客的选择,可以教你更多微服务建筑风格.
- [Microservice Patterns](http://microservices.io/) - 微观服务结构模式和最佳做法。
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - 微型服务,主要是已知的反贩运和陷阱。

## 许可证

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## 捐款

请读一下 [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) 在提交你的建议之前

随便吧 [open an issue](https://github.com/mfornos/awesome-microservices/issues) 或 [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) 加上你的加词

:star2: 谢谢!
