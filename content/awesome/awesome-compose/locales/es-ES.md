# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Una lista seleccionada de ejemplos de Docker Compose.

Estos ejemplos sirven como punto de partida para integrar distintos servicios mediante un archivo Compose y gestionar su implementación con Docker Compose.

> **Nota**
> Los siguientes ejemplos están pensados para entornos de desarrollo locales, como configuraciones de proyectos o pruebas de pilas de software. No deben implementarse en producción.

<!--lint disable awesome-toc-->
## Contenido

- [Ejemplos de aplicaciones Docker Compose con varios servicios integrados](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Ejemplos de un solo servicio](#single-service-samples).
- [Configuraciones básicas para distintas plataformas (no aptas para producción; útiles para uso personal)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Ejemplos de aplicaciones Docker Compose con varios servicios integrados

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> El icono indica que este ejemplo es compatible con [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - Aplicación ASP.NET Core con base de datos MS SQL Server.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Pila Elasticsearch, Logstash y Kibana.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Aplicación Go con proxy Nginx y base de datos MySQL.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Aplicación Go con proxy Nginx y base de datos PostgreSQL.
- [`Java Spark / MySQL`](sparkjava-mysql) - Aplicación Java con base de datos MySQL.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Proxy inverso Nginx con backend C# basado en ASP.NET.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Aplicación Python/Flask con proxy Nginx y base de datos Mongo.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Aplicación Python/Flask con proxy Nginx y base de datos MySQL.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Aplicación Node.js con proxy Nginx y base de datos Redis.
- [`NGINX / Go`](nginx-golang) - Proxy Nginx con backend Go.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Proxy inverso Nginx con backend Flask mediante WSGI.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - Configuración PostgreSQL con interfaz web pgAdmin.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask con base de datos Redis.
- [`React / Spring / MySQL`](react-java-mysql) - Aplicación React con backend Spring y base de datos MySQL.
- [`React / Express / MySQL`](react-express-mysql) - Aplicación React con backend Node.js y base de datos MySQL.
- [`React / Express / MongoDB`](react-express-mongodb) - Aplicación React con backend Node.js y base de datos Mongo.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Aplicación React con backend Rust y base de datos Postgres.
- [`React / Nginx`](react-nginx) - Aplicación React con Nginx.
- [`Spring / PostgreSQL`](spring-postgres) - Aplicación Java con Spring framework y base de datos Postgres.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Aplicación web Wasm con interfaz HTML estática y base MySQL (MariaDB); la interfaz se conecta a un microservicio Wasm escrito en Rust y ejecutado por WasmEdge runtime.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible con Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Microservicio Wasm que se suscribe a un tema Kafka (Redpanda), transforma los mensajes recibidos y los guarda en MySQL (MariaDB).&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible con Docker+wasm" height="30" align="top"/></a>

## Ejemplos de un solo servicio

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

## Configuraciones básicas para distintas plataformas (no aptas para producción; útiles para uso personal)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Configuración de Pi-hole con el servicio DoH cloudflared.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## Primeros pasos

Estas instrucciones te guiarán por la fase inicial de creación e implementación de ejemplos de aplicaciones en contenedores con Docker Compose.

### Requisitos previos

- Asegúrate de tener instalados Docker y Docker Compose
  - Windows o macOS:
    [Instalar Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Instalar Docker](https://www.docker.com/get-started) y después
    [Docker Compose](https://github.com/docker/compose)
- Descarga algunos o todos los ejemplos de este repositorio.

### Ejecutar un ejemplo

El directorio raíz de cada ejemplo contiene `compose.yaml`, que describe la configuración de los componentes del servicio. Todos los ejemplos se pueden ejecutar localmente entrando en el directorio raíz de cada uno y ejecutando:

```console
docker compose up -d
```

Consulta el `README.md` de cada ejemplo para obtener más información sobre su estructura y el resultado esperado.
Para detener y eliminar todos los contenedores de la aplicación de ejemplo, ejecuta:

```console
docker compose down
```

### Guías de inicio rápido

Además de los ejemplos Compose listos para ejecutar anteriores, la carpeta [official-documentation-samples](official-documentation-samples/README.md) contiene guías de inicio rápido. Cada guía paso a paso explica qué archivos hay que crear para construir y ejecutar una aplicación Docker Compose.

<!--lint disable awesome-toc-->
## Contribuir

Damos la bienvenida a ejemplos que ayuden a entender cómo usar Docker Compose en aplicaciones habituales. Consulta la [guía de contribución](CONTRIBUTING.md) para obtener más información. 
