# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> [PostgreSQL](https://www.postgresql.org/) の優れたソフトウェア、ライブラリ、ツール、リソースを厳選したリストです。[awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/) に着想を得ています。

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) は、一般に Postgres とも呼ばれる[オブジェクト関係データベース](https://en.wikipedia.org/wiki/Object-relational_database)（ORDBMS）です。PostgreSQL は [ACID](https://en.wikipedia.org/wiki/ACID) に準拠し、[トランザクション処理](https://en.wikipedia.org/wiki/Transaction_processing)に対応しています。（詳細：[wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)、[PostgreSQL.org](https://www.postgresql.org)）

 :elephant: 貢献を歓迎します。[プルリクエスト](https://github.com/dhamaniasad/awesome-postgres/pulls)でリンクを追加するか、[issue](https://github.com/dhamaniasad/awesome-postgres/issues)を作成して議論を始めてください。[貢献ガイドライン](CONTRIBUTING.md)もご確認ください。

<a id="contents"></a>

## 目次

- [Awesome Postgres](#awesome-postgres-)
    - [高可用性](#high-availability)
    - [バックアップ](#backups)
    - [GUI](#gui)
    - [ディストリビューション](#distributions)
    - [CLI](#cli)
    - [サーバー](#server)
    - [監視](#monitoring)
    - [拡張機能](#extensions)
    - [プラットフォーム](#platforms)
    - [ワークキュー](#work-queues)
    - [最適化](#optimization)
    - [ユーティリティ](#utilities)
    - [言語バインディング](#language-bindings)
    - [PaaS（サービスとしての PostgreSQL）](#paas-postgresql-as-a-service)
    - [Docker イメージ](#docker-images)
    - [Kubernetes](#kubernetes)
- [リソース](#resources)
    - [チュートリアル](#tutorials)
    - [ブログ](#blogs)
    - [ドキュメント](#documentation)
    - [ニュースレター](#newsletters)
    - [動画](#videos)
    - [コミュニティ](#community)
    - [ロードマップ](#roadmaps)
    - [外部リスト](#external-lists)

<a id="high-availability"></a>

### 高可用性
* [autobase](https://github.com/vitabaks/autobase) - Autobase for PostgreSQL® は、高可用性 PostgreSQL クラスターのデプロイと管理を自動化するオープンソースの DBaaS です。
* [BDR](https://github.com/2ndQuadrant/bdr) - 双方向レプリケーション。PostgreSQL 向けのマルチマスター・レプリケーションシステムです。
* [Patroni](https://github.com/zalando/patroni) - ZooKeeper または etcd を使用する PostgreSQL HA のテンプレートです。
* [Spock](https://github.com/pgEdge/spock) - 100% オープンソースの論理マルチマスター PostgreSQL レプリケーションです。
* [Stolon](https://github.com/sorintlab/stolon) - Consul または etcd を基盤とし、Kubernetes と連携する PostgreSQL HA です。
* [pglookout](https://github.com/aiven/pglookout) - レプリケーションの監視とフェイルオーバーを行うデーモンです。
* [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL サーバーのクラスターでレプリケーションとフェイルオーバーを管理するオープンソースのツール群です。
* [Slony-I](https://slony.info/) - カスケードとフェイルオーバーに対応した「1 つのマスターから複数のスレーブ」へのレプリケーションシステムです。
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL Automatic Failover：Pacemaker と Corosync を基盤とする Postgres の高可用性ソリューションです。
* [SkyTools](https://github.com/pgq/skytools-legacy) - PgQ（キューシステム）や、Slony よりも少し管理しやすいレプリケーションシステム Londiste などのレプリケーションツールです。
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - フェイルオーバーと高可用性を自動化する Postgres 拡張機能およびサービスです。
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - PostgreSQL サーバーの先行書き込みログ（WAL）をリアルタイムにストリーミングします。pg_receivewal の置き換えとしてそのまま使える、コンテナに適したツールです。
* [pg-status](https://github.com/krylosov-aa/pg-status) - 現在のマスターホスト、またはさまざまな条件を満たすレプリカを即座に取得するための HTTP エンドポイントを提供するマイクロサービスです。

<a id="backups"></a>

### バックアップ
* [Barman](https://www.pgbarman.org/index.html) - 2ndQuadrant が提供する PostgreSQL 用バックアップ・リカバリーマネージャーです。
* [Databasus](https://databasus.com) - Web UI から PostgreSQL のバックアップをスケジュールできるツールです。外部ストレージ（ローカル、S3、FTP、Google Drive など）、通知（webhook、Discord、Slack など）、チーム管理に対応しています。
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - PostgreSQL 向けの高度な WAL ファイル管理ツールです。
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – pg_arman のフォークで、@PostgresPro による改良版です。増分バックアップ、レプリカからのバックアップ、マルチスレッドのバックアップと復元、アーカイブコマンドを使わない匿名バックアップに対応しています。
* [pgBackRest](https://pgbackrest.org/)  - 信頼性の高い PostgreSQL のバックアップと復元を実現します。
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Web UI を備えた、Docker ベースの包括的な Postgres バックアップ・メンテナンスツールです。
* [pg\_back](https://github.com/orgrim/pg_back/) - シンプルなバックアップスクリプトです。
* [pghoard](https://github.com/aiven/pghoard) - クラウドオブジェクトストレージ（AWS S3、Azure、Google Cloud、OpenStack Swift）向けのバックアップ・復元ツールです。
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Alibaba Cloud Object Storage Service（OSS）に PostgreSQL を定期バックアップするための便利な Docker コンテナです。
* [wal-e](https://github.com/wal-e/wal-e) （廃止） - Heroku による、PostgreSQL を S3、Azure、Swift に保存するシンプルな継続的アーカイブツールです。
* [wal-g](https://github.com/wal-g/wal-g) - WAL-E の後継として Go で書き直されたツールです。AWS（S3）、Google Cloud（GCS）、Azure、OpenStack Swift、MinIO、ファイルシステムの各ストレージに対応しています。ブロックレベルの増分バックアップ、スタンバイサーバーへのバックアップタスクのオフロード、並列化とスロットリングのオプションを提供します。Postgres に加えて、MySQL と MongoDB のデータベースにも使用できます。
* [pitrery](https://dalibo.github.io/pitrery/) - PostgreSQL のポイントインタイムリカバリー（PITR）バックアップを管理する Bash スクリプト群です。
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` は、`pg_dump`、`cron`、bash スクリプトを使って PostgreSQL データベースの定期バックアップを自動化し、出力を webhook に送信する軽量な Docker サイドカーコンテナです。
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - pg_dump を基盤とする Docker 優先のソリューションです。環境変数による設定で PostgreSQL のバックアップをスケジュールでき、圧縮、GPG 暗号化、webhook、Amazon S3 への自動アップロードにも対応します。

<a id="gui"></a>

### GUI
* [1bench](https://1bench.dev/postgresql) - Postgres を第一級でサポートし、Redis、Elasticsearch、ClickHouse、Qdrant などにも対応する、ネイティブのクロスプラットフォーム GUI です（商用ソフトウェア）。
* [Adminer](https://www.adminer.org/) - PHP で書かれた、フル機能のデータベース管理ツールです。
* [AI for Database](https://aifordatabase.com) - PostgreSQL データベースと自然言語でチャットできます。SQL は不要です。すぐに分析結果を得たり、自動更新ダッシュボードを作成したり、データベースの変更に基づいてワークフローを自動実行したりできます（商用ソフトウェア）。
* [Beekeeper Studio](https://www.beekeeperstudio.io) - 最新の UI と優れた Postgres サポートを備えた、無料のオープンソース SQL クライアントです。クロスプラットフォームに対応しています。
* [Bytebase](https://www.bytebase.com) - 開発、セキュリティ、DBA、プラットフォームエンジニアリングの各チーム向けのデータベース DevSecOps ソリューションです。
* [Chartbrew](https://chartbrew.com) - PostgreSQL のデータから、リアルタイムダッシュボード、チャート、クライアント向けレポートを作成します。SQL を使えるクエリツールを備えています。
* [Count](https://count.co/) - PostgreSQL に接続するノートブックインターフェースを備えた Web ベースの分析プラットフォームです（商用ソフトウェア）。
* [DataGrip](https://www.jetbrains.com/datagrip/) - 高度なツールセットと優れたクロスプラットフォーム体験を備えた IDE です（商用ソフトウェア）。
* [Dekart](https://github.com/dekart-xyz/dekart) - PostGIS クエリを共有可能なインタラクティブマップに変換するオープンソースプラットフォームです。
* [Datazenit](https://datazenit.com/) - Web ベースの PostgreSQL GUI です（商用ソフトウェア）。
* [DataRow](https://www.datarow.com/) - Amazon Redshift 用のクロスプラットフォーム SQL クライアントです。シンプルで、手軽に使え、拡張可能です。
* [DBConvert Streams](https://streams.dbconvert.com/) - PostgreSQL、MySQL、ファイル、S3 互換ストレージに対応し、移行、フェデレーション SQL、CDC レプリケーションを備えるデータベース IDE です（商用ソフトウェア）。
* [DBeaver](https://dbeaver.io/) - PostgreSQL を優れた形でサポートする汎用データベースマネージャーです。
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - PostgreSQL、MySQL、MariaDB、SQL Server、Oracle、および幅広い関連クラウドサービスに対応するオールインワンのマルチデータベースソリューションです（商用ソフトウェア）。
* [DbVisualizer](http://www.dbvis.com) - 開発者、DBA、アナリスト向けのクロスプラットフォームデータベースクライアントです（商用ソフトウェア）。
* [Holistics](https://www.holistics.io/) - PostgreSQL を強力にサポートする、オンラインのクロスプラットフォームデータベース管理ツール兼 SQL クエリレポート GUI です（商用ソフトウェア）。
* [JackDB](https://www.jackdb.com/) - Web ベースの SQL クエリインターフェースです（商用ソフトウェア）。
* [Luna Modeler](http://www.datensen.com) - クロスプラットフォームのデスクトップデータモデリングツールです（商用ソフトウェア）。
* [Mathesar](https://mathesar.org/) - データベースを直感的に使えるユーザー体験を提供する Web アプリケーションです。
* [Metabase](https://www.metabase.com/) - PostgreSQL 向けのシンプルなダッシュボード、チャート、クエリツールです。
* [Numeracy](https://numeracy.co/) - PostgreSQL 向けの高速な SQL エディターで、チャートとダッシュボードを備えています（商用ソフトウェア）。
* [OrcaQ](https://github.com/cin12211/orca-q) - PostgreSQL、MySQL、Redis などに対応する、モダンなオープンソースのデータベースエディターです。AI アシスタント、ERD ビジュアライザー、スキーマ差分、視覚的なロール管理を備えています。
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQL の管理・運用 GUI です。
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - 自然言語で Postgres とチャットできます（商用ソフトウェア）。
* [PgManage](https://github.com/commandprompt/pgmanage) - Postgres を中心に設計された、モダンなマルチプラットフォームのデータベースクライアント兼管理ツールです。
* [pgModeler](https://pgmodeler.io/) - オープンソースの PostgreSQL データベースモデラーです。
* [PgStudio](https://github.com/dev-asterix/PgStudio) - PostgreSQL 管理用のオープンソース VS Code / Open VSX 拡張機能です。SQL ノートブック、AI アシスタント、使いやすいコードスニペット、リアルタイム監視ダッシュボードを備えた本格的な DBMS を提供します。
* [pgweb](https://github.com/sosedoff/pgweb) - Go で書かれた Web ベースの PostgreSQL データベースブラウザーです。
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - PostgreSQL 向けの主要な Web ベース管理ツールです。
* [Postbird](https://github.com/Paxa/postbird) - macOS 用 PostgreSQL クライアントです。
* [PostgresCompare](https://www.postgrescompare.com) - クロスプラットフォームのデータベース比較・デプロイツールです（商用ソフトウェア）。
* [Postico](https://eggerapps.at/postico/) - macOS 用のモダンな PostgreSQL クライアントです（商用ソフトウェア）。
* [QueryGlow](https://queryglow.com/) - AI による SQL 生成、EXPLAIN ビジュアライザー、スキーマを考慮した自動補完を備えた、セルフホスト型の Web ベースデータベース GUI です（商用ソフトウェア）。
* [PSequel](http://www.psequel.com/) - 一般的な PostgreSQL タスクをすばやく実行するための、すっきりとしたシンプルなインターフェースです（商用ソフトウェア）。
* [Redash](https://github.com/getredash/redash) - あらゆるデータソースに接続し、データを簡単に可視化して共有できます。
* [SQL Tabs](http://www.sqltabs.com/) - JS で書かれたクロスプラットフォームのデスクトップ PostgreSQL クライアントです。
* [SQLPro for Postgres](http://macpostgresclient.com/) - macOS 用のシンプルで強力な PostgreSQL マネージャーです（商用ソフトウェア）。
* [temBoard](https://github.com/dalibo/temboard) - Web ベースの PostgreSQL GUI および監視ツールです。
* [Teable](https://github.com/teableio/teable) - 超高速、リアルタイム、プロフェッショナルで、開発者に優しいノーコードデータベースです。
* [TablePlus](https://tableplus.com/) - データベースと構造を編集できるネイティブアプリです。高度なセキュリティを備えています（商用ソフトウェア）。
* [TablePro](https://tablepro.app/) - EXPLAIN の可視化、ER 図、AI アシスタントを備えた、ネイティブ macOS PostgreSQL クライアントです。無料でオープンソースです。
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - クロスプラットフォームのデータベース管理ツールです（無料／商用）。
* [DbGate](https://dbgate.org) - 最もスマートな SQL／NoSQL データベースクライアントです。
* [WebDB](https://webdb.app) – 効率的なデータベース IDE です。

<a id="distributions"></a>

### ディストリビューション
* [Postgres.app](https://postgresapp.com/) - macOS で PostgreSQL を使い始める最も簡単な方法です。
* [Pigsty](https://github.com/Vonng/pigsty) - PostgreSQL に必要なものがすべて含まれたオープンソースディストリビューションです。究極の可観測性と Database-as-Code ツールボックスを開発者に提供します。

<a id="cli"></a>

### CLI
* [atlas](https://github.com/ariga/atlas) - 最新の DevOps 原則に基づいてデータベーススキーマを管理・移行するツールです。
* [pgcli](https://github.com/dbcli/pgcli) - 自動補完と構文ハイライトを備えた Postgres CLI です。
* [pgfence](https://pgfence.com) - Postgres の SQL マイグレーションをロックモードや危険な DDL について検査し、安全な expand/contract 書き換えを行います。CLI と LSP を備え、Prisma、TypeORM、Knex 用の抽出機能もあります。
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Go で書かれた、自動補完と構文ハイライトを備える Postgres CLI です。
* [pgplan](https://github.com/JacobArthurs/pgplan) - CLI から PostgreSQL の EXPLAIN プランを比較・分析します。
* [pgschema](https://www.pgschema.com) - Terraform 形式の宣言的な Postgres スキーママイグレーションツールです。
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - Postgres スキーマを差分比較し、ロックを最小限に抑えた SQL マイグレーションを生成する CLI（および Go ライブラリ）です。
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - 本番環境に反映する前に危険な DDL を検出する PostgreSQL マイグレーション安全性 CLI です。80 のルール、ロック分類、自動修正、GitHub Action を備えています。
* [pgsh](https://github.com/sastraxi/pgsh) - PostgreSQL データベースを Git のようにブランチ化します。
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - PostgreSQL に組み込まれている CLI クライアントです。
* [psql2csv](https://github.com/fphilipe/psql2csv) - psql でクエリを実行し、結果を CSV として出力します。
* [sabiql](https://github.com/riii111/sabiql) - PostgreSQL データベースを閲覧、検索、編集できる、高速でドライバー不要の TUI です。
* [schemaspy](https://github.com/schemaspy/schemaspy) - データベースから ER 図を含む HTML ドキュメントを生成する、JAVA JDBC 準拠のツールです。
* [pdot](https://gitlab.com/dmfay/pdot) - 外部キーグラフの全体像からトリガーの連鎖、ロール継承、権限などに至るまで、シェル上でデータベース構造を可視化して調査できます。
* [squix](https://github.com/eduardofuncao/squix) - クエリ管理と対話型の結果表示を備えた SQL コマンドラインクライアントです。

<a id="server"></a>

### サーバー
* [AgensGraph](https://bitnine.net/) - PostgreSQL を基盤とする強力なグラフデータベースです。
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Greenplum Database に代わるオープンソースとして開発された MPP PostgreSQL フォークです。
* [FerretDB](https://www.ferretdb.io) - PostgreSQL 上で動作する、真にオープンソースな MongoDB 代替製品です。
* [Postgres-XL](https://www.postgres-xl.org/) - スケーラブルなオープンソースの PostgreSQL ベースデータベースクラスターです。
* [YugabyteDB](https://yugabyte.com/) - 分散ストレージとトランザクションを基盤とし、PostgreSQL のフォークを使用するオープンソースの分散 SQL です。

### セキュリティ
* [Acra](https://github.com/cossacklabs/acra) - SQL データベースのセキュリティスイートです。透過的なオンザフライデータ暗号化によるデータ保護プロキシ、SQL ファイアウォール（SQL インジェクション防止）、侵入検知システムを備えます。
* [pgrls](https://github.com/pgrls/pgrls) - 行レベルセキュリティポリシーの静的解析ツールです。セキュリティ、パフォーマンス、衛生面に関する 36 のルールのうち 10 個は機械的に自動修正でき、CI のゲート判定に使える意味的なポリシー差分コマンドも備えています。

<a id="monitoring"></a>

### 監視
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - Nagios から PostgreSQL クラスターを監視するためのツールです。有用なパフォーマンス指標の測定・監視に、多数のオプションを利用できます。
* [Check\_postgres](https://github.com/bucardo/check_postgres) - PostgreSQL データベースの状態を確認するための Nagios 用 check_postgres プラグインです。
* [coroot](https://github.com/coroot/coroot) - オープンソースの APM・可観測性ツールで、DataDog や NewRelic の代替製品です。eBPF によりシステムパフォーマンスをすばやく把握できます。
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - 指標、クエリ、実行計画を収集・可視化し、問題発生時にアラートを送信する SaaS 監視サービスです（商用ソフトウェア）。
* [Instrumental](https://github.com/Instrumental/instrumentald) - セットアップを簡単にする[既製のグラフ](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs)を含む、リアルタイムのパフォーマンス監視ツールです（商用ソフトウェア）。
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Zabbix 用の包括的な PostgreSQL 監視モジュールです。
* [myDBA](https://mydba.dev) - 75 以上の自動ヘルスチェック、クラスター対応のインデックスアドバイザー、クエリ分析、TimescaleDB、pgvector、PostGIS の拡張機能監視を備えた PostgreSQL パフォーマンス監視ツールです（商用ソフトウェア）。
* [PMM](https://github.com/percona/pmm) - PostgreSQL、MySQL、MongoDB を監視・管理する無料のオープンソースプラットフォームです。
* [Pome](https://github.com/rach/pome) - PostgreSQL Metrics の略です。データベースの健全性を追跡するための PostgreSQL メトリクスダッシュボードです。
* [pgmetrics](https://pgmetrics.io/) - 実行中の PostgreSQL サーバーから多くの情報や統計を収集する、依存関係ゼロのオープンソース単一バイナリツールです。読みやすいテキスト形式で表示するほか、スクリプト用に JSON や CSV にエクスポートできます。
* [pg\_view](https://github.com/zalando/pg_view) - システム全体の統計、パーティションごとの情報、メモリ統計などを表示するオープンソースのコマンドラインツールです。
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 柔軟で導入しやすく、Grafana ダッシュボードに重点を置いた PostgreSQL メトリクス監視ツールです。
* [pgwd](https://github.com/hrodrig/pgwd) - PostgreSQL の接続使用状況と長時間放置されたセッションを監視し、しきい値アラート、Prometheus メトリクス、複数の通知先に対応します。
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - PostgreSQL でベンチマークテストを実行します。
* [opm.io](http://opm.io) - PostgreSQL サーバーの管理を支援する無料ソフトウェアスイートです。統計の収集、ダッシュボード表示、異常時の警告送信ができます。
* [okmeter.io](https://okmeter.io/pg) - PostgreSQL 専用の詳細なプラグインを備えた、商用 SaaS のエージェント型監視ツールです。数百の統計情報を自動収集し、あらゆる側面のダッシュボードを表示して、問題発生時にアラートを送信します（商用ソフトウェア）。
* [dexter](https://github.com/ankane/dexter) - Postgres 用の自動インデクサーです。低速なクエリを検出し、設定に応じてインデックスを作成します。
* [pg_ash](https://github.com/NikolayS/pg_ash) - PostgreSQL のアクティブセッション履歴です。pg_cron 経由で pg_stat_activity を毎秒サンプリングし、エンコードされたスナップショットを保存して、待機イベント分析用の SQL 関数を 32 個提供します。純粋な SQL で拡張機能は不要であり、マネージドサービス（RDS、Cloud SQL、Supabase など）でも動作します。
* [pg_exporter](https://github.com/Vonng/pg_exporter) - PostgreSQL と Pgbouncer 向けの、実行制御を細かく設定できる完全カスタマイズ可能な Prometheus exporter です。
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL サーバーのメトリクスを取得する Prometheus exporter です。
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - 高度な統計情報を効率よく整理・管理するために設計された、オープンソースの PostgreSQL 拡張機能です。
* [pgvitals](https://github.com/pgvitals/pgvitals) - 標準のシステムカタログだけを使い、拡張機能なしで一般的なパフォーマンス問題（低速なクエリ、肥大化、VACUUM の遅延、ロック競合、レプリケーション遅延、トランザクション ID 周回リスク）を検出する、読み取り専用診断クエリ集です。オプションの CLI で結果を 0～100 の健全性スコアに集約できます。

<a id="extensions"></a>

### 拡張機能
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - オープンソースの PostgreSQL 拡張機能を多数配布するための中心的な配布サイトです。
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - PostgreSQL 拡張機能を 1,000 件以上掲載しています。
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - PostgreSQL 拡張機能を 400 件以上掲載しています。
* [AGE](https://github.com/apache/age) - Cypher クエリを含む、完全なグラフデータベース機能を追加します。
* [OrioleDB](https://www.orioledb.com/) - PostgreSQL 向けのクラウドネイティブなストレージエンジンです。ディスク上エンジンとインメモリエンジンの双方の利点を組み合わせた PostgreSQL 拡張機能です。
* [Citus](https://github.com/citusdata/citus) - リアルタイム処理向けのスケーラブルな PostgreSQL クラスターです。
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - PostgreSQL で分析を行うためのカラムナーストアです。
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - 列単位ですべての DML 操作をデータベース内に記録します。
* [pg_search](https://github.com/paradedb/paradedb) - 最先端の全文検索ランキング関数 BM25 を使い、SQL テーブルを全文検索できる PostgreSQL 拡張機能です。
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - ネイティブのインデックスアクセスメソッドと SQL の top-k クエリ API を備えた、BM25 系字句検索用 PostgreSQL 拡張機能です。
* [pg_cron](https://github.com/citusdata/pg_cron) - PostgreSQL 内で定期的なジョブを実行します。
* [pglogical](https://github.com/2ndQuadrant/pglogical) - 論理ストリーミングレプリケーションを提供する拡張機能です。
* [pgcat](https://github.com/kingluo/pgcat) - 強化版の PostgreSQL 論理レプリケーションです。
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL 用 SVG QR コード・データマトリックス生成ツールです。
* [pg\_partman](https://github.com/pgpartman/pg_partman) - PostgreSQL 用のパーティション管理拡張機能です。
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - PostgreSQL ノードのクラスター向けに、Paxos と Paxos ベースのテーブルレプリケーションを基本実装したものです。
* [pg\_shard](https://github.com/citusdata/pg_shard) - リアルタイムの読み取りと書き込みをスケールアウトする拡張機能です。
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - PostgreSQL 用のクエリパフォーマンス監視ツールです。
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - ロックを最小限に抑えて肥大化を自動的に解消する拡張機能です。
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - CPU 負荷の高い処理を GPU にオフロードする拡張機能です。
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - ストリームに対して SQL クエリを継続的に実行し、結果をテーブルに逐次保存する PostgreSQL 拡張機能です。
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - plpgsql のソースコードを検査する拡張機能です。
* [PostGIS](http://postgis.net/) - PostgreSQL 用の空間・地理オブジェクト機能です。
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - 暗号ライブラリ Themis の Postgres バインディングを拡張機能として提供し、PgSQL 側でさまざまなセキュリティ機能を利用できます。
* [zomboDB](https://github.com/zombodb/zombodb) - Elasticsearch を利用したインデックスによる効率的な全文検索を可能にする拡張機能です。
* [pgMemento](https://github.com/pgMemento/pgMemento) - PL/pgSQL で書かれたトリガーとサーバー側関数を使い、PostgreSQL データベース内のデータ変更履歴を記録します。
* [TimescaleDB](https://www.timescale.com/) - Postgres と完全互換で、拡張機能として配布されるオープンソースの時系列データベースです。
* [pgTAP](https://pgtap.org/) - Postgres 用データベーステストフレームワークです。
* [HypoPG](https://github.com/HypoPG/hypopg) - 仮想インデックス機能を提供します。
* [pgRouting](https://github.com/pgRouting/pgrouting) - PostGIS/PostgreSQL の地理空間データベースを拡張し、地理空間ルーティングやその他のネットワーク解析機能を提供します。
* [PGroonga](https://pgroonga.github.io/) - Groonga を利用した新しいインデックスアクセス方式を提供し、あらゆる言語の全文検索を非常に高速に行えます。
* [PGAudit](https://www.pgaudit.org/) - PostgreSQL Audit Extension（pgaudit）は、PostgreSQL 標準のログ機能を通じて、セッション単位またはオブジェクト単位の詳細な監査ログを提供します。
* [PostgresML](https://postgresml.org/) - ベクトル、LLM、従来型 ML など、データベース内で機械学習と AI を利用できます。SQL のみで機械学習モデルのライフサイクル全体を学習、予測、管理できます。
* [ParadeDB](https://github.com/paradedb/paradedb) - 検索と分析のための Postgres です。
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - PG Security Labels を通じて、Postgres データベース内の個人識別情報（PII）や商業上機密性の高いデータをマスキングまたは置換する拡張機能です。

<a id="platforms"></a>

### プラットフォーム
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - PostGIS、TimescaleDB、pgvector、H3 を組み合わせ、地理空間と時系列の情報を統合して扱うオープンソースの 4D 時空間プラットフォームです。
* [neond](https://github.com/matisiekpl/neond) - ブランチ作成、PITR、S3 の耐久性を備えた、開発者体験を重視する Postgres コントロールプレーンです。Web ダッシュボード付きの単一 Docker コンテナとして提供され、重要度の低いワークロード向けに `postgres:latest` の代替を目指しています。

<a id="work-queues"></a>

### ワークキュー
* [BeanQueue](https://github.com/LaunchPlatform/bq) - SKIP LOCKED、LISTEN、NOTIFY を基盤とする Python のワークキューフレームワークです。
* [pgmq](https://github.com/pgmq/pgmq) - 軽量なメッセージキューです。AWS SQS や RSMQ に似ていますが、Postgres 上で動作します。
* [river](https://github.com/riverqueue/river) - Go と Postgres 向けの高性能ジョブ処理システムです。
* [pgBoss](https://github.com/timgit/pg-boss) - Node.js から Postgres でジョブをキューイングできます。
* [dbos](https://www.dbos.dev/) - TypeScript と Python の耐久性のあるワークフローです。
* [Graphile Worker](https://worker.graphile.org) - Node.js で書かれた、高性能な PostgreSQL 用ジョブキューです。
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Node.js 向けの「メンテナンス不要」な Postgres キューです。

<a id="optimization"></a>

### 最適化
* [EverSQL](https://www.eversql.com/) - クエリの自動最適化、監視・分析、インデックス推奨を行うツールです（商用ソフトウェア）。
* [PEV2](https://github.com/dalibo/pev2) - オンラインの Postgres Explain ビジュアライザーです。
* [pg_flame](https://github.com/mgartner/pg_flame) - クエリプランのフレームグラフを生成します。
* [PgHero](https://github.com/ankane/pghero) - PostgreSQL の分析情報を簡単に確認できます。
* [pgMustard](https://www.pgmustard.com/) - モダンなユーザーインターフェース
を備えた `EXPLAIN` ツールで、パフォーマンス改善のヒントも提供します（商用ソフトウェア）。
* [pgtune](https://github.com/gregs1104/pgtune/) - PostgreSQL の設定ウィザードです。
* [pgtune](https://github.com/le0pard/pgtune) - PostgreSQL 設定ウィザードのオンライン版です。
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - PostgreSQL のオンライン設定ツールで、pgtune もベースにしています。
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL Workload Analyzer は、パフォーマンス統計を収集し、PostgreSQL サーバーの監視とチューニングに役立つリアルタイムのチャートやグラフを提供します。
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - pg_stat_statements を表示する Web UI です。
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - ホストのメモリや CPU 数などのリソースに応じて、TimescaleDB の性能を最大限に引き出す設定を行うプログラムです。
* [Metis](https://www.metisdata.io/product/troubleshooting) - PostgreSQL を含む SQL データベースの可観測性とパフォーマンスチューニングを提供します（商用ソフトウェア）。
* [aqo](https://github.com/postgrespro/aqo) - PostgreSQL 向けの適応型クエリ最適化です。
* [pgassistant](https://github.com/beh74/pgassistant-community) - LLM と pgTune の連携により、開発者がデータベースを理解し最適化するのを支援する PostgreSQL ツールです。

<a id="utilities"></a>

### ユーティリティ
* [apgdiff](https://www.apgdiff.com/) - 2 つのデータベースダンプファイルを比較し、古いデータベーススキーマを新しいスキーマに更新するための DDL 文を出力します。
* [bemi](https://github.com/BemiHQ/bemi) - PostgreSQL のデータ変更を自動的に追跡します。
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - データベースから ER（実体関連）図を生成します。
* [flyway](https://flywaydb.org/) - Postgres などに対応するスキーママイグレーションツールです。
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - クラウドネイティブなデータベースゲートウェイで、データ駆動型アプリケーション構築用フレームワークです。データベース向けの API ゲートウェイのようなものです。
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQL と PostgreSQL 用のデータベース匿名化・合成データ生成ツールです。
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Postgres 上に高速で即時利用できるリアルタイム GraphQL API を構築します。きめ細かなアクセス制御に対応し、データベースイベントを契機に webhook を実行できます。
* [ldap2pg](https://github.com/dalibo/ldap2pg) - YML と LDAP からロールと権限を同期します。
* [migra](https://github.com/djrobstep/migra) - Postgres スキーマ用の diff ツールです。
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Lanyrd の MySQL から PostgreSQL への変換スクリプトです。
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - NServiceBus.Transport.PostgreSql ライブラリを使うと、.NET 開発者は[メッセージブローカーとして PostgreSQL データベースを利用](https://docs.particular.net/transports/postgresql)できます（商用ソフトウェア）。
* [ora2pg](http://ora2pg.darold.net) - Oracle データベースのスキーマを PostgreSQL 互換スキーマにエクスポートする Perl モジュールです。
* [pg\_activity](https://github.com/dalibo/pg_activity) - PostgreSQL サーバーのアクティビティを監視する、top に似たアプリケーションです。
* [pg-formatter](https://github.com/gajus/pg-formatter) - PostgreSQL SQL 構文の整形ツール（Node.js）です。
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - アドバイザリロック、SHA-256 による差分検出、PostgreSQL 用の組み込み lint ルール 10 個を備えた、安全性を重視する Node.js マイグレーションエンジンです。
* [pganalyze](https://pganalyze.com) - PostgreSQL のパフォーマンス監視ツールです（商用ソフトウェア）。
* [pgbadger](https://github.com/darold/pgbadger) - 高速な PostgreSQL ログ解析ツールです。
* [PgBouncer](http://www.pgbouncer.org/) - PostgreSQL 用の軽量な接続プール管理ツールです。
* [pgCenter](https://github.com/lesovsky/pgcenter) - 各種統計情報や管理タスクのための便利なインターフェースを提供します。サービスの再読み込み、ログファイルの表示、データベースバックエンドのキャンセルや終了も行えます。
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - オプションで型を上書きする移行やマイグレーション機能に対応する、MySQL から PostgreSQL へのリアルタイムレプリカです。
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - PostgreSQL からさまざまなデータ形式にエクスポートします。
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - PostgreSQL ドキュメントへのリンクを現在のバージョンに転送するブラウザー拡張機能です。
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - CSV と JSON を簡単に PostgreSQL にインポートできます。
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - データベースの安定性とパフォーマンスを改善するため、優先順位付きアクション一覧を提供する、簡単に導入できるオープンソースの PostgreSQL 関数です。SQL Server 向け Brent Ozar の FirstResponderKit に直接着想を得ています。
* [PGInsight](http://pginsight.io/) - PostgreSQL データベースの内部を簡単に深く調査できる CLI ツールです。
* [pg_insights](https://github.com/lob/pg_insights) - Postgres データベースの健全性を監視するための便利な SQL です。
* [pgloader](https://github.com/dimitri/pgloader) - COPY ストリーミングプロトコルを使い、読み取りと書き込みを別々のスレッドで行って PostgreSQL にデータをロードします。
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - ベアメタル、仮想マシン、Kubernetes にデプロイできる Postgres メトリクスの収集・可視化ツールです。
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - 接続プーリング、レプリケーション、負荷分散、接続数超過の制限を提供するミドルウェアです。
* [pgspot](https://github.com/timescale/pgspot) - PostgreSQL 拡張機能のスクリプトに潜む脆弱性を検出します。
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - 低価格な AWS Spot VM 上でステートフルな Postgres を実行するデーモンです。
* [pgsync](https://github.com/ankane/pgsync) - PostgreSQL のデータをローカルマシンに同期するツールです。
* [PGXN client](https://github.com/pgxn/pgxnclient) - PostgreSQL Extension Network を操作するためのコマンドラインツールです。
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQL データベースのメトリクスを抽出して提供するツールです。
* [PostgREST](https://github.com/PostgREST/postgrest) - 既存の PostgreSQL データベースから完全な RESTful API を提供します。
* [pREST](https://github.com/prest/prest) - PostgreSQL データベースから RESTful API を提供します（Golang）。
* [PostGraphile](https://github.com/graphile/postgraphile) - PostgreSQL データベースの GraphQL API または GraphQL スキーマを即座に生成します。
* [yoke](https://github.com/nanopack/yoke) - 自動フェイルオーバーとクラスターの自動復旧に対応する PostgreSQL 高可用性クラスターです。
* [pglistend](https://github.com/kabirbaidhya/pglistend) - `node-postgres` を基盤に構築された、軽量な PostgreSQL `LISTEN`/`NOTIFY` デーモンです。
* [ZSON](https://github.com/postgrespro/zson) - 透過的な JSONB 圧縮を実現する PostgreSQL 拡張機能です。
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - PostgreSQL 用の高速データロードユーティリティです。
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - PostgreSQL のコードベースを管理し、バージョン管理システムを使いやすくします。
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 用の高度なジョブスケジューラーです。
* [sqitch](https://github.com/sqitchers/sqitch) - バージョン管理されたスキーマのデプロイを管理するツールです。
* [pgmigrate](https://github.com/yandex/pgmigrate) - Yandex が開発した、スキーママイグレーションを進化させる CLI ツールです。
* [pgcmp](https://github.com/cbbrowne/pgcmp) - 一部の永続的な差異を許容してデータベーススキーマを比較するツールです。
* [pg-differ](https://github.com/multum/pg-differ) - PostgreSQL テーブル構造の初期化・更新を簡単に行うツールで、マイグレーションの代替となります（Node.js）。
* [Qail](https://github.com/qail-io/qail) - コンパイル時のクエリ検査と組み込みのテナントスコープ設定を備えた、Rust を第一に考えた PostgreSQL 用の型付き AST パイプラインです。
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - よくある SQL のアンチパターンを自動検出します。こうしたパターンはクエリを遅くすることが多く、対処するとクエリの高速化につながります。
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Postgres データベースの状態を詳細に分析する、新世代の診断ツールです。
* [Pyrseas](https://github.com/perseas/Pyrseas) - Postgres データベーススキーマのバージョン管理ツールです。
* [ScaffoldHub.io](https://scaffoldhub.io) - Angular、Vue、React を使ったフルスタック PostgreSQL アプリを生成します（商用ソフトウェア）。
* [planter](https://github.com/achiku/planter) - PostgreSQL テーブルから PlantUML の ER 図テキスト記述を生成します。
* [pgroll](https://github.com/xataio/pgroll) - Postgres のダウンタイムゼロで可逆的なスキーママイグレーションを実現します。
* [RegreSQL](https://github.com/dimitri/regresql) - SQL クエリ用の回帰テストスイートを構築、保守、実行するツールです。
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Diesel と SQLx における危険な Postgres マイグレーションパターンを検出する lint ツールです。

<a id="language-bindings"></a>

### 言語バインディング
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

### PaaS *(サービスとしての PostgreSQL)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - AWS、Azure、DigitalOcean、Google Cloud、UpCloud で利用できる PostgreSQL サービスです。料金はシングルノードの月額 19 ドルから大規模な高可用性構成まで幅広く、2 週間の無料トライアルがあります。
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service（RDS）for PostgreSQL です。
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - 完全マネージド型で、エンタープライズ対応のコミュニティ PostgreSQL データベースサービスです。組み込みの HA、柔軟なスケーリング、Azure エコシステムとのネイティブ統合を提供します。
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres の専門家によるフルマネージド Postgres です。Amazon AWS、Google GCP、Microsoft Azure の主要クラウドプロバイダーで利用できます。完全なスーパーユーザー権限を備え、ベンダーロックインはありません。
* [Database Labs](https://www.databaselabs.io) - 月額 20 ドルから、本番環境ですぐに使えるクラウド PostgreSQL サーバーを数分で利用できます。バックアップ、監視、パッチ適用、24 時間 365 日の技術サポートがすべて含まれています。
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - フルマネージド PostgreSQL データベースです。無料プランはありません。月額 15 ドルから利用でき、ポイントインタイムリカバリー対応の日次バックアップと、自動フェイルオーバー対応のスタンバイノードを備えています。
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Google Cloud Platform 上で PostgreSQL リレーショナルデータベースを簡単にセットアップ、保守、管理、運用できる、フルマネージドデータベースサービスです。
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - 無料から大規模プランまであり、PostgreSQL の専門家が運用します。アプリケーションを Heroku 上で動かす必要はありません。無料プランには 10,000 行、20 接続、最大 2 つのバックアップが含まれ、PostGIS にも対応しています。
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - 高可用性、スケーラブルで安全な PostgreSQL です。ポイントインタイムリカバリー対応の日次バックアップを備え、ベンダーロックインがなく、受信・送信トラフィックは無料です。
* [Render Managed PostgreSQL](https://render.com/docs/databases) - 安全で信頼性が高く、運用負担のないフルマネージド PostgreSQL です。すべてのプランに保存時の暗号化、自動バックアップ、拡張可能な SSD ストレージが含まれます。プランは月額 7 ドル（RAM 256MB、ストレージ 1GB）からで、最初の 90 日間は無料です。
* [Rivestack](https://rivestack.io) - pgvector をプリインストールし、ベクトル検索向けに HNSW を調整したマネージド PostgreSQL です。無料枠（2 GB、クレジットカード不要）があり、専有インスタンスは月額 15 ドルからの定額料金で、EU と米国のリージョンを利用できます。
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - 高可用性、専用サーバー、スーパーユーザー制御を備えたフルマネージド PostgreSQL ホスティングです。マルチクラウド対応の主要な Amazon RDS 代替サービスです。
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - EU でホストされる、HA、スケーリング、自動バックアップに対応したフルマネージド PostgreSQL データベースです。月額 10 ユーロから利用できます。
* [Supabase](https://www.supabase.com) - 読み取りレプリカ、ポイントインタイムリカバリー、サポートパッケージ、ブラウザーベース GUI、充実した無料枠を備えたフルマネージド Postgres です。
* [Neon](https://neon.tech) - フルマネージドのサーバーレス PostgreSQL です。ストレージとコンピューティングを分離し、サーバーレス、ブランチ作成、容量無制限のストレージなど、モダンな開発者向け機能を提供します。
* [Nile](https://www.thenile.dev/) - フルマネージド PostgreSQL です。Nile はストレージとコンピューティングを分離し、テナントを仮想化することで、マルチテナント AI アプリケーションを高速かつ安全に、無制限にスケールして提供できます。無料枠ではデータベースを無制限に利用できます。
* [PlanetScale](https://planetscale.com/postgres) - 最新のクラウドインフラ上に構築された、高可用性のフルマネージド PostgreSQL データベースクラスターです。
* [Vela](https://vela.run) - 最新の AI アプリ向けに構築された、Postgres ベースのバックエンド・アズ・ア・サービスです。データベースのブランチとクローンを即座に作成でき、本番環境に近いテスト環境とサーバーレススケーリングを提供します。
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - オランダでホストされる、マルチ AZ と自動バックアップに対応したフルマネージド PostgreSQL データベースです。

<a id="docker-images"></a>

### Docker イメージ
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Citus 拡張機能を含む Citus 公式イメージです。公式 Postgres コンテナをベースにしています。
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - Postgres 9 上の PostGIS 2.3 です。公式 Postgres コンテナをベースにしています。
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB は検索と分析のための Postgres です。pg_search 拡張機能を備えた公式 Postgres コンテナをベースにしています。
* [pglayers](https://github.com/pglayers/pglayers) - 組み合わせ可能な Docker レイヤーとして提供される、ビルド済み PostgreSQL 拡張機能です。50 種類以上の拡張機能を備え、すぐに使える統合イメージ（full、Azure 互換）を利用できます。
* [postgres](https://hub.docker.com/_/postgres/) - Docker 公式の Postgres コンテナです。

<a id="kubernetes"></a>

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - 高可用性 Postgres クラスターから本格的なデータベース・アズ・ア・サービスまで、本番環境向け PostgreSQL を Kubernetes で実現します。
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - OpenShift Container Platform 上のエンタープライズグレード PostgreSQL です（商用ソフトウェア）。
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - 1 つ以上の PostgreSql インスタンスクラスターをデプロイし、データベースのレプリケーション、フェイルオーバー、バックアップを管理できる Kubernetes オペレーターです。
* [StackGres Operator](https://github.com/ongres/stackgres/) - Kubernetes 上のフルスタック PostgreSQL です。
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Kubernetes 上で動作する PostgreSQL クラスターを作成・管理します。
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Kubernetes 環境の PostgreSQL データベースをシームレスに管理するための包括的なプラットフォームです。
* [KubeDB operator](https://kubedb.com/) - Kubernetes 上で本番環境グレードのデータベースを実行します（商用ソフトウェア）。
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Crunchy Data オペレーターをベースにした PostgreSQL 用 Percona Operator です。
* [Percona Everest Operator](https://github.com/percona/everest-operator) - MySQL、MongoDB、PostgreSQL データベースのライフサイクルを管理する Kubernetes Operator です。内部では各データベース用の Percona Kubernetes Operator を活用し、3 種類すべてを一元管理する統合 API と単一の管理画面を提供します。

<a id="resources"></a>

## リソース

<a id="tutorials"></a>

### チュートリアル
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - wal-e を使って PostgreSQL の継続的アーカイブを設定する方法を解説するチュートリアルです。
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - PostgreSQL Wiki の運用チートシートです。
* [PG Casts](https://www.pgcasts.com) - Hashrocket による、無料の PostgreSQL 週刊スクリーンキャストです。
* [Postgres Guide](http://postgresguide.com/) - 初心者から経験者までが具体的なヒントを見つけ、PostgreSQL で利用できるツールを調べるためのガイドです。
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - ロール、権限付与、所有権、メンバーシップ、ポリシー、デフォルト権限を一体として捉えるための完全なメンタルモデルです。PDF と約 60 分の動画で構成されています。
* [PostgreSQL Exercises](https://pgexercises.com/) - 演習を通じて PostgreSQL を簡単に学べるサイトです。
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - PostgreSQL に関する非常に充実したチュートリアル集です。
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Postgres のサンプルスキーマ集です。
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - PostgreSQL でよく使われるコマンド集です。
* [pg-utils](https://github.com/dataegret/pg-utils) - Data Egret による便利な DBA ツールです。
* [pagila](https://github.com/xzilla/pagila) - Pagila、Postgres のサンプルデータベースです。
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - ウィンドウ関数、CTE、UPSERT、JSON クエリ、配列操作など PostgreSQL 固有の構文を網羅する、包括的な SQL 構文リファレンスです。

<a id="blogs"></a>

### ブログ
* [Planet PostgreSQL](https://planet.postgresql.org/) - PostgreSQL のブログを集約するサービスです。
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - PostgreSQL の便利な機能、ヒント、テクニックを紹介する記事集です。
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Josh Berkus のブログです。
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Hubert Lubaczewski のブログです。
* [Metis Blog](https://www.metisdata.io/blog) - PostgreSQL、SQL データベース、パフォーマンス、チューニングに関する記事集です。
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - PIGSTY の作者によるブログで、PostgreSQL（およびデータベースやクラウドインフラ）についての洞察に富む記事を掲載しています。
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - 主に分析に焦点を当てた、BigData Boutique チームのブログです。

### 書籍
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Hironobu Suzuki による無料の電子書籍です。
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Egor Rogov による無料の電子書籍です。
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - チューニング、接続プーリング、パーティショニング、高可用性を扱う、本番環境で Postgres をスケールするための実践ガイドです。


<a id="documentation"></a>

### ドキュメント
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - ユーザードキュメント、ハウツー、ヒントやテクニックです。
* [pgPedia](https://pgpedia.info/) - PostgreSQL に関する事柄をまとめた百科事典です。
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - AI エージェントを使って PostgreSQL コードベース内のすべてのシンボルに関するドキュメントを生成することを目指すプロジェクトです。

<a id="newsletters"></a>

### ニュースレター

* [Postgres Weekly](https://postgresweekly.com/) - PostgreSQL に関連する記事、ニュース、リポジトリを紹介する週刊ニュースレターです。
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Postgres のパフォーマンスに関する記事や動画を紹介する月刊ニュースレターです。
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - pgsql-hackers メーリングリストの週刊ダイジェストです。活発なスレッドの一覧、スレッドの要約などを掲載します。

### ポッドキャスト
* [PostgresFM](https://postgres.fm/) - Postgres の話題を扱う週刊ディスカッションです。
* [Scaling Postgres](https://www.scalingpostgres.com/) - PostgreSQL 関連コンテンツを毎週まとめて紹介します。
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Postgres 関係者への月刊インタビューです。

<a id="videos"></a>

### 動画
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Citus 関連の動画です。
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - EnterpriseDB 関連の動画です。
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - カンファレンスの動画です。
* [Scaling Postgres](https://www.scalingpostgres.com/) - Creston Jamison による Postgres 動画ブログシリーズです。
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Postgres の講演、ハッキングセッション、インタビュー、ポッドキャストのエピソードを掲載しています。

<a id="community"></a>

### コミュニティ
* [Mailing lists](https://www.postgresql.org/list/) - サポートや情報発信などを目的とする Postgres 公式メーリングリストです。Postgres コミュニティの主要なコミュニケーション手段の 1 つです。
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - 12,000 人以上のユーザーが参加する PostgreSQL 利用者の Reddit コミュニティです。
* [Slack](https://pgtreats.info/slack-invite) - 2 万人以上が参加する Postgres の Slack ワークスペースです。
* Telegram - PostgreSQL に関する各言語のグループです：[ロシア語](https://t.me/pgsql) 4,200 人以上、[ブラジルポルトガル語](https://t.me/postgresqlbr) 2,300 人以上、[インドネシア語](https://t.me/postgresql_id) 約 1,000 人、[英語](https://t.me/postgreschat) 750 人以上
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Freenode で最も人気のある Postgres の IRC チャンネルで、1,000 人以上のユーザーが参加しています。
* [Discord](https://discord.gg/bW2hsax8We) - 6,000 人以上が参加する Postgres の Discord サーバーです。

<a id="roadmaps"></a>

### ロードマップ
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - PostgreSQL の手順を追ったガイドを提供するロードマップです。

<a id="external-lists"></a>

### 外部リスト
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Wikipedia に掲載されているデータベース管理ツールの比較です。
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - PostgreSQL GUI ツールに関するコミュニティガイドです。
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Foreign Data Wrapper（外部データラッパー）の一覧です。
