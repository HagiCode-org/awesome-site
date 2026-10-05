<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
Wenn dir die Inhalte gefallen 📖, unterstütze die Sichtbarkeit des Projekts mit 👍| ⭐| 👏

Auswahl von Artikeln, Büchern, Videos und Werkzeugen zu verteilten Systemen und Big Data.

Ganz gleich, ob du dich auf ein Vorstellungsgespräch vorbereitest oder eine verteilte beziehungsweise auf Microservices ausgerichtete Anwendung entwerfen möchtest – diese Liste hilft dir dabei.

Achtung: Die Anzahl der GitHub-Sterne spiegelt nicht die Nutzung oder Popularität aller hier aufgeführten Einträge wider.

Inspiriert von [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

Gestartet von Gabriel Leon de Mattos

## Inhalt

[Artikel](#articles)

[Bücher](#books)

[Videos](#videos)

[Werkzeuge](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [Verteilte Dateisysteme](#Distributed-File-Systems)
- [Ressourcenverwaltung](#Resource-Management)
- [Stream-Verarbeitung](#Stream-Processing)
- [Message Broker](#Message-Broker)
- [Load Balancer](#Load-Balancers)
- [Hadoop-Ökosystem](#Hadoop-Ecosystem)
- [REST-Framework](#REST-Framework)

[Bonus](#bonus)

# Artikel

## Einführung / Interviews

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Tolle Zusammenstellung von Ressourcen, einschließlich Anki-Lernkartendecks.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - Eine kuratierte Themenliste, die Sie in das Systemdesign einführt.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - Die Vorbereitung auf Grokking System Design ist einer der am meisten diskutierten Kurse. Das Beste daran ist das Design der vorgeschlagenen Anwendungen und nicht die Erklärung, was jedes Tool tun soll.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - Grundlagenartikel zu den Themen Systemdesign und Architektur.

- [System Design](https://www.interviewbit.com/courses/system-design/) - Einführende Ressourcen zur Vorbereitung auf Vorstellungsgespräche.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - Artikel über einige Muster sowie einige zu berücksichtigende Technologien.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - Ein Tool, mit dem Sie Systemdesignprobleme wie ein Interview mit KI interaktiv üben können. Es gibt iteratives Feedback und eine abschließende Bewertung, die Ihre Leistung bewertet

## Fortgeschritten

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - Wikipedia-Artikel, der den Blickwinkel auf das Design verteilter Systeme erweitert.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - Wikipedia-Artikel zur Einführung in das Thema der Trugschlüsse des verteilten Rechnens und seiner Auswirkungen.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - Ausführliche Erläuterung der oben genannten Irrtümer.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - IBM-Artikel über CAP-Theorem, Microservices und NoSQL-DBs.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - Guter Artikel über die Microservice-Architektur und ihre Nachteile.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - 11-seitiger Vortrag zur Klassifizierung verteilter Systeme und insbesondere, warum wir sie brauchen.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - Kurzer Artikel über bewährte Praktiken für Code-Sicherheiten.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - Guter Artikel über verteilte Systeme sowie einige der möglichen Tools.

---

# Bücher

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - Buch, das über verteilte Systeme spricht und leicht Code demonstriert, wie es aussieht.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - Erläutert ausführlich die verschiedenen Ressourcen, die wir bei der Arbeit mit verteilten Systemen verwenden, erklärt, wie sie entstanden sind und welche Probleme sie lösen sollen.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - Behandelt die Kernaspekte verteilter Systeme, wie zum Beispiel: Netzwerkgrundlagen, die Theorie, die verteilten Systemen zugrunde liegt, Architekturmuster skalierbarer Systeme, Stabilitätsmuster, die Systeme gegen Ausfälle schützen, und betriebliche Best Practices für die Wartung großer Systeme mit einem kleinen Team.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - Tolles Buch, das ausführlich über das Entwerfen von Systemarchitekturen mit Microservices spricht und die relevantesten Themen in dieser Hinsicht enthält.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - Dieses Buch wurde vom selben Autor wie der oben genannte geschrieben und behandelt die Migration von Monolith zu Microservices. Es wird empfohlen, mit dem vorherigen Buch zu beginnen.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - Toller Überblick und ausführliche Einführung in verteilte Systeme. Empfohlen für Leser mit mittlerem Niveau.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - Tolles Buch über die Durchsetzung der Code-Korrektheit durch Design.

---

# Videos

Eine Videosammlung zu verteilten Systemen.

## Einführung / Interviews

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Gute Ressource für Leute, die mehr über Systemdesign erfahren möchten, führt das Thema auf sehr leicht verständliche Weise ein.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Eine weitere Einführung in das Systemdesign.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - Überblick darüber, wie ein Interview zum Thema Systemdesign aus der Perspektive einer fehlerhaften, aber genauen Erfüllung der Anforderungen aussehen würde. Entscheidend ist hier, wie die Interaktion mit dem Interviewer verläuft.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - Ein kurzes Video, das erklärt, wie sie interviewen.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - Der YouTube-Kanal konzentrierte sich auf Inhalte, die sich speziell auf Systemdesign-Interviews beziehen, mit ausführlichen Erläuterungen zu verschiedenen Problemen.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Ein YouTube-Video mit Jackson Gabbard mit guten Informationen zu Systemdesign-Interviews.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Tushars Einführung in das Systemdesign.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Dies ist ein Einführungskurs in verteilte Systeme von Chris Colohan. Er promovierte an der Carnegie Mellon und arbeitete dann zehn Jahre lang bei Google am Aufbau verteilter Systeme.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - Aufstrebender Kanal mit leicht verständlichen Videos über verteilte Systeme.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - Eine gute Ressource für Leute, die sich auf Systemdesign-Interviews vorbereiten. Es gibt mehrere Probeinterviews zum Systemdesign und ausführliche Einblicke.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - Eine weitere großartige kostenlose Ressource: eine Liste häufig gestellter Fragen im Vorstellungsgespräch.

## Fortgeschritten

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Überblick über die Skalierung des Reddit-Systemdesigns.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - Graduiertenkurs über verteilte Systeme vom MIT (2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - Grundstudiengang über verteilte Systeme an der UCSC (2020).

# Werkzeuge

- Eine Sammlung der am häufigsten verwendeten Werkzeuge für verteilte Systeme

## Relationales Datenbankmanagementsystem

- [MariaDB](https://mariadb.org/) - MariaDB ist ein Fork des MySQL-Servers.

- [MySQL](https://dev.mysql.com/) - Weit verbreitete relationale Datenbank.

- [PostgresSQL](https://www.postgresql.org/) - Relationale Datenbank, die immer beliebter wird.

- [SQLite](https://www.sqlite.org/index.html) - Eine weitere weit verbreitete Datenbank, die in allen Mobiltelefonen und den meisten Computern integriert ist.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - Weit verbreitete relationale Datenbank.

## NoSQL

### Cache (Schlüssel-Wert)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - In-Memory-Caching mit ACID-Eigenschaften.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - Inspiriert von Memcached, mit Funktionen wie Replikation und Persistenz.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - Hohe Skalierung, In-Memory-Caching mit geringer Latenz.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - Eine der ersten In-Memory-Caching-Datenbanken mit hoher Leistung und Multithreading.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - Weit verbreitete In-Memory-Caching-Datenbank mit vielen zusätzlichen Funktionen wie persistenter Speicherung und der Unterstützung von Strings, Listen, Sätzen, Hashes, Streams, Bitmaps usw.

### Speicher (Schlüssel-Wert)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - Multimodell (viele Datentypen in einer einzigen Datenbank), ACID-Schlüsselwertspeicher. Leicht skalierbar und fehlertolerant.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Der weltweit verteilte Multimodell-Datenbankdienst von Microsoft. Skalieren Sie Durchsatz und Speicher flexibel und unabhängig. SQL-, MongoDB-, Cassandra-, Tabellen-, Gremlin- ​​und Spark-APIs.

### Dokumentenspeicher

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - ACID-kompatible NoSQL-Dokumentspeicher-DB bietet eine RESTful-HTTP-API zum Lesen und Aktualisieren von Datenbankdokumenten.

- [MongoDB](https://www.mongodb.com/) - Eine der beliebtesten „NoSQL“-Datenbanken für allgemeine Zwecke.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - Dokumentenspeicher-DB.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - Weit verbreitete „NoSQL“-Datenbank für schnelle und skalierbare Suchmaschinen.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Der weltweit verteilte Multimodell-Datenbankdienst von Microsoft. Skalieren Sie Durchsatz und Speicher flexibel und unabhängig. SQL-, MongoDB-, Cassandra-, Tabellen-, Gremlin- ​​und Spark-APIs.

### Wide-Column-Speicher

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - Schlüsselwert- und Dokumentendatenbank, hochperformant, skalierbar und sicher.

- [Google Bigtable](https://cloud.google.com/bigtable) - Skalierbare und leistungsstarke „NoSQL“-Datenbank für große analytische und betriebliche Arbeitslasten.

- [Cassandra](https://cassandra.apache.org/) - Von Facebook entwickeltes Projekt, sehr schnell, leicht skalierbar, mit der Option, bei jedem Vorgang Konsistenz zu berücksichtigen.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - „NoSQL“-Datenspeicher mit Seastar-Framework, kompatibel mit Cassandra.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Nach dem Vorbild von Googles Bigtable modelliert und in Java geschrieben. Entwickelt als Teil des Apache Hadoop-Projekts und läuft auf HDFS oder Alluxio. (Siehe [Hadoop Related](##hadoop-related))

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Der weltweit verteilte Multimodell-Datenbankdienst von Microsoft. Skalieren Sie Durchsatz und Speicher flexibel und unabhängig. SQL-, MongoDB-, Cassandra-, Tabellen-, Gremlin- ​​und Spark-APIs.

### Graphen

- [Amazon Neptune](https://aws.amazon.com/neptune/) - Schneller, zuverlässiger und vollständig verwalteter Diagrammdatenbankdienst.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - Flexible Datenbank für Dokumente, Schlüsselwerte, Diagramme. Verwendet seine eigene Abfragesprache, AQL.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - Gute Unterstützung für eine Graph-Datenbank, ACID-kompatibel und flexibel.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Der weltweit verteilte Multimodell-Datenbankdienst von Microsoft. Skalieren Sie Durchsatz und Speicher flexibel und unabhängig. SQL-, MongoDB-, Cassandra-, Tabellen-, Gremlin- ​​und Spark-APIs.

## Verteilte Dateisysteme

- [HDFS](https://hadoop.apache.org/) - Das Hadoop-Dateisystem erfreut sich unter seinen Big-Data-Konkurrenten großer Beliebtheit und bietet Zugriff mit hohem Datendurchsatz.

- [Lustre](http://lustre.org/) - Dateisystem für Computercluster.

- [CephFS](https://ceph.io/) - Einheitliches, verteiltes Speichersystem.

- [GlusterFS](https://www.gluster.org/) - Scale-out-NAS-Dateisystem.

- [MooseFS](https://moosefs.com/) - POSIX-kompatibles verteiltes Dateisystem.

- [XtreemFS](http://www.xtreemfs.org/) - Fehlertolerantes Dateisystem.

## Ressourcenverwaltung

- [Kubernetes](https://kubernetes.io/) - Sehr beliebte Methode zur Bereitstellung, Verwaltung und automatischen Skalierung eines Clusters von Containern auf Bare-Metal- oder virtuellen Servern.

## Stream-Verarbeitung

- [Apache Samza](http://samza.apache.org/) - Erstellen Sie zustandsbehaftete Anwendungen, die Daten aus mehreren Quellen, einschließlich Kafka, in Echtzeit verarbeiten. Einfaches und kostengünstiges Multi-Abonnenten-Modell, kann Gegendruck beseitigen und bietet zuverlässige Beständigkeit mit geringer Latenz.

- [Apache Flink](https://flink.apache.org/) - Basierend auf dem Konzept von Streams und Transformationen. Verwendet Maven und verarbeitet Batch-Aufgaben als Datenströme mit endlichen Grenzen. Geringe Latenz, hoher Durchsatz.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - Langlebiger, skalierbarer Echtzeitdienst. Sammelt Gigabytes an Daten pro Sekunde aus Hunderttausenden Quellen, einschließlich Datenbank-Ereignisströmen, Website-Clickstreams, Finanztransaktionen usw.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - Echtzeit-Analysedienst, der für geschäftskritische Arbeitslasten konzipiert ist.

## Message Broker

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Open-Source-Nachrichtenbroker von Amazon.

- [Apache ActiveMQ](https://activemq.apache.org/) - Es handelt sich um einen Multiprotokoll-Messaging-Server auf Java-Basis.

- [Apache Kafka](https://kafka.apache.org/) - Weit verbreiteter Nachrichtenbroker mit geringer Latenz für das Datenstreaming.

- [RabbitMQ](https://www.rabbitmq.com/) - Sehr beliebtes Leichtgewicht
  In Erlang geschriebener Nachrichtenbroker, der auch mehrere Nachrichtenprotokolle unterstützt.

- [IronMQ](https://www.iron.io/mq) - Sehr schneller und hoch skalierbarer Messaging-Broker. (nicht Open Source)

- [Apache Pulsar](https://pulsar.apache.org/) - Erstellt von Yahoo, außerdem hoch skalierbar, geringe Latenz, Georeplikation und Mandantenfähigkeit.

- [Kestrel](https://github.com/twitter-archive/kestrel) - In Scala geschrieben und spricht das zwischengespeicherte Protokoll. Es funktioniert ähnlich wie Kafka.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Ein vollständig verwalteter Nachrichtenbroker für die Unternehmensintegration.

## Load Balancer

### Open-Source-Software

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Von Google verwendeter, in Go entwickelter, Linux-basierter virtueller Load-Balancer-Server.

- [HAProxy](https://www.haproxy.org/) - Sehr beliebte Option, bietet Hochverfügbarkeit, Proxy und TCP/HTTP-Lastausgleich. Wird von Reddit, Imgur, MaxCDN, GitHub, AirBNB verwendet.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - Unterstützt L3, L4 und L7. Einfache Installation mit einem Docker-Repo. Unterstützt erweiterte Gesundheitscheck-Überwachung.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Wird von eBay verwendet und mit Scala und Netty erstellt. Unterstützt Round-Robin- und Least-Connection-Algorithmen.

- [Nginx](https://www.nginx.com/) - Moment, ist Nginx nicht ein Webserver? Ja, Open Source unterstützt die grundlegende Inhaltsvermittlung und Anforderungsweiterleitung. Die Plus Edition unterstützt Lastausgleich, WAF, Überwachung usw.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, perfekte Kombination.

### Hardware

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - Robuste Hardware-Load-Balancer-Option, die mehrere Protokolle unterstützt (IP, TCP, FTP, UDP, HTTP).

- [TP-Link](https://www.tp-link.com/) - Günstigere Alternative, die als Load Balancer fungiert.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - Eine der Top-Optionen für den Lastausgleich, wenn es um Inhouse-Server geht. Integrierte erstklassige Sicherheitsmaßnahmen, umfassende Berichte und Überwachung des ausgehenden Datenverkehrs zur Verhinderung von Datenverlust.

### Cloud

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Beliebte Wahl für Amazon-Kunden, unterstützt Lambda-Funktionen, hoch skalierbar.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Beliebte Wahl für Google-Kunden, mit automatischer Skalierungsfunktion, sehr schnell, mit integriertem CDN.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Skalierbarer Lastausgleich durch Cloudflare, schnelles Failover und ein Dashboard.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Wenn Sie ein Digitalocean-Kunde sind, ist dies eine gute Option, sehr günstig, regional verfügbar, skalierbar und einfach unter Ihren anderen Droplets bereitzustellen.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Beliebte Wahl für Azure-Kunden von Microsoft. Unterstützt internen und externen Datenverkehr, IPv6, Überwachung und die standardmäßigen Lastausgleichsfunktionen.

## Hadoop-Ökosystem

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### Dashboard

- [Ambari](https://ambari.apache.org/) - Dashboard, das die meisten Hadoop-bezogenen Technologien für eine einfache Verwaltung und Ausführung integriert.

### Datenaufnahme

- [Sqoop](https://sqoop.apache.org/) - Übertragen Sie Daten effizient zwischen Hadoop und strukturierten Datenspeichern wie relationalen Datenbanken.

- [Flume](https://flume.apache.org/) - Verteilt, hochverfügbar und effizient beim Sammeln, Aggregieren und Verschieben großer Mengen an Protokolldaten.

- [Apache Kafka](https://kafka.apache.org/) - Weit verbreiteter Nachrichtenbroker mit geringer Latenz für das Datenstreaming.

### Workflow-Scheduler

- [Oozie](https://oozie.apache.org/) - Erstellen Sie Workflows in XML, um Jobs (aus anderen Hadoop-Ökosystemanwendungen) schrittweise auszuführen, und ermöglichen Sie auch die parallele Ausführung.

### Abfrage

- [Hive](https://hive.apache.org/) - Fragen Sie in SQL gespeicherte Hadoop-Daten ab.
- [Pig](https://pig.apache.org/) - Skriptsprache, die wie SQL aussieht, um Hadoop-Daten abzufragen.

### Verarbeitung

- [Tez](https://tez.apache.org/) - Löst ein ähnliches Problem wie Spark und MapReduce. Es ist effizienter als MapReduce, da es die effizienteste Vorgehensweise berechnet.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce ordnet, wie der Name schon sagt, Daten zu und reduziert die Ergebnisse.
- [Spark](https://spark.apache.org/) - Leistungsstarke Datenverarbeitung, um nicht nur Daten wie Tez (und MapReduce) zu verarbeiten, sondern auch Datenströme in Echtzeit verarbeiten, Regressionsanalysealgorithmen in ML anwenden und vieles mehr.
- [Apex](https://apex.apache.org/) - \*Zurückgezogenes Projekt, es ist eine YARN-native Plattform, die Stream- und Batch-Verarbeitung vereint.

### Datenbank

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Nach dem Vorbild von Googles Bigtable modelliert und in Java geschrieben. Entwickelt als Teil des Apache Hadoop-Projekts.

### Ressourcenverwaltung

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - „Yet Another Resource Negotiator“ funktioniert wie ein Kernel, um Computerressourcen über die Cluster hinweg zu verwalten.
- [MESOS](http://mesos.apache.org/) - Funktioniert wie ein Linux-Kernel, indem er CPU, Arbeitsspeicher, Speicher und andere Ressourcen im gesamten Cluster verwaltet.

## REST-Framework

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Extrem schnelles Microservice-Framework mit Golang und hoher Durchsatzkapazität.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - Verteilte Verarbeitung, leicht skalierbar, Unterstützung für Kanäle und Live-Chat. Dieses in Elixir geschriebene Framework verwendet BEAM und Erlang, ist für große Systeme sehr effizient und unterstützt einen hohen Durchsatz.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - Schnelle node.js-Rest-API, die in vielen Szenarien eine gute Leistung erbringen kann.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Rails ist in Ruby geschrieben und liefert auf effiziente Weise schnelle APIs vom Prototyp bis zur Produktion.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Sehr schnelles Framework mit hohem Durchsatz, geschrieben in Scala/Java, das standardmäßig RESTful ist.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - Ein leichtes Python-Mikroframework für schnelles Prototyping und Produktion.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Ein leichtes Python-Mikroframework, das von Flask inspiriert wurde, aber moderner ist und Python Async verwendet.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Django Rest wurde in Python geschrieben und ist eine leistungsstarke und flexible REST-API. Die Effizienz und Markteinführungszeit ähneln Rails.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - Ein umfangreiches Framework zum Erstellen von Web-Apps und APIs mithilfe des Model-View-Controller-Entwurfsmusters in C# oder F#. Nummer 6 auf [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) für Web-Frameworks.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Ein Node.js-Webframework, das sich stark darauf konzentriert, die beste Entwicklererfahrung mit dem geringsten Overhead und einer leistungsstarken Plugin-Architektur zu bieten.
