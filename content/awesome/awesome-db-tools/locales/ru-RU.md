# Подборка инструментов для баз данных [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Список инструментов баз данных, управляемых сообществом

Здесь мы соберем информацию об удивительных полезных и удивительных экспериментальных инструментах, которые упрощают работу с базами данных для DBA, DevOps, Developers и простых смертных.

Не стесняйтесь добавлять информацию о своих собственных db-инструментах или любимых сторонних db-инструментах.

Для обновлений на `awesome-db-tools` и мысли/новости о базах данных/инструментах/SQL следуйте за мной [@GraminMaksim](https://twitter.com/GraminMaksim)

## Содержание
- [Идея](#ide)
- [ГУИ](#gui)
- [КЛИ](#cli)
- [Схема](#schema)
  - [Изменения](#changes)
  - [Генерация кодов](#code-generation)
  - [Диаграммы](#diagrams)
  - [Документация](#documentations)
  - [Дизайн](#design)
  - [Образцы](#samples)
- [API](#api)
- [Прикладные платформы](#application-platforms)
- [Резервное копирование](#backup)
- [Клонирование](#cloning)
- [Мониторинг/Статистика/Исполнение](#monitoringstatisticsperformance)
  - [Прометей](#prometheus)
  - [Заббикс](#zabbix)
- [Испытание](#testing)
- [HA/Failover/Sharding](#hafailoversharding)
- [Кубернет](#kubernetes)
- [Настройка конфигурации](#configuration-tuning)
- [Девопс](#devops)
- [Отчетность](#reporting)
- [Распределение](#distributions)
- [Безопасность](#security)
- [SQL](#sql)
  - [анализаторы](#analyzers)
  - [Генераторы кода](#code-generators)
  - [Расширения](#extensions)
  - [Рамки](#frameworks)
  - [Материалы](#formatters)
  - [Игры](#games)
  - [Парсеры](#parsers)
  - [Über SQL](#über-sql)
  - [Языковой серверный протокол](#language-server-protocol)
  - [обучение](#learning)
  - [План](#plan)
  - [Сценарии](#scripts)
- [Данные](#data)
  - [Каталог](#catalog)
  - [линейность](#lineage) 
  - [Генерация/маскировка/подзагрузка](#generationmaskingsubsetting)
  - [Профиль данных](#data-profilers)
  - [репликация](#replication) 
  - [сравнивать](#compare) 
- [Документы](#papers)
- [Машинное обучение](#machine-learning)

## Идея
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) -Премьерный многоцелевой инструмент администратора для управления базами данных, контроля и разработки . ..
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) Программное обеспечение для разработчиков баз данных, DBA и аналитиков.
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - Современная IDE для аналитиков и инженеров-аналитиков с мощным скриптом и сетевой функциональностью.
- [Database .net](http://fishcodelib.com/Database.htm) - Инструмент управления несколькими базами данных с поддержкой более 20 баз данных.
- [Database Workbench](https://www.upscene.com/database_workbench/) Полная IDE для проектирования, разработки и тестирования баз данных для Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, Firebird, InterBase, SQLite и NexusDB . ..
- [DataGrip](https://www.jetbrains.com/datagrip) Кроссплатформенная IDE для баз данных и SQL от JetBrains.
- [DataStation](https://github.com/multiprocessio/datastation) Легко запрашивать, скрипт и визуализировать данные из каждой базы данных, файла и API.
- [DBeaver](https://github.com/dbeaver/dbeaver) Бесплатный универсальный менеджер баз данных и клиент SQL.
- [dbForge Edge](https://www.devart.com/dbforge/edge/) Многобазовое решение для разработки, проектирования, управления и администрирования MySQL, MariaDB, SQL Server, Oracle, баз данных PostgreSQL и различных облачных сервисов.
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) Универсальная IDE для разработки, управления и администрирования баз данных MySQL и MariaDB.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) Мощная IDE для управления, администрирования и разработки Oracle.
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) Инструмент GUI для управления и разработки баз данных и объектов . ..
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) Мощная интегрированная среда разработки для разработки SQL Server, управления, администрирования, анализа данных и отчетности.
- [DBHawk](https://www.datasparc.com/) Datasparc предлагает безопасность базы данных, управление базами данных, управление базами данных и аналитику данных - все в одном решении.
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - Modern (JavaScript/Electron framework), IDE с открытым исходным кодом для MongoDB. Он имеет функции поддержки разработки, администрирования и настройки производительности в базах данных MongoDB.
- [IBExpert](http://www.ibexpert.net/ibe) Комплексный инструмент графического интерфейса для Firebird и InterBase . ..
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) Легкий клиент для управления MySQL, MSSQL и PostgreSQL, написанный на Delphi.
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - SQL-клиент с поддержкой AI и инструмент администратора для популярных баз данных (SQLite / MySQL / PostgreSQL / и т. Д.) на Windows / macOS / Linux, дизайн таблицы поддержки, запрос, модель, синхронизация, экспорт / импорт и т. Д., Сосредоточьтесь на удобном, веселом и дружественном для разработчиков.
- [KeepTool](https://keeptool.com) Профессиональный набор инструментов для разработчиков баз данных Oracle, администраторов и продвинутых пользователей приложений.
- [MySQL Workbench](https://www.mysql.com/products/workbench) Унифицированный визуальный инструмент для архитекторов баз данных, разработчиков и DBA.
- [Navicat](https://www.navicat.com/en/products#navicat) Инструмент для разработки баз данных, который позволяет одновременно подключаться к базам данных MySQL, MariaDB, SQL Server, Oracle, PostgreSQL и SQLite из одного приложения.
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) Бесплатная интегрированная среда разработки, которая упрощает разработку и управление базой данных Oracle как в традиционных, так и в облачных приложениях.
- [pgAdmin](https://www.pgadmin.org) Самая популярная и функциональная платформа для администрирования и разработки с открытым исходным кодом для PostgreSQL, самой передовой базы данных с открытым исходным кодом в мире.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) Долгосрочная поддержка pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) IDE, специально предназначенная для разработки сохраненных программных блоков для баз данных Oracle.
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) Полный и мощный инструмент управления базами данных, администрирования и разработки для PostgreSQL.
- [Querybook](https://github.com/pinterest/querybook) Pinterest с открытым исходным кодом Big Data Querying UI, сочетающий метаданные таблицы и простой интерфейс IDE ноутбука.
- [Slashbase](https://github.com/slashbaseide/slashbase) Совместная IDE с открытым исходным кодом для ваших баз данных. Подключайтесь к своей базе данных, просматривайте данные, запускайте кучу команд SQL или делитесь SQL-запросами со своей командой прямо из своего браузера.
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) Интегрированная среда для управления любой инфраструктурой SQL, для SQL Server и баз данных Azure SQL.
- [Toad](https://www.quest.com/toad/) - Решение Premier для разработчиков, администраторов и аналитиков данных. Управление сложными изменениями базы данных с помощью единого инструмента управления базами данных.
- [Toad Edge](https://www.toadworld.com/products/toad-edge) Упрощенный инструмент разработки баз данных для MySQL и PostgreSQL.
- [TOra](https://github.com/tora-tool/tora) SQL IDE с открытым исходным кодом для Oracle, MySQL и PostgreSQL dbs.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) Создавать, администрировать, запрашивать и исследовать базы данных Valentina DB, MySQL, MariaDB, PostgreSQL и SQLite бесплатно.
- [WebDB](https://webdb.app) Бесплатная эффективная IDE базы данных. С помощью Server Discovery, ERD, Data Generator, AI, NoSQL Structure Manager, Database Versioning и многих других.


## ГУИ
- [Adminer](https://github.com/vrana/adminer) Управление базами данных в одном файле PHP.
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) Бесплатный Open Source Redis Manager. Доступен на Mac, Linux, Windows, Homebrew, Snap, winget и многое другое.
- [Antares SQL](https://github.com/antares-sql/antares) Современный, быстрый и производительный SQL-клиент с акцентом на UX. Доступен для Mac, Linux и Windows.
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) Инструмент управления данными, который позволяет работать с SQL Server, PostgreSQL, Azure SQL DB и SQL DW из Windows, macOS и Linux.
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) Редактор SQL с открытым исходным кодом и менеджер баз данных с обязательством конфиденциальности в своем заявлении о миссии.
- [Clidey WhoDB](https://github.com/clidey/whodb) Легкий исследователь баз данных с UX следующего поколения для всех SQL, NoSQL, Caches и Queues.
- [DbGate](https://github.com/dbgate/dbgate) Менеджер баз данных для MySQL, PostgreSQL, SQL Server, MongoDB, SQLite и других. Запускается под Windows, Linux, Mac или как веб-приложение.
- [DB Lens](https://github.com/dblens/app) - Open Source PostgreSQL GUI - автоматические диаграммы ER, внутренние DB Insights, использование диска, метрики производительности, использование индекса, последовательные подсчеты сканирования и многое другое.
- [DbVisualizer](https://www.dbvis.com) Универсальный инструмент баз данных для разработчиков, DBA и аналитиков.
- [JackDB](https://www.jackdb.com) Прямой доступ SQL ко всем вашим данным, где бы они ни находились.
- [Jailer](https://github.com/Wisser/Jailer) Поднастройка базы данных и инструмент для просмотра реляционных данных / клиент.
- [Malewicz](https://github.com/mgramin/malewicz) Еще один клиент для изучения схемы DB и анализа производительности, но первоначально созданный специально для взлома и расширения.
- [MissionKontrol](https://www.missionkontrol.io) - Современная админ-панель/клиент с полными правами пользователя для нетехнических пользователей.
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - Для MySQL, MariaDB и Tarantool. Разработан для Linux, но может работать на Windows.
- [OmniDB](https://github.com/OmniDB/OmniDB) - Веб-инструмент для управления базами данных.
- [Pgweb](https://github.com/sosedoff/pgweb) - Веб-браузер базы данных для PostgreSQL, написанный на Go и работающий на машинах macOS, Linux и Windows.
- [phpLiteAdmin](https://www.phpliteadmin.org) Web-инструмент управления базами данных SQLite, написанный на PHP с поддержкой SQLite3 и SQLite2.
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) Веб-интерфейс для MySQL и MariaDB.
- [psequel](http://www.psequel.com) Обеспечивает чистый и простой интерфейс для быстрого выполнения общих задач PostgreSQL.
- [PopSQL](https://popsql.com) Современный, совместный редактор SQL для вашей команды.
- [Postico](https://eggerapps.at/postico) Современный клиент PostgreSQL для Mac.
- [Robo 3T](https://github.com/Studio3T/robomongo) Кроссплатформенный инструмент управления MongoDB, ориентированный на Shell.
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) Управление базами данных MySQL/MariaDB для macOS.
- [Sequel Pro](https://github.com/sequelpro/sequelpro) Быстрое, простое в использовании приложение для управления базами данных Mac для работы с базами данных MySQL и MariaDB.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) Графический интерфейс поддерживает все функции SQLite.
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) TUI для просмотра баз данных SQLite, написанных на Go.
- [sqlpad](https://github.com/rickbergfalk/sqlpad) Веб-редактор SQL работает в вашем собственном частном облаке.
- [SQLPro](https://www.macpostgresclient.com) Простой, мощный менеджер PostgreSQL для macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) Графический клиент SQL, написанный на Java, который позволит вам просматривать структуру базы данных, совместимой с JDBC, просматривать данные в таблицах, выдавать команды SQL и т. Д.
- [SQLTools](https://github.com/mtxr/vscode-sqltools) Управление базами данных для VSCode.
- [SQLyog](https://www.webyog.com/product/sqlyog) Самый полный и простой в использовании MySQL GUI.
- [Tabix](https://github.com/tabixio/tabix) SQL Editor & Open Source - простой бизнес-аналитика для Clickhouse.
- [TablePlus](https://github.com/TablePlus/TablePlus) Современный, родной и дружественный инструмент графического интерфейса для реляционных баз данных: MySQL, PostgreSQL, SQLite и многое другое.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - используйте базы данных PostgreSQL из любого места, с богатым, молниеносным веб-интерфейсом AJAX.
- [Query.me](https://query.me) Совместный редактор SQL в формате Notebook. Ссылайтесь на результаты запросов с помощью JINJA, визуализируйте данные, расписание и экспорт.


## КЛИ
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) Подключитесь к базе данных для выдачи команд SQL в IPython или IPython Notebook.
- [iredis](https://github.com/laixintao/iredis) Cli for Redis с автозаполнением и синтаксическим подсветкой.
- [pgcenter](https://github.com/lesovsky/pgcenter) - Лучший инструмент администратора для PostgreSQL.
- [pg_activity](https://github.com/julmon/pg_activity) - Топ-подобное приложение для мониторинга активности сервера PostgreSQL.
- [pg_top](https://github.com/markwkm/pg_top) - Топ для PostgreSQL.
- [pspg](https://github.com/okbob/pspg) - PostgreSQL Pager.
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) Linter для опасных моделей миграции PostgreSQL. Он легко работает с файлами PostgreSQL SQL и изначально интегрируется с проектами с использованием Diesel и SQLx.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) Oracle SQL Developer Command Line (SQLcl) — бесплатный интерфейс командной строки для Oracle Database.
- [sqlite-utils](https://github.com/simonw/sqlite-utils) Инструменты CLI для манипулирования файлами базы данных SQLite - вставка данных, запуск запросов, создание индексов, настройка полнотекстового поиска и многое другое.
- [SQLLine](https://github.com/julianhyde/sqlline) Оболочка командной строки для выдачи SQL в реляционные базы данных через JDBC.
- [usql](https://github.com/xo/usql) Универсальный интерфейс командной строки для PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server и многих других баз данных, включая NoSQL и нереляционные базы данных!

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) Инструмент CLI для сервиса AWS Athena, который может выполнять автозаполнение и подсветку синтаксиса.
- [litecli](https://github.com/dbcli/litecli) CLI для баз данных SQLite с автозаполнением и подсветкой синтаксиса.
- [mssql-cli](https://github.com/dbcli/mssql-cli) Клиент командной строки для SQL Server с автозаполнением и подсветкой синтаксиса.
- [mycli](https://github.com/dbcli/mycli) Терминальный клиент для MySQL с автозаполнением и синтаксисом.
- [pgcli](https://github.com/dbcli/pgcli) PostgreSQL CLI с автозаполнением и подсветкой синтаксиса.
- [vcli](https://github.com/dbcli/vcli) Vertica CLI с автозаполнением и подсветкой синтаксиса.


## Схема

### Изменения
- [2bass](https://github.com/CourseOrchestra/2bass) - Инструмент конфигурации базы данных в качестве кода, который использует концепцию идемпотентных DDL-скриптов.
- [Atlas](https://github.com/ariga/atlas) Проверять и применять изменения в схеме базы данных.
- [Bytebase](https://github.com/bytebase/bytebase) - Веб-интерфейс, нулевая конфигурация, изменение схемы базы данных без зависимости и инструмент управления версиями для команд.
- [flyway](https://github.com/flyway/flyway) - Инструмент миграции баз данных.
- [gh-ost](https://github.com/github/gh-ost) Онлайн-миграция схем для MySQL.
- [liquibase](https://github.com/liquibase/liquibase) Независимая от базы данных библиотека для отслеживания, управления и применения изменений схемы базы данных.
- [migra](https://github.com/djrobstep/migra) - Как дифф, но для схем PostgreSQL.
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) Управление миграцией баз данных Node.js построено исключительно для PostgreSQL. (Но также может использоваться для других DB, соответствующих стандарту SQL, например, CockroachDB.)
- [pg-osc](https://github.com/shayonj/pg-osc) - Простой инструмент CLI для внесения изменений схемы простоя и заправок в PostgreSQL.
- [Prisma Migrate](https://github.com/prisma/migrate) Декларативный инструмент миграции схемы базы данных, который использует декларативный синтаксис моделирования данных для описания схемы базы данных.
- [Pyrseas](https://github.com/perseas/Pyrseas) Предоставляет утилиты для описания схемы базы данных PostgreSQL как YAML.
- [Reshape](https://github.com/fabianlindfors/reshape) - Простой в использовании инструмент миграции с нулевым временем простоя для Postgres.
- [SchemaHero](https://github.com/schemahero/schemahero) Оператор Kubernetes для декларативного управления схемами баз данных (гитопы для схем баз данных).
- [Skeema](https://github.com/skeema/skeema) - Декларативная система управления чисто-SQL схемами для MySQL и MariaDB, с поддержкой шардинга и внешних онлайн-инструментов изменения схем.
- [Sqitch](https://github.com/sqitchers/sqitch) - Разумное управление изменениями на основе баз данных для разработки без рамок и надежного развертывания.
- [sqldef](https://github.com/k0kubun/sqldef) Управление импотентной схемой для MySQL, PostgreSQL и других.
- [yuniql](https://github.com/rdagumampan/yuniql) Еще один инструмент для редактирования схем и миграции, созданный с помощью .NET Core 3.0+ и, надеюсь, лучше.

### Генерация кодов
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) Выводы SQL DDL (Data Definition Language) из данных таблицы.
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - Командная строка используется для экспорта Oracle schema для набора скриптов ddl init с возможностью фильтрации нежелательной информации, раздельного DDL в разных файлах, вывода симпатичного формата.

### Диаграммы
- [Azimutt](https://github.com/azimuttapp/azimutt) Инструмент визуализации Entity Relationship diagram (ERD) с различными фильтрами и входами, чтобы помочь понять схему базы данных.
- [ChartDB](https://github.com/chartdb/chartdb) Бесплатный редактор диаграмм баз данных с открытым исходным кодом, визуализируйте и проектируйте свой DB с помощью одного запроса.
- [DrawDB](https://github.com/drawdb-io/drawdb) Бесплатный, простой и интуитивно понятный онлайн-инструмент проектирования баз данных и генератор SQL. 
- [DrawSQL](https://drawsql.app) Онлайн-редактор диаграмм схем баз данных с импортом SQL, генерацией ИИ и командным сотрудничеством в режиме реального времени.
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - Инструмент генерации диаграмм сущностей.
- [ERD Lab](https://www.erdlab.io/) Бесплатный инструмент диаграммы отношений между объектами на основе облака (ERD), созданный для разработчиков.
- [Liam ERD](https://github.com/liam-hq/liam) Инструмент с открытым исходным кодом, который генерирует красивые и легко читаемые диаграммы отношений с объектами из вашей базы данных и ORM.
- [QuickDBD](https://www.quickdatabasediagrams.com/) Простой онлайн-инструмент для быстрого рисования диаграмм баз данных.

### Документация
- [dbdocs](https://dbdocs.io/) Создание веб-документации базы данных с использованием кода DSL.
- [DBML](https://github.com/holistics/dbml) Язык разметки баз данных, предназначенный для определения и документирования структур баз данных.
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) Бесплатный инструмент обнаружения и понимания схемы базы данных.
- [Schema Spy](https://github.com/schemaspy/schemaspy) - Создание базы данных для HTML-документации, включая диаграммы взаимоотношений с объектами.
- [tbls](https://github.com/k1LoW/tbls) CI-Friendly инструмент для документирования базы данных, написанной на Go.

### Дизайн
- [Database Design](https://github.com/alextanhongpin/database-design) Полезные советы для разработки надежной схемы базы данных.
- [DBDiagram](https://dbdiagram.io) Бесплатный, простой инструмент для рисования диаграмм ER, просто написав код.
- [DbSchema](https://dbschema.com/) Универсальный разработчик баз данных для управления нестандартными схемами, документации по схемам, проектирования в команде и развертывания в нескольких базах данных. DbSchema имеет инструменты для написания и выполнения запросов, изучения данных, генерации данных и построения отчетов.
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) Простое в использовании программное обеспечение для моделирования баз данных для высококачественных моделей данных. Это комплексное решение для моделирования данных для разработчиков и архитекторов данных.
- [Moon Modeler](https://www.datensen.com) Инструмент моделирования данных для noSQL и реляционных баз данных. Доступен для Windows, Linux и macOS.
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) Мощный и экономически эффективный инструмент проектирования баз данных, который помогает создавать высококачественные концептуальные, логические и физические модели данных.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) Бесплатный графический инструмент, который повышает производительность и упрощает задачи моделирования данных.
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) Инструмент для моделирования данных, разработанный для PostgreSQL.
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - Онлайн инструмент построения диаграмм SQL.

### Образцы
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - Схемы выборки для базы данных Oracle.


## API
Создание API для ваших данных
- [Datasette](https://github.com/simonw/datasette) Инструмент для изучения и публикации данных.
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - REST API с открытым исходным кодом для мобильных, веб-приложений и IoT-приложений.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) Превратите несколько источников данных в один GraphQL API.
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) Блестящие быстрые, мгновенные API GraphQL в реальном времени на PostgreSQL с тонким зернистым контролем доступа, также запускают веб-хуки по событиям базы данных.
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) REST API для любой базы данных, поддерживаемой JDBC, клон PostgREST, написанный на Java.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) Приложение среднего уровня Java, ORDS отображает глаголы HTTP (GET, POST, PUT, DELETE и т. Д.) в транзакции базы данных и возвращает любые результаты, отформатированные с использованием JSON.
- [Prisma](https://github.com/prismagraphql/prisma) Превратите свою базу данных в API GraphQL в реальном времени.
- [PostGraphile](https://github.com/graphile/postgraphile) Мгновенное создание сервера API GraphQL, указав PostGraphile в существующей базе данных PostgreSQL.
- [PostgREST](https://github.com/PostgREST/postgrest) REST API для любой базы данных PostgreSQL.
- [prest](https://github.com/prest/prest) Это способ обслуживания RESTful API из любых баз данных, написанных на Go.
- [Remult](https://github.com/remult/remult) Сквозной тип-безопасный CRUD через REST API для вашей базы данных с мелкозернистым контролем доступа.
- [restSQL](https://github.com/restsql/restsql) Генератор SQL с Java и HTTP API, использует простой RESTful HTTP API с XML или JSON сериализацией.
- [resquel](https://github.com/formio/resquel) Легко преобразуйте базу данных SQL в REST API.
- [sandman2](https://github.com/jeffknupp/sandman2) Автоматически генерируйте сервис RESTful API для вашей устаревшей базы данных.
- [soul](https://github.com/thevahidal/soul) Автоматический SQLite RESTful и API-сервер в реальном времени.
- [VulcanSQL](https://github.com/Canner/vulcan-sql) Напишите шаблонный SQL для автоматического раскрытия RESTful API из базы данных / хранилища данных / озера данных.

## Прикладные платформы
Платформы с низким кодом и без кода для создания приложений
- [Appsmith](https://github.com/appsmithorg/appsmith) Мощный фреймворк с низким кодом с открытым исходным кодом для создания внутренних приложений очень быстро.
- [Budibase](https://github.com/Budibase/budibase) Низкокодовая платформа для создания внутренних приложений за считанные минуты.
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Низкокодовая внутренняя платформа для создания инструментов.
- [Nhost](https://github.com/nhost/nhost) Альтернатива Open Source Firebase с GraphQL.
- [Saltcorn](https://github.com/saltcorn/saltcorn) - Open source no-code builder для веб-приложений баз данных. Server and drag-and-drop UI builder, данные, хранящиеся в PostgreSQL или SQLite.
- [SQLPage](https://github.com/sqlpage/SQLPage) Быстрый SQL-only Data Application Builder. Автоматически создавать пользовательский интерфейс поверх SQL-запросов.
- [Tooljet](https://github.com/ToolJet/ToolJet) Платформа с низким кодом с открытым исходным кодом для создания внутренних инструментов.


## Резервное копирование
- [BaRMan](https://github.com/2ndquadrant-it/barman) Менеджер резервного копирования и восстановления для PostgreSQL.
- [Databasus](https://github.com/databasus/databasus) Инструмент для регулярных резервных копий PostgreSQL через веб-интерфейс с внешними хранилищами (локальными, S3, FTP, Google Drive и т. Д.), Уведомления (webhook, Discord, Slack и т. Д.) и управление командой.
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) Надежное резервное копирование и восстановление PostgreSQL.
- [pgcopydb](https://github.com/dimitri/pgcopydb) Копировать базу данных PostgreSQL на целевой сервер PostgreSQL (pg)_мусор | пг_Восстановить на стероидах.
- [pg_probackup](https://github.com/postgrespro/pg_probackup) Менеджер резервного копирования и восстановления для PostgreSQL.
- [Portabase](https://github.com/Portabase/portabase) Агентская платформа для резервного копирования и восстановления PostgreSQL с децентрализованным исполнением и централизованной оркестровкой. 

## Клонирование
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) Мгновенное тонкое клонирование для PostgreSQL для масштабирования процесса разработки.
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) Утилита схемы клона PostgreSQL без необходимости выходить за пределы базы данных.
- [Spawn](https://spawn.cc/) Облачный сервис для создания мгновенных копий баз данных для разработки и CI. Больше никаких локальных установок db, мгновенное восстановление до произвольных точек сохранения, изолированные копии для каждого ветви функции или теста. Мгновенное резервирование независимо от размера базы данных.


## Мониторинг/Статистика/Исполнение
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) Предоставляет графическое представление активных данных истории сеансов в Oracle и PostgreSQL DB.
- [Metis](https://www.metisdata.io/product/troubleshooting) Обеспечивает настройку видимости и производительности для баз данных SQL.
- [Monyog](https://www.webyog.com/product/monyog) Безагентный и экономически эффективный инструмент мониторинга MySQL.
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) Мониторинг SQL Server на производительности Linux с использованием собранных, InfluxDB и Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) Безопасный, простой и не имеющий агентов инструмент удаленного мониторинга сервера, который имеет мощные функции, чтобы сделать ваш мониторинг максимально эффективным.
- [Percona Monitoring and Management](https://github.com/percona/pmm) Платформа с открытым исходным кодом для управления и мониторинга производительности MySQL и MongoDB.
- [pganalyze collector](https://github.com/pganalyze/collector) - сборщик статистики Pganalyze для сбора метрик PostgreSQL и данных журнала.
- [pgbadger](https://github.com/dalibo/pgbadger) - Быстрый анализ журнала PostgreSQL.
- [pgDash](https://pgdash.io) Измеряйте и отслеживайте каждый аспект ваших баз данных PostgreSQL.
- [PgHero](https://github.com/ankane/pghero) - Панель мониторинга производительности для PostgreSQL - проверки здоровья, предлагаемые индексы и многое другое.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) Сбор и отображение информации и статистики с запущенного сервера PostgreSQL.
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) Инструмент «все в одном», позволяющий легко создать среду для визуализации здоровья и производительности кластера PostgreSQL.
- [pgMustard](https://www.pgmustard.com) Пользовательский интерфейс для PostgreSQL объясняет планы, а также советы по улучшению производительности.
- [pgstats](https://github.com/gleu/pgstats) Собирает статистику PostgreSQL и либо сохраняет их в файлах CSV, либо печатает на стаде.
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) Гибкое автономное решение PostgreSQL для мониторинга/дашбординга.
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) Сервис для извлечения и предоставления метрик в вашей базе данных PostgreSQL.
- [PostgreSQL Monitor](https://postgresmonitor.com) - Простой в использовании сервис мониторинга PostgreSQL, предоставляющий оповещения, панели инструментов, статистику запросов и динамические рекомендации.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) Диагностический инструмент нового поколения, который позволяет пользователям проводить глубокий анализ состояния баз данных PostgreSQL.
- [Promscale](https://github.com/timescale/promscale) - Бэкэнд видимости с открытым исходным кодом для метрик и следов, основанный на SQL.
- [Releem](https://releem.com) Инструмент мониторинга и оптимизации производительности для MySQL & MariaDB, который обеспечивает действенную информацию и безопасную автоматизацию для неправильных конфигураций, медленных запросов, проблем с схемами и тупиков, уменьшая ручную работу в масштабе.
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) Предоставляет метрики для вашей базы данных PostgreSQL.

### Прометей
- [pgSCV](https://github.com/weaponry/pgscv) - Экспортер метрик для услуг PostgreSQL и PostgreSQL.
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) Экспортер Prometheus для серверных метрик PostgreSQL.
- [pg_exporter](https://github.com/Vonng/pg_exporter) Полностью настраиваемый экспортер Prometheus для PostgreSQL & Pgbouncer с мелкозернистым контролем исполнения.

### Заббикс
- [Mamonsu](https://github.com/postgrespro/mamonsu) - Мониторинговый агент PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) Плагин предназначен для работы с Zabbix Enterprise Monitor для обеспечения многоуровневого мониторинга, отчетности о производительности и доступности и измерения для баз данных Oracle, а также показателей производительности сервера.
- [pg_monz](https://github.com/pg-monz/pg_monz) Это шаблон мониторинга Zabbix для базы данных PostgreSQL.
- [Pyora](https://github.com/bicofino/Pyora) Python для мониторинга баз данных Oracle.
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) Быстрый, гибкий и постоянно развивающийся плагин для мониторинга СУБД.


## Испытание
- [DbFit](https://github.com/dbfit/dbfit) - Основы тестирования баз данных, которые поддерживают легкую разработку программного кода базы данных.
- [pgTAP](https://github.com/theory/pgtap) - Единичный тест для PostgreSQL.
- [RegreSQL](https://github.com/dimitri/regresql) Регрессионное тестирование SQL-запросов.
- [SQLancer](https://github.com/sqlancer/sqlancer) Автоматически тестируйте СУБД, чтобы найти логические ошибки в их реализации.


## HA/Failover/Sharding
- [Citus](https://github.com/citusdata/citus) Расширение PostgreSQL, которое распределяет ваши данные и ваши запросы по нескольким узлам.
- [patroni](https://github.com/zalando/patroni) Шаблон для PostgreSQL High Availability с ZooKeeper и т.д.
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) Решение с высокой масштабируемостью для кластеризации MySQL и высокой доступностью.
- [ShardingSphere](https://github.com/apache/shardingsphere) Распределенный механизм SQL-транзакций и запросов для разделения данных, масштабирования, шифрования и многого другого - в любой базе данных.
- [stolon](https://github.com/sorintlab/stolon) Нативный облачный менеджер PostgreSQL для высокой доступности PostgreSQL.
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Расширение и сервис PostgreSQL для автоматического отказа и высокой доступности.
- [pglookout](https://github.com/aiven/pglookout) - Мониторинг репликации PostgreSQL и отказоустойчивый демон.
- [pgslice](https://github.com/ankane/pgslice) - Перегородка PostgreSQL так же проста, как пирог.
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - Высокая доступность для PostgreSQL, основанная на отраслевых ссылках Pacemaker и Corosync.
- [autobase](https://github.com/vitabaks/autobase) DBaaS с открытым исходным кодом, который автоматизирует развертывание и управление высокодоступными кластерами PostgreSQL.
- [Vitess](https://github.com/vitessio/vitess) - Система кластеризации баз данных для горизонтального масштабирования MySQL посредством обобщенного шардинга.


## Кубернет
- [KubeDB](https://kubedb.com) - Упрощение работы баз данных производственного класса на Kubernetes.
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) Оператор PostgreSQL обеспечивает высокую доступность кластеров PostgreSQL на Kubernetes (Kubernetes), работающих на Patroni.
- [Spilo](https://github.com/zalando/spilo) - Кластеры HA PostgreSQL с Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Enterprise-grade, Full Stack PostgreSQL на Kubernetes.


## Настройка конфигурации
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) Сценарий, написанный на Perl, который позволяет быстро просматривать установку MySQL и вносить коррективы для повышения производительности и стабильности.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) Бесплатный онлайн-инструмент для создания оптимизированного `postgresql.conf`.
- [pgtune](https://github.com/gregs1104/pgtune) - Мастер конфигурации PostgreSQL.
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) Простой скрипт для анализа конфигурации базы данных PostgreSQL и предоставления рекомендаций по настройке.


## Девопс
- [DBmaestro](https://www.dbmaestro.com) Ускоряет циклы выпуска и поддерживает гибкость во всей ИТ-экосистеме.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) Выполняет ключевые функции разработки баз данных в рабочем процессе DevOps без ущерба для качества, производительности или надежности.


## Отчетность
- [Chartbrew](https://chartbrew.com) Создавайте живые панели инструментов, диаграммы и отчеты клиентов из нескольких баз данных и служб.
- [Poli](https://github.com/shzlw/poli) Простое в использовании приложение для отчетности SQL, созданное для любителей SQL.


## Распределение
- [DBdeployer](https://github.com/datacharmer/dbdeployer) Инструмент, который легко развертывает серверы баз данных MySQL.
- [dbatools](https://github.com/sqlcollaborative/dbatools) Модуль PowerShell, который может показаться вам командной строкой SQL Server Management Studio.
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) Полнофункциональная установка PostgreSQL, упакованная в стандартное приложение Mac.
- [BigSQL](https://www.bigsql.org) - Распределение PostgreSQL для разработчиков.
- [Elephant Shed](https://github.com/credativ/elephant-shed) - Веб-интерфейс управления PostgreSQL, который объединяет несколько утилит и приложений для использования с PostgreSQL.
- [Pigsty](https://github.com/Vonng/pigsty) Battery-Included Open-Source Distribution for PostgreSQL с предельной наблюдаемостью и набором инструментов Database-as-Code для разработчиков.


## Безопасность
- [Acra](https://github.com/cossacklabs/acra) - Комплект безопасности базы данных. Прокси-сервер базы данных с полевым шифрованием, поиском по зашифрованным данным, предотвращением SQL-инъекций, обнаружением вторжений, медовыми пятнами. Поддерживает шифрование на стороне клиента и прокси («прозрачное»). SQL, NoSQL.
- [Databunker](https://github.com/securitybunker/databunker) Специальное безопасное хранилище GDPR для записей клиентов, построенное поверх обычного DB.
- [Inspektor](https://github.com/poonai/inspektor) Уровень контроля доступа для баз данных. Inspektor использует открытого политического агента для принятия политических решений.


## SQL

### анализаторы
- [Holistic.dev](https://holistic.dev) - Автоматическая служба обнаружения проблем с производительностью базы данных, безопасностью и архитектурой.
- [SQLCheck](https://github.com/jarulraj/sqlcheck) Автоматически обнаруживает общие антипаттерны SQL.
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - Диалектически гибкий и настраиваемый SQL linter.
- [SQLLineage](https://github.com/reata/sqllineage) SQL Lineage Analysis Tool на базе Python.
- [TSQLLint](https://github.com/tsqllint/tsqllint) Инструмент для описания, идентификации и сообщения о наличии антипаттернов в скриптах TSQL.

### Генераторы кода
- [sqlc](https://sqlc.dev) SQL-генератор кода, производящий безопасные привязки для различных языков и различных баз данных.
- [SQLDelight](https://sqldelight.github.io/sqldelight) SQL-генератор кода, производящий безопасные для типа связывания для Kotlin и различных баз данных.
- [pGenie](https://pgenie.io) SQL-генератор кода, производящий безопасные для типа привязки для различных языков и специализирующийся на базе данных PostgreSQL.

### Расширения
- [PartiQL](https://partiql.org) SQL-совместимый доступ к реляционным, полуструктурированным и вложенным данным.

### Рамки
- [Apache Calcite](https://calcite.apache.org) Динамическая структура управления данными с расширенными функциями SQL.
- [ZetaSQL](https://github.com/google/zetasql) Analyzer Framework для SQL.

### Материалы
- [CodeBuff](https://github.com/antlr/codebuff) Языко-агностическая симпатичная печать через машинное обучение.
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) Open Source Java SQL Формат для многих СУБД на основе JSqlParser.
- [SQL Online](https://sqlonline.in) Бесплатный инструмент для форматирования SQL-запросов с последующим контентом для аналитиков.
- [pgFormatter](https://github.com/darold/pgFormatter) - Синтаксисный усилитель PostgreSQL SQL.
- [Poor SQL](https://poorsql.com) Мгновенное бесплатное и открытое форматирование T-SQL. 
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) JavaScript библиотека для красивой печати SQL запросов.

### Игры
- [Lost at SQL](https://lost-at-sql.therobinlord.com) SQL обучающая игра, которая поможет вам подобрать базовые навыки SQL, чтобы вы могли использовать запросы для получения информации.
- [Querymon](https://codepip.com/games/querymon/) Научитесь использовать SQL-запросы в Querydex, базе данных монстров от обычных до легендарных.
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) Космическая стратегическая игра, полностью реализованная в базе данных PostgreSQL.
- [SQL Island](https://sql-island.informatik.uni-kl.de) После авиакатастрофы вы застрянете на острове SQL. Достигнув прогресса в игре, вы найдете способ сбежать с этого острова.
- [SQL Murder Mystery](https://mystery.knightlab.com) Предназначен как самостоятельный урок для изучения концепций и команд SQL, так и забавная игра для опытных пользователей SQL для решения интригующего преступления.
- [SQL Police Department](https://sqlpd.com) В SQLPD вы можете раскрывать преступления, одновременно изучая SQL.

### Парсеры
- [General SQL Parser](https://www.sqlparser.com) Парсирование, форматирование, модификация и анализ для SQL.
- [jOOQ](https://github.com/jOOQ/jOOQ) - Parses SQL, переводит его на другие диалекты и допускает преобразования деревьев экспрессии.
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) Парсирует SQL-заявление и переводит его в иерархию классов Java.
- [libpg_query](https://github.com/pganalyze/libpg_query) Библиотека C для доступа к парсеру PostgreSQL за пределами серверной среды.
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - Переведите SQL в JSON.
- [sqlparse](https://github.com/andialbrecht/sqlparse) Неподтвержденный SQL-парсер для Python.
- [SQLGlot](https://github.com/tobymao/sqlglot) - Pure Python SQL parser, transpiler и builder.

### Über SQL
Запуск SQL-запросов для чего угодно
- [CloudQuery](https://github.com/cloudquery/cloudquery) Экстракты, преобразования и загрузки облачных активов в нормализованные таблицы PostgreSQL.
- [csvq](https://github.com/mithrandie/csvq) SQL-подобный язык запросов для CSV.
- [dsq](https://github.com/multiprocessio/dsq) Инструмент командной строки для запуска SQL-запросов против JSON, CSV, Excel, Parquet и других.
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) Этот плагин для Eclipse Memory Analyzer позволяет запрашивать кучу демпинга через SQL.
- [OctoSQL](https://github.com/cube2222/octosql) Инструмент запроса, который позволяет объединять, анализировать и преобразовывать данные из нескольких баз данных и форматов файлов с использованием SQL.
- [osquery](https://github.com/osquery/osquery) - Инструменты операционной системы на базе SQL, мониторинг и аналитика.
- [Resmo](https://www.resmo.com) Аудит и оценка ресурсов с использованием SQL.
- [sq](https://github.com/neilotoole/sq) Инструмент командной строки, обеспечивающий доступ к структурированным источникам данных в стиле jq: базам данных SQL или форматам документов, таким как CSV или Excel. Это детище любви sql+jq.
- [Steampipe](https://github.com/turbot/steampipe) Используйте SQL для мгновенного запроса облачных сервисов (AWS, Azure, GCP и многое другое).
- [TextQL](https://github.com/dinedal/textql) Выполнять SQL против структурированного текста, такого как CSV или TSV.
- [trdsql](https://github.com/noborus/trdsql) Инструмент CLI, который может выполнять SQL-запросы на CSV, LTSV, JSON и TBLN.
- [Trino](https://github.com/trinodb/trino) Распределенный механизм запросов SQL, предназначенный для запроса больших наборов данных, распределенных по одному или нескольким гетерогенным источникам данных.

### Языковой серверный протокол
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) SQL Language Server.
- [sqls](https://github.com/lighttiger2505/sqls) SQL Language Server, написанный на Go.

### обучение
Обучение и головоломки для SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - Трудные наборные головоломки SQL.
- [Hackerrank](https://www.hackerrank.com/domains/sql) - Практикуйте кодирование, готовьтесь к собеседованию и нанимайтесь.
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) Книга о том, как использовать SQL для извлечения, фильтрации и анализа данных.
- [LeetCode](https://leetcode.com/problemset/database) Повысьте свои навыки, расширьте свои знания и подготовьтесь к техническим интервью.
- [Select Star SQL](https://selectstarsql.com) Бесплатная интерактивная книга, которая стремится быть лучшим местом в Интернете для изучения SQL.
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - Учебные ресурсы по науке о данных.
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) Самоуправляемый урок для изучения концепций и команд SQL и забавная игра для опытных пользователей SQL для решения интригующего преступления.

### План
- [pev2](https://github.com/dalibo/pev2) Компонент Vue.js для графической визуализации плана выполнения PostgreSQL.
- [pg_flame](https://github.com/mgartner/pg_flame) Генератор фламграфа для PostgreSQL `EXPLAIN ANALYZE` выход.

### Сценарии
Полезные SQL-скрипты для различных целей
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) Скрипты T-SQL для длительного использования: оптимизация хранения, документация на лету и общие административные потребности для SQL Server.
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) Коллекция полезных скриптов для анализа и администрирования баз данных, созданных нашей командой в PostgreSQL Experts.
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) Запросы для измерения статистического раздувания в индексах и таблицах для PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) SQL-тест, который проверяет, следует ли ваша база данных правилам <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils](https://github.com/dataegret/pg-utils) Полезные утилиты PostgreSQL.
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) Полезные SQL-скрипты и команды <timescale.com>.
- [postgres_dba](https://github.com/NikolayS/postgres_dba) Недостающий набор полезных инструментов для PostgreSQL DBA и всех инженеров.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) Полезные запросы и команды PostgreSQL.
- [TPT](https://github.com/tanelpoder/tpt-oracle) Эти скрипты sqlplus предназначены для оптимизации производительности Oracle Database и устранения неполадок.


## Данные
- [dbt](https://github.com/dbt-labs/dbt-core) Преобразуйте свои данные, просто написав отдельные заявления, в то время как dbt обрабатывает превращение этих заявлений в таблицы и просмотры в хранилище данных.
- [QuickTable](https://quicktable.io) Позволяет каждому получить доступ, очистить, проанализировать, преобразовать и смоделировать данные без кода.

### Каталог
- [Amundsen](https://github.com/amundsen-io/amundsen) Приложение, основанное на метаданных, для повышения производительности аналитиков данных, ученых и инженеров при взаимодействии с данными.
- [DataHub](https://github.com/datahub-project/datahub) Платформа метаданных для современного стека данных.
- [Marquez](https://github.com/MarquezProject/marquez) Собирать, агрегировать и визуализировать метаданные экосистемы данных.

### линейность
- [Dwh.dev](https://dwh.dev) - Линия данных Nexgen для Снежинки.

### Генерация/маскировка/подзагрузка
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) Генерировать, запутывать (анонимизировать / псевдонимизировать) и мигрировать данные для разработки, тестирования и обучения.
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) Мощный инструмент графического интерфейса для создания огромных объемов реалистичных тестовых данных.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) Небольшой, но мощный инструмент графического интерфейса для заполнения схем Oracle тоннами реалистичных тестовых данных.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) Мощный инструмент графического интерфейса для быстрого поколения значимых тестовых данных для баз данных.
- [Faker](https://github.com/faker-js/faker) Создавайте огромное количество поддельных данных в браузере и Node.js.
- [Greenmask](https://github.com/GreenmaskIO/greenmask) Анонимизация баз данных и синтетический инструмент генерации данных для MySQL и PostgreSQL.
- [myanon](https://github.com/ppomes/myanon) - Потоковый анонимайзер для файлов сброса MySQL. Читает mysqldump от stdin, пишет анонимную версию к stdout. Поддерживает детерминированное хеширование, фиксированные значения, анонимизацию поля JSON и расширения Python.
- [Noisia](https://github.com/lesovsky/noisia) Вредный генератор рабочей нагрузки для PostgreSQL.
- [quick-seed](https://github.com/miit-daga/quick-seed) Инструмент для создания реалистичных тестовых данных с поддержкой PostgreSQL, MySQL, SQLite, Prisma и Drizzle ORM.
- [SB Data Generator](https://soft-builder.com/sb-data-generator) Простой и мощный инструмент для создания и заполнения выбранных таблиц или целых баз данных с реалистичными тестовыми данными для ваших приложений. Генерировать тестовые данные для: Oracle, MS SQL Server, MySQL, PostgreSQL, Firebird, SQLite, Azure SQL Database, Amazon Redshift и Amazon RDS.
- [SQLable](https://sqlable.com/generator/) Создавайте поддельные данные в браузере.
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) Лучший друг DevOps для маскировки и генерации баз данных.

### Профиль данных
- [Data Profiler](https://github.com/capitalone/dataprofiler) DataProfiler - это библиотека Python, предназначенная для облегчения анализа данных, мониторинга и обнаружения конфиденциальных данных.
- [Desbordante](https://github.com/desbordante/desbordante-core) Профильер данных с открытым исходным кодом, специально ориентированный на обнаружение и валидацию сложных шаблонов в данных.
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - Профильер данных с открытым исходным кодом общего назначения для высокоуровневого анализа набора данных.

### репликация
- [dtle](https://github.com/actiontech/dtle) Распределенная служба передачи данных для MySQL.
- [Litestream](https://github.com/benbjohnson/litestream) Потоковая репликация для SQLite.
- [pgsync](https://github.com/ankane/pgsync) Синхронизация данных PostgreSQL между базами данных.
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) MySQL - система реплик PostgreSQL, написанная на Python 3. Система использует библиотеку mysql-репликации для извлечения изображений строк из MySQL, которые хранятся в PostgreSQL как JSONB.
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) Веб-сервер Golang для потоковой передачи изменений PostgreSQL по крайней мере один раз через веб-сокеты, используя функцию логического декодирования PostgreSQL.
- [repmgr](https://github.com/2ndQuadrant/repmgr) Самый популярный менеджер репликации для PostgreSQL.

### сравнивать
- [data-diff](https://github.com/datafold/data-diff) Инструмент командной строки и библиотека Python для эффективного распределения строк в двух разных базах данных.
- [KS DB Merge Tools](https://ksdbmerge.tools) GUI для сравнения и синхронизации схемы и данных DB. Для Oracle Database, MySQL, MariaDB, SQL Server, PostgreSQL, SQLite, MS Access и Cross-DBMS.

## Документы
Документы, статьи, манифесты и другие теоретические материалы по инструментам баз данных
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) Относитесь к базе данных как к коду.
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) Дружелюбное иллюстрированное руководство по разработке и внедрению вашей первой базы данных.

## Машинное обучение
- [MindsDB](https://github.com/mindsdb/mindsdb) - Машинное обучение на базе данных.
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) Совместим SQL и AI.

## Вклад
- Ваши вклады всегда приветствуются! Пожалуйста, прочтите [contribution guidelines](contributing.md) Сначала.
