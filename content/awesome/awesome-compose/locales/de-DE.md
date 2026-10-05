# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Eine kuratierte Sammlung von Docker-Compose-Beispielen.

Diese Beispiele bieten einen Einstieg, um verschiedene Dienste mithilfe einer Compose-Datei zu integrieren und ihre Bereitstellung mit Docker Compose zu verwalten.

> **Hinweis**
> Die folgenden Beispiele sind für lokale Entwicklungsumgebungen gedacht, etwa für Projekte oder zum Ausprobieren von Software-Stacks. Sie dürfen nicht in Produktionsumgebungen eingesetzt werden.

<!--lint disable awesome-toc-->
## Inhalt

- [Docker-Compose-Beispiele mit mehreren integrierten Diensten](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Beispiele für einzelne Dienste](#single-service-samples).
- [Grundkonfigurationen für verschiedene Plattformen (nicht produktionsreif, für den persönlichen Gebrauch geeignet)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Docker-Compose-Beispiele mit mehreren integrierten Diensten

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> Das Symbol kennzeichnet, dass dieses Beispiel mit Docker+Wasm kompatibel ist [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - ASP.NET-Core-Anwendung mit MS-SQL-Server-Datenbank.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Elasticsearch-, Logstash- und Kibana-Stack.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Go-Anwendung mit Nginx-Proxy und MySQL-Datenbank.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Go-Anwendung mit Nginx-Proxy und PostgreSQL-Datenbank.
- [`Java Spark / MySQL`](sparkjava-mysql) - Java-Anwendung mit MySQL-Datenbank.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Nginx-Reverse-Proxy mit C#-Backend auf ASP.NET-Basis.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Python/Flask-Anwendung mit Nginx-Proxy und Mongo-Datenbank.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Python/Flask-Anwendung mit Nginx-Proxy und MySQL-Datenbank.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Node.js-Anwendung mit Nginx-Proxy und Redis-Datenbank.
- [`NGINX / Go`](nginx-golang) - Nginx-Proxy mit Go-Backend.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Nginx-Reverse-Proxy mit Flask-Backend über WSGI.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - PostgreSQL-Konfiguration mit pgAdmin-Weboberfläche.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask mit Redis-Datenbank.
- [`React / Spring / MySQL`](react-java-mysql) - React-Anwendung mit Spring-Backend und MySQL-Datenbank.
- [`React / Express / MySQL`](react-express-mysql) - React-Anwendung mit Node.js-Backend und MySQL-Datenbank.
- [`React / Express / MongoDB`](react-express-mongodb) - React-Anwendung mit Node.js-Backend und Mongo-Datenbank.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - React-Anwendung mit Rust-Backend und Postgres-Datenbank.
- [`React / Nginx`](react-nginx) - React-Anwendung mit Nginx.
- [`Spring / PostgreSQL`](spring-postgres) - Java-Anwendung mit Spring-Framework und Postgres-Datenbank.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Wasm-Webanwendung mit statischem HTML-Frontend und MySQL-(MariaDB-)Datenbank; das Frontend verbindet sich mit einem in Rust geschriebenen Wasm-Microservice in der WasmEdge-Runtime.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible mit Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Wasm-Microservice, der ein Kafka-(Redpanda-)Queue-Thema abonniert, eingehende Nachrichten umwandelt und in MySQL (MariaDB) speichert.&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible mit Docker+wasm" height="30" align="top"/></a>

## Beispiele für einzelne Dienste

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

## Grundkonfigurationen für verschiedene Plattformen (nicht produktionsreif, für den persönlichen Gebrauch geeignet)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Pi-hole-Konfiguration mit dem DoH-Dienst cloudflared.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## Erste Schritte

Diese Anleitung führt durch die ersten Schritte zum Erstellen und Bereitstellen containerisierter Anwendungsbeispiele mit Docker Compose.

### Voraussetzungen

- Stelle sicher, dass Docker und Docker Compose installiert sind
  - Windows oder macOS:
    [Docker Desktop installieren](https://www.docker.com/get-started)
  - Linux: [Docker installieren](https://www.docker.com/get-started) und anschließend
    [Docker Compose](https://github.com/docker/compose)
- Lade einige oder alle Beispiele aus diesem Repository herunter.

### Ein Beispiel ausführen

Das Stammverzeichnis jedes Beispiels enthält die Datei `compose.yaml`, in der die Konfiguration der Dienstkomponenten beschrieben ist. Alle Beispiele lassen sich lokal ausführen, indem du in das jeweilige Stammverzeichnis wechselst und folgenden Befehl ausführst:

```console
docker compose up -d
```

Weitere Informationen zur Struktur und zur erwarteten Ausgabe findest du in der `README.md` jedes Beispiels.
Zum Stoppen und Entfernen aller Container der Beispielanwendung führe Folgendes aus:

```console
docker compose down
```

### Schnellstartanleitungen

Zusätzlich zu den oben aufgeführten sofort ausführbaren Compose-Beispielen enthält der Ordner [official-documentation-samples](official-documentation-samples/README.md) Schnellstartanleitungen. Jede Schritt-für-Schritt-Anleitung erläutert, welche Dateien zum Erstellen und Ausführen einer Docker-Compose-Anwendung benötigt werden.

<!--lint disable awesome-toc-->
## Mitwirken

Wir freuen uns über Beispiele, die zeigen, wie Docker Compose für gängige Anwendungen eingesetzt wird. Weitere Informationen enthält der [Contribution Guide](CONTRIBUTING.md). 
