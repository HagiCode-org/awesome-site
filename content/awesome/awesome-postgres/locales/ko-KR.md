# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> 엄선한 [PostgreSQL](https://www.postgresql.org/) 소프트웨어, 라이브러리, 도구 및 자료 목록입니다. [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)에서 영감을 얻었습니다.

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)은 흔히 Postgres라고도 불리는 [객체 관계형 데이터베이스](https://en.wikipedia.org/wiki/Object-relational_database)(ORDBMS)입니다. PostgreSQL은 [ACID](https://en.wikipedia.org/wiki/ACID)를 준수하고 [트랜잭션 처리](https://en.wikipedia.org/wiki/Transaction_processing)를 지원합니다. (자세히 보기: [wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: 기여를 환영합니다. [pull request](https://github.com/dhamaniasad/awesome-postgres/pulls)를 통해 링크를 추가하거나 [이슈](https://github.com/dhamaniasad/awesome-postgres/issues)를 만들어 토론을 시작해 주세요. [기여 지침](CONTRIBUTING.md)을 확인해 주세요.

## 목차

- [Awesome Postgres](#awesome-postgres-)
    - [고가용성](#high-availability)
    - [백업](#backups)
    - [GUI](#gui)
    - [배포판](#distributions)
    - [CLI](#cli)
    - [서버](#server)
    - [모니터링](#monitoring)
    - [확장 기능](#extensions)
    - [플랫폼](#platforms)
    - [작업 큐](#work-queues)
    - [최적화](#optimization)
    - [유틸리티](#utilities)
    - [언어 바인딩](#language-bindings)
    - [PaaS (서비스형 PostgreSQL)](#paas-postgresql-as-a-service)
    - [Docker 이미지](#docker-images)
    - [Kubernetes](#kubernetes)
- [자료](#resources)
    - [튜토리얼](#tutorials)
    - [블로그](#blogs)
    - [문서](#documentation)
    - [뉴스레터](#newsletters)
    - [동영상](#videos)
    - [커뮤니티](#community)
    - [로드맵](#roadmaps)
    - [외부 목록](#external-lists)

### 고가용성
* [autobase](https://github.com/vitabaks/autobase) - PostgreSQL®용 Autobase는 고가용성 PostgreSQL 클러스터의 배포와 관리를 자동화하는 오픈 소스 DBaaS입니다.
* [BDR](https://github.com/2ndQuadrant/bdr) - 양방향 복제(BiDirectional Replication) 기반의 PostgreSQL 멀티마스터 복제 시스템입니다.
* [Patroni](https://github.com/zalando/patroni) - ZooKeeper 또는 etcd를 사용하는 PostgreSQL 고가용성 구성 템플릿입니다.
* [Spock](https://github.com/pgEdge/spock) - 완전한 오픈 소스 논리적 멀티마스터 PostgreSQL 복제입니다.
* [Stolon](https://github.com/sorintlab/stolon) - Consul 또는 etcd를 기반으로 하며 Kubernetes와 통합되는 PostgreSQL 고가용성 솔루션입니다.
* [pglookout](https://github.com/aiven/pglookout) - 복제 모니터링 및 장애 조치 데몬입니다.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL 서버 클러스터의 복제 및 장애 조치를 관리하는 오픈 소스 도구 모음입니다.
* [Slony-I](https://slony.info/) - 캐스케이딩과 장애 조치를 지원하는 "마스터-다중 슬레이브" 복제 시스템입니다.
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL 자동 장애 조치 기능으로, Pacemaker와 Corosync를 기반으로 한 Postgres 고가용성 솔루션입니다.
* [SkyTools](https://github.com/pgq/skytools-legacy) - 큐 시스템 PgQ와 Slony보다 관리가 간편한 복제 시스템 Londiste 등을 포함하는 복제 도구입니다.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - 자동 장애 조치와 고가용성을 제공하는 Postgres 확장 기능 및 서비스입니다.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - PostgreSQL 서버의 미리 쓰기 로그(WAL)를 실시간 스트리밍합니다. pg_receivewal 대체용 컨테이너 친화적 솔루션입니다.
* [pg-status](https://github.com/krylosov-aa/pg-status) - 현재 마스터 호스트 또는 다양한 기준을 충족하는 복제본을 즉시 조회하는 HTTP 엔드포인트를 제공하는 마이크로서비스입니다.

### 백업
* [Barman](https://www.pgbarman.org/index.html) - 2ndQuadrant가 제공하는 PostgreSQL 백업 및 복구 관리자입니다.
* [Databasus](https://databasus.com) - 웹 UI로 PostgreSQL 백업을 예약하고 로컬, S3, FTP, Google Drive 등의 외부 저장소에 보관하며 webhook·Discord·Slack 알림과 팀 관리를 지원합니다.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - PostgreSQL용 고급 WAL 파일 관리 도구입니다.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – pg\_arman의 포크로, @PostgresPro가 개선했습니다. 증분 백업, 복제본 백업, 멀티스레드 백업 및 복구, archive command 없는 익명 백업을 지원합니다.
* [pgBackRest](https://pgbackrest.org/)  - 신뢰할 수 있는 PostgreSQL 백업 및 복구 도구입니다.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - 웹 UI를 갖춘 완전한 Docker 기반 Postgres 백업 및 유지관리 도구입니다.
* [pg\_back](https://github.com/orgrim/pg_back/) - pg\_back은 간단한 백업 스크립트입니다.
* [pghoard](https://github.com/aiven/pghoard) - 클라우드 객체 저장소(AWS S3, Azure, Google Cloud, OpenStack Swift)를 위한 백업 및 복구 도구입니다.
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Alibaba Cloud Object Storage Service(OSS)에 PostgreSQL을 주기적으로 백업하는 데 유용한 Docker 컨테이너입니다.
* [wal-e](https://github.com/wal-e/wal-e) (obsolete) - Heroku가 제공하는 PostgreSQL용 간단한 연속 아카이빙 도구로, S3, Azure 또는 Swift에 저장합니다.
* [wal-g](https://github.com/wal-g/wal-g) - Go로 다시 작성한 WAL-E의 후속 도구입니다. AWS S3, Google Cloud(GCS), Azure, OpenStack Swift, MinIO 및 파일 시스템 저장소를 지원합니다. 블록 수준 증분 백업, 대기 서버로의 백업 작업 위임, 병렬 처리 및 속도 제한 옵션을 제공합니다. Postgres 외에 MySQL과 MongoDB에도 사용할 수 있습니다.
* [pitrery](https://dalibo.github.io/pitrery/) - PostgreSQL 시점 복구(PITR) 백업을 관리하는 Bash 스크립트 모음입니다.
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar`는 `pg_dump`, `cron`, bash 스크립트로 PostgreSQL 정기 백업을 자동화하고 결과를 webhook으로 전송하는 경량 Docker 사이드카입니다.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - pg_dump 기반의 Docker 우선 솔루션입니다. 환경 변수 기반 구성, 선택적 압축 및 GPG 암호화, webhook, Amazon S3 자동 업로드를 지원해 PostgreSQL 백업을 예약합니다.

### GUI
* [1bench](https://1bench.dev/postgresql) - Redis, Elasticsearch, ClickHouse, Qdrant 등을 함께 지원하며 Postgres를 우선 지원하는 네이티브 크로스 플랫폼 GUI입니다 (상용 소프트웨어).
* [Adminer](https://www.adminer.org/) - PHP로 작성된 모든 기능을 갖춘 데이터베이스 관리 도구입니다.
* [AI for Database](https://aifordatabase.com) - 자연어로 PostgreSQL 데이터베이스와 대화할 수 있습니다. SQL 없이 인사이트를 얻고, 자동 갱신 대시보드를 만들며, 데이터베이스 변경에 따라 자동화된 워크플로를 실행합니다 (상용 소프트웨어).
* [Beekeeper Studio](https://www.beekeeperstudio.io) - 현대적인 UI와 뛰어난 Postgres 지원을 갖춘 무료 오픈 소스 SQL 클라이언트입니다. 크로스 플랫폼입니다.
* [Bytebase](https://www.bytebase.com) - 개발, 보안, DBA 및 플랫폼 엔지니어링 팀을 위한 데이터베이스 DevSecOps 솔루션입니다.
* [Chartbrew](https://chartbrew.com) - PostgreSQL 데이터로 실시간 대시보드, 차트, 고객 보고서를 만듭니다. SQL 쿼리 도구를 제공합니다.
* [Count](https://count.co/) - PostgreSQL에 연결되는 노트북 인터페이스를 갖춘 웹 기반 분석 플랫폼입니다 (상용 소프트웨어).
* [DataGrip](https://www.jetbrains.com/datagrip/) - 고급 도구 모음과 우수한 크로스 플랫폼 경험을 제공하는 IDE입니다 (상용 소프트웨어).
* [Dekart](https://github.com/dekart-xyz/dekart) - PostGIS 쿼리를 공유 가능한 인터랙티브 지도로 변환하는 오픈 소스 플랫폼입니다.
* [Datazenit](https://datazenit.com/) - 웹 기반 PostgreSQL GUI입니다 (상용 소프트웨어).
* [DataRow](https://www.datarow.com/) - Amazon Redshift용 크로스 플랫폼 SQL 클라이언트입니다. 간편하고 사용하기 쉬우며 확장 가능합니다.
* [DBConvert Streams](https://streams.dbconvert.com/) - PostgreSQL, MySQL, 파일, S3 호환 저장소를 위한 마이그레이션, 페더레이션 SQL, CDC 복제를 지원하는 데이터베이스 IDE입니다 (상용 소프트웨어).
* [DBeaver](https://dbeaver.io/) - PostgreSQL을 훌륭하게 지원하는 범용 데이터베이스 관리자입니다.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - PostgreSQL, MySQL, MariaDB, SQL Server, Oracle 및 다양한 관련 클라우드 서비스를 지원하는 올인원 멀티데이터베이스 솔루션입니다 (상용 소프트웨어).
* [DbVisualizer](http://www.dbvis.com) - 개발자, DBA, 분석가를 위한 크로스 플랫폼 데이터베이스 클라이언트입니다 (상용 소프트웨어).
* [Holistics](https://www.holistics.io/) - 강력한 PostgreSQL 지원을 제공하는 온라인 크로스 플랫폼 데이터베이스 관리 도구이자 SQL 쿼리 보고 GUI입니다 (상용 소프트웨어).
* [JackDB](https://www.jackdb.com/) - 웹 기반 SQL 쿼리 인터페이스입니다 (상용 소프트웨어).
* [Luna Modeler](http://www.datensen.com) - 크로스 플랫폼 데스크톱 데이터 모델링 도구입니다 (상용 소프트웨어).
* [Mathesar](https://mathesar.org/) - 데이터베이스를 직관적으로 사용할 수 있는 경험을 제공하는 웹 애플리케이션입니다.
* [Metabase](https://www.metabase.com/) - PostgreSQL용 간단한 대시보드, 차트 및 쿼리 도구입니다.
* [Numeracy](https://numeracy.co/) - PostgreSQL을 위한 차트와 대시보드가 포함된 빠른 SQL 편집기입니다 (상용 소프트웨어).
* [OrcaQ](https://github.com/cin12211/orca-q) - PostgreSQL, MySQL, Redis 등을 위한 현대적인 오픈 소스 데이터베이스 편집기입니다. AI 도우미, ERD 시각화, 스키마 비교, 시각적 역할 관리 기능을 제공합니다.
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQL 관리 및 운영 GUI입니다.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - 자연어로 Postgres와 대화할 수 있습니다 (상용 소프트웨어).
* [PgManage](https://github.com/commandprompt/pgmanage) - Postgres 중심의 현대적인 멀티플랫폼 데이터베이스 클라이언트 및 관리 도구입니다.
* [pgModeler](https://pgmodeler.io/) - 오픈 소스 PostgreSQL 데이터베이스 모델러입니다.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - SQL 노트북, AI 도우미, 사용하기 쉬운 코드 조각, 실시간 모니터링 대시보드를 갖춘 완전한 DBMS를 제공하는 오픈 소스 VS Code / Open VSX 확장 기능입니다.
* [pgweb](https://github.com/sosedoff/pgweb) - Go로 작성된 웹 기반 PostgreSQL 데이터베이스 브라우저입니다.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - PostgreSQL을 위한 최고의 웹 기반 관리 도구입니다.
* [Postbird](https://github.com/Paxa/postbird) - macOS용 PostgreSQL 클라이언트입니다.
* [PostgresCompare](https://www.postgrescompare.com) - 크로스 플랫폼 데이터베이스 비교 및 배포 도구입니다 (상용 소프트웨어).
* [Postico](https://eggerapps.at/postico/) - macOS용 현대적인 PostgreSQL 클라이언트입니다 (상용 소프트웨어).
* [QueryGlow](https://queryglow.com/) - AI SQL 생성, EXPLAIN 시각화, 스키마 인식 자동 완성을 갖춘 셀프 호스팅 웹 기반 데이터베이스 GUI입니다 (상용 소프트웨어).
* [PSequel](http://www.psequel.com/) - 일반적인 PostgreSQL 작업을 빠르게 수행할 수 있는 깔끔하고 간단한 인터페이스입니다 (상용 소프트웨어).
* [Redash](https://github.com/getredash/redash) - 모든 데이터 소스에 연결해 데이터를 쉽게 시각화하고 공유할 수 있습니다.
* [SQL Tabs](http://www.sqltabs.com/) - JS로 작성된 크로스 플랫폼 데스크톱 PostgreSQL 클라이언트입니다.
* [SQLPro for Postgres](http://macpostgresclient.com/) - macOS용 간단하고 강력한 PostgreSQL 관리자입니다 (상용 소프트웨어).
* [temBoard](https://github.com/dalibo/temboard) - 웹 기반 PostgreSQL GUI 및 모니터링 도구입니다.
* [Teable](https://github.com/teableio/teable) - 초고속 실시간 전문 개발자 친화적 노코드 데이터베이스입니다.
* [TablePlus](https://tableplus.com/) - 데이터베이스와 구조를 편집할 수 있는 네이티브 앱입니다. 높은 수준의 보안을 제공합니다 (상용 소프트웨어).
* [TablePro](https://tablepro.app/) - EXPLAIN 시각화, ER 다이어그램, AI 도우미를 갖춘 네이티브 macOS PostgreSQL 클라이언트입니다. 무료 오픈 소스입니다.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - 크로스 플랫폼 데이터베이스 관리 도구입니다 (무료/상용).
* [DbGate](https://dbgate.org) - 가장 스마트한 (no)SQL 데이터베이스 클라이언트입니다.
* [WebDB](https://webdb.app) – 효율적인 데이터베이스 IDE입니다.

### 배포판
* [Postgres.app](https://postgresapp.com/) - macOS에서 PostgreSQL을 시작하는 가장 쉬운 방법입니다.
* [Pigsty](https://github.com/Vonng/pigsty) - 개발자를 위한 관측 가능성 및 Database-as-Code 도구 모음을 기본 탑재한 오픈 소스 PostgreSQL 배포판입니다.

### CLI
* [atlas](https://github.com/ariga/atlas) - 현대적인 DevOps 원칙에 따라 데이터베이스 스키마를 관리하고 마이그레이션하는 도구입니다.
* [pgcli](https://github.com/dbcli/pgcli) - 자동 완성과 구문 강조를 제공하는 Postgres CLI입니다.
* [pgfence](https://pgfence.com) - Postgres SQL 마이그레이션의 잠금 모드와 위험한 DDL을 검사하고 안전한 확장/축소 재작성을 제공합니다. CLI와 LSP를 지원하며 Prisma, TypeORM, Knex 추출기가 포함됩니다.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Go로 작성된 자동 완성 및 구문 강조 기능의 Postgres CLI입니다.
* [pgplan](https://github.com/JacobArthurs/pgplan) - CLI에서 PostgreSQL EXPLAIN 계획을 비교하고 분석합니다.
* [pgschema](https://www.pgschema.com) - Terraform 방식의 선언적 Postgres 스키마 마이그레이션 도구입니다.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - Postgres 스키마를 비교하고 잠금을 최소화하는 SQL 마이그레이션을 생성하는 CLI 및 Golang 라이브러리입니다.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - 프로덕션 배포 전에 위험한 DDL을 찾는 PostgreSQL 마이그레이션 안전성 CLI입니다. 80개 규칙, 잠금 분류, 자동 수정, GitHub Action을 제공합니다.
* [pgsh](https://github.com/sastraxi/pgsh) - Git처럼 PostgreSQL 데이터베이스 브랜치를 만듭니다.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - PostgreSQL에 내장된 CLI 클라이언트입니다.
* [psql2csv](https://github.com/fphilipe/psql2csv) - psql에서 쿼리를 실행하고 결과를 CSV로 출력합니다.
* [sabiql](https://github.com/riii111/sabiql) - PostgreSQL 데이터베이스를 탐색하고 쿼리하며 편집하는 빠른 무드라이버 TUI입니다.
* [schemaspy](https://github.com/schemaspy/schemaspy) - 데이터베이스에서 HTML 문서를 생성하는 JAVA JDBC 호환 도구입니다. Entity Relationship 다이어그램도 포함합니다.
* [pdot](https://gitlab.com/dmfay/pdot) - 외래 키 그래프부터 트리거 연쇄, 역할 상속 및 권한까지 데이터베이스 구조를 셸에서 시각화하고 탐색합니다.
* [squix](https://github.com/eduardofuncao/squix) - 쿼리 관리와 인터랙티브 결과를 지원하는 SQL 명령줄 클라이언트입니다.

### 서버
* [AgensGraph](https://bitnine.net/) - PostgreSQL을 기반으로 한 강력한 그래프 데이터베이스입니다.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - MPP PostgreSQL 포크입니다. Greenplum Database를 대체하는 오픈 소스 솔루션입니다.
* [FerretDB](https://www.ferretdb.io) - PostgreSQL 기반의 진정한 오픈 소스 MongoDB 대안입니다.
* [Postgres-XL](https://www.postgres-xl.org/) - 확장 가능한 오픈 소스 PostgreSQL 기반 데이터베이스 클러스터입니다.
* [YugabyteDB](https://yugabyte.com/) - 분산 저장소와 트랜잭션 위에서 PostgreSQL 포크를 사용하는 오픈 소스 분산 SQL입니다.

### 보안
* [Acra](https://github.com/cossacklabs/acra) - 투명한 실시간 데이터 암호화, SQL 인젝션 방지 방화벽, 침입 탐지 기능을 갖춘 데이터 보호 프록시 등 SQL 데이터베이스 보안 도구 모음입니다.
* [pgrls](https://github.com/pgrls/pgrls) - 행 수준 보안 정책 정적 분석기입니다. 보안, 성능, 위생 관련 36개 규칙 중 10개는 자동 수정 가능하며 CI 게이트용 의미 기반 정책 비교 명령도 제공합니다.

### 모니터링
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check\_pgactivity는 Nagios에서 PostgreSQL 클러스터를 모니터링하도록 설계되었습니다. 유용한 성능 지표를 측정하고 모니터링하는 다양한 옵션을 제공합니다.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - PostgreSQL 데이터베이스 상태 점검용 Nagios check\_postgres 플러그인입니다.
* [coroot](https://github.com/coroot/coroot) - eBPF 기반의 오픈 소스 APM 및 관측 가능성 도구로, DataDog와 NewRelic의 대안입니다. 시스템 성능을 빠르게 파악할 수 있습니다.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - 문제 발생 시 지표, 쿼리, 실행 계획을 수집·시각화하고 알림을 보내는 SaaS 모니터링 도구입니다 (상용 소프트웨어).
* [Instrumental](https://github.com/Instrumental/instrumentald) - 설치 편의를 위한 [미리 준비된 그래프](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs)를 포함한 실시간 성능 모니터링 도구입니다 (상용 소프트웨어).
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Zabbix용 종합 PostgreSQL 모니터링 모듈입니다.
* [myDBA](https://mydba.dev) - 75개 이상의 자동 상태 점검, 클러스터 인식 인덱스 조언, 쿼리 분석, TimescaleDB·pgvector·PostGIS 확장 모니터링을 제공하는 PostgreSQL 성능 모니터링 도구입니다 (상용 소프트웨어).
* [PMM](https://github.com/percona/pmm) - PostgreSQL, MySQL, MongoDB를 모니터링하고 관리하는 무료 오픈 소스 플랫폼 Percona Monitoring and Management(PMM)입니다.
* [Pome](https://github.com/rach/pome) - Pome은 PostgreSQL Metrics의 약자이며 데이터베이스 상태를 추적하는 PostgreSQL 지표 대시보드입니다.
* [pgmetrics](https://pgmetrics.io/) - 실행 중인 PostgreSQL 서버에서 다양한 정보와 통계를 수집해 읽기 쉬운 텍스트로 표시하거나 스크립트용 JSON 및 CSV로 내보내는, 종속성 없는 단일 실행 파일 오픈 소스 도구입니다.
* [pg\_view](https://github.com/zalando/pg_view) - 전체 시스템 통계, 파티션별 정보, 메모리 통계 등을 보여주는 오픈 소스 명령줄 도구입니다.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Grafana 대시보드에 중점을 둔 유연하고 시작하기 쉬운 PostgreSQL 지표 모니터입니다.
* [pgwd](https://github.com/hrodrig/pgwd) - PostgreSQL 연결 사용량과 오래된 세션을 모니터링하고 임계값 알림, Prometheus 지표, 여러 알림 백엔드를 제공합니다.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - PostgreSQL 벤치마크 테스트를 실행합니다.
* [opm.io](http://opm.io) - PostgreSQL 서버 관리를 돕는 무료 소프트웨어 모음입니다. 통계를 수집하고 대시보드를 표시하며 문제 발생 시 경고를 보냅니다.
* [okmeter.io](https://okmeter.io/pg) - 상세한 PostgreSQL 플러그인을 갖춘 상용 SaaS 에이전트 기반 모니터링 도구입니다. 수백 가지 통계를 자동 수집하고 대시보드 및 알림을 제공합니다 (상용 소프트웨어).
* [dexter](https://github.com/ankane/dexter) - Postgres용 자동 인덱서입니다. 느린 쿼리를 감지하고 설정에 따라 인덱스를 생성합니다.
* [pg_ash](https://github.com/NikolayS/pg_ash) - PostgreSQL용 Active Session History입니다. pg_cron으로 초당 pg_stat_activity를 샘플링해 인코딩된 스냅샷을 저장하며 대기 이벤트 분석용 SQL 함수 32개를 제공합니다. 순수 SQL로 동작하고 확장 기능이 필요 없으며 RDS, Cloud SQL, Supabase 등 관리형 서비스에서도 작동합니다.
* [pg_exporter](https://github.com/Vonng/pg_exporter) - 세밀한 실행 제어를 제공하는 PostgreSQL 및 Pgbouncer용 맞춤 설정 가능한 Prometheus exporter입니다.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL 서버 지표용 Prometheus exporter입니다.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - 효율적이고 체계적인 고급 통계 관리를 위해 설계된 오픈 소스 PostgreSQL 확장 기능입니다.
* [pgvitals](https://github.com/pgvitals/pgvitals) - 표준 시스템 카탈로그만 사용해 느린 쿼리, 팽창, vacuum 지연, 잠금 경합, 복제 지연, 순환 위험 등 흔한 성능 문제를 찾는 읽기 전용 진단 쿼리 40개입니다. 확장 기능은 필요하지 않습니다. 결과를 0~100 상태 점수로 종합하는 선택적 CLI도 있습니다.

### 확장 기능
* [pgxn](https://pgxn.org/) PostgreSQL 확장 기능 네트워크 - 다양한 오픈 소스 PostgreSQL 확장 기능을 배포하는 중앙 저장소입니다.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - PostgreSQL 확장 기능 1,000개 이상입니다.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - PostgreSQL 확장 기능 400개 이상입니다.
* [AGE](https://github.com/apache/age) - Cypher 쿼리를 포함한 완전한 그래프 데이터베이스 지원을 추가합니다.
* [OrioleDB](https://www.orioledb.com/) - 클라우드 네이티브 PostgreSQL 저장 엔진입니다. 디스크 및 메모리 엔진의 장점을 결합한 확장 기능입니다.
* [Citus](https://github.com/citusdata/citus) - 실시간 작업 부하용 확장 가능한 PostgreSQL 클러스터입니다.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - PostgreSQL 분석용 컬럼형 저장소입니다.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit은 모든 DML 활동을 컬럼별로 데이터베이스 내부에 기록합니다.
* [pg_search](https://github.com/paradedb/paradedb) - 최첨단 전문 검색 순위 알고리즘 BM25로 SQL 테이블의 전문 검색을 지원하는 PostgreSQL 확장 기능입니다.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - 네이티브 인덱스 접근 방식과 SQL 상위 k 쿼리 API를 제공하는 BM25 계열 어휘 검색용 PostgreSQL 확장 기능입니다.
* [pg_cron](https://github.com/citusdata/pg_cron) - PostgreSQL에서 주기적 작업을 실행합니다.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - 논리적 스트리밍 복제를 제공하는 확장 기능입니다.
* [pgcat](https://github.com/kingluo/pgcat) - 향상된 PostgreSQL 논리 복제입니다.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL용 SVG QR 코드 및 Data Matrix 생성기입니다.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - PostgreSQL용 파티션 관리 확장 기능입니다.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - PostgreSQL 노드 클러스터를 위한 Paxos 및 Paxos 기반 테이블 복제의 기본 구현입니다.
* [pg\_shard](https://github.com/citusdata/pg_shard) - 실시간 읽기 및 쓰기를 수평 확장하는 확장 기능입니다.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - PostgreSQL용 쿼리 성능 모니터링 도구입니다.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - 잠금을 최소화하며 팽창을 자동 정리하는 확장 기능입니다.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - CPU 집약적 작업 부하를 GPU로 오프로드하는 확장 기능입니다.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - 스트림에 SQL 쿼리를 지속 실행하고 결과를 테이블에 증분 저장하는 PostgreSQL 확장 기능입니다.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - plpgsql 소스 코드를 검사할 수 있는 확장 기능입니다.
* [PostGIS](http://postgis.net/) - PostgreSQL용 공간 및 지리 객체입니다.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - 암호화 라이브러리 Themis를 Postgres 확장 기능으로 바인딩해 PgSQL 측에 다양한 보안 서비스를 제공합니다.
* [zomboDB](https://github.com/zombodb/zombodb) - Elasticsearch 기반 인덱스를 사용해 효율적인 전문 검색을 지원하는 확장 기능입니다.
* [pgMemento](https://github.com/pgMemento/pgMemento) - PL/pgSQL 트리거와 서버 측 함수로 PostgreSQL 데이터베이스의 감사 추적을 제공합니다.
* [TimescaleDB](https://www.timescale.com/) - Postgres와 완벽하게 호환되는 오픈 소스 시계열 데이터베이스이며 확장 기능으로 배포됩니다.
* [pgTAP](https://pgtap.org/) - Postgres용 데이터베이스 테스트 프레임워크입니다.
* [HypoPG](https://github.com/HypoPG/hypopg) - 가상 인덱스 기능을 제공합니다.
* [pgRouting](https://github.com/pgRouting/pgrouting) - PostGIS/PostgreSQL 지리공간 데이터베이스에 경로 탐색 및 기타 네트워크 분석 기능을 추가합니다.
* [PGroonga](https://pgroonga.github.io/) - Groonga를 이용한 새 인덱스 접근 방식으로 모든 언어의 텍스트를 대상으로 초고속 전문 검색을 제공합니다.
* [PGAudit](https://www.pgaudit.org/) - PostgreSQL 감사 확장 기능(pgaudit)은 표준 로깅 기능을 통해 상세한 세션 및/또는 객체 감사 로그를 제공합니다.
* [PostgresML](https://postgresml.org/) - 벡터, LLM, 기존 머신러닝을 포함한 데이터베이스 내부 AI 및 머신러닝입니다. SQL만으로 모델의 전체 수명 주기를 학습, 예측, 관리합니다.
* [ParadeDB](https://github.com/paradedb/paradedb) - 검색 및 분석을 위한 Postgres입니다.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - PG Security Labels를 통해 Postgres 데이터베이스의 개인 식별 정보(PII) 또는 상업 민감 데이터를 마스킹하거나 대체하는 확장 기능입니다.

### 플랫폼
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - PostGIS, TimescaleDB, pgvector, H3를 결합해 지리공간 및 시계열 인텔리전스를 통합하는 오픈 소스 4D 시공간 플랫폼입니다.
* [neond](https://github.com/matisiekpl/neond) - 브랜치, PITR, S3 내구성을 제공하는 DX 중심 Postgres 제어 플레인입니다. 웹 대시보드를 포함한 단일 Docker 컨테이너로 제공되며 비중요 작업 부하에서 `postgres:latest` 대체재로 자리매김합니다.

### 작업 큐
* [BeanQueue](https://github.com/LaunchPlatform/bq) - SKIP LOCKED, LISTEN, NOTIFY 기반의 Python 작업 큐 프레임워크입니다.
* [pgmq](https://github.com/pgmq/pgmq) - Postgres에서 작동하는 경량 메시지 큐입니다. AWS SQS 및 RSMQ와 유사합니다.
* [river](https://github.com/riverqueue/river) - Go와 Postgres용 고성능 작업 처리 시스템입니다.
* [pgBoss](https://github.com/timgit/pg-boss) - Node.js에서 Postgres를 사용해 작업을 큐에 넣습니다.
* [dbos](https://www.dbos.dev/) - TypeScript와 Python용 내구성 있는 워크플로입니다.
* [Graphile Worker](https://worker.graphile.org) - Node.js로 작성된 고성능 PostgreSQL 작업 큐입니다.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Node.js용 "유지관리가 필요 없는" Postgres 큐입니다.

### 최적화
* [EverSQL](https://www.eversql.com/) - 자동 쿼리 최적화, 모니터링·분석 및 인덱스 추천 도구입니다 (상용 소프트웨어).
* [PEV2](https://github.com/dalibo/pev2) - 온라인 Postgres Explain 시각화 도구입니다.
* [pg_flame](https://github.com/mgartner/pg_flame) - 쿼리 계획 플레임 그래프 생성기입니다.
* [PgHero](https://github.com/ankane/pghero) - PostgreSQL 인사이트를 쉽게 확인합니다.
* [pgMustard](https://www.pgmustard.com/) - 현대적인 사용자 인터페이스
`EXPLAIN`용 인터페이스로, 성능 팁도 제공합니다 (상용 소프트웨어).
* [pgtune](https://github.com/gregs1104/pgtune/) - PostgreSQL 구성 마법사입니다.
* [pgtune](https://github.com/le0pard/pgtune) - PostgreSQL 구성 마법사의 온라인 버전입니다.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - pgtune 기반의 PostgreSQL 온라인 구성 도구입니다.
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL Workload Analyzer는 성능 통계를 수집하고 실시간 차트와 그래프를 제공해 PostgreSQL 서버 모니터링 및 튜닝을 돕습니다.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - pg_stat_statements를 확인할 수 있는 웹 UI입니다.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - 메모리, CPU 수 등 호스트 리소스를 바탕으로 TimescaleDB 데이터베이스를 최적 성능에 맞게 튜닝하는 프로그램입니다.
* [Metis](https://www.metisdata.io/product/troubleshooting) - PostgreSQL을 포함한 SQL 데이터베이스의 관측 가능성 및 성능 튜닝을 제공합니다 (상용 소프트웨어).
* [aqo](https://github.com/postgrespro/aqo) - PostgreSQL용 적응형 쿼리 최적화입니다.
* [pgassistant](https://github.com/beh74/pgassistant-community) - LLM 및 pgTune 통합으로 개발자가 데이터베이스를 이해하고 최적화하도록 돕는 PostgreSQL 도구입니다.

### 유틸리티
* [apgdiff](https://www.apgdiff.com/) - 두 데이터베이스 덤프를 비교하고 이전 스키마를 새 스키마로 업데이트하는 데 사용할 DDL 문을 출력합니다.
* [bemi](https://github.com/BemiHQ/bemi) - PostgreSQL 데이터 변경을 자동 추적합니다.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - 데이터베이스에서 Entity Relation(ER) 다이어그램을 생성합니다.
* [flyway](https://flywaydb.org/) - Postgres 등에서 사용하는 스키마 마이그레이션 도구입니다.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - 데이터 기반 애플리케이션 구축을 위한 클라우드 네이티브 데이터베이스 게이트웨이 및 프레임워크입니다. 데이터베이스용 API 게이트웨이와 같습니다.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQL 및 PostgreSQL용 데이터베이스 익명화 및 합성 데이터 생성 도구입니다.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - 세밀한 접근 제어를 제공하는 빠르고 즉각적인 실시간 Postgres GraphQL API를 만들고 데이터베이스 이벤트에서 webhook도 실행합니다.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - YML 및 LDAP에서 역할과 권한을 동기화합니다.
* [migra](https://github.com/djrobstep/migra) - Postgres 스키마용 diff 도구입니다.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Lanyrd의 MySQL에서 PostgreSQL로 변환하는 스크립트입니다.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - .NET 개발자가 [PostgreSQL 데이터베이스를 메시지 브로커로 사용](https://docs.particular.net/transports/postgresql)하게 하는 NServiceBus.Transport.PostgreSql 라이브러리입니다 (상용 소프트웨어).
* [ora2pg](http://ora2pg.darold.net) - Oracle 데이터베이스 스키마를 PostgreSQL 호환 스키마로 내보내는 Perl 모듈입니다.
* [pg\_activity](https://github.com/dalibo/pg_activity) - PostgreSQL 서버 활동 모니터링용 top 유사 애플리케이션입니다.
* [pg-formatter](https://github.com/gajus/pg-formatter) - PostgreSQL SQL 구문을 보기 좋게 정리하는 도구입니다 (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - 자문 잠금, SHA-256 변경 감지, PostgreSQL용 내장 린트 규칙 10개를 갖춘 안전성 우선 Node.js 마이그레이션 엔진입니다.
* [pganalyze](https://pganalyze.com) - PostgreSQL 성능 모니터링입니다 (상용 소프트웨어).
* [pgbadger](https://github.com/darold/pgbadger) - 빠른 PostgreSQL 로그 분석기입니다.
* [PgBouncer](http://www.pgbouncer.org/) - PostgreSQL용 경량 연결 풀러입니다.
* [pgCenter](https://github.com/lesovsky/pgcenter) - 통계 및 관리 작업을 위한 편리한 인터페이스입니다. 서비스를 다시 불러오고, 로그 파일을 보며, 데이터베이스 백엔드를 취소 또는 종료할 수 있습니다.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - 선택적 타입 재정의 및 마이그레이션 기능을 지원하는 MySQL에서 PostgreSQL로의 실시간 복제입니다.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - PostgreSQL 데이터를 다양한 형식으로 내보냅니다.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - PostgreSQL 문서 링크를 현재 버전으로 리디렉션하는 브라우저 확장 기능입니다.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - CSV와 JSON을 PostgreSQL로 간편하게 가져옵니다.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - 데이터베이스 안정성과 성능 개선 조치의 우선순위 목록을 제공하는 간편 배포형 오픈 소스 PostgreSQL 함수입니다. Brent Ozar의 SQL Server용 FirstResponderKit에서 직접 영감을 받았습니다.
* [PGInsight](http://pginsight.io/) - PostgreSQL 데이터베이스 내부를 깊이 탐색하는 간편한 CLI 도구입니다.
* [pg_insights](https://github.com/lob/pg_insights) - Postgres 데이터베이스 상태 모니터링을 위한 편리한 SQL입니다.
* [pgloader](https://github.com/dimitri/pgloader) - COPY 스트리밍 프로토콜로 PostgreSQL에 데이터를 적재하며 읽기와 쓰기에 별도 스레드를 사용합니다.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - 베어메탈, 가상 머신 또는 Kubernetes에 배포 가능한 Postgres 지표 수집 및 시각화 도구입니다.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - 연결 풀링, 복제, 로드 밸런싱 및 초과 연결 제한을 제공하는 미들웨어입니다.
* [pgspot](https://github.com/timescale/pgspot) - PostgreSQL 확장 기능 스크립트의 취약점을 찾아냅니다.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - 저렴한 AWS Spot 가상 머신에서 상태 저장형 Postgres를 실행하는 데몬입니다.
* [pgsync](https://github.com/ankane/pgsync) - PostgreSQL 데이터를 로컬 컴퓨터로 동기화하는 도구입니다.
* [PGXN client](https://github.com/pgxn/pgxnclient) - PostgreSQL Extension Network와 상호작용하는 명령줄 도구입니다.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQL 데이터베이스의 지표를 추출해 제공합니다.
* [PostgREST](https://github.com/PostgREST/postgrest) - 기존 PostgreSQL 데이터베이스에서 완전한 RESTful API를 제공합니다.
* [pREST](https://github.com/prest/prest) - PostgreSQL 데이터베이스에서 RESTful API를 제공합니다 (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - PostgreSQL 데이터베이스용 즉시 사용 가능한 GraphQL API 또는 스키마입니다.
* [yoke](https://github.com/nanopack/yoke) - 자동 장애 조치 및 클러스터 복구 기능을 갖춘 PostgreSQL 고가용성 클러스터입니다.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - 경량 Postgres `LISTEN`/`NOTIFY` 데몬으로, `node-postgres` 기반입니다.
* [ZSON](https://github.com/postgrespro/zson) - 투명한 JSONB 압축용 PostgreSQL 확장 기능입니다.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - PostgreSQL용 고속 데이터 적재 유틸리티입니다.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - PostgreSQL 코드베이스를 관리하고 VCS 사용을 간편하게 합니다.
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL용 고급 작업 스케줄러입니다.
* [sqitch](https://github.com/sqitchers/sqitch) - 버전이 지정된 스키마 배포를 관리하는 도구입니다.
* [pgmigrate](https://github.com/yandex/pgmigrate) - Yandex가 개발한 스키마 마이그레이션 발전용 CLI 도구입니다.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - 일부 지속적 차이를 허용할 수 있는 데이터베이스 스키마 비교 도구입니다.
* [pg-differ](https://github.com/multum/pg-differ) - PostgreSQL 테이블 구조를 간편하게 초기화·업데이트하는 마이그레이션 대안입니다 (Node.js).
* [Qail](https://github.com/qail-io/qail) - 컴파일 시 쿼리 검사와 내장 테넌트 범위 지정 기능을 갖춘 Rust 우선 타입형 PostgreSQL AST 파이프라인입니다.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - 일반적인 SQL 안티패턴을 자동 감지합니다. 이 패턴들은 쿼리를 느리게 할 수 있으므로 해결하면 쿼리 속도를 높일 수 있습니다.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Postgres 데이터베이스 상태를 심층 분석하는 차세대 진단 도구입니다.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Postgres 데이터베이스 스키마 버전 관리 도구입니다.
* [ScaffoldHub.io](https://scaffoldhub.io) - Angular, Vue 또는 React로 풀스택 PostgreSQL 앱을 생성합니다 (상용 소프트웨어).
* [planter](https://github.com/achiku/planter) - PostgreSQL 테이블에서 PlantUML ER 다이어그램 텍스트 설명을 생성합니다.
* [pgroll](https://github.com/xataio/pgroll) - 중단 시간 없이 적용하고 되돌릴 수 있는 Postgres 스키마 마이그레이션입니다.
* [RegreSQL](https://github.com/dimitri/regresql) - SQL 쿼리 회귀 테스트 모음을 구축, 유지관리, 실행하는 도구입니다.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Diesel 및 SQLx에서 위험한 Postgres 마이그레이션 패턴을 검사하는 린터입니다.

### 언어 바인딩
* Common Lisp: [Postmodern](https://github.com/marijnh/Postmodern)
* Clojure: [clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir: [postgrex](https://github.com/elixir-ecto/postgrex)
* Go: [pq](https://github.com/lib/pq), [pgx](https://github.com/jackc/pgx), [go-pg](https://github.com/go-pg/pg)
* Haskell: [postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java: [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/), [Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua: [luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core: [Npgsql](https://github.com/npgsql/npgsql)
* Node: [node-postgres](https://github.com/brianc/node-postgres), [pg-promise](https://github.com/vitaly-t/pg-promise), [pogi](https://github.com/holdfenytolvaj/pogi), [slonik](https://github.com/gajus/slonik), [postgres](https://github.com/porsager/postgres)
* Perl: [DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP: [Pomm](http://www.pomm-project.org), [pecl/pq](https://github.com/m6w6/ext-pq)
* Python: [psycopg2](https://pypi.org/project/psycopg2/), [asyncpg](https://pypi.org/project/asyncpg/), [pg8000](https://pypi.org/project/pg8000/)
* R: [RPostgres](https://github.com/r-dbi/RPostgres), [RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby: [pg](https://github.com/ged/ruby-pg)
* Rust: [rust-postgresql](https://github.com/sfackler/rust-postgres), [pgx](https://github.com/tcdi/pgx), [wtx](https://github.com/c410-f3r/wtx)
* TypeScript: [zapatos](https://github.com/jawj/zapatos)
* Zig: [pg.zig](https://github.com/karlseguin/pg.zig), [qail-zig](https://github.com/qail-io/qail-zig)

### PaaS *(서비스형 PostgreSQL)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - AWS, Azure, DigitalOcean, Google Cloud, UpCloud에서 제공되는 서비스형 PostgreSQL입니다. 월 19달러 단일 노드부터 대규모 고가용성 구성까지 요금제가 있으며 2주 무료 체험이 가능합니다.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - PostgreSQL용 Amazon Relational Database Service(RDS)입니다.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - 완전 관리형 엔터프라이즈급 커뮤니티 PostgreSQL 데이터베이스 서비스입니다. 기본 제공 고가용성, 탄력적 확장, Azure 생태계 네이티브 통합을 제공합니다.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres 전문가가 제공하는 완전 관리형 Postgres입니다. Amazon AWS, Google GCP, Microsoft Azure 등 주요 클라우드에서 이용할 수 있으며 전체 슈퍼유저 권한으로 업체 종속이 없습니다.
* [Database Labs](https://www.databaselabs.io) - 월 20달러부터 시작하는 프로덕션용 클라우드 PostgreSQL 서버를 몇 분 안에 제공합니다. 백업, 모니터링, 패치, 연중무휴 기술 지원이 포함됩니다.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - 완전 관리형 PostgreSQL 데이터베이스입니다. 무료 요금제는 없으며 월 15달러부터입니다. 시점 복구가 가능한 일일 백업과 자동 장애 조치 대기 노드를 제공합니다.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Google Cloud Platform에서 PostgreSQL 관계형 데이터베이스를 쉽게 설정, 유지관리, 관리 및 운영할 수 있는 완전 관리형 데이터베이스 서비스입니다.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - 무료부터 대규모 요금제까지 제공하며 PostgreSQL 전문가가 운영합니다. 앱을 Heroku에서 실행할 필요가 없습니다. 무료 요금제는 10,000개 행, 20개 연결, 최대 2개 백업을 포함하고 PostGIS를 지원합니다.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - 고가용성, 확장성, 보안을 갖춘 PostgreSQL입니다. 시점 복구 지원 일일 백업, 업체 종속 없음, 무료 수신·송신 트래픽을 제공합니다.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - 안전하고 신뢰할 수 있으며 관리 부담이 없는 PostgreSQL입니다. 모든 요금제에 저장 데이터 암호화, 자동 백업, 확장 가능한 SSD가 포함됩니다. 256MB RAM과 1GB 저장 공간 기준 월 7달러부터이며 첫 90일은 무료입니다.
* [Rivestack](https://rivestack.io) - pgvector 사전 설치 및 벡터 검색용 HNSW 튜닝이 적용된 관리형 PostgreSQL입니다. 무료 등급(2GB, 신용카드 불필요), 월 15달러부터의 고정 요금 전용 인스턴스, EU 및 미국 리전을 제공합니다.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - 고가용성, 전용 서버, 슈퍼유저 제어를 제공하는 완전 관리형 PostgreSQL 호스팅이며 최고의 멀티클라우드 Amazon RDS 대안입니다.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - EU에서 호스팅되는 완전 관리형 PostgreSQL 데이터베이스입니다. 고가용성, 확장, 자동 백업을 제공하며 월 10유로부터입니다.
* [Supabase](https://www.supabase.com) - 읽기 복제본, 시점 복구, 지원 패키지, 브라우저 GUI, 넉넉한 무료 등급을 갖춘 완전 관리형 Postgres입니다.
* [Neon](https://neon.tech) - 완전 관리형 서버리스 PostgreSQL입니다. 저장소와 컴퓨팅을 분리해 서버리스, 브랜치, 무제한 저장소 등의 현대적 개발자 기능을 제공합니다.
* [Nile](https://www.thenile.dev/) - 완전 관리형 PostgreSQL입니다. 저장소와 컴퓨팅을 분리하고 테넌트를 가상화해 멀티테넌트 AI 앱을 빠르고 안전하게, 제한 없이 확장합니다. 무료 등급은 데이터베이스 수에 제한이 없습니다.
* [PlanetScale](https://planetscale.com/postgres) - 현대적인 클라우드 인프라에서 구축한 완전 관리형 고가용성 PostgreSQL 데이터베이스 클러스터입니다.
* [Vela](https://vela.run) - 현대적인 AI 앱을 위한 Postgres 기반 백엔드 서비스입니다. 데이터베이스 브랜치와 복제본을 즉시 만들고, 프로덕션 유사 테스트 환경과 서버리스 확장을 제공합니다.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - 네덜란드에서 호스팅되는 멀티-AZ 완전 관리형 PostgreSQL 데이터베이스로 자동 백업을 제공합니다.

### Docker 이미지
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - 공식 Postgres 컨테이너를 기반으로 하고 citus 확장 기능이 포함된 Citus 공식 이미지입니다.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - 공식 Postgres 컨테이너 기반의 Postgres 9용 PostGIS 2.3입니다.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - 검색 및 분석용 ParadeDB입니다. pg_search 확장 기능이 포함된 공식 Postgres 컨테이너 기반입니다.
* [pglayers](https://github.com/pglayers/pglayers) - 조합 가능한 Docker 레이어 형태의 사전 빌드 PostgreSQL 확장 기능입니다. 확장 기능 50개 이상과 바로 쓸 수 있는 통합 이미지(full, Azure 호환)를 제공합니다.
* [postgres](https://hub.docker.com/_/postgres/) - 공식 postgres 컨테이너(Docker 제공)입니다.

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - 고가용성 Postgres 클러스터부터 완전한 데이터베이스 서비스까지 제공하는 Kubernetes용 프로덕션 PostgreSQL입니다.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - OpenShift Container Platform에서 제공되는 엔터프라이즈급 PostgreSQL입니다 (상용 소프트웨어).
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - 하나 이상의 PostgreSql 인스턴스 클러스터를 배포하고 데이터베이스 복제, 장애 조치, 백업을 관리하는 Kubernetes 오퍼레이터입니다.
* [StackGres Operator](https://github.com/ongres/stackgres/) - Kubernetes에서 제공되는 전체 스택 PostgreSQL입니다.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Kubernetes에서 실행되는 PostgreSQL 클러스터를 생성하고 관리합니다.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Kubernetes 환경에서 PostgreSQL 데이터베이스를 원활하게 관리하도록 설계된 종합 플랫폼입니다.
* [KubeDB operator](https://kubedb.com/) - Kubernetes에서 프로덕션급 데이터베이스를 실행합니다 (상용 소프트웨어).
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Crunchy Data 오퍼레이터 기반 PostgreSQL용 Percona 오퍼레이터입니다.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - MySQL, MongoDB, PostgreSQL 데이터베이스 수명 주기를 관리하는 Kubernetes 오퍼레이터입니다. 각 데이터베이스용 Percona 오퍼레이터를 활용하고 세 데이터베이스를 관리하는 통합 API 및 단일 관리 화면을 제공합니다.

## 자료

### 튜토리얼
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - wal-e를 사용한 PostgreSQL 연속 아카이빙 설정 튜토리얼입니다.
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - PostgreSQL Wiki의 운영 치트 시트입니다.
* [PG Casts](https://www.pgcasts.com) - Hashrocket이 제공하는 무료 주간 PostgreSQL 화면 녹화 강의입니다.
* [Postgres Guide](http://postgresguide.com/) - 초보자와 숙련자가 PostgreSQL의 팁을 찾고 이용 가능한 도구를 살펴보도록 돕는 안내서입니다.
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - 역할, 권한 부여, 소유권, 멤버십, 정책, 기본 권한을 통합적으로 설명하는 완전한 개념 모델입니다. PDF와 동영상, 약 60분 분량입니다.
* [PostgreSQL Exercises](https://pgexercises.com/) - 연습 문제를 풀며 PostgreSQL을 쉽게 배울 수 있도록 만든 사이트입니다.
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - PostgreSQL에 대한 매우 방대한 튜토리얼 모음입니다.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - 샘플 Postgres 스키마 모음입니다.
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - PostgreSQL에서 가장 흔히 쓰이는 명령 모음입니다.
* [pg-utils](https://github.com/dataegret/pg-utils) - Data Egret의 유용한 DBA 도구입니다.
* [pagila](https://github.com/xzilla/pagila) - Pagila Postgres 샘플 데이터베이스입니다.
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - 윈도 함수, CTE, PostgreSQL 전용 구문(UPSERT, JSON 쿼리, 배열 연산)을 다루는 포괄적인 SQL 구문 참고 자료입니다.

### 블로그
* [Planet PostgreSQL](https://planet.postgresql.org/) - PostgreSQL 블로그를 모아 제공하는 서비스입니다.
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - PostgreSQL의 유용한 기능, 팁과 요령에 관한 게시물 모음입니다.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Josh Berkus의 블로그입니다.
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Hubert Lubaczewski의 블로그입니다.
* [Metis Blog](https://www.metisdata.io/blog) - PostgreSQL, SQL 데이터베이스, 성능 및 튜닝 관련 게시물 모음입니다.
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md)
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - PIGSTY 작성자가 PostgreSQL과 데이터베이스 및 클라우드 인프라에 관해 통찰력 있는 글을 소개하는 블로그입니다.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - BigData Boutique 팀의 블로그로, 주로 분석을 다룹니다.

### 도서
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Hironobu Suzuki가 쓴 무료 전자책입니다.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Egor Rogov가 쓴 무료 전자책입니다.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - 프로덕션 환경의 Postgres 확장 방법을 다루는 실용 안내서로 튜닝, 연결 풀링, 파티셔닝, 고가용성을 설명합니다.


### 문서
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - 사용자 문서, 사용 방법, 유용한 팁과 요령을 제공합니다.
* [pgPedia](https://pgpedia.info/) - PostgreSQL 관련 항목을 설명하는 백과사전입니다.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - AI 에이전트를 사용해 PostgreSQL 코드베이스의 모든 심볼에 대한 문서 생성을 목표로 하는 프로젝트입니다.

### 뉴스레터

* [Postgres Weekly](https://postgresweekly.com/) - PostgreSQL 관련 기사, 뉴스, 저장소를 소개하는 주간 뉴스레터입니다.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Postgres 성능 관련 기사와 동영상을 소개하는 월간 뉴스레터입니다.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - pgsql-hackers 메일링 리스트의 주간 요약으로, 진행 중인 토론 주제와 요약 등을 제공합니다.

### 팟캐스트
* [PostgresFM](https://postgres.fm/) - Postgres 주제를 다루는 주간 토론입니다.
* [Scaling Postgres](https://www.scalingpostgres.com/) - PostgreSQL 관련 콘텐츠를 주간으로 정리해 소개합니다.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Postgres 업계 인물과의 월간 인터뷰입니다.

### 동영상
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Citus 관련 동영상입니다.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - EnterpriseDB 관련 동영상입니다.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - 컨퍼런스 동영상입니다.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Creston Jamison의 Postgres 동영상 블로그 시리즈입니다.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Postgres 발표, 해킹 세션, 인터뷰, 팟캐스트 에피소드를 제공합니다.

### 커뮤니티
* [Mailing lists](https://www.postgresql.org/list/) - 지원, 홍보 등을 위한 Postgres 공식 메일링 리스트입니다. PostgreSQL 커뮤니티의 주요 소통 채널 중 하나입니다.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - 12,000명 이상의 사용자가 참여하는 PostgreSQL 사용자 Reddit 커뮤니티입니다.
* [Slack](https://pgtreats.info/slack-invite) - 2만 명 이상이 참여하는 Postgres Slack 워크스페이스입니다.
* Telegram - 여러 언어로 운영되는 PostgreSQL 그룹: [Russian](https://t.me/pgsql) 회원 4,200명 이상, [Brazilian Portuguese](https://t.me/postgresqlbr) 2,300명 이상, [Indonesian](https://t.me/postgresql_id) 약 1,000명, [English](https://t.me/postgreschat) 750명 이상
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Freenode에서 가장 인기 있는 Postgres IRC 채널로, 사용자 수가 1,000명이 넘습니다.
* [Discord](https://discord.gg/bW2hsax8We) - 6,000명 이상이 참여하는 Postgres Discord 서버입니다.

### 로드맵
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - PostgreSQL을 단계별로 익힐 수 있도록 안내하는 로드맵입니다.

### 외부 목록
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Wikipedia의 데이터베이스 관리 도구 비교 목록입니다.
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - PostgreSQL Wiki의 GUI 도구 커뮤니티 안내서입니다.
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - PostgreSQL Wiki의 외부 데이터 래퍼 목록입니다.
