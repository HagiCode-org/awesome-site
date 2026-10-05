# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Подборка примеров Docker Compose.

Эти примеры помогут начать интеграцию различных служб с помощью файла Compose и управлять их развертыванием через Docker Compose.

> **Примечание**
> Эти примеры предназначены для локальной среды разработки: настройки проектов, экспериментов со стеками ПО и т. п. Не развертывайте их в производственной среде.

<!--lint disable awesome-toc-->
## Содержание

- [Примеры приложений Docker Compose с несколькими интегрированными службами](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Примеры отдельных служб](#single-service-samples).
- [Базовые конфигурации для разных платформ (не для production, подходят для личного использования)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Примеры приложений Docker Compose с несколькими интегрированными службами

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> Значок указывает, что этот пример совместим с [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - Приложение ASP.NET Core с базой данных MS SQL Server.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Стек Elasticsearch, Logstash и Kibana.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Приложение Go с прокси Nginx и базой данных MySQL.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Приложение Go с прокси Nginx и базой данных PostgreSQL.
- [`Java Spark / MySQL`](sparkjava-mysql) - Приложение Java с базой данных MySQL.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Обратный прокси Nginx с бэкендом C# на ASP.NET.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Приложение Python/Flask с прокси Nginx и базой данных Mongo.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Приложение Python/Flask с прокси Nginx и базой данных MySQL.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Приложение Node.js с прокси Nginx и базой данных Redis.
- [`NGINX / Go`](nginx-golang) - Прокси Nginx с бэкендом Go.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Обратный прокси Nginx с бэкендом Flask на WSGI.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - Конфигурация PostgreSQL с веб-интерфейсом pgAdmin.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask с базой данных Redis.
- [`React / Spring / MySQL`](react-java-mysql) - Приложение React с бэкендом Spring и базой данных MySQL.
- [`React / Express / MySQL`](react-express-mysql) - Приложение React с бэкендом Node.js и базой данных MySQL.
- [`React / Express / MongoDB`](react-express-mongodb) - Приложение React с бэкендом Node.js и базой данных Mongo.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Приложение React с бэкендом Rust и базой данных Postgres.
- [`React / Nginx`](react-nginx) - Приложение React с Nginx.
- [`Spring / PostgreSQL`](spring-postgres) - Приложение Java с Spring framework и базой данных Postgres.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Веб-приложение Wasm со статическим HTML-интерфейсом и базой MySQL (MariaDB); интерфейс подключается к микрослужбе Wasm на Rust в среде WasmEdge runtime.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible с Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Микрослужба Wasm подписывается на тему Kafka (Redpanda), преобразует входящие сообщения и сохраняет их в MySQL (MariaDB).&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible с Docker+wasm" height="30" align="top"/></a>

## Примеры отдельных служб

- [`Angular`](angular)
- [`Spark`](sparkjava)
- [`VueJS`](vuejs)
- [`Flask`](flask)
- [`PHP`](apache-php)
- [`Traefik`](traefik-golang)
- [`Django`](django)
- [`Minecraft server`](https://github.com/docker/awesome-compose/tree/master/minecraft)
- [`Plex`](https://github.com/docker/awesome-compose/tree/master/plex)
- [`Portainer`](https://github.com/docker/awesome-compose/tree/master/portainer)
- [`Wireguard`](https://github.com/docker/awesome-compose/tree/master/wireguard)
- [`FastAPI`](fastapi)

## Базовые конфигурации для разных платформ (не для production, подходят для личного использования)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Конфигурация Pi-hole со службой DoH cloudflared.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## Начало работы

Эти инструкции помогут пройти начальный этап создания и развертывания примеров контейнеризированных приложений с Docker Compose.

### Требования

- Убедитесь, что Docker и Docker Compose установлены
  - Windows или macOS:
    [Установите Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Установите Docker](https://www.docker.com/get-started) затем
    [Docker Compose](https://github.com/docker/compose)
- Скачайте некоторые или все примеры из этого репозитория.

### Запуск примера

В корневом каталоге каждого примера находится `compose.yaml` с конфигурацией компонентов служб. Все примеры можно запустить локально: перейдите в корневой каталог каждого из них и выполните:

```console
docker compose up -d
```

Дополнительные сведения о структуре и ожидаемом результате приведены в `README.md` каждого примера.
Чтобы остановить и удалить все контейнеры приложения-примера, выполните:

```console
docker compose down
```

### Краткие руководства

Помимо перечисленных выше готовых к запуску примеров Compose, в каталоге [official-documentation-samples](official-documentation-samples/README.md) находятся краткие руководства. В каждом пошагово объясняется, какие файлы нужно создать для сборки и запуска приложения Docker Compose.

<!--lint disable awesome-toc-->
## Участие

Мы приветствуем примеры, помогающие понять, как использовать Docker Compose для распространенных приложений. Подробнее см. в [руководстве участника](CONTRIBUTING.md). 
