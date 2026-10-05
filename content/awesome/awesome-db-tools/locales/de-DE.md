# Auswahl an Datenbankwerkzeugen [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Community-gesteuerte Liste von Datenbank-Tools

Hier werden wir Informationen über fantastische nützliche und großartige experimentelle Tools sammeln, die das Arbeiten mit Datenbanken für DBA, DevOps, Entwickler und Sterbliche vereinfachen.

Fühlen Sie sich frei, Informationen über Ihre eigenen DB-Tools oder Ihre Lieblings-DB-Tools von Drittanbietern hinzuzufügen.

Für Updates auf `awesome-db-tools` und Gedanken/News zu Datenbanken/Tools/SQL folgen mir auf [@GraminMaksim](https://twitter.com/GraminMaksim)

## Inhalt
- [IDE](#ide)
- [GUI](#gui)
- [CLI](#cli)
- [Schema](#schema)
  - [Änderungen](#changes)
  - [Codegenerierung](#code-generation)
  - [Diagramme](#diagrams)
  - [Unterlagen](#documentations)
  - [Design](#design)
  - [Proben](#samples)
- [API](#api)
- [Anwendungsplattformen](#application-platforms)
- [Backup](#backup)
- [Klonen](#cloning)
- [Überwachung/Statistik/Leistung](#monitoringstatisticsperformance)
  - [Prometheus](#prometheus)
  - [Zabbix](#zabbix)
- [Prüfung](#testing)
- [HA/Failover/Sharding](#hafailoversharding)
- [Kubernets](#kubernetes)
- [Konfigurationsabstimmung](#configuration-tuning)
- [DevOps](#devops)
- [Berichterstattung](#reporting)
- [Verteilungen](#distributions)
- [Sicherheit](#security)
- [SQL](#sql)
  - [Analysegeräte](#analyzers)
  - [Codegeneratoren](#code-generators)
  - [Verlängerungen](#extensions)
  - [Rahmen](#frameworks)
  - [Formatierer](#formatters)
  - [Spiele](#games)
  - [Parser](#parsers)
  - [Über SQL](#über-sql)
  - [Language Server Protokoll](#language-server-protocol)
  - [Lernen](#learning)
  - [Plan](#plan)
  - [Skripte](#scripts)
- [Daten](#data)
  - [Katalog](#catalog)
  - [Linie](#lineage) 
  - [Erzeugung/Masking/Subsetting](#generationmaskingsubsetting)
  - [Datenprofiler](#data-profilers)
  - [Replikation](#replication) 
  - [Vergleichen](#compare) 
- [Papiere](#papers)
- [Machine Learning](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - Premier Mehrzweck-Admin-Tool für Datenbank-Management, Kontrolle und Entwicklung 💰 🔒.
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Produktivitätssoftware für Datenbankentwickler, DBAs und Analysten 💰 🔒.
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - Moderne IDE für Analysten und Analytiker mit leistungsstarker Skript- und Grid-Funktionalität 💰 🔒.
- [Database .net](http://fishcodelib.com/Database.htm) - Mehrere Datenbank-Management-Tool mit Unterstützung für 20 + Datenbanken 🔒.
- [Database Workbench](https://www.upscene.com/database_workbench/) - Komplette IDE für Datenbankdesign, -entwicklung und -test für Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite und NexusDB 💰 🔒.
- [DataGrip](https://www.jetbrains.com/datagrip) - Plattformübergreifende IDE für Datenbanken & SQL von JetBrains 💰 🔒.
- [DataStation](https://github.com/multiprocessio/datastation) Einfaches Abfragen, Skriptieren und Visualisieren von Daten aus jeder Datenbank, Datei und API.
- [DBeaver](https://github.com/dbeaver/dbeaver) - Kostenloser universeller Datenbankmanager und SQL-Client.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - Multidatabase-Lösung für DB-Entwicklung, Design, Management und Administration von MySQL, MariaDB, SQL Server, Oracle, PostgreSQL-Datenbanken und verschiedenen Cloud-Services 💰 🔒.
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - Universal IDE für die Entwicklung, Verwaltung und Verwaltung von MySQL- und MariaDB-Datenbanken 💰 🔒.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) Leistungsstarke IDE für Oracle Management, Administration und Entwicklung 💰 🔒.
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - GUI-Tool zur Verwaltung und Entwicklung von Datenbanken und Objekten 💰 🔒.
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) Leistungsstarke integrierte Entwicklungsumgebung für SQL Server Entwicklung, Management, Administration, Datenanalyse und Reporting 💰 🔒.
- [DBHawk](https://www.datasparc.com/) Datasparc bietet Datenbanksicherheit, Datenbankmanagement, Datenbank-Governance und Datenanalyse - alles in einer Lösung 💰 🔒.
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) Modern (JavaScript/Electron Framework), Open Source IDE für MongoDB. Es verfügt über Funktionen zur Unterstützung von Entwicklung, Administration und Performance-Tuning in MongoDB-Datenbanken.
- [IBExpert](http://www.ibexpert.net/ibe) - Umfassendes GUI-Tool für Firebird und InterBase 💰 🔒.
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Ein einfacher Client für die Verwaltung von MySQL, MSSQL und PostgreSQL, geschrieben in Delphi.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Ein AI-basiertes SQL-Client- und Admin-Tool für beliebte Datenbanken (SQLite / MySQL / PostgreSQL / usw.) unter Windows / macOS / Linux, Unterstützung von Tabellendesign, Abfrage, Modell, Synchronisierung, Export / Import usw., Fokus auf komfortabel, unterhaltsam und entwicklerfreundlich.
- [KeepTool](https://keeptool.com) - Eine professionelle Suite von Tools für Oracle Datenbankentwickler, Administratoren und fortgeschrittene Anwendungsbenutzer 💰 🔒.
- [MySQL Workbench](https://www.mysql.com/products/workbench) Unified Visual Tool für Datenbankarchitekten, Entwickler und DBAs.
- [Navicat](https://www.navicat.com/en/products#navicat) Ein Datenbankentwicklungstool, mit dem Sie gleichzeitig eine Verbindung zu MySQL-, MariaDB-, SQL Server-, Oracle-, PostgreSQL- und SQLite-Datenbanken aus einer einzigen Anwendung herstellen können.
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) Kostenlose, integrierte Entwicklungsumgebung, die die Entwicklung und Verwaltung von Oracle Database sowohl in traditionellen als auch in Cloud-Bereitstellungen vereinfacht.
- [pgAdmin](https://www.pgadmin.org) - Die beliebteste und reichhaltige Open-Source-Administrations- und Entwicklungsplattform für PostgreSQL, die fortschrittlichste Open-Source-Datenbank der Welt.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) Langfristige Unterstützung für pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE, die speziell auf die Entwicklung von gespeicherten Programmeinheiten für Oracle-Datenbanken ausgerichtet ist 💰 🔒.
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - Vollständiges und leistungsstarkes Datenbankmanagement-, Admin- und Entwicklungstool für PostgreSQL 💰 🔒.
- [Querybook](https://github.com/pinterest/querybook) - Pinterest Open-Source Big Data Querying UI, kombiniert kollozierte Tabellenmetadaten und eine einfache Notebook-IDE-Schnittstelle.
- [Slashbase](https://github.com/slashbaseide/slashbase) - Die Open-Source Collaborative IDE für Ihre Datenbanken. Verbinden Sie sich mit Ihrer Datenbank, durchsuchen Sie Daten, führen Sie eine Reihe von SQL-Befehlen aus oder teilen Sie SQL-Abfragen mit Ihrem Team direkt von Ihrem Browser aus.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) Integrierte Umgebung für die Verwaltung jeder SQL-Infrastruktur, für SQL Server und Azure SQL-Datenbanken 🔒.
- [Toad](https://www.quest.com/toad/) Premier Datenbanklösung für Entwickler, Admins und Datenanalysten. Verwalten Sie komplexe Datenbankänderungen mit einem einzigen Datenbankverwaltungstool 💰 🔒.
- [Toad Edge](https://www.toadworld.com/products/toad-edge) Vereinfachtes Datenbankentwicklungstool für MySQL und PostgreSQL 💰 🔒.
- [TOra](https://github.com/tora-tool/tora) Open Source SQL IDE für Oracle, MySQL und PostgreSQL dbs.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Erstellen, verwalten, abfragen und erkunden Sie Valentina DB, MySQL, MariaDB, PostgreSQL und SQLite Datenbanken kostenlos 💰 🔒.
- [WebDB](https://webdb.app) Kostenlose effiziente Datenbank-IDE. Mit Server Discovery, ERD, Datengenerator, AI, NoSQL Structure Manager, Datenbankversionierung und vielem mehr.


## GUI
- [Adminer](https://github.com/vrana/adminer) Datenbankverwaltung in einer einzigen PHP-Datei.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) Freier Open Source Redis Manager. Verfügbar auf Mac, Linux, Windows, Homebrew, Snap, Winget und mehr.
- [Antares SQL](https://github.com/antares-sql/antares) - Ein moderner, schneller und produktiver SQL-Client mit Fokus auf UX. Erhältlich für Mac, Linux und Windows.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Ein Datenmanagement-Tool, das die Arbeit mit SQL Server, PostgreSQL, Azure SQL DB und SQL DW von Windows, macOS und Linux ermöglicht.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - Open Source SQL Editor und Datenbankmanager mit einer Datenschutzverpflichtung in ihrem Leitbild.
- [Clidey WhoDB](https://github.com/clidey/whodb) - Ein leichter Datenbank-Explorer mit UX der nächsten Generation für alle SQL, NoSQL, Caches und Warteschlangen.
- [DbGate](https://github.com/dbgate/dbgate) Datenbankmanager für MySQL, PostgreSQL, SQL Server, MongoDB, SQLite und andere. Läuft unter Windows, Linux, Mac oder als Webanwendung.
- [DB Lens](https://github.com/dblens/app) - Open Source PostgreSQL GUI - Automatische ER-Diagramme, interne DB-Insights, Festplattennutzung, Performance-Metriken, Indexnutzung, Sequenzscan-Zählung und mehr.
- [DbVisualizer](https://www.dbvis.com) Universelles Datenbank-Tool für Entwickler, DBAs und Analysten.
- [JackDB](https://www.jackdb.com) Direkter SQL-Zugriff auf alle Ihre Daten, unabhängig davon, wo sie sich befinden.
- [Jailer](https://github.com/Wisser/Jailer) Datenbank-Subsetting und Relational Data Browsing Tool / Client.
- [Malewicz](https://github.com/mgramin/malewicz) - Noch ein weiterer Client für DB-Schema-Erkundung und Performance-Analyse, aber ursprünglich speziell für Hacking und Erweiterung erstellt.
- [MissionKontrol](https://www.missionkontrol.io) - Modernes Drag & Drop-Admin-Panel / Client mit vollen Benutzerberechtigungen für nicht-technische Benutzer.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - Für MySQL, MariaDB und Tarantool. Entwickelt für Linux, kann aber unter Windows laufen.
- [OmniDB](https://github.com/OmniDB/OmniDB) - Web-Tool für die Datenbankverwaltung.
- [Pgweb](https://github.com/sosedoff/pgweb) - Webbasierter Datenbankbrowser für PostgreSQL, geschrieben in Go und funktioniert auf macOS-, Linux- und Windows-Maschinen.
- [phpLiteAdmin](https://www.phpliteadmin.org) - Webbasiertes SQLite Datenbank-Admin-Tool in PHP mit Unterstützung für SQLite3 und SQLite2 geschrieben.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Eine Web-Schnittstelle für MySQL und MariaDB.
- [psequel](http://www.psequel.com) - Bietet eine saubere und einfache Benutzeroberfläche, mit der Sie gängige PostgreSQL-Aufgaben schnell ausführen können.
- [PopSQL](https://popsql.com) Moderner, kollaborativer SQL-Editor für Ihr Team.
- [Postico](https://eggerapps.at/postico) - Ein moderner PostgreSQL Client für den Mac.
- [Robo 3T](https://github.com/Studio3T/robomongo) Shell-zentriertes plattformübergreifendes MongoDB-Management-Tool.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - MySQL/MariaDB Datenbankverwaltung für macOS.
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - Schnelle, benutzerfreundliche Mac Datenbankverwaltungsanwendung für die Arbeit mit MySQL & MariaDB Datenbanken.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - Die grafische Oberfläche unterstützt alle SQLite-Funktionen.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Ein TUI zum Anzeigen von SQLite-Datenbanken, geschrieben in Go.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) Webbasierter SQL-Editor läuft in Ihrer eigenen privaten Cloud.
- [SQLPro](https://www.macpostgresclient.com) - Ein einfacher, leistungsstarker PostgreSQL-Manager für macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Grafischer SQL-Client in Java, mit dem Sie die Struktur einer JDBC-kompatiblen Datenbank anzeigen, die Daten in Tabellen durchsuchen, SQL-Befehle ausgeben usw.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) Datenbankverwaltung für VSCode.
- [SQLyog](https://www.webyog.com/product/sqlyog) - Die vollständigste und einfachste MySQL GUI.
- [Tabix](https://github.com/tabixio/tabix) - SQL Editor & Open Source einfache Business Intelligence für Clickhouse.
- [TablePlus](https://github.com/TablePlus/TablePlus) - Modernes, natives und freundliches GUI-Tool für relationale Datenbanken: MySQL, PostgreSQL, SQLite & mehr.
- [TeamPostgreSQL](http://www.teampostgresql.com) PostgreSQL Web Administration GUI - Verwenden Sie Ihre PostgreSQL-Datenbanken von überall aus mit einer reichhaltigen, blitzschnellen AJAX-Weboberfläche.
- [Query.me](https://query.me) - Collaborative SQL Editor im Notebook-Format. Lassen Sie uns mit JINJA auf Abfrageergebnisse verweisen, Daten visualisieren und Runs und Exporte planen.


## CLI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) Verbinden Sie sich mit einer Datenbank, um SQL-Befehle in IPython oder IPython Notebook auszugeben.
- [iredis](https://github.com/laixintao/iredis) - Ein Cli für Redis mit AutoCompletion und Syntax Highlighting.
- [pgcenter](https://github.com/lesovsky/pgcenter) - Top-like Admin Tool für PostgreSQL.
- [pg_activity](https://github.com/julmon/pg_activity) Top-like Anwendung für PostgreSQL Server Aktivitätsüberwachung.
- [pg_top](https://github.com/markwkm/pg_top) - Top für PostgreSQL.
- [pspg](https://github.com/okbob/pspg) PostgreSQL Pager.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) Linter für gefährliche PostgreSQL-Migrationsmuster. Es funktioniert nahtlos mit PostgreSQL-SQL-Dateien und lässt sich nativ in Projekte mit Diesel und SQLx integrieren.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) Oracle SQL Developer Command Line (SQLcl) ist eine kostenlose Befehlszeilenschnittstelle für Oracle Database.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - CLI-Tools zum Manipulieren von SQLite-Datenbankdateien - Einfügen von Daten, Ausführen von Abfragen, Erstellen von Indizes, Konfigurieren der Volltextsuche und mehr.
- [SQLLine](https://github.com/julianhyde/sqlline) Befehlszeilen-Shell zum Ausgeben von SQL in relationale Datenbanken über JDBC.
- [usql](https://github.com/xo/usql) - Eine universelle Befehlszeilenschnittstelle für PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server und viele andere Datenbanken, einschließlich NoSQL und nicht-relationale Datenbanken!

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) - CLI-Tool für AWS Athena-Service, das Autovervollständigung und Syntaxhervorhebung durchführen kann.
- [litecli](https://github.com/dbcli/litecli) CLI für SQLite-Datenbanken mit Autovervollständigung und Syntax-Hervorhebung.
- [mssql-cli](https://github.com/dbcli/mssql-cli) - Ein Befehlszeilenclient für SQL Server mit Autovervollständigung und Syntaxhervorhebung.
- [mycli](https://github.com/dbcli/mycli) - Ein Terminal Client für MySQL mit AutoCompletion und Syntax Highlighting.
- [pgcli](https://github.com/dbcli/pgcli) PostgreSQL CLI mit Autovervollständigung und Syntax-Hervorhebung.
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI mit Autovervollständigung und Syntax-Hervorhebung.


## Schema

### Änderungen
- [2bass](https://github.com/CourseOrchestra/2bass) Datenbankkonfiguration als Code-Tool, das das Konzept von idempotenten DDL-Skripten verwendet.
- [Atlas](https://github.com/ariga/atlas) Überprüfen und Anwenden von Änderungen an Ihrem Datenbankschema.
- [Bytebase](https://github.com/bytebase/bytebase) Webbasiertes, Zero-Config, abhängigkeitsfreies Datenbankschemaänderungs- und Versionskontrolltool für Teams.
- [flyway](https://github.com/flyway/flyway) Datenbank-Migrations-Tool.
- [gh-ost](https://github.com/github/gh-ost) - Online Schema Migration für MySQL.
- [liquibase](https://github.com/liquibase/liquibase) Datenbankunabhängige Bibliothek zum Nachverfolgen, Verwalten und Anwenden von Datenbankschemaänderungen.
- [migra](https://github.com/djrobstep/migra) - Wie diff, aber für PostgreSQL-Schemata.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - Node.js Datenbankmigrationsmanagement, das ausschließlich für PostgreSQL erstellt wurde. (Aber kann auch für andere DBs verwendet werden, die dem SQL-Standard entsprechen - z. B. CockroachDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - Einfaches CLI-Tool zum Durchführen von Schemaänderungen und Backfills mit null Ausfallzeiten in PostgreSQL.
- [Prisma Migrate](https://github.com/prisma/migrate) Deklaratives Datenbankschema-Migrationstool, das eine deklarative Datenmodellierungssyntax verwendet, um Ihr Datenbankschema zu beschreiben.
- [Pyrseas](https://github.com/perseas/Pyrseas) Bietet Dienstprogramme zur Beschreibung eines PostgreSQL-Datenbankschemas als YAML.
- [Reshape](https://github.com/fabianlindfors/reshape) - Ein benutzerfreundliches Zero-Downtime-Schema-Migrationstool für Postgres.
- [SchemaHero](https://github.com/schemahero/schemahero) - Ein Kubernetes-Operator für deklaratives Datenbankschemamanagement (Gitops für Datenbankschemas).
- [Skeema](https://github.com/skeema/skeema) Deklaratives Pure-SQL Schema Management System für MySQL und MariaDB, mit Unterstützung für Sharding und externe Online-Schema Change Tools.
- [Sqitch](https://github.com/sqitchers/sqitch) - Vernünftiges datenbankbasiertes Change Management für rahmenfreie Entwicklung und zuverlässige Bereitstellung.
- [sqldef](https://github.com/k0kubun/sqldef) - Idempotente Schemaverwaltung für MySQL, PostgreSQL und mehr.
- [yuniql](https://github.com/rdagumampan/yuniql) - Noch ein weiteres Schema-Versionierungs- und Migrationstool, das gerade mit nativem .NET Core 3.0+ und hoffentlich besser erstellt wurde.

### Codegenerierung
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) SQL DDL (Data Definition Language) aus Tabellendaten ableiten.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Befehlszeile util für den Export Oracle-Schema, um DDL-Init-Skripte mit der Fähigkeit zum Filtern unerwünschter Informationen, separate DDL in verschiedenen Dateien, Ausgabe im hübschen Format zu setzen.

### Diagramme
- [Azimutt](https://github.com/azimuttapp/azimutt) - Ein Visualisierungstool für Entity Relationship Diagramme (ERD), mit verschiedenen Filtern und Eingaben, um Ihr Datenbankschema zu verstehen.
- [ChartDB](https://github.com/chartdb/chartdb) - Kostenlose und Open-Source-Datenbankdiagramme Editor, Visualisierung und Design Ihrer DB mit einer einzigen Abfrage.
- [DrawDB](https://github.com/drawdb-io/drawdb) Kostenloses, einfaches und intuitives Online-Datenbank-Design-Tool und SQL-Generator. 
- [DrawSQL](https://drawsql.app) - Online-Datenbankschemadiagramm-Editor mit SQL-Import, AI-Generierung und Echtzeit-Teamzusammenarbeit.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) Entity Relation Diagramme Generation Tool.
- [ERD Lab](https://www.erdlab.io/) Kostenloses Cloud-basiertes Entity Relationship Diagramm (ERD) Tool für Entwickler.
- [Liam ERD](https://github.com/liam-hq/liam) Open-Source-Tool, das schöne und leicht zu lesende Entity Relationship Diagramme aus Ihrer Datenbank und ORMs generiert.
- [QuickDBD](https://www.quickdatabasediagrams.com/) - Einfaches Online-Tool, um Datenbankdiagramme schnell zu zeichnen.

### Unterlagen
- [dbdocs](https://dbdocs.io/) Erstellen Sie eine webbasierte Datenbankdokumentation mit DSL-Code.
- [DBML](https://github.com/holistics/dbml) - Database Markup Language, entwickelt, um Datenbankstrukturen zu definieren und zu dokumentieren.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) Ein kostenloses Datenbankschema Discovery and Comprehension Tool.
- [Schema Spy](https://github.com/schemaspy/schemaspy) Generieren Ihrer Datenbank in HTML-Dokumentation, einschließlich Entity Relationship Diagrammen.
- [tbls](https://github.com/k1LoW/tbls) - CI-Friendly Tool zum Dokumentieren einer Datenbank, geschrieben in Go.

### Design
- [Database Design](https://github.com/alextanhongpin/database-design) - Nützliche Tipps zum Entwerfen eines robusten Datenbankschemas.
- [DBDiagram](https://dbdiagram.io) - Ein kostenloses, einfaches Werkzeug, um ER-Diagramme zu zeichnen, indem Sie einfach Code schreiben.
- [DbSchema](https://dbschema.com/) Universeller Datenbankdesigner für Out-of-the-Box-Schemamanagement, Schemadokumentation, Design in einem Team und Bereitstellung in mehreren Datenbanken. DbSchema bietet Tools zum Schreiben und Ausführen von Abfragen, zum Erkunden der Daten, zum Generieren von Daten und zum Erstellen von Berichten.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - Einfach zu bedienende Datenbankmodellierungssoftware für hochwertige Datenmodelle. Es ist eine komplette Datenmodellierungslösung für Datenmodellierer und Datenarchitekten.
- [Moon Modeler](https://www.datensen.com) Datenmodellierungswerkzeug für noSQL und relationale Datenbanken. Verfügbar für Windows, Linux und macOS.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) Ein leistungsstarkes und kostengünstiges Datenbankdesign-Tool, mit dem Sie qualitativ hochwertige konzeptionelle, logische und physische Datenmodelle erstellen können.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) Kostenloses grafisches Tool, das die Produktivität erhöht und Datenmodellierungsaufgaben vereinfacht.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - Datenmodellierungstool für PostgreSQL.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - Online SQL Diagramming Tool.

### Proben
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) Beispielschemata für Oracle Database.


## API
Erstellen einer API für Ihre Daten
- [Datasette](https://github.com/simonw/datasette) - Ein Tool zum Erkunden und Veröffentlichen von Daten.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) Ein Open Source REST API Backend für mobile, Web- und IoT-Anwendungen.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) Verwandeln Sie mehrere Datenquellen in eine einzelne GraphQL-API.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) Blazing schnelle, sofortige Echtzeit-GraphQL-APIs auf PostgreSQL mit feinkörniger Zugriffskontrolle lösen auch Webhooks bei Datenbankereignissen aus.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) REST API für jede JDBC-gestützte Datenbank, ein PostgREST-Klon, der in Java geschrieben ist.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) Eine mittlere Java-Anwendung, ORDS, bildet HTTP(S)-Verben (GET, POST, PUT, DELETE usw.) zu Datenbanktransaktionen ab und gibt alle Ergebnisse zurück, die mit JSON formatiert wurden.
- [Prisma](https://github.com/prismagraphql/prisma) Verwandelt Ihre Datenbank in eine Echtzeit-GraphQL-API.
- [PostGraphile](https://github.com/graphile/postgraphile) Starten Sie sofort einen GraphQL API-Server, indem Sie PostGraphile auf Ihre bestehende PostgreSQL-Datenbank zeigen.
- [PostgREST](https://github.com/PostgREST/postgrest) REST API für jede PostgreSQL-Datenbank.
- [prest](https://github.com/prest/prest) - Ist eine Möglichkeit, eine RESTful API aus allen in Go geschriebenen Datenbanken zu bedienen.
- [Remult](https://github.com/remult/remult) - Ende-zu-Ende typensicheres CRUD über REST API für Ihre Datenbank mit feinkörniger Zugriffskontrolle.
- [restSQL](https://github.com/restsql/restsql) - SQL-Generator mit Java und HTTP APIs, verwendet eine einfache RESTful HTTP API mit XML- oder JSON-Serialisierung.
- [resquel](https://github.com/formio/resquel) Konvertieren Sie Ihre SQL-Datenbank auf einfache Weise in eine REST-API.
- [sandman2](https://github.com/jeffknupp/sandman2) Erzeugen Sie automatisch einen RESTful API-Service für Ihre Legacy-Datenbank.
- [soul](https://github.com/thevahidal/soul) Automatischer SQLite RESTful und Echtzeit-API-Server.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) Schreiben Sie Templated SQL, um RESTful APIs automatisch aus Ihrer Datenbank / Data Warehouse / Data Lake auszusetzen.

## Anwendungsplattformen
Low-Code- und No-Code-Plattformen für Application Building
- [Appsmith](https://github.com/appsmithorg/appsmith) - Leistungsstarkes Open Source Low Code Framework, um interne Anwendungen sehr schnell zu erstellen.
- [Budibase](https://github.com/Budibase/budibase) - Low-Code-Plattform zum Erstellen interner Apps in wenigen Minuten.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Low-Code interne Tool-Building-Plattform.
- [Nhost](https://github.com/nhost/nhost) - Die Open Source Firebase Alternative mit GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) Open Source No-Code Builder für Web-Datenbankanwendungen. Server und Drag-and-Drop UI Builder, Daten, die in PostgreSQL oder SQLite gespeichert sind.
- [SQLPage](https://github.com/sqlpage/SQLPage) - Schneller SQL-only Data Application Builder. Erstellen Sie automatisch eine Benutzeroberfläche auf SQL-Abfragen.
- [Tooljet](https://github.com/ToolJet/ToolJet) Open-Source-Low-Code-Plattform zum Erstellen interner Tools.


## Backup
- [BaRMan](https://github.com/2ndquadrant-it/barman) Backup und Recovery Manager für PostgreSQL.
- [Databasus](https://github.com/databasus/databasus) - Tool für geplante PostgreSQL-Backups über Web-Benutzeroberfläche mit externen Speichern (lokal, S3, FTP, Google Drive usw.), Benachrichtigungen (Webhook, Discord, Slack usw.) und Teammanagement.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) Zuverlässiges PostgreSQL Backup & Restore.
- [pgcopydb](https://github.com/dimitri/pgcopydb) Kopieren einer PostgreSQL-Datenbank auf einen Ziel-PostgreSQL-Server (pg)_Deponie | pg_Wiederherstellen auf Steroiden.
- [pg_probackup](https://github.com/postgrespro/pg_probackup) Ein Backup- und Recovery-Manager für PostgreSQL.
- [Portabase](https://github.com/Portabase/portabase) Agent-basierte Plattform für PostgreSQL Backups und Wiederherstellungen mit dezentraler Ausführung und zentraler Orchestrierung. 

## Klonen
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - Instant Thin Cloning für PostgreSQL zur Skalierung des Entwicklungsprozesses.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL Klonschema Dienstprogramm ohne Notwendigkeit, außerhalb der Datenbank zu gehen.
- [Spawn](https://spawn.cc/) - Cloud-Service zum Erstellen von sofortigen Datenbankkopien für Entwicklung und CI. Keine lokalen db-Installationen mehr, sofortige Wiederherstellung zu willkürlichen Speicherpunkten, isolierte Kopien für jeden Feature-Zweig oder Test. Instant Provisioning unabhängig von der Datenbankgröße.


## Überwachung/Statistik/Leistung
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Bietet eine grafische Ansicht der Daten des aktiven Sitzungsverlaufs innerhalb von Oracle und PostgreSQL DB.
- [Metis](https://www.metisdata.io/product/troubleshooting) Bietet Beobachtbarkeit und Performance-Tuning für SQL-Datenbanken.
- [Monyog](https://www.webyog.com/product/monyog) Agentless & kostengünstiges MySQL Monitoring Tool.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) Überwachen Sie Ihre SQL Server unter Linux-Leistung mit Collected, InfluxDB und Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) Ein sicheres, einfaches und agentenloses Remote-Server-Monitoring-Tool, das mit leistungsstarken Funktionen ausgestattet ist, um Ihre Überwachung so effektiv wie möglich zu gestalten.
- [Percona Monitoring and Management](https://github.com/percona/pmm) Open-Source-Plattform zum Verwalten und Überwachen der Leistung von MySQL und MongoDB.
- [pganalyze collector](https://github.com/pganalyze/collector) - Pganalyze Statistics Collector zum Sammeln von PostgreSQL-Metriken und Protokolldaten.
- [pgbadger](https://github.com/dalibo/pgbadger) - Ein schneller PostgreSQL Log Analyzer.
- [pgDash](https://pgdash.io) Messen und verfolgen Sie jeden Aspekt Ihrer PostgreSQL-Datenbanken.
- [PgHero](https://github.com/ankane/pghero) - Ein Performance-Dashboard für PostgreSQL - Gesundheitschecks, vorgeschlagene Indizes und mehr.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - Sammeln und Anzeigen von Informationen und Statistiken von einem laufenden PostgreSQL-Server.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) All-in-One-Tool zum einfachen Erstellen einer Umgebung zur Visualisierung des Zustands und der Leistung Ihres PostgreSQL-Clusters.
- [pgMustard](https://www.pgmustard.com) - Eine Benutzeroberfläche für PostgreSQL erklärt Pläne sowie Tipps zur Verbesserung der Leistung.
- [pgstats](https://github.com/gleu/pgstats) Sammelt PostgreSQL-Statistiken und speichert sie entweder in CSV-Dateien oder druckt sie auf dem Stdout.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Flexible, in sich geschlossene PostgreSQL-Metriken-Überwachungs- / Dashboarding-Lösung.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) Service zum Extrahieren und Bereitstellen von Metriken in Ihrer PostgreSQL-Datenbank.
- [PostgreSQL Monitor](https://postgresmonitor.com) - Ein einfach zu bedienender Überwachungsdienst für PostgreSQL, der Benachrichtigungen, Dashboards, Abfragestatistiken und dynamische Empfehlungen bereitstellt.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Diagnosetool der neuen Generation, mit dem Benutzer den Zustand von PostgreSQL-Datenbanken gründlich analysieren können.
- [Promscale](https://github.com/timescale/promscale) - Das Open-Source-Beobachtungs-Backend für Metriken und Traces, die von SQL unterstützt werden.
- [Releem](https://releem.com) - Performance-Monitoring- und Optimierungstool für MySQL & MariaDB, das umsetzbare Erkenntnisse und sichere Automatisierung für Fehlkonfigurationen, langsame Abfragen, Schemaprobleme und Deadlocks liefert und so die manuelle Arbeit in großem Maßstab reduziert.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) Bietet Metriken für Ihre PostgreSQL-Datenbank.

### Prometheus
- [pgSCV](https://github.com/weaponry/pgscv) - Metrikexporteur für PostgreSQL und PostgreSQL-bezogene Dienste.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) Prometheus Exporteur für PostgreSQL Server Metriken.
- [pg_exporter](https://github.com/Vonng/pg_exporter) - Vollständig anpassbarer Prometheus-Exporteur für PostgreSQL & Pgbouncer mit feinkörniger Ausführungskontrolle.

### Zabbix
- [Mamonsu](https://github.com/postgrespro/mamonsu) - Monitoring Agent für PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Plugin, das für die Arbeit mit Zabbix Enterprise Monitor entwickelt wurde, um mehrstufige Überwachung, Leistungs- und Verfügbarkeitsberichte und Messungen für Oracle-Datenbanken zusammen mit Serverleistungsmetriken bereitzustellen.
- [pg_monz](https://github.com/pg-monz/pg_monz) - Dies ist die Zabbix-Überwachungsvorlage für die PostgreSQL-Datenbank.
- [Pyora](https://github.com/bicofino/Pyora) Python-Skript zur Überwachung von Oracle-Datenbanken.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - Schnelles, flexibles und kontinuierlich entwickelndes Plugin zur Überwachung Ihres RDBMS.


## Prüfung
- [DbFit](https://github.com/dbfit/dbfit) Ein Datenbanktest-Framework, das eine einfache testgesteuerte Entwicklung Ihres Datenbankcodes unterstützt.
- [pgTAP](https://github.com/theory/pgtap) Unit Testing für PostgreSQL.
- [RegreSQL](https://github.com/dimitri/regresql) Regressionstest Ihrer SQL-Abfragen.
- [SQLancer](https://github.com/sqlancer/sqlancer) - Testen Sie DBMS automatisch, um Logikfehler in ihrer Implementierung zu finden.


## HA/Failover/Sharding
- [Citus](https://github.com/citusdata/citus) PostgreSQL-Erweiterung, die Ihre Daten und Abfragen auf mehrere Knoten verteilt.
- [patroni](https://github.com/zalando/patroni) - Eine Vorlage für PostgreSQL High Availability mit ZooKeeper, etcd oder Consul.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - Eine hochskalierbare Lösung für MySQL Clustering und hohe Verfügbarkeit.
- [ShardingSphere](https://github.com/apache/shardingsphere) Distributed SQL Transaction & Query Engine für Data Sharding, Skalierung, Verschlüsselung und mehr - in jeder Datenbank.
- [stolon](https://github.com/sorintlab/stolon) Cloud native PostgreSQL Manager für PostgreSQL Hochverfügbarkeit.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - PostgreSQL Erweiterung und Service für automatisiertes Failover und Hochverfügbarkeit.
- [pglookout](https://github.com/aiven/pglookout) - PostgreSQL Replikationsüberwachung und Failover Daemon.
- [pgslice](https://github.com/ankane/pgslice) - PostgreSQL Partitionierung so einfach wie Kuchen.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - Hochverfügbarkeit für PostgreSQL, basierend auf den Branchenreferenzen Pacemaker und Corosync.
- [autobase](https://github.com/vitabaks/autobase) - Open-Source-DBaaS, das die Bereitstellung und Verwaltung von hochverfügbaren PostgreSQL-Clustern automatisiert.
- [Vitess](https://github.com/vitessio/vitess) Datenbankclustersystem zur horizontalen Skalierung von MySQL durch generalisiertes Sharding.


## Kubernets
- [KubeDB](https://kubedb.com) Machen Sie das Ausführen von Datenbanken in Produktionsqualität auf Kubernetes einfach.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) Der PostgreSQL-Operator ermöglicht hochverfügbare PostgreSQL-Cluster auf Kubernetes (Kubernetes) mit Patroni.
- [Spilo](https://github.com/zalando/spilo) HA PostgreSQL Cluster mit Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) Enterprise-Grade, Full Stack PostgreSQL auf Kubernetes.


## Konfigurationsabstimmung
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - In Perl geschriebenes Skript, mit dem Sie eine MySQL-Installation schnell überprüfen und Anpassungen vornehmen können, um die Leistung und Stabilität zu erhöhen.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - Kostenloses Online-Tool zur Generierung eines optimierten `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - PostgreSQL Konfigurationsassistent.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - Einfaches Skript, um Ihre PostgreSQL-Datenbankkonfiguration zu analysieren und Tuning-Ratschläge zu geben.


## DevOps
- [DBmaestro](https://www.dbmaestro.com) Beschleunigt Release-Zyklen und unterstützt Agilität im gesamten IT-Ökosystem.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) Führt wichtige Datenbankentwicklungsfunktionen in Ihrem DevOps-Workflow aus – ohne Kompromisse bei Qualität, Leistung oder Zuverlässigkeit.


## Berichterstattung
- [Chartbrew](https://chartbrew.com) Erstellen Sie Live-Dashboards, Diagramme und Clientberichte aus mehreren Datenbanken und Diensten.
- [Poli](https://github.com/shzlw/poli) - Eine einfach zu bedienende SQL-Berichtsanwendung, die für SQL-Liebhaber entwickelt wurde.


## Verteilungen
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - Tool, mit dem MySQL-Datenbankserver einfach bereitgestellt werden können.
- [dbatools](https://github.com/sqlcollaborative/dbatools) - PowerShell-Modul, das Sie sich wie ein Kommandozeilen-SQL Server Management Studio vorstellen können.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - Voll funktionsfähige PostgreSQL-Installation als Standard-Mac-App.
- [BigSQL](https://www.bigsql.org) - Eine entwicklerfreundliche Distribution von PostgreSQL.
- [Elephant Shed](https://github.com/credativ/elephant-shed) Webbasiertes PostgreSQL-Management-Frontend, das mehrere Dienstprogramme und Anwendungen für die Verwendung mit PostgreSQL bündelt.
- [Pigsty](https://github.com/Vonng/pigsty) - Batterieinklusive Open-Source-Distribution für PostgreSQL mit ultimativer Beobachtbarkeit und Datenbank-as-Code-Toolbox für Entwickler.


## Sicherheit
- [Acra](https://github.com/cossacklabs/acra) Datenbanksicherheitssuite. Datenbank-Proxy mit Verschlüsselung auf Feldebene, Suche durch verschlüsselte Daten, SQL-Injektionsprävention, Intrusion Detection, Honeypots. Unterstützt clientseitige und proxyseitige ("transparente") Verschlüsselung. SQL, NoSQL.
- [Databunker](https://github.com/securitybunker/databunker) - Spezielle DSGVO-konforme sichere Tresore für Kundendatensätze, die auf der regulären DB aufbauen.
- [Inspektor](https://github.com/poonai/inspektor) Zugriffskontrollschicht für Datenbanken. Inspektor nutzt Open Policy Agent, um politische Entscheidungen zu treffen.


## SQL

### Analysegeräte
- [Holistic.dev](https://holistic.dev) Automatischer Erkennungsdienst für Datenbankleistung, Sicherheit und Architekturprobleme.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - Erkennt automatisch gängige SQL-Anti-Muster.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) Dialektflexibler und konfigurierbarer SQL-Linter.
- [SQLLineage](https://github.com/reata/sqllineage) SQL Lineage Analysis Tool mit Python.
- [TSQLLint](https://github.com/tsqllint/tsqllint) Ein Tool zum Beschreiben, Identifizieren und Melden des Vorhandenseins von Anti-Mustern in TSQL-Skripten.

### Codegeneratoren
- [sqlc](https://sqlc.dev) - SQL-erster Codegenerator, der typsichere Bindungen für verschiedene Sprachen und verschiedene Datenbanken erzeugt.
- [SQLDelight](https://sqldelight.github.io/sqldelight) - SQL-erster Codegenerator, der typsichere Bindungen für Kotlin und verschiedene Datenbanken erzeugt.
- [pGenie](https://pgenie.io) - SQL-erster Codegenerator, der typsichere Bindungen für verschiedene Sprachen erstellt und sich auf die PostgreSQL-Datenbank spezialisiert hat.

### Verlängerungen
- [PartiQL](https://partiql.org) SQL-kompatibler Zugriff auf relationale, semistrukturierte und verschachtelte Daten.

### Rahmen
- [Apache Calcite](https://calcite.apache.org) Dynamisches Datenmanagement-Framework mit erweiterten SQL-Funktionen.
- [ZetaSQL](https://github.com/google/zetasql) Analyzer Framework für SQL.

### Formatierer
- [CodeBuff](https://github.com/antlr/codebuff) Sprachunabhängiges Pretty-Printing durch maschinelles Lernen.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) Open Source Java SQL Formatter für viele RDBMS basierend auf JSqlParser.
- [SQL Online](https://sqlonline.in) - Ein kostenloses Tool zum Formatieren Ihrer SQL-Abfragen gefolgt von Inhalten für Analysten.
- [pgFormatter](https://github.com/darold/pgFormatter) Ein PostgreSQL SQL Syntax Beautifier.
- [Poor SQL](https://poorsql.com) Sofortige kostenlose und Open-Source-T-SQL-Formatierung. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - JavaScript-Bibliothek zum Ausdrucken von SQL-Abfragen.

### Spiele
- [Lost at SQL](https://lost-at-sql.therobinlord.com) Ein SQL-Lernspiel, das Ihnen hilft, grundlegende SQL-Fähigkeiten zu erlernen, so dass Sie Abfragen verwenden können, um Informationen zu erhalten.
- [Querymon](https://codepip.com/games/querymon/) - Lernen Sie, SQL-Abfragen im Querydex zu verwenden, einer Datenbank von Monstern von gewöhnlich bis legendär.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - Ein weltraumbasiertes Strategiespiel, das vollständig in einer PostgreSQL-Datenbank implementiert ist.
- [SQL Island](https://sql-island.informatik.uni-kl.de) - Nach dem überlebten Flugzeugabsturz bleiben Sie vorerst auf SQL Island stecken. Indem Sie Fortschritte im Spiel machen, werden Sie einen Weg finden, von dieser Insel zu entkommen.
- [SQL Murder Mystery](https://mystery.knightlab.com) Entwickelt sowohl eine selbstgesteuerte Lektion zum Erlernen von SQL-Konzepten und -Befehlen als auch ein lustiges Spiel für erfahrene SQL-Benutzer, um ein faszinierendes Verbrechen zu lösen.
- [SQL Police Department](https://sqlpd.com) In SQLPD können Sie Verbrechen lösen, während Sie gleichzeitig SQL lernen.

### Parser
- [General SQL Parser](https://www.sqlparser.com) Parsing, Formatierung, Modifikation und Analyse für SQL.
- [jOOQ](https://github.com/jOOQ/jOOQ) Parses SQL, übersetzt es in andere Dialekte und ermöglicht Ausdrucksbaumtransformationen.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) Parse eine SQL-Anweisung und übersetze sie in eine Hierarchie von Java-Klassen.
- [libpg_query](https://github.com/pganalyze/libpg_query) - C-Bibliothek für den Zugriff auf den PostgreSQL-Parser außerhalb der Serverumgebung.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) Parse SQL in JSON.
- [sqlparse](https://github.com/andialbrecht/sqlparse) Nicht validierender SQL-Parser für Python.
- [SQLGlot](https://github.com/tobymao/sqlglot) - Reiner Python SQL Parser, Transpiler und Builder.

### Über SQL
Führen Sie SQL-Abfragen gegen alles aus
- [CloudQuery](https://github.com/cloudquery/cloudquery) Extrahiert, transformiert und lädt Ihre Cloud-Assets in normalisierte PostgreSQL-Tabellen.
- [csvq](https://github.com/mithrandie/csvq) SQL-ähnliche Abfragesprache für CSV.
- [dsq](https://github.com/multiprocessio/dsq) Commandline-Tool zum Ausführen von SQL-Abfragen gegen JSON, CSV, Excel, Parquet und mehr.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Dieses Plugin für Eclipse Memory Analyzer ermöglicht es, Heap Dump über SQL abzufragen.
- [OctoSQL](https://github.com/cube2222/octosql) Abfrage-Tool, mit dem Sie Daten aus mehreren Datenbanken und Dateiformaten mit SQL verbinden, analysieren und transformieren können.
- [osquery](https://github.com/osquery/osquery) - SQL-basierte Betriebssystem-Instrumentierung, Überwachung und Analyse.
- [Resmo](https://www.resmo.com) - Audit und Evaluierung von Ressourcen mit SQL.
- [sq](https://github.com/neilotoole/sq) Befehlszeilen-Tool, das JQ-Zugriff auf strukturierte Datenquellen bietet: SQL-Datenbanken oder Dokumentformate wie CSV oder Excel. Es ist das Liebeskind von sql + jq.
- [Steampipe](https://github.com/turbot/steampipe) Verwenden Sie SQL, um Ihre Cloud-Dienste (AWS, Azure, GCP und mehr) sofort abzufragen.
- [TextQL](https://github.com/dinedal/textql) SQL gegen strukturierten Text wie CSV oder TSV ausführen.
- [trdsql](https://github.com/noborus/trdsql) - CLI-Tool, das SQL-Abfragen auf CSV, LTSV, JSON und TBLN ausführen kann.
- [Trino](https://github.com/trinodb/trino) Distributed SQL Query Engine entwickelt, um große Datensätze über eine oder mehrere heterogene Datenquellen verteilt abzufragen.

### Language Server Protokoll
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) SQL Language Server.
- [sqls](https://github.com/lighttiger2505/sqls) - SQL Language Server geschrieben in Go.

### Lernen
Lernen und Rätsel für SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Schwierige set-basierte SQL-Puzzles.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - Üben Sie Programmieren, bereiten Sie sich auf Interviews vor und werden Sie eingestellt.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) Ein Buch über die Verwendung von SQL zum Abrufen, Filtern und Analysieren von Daten.
- [LeetCode](https://leetcode.com/problemset/database) - Verbessern Sie Ihre Fähigkeiten, erweitern Sie Ihr Wissen und bereiten Sie sich auf technische Interviews vor.
- [Select Star SQL](https://selectstarsql.com) - Kostenloses interaktives Buch, das darauf abzielt, der beste Ort im Internet zu sein, um SQL zu lernen.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) Data Science Bildungsressourcen.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) Selbstgesteuerte Lektion zum Erlernen von SQL-Konzepten und -Befehlen und ein lustiges Spiel für erfahrene SQL-Benutzer, um ein faszinierendes Verbrechen zu lösen.

### Plan
- [pev2](https://github.com/dalibo/pev2) - Eine Vue.js-Komponente, um eine grafische Visualisierung eines PostgreSQL-Ausführungsplans anzuzeigen.
- [pg_flame](https://github.com/mgartner/pg_flame) - Ein Flamegraph Generator für PostgreSQL `EXPLAIN ANALYZE` Output.

### Skripte
Nützliche SQL-Scripts für verschiedene Zwecke
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) T-SQL-Skripte auf lange Sicht: Optimierung des Speichers, On-the-Fly-Dokumentation und allgemeine administrative Anforderungen für SQL Server.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - Eine Sammlung nützlicher kleiner Skripte für die Datenbankanalyse und -verwaltung, erstellt von unserem Team von PostgreSQL Experts.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) Abfragen zur Messung statistischer Aufblähungen in Indizes und Tabellen für PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - SQL-Test, der überprüft, ob Ihre Datenbank Regeln von <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) - Nützliche PostgreSQL-Dienstprogramme.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - Nützliche SQL-Scripts und Befehle von <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - Der fehlende Satz nützlicher Tools für PostgreSQL DBAs und alle Ingenieure.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Nützliche PostgreSQL Abfragen und Befehle.
- [TPT](https://github.com/tanelpoder/tpt-oracle) Diese sqlplus-Skripte dienen der Leistungsoptimierung und Fehlerbehebung für Oracle Database.


## Daten
- [dbt](https://github.com/dbt-labs/dbt-core) Verwandeln Sie Ihre Daten, indem Sie einfach ausgewählte Anweisungen schreiben, während dbt diese Anweisungen in Tabellen und Ansichten in einem Data Warehouse umwandelt.
- [QuickTable](https://quicktable.io) Ermöglicht es jedem, ohne Code auf Daten zuzugreifen, sie zu bereinigen, zu analysieren, zu transformieren und zu modellieren.

### Katalog
- [Amundsen](https://github.com/amundsen-io/amundsen) Metadatengesteuerte Anwendung zur Verbesserung der Produktivität von Datenanalysten, Datenwissenschaftlern und Ingenieuren bei der Interaktion mit Daten.
- [DataHub](https://github.com/datahub-project/datahub) Die Metadatenplattform für den modernen Datenstapel.
- [Marquez](https://github.com/MarquezProject/marquez) Sammeln, Aggregieren und Visualisieren der Metadaten eines Datenökosystems.

### Linie
- [Dwh.dev](https://dwh.dev) - Nexgen Datenlinie für Snowflake.

### Erzeugung/Masking/Subsetting
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) Generieren, verschleiern (anonymisieren / pseudonymisieren) und migrieren Sie Daten für Entwicklungs-, Test- und Schulungszwecke.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) Leistungsstarkes GUI-Tool zum Erstellen massiver Mengen realistischer Testdaten.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Kleines, aber mächtiges GUI-Tool zum Befüllen von Oracle-Schemata mit Tonnen realistischer Testdaten.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) Leistungsstarkes GUI-Tool für eine schnelle Generierung aussagekräftiger Testdaten für Datenbanken.
- [Faker](https://github.com/faker-js/faker) - Generieren Sie riesige Mengen an gefälschten Daten im Browser und Node.js.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) Datenbank-Anonymisierung und synthetische Datengenerierungs-Tool für MySQL und PostgreSQL.
- [myanon](https://github.com/ppomes/myanon) Streaming Anonymizer für MySQL-Dump-Dateien. Lies mysqldump von stdin, schreibt anonymisierte version zu stdout. Unterstützt deterministisches Hashing, feste Werte, JSON-Feldanonymisierung und Python-Erweiterungen.
- [Noisia](https://github.com/lesovsky/noisia) Schädlicher Workload-Generator für PostgreSQL.
- [quick-seed](https://github.com/miit-daga/quick-seed) Datenbank-agnostisches Seeding-Tool zur Generierung realistischer Testdaten mit Unterstützung für PostgreSQL, MySQL, SQLite, Prisma und Drizzle ORM.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) Einfaches und leistungsstarkes Tool zum Generieren und Befüllen ausgewählter Tabellen oder ganzer Datenbanken mit realistischen Testdaten für Ihre Anwendungen. Generieren Sie Testdaten für: Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift und Amazon RDS.
- [SQLable](https://sqlable.com/generator/) Generieren Sie gefälschte Daten im Browser.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - DevOps' bester Freund für Datenbankmaskierung und -generierung.

### Datenprofiler
- [Data Profiler](https://github.com/capitalone/dataprofiler) Der DataProfiler ist eine Python-Bibliothek, die Datenanalyse, -überwachung und -erkennung erleichtert.
- [Desbordante](https://github.com/desbordante/desbordante-core) Ein Open-Source-Datenprofiler, der sich speziell auf die Entdeckung und Validierung komplexer Datenmuster konzentriert.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Ein universeller Open-Source-Datenprofiler für die Analyse eines Datensatzes auf hoher Ebene.

### Replikation
- [dtle](https://github.com/actiontech/dtle) Distributed Data Transfer Service für MySQL.
- [Litestream](https://github.com/benbjohnson/litestream) Streaming Replikation für SQLite.
- [pgsync](https://github.com/ankane/pgsync) - PostgreSQL-Daten zwischen Datenbanken synchronisieren.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQL zu PostgreSQL Replica System geschrieben in Python 3. Das System verwendet die Bibliothek mysql-Replikation, um die Zeilenbilder aus MySQL zu ziehen, die in PostgreSQL als JSONB gespeichert werden.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Ein Golang-Webserver zum Streamen von PostgreSQL ändert sich mindestens einmal über Websockets unter Verwendung der logischen Dekodierungsfunktion von PostgreSQL.
- [repmgr](https://github.com/2ndQuadrant/repmgr) Der beliebteste Replication Manager für PostgreSQL.

### Vergleichen
- [data-diff](https://github.com/datafold/data-diff) Befehlszeilen-Tool und Python-Bibliothek, um Zeilen effizient in zwei verschiedene Datenbanken zu diffen.
- [KS DB Merge Tools](https://ksdbmerge.tools) GUI zum Vergleichen und Synchronisieren von DB-Schema und Daten. Für Oracle Database, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access und Cross-DBMS.

## Papiere
Dokumente, Artikel, Manifeste und andere theoretische Materialien zu Datenbank-Tools
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) Behandeln Sie Ihre Datenbank als Code.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - Eine freundlich illustrierte Anleitung zum Entwerfen und Implementieren Ihrer ersten Datenbank.

## Machine Learning
- [MindsDB](https://github.com/mindsdb/mindsdb) In-Database Machine Learning.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) Bringt SQL und AI zusammen.

## Beitrag
- Ihre Beiträge sind immer willkommen! Bitte lesen Sie die [contribution guidelines](contributing.md) zuerst.
