# Auswahl an Ressourcen zu Microservices [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Eine kuratierte Liste von Prinzipien und Technologien zur Microservice-Architektur.

**Inhaltsverzeichnis**

- [Bahnsteige](#platforms)
- [Frameworks / Laufzeiten](#frameworks--runtimes)
- [Service Toolkits](#service-toolkits)
  - [Polyglott](#polyglot)
  - [C](#c)
  - [C++](#c-1)
  - [C#](#csharp)
  - [D](#d)
  - [Erlang VM](#erlang-vm)
  - [Go](#go)
  - [Haskell](#haskell)
  - [Java VM](#java-vm)
  - [Node.js](#nodejs)
  - [Perlmutt](#perl)
  - [PHP](#php)
  - [Python](#python)
  - [Rubin](#ruby)
  - [Rust](#rust)
- [Frontend/UI](#frontend--ui)
- [Kapazitäten](#capabilities)
  - [API Gateways / Edge Services](#api-gateways--edge-services)
  - [Konfiguration & Discovery](#configuration--discovery)
  - [Workflow Orchestrierung](#workflow-orchestration)
  - [Elastizität](#elasticity)
  - [Job Schedulers / Workload Automation](#job-schedulers--workload-automation)
  - [Lokale Entwicklung](#local-development)
  - [Protokollierung](#logging)
  - [Messaging](#messaging)
  - [Monitoring & Debugging](#monitoring--debugging)
  - [Reaktivität](#reactivity)
  - [Resilienz](#resilience)
  - [Sicherheit](#security)
  - [Serialisierung](#serialization)
  - [Lagerung](#storage)
  - [Prüfung](#testing)
- [Continuous Integration & Delivery](#continuous-integration--delivery)
- [Web API Modellierung & Dokumentation](#web-api-modeling--documentation)
  - [Async](#async)
  - [GraphQL](#graphql)
  - [JSON](#json)
  - [REST](#rest)
- [Normen / Empfehlungen](#standards--recommendations)
  - [World Wide Web](#world-wide-web)
  - [Selbstverwaltung & Dezentralisierung](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2](#http2)
  - [QUIC](#quic)
  - [RPC](#rpc)
  - [Messaging](#messaging-1)
  - [Sicherheit](#security-1)
  - [Service Discovery](#service-discovery)
  - [Datenformate](#data-formats)
  - [Vokabular](#vocabularies)
  - [Unicode](#unicode)
- [Organisationsdesign / Teamdynamik](#organization-design--team-dynamics)
- [Unternehmen & Vertikale](#enterprise--verticals)
- [Theorie](#theory)
  - [Artikel & Papiere](#articles--papers)
  - [Websites und Organisationen](#sites--organizations)
- [Lizenz](#license)
- [Beitrag](#contributing)

## Bahnsteige

- [1Backend](https://github.com/1backend/1backend) - AI-native Microservices Plattform.
- [Jolie](https://jolie-lang.org) - Open Source Microservice-orientierte Programmiersprache.
- [OpenWhisk](https://github.com/apache/openwhisk) Serverlose Open-Source-Cloud-Plattform, die Funktionen als Reaktion auf Ereignisse in jeder Größenordnung ausführt.
- [Pulumi](https://pulumi.io/) SDK für Cloud Native Infrastructure als Code. Verwenden Sie Ihre Lieblingssprache, um Updates für Ihre Apps und Infrastruktur anzuzeigen und zu verwalten und kontinuierlich in jeder Cloud bereitzustellen (keine YAML erforderlich).
- [Triton](https://github.com/joyent/triton) Open-Source-Cloud-Management-Plattform, die eine containerbasierte, serviceorientierte Infrastruktur der nächsten Generation in einem oder mehreren Rechenzentren bereitstellt.

## Frameworks / Laufzeiten

- [Akka](http://akka.io/) Toolkit und Laufzeit für die Erstellung von hochgradig gleichzeitigen, verteilten und belastbaren nachrichtengesteuerten Anwendungen auf der JVM.
- [Axon (c)](https://axoniq.io/) Eine End-to-End-Entwicklungs- und Infrastrukturplattform für die einfache Entwicklung und Ausführung von DDD-, CQRS- und Event Sourcing-Anwendungen auf JVM.
- [Ballerina](https://ballerina.io) Cloud native Programmiersprache.
- [Bun](https://bun.sh/) - Schnelle All-in-One JavaScript Laufzeit.
- [Dapr](https://dapr.io) Open-Source-Laufzeit zum Schreiben hochperformanter Microservices in jeder Programmiersprache.
- [Deno](https://deno.land/) - JavaScript, TypeScript und WebAssembly Laufzeit mit sicheren Standardeinstellungen und einer großartigen Entwicklererfahrung.
- [Eclipse Microprofile](https://microprofile.io/) Ein offenes Forum zur Optimierung von Enterprise Java für eine Microservices-Architektur durch Innovation in mehreren Implementierungen und Zusammenarbeit in gemeinsamen Interessenbereichen mit dem Ziel der Standardisierung.
- [Erlang/OTP](https://github.com/erlang/otp) Programmiersprache, die verwendet wird, um massiv skalierbare Soft-Echtzeit-Systeme mit hohen Anforderungen an die Verfügbarkeit zu erstellen.
- [Finagle](http://twitter.github.io/finagle) - Erweiterbares RPC-System für die JVM, verwendet, um Server mit hoher Frequenz zu konstruieren.
- [Gleam](https://gleam.run/) - Eine freundliche Sprache für den Aufbau typsicherer, skalierbarer Systeme.
- [GraalVM](https://www.graalvm.org/) - Hochleistungslaufzeit, die signifikante Verbesserungen der Anwendungsleistung und -effizienz bietet, was ideal für Microservices ist.
- [Helidon](https://helidon.io/) - Sammlung von Java-Bibliotheken zum Schreiben von Microservices, die auf einem schnellen Web-Core mit Netty ausgeführt werden.
- [Ice](https://github.com/zeroc-ice/ice) Umfassendes RPC-Framework mit Unterstützung für C++, C#, Java, JavaScript, Python und mehr.
- [Light-4j](https://github.com/networknt/light-4j) - Ein hoher Durchsatz, geringe Latenz, kleiner Speicher-Fußabdruck und eine produktivere Microservices-Plattform.
- [Micronaut](http://micronaut.io/) Ein modernes, JVM-basiertes Full-Stack-Framework für die Erstellung modularer, leicht testbarer Microservice-Anwendungen.
- [Moleculer](http://moleculer.services/) - Schnelles und leistungsstarkes Microservice-Framework für Node.js, Java, Go und Ruby.
- [Open Liberty](https://openliberty.io/) Ein leichtes offenes Framework für die Erstellung schneller und effizienter Cloud-nativer Java Microservices.
- [Pears](https://github.com/holepunchto/pear) - Peer-to-Peer-Laufzeit, Entwicklung und Bereitstellung.
- [SmallRye](https://smallrye.io/) APIs und Implementierungen für die Cloud-Entwicklung, einschließlich Eclipse MicroProfile.
- [Spin](https://github.com/fermyon/spin) Ein Open-Source-Framework zum Erstellen und Ausführen schneller, sicherer und zusammensetzbarer Cloud-Microservices mit WebAssembly.
- [ScaleCube](https://github.com/scalecube/scalecube) - Toolkit zum Aufbau reaktiver Microservices für die JVM: niedrige Latenz, hoher Durchsatz, skalierbar und belastbar.
- [Vert.X](http://vertx.io/) - Toolkit zum Erstellen reaktiver Anwendungen auf der JVM.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Eine Reihe von Vert.x-Komponenten zum Erstellen reaktiver Microservice-Anwendungen.
- [Wangle](https://github.com/facebook/wangle) Ein Framework, das eine Reihe gemeinsamer Client/Server-Abstraktionen für den Aufbau von Services auf konsistente, modulare und zusammensetzbare Weise bereitstellt.

## Service Toolkits

### Polyglott

- [GRPC](http://www.grpc.io/) - Ein leistungsstarkes, Open Source, allgemeines RPC-Framework, das Mobile und HTTP/2 an die erste Stelle setzt. Bibliotheken in C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP und C#.

### C

- [Lwan](http://lwan.ws/) - Hochleistungs- und skalierbarer Webserver.
- [uSockets](https://github.com/uNetworking/uSockets) Miniscule Cross-Plattform-Eventing, Networking & Krypto für async-Anwendungen.

### C++
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Die Cap'n Proto C++ RPC Implementierung.
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - Ein OSGi-ähnliches C++ dynamisches Modulsystem und Dienstregistrierung.
- [Enduro/X](https://github.com/endurox-dev/endurox/) XATMI basiertes Service-Framework für GNU/Linux.
- [Pistache](https://github.com/oktal/pistache) - Ein leistungsstarkes REST-Toolkit in C++ geschrieben.
- [Poco](http://pocoproject.org/) C++-Klassenbibliotheken zum Erstellen von netzwerkbasierten Anwendungen und Servern.
- [Sogou Workflow](https://github.com/sogou/workflow) - Enterprise-Grade-Programmiermaschine, die darauf abzielt, die meisten Backend-Entwicklungsanforderungen zu erfüllen.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) Einfacher, sicherer und standardkonformer Webserver für die anspruchsvollsten Anwendungen.

### CShar

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - Eine Sammlung fantastischer Schulungsserien, Artikel, Videos, Bücher, Kurse, Beispielprojekte und Tools für Microservices in .NET Core.

### D

- [Vibe.d](http://vibed.org/) - Asynchrones I / O, das dir nicht im Weg steht, geschrieben in D.

### Erlang VM

#### Elixier

- [Phoenix](http://www.phoenixframework.org/) Framework zum Erstellen von HTML5-Apps, API-Backends und verteilten Systemen.
- [Plug](https://github.com/elixir-lang/plug) - Eine Spezifikation und Komfort für komponierbare Module zwischen Webanwendungen.

#### Erlang

- [Cowboy](https://github.com/ninenines/cowboy) - Kleiner, schneller, modularer HTTP-Server in Erlang geschrieben.
- [Mochiweb](https://github.com/mochi/mochiweb) - Erlang-Bibliothek zum Aufbau leichter HTTP-Server.

### Go

- [Chi](https://github.com/go-chi/chi) - Leichtgewichtiger, idiomatischer und zusammensetzbarer Router zum Erstellen von Go HTTP-Diensten.
- [Echo](https://echo.labstack.com/) - Schnelles und unfancy HTTP Server Framework für Go. Bis zu 10x schneller als der Rest.
- [Fiber](https://github.com/gofiber/fiber) - Express inspiriertes Web-Framework, das auf Fasthttp, der schnellsten HTTP-Engine für Go, aufbaut. Entwickelt, um die Dinge für eine schnelle Entwicklung mit null Speicherzuweisung und Leistung zu erleichtern.
- [Gin](https://github.com/gin-gonic/gin) Gin ist ein HTTP-Web-Framework, das in Go (Golang) geschrieben ist. Es verfügt über eine Martini-ähnliche API mit viel besserer Leistung, bis zu 40-mal schneller.
- [Goa](https://github.com/goadesign/goa) - Designbasierte HTTP Microservices in Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Ein eigensinniges Microservice-Entwicklungs-Framework, das Skalierbarkeit und Robustheit betont. Entwickelt, um die Entwicklung von Microservices zu vereinfachen.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Ein Framework für die schnelle Entwicklung von Microservices in Go, das sich einfach in einige Cloud-Ökosysteme integrieren lässt.
- [Go-micro](https://github.com/micro/go-micro) Ein verteiltes Systementwicklungs-Framework.
- [Go-zero](https://github.com/tal-tech/go-zero) - Ein Web- und RPC Distributed System Development Framework.
- [Gorilla](http://www.gorillatoolkit.org/) - Web-Toolkit für die Programmiersprache Go.
- [Iris](https://github.com/kataras/iris) - Schnelles, einfaches und effizientes Micro Web Framework für Go.
- [Lura](https://github.com/luraproject/lura) Framework zum Erstellen von Ultra Performance API Gateways mit Middlewares.
- [RPCX](https://github.com/smallnest/rpcx) - Ein verteiltes RPC-Service-Framework auf Basis von NET/RPC wie Alibaba Dubbo und Weibo Motan.

### Haskell

- [Scotty](https://github.com/scotty-web/scotty) - Micro Web Framework inspiriert von Ruby's Sinatra, mit WAI und Warp.
- [Servant](https://github.com/haskell-servant/servant) Typ-Level Web DSL.
- [Yesod](https://github.com/yesodweb/yesod) Das Haskell RESTful Web Framework.

### Java VM

#### Clojure

- [Compojure](https://github.com/weavejester/compojure) - Eine prägnante Routing-Bibliothek für Ring / Clojure.
- [Duct](https://duct-framework.org/) Ein serverseitiges Framework für Clojure.
- [System](https://github.com/danielsz/system) Erbaut auf der Komponentenbibliothek von Stuart Sierra, bietet eine Reihe von vorgefertigten Komponenten.
- [Tesla](https://github.com/otto-de/tesla-microservice) - Gemeinsame Basis für einige Clojure Microservices von Otto.de.

#### Java

- [ActiveJ](https://github.com/activej/activej) Leichte und schnelle Bibliothek für komplexe hochlastige verteilte Anwendungen und Memcached-ähnliche Lösungen.
- [Airlift](https://github.com/airlift/airlift) Framework zum Erstellen von REST-Diensten in Java.
- [Armeria](https://line.github.io/armeria/) Open-Source-asynchrone HTTP/2 RPC/REST-Client/Server-Bibliothek auf Basis von Java 8, Netty, Thrift und gRPC.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) Hochleistungs-Inter-Thread-Messaging-Bibliothek.
- [Dropwizard](https://github.com/dropwizard/dropwizard) - Java-Framework für die Entwicklung ops-freundlicher, leistungsstarker, RESTful-Webdienste.
- [Dubbo](https://github.com/apache/dubbo) - Ein leistungsstarkes, Java-basiertes RPC-Framework, das von Alibaba Open Source bereitgestellt wird.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - Opinionated Set von Bibliotheken zum Definieren und Erstellen von RESTish/RPC Servern und Clients basierend auf Feign oder Retrofit als Client und Dropwizard/Jersey mit JAX-RS Servicedefinitionen als Server.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - RESTful Services in Java. JAX-RS Referenzimplementierung.
- [Quarkus](https://quarkus.io/) - A Kubernetes Native Java Stack zugeschnitten auf OpenJDK HotSpot und GraalVM, hergestellt aus den besten Java-Bibliotheken und Standards.
- [Ratpack](https://ratpack.io/) - Set von Java-Bibliotheken, die schnelle, effiziente, evolvierbare und gut getestete HTTP-Anwendungen ermöglichen. spezifische Unterstützung für die Groovy-Sprache bereitgestellt wird.
- [Spring Boot](http://projects.spring.io/spring-boot/) - macht es einfach, eigenständige, produktionsfähige Spring-basierte Anwendungen zu erstellen.

#### Kotlin

- [Http4k](https://www.http4k.org/) - Leichtes, aber voll ausgestattetes HTTP-Toolkit, das in reinem Kotlin geschrieben ist und die Bedienung und Nutzung von HTTP-Diensten auf funktionale und konsistente Weise ermöglicht.
- [Ktor](https://ktor.io/) Framework zum Aufbau asynchroner Server und Clients in verbundenen Systemen unter Verwendung der Programmiersprache Kotlin.

#### Scala

- [Finatra](http://twitter.github.io/finatra/) - Schnelle, testbare Scala HTTP-Dienste, die auf Twitter-Server und Finagle aufgebaut sind.
- [Http4s](http://http4s.org/) - Eine minimale, idiomatische Scala-Schnittstelle für HTTP
- [Play](https://www.playframework.com/) - Das High Velocity Web Framework für Java und Scala.

### Node.js

- [Actionhero](http://www.actionherojs.com/) - Multi-Transport Node.js API-Server mit integrierten Cluster-Fähigkeiten und verzögerten Aufgaben.
- [Express](http://expressjs.com/) - Schnelles, neutrales, minimalistisches Web-Framework für Node.js
- [Fastify](https://www.fastify.io/) - Fastify, Fast and Low Overhead Web Framework, für Node.js.
- [FeathersJS](http://feathersjs.com/) - Eine Open Source REST- und Echtzeit-API-Schicht für moderne Anwendungen.
- [Hono](https://hono.dev/) Kleines, einfaches und ultraschnelles Web-Framework für die Edges. Es funktioniert mit jeder JavaScript-Laufzeit.
- [Koa](http://koajs.com/) Next Generation Web Framework für Node.js
- [Loopback](http://loopback.io/) Node.js Framework zum Erstellen von APIs und zum einfachen Verbinden mit Backend-Datenquellen.
- [NestJS](https://docs.nestjs.com/) Ein Node.js-Framework zum Erstellen effizienter und skalierbarer serverseitiger Anwendungen mit integrierter Microservices-Unterstützung.
- [Seneca](https://github.com/senecajs/seneca) - Ein Microservices Toolkit für Node.js
- [Serverless](https://github.com/serverless/serverless) Erstellen und pflegen Sie Web-, Mobil- und IoT-Anwendungen, die auf AWS Lambda und API Gateway (früher bekannt als JAWS) ausgeführt werden.
- [tRPC](https://github.com/trpc/trpc) Ende-zu-Ende typsichere APIs.

### Perlmutt

- [Cro](http://cro.services/) Bibliotheken zum Erstellen reaktiver verteilter Systeme mit Perl 6.
- [Mojolicious](https://mojolicious.org/) Next Generation Web Framework für Perl.

### PHP

- [API Platform](https://api-platform.com/) API-First Web Framework auf Symfony mit JSON-LD, Schema.org und Hydra Unterstützung.
- [Ecotone](https://docs.ecotone.tech/) - Framework basierend auf den architektonischen Prinzipien von DDD, CQRS und Event Sourcing, das Bausteine für die Erstellung skalierbarer und erweiterbarer Anwendungen bereitstellt.
- [Hyperf](https://github.com/hyperf/hyperf) Hyperf ist ein extrem performantes und flexibles PHP-CLI-Framework, das auf Swoole 4.5+ basiert und auf dem hochmodernen Coroutine-Server und einer Vielzahl von kampferprobten Komponenten basiert.
- [Lumen](https://lumen.laravel.com/) - Atemberaubend schnelles Mikro-Framework.
- [Slim](http://www.slimframework.com/) - Micro-Framework, mit dem Sie schnell einfache, aber leistungsstarke Webanwendungen und APIs schreiben können.
- [Spiral](https://spiral.dev/) - Framework für lang laufende Anwendungen mit [RoadRunner](https://roadrunner.dev/)Es bietet erweiterte Funktionen wie die Integration mit dem [Temporal](https://temporal.io/) Workflow-Engine und [Centrifugo](https://centrifugal.dev/) Websocket-Server. Es ist besonders effektiv für die Microservices-Architektur und bietet robuste Unterstützung für REST-APIs und gRPC-Dienste.
- [Swoft](https://github.com/swoft-cloud/swoft/) - PHP Microservices Coroutine-Framework für den Aufbau von leistungsstarken Websystemen, APIs, Middleware und Basisdiensten.
- [Symfony](https://symfony.com/) - Mikrorahmen basierend auf den Symfony-Komponenten.

### Python

- [Aiohttp](https://github.com/aio-libs/aiohttp) - HTTP Client/Server für asyncio.
- [Bottle](https://bottlepy.org) - Schnelles, einfaches und leichtes WSGI Micro Web-Framework für Python.
- [Connexion](https://github.com/zalando/connexion) Swagger/OpenAPI-Framework für Python auf Flask mit automatischer Endpunktvalidierung und OAuth2-Unterstützung.
- [Falcon](https://falconframework.org/) - Bare-Metal Python Web API Framework für den Aufbau sehr schneller App Backends und Microservices.
- [FastAPI](https://fastapi.tiangolo.com/) - Modernes, schnelles (Hochleistungs-) Web-Framework zum Erstellen von APIs mit Python 3.6+ basierend auf Standard-Python-Hinweisen.
- [Flask](http://flask.pocoo.org/) Python Framework für Microservices auf Basis von Werkzeug und Jinja 2.
- [Nameko](https://github.com/onefinestay/nameko) Python Framework zum Erstellen von Microservices.
- [Sanic](https://github.com/sanic-org/sanic) Sanic ist ein Flask-ähnlicher Python 3.5+ Webserver, der geschrieben wurde, um schnell zu gehen.
- [Tornado](http://www.tornadoweb.org/) - Web-Framework und asynchrone Netzwerkbibliothek.
- [Twisted](https://twisted.org/) - Event-driven Network Programming Engine.
- [Web.py](https://github.com/webpy/webpy/) Minimalistisches Web-Framework für Python.

### Rubin

- [Grape](https://github.com/ruby-grape/grape) - Ein eigenverantwortliches Framework zum Erstellen von REST-ähnlichen APIs
- [Hanami](https://github.com/hanami) Ein modernes Web-Framework für Ruby.
- [Praxis](https://github.com/rightscale/praxis) - Framework für die Gestaltung und Implementierung von APIs.
- [Scorched](https://github.com/wardrop/Scorched) Leichtgewichtiges Web-Framework für Ruby.
- [Sinatra](http://www.sinatrarb.com/) - Sinatra ist eine DSL zum schnellen Erstellen von Webanwendungen in Ruby mit minimalem Aufwand.

### Rust

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Eine Zusammenfassung des aktuellen Standes der Web-Programmierung in Rust.
- [Actix](https://actix.rs/) Leistungsstarkes, pragmatisches und extrem schnelles Web-Framework für Rust.
- [Tarpc](https://github.com/google/tarpc) - RPC-Framework für Rust mit Fokus auf Benutzerfreundlichkeit.
- [Tokio](https://tokio.rs) - Asynchrone Laufzeit zum Schreiben von Netzwerkanwendungen.
- [Tower](https://github.com/tower-rs/tower) Bibliothek modularer und wiederverwendbarer Komponenten zum Aufbau robuster Netzwerkclients und Server.
- [Wtx](https://github.com/c410-f3r/wtx) HTTP/2 Client/Server-Framework.

## Frontend/UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - Eine kuratierte Liste von Ressourcen über Micro Frontends.
- [Electrode](https://github.com/electrode-io) - Universal React/Node.js Anwendungsplattform.
- [Micro Frontends](https://micro-frontends.org) - Erweiterung der Microservice-Idee auf Frontend-Entwicklung.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniApp Standardisierung White Paper.

## Kapazitäten

### API Gateways / Edge Services

- [Ambassador (c)](https://www.getambassador.io) - Kubernetes-natives API-Gateway für Microservices auf Envoy.
- [Apache APISIX](https://apisix.apache.org/) - Hochleistungs-, Echtzeit-API-Gateway und AI-Gateway, basierend auf NGINX und etcd, mit heiß nachgeladenem Routing und 100+ Plugins.
- [APIcast](https://github.com/3scale/APIcast) APIcast ist ein API-Gateway, das auf NGINX aufbaut. Es ist Teil der Red Hat 3scale API Management Platform.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Web-App-Hosting und Reverse-Proxy standardmäßig sicher.
- [Caddy](https://caddyserver.com/) - Erweiterbarer HTTP/2-Webserver mit automatischem HTTPS.
- [Camel](http://camel.apache.org/) Ermöglicht es Ihnen, Routing- und Mediationsregeln in einer Vielzahl von domänenspezifischen Sprachen zu definieren, einschließlich einer Java-basierten fließenden API, Spring- oder Blueprint-XML-Konfigurationsdateien und einer Scala DSL.
- [Envoy](https://github.com/lyft/envoy) - Open Source Edge und Service Proxy, von den Entwicklern von Lyft.
- [HAProxy](https://github.com/haproxy/haproxy) - Zuverlässiger, leistungsstarker TCP/HTTP Load Balancer.
- [Istio](https://istio.io/) Eine offene Plattform zur Verbindung, Verwaltung und Sicherung von Microservices.
- [Keepalived](http://www.keepalived.org/) Einfache und robuste Einrichtungen für Loadbalancing und Hochverfügbarkeit für Linux-System und Linux-basierte Infrastrukturen.
- [Kong](https://github.com/kong/kong) Open Source Management Layer für APIs.
- [KrakenD](http://krakend.io/) Open Source Ultra Performance API Gateway.
- [Kuma](https://kuma.io/) Plattformunabhängige Open-Source-Kontrollebene für Service Mesh und Microservices.
- [Linkerd](https://linkerd.io/) Resilient Service Mesh für Cloud Native Apps.
- [Neutrino](https://github.com/eBay/Neutrino) - Erweiterbarer Software Load Balancer.
- [OpenResty](http://openresty.org/) - Schneller Webanwendungsserver, der auf Nginx aufbaut.
- [Open Service Mesh](https://openservicemesh.io/) Leichtes und erweiterbares Cloud Native Service Mesh.
- [Otoroshi](https://www.otoroshi.io/) - Moderne HTTP Reverse Proxy mit leichtgewichtigem API-Management.
- [Pingora](https://github.com/cloudflare/pingora) Eine Bibliothek zum Aufbau schneller, zuverlässiger und evolvierbarer Netzwerkdienste.
- [Skipper](https://github.com/zalando/skipper) - HTTP-Router nützlich zum Entkoppeln des Routings von der Dienstlogik.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) API Gateway auf Spring MVC. Ziel ist es, einen einfachen, aber effektiven Weg zu APIs zu finden.
- [Tengine](http://tengine.taobao.org/) - Eine Distribution von Nginx mit einigen erweiterten Funktionen.
- [Træfɪk](http://traefik.io/) - Ein moderner HTTP Reverse Proxy und Load Balancer für die einfache Bereitstellung von Microservices.
- [Traffic Server](https://github.com/apache/trafficserver) - Hochleistungsbaustein für Cloud-Services.
- [Tyk](https://tyk.io/) Open Source, schnelles und skalierbares API Gateway, Portal und API Management Plattform.
- [Vulcand](https://github.com/vulcand/vulcand) - Programmatic Load Balancer unterstützt durch Etcd.
- [Zuul](https://github.com/Netflix/zuul) - Ein Edge-Service, der dynamisches Routing, Überwachung, Resilienz, Sicherheit und mehr bietet.

### Konfiguration & Discovery

- [Central Dogma](https://line.github.io/centraldogma/) - Open-Source hochverfügbares versionengesteuertes Dienstkonfigurations-Repository basierend auf Git, ZooKeeper und HTTP/2.
- [Consul](https://www.consul.io/) Service Discovery und Konfiguration leicht gemacht. Verteilt, hochverfügbar und Datacenter-bewusst.
- [Etcd](https://github.com/coreos/etcd) Hochverfügbarer Key-Value-Store für die gemeinsame Konfiguration und Serviceerkennung.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - REST-basierter Dienst, der hauptsächlich in der AWS-Cloud zur Ortung von Diensten zum Zwecke des Load Balancing und Failovers von Servern mittlerer Ebene verwendet wird.
- [Microconfig](https://microconfig.io) - Moderne und einfache Art des Microservice-Konfigurationsmanagements.
- [Nacos](https://github.com/alibaba/nacos) - Einfach zu bedienende dynamische Serviceerkennungs-, Konfigurations- und Servicemanagement-Plattform.
- [SkyDNS](https://github.com/skynetservices/skydns) - Verteilter Service für die Ankündigung und Entdeckung von Diensten, die auf etcd aufgebaut sind. Es verwendet DNS-Abfragen, um verfügbare Dienste zu finden.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) Server- und clientseitige Unterstützung für die externe Konfiguration in einem verteilten System.
- [ZooKeeper](https://zookeeper.apache.org/) - Open Source Server, der eine sehr zuverlässige verteilte Koordination ermöglicht.

### Workflow Orchestrierung

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - Koordinieren Sie die Komponenten verteilter Anwendungen und Microservices mithilfe visueller Workflows.
- [Cadence](https://cadenceworkflow.io/) - Fault-oblivious Stateful Code Plattform.
- [Conductor](https://github.com/Netflix/conductor) - Eine Microservices Orchestrierungsmaschine.
- [Inngest](https://github.com/inngest/inngest) Dauerhafte Funktionen für zuverlässige Hintergrundlogik, von Hintergrundjobs bis hin zu komplexen Workflows.
- [Kestra](https://github.com/kestra-io/kestra) Open-Source-Mikroservices ereignisgesteuerte, sprachunabhängige Orchestrierungs- und Planungsplattform.
- [Temporal](https://github.com/temporalio/temporal) - Open Source Microservices Orchestrierungsplattform für die Ausführung von Mission Critical Code in jedem Maßstab.
- [Zeebe](https://camunda.com/platform/zeebe/) Definieren, orchestrieren und überwachen Sie Geschäftsprozesse über Microservices hinweg.

### Elastizität

- [Hazelcast](http://hazelcast.org/) Open Source In-Memory Data-Grid. Ermöglicht es Ihnen, Daten und Berechnungen auf Server, Cluster und Regionen zu verteilen und sehr große Datensätze oder hohe Datenaufnahmeraten zu verwalten. Reife Technologie.
- [Helix](http://helix.apache.org/) Generisches Cluster-Management-Framework für die automatische Verwaltung von partitionierten, replizierten und verteilten Ressourcen, die auf einem Cluster von Knoten gehostet werden.
- [Ignite](http://ignite.apache.org/) - Hochleistungs-, integrierte und verteilte In-Memory-Plattform für die Berechnung und Transaktion von großen Datensätzen in Echtzeit, Größenordnungen schneller als möglich mit herkömmlichen Festplatten- oder Flash-Technologien.
- [Libp2p](https://libp2p.io/) Ein Framework und eine Reihe von Protokollen zum Erstellen von Peer-to-Peer-Netzwerkanwendungen.
- [Mesos](https://mesos.apache.org/) Abstracts CPU, Speicher, Speicher und andere Rechenressourcen weg von Maschinen (physisch oder virtuell), so dass fehlertolerante und elastische verteilte Systeme einfach aufgebaut und effektiv ausgeführt werden können.
- [Nomad](https://www.nomadproject.io/) - Verteilter, hochverfügbarer, Datacenter-fähiger Scheduler.
- [Redisson](https://github.com/mrniko/redisson) Verteilte und skalierbare Java-Datenstrukturen auf dem Redis-Server.
- [Serf](https://www.serf.io/) Dezentrale Lösung für Clustermitgliedschaft, Fehlererkennung und Orchestrierung.
- [Valkey](https://github.com/valkey-io/valkey) - Ein neues Projekt zur Wiederaufnahme der Entwicklung des ehemaligen Open-Source-Projekts Redis.
- [Zenoh](https://zenoh.io/) Pub/Sub/Abfrage-Protokoll, das Daten in Bewegung, Daten in Ruhe und Berechnungen vereint. Verbindet traditionelles Pub / Sub effizient mit verteiltem Geo-Speicher, Abfragen und Berechnungen.

### Job Schedulers / Workload Automation

- [Celery](https://github.com/celery/celery) - Asynchrone Aufgabenwarteschlange/Jobwarteschlange basierend auf verteilter Nachrichtenübergabe. Konzentriert sich auf den Echtzeitbetrieb und unterstützt die Planung.
- [Dkron](http://dkron.io/) Verteiltes, fehlertolerantes Jobplanungssystem.
- [Faktory](https://github.com/contribsys/faktory) - Language-agnostic persistenter Hintergrund-Jobserver.
- [Rundeck (c)](http://rundeck.org/) - Jobplaner und Runbook-Automatisierung. Ermöglichen Sie Self-Service-Zugriff auf vorhandene Skripte und Tools.
- [Schedulix](https://github.com/schedulix/schedulix) - Open Source Enterprise Job Scheduling System setzt bahnbrechende Standards für die professionelle Automatisierung von IT-Prozessen in fortschrittlichen Systemumgebungen.

### Lokale Entwicklung

- [mirrord](https://metalbear.com/mirrord/) - Führen Sie lokalen Code aus, als wäre es ein Pod in einer Fernbedienung Kubernetes Cluster.

### Protokollierung

- [Fluentd](http://www.fluentd.org/) Open Source Datensammler für Unified Logging Layer.
- [Graylog](https://www.graylog.org/) Vollständig integrierte Open Source Log Management Plattform.
- [Kibana](https://www.elastic.co/products/kibana) Flexible Analyse- und Visualisierungsplattform.
- [LogDNA (c)](https://logdna.com/) Zentralisierte Log-Management-Software. Sammeln, zentralisieren und analysieren Sie Protokolle sofort in Echtzeit von jeder Plattform und jedem Volumen.
- [Logstash](https://www.elastic.co/logstash) - Tool zum Verwalten von Ereignissen und Protokollen.
- [Loki](https://github.com/grafana/loki) - Wie Prometheus, aber für Logs.

### Messaging

- [ØMQ](http://zeromq.org/) - Brokerless intelligente Transportschicht.
- [ActiveMQ](http://activemq.apache.org/) Leistungsstarke Open Source Messaging und Integration Pattern Server.
- [Aeron](https://github.com/real-logic/Aeron) Effizienter zuverlässiger UDP Unicast, UDP Multicast und IPC Nachrichtentransport.
- [Beanstalk](https://beanstalkd.github.io/) - Einfache, schnelle Warteschlange.
- [Bull](https://github.com/OptimalBits/bull) - Schnelle und zuverlässige Redis-basierte Warteschlange für Node.
- [Crossbar](https://github.com/crossbario/crossbar) Open-Source-Netzwerkplattform für verteilte und Microservice-Anwendungen. Es implementiert das offene Web Application Messaging Protocol (WAMP).
- [Kafka](http://kafka.apache.org/) Veröffentlichen-Abonnement-Messaging als verteiltes Commit-Log neu gedacht.
- [Malamute](https://github.com/zeromq/malamute) - ZeroMQ Enterprise Messaging Broker.
- [Mosquitto](http://mosquitto.org/) - Open Source Message Broker, der das MQTT-Protokoll implementiert.
- [NATS](https://nats.io/) Open Source, leistungsstarkes, leichtes Cloud-Messaging-System.
- [NSQ](http://nsq.io/) - Eine verteilte Messaging-Plattform in Echtzeit.
- [Pulsar](https://pulsar.apache.org/) Verteiltes Pub-Sub-Messaging-System.
- [RabbitMQ](https://www.rabbitmq.com/) - Open Source Erlang-basierter Message Broker, der einfach funktioniert.
- [Redpanda](https://github.com/redpanda-data/redpanda/) Streaming-Datenplattform für Entwickler: Kafka API kompatibel, 10x schneller, kein ZooKeeper und keine JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) Eine niedrige Latenz, zuverlässig, skalierbar, einfach zu bedienende nachrichtenorientierte Middleware, die aus dem massiven Messaging-Geschäft von alibaba stammt.

### Monitoring & Debugging

- [Beats](https://www.elastic.co/beats/) Leichtgewichtige Verlader für Elasticsearch & Logstash.
- [Elastalert](https://github.com/yelp/elastalert) - Einfache und flexible Alarmierung für Elasticsearch.
- [Ganglia](http://ganglia.info/) - Ein skalierbares verteiltes Überwachungssystem für Hochleistungsrechensysteme wie Cluster und Grids.
- [Grafana](http://grafana.org/) - Ein Open Source, Feature Rich Metriken Dashboard und Graph-Editor für Graphite, InfluxDB & OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - Skalierbares Echtzeitgraphing.
- [IOpipe (c)](https://www.iopipe.com/) - Überwachung der Anwendungsleistung für Amazon Lambda.
- [Jaeger](https://www.jaegertracing.io/) - Ein Open Source, End-to-End Distributed Tracing
- [OpenTelemetry](https://opentelemetry.io/) - Hochwertige, allgegenwärtige und tragbare Telemetrie, um eine effektive Beobachtbarkeit zu ermöglichen.
- [Prometheus](http://prometheus.io/) - Ein Open Source Service Monitoring System und Zeitreihendatenbank.
- [Riemann](http://riemann.io/) Überwacht verteilte Systeme.
- [Sensu](https://github.com/sensu) - Überwachung der heutigen Infrastruktur.
- [SkyWalking](https://skywalking.apache.org/) - Anwendungs-Performance-Monitor-Tool für verteilte Systeme, speziell für Microservices, Cloud-nativ und Container-basiert (Docker), K8sMesos Architekturen.
- [Zabbix](http://www.zabbix.com/) - Open Source Enterprise-Class-Monitoring-Lösung.
- [Zipkin](http://zipkin.io) Distributed Tracing System.

### Reaktivität

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - Distributed Stream Processing Engine zum Transformieren, Filtern, Aggregieren und Verbinden von Datenströmen durch Schreiben von SQL.
- [Reactor.io](https://github.com/reactor) Eine Reactive-Bibliothek der zweiten Generation zum Erstellen von nicht blockierenden Anwendungen auf der JVM basierend auf der Reactive Streams Specification.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Reactive Streams API für Apache Kafka.
- [ReactiveX](http://reactivex.io/) API für asynchrone Programmierung mit beobachtbaren Streams. Verfügbar für idiomatische Java, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby und andere.
- [RSocket](https://rsocket.io/) Anwendungsprotokoll mit Reactive Streams-Semantik.

### Resilienz

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - Eine kuratierte Liste von fantastischen Chaos Engineering Ressourcen.
- [Raft Consensus](https://raft.github.io/) Konsensalgorithmus, der so konzipiert ist, dass er leicht zu verstehen ist. Es entspricht Paxos in Fehlertoleranz und Leistung.
- [Resilience4j](https://github.com/resilience4j/resilience4j) Fehlertoleranzbibliothek für Java8 und funktionale Programmierung.
- [Svix](https://svix.com) - Webhooks-Service, der Webhooks an Ihre Benutzer mit vollständigen Wiederholungszeitplänen, exponentiellem Backoff, Signaturverifizierung und Ereignistypen sendet.

### Sicherheit

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - Autorisierungsmanagementsystem zum Erstellen, Testen und Bereitstellen von Zugriffsrichtlinien. Aufbau einer skalierbaren, feinkörnigen Autorisierung in einer Microservice-Architektur.
- [Dex](https://github.com/coreos/dex) - Opinionated Auth / Verzeichnis-Service mit steckbaren Steckern. OpenID Connect-Anbieter und OAuth 2.0-Delegation von Drittanbietern.
- [JWT](http://jwt.io/) JSON Web Tokens sind eine offene, branchenübliche RFC 7519-Methode zur sicheren Darstellung von Ansprüchen zwischen zwei Parteien.
- [Keycloak](https://github.com/keycloak/keycloak) - Voll ausgestatteter und erweiterbarer Auth Service. OpenID Connect-Anbieter und OAuth 2.0-Delegation von Drittanbietern.
- [OAuth](http://oauth.net/2/) Bietet spezifische Autorisierungsflüsse für Webanwendungen, Desktop-Anwendungen, Mobiltelefone und Wohnzimmergeräte. Viele Implementierungen.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) Bibliotheken, Produkte und Tools, die aktuelle OpenID-Spezifikationen und verwandte Spezifikationen implementieren.
- [Open Ziti](https://openziti.io/) Zero Trust Security und Overlay Networking als reine Open Source Software.
- [ORY](https://www.ory.sh/) - Open Source Identitätsinfrastruktur und -dienste.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) Runtime Defense Layer für AI Agent Memory Poisoning (OWASP ASI06). Erkennt manipulierte Speichereinträge, prompte Injektion in Speicherpfade und geheime Leckagen. YAML-Richtlinien, Mikrosekunden-Latenz, null externe Abhängigkeiten.
- [SCIM](https://simplecloud.info/) - System für bereichsübergreifendes Identitätsmanagement.
- [Vault](https://www.vaultproject.io/) Sichert, speichert und kontrolliert den Zugriff auf Token, Passwörter, Zertifikate, API-Schlüssel und andere Geheimnisse im modernen Computing.

### Serialisierung

- [Avro](https://avro.apache.org/) Apache-Datenserialisierungssystem, das reichhaltige Datenstrukturen in einem kompakten, schnellen, binären Datenformat bereitstellt.
- [Bond](https://github.com/microsoft/bond/) Plattformübergreifendes Framework für die Arbeit mit schematisierten Daten, das bei Microsoft in High-Scale-Diensten weit verbreitet ist.
- [BooPickle](https://github.com/ochrons/boopickle) Binäre Serialisierungsbibliothek für effiziente Netzwerkkommunikation. Für Scala und Scala.js
- [Cap’n Proto](https://capnproto.org/) - Wahnsinnig schnelles Datenaustauschformat und fähigkeitsbasiertes RPC-System.
- [CBOR](http://cbor.io/) Implementierungen des CBOR-Standards (RFC 7049) in vielen Sprachen.
- [Cereal](http://uscilab.github.io/cereal/) - C++11 Bibliothek zur Serialisierung.
- [Cheshire](https://github.com/dakrone/cheshire) Clojure JSON und JSON SMILE Kodierung/Dekodierung.
- [Etch](http://etch.apache.org/) Plattformübergreifendes, sprach- und transportunabhängiges Framework für den Aufbau und die Nutzung von Netzwerkdiensten.
- [Fastjson](https://github.com/alibaba/fastjson) - Schneller JSON Prozessor.
- [Ffjson](https://github.com/pquerna/ffjson) Schnellere JSON-Serialisierung für Go.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - Schnelle Java-Serialisierung Drop-In-Ersatz.
- [Jackson](https://github.com/FasterXML/jackson) Eine Mehrzweck-Java-Bibliothek zur Verarbeitung des JSON-Datenformats.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - Jackson-Modul, das die Bytecode-Generierung verwendet, um die Datenbindung weiter zu beschleunigen (+30-40% Durchsatz für Serialisierung, Deserialisierung).
- [Kryo](https://github.com/EsotericSoftware/kryo) - Java-Serialisierung und Klonen: schnell, effizient, automatisch.
- [Lite³](https://github.com/fastserial/lite3) JSON-kompatibles Zero Copy Serialisierungsformat.
- [MessagePack](http://msgpack.org/) Effizientes binäres Serialisierungsformat.
- [Protostuff](https://github.com/protostuff/protostuff) - Eine Serialisierungsbibliothek mit integrierter Unterstützung für Vorwärts-Rückwärts-Kompatibilität (Schemaentwicklung) und Validierung.
- [SBinary](https://github.com/harrah/sbinary) Bibliothek zur Beschreibung von Binärformaten für Scala-Typen.
- [Thrift](http://thrift.apache.org/) - Das Apache Thrift Software-Framework für skalierbare sprachübergreifende Diensteentwicklung.
- [yyjson](https://github.com/ibireme/yyjson) - Die schnellste JSON Bibliothek in C.

### Lagerung

- [Apache Cassandra](http://cassandra.apache.org) - Spaltenorientiert und hohe Verfügbarkeit ohne Single Point of Failure.
- [Aerospike (c)](http://www.aerospike.com/) - Hochleistungs-NoSQL-Datenbank mit skalierbarer Geschwindigkeit.
- [ArangoDB](https://www.arangodb.com/) - Eine verteilte kostenlose Open-Source-Datenbank mit einem flexiblen Datenmodell für Dokumente, Grafiken und Schlüsselwerte.
- [Citus](https://github.com/citusdata/citus) Verteilte PostgreSQL als Erweiterung.
- [CockroachDB (c)](https://www.cockroachlabs.com/) Eine Cloud-native SQL-Datenbank nach dem Vorbild von Google Spanner.
- [Couchbase](https://github.com/couchbase) Eine verteilte Datenbank, die für Leistung, Skalierbarkeit und vereinfachte Verwaltung entwickelt wurde.
- [Crate (c)](https://crate.io/) - Skalierbare SQL-Datenbank mit den NoSQL Goodies.
- [Druid](http://druid.io/) - Schneller spaltenorientierter verteilter Datenspeicher.
- [Elasticsearch](https://www.elastic.co/elasticsearch) Open Source verteilt, skalierbar und hochverfügbar Suchserver.
- [Geode](http://geode.incubator.apache.org/) - Open Source, verteilte In-Memory-Datenbank für Scale-Out-Anwendungen.
- [Infinispan](http://infinispan.org/) - Hochkonkurrenter Schlüssel/Wert-Datenspeicher, der für das Caching verwendet wird.
- [InfluxDB](https://github.com/influxdata/influxdb) Skalierbarer Datenspeicher für Metriken, Ereignisse und Echtzeitanalysen.
- [RethinkDB](http://rethinkdb.com/) Open Source, skalierbare Datenbank, die das Erstellen von Echtzeit-Apps erleichtert.
- [TiKV](https://github.com/tikv) Verteilte transaktionale Key-Value-Datenbank.
- [TimescaleDB](https://github.com/timescale/timescaledb) - Eine Zeitreihen-Datenbank für leistungsstarke Echtzeit-Analysen, verpackt als Postgres-Erweiterung.
- [Trino](https://trino.io/) - Schnell verteilte SQL-Abfrage-Engine für Big Data Analytics, mit der Sie Ihr Datenuniversum erkunden können.

### Prüfung

- [Goreplay](https://github.com/buger/goreplay) Ein Tool zum Erfassen und Wiedergeben von Live-HTTP-Datenverkehr in einer Testumgebung.
- [Keploy](https://keploy.io) - Open-Source-Tool für API-Tests und -Mocking, indem realer Datenverkehr erfasst und in Testfälle und Stubs umgewandelt wird, was zuverlässiges Microservice-Testing ermöglicht.
- [Mitmproxy](https://mitmproxy.org/) Ein interaktives Konsolenprogramm, mit dem Verkehrsströme abgefangen, inspiziert, modifiziert und wiedergegeben werden können.
- [MockServer](https://www.mock-server.com) - Mocking, Debugging von Proxy und Chaos Engineering für mehrere Protokolle (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP und mehr); Mock-Abhängigkeiten, Aufzeichnung / Wiedergabe von Datenverkehr, Überprüfung von Anforderungen und Injection von Fehlern für Integrations- und Resilienztests.
- [Mountebank](http://www.mbtest.org/) - Cross-Plattform, Multi-Protokoll-Test verdoppelt sich über den Draht.
- [Pact](https://docs.pact.io) Vertragstest-Framework für HTTP-APIs und nicht-HTTP-asynchrone Messaging-Systeme.
- [RestQA](https://github.com/restqa/restqa) Ein Tool zur Verwaltung von Microservices-Mocking, Unit- und Performance-Tests vor Ort mit bester Entwicklererfahrung.
- [Specmatic](https://specmatic.io) - Konvertiert API-Spezifikationen (OpenAPI, AsyncAPI, GraphQL, gRPC usw.) in ausführbare Verträge für automatisiertes Testen, Service-Virtualisierung und Abwärtskompatibilitätsvalidierung, ohne Code zu schreiben.
- [VCR](https://github.com/vcr/vcr) Notieren Sie die HTTP-Interaktionen Ihrer Testsuite und wiederholen Sie sie während zukünftiger Testläufe für schnelle, deterministische und genaue Tests. Siehe die Liste der Ports für Implementierungen in anderen Sprachen.
- [Wilma](https://github.com/epam/Wilma) Kombinierter HTTP/HTTPS Service Stub und transparente Proxy-Lösung.
- [WireMock](http://wiremock.org/) - Flexible Bibliothek für Stubbbing und Spott Web-Services. Im Gegensatz zu allgemeinen Spott-Tools funktioniert es, indem es einen tatsächlichen HTTP-Server erstellt, mit dem sich Ihr getesteter Code verbinden kann, wie es ein echter Webdienst wäre.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - Lightweight Service Virtualisierung / API-Simulationstool für Entwickler und Tester.

## Continuous Integration & Delivery

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - Eine kuratierte Liste fantastischer Tools für Continuous Integration, Continuous Delivery und DevOps.

## Web API Modellierung & Dokumentation

### Async
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI-Spezifikation, der Industriestandard zur Definition asynchroner APIs.

### GraphQL

- [GraphQL](http://graphql.org/) Abfragesprache, die entwickelt wurde, um Clientanwendungen zu erstellen, indem sie eine intuitive und flexible Syntax und ein System zur Beschreibung ihrer Datenanforderungen und Interaktionen bereitstellt.

### JSON

- [JSON:API](https://jsonapi.org/) Eine Spezifikation, wie ein Client anfordern sollte, dass Ressourcen abgerufen oder geändert werden, und wie ein Server auf diese Anforderungen reagieren sollte.

### REST

- [API Blueprint](https://apiblueprint.org/) - Tools für Ihren gesamten API-Lebenszyklus. Verwenden Sie es, um Ihre API mit anderen zu besprechen. Erstellen Sie die Dokumentation automatisch. Oder eine Test-Suite. Oder sogar ein bisschen Code.
- [OpenAPI](https://www.openapis.org/) Die OpenAPI-Spezifikation (OAS) bietet ein konsistentes Mittel, um Informationen durch jede Phase des API-Lebenszyklus zu tragen.
- [RAML](http://raml.org/) - RESTful API Modeling Language, eine einfache und prägnante Art, praktisch RESTful APIs zu beschreiben.
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger-generierte API Dokumentation.
- [Scalar](https://github.com/scalar/scalar) - Open-Source-API-Plattform: schöne API-Referenzen und erstklassige OpenAPI / Swagger-Unterstützung.
- [Slate](https://github.com/slatedocs/slate) - Schöne statische Dokumentation für Ihre API.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Dokumentieren Sie RESTful-Services durch die Kombination von handschriftlicher Dokumentation mit automatisch generierten Snippets, die mit Spring MVC Test erstellt wurden.
- [Swagger](https://swagger.io/) - Eine einfache, aber leistungsstarke Darstellung Ihrer RESTful API.

## Normen / Empfehlungen

### World Wide Web

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) Architektur des World Wide Web, Band Eins.
- [RFC3986](https://tools.ietf.org/html/rfc3986) Uniform Resource Identifier (URI): Generische Syntax.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - URI Template.
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URI Design und Eigentum.

### Selbstverwaltung & Dezentralisierung

- [DID](https://www.w3.org/TR/did-core/) - W3C-Spezifikation von dezentralen Identifikatoren (DIDs): ein neuer Typ von Identifikatoren, der überprüfbare, dezentrale digitale Identität ermöglicht.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - Private Kommunikationsmethodik, die auf dem dezentralen Design von DIDs aufbaut.
- [DIDComm Protocols](https://didcomm.org/) - Registrierung von Protokollen, die auf DIDComm aufbauen, für vertrauensvolle, selbstsouveräne Interaktionen über jeden Transport.
- [IDSA](https://internationaldataspaces.org/) Die International Data Spaces Association (IDSA) hat es sich zur Aufgabe gemacht, die Zukunft der globalen, digitalen Wirtschaft mit International Data Spaces (IDS) zu schaffen, einem sicheren, souveränen System des Datenaustauschs, in dem alle Teilnehmer den vollen Wert ihrer Daten realisieren können.

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - Nachrichtensyntax und Routing.
- [RFC7231](https://tools.ietf.org/html/rfc7231) Semantik und Inhalt.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - Bedingte Anfragen.
- [RFC7233](https://tools.ietf.org/html/rfc7233) Range Requests.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - Caching.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - Authentifizierung.
- [RFC7807](https://tools.ietf.org/html/rfc7807) - Problemdetails für HTTP APIs.

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) Hypertext Transfer Protocol Version 2.

### QUIC

- [QUIC-WG](https://quicwg.org/) - IETF Working Group, die gechartert ist, um das nächste Transportprotokoll für das Internet zu liefern.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - Ein UDP-basierter Multiplex- und sicherer Transport.

### RPC

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) Ein zustandsloses, leichtes Remote Procedure Call (RPC) Protokoll.
- [Open RPC](https://open-rpc.org/) Die OpenRPC-Spezifikation definiert eine standardmäßige, programmsprachenunabhängige Schnittstellenbeschreibung für JSON-RPC 2.0 APIs.

### Messaging

- [AMQP](https://www.amqp.org/) - Advanced Message Queuing Protocol.
- [MQTT](https://mqtt.org/) MQ Telemetrie Transport.
- [STOMP](https://stomp.github.io/) Einfaches textorientiertes messaging-protokoll.

### Sicherheit

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) Das Grant Negotiation and Authorization Protocol definiert einen Mechanismus zum Delegieren der Autorisierung an eine Software und zum Übertragen dieser Delegation an die Software. Diese Delegation kann den Zugriff auf eine Reihe von APIs sowie Informationen umfassen, die direkt an die Software weitergeleitet werden.<sup>ENTWURF</sup>
- [OIDCONN](http://openid.net/connect/) OpenID Connect 1.0 ist eine einfache Identitätsschicht auf dem OAuth 2.0-Protokoll. Es ermöglicht Clients, die Identität des Endbenutzers basierend auf der von einem Autorisierungsserver durchgeführten Authentifizierung zu überprüfen und grundlegende Profilinformationen über den Endbenutzer auf interoperable und REST-ähnliche Weise zu erhalten.
- [PASETO](https://paseto.io/) - Paseto ist alles, was Sie an JOSE (JWT, JWE, JWS) lieben, ohne eines der vielen Designdefizite, die die JOSE-Standards plagen. <sup>ENTWURF</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - The Transport Layer Security (TLS) Protocol Version 1.2.
- [RFC6066](https://tools.ietf.org/html/rfc6066) TLS-Erweiterungen.
- [RFC6347](https://tools.ietf.org/html/rfc6347) Datagram Transport Layer Security Version 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) Das OAuth 2.0 Authorization Framework.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - Transparenz des Zertifikats.
- [RFC7515](https://tools.ietf.org/html/rfc7515) JSON Web Signature (JWS) stellt Inhalte dar, die mit digitalen Signaturen oder Message Authentication Codes (MACs) unter Verwendung von JSON-basierten Datenstrukturen gesichert sind.
- [RFC7519](https://tools.ietf.org/html/rfc7519) JSON Web Token (JWT) ist ein kompaktes, URL-sicheres Mittel zur Darstellung von Ansprüchen, die zwischen zwei Parteien übertragen werden.
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM: Definitionen, Übersicht, Konzepte und Anforderungen.
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM: Core Schema bietet ein plattformneutrales Schema und Erweiterungsmodell zur Darstellung von Benutzern und Gruppen.
- [RFC7644](https://tools.ietf.org/html/rfc7644) SCIM: Protokoll, ein REST-Protokoll auf Anwendungsebene zur Bereitstellung und Verwaltung von Identitätsdaten im Web.

### Service Discovery
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - Mechanismus für Clients zum Auffinden einer Liste benannter Instanzen eines Dienstes unter Verwendung von Standard-DNS-Abfragen.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - Eine DNS RR zur Angabe des Standorts von Diensten (DNS SRV).

### Datenformate

- [RFC4627](https://tools.ietf.org/html/rfc4627) JavaScript Object Notation (JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) - Concise Binary Object Representation (CBOR).
- [BSON](http://bsonspec.org/) Binär JSON (BSON).
- [JSON-LD](http://json-ld.org/) JSON für Linking Data.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) Einfache binäre Kodierung (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - MessagePack Spezifikation.

### Vokabular

- [JSON Schema](http://json-schema.org/) - Vokabular, mit dem Sie JSON-Dokumente kommentieren und validieren können.
- [Schema.org](http://schema.org/) - Zusammenarbeitende, gemeinschaftliche Aktivitäten mit der Mission, Schemata für strukturierte Daten im Internet, auf Webseiten, in E-Mail-Nachrichten und darüber hinaus zu erstellen, zu pflegen und zu fördern.

### Unicode

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) Das Unicode Consortium. Der Unicode Standard, Version 8.0.0, (Mountain View, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, ein Transformationsformat von ISO 10646.

## Organisationsdesign / Teamdynamik

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF</sup> - Melvin E. Conway, Datamation Magazin 1968. Der ursprüngliche Artikel, der Conway's Law definiert.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) Jedes Team ist für eine oder mehrere Geschäftsfunktionen (z. B. Geschäftsfunktionen) verantwortlich. Ein Team besitzt eine Codebasis, die aus einem oder mehreren Modulen besteht. Seine Codebasis ist so bemessen, dass sie die kognitive Kapazität des Teams nicht übersteigt. Das Team stellt seinen Code als einen oder mehrere Dienste bereit. Ein Team sollte genau einen Dienst haben, es sei denn, es besteht ein nachgewiesener Bedarf an mehreren Diensten.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> DOES19 London. Die Debatte "Monolithen vs. Microservices" konzentriert sich oft auf technologische Aspekte und ignoriert Strategie und Teamdynamik. Anstelle von Technologie beginnen intelligente Unternehmen mit der kognitiven Belastung des Teams als Leitprinzip für moderne Software. In diesem Vortrag erklären wir wie und warum, veranschaulicht durch reale Fallstudien.

## Unternehmen & Vertikale

- [Commercetools](https://commercetools.com/) Headless Handelsplattform.
- [Equinox](https://www.infosysequinox.com/) Infosys Equinox ist eine menschenzentrierte Handels- und Marketingplattform, die reichhaltige, hyperpersonalisierte Erlebnisse über alle Kanäle und Touchpoints hinweg unterstützt.
- [Flamingo](https://www.flamingo.me/) Framework zum Aufbau flexibler und moderner E-Commerce-Anwendungen.
- [Medusa](https://medusajs.com/) Headless Open-Source-Commerce-Plattform.

## Theorie

### Artikel & Papiere

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - Philosophische Einführung in das Design von adaptiven hyperliminalen Systemen durch Theorien der Komplexitätswissenschaft.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: Eine aktualisierte und organisierte Leseliste zur Veranschaulichung der Muster skalierbarer, zuverlässiger und leistungsfähiger Großsysteme. Konzepte werden in den Artikeln prominenter Ingenieure und glaubwürdigen Referenzen erklärt. Fallstudien werden von kampferprobten Systemen genommen, die Millionen bis Milliarden von Benutzern dienen.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - Modell zur Darstellung der Dimensionen zur Skalierung eines Dienstes.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF</sup> Konsistenz als logische Monotonie.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - Technik, um das Risiko der Einführung einer neuen Softwareversion in der Produktion zu reduzieren, indem die Änderung langsam an eine kleine Teilmenge von Benutzern ausgerollt wird, bevor sie auf die gesamte Infrastruktur übertragen und für alle verfügbar gemacht wird.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - besagt, dass es für ein verteiltes Computersystem unmöglich ist, gleichzeitig alle drei der folgenden Garantien zu bieten: Konsistenz, Verfügbarkeit und Partitionstoleranz.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF</sup> Die serverlose Computerabstraktion zeigt mehrere Betriebsdetails auf niedriger Ebene, die es Programmierern schwer machen, ihren Code zu schreiben und zu begründen. Dieser Artikel beleuchtet dieses Problem, indem er λ, eine operative Semantik der Essenz von Serverless Computing, präsentiert.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - Besondere Art, Softwareanwendungen als Suiten von unabhängig einsetzbaren Diensten zu entwerfen.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF</sup> - Die siebenteilige Serie von F5 zu Microservices.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - Kritische Ratschläge zu einigen Problemen in Bezug auf einen Microservices-Ansatz.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - Leitfaden zum Nachdenken über Kosten und Vorteile des Architekturstils von mircoservices.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Definition reaktiver Systeme.
- [Reactive Streams](http://www.reactive-streams.org/) - Initiative zur Bereitstellung eines Standards für die asynchrone Stromverarbeitung mit nicht blockierendem Gegendruck.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF</sup> Ressourcenorientiertes Computing für adaptive Systeme.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF</sup> Software-Ökosysteme verstehen: Ein strategischer Modellierungsansatz.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - Ansätze zur Verwaltung der zusätzlichen Testkomplexität mehrerer unabhängig einsetzbarer Komponenten.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF</sup> Beschreibt drei Abstraktionen, die ein leistungsfähiges Programmiermodell für den Aufbau einer sicheren, modularen und effizienten Serversoftware darstellen: Composable Futures, Services und Filter.

### Websites und Organisationen

- [Cloud Native Computing Foundation](https://www.cncf.io/) Die Cloud Native Computing Foundation baut nachhaltige Ökosysteme auf und fördert eine Community rund um eine Konstellation hochwertiger Projekte, die Container als Teil einer Microservices-Architektur orchestrieren.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - Interaktive Landschaft von Cloud Native Technologien.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - Martin Fowlers Auswahl an Artikeln, Videos, Büchern und Podcasts, die Ihnen mehr über den Architekturstil von Microservices beibringen können.
- [Microservice Patterns](http://microservices.io/) Microservice-Architekturmuster und Best Practices.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - Microservice meist bekannte Anti-Muster und Fallstricke.

## Lizenz

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Beitrag

Bitte lesen Sie die [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) Bevor Sie Ihren Vorschlag einreichen.

Fühlen Sie sich frei [open an issue](https://github.com/mfornos/awesome-microservices/issues) oder [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) Mit deinen Ergänzungen.

:star2: Vielen Dank!
