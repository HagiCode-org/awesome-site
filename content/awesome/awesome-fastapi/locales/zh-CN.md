<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> 与FastAPI有关的 令人惊叹的东西列表

[FastAPI](https://fastapi.tiangolo.com/) 是一种现代的高性能,电池包含的Python网络框架,是构建RESTful API的完美框架.

## 目录

- [第三方扩展](#third-party-extensions)
  - [管理](#admin)
  - [身份验证](#auth)
  - [网络安全](#cybersecurity)
  - [数据库](#databases)
  - [依赖性注射](#dependency-injection)
  - [开发者工具](#developer-tools)
  - [电子邮件](#email)
  - [工具](#utils)
- [资源](#resources)
  - [官方资源](#official-resources)
  - [外部资源](#external-resources)
  - [播音员](#podcasts)
  - [文章](#articles)
  - [教学](#tutorials)
  - [会谈](#talks)
  - [视频](#videos)
  - [课程](#courses)
  - [最佳做法](#best-practices)
- [托管](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [无服务器](#serverless)
- [项目](#projects)
  - [起始模板](#boilerplate)
  - [多克图像](#docker-images)
  - [开源项目](#open-source-projects)
- [赞助者](#sponsors)

## 第三方扩展

### 管理

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - FastAPI(同时也是Flask和Django)的易用管理员仪表板,灵感来自Django Admin.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - 功能管理面板,为您在数据上执行 CRUD 操作提供用户界面. 目前只与龟兹ORM合作.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 高性能、高效和易于扩展的FastAPI管理框架。
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - 一个强大的现代管理图形界面,使用Piccolo ORM.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - 与 SQLAlchemy 模型合作的 FastAPI/Starlette 的管理面板.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - FastAPI/Starlette的管理框架,支持SQLAlchemy,SQLModel,MongoDB和ODMantic.


### 身份验证

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI的自定义认证和Oauth2管理.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - 支持 OAuth2 密码流并带有 JWT 访问和刷新令牌的插件 。
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - 您的 API 的 Azure AD 认证, 包含 单租户和多租户支持 。
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - 授权通过Casbin支持RBAC,ReBAC和ABAC等各种访问控制模型.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPI和云认证服务的简单整合(AWS Cognitto, Auth0, Firebase认证).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - 账户管理和认证(基于 [Flask-Login](https://github.com/maxcountryman/flask-login)) (中文(简体) ).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT 认证(基于 [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)) (中文(简体) ).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 行级权限.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - 在 FastAPI 中作为依赖执行认证和授权 。
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - 通过路径操作可以管理箱外API密钥安全.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - 账户管理,认证,授权.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - OAuth2 使用 IAM 平台 [Zitadel](https://github.com/zitadel/zitadel)。 。 。 。

### 网络安全

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - 速率限制,自动禁止IP,穿透攻击检测,白名单/黑名单(国家,IP,云提供商),用户代理过滤,地理定位,Redis集成以达到持久性,等等.
- [secure](https://github.com/TypeError/secure) - 使用 ASGI 中间软件和一个单一配置对象,在 FastAPI apps 中一致定义并应用 HTTP 安全头.

### 数据库

#### 其他资源

- [Edgy ORM](https://github.com/dymmond/edgy) - 复杂的数据库变得简单。
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPI 和 FastAPI 之间的简单集成 [SQLAlchemy](https://www.sqlalchemy.org/)。 。 。 。
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - 用于FastAPI的SQLAlchemy扩展,支持pagination,asyncio,和pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - 基于 REST API 创建的简单方法 [PeeWee](https://github.com/coleifer/peewee) 模特儿们
- [FastSQLA](https://github.com/hadrien/FastSQLA) - Async SQLAlchemy 2.0+ 扩展,用于SQLModel支持的FastAPI,内置 pagination & more.
- [GINO](https://github.com/python-gino/gino) - 在SQLAlchemy核心顶部为Python Asyncio建造的轻量级同步ORM.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - 一个Aync ORM.
- [ormar](https://collerek.github.io/ormar/) - Ormar是Async ORM,它使用Pydantic验证,可以直接用于FastAPI请求和响应中,因此你只剩下一组模型需要维护. 包括阿伦比奇移民。
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - 与 Orma 一起使用 FastAPI 。
- [Piccolo](https://github.com/piccolo-orm/piccolo) - 一个ASync ORM和查询构建器,支持Postgres和SQLite,带有电池(迁移,安全等).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - 与皮科洛一起使用FastAPI.
- [Tortoise ORM](https://tortoise.github.io) - 由Django启发的易于使用的 Ayncio ORM(对象关系地图).
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - 神龟-ORM FastAPI整合的例子.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - 神龟ORM迁移工具.
- [Saffier ORM](https://github.com/tarsil/saffier) - 这是你唯一需要的Python ORM
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel(由Pydantic和SQLAlchemy提供动力)是一个库,用于与来自Python代码的SQL数据库交互,带有Python对象.

#### 查询构建器

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - 一个包裹周围 [asyncpg](https://github.com/MagicStack/asyncpg) 用于与 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)。 。 。 。
- [Databases](https://github.com/encode/databases) - Async SQL 查询构建器, 工作在顶端 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) 表达语言。
- [PyPika](https://github.com/kayak/pypika) - 一个SQL查询构建器,揭示了SQL语言的完全丰富.

#### 组织管理单元

- [Beanie](https://github.com/BeanieODM/beanie) - 基于 [Motor](https://motor.readthedocs.io/en/stable/) 和 [Pydantic](https://pydantic.dev/docs/),支持从框中移出数据和计划。
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - 一个文档-对象映射器( Think ORM,但用于文档数据库),用于与来自Python的MongoDB合作.
- [Motor](https://motor.readthedocs.io/) - MongoDB 同步 Python 驱动程序 。
- [ODMantic](https://art049.github.io/odmantic/) - Asyncio MongoDB ODM 已整合到 [Pydantic](https://pydantic.dev/docs/)。 。 。 。
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - 亚马逊DynamoDB的pythonic接口.

#### 其他工具

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - 将 SQLAlchemy 模型转换为 [Pydantic](https://pydantic.dev/docs/) 模特儿们
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - 使用 CamelCase JSON 支持 FastAPI [Pydantic](https://pydantic.dev/docs/)。 。 。 。
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - 续集作者的配套博客文章.
 
### 依赖性注射

- [modern-di](https://github.com/modern-python/modern-di) - 配有IoC容器和瞄准镜的依赖性注射框架 [FastAPI integration](https://github.com/modern-python/modern-di-fastapi)。 。 。 。
- [Wireup](https://github.com/maldoinc/wireup) - FastAPI中零运行时间接运行的注入依赖; 共享网络, cli 或其他界面的依赖.

### 开发者工具

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - 从 OpenAPI 文件创建 FastAPI 应用程序, 允许 schema 驱动开发 。
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - 从 OpenAPI 光谱生成一个 mypy- and IDE 方便的 API 客户端 。
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - FastAPI的配套图书馆旨在将Ruby在Rails,Ember.js或Sails.js上的开发生产力带到FastAPI生态系统.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 用于制作高质量FastAPI生产准备API的开发者生产力工具.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - 一个快速API的Joerick/pyincument的中间软件来检查您的服务性能.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - API版本化.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - 运行您的 Jupyter 笔记本作为 RESTful API 端点。
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - 用于生成和管理FastAPI项目的CLI工具.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - 自动 [MessagePack](https://msgpack.org/) 内容谈判。
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - 事件驱动架构框架与CQRS,Text Outbox,Saga 协奏曲,无缝FastAPI/FastStream集成.

### 电子邮件

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - 发送电子邮件和附件(个人和批量)的轻量级邮件系统。

### 工具

- [Apitally](https://github.com/apitally/apitally-py) - API分析,监控,并请求登录FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - 请求身份记录中间软件 。
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - 一个简单的轻量级缓存系统.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - 一个缓存FastAPI响应和函数结果的工具,支持Redis,Memcached,DynamoDB以及内幕后端.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - 将变色龙模板语言的集成加入FastAPI.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) FastAPI的集成.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - 有观点的一套公用设备:页码、认证中间软件、权限、自定义例外处理器、MongoDB支持和OpenTracing中间软件。
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)——稳健的Aync CRUD业务和灵活的端点创建公用事业.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPI 和 Starlette 的同步事件调度/处理库 。
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI的特性旗的简单执行.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - 在CLI工具,背景任务,工人等方面使用FastAPI的依赖性在路由处理器外注入.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - 将Jinja模板语言的集成加入FastAPI.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - 用 FastAPI 启动您的项目的懒惰包 。
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI的请求速率限制器.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - 一个使用基于组件的架构来设计/构建 API 的库, 内置查询 paginator, 排序器, django- admin 喜欢过滤器 & 更多 。
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTT协议的扩展名 。
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI的OpenTracing中件和数据库跟踪支持.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPI的插图 。
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redis和调度插件.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - 创建 API 服务的生成器 。
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 通用 FastAPI 库,用于写入任何能够懒惰依赖注入的通用端点装饰器.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPI和SocketIO的简单集成.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 可重复使用的效用:基于类视图,响应推断路由器,周期性任务,计时中间软件,SQLAlchemy会话,OpenAPI光谱简化.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - 贾戈·雷斯特 FastAPI框架启发的ViewSets,允许基于类的CRUD端点组织,自动进行路由注册.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - 经典的酒吧/子公司模式使得网络上和云层上可以实时访问和扩展。
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - 在Websockets上,RPC(双向JSON RPC)使生产变得容易、有力和准备就绪。
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - 图书馆提供FastAPI网络框架的自动和人工仪表,使用框架的应用程序所满足的http请求仪表.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Prerender的星座中间软件。
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - 用于 FastAPI 应用程序的可配置和模块化的Prometheus 仪器器.
- [SlowApi](https://github.com/laurents/slowapi) - 限速器(基于 [Flask-Limiter](https://flask-limiter.readthedocs.io)) (中文(简体) ).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - 允许您存储并访问项目中任何位置的请求数据, 用于日志 。
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - 为FastAPI和Starlette再加一个Paletheus集成.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - 开放跟踪支持Starlette和FastAPI.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPI和Starlette的普罗米修斯集成.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - 基于数据类的 Python GraphQL 库.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  将pydantic类通过引入分辨率和过程后悬钩,变成一个强大的可堆叠计算容器.

## 资源

### 官方资源

- [Documentation](https://fastapi.tiangolo.com/) - 综合文件。
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - 官方教程介绍您如何使用 FastAPI 及其大部分特性, 一步一步地.
- [Source Code](https://github.com/fastapi/fastapi) - 主办于GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - 与其他 FastAPI 用户聊天.

### 外部资源

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - 多篇FastAPI特有文章,侧重于开发和测试生产准备的RESTFLAPI,服务于机器学习模型,等等.

### 播音员

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - 在这集里 [Podcast Init](https://www.pythonpodcast.com/) FastAPI的创造者,[Sebastián Ramirez](https://tiangolo.com/) 分享他建立FastAPI的动机 以及引擎盖下的工作方式
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - 不错的项目概况。

### 文章

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - 深入审视你可能想要从弗拉斯克移动到FastAPI的原因.

### 教学

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - 学会同步使用 SQLAlchemy 。
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - 与FastAPI,Postgres,Pytest,以及使用Test-Driven开发的Docker一起开发并测试一个同步的API.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - 学习 FastAPI 与 Flask 的边码比较.
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - 诊断并修复长期运行的SQLAlchemy会话和连接池在生产中的耗尽.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI应用程序和服务结构,用于更可维护的代码库.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - 以完整的 FastAPI 网络应用程序堆栈开始 。
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - 学习如何让 FastAPI 应用程序多租户准备就绪.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - 学习如何从FastAPI直接将数据流到实时图表中.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - 使用具有生产部署系统的Gunicorn.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - 使用FastAPI作为RESTful API在Python中快速方便地部署并服务机器学习模型.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - 学习如何服务视频流.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - 应用基于属性的测试到 FastAPI 。

### 会谈

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - 从塞巴斯蒂安·拉米雷斯(Sebastian Ramirez)的演讲中,你将学会如何为你的ML模型和FastAPI轻松构建一个制作准备的网络(JSON)API,包括默认的最佳做法.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - 这段谈话展示了如何用FastAPI从地面开始为数据库构建一个简单的REST API.

### 视频

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - 一个您用 FastAPI 构建一个基于网络的股票屏幕,您将被引入 FastAPI 的许多功能,包括 Pydantic 模型,依赖性注入,背景任务,以及 SQLAlchemy 集成.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - 使用FastAPI来构建网络应用程序编程接口(RESTful API).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - 参见如何与 FastAPI 进行数字验证.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - 2020年Python的最佳框架是什么? 哪个用Aync/await最好? 哪一个最快?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - 与 FastAPI 一起构建机器学习API.

### 课程

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - 与Python,FastAPI,和Docker一起学习如何构建,测试,并部署文本汇总微服务.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - 旨在让您与 FastAPI 在云中快速创建新的 API 的课程 。
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - 你会学会用FastAPI来构建完整的网络应用,相当于你对弗拉斯克或Django所能做的.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - 学习如何在FastAPI应用程序中添加Celery,以提供同步的任务处理.

### 最佳做法

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - 在GitHub repo中收集最佳做法。
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - 结合了FastAPI,dishka,快流,sqlalchemy,pydantic. 中国植物物种信息数据库.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - 使用 FastAPI 创建的 Clean Architecture 后端示例 。

## 托管

### PaaS

（平台即服务）

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)(单位:千美元)[tutorial](https://fly.io/docs/python/frameworks/fastapi/), (中文).[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi) 页:1
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)(单位:千美元)[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/), (中文).[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/) 页:1
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

（基础设施即服务）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### 无服务器

框架：

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - 用于运行AWS Lambda和API Gateway的ASGI应用程序的适配器.
- [Vercel](https://vercel.com/) - (原为泽特语).[example](https://github.com/Snailedlt/Markdown-Videos)) (中文(简体) ).

计算服务：

- [AWS Lambda](https://aws.amazon.com/lambda/)(单位:千美元)[example](https://github.com/iwpnd/fastapi-aws-lambda-example) 页:1
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)(单位:千美元)[example](https://github.com/anthonycorletti/cloudrun-fastapi) 页:1

## 项目

### 起始模板

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - 完整的 Stack FastAPI 模板
,包括FastAPI,React,SQLModel,PostgreSQL,Docker,GitHub Actions,自动HTTPS,以及更多(由FastAPI的创建者开发),[Sebastián Ramírez](https://github.com/tiangolo)) (中文(简体) ).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - 强大的但简单的模板,用于网页APIs w/ FastAPI(作为网页框架)和Ortoise-ORM(用于通过数据库工作而不会头痛).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - 以依赖性注射(modern-di),阿伦比克迁移(Alembic migration),以及一个 justfile工作流程为起始器.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton应用为机器学习模型服务 生产准备。
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - 与FastAPI一起快速部署spanCy模型.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - FastAPI项目的Cookiecutter模板使用:机器学习,诗歌,Azure管道和pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - 从OpenAPI生成现代FastAPI Python客户端(通过FastAPI).
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) FastAPI应用的脚手架生成器.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - 一个高性能的Aync REST API的模板,在Python中. fastAPI + GINO + Arq + Uvicorn (w/Redis和PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - 使用 FastAPI, TypeScript, Docker, PostgreSQL 和 React 的全堆饼干切锅炉板.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - 带有工厂图案架构的简单FastAPI模板.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 灵活,轻量级的FastAPI项目生成器. 它包括对SQLAlchemy,多个数据库,CI/CD,Docker,和Kubernetes的支持.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - Boilerplate为API大楼配有FastAPI,SQLModel,以及Google Cloud Run.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - Boilerplate for API building with FastAPI 和 Google Cloud Firestore (英语:Google Cloud Firestore) 为API大楼配音.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - 这是一个项目模板,它使用 FastAPI, Alembic 和 Async SQLModel 作为 ORM 。
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - 一个使用 FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI 的项目模板 。
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - 全堆,现代网络应用生成器,包括FastAPI,MongoDB,Docker,Celery,React前端,自动HTTPS等.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Cookiecutter 启动 FastAPI 应用程序的项目模板 。 在Kubernetes上使用Uvicorn ASGI服务器运行在多克容器中. 支持AMD64和ARM64CPU架构.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - DDD 分层模板,其中通用基类给出无锅炉板的Aync CRUD,域名在发现时自行注册,承诺前钩子在承诺时阻断跨层导入.

### 多克图像

- [inboard](https://github.com/br3ndonland/inboard) - Docker图像为您的 FastAPI 应用提供动力, 并帮助您更快的飞船.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Docker图像与Uvicorn由Gunicorn管理,用于Python 3.7和3.6的高性能FastAPI网络应用,并带有性能自动调试.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - 使用Uvicorn工人运行Python网络应用程序的Gunicorn的Docker图像. 利用诗歌管理依附关系,建立虚拟环境. 支持AMD64和ARM64CPU架构.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - 在Kubernetes上运行Python网络应用程序时,带有Uvicorn ASGI服务器的Docker图像. 利用诗歌管理依附关系,建立虚拟环境. 支持AMD64和ARM64CPU架构.

### 开源项目

- [Astrobase](https://github.com/anthonycorletti/astrobase) - 简单,快速,安全的部署任何地方。
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - 组织使用FastAPI的项目列表.
- [Bitcart](https://github.com/bitcart/bitcart) - 面向商人、用户和开发商的平台,提供方便的设置和使用。
- [Bali](https://github.com/bali-framework/bali) - 简化FastAPI和gRPC上的云原微服务开发基地.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - 与FastAPI,React+RxJs,Neo4j,PostgreSQL,和Redis一起建设的小型社交网络.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 用于跟踪全球冠状病毒(COVID-19,SARS-CoV-2)爆发的API.
- [Dispatch](https://github.com/Netflix/dispatch) - 管理安全事件。
- FastAPI CRUD 示例 :
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - 央视FastAPI应用可观察性三根支柱: Traces (Tempo), Metrics (Prometheus), Logs (Loki) on Grafana 通过OpenTeleometry和OpenMetrics.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket"广播"演示.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - 最小的例子使用 FastAPI 和 Celery 与 RabbitMQ 用于任务队列, Redis 用于 Celery 后端, Flower 用于监视 Celery 任务.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - 一个REST和GraphQL游乐场以最佳做法建造,提供WebSockets,SSE,回调,秘密消息等等.
- [JeffQL](https://github.com/yezz123/JeffQL/) - 使用 GraphQL 和 JWT 的简单认证和登录 API 。
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - 基于FastAPI的JSON-RPC服务器.
- [Mailer](https://github.com/rclement/mailer) - 死便邮递员微信服务为静态网站服务.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - API 用于生成缩略图以嵌入您的标记下的内容 。
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - 和尼莫一起生产
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - 在 Open-Policy 顶部实时授权更新;使用 FastAPI, Typer, 和 FastAPI WebSocket pub/sub 构建.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - 提供中间软件的Type-safe FastAPI包装器,HTTP事件跟踪,AWS Lambda集成,测试公用事业,以及Type Safe,Pydantic,和数据类之间的自动转换.
- [Polar](https://github.com/polarsource/polar) - 一个面向开发者的资金和货币化平台,由FastAPI,SQLAlchemy,阿伦比克和Arq共同建造.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - 一个简单的 Redis Streams 备份聊天应用程序,使用 Websockets, Asyncio 和 FastAPI/Starlette .
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - 使用 Cellular Automata 生成个人 8 位的变形器 。
- [Slackers](https://github.com/uhavin/slackers) - Slack webhokes API. (原始内容存档于2018-09-29).
- [TermPair](https://github.com/cs01/termpair) - 用端到端加密从浏览器查看并控制终端.
- [Universities](https://github.com/ycd/universities) - API服务,获取全球+9600大学信息.

## 赞助者

请通过检查赞助商来支持这个开源项目:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
