# データベースツールの厳選集 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> データベースツールのコミュニティ駆動リスト

ここでは、DBA、DevOps、デベロッパー、単なるmortalsのデータベースと連携を簡素化する、素晴らしい便利で素晴らしい実験ツールに関する情報を収集します。

自分のdb-toolsやお気に入りのサードパーティのdb-toolsに関する情報を追加してください。

更新情報 `awesome-db-tools` データベース/ツール/ SQL に関する考え/ニュースは、 [@GraminMaksim](https://twitter.com/GraminMaksim)

## コンテンツ
- [ツイート](#ide)
- [ログイン](#gui)
- [お問い合わせ](#cli)
- [スキーマ](#schema)
  - [変更点](#changes)
  - [コード生成](#code-generation)
  - [図形](#diagrams)
  - [ドキュメント](#documentations)
  - [デザイン](#design)
  - [サンプル](#samples)
- [APIサービス](#api)
- [アプリケーションプラットフォーム](#application-platforms)
- [バックアップ](#backup)
- [クローニング](#cloning)
- [モニタリング/統計/パフォーマンス](#monitoringstatisticsperformance)
  - [プロメテウス](#prometheus)
  - [ザビックス](#zabbix)
- [テスト](#testing)
- [HA/フェイルオーバー/シャーリング](#hafailoversharding)
- [クベルネ](#kubernetes)
- [構成 調整](#configuration-tuning)
- [デベロッパー](#devops)
- [レポート](#reporting)
- [ディストリビューター](#distributions)
- [セキュリティ](#security)
- [ログイン](#sql)
  - [アナライザー](#analyzers)
  - [コードジェネレーター](#code-generators)
  - [エクステンション](#extensions)
  - [フレームワーク](#frameworks)
  - [フォーマット](#formatters)
  - [ゲーム](#games)
  - [パサー](#parsers)
  - [ユーバーSQL](#über-sql)
  - [言語サーバー プロトコル](#language-server-protocol)
  - [トレーニング](#learning)
  - [プラン](#plan)
  - [スクリプト](#scripts)
- [データデータ](#data)
  - [カタログ](#catalog)
  - [ラインナップ](#lineage) 
  - [ジェネレーション/メイキング/サブセッティング](#generationmaskingsubsetting)
  - [データプロファイラ](#data-profilers)
  - [レプリケーション](#replication) 
  - [比較する](#compare) 
- [ペーパー](#papers)
- [機械学習](#machine-learning)

## ツイート
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - データベース管理、制御および開発のためのPremier多目的管理ツール クーポン。
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - データベース開発者、DBA、アナリスト向け生産性向上ソフトウェア ▷ .
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - 強力なスクリプトとグリッド機能を備えたアナリストおよび分析エンジニア向けのモダンIDE を 管理します。
- [Database .net](http://fishcodelib.com/Database.htm) - 20以上のデータベースをサポートする複数のデータベース管理ツール。
- [Database Workbench](https://www.upscene.com/database_workbench/) - Oracle、SQL Server、PostgreSQL、MySQL、MariaDB、Firebird、InterBase、SQLite、NexusDB などのデータベース設計、開発、テストのための完全なIDE。
- [DataGrip](https://www.jetbrains.com/datagrip) - データベースのクロスプラットフォーム IDE と、JetBrains で SQL を 管理します。
- [DataStation](https://github.com/multiprocessio/datastation) - すべてのデータベース、ファイル、およびAPIからデータを簡単にクエリ、スクリプト、および視覚化できます。
- [DBeaver](https://github.com/dbeaver/dbeaver) - ユニバーサルデータベースマネージャとSQLクライアントの無料。
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - MySQL、MariaDB、SQL Server、Oracle、PostgreSQLデータベース、および各種クラウドサービスのDB開発、設計、管理、および管理のためのマルチデータベースソリューション。
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - MySQLとMariaDBデータベースの開発、管理、管理用のUniversal IDE。
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - Oracle管理、管理、および開発用の強力なIDE。
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - データベースとオブジェクトの管理と開発のためのGUIツール。
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - SQL Serverの開発、管理、管理、データ分析、およびレポート作成のための強力な統合開発環境。
- [DBHawk](https://www.datasparc.com/) - Datasparcは、データベースのセキュリティ、データベース管理、データベース管理、データ分析を提供しています。
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - モダン(JavaScript/Electronフレームワーク)、MongoDB用のオープンソースIDE。 MongoDBデータベースの開発、管理、パフォーマンスチューニングをサポートする機能があります。
- [IBExpert](http://www.ibexpert.net/ibe) - Firebird と InterBase の包括的な GUI ツール
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Delphi で書かれている MySQL、MSSQL、PostgreSQL を管理するための軽量なクライアント。
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Windows / macOS / Linuxで人気のあるデータベース(SQLite / MySQL / PostgreSQL / など)、サポートテーブルの設計、クエリ、モデル、同期、エクスポート/インポートなどのAI搭載SQLクライアントと管理ツールは、快適で楽しい開発者に重点を置いています。
- [KeepTool](https://keeptool.com) - Oracle データベースの開発者、管理者、および高度なアプリケーション ユーザー向けのツールのプロフェッショナルなスイートです。
- [MySQL Workbench](https://www.mysql.com/products/workbench) - データベースの建築家、開発者、およびDBAsのための統一された視覚用具。
- [Navicat](https://www.navicat.com/en/products#navicat) - MySQL、MariaDB、SQL Server、Oracle、PostgreSQL、SQLiteデータベースを単一のアプリケーションから同時に接続できるデータベース開発ツール。
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Oracleデータベースの開発と管理をシンプルにし、従来のクラウド展開とクラウド展開の両方で簡略化した統合開発環境。
- [pgAdmin](https://www.pgadmin.org) - 最も人気があり、PostgreSQL 用の豊富なオープンソース管理と開発プラットフォーム、世界で最も先進的なオープンソースデータベースを備えています。
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - pgAdmin3の長期サポート。
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - Oracleデータベースの保存されたプログラム単位の開発で特にターゲットとするIDE。
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - PostgreSQL の完全で強力なデータベース管理、管理者および開発ツール。
- [Querybook](https://github.com/pinterest/querybook) - PinterestのオープンソースのビッグデータクエリUI、コロケーションされたテーブルメタデータとシンプルなノートIDEインターフェイスを組み合わせた。
- [Slashbase](https://github.com/slashbaseide/slashbase) - データベース用のオープンソースのコラボレーションIDE。 データベースに接続し、データをブラウズし、SQLコマンドの束を実行したり、チームとSQLクエリを共有したり、ブラウザから右に移動します。
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - SQL Server および Azure SQL データベースの SQL インフラストラクチャを管理するための統合環境。
- [Toad](https://www.quest.com/toad/) - 開発者、管理者、データアナリスト向けのプレミアデータベースソリューション。 複雑なデータベースの変更を単一のデータベース管理ツールで管理できます。
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - MySQL と PostgreSQL の PostgreSQL の PostgreSQL の PostgreSQL のデータベース開発ツール を シンプルに MySQL と PostgreSQL の PostgreSQL の PostgreSQL の PostgreSQL の PostgreSQL の PostgreSQL の 開発ツール で MySQL と PostgreSQL の の PostgreSQL の の PostgreSQL の の の PostgreSQL の データベース開発ツール を
- [TOra](https://github.com/tora-tool/tora) - Oracle、MySQL、PostgreSQL dbs 用のオープンソース SQL IDE を開きます。
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Valentina DB、MySQL、MariaDB、PostgreSQL、SQLiteデータベースを自由に作成、管理、クエリ、探索できます。
- [WebDB](https://webdb.app) - 効率的なデータベースIDE。 サーバーディスカバリー、ERD、データジェネレータ、AI、NoSQLストラクチャーマネージャ、データベースの検証など、さまざまな機能を備えています。


## ログイン
- [Adminer](https://github.com/vrana/adminer) - 単一のPHPファイルでデータベース管理。
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - フリーオープンソースのRedisマネージャー。 Mac、Linux、Windows、Homebrew、Snap、Wingetなどでご利用いただけます。
- [Antares SQL](https://github.com/antares-sql/antares) - UXに焦点を合わせた現代的で、速く、生産性によって運転されるSQLの顧客。 Mac、Linux、Windowsでご利用いただけます。
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Windows、macOS、LinuxからSQL Server、PostgreSQL、Azure SQL DB、SQL DWと連携できるデータ管理ツール。
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - オープンソースSQLエディタとデータベースマネージャは、ミッションステートメントのプライバシーのコミットメントを伴います。
- [Clidey WhoDB](https://github.com/clidey/whodb) - すべてのSQL、NoSQL、キャッシュ、およびキューのための次世代UXの軽量なデータベースエクスプローラ。
- [DbGate](https://github.com/dbgate/dbgate) - MySQL、PostgreSQL、SQL Server、MongoDB、SQLiteなどのデータベースマネージャ。 Windows、Linux、Mac、またはWebアプリケーションとして実行します。
- [DB Lens](https://github.com/dblens/app) - オープンソースPostgreSQL GUI - 自動ER図、内部DBインサイト、ディスクユーティリティ、パフォーマンスメトリック、インデックス使用量、シーケンシャルスキャン数など。
- [DbVisualizer](https://www.dbvis.com) - 開発者、DBA、アナリスト向けのユニバーサルデータベースツール。
- [JackDB](https://www.jackdb.com) - どこに住んでいるかに関係なく、すべてのデータにSQLアクセスを指示します。
- [Jailer](https://github.com/Wisser/Jailer) - データベースのサブセットおよび関連データ閲覧ツール/クライアント。
- [Malewicz](https://github.com/mgramin/malewicz) - しかし、DBスキーマの探索とパフォーマンス分析のための別のWebクライアント, しかし、もともとハッキングと拡張のために特別に作成.
- [MissionKontrol](https://www.missionkontrol.io) - 現代のドラッグ&ドロップ管理者パネル/クライアント、非技術的なユーザーのための完全なユーザー権限。
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - MySQL、MariaDB、Tarantoolの場合。 Linux 用に開発されたが、Windows 上で実行できます。
- [OmniDB](https://github.com/OmniDB/OmniDB) - データベース管理のためのWebツール。
- [Pgweb](https://github.com/sosedoff/pgweb) - PostgreSQL 用の Web ベースのデータベース ブラウザー、Go で書かれ、macOS、Linux および Windows マシンで動作します。
- [phpLiteAdmin](https://www.phpliteadmin.org) - SQLite3 と SQLite2 のサポートで PHP で書かれている Web ベースの SQLite データベース管理ツール。
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQLとMariaDBのWebインターフェイス。
- [psequel](http://www.psequel.com) - 一般的なPostgreSQLタスクを素早く実行するためのクリーンでシンプルなインターフェイスを提供します。
- [PopSQL](https://popsql.com) - チームのためのモダンでコラボレーションなSQLエディタ。
- [Postico](https://eggerapps.at/postico) - Mac用のモダンPostgreSQLクライアント。
- [Robo 3T](https://github.com/Studio3T/robomongo) - シェル中心のクロスプラットフォームMongoDB管理ツール。
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - macOS の MySQL/MariaDB データベース管理
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - MySQLとMariaDBデータベースを扱うための高速で使いやすいMacデータベース管理アプリケーション。
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - グラフィカルインターフェイスは、すべてのSQLite機能をサポートしています。
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Go で書かれている SQLite データベースを表示するための TUI。
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - WebベースのSQLエディタは、独自のプライベートクラウドで動作します。
- [SQLPro](https://www.macpostgresclient.com) - macOSのシンプルで強力なPostgreSQLマネージャー。
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Java で書かれているグラフィカルな SQL クライアントで、JDBC 準拠データベースの構造を表示したり、テーブル内のデータを閲覧したり、SQL コマンドを発行したりすることができます。
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - VSCode のデータベース管理
- [SQLyog](https://www.webyog.com/product/sqlyog) - MySQL GUI の使用が最も完全で簡単です。
- [Tabix](https://github.com/tabixio/tabix) - クリックハウスのSQLエディタ&オープンソースのシンプルなビジネスインテリジェンス。
- [TablePlus](https://github.com/TablePlus/TablePlus) - リレーショナルデータベース用のモダン、ネイティブ、フレンドリーなGUIツール:MySQL、PostgreSQL、SQLiteなど。
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web 管理 GUI - PostgreSQL のデータベースをどこからでも利用し、リッチで超高速な AJAX Web インターフェイスを使用します。
- [Query.me](https://query.me) - Notebook 形式の連携SQLエディタ。 JINJAを使用してクエリ結果を参照し、データを視覚化し、実行とエクスポートをスケジュールしてみましょう。


## お問い合わせ
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - IPython または IPython Notebook 内の SQL コマンドを発行するためのデータベースに接続します。
- [iredis](https://github.com/laixintao/iredis) - AutoCompletionとSyntax HighlightingによるRedisのCli。
- [pgcenter](https://github.com/lesovsky/pgcenter) - PostgreSQL のトップのような管理者ツール。
- [pg_activity](https://github.com/julmon/pg_activity) - PostgreSQL サーバーのアクティビティ監視のためのトップのようなアプリケーション。
- [pg_top](https://github.com/markwkm/pg_top) - PostgreSQL のトップ
- [pspg](https://github.com/okbob/pspg) - PostgreSQLのPager。
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - 危険なPostgreSQLマイグレーションパターンのLinter。 PostgreSQL SQLファイルとシームレスに連携し、ディーゼルとSQLxを使用してプロジェクトをネイティブに統合します。
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line(SQLcl)は、Oracleデータベース用の無料のコマンドラインインターフェースです。
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - SQLiteデータベースファイルを操作するためのCLIツール - データの入力、クエリの実行、インデックスの作成、全文検索の構成など。
- [SQLLine](https://github.com/julianhyde/sqlline) - JDBC経由で関連データベースにSQLを発行するためのコマンドラインシェル。
- [usql](https://github.com/xo/usql) - PostgreSQL、MySQL、Oracle Database、SQLite3、Microsoft SQL Server、およびNoSQLおよび非関連データベースを含む他の多くのデータベース用のユニバーサルコマンドラインインターフェイス。

### ライブラリ
- [athenacli](https://github.com/dbcli/athenacli) - 自動補完と構文強調を行うことができるAWS Athenaサービス用のCLIツール。
- [litecli](https://github.com/dbcli/litecli) - 自動補完と構文強調による SQLite データベースの CLI。
- [mssql-cli](https://github.com/dbcli/mssql-cli) - SQL Server のコマンドラインクライアントで、自動補完と構文のハイライトを行います。
- [mycli](https://github.com/dbcli/mycli) - AutoCompletionとSyntax HighlightingでMySQL用のターミナルクライアント。
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL CLI は、自動補完と構文のハイライト機能を備えています。
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI は、自動補完と構文ハイライト機能を備えています。


## スキーマ

### 変更点
- [2bass](https://github.com/CourseOrchestra/2bass) - 意図した DDL スクリプトの概念を利用するデータベース設定-as-code ツール。
- [Atlas](https://github.com/ariga/atlas) - データベースのスキーマの変更を点検し、適用して下さい。
- [Bytebase](https://github.com/bytebase/bytebase) - ウェブベース、ゼロコンフィグ、依存関係のないデータベーススキーマの変更と、チームのためのバージョン管理ツール。
- [flyway](https://github.com/flyway/flyway) - データベースの移行ツール。
- [gh-ost](https://github.com/github/gh-ost) - MySQL のオンラインスキーマのマイグレーション。
- [liquibase](https://github.com/liquibase/liquibase) - データベースのスキーマの変更を追跡、管理および適用するためのデータベース独立ライブラリ。
- [migra](https://github.com/djrobstep/migra) - PostgreSQL スキーマの diff と同様。
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - PostgreSQL専用のNode.jsデータベースマイグレーション管理。 (CockroachDBなど、SQL規格に準拠した他のDBにも使用できます。)
- [pg-osc](https://github.com/shayonj/pg-osc) - PostgreSQLのダウンタイムスキーマの変更とバックフィルゼロを作るためのEasy CLIツール。
- [Prisma Migrate](https://github.com/prisma/migrate) - データベースのスキーマを記述するために宣言的なデータモデリングの構文を使用する決定的なデータベーススキーマのマイグレーションツール。
- [Pyrseas](https://github.com/perseas/Pyrseas) - PostgreSQL データベーススキーマをYAMLとして記述するユーティリティを提供します。
- [Reshape](https://github.com/fabianlindfors/reshape) - 使いやすい、postgres 用のゼロダウンタイムスキーママイグレーションツール。
- [SchemaHero](https://github.com/schemahero/schemahero) - 説明データベーススキーマ管理(データベーススキーマのgitops)のKubernetes演算子。
- [Skeema](https://github.com/skeema/skeema) - MySQL と MariaDB の純粋な SQL スキーマ管理システムを拡張し、シャーディングと外部のオンラインスキーマの変更ツールをサポート。
- [Sqitch](https://github.com/sqitchers/sqitch) - フレームワークフリー開発と信頼できる展開のための拡張可能なデータベースネイティブ変更管理。
- [sqldef](https://github.com/k0kubun/sqldef) - MySQL、PostgreSQL などの Idempotent スキーマ管理
- [yuniql](https://github.com/rdagumampan/yuniql) - しかし、ネイティブの.NETコア3.0 +で作られた別のスキーマバージョンと移行ツールは、うまくいけば良い。

### コード生成
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - 表データから SQL DDL (データ定義言語) を継承します。
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Oracleスキーマをエクスポートするためのコマンドラインutilは、ddl initスクリプトを設定し、望ましくない情報をフィルタリングし、異なるファイルでDDLを分離し、かなりのフォーマット出力をフォーマットします。

### 図形
- [Azimutt](https://github.com/azimuttapp/azimutt) - Entity 関係図 (ERD) のビジュアライゼーションツールで、さまざまなフィルタと入力により、データベーススキーマを理解できます。
- [ChartDB](https://github.com/chartdb/chartdb) - 無料のオープンソースデータベース図エディタ、視覚化、単一のクエリでDBを設計します。
- [DrawDB](https://github.com/drawdb-io/drawdb) - 無料、シンプルで直感的なオンラインデータベース設計ツールとSQLジェネレーター。 
- [DrawSQL](https://drawsql.app) - SQLインポート、AI生成、リアルタイムチームコラボレーションによるオンラインデータベーススキーマダイアリングエディタ。
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - エンティティ・リレーション・ダイアグラムの生成ツール。
- [ERD Lab](https://www.erdlab.io/) - 開発者のために作られた無料のクラウドベースのエンティティティ・リレーション・ダイアグラム(ERD)ツール。
- [Liam ERD](https://github.com/liam-hq/liam) - データベースとORMから美しく、読みやすいエンティティティ・リレーション・ダイアグラムを生成するオープンソース・ツール。
- [QuickDBD](https://www.quickdatabasediagrams.com/) - データベース図を素早く描画するシンプルなオンラインツール。

### ドキュメント
- [dbdocs](https://dbdocs.io/) - DSLコードを使用してWebベースのデータベースのドキュメントを作成します。
- [DBML](https://github.com/holistics/dbml) - データベースのMarkupの言語は、データベースの構造を定義し、文書化するように設計しました。
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - 無料のデータベーススキーマの発見と理解ツール。
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Entity 関係図を含む HTML ドキュメントにデータベースを生成します。
- [tbls](https://github.com/k1LoW/tbls) - CI-Friendlyは、Goで書かれたデータベースを文書化するためのツールです。

### デザイン
- [Database Design](https://github.com/alextanhongpin/database-design) - 堅牢なデータベーススキーマの設計に役立つヒント。
- [DBDiagram](https://dbdiagram.io) - コードを書くだけでER図を描画する自由で簡単なツール。
- [DbSchema](https://dbschema.com/) - アウト・オブ・ザ・ボックスのスキーマ管理、スキーマのドキュメント、チームの設計、および複数のデータベース上の展開のためのユニバーサル・データベース・デザイナー。 DbSchema は、クエリの作成と実行、データを探索し、データを生成し、レポートを作成するためのツールを提供しています。
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - 高品質なデータモデル向けの使いやすいデータベースモデリングソフトウェア。 データモデラーやデータアーキテクチャの完全データモデリングソリューションです。
- [Moon Modeler](https://www.datensen.com) - noSQLとリレーショナルデータベースの両方のデータモデリングツール。 Windows、Linux、macOSでご利用いただけます。
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - 高品質の概念、論理的および物理的なデータ モデルを造るのを助ける強力で費用効果が大きいデータベース設計用具。
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - 生産性を高め、データモデリングタスクを簡素化する無料のグラフィカルツール。
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - PostgreSQL用に設計されたデータモデリングツール。
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - オンラインSQLダイアグラムツール。

### サンプル
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Oracle データベースのサンプルスキーマ。


## APIサービス
データをビルドする API
- [Datasette](https://github.com/simonw/datasette) - データの探索と公開のためのツール。
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - モバイル、Web、およびIoTアプリケーション用のオープンソースREST APIバックエンド。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - 複数のデータソースを単一の GraphQL API に変換します。
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - PostgreSQL 上で高速で即時リアルタイムな GraphQL API をブレイズし、細かいアクセス制御を行い、データベースイベントで webhook をトリガーします。
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - REST API は、JDBC がバックアップしたデータベース、Java で書かれた PostgREST クローンです。
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - ミドル層Javaアプリケーション、ORDSはHTTP(S)動詞(GET、POST、PUT、DELETEなど)をデータベース取引にマップし、JSONを使用してフォーマットされた結果を返します。
- [Prisma](https://github.com/prismagraphql/prisma) - データベースをリアルタイムの GraphQL API に変えます。
- [PostGraphile](https://github.com/graphile/postgraphile) - 既存のPostgreSQLデータベースでPostGraphileを指し、グラフQL APIサーバーを即座にスピンアップ。
- [PostgREST](https://github.com/PostgREST/postgrest) - PostgreSQLデータベースのREST API。
- [prest](https://github.com/prest/prest) - Go で書かれているデータベースから RESTful API を提供する方法です。
- [Remult](https://github.com/remult/remult) - エンドツーエンド型の安全なCRUDは、データベースのREST APIを経由して、細かいグラインドされたアクセス制御を実現します。
- [restSQL](https://github.com/restsql/restsql) - Java および HTTP API を使用した SQL ジェネレーターは、XML または JSON のシリアライズでシンプルな RESTful HTTP API を使用します。
- [resquel](https://github.com/formio/resquel) - SQLデータベースをREST APIに簡単に変換できます。
- [sandman2](https://github.com/jeffknupp/sandman2) - 従来のデータベースにRESTful APIサービスを自動的に生成します。
- [soul](https://github.com/thevahidal/soul) - 自動 SQLite RESTful および実時間 API サーバー。
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - テンプレート化されたSQLを記述して、データベース/データウェアハウス/データ湖からRESTful APIを自動的に公開します。

## アプリケーションプラットフォーム
アプリケーション構築のための低コードおよび非コードプラットフォーム
- [Appsmith](https://github.com/appsmithorg/appsmith) - 強力なオープンソースの低コードフレームワークで、内部アプリケーションを素早く構築できます。
- [Budibase](https://github.com/Budibase/budibase) - 内部アプリを数分で作成するためのローコードプラットフォーム。
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - ローコード内部ツール構築プラットフォーム。
- [Nhost](https://github.com/nhost/nhost) - グラフQLとオープンソースの代替。
- [Saltcorn](https://github.com/saltcorn/saltcorn) - Webデータベースアプリケーション用のソースコードビルダーをオープン。 PostgreSQL または SQLite に保存されている UI ビルダー、データ、サーバーおよびドラッグアンドドロップ UI ビルダー。
- [SQLPage](https://github.com/sqlpage/SQLPage) - 速いSQLのみのデータアプリケーションビルダー。 SQL クエリの上に UI を自動的に作成します。
- [Tooljet](https://github.com/ToolJet/ToolJet) - オープンソースのローコードプラットフォームで内部ツールを構築します。


## バックアップ
- [BaRMan](https://github.com/2ndquadrant-it/barman) - PostgreSQL のバックアップおよび復元マネージャ。
- [Databasus](https://github.com/databasus/databasus) - 外部ストレージ(ローカル、S3、FTP、Googleドライブなど)、通知(webhook、Discord、Slackなど)とチーム管理でWeb UI経由でスケジュールされたPostgreSQLバックアップのためのツール。
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - 信頼性の高いPostgreSQLバックアップと復元。
- [pgcopydb](https://github.com/dimitri/pgcopydb) - PostgreSQL データベースを対象のPostgreSQLサーバーにコピーする(pg)_ダンプ | ツイート_ステロイドで復元).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - PostgreSQLのバックアップおよびリカバリマネージャ。
- [Portabase](https://github.com/Portabase/portabase) - PostgreSQLのバックアップと復元のためのエージェントベースのプラットフォームは、分散型の実行と一元化されたオーケストレーションで行います。 

## クローニング
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - PostgreSQL が開発プロセスをスケールアップする瞬間薄いクローニング。
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL のクローンスキーマユーティリティは、データベースの外に出なくても使用できます。
- [Spawn](https://spawn.cc/) - 開発とCIのためのインスタントデータベースコピーを作成するクラウドサービス。 ローカル db がインストールされていない、任意の保存ポイントへの即時回復、各機能ブランチまたはテストのための分離されたコピー。 データベースサイズに関係なく即座にプロビジョニング。


## モニタリング/統計/パフォーマンス
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Oracle および PostgreSQL DB 内のアクティブなセッション履歴データのグラフィカルなビューを提供します。
- [Metis](https://www.metisdata.io/product/troubleshooting) - SQL データベースの保守性とパフォーマンスチューニングを提供します。
- [Monyog](https://www.webyog.com/product/monyog) - 無能かつ費用対効果の高いMySQLモニタリングツール。
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - 収集、InfluxDB および Grafana を使用して Linux のパフォーマンスで SQL Server を監視します。
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - 安全、簡単で、エージェントレスリモートサーバー監視ツールは、強力な機能が搭載され、監視を可能な限り効果的にします。
- [Percona Monitoring and Management](https://github.com/percona/pmm) - MySQLとMongoDBのパフォーマンスを管理および監視するためのオープンソースプラットフォーム。
- [pganalyze collector](https://github.com/pganalyze/collector) - PostgreSQLメトリックとログデータを収集するためのPganalyze統計コレクター。
- [pgbadger](https://github.com/dalibo/pgbadger) - 高速PostgreSQLログアナライザー。
- [pgDash](https://pgdash.io) - PostgreSQL データベースのあらゆる側面を測定し、追跡します。
- [PgHero](https://github.com/ankane/pghero) - PostgreSQLのパフォーマンスダッシュボード - 健康チェック、推奨インデックスなど。
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - 実行中のPostgreSQLサーバから情報やステータスを収集および表示します。
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - PostgreSQL クラスターのヘルスとパフォーマンスを視覚化するために、オールインワンのツール。
- [pgMustard](https://www.pgmustard.com) - PostgreSQL のユーザーインターフェイスは、計画を説明し、パフォーマンスを向上させるためのヒントを説明します。
- [pgstats](https://github.com/gleu/pgstats) - PostgreSQL の統計を収集し、CSV ファイルに保存したり、stdout に印刷したりすることもできます。
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 柔軟な自己完結PostgreSQLメトリック監視/ダッシュボードソリューション。
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQLデータベースにメトリックを抽出し、提供するためのサービス。
- [PostgreSQL Monitor](https://postgresmonitor.com) - PostgreSQLの使いやすい監視サービスで、アラート、ダッシュボード、クエリのステータス、および動的推奨事項を提供します。
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - PostgreSQLデータベースの健康を深く分析できる新世代診断ツール。
- [Promscale](https://github.com/timescale/promscale) - SQLによって動力を与えられるメトリックおよび跡のためのオープンソースの保守性バックエンド。
- [Releem](https://releem.com) - MySQLとMariaDBのパフォーマンス監視と最適化ツールは、誤構成、遅いクエリ、スキーマの問題、およびデッドロックの操作可能なインサイトと安全な自動化を提供し、手動作業をスケールで削減します。
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - PostgreSQL データベースのメトリックを提供

### プロメテウス
- [pgSCV](https://github.com/weaponry/pgscv) - PostgreSQL および PostgreSQL 関連のサービスのメトリックス輸出者。
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQL サーバメトリックの Prometheus エクスポート
- [pg_exporter](https://github.com/Vonng/pg_exporter) - PostgreSQLとPgbouncer用の完全にカスタマイズ可能なPrometheusの輸出業者は、細かい実行制御を行います。

### ザビックス
- [Mamonsu](https://github.com/postgrespro/mamonsu) - PostgreSQL の監視エージェント
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Zabbix Enterprise Monitorと連携して、Oracleデータベースの監視、パフォーマンス、可用性レポート、測定、およびサーバーのパフォーマンスメトリックを提供します。
- [pg_monz](https://github.com/pg-monz/pg_monz) - これはPostgreSQLデータベースのZabbbix監視テンプレートです。
- [Pyora](https://github.com/bicofino/Pyora) - Oracleデータベースを監視するためのPythonスクリプト。
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - RDBMS を監視するプラグインを迅速かつ柔軟に開発します。


## テスト
- [DbFit](https://github.com/dbfit/dbfit) - データベースコードの簡単なテスト駆動開発をサポートするデータベーステストフレームワーク。
- [pgTAP](https://github.com/theory/pgtap) - PostgreSQL のユニットテスト
- [RegreSQL](https://github.com/dimitri/regresql) - SQL クエリの回帰テスト
- [SQLancer](https://github.com/sqlancer/sqlancer) - 実装中のロジックバグを見つけるために、自動的にDBMSをテストします。


## HA/フェイルオーバー/シャーリング
- [Citus](https://github.com/citusdata/citus) - PostgreSQL 拡張機能により、複数のノード間でデータとクエリを分散できます。
- [patroni](https://github.com/zalando/patroni) - PostgreSQL High の可用性のテンプレートは、ZooKeeper、etcd、またはコンサルです。
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - MySQLクラスタリングと高可用性のための高スケーラビリティソリューション。
- [ShardingSphere](https://github.com/apache/shardingsphere) - 任意のデータベース上のデータシャーディング、スケーリング、暗号化などのSQLトランザクションとクエリエンジンを配布。
- [stolon](https://github.com/sorintlab/stolon) - PostgreSQL 高可用性のクラウドネイティブPostgreSQLマネージャー。
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - PostgreSQL の拡張機能と自動フェイルオーバーと高可用性のためのサービス。
- [pglookout](https://github.com/aiven/pglookout) - PostgreSQLのレプリケーション監視とフェイルオーバーデーモン。
- [pgslice](https://github.com/ankane/pgslice) - PostgreSQL のパーティショニングは pie と同じくらい簡単です。
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - 業界基準のPacemakerおよびCorosyncに基づくPostgreSQLの高可用性。
- [autobase](https://github.com/vitabaks/autobase) - PostgreSQLクラスターの展開と管理を自動化するオープンソースDBaaS。
- [Vitess](https://github.com/vitessio/vitess) - 汎用シャードによるMySQLの水平スケーリングのためのデータベースクラスタリングシステム。


## クベルネ
- [KubeDB](https://kubedb.com) - Kubernetesで簡単に生産グレードのデータベースを実行します。
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - PostgreSQL 演算子は、パトローニが機能するKubernetes(Kubernetes)でPostgreSQLクラスターを高度に利用できるようにします。
- [Spilo](https://github.com/zalando/spilo) - PostgreSQL のクラスタを Docker で指定します。
- [StackGres](https://gitlab.com/ongresinc/stackgres) - エンタープライズグレード、Kubernetes上のフルスタックPostgreSQL。


## 構成 調整
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Perlで書かれているスクリプトでは、MySQLのインストールを素早く確認し、パフォーマンスと安定性を向上させるための調整を行うことができます。
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - 最適化された生成のための無料のオンラインツール `postgresql.conf`お問い合わせ
- [pgtune](https://github.com/gregs1104/pgtune) - PostgreSQL の設定ウィザード。
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - PostgreSQLデータベースの構成を分析し、チューニングのアドバイスを行うシンプルなスクリプト。


## デベロッパー
- [DBmaestro](https://www.dbmaestro.com) - リリースサイクルを加速し、ITエコシステム全体の敏捷性をサポートします。
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - DevOps ワークフロー内で重要なデータベース開発機能を実行し、品質、性能、信頼性を損なうことなく実行できます。


## レポート
- [Chartbrew](https://chartbrew.com) - 複数のデータベースやサービスからライブダッシュボード、チャート、クライアントレポートを作成します。
- [Poli](https://github.com/shzlw/poli) - SQL の恋人のために構築された使いやすい SQL レポートアプリケーション。


## ディストリビューター
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - MySQLデータベースサーバーを簡単にデプロイするツール。
- [dbatools](https://github.com/sqlcollaborative/dbatools) - コマンドラインSQL Server Management Studioのように考えることができるPowerShellモジュール。
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - 標準のMacアプリとしてパッケージ化されたフル機能のPostgreSQLインストール。
- [BigSQL](https://www.bigsql.org) - PostgreSQLの開発者向け配布
- [Elephant Shed](https://github.com/credativ/elephant-shed) - PostgreSQL を使用した複数のユーティリティとアプリケーションをバンドルする Web ベースの PostgreSQL 管理 フロントエンド。
- [Pigsty](https://github.com/Vonng/pigsty) - PostgreSQL用のバッテリー込みオープンソースの配布と、開発者のための究極の保守性とデータベース-as-Codeツールボックス。


## セキュリティ
- [Acra](https://github.com/cossacklabs/acra) - データベースのセキュリティスイート。 フィールドレベルの暗号化、暗号化されたデータ、SQLの注入の防止、侵入の検出、ハニポットを通したデータベースプロキシ。 クライアント側とプロキシ側(「transparent」)の暗号化をサポートしています。 SQL、NoSQL。
- [Databunker](https://github.com/securitybunker/databunker) - 通常のDBの上に構築された顧客レコードのための特別なGDPR準拠の安全なボルト。
- [Inspektor](https://github.com/poonai/inspektor) - データベースのアクセス制御レイヤー。 インスペクターは、オープンポリシーエージェントを活用してポリシー決定を行います。


## ログイン

### アナライザー
- [Holistic.dev](https://holistic.dev) - データベースのパフォーマンス、セキュリティ、アーキテクチャの問題の自動検出サービス。
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - 一般的なSQLアンチパターンを自動的に検出します。
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Dialect-flexibleおよび構成可能なSQLのlinter。
- [SQLLineage](https://github.com/reata/sqllineage) - Pythonによって供給されるSQLのlineageの分析用具。
- [TSQLLint](https://github.com/tsqllint/tsqllint) - TSQLスクリプトにおける反パターンの存在を記述、識別、および報告するためのツール。

### コードジェネレーター
- [sqlc](https://sqlc.dev) - SQL-first のコードジェネレーターは、さまざまな言語とさまざまなデータベースの型安全結合を生成します。
- [SQLDelight](https://sqldelight.github.io/sqldelight) - Kotlin およびさまざまなデータベースのためのタイプ セーフな結合を作り出す SQL ファースト コードの発電機。
- [pGenie](https://pgenie.io) - SQL-first のコードジェネレーターは、様々な言語の型セーフなバインディングを生成し、PostgreSQL のデータベースに特化します。

### エクステンション
- [PartiQL](https://partiql.org) - リレーショナル、半構造、およびネストされたデータへの SQL 互換アクセス。

### フレームワーク
- [Apache Calcite](https://calcite.apache.org) - 高度なSQL機能を備えた動的データ管理フレームワーク。
- [ZetaSQL](https://github.com/google/zetasql) - SQL用のAnalyzerフレームワーク。

### フォーマット
- [CodeBuff](https://github.com/antlr/codebuff) - 機械学習を通して言語アグノスティックかなり印刷。
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - ソースJava SQLを開く JSqlParser に基づく多くの RDBMS のフォーマッタ。
- [SQL Online](https://sqlonline.in) - SQL Queriesをフォーマットするための無料のツールは、アナリスト向けのコンテンツによって続きます。
- [pgFormatter](https://github.com/darold/pgFormatter) - PostgreSQL の SQL の構文の認証者。
- [Poor SQL](https://poorsql.com) - インスタントフリーでオープンソースのT-SQLフォーマット。 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - SQLクエリをかなり印刷するためのJavaScriptライブラリ。

### ゲーム
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - 基本的なSQLスキルを拾うのに役立つSQL学習ゲーム - クエリを使用して情報を得ることができます。
- [Querymon](https://codepip.com/games/querymon/) - クエリデックスでSQLクエリ、共通から伝説までのモンスターのデータベースを使用することを学びます。
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - PostgreSQLデータベース内で完全に実装されたスペースベースの戦略ゲーム。
- [SQL Island](https://sql-island.informatik.uni-kl.de) - 生き残った平面のクラッシュの後、時間のためにSQL島に立ち往生します。 ゲームの進行をすることで、この島から逃げる方法を見つけます。
- [SQL Murder Mystery](https://mystery.knightlab.com) - SQLの概念とコマンドと経験のあるSQLユーザーのための楽しいゲームを学習するために、自己指示されたレッスンの両方であるように設計されており、侵入犯罪を解決します。
- [SQL Police Department](https://sqlpd.com) - SQLPDでは、同時にSQLを学習しながら犯罪を解決することができます。

### パサー
- [General SQL Parser](https://www.sqlparser.com) - SQLの解析、フォーマット、変更、解析
- [jOOQ](https://github.com/jOOQ/jOOQ) - SQL をパースし、他のダイアレクトに変換し、式ツリー変換を可能にします。
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - SQLステートメントをパースし、Javaクラスの階層に翻訳します。
- [libpg_query](https://github.com/pganalyze/libpg_query) - サーバー環境の外部からPostgreSQLパーサにアクセスするためのCライブラリ。
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - SQL を JSON にパースします。
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Python用の非validating SQLパーサ。
- [SQLGlot](https://github.com/tobymao/sqlglot) - 純粋なPython SQLパーサ、トランスピア、およびビルダー。

### ユーバーSQL
何かに対してSQLクエリを実行する
- [CloudQuery](https://github.com/cloudquery/cloudquery) - 抽出、変換、およびクラウドアセットを正規化PostgreSQLテーブルに読み込みます。
- [csvq](https://github.com/mithrandie/csvq) - CSVのSQLのようなクエリ言語。
- [dsq](https://github.com/multiprocessio/dsq) - JSON、CSV、Excel、パーケットなどのSQLクエリを実行するためのコマンドラインツール。
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Eclipseメモリアナライザー用のこのプラグインは、SQLを介してダンプをヒープすることができます。
- [OctoSQL](https://github.com/cube2222/octosql) - SQLを使用して複数のデータベースやファイル形式からデータを結合、分析、変換できるクエリツール。
- [osquery](https://github.com/osquery/osquery) - SQLは、オペレーティングシステムの計測、監視、および分析を駆動しました。
- [Resmo](https://www.resmo.com) - SQLを使用してリソースを監査および評価します。
- [sq](https://github.com/neilotoole/sq) - 構造化されたデータソースにjq-styleアクセスを提供するコマンドラインツール:SQLデータベース、CSVやExcelなどのドキュメントフォーマット。 sql+jqの愛子です。
- [Steampipe](https://github.com/turbot/steampipe) - SQLを使用してクラウドサービス(AWS、Azure、GCPなど)を即座にクエリできます。
- [TextQL](https://github.com/dinedal/textql) - CSVやTSVのような構造化されたテキストに対してSQLを実行します。
- [trdsql](https://github.com/noborus/trdsql) - CSV、LTSV、JSON、TBLN で SQL クエリを実行できる CLI ツール。
- [Trino](https://github.com/trinodb/trino) - 大量のデータセットを1つ以上の異質なデータソースにクエリするように設計された分散型SQLクエリエンジン。

### 言語サーバー プロトコル
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL言語サーバー。
- [sqls](https://github.com/lighttiger2505/sqls) - Go で書かれている SQL 言語サーバー。

### トレーニング
SQLの学習とパズル
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - 難易度セットベースのSQLパズル。
- [Hackerrank](https://www.hackerrank.com/domains/sql) - コーディングを練習し、インタビューの準備をし、雇われます。
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - SQLを使用してデータを取得、フィルタリング、分析する方法に関する書籍。
- [LeetCode](https://leetcode.com/problemset/database) - あなたのスキルを高め、あなたの知識を拡大し、技術的なインタビューの準備をして下さい。
- [Select Star SQL](https://selectstarsql.com) - SQLを学ぶためのインターネット上で最高の場所を目指した無料のインタラクティブブック。
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - データサイエンスの教育リソース。
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - SQLの概念とコマンドと経験のあるSQLユーザーのための楽しいゲームを学習するための自己指向のレッスンは、侵入犯罪を解決します。

### プラン
- [pev2](https://github.com/dalibo/pev2) - Vue.js コンポーネントは、PostgreSQL の実行計画のグラフィカルな視覚化を示す。
- [pg_flame](https://github.com/mgartner/pg_flame) - PostgreSQL 用のフレームグラフジェネレーター `EXPLAIN ANALYZE` 出力。

### スクリプト
さまざまな目的のために有用なSQLスクリプト
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - 長いhaulのためのT-SQLスクリプト:ストレージ、オンザフライドキュメンテーション、およびSQL Serverの一般的な管理ニーズの最適化。
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - PostgreSQL Experts のチームによって作成されたデータベース解析と管理のための有用な小さなスクリプトのコレクション。
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - PostgreSQL のインデックスやテーブルで統計的なブラットを測定するクエリー。
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - データベースが規則に従うかどうかを確認するSQLテスト <https://wiki.postgresql.org/wiki/Don't_Do_This>お問い合わせ
- [pg-utils](https://github.com/dataegret/pg-utils) - PostgreSQL の有用性
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - 便利なSQLスクリプトとコマンド <timescale.com>お問い合わせ
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - PostgreSQL DBAとすべてのエンジニアのための便利なツールの欠如セット。
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - PostgreSQL のクエリとコマンドが便利です。
- [TPT](https://github.com/tanelpoder/tpt-oracle) - これらの sqlplus スクリプトは、Oracle データベースのパフォーマンスの最適化とトラブルシューティングのためです。


## データデータ
- [dbt](https://github.com/dbt-labs/dbt-core) - 単に select ステートメントを書くことでデータを変換し、dbt はこれらのステートメントをテーブルに変え、データ倉庫内のビューを処理します。
- [QuickTable](https://quicktable.io) - 誰もがコードなしでデータにアクセス、清掃、分析、変換、およびモデル化できるようにします。

### カタログ
- [Amundsen](https://github.com/amundsen-io/amundsen) - データと相互作用するときのデータ分析、データ科学者およびエンジニアの生産性を改善するメタデータ駆動アプリケーション。
- [DataHub](https://github.com/datahub-project/datahub) - 現代のデータスタックのメタデータプラットフォーム。
- [Marquez](https://github.com/MarquezProject/marquez) - データの生態系のメタデータを収集、集計、視覚化します。

### ラインナップ
- [Dwh.dev](https://dwh.dev) - スノーフレーク用ネクッゲンデータライン

### ジェネレーション/メイキング/サブセッティング
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - 開発、テストおよび訓練の目的のためのデータを生成し、obfuscate (匿名化/擬似化)および移行して下さい。
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - 実質的なテストデータの膨大な量を作成するための強力なGUIツール。
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Oracleのスキーマを現実的なテストデータのトンでポップアップさせるための、小さくても問題のあるGUIツール。
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - データベースの有意義なテストデータを迅速に生成するための強力なGUIツール。
- [Faker](https://github.com/faker-js/faker) - ブラウザとNode.jsで大量の偽物データを生成します。
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQL と PostgreSQL 用のデータベースの匿名化と合成データ生成ツール。
- [myanon](https://github.com/ppomes/myanon) - MySQL ダンプファイルの匿名化をストリーミングします。 stdin から mysqldump を読み、匿名化されたバージョンを stdout に書きます。 決定的なハッシュ、固定値、JSON フィールドの匿名化、および Python 拡張をサポートしています。
- [Noisia](https://github.com/lesovsky/noisia) - PostgreSQL のワークロード・ジェネレーター
- [quick-seed](https://github.com/miit-daga/quick-seed) - PostgreSQL、MySQL、SQLite、 Prisma、およびDrizzle ORMをサポートする、現実的なテストデータを生成するためのデータベースアグノスティックシーディングツール。
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - 選択したテーブルやデータベース全体をアプリケーションに現実的なテストデータを生成し、表示するシンプルで強力なツール。 Oracle、MS SQL Server、MySQL、PostgreSQL、Firebird、SQLite、Azure SQLデータベース、Amazon Redshift、Amazon RDSなどのテストデータを生成します。
- [SQLable](https://sqlable.com/generator/) - ブラウザ内の偽物データを生成します。
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - データベースのマスキングと生成のためのDevOpsの最高の友人。

### データプロファイラ
- [Data Profiler](https://github.com/capitalone/dataprofiler) - DataProfilerはデータ分析、監視および敏感なデータ検出を容易にする設計されているPythonの図書館です。
- [Desbordante](https://github.com/desbordante/desbordante-core) - オープンソースのデータプロファイラは、データの複雑なパターンの発見と検証に特に重点を置いています。
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - データセットの高レベル分析のための汎用オープンソースのデータプロファイラ。

### レプリケーション
- [dtle](https://github.com/actiontech/dtle) - MySQL用の分散データ転送サービス。
- [Litestream](https://github.com/benbjohnson/litestream) - SQLiteのレプリケーションのストリーム。
- [pgsync](https://github.com/ankane/pgsync) - データベース間でPostgreSQLデータを同期します。
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQL から Python 3 で書かれた PostgreSQL のレプリカシステム このシステムは、PostgreSQL に保存されている MySQL から行の画像を JSONB として引き出すために、ライブラリ mysql-replication を使用します。
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Golang Webserver は、PostgreSQL の論理デコード機能を使用して、Websocket 上でPostgreSQL の変更を高速化します。
- [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQLの最も人気のあるレプリケーションマネージャ。

### 比較する
- [data-diff](https://github.com/datafold/data-diff) - Command-line ツールと Python ライブラリは、2 つの異なるデータベース間で効率的に diff 行を行ないます。
- [KS DB Merge Tools](https://ksdbmerge.tools) - DBスキーマとデータを比較し、同期するGUI Oracle データベース、MySQL、MariaDB、SQL Server、PostgreSQL、SQLite、MS Access、およびクロスDBMS 用。

## ペーパー
データベースツールに関する文書、記事、マニフェスト、その他の理論資料
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - データベースをコードとして扱います。
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - 最初のデータベースの設計と実装のためのフレンドリーな説明ガイド。

## 機械学習
- [MindsDB](https://github.com/mindsdb/mindsdb) - In-database機械学習。
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - SQLとAIを一緒に持ち込む。

## 貢献する
- あなたの貢献はいつも歓迎されます! お問い合わせ [contribution guidelines](contributing.md) まずは。
