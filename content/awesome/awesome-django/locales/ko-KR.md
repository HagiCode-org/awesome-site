# 최고 Django [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> Django와 관련된 멋진 것들 목록. 관련 기사 [Will Vincent](https://github.com/wsvincent) · [Jeff Triplett](https://github.com/jefftriplett).

<br>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/django-logo-negative.svg">
  <img alt="Dark and Light mode version of the Django logo" src="./assets/django-logo-positive.svg">
</picture>
</div>

<br>

Django를 지원해 주세요 <a rel="sponsored" href="https://www.djangoproject.com/fundraising/">Django 소프트웨어 재단</a>,
후원하기 <a rel="sponsored" href="https://github.com/sponsors/django">GitHub 스폰서</a>,
또는 구매 <a rel="sponsored" href="https://django.threadless.com/">공식 상품</a>.

## 이름 *

<!--lint disable awesome-toc-->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [제3자 패키지](#third-party-packages)
  - [계정 관리](#admin)
  - [관리자 테마](#admin-themes)
  - [API 지원](#apis)
  - [Async의 장점](#async)
  - [뚱 베어](#caching)
  - [이름 *](#commands)
  - [제품 설명](#configuration)
  - [콘텐츠 관리 시스템](#content-management-systems)
  - [데이터베이스 커넥터](#database-connectors)
  - [공급 능력](#dependency-injection)
  - [전자상거래](#ecommerce)
  - [한국어](#editors)
  - [파일/이미지](#filesimages)
  - [이름 *](#forms)
  - [풀 스택 프레임](#full-stack-frameworks)
  - [주요사업](#general)
  - [국제화 (i18n)](#internationalisation-i18n)
  - [로그아웃](#logging)
  - [관련 기사](#monitoring)
  - [회사 소개](#mailing)
  - [모형 분야](#model-fields)
  - [모델 번호:](#models)
  - [- 연혁](#performance)
  - [제출](#permissions)
  - [제품정보](#search)
  - [검색 엔진 최적화](#search-engine-optimisation)
  - [보안 보안](#security)
  - [정적 자산](#static-assets)
  - [작업 큐](#task-queues)
  - [한국어](#templates)
  - [제품정보](#testing)
  - [사이트 맵](#urls)
  - [이름 *](#users)
  - [이름 *](#views)
- [개발자 도구](#developer-tools)
  - [한국어](#templates-1)
  - [정적 분석](#static-analysis)
- [Python 패키지](#python-packages)
- [지원하다](#resources)
  - [공식 자료](#official-resources)
  - [교육과정](#educational)
  - [- 연혁](#community)
  - [컨퍼런스](#conferences)
  - [회사연혁](#job-boards)
  - [뉴스레터](#newsletters)
  - [팟캐스트](#podcasts)
  - [이름 *](#videos)
  - [한국어](#books)
- [이름 *](#hosting)
  - [PaaS (플랫폼-as-a-Service)](#paas-platforms-as-a-service)
  - [IaaS(Infrastructure-as-a-Service)](#iaas-infrastructure-as-a-service)
  - [Deployment 서비스](#deployment-services)
  - [셀프 호스팅 배포](#self-hosted-deployment)
- [프로젝트](#projects)
  - [보일러판](#boilerplate)
  - [오픈 소스 프로젝트](#open-source-projects)
- [장고 REST 관련 기사](#django-rest-framework)
  - [DRF 자원](#drf-resources)
  - [DRF 자습서](#drf-tutorials)
- [채용정보](#wagtail)
  - [Wagtail 자료](#wagtail-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--lint enable awesome-toc-->

## 제3자 패키지

_모든 사용 가능한 패키지의 전체 목록의 경우, 참조 [Django Packages](https://djangopackages.org/)_

### 계정 관리
- [django-hijack](https://github.com/django-hijack/django-hijack) - 관리자는 다른 사용자를 대신하여 로그인하고 작업 할 수 있습니다.
- [django-import-export](https://github.com/django-import-export/django-import-export) - Django Application and library for importing and exporting data with 관리자 통합.
- [django-admin-inline-paginator-plus](https://github.com/DmytroLitvinov/django-admin-inline-paginator-plus) - Django 관리자의 인라인을 제거하는 간단한 방법
- [django-loginas](https://github.com/skorokithakis/django-loginas) - "사용자로 로그인" Django 관리자.
- [impostor](https://github.com/avallbona/Impostor) - Impostor는 직원 구성원이 자신의 사용자 이름과 암호를 사용하여 다른 사용자로 로그인 할 수있는 Django 응용 프로그램입니다.
- [django-impersonate](https://pypi.org/project/django-impersonate/) - superusers를 “impersonate” 다른 비 슈퍼 유저 계정으로 허용하십시오.
- [django-admin-env-notice](https://github.com/dizballanze/django-admin-env-notice) - 예를 들어 Django Admin의 시각적으로 구분된 환경: `development`, `staging`, `production`.
- [django-related-admin](https://github.com/PetrDlouhy/django-related-admin) - 목록을 작성할 수 있는 helper library_외국 열쇠 관계의 맞은편에 전시.
- [django-admin-sortable2](https://github.com/jrief/django-admin-sortable2) - Django 관리자 인터페이스에서 개체를 위한 일반적인 드래그 앤 드롭 주문.
- [django-admin-collaborator](https://github.com/brktrlw/django-admin-collaborator) - 실시간 사용자 존재 추가, 잠금을 편집하고, 채널과 Redis와 Django 관리자에 채팅.
- [dj-control-room](https://github.com/django-control-room/dj-control-room) - Django admin (Redis, cache, Celery, URL 등) 내부의 작업 도구 모음과 제어 평면을 구축하십시오.
- [django-admin-mcp](https://github.com/7tg/django-admin-mcp) - MCP 클라이언트에 대한 관리자 등록 된 모델 (클래드와 같은 AI 조수) : CRUD, 관리자 행동 및 ModelAdmin 클래스를 통해 역사, Django 권한에 의해 캡핑.

### 관리자 테마
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - 관리자를위한 재즈 스킨.
- [django-jazzmin](https://github.com/farridav/django-jazzmin) - django admin에 대한 드롭 인 테마는 AdminLTE 3 & Boottrap 4를 활용하여 yo' admin 보기 jazzy를 만듭니다.
- [django-admin-interface](https://github.com/fabiocaccamo/django-admin-interface) - 관리자 자체(color, header)에 의해 관리자를 사용자 지정합니다. 제목, 로고) 및 팝업 창은 modals에 의해 대체.
- [django-semantic-admin](https://github.com/globophobe/django-semantic-admin) - Django Semantic UI 관리자 테마.
- [django-jet-reboot](https://github.com/assem-ch/django-jet-reboot) - Django Jet은 향상된 기능을 갖춘 Django admin 인터페이스의 현대적인 템플릿입니다.
- [django-baton](https://github.com/otto-torino/django-baton) - 시원하고 현대적이고 반응하는 django admin 애플리케이션을 기반으로 부트 스트랩 5.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - 현대 Django 관리자는 원활한 인터페이스 개발을 위한 테마입니다.
- [django-daisy](https://github.com/hypy13/django-daisy) - 현대 django 대시보드는 daisyui로 완전히 반응합니다.
- [django-smartbase-admin](https://github.com/SmartBase-SK/django-smartbase-admin) - Django SmartBase Admin tun 공연-tuned tun 최종 사용자 준비 아름다운 admin 패널

### API 지원
<!--lint disable double-link-->
- [django-rest-framework](https://github.com/encode/django-rest-framework) - Django의 웹 API.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) - 백엔드 및 프런트엔드가 다른 서버에 있다면, 이 작업을 해야 합니다.
- [dj-rest-auth](https://github.com/iMerica/dj-rest-auth) - Django Rest Framework 인증
- [django-rest-knox](https://github.com/jazzband/django-rest-knox) - django-rest-auth의 인증 모듈.
- [djoser](https://github.com/sunscrapers/djoser) - Django auth의 연구
- [djaq](https://github.com/paul-wolf/djaq) - 강력한 쿼리 언어를 가진 Django 모델에 즉시 원격 API.
- [django-rest-framework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) - DRF용 JSON 웹 토큰.
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) - Django로 웹팩을 투명하게 사용합니다.
- [drf-yasg](https://github.com/axnsan12/drf-yasg) - Django REST Framework 코드에서 실제 Swagger/OpenAPI 2.0 스키마를 자동화했습니다.
- [graphene-django](https://github.com/graphql-python/graphene-django) - Django를 위한 GraphQL.
- [graphene-django-filter](https://github.com/devind-team/graphene-django-filter) - Django를 위한 GraphQL에서 실행 및/또는/not 연산자를 실행하는 고급 필터.
- [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - 속도와 현대 REST, 유형, 동기화, `msgspec`, `pydantic` 그리고 다른 goodies!
- [django-ninja](https://django-ninja.rest-framework.com/) - Django 닌자 - Type annotations를 기반으로 한 빠른 Django REST 프레임 워크.
- [django-tastypie](https://github.com/django-tastypie/django-tastypie) - 2010년부터 Django 앱에 대한 맛있는 API 만들기.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Django REST 프레임 워크 용 Sane 및 유연한 OpenAPI 3 스키마 생성.
- [django-webhook](https://github.com/danihodovic/django-webhook) - 플러그 앤 플레이 Django 앱은 모델 변경에 webhooks를 전송합니다.
- [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - 현대개발을 위해 설계된 GraphQL 라이브러리인 Strawberry와 Django 통합
<!--lint enable double-link-->

### Async의 장점
- [channels](https://github.com/django/channels/) - Django의 동기화 지원

### 뚱 베어
- [django-cachalot](https://github.com/noripyt/django-cachalot) - Django ORM 쿼리를 캐치하고 자동으로 비활성화합니다.
- [django-cacheops](https://github.com/Suor/django-cacheops) - 자동 granular 이벤트 구동 무효로 슬릭 ORM 캐시.

### 이름 *
- [django-extensions](https://github.com/django-extensions/django-extensions/) - 사용자 정의 관리 확장, notably `runserver_plus` · `shell_plus`.
- [django-click](https://github.com/django-commons/django-click) - Django 관리 명령 작성 [click CLI library](https://click.palletsprojects.com).
- [django-dbbackup](https://github.com/Archmonger/django-dbbackup) - 관리 명령은 백업을 돕고 프로젝트 데이터베이스 및 미디어 파일을 복원합니다.
- [django-liquidb](https://github.com/Gusakovskiy/django-liquidb) - Django 애플리케이션은 마이그레이션 관리와 db 방식의 변경을 단순화합니다.
- [django-migration-zero](https://github.com/ambient-innovation/django-migration-zero/) - "migration zero" 패턴의 홀리스틱 구현 Django 덮음 로컬 변경 및 생산 데이터베이스 조정.
- [django-typer](https://github.com/django-commons/django-typer) - Django 관리 명령 작성 [Typer CLI library](https://typer.tiangolo.com).

### 제품 설명
<!--lint disable double-link-->
- [confidential](https://github.com/candidco/confidential) - 구성 및 비밀 관리 ( CLI 지원).
- [django-environ](https://github.com/joke2k/django-environ) - 환경 변수.
- [django-split-settings](https://github.com/wemake-services/django-split-settings) - 여러 설정 파일을 구성합니다.
- [django-constance](https://github.com/jazzband/django-constance) - Django 앱은 Django 관리자 앱과 통합된 플러그인(Redis and Django Model 백엔드 내장)에서 동적 설정을 저장하는 Django 앱입니다.
- [django-configurations](https://github.com/jazzband/django-configurations) - Python 클래스의 composability에 의존하여 Django 프로젝트 구성을 용이하게 하고, 다음의 원칙을 준수합니다. [the twelve-factor app](https://12factor.net/config).
- [dynaconf](https://www.dynaconf.com/django/) - Dynaconf는 여러 소스 (다중 파일 형식, env vars, redis, vault, etcd)에서 django 설정을로드하고 비밀을 관리하며, 다음의 다른 합병 전략을 허용합니다. [the twelve-factor app](https://12factor.net/config).
- [django-extra-settings](https://github.com/fabiocaccamo/django-extra-settings) - config 및 django admin을 사용하여 추가 설정을 관리합니다.
- [django-removals](https://github.com/ambient-innovation/django-removals/) - 편리한 시스템 체크를 통해 deprecated 설정 변수를 감지
- [environs](https://github.com/sloria/environs) - 단순 환경 변수 파싱과 함께 제공 [Django helper](https://github.com/sloria/environs#usage-with-django) 추가 패키지를 설치합니다.
<!--lint enable double-link-->
- [django-classy-settings](https://github.com/funkybob/django-classy-settings) - Class-based settings to keep your environment in order, 쉽게 접근 할 수있는 환경 변수.
- [django-content-settings](https://github.com/occipital/django-content-settings) - Django admin 패널에서 직접 편집 가능한 형식 변수를 쉽게 만들 수 있습니다.

### 콘텐츠 관리 시스템
<!--lint disable double-link-->
- [wagtail](https://github.com/wagtail/wagtail) - Django 콘텐츠 관리 시스템 (CMS). 이름 * [awesome-wagtail](https://github.com/wagtail/awesome-wagtail) 너무.
- [mezzanine](https://github.com/stephenmcd/mezzanine) - CMS 프레임 워크.
- [django-cms](https://github.com/django-cms/django-cms) - Django를 위한 CMS.
- [feincms](https://github.com/feincms/feincms) - 확장 가능한 Django 기반 CMS.
- [puput](https://github.com/APSL/puput) - Wagtail의 블로그 앱 기능.
<!--lint enable double-link-->

### 데이터베이스 커넥터
- [djongo](https://github.com/doableware/djongo) - Django 및 MongoDB 데이터베이스 커넥터.

### 공급 능력
- [Wireup](https://github.com/maldoinc/wireup) - Django에 대한 의존성 주입

### 전자상거래
- [saleor](https://github.com/saleor/saleor) - GraphQL 기반 Django 전자 상거래 플랫폼.
- [django-oscar](https://github.com/django-oscar/django-oscar) - Django의 도메인 구동 전자 상거래.

### 한국어
<!--lint ignore awesome-list-item-->
- [django-markdownx](https://github.com/neutronX/django-markdownx) - Django에 내장된 종합 Markdown 플러그인.
- [django-markdown-editor](https://github.com/agusmakmun/django-markdown-editor) - 최고 Django Markdown 편집기, 부트 스트랩 및 Semantic-UI 지원.
- [django-business-logic](https://github.com/dgk/django-business-logic) - Django의 Visual DSL 프레임워크.
- [django-summernote](https://github.com/lqez/django-summernote) - Summernote는 간단한 WYSIWYG 편집기입니다.
- [django-tinymce](https://github.com/jazzband/django-tinymce) - TinyMCE 통합 Django.
- [django-prose](https://github.com/withlogicco/django-prose) - 콘텐츠 제작을위한 경량 편집기.
- [django-ace](https://github.com/django-ace/django-ace) - Django에 대한 ACE 통합

### 파일/이미지
- [django-cleanup](https://github.com/un1t/django-cleanup) - 지역 및 원격 파일에 대한 Zero 구성 파일 / 이미지 제거.
- [django-imagekit](https://github.com/matthewwithanm/django-imagekit) - 썸네일, 흑백, 사이즈의 이미지를 처리하는 Django 앱
- [django-pictures](https://github.com/codingjoe/django-pictures) - AVIF 및 WebP와 같은 현대 코드를 사용하여 책임있는 크로스 브라우져 이미지 라이브러리.
- [sorl-thumbnail](https://github.com/jazzband/sorl-thumbnail) - Django를 위한 Thumbnails.

### 이름 *
- [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms/) - DRY Django 형태.
- [django-floppyforms](https://github.com/jazzband/django-floppyforms) - 폼 렌더링의 전체 제어.
- [django-formtools](https://github.com/jazzband/django-formtools) - 이전 양식과 다단계 양식의 경우, 이전에 Django의 일부는 1.8까지입니다.
- [django-widget-tweaks](https://github.com/jazzband/django-widget-tweaks) - 템플릿에서 Tweak 양식 필드 렌더링.
- [django-autocomplete-light](https://github.com/yourlabs/django-autocomplete-light) - autocompletion 를 형태로 추가하십시오.

### 풀 스택 프레임
- [Django LiveView](https://github.com/Django-LiveView/liveview) - Django 템플릿을 사용하여 동적, 민감하는 인터페이스 서버를 만드는 프레임 워크. WebSocket을 통한 실시간 업데이트로,
- [Django-Bridge](https://github.com/kaedroho/django-bridge) - Django 애플리케이션의 React frontends를 구축하는 간단한 방법.
- [ReactPy](https://github.com/reactive-python/reactpy) - React이지만, Python에 있습니다. Python을 Django 템플릿으로 동적 렌더링 [ReactPy-Django module](https://github.com/reactive-python/reactpy-django).
- [Reactor](https://github.com/edelvalle/reactor/) - 피닉스 라이브뷰, 하지만 Django.
- [Sockpuppet](https://sockpuppet.argpar.se/) - Django 툴링을 사용하여 반응적인 응용 프로그램을 구축하면 이미 알고 사랑합니다.
- [Unicorn](https://www.django-unicorn.com/) - 정상적인 Django 보기를 진보적으로 향상시킨 민감성 구성 요소 프레임워크로, AJAX는 배경에서 호출하고, 역동적으로 업데이트합니다.

### 주요사업
- [django-data-browser](https://github.com/tolomea/django-data-browser) - Interactive, 사용자 친화적 인 데이터베이스 탐색기.
- [django-filter](https://github.com/carltongibson/django-filter) - Django QuerySets를 기반으로 한 강력한 필터.
- [django-sql-explorer](https://github.com/explorerhq/sql-explorer) - SQL 쿼리를 통해 데이터를 공유합니다.
- [django-tables2](https://github.com/jieter/django-tables2) - HTML 테이블 pagination/sorting.
- [django-maintenance-mode](https://github.com/fabiocaccamo/django-maintenance-mode) - 유지 보수 모드가 켜지면 503 오류 페이지를 표시합니다.
- [django-freeze](https://github.com/fabiocaccamo/django-freeze) - 동적 django 사이트를 하나의 코드로 정적으로 변환합니다.
- [django-nh3](https://github.com/marksweb/django-nh3) - nh3와 Django 통합은 django-bleach의 대안입니다.
- [Weblate](https://github.com/WeblateOrg/weblate) - Weblate는 165개 이상의 국가에서 2500개 이상의 라이브러리 프로젝트 및 회사에서 사용되는 웹 기반 연속 로컬라이제이션 시스템입니다.
- [Django-Classy-Doc](https://github.com/nanuxbe/django-classy-doc) - CCBV와 CDRF의 스타일에 자신의 코드를 문서.
- [iommi](https://github.com/iommirocks/iommi) - HTML 또는 JavaScript를 작성하지 않고 CRUD 응용 프로그램을 개발하는 도구 키트.

### 국제화 (i18n)
- [django-localflavor](https://github.com/django/django-localflavor) - 특정 국가 또는 문화에 유용한 기능의 컬렉션. Django 핵심의 일부입니다.
- [django-modeltrans](https://github.com/zostera/django-modeltrans) - JSONField의 Django 모델 필드를 번역합니다.
- [django-modeltranslations](https://github.com/deschler/django-modeltranslation) -  Django 모델을 등록하는 방법
- [django-rosetta](https://github.com/mbi/django-rosetta) - Rosetta는 Django Admin 내의 프로젝트의 gettext 카탈로그를 읽고 쓰는 UI를 제공합니다.

### 로그아웃
- [django-guid](https://github.com/snok/django-guid) - GUID (Correlation-ID)를 Django 요청의 모든 로그 메시지에 삽입합니다.
- [DRF-API-Logger](https://github.com/vishalanandl177/DRF-API-Logger) - Django Rest Framework 프로젝트의 API Logger.
- [django-structlog](https://github.com/jrobichaud/django-structlog) - django-structlog는 Django 프로젝트를 위한 구조화된 로깅 통합입니다. [structlog](https://www.structlog.org)

### 관련 기사
- [django-prometheus](https://github.com/django-commons/django-prometheus) - Prometheus에 Django 모니터링 미터.
- [django-mixin](https://github.com/adinhodovic/django-mixin) - Django-prometheus를 위한 모니터링 mixin. Grafana 대시보드와 Django의 Prometheus 규칙 세트.

### 회사 소개
- [django-pony-express](https://github.com/ambient-innovation/django-pony-express) - Django의 테스트 스위트를 포함한 Class 기반 이메일.
- [django-anymail](https://github.com/anymail/django-anymail) - Django는 Amazon SES, Brevo (Sendinblue), MailerSend, Mailgun, Mailjet, Postmark, Postal, Resend, SendGrid, SparkPost, Unisender Go 등을 위한 백엔드 및 웹훅을 메일로 전송합니다.

### 모형 분야
- [django-colorfield](https://github.com/fabiocaccamo/django-colorfield) - 색상 필드 django 모델 좋은 색상-picker 위젯.
- [django-model-utils](https://github.com/jazzband/django-model-utils) - Django 모델 믹스 및 유틸리티.
- [django-phonenumber-field](https://github.com/django-phonenumber-field/django-phonenumber-field) - 정상적인 전화 번호를 위한 모형/형 분야.
- [django-streamfield](https://github.com/raagin/django-streamfield) - 일반 Django admin에 대한 간단한 StreamField (Wagtail CMS StreamField 아이디어를 기반으로).

### 모델 번호:
- [django-lifecycle](https://github.com/rsinger86/django-lifecycle) - Declarative 모형 lifecycle 걸이, 신호에 대안.
- [django-mptt](https://github.com/django-mptt/django-mptt) - 수정된 Preorder Tree Traversal; 모델 인스턴스의 나무 작업.
- [django-taggit](https://github.com/jazzband/django-taggit/) - 간단한 모델 태그.
- [django-reversion](https://github.com/etianen/django-reversion) - 모델 인스턴스의 버전 제어.
- [django-simple-history](https://github.com/django-commons/django-simple-history) - 저장소 모델의 역사와 보기/revert changes from the admin.
- [django-polymorphic](https://github.com/django-commons/django-polymorphic) - Django-polymorphic은 Django 프로젝트에서 상속 모델을 활용합니다.
- [django-recurrence](https://github.com/jazzband/django-recurrence) - Django에서 일하는 재순환을 위한 유틸리티.
- [django-treenode](https://github.com/fabiocaccamo/django-treenode) - 나무 기반 재료에 대한 Abstract model/admin.
- [django-auto-prefetch](https://github.com/adamchainz/django-auto-prefetch) - 자주 묻는 질문

### - 연혁
- [django-perf-rec](https://cur.at/GHUO6cn?m=web) - Django 코드의 성능에 대한 자세한 기록을 유지하십시오.
- [New Relic](https://newrelic.com/python/django) - 시간 미들웨어, 전망, SQL 쿼리.
- [Scout](https://scoutapm.com/docs/python/django) - 자동 N+1 탐지를 가진 시간 미들웨어, 템플렛 연출 및 SQL 쿼리.
- [django-silk](https://github.com/jazzband/django-silk) - HTTP 요청 및 데이터베이스 쿼리의 라이브 프로파일링 및 검사.
- [py-spy](https://github.com/benfred/py-spy) - Python 프로그램에 대한 샘플링 프로파일러.
- [pyinstrument](https://github.com/joerick/pyinstrument) - Python, Django, Flask, FastAPI에 대한 스택 프로파일러를 호출합니다.
- [django-zeal](https://github.com/taobojlen/django-zeal) - 사용자 친화적 오류 메시지로 N+1 쿼리를 감지

### 제출
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions) - Django 앱의 역할 기반 권한 관리.
- [django-guardian](https://github.com/django-guardian/django-guardian) - Django의 객체 권한 당.
- [django-rules](https://github.com/dfunckt/django-rules) - Django의 배경에서 만들어진 객체 수준의 권한을 제공하는 작고 강력한 앱.

### 제품정보
- [django-haystack](https://github.com/django-haystack/django-haystack) - Django 모듈 검색
- [django-watson](https://github.com/etianen/django-watson) - 풀 텍스트 검색 플러그인.
- [django-admin-search](https://github.com/shinneider/django-admin-search) - django 관리자용 Modal 필터.
- [django-elasticsearch-dsl](https://github.com/django-es/django-elasticsearch-dsl) - Django에 대한 Elasticsearch DSL 통합.

### 검색 엔진 최적화
- [django-check-seo](https://github.com/kapt-labs/django-check-seo) - 페이지의 SEO를 확인합니다.

### 보안 보안
- [django-csp](https://github.com/mozilla/django-csp) - 더 보기 [Content-Security-Policy](http://www.w3.org/TR/CSP/) Django에 대한 헤더
- [django-feature-policy](https://github.com/adamchainz/django-permissions-policy) - 초안 보안 HTTP 헤더 설정 `Feature-Policy` Django 앱에서
- [django-protected-media](https://github.com/cobusc/django-protected-media) - 보호된 패션에 민감한 미디어 관리.
- [DJ Checkup](https://djcheckup.com) - 배포된 Django 사이트에 여러 체크를 실행하여 일반적인 보안 실수를 확인합니다.

### 정적 자산
- [django-storages](https://github.com/jschneier/django-storages) - Django의 여러 사용자 정의 스토리지 백엔드를 지원하는 단일 라이브러리.
- [django-compressor](https://github.com/django-compressor/django-compressor/) - JavaScript/CSS를 단일 캐시 파일로 압축합니다.
- [easy-thumbnails](https://github.com/SmileyChris/easy-thumbnails) - Django의 이미지 썸네일
- [whitenoise](https://github.com/evansd/whitenoise) - Python 웹 사이트에 대한 간단한 정적 파일.

### 작업 큐
- [django-q2](https://github.com/django-q2/django-q2) - Django를 위한 다중처리 분산 작업 큐.
- [django-rq](https://github.com/rq/django-rq) - Redis Queue에 대한 통합.
- [django-redis](https://github.com/jazzband/django-redis) - 전체 기능 Redis 캐시 백엔드 Django.
- [celery](https://github.com/celery/celery) - Robust 및 중개인 작업 큐 더 큰, 성능 중심 프로젝트.
- [flower](https://github.com/mher/flower) - Flower는 Celery 클러스터를 모니터링하고 관리하기위한 웹 기반 도구입니다.
- [django-celery-beat](https://github.com/celery/django-celery-beat) - Django의 Admin Panel에 의해 구성된 데이터베이스를 가진 정기적인 작업 스케줄러.
- [celery-exporter](https://github.com/danihodovic/celery-exporter) - Celery 작업의 Prometheus & Grafana 모니터링.
- [django-dramatiq](https://github.com/Bogdanp/django_dramatiq) - 단순성, 신뢰성 및 성능에 중점을 둔 작업 처리 라이브러리.
- [django-celery-results](https://github.com/celery/django-celery-results) - Celery 결과 backend 와 Django.
- [django-tasks](https://github.com/realOrangeOne/django-tasks) - Django의 배경 노동자 및 작업의 참조 구현 및 백업 [DEP 14](https://www.djangoproject.com/weblog/2024/may/29/django-enhancement-proposal-14-background-workers/).
- [huey](https://github.com/coleifer/huey) - Python의 작은 작업 큐, Django 지원과 함께 새로운 `django.tasks` API.
- [django-ox](https://github.com/oxpull/django-ox) - Django의 작업 프레임 워크에 대한 데이터베이스 백업 작업자, 거래 수, retries, 반복 작업, 브로커가 실행되지 않습니다.
- [django-absurd](https://github.com/lincolnloop/django-absurd) - Absurd의 Django 통합, Postgres-native 튼튼한 워크플로우 시스템.

### 한국어
- [django-components](https://github.com/django-components/django-components/) - Django에서 간단한 재사용 가능한 템플릿 구성 요소를 만드는 방법.
- [django-template-partials](https://github.com/carltongibson/django-template-partials/) - Django Template Language에 대한 인라인 부분의 이름을 재사용할 수 있습니다.
- [slippers](https://mitchel.me/slippers/) - Python의 단일 줄을 작성하지 않고 Django에서 재사용 가능한 구성품을 만듭니다.
- [JinjaX](https://jinjax.scaletti.dev/) - Jinja 템플릿에 대한 슈퍼 구성 요소 전원.
- [django-cotton](https://django-cotton.com/) - 뚱 베어 `{% raw %}{%{% endraw %} extends, block, include {% raw %}%}{% endraw %}`, 안녕하세요 `<c-component />`. 현대 UI 구성을 Django에 가져다.
- [htpy](https://htpy.dev/) - htpy는 템플릿 언어없이 일반 파이썬 재미와 효율적인 HTML을 작성하는 라이브러리입니다.
- [django-suspense](https://github.com/paqstd-dev/django-suspense) - 아이들이 적재를 완료할 때까지 템플릿의 낙하를 표시하는 쉬운 방법 (React).

### 제품정보
- [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar/) - 디버그 요청/responses에 구성 가능한 패널.
- [pytest-django](https://github.com/pytest-dev/pytest-django) - Django에서 pytest 기능을 사용합니다.
- [django-test-migrations](https://github.com/wemake-services/django-test-migrations) - django schema 및 데이터 마이그레이션을 테스트합니다.
- [django-test-plus](https://github.com/revsys/django-test-plus/) - Django의 기본 TestCase에 유용한 추가.
- [factory-boy](https://github.com/FactoryBoy/factory_boy) - 시험 정착물 보충.
- [django-waffle](https://github.com/django-waffle/django-waffle) - Django의 특징 플립퍼.
- [model-bakery](https://github.com/model-bakers/model_bakery) - Django를 위한 개체 공장 (레거시 모델 Mommy 프로젝트 이름).
- [django-fakery](https://github.com/fcurella/django-fakery) - Django의 창조 방법의 사용하기 쉬운 구현, Faker에 의해 백업.
- [django-pattern-library](https://github.com/torchbox/django-pattern-library) - Django 템플릿에 대한 패턴 라이브러리 생성기, UI 구성 요소를 테스트하는 데 도움이됩니다.
- [storybook-django](https://github.com/torchbox/storybook-django) - 스토리북과 더불어 Django UI 구성품 개발

### 사이트 맵
- [dj-database-url](https://github.com/jazzband/dj-database-url) - 데이터베이스 URL.
- [urlman](https://github.com/andrewgodwin/urlman) - Django 모델의 URL을 할 수있는 좋은 방법.
- [django-robots](https://github.com/jazzband/django-robots) - 로봇을 관리하는 기본 Django 응용 프로그램입니다. 로봇 제외 프로토콜을 따르는 txt 파일은 Django Sitemap contrib 앱을 보완합니다.
- [django-redirects](https://github.com/fabiocaccamo/django-redirects) - 그들은, 가득 차있는 통제로 이어야 합니다.

### 이름 *
- [django-allauth](https://github.com/pennersr/django-allauth/) - Social auth를 포함한 사용자 등록 개선
- [django-allauth-ui](https://github.com/danihodovic/django-allauth-ui/) - django-allauth에 대한 더 좋은 템플릿.
- [django-improved-user](https://github.com/jambonrose/django-improved-user) - Django 사용자 정의 이메일. ID 및 인증 모범 사례를 따르십시오.
- [django-organizations](https://github.com/bennylope/django-organizations/) - Django 프로젝트의 다중 사용자 계정.
- [django-cas-ng](https://github.com/django-cas-ng/django-cas-ng) - Django-cas-ng은 Django CAS (Central Authentication Service) 1.0/2.0/3.0 클라이언트 라이브러리로 SSO(Single Sign On) 및 Single Logout(SLO)를 지원합니다.
- [django-guest-user](https://github.com/julianwachholz/django-guest-user) - 방문자는 정기적으로 사용자와 나중에 등록 할 수 있습니다.

### 이름 *
- [django-braces](https://github.com/brack3t/django-braces) - 재사용할 수 있는, 일반적인 mixins.
- [django-easy-audit](https://github.com/soynatan/django-easy-audit) - 사용자의 행동을 추적합니다.
- [django-extra-views](https://github.com/AndrewIngram/django-extra-views) - 추가 클래스 기반 일반보기.
- [django-stronghold](https://github.com/mgrouchy/django-stronghold) - Django 보기 기본 로그인_이름 *
- [neapolitan](https://github.com/carltongibson/neapolitan) - Django의 빠른 CRUD 조회

## 개발자 도구

Django 프로젝트를 개발하는 데 도움이 되는 독립 도구.

### 한국어
- [curlylint](https://www.curlylint.org/) - Jinja, Nunjucks, Django 템플릿, Twig, Liquid를 위한 실험 HTML 템플릿 리딩.
- [djhtml](https://github.com/rtts/djhtml) - Django/Jinja 템플릿 indenter.
- [djlint](https://www.djlint.com/) - Lint & 형식 HTML 템플릿.

### 정적 분석
- [django-orm-lens](https://github.com/FROWNINGdev/django-orm-lens) - 모델 레벨 정적 분석: ER 다이어그램, N+1 탐지, 스키마 편류 및 CI의 폭발 반경, 데이터베이스 또는 Django 부팅없이.

## Python 패키지

_Django와 잘 작동하는 Python 패키지의 짧은 목록._

- [black](https://github.com/psf/black) - Python 코드 형식기를 사용하지 마십시오.
- [coveragepy](https://github.com/coveragepy/coveragepy) - Code 적용 측정.
- [faker](https://github.com/joke2k/faker) - Faker는 가짜 데이터를 생성하는 Python 패키지입니다.
- [pillow](https://github.com/python-pillow/Pillow) - Python 이미징 라이브러리.
- [pytest](https://github.com/pytest-dev/pytest/) - 테스트 프레임 워크.
- [python-decouple](https://github.com/HBNetwork/python-decouple) - 코드에서 설정의 엄격한 분리.
- [python-slugify](https://github.com/un33k/python-slugify) - unicode slugs를 반환합니다.
- [sentry-python](https://github.com/getsentry/sentry-python) - 오류 보고 SDK.
- [python-socketio](https://github.com/miguelgrinberg/python-socketio) - 소켓의 Python 구현. IO 정보_ 실시간 클라이언트 및 서버. [(create Socket.io Django server instance)](https://python-socketio.readthedocs.io/en/latest/server.html?highlight=django#creating-a-server-instance)
- [Ruff](https://github.com/astral-sh/ruff) - Rust에서 작성된 매우 빠른 Python linter 및 code formatter.

## 지원하다

### 공식 자료
<!--lint ignore double-link-->
- [Project Website](https://www.djangoproject.com/) - 공식 Django 웹사이트
- [Documentation](https://docs.djangoproject.com/en/dev/) - 모든 Django 버전의 종합 문서.
- [Polls Tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/) - Django 내부를 학습하면서 polls 튜토리얼을 구축하십시오.
- [Source Code](https://github.com/django/django/) - GitHub에서 호스팅

### 교육과정
- [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - 블로그 앱을 구축하는 기능 기반 레이아웃을 사용합니다.
- [LearnDjango](https://learndjango.com/) - Django 및 Django REST Framework의 튜토리얼 및 프리미엄 코스.
- [Adam Johnson](https://adamj.eu/tech/) - Adam은 Django의 기술 이사회에서 정기적으로 튜토리얼을 작성합니다.
- [Photon Designer - Django tutorials](https://photondesigner.com/articles) - Django 튜토리얼 Tom Dekan은 Django 앱을 구축하는 방법 - Django와 인스턴트 메신저를 구축하는 방법, 즉각적인 검색을 추가하여 Google Drive를 데이터베이스로 사용합니다. 자주 묻는 질문
- [TestDriven](https://testdriven.io/blog/) - Docker, Payment 등과 같은 주제에 여러 Django-specific 튜토리얼이 있습니다.
- [Classy Class-Based Views](https://ccbv.co.uk/) - 각 일반적인 클래스 기반 보기에 대한 방법/프로듀서/attributes의 상세한 설명.
- [Classy Django REST Framework](http://www.cdrf.co) - DRF 클래스 기반 레이아웃 및 serializers에 대한 방법 / 특성에 대한 자세한 설명.
- [Simple is Better than Complex](https://simpleisbetterthancomplex.com/) - Django에 대한 많은 튜토리얼과 팁을 가진 웹 사이트를 정기적으로 업데이트했습니다.
- [Full Stack Python's Django Page](https://www.fullstackpython.com/django.html) - Django 철학의 설명과 다른 자원과 튜토리얼에 대한 링크.
- [RealPython](https://realpython.com/tutorials/django/) - Django의 많은 고품질 튜토리얼.
- [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) - lending library 앱을 만듭니다.
- [Matt Layman](https://www.mattlayman.com) - Django 주제에 대한 정기적인 튜토리얼과 딥 디브.
- [Django Styleguide](https://github.com/HackSoftware/Django-Styleguide) - Django의 스타일 가이드는 모범 사례와 예입니다.
- [Django Template Tags and Filters](https://www.djangotemplatetagsandfilters.com/) - Django의 57 내장 템플릿 필터 및 27 템플릿 태그에 추가된 문서.
- [Django for Everybody](https://www.dj4e.com/) - Django에 초점을 맞춘 webdev 초보자를위한 완벽한 과정.
- [CS50W](https://cs50.harvard.edu/web/2020/) - Harvard의 University introductory 과정은 웹 개발을 위해 Django를 백엔드 프레임워크로 설명합니다.
- [Better Simple](https://www.better-simple.com/blog/django/) - Tim Schilling의 기사 Django 개발, 모범 사례 및 Django 생태계에 대한 기사.

### - 연혁
<!--lint disable double-link-->
- [Django Forum](https://forum.djangoproject.com/) - 공식 Discourse 보드.
- [Community Page](https://www.djangoproject.com/community/) - 커뮤니티 블로그 게시물, 직업 및 더 많은 피드를 특징으로합니다.
- [Local Django Communities Page](https://www.djangoproject.com/community/local/) - 세계 각국의 현지 이벤트를 제공합니다.
- [Django Users Google Group](https://groups.google.com/forum/#!forum/django-users/) - 자주 묻는 질문/answers
- [Developers Google Group](https://groups.google.com/forum/#!forum/django-developers/) - Django 자체에 기여합니다.
- [Mastodon](https://fosstodon.org/@django) - 업데이트, 보안 수정 등 공식 발표
- [X (formerly Twitter)](https://x.com/djangoproject/) - 업데이트, 보안 수정 등 공식 발표
- [Discord Server](https://discord.com/invite/xcRH6mN4fa) - Django Discord 커뮤니티
- IRC 채널 - irc://irc.freenode.net/django에서 다른 Django 사용자와 채팅하세요.
- [Djangonaut Space](https://djangonaut.space) - Django 커뮤니티를 위한 무료 피어링 프로그램으로 사람들이 오픈 소스 기여의 우주로 진출합니다.
<!--lint enable double-link-->

### 컨퍼런스

- [DjangoCon US](https://djangocon.us/) ([YouTube Channel](https://www.youtube.com/channel/UC0yY6a79pPY9J0ShIHRf6yw))
- [DjangoCon Europe](https://djangocon.eu/) ([YouTube Channel](https://www.youtube.com/user/djangoconeurope))
- [DjangoCon AU](https://djangocon.com.au/)
- [DjangoCon Africa](https://djangocon.africa/)
- [Django Day Copenhagen](https://djangoday.dk/) ([YouTube Channel](https://www.youtube.com/@djangodanmark))
- [PyCon US](https://us.pycon.org/) ([YouTube Channel](https://www.youtube.com/channel/UCsX05-2sVSH7Nx3zuk3NYuQ))
- [PyCon Australia](https://pycon-au.org/) ([YouTube Channel](https://www.youtube.com/user/PyConAU))
- [Euro Python](https://europython.eu/) ([YouTube Channel](https://www.youtube.com/user/PythonItalia))
- [Django Under the Hood](https://www.youtube.com/channel/UC9T1dhIlL_8Va9DxvKRowBw/videos)
- [DjangoCongress JP](https://djangocongress.jp/) ([YouTube Channel](https://www.youtube.com/@djangocongressjp3623))
- [Complete listing of all PyCons globally](https://pycon.org)

### 회사연혁

- [Django Job Board](https://djangojobboard.com/) - Django job board도 다른 구인 게시판을 구성합니다. Django 뉴스 작업.
- [Django Jobs](https://djangojobs.net) - Django 구인정보 - Django Python
- [Python.org Job Boards](https://www.python.org/jobs/) - Django를 독점적으로 제공하지 않는 동안이 작업 보드는 공식 파이썬 웹 사이트에서 호스팅되며 Python 및 Django 관련 작업 기회를 제공합니다.

### 뉴스레터

- [Django News](https://django-news.com) - 발표, 기사, 프로젝트 및 이야기에 대한 주간 뉴스 레터.

### 팟캐스트

- [Django Chat](https://djangochat.com/) - William Vincent와 Django Fellow Carlton Gibson의 주간 팟 캐스트는 핵심 Django 개념과 일반 투숙객의 토론을 통해 진행됩니다.
- [Django Brew](https://djangobrew.com/) - Adam Hill과 Sangeeta Jadoonanan의 Django 웹 프레임 워크에 대한 재미있는 카페인 파워 팟 캐스트.
- [TalkPython](https://talkpython.fm/) - Django에 대한 occasssional 에피소드를 가진 주요한 Python podcast.
- [Running in Production](https://runninginproduction.com/tags/django) - 더 이상 활동하지, 하지만 Django 기술 스택 에피소드의 큰 backlog.

### 이름 *

- [DjangoTV](https://djangotv.com) - Django Conference 비디오 및 튜토리얼의 소스.
- [PyVideo](https://pyvideo.org) - PyVideo는 Python 관련 미디어의 인덱스입니다.

### 한국어
in-print 서적의 전체 목록의 경우, 체크 아웃 [DjangoBook.com](https://djangobook.com/).

_장고 5_
- [Django for APIs, Fifth Edition](https://learndjango.com/courses/django-for-apis/)
- [Boost Your Django DX](https://adamchainz.gumroad.com/l/byddx)
- [Django 5 By Example](https://www.packtpub.com/en-us/product/django-5-by-example-9781805125457)
- [Django in Action](https://www.manning.com/books/django-in-action)
- [Django for Beginners, Fifth Edition](https://learndjango.com/courses/django-for-beginners/)

## 이름 *

### PaaS (플랫폼-as-a-Service)
- [Divio](https://www.divio.com)
- [Fly](https://fly.io)
- [Google Cloud](https://cloud.google.com/python/django/)
- [Heroku](https://www.heroku.com)
- [Microsoft Azure](https://azure.microsoft.com/en-us/develop/python/)
- [Upsun](https://upsun.com)
- [PythonAnywhere](https://www.pythonanywhere.com)
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Vercel](https://vercel.com/home)

### IaaS(Infrastructure-as-a-Service)
- [Digital Ocean](https://www.digitalocean.com)
- [Linode](https://www.linode.com)
- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Hetzner](https://www.hetzner.com)

### Deployment 서비스
_앱을 다른 곳에서 빌릴 수 있는 호스팅 서비스._
- [Appliku](https://appliku.com) - DigitalOcean, Hetzner, AWS 및 Linode에 서버를 위한 Django-focused 배포 서비스.
- [DeployHQ](https://www.deployhq.com) - Git에서 SSH, SFTP 또는 S3를 통해 서버로 배포합니다.

### 셀프 호스팅 배포
_앱을 서버로 배포하는 소스 도구를 엽니다._
- [Coolify](https://coolify.io) - Docker 앱 및 데이터베이스에 대한 웹 UI를 갖춘 셀프 호스팅 PaaS는 옵션 유료 클라우드 제어 비행기와 함께 제공됩니다.
- [Dokploy](https://dokploy.com) - 웹 UI를 사용하여 자체 호스팅 된 PaaS는 Docker 및 Traefik에 내장되어 옵션 유료 클라우드 제어 비행기가 있습니다.
- [CapRover](https://caprover.com) - Self-hosted PaaS with web UI and one-click apps, Docker Swarm에 내장.
- [Kamal](https://kamal-deploy.org) - Basecamp에서 SSH 이상의 모든 서버에 배포합니다.
- [Dokku](https://dokku.com) - Docker-powered PaaS with Heroku-style git 푸시 배포.
- [Piku](https://github.com/piku/piku) - Tiny Heroku-style PaaS for git 푸시는 단일 서버에 배포합니다.

## 프로젝트

### 보일러판
- [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django/) - 가득 찬 시동기 프로젝트, 높게 customizable.
- [django-base-site](https://github.com/epicserve/django-base-site/) - Django 사이트가 많은 일반적인 제3자 패키지를 미리 설치했습니다.
- [djangox](https://github.com/wsvincent/lithium/) - 배터리는 Pip, Pipenv, Docker에 대한 스타터 프로젝트를 포함했습니다.
- [django-docker-template](https://github.com/amerkurev/django-docker-template) - Postgres, Gunicorn, Traefik (자동 갱신 Let's Encrypt)를 사용하여 Django를 도왔습니다.
- [django-startproject](https://github.com/jefftriplett/django-startproject) - Django는 배터리로 프로젝트 템플릿을 시작합니다.
- [wemake-django-template](https://github.com/wemake-services/wemake-django-template/) - Bleeding-edge Django 템플릿은 코드 품질과 보안에 중점을 둡니다.
- [cookiecutter-vue-django](https://github.com/ilikerobots/cookiecutter-vue-django) - 장고 + Vue starter 프로젝트는 Vue SFCs & Django 템플릿을 융합했습니다.
- [sidewinder](https://github.com/stribny/sidewinder/) - Django 스타터 키트는 좋은 기본, 개발자 경험 및 배포에 중점을 둡니다.
- [Falco](https://github.com/falcopackages/falco-cli) - Django 개발자 경험 향상: 현대 Django Developer의 CLI 및 가이드.
- [BH2](https://codeberg.org/trey/bh2) - 새로운 Django 사이트를 Djiffy에서 시작하십시오.
- [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate) - Django, React, Tailwind, 웹팩 프로젝트 보일러판

### 오픈 소스 프로젝트
- [Blog app with users and forms](https://github.com/wsvincent/djangoforbeginners/tree/master/ch7-blog-app-with-users/)
- [Newspaper app with custom user model, full user auth](https://github.com/wsvincent/djangoforbeginners/tree/master/ch15-comments)
- [Behavior-Driven Development with Aloe](https://github.com/testdrivenio/django-aloe-bdd/)
- [Image Sharing Blog](https://github.com/MeNsaaH/soMedia)
- [Bootcamp: An enterprise social network](https://github.com/vitorfs/bootcamp)
- [Zulip](https://github.com/zulip/zulip/) - 오픈 소스 팀 채팅.
- [django-job-portal](https://github.com/manjurulhoque/django-job-portal) - Django를 사용한 구인 포털 신청
- [Built with Django](https://builtwithdjango.com) - Django 프로젝트 목록
- [PostHog](https://github.com/PostHog/posthog) - 오픈 소스 제품 분석.
- [HyperKitty](https://gitlab.com/mailman/hyperkitty) - GNU Mailman v3 아카이브에 액세스하는 웹 인터페이스.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Python 및 Django에서 작성된 Cron 모니터링 도구.
- [Flagsmith](https://github.com/Flagsmith/flagsmith) - 오픈 소스 기능 Flagging, Remote Config 및 AB 테스트.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - 자동화된 PDF 파싱, 벡터 embedding, LLM 통합을 결합한 엔터프라이즈급 문서 분석 플랫폼.
- [Baserow](https://github.com/baserow/baserow) - Django 및 Vue.js와 내장된 소스 코드 데이터베이스 및 Airtable 대안을 엽니다.
- [Django CRM Admin](https://github.com/DjangoCRM/django-crm) - 오픈 소스 Python CRM은 Django Admin Site에서 완전히 구축되었습니다.
- [linkding](https://github.com/sissbruecker/linkding) - 자체 호스팅 책갈피 매니저는 Docker를 사용하여 최소한, 빠르고 쉽게 설정하도록 설계되었습니다.
- [pythonic-news](https://github.com/sebst/pythonic-news) - 해커 뉴스 복제.
- [Revel](https://github.com/letsrevel/revel-backend) - 조직, 설문지 기반 참석자 심사, QR 체크인 및 Stripe 결제와 함께 셀프 호스팅 이벤트 관리 및 티켓 플랫폼.
- [venueless](https://github.com/venueless/venueless) - 라이브 스트림, 채팅, 비디오 룸과 온라인 및 하이브리드 이벤트 플랫폼, pretix 팀에서.
- [pretix](https://github.com/pretix/pretix) - 회의, 축제, 콘서트 및 기타 행사에 대한 티켓 숍 응용.
- [pretalx](https://github.com/pretalx/pretalx) - 종이, 스케줄링 및 스피커 관리에 대한 전화 회의 계획 도구.
- [ioe](https://github.com/zhtyyx/ioe) - 셀프 호스팅 소매점 관리 재고, 판매 체크 아웃 및 회원 계정.

## 장고 REST 관련 기사

_Django로 웹 API를 구축하는 가장 인기있는 방법._

### DRF 자원

<!--lint disable double-link-->
- [Official Documentation](https://www.django-rest-framework.org/)
- [DRF Source Code](https://github.com/encode/django-rest-framework)
- [awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)
<!--lint enable double-link-->

### DRF 자습서

<!--lint ignore double-link-->
- [Official REST Framework - A Beginner's Guide](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)
- [Building APIs with Django and DRF](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/)
- [DRF with React](https://www.valentinog.com/blog/drf/)
- [Making React and Django play well together](https://fractalideas.com/blog/making-react-and-django-play-well-together/)

## 채용정보

_Wagtail, 현대 웹 사이트의 강력한 CMS._

### Wagtail 자료
<!--lint disable double-link-->
- [Official website](https://wagtail.org/)
- [Developer documentation](https://docs.wagtail.org/en/stable/)
- [User documentation](https://guide.wagtail.org/en-latest/)
- [Wagtail Source Code](https://github.com/wagtail/wagtail/)
- [awesome-wagtail](https://github.com/wagtail/awesome-wagtail)
- [This week in Wagtail](https://wagtail.org/this-week-in-wagtail/) - A (most) Wagtail 핵심 팀의 업데이트와 주간 이메일.
- [Wagtail Space](https://www.wagtail.space/) - 전세계 Wagtail 컨퍼런스.
- [Wagtail events](https://wagtail.org/events/) - 온라인 및 인-person Wagtail 이벤트.
<!--lint enable double-link-->

이 목록에서 저장소를 검색하고 검색하는 편리한 방법은 다음과 같습니다. [awesome.lvtd.dev/lists/awesome-django](https://awesome.lvtd.dev/lists/awesome-django/).
