# Selección de recursos sobre microservicios [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una lista curada de principios y tecnologías relacionados con Microservice Architecture.

**Cuadro de contenidos**

- [Plataformas](#platforms)
- [Marcos / Tiempos de ejecución](#frameworks--runtimes)
- [Herramientas de servicio](#service-toolkits)
  - [Poliglota](#polyglot)
  - [C](#c)
  - [C++](#c-1)
  - [C#](#csharp)
  - [D](#d)
  - [Erlang VM](#erlang-vm)
  - [Vamos.](#go)
  - [Haskell](#haskell)
  - [Java VM](#java-vm)
  - [Node.js](#nodejs)
  - [Perl](#perl)
  - [PHP](#php)
  - [Python](#python)
  - [Ruby](#ruby)
  - [Rust](#rust)
- [Frontend / UI](#frontend--ui)
- [Capacidades](#capabilities)
  - [API Gateways / Servicios Edge](#api-gateways--edge-services)
  - [Configuración &quot; Discovery](#configuration--discovery)
  - [Orquestación de flujo de trabajo](#workflow-orchestration)
  - [Elasticidad](#elasticity)
  - [Programadores de empleo / Automatización de carga de trabajo](#job-schedulers--workload-automation)
  - [Desarrollo local](#local-development)
  - [Registro](#logging)
  - [Mensajería](#messaging)
  - [Monitoring &quot; Debugging](#monitoring--debugging)
  - [Reactividad](#reactivity)
  - [Resiliencia](#resilience)
  - [Seguridad](#security)
  - [Serialización](#serialization)
  - [Almacenamiento](#storage)
  - [Pruebas](#testing)
- [Integración continua y entrega](#continuous-integration--delivery)
- [Web API Modeling &quot; Documentation](#web-api-modeling--documentation)
  - [Async](#async)
  - [GraphQL](#graphql)
  - [JSON](#json)
  - [REST](#rest)
- [Normas / Recomendaciones](#standards--recommendations)
  - [World Wide Web](#world-wide-web)
  - [Autonomía &quot; Descentralización &quot;](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2](#http2)
  - [QUIC](#quic)
  - [RPC](#rpc)
  - [Mensajería](#messaging-1)
  - [Seguridad](#security-1)
  - [Service Discovery](#service-discovery)
  - [Formatos de datos](#data-formats)
  - [Vocabularios](#vocabularies)
  - [Unicode](#unicode)
- [Organization Design / Team Dynamics](#organization-design--team-dynamics)
- [Enterprise &quot; Verticals](#enterprise--verticals)
- [Teoría](#theory)
  - [Artículos &quot; Documentos](#articles--papers)
  - [Sitios &quot; Organizaciones](#sites--organizations)
- [Licencia](#license)
- [Contribución](#contributing)

## Plataformas

- [1Backend](https://github.com/1backend/1backend) - Plataforma de microservicios nativos de AI.
- [Jolie](https://jolie-lang.org) - Lenguaje de programación con microservicio de código abierto.
- [OpenWhisk](https://github.com/apache/openwhisk) - Plataforma de nube de código abierto sin servidor que ejecuta funciones en respuesta a eventos a cualquier escala.
- [Pulumi](https://pulumi.io/) - SDK para infraestructura nativa en la nube como código. Utilice su idioma favorito para previsualizar y administrar las actualizaciones de sus aplicaciones e infraestructura, y despliegue continuamente a cualquier nube (no se requiere YAML).
- [Triton](https://github.com/joyent/triton) - Plataforma de gestión de nube de código abierto que ofrece infraestructura basada en contenedores, orientada a servicios en uno o más centros de datos.

## Marcos / Tiempos de ejecución

- [Akka](http://akka.io/) - Herramienta y tiempo de ejecución para construir aplicaciones altamente concurrentes, distribuidas y resistentes basadas en mensajes en el JVM.
- [Axon (c)](https://axoniq.io/) - Una plataforma de desarrollo e infraestructura de fin a fin de fácil desarrollo y funcionamiento de cualquier aplicación DDD, CQRS y Event Sourcing en JVM.
- [Ballerina](https://ballerina.io) - Lenguaje de programación nativa en la nube.
- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime.
- [Dapr](https://dapr.io) - Tiempo libre para escribir microservicios altamente performantes usando cualquier lenguaje de programación.
- [Deno](https://deno.land/) - JavaScript, TypeScript y WebAssembly runtime con predeterminados seguros y una gran experiencia de desarrollador.
- [Eclipse Microprofile](https://microprofile.io/) - Un foro abierto para optimizar Enterprise Java para una arquitectura de microservicios innovando en múltiples implementaciones y colaborando en áreas comunes de interés con un objetivo de estandarización.
- [Erlang/OTP](https://github.com/erlang/otp) - Lenguaje de programación utilizado para construir sistemas blandos masivamente escalables en tiempo real con requisitos en alta disponibilidad.
- [Finagle](http://twitter.github.io/finagle) - Sistema RPC extensible para el JVM, utilizado para construir servidores de alta concurrencia.
- [Gleam](https://gleam.run/) - Un lenguaje amistoso para construir sistemas tipo seguro, escalables.
- [GraalVM](https://www.graalvm.org/) - Tiempo de ejecución de alto rendimiento que proporciona mejoras significativas en el rendimiento de la aplicación y la eficiencia que es ideal para microservicios.
- [Helidon](https://helidon.io/) - Colección de bibliotecas Java para escribir microservicios que funcionan en un núcleo web rápido alimentado por Netty.
- [Ice](https://github.com/zeroc-ice/ice) - Marco RPC completo con soporte para C++, C#, Java, JavaScript, Python y más.
- [Light-4j](https://github.com/networknt/light-4j) - Un alto rendimiento, baja latencia, pequeña huella de memoria y una plataforma de microservicios más productiva.
- [Micronaut](http://micronaut.io/) - Un marco moderno, basado en JVM, completo para la construcción de aplicaciones modulares y de microservicios fácilmente probables.
- [Moleculer](http://moleculer.services/) - Marco de microservicio rápido y potente para Node.js, Java, Go y Ruby.
- [Open Liberty](https://openliberty.io/) - Un marco abierto ligero para la construcción de microservicios Java dinámicos y eficientes.
- [Pears](https://github.com/holepunchto/pear) - Tiempo de ejecución, desarrollo y despliegue.
- [SmallRye](https://smallrye.io/) - APIs e implementaciones adaptadas para el desarrollo de la nube, incluyendo Eclipse MicroProfile.
- [Spin](https://github.com/fermyon/spin) - Un marco de código abierto para construir y ejecutar microservicios de nube rápidos, seguros y composables con WebAssembly.
- [ScaleCube](https://github.com/scalecube/scalecube) - Herramienta para la construcción de microservicios reactivas para el JVM: baja latencia, alto rendimiento, escalable y resistente.
- [Vert.X](http://vertx.io/) - Herramienta para construir aplicaciones reactivas en el JVM.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Un conjunto de componentes Vert.x para construir aplicaciones reactivas de microservicio.
- [Wangle](https://github.com/facebook/wangle) - Un marco que proporciona un conjunto de abstracciones comunes de cliente/servidor para los servicios de construcción de una manera consistente, modular y composible.

## Herramientas de servicio

### Poliglota

- [GRPC](http://www.grpc.io/) - Un alto rendimiento, código abierto, marco general RPC que pone en primer lugar móvil y HTTP/2. Bibliotecas en C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP y C#.

### C

- [Lwan](http://lwan.ws/) - Servidor web de alto rendimiento y escalable.
- [uSockets](https://github.com/uNetworking/uSockets) - Miniscule evento multiplataforma, networking & cripto para aplicaciones asinc.

### C++
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - La implementación del Cap’n Proto C++ RPC.
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - Sistema de módulos dinámicos OSGi-like C++ y registro de servicios.
- [Enduro/X](https://github.com/endurox-dev/endurox/) - Marco de servicio basado en XATMI para GNU/Linux.
- [Pistache](https://github.com/oktal/pistache) - Un kit de herramientas REST de alto rendimiento escrito en C++.
- [Poco](http://pocoproject.org/) - Bibliotecas C++ para construir aplicaciones y servidores basados en red.
- [Sogou Workflow](https://github.com/sogou/workflow) - Motor de programación de nivel empresarial destinado a satisfacer la mayoría de los requisitos de desarrollo de backend.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - Servidor web sencillo y seguro para las aplicaciones más exigentes.

### CSharp

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - Una colección de impresionantes series de entrenamiento, artículos, videos, libros, cursos, proyectos de muestra y herramientas para microservicios en .NET Core.

### D

- [Vibe.d](http://vibed.org/) - I/O asincrónico que no se interpone en su camino, escrito en D.

### Erlang VM

#### Elixir

- [Phoenix](http://www.phoenixframework.org/) - Marco para la creación de aplicaciones HTML5, API backends y sistemas distribuidos.
- [Plug](https://github.com/elixir-lang/plug) - Una especificación y conveniencias para módulos composables entre aplicaciones web.

#### Erlang

- [Cowboy](https://github.com/ninenines/cowboy) - Servidor HTTP pequeño, rápido y modular escrito en Erlang.
- [Mochiweb](https://github.com/mochi/mochiweb) - Biblioteca Erlang para construir servidores HTTP ligeros.

### Vamos.

- [Chi](https://github.com/go-chi/chi) - Enrutador ligero, idiomático y composable para construir servicios Go HTTP.
- [Echo](https://echo.labstack.com/) - Marco de servidor HTTP rápido y desfavorable para Go. Hasta 10 veces más rápido que el resto.
- [Fiber](https://github.com/gofiber/fiber) - Express inspirado marco web construido sobre Fasthttp, el motor HTTP más rápido para Go. Diseñado para facilitar las cosas para un desarrollo rápido con cero asignación de memoria y rendimiento en mente.
- [Gin](https://github.com/gin-gonic/gin) - Gin es un marco web HTTP escrito en Go (Golang). Cuenta con una API tipo Martini con un rendimiento mucho mejor, hasta 40 veces más rápido.
- [Goa](https://github.com/goadesign/goa) - Microservicios HTTP basados en diseño en Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Un marco de desarrollo de microservicios de opinión que hace hincapié en la escalabilidad y la robustez. Diseñado para simplificar el desarrollo de microservicios.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Un marco para el rápido desarrollo de microservicios en Go que es fácil de integrar con algunos ecosistemas de nubes.
- [Go-micro](https://github.com/micro/go-micro) - Un marco de desarrollo de sistemas distribuidos.
- [Go-zero](https://github.com/tal-tech/go-zero) - Un marco de desarrollo del sistema de distribución web y rpc.
- [Gorilla](http://www.gorillatoolkit.org/) - Herramienta web para el lenguaje de programación Go.
- [Iris](https://github.com/kataras/iris) - Marco de micro web rápido, sencillo y eficiente para Go.
- [Lura](https://github.com/luraproject/lura) - Marco para construir ultra rendimiento API Gateways con middlewares.
- [RPCX](https://github.com/smallnest/rpcx) - Un marco de servicio RPC distribuido basado en NET/RPC como Alibaba Dubbo y Weibo Motan.

### Haskell

- [Scotty](https://github.com/scotty-web/scotty) - Marco web micro inspirado en el Sinatra de Ruby, usando WAI y Warp.
- [Servant](https://github.com/haskell-servant/servant) - DSL de nivel de tipo.
- [Yesod](https://github.com/yesodweb/yesod) - El marco web Haskell RESTful.

### Java VM

#### Clojure

- [Compojure](https://github.com/weavejester/compojure) - Una biblioteca concisa para Ring/Clojure.
- [Duct](https://duct-framework.org/) - Un marco de servidor para Clojure.
- [System](https://github.com/danielsz/system) - Construido sobre la biblioteca de componentes de Stuart Sierra, ofrece un conjunto de componentes listos.
- [Tesla](https://github.com/otto-de/tesla-microservice) Base común para algunos de los microservicios Clojure de Otto.de.

#### Java

- [ActiveJ](https://github.com/activej/activej) - Biblioteca ligera y rápida para aplicaciones complejas de alta carga distribuidas y soluciones similares a Memcached.
- [Airlift](https://github.com/airlift/airlift) - Marco para la construcción de servicios REST en Java.
- [Armeria](https://line.github.io/armeria/) - Biblioteca de código abierto HTTP/2 RPC/REST cliente/servidor construido sobre Java 8, Netty, Thrift y gRPC.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - Biblioteca de mensajería de alto rendimiento.
- [Dropwizard](https://github.com/dropwizard/dropwizard) - Marco Java para el desarrollo de servicios web adaptados a las operaciones, de alto rendimiento.
- [Dubbo](https://github.com/apache/dubbo) - Un marco RPC basado en java de alto rendimiento y con código abierto de Alibaba.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - Conjunto de bibliotecas para definir y crear servidores RESTish/RPC y clientes basados en Feign o Retrofit como cliente y Dropwizard/Jersey con definiciones de servicio JAX-RS como servidor.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - Servicios RESTful en Java. Implementación de referencia JAX-RS.
- [Quarkus](https://quarkus.io/) - A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, elaborado a partir de las mejores bibliotecas y estándares de Java de raza.
- [Ratpack](https://ratpack.io/) - Conjunto de bibliotecas Java que facilitan aplicaciones HTTP rápidas, eficientes y bien probadas. se proporciona apoyo específico para el idioma Groovy.
- [Spring Boot](http://projects.spring.io/spring-boot/) - Hace que sea fácil crear aplicaciones independientes y de calidad de producción basadas en primavera.

#### Kotlin

- [Http4k](https://www.http4k.org/) - Herramienta HTTP ligera pero totalmente caracterizada escrita en puro Kotlin que permite el servicio y consumo de servicios HTTP de una manera funcional y consistente.
- [Ktor](https://ktor.io/) - Marco para construir servidores y clientes asincrónicos en sistemas conectados usando el lenguaje de programación Kotlin.

#### Scala

- [Finatra](http://twitter.github.io/finatra/) - Servicios rápidos, probables, Scala HTTP construidos en Twitter-Server y Finagle.
- [Http4s](http://http4s.org/) - Una interfaz Scala mínima y idiomática para HTTP
- [Play](https://www.playframework.com/) - El marco web de alta velocidad para Java y Scala.

### Node.js

- [Actionhero](http://www.actionherojs.com/) - Multi-transporto Node.js API servidor con capacidades integradas de racimo y tareas retrasadas.
- [Express](http://expressjs.com/) - Marco web rápido, sin pintar, minimalista para Node.js
- [Fastify](https://www.fastify.io/) - Rápido, rápido y bajo marco web, para Node.js.
- [FeathersJS](http://feathersjs.com/) - Una capa de código abierto REST y API en tiempo real para aplicaciones modernas.
- [Hono](https://hono.dev/) - Marco web pequeño, sencillo y ultrarrápido para los Edges. Funciona en cualquier momento de ejecución de JavaScript.
- [Koa](http://koajs.com/) - Marco web de próxima generación para Node.js
- [Loopback](http://loopback.io/) - Node.js framework for creating APIs and easily connecting to backend data sources.
- [NestJS](https://docs.nestjs.com/) - Marco Node.js para la construcción de aplicaciones eficientes y escalables con soporte integrado de microservicios.
- [Seneca](https://github.com/senecajs/seneca) - Un kit de herramientas de microservicio para Node.js
- [Serverless](https://github.com/serverless/serverless) - Construir y mantener aplicaciones web, móviles e IoT que se ejecutan en AWS Lambda y API Gateway (antes conocidas como JAWS).
- [tRPC](https://github.com/trpc/trpc) - API de tipo a extremo.

### Perl

- [Cro](http://cro.services/) - Bibliotecas para crear sistemas reactivos distribuidos utilizando Perl 6.
- [Mojolicious](https://mojolicious.org/) - Marco web de próxima generación para Perl.

### PHP

- [API Platform](https://api-platform.com/) - Marco web API-primer en Symfony con soporte JSON-LD, Schema.org y Hydra.
- [Ecotone](https://docs.ecotone.tech/) - Marco basado en principios arquitectónicos de DDD, CQRS y Event Sourcing que proporciona bloques de construcción para crear aplicaciones escalables y extensibles.
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf es un marco CLI PHP extremadamente performant y flexible basado en Swoole 4.5+, alimentado por el servidor coroutino de última generación y un gran número de componentes de prueba de batalla.
- [Lumen](https://lumen.laravel.com/) - Impresionantemente rápido microframework.
- [Slim](http://www.slimframework.com/) - Micro-framework que le ayuda a escribir rápidamente aplicaciones web simples pero potentes y APIs.
- [Spiral](https://spiral.dev/) - Marco diseñado para aplicaciones de larga duración utilizando [RoadRunner](https://roadrunner.dev/). Ofrece características avanzadas como la integración con [Temporal](https://temporal.io/) motor de flujo de trabajo y [Centrifugo](https://centrifugal.dev/) servidor websocket. Es particularmente eficaz para la arquitectura de microservicios, proporcionando un soporte robusto para APIs REST y servicios de GRPC.
- [Swoft](https://github.com/swoft-cloud/swoft/) - Marco de coroutina de microservicios PHP para la construcción de sistemas web de alto rendimiento, API, middleware y servicios básicos.
- [Symfony](https://symfony.com/) - Microframework basado en los componentes Symfony.

### Python

- [Aiohttp](https://github.com/aio-libs/aiohttp) - HTTP cliente/servidor para asyncio.
- [Bottle](https://bottlepy.org) - Marco rápido, sencillo y ligero WSGI micro web para Python.
- [Connexion](https://github.com/zalando/connexion) - Marco Swagger/OpenAPI para Python en la parte superior de Flask con validación automática de punto final y soporte OAuth2.
- [Falcon](https://falconframework.org/) - Bare-metal Python web API framework for building very fast app backends and microservices.
- [FastAPI](https://fastapi.tiangolo.com/) - Moderno, rápido (alto rendimiento), marco web para la construcción de APIs con Python 3.6+ basado en sugerencias tipo Python estándar.
- [Flask](http://flask.pocoo.org/) - Marco de pitón para microservicios basados en Werkzeug y Jinja 2.
- [Nameko](https://github.com/onefinestay/nameko) - Marco de pitón para la construcción de microservicios.
- [Sanic](https://github.com/sanic-org/sanic) - Sanic es un servidor web tipo Flask Python 3.5+ que está escrito para ir rápido.
- [Tornado](http://www.tornadoweb.org/) - Marco web y biblioteca de redes asincrónica.
- [Twisted](https://twisted.org/) - Motor de programación de red impulsado por eventos.
- [Web.py](https://github.com/webpy/webpy/) - Marco web minimalista para Python.

### Ruby

- [Grape](https://github.com/ruby-grape/grape) - Un marco opinado para crear API tipo REST
- [Hanami](https://github.com/hanami) - Un marco web moderno para Ruby.
- [Praxis](https://github.com/rightscale/praxis) - Marco para diseñar e implementar APIs.
- [Scorched](https://github.com/wardrop/Scorched) - Marco web ligero para Ruby.
- [Sinatra](http://www.sinatrarb.com/) - Sinatra es un DSL para crear rápidamente aplicaciones web en Ruby con mínimo esfuerzo.

### Rust

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Un resumen del estado actual de programación web en Rust.
- [Actix](https://actix.rs/) - Marco web potente, pragmático y extremadamente rápido para Rust.
- [Tarpc](https://github.com/google/tarpc) - Marco RPC para Rust con enfoque en facilidad de uso.
- [Tokio](https://tokio.rs) - Tiempo de ejecución asincrónico para escribir aplicaciones de red.
- [Tower](https://github.com/tower-rs/tower) - Biblioteca de componentes modulares y reutilizables para la construcción de robustos clientes y servidores de redes.
- [Wtx](https://github.com/c410-f3r/wtx) - Marco cliente/servidor HTTP/2.

## Frontend / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - Una lista curada de recursos sobre Micro Frontends.
- [Electrode](https://github.com/electrode-io) - Plataforma de aplicación Universal React/Node.js.
- [Micro Frontends](https://micro-frontends.org) - Ampliar la idea del microservicio al desarrollo de frontend.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - Papel blanco de estandarización de MiniApp.

## Capacidades

### API Gateways / Servicios Edge

- [Ambassador (c)](https://www.getambassador.io) - Kubernetes- Puerta de API nativa para microservicios construidos en Envoy.
- [Apache APISIX](https://apisix.apache.org/) - Puerta de API de alto rendimiento, en tiempo real y puerta de entrada AI construida en NGINX y etcd, con enrutamiento de carga caliente y plugins 100+.
- [APIcast](https://github.com/3scale/APIcast) - APIcast es una pasarela API construida en la parte superior de NGINX. Es parte de la Red Hat 3scale API Management Platform.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Web app hosting y proxy inverso seguro por defecto.
- [Caddy](https://caddyserver.com/) - Extensible servidor web HTTP/2 con HTTPS automático.
- [Camel](http://camel.apache.org/) - Permite definir reglas de enrutamiento y mediación en una variedad de idiomas específicos de dominio, incluyendo una API fluida basada en Java, archivos de configuración de Spring o Blueprint XML y un Scala DSL.
- [Envoy](https://github.com/lyft/envoy) - Borde de código abierto y proxy de servicio, de los desarrolladores en Lyft.
- [HAProxy](https://github.com/haproxy/haproxy) - Fiable, balanceador de carga TCP/HTTP de alto rendimiento.
- [Istio](https://istio.io/) - Una plataforma abierta para conectar, gestionar y asegurar microservicios.
- [Keepalived](http://www.keepalived.org/) - Instalaciones sencillas y robustas para el balance de carga y alta disponibilidad para el sistema Linux y las infraestructuras basadas en Linux.
- [Kong](https://github.com/kong/kong) - Capa de gestión de código abierto para APIs.
- [KrakenD](http://krakend.io/) - Open source ultra performance API Gateway.
- [Kuma](https://kuma.io/) - Plan de control de código abierto agnóstico para malla de servicio y microservicios.
- [Linkerd](https://linkerd.io/) - Malla de servicio resistente para aplicaciones nativas en la nube.
- [Neutrino](https://github.com/eBay/Neutrino) - Equilibrio de carga de software extensible.
- [OpenResty](http://openresty.org/) - Servidor de aplicación web rápido construido sobre Nginx.
- [Open Service Mesh](https://openservicemesh.io/) - Malla de servicio nativo de nube ligera y extensible.
- [Otoroshi](https://www.otoroshi.io/) - Proxy inverso HTTP moderno con gestión de API ligera.
- [Pingora](https://github.com/cloudflare/pingora) - Una biblioteca para construir servicios de red rápidos, fiables y evolvibles.
- [Skipper](https://github.com/zalando/skipper) - HTTP router útil para decoupling routing de la lógica del servicio.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - API Gateway en la parte superior de Spring MVC. Objetivos para proporcionar una manera sencilla, pero eficaz de llegar a las API.
- [Tengine](http://tengine.taobao.org/) - Una distribución de Nginx con algunas características avanzadas.
- [Træfɪk](http://traefik.io/) - Un moderno HTTP inverso proxy y balanceador de carga hechos para desplegar microservicios con facilidad.
- [Traffic Server](https://github.com/apache/trafficserver) - Bloque de construcción de alto rendimiento para servicios en la nube.
- [Tyk](https://tyk.io/) - Abrir fuente, pasarela de API rápida y escalable, portal y plataforma de gestión API.
- [Vulcand](https://github.com/vulcand/vulcand) - Equilibrio de carga programático respaldado por Etcd.
- [Zuul](https://github.com/Netflix/zuul) - Un servicio de bordes que proporciona enrutamiento dinámico, monitoreo, resiliencia, seguridad y más.

### Configuración &quot; Discovery

- [Central Dogma](https://line.github.io/centraldogma/) - Repositorio de configuración de servicio altamente disponible de código abierto basado en Git, ZooKeeper y HTTP/2.
- [Consul](https://www.consul.io/) - El descubrimiento y la configuración del servicio se hicieron fáciles. Distribuido, altamente disponible, y datoscenter-aware.
- [Etcd](https://github.com/coreos/etcd) - Tienda de valor clave altamente disponible para la configuración compartida y el descubrimiento de servicios.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - Servicio basado en REST que se utiliza principalmente en la nube de AWS para localizar servicios con el fin de equilibrar la carga y la falla de servidores de nivel medio.
- [Microconfig](https://microconfig.io) - Forma moderna y sencilla de gestión de configuración de microservicio.
- [Nacos](https://github.com/alibaba/nacos) - Plataforma de descubrimiento, configuración y gestión de servicios dinámicos de fácil uso.
- [SkyDNS](https://github.com/skynetservices/skydns) - Servicio distribuido para el anuncio y el descubrimiento de servicios construidos en la parte superior del etcd. Utiliza consultas DNS para descubrir los servicios disponibles.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - Proporciona soporte servidor y cliente para configuración externalizada en un sistema distribuido.
- [ZooKeeper](https://zookeeper.apache.org/) - Servidor de código abierto que permite una coordinación distribuida altamente fiable.

### Orquestación de flujo de trabajo

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - Coordinar los componentes de aplicaciones distribuidas y microservicios utilizando flujos de trabajo visuales.
- [Cadence](https://cadenceworkflow.io/) - Plataforma de código estatal predeterminada.
- [Conductor](https://github.com/Netflix/conductor) - Un motor de orquestación de microservicios.
- [Inngest](https://github.com/inngest/inngest) - Funciones duraderas para la lógica de fondo fiable, desde trabajos de fondo hasta flujos de trabajo complejos.
- [Kestra](https://github.com/kestra-io/kestra) - Microservicios de código abierto de eventos, orquestación agnóstica y plataforma de programación.
- [Temporal](https://github.com/temporalio/temporal) - Plataforma de orquestación de microservicios de código abierto para ejecutar código crítico de misión en cualquier escala.
- [Zeebe](https://camunda.com/platform/zeebe/) - Definir, orquestar y monitorear procesos de negocio a través de microservicios.

### Elasticidad

- [Hazelcast](http://hazelcast.org/) - Fuente abierta en memoria. Le permite distribuir datos y computación a través de servidores, clusters y geografías, y gestionar conjuntos de datos muy grandes o altas tasas de ingestión de datos. Tecnología madura.
- [Helix](http://helix.apache.org/) - Marco genérico de gestión de agrupaciones utilizado para la gestión automática de los recursos distribuidos, replicados y distribuidos alojados en un grupo de nodos.
- [Ignite](http://ignite.apache.org/) - Plataforma de alto rendimiento, integrada y distribuida en memoria para computar y realizar transacciones en conjuntos de datos a gran escala en tiempo real, órdenes de magnitud más rápido que posible con tecnologías tradicionales basadas en disco o flash.
- [Libp2p](https://libp2p.io/) - Marco y conjunto de protocolos para la construcción de aplicaciones de red entre pares.
- [Mesos](https://mesos.apache.org/) - Extractos CPU, memoria, almacenamiento y otros recursos informáticos lejos de las máquinas (físicas o virtuales), permitiendo que los sistemas de distribución tolerante a fallas y elásticos se construyan y ejecuten con facilidad.
- [Nomad](https://www.nomadproject.io/) - Distribuido, altamente disponible, datacenter-aware scheduler.
- [Redisson](https://github.com/mrniko/redisson) - Estructuras de datos Java distribuidas y escalables en la parte superior del servidor Redis.
- [Serf](https://www.serf.io/) - Solución descentralizada para membresía, detección de fallos y orquestación.
- [Valkey](https://github.com/valkey-io/valkey) - Un nuevo proyecto para reanudar el desarrollo en el proyecto Redis de antiguo código abierto.
- [Zenoh](https://zenoh.io/) - El protocolo Pub/sub/query unifica datos en movimiento, datos en reposo y computaciones. Combina eficientemente pub/sub tradicional con almacenamiento geo distribuido, consultas y computaciones.

### Programadores de empleo / Automatización de carga de trabajo

- [Celery](https://github.com/celery/celery) - Asynchronous task queue/job queue based on distributed message passing. Centrado en operaciones en tiempo real y soporta la programación.
- [Dkron](http://dkron.io/) - Distribuido, sistema de programación de trabajo tolerante a fallas.
- [Faktory](https://github.com/contribsys/faktory) - Servidor de trabajo de fondo persistente de lenguaje-agnóstico.
- [Rundeck (c)](http://rundeck.org/) - Programador de trabajo y automatización de runbook. Permitir el acceso a los scripts y herramientas existentes.
- [Schedulix](https://github.com/schedulix/schedulix) - El sistema de programación de empleos de código abierto establece normas innovadoras para la automatización profesional de los procesos informáticos en entornos avanzados del sistema.

### Desarrollo local

- [mirrord](https://metalbear.com/mirrord/) - Ejecutar código local como si fuera un pod en un remoto Kubernetes cluster.

### Registro

- [Fluentd](http://www.fluentd.org/) - Coleccionista de datos de código abierto para capa de registro unificada.
- [Graylog](https://www.graylog.org/) - Plataforma de gestión integrada de registros de código abierto.
- [Kibana](https://www.elastic.co/products/kibana) - Plataforma de análisis y visualización flexible.
- [LogDNA (c)](https://logdna.com/) - Software centralizado de gestión de registros. Recopilar instantáneamente, centralizar y analizar registros en tiempo real desde cualquier plataforma, en cualquier volumen.
- [Logstash](https://www.elastic.co/logstash) - Herramienta para gestionar eventos y registros.
- [Loki](https://github.com/grafana/loki) - Como Prometeo, pero para registros.

### Mensajería

- [ØMQ](http://zeromq.org/) - Una capa de transporte inteligente.
- [ActiveMQ](http://activemq.apache.org/) - Powerful open source messaging and integration patterns server.
- [Aeron](https://github.com/real-logic/Aeron) - Unicast UDP confiable eficiente, multicast UDP y transporte de mensajes IPC.
- [Beanstalk](https://beanstalkd.github.io/) - Una cola de trabajo simple y rápida.
- [Bull](https://github.com/OptimalBits/bull) - Una cola rápida y fiable de Redis para Node.
- [Crossbar](https://github.com/crossbario/crossbar) - Plataforma de redes de código abierto para aplicaciones distribuidas y microservicio. Implementa el protocolo de mensajería de aplicaciones web abierta (WAMP).
- [Kafka](http://kafka.apache.org/) - Publish-subscribe messaging rethought as a distributed commit log.
- [Malamute](https://github.com/zeromq/malamute) - Interventor de mensajería empresarial ZeroMQ.
- [Mosquitto](http://mosquitto.org/) - Interventor de mensajes de código abierto que implementa el protocolo MQTT.
- [NATS](https://nats.io/) - Sistema de mensajería de nube de alto rendimiento y peso ligero.
- [NSQ](http://nsq.io/) - Una plataforma de mensajería distribuida en tiempo real.
- [Pulsar](https://pulsar.apache.org/) - Sistema de mensajería pub-sub distribuido.
- [RabbitMQ](https://www.rabbitmq.com/) - Agente de mensaje basado en Erlang de código abierto que sólo funciona.
- [Redpanda](https://github.com/redpanda-data/redpanda/) - Streaming data platform for developers: Kafka API compatible, 10x más rápido, no ZooKeeper y no JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - Una baja latencia, confiable, escalable, fácil de usar el middleware orientado al mensaje nacido de un negocio de mensajería masiva de alibaba.

### Monitoring &quot; Debugging

- [Beats](https://www.elastic.co/beats/) - Transportadores ligeros para Elasticsearch &quot; Logstash.
- [Elastalert](https://github.com/yelp/elastalert) - Alerta fácil y flexible para Elasticsearch.
- [Ganglia](http://ganglia.info/) - Un sistema de monitoreo distribuido escalable para sistemas de computación de alto rendimiento, como racimos y cuadrículas.
- [Grafana](http://grafana.org/) - Una fuente abierta, cuenta con ricas métricas dashboard y editor de gráficos para Graphite, InfluxDB &amp; OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - Gráficos escalables en tiempo real.
- [IOpipe (c)](https://www.iopipe.com/) - Seguimiento de la aplicación para Amazon Lambda.
- [Jaeger](https://www.jaegertracing.io/) - Una fuente abierta, localización distribuida de extremo a extremo
- [OpenTelemetry](https://opentelemetry.io/) - Telemetría de alta calidad, ubicua y portátil para permitir una observabilidad efectiva.
- [Prometheus](http://prometheus.io/) - Un sistema de monitoreo de servicios de código abierto y una base de datos de series temporales.
- [Riemann](http://riemann.io/) - Monitores sistemas distribuidos.
- [Sensu](https://github.com/sensu) - Vigilancia de la infraestructura de hoy.
- [SkyWalking](https://skywalking.apache.org/) - Herramienta de monitorización de aplicaciones para sistemas distribuidos, especialmente diseñados para microservicios, nativos en la nube y con base en contenedores (Docker, K8sarquitecturas.
- [Zabbix](http://www.zabbix.com/) - Solución de monitoreo de clase empresarial de código abierto.
- [Zipkin](http://zipkin.io) - Sistema de rastreo distribuido.

### Reactividad

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - Motor de procesamiento de flujo distribuido para transformar, filtrar, agregar y unir secuencias de datos escribiendo SQL.
- [Reactor.io](https://github.com/reactor) - Una biblioteca reactiva de segunda generación para la construcción de aplicaciones no de bloqueo en el JVM basado en la especificación Reactive Streams.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - API Reactive Streams para Apache Kafka.
- [ReactiveX](http://reactivex.io/) - API para programación asincrónica con secuencias observables. Disponible para Java idiomática, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby y otros.
- [RSocket](https://rsocket.io/) - Protocolo de aplicación que proporciona secuencias reactivas semántica.

### Resiliencia

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - Una lista curada de recursos increíbles de ingeniería del caos.
- [Raft Consensus](https://raft.github.io/) - algoritmo de consenso diseñado para ser fácil de entender. Es equivalente a Paxos en tolerancia a fallas y rendimiento.
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Biblioteca de tolerancia predeterminada diseñada para Java8 y programación funcional.
- [Svix](https://svix.com) - Servicio Webhooks que envía webhooks a sus usuarios con horarios completos de reingreso, retroceso exponencial, verificación de firmas y tipos de eventos.

### Seguridad

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - Sistema de gestión de autorizaciones para autorizar, probar e implementar políticas de acceso. Construido una autorización escalable y fina en una arquitectura de microservicio.
- [Dex](https://github.com/coreos/dex) - Servicio de auth/directory con conectores enchufables. OpenID Connect proveedor y delegación de terceros OAuth 2.0.
- [JWT](http://jwt.io/) - JSON Web Tokens es un método RFC 7519 estándar de la industria abierto para representar reclamaciones de forma segura entre dos partes.
- [Keycloak](https://github.com/keycloak/keycloak) - Servicio de auth completo y extensible. OpenID Connect proveedor y delegación de terceros OAuth 2.0.
- [OAuth](http://oauth.net/2/) - Proporciona flujos de autorización específicos para aplicaciones web, aplicaciones de escritorio, teléfonos móviles y dispositivos de sala de estar. Muchas implementaciones.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - Bibliotecas, productos y herramientas que implementan las especificaciones actuales de OpenID y especificaciones relacionadas.
- [Open Ziti](https://openziti.io/) - Cero seguridad de confianza y superposición de redes como software de código abierto puro.
- [ORY](https://www.ory.sh/) - Infraestructura y servicios de identidad de código abierto.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) — capa de defensa del tiempo de ejecución para el envenenamiento de memoria del agente AI (OWASP ASI06). Detecta entradas de memoria manipuladas, inyección rápida en caminos de memoria y fuga secreta. Políticas de YAML, microsegundo latencia, cero dependencias externas.
- [SCIM](https://simplecloud.info/) - Sistema de Gestión de Identidad Trans-dominio.
- [Vault](https://www.vaultproject.io/) - Garantiza, almacena y controla firmemente el acceso a fichas, contraseñas, certificados, claves de API y otros secretos en la informática moderna.

### Serialización

- [Avro](https://avro.apache.org/) - Sistema de serialización de datos Apache que proporciona estructuras de datos ricas en un formato de datos compacto, rápido y binario.
- [Bond](https://github.com/microsoft/bond/) - Marco multiplataforma para trabajar con datos esquematizados, ampliamente utilizado en Microsoft en servicios de alta escala.
- [BooPickle](https://github.com/ochrons/boopickle) - Biblioteca de serialización binaria para una comunicación de red eficiente. Para Scala y Scala.js
- [Cap’n Proto](https://capnproto.org/) - Insanely fast data interchange format and capacity-based RPC system.
- [CBOR](http://cbor.io/) - Implementaciones de la norma CBOR (RFC 7049) en muchos idiomas.
- [Cereal](http://uscilab.github.io/cereal/) - Biblioteca C++11 para serialización.
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON y JSON SMILE encoding/decoding.
- [Etch](http://etch.apache.org/) - Marco interplataforma, lenguaje e independiente del transporte para la construcción y consumo de servicios de red.
- [Fastjson](https://github.com/alibaba/fastjson) - Procesador JSON rápido.
- [Ffjson](https://github.com/pquerna/ffjson) - Más rápido JSON serialización para Go.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - Una rápida serie de java caer en el lugar.
- [Jackson](https://github.com/FasterXML/jackson) - Una biblioteca multipropósito Java para procesar el formato de datos JSON.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - Módulo Jackson que utiliza generación de códigos bytecode para acelerar aún más la unión de datos (+30-40% de rendimiento para serialización, deserialización).
- [Kryo](https://github.com/EsotericSoftware/kryo) - serialización y clonación Java: rápido, eficiente, automático.
- [Lite³](https://github.com/fastserial/lite3) - Formato de serialización compatible con JSON.
- [MessagePack](http://msgpack.org/) - Formato de serialización binaria eficiente.
- [Protostuff](https://github.com/protostuff/protostuff) - Una biblioteca de serialización con soporte incorporado para compatibilidad hacia adelante (evolución del esquema) y validación.
- [SBinary](https://github.com/harrah/sbinary) - Biblioteca para describir formatos binarios para tipos Scala.
- [Thrift](http://thrift.apache.org/) - El marco de software Apache Thrift, para el desarrollo de servicios multilingües escalables.
- [yyjson](https://github.com/ibireme/yyjson) - La biblioteca JSON más rápida de C.

### Almacenamiento

- [Apache Cassandra](http://cassandra.apache.org) - Columna orientada y proporcionando alta disponibilidad sin un solo punto de fracaso.
- [Aerospike (c)](http://www.aerospike.com/) - Base de datos NoSQL de alto rendimiento que proporciona velocidad a escala.
- [ArangoDB](https://www.arangodb.com/) - Una base de datos de código libre distribuida con un modelo de datos flexible para documentos, gráficos y valores clave.
- [Citus](https://github.com/citusdata/citus) - PostgreSQL distribuido como extensión.
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Una base de datos SQL nativa de la nube modelada después de Google Spanner.
- [Couchbase](https://github.com/couchbase) - Una base de datos distribuida diseñada para rendimiento, escalabilidad y administración simplificada.
- [Crate (c)](https://crate.io/) - Base de datos SQL escalable con los productos NoSQL.
- [Druid](http://druid.io/) - Tienda de datos distribuida rápida orientada a la columna.
- [Elasticsearch](https://www.elastic.co/elasticsearch) - Fuente abierta distribuida, escalable y servidor de búsqueda altamente disponible.
- [Geode](http://geode.incubator.apache.org/) - Base de datos de código abierto, distribuido, en memoria para aplicaciones de escalada.
- [Infinispan](http://infinispan.org/) - Datastore clave/valor altamente concurrente utilizado para caché.
- [InfluxDB](https://github.com/influxdata/influxdb) - Tienda de datos escalable para métricas, eventos y análisis en tiempo real.
- [RethinkDB](http://rethinkdb.com/) - Fuente abierta, base de datos escalable que facilita la creación de aplicaciones en tiempo real.
- [TiKV](https://github.com/tikv) - Base de datos de valor clave de transacción distribuida.
- [TimescaleDB](https://github.com/timescale/timescaledb) - Una base de datos de series temporales para análisis de alto rendimiento en tiempo real empaquetados como extensión Postgres.
- [Trino](https://trino.io/) - Motor de consulta SQL distribuido rápido para análisis de datos grandes que te ayuda a explorar tu universo de datos.

### Pruebas

- [Goreplay](https://github.com/buger/goreplay) - Una herramienta para capturar y reproducir el tráfico HTTP en vivo en un ambiente de prueba.
- [Keploy](https://keploy.io) - Herramienta de código abierto para la prueba y la burla de API capturando tráfico real y convirtiéndola en casos de prueba y problemas, permitiendo pruebas fiables de microservicio.
- [Mitmproxy](https://mitmproxy.org/) - Un programa interactivo de consola que permite interceptar, inspeccionar, modificar y reproducir flujos de tráfico.
- [MockServer](https://www.mock-server.com) - Mocking, debugging proxy y el caos de ingeniería para múltiples protocolos (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP y más); dependencia de mock, tráfico de registro/replay, verificar solicitudes y errores de inyección para pruebas de integración y resiliencia.
- [Mountebank](http://www.mbtest.org/) - La prueba multiprotocolo se dobla sobre el alambre.
- [Pact](https://docs.pact.io) - Marco de prueba de contratos para API HTTP y sistemas de mensajería asincrónica no HTTP.
- [RestQA](https://github.com/restqa/restqa) - Una herramienta para gestionar microservicios simulando, pruebas de unidad y rendimiento localmente con mejor experiencia en el desarrollador de clase.
- [Specmatic](https://specmatic.io) - Convierte las especificaciones de API (OpenAPI, AsyncAPI, GraphQL, gRPC etc) en contratos ejecutables para pruebas automatizadas, virtualización de servicios y validación de compatibilidad atrasada sin código de escritura.
- [VCR](https://github.com/vcr/vcr) - Registre las interacciones HTTP de su suite de prueba y vuelva a reproducirlas durante futuras pruebas para pruebas rápidas, deterministas y precisas. Vea la lista de puertos para implementaciones en otros idiomas.
- [Wilma](https://github.com/epam/Wilma) - Combinado HTTP/HTTPS stub y solución proxy transparente.
- [WireMock](http://wiremock.org/) - Biblioteca flexible para atracar y burlar servicios web. A diferencia de las herramientas de simulación de propósito general funciona creando un servidor HTTP real que su código bajo prueba puede conectarse a como sería un servicio web real.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - Virtualización de servicio ligero / herramienta de simulación API para desarrolladores y probadores.

## Integración continua y entrega

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - Una lista curada de herramientas impresionantes para la integración continua, entrega continua y DevOps.

## Web API Modeling &quot; Documentation

### Async
- [AsyncAPI](https://github.com/asyncapi/spec) - Especificación AsyncAPI, el estándar de la industria para definir APIs asincrónicas.

### GraphQL

- [GraphQL](http://graphql.org/) - Lenguaje de consulta diseñado para construir aplicaciones cliente proporcionando una sintaxis y sistema intuitivo y flexible para describir sus requisitos de datos e interacciones.

### JSON

- [JSON:API](https://jsonapi.org/) - Una especificación para cómo un cliente debe solicitar que los recursos sean capturados o modificados, y cómo un servidor debe responder a esas solicitudes.

### REST

- [API Blueprint](https://apiblueprint.org/) - Herramientas para todo el ciclo de vida de API. Úsalo para discutir tu API con otros. Generar documentación automáticamente. O una suite de pruebas. O incluso un código.
- [OpenAPI](https://www.openapis.org/) - La especificación OpenAPI (OAS) proporciona un medio consistente para llevar información a través de cada etapa del ciclo de vida de API.
- [RAML](http://raml.org/) - RESTful API Modeling Language, una forma sencilla y sucinta de describir APIs prácticamente incompletas.
- [ReDoc](https://github.com/Redocly/redoc) - Documentación de API generada por OpenAPI/Swagger.
- [Scalar](https://github.com/scalar/scalar) - Plataforma API de código abierto: hermosas referencias de API y soporte OpenAPI/Swagger de primera clase.
- [Slate](https://github.com/slatedocs/slate) - Hermoso documentación estática para su API.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Documentos Servicios RESTful combinando documentación escrita a mano con fragmentos autogenerados producidos con Spring MVC Test.
- [Swagger](https://swagger.io/) - Una representación sencilla pero poderosa de su API RESTful.

## Normas / Recomendaciones

### World Wide Web

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - Arquitectura de la World Wide Web, Volumen Uno.
- [RFC3986](https://tools.ietf.org/html/rfc3986) - Uniform Resource Identifier (URI): Generic Syntax.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - Plantilla URI.
- [RFC7320](https://tools.ietf.org/html/rfc7320) - Diseño y Propiedad URI.

### Autonomía &quot; Descentralización &quot;

- [DID](https://www.w3.org/TR/did-core/) - Especificación W3C de identificadores descentralizados (DIDs): un nuevo tipo de identificador que permite la identidad digital verificable y descentralizada.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - La metodología de comunicación privada construyó sobre el diseño descentralizado de los DID.
- [DIDComm Protocols](https://didcomm.org/) - Registro de protocolos construidos en DIDComm, para interacciones de alta confianza y auto-soberbia sobre cualquier transporte.
- [IDSA](https://internationaldataspaces.org/) - La Asociación Internacional de Espacios de Datos (IDSA) está en misión de crear el futuro de la economía mundial y digital con los Espacios Internacionales de Datos (IDS), un sistema seguro y soberano de intercambio de datos en el que todos los participantes puedan realizar el valor total de sus datos.

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - Mensaje Sintaxis y Routing.
- [RFC7231](https://tools.ietf.org/html/rfc7231) - Semántica y Contenido.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - Pide condiciones.
- [RFC7233](https://tools.ietf.org/html/rfc7233) - Solicitudes de rango.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - Caching.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - Autenticación.
- [RFC7807](https://tools.ietf.org/html/rfc7807) - Detalles de problemas para las API de HTTP.

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) - Versión del Protocolo de Transferencia de Hipertextos 2.

### QUIC

- [QUIC-WG](https://quicwg.org/) - Grupo de Trabajo de la IETF que se flete para entregar el próximo protocolo de transporte para Internet.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - Un transporte multixed y seguro basado en UDP.

### RPC

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - Un protocolo de llamada de procedimiento remoto apátrida y ligero.
- [Open RPC](https://open-rpc.org/) - La especificación OpenRPC define una descripción estándar de interfaz agnóstica de programación para las API JSON-RPC 2.0.

### Mensajería

- [AMQP](https://www.amqp.org/) - Protocolo de búsqueda de mensajes avanzados.
- [MQTT](https://mqtt.org/) - Transporte de Telemetría MQ.
- [STOMP](https://stomp.github.io/) - Protocolo de mensajería orientado a texto simple.

### Seguridad

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - El Protocolo de Negociación y Autorización de Grant define un mecanismo para delegar la autorización a una pieza de software y transmitir esa delegación al software. Esta delegación puede incluir el acceso a un conjunto de API, así como la información transmitida directamente al software.<sup>DRAFT</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0 es una simple capa de identidad en la parte superior del protocolo OAuth 2.0. Permite a los clientes verificar la identidad del usuario final basada en la autenticación realizada por un servidor de autorización, así como obtener información básica sobre el usuario final de una manera interoperable y similar a REST.
- [PASETO](https://paseto.io/) - Paseto es todo lo que te gusta de JOSE (JWT, JWE, JWS) sin ninguno de los muchos déficits de diseño que plagan los estándares JOSE. <sup>DRAFT</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - La versión 1.2 del Protocolo de Seguridad de la Capa de Transporte.
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLS Extensiones.
- [RFC6347](https://tools.ietf.org/html/rfc6347) - Datagram Transport Layer Security Version 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) - El marco de autorización OAuth 2.0.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - Transparencia de certificados.
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signature (JWS) representa contenido asegurado con firmas digitales o Códigos de autenticación de mensajes (MACs) utilizando estructuras de datos basadas en JSON.
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web Token (JWT) es un medio compacto y seguro de URL para representar reclamaciones que se transferirán entre dos partes.
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM: Definiciones, visión general, conceptos y requisitos.
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM: Core Schema, proporciona un esquema neutro de plataforma y un modelo de extensión para representar a usuarios y grupos.
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM: Protocolo, protocolo de aplicación, protocolo REST para facilitar y gestionar datos de identidad en la web.

### Service Discovery
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - Mecanismo para que los clientes descubran una lista de casos nombrados de un servicio, utilizando las consultas DNS estándar.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - A DNS RR for specifying the location of services (DNS SRV).

### Formatos de datos

- [RFC4627](https://tools.ietf.org/html/rfc4627) - Notación de objetos JavaScript (JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) - Representación de objetos binarios (CBOR).
- [BSON](http://bsonspec.org/) - Binario JSON (BSON).
- [JSON-LD](http://json-ld.org/) - JSON for Linking Data.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - Codificación binaria simple (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - Especificación de MessagePack.

### Vocabularios

- [JSON Schema](http://json-schema.org/) - Vocabulario que le permite anotar y validar documentos JSON.
- [Schema.org](http://schema.org/) - Colaborativa, actividad comunitaria con una misión para crear, mantener y promover esquemas para datos estructurados en Internet, en páginas web, en mensajes de correo electrónico, y más allá.

### Unicode

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - El Consorcio Unicode. El estándar Unicode, versión 8.0.0, (Mountain View, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, un formato de transformación de ISO 10646.

## Organization Design / Team Dynamics

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF</sup> - Melvin E. Conway, revista Datamation 1968. El artículo original que define la Ley de Conway.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - Cada equipo es responsable de una o más funciones empresariales (por ejemplo, capacidades de negocio). Un equipo posee una base de código que consiste en uno o más módulos. Su base de código es tamaño para no superar la capacidad cognitiva del equipo. El equipo implementa su código como uno o más servicios. Un equipo debe tener exactamente un servicio a menos que haya una necesidad comprobada de tener múltiples servicios.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> - DOES19 London. El debate "monolitos vs microservicios" a menudo se centra en aspectos tecnológicos, ignorando la estrategia y la dinámica de equipo. En lugar de la tecnología, las organizaciones inteligentes comienzan con la carga cognitiva del equipo como el principio rector del software moderno. En esta charla, explicamos cómo y por qué, ilustrados por estudios de casos reales.

## Enterprise &quot; Verticals

- [Commercetools](https://commercetools.com/) - Plataforma de comercio sin cabeza.
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinox es una plataforma de comercio y marketing centrada en el ser humano que apoya experiencias ricas y hiperpersonalizadas en cualquier canal y punto de contacto.
- [Flamingo](https://www.flamingo.me/) - Marco para construir aplicaciones de comercio electrónico flexibles y modernas.
- [Medusa](https://medusajs.com/) - Plataforma de comercio sin cabeza.

## Teoría

### Artículos &quot; Documentos

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - Introducción filosófica al diseño de sistemas hiperliminal adaptativos a través de teorías científicas de complejidad.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - Una lista de lectura actualizada y organizada para ilustrar los patrones de sistemas escalables, fiables y performant a gran escala. Los conceptos se explican en los artículos de ingenieros prominentes y referencias creíbles. Los estudios de casos son tomados de sistemas de prueba de batalla que sirven millones a miles de millones de usuarios.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - Modelo que representa las dimensiones para escalar un servicio.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF</sup> - Consistencia como monotónica lógica.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - Técnica para reducir el riesgo de introducir una nueva versión de software en producción mediante la puesta en marcha lenta del cambio a un pequeño subconjunto de usuarios antes de lanzarla a toda la infraestructura y ponerla a disposición de todos.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - Los Estados que es imposible que un sistema informático distribuido proporcione simultáneamente las tres de las siguientes garantías: Consistencia, disponibilidad y tolerancia a la partición.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF</sup> - La abstracción sin servidor expone varios detalles operativos de bajo nivel que hacen difícil para los programadores escribir y razonar sobre su código. Este artículo arroja luz sobre este problema presentando λ, una semántica operativa de la esencia de la computación sin servidor.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - Una forma particular de diseñar aplicaciones de software como suites de servicios de despliegue independiente.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF</sup> - La serie de siete partes de F5 sobre microservicios.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - Asesoramiento crítico sobre algunos problemas relacionados con un enfoque de microservicios.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - Guía para ponderar costos y beneficios del estilo arquitectónico de los mircoservicios.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Definición de sistemas reactiva.
- [Reactive Streams](http://www.reactive-streams.org/) - Iniciativa para proporcionar un estándar para el procesamiento de secuencias asincrónicas con presión de retroceso sin bloqueo.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF</sup> - Computación orientada a los recursos para sistemas de adaptación.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF</sup> - Comprender los ecosistemas de software: un enfoque de modelado estratégico.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - Enfoques para la gestión de la complejidad adicional de las pruebas de múltiples componentes independientemente implementables.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF</sup> - Describe tres abstracciones que se combinan para presentar un poderoso modelo de programación para construir software de servidor seguro, modular y eficiente: futuros, servicios y filtros composibles.

### Sitios &quot; Organizaciones

- [Cloud Native Computing Foundation](https://www.cncf.io/) - La Fundación Cloud Native Computing construye ecosistemas sostenibles y fomenta una comunidad alrededor de una constelación de proyectos de alta calidad que orquestan contenedores como parte de una arquitectura de microservicios.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - Paisaje interactivo de tecnologías nativas de la nube.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - La elección de Martin Fowler de artículos, videos, libros y podcasts que pueden enseñarte más sobre el estilo arquitectónico de los microservicios.
- [Microservice Patterns](http://microservices.io/) - Patrones de arquitectura de microservicio y mejores prácticas.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - Microservicio conocido principalmente antipatrones y trampas.

## Licencia

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Contribución

Por favor, lea el [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) antes de presentar su sugerencia.

Siéntete libre de [open an issue](https://github.com/mfornos/awesome-microservices/issues) o [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) con tus adiciones.

:star2: ¡Gracias!
