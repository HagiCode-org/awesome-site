<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
내용이 마음에 드셨다면 📖 프로젝트의 인지도를 위해 👍| ⭐| 👏를 눌러 주세요.

분산 컴퓨팅과 빅데이터 시스템 설계 관련 문서, 서적, 동영상 및 도구를 엄선한 목록입니다.

면접을 준비하거나 분산형/마이크로서비스 기반 애플리케이션을 설계하려는 경우 이 목록이 도움이 됩니다.

주의: GitHub 별 수가 여기에 나열된 모든 항목의 사용량이나 인기도를 반영하지는 않습니다.

[Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)에서 영감을 받았습니다

Gabriel Leon de Mattos가 시작했습니다

## 목차

[문서](#articles)

[도서](#books)

[동영상](#videos)

[도구](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [분산 파일 시스템](#Distributed-File-Systems)
- [리소스 관리](#Resource-Management)
- [스트림 처리](#Stream-Processing)
- [메시지 브로커](#Message-Broker)
- [로드 밸런서](#Load-Balancers)
- [Hadoop 생태계](#Hadoop-Ecosystem)
- [REST 프레임워크](#REST-Framework)

[보너스](#bonus)

# 문서

## 소개 / 인터뷰

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Anki 플래시카드 데크를 포함한 멋진 리소스 모음입니다.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - 시스템 설계를 소개하는 선별된 주제 목록입니다.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - 그로킹 시스템 설계 준비 과정은 가장 많이 회자되는 과정 중 하나입니다. 가장 좋은 점은 각 도구가 수행해야 하는 작업에 대한 설명보다는 제안하는 응용 프로그램의 디자인입니다.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - 시스템 설계 및 아키텍처 주제에 대한 기본 기사입니다.

- [System Design](https://www.interviewbit.com/courses/system-design/) - 입문 면접 준비 자료.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - 고려해야 할 몇 가지 패턴과 몇 가지 기술에 대해 설명하는 기사입니다.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - AI와의 인터뷰처럼 시스템 설계 문제를 대화식으로 연습할 수 있는 도구입니다. 성과를 평가하는 반복적인 피드백과 최종 평가가 있습니다.

## 고급

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - 분산 시스템 설계의 관점을 넓힌 Wikipedia 기사.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 분산 컴퓨팅의 오류와 그 효과에 대한 주제를 소개하는 Wikipedia 기사입니다.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - 위에서 언급한 오류에 대해 자세히 설명합니다.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - CAP 정리, 마이크로서비스 및 NoSQL DB에 관한 IBM 기사입니다.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - 마이크로서비스 아키텍처와 그 단점에 대해 설명하는 좋은 기사입니다.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 분산 시스템을 분류하고 특히 이것이 필요한 이유를 설명하는 11페이지 강의입니다.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - 코드 보안에 대한 모범 사례에 대해 설명하는 간략한 기사입니다.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - 분산 시스템과 일부 잠재적인 도구에 대한 좋은 기사입니다.

---

# 도서

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - 분산 시스템에 대해 이야기하고 그 모습에 대한 일부 코드를 가볍게 시연하는 책입니다.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - 분산 시스템으로 작업할 때 사용하는 다양한 리소스와 그것이 어떻게 탄생했는지, 어떤 문제를 해결하려는지 심층적으로 설명합니다.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - 네트워크 기본 사항, 분산 시스템을 뒷받침하는 이론, 확장 가능한 시스템의 아키텍처 패턴, 장애로부터 시스템을 강화하는 안정성 패턴, 소규모 팀으로 대규모 시스템을 유지 관리하는 방법에 대한 운영 모범 사례 등 분산 시스템의 핵심 측면을 다룹니다.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - 마이크로서비스를 사용한 시스템 아키텍처 설계에 대해 심도 있게 설명하는 멋진 책에는 이와 관련하여 가장 관련성이 높은 주제가 포함되어 있습니다.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - 위와 같은 저자가 쓴 이 책은 Monolith에서 Microservices로의 마이그레이션을 다루므로 이전 책부터 시작하는 것이 좋습니다.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - 분산 시스템에 대한 훌륭한 개요와 심층적인 소개입니다. 중급 독자에게 권장됩니다.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - 설계에 따른 코드 정확성 강화에 관한 훌륭한 책입니다.

---

# 동영상

분산 시스템 관련 동영상 모음입니다.

## 소개 / 인터뷰

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - 시스템 설계에 대해 더 많이 배우고 싶은 사람들을 위한 좋은 자료로, 매우 이해하기 쉬운 방식으로 주제를 소개합니다.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - 시스템 설계에 대한 또 다른 소개입니다.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - 결함이 있지만 요구 사항을 완벽하게 충족한다는 관점에서 시스템 설계에 대한 인터뷰가 어떻게 보이는지에 대한 개요입니다. 여기서 중요한 것은 면접관과의 상호 작용이 어떻게 진행되는지입니다.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - 인터뷰 방법을 설명하는 간단한 비디오입니다.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - 다양한 문제에 대한 자세한 설명과 함께 시스템 설계 인터뷰 관련 콘텐츠에 초점을 맞춘 YouTube 채널입니다.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - 시스템 디자인 인터뷰에 대한 좋은 정보가 담긴 Jackson Gabbard의 YouTube 동영상입니다.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Tushar의 시스템 설계 소개.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Chris Colohan이 만든 분산 시스템 입문 강좌입니다. 그는 Carnegie Mellon에서 박사 학위를 취득한 후 Google에서 분산 시스템 구축에 10년을 보냈습니다.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - 분산 시스템에 대한 이해하기 쉬운 비디오를 제공하는 최신 채널입니다.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - 시스템 디자인 인터뷰를 준비하는 사람들을 위한 좋은 리소스로, 다양한 시스템 디자인 모의 인터뷰와 심층 분석이 있습니다.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - 또 다른 훌륭한 무료 리소스인 자주 묻는 인터뷰 질문 목록입니다.

## 고급

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Reddit 시스템 디자인이 어떻게 확장되었는지에 대한 개요입니다.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - MIT 분산 시스템에 관한 대학원 수준 과정(2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - UCSC 분산 시스템 학부 과정(2020).

# 도구

- 분산 시스템에서 가장 많이 사용되는 도구 모음

## 관계형 데이터베이스 관리 시스템

- [MariaDB](https://mariadb.org/) - MariaDB는 MySQL 서버의 포크입니다.

- [MySQL](https://dev.mysql.com/) - 널리 사용되는 관계형 데이터베이스.

- [PostgresSQL](https://www.postgresql.org/) - 인기를 얻고 있는 관계형 데이터베이스.

- [SQLite](https://www.sqlite.org/index.html) - 모든 휴대폰과 대부분의 컴퓨터에 내장되어 널리 사용되는 또 다른 데이터베이스입니다.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - 널리 사용되는 관계형 데이터베이스.

## NoSQL

### 캐시(키-값)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - ACID 속성을 사용한 메모리 캐싱.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - memcached에서 영감을 받아 복제 및 지속성과 같은 기능을 추가했습니다.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - 높은 확장성, 낮은 대기 시간의 메모리 내 캐싱.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - 최초의 인메모리 캐싱 데이터베이스 중 하나이며 고성능 및 다중 스레드를 지원합니다.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - 영구 저장소 및 지원 문자열, 목록, 세트, 해시, 스트림, 비트맵 등과 같은 많은 추가 기능을 갖춘 널리 사용되는 인 메모리 캐싱 데이터베이스입니다.

### 저장소(키-값)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - 다중 모델(단일 데이터베이스의 많은 데이터 유형), ACID 키-값 저장소. 쉽게 확장 가능하고 내결함성이 있습니다.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft의 전 세계적으로 분산된 다중 모델 데이터베이스 서비스입니다. 처리량과 스토리지를 동적이고 독립적으로 확장합니다. SQL, MongoDB, Cassandra, 테이블, Gremlin 및 Spark API.

### 문서 저장소

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - ACID를 준수하는 NoSQL 문서 저장소 DB는 데이터베이스 문서를 읽고 업데이트하기 위한 RESTful HTTP API를 제공합니다.

- [MongoDB](https://www.mongodb.com/) - 범용으로 가장 널리 사용되는 'NoSQL' 데이터베이스 중 하나입니다.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - 문서저장DB.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - 빠르고 확장 가능한 검색 엔진을 위해 널리 사용되는 'NoSQL' 데이터베이스입니다.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft의 전 세계적으로 분산된 다중 모델 데이터베이스 서비스입니다. 처리량과 스토리지를 동적이고 독립적으로 확장합니다. SQL, MongoDB, Cassandra, 테이블, Gremlin 및 Spark API.

### 와이드 컬럼 저장소

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - 키-값 및 문서 데이터베이스는 성능이 뛰어나고 확장 가능하며 안전합니다.

- [Google Bigtable](https://cloud.google.com/bigtable) - 대규모 분석 및 운영 워크로드를 위한 확장 가능하고 성능이 뛰어난 'NoSQL' 데이터베이스입니다.

- [Cassandra](https://cassandra.apache.org/) - Facebook에서 탄생한 프로젝트는 매우 빠르고 쉽게 확장 가능하며 각 작업에 일관성을 포함하는 옵션이 있습니다.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Cassandra와 호환되는 seastar 프레임워크를 사용하는 'NoSQL' 데이터 저장소입니다.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Google의 Bigtable을 모델로 하고 Java로 작성되었습니다. Apache Hadoop 프로젝트의 일부로 개발되었으며 HDFS 또는 Alluxio 위에서 실행됩니다. ([Hadoop Related](##hadoop-related) 참조)

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft의 전 세계적으로 분산된 다중 모델 데이터베이스 서비스입니다. 처리량과 스토리지를 동적이고 독립적으로 확장합니다. SQL, MongoDB, Cassandra, 테이블, Gremlin 및 Spark API.

### 그래프

- [Amazon Neptune](https://aws.amazon.com/neptune/) - 빠르고 안정적이며 완벽하게 관리되는 그래프 데이터베이스 서비스입니다.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - 문서, 키-값, 그래프를 위한 유연한 데이터베이스입니다. 자체 쿼리 언어인 AQL을 사용합니다.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - 그래프 DB에 대한 우수한 지원, ACID 준수 및 유연성.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Microsoft의 전 세계적으로 분산된 다중 모델 데이터베이스 서비스입니다. 처리량과 스토리지를 동적이고 독립적으로 확장합니다. SQL, MongoDB, Cassandra, 테이블, Gremlin 및 Spark API.

## 분산 파일 시스템

- [HDFS](https://hadoop.apache.org/) - Hadoop 파일 시스템은 높은 처리량 액세스를 제공하여 빅 데이터 경쟁업체 사이에서 널리 선택됩니다.

- [Lustre](http://lustre.org/) - 컴퓨터 클러스터용 파일 시스템.

- [CephFS](https://ceph.io/) - 통합된 분산 스토리지 시스템.

- [GlusterFS](https://www.gluster.org/) - 확장형 NAS 파일 시스템.

- [MooseFS](https://moosefs.com/) - POSIX 호환 분산 파일 시스템.

- [XtreemFS](http://www.xtreemfs.org/) - 내결함성 파일 시스템.

## 리소스 관리

- [Kubernetes](https://kubernetes.io/) - 베어메탈 또는 가상 서버에서 컨테이너 클러스터를 배포, 관리 및 자동 확장하는 매우 널리 사용되는 방법입니다.

## 스트림 처리

- [Apache Samza](http://samza.apache.org/) - Kafka를 포함한 여러 소스의 데이터를 실시간으로 처리하는 상태 저장 애플리케이션을 구축하세요. 쉽고 저렴한 다중 가입자 모델은 배압을 제거할 수 있으며 대기 시간이 짧고 안정적인 지속성을 제공합니다.

- [Apache Flink](https://flink.apache.org/) - 스트림과 변환의 개념을 기반으로 합니다. Maven을 사용하고 배치 작업을 유한한 경계가 있는 데이터 스트림으로 처리합니다. 낮은 대기 시간, 높은 처리량.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - 내구성이 뛰어나고 확장 가능한 실시간 서비스입니다. 데이터베이스 이벤트 스트림, 웹 사이트 클릭 스트림, 금융 거래 등을 포함하여 수십만 개의 소스에서 초당 기가바이트의 데이터를 수집합니다.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - 미션 크리티컬 워크로드를 위해 설계된 실시간 분석 서비스입니다.

## 메시지 브로커

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Amazon의 오픈 소스 메시지 브로커.

- [Apache ActiveMQ](https://activemq.apache.org/) - 다중 프로토콜, Java 기반 메시징 서버입니다.

- [Apache Kafka](https://kafka.apache.org/) - 데이터 스트리밍에 대한 대기 시간이 짧은 널리 사용되는 메시지 브로커입니다.

- [RabbitMQ](https://www.rabbitmq.com/) - 경량으로 널리 인기를 얻고 있는
  여러 메시징 프로토콜도 지원하는 erlang으로 작성된 메시지 브로커입니다.

- [IronMQ](https://www.iron.io/mq) - 매우 빠르고 확장성이 뛰어난 메시징 브로커입니다. (오픈소스 아님)

- [Apache Pulsar](https://pulsar.apache.org/) - Yahoo에서 제작했으며 확장성이 뛰어나고 대기 시간이 짧으며 지역 복제 및 다중 테넌시가 가능합니다.

- [Kestrel](https://github.com/twitter-archive/kestrel) - Scala로 작성되었으며 memcached 프로토콜을 사용합니다. Kafka와 매우 유사하게 작동합니다.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - 완전 관리형 엔터프라이즈 통합 메시지 브로커입니다.

## 로드 밸런서

### 오픈 소스 소프트웨어

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Google에서 사용하며 Go에서 개발한 Linux 기반 가상 로드 밸런서 서버입니다.

- [HAProxy](https://www.haproxy.org/) - 널리 사용되는 옵션으로 고가용성, 프록시, TCP/HTTP 로드 밸런싱을 제공합니다. Reddit, Imgur, MaxCDN, GitHub, AirBNB에서 사용됩니다.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - L3, L4, L7을 지원합니다. docker repo를 이용하면 쉽게 설치할 수 있습니다. 고급 상태 점검 모니터링을 지원합니다.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Scala 및 Netty로 구축된 eBay에서 사용됩니다. 라운드 로빈 및 최소 연결 알고리즘을 지원합니다.

- [Nginx](https://www.nginx.com/) - 잠깐, Nginx는 웹 서버가 아닌가요? 예, 오픈 소스는 기본 수준의 콘텐츠 전환 및 요청 라우팅을 지원합니다. Plus 에디션은 로드 밸런싱, WAF, 모니터링 등을 지원합니다.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, 완벽한 조합입니다.

### 하드웨어

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - 여러 프로토콜(IP, TCP, FTP, UDP, HTTP)을 지원하는 강력한 하드웨어 로드 밸런서 옵션입니다.

- [TP-Link](https://www.tp-link.com/) - 로드 밸런서로 작동하는 더 저렴한 대안입니다.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - 사내 서버의 경우 로드 밸런싱을 위한 최고의 선택 중 하나입니다. 데이터 손실 방지를 위한 내장된 최고의 보안 조치, 포괄적인 보고서 및 아웃바운드 트래픽 모니터링.

### 클라우드

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Amazon 고객에게 인기 있는 선택으로, 확장성이 뛰어난 람다 기능을 지원합니다.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Google 고객에게 인기 있는 선택으로 자동 확장 기능이 제공되고 매우 빠르며 CDN이 통합되어 있습니다.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Cloudflare의 확장 가능한 로드 밸런싱은 빠른 장애 조치와 대시보드를 갖추고 있습니다.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Digitalocean 고객이라면 이는 매우 저렴하고 지역적 가용성이 뛰어나고 확장 가능하며 다른 드롭릿에 쉽게 배포할 수 있는 좋은 옵션입니다.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Microsoft의 Azure 고객에게 인기 있는 선택입니다. 내부 및 외부 트래픽, ipv6, 모니터링 및 표준 로드 밸런싱 기능 세트를 지원합니다.

## Hadoop 생태계

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### 대시보드

- [Ambari](https://ambari.apache.org/) - Hadoop 관련 기술 대부분을 통합하여 관리 및 실행이 용이한 대시보드입니다.

### 데이터 수집

- [Sqoop](https://sqoop.apache.org/) - Hadoop과 관계형 데이터베이스 등 구조화된 데이터 저장소 간에 데이터를 효율적으로 전송합니다.

- [Flume](https://flume.apache.org/) - 대량의 로그 데이터를 수집, 집계 및 이동하는 데 분산되고 가용성이 높으며 효율적입니다.

- [Apache Kafka](https://kafka.apache.org/) - 데이터 스트리밍에 대한 대기 시간이 짧은 널리 사용되는 메시지 브로커입니다.

### 워크플로 스케줄러

- [Oozie](https://oozie.apache.org/) - 다른 hadoop 생태계 애플리케이션의 작업을 단계별로 실행하기 위해 XML로 워크플로를 생성하고 병렬 실행도 허용합니다.

### 쿼리

- [Hive](https://hive.apache.org/) - hadoop에 저장된 데이터를 SQL에 쿼리합니다.
- [Pig](https://pig.apache.org/) - hadoop 데이터를 쿼리하기 위해 SQL처럼 보이는 스크립핑 언어입니다.

### 처리

- [Tez](https://tez.apache.org/) - Spark 및 MapReduce와 유사한 문제를 해결합니다. 가장 효율적인 방법을 계산하기 때문에 MapReduce보다 더 효율적입니다.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce는 이름에서 알 수 있듯이 데이터를 매핑하고 결과를 줄입니다.
- [Spark](https://spark.apache.org/) - Tez(및 MapReduce)와 같은 데이터를 처리할 뿐만 아니라 실시간으로 데이터 스트림을 처리하고 ML에 회귀 분석 알고리즘을 적용할 수 있는 강력한 데이터 처리 기능입니다.
- [Apex](https://apex.apache.org/) - \*종료된 프로젝트이며 스트림 및 일괄 처리를 통합하는 YARN 기반 플랫폼입니다.

### 데이터베이스

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Google의 Bigtable을 모델로 하고 Java로 작성되었습니다. Apache Hadoop 프로젝트의 일부로 개발되었습니다.

### 리소스 관리

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - 'Yet Another Resource Negotiator'는 커널처럼 작동하여 클러스터 전체의 컴퓨터 리소스를 관리합니다.
- [MESOS](http://mesos.apache.org/) - 클러스터 전체에서 CPU, 메모리, 스토리지 및 기타 리소스를 관리하여 Linux 커널처럼 작동합니다.

## REST 프레임워크

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Golang을 사용하는 엄청나게 빠른 마이크로서비스 프레임워크, 높은 처리량.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - 분산 처리, 쉽게 확장 가능, 채널 및 라이브 채팅 지원. Elixir로 작성된 이 프레임워크는 BEAM 및 Erlang을 사용하여 대규모 시스템에 매우 효율적이며 높은 처리량을 지원합니다.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - 다양한 시나리오에서 잘 작동할 수 있는 빠른 node.js 나머지 API입니다.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Ruby로 작성된 Rails는 프로토타입부터 프로덕션까지 효율적인 방식으로 빠른 API를 제공합니다.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - 기본적으로 RESTful인 Scala/Java로 작성된 매우 빠르고 높은 처리량의 프레임워크입니다.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - 빠른 프로토타이핑 및 제작을 위한 경량 Python 마이크로프레임워크입니다.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Flask에서 영감을 얻었지만 Python 비동기를 사용하여 더욱 현대적인 경량 Python 마이크로프레임워크입니다.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Python으로 작성된 Django Rest는 강력하고 유연한 REST API입니다. 효율성과 출시 기간은 Rails와 유사합니다.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - C# 또는 F#의 모델-뷰-컨트롤러 디자인 패턴을 사용하여 웹앱 및 API를 구축하기 위한 풍부한 프레임워크입니다. 웹 프레임워크용 [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite)의 6번입니다.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - 최소한의 오버헤드와 강력한 플러그인 아키텍처로 최고의 개발자 경험을 제공하는 데 중점을 둔 Node.js 웹 프레임워크입니다.
