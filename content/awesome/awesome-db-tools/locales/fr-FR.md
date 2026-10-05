# Sélection d’outils de base de données [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Liste communautaire des outils de base de données

Ici, nous allons collecter des informations sur des outils expérimentaux formidables et utiles qui simplifient le travail avec des bases de données pour DBA, DevOps, Développeurs et de simples mortels.

N'hésitez pas à ajouter des informations sur vos propres outils db ou vos outils tiers préférés.

Pour les mises à jour `awesome-db-tools` et thoughts/news sur les bases de données/outils/SQL [@GraminMaksim](https://twitter.com/GraminMaksim)

## Sommaire
- [IDE](#ide)
- [GUI](#gui)
- [CLI](#cli)
- [Schéma](#schema)
  - [Changements](#changes)
  - [Génération de codes](#code-generation)
  - [Schémas](#diagrams)
  - [Documentation](#documentations)
  - [Conception](#design)
  - [Échantillons](#samples)
- [API](#api)
- [Plateformes d'application](#application-platforms)
- [Sauvegarde](#backup)
- [Clonage](#cloning)
- [Surveillance/Statistiques/Performance](#monitoringstatisticsperformance)
  - [Prométhée](#prometheus)
  - [Zabbix](#zabbix)
- [Essais](#testing)
- [HA/Échec/Fardage](#hafailoversharding)
- [Kubernetes](#kubernetes)
- [Réglage de la configuration](#configuration-tuning)
- [DevOps](#devops)
- [Rapports](#reporting)
- [Distributions](#distributions)
- [Sécurité](#security)
- [SQL](#sql)
  - [Analyseurs](#analyzers)
  - [Générateurs de code](#code-generators)
  - [Prorogations](#extensions)
  - [Cadres](#frameworks)
  - [Formateurs](#formatters)
  - [Jeux](#games)
  - [Parsers](#parsers)
  - [Über SQL](#über-sql)
  - [Protocole de serveur de langue](#language-server-protocol)
  - [Apprentissage](#learning)
  - [Plan](#plan)
  - [Scénarios](#scripts)
- [Données](#data)
  - [Catalogue](#catalog)
  - [Ligne](#lineage) 
  - [Génération/Making/Subsetting](#generationmaskingsubsetting)
  - [Profileurs de données](#data-profilers)
  - [Réplication](#replication) 
  - [Comparer](#compare) 
- [Papiers](#papers)
- [Apprentissage automatique](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - Premier outil d'administration polyvalent pour la gestion, le contrôle et le développement des bases de données.
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Logiciel de productivité pour les développeurs de bases de données, DBA, et Analystes.
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - IDE moderne pour les ingénieurs d'analyse et d'analyse avec une puissante fonctionnalité de script et de grille.
- [Database .net](http://fishcodelib.com/Database.htm) - Outil de gestion de bases de données multiples avec support pour les bases de données 20+.
- [Database Workbench](https://www.upscene.com/database_workbench/) - IDE complet pour la conception, le développement et les tests de bases de données pour Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite et NexusDB .
- [DataGrip](https://www.jetbrains.com/datagrip) - IDE multiplateforme pour les bases de données et SQL par JetBrains
- [DataStation](https://github.com/multiprocessio/datastation) - Requérez, scriptez et visualisez facilement les données de chaque base de données, fichier et API.
- [DBeaver](https://github.com/dbeaver/dbeaver) - Gestionnaire de base de données universel gratuit et client SQL.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - Multidatabase solution pour le développement, la conception, la gestion et l'administration de MySQL, MariaDB, SQL Server, Oracle, bases de données PostgreSQL, et divers services cloud.
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - IDE universel pour le développement, la gestion et l'administration des bases de données MySQL et MariaDB.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - IDE puissant pour la gestion, l'administration et le développement Oracle.
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - Outil GUI pour la gestion et le développement des bases de données et des objets.
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - Un environnement de développement intégré puissant pour le développement, la gestion, l'administration, l'analyse des données et le reporting de SQL Server.
- [DBHawk](https://www.datasparc.com/) - Datasparc offre la sécurité des bases de données, la gestion des bases de données, la gouvernance des bases de données et l'analyse des données - le tout dans une seule solution.
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - Moderne (cadre JavaScript/Electron), IDE open source pour MongoDB. Il a des caractéristiques pour soutenir le développement, l'administration et le réglage des performances sur les bases de données MongoDB.
- [IBExpert](http://www.ibexpert.net/ibe) - Outil GUI complet pour Firebird et InterBase.
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Un client léger pour gérer MySQL, MSSQL et PostgreSQL, écrit en Delphi.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Un client SQL et un outil d'administration alimenté par l'IA pour les bases de données populaires (SQLite / MySQL / PostgreSQL / etc) sur Windows / macOS / Linux, conception de table de support, requête, modèle, synchronisation, exportation/importation etc, se concentrer sur confortable, amusant et convivial développeur.
- [KeepTool](https://keeptool.com) - Une suite d'outils professionnels pour les développeurs de bases de données Oracle, les administrateurs et les utilisateurs d'applications avancées.
- [MySQL Workbench](https://www.mysql.com/products/workbench) - Outil visuel unifié pour les architectes de bases de données, les développeurs et les DBA.
- [Navicat](https://www.navicat.com/en/products#navicat) - Un outil de développement de base de données qui vous permet de vous connecter simultanément à MySQL, MariaDB, SQL Server, Oracle, PostgreSQL et SQLite bases de données à partir d'une application unique --
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Un environnement de développement libre et intégré qui simplifie le développement et la gestion d'Oracle Database dans les déploiements traditionnels et Cloud.
- [pgAdmin](https://www.pgadmin.org) - La plateforme d'administration et de développement Open Source la plus populaire et la plus riche pour PostgreSQLTM, la base de données Open Source la plus avancée au monde.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - Soutien à long terme pour pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE qui est spécifiquement ciblé sur le développement d'unités de programme stockées pour les bases de données Oracle.
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - Outil complet et puissant de gestion de base de données, d'administration et de développement pour PostgreSQL .
- [Querybook](https://github.com/pinterest/querybook) - Pinterest Open-source Big Data Querying UI, combinant des métadonnées de table regroupées et une interface IDE simple de portable.
- [Slashbase](https://github.com/slashbaseide/slashbase) - L'IDE collaboratif open-source pour vos bases de données. Connectez-vous à votre base de données, naviguez sur les données, exécutez un tas de commandes SQL ou partagez des requêtes SQL avec votre équipe, directement depuis votre navigateur.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - Environnement intégré pour gérer n'importe quelle infrastructure SQL, pour SQL Server et Azure SQL Databases.
- [Toad](https://www.quest.com/toad/) - Solution de base de données Premier pour les développeurs, les administrateurs et les analystes de données. Gérer les changements complexes de base de données avec un seul outil de gestion de base de données .
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - Outil de développement de base de données simplifié pour MySQL et PostgreSQL .
- [TOra](https://github.com/tora-tool/tora) - Open source SQL IDE pour Oracle, MySQL et PostgreSQL dbs.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Créez, administrez, interrogez et explorez les bases de données Valentina DB, MySQL, MariaDB, PostgreSQL et SQLite gratuitement.
- [WebDB](https://webdb.app) - IDE gratuit de base de données efficaces. Avec Serveur Discovery, ERD, Générateur de données, AI, NoSQL Gestionnaire de structure, Version de base de données et bien d'autres.


## GUI
- [Adminer](https://github.com/vrana/adminer) - Gestion de la base de données dans un seul fichier PHP.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - Gestionnaire gratuit Open Source Redis. Disponible sur Mac, Linux, Windows, Homebrew, Snap, winget, et plus encore.
- [Antares SQL](https://github.com/antares-sql/antares) - Un client SQL moderne, rapide et productif avec un focus en UX. Disponible pour Mac, Linux et Windows.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Un outil de gestion de données qui permet de travailler avec SQL Server, PostgreSQL, Azure SQL DB et SQL DW depuis Windows, macOS et Linux.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - Open Source SQL Editor et Database Manager avec un engagement de confidentialité dans leur énoncé de mission.
- [Clidey WhoDB](https://github.com/clidey/whodb) - Un explorateur de bases de données léger avec UX next-gen pour tous SQL, NoSQL, Caches et Queues.
- [DbGate](https://github.com/dbgate/dbgate) - Gestionnaire de bases de données pour MySQL, PostgreSQL, SQL Server, MongoDB, SQLite et autres. Exécute sous Windows, Linux, Mac ou comme application web.
- [DB Lens](https://github.com/dblens/app) - Open Source PostgreSQL GUI - Automatic ER diagrams, Internal DB Insights, Disk Ustilization, Performance Metrics, Index Use, Sequential scan compte et plus encore.
- [DbVisualizer](https://www.dbvis.com) - Outil de base de données universel pour les développeurs, DBA et analystes.
- [JackDB](https://www.jackdb.com) - Accès direct SQL à toutes vos données, où qu'elles se trouvent.
- [Jailer](https://github.com/Wisser/Jailer) - Base de données et outil de navigation/client.
- [Malewicz](https://github.com/mgramin/malewicz) - Encore un autre client WEB pour le schéma DB explorant et l'analyse des performances, mais initialement créé spécifiquement pour le piratage et l'extension.
- [MissionKontrol](https://www.missionkontrol.io) - Panneau d'administration/client drag & drop moderne avec les permissions complètes des utilisateurs non techniques.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - Pour MySQL, MariaDB et Tarantool. Développé pour Linux mais peut fonctionner sous Windows.
- [OmniDB](https://github.com/OmniDB/OmniDB) - Outil Web pour la gestion des bases de données.
- [Pgweb](https://github.com/sosedoff/pgweb) - Navigateur de base de données Web pour PostgreSQLTM, écrit en Go et fonctionne sur les machines macOS, Linux et Windows.
- [phpLiteAdmin](https://www.phpliteadmin.org) - Outil d'administration de base de données SQLite basé sur le Web écrit en PHP avec support pour SQLite3 et SQLite2.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Une interface web pour MySQL et MariaDB.
- [psequel](http://www.psequel.com) - Fournit une interface propre et simple pour vous d'effectuer des tâches communes PostgreSQLTM rapidement.
- [PopSQL](https://popsql.com) - Éditeur SQL moderne et collaboratif pour votre équipe.
- [Postico](https://eggerapps.at/postico) - Un client PostgreSQL moderne pour Mac.
- [Robo 3T](https://github.com/Studio3T/robomongo) - Outil de gestion multiplateforme multiplateforme shell.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - Gestion de la base de données MySQL/MariaDB pour macOS.
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - Application de gestion de base de données Mac rapide et facile à utiliser pour travailler avec les bases de données MySQL & MariaDB.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - L'interface graphique prend en charge toutes les fonctionnalités SQLite.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Un TUI pour visionner les bases de données SQLite, écrit dans Go.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - L'éditeur SQL basé sur le Web fonctionne dans votre propre cloud privé.
- [SQLPro](https://www.macpostgresclient.com) - Un gestionnaire PostgreSQL simple et puissant pour macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Client SQL graphique écrit en Java qui vous permettra de visualiser la structure d'une base de données JDBC conforme, de parcourir les données dans les tableaux, de lancer des commandes SQL, etc.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - Gestion des bases de données pour VSCode.
- [SQLyog](https://www.webyog.com/product/sqlyog) - L'interface graphique MySQL la plus complète et facile à utiliser.
- [Tabix](https://github.com/tabixio/tabix) - SQL Editor & Open source simple business intelligence pour Clickhouse.
- [TablePlus](https://github.com/TablePlus/TablePlus) - Outil GUI moderne, natif et convivial pour les bases de données relationnelles : MySQL, PostgreSQL, SQLite et plus.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - utilisez vos bases de données PostgreSQL depuis n'importe où, avec une interface web AJAX riche et rapide.
- [Query.me](https://query.me) - Éditeur SQL collaboratif au format Notebook. Laissez-vous référencer les résultats de la requête à l'aide de JINJA, visualisez les données, et programmez les sorties et les exportations.


## CLI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - Connectez-vous à une base de données pour les commandes SQL dans IPython ou IPython Notebook.
- [iredis](https://github.com/laixintao/iredis) - Un Cli pour Redis avec AutoCompletion et Syntax.
- [pgcenter](https://github.com/lesovsky/pgcenter) - Outil d'administration top pour PostgreSQL.
- [pg_activity](https://github.com/julmon/pg_activity) - Application top-like pour la surveillance des activités du serveur PostgreSQLTM.
- [pg_top](https://github.com/markwkm/pg_top) - En haut pour PostgreSQL.
- [pspg](https://github.com/okbob/pspg) - PostgreSQL Pager.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter pour les schémas de migration dangereux PostgreSQL. Il fonctionne parfaitement avec les fichiers SQL PostgreSQLTM et s'intègre nativement aux projets utilisant Diesel et SQLx.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line (SQLcl) est une interface de ligne de commande gratuite pour Oracle Database.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - Outils CLI pour la manipulation des fichiers SQLite - insertion de données, requêtes en cours, création d'index, configuration de la recherche en texte intégral et plus encore.
- [SQLLine](https://github.com/julianhyde/sqlline) - shell en ligne de commande pour l'émission de SQL aux bases de données relationnelles via JDBC.
- [usql](https://github.com/xo/usql) - Une interface en ligne de commande universelle pour PostgreSQLTM, MySQLTM, Oracle Database, SQLite3, Microsoft SQL Server et bien d'autres bases de données dont NoSQLTM et les bases de données non relationnelles !

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) - Outil CLI pour le service AWS Athena qui peut effectuer la mise en évidence automatique et syntaxique.
- [litecli](https://github.com/dbcli/litecli) - CLI pour les bases de données SQLite avec auto-complétion et mise en surbrillance syntaxique.
- [mssql-cli](https://github.com/dbcli/mssql-cli) - Un client en ligne de commande pour SQL Server avec auto-complétion et mise en surbrillance syntaxique.
- [mycli](https://github.com/dbcli/mycli) - Un client terminal pour MySQL avec AutoCompletion et Syntax.
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL CLI avec autocomplétion et mise en surbrillance syntaxique.
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI avec auto-complétion et mise en surbrillance syntaxique.


## Schéma

### Changements
- [2bass](https://github.com/CourseOrchestra/2bass) - Outil de configuration comme code de base de données qui utilise le concept de scripts DDL idémpotent.
- [Atlas](https://github.com/ariga/atlas) - Inspecter et appliquer les modifications à votre schéma de base de données.
- [Bytebase](https://github.com/bytebase/bytebase) - Web-based, zéro-config, sans dépendance de changement de schéma de base de données et outil de contrôle de version pour les équipes.
- [flyway](https://github.com/flyway/flyway) - Outil de migration des bases de données.
- [gh-ost](https://github.com/github/gh-ost) - Migration de schéma en ligne pour MySQL.
- [liquibase](https://github.com/liquibase/liquibase) - Bibliothèque indépendante de la base de données pour le suivi, la gestion et l'application des changements de schéma de base de données.
- [migra](https://github.com/djrobstep/migra) - Comme diff mais pour les schémas PostgreSQL.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - Gestion de la migration de base de données Node.js construite exclusivement pour PostgreSQLTM. (Mais peut également être utilisé pour d'autres DB conformes à la norme SQL - par exemple CockroachDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - Outil CLI facile pour faire des changements de schéma zéro temps d'arrêt et de remblayage dans PostgreSQLTM.
- [Prisma Migrate](https://github.com/prisma/migrate) - Outil de migration de schéma de base de données qui utilise une syntaxe de modélisation de données pour décrire votre schéma de base de données.
- [Pyrseas](https://github.com/perseas/Pyrseas) - Fournit des utilitaires pour décrire un schéma de base de données PostgreSQLTM comme YAML.
- [Reshape](https://github.com/fabianlindfors/reshape) - Un outil de migration des schémas à temps zéro pour Postgres.
- [SchemaHero](https://github.com/schemahero/schemahero) - Un opérateur de Kubernetes pour la gestion des schémas de base de données (gitops pour les schémas de base de données).
- [Skeema](https://github.com/skeema/skeema) - Système de gestion des schémas pour MySQL et MariaDB, avec support pour le sharding et les outils externes de changement de schéma en ligne.
- [Sqitch](https://github.com/sqitchers/sqitch) - Gestion sensible du changement de base de données pour un développement sans cadre et un déploiement fiable.
- [sqldef](https://github.com/k0kubun/sqldef) - Gestion des schémas d'idéopontes pour MySQL, PostgreSQL, et plus encore.
- [yuniql](https://github.com/rdagumampan/yuniql) - Encore un autre outil de version schéma et de migration vient de faire avec native .NET Core 3.0+ et espérons mieux.

### Génération de codes
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - Inférer SQL DDL (Data Definition Language) à partir des données du tableau.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Util ligne de commande pour exporter le schéma Oracle à l'ensemble de scripts ddl init avec la capacité de filtrer les informations indésirables, séparer DDL dans différents fichiers, sortie de joli format.

### Schémas
- [Azimutt](https://github.com/azimuttapp/azimutt) - Un outil de visualisation de diagramme de relation d'entité (ERD), avec différents filtres et entrées pour aider à comprendre votre schéma de base de données.
- [ChartDB](https://github.com/chartdb/chartdb) - Éditeur de diagrammes de base de données libres et libres, visualisez et concevez votre DB avec une seule requête.
- [DrawDB](https://github.com/drawdb-io/drawdb) - Outil de conception de base de données en ligne gratuit, simple et intuitif et générateur SQL. 
- [DrawSQL](https://drawsql.app) - Éditeur de schéma de base de données en ligne avec importation SQL, génération d'IA et collaboration d'équipe en temps réel.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - Outil de génération de diagrammes de relation des entités.
- [ERD Lab](https://www.erdlab.io/) - Outil gratuit de diagramme de relation d'entité basé sur le cloud (ERD) fait pour les développeurs.
- [Liam ERD](https://github.com/liam-hq/liam) - Outil open source qui génère de beaux et faciles à lire des diagrammes de relation d'entité à partir de votre base de données et ORM.
- [QuickDBD](https://www.quickdatabasediagrams.com/) - Outil en ligne simple pour dessiner rapidement des diagrammes de base de données.

### Documentation
- [dbdocs](https://dbdocs.io/) - Créer une documentation de base de données Web en utilisant le code DSL.
- [DBML](https://github.com/holistics/dbml) - Le langage de balisage des bases de données, conçu pour définir et documenter les structures des bases de données.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - Un outil gratuit de découverte et de compréhension de schéma de base de données.
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Générer votre base de données à la documentation HTML, y compris les diagrammes de relation entité.
- [tbls](https://github.com/k1LoW/tbls) - Outil ami de CI pour documenter une base de données, écrit en Go.

### Conception
- [Database Design](https://github.com/alextanhongpin/database-design) - Conseils utiles pour concevoir un schéma de base de données robuste.
- [DBDiagram](https://dbdiagram.io) - Un outil simple et gratuit pour dessiner des diagrammes ER en écrivant du code.
- [DbSchema](https://dbschema.com/) - Création de bases de données universelles pour la gestion des schémas hors boîte, la documentation des schémas, la conception en équipe et le déploiement sur plusieurs bases de données. DbSchema dispose d'outils pour écrire et exécuter des requêtes, explorer les données, générer des données et construire des rapports.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - Logiciel de modélisation de base de données facile à utiliser pour des modèles de données de haute qualité. C'est une solution complète de modélisation de données pour les concepteurs de données et les architectes de données.
- [Moon Modeler](https://www.datensen.com) - Outil de modélisation des données pour les bases de données noSQL et relationnelles. Disponible pour Windows, Linux et macOS.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - Un outil puissant et rentable de conception de base de données qui vous aide à construire des modèles de données conceptuelles, logiques et physiques de haute qualité.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - Outil graphique gratuit qui améliore la productivité et simplifie la modélisation des données.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - Outil de modélisation de données conçu pour PostgreSQLTM.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - Outil de diagramme SQL en ligne.

### Échantillons
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Exemples de schémas pour la base de données Oracle.


## API
Construire l'API pour vos données
- [Datasette](https://github.com/simonw/datasette) - Un outil d'exploration et de publication des données.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - Un moteur d'API REST open source pour les applications mobiles, web et IoT.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - Transformez plusieurs sources de données en une seule API GraphQL.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Blazing rapide, instantanée en temps réel API GraphQL sur PostgreSQL avec contrôle d'accès grainé fin, également déclencher des webhooks sur les événements de base de données.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - API REST pour toute base de données soutenue par JDBC, un clone PostgREST écrit en Java.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - Une application Java de niveau intermédiaire, ORDS maps HTTP(S) verbes (GET, POST, PUT, DELETE, etc.) pour les transactions de base de données et renvoie tous les résultats formatés en utilisant JSON.
- [Prisma](https://github.com/prismagraphql/prisma) - transforme votre base de données en API GraphQL en temps réel.
- [PostGraphile](https://github.com/graphile/postgraphile) - Lancez instantanément un serveur API GraphQL en pointant PostGraphile sur votre base de données PostgreSQLTM existante.
- [PostgREST](https://github.com/PostgREST/postgrest) - API REST pour toute base de données PostgreSQLTM.
- [prest](https://github.com/prest/prest) - Est un moyen de servir une API RESTful à partir de toutes les bases de données écrites dans Go.
- [Remult](https://github.com/remult/remult) - CRUD de bout en bout sécurisé via l'API REST pour votre base de données, avec un contrôle d'accès à grain fin.
- [restSQL](https://github.com/restsql/restsql) - Générateur SQL avec API Java et HTTP, utilise une simple API HTTP RESTful avec sérialisation XML ou JSON.
- [resquel](https://github.com/formio/resquel) - Convertissez facilement votre base de données SQL en API REST.
- [sandman2](https://github.com/jeffknupp/sandman2) - Générez automatiquement un service d'API RESTful pour votre base de données.
- [soul](https://github.com/thevahidal/soul) - Serveur d'API SQLite REST automatique en temps réel.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - Écrire SQL modélisé pour exposer automatiquement les API RESTful de votre base de données/entrepôt de données/lac de données.

## Plateformes d'application
Plates-formes à code bas et sans code pour la construction d'applications
- [Appsmith](https://github.com/appsmithorg/appsmith) - Powerful open source bas code framework pour construire des applications internes très rapidement.
- [Budibase](https://github.com/Budibase/budibase) - Plate-forme à faible code pour créer des applications internes en quelques minutes.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Plate-forme de construction d'outils internes à faible code.
- [Nhost](https://github.com/nhost/nhost) - L'alternative de la base de feux Open Source avec GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) - Open source no-code builder pour les applications de base de données web. Constructeur d'interface utilisateur de drag-and-drop, données stockées dans PostgreSQL ou SQLite.
- [SQLPage](https://github.com/sqlpage/SQLPage) - Créateur d'application de données SQL rapide. Construisez automatiquement une interface utilisateur en plus des requêtes SQL.
- [Tooljet](https://github.com/ToolJet/ToolJet) - Plate-forme de faible code open-source pour construire des outils internes.


## Sauvegarde
- [BaRMan](https://github.com/2ndquadrant-it/barman) - Gestionnaire de sauvegarde et de récupération pour PostgreSQL.
- [Databasus](https://github.com/databasus/databasus) - Outil pour les sauvegardes PostgreSQLTM programmées via l'interface utilisateur web avec stockages externes (local, S3, FTP, Google Drive, etc.), notifications (webhook, Discord, Slack, etc.) et gestion d'équipe.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - Sauvegarde et restauration PostgreSQL fiable.
- [pgcopydb](https://github.com/dimitri/pgcopydb) - Copier une base de données PostgreSQL vers un serveur cible PostgreSQL (pg_décharge | Pg_restaurer sur les stéroïdes).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - Un gestionnaire de sauvegarde et de récupération pour PostgreSQL.
- [Portabase](https://github.com/Portabase/portabase) - Plateforme d'agents pour les sauvegardes et les restaurations PostgreSQL avec exécution décentralisée et orchestration centralisée. 

## Clonage
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - Le clonage instantané et fin pour PostgreSQLTM afin d'élargir le processus de développement.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - utilitaire de schéma clone PostgreSQL sans besoin de sortir de la base de données.
- [Spawn](https://spawn.cc/) - Service Cloud pour créer des copies instantanées de bases de données pour le développement et CI. Plus d'installation locale db, récupération instantanée de points de sauvegarde arbitraires, copies isolées pour chaque branche de fonction ou test. Fourniture instantanée quelle que soit la taille de la base de données.


## Surveillance/Statistiques/Performance
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Fournit une vue graphique des données d'historique de session active dans Oracle et PostgreSQL DB.
- [Metis](https://www.metisdata.io/product/troubleshooting) - Fournit l'observation et le réglage des performances pour les bases de données SQL.
- [Monyog](https://www.webyog.com/product/monyog) - Outil de surveillance MySQL sans agent et rentable.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - Surveillez les performances de votre SQL Server sous Linux en utilisant collectd, InfluxDB et Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - Un outil de surveillance de serveur à distance sûr, simple et sans agent qui est rempli de fonctionnalités puissantes pour rendre votre surveillance aussi efficace que possible.
- [Percona Monitoring and Management](https://github.com/percona/pmm) - Plateforme open source pour la gestion et le suivi des performances MySQL et MongoDB.
- [pganalyze collector](https://github.com/pganalyze/collector) - Collecteur de statistiques de Pganalyse pour la collecte des données de PostgreSQLTM et des données log.
- [pgbadger](https://github.com/dalibo/pgbadger) - Un analyseur rapide PostgreSQL Log.
- [pgDash](https://pgdash.io) - Mesurer et suivre tous les aspects de vos bases de données PostgreSQLTM.
- [PgHero](https://github.com/ankane/pghero) - Un tableau de bord de performance pour PostgreSQL - contrôles de santé, indices suggérés, et plus encore.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - Recueillir et afficher les informations et les statistiques à partir d'un serveur PostgreSQL.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Outil tout-en-un pour créer facilement un environnement pour visualiser la santé et les performances de votre cluster PostgreSQLTM.
- [pgMustard](https://www.pgmustard.com) - Une interface utilisateur pour PostgreSQLTM explique les plans, ainsi que des conseils pour améliorer les performances.
- [pgstats](https://github.com/gleu/pgstats) - Recueille les statistiques PostgreSQLTM et les enregistre dans les fichiers CSV ou les imprime sur le stdout.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Solution de monitoring/planche de bord de PostgreSQL souple et autonome.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - Service pour extraire et fournir des métriques sur votre base de données PostgreSQLTM.
- [PostgreSQL Monitor](https://postgresmonitor.com) - Un service de surveillance facile à utiliser pour PostgreSQLTM fournissant des alertes, des tableaux de bord, des statistiques de requêtes et des recommandations dynamiques.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Outil de diagnostic de nouvelle génération qui permet aux utilisateurs de faire une analyse approfondie de la santé des bases de données PostgreSQLTM.
- [Promscale](https://github.com/timescale/promscale) - Le moteur d'observation open-source pour les métriques et les traces alimentées par SQL.
- [Releem](https://releem.com) - Outil de surveillance et d'optimisation des performances pour MySQL & MariaDB qui fournit des informations pratiques et une automatisation sûre pour les erreurs de configuration, les requêtes lentes, les problèmes de schéma et les impasses, réduisant le travail manuel à l'échelle.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - Fournit des paramètres pour votre base de données PostgreSQLTM.

### Prométhée
- [pgSCV](https://github.com/weaponry/pgscv) - Exportateur de métriques pour les services liés à PostgreSQL et PostgreSQL.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Exportateur Prométhée pour les paramètres du serveur PostgreSQLTM.
- [pg_exporter](https://github.com/Vonng/pg_exporter) - Exportateur Prométhée entièrement personnalisable pour PostgreSQL & Pgbouncer avec contrôle d'exécution à grain fin.

### Zabbix
- [Mamonsu](https://github.com/postgrespro/mamonsu) - Agent de surveillance pour PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Plugin conçu pour travailler avec Zabbix Enterprise Monitor pour fournir des rapports et des mesures de surveillance, de performance et de disponibilité à plusieurs niveaux pour les bases de données Oracle, ainsi que des paramètres de performance du serveur.
- [pg_monz](https://github.com/pg-monz/pg_monz) - C'est le modèle de surveillance de Zabbix pour PostgreSQL.
- [Pyora](https://github.com/bicofino/Pyora) - script Python pour surveiller les bases de données Oracle.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - Plugin rapide, flexible et en développement continu pour surveiller votre RDBMS.


## Essais
- [DbFit](https://github.com/dbfit/dbfit) - Un cadre de test de base de données qui permet de développer facilement votre code de base de données.
- [pgTAP](https://github.com/theory/pgtap) - Essai d'unité pour PostgreSQL.
- [RegreSQL](https://github.com/dimitri/regresql) - Régression Testez vos requêtes SQL.
- [SQLancer](https://github.com/sqlancer/sqlancer) - Testez automatiquement DBMS afin de trouver des bogues logiques dans leur implémentation.


## HA/Échec/Fardage
- [Citus](https://github.com/citusdata/citus) - Extension PostgreSQL qui distribue vos données et vos requêtes sur plusieurs nœuds.
- [patroni](https://github.com/zalando/patroni) - Un modèle pour PostgreSQL Haute Disponibilité avec ZooKeeper, etc., ou consul.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - Une solution de haute scalabilité pour le regroupement MySQL et la haute disponibilité.
- [ShardingSphere](https://github.com/apache/shardingsphere) - Moteur de transaction et de requête SQL distribué sur n'importe quelle base de données.
- [stolon](https://github.com/sorintlab/stolon) - Gestionnaire PostgreSQL pour PostgreSQL haute disponibilité.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extension et service PostgreSQLTM pour une panne automatique et une grande disponibilité.
- [pglookout](https://github.com/aiven/pglookout) - Surveillance de la réplication PostgreSQLTM et démon d'échec.
- [pgslice](https://github.com/ankane/pgslice) - La partition PostgreSQL est aussi facile que la tarte.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - Haute disponibilité pour PostgreSQL, basée sur les références de l'industrie Pacemaker et Corosync.
- [autobase](https://github.com/vitabaks/autobase) - Open-source DBaaS qui automatise le déploiement et la gestion des clusters PostgreSQL très disponibles.
- [Vitess](https://github.com/vitessio/vitess) - Système de regroupement de bases de données pour la mise à l'échelle horizontale de MySQL à travers le sharding généralisé.


## Kubernetes
- [KubeDB](https://kubedb.com) - Faciliter l'exploitation des bases de données de qualité de production sur Kubernetes.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - L'opérateur PostgreSQLTM permet des grappes PostgreSQL très disponibles sur Kubernetes (Kubernetes) alimentées par Patroni.
- [Spilo](https://github.com/zalando/spilo) - Clusters de PostgreSQL avec Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Niveau Enterprise, Full Stack PostgreSQL sur Kubernetes.


## Réglage de la configuration
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Script écrit en Perl qui vous permet d'examiner une installation MySQL rapidement et de faire des ajustements pour augmenter les performances et la stabilité.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - Outil en ligne gratuit pour générer un optimisé `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - Assistant de configuration PostgreSQL.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - Un script simple pour analyser la configuration de votre base de données PostgreSQLTM et donner des conseils de réglage.


## DevOps
- [DBmaestro](https://www.dbmaestro.com) - Accélére les cycles de libération et soutient l'agilité dans tout l'écosystème informatique.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - Exécute les fonctions clés de développement de base de données dans votre workflow DevOps sans compromettre la qualité, les performances ou la fiabilité.


## Rapports
- [Chartbrew](https://chartbrew.com) - Créer des tableaux de bord, des graphiques et des rapports clients en direct à partir de multiples bases de données et services.
- [Poli](https://github.com/shzlw/poli) - Une application de reporting SQL facile à utiliser construite pour les amateurs de SQL.


## Distributions
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - Outil qui déploie facilement les serveurs de base de données MySQL.
- [dbatools](https://github.com/sqlcollaborative/dbatools) - Module PowerShell que vous pouvez penser comme un SQL Server Management Studio en ligne de commande.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - Installation complète PostgreSQLTM emballée comme une application Mac standard.
- [BigSQL](https://www.bigsql.org) - Une distribution de PostgreSQLTM adaptée aux développeurs.
- [Elephant Shed](https://github.com/credativ/elephant-shed) - Front-end de gestion PostgreSQL sur le Web qui regroupe plusieurs utilitaires et applications à utiliser avec PostgreSQL.
- [Pigsty](https://github.com/Vonng/pigsty) - Distribution Open-Source intégrée pour PostgreSQLTM avec une fonction d'observation ultime et une boîte à outils Database-as-Code pour les développeurs.


## Sécurité
- [Acra](https://github.com/cossacklabs/acra) - Suite de sécurité des bases de données. Proxy de base de données avec cryptage au niveau du champ, recherche par des données chiffrées, prévention des injections SQL, détection d'intrusion, pots de miel. Prend en charge le cryptage côté client et côté proxy (« transparent »). SQL, NoSQL.
- [Databunker](https://github.com/securitybunker/databunker) - Coffret sécurisé spécial conforme au RGPD pour les dossiers clients construit en plus de DB ordinaire.
- [Inspektor](https://github.com/poonai/inspektor) - Couche de contrôle d'accès pour les bases de données. L'Inspektor fait appel à un agent politique ouvert pour prendre des décisions stratégiques.


## SQL

### Analyseurs
- [Holistic.dev](https://holistic.dev) - Service de détection automatique pour les problèmes de performance, de sécurité et d'architecture des bases de données.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - Détecte automatiquement les anti-patterns SQL communs.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Linter SQL flexible et configurable.
- [SQLLineage](https://github.com/reata/sqllineage) - Outil d'analyse de ligne SQL alimenté par Python.
- [TSQLLint](https://github.com/tsqllint/tsqllint) - Un outil pour décrire, identifier et signaler la présence d'anti-patterns dans les scripts TSQL.

### Générateurs de code
- [sqlc](https://sqlc.dev) - Générateur de code SQL-first produisant des liaisons de type sûr pour différentes langues et différentes bases de données.
- [SQLDelight](https://sqldelight.github.io/sqldelight) - Générateur de code SQL-first produisant des liaisons sans danger pour Kotlin et diverses bases de données.
- [pGenie](https://pgenie.io) - Générateur de code SQL-first produisant des liaisons sans danger pour différentes langues et se spécialisant dans la base de données PostgreSQLTM.

### Prorogations
- [PartiQL](https://partiql.org) - Accès compatible SQL aux données relationnelles, semi-structurées et imbriquées.

### Cadres
- [Apache Calcite](https://calcite.apache.org) - Cadre dynamique de gestion des données avec fonctionnalités SQL avancées.
- [ZetaSQL](https://github.com/google/zetasql) - Analyser le cadre pour SQL.

### Formateurs
- [CodeBuff](https://github.com/antlr/codebuff) - L'impression langagière par l'apprentissage automatique.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - Open Source Java SQL Forme pour de nombreux RDBMS basés sur JSqlParser.
- [SQL Online](https://sqlonline.in) - Un outil gratuit pour formater vos requêtes SQL suivi de contenu pour Analystes.
- [pgFormatter](https://github.com/darold/pgFormatter) - Une syntaxe SQL PostgreSQL.
- [Poor SQL](https://poorsql.com) - Formatage T-SQL instantané et libre. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - Bibliothèque JavaScript pour les requêtes SQL.

### Jeux
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - Un jeu d'apprentissage SQL pour vous aider à acquérir des compétences SQL de base - afin que vous puissiez utiliser des requêtes pour obtenir des informations.
- [Querymon](https://codepip.com/games/querymon/) - Apprenez à utiliser les requêtes SQL sur le Querydex, une base de données de monstres du commun au légendaire.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - Un jeu de stratégie basé sur l'espace mis en œuvre entièrement dans une base de données PostgreSQLTM.
- [SQL Island](https://sql-island.informatik.uni-kl.de) - Après le crash de l'avion, vous serez coincé sur SQL Island pour le moment. En faisant des progrès dans le jeu, vous trouverez un moyen de s'échapper de cette île.
- [SQL Murder Mystery](https://mystery.knightlab.com) - Conçu pour être à la fois une leçon auto-dirigée pour apprendre les concepts et les commandes SQL et un jeu amusant pour les utilisateurs SQL expérimentés pour résoudre un crime intrigant.
- [SQL Police Department](https://sqlpd.com) - Dans SQLPD, vous pouvez résoudre les crimes tout en apprenant SQL en même temps.

### Parsers
- [General SQL Parser](https://www.sqlparser.com) - Parsage, formatage, modification et analyse pour SQL.
- [jOOQ](https://github.com/jOOQ/jOOQ) - Parse SQL, le traduit dans d'autres dialectes et permet des transformations d'arbres d'expression.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - Parse une instruction SQL et la traduit en une hiérarchie de classes Java.
- [libpg_query](https://github.com/pganalyze/libpg_query) - Bibliothèque C pour accéder à l'analyseur PostgreSQL en dehors de l'environnement serveur.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - Parse SQL dans JSON.
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Analyseur SQL non valide pour Python.
- [SQLGlot](https://github.com/tobymao/sqlglot) - Pure Python SQL parser, transpiler et constructeur.

### Über SQL
Exécuter des requêtes SQL contre n'importe quoi
- [CloudQuery](https://github.com/cloudquery/cloudquery) - Extraire, transformer et charger vos actifs cloud en tables PostgreSQL normalisées.
- [csvq](https://github.com/mithrandie/csvq) - langage de requête SQL pour CSV.
- [dsq](https://github.com/multiprocessio/dsq) - Outil de ligne de commande pour lancer des requêtes SQL contre JSON, CSV, Excel, Parquet, et plus encore.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Ce plugin pour Eclipse Memory Analyzer permet d'interroger le dump heap via SQL.
- [OctoSQL](https://github.com/cube2222/octosql) - Outil de requête qui vous permet de joindre, analyser et transformer des données à partir de plusieurs bases de données et formats de fichiers en utilisant SQL.
- [osquery](https://github.com/osquery/osquery) - Instrumentation, surveillance et analyse du système d'exploitation alimenté par SQL.
- [Resmo](https://www.resmo.com) - Auditer et évaluer les ressources en utilisant SQL.
- [sq](https://github.com/neilotoole/sq) - Outil en ligne de commande qui fournit un accès de style jq aux sources de données structurées : bases de données SQL, ou formats de documents comme CSV ou Excel. C'est l'enfant amoureux de sql+jq.
- [Steampipe](https://github.com/turbot/steampipe) - Utilisez SQL pour interroger instantanément vos services cloud (AWS, Azure, GCP et plus).
- [TextQL](https://github.com/dinedal/textql) - Exécuter SQL contre le texte structuré comme CSV ou TSV.
- [trdsql](https://github.com/noborus/trdsql) - Outil CLI qui peut exécuter des requêtes SQL sur CSV, LTSV, JSON et TBLN.
- [Trino](https://github.com/trinodb/trino) - Moteur de requête SQL distribué conçu pour interroger les grands ensembles de données distribués sur une ou plusieurs sources de données hétérogènes.

### Protocole de serveur de langue
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - Serveur SQL.
- [sqls](https://github.com/lighttiger2505/sqls) - Serveur de langage SQL écrit dans Go.

### Apprentissage
Apprentissage et casse-tête pour SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Des puzzles SQL difficiles.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - Codage pratique, préparation aux entrevues, et être embauché.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - Un livre sur la façon d'utiliser SQL pour récupérer, filtrer et analyser les données.
- [LeetCode](https://leetcode.com/problemset/database) - Améliorez vos compétences, développez vos connaissances et préparez-vous à des entrevues techniques.
- [Select Star SQL](https://selectstarsql.com) - Livre interactif gratuit qui vise à être le meilleur endroit sur Internet pour apprendre SQL.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - Ressources pédagogiques en sciences des données.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - Leçon auto-dirigée pour apprendre des concepts et des commandes SQL et un jeu amusant pour les utilisateurs SQL expérimentés pour résoudre un crime intrigant.

### Plan
- [pev2](https://github.com/dalibo/pev2) - Un composant Vue.js pour afficher une visualisation graphique d'un plan d'exécution PostgreSQLTM.
- [pg_flame](https://github.com/mgartner/pg_flame) - Un générateur de flamme pour PostgreSQL `EXPLAIN ANALYZE` produit.

### Scénarios
Les scripts SQL utiles à diverses fins
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - scripts T-SQL pour le long terme : optimiser le stockage, la documentation à la volée et les besoins administratifs généraux pour SQL Server.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - Une collection de petits scripts utiles pour l'analyse et l'administration des bases de données, créés par notre équipe chez PostgreSQL Experts.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - Demande de mesure du bloat statistique dans les index et les tableaux de PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - Test SQL qui vérifie si votre base de données suit les règles de <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) - Utilitaires PostgreSQL.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - Les scripts et commandes SQL utiles par <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - L'ensemble manquant d'outils utiles pour PostgreSQL DBA et tous les ingénieurs.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Enquêtes et commandes utiles PostgreSQL.
- [TPT](https://github.com/tanelpoder/tpt-oracle) - Ces scripts sqlplus sont pour l'optimisation des performances de la base de données Oracle & dépannage.


## Données
- [dbt](https://github.com/dbt-labs/dbt-core) - Transformez vos données en écrivant simplement des instructions sélectionnées, tandis que dbt gère la transformation de ces instructions en tables et vues dans un entrepôt de données.
- [QuickTable](https://quicktable.io) - Autorise tout le monde à accéder, nettoyer, analyser, transformer et modéliser des données sans code.

### Catalogue
- [Amundsen](https://github.com/amundsen-io/amundsen) - Application axée sur les métadonnées pour améliorer la productivité des analystes de données, des spécialistes des données et des ingénieurs en interaction avec les données.
- [DataHub](https://github.com/datahub-project/datahub) - La plate-forme de métadonnées pour la pile de données modernes.
- [Marquez](https://github.com/MarquezProject/marquez) - Recueillir, agréger et visualiser les métadonnées d'un écosystème de données.

### Ligne
- [Dwh.dev](https://dwh.dev) - Lignage de données Nexgen pour le flocon de neige.

### Génération/Making/Subsetting
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - Générer, masquer (anonymiser / pseudonymer) et migrer les données à des fins de développement, de test et de formation.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - Outil GUI puissant pour créer des volumes massifs de données de test réalistes.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Petit mais puissant outil GUI pour peupler des schémas Oracle avec des tonnes de données de test réalistes.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - Outil d'interface graphique puissant pour une génération rapide de données de test significatives pour les bases de données.
- [Faker](https://github.com/faker-js/faker) - Générer des quantités massives de fausses données dans le navigateur et Node.js.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - Anonymisation des bases de données et outil de génération de données synthétiques pour MySQL et PostgreSQL.
- [myanon](https://github.com/ppomes/myanon) - Streaming anonymizer pour les fichiers dump MySQL. Lire mysqldump de stdin, écrit une version anonyme à stdout. Prend en charge le hachage déterministe, les valeurs fixes, l'anonymisation de champ JSON et les extensions Python.
- [Noisia](https://github.com/lesovsky/noisia) - Générateur de charge de travail préjudiciable pour PostgreSQL.
- [quick-seed](https://github.com/miit-daga/quick-seed) - Outil de semis de base de données-agnostique pour générer des données de test réalistes avec support pour PostgreSQL, MySQL, SQLite, Prisma et Drizzle ORM.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - Outil simple et puissant pour générer et remplir des tables sélectionnées ou des bases de données complètes avec des données de test réalistes pour vos applications. Générer des données de test pour : Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift et Amazon RDS.
- [SQLable](https://sqlable.com/generator/) - Générer de fausses données dans le navigateur.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - Meilleur ami de DevOps pour le masquage et la génération de bases de données.

### Profileurs de données
- [Data Profiler](https://github.com/capitalone/dataprofiler) - Le DataProfiler est une bibliothèque Python conçue pour faciliter l'analyse, la surveillance et la détection des données sensibles.
- [Desbordante](https://github.com/desbordante/desbordante-core) - Un profileur de données open-source spécifiquement axé sur la découverte et la validation de modèles complexes dans les données.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Un profileur de données open source à usage général pour une analyse de haut niveau d'un ensemble de données.

### Réplication
- [dtle](https://github.com/actiontech/dtle) - Service de transfert de données distribué pour MySQL.
- [Litestream](https://github.com/benbjohnson/litestream) - Réplication en streaming pour SQLite.
- [pgsync](https://github.com/ankane/pgsync) - Synchroniser les données PostgreSQLTM entre les bases de données.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Système de réplique MySQL à PostgreSQL écrit en Python 3. Le système utilise la bibliothèque mysql-replication pour tirer les images de ligne de MySQL qui sont stockées dans PostgreSQLTM comme JSONB.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Un serveur web Golang pour diffuser les modifications de PostgreSQLTM au-dessus de websockets, en utilisant la fonction de décodage logique de PostgreSQLTM.
- [repmgr](https://github.com/2ndQuadrant/repmgr) - Le gestionnaire de réplication le plus populaire pour PostgreSQL.

### Comparer
- [data-diff](https://github.com/datafold/data-diff) - Outil en ligne de commande et bibliothèque Python pour diffuser efficacement les lignes entre deux bases de données différentes.
- [KS DB Merge Tools](https://ksdbmerge.tools) - GUI pour comparer et synchroniser le schéma et les données DB. Pour Oracle Database, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access et Cross-DBMS.

## Papiers
Documents, articles, manifestes et autres matériels théoriques sur les outils de base de données
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - Traitez votre base de données comme un code.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - Un guide amical illustré pour concevoir et mettre en œuvre votre première base de données.

## Apprentissage automatique
- [MindsDB](https://github.com/mindsdb/mindsdb) - L'apprentissage automatique dans la base de données.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - Ça rassemble SQL et AI.

## Contribution
- Vos contributions sont toujours les bienvenues! Veuillez lire la [contribution guidelines](contributing.md) D'abord.
