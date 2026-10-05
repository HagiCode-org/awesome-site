# Selección de herramientas de bases de datos [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Lista impulsada por la comunidad de herramientas de base de datos

Aquí recopilaremos información sobre impresionantes herramientas experimentales útiles e impresionantes que simplifican el trabajo con bases de datos para DBA, DevOps, Desarrolladores y meros mortales.

Siéntete libre de añadir información sobre tus propias herramientas de db o tus herramientas de terceros favoritos.

Para actualizaciones sobre `awesome-db-tools` y pensamientos/noticias sobre bases de datos/herramientas/SQL me siguen en [@GraminMaksim](https://twitter.com/GraminMaksim)

## Índice
- [IDE](#ide)
- [GUI](#gui)
- [CLI](#cli)
- [Schema](#schema)
  - [Cambios](#changes)
  - [Code generation](#code-generation)
  - [Diagramas](#diagrams)
  - [Documentación](#documentations)
  - [Diseño](#design)
  - [Muestras](#samples)
- [API](#api)
- [Plataformas de aplicación](#application-platforms)
- [Copia de seguridad](#backup)
- [Cierre](#cloning)
- [Supervisión/Estadística/Performance](#monitoringstatisticsperformance)
  - [Prometeo](#prometheus)
  - [Zabbix](#zabbix)
- [Pruebas](#testing)
- [HA/Failover/Sharding](#hafailoversharding)
- [Kubernetes](#kubernetes)
- [Configuración Tuning](#configuration-tuning)
- [DevOps](#devops)
- [Reporting](#reporting)
- [Distribución](#distributions)
- [Seguridad](#security)
- [SQL](#sql)
  - [Analizadores](#analyzers)
  - [Code Generators](#code-generators)
  - [Extensiones](#extensions)
  - [Marcos](#frameworks)
  - [Formatters](#formatters)
  - [Juegos](#games)
  - [Parsers](#parsers)
  - [Über SQL](#über-sql)
  - [Protocolo del servidor de idiomas](#language-server-protocol)
  - [Aprender](#learning)
  - [Plan](#plan)
  - [Scripts](#scripts)
- [Datos](#data)
  - [Catálogo](#catalog)
  - [Licitación](#lineage) 
  - [Generation/Masking/Subsetting](#generationmaskingsubsetting)
  - [Perfiladores de datos](#data-profilers)
  - [Replicación](#replication) 
  - [Compare](#compare) 
- [Documentos](#papers)
- [Machine Learning](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - Premier herramienta de administración multipropósito para la gestión de bases de datos, control y desarrollo 🔒 🔒 .
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Software de productividad para Desarrolladores de Bases de Datos, DBAs y Analistas.
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - IDE moderno para analistas e ingenieros analíticos con poderosa funcionalidad de script y cuadrícula 🔒 🔒.
- [Database .net](http://fishcodelib.com/Database.htm) - Herramienta de gestión de bases de datos múltiples con soporte para bases de datos 20+ 🔒.
- [Database Workbench](https://www.upscene.com/database_workbench/) - IDE completo para el diseño de bases de datos, desarrollo y pruebas para Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite y NexusDB 💰 .
- [DataGrip](https://www.jetbrains.com/datagrip) - Cross-Platform IDE for Databases & SQL by JetBrains 🔒 🔒.
- [DataStation](https://github.com/multiprocessio/datastation) - Consultar fácilmente, script y visualizar datos de cada base de datos, archivo y API.
- [DBeaver](https://github.com/dbeaver/dbeaver) - Gestor de bases de datos universales y cliente SQL.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - Solución multidatabase para desarrollo, diseño, gestión y administración de MySQL, MariaDB, SQL Server, Oracle, bases de datos PostgreSQL y varios servicios en la nube 💰 .
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - IDE universal para el desarrollo, gestión y administración de bases de datos MySQL y MariaDB.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - IDE potente para la gestión, administración y desarrollo de Oracle 🔒 🔒 .
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - Herramienta GUI para gestionar y desarrollar bases de datos y objetos 🔒 .
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - Potente entorno de desarrollo integrado para el desarrollo, gestión, administración, análisis de datos y presentación de informes de SQL Server.
- [DBHawk](https://www.datasparc.com/) - Datasparc ofrece seguridad de bases de datos, gestión de bases de datos, gobernanza de bases de datos y análisis de datos - todo en una solución 🔒 🔒 .
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - Moderno (JavaScript/Electron framework), código abierto IDE para MongoDB. Tiene características para apoyar el desarrollo, administración y ajuste de rendimiento en bases de datos MongoDB.
- [IBExpert](http://www.ibexpert.net/ibe) - Herramienta GUI completa para Firebird e InterBase 🔒 🔒.
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Un cliente ligero para gestionar MySQL, MSSQL y PostgreSQL, escrito en Delphi.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Una herramienta SQL propulsada por AI para bases de datos populares (SQLite / MySQL / PostgreSQL / etc) en Windows / macOS / Linux, diseño de mesa de soporte, consulta, modelo, sincronización, exportación/import etc, se centran en la comodidad, diversión y el desarrollador amigable.
- [KeepTool](https://keeptool.com) - Una suite profesional de herramientas para desarrolladores de Oracle Database, administradores y usuarios de aplicaciones avanzadas.
- [MySQL Workbench](https://www.mysql.com/products/workbench) - Herramienta visual unificada para arquitectos de bases de datos, desarrolladores y DBAs.
- [Navicat](https://www.navicat.com/en/products#navicat) - Una herramienta de desarrollo de bases de datos que permite conectarse simultáneamente a MySQL, MariaDB, SQL Server, Oracle, PostgreSQL y bases de datos SQLite de una sola aplicación 🔒 .
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Ambiente de desarrollo libre e integrado que simplifica el desarrollo y la gestión de Oracle Database tanto en implementaciones tradicionales como en Cloud.
- [pgAdmin](https://www.pgadmin.org) - La plataforma de administración y desarrollo de código abierto más popular y rica para PostgreSQL, la base de datos de código abierto más avanzada del mundo.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - Soporte a largo plazo para pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE que se centra específicamente en el desarrollo de unidades de programas almacenadas para Oracle Databases 💰 🔒 .
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - Herramienta completa y potente de gestión de bases de datos, administración y desarrollo para PostgreSQL 🔒 🔒 .
- [Querybook](https://github.com/pinterest/querybook) - Pinterest open-source Big Data Querying UI, combinando metadatos de mesa colocados y una sencilla interfaz de IDE de notebook.
- [Slashbase](https://github.com/slashbaseide/slashbase) - El IDE colaborativo de código abierto para sus bases de datos. Conéctese a su base de datos, busque datos, ejecute un montón de comandos SQL o comparta consultas SQL con su equipo, desde su navegador.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - Ambiente integrado para gestionar cualquier infraestructura SQL, para SQL Server y Azure SQL Databases 🔒.
- [Toad](https://www.quest.com/toad/) - Solución de base de datos Premier para desarrolladores, administradores y analistas de datos. Gestionar cambios complejos de bases de datos con una sola herramienta de gestión de bases de datos 🔒 🔒.
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - Herramienta simplificada de desarrollo de bases de datos para MySQL y PostgreSQL 🔒 🔒.
- [TOra](https://github.com/tora-tool/tora) - IDE de código abierto para Oracle, MySQL y PostgreSQL.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Crear, administrar, consultar y explorar Valentina DB, MySQL, MariaDB, PostgreSQL y bases de datos SQLite GRATIS 🔒 🔒 .
- [WebDB](https://webdb.app) - Free Efficient Database IDE. Con Server Discovery, ERD, Data Generator, AI, NoSQL Structure Manager, Database Versioning y muchos más.


## GUI
- [Adminer](https://github.com/vrana/adminer) - Gestión de bases de datos en un solo archivo PHP.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - Free Open Source Redis Manager. Disponible en Mac, Linux, Windows, Homebrew, Snap, winget y más.
- [Antares SQL](https://github.com/antares-sql/antares) - Un cliente SQL moderno, rápido y de productividad con enfoque en UX. Disponible para Mac, Linux y Windows.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Una herramienta de gestión de datos que permite trabajar con SQL Server, PostgreSQL, Azure SQL DB y SQL DW desde Windows, macOS y Linux.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - Editor SQL de código abierto y Administrador de bases de datos con un compromiso de privacidad en su declaración de misión.
- [Clidey WhoDB](https://github.com/clidey/whodb) - Un explorador de bases de datos ligero con UX de próxima generación para todos SQL, NoSQL, Caches y Queues.
- [DbGate](https://github.com/dbgate/dbgate) - Administrador de bases de datos para MySQL, PostgreSQL, SQL Server, MongoDB, SQLite y otros. Se ejecuta bajo Windows, Linux, Mac o como aplicación web.
- [DB Lens](https://github.com/dblens/app) - Open Source PostgreSQL GUI - Diagramas automáticos ER, Insights internos DB, Utilización de discos, medición de rendimiento, uso de índices, recuentos de escaneo secuencial y más.
- [DbVisualizer](https://www.dbvis.com) - Herramienta de base de datos universal para desarrolladores, DBAs y analistas.
- [JackDB](https://www.jackdb.com) - Acceso directo a SQL a todos sus datos, no importa dónde viva.
- [Jailer](https://github.com/Wisser/Jailer) - Base de datos Subsetting y Relational Data Browsing Tool/Client.
- [Malewicz](https://github.com/mgramin/malewicz) - Otro cliente WEB para el análisis de esquemas DB, pero creado originalmente específicamente para piratería y ampliación.
- [MissionKontrol](https://www.missionkontrol.io) - Panel/cliente de administración de arrastre moderno con permisos de usuario completos para usuarios no técnicos.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - Para MySQL, MariaDB y Tarantool. Desarrollado para Linux pero puede funcionar en Windows.
- [OmniDB](https://github.com/OmniDB/OmniDB) - Herramienta web para la gestión de bases de datos.
- [Pgweb](https://github.com/sosedoff/pgweb) - Navegador de base web para PostgreSQL, escrito en Go y trabaja en máquinas macOS, Linux y Windows.
- [phpLiteAdmin](https://www.phpliteadmin.org) - Herramienta de administración de base SQLite basada en web escrita en PHP con soporte para SQLite3 y SQLite2.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Una interfaz web para MySQL y MariaDB.
- [psequel](http://www.psequel.com) - Proporciona una interfaz limpia y sencilla para realizar tareas comunes de PostgreSQL rápidamente.
- [PopSQL](https://popsql.com) - Editor SQL moderno y colaborativo para su equipo.
- [Postico](https://eggerapps.at/postico) - Un cliente PostgreSQL moderno para el Mac.
- [Robo 3T](https://github.com/Studio3T/robomongo) - Herramienta de gestión MongoDB, centrada en el casco.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - Gestión de bases de datos MySQL/MariaDB para macOS.
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - Aplicación rápida de gestión de bases de datos Mac fácil de usar para trabajar con bases de datos MySQL & MariaDB.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - Interfaz gráfica soporta todas las funciones SQLite.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Un TUI para ver bases de datos SQLite, escritas en Go.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - Editor SQL basado en web corre en su propia nube privada.
- [SQLPro](https://www.macpostgresclient.com) - Un sencillo y poderoso gerente de PostgreSQL para macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Graphical SQL client written in Java that will allow you to view the structure of a JDBC compliant database, explore the data in tables, issue SQL commands etc.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - Gestión de bases de datos para VSCode.
- [SQLyog](https://www.webyog.com/product/sqlyog) - El más completo y fácil de usar MySQL GUI.
- [Tabix](https://github.com/tabixio/tabix) - SQL Editor &amp; Open source simple business intelligence para Clickhouse.
- [TablePlus](https://github.com/TablePlus/TablePlus) - Herramienta moderna, nativa y amigable para bases de datos relacionales: MySQL, PostgreSQL, SQLite &amp; more.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - utilice sus bases de datos PostgreSQL desde cualquier lugar, con una interfaz web AJAX rica y rápida.
- [Query.me](https://query.me) - Editor SQL colaborativo en formato Notebook. Vamos a hacer referencia a los resultados de las consultas usando JINJA, visualizar datos y programar carreras y exportaciones.


## CLI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - Conectar a una base de datos para emitir comandos SQL dentro de IPython o IPython Notebook.
- [iredis](https://github.com/laixintao/iredis) - Un Cli para Redis con Autocompletion y Sintaxis Highlighting.
- [pgcenter](https://github.com/lesovsky/pgcenter) - Herramienta de administración superior para PostgreSQL.
- [pg_activity](https://github.com/julmon/pg_activity) - Aplicación similar para el monitoreo de la actividad del servidor PostgreSQL.
- [pg_top](https://github.com/markwkm/pg_top) - Mejor para PostgreSQL.
- [pspg](https://github.com/okbob/pspg) - PostgreSQL Pager.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Invierno para patrones peligrosos de migración PostgreSQL. Funciona perfectamente con archivos SQL PostgreSQL e integra de forma nativa con proyectos usando Diesel y SQLx.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line (SQLcl) es una interfaz de línea de comandos gratuita para Oracle Database.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - Herramientas CLI para manipular archivos de bases de datos SQLite - insertar datos, ejecutar consultas, crear índices, configurar búsqueda de texto completo y más.
- [SQLLine](https://github.com/julianhyde/sqlline) - Carcasa de línea de comandos para emitir SQL a bases de datos relacionales a través de JDBC.
- [usql](https://github.com/xo/usql) - Una interfaz universal de línea de comandos para PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server, y muchas otras bases de datos incluyendo NoSQL y bases de datos no relacionadas!

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) - Herramienta CLI para el servicio AWS Athena que puede hacer auto-completion y resaltar sintaxis.
- [litecli](https://github.com/dbcli/litecli) - CLI para SQLite Databases con autocompletion y sintaxis resaltando.
- [mssql-cli](https://github.com/dbcli/mssql-cli) - Un cliente de línea de comandos para SQL Server con autocompletion y sintaxis resaltando.
- [mycli](https://github.com/dbcli/mycli) - Un cliente terminal para MySQL con Autocompletion y Syntax Highlighting.
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL CLI con autocompleción y sintaxis resaltando.
- [vcli](https://github.com/dbcli/vcli) - Vertica CLI con autocompleción y sintaxis destacando.


## Schema

### Cambios
- [2bass](https://github.com/CourseOrchestra/2bass) - Herramienta de configuración de bases de datos que utiliza el concepto de scripts DDL idempotent.
- [Atlas](https://github.com/ariga/atlas) - Inspeccione y aplique cambios en su esquema de bases de datos.
- [Bytebase](https://github.com/bytebase/bytebase) - La herramienta de cambio de esquemas y control de versiones basada en la web, cero-config, sin dependencia y sin dependencia.
- [flyway](https://github.com/flyway/flyway) - Herramienta de migración de bases de datos.
- [gh-ost](https://github.com/github/gh-ost) - Migración de esquemas en línea para MySQL.
- [liquibase](https://github.com/liquibase/liquibase) - Biblioteca independiente de bases de datos para el seguimiento, la gestión y la aplicación de los cambios de esquemas de bases de datos.
- [migra](https://github.com/djrobstep/migra) - Como diff pero para los esquemas PostgreSQL.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - Node.js gestión de la migración de bases de datos construida exclusivamente para PostgreSQL. (Pero también se puede utilizar para otros DB conforme a la norma SQL - por ejemplo CockroachDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - Herramienta CLI fácil para hacer cambios de esquemas de tiempo libre y backfills en PostgreSQL.
- [Prisma Migrate](https://github.com/prisma/migrate) - Herramienta de migración de esquemas de base de datos declarativa que utiliza una sintaxis de modelado de datos declarativa para describir su esquema de base de datos.
- [Pyrseas](https://github.com/perseas/Pyrseas) - Proporciona utilidades para describir un esquema de base de datos PostgreSQL como YAML.
- [Reshape](https://github.com/fabianlindfors/reshape) - Una herramienta de migración de esquemas de tiempo cero fácil de usar para Postgres.
- [SchemaHero](https://github.com/schemahero/schemahero) - Un operador de Kubernetes para la gestión de esquemas declarativos de bases de datos (encargados para esquemas de bases de datos).
- [Skeema](https://github.com/skeema/skeema) - Sistema de gestión de esquemas de SQL puro declarado para MySQL y MariaDB, con soporte para herramientas de cambio de esquemas externos y de schema en línea.
- [Sqitch](https://github.com/sqitchers/sqitch) - Sensible gestión de cambios nativos de bases de datos para el desarrollo sin marco y el despliegue fiable.
- [sqldef](https://github.com/k0kubun/sqldef) - Gestión de esquemas de identificación para MySQL, PostgreSQL, y más.
- [yuniql](https://github.com/rdagumampan/yuniql) - Sin embargo, otra herramienta de edición y migración de esquemas acaba de hacer con .NET Core 3.0+ nativa y esperanzadamente mejor.

### Code generation
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - Infiere SQL DDL (Diferencia de datos) de los datos de la tabla.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Línea de comandos util para exportar Oracle schema para establecer scripts ddl init con capacidad de filtrar información indeseable, DDL separado en diferentes archivos, salida de formato bonito.

### Diagramas
- [Azimutt](https://github.com/azimuttapp/azimutt) - Una herramienta de visualización del diagrama de relaciones de la Entidad (ERD), con varios filtros e insumos para ayudar a entender el esquema de su base de datos.
- [ChartDB](https://github.com/chartdb/chartdb) - Editor de diagramas libres y de código abierto, visualice y diseñe su DB con una sola consulta.
- [DrawDB](https://github.com/drawdb-io/drawdb) - Herramienta de diseño de bases de datos online gratuita, sencilla e intuitiva y generador SQL. 
- [DrawSQL](https://drawsql.app) - Editor de esquemas de bases de datos en línea con importación SQL, generación AI y colaboración en equipo en tiempo real.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - Herramienta de generación de Diagramas de Relación de Entidades.
- [ERD Lab](https://www.erdlab.io/) - Herramienta de relación de entidad basada en la nube libre (ERD) para desarrolladores.
- [Liam ERD](https://github.com/liam-hq/liam) - Herramienta de código abierto que genera bellos y fáciles de leer Diagramas de Relación de Entidades desde su base de datos y ORMs.
- [QuickDBD](https://www.quickdatabasediagrams.com/) - Herramienta simple en línea para dibujar rápidamente diagramas de bases de datos.

### Documentación
- [dbdocs](https://dbdocs.io/) - Crear documentación basada en la web usando código DSL.
- [DBML](https://github.com/holistics/dbml) - Lenguaje de marcado de bases de datos, diseñado para definir y documentar estructuras de bases de datos.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - Una herramienta gratuita de descubrimiento y comprensión de esquemas de base de datos.
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Generar su base de datos a la documentación HTML, incluyendo los diagramas de Relación de Entidades.
- [tbls](https://github.com/k1LoW/tbls) - Herramienta para documentar una base de datos, escrita en Go.

### Diseño
- [Database Design](https://github.com/alextanhongpin/database-design) - Consejos útiles para diseñar esquemas de bases de datos robustos.
- [DBDiagram](https://dbdiagram.io) - Una herramienta gratuita y sencilla para dibujar diagramas de ER solo escribiendo código.
- [DbSchema](https://dbschema.com/) - Diseñador universal de bases de datos para gestión de esquemas fuera de la caja, documentación de esquemas, diseño en un equipo y despliegue en múltiples bases de datos. DbSchema cuenta con herramientas para escribir y ejecutar consultas, explorar los datos, generar datos e informes de construcción.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - Software de modelado de bases de datos fácil de usar para modelos de datos de alta calidad. Es una solución completa de modelado de datos para modeladores de datos y arquitectos de datos.
- [Moon Modeler](https://www.datensen.com) - Herramienta de modelado de datos para bases de datos noSQL y relacionales. Disponible para Windows, Linux y macOS.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - Una herramienta de diseño de bases de datos potente y rentable que le ayuda a crear modelos de datos conceptuales, lógicos y físicos de alta calidad.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - Herramienta gráfica gratuita que mejora la productividad y simplifica las tareas de modelado de datos.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - Herramienta de modelado de datos diseñada para PostgreSQL.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - Herramienta de diagramación SQL en línea.

### Muestras
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Esquemas de muestra para Oracle Database.


## API
Building API for your Data
- [Datasette](https://github.com/simonw/datasette) - Una herramienta para explorar y publicar datos.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - Un backend de código abierto REST API para aplicaciones móviles, web e IoT.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - Convertir múltiples fuentes de datos en una API GraphQL única.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Blazing rápido, instantánea API GraphQL en tiempo real en PostgreSQL con control de acceso fino granulado, también activa webhooks en eventos de bases de datos.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - API REST para cualquier base de datos respaldada por JDBC, un clon PostgREST escrito en Java.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - Una aplicación Java de nivel medio, ORDS mapas HTTP(S) verbs (GET, POST, PUT, DELETE, etc.) a transacciones de bases de datos y devuelve cualquier resultado formateado con JSON.
- [Prisma](https://github.com/prismagraphql/prisma) - Convierte tu base de datos en una API de GraphQL en tiempo real.
- [PostGraphile](https://github.com/graphile/postgraphile) - Hacer girar instantáneamente un servidor de API de GraphQL señalando PostGraphile en su base de datos PostgreSQL existente.
- [PostgREST](https://github.com/PostgREST/postgrest) - API REST para cualquier base de datos PostgreSQL.
- [prest](https://github.com/prest/prest) - Es una manera de servir una API RESTful de cualquier base de datos escrita en Go.
- [Remult](https://github.com/remult/remult) - CRUD seguro de tipo final a extremo a través de REST API para su base de datos, con control de acceso fino.
- [restSQL](https://github.com/restsql/restsql) - Generador SQL con API Java y HTTP, utiliza una sencilla API HTTP RESTful con serialización XML o JSON.
- [resquel](https://github.com/formio/resquel) - Convierta fácilmente su base de datos SQL en una API REST.
- [sandman2](https://github.com/jeffknupp/sandman2) - Generar automáticamente un servicio RESTful API para su base de datos heredada.
- [soul](https://github.com/thevahidal/soul) - Servidor SQLite RESTful y API en tiempo real.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - Escribir SQL para exponer automáticamente APIs RESTful desde su base de datos / almacén de datos / lago de datos.

## Plataformas de aplicación
Plataformas de código bajo y sin código para la construcción de aplicaciones
- [Appsmith](https://github.com/appsmithorg/appsmith) - Powerful open source low code framework to build internal applications really quickly.
- [Budibase](https://github.com/Budibase/budibase) - Plataforma de código bajo para crear aplicaciones internas en minutos.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Plataforma de construcción de herramientas internas de bajo código.
- [Nhost](https://github.com/nhost/nhost) - La alternativa Open Source Firebase con GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) - Generador de código abierto para aplicaciones de bases de datos web. Server y drag-and-drop UI builder, datos almacenados en PostgreSQL o SQLite.
- [SQLPage](https://github.com/sqlpage/SQLPage) - Fast SQL-only data application builder. Construya automáticamente una interfaz de usuario sobre las consultas SQL.
- [Tooljet](https://github.com/ToolJet/ToolJet) - Plataforma de código bajo de código abierto para construir herramientas internas.


## Copia de seguridad
- [BaRMan](https://github.com/2ndquadrant-it/barman) - Administrador de respaldo y recuperación de PostgreSQL.
- [Databasus](https://github.com/databasus/databasus) - Herramienta para copias de seguridad PostgreSQL programadas a través de Internet UI con almacenamientos externos (local, S3, FTP, Google Drive, etc.), notificaciones (webhook, Discord, Slack, etc.) y gestión de equipo.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - Restauración de respaldo de PostgreSQL confiable.
- [pgcopydb](https://github.com/dimitri/pgcopydb) - Copiar una base de datos PostgreSQL a un servidor PostgreSQL objetivo (pg_vertedero | pg_restaurar sobre esteroides).
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - Un gerente de respaldo y recuperación de PostgreSQL.
- [Portabase](https://github.com/Portabase/portabase) - Plataforma basada en agentes para respaldos y restauraciones de PostgreSQL con ejecución descentralizada y orquestación centralizada. 

## Cierre
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - clonación instantánea delgada para PostgreSQL para escalar el proceso de desarrollo.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQL utilidad de esquema de clonación sin necesidad de salir de la base de datos.
- [Spawn](https://spawn.cc/) - Servicio de nube para crear copias instantáneas de bases de datos para el desarrollo y el CI. No más instalaciones locales db, recuperación instantánea a puntos de ahorro arbitrarios, copias aisladas para cada rama de características o prueba. Suministro instantáneo independientemente del tamaño de la base de datos.


## Supervisión/Estadística/Performance
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - Proporciona una visión gráfica de los datos activos de historia de sesión dentro del Oracle y PostgreSQL DB.
- [Metis](https://www.metisdata.io/product/troubleshooting) - Proporciona observabilidad y ajuste de rendimiento para bases de datos SQL.
- [Monyog](https://www.webyog.com/product/monyog) - Herramienta de Monitoreo de MySQL inofensiva y económica.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - Supervise su SQL Server en el rendimiento de Linux mediante colectos, InfluxDB y Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - Una herramienta de monitorización remota segura, sencilla y sin agentes que está llena de potentes características para que su monitoreo sea eficaz como sea posible.
- [Percona Monitoring and Management](https://github.com/percona/pmm) - Plataforma de código abierto para gestionar y supervisar el rendimiento de MySQL y MongoDB.
- [pganalyze collector](https://github.com/pganalyze/collector) - Coleccionista de estadísticas de Pganalyze para reunir métricas PostgreSQL y datos de registro.
- [pgbadger](https://github.com/dalibo/pgbadger) - Un rápido Analizador de Registro PostgreSQL.
- [pgDash](https://pgdash.io) - Medir y rastrear todos los aspectos de sus bases de datos PostgreSQL.
- [PgHero](https://github.com/ankane/pghero) - Un panel de rendimiento para PostgreSQL - cheques de salud, índices sugeridos, y más.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - Recoger y mostrar información y estadísticas de un servidor PostgreSQL en ejecución.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Herramienta todo en uno para crear fácilmente un entorno para visualizar la salud y el rendimiento de su grupo PostgreSQL.
- [pgMustard](https://www.pgmustard.com) - Una interfaz de usuario para PostgreSQL explica planes, además de consejos para mejorar el rendimiento.
- [pgstats](https://github.com/gleu/pgstats) - Recoge las estadísticas PostgreSQL, y las guarda en archivos CSV o las imprime en el stdout.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Solución flexible autocontenida PostgreSQL de monitorización/deshboarding.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - Servicio para extraer y proporcionar métricas en su base de datos PostgreSQL.
- [PostgreSQL Monitor](https://postgresmonitor.com) - Un servicio de monitoreo fácil de usar para PostgreSQL que proporciona alertas, paneles, estadísticas de consulta y recomendaciones dinámicas.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Herramienta de diagnóstico de nueva generación que permite a los usuarios hacer un análisis profundo de la salud de las bases de datos PostgreSQL.
- [Promscale](https://github.com/timescale/promscale) - El backend de observabilidad de código abierto para métricas y trazas propulsadas por SQL.
- [Releem](https://releem.com) - Herramienta de monitoreo y optimización del rendimiento para MySQL &amp; MariaDB que ofrece información práctica y automatización segura para las configuraciones erróneas, consultas lentas, problemas de esquemas y bloqueos, reduciendo el trabajo manual a escala.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - Proporciona métricas para su base de datos PostgreSQL.

### Prometeo
- [pgSCV](https://github.com/weaponry/pgscv) - Exportador de métricas para servicios relacionados con PostgreSQL y PostgreSQL.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Prometheus exporter for PostgreSQL server metrics.
- [pg_exporter](https://github.com/Vonng/pg_exporter) - Totalmente personalizable Prometheus exportador para PostgreSQL & Pgbouncer con control de ejecución fino.

### Zabbix
- [Mamonsu](https://github.com/postgrespro/mamonsu) - Agente de vigilancia de PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Plugin diseñado para trabajar con Zabbix Enterprise Monitor para proporcionar monitoreo, rendimiento y disponibilidad de informes y medición para Oracle Databases, junto con métricas de rendimiento del servidor.
- [pg_monz](https://github.com/pg-monz/pg_monz) - Esta es la plantilla de monitoreo de Zabbix para PostgreSQL Database.
- [Pyora](https://github.com/bicofino/Pyora) - Python script para monitorear Oracle Databases.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - Un plugin rápido, flexible y de desarrollo continuo para monitorear su RDBMS.


## Pruebas
- [DbFit](https://github.com/dbfit/dbfit) - Un marco de pruebas de bases de datos que permite un desarrollo fácil de procesar de su código de base de datos.
- [pgTAP](https://github.com/theory/pgtap) - Pruebas de unidad para PostgreSQL.
- [RegreSQL](https://github.com/dimitri/regresql) - Regresión Probando sus consultas SQL.
- [SQLancer](https://github.com/sqlancer/sqlancer) - Prueba automáticamente DBMS para encontrar errores lógicos en su implementación.


## HA/Failover/Sharding
- [Citus](https://github.com/citusdata/citus) - Extensión PostgreSQL que distribuye sus datos y sus consultas a través de múltiples nodos.
- [patroni](https://github.com/zalando/patroni) - Una plantilla para PostgreSQL High Disponibilidad con ZooKeeper, etcd, o Cónsul.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - Solución de alta escalabilidad para MySQL Clustering y alta disponibilidad.
- [ShardingSphere](https://github.com/apache/shardingsphere) - Motor de consulta de SQL para el endurecimiento de datos, escalado, cifrado y más - en cualquier base de datos.
- [stolon](https://github.com/sorintlab/stolon) - Gestor nativo de Nube PostgreSQL para PostgreSQL alta disponibilidad.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Extensión y servicio PostgreSQL para la falla automatizada y alta disponibilidad.
- [pglookout](https://github.com/aiven/pglookout) - Control de replicación PostgreSQL y daemon de failover.
- [pgslice](https://github.com/ankane/pgslice) - Partición PostgreSQL tan fácil como el pastel.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - Alta disponibilidad para PostgreSQL, basado en referencias industriales Pacemaker y Corosync.
- [autobase](https://github.com/vitabaks/autobase) - Open-source DBaaS que automatiza el despliegue y la gestión de grupos PostgreSQL altamente disponibles.
- [Vitess](https://github.com/vitessio/vitess) - Sistema de agrupación de bases de datos para el escalado horizontal de MySQL a través del endurecimiento generalizado.


## Kubernetes
- [KubeDB](https://kubedb.com) - Hacer que las bases de datos de grado de producción funcionen con facilidad en Kubernetes.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - El Operador PostgreSQL permite agrupaciones PostgreSQL altamente disponibles en Kubernetes (Kubernetes) propulsados por Patroni.
- [Spilo](https://github.com/zalando/spilo) - HA PostgreSQL Clusters con Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Grado empresarial, Full Stack PostgreSQL en Kubernetes.


## Configuración Tuning
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Script escrito en Perl que le permite revisar una instalación MySQL rápidamente y hacer ajustes para aumentar el rendimiento y la estabilidad.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - Herramienta online gratuita para generar un optimizado `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - Asistente de configuración PostgreSQL.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - Un script sencillo para analizar la configuración de la base de datos PostgreSQL y dar consejos de ajuste.


## DevOps
- [DBmaestro](https://www.dbmaestro.com) - Acelera ciclos de liberación &quot; apoya la agilidad en todo el ecosistema de TI.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - Realiza funciones clave de desarrollo de bases de datos dentro de su flujo de trabajo DevOps, sin comprometer la calidad, el rendimiento o la fiabilidad.


## Reporting
- [Chartbrew](https://chartbrew.com) - Crear dashboards en vivo, gráficos e informes de clientes de múltiples bases de datos y servicios.
- [Poli](https://github.com/shzlw/poli) - Una aplicación de presentación de SQL fácil de usar construida para los amantes de SQL.


## Distribución
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - Herramienta que implementa servidores de bases de datos MySQL fácilmente.
- [dbatools](https://github.com/sqlcollaborative/dbatools) - Módulo PowerShell que puede pensar como un SQL Server Management Studio de línea de comandos.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - Instalación PostgreSQL completa envasada como aplicación estándar Mac.
- [BigSQL](https://www.bigsql.org) - Una distribución amigable con el desarrollador de PostgreSQL.
- [Elephant Shed](https://github.com/credativ/elephant-shed) - Gestión de PostgreSQL basada en la web que agrupa varias utilidades y aplicaciones para uso con PostgreSQL.
- [Pigsty](https://github.com/Vonng/pigsty) - Distribución Open-Source integrada por baterías para PostgreSQL con el sistema de herramientas de observación final &quot; Database-as-Code para desarrolladores.


## Seguridad
- [Acra](https://github.com/cossacklabs/acra) - Suite de seguridad de bases de datos. Proxy de bases de datos con cifrado de campo, búsqueda a través de datos cifrados, prevención de inyecciones SQL, detección de intrusiones, puntos de miel. Admite la encriptación lado cliente y lado proxy ("transparent"). SQL, NoSQL.
- [Databunker](https://github.com/securitybunker/databunker) - Bóveda segura de RGPD especial para registros de clientes construidos sobre DB regular.
- [Inspektor](https://github.com/poonai/inspektor) - Capa de control de acceso para bases de datos. Inspektor aprovecha al agente de política abierto para tomar decisiones de política.


## SQL

### Analizadores
- [Holistic.dev](https://holistic.dev) - Servicio de detección automática para cuestiones de rendimiento, seguridad y arquitectura de bases de datos.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - Detecta automáticamente los antipatrones SQL comunes.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Invierno SQL flexible y configurable.
- [SQLLineage](https://github.com/reata/sqllineage) - SQL Lineage Analysis Tool alimentado por Python.
- [TSQLLint](https://github.com/tsqllint/tsqllint) - Una herramienta para describir, identificar y reportar la presencia de antipatrones en scripts TSQL.

### Code Generators
- [sqlc](https://sqlc.dev) - Generador de código SQL-primer que produce enlaces de tipo seguro para varios idiomas y varias bases de datos.
- [SQLDelight](https://sqldelight.github.io/sqldelight) - Generador de código SQL-primer que produce encuadernaciones de tipo seguro para Kotlin y varias bases de datos.
- [pGenie](https://pgenie.io) - Generador de código SQL-primer que produce enlaces de tipo seguro para varios idiomas y se especializa en la base de datos PostgreSQL.

### Extensiones
- [PartiQL](https://partiql.org) - Acceso compatible con SQL a datos relacionales, semiestructurados y anidados.

### Marcos
- [Apache Calcite](https://calcite.apache.org) - Marco dinámico de gestión de datos con funciones SQL avanzadas.
- [ZetaSQL](https://github.com/google/zetasql) - Marco Analyzer para SQL.

### Formatters
- [CodeBuff](https://github.com/antlr/codebuff) - Grabación bastante agnóstica a través del aprendizaje automático.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - Open Source Java SQL Formatter for many RDBMS based on JSqlParser.
- [SQL Online](https://sqlonline.in) - Una herramienta gratuita para formatear sus consultas SQL seguida de contenido para analistas.
- [pgFormatter](https://github.com/darold/pgFormatter) - Un beautificador de sintaxis SQL PostgreSQL.
- [Poor SQL](https://poorsql.com) - Formato T-SQL de código abierto y gratuito. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - Biblioteca JavaScript para las consultas SQL bastante impresas.

### Juegos
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - Un juego de aprendizaje SQL para ayudarle a recoger habilidades SQL básicas - para que pueda utilizar consultas para obtener información.
- [Querymon](https://codepip.com/games/querymon/) - Aprende a usar las consultas SQL en el Querydex, una base de datos de monstruos de común a legendario.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - Un juego de estrategia basado en el espacio implementado completamente dentro de una base de datos PostgreSQL.
- [SQL Island](https://sql-island.informatik.uni-kl.de) - Después del accidente de avión sobrevivido, estarás atrapado en SQL Island por el momento. Al avanzar en el juego, encontrará una manera de escapar de esta isla.
- [SQL Murder Mystery](https://mystery.knightlab.com) - Diseñado para ser una lección autodirigida para aprender conceptos y comandos SQL y un divertido juego para usuarios SQL experimentados para resolver un crimen intrigante.
- [SQL Police Department](https://sqlpd.com) - En SQLPD, puedes resolver crímenes mientras aprendes SQL al mismo tiempo.

### Parsers
- [General SQL Parser](https://www.sqlparser.com) - Parsing, formato, modificación y análisis para SQL.
- [jOOQ](https://github.com/jOOQ/jOOQ) - Parses SQL, lo traduce a otros dialectos, y permite las transformaciones de árboles de expresión.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - Parse una declaración SQL y traducirla en una jerarquía de clases Java.
- [libpg_query](https://github.com/pganalyze/libpg_query) - Biblioteca C para acceder al parser PostgreSQL fuera del entorno del servidor.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - Parse SQL en JSON.
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Parser SQL no validador para Python.
- [SQLGlot](https://github.com/tobymao/sqlglot) - Python puro parser SQL, transpiler y constructor.

### Über SQL
Corre las consultas SQL contra cualquier cosa
- [CloudQuery](https://github.com/cloudquery/cloudquery) - Extrae, transforma y carga sus activos en la nube en tablas PostgreSQL normalizadas.
- [csvq](https://github.com/mithrandie/csvq) - Lenguaje de consulta similar a SQL para CSV.
- [dsq](https://github.com/multiprocessio/dsq) - Herramientas de línea de comandos para ejecutar consultas SQL contra JSON, CSV, Excel, Parquet y más.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Este plugin para Eclipse Memory Analyzer permite consultar el vertedero de montones a través de SQL.
- [OctoSQL](https://github.com/cube2222/octosql) - Herramienta de consulta que le permite unir, analizar y transformar datos de múltiples bases de datos y formatos de archivo usando SQL.
- [osquery](https://github.com/osquery/osquery) - Instrumentación, monitoreo y análisis del sistema operativo de SQL.
- [Resmo](https://www.resmo.com) - Auditoría y evaluación de recursos utilizando SQL.
- [sq](https://github.com/neilotoole/sq) - Herramienta de línea de comandos que proporciona acceso al estilo jq a fuentes de datos estructuradas: bases de datos SQL o formatos de documentos como CSV o Excel. Es el amante de sql+jq.
- [Steampipe](https://github.com/turbot/steampipe) - Utilice SQL para consultar al instante sus servicios de nube (AWS, Azure, GCP y más).
- [TextQL](https://github.com/dinedal/textql) - Ejecute SQL contra texto estructurado como CSV o TSV.
- [trdsql](https://github.com/noborus/trdsql) - Herramienta CLI que puede ejecutar consultas SQL en CSV, LTSV, JSON y TBLN.
- [Trino](https://github.com/trinodb/trino) - Motor de consulta SQL distribuido diseñado para consultar conjuntos de datos grandes distribuidos en una o más fuentes de datos heterogéneas.

### Protocolo del servidor de idiomas
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL Language Server.
- [sqls](https://github.com/lighttiger2505/sqls) - SQL Language Server escrito en Go.

### Aprender
Aprender y rompecabezas para SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Puzzles SQL difíciles basados en conjuntos.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - Practica la codificación, prepárate para entrevistas y contrata.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - Un libro sobre cómo usar SQL para recuperar, filtrar y analizar datos.
- [LeetCode](https://leetcode.com/problemset/database) - Mejorar sus habilidades, ampliar sus conocimientos y prepararse para entrevistas técnicas.
- [Select Star SQL](https://selectstarsql.com) - Libre libro interactivo que pretende ser el mejor lugar en Internet para aprender SQL.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - Recursos educativos en ciencias de datos.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - Lección autodirigida para aprender conceptos y comandos SQL y un juego divertido para usuarios SQL experimentados para resolver un crimen intrigante.

### Plan
- [pev2](https://github.com/dalibo/pev2) - Un componente Vue.js para mostrar una visualización gráfica de un plan de ejecución PostgreSQL.
- [pg_flame](https://github.com/mgartner/pg_flame) - Un generador de llama para PostgreSQL `EXPLAIN ANALYZE` salida.

### Scripts
Artículos SQL útiles para diversos fines
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - Los scripts T-SQL para el largo recorrido: optimizando el almacenamiento, la documentación en el vuelo y las necesidades administrativas generales para SQL Server.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - Una colección de pequeños scripts útiles para análisis y administración de bases de datos, creada por nuestro equipo en PostgreSQL Experts.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - Consultas para medir la hinchazón estadística en índices y tablas para PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - Prueba SQL que comprueba si su base de datos sigue las reglas de <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) - Utilidades PostgreSQL útiles.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - Artículos y comandos SQL útiles <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - La falta de herramientas útiles para PostgreSQL DBAs y todos los ingenieros.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Consultas y Comandos PostgreSQL útiles.
- [TPT](https://github.com/tanelpoder/tpt-oracle) - Estos scripts sqlplus son para la optimización de rendimiento de Oracle Database y solución de problemas.


## Datos
- [dbt](https://github.com/dbt-labs/dbt-core) - Transforme sus datos simplemente escribiendo declaraciones selectas, mientras que dbt maneja convertir estas declaraciones en tablas y vistas en un almacén de datos.
- [QuickTable](https://quicktable.io) - Empodera a todos para acceder, limpiar, analizar, transformar y modelar datos sin código.

### Catálogo
- [Amundsen](https://github.com/amundsen-io/amundsen) - Aplicación impulsada por metadatos para mejorar la productividad de analistas de datos, científicos de datos e ingenieros al interactuar con datos.
- [DataHub](https://github.com/datahub-project/datahub) - La Plataforma de Metadatos para el Stack de Datos Modernos.
- [Marquez](https://github.com/MarquezProject/marquez) - Recopilar, agregar y visualizar los metadatos del ecosistema de datos.

### Licitación
- [Dwh.dev](https://dwh.dev) - Línea de datos de nexgen para Snowflake.

### Generation/Masking/Subsetting
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - Generar, ocultar (anonymize / pseudonymize) y migrar datos para el desarrollo, la prueba y la formación.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - Potente herramienta GUI para crear volúmenes masivos de datos de prueba realistas.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Herramienta GUI pequeña pero poderosa para el populación de esquemas Oracle con toneladas de datos de prueba realistas.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - Powerful GUI tool for a fast generation of meaningful test data for databases.
- [Faker](https://github.com/faker-js/faker) - Generar cantidades masivas de datos falsos en el navegador y Node.js.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - Anonimato de bases de datos y herramienta de generación de datos sintético para MySQL y PostgreSQL.
- [myanon](https://github.com/ppomes/myanon) - Anonimizador de transmisión para archivos de vertedero MySQL. Lee mysqldump de stdin, escribe versión anónimo a stdout. Soporta la piratería determinista, valores fijos, anonimato de campo JSON y extensiones Python.
- [Noisia](https://github.com/lesovsky/noisia) - Generador de volumen de trabajo dañado para PostgreSQL.
- [quick-seed](https://github.com/miit-daga/quick-seed) - Herramienta de visualización agnóstica de base de datos para generar datos de prueba realistas con soporte para PostgreSQL, MySQL, SQLite, Prisma y Drizzle ORM.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - Herramienta sencilla y potente para generar y poblar tablas seleccionadas o bases de datos enteras con datos de prueba realistas para sus aplicaciones. Generar datos de prueba para: Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift y Amazon RDS.
- [SQLable](https://sqlable.com/generator/) - Generar datos falsos en el navegador.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - El mejor amigo de DevOps para enmascaramiento de bases de datos y generación.

### Perfiladores de datos
- [Data Profiler](https://github.com/capitalone/dataprofiler) - DataProfiler es una biblioteca de Python diseñada para facilitar el análisis de datos, el monitoreo y la detección de datos sensibles.
- [Desbordante](https://github.com/desbordante/desbordante-core) - Un perfilador de datos de código abierto se centró específicamente en el descubrimiento y validación de patrones complejos en los datos.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Un perfilador de datos de código abierto para fines generales para el análisis de alto nivel de un conjunto de datos.

### Replicación
- [dtle](https://github.com/actiontech/dtle) - Servicio de transferencia de datos distribuido para MySQL.
- [Litestream](https://github.com/benbjohnson/litestream) - Replicación de streaming para SQLite.
- [pgsync](https://github.com/ankane/pgsync) - Datos de PostgreSQL sincronizados entre bases de datos.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQL al sistema de réplica PostgreSQL escrito en Python 3. El sistema utiliza la réplica mysql de la biblioteca para extraer las imágenes de fila de MySQL que se almacenan en PostgreSQL como JSONB.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Un servidor web Golang para transmitir los cambios de PostgreSQL al menos una vez a través de websockets, utilizando la función de decodificación lógica PostgreSQL.
- [repmgr](https://github.com/2ndQuadrant/repmgr) - El Gerente de Replicación más Popular para PostgreSQL.

### Compare
- [data-diff](https://github.com/datafold/data-diff) - Herramienta de línea de comandos y biblioteca de Python para difundir eficientemente filas en dos bases de datos diferentes.
- [KS DB Merge Tools](https://ksdbmerge.tools) - GUI para comparar y sincronizar el esquema DB y los datos. Para Oracle Database, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access y Cross-DBMS.

## Documentos
Documentos, artículos, manifiestos y otros materiales teóricos sobre herramientas de base de datos
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - Trate su base de datos como código.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - Una guía ilustrada amigable para diseñar e implementar su primera base de datos.

## Machine Learning
- [MindsDB](https://github.com/mindsdb/mindsdb) - Aprendizaje en la base de datos.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - Trae a SQL y a AI.

## Contribución
- ¡Sus contribuciones siempre son bienvenidas! Por favor lea el [contribution guidelines](contributing.md) primero.
