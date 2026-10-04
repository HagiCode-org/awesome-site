
# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> 精選的 [PostgreSQL](https://www.postgresql.org/) 軟體、函式庫、工具與資源清單，靈感來自 [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)，通常簡稱 Postgres，是一種[物件關聯式資料庫](https://en.wikipedia.org/wiki/Object-relational_database)（ORDBMS）。PostgreSQL 符合 [ACID](https://en.wikipedia.org/wiki/ACID) 特性並支援[交易處理](https://en.wikipedia.org/wiki/Transaction_processing)。（更多資訊：[維基百科：PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)、[PostgreSQL.org](https://www.postgresql.org)）

:elephant: 歡迎貢獻。請透過 [Pull Request](https://github.com/dhamaniasad/awesome-postgres/pulls) 新增連結，或建立[議題](https://github.com/dhamaniasad/awesome-postgres/issues)開始討論。請參閱[貢獻指南](CONTRIBUTING.md)。

<a id="contents"></a>

## 目錄

- [Awesome Postgres](#awesome-postgres-)
    - [高可用性](#high-availability)
    - [備份](#backups)
    - [圖形介面](#gui)
    - [發行版](#distributions)
    - [命令列介面](#cli)
    - [伺服器](#server)
    - [監控](#monitoring)
    - [擴充功能](#extensions)
    - [平台](#platforms)
    - [工作佇列](#work-queues)
    - [最佳化](#optimization)
    - [工具](#utilities)
    - [語言繫結](#language-bindings)
    - [PaaS（PostgreSQL 即服務）](#paas-postgresql-as-a-service)
    - [Docker 映像](#docker-images)
    - [Kubernetes](#kubernetes)
- [資源](#resources)
    - [教學](#tutorials)
    - [部落格](#blogs)
    - [文件](#documentation)
    - [電子報](#newsletters)
    - [影片](#videos)
    - [社群](#community)
    - [路線圖](#roadmaps)
    - [外部清單](#external-lists)

<a id="high-availability"></a>

### 高可用性
* [autobase](https://github.com/vitabaks/autobase) - Autobase for PostgreSQL® 是開放原始碼 DBaaS，可自動部署及管理高可用性 PostgreSQL 叢集。
* [BDR](https://github.com/2ndQuadrant/bdr) - 雙向複寫（BiDirectional Replication），PostgreSQL 多主機複寫系統。
* [Patroni](https://github.com/zalando/patroni) - 使用 ZooKeeper 或 etcd 的 PostgreSQL 高可用性範本。
* [Spock](https://github.com/pgEdge/spock) - 100% 開放原始碼的 PostgreSQL 邏輯式多主機複寫。
* [Stolon](https://github.com/sorintlab/stolon) - 以 Consul 或 etcd 為基礎的 PostgreSQL 高可用性方案，並整合 Kubernetes。
* [pglookout](https://github.com/aiven/pglookout) - 複寫監控與容錯移轉常駐程式。
* [repmgr](https://github.com/2ndQuadrant/repmgr) - 開放原始碼工具套件，用於管理 PostgreSQL 伺服器叢集中的複寫與容錯移轉。
* [Slony-I](https://slony.info/) - 支援級聯與容錯移轉的「一主多從」複寫系統。
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL 自動容錯移轉（PostgreSQL Automatic Failover）：以 Pacemaker 和 Corosync 為基礎的 Postgres 高可用性方案。
* [SkyTools](https://github.com/pgq/skytools-legacy) - 複寫工具，包含佇列系統 PgQ，以及比 Slony 更容易管理的複寫系統 Londiste。
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Postgres 擴充功能與服務，可自動執行容錯移轉並提供高可用性。
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - 即時串流 PostgreSQL 伺服器的預寫式記錄（WAL），可直接替代 pg_receivewal，且適合容器環境。
* [pg-status](https://github.com/krylosov-aa/pg-status) - 微服務，提供 HTTP 端點以即時取得目前主機，或符合各種條件的複本主機。

<a id="backups"></a>

### 備份
* [Barman](https://www.pgbarman.org/index.html) - 由 2ndQuadrant 提供的 PostgreSQL 備份與復原管理工具。
* [Databasus](https://databasus.com) - 透過網頁介面排程 PostgreSQL 備份的工具，支援外部儲存空間（本機、S3、FTP、Google Drive 等）、通知（webhook、Discord、Slack 等）及團隊管理。
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - PostgreSQL 進階 WAL 檔案管理工具。
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – pg\_arman 的分支版本，由 @PostgresPro 改良；支援增量備份、從複本備份、多執行緒備份與還原，以及不使用 archive 命令的匿名備份。
* [pgBackRest](https://pgbackrest.org/)  - 可靠的 PostgreSQL 備份與還原工具。
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - 完整的 Docker 式 Postgres 備份與維護工具，提供網頁介面。
* [pg\_back](https://github.com/orgrim/pg_back/) - 簡易的備份指令碼。
* [pghoard](https://github.com/aiven/pghoard) - 雲端物件儲存空間（AWS S3、Azure、Google Cloud、OpenStack Swift）的備份與還原工具。
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - 實用的 Docker 容器，可定期將 PostgreSQL 備份至阿里雲物件儲存服務（OSS）。
* [wal-e](https://github.com/wal-e/wal-e) (obsolete) - Heroku 提供的簡易 PostgreSQL 持續封存工具，可封存至 S3、Azure 或 Swift。
* [wal-g](https://github.com/wal-g/wal-g) - 以 Go 重寫的 WAL-E 後繼工具。目前支援 AWS（S3）、Google Cloud（GCS）、Azure、OpenStack Swift、MinIO 等雲端物件儲存服務，以及檔案系統儲存空間。支援區塊層級增量備份、將備份工作卸載至待命伺服器，並提供平行處理與節流選項。除了 Postgres，WAL-G 也可用於 MySQL 和 MongoDB 資料庫。
* [pitrery](https://dalibo.github.io/pitrery/) - 一組 Bash 指令碼，用於管理 PostgreSQL 時間點復原（PITR）備份。
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` 是輕量級 Docker sidecar 容器，專為使用 `pg_dump`、`cron` 和 bash 指令碼自動定期備份 PostgreSQL 資料庫而設計，也會將輸出傳送至 webhook。
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - 以 Docker 為核心、建構於 pg_dump 之上的解決方案，支援環境變數設定排程 PostgreSQL 備份，並可選擇壓縮、GPG 加密、webhook 通知及自動上傳至 Amazon S3。

<a id="gui"></a>

### 圖形介面
* [1bench](https://1bench.dev/postgresql) - 原生跨平台圖形介面，除 Redis、Elasticsearch、ClickHouse、Qdrant 等產品外，也提供一流的 Postgres 支援（商業軟體）。
* [Adminer](https://www.adminer.org/) - 以 PHP 撰寫、功能完整的資料庫管理工具。
* [AI for Database](https://aifordatabase.com) - 使用自然語言與 PostgreSQL 資料庫對話，不需要 SQL；立即取得深入洞察、建立可自動更新的儀表板，並根據資料庫變更觸發自動化工作流程（商業軟體）。
* [Beekeeper Studio](https://www.beekeeperstudio.io) - 免費且開放原始碼的 SQL 用戶端，具備新穎的介面及良好的 Postgres 支援，並可跨平台使用。
* [Bytebase](https://www.bytebase.com) - 為開發、安全、DBA 和平台工程團隊打造的資料庫 DevSecOps 解決方案。
* [Chartbrew](https://chartbrew.com) - 使用 PostgreSQL 資料建立即時儀表板、圖表及客戶報告，並提供可使用 SQL 的查詢工具。
* [Count](https://count.co/) - 網頁分析平台，提供筆記本介面並可連線至 PostgreSQL（商業軟體）。
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE，具備進階工具組及出色的跨平台使用體驗（商業軟體）。
* [Dekart](https://github.com/dekart-xyz/dekart) - 開放原始碼平台，可將 PostGIS 查詢轉換為可分享的互動式地圖。
* [Datazenit](https://datazenit.com/) - 網頁式 PostgreSQL 圖形介面（商業軟體）。
* [DataRow](https://www.datarow.com/) - 適用於 Amazon Redshift 的跨平台 SQL 用戶端：簡單、易用且可擴充。
* [DBConvert Streams](https://streams.dbconvert.com/) - 資料庫 IDE，提供 PostgreSQL、MySQL、檔案和 S3 相容儲存空間的遷移、聯邦 SQL 與 CDC 複寫功能（商業軟體）。
* [DBeaver](https://dbeaver.io/) - 通用資料庫管理工具，對 PostgreSQL 提供出色支援。
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - 全方位多資料庫解決方案，支援 PostgreSQL、MySQL、MariaDB、SQL Server、Oracle 及多種相關雲端服務（商業軟體）。
* [DbVisualizer](http://www.dbvis.com) - 適用於開發人員、DBA 和分析師的跨平台資料庫用戶端（商業軟體）。
* [Holistics](https://www.holistics.io/) - 線上跨平台資料庫管理工具與 SQL 查詢報表圖形介面，並提供強大的 PostgreSQL 支援（商業軟體）。
* [JackDB](https://www.jackdb.com/) - 網頁式 SQL 查詢介面（商業軟體）。
* [Luna Modeler](http://www.datensen.com) - 跨平台桌面資料建模工具（商業軟體）。
* [Mathesar](https://mathesar.org/) - 網頁應用程式，提供直覺易用的資料庫操作體驗。
* [Metabase](https://www.metabase.com/) - PostgreSQL 的簡易儀表板、圖表及查詢工具。
* [Numeracy](https://numeracy.co/) - 快速的 SQL 編輯器，提供 PostgreSQL 圖表與儀表板（商業軟體）。
* [OrcaQ](https://github.com/cin12211/orca-q) - 新式開放原始碼資料庫編輯器，支援 PostgreSQL、MySQL、Redis 等。提供 AI 助理、ERD 視覺化工具、結構描述差異比較及視覺化角色管理。
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQL 管理圖形介面。
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - 以自然語言與 Postgres 對話（商業軟體）。
* [PgManage](https://github.com/commandprompt/pgmanage) - 現代化、多平台且以 Postgres 為核心的資料庫用戶端／管理工具。
* [pgModeler](https://pgmodeler.io/) - 開放原始碼的 PostgreSQL 資料庫建模工具。
* [PgStudio](https://github.com/dev-asterix/PgStudio) - 開放原始碼 VS Code / Open VSX PostgreSQL 管理擴充功能，提供 SQL 筆記本、AI 助理、易用程式碼片段，以及具即時監控儀表板的完整 DBMS。
* [pgweb](https://github.com/sosedoff/pgweb) - 以 Go 撰寫的網頁式 PostgreSQL 資料庫瀏覽器。
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - 頂尖的 PostgreSQL 網頁管理工具。
* [Postbird](https://github.com/Paxa/postbird) - macOS PostgreSQL 用戶端。
* [PostgresCompare](https://www.postgrescompare.com) - 跨平台資料庫比較與部署工具（商業軟體）。
* [Postico](https://eggerapps.at/postico/) - 現代化 macOS PostgreSQL 用戶端（商業軟體）。
* [QueryGlow](https://queryglow.com/) - 自行託管的網頁式資料庫圖形介面，具備 AI SQL 產生、EXPLAIN 視覺化工具及理解結構描述的自動完成（商業軟體）。
* [PSequel](http://www.psequel.com/) - 乾淨簡潔的介面，讓你快速執行常見 PostgreSQL 工作（商業軟體）。
* [Redash](https://github.com/getredash/redash) - 連線至任何資料來源，輕鬆將資料視覺化並分享。
* [SQL Tabs](http://www.sqltabs.com/) - 以 JS 撰寫的跨平台 PostgreSQL 桌面用戶端。
* [SQLPro for Postgres](http://macpostgresclient.com/) - 簡單而強大的 macOS PostgreSQL 管理工具（商業軟體）。
* [temBoard](https://github.com/dalibo/temboard) - 網頁式 PostgreSQL 圖形介面與監控工具。
* [Teable](https://github.com/teableio/teable) - 超高速、即時、專業且對開發人員友善的無程式碼資料庫。
* [TablePlus](https://tableplus.com/) - 原生應用程式，可編輯資料庫與結構；具備完善的高階安全性（商業軟體）。
* [TablePro](https://tablepro.app/) - 原生 macOS PostgreSQL 用戶端，提供 explain 視覺化、ER 圖及 AI 助理；免費且開放原始碼。
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - 跨平台資料庫管理工具（免費／商業版）。
* [DbGate](https://dbgate.org) - 最智慧的（no）SQL 資料庫用戶端。
* [WebDB](https://webdb.app) – 高效率的資料庫 IDE。

<a id="distributions"></a>

### 發行版
* [Postgres.app](https://postgresapp.com/) - 在 macOS 開始使用 PostgreSQL 最簡單的方法。
* [Pigsty](https://github.com/Vonng/pigsty) - 內建完整配備的 PostgreSQL 開放原始碼發行版，提供頂級可觀測性及開發人員適用的 Database-as-Code 工具箱。

<a id="cli"></a>

### 命令列介面
* [atlas](https://github.com/ariga/atlas) - 以現代 DevOps 原則管理及遷移資料庫結構描述的工具。
* [pgcli](https://github.com/dbcli/pgcli) - Postgres 命令列介面，支援自動完成與語法醒目提示。
* [pgfence](https://pgfence.com) - 檢查 Postgres SQL 遷移中的鎖定模式與高風險 DDL，並以安全的擴充／收縮改寫方式處理；提供 CLI 和 LSP，並支援 Prisma、TypeORM、Knex 擷取器。
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - 以 Go 撰寫的 Postgres 命令列介面，支援自動完成與語法醒目提示。
* [pgplan](https://github.com/JacobArthurs/pgplan) - 從命令列比較並分析 PostgreSQL EXPLAIN 計畫。
* [pgschema](https://www.pgschema.com) - Terraform 風格的 Postgres宣告式結構描述遷移工具。
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI（亦提供 Golang 函式庫），用於比較 Postgres 結構描述並產生鎖定最少的 SQL 遷移。
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - PostgreSQL 遷移安全 CLI，可在正式環境部署前攔截危險 DDL；包含 80 條規則、鎖定分類、自動修正及 GitHub Action。
* [pgsh](https://github.com/sastraxi/pgsh) - 像 Git 一樣為 PostgreSQL 資料庫建立分支。
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - PostgreSQL 內建的 CLI 用戶端。
* [psql2csv](https://github.com/fphilipe/psql2csv) - 在 psql 執行查詢並將結果輸出為 CSV。
* [sabiql](https://github.com/riii111/sabiql) - 快速、無驅動程式的 TUI，可瀏覽、查詢及編輯 PostgreSQL 資料庫。
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpy 是符合 JAVA JDBC 規範的工具，可將資料庫產生為 HTML 文件，包含實體關係圖。
* [pdot](https://gitlab.com/dmfay/pdot) - 在 shell 中視覺化及探索資料庫結構，從高脈絡的外鍵圖到觸發程序級聯、角色繼承與權限等資訊皆可檢視。
* [squix](https://github.com/eduardofuncao/squix) - SQL 命令列用戶端，具備查詢管理與互動式結果。

<a id="server"></a>

### 伺服器
* [AgensGraph](https://bitnine.net/) - 以 PostgreSQL 為基礎的強大圖形資料庫。
* [Apache Cloudberry](https://github.com/apache/cloudberry) - MPP PostgreSQL 分支版本，是 Greenplum Database 的開放原始碼替代方案。
* [FerretDB](https://www.ferretdb.io) - 真正開放原始碼、建構於 PostgreSQL 之上的 MongoDB 替代方案。
* [Postgres-XL](https://www.postgres-xl.org/) - 可擴充的開放原始碼 PostgreSQL 資料庫叢集。
* [YugabyteDB](https://yugabyte.com/) - 開放原始碼分散式 SQL，使用 PostgreSQL 分支版本並建構於分散式儲存與交易之上。

### 安全性
* [Acra](https://github.com/cossacklabs/acra) - SQL 資料庫安全套件：透過透明的即時資料加密保護資料的代理伺服器、SQL 防火牆（防止 SQL 注入）及入侵偵測系統。
* [pgrls](https://github.com/pgrls/pgrls) - 資料列層級安全性政策的靜態分析器；提供涵蓋安全性、效能與整潔度的 36 條規則，其中 10 條可透過機械方式自動修正；另含語意政策差異命令，可用於 CI 閘控。

<a id="monitoring"></a>

### 監控
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check\_pgactivity 專為透過 Nagios 監控 PostgreSQL 叢集而設計，提供多種選項來測量及監控實用的效能指標。
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Nagios check\_postgres 外掛程式，用於檢查 PostgreSQL 資料庫狀態。
* [coroot](https://github.com/coroot/coroot) - 開放原始碼 APM 與可觀測性工具，是 DataDog 和 NewRelic 的替代方案；運用 eBPF 快速洞察系統效能。
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - SaaS 監控服務，可收集並視覺化指標、查詢及 explain 計畫，並在發生問題時傳送警示（商業軟體）。
* [Instrumental](https://github.com/Instrumental/instrumentald) - 即時效能監控，包含[預製圖表](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs)，方便快速設定（商業軟體）。
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - 功能完整的 Zabbix PostgreSQL 監控模組。
* [myDBA](https://mydba.dev) - PostgreSQL 效能監控，提供 75 多項自動健康檢查、叢集感知索引建議、查詢分析，以及 TimescaleDB、pgvector 和 PostGIS 擴充功能監控（商業軟體）。
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management（PMM）是免費且開放原始碼的平台，可監控及管理 PostgreSQL、MySQL 和 MongoDB。
* [Pome](https://github.com/rach/pome) - Pome 是 PostgreSQL Metrics 的縮寫。Pome 是 PostgreSQL 指標儀表板，可追蹤資料庫健康狀態。
* [pgmetrics](https://pgmetrics.io/) - pgmetrics 是開放原始碼、零相依、單一執行檔工具，可從執行中的 PostgreSQL 伺服器收集大量資訊與統計資料，以易讀的文字格式顯示，或匯出為 JSON 和 CSV 供指令碼使用。
* [pg\_view](https://github.com/zalando/pg_view) - 開放原始碼命令列工具，可顯示全域系統統計資料、各分割區資訊、記憶體統計資料及其他資訊。
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 彈性且容易上手的 PostgreSQL 指標監控工具，著重於 Grafana 儀表板。
* [pgwd](https://github.com/hrodrig/pgwd) - 監控 PostgreSQL 連線使用狀況與過期工作階段，提供閾值警示、Prometheus 指標及多種通知後端。
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - 在 PostgreSQL 上執行基準測試。
* [opm.io](http://opm.io) - Open PostgreSQL Monitoring 是免費軟體套件，旨在協助管理 PostgreSQL 伺服器；可收集統計資料、顯示儀表板，並在發生問題時傳送警告。
* [okmeter.io](https://okmeter.io/pg) - 商業 SaaS 代理程式式監控服務，具備詳細的 PostgreSQL 外掛程式；會自動收集數百項統計資料、顯示各方面儀表板，並在發生問題時傳送警示（商業軟體）。
* [dexter](https://github.com/ankane/dexter) - Postgres 自動索引工具；偵測慢速查詢，並可依設定建立索引。
* [pg_ash](https://github.com/NikolayS/pg_ash) - PostgreSQL 的主動工作階段歷程記錄（Active Session History）。透過 pg_cron 每秒擷取一次 pg_stat_activity，儲存編碼後的快照，並提供 32 個 SQL 函式分析等待事件。純 SQL、無須擴充功能，並可用於受管理的服務（RDS、Cloud SQL、Supabase 等）。
* [pg_exporter](https://github.com/Vonng/pg_exporter) - 高度可自訂的 PostgreSQL 與 Pgbouncer Prometheus 匯出器，具備細緻的執行控制。
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL 伺服器指標的 Prometheus 匯出器。
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - 開放原始碼 PostgreSQL 擴充功能，專為高效且有條理地管理進階統計資料而設計。
* [pgvitals](https://github.com/pgvitals/pgvitals) - 一組 40 個唯讀診斷查詢，僅使用標準系統目錄且不需擴充功能，即可找出常見效能問題（慢速查詢、膨脹、vacuum 延遲、鎖定競爭、複寫延遲、交易 ID 回繞風險）；另提供選用 CLI，將結果彙整為 0 到 100 的健康分數。

<a id="extensions"></a>

### 擴充功能
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - 多種 PostgreSQL 開放原始碼擴充功能的集中發佈平台。
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - 超過 1000 個 PostgreSQL 擴充功能。
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - 超過 400 個 PostgreSQL 擴充功能。
* [AGE](https://github.com/apache/age) - 新增完整的圖形資料庫支援，包含 Cypher 查詢。
* [OrioleDB](https://www.orioledb.com/) - PostgreSQL 的雲端原生儲存引擎。OrioleDB 是 PostgreSQL 擴充功能，結合磁碟內與記憶體內引擎的優勢。
* [Citus](https://github.com/citusdata/citus) - 可擴充的 PostgreSQL 叢集，適用於即時工作負載。
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - PostgreSQL 分析用欄式儲存。
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit 可在資料庫內逐欄記錄所有 DML 活動。
* [pg_search](https://github.com/paradedb/paradedb) - pg_search 是 PostgreSQL 擴充功能，使用 BM25 演算法（全文檢索最先進的排序函式）對 SQL 資料表進行全文檢索。
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - PostgreSQL 擴充功能，提供 BM25 系列詞彙檢索、原生索引存取方法及 SQL top-k 查詢 API。
* [pg_cron](https://github.com/citusdata/pg_cron) - 在 PostgreSQL 中執行定期工作。
* [pglogical](https://github.com/2ndQuadrant/pglogical) - 提供邏輯串流複寫功能的擴充功能。
* [pgcat](https://github.com/kingluo/pgcat) - 強化版 PostgreSQL 邏輯複寫。
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL SVG QRcode 與 Datamatrix 產生器。
* [pg\_partman](https://github.com/pgpartman/pg_partman) - PostgreSQL 分割區管理擴充功能。
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Paxos 及以 Paxos 為基礎的 PostgreSQL 節點叢集資料表複寫之基本實作。
* [pg\_shard](https://github.com/citusdata/pg_shard) - 擴充功能，可水平擴充即時讀取與寫入。
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - PostgreSQL 查詢效能監控工具。
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - 可在盡量減少鎖定的情況下自動清理膨脹的擴充功能。
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - 將 CPU 密集型工作負載卸載至 GPU 的擴充功能。
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - PostgreSQL 擴充功能，可持續對串流執行 SQL 查詢，並以增量方式將結果儲存至資料表。
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - 可檢查 plpgsql 原始碼的擴充功能。
* [PostGIS](http://postgis.net/) - PostgreSQL 的空間與地理物件擴充功能。
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - 將 Themis 密碼編譯函式庫繫結為 Postgres 擴充功能，在 PgSQL 端提供多種安全服務。
* [zomboDB](https://github.com/zombodb/zombodb) - 使用 Elasticsearch 支援的索引，提供高效率全文檢索的擴充功能。
* [pgMemento](https://github.com/pgMemento/pgMemento) - 使用以 PL/pgSQL 撰寫的觸發程序及伺服器端函式，在 PostgreSQL 資料庫內提供資料稽核軌跡。
* [TimescaleDB](https://www.timescale.com/) - 完全相容 Postgres 的開放原始碼時間序列資料庫，以擴充功能形式發佈。
* [pgTAP](https://pgtap.org/) - Postgres 資料庫測試架構。
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG 提供假想／虛擬索引功能。
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRouting 擴充 PostGIS／PostgreSQL 地理空間資料庫，提供地理空間路由及其他網路分析功能。
* [PGroonga](https://pgroonga.github.io/) - PGroonga 提供新的索引存取方法，使用 Groonga 對所有語言進行超快速全文檢索。
* [PGAudit](https://www.pgaudit.org/) - PostgreSQL 稽核擴充功能（pgaudit）透過 PostgreSQL 提供的標準記錄功能，提供詳細的工作階段及／或物件稽核記錄。
* [PostgresML](https://postgresml.org/) - 在資料庫內提供機器學習與 AI，包含向量、LLM 及傳統機器學習。只需使用 SQL，即可訓練、預測並管理機器學習模型的完整生命週期。
* [ParadeDB](https://github.com/paradedb/paradedb) - 專為搜尋與分析打造的 Postgres。
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - 透過 PG Security Labels，遮蔽或取代 Postgres 資料庫中的個人識別資訊（PII）或商業敏感資料。

<a id="platforms"></a>

### 平台
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - 開放原始碼 4D 時空平台，結合 PostGIS、TimescaleDB、pgvector 和 H3，統一處理地理空間與時間序列智慧分析。
* [neond](https://github.com/matisiekpl/neond) - 以開發者體驗為核心的 Postgres 控制平面，提供分支、PITR 與 S3 持久性。以單一 Docker 容器附帶網頁儀表板的形式提供，定位為非關鍵工作負載的 `postgres:latest` 替代方案。

<a id="work-queues"></a>

### 工作佇列
* [BeanQueue](https://github.com/LaunchPlatform/bq) - 以 SKIP LOCKED、LISTEN 和 NOTIFY 為基礎的 Python 工作佇列架構。
* [pgmq](https://github.com/pgmq/pgmq) - 輕量級訊息佇列；類似 AWS SQS 和 RSMQ，但以 Postgres 為基礎。
* [river](https://github.com/riverqueue/river) - Go 與 Postgres 的高效能工作處理系統。
* [pgBoss](https://github.com/timgit/pg-boss) - 使用 Node.js 在 Postgres 中排程工作，稱霸佇列管理。
* [dbos](https://www.dbos.dev/) - 以 Typescript 和 Python 撰寫的持久化工作流程。
* [Graphile Worker](https://worker.graphile.org) - 以 Node.js 撰寫的高效能 PostgreSQL 工作佇列。
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Node.js 的「免維護」Postgres 佇列。

<a id="optimization"></a>

### 最佳化
* [EverSQL](https://www.eversql.com/) - 自動化查詢最佳化、監控與分析，以及索引建議工具（商業軟體）。
* [PEV2](https://github.com/dalibo/pev2) - 線上 Postgres Explain 視覺化工具。
* [pg_flame](https://github.com/mgartner/pg_flame) - 查詢計畫火焰圖產生器。
* [PgHero](https://github.com/ankane/pghero) - 輕鬆掌握 PostgreSQL 洞察資訊。
* [pgMustard](https://www.pgmustard.com/) - 現代化的 `EXPLAIN` 使用者介面，並提供效能提示（商業軟體）。
* [pgtune](https://github.com/gregs1104/pgtune/) - PostgreSQL 設定精靈。
* [pgtune](https://github.com/le0pard/pgtune) - PostgreSQL 設定精靈的線上版本。
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - PostgreSQL 線上設定工具（同樣以 pgtune 為基礎）。
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL 工作負載分析器，收集效能統計資料並提供即時圖表，協助監控及調校 PostgreSQL 伺服器。
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - 用於檢視 pg_stat_statements 的網頁介面。
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - 根據主機資源（例如記憶體和 CPU 數量）調校 TimescaleDB 資料庫，使其發揮最佳效能的程式。
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis 為包含 PostgreSQL 在內的 SQL 資料庫提供可觀測性與效能調校功能（商業軟體）。
* [aqo](https://github.com/postgrespro/aqo) - PostgreSQL 自適應查詢最佳化。
* [pgassistant](https://github.com/beh74/pgassistant-community) - PostgreSQL 開發人員工具，整合 LLM 和 pgTune，協助理解及最佳化資料庫。

<a id="utilities"></a>

### 工具
* [apgdiff](https://www.apgdiff.com/) - 比較兩個資料庫傾印檔，並產生可用於將舊資料庫結構描述更新為新版本的 DDL 陳述式。
* [bemi](https://github.com/BemiHQ/bemi) - PostgreSQL 自動資料變更追蹤工具。
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy 可從資料庫產生實體關係（ER）圖。
* [flyway](https://flywaydb.org/) - 適用於 Postgres 等資料庫的結構描述遷移工具。
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - 雲端原生資料庫閘道與資料驅動應用程式開發架構；就像 API 閘道，但用於資料庫。
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - 適用於 MySQL 和 PostgreSQL 的資料庫匿名化與合成資料產生工具。
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - 在 Postgres 上即時快速建立 GraphQL API，提供細緻的存取控制，並可在資料庫事件發生時觸發 webhook。
* [ldap2pg](https://github.com/dalibo/ldap2pg) - 從 YML 和 LDAP 同步角色與權限。
* [migra](https://github.com/djrobstep/migra) - 專門比較 Postgres 結構描述的 diff 工具。
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Lanyrd 的 MySQL 轉 PostgreSQL 轉換指令碼。
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - NServiceBus.Transport.PostgreSql 函式庫讓 .NET 開發人員[將 PostgreSQL 資料庫作為訊息代理程式使用](https://docs.particular.net/transports/postgresql)。（商業軟體）
* [ora2pg](http://ora2pg.darold.net) - Perl 模組，可將 Oracle 資料庫結構描述匯出為與 PostgreSQL 相容的結構描述。
* [pg\_activity](https://github.com/dalibo/pg_activity) - 類似 top 的應用程式，用於監控 PostgreSQL 伺服器活動。
* [pg-formatter](https://github.com/gajus/pg-formatter) - PostgreSQL SQL 語法美化工具（Node.js）。
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - 以安全為優先的 Node.js 遷移引擎，具備諮詢鎖定、SHA-256 漂移偵測，以及 10 條內建 PostgreSQL lint 規則。
* [pganalyze](https://pganalyze.com) - PostgreSQL 效能監控（商業軟體）。
* [pgbadger](https://github.com/darold/pgbadger) - 快速的 PostgreSQL 記錄分析器。
* [PgBouncer](http://www.pgbouncer.org/) - PostgreSQL 輕量級連線集區管理工具。
* [pgCenter](https://github.com/lesovsky/pgcenter) - 提供便利介面，以檢視各種統計資料、執行管理工作、重新載入服務、檢視記錄檔，以及取消或終止資料庫後端程序。
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - 從 MySQL 即時複寫至 PostgreSQL，並可選擇覆寫型別遷移及遷移功能。
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - 將 PostgreSQL 資料匯出為多種資料格式。
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - 瀏覽器擴充功能，可將 PostgreSQL 文件連結重新導向至目前版本。
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - 輕鬆將 CSV 和 JSON 匯入 PostgreSQL。
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - 易於部署的開放原始碼 PostgreSQL 函式，可依優先順序列出改善資料庫穩定性與效能的行動建議。直接受到 SQL Server 的 Brent Ozar's FirstResponderKit 啟發。
* [PGInsight](http://pginsight.io/) - CLI 工具，可輕鬆深入探索 PostgreSQL 資料庫。
* [pg_insights](https://github.com/lob/pg_insights) - 用於監控 Postgres 資料庫健康狀態的便利 SQL。
* [pgloader](https://github.com/dimitri/pgloader) - 使用 COPY 串流通訊協定將資料載入 PostgreSQL，並以不同執行緒分別讀取及寫入資料。
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Postgres 指標收集與視覺化工具，可部署於實體伺服器、虛擬機器或 Kubernetes。
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - 中介軟體，提供連線集區、複寫、負載平衡及限制過多連線等功能。
* [pgspot](https://github.com/timescale/pgspot) - 偵測 PostgreSQL 擴充功能指令碼中的弱點。
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - 在低成本 AWS Spot VM 上執行具狀態 Postgres 的常駐程式。
* [pgsync](https://github.com/ankane/pgsync) - 將 PostgreSQL 資料同步至本機電腦的工具。
* [PGXN client](https://github.com/pgxn/pgxnclient) - 與 PostgreSQL Extension Network 互動的命令列工具。
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - 擷取並提供 PostgreSQL 資料庫指標的工具。
* [PostgREST](https://github.com/PostgREST/postgrest) - 從任何既有 PostgreSQL 資料庫提供完整的 RESTful API。
* [pREST](https://github.com/prest/prest) - 從任何 PostgreSQL 資料庫提供 RESTful API（Golang）。
* [PostGraphile](https://github.com/graphile/postgraphile) - 為 PostgreSQL 資料庫立即建立 GraphQL API 或 GraphQL 結構描述。
* [yoke](https://github.com/nanopack/yoke) - PostgreSQL 高可用性叢集，具備自動容錯移轉及自動叢集復原功能。
* [pglistend](https://github.com/kabirbaidhya/pglistend) - 建構於 `node-postgres` 之上的輕量 PostgresSQL `LISTEN`/`NOTIFY` 常駐程式。
* [ZSON](https://github.com/postgrespro/zson) - 提供透明 JSONB 壓縮功能的 PostgreSQL 擴充功能。
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - PostgreSQL 高速資料載入工具。
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - 管理 PostgreSQL 程式碼庫，並簡化版本控制系統（VCS）的使用。
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 進階工作排程器。
* [sqitch](https://github.com/sqitchers/sqitch) - 管理版本化結構描述部署的工具。
* [pgmigrate](https://github.com/yandex/pgmigrate) - Yandex 開發的 CLI 結構描述遷移演進工具。
* [pgcmp](https://github.com/cbbrowne/pgcmp) - 比較資料庫結構描述的工具，並可接受部分持續存在的差異。
* [pg-differ](https://github.com/multum/pg-differ) - 輕鬆初始化／更新 PostgreSQL 資料表結構的工具，可作為遷移方案的替代選項（Node.js）。
* [Qail](https://github.com/qail-io/qail) - 以 Rust 優先的型別化 AST 流程，支援 PostgreSQL 編譯期查詢檢查及內建租戶範圍限制。
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - 自動偵測常見 SQL 反模式；這些反模式通常會拖慢查詢，修正後即可加快查詢速度。
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - 新一代診斷工具，可深入分析 Postgres 資料庫的健康狀態。
* [Pyrseas](https://github.com/perseas/Pyrseas) - Postgres 資料庫結構描述版本管理工具。
* [ScaffoldHub.io](https://scaffoldhub.io) - 使用 Angular、Vue 或 React 產生全端 PostgreSQL 應用程式（商業軟體）。
* [planter](https://github.com/achiku/planter) - 從 PostgreSQL 資料表產生 PlantUML ER 圖文字描述。
* [pgroll](https://github.com/xataio/pgroll) - Postgres 零停機、可復原的結構描述遷移工具。
* [RegreSQL](https://github.com/dimitri/regresql) - 建立、維護及執行 SQL 查詢迴歸測試套件的工具。
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - 檢查 Diesel 和 SQLx 中危險 Postgres 遷移模式的 Linter。

<a id="language-bindings"></a>

### 語言繫結
* Common Lisp：[Postmodern](https://github.com/marijnh/Postmodern)
* Clojure：[clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir：[postgrex](https://github.com/elixir-ecto/postgrex)
* Go：[pq](https://github.com/lib/pq)、[pgx](https://github.com/jackc/pgx)、[go-pg](https://github.com/go-pg/pg)
* Haskell：[postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java：[PostgreSQL JDBC Driver](https://jdbc.postgresql.org/)、[Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua：[luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core：[Npgsql](https://github.com/npgsql/npgsql)
* Node：[node-postgres](https://github.com/brianc/node-postgres)、[pg-promise](https://github.com/vitaly-t/pg-promise)、[pogi](https://github.com/holdfenytolvaj/pogi)、[slonik](https://github.com/gajus/slonik)、[postgres](https://github.com/porsager/postgres)
* Perl：[DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP：[Pomm](http://www.pomm-project.org)、[pecl/pq](https://github.com/m6w6/ext-pq)
* Python：[psycopg2](https://pypi.org/project/psycopg2/)、[asyncpg](https://pypi.org/project/asyncpg/)、[pg8000](https://pypi.org/project/pg8000/)
* R：[RPostgres](https://github.com/r-dbi/RPostgres)、[RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby：[pg](https://github.com/ged/ruby-pg)
* Rust：[rust-postgresql](https://github.com/sfackler/rust-postgres)、[pgx](https://github.com/tcdi/pgx)、[wtx](https://github.com/c410-f3r/wtx)
* TypeScript：[zapatos](https://github.com/jawj/zapatos)
* Zig：[pg.zig](https://github.com/karlseguin/pg.zig)、[qail-zig](https://github.com/qail-io/qail-zig)

<a id="paas-postgresql-as-a-service"></a>

### PaaS *(PostgreSQL 即服務)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - AWS、Azure、DigitalOcean、Google Cloud 和 UpCloud 上的 PostgreSQL 即服務；方案從每月 19 美元的單節點執行個體到大型高可用性架構皆有，並提供兩週免費試用。
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon PostgreSQL 關聯式資料庫服務（RDS）。
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL 提供全受管理、適合企業使用的社群版 PostgreSQL 資料庫即服務，內建高可用性（HA）、彈性擴充，並可原生整合 Azure 生態系統。
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - 由 Postgres 專家提供的全受管理 Postgres。適用於所有主要雲端供應商：Amazon AWS、Google GCP、Microsoft Azure。沒有供應商綁定，並提供完整超級使用者支援。
* [Database Labs](https://www.databaselabs.io) - 幾分鐘內即可取得可供正式環境使用的雲端 PostgreSQL 伺服器，每月 20 美元起；包含備份、監控、修補程式及全天候技術支援。
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - 全受管理的 PostgreSQL 資料庫，沒有免費方案，每月 15 美元起。提供每日備份與時間點復原，以及可自動容錯移轉的待命節點。
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - 全受管理的資料庫服務，讓你輕鬆在 Google Cloud Platform 設定、維護、管理及管理 PostgreSQL 關聯式資料庫。
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - 方案從免費到大型皆有，由 PostgreSQL 專家營運，且不要求應用程式也必須執行於 Heroku。免費方案包含 10,000 列、20 個連線、最多兩份備份，並支援 PostGIS。
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - 高可用性、可擴充且安全的 PostgreSQL。提供每日備份與時間點復原，無供應商綁定，且進出流量免費。
* [Render Managed PostgreSQL](https://render.com/docs/databases) - 安全、可靠且完全免維護的 PostgreSQL 代管服務。所有方案均含靜態資料加密、自動備份及可擴充 SSD 儲存空間。方案每月 7 美元起，提供 256MB RAM 和 1GB 儲存空間（前 90 天免費）。
* [Rivestack](https://rivestack.io) - 預先安裝 pgvector 並針對向量搜尋調校 HNSW 的代管 PostgreSQL。免費方案提供 2 GB，無須信用卡；固定價格的專屬執行個體每月 15 美元起，提供歐盟和美國區域。
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - 全受管理的 PostgreSQL 託管服務，具備高可用性、專屬伺服器及超級使用者控制權，是排名第一的多雲 Amazon RDS 替代方案。
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - 在歐盟代管的全受管理 PostgreSQL 資料庫，提供高可用性、擴充及自動備份；每月 10 歐元起。
* [Supabase](https://www.supabase.com) - 全受管理的 Postgres，提供唯讀複本、時間點復原、支援方案、瀏覽器式圖形介面，以及慷慨的免費方案。
* [Neon](https://neon.tech) - 全受管理的無伺服器 PostgreSQL。Neon 將儲存與運算分離，提供無伺服器、分支、無上限儲存等現代開發者功能。
* [Nile](https://www.thenile.dev/) - 全受管理的 PostgreSQL。Nile 將儲存與運算分離並虛擬化租戶，以快速、安全且無限制地擴充多租戶 AI 應用程式。免費方案提供不限數量的資料庫。
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale for Postgres 提供建構於現代雲端基礎架構之上的全受管理高可用性 PostgreSQL 資料庫叢集。
* [Vela](https://vela.run) - 為現代 AI 應用程式打造、以 Postgres 為基礎的後端即服務。提供即時資料庫分支與複製、近似正式環境的測試環境，以及無伺服器擴充。
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - 在荷蘭託管的全受管理 PostgreSQL 資料庫，支援多可用區及自動備份。

<a id="docker-images"></a>

### Docker 映像
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Citus 官方映像，內含 citus 擴充功能；以官方 Postgres 容器為基礎。
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - Postgres 9 上的 PostGIS 2.3；以官方 Postgres 容器為基礎。
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB 是專為搜尋與分析打造的 Postgres；以內含 pg_search 擴充功能的官方 Postgres 容器為基礎。
* [pglayers](https://github.com/pglayers/pglayers) - 預先建置的 PostgreSQL 擴充功能，可組合為 Docker 層。提供 50 多個擴充功能及可直接使用的組合映像（完整功能、相容 Azure）。
* [postgres](https://hub.docker.com/_/postgres/) - Docker 提供的官方 postgres 容器。

<a id="kubernetes"></a>

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - Kubernetes 正式環境 PostgreSQL 解決方案，涵蓋高可用性 Postgres 叢集到完整規模的資料庫即服務。
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - OpenShift Container Platform 上的企業級 PostgreSQL（商業軟體）。
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegres 是 Kubernetes Operator，可部署一個或多個 PostgreSql 執行個體叢集，並管理資料庫複寫、容錯移轉及備份。
* [StackGres Operator](https://github.com/ongres/stackgres/) - Kubernetes 上的完整 PostgreSQL 技術堆疊。
* [Zalando Operator](https://github.com/zalando/postgres-operator) - 建立並管理在 Kubernetes 中執行的 PostgreSQL 叢集。
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - 全方位平台，專為在 Kubernetes 環境中順暢管理 PostgreSQL 資料庫而設計。
* [KubeDB operator](https://kubedb.com/) - 在 Kubernetes 上執行正式環境等級的資料庫（商業軟體）。
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - 以 Crunchy Data Operator 為基礎的 Percona PostgreSQL Operator。
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest Operator 是 Kubernetes Operator，負責管理 MySQL、MongoDB 和 PostgreSQL 資料庫的生命週期。底層運用 Percona 的 MySQL、MongoDB 和 PostgreSQL Kubernetes Operators，並提供統一 API 與單一管理介面，統一管理這三種資料庫。

<a id="resources"></a>

## 資源

<a id="tutorials"></a>

### 教學
* [使用 wal-e 備份及復原 PostgreSQL 資料庫](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - 使用 wal-e 在 PostgreSQL 設定持續封存的教學。
* [操作速查表](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - PostgreSQL Wiki 的操作速查表。
* [PG Casts](https://www.pgcasts.com) - Hashrocket 免費提供的每週 PostgreSQL 螢幕錄影教學。
* [Postgres Guide](http://postgresguide.com/) - 協助初學者與有經驗的使用者尋找特定提示並探索 PostgreSQL 可用工具的指南。
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - 完整的心智模型：將角色、授權、擁有權、成員資格、政策及預設權限視為整合系統。PDF 加影片，約 60 分鐘。
* [PostgreSQL Exercises](https://pgexercises.com/) - 透過練習輕鬆學習 PostgreSQL 的網站。
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - 非常完整的 PostgreSQL 教學彙編。
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Postgres 範例結構描述集合。
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - PostgreSQL 最常用命令的彙編。
* [pg-utils](https://github.com/dataegret/pg-utils) - Data Egret 提供的實用 DBA 工具。
* [pagila](https://github.com/xzilla/pagila) - Pagila，Postgres 範例資料庫。
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - 完整的 SQL 語法參考，涵蓋視窗函式、CTE 及 PostgreSQL 專屬語法（UPSERT、JSON 查詢、陣列操作）。

<a id="blogs"></a>

### 部落格
* [Planet PostgreSQL](https://planet.postgresql.org/) - PostgreSQL 部落格彙整服務。
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - 分享 PostgreSQL 精彩功能、提示與技巧的文章集。
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Josh Berkus 的部落格。
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Hubert Lubaczewski 的部落格。
* [Metis Blog](https://www.metisdata.io/blog) - 分享 PostgreSQL、SQL 資料庫、效能與調校相關文章。
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md)
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - PIGSTY 作者撰寫的部落格，分享 PostgreSQL（以及資料庫與雲端基礎架構）的深入文章。
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - BigData Boutique 團隊撰寫、主要聚焦分析的部落格。

### 書籍
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Hironobu Suzuki 撰寫的免費電子書。
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Egor Rogov 撰寫的免費電子書。
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Postgres 正式環境擴充實務指南，涵蓋調校、連線集區、分割區及高可用性。

<a id="documentation"></a>

### 文件
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - 使用者文件、操作指南及提示與技巧。
* [pgPedia](https://pgpedia.info/) - PostgreSQL 相關事物的百科全書。
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - 使用 AI agents 為 PostgreSQL 程式碼庫中的所有符號產生文件的專案。

<a id="newsletters"></a>

### 電子報

* [Postgres Weekly](https://postgresweekly.com/) - 每週電子報，收錄與 PostgreSQL 相關的文章、新聞及程式碼儲存庫。
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - 每月電子報，收錄 Postgres 效能文章與影片。
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - pgsql-hackers 郵遞論壇的每週摘要，列出討論中的主題、主題摘要等資訊。

### Podcast
* [PostgresFM](https://postgres.fm/) - 每週討論 Postgres 相關主題。
* [Scaling Postgres](https://www.scalingpostgres.com/) - 每週彙整 PostgreSQL 相關內容。
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - 每月訪談 Postgres 社群人士。

<a id="videos"></a>

### 影片
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Citus 相關影片。
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - EnterpriseDB 相關影片。
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - 大會影片。
* [Scaling Postgres](https://www.scalingpostgres.com/) - Creston Jamison 製作的 Postgres 影片部落格系列。
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Postgres 演講、開發工作階段、訪談及 Podcast 節目。

<a id="community"></a>

### 社群
* [郵遞論壇](https://www.postgresql.org/list/) - Postgres 官方郵遞論壇，提供支援、推廣等交流管道，也是 Postgres 社群主要的溝通方式之一。
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - 擁有超過 12,000 名 PostgreSQL 使用者的 Reddit 社群。
* [Slack](https://pgtreats.info/slack-invite) - 擁有超過 20,000 名成員的 Postgres Slack 工作區。
* Telegram - 多種語言的 PostgreSQL 群組：[俄語](https://t.me/pgsql) 超過 4,200 人、[巴西葡萄牙語](https://t.me/postgresqlbr) 超過 2,300 人、[印尼語](https://t.me/postgresql_id) 約 1,000 人、[英語](https://t.me/postgreschat) 超過 750 人。
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Freenode 上最熱門的 Postgres IRC 頻道，擁有超過 1,000 名使用者。
* [Discord](https://discord.gg/bW2hsax8We) - 擁有超過 6,000 名成員的 Postgres Discord 伺服器。

<a id="roadmaps"></a>

### 路線圖
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - 提供循序漸進 PostgreSQL 指引的路線圖。

<a id="external-lists"></a>

### 外部清單
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - 維基百科上的資料庫管理工具比較。
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - PostgreSQL GUI 工具社群指南。
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - PostgreSQL Wiki 外部資料包裝器清單。
