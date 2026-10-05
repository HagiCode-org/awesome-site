# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Une sélection d’exemples Docker Compose.

Ces exemples constituent un point de départ pour intégrer différents services à l’aide d’un fichier Compose et gérer leur déploiement avec Docker Compose.

> **Remarque**
> Les exemples suivants sont destinés aux environnements de développement locaux, tels que la configuration de projets ou l’expérimentation de piles logicielles. Ils ne doivent pas être déployés en production.

<!--lint disable awesome-toc-->
## Sommaire

- [Exemples d’applications Docker Compose intégrant plusieurs services](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Exemples de services uniques](#single-service-samples).
- [Configurations de base pour différentes plateformes (non adaptées à la production, utiles à titre personnel)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Exemples d’applications Docker Compose intégrant plusieurs services

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> L’icône indique que cet exemple est compatible avec [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - Exemple d’application ASP.NET Core avec une base MS SQL Server.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Exemple de pile Elasticsearch, Logstash et Kibana.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Application Go avec proxy Nginx et base MySQL.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Application Go avec proxy Nginx et base PostgreSQL.
- [`Java Spark / MySQL`](sparkjava-mysql) - Application Java avec base MySQL.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Proxy inverse Nginx avec backend C# sous ASP.NET.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Application Python/Flask avec proxy Nginx et base Mongo.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Application Python/Flask avec proxy Nginx et base MySQL.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Application Node.js avec proxy Nginx et base Redis.
- [`NGINX / Go`](nginx-golang) - Proxy Nginx avec backend Go.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Proxy inverse Nginx avec backend Flask via WSGI.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - Configuration PostgreSQL avec interface Web pgAdmin.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask avec base Redis.
- [`React / Spring / MySQL`](react-java-mysql) - Application React avec backend Spring et base MySQL.
- [`React / Express / MySQL`](react-express-mysql) - Application React avec backend Node.js et base MySQL.
- [`React / Express / MongoDB`](react-express-mongodb) - Application React avec backend Node.js et base Mongo.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Application React avec backend Rust et base Postgres.
- [`React / Nginx`](react-nginx) - Application React avec Nginx.
- [`Spring / PostgreSQL`](spring-postgres) - Application Java avec framework Spring et base Postgres.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Application Web Wasm avec interface HTML statique et base MySQL (MariaDB) ; l’interface se connecte à un microservice Wasm écrit en Rust et exécuté par le runtime WasmEdge.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible avec Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Microservice Wasm abonné à un sujet Kafka (Redpanda), qui transforme les messages reçus et les enregistre dans MySQL (MariaDB).&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible avec Docker+wasm" height="30" align="top"/></a>

## Exemples de services uniques

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

## Configurations de base pour différentes plateformes (non adaptées à la production, utiles à titre personnel)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Configuration Pi-hole utilisant le service DoH cloudflared.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## Pour commencer

Ces instructions vous accompagnent dans la phase initiale de création et de déploiement d’exemples d’applications conteneurisées avec Docker Compose.

### Prérequis

- Assurez-vous que Docker et Docker Compose sont installés
  - Windows ou macOS :
    [Installer Docker Desktop](https://www.docker.com/get-started)
  - Linux : [Installer Docker](https://www.docker.com/get-started) puis
    [Docker Compose](https://github.com/docker/compose)
- Téléchargez quelques exemples ou l’ensemble de ceux de ce dépôt.

### Exécuter un exemple

Le répertoire racine de chaque exemple contient le fichier `compose.yaml`, qui décrit la configuration des composants de service. Tous les exemples peuvent être exécutés localement en accédant à leur répertoire racine et en lançant :

```console
docker compose up -d
```

Consultez le `README.md` de chaque exemple pour en savoir plus sur sa structure et le résultat attendu.
Pour arrêter et supprimer tous les conteneurs de l’application exemple, exécutez :

```console
docker compose down
```

### Guides de démarrage rapide

En plus des exemples Compose prêts à l’emploi ci-dessus, le dossier [official-documentation-samples](official-documentation-samples/README.md) contient des guides de démarrage rapide. Chaque guide pas à pas explique quels fichiers créer pour construire et exécuter une application Docker Compose.

<!--lint disable awesome-toc-->
## Contribuer

Nous accueillons les exemples qui aident à comprendre l’utilisation de Docker Compose pour des applications courantes. Consultez le [guide de contribution](CONTRIBUTING.md) pour en savoir plus. 
