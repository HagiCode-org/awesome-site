<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
Если вам понравился материал 📖, поддержите проект и поставьте 👍| ⭐| 👏

Подборка статей, книг, видео и инструментов по распределённым системам и большим данным.

Этот список поможет вам как при подготовке к собеседованию, так и при проектировании распределённого приложения или приложения на микросервисах.

Обратите внимание: число звёзд на GitHub не отражает частоту использования или популярность каждого пункта списка.

Создан по мотивам [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

Создатель — Gabriel Leon de Mattos

## Содержание

[Статьи](#articles)

[Книги](#books)

[Видео](#videos)

[Инструменты](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [Распределённые файловые системы](#Distributed-File-Systems)
- [Управление ресурсами](#Resource-Management)
- [Потоковая обработка](#Stream-Processing)
- [Брокер сообщений](#Message-Broker)
- [Балансировщики нагрузки](#Load-Balancers)
- [Экосистема Hadoop](#Hadoop-Ecosystem)
- [REST-фреймворк](#REST-Framework)

[Дополнительно](#bonus)

# Статьи

## Введение / собеседования

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Потрясающая подборка ресурсов, включая колоды карточек Anki.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - Тщательно подобранный список тем, которые познакомят вас с проектированием систем.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - Курс Grokking System Design — один из самых обсуждаемых. Самое лучшее в нем — это дизайн предлагаемых приложений, а не объяснения того, что должен делать каждый инструмент.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - Основная статья по темам системного проектирования и архитектуры.

- [System Design](https://www.interviewbit.com/courses/system-design/) - Вводные ресурсы для подготовки к собеседованию.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - В статье рассказывается о некоторых шаблонах, а также о некоторых технологиях, которые следует учитывать.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - Инструмент, который позволяет вам интерактивно практиковать проблемы проектирования систем, например, интервью с ИИ. Существует повторяющаяся обратная связь и окончательная оценка, которая оценивает вашу работу.

## Продвинутый уровень

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - Статья в Википедии, расширяющая представление о проектировании распределенных систем.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - Статья в Википедии, знакомящая с темой заблуждений распределенных вычислений и их последствий.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - Подробное объяснение заблуждений, упомянутых выше.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - Статья IBM о теореме CAP, микросервисах и базах данных NoSQL.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - Хорошая статья, рассказывающая о микросервисной архитектуре, а также ее недостатках.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 11-страничная лекция, классифицирующая распределенные системы и, в частности, зачем они нам нужны.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - Краткая статья о передовой практике кодирования ценных бумаг.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - Хорошая статья о распределенных системах, а также о некоторых потенциальных инструментах.

---

# Книги

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - Книга, в которой рассказывается о распределенных системах, а также в легкой форме демонстрируется код того, как они выглядят.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - Подробно объясняет различные ресурсы, которые мы используем при работе с распределенными системами, а также то, как они появились и какие проблемы призваны решить.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - Охватывает основные аспекты распределенных систем, такие как: основы сети, теория, лежащая в основе распределенных систем, архитектурные шаблоны масштабируемых систем, шаблоны стабильности, которые защищают системы от сбоев, а также передовые методы работы по обслуживанию крупномасштабных систем небольшой командой.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - Потрясающая книга, в которой подробно рассказывается о проектировании системной архитектуры с использованием микросервисов, и включает в себя наиболее актуальные темы в этом отношении.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - В этой книге, написанной тем же автором, что и выше, будет рассмотрен переход от Monolith к микросервисам. Рекомендуется начать с предыдущей книги.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - Отличный обзор и подробное введение в распределенные системы. Рекомендуется для читателей среднего уровня.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - Отличная книга о том, как обеспечить правильность кода с помощью дизайна.

---

# Видео

Подборка видео о распределённых системах.

## Введение / собеседования

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Хороший ресурс для людей, которые хотят узнать больше о проектировании систем, в очень простой для понимания форме излагает эту тему.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Еще одно введение в системный дизайн.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - Обзор того, как будет выглядеть собеседование по проектированию системы с точки зрения ущербного, но близкого выполнения требований. Ключевым моментом здесь является то, как проходит взаимодействие с интервьюером.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - Небольшое видео, объясняющее, как они берут интервью.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - Канал YouTube посвящен интервью, посвященным проектированию систем, с подробным объяснением различных проблем.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Видео на YouTube с Джексоном Габбардом, содержащее полезную информацию об интервью по проектированию систем.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Введение Тушара в системный дизайн.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Это вводный курс по распределенным системам, созданный Крисом Колоханом. Он получил докторскую степень в Карнеги-Меллоне, затем 10 лет работал в Google над созданием распределенных систем.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - Развивающийся канал с понятными видеороликами о распределенных системах.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - Хороший ресурс для людей, которые готовятся к собеседованиям по проектированию систем. Здесь есть несколько пробных собеседований по проектированию систем и глубокие погружения.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - Еще один замечательный бесплатный ресурс — список часто задаваемых вопросов на собеседовании.

## Продвинутый уровень

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Обзор того, как масштабируется дизайн системы Reddit.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - Курс для аспирантов по распределенным системам от Массачусетского технологического института (2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - Бакалавриат по распределенным системам от UCSC (2020).

# Инструменты

- Подборка наиболее часто используемых инструментов для распределённых систем

## Реляционная система управления базами данных

- [MariaDB](https://mariadb.org/) - MariaDB — это форк сервера MySQL.

- [MySQL](https://dev.mysql.com/) - Широко используемая реляционная база данных.

- [PostgresSQL](https://www.postgresql.org/) - Реляционная база данных, которая набирает популярность.

- [SQLite](https://www.sqlite.org/index.html) - Еще одна широко используемая база данных, встроенная во все мобильные телефоны и большинство компьютеров.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - Широко используемая реляционная база данных.

## NoSQL

### Кэш (ключ-значение)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - В кэше памяти со свойствами ACID.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - Вдохновленный memcached, добавлены такие функции, как репликация и сохранение.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - Высокое масштабирование и кэширование в памяти с низкой задержкой.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - Одна из первых баз данных с кэшированием в памяти, высокопроизводительная и многопоточная.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - Широко используемая база данных кэширования в памяти со множеством дополнительных функций, таких как постоянное хранилище и поддержка строк, списков, наборов, хэшей, потоков, растровых изображений и т. д.

### Хранилище (ключ-значение)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - Мультимодель (множество типов данных в одной базе данных), хранилище ключей-значений ACID. Легко масштабируемый и отказоустойчивый.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Глобально распределенная многомодельная служба баз данных Microsoft. Восточное и независимое масштабирование пропускной способности и хранилища. API-интерфейсы SQL, MongoDB, Cassandra, Tables, Gremlin и Spark.

### Документное хранилище

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - База данных хранилища документов NoSQL, совместимая с ACID, предоставляет RESTful HTTP API для чтения и обновления документов базы данных.

- [MongoDB](https://www.mongodb.com/) - Одна из самых популярных баз данных NoSQL общего назначения.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - БД хранилища документов.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - Широко популярная база данных NoSQL для быстрых и масштабируемых поисковых систем.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Глобально распределенная многомодельная служба баз данных Microsoft. Восточное и независимое масштабирование пропускной способности и хранилища. API-интерфейсы SQL, MongoDB, Cassandra, Tables, Gremlin и Spark.

### Ширококолоночное хранилище

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - База данных «ключ-значение» и документов, высокопроизводительная, масштабируемая и безопасная.

- [Google Bigtable](https://cloud.google.com/bigtable) - Масштабируемая и производительная база данных NoSQL для больших аналитических и операционных задач.

- [Cassandra](https://cassandra.apache.org/) - Проект, созданный на Facebook, очень быстрый, легко масштабируемый, с возможностью обеспечения согласованности каждой операции.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Хранилище данных NoSQL с использованием платформы seastar, совместимой с Cassandra.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Создан по образцу Bigtable от Google и написан на Java. Разработан как часть проекта Apache Hadoop и работает поверх HDFS или Alluxio. (См. [Hadoop Related](##hadoop-related))

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Глобально распределенная многомодельная служба баз данных Microsoft. Восточное и независимое масштабирование пропускной способности и хранилища. API-интерфейсы SQL, MongoDB, Cassandra, Tables, Gremlin и Spark.

### Графы

- [Amazon Neptune](https://aws.amazon.com/neptune/) - Быстрый, надежный и полностью управляемый сервис графовой базы данных.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - Гибкая база данных для документов, ключей-значений, графиков. Использует собственный язык запросов AQL.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - Хорошая поддержка графической базы данных, совместимая с ACID и гибкая.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Глобально распределенная многомодельная служба баз данных Microsoft. Восточное и независимое масштабирование пропускной способности и хранилища. API-интерфейсы SQL, MongoDB, Cassandra, Tables, Gremlin и Spark.

## Распределённые файловые системы

- [HDFS](https://hadoop.apache.org/) - Файловая система Hadoop — широко популярный выбор среди конкурентов в области больших данных, поскольку она обеспечивает доступ с высокой пропускной способностью.

- [Lustre](http://lustre.org/) - Файловая система для компьютерных кластеров.

- [CephFS](https://ceph.io/) - Единая, распределенная система хранения.

- [GlusterFS](https://www.gluster.org/) - Масштабируемая файловая система NAS.

- [MooseFS](https://moosefs.com/) - Распределенная файловая система, совместимая с POSIX.

- [XtreemFS](http://www.xtreemfs.org/) - Отказоустойчивая файловая система.

## Управление ресурсами

- [Kubernetes](https://kubernetes.io/) - Очень популярный способ развертывания, управления и автоматического масштабирования кластера контейнеров на физических или виртуальных серверах.

## Потоковая обработка

- [Apache Samza](http://samza.apache.org/) - Создавайте приложения с отслеживанием состояния, которые обрабатывают данные в режиме реального времени из нескольких источников, включая Kafka. Простая и недорогая модель с несколькими абонентами, позволяющая устранить противодавление и обеспечивающая надежную устойчивость с низкой задержкой.

- [Apache Flink](https://flink.apache.org/) - На основе концепции потоков и трансформаций. Использует maven, обрабатывает пакетные задачи как потоки данных с конечными границами. Низкая задержка, высокая пропускная способность.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - Надежное, масштабируемое обслуживание в режиме реального времени. Собирает гигабайты данных в секунду из сотен тысяч источников, включая потоки событий базы данных, потоки посещений веб-сайтов, финансовые транзакции и т. д.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - Служба аналитики в реальном времени, предназначенная для критически важных рабочих нагрузок.

## Брокер сообщений

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Брокер сообщений с открытым исходным кодом от Amazon.

- [Apache ActiveMQ](https://activemq.apache.org/) - Это многопротокольный сервер обмена сообщениями на основе Java.

- [Apache Kafka](https://kafka.apache.org/) - Широко популярный брокер сообщений с низкой задержкой при потоковой передаче данных.

- [RabbitMQ](https://www.rabbitmq.com/) - Широко популярный легкий
  брокер сообщений, написанный на erlang, который также поддерживает несколько протоколов обмена сообщениями.

- [IronMQ](https://www.iron.io/mq) - Очень быстрый и масштабируемый брокер обмена сообщениями. (не с открытым исходным кодом)

- [Apache Pulsar](https://pulsar.apache.org/) - Создано Yahoo, также обладает высокой масштабируемостью, низкой задержкой, георепликацией и многоуровневостью.

- [Kestrel](https://github.com/twitter-archive/kestrel) - Написан на Scala и использует протокол memcached. Это работает так же, как Кафка.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Полностью управляемый брокер сообщений корпоративной интеграции.

## Балансировщики нагрузки

### Программное обеспечение с открытым исходным кодом

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Используется Google, разработанный на Go, виртуальный сервер балансировки нагрузки на базе Linux.

- [HAProxy](https://www.haproxy.org/) - Широко популярный вариант, обеспечивающий высокую доступность прокси-сервера и балансировку нагрузки TCP/HTTP. Используется Reddit, Imgur, MaxCDN, GitHub, AirBNB.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - Поддерживает L3, L4 и L7. Простая установка с помощью репозитория докера. Поддерживает расширенный мониторинг работоспособности.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Используется eBay, создан с помощью Scala и Netty. Поддерживает алгоритмы циклического перебора и наименьшего количества соединений.

- [Nginx](https://www.nginx.com/) - Подождите, разве Nginx не является веб-сервером? Да, открытый исходный код поддерживает базовый уровень переключения контента и маршрутизации запросов. Версия Plus поддерживает балансировку нагрузки, WAF, мониторинг и т. д.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, идеальное сочетание.

### Оборудование

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - Надежный аппаратный балансировщик нагрузки, поддерживающий несколько протоколов (IP, TCP, FTP, UDP, HTTP).

- [TP-Link](https://www.tp-link.com/) - Более дешевая альтернатива, работающая как балансировщик нагрузки.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - Один из лучших вариантов балансировки нагрузки, когда речь идет о внутренних серверах. Встроенные высочайшие меры безопасности, подробные отчеты и мониторинг исходящего трафика для предотвращения потери данных.

### Облако

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Популярный выбор среди клиентов Amazon, поддерживает лямбда-функции, хорошо масштабируется.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Популярный выбор среди клиентов Google, имеет функцию автоматического масштабирования, очень быстрый, имеет встроенный CDN.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Масштабируемая балансировка нагрузки с помощью Cloudflare, функция быстрого переключения при сбое и панель мониторинга.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Если вы являетесь клиентом Digitalocean, это хороший вариант, очень дешевый, доступный в регионе, масштабируемый, простой в развертывании среди других ваших капель.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Популярный выбор среди клиентов Microsoft Azure. Поддерживает внутренний и внешний трафик, ipv6, мониторинг и стандартный набор функций балансировки нагрузки.

## Экосистема Hadoop

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### Панель управления

- [Ambari](https://ambari.apache.org/) - Панель мониторинга, которая объединяет большинство технологий, связанных с Hadoop, для простоты управления и выполнения.

### Загрузка данных

- [Sqoop](https://sqoop.apache.org/) - Эффективно передавайте данные между Hadoop и структурированными хранилищами данных, такими как реляционные базы данных.

- [Flume](https://flume.apache.org/) - Распределенная, высокодоступная и эффективная система сбора, агрегирования и перемещения больших объемов данных журналов.

- [Apache Kafka](https://kafka.apache.org/) - Широко популярный брокер сообщений с низкой задержкой при потоковой передаче данных.

### Планировщик рабочих процессов

- [Oozie](https://oozie.apache.org/) - Создавайте рабочие процессы в XML для поэтапного выполнения заданий (из других приложений экосистемы Hadoop), а также допускайте параллельное выполнение.

### Запросы

- [Hive](https://hive.apache.org/) - Запросите данные Hadoop, хранящиеся в SQL.
- [Pig](https://pig.apache.org/) - Язык сценариев, похожий на SQL, для запроса данных Hadoop.

### Обработка

- [Tez](https://tez.apache.org/) - Решает проблему, аналогичную Spark и MapReduce, она более эффективна, чем MapReduce, поскольку вычисляет наиболее эффективный способ ее решения.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce, как следует из названия, отображает данные и сокращает результаты.
- [Spark](https://spark.apache.org/) - Мощная обработка данных, позволяющая не только обрабатывать данные, такие как Tez (и MapReduce), но и обрабатывать потоки данных в реальном времени, применять алгоритмы регрессионного анализа в машинном обучении и многое другое.
- [Apex](https://apex.apache.org/) - \*Устаревший проект. Это собственная платформа YARN, которая объединяет потоковую и пакетную обработку.

### База данных

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Создан по образцу Bigtable от Google и написан на Java. Разработан в рамках проекта Apache Hadoop.

### Управление ресурсами

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - «Еще один переговорщик ресурсов» работает как ядро для управления компьютерными ресурсами в кластерах.
- [MESOS](http://mesos.apache.org/) - Работает как ядро Linux, управляя процессором, памятью, хранилищем и другими ресурсами в кластере.

## REST-фреймворк

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Невероятно быстрая микросервисная среда с использованием Golang и высокой пропускной способностью.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - Распределенная обработка, легко масштабируемая, поддержка каналов и чата. Эта среда, написанная на Elixir, использует BEAM и Erlang, очень эффективна для крупномасштабных систем и поддерживает высокую пропускную способность.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - Быстрый API для отдыха node.js, который может хорошо работать во многих сценариях.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Написанный на Ruby, Rails эффективно обеспечивает быстрый API от прототипа до производства.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Очень быстрая платформа с высокой пропускной способностью, написанная на Scala/Java и по умолчанию использующая RESTful.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - Легкая микроплатформа Python для быстрого прототипирования и производства.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Облегченная микроплатформа Python, вдохновленная Flask, но более современная, использующая асинхронный код Python.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Написанный на Python, Django Rest представляет собой мощный и гибкий REST API. Эффективность и время выхода на рынок напоминают Rails.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - Богатая платформа для создания веб-приложений и API с использованием шаблона проектирования Модель-Представление-Контроллер на C# или F#. Номер 6 на [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) для веб-платформ.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Веб-фреймворк Node.js, ориентированный на обеспечение наилучших условий для разработчиков с наименьшими затратами и мощной архитектурой плагинов.
