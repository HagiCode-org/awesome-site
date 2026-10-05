# Awesome 資料庫工具 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 群組驱动的數據庫工具清單

我們將收集一些有關 超級有用和超級的實驗工具的資訊,

或你最喜歡的第三方db工具。

更新 `awesome-db-tools` 關於數據庫/工具/SQL的想法/消息跟隨我 [@GraminMaksim](https://twitter.com/GraminMaksim)

## 附 件
- [IDE](#ide)
- [使用者介面](#gui)
- [中央LI](#cli)
- [司馬](#schema)
  - [變更](#changes)
  - [代碼產生](#code-generation)
  - [图](#diagrams)
  - [文件](#documentations)
  - [設計](#design)
  - [樣本](#samples)
- [API](#api)
- [應用程式平台](#application-platforms)
- [備份](#backup)
- [克隆](#cloning)
- [监测/统计/业绩](#monitoringstatisticsperformance)
  - [普羅米修斯](#prometheus)
  - [扎比克斯](#zabbix)
- [測試](#testing)
- [HA/ 失敗/ 硬化](#hafailoversharding)
- [忽必烈](#kubernetes)
- [配置調整](#configuration-tuning)
- [刪除( D)](#devops)
- [報告](#reporting)
- [分配](#distributions)
- [安全](#security)
- [SQL 檔案](#sql)
  - [分析器](#analyzers)
  - [程式碼產生器](#code-generators)
  - [延伸](#extensions)
  - [框架](#frameworks)
  - [格式](#formatters)
  - [遊戲](#games)
  - [解析器](#parsers)
  - [烏伯SQL](#über-sql)
  - [語言伺服器協議](#language-server-protocol)
  - [學習](#learning)
  - [計劃](#plan)
  - [文稿](#scripts)
- [資料](#data)
  - [星表](#catalog)
  - [序列](#lineage) 
  - [生成/ Masking/子集](#generationmaskingsubsetting)
  - [資料設定檔](#data-profilers)
  - [复制](#replication) 
  - [比較](#compare) 
- [文件](#papers)
- [機器学习](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) 數據庫管理、控制與發展的多用途管理工具。
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - 數據庫開發者、DBA、分析師的生产力軟體。
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - 現代分析與分析工程師的IDE,
- [Database .net](http://fishcodelib.com/Database.htm) - 支持20+數據庫的多個數據庫管理工具。
- [Database Workbench](https://www.upscene.com/database_workbench/) - 完成 Oracle 、 SQL 伺服器、 PostgreSQL、 MySQL、 MariaDB、 Firebird、 InterBase、 SQLite 和 NexusDB 的數據庫設計、 開發與測試的 IDE 。
- [DataGrip](https://www.jetbrains.com/datagrip) JetBrains的數據庫與SQL的跨平台集成碼。
- [DataStation](https://github.com/multiprocessio/datastation) - 輕易的查詢、腳本和視覺資料庫、檔案和API。
- [DBeaver](https://github.com/dbeaver/dbeaver) - 免费通用數據庫管理員和 SQL 客戶端。
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - DB 發展、設計、管理及管理MySQL、MariaDB、SQL 伺服器、甲骨文、PostgreSQL 數據庫的多數數據庫解决方案,
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - MySQL和MariaDB數據庫的開發、管理和行政的通用IDE。
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) 管理、行政與發展的強力IDE。
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - 管理及發展數據庫和物件的 GUI 工具。
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) SQL 伺服器發展、管理、管理、數據分析與報告的強大整合發展環境。
- [DBHawk](https://www.datasparc.com/) Datasparc提供數據庫安全、數據庫管理、數據庫治理和數據分析,
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - 現代 (JavaScript/ Electron 框架), MongoDB 的開源IDE 。 它具有支持MongoDB數據庫發展、管理和性能調整的功能。
- [IBExpert](http://www.ibexpert.net/ibe) - Firebird和InterBase的GUI综合工具。
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - 管理MySQL、MSSQL和PostgreSQL的輕量级客戶端,用Delphi寫成。
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Windows / macOS / Linux上的流行數據庫(SQLite / MySQL / PostgreSQL / 等)的 AI 動能的 SQL 客戶端與管理工具, 支援表格設計、查詢、模型、同步、 匯出/ 匯入等, 專注於自在、 趣味與開發者友好 。
- [KeepTool](https://keeptool.com) - Oracle數據庫開發者、管理者和高级應用程式使用者的專業工具套件。
- [MySQL Workbench](https://www.mysql.com/products/workbench) 數據庫建商、開發商和DBA的 统一視覺工具。
- [Navicat](https://www.navicat.com/en/products#navicat) - 數據庫發展工具, 允許您從一個應用程式QQQQ同步連接 MySQL、 MariaDB、 SQL 伺服器、 Oracle、 PostgreSQL 和 SQLite 數據庫。
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - 自由、集成發展環境,
- [pgAdmin](https://www.pgadmin.org) PostgreSQL最受歡迎、最有特色的開源管理與發展平台,
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - 长期支持 pgAdmin3。
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE, 專門為 Oracle 數據庫的儲存程式單位的發展。
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - PostgreSQL的完整而有力的數據庫管理、管理與發展工具。
- [Querybook](https://github.com/pinterest/querybook) - Pinterest 開源大數據查詢UI, 结合同位合位的表格中繼資料與簡單的筆記本 IDE 介面 。
- [Slashbase](https://github.com/slashbaseide/slashbase) -您的數據庫的開源合作IDE。 連接您的數據庫, 瀏覽資料, 執行一堆 SQL 指令或與您的團隊共享 SQL 查詢, 直接從您的瀏覽器中執行 。
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) SQL 伺服器與 Azure SQL 數據庫的整合環境。
- [Toad](https://www.quest.com/toad/) - 供開發者、管理者和數據分析家使用的 Premier 數據庫解答。 管理複雜的數據庫變更,
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - MySQL和PostgreSQL的簡化數據庫發展工具。
- [TOra](https://github.com/tora-tool/tora) - Oracle、MySQL和PostgreSQL dbs的開源 SQL IDE。
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - 建立、管理、查詢和探索Valentina DB、MySQL、MariaDB、PostgreSQL和FREE QQQ的 SQLite數據庫。
- [WebDB](https://webdb.app) - 自由高效的數據庫IDE。 設計伺服器發現, ERD, 資料產生器, AI, NoSQL 結構管理員, 數據庫版本及更多 。


## 使用者介面
- [Adminer](https://github.com/vrana/adminer) - PHP 檔案中的數據庫管理 。
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - 自由開放源碼Redis管理員 在Mac、Linux、Windows、Homebrew、Snap、Wonget等網站上可以找到。
- [Antares SQL](https://github.com/antares-sql/antares) 以UX為焦點的SQL客戶端。 可用于 Mac, Linux 和 Windows 。
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - 數據管理工具, 可以與 Windows 、 macOS 和 Linux 的 SQL 伺服器、 PostgreSQL 、 Azure SQL DB 和 SQL DW 合作 。
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - Open source SQL 編輯器與數據庫管理器,
- [Clidey WhoDB](https://github.com/clidey/whodb) - 輕量級數據庫探測器, 包含所有 SQL, NoSQL, Caches, 和 Quees 的下一個基因 UX 。
- [DbGate](https://github.com/dbgate/dbgate) - MySQL、PostgreSQL、SQL 伺服器、MongoDB、SQLite等的數據庫管理員。 在 Windows 、 Linux 、 Mac 或作为網頁應用程式下執行 。
- [DB Lens](https://github.com/dblens/app) - Open source PostgreSQL GUI - 自動ER圖、內部 DB 透視、磁碟使用、性能測量、索引使用、序列掃瞄數量等等。
- [DbVisualizer](https://www.dbvis.com) - 供開發者、DBA和分析者使用的通用數據庫工具。
- [JackDB](https://www.jackdb.com) - 不管它住哪兒,直接取得你的數據
- [Jailer](https://github.com/Wisser/Jailer) - 數據庫子集和相關資料瀏覽工具/通訊器。
- [Malewicz](https://github.com/mgramin/malewicz) 然而, 另一個WEB 用戶端是 DB schema 探索和性能分析, 但最初是专门为黑客和延伸而建立的。
- [MissionKontrol](https://www.missionkontrol.io) - 現代拖曳( D) 管理面板/ 客戶端, 非技術用戶完全使用權限 。
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - 為了MySQL、MariaDB和Tarantool 已為 Linux 開發, 但可以在 Windows 上執行 。
- [OmniDB](https://github.com/OmniDB/OmniDB) - 數據庫管理的網路工具。
- [Pgweb](https://github.com/sosedoff/pgweb) - PostgreSQL 的網路數據庫瀏覽器, 用 Go 寫作, 在 macOS 、 Linux 和 Windows 機器上工作 。
- [phpLiteAdmin](https://www.phpliteadmin.org) - 支持 SQLite3 和 SQLite2 的基于網路的 SQLite 資料庫管理工具。
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQL和MariaDB的網路介面
- [psequel](http://www.psequel.com) - 提供乾淨而簡單的介面供您快速完成共同的 PostgreSQL 工作 。
- [PopSQL](https://popsql.com) 現代合作的SQL編輯器
- [Postico](https://eggerapps.at/postico) -Mac的現代 PostgreSQL客戶端。
- [Robo 3T](https://github.com/Studio3T/robomongo) - 以貝殼为中心的跨平台MongoDB管理工具。
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - macOS的MySQL/MariaDB數據庫管理。
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - 快速易用 Mac 資料庫管理應用程式, 用于與 MySQL & MariaDB 資料庫合作 。
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - 圖像介面支援所有 SQLite 功能 。
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - 查看SQLite數據庫的TUI,用Go寫的。
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - 网基SQL編輯器在您自己的私密云中运行。
- [SQLPro](https://www.macpostgresclient.com) - 一個簡單而強大的PostgreSQL管理員
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - 用 Java 寫成的圖像化 SQL 用戶端可以讓您查看 JDBC 符合的資料庫的结构, 瀏覽表格中的資料, 發送 SQL 命令等 。
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - VSCode的數據庫管理。
- [SQLyog](https://www.webyog.com/product/sqlyog) 最完整最易使用 MySQL GUI.
- [Tabix](https://github.com/tabixio/tabix) - SQL 編輯器 & Clickhouse 的開源簡單商業情報 。
- [TablePlus](https://github.com/TablePlus/TablePlus) - 相關數據庫的現代、本土和友好的GUI工具:MySQL、PostgreSQL、SQLite & more。
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - 從任何地方使用您的 PostgreSQL 資料庫, 其中有豐富的閃電快AJAX 網站介面 。
- [Query.me](https://query.me) - 以Notebook格式合作的 SQL 編輯器。 請參考使用 JINJA 的查詢結果, 視覺數據,


## 中央LI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - 連接 IPython 或 IPython Notebook 內的 SQL 指令的資料庫。
- [iredis](https://github.com/laixintao/iredis) - 具有自動補充和語法突顯功能的 Cli
- [pgcenter](https://github.com/lesovsky/pgcenter) - PostgreSQL 的頂級管理工具。
- [pg_activity](https://github.com/julmon/pg_activity) - PostgreSQL 伺服器活動監控的頂級應用程式。
- [pg_top](https://github.com/markwkm/pg_top) - PostgreSQL最高分
- [pspg](https://github.com/okbob/pspg) - PostgreSQL 呼叫器。
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) 危險的 PostgreSQL 移動模式 它與 PostgreSQL SQL 文件無缝合作,
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL 開發者指令行(SQLcl)是Oracle數據庫的自由指令行介面.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - 管理 SQLite 資料庫檔案的 CLI 工具 - 插入資料、 執行查詢、 建立索引、 設定全文搜尋等等 。
- [SQLLine](https://github.com/julianhyde/sqlline) - 通过 JDBC 發行 SQL 到關係資料庫的指令行 shell 。
- [usql](https://github.com/xo/usql) - PostgreSQL、MySQL、Oracle數據庫、SQLite3、Microsoft SQL 伺服器以及包括NoSQL和非關聯數據庫在内的许多其他數據庫的通用指令行介面!

### dbcli 語言
- [athenacli](https://github.com/dbcli/athenacli) - AWS Athena 服務的 CLI 工具, 可以做自動補充和語法突顯 。
- [litecli](https://github.com/dbcli/litecli) - SQLite數據庫的 CLI 具有自動補充和語法突顯功能 。
- [mssql-cli](https://github.com/dbcli/mssql-cli) - SQL 伺服器的指令行客戶端, 有自動補充和語法突顯功能 。
- [mycli](https://github.com/dbcli/mycli) - MySQL 的終端客戶端 , 有自動完成和語法突顯功能 。
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL CLI 有自動補充和語法突顯。
- [vcli](https://github.com/dbcli/vcli) - 有自動補充和語法強調的 Vertica CLI。


## 司馬

### 變更
- [2bass](https://github.com/CourseOrchestra/2bass) - 數據庫設定-as-code工具,
- [Atlas](https://github.com/ariga/atlas) - 檢查並套用您的數據庫計劃的變更。
- [Bytebase](https://github.com/bytebase/bytebase) - 基于網絡的,零配置的,無依赖性的數據庫的變更和版本控制工具供各隊使用.
- [flyway](https://github.com/flyway/flyway) - 數據庫移動工具。
- [gh-ost](https://github.com/github/gh-ost) - MySQL的線上移動
- [liquibase](https://github.com/liquibase/liquibase) - 數據庫獨立文庫,用于追蹤、管理及應用數據庫的變更。
- [migra](https://github.com/djrobstep/migra) - 像diff,但PostgreSQL的計劃。
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - Node.js數據庫移動管理專為PostgreSQL而建. (但也可以用于符合 SQL 標準的其他 DB - 例如 CockroachDB ) 。
- [pg-osc](https://github.com/shayonj/pg-osc) - 用于在 PostgreSQL 中做零關閉時機變更和回填的簡單 CLI 工具 。
- [Prisma Migrate](https://github.com/prisma/migrate) - 宣傳數據庫 schema 移動工具, 使用宣傳數據建模語法描述您的數據庫 schema 。
- [Pyrseas](https://github.com/perseas/Pyrseas) -提供公用设施 描述 PostgreSQL 數據庫 schema 的YAML。
- [Reshape](https://github.com/fabianlindfors/reshape) - Postgres的易用零下限的移動工具。
- [SchemaHero](https://github.com/schemahero/schemahero) - Kubernetes操作員,
- [Skeema](https://github.com/skeema/skeema) -MySQL和MariaDB的宣傳性纯SQL計劃管理系統,
- [Sqitch](https://github.com/sqitchers/sqitch) - 用于無框架开发和可靠部署的感知型數據庫內源變化管理。
- [sqldef](https://github.com/k0kubun/sqldef) -MySQL、PostgreSQL等等的
- [yuniql](https://github.com/rdagumampan/yuniql) 也希望更好。

### 代碼產生
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - 從表格中引出 SQL DDL( 數據定義語言) 。
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - 指令行 用于匯出 Oracle 的圖案, 以設定 ddl init 文稿, 能夠过滤不理想的資訊, 將 DDL 分開於不同的檔案, 格式輸出 。

### 图
- [Azimutt](https://github.com/azimuttapp/azimutt) - 實體關係圖(ERD)可視化工具,有各种滤波器和輸入,以帮助理解您的數據庫規劃。
- [ChartDB](https://github.com/chartdb/chartdb) - 自由開源數據庫圖表編輯器, 透視和設計您的 DB 單一查詢。
- [DrawDB](https://github.com/drawdb-io/drawdb) - 自由、簡單、直覺的在线數據庫設計工具和SQL產生器。 
- [DrawSQL](https://drawsql.app) 使用 SQL 匯入、 AI 產生、 以及实时團隊合作 。
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - 实体聯系圖產生工具。
- [ERD Lab](https://www.erdlab.io/) - 基于自由雲的實體關係圖(ERD)工具為發展者制作 。
- [Liam ERD](https://github.com/liam-hq/liam) - 開源工具, 從您的數據庫和ORM中產生美麗而易讀的實體關係圖表。
- [QuickDBD](https://www.quickdatabasediagrams.com/) - 快速绘制數據庫圖的簡單網路工具。

### 文件
- [dbdocs](https://dbdocs.io/) 使用 DSL 代碼建立網路數據庫文件。
- [DBML](https://github.com/holistics/dbml) - 數據庫 Markup Language,旨在定義和記錄數據庫的結構。
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - 一個自由的數據庫計劃發現和理解工具
- [Schema Spy](https://github.com/schemaspy/schemaspy) - 產生您的數據庫到 HTML 文件, 包括實體關係圖 。
- [tbls](https://github.com/k1LoW/tbls) - CI - Friendly 檔案工具, 用 Go 寫的數據庫。

### 設計
- [Database Design](https://github.com/alextanhongpin/database-design) 設計強健數據庫計劃的有用提示
- [DBDiagram](https://dbdiagram.io) - 一個自由、簡單的工具,只要寫法碼就可以畫出ER圖。
- [DbSchema](https://dbschema.com/) - 通用的數據庫設計器 用于外置數據庫管理 圖案文件 群組設計 DbSchema 設定了寫作與執行查詢的工具,
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - 用于高质量數據模型的易用數據庫建模軟體。 這是一個完整的數據建模解答 供數據建模者和數據建構者使用
- [Moon Modeler](https://www.datensen.com) - 無SQL和關係數據庫的資料建模工具。 可用於 Windows, Linux 和 macOS 。
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - 一個強大且成本效益高的數據庫設計工具, 幫助你建立高质量的 概念、 逻辑和物理數據模型。
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - 自由圖像化工具,可以提高生产率和简化資料建模工作。
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - 用于PostgreSQL的數據建模工具。
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - 在线SQL圖示工具。

### 樣本
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) -甲骨文數據庫的樣本


## API
建立您的資料的 API
- [Datasette](https://github.com/simonw/datasette) - 探索和公布數據的工具。
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - 手機、網路和IOT應用程式的開源 REST API 後端介面。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - 把多個數據來源變成一個 GraphQL API。
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) 即時即時地圖QL API 上,
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - REST API 供任何 JDBC 支援的資料庫使用, 用 Java 寫作 PostgREST 克隆 。
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - 中級 Java 應用程式, ORDS 映射 HTTP( S) 動詞( GET, POST, PUT, DELETETE 等) 以建立資料庫, 傳回使用 JSON 格式化的任何結果 。
- [Prisma](https://github.com/prismagraphql/prisma) 將您的數據庫轉換成实时 GraphQL API 。
- [PostGraphile](https://github.com/graphile/postgraphile) - 立即旋轉 GraphQL API 伺服器, 將 PostGraphile 指向您的 PostgreSQL 資料庫 。
- [PostgREST](https://github.com/PostgREST/postgrest) 任何 PostgreSQL 資料庫的 REST API 。
- [prest](https://github.com/prest/prest) - 是用Go寫的數據庫裡的 一個原始API
- [Remult](https://github.com/remult/remult) - 端到端型安全 CRUD 透過 REST API 供您的數據庫使用, 以及精密的存取控制 。
- [restSQL](https://github.com/restsql/restsql) - SQL 產生器配有 Java 和 HTTP API, 使用簡單的 RESTful HTTP API 配有 XML 或 JSON 序列化 。
- [resquel](https://github.com/formio/resquel) 很容易把你的 SQL 資料庫轉換成 REST API。
- [sandman2](https://github.com/jeffknupp/sandman2) - 自動為您的遺傳資料庫產生 RESTful API 服務 。
- [soul](https://github.com/thevahidal/soul) - 自動 SQLite RESTful 和实时 API 伺服器 。
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - 寫入樣本 SQL 以自動從您的數據庫/資料庫/資料湖中顯示 RESTful API 。

## 應用程式平台
用于建立應用程式的低碼和無碼平台
- [Appsmith](https://github.com/appsmithorg/appsmith) - 強大的開源低碼框架 以建立內部應用程式
- [Budibase](https://github.com/Budibase/budibase) - 在幾分鐘內建立內部應用程式的低碼平台。
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - 低碼內部工具建設平台
- [Nhost](https://github.com/nhost/nhost) - 開源防火基地替代物,有GraphQL。
- [Saltcorn](https://github.com/saltcorn/saltcorn) - 網路數據庫應用程式的開源無碼建立器。 伺服器與拖放 UI 建構器, 資料儲存在 PostgreSQL 或 SQLite 中 。
- [SQLPage](https://github.com/sqlpage/SQLPage) - 快速 SQL 只建立數據應用程式 。 自動建立 SQL 查詢之上的 UI 。
- [Tooljet](https://github.com/ToolJet/ToolJet) ——開源低碼平台打造內部工具.


## 備份
- [BaRMan](https://github.com/2ndquadrant-it/barman) - PostgreSQL 的備份和恢复管理員。
- [Databasus](https://github.com/databasus/databasus) - PostgreSQL 的備份工具, 包括外部儲存(本地、S3、FTP、Google Drive等)、通知(webhook、Discord、Slack等)和团队管理。
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - 可靠的 PostgreSQL 備份與恢復 。
- [pgcopydb](https://github.com/dimitri/pgcopydb) 复制 PostgreSQL 資料庫到目標 PostgreSQL 伺服器( pg)_垃圾 | pg_在類固醇上恢复).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - PostgreSQL的備份和恢复管理員
- [Portabase](https://github.com/Portabase/portabase) - PostgreSQL 備份的代理平台, 

## 克隆
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - 即時的薄克隆 PostgreSQL 以放大發展过程。
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL 克隆計程程式, 不需要到數據庫之外。
- [Spawn](https://spawn.cc/) - 建立即時數據庫副本供開發和CI的云端服務。 沒有更多的本地 db 安裝, 即時恢復為任意儲存點, 每個功能分支或試驗的孤立副本 。 即時提供, 不管數據庫大小 。


## 监测/统计/业绩
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - 在 Oracle 和 PostgreSQL DB 內提供正在使用的會議歷史資料的圖像化檢視 。
- [Metis](https://www.metisdata.io/product/troubleshooting) -提供SQL數據庫的可觀性和性能調調
- [Monyog](https://www.webyog.com/product/monyog) -無代理和成本效益高的MySQL監控工具。
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - 使用收集、InfluxDB和Grafana來監控您的 SQL 伺服器 Linux 的性能。
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - 一個安全、簡單和沒有特效的遠端伺服器監控工具,它包裝了強大的功能,使你的監控尽可能有效。
- [Percona Monitoring and Management](https://github.com/percona/pmm) - 管理和监测MySQL和MongoDB性能的開源平台。
- [pganalyze collector](https://github.com/pganalyze/collector) 收集 PostgreSQL 公制和紀錄資料的數據收集器
- [pgbadger](https://github.com/dalibo/pgbadger) - 快速的 PostgreSQL 日志分析器。
- [pgDash](https://pgdash.io) - 測量和追蹤你的 PostgreSQL 資料庫的每個方面。
- [PgHero](https://github.com/ankane/pghero) - PostgreSQL的性能儀表表 - 健康檢查,建議的索引等等。
- [pgmetrics](https://github.com/rapidloop/pgmetrics) 收集並顯示 PostgreSQL 伺服器的資訊與數據。
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - 全能工具 方便建立環境 以視覺您的 PostgreSQL 群組的健康和性能
- [pgMustard](https://www.pgmustard.com) - PostgreSQL 的使用者介面 解釋計劃, 以及提高性能的提示 。
- [pgstats](https://github.com/gleu/pgstats) 收集 PostgreSQL 的數據, 或儲存在 CSV 檔案中, 或是打印在 stdout 上 。
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 軟體自成一体的 PostgreSQL 測量器 監控/排版
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) 在您的 PostgreSQL 資料庫中提取和提供公制。
- [PostgreSQL Monitor](https://postgresmonitor.com) PostgreSQL提供警示、儀表、查詢數據和动态建議的易用監控服務。
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - 新一代的诊断工具,
- [Promscale](https://github.com/timescale/promscale) - SQL提供電源的開源可觀性後端
- [Releem](https://releem.com) - MySQL & MariaDB的性能監控與优化工具, 提供可操作的洞察力及安全自動,
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - 提供你的 PostgreSQL 資料庫的量表。

### 普羅米修斯
- [pgSCV](https://github.com/weaponry/pgscv) - PostgreSQL和PostgreSQL相关服務的量子匯出商。
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL 伺服器測量的Prometheus匯出者。
- [pg_exporter](https://github.com/Vonng/pg_exporter) - PostgreSQL & Pgbouncer 完全自訂的Prometheus 匯出者, 具有精良的執行控制。

### 扎比克斯
- [Mamonsu](https://github.com/postgrespro/mamonsu) - PostgreSQL的監控探員
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - 插件與 Zabbix 企業監控器合作,
- [pg_monz](https://github.com/pg-monz/pg_monz) - 這是PostgreSQL數據庫的 Zabbix 監控模版。
- [Pyora](https://github.com/bicofino/Pyora) - 用于監控甲骨文數據庫的 Python 文稿
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - 快速、灵活和持續地發展插件以監控您的 RDBMS 。


## 測試
- [DbFit](https://github.com/dbfit/dbfit) - 一個數據庫測試框架, 支持您的數據庫碼輕鬆的試驗驅動發展 。
- [pgTAP](https://github.com/theory/pgtap) - PostgreSQL的單位測試
- [RegreSQL](https://github.com/dimitri/regresql) 檢查您的 SQL 查詢
- [SQLancer](https://github.com/sqlancer/sqlancer) - 自動測試 DBMS 以便在執行中找到邏輯錯誤 。


## HA/ 失敗/ 硬化
- [Citus](https://github.com/citusdata/citus) - PostgreSQL 延伸檔名, 將您的數據與查詢分佈到多個節點 。
- [patroni](https://github.com/zalando/patroni) - PostgreSQL 高可用性模版,有動物保藏器等等,或领事。
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - MySQL群組和高可用性的高可伸缩性溶液。
- [ShardingSphere](https://github.com/apache/shardingsphere) - 分布 SQL 交易與查詢引擎, 供資料壓縮、 縮放、 加密及更多 - 在任何數據庫中 。
- [stolon](https://github.com/sorintlab/stolon) - 云原生 PostgreSQL 管理器,用于 PostgreSQL 高可用性。
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - PostgreSQL 延伸及服務,
- [pglookout](https://github.com/aiven/pglookout) - PostgreSQL 复制監控與故障覆蓋守护进程 。
- [pgslice](https://github.com/ankane/pgslice) -像派一樣容易分離
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - PostgreSQL的高易失性,基于行业參考Pacemaker和Corosync。
- [autobase](https://github.com/vitabaks/autobase) - 開源 DBaaS, 使 PostgreSQL 群組的部署和管理自动化。
- [Vitess](https://github.com/vitessio/vitess) - 數據庫群組系統,


## 忽必烈
- [KubeDB](https://kubedb.com) - 讓庫伯內特斯的數據庫容易運作
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - PostgreSQL 運算器讓 PostgreSQL 在 Kubernetes (Kubernetes) 上可以使用, 由 Patroni 提供電源 。
- [Spilo](https://github.com/zalando/spilo) - HA PostgreSQL群組與多克。
- [StackGres](https://gitlab.com/ongresinc/stackgres) -企業階級 Kubernets上的全斯塔克PostgreSQL


## 配置調整
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - 用 Perl 寫的文稿, 讓您能快速檢視 MySQL 的安裝, 並做出調整,
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - 自由的網路工具,以生成最优化的工具 `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - PostgreSQL 設定向导 。
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - 簡單的文稿分析您的 PostgreSQL 數據庫設定, 並提供調整建議 。


## 刪除( D)
- [DBmaestro](https://www.dbmaestro.com) 加速釋放周期,
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - 在您的 DevOps 工作流程中執行關鍵的數據庫發展函數, 且不影響质量、 性能或可靠性 。


## 報告
- [Chartbrew](https://chartbrew.com) - 從多個數據庫和服務建立活的儀表、圖表和客戶端報告。
- [Poli](https://github.com/shzlw/poli) - 方便使用的 SQL 報告應用程式。


## 分配
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - 容易部署 MySQL 數據庫伺服器的工具。
- [dbatools](https://github.com/sqlcollaborative/dbatools) - PowerShell模組,你可能覺得它像命令線 SQL 伺服器管理工作室。
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) PostgreSQL的裝備裝備是標準的Mac應用程式
- [BigSQL](https://www.bigsql.org) - PostgreSQL 的開發者友好化。
- [Elephant Shed](https://github.com/credativ/elephant-shed) - 以Web为基础的 PostgreSQL 管理前端, 將數個公用程式和應用程式與 PostgreSQL 套用 。
- [Pigsty](https://github.com/Vonng/pigsty) - PostgreSQL 的電池- 插入的開源放送, 以及开发者最後的可觀性與數據庫- as- Code工具箱 。


## 安全
- [Acra](https://github.com/cossacklabs/acra) - 數據庫安全套房 數據庫代用程式 字段加密 搜尋加密資料 防止SQL注射 入侵偵測 蜜罐 支援客戶端與代理端 ("透明") 加密 。 SQL,無SQL。
- [Databunker](https://github.com/securitybunker/databunker) 特別的 GDPR 符合安全金庫,供客戶紀錄 建在普通的DB之上。
- [Inspektor](https://github.com/poonai/inspektor) -數據庫的存取控制層 Inspektor利用開放的政策代理商做出政策決定。


## SQL 檔案

### 分析器
- [Holistic.dev](https://holistic.dev) - 數據庫的性能、安全和建構問題的自動偵測服務。
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - 自動偵測到普通的SQL防護服
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - 柔軟且可塑的 SQL linter.
- [SQLLineage](https://github.com/reata/sqllineage) - SQL線程分析工具 由 Python 提供電源。
- [TSQLLint](https://github.com/tsqllint/tsqllint) - 描述、辨識和报告TSQL文稿中存在反步槍的工具。

### 程式碼產生器
- [sqlc](https://sqlc.dev) - SQL第一碼產生器 產生各種語言和數據庫的類型安全包裝 。
- [SQLDelight](https://sqldelight.github.io/sqldelight) - SQL第一代碼產生器 製作 Kotlin 和各种數據庫的型態安全包裝
- [pGenie](https://pgenie.io) - SQL- first 代碼產生器, 產生各種語言的型態安全裝訂, 並專用 PostgreSQL 資料庫。

### 延伸
- [PartiQL](https://partiql.org) - SQL - 相容的存取 關係、半結構和巢狀的資料。

### 框架
- [Apache Calcite](https://calcite.apache.org) - 具有SQL先进功能的动态數據管理框架。
- [ZetaSQL](https://github.com/google/zetasql) - SQL分析器框架。

### 格式
- [CodeBuff](https://github.com/antlr/codebuff) - 語言不可知的印刷 通过機器學習。
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - 開源 Java SQL 根據JSqlParser,
- [SQL Online](https://sqlonline.in) 自由工具來格式化您的 SQL 查詢, 然后是分析員的內容 。
- [pgFormatter](https://github.com/darold/pgFormatter) - PostgreSQL SQL 語法美化器。
- [Poor SQL](https://poorsql.com) - 即時自由開源 T-SQL 格式化。 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - JavaScript 文庫, 供 pretty printing SQL 查詢 。

### 遊戲
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - SQL 學習遊戲 幫助您取得基本的 SQL 技能 - 這樣您就可以用查詢來取得資訊 。
- [Querymon](https://codepip.com/games/querymon/) - 學著在Querydex上使用 SQL 查詢 一個從普通到傳奇的怪物數據庫
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - 在PostgreSQL數據庫中完全實施了一個天基戰略遊戲。
- [SQL Island](https://sql-island.informatik.uni-kl.de) - 在幸存的飛機失事後,你會被困在SQL島上 只要在比賽中有所進展 你就會有辦法逃出這個島
- [SQL Murder Mystery](https://mystery.knightlab.com) - 被設計為自導自演 學習 SQL 概念與指令的課程,
- [SQL Police Department](https://sqlpd.com) - 在SQLPD中,你可以破案 同时學習SQL。

### 解析器
- [General SQL Parser](https://www.sqlparser.com) - SQL的剖析、格式化、修改和分析。
- [jOOQ](https://github.com/jOOQ/jOOQ) - 剖析 SQL, 翻譯到其他方言, 并允許表示樹變化 。
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - 解析 SQL 聲明,並翻譯為 Java 等級
- [libpg_query](https://github.com/pganalyze/libpg_query) - C 文庫, 用于存取伺服器環境外的 PostgreSQL 剖析器 。
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - 分析SQL到JSON。
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Python的SQL解析器
- [SQLGlot](https://github.com/tobymao/sqlglot) - 純粹的Python SQL分析器 轉移器和建築器

### 烏伯SQL
執行 SQL 查询
- [CloudQuery](https://github.com/cloudquery/cloudquery) - 提取、轉換和加載您的雲資產到 PostgreSQL 正常的表格。
- [csvq](https://github.com/mithrandie/csvq) CSV 的 SQL 類的查詢語言 。
- [dsq](https://github.com/multiprocessio/dsq) - 執行 SQL 查詢 JSON, CSV, Excel, Parquet 等的指令線工具 。
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) Eclipse 記憶分析器的外掛程式可以透過 SQL 查詢堆積堆積 。
- [OctoSQL](https://github.com/cube2222/octosql) - 查詢工具, 讓您使用 SQL 加入、 分析並轉換多個數據庫與檔案格式的資料 。
- [osquery](https://github.com/osquery/osquery) - SQL提供運作系統測試、監控和分析
- [Resmo](https://www.resmo.com) - 使用 SQL 審查和评估資源。
- [sq](https://github.com/neilotoole/sq) - 命令行工具,提供 jq 樣式存取有結構的資料源: SQL 資料庫,或 CSV 或 Excel 等文件格式。 這是Sql+jq的愛人
- [Steampipe](https://github.com/turbot/steampipe) 使用 SQL 來即時查詢您的云服務( AWS, Azure, GCP 等) 。
- [TextQL](https://github.com/dinedal/textql) -對像CSV或TSV的結構文字執行SQL。
- [trdsql](https://github.com/noborus/trdsql) - CLI 工具,可以執行 CSV, LTSV, JSON 和 TBLN 的 SQL 查詢 。
- [Trino](https://github.com/trinodb/trino) - 分配 SQL 查詢引擎, 以查詢分布在一個或多個不同資料來源上的大數據集。

### 語言伺服器協議
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL 語言伺服器
- [sqls](https://github.com/lighttiger2505/sqls) - SQL語言伺服器用Go寫成。

### 學習
SQL 的学习與拼圖
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) 困難的 SQL 拼圖
- [Hackerrank](https://www.hackerrank.com/domains/sql) - 練習編碼 準備面試 被雇
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - 一本關於如何使用 SQL 取回,滤過,分析數據的書。
- [LeetCode](https://leetcode.com/problemset/database) - 提升你的技能 拓展你的知識 準備專業訪問
- [Select Star SQL](https://selectstarsql.com) - 自由互動書,
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - 數據科學教育資源
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - 自導自導的教訓 以學習 SQL 的概念和指令 和一個有趣的遊戲,

### 計劃
- [pev2](https://github.com/dalibo/pev2) 以顯示 PostgreSQL 執行計劃的圖像化 。
- [pg_flame](https://github.com/mgartner/pg_flame) - PostgreSQL 的火焰圖產生器 `EXPLAIN ANALYZE` 輸出。

### 文稿
用于不同目的的 SQL 說明
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - T- SQL 文稿 : 优化儲存、 即時文件, 以及 SQL 伺服器的一般行政需求 。
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) 我們在PostgreSQL專家的團隊創立的 數據庫分析與管理有用的小腳本集
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - 查詢以測量 PostgreSQL 的索引和表格中的統計bloat。
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - SQL 測試檢查您的數據庫是否遵循了從 <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) - 有用的PostgreSQL公用事业。
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - 有用的 SQL 標籤和命令 <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - 缺少的 PostgreSQL DBA 和所有工程師的有用工具
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - 有用的 PostgreSQL 查詢和命令。
- [TPT](https://github.com/tanelpoder/tpt-oracle) - 這些 sqlplus 文稿是用于 Oracle 數據庫的性能优化與故障排除 。


## 資料
- [dbt](https://github.com/dbt-labs/dbt-core) - 轉換您的資料, 只需寫入選取的語言, 而 dbt 處理這些語言變成資料庫中的表格和檢視 。
- [QuickTable](https://quicktable.io) - 使每個人都有權使用、清理、分析、轉換和模擬數據

### 星表
- [Amundsen](https://github.com/amundsen-io/amundsen) 提高數據分析師、數據科學家和工程師與數據互動的效能。
- [DataHub](https://github.com/datahub-project/datahub) - 現代數據堆裝元数据平台。
- [Marquez](https://github.com/MarquezProject/marquez) - 收集、汇总和可視化數據生态系统的元数据。

### 序列
- [Dwh.dev](https://dwh.dev) -雪花的Nexgen數據

### 生成/ Masking/子集
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - 生成、模糊(匿名/假名)和移動資料以供發展、測試和培训。
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - 建立大量實際測試數據的強大的GUI工具。
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - 小但強大的GUI工具 充斥著數以千計的實際測試數據
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - 強大的GUI工具,
- [Faker](https://github.com/faker-js/faker) - 在瀏覽器和節點中產生大量假數據。
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQL和PostgreSQL的數據庫匿名化和合成數據產生工具。
- [myanon](https://github.com/ppomes/myanon) - MySQL 垃圾檔案正在流動匿名器。 從 stdin 讀 Mysqldump, 將匿名版本寫成 stdout 。 支援定義散列、 定值、 JSON 字段匿名化、 Python 延伸 。
- [Noisia](https://github.com/lesovsky/noisia) - PostgreSQL的有害工作量產生器。
- [quick-seed](https://github.com/miit-daga/quick-seed) - 在PostgreSQL、MySQL、SQLite、Prisma和Drizzle ORM的支援下,
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - 簡單而有力的工具, 可以產生並填充選取的表格或整個數據庫, 並有實際的測試資料供您的應用程式使用。 生成 Oracle, MS SQL 伺服器, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL 數據庫, Amazon Redshift 和 Amazon RDS 的測試資料 。
- [SQLable](https://sqlable.com/generator/) - 在瀏覽器中產生假資料 。
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - DevOps的好友 在數據庫遮掩和產生。

### 資料設定檔
- [Data Profiler](https://github.com/capitalone/dataprofiler) - Data Profiler 是 Python 文庫,旨在方便資料分析、監控和敏感的資料偵測。
- [Desbordante](https://github.com/desbordante/desbordante-core) - 一個開源數據剖面器 專注於發現和驗證數據中的複雜模式
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - 用于高水平分析数据集的通用開源數據剖面器。

### 复制
- [dtle](https://github.com/actiontech/dtle) - MySQL的分布式資料傳輸服務。
- [Litestream](https://github.com/benbjohnson/litestream) - SQLite的流傳复制。
- [pgsync](https://github.com/ankane/pgsync) - 在數據庫中同步 PostgreSQL 資料 。
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQL 到 PostgreSQL 复制系統,用 Python 3 寫成 。 系統使用圖書庫的 mysql- replex 來拉出從 MySQL 儲存到 PostgreSQL 的列影像, 如 JSONB 。
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) 使用 PostgreSQL 的邏輯解碼功能。
- [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL最受歡迎的复制管理員。

### 比較
- [data-diff](https://github.com/datafold/data-diff) - 命令行工具和 Python 文庫, 以高效的 diff 列跨兩個不同的數據庫。
- [KS DB Merge Tools](https://ksdbmerge.tools) - 用于比對和同步 DB 計劃和資料的 GUI。 Oracle 數據庫、 MySQL、 MariaDB、 SQL 伺服器、 PostgreSQL、 SQLite、 MS 存取與跨 DBMS 。

## 文件
數據庫工具上的文件、文章、宣言和其他理論材料
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - 把你的數據庫當做密碼
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - 一個友好的圖示指南 设计和實施你的第一個數據庫。

## 機器学习
- [MindsDB](https://github.com/mindsdb/mindsdb) - 內部數據機學習
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - 把SQL和AI帶到一起

## 捐款
- 你的贡献總是受歡迎的! 請讀一下 [contribution guidelines](contributing.md) 先
