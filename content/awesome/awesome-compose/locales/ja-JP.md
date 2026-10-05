# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Docker Compose のサンプルを厳選したリストです。

これらのサンプルは、Compose ファイルを使ってさまざまなサービスを統合し、Docker Compose でデプロイを管理するための出発点になります。

> **注意**
> 次のサンプルは、プロジェクトのセットアップやソフトウェアスタックの試用など、ローカル開発環境での利用を想定しています。本番環境にはデプロイしないでください。

<!--lint disable awesome-toc-->
## 目次

- [複数のサービスを統合した Docker Compose アプリケーションのサンプル](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [単一サービスのサンプル](#single-service-samples).
- [各種プラットフォーム向けの基本構成（本番環境向けではなく、個人利用に便利）](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## 複数のサービスを統合した Docker Compose アプリケーションのサンプル

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> このアイコンは、このサンプルが次に対応していることを示します： [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - MS SQL Server データベースを使用する ASP.NET Core アプリケーション。
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Elasticsearch、Logstash、Kibana のスタック。
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Nginx プロキシと MySQL データベースを使用する Go アプリケーション。
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Nginx プロキシと PostgreSQL データベースを使用する Go アプリケーション。
- [`Java Spark / MySQL`](sparkjava-mysql) - Java アプリケーションと MySQL データベース。
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - ASP.NET の C# バックエンドを備えた Nginx リバースプロキシ。
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Nginx プロキシと Mongo データベースを使用する Python/Flask アプリケーション。
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Nginx プロキシと MySQL データベースを使用する Python/Flask アプリケーション。
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Nginx プロキシと Redis データベースを使用する Node.js アプリケーション。
- [`NGINX / Go`](nginx-golang) - Go バックエンドを備えた Nginx プロキシ。
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - WSGI の Flask バックエンドを備えた Nginx リバースプロキシ。
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - pgAdmin Web インターフェースを備えた PostgreSQL 構成。
- [`Python / Flask / Redis`](flask-redis) - Python/Flask と Redis データベース。
- [`React / Spring / MySQL`](react-java-mysql) - Spring バックエンドと MySQL を使用する React アプリケーション。
- [`React / Express / MySQL`](react-express-mysql) - Node.js バックエンドと MySQL を使用する React アプリケーション。
- [`React / Express / MongoDB`](react-express-mongodb) - Node.js バックエンドと Mongo を使用する React アプリケーション。
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Rust バックエンドと Postgres を使用する React アプリケーション。
- [`React / Nginx`](react-nginx) - Nginx を使用する React アプリケーション。
- [`Spring / PostgreSQL`](spring-postgres) - Spring framework と Postgres を使用する Java アプリケーション。
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - 静的 HTML フロントエンドと MySQL (MariaDB) を使用する Wasm Web アプリ。フロントエンドは Rust 製で WasmEdge runtime 上で動く Wasm マイクロサービスに接続します。&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible と Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Kafka (Redpanda) キュートピックを購読し、受信メッセージを変換して MySQL (MariaDB) に保存する Wasm マイクロサービス。&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible と Docker+wasm" height="30" align="top"/></a>

## 単一サービスのサンプル

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

## 各種プラットフォーム向けの基本構成（本番環境向けではなく、個人利用に便利）

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - DoH cloudflared サービスを使う Pi-hole 構成。
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## はじめに

この手順では、Docker Compose を使ってコンテナー化アプリケーションのサンプルを作成・デプロイする初期段階を説明します。

### 前提条件

- Docker と Docker Compose がインストールされていることを確認してください
  - Windows または macOS：
    [Docker Desktop をインストール](https://www.docker.com/get-started)
  - Linux： [Docker をインストール](https://www.docker.com/get-started) してから
    [Docker Compose](https://github.com/docker/compose)
- このリポジトリからサンプルの一部またはすべてをダウンロードします。

### サンプルの実行

各サンプルのルートディレクトリには、サービスコンポーネントの構成を記述した `compose.yaml` があります。それぞれのルートディレクトリに移動して次を実行すると、すべてのサンプルをローカル環境で実行できます：

```console
docker compose up -d
```

構成や想定される出力の詳細は、各サンプルの `README.md` を確認してください。
サンプルアプリケーションのすべてのコンテナーを停止して削除するには、次を実行します：

```console
docker compose down
```

### クイックスタートガイド

上記のすぐに実行できる Compose サンプルに加え、[official-documentation-samples](official-documentation-samples/README.md) フォルダーにはクイックスタートガイドがあります。各手順ガイドでは、Docker Compose アプリケーションの構築と実行に必要なファイルを説明します。

<!--lint disable awesome-toc-->
## コントリビューション

一般的なアプリケーションで Docker Compose を使う方法を理解する助けとなる例を歓迎します。詳しくは[コントリビューションガイド](CONTRIBUTING.md)をご覧ください。 
