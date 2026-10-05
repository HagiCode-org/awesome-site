# Awesome Compose [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![logo](awesome-compose.jpg)

> Uma lista selecionada de exemplos do Docker Compose.

Estes exemplos servem como ponto de partida para integrar diferentes serviços usando um arquivo Compose e gerenciar sua implantação com o Docker Compose.

> **Observação**
> Os exemplos a seguir destinam-se a ambientes de desenvolvimento locais, como configurações de projetos e experimentação com pilhas de software. Eles não devem ser implantados em produção.

<!--lint disable awesome-toc-->
## Conteúdo

- [Exemplos de aplicações Docker Compose com vários serviços integrados](#samples-of-docker-compose-applications-with-multiple-integrated-services).
- [Exemplos de serviço único](#single-service-samples).
- [Configurações básicas para diferentes plataformas (não prontas para produção; úteis para uso pessoal)](#basic-setups-for-different-platforms-not-production-ready---useful-for-personal-use).

## Exemplos de aplicações Docker Compose com vários serviços integrados

<a href="https://docs.docker.com/desktop/wasm/"><img src="icon_wasm.svg" alt="Docker + wasm" height="30" align="top"/></a> O ícone indica que este exemplo é compatível com [Docker+Wasm](https://docs.docker.com/desktop/wasm/).

- [`ASP.NET / MS-SQL`](aspnet-mssql) - Aplicação ASP.NET Core com banco de dados MS SQL Server.
- [`Elasticsearch / Logstash / Kibana`](elasticsearch-logstash-kibana) - Pilha Elasticsearch, Logstash e Kibana.
- [`Go / NGINX / MySQL`](nginx-golang-mysql) - Aplicação Go com proxy Nginx e banco de dados MySQL.
- [`Go / NGINX / PostgreSQL`](nginx-golang-postgres) - Aplicação Go com proxy Nginx e banco de dados PostgreSQL.
- [`Java Spark / MySQL`](sparkjava-mysql) - Aplicação Java com banco de dados MySQL.
- [`NGINX / ASP.NET / MySQL`](nginx-aspnet-mysql) - Proxy reverso Nginx com backend C# usando ASP.NET.
- [`NGINX / Flask / MongoDB`](nginx-flask-mongo) - Aplicação Python/Flask com proxy Nginx e banco de dados Mongo.
- [`NGINX / Flask / MySQL`](nginx-flask-mysql) - Aplicação Python/Flask com proxy Nginx e banco de dados MySQL.
- [`NGINX / Node.js / Redis`](nginx-nodejs-redis) - Aplicação Node.js com proxy Nginx e banco de dados Redis.
- [`NGINX / Go`](nginx-golang) - Proxy Nginx com backend Go.
- [`NGINX / WSGI / Flask`](nginx-wsgi-flask) - Proxy reverso Nginx com backend Flask via WSGI.
- [`PostgreSQL / pgAdmin`](postgresql-pgadmin) - Configuração PostgreSQL com interface web pgAdmin.
- [`Python / Flask / Redis`](flask-redis) - Python/Flask com banco de dados Redis.
- [`React / Spring / MySQL`](react-java-mysql) - Aplicação React com backend Spring e banco de dados MySQL.
- [`React / Express / MySQL`](react-express-mysql) - Aplicação React com backend Node.js e banco de dados MySQL.
- [`React / Express / MongoDB`](react-express-mongodb) - Aplicação React com backend Node.js e banco de dados Mongo.
- [`React / Rust / PostgreSQL`](react-rust-postgres) - Aplicação React com backend Rust e banco de dados Postgres.
- [`React / Nginx`](react-nginx) - Aplicação React com Nginx.
- [`Spring / PostgreSQL`](spring-postgres) - Aplicação Java com Spring framework e banco de dados Postgres.
- [`WasmEdge / MySQL / Nginx`](wasmedge-mysql-nginx) - Aplicação web Wasm com frontend HTML estático e banco MySQL (MariaDB); o frontend se conecta a um microsserviço Wasm escrito em Rust e executado pelo WasmEdge runtime.&nbsp;<a href="wasmedge-mysql-nginx"><img src="icon_wasm.svg" alt="Compatible com Docker+wasm" height="30" align="top"/></a>
- [`WasmEdge / Kafka / MySQL`](wasmedge-kafka-mysql) - Microsserviço Wasm que assina um tópico Kafka (Redpanda), transforma as mensagens recebidas e as salva no MySQL (MariaDB).&nbsp;<a href="wasmedge-kafka-mysql"><img src="icon_wasm.svg" alt="Compatible com Docker+wasm" height="30" align="top"/></a>

## Exemplos de serviço único

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

## Configurações básicas para diferentes plataformas (não prontas para produção; úteis para uso pessoal)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Configuração Pi-hole usando o serviço DoH cloudflared.
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

## Primeiros passos

Estas instruções guiarão você pela etapa inicial de criação e implantação de exemplos de aplicações em contêineres com o Docker Compose.

### Pré-requisitos

- Verifique se o Docker e o Docker Compose estão instalados
  - Windows ou macOS:
    [Instale o Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Instale o Docker](https://www.docker.com/get-started) e depois
    [Docker Compose](https://github.com/docker/compose)
- Baixe alguns ou todos os exemplos deste repositório.

### Executar um exemplo

O diretório raiz de cada exemplo contém o `compose.yaml`, que descreve a configuração dos componentes do serviço. Todos os exemplos podem ser executados localmente acessando o diretório raiz de cada um e executando:

```console
docker compose up -d
```

Consulte o `README.md` de cada exemplo para obter mais detalhes sobre a estrutura e o resultado esperado.
Para parar e remover todos os contêineres do aplicativo de exemplo, execute:

```console
docker compose down
```

### Guias de início rápido

Além dos exemplos Compose prontos para execução listados acima, a pasta [official-documentation-samples](official-documentation-samples/README.md) contém guias de início rápido. Cada guia passo a passo explica quais arquivos precisam ser criados para montar e executar uma aplicação Docker Compose.

<!--lint disable awesome-toc-->
## Contribuir

Aceitamos exemplos que ajudem as pessoas a entender como usar o Docker Compose em aplicações comuns. Consulte o [guia de contribuição](CONTRIBUTING.md) para saber mais. 
