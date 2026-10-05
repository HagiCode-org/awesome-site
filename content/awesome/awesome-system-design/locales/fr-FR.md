<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/logo.png" align="center" width="850">
<p align="center">
  <a href="https://github.com/sindresorhus/awesome">
    <img alt="Awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
  </a>
</p>
Si ce contenu vous plaît 📖, aidez le projet à gagner en visibilité avec 👍| ⭐| 👏

Sélection d’articles, de livres, de vidéos et d’outils sur la conception de systèmes distribués et le big data.

Que vous prépariez un entretien ou souhaitiez concevoir une application distribuée ou orientée microservices, cette liste vous aidera.

Attention : le nombre d’étoiles sur GitHub ne reflète pas l’utilisation ni la popularité de chaque élément répertorié.

Inspiré par [Awesome-BigData](https://GitHub.com/onurakpolat/awesome-bigdata/blob/master/README.md)

Créé par Gabriel Leon de Mattos

## Sommaire

[Articles](#articles)

[Livres](#books)

[Vidéos](#videos)

[Outils](#tools)

- [Relational Database](#Relational-Database-Management-System)
- [NoSQL](#NoSQL)
- [Systèmes de fichiers distribués](#Distributed-File-Systems)
- [Gestion des ressources](#Resource-Management)
- [Traitement de flux](#Stream-Processing)
- [Courtier de messages](#Message-Broker)
- [Répartiteurs de charge](#Load-Balancers)
- [Écosystème Hadoop](#Hadoop-Ecosystem)
- [Framework REST](#REST-Framework)

[Bonus](#bonus)

# Articles

## Introduction / entretiens

- [System Design Primer](https://GitHub.com/donnemartin/system-design-primer) - [109k ⭐] - Superbe compilation de ressources, y compris des jeux de cartes mémoire Anki.

- [System Design Interview Questions - Concepts you should know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - Une liste organisée de sujets pour vous présenter la conception de systèmes.

- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview) - [Paid 💵] - La préparation à la conception de systèmes Grokking est l'un des cours dont on parle le plus. La meilleure chose à ce sujet est la conception des applications qu'il suggère plutôt que des explications sur ce que chaque outil est censé faire.

- [System Design in Software Development](https://medium.com/the-andela-way/system-design-in-software-development-f360ce6fcbb9) - Article de base sur les thèmes de la conception et de l'architecture du système.

- [System Design](https://www.interviewbit.com/courses/system-design/) - Ressources de préparation à l’entretien d’introduction.

- [Design Pattern for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems) - Article parlant de certains modèles ainsi que de certaines technologies à considérer.

- [Practice system design problems using AI on Codemia.io](https://codemia.io) - Un outil qui vous permet de pratiquer des problèmes de conception de systèmes de manière interactive, comme un entretien avec l'IA. Il y a un retour itératif et une évaluation finale qui notent votre performance

## Avancé

- [Distributed Computing](https://en.wikipedia.org/wiki/Distributed_computing) - Article Wikipédia élargissant la vision de la conception de systèmes distribués.

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - Article Wikipédia présentant le sujet des erreurs de l'informatique distribuée et de ses effets.

- [Fallacies of Distributed Computing Explained](http://www.rgoarchitects.com/Files/fallacies.pdf) - Explication approfondie des erreurs mentionnées ci-dessus.

- [CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem) - Article IBM sur le théorème CAP, les microservices et les bases de données NoSQL.

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html) - Bon article parlant de l'architecture Microservice ainsi que de ses inconvénients.

- [Taxonomy of Distributed Systems](https://www.cs.rutgers.edu/~pxk/rutgers/notes/content/01-intro.pdf) - Cours de 11 pages classifiant les systèmes distribués et expliquant spécifiquement pourquoi nous en avons besoin.

- [Top 10 Secure Coding Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices) - Bref article parlant des bonnes pratiques en matière de sécurité du code.

- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) - Bon article sur les systèmes distribués ainsi que certains des outils potentiels.

---

# Livres

- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647) - [Paid 💵] - Livre qui parle des systèmes distribués et démontre légèrement un peu de code de ce à quoi il ressemble.

- [Designing Data Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_14_t_0/140-0179130-4076567?_encoding=UTF8&pd_rd_i=1449373321&pd_rd_r=e1f26397-6b89-4ffe-923f-21ad2d124b7a&pd_rd_w=7kW0U&pd_rd_wg=HYohZ&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FC1XXD2Q6DDAJ4Z1RN2K&psc=1&refRID=FC1XXD2Q6DDAJ4Z1RN2K) - [Paid 💵] - Il explique en profondeur diverses ressources que nous utilisons lorsque nous travaillons avec des systèmes distribués, ainsi que comment ils sont nés et quels problèmes ils visent à résoudre.

- [The System Design Manual](https://systemdesignmanual.com/) - [Paid 💵] - Couvre les aspects fondamentaux des systèmes distribués, tels que : les principes fondamentaux du réseau, la théorie qui sous-tend les systèmes distribués, les modèles architecturaux de systèmes évolutifs, les modèles de stabilité qui renforcent les systèmes contre les pannes et les meilleures pratiques opérationnelles sur la façon de maintenir des systèmes à grande échelle avec une petite équipe.

- [Building Microservices](http://ce.sharif.edu/courses/96-97/1/ce924-1/resources/root/Books/building-microservices-designing-fine-grained-systems.pdf) - [Free 👍] - Un livre génial qui parle en profondeur de la conception d'une architecture système avec des microservices et comprend les sujets les plus pertinents à cet égard.

- [Monolith to Microservices](https://www.nginx.com/resources/library/monolith-to-microservices/) - [Free 👍] - Écrit par le même auteur que celui ci-dessus, ce livre couvrira la migration de Monolith vers Microservices, il est recommandé de commencer par le livre précédent.

- [Distributed Systems (3rd Edition)](https://www.distributed-systems.net/index.php/books/ds3/) - [Free 👍] - Excellent aperçu et introduction approfondie aux systèmes distribués. Recommandé pour les lecteurs de niveau intermédiaire.

- [Safe by Design](https://github.com/SanQri/safe-by-design/) - [Free 👍] - Excellent livre sur l'application de l'exactitude du code dès la conception.

---

# Vidéos

Une collection de vidéos sur les systèmes distribués.

## Introduction / entretiens

- [Gaurav Sen - System Design Series](https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Bonne ressource pour les personnes qui souhaitent en savoir plus sur la conception de systèmes, présente le sujet d'une manière très simple à comprendre.

- [Tech Dummies - System Design Series](https://www.youtube.com/watch?v=mhUQe4BKZXs&list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Une autre introduction à la conception de systèmes.

- [Mock System Design Interview at Google](https://www.youtube.com/watch?v=q0KGYwNbf-0) - Aperçu de ce à quoi ressemblerait un entretien sur la conception du système du point de vue d'une satisfaction imparfaite mais proche des exigences. L’essentiel ici est la façon dont se déroule l’interaction avec l’intervieweur.

- [Google Preparation Guide](https://www.youtube.com/watch?v=Gg318hR5JY0) - Une vidéo rapide expliquant comment ils interviewent.

- [System Design Interview](https://www.youtube.com/c/SystemDesignInterview/) - Chaîne YouTube axée sur le contenu spécifique aux entretiens sur la conception du système, avec une explication détaillée d'une variété de problèmes.

- [Intro to Architecture and System Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70) - Une vidéo YouTube avec Jackson Gabbard avec de bonnes informations sur les entretiens de conception de systèmes.

- [System Design Introduction for Interview](https://www.youtube.com/watch?v=UzLMhqg3_Wc) - Introduction de Tushar à la conception de systèmes.

- [Distributed Systems](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) - Il s'agit d'un cours d'introduction aux systèmes distribués réalisé par Chris Colohan. Il a obtenu son doctorat à Carnegie Mellon, puis a passé 10 ans à travailler chez Google pour créer des systèmes distribués.

- [The Easy Way](https://www.youtube.com/channel/UCVZfU1sp66H9d4sdYx4iNkQ) - Chaîne à venir avec des vidéos faciles à comprendre sur les systèmes distribués.

- [System Design by SDE Skills](https://www.youtube.com/playlist?list=PLBtMh4xfa9FHSMKKgPZcPfoPbZmND5PC-) - Bonne ressource pour les personnes qui se préparent aux entretiens de conception de système, il existe plusieurs simulations d'entretiens de conception de système et des analyses approfondies.

- [System Design by CodeKarle](https://www.youtube.com/watch?v=EpASu_1dUdE&list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - Une autre excellente ressource gratuite, une liste de questions d’entretien fréquemment posées.

## Avancé

- [The evolution of Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4) - Aperçu de la façon dont la conception du système Reddit a évolué.
- [6.824 Distributed Systems by MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) - Cours de niveau supérieur sur les systèmes distribués du MIT (2020).
- [CSE138 Distributed Systems by UCSC](https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31) - Cours de premier cycle sur les systèmes distribués de l'UCSC (2020).

# Outils

- Une sélection des outils les plus courants pour les systèmes distribués

## Système de gestion de base de données relationnelle

- [MariaDB](https://mariadb.org/) - MariaDB est un fork du serveur MySQL.

- [MySQL](https://dev.mysql.com/) - Base de données relationnelle largement utilisée.

- [PostgresSQL](https://www.postgresql.org/) - Base de données relationnelle qui gagne en popularité.

- [SQLite](https://www.sqlite.org/index.html) - Une autre base de données largement utilisée, intégrée à tous les téléphones mobiles et à la plupart des ordinateurs.

- [Sql Server](https://www.microsoft.com/en-us/sql-server) - Base de données relationnelle largement utilisée.

## NoSQL

### Cache (clé-valeur)

- [Apache Ignite](https://GitHub.com/apache/ignite) - [3.3k ⭐] - Mise en cache en mémoire avec les propriétés ACID.

- [Couchbase](https://developer.couchbase.com/open-source-projects) - Inspiré de Memcached, ajoutant des fonctionnalités telles que la réplication et la persistance.

- [Oracle Coherence](https://GitHub.com/oracle/coherence) - [126 ⭐] - Mise en cache en mémoire à haute évolutivité et à faible latence.

- [Memcached](https://GitHub.com/memcached/memcached) - [10.2k ⭐] - L'une des premières bases de données de mise en cache en mémoire, très performante et multithread.

- [Redis](https://GitHub.com/redis/redis) - [44k ⭐] - Base de données de mise en cache en mémoire largement utilisée avec de nombreuses fonctionnalités supplémentaires telles que le stockage persistant et la prise en charge des chaînes, des listes, des ensembles, des hachages, des flux, des bitmaps, etc.

### Stockage (clé-valeur)

- [Apple FoundationDB](https://GitHub.com/apple/foundationdb) - [10k ⭐] - Multi-modèle (plusieurs types de données dans une seule base de données), magasin clé-valeur ACID. Facilement évolutif et tolérant aux pannes.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Service de base de données multimodèle distribué à l'échelle mondiale de Microsoft. Adaptez le débit et le stockage de manière simple et indépendante. API SQL, MongoDB, Cassandra, Tables, Gremlin et Spark.

### Stockage de documents

- [CouchDB](https://GitHub.com/apache/couchdb) - [4.6k ⭐] - La base de données de stockage de documents NoSQL conforme à ACID fournit une API HTTP RESTful pour la lecture et la mise à jour des documents de base de données.

- [MongoDB](https://www.mongodb.com/) - L'une des bases de données « NoSQL » les plus populaires à usage général.

- [RethinkDB](https://GitHub.com/rethinkdb/rethinkdb) - [23.8k ⭐] - Base de données de stockage de documents.

- [ElasticSearch](https://GitHub.com/elastic/elasticsearch) - [49.9k ⭐] - Base de données « NoSQL » très populaire pour les moteurs de recherche rapides et évolutifs.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Service de base de données multimodèle distribué à l'échelle mondiale de Microsoft. Adaptez le débit et le stockage de manière simple et indépendante. API SQL, MongoDB, Cassandra, Tables, Gremlin et Spark.

### Stockage à colonnes larges

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - Base de données de valeurs-clés et de documents, hautement performante, évolutive et sécurisée.

- [Google Bigtable](https://cloud.google.com/bigtable) - Base de données 'NoSQL' évolutive et performante pour une charge de travail analytique et opérationnelle importante.

- [Cassandra](https://cassandra.apache.org/) - Projet né sur Facebook très rapide, facilement évolutif, avec possibilité d'inclure une cohérence à chaque opération.

- [Scylla](https://GitHub.com/scylladb/scylla) - [4.9k ⭐] - Magasin de données 'NoSQL' utilisant le framework seastar, compatible avec Cassandra.

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Inspiré de Bigtable de Google et écrit en Java. Développé dans le cadre du projet Apache Hadoop et fonctionne sur HDFS ou Alluxio. (Voir [Hadoop Related](##hadoop-related))

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Service de base de données multimodèle distribué à l'échelle mondiale de Microsoft. Adaptez le débit et le stockage de manière simple et indépendante. API SQL, MongoDB, Cassandra, Tables, Gremlin et Spark.

### Graphes

- [Amazon Neptune](https://aws.amazon.com/neptune/) - Service de base de données graphique rapide, fiable et entièrement géré.

- [ArangoDB](https://GitHub.com/arangodb/arangodb) - [10k ⭐] - Base de données flexible pour les documents, les valeurs-clés et les graphiques. Utilise son propre langage de requête, AQL.

- [Neo4j](https://GitHub.com/neo4j/neo4j) - [7.9k ⭐] - Bon support pour une base de données graphique, conforme à ACID et flexible.

- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) - Service de base de données multimodèle distribué à l'échelle mondiale de Microsoft. Adaptez le débit et le stockage de manière simple et indépendante. API SQL, MongoDB, Cassandra, Tables, Gremlin et Spark.

## Systèmes de fichiers distribués

- [HDFS](https://hadoop.apache.org/) - Le système de fichiers Hadoop est un choix très populaire parmi ses concurrents Big Data, offrant un accès à haut débit.

- [Lustre](http://lustre.org/) - Système de fichiers pour les clusters d'ordinateurs.

- [CephFS](https://ceph.io/) - Système de stockage unifié et distribué.

- [GlusterFS](https://www.gluster.org/) - Système de fichiers NAS évolutif.

- [MooseFS](https://moosefs.com/) - Système de fichiers distribué conforme à POSIX.

- [XtreemFS](http://www.xtreemfs.org/) - Système de fichiers tolérant aux pannes.

## Gestion des ressources

- [Kubernetes](https://kubernetes.io/) - Moyen très populaire de déployer, gérer et faire évoluer automatiquement un cluster de conteneurs sur des serveurs nus ou virtuels.

## Traitement de flux

- [Apache Samza](http://samza.apache.org/) - Créez des applications avec état qui traitent les données en temps réel provenant de plusieurs sources, y compris Kafka. Modèle multi-abonné simple et peu coûteux, peut éliminer la contre-pression et offre une persistance fiable avec une faible latence.

- [Apache Flink](https://flink.apache.org/) - Basé sur le concept de flux et de transformations. Utilise maven, gère les tâches par lots sous forme de flux de données avec des limites finies. Faible latence, débit élevé.

- [Amazon Kinesis Streams](https://aws.amazon.com/kinesis/data-streams/) - Service durable, évolutif et en temps réel. Collecte des gigaoctets de données par seconde à partir de centaines de milliers de sources, notamment les flux d'événements de bases de données, les flux de clics de sites Web, les transactions financières, etc.

- [Azure Stream Analytics](https://azure.microsoft.com/en-us/services/stream-analytics/) - Service d'analyse en temps réel conçu pour les charges de travail critiques.

## Courtier de messages

- [Amazon MQ](https://aws.amazon.com/amazon-mq/) - Courtier de messages open source d'Amazon.

- [Apache ActiveMQ](https://activemq.apache.org/) - Il s'agit d'un serveur de messagerie multiprotocole basé sur Java.

- [Apache Kafka](https://kafka.apache.org/) - Courtier de messages très populaire avec une faible latence pour le streaming de données.

- [RabbitMQ](https://www.rabbitmq.com/) - Léger très populaire
  courtier de messages écrit en erlang qui prend également en charge plusieurs protocoles de messagerie.

- [IronMQ](https://www.iron.io/mq) - Courtier de messagerie très rapide et hautement évolutif. (pas open source)

- [Apache Pulsar](https://pulsar.apache.org/) - Créé par Yahoo, également hautement évolutif, faible latence, géo-réplication et multi-tenacy.

- [Kestrel](https://github.com/twitter-archive/kestrel) - Écrit en Scala et parle le protocole memcached. Cela fonctionne un peu comme Kafka.

- [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Un courtier de messages d'intégration d'entreprise entièrement géré.

## Répartiteurs de charge

### Logiciels libres

- [SeeSaw](https://GitHub.com/google/seesaw) - [5.1k ⭐] - Utilisé par Google, développé en Go, serveur d'équilibrage de charge virtuel basé sur Linux.

- [HAProxy](https://www.haproxy.org/) - Option très populaire, offre une haute disponibilité, un proxy et un équilibrage de charge TCP/HTTP. Utilisé par Reddit, Imgur, MaxCDN, GitHub, AirBNB.

- [Zevenet](https://www.zevenet.com/products/community/#repository) - Prend en charge L3, L4 et L7. Installation facile avec un dépôt Docker. Prend en charge la surveillance avancée des contrôles de santé.

- [Neutrino](https://neutrinoslb.GitHub.io/) - Utilisé par eBay, construit avec Scala et Netty. Prend en charge les algorithmes de round-robin et de moindre connexion.

- [Nginx](https://www.nginx.com/) - Attendez, Nginx n'est-il pas un serveur Web ? Oui, l'open source prend en charge le niveau de base de commutation de contenu et de routage des requêtes. L'édition Plus prend en charge l'équilibrage de charge, le WAF, la surveillance, etc.

- [Openresty](https://github.com/openresty/openresty) - Nginx + Lua, combinaison parfaite.

### Matériel

- [F5](https://www.f5.com/services/resources/glossary/load-balancer) - Option d'équilibrage de charge matérielle robuste, prenant en charge plusieurs protocoles (IP, TCP, FTP, UDP, HTTP).

- [TP-Link](https://www.tp-link.com/) - Alternative moins chère qui fonctionne comme un équilibreur de charge.

- [Barracuda](https://www.barracuda.com/products/loadbalancer) - L’un des meilleurs choix pour l’équilibrage de charge lorsqu’il s’agit de serveurs internes. Mesures de sécurité de pointe intégrées, rapports complets et surveillance du trafic sortant pour prévenir la perte de données.

### Cloud

- [Amazon Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - Choix populaire pour les clients Amazon, prend en charge les fonctions lambda, hautement évolutif.

- [Google Load Balancing](https://cloud.google.com/load-balancing) - Choix populaire pour les clients de Google, livré avec une fonction de mise à l'échelle automatique, très rapide, avec CDN intégré.

- [Cloudflare Load Balancing](https://www.cloudflare.com/load-balancing/) - Équilibrage de charge évolutif par Cloudflare, fonctionnalité de basculement rapide et un tableau de bord.

- [DigitalOcean Load Balancing](https://www.digitalocean.com/docs/networking/load-balancers/) - Si vous êtes client digitalocean, c'est une bonne option, très bon marché, disponible régionalement, évolutive, facile à déployer parmi vos autres droplets.

- [Azure Load Balancing](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview) - Choix populaire pour les clients Azure de Microsoft. Prend en charge les trafics internes et externes, IPv6, la surveillance et l'ensemble de fonctionnalités d'équilibrage de charge standard.

## Écosystème Hadoop

<img src="https://raw.githubusercontent.com/madd86/awesome-system-design/master/media/hadoop-ecosystem.png" align="center" width="330">

### Tableau de bord

- [Ambari](https://ambari.apache.org/) - Tableau de bord qui intègre la plupart des technologies liées à Hadoop pour une gestion et des exécutions faciles.

### Ingestion des données

- [Sqoop](https://sqoop.apache.org/) - Transférez efficacement des données entre Hadoop et des banques de données structurées telles que des bases de données relationnelles.

- [Flume](https://flume.apache.org/) - Distribué, hautement disponible et efficace pour collecter, agréger et déplacer de grandes quantités de données de journaux.

- [Apache Kafka](https://kafka.apache.org/) - Courtier de messages très populaire avec une faible latence pour le streaming de données.

### Planificateur de workflows

- [Oozie](https://oozie.apache.org/) - Créez des flux de travail au format XML pour exécuter des tâches (à partir d'autres applications de l'écosystème Hadoop) par étapes, ce qui permet également une exécution parallèle.

### Requête

- [Hive](https://hive.apache.org/) - Interrogez les données stockées par Hadoop dans SQL.
- [Pig](https://pig.apache.org/) - Langage de script qui ressemble à SQL pour interroger les données Hadoop.

### Traitement

- [Tez](https://tez.apache.org/) - Résout un problème similaire à Spark et MapReduce, il est plus efficace que MapReduce car il calcule la manière la plus efficace de le faire.
- [Map Reduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - MapReduce, comme son nom l'indique, cartographie les données et réduit les résultats.
- [Spark](https://spark.apache.org/) - Un traitement de données puissant non seulement pour traiter des données comme Tez (et MapReduce), mais aussi pour traiter des flux de données en temps réel, appliquer des algorithmes d'analyse de régression en ML et bien plus encore.
- [Apex](https://apex.apache.org/) - \*Projet retiré, il s'agit d'une plate-forme native YARN qui unifie le traitement par flux et par lots.

### Base de données

- [HBase](https://GitHub.com/apache/hbase) - [3.6k ⭐] - Inspiré de Bigtable de Google et écrit en Java. Développé dans le cadre du projet Apache Hadoop.

### Gestion des ressources

- [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) - « Pourtant, un autre négociateur de ressources » fonctionne comme un noyau pour gérer les ressources informatiques à travers les clusters.
- [MESOS](http://mesos.apache.org/) - Fonctionne comme un noyau Linux en gérant le processeur, la mémoire, le stockage et d'autres ressources sur le cluster.

## Framework REST

- [Gin](https://github.com/gin-gonic/gin) - [40.6k ⭐] - Framework de microservices incroyablement rapide utilisant Golang, capacité de débit élevée.

- [Phoenix](https://github.com/phoenixframework/phoenix) - [15.5k ⭐] - Traitement distribué, facilement évolutif, prise en charge des canaux et du chat en direct. Ce framework - écrit en Elixir, utilise BEAM et Erlang, très efficaces pour les systèmes à grande échelle et prend en charge un débit élevé.

- [Express.js](https://github.com/expressjs/express) - [49.6k ⭐] - API de repos node.js rapide qui peut bien fonctionner dans de nombreux scénarios.

- [Rails](https://github.com/rails/rails) - [46.2k ⭐] - Écrit en Ruby, Rails fournit des API rapides du prototype à la production de manière efficace.

- [Play Framework](https://github.com/playframework/playframework) - [11.6k ⭐] - Framework très rapide et à haut débit écrit en Scala/Java et RESTful par défaut.

- [Flask](https://github.com/pallets/flask) - [51.6k ⭐] - Un microframework Python léger pour un prototypage et une production rapides.

- [FastAPI](https://github.com/tiangolo/fastapi) - [22.7k ⭐] - Un microframework Python léger inspiré de Flask mais plus moderne, utilisant Python async.

- [Django REST](https://github.com/encode/django-rest-framework) - [18.4k ⭐] - Écrit en Python, Django Rest est une API REST puissante et flexible. L'efficacité et les délais de commercialisation ressemblent à ceux de Rails.

- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1) - Un cadre riche pour créer des applications Web et des API à l'aide du modèle de conception Model-View-Controller en C# ou F#. Numéro 6 sur [TechEmpower Composite Benchmarks](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) pour les frameworks web.

- [Fastify](https://github.com/fastify/fastify) - [15.4k ⭐] - Un framework Web Node.js hautement axé sur la fourniture de la meilleure expérience de développement avec le moins de frais généraux et une architecture de plugin puissante.
