# 엄선한 데이터베이스 도구 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 데이터베이스 도구의 커뮤니티 구동 목록

여기서 DBA, DevOps, Developers 및 단순한 필사자를 위한 데이터베이스와 작업하는 멋진 실험 도구에 대한 정보를 수집합니다.

자신의 db-tools 또는 당신의 마음에 드는 제삼자 db-tools에 관하여 정보를 추가하게 자유롭게 느끼십시오.

관련 기사 `awesome-db-tools` and thoughts/news about databases/tools/SQL 팔로우 [@GraminMaksim](https://twitter.com/GraminMaksim)

## 이름 *
- [₢ 킹](#ide)
- [사이트맵](#gui)
- [제품정보](#cli)
- [사이트맵](#schema)
  - [기타](#changes)
  - [코드 생성](#code-generation)
  - [다이어그램](#diagrams)
  - [회사연혁](#documentations)
  - [제품정보](#design)
  - [샘플](#samples)
- [API 지원](#api)
- [앱 플랫폼](#application-platforms)
- [지원하다](#backup)
- [구독하기](#cloning)
- [모니터링/전략/Performance](#monitoringstatisticsperformance)
  - [팟캐스트](#prometheus)
  - [스낵 바](#zabbix)
- [제품정보](#testing)
- [HA / 실패 / 스윙](#hafailoversharding)
- [쿠버네티스](#kubernetes)
- [구성 조정](#configuration-tuning)
- [다운로드](#devops)
- [관련 기사](#reporting)
- [관련 상품](#distributions)
- [보안 보안](#security)
- [사이트맵](#sql)
  - [분석기](#analyzers)
  - [코드 생성기](#code-generators)
  - [제품정보](#extensions)
  - [프레임 워크](#frameworks)
  - [파일 형식](#formatters)
  - [(주)](#games)
  - [파리](#parsers)
  - [Über의 SQL](#über-sql)
  - [언어 서버 프로토콜](#language-server-protocol)
  - [한국어](#learning)
  - [(주)](#plan)
  - [스크립트](#scripts)
- [자료실](#data)
  - [관련 기사](#catalog)
  - [제품정보](#lineage) 
  - [Generation/Masking/Subset/수정](#generationmaskingsubsetting)
  - [데이터 Profilers](#data-profilers)
  - [이름 *](#replication) 
  - [더 보기](#compare) 
- [회사 소개](#papers)
- [기계 학습](#machine-learning)

## ₢ 킹
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - 데이터베이스 관리, 제어 및 개발을위한 프리미어 다목적 관리자 도구 💰.
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Database Developers, DBAs 및 Analysts 💰에 대한 생산성 소프트웨어.
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - 강력한 스크립트 및 그리드 기능을 갖춘 분석 및 분석 엔지니어를위한 현대 IDE 💰.
- [Database .net](http://fishcodelib.com/Database.htm) - 20+ 데이터베이스에 대한 지원이 있는 다중 데이터베이스 관리 도구.
- [Database Workbench](https://www.upscene.com/database_workbench/) - Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite 및 NexusDB 💰에 대한 데이터베이스 설계, 개발 및 테스트를위한 완벽한 IDE.
- [DataGrip](https://www.jetbrains.com/datagrip) - Cross-Platform IDE for Databases & SQL by JetBrains 💰 .
- [DataStation](https://github.com/multiprocessio/datastation) - 쉽게 쿼리, 스크립트 및 모든 데이터베이스, 파일 및 API에서 데이터를 시각화합니다.
- [DBeaver](https://github.com/dbeaver/dbeaver) - 무료 범용 데이터베이스 관리자 및 SQL 클라이언트.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - DB 개발, 설계, 관리 및 MySQL, MariaDB, SQL Server, Oracle, PostgreSQL 데이터베이스의 관리 및 다양한 클라우드 서비스 💰의 Multidatabase 솔루션.
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - MySQL 및 MariaDB 데이터베이스 개발, 관리, 관리 및 관리 💰에 대한 유니버설 IDE.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - Oracle 관리, 관리 및 개발 💰에 강력한 IDE.
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - 데이터베이스 관리 및 개발을위한 GUI 도구 및 객체 💰 .
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - SQL Server 개발, 관리, 관리, 데이터 분석 및 보고를 위한 강력한 통합 개발 환경.
- [DBHawk](https://www.datasparc.com/) - Datasparc는 데이터베이스 보안, 데이터베이스 관리, 데이터베이스 관리 및 데이터 분석 기능을 제공합니다.
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - 현대 (JavaScript/Electron Framework), MongoDB의 오픈 소스 IDE. MongoDB 데이터베이스에서 개발, 관리 및 성능 조정을 지원하는 기능이 있습니다.
- [IBExpert](http://www.ibexpert.net/ibe) - Firebird 및 InterBase 💰에 대한 종합 GUI 도구.
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Delphi에서 작성된 MySQL, MSSQL 및 PostgreSQL 관리를위한 경량 클라이언트.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Windows / macOS / Linux에서 인기있는 데이터베이스 (SQLite / MySQL / PostgreSQL / etc)에 대한 AI 전원 SQL 클라이언트 및 관리자 도구, 지원 테이블 디자인, 쿼리, 모델, 동기화, 수출 / 항구 등, 편안하고 재미 있고 개발자 친화적 인 초점.
- [KeepTool](https://keeptool.com) - Oracle Database 개발자, 관리자 및 고급 응용 프로그램 사용자를위한 도구의 전문 스위트. 💰.
- [MySQL Workbench](https://www.mysql.com/products/workbench) - 데이터베이스 건축가, 개발자 및 DBA를 위한 통합된 시각 도구.
- [Navicat](https://www.navicat.com/en/products#navicat) - 동시에 MySQL, MariaDB, SQL Server, Oracle, PostgreSQL 및 SQLite 데이터베이스에 연결할 수 있는 데이터베이스 개발 도구는 단일 애플리케이션 💰 ✡.
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Free, 통합 개발 환경은 Oracle Database의 개발 및 관리가 전통적인 클라우드 배포를 모두 간소화합니다.
- [pgAdmin](https://www.pgadmin.org) - PostgreSQL의 가장 인기있는 기능과 풍부한 오픈 소스 관리 및 개발 플랫폼, 세계에서 가장 진보 된 오픈 소스 데이터베이스.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - pgAdmin3를 위한 장기 지원.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - Oracle Databases의 저장된 프로그램 단위의 개발에 특히 대상이되는 IDE.
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - PostgreSQL 💰에 대한 완전한 강력한 데이터베이스 관리, 관리자 및 개발 도구.
- [Querybook](https://github.com/pinterest/querybook) - Pinterest 오픈 소스 Big Data Querying UI, collocated table metadata 및 간단한 노트북 IDE 인터페이스를 결합.
- [Slashbase](https://github.com/slashbaseide/slashbase) - 당신의 데이터베이스에 대한 오픈 소스 협업 IDE. 데이터베이스에 연결하여 데이터를 검색하고 SQL 명령의 무리를 실행하거나 브라우저에서 팀과 SQL 쿼리를 공유합니다.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - SQL Server 및 Azure SQL Database 의 SQL 인프라 관리에 대한 통합 환경.
- [Toad](https://www.quest.com/toad/) - 개발자, 관리자 및 데이터 분석가를위한 프리미어 데이터베이스 솔루션. 단일 데이터베이스 관리 도구로 복잡한 데이터베이스 변경을 관리 💰.
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - MySQL 및 PostgreSQL 💰에 대한 단순화 된 데이터베이스 개발 도구.
- [TOra](https://github.com/tora-tool/tora) - Oracle, MySQL 및 PostgreSQL dbs에 대한 오픈 소스 SQL IDE.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Valentina DB, MySQL, MariaDB, PostgreSQL 및 SQLite 데이터베이스를 무료로 만들 수 있습니다.
- [WebDB](https://webdb.app) - 무료 효율적인 데이터베이스 IDE. Server Discovery, ERD, Data Generator, AI, NoSQL Structure Manager, Database Versioning 등을 특징으로 합니다.


## 사이트맵
- [Adminer](https://github.com/vrana/adminer) - 단일 PHP 파일에 데이터베이스 관리.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - 무료 오픈 소스 Redis 관리자. Mac, Linux, Windows, Homebrew, Snap, 날개 등에서 사용할 수 있습니다.
- [Antares SQL](https://github.com/antares-sql/antares) - UX에 중점을 둔 현대적이고 빠르고 생산성이 있는 SQL 클라이언트. Mac, Linux 및 Windows에서 사용 가능.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - SQL Server, PostgreSQL, Azure SQL DB 및 SQL DW와 Windows, macOS 및 Linux에서 작업할 수 있는 데이터 관리 도구.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - 오픈 소스 SQL 편집기 및 데이터베이스 관리자는 자신의 임무 진술에 대한 개인 정보 보호 약속.
- [Clidey WhoDB](https://github.com/clidey/whodb) - 모든 SQL, NoSQL, Caches 및 Queues에 대한 차세대 UX를 가진 경량 데이터베이스 탐험가.
- [DbGate](https://github.com/dbgate/dbgate) - MySQL, PostgreSQL, SQL Server, MongoDB, SQLite 및 기타 데이터베이스 관리자. Windows, Linux, Mac 또는 웹 응용 프로그램에서 실행합니다.
- [DB Lens](https://github.com/dblens/app) - 오픈 소스 PostgreSQL GUI - 자동 ER 다이어그램, 내부 DB Insights, Disk Utilisation, Performance Metrics, Index 사용법, 순차 검사 수 및 기타.
- [DbVisualizer](https://www.dbvis.com) - 개발자용 범용 데이터베이스 도구, DBA 및 분석가.
- [JackDB](https://www.jackdb.com) - 모든 데이터에 직접 SQL 액세스, 그것이 살고있는 아무리.
- [Jailer](https://github.com/Wisser/Jailer) - 데이터베이스 설정 및 Relational Data Browsing Tool/Client.
- [Malewicz](https://github.com/mgramin/malewicz) - DB 스키마 탐험 및 성능 분석을위한 또 다른 웹 클라이언트, 그러나 원래 해킹 및 확장에 특히 만들었습니다.
- [MissionKontrol](https://www.missionkontrol.io) - 현대 드래그 & 드롭 admin panel/client with full user permissions for non-technical users.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - MySQL, MariaDB 및 Tarantool의 경우. Linux용으로 개발되었지만 Windows에서 실행할 수 있습니다.
- [OmniDB](https://github.com/OmniDB/OmniDB) - 데이터베이스 관리를위한 웹 도구.
- [Pgweb](https://github.com/sosedoff/pgweb) - PostgreSQL의 웹 기반 데이터베이스 브라우저, 이동 및 macOS, Linux 및 Windows 기계에서 작동합니다.
- [phpLiteAdmin](https://www.phpliteadmin.org) - SQLite3 및 SQLite2 지원 PHP에서 작성된 웹 기반 SQLite 데이터베이스 관리자 도구.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL 및 MariaDB의 웹 인터페이스.
- [psequel](http://www.psequel.com) - 일반적인 PostgreSQL 작업을 신속하게 수행 할 수있는 깨끗하고 간단한 인터페이스를 제공합니다.
- [PopSQL](https://popsql.com) - 당신의 팀을 위한 현대, 공동 SQL 편집기.
- [Postico](https://eggerapps.at/postico) - Mac 용 현대 PostgreSQL 클라이언트.
- [Robo 3T](https://github.com/Studio3T/robomongo) - Shell-centric 크로스 플랫폼 MongoDB 관리 도구.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - macOS용 MySQL/MariaDB 데이터베이스 관리
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - MySQL 및 MariaDB 데이터베이스 작업을위한 빠르고 사용하기 쉬운 Mac 데이터베이스 관리 응용 프로그램입니다.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - 그래픽 인터페이스는 모든 SQLite 기능을 지원합니다.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - SQLite 데이터베이스를보고하기위한 TUI, Go에서 작성.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - 웹 기반 SQL 편집기는 자신의 개인 클라우드에서 실행됩니다.
- [SQLPro](https://www.macpostgresclient.com) - macOS 용 단순하고 강력한 PostgreSQL 관리자.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - JDBC 호환 데이터베이스의 구조를 볼 수 있도록 Java에서 작성된 그래픽 SQL 클라이언트는 테이블에 데이터를 검색, SQL 명령 등을 발행합니다.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - VSCode에 대한 데이터베이스 관리.
- [SQLyog](https://www.webyog.com/product/sqlyog) - MySQL GUI를 사용하기 쉽고 쉽습니다.
- [Tabix](https://github.com/tabixio/tabix) - SQL 편집기 및 오픈 소스 Clickhouse에 대한 간단한 비즈니스 인텔리전스.
- [TablePlus](https://github.com/TablePlus/TablePlus) - 관계 데이터베이스에 대한 현대, 네이티브 및 친절한 GUI 도구 : MySQL, PostgreSQL, SQLite 및 기타.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - 어디서나 PostgreSQL 데이터베이스를 사용하여 부유하고 번개 빠른 AJAX 웹 인터페이스.
- [Query.me](https://query.me) - 노트북 형식으로 협업 SQL 편집기. JINJA를 사용하여 쿼리 결과를 참조하고 데이터를 시각화하고 일정 실행 및 수출을 시작합니다.


## 제품정보
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - IPython 또는 IPython Notebook 내에서 SQL 명령을 발급하기위한 데이터베이스에 연결하십시오.
- [iredis](https://github.com/laixintao/iredis) - AutoCompletion와 Syntax Highlighting를 가진 Redis를 위한 Cli.
- [pgcenter](https://github.com/lesovsky/pgcenter) - PostgreSQL에 대한 최고 같은 관리자 도구.
- [pg_activity](https://github.com/julmon/pg_activity) - PostgreSQL 서버 활동 모니터링을 위한 최상위 애플리케이션.
- [pg_top](https://github.com/markwkm/pg_top) - PostgreSQL의 상단.
- [pspg](https://github.com/okbob/pspg) - PostgreSQL 페이지.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - 위험한 PostgreSQL 마이그레이션 패턴을 위한 Linter. 그것은 PostgreSQL SQL 파일과 원활하게 작동하고 디젤 및 SQLx를 사용하여 프로젝트와 기본적으로 통합합니다.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line(SQL)은 Oracle Database의 무료 명령줄 인터페이스입니다.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - SQLite 데이터베이스 파일을 조작하기위한 CLI 도구 - 데이터 삽입, 실행 쿼리, 인덱스 생성, 전체 텍스트 검색 구성 등.
- [SQLLine](https://github.com/julianhyde/sqlline) - JDBC를 통해 관계 데이터베이스에 SQL을 발급하는 명령행 쉘.
- [usql](https://github.com/xo/usql) - PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server 및 NoSQL 및 비 관계 데이터베이스를 포함한 많은 다른 데이터베이스에 대한 보편적 인 명령 라인 인터페이스!

### 뚱 베어
- [athenacli](https://github.com/dbcli/athenacli) - AWS Athena 서비스에 대한 CLI 도구는 자동 소유권 및 구문 강조를 할 수 있습니다.
- [litecli](https://github.com/dbcli/litecli) - Auto-completion 및 syntax 강조와 SQLite 데이터베이스에 대한 CLI.
- [mssql-cli](https://github.com/dbcli/mssql-cli) - Auto-completion 및 syntax 강조와 SQL Server의 명령행 클라이언트.
- [mycli](https://github.com/dbcli/mycli) - AutoCompletion 및 Syntax Highlighting과 MySQL의 터미널 클라이언트.
- [pgcli](https://github.com/dbcli/pgcli) - Autocompletion 및 구문 강조와 PostgreSQL CLI.
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI with auto-completion and syntax 강조.


## 사이트맵

### 기타
- [2bass](https://github.com/CourseOrchestra/2bass) - idempotent DDL 스크립트의 개념을 사용하는 데이터베이스 구성 코드 도구.
- [Atlas](https://github.com/ariga/atlas) - Inspect 및 데이터베이스 스키마에 변경 적용.
- [Bytebase](https://github.com/bytebase/bytebase) - 팀에 대한 웹 기반, Zero-config, Dependency-free 데이터베이스 스키마 변경 및 버전 제어 도구.
- [flyway](https://github.com/flyway/flyway) - 데이터베이스 마이그레이션 도구.
- [gh-ost](https://github.com/github/gh-ost) - MySQL의 온라인 스키마 마이그레이션.
- [liquibase](https://github.com/liquibase/liquibase) - 추적, 관리 및 데이터베이스 스키마 변경에 대한 데이터베이스 의존 라이브러리.
- [migra](https://github.com/djrobstep/migra) - diff 처럼 하지만 PostgreSQL 스키마.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - PostgreSQL 전용 Node.js 데이터베이스 마이그레이션 관리. (하지만 SQL 표준에 따라 다른 DB에 사용할 수 있습니다 - e.g. CockroachDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - PostgreSQL에서 Zero Downtime schema 변경 및 backfill을 만드는 쉬운 CLI 도구.
- [Prisma Migrate](https://github.com/prisma/migrate) - Declarative Database schema migration tool that use the declarative data modeling syntax to description your database schema.
- [Pyrseas](https://github.com/perseas/Pyrseas) - YAML로 PostgreSQL 데이터베이스 스키마를 설명하는 유틸리티를 제공합니다.
- [Reshape](https://github.com/fabianlindfors/reshape) - 사용하기 쉬운, Postgres를 위한 Zero-downtime schema 이동 공구.
- [SchemaHero](https://github.com/schemahero/schemahero) - 선언 데이터베이스 스키마 관리를위한 쿠버네티스 운영자 (데이터베이스 스키마에 대한 gitops).
- [Skeema](https://github.com/skeema/skeema) - MySQL 및 MariaDB의 순수 SQL 스키마 관리 시스템, 샤딩 및 외부 온라인 스키마 변경 도구 지원.
- [Sqitch](https://github.com/sqitchers/sqitch) - Framework-free 개발 및 신뢰할 수 있는 배포를 위한 Sensible Database-native change management.
- [sqldef](https://github.com/k0kubun/sqldef) - MySQL, PostgreSQL 등의 Idempotent 스키마 관리
- [yuniql](https://github.com/rdagumampan/yuniql) - Yet 또 다른 스키마 버전 및 마이그레이션 도구는 네이티브 .NET 코어 3.0 + 및 희망적으로 더 잘 만들었습니다.

### 코드 생성
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - Infers SQL DDL (데이터 정의 언어) 테이블 데이터에서.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Oracle schema를 내보내기 위한 명령 줄 util은 ddl init 스크립트를 설정하여 undesirable information, 별도의 DDL 다른 파일, 꽤 형식 출력을 필터링합니다.

### 다이어그램
- [Azimutt](https://github.com/azimuttapp/azimutt) - 엔티티티 관계 다이어그램 (ERD) 시각화 도구, 다양한 필터와 입력하여 데이터베이스 스키마를 이해할 수 있습니다.
- [ChartDB](https://github.com/chartdb/chartdb) - 무료 및 오픈 소스 데이터베이스 다이어그램 편집기, 시각화 및 단일 쿼리와 DB를 디자인.
- [DrawDB](https://github.com/drawdb-io/drawdb) - 무료, 간단하고 직관적 인 온라인 데이터베이스 디자인 도구 및 SQL 생성기. 
- [DrawSQL](https://drawsql.app) - SQL Import, AI Generation 및 실시간 팀 협업을 가진 온라인 데이터베이스 스키마 다이어그램 편집기.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - Entity Relation 다이어그램 생성 도구.
- [ERD Lab](https://www.erdlab.io/) - 개발자가 만든 무료 클라우드 기반 기업 관계 다이어그램 (ERD) 도구.
- [Liam ERD](https://github.com/liam-hq/liam) - 데이터베이스 및 ORMs에서 아름답고 쉽게 볼 수있는 오픈 소스 도구.
- [QuickDBD](https://www.quickdatabasediagrams.com/) - 데이터베이스 다이어그램을 빠르게 그리는 간단한 온라인 도구.

### 회사연혁
- [dbdocs](https://dbdocs.io/) - DSL 코드를 사용하여 웹 기반 데이터베이스 문서 작성.
- [DBML](https://github.com/holistics/dbml) - Database Markup Language, 정의 및 문서 데이터베이스 구조를 설계.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - 무료 데이터베이스 schema discovery 및 comprehension 도구.
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Entity Relationship diagram을 포함한 HTML 문서에 데이터베이스를 생성한다.
- [tbls](https://github.com/k1LoW/tbls) - 문서에 대한 CI-Friendly 도구는 Go에서 작성된 데이터베이스입니다.

### 제품정보
- [Database Design](https://github.com/alextanhongpin/database-design) - 강력한 데이터베이스 스키마 설계에 대한 유용한 팁.
- [DBDiagram](https://dbdiagram.io) - 무료, 간단한 도구는 ER 다이어그램을 작성하여 코드를 작성합니다.
- [DbSchema](https://dbschema.com/) - 아웃-of-the-box 스키마 관리, 스키마 문서, 팀의 디자인, 여러 데이터베이스에 배포를 위한 범용 데이터베이스 디자이너. DbSchema는 글쓰기 및 실행 쿼리에 대한 도구와 데이터, 생성 데이터 및 건물 보고서를 탐구합니다.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - 고품질 데이터 모델을위한 쉬운 사용 데이터베이스 모델링 소프트웨어. 데이터 모델링 및 데이터 건축가를위한 완벽한 데이터 모델링 솔루션입니다.
- [Moon Modeler](https://www.datensen.com) - noSQL 및 관계 데이터베이스에 대한 데이터 모델링 도구. Windows, Linux 및 macOS에서 사용할 수 있습니다.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - 고품질 개념, 논리 및 물리적 데이터 모델을 구축하는 데 도움이 강력한 비용 효율적인 데이터베이스 설계 도구.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - 생산성 향상 및 데이터 모델링 작업을 단순화하는 무료 그래픽 도구.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - PostgreSQL을 위해 설계된 데이터 모델링 도구.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - 온라인 SQL 다이어그램 도구.

### 샘플
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Oracle Database의 샘플 스키마.


## API 지원
데이터에 대한 API 구축
- [Datasette](https://github.com/simonw/datasette) - 탐구 및 출판 데이터를 위한 도구.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - 모바일, 웹, IoT 애플리케이션을 위한 오픈 소스 REST API 백엔드.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - 다중 데이터 소스를 단일 GraphQL API로 켭니다.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - 정밀한 곡물 접근 제한을 가진 PostgreSQL에 빠르고, 즉시 순간 GraphQL APIs, 또한 데이터베이스 사건에 webhooks를 방아쇠를 파기.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - JDBC 백업 데이터베이스에 대한 REST API, Java에서 작성된 PostgREST 복제.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - 중간 계층 Java 응용 프로그램, ORDS지도 HTTP (S) 동사 (GET, POST, PUT, DELETE 등) 데이터베이스 거래에 데이터베이스 및 JSON을 사용하여 모든 결과를 반환합니다.
- [Prisma](https://github.com/prismagraphql/prisma) - 실시간 GraphQL API로 데이터베이스를 켭니다.
- [PostGraphile](https://github.com/graphile/postgraphile) - 기존 PostgreSQL 데이터베이스에서 PostGraphile을 pointing함으로써 GraphQL API 서버를 즉시 회전합니다.
- [PostgREST](https://github.com/PostgREST/postgrest) - 모든 PostgreSQL 데이터베이스에 대한 REST API.
- [prest](https://github.com/prest/prest) - Go에서 작성된 모든 데이터베이스에서 RESTful API를 제공하는 방법입니다.
- [Remult](https://github.com/remult/remult) - REST API를 통해 End-to-end Type-safe CRUD를 통해 정밀한 접근 제어가 가능합니다.
- [restSQL](https://github.com/restsql/restsql) - Java 및 HTTP API를 가진 SQL 발전기는 XML 또는 JSON 직렬화로 간단한 RESTful HTTP API를 사용합니다.
- [resquel](https://github.com/formio/resquel) - 쉽게 SQL 데이터베이스를 REST API로 변환합니다.
- [sandman2](https://github.com/jeffknupp/sandman2) - 자동으로 레거시 데이터베이스에 대한 RESTful API 서비스를 생성합니다.
- [soul](https://github.com/thevahidal/soul) - 자동 SQLite RESTful 및 실시간 API 서버.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - 데이터베이스 / 데이터 창고 / 데이터 호수에서 RESTful API를 자동으로 exposing하는 템플릿 SQL을 작성합니다.

## 앱 플랫폼
낮은 코드 및 no-code 플랫폼
- [Appsmith](https://github.com/appsmithorg/appsmith) - 강력한 오픈 소스 낮은 코드 프레임 워크는 내부 응용 프로그램을 정말 빠르게 구축합니다.
- [Budibase](https://github.com/Budibase/budibase) - 몇 분 안에 내부 앱을 만드는 저코드 플랫폼.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - 낮은 코드 내부 도구 건물 플랫폼.
- [Nhost](https://github.com/nhost/nhost) - 오픈 소스 Firebase 대안 GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) - 웹 데이터베이스 응용 프로그램에 대한 오픈 소스 no-code 빌더. 서버 및 드래그 앤 드롭 UI 빌더, PostgreSQL 또는 SQLite에 저장된 데이터.
- [SQLPage](https://github.com/sqlpage/SQLPage) - 빠른 SQL 전용 데이터 애플리케이션 빌더. 자동으로 SQL 쿼리의 상단에 UI를 구축합니다.
- [Tooljet](https://github.com/ToolJet/ToolJet) - Open-source low-code 플랫폼은 내부 도구를 구축합니다.


## 지원하다
- [BaRMan](https://github.com/2ndquadrant-it/barman) - PostgreSQL의 백업 및 복구 관리자.
- [Databasus](https://github.com/databasus/databasus) - 외부 저장 (현지, S3, FTP, Google 드라이브 등), 알림 (웹훅, Discord, 슬랙 등) 및 팀 관리와 웹 UI를 통해 예약된 PostgreSQL 백업 도구.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - 신뢰할 수있는 PostgreSQL 백업 및 복원.
- [pgcopydb](https://github.com/dimitri/pgcopydb) - PostgreSQL 데이터베이스를 대상 PostgreSQL 서버에 복사 (pg_뚱 베어 | 사이트맵_스테로이드에 복원).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - PostgreSQL의 백업 및 복구 관리자.
- [Portabase](https://github.com/Portabase/portabase) - PostgreSQL 백업을 위한 Agent 기반 플랫폼과 분산된 실행 및 중앙화된 관현관으로 복원합니다. 

## 구독하기
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - 개발 프로세스를 스케일링하는 PostgreSQL에 대한 즉각적인 얇은 복제.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL clone schema 유틸리티 데이터베이스 밖에 나가지 않고.
- [Spawn](https://spawn.cc/) - 개발 및 CI에 대한 즉각적인 데이터베이스 사본을 만드는 클라우드 서비스. 더 이상 로컬 db 설치, 임의의 복구를 저장 포인트, 각 기능 지점 또는 테스트에 대한 격리 된 사본. 데이터베이스 크기에 관계없이 즉시 제공.


## 모니터링/전략/Performance
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Oracle 및 PostgreSQL DB 내의 적극적인 세션 기록 데이터를 제공합니다.
- [Metis](https://www.metisdata.io/product/troubleshooting) - SQL 데이터베이스에 대한 관찰성 및 성능 조정을 제공합니다.
- [Monyog](https://www.webyog.com/product/monyog) - Agentless & 비용 효과적인 MySQL 모니터링 도구.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - 수집, InfluxDB 및 Grafana를 사용하여 Linux 성능에서 SQL Server를 모니터링합니다.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - 강력한 기능으로 포장되는 안전하고, 단순하고 무수한 원격 서버 모니터링 도구로, 가능한 한 효율적으로 모니터링 할 수 있습니다.
- [Percona Monitoring and Management](https://github.com/percona/pmm) - MySQL 및 MongoDB 성능 관리 및 모니터링을위한 오픈 소스 플랫폼.
- [pganalyze collector](https://github.com/pganalyze/collector) - PostgreSQL 메트릭 및 로그 데이터를 수집하기위한 Pganalyze 통계 수집기.
- [pgbadger](https://github.com/dalibo/pgbadger) - 빠른 PostgreSQL 로그 분석기.
- [pgDash](https://pgdash.io) - PostgreSQL 데이터베이스의 모든 측면을 측정하고 추적합니다.
- [PgHero](https://github.com/ankane/pghero) - PostgreSQL의 성능 대시보드 - 건강 검사, 제안 된 인덱스 및 더.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - 실행중인 PostgreSQL 서버에서 수집 및 표시 정보 및 통계.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - All-in-one 도구는 PostgreSQL 클러스터의 건강과 성능을 시각화하는 환경을 쉽게 만듭니다.
- [pgMustard](https://www.pgmustard.com) - PostgreSQL의 사용자 인터페이스는 계획을 설명하고, 성능 향상에 대한 팁.
- [pgstats](https://github.com/gleu/pgstats) - PostgreSQL 통계를 수집하고 CSV 파일에서 저장하거나 stdout에 인쇄하십시오.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Flexible self-contained PostgreSQL 메트릭 모니터링/dashboarding 솔루션.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQL 데이터베이스의 메트릭을 추출하고 제공 할 서비스.
- [PostgreSQL Monitor](https://postgresmonitor.com) - 알림, 대시보드, 쿼리 통계 및 동적 권장 사항을 제공하는 PostgreSQL에 대한 사용하기 쉬운 모니터링 서비스.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - 사용자가 PostgreSQL 데이터베이스의 건강 분석을 수행 할 수있는 새로운 진단 도구.
- [Promscale](https://github.com/timescale/promscale) - SQL에 의해 구동되는 메트릭 및 추적을위한 오픈 소스 관찰성 백엔드.
- [Releem](https://releem.com) - MySQL 및 MariaDB에 대한 성능 모니터링 및 최적화 도구는 구성, 느린 쿼리, 스키마 문제 및 deadlocks에 대한 행동 가능한 통찰력과 안전한 자동화를 제공합니다.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - PostgreSQL 데이터베이스의 메트릭을 제공합니다.

### 팟캐스트
- [pgSCV](https://github.com/weaponry/pgscv) - PostgreSQL 및 PostgreSQL 관련 서비스에 대한 미터 수출.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL 서버 메트릭스에 대한 Prometheus exporter.
- [pg_exporter](https://github.com/Vonng/pg_exporter) - 정밀한 곡물 실행 통제를 가진 PostgreSQL & Pgbouncer를 위한 완전히 customizable Prometheus 수출상.

### 스낵 바
- [Mamonsu](https://github.com/postgrespro/mamonsu) - PostgreSQL의 모니터링 에이전트.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Zabbix Enterprise Monitor를 사용하여 Oracle Database의 멀티 계층 모니터링, 성능 및 가용성 보고 및 측정을 제공하도록 설계된 플러그인은 서버 성능 측정과 함께 작동합니다.
- [pg_monz](https://github.com/pg-monz/pg_monz) - PostgreSQL 데이터베이스의 Zabbix 모니터링 템플릿입니다.
- [Pyora](https://github.com/bicofino/Pyora) - Oracle Database를 모니터링하는 Python 스크립트.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - 빠른, 유연한, 지속적으로 RDBMS를 모니터링하는 플러그인 개발.


## 제품정보
- [DbFit](https://github.com/dbfit/dbfit) - 데이터베이스 코드의 쉬운 테스트 구동 개발을 지원하는 데이터베이스 테스트 프레임 워크.
- [pgTAP](https://github.com/theory/pgtap) - PostgreSQL의 단위 테스트.
- [RegreSQL](https://github.com/dimitri/regresql) - SQL 쿼리를 테스트합니다.
- [SQLancer](https://github.com/sqlancer/sqlancer) - 자동 테스트 DBMS는 구현에서 논리 버그를 찾을 수 있습니다.


## HA / 실패 / 스윙
- [Citus](https://github.com/citusdata/citus) - PostgreSQL 확장은 여러 노드에서 데이터와 쿼리를 배포합니다.
- [patroni](https://github.com/zalando/patroni) - ZooKeeper, etcd, 또는 Consul을 가진 PostgreSQL 높은 가용성을 위한 템플렛.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - MySQL 클러스터링 및 높은 가용성을위한 높은 확장성 솔루션.
- [ShardingSphere](https://github.com/apache/shardingsphere) - Data sharding, 스케일링, 암호화 등을 위한 SQL 거래 및 쿼리 엔진을 분산
- [stolon](https://github.com/sorintlab/stolon) - PostgreSQL 높은 가용성을위한 Cloud native PostgreSQL 관리자.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - 자동화된 장애 및 높은 가용성을 위한 PostgreSQL 확장 및 서비스.
- [pglookout](https://github.com/aiven/pglookout) - PostgreSQL 복제 모니터링 및 실패.
- [pgslice](https://github.com/ankane/pgslice) - PostgreSQL 파티션은 파이처럼 쉽습니다.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - 산업 참조 Pacemaker 및 Corosync를 기반으로 PostgreSQL에 대한 높은 가용성.
- [autobase](https://github.com/vitabaks/autobase) - Open-source DBaaS는 대용량 PostgreSQL 클러스터의 배포 및 관리를 자동화합니다.
- [Vitess](https://github.com/vitessio/vitess) - 일반화된 sharding을 통해 MySQL의 수평 스케일링을위한 데이터베이스 클러스터링 시스템.


## 쿠버네티스
- [KubeDB](https://kubedb.com) - Kubernetes에서 쉽게 생산 등급 데이터베이스를 실행하십시오.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - PostgreSQL 연산자는 Patroni에 의해 구동되는 쿠버네티스 (Kubernetes)에서 사용하기 쉬운 PostgreSQL 클러스터를 활성화합니다.
- [Spilo](https://github.com/zalando/spilo) - Docker와 HA PostgreSQL 클러스터.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Enterprise-grade, Kubernetes에서 전체 스택 PostgreSQL.


## 구성 조정
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Perl에서 작성된 스크립트는 MySQL 설치를 빠르게 검토하고 성능과 안정성을 향상시키기 위해 조정을 만듭니다.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - 최적화된 무료 온라인 툴 `postgresql.conf`·
- [pgtune](https://github.com/gregs1104/pgtune) - PostgreSQL 구성 마법사.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - PostgreSQL 데이터베이스 구성을 분석하고 튜닝 조언을 제공합니다.


## 다운로드
- [DBmaestro](https://www.dbmaestro.com) - 출시 사이클을 가속화하고 IT 생태계 전체에서 민첩성을 지원합니다.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - DevOps 워크 내에서 키 데이터베이스 개발 기능을 실행합니다. - 품질, 성능 또는 신뢰성을 향상하지 않고.


## 관련 기사
- [Chartbrew](https://chartbrew.com) - 실시간 대시보드, 차트 및 클라이언트 보고서를 여러 데이터베이스 및 서비스로 만듭니다.
- [Poli](https://github.com/shzlw/poli) - SQL 애호가를 위해 구축 된 사용하기 쉬운 SQL 보고 응용 프로그램입니다.


## 관련 상품
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - MySQL 데이터베이스 서버를 쉽게 배포하는 도구.
- [dbatools](https://github.com/sqlcollaborative/dbatools) - 명령행 SQL Server Management Studio와 같은 생각할 수 있는 PowerShell 모듈.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - Full-featured PostgreSQL 설치는 표준 Mac 앱으로 패키지되었습니다.
- [BigSQL](https://www.bigsql.org) - PostgreSQL의 개발자 친화적 배포.
- [Elephant Shed](https://github.com/credativ/elephant-shed) - 웹 기반 PostgreSQL 관리는 PostgreSQL과 함께 사용하기위한 여러 유틸리티 및 응용 프로그램을 묶음.
- [Pigsty](https://github.com/Vonng/pigsty) - 개발자를 위한 궁극적인 Observability & Database-as-Code toolbox를 가진 PostgreSQL을 위한 Battery-Included Open-Source 배포.


## 보안 보안
- [Acra](https://github.com/cossacklabs/acra) - 데이터베이스 보안 스위트. 필드 레벨 암호화와 데이터베이스 프록시, 암호화 된 데이터를 검색, SQL 주입 방지, 침입 감지, 허니팟. 클라이언트 측과 프록시 측(Transparent) 암호화를 지원합니다. SQL, 노 SQL.
- [Databunker](https://github.com/securitybunker/databunker) - 일반 DB 위에 내장된 고객 레코드에 대한 특수 GDPR 준수 보안 취약점.
- [Inspektor](https://github.com/poonai/inspektor) - 데이터베이스에 대한 액세스 제어 층. Inspektor는 정책을 결정하기 위해 정책 에이전트를 개설합니다.


## 사이트맵

### 분석기
- [Holistic.dev](https://holistic.dev) - 데이터베이스 성능, 보안 및 아키텍처 문제에 대한 자동 감지 서비스.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - 자동적으로 일반적인 SQL anti-patterns를 검출합니다.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Dialect-flexible 및 구성 가능한 SQL linter.
- [SQLLineage](https://github.com/reata/sqllineage) - Python에 의해 구동되는 SQL Lineage Analysis Tool.
- [TSQLLint](https://github.com/tsqllint/tsqllint) - TSQL 스크립트에서 anti-patterns의 존재를 설명하고 식별하는 도구.

### 코드 생성기
- [sqlc](https://sqlc.dev) - SQL-first code generator는 다양한 언어 및 다양한 데이터베이스에 대한 Type-safe 바인딩을 생산합니다.
- [SQLDelight](https://sqldelight.github.io/sqldelight) - SQL-first 코드 발생기는 Kotlin 및 다양한 데이터베이스에 대한 Type-safe 바인딩을 생산합니다.
- [pGenie](https://pgenie.io) - SQL-first code generator는 다양한 언어에 대한 Type-safe 바인딩을 생산하고 PostgreSQL 데이터베이스를 전문으로 합니다.

### 제품정보
- [PartiQL](https://partiql.org) - 관계, 반 구조 및 배열 된 데이터에 SQL 호환 액세스.

### 프레임 워크
- [Apache Calcite](https://calcite.apache.org) - 고급 SQL 기능이있는 동적 데이터 관리 프레임 워크.
- [ZetaSQL](https://github.com/google/zetasql) - SQL을 위한 Analyzer Framework.

### 파일 형식
- [CodeBuff](https://github.com/antlr/codebuff) - 기계 학습을 통해 Language-agnostic 예쁜 인쇄.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - 오픈 소스 Java SQL JSqlParser에 근거를 둔 많은 RDBMS를 위한 Formatter.
- [SQL Online](https://sqlonline.in) - SQL 쿼리를 포맷하는 무료 도구는 Analysts에 대한 내용에 따라 다릅니다.
- [pgFormatter](https://github.com/darold/pgFormatter) - PostgreSQL SQL 구문 beautifier.
- [Poor SQL](https://poorsql.com) - 즉시 무료 및 오픈 소스 T-SQL 포맷. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - 꽤 인쇄 SQL 쿼리에 대한 JavaScript 라이브러리.

### (주)
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - 기본 SQL 기술을 선택하는 데 도움이되는 SQL 학습 게임 - 정보를 얻기 위해 쿼리를 사용할 수 있도록.
- [Querymon](https://codepip.com/games/querymon/) - Querydex에서 SQL 쿼리를 사용하는 것을 배우십시오.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - PostgreSQL 데이터베이스 내에서 전적으로 구현되는 Space 기반 전략 게임.
- [SQL Island](https://sql-island.informatik.uni-kl.de) - 생존 한 비행기 충돌 후, 당신은 시간에 SQL 섬에 붙어있을 것입니다. 게임의 진행을 통해이 섬에서 탈출하는 방법을 찾을 수 있습니다.
- [SQL Murder Mystery](https://mystery.knightlab.com) - SQL 개념과 명령을 학습하기 위해 자기 간접 수업을 모두 수행하고 경험이 풍부한 SQL 사용자를 위한 재미있는 게임이 본질적인 범죄를 해결합니다.
- [SQL Police Department](https://sqlpd.com) - SQLPD에서 같은 시간에 SQL을 학습하면서 범죄를 해결합니다.

### 파리
- [General SQL Parser](https://www.sqlparser.com) - SQL을 위한 Parsing, formatting, 수정 및 분석.
- [jOOQ](https://github.com/jOOQ/jOOQ) - SQL을 파고, 다른 방언에 번역하고, 표식 나무 변화를 허용합니다.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - SQL 문헌을 파고 Java 클래스의 계층으로 번역하십시오.
- [libpg_query](https://github.com/pganalyze/libpg_query) - 서버 환경에서 PostgreSQL 파서에 액세스하는 C 라이브러리.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - JSON으로 SQL을 파싱합니다.
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Python을 위한 비 유효성 SQL 파서.
- [SQLGlot](https://github.com/tobymao/sqlglot) - 퓨어 파이썬 SQL 파서, transpiler 및 빌더.

### Über의 SQL
SQL 쿼리를 실행
- [CloudQuery](https://github.com/cloudquery/cloudquery) - 추출, 변환 및 정상화 된 PostgreSQL 테이블에 클라우드 자산을로드합니다.
- [csvq](https://github.com/mithrandie/csvq) - CSV에 대한 SQL-like 쿼리 언어.
- [dsq](https://github.com/multiprocessio/dsq) - JSON, CSV, Excel, Parquet 등 SQL 쿼리를 실행하는 명령줄 도구.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Eclipse Memory Analyzer를 위한 이 플러그인은 SQL을 통해 heap Dump을 쿼리할 수 있습니다.
- [OctoSQL](https://github.com/cube2222/octosql) - SQL을 사용하여 여러 데이터베이스 및 파일 형식의 데이터를 결합, 분석 및 변환 할 수있는 쿼리 도구.
- [osquery](https://github.com/osquery/osquery) - SQL 구동 운영 시스템 계측, 모니터링 및 분석.
- [Resmo](https://www.resmo.com) - SQL을 이용한 감사 및 평가.
- [sq](https://github.com/neilotoole/sq) - 구조 데이터 소스에 jq-style 액세스를 제공하는 명령줄 도구 : SQL 데이터베이스 또는 CSV 또는 Excel과 같은 문서 형식. 그것은 sql+jq의 사랑입니다.
- [Steampipe](https://github.com/turbot/steampipe) - 클라우드 서비스(AWS, Azure, GCP 등)을 즉시 쿼리하는 SQL을 사용합니다.
- [TextQL](https://github.com/dinedal/textql) - CSV 또는 TSV와 같은 구조 텍스트에 대한 SQL을 실행합니다.
- [trdsql](https://github.com/noborus/trdsql) - CSV, LTSV, JSON 및 TBLN에서 SQL 쿼리를 실행할 수 있는 CLI 도구.
- [Trino](https://github.com/trinodb/trino) - 대량 데이터 세트를 쿼리하도록 설계된 분산 SQL 쿼리 엔진은 하나 이상의 이진 데이터 소스를 배포했습니다.

### 언어 서버 프로토콜
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL 언어 서버.
- [sqls](https://github.com/lighttiger2505/sqls) - SQL Language Server가 Go에서 작성되었습니다.

### 한국어
SQL의 학습 및 퍼즐
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Difficult 설정 기반 SQL 퍼즐.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - 연습 코딩, 인터뷰 준비, 고용.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - 데이터를 검색, 필터, 분석하는 SQL을 사용하는 방법에 대한 책.
- [LeetCode](https://leetcode.com/problemset/database) - 기술 향상, 지식 확장 및 기술 인터뷰 준비.
- [Select Star SQL](https://selectstarsql.com) - SQL을 학습하기위한 인터넷에서 최고의 장소가되는 무료 대화 형 책.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - 데이터 과학 교육 자료.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - SQL 개념 및 명령 및 경험있는 SQL 사용자를위한 재미있는 게임을 배우려면 자기 간접 수업.

### (주)
- [pev2](https://github.com/dalibo/pev2) - PostgreSQL 실행 계획의 그래픽 시각화를 보여주는 Vue.js 구성 요소.
- [pg_flame](https://github.com/mgartner/pg_flame) - PostgreSQL용 불꽃 발전기 `EXPLAIN ANALYZE` 산출.

### 스크립트
다양한 용도로 유용한 SQL-script
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - 긴 haul에 대한 T-SQL 스크립트: 저장, 비행 문서, SQL Server의 일반 관리 필요성을 최적화.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - PostgreSQL Experts에서 만든 데이터베이스 분석 및 관리를위한 유용한 작은 스크립트 모음.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - PostgreSQL의 인덱스 및 테이블에서 통계 bloat를 측정하는 쿼리.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - 데이터베이스가 규칙을 따르는 경우 SQL 테스트 <https://wiki.postgresql.org/wiki/Don't_Do_This>·
- [pg-utils](https://github.com/dataegret/pg-utils) - 유용한 PostgreSQL 유틸리티.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - 유용한 SQL-scripts 및 명령 <timescale.com>·
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - PostgreSQL DBA 및 모든 엔지니어를위한 유용한 도구 세트.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - 유용한 PostgreSQL 쿼리 및 명령.
- [TPT](https://github.com/tanelpoder/tpt-oracle) - 이 sqlplus 스크립트는 Oracle Database 성능 최적화 및 문제 해결을위한 것입니다.


## 자료실
- [dbt](https://github.com/dbt-labs/dbt-core) - 단순히 쓰기 선택 문에 의해 데이터를 변환, dbt는 테이블에 이러한 진술을 처리하고 데이터 창고에서보기.
- [QuickTable](https://quicktable.io) - 모든 사람이 접근, 깨끗하고 분석, 변형 및 모델 데이터를 코드없이.

### 관련 기사
- [Amundsen](https://github.com/amundsen-io/amundsen) - 데이터 분석가, 데이터 과학자 및 엔지니어의 생산성 향상을 위한 Metadata 구동 응용 프로그램입니다.
- [DataHub](https://github.com/datahub-project/datahub) - 현대 데이터 스택의 Metadata Platform.
- [Marquez](https://github.com/MarquezProject/marquez) - 수집, 집계 및 데이터 생태계의 메타데이터 시각화.

### 제품정보
- [Dwh.dev](https://dwh.dev) - Snowflake의 Nexgen 데이터 라인.

### Generation/Masking/Subset/수정
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - 개발, 테스트 및 훈련 목적으로 생성, obfuscate (anonymize / pseudonymize) 및 마이그레이션 데이터.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - 실제 테스트 데이터의 다량 볼륨을 만드는 강력한 GUI 도구.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - 진정한 테스트 데이터의 톤을 가진 Oracle schema를 팝업하기위한 작은하지만 강력한 GUI 도구.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - 데이터베이스의 빠른 세대를 위한 강력한 GUI 도구.
- [Faker](https://github.com/faker-js/faker) - 브라우저 및 Node.js에서 가짜 데이터의 다량을 생성한다.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQL 및 PostgreSQL에 대한 데이터베이스 익명화 및 합성 데이터 생성 도구.
- [myanon](https://github.com/ppomes/myanon) - MySQL 덤프 파일 용 anonymizer 스트리밍. stdin에서 mysqldump를 읽으십시오. 익명화 된 버전을 stdout로 작성합니다. deterministic 해싱, 고정 값, JSON 필드 익명화 및 Python 확장을 지원합니다.
- [Noisia](https://github.com/lesovsky/noisia) - PostgreSQL을 위한 Harmful 워크로드 발전기.
- [quick-seed](https://github.com/miit-daga/quick-seed) - PostgreSQL, MySQL, SQLite, Prisma 및 Drizzle ORM에 대한 지원으로 현실적인 테스트 데이터를 생성하기위한 Database-agnostic Seeding 도구.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - 간단하고 강력한 도구는 선택한 테이블 또는 전체 데이터베이스를 생성하고 변환하여 응용 분야에 대한 실제 테스트 데이터를 제공합니다. 테스트 데이터를 생성 : Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift 및 Amazon RDS.
- [SQLable](https://sqlable.com/generator/) - 브라우저에서 가짜 데이터를 생성합니다.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - DevOps의 데이터베이스 마스킹 및 세대를위한 최고의 친구.

### 데이터 Profilers
- [Data Profiler](https://github.com/capitalone/dataprofiler) - DataProfiler는 데이터 분석, 모니터링 및 민감한 데이터 탐지를 쉽게 만들 수 있도록 설계된 Python 라이브러리입니다.
- [Desbordante](https://github.com/desbordante/desbordante-core) - 데이터의 복잡한 패턴의 발견 및 검증에 중점을 둔 오픈 소스 데이터 프로파일러.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Dataset의 고수준 분석을위한 범용 오픈 소스 데이터 프로파일러.

### 이름 *
- [dtle](https://github.com/actiontech/dtle) - MySQL을 위한 분산 데이터 전송 서비스.
- [Litestream](https://github.com/benbjohnson/litestream) - SQLite에 대한 스트리밍 복제.
- [pgsync](https://github.com/ankane/pgsync) - 데이터베이스 사이 Sync PostgreSQL 데이터.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Python 3에서 작성된 PostgreSQL 복제 시스템 시스템은 JSONB로 PostgreSQL에 저장되는 MySQL의 행 이미지를 끌어내는 라이브러리 mysql-replication을 사용합니다.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - PostgreSQL 논리 디코딩 기능을 사용하여 웹소켓을 통해 PostgreSQL 변경을 스트림하는 Golang 웹 서버.
- [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL의 가장 인기있는 복제 관리자.

### 더 보기
- [data-diff](https://github.com/datafold/data-diff) - 명령행 도구 및 Python 라이브러리는 두 개의 다른 데이터베이스를 통해 효율적으로 디프 행을 제공합니다.
- [KS DB Merge Tools](https://ksdbmerge.tools) - DB 스키마 및 데이터를 비교하고 동기화하는 GUI. Oracle 데이터베이스의 경우, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access 및 Cross-DBMS.

## 회사 소개
데이터베이스 도구에 문서, 기사, 표 및 기타 이론 자료
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - Code로 데이터베이스를 취급합니다.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - 첫 번째 데이터베이스를 설계하고 구현하는 친절한 설명 가이드.

## 기계 학습
- [MindsDB](https://github.com/mindsdb/mindsdb) - In-database 기계 학습.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - SQL 및 AI를 함께 가져옵니다.

## 관련 기사
- 당신의 기여는 항상 환영합니다! 자주 묻는 질문 [contribution guidelines](contributing.md) 처음.
