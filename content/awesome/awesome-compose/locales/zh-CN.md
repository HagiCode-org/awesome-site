# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Docker Compose 示例精选列表。

这些示例展示了如何使用 Compose 文件集成不同服务，并通过 Docker Compose 管理其部署。

> **注意**
> 以下示例旨在用于本地开发环境，例如项目设置、软件栈试用等。不得将这些示例部署到生产环境中。

<!--lint disable awesome-toc-->
## 目录

- [集成多个服务的 Docker Compose 应用示例](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [单服务示例](#single-service-samples).
- [适用于不同平台的基础配置（非生产就绪，适合个人使用）](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## 集成多个服务的 Docker Compose 应用示例

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> 图标表示此示例兼容 [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - ASP.NET Core 应用与 MS SQL Server 数据库示例。
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Elasticsearch、Logstash 和 Kibana 技术栈示例。
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Go 应用搭配 Nginx 代理和 MySQL 数据库。
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Go 应用搭配 Nginx 代理和 PostgreSQL 数据库。
- [`Java Spark / MySQL`](sparkjava-mysql) - Java 应用及 MySQL 数据库示例。
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Nginx 反向代理，后端为 ASP.NET C# 应用。
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Python/Flask 应用搭配 Nginx 代理和 Mongo 数据库。
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Python/Flask 应用搭配 Nginx 代理和 MySQL 数据库。
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Node.js 应用搭配 Nginx 代理和 Redis 数据库。
- [`NGINX / Go`](nginx-golang) - Nginx 代理搭配 Go 后端。
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Nginx 反向代理搭配 WSGI Flask 后端。
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - PostgreSQL 数据库与 pgAdmin Web 界面配置。
- [`Python / Flask / Redis`](flask-redis) - Python/Flask 与 Redis 数据库示例。
- [`React / Spring / MySQL`](react-java-mysql) - React 应用搭配 Spring 后端和 MySQL 数据库。
- [`React / Express / MySQL`](react-express-mysql) - React 应用搭配 Node.js 后端和 MySQL 数据库。
- [`React / Express / MongoDB`](react-express-mongodb) - React 应用搭配 Node.js 后端和 Mongo 数据库。
- [`React / Rust / PostgreSQL`](react-rust-postgres) - React 应用搭配 Rust 后端和 Postgres 数据库。
- [`React / Nginx`](react-nginx) - React 应用搭配 Nginx。
- [`Spring / PostgreSQL`](spring-postgres) - Java 应用使用 Spring 框架和 Postgres 数据库。
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Wasm Web 应用使用静态 HTML 前端和 MySQL (MariaDB)；前端连接由 Rust 编写、通过 WasmEdge 运行时运行的 Wasm 微服务。&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible 搭配 Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Wasm 微服务订阅 Kafka (Redpanda) 队列主题，将收到的消息转换并保存到 MySQL (MariaDB)。&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible 搭配 Docker+wasm" height="30" align="top"/></a>

## 单服务示例

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

## 适用于不同平台的基础配置（非生产就绪，适合个人使用）

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - 使用 DoH cloudflared 服务的 Pi-hole 配置示例。
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## 开始使用

这些说明将带你完成使用 Docker Compose 创建和部署容器化应用示例的初始步骤。

### 前置条件

- 请确保已安装 Docker 和 Docker Compose
  - Windows 或 macOS：
    [安装 Docker Desktop](https://www.docker.com/get-started)
  - Linux： [安装 Docker](https://www.docker.com/get-started) 然后安装
    [Docker Compose](https://github.com/docker/compose)
- 从此仓库下载部分或全部示例。

### 运行示例

每个示例的根目录都包含 `compose.yaml`，其中描述了服务组件的配置。进入各示例的根目录并执行以下命令，即可在本地环境运行所有示例：

```console
docker compose up -d
```

查看每个示例的 `README.md`，了解更多结构信息以及预期输出。
若要停止并移除示例应用的所有容器，请运行：

```console
docker compose down
```

### 快速入门指南

除上面列出的可直接运行的 Compose 示例外，[official-documentation-samples](official-documentation-samples/README.md) 文件夹还包含快速入门指南。每份循序渐进的指南都会说明构建和运行 Docker Compose 应用需要创建哪些文件。

<!--lint disable awesome-toc-->
## 参与贡献

我们欢迎帮助人们了解如何使用 Docker Compose 构建常见应用的示例。请参阅[贡献指南](CONTRIBUTING.md)了解详情。 
