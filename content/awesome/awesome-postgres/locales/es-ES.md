# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> Una lista seleccionada de software, bibliotecas, herramientas y recursos de [PostgreSQL](https://www.postgresql.org/), inspirada en [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), a menudo llamado simplemente Postgres, es una [base de datos objeto-relacional](https://en.wikipedia.org/wiki/Object-relational_database) (ORDBMS). PostgreSQL cumple con [ACID](https://en.wikipedia.org/wiki/ACID) y es [transaccional](https://en.wikipedia.org/wiki/Transaction_processing). (Más información: [wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: Se agradecen las contribuciones. Añade enlaces mediante [solicitudes de incorporación](https://github.com/dhamaniasad/awesome-postgres/pulls) o crea una [incidencia](https://github.com/dhamaniasad/awesome-postgres/issues) para iniciar un debate. Consulta las [pautas de contribución](CONTRIBUTING.md).

## Contenido

- [Awesome Postgres](#awesome-postgres-)
    - [Alta disponibilidad](#high-availability)
    - [Copias de seguridad](#backups)
    - [Interfaz gráfica](#gui)
    - [Distribuciones](#distributions)
    - [CLI](#cli)
    - [Servidor](#server)
    - [Monitorización](#monitoring)
    - [Extensiones](#extensions)
    - [Plataformas](#platforms)
    - [Colas de trabajo](#work-queues)
    - [Optimización](#optimization)
    - [Utilidades](#utilities)
    - [Enlaces de lenguaje](#language-bindings)
    - [PaaS (PostgreSQL como servicio)](#paas-postgresql-as-a-service)
    - [Imágenes de Docker](#docker-images)
    - [Kubernetes](#kubernetes)
- [Recursos](#resources)
    - [Tutoriales](#tutorials)
    - [Blogs](#blogs)
    - [Documentación](#documentation)
    - [Boletines](#newsletters)
    - [Vídeos](#videos)
    - [Comunidad](#community)
    - [Hojas de ruta](#roadmaps)
    - [Listas externas](#external-lists)

### Alta disponibilidad
* [autobase](https://github.com/vitabaks/autobase) - DBaaS de código abierto para PostgreSQL® que automatiza el despliegue y la gestión de clústeres de PostgreSQL de alta disponibilidad.
* [BDR](https://github.com/2ndQuadrant/bdr) - Replicación bidireccional: sistema de replicación multimaestro para PostgreSQL.
* [Patroni](https://github.com/zalando/patroni) - Plantilla para alta disponibilidad de PostgreSQL con ZooKeeper o etcd.
* [Spock](https://github.com/pgEdge/spock) - Replicación lógica PostgreSQL multimaestro, 100 % de código abierto.
* [Stolon](https://github.com/sorintlab/stolon) - Alta disponibilidad de PostgreSQL basada en Consul o etcd, con integración con Kubernetes.
* [pglookout](https://github.com/aiven/pglookout) - Demonio de monitorización de la replicación y conmutación por error.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - Conjunto de herramientas de código abierto para gestionar la replicación y la conmutación por error en un clúster de servidores PostgreSQL.
* [Slony-I](https://slony.info/) - Sistema de replicación «de un maestro a varios esclavos» con replicación en cascada y conmutación por error.
* [PAF](https://github.com/ClusterLabs/PAF) - Conmutación por error automática de PostgreSQL: alta disponibilidad para Postgres basada en Pacemaker y Corosync.
* [SkyTools](https://github.com/pgq/skytools-legacy) - Herramientas de replicación, incluidas PgQ, un sistema de colas, y Londiste, un sistema de replicación algo más fácil de gestionar que Slony.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extensión y servicio de Postgres para conmutación por error automatizada y alta disponibilidad.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - Transmite registros de escritura anticipada (WAL) desde un servidor PostgreSQL en tiempo real. Alternativa directa y compatible con contenedores a pg_receivewal.
* [pg-status](https://github.com/krylosov-aa/pg-status) - Microservicio que proporciona endpoints HTTP para obtener al instante el host maestro actual o una réplica que cumpla distintos criterios.

### Copias de seguridad
* [Barman](https://www.pgbarman.org/index.html) - Gestor de copias de seguridad y recuperación para PostgreSQL de 2ndQuadrant.
* [Databasus](https://databasus.com) - Herramienta para programar copias de seguridad de PostgreSQL mediante una interfaz web, con almacenamiento externo (local, S3, FTP, Google Drive, etc.), notificaciones (webhook, Discord, Slack, etc.) y gestión de equipos.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - Herramientas avanzadas de gestión de archivos WAL para PostgreSQL.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – Fork de pg_arman mejorado por @PostgresPro; admite copias incrementales, copias desde réplicas, copias de seguridad y restauración multihilo, y copias anónimas sin comando de archivado.
* [pgBackRest](https://pgbackrest.org/)  - Copia de seguridad y restauración fiables de PostgreSQL.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Herramienta completa de copia de seguridad y mantenimiento de Postgres basada en Docker, con interfaz web.
* [pg\_back](https://github.com/orgrim/pg_back/) - pg_back es un script sencillo para copias de seguridad.
* [pghoard](https://github.com/aiven/pghoard) - Herramienta para realizar copias de seguridad y restauraciones en almacenes de objetos en la nube (AWS S3, Azure, Google Cloud, OpenStack Swift).
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Práctico contenedor Docker para realizar periódicamente copias de seguridad de PostgreSQL en Alibaba Cloud Object Storage Service (OSS).
* [wal-e](https://github.com/wal-e/wal-e) (obsolete) - Archivado continuo sencillo de PostgreSQL en S3, Azure o Swift, de Heroku.
* [wal-g](https://github.com/wal-g/wal-g) - Sucesor de WAL-E, reescrito en Go. Actualmente admite almacenamiento de objetos en la nube de AWS (S3), Google Cloud (GCS), Azure, OpenStack Swift, MinIO y sistemas de archivos. Admite copias incrementales a nivel de bloque, descarga de tareas de copia a un servidor en espera y opciones de paralelización y limitación de velocidad. Además de Postgres, WAL-G puede usarse con bases de datos MySQL y MongoDB.
* [pitrery](https://dalibo.github.io/pitrery/) - pitrery es un conjunto de scripts Bash para gestionar copias de seguridad de recuperación a un punto en el tiempo (PITR) de PostgreSQL.
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` es un contenedor sidecar ligero de Docker, diseñado para automatizar las copias de seguridad periódicas de una base de datos PostgreSQL mediante `pg_dump`, `cron` y scripts Bash, además de enviar la salida a un webhook.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - Solución centrada en Docker y basada en pg_dump, que admite configuración mediante variables de entorno para programar copias de seguridad de PostgreSQL con compresión opcional, cifrado GPG, webhooks y carga automática a Amazon S3.

### Interfaz gráfica
* [1bench](https://1bench.dev/postgresql) - Interfaz gráfica nativa y multiplataforma con compatibilidad destacada con Postgres, Redis, Elasticsearch, ClickHouse, Qdrant y otros (software comercial).
* [Adminer](https://www.adminer.org/) - Herramienta completa de gestión de bases de datos escrita en PHP.
* [AI for Database](https://aifordatabase.com) - Chatea con tu base de datos PostgreSQL en lenguaje natural. No hace falta SQL: obtén información al instante, crea paneles que se actualizan solos y activa flujos de trabajo automatizados según los cambios en la base de datos (software comercial).
* [Beekeeper Studio](https://www.beekeeperstudio.io) - Cliente SQL gratuito y de código abierto, con una interfaz moderna y excelente compatibilidad con Postgres. Multiplataforma.
* [Bytebase](https://www.bytebase.com) - Solución DevSecOps para bases de datos dirigida a equipos de desarrollo, seguridad, DBA e ingeniería de plataformas.
* [Chartbrew](https://chartbrew.com) - Crea paneles, gráficos e informes de cliente dinámicos a partir de datos de PostgreSQL. Incluye una herramienta de consultas SQL.
* [Count](https://count.co/) - Plataforma de análisis web con interfaz de cuaderno que se conecta a PostgreSQL (software comercial).
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE con herramientas avanzadas y una excelente experiencia multiplataforma (software comercial).
* [Dekart](https://github.com/dekart-xyz/dekart) - Plataforma de código abierto para convertir consultas de PostGIS en mapas interactivos que se pueden compartir.
* [Datazenit](https://datazenit.com/) - Interfaz gráfica web para PostgreSQL (software comercial).
* [DataRow](https://www.datarow.com/) - Cliente SQL multiplataforma para Amazon Redshift: sencillo, fácil de usar y extensible.
* [DBConvert Streams](https://streams.dbconvert.com/) - IDE de bases de datos con migración, SQL federado y replicación CDC para PostgreSQL, MySQL, archivos y almacenamiento compatible con S3 (software comercial).
* [DBeaver](https://dbeaver.io/) - Gestor universal de bases de datos con excelente compatibilidad con PostgreSQL.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - Solución multidatabase todo en uno compatible con PostgreSQL, MySQL, MariaDB, SQL Server, Oracle y una amplia gama de servicios en la nube relacionados (software comercial).
* [DbVisualizer](http://www.dbvis.com) - Cliente de bases de datos multiplataforma para desarrolladores, DBA y analistas (software comercial).
* [Holistics](https://www.holistics.io/) - Herramienta en línea y multiplataforma de gestión de bases de datos e interfaz gráfica para informes de consultas SQL, con sólida compatibilidad con PostgreSQL (software comercial).
* [JackDB](https://www.jackdb.com/) - Interfaz web para consultas SQL (software comercial).
* [Luna Modeler](http://www.datensen.com) - Herramienta de modelado de datos de escritorio y multiplataforma (software comercial).
* [Mathesar](https://mathesar.org/) - Aplicación web que ofrece una experiencia de uso intuitiva para trabajar con bases de datos.
* [Metabase](https://www.metabase.com/) - Paneles, gráficos y herramienta de consultas sencillos para PostgreSQL.
* [Numeracy](https://numeracy.co/) - Editor SQL rápido con gráficos y paneles para PostgreSQL (software comercial).
* [OrcaQ](https://github.com/cin12211/orca-q) - Editor de bases de datos moderno y de código abierto para PostgreSQL, MySQL, Redis y otros. Incluye asistente de IA, visualizador ERD, comparación de esquemas y gestión visual de roles.
* [pgAdmin](https://www.pgadmin.org/) - Interfaz gráfica de administración y gestión de PostgreSQL.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - Chatea con Postgres en lenguaje natural (software comercial).
* [PgManage](https://github.com/commandprompt/pgmanage) - Cliente y herramienta de administración de bases de datos moderna, multiplataforma y centrada en Postgres.
* [pgModeler](https://pgmodeler.io/) - pgModeler es un modelador de bases de datos PostgreSQL de código abierto.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - Extensión de código abierto para VS Code / Open VSX que permite gestionar PostgreSQL con cuadernos SQL, asistente de IA, fragmentos de código fáciles de usar y un DBMS completo con panel de monitorización en tiempo real.
* [pgweb](https://github.com/sosedoff/pgweb) - Explorador web de bases de datos PostgreSQL escrito en Go.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - La principal herramienta web de administración para PostgreSQL.
* [Postbird](https://github.com/Paxa/postbird) - Cliente PostgreSQL para macOS.
* [PostgresCompare](https://www.postgrescompare.com) - Herramienta multiplataforma de comparación y despliegue de bases de datos (software comercial).
* [Postico](https://eggerapps.at/postico/) - Cliente PostgreSQL moderno para macOS (software comercial).
* [QueryGlow](https://queryglow.com/) - Interfaz gráfica de bases de datos autohospedada y web, con generación de SQL mediante IA, visualizador EXPLAIN y autocompletado que tiene en cuenta el esquema (software comercial).
* [PSequel](http://www.psequel.com/) - Interfaz sencilla y clara para realizar rápidamente tareas habituales de PostgreSQL (software comercial).
* [Redash](https://github.com/getredash/redash) - Conéctate a cualquier fuente de datos y visualiza y comparte tus datos fácilmente.
* [SQL Tabs](http://www.sqltabs.com/) - Cliente de escritorio multiplataforma para PostgreSQL, escrito en JS.
* [SQLPro for Postgres](http://macpostgresclient.com/) - Gestor PostgreSQL sencillo y potente para macOS (software comercial).
* [temBoard](https://github.com/dalibo/temboard) - Interfaz gráfica web y monitorización de PostgreSQL.
* [Teable](https://github.com/teableio/teable) - Base de datos sin código, muy rápida, en tiempo real, profesional y fácil de usar para desarrolladores.
* [TablePlus](https://tableplus.com/) - Aplicación nativa que permite editar bases de datos y su estructura, con seguridad de alto nivel (software comercial).
* [TablePro](https://tablepro.app/) - Cliente PostgreSQL nativo para macOS con visualización de EXPLAIN, diagramas ER y asistente de IA. Gratuito y de código abierto.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Herramienta multiplataforma de administración de bases de datos (gratuita/comercial).
* [DbGate](https://dbgate.org) - El cliente (no)SQL de bases de datos más inteligente.
* [WebDB](https://webdb.app) – IDE de bases de datos eficiente.

### Distribuciones
* [Postgres.app](https://postgresapp.com/) - La forma más sencilla de empezar a usar PostgreSQL en macOS.
* [Pigsty](https://github.com/Vonng/pigsty) - Distribución de código abierto para PostgreSQL con todo incluido: observabilidad avanzada y un conjunto de herramientas de Database-as-Code para desarrolladores.

### CLI
* [atlas](https://github.com/ariga/atlas) - Atlas es una herramienta para gestionar y migrar esquemas de bases de datos mediante principios modernos de DevOps.
* [pgcli](https://github.com/dbcli/pgcli) - CLI de Postgres con autocompletado y resaltado de sintaxis.
* [pgfence](https://pgfence.com) - Analiza migraciones SQL de Postgres para detectar modos de bloqueo y DDL de riesgo, con reescrituras seguras de expansión/contracción. Incluye CLI y LSP, y extractores para Prisma, TypeORM y Knex.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - CLI de Postgres con autocompletado y resaltado de sintaxis, escrita en Go.
* [pgplan](https://github.com/JacobArthurs/pgplan) - Compara y analiza planes EXPLAIN de PostgreSQL desde la CLI.
* [pgschema](https://www.pgschema.com) - Migraciones declarativas de esquemas para Postgres al estilo de Terraform.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI (y biblioteca de Golang) para comparar esquemas Postgres y generar migraciones SQL con un bloqueo mínimo.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - CLI de seguridad para migraciones PostgreSQL que detecta DDL peligroso antes de producción: 80 reglas, clasificación de bloqueos, corrección automática y GitHub Action.
* [pgsh](https://github.com/sastraxi/pgsh) - Crea ramas de tu base de datos PostgreSQL como en Git.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - Cliente CLI integrado de PostgreSQL.
* [psql2csv](https://github.com/fphilipe/psql2csv) - Ejecuta una consulta en psql y muestra el resultado como CSV.
* [sabiql](https://github.com/riii111/sabiql) - TUI rápida, sin controladores, para explorar, consultar y editar bases de datos PostgreSQL.
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpy es una herramienta compatible con JAVA JDBC que genera documentación HTML de tu base de datos, incluidos diagramas de relaciones entre entidades.
* [pdot](https://gitlab.com/dmfay/pdot) - Visualiza y explora estructuras de bases de datos en tu terminal: desde vistas detalladas del grafo de claves externas hasta cascadas de activadores, herencia de roles, permisos y mucho más.
* [squix](https://github.com/eduardofuncao/squix) - Cliente de línea de comandos SQL con gestión de consultas y resultados interactivos.

### Servidor
* [AgensGraph](https://bitnine.net/) - Potente base de datos de grafos basada en PostgreSQL.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Una bifurcación MPP de PostgreSQL y alternativa de código abierto a Greenplum Database.
* [FerretDB](https://www.ferretdb.io) - Una alternativa a MongoDB realmente de código abierto, basada en PostgreSQL.
* [Postgres-XL](https://www.postgres-xl.org/) - Clúster de bases de datos escalable basado en PostgreSQL y de código abierto.
* [YugabyteDB](https://yugabyte.com/) - SQL distribuido de código abierto que utiliza una bifurcación de PostgreSQL sobre almacenamiento y transacciones distribuidos.

### Seguridad
* [Acra](https://github.com/cossacklabs/acra) - Conjunto de seguridad para bases de datos SQL: proxy para proteger datos con cifrado transparente «sobre la marcha», cortafuegos SQL (prevención de inyecciones SQL) y sistema de detección de intrusiones.
* [pgrls](https://github.com/pgrls/pgrls) - Analizador estático de políticas de seguridad a nivel de fila; incluye 36 reglas de seguridad, rendimiento e higiene, 10 de ellas corregibles automáticamente de forma mecánica, y un comando semántico para comparar políticas y bloquear CI.

### Monitorización
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check_pgactivity está diseñado para monitorizar clústeres PostgreSQL desde Nagios. Ofrece numerosas opciones para medir y monitorizar métricas de rendimiento útiles.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Complemento Nagios check_postgres para comprobar el estado de bases de datos PostgreSQL.
* [coroot](https://github.com/coroot/coroot) - Coroot es una herramienta APM y de observabilidad de código abierto, alternativa a DataDog y NewRelic. Utiliza eBPF para obtener rápidamente información sobre el rendimiento del sistema.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - Servicio SaaS de monitorización que recopila y visualiza métricas, consultas y planes EXPLAIN, y envía alertas cuando se detectan problemas (software comercial).
* [Instrumental](https://github.com/Instrumental/instrumentald) - Monitorización del rendimiento en tiempo real, incluidos [gráficos prediseñados](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs) para facilitar la configuración (software comercial).
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Módulo completo de monitorización de PostgreSQL para Zabbix.
* [myDBA](https://mydba.dev) - Monitorización del rendimiento de PostgreSQL con más de 75 comprobaciones automáticas de estado, asesor de índices con conocimiento del clúster, análisis de consultas y monitorización de extensiones para TimescaleDB, pgvector y PostGIS (software comercial).
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management (PMM) es una plataforma gratuita y de código abierto para monitorizar y gestionar PostgreSQL, MySQL y MongoDB.
* [Pome](https://github.com/rach/pome) - Pome son las siglas de PostgreSQL Metrics. Es un panel de métricas de PostgreSQL para realizar un seguimiento del estado de tu base de datos.
* [pgmetrics](https://pgmetrics.io/) - pgmetrics es una herramienta de código abierto, sin dependencias y distribuida en un único binario; recopila gran cantidad de información y estadísticas de un servidor PostgreSQL en ejecución y las muestra en texto legible o las exporta a JSON y CSV para usarlas en scripts.
* [pg\_view](https://github.com/zalando/pg_view) - Herramienta de línea de comandos de código abierto que muestra estadísticas globales del sistema, información por partición, estadísticas de memoria y otros datos.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Monitor flexible de métricas PostgreSQL, fácil de empezar a usar y centrado en paneles de Grafana.
* [pgwd](https://github.com/hrodrig/pgwd) - Monitoriza el uso de conexiones PostgreSQL y las sesiones obsoletas, con alertas por umbral, métricas Prometheus y varios sistemas de notificación.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - Ejecuta una prueba de rendimiento en PostgreSQL.
* [opm.io](http://opm.io) - Open PostgreSQL Monitoring es un conjunto de software gratuito diseñado para ayudarte a gestionar tus servidores PostgreSQL. Recopila estadísticas, muestra paneles y envía avisos cuando algo falla.
* [okmeter.io](https://okmeter.io/pg) - Agente comercial de monitorización SaaS con un complemento PostgreSQL muy detallado. Recopila automáticamente cientos de estadísticas, muestra paneles de todos los aspectos y envía alertas cuando algo falla (software comercial).
* [dexter](https://github.com/ankane/dexter) - Indexador automático para Postgres. Detecta consultas lentas y crea índices si se configura para ello.
* [pg_ash](https://github.com/NikolayS/pg_ash) - Historial de sesiones activas para PostgreSQL. Muestrea pg_stat_activity cada segundo mediante pg_cron, almacena instantáneas codificadas y proporciona 32 funciones SQL para analizar eventos de espera. Solo SQL, sin extensiones; funciona con proveedores gestionados (RDS, Cloud SQL, Supabase, etc.).
* [pg_exporter](https://github.com/Vonng/pg_exporter) - Exportador Prometheus totalmente personalizable para PostgreSQL y Pgbouncer, con control detallado de la ejecución.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Exportador Prometheus de métricas del servidor PostgreSQL.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - Extensión de PostgreSQL de código abierto diseñada para gestionar estadísticas avanzadas de forma eficiente y organizada.
* [pgvitals](https://github.com/pgvitals/pgvitals) - Colección de 40 consultas de diagnóstico de solo lectura para detectar problemas de rendimiento habituales (consultas lentas, exceso de espacio, retrasos de vacuum, contención de bloqueos, retraso de replicación y riesgo de wraparound). Solo usa el catálogo del sistema estándar, sin extensiones; incluye una CLI opcional que las agrega en una puntuación de salud de 0 a 100.

### Extensiones
* [pgxn](https://pgxn.org/) Red de Extensiones de PostgreSQL - Punto central de distribución de muchas extensiones PostgreSQL de código abierto.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - Más de 1000 extensiones de PostgreSQL.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - Más de 400 extensiones de PostgreSQL.
* [AGE](https://github.com/apache/age) - Añade compatibilidad completa con bases de datos de grafos, incluidas las consultas Cypher.
* [OrioleDB](https://www.orioledb.com/) - Motor de almacenamiento nativo de la nube para PostgreSQL. OrioleDB es una extensión de PostgreSQL que combina las ventajas de los motores en disco y en memoria.
* [Citus](https://github.com/citusdata/citus) - Clúster PostgreSQL escalable para cargas de trabajo en tiempo real.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - Almacén columnar para análisis con PostgreSQL.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit registra en la base de datos toda la actividad DML, columna por columna.
* [pg_search](https://github.com/paradedb/paradedb) - Extensión de PostgreSQL que permite buscar texto completo en tablas SQL mediante el algoritmo BM25, una función de clasificación de última generación para búsquedas de texto completo.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - Extensión PostgreSQL para recuperación léxica de la familia BM25, con método de acceso a índices nativo y API SQL para consultas top-k.
* [pg_cron](https://github.com/citusdata/pg_cron) - Ejecuta tareas periódicas en PostgreSQL.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - Extensión que proporciona replicación lógica en flujo.
* [pgcat](https://github.com/kingluo/pgcat) - Replicación lógica mejorada de PostgreSQL.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - Generador de códigos QR SVG y Datamatrix para PostgreSQL.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - Extensión de gestión de particiones para PostgreSQL.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Implementación básica de Paxos y replicación de tablas basada en Paxos para un clúster de nodos PostgreSQL.
* [pg\_shard](https://github.com/citusdata/pg_shard) - Extensión para escalar horizontalmente las lecturas y escrituras en tiempo real.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - Herramienta de monitorización del rendimiento de consultas para PostgreSQL.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - Extensión para limpiar automáticamente el exceso de espacio con un bloqueo mínimo.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - Extensión para descargar a la GPU las cargas de trabajo que consumen mucha CPU.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - Extensión de PostgreSQL que ejecuta consultas SQL continuamente sobre flujos y almacena resultados de forma incremental en tablas.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - Extensión que permite comprobar código fuente plpgsql.
* [PostGIS](http://postgis.net/) - Objetos espaciales y geográficos para PostgreSQL.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Vinculación de Postgres como extensión de la biblioteca criptográfica Themis, que proporciona diversos servicios de seguridad del lado de PgSQL.
* [zomboDB](https://github.com/zombodb/zombodb) - Extensión que permite búsquedas eficientes de texto completo mediante índices respaldados por Elasticsearch.
* [pgMemento](https://github.com/pgMemento/pgMemento) - Proporciona un registro de auditoría de los datos en una base de datos PostgreSQL mediante activadores y funciones del servidor escritas en PL/pgSQL.
* [TimescaleDB](https://www.timescale.com/) - Base de datos de series temporales de código abierto, totalmente compatible con Postgres y distribuida como extensión.
* [pgTAP](https://pgtap.org/) - Marco de pruebas de bases de datos para Postgres.
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG proporciona la funcionalidad de índices hipotéticos/virtuales.
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRouting amplía la base de datos geoespacial PostGIS/PostgreSQL con funciones de enrutamiento geoespacial y otros análisis de redes.
* [PGroonga](https://pgroonga.github.io/) - PGroonga proporciona un nuevo método de acceso a índices que utiliza Groonga y permite búsquedas de texto completo muy rápidas en todos los idiomas.
* [PGAudit](https://www.pgaudit.org/) - La extensión de auditoría de PostgreSQL (pgaudit) proporciona registros detallados de auditoría de sesiones u objetos mediante el sistema de registro estándar de PostgreSQL.
* [PostgresML](https://postgresml.org/) - Aprendizaje automático e IA dentro de tu base de datos, incluidos vectores, LLM y ML clásico. Entrena, predice y gestiona todo el ciclo de vida de modelos de aprendizaje automático usando únicamente SQL.
* [ParadeDB](https://github.com/paradedb/paradedb) - Postgres para búsqueda y análisis.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Extensión para enmascarar o reemplazar información de identificación personal (PII) o datos comercialmente confidenciales de una base de datos Postgres mediante etiquetas de seguridad de PG.

### Plataformas
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - Plataforma espaciotemporal 4D de código abierto que combina PostGIS, TimescaleDB, pgvector y H3 para ofrecer inteligencia geoespacial y de series temporales unificada.
* [neond](https://github.com/matisiekpl/neond) - Plano de control de Postgres centrado en la experiencia del desarrollador, con ramificación, PITR y durabilidad en S3. Se distribuye como un único contenedor Docker con panel web y se presenta como reemplazo de `postgres:latest` para cargas de trabajo no críticas.

### Colas de trabajo
* [BeanQueue](https://github.com/LaunchPlatform/bq) - Marco Python de colas de trabajo basado en SKIP LOCKED, LISTEN y NOTIFY.
* [pgmq](https://github.com/pgmq/pgmq) - Cola de mensajes ligera. Como AWS SQS y RSMQ, pero sobre Postgres.
* [river](https://github.com/riverqueue/river) - Sistema de procesamiento de trabajos de alto rendimiento para Go y Postgres.
* [pgBoss](https://github.com/timgit/pg-boss) - Encola trabajos en Postgres desde Node.js como un jefe.
* [dbos](https://www.dbos.dev/) - Flujos de trabajo duraderos en TypeScript y Python.
* [Graphile Worker](https://worker.graphile.org) - Cola de trabajos de alto rendimiento para PostgreSQL, escrita en Node.js.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - La cola Postgres «sin mantenimiento» para Node.js.

### Optimización
* [EverSQL](https://www.eversql.com/) - Herramienta automatizada de optimización, monitorización y análisis de consultas, con recomendaciones de índices (software comercial).
* [PEV2](https://github.com/dalibo/pev2) - Visualizador en línea de planes EXPLAIN de Postgres.
* [pg_flame](https://github.com/mgartner/pg_flame) - Generador de gráficos de llamas para planes de consulta.
* [PgHero](https://github.com/ankane/pghero) - Información sobre PostgreSQL, simplificada.
* [pgMustard](https://www.pgmustard.com/) - Interfaz de usuario moderna
para `EXPLAIN`, que también ofrece consejos de rendimiento (software comercial).
* [pgtune](https://github.com/gregs1104/pgtune/) - Asistente para configurar PostgreSQL.
* [pgtune](https://github.com/le0pard/pgtune) - Versión en línea del asistente de configuración de PostgreSQL.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - Herramienta de configuración en línea de PostgreSQL (también basada en pgtune).
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL Workload Analyzer recopila estadísticas de rendimiento y ofrece gráficos en tiempo real para ayudarte a monitorizar y ajustar tus servidores PostgreSQL.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - Interfaz web para consultar pg_stat_statements.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - Programa para ajustar una base de datos TimescaleDB y optimizar su rendimiento según los recursos del host, como la memoria y el número de CPU.
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis proporciona observabilidad y ajuste del rendimiento para bases de datos SQL, incluido PostgreSQL (software comercial).
* [aqo](https://github.com/postgrespro/aqo) - Optimización adaptativa de consultas para PostgreSQL.
* [pgassistant](https://github.com/beh74/pgassistant-community) - Herramienta PostgreSQL para que los desarrolladores comprendan y optimicen la base de datos con LLM e integración de pgTune.

### Utilidades
* [apgdiff](https://www.apgdiff.com/) - Compara dos archivos de volcado de bases de datos y genera sentencias DDL que permiten actualizar un esquema antiguo al nuevo.
* [bemi](https://github.com/BemiHQ/bemi) - Seguimiento automático de cambios de datos en PostgreSQL.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy genera diagramas de relaciones entre entidades a partir de bases de datos.
* [flyway](https://flywaydb.org/) - Herramienta de migración de esquemas para Postgres y otros sistemas.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - Pasarela de bases de datos nativa de la nube y marco para crear aplicaciones basadas en datos. Como las pasarelas API, pero para bases de datos.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - Herramienta de anonimización de bases de datos y generación de datos sintéticos para MySQL y PostgreSQL.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - API GraphQL instantáneas y en tiempo real, muy rápidas, sobre Postgres, con control de acceso granular y activación de webhooks ante eventos de la base de datos.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - Sincroniza roles y privilegios desde YML y LDAP.
* [migra](https://github.com/djrobstep/migra) - Como diff, pero para esquemas de Postgres.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Script de Lanyrd para convertir MySQL a PostgreSQL.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - La biblioteca NServiceBus.Transport.PostgreSql permite a los desarrolladores .NET [usar una base de datos PostgreSQL como intermediario de mensajes](https://docs.particular.net/transports/postgresql) (software comercial).
* [ora2pg](http://ora2pg.darold.net) - Módulo Perl para exportar el esquema de una base de datos Oracle a un esquema compatible con PostgreSQL.
* [pg\_activity](https://github.com/dalibo/pg_activity) - Aplicación similar a top para monitorizar la actividad del servidor PostgreSQL.
* [pg-formatter](https://github.com/gajus/pg-formatter) - Embellecedor de sintaxis SQL para PostgreSQL (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - Motor de migraciones Node.js que prioriza la seguridad, con bloqueos consultivos, detección de desviaciones SHA-256 y 10 reglas de lint integradas para PostgreSQL.
* [pganalyze](https://pganalyze.com) - Monitorización del rendimiento de PostgreSQL (software comercial).
* [pgbadger](https://github.com/darold/pgbadger) - Analizador rápido de registros de PostgreSQL.
* [PgBouncer](http://www.pgbouncer.org/) - Gestor ligero de conexiones para PostgreSQL.
* [pgCenter](https://github.com/lesovsky/pgcenter) - Proporciona una interfaz práctica para consultar diversas estadísticas, realizar tareas de gestión, recargar servicios, ver archivos de registro y cancelar o terminar procesos de bases de datos.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Réplica en tiempo real de MySQL a PostgreSQL, con migración opcional que permite sobrescribir tipos y capacidades de migración.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - Exporta datos de PostgreSQL a distintos formatos.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - Extensión del navegador que redirige los enlaces de la documentación de PostgreSQL a la versión actual.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - Importa fácilmente archivos CSV y JSON a PostgreSQL.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - Función PostgreSQL de código abierto, fácil de desplegar, que ofrece una lista priorizada de acciones para mejorar la estabilidad y el rendimiento de la base de datos. Inspirada directamente en FirstResponderKit de Brent Ozar para SQL Server.
* [PGInsight](http://pginsight.io/) - Herramienta CLI para explorar a fondo tu base de datos PostgreSQL de forma sencilla.
* [pg_insights](https://github.com/lob/pg_insights) - SQL práctico para monitorizar el estado de las bases de datos Postgres.
* [pgloader](https://github.com/dimitri/pgloader) - Carga datos en PostgreSQL mediante el protocolo de flujo COPY y utiliza hilos separados para leer y escribir datos.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Recopilación y visualización de métricas de Postgres, desplegable en servidores físicos, máquinas virtuales o Kubernetes.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - Middleware que proporciona agrupación de conexiones, replicación, balanceo de carga y limitación de conexiones excedentes.
* [pgspot](https://github.com/timescale/pgspot) - Detecta vulnerabilidades en scripts de extensiones PostgreSQL.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - Demonio para ejecutar Postgres con estado en instancias AWS Spot económicas.
* [pgsync](https://github.com/ankane/pgsync) - Herramienta para sincronizar datos PostgreSQL con tu equipo local.
* [PGXN client](https://github.com/pgxn/pgxnclient) - Herramienta de línea de comandos para interactuar con PostgreSQL Extension Network.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - Herramienta que extrae y proporciona métricas de tu base de datos PostgreSQL.
* [PostgREST](https://github.com/PostgREST/postgrest) - Ofrece una API totalmente RESTful a partir de cualquier base de datos PostgreSQL existente.
* [pREST](https://github.com/prest/prest) - Ofrece una API RESTful desde cualquier base de datos PostgreSQL (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - API GraphQL o esquema GraphQL instantáneo para tu base de datos PostgreSQL.
* [yoke](https://github.com/nanopack/yoke) - Clúster PostgreSQL de alta disponibilidad con conmutación automática por error y recuperación automatizada del clúster.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Demonio ligero de PostgresSQL `LISTEN`/`NOTIFY` basado en `node-postgres`.
* [ZSON](https://github.com/postgrespro/zson) - Extensión PostgreSQL para comprimir JSONB de forma transparente.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - Es una utilidad de carga de datos de alta velocidad para PostgreSQL.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - Gestiona bases de código PostgreSQL y simplifica el control de versiones (VCS).
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Planificador avanzado de trabajos para PostgreSQL.
* [sqitch](https://github.com/sqitchers/sqitch) - Herramienta para gestionar el despliegue de esquemas versionados.
* [pgmigrate](https://github.com/yandex/pgmigrate) - Herramienta CLI desarrollada por Yandex para evolucionar migraciones de esquemas.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - Herramienta para comparar esquemas de bases de datos, con capacidad para aceptar algunas diferencias persistentes.
* [pg-differ](https://github.com/multum/pg-differ) - Herramienta sencilla para inicializar/actualizar la estructura de tablas PostgreSQL, alternativa a las migraciones (Node.js).
* [Qail](https://github.com/qail-io/qail) - Canalización AST tipada para PostgreSQL, centrada en Rust, con comprobaciones de consultas en tiempo de compilación y ámbito integrado por inquilino.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - Detecta automáticamente antipatrones SQL habituales. Estos antipatrones suelen ralentizar las consultas; corregirlos puede acelerarlas.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Herramienta de diagnóstico de nueva generación que permite recopilar un análisis profundo del estado de una base de datos Postgres.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Control de versiones de esquemas de bases de datos Postgres.
* [ScaffoldHub.io](https://scaffoldhub.io) - Genera aplicaciones PostgreSQL full stack con Angular, Vue o React (software comercial).
* [planter](https://github.com/achiku/planter) - Genera descripciones textuales de diagramas ER de PlantUML a partir de tablas PostgreSQL.
* [pgroll](https://github.com/xataio/pgroll) - Migraciones de esquemas de Postgres reversibles y sin tiempo de inactividad.
* [RegreSQL](https://github.com/dimitri/regresql) - Herramienta para crear, mantener y ejecutar un conjunto de pruebas de regresión para consultas SQL.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter para detectar patrones peligrosos de migración Postgres en Diesel y SQLx.

### Enlaces de lenguaje
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

### PaaS *(PostgreSQL como servicio)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - PostgreSQL como servicio en AWS, Azure, DigitalOcean, Google Cloud y UpCloud. Los planes van desde instancias de un solo nodo por 19 $ al mes hasta grandes configuraciones de alta disponibilidad; incluye una prueba gratuita de dos semanas.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (RDS) para PostgreSQL.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL ofrece una base de datos PostgreSQL comunitaria como servicio, totalmente administrada y lista para empresas. Incluye alta disponibilidad integrada, escalado elástico e integración nativa con el ecosistema de Azure.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres totalmente administrado por expertos en Postgres. Disponible en los principales proveedores de nube: Amazon AWS, Google GCP y Microsoft Azure. Sin dependencia del proveedor y con acceso completo de superusuario.
* [Database Labs](https://www.databaselabs.io) - Obtén en minutos un servidor PostgreSQL en la nube listo para producción, desde 20 $ al mes. Incluye copias de seguridad, monitorización, parches y asistencia técnica las 24 horas, todos los días.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - Bases de datos PostgreSQL totalmente administradas. Sin plan gratuito. Desde 15 $ al mes. Copias de seguridad diarias con recuperación a un punto en el tiempo. Nodos en espera con conmutación automática por error.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Servicio de bases de datos totalmente administrado que facilita la configuración, el mantenimiento, la gestión y la administración de tus bases de datos relacionales PostgreSQL en Google Cloud Platform.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - Planes desde gratuitos hasta de gran tamaño, gestionados por expertos en PostgreSQL. No es necesario ejecutar tu aplicación en Heroku. El plan gratuito incluye 10 000 filas, 20 conexiones, hasta dos copias de seguridad y compatibilidad con PostGIS.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - PostgreSQL de alta disponibilidad, escalable y seguro. Copias de seguridad diarias con recuperación a un punto en el tiempo, sin dependencia del proveedor y con tráfico entrante y saliente gratuito.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - PostgreSQL administrado, seguro, fiable y totalmente desatendido. Todos los planes incluyen cifrado en reposo, copias de seguridad automatizadas y almacenamiento SSD ampliable. Los planes empiezan en 7 $ al mes por 256 MB de RAM y 1 GB de almacenamiento (gratis durante los primeros 90 días).
* [Rivestack](https://rivestack.io) - PostgreSQL administrado con pgvector preinstalado y ajustado para HNSW para búsquedas vectoriales. Nivel gratuito (2 GB, sin tarjeta de crédito), instancias dedicadas a precio fijo desde 15 $ al mes y regiones en la UE y EE. UU.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - Alojamiento PostgreSQL totalmente administrado, con alta disponibilidad, servidores dedicados y control de superusuario: la alternativa número uno a Amazon RDS en varias nubes.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - Bases de datos PostgreSQL totalmente administradas con alta disponibilidad, escalado y copias de seguridad automatizadas, alojadas en la UE. Desde 10 € al mes.
* [Supabase](https://www.supabase.com) - Postgres totalmente administrado con réplicas de lectura, recuperación a un punto en el tiempo, paquetes de asistencia, interfaz gráfica en el navegador y un generoso nivel gratuito.
* [Neon](https://neon.tech) - PostgreSQL sin servidor totalmente administrado. Neon separa el almacenamiento del cómputo para ofrecer funciones modernas para desarrolladores, como arquitectura sin servidor, ramificación, almacenamiento ilimitado y más.
* [Nile](https://www.thenile.dev/) - PostgreSQL totalmente administrado. Nile desacopla el almacenamiento del cómputo y virtualiza los inquilinos para crear aplicaciones de IA multiinquilino de forma rápida y segura, con escalabilidad ilimitada. El nivel gratuito ofrece bases de datos ilimitadas.
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale para Postgres ofrece clústeres de bases de datos PostgreSQL de alta disponibilidad y totalmente administrados, construidos sobre infraestructura moderna en la nube.
* [Vela](https://vela.run) - Backend como servicio basado en Postgres, creado para aplicaciones modernas de IA. Ofrece ramificaciones y clones instantáneos de bases de datos, entornos de prueba similares a producción y escalado sin servidor.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - Base de datos PostgreSQL totalmente administrada, multizona (multi-AZ), con copias de seguridad automatizadas y alojada en los Países Bajos.

### Imágenes de Docker
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Imágenes oficiales de Citus con extensiones citus. Basadas en el contenedor oficial de Postgres.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 en Postgres 9. Basado en el contenedor oficial de Postgres.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB es Postgres para búsqueda y análisis. Basado en el contenedor oficial de Postgres con la extensión pg_search.
* [pglayers](https://github.com/pglayers/pglayers) - Extensiones PostgreSQL precompiladas como capas Docker componibles. Más de 50 extensiones e imágenes combinadas listas para usar (completas y compatibles con Azure).
* [postgres](https://hub.docker.com/_/postgres/) - Contenedor oficial de postgres (de Docker).

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - PostgreSQL para producción en Kubernetes, desde clústeres Postgres de alta disponibilidad hasta servicios de bases de datos a gran escala.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - PostgreSQL de nivel empresarial en OpenShift Container Platform (software comercial).
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegres es un operador de Kubernetes que permite desplegar uno o varios clústeres de instancias PostgreSql y gestionar la replicación de bases de datos, la conmutación por error y las copias de seguridad.
* [StackGres Operator](https://github.com/ongres/stackgres/) - Stack PostgreSQL completo en Kubernetes.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Crea y gestiona clústeres PostgreSQL que se ejecutan en Kubernetes.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Plataforma integral diseñada para gestionar sin problemas bases de datos PostgreSQL en entornos Kubernetes.
* [KubeDB operator](https://kubedb.com/) - Ejecuta bases de datos de nivel de producción en Kubernetes (software comercial).
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Operador Percona para PostgreSQL basado en el operador de Crunchy Data.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest Operator es un operador de Kubernetes responsable de gestionar el ciclo de vida de bases de datos MySQL, MongoDB y PostgreSQL. Utiliza internamente los operadores de Kubernetes de Percona para estos tres sistemas, pero ofrece una API unificada y un único panel para gestionarlos.

## Recursos

### Tutoriales
* [Hacer una copia de seguridad y recuperar una base de datos PostgreSQL con wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - Tutorial para configurar el archivado continuo en PostgreSQL mediante wal-e.
* [Guía rápida de operaciones](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - Guía de referencia de operaciones de PostgreSQL Wiki.
* [PG Casts](https://www.pgcasts.com) - Capturas de pantalla semanales gratuitas de PostgreSQL de Hashrocket.
* [Postgres Guide](http://postgresguide.com/) - Guía diseñada para ayudar a principiantes y usuarios experimentados a encontrar consejos específicos y explorar las herramientas disponibles en PostgreSQL.
* [Control de acceso de PostgreSQL](https://andersnasell.gumroad.com/l/postgresql-access-control) - El modelo mental completo: roles, concesiones, propiedad, membresía, políticas y privilegios predeterminados como sistema integrado. PDF y vídeo, unos 60 minutos.
* [PostgreSQL Exercises](https://pgexercises.com/) - Sitio que facilita aprender PostgreSQL mediante ejercicios.
* [Tutorial de PostgreSQL de tutorialspoint](http://www.tutorialspoint.com/postgresql/) - Colección muy extensa de tutoriales sobre PostgreSQL.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Colección de esquemas de ejemplo de Postgres.
* [Introducción a PostgreSQL para personas ocupadas](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - Colección de los comandos de PostgreSQL más habituales.
* [pg-utils](https://github.com/dataegret/pg-utils) - Herramientas útiles para DBA de Data Egret.
* [pagila](https://github.com/xzilla/pagila) - Pagila, base de datos de ejemplo de Postgres.
* [Guía rápida de sintaxis SQL](https://github.com/mergisi/sql-syntax-cheat-sheet) - Referencia completa de sintaxis SQL que abarca funciones de ventana, CTE y sintaxis específica de PostgreSQL (UPSERT, consultas JSON y operaciones con matrices).

### Blogs
* [Planet PostgreSQL](https://planet.postgresql.org/) - Servicio de agregación de blogs sobre PostgreSQL.
* [Blog técnico y de PostgreSQL de Andrew Dunstan](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Blog de PostgreSQL de Bruce Momjian](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - Selección de publicaciones sobre funciones interesantes de PostgreSQL, consejos y trucos.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Blog de Josh Berkus.
* [Blog de Michael Paquier](https://paquier.xyz/)
* [Publicaciones del blog de PostgreSQL de Percona](https://www.percona.com/blog/category/postgresql/)
* [Blog de Robert Haas](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Blog de Hubert Lubaczewski.
* [Metis Blog](https://www.metisdata.io/blog) - Selección de publicaciones sobre PostgreSQL, bases de datos SQL, rendimiento y ajuste.
* [Blog técnico y de PostgreSQL de Digoal (en chino)](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - Blog del autor de PIGSTY con artículos interesantes sobre PostgreSQL, además de bases de datos e infraestructura en la nube.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - Blog del equipo de BigData Boutique, centrado principalmente en análisis.

### Libros
* [Errores de PostgreSQL y cómo evitarlos](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Libro electrónico gratuito de Hironobu Suzuki.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Libro electrónico gratuito de Egor Rogov.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Guía práctica para escalar Postgres en producción, que abarca ajustes, agrupación de conexiones, particionamiento y alta disponibilidad.


### Documentación
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - Documentación de usuario, guías prácticas y consejos.
* [pgPedia](https://pgpedia.info/) - Enciclopedia de temas relacionados con PostgreSQL.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - Proyecto cuyo objetivo es generar documentación de todos los símbolos del código fuente de PostgreSQL mediante agentes de IA.

### Boletines

* [Postgres Weekly](https://postgresweekly.com/) - Boletín semanal con artículos, noticias y repositorios relevantes para PostgreSQL.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Boletín mensual con artículos y vídeos sobre el rendimiento de Postgres.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - Resumen semanal de la lista de correo pgsql-hackers, con una lista de los hilos activos, resúmenes de los hilos y más.

### Podcasts
* [PostgresFM](https://postgres.fm/) - Debates semanales sobre temas de Postgres.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Recopilaciones semanales de contenido relacionado con PostgreSQL.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Entrevistas mensuales con personas del mundo de Postgres.

### Vídeos
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Vídeos relacionados con Citus.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - Vídeos relacionados con EnterpriseDB.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - Vídeos de conferencias.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Serie de videoblogs sobre Postgres de Creston Jamison.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Charlas, sesiones de desarrollo, entrevistas y episodios de pódcast sobre Postgres.

### Comunidad
* [Listas de correo](https://www.postgresql.org/list/) - Listas de correo oficiales de Postgres para asistencia, difusión y más. Uno de los principales canales de comunicación de la comunidad Postgres.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - Comunidad de Reddit para usuarios de PostgreSQL con más de 12 000 miembros.
* [Slack](https://pgtreats.info/slack-invite) - Espacio de trabajo de Slack para Postgres con más de 20 000 miembros.
* Telegram - Varios grupos de PostgreSQL en distintos idiomas: [ruso](https://t.me/pgsql), más de 4200 personas; [portugués brasileño](https://t.me/postgresqlbr), más de 2300; [indonesio](https://t.me/postgresql_id), alrededor de 1000; [inglés](https://t.me/postgreschat), más de 750.
* [#postgresql en Freenode](https://webchat.freenode.net/#postgresql) - El canal IRC más popular sobre Postgres en Freenode, con más de 1000 usuarios.
* [Discord](https://discord.gg/bW2hsax8We) - Servidor de Discord para Postgres con más de 6000 miembros.

### Hojas de ruta
* [Hoja de ruta de PostgreSQL](https://roadmap.sh/postgresql-dba) - Hoja de ruta con una guía paso a paso para PostgreSQL.

### Listas externas
* [Lista de herramientas de administración de Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Comparación de herramientas de administración de bases de datos en Wikipedia.
* [Lista de herramientas gráficas de PostgreSQL Wiki](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - Guía comunitaria de herramientas gráficas para PostgreSQL Wiki.
* [Lista de envoltorios de datos externos de PostgreSQL Wiki](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Envoltorios de datos externos.
