<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> FastAPIに関連する素晴らしいことのキュレーションリスト。

[FastAPI](https://fastapi.tiangolo.com/) RESTful API の構築に最適な、モダンで高性能な、電池込みの Python ウェブフレームワークです。

## 目次

- [サードパーティ製拡張機能](#third-party-extensions)
  - [管理](#admin)
  - [認証](#auth)
  - [サイバーセキュリティ](#cybersecurity)
  - [データベース](#databases)
  - [依存症の注入](#dependency-injection)
  - [開発者ツール](#developer-tools)
  - [電子メール](#email)
  - [ユーティリティ](#utils)
- [リソース](#resources)
  - [公式リソース](#official-resources)
  - [外部リソース](#external-resources)
  - [ポッドキャスト](#podcasts)
  - [カテゴリー](#articles)
  - [チュートリアル](#tutorials)
  - [インタビュー](#talks)
  - [ビデオ](#videos)
  - [コース](#courses)
  - [ベストプラクティス](#best-practices)
- [ホスティング](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [サーバレス](#serverless)
- [プロジェクト](#projects)
  - [ひな形](#boilerplate)
  - [Docker イメージ](#docker-images)
  - [オープンソースプロジェクト](#open-source-projects)
- [スポンサー](#sponsors)

## サードパーティ製拡張機能

### 管理

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Django Adminに触発されたFastAPI(フラスコとDjango)用の使いやすい管理者ダッシュボード。
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - データをCRUD操作を実行するユーザーインターフェイスを提供する機能管理者パネル。 現在、トートワーズORMでしか動作しません。
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 高性能で効率的かつ簡単に拡張可能なFastAPI管理フレームワーク。
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - ピッコロORMを使用して、強力でモダンな管理GUI。
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - SQLAlchemyモデルで動作するFastAPI/Starlette用のアドミンパネル。
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - FastAPI/Starlette のフレームワークを管理し、SQLAlchemy、SQLModel、MongoDB、および ODMantic をサポートします。


### 認証

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI のカスタマイズ可能な認証と Oauth2 管理
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - JWTアクセスとリフレッシュトークンでOAuth2パスワードフローをサポートするプラグイン可能なauth。
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - 単一および多テナント サポートと API の Azure AD 認証。
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - カスビンを通じて、RBAC、ReBAC、ABACなどの各種アクセス制御モデルに対応した認可
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPIとクラウド認証サービス(AWS Cognito、Auth0、Firebase Authentication)の簡単な統合。
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - 口座管理と認証(に基づく)[Flask-Login](https://github.com/maxcountryman/flask-login))。
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (に基づく)[Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended))。
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 行レベルの権限。
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - FastAPI の依存関係として認証と認可を実行します。
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - パス操作で管理可能なOut-of-the-box API キーセキュリティ。
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - 口座管理、認証、認証。
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - IAMプラットフォームを使用したOAuth2 [Zitadel](https://github.com/zitadel/zitadel) お問い合わせ

### サイバーセキュリティ

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - レート制限、自動禁止IP、侵入攻撃検出、ホワイトリスト/ブラックリスト(国、IP、クラウドプロバイダー)、ユーザーエージェントフィルタリング、地理的位置付け、永続性のためのRedis統合など。
- [secure](https://github.com/TypeError/secure) - ASGIミドルウェアとシングルコンフィギュレーションオブジェクトを使用して、FastAPIアプリでHTTPセキュリティヘッダーを一貫して定義し、適用します。

### データベース

#### オーム

- [Edgy ORM](https://github.com/dymmond/edgy) - 複雑なデータベースをシンプルにしました。
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPI との間の簡単な統合 [SQLAlchemy](https://www.sqlalchemy.org/) お問い合わせ
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - FastAPI 用の SQLAlchemy 拡張機能で、パジネーション、非同期、および pytest をサポート。
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - REST API をベースとしたシンプルな方法 [PeeWee](https://github.com/coleifer/peewee) モデル。
- [FastSQLA](https://github.com/hadrien/FastSQLA) - SQLModelのサポート、組み込みのパジネーションなど、FastAPI 用の SQLAlchemy 2.0+ 拡張を非同期化。
- [GINO](https://github.com/python-gino/gino) - Pythonの非同期のためのSQLAlchemyコアの上に構築された軽量非同期ORM。
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - 非同期ORM。
- [ormar](https://collerek.github.io/ormar/) - Ormar は、Pydantic バリデーションを使用する非同期 ORM で、FastAPI リクエストやレスポンスで直接使用できるため、モデルの 1 セットのみで維持できます。 埋め込みマイグレーションが含まれています。
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - ormar で FastAPI を使用する。
- [Piccolo](https://github.com/piccolo-orm/piccolo) - バッテリー(マイグレーション、セキュリティなど)でPostgresとSQLiteをサポートする、非同期ORMとクエリビルダー。
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Piccolo で FastAPI を使用する。
- [Tortoise ORM](https://tortoise.github.io) - Djangoに触発された使いやすい非同期ORM(オブジェクトのリレーショナルマッピング)。
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Tortoise-ORM FastAPI の統合例
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Tortoise ORMの移行ツール。
- [Saffier ORM](https://github.com/tarsil/saffier) - 必要なのは Python ORM だけです。
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel(Pydantic と SQLAlchemy によって供給される)は、Python のコードから SQL データベースと対話するためのライブラリです。

#### クエリビルダー

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - 周りのラッパー [asyncpg](https://github.com/MagicStack/asyncpg) 使用のために [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) お問い合わせ
- [Databases](https://github.com/encode/databases) - 上部にあるSQLクエリビルダーを非同期化 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) 表現言語。
- [PyPika](https://github.com/kayak/pypika) - SQL言語の完全豊かさを調べるSQLクエリビルダー。

#### ODMの

- [Beanie](https://github.com/BeanieODM/beanie) - MongoDB 用の非同期 Python ODM、[Motor](https://motor.readthedocs.io/en/stable/) そして、[Pydantic](https://pydantic.dev/docs/) 箱からのデータおよび回路図のマイグレーションを支える。
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - PythonからMongoDBと連携するためのドキュメントオブジェクトマッピング(ORMではなく、ドキュメントデータベース)。
- [Motor](https://motor.readthedocs.io/) - MongoDB用の非同期Pythonドライバ。
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODMと統合 [Pydantic](https://pydantic.dev/docs/) お問い合わせ
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Amazon の DynamoDB への Python インターフェイス。

#### その他のツール

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - SQLAlchemyモデルを変換する [Pydantic](https://pydantic.dev/docs/) モデル。
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - CamelCase JSON による FastAPI 活用支援 [Pydantic](https://pydantic.dev/docs/) お問い合わせ
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - 拡張子の作者からブログ投稿を関連付ける。
 
### 依存症の注入

- [modern-di](https://github.com/modern-python/modern-di) - IoC容器および規模の依存の注入フレームワーク、と [FastAPI integration](https://github.com/modern-python/modern-di-fastapi) お問い合わせ
- [Wireup](https://github.com/maldoinc/wireup) - FastAPI で実行時間のオーバーヘッドがゼロで依存関係を注入します。Web や cli などのインターフェイスで依存関係を共有します。

### 開発者ツール

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - OpenAPIファイルからFastAPIアプリを作成し、スキーマ主導の開発を可能にします。
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - mypy と IDE フレンドリーな API クライアントを OpenAPI 仕様から生成します。
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - Ruby on Rails、Ember.js、Sails.js の開発生産性を FastAPI エコシステムに引き上げるよう設計された FastAPI のコンパニオンライブラリです。
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 高品質のFastAPI製造準備APIを作るための開発者の生産性ツール。
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - サービスのパフォーマンスをチェックするために、joerick/pyinstrumentのFastAPIミドルウェア。
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - API バージョン
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - Jupyter ノートを RESTful API エンドポイントとして実行します。
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - FastAPI プロジェクトを生成および管理するための CLI ツール。
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - オートマチック [MessagePack](https://msgpack.org/) コンテンツの交渉。
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - CQRS、トランザクションアウトボックス、佐賀オーケストレーション、シームレスなFastAPI/FastStream統合によるイベント駆動アーキテクチャフレームワーク。

### 電子メール

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - 電子メールや添付ファイル(個人やバルク)を送信するための軽量メールシステム。

### ユーティリティ

- [Apitally](https://github.com/apitally/apitally-py) - API の分析、監視、および FastAPI のログのリクエスト
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - ID ロギングミドルウェアのリクエスト
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - シンプルな軽量キャッシュシステム。
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Redis、Memcached、DynamoDB、およびメモリ内バックエンドのサポートで、FastAPI応答と機能結果をキャッシュするツール。
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Chameleonテンプレート言語の統合をFastAPIに追加します。
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) FastAPI の統合
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - ユーティリティのオピニオンセット: pagination、authミドルウェア、パーミッション、カスタム例外ハンドラ、MongoDBサポート、ミドルウェアのOpentracing。
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - 強力な非同期CRUD操作と柔軟なエンドポイント作成ユーティリティ。
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPIとStarlette用の非同期イベントディスパッチ/ハンドリングライブラリ。
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI の機能フラグのシンプルな実装。
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - CLI ツール、背景タスク、ワーカーなどで、FastAPI の依存関係のインジェクションを使用します。
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Jinja テンプレート言語を FastAPI に統合します。
- [FastAPI Lazy](https://github.com/yezz123/fastango) - FastAPIを使用してプロジェクトを開始するためのレイジーパッケージ。
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI のレート制限リクエスト
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - コンポーネントベースのアーキテクチャ、組み込みクエリパジネータ、ソーダ、django-admin などの API の設計/構築を行うライブラリ。
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTTプロトコルの拡張
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI のミドルウェアとデータベースのトレースサポートをオープン
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPIへの移行
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redisとスケジューラプラグイン。
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - APIサービスを作成するジェネレータ。
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 一般的なFastAPIライブラリは、任意の一般的なエンドポイントデコレータをレイジーの依存関係の注射をすることができます。
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPIとSocketIOの簡単な統合。
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 再使用可能なユーティリティ:クラスベースのビュー、応答推論ルータ、定期的なタスク、タイミングミドルウェア、SQLAlchemyセッション、OpenAPI仕様の簡素化。
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - ジャンゴ REST FastAPI のフレームワーク・インスパイアされた ViewSet では、クラスベースの CRUD エンドポイント組織を自動ルート登録で有効化できます。
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - 古典的なパブ/サブパターンは、Webとクラウドをリアルタイムで簡単にアクセスし、スケーラブルにしました。
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - RPC(双方向JSON RPC)は、Websockets上で簡単に、堅牢で生産の準備をしました。
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - ライブラリは、FastAPI Webフレームワークの自動および手動のインストゥルメントを提供し、フレームワークを利用してアプリケーションによって提供されるHTTPリクエストを計測します。
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - プレンダー用のスターレットミドルウェア。
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - FastAPI アプリケーション用のコンフィギュラブルでモジュール式の Prometheus インストゥルメンタです。
- [SlowApi](https://github.com/laurents/slowapi) - レートリミッター(ベース)[Flask-Limiter](https://flask-limiter.readthedocs.io))。
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - プロジェクトのどこにでもデータを保存し、アクセスできるようにします。
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - FastAPI および Starlette の 1 つのより多くの prometheus の統合。
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - StarletteとFastAPIのオープントレーシングサポート。
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPI と Starlette の Prometheus 統合
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - データクラスに基づくPython GraphQLライブラリ。
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  pydantic クラスを、解決と後処理のホックを導入することで、強力な複合コンピューティング コンテナに変えます。

## リソース

### 公式リソース

- [Documentation](https://fastapi.tiangolo.com/) - 包括的なドキュメント。
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - ほとんどの機能でFastAPIを使用する方法を示す公式チュートリアルでは、ステップバイステップ。
- [Source Code](https://github.com/fastapi/fastapi) - GitHubでホストされている。
- [Discord](https://discord.com/invite/VQjSZaeJmf) - 他のFastAPIユーザーとチャットできます。

### 外部リソース

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - 生産準備のRESTful APIの開発およびテストに焦点を合わせる多数のFastAPI固有の記事は、機械学習モデルをサービングし、より多くの。

### ポッドキャスト

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - このエピソードで [Podcast Init](https://www.pythonpodcast.com/), FastAPI の作成者,[Sebastián Ramirez](https://tiangolo.com/), FastAPI を構築するためのモチベーションを共有し、それがどのようにして動作するか.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - プロジェクトの概要

### カテゴリー

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - フラスコからFastAPIに移行したいという理由を詳しくご覧ください。

### チュートリアル

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - SQLAlchemyを非同期的に使用する方法を学びます。
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Test-Driven Development を使用して、FastAPI、Postgres、Pytest、Docker で非同期 API を開発およびテストします。
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - フラスコのコード比較でFastAPIを学ぶ。
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - 長期にわたる SQLAlchemy セッションと接続プールの排気を生産で診断し、修正します。
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - より保守可能なコードベース用のFastAPIアプリケーションとサービス構造。
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - 完全な FastAPI Web アプリケーションスタックから始める。
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - FastAPIアプリケーションマルチテナントの準備方法を学びます。
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - FastAPIからデータをリアルタイムチャートに直接ストリーミングする方法を学びます。
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - 生産展開のためにシステム化されたGunicornを使用します。
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - FastAPI を使用して、Python の機械学習モデルを素早く簡単にデプロイし、RESTful API として機能します。
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - ビデオストリームの配信方法を学びます。
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - プロパティベースのテストをFastAPIに適用します。

### インタビュー

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Sebastian Ramirezのトークでは、デフォルトで最高のプラクティスを含む、FastAPIでMLモデルの制作準備のWeb(JSON) APIを簡単に構築する方法を学びます。
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - このトークでは、FastAPI を使用して、地上からデータベース用のシンプルなREST API を作成する方法を示します。

### ビデオ

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - FastAPIでWebベースのストックスクリーナーを構築し、Pydanticモデル、依存注入、背景タスク、SQLAlchemy統合など、多くのFastAPIの機能に導入します。
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - FastAPIを使用してWebアプリケーションプログラミングインターフェイス(RESTful API)を構築します。
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - FastAPIで数値検証を行う方法を参照してください。
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - どのフレームワークが最適ですか? async/await を使うのは? 最速ですか?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - FastAPI で機械学習 API を構築します。

### コース

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Python、FastAPI、Dockerでテキストの要約マイクロサービスを構築、テスト、デプロイする方法を学びます。
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - FastAPI でクラウド上で動作する新しい API を迅速に作成できるコースです。
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - フラスコやDjangoでできることと同等のFastAPIでフルWebアプリを構築することを学びます。
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Celery を FastAPI アプリケーションに追加する方法を学び、非同期タスク処理を提供します。

### ベストプラクティス

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - GitHubリポジトリのベストプラクティスのコレクション。
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - FastAPI、diska、faststream、sqlalchemy、pydantic を組み合わせます。
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - FastAPIで構築されたクリーンアーキテクチャバックエンドの例。

## ホスティング

### PaaS

（プラットフォーム・アズ・ア・サービス）

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)( )[tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)( )[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

（インフラストラクチャ・アズ・ア・サービス）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### サーバレス

フレームワーク：

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - AWS Lambda と API Gateway で ASGI アプリケーションを実行するためのアダプタです。
- [Vercel](https://vercel.com/) - (旧ゼイト)[example](https://github.com/Snailedlt/Markdown-Videos))。

コンピューティング：

- [AWS Lambda](https://aws.amazon.com/lambda/)( )[example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)( )[example](https://github.com/anthonycorletti/cloudrun-fastapi))

## プロジェクト

### ひな形

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - フルスタック FastAPI テンプレート
FastAPI、React、SQLModel、PostgreSQL、Docker、GitHub Actions、自動HTTPSなどを含む。[Sebastián Ramírez](https://github.com/tiangolo))。
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - Web API w/FastAPI (Webフレームワークとして) および Tortoise-ORM 用の強力でシンプルなテンプレート (ヘッダなしでデータベース経由で作業)。
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - 依存注入(modern-di)、Alembicマイグレーション、および正当なワークフローを備えたドッカー化スターター。
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - 機械学習モデルの生産準備ができるSkeletonアプリ。
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - FastAPIでスパCyモデルの迅速な展開。
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - FastAPIプロジェクト用のCookiecutterテンプレート:機械学習、詩、Azure Pipelines、pytest。
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - OpenAPI から最新の FastAPI Python クライアント (FastAPI 経由で) を生成します。
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) FastAPIアプリをスキャフォールドするジェネレータ。
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Pythonで高性能非同期REST API用のテンプレート。 FastAPI + GINO + Arq + Uvicorn (w/Redis および PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - FastAPI、TypeScript、Docker、PostgreSQL、React を使用したフルスタック・クッキーカッター・ボイラープレート。
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - 工場パターンアーキテクチャでシンプルなFastAPIテンプレート。
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 柔軟で軽量なFastAPIプロジェクトジェネレーター。 SQLAlchemy、複数のデータベース、CI/CD、Docker、Kubernetesのサポートが含まれています。
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - FastAPI、SQLModel、Google Cloud Run を使用した API ビルド用のボイラープレートです。
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - FastAPI および Google Cloud の Firestore が付いている API の建物のためのボイラープレート。
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - FastAPI、Alembic、Async SQLModelをORMとして使うプロジェクトテンプレートです。
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - FastAPI、SQLModel、Alembic、Pytest、Docker、GitHub Actions CI を使用したプロジェクトテンプレート。
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - FastAPI、MongoDB、Docker、Celery、React のフロントエンド、自動 HTTPS を含む完全な積み重ね、現代 Web アプリケーション発電機。
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - FastAPI アプリケーションを起動するためのCookiecutterプロジェクトテンプレート。 Kubernetes上のUvicorn ASGIサーバーでDockerコンテナで実行します。 AMD64 および ARM64 CPU アーキテクチャをサポート
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - ジェネリックベースクラスがボイラプレート無しで非同期CRUDを与えるDDDレイヤードテンプレート, ドメインは、発見時に自己登録, そして、プレコミットは、コミット時にクロスレイヤーのインポートをブロックします.

### Docker イメージ

- [inboard](https://github.com/br3ndonland/inboard) - ドッカーのイメージは、FastAPI アプリケーションに電力を供給し、より速く出荷するのに役立ちます。
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Python 3.7 および 3.6 の高性能 FastAPI Web アプリケーションで、Gunicorn が管理する Uvicorn による Docker イメージ。
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Python Webアプリケーションを実行するためのUvicornワーカーを使用してGunicornとDockerイメージ。 依存関係の管理と仮想環境の設定にPoetry を使用します。 AMD64とARM64 CPUアーキテクチャをサポートしています。
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - KubernetesでPython Webアプリケーションを実行するためのUvicorn ASGIサーバーでDockerイメージ。 依存関係の管理と仮想環境の設定にPoetry を使用します。 AMD64とARM64 CPUアーキテクチャをサポートしています。

### オープンソースプロジェクト

- [Astrobase](https://github.com/anthonycorletti/astrobase) - どこでも簡単、高速、安全な展開。
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - FastAPI を使用するプロジェクトのリストを整理しました。
- [Bitcart](https://github.com/bitcart/bitcart) - 簡単にセットアップと使用を提供する商人、ユーザー、開発者のためのプラットフォーム。
- [Bali](https://github.com/bali-framework/bali) - FastAPIとgRPC上でクラウドネイティブマイクロサービスの開発拠点を簡素化します。
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - FastAPI、React+RxJs、Neo4j、PostgreSQL、Redisで構築された小さなソーシャルネットワークです。
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 世界的なコロナウイルス(COVID-19、SARS-CoV-2)の発生を追跡するためのAPI。
- [Dispatch](https://github.com/Netflix/dispatch) - セキュリティインシデントの管理
- FastAPI CRUDの例:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - FastAPIアプリを観察し、保存性を3つの柱で観察:Trace(Tempo)、Metrics(Prometheus)、Logs(Loki)、GrafanaのOpenTelemetryとOpenMetricsによるログ。
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast' デモ。
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - タスクキューの RabbitMQ で FastAPI と Celery を使用した最小例、Celery バックエンドの Redis、Celery タスクを監視するための花。
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - WebSockets、SSE、コールバック、シークレットメッセージなど、ベストプラクティスで構築されたRESTとGraphQLの遊び場。
- [JeffQL](https://github.com/yezz123/JeffQL/) - グラフQLおよびJWTを使用して簡単な認証とログインAPI。
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - FastAPI に基づく JSON-RPC サーバー
- [Mailer](https://github.com/rclement/mailer) - 静的Webサイト用のデッドスimpleメーラーマイクロサービス。
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - サムネイルを生成してマークダウンコンテンツに埋め込むAPI。
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - ネモと生産的です。
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Open-Policy のトップにリアルタイム承認の更新。FastAPI、Typer、FastAPI WebSocket pub/sub で構築されています。
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - ミドルウェア、HTTP イベントトラッキング、AWS Lambda インテグレーション、テストユーティリティ、およびType Safe、Pydantic、およびデータクラス間のオートコンバージョンを提供するType-safe FastAPI ラッパー。
- [Polar](https://github.com/polarsource/polar) - FastAPI、SQLAlchemy、Alembic、Arqで構築された開発者のための資金調達および収益化プラットフォーム。
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - Redis は Websocket、Asyncio、FastAPI/Starlette を使用したチャットアプリをバックアップしました。
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - セルラーオートマッタを使用して、個人8ビットアバターを生成します。
- [Slackers](https://github.com/uhavin/slackers) - Slack の webhooks API です。
- [TermPair](https://github.com/cs01/termpair) - エンドツーエンドの暗号化でブラウザから端末を表示および制御できます。
- [Universities](https://github.com/ycd/universities) - 世界中の+9600の大学に関する情報を得られるAPIサービス。

## スポンサー

スポンサーをチェックアウトすることで、このオープンソースプロジェクトをサポートしてください。

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
