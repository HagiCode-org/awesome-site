# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> Eine kuratierte Liste großartiger [PostgreSQL](https://www.postgresql.org/)-Software, Bibliotheken, Werkzeuge und Ressourcen, inspiriert von [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/).

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), oft einfach Postgres genannt, ist eine [objekt-relationale Datenbank](https://en.wikipedia.org/wiki/Object-relational_database) (ORDBMS). PostgreSQL ist [ACID-konform](https://en.wikipedia.org/wiki/ACID) und unterstützt [Transaktionen](https://en.wikipedia.org/wiki/Transaction_processing). (Weitere Informationen: [Wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: Beiträge sind willkommen. Füge Links über [Pull Requests](https://github.com/dhamaniasad/awesome-postgres/pulls) hinzu oder erstelle ein [Issue](https://github.com/dhamaniasad/awesome-postgres/issues), um eine Diskussion zu beginnen. Bitte beachte die [Beitragsrichtlinien](CONTRIBUTING.md).

## Inhalt

- [Awesome Postgres](#awesome-postgres-)
    - [Hohe Verfügbarkeit](#high-availability)
    - [Sicherungen](#backups)
    - [Grafische Oberfläche](#gui)
    - [Distributionen](#distributions)
    - [Kommandozeile](#cli)
    - [Server](#server)
    - [Überwachung](#monitoring)
    - [Erweiterungen](#extensions)
    - [Plattformen](#platforms)
    - [Arbeitswarteschlangen](#work-queues)
    - [Optimierung](#optimization)
    - [Dienstprogramme](#utilities)
    - [Sprachanbindungen](#language-bindings)
    - [PaaS (PostgreSQL als Dienst)](#paas-postgresql-as-a-service)
    - [Docker-Images](#docker-images)
    - [Kubernetes](#kubernetes)
- [Ressourcen](#resources)
    - [Anleitungen](#tutorials)
    - [Blogs](#blogs)
    - [Dokumentation](#documentation)
    - [Newsletter](#newsletters)
    - [Videos](#videos)
    - [Gemeinschaft](#community)
    - [Entwicklungspläne](#roadmaps)
    - [Externe Listen](#external-lists)

### Hohe Verfügbarkeit
* [autobase](https://github.com/vitabaks/autobase) - Autobase für PostgreSQL® ist ein quelloffenes DBaaS, das die Bereitstellung und Verwaltung hochverfügbarer PostgreSQL-Cluster automatisiert.
* [BDR](https://github.com/2ndQuadrant/bdr) - Bidirektionale Replikation – ein Multimaster-Replikationssystem für PostgreSQL.
* [Patroni](https://github.com/zalando/patroni) - Vorlage für PostgreSQL-Hochverfügbarkeit mit ZooKeeper oder etcd.
* [Spock](https://github.com/pgEdge/spock) - 100 % quelloffene logische PostgreSQL-Multimaster-Replikation.
* [Stolon](https://github.com/sorintlab/stolon) - PostgreSQL-Hochverfügbarkeit auf Basis von Consul oder etcd, mit Kubernetes-Integration.
* [pglookout](https://github.com/aiven/pglookout) - Replikationsüberwachung und Failover-Daemon.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - Quelloffene Werkzeugsammlung zur Verwaltung von Replikation und Failover in einem Cluster von PostgreSQL-Servern.
* [Slony-I](https://slony.info/) - „Ein Master zu mehreren Slaves“-Replikationssystem mit Kaskadierung und Failover.
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL Automatic Failover: Hochverfügbarkeit für Postgres auf Basis von Pacemaker und Corosync.
* [SkyTools](https://github.com/pgq/skytools-legacy) - Replikationswerkzeuge, darunter PgQ, ein Warteschlangensystem, und Londiste, ein etwas einfacher als Slony zu verwaltendes Replikationssystem.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Postgres-Erweiterung und -Dienst für automatisiertes Failover und Hochverfügbarkeit.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - Streamt Write-Ahead-Logs (WAL) in Echtzeit von einem PostgreSQL-Server. Eine sofort einsetzbare, containerfreundliche Alternative zu pg_receivewal.
* [pg-status](https://github.com/krylosov-aa/pg-status) - Ein Microservice mit HTTP-Endpunkten, über die sofort der aktuelle Master-Host oder ein Replikat abgerufen werden kann, das verschiedene Kriterien erfüllt.

### Sicherungen
* [Barman](https://www.pgbarman.org/index.html) - Backup- und Wiederherstellungsmanager für PostgreSQL von 2ndQuadrant.
* [Databasus](https://databasus.com) - Werkzeug für zeitgesteuerte PostgreSQL-Sicherungen über eine Weboberfläche mit externen Speicherorten (lokal, S3, FTP, Google Drive usw.), Benachrichtigungen (Webhook, Discord, Slack usw.) und Teamverwaltung.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - Erweiterte Werkzeuge zur Verwaltung von WAL-Dateien für PostgreSQL.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – Ein Fork von pg\_arman, verbessert von @PostgresPro; unterstützt inkrementelle Sicherungen, Sicherungen von Replikaten, parallele Sicherung und Wiederherstellung sowie anonyme Sicherungen ohne Archivierungsbefehl.
* [pgBackRest](https://pgbackrest.org/)  - Zuverlässige PostgreSQL-Sicherung und -Wiederherstellung.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Ein vollständiges Docker-basiertes Postgres-Sicherungs- und Wartungswerkzeug mit Weboberfläche.
* [pg\_back](https://github.com/orgrim/pg_back/) - pg\_back ist ein einfaches Sicherungsskript.
* [pghoard](https://github.com/aiven/pghoard) - Werkzeug zum Sichern und Wiederherstellen in Cloud-Objektspeichern (AWS S3, Azure, Google Cloud, OpenStack Swift).
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Ein praktischer Docker-Container, der PostgreSQL regelmäßig im Alibaba Cloud Object Storage Service (OSS) sichert.
* [wal-e](https://github.com/wal-e/wal-e) (obsolete) - Einfache kontinuierliche PostgreSQL-Archivierung nach S3, Azure oder Swift von Heroku.
* [wal-g](https://github.com/wal-g/wal-g) - Der in Go neu geschriebene Nachfolger von WAL-E. Unterstützt derzeit Cloud-Objektspeicherdienste von AWS (S3), Google Cloud (GCS) und Azure sowie OpenStack Swift, MinIO und Dateisystemspeicher. Unterstützt inkrementelle Sicherungen auf Blockebene, das Auslagern von Sicherungsaufgaben auf einen Standby-Server sowie Parallelisierung und Drosselungsoptionen. Neben Postgres kann WAL-G auch für MySQL- und MongoDB-Datenbanken verwendet werden.
* [pitrery](https://dalibo.github.io/pitrery/) - pitrery ist eine Sammlung von Bash-Skripten zur Verwaltung von Point-in-Time-Recovery-Sicherungen (PITR) für PostgreSQL.
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` ist ein schlanker Docker-Sidecar-Container zur Automatisierung regelmäßiger Sicherungen einer PostgreSQL-Datenbank mit `pg_dump`, `cron` und Bash-Skripten; außerdem sendet er die Ausgabe an einen Webhook.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - Docker-orientierte Lösung auf Basis von pg_dump mit Unterstützung für umgebungsbasierte Konfiguration zeitgesteuerter PostgreSQL-Sicherungen, optionaler Komprimierung, GPG-Verschlüsselung, Webhooks und automatischem Upload zu Amazon S3.

### Grafische Oberfläche
* [1bench](https://1bench.dev/postgresql) - Native, plattformübergreifende grafische Oberfläche mit erstklassiger Postgres-Unterstützung neben Redis, Elasticsearch, ClickHouse, Qdrant und weiteren Systemen (kommerzielle Software).
* [Adminer](https://www.adminer.org/) - Umfangreiches Datenbankverwaltungswerkzeug, geschrieben in PHP.
* [AI for Database](https://aifordatabase.com) - Chatte in natürlicher Sprache mit deiner PostgreSQL-Datenbank. SQL ist nicht nötig – erhalte sofort Einblicke, erstelle sich selbst aktualisierende Dashboards und löse automatisierte Workflows auf Grundlage von Datenbankänderungen aus (kommerzielle Software).
* [Beekeeper Studio](https://www.beekeeperstudio.io) - Kostenloser, quelloffener SQL-Client mit moderner Oberfläche und hervorragender Postgres-Unterstützung. Plattformübergreifend.
* [Bytebase](https://www.bytebase.com) - Datenbank-DevSecOps-Lösung für Entwickler-, Sicherheits-, DBA- und Plattform-Engineering-Teams.
* [Chartbrew](https://chartbrew.com) - Erstelle Live-Dashboards, Diagramme und Kundenberichte aus PostgreSQL-Daten. Enthält ein SQL-basiertes Abfragewerkzeug.
* [Count](https://count.co/) - Webbasierte Analyseplattform mit Notizbuchoberfläche, die eine Verbindung zu PostgreSQL herstellt (kommerzielle Software).
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE mit fortgeschrittenen Werkzeugsammlungen und guter plattformübergreifender Nutzung (kommerzielle Software).
* [Dekart](https://github.com/dekart-xyz/dekart) - Quelloffene Plattform, die PostGIS-Abfragen in teilbare interaktive Karten umwandelt.
* [Datazenit](https://datazenit.com/) - Webbasierte PostgreSQL-GUI (kommerzielle Software).
* [DataRow](https://www.datarow.com/) - Plattformübergreifender SQL-Client für Amazon Redshift: einfach, mühelos und erweiterbar.
* [DBConvert Streams](https://streams.dbconvert.com/) - Datenbank-IDE mit Migration, föderiertem SQL und CDC-Replikation für PostgreSQL, MySQL, Dateien und S3-kompatiblen Speicher (kommerzielle Software).
* [DBeaver](https://dbeaver.io/) - Universeller Datenbankmanager mit hervorragender PostgreSQL-Unterstützung.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - All-in-one-Lösung für mehrere Datenbanken mit Unterstützung für PostgreSQL, MySQL, MariaDB, SQL Server, Oracle und eine große Auswahl zugehöriger Cloud-Dienste (kommerzielle Software).
* [DbVisualizer](http://www.dbvis.com) - Plattformübergreifender Datenbank-Client für Entwickler, DBAs und Analysten (kommerzielle Software).
* [Holistics](https://www.holistics.io/) - Online-Datenbankverwaltung und GUI für SQL-Abfrageberichte mit starker PostgreSQL-Unterstützung, plattformübergreifend (kommerzielle Software).
* [JackDB](https://www.jackdb.com/) - Webbasierte Oberfläche für SQL-Abfragen (kommerzielle Software).
* [Luna Modeler](http://www.datensen.com) - Plattformübergreifendes Desktopwerkzeug zur Datenmodellierung (kommerzielle Software).
* [Mathesar](https://mathesar.org/) - Webanwendung mit intuitiver Nutzungserfahrung für Datenbanken.
* [Metabase](https://www.metabase.com/) - Einfache Dashboards, Diagramme und Abfragewerkzeug für PostgreSQL.
* [Numeracy](https://numeracy.co/) - Schneller SQL-Editor mit Diagrammen und Dashboards für PostgreSQL (kommerzielle Software).
* [OrcaQ](https://github.com/cin12211/orca-q) - Moderner, quelloffener Datenbankeditor für PostgreSQL, MySQL, Redis und weitere Systeme. Bietet einen KI-Assistenten, ERD-Visualisierung, Schema-Diff und visuelle Rollenverwaltung.
* [pgAdmin](https://www.pgadmin.org/) - GUI für PostgreSQL-Administration und -Verwaltung.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - Chatte in natürlicher Sprache mit Postgres (kommerzielle Software).
* [PgManage](https://github.com/commandprompt/pgmanage) - Moderner, plattformübergreifender, Postgres-zentrierter Datenbank-Client und Administrationswerkzeug.
* [pgModeler](https://pgmodeler.io/) - pgModeler ist ein quelloffenes PostgreSQL-Datenbankmodellierungswerkzeug.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - Quelloffene VS-Code-/Open-VSX-Erweiterung zur PostgreSQL-Verwaltung mit SQL-Notizbüchern, KI-Assistent, leicht nutzbaren Code-Snippets und vollwertigem DBMS mit Echtzeit-Überwachungsdashboard.
* [pgweb](https://github.com/sosedoff/pgweb) - Webbasierter PostgreSQL-Datenbankbrowser, geschrieben in Go.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - Das führende webbasierte Administrationswerkzeug für PostgreSQL.
* [Postbird](https://github.com/Paxa/postbird) - PostgreSQL-Client für macOS.
* [PostgresCompare](https://www.postgrescompare.com) - Plattformübergreifendes Werkzeug zum Vergleichen und Bereitstellen von Datenbanken (kommerzielle Software).
* [Postico](https://eggerapps.at/postico/) - Moderner PostgreSQL-Client für macOS (kommerzielle Software).
* [QueryGlow](https://queryglow.com/) - Selbst gehostete, webbasierte Datenbank-GUI mit KI-gestützter SQL-Generierung, EXPLAIN-Visualisierung und schema-bewusster Autovervollständigung (kommerzielle Software).
* [PSequel](http://www.psequel.com/) - Übersichtliche, einfache Oberfläche zur schnellen Ausführung gängiger PostgreSQL-Aufgaben (kommerzielle Software).
* [Redash](https://github.com/getredash/redash) - Stelle eine Verbindung zu beliebigen Datenquellen her und visualisiere und teile deine Daten ganz einfach.
* [SQL Tabs](http://www.sqltabs.com/) - Plattformübergreifender Desktop-Client für PostgreSQL, geschrieben in JS.
* [SQLPro for Postgres](http://macpostgresclient.com/) - Einfacher, leistungsstarker PostgreSQL-Manager für macOS (kommerzielle Software).
* [temBoard](https://github.com/dalibo/temboard) - Webbasierte PostgreSQL-GUI und Überwachung.
* [Teable](https://github.com/teableio/teable) - Eine superschnelle, echtzeitfähige, professionelle, entwicklerfreundliche No-Code-Datenbank.
* [TablePlus](https://tableplus.com/) - Native App zum Bearbeiten von Datenbanken und ihrer Struktur. Hohe Sicherheit (kommerzielle Software).
* [TablePro](https://tablepro.app/) - Nativer PostgreSQL-Client für macOS mit EXPLAIN-Visualisierung, ER-Diagrammen und KI-Assistent. Kostenlos und quelloffen.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Plattformübergreifendes Datenbankverwaltungswerkzeug (kostenlos/kommerziell).
* [DbGate](https://dbgate.org) - Der intelligenteste (No)SQL-Datenbank-Client.
* [WebDB](https://webdb.app) – Effiziente Datenbank-IDE.

### Distributionen
* [Postgres.app](https://postgresapp.com/) - Der einfachste Einstieg in PostgreSQL unter macOS.
* [Pigsty](https://github.com/Vonng/pigsty) - Quelloffene PostgreSQL-Distribution mit allem Nötigen, umfassender Beobachtbarkeit und einem Database-as-Code-Werkzeugkasten für Entwickler.

### Kommandozeile
* [atlas](https://github.com/ariga/atlas) - Atlas ist ein Werkzeug zur Verwaltung und Migration von Datenbankschemas nach modernen DevOps-Prinzipien.
* [pgcli](https://github.com/dbcli/pgcli) - Postgres-CLI mit Autovervollständigung und Syntaxhervorhebung.
* [pgfence](https://pgfence.com) - Prüft Postgres-SQL-Migrationen auf Sperrmodi und riskantes DDL und schlägt sichere Expand/Contract-Umschreibungen vor. CLI plus LSP. Extraktoren für Prisma, TypeORM und Knex.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Postgres-CLI mit Autovervollständigung und Syntaxhervorhebung, geschrieben in Go.
* [pgplan](https://github.com/JacobArthurs/pgplan) - Vergleicht und analysiert PostgreSQL-EXPLAIN-Pläne über die CLI.
* [pgschema](https://www.pgschema.com) - Deklarative Schema-Migration für Postgres nach dem Vorbild von Terraform.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI (und Go-Bibliothek) zum Vergleichen von Postgres-Schemas und Erzeugen von SQL-Migrationen mit minimalen Sperren.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - CLI zur Absicherung von PostgreSQL-Migrationen, die gefährliches DDL vor dem Produktiveinsatz erkennt – 80 Regeln, Sperrenklassifizierung, automatische Korrekturen und GitHub Action.
* [pgsh](https://github.com/sastraxi/pgsh) - Verzweige deine PostgreSQL-Datenbank wie mit Git.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - Der integrierte PostgreSQL-CLI-Client.
* [psql2csv](https://github.com/fphilipe/psql2csv) - Führt eine Abfrage in psql aus und gibt das Ergebnis als CSV aus.
* [sabiql](https://github.com/riii111/sabiql) - Schnelle, treiberlose TUI zum Durchsuchen, Abfragen und Bearbeiten von PostgreSQL-Datenbanken.
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpy ist ein JAVA-/JDBC-kompatibles Werkzeug, das aus deiner Datenbank HTML-Dokumentation einschließlich Entity-Relationship-Diagrammen erzeugt.
* [pdot](https://gitlab.com/dmfay/pdot) - Visualisiert und erkundet Datenbankstrukturen in deiner Shell – von kontextreichen Ansichten des Fremdschlüsselgraphen bis zu Trigger-Kaskaden, Rollenvererbung, Berechtigungen und vielem mehr.
* [squix](https://github.com/eduardofuncao/squix) - SQL-Kommandozeilenclient mit Abfrageverwaltung und interaktiven Ergebnissen.

### Server
* [AgensGraph](https://bitnine.net/) - Leistungsstarke Graphdatenbank auf Basis von PostgreSQL.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Ein MPP-PostgreSQL-Fork und quelloffene Alternative zu Greenplum Database.
* [FerretDB](https://www.ferretdb.io) - Eine vollständig quelloffene MongoDB-Alternative auf Basis von PostgreSQL.
* [Postgres-XL](https://www.postgres-xl.org/) - Skalierbarer, quelloffener, PostgreSQL-basierter Datenbankcluster.
* [YugabyteDB](https://yugabyte.com/) - Quelloffenes verteiltes SQL mit einem PostgreSQL-Fork auf verteilter Speicherung und Transaktionen.

### Sicherheit
* [Acra](https://github.com/cossacklabs/acra) - Sicherheitssuite für SQL-Datenbanken: Proxy zum Datenschutz mit transparenter Verschlüsselung während der Verarbeitung, SQL-Firewall (Schutz vor SQL-Injection) und Angriffserkennungssystem.
* [pgrls](https://github.com/pgrls/pgrls) - Statischer Analysator für Row-Level-Security-Richtlinien; 36 Regeln für Sicherheit, Leistung und Hygiene, davon 10 mechanisch automatisch korrigierbar; enthält einen semantischen Richtlinienvergleich zur CI-Freigabe.

### Überwachung
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check\_pgactivity dient der Überwachung von PostgreSQL-Clustern mit Nagios. Es bietet zahlreiche Optionen zur Messung und Überwachung nützlicher Leistungskennzahlen.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Nagios-Plugin check\_postgres zur Prüfung des Status von PostgreSQL-Datenbanken.
* [coroot](https://github.com/coroot/coroot) - Coroot ist ein quelloffenes APM- und Observability-Werkzeug sowie eine Alternative zu DataDog und NewRelic. eBPF ermöglicht schnelle Einblicke in die Systemleistung.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - SaaS-Überwachung, die Kennzahlen, Abfragen und Explain-Pläne erfasst und visualisiert und bei Problemen Warnmeldungen sendet (kommerzielle Software).
* [Instrumental](https://github.com/Instrumental/instrumentald) - Echtzeit-Leistungsüberwachung mit [vorgefertigten Diagrammen](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs) für eine einfache Einrichtung (kommerzielle Software).
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Umfangreiches PostgreSQL-Überwachungsmodul für Zabbix.
* [myDBA](https://mydba.dev) - Überwachung der PostgreSQL-Leistung mit mehr als 75 automatisierten Zustandsprüfungen, clusterbewusstem Indexberater, Abfrageanalyse und Überwachung von TimescaleDB-, pgvector- und PostGIS-Erweiterungen (kommerzielle Software).
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management (PMM) ist eine kostenlose, quelloffene Plattform zur Überwachung und Verwaltung von PostgreSQL, MySQL und MongoDB.
* [Pome](https://github.com/rach/pome) - Pome steht für PostgreSQL Metrics. Pome ist ein Dashboard mit PostgreSQL-Kennzahlen zur Überwachung des Zustands deiner Datenbank.
* [pgmetrics](https://pgmetrics.io/) - pgmetrics ist ein quelloffenes Werkzeug ohne Abhängigkeiten, das aus einer einzelnen Binärdatei besteht. Es sammelt zahlreiche Informationen und Statistiken von einem laufenden PostgreSQL-Server und gibt sie in einem gut lesbaren Textformat aus oder exportiert sie für Skripte als JSON und CSV.
* [pg\_view](https://github.com/zalando/pg_view) - Quelloffenes Kommandozeilenwerkzeug, das globale Systemstatistiken, Informationen zu einzelnen Partitionen, Speicherstatistiken und weitere Daten anzeigt.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Flexibler und leicht einzurichtender PostgreSQL-Kennzahlenmonitor mit Schwerpunkt auf Grafana-Dashboards.
* [pgwd](https://github.com/hrodrig/pgwd) - Überwacht die PostgreSQL-Verbindungsnutzung und veraltete Sitzungen, mit Schwellwertwarnungen, Prometheus-Kennzahlen und mehreren Benachrichtigungs-Backends.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - Führt einen Benchmarktest für PostgreSQL aus.
* [opm.io](http://opm.io) - Open PostgreSQL Monitoring ist eine kostenlose Softwaresuite zur Verwaltung von PostgreSQL-Servern. Sie erfasst Statistiken, zeigt Dashboards an und sendet Warnungen bei Problemen.
* [okmeter.io](https://okmeter.io/pg) - Kommerzieller agentenbasierter SaaS-Überwachungsdienst mit einem sehr detaillierten PostgreSQL-Plugin. Erfasst automatisch Hunderte von Statistiken, zeigt Dashboards zu allen Aspekten an und sendet bei Problemen Warnungen (kommerzielle Software).
* [dexter](https://github.com/ankane/dexter) - Der automatische Indexierer für Postgres. Erkennt langsame Abfragen und erstellt bei entsprechender Konfiguration Indizes.
* [pg_ash](https://github.com/NikolayS/pg_ash) - Active Session History für PostgreSQL. Erfasst einmal pro Sekunde über pg_cron Stichproben aus pg_stat_activity, speichert kodierte Momentaufnahmen und stellt 32 SQL-Funktionen zur Analyse von Warteereignissen bereit. Reines SQL, keine Erweiterungen erforderlich; funktioniert bei verwalteten Anbietern (RDS, Cloud SQL, Supabase usw.).
* [pg_exporter](https://github.com/Vonng/pg_exporter) - Vollständig anpassbarer Prometheus-Exporter für PostgreSQL und PgBouncer mit präziser Steuerung der Ausführung.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Prometheus-Exporter für PostgreSQL-Serverkennzahlen.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - Quelloffene PostgreSQL-Erweiterung zur effizienten und organisierten Verwaltung fortgeschrittener Statistiken.
* [pgvitals](https://github.com/pgvitals/pgvitals) - Sammlung von 40 schreibgeschützten Diagnoseabfragen zum Erkennen gängiger Leistungsprobleme (langsame Abfragen, Bloat, Vacuum-Verzögerungen, Sperrkonflikte, Replikationsverzug, Wraparound-Risiko). Nutzt ausschließlich den standardmäßigen Systemkatalog und benötigt keine Erweiterungen; optionales CLI fasst die Ergebnisse zu einem Zustandswert von 0 bis 100 zusammen.

### Erweiterungen
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - PostgreSQL Extension Network – zentrale Bezugsquelle für zahlreiche quelloffene PostgreSQL-Erweiterungen.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - Mehr als 1.000 PostgreSQL-Erweiterungen.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - Katalog mit mehr als 400 PostgreSQL-Erweiterungen.
* [AGE](https://github.com/apache/age) - Ergänzt PostgreSQL um vollständig funktionsfähige Graphdatenbankunterstützung einschließlich Cypher-Abfragen.
* [OrioleDB](https://www.orioledb.com/) - Die cloudnative Speicher-Engine für PostgreSQL. OrioleDB ist eine PostgreSQL-Erweiterung, die die Vorteile von festplatten- und arbeitsspeicherbasierten Engines vereint.
* [Citus](https://github.com/citusdata/citus) - Skalierbarer PostgreSQL-Cluster für Echtzeit-Workloads.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - Spaltenorientierter Speicher für Analysen mit PostgreSQL.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit protokolliert alle DML-Aktivitäten in der Datenbank spaltenweise.
* [pg_search](https://github.com/paradedb/paradedb) - pg_search ist eine PostgreSQL-Erweiterung, die mithilfe des hochmodernen Ranking-Verfahrens BM25 Volltextsuche über SQL-Tabellen ermöglicht.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - PostgreSQL-Erweiterung für lexikalischen Abruf aus der BM25-Familie mit nativem Indexzugriffsverfahren und SQL-APIs für Top-k-Abfragen.
* [pg_cron](https://github.com/citusdata/pg_cron) - Führt periodische Aufträge in PostgreSQL aus.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - Erweiterung für logische Streaming-Replikation.
* [pgcat](https://github.com/kingluo/pgcat) - Erweiterte logische PostgreSQL-Replikation.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL-SVG-Generator für QR-Codes und DataMatrix-Codes.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - Erweiterung zur Partitionsverwaltung für PostgreSQL.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Grundlegende Implementierung von Paxos und Paxos-basierter Tabellenreplikation für einen Cluster aus PostgreSQL-Knoten.
* [pg\_shard](https://github.com/citusdata/pg_shard) - Erweiterung zur horizontalen Skalierung von Lese- und Schreibvorgängen in Echtzeit.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - Werkzeug zur Überwachung der Abfrageleistung für PostgreSQL.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - Erweiterung zur automatischen Bloat-Bereinigung mit minimalen Sperren.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - Erweiterung zur Auslagerung rechenintensiver Workloads auf eine GPU.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - PostgreSQL-Erweiterung, die SQL-Abfragen fortlaufend auf Datenströmen ausführt und Ergebnisse schrittweise in Tabellen speichert.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - Erweiterung zur Prüfung von PL/pgSQL-Quellcode.
* [PostGIS](http://postgis.net/) - Räumliche und geografische Objekte für PostgreSQL.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Postgres-Anbindung als Erweiterung für die Kryptobibliothek Themis, die verschiedene Sicherheitsdienste auf PostgreSQL-Seite bereitstellt.
* [zomboDB](https://github.com/zombodb/zombodb) - Erweiterung für effiziente Volltextsuche mithilfe von durch Elasticsearch unterstützten Indizes.
* [pgMemento](https://github.com/pgMemento/pgMemento) - Stellt mithilfe von Triggern und serverseitigen Funktionen in PL/pgSQL einen Prüfpfad für deine Daten in einer PostgreSQL-Datenbank bereit.
* [TimescaleDB](https://www.timescale.com/) - Quelloffene Zeitreihendatenbank, vollständig mit Postgres kompatibel und als Erweiterung bereitgestellt.
* [pgTAP](https://pgtap.org/) - Datenbank-Testframework für Postgres.
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG bietet Funktionen für hypothetische/virtuelle Indizes.
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRouting erweitert die räumliche PostGIS-/PostgreSQL-Datenbank um räumliches Routing und weitere Funktionen zur Netzwerkanalyse.
* [PGroonga](https://pgroonga.github.io/) - PGroonga bietet ein neues Indexzugriffsverfahren auf Basis von Groonga, das blitzschnelle Volltextsuche in allen Sprachen ermöglicht.
* [PGAudit](https://www.pgaudit.org/) - Die PostgreSQL Audit-Erweiterung (pgaudit) stellt detaillierte Sitzungs- und/oder Objektprüfprotokolle über die standardmäßige Protokollierungsfunktion von PostgreSQL bereit.
* [PostgresML](https://postgresml.org/) - Maschinelles Lernen und KI direkt in deiner Datenbank, einschließlich Vektoren, LLMs und klassischem ML. Trainiere, führe Vorhersagen aus und verwalte den gesamten Lebenszyklus von ML-Modellen ausschließlich mit SQL.
* [ParadeDB](https://github.com/paradedb/paradedb) - Postgres für Suche und Analysen.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Erweiterung zum Maskieren oder Ersetzen personenbezogener Daten (PII) oder wirtschaftlich sensibler Daten in einer Postgres-Datenbank mithilfe von PG-Sicherheitskennzeichnungen.

### Plattformen
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - Quelloffene 4D-spatiotemporale Plattform, die PostGIS, TimescaleDB, pgvector und H3 für einheitliche raumbezogene und Zeitreihenanalysen kombiniert.
* [neond](https://github.com/matisiekpl/neond) - Auf Entwicklerfreundlichkeit ausgerichtete Steuerungsebene für Postgres mit Branching, PITR und S3-Dauerhaftigkeit. Wird als einzelner Docker-Container mit Web-Dashboard ausgeliefert und positioniert sich für unkritische Workloads als Ersatz für `postgres:latest`.

### Arbeitswarteschlangen
* [BeanQueue](https://github.com/LaunchPlatform/bq) - Python-Framework für Arbeitswarteschlangen auf Basis von SKIP LOCKED, LISTEN und NOTIFY.
* [pgmq](https://github.com/pgmq/pgmq) - Leichte Nachrichtenwarteschlange. Wie AWS SQS und RSMQ, aber auf Postgres.
* [river](https://github.com/riverqueue/river) - Hochleistungsfähiges Auftragsverarbeitungssystem für Go und Postgres.
* [pgBoss](https://github.com/timgit/pg-boss) - Verarbeite Aufträge in Postgres mit Node.js – wie ein Boss.
* [dbos](https://www.dbos.dev/) - Dauerhafte Workflows in TypeScript und Python.
* [Graphile Worker](https://worker.graphile.org) - Leistungsstarke, in Node.js geschriebene Auftragswarteschlange für PostgreSQL.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Die Postgres-Warteschlange für Node.js, die keine Wartung benötigt.

### Optimierung
* [EverSQL](https://www.eversql.com/) - Automatisiertes Werkzeug zur Abfrageoptimierung, Überwachung und Analyse sowie zur Empfehlung von Indizes (kommerzielle Software).
* [PEV2](https://github.com/dalibo/pev2) - Online-Visualisierer für Postgres-Explain-Pläne.
* [pg_flame](https://github.com/mgartner/pg_flame) - Flammendiagramm-Generator für Abfragepläne.
* [PgHero](https://github.com/ankane/pghero) - PostgreSQL-Einblicke leicht gemacht.
* [pgMustard](https://www.pgmustard.com/) - Moderne Benutzeroberfläche
für `EXPLAIN`, die außerdem Leistungstipps bereitstellt (kommerzielle Software).
* [pgtune](https://github.com/gregs1104/pgtune/) - Konfigurationsassistent für PostgreSQL.
* [pgtune](https://github.com/le0pard/pgtune) - Online-Version des Konfigurationsassistenten für PostgreSQL.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - Online-Konfigurationswerkzeug für PostgreSQL (ebenfalls auf pgtune basierend).
* [PoWA](https://powa.readthedocs.io/en/latest/) - Der PostgreSQL Workload Analyzer erfasst Leistungsstatistiken und stellt Echtzeitdiagramme bereit, mit denen du deine PostgreSQL-Server überwachen und optimieren kannst.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - Weboberfläche zur Anzeige von pg_stat_statements.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - Programm zur Optimierung einer TimescaleDB-Datenbank anhand der Hostressourcen wie Arbeitsspeicher und Anzahl der CPUs.
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis bietet Beobachtbarkeit und Leistungsoptimierung für SQL-Datenbanken, darunter PostgreSQL (kommerzielle Software).
* [aqo](https://github.com/postgrespro/aqo) - Adaptive Abfrageoptimierung für PostgreSQL.
* [pgassistant](https://github.com/beh74/pgassistant-community) - PostgreSQL-Werkzeug für Entwickler, das mithilfe von LLM und pgTune-Integration das Verständnis und die Optimierung der Datenbank unterstützt.

### Dienstprogramme
* [apgdiff](https://www.apgdiff.com/) - Vergleicht zwei Datenbank-Dump-Dateien und erzeugt DDL-Anweisungen, mit denen ein altes Datenbankschema an ein neues angepasst werden kann.
* [bemi](https://github.com/BemiHQ/bemi) - Automatische Nachverfolgung von Datenänderungen für PostgreSQL.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy erzeugt Entity-Relationship-Diagramme (ER) aus Datenbanken.
* [flyway](https://flywaydb.org/) - Schema-Migrationswerkzeug für Postgres und andere Systeme.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - Cloudnative Datenbank-Gateway und Framework zur Entwicklung datengesteuerter Anwendungen. Wie API-Gateways, nur für Datenbanken.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - Werkzeug zur Anonymisierung von Datenbanken und Erzeugung synthetischer Daten für MySQL und PostgreSQL.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Blitzschnelle, sofort verfügbare GraphQL-APIs mit Echtzeitfunktion auf Postgres, mit fein abgestufter Zugriffskontrolle; kann außerdem Webhooks bei Datenbankereignissen auslösen.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - Synchronisiert Rollen und Berechtigungen aus YML und LDAP.
* [migra](https://github.com/djrobstep/migra) - Wie diff, aber für Postgres-Schemas.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Lanyrds Konvertierungsskript von MySQL zu PostgreSQL.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - Die Bibliothek NServiceBus.Transport.PostgreSql ermöglicht .NET-Entwicklern, [eine PostgreSQL-Datenbank als Nachrichtenbroker zu verwenden](https://docs.particular.net/transports/postgresql) (kommerzielle Software).
* [ora2pg](http://ora2pg.darold.net) - Perl-Modul zum Exportieren eines Oracle-Datenbankschemas in ein PostgreSQL-kompatibles Schema.
* [pg\_activity](https://github.com/dalibo/pg_activity) - Anwendung ähnlich wie top zur Überwachung der Aktivitäten auf einem PostgreSQL-Server.
* [pg-formatter](https://github.com/gajus/pg-formatter) - Ein Formatierer für PostgreSQL-SQL-Syntax (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - Sicherheitsorientierte Node.js-Migrations-Engine mit Advisory Locks, SHA-256-Erkennung von Abweichungen und 10 integrierten Lint-Regeln für PostgreSQL.
* [pganalyze](https://pganalyze.com) - Überwachung der PostgreSQL-Leistung (kommerzielle Software).
* [pgbadger](https://github.com/darold/pgbadger) - Schneller PostgreSQL-Protokollanalysator.
* [PgBouncer](http://www.pgbouncer.org/) - Leichter Verbindungspooler für PostgreSQL.
* [pgCenter](https://github.com/lesovsky/pgcenter) - Bietet eine praktische Oberfläche für verschiedene Statistiken und Verwaltungsaufgaben, das Neuladen von Diensten, die Anzeige von Protokolldateien sowie das Abbrechen oder Beenden von Datenbank-Backends.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Echtzeitreplikat von MySQL nach PostgreSQL mit optionaler Überschreibung von Typen während der Migration und Migrationsfunktionen.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - Exportiert Daten aus PostgreSQL in verschiedene Datenformate.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - Browsererweiterung, die Links zur PostgreSQL-Dokumentation auf die aktuelle Version umleitet.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - Importiert CSV- und JSON-Daten ganz einfach in PostgreSQL.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - Einfach bereitzustellende, quelloffene PostgreSQL-Funktion mit priorisierter Maßnahmenliste zur Verbesserung von Datenbankstabilität und -leistung. Direkt von Brent Ozars FirstResponderKit für SQL Server inspiriert.
* [PGInsight](http://pginsight.io/) - CLI-Werkzeug, mit dem du tief in deine PostgreSQL-Datenbank eintauchen kannst.
* [pg_insights](https://github.com/lob/pg_insights) - Praktische SQL-Abfragen zur Überwachung des Zustands einer Postgres-Datenbank.
* [pgloader](https://github.com/dimitri/pgloader) - Lädt Daten mithilfe des COPY-Streamingprotokolls in PostgreSQL und verwendet getrennte Threads zum Lesen und Schreiben.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Erfassung und Visualisierung von Postgres-Kennzahlen, bereitstellbar auf Bare Metal, virtuellen Maschinen oder Kubernetes.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - Middleware für Verbindungspooling, Replikation, Lastausgleich und Begrenzung überzähliger Verbindungen.
* [pgspot](https://github.com/timescale/pgspot) - Erkennt Schwachstellen in Skripten von PostgreSQL-Erweiterungen.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - Daemon zum Ausführen zustandsbehafteter Postgres-Instanzen auf günstigen AWS-Spot-VMs.
* [pgsync](https://github.com/ankane/pgsync) - Werkzeug zur Synchronisierung von PostgreSQL-Daten mit deinem lokalen Rechner.
* [PGXN client](https://github.com/pgxn/pgxnclient) - Kommandozeilenwerkzeug zur Nutzung des PostgreSQL Extension Network.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - Werkzeug zum Extrahieren und Bereitstellen von Kennzahlen deiner PostgreSQL-Datenbank.
* [PostgREST](https://github.com/PostgREST/postgrest) - Stellt eine vollständig REST-konforme API für jede vorhandene PostgreSQL-Datenbank bereit.
* [pREST](https://github.com/prest/prest) - Stellt eine REST-konforme API für jede PostgreSQL-Datenbank bereit (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - Sofort verfügbare GraphQL-API oder GraphQL-Schema für deine PostgreSQL-Datenbank.
* [yoke](https://github.com/nanopack/yoke) - Hochverfügbarer PostgreSQL-Cluster mit automatischem Failover und automatisierter Cluster-Wiederherstellung.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Leichter PostgresSQL-`LISTEN`-/`NOTIFY`-Daemon auf Basis von `node-postgres`.
* [ZSON](https://github.com/postgrespro/zson) - PostgreSQL-Erweiterung zur transparenten JSONB-Komprimierung.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - Ein Hochgeschwindigkeitswerkzeug zum Laden von Daten für PostgreSQL.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - Verwaltet PostgreSQL-Codebasen und vereinfacht die Versionsverwaltung.
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Erweiterter Auftragsplaner für PostgreSQL.
* [sqitch](https://github.com/sqitchers/sqitch) - Werkzeug zur Verwaltung versionierter Schema-Bereitstellungen.
* [pgmigrate](https://github.com/yandex/pgmigrate) - CLI-Werkzeug zur Weiterentwicklung von Schema-Migrationen, entwickelt von Yandex.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - Werkzeug zum Vergleichen von Datenbankschemas, das dauerhafte Unterschiede zulässt.
* [pg-differ](https://github.com/multum/pg-differ) - Werkzeug zur einfachen Initialisierung und Aktualisierung der Struktur von PostgreSQL-Tabellen, eine Migrationsalternative (Node.js).
* [Qail](https://github.com/qail-io/qail) - Rust-orientierte Pipeline mit typisiertem AST für PostgreSQL, Abfrageprüfungen zur Kompilierzeit und integrierter Mandantenbereichszuordnung.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - Erkennt automatisch gängige SQL-Anti-Patterns. Solche Muster verlangsamen Abfragen häufig; ihre Behebung kann daher Abfragen beschleunigen.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Diagnosewerkzeug der nächsten Generation, mit dem sich eine tiefgehende Zustandsanalyse einer Postgres-Datenbank erfassen lässt.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Versionsverwaltung für Postgres-Datenbankschemas.
* [ScaffoldHub.io](https://scaffoldhub.io) - Erzeugt Full-Stack-PostgreSQL-Anwendungen mit Angular, Vue oder React (kommerzielle Software).
* [planter](https://github.com/achiku/planter) - Erzeugt textuelle PlantUML-ER-Diagrammbeschreibungen aus PostgreSQL-Tabellen.
* [pgroll](https://github.com/xataio/pgroll) - Unterbrechungsfreie und umkehrbare Schemenmigrationen für Postgres.
* [RegreSQL](https://github.com/dimitri/regresql) - Werkzeug zum Erstellen, Pflegen und Ausführen einer Regressionstestsuite für SQL-Abfragen.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter für gefährliche Postgres-Migrationsmuster in Diesel und SQLx.

### Sprachanbindungen
* Common Lisp: [Postmodern](https://github.com/marijnh/Postmodern)
* Clojure: [clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir: [postgrex](https://github.com/elixir-ecto/postgrex)
* Go: [pq](https://github.com/lib/pq), [pgx](https://github.com/jackc/pgx), [go-pg](https://github.com/go-pg/pg)
* Haskell: [postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java: [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/), [Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua: [luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core: [Npgsql](https://github.com/npgsql/npgsql)
* Node: [node-postgres](https://github.com/brianc/node-postgres), [pg-promise](https://github.com/vitaly-t/pg-promise), [pogi](https://github.com/holdfenytolvaj/pogi), [slonik](https://github.com/gajus/slonik), [postgres](https://github.com/porsager/postgres)
* Perl: [DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP: [Pomm](http://www.pomm-project.org), [pecl/pq](https://github.com/m6w6/ext-pq)
* Python: [psycopg2](https://pypi.org/project/psycopg2/), [asyncpg](https://pypi.org/project/asyncpg/), [pg8000](https://pypi.org/project/pg8000/)
* R: [RPostgres](https://github.com/r-dbi/RPostgres), [RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby: [pg](https://github.com/ged/ruby-pg)
* Rust: [rust-postgresql](https://github.com/sfackler/rust-postgres), [pgx](https://github.com/tcdi/pgx), [wtx](https://github.com/c410-f3r/wtx)
* TypeScript: [zapatos](https://github.com/jawj/zapatos)
* Zig: [pg.zig](https://github.com/karlseguin/pg.zig), [qail-zig](https://github.com/qail-io/qail-zig)

### PaaS *(PostgreSQL als Dienst)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - PostgreSQL als Dienst auf AWS, Azure, DigitalOcean, Google Cloud und UpCloud; Tarife reichen von Einzelknoten-Instanzen für 19 $ pro Monat bis zu großen hochverfügbaren Setups; zweiwöchiger kostenloser Testzeitraum.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (RDS) für PostgreSQL.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL bietet eine vollständig verwaltete, unternehmenstaugliche PostgreSQL-Datenbank als Dienst. Sie bietet integrierte Hochverfügbarkeit, elastische Skalierung und native Integration in das Azure-Ökosystem.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Vollständig verwaltetes Postgres von Postgres-Experten. Bei allen großen Cloud-Anbietern verfügbar: Amazon AWS, Google GCP und Microsoft Azure. Keine Anbieterbindung und vollständige Superuser-Unterstützung.
* [Database Labs](https://www.databaselabs.io) - Erhalte innerhalb weniger Minuten einen produktionsbereiten PostgreSQL-Cloudserver ab 20 $ pro Monat. Sicherungen, Überwachung, Patches und technischer Support rund um die Uhr sind enthalten.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - Vollständig verwaltete PostgreSQL-Datenbanken. Kein kostenloser Tarif. Ab 15 $ pro Monat. Tägliche Sicherungen mit Wiederherstellung zu einem bestimmten Zeitpunkt. Standby-Knoten mit automatischem Failover.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Vollständig verwalteter Datenbankdienst, der Einrichtung, Wartung, Verwaltung und Administration relationaler PostgreSQL-Datenbanken auf der Google Cloud Platform erleichtert.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - Tarife von kostenlos bis sehr groß, betrieben von PostgreSQL-Experten. Deine Anwendung muss nicht auf Heroku laufen. Der kostenlose Tarif umfasst 10.000 Zeilen, 20 Verbindungen, bis zu zwei Sicherungen und unterstützt PostGIS.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - Hochverfügbares, skalierbares und geschütztes PostgreSQL. Tägliche Sicherungen mit Wiederherstellung zu einem bestimmten Zeitpunkt, keine Anbieterbindung, kostenloser ein- und ausgehender Datenverkehr.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - Sicheres, zuverlässiges und vollständig wartungsfreies, verwaltetes PostgreSQL. Verschlüsselung im Ruhezustand, automatisierte Sicherungen und erweiterbarer SSD-Speicher sind in allen Tarifen enthalten. Tarife beginnen bei 7 $ pro Monat für 256 MB RAM und 1 GB Speicher (die ersten 90 Tage kostenlos).
* [Rivestack](https://rivestack.io) - Verwaltetes PostgreSQL mit vorinstalliertem pgvector und für Vektorsuche optimiertem HNSW. Kostenloser Tarif (2 GB, keine Kreditkarte), dedizierte Instanzen zum Festpreis ab 15 $ pro Monat, EU- und US-Regionen.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - Vollständig verwaltetes PostgreSQL-Hosting mit hoher Verfügbarkeit, dedizierten Servern und Superuser-Kontrolle – die führende Multi-Cloud-Alternative zu Amazon RDS.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - Vollständig verwaltete PostgreSQL-Datenbanken mit Hochverfügbarkeit, Skalierung und automatisierten Sicherungen, gehostet in der EU. Ab 10 € pro Monat.
* [Supabase](https://www.supabase.com) - Vollständig verwaltetes Postgres mit Lesereplikaten, Wiederherstellung zu einem bestimmten Zeitpunkt, Supportpaketen, browserbasierter GUI und großzügigem kostenlosen Tarif.
* [Neon](https://neon.tech) - Vollständig verwaltetes serverloses PostgreSQL. Neon trennt Speicher und Rechenleistung und bietet moderne Entwicklerfunktionen wie Serverlosigkeit, Branching, praktisch unbegrenzten Speicher und mehr.
* [Nile](https://www.thenile.dev/) - Vollständig verwaltetes PostgreSQL. Nile entkoppelt Speicher und Rechenleistung und virtualisiert Mandanten, damit sich mandantenfähige KI-Anwendungen schnell, sicher und unbegrenzt skalierbar bereitstellen lassen. Der kostenlose Tarif bietet unbegrenzt viele Datenbanken.
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale für Postgres bietet vollständig verwaltete, hochverfügbare PostgreSQL-Datenbankcluster auf moderner Cloud-Infrastruktur.
* [Vela](https://vela.run) - Postgres-basiertes Backend-as-a-Service für moderne KI-Anwendungen. Bietet sofortige Datenbank-Branches und -Kopien, produktionsnahe Testumgebungen und serverlose Skalierung.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - Vollständig verwaltete PostgreSQL-Datenbank mit mehreren Verfügbarkeitszonen und automatisierten Sicherungen, gehostet in den Niederlanden.

### Docker-Images
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Offizielle Citus-Images mit Citus-Erweiterungen. Basieren auf dem offiziellen Postgres-Container.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 auf Postgres 9. Basiert auf dem offiziellen Postgres-Container.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB ist Postgres für Suche und Analysen. Basiert auf dem offiziellen Postgres-Container mit der pg_search-Erweiterung.
* [pglayers](https://github.com/pglayers/pglayers) - Vorgefertigte PostgreSQL-Erweiterungen als kombinierbare Docker-Layer. Über 50 Erweiterungen, sofort einsatzbereite kombinierte Images (vollständig, Azure-kompatibel).
* [postgres](https://hub.docker.com/_/postgres/) - Offizieller Postgres-Container (von Docker).

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - PostgreSQL für den Produktionseinsatz auf Kubernetes – von hochverfügbaren Postgres-Clustern bis hin zu vollständig als Dienst bereitgestellten Datenbanken.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - PostgreSQL auf Unternehmensniveau auf der OpenShift Container Platform (kommerzielle Software).
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegres ist ein Kubernetes-Operator, mit dem sich ein oder mehrere PostgreSql-Instanzcluster bereitstellen und Datenbankreplikation, Failover und Sicherungen verwalten lassen.
* [StackGres Operator](https://github.com/ongres/stackgres/) - Vollständiger PostgreSQL-Stack auf Kubernetes.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Erstellt und verwaltet PostgreSQL-Cluster in Kubernetes.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Umfassende Plattform zur nahtlosen Verwaltung von PostgreSQL-Datenbanken in Kubernetes-Umgebungen.
* [KubeDB operator](https://kubedb.com/) - Datenbanken in Produktionsqualität auf Kubernetes ausführen (kommerzielle Software).
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Percona-Operator für PostgreSQL auf Basis des Crunchy-Data-Operators.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest Operator ist ein Kubernetes-Operator zur Verwaltung des Lebenszyklus von MySQL-, MongoDB- und PostgreSQL-Datenbanken. Er nutzt im Hintergrund die Kubernetes-Operatoren von Percona für MySQL, MongoDB und PostgreSQL, bietet aber eine einheitliche API und eine zentrale Oberfläche zur Verwaltung aller drei Datenbanktypen.

## Ressourcen

### Anleitungen
* [Backup and recover a PostgreSQL DB using wal-e]](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - Tutorial zur Einrichtung kontinuierlicher Archivierung in PostgreSQL mit wal-e.
* [Spickzettel zu Betriebsaufgaben](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - Spickzettel zu Betriebsaufgaben aus dem PostgreSQL-Wiki.
* [PG Casts](https://www.pgcasts.com) - Kostenlose wöchentliche PostgreSQL-Screencasts von Hashrocket.
* [Postgres Guide](http://postgresguide.com/) - Leitfaden als Hilfe für Einsteiger und erfahrene Nutzer, um gezielt Tipps zu finden und die in PostgreSQL verfügbaren Werkzeuge zu erkunden.
* [PostgreSQL Access Control]](https://andersnasell.gumroad.com/l/postgresql-access-control) - Das vollständige Denkmodell: Rollen, Grants, Eigentümerschaft, Mitgliedschaften, Richtlinien und Standardberechtigungen als zusammenhängendes System. PDF und Video, etwa 60 Minuten.
* [PostgreSQL Exercises]](https://pgexercises.com/) - Website, die das Erlernen von PostgreSQL durch praktische Übungen erleichtert.
* [tutorialspoint PostgreSQL-Tutorial](http://www.tutorialspoint.com/postgresql/) - Sehr umfangreiche Sammlung von Tutorials zu PostgreSQL.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Sammlung von PostgreSQL-Beispielschemas.
* [PostgreSQL Primer for Busy People]](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - Sammlung der am häufigsten verwendeten PostgreSQL-Befehle.
* [pg-utils](https://github.com/dataegret/pg-utils) - Nützliche DBA-Werkzeuge von Data Egret.
* [pagila](https://github.com/xzilla/pagila) - Pagila, eine PostgreSQL-Beispieldatenbank.
* [SQL Syntax Cheat Sheet]](https://github.com/mergisi/sql-syntax-cheat-sheet) - Umfassende Referenz zur SQL-Syntax mit Fensterfunktionen, CTEs und PostgreSQL-spezifischer Syntax (UPSERT, JSON-Abfragen und Array-Operationen).

### Blogs
* [Planet PostgreSQL](https://planet.postgresql.org/) - Blog-Aggregationsdienst für PostgreSQL.
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - Sammlung von Beiträgen zu spannenden PostgreSQL-Funktionen, Tipps und Tricks.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Blog von Josh Berkus.
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Blog von Hubert Lubaczewski.
* [Metis Blog](https://www.metisdata.io/blog) - Sammlung von Beiträgen zu PostgreSQL, SQL-Datenbanken, Leistung und Optimierung.
* [Digoal's PostgreSQL- und Technikblog (chinesisch)]](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - Blog des PIGSTY-Autors mit aufschlussreichen Artikeln über PostgreSQL sowie Datenbanken und Cloud-Infrastruktur.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - Blog des BigData-Boutique-Teams, überwiegend mit Schwerpunkt auf Analysen.

### Bücher
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Kostenloses E-Book von Hironobu Suzuki.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Kostenloses E-Book von Egor Rogov.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Praktischer Leitfaden zur Skalierung von Postgres im Produktivbetrieb mit Themen wie Optimierung, Verbindungspooling, Partitionierung und Hochverfügbarkeit.


### Dokumentation
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - Dokumentation, Anleitungen und Tipps und Tricks für Nutzer.
* [pgPedia](https://pgpedia.info/) - Enzyklopädie zu Themen rund um PostgreSQL.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - Projekt zur Erstellung von Dokumentation für alle Symbole in der PostgreSQL-Codebasis mithilfe von KI-Agenten.

### Newsletter

* [Postgres Weekly](https://postgresweekly.com/) - Wöchentlicher Newsletter mit Artikeln, Neuigkeiten und Repositories rund um PostgreSQL.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Monatlicher Newsletter mit Artikeln und Videos zur Postgres-Leistung.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - Wöchentliche Zusammenfassung der pgsql-hackers-Mailingliste mit einer Übersicht aktiver Diskussionen, Zusammenfassungen der Threads und mehr.

### Podcasts
* [PostgresFM](https://postgres.fm/) - Wöchentliche Diskussionen über Postgres-Themen.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Wöchentliche Zusammenfassungen von Inhalten rund um PostgreSQL.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Monatliche Interviews mit Persönlichkeiten aus der Postgres-Welt.

### Videos
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Videos zu Citus.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - Videos zu EnterpriseDB.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - Konferenzvideos.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Postgres-Videoblog-Reihe von Creston Jamison.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Postgres-Vorträge, Hacking-Sessions, Interviews und Podcast-Folgen.

### Gemeinschaft
* [Mailinglisten]](https://www.postgresql.org/list/) - Offizielle Postgres-Mailinglisten für Support, Öffentlichkeitsarbeit und mehr. Einer der wichtigsten Kommunikationskanäle der Postgres-Community.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - Eine Reddit-Community für PostgreSQL-Nutzer mit über 12.000 Mitgliedern.
* [Slack](https://pgtreats.info/slack-invite) - Slack-Arbeitsbereich für Postgres mit über 20.000 Mitgliedern.
* Mehrere PostgreSQL-Gruppen in verschiedenen Sprachen: [Russisch](https://t.me/pgsql) über 4.200 Personen, [brasilianisches Portugiesisch](https://t.me/postgresqlbr) über 2.300 Personen, [Indonesisch](https://t.me/postgresql_id) etwa 1.000 Personen, [Englisch](https://t.me/postgreschat) über 750 Personen.
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Der beliebteste IRC-Kanal zu Postgres auf Freenode mit über 1.000 Nutzern.
* [Discord](https://discord.gg/bW2hsax8We) - Ein Discord-Server für Postgres mit über 6.000 Mitgliedern.

### Entwicklungspläne
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - Eine schrittweise Anleitung zu PostgreSQL.

### Externe Listen
* [Wikipedia-Liste der Administrationstools]](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Vergleich von Datenbankverwaltungswerkzeugen auf Wikipedia.
* [GUI-Werkzeugliste des PostgreSQL-Wikis]](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - Community-Leitfaden zu grafischen PostgreSQL-Werkzeugen.
* [Liste der Foreign-Data-Wrapper im PostgreSQL-Wiki]](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Foreign-Data-Wrapper.
