# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> Une sélection de logiciels, bibliothèques, outils et ressources [PostgreSQL](https://www.postgresql.org/), inspirée par [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), souvent appelé Postgres, est une [base de données relationnelle-objet](https://en.wikipedia.org/wiki/Object-relational_database) (ORDBMS). PostgreSQL est [conforme aux propriétés ACID](https://en.wikipedia.org/wiki/ACID) et prend en charge les [transactions](https://en.wikipedia.org/wiki/Transaction_processing). (Pour en savoir plus : [wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: Les contributions sont les bienvenues. Ajoutez des liens par le biais de [pull requests](https://github.com/dhamaniasad/awesome-postgres/pulls) ou créez une [issue](https://github.com/dhamaniasad/awesome-postgres/issues) pour lancer une discussion. Consultez les [consignes de contribution](CONTRIBUTING.md).

<a id="contents"></a>

## Sommaire

- [Awesome Postgres](#awesome-postgres-)
    - [Haute disponibilité](#high-availability)
    - [Sauvegardes](#backups)
    - [Interface graphique](#gui)
    - [Distributions](#distributions)
    - [CLI](#cli)
    - [Serveur](#server)
    - [Supervision](#monitoring)
    - [Extensions](#extensions)
    - [Plateformes](#platforms)
    - [Files de travaux](#work-queues)
    - [Optimisation](#optimization)
    - [Utilitaires](#utilities)
    - [Liaisons de langage](#language-bindings)
    - [PaaS (PostgreSQL en tant que service)](#paas-postgresql-as-a-service)
    - [Images Docker](#docker-images)
    - [Kubernetes](#kubernetes)
- [Ressources](#resources)
    - [Tutoriels](#tutorials)
    - [Blogs](#blogs)
    - [Documentation](#documentation)
    - [Infolettres](#newsletters)
    - [Vidéos](#videos)
    - [Communauté](#community)
    - [Feuilles de route](#roadmaps)
    - [Listes externes](#external-lists)

<a id="high-availability"></a>

### Haute disponibilité
* [autobase](https://github.com/vitabaks/autobase) - Autobase pour PostgreSQL® est un DBaaS open source qui automatise le déploiement et la gestion de clusters PostgreSQL hautement disponibles.
* [BDR](https://github.com/2ndQuadrant/bdr) - Réplication bidirectionnelle : système de réplication multi-maître pour PostgreSQL.
* [Patroni](https://github.com/zalando/patroni) - Modèle de haute disponibilité PostgreSQL avec ZooKeeper ou etcd.
* [Spock](https://github.com/pgEdge/spock) - Réplication logique PostgreSQL multi-maître entièrement open source.
* [Stolon](https://github.com/sorintlab/stolon) - Haute disponibilité PostgreSQL reposant sur Consul ou etcd, avec intégration à Kubernetes.
* [pglookout](https://github.com/aiven/pglookout) - Outil de supervision de la réplication et démon de basculement.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - Suite d'outils open source pour gérer la réplication et le basculement dans un cluster de serveurs PostgreSQL.
* [Slony-I](https://slony.info/) - Système de réplication « d'un maître vers plusieurs esclaves », avec réplication en cascade et basculement.
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL Automatic Failover : haute disponibilité pour Postgres, basée sur Pacemaker et Corosync.
* [SkyTools](https://github.com/pgq/skytools-legacy) - Outils de réplication, dont PgQ, un système de files d'attente, et Londiste, un système de réplication un peu plus facile à gérer que Slony.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extension et service Postgres pour le basculement automatisé et la haute disponibilité.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - Diffuse en temps réel les journaux de préécriture (WAL) d'un serveur PostgreSQL. Alternative prête à l'emploi et adaptée aux conteneurs à pg_receivewal.
* [pg-status](https://github.com/krylosov-aa/pg-status) - Microservice fournissant des points de terminaison HTTP pour récupérer instantanément l'hôte maître actuel ou un réplica répondant à différents critères.

<a id="backups"></a>

### Sauvegardes
* [Barman](https://www.pgbarman.org/index.html) - Gestionnaire de sauvegarde et de restauration pour PostgreSQL, créé par 2ndQuadrant.
* [Databasus](https://databasus.com) - Outil de planification des sauvegardes PostgreSQL via une interface Web, avec stockage externe (local, S3, FTP, Google Drive, etc.), notifications (webhook, Discord, Slack, etc.) et gestion d'équipe.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - Outils avancés de gestion des fichiers WAL pour PostgreSQL.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – Fork de pg\_arman amélioré par @PostgresPro ; prend en charge les sauvegardes incrémentielles, les sauvegardes depuis un réplica, la sauvegarde et la restauration multithread, ainsi que les sauvegardes anonymes sans commande d'archivage.
* [pgBackRest](https://pgbackrest.org/)  - Sauvegarde et restauration PostgreSQL fiables.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Outil complet de sauvegarde et de maintenance Postgres reposant sur Docker, avec interface Web.
* [pg\_back](https://github.com/orgrim/pg_back/) - pg\_back est un simple script de sauvegarde.
* [pghoard](https://github.com/aiven/pghoard) - Outil de sauvegarde et de restauration pour les stockages d'objets cloud (AWS S3, Azure, Google Cloud, OpenStack Swift).
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Conteneur Docker pratique pour sauvegarder périodiquement PostgreSQL sur Alibaba Cloud Object Storage Service (OSS).
* [wal-e](https://github.com/wal-e/wal-e) (obsolète) - Archivage continu simple de PostgreSQL vers S3, Azure ou Swift, par Heroku.
* [wal-g](https://github.com/wal-g/wal-g) - Successeur de WAL-E réécrit en Go. Prend actuellement en charge les services de stockage d'objets cloud AWS (S3), Google Cloud (GCS), Azure et OpenStack Swift, MinIO, ainsi que les systèmes de fichiers. Prend en charge les sauvegardes incrémentielles au niveau des blocs, le déchargement des tâches de sauvegarde vers un serveur de secours, ainsi que des options de parallélisation et de limitation de débit. Outre Postgres, WAL-G peut être utilisé avec les bases de données MySQL et MongoDB.
* [pitrery](https://dalibo.github.io/pitrery/) - pitrery est un ensemble de scripts Bash pour gérer les sauvegardes de récupération à un instant précis (PITR) de PostgreSQL.
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` est un conteneur auxiliaire Docker léger conçu pour automatiser les sauvegardes régulières d'une base PostgreSQL à l'aide de `pg_dump`, de `cron` et de scripts bash, tout en envoyant également la sortie à un webhook.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - Solution conçue pour Docker, basée sur pg_dump, prenant en charge la configuration par variables d'environnement pour planifier les sauvegardes PostgreSQL, avec compression facultative, chiffrement GPG, webhooks et téléversement automatique vers Amazon S3.

<a id="gui"></a>

### Interface graphique
* [1bench](https://1bench.dev/postgresql) - Interface graphique native multiplateforme offrant une prise en charge de premier ordre de Postgres, ainsi que de Redis, Elasticsearch, ClickHouse, Qdrant et d'autres (logiciel commercial).
* [Adminer](https://www.adminer.org/) - Outil complet de gestion de bases de données écrit en PHP.
* [AI for Database](https://aifordatabase.com) - Discutez avec votre base PostgreSQL en langage naturel. Aucun SQL nécessaire : obtenez instantanément des informations, créez des tableaux de bord qui s'actualisent automatiquement et déclenchez des flux de travail automatisés en fonction des modifications de la base de données (logiciel commercial).
* [Beekeeper Studio](https://www.beekeeperstudio.io) - Client SQL libre et open source doté d'une interface moderne et d'une excellente prise en charge de Postgres. Multiplateforme.
* [Bytebase](https://www.bytebase.com) - Solution DevSecOps pour les équipes de développement, de sécurité, d'administration de bases de données et d'ingénierie de plateforme.
* [Chartbrew](https://chartbrew.com) - Créez des tableaux de bord en direct, des graphiques et des rapports clients à partir de données PostgreSQL. Comprend un outil de requête compatible avec SQL.
* [Count](https://count.co/) - Plateforme d'analyse Web avec interface de carnet de notes, connectée à PostgreSQL (logiciel commercial).
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE doté d'outils avancés et offrant une bonne expérience multiplateforme (logiciel commercial).
* [Dekart](https://github.com/dekart-xyz/dekart) - Plateforme open source transformant les requêtes PostGIS en cartes interactives partageables.
* [Datazenit](https://datazenit.com/) - Interface graphique PostgreSQL accessible sur le Web (logiciel commercial).
* [DataRow](https://www.datarow.com/) - Client SQL multiplateforme pour Amazon Redshift : simple, intuitif et extensible.
* [DBConvert Streams](https://streams.dbconvert.com/) - IDE de base de données avec migration, SQL fédéré et réplication CDC pour PostgreSQL, MySQL, les fichiers et le stockage compatible S3 (logiciel commercial).
* [DBeaver](https://dbeaver.io/) - Gestionnaire de bases de données universel offrant une excellente prise en charge de PostgreSQL.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - Solution tout-en-un pour plusieurs bases de données, prenant en charge PostgreSQL, MySQL, MariaDB, SQL Server, Oracle et un large éventail de services cloud connexes (logiciel commercial).
* [DbVisualizer](http://www.dbvis.com) - Client de base de données multiplateforme pour les développeurs, les administrateurs de bases de données et les analystes (logiciel commercial).
* [Holistics](https://www.holistics.io/) - Outil en ligne multiplateforme de gestion de bases de données et interface graphique de création de rapports à partir de requêtes SQL, avec une solide prise en charge de PostgreSQL (logiciel commercial).
* [JackDB](https://www.jackdb.com/) - Interface Web de requête SQL (logiciel commercial).
* [Luna Modeler](http://www.datensen.com) - Outil de modélisation de données multiplateforme pour ordinateur de bureau (logiciel commercial).
* [Mathesar](https://mathesar.org/) - Application Web offrant une expérience intuitive d'utilisation des bases de données.
* [Metabase](https://www.metabase.com/) - Outil simple de création de tableaux de bord, de graphiques et de requêtes pour PostgreSQL.
* [Numeracy](https://numeracy.co/) - Éditeur SQL rapide doté de graphiques et de tableaux de bord pour PostgreSQL (logiciel commercial).
* [OrcaQ](https://github.com/cin12211/orca-q) - Éditeur de bases de données moderne et open source pour PostgreSQL, MySQL, Redis et d'autres. Comprend un assistant IA, un visualiseur de diagrammes ER, une comparaison de schémas et une gestion visuelle des rôles.
* [pgAdmin](https://www.pgadmin.org/) - Interface graphique d'administration et de gestion de PostgreSQL.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - Dialoguez avec Postgres en langage naturel (logiciel commercial).
* [PgManage](https://github.com/commandprompt/pgmanage) - Client et outil d'administration de bases de données moderne, multiplateforme et centré sur Postgres.
* [pgModeler](https://pgmodeler.io/) - pgModeler est un outil open source de modélisation de bases de données PostgreSQL.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - Extension open source pour VS Code / Open VSX dédiée à la gestion de PostgreSQL, avec des carnets SQL, un assistant IA, des extraits de code faciles à utiliser et un SGBD complet doté d'un tableau de bord de supervision en temps réel.
* [pgweb](https://github.com/sosedoff/pgweb) - Explorateur de bases de données PostgreSQL accessible sur le Web, écrit en Go.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - Le principal outil d'administration de PostgreSQL accessible sur le Web.
* [Postbird](https://github.com/Paxa/postbird) - Client PostgreSQL pour macOS.
* [PostgresCompare](https://www.postgrescompare.com) - Outil multiplateforme de comparaison et de déploiement de bases de données (logiciel commercial).
* [Postico](https://eggerapps.at/postico/) - Client PostgreSQL moderne pour macOS (logiciel commercial).
* [QueryGlow](https://queryglow.com/) - Interface graphique de base de données auto-hébergée et accessible sur le Web, avec génération SQL par IA, visualiseur EXPLAIN et autocomplétion tenant compte du schéma (logiciel commercial).
* [PSequel](http://www.psequel.com/) - Interface épurée et simple pour effectuer rapidement les tâches PostgreSQL courantes (logiciel commercial).
* [Redash](https://github.com/getredash/redash) - Connectez-vous facilement à n'importe quelle source de données, visualisez et partagez vos données.
* [SQL Tabs](http://www.sqltabs.com/) - Client pour ordinateur de bureau multiplateforme dédié à PostgreSQL, écrit en JS.
* [SQLPro for Postgres](http://macpostgresclient.com/) - Gestionnaire PostgreSQL simple et puissant pour macOS (logiciel commercial).
* [temBoard](https://github.com/dalibo/temboard) - Interface graphique PostgreSQL accessible sur le Web et outil de supervision.
* [Teable](https://github.com/teableio/teable) - Base de données sans code ultrarapide, en temps réel, professionnelle et conviviale pour les développeurs.
* [TablePlus](https://tableplus.com/) - Application native permettant de modifier les bases de données et leur structure. Sécurité de haut niveau garantie (logiciel commercial).
* [TablePro](https://tablepro.app/) - Client PostgreSQL natif pour macOS, avec visualisation EXPLAIN, diagrammes ER et assistant IA. Gratuit et open source.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Outil multiplateforme d'administration de bases de données (gratuit/commercial).
* [DbGate](https://dbgate.org) - Le client de bases de données (No)SQL le plus intelligent.
* [WebDB](https://webdb.app) – IDE de base de données efficace.

<a id="distributions"></a>

### Distributions
* [Postgres.app](https://postgresapp.com/) - La façon la plus simple de démarrer avec PostgreSQL sur macOS.
* [Pigsty](https://github.com/Vonng/pigsty) - Distribution open source de PostgreSQL tout compris, offrant une observabilité optimale et une boîte à outils « base de données en tant que code » pour les développeurs.

<a id="cli"></a>

### CLI
* [atlas](https://github.com/ariga/atlas) - Atlas est un outil de gestion et de migration de schémas de base de données s'appuyant sur les principes modernes du DevOps.
* [pgcli](https://github.com/dbcli/pgcli) - CLI Postgres avec autocomplétion et coloration syntaxique.
* [pgfence](https://pgfence.com) - Analyse les migrations SQL Postgres pour repérer les modes de verrouillage et les instructions DDL risquées, et propose des réécritures sûres selon le modèle expand/contract. Comprend une CLI et un LSP, ainsi que des extracteurs pour Prisma, TypeORM et Knex.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - CLI Postgres avec autocomplétion et coloration syntaxique, écrite en Go.
* [pgplan](https://github.com/JacobArthurs/pgplan) - Compare et analyse les plans PostgreSQL EXPLAIN depuis la CLI.
* [pgschema](https://www.pgschema.com) - Migration déclarative de schéma pour Postgres, sur le modèle de Terraform.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI (et bibliothèque Go) pour comparer des schémas Postgres et générer des migrations SQL avec un verrouillage minimal.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - CLI de sécurisation des migrations PostgreSQL qui détecte le DDL dangereux avant la production : 80 règles, classification des verrouillages, correction automatique et GitHub Action.
* [pgsh](https://github.com/sastraxi/pgsh) - Créez des branches de votre base PostgreSQL comme avec Git.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - Client CLI PostgreSQL intégré.
* [psql2csv](https://github.com/fphilipe/psql2csv) - Exécute une requête dans psql et affiche le résultat au format CSV.
* [sabiql](https://github.com/riii111/sabiql) - TUI rapide sans pilote pour parcourir, interroger et modifier des bases de données PostgreSQL.
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpy est un outil JAVA compatible JDBC qui génère la documentation HTML de votre base de données, notamment des diagrammes de relations entre entités.
* [pdot](https://gitlab.com/dmfay/pdot) - Visualisez et explorez les structures de bases de données dans votre terminal, depuis des vues détaillées des graphes de clés étrangères jusqu'aux cascades de déclencheurs, à l'héritage des rôles, aux autorisations et bien plus encore.
* [squix](https://github.com/eduardofuncao/squix) - Client SQL en ligne de commande avec gestion des requêtes et résultats interactifs.

<a id="server"></a>

### Serveur
* [AgensGraph](https://bitnine.net/) - Puissante base de données graphe reposant sur PostgreSQL.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Fork MPP de PostgreSQL et alternative open source à Greenplum Database.
* [FerretDB](https://www.ferretdb.io) - Véritable alternative open source à MongoDB reposant sur PostgreSQL.
* [Postgres-XL](https://www.postgres-xl.org/) - Cluster de bases de données évolutif et open source fondé sur PostgreSQL.
* [YugabyteDB](https://yugabyte.com/) - SQL distribué open source utilisant un fork de PostgreSQL reposant sur un stockage et des transactions distribués.

<a id="security"></a>

### Sécurité
* [Acra](https://github.com/cossacklabs/acra) - Suite de sécurité pour bases SQL : proxy de protection des données avec chiffrement transparent à la volée, pare-feu SQL (prévention des injections SQL) et système de détection des intrusions.
* [pgrls](https://github.com/pgrls/pgrls) - Analyseur statique de politiques de sécurité au niveau des lignes ; 36 règles couvrant la sécurité, les performances et l'hygiène, dont 10 corrections automatiques mécaniques ; comprend une commande de comparaison sémantique des politiques pour les contrôles d'intégration continue.

<a id="monitoring"></a>

### Supervision
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check\_pgactivity est conçu pour superviser les clusters PostgreSQL depuis Nagios. Il offre de nombreuses options pour mesurer et superviser des indicateurs de performance utiles.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Extension Nagios check\_postgres pour vérifier l'état des bases de données PostgreSQL.
* [coroot](https://github.com/coroot/coroot) - Coroot est un outil open source d'APM et d'observabilité, alternative à DataDog et NewRelic. Il s'appuie sur eBPF pour fournir rapidement des informations sur les performances du système.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - Service SaaS de supervision qui collecte et visualise les métriques, les requêtes et les plans EXPLAIN, et envoie des alertes en cas de problème (logiciel commercial).
* [Instrumental](https://github.com/Instrumental/instrumentald) - Supervision des performances en temps réel, avec notamment des [graphiques prêts à l'emploi](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs) pour faciliter la configuration (logiciel commercial).
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Module complet de supervision PostgreSQL pour Zabbix.
* [myDBA](https://mydba.dev) - Supervision des performances PostgreSQL avec plus de 75 contrôles automatisés de l'état, un conseiller d'index tenant compte des clusters, l'analyse des requêtes et la supervision des extensions TimescaleDB, pgvector et PostGIS (logiciel commercial).
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management (PMM) est une plateforme gratuite et open source de supervision et de gestion de PostgreSQL, MySQL et MongoDB.
* [Pome](https://github.com/rach/pome) - Pome signifie PostgreSQL Metrics. Pome est un tableau de bord des métriques PostgreSQL permettant de suivre l'état de santé de votre base de données.
* [pgmetrics](https://pgmetrics.io/) - pgmetrics est un outil open source sans dépendance, livré sous forme d'un seul binaire, qui collecte de nombreuses informations et statistiques d'un serveur PostgreSQL en cours d'exécution, les affiche dans un format texte facile à lire ou les exporte en JSON et CSV pour les scripts.
* [pg\_view](https://github.com/zalando/pg_view) - Outil en ligne de commande open source affichant les statistiques globales du système, les informations par partition, les statistiques mémoire et d'autres informations.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Outil souple de supervision des métriques PostgreSQL, facile à prendre en main et centré sur les tableaux de bord Grafana.
* [pgwd](https://github.com/hrodrig/pgwd) - Supervise l'utilisation des connexions PostgreSQL et les sessions obsolètes, avec alertes à seuil, métriques Prometheus et plusieurs systèmes de notification.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - Exécute un test de performance sur PostgreSQL.
* [opm.io](http://opm.io) - Open PostgreSQL Monitoring est une suite logicielle libre conçue pour vous aider à gérer vos serveurs PostgreSQL. Elle collecte des statistiques, affiche des tableaux de bord et envoie des avertissements en cas de problème.
* [okmeter.io](https://okmeter.io/pg) - Agent SaaS commercial de supervision avec un module PostgreSQL très détaillé. Il collecte automatiquement des centaines de statistiques, affiche des tableaux de bord couvrant tous les aspects et envoie des alertes en cas de problème (logiciel commercial).
* [dexter](https://github.com/ankane/dexter) - Outil d'indexation automatique pour Postgres. Il détecte les requêtes lentes et crée des index si l'option correspondante est configurée.
* [pg_ash](https://github.com/NikolayS/pg_ash) - Historique des sessions actives pour PostgreSQL. Échantillonne pg_stat_activity chaque seconde via pg_cron, stocke des instantanés encodés et fournit 32 fonctions SQL pour analyser les événements d'attente. Entièrement en SQL, sans extension, fonctionne chez les fournisseurs gérés (RDS, Cloud SQL, Supabase, etc.).
* [pg_exporter](https://github.com/Vonng/pg_exporter) - Exportateur Prometheus entièrement personnalisable pour PostgreSQL et Pgbouncer, avec contrôle d'exécution précis.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Exportateur Prometheus pour les métriques du serveur PostgreSQL.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - Extension PostgreSQL open source conçue pour gérer efficacement et méthodiquement les statistiques avancées.
* [pgvitals](https://github.com/pgvitals/pgvitals) - Collection de 40 requêtes de diagnostic en lecture seule pour détecter les problèmes de performances courants (requêtes lentes, gonflement, retard de vacuum, contention de verrous, retard de réplication, risque de dépassement de compteur), utilisant uniquement le catalogue système standard sans extension requise, ainsi qu'une CLI facultative qui les agrège en un score de santé de 0 à 100.

<a id="extensions"></a>

### Extensions
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - Point central de distribution de nombreuses extensions PostgreSQL open source.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - Plus de 1 000 extensions PostgreSQL.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - Plus de 400 extensions PostgreSQL.
* [AGE](https://github.com/apache/age) - Ajoute une prise en charge complète des bases de données graphe, y compris les requêtes Cypher.
* [OrioleDB](https://www.orioledb.com/) - Moteur de stockage cloud natif pour PostgreSQL. OrioleDB est une extension PostgreSQL qui combine les avantages des moteurs sur disque et en mémoire.
* [Citus](https://github.com/citusdata/citus) - Cluster PostgreSQL évolutif pour les charges de travail en temps réel.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - Stockage en colonnes pour l'analyse avec PostgreSQL.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit assure la journalisation dans la base de toutes les opérations DML, colonne par colonne.
* [pg_search](https://github.com/paradedb/paradedb) - pg_search est une extension PostgreSQL qui permet la recherche en texte intégral dans les tables SQL à l'aide de l'algorithme BM25, une fonction de classement de pointe pour ce type de recherche.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - Extension PostgreSQL pour la recherche lexicale de la famille BM25, avec méthode d'accès native aux index et API SQL pour les requêtes top-k.
* [pg_cron](https://github.com/citusdata/pg_cron) - Exécute des tâches périodiques dans PostgreSQL.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - Extension fournissant la réplication logique en continu.
* [pgcat](https://github.com/kingluo/pgcat) - Réplication logique PostgreSQL améliorée.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - Générateur de codes QR SVG et de codes Data Matrix pour PostgreSQL.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - Extension de gestion du partitionnement pour PostgreSQL.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Implémentation élémentaire de Paxos et de la réplication de tables basée sur Paxos pour un cluster de nœuds PostgreSQL.
* [pg\_shard](https://github.com/citusdata/pg_shard) - Extension pour répartir les lectures et écritures en temps réel.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - Outil de supervision des performances des requêtes PostgreSQL.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - Extension de nettoyage automatique du gonflement avec un verrouillage minimal.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - Extension qui déporte vers le GPU les charges de travail gourmandes en CPU.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - Extension PostgreSQL qui exécute en continu des requêtes SQL sur des flux et stocke progressivement les résultats dans des tables.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - Extension permettant de vérifier le code source plpgsql.
* [PostGIS](http://postgis.net/) - Objets spatiaux et géographiques pour PostgreSQL.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Liaison de la bibliothèque cryptographique Themis sous forme d'extension Postgres, fournissant divers services de sécurité côté PgSQL.
* [zomboDB](https://github.com/zombodb/zombodb) - Extension permettant une recherche en texte intégral efficace à l'aide d'index adossés à Elasticsearch.
* [pgMemento](https://github.com/pgMemento/pgMemento) - Fournit une piste d'audit des données dans une base PostgreSQL à l'aide de déclencheurs et de fonctions côté serveur écrites en PL/pgSQL.
* [TimescaleDB](https://www.timescale.com/) - Base de données open source de séries temporelles, entièrement compatible avec Postgres et distribuée sous forme d'extension.
* [pgTAP](https://pgtap.org/) - Cadriciel de tests de bases de données pour Postgres.
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG fournit une fonctionnalité d'index hypothétiques/virtuels.
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRouting étend la base de données géospatiale PostGIS/PostgreSQL pour fournir des fonctions de calcul d'itinéraires géospatiaux et d'autres analyses de réseaux.
* [PGroonga](https://pgroonga.github.io/) - PGroonga fournit une nouvelle méthode d'accès aux index utilisant Groonga, qui permet une recherche en texte intégral ultrarapide dans toutes les langues.
* [PGAudit](https://www.pgaudit.org/) - L'extension d'audit PostgreSQL (pgaudit) fournit une journalisation détaillée des audits de session et/ou d'objets via le mécanisme de journalisation standard de PostgreSQL.
* [PostgresML](https://postgresml.org/) - Apprentissage automatique et IA dans votre base de données, avec notamment des vecteurs, des LLM et du ML classique. Entraînez, exécutez des prédictions et gérez tout le cycle de vie des modèles d'apprentissage automatique en utilisant uniquement SQL.
* [ParadeDB](https://github.com/paradedb/paradedb) - Postgres pour la recherche et l'analyse.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Extension permettant de masquer ou de remplacer les informations personnellement identifiables (PII) ou les données sensibles sur le plan commercial d'une base Postgres, au moyen des étiquettes de sécurité PG.

<a id="platforms"></a>

### Plateformes
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - Plateforme spatiotemporelle 4D open source qui combine PostGIS, TimescaleDB, pgvector et H3 pour une analyse unifiée des données géospatiales et des séries temporelles.
* [neond](https://github.com/matisiekpl/neond) - Plan de contrôle Postgres axé sur l'expérience développeur (DX), avec branchement, PITR et durabilité S3. Distribué sous la forme d'un conteneur Docker unique avec tableau de bord Web ; se présente comme un remplacement de `postgres:latest` pour les charges de travail non critiques.

<a id="work-queues"></a>

### Files de travaux
* [BeanQueue](https://github.com/LaunchPlatform/bq) - Cadriciel de files de travaux Python reposant sur SKIP LOCKED, LISTEN et NOTIFY.
* [pgmq](https://github.com/pgmq/pgmq) - File de messages légère. Comme AWS SQS et RSMQ, mais sur Postgres.
* [river](https://github.com/riverqueue/river) - Système performant de traitement des tâches pour Go et Postgres.
* [pgBoss](https://github.com/timgit/pg-boss) - Mise en file d'attente de tâches dans Postgres depuis Node.js, avec panache.
* [dbos](https://www.dbos.dev/) - Flux de travail durables en TypeScript et Python.
* [Graphile Worker](https://worker.graphile.org) - File de travaux performante pour PostgreSQL, écrite en Node.js.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - La file d'attente Postgres pour Node.js « sans maintenance ».

<a id="optimization"></a>

### Optimisation
* [EverSQL](https://www.eversql.com/) - Outil automatisé d'optimisation des requêtes, de supervision et d'analyse, ainsi que de recommandation d'index (logiciel commercial).
* [PEV2](https://github.com/dalibo/pev2) - Visualiseur en ligne de plans EXPLAIN de Postgres.
* [pg_flame](https://github.com/mgartner/pg_flame) - Générateur de flame graphs à partir des plans de requêtes.
* [PgHero](https://github.com/ankane/pghero) - Des informations sur PostgreSQL en toute simplicité.
* [pgMustard](https://www.pgmustard.com/) - Interface utilisateur moderne
pour `EXPLAIN`, qui fournit également des conseils de performances (logiciel commercial).
* [pgtune](https://github.com/gregs1104/pgtune/) - Assistant de configuration PostgreSQL.
* [pgtune](https://github.com/le0pard/pgtune) - Version en ligne de l'assistant de configuration PostgreSQL.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - Outil de configuration PostgreSQL en ligne (également basé sur pgtune).
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL Workload Analyzer collecte des statistiques de performances et fournit des graphiques en temps réel pour vous aider à superviser et à optimiser vos serveurs PostgreSQL.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - Interface Web pour consulter pg_stat_statements.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - Programme qui optimise une base de données TimescaleDB en fonction des ressources de l'hôte, comme la mémoire et le nombre de processeurs.
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis fournit des fonctions d'observabilité et d'optimisation des performances pour les bases de données SQL, dont PostgreSQL (logiciel commercial).
* [aqo](https://github.com/postgrespro/aqo) - Optimisation adaptative des requêtes pour PostgreSQL.
* [pgassistant](https://github.com/beh74/pgassistant-community) - Outil PostgreSQL destiné aux développeurs pour comprendre et optimiser les bases de données avec un LLM et l'intégration de pgTune.

<a id="utilities"></a>

### Utilitaires
* [apgdiff](https://www.apgdiff.com/) - Compare deux fichiers de vidage de base de données et produit des instructions DDL permettant de mettre à jour un ancien schéma vers un nouveau.
* [bemi](https://github.com/BemiHQ/bemi) - Suivi automatique des modifications de données pour PostgreSQL.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy génère des diagrammes de relations entre entités à partir de bases de données.
* [flyway](https://flywaydb.org/) - Outil de migration de schémas pour Postgres et d'autres bases.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - Passerelle de base de données cloud native et cadriciel pour créer des applications axées sur les données. Comme les passerelles d'API, mais pour les bases de données.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - Outil d'anonymisation de bases de données et de génération de données synthétiques pour MySQL et PostgreSQL.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - API GraphQL instantanées et en temps réel, ultrarapides, sur Postgres, avec contrôle d'accès précis ; déclenche également des webhooks lors d'événements de base de données.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - Synchronise les rôles et les privilèges à partir de YML et de LDAP.
* [migra](https://github.com/djrobstep/migra) - Comme diff, mais pour les schémas Postgres.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Script de conversion de MySQL vers PostgreSQL de Lanyrd.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - La bibliothèque NServiceBus.Transport.PostgreSql permet aux développeurs .NET d'[utiliser une base de données PostgreSQL comme courtier de messages](https://docs.particular.net/transports/postgresql) (logiciel commercial).
* [ora2pg](http://ora2pg.darold.net) - Module Perl pour exporter le schéma d'une base Oracle vers un schéma compatible avec PostgreSQL.
* [pg\_activity](https://github.com/dalibo/pg_activity) - Application de type top pour superviser l'activité d'un serveur PostgreSQL.
* [pg-formatter](https://github.com/gajus/pg-formatter) - Formateur de syntaxe SQL PostgreSQL (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - Moteur de migration Node.js privilégiant la sécurité, avec verrous consultatifs, détection de dérive SHA-256 et 10 règles d'analyse intégrées pour PostgreSQL.
* [pganalyze](https://pganalyze.com) - Supervision des performances PostgreSQL (logiciel commercial).
* [pgbadger](https://github.com/darold/pgbadger) - Analyseur rapide de journaux PostgreSQL.
* [PgBouncer](http://www.pgbouncer.org/) - Pooler de connexions léger pour PostgreSQL.
* [pgCenter](https://github.com/lesovsky/pgcenter) - Fournit une interface pratique pour diverses statistiques, les tâches d'administration, le rechargement des services, la consultation des fichiers journaux et l'annulation ou l'arrêt des processus serveur de base de données.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Réplication en temps réel de MySQL vers PostgreSQL, avec remplacement facultatif des types et capacités de migration.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - Exporte les données de PostgreSQL dans différents formats.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - Extension de navigateur qui redirige les liens vers la documentation PostgreSQL vers la version actuelle.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - Importe facilement des fichiers CSV et JSON dans PostgreSQL.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - Fonction PostgreSQL open source facile à déployer, qui fournit une liste priorisée de mesures pour améliorer la stabilité et les performances de la base de données. Directement inspirée de FirstResponderKit de Brent Ozar pour SQL Server.
* [PGInsight](http://pginsight.io/) - Outil CLI pour explorer facilement votre base PostgreSQL en profondeur.
* [pg_insights](https://github.com/lob/pg_insights) - Requêtes SQL pratiques pour superviser l'état de santé d'une base Postgres.
* [pgloader](https://github.com/dimitri/pgloader) - Charge des données dans PostgreSQL à l'aide du protocole de streaming COPY, en utilisant des threads distincts pour la lecture et l'écriture.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Collecte et visualisation des métriques Postgres, déployables sur du matériel physique, des machines virtuelles ou Kubernetes.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - Intergiciel fournissant le regroupement de connexions, la réplication, l'équilibrage de charge et la limitation des connexions excédentaires.
* [pgspot](https://github.com/timescale/pgspot) - Détecte les vulnérabilités dans les scripts d'extensions PostgreSQL.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - Démon permettant d'exécuter Postgres avec état sur des machines virtuelles AWS Spot économiques.
* [pgsync](https://github.com/ankane/pgsync) - Outil de synchronisation des données PostgreSQL vers votre machine locale.
* [PGXN client](https://github.com/pgxn/pgxnclient) - Outil en ligne de commande pour interagir avec PostgreSQL Extension Network.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - Outil qui extrait et fournit des métriques pour votre base de données PostgreSQL.
* [PostgREST](https://github.com/PostgREST/postgrest) - Fournit une API entièrement RESTful à partir de toute base PostgreSQL existante.
* [pREST](https://github.com/prest/prest) - Fournit une API RESTful à partir de toute base PostgreSQL (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - API GraphQL instantanée ou schéma GraphQL pour votre base PostgreSQL.
* [yoke](https://github.com/nanopack/yoke) - Cluster PostgreSQL hautement disponible avec basculement automatique et récupération automatisée du cluster.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Démon léger PostgreSQL `LISTEN`/`NOTIFY` s'appuyant sur `node-postgres`.
* [ZSON](https://github.com/postgrespro/zson) - Extension PostgreSQL pour la compression transparente de JSONB.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - Outil de chargement de données à haute vitesse pour PostgreSQL.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - Gère les bases de code PostgreSQL et simplifie l'utilisation du contrôle de versions (VCS).
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Planificateur de tâches avancé pour PostgreSQL.
* [sqitch](https://github.com/sqitchers/sqitch) - Outil de gestion du déploiement de schémas versionnés.
* [pgmigrate](https://github.com/yandex/pgmigrate) - Outil CLI pour faire évoluer les migrations de schémas, développé par Yandex.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - Outil de comparaison de schémas de bases de données, permettant d'accepter certaines différences persistantes.
* [pg-differ](https://github.com/multum/pg-differ) - Outil de préparation et de mise à jour faciles de la structure des tables PostgreSQL, alternative aux migrations (Node.js).
* [Qail](https://github.com/qail-io/qail) - Chaîne de traitement AST typée, privilégiant Rust, pour PostgreSQL, avec vérification des requêtes à la compilation et portée intégrée par locataire.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - Détecte automatiquement les anti-modèles SQL courants. Ces anti-modèles ralentissent souvent les requêtes ; les corriger permet donc de les accélérer.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Outil de diagnostic de nouvelle génération permettant de recueillir une analyse approfondie de l'état de santé d'une base Postgres.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Gestion des versions de schémas de bases de données Postgres.
* [ScaffoldHub.io](https://scaffoldhub.io) - Génère des applications PostgreSQL full stack avec Angular, Vue ou React (logiciel commercial).
* [planter](https://github.com/achiku/planter) - Génère une description textuelle de diagramme ER PlantUML à partir de tables PostgreSQL.
* [pgroll](https://github.com/xataio/pgroll) - Migrations de schémas réversibles et sans interruption de service pour Postgres.
* [RegreSQL](https://github.com/dimitri/regresql) - Outil de création, de maintenance et d'exécution d'une suite de tests de régression pour les requêtes SQL.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Analyseur de modèles de migration Postgres dangereux dans Diesel et SQLx.

<a id="language-bindings"></a>

### Liaisons de langage
* Common Lisp : [Postmodern](https://github.com/marijnh/Postmodern)
* Clojure : [clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir : [postgrex](https://github.com/elixir-ecto/postgrex)
* Go : [pq](https://github.com/lib/pq), [pgx](https://github.com/jackc/pgx), [go-pg](https://github.com/go-pg/pg)
* Haskell : [postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java : [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/), [Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua : [luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core : [Npgsql](https://github.com/npgsql/npgsql)
* Node : [node-postgres](https://github.com/brianc/node-postgres), [pg-promise](https://github.com/vitaly-t/pg-promise), [pogi](https://github.com/holdfenytolvaj/pogi), [slonik](https://github.com/gajus/slonik), [postgres](https://github.com/porsager/postgres)
* Perl : [DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP : [Pomm](http://www.pomm-project.org), [pecl/pq](https://github.com/m6w6/ext-pq)
* Python : [psycopg2](https://pypi.org/project/psycopg2/), [asyncpg](https://pypi.org/project/asyncpg/), [pg8000](https://pypi.org/project/pg8000/)
* R : [RPostgres](https://github.com/r-dbi/RPostgres), [RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby : [pg](https://github.com/ged/ruby-pg)
* Rust : [rust-postgresql](https://github.com/sfackler/rust-postgres), [pgx](https://github.com/tcdi/pgx), [wtx](https://github.com/c410-f3r/wtx)
* TypeScript : [zapatos](https://github.com/jawj/zapatos)
* Zig : [pg.zig](https://github.com/karlseguin/pg.zig), [qail-zig](https://github.com/qail-io/qail-zig)

<a id="paas-postgresql-as-a-service"></a>

### PaaS *(PostgreSQL en tant que service)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - PostgreSQL en tant que service sur AWS, Azure, DigitalOcean, Google Cloud et UpCloud ; les offres vont d'instances à nœud unique à 19 $/mois à de grandes configurations hautement disponibles. Essai gratuit de deux semaines.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (RDS) pour PostgreSQL.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL fournit une base PostgreSQL communautaire entièrement gérée, prête pour l'entreprise et proposée en tant que service. Elle offre une haute disponibilité intégrée, une mise à l'échelle élastique et une intégration native à l'écosystème Azure.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres entièrement géré par des experts de Postgres. Disponible chez tous les principaux fournisseurs cloud : Amazon AWS, Google GCP et Microsoft Azure. Aucun enfermement propriétaire et accès complet aux privilèges de superutilisateur.
* [Database Labs](https://www.databaselabs.io) - Obtenez en quelques minutes un serveur PostgreSQL cloud prêt pour la production, à partir de 20 $ par mois. Sauvegardes, supervision, correctifs et assistance technique 24 h/24 et 7 j/7 inclus.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - Bases PostgreSQL entièrement gérées. Pas d'offre gratuite. À partir de 15 $/mois. Sauvegardes quotidiennes avec récupération à un instant précis. Nœuds de secours avec basculement automatique.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Service de base de données entièrement géré qui facilite la configuration, la maintenance, la gestion et l'administration de vos bases relationnelles PostgreSQL sur Google Cloud Platform.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - Des offres gratuites aux grandes configurations, exploitées par des experts PostgreSQL. N'impose pas d'héberger votre application sur Heroku. L'offre gratuite comprend 10 000 lignes, 20 connexions, jusqu'à deux sauvegardes et la prise en charge de PostGIS.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - PostgreSQL hautement disponible, évolutif et sécurisé. Sauvegardes quotidiennes avec récupération à un instant précis, sans enfermement propriétaire, trafic entrant et sortant gratuit.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - PostgreSQL géré, sécurisé, fiable et entièrement pris en charge. Chiffrement au repos, sauvegardes automatisées et stockage SSD extensible inclus dans toutes les offres. Les offres commencent à 7 $ par mois pour 256 Mo de RAM et 1 Go de stockage (gratuit pendant les 90 premiers jours).
* [Rivestack](https://rivestack.io) - PostgreSQL géré avec pgvector préinstallé et optimisé pour HNSW pour la recherche vectorielle. Offre gratuite (2 Go, sans carte bancaire), instances dédiées à prix fixe à partir de 15 $/mois, régions UE et États-Unis.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - Hébergement PostgreSQL entièrement géré, avec haute disponibilité, serveurs dédiés et contrôle superutilisateur, sur l'alternative multicloud numéro un à Amazon RDS.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - Bases PostgreSQL entièrement gérées, avec haute disponibilité, mise à l'échelle et sauvegardes automatisées, hébergées dans l'UE. À partir de 10 € par mois.
* [Supabase](https://www.supabase.com) - Postgres entièrement géré avec réplicas en lecture, récupération à un instant précis, offres d'assistance, interface graphique dans le navigateur et généreuse offre gratuite.
* [Neon](https://neon.tech) - PostgreSQL serverless entièrement géré. Neon dissocie le stockage du calcul pour proposer des fonctionnalités modernes aux développeurs, comme le serverless, le branchement, le stockage illimité et bien plus encore.
* [Nile](https://www.thenile.dev/) - PostgreSQL entièrement géré. Nile dissocie le stockage du calcul et virtualise les locataires pour créer rapidement et en toute sécurité des applications d'IA multilocataires évolutives sans limite. L'offre gratuite fournit un nombre illimité de bases de données.
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale for Postgres fournit des clusters de bases PostgreSQL hautement disponibles et entièrement gérés, construits sur une infrastructure cloud moderne.
* [Vela](https://vela.run) - Backend en tant que service fondé sur Postgres, conçu pour les applications d'IA modernes. Offre des branches et des clones de bases instantanés, des environnements de test proches de la production et une mise à l'échelle serverless.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - Base PostgreSQL entièrement gérée, multizone (multi-AZ), avec sauvegardes automatisées et hébergement aux Pays-Bas.

<a id="docker-images"></a>

### Images Docker
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Images officielles citusdata avec les extensions citus. Basées sur le conteneur Postgres officiel.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 sur Postgres 9. Basée sur le conteneur Postgres officiel.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB est Postgres pour la recherche et l'analyse. Basée sur le conteneur Postgres officiel avec l'extension pg_search.
* [pglayers](https://github.com/pglayers/pglayers) - Extensions PostgreSQL précompilées sous forme de couches Docker combinables. Plus de 50 extensions et images combinées prêtes à l'emploi (complète, compatible Azure).
* [postgres](https://hub.docker.com/_/postgres/) - Conteneur postgres officiel (de Docker).

<a id="kubernetes"></a>

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - PostgreSQL prêt pour la production sur Kubernetes, des clusters Postgres hautement disponibles jusqu'aux services de bases de données à grande échelle.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - PostgreSQL de niveau entreprise sur OpenShift Container Platform (logiciel commercial).
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegres est un opérateur Kubernetes qui permet de déployer un ou plusieurs clusters d'instances PostgreSql et de gérer la réplication des bases de données, le basculement et les sauvegardes.
* [StackGres Operator](https://github.com/ongres/stackgres/) - PostgreSQL complet sur Kubernetes.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Crée et gère des clusters PostgreSQL exécutés dans Kubernetes.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Plateforme complète conçue pour gérer facilement les bases PostgreSQL dans des environnements Kubernetes.
* [KubeDB operator](https://kubedb.com/) - Exécutez des bases de données de qualité production sur Kubernetes (logiciel commercial).
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Opérateur Percona pour PostgreSQL basé sur l'opérateur Crunchy Data.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest Operator est un opérateur Kubernetes chargé de gérer le cycle de vie des bases de données MySQL, MongoDB et PostgreSQL. En coulisses, il utilise les opérateurs Kubernetes Percona pour MySQL, MongoDB et PostgreSQL, tout en fournissant une API unifiée et une interface unique pour gérer les trois types de bases de données.

<a id="resources"></a>

## Ressources

<a id="tutorials"></a>

### Tutoriels
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - Tutoriel sur la configuration de l'archivage continu dans PostgreSQL avec wal-e.
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - Aide-mémoire des opérations du wiki PostgreSQL.
* [PG Casts](https://www.pgcasts.com) - Tutoriels vidéo hebdomadaires gratuits sur PostgreSQL, proposés par Hashrocket.
* [Postgres Guide](http://postgresguide.com/) - Guide conçu pour aider les débutants comme les utilisateurs expérimentés à trouver des conseils précis et à découvrir les outils disponibles dans PostgreSQL.
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - Le modèle mental complet : rôles, autorisations (grants), propriété, appartenance, politiques et privilèges par défaut considérés comme un système intégré. PDF et vidéo, environ 60 minutes.
* [PostgreSQL Exercises](https://pgexercises.com/) - Site conçu pour faciliter l'apprentissage de PostgreSQL au moyen d'exercices pratiques.
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - Collection très complète de tutoriels sur PostgreSQL.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Collection de schémas Postgres d'exemple.
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - Collection des commandes PostgreSQL les plus courantes.
* [pg-utils](https://github.com/dataegret/pg-utils) - Outils utiles d'administration de bases de données par Data Egret.
* [pagila](https://github.com/xzilla/pagila) - Base de données Postgres d'exemple Pagila.
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - Référence complète de la syntaxe SQL couvrant les fonctions de fenêtrage, les CTE et les syntaxes propres à PostgreSQL (UPSERT, requêtes JSON, opérations sur les tableaux).

<a id="blogs"></a>

### Blogs
* [Planet PostgreSQL](https://planet.postgresql.org/) - Service d'agrégation de blogs consacrés à PostgreSQL.
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - Série d'articles sur les fonctionnalités intéressantes de PostgreSQL, avec des conseils et astuces.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Blog de Josh Berkus.
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Blog de Hubert Lubaczewski.
* [Metis Blog](https://www.metisdata.io/blog) - Série d'articles sur PostgreSQL, les bases de données SQL, les performances et l'optimisation.
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md)
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - Blog de l'auteur de PIGSTY, avec des articles instructifs sur PostgreSQL, les bases de données et l'infrastructure cloud.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - Blog de l'équipe BigData Boutique, principalement consacré à l'analyse).

<a id="books"></a>

### Livres
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Livre électronique gratuit de Hironobu Suzuki.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Livre électronique gratuit d'Egor Rogov.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Guide pratique pour faire évoluer Postgres en production, couvrant l'optimisation, le regroupement de connexions, le partitionnement et la haute disponibilité.

<a id="documentation"></a>

### Documentation
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - Documentation utilisateur, guides pratiques et conseils et astuces.
* [pgPedia](https://pgpedia.info/) - Encyclopédie consacrée à PostgreSQL.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - Projet visant à générer la documentation de tous les symboles du code source PostgreSQL à l'aide d'agents d'IA.

<a id="newsletters"></a>

### Infolettres

* [Postgres Weekly](https://postgresweekly.com/) - Infolettre hebdomadaire contenant des articles, des actualités et des dépôts utiles à la communauté PostgreSQL.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Infolettre mensuelle comprenant des articles et des vidéos sur les performances de Postgres.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - Résumé hebdomadaire de la liste de diffusion pgsql-hackers, présentant les discussions actives, leur synthèse et plus encore.

<a id="podcasts"></a>

### Podcasts
* [PostgresFM](https://postgres.fm/) - Discussions hebdomadaires sur des sujets liés à Postgres.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Sélections hebdomadaires de contenus liés à PostgreSQL.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Entretiens mensuels avec des personnes du monde Postgres.

<a id="videos"></a>

### Vidéos
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Vidéos sur Citus.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - Vidéos sur EnterpriseDB.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - Vidéos de conférences.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Série de vidéos de blog sur Postgres par Creston Jamison.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Conférences, sessions de développement, entretiens et épisodes de podcast consacrés à Postgres.

<a id="community"></a>

### Communauté
* [Mailing lists](https://www.postgresql.org/list/) - Listes de diffusion officielles de Postgres pour l'assistance, la sensibilisation et bien plus encore. Elles comptent parmi les principaux canaux de communication de la communauté Postgres.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - Communauté Reddit des utilisateurs de PostgreSQL, qui compte plus de 12 000 membres.
* [Slack](https://pgtreats.info/slack-invite) - Espace de travail Slack de Postgres, qui compte plus de 20 000 membres.
* Telegram - Plusieurs groupes PostgreSQL dans différentes langues : [russe](https://t.me/pgsql) plus de 4 200 personnes, [portugais brésilien](https://t.me/postgresqlbr) plus de 2 300 personnes, [indonésien](https://t.me/postgresql_id) environ 1 000 personnes, [anglais](https://t.me/postgreschat) plus de 750 personnes.
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Le canal IRC le plus populaire consacré à Postgres sur Freenode, avec plus de 1 000 utilisateurs.
* [Discord](https://discord.gg/bW2hsax8We) - Serveur Discord consacré à Postgres, qui compte plus de 6 000 membres.

<a id="roadmaps"></a>

### Feuilles de route
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - Feuille de route proposant un guide étape par étape pour PostgreSQL.

<a id="external-lists"></a>

### Listes externes
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Comparaison des outils d'administration de bases de données sur Wikipedia.
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - Guide communautaire des interfaces graphiques PostgreSQL.
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Wrappers de données externes.
