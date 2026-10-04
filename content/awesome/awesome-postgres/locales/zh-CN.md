# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> 精选的 [PostgreSQL](https://www.postgresql.org/) 软件、库、工具和资源列表，灵感来自 [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)。

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)，通常简称 Postgres，是一种[对象关系数据库](https://en.wikipedia.org/wiki/Object-relational_database)（ORDBMS）。PostgreSQL 符合 [ACID](https://en.wikipedia.org/wiki/ACID) 特性并支持[事务处理](https://en.wikipedia.org/wiki/Transaction_processing)。（了解更多：[维基百科：PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)、[PostgreSQL.org](https://www.postgresql.org)）

 :elephant: 欢迎贡献。请通过[拉取请求](https://github.com/dhamaniasad/awesome-postgres/pulls)添加链接，或创建[问题](https://github.com/dhamaniasad/awesome-postgres/issues)发起讨论。请先阅读[贡献指南](CONTRIBUTING.md)。

## 目录

- [Awesome Postgres](#awesome-postgres-)
    - [高可用](#high-availability)
    - [备份](#backups)
    - [图形界面](#gui)
    - [发行版](#distributions)
    - [命令行界面](#cli)
    - [服务器](#server)
    - [监控](#monitoring)
    - [扩展](#extensions)
    - [平台](#platforms)
    - [工作队列](#work-queues)
    - [优化](#optimization)
    - [实用工具](#utilities)
    - [语言绑定](#language-bindings)
    - [PaaS（PostgreSQL 即服务）](#paas-postgresql-as-a-service)
    - [Docker 镜像](#docker-images)
    - [Kubernetes](#kubernetes)
- [资源](#resources)
    - [教程](#tutorials)
    - [博客](#blogs)
    - [文档](#documentation)
    - [新闻简报](#newsletters)
    - [视频](#videos)
    - [社区](#community)
    - [路线图](#roadmaps)
    - [外部列表](#external-lists)

<a id="high-availability"></a>

### 高可用
* [autobase](https://github.com/vitabaks/autobase) - 面向 PostgreSQL® 的开源 DBaaS，可自动部署和管理高可用 PostgreSQL 集群。
* [BDR](https://github.com/2ndQuadrant/bdr) - 双向复制（BiDirectional Replication）——PostgreSQL 多主复制系统。
* [Patroni](https://github.com/zalando/patroni) - 使用 ZooKeeper 或 etcd 实现 PostgreSQL 高可用的模板。
* [Spock](https://github.com/pgEdge/spock) - 100% 开源的 PostgreSQL 逻辑多主复制。
* [Stolon](https://github.com/sorintlab/stolon) - 基于 Consul 或 etcd 的 PostgreSQL 高可用方案，并集成 Kubernetes。
* [pglookout](https://github.com/aiven/pglookout) - 复制监控与故障转移守护进程。
* [repmgr](https://github.com/2ndQuadrant/repmgr) - 用于管理 PostgreSQL 服务器集群中的复制与故障转移的开源工具套件。
* [Slony-I](https://slony.info/) - “一主多从”复制系统，支持级联复制和故障转移。
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL 自动故障转移（PAF）：基于 Pacemaker 和 Corosync 的 Postgres 高可用方案。
* [SkyTools](https://github.com/pgq/skytools-legacy) - 复制工具集，包含队列系统 PgQ，以及比 Slony 更易管理的复制系统 Londiste。
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - 用于自动故障转移和高可用的 Postgres 扩展与服务。
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - 实时从 PostgreSQL 服务器流式传输预写日志（WAL）。可直接替代 pg_receivewal，适合容器环境。
* [pg-status](https://github.com/krylosov-aa/pg-status) - 提供 HTTP 端点，可即时获取当前主机，或符合各种条件的副本主机。

<a id="backups"></a>

### 备份
* [Barman](https://www.pgbarman.org/index.html) - 2ndQuadrant 推出的 PostgreSQL 备份与恢复管理器。
* [Databasus](https://databasus.com) - 通过 Web 界面定时备份 PostgreSQL 的工具，支持外部存储（本地、S3、FTP、Google Drive 等）、通知（webhook、Discord、Slack 等）和团队管理。
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - PostgreSQL 高级 WAL 文件管理工具。
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – pg\_arman 的分支，由 @PostgresPro 改进；支持增量备份、从副本备份、多线程备份与恢复，以及无需归档命令的匿名备份。
* [pgBackRest](https://pgbackrest.org/)  - 可靠的 PostgreSQL 备份与恢复工具。
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - 功能完备、基于 Docker 的 Postgres 备份与维护工具，带有 Web 界面。
* [pg\_back](https://github.com/orgrim/pg_back/) - pg\_back 是一个简单的备份脚本。
* [pghoard](https://github.com/aiven/pghoard) - 面向云对象存储（AWS S3、Azure、Google Cloud、OpenStack Swift）的备份与恢复工具。
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - 实用的 Docker 容器，可定期将 PostgreSQL 备份到阿里云对象存储（OSS）。
* [wal-e](https://github.com/wal-e/wal-e) (已停止维护) - Heroku 推出的简易 PostgreSQL 连续归档工具，可归档到 S3、Azure 或 Swift。
* [wal-g](https://github.com/wal-g/wal-g) - WAL-E 的后继项目，以 Go 重写。目前支持 AWS（S3）、Google Cloud（GCS）、Azure、OpenStack Swift、MinIO 和文件系统等云对象存储。支持块级增量备份、将备份任务卸载到备用服务器，并提供并行化与限流选项。除 Postgres 外，WAL-G 也可用于 MySQL 和 MongoDB。
* [pitrery](https://dalibo.github.io/pitrery/) - 一组用于管理 PostgreSQL 时间点恢复（PITR）备份的 Bash 脚本。
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` 是轻量级 Docker sidecar 容器，通过 `pg_dump`、`cron` 和 bash 脚本自动执行 PostgreSQL 数据库的定期备份，并将输出发送到 webhook。
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - 以 pg_dump 为基础、优先采用 Docker 的解决方案，支持通过环境变量配置定时 PostgreSQL 备份，可选压缩、GPG 加密、webhook 通知，并自动上传到 Amazon S3。

<a id="gui"></a>

### 图形界面
* [1bench](https://1bench.dev/postgresql) - 原生跨平台 GUI，除 Redis、Elasticsearch、ClickHouse、Qdrant 等外，也将 Postgres 作为一等支持对象。（商业软件）
* [Adminer](https://www.adminer.org/) - 使用 PHP 编写、功能齐全的数据库管理工具。
* [AI for Database](https://aifordatabase.com) - 用自然语言与 PostgreSQL 数据库对话，无需 SQL——即时获取洞察、构建自动刷新的仪表板，并根据数据库变更触发自动化工作流。（商业软件）
* [Beekeeper Studio](https://www.beekeeperstudio.io) - 免费开源的 SQL 客户端，界面现代，对 Postgres 支持出色，且支持跨平台。
* [Bytebase](https://www.bytebase.com) - 面向开发、安全、DBA 和平台工程团队的数据库 DevSecOps 解决方案。
* [Chartbrew](https://chartbrew.com) - 根据 PostgreSQL 数据创建实时仪表板、图表和客户报告，并提供 SQL 查询工具。
* [Count](https://count.co/) - 基于 Web 的分析平台，采用笔记本界面并可连接 PostgreSQL。（商业软件）
* [DataGrip](https://www.jetbrains.com/datagrip/) - 具备高级工具集、跨平台体验出色的 IDE。（商业软件）
* [Dekart](https://github.com/dekart-xyz/dekart) - 开源平台，可将 PostGIS 查询转换为可分享的交互式地图。
* [Datazenit](https://datazenit.com/) - 基于 Web 的 PostgreSQL 图形界面。（商业软件）
* [DataRow](https://www.datarow.com/) - 适用于 Amazon Redshift 的跨平台 SQL 客户端：简单、易用且可扩展。
* [DBConvert Streams](https://streams.dbconvert.com/) - 数据库 IDE，支持 PostgreSQL、MySQL、文件和兼容 S3 的存储之间的迁移、联邦 SQL 和 CDC 复制。（商业软件）
* [DBeaver](https://dbeaver.io/) - 通用数据库管理器，对 PostgreSQL 支持出色。
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - 一体化多数据库解决方案，支持 PostgreSQL、MySQL、MariaDB、SQL Server、Oracle 以及各种相关云服务。（商业软件）
* [DbVisualizer](http://www.dbvis.com) - 面向开发者、DBA 和分析师的跨平台数据库客户端。（商业软件）
* [Holistics](https://www.holistics.io/) - 在线跨平台数据库管理工具和 SQL 查询报表 GUI，对 PostgreSQL 支持出色。（商业软件）
* [JackDB](https://www.jackdb.com/) - 基于 Web 的 SQL 查询界面。（商业软件）
* [Luna Modeler](http://www.datensen.com) - 跨平台桌面数据建模工具。（商业软件）
* [Mathesar](https://mathesar.org/) -  提供直观数据库使用体验的 Web 应用。
* [Metabase](https://www.metabase.com/) - 适用于 PostgreSQL 的简洁仪表板、图表和查询工具。
* [Numeracy](https://numeracy.co/) - 面向 PostgreSQL 的快速 SQL 编辑器，带有图表和仪表板。（商业软件）
* [OrcaQ](https://github.com/cin12211/orca-q) - 现代开源数据库编辑器，支持 PostgreSQL、MySQL、Redis 等；提供 AI 助手、ERD 可视化、模式差异比较和可视化角色管理。
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQL 管理与维护 GUI。
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - 用自然语言与 Postgres 对话。（商业软件）
* [PgManage](https://github.com/commandprompt/pgmanage) - 现代化、多平台、以 Postgres 为核心的数据库客户端与管理工具。
* [pgModeler](https://pgmodeler.io/) - pgModeler 是一款开源 PostgreSQL 数据库建模工具。
* [PgStudio](https://github.com/dev-asterix/PgStudio) - 开源 VS Code / Open VSX PostgreSQL 管理扩展，提供 SQL 笔记本、AI 助手、易用代码片段，以及带实时监控仪表板的完整 DBMS。
* [pgweb](https://github.com/sosedoff/pgweb) - 使用 Go 编写的 Web PostgreSQL 数据库浏览器。
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - 首屈一指的 PostgreSQL Web 管理工具。
* [Postbird](https://github.com/Paxa/postbird) - macOS PostgreSQL 客户端。
* [PostgresCompare](https://www.postgrescompare.com) - 跨平台数据库比较与部署工具。（商业软件）
* [Postico](https://eggerapps.at/postico/) - macOS 现代 PostgreSQL 客户端。（商业软件）
* [QueryGlow](https://queryglow.com/) - 自托管 Web 数据库 GUI，支持 AI SQL 生成、EXPLAIN 可视化和感知模式的自动补全。（商业软件）
* [PSequel](http://www.psequel.com/) - 简洁易用的界面，可快速完成常见 PostgreSQL 任务。（商业软件）
* [Redash](https://github.com/getredash/redash) - 连接任意数据源，轻松可视化和分享数据。
* [SQL Tabs](http://www.sqltabs.com/) - 使用 JS 编写的跨平台 PostgreSQL 桌面客户端。
* [SQLPro for Postgres](http://macpostgresclient.com/) - 适用于 macOS 的简单而强大的 PostgreSQL 管理器。（商业软件）
* [temBoard](https://github.com/dalibo/temboard) - 基于 Web 的 PostgreSQL GUI 与监控工具。
* [Teable](https://github.com/teableio/teable) - 超快速、实时、专业、开发者友好、无代码的数据库。
* [TablePlus](https://tableplus.com/) - 原生应用，可编辑数据库及其结构，并提供高等级安全保障。（商业软件）
* [TablePro](https://tablepro.app/) - 原生 macOS PostgreSQL 客户端，支持执行计划可视化、ER 图和 AI 助手。免费开源。
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - 跨平台数据库管理工具（免费/商业版）。
* [DbGate](https://dbgate.org) - 最智能的（No）SQL 数据库客户端。
* [WebDB](https://webdb.app) – 高效的数据库 IDE。

<a id="distributions"></a>

### 发行版
* [Postgres.app](https://postgresapp.com/) - 在 macOS 上开始使用 PostgreSQL 的最简单方式。
* [Pigsty](https://github.com/Vonng/pigsty) - 功能齐备的 PostgreSQL 开源发行版，提供顶级可观测性和面向开发者的 Database-as-Code 工具箱。

<a id="cli"></a>

### 命令行界面
* [atlas](https://github.com/ariga/atlas) - 遵循现代 DevOps 原则管理和迁移数据库模式的工具。
* [pgcli](https://github.com/dbcli/pgcli) - 支持自动补全和语法高亮的 Postgres 命令行工具。
* [pgfence](https://pgfence.com) - 检查 Postgres SQL 迁移中的锁模式和高风险 DDL，并安全地重写为扩展/收缩迁移。提供 CLI 和 LSP，并支持从 Prisma、TypeORM 和 Knex 提取迁移。
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - 使用 Go 编写，支持自动补全和语法高亮的 Postgres 命令行工具。
* [pgplan](https://github.com/JacobArthurs/pgplan) - 在命令行中比较和分析 PostgreSQL EXPLAIN 执行计划。
* [pgschema](https://www.pgschema.com) - 面向 Postgres、采用 Terraform 风格的声明式模式迁移工具。
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - 用于比较 Postgres 模式并生成 SQL 迁移的 CLI（及 Go 语言库），可尽量减少锁定。
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - PostgreSQL 迁移安全 CLI，可在生产环境部署前捕获危险 DDL；包含 80 条规则、锁分类、自动修复和 GitHub Action。
* [pgsh](https://github.com/sastraxi/pgsh) - 像 Git 一样为 PostgreSQL 数据库创建分支。
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - PostgreSQL 内置 CLI 客户端。
* [psql2csv](https://github.com/fphilipe/psql2csv) - 在 psql 中运行查询并将结果输出为 CSV。
* [sabiql](https://github.com/riii111/sabiql) - 快速、无需驱动的 TUI，用于浏览、查询和编辑 PostgreSQL 数据库。
* [schemaspy](https://github.com/schemaspy/schemaspy) - 符合 JAVA JDBC 标准的 SchemaSpy 工具，可将数据库文档生成为 HTML，并包含实体关系图。
* [pdot](https://gitlab.com/dmfay/pdot) - 在 shell 中可视化和探索数据库结构，既可查看上下文丰富的外键关系图，也可查看触发器级联、角色继承与权限等信息。
* [squix](https://github.com/eduardofuncao/squix) - 支持查询管理和交互式结果的 SQL 命令行客户端。

<a id="server"></a>

### 服务器
* [AgensGraph](https://bitnine.net/) - 基于 PostgreSQL 构建的强大图数据库。
* [Apache Cloudberry](https://github.com/apache/cloudberry) - 一个 MPP PostgreSQL 分支，是 Greenplum Database 的开源替代品。
* [FerretDB](https://www.ferretdb.io) - 基于 PostgreSQL 的真正开源 MongoDB 替代方案。
* [Postgres-XL](https://www.postgres-xl.org/) - 可扩展的开源 PostgreSQL 数据库集群。
* [YugabyteDB](https://yugabyte.com/) - 基于 PostgreSQL 分支构建、运行于分布式存储与事务之上的开源分布式 SQL 数据库。

### 安全
* [Acra](https://github.com/cossacklabs/acra) - SQL 数据库安全套件：通过代理保护数据、透明地实时加密数据、提供 SQL 防火墙（防止 SQL 注入）和入侵检测系统。
* [pgrls](https://github.com/pgrls/pgrls) - 行级安全策略静态分析器；提供涵盖安全、性能和规范性的 36 条规则，其中 10 条支持机械化自动修复；还包含用于 CI 门禁的语义策略差异命令。

<a id="monitoring"></a>

### 监控
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - 用于从 Nagios 监控 PostgreSQL 集群，提供多种选项以测量和监控有用的性能指标。
* [Check\_postgres](https://github.com/bucardo/check_postgres) - 用于检查 PostgreSQL 数据库状态的 Nagios check_postgres 插件。
* [coroot](https://github.com/coroot/coroot) - 开源 APM 与可观测性工具，是 DataDog 和 NewRelic 的替代品。由 eBPF 驱动，可快速洞察系统性能。
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - SaaS 监控服务，可收集并可视化指标、查询和执行计划，并在出现问题时发送告警。（商业软件）
* [Instrumental](https://github.com/Instrumental/instrumentald) - 实时性能监控，包含便于快速配置的[预制图表](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs)。（商业软件）
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - 功能全面的 Zabbix PostgreSQL 监控模块。
* [myDBA](https://mydba.dev) - PostgreSQL 性能监控，提供 75+ 项自动化健康检查、集群感知索引顾问、查询分析，以及对 TimescaleDB、pgvector 和 PostGIS 的扩展监控。（商业软件）
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management（PMM）是用于监控和管理 PostgreSQL、MySQL 与 MongoDB 的免费开源平台。
* [Pome](https://github.com/rach/pome) - Pome 是 PostgreSQL Metrics 的缩写。它是 PostgreSQL 指标仪表板，可跟踪数据库运行状况。
* [pgmetrics](https://pgmetrics.io/) - 开源、零依赖的单文件工具，可从运行中的 PostgreSQL 服务器收集大量信息和统计数据，以易读文本显示，或导出为 JSON 和 CSV 供脚本处理。
* [pg\_view](https://github.com/zalando/pg_view) - 开源命令行工具，可显示全局系统统计、各分区信息、内存统计及其他信息。
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 灵活且易于上手的 PostgreSQL 指标监控工具，专注于 Grafana 仪表板。
* [pgwd](https://github.com/hrodrig/pgwd) - 监控 PostgreSQL 连接使用情况和过期会话，支持阈值告警、Prometheus 指标以及多种通知后端。
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - 运行 PostgreSQL 基准测试。
* [opm.io](http://opm.io) -  Open PostgreSQL Monitoring 是一套免费软件，可帮助管理 PostgreSQL 服务器。它能够收集统计数据、显示仪表板，并在出现问题时发送警告。
* [okmeter.io](https://okmeter.io/pg) - 基于代理的商业 SaaS 监控服务，配备非常详尽的 PostgreSQL 插件。它会自动收集数百项统计数据、展示各方面的仪表板，并在出现问题时发送告警。（商业软件）
* [dexter](https://github.com/ankane/dexter) - Postgres 自动索引器；可检测慢查询，并在配置后自动创建索引。
* [pg_ash](https://github.com/NikolayS/pg_ash) - PostgreSQL 的活动会话历史（ASH）。通过 pg_cron 每秒采样一次 pg_stat_activity，存储编码后的快照，并提供 32 个 SQL 函数用于等待事件分析。纯 SQL，无需扩展，可用于托管服务商（RDS、Cloud SQL、Supabase 等）。
* [pg_exporter](https://github.com/Vonng/pg_exporter) - 完全可定制的 PostgreSQL 与 Pgbouncer Prometheus exporter，支持细粒度执行控制。
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - 用于采集 PostgreSQL 服务器指标的 Prometheus exporter。
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - 开源 PostgreSQL 扩展，旨在高效、有序地管理高级统计信息。
* [pgvitals](https://github.com/pgvitals/pgvitals) - 包含 40 条只读诊断查询，可利用标准系统目录（无需扩展）发现常见性能问题，如慢查询、膨胀、VACUUM 延迟、锁竞争、复制延迟和回卷风险；另提供可将查询汇总为 0–100 健康分数的可选 CLI。

<a id="extensions"></a>

### 扩展
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - 众多 PostgreSQL 开源扩展的集中分发平台。
* [joelonsql 整理的扩展列表](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - 包含 1000 多个 PostgreSQL 扩展。
* [Pigsty 扩展目录](https://ext.pigsty.io/list/) - 包含 400 多个 PostgreSQL 扩展。
* [AGE](https://github.com/apache/age) - 添加功能完备的图数据库支持，包括 Cypher 查询。
* [OrioleDB](https://www.orioledb.com/) - PostgreSQL 的云原生存储引擎。OrioleDB 是一款 PostgreSQL 扩展，兼具磁盘引擎和内存引擎的优势。
* [Citus](https://github.com/citusdata/citus) - 适用于实时工作负载的可扩展 PostgreSQL 集群。
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - PostgreSQL 分析用列式存储。
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit 可在数据库内按列记录所有 DML 活动。
* [pg_search](https://github.com/paradedb/paradedb) - pg_search 是一款 PostgreSQL 扩展，可使用 BM25 算法（全文搜索领域的先进排序函数）对 SQL 表执行全文搜索。
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - PostgreSQL 扩展，提供 BM25 系列词法检索能力，包含原生索引访问方法和 SQL top-k 查询 API。
* [pg_cron](https://github.com/citusdata/pg_cron) - 在 PostgreSQL 中运行定期任务。
* [pglogical](https://github.com/2ndQuadrant/pglogical) - 提供逻辑流复制功能的扩展。
* [pgcat](https://github.com/kingluo/pgcat) - 增强型 PostgreSQL 逻辑复制。
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL SVG 二维码与 Data Matrix 生成器。
* [pg\_partman](https://github.com/pgpartman/pg_partman) - PostgreSQL 分区管理扩展。
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Paxos 及基于 Paxos 的集群节点间表复制的基础实现。
* [pg\_shard](https://github.com/citusdata/pg_shard) - 用于横向扩展实时读写的扩展。
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - PostgreSQL 查询性能监控工具。
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - 支持以最少锁定自动清理膨胀的扩展。
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - 可将 CPU 密集型工作负载卸载到 GPU 的扩展。
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - PostgreSQL 扩展，可在数据流上持续运行 SQL 查询，并将结果增量存储在表中。
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - 可检查 plpgsql 源代码的扩展。
* [PostGIS](http://postgis.net/) - PostgreSQL 的空间与地理对象支持。
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Themis 加密库的 Postgres 绑定扩展，在 PgSQL 端提供多种安全服务。
* [zomboDB](https://github.com/zombodb/zombodb) - 通过基于 Elasticsearch 的索引实现高效全文搜索的扩展。
* [pgMemento](https://github.com/pgMemento/pgMemento) - 使用 PL/pgSQL 编写的触发器和服务器端函数，为 PostgreSQL 数据库中的数据提供审计追踪。
* [TimescaleDB](https://www.timescale.com/) - 与 Postgres 完全兼容、以扩展形式分发的开源时序数据库。
* [pgTAP](https://pgtap.org/) - Postgres 数据库测试框架。
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG 提供假设/虚拟索引功能。
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRouting 扩展了 PostGIS/PostgreSQL 地理空间数据库，提供地理空间路径规划及其他网络分析功能。
* [PGroonga](https://pgroonga.github.io/) - PGroonga 提供一种新的索引访问方法，使用 Groonga 实现针对所有语言的超快速全文搜索。
* [PGAudit](https://www.pgaudit.org/) - PostgreSQL 审计扩展（pgaudit）通过 PostgreSQL 提供的标准日志功能，提供详细的会话级和/或对象级审计日志。
* [PostgresML](https://postgresml.org/) - 在数据库内实现机器学习和 AI，包括向量、LLM 和经典机器学习。仅使用 SQL 即可训练、预测并管理机器学习模型的整个生命周期。
* [ParadeDB](https://github.com/paradedb/paradedb) -  面向搜索和分析的 Postgres。
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - 通过 PG Security Labels 扩展屏蔽或替换 Postgres 数据库中的个人身份信息（PII）或商业敏感数据。

<a id="platforms"></a>

### 平台
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - 开源 4D 时空平台，整合 PostGIS、TimescaleDB、pgvector 和 H3，统一提供地理空间与时序智能分析。
* [neond](https://github.com/matisiekpl/neond) - 面向开发者体验（DX）的 Postgres 控制平面，支持分支、时间点恢复（PITR）和 S3 持久性。以单个 Docker 容器形式提供，并带有 Web 仪表板；定位为非关键工作负载的 `postgres:latest` 替代品。

<a id="work-queues"></a>

### 工作队列
* [BeanQueue](https://github.com/LaunchPlatform/bq) - 基于 SKIP LOCKED、LISTEN 和 NOTIFY 的 Python 工作队列框架。
* [pgmq](https://github.com/pgmq/pgmq) - 轻量级消息队列。类似 AWS SQS 和 RSMQ，但运行在 Postgres 上。
* [river](https://github.com/riverqueue/river) - 面向 Go 和 Postgres 的高性能作业处理系统。
* [pgBoss](https://github.com/timgit/pg-boss) - 轻松通过 Node.js 将作业加入 Postgres 队列。
* [dbos](https://www.dbos.dev/) - TypeScript 和 Python 中的持久化工作流。
* [Graphile Worker](https://worker.graphile.org) - 使用 Node.js 编写的 PostgreSQL 高性能作业队列。
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - 面向 Node.js 的“免维护” Postgres 队列。

<a id="optimization"></a>

### 优化
* [EverSQL](https://www.eversql.com/) - 自动化查询优化、监控与分析，以及索引推荐工具。（商业软件）
* [PEV2](https://github.com/dalibo/pev2) - 在线 Postgres EXPLAIN 可视化工具。
* [pg_flame](https://github.com/mgartner/pg_flame) - 查询执行计划火焰图生成器。
* [PgHero](https://github.com/ankane/pghero) - 轻松获取 PostgreSQL 洞察。
* [pgMustard](https://www.pgmustard.com/) - 用于
 `EXPLAIN` 的现代化界面，并提供性能建议（商业软件）。
* [pgtune](https://github.com/gregs1104/pgtune/) - PostgreSQL 配置向导。
* [pgtune](https://github.com/le0pard/pgtune) - PostgreSQL 配置向导的在线版本。
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - PostgreSQL 在线配置工具（同样基于 pgtune）。
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL 工作负载分析器，可收集性能统计信息并提供实时图表，帮助监控和调优 PostgreSQL 服务器。
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - 用于查看 pg_stat_statements 的 Web 界面。
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - 根据主机资源（如内存和 CPU 数量）调优 TimescaleDB 数据库，使其发挥最佳性能的程序。
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis 为包括 PostgreSQL 在内的 SQL 数据库提供可观测性和性能调优。（商业软件）
* [aqo](https://github.com/postgrespro/aqo) - PostgreSQL 自适应查询优化。
* [pgassistant](https://github.com/beh74/pgassistant-community) - 面向开发者的 PostgreSQL 工具，集成 LLM 和 pgTune，帮助理解和优化数据库。

<a id="utilities"></a>

### 实用工具
* [apgdiff](https://www.apgdiff.com/) - 比较两个数据库转储文件，并生成 DDL 语句，以便将旧数据库模式更新为新模式。
* [bemi](https://github.com/BemiHQ/bemi) - 自动跟踪 PostgreSQL 数据变更。
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy 可从数据库生成实体关系（ER）图。
* [flyway](https://flywaydb.org/) - 适用于 Postgres 等数据库的模式迁移工具。
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - 云原生数据库网关及数据驱动应用构建框架。类似 API 网关，不过服务对象是数据库。
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - 适用于 MySQL 和 PostgreSQL 的数据库匿名化与合成数据生成工具。
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - 在 Postgres 上即时提供极速、实时的 GraphQL API，具有细粒度访问控制，还可针对数据库事件触发 webhook。
* [ldap2pg](https://github.com/dalibo/ldap2pg) - 从 YML 和 LDAP 同步角色与权限。
* [migra](https://github.com/djrobstep/migra) - 类似 diff，但用于比较 Postgres 模式。
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Lanyrd 的 MySQL 到 PostgreSQL 转换脚本。
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - NServiceBus.Transport.PostgreSql 库允许 .NET 开发者[将 PostgreSQL 数据库用作消息代理](https://docs.particular.net/transports/postgresql)。（商业软件）
* [ora2pg](http://ora2pg.darold.net) - 将 Oracle 数据库模式导出为兼容 PostgreSQL 模式的 Perl 模块。
* [pg\_activity](https://github.com/dalibo/pg_activity) - 类似 top 的 PostgreSQL 服务器活动监控应用。
* [pg-formatter](https://github.com/gajus/pg-formatter) - PostgreSQL SQL 语法美化工具（Node.js）。
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - 以安全为先的 Node.js 迁移引擎，具备 advisory lock、SHA-256 漂移检测和 10 条内置 PostgreSQL lint 规则。
* [pganalyze](https://pganalyze.com) - PostgreSQL 性能监控。（商业软件）
* [pgbadger](https://github.com/darold/pgbadger) - 快速的 PostgreSQL 日志分析器。
* [PgBouncer](http://www.pgbouncer.org/) - 轻量级 PostgreSQL 连接池。
* [pgCenter](https://github.com/lesovsky/pgcenter) - 方便地查看各类统计信息、执行管理任务、重载服务、查看日志文件，以及取消或终止数据库后端进程。
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - 从 MySQL 到 PostgreSQL 的实时复制工具，支持可选的类型覆盖迁移和迁移能力。
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - 将 PostgreSQL 数据导出为多种数据格式。
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - 浏览器扩展，可将 PostgreSQL 文档链接重定向到当前版本。
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - 以简单方式将 CSV 和 JSON 导入 PostgreSQL。
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - 易于部署的开源 PostgreSQL 函数，可按优先级列出改善数据库稳定性和性能的操作。直接借鉴了 Brent Ozar 为 SQL Server 编写的 FirstResponderKit。
* [PGInsight](http://pginsight.io/) - 可轻松深入探索 PostgreSQL 数据库的 CLI 工具。
* [pg_insights](https://github.com/lob/pg_insights) - 用于监控 Postgres 数据库运行状况的便捷 SQL。
* [pgloader](https://github.com/dimitri/pgloader) - 使用 COPY 流式协议将数据载入 PostgreSQL，并通过独立线程分别读取和写入数据。
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Postgres 指标采集与可视化工具，可部署在裸机、虚拟机或 Kubernetes 上。
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - 提供连接池、复制、负载均衡和限制超额连接等功能的中间件。
* [pgspot](https://github.com/timescale/pgspot) - 检测 PostgreSQL 扩展脚本中的漏洞。
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - 用于在廉价 AWS Spot 虚拟机上运行有状态 Postgres 的守护进程。
* [pgsync](https://github.com/ankane/pgsync) - 将 PostgreSQL 数据同步到本地计算机的工具。
* [PGXN client](https://github.com/pgxn/pgxnclient) - 与 PostgreSQL Extension Network 交互的命令行工具。
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - 提取并提供 PostgreSQL 数据库指标的工具。
* [PostgREST](https://github.com/PostgREST/postgrest) - 从任意现有 PostgreSQL 数据库提供完整的 RESTful API。
* [pREST](https://github.com/prest/prest) - 从任意 PostgreSQL 数据库提供 RESTful API（Golang）。
* [PostGraphile](https://github.com/graphile/postgraphile) - 为 PostgreSQL 数据库即时提供 GraphQL API 或 GraphQL 模式。
* [yoke](https://github.com/nanopack/yoke) - 支持自动故障转移和自动集群恢复的 PostgreSQL 高可用集群。
* [pglistend](https://github.com/kabirbaidhya/pglistend) - 轻量级 Postgres `LISTEN`/`NOTIFY` 守护进程，基于 `node-postgres` 构建。
* [ZSON](https://github.com/postgrespro/zson) - 提供透明 JSONB 压缩功能的 PostgreSQL 扩展。
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - PostgreSQL 高速数据加载工具。
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - 管理 PostgreSQL 代码库，让版本控制更简单。
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 高级作业调度器。
* [sqitch](https://github.com/sqitchers/sqitch) - 用于管理版本化模式部署的工具。
* [pgmigrate](https://github.com/yandex/pgmigrate) - 由 Yandex 开发的 CLI 模式迁移演进工具。
* [pgcmp](https://github.com/cbbrowne/pgcmp) - 比较数据库模式，并允许保留某些持续存在的差异。
* [pg-differ](https://github.com/multum/pg-differ) - 轻松初始化/更新 PostgreSQL 表结构的工具，可作为迁移工具的替代方案（Node.js）。
* [Qail](https://github.com/qail-io/qail) - 以 Rust 为先的 PostgreSQL 类型化 AST 流水线，支持编译时查询检查和内置租户作用域。
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - 自动检测常见 SQL 反模式。这些模式往往会拖慢查询；修正后即可加快查询速度。
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - 新一代诊断工具，可对 Postgres 数据库的运行状况进行深入分析。
* [Pyrseas](https://github.com/perseas/Pyrseas) - Postgres 数据库模式版本管理。
* [ScaffoldHub.io](https://scaffoldhub.io) - 使用 Angular、Vue 或 React 生成全栈 PostgreSQL 应用。（商业软件）
* [planter](https://github.com/achiku/planter) - 根据 PostgreSQL 表生成 PlantUML 实体关系图文本描述。
* [pgroll](https://github.com/xataio/pgroll) - 零停机、可逆的 Postgres 模式迁移。
* [RegreSQL](https://github.com/dimitri/regresql) - 用于构建、维护和执行 SQL 查询回归测试套件的工具。
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - 用于 Diesel 和 SQLx 中危险 Postgres 迁移模式的 Linter。

<a id="language-bindings"></a>

### 语言绑定
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

<a id="paas-postgresql-as-a-service"></a>

### PaaS *(PostgreSQL 即服务)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - 在 AWS、Azure、DigitalOcean、Google Cloud 和 UpCloud 上提供 PostgreSQL 即服务；套餐从每月 19 美元的单节点实例到大型高可用部署不等，并提供两周免费试用。
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service（RDS）提供的 PostgreSQL 服务。
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL 提供完全托管、适用于企业的社区版 PostgreSQL 数据库即服务，内置高可用、弹性扩展能力，并与 Azure 生态系统原生集成。
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - 由 Postgres 专家提供的完全托管 Postgres，覆盖 Amazon AWS、Google GCP、Microsoft Azure 等主流云服务商。无厂商锁定，并提供完整超级用户权限。
* [Database Labs](https://www.databaselabs.io) - 只需几分钟即可获得可用于生产环境的云端 PostgreSQL 服务器，每月 20 美元起；包含备份、监控、补丁和全天候技术支持。
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - 完全托管的 PostgreSQL 数据库。无免费套餐，每月 15 美元起。提供每日备份和时间点恢复，以及支持自动故障转移的备用节点。
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - 完全托管的数据库服务，可轻松在 Google Cloud Platform 上设置、维护和管理 PostgreSQL 关系型数据库。
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - 套餐从免费到大型规格不等，由 PostgreSQL 专家运营。无需将应用部署在 Heroku 上。免费套餐包含 10,000 行、20 个连接、最多两份备份，并支持 PostGIS。
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - 高可用、可扩展且安全的 PostgreSQL。提供每日备份和时间点恢复、无厂商锁定，以及免费的入站和出站流量。
* [Render Managed PostgreSQL](https://render.com/docs/databases) - 安全、可靠、全托管且无需操心的 PostgreSQL。所有套餐均包含静态数据加密、自动备份和可扩展 SSD 存储。套餐每月 7 美元起，含 256MB RAM 和 1GB 存储（前 90 天免费）。
* [Rivestack](https://rivestack.io) - 预装 pgvector 并针对向量搜索调优 HNSW 的托管 PostgreSQL。免费层提供 2 GB，无需信用卡；专用实例统一定价，每月 15 美元起，提供欧盟和美国区域。
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - 完全托管的 PostgreSQL 托管服务，提供高可用、专用服务器和超级用户控制，是排名第一的多云 Amazon RDS 替代方案。
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - 完全托管的 PostgreSQL 数据库，提供高可用、扩展和自动备份，托管于欧盟。每月 10 欧元起。
* [Supabase](https://www.supabase.com) - 完全托管的 Postgres，提供只读副本、时间点恢复、支持套餐、基于浏览器的 GUI，以及宽裕的免费层。
* [Neon](https://neon.tech) - 完全托管的无服务器 PostgreSQL。Neon 将存储与计算分离，以提供无服务器、分支、近乎无限的存储等现代开发者功能。
* [Nile](https://www.thenile.dev/) - 完全托管的 PostgreSQL。Nile 将存储与计算分离，并虚拟化租户，以便快速、安全地构建可无限扩展的多租户 AI 应用。免费层提供无限量数据库。
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale for Postgres 基于现代云基础设施，提供完全托管的高可用 PostgreSQL 数据库集群。
* [Vela](https://vela.run) - 基于 Postgres、面向现代 AI 应用构建的后端即服务。提供即时数据库分支和克隆、仿真生产环境的测试环境以及无服务器扩展。
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - 完全托管的 PostgreSQL 数据库，支持多可用区和自动备份，托管于荷兰。

<a id="docker-images"></a>

### Docker 镜像
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Citus 官方镜像，包含 Citus 扩展。基于官方 Postgres 容器构建。
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - 运行于 Postgres 9 上的 PostGIS 2.3。基于官方 Postgres 容器构建。
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB 是面向搜索和分析的 Postgres。基于官方 Postgres 容器构建，并包含 pg_search 扩展。
* [pglayers](https://github.com/pglayers/pglayers) - 预构建的 PostgreSQL 扩展，可组合为 Docker 层。提供 50 多种扩展，以及可直接使用的组合镜像（完整版、兼容 Azure）。
* [postgres](https://hub.docker.com/_/postgres/) -  Docker 提供的官方 Postgres 容器。

<a id="kubernetes"></a>

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - 面向生产环境的 Kubernetes PostgreSQL，从高可用 Postgres 集群到完整的数据库即服务。
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - 运行于 OpenShift Container Platform 上的企业级 PostgreSQL。（商业软件）
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegres 是 Kubernetes 运算符，可部署一个或多个 PostgreSql 实例集群，并管理数据库复制、故障转移和备份。
* [StackGres Operator](https://github.com/ongres/stackgres/) -  Kubernetes 上的完整 PostgreSQL 技术栈。
* [Zalando Operator](https://github.com/zalando/postgres-operator) - 创建并管理运行在 Kubernetes 中的 PostgreSQL 集群。
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - 全面的平台，旨在无缝管理 Kubernetes 环境中的 PostgreSQL 数据库。
* [KubeDB operator](https://kubedb.com/) - 在 Kubernetes 上运行生产级数据库。（商业软件）
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - 基于 Crunchy Data 运算符构建的 Percona PostgreSQL 运算符。
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest 运算符是一个 Kubernetes 运算符，负责管理 MySQL、MongoDB 和 PostgreSQL 数据库的生命周期。它在底层使用 Percona 的 MySQL、MongoDB 和 PostgreSQL Kubernetes 运算符，并提供统一 API 和单一管理界面，以管理这三种数据库。

<a id="resources"></a>

## 资源

<a id="tutorials"></a>

### 教程
* [使用 wal-e 备份和恢复 PostgreSQL 数据库](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - 介绍如何使用 wal-e 在 PostgreSQL 中设置连续归档的教程。
* [运维速查表](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - PostgreSQL Wiki 提供的运维速查表。
* [PG Casts](https://www.pgcasts.com) - Hashrocket 制作的免费 PostgreSQL 每周屏幕录播。
* [Postgres 指南](http://postgresguide.com/) - 旨在帮助初学者和有经验的用户查找特定技巧，并探索 PostgreSQL 可用工具的指南。
* [PostgreSQL 访问控制](https://andersnasell.gumroad.com/l/postgresql-access-control) - 完整的思维模型：将角色、授权、所有权、成员关系、策略和默认权限作为一个整体系统来理解。PDF + 视频，约 60 分钟。
* [PostgreSQL Exercises](https://pgexercises.com/) - 通过练习轻松学习 PostgreSQL 的网站。
* [tutorialspoint PostgreSQL 教程](http://www.tutorialspoint.com/postgresql/) - 内容非常丰富的 PostgreSQL 教程合集。
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Postgres 示例模式合集。
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - PostgreSQL 中最常用命令的合集。
* [pg-utils](https://github.com/dataegret/pg-utils) - Data Egret 提供的实用 DBA 工具。
* [pagila](https://github.com/xzilla/pagila) - Pagila，Postgres 示例数据库。
* [SQL 语法速查表](https://github.com/mergisi/sql-syntax-cheat-sheet) - 全面的 SQL 语法参考，涵盖窗口函数、CTE 和 PostgreSQL 特有语法（UPSERT、JSON 查询、数组操作）。

<a id="blogs"></a>

### 博客
* [Planet PostgreSQL](https://planet.postgresql.org/) - PostgreSQL 博客聚合服务。
* [Andrew Dunstan 的 PostgreSQL 与技术博客](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian 的 PostgreSQL 博客](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens 的 PostgreSQL 文章](http://www.craigkerstiens.com/categories/postgres/) - 介绍 PostgreSQL 有趣功能、技巧与窍门的一系列文章。
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Josh Berkus 的博客。
* [Michael Paquier 的博客](https://paquier.xyz/)
* [Percona 的 PostgreSQL 博文](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas 的博客](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Hubert Lubaczewski 的博客。
* [Metis Blog](https://www.metisdata.io/blog) - 关于 PostgreSQL、SQL 数据库、性能和调优的一系列文章。
* [Digoal 的 PostgreSQL 与技术博客（中文）](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty 博客 / PostgreSQL](https://pigsty.io/blog/pg/) - PIGSTY 作者撰写的博客，包含关于 PostgreSQL（以及数据库和云基础设施）的深度文章。
* [BigData Boutique 博客 / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - BigData Boutique 团队的博客，主要关注分析领域。

### 图书
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Hironobu Suzuki 编写的免费电子书。
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Egor Rogov 编写的免费电子书。
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - 生产环境 Postgres 扩展实战指南，涵盖调优、连接池、分区和高可用。


<a id="documentation"></a>

### 文档
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - 用户文档、操作指南和实用技巧。
* [pgPedia](https://pgpedia.info/) - 关于 postgreSQL 相关内容的百科全书。
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - 旨在利用 AI 智能体为 PostgreSQL 代码库中的所有符号生成文档的项目。

<a id="newsletters"></a>

### 新闻简报

* [Postgres Weekly](https://postgresweekly.com/) - 每周发布的新闻简报，包含与 PostgreSQL 相关的文章、新闻和代码仓库。
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - 每月发布的新闻简报，包含 Postgres 性能相关文章和视频。
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - pgsql-hackers 邮件列表的每周摘要，汇总活跃讨论主题、主题摘要等内容。

### 播客
* [PostgresFM](https://postgres.fm/) - 每周讨论 Postgres 相关主题。
* [Scaling Postgres](https://www.scalingpostgres.com/) - 每周汇总 PostgreSQL 相关内容。
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - 每月采访 Postgres 社区人士。

<a id="videos"></a>

### 视频
* [Citus Data YouTube 频道](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Citus 相关视频。
* [EnterpriseDB YouTube 频道](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - EnterpriseDB 相关视频。
* [Postgres Conference YouTube 频道](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - 会议视频。
* [Scaling Postgres](https://www.scalingpostgres.com/) - Creston Jamison 制作的 Postgres 视频博客系列。
* [PostgresTV YouTube 频道](https://www.youtube.com/@PostgresTV) - Postgres 演讲、黑客活动、访谈和播客节目。

<a id="community"></a>

### 社区
* [邮件列表](https://www.postgresql.org/list/) - Postgres 官方邮件列表，用于支持、推广等，是 Postgres 社区的主要沟通渠道之一。
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - 拥有超过 12,000 名用户的 PostgreSQL 用户 Reddit 社区。
* [Slack](https://pgtreats.info/slack-invite) - 拥有超过 2 万名成员的 Postgres Slack 工作区。
* Telegram - 多个语言的 PostgreSQL 群组：[俄语](https://t.me/pgsql)超过 4,200 人，[巴西葡萄牙语](https://t.me/postgresqlbr)超过 2,300 人，[印度尼西亚语](https://t.me/postgresql_id)约 1,000 人，[英语](https://t.me/postgreschat)超过 750 人。
* [#postgresql Freenode 频道](https://webchat.freenode.net/#postgresql) - Freenode 上最受欢迎的 Postgres IRC 频道，拥有超过 1,000 名用户。
* [Discord](https://discord.gg/bW2hsax8We) - 拥有超过 6,000 名成员的 Postgres Discord 服务器。

<a id="roadmaps"></a>

### 路线图
* [PostgreSQL 路线图](https://roadmap.sh/postgresql-dba) - 提供循序渐进 PostgreSQL 学习指南的路线图。

<a id="external-lists"></a>

### 外部列表
* [维基百科数据库管理工具列表](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - 维基百科上的数据库管理工具比较。
* [PostgreSQL Wiki GUI 工具列表](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - PostgreSQL GUI 工具社区指南。
* [PostgreSQL Wiki 外部数据包装器列表](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - PostgreSQL Wiki 外部数据包装器列表。
