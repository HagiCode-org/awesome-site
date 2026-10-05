# Awesome Flask [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Python 및 확장 생태계에 대한 마이크로 웹 프레임 워크.

이 목록에 대한 자습서, 이야기 및 비디오는 무료입니다. 유료 코스는 허용되지 않습니다.

<p align="right">
  <a href="https://flask.palletsprojects.com/">
    <img src="flask-icon.svg" width="72" alt="Flask">
  </a>
</p>

## 목차

- [공식 자료](#official-resources)
- [확장 기능](#extensions)
  - [관리](#admin)
  - [API 지원](#apis)
  - [인증](#auth)
  - [스낵 바](#cache)
  - [관련 기사](#databases)
  - [개발자 도구](#developer-tools)
  - [이름 *](#email)
  - [양식 및 검증](#forms-and-validation)
  - [전체 텍스트 검색](#full-text-search)
  - [보안 보안](#security)
  - [작업 큐](#task-queues)
  - [유틸리티](#utils)
- [자료](#resources)
  - [- 연혁](#community)
  - [한국어](#tutorials)
  - [한국어](#books)
  - [한국어](#talks)
  - [이름 *](#videos)
- [프로젝트](#projects)
  - [시작 템플릿](#boilerplates)
  - [오픈 소스 프로젝트](#open-source-projects)
- [호스팅](#hosting)

## 공식 자료

- [Flask](https://flask.palletsprojects.com/) - 현재 및 과거 릴리스의 공식 문서.
- [Flaskr Tutorial](https://flask.palletsprojects.com/tutorial/) - 작은 블로그를 구축하는 공식 자습서.
- [Source Code](https://github.com/pallets/flask) - 플라스크 자체, 팔레트에 의해 호스팅.
- [Pallets-Eco](https://github.com/pallets-eco) - 핵심 프로젝트 옆에 유지되는 커뮤니티 확장.
- [Quart](https://github.com/pallets/quart) - 공식 ASGI 대응 API와 함께 플라스크의 대응

## 확장 기능

### 관리

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - Application Data 관리를 위한 Extensible admin 인터페이스.

### API 지원

- [APIFlask](https://github.com/apiflask/apiflask) - Flask 웹 API 프레임 워크와 marshmallow 검증 및 OpenAPI 생성.
- [Connexion](https://github.com/spec-first/connexion) - Flask에서 실행할 수있는 Spec-first OpenAPI 프레임 워크.
- [Eve](https://github.com/pyeve/eve) - Flask 및 MongoDB에 의해 구동되는 REST API 프레임 워크.
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPI 및 Swagger UI는 플라스크 전망입니다.
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask, marshmallow 및 OpenAPI는 REST 서비스에 결합했습니다.
- [Flask-RESTful](https://github.com/flask-restful/flask-restful) - REST API를 구축하는 경량의 도우미.
- [Flask-RESTX](https://github.com/python-restx/flask-restx) - Swagger 문서와 Flask-RESTPlus의 커뮤니티 포크.
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest) - 자동 OpenAPI를 가진 Marshmallow-first REST 기구.

### 인증

- [Authlib](https://github.com/authlib/authlib) - OAuth 1, OAuth 2 및 OpenID는 클라이언트와 서버를 연결합니다.
- [Authomatic](https://github.com/authomatic/authomatic) - Framework-agnostic OAuth 및 OpenID 클라이언트.
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - GitHub 및 Google과 같은 내장 공급자와 OAuth 소비자.
- [Flask-HTTPAuth](https://github.com/miguelgrinberg/Flask-HTTPAuth) - 경로의 기본, 다이제스트 및 토큰 인증.
- [Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended) - JWT 인증은 토큰을 새로 고침하고 미세 곡물 주장.
- [Flask-Login](https://github.com/maxcountryman/flask-login) - 세션 기반 사용자 로그인 관리.
- [Flask-Praetorian](https://github.com/dusktreader/flask-praetorian) - API를 위한 JWT 인증 및 역할 기반 인증.
- [Flask-Pundit](https://github.com/anurag90x/flask-pundit) - Rails Pundit의 정책 기반 허가.
- [Flask-Security](https://github.com/pallets-eco/flask-security) - 계정 관리, 인증 및 인증. 계속 Flask-Security-Too.
- [Flask-Session](https://github.com/pallets-eco/flask-session) - Flask의 서버 측 세션.
- [Flask-User](https://github.com/lingthio/Flask-User) - 사용자 정의 사용자 등록, 로그인 및 계정 관리.

### 스낵 바

- [Flask-Caching](https://github.com/pallets-eco/flask-caching) - 여러 백엔드와 캐싱 지원.

### 관련 기사

- [Flask-Alembic](https://github.com/pallets-eco/flask-alembic) - Alembic 마이그레이션은 Flask-SQLAlchemy 데이터베이스에 연결됩니다.
- [Flask-Migrate](https://github.com/miguelgrinberg/Flask-Migrate) - Alembic을 통해 Flask-SQLAlchemy에 대한 데이터베이스 마이그레이션.
- [Flask-MongoEngine](https://github.com/MongoEngine/flask-mongoengine) - WTForms 지원과 MongoEngine 통합.
- [Flask-PyMongo](https://github.com/mongodb-labs/flask-pymongo) - MongoDB에 대한 PyMongo 통합.
- [Flask-SQLAlchemy](https://github.com/pallets-eco/flask-sqlalchemy) - Flask에 대한 SQLAlchemy 통합.
- [Advanced Alchemy](https://github.com/litestar-org/advanced-alchemy) - SQLAlchemy 동반자 저장소, Alembic 헬퍼 및 첫 번째 파티 플라스크 확장.

### 개발자 도구

- [Elastic APM](https://github.com/elastic/apm-agent-python) - Flask를 위한 신청 성과 감시.
- [Flask-DebugToolbar](https://github.com/pallets-eco/flask-debugtoolbar) - In-browser 디버그 툴바, Django에서 포트.
- [Flask-MonitoringDashboard](https://github.com/flask-dashboard/Flask-MonitoringDashboard) - Flask 서비스에 대한 자동 성능 모니터링.
- [Flask-Testing](https://github.com/jarus/flask-testing) - Flask 응용 프로그램에 대한 Unittest 헬퍼.
- [Mixer](https://github.com/klen/mixer) - SQLAlchemy 및 Django 모델에 대한 개체 공장.
- [nplusone](https://github.com/jmcarp/nplusone) - Flask-SQLAlchemy를 사용할 때 N+1 쿼리를 감지합니다.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-python-contrib) - 플라스크를 포함한 Tracing 및 metrics 계측.
- [pytest-flask](https://github.com/pytest-dev/pytest-flask) - 플라스크 응용 분야에 대한 Pytest 정착물.
- [Sentry](https://github.com/getsentry/sentry-python) - Flask 통합을 가진 오류 추적 SDK.

### 이름 *

- [Flask-Mail](https://github.com/pallets-eco/flask-mail) - Flask에 대한 SMTP 이메일 보내기.
- [Flask-Mailman](https://github.com/waynerv/flask-mailman) - Django의 메일 시스템의 포트가 플라스크에 있습니다.

### 양식 및 검증

- [Flask-Marshmallow](https://github.com/marshmallow-code/flask-marshmallow) - 일련화 및 검증을 위한 Marshmallow 통합.
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - 플라스크 전망에 대한 Pydantic 검증.
- [Flask-WTF](https://github.com/pallets-eco/flask-wtf) - CSRF, 파일 업로드 및 reCAPTCHA와 WTForms 통합.

### 전체 텍스트 검색

- [flask-msearch](https://github.com/honmaple/flask-msearch) - Flask에 대한 전체 텍스트 검색, Whoosh 지원.
- [SQLAlchemy-Searchable](https://github.com/falcony-io/sqlalchemy-searchable) - PostgreSQL에서 SQLAlchemy 모델에 대한 전체 텍스트 검색.

### 보안 보안

- [Flask-Bcrypt](https://github.com/maxcountryman/flask-bcrypt) - 비밀번호 해시.
- [Flask-CORS](https://github.com/corydolphin/flask-cors) - Cross-Origin 자원 공유 (CORS) 지원.
- [Flask-Limiter](https://github.com/alisaifee/flask-limiter) - 플라스크 노선의 제한 속도.
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf) - 플라스크의 CSRF 보호.
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPS 집행 및 보안 헤더.

### 작업 큐

- [Celery](https://github.com/celery/celery) - 일반적으로 플라스크에 사용됩니다.
- [Dramatiq](https://github.com/Bogdanp/dramatiq) - Celery에 빠른 대안, 와 [Flask-Dramatiq](https://flask-dramatiq.readthedocs.io/) 이용안내
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - Redis Queue (RQ)는 플라스크와 Quart에 통합합니다.
- [Huey](https://github.com/coleifer/huey) - 작은 Redis 백업 작업 큐.

### 유틸리티

- [Flask-Assets](https://github.com/miracle2k/flask-assets) - bundling 및 minifying 정적 파일에 대한 Webassets 통합.
- [Flask-Babel](https://github.com/python-babel/flask-babel) - Babel을 통해 국제화 및 현지화.
- [Flask-GoogleMaps](https://github.com/flask-extensions/Flask-GoogleMaps) - Flask 템플릿의 Google지도를 Embed.
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - Flask에 대한 GraphQL 지원.
- [Flask-HTMLmin](https://github.com/hamidfzm/Flask-HTMLmin) - 플라스크 응답을 위한 HTML 분화.
- [flask-jsonrpc](https://github.com/cenobites/flask-jsonrpc) - Flask에 대한 JSON-RPC 지원.
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Jinja 템플릿의 날짜에 대한 Moment.js 도우미.
- [Flask-Paginate](https://github.com/lixxu/flask-paginate) - 플라스크를 위한 질 도움.
- [flask-s3](https://github.com/e-dard/flask-s3) - Amazon S3에서 Flask 정적 자산을 구합니다.
- [Flask-SocketIO](https://github.com/miguelgrinberg/Flask-SocketIO) - 소켓. 플라스크의 IO 통합.
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Freezes a Flask app into the 정적 사이트.

## 자료

### - 연혁

- [Discord](https://discord.gg/pallets) - Pallets 커뮤니티 서버. Flask 도움말 채널을 사용하십시오.
- [Reddit](https://www.reddit.com/r/flask/) - 플라스크 잠수함.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - 자주 묻는 질문`flask`·

### 한국어

- [The Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - 가득 차있는 플라스크 신청을 덮는 긴 모양 시리즈.
- [Discover Flask](https://github.com/realpython/discover-flask) - Real Python의 Full-stack Flask 시리즈.
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Flask, Test-Drive 개발 및 JavaScript에 대한 소개.

### 한국어

- [Explore Flask](https://explore-flask.readthedocs.io/en/latest/) - 플라스크 패턴 및 프로젝트 구조에 무료 책.
- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - O'Reilly book by Miguel Grinberg 실제 응용 프로그램을 구축.

### 한국어

- [Advanced Flask Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns) - Armin Ronacher의 패턴.
- [Flasky Goodness](https://speakerdeck.com/kennethreitz/flasky-goodness) - Kenneth Reitz의 이야기.
- [Domain Driven Design with Flask](https://speakerdeck.com/mikedebo/domain-driven-design-dot-dot-dot-with-flask) - Flask에서 DDD 아이디어를 적용.

### 이름 *

- [PyVideo](https://pyvideo.org/search.html?q=flask) - 회의 이야기 태그 Flask.
- [Python Flask Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) - Corey Schafer의 전체 기능 웹 앱 시리즈.

## 프로젝트

### 시작 템플릿

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - 부트 스트랩, 웹팩 및 인증이있는 Cookiecutter 템플릿.
- [fbone](https://github.com/imwilsonxu/fbone) - 구조화된 애플리케이션 레이아웃을 가진 Classic Flask skeleton.
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - 보안, 자동 CRUD 및 차트와 신속한 앱 빌더.
- [Flask-Foundation](https://github.com/JackStouffer/Flask-Foundation) - Best-practice 시동기 신청.
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - uWSGI, Nginx 및 Flask와 Docker 이미지.

### 오픈 소스 프로젝트

- [Apache Airflow](https://github.com/apache/airflow) - 개발자, 일정 및 모니터링 워크플로우 플랫폼.
- [Apache Superset](https://github.com/apache/superset) - 데이터 탐험 및 시각화 플랫폼.
- [FlaskBB](https://github.com/flaskbb/flaskbb) - Flask에 내장 된 클래식 포럼 소프트웨어.
- [Indico](https://github.com/indico/indico) - CERN에서 개발된 이벤트 관리 시스템.
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - 온라인 파이썬 편집기 라이브 문법 검사.
- [Redash](https://github.com/getredash/redash) - Query와 많은 소스에서 데이터를 시각화.
- [SecureDrop](https://github.com/freedomofpress/securedrop) - 뉴스룸에 대한 Whistleblower 제출 시스템.
- [SimpleLogin](https://github.com/simple-login/app) - 개인정보의 수집 및 사용에 동의합니다.
- [SkyLines](https://github.com/skylines-project/skylines) - 실시간 추적 및 비행 데이터베이스 gliding.
- [Timesketch](https://github.com/google/timesketch) - Collaborative forensic 타임 라인 분석.

## 호스팅

- [Flask Deployment Options](https://flask.palletsprojects.com/en/stable/deploying/) - WSGI 서버 및 플랫폼의 공식 노트.
- [Fly.io](https://fly.io/docs/python/frameworks/flask/) - Fly Machines에서 사용자들에게 Flask를 배포합니다.
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service) - 플라스크와 잘 작동하는 컨테이너 호스팅.
- [PythonAnywhere](https://help.pythonanywhere.com/pages/Flask/) - 일류 플라스크 지원으로 Python 환경을 호스팅했습니다.
- [Render](https://render.com/docs/deploy-flask) - 플라스크를 위한 웹 서비스 및 배경 노동자.
- [Zappa](https://github.com/zappa/Zappa) - AWS Lambda 및 API Gateway에 WSGI 앱을 배포합니다.

## 관련 기사

제안은 환영받습니다. 자주 묻는 질문 [CONTRIBUTING.md](CONTRIBUTING.md) 처음. 역사와 unmaintained 항목에 살고 [archived.md](archived.md)·
