<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
如果你喜欢这些内容 📖，请支持项目的曝光度，点个 👍| ⭐| 👏

分布式计算和大数据系统设计的文章、书籍、视频与工具精选清单。

无论你是在准备面试，还是想设计分布式/微服务应用，这份清单都能助你一臂之力。

注意：GitHub 星标数并不能反映此处每个项目的实际使用情况或受欢迎程度。

灵感来自 [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

由 Gabriel Leon de Mattos 创建

## 目录

[文章](#articles)

[书籍](#books)

[视频](#videos)

[工具](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [分布式文件系统](#Distributed-File-Systems)
- [资源管理](#Resource-Management)
- [流处理](#Stream-Processing)
- [消息代理](#Message-Broker)
- [负载均衡器](#Load-Balancers)
- [Hadoop 生态](#Hadoop-Ecosystem)
- [REST 框架](#REST-Framework)

[额外内容](#bonus)

# 文章

## 简介 / 面试

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - 很棒的资源汇编，包括 Anki 抽认卡组。

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - 精心策划的主题列表，向您介绍系统设计。

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - Grokking 系统设计准备是最受关注的课程之一。它最好的一点是它所建议的应用程序的设计，而不是对每个工具应该做什么的解释。

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - 关于系统设计和架构主题的基础文章。

- [System Design](https://www.interviewbit.com/courses/system-design/) - 介绍性面试准备资源。

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - 文章讨论了一些模式以及一些需要考虑的技术。

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - 一个可以让你像人工智能面试一样交互式练习系统设计问题的工具。有迭代反馈和最终评估来对您的表现进行评分

## 进阶

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - 维基百科文章拓宽了分布式系统设计的视野。

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 维基百科文章介绍了分布式计算的谬误及其影响的主题。

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - 对上述谬误的深入解释。

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - 关于 CAP 定理、微服务和 NoSQL DB 的 IBM 文章。

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - 谈论微服务架构及其缺点的好文章。

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 11 页的讲座对分布式系统进行了分类，并具体说明了我们为什么需要它们。

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - 谈论代码证券良好实践的简短文章。

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - 关于分布式系统以及一些潜在工具的好文章。

---

# 书籍

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - 这本书讨论了分布式系统，并简单地演示了它的一些代码。

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - 深入解释我们在使用分布式系统时使用的各种资源，以及它是如何产生的以及它旨在解决什么问题。

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - 涵盖分布式系统的核心方面，例如：网络基础知识、支撑分布式系统的理论、可扩展系统的架构模式、增强系统抵御故障的稳定性模式以及如何用小团队维护大型系统的操作最佳实践。

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - 这是一本很棒的书，深入讨论了使用微服务设计系统架构，包括这方面最相关的主题。

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - 本书与上述作者为同一作者，将涵盖从单体架构到微服务的迁移，建议您从上一本书开始。

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - 对分布式系统的精彩概述和深入介绍。推荐给中级读者。

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - 关于通过设计强制代码正确性的好书。

---

# 视频

分布式系统主题的视频合集。

## 简介 / 面试

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - 对于想要了解更多系统设计知识的人来说，这是一个很好的资源，以非常容易理解的方式介绍了该主题。

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - 系统设计的另一个介绍。

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - 从有缺陷但接近满足要求的角度概述系统设计面试的样子。这里的关键是与面试官的互动如何进行。

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - 一个简短的视频解释了他们如何采访。

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - YouTube频道专注于系统设计访谈的具体内容，对各种问题进行详细解释。

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Jackson Gabbard 的 YouTube 视频，提供有关系统设计访谈的丰富信息。

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Tushar 的系统设计简介。

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - 这是 Chris Colohan 制作的分布式系统入门课程。他从卡内基梅隆大学获得博士学位，然后在谷歌工作了 10 年，构建分布式系统。

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - 即将推出的频道，提供有关分布式系统的易于理解的视频。

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - 对于准备系统设计面试的人来说是很好的资源，有多个系统设计模拟面试和深入探讨。

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - 另一个很棒的免费资源，常见面试问题列表。

## 进阶

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Reddit 系统设计如何扩展的概述。
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - 麻省理工学院分布式系统研究生课程（2020）。
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - UCSC 分布式系统本科课程（2020 年）。

# 工具

- 分布式系统中最常用工具的合集

## 关系型数据库管理系统

- [MariaDB](https://mariadb.org/) - MariaDB 是 MySQL 服务器的一个分支。

- [MySQL](https://dev.mysql.com/) - 广泛使用的关系数据库。

- [PostgresSQL](https://www.postgresql.org/) - 关系数据库越来越受欢迎。

- [SQLite](https://www.sqlite.org/index.html) - 另一个广泛使用的数据库内置于所有手机和大多数计算机中。

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - 广泛使用的关系数据库。

## NoSQL

### 缓存（键值）

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - 在具有 ACID 属性的内存缓存中。

- [Couchbase](https://developer.couchbase.com/open-source-projects) - 受到 memcached 的启发，添加了复制和持久化等功能。

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - 高扩展性、低延迟的内存缓存。

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - 第一个内存缓存数据库，高性能和多线程。

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - 广泛使用的内存缓存数据库，具有许多附加功能，例如持久存储和支持字符串、列表、集合、哈希、流、位图等。

### 存储（键值）

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - 多模型（单个数据库中的多种数据类型）、ACID 键值存储。易于扩展和容错。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分布式多模型数据库服务。东方且独立地扩展吞吐量和存储。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 文档存储

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - 符合 ACID 的 NoSQL 文档存储数据库，提供用于读取和更新数据库文档的 RESTful HTTP API。

- [MongoDB](https://www.mongodb.com/) - 最流行的通用“NoSQL”数据库之一。

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - 文档存储数据库。

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - 广泛流行的“NoSQL”数据库，用于快速且可扩展的搜索引擎。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分布式多模型数据库服务。东方且独立地扩展吞吐量和存储。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 宽列存储

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - 键值和文档数据库，高性能、可扩展且安全。

- [Google Bigtable](https://cloud.google.com/bigtable) - 可扩展且高性能的“NoSQL”数据库，适用于大型分析和操作工作负载。

- [Cassandra](https://cassandra.apache.org/) - Facebook 诞生的项目速度非常快，易于扩展，并且可以选择包含每个操作的一致性。

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - 使用seastar框架的“NoSQL”数据存储，与Cassandra兼容。

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - 模仿 Google 的 Bigtable 并用 Java 编写。作为 Apache Hadoop 项目的一部分开发，并在 HDFS 或 Alluxio 之上运行。 （参见[Hadoop Related](##hadoop-related)）

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分布式多模型数据库服务。东方且独立地扩展吞吐量和存储。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

### 图

- [Amazon Neptune](https://aws.amazon.com/neptune/) - 快速、可靠且完全托管的图形数据库服务。

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - 灵活的文档、键值、图表数据库。使用自己的查询语言 AQL。

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - 对图形数据库的良好支持，符合 ACID 且灵活。

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft 的全球分布式多模型数据库服务。东方且独立地扩展吞吐量和存储。 SQL、MongoDB、Cassandra、表、Gremlin 和 Spark API。

## 分布式文件系统

- [HDFS](https://hadoop.apache.org/) - Hadoop 文件系统是大数据竞争对手中广泛流行的选择，提供高吞吐量访问。

- [Lustre](http://lustre.org/) - 计算机集群的文件系统。

- [CephFS](https://ceph.io/) - 统一的分布式存储系统。

- [GlusterFS](https://www.gluster.org/) - 横向扩展 NAS 文件系统。

- [MooseFS](https://moosefs.com/) - 符合 POSIX 标准的分布式文件系统。

- [XtreemFS](http://www.xtreemfs.org/) - 容错文件系统。

## 资源管理

- [Kubernetes](https://kubernetes.io/) - 在裸机或虚拟服务器上部署、管理和自动扩展容器集群的非常流行的方法。

## 流处理

- [Apache Samza](http://samza.apache.org/) - 构建有状态的应用程序，实时处理来自多个源（包括 Kafka）的数据。简单且廉价的多订阅者模型，可以消除背压并具有可靠的持久性和低延迟。

- [Apache Flink](https://flink.apache.org/) - 基于流和变换的概念。使用maven，将批处理任务作为具有有限边界的数据流来处理。低延迟、高吞吐量。

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - 持久、可扩展、实时的服务。每秒从数十万个来源收集千兆字节的数据，包括数据库事件流、网站点击流、金融交易等。

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - 专为关键任务工作负载而设计的实时分析服务。

## 消息代理

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - 来自 Amazon 的开源消息代理。

- [Apache ActiveMQ](https://activemq.apache.org/) - 它是一个多协议、基于 Java 的消息传递服务器。

- [Apache Kafka](https://kafka.apache.org/) - 广泛流行的消息代理，具有低数据流延迟。

- [RabbitMQ](https://www.rabbitmq.com/) - 广受青睐的轻量化
  用 erlang 编写的消息代理，还支持多种消息协议。

- [IronMQ](https://www.iron.io/mq) - 非常快速且高度可扩展的消息代理。 （非开源）

- [Apache Pulsar](https://pulsar.apache.org/) - 由雅虎创建，还具有高度可扩展性、低延迟、地理复制和多租户功能。

- [Kestrel](https://github.com/twitter-archive/kestrel) - 用 Scala 编写并使用 memcached 协议。它的工作原理很像卡夫卡。

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - 完全托管的企业集成消息代理。

## 负载均衡器

### 开源软件

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - 由 Google 使用，用 Go 开发，基于 Linux 的虚拟负载均衡器服务器。

- [HAProxy](https://www.haproxy.org/) - 广泛流行的选项，提供高可用性、代理、TCP/HTTP 负载平衡。由 Reddit、Imgur、MaxCDN、GitHub、AirBNB 使用。

- [Zevenet](https://www.zevenet.com/products/community/#repository) - 支持L3、L4和L7。使用 docker 存储库轻松安装。支持高级健康检查监控。

- [Neutrino](https://neutrinoslb.GitHub.io/) - 由 eBay 使用，使用 Scala 和 Netty 构建。支持循环和最少连接算法。

- [Nginx](https://www.nginx.com/) - 等等，Nginx 不是一个 Web 服务器吗？是的，开源确实支持基本级别的内容交换和请求路由。 Plus版本支持负载均衡、WAF、监控等。

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua，完美组合。

### 硬件

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - 强大的硬件负载平衡器选项，支持多种协议（IP、TCP、FTP、UDP、HTTP）。

- [TP-Link](https://www.tp-link.com/) - 作为负载均衡器的更便宜的替代方案。

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - 对于内部服务器而言，负载平衡的最佳选择之一。内置顶级安全措施、综合报告和监控出站流量以防止数据丢失。

### 云端

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 亚马逊客户的热门选择，支持lambda函数，可扩展性强。

- [Google Load Balancing](https://cloud.google.com/load-balancing) - 谷歌客户的热门选择，具有自动缩放功能，速度非常快，集成了 CDN。

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Cloudflare 提供的可扩展负载平衡，具有快速故障转移和仪表板。

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - 如果您是 digitalocean 客户，这是一个不错的选择，非常便宜，区域可用性，可扩展，易于在其他 Droplet 中部署。

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Microsoft Azure 客户的热门选择。支持内部和外部流量、ipv6、监控和标准负载平衡功能集。

## Hadoop 生态

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### 仪表板

- [Ambari](https://ambari.apache.org/) - 集成了大部分hadoop相关技术的仪表板，方便管理和执行。

### 数据摄取

- [Sqoop](https://sqoop.apache.org/) - 在 Hadoop 和结构化数据存储（例如关系数据库）之间高效传输数据。

- [Flume](https://flume.apache.org/) - 分布式、高可用且高效地收集、聚合和移动大量日志数据。

- [Apache Kafka](https://kafka.apache.org/) - 广泛流行的消息代理，具有低数据流延迟。

### 工作流调度器

- [Oozie](https://oozie.apache.org/) - 在 xml 中创建工作流程以分步执行作业（来自其他 hadoop 生态系统应用程序），也允许并行执行。

### 查询

- [Hive](https://hive.apache.org/) - 使用SQL查询hadoop存储的数据。
- [Pig](https://pig.apache.org/) - 类似于 SQL 的脚本语言来查询 hadoop 数据。

### 处理

- [Tez](https://tez.apache.org/) - 解决了与 Spark 和 MapReduce 类似的问题，它比 MapReduce 更高效，因为它计算出最有效的方法。
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce，顾名思义，映射数据并减少结果。
- [Spark](https://spark.apache.org/) - 强大的数据处理功能不仅可以处理 Tez（和 MapReduce）等数据，还可以实时处理数据流、在 ML 中应用回归分析算法等等。
- [Apex](https://apex.apache.org/) - \*已退休的项目，它是一个统一流处理和批处理的 YARN 原生平台。

### 数据库

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - 模仿 Google 的 Bigtable 并用 Java 编写。作为 Apache Hadoop 项目的一部分开发。

### 资源管理

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - “又一个资源谈判者”，像内核一样工作，管理跨集群的计算机资源。
- [MESOS](http://mesos.apache.org/) - 通过管理集群中的 CPU、内存、存储和其他资源，像 Linux 内核一样工作。

## REST 框架

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - 使用 Golang 的极速微服务框架，高吞吐能力。

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - 分布式处理，易于扩展，支持频道和实时聊天。该框架 - 用 Elixir 编写，使用 BEAM 和 Erlang，对于大型系统非常有效并支持高吞吐量。

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - 快速的node.js Rest api，可以在许多场景下表现良好。

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Rails 使用 Ruby 编写，以高效的方式提供从原型到生产的快速 API。

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - 用 Scala/Java 编写的非常快速、高吞吐量的框架，默认情况下是 RESTful。

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - 用于快速原型设计和生产的轻量级 Python 微框架。

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - 受 Flask 启发但更现代的轻量级 Python 微框架，使用 Python 异步。

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Django Rest 用 Python 编写，是一个强大且灵活的 REST API。效率和上市时间类似于 Rails。

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - 一个丰富的框架，用于使用 C# 或 F# 中的模型-视图-控制器设计模式构建 Web 应用程序和 API。 Web 框架的 [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) 上排名第 6。

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Node.js Web 框架高度专注于以最少的开销和强大的插件架构提供最佳的开发人员体验。
