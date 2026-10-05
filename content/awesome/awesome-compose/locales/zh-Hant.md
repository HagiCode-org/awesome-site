# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Docker Compose 範例精選清單。

這些範例示範如何使用 Compose 檔案整合不同服務，並透過 Docker Compose 管理部署。

> **注意**
> 以下範例適用於本機開發環境，例如專案設定、軟體堆疊試用等。請勿將這些範例部署至正式環境。

<!--lint disable awesome-toc-->
## 目錄

- [整合多項服務的 Docker Compose 應用程式範例](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [單一服務範例](#single-service-samples).
- [適用於不同平台的基本設定（非正式環境就緒，適合個人使用）](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## 整合多項服務的 Docker Compose 應用程式範例

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> 圖示表示此範例相容於 [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - ASP.NET Core 應用程式搭配 MS SQL Server 資料庫範例。
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Elasticsearch、Logstash 和 Kibana 技術堆疊範例。
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Go 應用程式搭配 Nginx Proxy 和 MySQL 資料庫。
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Go 應用程式搭配 Nginx Proxy 和 PostgreSQL 資料庫。
- [`Java Spark / MySQL`](sparkjava-mysql) - Java 應用程式與 MySQL 資料庫範例。
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Nginx 反向 Proxy，後端為 ASP.NET C# 應用程式。
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Python/Flask 應用程式搭配 Nginx Proxy 和 Mongo 資料庫。
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Python/Flask 應用程式搭配 Nginx Proxy 和 MySQL 資料庫。
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Node.js 應用程式搭配 Nginx Proxy 和 Redis 資料庫。
- [`NGINX / Go`](nginx-golang) - Nginx Proxy 搭配 Go 後端。
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Nginx 反向 Proxy 搭配 WSGI Flask 後端。
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - PostgreSQL 資料庫與 pgAdmin 網頁介面設定。
- [`Python / Flask / Redis`](flask-redis) - Python/Flask 與 Redis 資料庫範例。
- [`React / Spring / MySQL`](react-java-mysql) - React 應用程式搭配 Spring 後端和 MySQL 資料庫。
- [`React / Express / MySQL`](react-express-mysql) - React 應用程式搭配 Node.js 後端和 MySQL 資料庫。
- [`React / Express / MongoDB`](react-express-mongodb) - React 應用程式搭配 Node.js 後端和 Mongo 資料庫。
- [`React / Rust / PostgreSQL`](react-rust-postgres) - React 應用程式搭配 Rust 後端和 Postgres 資料庫。
- [`React / Nginx`](react-nginx) - React 應用程式搭配 Nginx。
- [`Spring / PostgreSQL`](spring-postgres) - Java 應用程式使用 Spring framework 和 Postgres 資料庫。
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Wasm Web 應用程式使用靜態 HTML 前端和 MySQL (MariaDB)；前端連線至以 Rust 撰寫、透過 WasmEdge runtime 執行的 Wasm 微服務。&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible 搭配 Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Wasm 微服務訂閱 Kafka (Redpanda) 佇列主題，轉換收到的訊息並儲存至 MySQL (MariaDB)。&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible 搭配 Docker+wasm" height="30" align="top"/></a>

## 單一服務範例

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

## 適用於不同平台的基本設定（非正式環境就緒，適合個人使用）

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - 使用 DoH cloudflared 服務的 Pi-hole 設定範例。
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## 開始使用

這些說明將帶您完成使用 Docker Compose 建立及部署容器化應用程式範例的起始步驟。

### 必要條件

- 請確認已安裝 Docker 和 Docker Compose
  - Windows 或 macOS：
    [安裝 Docker Desktop](https://www.docker.com/get-started)
  - Linux： [安裝 Docker](https://www.docker.com/get-started) 接著安裝
    [Docker Compose](https://github.com/docker/compose)
- 從此儲存庫下載部分或全部範例。

### 執行範例

每個範例的根目錄都包含 `compose.yaml`，用來描述服務元件的設定。進入各範例的根目錄並執行下列指令，即可在本機環境執行所有範例：

```console
docker compose up -d
```

查看每個範例的 `README.md`，進一步了解其結構和預期輸出。
若要停止並移除範例應用程式的所有容器，請執行：

```console
docker compose down
```

### 快速入門指南

除了上方列出的可直接執行 Compose 範例，[official-documentation-samples](official-documentation-samples/README.md) 資料夾也包含快速入門指南。每份逐步指南都會說明建置和執行 Docker Compose 應用程式需要建立哪些檔案。

<!--lint disable awesome-toc-->
## 貢獻

歡迎提供範例，協助大家了解如何使用 Docker Compose 建立常見應用程式。詳情請參閱[貢獻指南](CONTRIBUTING.md)。 
