<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> FastAPI와 관련된 멋진 일 목록.

[FastAPI](https://fastapi.tiangolo.com/) RESTful APIs 구축을 위해 완벽 한 최신, 고성능, 배터리 포함 된 Python 웹 프레임 워크입니다.

## 목차

- [서드파티 확장 기능](#third-party-extensions)
  - [관리](#admin)
  - [인증](#auth)
  - [사이버 보안](#cybersecurity)
  - [관련 기사](#databases)
  - [공급 능력](#dependency-injection)
  - [개발자 도구](#developer-tools)
  - [이름 *](#email)
  - [유틸리티](#utils)
- [자료](#resources)
  - [공식 자료](#official-resources)
  - [외부 자료](#external-resources)
  - [팟캐스트](#podcasts)
  - [이름 *](#articles)
  - [한국어](#tutorials)
  - [한국어](#talks)
  - [이름 *](#videos)
  - [한국어](#courses)
  - [최고의 연습](#best-practices)
- [호스팅](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [서버리스](#serverless)
- [프로젝트](#projects)
  - [시작 템플릿](#boilerplate)
  - [Docker 이미지](#docker-images)
  - [오픈 소스 프로젝트](#open-source-projects)
- [후원사](#sponsors)

## 서드파티 확장 기능

### 관리

- [FastAdmin](https://github.com/vsdudakov/fastadmin) - Django Admin에서 영감을 받은 FastAPI(flask and Django)에 대한 간편한 사용 관리자 대시보드.
- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - Data에서 CRUD 작업을 수행하는 사용자 인터페이스를 제공하는 Functional admin 패널. 현재 Tortoise ORM에서만 작동합니다.
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 고성능, 효율적이고 쉽게 확장 가능한 FastAPI 관리자 프레임 워크.
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Piccolo ORM을 사용하여 강력하고 현대적인 관리자 GUI.
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - SQLAlchemy 모델과 함께 작동하는 FastAPI/Starlette에 대한 관리자 패널.
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - SQLAlchemy, SQLModel, MongoDB 및 ODMantic을 지원하는 FastAPI/Starlette를 위한 관리 기구.


### 인증

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI에 대한 사용자 정의 및 Oauth2 관리.
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - JWT 액세스 및 새로 고침 토큰과 OAuth2 암호 흐름을 지원하는 Pluggable auth.
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - 단일 및 멀티 테넌트 지원으로 API에 대한 Azure AD 인증.
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Casbin을 통해 RBAC, ReBAC 및 ABAC과 같은 다양한 액세스 제어 모델을 지원합니다.
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPI 및 클라우드 인증 서비스 간의 간단한 통합 (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - 계정 관리 및 인증 (기반 [Flask-Login](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (에 따라 다름)[Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 행 레벨 권한.
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - FastAPI의 의존성으로 인증 및 승인 구현.
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - Out-of-the-box API 키 보안은 경로 운영을 통해 관리할 수 있습니다.
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - 계정 관리, 인증, 인증.
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - IAM 플랫폼을 사용하는 OAuth2 [Zitadel](https://github.com/zitadel/zitadel)·

### 사이버 보안

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - 속도 제한, 자동 반 IP, 침투 공격 감지, 화이트리스트 / 블랙리스트 (countries, IPs, Cloud Providers), 사용자 에이전트 필터링, Geolocation, 지속을위한 Redis 통합, 및 더.
- [secure](https://github.com/TypeError/secure) - ASGI 미들웨어 및 단일 구성 객체를 사용하여 FastAPI 앱에서 일관적으로 HTTP 보안 헤더를 정의하고 적용합니다.

### 관련 기사

#### 계정 만들기

- [Edgy ORM](https://github.com/dymmond/edgy) - 복잡한 데이터베이스는 간단합니다.
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPI 및 [SQLAlchemy](https://www.sqlalchemy.org/)·
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - SQLAlchemy extension for FastAPI with support for pagination, asyncio, and pytest.
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - REST API를 만드는 간단한 방법 [PeeWee](https://github.com/coleifer/peewee) 모델.
- [FastSQLA](https://github.com/hadrien/FastSQLA) - SQLModel 지원, 내장 pagination 및 더 빠른 API에 대한 SQLAlchemy 2.0 + 확장.
- [GINO](https://github.com/python-gino/gino) - Python asyncio의 SQLAlchemy 코어의 상단에 내장 된 경량 비동기 ORM.
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - async는 ORM입니다.
- [ormar](https://collerek.github.io/ormar/) - Ormar는 Pydantic 검증을 사용하는 async ORM이며 FastAPI 요청 및 응답에서 직접 사용할 수 있으므로 유지하려면 하나의 세트의 모델을 왼쪽으로 유지해야합니다. Alembic 마이그레이션 포함.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - ormar를 가진 FastAPI 사용하기.
- [Piccolo](https://github.com/piccolo-orm/piccolo) - Async ORM 및 쿼리 빌더, 지원 Postgres 및 SQLite, 배터리 (이동, 보안 등).
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - Piccolo를 가진 FastAPI 사용하기.
- [Tortoise ORM](https://tortoise.github.io) - Django에서 영감을 받은 easy-to-use asyncio ORM (Object Relational Mapper).
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Tortoise-ORM FastAPI 통합의 예.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Tortoise ORM 마이그레이션 도구.
- [Saffier ORM](https://github.com/tarsil/saffier) - 파이썬 ORM만 필요 합니다.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (Pydantic 및 SQLAlchemy에 의해 구동되는)는 Python 객체와 함께 Python 코드에서 SQL 데이터베이스와 상호 작용하는 라이브러리입니다.

#### Query 빌더

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - 주변 래퍼 [asyncpg](https://github.com/MagicStack/asyncpg) 사용방법 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)·
- [Databases](https://github.com/encode/databases) - Async SQL 쿼리 빌더는 상단에 작동 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) 언어 선택
- [PyPika](https://github.com/kayak/pypika) - SQL 언어의 전체 부유함을 노출하는 SQL 쿼리 빌더.

#### ODM 방식

- [Beanie](https://github.com/BeanieODM/beanie) - MongoDB 용 비동기 파이썬 ODM, 기반 [Motor](https://motor.readthedocs.io/en/stable/)·[Pydantic](https://pydantic.dev/docs/) 데이터 및 스키마 마이그레이션을 지원하는 .
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - Document-Object Mapper (Think ORM, 하지만 문서 데이터베이스에 대 한) Python에서 MongoDB 작업에 대 한.
- [Motor](https://motor.readthedocs.io/) - MongoDB의 비동기 파이썬 드라이버.
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM 통합 [Pydantic](https://pydantic.dev/docs/)·
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - Amazon의 DynamoDB에 대한 pythonic 인터페이스.

#### 기타 도구

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - SQLAlchemy 모델을 변환 [Pydantic](https://pydantic.dev/docs/) 모델.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - CamelCase JSON 지원 FastAPI 사용 [Pydantic](https://pydantic.dev/docs/)·
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - 확장의 저자에서 블로그 게시물을 Accompanying.
 
### 공급 능력

- [modern-di](https://github.com/modern-python/modern-di) - IoC 콘테이너와 범위를 가진 의존성 주입 기구,[FastAPI integration](https://github.com/modern-python/modern-di-fastapi)·
- [Wireup](https://github.com/maldoinc/wireup) - FastAPI에서 Zero runtime overhead와 의존성을 주입하십시오. 웹, cli 또는 기타 인터페이스를 통해 의존성을 공유하십시오.

### 개발자 도구

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - OpenAPI 파일에서 FastAPI 앱을 만들고 schema-driven 개발을 가능하게 합니다.
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - OpenAPI spec에서 mypy- 및 IDE-friendly API 클라이언트 생성.
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - FastAPI의 동반자 라이브러리는 Ruby on Rails, Ember.js 또는 Sails.js의 개발 생산성을 FastAPI 생태계에 가져올 수 있도록 설계되었습니다.
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 고품질 FastAPI 생산-ready API를 만들기위한 개발자 생산성 도구.
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - 서비스 성능을 확인하는 joerick/pyinstrument의 FastAPI Middleware.
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - API 버전.
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - RESTful API 엔드포인트로 Jupyter 노트북을 실행하십시오.
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - FastAPI 프로젝트 생성 및 관리를위한 CLI 도구.
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - 제품정보 [MessagePack](https://msgpack.org/) 내용 협상.
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - Event-Driven Architecture Framework with CQRS, Transaction Outbox, 사가 오케스트라션, 원활한 FastAPI/FastStream 통합.

### 이름 *

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - 이메일 및 첨부 파일을 전송하기위한 경량 메일 시스템 (개인 및 대량).

### 유틸리티

- [Apitally](https://github.com/apitally/apitally-py) - API 분석, 모니터링 및 요청 로깅 FastAPI.
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - ID 로깅 미들웨어를 요청하십시오.
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - 간단한 경량 캐시 시스템.
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - Redis, Memcached, DynamoDB 및 in-memory 백엔드를 지원하는 FastAPI 응답 및 기능 결과를 캐시하는 도구.
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - Chameleon 템플릿 언어의 통합을 FastAPI에 추가합니다.
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) FastAPI에 대한 통합.
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - 유틸리티 세트 : pagination, auth 미들웨어, 허가, 사용자 정의 예외 핸들러, MongoDB 지원 및 Opentracing 미들웨어.
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud)) - Robust async CRUD 가동과 가동 가능한 endpoint 창조 유틸리티.
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPI 및 Starlette의 비동기 이벤트 파견/핸들링 라이브러리.
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI의 기능 플래그의 간단한 구현.
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - CLI 도구, 배경 작업, 근로자 및 더 많은 경로 핸들러 외부 FastAPI의 의존성 주입을 사용하십시오.
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - Jinja 템플릿 언어의 통합을 FastAPI에 추가합니다.
- [FastAPI Lazy](https://github.com/yezz123/fastango) - FastAPI를 사용하여 프로젝트를 시작하는 Lazy 패키지.
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI의 요청 속도 제한기.
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - 구성 요소 기반 아키텍처를 사용하여 API를 설계 / 빌드하는 라이브러리, 내장된 쿼리 paginator, sorter, django-admin 필터 및 훨씬 더.
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTT 프로토콜의 확장.
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI에 대한 Midware 및 데이터베이스 추적 지원.
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPI에 대한 질.
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redis 및 Scheduler 플러그인.
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - API 서비스를 만들기위한 발전기.
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 일반 FastAPI 라이브러리는 게으른 의존성 주입을 할 수있는 일반적인 엔드 포인트 장식기를 작성합니다.
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPI 및 SocketIO에 대한 쉬운 통합.
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 재사용 가능한 유틸리티 : 클래스 기반 레이아웃, 응답 인퍼링 라우터, 정기적인 작업, 타이밍 미들웨어, SQLAlchemy 세션, OpenAPI spec simplification.
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - 장고 REST FastAPI를 위한 Framework-inspired ViewSets는 자동 경로 등록으로 클래스 기반 CRUD 엔드포인트 조직을 가능하게 합니다.
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - 고전적인 pub/sub 패턴은 웹을 통해 쉽게 접근 할 수 있으며 실시간 클라우드를 통해 확장 할 수 있습니다.
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - Websockets에 RPC (bidirectional JSON RPC)는 쉽고 견고하며 생산이 가능합니다.
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - 라이브러리는 FastAPI 웹 프레임 워크의 자동 및 수동 계측을 제공하여 프레임 워크를 활용하여 애플리케이션에 의해 제공되는 HTTP 요청을 계측합니다.
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Prerender를 위한 Starlette 미들웨어.
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - FastAPI 응용 프로그램에 대한 구성 및 모듈 Prometheus Instrumentator.
- [SlowApi](https://github.com/laurents/slowapi) - rate limiter (에 따라 다름)[Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - 프로젝트에서 요청 데이터를 저장하고 액세스 할 수 있습니다. 로그인에 유용합니다.
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - FastAPI 및 Starlette에 대한 더 많은 prometheus 통합.
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - Starlette 및 FastAPI를 위한 Opentracing 지원.
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPI 및 Starlette에 대한 Prometheus 통합.
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - Python GraphQL 라이브러리는 dataclasses를 기반으로 합니다.
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) -  pydantic 클래스는 해결 및 후 처리 후크를 도입하여 강력한 작곡 가능한 컴퓨팅 컨테이너로 전환합니다.

## 자료

### 공식 자료

- [Documentation](https://fastapi.tiangolo.com/) - 포괄적인 문서.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - FastAPI를 사용하는 방법을 보여주는 공식 튜토리얼은 대부분의 기능으로, 단계별로.
- [Source Code](https://github.com/fastapi/fastapi) - GitHub에서 호스팅
- [Discord](https://discord.com/invite/VQjSZaeJmf) - 다른 FastAPI 사용자와 채팅.

### 외부 자료

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Multiple FastAPI-specific article that focus on development and testing production-ready RESTful APIs, 기계 학습 모델을 제공, 그리고 더.

### 팟캐스트

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - 이 에피소드에서 [Podcast Init](https://www.pythonpodcast.com/), FastAPI의 제작자,[Sebastián Ramirez](https://tiangolo.com/), FastAPI 구축에 대한 그의 동기를 공유하고 후드에서 작동하는 방법.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - 프로젝트의 좋은 개요.

### 이름 *

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - 왜 플라스크에서 FastAPI로 이동합니다.

### 한국어

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - SQLAlchemy를 비동기적으로 사용하는 방법을 알아보세요.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - FastAPI, Postgres, Pytest 및 Docker를 사용하여 비동기 API를 개발 및 테스트합니다.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - FastAPI를 Flask와 비교하여
- [FastAPI Session Leak Detection](https://www.logiclooptech.dev/fastapi-session-leak-detection-sqlalchemy-long-running/) - 생산에서 긴 실행 SQLAlchemy 세션 및 연결 풀 배기를 진단하고 수정합니다.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI 응용 프로그램 및 서비스 구조 더 많은 유지 가능한 codebase.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - FastAPI 웹 애플리케이션 스택으로 시작하십시오.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - FastAPI 애플리케이션 멀티텐트를 만드는 방법을 알아보세요.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - FastAPI에서 실시간 차트로 데이터를 스트림하는 방법을 알아보세요.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Gunicorn을 사용하여 생산 배포를 위해 systemd.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - FastAPI를 사용하여 빠르고 쉽게 배포하고 RESTful API로 Python에서 기계 학습 모델을 제공합니다.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - 비디오 스트림을 제공하는 방법을 알아보기.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - FastAPI에 대한 속성 기반 테스트를 적용합니다.

### 한국어

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Sebastian Ramirez의 이야기에서 당신은 쉽게 기본으로 최고의 관행을 포함하여 FastAPI와 함께 ML 모델에 대한 생산 읽기 웹 (JSON) API를 구축하는 방법을 배울 것입니다.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - 이 이야기는 FastAPI를 사용하여 지상에서 데이터베이스에 간단한 REST API를 구축하는 방법을 보여줍니다.

### 이름 *

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - FastAPI와 웹 기반 재고 시나리오를 구축하면 Pydantic 모델, 의존성 주입, 백그라운드 작업 및 SQLAlchemy 통합을 포함하여 FastAPI의 많은 기능에 도입됩니다.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - FastAPI를 사용하여 웹 응용 프로그램 프로그래밍 인터페이스 (RESTful API)를 구축합니다.
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - FastAPI로 수치 검증을 수행하는 방법을 알아보십시오.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - 어떤 프레임 워크는 2020 년 파이썬에 가장 적합합니까? async/await를 가장 사용하는 것은? 가장 빠른 것은?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - FastAPI로 머신러닝 API 구축

### 한국어

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - 빌드, 테스트 및 Python, FastAPI 및 Docker와 텍스트 요약 microservice를 배포하는 방법을 알아보십시오.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - 빠른 API로 클라우드에서 실행되는 새로운 API를 만들기 위해 설계된 과정.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - FastAPI와 함께 전체 웹 앱을 구축하는 것을 배울 수 있습니다. Flask 또는 Django와 같은 것.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - QuickAPI 애플리케이션에 Celery를 추가하는 방법을 알아보세요.

### 최고의 연습

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - GitHub 저장소의 모범 사례 컬렉션.
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - FastAPI, dishka, faststream, sqlalchemy, pydantic을 결합합니다.
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - Clean Architecture 백엔드 예제를 FastAPI로 만들었습니다.

## 호스팅

### PaaS

(서비스형 플랫폼)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io)(주)[tutorial](https://fly.io/docs/python/frameworks/fastapi/)·[Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi)·
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/)(주)[Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/)·[ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/)·
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(서비스형 인프라)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### 서버리스

프레임워크:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - AWS Lambda 및 API Gateway와 ASGI 응용 프로그램을 실행하기위한 어댑터.
- [Vercel](https://vercel.com/) - (이전 Zeit) ([example](https://github.com/Snailedlt/Markdown-Videos)).

컴퓨팅:

- [AWS Lambda](https://aws.amazon.com/lambda/)(주)[example](https://github.com/iwpnd/fastapi-aws-lambda-example)·
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run)(주)[example](https://github.com/anthonycorletti/cloudrun-fastapi)·

## 프로젝트

### 시작 템플릿

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - 전체 스택 FastAPI 템플릿
FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, 자동 HTTPS 등을 포함한 , (QuickAPI의 제작자에 의해 개발,[Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - 웹 APIs w/ FastAPI (웹 프레임 워크로) 및 Tortoise-ORM에 대한 강력한 간단한 템플릿 (headache없이 데이터베이스를 통해 작업).
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - 의존성 주입(modern-di), Alembic migrations 및 justfile 워크플로우를 가진 Dockerized 시동기.
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton 앱은 기계 학습 모델 제작을 지원합니다.
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - 빠른 배포의 spaCy 모델과 FastAPI.
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - FastAPI 프로젝트를 위한 Cookiecutter 템플릿: Machine Learning, Poetry, Azure Pipelines 및 pytest.
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - OpenAPI에서 현대 FastAPI Python 클라이언트(QuickAPI) 생성
- [Pywork](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) FastAPI 앱을 비계하는 발전기.
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Python에서 고성능 async REST API를 위한 템플릿. FastAPI + GINO + Arq + Uvicorn (w / Redis 및 PostgreSQL).
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - FastAPI, TypeScript, Docker, PostgreSQL 및 React를 사용하여 전체 스택 쿠키 커터 보일러 플레이트.
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - 공장 패턴 아키텍처와 간단한 FastAPI 템플릿.
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 가동 가능한, 경량 FastAPI 프로젝트 발전기. SQLAlchemy, 여러 데이터베이스, CI/CD, Docker 및 Kubernetes에 대한 지원이 포함되어 있습니다.
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - FastAPI, SQLModel 및 Google Cloud Run을 가진 API 건물을 위한 보일러판.
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - FastAPI 및 Google Cloud Firestore와 API 구축을위한 보일러 플레이트.
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - 이것은 FastAPI, Alembic 및 SQLModel를 ORM으로 사용하는 프로젝트 템플릿입니다.
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI를 사용하는 프로젝트 템플릿.
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - FastAPI, MongoDB, Docker, Celery, React frontend, 자동 HTTPS 등을 포함하는 전체 스택, 현대 웹 응용 발전기.
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - FastAPI 응용 프로그램을 시작하는 Cookiecutter 프로젝트 템플릿. 쿠버네티스의 Uvicorn ASGI 서버와 Docker 컨테이너에서 실행합니다. AMD64 및 ARM64 CPU 아키텍처를 지원합니다.
- [FastAPI Agent Blueprint](https://github.com/Mr-DooSun/fastapi-agent-blueprint) - DDD는 일반적인 기본 클래스가 보일러 플레이트, 발견에 도메인 자체 등록 없이 동기화 CRUD를 계층화 한 템플릿을 계층화하고, 커밋 시간에 크로스 레이어 가져 오기를 차단합니다.

### Docker 이미지

- [inboard](https://github.com/br3ndonland/inboard) - FastAPI 앱을 강화하고 신속하게 배송할 수 있도록 Docker 이미지.
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Uvicorn이 관리한 Docker 이미지는 Python 3.7 및 3.6의 고성능 FastAPI 웹 애플리케이션을 위해 Gunicorn이 관리했습니다.
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Python 웹 응용 프로그램을 실행하기위한 Uvicorn 노동자를 사용하여 Gunicorn과 Docker 이미지. 의존성을 관리하고 가상 환경을 설정하는 Poetry를 사용합니다. AMD64 및 ARM64 CPU 아키텍처를 지원합니다.
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Kubernetes에서 Python 웹 애플리케이션을 실행하는 Uvicorn ASGI 서버와 Docker 이미지. 의존성을 관리하고 가상 환경을 설정하는 Poetry를 사용합니다. AMD64 및 ARM64 CPU 아키텍처를 지원합니다.

### 오픈 소스 프로젝트

- [Astrobase](https://github.com/anthonycorletti/astrobase) - 간단하고 빠르고 안전하게 배포합니다.
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - FastAPI를 사용하는 프로젝트의 구성 목록.
- [Bitcart](https://github.com/bitcart/bitcart) - 상인, 사용자 및 개발자를위한 플랫폼은 쉽게 설정 및 사용을 제공합니다.
- [Bali](https://github.com/bali-framework/bali) - Cloud Native Microservices 개발 기지를 FastAPI 및 gRPC에 간단히 합니다.
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - FastAPI, React+RxJs, Neo4j, PostgreSQL 및 Redis로 구성된 작은 소셜 네트워크.
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 글로벌 코로나 바이러스 추적 API (COVID-19, SARS-CoV-2) 발생.
- [Dispatch](https://github.com/Netflix/dispatch) - 보안 사고 관리.
- FastAPI CRUD 예제:
  - [Async flavor](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - 관찰 가능한 세 개의 기둥이있는 FastAPI 앱을 관찰하십시오 : Traces (Tempo), 미터 (Prometheus), Grafana에서 로그 (Loki) OpenTelemetry 및 OpenMetrics를 통해.
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast' 데모.
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - 작업 큐에 대한 RabbitMQ와 함께 FastAPI 및 Celery를 사용하는 최소 예, Celery 백엔드의 Redis, 그리고 Celery 작업을 모니터링하기위한 꽃.
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - 웹소켓, SSE, 콜백, 비밀 메시지 등을 제공하는 최고의 관행과 함께 구축 된 REST 및 GraphQL 놀이터.
- [JeffQL](https://github.com/yezz123/JeffQL/) - GraphQL 및 JWT를 사용하여 간단한 인증 및 로그인 API.
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - FastAPI 기반의 JSON-RPC 서버.
- [Mailer](https://github.com/rclement/mailer) - 정적 웹 사이트에 대한 Dead-simple mailer 마이크로 서비스.
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - thumbnails 생성을 위한 API는 당신의 markdown 내용으로 끼워넣었습니다.
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Nemo로 생산됩니다.
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Open-Policy 상단의 실시간 인증 업데이트; FastAPI, Typer 및 FastAPI WebSocket pub/sub과 내장.
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - 미들웨어, HTTP 이벤트 추적, AWS Lambda 통합, 테스트 유틸리티 및 Type Safe, Pydantic 및 dataclasses 사이의 자동 변환을 제공하는 Type-safe FastAPI 래퍼.
- [Polar](https://github.com/polarsource/polar) - 개발자를위한 기금 및 수익화 플랫폼, FastAPI, SQLAlchemy, Alembic 및 Arq와 내장.
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - 간단한 Redis 스트림은 Websockets, Asyncio 및 FastAPI/Starlette을 사용하여 채팅 앱을 백업했습니다.
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - Cellular Automata를 사용하여 개인 8 비트 아바타 생성.
- [Slackers](https://github.com/uhavin/slackers) - Slack 웹훅 API.
- [TermPair](https://github.com/cs01/termpair) - 브라우저에서 엔드 투 엔드 암호화로 터미널을 확인하고 제어합니다.
- [Universities](https://github.com/ycd/universities) - 전 세계 +9600 대학에 대한 정보를 얻는 API 서비스.

## 후원사

스폰서를 확인하여이 오픈 소스 프로젝트를 지원하십시오.

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
