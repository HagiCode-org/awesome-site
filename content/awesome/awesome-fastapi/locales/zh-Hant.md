<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> 和FastAPI有關

[FastAPI](https://fastapi.tiangolo.com/) 一個現代的高性能的 Python 網絡框架,

## 目錄

- [第三方擴充功能](#third-party-extensions)
  - [管理](#admin)
  - [身分驗證](#auth)
  - [網路安全](#cybersecurity)
  - [數據庫](#databases)
  - [依赖性注射](#dependency-injection)
  - [發展者工具](#developer-tools)
  - [電子郵件](#email)
  - [工具](#utils)
- [資源](#resources)
  - [官方資源](#official-resources)
  - [外部資源](#external-resources)
  - [播客](#podcasts)
  - [文章](#articles)
  - [教學](#tutorials)
  - [談話](#talks)
  - [影片](#videos)
  - [课程](#courses)
  - [最佳做法](#best-practices)
- [託管](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [沒有伺服器](#serverless)
- [專案](#projects)
  - [起始範本](#boilerplate)
  - [嵌入式影像](#docker-images)
  - [開源專案](#open-source-projects)
- [贊助者](#sponsors)

## 第三方擴充功能

### 管理

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - 由Django Admin創作。
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - 功能管理面板, 提供使用者介面來執行 CRUD 操作 。 目前只與神龟ORM合作.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 高性能、高效和容易延伸的 FastAPI 管理框架。
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - 使用 Piccolo ORM 的強大而現代的管治使用者介面。
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - FastAPI/ Starlette 與 SQLAlchemy 模型合作的管理面板 。
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - FastAPI/Starlette 的管理框架, 支援 SQLAlchemy, SQLModel, MongoDB 和 ODMantic 。


### 身分驗證

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI 自訂認證與 Oauth2 管理 。
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - 支援 OAuth2 密碼流與 JWT 存取及刷新符號的插件 。
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - 您的 API 的 Azure AD 認證, 包含單位及多位租戶支援 。
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - 經過Casbin, 支援 RBAC、 ReBAC 和 ABAC 等各種存取控制模式的授权 。
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPI 與雲認證服務的簡單整合( AWS CONITO, Auth0, Firebase 認證) 。
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - 帳戶管理和認證(基于 [Flask-Login](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT 憑證( 基于 [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 行級權限 。
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - 在 FastAPI 中以依赖性來執行認證與授權 。
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - 通过路徑操作控制外的 API 金鑰安全 。
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - 帳號管理 認證 授權
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - 使用 IAM 平台的 OAuth2 [Zitadel](https://github.com/zitadel/zitadel).

### 網路安全

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - 限速、 自動禁用 IP 、 穿透攻擊偵測、 白清單/ 黑清單( 國家、 IP、 云端提供商)、 使用者代理过滤、 地理定位、 Redis 集成等 。
- [secure](https://github.com/TypeError/secure) - 在 FastAPI 應用程式中, 使用 ASGI 中件及單個設定物件, 一致地定义及应用 HTTP 安全信頭 。

### 數據庫

#### ORM

- [Edgy ORM](https://github.com/dymmond/edgy) - 複雜的數據庫很簡單
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPI 和 FastAPI 的簡單整合 [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - FastAPI 的 SQLAlchemy 延伸, 支持 pagination, asyncio, 和 pytest 。
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - 建立 REST API 的簡單方法 [PeeWee](https://github.com/coleifer/peewee) 模特
- [FastSQLA](https://github.com/hadrien/FastSQLA) - 使用 SQLModel 支持的 FastAPI 的 Async SQLAlchemy 2.0+ 延伸, 內建 pagination & more 。
- [GINO](https://github.com/python-gino/gino) - Python Asyncio 的 SQLAlchemy 核上建的輕量級同步ORM 。
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - 動脈
- [ormar](https://collerek.github.io/ormar/) - Ormar 是使用 Pydantic 驗證的 Async ORM, 可以直接用在 FastAPI 的請求和回應中, 所以您只剩下一套模型需要維持 。 包括阿倫比克移民。
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - 使用 FastAPI 與 Orma 。
- [Piccolo](https://github.com/piccolo-orm/piccolo) - 支援 Postgres 和 SQLite 的 Async ORM 與查詢建立器,
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - 使用 FastAPI 與 Piccolo 。
- [Tortoise ORM](https://tortoise.github.io) - 由 Django 啟發,
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Ortoise-ORM FastAPI整合的例子.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - 神龟ORM移動工具.
- [Saffier ORM](https://github.com/tarsil/saffier) - 你唯一需要的Python ORM。
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel( 由 Pydantic 和 SQLAlchemy 提供電源) 是用 Python 碼與 SQL 數據庫互動的函數庫, 有 Python 物件 。

#### 查詢建立器

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - 包裝 [asyncpg](https://github.com/MagicStack/asyncpg) 用于 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases](https://github.com/encode/databases) - Async SQL 查詢建立器, 工作於上方 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) 表示語言。
- [PyPika](https://github.com/kayak/pypika) - SQL 查詢建立器, 顯示 SQL 語言的完全豐富 。

#### 管理部

- [Beanie](https://github.com/BeanieODM/beanie) - 基于 MongoDB 的同步 Python ODM [Motor](https://motor.readthedocs.io/en/stable/) 和 [Pydantic](https://pydantic.dev/docs/),它支持資料和圖示的移出。
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - 從 Python 與 MongoDB 合作的檔案- Object Mapper( 思考 ORM, 但用于文件資料庫 ) 。
- [Motor](https://motor.readthedocs.io/) - MongoDB 同步 Python 驅動程式 。
- [ODMantic](https://art049.github.io/odmantic/) - Asyncio MongoDB ODM 集成 [Pydantic](https://pydantic.dev/docs/).
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - 是亞馬遜的DynamoDB的熱門介面

#### 其他工具

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - 轉換 SQLAlchemy 模型 [Pydantic](https://pydantic.dev/docs/) 模特
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - 使用 CamelCase JSON 支援 FastAPI [Pydantic](https://pydantic.dev/docs/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - 作者的部落格文章。
 
### 依赖性注射

- [modern-di](https://github.com/modern-python/modern-di) - 依附注射框架,IoC容器和瞄准镜 [FastAPI integration](https://github.com/modern-python/modern-di-fastapi).
- [Wireup](https://github.com/maldoinc/wireup) - FastAPI 中零运行時程的輸入依賴; 共享依賴於網路、 cli 或其他介面 。

### 發展者工具

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - 從 OpenAPI 檔案建立 FastAPI 應用程式, 允許以 chema 驅動發展 。
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - 從 OpenAPI 區域產生一個 mypy- and IDE 方便的 API 用戶端 。
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - FastAPI的相伴圖書館旨在將Ruby在 Rails, Ember.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 製作高质量 FastAPI 製作準備 API 的發展者生产力工具 。
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - FastAPI 的 Joerick/ Pyincument 中端軟件來檢查您的服務性能 。
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - API版本.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - 將您的 Jupyter 筆記本做為 RESTFL API 的端點 。
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - 產生和管理 FastAPI 專案的 CLI 工具 。
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - 自動 [MessagePack](https://msgpack.org/) 內容談判。
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - 事件指定架构框架, 包含 CQRS, 交易寄存器, Saga 編號, 無缝 FastAPI/ FastStream 集成 。

### 電子郵件

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - 發送電子郵件及附件( 個人及批量) 的輕量级郵件系統 。

### 工具

- [Apitally](https://github.com/apitally/apitally-py) - API 分析, 監控, 並要求登入 FastAPI 。
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - 要求身份記錄中間軟件 。
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - 簡單的輕量级缓存系統
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - 用于缓存 FastAPI 應答與函數結果的工具, 支援 Redis, Memcached, DynamotB 以及內部後端 。
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - 將變色龍樣本語言集成到 FastAPI 中 。
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) FastAPI 集成 。
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - 觀察套用具: pagination, 认证中間軟件, 權限, 自訂例外處理器, MongoDB 支援, 以及 Opentracting 中間軟件 。
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - 強健的Aync CRUD操作和灵活的端點建立工具。
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPI 和 Starlette 的同步事件傳送/處理文庫 。
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI 的功能旗號簡單的執行 。
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - 使用 FastAPI 在路由處理器外的依賴注入, 使用 CLI 工具、背景工作、 工人等 。
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - 將 Jinja 樣本語言整合到 FastAPI 中 。
- [FastAPI Lazy](https://github.com/yezz123/fastango) - 用 FastAPI 啟動您的專案的懶惰套件 。
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI 的要求速率限制程式 。
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - 設計/ 建築 API 的文庫, 使用基于元件的架构、 內建的查詢 paginator、 排序器、 django- admin 等 。
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTT 协议的延伸 。
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI 開啟追蹤中端軟件與資料庫追蹤支援 。
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPI 的插座 。
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redis 和排程插件 。
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - 建立 API 服務的產生器 。
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 通用 FastAPI 文庫, 用于寫入任何能懶惰依賴性注入的通用端點裝飾器 。
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPI 和 SocketIO 的簡單整合 。
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 重用公用程式: 基于類別的檢視、 反應推測路由器、 周期性工作、 定時中間軟件、 SQLAlchemy 會議、 OpenAPI spec簡化 。
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - 決哥雷斯特 FastAPI 框架啟動的 ViewSets, 啟動類型的 CRUD 端點組織自動路由登記 。
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - 經典的酒吧/子公司模式讓網絡上和你的雲面上可以实时地使用,
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - 在Websockets上,
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - 圖書室提供 FastAPI 網絡框架的自動和手動工具, 用此框架的應用程式所服務的 http 測試 。
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Prerender的星座中間軟件
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - 您的 FastAPI 應用程式的可配置和模擬Prometheus 仪器器 。
- [SlowApi](https://github.com/laurents/slowapi) - 速率限制器( 基于 [Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - 允許您在您的專案的任何地方儲存並存取此要求的資料, 對登入有用 。
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - FastAPI和Starlette再集成一次波爾提斯
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - 開啟Starlette 和 FastAPI 的支援 。
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPI和Starlette的普羅米修斯集成.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - 基于數據類別的 Python GraphQL 文庫 。
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  將 pydantic 等級轉換成一個強大的 composable 計算容器 , 引入 解析度 和 後处理 的勾結 。

## 資源

### 官方資源

- [Documentation](https://fastapi.tiangolo.com/) - 全面文件。
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - 官方教訓您如何使用 FastAPI 及其大部分功能, 一步一步地 。
- [Source Code](https://github.com/fastapi/fastapi) - 主持于GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - 和其他 FastAPI 使用者聊天 。

### 外部資源

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - 許多FastAPI專題文章,

### 播客

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - 此集 [Podcast Init](https://www.pythonpodcast.com/) FastAPI的創作人,[Sebastián Ramirez](https://tiangolo.com/) 分享他建立FastAPI的動機,
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - 這項工程的概述不錯

### 文章

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - 仔細看看為什麼你可能想要從弗拉斯克移到FastAPI.

### 教學

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - 學著同步使用 SQLAlchemy 。
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - 使用 Test- Driven 开发並測試 FastAPI、 Postgres、 Pytest 和 Docker 同步 API 。
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - 學用 FastAPI 與 Flask 的邊緣代碼比對 。
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - 分析並修復SQLAlchemy長期會議,
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI 應用程式及服務結構, 以建立更可維持的代碼基.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - 以完整的 FastAPI 網頁應用套件開始 。
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - 學習如何讓 FastAPI 應用程式備妥多租戶 。
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - 學習如何從 FastAPI 直接流出資料到实时圖表 。
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - 使用有系統的Gunicorn來進行生产部署.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - 使用 FastAPI 在 Python 中快速便捷地部署並服務機械學習模型, 作為 RESTful API 。
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - 學習如何服務影片流。
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - 套用以屬性为基础的測試到 FastAPI 。

### 談話

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - 從塞巴斯蒂安·拉米雷斯(Sebastian Ramirez)的談話中, 你將學會如何輕鬆地為您使用 FastAPI 的 ML 模型建立一個製作準備的網絡(JSON) API, 包括預設的最佳做法。
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - 使用 FastAPI 建立簡單的 REST API 資料庫 。

### 影片

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - 一個用 FastAPI 建立網路股票顯示器, 你會被介紹到 FastAPI 的很多功能, 包括 Pydantic 模型、 依赖性注入、背景工作、 SQLAlchemy 集成 。
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - 使用 FastAPI 建立網路應用程式程式介面( RESTful API) 。
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - 看看如何用 FastAPI 做數字驗證 。
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - 2020年, 哪一种用Aync/await最好的? 哪一個最快?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - 用 FastAPI 建一個學 API 的機器 。

### 课程

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - 用 Python 、 FastAPI 、 Docker 來學習如何建立、 測試及部署文字總結微服務 。
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - 旨在讓您與 FastAPI 在雲中快速建立新的 API 的課程 。
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - 你會學會用 FastAPI 建立完整的網絡應用程式, 相当于你對 Flask 或 Django 能做的。
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - 學習如何在 FastAPI 應用程式中加入 Celery 以提供同步的工作處理 。

### 最佳做法

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - 在 GitHub repo 中收集最佳做法。
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - 混合FastAPI, diska, 快流, sqlalchemy, pydantic.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - 使用 FastAPI 建立清潔建築後端範例 。

## 託管

### PaaS

（平台即服務）

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)([tutorial](https://fly.io/docs/python/frameworks/fastapi/),[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)([Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/),[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

（基礎架構即服務）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### 沒有伺服器

框架：

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - 用 AWS Lambda 和 API Gateway 操作 ASGI 應用程式的适配器 。
- [Vercel](https://vercel.com/) - (前宰特) ([example](https://github.com/Snailedlt/Markdown-Videos)).

運算服務：

- [AWS Lambda](https://aws.amazon.com/lambda/)([example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)([example](https://github.com/anthonycorletti/cloudrun-fastapi))

## 專案

### 起始範本

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - 完整堆疊 FastAPI 樣本
,其中包括 FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, 自動HTTPS, 以及更多(由 FastAPI 的創作人开发),[Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - 網路APIs w/ FastAPI (作为網絡框架) 和 Ortoise-ORM (無頭痛地經過數據庫工作) 的強大但簡單的樣本 。
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - 使用依赖性注射( modern- di) 、 Alembic 移動以及 justfile 工作流程的嵌入式啟動器 。
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton應用程式可以供應機器學習模型的製作
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - 用 FastAPI 快速部署 SparCy 模型 。
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - FastAPI 專案的 Cookiecutter 樣本, 使用: 機器學習、詩歌、 Azure管道與 pytest 。
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - 從 OpenAPI 產生現代 FastAPI Python 客戶端( 通过 FastAPI ) 。
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) FastAPI應用程式
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Python 中高性能的 REST API 樣本 FastAPI + GINO + Arq + Uvicorn (w/ Redis and PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - 使用 FastAPI 、 TypeScript 、 Docker、 PostgreSQL 和 React 的全堆餅乾
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - 簡單的 FastAPI 樣本, 带有工廠樣式架构 。
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 灵活、輕巧的 FastAPI 專案產生器 。 包括支持SQLAlchemy、多個數據庫、CI/CD、Docker和Kubernetes。
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - 包括FastAPI、SQLModel、Google Cloud Run等。
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - 由FastAPI及Google Cloud Firestore提供。
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - 這是一個專案樣本, 用 FastAPI, Alembic, 以及 Aync SQLModel 做為 ORM 。
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - 專案樣本使用 FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI 。
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - 完整堆栈、 現代網絡應用程式產生器, 包括 FastAPI、 MongoDB、 Docker、 Celery、 React 前端、 自動 HTTPS 等 。
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - 啟動 FastAPI 應用程式的 Cookiecutter 專案樣本 。 在 Kubernetes 上的 Uvicorn ASGI 伺服器中執行 。 支援AMD64和ARM64 CPU架构.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - DDD 分層樣本, 一般的基級會提供沒有锅爐板的 Aync CRUD, 域名在發現時自行登記,

### 嵌入式影像

- [inboard](https://github.com/br3ndonland/inboard) - Docker 影像來為 FastAPI 應用程式提供電源, 並幫助您更快的運送 。
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - 由 Gunicorn 管理, 用于 Python 3. 7 和 3. 6 的高性能 FastAPI 網絡應用程式,
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - 使用 Uvicorn 工人來運行 Python 網絡應用程式。 使用詩歌管理依賴和建立虛擬環境。 支援AMD64和ARM64 CPU架构.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - 在 Kubernetes 上執行 Python 網頁應用程式的 Uvicorn ASGI 伺服器 Docker 影像 。 使用詩歌管理依賴和建立虛擬環境。 支援AMD64和ARM64 CPU架构.

### 開源專案

- [Astrobase](https://github.com/anthonycorletti/astrobase) - 簡單,快速,安全的部署任何地方。
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - 整理使用 FastAPI 的專案清單 。
- [Bitcart](https://github.com/bitcart/bitcart) - 供商家、使用者和開發商使用的平台,
- [Bali](https://github.com/bali-framework/bali) - FastAPI和gRPC上的雲原微服務發展基地简化.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - 由 FastAPI 、 React+RxJs 、 Neo4j 、 PostgreSQL 和 Redis 建立的小社交網路。
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 全球冠狀病毒(COVID-19,SARS-CoV-2)疫情的API。
- [Dispatch](https://github.com/Netflix/dispatch) - 管理安全事件。
- FastAPI CRUD 示例 :
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - 透過 OpenTeleometter 和 OpenMetrics 觀察 FastAPI 應用程式: Traces (Tempo), Metrics (Prometheus), Grafana上的logs (Loki) 。
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket"廣播"演示。
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - 使用 FastAPI 與 RabbitMQ 的 Celery 做工作排隊、 Redis 做 Celery 后端、 Flower 做 Celery 工作的監控。
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - 提供WebSockets、SSE、召回、秘密訊息等。
- [JeffQL](https://github.com/yezz123/JeffQL/) - 使用 GraphQL 和 JWT 簡單的認證與登入 API 。
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - 基于 FastAPI 的 JSON- RPC 伺服器 。
- [Mailer](https://github.com/rclement/mailer) - 死信者微信服務,
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API 產生縮圖以嵌入您的標記下內容 。
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - 和尼莫一起工作
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - 在 Open- Policy 上面的实时授權更新; 使用 FastAPI, Typer, 和 FastAPI WebSocket pub/ sub 建立 。
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - 提供中端軟件、 HTTP 事件追蹤、 AWS Lambda 集成、 試驗工具、 以及 Type  Safe、 Pydantic 與資料類別的自動轉換等功能的型態安全 FastAPI 包裝程式 。
- [Polar](https://github.com/polarsource/polar) - 由 FastAPI 、 SQLAlchemy 、 Alembic 和 Arq 搭建,
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - 使用 Websockets、 Asyncio 和 FastAPI/ Starlette 的簡單 Redis Streams 支援聊天應用程式 。
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - 使用 Cellular Automata 產生您的個人 8 位變形器 。
- [Slackers](https://github.com/uhavin/slackers) - Slack webhokes API. 网易网.
- [TermPair](https://github.com/cs01/termpair) - 用端到端加密從您的瀏覽器檢視及控制终端 。
- [Universities](https://github.com/ycd/universities) - API服務,

## 贊助者

請檢查我們的贊助者,

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
