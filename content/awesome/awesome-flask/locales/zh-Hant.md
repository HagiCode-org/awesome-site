# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Python 的微網面框架及其周圍的延伸生态系统。

這份名單上的教訓、談話和影片都是免費的。 付费课程不被接受。

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## 目錄

- [官方資源](#official-resources)
- [擴充功能](#extensions)
  - [管理](#admin)
  - [API( API )](#apis)
  - [身分驗證](#auth)
  - [快取](#cache)
  - [數據庫](#databases)
  - [發展者工具](#developer-tools)
  - [電子郵件](#email)
  - [形式和驗證](#forms-and-validation)
  - [全文搜索](#full-text-search)
  - [安全](#security)
  - [工作序列](#task-queues)
  - [工具](#utils)
- [資源](#resources)
  - [社區](#community)
  - [教學](#tutorials)
  - [书籍](#books)
  - [談話](#talks)
  - [影片](#videos)
- [專案](#projects)
  - [起始範本](#boilerplates)
  - [開源專案](#open-source-projects)
- [託管](#hosting)

## 官方資源

- [Flask](https://flask.palletsprojects.com/) - 目前和以往各版的正式文件。
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - 建立小部落格的官方教學。
- [Source Code](https://github.com/pallets/flask) - 弗拉斯克本身, 由小板。
- [Pallets-Eco](https://github.com/pallets-eco) - 在核心工程旁保持了社群延伸。
- [Quart](https://github.com/pallets/quart) - 弗拉斯克的官方ASGI對應器,有兼容的API.

## 擴充功能

### 管理

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - 管理應用程式資料的廣泛管理介面 。

### API( API )

- [APIFlask](https://github.com/apiflask/apiflask) - Flask web API 框架, 有棉花糖驗證和 OpenAPI 生成 。
- [Connexion](https://github.com/spec-first/connexion) - Spec- first OpenAPI 框架可以运行在弗拉斯克.
- [Eve](https://github.com/pyeve/eve) - REST API框架由弗拉斯克和蒙戈DB提供電源.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI 與 Swagger UI 供弗拉斯克檢視 。
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - 弗拉斯克 棉花糖 和OpenAPI 合并了REST服務.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - 建立 REST API 的輕量級助手 。
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - 有斯瓦格文件的弗拉斯克-RESTPlus的社區叉 。
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - 具有自動 OpenAPI 的 Marshmallow 第一 REST 框架 。

### 身分驗證

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2 和 OpenID 連接客戶端及伺服器 。
- [Authomatic](https://github.com/authomatic/authomatic) - 框架不可知 OAuth 和 OpenID 客戶端 。
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - 包括GitHub和Google等內建供應商,
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - 路由的基本、文摘和符號認證
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - JWT 憑空驗證和優雅的聲明
- [Flask-Login](https://github.com/maxcountryman/flask-login) - 基于會話的使用者登入管理 。
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - JWT 認證和基于角色的 API 授权 。
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - 由 Rails Pundit 啟發的政策性授權。
- [Flask-Security](https://github.com/pallets-eco/flask-security) - 帳戶管理、認證和授權 繼續Flask -security -Too。
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Flask 的伺服器端面會議 。
- [Flask-User](https://github.com/lingthio/Flask-User) - 自訂的使用者登入、登入和帳戶管理 。

### 快取

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - 用多個後端

### 數據庫

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Alembic 移入 Flask- SQLAlchemy 資料庫 。
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Flask-SQLAlchemy的數據庫移動
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - MongoEngine 整合與 WTForms 支援 。
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - MongoDB的Pymongo整合。
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - 弗拉斯克的 SQLAlchemy 集成
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy 配有寄存器、 Alembic 助手、 以及一黨的火焰延伸檔。

### 發展者工具

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Flask的應用程式性能監控
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - 從Django移動的瀏覽器除錯工具列。
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - 弗拉斯克服務的自動性能監控 。
- [Flask-Testing](https://github.com/jarus/flask-testing) - Flask 應用程式的單位測試助手 。
- [Mixer](https://github.com/klen/mixer) - SQLAlchemy和Django模型的物件工厂。
- [nplusone](https://github.com/jmcarp/nplusone) - 使用 Flask- SQLAlchemy 時偵測 N+1 查詢 。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - 追蹤和測量儀表 包括弗拉斯克
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - Flask 應用程式的 Pyest 定型程式 。
- [Sentry](https://github.com/getsentry/sentry-python) - 以 Flask 集成追蹤 SDK 出錯 。

### 電子郵件

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - SMTP 發送 Flask 的郵件 。
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - 強哥的寄信系統到弗拉斯克

### 形式和驗證

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - 用于序列化和驗證的棉花糖整合.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - Flask 檢視的 Pydantic 驗證 。
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - WTForms與CSRF整合,檔案上傳,以及reCAPTCHA.

### 全文搜索

- [flask-msearch](https://github.com/honmaple/flask-msearch) - 搜索弗拉斯克的完整文本,有Whoosh的支持.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - 在 PostgreSQL 上搜尋 SQLAlchemy 模型的全文 。

### 安全

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - 破解密碼散開
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - 跨奧里京資源共享(CORS)支持.
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - 限制弗拉斯克航線的速率 。
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - CSRF對弗拉斯克的保護
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS 执法和安全頭目。

### 工作序列

- [Celery](https://github.com/celery/celery) - 用 Flask 常用的分布式工作列 。
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - 快速替代 Celery , 與 [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) 可用。
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Quee( RQ) 整合 flask 和 Quart 。
- [Huey](https://github.com/coleifer/huey) - 小的 Redis 支援的工作排隊 。

### 工具

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - Webasset 集成, 用于捆绑和變更靜態檔案 。
- [Flask-Babel](https://github.com/python-babel/flask-babel) - 經過巴貝爾,
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - 在弗拉斯克模板中嵌入谷歌地圖 。
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Flask 的圖形QL 支援 。
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - 用于 Flask 反應的 HTML minific化 。
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - JSON -RPC支持弗拉斯克.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - 在 Jinja 樣本中約會的助推器 。
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - 弗拉斯克的插座助手
- [flask-s3](https://github.com/e-dard/flask-s3) - 提供亞馬遜S3的弗拉斯克靜態資產
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - 蘇克特 弗拉斯克的IO整合。
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - 將 Flask 應用程式固定在靜態網站中 。

## 資源

### 社區

- [Discord](https://discord.gg/pallets) - 集體伺服器 使用 Flask 幫助頻道 。
- [Reddit](https://www.reddit.com/r/flask/) - 弗拉斯克下沉。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - 被標記的問題`flask`.

### 教學

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Long-form系列, 包含一個完整的 Flask 應用程式 。
- [Discover Flask](https://github.com/realpython/discover-flask) - 真正的Python的Flask系列
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Flask的介紹, 試驗驱动的發展, 以及 JavaScript 。

### 书籍

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - 關於弗拉斯克模式和專案結構的自由書。
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - Miguel Grinberg的《奧萊利》書,

### 談話

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - 阿敏·羅納切爾的圖案
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - 肯尼斯·萊茲的談話
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - 在弗拉斯克应用 DDD 想法 。

### 影片

- [PyVideo](https://pyvideo.org/search.html?q=flask) - 談判標記了弗拉斯克
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Corey Schafer的全功能網絡應用程式系列。

## 專案

### 起始範本

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Cookiecutter 樣本, 上面有 Bootstrap, Webpack, 和認證 。
- [fbone](https://github.com/imwilsonxu/fbone) - 經典的 Flask 骨架, 具有结构化的應用程式布局 。
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - 快速應用程式建設器 安全 汽車 CRUD 和圖表
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - 最佳做法啟動程式 。
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - 有 uWSGI 、 Nginx 和 Flask 的 Docker 影像 。

### 開源專案

- [Apache Airflow](https://github.com/apache/airflow) - 平台呼叫作者、排程及監控工作流程。
- [Apache Superset](https://github.com/apache/superset) - 數據探索與可視化平台.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - 經典論壇軟體用弗拉斯克製造
- [Indico](https://github.com/indico/indico) - 在CERN开发的事件管理系统。
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - 線上 Python 編輯器, 有活的語法檢查 。
- [Redash](https://github.com/getredash/redash) - 查詢並視覺多個來源的資料 。
- [SecureDrop](https://github.com/freedomofpress/securedrop) - 新聞室的举报人申請系統
- [SimpleLogin](https://github.com/simple-login/app) - 保護個人收件箱的電子郵件化名服務 。
- [SkyLines](https://github.com/skylines-project/skylines) - 用于滑翔的直播追蹤和飛行數據庫
- [Timesketch](https://github.com/google/timesketch) - 合作法證時間分析

## 託管

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - WSGI 伺服器及平台的官方便條 。
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - 在飛行機上部署接近使用者的火焰
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - 和弗拉斯克合作的集装箱托管
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - 主機 Python 環境, 有一流的 Flask 支援 。
- [Render](https://render.com/docs/deploy-flask) - 弗拉斯克的網絡服務與背景工作者.
- [Zappa](https://github.com/zappa/Zappa) - AWS Lambda 和 API Gateway 的 WSGI 應用程式 。

## 捐款

歡迎提議 請讀 [CONTRIBUTING.md](CONTRIBUTING.md) 先 歷史和未保存的条目 [archived.md](archived.md).
