# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Docker Compose 샘플을 엄선한 목록입니다.

이 샘플은 Compose 파일로 여러 서비스를 통합하고 Docker Compose로 배포를 관리하는 방법을 시작하는 데 도움이 됩니다.

> **참고**
> 다음 샘플은 프로젝트 설정이나 소프트웨어 스택 실험 등 로컬 개발 환경에서 사용하기 위한 것입니다. 프로덕션 환경에 배포해서는 안 됩니다.

<!--lint disable awesome-toc-->
## 목차

- [여러 서비스를 통합한 Docker Compose 애플리케이션 샘플](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [단일 서비스 샘플](#single-service-samples).
- [플랫폼별 기본 구성 (프로덕션용이 아니며 개인 용도에 적합)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## 여러 서비스를 통합한 Docker Compose 애플리케이션 샘플

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> 아이콘은 이 샘플이 다음과 호환됨을 나타냅니다: [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - MS SQL Server 데이터베이스를 사용하는 ASP.NET Core 애플리케이션.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Elasticsearch, Logstash, Kibana 스택.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Nginx 프록시와 MySQL 데이터베이스를 사용하는 Go 애플리케이션.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Nginx 프록시와 PostgreSQL 데이터베이스를 사용하는 Go 애플리케이션.
- [`Java Spark / MySQL`](sparkjava-mysql) - Java 애플리케이션과 MySQL 데이터베이스.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - ASP.NET 기반 C# 백엔드가 있는 Nginx 리버스 프록시.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Nginx 프록시와 Mongo 데이터베이스를 사용하는 Python/Flask 애플리케이션.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Nginx 프록시와 MySQL 데이터베이스를 사용하는 Python/Flask 애플리케이션.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Nginx 프록시와 Redis 데이터베이스를 사용하는 Node.js 애플리케이션.
- [`NGINX / Go`](nginx-golang) - Go 백엔드가 있는 Nginx 프록시.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - WSGI Flask 백엔드가 있는 Nginx 리버스 프록시.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - pgAdmin 웹 인터페이스를 포함한 PostgreSQL 구성.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask와 Redis 데이터베이스.
- [`React / Spring / MySQL`](react-java-mysql) - Spring 백엔드와 MySQL을 사용하는 React 애플리케이션.
- [`React / Express / MySQL`](react-express-mysql) - Node.js 백엔드와 MySQL을 사용하는 React 애플리케이션.
- [`React / Express / MongoDB`](react-express-mongodb) - Node.js 백엔드와 Mongo를 사용하는 React 애플리케이션.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Rust 백엔드와 Postgres를 사용하는 React 애플리케이션.
- [`React / Nginx`](react-nginx) - Nginx를 사용하는 React 애플리케이션.
- [`Spring / PostgreSQL`](spring-postgres) - Spring framework와 Postgres를 사용하는 Java 애플리케이션.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - 정적 HTML 프런트엔드와 MySQL (MariaDB)을 사용하는 Wasm 웹 애플리케이션. 프런트엔드는 Rust로 작성되어 WasmEdge runtime에서 실행되는 Wasm 마이크로서비스에 연결됩니다.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible 및 Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Kafka (Redpanda) 큐 토픽을 구독하고 수신 메시지를 변환해 MySQL (MariaDB)에 저장하는 Wasm 마이크로서비스.&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible 및 Docker+wasm" height="30" align="top"/></a>

## 단일 서비스 샘플

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

## 플랫폼별 기본 구성 (프로덕션용이 아니며 개인 용도에 적합)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - DoH cloudflared 서비스를 사용하는 Pi-hole 구성.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## 시작하기

이 안내에서는 Docker Compose로 컨테이너화된 애플리케이션 샘플을 만들고 배포하는 초기 단계를 설명합니다.

### 사전 요구 사항

- Docker와 Docker Compose가 설치되어 있는지 확인하세요
  - Windows 또는 macOS:
    [Docker Desktop 설치](https://www.docker.com/get-started)
  - Linux: [Docker 설치](https://www.docker.com/get-started) 그런 다음
    [Docker Compose](https://github.com/docker/compose)
- 이 저장소에서 일부 또는 전체 샘플을 다운로드하세요.

### 샘플 실행

각 샘플의 루트 디렉터리에는 서비스 구성 요소의 구성을 설명하는 `compose.yaml`이 있습니다. 각 루트 디렉터리로 이동해 다음을 실행하면 모든 샘플을 로컬 환경에서 실행할 수 있습니다:

```console
docker compose up -d
```

구조와 예상 출력에 대한 자세한 내용은 각 샘플의 `README.md`를 확인하세요.
샘플 애플리케이션의 모든 컨테이너를 중지하고 제거하려면 다음을 실행하세요:

```console
docker compose down
```

### 빠른 시작 가이드

위에 나열된 바로 실행할 수 있는 Compose 샘플 외에도 [official-documentation-samples](official-documentation-samples/README.md) 폴더에 빠른 시작 가이드가 있습니다. 각 단계별 가이드는 Docker Compose 애플리케이션을 빌드하고 실행하는 데 필요한 파일을 설명합니다.

<!--lint disable awesome-toc-->
## 기여하기

일반적인 애플리케이션에 Docker Compose를 사용하는 방법을 이해하는 데 도움이 되는 예제를 환영합니다. 자세한 내용은 [기여 가이드](CONTRIBUTING.md)를 확인하세요. 
