# Awesome Postgres [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> Подборка отличных программ, библиотек, инструментов и ресурсов для [PostgreSQL](https://www.postgresql.org/), вдохновлённая проектом [awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), часто называемый просто Postgres, — это [объектно-реляционная база данных](https://en.wikipedia.org/wiki/Object-relational_database) (ORDBMS). PostgreSQL соответствует требованиям [ACID](https://en.wikipedia.org/wiki/ACID) и поддерживает [обработку транзакций](https://en.wikipedia.org/wiki/Transaction_processing). (Подробнее: [wikipedia:PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [PostgreSQL.org](https://www.postgresql.org))

 :elephant: Вклад приветствуется. Добавляйте ссылки через [запросы на включение изменений](https://github.com/dhamaniasad/awesome-postgres/pulls) или создавайте [обсуждение](https://github.com/dhamaniasad/awesome-postgres/issues). Ознакомьтесь с [правилами участия](CONTRIBUTING.md).

## Содержание

- [Awesome Postgres](#awesome-postgres-)
    - [Высокая доступность](#high-availability)
    - [Резервное копирование](#backups)
    - [Графический интерфейс](#gui)
    - [Дистрибутивы](#distributions)
    - [CLI](#cli)
    - [Сервер](#server)
    - [Мониторинг](#monitoring)
    - [Расширения](#extensions)
    - [Платформы](#platforms)
    - [Очереди задач](#work-queues)
    - [Оптимизация](#optimization)
    - [Утилиты](#utilities)
    - [Языковые привязки](#language-bindings)
    - [PaaS (PostgreSQL как услуга)](#paas-postgresql-as-a-service)
    - [Образы Docker](#docker-images)
    - [Kubernetes](#kubernetes)
- [Ресурсы](#resources)
    - [Руководства](#tutorials)
    - [Блоги](#blogs)
    - [Документация](#documentation)
    - [Рассылки](#newsletters)
    - [Видео](#videos)
    - [Сообщество](#community)
    - [Дорожные карты](#roadmaps)
    - [Внешние списки](#external-lists)

### Высокая доступность
* [autobase](https://github.com/vitabaks/autobase) - Autobase для PostgreSQL® — это открытая DBaaS-платформа, автоматизирующая развёртывание и управление высокодоступными кластерами PostgreSQL.
* [BDR](https://github.com/2ndQuadrant/bdr) - двунаправленная репликация — система многомастерной репликации для PostgreSQL.
* [Patroni](https://github.com/zalando/patroni) - Шаблон высокой доступности PostgreSQL с ZooKeeper или etcd.
* [Spock](https://github.com/pgEdge/spock) - Полностью открытая логическая многомастерная репликация PostgreSQL.
* [Stolon](https://github.com/sorintlab/stolon) - Высокая доступность PostgreSQL на основе Consul или etcd, с интеграцией Kubernetes.
* [pglookout](https://github.com/aiven/pglookout) - Мониторинг репликации и демон переключения при сбое.
* [repmgr](https://github.com/2ndQuadrant/repmgr) - Набор открытых инструментов для управления репликацией и переключением при сбое в кластере серверов PostgreSQL.
* [Slony-I](https://slony.info/) - Система репликации «от одного ведущего к нескольким ведомым» с каскадированием и переключением при сбое.
* [PAF](https://github.com/ClusterLabs/PAF) - Автоматическое переключение PostgreSQL при сбое: высокая доступность Postgres на основе Pacemaker и Corosync.
* [SkyTools](https://github.com/pgq/skytools-legacy) - Инструменты репликации, включая PgQ — систему очередей — и Londiste, систему репликации, которой немного проще управлять, чем Slony.
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Расширение и служба Postgres для автоматического переключения при сбое и обеспечения высокой доступности.
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - Передача журналов предзаписи (WAL) с сервера PostgreSQL в реальном времени. Полноценная контейнерная альтернатива pg_receivewal.
* [pg-status](https://github.com/krylosov-aa/pg-status) - Микросервис с HTTP-эндпоинтами для мгновенного получения текущего ведущего узла либо реплики, отвечающей заданным критериям.

### Резервное копирование
* [Barman](https://www.pgbarman.org/index.html) - Менеджер резервного копирования и восстановления PostgreSQL от 2ndQuadrant.
* [Databasus](https://databasus.com) - Инструмент для планового резервного копирования PostgreSQL через веб-интерфейс с использованием внешних хранилищ (локальных, S3, FTP, Google Drive и др.), уведомлениями (webhook, Discord, Slack и др.) и управлением командами.
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - Продвинутые инструменты управления файлами WAL для PostgreSQL.
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) – Форк pg_arman, улучшенный @PostgresPro; поддерживает инкрементное резервное копирование, копирование с реплики, многопоточное резервное копирование и восстановление, а также анонимное резервное копирование без команды архивации.
* [pgBackRest](https://pgbackrest.org/)  - Надёжное резервное копирование и восстановление PostgreSQL.
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Полноценный инструмент для резервного копирования и обслуживания Postgres на основе Docker с веб-интерфейсом.
* [pg\_back](https://github.com/orgrim/pg_back/) - pg_back — простой скрипт для резервного копирования.
* [pghoard](https://github.com/aiven/pghoard) - Инструмент резервного копирования и восстановления для облачных объектных хранилищ (AWS S3, Azure, Google Cloud, OpenStack Swift).
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - Удобный Docker-контейнер для периодического резервного копирования PostgreSQL в Alibaba Cloud Object Storage Service (OSS).
* [wal-e](https://github.com/wal-e/wal-e) (устарело) - Простое непрерывное архивирование PostgreSQL в S3, Azure или Swift от Heroku.
* [wal-g](https://github.com/wal-g/wal-g) - Преемник WAL-E, переписанный на Go. Поддерживает облачные объектные хранилища AWS (S3), Google Cloud (GCS), Azure, OpenStack Swift, MinIO и файловые хранилища. Поддерживает инкрементное резервное копирование на уровне блоков, перенос задач резервного копирования на резервный сервер, параллелизм и ограничение скорости. Помимо Postgres, WAL-G можно использовать с базами данных MySQL и MongoDB.
* [pitrery](https://dalibo.github.io/pitrery/) - Набор скриптов Bash для управления резервными копиями PostgreSQL с восстановлением на момент времени (PITR).
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar` — лёгкий вспомогательный Docker-контейнер, автоматизирующий регулярное резервное копирование базы PostgreSQL с помощью `pg_dump`, `cron` и скриптов bash, а также отправляющий вывод в webhook.
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - Решение на основе Docker и pg_dump для планового резервного копирования PostgreSQL с настройкой через переменные окружения, необязательным сжатием и шифрованием GPG, webhook-уведомлениями и автоматической загрузкой в Amazon S3.

### Графический интерфейс
* [1bench](https://1bench.dev/postgresql) - Нативный кроссплатформенный графический интерфейс с полноценной поддержкой Postgres, а также Redis, Elasticsearch, ClickHouse, Qdrant и других систем (коммерческое ПО).
* [Adminer](https://www.adminer.org/) - Полнофункциональный инструмент управления базами данных, написанный на PHP.
* [AI for Database](https://aifordatabase.com) - Общайтесь с базой PostgreSQL на естественном языке. SQL не нужен: получайте мгновенные аналитические данные, создавайте автоматически обновляемые панели и запускайте автоматизированные процессы при изменении данных (коммерческое ПО).
* [Beekeeper Studio](https://www.beekeeperstudio.io) - Бесплатный SQL-клиент с открытым исходным кодом, современным интерфейсом и отличной поддержкой Postgres. Работает на разных платформах.
* [Bytebase](https://www.bytebase.com) - Решение DevSecOps для команд разработки, безопасности, администраторов БД и платформенной инженерии.
* [Chartbrew](https://chartbrew.com) - Создавайте интерактивные панели, графики и клиентские отчёты на основе данных PostgreSQL. Есть инструмент запросов SQL.
* [Count](https://count.co/) - Веб-платформа аналитики с интерфейсом в виде блокнота, подключающаяся к PostgreSQL (коммерческое ПО).
* [DataGrip](https://www.jetbrains.com/datagrip/) - IDE с расширенным набором инструментов и хорошей кроссплатформенной поддержкой (коммерческое ПО).
* [Dekart](https://github.com/dekart-xyz/dekart) - Платформа с открытым исходным кодом для преобразования запросов PostGIS в интерактивные карты, которыми можно делиться.
* [Datazenit](https://datazenit.com/) - Веб-интерфейс PostgreSQL (коммерческое ПО).
* [DataRow](https://www.datarow.com/) - Кроссплатформенный SQL-клиент для Amazon Redshift: простой, удобный и расширяемый.
* [DBConvert Streams](https://streams.dbconvert.com/) - IDE для баз данных с миграциями, федеративным SQL и репликацией CDC для PostgreSQL, MySQL, файлов и хранилищ, совместимых с S3 (коммерческое ПО).
* [DBeaver](https://dbeaver.io/) - Универсальный менеджер баз данных с отличной поддержкой PostgreSQL.
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - Комплексное решение для работы с несколькими базами данных: PostgreSQL, MySQL, MariaDB, SQL Server, Oracle и широкий спектр связанных облачных сервисов (коммерческое ПО).
* [DbVisualizer](http://www.dbvis.com) - Кроссплатформенный клиент баз данных для разработчиков, администраторов БД и аналитиков (коммерческое ПО).
* [Holistics](https://www.holistics.io/) - Онлайн-инструмент кроссплатформенного управления базами данных и графический интерфейс для отчётов по SQL-запросам с широкой поддержкой PostgreSQL (коммерческое ПО).
* [JackDB](https://www.jackdb.com/) - Веб-интерфейс для SQL-запросов (коммерческое ПО).
* [Luna Modeler](http://www.datensen.com) - Кроссплатформенный настольный инструмент моделирования данных (коммерческое ПО).
* [Mathesar](https://mathesar.org/) -  Веб-приложение, обеспечивающее удобное взаимодействие с базами данных.
* [Metabase](https://www.metabase.com/) - Простые панели, графики и инструмент запросов для PostgreSQL.
* [Numeracy](https://numeracy.co/) - Быстрый SQL-редактор с графиками и панелями для PostgreSQL (коммерческое ПО).
* [OrcaQ](https://github.com/cin12211/orca-q) - Современный редактор баз данных с открытым исходным кодом для PostgreSQL, MySQL, Redis и других систем. Включает ИИ-ассистента, визуализатор ERD, сравнение схем и визуальное управление ролями.
* [pgAdmin](https://www.pgadmin.org/) - Графический интерфейс администрирования и управления PostgreSQL.
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - Общайтесь с Postgres на естественном языке (коммерческое ПО).
* [PgManage](https://github.com/commandprompt/pgmanage) - Современный мультиплатформенный клиент и инструмент администрирования баз данных, ориентированный на Postgres.
* [pgModeler](https://pgmodeler.io/) - pgModeler — редактор моделей баз данных PostgreSQL с открытым исходным кодом.
* [PgStudio](https://github.com/dev-asterix/PgStudio) - Расширение для управления PostgreSQL в VS Code / Open VSX с открытым исходным кодом: блокноты SQL, ИИ-ассистент, удобные фрагменты кода и полноценная СУБД с панелью мониторинга в реальном времени.
* [pgweb](https://github.com/sosedoff/pgweb) - Веб-браузер баз данных PostgreSQL, написанный на Go.
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - Ведущий веб-инструмент администрирования PostgreSQL.
* [Postbird](https://github.com/Paxa/postbird) - Клиент PostgreSQL для macOS.
* [PostgresCompare](https://www.postgrescompare.com) - Кроссплатформенный инструмент сравнения и развёртывания баз данных (коммерческое ПО).
* [Postico](https://eggerapps.at/postico/) - Современный клиент PostgreSQL для macOS (коммерческое ПО).
* [QueryGlow](https://queryglow.com/) - Самостоятельно размещаемый веб-интерфейс для баз данных с генерацией SQL при помощи ИИ, визуализатором EXPLAIN и автодополнением с учётом схемы (коммерческое ПО).
* [PSequel](http://www.psequel.com/) - Простой и лаконичный интерфейс для быстрого выполнения типичных задач PostgreSQL (коммерческое ПО).
* [Redash](https://github.com/getredash/redash) - Подключайтесь к любым источникам данных, легко визуализируйте и публикуйте данные.
* [SQL Tabs](http://www.sqltabs.com/) - Кроссплатформенный настольный клиент PostgreSQL, написанный на JS.
* [SQLPro for Postgres](http://macpostgresclient.com/) - Простой и мощный менеджер PostgreSQL для macOS (коммерческое ПО).
* [temBoard](https://github.com/dalibo/temboard) - Веб-интерфейс PostgreSQL и система мониторинга.
* [Teable](https://github.com/teableio/teable) - Сверхбыстрая профессиональная база данных реального времени для разработчиков, не требующая программирования.
* [TablePlus](https://tableplus.com/) - Нативное приложение для редактирования базы данных и её структуры. Обеспечивает высокий уровень безопасности (коммерческое ПО).
* [TablePro](https://tablepro.app/) - Нативный клиент PostgreSQL для macOS с визуализацией explain-планов, ER-диаграммами и ИИ-ассистентом. Бесплатный, с открытым исходным кодом.
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Кроссплатформенный инструмент администрирования баз данных (бесплатная/коммерческая версия).
* [DbGate](https://dbgate.org) - Самый умный клиент баз данных SQL и NoSQL.
* [WebDB](https://webdb.app) – Эффективная IDE для баз данных.

### Дистрибутивы
* [Postgres.app](https://postgresapp.com/) - Самый простой способ начать работу с PostgreSQL на macOS.
* [Pigsty](https://github.com/Vonng/pigsty) - Дистрибутив PostgreSQL с открытым исходным кодом и всем необходимым: полная наблюдаемость и набор инструментов «база данных как код» для разработчиков.

### CLI
* [atlas](https://github.com/ariga/atlas) - Инструмент для управления схемами баз данных и их миграции с применением современных принципов DevOps.
* [pgcli](https://github.com/dbcli/pgcli) - CLI-клиент Postgres с автодополнением и подсветкой синтаксиса.
* [pgfence](https://pgfence.com) - Проверяет миграции SQL для Postgres на режимы блокировок и рискованные DDL-операции, предлагает безопасные преобразования expand/contract. CLI и LSP. Поддерживает извлечение схем из Prisma, TypeORM и Knex.
* [pgxcli](https://github.com/Balaji01-4D/pgxcli) - CLI-клиент Postgres с автодополнением и подсветкой синтаксиса, написанный на Go.
* [pgplan](https://github.com/JacobArthurs/pgplan) - Сравнение и анализ планов EXPLAIN PostgreSQL из командной строки.
* [pgschema](https://www.pgschema.com) - Декларативные миграции схемы Postgres в стиле Terraform.
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - CLI (и библиотека Golang) для сравнения схем Postgres и создания миграций SQL с минимальными блокировками.
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - CLI для проверки безопасности миграций PostgreSQL, выявляющий опасные DDL-операции до выхода в production: 80 правил, классификация блокировок, автоисправление и GitHub Action.
* [pgsh](https://github.com/sastraxi/pgsh) - Создавайте ветки базы данных PostgreSQL, как в Git.
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - Встроенный CLI-клиент PostgreSQL.
* [psql2csv](https://github.com/fphilipe/psql2csv) - Выполняет запрос в psql и выводит результат в формате CSV.
* [sabiql](https://github.com/riii111/sabiql) - Быстрый TUI для просмотра, выполнения запросов и редактирования баз PostgreSQL без драйверов.
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpy — инструмент, совместимый с JAVA JDBC, для создания HTML-документации по базе данных, включая диаграммы «сущность-связь».
* [pdot](https://gitlab.com/dmfay/pdot) - Просмотр и исследование структуры базы данных в терминале: от графа внешних ключей с контекстом до каскадов триггеров, наследования ролей, разрешений и многого другого.
* [squix](https://github.com/eduardofuncao/squix) - Клиент командной строки для SQL с управлением запросами и интерактивными результатами.

### Сервер
* [AgensGraph](https://bitnine.net/) - Мощная графовая база данных на основе PostgreSQL.
* [Apache Cloudberry](https://github.com/apache/cloudberry) - Форк PostgreSQL с MPP. Альтернатива Greenplum Database с открытым исходным кодом.
* [FerretDB](https://www.ferretdb.io) - По-настоящему открытая альтернатива MongoDB на базе PostgreSQL.
* [Postgres-XL](https://www.postgres-xl.org/) - Масштабируемый кластер баз данных на основе PostgreSQL с открытым исходным кодом.
* [YugabyteDB](https://yugabyte.com/) - Распределённая SQL-СУБД с открытым исходным кодом, использующая форк PostgreSQL поверх распределённого хранилища и транзакций.

### Безопасность
* [Acra](https://github.com/cossacklabs/acra) - Комплекс средств защиты SQL-баз данных: прокси для защиты данных с прозрачным шифрованием «на лету», SQL-файрвол (защита от SQL-инъекций) и система обнаружения вторжений.
* [pgrls](https://github.com/pgrls/pgrls) - Статический анализатор политик безопасности на уровне строк; 36 правил для безопасности, производительности и гигиены, 10 из которых можно автоматически исправить механически; включает команду семантического сравнения политик для контроля в CI.

### Мониторинг
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - check_pgactivity предназначен для мониторинга кластеров PostgreSQL из Nagios. Он предлагает множество параметров для измерения и отслеживания полезных показателей производительности.
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Плагин Nagios check_postgres для проверки состояния баз данных PostgreSQL.
* [coroot](https://github.com/coroot/coroot) - Coroot — инструмент APM и наблюдаемости с открытым исходным кодом, альтернатива DataDog и NewRelic. Использует eBPF для быстрого анализа производительности системы.
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - Облачный сервис мониторинга, собирающий и визуализирующий метрики, запросы и планы explain, а также отправляющий оповещения о проблемах (коммерческое ПО).
* [Instrumental](https://github.com/Instrumental/instrumentald) - Мониторинг производительности в реальном времени, включая [готовые графики](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs) для простой настройки (коммерческое ПО).
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - Полнофункциональный модуль мониторинга PostgreSQL для Zabbix.
* [myDBA](https://mydba.dev) - Мониторинг производительности PostgreSQL с более чем 75 автоматическими проверками работоспособности, советником по индексам с поддержкой кластеров, анализом запросов и мониторингом расширений TimescaleDB, pgvector и PostGIS (коммерческое ПО).
* [PMM](https://github.com/percona/pmm) - Percona Monitoring and Management (PMM) — бесплатная платформа с открытым исходным кодом для мониторинга и управления PostgreSQL, MySQL и MongoDB.
* [Pome](https://github.com/rach/pome) - Pome означает PostgreSQL Metrics. Это панель метрик PostgreSQL для отслеживания состояния базы данных.
* [pgmetrics](https://pgmetrics.io/) - pgmetrics — инструмент с открытым исходным кодом, без внешних зависимостей и в виде одного исполняемого файла. Собирает множество сведений и статистики работающего сервера PostgreSQL и показывает их в удобном текстовом формате либо экспортирует в JSON и CSV для скриптов.
* [pg\_view](https://github.com/zalando/pg_view) - Инструмент командной строки с открытым исходным кодом, показывающий общесистемную статистику, сведения по разделам, статистику памяти и другие данные.
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - Гибкий монитор метрик PostgreSQL, который легко настроить; ориентирован на панели Grafana.
* [pgwd](https://github.com/hrodrig/pgwd) - Отслеживает использование подключений PostgreSQL и неактивные сеансы, поддерживает пороговые оповещения, метрики Prometheus и несколько способов отправки уведомлений.
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - Запуск теста производительности PostgreSQL.
* [opm.io](http://opm.io) -  Open PostgreSQL Monitoring — бесплатный набор ПО для управления серверами PostgreSQL. Собирает статистику, отображает панели и отправляет предупреждения при неполадках.
* [okmeter.io](https://okmeter.io/pg) - Коммерческий SaaS-мониторинг на основе агента с подробным плагином PostgreSQL. Автоматически собирает сотни показателей, отображает панели по всем аспектам и отправляет оповещения при проблемах (коммерческое ПО).
* [dexter](https://github.com/ankane/dexter) - Автоматический индексатор для Postgres. Обнаруживает медленные запросы и при соответствующей настройке создаёт индексы.
* [pg_ash](https://github.com/NikolayS/pg_ash) - История активных сеансов для PostgreSQL. Раз в секунду с помощью pg_cron считывает pg_stat_activity, сохраняет закодированные снимки и предоставляет 32 SQL-функции для анализа событий ожидания. Только SQL, без расширений; работает у управляемых провайдеров (RDS, Cloud SQL, Supabase и др.).
* [pg_exporter](https://github.com/Vonng/pg_exporter) - Полностью настраиваемый экспортёр Prometheus для PostgreSQL и Pgbouncer с детальным управлением выполнением.
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - Экспортёр Prometheus для метрик сервера PostgreSQL.
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - Расширение PostgreSQL с открытым исходным кодом для эффективного и упорядоченного управления расширенной статистикой.
* [pgvitals](https://github.com/pgvitals/pgvitals) - Набор из 40 диагностических запросов только для чтения, выявляющих распространённые проблемы производительности (медленные запросы, раздувание таблиц, задержка очистки, конкуренция за блокировки, задержка репликации, риск переполнения счётчика транзакций). Использует только стандартный системный каталог, расширения не требуются. Также доступен CLI, объединяющий результаты в оценку состояния от 0 до 100.

### Расширения
* [pgxn](https://pgxn.org/) PostgreSQL Extension Network - центральная точка распространения множества расширений PostgreSQL с открытым исходным кодом.
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - Более 1000 расширений PostgreSQL.
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - Более 400 расширений PostgreSQL.
* [AGE](https://github.com/apache/age) - Добавляет полноценную поддержку графовой базы данных, включая запросы Cypher.
* [OrioleDB](https://www.orioledb.com/) - Облачный движок хранения для PostgreSQL. OrioleDB — расширение PostgreSQL, объединяющее преимущества дисковых и оперативных движков хранения.
* [Citus](https://github.com/citusdata/citus) - Масштабируемый кластер PostgreSQL для задач реального времени.
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - Колончатое хранилище для аналитики в PostgreSQL.
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Audit обеспечивает в базе данных журналирование всех операций DML на уровне отдельных столбцов.
* [pg_search](https://github.com/paradedb/paradedb) - Расширение PostgreSQL для полнотекстового поиска по таблицам SQL с использованием алгоритма BM25 — современной функции ранжирования для полнотекстового поиска.
* [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s) - Расширение PostgreSQL для лексического поиска семейства BM25 с нативным методом доступа к индексам и SQL API для top-k запросов.
* [pg_cron](https://github.com/citusdata/pg_cron) - Запуск периодических заданий в PostgreSQL.
* [pglogical](https://github.com/2ndQuadrant/pglogical) - Расширение, обеспечивающее логическую потоковую репликацию.
* [pgcat](https://github.com/kingluo/pgcat) - Улучшенная логическая репликация PostgreSQL.
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - Генератор SVG-изображений QR-кодов и Data Matrix для PostgreSQL.
* [pg\_partman](https://github.com/pgpartman/pg_partman) - Расширение для управления секционированием PostgreSQL.
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - Базовая реализация Paxos и репликации таблиц на основе Paxos для кластера узлов PostgreSQL.
* [pg\_shard](https://github.com/citusdata/pg_shard) - Расширение для горизонтального масштабирования чтения и записи в реальном времени.
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - Инструмент мониторинга производительности запросов для PostgreSQL.
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - Расширение для автоматической очистки раздувания таблиц с минимальными блокировками.
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - Расширение для переноса ресурсоёмких задач с CPU на GPU.
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - Расширение PostgreSQL, непрерывно выполняющее SQL-запросы над потоками и постепенно сохраняющее результаты в таблицах.
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - Расширение для проверки исходного кода plpgsql.
* [PostGIS](http://postgis.net/) - Пространственные и географические объекты для PostgreSQL.
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Привязка Postgres к криптографической библиотеке Themis в виде расширения, предоставляющая различные средства безопасности на стороне PgSQL.
* [zomboDB](https://github.com/zombodb/zombodb) - Расширение, обеспечивающее эффективный полнотекстовый поиск с помощью индексов на базе Elasticsearch.
* [pgMemento](https://github.com/pgMemento/pgMemento) - Обеспечивает аудит данных в базе PostgreSQL с помощью триггеров и серверных функций, написанных на PL/pgSQL.
* [TimescaleDB](https://www.timescale.com/) - База данных временных рядов с открытым исходным кодом, полностью совместимая с Postgres и распространяемая в виде расширения.
* [pgTAP](https://pgtap.org/) - Среда тестирования баз данных для Postgres.
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPG предоставляет возможность создавать гипотетические/виртуальные индексы.
* [pgRouting](https://github.com/pgRouting/pgrouting) - Расширяет геопространственную базу данных PostGIS/PostgreSQL функциями прокладки маршрутов и другого сетевого анализа.
* [PGroonga](https://pgroonga.github.io/) - PGroonga предоставляет новый метод доступа к индексам на основе Groonga, обеспечивая сверхбыстрый полнотекстовый поиск на всех языках.
* [PGAudit](https://www.pgaudit.org/) - Расширение аудита PostgreSQL (pgaudit) обеспечивает подробное журналирование сеансов и/или объектов через стандартный механизм журналирования PostgreSQL.
* [PostgresML](https://postgresml.org/) - Машинное обучение и ИИ внутри базы данных, включая векторы, LLM и классическое машинное обучение. Обучайте модели, делайте прогнозы и управляйте всем жизненным циклом машинного обучения, используя только SQL.
* [ParadeDB](https://github.com/paradedb/paradedb) -  Postgres для поиска и аналитики.
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Расширение для маскировки или замены персональных данных (PII) и коммерчески конфиденциальной информации в базе Postgres с помощью меток безопасности PG.

### Платформы
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - Платформа пространственно-временных данных с открытым исходным кодом, объединяющая PostGIS, TimescaleDB, pgvector и H3 для единой геопространственной аналитики и анализа временных рядов.
* [neond](https://github.com/matisiekpl/neond) - Плоскость управления Postgres с акцентом на удобство разработчика: ветвление, восстановление на момент времени (PITR) и надёжность S3. Поставляется как единый Docker-контейнер с веб-панелью; позиционируется как замена `postgres:latest` для некритичных задач.

### Очереди задач
* [BeanQueue](https://github.com/LaunchPlatform/bq) - Фреймворк очередей задач на Python, использующий SKIP LOCKED, LISTEN и NOTIFY.
* [pgmq](https://github.com/pgmq/pgmq) - Лёгкая очередь сообщений. Подобна AWS SQS и RSMQ, но работает на Postgres.
* [river](https://github.com/riverqueue/river) - Высокопроизводительная система обработки заданий для Go и Postgres.
* [pgBoss](https://github.com/timgit/pg-boss) - Постановка заданий в очередь Postgres из Node.js — как босс.
* [dbos](https://www.dbos.dev/) - Надёжные рабочие процессы на TypeScript и Python.
* [Graphile Worker](https://worker.graphile.org) - Высокопроизводительная очередь заданий для PostgreSQL, написанная на Node.js.
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Очередь Postgres для Node.js, не требующая обслуживания.

### Оптимизация
* [EverSQL](https://www.eversql.com/) - Автоматическая оптимизация запросов, мониторинг и анализ, рекомендации по индексированию (коммерческое ПО).
* [PEV2](https://github.com/dalibo/pev2) - Онлайн-визуализатор EXPLAIN для Postgres.
* [pg_flame](https://github.com/mgartner/pg_flame) - Генератор пламенных графиков для планов запросов.
* [PgHero](https://github.com/ankane/pghero) - Удобная аналитика PostgreSQL.
* [pgMustard](https://www.pgmustard.com/) - Современный пользовательский интерфейс
для `EXPLAIN`, который также предлагает советы по повышению производительности (коммерческое ПО).
* [pgtune](https://github.com/gregs1104/pgtune/) - Мастер настройки PostgreSQL.
* [pgtune](https://github.com/le0pard/pgtune) - Онлайн-версия мастера настройки PostgreSQL.
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - Онлайн-инструмент настройки PostgreSQL (также основан на pgtune).
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQL Workload Analyzer собирает статистику производительности и предоставляет графики в реальном времени для мониторинга и настройки серверов PostgreSQL.
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - Веб-интерфейс для просмотра pg_stat_statements.
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - Программа для оптимальной настройки базы TimescaleDB с учётом ресурсов хоста, таких как память и число процессоров.
* [Metis](https://www.metisdata.io/product/troubleshooting) - Metis обеспечивает наблюдаемость и настройку производительности SQL-баз данных, включая PostgreSQL (коммерческое ПО).
* [aqo](https://github.com/postgrespro/aqo) - Адаптивная оптимизация запросов для PostgreSQL.
* [pgassistant](https://github.com/beh74/pgassistant-community) - Инструмент PostgreSQL для разработчиков: помогает понимать и оптимизировать базу данных с помощью LLM и интеграции с pgTune.

### Утилиты
* [apgdiff](https://www.apgdiff.com/) - Сравнивает два дампа базы данных и формирует выходные DDL-инструкции, которые можно использовать для обновления старой схемы до новой.
* [bemi](https://github.com/BemiHQ/bemi) - Автоматическое отслеживание изменений данных в PostgreSQL.
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemy создаёт диаграммы «сущность-связь» на основе баз данных.
* [flyway](https://flywaydb.org/) - Инструмент миграции схем для Postgres и других систем.
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - Облачный шлюз баз данных и фреймворк для создания приложений, управляемых данными. Как API-шлюз, только для баз данных.
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - Инструмент обезличивания баз данных и генерации синтетических данных для MySQL и PostgreSQL.
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - Молниеносно быстрые GraphQL API в реальном времени для Postgres с детальным контролем доступа; также запускает webhook при событиях в базе данных.
* [ldap2pg](https://github.com/dalibo/ldap2pg) - Синхронизация ролей и привилегий из YML и LDAP.
* [migra](https://github.com/djrobstep/migra) - Как diff, только для схем Postgres.
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - Скрипт Lanyrd для преобразования MySQL в PostgreSQL.
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - Библиотека NServiceBus.Transport.PostgreSql позволяет разработчикам .NET [использовать базу данных PostgreSQL в качестве брокера сообщений](https://docs.particular.net/transports/postgresql) (коммерческое ПО).
* [ora2pg](http://ora2pg.darold.net) - Модуль Perl для экспорта схемы базы Oracle в схему, совместимую с PostgreSQL.
* [pg\_activity](https://github.com/dalibo/pg_activity) - Приложение в стиле top для мониторинга активности сервера PostgreSQL.
* [pg-formatter](https://github.com/gajus/pg-formatter) - Форматтер синтаксиса SQL PostgreSQL (Node.js).
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - Безопасный в первую очередь механизм миграций Node.js с advisory-блокировками, обнаружением расхождений на основе SHA-256 и 10 встроенными правилами проверки PostgreSQL.
* [pganalyze](https://pganalyze.com) - Мониторинг производительности PostgreSQL (коммерческое ПО).
* [pgbadger](https://github.com/darold/pgbadger) - Быстрый анализатор журналов PostgreSQL.
* [PgBouncer](http://www.pgbouncer.org/) - Лёгкий пулер подключений для PostgreSQL.
* [pgCenter](https://github.com/lesovsky/pgcenter) - Предоставляет удобный интерфейс к различным статистическим данным и задачам администрирования, позволяет перезагружать службы, просматривать файлы журналов и отменять или завершать серверные процессы базы данных.
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Репликация в реальном времени из MySQL в PostgreSQL с возможностью переопределения типов и миграции.
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - Экспорт данных из PostgreSQL в различные форматы.
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - Расширение браузера для перенаправления ссылок на документацию PostgreSQL на текущую версию.
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - Простой импорт CSV и JSON в PostgreSQL.
* [pgFirstAid](https://github.com/randoneering/pgFirstAid) - Легко развёртываемая функция PostgreSQL с открытым исходным кодом, выдающая список приоритетных действий для повышения стабильности и производительности базы данных. Создана под непосредственным влиянием FirstResponderKit Брента Озара для SQL Server.
* [PGInsight](http://pginsight.io/) - CLI-инструмент для подробного изучения базы PostgreSQL.
* [pg_insights](https://github.com/lob/pg_insights) - Удобные SQL-запросы для мониторинга состояния базы Postgres.
* [pgloader](https://github.com/dimitri/pgloader) - Загружает данные в PostgreSQL с помощью потокового протокола COPY, используя отдельные потоки для чтения и записи.
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Сбор и визуализация метрик Postgres с возможностью развёртывания на физическом сервере, виртуальных машинах или в Kubernetes.
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - Промежуточное ПО, предоставляющее пул подключений, репликацию, балансировку нагрузки и ограничение числа подключений.
* [pgspot](https://github.com/timescale/pgspot) - Поиск уязвимостей в скриптах расширений PostgreSQL.
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - Демон для запуска Postgres с сохранением состояния на дешёвых виртуальных машинах AWS Spot.
* [pgsync](https://github.com/ankane/pgsync) - Инструмент для синхронизации данных PostgreSQL с локальным компьютером.
* [PGXN client](https://github.com/pgxn/pgxnclient) - Инструмент командной строки для работы с PostgreSQL Extension Network.
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - Инструмент для извлечения метрик базы PostgreSQL и предоставления к ним доступа.
* [PostgREST](https://github.com/PostgREST/postgrest) - Создаёт полноценный RESTful API на основе любой существующей базы PostgreSQL.
* [pREST](https://github.com/prest/prest) - Создаёт RESTful API на основе любой базы PostgreSQL (Golang).
* [PostGraphile](https://github.com/graphile/postgraphile) - Мгновенный GraphQL API или схема GraphQL для вашей базы PostgreSQL.
* [yoke](https://github.com/nanopack/yoke) - Кластер PostgreSQL с высокой доступностью, автоматическим переключением при сбое и восстановлением кластера.
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Лёгкий демон PostgreSQL `LISTEN`/`NOTIFY`, построенный на основе `node-postgres`.
* [ZSON](https://github.com/postgrespro/zson) - Расширение PostgreSQL для прозрачного сжатия JSONB.
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - Высокоскоростная утилита загрузки данных для PostgreSQL.
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - Управление кодовыми базами PostgreSQL и упрощение работы с VCS.
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Продвинутый планировщик заданий для PostgreSQL.
* [sqitch](https://github.com/sqitchers/sqitch) - Инструмент управления развёртыванием версионируемых схем.
* [pgmigrate](https://github.com/yandex/pgmigrate) - CLI-инструмент для развития схемы с помощью миграций, разработанный Яндексом.
* [pgcmp](https://github.com/cbbrowne/pgcmp) - Инструмент сравнения схем баз данных, позволяющий учитывать некоторые постоянные различия.
* [pg-differ](https://github.com/multum/pg-differ) - Инструмент для простой инициализации и обновления структуры таблиц PostgreSQL, альтернатива миграциям (Node.js).
* [Qail](https://github.com/qail-io/qail) - Ориентированный на Rust типизированный конвейер AST для PostgreSQL с проверкой запросов во время компиляции и встроенным ограничением по арендаторам.
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - Автоматически обнаруживает распространённые антипаттерны SQL, которые часто замедляют запросы. Их устранение помогает ускорить работу запросов.
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Инструмент диагностики нового поколения для глубокого анализа состояния базы данных Postgres.
* [Pyrseas](https://github.com/perseas/Pyrseas) - Версионирование схем баз данных Postgres.
* [ScaffoldHub.io](https://scaffoldhub.io) - Создание полнофункциональных приложений PostgreSQL на Angular, Vue или React (коммерческое ПО).
* [planter](https://github.com/achiku/planter) - Создание текстового описания ER-диаграммы PlantUML по таблицам PostgreSQL.
* [pgroll](https://github.com/xataio/pgroll) - Обратимые миграции схем Postgres без простоев.
* [RegreSQL](https://github.com/dimitri/regresql) - Инструмент для создания, поддержки и выполнения набора регрессионных тестов SQL-запросов.
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - Линтер опасных шаблонов миграции Postgres в Diesel и SQLx.

### Языковые привязки
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

### PaaS *(PostgreSQL как услуга)*
* [Aiven PostgreSQL](https://aiven.io/postgresql) - PostgreSQL как услуга в AWS, Azure, DigitalOcean, Google Cloud и UpCloud; тарифы — от $19 в месяц за один узел до крупных высокодоступных конфигураций; бесплатный пробный период — две недели.
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (RDS) для PostgreSQL.
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQL предоставляет полностью управляемую готовую для предприятий услугу на базе PostgreSQL Community Edition. Включает встроенную высокую доступность, эластичное масштабирование и нативную интеграцию с экосистемой Azure.
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Полностью управляемый Postgres от экспертов Postgres. Доступен во всех ведущих облаках: Amazon AWS, Google GCP и Microsoft Azure. Без привязки к поставщику, с полным доступом суперпользователя.
* [Database Labs](https://www.databaselabs.io) - Получите готовый к эксплуатации облачный сервер PostgreSQL за считаные минуты от $20 в месяц. В стоимость входят резервное копирование, мониторинг, исправления и круглосуточная техническая поддержка.
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - Полностью управляемые базы данных PostgreSQL. Бесплатного тарифа нет. Стоимость начинается от $15 в месяц. Ежедневное резервное копирование с восстановлением на момент времени. Резервные узлы с автоматическим переключением при сбое.
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Полностью управляемая служба баз данных, упрощающая настройку, обслуживание и администрирование реляционных баз данных PostgreSQL в Google Cloud Platform.
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - Тарифы — от бесплатного до крупного; обслуживание выполняют эксперты PostgreSQL. Приложение необязательно размещать на Heroku. Бесплатный тариф включает 10 000 строк, 20 подключений, до двух резервных копий и поддержку PostGIS.
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - Высокодоступный, масштабируемый и защищённый PostgreSQL. Ежедневные резервные копии с восстановлением на момент времени, отсутствие привязки к поставщику, бесплатный входящий и исходящий трафик.
* [Render Managed PostgreSQL](https://render.com/docs/databases) - Безопасный, надёжный и полностью управляемый PostgreSQL без необходимости администрирования. Во всех тарифах предусмотрены шифрование данных на диске, автоматическое резервное копирование и расширяемое SSD-хранилище. Тарифы начинаются от $7 в месяц за 256 МБ ОЗУ и 1 ГБ хранилища (бесплатно первые 90 дней).
* [Rivestack](https://rivestack.io) - Управляемый PostgreSQL с предустановленным pgvector и настройкой HNSW для векторного поиска. Бесплатный тариф (2 ГБ, банковская карта не требуется), выделенные инстансы с фиксированной ценой от $15 в месяц, регионы ЕС и США.
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - Полностью управляемый PostgreSQL-хостинг с высокой доступностью, выделенными серверами и правами суперпользователя; альтернатива Amazon RDS № 1 среди мультиоблачных решений.
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - Полностью управляемые базы данных PostgreSQL с высокой доступностью, масштабированием и автоматическим резервным копированием, размещённые в ЕС. Стоимость начинается от €10 в месяц.
* [Supabase](https://www.supabase.com) - Полностью управляемый Postgres с репликами для чтения, восстановлением на момент времени, пакетами поддержки, браузерным графическим интерфейсом и щедрым бесплатным тарифом.
* [Neon](https://neon.tech) - Полностью управляемый бессерверный PostgreSQL. Neon разделяет хранение и вычисления, предоставляя современные возможности для разработчиков: бессерверную работу, ветвление, практически неограниченное хранилище и многое другое.
* [Nile](https://www.thenile.dev/) - Полностью управляемый PostgreSQL. Nile отделяет хранение от вычислений и виртуализирует арендаторов, помогая быстро и безопасно создавать масштабируемые многопользовательские ИИ-приложения. Бесплатный тариф предоставляет неограниченное число баз данных.
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale for Postgres предоставляет полностью управляемые высокодоступные кластеры баз данных PostgreSQL на современной облачной инфраструктуре.
* [Vela](https://vela.run) - Бэкенд как услуга на базе Postgres для современных ИИ-приложений. Предоставляет мгновенное ветвление и клонирование баз данных, тестовые среды, похожие на production, и бессерверное масштабирование.
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - Полностью управляемая база данных PostgreSQL с несколькими зонами доступности, автоматическим резервным копированием и размещением в Нидерландах.

### Образы Docker
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Официальные образы Citus с расширениями citus. Созданы на основе официального контейнера Postgres.
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 на Postgres 9. Создан на основе официального контейнера Postgres.
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDB — это Postgres для поиска и аналитики. Образ создан на основе официального контейнера Postgres с расширением pg_search.
* [pglayers](https://github.com/pglayers/pglayers) - Предварительно собранные расширения PostgreSQL в виде комбинируемых слоёв Docker. Более 50 расширений, готовые комбинированные образы (полный, совместимый с Azure).
* [postgres](https://hub.docker.com/_/postgres/) -  Официальный контейнер postgres (от Docker).

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - PostgreSQL для Kubernetes в рабочей среде: от высокодоступных кластеров Postgres до полноценной базы данных как услуги.
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - PostgreSQL корпоративного уровня на платформе OpenShift (коммерческое ПО).
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Оператор Kubernetes, позволяющий разворачивать один или несколько кластеров экземпляров PostgreSql и управлять репликацией, переключением при сбое и резервным копированием баз данных.
* [StackGres Operator](https://github.com/ongres/stackgres/) -  Полноценный стек PostgreSQL в Kubernetes.
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Создаёт кластеры PostgreSQL в Kubernetes и управляет ими.
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Комплексная платформа для удобного управления базами данных PostgreSQL в средах Kubernetes.
* [KubeDB operator](https://kubedb.com/) - Запускайте базы данных в Kubernetes с готовностью к эксплуатации (коммерческое ПО).
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Оператор Percona для PostgreSQL на основе оператора Crunchy Data.
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Оператор Kubernetes, управляющий жизненным циклом баз данных MySQL, MongoDB и PostgreSQL. Под капотом он использует операторы Kubernetes Percona для MySQL, MongoDB и PostgreSQL, предоставляя единый API и единое окно управления всеми тремя типами баз данных.

## Ресурсы

### Руководства
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - Руководство по настройке непрерывной архивации PostgreSQL с помощью wal-e.
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - Шпаргалка по администрированию из PostgreSQL Wiki.
* [PG Casts](https://www.pgcasts.com) - Бесплатные еженедельные скринкасты о PostgreSQL от Hashrocket.
* [Postgres Guide](http://postgresguide.com/) - Руководство, помогающее новичкам и опытным пользователям находить нужные советы и знакомиться с доступными инструментами PostgreSQL.
* [PostgreSQL Access Control](https://andersnasell.gumroad.com/l/postgresql-access-control) - Полная концептуальная модель: роли, гранты, владение, членство, политики и привилегии по умолчанию как единая система. PDF и видео, около 60 минут.
* [PostgreSQL Exercises](https://pgexercises.com/) - Сайт для удобного изучения PostgreSQL на практике с помощью упражнений.
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - Очень обширная коллекция руководств по PostgreSQL.
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - Коллекция примеров схем Postgres.
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - Подборка наиболее распространённых команд PostgreSQL.
* [pg-utils](https://github.com/dataegret/pg-utils) - Полезные инструменты для администраторов БД от Data Egret.
* [pagila](https://github.com/xzilla/pagila) - Pagila — пример базы данных Postgres.
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - Подробная справка по синтаксису SQL: оконные функции, CTE и специфичный для PostgreSQL синтаксис (UPSERT, запросы JSON, операции с массивами).

### Блоги
* [Planet PostgreSQL](https://planet.postgresql.org/) - Агрегатор блогов о PostgreSQL.
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - Подборка публикаций о полезных функциях, советах и приёмах PostgreSQL.
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - Блог Josh Berkus.
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - Блог Hubert Lubaczewski.
* [Metis Blog](https://www.metisdata.io/blog) - Подборка публикаций о PostgreSQL, базах данных SQL, производительности и настройке.
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - Блог автора PIGSTY с содержательными статьями о PostgreSQL, базах данных и облачной инфраструктуре.
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - Блог команды BigData Boutique, преимущественно посвящённый аналитике.

### Книги
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - Бесплатная электронная книга Hironobu Suzuki.
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - Бесплатная электронная книга Egor Rogov.
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - Практическое руководство по масштабированию Postgres в рабочей среде: настройка, пул подключений, секционирование и высокая доступность.


### Документация
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - Документация пользователей, практические руководства, советы и рекомендации.
* [pgPedia](https://pgpedia.info/) - Энциклопедия всего, что связано с postgreSQL.
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - Проект, призванный с помощью ИИ-агентов создать документацию для всех символов кодовой базы PostgreSQL.

### Рассылки

* [Postgres Weekly](https://postgresweekly.com/) - Еженедельная рассылка со статьями, новостями и репозиториями, связанными с PostgreSQL.
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - Ежемесячная рассылка со статьями и видео о производительности Postgres.
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - Еженедельный дайджест списка рассылки pgsql-hackers со списком активных тем, кратким изложением обсуждений и прочим.

### Подкасты
* [PostgresFM](https://postgres.fm/) - Еженедельные обсуждения тем, связанных с Postgres.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Еженедельные обзоры материалов, связанных с PostgreSQL.
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Ежемесячные интервью с представителями мира Postgres.

### Видео
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Видео о Citus.
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) -  Видео об EnterpriseDB.
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - Видео конференций.
* [Scaling Postgres](https://www.scalingpostgres.com/) - Серия видеоблогов о Postgres от Creston Jamison.
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Доклады, сессии по разработке, интервью и выпуски подкастов о Postgres.

### Сообщество
* [Mailing lists](https://www.postgresql.org/list/) - Официальные списки рассылки Postgres для поддержки, взаимодействия и прочего. Один из основных каналов общения сообщества Postgres.
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - Сообщество пользователей PostgreSQL на Reddit, насчитывающее более 12 000 участников.
* [Slack](https://pgtreats.info/slack-invite) - Рабочее пространство Slack для Postgres, в котором более 20 000 участников.
* Telegram - Telegram — несколько групп PostgreSQL на разных языках: [русский](https://t.me/pgsql) — более 4200 участников, [бразильский португальский](https://t.me/postgresqlbr) — более 2300, [индонезийский](https://t.me/postgresql_id) — около 1000, [английский](https://t.me/postgreschat) — более 750.
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Самый популярный IRC-канал о Postgres в Freenode, в котором более 1000 участников.
* [Discord](https://discord.gg/bW2hsax8We) - Сервер Discord для Postgres, в котором более 6000 участников.

### Дорожные карты
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - Пошаговое руководство по PostgreSQL.

### Внешние списки
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - Сравнение инструментов администрирования баз данных в Wikipedia.
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - Руководство сообщества по графическим инструментам PostgreSQL.
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - Обёртки внешних данных.
