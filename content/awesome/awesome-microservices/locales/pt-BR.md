# Seleção de recursos sobre microsserviços [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Uma lista com curadoria de princípios e tecnologias relacionados à arquitetura Microservice.

**Sumário**

- [Plataformas](#platforms)
- [Frameworks / Tempos de execução](#frameworks--runtimes)
- [Kits de Ferramentas de Serviço](#service-toolkits)
  - [Poliglota](#polyglot)
  - [C](#c)
  - [C++](#c-1)
  - [C#](#csharp)
  - [D](#d)
  - [Erlang VM](#erlang-vm)
  - [Vai.](#go)
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
  - [Gateways API / Serviços de borda](#api-gateways--edge-services)
  - [Configuração e Descoberta](#configuration--discovery)
  - [Orquestração de fluxo de trabalho](#workflow-orchestration)
  - [Elasticidade](#elasticity)
  - [Agendadores de Trabalho / Automação de Carga de Trabalho](#job-schedulers--workload-automation)
  - [Desenvolvimento Local](#local-development)
  - [Registo](#logging)
  - [Mensagens](#messaging)
  - [Monitoramento e depuração](#monitoring--debugging)
  - [Reactividade](#reactivity)
  - [Resiliência](#resilience)
  - [Segurança](#security)
  - [Serialização](#serialization)
  - [Armazenamento](#storage)
  - [Teste](#testing)
- [Integração e entrega contínuas](#continuous-integration--delivery)
- [Modelação e Documentação da API Web](#web-api-modeling--documentation)
  - [Async](#async)
  - [GraphQL](#graphql)
  - [JSON](#json)
  - [REST](#rest)
- [Normas / Recomendações](#standards--recommendations)
  - [Rede Mundial](#world-wide-web)
  - [Auto-sobergia e descentralização](#self-sovereignty--decentralisation)
  - [HTTP/1.1](#http11)
  - [HTTP/2](#http2)
  - [Quic](#quic)
  - [RPC](#rpc)
  - [Mensagens](#messaging-1)
  - [Segurança](#security-1)
  - [Descoberta do Serviço](#service-discovery)
  - [Formatos de Dados](#data-formats)
  - [Vocabulários](#vocabularies)
  - [Unicode](#unicode)
- [Design de Organização / Dinâmica de Equipe](#organization-design--team-dynamics)
- [Enterprise & Vertical](#enterprise--verticals)
- [Teoria](#theory)
  - [Artigos e Artigos](#articles--papers)
  - [Sites & Organizações](#sites--organizations)
- [Licença](#license)
- [Contribuir](#contributing)

## Plataformas

- [1Backend](https://github.com/1backend/1backend) - Plataforma de microserviços IA-Native.
- [Jolie](https://jolie-lang.org) - Linguagem de programação orientada para microserviço de código aberto.
- [OpenWhisk](https://github.com/apache/openwhisk) - Plataforma de nuvem de código aberto sem servidor que executa funções em resposta a eventos em qualquer escala.
- [Pulumi](https://pulumi.io/) - SDK para infraestrutura nativa de nuvem como código. Use seu idioma favorito para visualizar e gerenciar atualizações para seus aplicativos e infraestrutura e implemente continuamente em qualquer nuvem (sem necessidade de YAML).
- [Triton](https://github.com/joyent/triton) - Plataforma de gerenciamento de nuvem de código aberto que oferece infraestrutura de próxima geração, baseada em containers e orientada para serviços em um ou mais data centers.

## Frameworks / Tempos de execução

- [Akka](http://akka.io/) - Toolkit e tempo de execução para a construção de aplicações altamente simultâneas, distribuídas e resilientes à mensagem no JVM.
- [Axon (c)](https://axoniq.io/) - Uma plataforma de desenvolvimento e infraestrutura de ponta a ponta para fácil desenvolvimento e execução de quaisquer aplicações DDD, CQRS e Event Sourcing na JVM.
- [Ballerina](https://ballerina.io) - Linguagem de programação nativa em nuvem.
- [Bun](https://bun.sh/) - Rápido tempo de execução JavaScript tudo-em-um.
- [Dapr](https://dapr.io) - Tempo de execução de código aberto para escrever microservices altamente performantes usando qualquer linguagem de programação.
- [Deno](https://deno.land/) - JavaScript, TypeScript e WebAssembly runtime com padrões seguros e uma ótima experiência de desenvolvedor.
- [Eclipse Microprofile](https://microprofile.io/) - Um fórum aberto para otimizar o Enterprise Java para uma arquitetura de microservices, inovando em múltiplas implementações e colaborando em áreas comuns de interesse com um objetivo de padronização.
- [Erlang/OTP](https://github.com/erlang/otp) - Linguagem de programação usada para construir sistemas de grande escala em tempo real macios com requisitos em alta disponibilidade.
- [Finagle](http://twitter.github.io/finagle) - Sistema RPC extensível para a JVM, usado para construir servidores de alta concorrência.
- [Gleam](https://gleam.run/) - Uma linguagem amigável para a construção de sistemas type-safe, escaláveis.
- [GraalVM](https://www.graalvm.org/) - Tempo de execução de alto desempenho que proporciona melhorias significativas no desempenho e eficiência da aplicação que é ideal para microserviços.
- [Helidon](https://helidon.io/) - Coleção de bibliotecas Java para escrever microservices que funcionam em um núcleo web rápido alimentado por Netty.
- [Ice](https://github.com/zeroc-ice/ice) - Framework RPC abrangente com suporte para C++, C#, Java, JavaScript, Python e muito mais.
- [Light-4j](https://github.com/networknt/light-4j) - Um alto rendimento, baixa latência, pequena pegada de memória e plataforma de microserviços mais produtiva.
- [Micronaut](http://micronaut.io/) - Uma estrutura moderna, baseada em JVM, full-stack para a construção de aplicações modulares e facilmente testáveis de microserviço.
- [Moleculer](http://moleculer.services/) - Framework rápido e poderoso de microservices para Node.js, Java, Go e Ruby.
- [Open Liberty](https://openliberty.io/) - Um framework aberto leve para construir microservices Java rápidos e eficientes.
- [Pears](https://github.com/holepunchto/pear) - Tempo de execução, desenvolvimento e implantação.
- [SmallRye](https://smallrye.io/) - APIs e implementações adaptadas para o desenvolvimento em nuvem, incluindo o Eclipse MicroProfile.
- [Spin](https://github.com/fermyon/spin) - Um framework de código aberto para construir e executar microserviços de nuvem rápidos, seguros e composíveis com WebAssembly.
- [ScaleCube](https://github.com/scalecube/scalecube) - Kit de ferramentas para construção de microserviços reativos para a JVM: baixa latência, alta produtividade, escalável e resistente.
- [Vert.X](http://vertx.io/) - Kit de ferramentas para a construção de aplicações reativas na JVM.
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Um conjunto de componentes Vert.x para construir aplicações de microserviço reativas.
- [Wangle](https://github.com/facebook/wangle) - Um framework que fornece um conjunto de abstrações comuns cliente/servidor para construção de serviços de forma consistente, modular e composível.

## Kits de Ferramentas de Serviço

### Poliglota

- [GRPC](http://www.grpc.io/) - Um alto desempenho, código aberto, framework RPC geral que coloca o celular e HTTP/2 em primeiro lugar. Bibliotecas em C, C++, Java, Go, Node.js, Python, Ruby, Objective-C, PHP e C#.

### C

- [Lwan](http://lwan.ws/) - Servidor web de alto desempenho e escalável.
- [uSockets](https://github.com/uNetworking/uSockets) - Miniscule cross-platform eventing, rede e criptografia para aplicações async.

### C++
<!-- #c-1 anchor -->

- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - A implementação do Cap’n Proto C++ RPC.
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - Um sistema de módulo dinâmico OSGi-like C++ e registro de serviço.
- [Enduro/X](https://github.com/endurox-dev/endurox/) - Framework de serviço baseado em XATMI para GNU/Linux.
- [Pistache](https://github.com/oktal/pistache) - Um kit de ferramentas REST de alto desempenho escrito em C++.
- [Poco](http://pocoproject.org/) - Bibliotecas de classe C++ para a construção de aplicativos e servidores baseados em rede.
- [Sogou Workflow](https://github.com/sogou/workflow) - Motor de programação de nível empresarial destinado a satisfazer a maioria dos requisitos de desenvolvimento de infra-estrutura.
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - Servidor web simples, seguro e compatível com padrões para as aplicações mais exigentes.

### CSharp

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore)  :star: - Uma coleção de séries de treinamento impressionantes, artigos, vídeos, livros, cursos, projetos de amostra e ferramentas para microservices em .NET Core.

### D

- [Vibe.d](http://vibed.org/) - I/O assíncrono que não fica no seu caminho, escrito em D.

### Erlang VM

#### Elixir

- [Phoenix](http://www.phoenixframework.org/) - Framework para a construção de aplicativos HTML5, backends de API e sistemas distribuídos.
- [Plug](https://github.com/elixir-lang/plug) - Uma especificação e conveniência para módulos composíveis entre aplicações web.

#### Erlang

- [Cowboy](https://github.com/ninenines/cowboy) - Servidor HTTP pequeno, rápido e modular escrito em Erlang.
- [Mochiweb](https://github.com/mochi/mochiweb) - Biblioteca Erlang para a construção de servidores HTTP leves.

### Vai.

- [Chi](https://github.com/go-chi/chi) - Roteador leve, idiomático e composível para construção de serviços da Go HTTP.
- [Echo](https://echo.labstack.com/) - Framework de servidor HTTP rápido e desfalque para Ir. Até 10x mais rápido do que o resto.
- [Fiber](https://github.com/gofiber/fiber) - Framework web inspirado expresso construído em cima do Fasthttp, o motor HTTP mais rápido para Go. Projetado para facilitar as coisas para o desenvolvimento rápido com zero alocação de memória e desempenho em mente.
- [Gin](https://github.com/gin-gonic/gin) - Gin é um framework web HTTP escrito em Go (Golang). Ele possui uma API tipo Martini com desempenho muito melhor, até 40 vezes mais rápido.
- [Goa](https://github.com/goadesign/goa) - Microservices HTTP baseados em design em Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Um quadro de desenvolvimento de microservices opinado enfatizando escalabilidade e robustez. Projetado para simplificar o desenvolvimento de microserviços.
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Um quadro para o rápido desenvolvimento de microserviços em Go que é fácil de integrar com alguns ecossistemas de nuvem.
- [Go-micro](https://github.com/micro/go-micro) - Um quadro de desenvolvimento de sistemas distribuído.
- [Go-zero](https://github.com/tal-tech/go-zero) - Um framework de desenvolvimento de sistemas distribuído web e rpc.
- [Gorilla](http://www.gorillatoolkit.org/) - Kit de ferramentas para a linguagem de programação Go.
- [Iris](https://github.com/kataras/iris) - Framework micro web rápido, simples e eficiente para Go.
- [Lura](https://github.com/luraproject/lura) - Framework para construir gateways API de ultra desempenho com middlewares.
- [RPCX](https://github.com/smallnest/rpcx) - Um framework de serviço RCP distribuído baseado em NET/RPC como Alibaba Dubbo e Weibo Motan.

### Haskell

- [Scotty](https://github.com/scotty-web/scotty) - Micro web framework inspirado no Sinatra de Ruby, usando WAI e Warp.
- [Servant](https://github.com/haskell-servant/servant) - DSL de nível de tipo.
- [Yesod](https://github.com/yesodweb/yesod) - A estrutura web Haskell RESTful.

### Java VM

#### Clojure

- [Compojure](https://github.com/weavejester/compojure) - Uma biblioteca concisa para Ring/Clojure.
- [Duct](https://duct-framework.org/) - Uma estrutura de servidor para o Clojure.
- [System](https://github.com/danielsz/system) - Construído em cima da biblioteca de componentes Stuart Sierra, oferece um conjunto de componentes prontos.
- [Tesla](https://github.com/otto-de/tesla-microservice) - Base comum para alguns dos microserviços de Clojure de Otto.de.

#### Java

- [ActiveJ](https://github.com/activej/activej) - Biblioteca leve e rápida para aplicações complexas distribuídas de alta carga e soluções tipo Memcached.
- [Airlift](https://github.com/airlift/airlift) - Framework para construção de serviços REST em Java.
- [Armeria](https://line.github.io/armeria/) - Biblioteca cliente/servidor HTTP/2 assíncrona de código aberto com base no Java 8, Netty, Thrift e gRPC.
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - Biblioteca de mensagens inter-thread de alto desempenho.
- [Dropwizard](https://github.com/dropwizard/dropwizard) - Framework Java para o desenvolvimento de serviços web RESTful, ops-friendly e de alto desempenho.
- [Dubbo](https://github.com/apache/dubbo) - Um framework RPC baseado em java de alto desempenho de código aberto pela Alibaba.
- [Conjure](https://github.com/palantir/conjure-java-runtime) - Conjunto opinado de bibliotecas para definir e criar servidores e clientes RESTish/RPC baseados em Feign ou Retrofit como cliente e Dropwizard/Jersey com definições de serviço JAX-RS como servidor.
- [Jersey](https://github.com/eclipse-ee4j/jersey) - Serviços RESTful em Java. Implementação de referência JAX-RS.
- [Quarkus](https://quarkus.io/) - A Kubernetes Pilha Java nativa adaptada para OpenJDK HotSpot e GraalVM, criada a partir das melhores bibliotecas e padrões Java da raça.
- [Ratpack](https://ratpack.io/) - Conjunto de bibliotecas Java que facilitam aplicações HTTP rápidas, eficientes, evoluíveis e bem testadas. apoio específico para a língua Groovy é fornecido.
- [Spring Boot](http://projects.spring.io/spring-boot/) - Facilita a criação de aplicações independentes baseadas em Primavera.

#### Kotlin

- [Http4k](https://www.http4k.org/) - Kit de ferramentas HTTP leve, mas completo, escrito em Kotlin puro que permite servir e consumir serviços HTTP de forma funcional e consistente.
- [Ktor](https://ktor.io/) - Framework para a construção de servidores assíncronos e clientes em sistemas conectados usando a linguagem de programação Kotlin.

#### Scala

- [Finatra](http://twitter.github.io/finatra/) - Rápido, testável, serviços Scala HTTP construídos no Twitter-Server e Finagle.
- [Http4s](http://http4s.org/) - Uma interface Scala mínima e idiomática para HTTP
- [Play](https://www.playframework.com/) - O framework web de alta velocidade para Java e Scala.

### Node.js

- [Actionhero](http://www.actionherojs.com/) - Multi-transport Node.js servidor API com recursos de cluster integrados e tarefas atrasadas.
- [Express](http://expressjs.com/) - Framework web rápido, não-opinionado e minimalista para Node.js
- [Fastify](https://www.fastify.io/) - Fastify, Framework web rápido e baixo, para Node.js.
- [FeathersJS](http://feathersjs.com/) - Uma camada REST de código aberto e API em tempo real para aplicações modernas.
- [Hono](https://hono.dev/) - Framework web pequeno, simples e ultra-rápido para os Edges. Funciona em qualquer tempo de execução JavaScript.
- [Koa](http://koajs.com/) - Framework web de próxima geração para Node.js
- [Loopback](http://loopback.io/) - Framework Node.js para criação de APIs e fácil conexão com fontes de dados de infraestrutura.
- [NestJS](https://docs.nestjs.com/) - Um framework Node.js para a construção de aplicações eficientes e escaláveis do lado do servidor com um suporte integrado de microserviços.
- [Seneca](https://github.com/senecajs/seneca) - Um kit de ferramentas de microserviços para Node.js
- [Serverless](https://github.com/serverless/serverless) - Construir e manter aplicações web, móveis e IoT em execução no AWS Lambda e API Gateway (anteriormente conhecido como JAWS).
- [tRPC](https://github.com/trpc/trpc) - APIs de segurança de ponta a ponta.

### Perl

- [Cro](http://cro.services/) - Bibliotecas para a criação de sistemas distribuídos reativos usando Perl 6.
- [Mojolicious](https://mojolicious.org/) - Framework web da próxima geração para Perl.

### PHP

- [API Platform](https://api-platform.com/) - API-primeiro framework web no topo do Symfony com suporte JSON-LD, Schema.org e Hydra.
- [Ecotone](https://docs.ecotone.tech/) - Framework baseado em princípios arquitetônicos de DDD, CQRS e Event Sourcing que fornece blocos de construção para criar aplicações escaláveis e extensíveis.
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperf é um framework PHP CLI extremamente eficiente e flexível baseado no Swoole 4.5+, alimentado pelo servidor de coroutine de última geração e um grande número de componentes testados em batalha.
- [Lumen](https://lumen.laravel.com/) - Um micro-quadro incrivelmente rápido.
- [Slim](http://www.slimframework.com/) - Micro-framework que ajuda você a escrever rapidamente aplicativos web simples e poderosos e APIs.
- [Spiral](https://spiral.dev/) - Framework projetado para aplicações de longa duração usando [RoadRunner](https://roadrunner.dev/). Oferece recursos avançados como integração com o [Temporal](https://temporal.io/) motor de fluxo de trabalho e [Centrifugo](https://centrifugal.dev/) servidor websocket. É particularmente eficaz para arquitetura de microservices, fornecendo suporte robusto para APIs REST e serviços gRPC.
- [Swoft](https://github.com/swoft-cloud/swoft/) - PHP microservices coroutine framework para construção de sistemas web de alto desempenho, APIs, middleware e serviços básicos.
- [Symfony](https://symfony.com/) - Micro-framework baseado nos componentes Symfony.

### Python

- [Aiohttp](https://github.com/aio-libs/aiohttp) - Cliente/servidor HTTP para assincio.
- [Bottle](https://bottlepy.org) - Micro-framework WSGI rápido, simples e leve para Python.
- [Connexion](https://github.com/zalando/connexion) - Framework Swagger/OpenAPI para Python no topo do Flask com validação automática de endpoint e suporte OAuth2.
- [Falcon](https://falconframework.org/) - Framework de API web Python sem metal para construir backends de aplicativos muito rápidos e microservices.
- [FastAPI](https://fastapi.tiangolo.com/) - Moderno, rápido (alto desempenho), framework web para a construção de APIs com Python 3.6+ baseado em dicas padrão tipo Python.
- [Flask](http://flask.pocoo.org/) - Framework Python para microservices baseado em Werkzeug e Jinja 2.
- [Nameko](https://github.com/onefinestay/nameko) - Estrutura Python para construção de microserviços.
- [Sanic](https://github.com/sanic-org/sanic) - Sanic é um servidor Python 3.5+ semelhante ao Flask que está escrito para ir rápido.
- [Tornado](http://www.tornadoweb.org/) - Web framework e biblioteca de rede assíncrona.
- [Twisted](https://twisted.org/) - Motor de programação de rede orientado a eventos.
- [Web.py](https://github.com/webpy/webpy/) - Framework web minimalista para Python.

### Ruby

- [Grape](https://github.com/ruby-grape/grape) - Um framework de opinião para criar APIs tipo REST
- [Hanami](https://github.com/hanami) - Um moderno framework para Ruby.
- [Praxis](https://github.com/rightscale/praxis) - Framework para projetar e implementar APIs.
- [Scorched](https://github.com/wardrop/Scorched) - Framework leve para Ruby.
- [Sinatra](http://www.sinatrarb.com/) - Sinatra é um DSL para criar rapidamente aplicações web em Ruby com o mínimo de esforço.

### Rust

- [Are we web yet?](https://www.arewewebyet.org/)  :star: - Um resumo do estado actual da programação web em Rust.
- [Actix](https://actix.rs/) - Estrutura web poderosa, pragmática e extremamente rápida para a Rust.
- [Tarpc](https://github.com/google/tarpc) - Framework RPC para Rust com foco na facilidade de uso.
- [Tokio](https://tokio.rs) - Tempo de execução assíncrono para escrever aplicações de rede.
- [Tower](https://github.com/tower-rs/tower) - Biblioteca de componentes modulares e reutilizáveis para a construção de clientes e servidores de rede robustos.
- [Wtx](https://github.com/c410-f3r/wtx) - Framework cliente/servidor HTTP/2.

## Frontend / UI

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends)  :star: - Uma lista de recursos sobre a Micro Frontends.
- [Electrode](https://github.com/electrode-io) - Plataforma de aplicação Universal React/Node.js.
- [Micro Frontends](https://micro-frontends.org) - Estendendo a ideia de microservice para o desenvolvimento frontend.
- [MiniApp White Paper](https://w3c.github.io/miniapp-white-paper/) - MiniApp padronização papel branco.

## Capacidades

### Gateways API / Serviços de borda

- [Ambassador (c)](https://www.getambassador.io) - Não. Kubernetes- gateway API nativo para microservices construídos no Enviado.
- [Apache APISIX](https://apisix.apache.org/) - Gateway de API de alto desempenho, em tempo real e gateway de IA construído em NGINX e etcd, com roteamento a quente e mais de 100 plugins.
- [APIcast](https://github.com/3scale/APIcast) - APIcast é um gateway de API construído em cima do NGINX. Faz parte da Plataforma de Gerenciamento de APIs Red Hat 3scale.
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Hospedagem da aplicação Web e proxy reverso seguro por padrão.
- [Caddy](https://caddyserver.com/) - Extensível servidor HTTP/2 com HTTPS automático.
- [Camel](http://camel.apache.org/) - Capacita você a definir regras de roteamento e mediação em uma variedade de idiomas específicos de domínio, incluindo uma API fluente baseada em Java, arquivos de configuração Spring ou Blueprint XML e um Scala DSL.
- [Envoy](https://github.com/lyft/envoy) - Open source edge e proxy de serviço, dos desenvolvedores em Lyft.
- [HAProxy](https://github.com/haproxy/haproxy) - Balanceador de carga confiável e de alto desempenho TCP/HTTP.
- [Istio](https://istio.io/) - Uma plataforma aberta para conectar, gerenciar e proteger microserviços.
- [Keepalived](http://www.keepalived.org/) - Instalações simples e robustas para balanceamento de carga e alta disponibilidade para o sistema Linux e infraestruturas baseadas em Linux.
- [Kong](https://github.com/kong/kong) - Camada de gerenciamento de código aberto para APIs.
- [KrakenD](http://krakend.io/) - Open source ultra performance API Gateway.
- [Kuma](https://kuma.io/) - Plataforma agnóstico plano de controle de código aberto para rede de serviço e microserviços.
- [Linkerd](https://linkerd.io/) - Mesh de serviço resistente para aplicativos nativos de nuvem.
- [Neutrino](https://github.com/eBay/Neutrino) - Extensível balanceador de carga de software.
- [OpenResty](http://openresty.org/) - Servidor de aplicação web rápido construído em cima de Nginx.
- [Open Service Mesh](https://openservicemesh.io/) - Mesh de serviço nativo de nuvem leve e extensível.
- [Otoroshi](https://www.otoroshi.io/) - Moderno HTTP proxy reverso com gerenciamento de API leve.
- [Pingora](https://github.com/cloudflare/pingora) - Uma biblioteca para a construção de serviços de rede rápidos, confiáveis e evoluíveis.
- [Skipper](https://github.com/zalando/skipper) - Roteador HTTP útil para dissociar roteamento da lógica de serviço.
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - API Gateway em cima da Primavera MVC. O objetivo é fornecer uma forma simples, mas eficaz de encaminhar para APIs.
- [Tengine](http://tengine.taobao.org/) - Uma distribuição de Nginx com algumas características avançadas.
- [Træfɪk](http://traefik.io/) - Um moderno proxy HTTP reverso e balanceador de carga feito para implantar microservices com facilidade.
- [Traffic Server](https://github.com/apache/trafficserver) - Bloco de construção de alto desempenho para serviços em nuvem.
- [Tyk](https://tyk.io/) - Open source, gateway de API rápida e escalável, portal e plataforma de gerenciamento de API.
- [Vulcand](https://github.com/vulcand/vulcand) - Balanceador de carga programático apoiado pela Etcd.
- [Zuul](https://github.com/Netflix/zuul) - Um serviço de borda que fornece roteamento dinâmico, monitoramento, resiliência, segurança e muito mais.

### Configuração e Descoberta

- [Central Dogma](https://line.github.io/centraldogma/) - Repositório de configuração de serviço controlado por versão de código aberto com base em Git, ZooKeeper e HTTP/2.
- [Consul](https://www.consul.io/) - Serviço descoberta e configuração facilitada. Distribuído, altamente disponível e informador de dados.
- [Etcd](https://github.com/coreos/etcd) - Loja de valor-chave altamente disponível para configuração compartilhada e descoberta de serviços.
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - Serviço baseado em REST que é usado principalmente na nuvem AWS para localizar serviços com o propósito de balanceamento de carga e failover de servidores de nível médio.
- [Microconfig](https://microconfig.io) - Modo moderno e simples de gerenciamento de configuração de microservices.
- [Nacos](https://github.com/alibaba/nacos) - Fácil de usar a plataforma de descoberta dinâmica de serviços, configuração e gerenciamento de serviços.
- [SkyDNS](https://github.com/skynetservices/skydns) - Serviço distribuído para anúncio e descoberta de serviços construídos em cima de etc. Ele utiliza consultas DNS para descobrir serviços disponíveis.
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - Fornece suporte ao servidor e ao cliente para configuração externalizada em um sistema distribuído.
- [ZooKeeper](https://zookeeper.apache.org/) - Servidor de código aberto que permite uma coordenação distribuída altamente confiável.

### Orquestração de fluxo de trabalho

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - Coordene os componentes de aplicações e microserviços distribuídos usando fluxos de trabalho visuais.
- [Cadence](https://cadenceworkflow.io/) - Plataforma de código falsa.
- [Conductor](https://github.com/Netflix/conductor) - Um motor de orquestração de microserviços.
- [Inngest](https://github.com/inngest/inngest) - Funções duráveis para lógica de fundo confiável, desde trabalhos de fundo a fluxos de trabalho complexos.
- [Kestra](https://github.com/kestra-io/kestra) - Open source microservices event-driven, linguagem e plataforma de programação.
- [Temporal](https://github.com/temporalio/temporal) - Plataforma de orquestração de microserviços de código aberto para executar código crítico de missão em qualquer escala.
- [Zeebe](https://camunda.com/platform/zeebe/) - Definir, orquestrar e monitorar processos de negócios em microserviços.

### Elasticidade

- [Hazelcast](http://hazelcast.org/) - Grade de dados em memória aberta. Permite distribuir dados e computação em servidores, clusters e geografias e gerenciar conjuntos de dados muito grandes ou altas taxas de ingestão de dados. Tecnologia madura.
- [Helix](http://helix.apache.org/) - Framework genérico de gerenciamento de cluster usado para o gerenciamento automático de recursos particionados, replicados e distribuídos hospedados em um cluster de nós.
- [Ignite](http://ignite.apache.org/) - Plataforma de alta performance, integrada e distribuída em memória para computação e transação em conjuntos de dados de grande escala em tempo real, ordens de magnitude mais rápidas do que possível com tecnologias tradicionais baseadas em disco ou flash.
- [Libp2p](https://libp2p.io/) - Uma estrutura e conjunto de protocolos para a construção de aplicações de rede peer-to-peer.
- [Mesos](https://mesos.apache.org/) - Abstrai CPU, memória, armazenamento e outros recursos de computação longe de máquinas (físicas ou virtuais), permitindo que os sistemas elásticos e tolerantes a falhas sejam facilmente construídos e executados de forma eficaz.
- [Nomad](https://www.nomadproject.io/) - Distribuído, altamente disponível, agendador consciente do centro de dados.
- [Redisson](https://github.com/mrniko/redisson) - Estruturas de dados Java distribuídas e escaláveis em cima do servidor Redis.
- [Serf](https://www.serf.io/) - Solução descentralizado para membros de cluster, detecção de falhas e orquestração.
- [Valkey](https://github.com/valkey-io/valkey) - Um novo projeto para retomar o desenvolvimento do antigo projeto Redes de código aberto.
- [Zenoh](https://zenoh.io/) - Protocolo Pub/sub/query unificando dados em movimento, dados em repouso e cálculos. Mistura eficientemente pub/sub tradicional com armazenamento geo distribuído, consultas e computação.

### Agendadores de Trabalho / Automação de Carga de Trabalho

- [Celery](https://github.com/celery/celery) - Fila de tarefas/ficha de trabalho assíncrona com base no envio de mensagens distribuídas. Focado na operação em tempo real e suporta agendamento.
- [Dkron](http://dkron.io/) - Distribuição, sistema de trabalho tolerante a falhas.
- [Faktory](https://github.com/contribsys/faktory) - Servidor de tarefas persistentes de linguagem.
- [Rundeck (c)](http://rundeck.org/) - Programador de empregos e automatização de livros. Activar o acesso de auto-serviço a scripts e ferramentas existentes.
- [Schedulix](https://github.com/schedulix/schedulix) - O sistema de agendamento de trabalho empresarial de código aberto estabelece padrões inovadores para a automação profissional de processos de TI em ambientes avançados do sistema.

### Desenvolvimento Local

- [mirrord](https://metalbear.com/mirrord/) - Executar código local como se fosse uma cápsula em um controle remoto Kubernetes cluster.

### Registo

- [Fluentd](http://www.fluentd.org/) - Coletor de dados de código aberto para camada de registro unificado.
- [Graylog](https://www.graylog.org/) - Plataforma de gerenciamento de logs de código aberto totalmente integrada.
- [Kibana](https://www.elastic.co/products/kibana) - Plataforma flexível de análise e visualização.
- [LogDNA (c)](https://logdna.com/) - Software centralizado de gestão de registos. Colete instantaneamente, centralize e analise logs em tempo real de qualquer plataforma, em qualquer volume.
- [Logstash](https://www.elastic.co/logstash) - Ferramenta para gerenciar eventos e logs.
- [Loki](https://github.com/grafana/loki) - Como Prometeu, mas para troncos.

### Mensagens

- [ØMQ](http://zeromq.org/) - Camada de transporte inteligente.
- [ActiveMQ](http://activemq.apache.org/) - Servidor poderoso de mensagens de código aberto e padrões de integração.
- [Aeron](https://github.com/real-logic/Aeron) - Eficiente UDP confiável unicast, UDP multicast, e transporte de mensagens IPC.
- [Beanstalk](https://beanstalkd.github.io/) - Fila de trabalho simples e rápida.
- [Bull](https://github.com/OptimalBits/bull) - Fila rápida e confiável baseada em Redis para Node.
- [Crossbar](https://github.com/crossbario/crossbar) - Plataforma de rede de código aberto para aplicações distribuídas e microservice. Implementa o Protocolo de Mensagens de Aplicação Web (WAMP).
- [Kafka](http://kafka.apache.org/) - Publicar-subscrever mensagens repensadas como um registro de commit distribuído.
- [Malamute](https://github.com/zeromq/malamute) - O corretor de mensagens da ZeroMQ.
- [Mosquitto](http://mosquitto.org/) - Corretor de mensagens de código aberto que implementa o protocolo MQTT.
- [NATS](https://nats.io/) - Código aberto, sistema de mensagens de nuvem leve de alto desempenho.
- [NSQ](http://nsq.io/) - Uma plataforma de mensagens distribuída em tempo real.
- [Pulsar](https://pulsar.apache.org/) - Sistema de mensagens pub-sub distribuído.
- [RabbitMQ](https://www.rabbitmq.com/) - Um corretor de mensagens baseado em Erlang que funciona.
- [Redpanda](https://github.com/redpanda-data/redpanda/) - Plataforma de transmissão de dados para desenvolvedores: compatível com API Kafka, 10x mais rápido, sem ZooKeeper e sem JVM.
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - Uma baixa latência, confiável, escalável, fácil de usar middleware orientado mensagem nascido do negócio de mensagens maciças alibaba.

### Monitoramento e depuração

- [Beats](https://www.elastic.co/beats/) - Transportadores leves para a Elasticsearch & Logstash.
- [Elastalert](https://github.com/yelp/elastalert) - Alerta fácil e flexível para Elasticsearch.
- [Ganglia](http://ganglia.info/) - Um sistema de monitoramento distribuído escalável para sistemas de computação de alto desempenho, como clusters e grades.
- [Grafana](http://grafana.org/) - Um painel de métricas de código aberto, rico em recursos e editor de gráficos para Graphite, InfluxDB e OpenTSDB.
- [Graphite](http://graphite.wikidot.com/) - Gráfico em tempo real escalável.
- [IOpipe (c)](https://www.iopipe.com/) - Monitoramento de desempenho de aplicação para Amazon Lambda.
- [Jaeger](https://www.jaegertracing.io/) - Um rastreamento de código aberto, de ponta a ponta distribuído
- [OpenTelemetry](https://opentelemetry.io/) - Telemetria de alta qualidade, ubíqua e portátil para permitir uma observação eficaz.
- [Prometheus](http://prometheus.io/) - Um sistema de monitoramento de serviços de código aberto e banco de dados de séries temporais.
- [Riemann](http://riemann.io/) - Monitores de sistemas distribuídos.
- [Sensu](https://github.com/sensu) - Monitoramento da infra-estrutura de hoje.
- [SkyWalking](https://skywalking.apache.org/) - Ferramenta de monitor de desempenho de aplicação para sistemas distribuídos, especialmente concebidos para microservices, nuvem nativa e container-based (Docker, K8s, Mesos) arquiteturas.
- [Zabbix](http://www.zabbix.com/) - Solução de monitoramento de classe empresarial de código aberto.
- [Zipkin](http://zipkin.io) - Sistema de localização distribuído.

### Reactividade

- [Arroyo](https://github.com/ArroyoSystems/arroyo) - Motor de processamento de fluxo distribuído para transformar, filtrar, agregar e juntar fluxos de dados escrevendo SQL.
- [Reactor.io](https://github.com/reactor) - Uma biblioteca Reactive de segunda geração para a construção de aplicações sem bloqueio na JVM com base na Especificação de Fluxos Reactivos.
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - API de Fluxos Reativos para Apache Kafka.
- [ReactiveX](http://reactivex.io/) - API para programação assíncrona com fluxos observáveis. Disponível para Java idiomático, Scala, C#, C++, Clojure, JavaScript, Python, Groovy, JRuby, entre outros.
- [RSocket](https://rsocket.io/) - Protocolo de aplicação fornecendo semântica de fluxo reativo.

### Resiliência

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  :star: - Uma lista de recursos de engenharia do caos.
- [Raft Consensus](https://raft.github.io/) - Algoritmo de consenso projetado para ser fácil de entender. É equivalente ao Paxos em tolerância a falhas e desempenho.
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Biblioteca de tolerância a falhas projetada para Java8 e programação funcional.
- [Svix](https://svix.com) - Webhooks serviço que envia webhooks para seus usuários com horários de repetição completa, backoff exponencial, verificação de assinatura e tipos de eventos.

### Segurança

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - Sistema de gerenciamento de autorização para criação, teste e implantação de políticas de acesso. Autorização escalável e fina em uma arquitetura de microservice.
- [Dex](https://github.com/coreos/dex) - Serviço de autenticação/diretório opinado com conectores plugáveis. Provedor OpenID Connect e delegação OAuth 2.0 de terceiros.
- [JWT](http://jwt.io/) - A JSON Web Tokens é um método aberto, padrão da indústria RFC 7519 para representar reivindicações de forma segura entre duas partes.
- [Keycloak](https://github.com/keycloak/keycloak) - Serviço de autenticação completo e extensível. Provedor OpenID Connect e delegação OAuth 2.0 de terceiros.
- [OAuth](http://oauth.net/2/) - Fornece fluxos de autorização específicos para aplicações web, aplicativos desktop, telefones celulares e dispositivos de sala de estar. Muitas implementações.
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - Bibliotecas, produtos e ferramentas implementando especificações atuais do OpenID e especificações relacionadas.
- [Open Ziti](https://openziti.io/) - Zero confiança segurança e sobreposição de rede como puro software de código aberto.
- [ORY](https://www.ory.sh/) - Infraestrutura e serviços de identidade de código aberto.
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) — Camada de defesa em tempo de execução para envenenamento por memória do agente IA (OWASP ASI06). Detecta entradas de memória adulteradas, injeção rápida em caminhos de memória e vazamento secreto. Políticas YAML, latência de microsegundos, zero dependências externas.
- [SCIM](https://simplecloud.info/) - Sistema de Gestão de Identidades Cross-domain.
- [Vault](https://www.vaultproject.io/) - Protege, armazena e controla firmemente o acesso a tokens, senhas, certificados, chaves API e outros segredos na computação moderna.

### Serialização

- [Avro](https://avro.apache.org/) - Sistema de serialização de dados Apache fornecendo estruturas de dados ricas em um formato de dados compacto, rápido e binário.
- [Bond](https://github.com/microsoft/bond/) - Framework multiplataforma para trabalhar com dados esquematizados, amplamente utilizado na Microsoft em serviços de alta escala.
- [BooPickle](https://github.com/ochrons/boopickle) - Biblioteca de serialização binária para comunicação de rede eficiente. Para Scala e Scala.js
- [Cap’n Proto](https://capnproto.org/) - Formato de intercâmbio de dados insanamente rápido e sistema RPC baseado em capacidade.
- [CBOR](http://cbor.io/) - Implementação da norma CBOR (RFC 7049) em muitas línguas.
- [Cereal](http://uscilab.github.io/cereal/) - Biblioteca C++11 para serialização.
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure JSON e JSON SMILE codificação/decodificação.
- [Etch](http://etch.apache.org/) - Estrutura interplataforma, linguagem e transporte independente para a construção e consumo de serviços de rede.
- [Fastjson](https://github.com/alibaba/fastjson) - Processador JSON rápido.
- [Ffjson](https://github.com/pquerna/ffjson) - Serialização JSON mais rápida para Go.
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - Queda rápida de serialização.
- [Jackson](https://github.com/FasterXML/jackson) - Uma biblioteca Java multiuso para processar o formato de dados JSON.
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - Módulo Jackson que usa geração de bytecode para acelerar ainda mais a ligação de dados (+30-40% de rendimento para serialização, desserialização).
- [Kryo](https://github.com/EsotericSoftware/kryo) - Serialização e clonagem Java: rápido, eficiente, automático.
- [Lite³](https://github.com/fastserial/lite3) - Formato de serialização compatível com JSON.
- [MessagePack](http://msgpack.org/) - Formato de serialização binária eficiente.
- [Protostuff](https://github.com/protostuff/protostuff) - Uma biblioteca de serialização com suporte embutido para compatibilidade para frente e para trás (evolução do esquema) e validação.
- [SBinary](https://github.com/harrah/sbinary) - Biblioteca para descrever formatos binários para tipos Scala.
- [Thrift](http://thrift.apache.org/) - O framework de software Apache Thrift, para o desenvolvimento de serviços cross-language escaláveis.
- [yyjson](https://github.com/ibireme/yyjson) - A biblioteca JSON mais rápida em C.

### Armazenamento

- [Apache Cassandra](http://cassandra.apache.org) - Orientado para colunas e proporcionando alta disponibilidade sem nenhum ponto de falha.
- [Aerospike (c)](http://www.aerospike.com/) - Banco de dados NoSQL de alto desempenho entregando velocidade em escala.
- [ArangoDB](https://www.arangodb.com/) - Uma base de dados distribuída livre e de código aberto com um modelo de dados flexível para documentos, gráficos e valores-chave.
- [Citus](https://github.com/citusdata/citus) - Distribuído PostgreSQL como uma extensão.
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Um banco de dados SQL nativo na nuvem modelado após o Google Spanner.
- [Couchbase](https://github.com/couchbase) - Um banco de dados distribuído projetado para desempenho, escalabilidade e administração simplificada.
- [Crate (c)](https://crate.io/) - Base de dados SQL escalável com as guloseimas NoSQL.
- [Druid](http://druid.io/) - Armazenamento rápido de dados distribuídos orientado para colunas.
- [Elasticsearch](https://www.elastic.co/elasticsearch) - Servidor de busca aberto distribuído, escalável e altamente disponível.
- [Geode](http://geode.incubator.apache.org/) - Banco de dados de código aberto, distribuído, em memória para aplicações em escala.
- [Infinispan](http://infinispan.org/) - Altamente concorrente chave / valor datastore usado para cache.
- [InfluxDB](https://github.com/influxdata/influxdb) - Armazenamento de dados escaláveis para métricas, eventos e análises em tempo real.
- [RethinkDB](http://rethinkdb.com/) - Código aberto, banco de dados escalável que facilita a construção de aplicativos em tempo real.
- [TiKV](https://github.com/tikv) - Distribuído banco de dados de valor-chave transacional.
- [TimescaleDB](https://github.com/timescale/timescaledb) - Um banco de dados de séries temporais para análises em tempo real de alto desempenho embalado como uma extensão Postgres.
- [Trino](https://trino.io/) - Mecanismo de consulta SQL rápido distribuído para análise de big data que ajuda você a explorar seu universo de dados.

### Teste

- [Goreplay](https://github.com/buger/goreplay) - Uma ferramenta para capturar e reproduzir tráfego HTTP ao vivo em um ambiente de teste.
- [Keploy](https://keploy.io) - Ferramenta de código aberto para testar APIs e zombar, capturando tráfego real e convertendo-o em casos de teste e tocos, permitindo testes confiáveis de microservice.
- [Mitmproxy](https://mitmproxy.org/) - Um programa de console interativo que permite que fluxos de tráfego sejam interceptados, inspecionados, modificados e reproduzidos.
- [MockServer](https://www.mock-server.com) - Mocking, proxy de depuração e engenharia de caos para vários protocolos (HTTP, gRPC, GraphQL, LLM, MCP, Kafka, TCP e muito mais); dependências simuladas, tráfego de registro/replay, solicitações de verificação e falhas de injeção para testes de integração e resiliência.
- [Mountebank](http://www.mbtest.org/) - Multiplataforma, teste multiprotocolo duplica sobre o fio.
- [Pact](https://docs.pact.io) - Estrutura de teste de contrato para APIs HTTP e sistemas de mensagens assíncronas não-HTTP.
- [RestQA](https://github.com/restqa/restqa) - Uma ferramenta para gerenciar microservices simulando, unidade e teste de desempenho localmente com o melhor na experiência do desenvolvedor da classe.
- [Specmatic](https://specmatic.io) - Converte especificações de API (OpenAPI, AsyncAPI, GraphQL, gRPC etc) em contratos executáveis para testes automatizados, virtualização de serviços e validação de compatibilidade backward sem escrever código.
- [VCR](https://github.com/vcr/vcr) - Grave as interações HTTP do seu conjunto de testes e reproduza-as durante futuras execuções de testes para testes rápidos, determinísticos e precisos. Veja a lista de portos para implementações em outras línguas.
- [Wilma](https://github.com/epam/Wilma) - Stub de serviço HTTP/HTTPS combinado e solução proxy transparente.
- [WireMock](http://wiremock.org/) - Biblioteca flexível para serviços web stubbing e zombando. Ao contrário de ferramentas de zombaria de propósito geral, ele funciona criando um servidor HTTP real que seu código sob teste pode conectar como seria um serviço web real.
- [Hoverfly](https://github.com/spectolabs/hoverfly) - Ferramenta de simulação de virtualização/API de serviços leves para desenvolvedores e testadores.

## Integração e entrega contínuas

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd)  :star: - Uma lista de ferramentas incríveis para integração contínua, entrega contínua e DevOps.

## Modelação e Documentação da API Web

### Async
- [AsyncAPI](https://github.com/asyncapi/spec) - Especificação AsyncAPI, o padrão do setor para definir APIs assíncronas.

### GraphQL

- [GraphQL](http://graphql.org/) - Linguagem de consultas projetada para construir aplicações cliente, fornecendo uma sintaxe intuitiva e flexível e sistema para descrever seus requisitos de dados e interações.

### JSON

- [JSON:API](https://jsonapi.org/) - Uma especificação de como um cliente deve solicitar que os recursos sejam obtidos ou modificados, e como um servidor deve responder a essas solicitações.

### REST

- [API Blueprint](https://apiblueprint.org/) - Ferramentas para todo o ciclo de vida da API. Use-o para discutir sua API com outros. Gerar documentação automaticamente. Ou uma suite de testes. Ou mesmo algum código.
- [OpenAPI](https://www.openapis.org/) - A especificação OpenAPI (OAS) fornece um meio consistente para transportar informações através de cada etapa do ciclo de vida da API.
- [RAML](http://raml.org/) - API RESTful Modeling Language, uma forma simples e sucinta de descrever APIs praticamente RESTful.
- [ReDoc](https://github.com/Redocly/redoc) - Documentação de API gerada por OpenAPI/Swagger.
- [Scalar](https://github.com/scalar/scalar) - Plataforma API de código aberto: belas referências API e suporte a OpenAPI/Swagger de 1a classe.
- [Slate](https://github.com/slatedocs/slate) - Bela documentação estática para sua API.
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Document RESTful serviços combinando documentação escrita à mão com trechos gerados automaticamente produzidos com Spring MVC Test.
- [Swagger](https://swagger.io/) - Uma representação simples e poderosa da sua API RESTful.

## Normas / Recomendações

### Rede Mundial

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - Arquitetura da World Wide Web, Volume Um.
- [RFC3986](https://tools.ietf.org/html/rfc3986) - Identificador Uniforme de Recursos (URI): Syntax Genérico.
- [RFC6570](https://tools.ietf.org/html/rfc6570) - Modelo URI.
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URI Design e Propriedade.

### Auto-sobergia e descentralização

- [DID](https://www.w3.org/TR/did-core/) - especificação W3C de identificadores descentralizados (DID): um novo tipo de identificador que permite a identidade digital verificável e descentralizada.
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - Metodologia de comunicação privada construída no topo da concepção descentralizada de DIDs.
- [DIDComm Protocols](https://didcomm.org/) - Registro de protocolos construídos no DIDComm, para interações auto-soberanas de alta confiança sobre qualquer transporte.
- [IDSA](https://internationaldataspaces.org/) - A Associação Internacional de Espaços de Dados (IDSA) está em uma missão de criar o futuro da economia digital global com Espaços de Dados Internacionais (IDS), um sistema seguro e soberano de compartilhamento de dados em que todos os participantes podem realizar o valor total de seus dados.

### HTTP/1.1

- [RFC7230](https://tools.ietf.org/html/rfc7230) - Mensagem Sintaxe e Roteamento.
- [RFC7231](https://tools.ietf.org/html/rfc7231) - Semântica e Conteúdo.
- [RFC7232](https://tools.ietf.org/html/rfc7232) - Pedidos Condicionais.
- [RFC7233](https://tools.ietf.org/html/rfc7233) - Pedidos de alcance.
- [RFC7234](https://tools.ietf.org/html/rfc7234) - Caching.
- [RFC7235](https://tools.ietf.org/html/rfc7235) - Autenticação.
- [RFC7807](https://tools.ietf.org/html/rfc7807) - Detalhes de problemas para APIs HTTP.

### HTTP/2

- [RFC7540](https://tools.ietf.org/html/rfc7540) - Protocolo de Transferência de Hipertexto Versão 2.

### Quic

- [QUIC-WG](https://quicwg.org/) - Grupo de Trabalho IETF que é fretado para entregar o próximo protocolo de transporte para a Internet.
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - Um transporte multiplexado e seguro.

### RPC

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - Um protocolo de chamada remota sem estado e leve.
- [Open RPC](https://open-rpc.org/) - A especificação OpenRPC define uma descrição padrão da interface linguagem-gnóstico para JSON-RPC 2.0 APIs.

### Mensagens

- [AMQP](https://www.amqp.org/) - Protocolo de espera de mensagens avançado.
- [MQTT](https://mqtt.org/) - Transporte de Telemetria MQ.
- [STOMP](https://stomp.github.io/) - Protocolo de Mensagens Orientadas por Texto Simples.

### Segurança

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - O Grant Negociation and Authorization Protocol define um mecanismo para delegar a autorização de um software e transmitir essa delegação ao software. Esta delegação pode incluir acesso a um conjunto de APIs, bem como informações transmitidas diretamente ao software.<sup>PROJETO</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0 é uma camada de identidade simples no topo do protocolo OAuth 2.0. Permite aos clientes verificar a identidade do usuário final com base na autenticação realizada por um Servidor de Autorização, bem como obter informações básicas sobre o usuário final de forma interoperável e semelhante ao REST.
- [PASETO](https://paseto.io/) - Paseto é tudo o que você ama sobre JOSE (JWT, JWE, JWS) sem qualquer um dos muitos déficits de design que atormentam os padrões JOSE. <sup>PROJETO</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - O Protocolo de Segurança das Camadas de Transporte (TLS) versão 1.2.
- [RFC6066](https://tools.ietf.org/html/rfc6066) - Extensões TLS.
- [RFC6347](https://tools.ietf.org/html/rfc6347) - Datagram Transport Layer Security Versão 1.2.
- [RFC6749](https://tools.ietf.org/html/rfc6749) - O sistema de autorização OAuth 2.0.
- [RFC6962](https://tools.ietf.org/html/rfc6962) - Transparência do certificado.
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSON Web Signature (JWS) representa conteúdo protegido com assinaturas digitais ou Códigos de Autenticação de Mensagens (MACs) usando estruturas de dados baseadas em JSON.
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSON Web Token (JWT) é um meio compacto e seguro para representar reivindicações a serem transferidas entre duas partes.
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM: Definições, visão geral, conceitos e requisitos.
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM: Core Schema, fornece um esquema neutro de plataforma e modelo de extensão para representar usuários e grupos.
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM: Protocolo, nível de aplicação, protocolo REST para provisionamento e gestão de dados de identidade na web.

### Descoberta do Serviço
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - Mecanismo para que os clientes descubram uma lista de instâncias nomeadas de um serviço, utilizando consultas DNS padrão.
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - DNS RR para especificar a localização dos serviços (DNS SRV).

### Formatos de Dados

- [RFC4627](https://tools.ietf.org/html/rfc4627) - Nota de Objecto JavaScript (JSON).
- [RFC7049](https://tools.ietf.org/html/rfc7049) - Representação de Objectos Binários Concisos (CBOR).
- [BSON](http://bsonspec.org/) - Binary JSON (BSON).
- [JSON-LD](http://json-ld.org/) - JSON para ligar dados.
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - Codificação binária simples (SBE).
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - Especificação do pacote de mensagens.

### Vocabulários

- [JSON Schema](http://json-schema.org/) - Vocabulário que lhe permite anotar e validar documentos JSON.
- [Schema.org](http://schema.org/) - Colaborativa, atividade comunitária com uma missão de criar, manter e promover esquemas para dados estruturados na Internet, em páginas web, em mensagens de e-mail e além.

### Unicode

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - O Consórcio Unicode. O Unicode Standard, versão 8.0.0, (Mountain View, CA: The Unicode Consortium, 2015. ISBN 978-1-936213-10-8).
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8, um formato de transformação da ISO 10646.

## Design de Organização / Dinâmica de Equipe

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf)  :small_orange_diamond:<sup>PDF</sup> - Melvin E. Conway, revista Datamation 1968. O artigo original que define a Lei de Conway.
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - Cada equipa é responsável por uma ou mais funções empresariais (por exemplo, capacidades empresariais). Uma equipe possui uma base de código composta por um ou mais módulos. Sua base de código é dimensionada de modo a não exceder a capacidade cognitiva da equipe. A equipe implementa seu código como um ou mais serviços. Uma equipe deve ter exatamente um serviço a menos que haja uma necessidade comprovada de ter vários serviços.
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM)  :small_red_triangle:<sup>YT</sup> - Sim, Londres. O debate "monolitos vs microservices" muitas vezes se concentra em aspectos tecnológicos, ignorando estratégia e dinâmica de equipe. Em vez de tecnologia, as organizações inteligentes estão começando com a carga cognitiva da equipe como o princípio orientador para o software moderno. Nesta palestra, explicamos como e por quê, ilustrados por estudos de caso reais.

## Enterprise & Vertical

- [Commercetools](https://commercetools.com/) - Plataforma de comércio sem cabeça.
- [Equinox](https://www.infosysequinox.com/) - Infosys Equinox é uma plataforma de comércio e marketing centrada em humanos que suporta experiências ricas e hiperpersonalizados em qualquer canal e touchpoint.
- [Flamingo](https://www.flamingo.me/) - Framework para construir aplicações flexíveis e modernas de e-commerce.
- [Medusa](https://medusajs.com/) - Plataforma de comércio aberto sem cabeça.

## Teoria

### Artigos e Artigos

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - Introdução filosófica à concepção de sistemas hiperliminares adaptativos através de teorias da ciência da complexidade.
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)  :star: - Uma lista de leitura atualizada e organizada para ilustrar os padrões de sistemas escaláveis, confiáveis e executantes em grande escala. Conceitos são explicados nos artigos de engenheiros proeminentes e referências credíveis. Estudos de caso são feitos de sistemas testados em batalha que servem milhões a bilhões de usuários.
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - Modelo que descreve as dimensões para escalar um serviço.
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf)  :small_orange_diamond:<sup>PDF</sup> - Consistência como monotonicidade lógica.
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - Técnica para reduzir o risco de introdução de uma nova versão de software na produção, lançando lentamente a mudança para um pequeno subconjunto de usuários antes de lançá-la para toda a infraestrutura e disponibilizá-la para todos.
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - Declara que é impossível para um sistema informático distribuído fornecer simultaneamente as três seguintes garantias: Coerência, Disponibilidade e Tolerância de Partição.
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf)  :small_orange_diamond:<sup>PDF</sup> - A abstração computacional sem servidor expõe vários detalhes operacionais de baixo nível que tornam difícil para os programadores escreverem e raciocinarem sobre seu código. Este trabalho lança luz sobre este problema apresentando λ, uma semântica operacional da essência da computação sem servidor.
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - Forma particular de projetar aplicações de software como suites de serviços de implantação independente.
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf)  :small_orange_diamond:<sup>PDF</sup> - Série de sete partes de F5 em microservices.
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - Aconselhamento crítico sobre alguns problemas relativos a uma abordagem microservices.
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - Guia para ponderar custos e benefícios do estilo arquitetônico mircoservices.
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - Definição de sistemas reactivos.
- [Reactive Streams](http://www.reactive-streams.org/) - Iniciativa para fornecer um padrão para processamento de fluxo assíncrono com contrapressão sem bloqueio.
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf)  :small_orange_diamond:<sup>PDF</sup> - Computação orientada a recursos para sistemas adaptativos.
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf)  :small_orange_diamond:<sup>PDF</sup> - Compreender os ecossistemas de software: uma abordagem de modelagem estratégica.
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - Abordagens para gerenciar a complexidade de testes adicionais de múltiplos componentes implantáveis independentemente.
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf)  :small_orange_diamond:<sup>PDF</sup> - Descreve três abstrações que se combinam para apresentar um modelo de programação poderoso para a construção de software de servidor seguro, modular e eficiente: futuros, serviços e filtros composíveis.

### Sites & Organizações

- [Cloud Native Computing Foundation](https://www.cncf.io/) - A Cloud Native Computing Foundation constrói ecossistemas sustentáveis e promove uma comunidade em torno de uma constelação de projetos de alta qualidade que orquestram contêineres como parte de uma arquitetura de microserviços.
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - Paisagem interativa de tecnologias nativas de nuvem.
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - A escolha de Martin Fowler de artigos, vídeos, livros e podcasts que podem ensinar-lhe mais sobre o estilo arquitetônico microserviços.
- [Microservice Patterns](http://microservices.io/) - padrões de arquitetura de microservices e melhores práticas.
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - Microservice, principalmente anti-padrão e armadilhas.

## Licença

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Contribuir

Por favor, leia o [Contribution Guidelines](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md) antes de submeter sua sugestão.

Sintam-se à vontade. [open an issue](https://github.com/mfornos/awesome-microservices/issues) ou [create a pull request](https://github.com/mfornos/awesome-microservices/pulls) com as suas adições.

:star2: Obrigado!
