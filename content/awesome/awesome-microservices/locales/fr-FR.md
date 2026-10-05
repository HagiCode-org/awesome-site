# Sélection de ressources sur les microservices [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Une liste des principes et technologies liés à l'architecture de microservice.

**Sommaire**

- [Plateformes](#platforms)
- [Cadres / temps d'exécution](#frameworks--runtimes)
- [Outils de service](#service-toolkits)
  - [Polyglotte](#polyglot)
  - [C](#c)
  - [C++](#c-1)
  - [C#](#csharp)
  - [D](#d)
  - [Erlang VM](#erlang-vm)
  - [Allez](#go)
  - [Haskell](#haskell)
  - [Java VM](#java-vm)
  - [Node.js](#nodejs)
  - [Pourcentage](#perl)
  - [PHP](#php)
  - [Python](#python)
  - [Rubis](#ruby)
  - [Rouille](#rust)
- [Frontend / UI](#frontend--ui)
- [Capacités](#capabilities)
  - [Passerelles d'API / Services de bord](#api-gateways--edge-services)
  - [Configuration & Découverte](#configuration--discovery)
  - [Orchestration de flux de travail](#workflow-orchestration)
  - [Élasticité](#elasticity)
  - [Programmeurs d'emplois / Automatisation de la charge de travail](#job-schedulers--workload-automation)
  - [Développement local](#local-development)
  - [Exploitation forestière](#logging)
  - [Messagerie](#messaging)
  - [Surveillance et débogage](#monitoring--debugging)
  - [Réactivité](#reactivity)
  - [Résilience](#resilience)
  - [Sécurité](#security)
  - [Sérialisation](#serialization)
  - [Stockage](#storage)
  - [Essais](#testing)
- [Intégration et livraison continues](#continuous-integration--delivery)
- [Modélisation et documentation des API Web](#web-api-modeling--documentation)
  - [Async](#async)
  - [GraphiqueQL](#graphql)
  - [JSON](#json)
  - [REST](#rest)
- [Normes et recommandations](#standards--recommendations)
  - [Réseau mondial](#world-wide-web)
  - [Autosouverainité et décentralisation](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2](#http2)
  - [QUIC](#quic)
  - [RPC](#rpc)
  - [Messagerie](#messaging-1)
  - [Sécurité](#security-1)
  - [Découverte des services](#service-discovery)
  - [Formats de données](#data-formats)
  - [Vocabulaires](#vocabularies)
  - [Unicode](#unicode)
- [Conception de l'organisation / Dynamique d'équipe](#organization-design--team-dynamics)
- [Entreprise & Verticals](#enterprise--verticals)
- [Théorie](#theory)
  - [Articles et papiers](#articles--papers)
  - [Sites et organisations](#sites--organizations)
- [Licence](#license)
- [Contribution](#contributing)

## Plateformes

- [1Backend](https://github.com/1backend/1backend) - Plate-forme de microservices natifs de l'IA.
- [Jolie](https://jolie-lang.org) - Langue de programmation axée sur le microservice.
- [OpenWhisk](https://github.com/apache/openwhisk) - Plateforme cloud open source sans serveur qui exécute des fonctions en réponse à des événements à n'importe quelle échelle.
- [Pulumi](https://pulumi.io/) - SDK pour l'infrastructure native du cloud comme code. Utilisez votre langue préférée pour prévisualiser et gérer les mises à jour de vos applications et de votre infrastructure, et déployer en permanence dans tout nuage (pas de YAML requis).
- [Triton](https://github.com/joyent/triton) - Plateforme de gestion du cloud open source qui fournit une infrastructure de prochaine génération, basée sur des conteneurs, orientée vers le service dans un ou plusieurs centres de données.

## Cadres / temps d'exécution

- [Akka](http://akka.io/) - Boîte à outils et temps d'exécution pour la construction d'applications très concurrentes, distribuées et résilientes sur le JVM.
- [Axon (c)](https://axoniq.io/) - Une plate-forme de développement et d'infrastructure de bout en bout pour le développement et le fonctionnement de toutes les applications DDD, CQRS et Event Sourcing sur JVM.
- [Ballerina](https://ballerina.io) - Langue de programmation native Cloud.
- [Bun](https://bun.sh/) - Exécution JavaScript tout-en-un rapide.
- [Dapr](https://dapr.io) - Open source runtime pour écrire des microservices hautement performants en utilisant n'importe quel langage de programmation.
- [Deno](https://deno.land/) - JavaScript, TypeScript et WebAssembly runtime avec des valeurs par défaut sécurisées et une excellente expérience de développeur.
- [Eclipse Microprofile](https://microprofile.io/) - Un forum ouvert pour optimiser Enterprise Java pour une architecture de microservices en innovant à travers de multiples implémentations et en collaborant sur des domaines d'intérêt communs dans un but de normalisation.
- [Erlang/OTP](https://github.com/erlang/otp) - Langage de programmation utilisé pour construire des systèmes en temps réel soft massivement évolutives avec des exigences en haute disponibilité.
- [Finagle](http://twitter.github.io/finagle) - Système RPC extensible pour le JVM, utilisé pour construire des serveurs à haute devises.
- [Gleam](https://gleam.run/) - Un langage convivial pour construire des systèmes de type sûr et évolutive.
- [GraalVM](https://www.graalvm.org/) - Durée d'exécution haute performance qui apporte des améliorations significatives dans les performances d'application et l'efficacité qui est idéal pour les microservices.
- [Helidon](https://helidon.io/) - Collection de bibliothèques Java pour l'écriture de microservices qui fonctionnent sur un noyau web rapide alimenté par Netty.
- [Ice](https://github.com/zeroc-ice/ice) - Cadre RPC complet avec support pour C++, C#, Java, JavaScript, Python, etc.
- [Light-4j](https://github.com/networknt/light-4j) - Un débit élevé, faible latence, une petite empreinte mémoire et une plateforme de microservices plus productive.
- [Micronaut](http://micronaut.io/) - Un cadre moderne, basé sur JVM, complet pour construire des applications de microservice modulaires et facilement testables.
- [Moleculer](http://moleculer.services/) - Cadre de microservices rapide et puissant pour Node.js, Java, Go et Ruby.
- [Open Liberty](https://openliberty.io/) - Un cadre ouvert léger pour la construction rapide et efficace de microservices Java natifs du cloud.
- [Pears](https://github.com/holepunchto/pear) - Durée d'exécution, développement et déploiement.
- [SmallRye](https://smallrye.io/) - API et implémentations adaptées au développement du cloud, y compris Eclipse MicroProfile.
- [Spin](https://github.com/fermyon/spin) - Un cadre open source pour construire et exécuter des microservices cloud rapides, sécurisés et composables avec WebAssembly.
- [ScaleCube](https://github.com/scalecube/scalecube) - Boîte à outils pour la construction de microservices réactifs pour le JVM : faible latence, haut débit, évolutive et résistante.
- [Vert.X](http://vertx.io/) - Boîte à outils pour la construction d'applications réactives sur le JVM.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Un ensemble de composants Vert.x pour construire des applications de microservices réactifs.
- [Wangle](https://github.com/facebook/wangle) - Un cadre fournissant un ensemble d'abstractions communes client/serveur pour les services de construction de manière cohérente, modulaire et compacte.

## Outils de service

### Polyglotte

- [GRPC](http://www.grpc.io/) - Un framework RPC général haute performance, open source qui place le mobile et HTTP/2 en premier. Bibliothèques en C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP et C#.

### C

- [Lwan](http://lwan.ws/) - Serveur web haute performance et évolutive.
- [uSockets](https://github.com/uNetworking/uSockets) - Miniscule multiplateforme événementiel, réseau & crypto pour les applications async.

### C++
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - La mise en œuvre du CPR Cap.
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - Un système de module dynamique de type OSGi C++ et un registre de services.
- [Enduro/X](https://github.com/endurox-dev/endurox/) - Cadre de service XATMI pour GNU/Linux.
- [Pistache](https://github.com/oktal/pistache) - Une boîte à outils REST haute performance écrite en C++.
- [Poco](http://pocoproject.org/) - Bibliothèques de classe C++ pour la construction d'applications et de serveurs en réseau.
- [Sogou Workflow](https://github.com/sogou/workflow) - Moteur de programmation de qualité Enterprise visant à satisfaire la plupart des exigences de développement de moteur.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - Serveur web simple, sécurisé et conforme aux normes pour les applications les plus exigeantes.

### CSharp

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - Une collection de formations impressionnantes, articles, vidéos, livres, cours, exemples de projets et outils pour les microservices dans .NET Core.

### D

- [Vibe.d](http://vibed.org/) - Des E/S asynchrones qui ne vous gênent pas, écrit en D.

### Erlang VM

#### Elixir

- [Phoenix](http://www.phoenixframework.org/) - Cadre pour la construction d'applications HTML5, de moteurs d'API et de systèmes distribués.
- [Plug](https://github.com/elixir-lang/plug) - Une spécification et des commodités pour les modules composites entre applications web.

#### Erlang

- [Cowboy](https://github.com/ninenines/cowboy) - Petit serveur HTTP rapide et modulaire écrit en Erlang.
- [Mochiweb](https://github.com/mochi/mochiweb) - Bibliothèque Erlang pour la construction de serveurs HTTP légers.

### Allez

- [Chi](https://github.com/go-chi/chi) - Routeur léger, idiomatique et Composable pour la construction de services Go HTTP.
- [Echo](https://echo.labstack.com/) - Cadre de serveur HTTP rapide et sans fin pour Go. Jusqu'à 10x plus rapide que le reste.
- [Fiber](https://github.com/gofiber/fiber) - Express inspired web framework construit sur Fasthttp, le moteur HTTP le plus rapide pour Go. Conçu pour faciliter les choses pour un développement rapide avec une allocation de mémoire zéro et des performances en tête.
- [Gin](https://github.com/gin-gonic/gin) - Gin est un cadre web HTTP écrit en Go (Golang). Il dispose d'une API de type Martini avec de meilleures performances, jusqu'à 40 fois plus rapide.
- [Goa](https://github.com/goadesign/goa) - Microservices HTTP basés sur la conception en Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Un cadre de développement des microservices qui met l'accent sur l'évolutivité et la robustesse. Conçu pour simplifier le développement des microservices.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Un cadre pour le développement rapide des microservices à Go qui est facile à intégrer à certains écosystèmes nuageux.
- [Go-micro](https://github.com/micro/go-micro) - Un cadre de développement des systèmes distribués.
- [Go-zero](https://github.com/tal-tech/go-zero) - Un cadre de développement de systèmes web et rpc distribués.
- [Gorilla](http://www.gorillatoolkit.org/) - Boîte à outils Web pour le langage de programmation Go.
- [Iris](https://github.com/kataras/iris) - Cadre micro web rapide, simple et efficace pour Go.
- [Lura](https://github.com/luraproject/lura) - Cadre pour construire des passerelles API ultra-performantes avec des middlewares.
- [RPCX](https://github.com/smallnest/rpcx) - Un cadre de services RPC distribué basé sur NET/RPC comme Alibaba Dubbo et Weibo Motan.

### Haskell

- [Scotty](https://github.com/scotty-web/scotty) - Micro web framework inspiré de Sinatra de Ruby, utilisant WAI et Warp.
- [Servant](https://github.com/haskell-servant/servant) - DSL de type web.
- [Yesod](https://github.com/yesodweb/yesod) - Le cadre web Haskell RESTful.

### Java VM

#### Clojure

- [Compojure](https://github.com/weavejester/compojure) - Une bibliothèque de routage concise pour Ring/Clojure.
- [Duct](https://duct-framework.org/) - Un cadre côté serveur pour Clojure.
- [System](https://github.com/danielsz/system) - Construit sur la bibliothèque des composants de Stuart Sierra, offre un ensemble de composants prêts à l'emploi.
- [Tesla](https://github.com/otto-de/tesla-microservice) - Base commune pour certains microservices Clojure d'Otto.de.

#### Java

- [ActiveJ](https://github.com/activej/activej) - Librairie légère et rapide pour des applications distribuées complexes et des solutions similaires à Memcached.
- [Airlift](https://github.com/airlift/airlift) - Cadre pour la construction de services REST en Java.
- [Armeria](https://line.github.io/armeria/) - Open-source asynchrone HTTP/2 RPC/REST client/serveur bibliothèque construite en haut de Java 8, Netty, Thrift et gRPC.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - Bibliothèque de messagerie interfil haute performance.
- [Dropwizard](https://github.com/dropwizard/dropwizard) - Cadre Java pour le développement de services web opérationnels, performants et RESTful.
- [Dubbo](https://github.com/apache/dubbo) - Un cadre RPC haute performance, basé sur java open-sourced par Alibaba.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - Un ensemble de bibliothèques pour définir et créer des serveurs et clients RESTish/RPC basés sur Feign ou Retrofit en tant que client et Dropwizard/Jersey avec des définitions de service JAX-RS en tant que serveur.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - Services RESTful en Java. Mise en œuvre de référence JAX-RS.
- [Quarkus](https://quarkus.io/) - A Kubernetes Pile Java native adaptée pour OpenJDK HotSpot et GraalVM, conçue à partir des meilleures bibliothèques et normes Java de race.
- [Ratpack](https://ratpack.io/) - Ensemble de bibliothèques Java qui facilitent les applications HTTP rapides, efficaces, évolutives et bien testées. un soutien spécifique pour la langue Groovy est fourni.
- [Spring Boot](http://projects.spring.io/spring-boot/) - Rendre facile la création d'applications printanières autonomes et de qualité de production.

#### Kotlin

- [Http4k](https://www.http4k.org/) - Boîte à outils HTTP légère mais complète écrite en Kotlin pur qui permet le service et la consommation de services HTTP de manière fonctionnelle et cohérente.
- [Ktor](https://ktor.io/) - Cadre pour la construction de serveurs et de clients asynchrones dans les systèmes connectés en utilisant le langage de programmation Kotlin.

#### Scala

- [Finatra](http://twitter.github.io/finatra/) - Rapide, testable, les services HTTP Scala construits sur Twitter-Server et Finagle.
- [Http4s](http://http4s.org/) - Une interface minimale, idiomatique Scala pour HTTP
- [Play](https://www.playframework.com/) - Le cadre web haute vitesse pour Java et Scala.

### Node.js

- [Actionhero](http://www.actionherojs.com/) - Multi-transport Node.js serveur API avec des capacités de cluster intégrées et des tâches retardées.
- [Express](http://expressjs.com/) - Cadre web minimaliste et rapide pour Node.js
- [Fastify](https://www.fastify.io/) - Cadre web rapide, rapide et bas, pour Node.js.
- [FeathersJS](http://feathersjs.com/) - Une couche REST open source et API en temps réel pour les applications modernes.
- [Hono](https://hono.dev/) - Cadre web petit, simple et ultrarapide pour les Bords. Il fonctionne sur n'importe quel fonctionnement JavaScript.
- [Koa](http://koajs.com/) - Cadre web de nouvelle génération pour Node.js
- [Loopback](http://loopback.io/) - Node.js framework pour créer des API et se connecter facilement aux sources de données.
- [NestJS](https://docs.nestjs.com/) - Un cadre Node.js pour la construction d'applications serveur efficaces et évolutives avec un support microservices intégré.
- [Seneca](https://github.com/senecajs/seneca) - Un kit de microservices pour Node.js
- [Serverless](https://github.com/serverless/serverless) - Construisez et maintenez des applications web, mobiles et IoT fonctionnant sur AWS Lambda et API Gateway (anciennement JAWS).
- [tRPC](https://github.com/trpc/trpc) - API de bout en bout.

### Pourcentage

- [Cro](http://cro.services/) - Bibliothèques pour la création de systèmes distribués réactifs utilisant Perl 6.
- [Mojolicious](https://mojolicious.org/) - Cadre web de prochaine génération pour Perl.

### PHP

- [API Platform](https://api-platform.com/) - API-premier cadre web en plus de Symfony avec JSON-LD, Schema.org et Hydra support.
- [Ecotone](https://docs.ecotone.tech/) - Cadre basé sur les principes architecturaux de DDD, CQRS et Event Sourcing qui fournit des éléments de construction pour créer des applications évolutives et extensibles.
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf est un framework PHP CLI extrêmement performant et flexible basé sur Swoole 4.5+, alimenté par le serveur coroutine ultramoderne et un grand nombre de composants éprouvés.
- [Lumen](https://lumen.laravel.com/) - Un micro-cadre très rapide.
- [Slim](http://www.slimframework.com/) - Micro-cadre qui vous aide à écrire rapidement des applications Web simples mais puissantes et des API.
- [Spiral](https://spiral.dev/) - Cadre conçu pour les applications de longue durée [RoadRunner](https://roadrunner.dev/). Il offre des fonctionnalités avancées comme l'intégration avec le [Temporal](https://temporal.io/) moteur et [Centrifugo](https://centrifugal.dev/) Serveur websocket. Il est particulièrement efficace pour l'architecture des microservices, fournissant un support robuste pour les API REST et les services gRPC.
- [Swoft](https://github.com/swoft-cloud/swoft/) - Cadre coroutine de microservices PHP pour la construction de systèmes web haute performance, API, intergiciel et services de base.
- [Symfony](https://symfony.com/) - Micro-cadre basé sur les composants Symfony.

### Python

- [Aiohttp](https://github.com/aio-libs/aiohttp) - Client/serveur HTTP pour asyncio.
- [Bottle](https://bottlepy.org) - Micro-cadre web WSGI rapide, simple et léger pour Python.
- [Connexion](https://github.com/zalando/connexion) - Cadre Swagger/OpenAPI pour Python en haut de Flask avec validation automatique des paramètres et support OAuth2.
- [Falcon](https://falconframework.org/) - Bare-metal Python web API framework pour construire des moteurs d'application et des microservices très rapides.
- [FastAPI](https://fastapi.tiangolo.com/) - Moderne, rapide (haute performance), cadre web pour la construction d'APIs avec Python 3.6+ basé sur des conseils standard de type Python.
- [Flask](http://flask.pocoo.org/) - Cadre Python pour les microservices basé sur Werkzeug et Jinja 2.
- [Nameko](https://github.com/onefinestay/nameko) - Cadre Python pour la construction de microservices.
- [Sanic](https://github.com/sanic-org/sanic) - Sanic est un serveur web Python 3.5+ qui est écrit pour aller vite.
- [Tornado](http://www.tornadoweb.org/) - Cadre Web et bibliothèque de réseautage asynchrone.
- [Twisted](https://twisted.org/) - Moteur de programmation réseau par événement.
- [Web.py](https://github.com/webpy/webpy/) - Cadre web minimaliste pour Python.

### Rubis

- [Grape](https://github.com/ruby-grape/grape) - Un cadre d'évaluation pour créer des API ressemblant à REST
- [Hanami](https://github.com/hanami) - Un cadre web moderne pour Ruby.
- [Praxis](https://github.com/rightscale/praxis) - Cadre pour la conception et la mise en œuvre des API.
- [Scorched](https://github.com/wardrop/Scorched) - Cadre web léger pour Ruby.
- [Sinatra](http://www.sinatrarb.com/) - Sinatra est un DSL pour créer rapidement des applications web dans Ruby avec un minimum d'effort.

### Rouille

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Un résumé de l'état actuel de la programmation web dans Rust.
- [Actix](https://actix.rs/) - Cadre web puissant, pragmatique et extrêmement rapide pour Rust.
- [Tarpc](https://github.com/google/tarpc) - Cadre RPC pour Rust avec un accent sur la facilité d'utilisation.
- [Tokio](https://tokio.rs) - Runtime asynchrone pour écrire des applications réseau.
- [Tower](https://github.com/tower-rs/tower) - Bibliothèque de composants modulaires et réutilisables pour construire des clients et serveurs de réseau robustes.
- [Wtx](https://github.com/c410-f3r/wtx) - Cadre client/serveur HTTP/2.

## Frontend / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - Une liste de ressources sur Micro Frontends.
- [Electrode](https://github.com/electrode-io) - Plateforme d'application Universal React/Node.js.
- [Micro Frontends](https://micro-frontends.org) - Étendre l'idée du microservice au développement frontal.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - Livre blanc sur la normalisation MiniApp.

## Capacités

### Passerelles d'API / Services de bord

- [Ambassador (c)](https://www.getambassador.io) - Oui. Kubernetes-Native API passerelle pour les microservices construit sur Envoy.
- [Apache APISIX](https://apisix.apache.org/) - passerelle API haute performance en temps réel et passerelle AI construite sur NGINX et etcd, avec routage à chaud et 100 plugins.
- [APIcast](https://github.com/3scale/APIcast) - APIcast est une passerelle API construite en haut de NGINX. Il fait partie de la plateforme de gestion de l'API à l'échelle Red Hat 3.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Hébergement d'applications Web et proxy inversé sécurisé par défaut.
- [Caddy](https://caddyserver.com/) - Serveur Web HTTP/2 extensible avec HTTPS automatique.
- [Camel](http://camel.apache.org/) - Vous permet de définir des règles de routage et de médiation dans une variété de langages spécifiques au domaine, y compris une API couramment basée sur Java, des fichiers de configuration XML Spring ou Blueprint et un DSL Scala.
- [Envoy](https://github.com/lyft/envoy) - Open source edge and service proxy, des développeurs de Lyft.
- [HAProxy](https://github.com/haproxy/haproxy) - Balanceur de charge TCP/HTTP fiable et performant.
- [Istio](https://istio.io/) - Une plateforme ouverte pour connecter, gérer et sécuriser les microservices.
- [Keepalived](http://www.keepalived.org/) - Des installations simples et robustes pour l'équilibrage des charges et une grande disponibilité pour le système Linux et les infrastructures basées sur Linux.
- [Kong](https://github.com/kong/kong) - Couche de gestion open source pour les API.
- [KrakenD](http://krakend.io/) - Open source ultra performance API Gateway.
- [Kuma](https://kuma.io/) - Plan de contrôle agnostique de la plate-forme open source pour les services maillage et microservices.
- [Linkerd](https://linkerd.io/) - Mesh de service résistant pour les applications natives du cloud.
- [Neutrino](https://github.com/eBay/Neutrino) - Balanceur de charge extensible.
- [OpenResty](http://openresty.org/) - Serveur d'applications web rapide construit sur Nginx.
- [Open Service Mesh](https://openservicemesh.io/) - Mesh de service natif des nuages léger et extensible.
- [Otoroshi](https://www.otoroshi.io/) - Proxy HTTP moderne avec gestion légère de l'API.
- [Pingora](https://github.com/cloudflare/pingora) - Une bibliothèque pour construire des services réseau rapides, fiables et évolutifs.
- [Skipper](https://github.com/zalando/skipper) - Routeur HTTP utile pour découpler le routage de la logique de service.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - API Gateway en haut de Spring MVC. vise à fournir un moyen simple, mais efficace de route vers les API.
- [Tengine](http://tengine.taobao.org/) - Une distribution de Nginx avec quelques fonctionnalités avancées.
- [Træfɪk](http://traefik.io/) - Un proxy HTTP moderne et un équilibreur de charge pour déployer les microservices avec facilité.
- [Traffic Server](https://github.com/apache/trafficserver) - Bloc de construction haute performance pour les services cloud.
- [Tyk](https://tyk.io/) - Open source, passerelle API rapide et évolutive, portail et plateforme de gestion d'API.
- [Vulcand](https://github.com/vulcand/vulcand) - Balanceur de charge programmatique soutenu par Etcd.
- [Zuul](https://github.com/Netflix/zuul) - Un service de bord qui fournit un routage dynamique, la surveillance, la résilience, la sécurité, et plus encore.

### Configuration & Découverte

- [Central Dogma](https://line.github.io/centraldogma/) - Dépôt de configuration de service sous contrôle de version ouvert basé sur Git, ZooKeeper et HTTP/2.
- [Consul](https://www.consul.io/) - Découverte du service et configuration facile. Distribué, très disponible, et datacenter-aware.
- [Etcd](https://github.com/coreos/etcd) - Magasin à valeur clé hautement disponible pour la configuration partagée et la découverte de service.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - service basé sur REST qui est principalement utilisé dans le cloud AWS pour localiser des services dans le but d'équilibrer la charge et d'affaiblir les serveurs de niveau intermédiaire.
- [Microconfig](https://microconfig.io) - Mode moderne et simple de gestion de la configuration du microservice.
- [Nacos](https://github.com/alibaba/nacos) - Plate-forme de découverte, de configuration et de gestion de service dynamique facile à utiliser.
- [SkyDNS](https://github.com/skynetservices/skydns) - Service distribué pour l'annonce et la découverte de services construits en plus de etcd. Il utilise les requêtes DNS pour découvrir les services disponibles.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - Fournit une prise en charge du serveur et du client pour la configuration externalisée dans un système distribué.
- [ZooKeeper](https://zookeeper.apache.org/) - Serveur open source qui permet une coordination distribuée très fiable.

### Orchestration de flux de travail

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - Coordonner les composants des applications distribuées et des microservices en utilisant des flux de travail visuels.
- [Cadence](https://cadenceworkflow.io/) - Une plate-forme de code abominable.
- [Conductor](https://github.com/Netflix/conductor) - Un moteur d'orchestration de microservices.
- [Inngest](https://github.com/inngest/inngest) - Fonctions durables pour une logique de fond fiable, des tâches de fond aux workflows complexes.
- [Kestra](https://github.com/kestra-io/kestra) - Plate-forme d'orchestration et de programmation de microservices open source pilotés par des événements, langue-agnostique.
- [Temporal](https://github.com/temporalio/temporal) - Plateforme d'orchestration de microservices open source pour exécuter le code critique de mission à n'importe quelle échelle.
- [Zeebe](https://camunda.com/platform/zeebe/) - Définir, orchestrer et surveiller les processus commerciaux à travers les microservices.

### Élasticité

- [Hazelcast](http://hazelcast.org/) - Grille de données en mémoire ouverte. Vous permet de distribuer des données et des calculs entre serveurs, clusters et géographies, et de gérer de très grands ensembles de données ou des taux élevés d'ingestion de données. Technologie mature.
- [Helix](http://helix.apache.org/) - Cadre générique de gestion des grappes utilisé pour la gestion automatique des ressources partagées, reproduites et distribuées hébergées sur un groupe de nœuds.
- [Ignite](http://ignite.apache.org/) - Plate-forme en mémoire haute performance, intégrée et distribuée pour l'informatique et la transaction sur des ensembles de données à grande échelle en temps réel, ordres de grandeur plus rapides que possible avec les technologies traditionnelles basées sur le disque ou flash.
- [Libp2p](https://libp2p.io/) - Un cadre et une série de protocoles pour la construction d'applications de réseau entre pairs.
- [Mesos](https://mesos.apache.org/) - Résumés CPU, mémoire, stockage, et d'autres ressources de calcul loin des machines (physiques ou virtuelles), permettant des systèmes de distribution élastiques et tolérants aux défauts d'être facilement construit et exécuté efficacement.
- [Nomad](https://www.nomadproject.io/) - Distribué, hautement disponible, datacenter-aware programmer.
- [Redisson](https://github.com/mrniko/redisson) - Structures de données Java distribuées et évolutives sur le serveur Redis.
- [Serf](https://www.serf.io/) - Solution décentralisée pour l'adhésion au cluster, la détection des défaillances et l'orchestration.
- [Valkey](https://github.com/valkey-io/valkey) - Un nouveau projet pour reprendre le développement du projet Redis auparavant open source.
- [Zenoh](https://zenoh.io/) - Protocole Pub/sous/query unifiant les données en mouvement, les données au repos et les calculs. Mélange efficacement pub/sous traditionnel avec stockage géodistribué, requêtes et calculs.

### Programmeurs d'emplois / Automatisation de la charge de travail

- [Celery](https://github.com/celery/celery) - Tâche asynchrone file / file d'attente d'emploi basée sur le passage de message distribué. Concentré sur le fonctionnement en temps réel et prend en charge le calendrier.
- [Dkron](http://dkron.io/) - Distribué, système de planification des tâches tolérant les erreurs.
- [Faktory](https://github.com/contribsys/faktory) - Serveur d'arrière-plan de l'agnostique linguistique.
- [Rundeck (c)](http://rundeck.org/) - Planificateur de travail et automatisation de l'exécution. Permettre l'accès libre-service aux scripts et outils existants.
- [Schedulix](https://github.com/schedulix/schedulix) - Le système de planification d'emploi d'entreprise open source établit des normes révolutionnaires pour l'automatisation professionnelle des processus informatiques dans les environnements de systèmes avancés.

### Développement local

- [mirrord](https://metalbear.com/mirrord/) - Exécutez le code local comme si c'était un pod dans une télécommande Kubernetes Groupe.

### Exploitation forestière

- [Fluentd](http://www.fluentd.org/) - Collecteur de données open source pour la couche de journalisation unifiée.
- [Graylog](https://www.graylog.org/) - Plateforme de gestion de log open source entièrement intégrée.
- [Kibana](https://www.elastic.co/products/kibana) - Plateforme d'analyse et de visualisation flexible.
- [LogDNA (c)](https://logdna.com/) - Logiciel de gestion centralisée des journaux. Collectez, centralisez et analysez instantanément les journaux en temps réel depuis n'importe quelle plateforme, à n'importe quel volume.
- [Logstash](https://www.elastic.co/logstash) - Outil de gestion des événements et des journaux.
- [Loki](https://github.com/grafana/loki) - Comme Prométhée, mais pour les bûches.

### Messagerie

- [ØMQ](http://zeromq.org/) - Couche de transport intelligente sans courtier.
- [ActiveMQ](http://activemq.apache.org/) - Un puissant serveur de messagerie et d'intégration open source.
- [Aeron](https://github.com/real-logic/Aeron) - Transport efficace de messages UDP unicast, UDP multicast et IPC.
- [Beanstalk](https://beanstalkd.github.io/) - Une file d'attente simple et rapide.
- [Bull](https://github.com/OptimalBits/bull) - Une file d'attente rapide et fiable pour le nœud Redis.
- [Crossbar](https://github.com/crossbario/crossbar) - Plate-forme de mise en réseau ouverte pour les applications distribuées et microservices. Il met en œuvre le protocole ouvert de messagerie d'applications Web (WAMP).
- [Kafka](http://kafka.apache.org/) - Publier-subscribe messagerie repensée comme un journal de commit distribué.
- [Malamute](https://github.com/zeromq/malamute) - Courtier de messagerie d'entreprise ZeroMQ.
- [Mosquitto](http://mosquitto.org/) - Courtier de messages open source qui implémente le protocole MQTT.
- [NATS](https://nats.io/) - Open source, haute performance, système de messagerie en nuage léger.
- [NSQ](http://nsq.io/) - Une plateforme de messagerie distribuée en temps réel.
- [Pulsar](https://pulsar.apache.org/) - Système de messagerie pub-sub.
- [RabbitMQ](https://www.rabbitmq.com/) - Un courtier de messages basé sur Erlang qui fonctionne.
- [Redpanda](https://github.com/redpanda-data/redpanda/) - Plate-forme de données de streaming pour les développeurs: Kafka API compatible, 10x plus rapide, aucun ZooKeeper et aucun JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - Un middleware à faible latence, fiable, évolutif, facile à utiliser orienté message né de l'activité de messagerie massive alibaba.

### Surveillance et débogage

- [Beats](https://www.elastic.co/beats/) - expéditeurs légers pour Elasticsearch & Logstash.
- [Elastalert](https://github.com/yelp/elastalert) - Alerte facile et flexible pour Elasticsearch.
- [Ganglia](http://ganglia.info/) - Un système évolutif de surveillance répartie pour les systèmes informatiques à haute performance tels que les clusters et les grilles.
- [Grafana](http://grafana.org/) - Un open source, dispose de riches métriques tableau de bord et éditeur de graphiques pour Graphite, InfluxDB et OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - Graphage évolutif en temps réel.
- [IOpipe (c)](https://www.iopipe.com/) - Surveillance des performances de l'application pour Amazon Lambda.
- [Jaeger](https://www.jaegertracing.io/) - Un traçage distribué de bout en bout, source ouverte
- [OpenTelemetry](https://opentelemetry.io/) - Télémétrie de haute qualité, omniprésente et portable pour permettre une observation efficace.
- [Prometheus](http://prometheus.io/) - Un système de surveillance des services open source et une base de données chronologiques.
- [Riemann](http://riemann.io/) - Surveille les systèmes distribués.
- [Sensu](https://github.com/sensu) - Surveillance des infrastructures d'aujourd'hui.
- [SkyWalking](https://skywalking.apache.org/) - Outil de moniteur de performance d'application pour les systèmes distribués, spécialement conçu pour les microservices, les natifs du cloud et les conteneurs (Docker, K8sLes architectures.
- [Zabbix](http://www.zabbix.com/) - Solution de surveillance ouverte de classe entreprise.
- [Zipkin](http://zipkin.io) - Système de traçage distribué.

### Réactivité

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - Moteur de traitement de flux distribué pour transformer, filtrer, agréger et rejoindre les flux de données en écrivant SQL.
- [Reactor.io](https://github.com/reactor) - Une bibliothèque réactive de deuxième génération pour la construction d'applications non-bloquantes sur le JVM basée sur la spécification Reactive Streams.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - API des flux réactifs pour Apache Kafka.
- [ReactiveX](http://reactivex.io/) - API pour programmation asynchrone avec flux observables. Disponible pour Java idiomatique, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby, etc.
- [RSocket](https://rsocket.io/) - Protocole d'application fournissant la sémantique Reactive Streams.

### Résilience

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - Une liste de ressources d'ingénierie du chaos.
- [Raft Consensus](https://raft.github.io/) - Algorithme de consensus conçu pour être facile à comprendre. C'est l'équivalent de Paxos dans la tolérance aux défauts et la performance.
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Bibliothèque de tolérance aux défauts conçue pour Java8 et programmation fonctionnelle.
- [Svix](https://svix.com) - Service Webhooks qui envoie des webhooks à vos utilisateurs avec des horaires complets de réessayer, backoff exponentiel, vérification de signature et types d'événements.

### Sécurité

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - Système de gestion des autorisations pour la rédaction, l'essai et le déploiement des politiques d'accès. Autorisation évolutive et fine dans une architecture microservice.
- [Dex](https://github.com/coreos/dex) - Service d'auth/répertoire avec connecteurs rechargeables. OpenID Connect fournisseur et délégation de tiers OAuth 2.0.
- [JWT](http://jwt.io/) - Les jetons Web JSON sont une méthode ouverte et standard de l'industrie RFC 7519 pour représenter les revendications en toute sécurité entre deux parties.
- [Keycloak](https://github.com/keycloak/keycloak) - Service complet et extensible. OpenID Connect fournisseur et délégation de tiers OAuth 2.0.
- [OAuth](http://oauth.net/2/) - Fournit des flux d'autorisation spécifiques pour les applications Web, les applications de bureau, les téléphones mobiles et les appareils de salon. De nombreuses mises en œuvre.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - Bibliothèques, produits et outils mettant en œuvre les spécifications OpenID actuelles et les spécifications connexes.
- [Open Ziti](https://openziti.io/) - Zero confiance sécurité et superposition réseau comme logiciel open source pure.
- [ORY](https://www.ory.sh/) - Infrastructure et services d'identité open source.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) — Couche de défense contre les intoxications à la mémoire des agents de l'IA (OWASP ASI06). Détecte les entrées de mémoire altérées, l'injection rapide dans les chemins de mémoire et les fuites secrètes. Politiques YAML, latence microseconde, aucune dépendance externe.
- [SCIM](https://simplecloud.info/) - Système de gestion de l'identité trans-domaine.
- [Vault](https://www.vaultproject.io/) - Sécurise, stocke et contrôle étroitement l'accès aux jetons, mots de passe, certificats, clés API et autres secrets dans l'informatique moderne.

### Sérialisation

- [Avro](https://avro.apache.org/) - Système de sérialisation des données Apache fournissant de riches structures de données au format compact, rapide et binaire.
- [Bond](https://github.com/microsoft/bond/) - Cadre multiplateforme pour travailler avec les données schématisées, largement utilisé chez Microsoft dans les services à grande échelle.
- [BooPickle](https://github.com/ochrons/boopickle) - Bibliothèque de sérialisation binaire pour une communication réseau efficace. Pour Scala et Scala.js
- [Cap’n Proto](https://capnproto.org/) - Format d'échange de données et système RPC basé sur les capacités.
- [CBOR](http://cbor.io/) - Mise en œuvre de la norme CBOR (RFC 7049) dans de nombreuses langues.
- [Cereal](http://uscilab.github.io/cereal/) - Bibliothèque C++11 pour la sérialisation.
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON et JSON SMILE encodage/décodage.
- [Etch](http://etch.apache.org/) - Cadre transplateforme, linguistique et indépendant des transports pour la construction et la consommation de services de réseau.
- [Fastjson](https://github.com/alibaba/fastjson) - Processeur JSON rapide.
- [Ffjson](https://github.com/pquerna/ffjson) - Sérialisation JSON plus rapide pour aller.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - La sérialisation rapide du java tombe en place.
- [Jackson](https://github.com/FasterXML/jackson) - Une bibliothèque Java polyvalente pour le traitement des données JSON.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - Module Jackson qui utilise la génération d'octécodes pour accélérer la fixation des données (+30-40% de débit pour la sérialisation, la désérialisation).
- [Kryo](https://github.com/EsotericSoftware/kryo) - Sérialisation et clonage Java : rapide, efficace, automatique.
- [Lite³](https://github.com/fastserial/lite3) - Format de sérialisation à copie zéro compatible JSON.
- [MessagePack](http://msgpack.org/) - Format de sérialisation binaire efficace.
- [Protostuff](https://github.com/protostuff/protostuff) - Une bibliothèque de sérialisation avec support intégré pour la compatibilité avant-arrière (évolution du schéma) et la validation.
- [SBinary](https://github.com/harrah/sbinary) - Bibliothèque pour décrire les formats binaires pour les types Scala.
- [Thrift](http://thrift.apache.org/) - le cadre logiciel Apache Thrift, pour le développement de services translingues évolutifs.
- [yyjson](https://github.com/ibireme/yyjson) - La bibliothèque JSON la plus rapide de C.

### Stockage

- [Apache Cassandra](http://cassandra.apache.org) - Orientée vers la colonne et offrant une grande disponibilité sans aucun point de défaillance.
- [Aerospike (c)](http://www.aerospike.com/) - Base de données NoSQL haute performance offrant une vitesse à l'échelle.
- [ArangoDB](https://www.arangodb.com/) - Une base de données libre et ouverte distribuée avec un modèle de données flexible pour les documents, les graphiques et les valeurs clés.
- [Citus](https://github.com/citusdata/citus) - Distribué PostgreSQL comme une extension.
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Une base de données SQL cloud-native modélisée après Google Slanner.
- [Couchbase](https://github.com/couchbase) - Une base de données distribuée conçue pour la performance, l'évolutivité et l'administration simplifiée.
- [Crate (c)](https://crate.io/) - Base de données SQL évolutive avec les goodies NoSQL.
- [Druid](http://druid.io/) - Data store rapide, orienté colonne.
- [Elasticsearch](https://www.elastic.co/elasticsearch) - Serveur de recherche open source distribué, évolutif et très disponible.
- [Geode](http://geode.incubator.apache.org/) - Open source, distribué, base de données en mémoire pour les applications hors échelle.
- [Infinispan](http://infinispan.org/) - Datastore clé/valeur très concurrente utilisé pour la mise en cache.
- [InfluxDB](https://github.com/influxdata/influxdb) - Datastore évolutive pour les mesures, les événements et l'analyse en temps réel.
- [RethinkDB](http://rethinkdb.com/) - Open source, base de données évolutive qui facilite la construction d'applications en temps réel.
- [TiKV](https://github.com/tikv) - Base de données à valeur transactionnelle distribuée.
- [TimescaleDB](https://github.com/timescale/timescaledb) - Une base de données de séries chronologiques pour l'analyse en temps réel haute performance emballée comme une extension Postgres.
- [Trino](https://trino.io/) - Moteur de requête SQL distribué rapidement pour l'analyse des mégadonnées qui vous aide à explorer votre univers de données.

### Essais

- [Goreplay](https://github.com/buger/goreplay) - Un outil pour capturer et rejouer le trafic HTTP en direct dans un environnement de test.
- [Keploy](https://keploy.io) - Outil open-source pour tester et simuler les API en capturant le trafic réel et en le transformant en boîtiers et goujons de test, permettant des tests de microservice fiables.
- [Mitmproxy](https://mitmproxy.org/) - Un programme de console interactif qui permet d'intercepter, d'inspecter, de modifier et de rejouer les flux de trafic.
- [MockServer](https://www.mock-server.com) - Mocking, debugging proxy and chaos engineering for multiple protocols (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP et bien plus); dépendances simulées, trafic record/replay, vérification des demandes, et injection de défauts pour l'intégration et les tests de résilience.
- [Mountebank](http://www.mbtest.org/) - Le test multiprotocole multiplateforme double sur le fil.
- [Pact](https://docs.pact.io) - Cadre de test contractuel pour les API HTTP et les systèmes de messagerie non-HTTP asynchrones.
- [RestQA](https://github.com/restqa/restqa) - Un outil pour gérer les microservices de simulation, d'unité et de tests de performance localement avec la meilleure expérience de développeur de classe.
- [Specmatic](https://specmatic.io) - Convertit les spécifications de l'API (OpenAPI, AsyncAPI, GraphQL, gRPC, etc.) en contrats exécutables pour les tests automatisés, la virtualisation de service et la validation de compatibilité en arrière sans code d'écriture.
- [VCR](https://github.com/vcr/vcr) - Enregistrez les interactions HTTP de votre suite de test et rejouez-les lors de futurs tests pour des tests rapides, déterministes et précis. Voir la liste des ports pour les implémentations dans d'autres langues.
- [Wilma](https://github.com/epam/Wilma) - Tige de service HTTP/HTTPS combinée et solution proxy transparente.
- [WireMock](http://wiremock.org/) - Librairie flexible pour les services web d'étalage et de moquerie. Contrairement aux outils de moquerie d'usage général, il fonctionne en créant un serveur HTTP réel auquel votre code en cours d'essai peut se connecter comme un véritable service web.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - Virtualisation de service légère / outil de simulation API pour les développeurs et les testeurs.

## Intégration et livraison continues

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - Une liste d'outils formidables pour l'intégration continue, la livraison continue et DevOps.

## Modélisation et documentation des API Web

### Async
- [AsyncAPI](https://github.com/asyncapi/spec) - La spécification AsyncAPI, la norme industrielle pour la définition des API asynchrones.

### GraphiqueQL

- [GraphQL](http://graphql.org/) - Un langage de requête conçu pour construire des applications clientes en fournissant une syntaxe et un système intuitifs et flexibles pour décrire leurs besoins en données et leurs interactions.

### JSON

- [JSON:API](https://jsonapi.org/) - Spécification de la façon dont un client doit demander que les ressources soient récupérées ou modifiées, et comment un serveur doit répondre à ces demandes.

### REST

- [API Blueprint](https://apiblueprint.org/) - Des outils pour tout votre cycle de vie de l'API. Utilisez-le pour discuter de votre API avec d'autres. Générer la documentation automatiquement. Ou une suite de test. Ou même un code.
- [OpenAPI](https://www.openapis.org/) - La spécification OpenAPI (OEA) fournit un moyen cohérent de transmettre l'information à chaque étape du cycle de vie de l'API.
- [RAML](http://raml.org/) - RESTful API Modeling Language, une façon simple et succincte de décrire les API pratiquement-RESTful.
- [ReDoc](https://github.com/Redocly/redoc) - Documentation API générée par OpenAPI/Swagger.
- [Scalar](https://github.com/scalar/scalar) - Plateforme d'API open-source : belles références d'API et support OpenAPI/Swagger de première classe.
- [Slate](https://github.com/slatedocs/slate) - Belle documentation statique pour votre API.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Documenter les services REST en combinant la documentation écrite à la main avec des extraits autogénérés produits avec Spring MVC Test.
- [Swagger](https://swagger.io/) - Une représentation simple mais puissante de votre API RESTful.

## Normes et recommandations

### Réseau mondial

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - Architecture du World Wide Web, volume 1.
- [RFC3986](https://tools.ietf.org/html/rfc3986) - Identificateur de ressource uniforme (URI): Syntaxe générique.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - Modèle URI.
- [RFC7320](https://tools.ietf.org/html/rfc7320) - Conception et propriété URI.

### Autosouverainité et décentralisation

- [DID](https://www.w3.org/TR/did-core/) - Spécification W3C des identifiants décentralisés (IDD) : un nouveau type d'identificateur permettant une identité numérique vérifiable et décentralisée.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - La méthodologie de communication privée s'est construite au sommet de la conception décentralisée des DID.
- [DIDComm Protocols](https://didcomm.org/) - Registre des protocoles construits sur DIDComm, pour des interactions hautement fiables et autonomes sur tout transport.
- [IDSA](https://internationaldataspaces.org/) - L'Association internationale des espaces de données (IDSA) a pour mission de créer l'avenir de l'économie numérique mondiale avec International Data Spaces (IDS), un système sécurisé et souverain de partage de données dans lequel tous les participants peuvent réaliser la pleine valeur de leurs données.

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - Syntaxe des messages et routage.
- [RFC7231](https://tools.ietf.org/html/rfc7231) - Sémantique et contenu.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - Demandes conditionnelles.
- [RFC7233](https://tools.ietf.org/html/rfc7233) - Demandes de portée.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - Cache.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - Authentification.
- [RFC7807](https://tools.ietf.org/html/rfc7807) - Détails du problème pour les API HTTP.

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) - Protocole de transfert hypertexte Version 2.

### QUIC

- [QUIC-WG](https://quicwg.org/) - Groupe de travail IETF qui est affrété pour fournir le prochain protocole de transport pour l'Internet.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - Un transport multiplexé et sécurisé basé sur UDP.

### RPC

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - Un protocole d'appel à distance apatride et léger.
- [Open RPC](https://open-rpc.org/) - La spécification OpenRPC définit une description standard de l'interface langage-agnostique de programmation pour les API JSON-RPC 2.0.

### Messagerie

- [AMQP](https://www.amqp.org/) - Protocole de saisie de message avancé.
- [MQTT](https://mqtt.org/) - Transport télémétrique MQ.
- [STOMP](https://stomp.github.io/) - Protocole de messagerie simple orienté texte.

### Sécurité

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - Le Protocole de négociation et d'autorisation des subventions définit un mécanisme de délégation de l'autorisation à un logiciel et transmet cette délégation au logiciel. Cette délégation peut inclure l'accès à un ensemble d'API ainsi que l'information transmise directement au logiciel.<sup>PROJET DE</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0 est une simple couche d'identité en plus du protocole OAuth 2.0. Il permet aux clients de vérifier l'identité de l'utilisateur final en fonction de l'authentification effectuée par un serveur d'autorisation, ainsi que d'obtenir des informations de base sur le profil de l'utilisateur final d'une manière interopérable et semblable à REST.
- [PASETO](https://paseto.io/) - Paseto est tout ce que vous aimez à propos de JOSE (JWT, JWE, JWS) sans aucun des nombreux déficits de conception qui pénalisent les normes JOSE. <sup>PROJET DE</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - Le protocole de sûreté de la couche de transport (TLS) version 1.2.
- [RFC6066](https://tools.ietf.org/html/rfc6066) - Extensions TLS.
- [RFC6347](https://tools.ietf.org/html/rfc6347) - Sécurité de la couche de transport de données Version 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) - Le cadre d'autorisation OAuth 2.0.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - Transparence du certificat.
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signature (JWS) représente le contenu sécurisé par des signatures numériques ou des codes d'authentification des messages (CMA) utilisant des structures de données basées sur JSON.
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web Token (JWT) est un moyen compact et sûr de représenter les revendications à transférer entre deux parties.
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM: Définitions, aperçu, concepts et exigences.
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM: Core Schema, fournit un schéma et un modèle d'extension neutres pour représenter les utilisateurs et les groupes.
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM: Protocole, un niveau d'application, protocole REST pour la fourniture et la gestion des données d'identité sur le web.

### Découverte des services
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - Mécanisme permettant aux clients de découvrir une liste d'instances nommées d'un service, en utilisant des requêtes DNS standard.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - Un DNS RR pour spécifier l'emplacement des services (DNS SRV).

### Formats de données

- [RFC4627](https://tools.ietf.org/html/rfc4627) - Notation d'objet JavaScript (JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) - Représentation concise d'objets binaires (CBOR).
- [BSON](http://bsonspec.org/) - Binary JSON (BSON).
- [JSON-LD](http://json-ld.org/) - JSON pour lier les données.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - Encodage binaire simple (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - Spécification MessagePack.

### Vocabulaires

- [JSON Schema](http://json-schema.org/) - Vocabulaire qui vous permet d'annoter et de valider les documents JSON.
- [Schema.org](http://schema.org/) - Une activité communautaire concertée avec la mission de créer, de maintenir et de promouvoir des schémas de données structurées sur Internet, sur les pages Web, dans les messages électroniques et au-delà.

### Unicode

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - Le consortium Unicode. La norme Unicode, version 8.0.0, (Montagne, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, format de transformation de la norme ISO 10646.

## Conception de l'organisation / Dynamique d'équipe

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF</sup> - Melvin E. Conway, magazine Datamation 1968. L'article original définissant la loi de Conway.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - Chaque équipe est responsable d'une ou de plusieurs fonctions commerciales (p. ex. capacités commerciales). Une équipe possède une base de codes comprenant un ou plusieurs modules. Sa base de code est dimensionnée de façon à ne pas dépasser la capacité cognitive de l'équipe. L'équipe déploie son code comme un ou plusieurs services. Une équipe devrait avoir exactement un seul service à moins qu'il n'y ait un besoin prouvé d'avoir plusieurs services.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> - Ça fait 19 Londres. Le débat "monolithes vs microservices" se concentre souvent sur les aspects technologiques, ignorant la stratégie et la dynamique d'équipe. Au lieu de la technologie, les organisations de pensée intelligente commencent par la charge cognitive de l'équipe comme principe directeur pour les logiciels modernes. Dans ce discours, nous expliquons comment et pourquoi, illustrés par des études de cas réelles.

## Entreprise & Verticals

- [Commercetools](https://commercetools.com/) - Une plateforme de commerce sans tête.
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinox est une plateforme de commerce et de marketing centrée sur l'humain qui soutient des expériences riches et hyper-personnalisées sur n'importe quel canal et point de contact.
- [Flamingo](https://www.flamingo.me/) - Cadre pour construire des applications de commerce électronique flexibles et modernes.
- [Medusa](https://medusajs.com/) - Plateforme de commerce open source sans tête.

## Théorie

### Articles et papiers

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - Introduction philosophique à la conception de systèmes hyperliminaux adaptatifs par des théories scientifiques de complexité.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - Une liste de lecture actualisée et organisée pour illustrer les modèles de systèmes à grande échelle évolutifs, fiables et performants. Les concepts sont expliqués dans les articles d'ingénieurs éminents et de références crédibles. Des études de cas sont tirées de systèmes éprouvés au combat qui servent des millions à des milliards d'utilisateurs.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - Modèle représentant les dimensions d'un service.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF</sup> - Cohérence comme monotonicité logique.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - Technique pour réduire le risque d'introduire une nouvelle version logicielle dans la production en déployant lentement le changement vers un petit sous-ensemble d'utilisateurs avant de le déployer vers l'ensemble de l'infrastructure et de la mettre à la disposition de tous.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - Déclare qu'il est impossible pour un système informatique distribué de fournir simultanément les trois garanties suivantes : Cohérence, disponibilité et tolérance à la partition.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF</sup> - L'abstraction informatique sans serveur expose plusieurs détails opérationnels de bas niveau qui rendent difficile pour les programmeurs d'écrire et de raisonner sur leur code. Cet article met en lumière ce problème en présentant λ, une sémantique opérationnelle de l'essence de l'informatique sans serveur.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - Une manière particulière de concevoir des applications logicielles en tant que suites de services déployables indépendamment.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF</sup> - Série F5 en sept parties sur les microservices.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - Conseils critiques sur certains problèmes concernant une approche des microservices.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - Guide pour réfléchir aux coûts et aux avantages du style architectural mircoservices.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Définition des systèmes réactifs.
- [Reactive Streams](http://www.reactive-streams.org/) - Initiative visant à fournir une norme pour le traitement des flux asynchrones avec une contre-pression sans blocage.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF</sup> - Informatique orientée ressources pour systèmes adaptatifs.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF</sup> - Comprendre les écosystèmes logiciels : une approche de modélisation stratégique.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - Approches pour gérer la complexité supplémentaire des essais de multiples composants déployables indépendamment.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF</sup> - Décrit trois abstractions qui se combinent pour présenter un modèle de programmation puissant pour construire un logiciel serveur sûr, modulaire et efficace : Futurs, services et filtres Composables.

### Sites et organisations

- [Cloud Native Computing Foundation](https://www.cncf.io/) - La Cloud Native Computing Foundation construit des écosystèmes durables et encourage une communauté autour d'une constellation de projets de haute qualité qui orchestrent des conteneurs dans le cadre d'une architecture de microservices.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - Paysage interactif des technologies natives du cloud.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - Le choix d'articles, de vidéos, de livres et de podcasts de Martin Fowler qui peuvent vous apprendre davantage sur le style architectural des microservices.
- [Microservice Patterns](http://microservices.io/) - Les modèles d'architecture microservice et les meilleures pratiques.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - Microservice principalement connu antipatterns et pièges.

## Licence

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Contribution

S'il vous plaît, lisez le [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) avant de soumettre votre suggestion.

N'hésitez pas [open an issue](https://github.com/mfornos/awesome-microservices/issues) ou [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) avec vos additions.

:star2: Je vous remercie !
