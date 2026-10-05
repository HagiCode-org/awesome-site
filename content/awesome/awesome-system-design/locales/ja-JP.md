<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
内容を気に入ったら 📖、👍| ⭐| 👏 でプロジェクトを応援してください。

分散コンピューティングとビッグデータ向けのシステム設計に関する記事、書籍、動画、ツール集です。

面接の準備にも、分散型またはマイクロサービス指向のアプリケーション設計にも、この一覧が役立ちます。

注意：GitHub のスター数は、ここに掲載された各項目の利用状況や人気を示すものではありません。

[Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md) に触発されました

Gabriel Leon de Mattos によって開始

## 目次

[記事](#articles)

[書籍](#books)

[動画](#videos)

[ツール](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [分散ファイルシステム](#Distributed-File-Systems)
- [リソース管理](#Resource-Management)
- [ストリーム処理](#Stream-Processing)
- [メッセージブローカー](#Message-Broker)
- [ロードバランサー](#Load-Balancers)
- [Hadoop エコシステム](#Hadoop-Ecosystem)
- [REST フレームワーク](#REST-Framework)

[ボーナス](#bonus)

# 記事

## 入門 / 面接

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Anki フラッシュカード デッキを含む、リソースの素晴らしいコンピレーション。

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - システム設計を紹介する厳選されたトピックのリスト。

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - Grokking System Design の準備は、最も話題のコースの 1 つです。このツールの最も優れている点は、各ツールの機能の説明ではなく、提案されるアプリケーションの設計です。

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - システム設計とアーキテクチャに関する基本的な記事。

- [System Design](https://www.interviewbit.com/courses/system-design/) - 面接準備の入門リソース。

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - いくつかのパターンと考慮すべきテクノロジーについて説明した記事。

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - システム設計の問題をAIとのインタビューのようにインタラクティブに演習できるツール。反復的なフィードバックと最終評価によりパフォーマンスが評価されます

## 上級

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - 分散システム設計の視野を広げるウィキペディアの記事。

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 分散コンピューティングの誤ったトピックとその影響を紹介するウィキペディアの記事。

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - 上記の誤謬について詳しく説明します。

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - CAP 定理、マイクロサービス、NoSQL DB に関する IBM の記事。

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - マイクロサービス アーキテクチャとその欠点について説明した優れた記事。

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 分散システムを分類し、特に分散システムが必要な理由を説明する 11 ページの講義。

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - コードセキュリティの優れた実践方法について説明した短い記事。

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - 分散システムといくつかの潜在的なツールに関する優れた記事。

---

# 書籍

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - 分散システムについて説明し、それがどのようなものかを示すコードを軽くデモする本。

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - 分散システムで作業するときに使用するさまざまなリソースと、それがどのようにして誕生し、どのような問題を解決することを目的としているのかについて詳しく説明します。

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - ネットワークの基礎、分散システムを支える理論、スケーラブルなシステムのアーキテクチャ パターン、障害に対してシステムを強化する安定性パターン、小規模なチームで大規模システムを維持する方法に関する運用上のベスト プラクティスなど、分散システムの中核となる側面をカバーします。

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - マイクロサービスを使用したシステム アーキテクチャの設計について詳しく説明した素晴らしい本で、この点で最も関連性の高いトピックが含まれています。

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - 上記の本と同じ著者によって書かれたこの本では、モノリスからマイクロサービスへの移行について説明します。前の本から始めることをお勧めします。

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - 分散システムの優れた概要と詳細な紹介。中級レベルの読者にお勧めします。

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - コードの正確性を設計によって強化するための素晴らしい本。

---

# 動画

分散システムに関する動画集です。

## 入門 / 面接

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - システム設計について詳しく知りたい人に適したリソースで、非常にわかりやすい方法でトピックが紹介されています。

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - システム設計のもう 1 つの紹介。

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - 欠陥はあるものの、要件はほぼ満たされているという観点から、システム設計に関する面接がどのようなものになるかを概観します。ここで重要なのは、面接官とのやり取りがどのように行われるかです。

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - 面接の様子を説明した簡単なビデオ。

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - YouTube チャンネルでは、システム設計インタビューに特化したコンテンツに焦点を当て、さまざまな問題について詳しく説明しました。

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Jackson Gabbard の YouTube ビデオには、システム設計のインタビューに関する有益な情報が含まれています。

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Tushar によるシステム設計の紹介。

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - これは、Chris Colohan によって作成された分散システムの入門コースです。彼はカーネギー メロン大学で博士号を取得し、その後 Google で分散システムの構築に 10 年間勤務しました。

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - 分散システムに関するわかりやすいビデオを提供する新進気鋭のチャンネル。

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - システム設計面接の準備をしている人にとっては良いリソースです。システム設計の模擬面接や詳細な説明が複数あります。

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - もう 1 つの優れた無料リソースは、面接でよく聞かれる質問のリストです。

## 上級

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Reddit システム設計がどのように拡張されたかの概要。
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - MIT による分散システムに関する大学院レベルのコース (2020)。
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - UCSC の分散システムに関する学部コース (2020)。

# ツール

- 分散システムでよく使われるツール集

## リレーショナルデータベース管理システム

- [MariaDB](https://mariadb.org/) - MariaDB は MySQL サーバーのフォークです。

- [MySQL](https://dev.mysql.com/) - 広く使用されているリレーショナル データベース。

- [PostgresSQL](https://www.postgresql.org/) - 人気が高まっているリレーショナルデータベース。

- [SQLite](https://www.sqlite.org/index.html) - すべての携帯電話とほとんどのコンピュータに組み込まれている、もう 1 つの広く使用されているデータベースです。

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - 広く使用されているリレーショナル データベース。

## NoSQL

### キャッシュ（キー・バリュー）

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - ACID プロパティを使用したメモリ内キャッシュ。

- [Couchbase](https://developer.couchbase.com/open-source-projects) - memcached からインスピレーションを受け、レプリケーションや永続化などの機能が追加されています。

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - 高スケーリング、低レイテンシのメモリ内キャッシュ。

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - 最初のインメモリ キャッシュ データベースの 1 つで、高性能でマルチスレッドです。

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - 永続ストレージや文字列、リスト、セット、ハッシュ、ストリーム、ビットマップなどのサポートなど、多くの追加機能を備えた、広く使用されているメモリ内キャッシュ データベース。

### ストア（キー・バリュー）

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - マルチモデル (単一データベース内の多数のデータ型)、ACID キー/値ストア。簡単に拡張可能で耐障害性があります。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft のグローバルに分散されたマルチモデル データベース サービス。スループットとストレージを個別に個別に拡張します。 SQL、MongoDB、Cassandra、テーブル、Gremlin、および Spark API。

### ドキュメントストア

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - ACID 準拠の NoSQL ドキュメント ストア DB は、データベース ドキュメントの読み取りと更新のための RESTful HTTP API を提供します。

- [MongoDB](https://www.mongodb.com/) - 汎用の最も人気のある「NoSQL」データベースの 1 つ。

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - ドキュメントストア DB。

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - 高速かつスケーラブルな検索エンジンとして広く普及している「NoSQL」データベース。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft のグローバルに分散されたマルチモデル データベース サービス。スループットとストレージを個別に個別に拡張します。 SQL、MongoDB、Cassandra、テーブル、Gremlin、および Spark API。

### ワイドカラムストア

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - Key-Value およびドキュメント データベース。パフォーマンスが高く、スケーラブルで安全です。

- [Google Bigtable](https://cloud.google.com/bigtable) - 大規模な分析および運用ワークロードに対応する、スケーラブルでパフォーマンスの高い「NoSQL」データベース。

- [Cassandra](https://cassandra.apache.org/) - Facebook 生まれのプロジェクトは非常に高速で、簡単に拡張可能で、各操作との一貫性を含めるオプションがあります。

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Seastar フレームワークを使用した「NoSQL」データ ストア。Cassandra と互換性があります。

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Google の Bigtable をモデルとしており、Java で書かれています。 Apache Hadoop プロジェクトの一部として開発され、HDFS または Alluxio 上で実行されます。 ([Hadoop Related](##hadoop-related)を参照)

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft のグローバルに分散されたマルチモデル データベース サービス。スループットとストレージを個別に個別に拡張します。 SQL、MongoDB、Cassandra、テーブル、Gremlin、および Spark API。

### グラフ

- [Amazon Neptune](https://aws.amazon.com/neptune/) - 高速かつ信頼性の高いフルマネージドのグラフ データベース サービス。

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - ドキュメント、キーと値、グラフのための柔軟なデータベース。独自のクエリ言語である AQL を使用します。

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - グラフ データベースの優れたサポート、ACID 準拠、柔軟。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft のグローバルに分散されたマルチモデル データベース サービス。スループットとストレージを個別に個別に拡張します。 SQL、MongoDB、Cassandra、テーブル、Gremlin、および Spark API。

## 分散ファイルシステム

- [HDFS](https://hadoop.apache.org/) - Hadoop ファイル システムは、ビッグ データの競合他社の間で広く人気のある選択肢であり、高スループットのアクセスを提供します。

- [Lustre](http://lustre.org/) - コンピューター クラスターのファイル システム。

- [CephFS](https://ceph.io/) - 統合された分散ストレージ システム。

- [GlusterFS](https://www.gluster.org/) - スケールアウトNASファイルシステム。

- [MooseFS](https://moosefs.com/) - POSIX準拠の分散ファイルシステム。

- [XtreemFS](http://www.xtreemfs.org/) - フォールトトレラントなファイルシステム。

## リソース管理

- [Kubernetes](https://kubernetes.io/) - ベアメタルまたは仮想サーバー上でコンテナーのクラスターをデプロイ、管理し、自動的にスケーリングするための非常に人気のある方法。

## ストリーム処理

- [Apache Samza](http://samza.apache.org/) - Kafka などの複数のソースからのデータをリアルタイムで処理するステートフル アプリケーションを構築します。簡単で安価なマルチサブスクライバー モデルは、バックプレッシャーを排除でき、低遅延で信頼性の高い永続性を備えています。

- [Apache Flink](https://flink.apache.org/) - ストリームとトランスフォーメーションの概念に基づいています。 Maven を使用し、バッチ タスクを有限境界を持つデータ ストリームとして処理します。低遅延、高スループット。

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - 耐久性があり、スケーラブルな、本物のサービス。データベース イベント ストリーム、Web サイトのクリック ストリーム、金融取引など、数十万のソースから毎秒ギガバイトのデータを収集します。

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - ミッションクリティカルなワークロード向けに設計されたリアルタイム分析サービス。

## メッセージブローカー

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Amazon のオープンソース メッセージ ブローカー。

- [Apache ActiveMQ](https://activemq.apache.org/) - これは、マルチプロトコルの Java ベースのメッセージング サーバーです。

- [Apache Kafka](https://kafka.apache.org/) - データ ストリーミングの待ち時間が短く、広く普及しているメッセージ ブローカー。

- [RabbitMQ](https://www.rabbitmq.com/) - 幅広く人気の軽量タイプ
  erlang で書かれたメッセージ ブローカー。複数のメッセージング プロトコルもサポートします。

- [IronMQ](https://www.iron.io/mq) - 非常に高速で拡張性の高いメッセージング ブローカー。 (オープンソースではありません)

- [Apache Pulsar](https://pulsar.apache.org/) - yahoo によって作成され、スケーラビリティも高く、低遅延、地理レプリケーション、マルチテナシーを備えています。

- [Kestrel](https://github.com/twitter-archive/kestrel) - Scala で書かれており、memcached プロトコルを実行します。それはカフカとよく似た働きをします。

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - フルマネージドのエンタープライズ統合メッセージ ブローカー。

## ロードバランサー

### オープンソースソフトウェア

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Google によって使用され、Go で開発された Linux ベースの仮想ロード バランサー サーバー。

- [HAProxy](https://www.haproxy.org/) - 広く普及しているオプションで、高可用性、プロキシ、TCP/HTTP ロード バランシングを提供します。 Reddit、Imgur、MaxCDN、GitHub、AirBNB によって使用されます。

- [Zevenet](https://www.zevenet.com/products/community/#repository) - L3、L4、L7をサポートします。 Docker リポジトリを使用して簡単にインストールします。高度なヘルスチェック監視をサポートします。

- [Neutrino](https://neutrinoslb.GitHub.io/) - eBay によって使用され、Scala と Netty で構築されています。ラウンドロビンおよび最小接続アルゴリズムをサポートします。

- [Nginx](https://www.nginx.com/) - ちょっと待って、Nginx は Web サーバーではないでしょうか?はい、オープン ソースは基本レベルのコンテンツ スイッチングとリクエスト ルーティングをサポートしています。 Plus エディションでは、ロード バランシング、WAF、モニタリングなどをサポートします。

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua、完璧な組み合わせ。

### ハードウェア

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - 複数のプロトコル (IP、TCP、FTP、UDP、HTTP) をサポートする、堅牢なハードウェア ロード バランサー オプション。

- [TP-Link](https://www.tp-link.com/) - ロードバランサーとして機能する安価な代替手段。

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - 社内サーバーに関しては、負荷分散の最優先の選択肢の 1 つです。組み込まれた最高のセキュリティ対策、包括的なレポート、およびデータ損失防止のためのアウトバウンド トラフィックの監視。

### クラウド

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Amazon の顧客に人気の選択肢で、ラムダ関数をサポートし、拡張性が高くなります。

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Google の顧客に人気の選択肢で、自動スケーリング機能が付属しており、非常に高速で、CDN が統合されています。

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Cloudflareによるスケーラブルな負荷分散、高速フェイルオーバーとダッシュボードを備えています。

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Digitalocean の顧客であれば、これは良いオプションであり、非常に安価で、地域的に利用可能で、スケーラブルで、他のドロップレット間での展開が簡単です。

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Microsoft の Azure 顧客に人気の選択肢。内部および外部トラフィック、IPv6、モニタリング、および標準の負荷分散機能セットをサポートします。

## Hadoop エコシステム

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### ダッシュボード

- [Ambari](https://ambari.apache.org/) - Hadoop 関連テクノロジーのほとんどを統合し、管理と実行を容易にするダッシュボード。

### データ取り込み

- [Sqoop](https://sqoop.apache.org/) - Hadoop とリレーショナル データベースなどの構造化データストアの間でデータを効率的に転送します。

- [Flume](https://flume.apache.org/) - 分散型で可用性が高く、大量のログ データを効率的に収集、集約、移動できます。

- [Apache Kafka](https://kafka.apache.org/) - データ ストリーミングの待ち時間が短く、広く普及しているメッセージ ブローカー。

### ワークフロースケジューラー

- [Oozie](https://oozie.apache.org/) - XML でワークフローを作成し、(他の Hadoop エコシステム アプリケーションからの) ジョブを段階的に実行し、並列実行も可能にします。

### クエリ

- [Hive](https://hive.apache.org/) - Hadoop に保存されたデータを SQL でクエリします。
- [Pig](https://pig.apache.org/) - Hadoop データをクエリするための SQL に似たスクリプティング言語。

### 処理

- [Tez](https://tez.apache.org/) - Spark と MapReduce と同様の問題を解決します。最も効率的な方法を計算するため、MapReduce よりも効率的です。
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce は、その名前が示すように、データをマップし、結果を削減します。
- [Spark](https://spark.apache.org/) - Tez (および MapReduce) のようなデータを処理するだけでなく、リアルタイムでデータ ストリームを処理したり、ML で回帰分析アルゴリズムを適用したりする強力なデータ処理。
- [Apex](https://apex.apache.org/) - \*廃止されたプロジェクト。ストリームとバッチ処理を統合する YARN ネイティブ プラットフォームです。

### データベース

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Google の Bigtable をモデルとしており、Java で書かれています。 Apache Hadoop プロジェクトの一部として開発されました。

### リソース管理

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - 「Yet Another Resource Negotiator」は、カーネルのように動作して、クラスター全体のコンピューター リソースを管理します。
- [MESOS](http://mesos.apache.org/) - クラスター全体の CPU、メモリ、ストレージ、その他のリソースを管理することで、Linux カーネルのように動作します。

## REST フレームワーク

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Golang を使用した超高速マイクロサービス フレームワーク、高スループット能力。

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - 分散処理、容易に拡張可能、チャネルとライブチャットのサポート。このフレームワークは Elixir で書かれており、BEAM と Erlang を使用しており、大規模システムにとって非常に効率的で、高スループットをサポートします。

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - 多くのシナリオで適切に実行できる高速なnode.js REST API。

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Ruby で書かれた Rails は、プロトタイプから本番環境まで効率的な方法で迅速な API を提供します。

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Scala/Java で書かれた非常に高速で高スループットのフレームワークで、デフォルトで RESTful です。

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - 迅速なプロトタイピングと生産のための軽量の Python マイクロフレームワーク。

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Flask にインスピレーションを得た軽量の Python マイクロフレームワークですが、Python 非同期を使用したより現代的なものです。

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Python で書かれた Django Rest は、強力で柔軟な REST API です。効率性と市場投入までの時間は Rails に似ています。

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - C# または F# の Model-View-Controller デザイン パターンを使用して Web アプリと API を構築するための豊富なフレームワーク。 Web フレームワークの [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) の番号 6。

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - 最小限のオーバーヘッドと強力なプラグイン アーキテクチャで最高の開発者エクスペリエンスを提供することに重点を置いた Node.js Web フレームワーク。
