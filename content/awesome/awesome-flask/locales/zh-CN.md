# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> 用于Python及其周围扩展生态系统的微网框架.

本列表的教学,谈话,视频都是免费的. 付费课程不予接受。

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## 目录

- [官方资源](#official-resources)
- [扩展](#extensions)
  - [管理](#admin)
  - [APIs 图像](#apis)
  - [身份验证](#auth)
  - [快递](#cache)
  - [数据库](#databases)
  - [开发者工具](#developer-tools)
  - [电子邮件](#email)
  - [形式和验证](#forms-and-validation)
  - [全文搜索](#full-text-search)
  - [警卫](#security)
  - [任务队列](#task-queues)
  - [工具](#utils)
- [资源](#resources)
  - [社区](#community)
  - [教学](#tutorials)
  - [书籍](#books)
  - [会谈](#talks)
  - [视频](#videos)
- [项目](#projects)
  - [起始模板](#boilerplates)
  - [开源项目](#open-source-projects)
- [托管](#hosting)

## 官方资源

- [Flask](https://flask.palletsprojects.com/) - 现有和以往版本的正式文件。
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - 建立小博客的官方辅导.
- [Source Code](https://github.com/pallets/flask) - 弗拉斯克本身,由帕莱茨主持.
- [Pallets-Eco](https://github.com/pallets-eco) - 在核心项目旁边维持社区扩展。
- [Quart](https://github.com/pallets/quart) - 弗拉斯克的官方ASGI对应,具有兼容的API.

## 扩展

### 管理

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - 用于管理应用程序数据的可扩展管理接口。

### APIs 图像

- [APIFlask](https://github.com/apiflask/apiflask) - Flask web API框架带有棉花糖验证和OpenAPI生成.
- [Connexion](https://github.com/spec-first/connexion) - Spec-First OpenAPI框架可以运行于弗拉斯克.
- [Eve](https://github.com/pyeve/eve) - REST API框架由弗拉斯克和蒙戈DB提供动力.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI和Swagger UI用于弗拉斯克视图.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - 弗拉斯克,棉花糖,和OpenAPI合并为REST服务.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - 轻量级助推器用于构建REST API.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - 带有斯瓦格文件的弗拉斯克-RESTPlus社区叉.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - 具有自动OpenAPI的Marshmallow-first REST框架.

### 身份验证

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2 和 OpenID 连接客户端和服务器.
- [Authomatic](https://github.com/authomatic/authomatic) - 框架不可知 OAuth 和 OpenID 客户端.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - GitHub和Google等内置供应商的OAuth消费者.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - 基本、文摘和路由符号认证。
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - JWT认证带有刷新符和精细的债权.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - 基于会话的用户登录管理.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - JWT认证和基于角色的API授权.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - 由Rails Pundit启发的政策授权.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - 账户管理、认证和授权。 继续Flask -安全Too。
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Flask 的服务器侧会话 。
- [Flask-User](https://github.com/lingthio/Flask-User) - 自定义用户注册、登录和账户管理。

### 快递

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - 有多个后端的缓存支持 。

### 数据库

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - 阿伦比克迁移连接到弗拉斯克-SQLAlchemy数据库.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - 弗拉斯克-SQLAlchemy通过阿伦比克的数据库迁移.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - 蒙戈Engine与WTForms支持的融合.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - 为蒙戈DB的Pymongo整合.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - 弗拉斯克的SQLAlchemy集成.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy配有寄存器,阿伦比克辅助器,以及一党的弗拉斯克扩展.

### 开发者工具

- [Elastic APM](https://github.com/elastic/apm-agent-python) - 弗拉斯克的应用性能监测.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - 浏览器调试工具栏,从Django移植.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Flask服务自动性能监测.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Flask 应用程序的单位测试助手 。
- [Mixer](https://github.com/klen/mixer) - SQLAlchemy和Django模型的物体工厂.
- [nplusone](https://github.com/jmcarp/nplusone) - 使用 Flask-SQLAlchemy 时检测到 N+1 查询 。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - 追踪和测量仪器,包括弗拉斯克。
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Flask 应用的 Pyest 固定装置。
- [Sentry](https://github.com/getsentry/sentry-python) - 用 Flask 集成跟踪 SDK 出错 。

### 电子邮件

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP 为弗拉斯克发送邮件.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - 强戈港的邮件系统到弗拉斯克.

### 形式和验证

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - Marshmallow集成用于序列化和验证.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - 弗拉斯克视图的pydantic验证.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - WTForms与CSRF的集成,文件上传,以及reCAPTCHA.

### 全文搜索

- [flask-msearch](https://github.com/honmaple/flask-msearch) - 全文搜索弗拉斯克,得到霍霍什的支持.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - 在PostgreSQL上全文搜索SQLAlchemy模型.

### 警卫

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - 破解密码散开。
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - 跨欧林资源共享支持.
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - 限制弗拉斯克航线的速率.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - CSRF保护弗拉斯克.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS执行和安全头目。

### 任务队列

- [Celery](https://github.com/celery/celery) - 与 Flask 常用的分布式任务队列 。
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Celery 的快速替代品,带有 [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) 可用。
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Quee(RQ)为弗拉斯克语和夸特语集成.
- [Huey](https://github.com/coleifer/huey) - 小的 Redis 备份任务队列 。

### 工具

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Webasset 集成,用于捆绑和稀释静态文件.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - 通过Babel实现国际化和本地化.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - 在弗拉斯克模板中嵌入谷歌地图.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - 弗拉斯克的图形QL支持.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - HTML 微调用于 Flask 响应 。
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - JSON-RPC支持弗拉斯克.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - 在Jinja模板中提供日期的 Moment.js 帮助者.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - 给弗拉斯克的贴身助手
- [flask-s3](https://github.com/e-dard/flask-s3) - 服务弗拉斯克静态资产 从亚马逊S3。
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - 袜子。 Flask的IO整合.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - 冻结一个Flask应用程序进入静态网站.

## 资源

### 社区

- [Discord](https://discord.gg/pallets) - 托盘社区服务器. 使用弗拉斯克帮助频道.
- [Reddit](https://www.reddit.com/r/flask/) - 弗拉斯克潜伏。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - 标记的问题`flask`。 。 。 。

### 教学

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - 长形系列涵盖一个完整的弗拉斯克应用程序.
- [Discover Flask](https://github.com/realpython/discover-flask) - 由Real Python出品的全速喷雾系列.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Flask简介 测试驱动开发 和 JavaScript.

### 书籍

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - 关于弗拉斯克图案和项目结构的自由书.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - 由米格尔·格林伯格(Miguel Grinberg)所著的"奥赖利书",构建了一个真正的应用.

### 会谈

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - 阿敏·罗纳彻的图案
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - 肯尼斯·赖兹的演讲。
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - 在弗拉斯克应用 DDD 想法.

### 视频

- [PyVideo](https://pyvideo.org/search.html?q=flask) - 会议谈话标记为弗拉斯克。
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - 由Corey Schafer制作的全功能网络app系列.

## 项目

### 起始模板

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Cookiecutter 模板 带有 Bootstrap, Webpack, 和认证.
- [fbone](https://github.com/imwilsonxu/fbone) - 具有结构化应用布局的经典弗拉斯克骨架.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - 快速应用程序构建器 安全,汽车 CRUD,和图表。
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - 最佳做法启动程序。
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - 与uWSGI,Nginx,和弗拉斯克的多克图像.

### 开源项目

- [Apache Airflow](https://github.com/apache/airflow) - 平台到作者,调度,并监测工作流程.
- [Apache Superset](https://github.com/apache/superset) - 数据探索与可视化平台.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - 经典论坛软件与弗拉斯克一起建造.
- [Indico](https://github.com/indico/indico) - CERN开发的事件管理系统.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - 在线 Python 编辑器, 并使用实时语法检查 。
- [Redash](https://github.com/getredash/redash) - 查询和可视化来自许多来源的数据.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - 新闻发布室的举报人提交系统.
- [SimpleLogin](https://github.com/simple-login/app) - 保护个人收件箱的电子邮件化名服务.
- [SkyLines](https://github.com/skylines-project/skylines) - 用于滑翔的实时跟踪和飞行数据库.
- [Timesketch](https://github.com/google/timesketch) - 合作法证时限分析.

## 托管

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - WSGI服务器和平台上的官方注释.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - 在飞行机器上部署接近用户的火焰
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - 与弗拉斯克合作的集装箱托管。
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - 拥有一流的弗拉斯克支持的Python环境.
- [Render](https://render.com/docs/deploy-flask) - 弗拉斯克的网络服务和背景工作者.
- [Zappa](https://github.com/zappa/Zappa) - 向AWS Lambda和API Gateway部署WSGI应用程序.

## 捐款

欢迎提出建议。 请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 先说 历史和未保存的条目 [archived.md](archived.md)。 。 。 。
