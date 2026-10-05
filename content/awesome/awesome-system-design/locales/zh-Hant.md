<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
如果你喜歡這些內容 📖，請支持專案曝光，給個 👍| ⭐| 👏

分散式運算與大數據系統設計的文章、書籍、影片及工具精選清單。

無論你是在準備面試，或是想設計分散式／微服務應用程式，這份清單都能提供協助。

注意：GitHub 星星數無法反映此處每個項目的實際使用情況或受歡迎程度。

靈感來自 [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

由 Gabriel Leon de Mattos 發起

## 目錄

[文章](#articles)

[書籍](#books)

[影片](#videos)

[工具](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [分散式檔案系統](#Distributed-File-Systems)
- [資源管理](#Resource-Management)
- [串流處理](#Stream-Processing)
- [訊息代理](#Message-Broker)
- [負載平衡器](#Load-Balancers)
- [Hadoop 生態系](#Hadoop-Ecosystem)
- [REST 框架](#REST-Framework)

[額外內容](#bonus)

# 文章

## 簡介 / 面試

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - 很棒的資源彙編，包括 Anki 抽認卡組。

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - 精心策劃的主題列表，向您介紹系統設計。

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - Grokking 系統設計準備是最受關注的課程之一。它最好的一點是它所建議的應用程式的設計，而不是對每個工具應該做什麼的解釋。

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - 關於系統設計和架構主題的基礎文章。

- [System Design](https://www.interviewbit.com/courses/system-design/) - 介紹性面試準備資源。

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - 文章討論了一些模式以及一些需要考慮的技術。

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - 一個可以讓你像人工智慧面試一樣互動式練習系統設計問題的工具。有迭代回饋和最終評估來對您的表現進行評分

## 進階

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - 維基百科文章拓寬了分散式系統設計的視野。

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 維基百科文章介紹了分散式運算的謬誤及其影響的主題。

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - 對上述謬誤的深入解釋。

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - 關於 CAP 定理、微型服務和 NoSQL DB 的 IBM 文章。

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - 談微服務架構及其缺點的好文章。

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 11 頁的講座對分散式系統進行了分類，並具體說明了我們為什麼需要它們。

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - 談論代碼證券良好實踐的簡短文章。

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - 關於分散式系統以及一些潛在工具的好文章。

---

# 書籍

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - 這本書討論了分散式系統，並簡單地示範了它的一些程式碼。

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - 深入解釋我們在使用分散式系統時使用的各種資源，以及它是如何產生的以及它旨在解決什麼問題。

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - 涵蓋分散式系統的核心方面，例如：網路基礎知識、支撐分散式系統的理論、可擴展系統的架構模式、增強系統抵禦故障的穩定性模式以及如何用小團隊維護大型系統的操作最佳實踐。

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - 這是一本很棒的書，深入討論了使用微服務設計系統架構，包括這方面最相關的主題。

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - 本書與上述作者為同一作者，將涵蓋從單體架構到微服務的遷移，建議您從上一本書開始。

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - 分散式系統的精彩概述和深入介紹。推薦給中級讀者。

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - 關於透過設計強製程式碼正確性的好書。

---

# 影片

分散式系統相關影片集。

## 簡介 / 面試

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - 對於想要了解更多系統設計知識的人來說，這是一個很好的資源，以非常容易理解的方式介紹了這個主題。

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - 系統設計的另一個介紹。

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - 從有缺陷但接近滿足要求的角度概述系統設計面試的樣子。這裡的關鍵是與面試官的互動如何進行。

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - 一個簡短的影片解釋了他們如何採訪。

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - YouTube頻道專注於系統設計訪談的具體內容，對各種問題進行詳細解釋。

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Jackson Gabbard 的 YouTube 視頻，提供有關係統設計訪談的豐富資訊。

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Tushar 的系統設計簡介。

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - 這是 Chris Colohan 製作的分散式系統入門課程。他從卡內基美隆大學獲得博士學位，然後在谷歌工作了 10 年，建立分散式系統。

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - 即將推出的頻道，提供有關分散式系統的易於理解的影片。

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - 對於準備系統設計面試的人來說是很好的資源，有多個系統設計模擬面試和深入探討。

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - 另一個很棒的免費資源，常見面試問題清單。

## 進階

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Reddit 系統設計如何擴展的概述。
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - 麻省理工學院分散式系統研究生課程（2020）。
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - UCSC 分散式系統本科課程（2020 年）。

# 工具

- 分散式系統最常用工具的集合

## 關聯式資料庫管理系統

- [MariaDB](https://mariadb.org/) - MariaDB 是 MySQL 伺服器的一個分支。

- [MySQL](https://dev.mysql.com/) - 廣泛使用的關係資料庫。

- [PostgresSQL](https://www.postgresql.org/) - 關係資料庫越來越受歡迎。

- [SQLite](https://www.sqlite.org/index.html) - 另一個廣泛使用的資料庫內建於所有手機和大多數電腦中。

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - 廣泛使用的關係資料庫。

## NoSQL

### 快取（鍵值）

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - 在具有 ACID 屬性的記憶體快取中。

- [Couchbase](https://developer.couchbase.com/open-source-projects) - 受到 memcached 的啟發，添加了複製和持久化等功能。

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - 高擴展性、低延遲的記憶體快取。

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - 第一個記憶體快取資料庫，高效能和多執行緒。

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - 廣泛使用的記憶體快取資料庫，具有許多附加功能，例如持久性儲存和支援字串、列表、集合、哈希、流、點陣圖等。

### 儲存（鍵值）

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - 多模型（單一資料庫中的多種資料類型）、ACID 鍵值儲存。易於擴展和容錯。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分散式多模型資料庫服務。東方且獨立地擴展吞吐量和存儲。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 文件儲存

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - 符合 ACID 的 NoSQL 文件儲存資料庫，提供用於讀取和更新資料庫文件的 RESTful HTTP API。

- [MongoDB](https://www.mongodb.com/) - 最受歡迎的通用“NoSQL”資料庫之一。

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - 文檔儲存資料庫。

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - 廣泛流行的「NoSQL」資料庫，用於快速且可擴展的搜尋引擎。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分散式多模型資料庫服務。東方且獨立地擴展吞吐量和存儲。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 寬欄儲存

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - 鍵值和文件資料庫，高效能、可擴展且安全。

- [Google Bigtable](https://cloud.google.com/bigtable) - 可擴展且高效能的「NoSQL」資料庫，適用於大型分析和操作工作負載。

- [Cassandra](https://cassandra.apache.org/) - Facebook 誕生的專案速度非常快，易於擴展，並且可以選擇包含每個操作的一致性。

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - 使用seastar框架的「NoSQL」資料存儲，與Cassandra相容。

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - 模仿 Google 的 Bigtable 並用 Java 編寫。作為 Apache Hadoop 專案的一部分開發，並在 HDFS 或 Alluxio 之上運行。 （參見[Hadoop Related](##hadoop-related)）

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分散式多模型資料庫服務。東方且獨立地擴展吞吐量和存儲。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 圖形

- [Amazon Neptune](https://aws.amazon.com/neptune/) - 快速、可靠且完全託管的圖形資料庫服務。

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - 靈活的文檔、鍵值、圖表資料庫。使用自己的查詢語言 AQL。

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - 對圖形資料庫的良好支持，符合 ACID 且靈活。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分散式多模型資料庫服務。東方且獨立地擴展吞吐量和存儲。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

## 分散式檔案系統

- [HDFS](https://hadoop.apache.org/) - Hadoop 檔案系統是大數據競爭對手中廣泛流行的選擇，提供高吞吐量存取。

- [Lustre](http://lustre.org/) - 電腦集群的檔案系統。

- [CephFS](https://ceph.io/) - 統一的分散式儲存系統。

- [GlusterFS](https://www.gluster.org/) - 橫向擴充 NAS 檔案系統。

- [MooseFS](https://moosefs.com/) - 符合 POSIX 標準的分散式檔案系統。

- [XtreemFS](http://www.xtreemfs.org/) - 容錯檔案系統。

## 資源管理

- [Kubernetes](https://kubernetes.io/) - 在裸機或虛擬伺服器上部署、管理和自動擴展容器叢集的非常流行的方法。

## 串流處理

- [Apache Samza](http://samza.apache.org/) - 建立有狀態的應用程序，即時處理來自多個來源（包括 Kafka）的資料。簡單且廉價的多訂閱者模型，可以消除背壓並具有可靠的持久性和低延遲。

- [Apache Flink](https://flink.apache.org/) - 基於流和變換的概念。使用maven，將批次任務作為具有有限邊界的資料流來處理。低延遲、高吞吐量。

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - 持久、可擴展、即時的服務。每秒從數十萬個來源收集千兆位元組的數據，包括資料庫事件流、網站點擊流、金融交易等。

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - 專為關鍵任務工作負載而設計的即時分析服務。

## 訊息代理

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - 來自 Amazon 的開源訊息代理程式。

- [Apache ActiveMQ](https://activemq.apache.org/) - 它是一個多協定、基於 Java 的訊息傳遞伺服器。

- [Apache Kafka](https://kafka.apache.org/) - 廣泛流行的訊息代理，具有低資料流延遲。

- [RabbitMQ](https://www.rabbitmq.com/) - 廣受青睞的輕量化
  用 erlang 編寫的訊息代理，也支援多種訊息協定。

- [IronMQ](https://www.iron.io/mq) - 非常快速且高度可擴展的訊息代理程式。 （非開源）

- [Apache Pulsar](https://pulsar.apache.org/) - 由雅虎創建，還具有高度可擴展性、低延遲、地理複製和多租戶功能。

- [Kestrel](https://github.com/twitter-archive/kestrel) - 用 Scala 編寫並使用 memcached 協議。它的工作原理很像卡夫卡。

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - 完全託管的企業整合訊息代理程式。

## 負載平衡器

### 開放原始碼軟體

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - 由 Google 使用，用 Go 開發，基於 Linux 的虛擬負載平衡器伺服器。

- [HAProxy](https://www.haproxy.org/) - 廣泛流行的選項，提供高可用性、代理、TCP/HTTP 負載平衡。由 Reddit、Imgur、MaxCDN、GitHub、AirBNB 使用。

- [Zevenet](https://www.zevenet.com/products/community/#repository) - 支援L3、L4和L7。使用 docker 儲存庫輕鬆安裝。支援進階健康檢查監控。

- [Neutrino](https://neutrinoslb.GitHub.io/) - 由 eBay 使用，使用 Scala 和 Netty 建構。支援循環和最少連接演算法。

- [Nginx](https://www.nginx.com/) - 等等，Nginx 不是一個 Web 伺服器嗎？是的，開源確實支援基本層級的內容交換和請求路由。 Plus版本支援負載平衡、WAF、監控等。

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua，完美組合。

### 硬體

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - 強大的硬體負載平衡器選項，支援多種協定（IP、TCP、FTP、UDP、HTTP）。

- [TP-Link](https://www.tp-link.com/) - 作為負載平衡器的更便宜的替代方案。

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - 對於內部伺服器而言，負載平衡的最佳選擇之一。內建頂級安全措施、綜合報告和監控出站流量以防止資料遺失。

### 雲端

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 亞馬遜客戶的熱門選擇，支援lambda函數，可擴展性強。

- [Google Load Balancing](https://cloud.google.com/load-balancing) - 谷歌客戶的熱門選擇，具有自動縮放功能，速度非常快，整合了 CDN。

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Cloudflare 提供的可擴展負載平衡，具有快速故障轉移和儀表板。

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - 如果您是 digitalocean 客戶，這是一個不錯的選擇，非常便宜，區域可用性，可擴展，易於在其他 Droplet 中部署。

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Microsoft Azure 客戶的熱門選擇。支援內部和外部流量、ipv6、監控和標準負載平衡功能集。

## Hadoop 生態系

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### 儀表板

- [Ambari](https://ambari.apache.org/) - 整合了大部分hadoop相關技術的儀表板，方便管理與執行。

### 資料擷取

- [Sqoop](https://sqoop.apache.org/) - 在 Hadoop 和結構化資料儲存（例如關聯式資料庫）之間有效率地傳輸資料。

- [Flume](https://flume.apache.org/) - 分散式、高可用且有效率地收集、聚合和移動大量日誌資料。

- [Apache Kafka](https://kafka.apache.org/) - 廣泛流行的訊息代理，具有低資料流延遲。

### 工作流程排程器

- [Oozie](https://oozie.apache.org/) - 在 xml 中建立工作流程以逐步執行作業（來自其他 hadoop 生態系統應用程式），也允許並行執行。

### 查詢

- [Hive](https://hive.apache.org/) - 使用SQL查詢hadoop儲存的資料。
- [Pig](https://pig.apache.org/) - 類似 SQL 的腳本語言來查詢 hadoop 資料。

### 處理

- [Tez](https://tez.apache.org/) - 解決了與 Spark 和 MapReduce 類似的問題，它比 MapReduce 更有效率，因為它計算出最有效的方法。
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce，顧名思義，映射資料並減少結果。
- [Spark](https://spark.apache.org/) - 強大的資料處理功能不僅可以處理 Tez（和 MapReduce）等數據，還可以即時處理資料流、在 ML 中應用迴歸分析演算法等等。
- [Apex](https://apex.apache.org/) - \*已退休的項目，它是一個統一流處理和批次的 YARN 原生平台。

### 資料庫

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - 模仿 Google 的 Bigtable 並用 Java 編寫。作為 Apache Hadoop 專案的一部分開發。

### 資源管理

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - “又一個資源談判者”，像核心一樣工作，管理跨集群的電腦資源。
- [MESOS](http://mesos.apache.org/) - 透過管理叢集中的 CPU、記憶體、儲存和其他資源，像 Linux 核心一樣運作。

## REST 框架

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - 使用 Golang 的極速微服務框架，高吞吐能力。

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - 分散式處理，易於擴展，支援頻道和即時聊天。該框架 - 用 Elixir 編寫，使用 BEAM 和 Erlang，對於大型系統非常有效並支援高吞吐量。

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - 快速的node.js Rest api，可以在許多場景下表現良好。

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Rails 使用 Ruby 編寫，以高效的方式提供從原型到生產的快速 API。

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - 用 Scala/Java 編寫的非常快速、高吞吐量的框架，預設為 RESTful。

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - 用於快速原型設計和生產的輕量級 Python 微框架。

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - 受 Flask 啟發但更現代的輕量級 Python 微框架，使用 Python 非同步。

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Django Rest 用 Python 編寫，是一個強大且靈活的 REST API。效率和上市時間類似 Rails。

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - 一個豐富的框架，用於使用 C# 或 F# 中的模型-視圖-控制器設計模式建立 Web 應用程式和 API。 Web 框架的 [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) 上排名第 6。

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Node.js Web 框架高度專注於以最少的開銷和強大的插件架構提供最佳的開發人員體驗。
