# マイクロサービス関連リソースの厳選集 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

マイクロサービスアーキテクチャ関連の原則と技術に関するキュレーションリスト。

**コンテンツの表**

- [プラットフォーム](#platforms)
- [フレームワーク/ランタイム](#frameworks--runtimes)
- [サービスツールキット](#service-toolkits)
  - [ポリグロット](#polyglot)
  - [ツイート](#c)
  - [C++の](#c-1)
  - [インフォメーション](#csharp)
  - [ダイバーシティ](#d)
  - [Erlang VM の使い方](#erlang-vm)
  - [おすすめ](#go)
  - [ハスケル](#haskell)
  - [Java の VM](#java-vm)
  - [ノード.js](#nodejs)
  - [ログイン](#perl)
  - [ログイン](#php)
  - [フィードバック](#python)
  - [ルビー](#ruby)
  - [ラスト](#rust)
- [フロントエンド / UI](#frontend--ui)
- [能力・能力](#capabilities)
  - [APIゲートウェイ/エッジサービス](#api-gateways--edge-services)
  - [構成とディスカバリー](#configuration--discovery)
  - [ワークフローのオーケストレーション](#workflow-orchestration)
  - [弾性率](#elasticity)
  - [ジョブスケジューラ/ワークロードオートメーション](#job-schedulers--workload-automation)
  - [地域開発](#local-development)
  - [ログイン](#logging)
  - [メッセージング](#messaging)
  - [モニタリングとデバッグ](#monitoring--debugging)
  - [リアクション](#reactivity)
  - [レジリエンス](#resilience)
  - [セキュリティ](#security)
  - [シリアル化](#serialization)
  - [ストレージ](#storage)
  - [テスト](#testing)
- [継続的な統合と配送](#continuous-integration--delivery)
- [Web API モデリングとドキュメント](#web-api-modeling--documentation)
  - [非同期](#async)
  - [グラフQL](#graphql)
  - [ジェソン](#json)
  - [ログイン](#rest)
- [規格・推奨事項](#standards--recommendations)
  - [ワールドワイドウェブ](#world-wide-web)
  - [セルフ・スペシャリゼーションと分散](#self-sovereignty--decentralisation)
  - [HTTP/1.1の](#http11)
  - [HTTP / 2](#http2)
  - [お問い合わせ](#quic)
  - [RPCの](#rpc)
  - [メッセージング](#messaging-1)
  - [セキュリティ](#security-1)
  - [サービスディスカバリー](#service-discovery)
  - [データフォーマット](#data-formats)
  - [コミュニティ](#vocabularies)
  - [ユニコード](#unicode)
- [組織設計・チームダイナミクス](#organization-design--team-dynamics)
- [企業と垂直](#enterprise--verticals)
- [インフォメーション](#theory)
  - [論文・論文](#articles--papers)
  - [サイトマップ](#sites--organizations)
- [ライセンス](#license)
- [貢献する](#contributing)

## プラットフォーム

- [1Backend](https://github.com/1backend/1backend) - AIネイティブマイクロサービスプラットフォーム。
- [Jolie](https://jolie-lang.org) - オープンソースのmicroservice指向プログラミング言語。
- [OpenWhisk](https://github.com/apache/openwhisk) - サーバーレス、オープンソースクラウドプラットフォームは、あらゆる規模でイベントに対応する機能を実行します。
- [Pulumi](https://pulumi.io/) - クラウドネイティブインフラ向けSDK お気に入りの言語を使用して、アプリやインフラの更新をプレビューして管理し、任意のクラウド(YAMLは必要ありません)に継続的にデプロイします。
- [Triton](https://github.com/joyent/triton) - 次世代、コンテナベース、サービス指向のインフラを1つまたは複数のデータセンターに配信するオープンソースクラウド管理プラットフォーム。

## フレームワーク/ランタイム

- [Akka](http://akka.io/) - JVM上でのメッセージドリブンなアプリケーションを高度に同時、分散、および弾力性を高めるためのツールキットとランタイム。
- [Axon (c)](https://axoniq.io/) - JVM上の任意のDDD、CQRSおよびイベントソーシングアプリケーションを簡単に開発および実行するためのエンドツーエンドの開発とインフラプラットフォーム。
- [Ballerina](https://ballerina.io) - クラウドネイティブプログラミング言語
- [Bun](https://bun.sh/) - オールインワンJavaScriptランタイムを高速化。
- [Dapr](https://dapr.io) - 任意のプログラミング言語を使用して、非常に実行可能なマイクロサービスを書くためのオープンソースのランタイム。
- [Deno](https://deno.land/) - JavaScript、TypeScript、WebAssemblyランタイム、安全なデフォルトと優れた開発者体験。
- [Eclipse Microprofile](https://microprofile.io/) - 企業Javaを最適化するためのオープンフォーラムは、複数の実装を革新し、標準化の目標と共通の分野に協力することによって、マイクロサービスアーキテクチャを最適化します。
- [Erlang/OTP](https://github.com/erlang/otp) - 大規模なソフトリアルタイムシステムを構築するために使用されるプログラミング言語は、高可用性の要件で使用されます。
- [Finagle](http://twitter.github.io/finagle) - JVM 用の拡張可能な RPC システムで、高通貨サーバーの構築に使用されます。
- [Gleam](https://gleam.run/) - タイプ安全、スケーラブルなシステムを構築するためのフレンドリーな言語。
- [GraalVM](https://www.graalvm.org/) - マイクロサービスにとって理想的なアプリケーションの性能および効率の重要な改善を提供する高性能のランタイム。
- [Helidon](https://helidon.io/) - Nettyの高速Webコア上で実行するmicroservicesを書くためのJavaライブラリのコレクション。
- [Ice](https://github.com/zeroc-ice/ice) - C++、C#、Java、JavaScript、Pythonなどのサポートを備えた包括的なRPCフレームワーク。
- [Light-4j](https://github.com/networknt/light-4j) - 高スループット、低レイテンシー、小さなメモリフットプリント、より生産的なマイクロサービスプラットフォーム。
- [Micronaut](http://micronaut.io/) - モジュラー、簡単にテスト可能なマイクロサービスアプリケーションを構築するための近代的、JVMベース、フルスタックフレームワーク。
- [Moleculer](http://moleculer.services/) - Node.js、Java、Go、Ruby用の高速かつ強力なマイクロサービスフレームワーク。
- [Open Liberty](https://openliberty.io/) - 迅速かつ効率的なクラウドネイティブJavaマイクロサービスを構築するための軽量オープンフレームワーク。
- [Pears](https://github.com/holepunchto/pear) - ピアツーピアランタイム、開発、展開。
- [SmallRye](https://smallrye.io/) - Eclipse MicroProfile を含むクラウド開発に適した API と実装。
- [Spin](https://github.com/fermyon/spin) - WebAssemblyで高速でセキュアなクラウドサービスを構築し、実行するためのオープンソースフレームワーク。
- [ScaleCube](https://github.com/scalecube/scalecube) - JVMの反応マイクロサービスを構築するツールキット:低レイテンシー、高スループット、スケーラブル、弾力性。
- [Vert.X](http://vertx.io/) - JVM上での反応アプリケーションを構築するツールキット。
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - アクティブマイクロサービスアプリケーションを構築するためのVert.xコンポーネントのセット。
- [Wangle](https://github.com/facebook/wangle) - 一貫した、モジュール式で構築するサービスの共通クライアント/サーバー抽象化のセットを提供するフレームワーク。

## サービスツールキット

### ポリグロット

- [GRPC](http://www.grpc.io/) - モバイルとHTTP/2を最初に置いた高性能、オープンソース、一般的なRPCフレームワーク。 C、C++、Java、Go、Node.js、Python、Ruby、Objective-C、PHP、C#のライブラリ。

### ツイート

- [Lwan](http://lwan.ws/) - 高性能でスケーラブルなWebサーバー。
- [uSockets](https://github.com/uNetworking/uSockets) - 非同期アプリケーション用のミニセルクロスプラットフォームイベント、ネットワーキング、および暗号化。

### C++の
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Cap'n Proto C++ RPCの実装。
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - OSGi のような C++ 動的モジュール システムおよびサービス レジストリ。
- [Enduro/X](https://github.com/endurox-dev/endurox/) - GNU/Linux用のXATMIベースのサービスフレームワーク。
- [Pistache](https://github.com/oktal/pistache) - C++で書かれた高性能RESTツールキット。
- [Poco](http://pocoproject.org/) - ネットワークベースのアプリケーションとサーバーを構築するためのC++クラスライブラリ。
- [Sogou Workflow](https://github.com/sogou/workflow) - バックエンド開発要件のほとんどを満たすことを目的としたエンタープライズグレードのプログラミングエンジン。
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - 最も要求される適用のための簡単で、安全及び標準の迎合的な網サーバー。

### CSハープ

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - .NETコアのマイクロサービスのための素晴らしいトレーニングシリーズ、記事、ビデオ、書籍、コース、サンプルプロジェクト、およびツールのコレクション。

### ダイバーシティ

- [Vibe.d](http://vibed.org/) - D で書かれているあなたの方法で取得しない非同期 I/O。

### Erlang VM の使い方

#### エリクサー

- [Phoenix](http://www.phoenixframework.org/) - HTML5アプリ、APIバックエンド、分散システムの構築のためのフレームワーク。
- [Plug](https://github.com/elixir-lang/plug) - ウェブアプリケーション間の互換性のあるモジュールの仕様と利便性。

#### エルラン

- [Cowboy](https://github.com/ninenines/cowboy) - Erlang で書かれた小型で高速なモジュラー HTTP サーバ。
- [Mochiweb](https://github.com/mochi/mochiweb) - 軽量なHTTPサーバを構築するためのErlangライブラリ。

### おすすめ

- [Chi](https://github.com/go-chi/chi) - Go HTTP サービスをビルドするための軽量で慣用的で、互換性のあるルーター。
- [Echo](https://echo.labstack.com/) - Go の HTTP サーバフレームワークを高速かつアンファンシーにします。残りよりも 10x まで高速です。
- [Fiber](https://github.com/gofiber/fiber) - Express は Fasthttp の上に構築された Web フレームワークを触発しました。Go の最速の HTTP エンジンです。メモリ割り当てやパフォーマンスをゼロにすることで、素早く開発できるように設計しました。
- [Gin](https://github.com/gin-gonic/gin) - GinはGo(Golang)で書かれているHTTP Webフレームワークです。 マティーニのような API は、パフォーマンスが向上し、最大 40 倍の高速化を実現します。
- [Goa](https://github.com/goadesign/goa) - Go の HTTP マイクロサービスの設計に基づく。
- [GoFr](https://github.com/gofr-dev/gofr) ・スケーラビリティと堅牢性を強調する、見解されたマイクロサービス開発フレームワーク。 マイクロサービスの開発を簡素化する設計。
- [Go Chassis](https://github.com/go-chassis/go-chassis) - クラウドエコシステムとの統合が容易であるGoのmicroservicesの急速な発展のためのフレームワーク。
- [Go-micro](https://github.com/micro/go-micro) - 分散システム開発フレームワーク。
- [Go-zero](https://github.com/tal-tech/go-zero) - ウェブとrpc分散システム開発フレームワーク。
- [Gorilla](http://www.gorillatoolkit.org/) - Goプログラミング言語用のWebツールキット。
- [Iris](https://github.com/kataras/iris) - 迅速かつシンプルで効率的なマイクロWebフレームワークでGo.
- [Lura](https://github.com/luraproject/lura) - ミドルウェアで超高速APIゲートウェイを構築するためのフレームワーク。
- [RPCX](https://github.com/smallnest/rpcx) - Alibaba DubboおよびWeibo MotanのようなNET/RPCに基づく分散RPCサービスフレームワーク。

### ハスケル

- [Scotty](https://github.com/scotty-web/scotty) - RubyのSinatraに触発されたマイクロWebフレームワークは、WAIとWarpを使っています。
- [Servant](https://github.com/haskell-servant/servant) - タイプレベルのWeb DSL。
- [Yesod](https://github.com/yesodweb/yesod) - Haskell RESTful Webフレームワーク。

### Java の VM

#### クロージュ

- [Compojure](https://github.com/weavejester/compojure) - Ring/Clojureの簡潔なルーティングライブラリ。
- [Duct](https://duct-framework.org/) - Clojureのサーバー側のフレームワーク。
- [System](https://github.com/danielsz/system) - Stuart Sierraのコンポーネントライブラリの上に構築され、既製のコンポーネントのセットを提供しています。
- [Tesla](https://github.com/otto-de/tesla-microservice) - Otto.deのClojureのmicroservicesのいくつかのための共通の基礎。

#### ログイン

- [ActiveJ](https://github.com/activej/activej) - 複雑な高負荷分散アプリケーションとMemcachedのようなソリューションのための軽量で高速なライブラリ。
- [Airlift](https://github.com/airlift/airlift) - JavaでRESTサービスを構築するフレームワーク。
- [Armeria](https://line.github.io/armeria/) - オープンソースの非同期 HTTP/2 RPC/REST クライアント/サーバーライブラリは、Java 8, Netty, Thrift, gRPC の上に構築されています。
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - 高性能インタースレッドメッセージングライブラリ。
- [Dropwizard](https://github.com/dropwizard/dropwizard) - 不適切で高性能なWebサービスを開発するためのJavaフレームワーク。
- [Dubbo](https://github.com/apache/dubbo) - Alibabaによってオープンソース化された高性能のJavaベースのRPCフレームワーク。
- [Conjure](https://github.com/palantir/conjure-java-runtime) - クライアントとしてFeignまたはRetrofitに基づいてRESTish/RPCサーバーとクライアントを定義し、作成するためのライブラリのopinionatedセットと、JAX-RSサービス定義をサーバーとしてDropwizard/Jersey。
- [Jersey](https://github.com/eclipse-ee4j/jersey) - JavaのRESTfulサービス。JAX-RSリファレンス実装。
- [Quarkus](https://quarkus.io/) - A Kubernetes OpenJDK HotSpot と GraalVM 用に設計されたネイティブ Java スタックは、品種の Java ライブラリと標準の最高のものから作られています。
- [Ratpack](https://ratpack.io/) - 迅速で効率的な、進化し、よくテストされた HTTP アプリケーションを容易にする Java ライブラリのセット。 Groovy言語の特定のサポートが提供されます。
- [Spring Boot](http://projects.spring.io/spring-boot/) - スタンドアローン、生産グレードのスプリングベースのアプリケーションを簡単に作成できます。

#### コトリン

- [Http4k](https://www.http4k.org/) - 機能的かつ一貫した方法でHTTPサービスのサービングと消費を可能にする純粋なコトリンで書かれた軽量で十分に機能するHTTPツールキット。
- [Ktor](https://ktor.io/) - Kotlinプログラミング言語を使用して、非同期サーバーとクライアントを接続システムに構築するためのフレームワーク。

#### ログイン

- [Finatra](http://twitter.github.io/finatra/) - Twitter-ServerとFinagle上に構築された、高速でテスト可能な Scala HTTP サービス。
- [Http4s](http://http4s.org/) - HTTP 用の最小限の慣用 Scala インターフェイス
- [Play](https://www.playframework.com/) - JavaとScalaの高速Webフレームワーク。

### ノード.js

- [Actionhero](http://www.actionherojs.com/) - 統合クラスタ機能と遅延タスクを備えたマルチトランスポートNode.js APIサーバー。
- [Express](http://expressjs.com/) - Node.js の Web フレームワークの高速、非最適化、最小化
- [Fastify](https://www.fastify.io/) - Node.js 用の Fastify および Fast および Low の Web フレームワーク。
- [FeathersJS](http://feathersjs.com/) - 現代のアプリケーション用のオープンソースRESTおよびリアルタイムAPIレイヤー。
- [Hono](https://hono.dev/) - Edge 用の小規模でシンプルで超高速な Web フレームワーク。 JavaScript のランタイムで動作します。
- [Koa](http://koajs.com/) - Node.jsの次世代Webフレームワーク
- [Loopback](http://loopback.io/) - API を作成するための Node.js フレームワークで、データをバックエンドに簡単に接続できます。
- [NestJS](https://docs.nestjs.com/) - Node.jsフレームワークは、組み込みのmicroservicesサポートを使用して、効率的でスケーラブルなサーバーサイドアプリケーションを構築します。
- [Seneca](https://github.com/senecajs/seneca) - Node.js用のmicroservicesツールキット
- [Serverless](https://github.com/serverless/serverless) - AWS Lambda および API Gateway で実行されている Web、モバイル、IoT アプリケーションの構築と維持(JAWS として以前)。
- [tRPC](https://github.com/trpc/trpc) - エンドツーエンド型安全API。

### ログイン

- [Cro](http://cro.services/) - Perl 6を使用して、反応分散システムを作成するライブラリ。
- [Mojolicious](https://mojolicious.org/) - Perlの次世代Webフレームワーク。

### ログイン

- [API Platform](https://api-platform.com/) - JSON-LD、Schema.org、HydraのサポートでSymfonyのトップにあるAPIファーストWebフレームワーク。
- [Ecotone](https://docs.ecotone.tech/) - 建物ブロックを提供するDDD、CQRSおよびイベントソーシングの建築原則に基づいてフレームワークは、スケーラブルで拡張可能なアプリケーションを作成する。
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf は、Swoole 4.5+ に基づく非常に実行可能で柔軟な PHP CLI フレームワークで、最先端のコルウチンサーバーと多数の戦闘テストコンポーネントが搭載されています。
- [Lumen](https://lumen.laravel.com/) - 驚くほど高速マイクロフレームワーク。
- [Slim](http://www.slimframework.com/) - シンプルでパワフルなWebアプリケーションやAPIを素早く書き出すことができるマイクロフレームワーク。
- [Spiral](https://spiral.dev/) - 長期にわたる適用の使用のために設計されているフレームワーク [RoadRunner](https://roadrunner.dev/). それはとの統合のような高度の特徴を提供します [Temporal](https://temporal.io/) ワークフローエンジンと [Centrifugo](https://centrifugal.dev/) websocket サーバー マイクロサービスアーキテクチャには特に効果的で、REST API および gRPC サービスの堅牢なサポートを提供します。
- [Swoft](https://github.com/swoft-cloud/swoft/) - 高性能なWebシステム、API、ミドルウェア、基本サービスの構築のためのPHPマイクロサービスコルテインフレームワーク。
- [Symfony](https://symfony.com/) - Symfony コンポーネントに基づくマイクロフレームワーク

### フィードバック

- [Aiohttp](https://github.com/aio-libs/aiohttp) - asyncio 用の HTTP クライアント/サーバー。
- [Bottle](https://bottlepy.org) - Python用の高速でシンプルで軽量なWSGIマイクロWebフレームワーク。
- [Connexion](https://github.com/zalando/connexion) - 自動エンドポイント検証とOAuth2サポートでフラスコの上にPython用のSwagger/OpenAPIフレームワーク。
- [Falcon](https://falconframework.org/) - 非常に高速なアプリのバックエンドとマイクロサービスを構築するためのベアメタルPython Web APIフレームワーク。
- [FastAPI](https://fastapi.tiangolo.com/) - モダンで高速な(高性能)、標準のPythonタイプヒントに基づいて、Python 3.6+でAPIをビルドするためのWebフレームワーク。
- [Flask](http://flask.pocoo.org/) - WerkzeugとJinja 2に基づくマイクロサービスのPythonフレームワーク
- [Nameko](https://github.com/onefinestay/nameko) - マイクロサービスを構築するPythonフレームワーク。
- [Sanic](https://github.com/sanic-org/sanic) - Sanicは高速に行くために書かれているフラスコのようなPython + Webサーバーです。
- [Tornado](http://www.tornadoweb.org/) - Webフレームワークと非同期ネットワークライブラリ。
- [Twisted](https://twisted.org/) - イベント主導のネットワークプログラミングエンジン。
- [Web.py](https://github.com/webpy/webpy/) - Python用のミニマリストWebフレームワーク。

### ルビー

- [Grape](https://github.com/ruby-grape/grape) - REST のような API を作成するための意見付きのフレームワーク
- [Hanami](https://github.com/hanami) - Rubyの近代的なWebフレームワーク。
- [Praxis](https://github.com/rightscale/praxis) - APIの設計と実装のためのフレームワーク。
- [Scorched](https://github.com/wardrop/Scorched) - Ruby用の軽量Webフレームワーク。
- [Sinatra](http://www.sinatrarb.com/) - Sinatraは、RubyでWebアプリケーションを素早く作成するためのDSLです。

### ラスト

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - RustのWebプログラミングの現在の状態の概要。
- [Actix](https://actix.rs/) - Rustの強力で実用的で、非常に速いWebフレームワーク。
- [Tarpc](https://github.com/google/tarpc) - RPCフレームワーク Rustは、使いやすさに重点を置いています。
- [Tokio](https://tokio.rs) - ネットワークアプリケーションを書くための非同期ランタイム。
- [Tower](https://github.com/tower-rs/tower) - 堅牢なネットワーククライアントとサーバーを構築するためのモジュラーおよび再利用可能なコンポーネントのライブラリ。
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2クライアント/サーバーフレームワーク。

## フロントエンド / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - マイクロフロントエンドに関するリソースのキュレーションリスト。
- [Electrode](https://github.com/electrode-io) - ユニバーサルReact/Node.jsアプリケーションプラットフォーム。
- [Micro Frontends](https://micro-frontends.org) - microserviceのアイデアをフロントエンド開発に拡張します。
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniAppの標準化の白いペーパー。

## 能力・能力

### APIゲートウェイ/エッジサービス

- [Ambassador (c)](https://www.getambassador.io) - - - KubernetesEnvoy 上に構築されたマイクロサービス用の -native API ゲートウェイ。
- [Apache APISIX](https://apisix.apache.org/) - NGINXおよびetcdで造られる高性能、実時間APIの入り口およびAIのゲートウェイは熱荷を積まれたルーティングおよび100+のプラグインと。
- [APIcast](https://github.com/3scale/APIcast) - APIcastはNGINXの上に構築されたAPIゲートウェイです。 Red Hat 3scale API Management Platformの一部です。
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Webアプリのホスティングと逆プロキシはデフォルトで安全です。
- [Caddy](https://caddyserver.com/) - 自動HTTPSで拡張可能なHTTP / 2 Webサーバー。
- [Camel](http://camel.apache.org/) - Java ベースのフルエント API や Spring や Blueprint XML の設定ファイル、 Scala DSL など、さまざまなドメイン固有の言語でルーティングとメディアのルールを定義するエンパワフル。
- [Envoy](https://github.com/lyft/envoy) - オープンソースのエッジとサービスプロキシ、開発者からLyft。
- [HAProxy](https://github.com/haproxy/haproxy) - 信頼できる、高性能TCP/HTTPの負荷バランサ。
- [Istio](https://istio.io/) - マイクロサービスを接続し、管理し、そして保障する開いたプラットホーム。
- [Keepalived](http://www.keepalived.org/) - LinuxシステムおよびLinuxベースのインフラストラクチャへの負荷分散と高可用性のためのシンプルで堅牢な施設。
- [Kong](https://github.com/kong/kong) - API のソース管理レイヤーを開きます。
- [KrakenD](http://krakend.io/) - オープンソースの超高速APIゲートウェイ。
- [Kuma](https://kuma.io/) - サービス網およびmicroservicesのためのプラットホームのgnosticの開いた源制御平面。
- [Linkerd](https://linkerd.io/) - クラウドネイティブアプリ用のレジリエントサービスメッシュ。
- [Neutrino](https://github.com/eBay/Neutrino) - 拡張可能なソフトウェアロードバランサ。
- [OpenResty](http://openresty.org/) - Nginxの上に構築された高速Webアプリケーションサーバー。
- [Open Service Mesh](https://openservicemesh.io/) - 軽量で拡張可能なクラウドネイティブサービスメッシュ。
- [Otoroshi](https://www.otoroshi.io/) - 軽量のAPI管理の現代HTTPの逆のプロキシ。
- [Pingora](https://github.com/cloudflare/pingora) - 迅速かつ信頼性が高く、進化するネットワークサービスを構築するライブラリ。
- [Skipper](https://github.com/zalando/skipper) - サービスロジックからルーティングをデカップリングするのに役立つHTTPルーター。
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - Spring MVC の上にある API Gateway です。 API にルーティングするシンプルで効果的な方法を提供することを目指しています。
- [Tengine](http://tengine.taobao.org/) - 高度な機能を備えたNginxの配布。
- [Træfɪk](http://traefik.io/) - マイクロサービスを簡単にデプロイするために作られた現代のHTTPリバースプロキシとロードバランサー。
- [Traffic Server](https://github.com/apache/trafficserver) - クラウドサービスのための高性能ビルディングブロック。
- [Tyk](https://tyk.io/) - オープンソース、高速かつスケーラブルなAPIゲートウェイ、ポータル、API管理プラットフォーム。
- [Vulcand](https://github.com/vulcand/vulcand) - プログラマティックロードバランサーは、etcd によってバックアップ。
- [Zuul](https://github.com/Netflix/zuul) - 動的ルーティング、監視、レジリエンス、セキュリティなどを提供するエッジサービス。

### 構成とディスカバリー

- [Central Dogma](https://line.github.io/centraldogma/) - Git、ZooKeeper、HTTP/2に基づいて、オープンソースの高度に利用できるバージョン管理サービス構成リポジトリ。
- [Consul](https://www.consul.io/) - サービスの発見および構成は容易にしました。 分散型、高機能、データセンターアウェア。
- [Etcd](https://github.com/coreos/etcd) - 共有構成およびサービスの発見のための高度に利用できるキー価値の店。
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - 主にAWSクラウドで使用されているRESTベースのサービスで、ロードバランシングとミドルティアサーバのフェイルオーバーの目的でサービスを配置します。
- [Microconfig](https://microconfig.io) - マイクロサービスの構成管理の現代そして簡単な方法。
- [Nacos](https://github.com/alibaba/nacos) - 使いやすい動的サービスの発見、構成およびサービス管理のプラットホーム。
- [SkyDNS](https://github.com/skynetservices/skydns) - エッチングの上に構築されたサービスの発表と発見のための分散サービス。 利用可能なサービスを発見するためにDNSクエリを利用します。
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - 分散システム内の外部設定のためのサーバーとクライアント側のサポートを提供します。
- [ZooKeeper](https://zookeeper.apache.org/) - 信頼できる分散調整を可能にするオープンソースサーバー。

### ワークフローのオーケストレーション

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - ビジュアルワークフローを使用して、分散型アプリケーションとマイクロサービスのコンポーネントを調整します。
- [Cadence](https://cadenceworkflow.io/) - 故障明らかなステートフルなコードプラットフォーム。
- [Conductor](https://github.com/Netflix/conductor) - マイクロサービスオーケストレーションエンジン。
- [Inngest](https://github.com/inngest/inngest) - バックグラウンドジョブから複雑なワークフローまで、信頼性の高いバックグラウンドロジックのための耐久性のある機能。
- [Kestra](https://github.com/kestra-io/kestra) - オープンソースのマイクロサービスイベント主導、言語アグノスティックオーケストレーション、スケジューリングプラットフォーム。
- [Temporal](https://github.com/temporalio/temporal) - ミッションの重要なコードをあらゆる規模で実行するためのオープンソースのマイクロサービスオーケストレーションプラットフォーム。
- [Zeebe](https://camunda.com/platform/zeebe/) - 業務プロセスの定義、オーケスト、監視

### 弾性率

- [Hazelcast](http://hazelcast.org/) - オープンソースのメモリ内データグリッド。 サーバー、クラスター、地理学を横断してデータと計算を配布し、非常に大きなデータセットやデータインジェストレートを管理することができます。 成熟した技術.
- [Helix](http://helix.apache.org/) - ノードのクラスターでホストされているパーティション、複製、分散リソースの自動管理に使用される一般的なクラスター管理フレームワーク。
- [Ignite](http://ignite.apache.org/) - 大規模なデータセットをリアルタイムで計算し、変換するための高性能、統合および分散型インメモリープラットフォーム、従来のディスクベースまたはフラッシュ技術でより迅速にの大きさの注文。
- [Libp2p](https://libp2p.io/) - ピアツーピアネットワークアプリケーションを構築するためのプロトコルのフレームワークとスイート。
- [Mesos](https://mesos.apache.org/) - CPU、メモリ、ストレージ、およびマシン(物理または仮想)から離れた他の計算リソースを抽象化し、障害耐性と弾性分散システムを容易に構築し、効果的に実行できるようにします。
- [Nomad](https://www.nomadproject.io/) - 分散、高度に利用できる、datacenter-awareのスケジューラ。
- [Redisson](https://github.com/mrniko/redisson) - Redisサーバーの上部に分散およびスケーラブルなJavaデータ構造。
- [Serf](https://www.serf.io/) - クラスターのメンバーシップ、失敗の検出およびオーケストレーションのための分散された解決。
- [Valkey](https://github.com/valkey-io/valkey) - 以前のオープンソースのRedisプロジェクトで開発を再開するための新しいプロジェクト。
- [Zenoh](https://zenoh.io/) - パブ/サブ/クエリ プロトコルは、データをモーション、残りと計算で統一します。 伝統的なパブ/サブを地分散ストレージ、クエリ、コンピューティングで効率的にブレンドします。

### ジョブスケジューラ/ワークロードオートメーション

- [Celery](https://github.com/celery/celery) - 分散メッセージの渡るに基づいて非同期タスクキュー/ジョブキュー。 リアルタイム操作に焦点を合わせ、スケジューリングをサポートします。
- [Dkron](http://dkron.io/) - 分散された、欠陥の許容の仕事のスケジューリング システム。
- [Faktory](https://github.com/contribsys/faktory) - 言語agnostic永続的な背景の仕事サーバー。
- [Rundeck (c)](http://rundeck.org/) - ジョブスケジューラとランブックの自動化。 既存のスクリプトやツールへのセルフサービスアクセスを有効にします。
- [Schedulix](https://github.com/schedulix/schedulix) - オープンソースのエンタープライズジョブスケジューリングシステムは、高度なシステム環境でITプロセスのプロフェッショナルな自動化のための画期的な基準を敷設します。

### 地域開発

- [mirrord](https://metalbear.com/mirrord/) - リモートでポッドだったらローカルコードを実行します Kubernetes クラスター。

### ログイン

- [Fluentd](http://www.fluentd.org/) - 統一されたロギング層のためのオープンソースのデータ収集装置。
- [Graylog](https://www.graylog.org/) - 完全に統合されたオープンソースログ管理プラットフォーム。
- [Kibana](https://www.elastic.co/products/kibana) - 柔軟な分析と可視化プラットフォーム。
- [LogDNA (c)](https://logdna.com/) - 集中ログ管理ソフトウェア。 任意のプラットフォームからリアルタイムでログを即座に収集、一元化、分析します。
- [Logstash](https://www.elastic.co/logstash) - イベントやログを管理するためのツール。
- [Loki](https://github.com/grafana/loki) - Prometheusのように、しかしログのために。

### メッセージング

- [ØMQ](http://zeromq.org/) - 無機理性的な輸送の層。
- [ActiveMQ](http://activemq.apache.org/) - 強力なオープンソースメッセージングと統合パターンサーバー。
- [Aeron](https://github.com/real-logic/Aeron) - 効率的な信頼性の高いUDPユニキャスト、UDPマルチキャスト、およびIPCメッセージ輸送。
- [Beanstalk](https://beanstalkd.github.io/) - シンプルで高速な作業キュー。
- [Bull](https://github.com/OptimalBits/bull) - ノードの高速かつ信頼性の高いRedisベースのキュー。
- [Crossbar](https://github.com/crossbario/crossbar) - 分散およびマイクロサービスの適用のためのオープンソースのネットワーキングのプラットホーム。 これは、オープンWebアプリケーションメッセージングプロトコル(WAMP)を実行します。
- [Kafka](http://kafka.apache.org/) - Publish-subscribeメッセージングは、分散コミットログとして求めた。
- [Malamute](https://github.com/zeromq/malamute) - ZeroMQエンタープライズメッセージングブローカー。
- [Mosquitto](http://mosquitto.org/) - MQTTプロトコルを実装するオープンソースメッセージブローカーを開きます。
- [NATS](https://nats.io/) - オープンソース、高性能、軽量クラウドメッセージングシステム。
- [NSQ](http://nsq.io/) - リアルタイムの分散メッセージングプラットフォーム。
- [Pulsar](https://pulsar.apache.org/) - 分散パブサブメッセージングシステム。
- [RabbitMQ](https://www.rabbitmq.com/) - オープンソースのErlangベースのメッセージブローカーが機能するだけです。
- [Redpanda](https://github.com/redpanda-data/redpanda/) - 開発者向けデータプラットフォームのストリーミング: Kafka API 互換、10倍高速、ZooKeeper なし、JVM なし。
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - alibabaの大規模なメッセージングビジネスから生まれたメッセージ指向のミドルウェアを使用して、低レイテンシー、信頼性、スケーラブル、簡単に。

### モニタリングとデバッグ

- [Beats](https://www.elastic.co/beats/) - Elasticsearch および Logstash のための軽量の荷役。
- [Elastalert](https://github.com/yelp/elastalert) - Elasticsearch の容易な及び適用範囲が広い警告。
- [Ganglia](http://ganglia.info/) - クラスターやグリッドなどの高性能コンピューティングシステム向けのスケーラブルな分散監視システム。
- [Grafana](http://grafana.org/) - オープンソースで、グラナイト、InfluxDB、OpenTSDB用の豊富なメトリックダッシュボードとグラフエディタを備えています。
- [Graphite](http://graphite.wikidot.com/) - スケーラブルなリアルタイムグラフ。
- [IOpipe (c)](https://www.iopipe.com/) - Amazon Lambdaのアプリケーション性能監視。
- [Jaeger](https://www.jaegertracing.io/) - オープンソース、エンドツーエンドの分散トレース
- [OpenTelemetry](https://opentelemetry.io/) - 良質、ubiquitousおよび有効な観察性を可能にする携帯用テレメトリー。
- [Prometheus](http://prometheus.io/) - オープンソースサービス監視システムとタイムシリーズデータベース。
- [Riemann](http://riemann.io/) - 分散システムを監視します。
- [Sensu](https://github.com/sensu) - 今日のインフラの監視
- [SkyWalking](https://skywalking.apache.org/) - 分散システムのための応用性能のモニター ツール、特にマイクロサービス、雲のネイティブおよび容器ベースの(Docker、 K8s、Mesos)の建築。
- [Zabbix](http://www.zabbix.com/) - オープンソースのエンタープライズクラスの監視ソリューション。
- [Zipkin](http://zipkin.io) - 分散トレースシステム。

### リアクション

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - ストリーム処理エンジンを分散させ、SQLを書くことでデータストリームを変換、フィルタ、集計、結合します。
- [Reactor.io](https://github.com/reactor) - Reactive Streams 仕様に基づいて、JVM 上で非ブロッキングアプリケーションを構築するための2世代のReactiveライブラリ。
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Apache Kafka の API をリアクティブストリームします。
- [ReactiveX](http://reactivex.io/) - 保存可能なストリームで非同期プログラミングのためのAPI。 慣用的なJava、 Scala、C#、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++、C++
- [RSocket](https://rsocket.io/) - 反応ストリームのセマティクスを提供するアプリケーションプロトコル。

### レジリエンス

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - 素晴らしいChaosエンジニアリングリソースのキュレーションリスト。
- [Raft Consensus](https://raft.github.io/) - 理解しやすいように設計されたコンセンサスアルゴリズム。 障害耐性と性能のPaxosと同等です。
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Java8と機能プログラミング用に設計されたフォールト許容ライブラリ。
- [Svix](https://svix.com) - Webhooksサービスは、すべてのリトライスケジュール、指数関数的なバックオフ、シグネチャ検証、イベントタイプでユーザーにWebhooksを送信するサービスです。

### セキュリティ

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - アクセスポリシーの承認、テスト、および展開のための認可管理システム。 マイクロサービスアーキテクチャでスケーラブルで、微細なグラインドされた認可を築きました。
- [Dex](https://github.com/coreos/dex) - プラグ可能なコネクターが付いているopinionated auth/directoryサービス。 OpenID Connect プロバイダーとサードパーティの OAuth 2.0 の委任
- [JWT](http://jwt.io/) - JSON Web トークンは、2 つのパーティ間でクレームを安全に表すためのオープンで業界標準の RFC 7519 メソッドです。
- [Keycloak](https://github.com/keycloak/keycloak) - フル機能と拡張可能なオースサービス。 OpenID Connect プロバイダーとサードパーティの OAuth 2.0 の委任
- [OAuth](http://oauth.net/2/) - Webアプリケーション、デスクトップアプリケーション、携帯電話、リビングルームデバイス用の特定の承認フローを提供します。 多くの実装。
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - 現在のOpenID仕様と関連仕様を実装するライブラリ、製品、およびツール。
- [Open Ziti](https://openziti.io/) - 純粋なオープンソースソフトウェアとしてゼロ信頼のセキュリティとオーバーレイネットワーク。
- [ORY](https://www.ory.sh/) - オープンソースのアイデンティティインフラとサービスを開きます。
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) — AIエージェントのメモリ中毒(OWASP ASI06)のランタイム防衛層。 改ざんされたメモリエントリ、メモリパスのプロンプト注入、およびシークレット漏れを検出します。 YAMLポリシー、マイクロ秒レイテンシー、ゼロ外部依存関係。
- [SCIM](https://simplecloud.info/) - クロスドメインのアイデンティティ管理のためのシステム。
- [Vault](https://www.vaultproject.io/) - トークン、パスワード、証明書、API キー、および現代のコンピューティングの他の秘密へのアクセスを堅固に管理します。

### シリアル化

- [Avro](https://avro.apache.org/) - 密集した、速く、バイナリ データ フォーマットで豊富なデータ構造を提供するApacheのデータ シリアライズ システム。
- [Bond](https://github.com/microsoft/bond/) - 大規模サービスのマイクロソフトで広く利用された回路図データを扱うためのクロスプラットフォームフレームワーク。
- [BooPickle](https://github.com/ochrons/boopickle) - 効率的なネットワーク通信のためのバイナリシリアライズライブラリ。 Scala と Scala.js の
- [Cap’n Proto](https://capnproto.org/) - 非常に速いデータ交換のフォーマットおよび機能ベースのRPCシステム。
- [CBOR](http://cbor.io/) - 多くの言語でCBOR標準(RFC 7049)の実装。
- [Cereal](http://uscilab.github.io/cereal/) - シリアル化のためのC++11ライブラリ。
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON と JSON SMILE のエンコーディング/デコード。
- [Etch](http://etch.apache.org/) - ネットワークサービスの構築と消費のためのクロスプラットフォーム、言語および輸送独立したフレームワーク。
- [Fastjson](https://github.com/alibaba/fastjson) - 速いJSONプロセッサ。
- [Ffjson](https://github.com/pquerna/ffjson) - より速いJSONのシリアライズのためのGo。
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - 速いJavaのシリアライズの低下の取り替え。
- [Jackson](https://github.com/FasterXML/jackson) - JSONデータフォーマットを処理するための多目的Javaライブラリ。
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - バイトコード生成を使用するジャクソンモジュールは、データ結合(シリアル化、デシリアライゼーションのための+30-40%スループット)を高速化します。
- [Kryo](https://github.com/EsotericSoftware/kryo) - Javaのシリアライズとクローニング:高速、効率的、自動。
- [Lite³](https://github.com/fastserial/lite3) - JSON 互換のゼロコピーのシリアライズのフォーマット。
- [MessagePack](http://msgpack.org/) - 効率的なバイナリシリアライズフォーマット。
- [Protostuff](https://github.com/protostuff/protostuff) - 前方互換性(schema evolution)と検証のための組み込みサポートを備えたシリアライズライブラリ。
- [SBinary](https://github.com/harrah/sbinary) - Scala タイプのバイナリフォーマットを記述するためのライブラリ。
- [Thrift](http://thrift.apache.org/) - 拡張可能なクロス言語サービス開発のためのApache Thriftソフトウェアフレームワーク。
- [yyjson](https://github.com/ibireme/yyjson) - Cで最も速いJSONライブラリ。

### ストレージ

- [Apache Cassandra](http://cassandra.apache.org) - コラム指向、失敗の単一のポイントと高い可用性を提供する。
- [Aerospike (c)](http://www.aerospike.com/) - スケールで速度を提供する高性能のNoSQLデータベース。
- [ArangoDB](https://www.arangodb.com/) - 文書、グラフ、およびキー値の柔軟なデータモデルを備えた分散型フリーかつオープンソースデータベース。
- [Citus](https://github.com/citusdata/citus) - PostgreSQLを拡張子に分散させる。
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Google Spannerの後にモデル化されたクラウドネイティブSQLデータベース。
- [Couchbase](https://github.com/couchbase) - パフォーマンス、スケーラビリティ、および単純化された管理のために設計された分散されたデータベース。
- [Crate (c)](https://crate.io/) - NoSQL に Scalable SQL データベースを格納します。
- [Druid](http://druid.io/) - 速いコラム指向の分散データ店。
- [Elasticsearch](https://www.elastic.co/elasticsearch) - オープンソースの配布、スケーラブル、および利用可能な検索サーバー。
- [Geode](http://geode.incubator.apache.org/) - スケールアウトアプリケーション用のオープンソース、分散、メモリ内データベース。
- [Infinispan](http://infinispan.org/) - キャッシュに使用される高同時キー/値のデータストア。
- [InfluxDB](https://github.com/influxdata/influxdb) - メトリック、イベント、リアルタイム分析のためのスケーラブルなデータストア。
- [RethinkDB](http://rethinkdb.com/) - オープンソース、リアルタイムアプリの構築を容易にするスケーラブルなデータベース。
- [TiKV](https://github.com/tikv) - トランザクションキー値データベースの配布
- [TimescaleDB](https://github.com/timescale/timescaledb) - Postgres拡張としてパッケージ化された高性能リアルタイム分析のための時間系列データベース。
- [Trino](https://trino.io/) - データユニバースを探索するのに役立つビッグデータ分析用の高速分散SQLクエリエンジン。

### テスト

- [Goreplay](https://github.com/buger/goreplay) - ライブHTTPトラフィックをテスト環境にキャプチャして再生するためのツール。
- [Keploy](https://keploy.io) - 実際のトラフィックをキャプチャし、それをテストケースやスタブに変換することにより、APIのテストとモックのためのオープンソースツールは、信頼性の高いマイクロサービスのテストを可能にします。
- [Mitmproxy](https://mitmproxy.org/) - トラフィックフローが傍受、検査、修正、再生されるようにするインタラクティブなコンソールプログラム。
- [MockServer](https://www.mock-server.com) - 複数のプロトコル(HTTP、gRPC、GraphQL、LLM、MCP、Kafka、TCPなど)のプロキシとチャオスエンジニアリングのモック、デバッギング、デバッギング、およびマルチプロトコル(HTTP、gRPC、GraphQL、LLM、MCP、Kafka、TCPなど)。 mock依存関係、レコード/リプレイトラフィック、リクエストの確認、統合およびレジリエンステストの障害の注入。
- [Mountebank](http://www.mbtest.org/) - 十字プラットホーム、ワイヤー上の複数のプロトコル テスト倍。
- [Pact](https://docs.pact.io) - HTTP APIと非HTTP非同期メッセージングシステム用の受託テストフレームワーク。
- [RestQA](https://github.com/restqa/restqa) - クラス開発者の経験で最高のローカルでmicroservicesのモック、単位および性能のテストを管理するためのツール。
- [Specmatic](https://specmatic.io) - APIの仕様(OpenAPI、AsyncAPI、GraphQL、gRPCなど)を自動テスト、サービス仮想化、および書き込みコードなしで後方互換性検証のための実行可能契約に変換します。
- [VCR](https://github.com/vcr/vcr) - テストスイートのHTTPインタラクションを録画し、将来のテストが速く、決定的、正確なテストを実行したときに再生します。 他の言語での実装のためのポートのリストを参照してください。
- [Wilma](https://github.com/epam/Wilma) - HTTP/HTTPSサービススタブと透明プロキシソリューションを組み合わせました。
- [WireMock](http://wiremock.org/) - ウェブサービスのスタブとモックのための柔軟なライブラリ。 実際の HTTP サーバを作成することで動作する一般的な目的のモックツールとは異なり、テスト中のコードは実際の Web サービスとして接続できます。
- [Hoverfly](https://github.com/spectolabs/hoverfly) - 開発者およびテスターのための軽量サービス仮想化/APIのシミュレーション用具。

## 継続的な統合と配送

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - 継続的な統合、継続的な配信およびDevOpsのための素晴らしいツールのキュレーションリスト。

## Web API モデリングとドキュメント

### 非同期
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI仕様、非同期APIを定義するための業界標準。

### グラフQL

- [GraphQL](http://graphql.org/) - データ要件と相互作用を記述するための直感的で柔軟な構文とシステムを提供することで、クライアントアプリケーションを構築するために設計されたクエリ言語。

### ジェソン

- [JSON:API](https://jsonapi.org/) - クライアントの要求が、リソースが取得または変更されるべきかどうか、およびサーバーがそれらの要求にどのように反応すべきかの仕様。

### ログイン

- [API Blueprint](https://apiblueprint.org/) - API ライフサイクル全体のためのツール 他の人とAPIを議論するために使用します。 ドキュメントを自動的に生成します。 またはテスト スイート。 または、いくつかのコード。
- [OpenAPI](https://www.openapis.org/) - OpenAPI 仕様(OAS)は、API ライフサイクルの各段階で情報を運ぶための一貫した手段を提供します。
- [RAML](http://raml.org/) - RESTful API モデリング言語、実用的にRESTful API を記述するシンプルで簡単な方法。
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger-generated API ドキュメント。
- [Scalar](https://github.com/scalar/scalar) - オープンソース API プラットフォーム: 美しい API リファレンスと 1 クラスの OpenAPI/Swagger サポート。
- [Slate](https://github.com/slatedocs/slate) - API の静的ドキュメントを美しくします。
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Spring MVC Testで生成された自動生成スニペットと手書き文書を組み合わせて、ドキュメントRESTfulサービス。
- [Swagger](https://swagger.io/) - RESTful API のシンプルでパワフルな表現。

## 規格・推奨事項

### ワールドワイドウェブ

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - 世界ワイドウェブ、ボリュームワンのアーキテクチャ。
- [RFC3986](https://tools.ietf.org/html/rfc3986) - 均一リソース識別子(URI):ジェネリックシンタックス。
- [RFC6570](https://tools.ietf.org/html/rfc6570) - URIテンプレート。
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URIの設計と所有権。

### セルフ・スペシャリゼーションと分散

- [DID](https://www.w3.org/TR/did-core/) - 分散型識別子(DID)のW3C仕様:検証可能な分散型デジタルアイデンティティを可能にする新しいタイプの識別子。
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - プライベートなコミュニケーション方法論は、DIDの分散型設計を上回りました。
- [DIDComm Protocols](https://didcomm.org/) - DIDComm 上に構築されたプロトコルのレジストリは、あらゆる輸送上の高信頼、自主的な相互作用のために。
- [IDSA](https://internationaldataspaces.org/) - 国際データスペース協会(IDSA)は、国際データスペース(IDS)と、すべての参加者がデータの完全な価値を実現することができるデータの共有の安全な、 sovereign システムで、グローバル、デジタル経済の未来を作成するミッションです。

### HTTP/1.1の

- [RFC7230](https://tools.ietf.org/html/rfc7230) - メッセージの同期とルーティング。
- [RFC7231](https://tools.ietf.org/html/rfc7231) - Semanticsとコンテンツ。
- [RFC7232](https://tools.ietf.org/html/rfc7232) - 条件付き要求。
- [RFC7233](https://tools.ietf.org/html/rfc7233) - 範囲の要求。
- [RFC7234](https://tools.ietf.org/html/rfc7234) - キャッシュ。
- [RFC7235](https://tools.ietf.org/html/rfc7235) - 認証
- [RFC7807](https://tools.ietf.org/html/rfc7807) - HTTP API の問題の詳細。

### HTTP / 2

- [RFC7540](https://tools.ietf.org/html/rfc7540) - ハイパーテキスト転送プロトコルバージョン2.

### お問い合わせ

- [QUIC-WG](https://quicwg.org/) - IETFワーキンググループは、インターネットの次の輸送プロトコルを届けるためにチャーターされています。
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - UDPベースのマルチプレックスおよび安全な輸送。

### RPCの

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - 無状態、軽量のリモート・プロシージャ呼出し(RPC)の議定書。
- [Open RPC](https://open-rpc.org/) - OpenRPC仕様は、JSON-RPC 2.0 API の標準的なプログラミング言語アグノスティックインターフェースの説明を定義しています。

### メッセージング

- [AMQP](https://www.amqp.org/) - 高度なメッセージキューイングプロトコル。
- [MQTT](https://mqtt.org/) - MQテレメトリー輸送。
- [STOMP](https://stomp.github.io/) - 簡単なテキスト指向のメッセージングプロトコル。

### セキュリティ

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - 助成金交渉と承認プロトコルは、ソフトウェアの部分に承認を委任するためのメカニズムを定義し、その委任をソフトウェアに伝えます。 このデリゲーションには、APIのセットへのアクセスや、ソフトウェアに直接渡された情報が含まれます。<sup>ドラフト</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0 は、OAuth 2.0 プロトコルの上部にあるシンプルなアイデンティティレイヤーです。 クライアントは、Authorization Server が実行する認証に基づいてエンドユーザーの ID を検証し、相互運用可能な REST のような方法でエンドユーザーに関する基本的なプロファイル情報を取得することを可能にします。
- [PASETO](https://paseto.io/) - Paseto は、JOSE (JWT、JWE、JWS) について、JOSE 規格を盗む多くの設計上の欠陥なしに愛するすべてです。 <sup>ドラフト</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - トランスポート層セキュリティ(TLS)プロトコルバージョン1.2。
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLSエクステンション。
- [RFC6347](https://tools.ietf.org/html/rfc6347) - データグラムの輸送の層の保証版1.2。
- [RFC6749](https://tools.ietf.org/html/rfc6749) - OAuth 2.0 認可フレームワーク。
- [RFC6962](https://tools.ietf.org/html/rfc6962) - 証明書の透明性。
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signature (JWS) は、JSON ベースのデータ構造を使用して、デジタル署名またはメッセージ認証コード(MAC)で保護されたコンテンツを表しています。
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web トークン (JWT) は、2 つのパーティ間で送金されるクレームを表す、コンパクトで URL 安全な手段です。
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM:定義、概要、概念および条件。
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM:Core Schemaは、ユーザーとグループを表すプラットフォームニュートラルスキーマと拡張モデルを提供します。
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM:Web上でIDデータをプロビジョニングおよび管理するためのアプリケーションレベルのプロトコル。

### サービスディスカバリー
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - クライアントがサービスの名前付きインスタンスのリストを発見するためのメカニズム、標準のDNSクエリを使用して。
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - サービスの場所(DNS SRV)を指定するDNS RR。

### データフォーマット

- [RFC4627](https://tools.ietf.org/html/rfc4627) - JavaScript オブジェクト表記 (JSON)
- [RFC7049](https://tools.ietf.org/html/rfc7049) - バイナリオブジェクト表現(CBOR)の簡潔化。
- [BSON](http://bsonspec.org/) - バイナリJSON(BSON)。
- [JSON-LD](http://json-ld.org/) - データをリンクするためのJSON。
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - シンプルなバイナリエンコーディング(SBE)。
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - MessagePackの指定。

### コミュニティ

- [JSON Schema](http://json-schema.org/) - JSON 文書をアノテートおよび検証できる語彙。
- [Schema.org](http://schema.org/) - 共同で、インターネット上の構造化されたデータをスキーマを作成、維持し、促進する使命を持つコミュニティ活動、Webページ、電子メールメッセージ、およびそれを超えて。

### ユニコード

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - ユニコードコンソーシアム Unicode標準、バージョン 8.0.0、(Mountain View、CA:Unicodeコンソーシアム、2015。 ISBN 978-1-936213-10-8)。
- [RFC3629](https://tools.ietf.org/html/rfc3629) - ISO 10646の変換フォーマットであるUTF-8。

## 組織設計・チームダイナミクス

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - Melvin E. Conway、データメーション雑誌 1968。 「Conway’s Law」のオリジナル記事
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - 各チームは1つ以上のビジネス機能(ビジネス機能など)を担当しています。 1つ以上のモジュールで構成されるコードベースを所有しています。 そのコードベースは、チームの認知能力を上回らないため大きさで分類されます。 チームは、コードを1つ以上のサービスとしてデプロイします。 複数のサービスを持っていることが証明された必要性がなければ、チームが正確に1つのサービスを持っている必要があります。
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>お問い合わせ</sup> - DOES19 ロンドン 「モノリス対マイクロサービス」議論は、多くの場合、技術的な側面に焦点を当て、戦略とチームのダイナミクスを無視します。 技術の代わりに、スマート思考組織は、現代のソフトウェアのための指導原則として、チーム認知負荷から始まります。 本講演では、実際のケーススタディで説明した方法と理由について説明しています。

## 企業と垂直

- [Commercetools](https://commercetools.com/) - ヘッドレスコマースプラットフォーム。
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinoxは、あらゆるチャネルとタッチポイントで豊かでハイパーパーソナライズされたエクスペリエンスをサポートする、人間中心のコマースおよびマーケティングプラットフォームです。
- [Flamingo](https://www.flamingo.me/) - 柔軟でモダンなeコマースアプリケーションを構築するフレームワーク。
- [Medusa](https://medusajs.com/) - ヘッドレスオープンソースコマースプラットフォーム。

## インフォメーション

### 論文・論文

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - 複雑性科学理論による適応型ハイパーリムジンシステムの設計への哲学的な導入。
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - 拡張性、信頼性、および実行能力の大規模システムのパターンを照らすための更新および整理された読書リスト。 コンセプトは、著名なエンジニアや信頼できるリファレンスの記事で説明しています。 数千億～数億人のユーザーが抱える戦闘テスト済みシステムから導入された事例です。
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - 寸法を図ってサービスをスケールアップするモデル。
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - 論理的な単調性としての一貫性。
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - インフラストラクチャ全体に展開し、誰もが利用できるようにするために、ユーザーの小さなサブセットへの変更をゆっくりとロールアウトすることにより、生産中の新しいソフトウェアバージョンを導入するリスクを減らす技術。
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - 配布されたコンピュータシステムが、一貫性、可用性、およびパーティションの許容範囲の3つを同時に提供することができない状態。
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - サーバレス・コンピューティングの抽象化は、プログラマが自分のコードについて書き、理由を難しくなるいくつかの低レベルの運用詳細を公開しています。 この論文は、サーバーレスコンピューティングの本質の運用管理である λ を提示することで、この問題に光を当てます。
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - 独自に展開するサービスのスイートとしてソフトウェアアプリケーションの設計の特定の方法。
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - マイクロサービスのF5の7部分シリーズ。
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - マイクロサービスのアプローチに関するいくつかの問題に関する重要なアドバイス。
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - ミラーコサービス建築様式のポンダーの費用そして利点へのガイド。
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - 反応システム定義。
- [Reactive Streams](http://www.reactive-streams.org/) - 非ブロッキングバック圧力で非同期ストリーム処理のための標準を提供する取り組み。
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - 適応システムのためのリソース指向コンピューティング。
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - ソフトウェアエコシステムを理解する:戦略的モデリングアプローチ。
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - 複数の独立した配置可能なコンポーネントの追加テストの複雑性を管理するためのアプローチ。
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>サイトマップ</sup> - 安全な、モジュラー、および効率的なサーバーソフトウェアを構築する強力なプログラミングモデルを提示するために結合する3つの抽象を記述します: 妥協可能な未来、サービスおよびフィルター。

### サイトマップ

- [Cloud Native Computing Foundation](https://www.cncf.io/) - クラウドネイティブコンピューティング財団は、持続可能なエコシステムを構築し、マイクロサービスアーキテクチャの一環としてコンテナをオーケストする高品質のプロジェクトを構成するコミュニティを育成します。
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - クラウドネイティブ技術のインタラクティブな風景。
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - マーティン・フローラーはmicroservicesの建築様式についての詳細を教えることができる記事、ビデオ、本およびポッドキャストの選択を好みます。
- [Microservice Patterns](http://microservices.io/) - マイクロサービスアーキテクチャパターンとベストプラクティス。
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - マイクロサービスはほとんど知られていた反パターンおよび下落。

## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## 貢献する

お問い合わせ [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) 提案を提出する前に。

お問い合わせ [open an issue](https://github.com/mfornos/awesome-microservices/issues) または [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) あなたの追加で。

:star2: お問い合わせ
