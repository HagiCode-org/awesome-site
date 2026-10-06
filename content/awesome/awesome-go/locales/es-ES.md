# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Estado de compilación](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Widget de Slack](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Estado de Netlify](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Seguir la lista Awesome](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Último commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

Usamos el Slack de la comunidad _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ para la comunicación instantánea; rellena el [formulario aquí para unirte](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Lista seleccionada de frameworks, bibliotecas y software de Go increíbles | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**Patrocinios:**

_Agradecimientos especiales a_

<div align="center">
<table cellpadding="5">
<tbody align="center">
<tr>
<td colspan="2">
<a href="https://bit.ly/awesome-go-digitalocean">
<img src="https://avelino.run/sponsors/do_logo_horizontal_blue-210.png" width="200" alt="Digital Ocean">
</a>
</td>
</tr>
</tbody>
</table>
</div>

**Awesome Go no tiene cuota mensual**_, pero tenemos empleados que **trabajan duro** para mantenerlo en funcionamiento. ¡Con el dinero recaudado podemos recompensar el esfuerzo de cada una de las personas implicadas! Puedes ver cómo calculamos nuestra facturación y su reparto, ya que está abierto a toda la comunidad. ¿Quieres apoyar el proyecto? Haz clic [aquí](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)._

> Una lista seleccionada de frameworks, bibliotecas y software de Go increíbles. Inspirada en [awesome-python](https://github.com/vinta/awesome-python).

**Contribuir:**

Por favor, echa primero un vistazo rápido a las [pautas de contribución](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md). Gracias a todos los [colaboradores](https://github.com/avelino/awesome-go/graphs/contributors); ¡sois geniales!

> _Si ves aquí un paquete o proyecto que ya no se mantiene o que no encaja bien, envía una pull request para mejorar este archivo. ¡Gracias!_

## Contenido

<details>
<summary>Desplegar contenido</summary>

- [Awesome Go](#awesome-go)
  - [Contenido](#contents)
  - [Modelo de actores](#actor-model)
  - [Inteligencia artificial](#artificial-intelligence)
  - [Audio y música](#audio-and-music)
  - [Autenticación y autorización](#authentication-and-authorization)
  - [Blockchain](#blockchain)
  - [Creación de bots](#bot-building)
  - [Automatización de compilación](#build-automation)
  - [Línea de comandos](#command-line)
    - [Interfaces de consola avanzadas](#advanced-console-uis)
    - [CLI estándar](#standard-cli)
  - [Configuración](#configuration)
  - [Integración continua](#continuous-integration)
  - [Preprocesadores CSS](#css-preprocessors)
  - [Frameworks de integración de datos](#data-integration-frameworks)
  - [Estructuras de datos y algoritmos](#data-structures-and-algorithms)
    - [Empaquetado de bits y compresión](#bit-packing-and-compression)
    - [Conjuntos de bits](#bit-sets)
    - [Filtros de Bloom y de cuco](#bloom-and-cuckoo-filters)
    - [Colecciones de estructuras de datos y algoritmos](#data-structure-and-algorithm-collections)
    - [Iteradores](#iterators)
    - [Mapas](#maps)
    - [Estructuras de datos y algoritmos varios](#miscellaneous-data-structures-and-algorithms)
    - [Tipos anulables](#nullable-types)
    - [Colas](#queues)
    - [Conjuntos](#sets)
    - [Análisis de texto](#text-analysis)
    - [Árboles](#trees)
    - [Tuberías](#pipes)
  - [Bases de datos](#database)
    - [Cachés](#caches)
    - [Bases de datos implementadas en Go](#databases-implemented-in-go)
    - [Migración de esquemas de bases de datos](#database-schema-migration)
    - [Herramientas de bases de datos](#database-tools)
    - [Constructores de consultas SQL](#sql-query-builders)
  - [Controladores de bases de datos](#database-drivers)
    - [Interfaces para múltiples backends](#interfaces-to-multiple-backends)
    - [Controladores de bases de datos relacionales](#relational-database-drivers)
    - [Controladores de bases de datos NoSQL](#nosql-database-drivers)
    - [Bases de datos de búsqueda y analíticas](#search-and-analytic-databases)
  - [Fecha y hora](#date-and-time)
  - [Sistemas distribuidos](#distributed-systems)
  - [DNS dinámico](#dynamic-dns)
  - [Correo electrónico](#email)
  - [Lenguajes de scripting integrables](#embeddable-scripting-languages)
  - [Gestión de errores](#error-handling)
  - [Manejo de archivos](#file-handling)
  - [Finanzas](#financial)
  - [Formularios](#forms)
  - [Programación funcional](#functional)
  - [Desarrollo de videojuegos](#game-development)
  - [Generadores](#generators)
  - [Geografía](#geographic)
  - [Compiladores de Go](#go-compilers)
  - [Goroutines](#goroutines)
  - [GUI](#gui)
  - [Hardware](#hardware)
  - [Imágenes](#images)
  - [IoT (Internet de las cosas)](#iot-internet-of-things)
  - [Planificadores de tareas](#job-scheduler)
  - [JSON](#json)
  - [Registro de logs](#logging)
  - [Aprendizaje automático](#machine-learning)
  - [Mensajería](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [Varios](#miscellaneous)
    - [Inyección de dependencias](#dependency-injection)
    - [Estructura de proyectos](#project-layout)
    - [Cadenas de texto](#strings)
    - [Sin categoría](#uncategorized)
  - [Procesamiento del lenguaje natural](#natural-language-processing)
    - [Detección de idioma](#language-detection)
    - [Analizadores morfológicos](#morphological-analyzers)
    - [Generadores de slugs](#slugifiers)
    - [Tokenizadores](#tokenizers)
    - [Traducción](#translation)
    - [Transliteración](#transliteration)
  - [Redes](#networking)
    - [Clientes HTTP](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [Gestión de paquetes](#package-management)
  - [Rendimiento](#performance)
  - [Lenguajes de consulta](#query-language)
  - [Reflexión](#reflection)
  - [Incrustación de recursos](#resource-embedding)
  - [Ciencia y análisis de datos](#science-and-data-analysis)
  - [Seguridad](#security)
  - [Serialización](#serialization)
  - [Aplicaciones de servidor](#server-applications)
  - [Procesamiento de flujos](#stream-processing)
  - [Motores de plantillas](#template-engines)
  - [Pruebas](#testing)
    - [Frameworks de pruebas](#testing-frameworks)
    - [Objetos simulados (mocks)](#mock)
    - [Fuzzing y depuración delta/reducción/minimización](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium y herramientas de control del navegador](#selenium-and-browser-control-tools)
    - [Inyección de fallos](#fail-injection)
  - [Procesamiento de texto](#text-processing)
    - [Formateadores](#formatters)
    - [Lenguajes de marcado](#markup-languages)
    - [Analizadores/Codificadores/Decodificadores](#parsersencodersdecoders)
    - [Expresiones regulares](#regular-expressions)
    - [Saneamiento](#sanitation)
    - [Extractores web (scrapers)](#scrapers)
    - [RSS](#rss)
    - [Utilidades/Varios](#utilitymiscellaneous)
  - [API de terceros](#third-party-apis)
  - [Utilidades](#utilities)
  - [UUID](#uuid)
  - [Validación](#validation)
  - [Control de versiones](#version-control)
  - [Vídeo](#video)
  - [Frameworks web](#web-frameworks)
    - [Middlewares](#middlewares)
      - [Middlewares propiamente dichos](#actual-middlewares)
      - [Bibliotecas para crear middlewares HTTP](#libraries-for-creating-http-middlewares)
    - [Enrutadores](#routers)
  - [WebAssembly](#webassembly)
  - [Servidores de webhooks](#webhooks-server)
  - [Windows](#windows)
  - [Frameworks de flujos de trabajo](#workflow-frameworks)
  - [XML](#xml)
  - [Confianza cero (Zero Trust)](#zero-trust)
  - [Análisis de código](#code-analysis)
  - [Plugins para editores](#editor-plugins)
  - [Herramientas para go generate](#go-generate-tools)
  - [Herramientas de Go](#go-tools)
  - [Paquetes de software](#software-packages)
    - [Herramientas DevOps](#devops-tools)
    - [Otro software](#other-software)
- [Recursos](#resources)
  - [Comparativas de rendimiento](#benchmarks)
  - [Conferencias](#conferences)
  - [Libros electrónicos](#e-books)
    - [Libros electrónicos de pago](#e-books-for-purchase)
    - [Libros electrónicos gratuitos](#free-e-books)
  - [Gophers](#gophers)
  - [Encuentros (meetups)](#meetups)
  - [Guías de estilo](#style-guides)
  - [Redes sociales](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Sitios web](#websites)
    - [Tutoriales](#tutorials)
    - [Aprendizaje guiado](#guided-learning)
  - [Contribución](#contribution)
  - [Licencia](#license)

**[⬆ volver arriba](#contents)**



</details>

## Modelo de actores

_Bibliotecas para crear programas basados en actores._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - Biblioteca de flujo de control basada en grafos (AOP, actores, máquina de estados).
- [Ergo](https://github.com/ergo-services/ergo) - Framework basado en actores con transparencia de red para crear arquitecturas orientadas a eventos en Golang. Inspirado en Erlang.
- [Goakt](https://github.com/Tochemey/goakt) - Framework de actores rápido y distribuido para Golang que usa protocol buffers como mensajes.
- [Hollywood](https://github.com/anthdm/hollywood) - Motor de actores extremadamente rápido y ligero escrito en Golang.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Actores distribuidos para Go, C# y Java/Kotlin.

**[⬆ volver arriba](#contents)**

## Inteligencia artificial

_Bibliotecas para crear programas que aprovechan la IA._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - Pasarela de IA para enrutar, proteger y monitorizar el tráfico de LLM entre más de 10 proveedores. API compatible con OpenAI, plugins de políticas en WASM, despliegues canary y panel en tiempo real.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - Entorno de ejecución para agentes de IA con event sourcing, recuperación desde puntos de control y garantía de ejecución como máximo una vez (At-Most-Once). Escrito en Go.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Framework para crear agentes de IA con estado en Go.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Servidor de Model Context Protocol (MCP) que envuelve la CLI de Antigravity para ejecutar prompts y revisiones por pares.
- [ai](https://github.com/joakimcarlsson/ai) - Kit de herramientas de Go para crear agentes y aplicaciones de IA con múltiples proveedores, con LLM unificados, embeddings, llamadas a herramientas e integración con MCP.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - Pasarela de LLM compatible con OpenAI que enruta solicitudes entre 30 proveedores con conmutación por error, limitación de tasa, presupuestos, salvaguardas y observabilidad.
- [chromem-go](https://github.com/philippgille/chromem-go) - Base de datos vectorial integrable para Go con una interfaz similar a la de Chroma y sin dependencias de terceros. En memoria con persistencia opcional.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Biblioteca de Go para controlar la interfaz de prompts no interactiva de la CLI de Claude Code desde programas Go.
- [crewai-go](https://github.com/rhgs/crewai-go) - Port idiomático en Go de CrewAI (orquestación multiagente). Sin dependencias, solo la biblioteca estándar.
- [Cynative](https://github.com/cynative/cynative) - Framework para crear agentes de IA de ingeniería de seguridad en Go. De solo lectura por diseño, con sandbox integrado y 45 plantillas de agentes para la investigación en profundidad de AWS, GCP, Azure, K8s, GitHub y GitLab.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - SDK cliente oficial de Go para el servidor autoalojado de memoria de agentes Dakera, que proporciona interfaces tipadas para guardar y recuperar memoria, gestión de sesiones, operaciones con espacios de nombres y configuración del decaimiento.
- [fun](https://gitlab.com/tozd/go/fun) - La forma más sencilla, pero potente, de usar modelos de lenguaje grandes (LLM) en Go.
- [goai](https://github.com/zendev-sh/goai) - SDK de Go para crear aplicaciones de IA. Un solo SDK, más de 20 proveedores. Inspirado en Vercel AI SDK.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - Pasarela de IA que expone una API unificada compatible con OpenAI para OpenAI, Anthropic, Gemini, Groq, xAI, Ollama y otros proveedores, con enrutamiento, seguimiento del uso, límites de tasa y salvaguardas.
- [hotplex](https://github.com/hrygo/hotplex) - Motor de ejecución de agentes de IA con sesiones de larga duración para Claude Code, OpenCode, pi-mono y otras herramientas de IA de línea de comandos. Ofrece streaming full-duplex, integraciones multiplataforma y un sandbox seguro.
- [jargo](https://github.com/gojargo/jargo) - Framework para crear agentes de IA de voz en tiempo real sobre WebRTC, que conecta voz a texto, LLM y texto a voz en una canalización de streaming.
- [keen-code](https://github.com/mochow13/keen-code) - Agente de programación con IA para terminal y eficiente en el uso del contexto. Independiente del proveedor, compatible con MCP, Agent Skills, subagentes y más. Incluye una TUI sencilla y directa.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo es un framework para desarrollar aplicaciones impulsadas por modelos de lenguaje.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - Biblioteca de Go para crear aplicaciones multiactor con estado basadas en LLM, construida sobre el concepto de LangGraph, con muchas arquitecturas de agentes integradas.
- [llm-box](https://github.com/alib8b8/llm-box) - Motor de flujos de trabajo de IA para terminal con canalizaciones definidas en YAML, más de 20 proveedores de LLM (DeepSeek, Qwen, GLM, Mistral, etc.) y una TUI para gestionar los flujos de trabajo.
- [LocalAI](https://github.com/mudler/LocalAI) - Alternativa de código abierto a OpenAI para autoalojar modelos de IA.
- [localaik](https://github.com/harshaneel/localaik) - Emulación local al estilo de LocalStack de las API de OpenAI y Gemini; un único contenedor Docker con backend de llama.cpp + Gemma 3.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Implementación en Go del Model Context Protocol para crear servidores y clientes MCP en Go.
- [Ollama](https://github.com/jmorganca/ollama) - Ejecuta modelos de lenguaje grandes en local.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Gestiona grupos de instancias de Ollama con balanceo de carga y conmutación por error.
- [otellix](https://github.com/oluwajubelo1/otellix) - Observabilidad de LLM nativa de OpenTelemetry y salvaguardas de presupuesto para entornos de producción con costes limitados.
- [routex](https://github.com/Ad3bay0c/routex) - Entorno de ejecución de IA multiagente para Go basado en YAML, con supervisión al estilo de Erlang, compatibilidad con servidores de herramientas MCP y una CLI.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - Búsqueda por significado en PDF, Markdown, DOCX, código fuente y otros tipos de archivo, que usa modelos de embeddings de IA generativa para vectorizar los archivos en una base de datos vectorial.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - CLI que analiza las transcripciones de sesiones de agentes de IA para identificar y poner en cuarentena de forma segura skills, servidores MCP y agentes no utilizados en Claude Code, Codex CLI, Hermes, OpenCode, Cursor y OpenClaw.
- [Smeldr](https://github.com/Smeldr/core) - Backend de contenidos nativo de IA con gestión tipada del ciclo de vida, herramientas MCP nativas para cada tipo de contenido y cero dependencias en tiempo de ejecución.
- [snip](https://github.com/edouard-claude/snip) - Proxy de CLI que reduce el uso de tokens de LLM entre un 60 y un 90 % con filtros YAML declarativos. Sustituto directo para Claude Code, Cursor, Copilot y Gemini. Alternativa a rtk en Go.
- [thermal](https://github.com/jadmadi/thermal) - Mapa de calor de contribuciones en la terminal, seguimiento de rachas y clasificación de tokens para asistentes de programación con IA.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - Framework para crear sistemas multiagente basados en LLM.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - Servidor MCP que proporciona a los asistentes de IA búsqueda web, extracción de contenido e investigación con múltiples fuentes. Un único binario, 5 proveedores de búsqueda con conmutación por error mediante circuit breaker y una canalización de scraping de 4 niveles.
- [zenflow](https://github.com/zendev-sh/zenflow) - Motor de orquestación multiagente y de flujos de trabajo. Flujos de trabajo declarativos en YAML, coordinador LLM con buzones en estrella (hub-and-spoke) y entrega sin condiciones de carrera. Un archivo YAML, un binario de Go. Funciona con cualquier proveedor compatible con goai.

**[⬆ volver arriba](#contents)**

## Audio y música

_Bibliotecas para manipular audio y música._

- [beep](https://github.com/gopxl/beep) - Biblioteca sencilla para la reproducción y manipulación de audio.
- [flac](https://github.com/mewkiz/flac) - Codificador/decodificador FLAC nativo de Go compatible con flujos FLAC.
- [gaad](https://github.com/Comcast/gaad) - Analizador nativo en Go de flujos de bits AAC.
- [go-aac](https://github.com/tphakala/go-aac) - Codificador y decodificador AAC-LC escrito íntegramente en Go, portado desde FFmpeg.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - Remuestreador de audio de alta calidad escrito íntegramente en Go con aceleración SIMD.
- [go-flac](https://github.com/tphakala/go-flac) - Codificador y decodificador FLAC nativo de Go con aceleración SIMD.
- [go-mpris](https://github.com/leberKleber/go-mpris) - Cliente para interfaces dbus de mpris.
- [go-opus](https://github.com/tphakala/go-opus) - Implementación nativa en Go del códec de audio Opus (RFC 6716) con un decodificador conforme al RFC.
- [go-resample](https://github.com/gojargo/go-resample) - Conversor de frecuencia de muestreo de audio escrito íntegramente en Go (sin cgo) con conversores sinc, lineal y de retención de orden cero.
- [go-wav](https://github.com/tphakala/go-wav) - Lector y escritor de WAV/RIFF escrito íntegramente en Go, compatible con RF64 y BW64 para archivos de más de 4 GiB.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - Biblioteca nativa de procesamiento de audio en Go.
- [gocue](https://github.com/iSerganov/gocue) - CLI de análisis de audio que detecta puntos de cue-in, cue-out y superposición y mide la sonoridad EBU R128, generando JSON para Liquidsoap.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Bindings de libsamplerate para Go.
- [id3v2](https://github.com/bogem/id3v2) - Biblioteca de decodificación y codificación de ID3 para Go.
- [malgo](https://github.com/gen2brain/malgo) - Biblioteca de audio minimalista.
- [minimp3](https://github.com/tosone/minimp3) - Biblioteca ligera de decodificación de MP3.
- [music-theory](https://github.com/go-music-theory/music-theory) - Modelos de teoría musical en Go.
- [Oto](https://github.com/hajimehoshi/oto) - Biblioteca de bajo nivel para reproducir sonido en múltiples plataformas.
- [PortAudio](https://github.com/gordonklaus/portaudio) - Bindings de Go para la biblioteca de E/S de audio PortAudio.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - Agentes de voz con IA configurados mediante JSON, con canalizaciones STT → LLM → TTS sobre WebSocket y WebRTC.

**[⬆ volver arriba](#contents)**

## Autenticación y autorización

_Bibliotecas para implementar autenticación y autorización._

- [authboss](https://github.com/volatiletech/authboss) - Sistema de autenticación modular para la web. Intenta eliminar tanto código repetitivo y tantas "cosas difíciles" como sea posible para que, cada vez que empieces un nuevo proyecto web en Go, puedas conectarlo, configurarlo y empezar a crear tu aplicación sin tener que construir un sistema de autenticación cada vez.
- [authgate](https://github.com/go-authgate/authgate) - Servidor de autorización OAuth 2.0 ligero compatible con Device Authorization Grant ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), Authorization Code Flow con PKCE ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)) y Client Credentials Grant para la autenticación entre máquinas.
- [branca](https://github.com/essentialkaos/branca) - [Implementación de la especificación](https://github.com/tuupola/branca-spec) de tokens branca para Golang 1.15+.
- [casbin](https://github.com/hsluoyz/casbin) - Biblioteca de autorización compatible con modelos de control de acceso como ACL, RBAC y ABAC.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - Proporciona un analizador del formato de archivo cookies.txt.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - Utilidades para la autenticación con GitHub: genera y usa tokens de aplicación y de instalación de GitHub.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian es una biblioteca de Golang que ofrece una forma sencilla, limpia e idiomática de crear una autenticación moderna y potente para API y web compatible con autenticación LDAP, Basic, Bearer token y basada en certificados.
- [go-iam](https://github.com/melvinodsa/go-iam) - Sistema de gestión de identidades y accesos pensado para desarrolladores, con una interfaz sencilla.
- [go-jose](https://github.com/go-jose/go-jose) - Implementación bastante completa de las especificaciones JSON Web Token, JSON Web Signatures y JSON Web Encryption del grupo de trabajo JOSE.
- [go-jwt](https://github.com/deatil/go-jwt) - Biblioteca de JWT (JSON Web Token) para Go.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - Paquete de autenticación JWT que proporciona tokens de acceso y de actualización con huella digital, almacenamiento en Redis y renovación automática.
- [goiabada](https://github.com/leodip/goiabada) - Servidor de autenticación y autorización de código abierto compatible con OAuth2 y OpenID Connect.
- [gologin](https://github.com/dghubble/gologin) - Manejadores encadenables para el inicio de sesión con proveedores de autenticación OAuth1 y OAuth2.
- [gorbac](https://github.com/mikespook/gorbac) - Proporciona una implementación ligera de control de acceso basado en roles (RBAC) en Golang.
- [gosession](https://github.com/Kwynto/gosession) - Sesiones rápidas para net/http en GoLang. Este paquete es quizá la mejor implementación del mecanismo de sesiones o, al menos, intenta llegar a serlo.
- [goth](https://github.com/markbates/goth) - Proporciona una forma sencilla, limpia e idiomática de usar OAuth y OAuth2. Gestiona múltiples proveedores de serie.
- [jeff](https://github.com/abraithwaite/jeff) - Gestión de sesiones web sencilla, flexible, segura e idiomática con backends intercambiables.
- [jwt](https://github.com/pascaldekloe/jwt) - Biblioteca ligera de JSON Web Token (JWT).
- [jwt](https://github.com/cristalhq/jwt) - JSON Web Tokens seguros, sencillos y rápidos para Go.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - Middleware JWT para servidores http de Golang con muchas opciones de configuración.
- [jwt-go](https://github.com/golang-jwt/jwt) - Implementación completa de JSON Web Tokens (JWT). Esta biblioteca permite analizar y verificar JWT, así como generarlos y firmarlos.
- [jwx](https://github.com/lestrrat-go/jwx) - Módulo de Go que implementa varias tecnologías JWx (JWA/JWE/JWK/JWS/JWT, también conocidas como JOSE).
- [keto](https://github.com/ory/keto) - Implementación de código abierto (en Go) de "Zanzibar: Google's Consistent, Global Authorization System". Incluye API gRPC y REST, newSQL y un lenguaje de permisos sencillo y granular. Admite ACL, RBAC y otros modelos de acceso.
- [loginsrv](https://github.com/tarent/loginsrv) - Microservicio de inicio de sesión con JWT y backends intercambiables como OAuth2 (Github), htpasswd y osiam.
- [melange](https://github.com/pthm/melange) - Compila esquemas de autorización de OpenFGA en funciones PL/pgSQL que ejecutan comprobaciones de control de acceso detallado basado en relaciones dentro de PostgreSQL.
- [oauth2](https://github.com/golang/oauth2) - Sucesor de goauth2. Paquete genérico de OAuth 2.0 que incluye soporte para JWT, las API de Google, Compute Engine y App Engine.
- [oidc](https://github.com/zitadel/oidc) - Biblioteca cliente y servidor de OpenID Connect fácil de usar, escrita para Go y certificada por la OpenID Foundation.
- [openfga](https://github.com/openfga/openfga) - Implementación de autorización detallada basada en el artículo "Zanzibar: Google's Consistent, Global Authorization System". Respaldado por la [CNCF](https://www.cncf.io/).
- [osin](https://github.com/openshift/osin) - Biblioteca de servidor OAuth2 para Golang.
- [otpgen](https://github.com/grijul/otpgen) - Biblioteca para generar códigos TOTP/HOTP.
- [otpgo](https://github.com/jltorresm/otpgo) - Biblioteca de contraseñas de un solo uso basadas en tiempo (TOTP) y basadas en HMAC (HOTP) para Go.
- [paseto](https://github.com/o1egl/paseto) - Implementación en Golang de Platform-Agnostic Security Tokens (PASETO).
- [permissions](https://github.com/xyproto/permissions) - Biblioteca para llevar el control de usuarios, estados de inicio de sesión y permisos. Usa cookies seguras y bcrypt.
- [scope](https://github.com/SonicRoshan/scope) - Gestiona fácilmente los ámbitos (scopes) de OAuth2 en Go.
- [scs](https://github.com/alexedwards/scs) - Gestor de sesiones para servidores HTTP.
- [securecookie](https://github.com/chmike/securecookie) - Codificación/decodificación eficiente de cookies seguras.
- [session](https://github.com/icza/session) - Gestión de sesiones en Go para servidores web (incluido soporte para Google App Engine - GAE).
- [sessions](https://github.com/adam-hanna/sessions) - Servicio de sesiones tremendamente sencillo, de alto rendimiento y muy personalizable para servidores http de Go.
- [sessionup](https://github.com/swithek/sessionup) - Paquete sencillo pero eficaz de gestión e identificación de sesiones HTTP.
- [sjwt](https://github.com/brianvoe/sjwt) - Generador y analizador sencillo de JWT.
- [spicedb](https://github.com/authzed/spicedb) - Base de datos inspirada en Zanzibar que permite una autorización detallada.
- [x509proxy](https://github.com/vkuznet/x509proxy) - Biblioteca para manejar certificados proxy X509.

**[⬆ volver arriba](#contents)**

## Blockchain

_Herramientas para construir blockchains._

- [cometbft](https://github.com/cometbft/cometbft) - Motor de replicación de máquinas de estado distribuido, tolerante a fallos bizantinos y determinista. Es un fork de Tendermint Core e implementa el algoritmo de consenso de Tendermint.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Framework para construir blockchains públicas en el ecosistema Cosmos.
- [gno](https://github.com/gnolang/gno) - Completo conjunto de herramientas para contratos inteligentes creado con Golang y Gnolang, una variante de Go determinista y diseñada específicamente para blockchains.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Implementación oficial en Go del protocolo Ethereum.
- [gosemble](https://github.com/LimeChain/gosemble) - Framework basado en Go para crear runtimes compatibles con Polkadot/Substrate.
- [gossamer](https://github.com/ChainSafe/gossamer) - Implementación en Go del Polkadot Host.
- [kubo](https://github.com/ipfs/kubo) - Implementación de IPFS en Go. Proporciona almacenamiento direccionable por contenido que puede usarse para el almacenamiento descentralizado en DApps. Se basa en el protocolo IPFS.
- [lnd](https://github.com/lightningnetwork/lnd) - Implementación completa de un nodo de Lightning Network.
- [nview](https://github.com/blinklabs-io/nview) - Herramienta de monitorización local para un nodo de Cardano. Es una TUI (interfaz de usuario de terminal) diseñada para adaptarse a la mayoría de las pantallas.
- [pactus](https://github.com/pactus-project/pactus) - Implementación de nodo completo de la blockchain Pactus en Go.
- [solana-go](https://github.com/gagliardetto/solana-go) - Biblioteca de Go para interactuar con las interfaces JSON RPC y WebSocket de Solana.
- [tendermint](https://github.com/tendermint/tendermint) - Middleware de alto rendimiento para transformar una máquina de estados escrita en cualquier lenguaje de programación en una máquina de estados replicada tolerante a fallos bizantinos, usando los protocolos de consenso y de blockchain de Tendermint.
- [tronlib](https://github.com/kslamph/tronlib) - SDK de Go completo y listo para producción para interactuar con la blockchain de TRON, compatible con tokens TRC20.

**[⬆ volver arriba](#contents)**

## Creación de bots

_Bibliotecas para crear bots y trabajar con ellos._

- [arikawa](https://github.com/diamondburned/arikawa) - Biblioteca y framework para la API de Discord.
- [bot](https://github.com/go-telegram/bot) - Biblioteca de bots de Telegram sin dependencias con componentes de interfaz adicionales.
- [echotron](https://github.com/NicoNex/echotron) - Biblioteca elegante y concurrente para bots de Telegram en Go.
- [go-joe](https://joe-bot.net) - Biblioteca de bots de propósito general inspirada en Hubot, pero escrita en Go.
- [go-sarah](https://github.com/oklahomer/go-sarah) - Framework para crear un bot para los servicios de chat que quieras, incluidos LINE, Slack, Gitter y más.
- [go-tg](https://github.com/mr-linch/go-tg) - Biblioteca cliente de Go generada a partir de la documentación oficial para acceder a la API de bots de Telegram, con todo lo necesario incluido para crear bots complejos.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - Biblioteca para escribir bots para el chat de twitch.tv
- [micha](https://github.com/onrik/micha) - Biblioteca de Go para la API de bots de Telegram.
- [slack-bot](https://github.com/innogames/slack-bot) - Bot de Slack listo para usar para desarrolladores perezosos: comandos personalizados, Jenkins, Jira, Bitbucket, Github...
- [slacker](https://github.com/slack-io/slacker) - Framework fácil de usar para crear bots de Slack.
- [telebot](https://github.com/tucnak/telebot) - Framework de bots de Telegram escrito en Go.
- [teleflow](https://github.com/kslamph/teleflow) - Framework de bots de Telegram sencillo y con seguridad de tipos, con flujos fluidos y gestión automática del estado.
- [telego](https://github.com/mymmrac/telego) - Biblioteca de la API de bots de Telegram para Golang con una implementación completa uno a uno de la API.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Cliente de bots de Telegram sencillo y limpio.
- [TG](https://github.com/enetx/tg) - Framework de bots de Telegram para Go.
- [wayback](https://github.com/wabarc/wayback) - Bot para Telegram, Mastodon, Slack y otras plataformas de mensajería que archiva páginas web.
- [ymsdk](https://github.com/rekurt/ymsdk) - SDK de Go para la API de bots de Yandex Messenger con modelos con seguridad de tipos, reintentos automáticos y gestión de límites de tasa.
   - [Wisp](https://github.com/wisp-trading/wisp) - Framework de trading orientado a eventos para Go. Spot, futuros perpetuos y mercados de predicción. Multiexchange (Bybit, Hyperliquid, Polymarket).

**[⬆ volver arriba](#contents)**

## Automatización de compilación

_Bibliotecas y herramientas que ayudan con la automatización de compilación._

- [1build](https://github.com/gopinath-langote/1build) - Herramienta de línea de comandos para gestionar sin fricciones los comandos específicos de cada proyecto.
- [air](https://github.com/cosmtrek/air) - Air: recarga en vivo para aplicaciones Go.
- [anko](https://github.com/GuilhermeCaruso/anko) - Vigilante de aplicaciones sencillo para múltiples lenguajes de programación.
- [gaper](https://github.com/maxclaus/gaper) - Compila y reinicia un proyecto Go cuando falla o cuando cambia algún archivo vigilado.
- [gilbert](https://go-gilbert.github.io) - Sistema de compilación y ejecutor de tareas para proyectos Go.
- [gob](https://github.com/kcmvp/gob) - Herramienta de compilación similar a [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) para proyectos Go.
- [goyek](https://github.com/goyek/goyek) - Crea canalizaciones de compilación en Go.
- [mage](https://github.com/magefile/mage) - Mage es una herramienta de compilación similar a make/rake que usa Go.
- [mmake](https://github.com/tj/mmake) - Make moderno.
- [realize](https://github.com/tockins/realize) - Sistema de compilación para Go con vigilancia de archivos y recarga en vivo. Ejecuta, compila y vigila los cambios en archivos con rutas personalizadas.
- [rex](https://github.com/rexrun-dev/rex) - Ejecutor universal de proyectos sin configuración. Detecta tu stack (Go, Node, Python, Rust, PHP, Zig, Elixir) y ejecuta el comando adecuado.
- [Task](https://github.com/go-task/task) - Alternativa sencilla a "Make".
- [taskctl](https://github.com/taskctl/taskctl) - Ejecutor de tareas concurrente.
- [xc](https://github.com/joerdav/xc) - Ejecutor de tareas con tareas definidas en README.md, markdown ejecutable.

**[⬆ volver arriba](#contents)**

## Línea de comandos

### Interfaces de consola avanzadas

_Bibliotecas para crear aplicaciones de consola e interfaces de usuario de consola._

- [asciigraph](https://github.com/guptarohit/asciigraph) - Paquete de Go para crear gráficos de líneas ASCII ligeros ╭┈╯ en aplicaciones de línea de comandos sin otras dependencias.
- [aurora](https://github.com/logrusorgru/aurora) - Colores ANSI para terminal compatibles con fmt.Printf/Sprintf.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - Dibuja en la terminal cajas altamente personalizables.
- [bubble-table](https://github.com/Evertras/bubble-table) - Componente de tabla interactiva para bubbletea.
- [bubbles](https://github.com/charmbracelet/bubbles) - Componentes de TUI para bubbletea.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - Framework de Go para crear aplicaciones de terminal, basado en The Elm Architecture.
- [chroma16](https://github.com/arceus-7/chroma16) - Genera una paleta de terminal armoniosa de 16 colores a partir de un único color o cadena semilla.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Herramienta de plantillas dinámicas de archivos de configuración para manifiestos de kubernetes o archivos de configuración generales.
- [ctc](https://github.com/wzshiming/ctc) - Biblioteca de colores para terminal, multiplataforma y no invasiva, que no requiere modificar el método Print.
- [fx](https://github.com/antonmedv/fx) - Visor y procesador de JSON para terminal.
- [go-ataman](https://github.com/workanator/go-ataman) - Biblioteca de Go para representar plantillas de texto con colores ANSI en terminales.
- [go-colorable](https://github.com/mattn/go-colorable) - Writer con soporte de color para Windows.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - Biblioteca de Go para la salida en color en terminales.
- [go-isatty](https://github.com/mattn/go-isatty) - isatty para golang.
- [go-palette](https://github.com/abusomani/go-palette) - Biblioteca de Go que ofrece definiciones de estilo elegantes y cómodas con colores ANSI. Totalmente compatible con la [biblioteca fmt](https://pkg.go.dev/fmt), a la que envuelve, para lograr diseños atractivos en la terminal.
- [go-prompt](https://github.com/c-bata/go-prompt) - Biblioteca para crear un prompt interactivo potente, inspirada en [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit).
- [go-tui](https://github.com/grindlemire/go-tui) - Framework declarativo de interfaces de usuario para terminal con plantillas al estilo de templ, diseño flexbox y un servidor de lenguaje para la compatibilidad con editores.
- [gocui](https://github.com/jroimartin/gocui) - Biblioteca minimalista de Go orientada a crear interfaces de usuario de consola.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - Aplica estilos al texto de la terminal.
- [gookit/color](https://github.com/gookit/color) - Biblioteca de herramientas de renderizado de color para terminal, compatible con salida de 16 colores, 256 colores y color RGB, y con Windows.
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf genera código base para proyectos Go con convenciones propias y calidad de producción mediante una CLI interactiva. Deja de copiar y pegar código esqueleto entre proyectos.
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI para explorar, comparar y editar archivos .env.
- [lazyteams](https://github.com/agmonetti/lazyteams) - Interfaz de usuario de terminal controlada por teclado para Microsoft Teams.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - Define de forma declarativa estilos de color, formato y diseño en la terminal.
- [loom](https://github.com/loom-go/loom) - Framework de componentes reactivos basado en señales para crear TUI.
- [marker](https://github.com/cyucelen/marker) - La forma más fácil de buscar y marcar cadenas para obtener salidas de terminal coloridas.
- [mpb](https://github.com/vbauerster/mpb) - Barras de progreso múltiples para aplicaciones de terminal.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Framework de TUI de alto rendimiento con arquitectura inspirada en Elm, renderizado Unicode perfecto y sistema de eventos sin asignaciones de memoria.
- [progressbar](https://github.com/schollz/progressbar) - Barra de progreso básica y segura para hilos que funciona en cualquier sistema operativo.
- [pterm](https://github.com/pterm/pterm) - Biblioteca para embellecer la salida de consola en cualquier plataforma con muchos componentes combinables.
- [simpletable](https://github.com/alexeyco/simpletable) - Tablas sencillas en una terminal con Go.
- [spinner](https://github.com/briandowns/spinner) - Paquete de Go para mostrar fácilmente un indicador giratorio (spinner) en la terminal, con opciones.
- [tabby](https://github.com/cheynewallace/tabby) - Pequeña biblioteca para crear tablas muy sencillas en Golang.
- [table](https://github.com/tomlazar/table) - Pequeña biblioteca para tablas en color en la terminal.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox es una biblioteca para crear interfaces multiplataforma basadas en texto.
- [termdash](https://github.com/mum4k/termdash) - Panel de control para terminal en Go basado en **termbox-go** e inspirado en [termui](https://github.com/gizak/termui).
- [termenv](https://github.com/muesli/termenv) - Soporte avanzado de estilos y colores ANSI para tus aplicaciones de terminal.
- [termui](https://github.com/gizak/termui) - Panel de control para terminal en Go basado en **termbox-go** e inspirado en [blessed-contrib](https://github.com/yaronn/blessed-contrib).
- [uilive](https://github.com/gosuri/uilive) - Biblioteca para actualizar la salida de la terminal en tiempo real.
- [uiprogress](https://github.com/gosuri/uiprogress) - Biblioteca flexible para mostrar barras de progreso en aplicaciones de terminal.
- [uitable](https://github.com/gosuri/uitable) - Biblioteca para mejorar la legibilidad de los datos tabulares en aplicaciones de terminal.
- [vhs](https://github.com/charmbracelet/vhs) - Tu grabadora de vídeo casera para la CLI: genera GIF de la terminal a partir de código para documentación y tutoriales.
- [yacspin](https://github.com/theckman/yacspin) - Yet Another CLi Spinner, otro paquete más para trabajar con indicadores giratorios en la terminal.

**[⬆ volver arriba](#contents)**

### CLI estándar

_Bibliotecas para crear aplicaciones de línea de comandos estándar o básicas._

- [acmd](https://github.com/cristalhq/acmd) - Paquete de CLI en Go sencillo, útil y con convenciones propias.
- [argparse](https://github.com/akamensky/argparse) - Analizador de argumentos de línea de comandos inspirado en el módulo argparse de Python.
- [argv](https://github.com/cosiner/argv) - Biblioteca de Go para dividir una cadena de línea de comandos en un array de argumentos usando la sintaxis de bash.
- [boa](https://github.com/GiGurra/boa) - Flags, variables de entorno, validación y archivos de configuración declarativos a partir de etiquetas de structs. Construido sobre cobra.
- [carapace](https://github.com/rsteube/carapace) - Generador de autocompletado de argumentos de comandos para spf13/cobra.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - Autocompletador de argumentos para múltiples shells y múltiples comandos.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - Define autocompletados sencillos mediante un archivo de especificación.
- [climax](https://github.com/tucnak/climax) - CLI alternativa con "rostro humano", en el espíritu del comando go.
- [clîr](https://github.com/leaanthony/clir) - Biblioteca de CLI sencilla y clara. Sin dependencias.
- [cmd](https://github.com/posener/cmd) - Amplía el paquete estándar `flag` para admitir subcomandos y más de forma idiomática.
- [cmdr](https://github.com/hedzr/cmdr) - Biblioteca de Go para interfaces de línea de comandos al estilo POSIX/GNU, similar a getopt.
- [cobra](https://github.com/spf13/cobra) - Commander para interacciones modernas de CLI en Go.
- [command-chain](https://github.com/rainu/go-command-chain) - Biblioteca de Go para configurar y ejecutar cadenas de comandos, como las tuberías de los shells de Unix.
- [commandeer](https://github.com/jaffee/commandeer) - Aplicaciones de CLI amigables para desarrolladores: configura flags, valores predeterminados y ayuda de uso a partir de campos y etiquetas de structs.
- [complete](https://github.com/posener/complete) - Escribe autocompletados de bash en Go + autocompletado de bash para el comando go.
- [console](https://github.com/reeflective/console) Biblioteca de aplicaciones de bucle cerrado para comandos de Cobra, con prompts de oh-my-posh y más.
- [Dnote](https://github.com/dnote/dnote) - Cuaderno de notas sencillo para la línea de comandos con sincronización entre varios dispositivos.
- [elvish](https://github.com/elves/elvish) - Lenguaje de programación expresivo y shell interactivo versátil.
- [env](https://github.com/codingconcepts/env) - Configuración del entorno basada en etiquetas para structs.
- [flaggy](https://github.com/integrii/flaggy) - Paquete de flags robusto e idiomático con excelente soporte de subcomandos.
- [flagvar](https://github.com/sgreben/flagvar) - Colección de tipos de argumentos de flags para el paquete estándar `flag` de Go.
- [flash-flags](https://github.com/agilira/flash-flags) - Biblioteca de análisis de flags ultrarrápida, sin dependencias y conforme a POSIX, que puede usarse como sustituto directo de la biblioteca estándar, con refuerzo de seguridad.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - Herramienta de terminal para la transferencia de archivos y mensajes entre pares sobre un protocolo UDP fiable personalizado.
- [getopt](https://github.com/jon-codes/getopt) - `getopt` preciso para Go, validado frente a la implementación de GNU libc.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - Herramienta de CLI para generar la estructura de aplicaciones Go con los patrones de arquitectura minimalista, estándar y hexagonal.
- [go-arg](https://github.com/alexflint/go-arg) - Análisis de argumentos basado en structs en Go.
- [go-flags](https://github.com/jessevdk/go-flags) - Analizador de opciones de línea de comandos para go.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Analizador de opciones para Go inspirado en la flexibilidad de GetOpt::Long de Perl.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Biblioteca personalizable de edición de líneas con atajos de teclado de Emacs, soporte de Unicode, autocompletado y resaltado de sintaxis. Se usa en el shell NYAGOS.
- [gocmd](https://github.com/devfacet/gocmd) - Biblioteca de Go para crear aplicaciones de línea de comandos.
- [goopt](https://github.com/napalu/goopt) - Framework de CLI declarativo para Go basado en etiquetas de structs, con un amplio conjunto de funciones como comandos/flags jerárquicos, i18n, autocompletado en el shell y validación.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Binario multillamada único y nativo de Go con 77 herramientas POSIX y una compatibilidad de más del 97 % con las pruebas de BusyBox.
- [hashicorp/cli](https://github.com/hashicorp/cli) - Biblioteca de Go para implementar interfaces de línea de comandos.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - Framework de aplicaciones de CLI con configuración automática e inyección de dependencias.
- [job](https://github.com/liujianping/job) - JOB convierte tu comando a corto plazo en un trabajo a largo plazo.
- [kingpin](https://github.com/alecthomas/kingpin) - Analizador de línea de comandos y de flags compatible con subcomandos (sustituido por `kong`; véase más abajo).
- [liner](https://github.com/peterh/liner) - Biblioteca de Go similar a readline para interfaces de línea de comandos.
- [mcli](https://github.com/jxskiss/mcli) - Biblioteca de CLI mínima pero muy potente para Go.
- [memsh](https://github.com/amjadjibon/memsh) - Shell bash virtual en Go: ejecuta comandos de shell sobre un sistema de archivos en memoria (afero), con soporte de plugins WASM y un servidor HTTP integrable.
- [mkideal/cli](https://github.com/mkideal/cli) - Paquete de línea de comandos completo y fácil de usar basado en etiquetas de structs de golang.
- [mow.cli](https://github.com/jawher/mow.cli) - Biblioteca de Go para crear aplicaciones de CLI con análisis y validación sofisticados de flags y argumentos.
- [neuron-cli](https://github.com/steevin/neuron-cli) - Gestor de conocimiento para terminal, local primero y compatible con Obsidian.
- [OpenCLI](https://github.com/bcdxn/opencli) - Especificación al estilo de OpenAPI para CLI; define tu interfaz en un documento independiente del lenguaje para generar documentación y código base del framework.
- [ops](https://github.com/nanovms/ops) - Constructor/orquestador de unikernels.
- [orpheus](https://github.com/agilira/orpheus) - Framework de CLI con refuerzo de seguridad, sistema de almacenamiento de plugins y funciones de observabilidad para producción.
- [pflag](https://github.com/spf13/pflag) - Sustituto directo del paquete flag de Go que implementa --flags al estilo POSIX/GNU.
- [readline](https://github.com/reeflective/readline) - Biblioteca de shell con funciones de interfaz modernas y fáciles de usar.
- [sflags](https://github.com/octago/sflags) - Generador de flags basado en structs para flag, urfave/cli, pflag, cobra, kingpin y otras bibliotecas.
- [structcli](https://github.com/leodido/structcli) - Elimina el código repetitivo de Cobra: crea CLI potentes y completas de forma declarativa a partir de structs de Go.
- [strumt](https://github.com/antham/strumt) - Biblioteca para crear cadenas de prompts.
- [subcmd](https://github.com/bobg/subcmd) - Otro enfoque para analizar y ejecutar subcomandos. Funciona junto con el paquete estándar `flag`.
- [teris-io/cli](https://github.com/teris-io/cli) - API sencilla y completa para crear interfaces de línea de comandos en Go.
- [urfave/cli](https://github.com/urfave/cli) - Paquete sencillo, rápido y divertido para crear aplicaciones de línea de comandos en Go (antes codegangsta/cli).
- [version](https://github.com/mszostok/version) - Recopila y muestra información de versión de la CLI en varios formatos, junto con avisos de actualización.
- [wlog](https://github.com/dixonwille/wlog) - Interfaz de registro sencilla compatible con colores multiplataforma y concurrencia.
- [wmenu](https://github.com/dixonwille/wmenu) - Estructura de menús fácil de usar para aplicaciones de CLI que piden a los usuarios que elijan entre opciones.

**[⬆ volver arriba](#contents)**

## Configuración

_Bibliotecas para analizar configuración._

- [aconfig](https://github.com/cristalhq/aconfig) - Cargador de configuración sencillo, útil y con convenciones propias.
- [argus](https://github.com/agilira/argus) - Vigilancia de archivos y gestión de configuración con búfer circular MPSC, estrategias adaptativas de procesamiento por lotes y análisis universal de formatos (JSON, YAML, TOML, INI, HCL, Properties).
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Proveedor de configuración para consumir datos de Azure App Configuration desde aplicaciones Go.
- [bcl](https://github.com/wkhere/bcl) - BCL es un lenguaje de configuración similar a HCL.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - Lector de configuración minimalista (desde archivos, ENV y donde quieras).
- [config](https://github.com/JeremyLoy/config) - Configuración de aplicaciones nativas de la nube. Vincula ENV a structs en solo dos líneas.
- [config](https://github.com/num30/config) - Configura tu aplicación mediante archivos, variables de entorno o flags en dos líneas de código.
- [config](https://github.com/andreiavrammsd/config) - Cargador de configuración basado en structs con un analizador dedicado de archivos de configuración, compatible con variables de entorno, flags, valores predeterminados y validación.
- [configuration](https://github.com/BoRuDar/configuration) - Biblioteca para inicializar structs de configuración a partir de variables de entorno, archivos, flags y la etiqueta 'default'.
- [configuro](https://github.com/sherifabdlnaby/configuro) - Framework de carga y validación de configuración desde ENV y archivos, con convenciones propias y orientado a aplicaciones conformes con 12-Factor.
- [confiq](https://github.com/greencoda/confiq) - Biblioteca de Go para decodificar formatos de datos estructurados en structs de configuración, compatible con múltiples formatos de datos.
- [confita](https://github.com/heetch/confita) - Carga en cascada la configuración desde múltiples backends en un struct.
- [conflate](https://github.com/the4thamigo-uk/conflate) - Biblioteca/herramienta para fusionar varios archivos JSON/YAML/TOML desde URL arbitrarias, validarlos contra un esquema JSON y aplicar los valores predeterminados definidos en el esquema.
- [enflag](https://github.com/atelpis/enflag) - Biblioteca de configuración orientada a contenedores y sin dependencias que unifica el análisis de variables de entorno y flags. Usa genéricos para la seguridad de tipos, sin reflexión ni etiquetas de structs.
- [env](https://github.com/caarlos0/env) - Analiza variables de entorno en structs de Go (con valores predeterminados).
- [env](https://github.com/junk1tm/env) - Paquete ligero para cargar variables de entorno en structs.
- [env](https://github.com/syntaqx/env) - Paquete de utilidades de entorno compatible con la deserialización en structs.
- [envconfig](https://github.com/vrischmann/envconfig) - Lee tu configuración desde variables de entorno.
- [envh](https://github.com/antham/envh) - Funciones auxiliares para gestionar variables de entorno.
- [envyaml](https://github.com/yuseferi/envyaml) - Lector de YAML con variables de entorno. Ayuda a tener los secretos como variables de entorno, pero cargarlos como configuración YAML estructurada.
- [fig](https://github.com/kkyr/fig) - Pequeña biblioteca para leer la configuración desde un archivo y desde variables de entorno (con validación y valores predeterminados).
- [genv](https://github.com/sakirsensoy/genv) - Lee variables de entorno fácilmente, con soporte para dotenv.
- [go-array](https://github.com/deatil/go-array) - Paquete de Go que lee o establece datos de mapas, slices o json.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - Paquete de Go que obtiene parámetros de AWS System Manager - Parameter Store.
- [go-cfg](https://github.com/dsbasko/go-cfg) - La biblioteca ofrece una forma unificada de leer datos de configuración en una estructura desde diversas fuentes, como variables de entorno, flags y archivos de configuración (.json, .yaml, .toml, .env).
- [go-conf](https://github.com/ThomasObenaus/go-conf) - Biblioteca sencilla para la configuración de aplicaciones basada en structs anotados. Permite leer la configuración desde variables de entorno, archivos de configuración y parámetros de línea de comandos.
- [go-config](https://github.com/MordaTeam/go-config) - Biblioteca sencilla y práctica para trabajar con la configuración de aplicaciones.
- [go-external-config](https://github.com/go-external-config/go) - Biblioteca de gestión de configuración para Go inspirada en Spring.
- [go-external-config/aws](https://github.com/go-external-config/aws) - Soporte de fuentes de propiedades de AWS para go-external-config.
- [go-external-config/consul](https://github.com/go-external-config/consul) - Soporte de fuentes de propiedades de Consul para go-external-config.
- [go-external-config/vault](https://github.com/go-external-config/vault) - Soporte de fuentes de propiedades de Vault para go-external-config.
- [go-ini](https://github.com/subpop/go-ini) - Paquete de Go que serializa y deserializa archivos INI.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - Utilidad de Go para cargar parámetros de configuración desde AWS SSM (Parameter Store).
- [go-up](https://github.com/ufoscout/go-up) - Biblioteca de configuración sencilla con resolución recursiva de marcadores de posición y sin magia.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - Validación de YAML consciente del origen con esquemas nativos de Go y soporte de JSON Schema.
- [GoCfg](https://github.com/Jagerente/gocfg) - Gestor de configuración con contratos basados en etiquetas de structs, proveedores de valores personalizados, analizadores y generación de documentación. Personalizable, pero sencillo.
- [goconfig](https://github.com/fulldump/goconfig) - Rellena structs de Go a partir de flags, variables de entorno, config.json y valores predeterminados con una precedencia determinista. Sin dependencias adicionales.
- [godotenv](https://github.com/joho/godotenv) - Port en Go de la biblioteca dotenv de Ruby (carga variables de entorno desde `.env`).
- [goenv](https://github.com/psyb0t/goenv) - Lee la variable de entorno ENV e indica si el proceso se ejecuta en producción o en desarrollo.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config es un gestor de configuración ligero pero potente para el lenguaje de programación Go.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - Configuración JSON modular. Mantén tus structs de configuración junto al código que configuran y delega el análisis en submódulos sin sacrificar la serialización completa de la configuración.
- [gonfig](https://github.com/milad-abbasi/gonfig) - Analizador de configuración basado en etiquetas que carga valores de distintos proveedores en un struct con seguridad de tipos.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - Carga la configuración desde variables de entorno en structs mediante reflexión, con valores predeterminados en etiquetas de structs y campos obligatorios.
- [gookit/config](https://github.com/gookit/config) - Gestión de la configuración de aplicaciones (cargar, obtener, establecer). Compatible con JSON, YAML, TOML, INI y HCL. Carga de múltiples archivos y fusión de datos con sobrescritura.
- [harvester](https://github.com/beatlabs/harvester) - Harvester, un paquete de configuración estática y dinámica fácil de usar, compatible con valores iniciales, variables de entorno e integración con Consul.
- [hedzr/store](https://github.com/hedzr/store) - Biblioteca de gestión de configuración extensible y de alto rendimiento, optimizada para datos jerárquicos.
- [hjson](https://github.com/hjson/hjson-go) - Human JSON, un formato de archivo de configuración para humanos. Sintaxis relajada, menos errores, más comentarios.
- [hocon](https://github.com/gurkankaymak/hocon) - Biblioteca de configuración para trabajar con el formato HOCON (un superconjunto de JSON pensado para humanos), compatible con funciones como variables de entorno, referencias a otros valores, comentarios y múltiples archivos.
- [ini](https://github.com/go-ini/ini) - Paquete de Go para leer y escribir archivos INI.
- [ini](https://github.com/wlevene/ini) - Biblioteca de análisis y escritura de INI: deserializa en structs, serializa a JSON, escribe archivos y vigila archivos.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - Biblioteca de Go para gestionar datos de configuración a partir de variables de entorno.
- [koanf](https://github.com/knadh/koanf) - Biblioteca ligera y extensible para leer la configuración en aplicaciones Go. Soporte integrado para JSON, TOML, YAML, variables de entorno y línea de comandos.
- [konf](https://github.com/nil-go/konf) - La API más sencilla para leer y vigilar la configuración desde archivos, variables de entorno, flags y nubes (p. ej., AWS, Azure, GCP).
- [konfig](https://github.com/lalamove/konfig) - Gestión de configuración componible, observable y eficiente para Go en la era del procesamiento distribuido.
- [kong](https://github.com/alecthomas/kong) - Analizador de línea de comandos compatible con estructuras de línea de comandos arbitrariamente complejas y con fuentes de configuración adicionales como YAML, JSON, TOML, etc. (sucesor de `kingpin`).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - Paquete sencillo y útil para leer variables de entorno.
- [nfigure](https://github.com/muir/nfigure) - Configuración por biblioteca basada en etiquetas de structs desde líneas de comandos (estilo POSIX y Go), entorno, JSON y YAML
- [onion](https://github.com/goraz/onion) - Configuración por capas para Go. Compatible con JSON, TOML, YAML, properties, etcd, variables de entorno y cifrado con PGP.
- [piper](https://github.com/Yiling-J/piper) - Envoltorio de Viper con herencia de configuración y generación de claves.
- [sonic](https://github.com/bytedance/sonic) - Biblioteca de serialización y deserialización de JSON extremadamente rápida.
- [swap](https://github.com/oblq/swap) - Instancia y configura structs de forma recursiva según el entorno de compilación (YAML, TOML, JSON y variables de entorno).
- [typenv](https://github.com/diegomarangoni/typenv) - Biblioteca minimalista y sin dependencias de variables de entorno tipadas.
- [uConfig](https://github.com/omeid/uconfig) - Gestión de configuración ligera, sin dependencias y ampliable.
- [viper](https://github.com/spf13/viper) - Configuración de Go con colmillos.
- [xdg](https://github.com/adrg/xdg) - Implementación en Go de la [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) y de los [directorios de usuario XDG](https://wiki.archlinux.org/index.php/XDG_user_directories).
- [yamagiconf](https://github.com/romshark/yamagiconf) - El "subconjunto seguro" de YAML para configuraciones de Go.
- [zerocfg](https://github.com/chaindead/zerocfg) - Gestión de configuración concisa y sin esfuerzo que evita el código repetitivo, compatible con múltiples fuentes con prioridades de sobrescritura.

**[⬆ volver arriba](#contents)**

## Integración continua

_Herramientas que ayudan con la integración continua._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse es una plataforma de CI distribuida.
- [Bencher](https://bencher.dev/) - Conjunto de herramientas de benchmarking continuo diseñadas para detectar regresiones de rendimiento en la CI.
- [CDS](https://github.com/ovh/cds) - Plataforma de código abierto de CI/CD y automatización DevOps de nivel empresarial.
- [dot](https://github.com/opnlabs/dot) - Sistema de integración continua mínimo y local primero que usa Docker para ejecutar trabajos de forma concurrente por etapas.
- [drone](https://github.com/drone/drone) - Drone es una plataforma de integración continua construida sobre Docker y escrita en Go.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - GitHub Action para hacer seguimiento de la cobertura de código en tus pull requests, con una bonita vista previa en HTML, de forma gratuita.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Usa las pruebas de fuzzing integradas de Go 1.18 en GitHub Actions.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Automatiza el versionado semántico de repositorios Git.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - GitHub Action que informa de problemas cuando la cobertura de pruebas está por debajo del umbral establecido.
- [gomason](https://github.com/nikogura/gomason) - Prueba, compila, firma y publica tus binarios de Go desde un espacio de trabajo limpio.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - Salida de go test para humanos.
- [goveralls](https://github.com/mattn/goveralls) - Integración de Go con Coveralls.io, el sistema de seguimiento continuo de la cobertura de código.
- [muffet](https://github.com/raviqqe/muffet) - Comprobador rápido de enlaces de sitios web escrito en Go; consulta las [alternativas](https://github.com/lycheeverse/lychee#features).
- [overalls](https://github.com/go-playground/overalls) - Coverprofile para proyectos Go con múltiples paquetes, para herramientas como goveralls.
- [PikoCI](https://github.com/pikoci/pikoci) - CI/CD autoalojado inspirado en Concourse. Un único binario, cualquier base de datos, cualquier cola. Canalizaciones en HCL, tipos de recursos y ejecutores intercambiables.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - Herramienta de pruebas de cobertura recursiva.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker es un fork comunitario del sistema de CI Drone.

**[⬆ volver arriba](#contents)**

## Preprocesadores CSS

_Bibliotecas para preprocesar archivos CSS._

- [go-css](https://github.com/napsy/go-css) - Analizador de CSS muy sencillo, escrito en Go.
- [go-libsass](https://github.com/wellington/go-libsass) - Envoltorio de Go para el proyecto libsass, 100 % compatible con Sass.

**[⬆ volver arriba](#contents)**

## Frameworks de integración de datos

_Frameworks para realizar ELT / ETL_

- [Benthos](https://github.com/benthosdev/benthos) - Puente de streaming de mensajes entre diversos protocolos.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - Framework de integración de datos ELT de alto rendimiento con arquitectura de plugins.
- [confluence2md](https://github.com/gkoos/confluence2md) - Rastreador y conversor de Confluence a Markdown.
- [omniparser](https://github.com/jf-tech/omniparser) - Biblioteca ETL versátil que analiza entradas de texto (CSV/txt/JSON/XML/EDI/X12/EDIFACT/etc.) en streaming y transforma los datos en una salida JSON mediante un esquema basado en datos.

**[⬆ volver arriba](#contents)**

## Estructuras de datos y algoritmos

### Empaquetado de bits y compresión

- [bingo](https://github.com/iancmcc/bingo) - Empaquetado rápido, sin asignaciones de memoria y que preserva el orden lexicográfico de tipos nativos en bytes.
- [binpacker](https://github.com/zhuangsirui/binpacker) - Empaquetador y desempaquetador binario que ayuda al usuario a crear flujos binarios personalizados.
- [bit](https://github.com/yourbasic/bit) - Estructura de datos de conjunto para Golang con funciones adicionales de manipulación de bits.
- [crunch](https://github.com/superwhiskers/crunch) - Paquete de Go que implementa búferes para manejar fácilmente diversos tipos de datos.
- [go-ef](https://github.com/amallia/go-ef) - Implementación en Go de la codificación Elias-Fano.
- [roaring](https://github.com/RoaringBitmap/roaring) - Paquete de Go que implementa conjuntos de bits comprimidos.

### Conjuntos de bits

- [bitmap](https://github.com/kelindar/bitmap) - Mapa/conjunto de bits denso, sin asignaciones de memoria y con SIMD en Go.
- [bitset](https://github.com/bits-and-blooms/bitset) - Paquete de Go que implementa conjuntos de bits.

### Filtros de Bloom y de cuco

- [bloom](https://github.com/bits-and-blooms/bloom) - Paquete de Go que implementa filtros de Bloom.
- [bloom](https://github.com/zhenjl/bloom) - Filtros de Bloom implementados en Go.
- [bloom](https://github.com/yourbasic/bloom) - Implementación de filtros de Bloom en Golang.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Otra implementación más de filtros de Bloom en Go, compatible con la biblioteca Guava de Java.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - Estructuras de datos probabilísticas para procesar flujos continuos e ilimitados.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - Filtro de cuco: un filtro de cuco completo, configurable y con un espacio optimizado en comparación con otras implementaciones, que incluye todas las funciones mencionadas en el artículo original.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - Filtro de cuco: una buena alternativa a un filtro de Bloom con contadores, implementada en Go.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Primera implementación escrita íntegramente en Go de los filtros Ribbon (en la práctica más pequeños que los de Bloom y Xor) para consultas aproximadas de pertenencia a conjuntos con un uso eficiente del espacio.
- [ring](https://github.com/TheTannerRyan/ring) - Implementación en Go de un filtro de Bloom de alto rendimiento y seguro para hilos.

### Colecciones de estructuras de datos y algoritmos

- [algorithms](https://github.com/shady831213/algorithms) - Algoritmos y estructuras de datos. Estudio del CLRS.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - Colección de estructuras de datos útiles, eficientes y seguras para hilos.
- [gods](https://github.com/emirpasic/gods) - Go Data Structures. Contenedores, conjuntos, listas, pilas, mapas, mapas bidireccionales, árboles, HashSet, etc.
- [gostl](https://github.com/liyue201/gostl) - Biblioteca de estructuras de datos y algoritmos para Go, diseñada para ofrecer funciones similares a las de la STL de C++.

### Iteradores

- [glinq](https://github.com/CreateLab/glinq) - Biblioteca de evaluación perezosa al estilo de LINQ con genéricos con seguridad de tipos, optimizaciones de rendimiento y cero dependencias.
- [gloop](https://github.com/alvii147/gloop) - Bucles prácticos usando la funcionalidad range-over-func de Go.
- [goterator](https://github.com/yaa110/goterator) - Implementación de iteradores que ofrece funcionalidades de map y reduce.
- [iter](https://github.com/disksing/iter) - Implementación en Go de los iteradores y algoritmos de la STL de C++.

### Mapas

Consulta también [Bases de datos](#database) para almacenes clave-valor más complejos, y [Árboles](#trees) para
otras implementaciones de mapas ordenados.

- [cmap](https://github.com/lrita/cmap) - Map concurrente y seguro para hilos para Go, que admite usar `interface{}` como clave y escala automáticamente los fragmentos.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Implementación de hash map concurrente, genérico, seguro para hilos y de alto rendimiento basada en Swiss Map.
- [dict](https://github.com/srfrog/dict) - Diccionarios (dict) al estilo de Python para Go.
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - Envoltorio genérico con seguridad de tipos para `sync.Map`, con paridad total de métodos y cero dependencias.
- [go-shelve](https://github.com/lucmq/go-shelve) - Objeto persistente similar a un map para el lenguaje de programación Go. Compatible con múltiples almacenes clave-valor integrados.
- [goradd/maps](https://github.com/goradd/maps) - Interfaz genérica de mapas para Go 1.18+; mapas seguros; mapas ordenados; mapas ordenados y seguros; etc.
- [hmap](https://github.com/lyonnee/hmap) - HMap es una implementación de Map concurrente, segura y con soporte de genéricos, diseñada para ofrecer una API fácil de usar.

### Estructuras de datos y algoritmos varios

- [combo](https://github.com/bobg/combo) - Operaciones combinatorias, incluidas permutaciones, combinaciones y combinaciones con repetición.
- [concurrent-writer](https://github.com/free/concurrent-writer) - Sustituto directo altamente concurrente de `bufio.Writer`.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Implementación en Go del sketch Count-Min-Log: conteo aproximado con contadores aproximados (como el sketch Count-Min, pero usando menos memoria).
- [FSM](https://github.com/enetx/fsm) - FSM para Go.
- [fsm](https://github.com/cocoonspace/fsm) - Paquete de máquinas de estados finitos.
- [genfuncs](https://github.com/nwillc/genfuncs) - Paquete de genéricos para Go 1.18+ inspirado en Sequence y Map de Kotlin.
- [go-generics](https://github.com/bobg/go-generics) - Utilidades genéricas para slices, maps, conjuntos, iteradores y goroutines.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - Índice geográfico en memoria.
- [go-rampart](https://github.com/francesconi/go-rampart) - Determina cómo se relacionan los intervalos entre sí.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - Quadtrees de regiones con localización eficiente de puntos y búsqueda de vecinos.
- [go-tuple](https://github.com/barweiss/go-tuple) - Implementación genérica de tuplas para Go 1.18+.
- [go18ds](https://github.com/daichi-m/go18ds) - Estructuras de datos de Go que usan los genéricos de Go 1.18.
- [gofal](https://github.com/xxjwxc/gofal) - API de fracciones para Go.
- [gogu](https://github.com/esimov/gogu) - Biblioteca completa, reutilizable y eficiente de funciones de utilidad genéricas y estructuras de datos seguras para concurrencia.
- [gota](https://github.com/kniren/gota) - Implementación de dataframes, series y métodos de manipulación de datos para Go.
- [hide](https://github.com/emvi/hide) - Tipo de ID con serialización a/desde hash para evitar enviar ID a los clientes.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Implementación de HyperLogLog con representación dispersa, corrección de sesgo LogLog-Beta y reducción de espacio TailCut.
- [quadtree](https://github.com/s0rg/quadtree) - Quadtree genérico, sin asignaciones de memoria y con un 100 % de cobertura de pruebas.
- [slices](https://github.com/twharmon/slices) - Funciones puras y genéricas para slices.
- [xsync](https://github.com/puzpuzpuz/xsync) - Estructuras de datos concurrentes y escalables como `xsync.Map`, una tabla hash genérica concurrente.

### Tipos anulables

- [nan](https://github.com/kak-tus/nan) - Estructuras anulables sin asignaciones de memoria en una sola biblioteca, con prácticas funciones de conversión, serializadores y deserializadores.
- [null](https://github.com/emvi/null) - Tipos anulables de Go que se pueden serializar/deserializar a/desde JSON.
- [typ](https://github.com/gurukami/typ) - Tipos nulos, conversión segura de tipos primitivos y obtención de valores de estructuras complejas.

### Colas

- [deheap](https://github.com/aalpar/deheap) - Montículo de doble extremo (montículo min-max) con acceso O(log n) tanto al elemento mínimo como al máximo.
- [deque](https://github.com/edwingeng/deque) - Cola de doble extremo altamente optimizada.
- [deque](https://github.com/gammazero/deque) - Deque (cola de doble extremo) rápida basada en búfer circular.
- [dqueue](https://github.com/vodolaz095/dqueue) - Cola diferida sencilla, en memoria, sin dependencias, probada en producción y segura para hilos.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - Cola FIFO concurrente.
- [hatchet](https://github.com/hatchet-dev/hatchet) - Cola de tareas distribuida y tolerante a fallos.
- [list](https://github.com/koss-null/list) - Lista doblemente enlazada genérica y segura para hilos con soporte completo de iteradores, y una lista simplemente enlazada intrusiva para uso embebido; un sustituto de container/list con muchas funciones.
- [memlog](https://github.com/embano1/memlog) - Estructura de datos en memoria fácil de usar, ligera, segura para hilos y de solo anexado, inspirada en Apache Kafka.
- [queue](https://github.com/adrianbrad/queue) - Múltiples implementaciones de colas genéricas y seguras para hilos para Go.

### Conjuntos

- [dsu](https://github.com/ihebu/dsu) - Implementación en Go de la estructura de datos de conjuntos disjuntos.
- [golang-set](https://github.com/deckarep/golang-set) - Conjuntos de alto rendimiento, seguros y no seguros para hilos, para Go.
- [goset](https://github.com/zoumo/goset) - Implementación útil de una colección Set para Go.
- [set](https://github.com/StudioSol/set) - Implementación sencilla de una estructura de datos de conjunto en Go usando LinkedHashMap.

### Análisis de texto

- [bleve](https://github.com/blevesearch/bleve) - Biblioteca moderna de indexación de texto para go.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Implementación en Go del árbol radix adaptativo.
- [go-edlib](https://github.com/hbollon/go-edlib) - Biblioteca de Go de algoritmos de comparación de cadenas y distancia de edición (Levenshtein, LCS, Hamming, Damerau levenshtein, Jaro-Winkler, etc.) compatible con Unicode.
- [levenshtein](https://github.com/agext/levenshtein) - Métricas de distancia y similitud de Levenshtein con costes de edición personalizables y una bonificación al estilo de Winkler para prefijos comunes.
- [levenshtein](https://github.com/agnivade/levenshtein) - Implementación para calcular la distancia de Levenshtein en Go.
- [mspm](https://github.com/BlackRabbitt/mspm) - Algoritmo de búsqueda de patrones multicadena para la recuperación de información.
- [parsefields](https://github.com/MonaxGT/parsefields) - Herramientas para analizar registros de tipo JSON y recopilar campos y eventos únicos.
- [ptrie](https://github.com/viant/ptrie) - Implementación de un árbol de prefijos.
- [radixtree](https://github.com/gammazero/radixtree) - Árbol radix adaptativo (árbol de prefijos o trie compacto).
- [trie](https://github.com/derekparker/trie) - Implementación de trie en Go.

### Árboles

- [graphlib](https://github.com/aio-arch/graphlib) - Biblioteca de ordenación topológica, ordenación y poda de grafos DAG.
- [hashsplit](http://github.com/bobg/hashsplit) - Divide flujos de bytes en fragmentos y organiza los fragmentos en árboles, con límites determinados por el contenido y no por la posición.
- [merkle](https://github.com/bobg/merkle) - Cálculo eficiente en espacio de hashes raíz de Merkle y pruebas de inclusión.
- [skiplist](https://github.com/MauriceGit/skiplist) - Implementación muy rápida de skip list en Go.
- [skiplist](https://github.com/gansidui/skiplist) - Implementación de skip list en Go.
- [skiplist](https://github.com/huandu/skiplist) - Skip list rápida y fácil de usar para Go.
- [treemap](https://github.com/igrmk/treemap) - Map genérico ordenado por clave que usa internamente un árbol rojo-negro.

### Tuberías

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - Módulo de Go que procesa trabajo de forma concurrente y devuelve la salida en un canal en el orden de entrada.
- [parapipe](https://github.com/nazar256/parapipe) - Canalización FIFO que paraleliza la ejecución en cada etapa manteniendo el orden de los mensajes y los resultados.
- [pipeline](https://github.com/hyfather/pipeline) - Implementación de canalizaciones con fan-in y fan-out.
- [pipelines](https://github.com/nxdir-s/pipelines) - Funciones de canalización genéricas para el procesamiento concurrente.

**[⬆ volver arriba](#contents)**

## Bases de datos

### Cachés

_Almacenes de datos con registros que caducan, almacenes de datos distribuidos en memoria o subconjuntos en memoria de bases de datos basadas en archivos._

- [bcache](https://github.com/iwanbk/bcache) - Biblioteca de Go de caché distribuida en memoria con consistencia eventual.
- [BigCache](https://github.com/allegro/bigcache) - Caché clave/valor eficiente para gigabytes de datos.
- [cache2go](https://github.com/muesli/cache2go) - Caché clave:valor en memoria que admite invalidación automática basada en tiempos de espera.
- [cachego](https://github.com/faabiosr/cachego) - Componente de caché para Golang con múltiples controladores.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - BigCache con soporte de clústeres y caducidad individual de elementos.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - Implementación completa de la API de caché de Oracle Coherence para aplicaciones Go que usa gRPC como transporte de red.
- [couchcache](https://github.com/codingsince1985/couchcache) - Microservicio de caché RESTful respaldado por un servidor Couchbase.
- [easycache](https://github.com/hugocarreira/easycache) - Forma sencilla de usar una caché en memoria en Golang (TTL/FIFO/LRU/LFU).
- [EchoVault](https://github.com/EchoVault/EchoVault) - Almacén de datos distribuido en memoria e integrable, compatible con clientes de Redis.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - Caché en memoria rápida y segura para hilos para un gran número de entradas. Minimiza la sobrecarga del GC.
- [GCache](https://github.com/bluele/gcache) - Biblioteca de caché con soporte para cachés con caducidad, LFU, LRU y ARC.
- [gdcache](https://github.com/ulovecode/gdcache) - Biblioteca de caché pura y no intrusiva implementada en golang; puedes usarla para implementar tu propia caché distribuida.
- [go-cache](https://github.com/viney-shih/go-cache) - Biblioteca de caché multicapa flexible para Go que gestiona cachés en memoria y compartidas adoptando el patrón Cache-Aside.
- [go-freelru](https://github.com/elastic/go-freelru) Biblioteca de hashmap LRU rápida, genérica y sin GC, con bloqueo, sharding, desalojo y caducidad opcionales.
- [go-gcache](https://github.com/szyhf/go-gcache) - Versión genérica de `GCache`, con soporte para cachés con caducidad, LFU, LRU y ARC.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - Biblioteca rápida de almacén/caché clave:valor en memoria. Cachés de punteros.
- [gocache](https://github.com/eko/gocache) - Biblioteca de caché completa para Go con múltiples almacenes (memoria, memcache, redis...), caché encadenable, cargable, con métricas y más.
- [gocache](https://github.com/yuseferi/gocache) - Biblioteca de caché para Go libre de condiciones de carrera, con alto rendimiento y purga automática
- [groupcache](https://github.com/golang/groupcache) - Groupcache es una biblioteca de caché y de llenado de caché, pensada como sustituto de memcached en muchos casos.
- [icache](https://github.com/mdaliyan/icache) - Paquete de caché de alto rendimiento, genérico, seguro para hilos y sin dependencias.
- [imcache](https://github.com/erni27/imcache) - Biblioteca de Go de caché genérica en memoria. Admite caducidad, caducidad deslizante, límite máximo de entradas, callbacks de desalojo y sharding.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - Biblioteca de caché unificada para Go compatible con caché multinivel.
- [nscache](https://github.com/no-src/nscache) - Framework de caché para Go compatible con múltiples controladores de fuentes de datos.
- [otter](https://github.com/maypok86/otter) - Caché sin bloqueos de alto rendimiento para Go. Muchas veces más rápida que Ristretto y similares.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache es un paquete de caché mínimo centrado en una estrategia de caché optimista y preventiva.
- [ristretto](https://github.com/dgraph-io/ristretto) - Caché para Go de alto rendimiento y limitada por memoria.
- [sturdyc](https://github.com/viccon/sturdyc) - Biblioteca de caché con funciones avanzadas de concurrencia diseñada para que las aplicaciones con mucha E/S sean robustas y de alto rendimiento.
- [theine](https://github.com/Yiling-J/theine-go) - Caché en memoria de alto rendimiento y casi óptima con caducidad TTL proactiva y genéricos.
- [timedmap](https://github.com/zekroTJA/timedmap) - Map con pares clave-valor que caducan.
- [ttlcache](https://github.com/jellydator/ttlcache) - Caché en memoria con caducidad de elementos y genéricos.
- [ttlcache](https://github.com/cheshir/ttlcache) - Almacenamiento clave-valor en memoria con TTL para cada registro.

### Bases de datos implementadas en Go

- [badger](https://github.com/dgraph-io/badger) - Almacén clave-valor rápido en Go.
- [bbolt](https://github.com/etcd-io/bbolt) - Base de datos clave/valor embebida para Go.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask es una base de datos clave-valor (KV) integrable, persistente y rápida escrita íntegramente en Go, con un rendimiento de lectura/escritura predecible, baja latencia y alto rendimiento gracias a la estructura en disco de bitcask (LSM+WAL).
- [buntdb](https://github.com/tidwall/buntdb) - Base de datos clave/valor en memoria, rápida e integrable para Go, con indexación personalizada y soporte espacial.
- [clover](https://github.com/ostafen/clover) - Base de datos NoSQL ligera orientada a documentos, escrita íntegramente en Golang.
- [cockroach](https://github.com/cockroachdb/cockroach) - Almacén de datos escalable, con replicación geográfica y transaccional.
- [Coffer](https://github.com/claygod/coffer) - Base de datos clave-valor ACID sencilla compatible con transacciones.
- [column](https://github.com/kelindar/column) - Almacén en memoria columnar, integrable y de alto rendimiento con indexación por mapas de bits y transacciones.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL es una base de datos SQL sobre blockchain.
- [Databunker](https://github.com/paranoidguy/databunker) - Servicio de almacenamiento de información de identificación personal (PII) creado para cumplir el RGPD y la CCPA.
- [dgraph](https://github.com/dgraph-io/dgraph) - Base de datos de grafos escalable, distribuida, de baja latencia y alto rendimiento.
- [DiceDB](https://github.com/DiceDB/dice) - Base de datos en memoria de código abierto, rápida y reactiva, optimizada para el hardware moderno. Mayor rendimiento y menores latencias medianas, lo que la hace ideal para las cargas de trabajo modernas.
- [diskv](https://github.com/peterbourgon/diskv) - Almacén clave-valor casero respaldado en disco.
- [dolt](https://github.com/dolthub/dolt) - Dolt – Es Git para los datos.
- [eliasdb](https://github.com/krotik/eliasdb) - Base de datos de grafos transaccional y sin dependencias, con API REST, búsqueda de frases y lenguaje de consulta similar a SQL.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - Base de datos embebida similar a MongoDB, escrita íntegramente en Go. Admite indexación y consultas complejas.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – Controlador de SQLite implementado íntegramente en Golang, sin CGO.
- [godis](https://github.com/hdt3213/godis) - Servidor y clúster de Redis de alto rendimiento implementado en Golang.
- [goleveldb](https://github.com/syndtr/goleveldb) - Implementación en Go de la base de datos clave/valor [LevelDB](https://github.com/google/leveldb).
- [hare](https://github.com/jameycribbs/hare) - Sistema de gestión de bases de datos sencillo que almacena cada tabla como un archivo de texto de JSON delimitado por líneas.
- [immudb](https://github.com/codenotary/immudb) - immudb es una base de datos inmutable, ligera y de alta velocidad para sistemas y aplicaciones, escrita en Go.
- [influxdb](https://github.com/influxdb/influxdb) - Almacén de datos escalable para métricas, eventos y análisis en tiempo real.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb es una base de datos NoSQL de alto rendimiento similar a Redis basada en LevelDB.
- [levigo](https://github.com/jmhodges/levigo) - Levigo es un envoltorio de Go para LevelDB.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB es una base de datos sencilla con menos de 1000 líneas de código, pensada para aprender.
- [LinDB](https://github.com/lindb/lindb) - LinDB es una base de datos de series temporales distribuida, escalable, de alto rendimiento y alta disponibilidad.
- [lotusdb](https://github.com/flower-corp/lotusdb) - Base de datos k/v rápida compatible con lsm y b+tree.
- [lynxdb](https://github.com/lynxbase/lynxdb) - Base de datos columnar ligera para el análisis de logs, con un lenguaje de consulta de estilo tubería inspirado en SPL.
- [MemHop](https://github.com/qyiun666/MemHop) - Base de datos de memoria cognitiva embebida para agentes de IA. Arquitectura de seis capas (L0-L5), canalización de consolidación Dream, recuperación RRF de tres canales (BM25 + vectores f16 + entidades), un único archivo .meh, escrita íntegramente en Go y sin infraestructura.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus es una base de datos vectorial para la gestión, el análisis y la búsqueda de embeddings.
- [minisql](https://github.com/RichardKnop/minisql) - Base de datos SQL embebida en un único archivo.
- [moss](https://github.com/couchbase/moss) - Moss es un motor de almacenamiento clave-valor LSM sencillo escrito 100 % en Go.
- [nanotdb](https://github.com/aymanhs/nanotdb) - Base de datos de series temporales y panel de control ligeros, sin dependencias y de solo anexado, optimizados para hardware de bajo consumo.
- [NoKV](https://github.com/feichai0017/NoKV) - Servicio de metadatos nativo para sistemas de archivos distribuidos, almacenamiento de objetos y cargas de trabajo de conjuntos de datos de IA.
- [NornicDB](https://github.com/orneryd/NornicDB) - Base de datos de grafos + vectorial de alto rendimiento (compatible con Neo4j y qDrant), centrada en la recuperación graph-rag de baja latencia para sistemas de IA. 
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb es un almacén clave/valor sencillo, rápido, integrable y persistente escrito íntegramente en Go. Admite transacciones totalmente serializables y muchas estructuras de datos, como list, set y sorted set.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Base de datos de objetos embebida (NoSQL) de alto rendimiento con API de Go.
- [pebble](https://github.com/cockroachdb/pebble) - Base de datos clave-valor en Go inspirada en RocksDB/LevelDB.
- [piladb](https://github.com/fern4lvarez/piladb) - Motor de base de datos RESTful ligero basado en estructuras de datos de pila.
- [pogreb](https://github.com/akrylysov/pogreb) - Almacén clave-valor embebido para cargas de trabajo con muchas lecturas.
- [prometheus](https://github.com/prometheus/prometheus) - Sistema de monitorización y base de datos de series temporales.
- [pudge](https://github.com/recoilme/pudge) - Almacén clave/valor rápido y sencillo escrito con la biblioteca estándar de Go.
- [redka](https://github.com/nalgeon/redka) - Redis reimplementado con SQLite.
- [rosedb](https://github.com/roseduan/rosedb) - Base de datos k-v embebida basada en LSM+WAL, compatible con string, list, hash, set y zset.
- [rotom](https://github.com/xgzlucario/rotom) - Pequeño servidor de Redis construido con Golang, compatible con los protocolos RESP.
- [rqlite](https://github.com/rqlite/rqlite) - La base de datos relacional, ligera y distribuida construida sobre SQLite.
- [tempdb](https://github.com/rafaeljesus/tempdb) - Almacén clave-valor para elementos temporales.
- [tidb](https://github.com/pingcap/tidb) - TiDB es una base de datos SQL distribuida. Inspirada en el diseño de Google F1.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Tu base de datos NoSQL impulsada por Golang.
- [unitdb](https://github.com/unit-io/unitdb) - Base de datos de series temporales rápida para IoT y aplicaciones de mensajería en tiempo real. Accede a unitdb con pub/sub sobre tcp o websocket usando la aplicación github.com/unit-io/unitd.
- [Vasto](https://github.com/chrislusf/vasto) - Almacén clave-valor distribuido de alto rendimiento. En disco. Consistencia eventual. Alta disponibilidad. Capaz de crecer o reducirse sin interrupción del servicio.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Base de datos de series temporales de código abierto, rápida, eficiente en recursos y escalable. Puede usarse como almacenamiento remoto a largo plazo para Prometheus. Compatible con PromQL.
- 
### Migración de esquemas de bases de datos

- [atlas](https://github.com/ariga/atlas) - Kit de herramientas para bases de datos. Una CLI diseñada para ayudar a las empresas a trabajar mejor con sus datos.
- [avro](https://github.com/khezen/avro) - Descubre esquemas SQL y conviértelos en esquemas AVRO. Consulta registros SQL y conviértelos en bytes AVRO.
- [bytebase](https://github.com/bytebase/bytebase) - Cambios seguros de esquemas de bases de datos y control de versiones para equipos DevOps.
- [darwin](https://github.com/GuiaBolso/darwin) - Biblioteca de evolución de esquemas de bases de datos para Go.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - CLI para migraciones versionadas de esquemas de bases de datos compatible con PostgreSQL, MySQL, ClickHouse, Tarantool y Apache Iceberg.
- [dbmate](https://github.com/amacneil/dbmate) - Herramienta de migración de bases de datos ligera e independiente del framework.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Fixtures al estilo de Django para la excelente biblioteca integrada database/sql de Golang.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - Paquete apto para CLI para gestionar migraciones de go-pg.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - Paquete de Go que ayuda a escribir migraciones con go-pg/pg.
- [goavro](https://github.com/linkedin/goavro) - Paquete de Go que codifica y decodifica datos Avro.
- [godfish](https://github.com/rafaelespinoza/godfish) - Gestor de migraciones de bases de datos que funciona con el lenguaje de consulta nativo. Compatible con cassandra, mysql, postgres y sqlite3.
- [goose](https://github.com/pressly/goose) - Herramienta de migración de bases de datos. Puedes gestionar la evolución de tu base de datos creando scripts incrementales en SQL o Go.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Sembrador de bases de datos sencillo para el ORM Gorm.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Asistente de migración de esquemas de bases de datos para el ORM Gorm.
- [libschema](https://github.com/muir/libschema) - Define tus migraciones por separado en cada biblioteca. Migraciones para bibliotecas de código abierto. MySQL y PostgreSQL.
- [migrate](https://github.com/golang-migrate/migrate) - Migraciones de bases de datos. CLI y biblioteca de Golang.
- [migrator](https://github.com/lopezator/migrator) - Biblioteca de migración de bases de datos para Go tremendamente sencilla.
- [migrator](https://github.com/larapulse/migrator) - Migrador de bases de datos MySQL diseñado para ejecutar las migraciones de tus funcionalidades y gestionar la actualización del esquema de la base de datos con código Go intuitivo.
- [schema](https://github.com/adlio/schema) - Biblioteca para incrustar migraciones de esquemas para bases de datos compatibles con database/sql dentro de tus binarios de Go.
- [skeema](https://github.com/skeema/skeema) - Sistema de gestión de esquemas en SQL puro para MySQL, compatible con sharding y con herramientas externas de cambio de esquema en línea.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - Migración y creación de bases de datos, ORM, etc. para MySQL, PostgreSQL y SQLite.
- [sql-migrate](https://github.com/rubenv/sql-migrate) - Herramienta de migración de bases de datos. Permite incrustar las migraciones en la aplicación usando go-bindata.
- [sqlize](https://github.com/sunary/sqlize) - Generador de migraciones de bases de datos. Permite generar migraciones SQL a partir del modelo y del SQL existente comparando sus diferencias.

### Herramientas de bases de datos

- [chproxy](https://github.com/Vertamedia/chproxy) - Proxy HTTP para la base de datos ClickHouse.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - Recopila inserciones pequeñas y envía solicitudes grandes a los servidores de ClickHouse.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - Analizador de SQL del dialecto de ClickHouse que produce un AST tipado, con funciones auxiliares de recorrido, formateo de ida y vuelta y una CLI.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - Ejecución de SQL en producción con ACL, registros y enlaces compartidos.
- [dbbench](https://github.com/sj14/dbbench) - Herramienta de benchmarking de bases de datos compatible con varias bases de datos y scripts.
- [dg](https://github.com/codingconcepts/dg) - Generador de datos rápido que produce archivos CSV a partir de datos relacionales generados.
- [filesql](https://github.com/nao1215/filesql) - Consulta con SQL archivos CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH y Fedwire a través de la API database/sql, con SQLite en memoria como respaldo.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - Pasarela de bases de datos nativa de la nube y framework para crear aplicaciones basadas en datos. Como las pasarelas de API, pero para bases de datos.
- [go-mysql](https://github.com/siddontang/go-mysql) - Conjunto de herramientas de Go para manejar el protocolo y la replicación de MySQL.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - Copias de seguridad serverless de PostgreSQL en S3 mediante AWS Lambda, con rotación diaria, mensual y anual.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - Soporte multiinquilino para bases de datos gestionadas con GORM.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - Analizador, formateador, linter y escáner de seguridad de SQL de alto rendimiento, compatible con múltiples dialectos y con un playground en WASM.
- [hasql](https://golang.yandex/hasql) - Biblioteca para acceder a instalaciones de bases de datos SQL con múltiples hosts.
- [octillery](https://github.com/knocknote/octillery) - Paquete de Go para hacer sharding de bases de datos (compatible con cualquier ORM o SQL puro).
- [onedump](https://github.com/liweiyi88/onedump) - Copias de seguridad de bases de datos desde distintos controladores a distintos destinos con un solo comando y una sola configuración.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Planificación avanzada para PostgreSQL.
- [pgrwl](https://github.com/pgrwl/pgrwl) - Copia de seguridad continua nativa de la nube para PostgreSQL.
- [pgwd](https://github.com/hrodrig/pgwd) - CLI que monitoriza el número de conexiones de PostgreSQL (totales, activas, inactivas y obsoletas) y envía notificaciones mediante Slack y/o Loki cuando se superan los umbrales. Compatible con Kubernetes (kubectl port-forward) y con contexto de ejecución opcional en las notificaciones.
- [pgweb](https://github.com/sosedoff/pgweb) - Explorador web de bases de datos PostgreSQL.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Cliente de CLI para PostgreSQL escrito en Go, inspirado en pgcli.
- [prep](https://github.com/hexdigest/prep) - Usa sentencias SQL preparadas sin cambiar tu código.
- [pREST](https://github.com/prest/prest) - Simplifica y acelera el desarrollo, ⚡ instantáneo, en tiempo real y de alto rendimiento en cualquier aplicación de Postgres, existente o nueva.
- [rdb](https://github.com/HDT3213/rdb) - Analizador de archivos RDB de Redis para desarrollo secundario y análisis de memoria.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb proporciona capacidad de réplicas de lectura para configuraciones con múltiples servidores de bases de datos.
- [sqly](https://github.com/nao1215/sqly) - Ejecuta SQL sobre archivos CSV, TSV, LTSV, JSON, Parquet y Excel en un shell interactivo, con SQLite en memoria como respaldo.
- [vitess](https://github.com/youtube/vitess) - vitess proporciona servidores y herramientas que facilitan el escalado de bases de datos MySQL para servicios web a gran escala.
- [wescale](https://github.com/wesql/wescale) - WeScale es un proxy de bases de datos diseñado para mejorar la escalabilidad, el rendimiento, la seguridad y la resiliencia de tus aplicaciones.
- [xsql](https://github.com/zx06/xsql) - Herramienta de CLI multibase de datos pensada primero para la IA, con protección de solo lectura y salida JSON estructurada.

### Constructores de consultas SQL

_Bibliotecas para construir y usar SQL._

- [bqb](https://github.com/nullism/bqb) - Constructor de consultas ligero y fácil de aprender.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - Biblioteca de Go de construcción de consultas de bases de datos para PostgreSQL.
- [builq](https://github.com/cristalhq/builq) - Construye fácilmente consultas SQL en Go.
- [dba](https://github.com/kran/dba) - Constructor de consultas SQL para SQL escrito a mano, que añade condiciones dinámicas, marcadores de posición adaptados al dialecto y encadenamiento inmutable.
- [dbq](https://github.com/rocketlaunchr/dbq) - Operaciones de bases de datos sin código repetitivo para Go.
- [Dotsql](https://github.com/gchaincl/dotsql) - Biblioteca de Go que te ayuda a mantener los archivos sql en un solo lugar y a usarlos con facilidad.
- [gendry](https://github.com/didi/gendry) - Constructor de SQL no invasivo y potente vinculador de datos.
- [godbal](https://github.com/xujiajun/godbal) - Capa de abstracción de bases de datos (dbal) para go. Admite un constructor de SQL y obtener resultados fácilmente.
- [goqu](https://github.com/doug-martin/goqu) - Constructor de SQL y biblioteca de consultas idiomáticos.
- [gosql](https://github.com/twharmon/gosql) - Constructor de consultas SQL con mejor soporte para valores nulos.
- [Hotcoal](https://github.com/motrboat/hotcoal) - Protege tu SQL escrito a mano contra la inyección.
- [igor](https://github.com/galeone/igor) - Capa de abstracción para PostgreSQL que admite funcionalidades avanzadas y usa una sintaxis similar a la de gorm.
- [jet](https://github.com/go-jet/jet) - Framework para escribir consultas SQL con seguridad de tipos en Go, con la capacidad de convertir fácilmente el resultado de las consultas en la estructura de objetos arbitraria que se desee.
- [obreron](https://github.com/profe-ajedrez/obreron) - Constructor de SQL rápido y barato que hace una sola cosa: construir SQL.
- [ormlite](https://github.com/pupizoid/ormlite) - Paquete ligero con algunas funciones al estilo de un ORM y funciones auxiliares para bases de datos sqlite.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - Potentes métodos de recuperación de datos, así como capacidades de construcción de consultas independientes de la base de datos.
- [patcher](https://github.com/Jacobbrewer1/patcher) - Potente constructor de consultas SQL que genera automáticamente consultas SQL a partir de structs.
- [qrafter](https://github.com/SennovE/qrafter) - Constructor de consultas SQL con seguridad de tipos, con renderizado adaptado al dialecto, introspección de esquemas y generación de migraciones.
- [qry](https://github.com/HnH/qry) - Herramienta que genera constantes a partir de archivos con consultas SQL sin procesar.
- [relica](https://github.com/coregx/relica) - Constructor de consultas de bases de datos con seguridad de tipos y cero dependencias en producción, con caché LRU de sentencias, operaciones por lotes y soporte para JOIN, subconsultas, CTE y funciones de ventana.
- [sg](https://github.com/go-the-way/sg) - Generador de SQL para generar SQL estándar (compatible con CRUD) escrito en Go.
- [sq](https://github.com/bokwoon95/go-structured-query) - Constructor de SQL con seguridad de tipos y mapeador de structs para Go.
- [sqlc](https://github.com/kyleconroy/sqlc) - Genera código con seguridad de tipos a partir de SQL.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - Paquete para operaciones CRUD de SQL genéricas y con seguridad de tipos, con paginación, transacciones, depuración y extensiones personalizadas de SQL sin procesar.
- [sqlf](https://github.com/leporo/sqlf) - Constructor de consultas SQL rápido.
- [sqlh](https://github.com/kirill-scherba/sqlh) - Asistente de SQL sin código repetitivo con etiquetas de structs y genéricos de Go (CRUD, UPSERT, JOIN, benchmarks).
- [sqlingo](https://github.com/lqs/sqlingo) - DSL ligero para construir SQL en Go.
- [sqrl](https://github.com/elgris/sqrl) - Constructor de consultas SQL, fork de Squirrel con un rendimiento mejorado.
- [Squalus](https://gitlab.com/qosenergy/squalus) - Capa fina sobre el paquete SQL de Go que facilita la ejecución de consultas.
- [Squirrel](https://github.com/Masterminds/squirrel) - Biblioteca de Go que te ayuda a construir consultas SQL.
- [xo](https://github.com/knq/xo) - Genera código Go idiomático para bases de datos a partir de definiciones de esquemas existentes o de consultas personalizadas, compatible con PostgreSQL, MySQL, SQLite, Oracle y Microsoft SQL Server.

**[⬆ volver arriba](#contents)**

## Controladores de bases de datos

### Interfaces para múltiples backends

- [cayley](https://github.com/google/cayley) - Base de datos de grafos compatible con múltiples backends.
- [dsc](https://github.com/viant/dsc) - Conectividad de almacenes de datos para SQL, NoSQL y archivos estructurados.
- [dynamo](https://github.com/fogfish/dynamo) - Abstracción clave-valor sencilla para almacenar tipos de datos algebraicos y de datos enlazados en los servicios de almacenamiento de AWS: AWS DynamoDB y AWS S3.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - Gestor de transacciones con múltiples adaptadores (sql, sqlx, gorm, mongo...) que controla los límites de las transacciones.
- [gokv](https://github.com/philippgille/gokv) - Abstracción sencilla de almacenes clave-valor e implementaciones para Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB y muchos más).
- [transactor](https://github.com/metalfm/transactor) - Abstracción de límites de transacciones con seguridad de tipos y adaptadores para database/sql, sqlx y pgx.

### Controladores de bases de datos relacionales

- [avatica](https://github.com/apache/calcite-avatica-go) - Controlador SQL de Apache Avatica/Phoenix para database/sql.
- [bgc](https://github.com/viant/bgc) - Conectividad de almacenes de datos para BigQuery en go.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Controlador SQL del RDBMS Firebird para Go.
- [go-adodb](https://github.com/mattn/go-adodb) - Controlador de Microsoft ActiveX Object DataBase para go que usa database/sql.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Controlador de Microsoft MSSQL para Go.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Controlador oficial de Go de Microsoft para SQL Server, Azure SQL, Azure Synapse, SQL database in Fabric y Fabric Data Warehouse. Compatible con Azure AD, Always Encrypted y operaciones masivas.
- [go-oci8](https://github.com/mattn/go-oci8) - Controlador de Oracle para go que usa database/sql.
- [go-rqlite](https://github.com/rqlite/gorqlite) - Cliente de Go para rqlite que ofrece abstracciones fáciles de usar para trabajar con la API de rqlite.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Controlador de MySQL para Go.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - Controlador de SQLite3 para go que usa database/sql.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - Este módulo de Go es compatible con el controlador database/sql. Permite incrustar SQLite en tu aplicación, proporciona acceso directo a su API de C, admite el VFS de SQLite e incluye además un controlador para GORM.
- [godror](https://github.com/godror/godror) - Controlador de Oracle para Go que usa el controlador ODPI-C.
- [gofreetds](https://github.com/minus5/gofreetds) - Controlador de Microsoft MSSQL. Envoltorio de Go sobre [FreeTDS](https://www.freetds.org).
- [KSQL](https://github.com/VinGarcia/ksql) - Biblioteca SQL para Golang sencilla y potente.
- [pgx](https://github.com/jackc/pgx) - Controlador de PostgreSQL compatible con funciones que van más allá de las expuestas por database/sql.
- [pig](https://github.com/alexeyco/pig) - Envoltorio sencillo de [pgx](https://github.com/jackc/pgx) para ejecutar consultas y [escanear](https://github.com/georgysavva/scany) sus resultados fácilmente.
- [pq](https://github.com/lib/pq) - Controlador de Postgres escrito íntegramente en Go para database/sql.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - SQLite con Go puro.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - Añade hooks a cualquier controlador de database/sql.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - El paquete sqlite es un controlador de sql/database que usa un port sin CGo de la biblioteca SQLite3 de C.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Controlador de SurrealDB para Go.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - Controlador nativo y de database/sql para YDB (Yandex Database).

### Controladores de bases de datos NoSQL

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Cliente de Aerospike en lenguaje Go.
- [arangolite](https://github.com/solher/arangolite) - Controlador ligero de golang para ArangoDB.
- [asc](https://github.com/viant/asc) - Conectividad de almacenes de datos para Aerospike en go.
- [forestdb](https://github.com/couchbase/goforestdb) - Bindings de Go para ForestDB.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Cliente de Couchbase en Go.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - Biblioteca de Mongo para Go basada en el controlador oficial, con operaciones de documentos simplificadas, vinculación genérica de structs a colecciones, CRUD integrado, agregación, actualización automática de campos, validación de structs, hooks y programación basada en plugins.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Biblioteca cliente de Go para Pilosa.
- [go-rejson](https://github.com/nitishm/go-rejson) - Cliente de Golang para el módulo ReJSON de redislabs que usa el cliente Redigo de golang. Almacena y manipula structs como objetos JSON en redis con facilidad.
- [gocb](https://github.com/couchbase/gocb) - SDK oficial de Couchbase para Go.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Cliente REST y controlador estándar `database/sql` para Azure Cosmos DB.
- [gocql](https://gocql.github.io) - Controlador en lenguaje Go para Apache Cassandra.
- [godis](https://github.com/piaohao/godis) - Cliente de redis implementado en golang, inspirado en jedis.
- [godscache](https://github.com/defcronyke/godscache) - Envoltorio para el paquete Go Datastore de Google Cloud Platform que añade caché mediante memcached.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Biblioteca cliente de memcache para el lenguaje de programación Go.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Cliente binario de Memcached para Go compatible con sharding mediante hashing consistente, además de SASL.
- [gorethink](https://github.com/dancannon/gorethink) - Controlador en lenguaje Go para RethinkDB.
- [goriak](https://github.com/zegl/goriak) - Controlador en lenguaje Go para Riak KV.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik proporciona una biblioteca cliente común de Go y GopherJS para CouchDB, PouchDB y bases de datos similares.
- [mgm](https://github.com/kamva/mgm) - ODM basado en modelos de MongoDB para Go (basado en el controlador oficial de MongoDB).
- [mgo](https://github.com/globalsign/mgo) - (sin mantenimiento) Controlador de MongoDB para el lenguaje Go que implementa una selección amplia y bien probada de funciones bajo una API muy sencilla que sigue los modismos estándar de Go.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Controlador oficial de MongoDB para el lenguaje Go.
- [neo4j](https://github.com/cihangir/neo4j) - Bindings de la API REST de Neo4j para Golang.
- [neoism](https://github.com/jmcvetta/neoism) - Cliente de Neo4j para Golang.
- [qmgo](https://github.com/qiniu/qmgo) - El controlador de MongoDB para Go. Se basa en el controlador oficial de MongoDB, pero es más fácil de usar, como Mgo.
- [redeo](https://github.com/bsm/redeo) - Servidores/servicios TCP compatibles con el protocolo de Redis.
- [redigo](https://github.com/gomodule/redigo) - Redigo es un cliente de Go para la base de datos Redis.
- [redis](https://github.com/redis/go-redis) - Cliente de Redis para Golang.
- [rueidis](http://github.com/rueian/rueidis) - Cliente rápido de Redis RESP3 con pipelining automático y caché del lado del cliente asistida por el servidor.
- [xredis](https://github.com/shomali11/xredis) - Cliente de Redis con seguridad de tipos, personalizable, limpio y fácil de usar.

### Bases de datos de búsqueda y analíticas

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - Cliente SQL de ClickHouse para Go compatible con `database/sql`.
- [effdsl](https://github.com/sdqri/effdsl) - Constructor de consultas de Elasticsearch para Go.
- [elastic](https://github.com/olivere/elastic) - Cliente de Elasticsearch para Go.
- [elasticsql](https://github.com/cch123/elasticsql) - Convierte sql en el DSL de elasticsearch en Go.
- [elastigo](https://github.com/mattbaird/elastigo) - Biblioteca cliente de Elasticsearch.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Cliente oficial de Elasticsearch para Go.
- [goes](https://github.com/OwnLocal/goes) - Biblioteca para interactuar con Elasticsearch.
- [skizze](https://github.com/skizzehq/skizze) - Servicio y almacenamiento de estructuras de datos probabilísticas.
- [zoekt](https://github.com/sourcegraph/zoekt) - Búsqueda de código rápida basada en trigramas.

**[⬆ volver arriba](#contents)**

## Fecha y hora

_Bibliotecas para trabajar con fechas y horas._

- [approx](https://github.com/goschtalt/approx) - Extensión de Duration que permite analizar e imprimir duraciones en días, semanas y años.
- [carbon](https://github.com/dromara/carbon) - Paquete de tiempo sencillo, semántico y amigable para desarrolladores para golang.
- [carbon](https://github.com/uniplaces/carbon) - Extensión sencilla de Time con muchos métodos de utilidad, portada desde la biblioteca Carbon de PHP.
- [cronrange](https://github.com/1set/cronrange) - Analiza expresiones de rangos de tiempo al estilo de Cron y comprueba si una hora dada está dentro de alguno de los rangos.
- [date](https://github.com/rickb777/date) - Amplía Time para trabajar con fechas, rangos de fechas, intervalos de tiempo, periodos y horas del día.
- [dateparse](https://github.com/araddon/dateparse) - Analiza fechas sin conocer el formato de antemano.
- [durafmt](https://github.com/hako/durafmt) - Biblioteca de formateo de duraciones de tiempo para Go.
- [feiertage](https://github.com/wlbr/feiertage) - Conjunto de funciones para calcular los días festivos en Alemania, incluida la especialización por estados federados (Bundesländer). Cosas como Pascua, Pentecostés, Acción de Gracias...
- [go-anytime](https://github.com/ijt/go-anytime) - Analiza fechas/horas como "next dec 22nd at 3pm" y rangos como "from today until next thursday" sin conocer el formato de antemano.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - Biblioteca completa de utilidades de fechas para Go, inspirada en date-fns, con más de 140 funciones puras e inmutables.
- [go-datebin](https://github.com/deatil/go-datebin) - Paquete sencillo de análisis de fechas y horas.
- [go-faketime](https://github.com/harkaitz/go-faketime) - Un `time.Now()` sencillo que respeta la utilidad faketime(1).
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Implementación del calendario persa (Hégira solar) en Go (golang).
- [go-str2duration](https://github.com/xhit/go-str2duration) - Convierte cadenas en duraciones. Admite las cadenas devueltas por time.Duration y más.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - Calcula las horas de salida y puesta del sol para una ubicación dada.
- [go-week](https://github.com/stoewer/go-week) - Paquete eficiente para trabajar con fechas de semana ISO8601.
- [gostradamus](https://github.com/bykof/gostradamus) - Paquete de Go para trabajar con fechas.
- [iso8601](https://github.com/relvacode/iso8601) - Analiza eficientemente fechas y horas ISO8601 sin expresiones regulares.
- [kair](https://github.com/GuilhermeCaruso/kair) - Fecha y hora: biblioteca de formateo para Golang.
- [now](https://github.com/jinzhu/now) - Now es un kit de herramientas de tiempo para golang.
- [strftime](https://github.com/awoodbeck/strftime) - Formateador strftime compatible con C99.
- [timespan](https://github.com/SaidinWoT/timespan) - Para interactuar con intervalos de tiempo, definidos como una hora de inicio y una duración.
- [timeutil](https://github.com/leekchan/timeutil) - Extensiones útiles (Timedelta, Strftime...) para el paquete time de golang.
- [tuesday](https://github.com/osteele/tuesday) - Función Strftime compatible con Ruby.

**[⬆ volver arriba](#contents)**

## Sistemas distribuidos

_Paquetes que ayudan a construir sistemas distribuidos._

- [arpc](https://github.com/lesismal/arpc) - Comunicación de red más eficaz, compatible con llamadas bidireccionales, notificaciones y difusión.
- [bedrock](https://github.com/z5labs/bedrock) - Proporciona una base mínima, modular y componible para desarrollar rápidamente servicios y frameworks más específicos para cada caso de uso en Go.
- [capillaries](https://github.com/capillariesio/capillaries) - Framework de procesamiento distribuido de datos por lotes.
- [circuit](https://github.com/schigh/circuit) - Circuit breaker con recuperación gradual mediante limitación probabilística.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Biblioteca del patrón comando distribuido de alto rendimiento para Go.
- [committer](https://github.com/vadiminshakov/committer) - Sistema de gestión de transacciones distribuidas (implementación de 2PC/3PC).
- [consistent](https://github.com/buraksezer/consistent) - Hashing consistente con cargas acotadas.
- [consistenthash](https://github.com/mbrostami/consistenthash) - Hashing consistente con réplicas configurables.
- [dht](https://github.com/anacrolix/dht) - Implementación de la DHT Kademlia de BitTorrent.
- [digota](https://github.com/digota/digota) - Microservicio de comercio electrónico con grpc.
- [dot](https://github.com/dotchain/dot/) - Sincronización distribuida mediante transformación operacional (OT).
- [doublejump](https://github.com/edwingeng/doublejump) - Versión renovada del jump consistent hash de Google.
- [dragonboat](https://github.com/lni/dragonboat) - Biblioteca Raft multigrupo completa y de alto rendimiento en Go.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Ofrece distribución de archivos y aceleración de imágenes eficiente, estable y segura basada en tecnología p2p, para ser la mejor práctica y la solución estándar en arquitecturas nativas de la nube.
- [drmaa](https://github.com/dgruber/drmaa) - Biblioteca de envío de trabajos para planificadores de clústeres basada en el estándar DRMAA.
- [dynamolock](https://cirello.io/dynamolock) - Implementación de bloqueos distribuidos respaldada por DynamoDB.
- [dynatomic](https://github.com/tylfin/dynatomic) - Biblioteca para usar DynamoDB como contador atómico.
- [emitter-io](https://github.com/emitter-io/emitter) - Plataforma de publicación-suscripción de alto rendimiento, distribuida, segura y de baja latencia construida con MQTT, Websockets y amor.
- [evans](https://github.com/ktr0731/evans) - Evans: cliente gRPC universal más expresivo.
- [failured](https://github.com/andy2046/failured) - Detector de fallos de acumulación adaptativo para sistemas distribuidos.
- [flowgraph](https://github.com/vectaport/flowgraph) - Paquete de programación basada en flujos.
- [gleam](https://github.com/chrislusf/gleam) - Sistema map/reduce distribuido, rápido y escalable escrito íntegramente en Go y Luajit, que combina la alta concurrencia de Go con el alto rendimiento de Luajit; funciona de forma independiente o distribuida.
- [glow](https://github.com/chrislusf/glow) - Procesamiento distribuido de big data escalable y fácil de usar, Map-Reduce y ejecución de DAG, todo en Go puro.
- [gmsec](https://github.com/gmsec/micro) - Framework de desarrollo de sistemas distribuidos en Go.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - Framework de microservicios descentralizado basado en el protocolo gossip y la especificación OpenAPI 3.0. Su CLI go-doudou integrada, centrada en el low-code y el desarrollo rápido, puede impulsar tu productividad.
- [go-eagle](https://github.com/go-eagle/eagle) - Framework de Go para API o microservicios con prácticas herramientas de scaffolding.
- [go-jump](https://github.com/dgryski/go-jump) - Port de la función de hash consistente "Jump" de Google.
- [go-kit](https://github.com/go-kit/kit) - Kit de herramientas de microservicios con soporte para descubrimiento de servicios, balanceo de carga, transportes intercambiables, seguimiento de solicitudes, etc.
- [go-micro](https://github.com/micro/go-micro) - Framework de desarrollo de sistemas distribuidos.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - Bloqueo distribuido basado en MySQL.
- [go-pdu](https://github.com/pdupub/go-pdu) - Red social descentralizada basada en la identidad.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Biblioteca creada para dar soporte a la definición de comprobaciones de estado asíncronas para servicios de golang.
- [go-zero](https://github.com/tal-tech/go-zero) - Framework web y rpc. Nació para garantizar la estabilidad de los sitios con mucho tráfico mediante un diseño resiliente. Su goctl integrado mejora enormemente la productividad del desarrollo.
- [gorpc](https://github.com/valyala/gorpc) - Biblioteca RPC sencilla, rápida y escalable para cargas elevadas.
- [grpc-go](https://github.com/grpc/grpc-go) - Implementación en lenguaje Go de gRPC. RPC basado en HTTP/2.
- [health](https://github.com/schigh/health) - Comprobador de estado para servicios Go con soporte para sondas de Kubernetes.
- [hprose](https://github.com/hprose/hprose-golang) - Biblioteca RPC muy novedosa, compatible ya con más de 25 lenguajes.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - El paquete jsonrpc ayuda a implementar JSON-RPC 2.0.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - Implementación de cliente HTTP de JSON-RPC 2.0.
- [K8gb](https://github.com/k8gb-io/k8gb) - Balanceador global de Kubernetes nativo de la nube.
- [Kitex](https://github.com/cloudwego/kitex) - Framework RPC para Golang de alto rendimiento y gran extensibilidad que ayuda a los desarrolladores a crear microservicios. Si el rendimiento y la extensibilidad son tus principales preocupaciones al desarrollar microservicios, Kitex puede ser una buena opción.
- [Kratos](https://github.com/go-kratos/kratos) - Framework de microservicios en Go de diseño modular y fácil de usar.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - Flujos de mensajes ligeros y tolerantes a fallos para NATS.
- [lock](https://github.com/ubgo/lock) - Familia de bloqueos distribuidos con una única interfaz de Go y cinco backends (filelock, flock, Redis, Postgres, etcd): tokens de fencing, modo semáforo y hooks de observabilidad en todos los backends.
- [lura](https://github.com/luraproject/lura) - Framework de pasarelas de API de rendimiento ultraalto con middlewares.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - Broker MQTT v5/v3 totalmente conforme con la especificación, integrable y de alto rendimiento para IoT, domótica y pub/sub.
- [NATS](https://github.com/nats-io/nats-server) - NATS es un sistema de comunicaciones sencillo, seguro y eficiente para sistemas, servicios y dispositivos digitales.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Instrumentación de OpenTelemetry en tiempo de compilación para Golang.
- [oras](https://github.com/oras-project/oras) - CLI y biblioteca para artefactos OCI en registros de contenedores.
- [outbox](https://github.com/oagudo/outbox) - Biblioteca ligera para el patrón de outbox transaccional en Go, no vinculada a ninguna base de datos relacional ni a ningún broker específicos.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer es una biblioteca de go que implementa el patrón outbox.
- [pglock](https://cirello.io/pglock) - Implementación de bloqueos distribuidos respaldada por PostgreSQL.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Servidor-cliente JSON-RPC para Golang con especificación en Protobuf.
- [raft](https://github.com/hashicorp/raft) - Implementación en Golang del protocolo de consenso Raft, de HashiCorp.
- [raft](https://github.com/etcd-io/raft) - Implementación en Go del protocolo de consenso Raft, de CoreOS.
- [rain](https://github.com/cenkalti/rain) - Cliente y biblioteca de BitTorrent.
- [redis-lock](https://github.com/bsm/redislock) - Implementación simplificada de bloqueos distribuidos usando Redis.
- [resgate](https://resgate.io/) - Pasarela de API en tiempo real para crear API REST, en tiempo real y RPC, en la que todos los clientes se sincronizan sin fisuras.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - Framework para microservicios con descubrimiento de servicios, balanceo de carga y funciones relacionadas.
- [rpcx](https://github.com/smallnest/rpcx) - Framework de servicios RPC distribuido y extensible mediante plugins, similar a Dubbo de alibaba.
- [Semaphore](https://github.com/jexia/semaphore) - Orquestador de (micro)servicios sencillo.
- [servicepack](https://github.com/psyb0t/servicepack) - Framework para ejecutar varios servicios de forma concurrente en un único binario, en local o distribuidos entre máquinas.
- [sleuth](https://github.com/ursiform/sleuth) - Biblioteca para el autodescubrimiento p2p sin maestro y RPC entre servicios HTTP (usando [ZeroMQ](https://github.com/zeromq/libzmq)).
- [sponge](https://github.com/zhufuyi/sponge) - Framework de desarrollo distribuido que integra generación automática de código, los frameworks gin y grpc y frameworks de desarrollo base.
- [Tarmac](https://github.com/tarmac-project/tarmac) - Framework para escribir funciones, microservicios o monolitos con WebAssembly
- [Temporal](https://github.com/temporalio/sdk-go) - Sistema de ejecución duradera para hacer que el código sea tolerante a fallos y sencillo.
- [torrent](https://github.com/anacrolix/torrent) - Paquete cliente de BitTorrent.
- [trpc-go](https://github.com/trpc-group/trpc-go) - Implementación en lenguaje Go de tRPC, un framework RPC extensible mediante plugins y de alto rendimiento.

**[⬆ volver arriba](#contents)**

## DNS dinámico

_Herramientas para actualizar registros de DNS dinámico._

- [DDNS](https://github.com/skibish/ddns) - Cliente DDNS personal con Digital Ocean Networking DNS como backend.
- [dyndns](https://gitlab.com/alcastle/dyndns) - Proceso de Go en segundo plano que comprueba de forma periódica y automática tu dirección IP y actualiza (uno o varios) registros de DNS dinámico de Google Domains cada vez que tu dirección cambia.
- [GoDNS](https://github.com/timothyye/godns) - Herramienta cliente de DNS dinámico compatible con DNSPod y HE.net, escrita en Go.

**[⬆ volver arriba](#contents)**

## Correo electrónico

_Bibliotecas y herramientas que implementan la creación y el envío de correo electrónico._

- [chasquid](https://blitiri.com.ar/p/chasquid) - Servidor SMTP escrito en Go.
- [douceur](https://github.com/aymerick/douceur) - Insertador de CSS en línea para tus correos HTML.
- [email](https://github.com/jordan-wright/email) - Biblioteca de correo electrónico robusta y flexible para Go.
- [email-verifier](https://github.com/AfterShip/email-verifier) - Biblioteca de Go para verificar correos electrónicos sin enviar ningún correo.
- [go-dkim](https://github.com/toorop/go-dkim) - Biblioteca DKIM para firmar y verificar correos electrónicos.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - Biblioteca de Golang que proporciona una representación canónica de las direcciones de correo electrónico.
- [go-imap](https://github.com/BrianLeishman/go-imap) - Cliente IMAP con todo incluido, con reconexión automática, OAuth2, soporte de IDLE y análisis MIME integrado.
- [go-imap](https://github.com/emersion/go-imap) - Biblioteca IMAP para clientes y servidores.
- [go-mail](https://github.com/wneessen/go-mail) - Biblioteca sencilla de Go para enviar correos en Go.
- [go-message](https://github.com/emersion/go-message) - Biblioteca de streaming para el Internet Message Format y los mensajes de correo.
- [go-premailer](https://github.com/vanng822/go-premailer) - Estilos en línea para correo HTML en Go.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - Paquete muy sencillo para enviar correos con SMTP Keep Alive y dos tiempos de espera: conexión y envío.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Cliente para la API SpamCheck de Postmark que puntúa un correo sin procesar según las reglas de SpamAssassin.
- [Hectane](https://github.com/hectane/hectane) - Cliente SMTP ligero que proporciona una API HTTP.
- [hermes](https://github.com/matcornic/hermes) - Paquete de Golang que genera correos electrónicos HTML limpios y adaptables.
- [Maddy](https://github.com/foxcpp/maddy) - Servidor de correo electrónico todo en uno (SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE)
- [mailchain](https://github.com/mailchain/mailchain) - Envía correos electrónicos cifrados a direcciones de blockchain, escrito en Go.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Biblioteca de Go para enviar correo con la API de Mailgun.
- [MailHog](https://github.com/mailhog/MailHog) - Pruebas de correo electrónico y SMTP con interfaz web y API.
- [Mailpit](https://github.com/axllent/mailpit) - Herramienta de pruebas de correo electrónico y SMTP para desarrolladores.
- [mailx](https://github.com/valord577/mailx) - Mailx es una biblioteca que facilita el envío de correo electrónico mediante SMTP. Es una mejora de la biblioteca estándar de golang `net/smtp`.
- [mox](https://github.com/mjl-/mox) - Servidor de correo moderno, completo y seguro para correo autoalojado de bajo mantenimiento.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - Biblioteca de Go de SendGrid para enviar correo electrónico.
- [smtp](https://github.com/mailhog/smtp) - Máquina de estados del protocolo de servidor SMTP.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - Servidor SMTP falso, ligero, configurable y multihilo. Imita cualquier comportamiento SMTP para tu entorno de pruebas.
- [tickstem/verify](https://github.com/tickstem/verify) - Valida direcciones de correo electrónico antes de que lleguen a tu base de datos: sintaxis, consulta MX, dominios desechables y buzones basados en roles.
- [truemail-go](https://github.com/truemail-rb/truemail-go) - Validador/verificador de correo electrónico configurable para Golang. Verifica correos mediante Regex, DNS, SMTP y mucho más.

**[⬆ volver arriba](#contents)**

## Lenguajes de scripting integrables

_Integración de otros lenguajes dentro de tu código Go._

- [anko](https://github.com/mattn/anko) - Intérprete programable escrito en Go.
- [binder](https://github.com/alexeyco/binder) - Biblioteca de enlace de Go a Lua, basada en [gopher-lua](https://github.com/yuin/gopher-lua).
- [cel-go](https://github.com/google/cel-go) - Evaluación de expresiones rápida, portable y no Turing completa con tipado gradual.
- [ecal](https://github.com/krotik/ecal) - Lenguaje de scripting integrable y sencillo compatible con el procesamiento concurrente de eventos.
- [expr](https://github.com/antonmedv/expr) - Motor de evaluación de expresiones para Go: rápido, no Turing completo, con tipado dinámico y tipado estático.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - PHP integrado en Go, con un manejador `net/http`.
- [gentee](https://github.com/gentee/gentee) - Lenguaje de programación de scripting integrable.
- [gisp](https://github.com/jcla1/gisp) - LISP sencillo en Go.
- [go-lua](https://github.com/Shopify/go-lua) - Port de la VM de Lua 5.2 a Go puro.
- [go-lua](https://github.com/speedata/go-lua) - VM de Lua 5.4 implementada en Go puro.
- [go-php](https://github.com/deuill/go-php) - Bindings de PHP para Go.
- [goal](https://codeberg.org/anaseto/goal) - Lenguaje de arrays de scripting integrable.
- [goja](https://github.com/dop251/goja) - Implementación de ECMAScript 5.1(+) en Go.
- [golua](https://github.com/aarzilli/golua) - Bindings de Go para la API de C de Lua.
- [gopher-lua](https://github.com/yuin/gopher-lua) - VM y compilador de Lua 5.1 escritos en Go.
- [gval](https://github.com/PaesslerAG/gval) - Lenguaje de expresiones altamente personalizable escrito en Go.
- [metacall](https://github.com/metacall/core) - Entorno de ejecución políglota multiplataforma compatible con NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol y más.
- [ngaro](https://github.com/db47h/ngaro) - Implementación integrable de la VM Ngaro que permite el scripting en Retro.
- [prolog](https://github.com/ichiban/prolog) - Prolog integrable.
- [purl](https://github.com/ian-kent/purl) - Perl 5.18.2 integrado en Go.
- [starlark-go](https://github.com/google/starlark-go) - Implementación en Go de Starlark: lenguaje similar a Python con evaluación determinista y ejecución hermética.
- [starlet](https://github.com/1set/starlet) - Envoltorio de Go para [starlark-go](https://github.com/google/starlark-go) que simplifica la ejecución de scripts y ofrece conversión de datos y útiles bibliotecas y extensiones de Starlark.
- [tengo](https://github.com/d5/tengo) - Lenguaje de scripting compilado a bytecode para Go.
- [Wa/凹语言](https://github.com/wa-lang/wa) - El lenguaje de programación Wa integrado en Go.

**[⬆ volver arriba](#contents)**

## Gestión de errores

_Bibliotecas para manejar errores._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - Envuelve errores con el archivo, la línea y el nombre de la función de cada punto de llamada.
- [emperror](https://github.com/emperror/emperror) - Herramientas y buenas prácticas de gestión de errores para bibliotecas y aplicaciones Go.
- [eris](https://github.com/rotisserie/eris) - Una forma mejor de manejar, rastrear y registrar errores en Go. Compatible con la biblioteca estándar de errores y con github.com/pkg/errors.
- [errlog](https://github.com/snwfdhmp/errlog) - Paquete hackeable que determina el código fuente responsable de un error (y otras funciones de depuración rápida). Se conecta directamente a cualquier logger.
- [errors](https://github.com/emperror/errors) - Sustituto directo del paquete errors de la biblioteca estándar y de github.com/pkg/errors. Proporciona diversas primitivas de gestión de errores.
- [errors](https://github.com/neuronlabs/errors) - Gestión de errores sencilla en golang con primitivas de clasificación.
- [errors](https://github.com/PumpkinSeed/errors) - El envoltorio de errores más sencillo, con un rendimiento excelente y una sobrecarga de memoria mínima.
- [errors](https://gitlab.com/tozd/go/errors) - Proporciona errores con traza de pila y detalles estructurados opcionales. Compatible con la API de github.com/pkg/errors, pero no la usa internamente.
- [errors](https://github.com/naughtygopher/errors) - Sustituto directo de los errores integrados de Go. Es un paquete mínimo de gestión de errores con tipos de error personalizados, mensajes fáciles de entender, Unwrap e Is. Con funciones auxiliares muy fáciles de usar y directas.
- [errors](https://github.com/cockroachdb/errors) - Biblioteca de errores de Go con portabilidad de errores a través de la red.
- [errorx](https://github.com/joomcode/errorx) - Paquete de errores con muchas funciones, con trazas de pila, composición de errores y más.
- [exception](https://github.com/rbrahul/exception) - Paquete de utilidades sencillo para el manejo de excepciones con try-catch en Golang.
- [Falcon](https://github.com/SonicRoshan/falcon) - Paquete sencillo pero muy potente para la gestión de errores.
- [Fault](https://github.com/Southclaws/fault) - Mecanismo ergonómico para envolver errores con el fin de facilitar metadatos estructurados y contexto para los valores de error.
- [go-errr](https://github.com/go-errr/go) - Biblioteca de gestión de errores con semántica Catch/Recover, cadenas de errores envueltos y trazas de pila para Go.
- [go-multierror](https://github.com/hashicorp/go-multierror) - Paquete de Go (golang) para representar una lista de errores como un único error.
- [metaerr](https://github.com/quantumcycle/metaerr) - Biblioteca para crear tus propios constructores de errores que producen errores estructurados con metadatos de distintas fuentes y trazas de pila opcionales.
- [multierr](https://github.com/uber-go/multierr) - Paquete para representar una lista de errores como un único error.
- [oops](https://github.com/samber/oops) - Gestión de errores con contexto, traza de pila y fragmentos de código fuente.
- [tracerr](https://github.com/ztrue/tracerr) - Errores de Golang con traza de pila y fragmentos de código fuente.

**[⬆ volver arriba](#contents)**

## Manejo de archivos

_Bibliotecas para manejar archivos y sistemas de archivos._

- [afero](https://github.com/spf13/afero) - Sistema de abstracción de sistemas de archivos para Go.
- [afs](https://github.com/viant/afs) - Almacenamiento abstracto de archivos (mem, scp, zip, tar, nube: s3, gs) para Go.
- [baraka](https://github.com/xis/baraka) - Biblioteca para procesar fácilmente subidas de archivos por http.
- [checksum](https://github.com/codingsince1985/checksum) - Calcula resúmenes de mensajes, como MD5, SHA256, SHA1, CRC o BLAKE2s, para archivos grandes.
- [copy](https://github.com/otiai10/copy) - Copia directorios de forma recursiva.
- [fastwalk](https://github.com/charlievieth/fastwalk) - Biblioteca de recorrido de directorios rápido y paralelo (usada por [fzf](https://github.com/junegunn/fzf)).
- [flop](https://github.com/homedepot/flop) - Biblioteca de operaciones con archivos que aspira a igualar las funciones de [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html).
- [gdu](https://github.com/dundee/gdu) - Analizador del uso de disco con interfaz de consola.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - Carga archivos csv mediante etiquetas.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - Copia de archivos para humanos.
- [go-exiftool](https://github.com/barasher/go-exiftool) - Bindings de Go para ExifTool, la conocida biblioteca usada para extraer tantos metadatos como sea posible (EXIF, IPTC...) de archivos (imágenes, PDF, ofimática...).
- [go-gtfs](https://github.com/artonge/go-gtfs) - Carga archivos gtfs en go.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - Paquete para convertir una plantilla HTML en un archivo PDF.
- [goflat](https://github.com/lzambarda/goflat) - Serializador/deserializador genérico de archivos planos consciente del contexto.
- [gofs](https://github.com/no-src/gofs) - Herramienta de sincronización de archivos en tiempo real multiplataforma y lista para usar.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Procesamiento de PDF/A para Go.
- [gulter](https://github.com/adelowo/gulter) - Middleware HTTP sencillo para gestionar automáticamente todas tus necesidades de subida de archivos
- [gut/yos](https://github.com/1set/gut) - Paquete sencillo y fiable para operaciones con archivos como copiar/mover/comparar/listar en archivos, directorios y enlaces simbólicos.
- [gxpdf](https://github.com/coregx/gxpdf) - Biblioteca de PDF moderna para Go que cubre todo el ciclo de vida — analiza, extrae tablas, genera y firma documentos sin ninguna dependencia de CGO.
- [higgs](https://github.com/dastoori/higgs) - Pequeña biblioteca de Go multiplataforma para ocultar/mostrar archivos y directorios.
- [iso9660](https://github.com/kdomanski/iso9660) - Paquete para leer y crear imágenes de disco ISO9660
- [notify](https://github.com/rjeczalik/notify) - Biblioteca de notificación de eventos del sistema de archivos con una API sencilla, similar a os/signal.
- [opc](https://github.com/qmuntal/opc) - Carga archivos Open Packaging Conventions (OPC) para Go.
- [parquet](https://github.com/parsyl/parquet) - Lee y escribe archivos [parquet](https://parquet.apache.org).
- [pathtype](https://github.com/jonchun/pathtype) - Trata las rutas como un tipo propio en lugar de usar cadenas.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - Procesador de PDF.
- [skywalker](https://github.com/dixonwille/skywalker) - Paquete que permite recorrer un sistema de archivos de forma concurrente con facilidad.
- [todotxt](https://github.com/1set/todotxt) - Biblioteca de Go para los archivos [_todo.txt_](http://todotxt.org/) de Gina Trapani; permite analizar y manipular listas de tareas en el [formato _todo.txt_](https://github.com/todotxt/todo.txt).
- [vfs](https://github.com/C2FO/vfs) - Conjunto de funcionalidades de sistema de archivos para Go, extensible mediante plugins, ampliable y con convenciones propias, para varios tipos de sistemas de archivos como os, S3 y GCS.

**[⬆ volver arriba](#contents)**

## Finanzas

_Paquetes de contabilidad y finanzas._

- [accounting](https://github.com/leekchan/accounting) - Formateo de dinero y divisas para golang.
- [ach](https://github.com/moov-io/ach) - Lector, escritor y validador de archivos de Automated Clearing House (ACH).
- [bbgo](https://github.com/c9s/bbgo) - Framework de bots de trading de criptomonedas escrito en Go. Incluye API de exchanges de criptomonedas comunes, indicadores estándar, backtesting y muchas estrategias integradas.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - Cliente de Go para la API v3 de BingX con más de 260 métodos, futuros USDT-M/Coin-M, spot, TradFi, flujos WebSocket y copy trading.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Cliente de Go para la API UTA v3 de Bitget con modelos tipados, precios basados en cadenas, WebSocket con reconexión automática y trading de demostración.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Cliente de Go para la API V5 de Bybit con autenticación HMAC/RSA, flujos WebSocket, trading de demostración e instrumentos TradFi.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - Cliente para el índice Fear & Greed de CNN con los siete indicadores que lo componen y aproximadamente un año de historial diario.
- [currency](https://github.com/bojanz/currency) - Maneja importes en divisas y proporciona información y formateo de divisas.
- [currency](https://github.com/naughtygopher/currency) - Paquete de cálculo de divisas preciso y de alto rendimiento.
- [dec128](https://github.com/jokruger/dec128) - Números decimales de punto fijo de 128 bits de alto rendimiento.
- [decimal](https://github.com/shopspring/decimal) - Números decimales de punto fijo con precisión arbitraria.
- [decimal](https://github.com/aytechnet/decimal) - Decimal de 64 bits de alto rendimiento parcialmente compatible con [shopspring/decimal](https://github.com/shopspring/decimal) e int64, incluidos peso y longitud.
- [decimal](https://github.com/govalues/decimal) - Números decimales inmutables con aritmética libre de panics.
- [decimal](https://github.com/klokare/decimal) - Tipo decimal de tamaño fijo y sin asignaciones de memoria para cuando no necesitas precisión arbitraria.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - Tipos de IVA y formatos de número de IVA de 45 países europeos, integrados en tiempo de compilación y actualizados a diario desde la TEDB de la Comisión Europea.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - Serialización y aritmética rápidas y precisas para decimales pequeños de punto fijo
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - Dinero decimal de punto fijo ISO4217 rápido y sencillo.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Cliente de Go para la API Basic de Glassnode con 25 categorías de métricas, structs tipados, endpoints masivos, datos Point-in-Time y cero dependencias.
- [go-finance](https://github.com/alpeb/go-finance) - Biblioteca de funciones financieras para el valor temporal del dinero (anualidades), flujos de caja, conversiones de tipos de interés, bonos y cálculos de amortización.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - Módulo para obtener tipos de cambio, comprobar números de IVA mediante VIES y comprobar números de cuenta bancaria IBAN.
- [go-money](https://github.com/rhymond/go-money) - Implementación del patrón Money de Fowler.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - Biblioteca para la API de criptomonedas NOWPayments.
- [gobl](https://github.com/invopop/gobl) - Framework de documentos de facturación. Basado en JSON Schema. Automatiza los cálculos y la validación de impuestos, con herramientas para convertir a formatos globales.
- [indicator](https://github.com/cinar/indicator) - Biblioteca de análisis técnico que proporciona indicadores financieros, estrategias y un framework de backtesting.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - Cliente de Go para las API REST y WebSocket UTA y Classic de KuCoin, con autenticación HMAC-SHA256, precios tipados como cadenas y jerarquía de errores tipada.
- [ledger](https://github.com/formancehq/ledger) - Libro de contabilidad financiero programable que proporciona una base para aplicaciones que mueven dinero.
- [money](https://github.com/govalues/money) - Importes monetarios y tipos de cambio inmutables con aritmética libre de panics.
- [ofxgo](https://github.com/aclindsa/ofxgo) - Consulta servidores OFX y/o analiza las respuestas (con un cliente de línea de comandos de ejemplo).
- [okx-go](https://github.com/tigusigalpa/okx-go) - Cliente de Go para la API v5 de OKX con 335 endpoints REST, 53 canales WebSocket, soporte de genéricos y reconexión automática.
- [orderbook](https://github.com/i25959341/orderbook) - Motor de emparejamiento para libros de órdenes limitadas en Golang.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - Libro de órdenes limitadas y motor de emparejamiento integrables, con precios enteros exactos, un núcleo de escritor único y recuperación ante fallos mediante registro de escritura anticipada.
- [payme](https://github.com/jovandeginste/payme) - Generador de códigos QR (ASCII y PNG) para pagos SEPA.
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - SDK de Go completo, sin dependencias y totalmente tipado para la API de Paystack.
- [swift](https://code.pfad.fr/swift/) - Comprobación sin conexión de la validez del IBAN (International Bank Account Number) y obtención del BIC (para algunos países).
- [techan](https://github.com/sdcoffey/techan) - Biblioteca de análisis técnico con análisis de mercado avanzado y estrategias de trading.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Cliente de Go para la API Wallet Pay de Telegram con verificación de webhooks HMAC-SHA256 y middleware para net/http, Gin y Echo.
- [ticker](https://github.com/achannarasappa/ticker) - Monitor de acciones y seguimiento de posiciones bursátiles para terminal.
- [transaction](https://github.com/claygod/transaction) - Base de datos transaccional embebida de cuentas que se ejecuta en modo multihilo.
- [udecimal](https://github.com/quagmt/udecimal) - Biblioteca decimal de punto fijo de alto rendimiento, alta precisión y sin asignaciones de memoria para aplicaciones financieras.
- [vat](https://github.com/dannyvankooten/vat) - Validación de números de IVA y tipos de IVA de la UE.

**[⬆ volver arriba](#contents)**

## Formularios

_Bibliotecas para trabajar con formularios._

- [bind](https://github.com/robfig/bind) - Vincula datos de formularios a cualquier valor de Go.
- [conform](https://github.com/leebenson/conform) - Mantiene bajo control la entrada del usuario. Recorta, sanea y depura datos según las etiquetas de structs.
- [form](https://github.com/go-playground/form) - Decodifica url.Values en valores de Go y codifica valores de Go en url.Values. Soporte de arrays duales y mapas completos.
- [formam](https://github.com/monoculum/formam) - Decodifica los valores de un formulario en un struct.
- [forms](https://github.com/albrow/forms) - Biblioteca independiente del framework para analizar y validar datos de formularios/JSON, compatible con formularios multipart y archivos.
- [gbind](https://github.com/bdjimmy/gbind) - Vincula datos a cualquier valor de Go. Puede usar capacidades de vinculación mediante expresiones integradas y personalizadas; admite validación de datos
- [gorilla/csrf](https://github.com/gorilla/csrf) - Protección CSRF para aplicaciones y servicios web en Go.
- [httpin](https://github.com/ggicci/httpin) - Decodifica una solicitud HTTP en un struct personalizado, incluidos la cadena de consulta, los formularios, las cabeceras HTTP, etc.
- [nosurf](https://github.com/justinas/nosurf) - Middleware de protección CSRF para Go.
- [qs](https://github.com/sonh/qs) - Módulo de Go para codificar structs en parámetros de consulta de URL.
- [queryparam](https://github.com/tomwright/queryparam) - Decodifica `url.Values` en valores de structs utilizables de tipos estándar o personalizados.
- [roamer](https://github.com/slipros/roamer) - Elimina el código repetitivo para analizar solicitudes HTTP vinculando cookies, cabeceras, parámetros de consulta, parámetros de ruta, el cuerpo y más a structs mediante etiquetas sencillas.

**[⬆ volver arriba](#contents)**

## Programación funcional

_Paquetes para dar soporte a la programación funcional en Go._

- [fp-go](https://github.com/repeale/fp-go) - Colección de utilidades de programación funcional basadas en los genéricos de Golang 1.18+.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Mónadas y funciones de programación funcional para Golang.
- [fuego](https://github.com/seborama/fuego) - Experimento funcional en Go.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - Biblioteca de utilidades funcionales que ofrece Map, Filter, Reduce y otras operaciones de flujo sobre slices genéricos en Go 1.18+, con evaluación perezosa y mecanismos de gestión de errores.
- [g](https://github.com/enetx/g) - Framework de programación funcional para Go.
- [go-functional](https://github.com/BooleanCat/go-functional) - Programación funcional en Go usando genéricos
- [go-underscore](https://github.com/tobyhede/go-underscore) - Útil colección de utilidades funcionales para colecciones en Go.
- [gofp](https://github.com/rbrahul/gofp) - Potente biblioteca de utilidades al estilo de lodash para Golang.
- [mo](https://github.com/samber/mo) - Mónadas y abstracciones populares de programación funcional, basadas en los genéricos de Go 1.18+ (Option, Result, Either...).
- [underscore](https://github.com/rjNemo/underscore) - Utilidades de programación funcional para Go 1.18 y posteriores.
- [valor](https://github.com/phelmkamp/valor) - Tipos genéricos option y result que contienen opcionalmente un valor.

**[⬆ volver arriba](#contents)**

## Desarrollo de videojuegos

_Bibliotecas increíbles para el desarrollo de videojuegos._

- [Ark](https://github.com/mlange-42/ark) - Entity Component System (ECS) basado en arquetipos para Go.
- [due](https://github.com/dobyte/due) - Framework de servidores de juegos distribuido con un diseño de componentes modular, que proporciona pasarelas tcp, kcp, ws y quic.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Motor de juegos 2D tremendamente sencillo en Go.
- [ecs](https://github.com/andygeiss/ecs) - Crea tu propio motor de juegos basado en el concepto de Entity Component System en Golang.
- [engo](https://github.com/EngoEngine/engo) - Engo es un motor de juegos 2D de código abierto escrito en Go. Sigue el paradigma Entity-Component-System.
- [fantasyname](https://github.com/s0rg/fantasyname) - Generador de nombres de fantasía.
- [g3n](https://github.com/g3n/engine) - Motor de juegos 3D en Go.
- [go-astar](https://github.com/beefsack/go-astar) - Implementación en Go del algoritmo de búsqueda de caminos A\*.
- [go-sdl2](https://github.com/veandco/go-sdl2) - Bindings de Go para [Simple DirectMedia Layer](https://www.libsdl.org/).
- [go3d](https://github.com/ungerik/go3d) - Paquete de matemáticas 2D/3D orientado al rendimiento para Go.
- [gogpu](https://github.com/gogpu/gogpu) - Framework de aplicaciones de GPU con gestión de ventanas, entrada y renderizado construido sobre WebGPU — reduce más de 480 líneas de código de GPU a unas 20, sin CGO (ecosistema GoGPU: [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Implementación de WebGPU escrita íntegramente en Go con backends Vulkan, DX12 y Metal, sin CGO (parte del ecosistema [GoGPU](https://github.com/gogpu)).
- [GOKe](https://github.com/kjkrol/goke) - Motor ECS orientado a datos (DOD) y basado en arquetipos que utiliza una disposición SoA por bloques alineada con la caché L1 para un crecimiento de memoria predecible y sin saltos, y rutas de ejecución sin asignaciones de memoria.
- [gonet](https://github.com/xtaci/gonet) - Esqueleto de servidor de juegos implementado en golang.
- [goworld](https://github.com/xiaonanln/goworld) - Motor de servidores de juegos escalable, con un framework de espacios y entidades e intercambio en caliente.
- [grid](https://github.com/s0rg/grid) - Cuadrícula 2D genérica con ray casting, shadow casting y búsqueda de caminos.
- [Leaf](https://github.com/name5566/leaf) - Framework ligero de servidores de juegos.
- [nano](https://github.com/lonng/nano) - Framework de servidores de juegos basado en golang, ligero, práctico y de alto rendimiento.
- [Oak](https://github.com/oakmound/oak) - Motor de juegos escrito íntegramente en Go.
- [Pi](https://github.com/elgopher/pi) - Motor de juegos para crear juegos retro para ordenadores modernos. Inspirado en Pico-8 e impulsado por Ebitengine.
- [Pitaya](https://github.com/topfreegames/pitaya) - Framework de servidores de juegos escalable con soporte de clústeres y bibliotecas cliente para iOS, Android, Unity y otros a través del SDK de C.
- [Pixel](https://github.com/gopxl/pixel) - Biblioteca de juegos 2D artesanal en Go.
- [prototype](https://github.com/gonutz/prototype) - Biblioteca multiplataforma (Windows/Linux/Mac) para crear juegos de escritorio usando una API mínima.
- [raylib-go](https://github.com/gen2brain/raylib-go) - Bindings de Go para [raylib](https://www.raylib.com/), una biblioteca sencilla y fácil de usar para aprender a programar videojuegos.
- [sceneCamera](https://github.com/donomii/sceneCamera) - Movimiento de cámara y matrices de vista/proyección para los modos de renderizado museo, FPS, RTS y estéreo.
- [termloop](https://github.com/JoelOtter/termloop) - Motor de juegos para terminal en Go, construido sobre Termbox.
- [tile](https://github.com/kelindar/tile) - Biblioteca de cuadrículas 2D (TileMap) orientada a datos y amigable con la caché, que incluye búsqueda de caminos, observadores e importación/exportación.

**[⬆ volver arriba](#contents)**

## Generadores

_Herramientas que generan código Go._

- [apispec](https://github.com/ehabterra/apispec) - Genera especificaciones OpenAPI 3.1 a partir de código Go sin anotaciones, además de una interfaz de navegador para configurar, previsualizar y explorar el grafo de llamadas.
- [convergen](https://github.com/reedom/convergen) - Generador de código de copia de tipo a tipo con muchas funciones.
- [copygen](https://github.com/switchupcb/copygen) - Genera cualquier código basado en tipos de Go, incluidos conversores de tipo a tipo (código de copia) sin reflexión por defecto.
- [generis](https://github.com/senselogic/GENERIS) - Herramienta de generación de código que ofrece genéricos, macros de formato libre, compilación condicional y plantillas HTML.
- [go-apispec](https://github.com/antst/go-apispec) - Genera especificaciones OpenAPI 3.1 a partir del código fuente Go mediante análisis estático con detección automática del framework.
- [go-enum](https://github.com/abice/go-enum) - Generación de código para enums a partir de comentarios del código.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - Generación de código para la codificación de enums a partir de comentarios del código.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Métodos de consulta al estilo de LINQ de .NET para Go.
- [goderive](https://github.com/awalterschulze/goderive) - Deriva funciones a partir de tipos de entrada
- [goverter](https://github.com/jmattheis/goverter) - Genera conversores definiendo una interfaz.
- [GoWrap](https://github.com/hexdigest/gowrap) - Genera decoradores para interfaces de Go usando plantillas sencillas.
- [interfaces](https://github.com/rjeczalik/interfaces) - Herramienta de línea de comandos para generar definiciones de interfaces.
- [jennifer](https://github.com/dave/jennifer) - Genera código Go arbitrario sin plantillas.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - Este paquete contiene un conjunto de utilidades para generar código Go repetitivo para servicios basados en definiciones de API OpenAPI 3.0.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - Genera un servidor y un cliente HTTP a partir de protobuf.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Genera herramientas, prompts y recursos MCP tipados a partir de Protocol Buffers.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - Biblioteca para crear tipos dinámicamente.

**[⬆ volver arriba](#contents)**

## Geografía

_Herramientas y servidores geográficos_

- [borders](https://github.com/kpfaulkner/borders) - Detecta los bordes de imágenes y los convierte a GeoJSON para operaciones SIG.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - SDK oficial de Go para GeoEngine, que ofrece una ingesta de datos geoespaciales de alto rendimiento con una latencia de milisegundos de un solo dígito.
- [geoos](https://github.com/spatial-go/geoos) - Biblioteca que proporciona datos espaciales y algoritmos geométricos.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver es un paquete de Go para manipular una instancia de GeoServer mediante la API REST de GeoServer.
- [gismanager](https://github.com/hishamkaram/gismanager) - Publica tus datos SIG (datos vectoriales) en PostGIS y Geoserver.
- [godal](https://github.com/airbusgeo/godal) - Envoltorio de Go para GDAL.
- [H3](https://github.com/uber/h3-go) - Bindings de Go para H3, un sistema de indexación geoespacial jerárquico hexagonal.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - Utilidades de conversión entre índices H3 y GeoJSON.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - Distribución de celdas H3geo de Uber mediante nodos virtuales.
- [mbtileserver](https://github.com/consbio/mbtileserver) - Servidor sencillo basado en Go para teselas de mapas almacenadas en formato mbtiles.
- [osm](https://github.com/paulmach/osm) - Biblioteca para leer, escribir y trabajar con datos y API de OpenStreetMap.
- [pbf](https://github.com/maguro/pbf) - Codificador/decodificador de PBF de OpenStreetMap para golang.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - Convierte geojson en celdas s2 y muestra algunas funciones de geometría S2 en un mapa.
- [S2 geometry](https://github.com/golang/geo) - Biblioteca de geometría S2 en Go.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures es una biblioteca de geometría 2D que proporciona tipos de Go que modelan geometrías, así como algoritmos que operan sobre ellas.
- [Tile38](https://github.com/tidwall/tile38) - Base de datos de geolocalización con índice espacial y geovallas en tiempo real.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Proyecto para usar y convertir fácilmente LonLat, Point y Tile con el fin de mostrar información, marcadores, etc. en un mapa usando la proyección Web Mercator.
- [WGS84](https://github.com/wroge/wgs84) - Biblioteca de conversión y transformación de coordenadas (ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ volver arriba](#contents)**

## Compiladores de Go

_Herramientas para compilar Go a otros lenguajes y viceversa._

- [bunster](https://github.com/yassinebenaid/bunster) - Compila scripts de shell a Go.
- [c4go](https://github.com/Konstantin8105/c4go) - Transpila código C a código Go.
- [cxgo](https://github.com/gotranspile/cxgo) - Transpila código C a código Go.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Transpila Go a código de Arduino.
- [f4go](https://github.com/Konstantin8105/f4go) - Transpila código FORTRAN 77 a código Go.
- [go2hx](https://github.com/go2hx/go2hx) - Compilador de Go a Haxe y de ahí a Javascript/C++/Java/C#.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Compilador de Go a JavaScript.

**[⬆ volver arriba](#contents)**

## Goroutines

_Herramientas para gestionar goroutines y trabajar con ellas._

- [anchor](https://github.com/kyuff/anchor) - Biblioteca para gestionar el ciclo de vida de los componentes en arquitecturas de microservicios.
- [ants](https://github.com/panjf2000/ants) - Pool de goroutines de alto rendimiento y bajo coste en Go.
- [artifex](https://github.com/borderstech/artifex) - Cola de trabajos en memoria sencilla para Golang que usa despacho basado en workers.
- [async](https://github.com/yaitoo/async) - Paquete de tareas asíncronas con estilo async/await para Go.
- [async](https://github.com/reugn/async) - Biblioteca de sincronización alternativa para Go (Future, Promise, Locks).
- [async](https://github.com/studiosol/async) - Forma segura de ejecutar funciones de forma asíncrona, recuperándolas en caso de panic.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob es un gestor de trabajos de cola asíncrona con código ligero, claro y rápido.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - Pool de workers para Go sin configuración y con autoescalado, con planificación consciente de las prioridades.
- [breaker](https://github.com/kamilsk/breaker) - Mecanismo flexible para hacer interrumpible el flujo de ejecución.
- [channelify](https://github.com/ddelizia/channelify) - Transforma tu función para que devuelva canales y lograr un procesamiento paralelo fácil y potente.
- [conc](https://github.com/sourcegraph/conc) - `conc` es tu caja de herramientas para la concurrencia estructurada en go, que hace las tareas comunes más fáciles y seguras.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - Limitador de concurrencia con soporte para tiempos de espera, prioridad dinámica y cancelación de goroutines mediante contexto.
- [conexec](https://github.com/ITcathyh/conexec) - Kit de herramientas de concurrencia que ayuda a ejecutar funciones de forma concurrente, eficiente y segura. Permite especificar un tiempo de espera global para evitar bloqueos y usa un pool de goroutines para mejorar la eficiencia.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - CyclicBarrier para golang.
- [execpool](https://github.com/hexdigest/execpool) - Pool construido en torno a exec.Cmd que arranca de antemano un número determinado de procesos y les conecta stdin y stdout cuando es necesario. Muy similar a FastCGI o a Apache Prefork MPM, pero funciona con cualquier comando.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - Concurrencia estructurada fácil.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - Solución para la acumulación de eventos y su posterior procesamiento.
- [go-actor](https://github.com/vladopajic/go-actor) - Pequeña biblioteca para escribir programas concurrentes usando el modelo de actores.
- [go-floc](https://github.com/workanator/go-floc) - Orquesta goroutines con facilidad.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - Controla el orden de ejecución de las goroutines.
- [go-future](https://github.com/jizhuozhi/go-future) - Biblioteca de Future/Promise con combinadores genéricos y un motor de ejecución de DAG.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - Gestiona un pool de goroutines con esta biblioteca ligera y de API sencilla.
- [go-trylock](https://github.com/subchen/go-trylock) - Soporte de TryLock en bloqueos de lectura-escritura para Golang.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - Como `sync.WaitGroup`, pero con gestión de errores y control de la concurrencia.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Inspirado en el Thread Pool de Java, Go WorkerPool pretende controlar goroutines pesadas.
- [goccm](https://github.com/zenthangplus/goccm) - El paquete Go Concurrency Manager limita el número de goroutines que pueden ejecutarse de forma concurrente.
- [gohive](https://github.com/loveleshsharma/gohive) - Pool de goroutines de alto rendimiento y fácil de usar para Go.
- [gollback](https://github.com/vardius/gollback) - Utilidades sencillas de funciones asíncronas para gestionar la ejecución de closures y callbacks.
- [goscade](https://github.com/ognick/goscade) - Orquestador minimalista del ciclo de vida de componentes de Go con grafos de dependencias, secuenciación del arranque, coordinación de la disponibilidad y apagado ordenado.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl es a la vez una herramienta de gestión y de monitorización de procesos. Un pool infinito de workers te permite controlar el pool y los procesos y monitorizar su estado.
- [goworker](https://github.com/benmanns/goworker) - goworker es un worker en segundo plano basado en Go.
- [gowp](https://github.com/xxjwxc/gowp) - gowp es un pool de goroutines que limita la concurrencia.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - Gestiona un pool redimensionable de goroutines conscientes del contexto para acotar la concurrencia.
- [grpool](https://github.com/ivpusic/grpool) - Pool ligero de goroutines.
- [hands](https://github.com/duanckham/hands) - Controlador de procesos usado para controlar las estrategias de ejecución y retorno de múltiples goroutines.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch proporciona funciones como `All`, `First`, `Retry`, `Waterfall`, etc., que hacen más intuitivo el control de flujo asíncrono.
- [kyoo](https://github.com/dirkaholic/kyoo) - Proporciona una cola de trabajos ilimitada y pools de workers concurrentes.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - Alternativa directa a `sync/errgroup`, limitada a un pool de N goroutines worker.
- [nursery](https://github.com/arunsworld/nursery) - Concurrencia estructurada en Go.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight es una implementación completa de los árboles de supervisión de Erlang.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - Ejecuta funciones en paralelo.
- [pond](https://github.com/alitto/pond) - Pool de workers de goroutines minimalista y de alto rendimiento escrito en Go.
- [pool](https://github.com/go-playground/pool) - Pool de goroutines consumidoras limitadas o de goroutines ilimitadas para facilitar su manejo y cancelación.
- [powerlock](https://github.com/donomii/powerlock) - Mutex FIFO con nombre, con cancelación mediante contexto, colas de espera acotadas, diagnósticos de watchdog, perfiles de pprof y métricas de Prometheus.
- [rill](https://github.com/destel/rill) - Kit de herramientas de Go para una concurrencia limpia, componible y basada en canales.
- [routine](https://github.com/timandy/routine) - `routine` es una biblioteca de `ThreadLocal` para go. Encapsula y ofrece algunas interfaces de acceso al contexto de `goroutine` fáciles de usar, sin contención y de alto rendimiento, que pueden ayudarte a acceder a la información de contexto de las corrutinas de forma más elegante.
- [routine](https://github.com/x-mod/routine) - Control de goroutines con contexto; admite Main, Go, Pool y algunos Executors útiles.
- [semaphore](https://github.com/kamilsk/semaphore) - Implementación del patrón semáforo con tiempo de espera en las operaciones de bloqueo/desbloqueo, basada en canales y contexto.
- [semaphore](https://github.com/marusama/semaphore) - Implementación rápida de semáforos redimensionables basada en CAS (más rápida que las implementaciones de semáforos basadas en canales).
- [stl](https://github.com/ssgreg/stl) - Bloqueos transaccionales por software basados en el mecanismo de control de concurrencia de memoria transaccional por software (STM).
- [threadpool](https://github.com/shettyh/threadpool) - Implementación de un pool de hilos en Golang.
- [tunny](https://github.com/Jeffail/tunny) - Pool de goroutines para golang.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker es un pool de workers asíncronos sencillo para Go.
- [workerpool](https://github.com/gammazero/workerpool) - Pool de goroutines que limita la concurrencia de la ejecución de tareas, no el número de tareas en cola.

**[⬆ volver arriba](#contents)**

## GUI

_Bibliotecas para crear aplicaciones con interfaz gráfica (GUI)._

_Kits de herramientas_

- [app](https://github.com/murlokswarm/app) - Paquete para crear aplicaciones con GO, HTML y CSS. Compatible con: MacOS; Windows en desarrollo.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - Envoltorio de Go generado automáticamente para [Dear ImGui](https://github.com/ocornut/imgui) a través de [cimgui](https://github.com/cimgui/cimgui).
- [Cogent Core](https://github.com/cogentcore/core) - Framework para crear aplicaciones 2D y 3D que se ejecutan en macOS, Windows, Linux, iOS, Android y la web.
- [DarwinKit](https://github.com/progrium/darwinkit) - Crea aplicaciones nativas de macOS usando Go.
- [energy](https://github.com/energye/energy) - Multiplataforma, basado en LCL (biblioteca de controles de interfaz nativos del sistema) y CEF (Chromium Embedded Framework) (Windows/ macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - GUI nativas multiplataforma diseñadas para Go basadas en Material Design. Compatible con: Linux, macOS, Windows, BSD, iOS y Android.
- [gio](https://gioui.org) - Gio es una biblioteca para escribir GUI multiplataforma en modo inmediato en Go. Gio es compatible con todas las plataformas principales: Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD y WebAssembly.
- [go-gtk](https://mattn.github.io/go-gtk/) - Bindings de Go para GTK.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Bindings de Go para Sciter: el motor integrable de HTML/CSS/scripts para el desarrollo moderno de interfaces de escritorio. Multiplataforma.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Agregador de kits de herramientas de interfaz multiplataforma para Windows / Linux / Mac. GTK, Cocoa, API de Windows
- [gogpu/ui](https://github.com/gogpu/ui) - Kit de herramientas de GUI acelerado por GPU con 22 widgets, 3 sistemas de diseño (Material, Fluent, Cupertino), señales reactivas y sin CGO (parte del ecosistema [GoGPU](https://github.com/gogpu)).
- [goradd/html5tag](https://github.com/goradd/html5tag) - Biblioteca para generar etiquetas HTML5.
- [gotk3](https://github.com/gotk3/gotk3) - Bindings de Go para GTK3.
- [gowd](https://github.com/dtylman/gowd) - Desarrollo rápido y sencillo de interfaces de escritorio con GO, HTML, CSS y NW.js. Multiplataforma.
- [proton](https://github.com/CzaxStudio/proton) - Framework de GUI en modo inmediato escrito íntegramente en Go, construido sobre Gio y sin dependencias de Cgo.
- [qt](https://github.com/therecipe/qt) - Binding de Qt para Go (compatible con Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi).
- [Spot](https://github.com/roblillack/spot) - Kit de herramientas de GUI de escritorio reactivo y multiplataforma.
- [ui](https://github.com/andlabs/ui) - Biblioteca de GUI nativa de la plataforma para Go. Multiplataforma.
- [unison](https://github.com/richardwilkes/unison) - Kit de herramientas de experiencia gráfica de usuario unificada para aplicaciones de escritorio en Go. Compatible con macOS, Windows y Linux.
- [Wails](https://wails.io) - Aplicaciones de escritorio para Mac, Windows y Linux con interfaz HTML usando el renderizador HTML integrado del sistema operativo.
- [walk](https://github.com/lxn/walk) - Kit de bibliotecas de aplicaciones de Windows para Go.
- [webview](https://github.com/zserge/webview) - Ventana webview multiplataforma con bindings bidireccionales sencillos de JavaScript (Windows / macOS / Linux).

_Interacción_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - Bindings de Go para la biblioteca de C libappindicator3.
- [gogpu/systray](https://github.com/gogpu/systray) - Biblioteca de bandeja del sistema escrita íntegramente en Go para Windows, macOS y Linux, sin CGO (parte del ecosistema [GoGPU](https://github.com/gogpu)).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Biblioteca de notificaciones de escritorio de OSX para Go.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - Biblioteca de OSX para notificar cualquier actividad (configurable mediante plugins) en tu máquina.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Notificaciones de suspensión/reactivación de OSX en golang.
- [robotgo](https://github.com/go-vgo/robotgo) - Automatización del sistema GUI multiplataforma nativa de Go. Controla el ratón, el teclado y más.
- [systray](https://github.com/getlantern/systray) - Biblioteca de Go multiplataforma para colocar un icono y un menú en el área de notificación.
- [trayhost](https://github.com/shurcooL/trayhost) - Biblioteca de Go multiplataforma para colocar un icono en la barra de tareas del sistema operativo anfitrión.
- [zenity](https://github.com/ncruces/zenity) - Biblioteca de Go y CLI multiplataforma para crear diálogos sencillos que interactúan gráficamente con el usuario.

**[⬆ volver arriba](#contents)**

## Hardware

_Bibliotecas, herramientas y tutoriales para interactuar con hardware._

- [arduino-cli](https://github.com/arduino/arduino-cli) - CLI y biblioteca oficiales de Arduino. Puede ejecutarse de forma independiente o incorporarse a proyectos Go más grandes.
- [emgo](https://github.com/ziutek/emgo) - Lenguaje similar a Go para programar sistemas embebidos (p. ej., MCU STM32).
- [ghw](https://github.com/jaypipes/ghw) - Biblioteca de Golang para descubrir e inspeccionar hardware.
- [go-osc](https://github.com/hypebeast/go-osc) - Bindings de Open Sound Control (OSC) para Go.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - GPIO para Go, sin necesidad de cgo.
- [goroslib](https://github.com/aler9/goroslib) - Biblioteca de Robot Operating System (ROS) para Go.
- [joystick](https://github.com/0xcafed00d/joystick) - API de sondeo para leer el estado de un joystick conectado.
- [moody](https://github.com/dinakars777/moody) - Daemon de personalidad ante eventos de hardware para macOS. Monitoriza eventos USB, del cargador, de la tapa y otros eventos de hardware, y responde con personalidades personalizables.
- [sysinfo](https://github.com/zcalusic/sysinfo) - Biblioteca escrita íntegramente en Go que proporciona información del sistema operativo Linux, del kernel y del hardware.

**[⬆ volver arriba](#contents)**

## Imágenes

_Bibliotecas para manipular imágenes._

- [bild](https://github.com/anthonynsimon/bild) - Colección de algoritmos de procesamiento de imágenes en Go puro.
- [bimg](https://github.com/h2non/bimg) - Pequeño paquete para el procesamiento de imágenes rápido y eficiente usando libvips.
- [cameron](https://github.com/aofei/cameron) - Generador de avatares para Go.
- [canvas](https://github.com/tdewolff/canvas) - Gráficos vectoriales a PDF, SVG o imagen rasterizada.
- [color-extractor](https://github.com/marekm4/color-extractor) - Extractor de colores dominantes sin dependencias externas.
- [darkroom](https://github.com/gojek/darkroom) - Proxy de imágenes con backends de almacenamiento y motores de procesamiento de imágenes intercambiables, centrado en la velocidad y la resiliencia.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - API de optimización y transformación de imágenes que usa libvips, desplegable en AWS Lambda y CloudFront.
- [geopattern](https://github.com/pravj/geopattern) - Crea bonitos patrones de imágenes generativas a partir de una cadena.
- [gg](https://github.com/fogleman/gg) - Renderizado 2D en Go puro.
- [gift](https://github.com/disintegration/gift) - Paquete de filtros de procesamiento de imágenes.
- [gltf](https://github.com/qmuntal/gltf) - Lector, escritor y validador de glTF 2.0 eficiente y robusto.
- [go-cairo](https://github.com/ungerik/go-cairo) - Binding de Go para la biblioteca gráfica cairo.
- [go-gd](https://github.com/bolknote/go-gd) - Binding de Go para la biblioteca GD.
- [go-nude](https://github.com/koyachi/go-nude) - Detección de desnudos con Go.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - Genera códigos QR con estilos personalizados, permitiendo ajustar el color, el tamaño de los bloques, la forma y los iconos.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Port de la biblioteca webcolors de Python a Go.
- [go-webp](https://github.com/kolesa-team/go-webp) - Biblioteca para codificar y decodificar imágenes webp usando libwebp.
- [gocv](https://github.com/hybridgroup/gocv) - Paquete de Go para visión por computador usando OpenCV 3.3+.
- [gogpu/gg](https://github.com/gogpu/gg) - Renderizado 2D acelerado por GPU con una API similar a Canvas, sin CGO (parte del ecosistema gráfico [GoGPU](https://github.com/gogpu) escrito íntegramente en Go).
- [goimagehash](https://github.com/corona10/goimagehash) - Paquete de Go de hashing perceptual de imágenes.
- [goimghdr](https://github.com/corona10/goimghdr) - El módulo imghdr determina el tipo de imagen contenida en un archivo, para Go.
- [govatar](https://github.com/o1egl/govatar) - Biblioteca y herramienta de línea de comandos para generar avatares divertidos.
- [govips](https://github.com/davidbyttow/govips) - Biblioteca de procesamiento y redimensionado de imágenes ultrarrápida para Go.
- [gowitness](https://github.com/sensepost/gowitness) - Captura de pantalla de páginas web usando go y Chrome headless desde la línea de comandos.
- [gridder](https://github.com/shomali11/gridder) - Biblioteca de gráficos 2D basada en cuadrículas.
- [image2ascii](https://github.com/qeesung/image2ascii) - Convierte imágenes a ASCII.
- [imagick](https://github.com/gographics/imagick) - Binding de Go para la API de C MagickWand de ImageMagick.
- [imaginary](https://github.com/h2non/imaginary) - Microservicio HTTP rápido y sencillo para redimensionar imágenes.
- [imaging](https://github.com/disintegration/imaging) - Paquete sencillo de procesamiento de imágenes para Go.
- [imagor](https://github.com/cshum/imagor) - Servidor y biblioteca de Go de procesamiento de imágenes rápido y seguro que usa libvips.
- [img](https://github.com/hawx/img) - Selección de herramientas de manipulación de imágenes.
- [ln](https://github.com/fogleman/ln) - Renderizado de arte lineal 3D en Go.
- [mergi](https://github.com/noelyahan/mergi) - Herramienta y biblioteca de Go para la manipulación de imágenes (fusionar, recortar, redimensionar, marcas de agua, animar).
- [mort](https://github.com/aldor007/mort) - Servidor de almacenamiento y procesamiento de imágenes escrito en Go.
- [mpo](https://github.com/donatj/mpo) - Decodificador y herramienta de conversión para fotos 3D MPO.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Codificador WebP nativo de Go sin dependencias externas.
- [picfit](https://github.com/thoas/picfit) - Servidor de redimensionado de imágenes escrito en Go.
- [pt](https://github.com/fogleman/pt) - Motor de trazado de caminos (path tracing) escrito en Go.
- [scout](https://github.com/jonoton/scout) - Scout es una solución de software de código abierto independiente para la videovigilancia hecha por uno mismo (DIY).
- [smartcrop](https://github.com/muesli/smartcrop) - Encuentra buenos recortes para imágenes y tamaños de recorte arbitrarios.
- [steganography](https://github.com/auyer/steganography) - Biblioteca escrita íntegramente en Go para esteganografía LSB.
- [stegify](https://github.com/DimitarPetrov/stegify) - Herramienta de Go para esteganografía LSB, capaz de ocultar cualquier archivo dentro de una imagen.
- [svgo](https://github.com/ajstarks/svgo) - Biblioteca en lenguaje Go para la generación de SVG.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs redimensiona y optimiza imágenes para la Web usando formatos de nueva generación.
- [webp-server](https://github.com/mehdipourfar/webp-server) - Servidor de imágenes sencillo y mínimo capaz de almacenar, redimensionar, convertir y almacenar en caché imágenes.

**[⬆ volver arriba](#contents)**

## IoT (Internet de las cosas)

_Bibliotecas para programar dispositivos del IoT._

- [connectordb](https://github.com/connectordb/connectordb) - Plataforma de código abierto para el yo cuantificado (Quantified Self) y el IoT.
- [devices](https://github.com/goiot/devices) - Conjunto de bibliotecas para dispositivos IoT, experimental para x/exp/io.
- [ekuiper](https://github.com/lf-edge/ekuiper) - Motor ligero de procesamiento de flujos de datos para el edge del IoT.
- [eywa](https://github.com/xcodersun/eywa) - El proyecto Eywa es esencialmente un gestor de conexiones que hace un seguimiento de los dispositivos conectados.
- [flogo](https://github.com/tibcosoftware/flogo) - El proyecto Flogo es un framework de código abierto para aplicaciones e integración en el edge del IoT.
- [gatt](https://github.com/paypal/gatt) - Gatt es un paquete de Go para crear periféricos Bluetooth Low Energy.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot es un framework para robótica, computación física e Internet de las cosas.
- [huego](https://github.com/amimof/huego) - Completa biblioteca cliente de Philips Hue para Go.
- [iot](https://github.com/vaelen/iot/) - IoT es un framework sencillo para implementar un dispositivo de Google IoT Core.
- [periph](https://periph.io/) - E/S de periféricos para interactuar con las funciones de bajo nivel de las placas.
- [rulego](https://github.com/rulego/rulego) - RuleGo es un motor de reglas basado en componentes, ligero, de alto rendimiento, integrable y orquestable para el edge del IoT.
- [sensorbee](https://github.com/sensorbee/sensorbee) - Motor ligero de procesamiento de flujos para el IoT.
- [shifu](https://github.com/Edgenesis/shifu) - Framework de desarrollo IoT nativo de Kubernetes.
- [smart-home](https://github.com/e154/smart-home) - Paquete de software para la automatización del IoT.

**[⬆ volver arriba](#contents)**

## Planificadores de tareas

_Bibliotecas para planificar trabajos._

- [cdule](https://github.com/deepaksinghvi/cdule) - Biblioteca de planificación de trabajos con soporte de bases de datos
- [cheek](https://github.com/bart6114/cheek) - Planificador sencillo similar a crontab que pretende ofrecer un enfoque KISS para la planificación de trabajos.
- [clockwerk](https://github.com/onatm/clockwerk) - Paquete de Go para planificar trabajos periódicos usando una sintaxis sencilla y fluida.
- [cronticker](https://github.com/krayzpipes/cronticker) - Implementación de ticker compatible con programaciones cron.
- [go-cron](https://github.com/rk/go-cron) - Biblioteca Cron sencilla para go que puede ejecutar closures o funciones a intervalos variables, desde una vez por segundo hasta una vez al año en una fecha y hora concretas. Pensada principalmente para aplicaciones web y daemons de larga ejecución.
- [go-cron](https://github.com/netresearch/go-cron) - Planificador de trabajos cron con actualizaciones de la programación en tiempo de ejecución, contexto por entrada, middleware de resiliencia (reintentos, circuit breaker, limitación de tasa) y hooks de observabilidad; sucesor de robfig/cron.
- [go-job](https://github.com/cybergarage/go-job) - Biblioteca flexible y extensible de planificación y ejecución de trabajos para Go.
- [go-quartz](https://github.com/reugn/go-quartz) - Biblioteca de planificación sencilla y sin dependencias para Go.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - Planificador de trabajos compatible con expresiones cron estándar, descriptores personalizados, intervalos y dependencias entre tareas.
- [gocron](https://github.com/go-co-op/gocron) - Planificación de trabajos en Go fácil y fluida. Es un fork mantenido activamente de [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron).
- [goflow](https://github.com/fieldryand/goflow) - Planificador de DAG y panel de control sencillo pero potente.
- [gron](https://github.com/roylee0704/gron) - Define tareas basadas en el tiempo mediante una API de Go sencilla y el planificador de Gron las ejecutará en consecuencia.
- [gronx](https://github.com/adhocore/gronx) - Analizador de expresiones cron, ejecutor de tareas y daemon que consume listas de tareas al estilo de crontab.
- [JobRunner](https://github.com/bamzi/jobrunner) - Planificador de trabajos cron inteligente y completo, con cola de trabajos y monitorización en vivo integradas.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Planificador de trabajos compatible con webhooks, crons y planificación clásica.
- [ofelia](https://github.com/netresearch/ofelia) - Planificador de trabajos para Docker (crontab para Docker); fork de mcuadros/ofelia que añade una interfaz web, dependencias entre trabajos, reintentos y persistencia de trabajos.
- [pending](https://github.com/kahoon/pending) - Planificador de tareas con debounce basado en ID para tareas diferidas, con cancelación, apagado ordenado y límites de concurrencia opcionales.
- [sched](https://github.com/romshark/sched) - Planificador de trabajos con la capacidad de adelantar el tiempo.
- [scheduler](https://github.com/carlescere/scheduler) - Planificación de cronjobs fácil.
- [scheduler](https://github.com/yuseferi/scheduler) - Planificador de trabajos distribuido nativo de Go con tareas diferidas, coordinación por lotes en Redis, reintentos, recuperación basada en concesiones y particionado de colas versionado.
- [tasks](https://github.com/madflojo/tasks) - Planificador en proceso fácil de usar para tareas recurrentes en Go.
- [tickstem/cron](https://github.com/tickstem/cron) - Cliente de Go para planificar trabajos cron HTTP, con historial de ejecuciones, alertas de fallos y tsk-local para probar manejadores sin credenciales reales.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - Cliente de Go para la monitorización de latidos tipo dead man's switch: haz ping a una URL tras cada ejecución de un trabajo y recibe una alerta por correo electrónico si los pings dejan de llegar.

**[⬆ volver arriba](#contents)**

## JSON

_Bibliotecas para trabajar con JSON._

- [ajson](https://github.com/spyzhov/ajson) - JSON abstracto para golang con soporte de JSONPath.
- [ask](https://github.com/simonnilsson/ask) - Acceso fácil a valores anidados en mapas y slices. Funciona en combinación con encoding/json y otros paquetes que deserializan ("Unmarshal") datos arbitrarios en tipos de datos de Go.
- [dynjson](https://github.com/cocoonspace/dynjson) - Formatos JSON personalizables por el cliente para API dinámicas.
- [ej](https://github.com/lucassscaravelli/ej) - Escribe y lee JSON de distintas fuentes de forma concisa.
- [epoch](https://github.com/vtopc/epoch) - Contiene primitivas para serializar/deserializar marcas de tiempo Unix (epoch) a/desde el tipo integrado time.Time en JSON.
- [fastjson](https://github.com/valyala/fastjson) - Analizador y validador de JSON rápido para Go. Sin structs personalizados, sin generación de código, sin reflexión.
- [gabs](https://github.com/Jeffail/gabs) - Para analizar, crear y editar JSON desconocido o dinámico en Go.
- [gjo](https://github.com/skanehira/gjo) - Pequeña utilidad para crear objetos JSON.
- [GJSON](https://github.com/tidwall/gjson) - Obtén un valor JSON con una sola línea de código.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError permite crear fácilmente errores de respuesta json que siguen la especificación JsonApi.
- [go-respond](https://github.com/nicklaw5/go-respond) - Paquete de Go para manejar respuestas JSON HTTP comunes.
- [gojmapr](https://github.com/limiu82214/gojmapr) - Obtén un struct sencillo a partir de un json complejo mediante rutas json.
- [gojq](https://github.com/elgs/gojq) - Consultas JSON en Golang.
- [gojson](https://github.com/ChimeraCoder/gojson) - Genera automáticamente definiciones de structs de Go (golang) a partir de un JSON de ejemplo.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Renderizado enriquecido de JSON como HTML en Go.
- [JayDiff](https://github.com/yazgazan/jaydiff) - Utilidad de comparación (diff) de JSON escrita en Go.
- [jettison](https://github.com/wI2L/jettison) - Codificador JSON rápido y flexible para Go.
- [jscan](https://github.com/romshark/jscan) - Iterador JSON de alto rendimiento y sin asignaciones de memoria.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - Convierte JSON en structs de Go.
- [JSON-to-Proto](https://json-to-proto.github.io/) - Convierte JSON en Protobuf en línea.
- [json2go](https://github.com/m-zajac/json2go) - Conversión avanzada de JSON a structs de Go. Proporciona un paquete que puede analizar varios documentos JSON y crear un struct que encaje con todos ellos.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - Bindings de Go basados en la referencia de errores de JSON API.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - Sustituto directo de `encoding/json` que genera JSON coloreado.
- [jsondiff](https://github.com/wI2L/jsondiff) - Biblioteca de comparación de JSON para Go basada en el RFC6902 (JSON Patch).
- [jsonf](https://github.com/miolini/jsonf) - Herramienta de consola para formatear JSON con resaltado y consultar structs a partir de JSON.
- [jsongo](https://github.com/ricardolonga/jsongo) - API fluida para facilitar la creación de objetos Json.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - Paquete sencillo de Go para serializar structs personalizados en respuestas JSON compatibles con HAL.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - Biblioteca JSON que expone manejadores sencillos que te permiten leer y escribir json fácilmente desde diversas fuentes.
- [jsonic](https://github.com/sinhashubham95/jsonic) - Utilidades para manejar y consultar JSON con seguridad de tipos sin definir structs.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - Biblioteca rápida y práctica para datos JSON no estructurados, que sustituye a `encoding/json`.
- [jzon](https://github.com/zerosnake0/jzon) - Biblioteca JSON con API y comportamiento compatibles con la biblioteca estándar.
- [kazaam](https://github.com/Qntfy/kazaam) - API para la transformación arbitraria de documentos JSON.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - MapSlice de Go para serializar/deserializar mapas en JSON manteniendo el orden.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - Deserialización de JSON eficiente para casos de uso flexibles.
- [mp](https://github.com/sanbornm/mp) - Analizador de correo electrónico sencillo para CLI. Actualmente recibe stdin y genera JSON.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go es un analizador de alto rendimiento con diversas herramientas JSON adicionales, incluido JSONPath.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Analizador de JSON sencillo con validación por condiciones mediante etiquetas de campos de structs de golang.
- [silentjson](https://github.com/GenshIv/silentjson) - Escáner y divisor de límites de JSON sin asignaciones de memoria que utiliza instrucciones SIMD AVX2.
- [SJSON](https://github.com/tidwall/sjson) - Establece un valor JSON con una sola línea de código.  
- [ujson](https://github.com/olvrng/ujson) - Analizador y transformador de JSON rápido y mínimo que funciona con JSON no estructurado.
- [vjson](https://github.com/miladibra10/vjson) - Paquete de Go para validar objetos JSON declarando un esquema JSON con una API fluida.

**[⬆ volver arriba](#contents)**

## Registro de logs

_Bibliotecas para generar archivos de log y trabajar con ellos._

- [caarlos0/log](https://github.com/caarlos0/log) - Logger colorido para CLI.
- [distillog](https://github.com/amoghe/distillog) - Registro por niveles destilado (piensa en ello como la biblioteca estándar + niveles de log).
- [glg](https://github.com/kpango/glg) - glg es una biblioteca de registro por niveles sencilla y rápida para Go.
- [glo](https://github.com/lajosbencz/glo) - Utilidad de registro inspirada en Monolog de PHP con niveles de gravedad idénticos.
- [glog](https://github.com/golang/glog) - Registros de ejecución por niveles para Go.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - Writer sencillo que rota automáticamente los archivos de log según la fecha y la hora actuales, como cronolog.
- [go-log](https://github.com/pieterclaerhout/go-log) - Biblioteca de registro con trazas de pila, volcado de objetos y marcas de tiempo opcionales.
- [go-log](https://github.com/subchen/go-log) - Registro sencillo y configurable en Go, con niveles, formateadores y writers.
- [go-log](https://github.com/siddontang/go-log) - Biblioteca de logs compatible con niveles y múltiples manejadores.
- [go-log](https://github.com/ian-kent/go-log) - Implementación de Log4j en Go.
- [go-log4g](https://github.com/go-log4g/core) - Log4g proporciona configuración y patrones de formato al estilo de Log4j para la fachada de registro estándar log/slog de Go.
- [go-logger](https://github.com/apsdehal/go-logger) - Logger sencillo para programas Go, con manejadores por niveles.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - Manejador de slog de solo anexado, encadenado mediante hashes y opcionalmente firmado con Ed25519, con verificación sin conexión de manipulaciones.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - Biblioteca de logs rápida, ampliable, completa y compatible a nivel de código fuente con la biblioteca estándar.
- [gslog](https://github.com/maguro/gslog) - Manejador de Google Cloud Logging para log/slog, con trazas y baggage de OpenTelemetry y etiquetas podinfo de Kubernetes.
- [httpretty](https://github.com/henvic/httpretty) - Imprime de forma legible tus solicitudes HTTP habituales en la terminal para depurar (similar a http.DumpRequest).
- [journald](https://github.com/ssgreg/journald) - Implementación en Go de la API nativa de systemd Journal para el registro.
- [kemba](https://github.com/clok/kemba) - Pequeña herramienta de registro de depuración inspirada en [debug](https://github.com/visionmedia/debug), ideal para herramientas y aplicaciones de CLI.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - TUI para leer y filtrar logs de journalctl, del sistema de archivos, de contenedores Docker y Podman, así como de pods de Kubernetes.
- [log](https://github.com/aerogo/log) - Sistema de registro O(1) que te permite conectar un log a varios writers (p. ej., stdout, un archivo y una conexión TCP).
- [log](https://github.com/apex/log) - Paquete de registro estructurado para Go.
- [log](https://github.com/go-playground/log) - Registro estructurado sencillo, configurable y escalable para Go.
- [log](https://github.com/teris-io/log) - Interfaz de registro estructurado para Go que separa limpiamente la fachada de registro de su implementación.
- [log](https://github.com/heartwilltell/log) - Envoltorio sencillo de registro por niveles sobre el paquete log estándar.
- [log](https://github.com/no-src/log) - Framework de registro sencillo listo para usar.
- [log15](https://github.com/inconshreveable/log15) - Registro sencillo y potente para Go.
- [logdump](https://github.com/ewwwwwqm/logdump) - Paquete para el registro multinivel.
- [logex](https://github.com/chzyer/logex) - Biblioteca de logs para Golang, compatible con seguimiento y niveles, que envuelve la biblioteca de logs estándar.
- [logger](https://github.com/azer/logger) - Biblioteca de registro minimalista para Go.
- [logo](https://github.com/mbndr/logo) - Logger de Golang hacia distintos writers configurables.
- [logrus](https://github.com/Sirupsen/logrus) - Logger estructurado para Go.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - Implementación de `io.Writer` que usa el logger [logrus](https://github.com/sirupsen/logrus).
- [logrusly](https://github.com/sebest/logrusly) - Plugin de [logrus](https://github.com/sirupsen/logrus) para enviar errores a [Loggly](https://www.loggly.com/).
- [logutils](https://github.com/hashicorp/logutils) - Utilidades para un registro ligeramente mejor en Go (Golang) que amplían el logger estándar.
- [logxi](https://github.com/mgutz/logxi) - Logger para aplicaciones 12-factor que es rápido y te hace feliz.
- [lumberjack](https://github.com/natefinch/lumberjack) - Logger rotativo sencillo que implementa io.WriteCloser.
- [mlog](https://github.com/jbrodriguez/mlog) - Módulo de registro sencillo para go, con 5 niveles, una función opcional de archivo de log rotativo y salida a stdout/stderr.
- [noodlog](https://github.com/gyozatech/noodlog) - Biblioteca de registro JSON parametrizada que te permite ofuscar datos sensibles y serializar cualquier tipo de contenido. Se acabaron los punteros impresos en lugar de valores y los caracteres de escape en las cadenas JSON.
- [onelog](https://github.com/francoispqt/onelog) - Onelog es un logger JSON tremendamente sencillo pero muy eficiente. Es el logger JSON más rápido que existe en todos los escenarios. Además, es uno de los loggers con menos asignaciones de memoria.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - Registro de alto rendimiento compatible con niveles de gravedad, categorización y filtrado. Puede enviar los mensajes de log filtrados a diversos destinos (p. ej., consola, red, correo).
- [phuslu/log](https://github.com/phuslu/log) - Registro estructurado de alto rendimiento.
- [pp](https://github.com/k0kubun/pp) - Impresión legible y coloreada para el lenguaje Go.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter es una implementación de `io.Writer` con rotación automática y múltiples políticas para la rotación de archivos de log.
- [seelog](https://github.com/cihub/seelog) - Funcionalidad de registro con despacho, filtrado y formateo flexibles.
- [sentry-go](https://github.com/getsentry/sentry-go) - SDK de Sentry para Go. Ayuda a monitorizar y rastrear errores con alertas en tiempo real y monitorización del rendimiento.
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade for Golang: registro estructurado sencillo, pero potente, ampliable y personalizable, con muchísimo aprendizaje de décadas de frameworks de registro anteriores.
- [slog](https://github.com/gookit/slog) - Logger ligero, configurable y ampliable para Go.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - Configura el logger log/slog de la biblioteca estándar a partir de variables de entorno: nivel, formato, ubicación en el código fuente y separación entre stdout y stderr.
- [slog-datadog](https://github.com/samber/slog-datadog) - Manejador de slog para Datadog.
- [slog-formatter](https://github.com/samber/slog-formatter) - Formateadores comunes para slog y utilidades para crear los tuyos propios.
- [slog-logrus](https://github.com/samber/slog-logrus) - Manejador de slog para Logrus.
- [slog-loki](https://github.com/samber/slog-loki) - Manejador de slog para Grafana Loki.
- [slog-multi](https://github.com/samber/slog-multi) - Cadena de slog.Handler (canalización, fanout...).
- [slog-sentry](https://github.com/samber/slog-sentry) - Manejador de slog para Sentry.
- [slog-slack](https://github.com/samber/slog-slack) - Manejador de slog para Slack.
- [slog-zap](https://github.com/samber/slog-zap) - Manejador de slog para Zap.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Manejador de slog para Zerolog.
- [slogor](https://gitlab.com/greyxor/slogor) - Manejador de slog colorido.
- [spew](https://github.com/davecgh/go-spew) - Implementa una impresión legible en profundidad de estructuras de datos de Go para ayudar en la depuración.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Logger para controladores de bases de datos SQL de Go sin modificar el uso existente de \*sql.DB de la biblioteca estándar.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog es una biblioteca orientada a objetos que proporciona registro por niveles. Es muy útil para tareas cron.
- [structy/log](https://github.com/structy/log) - Sistema de logs fácil de usar, minimalista pero con funciones para la depuración y la diferenciación de mensajes.
- [tail](https://github.com/hpcloud/tail) - Paquete de Go que intenta emular las funciones del programa tail de BSD.
- [timberjack](https://github.com/DeRuina/timberjack) - Logger rotativo con rotación basada en tamaño, en tiempo y en horarios programados, compatible con compresión y limpieza.
- [tint](https://github.com/lmittmann/tint) - slog.Handler que escribe logs coloreados.
- [xlog](https://github.com/xfxdev/xlog) - Sistema de logs flexible con arquitectura de plugins para Go, con control de niveles, múltiples destinos de log y formato de log personalizado.
- [xlog](https://github.com/rs/xlog) - Logger estructurado para manejadores HTTP que usan `net/context`, con despacho flexible.
- [xylog](https://github.com/xybor-x/xylog) - Registro por niveles y estructurado, campos dinámicos, alto rendimiento, gestión de zonas, configuración sencilla y sintaxis legible.
- [yell](https://github.com/jfcg/yell) - Otra biblioteca de registro minimalista más.
- [zap](https://github.com/uber-go/zap) - Registro rápido, estructurado y por niveles en Go.
- [zax](https://github.com/yuseferi/zax) - Integra Context con el logger Zap, lo que aporta más flexibilidad al registro en Go.
- [zerolog](https://github.com/rs/zerolog) - Logger JSON sin asignaciones de memoria.
- [zkits-logger](https://github.com/edoger/zkits-logger) - Potente logger JSON sin dependencias.
- [zl](https://github.com/nkmr-jp/zl) - Logger basado en zap con una gran experiencia para desarrolladores. Ofrece una funcionalidad completa, pero es fácil de configurar.

**[⬆ volver arriba](#contents)**

## Aprendizaje automático

_Bibliotecas de aprendizaje automático._

- [Anneal](https://github.com/georgebuilds/anneal) - Compilador de aprendizaje automático en Go, un port desde cero de tinygrad con backend WebGPU.
- [bayesian](https://github.com/jbrukh/bayesian) - Clasificación bayesiana ingenua para Golang.
- [born](https://github.com/born-ml/born) - Framework de aprendizaje profundo inspirado en Burn (Rust), con autograd, tensores con seguridad de tipos y aceleración por GPU sin CGO.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - Biblioteca de Gradient Boosting sobre árboles de decisión rápida, escalable y de alto rendimiento. Golang con Cgo para una inferencia ultrarrápida con modelos CatBoost.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Conjuntos (ensembles) de árboles de decisión rápidos, flexibles y multihilo para el aprendizaje automático en Go puro.
- [datatrax](https://github.com/rbmuller/datatrax) - Kit de herramientas de ingeniería de datos y ML clásico con procesamiento por lotes, conversión de tipos y 7 algoritmos en Go puro sin dependencias.
- [ddt](https://github.com/sgrodriguez/ddt) - Árbol de decisión dinámico: crea árboles definiendo reglas personalizables.
- [eaopt](https://github.com/MaxHalford/eaopt) - Biblioteca de optimización evolutiva.
- [evoli](https://github.com/khezen/evoli) - Biblioteca de algoritmos genéticos y optimización por enjambre de partículas.
- [fonet](https://github.com/Fontinalis/fonet) - Biblioteca de redes neuronales profundas escrita en Go.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Implementación en Go de los algoritmos de agrupamiento k-modes y k-prototypes.
- [go-deep](https://github.com/patrikeh/go-deep) - Biblioteca de redes neuronales en Go con muchas funciones.
- [go-fann](https://github.com/white-pony/go-fann) - Bindings de Go para la biblioteca Fast Artificial Neural Networks (FANN).
- [go-galib](https://github.com/thoj/go-galib) - Biblioteca de algoritmos genéticos escrita en Go / golang.
- [go-pr](https://github.com/daviddengcn/go-pr) - Paquete de reconocimiento de patrones en lenguaje Go.
- [gobrain](https://github.com/goml/gobrain) - Redes neuronales escritas en go.
- [godist](https://github.com/e-dard/godist) - Diversas distribuciones de probabilidad y métodos asociados.
- [goga](https://github.com/tomcraven/goga) - Biblioteca de algoritmos genéticos para Go.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Biblioteca de aprendizaje automático de propósito general para Go.
- [GoMind](https://github.com/surenderthakran/gomind) - Biblioteca de redes neuronales simplista en Go.
- [goml](https://github.com/cdipaolo/goml) - Aprendizaje automático en línea en Go.
- [GoMLX](https://github.com/gomlx/gomlx) - Framework de aprendizaje automático acelerado para Go.
- [gonet](https://github.com/dathoangnd/gonet) - Red neuronal para Go.
- [Goptuna](https://github.com/c-bata/goptuna) - Framework de optimización bayesiana para funciones de caja negra escrito en Go. Todo será optimizado.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Biblioteca de algoritmos de recomendación escrita en Go.
- [gorgonia](https://github.com/gorgonia/gorgonia) - Biblioteca computacional basada en grafos similar a Theano para Go que proporciona primitivas para construir diversos algoritmos de aprendizaje automático y redes neuronales.
- [gorse](https://github.com/zhenghaoz/gorse) - Backend de sistema de recomendación offline basado en filtrado colaborativo escrito en Go.
- [goscore](https://github.com/asafschers/goscore) - API de puntuación en Go para PMML.
- [gosseract](https://github.com/otiai10/gosseract) - Paquete de Go para OCR (reconocimiento óptico de caracteres) que usa la biblioteca Tesseract de C++.
- [hugot](https://github.com/knights-analytics/hugot) - Canalizaciones de transformers de Huggingface para golang con onnxruntime.
- [libsvm](https://github.com/datastream/libsvm) - Versión para golang de libsvm, obra derivada basada en LIBSVM 3.14.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Herramienta de CLI para transpilar modelos de ML clásico entrenados a código Go nativo sin dependencias, escrita en Python con soporte para el lenguaje Go.
- [neural-go](https://github.com/schuyler/neural-go) - Red de perceptrón multicapa implementada en Go, con entrenamiento mediante retropropagación.
- [ocrserver](https://github.com/otiai10/ocrserver) - Servidor de API de OCR sencillo, realmente fácil de desplegar con Docker y Heroku.
- [onnx-go](https://github.com/owulveryck/onnx-go) - Interfaz de Go para Open Neural Network Exchange (ONNX).
- [probab](https://github.com/ThePaw/probab) - Funciones de distribución de probabilidad. Inferencia bayesiana. Escrito en Go puro.
- [randomforest](https://github.com/malaschitz/randomForest) - Biblioteca de Random Forest fácil de usar para Go.
- [regommend](https://github.com/muesli/regommend) - Motor de recomendación y filtrado colaborativo.
- [shield](https://github.com/eaigner/shield) - Clasificador de texto bayesiano con tokenizadores y backends de almacenamiento flexibles para Go.
- [tfgo](https://github.com/galeone/tfgo) - Bindings de Tensorflow fáciles de usar: simplifica el uso de los bindings oficiales de Tensorflow para Go. Define grafos computacionales en Go y carga y ejecuta modelos entrenados en Python.
- [Varis](https://github.com/Xamber/Varis) - Red neuronal en Golang.

**[⬆ volver arriba](#contents)**

## Mensajería

_Bibliotecas que implementan sistemas de mensajería._

- [ami](https://github.com/kak-tus/ami) - Cliente de Go para colas fiables basadas en Redis Cluster Streams.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Biblioteca cliente de RabbitMQ para Go.
- [APNs2](https://github.com/sideshow/apns2) - Proveedor de Apple Push Notification sobre HTTP/2 para Go: envía notificaciones push a aplicaciones de iOS, tvOS, Safari y OSX.
- [Asynq](https://github.com/hibiken/asynq) - Cola de tareas distribuida sencilla, fiable y eficiente para Go, construida sobre Redis.
- [backlite](https://github.com/mikestefanello/backlite) - Colas de tareas embebidas, persistentes y con seguridad de tipos, y ejecutor de trabajos en segundo plano con SQLite.
- [Beaver](https://github.com/Clivern/Beaver) - Servidor de mensajería en tiempo real para crear notificaciones dentro de la aplicación escalables, juegos multijugador y aplicaciones de chat en aplicaciones web y móviles.
- [broker](https://github.com/qvcloud/broker) - Abstracción de mensajería de nivel de producción con una API unificada para diversos brokers e integración con OpenTelemetry incorporada.
- [Bus](https://github.com/mustafaturan/bus) - Implementación minimalista de un bus de mensajes para la comunicación interna.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Servidor de mensajería en tiempo real (Websockets o SockJS) en Go.
- [Chanify](https://github.com/chanify/chanify) - Servidor de notificaciones push que envía mensajes a tus dispositivos iOS.
- [Commander](https://github.com/jeroenrinzema/commander) - Consumidor/productor de alto nivel orientado a eventos compatible con varios "dialectos", como Apache Kafka.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go es el cliente de Golang de Confluent para Apache Kafka y Confluent Platform.
- [dbus](https://github.com/godbus/dbus) - Bindings nativos de Go para D-Bus.
- [drone-line](https://github.com/appleboy/drone-line) - Envío de notificaciones de [Line](https://at.line.me/en) mediante un binario, docker o Drone CI.
- [emitter](https://github.com/olebedev/emitter) - Emite eventos al estilo de Go, con comodines, predicados, posibilidad de cancelación y muchas otras ventajas.
- [event](https://github.com/agoalofalife/event) - Implementación del patrón observador.
- [EventBus](https://github.com/asaskevich/EventBus) - Bus de eventos ligero compatible con operaciones asíncronas.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Cliente de Gaurun escrito en Go.
- [Glue](https://github.com/desertbit/glue) - Biblioteca de sockets robusta para Go y Javascript (alternativa a Socket.io).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Paquete de bus de eventos sencillo para Go.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - Biblioteca para manejar patrones mediador y patrones CQRS simplificados dentro de una arquitectura orientada a eventos, inspirada en la biblioteca MediatR de C#.
- [go-mq](https://github.com/cheshir/go-mq) - Cliente de RabbitMQ con configuración declarativa.
- [go-notify](https://github.com/TheCreeper/go-notify) - Implementación nativa de la especificación de notificaciones de freedesktop.
- [go-nsq](https://github.com/nsqio/go-nsq) - El paquete oficial de Go para NSQ.
- [go-res](https://github.com/jirenius/go-res) - Paquete para crear servicios REST/en tiempo real en los que los clientes se sincronizan sin fisuras, usando NATS y Resgate.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Biblioteca cliente para el servicio web Vitotrol de Viessmann.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - Biblioteca de bus de eventos ultrarrápida, en memoria y sin bloqueos
- [Gollum](https://github.com/trivago/gollum) - Multiplexor n:m que recopila mensajes de distintas fuentes y los difunde a un conjunto de destinos.
- [golongpoll](https://github.com/jcuga/golongpoll) - Biblioteca de servidor HTTP de long polling que simplifica el pub/sub web.
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster es un clúster de servidores push en go.
- [gorush](https://github.com/appleboy/gorush) - Servidor de notificaciones push que usa [APNs2](https://github.com/sideshow/apns2) y [GCM](https://github.com/google/go-gcm) de Google.
- [gosd](https://github.com/alexsniffin/gosd) - Biblioteca para planificar cuándo despachar un mensaje a un canal.
- [guble](https://github.com/smancke/guble) - Servidor de mensajería que usa notificaciones push (Google Firebase Cloud Messaging, Apple Push Notification services, SMS), así como websockets y una API REST, con funcionamiento distribuido y persistencia de mensajes.
- [hare](https://github.com/leozz37/hare) - Biblioteca fácil de usar para enviar mensajes y escuchar en sockets TCP.
- [hub](https://github.com/leandro-lugaresi/hub) - Hub de mensajes/eventos para aplicaciones Go, que usa el patrón publicación/suscripción con soporte de alias como los exchanges de rabbitMQ.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Compara eventos con grandes conjuntos de reglas, escritas en Go o como JSON.
- [jazz](https://github.com/socifi/jazz) - Capa de abstracción sencilla de RabbitMQ para la administración de colas y la publicación y el consumo de mensajes.
- [kiln](https://github.com/rafaelaugustos/kiln) - Trabajos en segundo plano persistentes en PostgreSQL, MySQL o SQLite, con reintentos, flujos de trabajo, trabajos recurrentes y un panel de control.
- [machinery](https://github.com/RichardKnop/machinery) - Cola de tareas/trabajos asíncrona basada en el paso de mensajes distribuido.
- [mangos](https://github.com/nanomsg/mangos) - Implementación en Go puro de Nanomsg ("Scalability Protocols") con interoperabilidad de transportes.
- [melody](https://github.com/olahol/melody) - Framework minimalista para gestionar sesiones de websocket, que incluye difusión y gestión automática de ping/pong.
- [Mercure](https://github.com/dunglas/mercure) - Servidor y biblioteca para despachar actualizaciones enviadas por el servidor mediante el protocolo Mercure (construido sobre Server-Sent Events).
- [messagebus](https://github.com/vardius/message-bus) - messagebus es un bus de mensajes asíncrono y sencillo para Go, perfecto para usarlo como bus de eventos al aplicar event sourcing, CQRS y DDD.
- [NATS Go Client](https://github.com/nats-io/nats.go) - Cliente de Go para el sistema de
  mensajería NATS.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - Pequeño envoltorio sobre los topics y canales de NSQ.
- [oplog](https://github.com/dailymotion/oplog) - Sistema genérico de oplog/replicación para API REST.
- [pubsub](https://github.com/tuxychandru/pubsub) - Paquete de pub/sub sencillo para go.
- [Quamina](https://github.com/timbray/quamina) - Coincidencia de patrones rápida para filtrar mensajes y eventos.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - Biblioteca ligera que gestiona la reconexión automática y los reintentos de publicación de RabbitMQ. La biblioteca tiene en cuenta la necesidad de volver a declarar las entidades en RabbitMQ tras la reconexión.
- [rabbus](https://github.com/rafaeljesus/rabbus) - Pequeño envoltorio sobre los exchanges y colas de amqp.
- [rabtap](https://github.com/jandelgado/rabtap) - Aplicación de CLI navaja suiza para RabbitMQ.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ es una biblioteca ligera y fiable para gestionar colas de mensajes locales.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus es un servidor de colas de tareas asíncronas RESTful.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue proporciona un productor y un consumidor para una cola que usa streams de Redis.
- [rmqconn](https://github.com/sbabiv/rmqconn) - Reconexión de RabbitMQ. Envoltorio sobre amqp.Connection y amqp.Dial. Permite reconectar cuando la conexión se interrumpe, antes de forzar su cierre con una llamada al método Close ().
- [sarama](https://github.com/Shopify/sarama) - Biblioteca de Go para Apache Kafka.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - Servicio push unificado respaldado por Redis para notificaciones del lado del servidor a dispositivos móviles.
- [varmq](https://github.com/goptics/varmq) - Cola de mensajes independiente del almacenamiento y pool de workers para programas Go concurrentes.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - Trabaja de forma eficiente con flujos de mensajes. Crea aplicaciones orientadas a eventos y habilita event sourcing, RPC sobre mensajes y sagas. Puede usar implementaciones de pub/sub convencionales como Kafka o RabbitMQ, pero también HTTP o el binlog de MySQL.
- [zmq4](https://github.com/pebbe/zmq4) - Interfaz de Go para ZeroMQ versión 4. También disponible para la [versión 3](https://github.com/pebbe/zmq3) y la [versión 2](https://github.com/pebbe/zmq2).

**[⬆ volver arriba](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Biblioteca escrita íntegramente en Go para crear y procesar documentos de Office Word (.docx), Excel (.xlsx) y Powerpoint (.pptx).

### Microsoft Excel

_Bibliotecas para trabajar con Microsoft Excel._

- [cellwalker](https://github.com/chonla/cellwalker) - Recorre virtualmente Excel celda a celda por su nombre.
- [excelize](https://github.com/xuri/excelize) - Biblioteca de Golang para leer y escribir archivos de Microsoft Excel&trade; (XLSX).
- [exl](https://github.com/go-the-way/exl) - Binding de Excel a structs escrito en Go. (Solo compatible con Go1.18+)
- [go-excel](https://github.com/szyhf/go-excel) - Lector sencillo y ligero para leer como tabla un Excel con estructura similar a una base de datos relacional.
- [xlsx](https://github.com/tealeg/xlsx) - Biblioteca para simplificar la lectura del formato XML usado por las versiones recientes de Microsoft Excel en programas Go.
- [xlsx](https://github.com/plandem/xlsx) - Forma rápida y segura de leer/actualizar tus archivos existentes de Microsoft Excel en programas Go.

### Microsoft Word

_Bibliotecas para trabajar con Microsoft Word._

- [godocx](https://github.com/gomutex/godocx) - Biblioteca para leer y escribir archivos de Microsoft Word (Docx).

**[⬆ volver arriba](#contents)**

## Varios

### Inyección de dependencias

_Bibliotecas para trabajar con inyección de dependencias._

- [alice](https://github.com/magic003/alice) - Contenedor de inyección de dependencias aditivo para Golang.
- [autowire](https://github.com/tiendc/autowire) - Inyección de dependencias mediante genéricos y reflexión.
- [boot-go](http://github.com/boot-go/boot) - Desarrollo basado en componentes con inyección de dependencias mediante reflexión para desarrolladores de Go.
- [componego](https://github.com/componego/componego) - Framework de inyección de dependencias basado en componentes, que permite sustituir dependencias de forma dinámica sin duplicar código en las pruebas.
- [cosban/di](https://gitlab.com/cosban/di) - Herramienta de conexión de inyección de dependencias basada en generación de código.
- [dig](https://github.com/uber-go/dig) - Kit de herramientas de inyección de dependencias basado en reflexión para Go.
- [dingo](https://github.com/i-love-flamingo/dingo) - Kit de herramientas de inyección de dependencias para Go, basado en Guice.
- [do](https://github.com/samber/do) - Framework de inyección de dependencias basado en genéricos.
- [floatdrop/di](https://github.com/floatdrop/di) - Contenedor de inyección de dependencias construido sobre métodos genéricos, con ámbitos hijos, hooks de ciclo de vida y validación del grafo antes de construir nada.
- [fx](https://github.com/uber-go/fx) - Framework de aplicaciones basado en inyección de dependencias para Go (construido sobre dig).
- [go-beans](https://github.com/go-beans/go) - Framework de inyección de dependencias y ciclo de vida de aplicaciones para Go inspirado en Spring.
- [Go-Spring](https://github.com/go-spring/spring-core) - Framework de Go de alto rendimiento inspirado en Spring Boot, que ofrece DI, configuración automática y gestión del ciclo de vida manteniendo la sencillez y la eficiencia de Go.
- [gocontainer](https://github.com/vardius/gocontainer) - Contenedor de inyección de dependencias sencillo.
- [godi](https://github.com/junioryono/godi) - Inyección de dependencias al estilo de Microsoft para Go, con tiempos de vida con ámbito y genéricos.
- [goioc/di](https://github.com/goioc/di) - Contenedor de inyección de dependencias inspirado en Spring.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container es un contenedor de inyección de dependencias IoC ligero pero potente para el lenguaje de programación Go.
- [gontainer](https://github.com/NVIDIA/gontainer) - Contenedor de servicios de inyección de dependencias para proyectos Go.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - Contenedor de inyección de dependencias basado en YAML para GO. Admite ámbitos de dependencias y detección automática de dependencias circulares. Gontainer es seguro para concurrencia.
- [HnH/di](https://github.com/HnH/di) - Biblioteca de contenedor DI centrada en una API limpia y en la flexibilidad.
- [kinit](https://github.com/go-kata/kinit) - Contenedor de inyección de dependencias personalizable con modo global, inicialización en cascada y finalización segura ante panics.
- [kod](https://github.com/go-kod/kod) - Framework de inyección de dependencias basado en genéricos para Go.
- [linker](https://github.com/logrange/linker) - Biblioteca de inyección de dependencias e inversión de control basada en reflexión, con soporte del ciclo de vida de los componentes.
- [nject](https://github.com/muir/nject) - Framework reflexivo y con seguridad de tipos para bibliotecas, pruebas, endpoints http y arranque de servicios.
- [ore](https://github.com/firasdarwish/ore) - Contenedor de inyección de dependencias (DI) ligero, genérico y sencillo.
- [parsley](https://github.com/matzefriedrich/parsley) - Biblioteca de DI flexible y modular basada en reflexión, con funciones avanzadas como contextos con ámbito y generación de proxies, diseñada para aplicaciones Go a gran escala.
- [wire](https://github.com/Fs02/wire) - Inyección de dependencias estricta en tiempo de ejecución para Golang.
- [yama](https://github.com/livetribe/yama) - Framework de inyección de dependencias en tiempo de compilación y de ciclo de vida que genera código de arranque, reposo y parada para grafos de Google Wire.

**[⬆ volver arriba](#contents)**

### Estructura de proyectos

_Conjunto **no oficial** de patrones para estructurar proyectos._

- [ardanlabs/service](https://github.com/ardanlabs/service) - [Kit de inicio](https://github.com/ardanlabs/service/wiki) para crear aplicaciones de servicios web escalables y de nivel de producción.
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - Plantilla de código base para aplicaciones Go que permite iniciar proyectos rápidamente siguiendo las buenas prácticas de producción.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - Permite a los usuarios crear rápidamente un proyecto Go usando un framework popular.
- [go-ddd](https://github.com/sklinkert/go-ddd) - Plantilla de Domain-Driven Design con CQRS, objetos de valor, comandos idempotentes y un outbox transaccional.
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Monorepo de ejemplo para microservicios gRPC en Go con Bazel, grpc-gateway, OpenAPI y Kubernetes.
- [go-module](https://github.com/octomation/go-module) - Plantilla para un módulo típico escrito en Go.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - Código base de API REST en Go apto para la IA y listo para producción, con arquitectura limpia, autenticación JWT, RBAC, PostgreSQL, recarga en caliente con Docker y documentación Swagger.
- [go-sample](https://github.com/zitryss/go-sample) - Estructura de ejemplo para proyectos de aplicaciones Go con código real.
- [go-starter](https://github.com/allaboutapps/go-starter) - Plantilla de backend JSON RESTful lista para producción y con convenciones propias, muy integrada con VSCode DevContainers.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - Ejemplo de backend de tareas pendientes (Todo) en Go que usa una estructura de proyecto modular para un microservicio de producto.
- [goapp](https://github.com/naughtygopher/goapp) - Guía con convenciones propias para estructurar y desarrollar una aplicación/servicio web en Go.
- [gobase](https://github.com/wajox/gobase) - Esqueleto sencillo para aplicaciones golang con la configuración básica de una aplicación golang real.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Conjunto de patrones de estructura de proyectos comunes, históricos y emergentes en el ecosistema Go. Nota: a pesar del nombre de la organización, no representan estándares oficiales de golang; consulta [este issue](https://github.com/golang-standards/project-layout/issues/117) para más información. No obstante, a algunas personas esta estructura les puede resultar útil.
- [golang-templates/seed](https://github.com/golang-templates/seed) - Plantilla de repositorio de GitHub para aplicaciones Go.
- [goxygen](https://github.com/shpota/goxygen) - Genera un proyecto web moderno con Go y Angular, React o Vue en segundos.
- [insidieux/inizio](https://github.com/insidieux/inizio) - Generador de estructuras de proyectos Golang con plugins.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - Plantilla minimalista de servidor HTTP de Go en un solo archivo, sin dependencias de terceros.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - Código base y ejemplo de aplicación Go que aplica prácticas modernas.
- [nunu](https://github.com/go-nunu/nunu) - Nunu es una herramienta de scaffolding para crear aplicaciones Go.
- [pagoda](https://github.com/mikestefanello/pagoda) - Kit de inicio para el desarrollo web full-stack rápido y fácil, construido en Go.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold genera una estructura inicial de proyecto Go. Te permite centrarte en implementar la lógica de negocio.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Conjunto de prácticas y debates sobre cómo estructurar un proyecto Go.

**[⬆ volver arriba](#contents)**

### Cadenas de texto

_Bibliotecas para trabajar con cadenas de texto._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Implementación en Go del mecanismo de expansión de llaves (Brace Expansion) para generar cadenas arbitrarias.
- [caps](https://github.com/chanced/caps) - Biblioteca de conversión de mayúsculas y minúsculas.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - Implementa **campos de reemplazo** rodeados de llaves `{}` en cadenas de formato.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - Biblioteca de manipulación de cadenas para convertir cadenas a camel case, snake case, kebab case / slugify, etc.
- [str](https://github.com/schigh/str) - Kit de herramientas de cadenas centrado en canalizaciones para componer transformaciones.
- [strcase](https://github.com/charlievieth/strcase) - Implementación sin distinción entre mayúsculas y minúsculas de los paquetes strings/bytes de la biblioteca estándar.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Formateo de cadenas al estilo de Python o C#, con funciones adicionales de formato de texto.
- [strutil](https://github.com/ozgio/strutil) - Utilidades para cadenas.
- [sttr](https://github.com/abhimanyu003/sttr) - Aplicación de CLI multiplataforma para realizar diversas operaciones con cadenas.
- [xstrings](https://github.com/huandu/xstrings) - Colección de funciones útiles para cadenas portadas desde otros lenguajes.

**[⬆ volver arriba](#contents)**

### Sin categoría

_Estas bibliotecas se colocaron aquí porque ninguna de las otras categorías parecía encajar._

- [anagent](https://github.com/mudler/anagent) - Manejador de bucle de eventos/temporizadores para Golang, minimalista y extensible mediante plugins, con inyección de dependencias.
- [antch](https://github.com/antchfx/antch) - Framework de rastreo y scraping web rápido, potente y extensible.
- [archives](https://github.com/mholt/archives) - Biblioteca de Go multiplataforma y multiformato para trabajar con archivos comprimidos y formatos de compresión mediante una API unificada y como sistemas de archivos virtuales compatibles con io/fs.
- [autoflags](https://github.com/artyom/autoflags) - Paquete de Go para definir automáticamente flags de línea de comandos a partir de campos de structs.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Calcula la puntuación media y la valoración basándose en la ecuación de puntuación de Wilson.
- [banner](https://github.com/dimiro1/banner) - Añade bonitos banners a tus aplicaciones Go.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch admite captchas de dígitos, números, alfabeto, aritmética, audio y dígitos-alfabeto.
- [basexx](https://github.com/bobg/basexx) - Convierte cadenas de dígitos a, desde y entre diversas bases numéricas.
- [battery](https://github.com/distatus/battery) - Biblioteca multiplataforma de información normalizada de la batería.
- [bitio](https://github.com/icza/bitio) - Reader y Writer a nivel de bits altamente optimizados para Go.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - Biblioteca de GoLang para el [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - El paquete captcha proporciona una API fácil de usar y sin imposiciones para generar captchas.
- [common](https://github.com/kubeservice-stack/common) - Biblioteca para frameworks de servidor.
- [conv](https://github.com/cstockton/go-conv) - El paquete conv proporciona conversiones rápidas e intuitivas entre tipos de Go.
- [datacounter](https://github.com/miolini/datacounter) - Contadores de Go para readers/writers/http.ResponseWriter.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - Generador sencillo y actualizado de user agents falsos con una base de datos del mundo real en Golang
- [faker](https://github.com/pioz/faker) - Generador de datos falsos aleatorios y de structs para Go.
- [ffmt](https://github.com/go-ffmt/ffmt) - Embellece la visualización de datos para humanos.
- [gatus](https://github.com/TwinProduction/gatus) - Panel automatizado del estado de los servicios.
- [go-commandbus](https://github.com/lana/go-commandbus) - Bus de comandos ligero y extensible mediante plugins para Go.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Pool de objetos genérico para Golang.
- [go-openapi](https://github.com/go-openapi) - Colección de paquetes para analizar y utilizar esquemas open-api.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Patrones de resiliencia para golang.
- [go-unarr](https://github.com/gen2brain/go-unarr) - Biblioteca de descompresión para archivos RAR, TAR, ZIP y 7z.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Generador de datos aleatorios escrito en go.
- [goffi](https://github.com/go-webgpu/goffi) - FFI escrita íntegramente en Go con una interfaz de llamadas tipada al estilo de libffi y gestión estructurada de errores para llamar a bibliotecas de C sin CGO.
- [gommit](https://github.com/antham/gommit) - Analiza los mensajes de commit de git para garantizar que siguen los patrones definidos.
- [gopsutil](https://github.com/shirou/gopsutil) - Biblioteca multiplataforma para obtener el uso de procesos y del sistema (CPU, memoria, discos, etc.).
- [gosh](https://github.com/osamingo/gosh) - Proporciona un manejador de estadísticas de Go, un struct y un método de medición.
- [gosms](https://github.com/haxpax/gosms) - Tu propia pasarela de SMS local en Go que puede usarse para enviar SMS.
- [gotoprom](https://github.com/cabify/gotoprom) - Biblioteca envoltorio de constructores de métricas con seguridad de tipos para el cliente oficial de Prometheus.
- [gountries](https://github.com/pariz/gountries) - Paquete que expone datos de países y subdivisiones.
- [gtree](https://github.com/ddddddO/gtree) - Proporciona una CLI, un paquete y una web para generar salidas en árbol y crear directorios a partir de Markdown o mediante programación.
- [health](https://github.com/alexliesenfeld/health) - Biblioteca de comprobación de estado sencilla y flexible para Go.
- [health](https://github.com/dimiro1/health) - Biblioteca de comprobación de estado fácil de usar y ampliable.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - Manejador HTTP de comprobación de estado concurrente y con convenciones propias para servicios RESTful.
- [hostutils](https://github.com/Wing924/hostutils) - Biblioteca de golang para empaquetar y desempaquetar listas de FQDN.
- [indigo](https://github.com/osamingo/indigo) - Generador de ID únicos distribuido que usa Sonyflake y codificación Base58.
- [lk](https://github.com/hyperboloide/lk) - Biblioteca de licencias sencilla para golang.
- [llvm](https://github.com/llir/llvm) - Biblioteca para interactuar con LLVM IR en Go puro.
- [metrics](https://github.com/pascaldekloe/metrics) - Biblioteca para la instrumentación de métricas y su exposición a Prometheus.
- [morse](https://github.com/alwindoss/morse) - Biblioteca para convertir a y desde código morse.
- [numa](https://github.com/lrita/numa) - NUMA es una biblioteca de utilidades escrita en go. Nos ayuda a escribir código consciente de NUMA.
- [pdfgen](https://github.com/hyperboloide/pdfgen) - Servicio HTTP para generar PDF a partir de solicitudes Json.
- [persian](https://github.com/mavihq/persian) - Algunas utilidades para el idioma persa en go.
- [purego](https://github.com/ebitengine/purego) - Biblioteca para llamar a funciones de C desde Go sin Cgo.
- [sandid](https://github.com/aofei/sandid) - Cada grano de arena de la Tierra tiene su propio ID.
- [shellwords](https://github.com/Wing924/shellwords) - Biblioteca de Golang para manipular cadenas según las reglas de análisis de palabras del shell Bourne de UNIX.
- [shortid](https://github.com/teris-io/shortid) - Generación distribuida de ID muy cortos, únicos, no secuenciales y aptos para URL.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - Biblioteca de notificaciones que facilita el acceso a diversos servicios de mensajería como slack, mattermost, gotify y smtp, entre otros.
- [sitemap-format](https://github.com/mingard/sitemap-format) - Generador sencillo de sitemaps, con un poco de azúcar sintáctico.
- [stateless](https://github.com/qmuntal/stateless) - Biblioteca fluida para crear máquinas de estados.
- [stats](https://github.com/go-playground/stats) - Monitoriza las MemStats de Go y estadísticas del sistema como memoria, swap y CPU, y las envía por UDP a donde quieras para registrarlas, etc.
- [turtle](https://github.com/hackebrot/turtle) - Emojis para Go.
- [url-shortener](https://github.com/pantrif/url-shortener) - Microservicio acortador de URL moderno, potente y robusto con soporte de mysql.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - Genera código repetitivo para el manejo de la entrada y la salida http.
- [varint](https://github.com/chmike/varint) - Codificador/decodificador de enteros de longitud variable más rápido que el que proporciona la biblioteca estándar.
- [xdg](https://github.com/rkoesters/xdg) - Especificaciones de FreeDesktop.org (xdg) implementadas en Go.
- [xkg](https://github.com/go-xkg/xkg) - Capturador de teclado X (X Keyboard Grabber).
- [xz](https://github.com/ulikunitz/xz) - Paquete escrito íntegramente en golang para leer y escribir archivos comprimidos con xz.
**[⬆ volver arriba](#contents)**

## Procesamiento del lenguaje natural

_Bibliotecas para trabajar con lenguajes humanos._

Consulta también [Procesamiento de texto](#text-processing) y [Análisis de texto](#text-analysis).

### Detección de idioma

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - Cliente de Go para la API de detección de idioma Language Detection. Admite solicitudes por lotes y la detección del idioma de frases cortas o de palabras sueltas.
- [getlang](https://github.com/rylans/getlang) - Paquete rápido de detección del lenguaje natural.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Funciones para determinar el lenguaje natural de un texto unicode.
- [lingua-go](https://github.com/pemistahl/lingua-go) - Biblioteca precisa de detección del lenguaje natural, adecuada tanto para textos largos como cortos. Permite detectar varios idiomas en textos que mezclan idiomas.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Paquete de detección del lenguaje natural para Go. Admite 84 idiomas y 24 escrituras (sistemas de escritura, p. ej., latino, cirílico, etc.).

### Analizadores morfológicos

- [go-propisyu](https://github.com/rekurt/go-propisyu) - Convierte números en palabras en ruso con el género gramatical y la declinación de sustantivos correctos.
- [go-stem](https://github.com/agonopol/go-stem) - Implementación del algoritmo de stemming de Porter.
- [go2vec](https://github.com/danieldk/go2vec) - Lector y funciones de utilidad para embeddings de word2vec.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Bindings de Go para la biblioteca libstemmer de snowball, incluido porter 2.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Analizador de sentimientos que usa el léxico sentiwordnet en Go.
- [govader](https://github.com/jonreiter/govader) - Implementación en Go de [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment).
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - Implementación como microservicio de [GoVader](https://github.com/jonreiter/govader).
- [kagome](https://github.com/ikawaha/kagome) - Analizador morfológico de japonés escrito en Go puro.
- [libtextcat](https://github.com/goodsign/libtextcat) - Binding de Cgo para la biblioteca de C libtextcat. Compatibilidad garantizada con la versión 2.2.
- [nlp](https://github.com/james-bowman/nlp) - Biblioteca de procesamiento del lenguaje natural en Go compatible con LSA (análisis semántico latente).
- [paicehusk](https://github.com/rookii/paicehusk) - Implementación en Golang del algoritmo de stemming Paice/Husk.
- [porter](https://github.com/a2800276/porter) - Port bastante directo de la implementación en C de Martin Porter del algoritmo de stemming de Porter.
- [porter2](https://github.com/zhenjl/porter2) - Stemmer Porter 2 realmente rápido.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Port en Go del algoritmo de extracción automática rápida de palabras clave (RAKE).
- [snowball](https://github.com/goodsign/snowball) - Port del stemmer Snowball (envoltorio cgo) para Go. Proporciona la funcionalidad de extracción de raíces de palabras de [Snowball nativo](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Biblioteca autocontenida de aprendizaje automático y procesamiento del lenguaje natural en Go.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - Corrector ortográfico para el idioma español, o crea el tuyo propio.

### Generadores de slugs

- [go-slugify](https://github.com/mozillazg/go-slugify) - Crea slugs bonitos con soporte para múltiples idiomas.
- [slug](https://github.com/gosimple/slug) - Slugify apto para URL con soporte para múltiples idiomas.
- [Slugify](https://github.com/avelino/slugify) - Aplicación slugify en Go que maneja cadenas.

### Tokenizadores

- [gojieba](https://github.com/yanyiwu/gojieba) - Implementación en Go de [jieba](https://github.com/fxsjy/jieba), un algoritmo de segmentación de palabras en chino.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Tokenizador para Golang basado en diccionario y en modelos de lenguaje de bigramas. (Por ahora solo admite la segmentación en chino)
- [gse](https://github.com/go-ego/gse) - Segmentación de texto eficiente en Go; compatible con inglés, chino, japonés y otros.
- [MMSEGO](https://github.com/awsong/MMSEGO) - Implementación en GO de [MMSEG](http://technology.chtsai.org/mmseg/), un algoritmo de segmentación de palabras en chino.
- [segment](https://github.com/blevesearch/segment) - Biblioteca de Go para realizar la segmentación de texto Unicode tal como se describe en el [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/)
- [sentences](https://github.com/neurosnap/sentences) - Tokenizador de oraciones: convierte texto en una lista de oraciones.
- [shamoji](https://github.com/osamingo/shamoji) - shamoji es un paquete de filtrado de palabras escrito en Go.
- [stemmer](https://github.com/dchest/stemmer) - Paquetes de stemming para el lenguaje de programación Go. Incluye stemmers para inglés y alemán.
- [textcat](https://github.com/pebbe/textcat) - Paquete de Go para la categorización de textos basada en n-gramas, con soporte para utf-8 y texto sin procesar.

### Traducción

- [ctxi18n](https://github.com/invopop/ctxi18n/) - i18n consciente del contexto con una API breve y concisa, pluralización, interpolación y soporte de `fs.FS`. Las definiciones de locales en YAML se basan en [Rails i18n](https://guides.rubyonrails.org/i18n.html).
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - Paquete y herramienta complementaria para trabajar con texto localizado.
- [go-mystem](https://github.com/dveselov/mystem) - Bindings de CGo para Yandex.Mystem, analizador morfológico del ruso.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - Conversor de Hanzi chino a Hanyu Pinyin.
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Tabla de palabras y biblioteca de recursos de texto para proyectos de Golang.
- [gotext](https://github.com/leonelquinteros/gotext) - Utilidades de GNU gettext para Go.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - Translitera del cirílico al latino de todas las formas posibles.
- [spreak](https://github.com/vorlif/spreak) - Biblioteca flexible de traducción y humanización para Go, basada en los conceptos de gettext.
- [t](https://github.com/youthlin/t) - Otro paquete de i18n para golang, que sigue el estilo de GNU gettext y admite archivos .po/.mo: `t.T (gettext)`, `t.N (ngettext)`, etc. Además, incluye una herramienta de línea de comandos, [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate), que puede extraer mensajes como archivo pot a partir de plantillas text/html.

### Transliteración

- [enca](https://github.com/endeveit/enca) - Bindings mínimos de cgo para [libenca](https://cihar.com/software/enca/), que detecta codificaciones de caracteres.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Transliteraciones ASCII de texto Unicode.
- [gounidecode](https://github.com/fiam/gounidecode) - Transliterador de Unicode (también conocido como unidecode) para Go.
- [transliterator](https://github.com/alexsergivan/transliterator) - Proporciona transliteración unidireccional de cadenas con soporte de reglas de transliteración específicas de cada idioma.

**[⬆ volver arriba](#contents)**

## Redes

_Bibliotecas para trabajar con distintas capas de la red._

- [arp](https://github.com/mdlayher/arp) - El paquete arp implementa el protocolo ARP, tal como se describe en el RFC 826.
- [bart](https://github.com/gaissmai/bart) - El paquete bart proporciona una Balanced-Routing-Table (BART) para búsquedas muy rápidas de IP a CIDR y más.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - Streaming de datos protocolbuffer sobre TCP de forma sencilla.
- [canopus](https://github.com/zubairhamed/canopus) - Implementación de cliente/servidor CoAP (RFC 7252).
- [cdns](https://github.com/junevm/cdns) - Cambia los servidores DNS sin esfuerzo desde la terminal.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - Proxy de puertos TCP/UDP sin configuración con arranque automático, control de acceso basado en IP y ajuste de la pila de red a nivel del sistema operativo.
- [cidranger](https://github.com/yl2chen/cidranger) - Búsqueda rápida de IP a CIDR para Go.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cliente de Cloudflare Tunnel (antes Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - Servidor proxy CORS con protección SSRF, listas de hosts permitidos/bloqueados y autenticación opcional mediante clave de API.
- [dhcp6](https://github.com/mdlayher/dhcp6) - El paquete dhcp6 implementa un servidor DHCPv6, tal como se describe en el RFC 3315.
- [dns](https://github.com/miekg/dns) - Biblioteca de Go para trabajar con DNS.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - Framework de captura/monitorización pasiva de DNS.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Mide lo que realmente ocurre con las conexiones TCP y UDP establecidas cuando un pod de Kubernetes termina.
- [easytcp](https://github.com/DarthPestilane/easytcp) - Framework TCP ligero escrito en Go (Golang), construido con un enrutador de mensajes. EasyTCP te ayuda a crear un servidor TCP de forma fácil, rápida y menos dolorosa.
- [ether](https://github.com/songgao/ether) - Paquete de Go multiplataforma para enviar y recibir tramas ethernet.
- [ethernet](https://github.com/mdlayher/ethernet) - El paquete ethernet implementa la serialización y deserialización de tramas Ethernet II IEEE 802.3 y etiquetas VLAN IEEE 802.1Q.
- [event](https://github.com/cheng-zhongliang/event) - Biblioteca sencilla de notificación de eventos de E/S escrita en Golang.
- [expose](https://github.com/kernelshard/expose) - Herramienta de tunelización segura, ligera y de código abierto para exponer servidores locales a Internet.
- [fasthttp](https://github.com/valyala/fasthttp) - El paquete fasthttp es una implementación HTTP rápida para Go, hasta 10 veces más rápida que net/http.
- [fibersse](https://github.com/vinod-morya/fibersse) - Server-Sent Events (SSE) de nivel de producción para Fiber v3 con agrupación de eventos, carriles de prioridad, comodines en topics, limitación adaptativa y autenticación integrada.
- [fortio](https://github.com/fortio/fortio) - Biblioteca y herramienta de línea de comandos para pruebas de carga, servidor de eco avanzado e interfaz web. Permite especificar una carga fija de consultas por segundo, registrar histogramas de latencia y otras estadísticas útiles, y representarlas gráficamente. Tcp, Http, gRPC.
- [ftp](https://github.com/jlaffaye/ftp) - El paquete ftp implementa un cliente FTP tal como se describe en el [RFC 959](https://tools.ietf.org/html/rfc959).
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - Biblioteca de servidor FTP completa.
- [fullproxy](https://github.com/shoriwe/fullproxy) - Kit de herramientas de proxy y pivoting completo, programable y configurable como daemon, con protocolos SOCKS5, HTTP, puertos sin procesar y proxy inverso.
- [fwdctl](https://github.com/alegrey91/fwdctl) - CLI sencilla e intuitiva para gestionar los reenvíos de IPTables en tu servidor Linux.
- [gaio](https://github.com/xtaci/gaio) - Redes con E/S asíncrona de alto rendimiento para Golang en modo proactor.
- [gev](https://github.com/Allenxuxu/gev) - gev es una biblioteca de red TCP no bloqueante, ligera y rápida basada en el modo Reactor.
- [gldap](https://github.com/jimlambrt/gldap) - gldap proporciona una implementación de servidor ldap y tú proporcionas los manejadores de sus operaciones ldap.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt es una biblioteca de broker MQTT flexible y de alto rendimiento que implementa por completo el protocolo MQTT V3.1.1.
- [gnet](https://github.com/panjf2000/gnet) - `gnet` es un framework de red de alto rendimiento, ligero, no bloqueante y orientado a eventos, escrito en Go puro.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` es un framework de red de alto rendimiento, especialmente para servidores de juegos.
- [gNxI](https://github.com/google/gnxi) - Colección de herramientas de gestión de redes que usan los protocolos gNMI y gNOI.
- [go-getter](https://github.com/hashicorp/go-getter) - Biblioteca de Go para descargar archivos o directorios desde diversas fuentes usando una URL.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - Biblioteca para realizar solicitudes HTTP a través de un pool de proxies que ofrece tolerancia a fallos, balanceo de carga, reintentos automáticos, gestión de cookies y más, mediante un sustituto de http.Get/Post o un RoundTripper de sustitución directa para http.Client
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - Biblioteca ligera de captura de paquetes en vivo con extracción de SNI de HTTPS.
- [go-powerdns](https://github.com/joeig/go-powerdns) - Bindings de la API de PowerDNS para Golang.
- [go-sse](https://github.com/lampctl/go-sse) - Implementación en Go de cliente y servidor de server-sent events de HTML.
- [go-stun](https://github.com/ccding/go-stun) - Implementación en Go del cliente STUN (RFC 3489 y RFC 5389).
- [gobgp](https://github.com/osrg/gobgp) - BGP implementado en el lenguaje de programación Go.
- [gopacket](https://github.com/google/gopacket) - Biblioteca de Go para el procesamiento de paquetes con bindings de libpcap.
- [gopcap](https://github.com/akrennmair/gopcap) - Envoltorio de Go para libpcap.
- [GoProxy](https://github.com/elazarl/goproxy) - Biblioteca para crear un servidor proxy HTTP/HTTPS personalizado con Go.
- [goshark](https://github.com/sunwxg/goshark) - El paquete goshark usa tshark para decodificar paquetes IP y crear estructuras de datos para analizarlos.
- [gosnmp](https://github.com/soniah/gosnmp) - Biblioteca nativa de Go para realizar acciones SNMP.
- [gotcp](https://github.com/gansidui/gotcp) - Paquete de Go para escribir rápidamente aplicaciones tcp.
- [grab](https://github.com/cavaliercoder/grab) - Paquete de Go para gestionar descargas de archivos.
- [graval](https://github.com/koofr/graval) - Framework experimental de servidor FTP.
- [gws](https://github.com/lxzan/gws) - Servidor y cliente WebSocket de alto rendimiento con soporte de AsyncIO.
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs te permite inspeccionar solicitudes HTTP y falsificar respuestas.
- [httpproxy](https://github.com/wzshiming/httpproxy) - Manejador y dialer de proxy HTTP.
- [iplib](https://github.com/c-robinson/iplib) - Biblioteca para trabajar con direcciones IP (net.IP, net.IPNet), inspirada en [ipaddress](https://docs.python.org/3/library/ipaddress.html) de python y en [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) de ruby
- [jazigo](https://github.com/udhos/jazigo) - Jazigo es una herramienta escrita en Go para obtener la configuración de múltiples dispositivos de red.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP: protocolo ARQ rápido y fiable.
- [lhttp](https://github.com/fanux/lhttp) - Potente framework de websocket; crea tu servidor de mensajería instantánea más fácilmente.
- [linkio](https://github.com/ian-kent/linkio) - Simulación de la velocidad de enlaces de red para interfaces Reader/Writer.
- [llb](https://github.com/kirillDanshin/llb) - Backend muy sencillo pero rápido para servidores proxy. Puede ser útil para la redirección rápida a dominios predefinidos sin asignaciones de memoria y con respuestas rápidas.
- [macwifi](https://github.com/jaisonerick/macwifi) - Escaneo de Wi-Fi y obtención de contraseñas del Llavero para macOS 13+.
- [mdns](https://github.com/hashicorp/mdns) - Biblioteca sencilla de cliente/servidor mDNS (Multicast DNS) en Golang.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - El cliente Paho para Go proporciona una biblioteca cliente MQTT para conectarse a brokers MQTT mediante TCP, TLS o WebSockets.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - Implementación de bajo nivel de MQTT tremendamente sencilla y sin asignaciones de memoria, muy adecuada para sistemas embebidos.
- [nbio](https://github.com/lesismal/nbio) - Solución en Go puro para más de 1000k conexiones, compatible con tls/http1.x/websocket y básicamente compatible con net/http, de alto rendimiento y bajo consumo de memoria, no bloqueante, orientada a eventos y fácil de usar.
- [net](https://golang.org/x/net) - Este repositorio contiene bibliotecas de red complementarias de Go.
- [netchan](https://github.com/matveynator/netchan) - Canales de red (netchan) para Golang: seguros, preparados para clústeres, compatibles con canales anidados y cualquier tipo de dato. Inspirado en Rob Pike.
- [nethawk](https://github.com/Flowtriq/nethawk) - Interfaz de terminal para la captura y el análisis del tráfico de red en tiempo real y la detección de ataques, con modo de salida JSON.
- [netpoll](https://github.com/cloudwego/netpoll) - Framework de red de E/S no bloqueante de alto rendimiento centrado en escenarios RPC, desarrollado por ByteDance.
- [NFF-Go](https://github.com/intel-go/nff-go) - Framework para el desarrollo rápido de funciones de red eficientes para la nube y bare metal (antes YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - Solución de tunelización TCP/UDP segura y eficiente que ofrece un acceso rápido y fiable a través de restricciones de red usando conexiones TCP/QUIC/WebSocket o HTTP/2 preestablecidas.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - Biblioteca en Go puro para el descubrimiento multiplataforma de pares locales mediante multidifusión UDP.
- [portproxy](https://github.com/aybabtme/portproxy) - Proxy TCP sencillo que añade compatibilidad con CORS a las API que no la tienen.
- [proxq](https://github.com/psyb0t/docker-proxq) - Proxy inverso asíncrono que encola cada solicitud en Redis y devuelve un ID de trabajo para consultar la respuesta, con enrutamiento por prefijo de ruta, reintentos y caché.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - Protocolo de comunicación del servidor PostgreSQL. Crea tu propio servidor y empieza a atender conexiones.
- [publicip](https://github.com/polera/publicip) - El paquete publicip devuelve tu dirección IPv4 pública (salida a Internet).
- [quic-go](https://github.com/lucas-clemente/quic-go) - Implementación del protocolo QUIC en Go puro.
- [roamr](https://github.com/sourabh-khot65/roamr) - CLI que puntúa las redes WiFi guardadas cercanas y te dice cuál usar y por qué.
- [sdns](https://github.com/semihalev/sdns) - Servidor de resolución DNS recursivo de alto rendimiento con soporte de DNSSEC, centrado en preservar la privacidad.
- [sftp](https://github.com/pkg/sftp) - El paquete sftp implementa el SSH File Transfer Protocol tal como se describe en <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>.
- [ssh](https://github.com/gliderlabs/ssh) - API de alto nivel para crear servidores SSH (envuelve crypto/ssh).
- [sslb](https://github.com/eduardonunesp/sslb) - Es un balanceador de carga súper sencillo (Super Simples Load Balancer), solo un pequeño proyecto para lograr cierto rendimiento.
- [stun](https://github.com/go-rtc/stun) - Implementación en Go del protocolo STUN del RFC 5389.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack es un protocolo de aplicación basado en TCP para empaquetar y desempaquetar flujos de bytes en programas go.
- [tspool](https://github.com/two/tspool) - Biblioteca TCP que usa un pool de workers para mejorar el rendimiento y proteger tu servidor.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Implementación en Go puro de tun2socks impulsada por la pila TCP/IP de [gVisor](https://gvisor.dev/).
- [utp](https://github.com/anacrolix/utp) - Implementación en Go del protocolo de microtransporte uTP.
- [vssh](https://github.com/yahoo/vssh) - Biblioteca de Go para crear automatización de redes y servidores sobre el protocolo SSH.
- [water](https://github.com/songgao/water) - Biblioteca TUN/TAP sencilla.
- [webrtc](https://github.com/pions/webrtc) - Implementación en Go puro de la API WebRTC.
- [winrm](https://github.com/masterzen/winrm) - Cliente WinRM de Go para ejecutar comandos de forma remota en máquinas Windows.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - Cliente WebSocket resiliente con reconexión automática, retroceso exponencial y gestión de latidos.
- [xtcp](https://github.com/xfxdev/xtcp) - Framework de servidor TCP con comunicación full duplex simultánea, apagado ordenado y protocolo personalizado.

**[⬆ volver arriba](#contents)**

### Clientes HTTP

_Bibliotecas para realizar solicitudes HTTP._

- [axios4go](https://github.com/rezmoss/axios4go) - Biblioteca cliente HTTP de Go inspirada en Axios, que ofrece una API sencilla e intuitiva para realizar solicitudes HTTP.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - Cliente HTTP fácil de usar, 100 % en Go, para suplantar las huellas TLS/JA3 y HTTP2.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Alcanza tus objetivos de API con precisión de tiro rápido usando el cliente HTTP más rápido y sencillo de Go.
- [gentleman](https://github.com/h2non/gentleman) - Biblioteca cliente HTTP completa basada en plugins.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - Obtén fácilmente un cliente HTTP de la biblioteca estándar que no comparte ningún estado con otros clientes.
- [go-http-client](https://github.com/bozd4g/go-http-client) - Realiza llamadas http de forma sencilla y fácil.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - Biblioteca para multiplexar solicitudes HTTP basándose en múltiples IP de origen.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - http.RoundTripper de Go que emite métricas de OpenTelemetry para las solicitudes HTTP.
- [go-req](https://github.com/wenerme/go-req) - Cliente HTTP declarativo para golang.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Cliente HTTP con reintentos en Go.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Cliente Http potente, ligero y fácil, inspirado en la Web Fetch API.
- [Grequest](https://github.com/lib4u/grequest)  - Paquete de golang sencillo y ligero para solicitudes http, basado en el potente net/http
- [grequests](https://github.com/levigross/grequests) - Un "clon" en Go de la gran y famosa biblioteca Requests.
- [hedge](https://github.com/bhope/hedge) - Solicitudes con cobertura (hedged requests) adaptativas para Go. Reduce la latencia p99 sin configuración, basándose en el artículo "The Tail at Scale" de Google.
- [heimdall](https://github.com/gojektech/heimdall) - Cliente http mejorado con capacidades de reintento y hystrix.
- [httpretry](https://github.com/ybbus/httpretry) - Enriquece el cliente HTTP predeterminado de go con funcionalidad de reintentos.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - Sustituto directo de net/http.Client con una huella de navegador exacta byte a byte de TLS (JA3/JA4) y HTTP/2 (Akamai).
- [pester](https://github.com/sethgrid/pester) - Llamadas de cliente HTTP en Go con reintentos, retroceso y concurrencia.
- [req](https://github.com/imroc/req) - Cliente HTTP sencillo para Go con magia negra (menos código y más eficiencia).
- [request](https://github.com/monaco-io/request) - Cliente HTTP para golang. Si tienes experiencia con axios o requests, te encantará. Sin dependencias de terceros.
- [requests](https://github.com/carlmjohnson/requests) - Solicitudes HTTP para Gophers. Usa context.Context y no oculta el net/http.Client subyacente, lo que lo hace compatible con las API estándar de Go. También incluye herramientas de pruebas.
- [resty](https://github.com/go-resty/resty) - Cliente HTTP y REST sencillo para Go inspirado en rest-client de Ruby.
- [rq](https://github.com/ddo/rq) - Una interfaz más agradable para el cliente HTTP de la biblioteca estándar de golang.
- [sling](https://github.com/dghubble/sling) - Sling es una biblioteca cliente HTTP de Go para crear y enviar solicitudes a API.
- [surf](https://github.com/enetx/surf) - Cliente HTTP avanzado compatible con HTTP/1.1, HTTP/2, HTTP/3 (QUIC) y proxy SOCKS5, con huellas TLS de nivel de navegador.
- [tls-client](https://github.com/bogdanfinn/tls-client) - Cliente HTTP similar a net/http.Client con opciones para seleccionar huellas TLS de cliente específicas para usar en las solicitudes.

**[⬆ volver arriba](#contents)**

## OpenGL

_Bibliotecas para usar OpenGL en Go._

- [gl](https://github.com/go-gl/gl) - Bindings de Go para OpenGL (generados mediante glow).
- [glfw](https://github.com/go-gl/glfw) - Bindings de Go para GLFW 3.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - Port en Go de la biblioteca [glMatrix](https://glmatrix.net/).
- [goxjs/gl](https://github.com/goxjs/gl) - Bindings de OpenGL multiplataforma para Go (OS X, Linux, Windows, navegadores, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - Biblioteca glfw multiplataforma para Go para crear un contexto OpenGL y recibir eventos.
- [mathgl](https://github.com/go-gl/mathgl) - Paquete de matemáticas en Go puro especializado en matemáticas 3D, inspirado en GLM.

**[⬆ volver arriba](#contents)**

## ORM

_Bibliotecas que implementan técnicas de mapeo objeto-relacional o de mapeo de datos._

- [bob](https://github.com/stephenafamo/bob) - Constructor de consultas SQL y generador de ORM/factorías para Go. Sucesor de SQLBoiler.
- [bun](https://github.com/uptrace/bun) - ORM para Golang centrado en SQL. Sucesor de go-pg.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Framework de caché/memoización en Redis tipado y basado en esquemas para Go.
- [CQL](https://github.com/FrancoLiberali/cql) - Construido sobre GORM, añade consultas verificadas en tiempo de compilación basadas en código generado automáticamente.
- [ent](https://github.com/facebook/ent) - Framework de entidades para Go. ORM sencillo pero potente para modelar y consultar datos.
- [go-dbw](https://github.com/hashicorp/go-dbw) - Paquete sencillo que encapsula las operaciones con bases de datos.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - ORM sencillo para Google/Firebase Cloud Firestore.
- [go-sql](https://github.com/rushteam/gosql) - ORM fácil para mysql.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - Biblioteca flexible y potente de construcción de cadenas SQL, además de un ORM sin configuración.
- [go-store](https://github.com/gosuri/go-store) - Biblioteca de almacén clave-valor sencilla y rápida respaldada por Redis para Go.
- [golobby/orm](https://github.com/golobby/orm) - ORM sencillo, rápido, con seguridad de tipos y genérico para la felicidad de los desarrolladores.
- [GoooQo](https://github.com/doytowin/goooqo) - Framework de acceso a bases de datos basado en un modelo de consultas declarativo.
- [GORM](https://github.com/go-gorm/gorm) - La fantástica biblioteca ORM para Golang, que pretende ser amigable para los desarrolladores.
- [gormt](https://github.com/xxjwxc/gormt) - De base de datos MySQL a structs de gorm en golang.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence, biblioteca similar a un ORM para Go.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire es una capa de acceso a bases de datos y de validación para golang. (Compatible con: MySQL, PostgreSQL y SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Entorno de pseudo-ORM/pseudo-mapeo de structs sencillo y ligero para Go.
- [marlow](https://github.com/marlow/marlow) - ORM generado a partir de los structs del proyecto para garantizar la seguridad en tiempo de compilación.
- [pop/soda](https://github.com/gobuffalo/pop) - Migración y creación de bases de datos, ORM, etc. para MySQL, PostgreSQL y SQLite.
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go, acceso a bases de datos con seguridad de tipos para Go.
- [reform](https://github.com/go-reform/reform) - Un ORM mejor para Go, basado en interfaces no vacías y generación de código.
- [rel](https://github.com/go-rel/rel) - Capa moderna de acceso a bases de datos para Golang: testeable, ampliable y elaborada en una API limpia y elegante.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - Generador de ORM. Genera un ORM completo y ultrarrápido adaptado al esquema de tu base de datos.
- [upper.io/db](https://github.com/upper/db) - Interfaz única para interactuar con distintas fuentes de datos mediante adaptadores que envuelven controladores de bases de datos maduros.
- [XORM](https://gitea.com/xorm/xorm) - ORM sencillo y potente para Go. (Compatible con: MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql y Oracle).
- [Zoom](https://github.com/albrow/zoom) - Almacén de datos y motor de consultas ultrarrápidos construidos sobre Redis.

**[⬆ volver arriba](#contents)**

## Gestión de paquetes

_Herramientas oficiales para la gestión de dependencias y paquetes_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - Los módulos son la unidad de intercambio y versionado de código fuente. El comando go ofrece soporte directo para trabajar con módulos, incluido el registro y la resolución de dependencias de otros módulos.

_Bibliotecas no oficiales para la gestión de paquetes y dependencias._

- [gup](https://github.com/nao1215/gup) - Actualiza los binarios instalados mediante "go install".
- [modup](https://github.com/chaindead/modup) - Interfaz de terminal para actualizar dependencias de Go con detección de módulos desactualizados y actualización selectiva.
- [syft](https://github.com/anchore/syft) - Herramienta de CLI y biblioteca de Go para generar una lista de materiales de software (SBOM) a partir de imágenes de contenedores y sistemas de archivos.

**[⬆ volver arriba](#contents)**

## Rendimiento

- [ebpf-go](https://github.com/cilium/ebpf) - Proporciona utilidades para cargar, compilar y depurar programas eBPF.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - Añade automáticamente spans a todos los métodos y funciones.
- [go-perfstat](https://github.com/go-perfstat/go) - Estadísticas de rendimiento ligeras y agregación de tiempos de ejecución para Go.
- [jaeger](https://github.com/jaegertracing/jaeger) - Sistema de trazado distribuido.
- [mm-go](https://github.com/joetifa2003/mm-go) - Gestión manual genérica de memoria para golang.
- [otelinji](https://github.com/hedhyw/otelinji) - Herramienta de instrumentación automática de OpenTelemetry para añadir spans a funciones.
- [pixie](https://github.com/pixie-labs/pixie) - Trazado sin instrumentación para aplicaciones Golang mediante eBPF.
- [profile](https://github.com/pkg/profile) - Paquete sencillo de soporte de perfilado para Go.
- [statsviz](https://github.com/arl/statsviz) - Visualización en vivo de las estadísticas de tiempo de ejecución de tu aplicación Go.
- [tracer](https://github.com/kamilsk/tracer) - Trazado sencillo y ligero.

**[⬆ volver arriba](#contents)**

## Lenguajes de consulta

- [api-fu](https://github.com/ccbrown/api-fu) - Implementación completa de GraphQL.
- [dasel](https://github.com/tomwright/dasel) - Consulta y actualiza estructuras de datos usando selectores desde la línea de comandos. Comparable a jq/yq, pero compatible con JSON, YAML, TOML y XML sin dependencias en tiempo de ejecución.
- [gnata](https://github.com/RecoLabs/gnata) - Implementación escrita íntegramente en Go del lenguaje de consulta y transformación JSONata 2.x.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - Paquete sencillo de Go para consultar datos JSON.
- [goven](https://github.com/SeldonIO/goven) - Lenguaje de consulta de sustitución directa para cualquier esquema de base de datos.
- [gqlgen](https://github.com/99designs/gqlgen) - Biblioteca de servidor graphql basada en go generate.
- [grapher](https://github.com/reaganiwadha/grapher) - Constructor de campos GraphQL que utiliza los genéricos de Go, con utilidades y funciones adicionales.
- [graphql](https://github.com/neelance/graphql-go) - Servidor GraphQL centrado en la facilidad de uso.
- [graphql-go](https://github.com/graphql-go/graphql) - Implementación de GraphQL para Go.
- [gws](https://github.com/Zaba505/gws) - Implementación de cliente y servidor de "GraphQL over Websocket" de Apollo.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - Biblioteca de consultas para obtener partes de un JSON basándose en la sintaxis JSONPath.
- [jsonql](https://github.com/elgs/jsonql) - Biblioteca de expresiones de consulta JSON en Golang.
- [jsonslice](https://github.com/bhmj/jsonslice) - Consultas Jsonpath con filtros avanzados.
- [mql](https://github.com/hashicorp/mql) - Model Query Language (mql) es un lenguaje de consulta para los modelos de tu base de datos.
- [play](https://github.com/paololazzari/play) - Playground en TUI para experimentar con tus programas favoritos, como grep, sed, awk, jq y yq.
- [rql](https://github.com/a8m/rql) - Resource Query Language para API REST.
- [rqp](https://github.com/timsolov/rest-query-parser) - Analizador de consultas para API REST. Admite filtrado, validaciones y operaciones `AND` y `OR` directamente en la consulta.
- [straf](https://github.com/SonicRoshan/straf) - Convierte fácilmente structs de Golang en objetos GraphQL.

**[⬆ volver arriba](#contents)**

## Reflexión

- [copy](https://github.com/gotidy/copy) - Paquete para copiar rápidamente structs de distintos tipos.
- [Deepcopier](https://github.com/ulule/deepcopier) - Copia sencilla de structs para Go.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - Biblioteca rápida de copia profunda.
- [goenum](https://github.com/lvyahui8/goenum) - Struct de enumeración común basado en genéricos y reflexión que permite definir enumeraciones rápidamente y usar un conjunto de métodos predeterminados útiles.
- [gotype](https://github.com/wzshiming/gotype) - Análisis de código fuente de Golang, con un uso similar al del paquete reflect.
- [gpath](https://github.com/tenntenn/gpath) - Biblioteca para simplificar el acceso a campos de structs con expresiones de Go mediante reflexión.
- [objwalker](https://github.com/rekby/objwalker) - Recorre objetos de go mediante reflexión.
- [reflectpro](https://github.com/gontainer/reflectpro) - Invocadores, copiadores, getters y setters para go.
- [reflectutils](https://github.com/muir/reflectutils) - Utilidades para trabajar con reflexión: análisis de etiquetas de structs, recorrido recursivo y relleno de valores a partir de cadenas.

**[⬆ volver arriba](#contents)**

## Incrustación de recursos

- [debme](https://github.com/leaanthony/debme) - Crea un `embed.FS` a partir de un subdirectorio de un `embed.FS` existente.
- [embed](https://pkg.go.dev/embed) - El paquete embed proporciona acceso a archivos incrustados en el programa Go en ejecución.
- [rebed](https://github.com/soypat/rebed) - Recrea estructuras de carpetas y archivos a partir del tipo `embed.FS` de Go 1.16
- [vfsgen](https://github.com/shurcooL/vfsgen) - Genera un archivo vfsdata.go que implementa de forma estática el sistema de archivos virtual dado.

**[⬆ volver arriba](#contents)**

## Ciencia y análisis de datos

_Bibliotecas para la computación científica y el análisis de datos._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - Proporciona un modelo de Bradley-Terry para comparaciones por pares.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Mapa de calor de calendario en Go simple inspirado en la actividad de contribuciones de Github.
- [chart](https://github.com/vdobler/chart) - Biblioteca sencilla de trazado de gráficos para Go. Admite muchos tipos de gráficos.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - Dataframes para aprendizaje automático y estadística (similar a pandas).
- [decimal](https://github.com/db47h/decimal) - El paquete decimal implementa aritmética decimal de coma flotante con precisión arbitraria.
- [entitydebs](https://github.com/ndabAP/entitydebs) - Herramienta de ciencias sociales para analizar mediante programación entidades en textos de no ficción, con un analizador de dependencias integrado.
- [evaler](https://github.com/soniah/evaler) - Evaluador sencillo de expresiones aritméticas de coma flotante.
- [ewma](https://github.com/VividCortex/ewma) - Medias móviles ponderadas exponencialmente.
- [geom](https://github.com/skelterjohn/geom) - Geometría 2D para golang.
- [go-dsp](https://github.com/mjibson/go-dsp) - Procesamiento digital de señales para Go.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Algoritmos de estimación de estado y filtrado en Go.
- [go-gt](https://github.com/ThePaw/go-gt) - Algoritmos de teoría de grafos escritos en lenguaje "Go".
- [go-hep](https://github.com/go-hep/hep) - Conjunto de bibliotecas y herramientas para realizar análisis de física de altas energías con facilidad.
- [godesim](https://github.com/soypat/godesim) - Framework de resolución de EDO ampliadas/multivariable para simulaciones basadas en eventos con una API sencilla.
- [goent](https://github.com/kzahedi/goent) - Implementación en GO de medidas de entropía.
- [gograph](https://github.com/hmdsefi/gograph) - Biblioteca genérica de grafos para golang que proporciona teoría de grafos matemática y algoritmos.
- [gonum](https://github.com/gonum/gonum) - Gonum es un conjunto de bibliotecas numéricas para el lenguaje de programación Go. Contiene bibliotecas de matrices, estadística, optimización y más.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot proporciona una API para construir y dibujar gráficos en Go.
- [goraph](https://github.com/gyuho/goraph) - Biblioteca de teoría de grafos en Go puro (estructuras de datos, visualización de algoritmos).
- [gosl](https://github.com/cpmech/gosl) - Biblioteca científica de Go para álgebra lineal, FFT, geometría, NURBS, métodos numéricos, probabilidades, optimización, ecuaciones diferenciales y más.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats es una biblioteca de GoLang de código abierto para estadística matemática, usada sobre todo en el ámbito del aprendizaje automático, que cubre la mayoría de las funciones de medidas estadísticas.
- [graph](https://github.com/yourbasic/graph) - Biblioteca de algoritmos básicos de grafos.
- [hdf5](https://github.com/scigolib/hdf5) - Implementación en Go puro del formato de archivo HDF5 para el almacenamiento y el intercambio de datos científicos.
- [insyra](https://github.com/HazelnutParadise/insyra) - Biblioteca de análisis de datos con estadística, visualización, soporte de Parquet e integración con Python.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - Herramienta para manipular grafos JSONL con soporte de graphviz.
- [matlab](https://github.com/scigolib/matlab) - Biblioteca en Go puro para leer y escribir archivos .mat de MATLAB (v5-v7.3) sin CGO.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go es un paquete de código abierto para definir programas matemáticos (p. ej., problemas de optimización convexa) en Go.
- [matrix](https://github.com/Arceus-7/matrix) - Paquete de matemáticas matriciales para Go limpio, genérico y sin dependencias, con soporte para aritmética, descomposiciones y resolución de sistemas lineales.
- [ode](https://github.com/ChristopherRabotin/ode) - Solucionador de ecuaciones diferenciales ordinarias (EDO) compatible con estados ampliados y condiciones de parada de la iteración basadas en canales.
- [orb](https://github.com/paulmach/orb) - Tipos de geometría 2D con recorte y soporte de GeoJSON y Mapbox Vector Tile.
- [pagerank](https://github.com/alixaxel/pagerank) - Algoritmo PageRank ponderado implementado en Go.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - Pequeña biblioteca de interpolación lineal.
- [PiHex](https://github.com/claygod/PiHex) - Implementación del algoritmo "Bailey-Borwein-Plouffe" para el número Pi en hexadecimal.
- [Poly](https://github.com/bebop/poly) - Paquete de Go para la ingeniería de organismos.
- [rootfinding](https://github.com/khezen/rootfinding) - Biblioteca de algoritmos de búsqueda de raíces para encontrar las raíces de funciones cuadráticas.
- [simd](https://github.com/tphakala/simd) - Operaciones vectoriales y SIMD nativas de Go sobre slices con aceleración en ensamblador para múltiples arquitecturas.
- [sparse](https://github.com/james-bowman/sparse) - Formatos de matrices dispersas en Go para álgebra lineal, que dan soporte a aplicaciones científicas y de aprendizaje automático, compatibles con las bibliotecas de matrices de gonum.
- [stats](https://github.com/montanaflynn/stats) - Paquete de estadística con funciones comunes que faltan en la biblioteca estándar de Golang.
- [streamtools](https://github.com/nytlabs/streamtools) - Herramienta gráfica de propósito general para trabajar con flujos de datos.
- [taxonkit](https://github.com/shenwei356/taxonkit) - Kit de herramientas práctico y eficiente para la taxonomía del NCBI; permite consultar linajes, reformatear, filtrar y crear archivos taxdump personalizados.
- [TextRank](https://github.com/DavidBelicza/TextRank) - Implementación de TextRank en Golang con funciones ampliables (resumen, ponderación, extracción de frases) y soporte multihilo (goroutines).
- [topk](https://github.com/keilerkonzept/topk) - Sketches top-K de ventana deslizante y regulares, basados en el algoritmo HeavyKeeper.
- [triangolatte](https://github.com/tchayen/triangolatte) - Biblioteca de triangulación 2D. Permite traducir líneas y polígonos (ambos basados en puntos) al lenguaje de las GPU.

**[⬆ volver arriba](#contents)**

## Seguridad

_Bibliotecas que se usan para ayudar a que tu aplicación sea más segura._

- [acme-proxy](https://github.com/esnet/acme-proxy) - Resuelve el desafío ACME http-01 sin abrir el puerto 80 a Internet y obtén certificados de una autoridad de certificación externa.
- [acmetool](https://github.com/hlandau/acme) - Herramienta cliente de ACME (Let's Encrypt) con renovación automática.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Pequeño paquete de Go generador de contraseñas criptográficamente seguras.
- [acra](https://github.com/cossacklabs/acra) - Proxy de cifrado de red para proteger las aplicaciones basadas en bases de datos frente a fugas de datos: cifrado selectivo robusto, prevención de inyecciones SQL y sistema de detección de intrusiones.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - Generador determinista de bits aleatorios basado en AES en modo contador (AES-CTR-DRBG), tal como se especifica en NIST SP 800-90A.
- [age](https://github.com/FiloSottile/age) - Herramienta de cifrado (y biblioteca de Go) sencilla, moderna y segura, con claves explícitas pequeñas, sin opciones de configuración y con componibilidad al estilo UNIX.
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Envoltorio ligero sobre el paquete argon2 de Go que replica fielmente el paquete Bcrypt de la biblioteca estándar de Go y el paquete simple-scrypt.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Aprovisiona automáticamente certificados de Let's Encrypt e inicia un servidor TLS.
- [BadActor](https://github.com/jaredfolkins/badactor) - Sistema de bloqueo en memoria controlado por la aplicación, creado con el espíritu de fail2ban.
- [beelzebub](https://github.com/mariocandela/beelzebub) - Framework de honeypot seguro y low-code que aprovecha la IA para la virtualización de sistemas.
- [booster](https://github.com/anatol/booster) - Generador rápido de initramfs con soporte de cifrado de disco completo.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Middleware de firewall de aplicaciones web para el servidor Caddy, con un motor de reglas de expresiones regulares, puntuación de anomalías, listas negras de IP/DNS/ASN/países y limitación de tasa.
- [Cameradar](https://github.com/Ullaakut/cameradar) - Herramienta y biblioteca para hackear de forma remota flujos RTSP de cámaras de vigilancia.
- [canery](https://github.com/rluders/canery) - Motor de autorización mínimo y sin estado con un modelo de evaluación intercambiable.
- [certificates](https://github.com/mvmaasakkers/certificates) - Herramienta con convenciones propias para generar certificados tls.
- [CertMagic](https://github.com/caddyserver/certmagic) - Integración de cliente ACME madura, robusta y potente para la emisión y renovación totalmente gestionadas de certificados TLS.
- [Coraza](https://github.com/corazawaf/coraza) - Biblioteca WAF lista para empresas, compatible con modsecurity y OWASP CRS.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - Herramienta de CLI independiente para validar reglas WAF de ModSecurity y Coraza SecLang antes de desplegarlas en producción.
- [Crenox](https://github.com/crenoxhq/crenox) - Escáner de secretos pre-commit sin dependencias que usa Aho-Corasick para detectar con alto rendimiento fugas de credenciales.
- [deidentify](https://github.com/aliengiraffe/deidentify) - Eliminación determinista y que preserva el formato de la información de identificación personal en textos y datos estructurados.
- [dongle](https://github.com/golang-module/dongle) - Paquete de golang sencillo, semántico y amigable para desarrolladores para codificación y decodificación, y cifrado y descifrado.
- [dotlock](https://github.com/ahmadraza100/dotlock) - Gestor de bóvedas .env cifradas con TUI interactiva para gestionar secretos en múltiples entornos y perfiles.
- [encid](https://github.com/bobg/encid) - Codifica y decodifica ID enteros cifrados.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - Generador de contraseñas basado en entropía con amplios argumentos de línea de comandos para generar de forma segura cadenas aleatorias, incluidos dígitos, contraseñas y contraseñas construidas con palabras de diccionario poco comunes mezcladas con símbolos y dígitos.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Aplicación REST para actualizar dinámicamente las reglas de firewalld en un servidor linux.
- [fort](https://github.com/djadmin/fort) - Audita la configuración de seguridad de macOS mediante 16 comprobaciones, informa de una puntuación y corrige los problemas cuando puede hacerlo de forma segura. Un único binario, instalable mediante Homebrew.
- [go-generate-password](https://github.com/m1/go-generate-password) - Generador de contraseñas que puede usarse desde la cli o como biblioteca.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Analizador de htpasswd de Apache para Go.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - Validador de contraseñas basado en valores de entropía criptográfica bruta.
- [go-peer](https://github.com/number571/go-peer) - Biblioteca de software para crear sistemas descentralizados seguros y anónimos.
- [go-yara](https://github.com/hillu/go-yara) - Bindings de Go para [YARA](https://github.com/plusvic/yara), la "navaja suiza de coincidencia de patrones para investigadores de malware (y para todos los demás)".
- [goArgonPass](https://github.com/dwin/goArgonPass) - Hash y verificación de contraseñas con Argon2 diseñados para ser compatibles con las implementaciones existentes de Python y PHP.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - Paquete probablemente paranoico para aplicar hash y cifrar contraseñas de forma segura.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Biblioteca de Go para los estándares criptográficos rusos GOST (firmas digitales, hash Streebog, cifrado Kuznechik, MGM AEAD) respaldada por gost-engine de OpenSSL.
- [grim](https://github.com/ijin82/grim) - Herramienta de CLI rápida y segura para gestionar bóvedas de notas Markdown cifradas en memoria volátil.
- [gspy](https://github.com/Mutasem-mk4/gspy) - Inspector forense de goroutines a llamadas al sistema para procesos Go en ejecución.
- [Interpol](https://github.com/avahidi/interpol) - Generador de datos basado en reglas para fuzzing y pruebas de penetración.
- [leakhound](https://github.com/nilpoona/leakhound) - Herramienta de análisis estático para detectar el registro accidental de campos sensibles de structs, evitando fugas de datos en los logs.
- [lego](https://github.com/go-acme/lego) - Biblioteca cliente ACME y herramienta de CLI escritas íntegramente en Go (para usar con Let's Encrypt).
- [luks.go](https://github.com/anatol/luks.go) - Biblioteca escrita íntegramente en Golang para gestionar particiones LUKS.
- [mcprobe](https://github.com/tamish560/mcprobe) - Escáner de seguridad para servidores MCP con detección de inyección de prompts, sombreado de herramientas (tool shadowing) y salida SARIF.
- [memguard](https://github.com/awnumar/memguard) - Biblioteca escrita íntegramente en Go para manejar valores sensibles en memoria.
- [mist](https://github.com/iSerganov/mist) - Biblioteca de esteganografía de audio de clave asimétrica que oculta mensajes cifrados dentro de audio comprimido usando X25519 y ChaCha20-Poly1305.
- [multikey](https://github.com/adrianosela/multikey) - Framework de cifrado/descifrado con n de N claves basado en el algoritmo de compartición de secretos de Shamir.
- [nacl](https://github.com/kevinburke/nacl) - Implementación en Go del conjunto de API de NaCL.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - Elimina secretos de líneas de log y volcados HTTP en una sola pasada, cubriendo cabeceras, JSON, XML, datos codificados como URL, JWT, claves PEM y tokens de proveedores.
- [optimus-go](https://github.com/pjebs/optimus-go) - Hashing y ofuscación de ID usando el algoritmo de Knuth.
- [osv-scanner](https://github.com/google/osv-scanner) - Escáner de vulnerabilidades escrito en Go que usa los datos proporcionados por OSV.
- [passlib](https://github.com/hlandau/passlib) - Biblioteca de hashing de contraseñas preparada para el futuro.
- [passwap](https://github.com/zitadel/passwap) - Proporciona una implementación unificada entre distintos algoritmos de hashing de contraseñas
- [pii-shield](https://github.com/pii-shield/pii-shield) - Sidecar de saneamiento de logs sin código para Kubernetes que censura la PII de los logs.
- [pm](https://github.com/nicola-strappazzon/password-manager) - Gestor de contraseñas al estilo Unix escrito en Go para guardar tus datos con cifrado OpenPGP.
- [procscope](https://github.com/Mutasem-mk4/procscope) - Investigador de tiempo de ejecución con ámbito de proceso que usa eBPF para trazar el ciclo de vida de los procesos, la actividad de archivos y las conexiones de red.
- [qrand](https://github.com/bitfield/qrand) - Cliente para la API ANU Quantum Numbers (AQN), que proporciona datos aleatorios seguros desde el punto de vista de la mecánica cuántica.
- [Razify](https://github.com/Hossiy21/razify) - CLI para escanear, validar y auditar archivos .env en busca de secretos filtrados y desviaciones del entorno.
- [redact](https://github.com/alesr/redact) - Censura información sensible de logs basados en slog mediante una canalización configurable.
- [SafeDep/vet](https://github.com/safedep/vet) - Protege frente a paquetes de código abierto maliciosos.
- [secret](https://github.com/rsjethani/secret) - Evita que tus secretos se filtren en logs, std\*, etc.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - Generador de credenciales respaldado por CSPRNG con un esquema JSON versionado para contraseñas, frases de contraseña, secretos, claves de API y PIN.
- [secure](https://github.com/unrolled/secure) - Middleware HTTP para Go que facilita algunas mejoras rápidas de seguridad.
- [secureio](https://github.com/xaionaro-go/secureio) - Envoltorio y multiplexor con intercambio de claves, autenticación y cifrado para `io.ReadWriteCloser`, basado en XChaCha20-poly1305, ECDH y ED25519.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Paquete de Scrypt con una API sencilla y obvia y calibración automática del coste integrada.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Cifra/descifra usando claves ssh.
- [sslmgr](https://github.com/adrianosela/sslmgr) - Certificados SSL fáciles con un envoltorio de alto nivel sobre acme/autocert.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf es un middleware HTTP de Go que proporciona la funcionalidad IDS de teler para proteger frente a ataques web y mejorar la seguridad de las aplicaciones web basadas en Go. Es muy configurable y fácil de integrar en aplicaciones Go existentes.
- [themis](https://github.com/cossacklabs/themis) - Biblioteca criptográfica de alto nivel para resolver tareas típicas de seguridad de datos (almacenamiento seguro de datos, mensajería segura, autenticación mediante pruebas de conocimiento cero), disponible para 14 lenguajes, ideal para aplicaciones multiplataforma.
- [urusai](https://github.com/calpa/urusai) - Urusai ("ruidoso" en japonés) es una implementación en Go de un generador de ruido de tráfico HTTP/DNS aleatorio que ayuda a proteger la privacidad creando cortinas de humo digitales mientras navegas.
- [veil](https://github.com/getveil/veil) - Proxy HTTPS local que oculta las credenciales de API a los agentes de programación con IA. Integración con el llavero del sistema operativo, marcadores de posición conscientes del formato y registro de auditoría en SQLite.
- [y509](https://github.com/kanywst/y509) - TUI para cadenas de certificados X.509 que indica si una cadena se verifica y, por separado, si un servidor la sirvió correctamente.


**[⬆ volver arriba](#contents)**

## Serialización

_Bibliotecas y herramientas para la serialización binaria._

- [bambam](https://github.com/glycerine/bambam) - Generador de esquemas de Cap'n Proto a partir de go.
- [bel](https://github.com/32leaves/bel) - Genera interfaces de TypeScript a partir de structs/interfaces de Go. Útil para JSON RPC.
- [binstruct](https://github.com/ghostiam/binstruct) - Decodificador binario de Golang para mapear datos en la estructura.
- [cbor](https://github.com/fxamacker/cbor) - Biblioteca de codificación y decodificación CBOR pequeña, segura y fácil.
- [colfer](https://github.com/pascaldekloe/colfer) - Generación de código para el formato binario Colfer.
- [csvutil](https://github.com/jszwec/csvutil) - Codificación y decodificación de registros CSV de alto rendimiento e idiomática a estructuras nativas de Go.
- [elastic](https://github.com/epiclabs-io/elastic) - Convierte slices, mapas o cualquier otro valor desconocido entre distintos tipos en tiempo de ejecución, pase lo que pase.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - Formateo de texto de ancho fijo (compatible con UTF-8).
- [fwencoder](https://github.com/o1egl/fwencoder) - Analizador de archivos de ancho fijo (biblioteca de codificación y decodificación) para Go.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Biblioteca y analizador de Cap'n Proto para go.
- [go-codec](https://github.com/ugorji/go) - Biblioteca de codificación, decodificación y rpc de alto rendimiento, con muchas funciones e idiomática para msgpack, cbor y json, con soporte basado en tiempo de ejecución O en generación de código.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - Biblioteca de serialización/deserialización CSV de alto nivel y con funcionalidades completas.
- [goprotobuf](https://github.com/golang/protobuf) - Soporte de Go, en forma de biblioteca y plugin del compilador de protocolos, para los protocol buffers de Google.
- [gotiny](https://github.com/raszia/gotiny) - Biblioteca de serialización eficiente para Go; gotiny es casi tan rápida como las bibliotecas de serialización que generan código.
- [jsoniter](https://github.com/json-iterator/go) - Sustituto directo de alto rendimiento y 100 % compatible de "encoding/json".
- [mus-go](https://github.com/mus-format/mus-go) - Serializador del formato MUS para Go.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - Biblioteca de GoLang para trabajar con el formato de sesión de PHP y las funciones Serialize/Unserialize de PHP.
- [pletter](https://github.com/vimeda/pletter) - Forma estándar de envolver un mensaje proto para brokers de mensajes.
- [proto](https://github.com/emicklei/proto) - Analizador y escritor de archivos .proto de Google ProtocolBuffers.
- [structomap](https://github.com/tuvistavie/structomap) - Biblioteca para generar mapas de forma fácil y dinámica a partir de estructuras estáticas.
- [unitpacking](https://github.com/recolude/unitpacking) - Biblioteca para empaquetar vectores unitarios en el menor número de bytes posible.

**[⬆ volver arriba](#contents)**

## Aplicaciones de servidor

- [algernon](https://github.com/xyproto/algernon) - Servidor web HTTP/2 con soporte integrado para Lua, Markdown, GCSS y Amber.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy es un servidor web HTTP/2 alternativo, fácil de configurar y de usar.
- [Casdoor](https://github.com/casdoor/casdoor) - Servidor de gestión de identidades y accesos (IAM) y de inicio de sesión único (SSO) con interfaz web, compatible con OAuth 2.0, OIDC, SAML, CAS y LDAP.
- [consul](https://www.consul.io/) - Consul es una herramienta para el descubrimiento de servicios, la monitorización y la configuración.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Proxy de escritura remota de Prometheus que añade la cabecera de ID de inquilino de Cortex según las etiquetas de las métricas.
- [devd](https://github.com/cortesi/devd) - Servidor web local para desarrolladores.
- [discovery](https://github.com/Bilibili/discovery) - Registro para un balanceo de carga de nivel intermedio resiliente y conmutación por error.
- [dudeldu](https://github.com/krotik/dudeldu) - Servidor SHOUTcast sencillo.
- [Easegress](https://github.com/megaease/easegress) - Sistema de orquestación de tráfico nativo de la nube de alta disponibilidad y alto rendimiento, con observabilidad y extensibilidad.
- [Engity's Bifröst](https://bifroest.engity.org/) - Servidor SSH altamente personalizable con varias formas de autorizar a un usuario y de ejecutar su sesión (en local o en contenedores).
- [etcd](https://github.com/etcd-io/etcd) - Almacén clave-valor de alta disponibilidad para configuración compartida y descubrimiento de servicios.
- [Euterpe](https://github.com/ironsmile/euterpe) - Servidor de streaming de música autoalojado con interfaz web y API REST integradas.
- [Fider](https://github.com/getfider/fider) - Fider es una plataforma abierta para recopilar y organizar los comentarios de los clientes.
- [Flagr](https://github.com/checkr/flagr) - Flagr es un servicio de código abierto de feature flags y pruebas A/B.
- [flipt](https://github.com/markphelps/flipt) - Solución autocontenida de feature flags escrita en Go y Vue.js
- [flue](https://github.com/karnstack/flue) - Daemon autoalojado que sirve sesiones de terminal a una pestaña del navegador. Las sesiones siguen ejecutándose después de cerrar la pestaña.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - Solución de feature flags autoalojada, sencilla, completa, ligera y 100 % de código abierto.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Proxy inverso sencillo con caché, escrito en Go, que usa Redis.
- [gondola](https://github.com/bmf-san/gondola) - Proxy inverso para golang basado en YAML.
- [goshs](https://github.com/patrickhener/goshs) - Sustituto de SimpleHTTPServer con subida/descarga de archivos, WebDAV, SFTP, SMB, TLS, autenticación y enlaces para compartir.
- [Kono](https://github.com/starwalkn/kono) - Pasarela de API ligera y ampliable en Go: fan-out en paralelo, agregación flexible y magia sin configuración.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Proxy inverso para gestionar https con emisión de certificados sobre la marcha desde lets-encrypt.
- [minio](https://github.com/pgsty/minio) - Fork mantenido por la comunidad de minio (servicio de almacenamiento de objetos).
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy es un servidor de aplicaciones sencillo de mocks y proxy; puedes crear endpoints simulados, así como redirigir solicitudes por proxy cuando no existe un mock para el endpoint.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Analizador de logs de Nginx y exportador a Prometheus.
- [nsq](https://nsq.io/) - Plataforma de mensajería distribuida en tiempo real.
- [OpenRun](https://github.com/openrundev/openrun) - Alternativa de código abierto a Google Cloud Run y AWS App Runner. Despliega fácilmente herramientas internas en todo un equipo.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase es un backend en tiempo real en 1 archivo que consta de una base de datos embebida (SQLite) con suscripciones en tiempo real, gestión de autenticación integrada y mucho más.
- [protoxy](https://github.com/camgraff/protoxy) - Servidor proxy que convierte cuerpos de solicitud JSON a Protocol Buffers.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - Transmite eventos de base de datos de PostgreSQL a Kafka.
- [relay](https://github.com/valtors/relay) - Servidor MCP con más de 40 herramientas para agentes de IA. Operaciones con archivos, búsqueda web, capturas de pantalla y coordinación multiagente. Un único binario de Go.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Relé para balancear la carga de eventos de Riemann y/o convertirlos a Carbon.
- [RoadRunner](https://github.com/spiral/roadrunner) - Servidor de aplicaciones PHP, balanceador de carga y gestor de procesos de alto rendimiento.
- [SFTPGo](https://github.com/drakkan/sftpgo) - Servidor SFTP completo y altamente configurable con soporte opcional de FTP/S y WebDAV. Puede servir el sistema de archivos local y backends de almacenamiento en la nube como S3 y Google Cloud Storage.
- [simpleconf](https://github.com/shaunlee/simpleconf) - Servidor de configuración que contiene un documento JSON, leído y escrito por ruta de clave a través de HTTP y TCP, con clustering opcional mediante Raft.
- [Trickster](https://github.com/tricksterproxy/trickster) - Caché de proxy inverso HTTP y acelerador de series temporales.
- [wd-41](https://github.com/baalimago/wd-41) - Servidor de desarrollo web ((w)eb (d)evelopment) con recarga automática en vivo cuando cambian los archivos.
- [whois](https://github.com/KincaidYang/whois) - Servicio de consultas WHOIS/RDAP autoalojado y servidor MCP para dominios, direcciones IPv4/IPv6, CIDR y ASN.
- [Wish](https://github.com/charmbracelet/wish) - ¡Crea aplicaciones SSH, así de fácil!

**[⬆ volver arriba](#contents)**

## Procesamiento de flujos

_Bibliotecas y herramientas para el procesamiento de flujos y la programación reactiva._

- [go-etl](https://github.com/Breeze0806/go-etl) - Kit de herramientas ligero para la extracción, transformación y carga (ETL) de fuentes de datos.
- [go-streams](https://github.com/reugn/go-streams) - Biblioteca de procesamiento de flujos para Go.
- [goio](https://github.com/primetalk/goio) - Implementación de IO, Stream y Fiber para Golang, inspirada en las increíbles bibliotecas de Scala cats y fs2.
- [gostream](https://github.com/mariomac/gostream) - Biblioteca de procesamiento de flujos con seguridad de tipos inspirada en la API Streams de Java.
- [machine](https://github.com/whitaker-io/machine) - Biblioteca de Go para escribir y generar workers de flujos con métricas y trazabilidad integradas.
- [nibbler](https://github.com/naughtygopher/nibbler) - Paquete ligero para el procesamiento en microlotes.
- [ro](https://github.com/samber/ro) - Programación reactiva: API declarativa y componible para aplicaciones orientadas a eventos.
- [signals](https://github.com/coregx/signals) - Gestión de estado reactiva con seguridad de tipos inspirada en Angular Signals, con valores calculados, efectos y seguimiento de dependencias.
- [stream](https://github.com/youthlin/stream) - Go Stream, como Stream de Java 8: Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - Motor SQL de streaming ligero para el procesamiento de datos en tiempo real.

**[⬆ volver arriba](#contents)**

## Motores de plantillas

_Bibliotecas y herramientas para plantillas y análisis léxico._

- [bagme](https://github.com/boxesandglue/bagme) - Renderizado de HTML/CSS a PDF con composición tipográfica de calidad TeX en Go puro.
- [ego](https://github.com/benbjohnson/ego) - Lenguaje de plantillas ligero que te permite escribir plantillas en Go. Las plantillas se traducen a Go y se compilan.
- [fasttemplate](https://github.com/valyala/fasttemplate) - Motor de plantillas sencillo y rápido. Sustituye los marcadores de posición de las plantillas hasta 10 veces más rápido que [text/template](https://golang.org/pkg/text/template/).
- [gomponents](https://www.gomponents.com) - Componentes HTML 5 en Go puro, con un aspecto similar a este: `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Generador de código Go inspirado en Hero y Fasttemplate. Incluye archivos de inclusión, definiciones de etiquetas personalizadas, código Go inyectado, traducción de idiomas y más.
- [goview](https://github.com/foolin/goview) - Goview es una biblioteca de plantillas ligera, minimalista e idiomática basada en html/template de golang para crear aplicaciones web en Go.
- [gox](https://github.com/doors-dev/gox) - Plantillas HTML como expresiones de Go de primera clase, con una integración perfecta con los editores.
- [htmgo](https://htmgo.dev) - Crea sistemas sencillos y escalables con go + htmx
- [jet](https://github.com/CloudyKit/jet) - Motor de plantillas Jet.
- [liquid](https://github.com/osteele/liquid) - Implementación en Go de las plantillas Liquid de Shopify.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Implementación completa en Go del motor de plantillas Liquid de Shopify.
- [maroto](https://github.com/johnfercher/maroto) - Una forma maroto de crear PDF. Maroto está inspirado en Bootstrap y usa gofpdf. Rápido y sencillo.
- [pongo2](https://github.com/flosch/pongo2) - Motor de plantillas similar al de Django para Go.
- [quicktemplate](https://github.com/valyala/quicktemplate) - Motor de plantillas rápido, potente y, aun así, fácil de usar. Convierte las plantillas en código Go y luego lo compila.
- [Razor](https://github.com/sipin/gorazor) - Motor de vistas Razor para Golang.
- [Soy](https://github.com/robfig/soy) - Plantillas Closure (también conocidas como plantillas Soy) para Go, conforme a la [especificación oficial](https://developers.google.com/closure/templates/).
- [sprout](https://github.com/go-sprout/sprout) - Funciones útiles para plantillas de Go.
- [tbd](https://github.com/lucasepe/tbd) - Forma realmente sencilla de crear plantillas de texto con marcadores de posición; expone metadatos adicionales integrados del repositorio Git.
- [templ](https://github.com/a-h/templ) - Lenguaje de plantillas HTML con excelentes herramientas para desarrolladores.
- [templator](https://github.com/alesr/templator) - Motor de renderizado de plantillas HTML con seguridad de tipos para Go.

**[⬆ volver arriba](#contents)**

## Pruebas

_Bibliotecas para probar bases de código y generar datos de prueba._

### Frameworks de pruebas

- [apitest](https://apitest.dev) - Biblioteca de pruebas de comportamiento sencilla y ampliable para servicios basados en REST o manejadores HTTP, que permite simular llamadas http externas y generar diagramas de secuencia.
- [arch-go](https://github.com/arch-go/arch-go) - Herramienta de pruebas de arquitectura para proyectos Go.
- [assay](https://github.com/tushariitr-19/assay) - Biblioteca de evaluación independiente del framework para probar agentes de Go y servidores MCP con comprobaciones deterministas, códigos de salida listos para CI y pruebas basadas en YAML sin código.
- [assert](https://github.com/go-playground/assert) - Biblioteca de aserciones básica que se usa junto con las pruebas nativas de go, con bloques de construcción para aserciones personalizadas.
- [axiom](https://github.com/Nikita-Filonov/axiom) - Framework de pruebas componible para Go con fixtures, hooks, reintentos, metadatos, plugins y ejecución en paralelo.
- [baloo](https://github.com/h2non/baloo) - Pruebas end-to-end de API HTTP expresivas y versátiles de forma sencilla.
- [be](https://github.com/carlmjohnson/be) - La biblioteca minimalista de aserciones genéricas para pruebas.
- [biff](https://github.com/fulldump/biff) - Framework de pruebas por bifurcación, compatible con BDD.
- [charlatan](https://github.com/percolate/charlatan) - Herramienta para generar implementaciones falsas de interfaces para pruebas.
- [commander](https://github.com/SimonBaeumer/commander) - Herramienta para probar aplicaciones de CLI en windows, linux y osx.
- [coverage](https://github.com/jbunds/coverage) - Interfaz web sencilla para la cobertura de pruebas de Go, y la GitHub Action reutilizable [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - Complemento sencillo de pruebas de snapshots para tu framework de pruebas.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Limpia la base de datos con fines de prueba, inspirado en `database_cleaner` de Ruby.
- [dft](https://github.com/abecodes/dft) - Contenedores docker ligeros y sin dependencias para pruebas (o más).
- [dsunit](https://github.com/viant/dsunit) - Pruebas de almacenes de datos para SQL, NoSQL y archivos estructurados.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Ejecuta una base de datos Postgres real en local en Linux, OSX o Windows como parte de otra aplicación o prueba de Go.
- [endly](https://github.com/viant/endly) - Pruebas funcionales end-to-end declarativas.
- [envite](https://github.com/PerimeterX/envite) - Framework de gestión de entornos de desarrollo y pruebas.
- [fixenv](https://github.com/rekby/fixenv) - Motor de gestión de fixtures, inspirado en los fixtures de pytest.
- [flute](https://github.com/suzuki-shunsuke/flute) - Framework de pruebas de clientes HTTP.
- [frisby](https://github.com/verdverm/frisby) - Framework de pruebas de API REST.
- [gherkingen](https://github.com/hedhyw/gherkingen) - Generador de código base BDD y framework.
- [ginkgo](https://onsi.github.io/ginkgo/) - Framework de pruebas BDD para Go.
- [gnomock](https://github.com/orlangure/gnomock) - Pruebas de integración con dependencias reales (base de datos, caché, incluso Kubernetes o AWS) ejecutándose en Docker, sin mocks.
- [go-carpet](https://github.com/msoap/go-carpet) - Herramienta para ver la cobertura de pruebas en la terminal.
- [go-cmp](https://github.com/google/go-cmp) - Paquete para comparar valores de Go en las pruebas.
- [go-hit](https://github.com/Eun/go-hit) - Hit es un framework de pruebas de integración http escrito en golang.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - Herramienta de pruebas y depuración HTTP con diversos endpoints para probar clientes.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Pruebas de mutación para Go con umbrales de calidad en CI, MSI consciente de la cobertura, seguimiento de líneas base y filtrado por git-diff.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Testcontainer de MySQL para Golang que ayuda con las pruebas de integración de MySQL.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Pruebas de snapshots al estilo de Jest en Golang.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - Herramienta que informa de la cobertura de los archivos por debajo del umbral establecido.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Comparación profunda extremadamente flexible para golang, que amplía el paquete testing de go.
- [go-testing](https://github.com/tkrop/go-testing) - Extensión de pruebas de Go que permite configurar de forma sencilla pruebas unitarias, de componentes y de integración fuertemente aisladas, con soporte avanzado de mocks que amplía gomock y gock.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - Biblioteca de aserciones al estilo de predicados de prueba con una salida de diagnóstico extensa.
- [go-vcr](https://github.com/dnaeon/go-vcr) - Graba y reproduce tus interacciones HTTP para lograr pruebas rápidas, deterministas y precisas.
- [goblin](https://github.com/franela/goblin) - Framework de pruebas al estilo de Mocha para Go.
- [goc](https://github.com/qiniu/goc) - Goc es un sistema completo de pruebas de cobertura para el lenguaje de programación Go.
- [gocheck](https://labix.org/gocheck) - Framework de pruebas más avanzado, alternativa a gotest.
- [GoConvey](https://github.com/smartystreets/goconvey/) - Framework de estilo BDD con interfaz web y recarga en vivo.
- [gocrest](https://github.com/corbym/gocrest) - Matchers componibles al estilo de hamcrest para aserciones en Go.
- [godog](https://github.com/cucumber/godog) - Framework BDD Cucumber para Go.
- [gofight](https://github.com/appleboy/gofight) - Pruebas de manejadores de API para frameworks de enrutadores de Golang.
- [gogiven](https://github.com/corbym/gogiven) - Framework de pruebas BDD al estilo de YATSPEC para Go.
- [gomatch](https://github.com/jfilipczyk/gomatch) - Biblioteca creada para probar JSON contra patrones.
- [gomega](https://onsi.github.io/gomega/) - Biblioteca de matchers/aserciones al estilo de Rspec.
- [gospecify](https://github.com/stesla/gospecify) - Proporciona una sintaxis BDD para probar tu código Go. Debería resultar familiar a cualquiera que haya usado bibliotecas como rspec.
- [gosuite](https://github.com/pavlo/gosuite) - Aporta a `testing` suites de pruebas ligeras con funciones de setup/teardown aprovechando los subtests de Go1.7.
- [got](https://github.com/ysmood/got) - Un framework de pruebas para golang agradable de usar.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Colección de paquetes para ampliar el paquete testing de go y dar soporte a patrones comunes.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - Framework fluido para objetos Matcher declarativos que, al aplicarse a valores de entrada, producen resultados autodescriptivos.
- [httper](https://github.com/gustofarbi/httper) - Ejecutor de CLI para archivos .http de JetBrains con scripting, aserciones, gRPC y pruebas de carga.
- [httpexpect](https://github.com/gavv/httpexpect) - Pruebas end-to-end de HTTP y API REST concisas, declarativas y fáciles de usar.
- [is](https://github.com/matryer/is) - Miniframework de pruebas profesional y ligero para Go.
- [jsonassert](https://github.com/kinbiko/jsonassert) - Paquete para verificar que tus payloads JSON se serializan correctamente.
- [keploy](https://github.com/keploy/keploy) - Genera automáticamente casos de prueba y mocks de datos a partir de llamadas a API.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - Biblioteca sencilla para cambiar los valores de campos privados en las pruebas.
- [restit](https://github.com/yookoala/restit) - Microframework de Go para ayudar a escribir pruebas de integración de API RESTful.
- [schema](https://github.com/jgroeneveld/schema) - Coincidencia de expresiones rápida y sencilla para esquemas JSON usados en solicitudes y respuestas.
- [should](https://github.com/Kairum-Labs/should) - Biblioteca de pruebas sin dependencias, con diffs detallados de structs y mensajes de error legibles.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - Utilidad de pruebas para la concurrencia.
- [testcase](https://github.com/adamluzsi/testcase) - Framework de pruebas idiomático para el desarrollo guiado por comportamiento (BDD).
- [testcerts](https://github.com/madflojo/testcerts) - Genera dinámicamente certificados autofirmados y autoridades de certificación dentro de tus funciones de prueba.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Paquete de Go que simplifica la creación y la limpieza de dependencias basadas en contenedores para pruebas automatizadas de integración/humo. Su API limpia y fácil de usar permite a los desarrolladores definir mediante programación los contenedores que deben ejecutarse como parte de una prueba y limpiar esos recursos cuando la prueba termina.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Asistente para fixtures de prueba al estilo de Rails para probar aplicaciones de bases de datos.
- [Testify](https://github.com/stretchr/testify) - Extensión sagrada del paquete estándar testing de go.
- [Testo](https://github.com/ozontech/testo) - Framework de pruebas basado en plugins con suites, pruebas en paralelo, hooks y parametrización. Inspirado en Pytest.
- [testsql](https://github.com/zhulongcheng/testsql) - Genera datos de prueba a partir de archivos SQL antes de las pruebas y los elimina al terminar.
- [testza](https://github.com/MarvinJWendt/testza) - Framework de pruebas completo con una salida coloreada agradable.
- [tparse](https://github.com/mfridman/tparse) - Herramienta de CLI para resumir la salida de go test. Apta para tuberías. Compatible con los flags de go test.
- [trial](https://github.com/jgroeneveld/trial) - Aserciones rápidas, fáciles y ampliables sin introducir mucho código repetitivo.
- [Tt](https://github.com/vcaesar/tt) - Herramientas de pruebas sencillas y coloridas.
- [wstest](https://github.com/posener/wstest) - Cliente websocket para pruebas unitarias de un http.Handler de websocket.

### Objetos simulados (mocks)

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - Herramienta para generar objetos mock autocontenidos.
- [fabricator](https://github.com/Goldziher/fabricator) - Factorías con seguridad de tipos para generar datos simulados y falsos en Go, inspiradas en factory_boy e interface-forge.
- [genmock](https://gitlab.com/so_literate/genmock) - Sistema de mocks para Go con generador de código para construir llamadas a los métodos de las interfaces.
- [go-localstack](https://github.com/elgohr/go-localstack) - Herramienta para usar localstack en pruebas de AWS.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - Controlador SQL simulado para probar interacciones con bases de datos.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - Controlador de base de datos basado en una única transacción, pensado principalmente para pruebas.
- [gomock](https://github.com/uber-go/mock) - Framework de mocks para el lenguaje de programación Go.
- [gomock](https://github.com/vibridi/gomock) - Herramienta de CLI para generar mocks de interfaces tipados e independientes del framework, con soporte para genéricos.
- [govcr](https://github.com/seborama/govcr) - Mock HTTP para Golang: graba y reproduce interacciones HTTP para pruebas sin conexión.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - Proxy HTTP(S) para grabar y simular API REST/SOAP con middleware ampliable y una CLI fácil de usar.
- [httpmock](https://github.com/jarcoal/httpmock) - Simulación sencilla de respuestas HTTP de recursos externos.
- [minimock](https://github.com/gojuno/minimock) - Generador de mocks para interfaces de Go.
- [mockery](https://github.com/vektra/mockery) - Herramienta para generar interfaces de Go.
- [mockfs](https://github.com/balinomad/go-mockfs) - Sistema de archivos simulado para pruebas en Go con inyección de errores y simulación de latencia, construido sobre `testing/fstest.MapFS`.
- [mockhttp](https://github.com/tv42/mockhttp) - Objeto mock para http.ResponseWriter de Go.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - Forma sencilla de generar mocks para múltiples propósitos.
- [moq](https://github.com/matryer/moq) - Utilidad que genera un struct a partir de cualquier interfaz. El struct puede usarse en el código de pruebas como mock de la interfaz.
- [moxie](https://lesiw.io/moxie) - Genera métodos mock en structs embebidos.
- [pgxmock](https://github.com/pashagolub/pgxmock) - Biblioteca de mocks que implementa [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/).
- [timex](https://github.com/cabify/timex) - Sustituto del paquete nativo `time` pensado para las pruebas.
- [wsmock](https://github.com/sing198/wsmock) - Servidor mock de WebSocket expresivo y sin código repetitivo para pruebas, con inyección de fallos y aserciones.
- [xgo](https://github.com/xhd2015/xgo) - Biblioteca de mocks de funciones de propósito general.

### Fuzzing y depuración delta/reducción/minimización

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - Sistema de pruebas aleatorizadas.
- [Tavor](https://github.com/zimmski/tavor) - Framework genérico de fuzzing y depuración delta.

### Selenium y herramientas de control del navegador

- [bonk](https://github.com/joakimcarlsson/bonk) - Biblioteca de automatización de navegadores rápida y centrada en el sigilo que usa el Chrome DevTools Protocol sobre WebSocket, sin dependencias externas.
- [cdp](https://github.com/mafredri/cdp) - Bindings con seguridad de tipos para el Chrome Debugging Protocol que pueden usarse con navegadores u otros objetivos de depuración que lo implementen.
- [chromedp](https://github.com/knq/chromedp) - Forma de controlar/probar Chrome, Safari, Edge, Android Webviews y otros navegadores compatibles con el Chrome Debugging Protocol.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - Biblioteca de automatización de navegadores para controlar Chromium, Firefox y WebKit con una única API.
- [rod](https://github.com/go-rod/rod) - Controlador de Devtools para facilitar la automatización web y el scraping.
- [selenosis](https://github.com/alcounit/selenosis) - Hub sin estado y nativo de Kubernetes que enruta sesiones de Selenium, Playwright y MCP a pods de navegador bajo demanda mediante recursos personalizados.

### Inyección de fallos

- [failpoint](https://github.com/pingcap/failpoint) - Implementación de [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) para Golang.

**[⬆ volver arriba](#contents)**

## Procesamiento de texto

_Bibliotecas para analizar y manipular textos._

Consulta también [Procesamiento del lenguaje natural](#natural-language-processing) y [Análisis de texto](#text-analysis).

### Formateadores

- [address](https://github.com/bojanz/address) - Gestiona la representación, validación y formateo de direcciones.
- [align](https://github.com/Guitarbum722/align) - Aplicación de propósito general que alinea texto.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - Formatea y analiza valores numéricos de bytes (10K, 2M, 3G, etc.).
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - Formateo de texto de ancho fijo (codificador/decodificador con reflexión).
- [go-humanize](https://github.com/dustin/go-humanize) - Formateadores de tiempo, números y tamaños de memoria a un formato legible por humanos.
- [gotabulate](https://github.com/bndr/gotabulate) - Imprime fácilmente y de forma legible tus datos tabulares con Go.
- [sq](https://github.com/neilotoole/sq) - Convierte datos de bases de datos SQL o de formatos de documento como CSV o Excel a formatos como JSON, Excel, CSV, HTML, Markdown, XML y YAML.
- [textwrap](https://github.com/isbm/textwrap) - Ajusta el texto al final de las líneas. Implementación del módulo `textwrap` de Python.

### Lenguajes de marcado

- [bafi](https://github.com/mmalcek/bafi) - Traductor universal de JSON, BSON, YAML y XML a CUALQUIER formato mediante plantillas.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - Convierte bbCode a HTML y te permite añadir soporte para etiquetas bbCode personalizadas.
- [blackfriday](https://github.com/russross/blackfriday) - Procesador de Markdown en Go.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - Genera estructuras de go en múltiples formatos (YAML/JSON/etc.) en tu aplicación de línea de comandos.
- [go-toml](https://github.com/pelletier/go-toml) - Biblioteca de Go para el formato TOML con soporte de consultas y prácticas herramientas de cli.
- [goldmark](https://github.com/yuin/goldmark) - Analizador de Markdown escrito en Go. Fácil de ampliar, conforme al estándar (CommonMark) y bien estructurado.
- [goq](https://github.com/andrewstuart/goq) - Deserialización declarativa de HTML mediante etiquetas de structs con sintaxis de jQuery (usa GoQuery).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - Convierte HTML a Markdown. Funciona incluso con sitios web completos y puede ampliarse mediante reglas.
- [htmlquery](https://github.com/antchfx/htmlquery) - Paquete de consultas XPath para HTML que te permite extraer datos o evaluar documentos HTML mediante una expresión XPath.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Renderizado enriquecido de YAML como HTML en Go.
- [htree](https://github.com/bobg/htree) - Recorre, navega, filtra y procesa de cualquier otra forma árboles de objetos [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node).
- [markdown](https://github.com/nao1215/markdown) - Constructor de Markdown que genera GitHub Flavored Markdown y diagramas mermaid mediante encadenamiento de métodos.
- [mdsmith](https://github.com/jeduden/mdsmith) - Linter y formateador de Markdown rápido y con corrección automática. Comprueba el estilo, la legibilidad, la estructura y la integridad entre archivos.
- [mxj](https://github.com/clbanning/mxj) - Codifica/decodifica XML como JSON o map[string]interface{}; extrae valores con rutas en notación de puntos y comodines. Sustituye a los paquetes x2j y j2x.
- [picoloom](https://github.com/alnah/picoloom) - Conversor de Markdown a PDF con CLI y API de biblioteca de Go.
- [toml](https://github.com/BurntSushi/toml) - Formato de configuración TOML (codificador/decodificador con reflexión).

### Analizadores/Codificadores/Decodificadores

- [allot](https://github.com/sbstjn/allot) - Análisis de texto con marcadores de posición y comodines para herramientas de CLI y bots.
- [codetree](https://github.com/aerogo/codetree) - Analiza código indentado (python, pixy, scarlet, etc.) y devuelve una estructura de árbol.
- [commonregex](https://github.com/mingrammer/commonregex) - Colección de expresiones regulares comunes para Go.
- [did](https://github.com/ockam-network/did) - Analizador y Stringer de DID (identificadores descentralizados) en Go.
- [doi](https://github.com/hscells/doi) - Analizador de identificadores de objetos digitales (doi) en Go.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Analizador y manipulador de archivos Editorconfig para Go.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - Módulo de alto rendimiento para la extracción de dominios de nivel superior efectivos (eTLD).
- [go-nmea](https://github.com/adrianmo/go-nmea) - Biblioteca de análisis de NMEA para el lenguaje Go.
- [go-querystring](https://github.com/google/go-querystring) - Biblioteca de Go para codificar structs en parámetros de consulta de URL.
- [go-vcard](https://github.com/emersion/go-vcard) - Analiza y formatea vCard.
- [godump](https://github.com/yassinebenaid/godump) - Imprime de forma legible cualquier variable de GO con facilidad, una alternativa a `fmt.Printf("%#v")` de Go.
- [godump (goforj)](https://github.com/goforj/godump) - Imprime de forma legible structs de Go con volcados al estilo de Laravel/Symfony, información completa de tipos, salida de CLI coloreada, detección de ciclos y acceso a campos privados.
- [gofeed](https://github.com/mmcdole/gofeed) - Analiza feeds RSS y Atom en Go.
- [gographviz](https://github.com/awalterschulze/gographviz) - Analiza el lenguaje DOT de Graphviz.
- [gonameparts](https://github.com/polera/gonameparts) - Analiza nombres de personas y los divide en sus partes individuales.
- [ltsv](https://github.com/Wing924/ltsv) - Lector de [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) de alto rendimiento para Go.
- [normalize](https://github.com/avito-tech/normalize) - Sanea, normaliza y compara texto difuso.
- [parseargs-go](https://github.com/nproc/parseargs-go) - Analizador de argumentos en cadena que entiende las comillas y las barras invertidas.
- [prattle](https://github.com/askeladdk/prattle) - Escanea y analiza gramáticas LL(1) de forma sencilla y eficiente.
- [sh](https://github.com/mvdan/sh) - Analizador y formateador de shell.
- [tokenizer](https://github.com/bzick/tokenizer) - Analiza cualquier cadena, slice o búfer infinito y lo convierte en cualquier tipo de token.
- [vdf](https://github.com/andygrunwald/vdf) - Analizador léxico y sintáctico para el Valves Data Format (conocido como vdf) escrito en Go.
- [when](https://github.com/olebedev/when) - Analizador de fechas/horas en lenguaje natural en inglés y ruso con reglas intercambiables.
- [xj2go](https://github.com/stackerzzq/xj2go) - Convierte xml o json en structs de go.

### Expresiones regulares

- [coregex](https://github.com/coregx/coregex) - Motor de expresiones regulares para producción con la arquitectura del crate regex de Rust: DFA/NFA multimotor, prefiltros SIMD y sustituto directo de la biblioteca estándar.
- [genex](https://github.com/alixaxel/genex) - Cuenta y expande expresiones regulares en todas las cadenas que coinciden.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - Coincidencia de patrones con comodines sencilla y ligera.
- [goregen](https://github.com/zach-klippenstein/goregen) - Biblioteca para generar cadenas aleatorias a partir de expresiones regulares.
- [regroup](https://github.com/oriser/regroup) - Vuelca los grupos con nombre de expresiones regulares en structs de go usando etiquetas de structs y análisis automático.
- [rex](https://github.com/hedhyw/rex) - Constructor de expresiones regulares.

### Saneamiento

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - Saneador de HTML.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Filtro de palabrotas basado en saneamiento para Go.

### Extractores web (scrapers)

- [colly](https://github.com/asciimoo/colly) - Framework de scraping rápido y elegante para Gophers.
- [dataflowkit](https://github.com/slotix/dataflowkit) - Framework de web scraping para convertir sitios web en datos estructurados.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - Rastreador web que convierte sitios de documentación en Markdown limpio y JSONL para su ingesta por LLM (RAG, datos de entrenamiento).
- [go-recipe](https://github.com/kkyr/go-recipe) - Paquete para extraer recetas de sitios web.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Biblioteca en lenguaje Go para analizar sitemaps.
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery aporta al lenguaje Go una sintaxis y un conjunto de funciones similares a los de jQuery.
- [pagser](https://github.com/foolin/pagser) - Pagser es una herramienta sencilla, extensible y configurable para analizar y deserializar páginas html en structs, basada en goquery y etiquetas de structs, para rastreadores en golang.
- [Tagify](https://github.com/zoomio/tagify) - Produce un conjunto de etiquetas a partir de una fuente dada.
- [walker](https://github.com/cyucelen/walker) - Obtén sin fisuras datos paginados de cualquier fuente. Incluye scraping de API sencillo y de alto rendimiento.
- [xurls](https://github.com/mvdan/xurls) - Extrae URL de un texto.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Generador de podcasts compatible con iTunes y RSS 2.0 en Golang

### Utilidades/Varios

- [ahocorasick](https://github.com/coregx/ahocorasick) - Coincidencia de cadenas con múltiples patrones Aho-Corasick de alto rendimiento, con compilación a DFA y prefiltro SIMD, hasta 7 GB/s de rendimiento (parte del ecosistema [coregx](https://github.com/coregx)).
- [go-runewidth](https://github.com/mattn/go-runewidth) - Funciones para obtener el ancho fijo de un carácter o una cadena.
- [kace](https://github.com/codemodus/kace) - Conversiones habituales entre estilos de mayúsculas y minúsculas que cubren las siglas comunes.
- [lancet](https://github.com/duke-git/lancet) - Biblioteca de utilidades completa al estilo de Lodash para Go
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich es la biblioteca que declina nombres rusos al caso gramatical indicado.
- [radix](https://github.com/yourbasic/radix) - Algoritmo rápido de ordenación de cadenas.
- [TySug](https://github.com/Dynom/TySug) - Sugerencias alternativas en función de la distribución del teclado.
- [uniwidth](https://github.com/unilibs/uniwidth) - Cálculo de alto rendimiento del ancho de caracteres Unicode con optimización SWAR, tablas de búsqueda O(1) y soporte de emojis ZWJ.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - Herramienta grep semántica que usa word embeddings para encontrar coincidencias semánticamente similares. Por ejemplo, buscar "death" encontrará "dead", "killing", "murder".

**[⬆ volver arriba](#contents)**

## API de terceros

_Bibliotecas para acceder a API de terceros._

- [airtable](https://github.com/mehanizm/airtable) - Biblioteca cliente de Go para la [API de Airtable](https://airtable.com/api).
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Biblioteca cliente de Go para la API 1.1 de Twitter.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - SDK no oficial de Golang para la API de AppStore Connect.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - Implementación no oficial en Go del [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html).
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - El SDK oficial de AWS para el lenguaje de programación Go.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Cliente de Go para la API DeFi de Birdeye con precios spot tipados, velas OHLCV, datos históricos y una vía de escape para solicitudes sin procesar.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - Biblioteca de Go de alto nivel para escribir datos en [Google BigQuery](https://cloud.google.com/bigquery) con un alto rendimiento.
- [brewerydb](https://github.com/naegelejd/brewerydb) - Biblioteca de Go para acceder a la API de BreweryDB.
- [cachet](https://github.com/andygrunwald/cachet) - Biblioteca cliente de Go para [Cachet (sistema de páginas de estado de código abierto)](https://cachethq.io/).
- [circleci](https://github.com/jszwedko/go-circleci) - Biblioteca cliente de Go para interactuar con la API de CircleCI.
- [codeship-go](https://github.com/codeship/codeship-go) - Biblioteca cliente de Go para interactuar con la API v2 de Codeship.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Cliente de Go para la API v4 de Coinglass sin dependencias, con flujos WebSocket y endpoints tipados para futuros, spot, opciones, ETF e indicadores.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Biblioteca cliente de Go para interactuar con la API de Coinpaprika.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - Biblioteca cliente de Go para [The Colony](https://thecolony.cc) — una red social pública cuyos usuarios son agentes de IA.
- [device-check-go](https://github.com/rinchsan/device-check-go) - Biblioteca cliente de Go para interactuar con la [API iOS DeviceCheck](https://developer.apple.com/documentation/devicecheck) v1.
- [discordgo](https://github.com/bwmarrin/discordgo) - Bindings de Go para la API de chat de Discord.
- [disgo](https://github.com/switchupcb/disgo) - Envoltorio de API en Go para la API de Discord.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Cliente no oficial para Go de la API de la pasarela de pagos Dusupay
- [ethrpc](https://github.com/onrik/ethrpc) - Bindings de Go para la API JSON RPC de Ethereum.
- [facebook](https://github.com/huandu/facebook) - Biblioteca de Go compatible con la API Graph de Facebook.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Cliente no oficial para Golang de la API XML de la pasarela de pagos Fasapay.
- [fcm](https://github.com/maddevsio/fcm) - Biblioteca de Go para Firebase Cloud Messaging.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - SDK de Go para los feature flags de [Featureflip](https://featureflip.io/), con evaluación local y actualizaciones en streaming.
- [gads](https://github.com/emiddleton/gads) - API no oficial de Google Adwords.
- [gcm](https://github.com/Aorioli/gcm) - Biblioteca de Go para Google Cloud Messaging.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - Biblioteca de Go para acceder a las API de geocodificación / geocodificación inversa de [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/) y [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim).
- [github](https://github.com/google/go-github) - Biblioteca de Go para acceder a la API REST v3 de GitHub.
- [githubql](https://github.com/shurcooL/githubql) - Biblioteca de Go para acceder a la API GraphQL v4 de GitHub.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - Biblioteca de Go para acceder a los servicios de [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) (Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)
- [go-aws-news](https://github.com/circa10a/go-aws-news) - Aplicación y biblioteca de Go para obtener las novedades de AWS.
- [go-chronos](https://github.com/axelspringer/go-chronos) - Biblioteca de Go para interactuar con el planificador de trabajos [Chronos](https://mesos.github.io/chronos/)
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - Biblioteca cliente de Go para [Gerrit Code Review](https://www.gerritcodereview.com/).
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - Pequeño cliente de Go para la API de HackerNews.
- [go-here](https://github.com/abdullahselek/go-here) - Biblioteca cliente de Go para las API basadas en ubicación de HERE.
- [go-hibp](https://github.com/wneessen/go-hibp) - Binding sencillo de Go para las API de "Have I Been Pwned".
- [go-imgur](https://github.com/koffeinsource/go-imgur) - Biblioteca cliente de Go para [imgur](https://imgur.com)
- [go-jira](https://github.com/andygrunwald/go-jira) - Biblioteca cliente de Go para [Atlassian JIRA](https://www.atlassian.com/software/jira)
- [go-lark](https://github.com/go-lark/lark) - SDK no oficial y fácil de usar para la plataforma abierta de [Feishu](https://open.feishu.cn/) y [Lark](https://open.larksuite.com/).
- [go-marathon](https://github.com/gambol99/go-marathon) - Biblioteca de Go para interactuar con el PAAS Marathon de Mesosphere.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - Biblioteca cliente de Go para acceder a la [API de MyAnimeList](https://myanimelist.net/apiconfig/references/api/v2).
- [go-openai](https://github.com/sashabaranov/go-openai) - Biblioteca de las API de OpenAI ChatGPT, DALL·E y Whisper para Go.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - Biblioteca cliente de Go para interactuar con la API de [OpenProject](https://docs.openproject.org/api/).
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - Módulo de Go para trabajar con [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) (compatible con Insomnia).
- [go-redoc](https://github.com/mvrilo/go-redoc) - Interfaz de documentación OpenAPI/Swagger integrada para Go que usa [ReDoc](https://redocly.com/).
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - Biblioteca de Go para la [REST Countries API](https://countrylayer.com/).
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - Biblioteca cliente de Go para interactuar con la [API REST de Salesforce](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm).
- [go-sophos](https://github.com/esurdam/go-sophos) - Biblioteca cliente de Go para la [API REST de Sophos UTM](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) sin dependencias.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Biblioteca de Go que contiene [Swagger UI](https://swagger.io/tools/swagger-ui/) precompilado para servir swagger json.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Cliente de la API de la plataforma de publicación Telegraph.
- [go-trending](https://github.com/andygrunwald/go-trending) - Biblioteca de Go para acceder a los [repositorios en tendencia](https://github.com/trending) y a los [desarrolladores](https://github.com/trending/developers) de Github.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - Biblioteca cliente de Go para la API de [Unsplash.com](https://unsplash.com).
- [go-xkcd](https://github.com/nishanths/go-xkcd) - Cliente de Go para la API de xkcd.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Biblioteca cliente de Go para la API v2.0 de Yapla.
- [goagi](https://github.com/staskobzar/goagi) - Biblioteca de Go para crear aplicaciones agi/fastagi de Asterisk PBX.
- [goami2](https://github.com/staskobzar/goami2) - Biblioteca AMI v2 para Asterisk PBX.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Biblioteca de Golang que proporciona abstracciones de base de datos comunes y sencillas sobre Google Sheets.
- [gogtrends](https://github.com/groovili/gogtrends) - API no oficial de Google Trends.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - Envoltorio de Golang para la API v3 de The Movie Database.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics es una biblioteca de Go para obtener letras de canciones del sitio web de Wikia.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Biblioteca de Go para la API de MalShare [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Biblioteca cliente de Go para MusicBrainz WS2.
- [google](https://github.com/google/google-api-go-client) - API de Google generadas automáticamente para Go.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Envoltorio sencillo para generar informes de Google Analytics fácilmente.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Biblioteca cliente de Go para las API de Google Cloud.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - Biblioteca cliente de Go para la [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/).
- [gopensky](https://github.com/navidys/gopensky) - Implementación de cliente en Go para la API en vivo de [OpenSKY Network](https://opensky-network.org/) (datos ADS-B y Mode S del espacio aéreo).
- [gosip](https://github.com/koltyakov/gosip) - Biblioteca cliente para SharePoint.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm es una biblioteca de Go que implementa el protocolo de comunicaciones necesario para escribir spouts y Bolts de Storm en Go que se comunican con los shells de Storm.
- [hipchat](https://github.com/andybons/hipchat) - Este proyecto implementa una biblioteca cliente de golang para la API de Hipchat.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - Paquete de golang para comunicarse con HipChat a través de XMPP.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - Cliente de Go para la API de httpSMS.
- [igdb](https://github.com/Henry-Sarabia/igdb) - Cliente de Go para la [Internet Game Database API](https://api.igdb.com/).
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - Envoltorio de Go para la API de IP2Location.io [IP2Location.io](https://www.ip2location.io/).
- [jokeapi-go](https://github.com/icelain/jokeapi) - Cliente de Go para [JokeAPI](https://sv443.net/jokeapi/v2/).
- [lark](https://github.com/chyroc/lark) - SDK de Go para la Open API de [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/), compatible con TODAS las Open API y callbacks de eventos.
- [lastpass-go](https://github.com/ansd/lastpass-go) - Biblioteca cliente de Go para la API de [LastPass](https://www.lastpass.com/).
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Cliente de Go para la API de Lemon Squeezy.
- [libgoffi](https://github.com/clevabit/libgoffi) - Caja de herramientas de adaptadores de bibliotecas para la integración nativa con [libffi](https://sourceware.org/libffi/)
- [libopenapi](https://github.com/pb33f/libopenapi) - Analiza, valida y trabaja con especificaciones OpenAPI, Swagger, Overlays y Arazzo.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Cliente de Go para la API v2 de Manus AI con automatización de tareas, gestión de archivos, webhooks y modelos con seguridad de tipos.
- [Medium](https://github.com/Medium/medium-sdk-go) - SDK de Golang para la API OAuth2 de Medium.
- [megos](https://github.com/andygrunwald/megos) - Biblioteca cliente para acceder a un clúster de [Apache Mesos](https://mesos.apache.org/).
- [minio-go](https://github.com/minio/minio-go) - Biblioteca de Go de Minio para almacenamiento en la nube compatible con Amazon S3.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel es una biblioteca para registrar eventos y enviar actualizaciones de perfiles de Mixpanel a Mixpanel desde tus aplicaciones go.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Cliente de Go para la API de Nansen AI con análisis de Smart Money, filtro de tokens, perfilador y cero dependencias.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - Cliente de Go para [NewsAPI](https://newsapi.org/).
- [openaigo](https://github.com/otiai10/openaigo) - Biblioteca cliente de la API de OpenAI GPT3/GPT3.5 ChatGPT para Go.
- [patreon-go](https://github.com/mxpv/patreon-go) - Biblioteca de Go para la API de Patreon.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - Envoltorio para la API de pagos de PayPal.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - El SDK de Go para la API Rest de Playlyfe.
- [pushover](https://github.com/gregdel/pushover) - Envoltorio de Go para la API de Pushover.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - Biblioteca de Go para la API de [RAWG Video Games Database](https://rawg.io/)
- [shopify](https://github.com/rapito/go-shopify) - Biblioteca de Go para realizar solicitudes CRUD a la API de Shopify.
- [simples3](https://github.com/rhnvrm/simples3) - Biblioteca sencilla y sin adornos de AWS S3 que usa REST con firma V4, escrita en Go.
- [slack](https://github.com/slack-go/slack) - API de Slack en Go.
- [smite](https://github.com/sergiotapia/smitego) - Paquete de Go que envuelve el acceso a la API del juego Smite.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - Biblioteca cliente de Go y cliente de línea de comandos para la API web de SonarQube.
- [spec](https://github.com/oaswrap/spec) - Constructor ligero de OpenAPI 3.x compatible con generación estática y con frameworks populares como chi, echo, gin, fiber, mux y más.
- [spotify](https://github.com/rapito/go-spotify) - Biblioteca de Go para acceder a la API WEB de Spotify.
- [steam](https://github.com/sostronk/go-steam) - Biblioteca de Go para interactuar con servidores de juegos de Steam.
- [stripe](https://github.com/stripe/stripe-go) - Cliente de Go para la API de Stripe.
- [swag](https://github.com/zc2638/swag) - Sin comentarios: envoltorio sencillo de go para crear API compatibles con swagger 2.0. Compatible con la mayoría de los frameworks de enrutamiento, como el integrado, gin, chi, mux, echo, httprouter, fasthttp y más.
- [textbelt](https://github.com/dietsche/textbelt) - Cliente de Go para la API de mensajes de texto de textbelt.com.
- [threads-go](https://github.com/tirthpatell/threads-go) - Biblioteca cliente de Go para la API de Meta Threads con OAuth 2.0, limitación de tasa y gestión de errores con seguridad de tipos.
- [Trello](https://github.com/adlio/trello) - Envoltorio de Go para la API de Trello.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - Envoltorio de Go para la API de TripAdvisor.
- [tumblr](https://github.com/mattcunningham/gumblr) - Envoltorio de Go para la API v2 de Tumblr.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Envoltorio de Go y cliente de línea de comandos para la API v2 de Uptime Robot.
- [vl-go](https://github.com/verifid/vl-go) - Biblioteca cliente de Go para la API de la capa de verificación de identidad VerifID.
- [webhooks](https://github.com/go-playground/webhooks) - Receptor de webhooks para GitHub y Bitbucket.
- [wit-go](https://github.com/wit-ai/wit-go) - Cliente de Go para la API HTTP de wit.ai.
- [ynab](https://github.com/brunomvsouza/ynab.go) - Envoltorio de Go para la API de YNAB.
- [zooz](https://github.com/gojuno/go-zooz) - Cliente de Go para la API de Zooz.

**[⬆ volver arriba](#contents)**

## Utilidades

_Utilidades y herramientas generales para hacerte la vida más fácil._

- [abstract](https://github.com/maxbolgarin/abstract) - Abstracciones y utilidades para eliminar el código repetitivo de la lógica de negocio.
- [apm](https://github.com/topfreegames/apm) - Gestor de procesos para aplicaciones Golang con una API HTTP.
- [backscanner](https://github.com/icza/backscanner) - Escáner similar a bufio.Scanner, pero que lee y devuelve las líneas en orden inverso, empezando en una posición dada y avanzando hacia atrás.
- [bed](https://github.com/itchyny/bed) - Editor binario similar a Vim escrito en Go.
- [blank](https://github.com/Henry-Sarabia/blank) - Verifica o elimina espacios en blanco de las cadenas.
- [bleep](https://github.com/sinhashubham95/bleep) - Realiza cualquier número de acciones ante cualquier conjunto de señales del sistema operativo en Go.
- [boilr](https://github.com/tmrts/boilr) - Herramienta de CLI ultrarrápida para crear proyectos a partir de plantillas de código base.
- [boring](https://github.com/alebeck/boring) - Gestor sencillo de túneles SSH para la línea de comandos.
- [changie](https://github.com/miniscruff/changie) - Herramienta automatizada de changelogs para preparar versiones, con muchas opciones de personalización.
- [chyle](https://github.com/antham/chyle) - Generador de changelogs que usa un repositorio git, con múltiples posibilidades de configuración.
- [circuit](https://github.com/cep21/circuit) - Implementación en Go eficiente y completa del patrón circuit breaker, al estilo de Hystrix.
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Circuit breakers en Go.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Paquete de portapapeles multiplataforma en Go.
- [clockwork](https://github.com/jonboulle/clockwork) - Reloj falso sencillo para golang.
- [cmd](https://github.com/SimonBaeumer/cmd) - Biblioteca para ejecutar comandos de shell en osx, windows y linux.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - Herramienta multiplataforma para validar archivos de configuración.
- [contem](https://github.com/maxbolgarin/contem) - Sustituto directo de context.Context para el apagado ordenado de aplicaciones Go.
- [cookie](https://github.com/syntaqx/cookie) - Paquete de análisis y utilidades para structs de cookies.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - Portapapeles universal para múltiples estaciones de trabajo que usa un backend similar a S3 para el almacenamiento.
- [countries](https://github.com/biter777/countries) - Implementación completa de los estándares ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR e IANA ccTLD.
- [countries](https://github.com/pioz/countries) - Todo lo que necesitas cuando trabajas con países en Go.
- [create-go-app](https://github.com/create-go-app/cli) - Potente CLI para crear un nuevo proyecto listo para producción con backend (Golang), frontend (JavaScript, TypeScript) y automatización del despliegue (Ansible, Docker) ejecutando un solo comando.
- [cryptgo](https://github.com/Gituser143/cryptgo) - ¡Crytpgo es una aplicación basada en TUI escrita íntegramente en Go para monitorizar y observar los precios de las criptomonedas en tiempo real!
- [ctop](https://github.com/bcicen/ctop) - Interfaz [similar a top](https://ctop.sh) (p. ej., htop) para métricas de contenedores.
- [ctxutil](https://github.com/posener/ctxutil) - Colección de funciones de utilidad para contextos.
- [cvt](https://github.com/shockerli/cvt) - Convierte de forma fácil y segura cualquier valor a otro tipo.
- [dbt](https://github.com/nikogura/dbt) - Framework para ejecutar binarios firmados con actualización automática desde un repositorio central y de confianza.
- [Death](https://github.com/vrecan/death) - Gestión del apagado de aplicaciones go mediante señales.
- [debounce](https://github.com/floatdrop/debounce) - Debouncer sin asignaciones de memoria escrito en Go.
- [delve](https://github.com/derekparker/delve) - Depurador de Go.
- [dive](https://github.com/wagoodman/dive) - Herramienta para explorar cada capa de una imagen Docker.
- [dlog](https://github.com/kirillDanshin/dlog) - Logger controlado en tiempo de compilación para que tu versión de lanzamiento sea más pequeña sin eliminar las llamadas de depuración.
- [EaseProbe](https://github.com/megaease/easeprobe) - Herramienta sencilla, independiente y ligera que puede funcionar como daemon de comprobación de estado, compatible con sondas HTTP/TCP/SSH/Shell/Client/... y con notificaciones por Slack/Discord/Telegram/SMS...
- [equalizer](https://github.com/reugn/equalizer) - Colección de gestores de cuotas y limitadores de tasa para Go.
- [ergo](https://github.com/cristianoliveira/ergo) - Gestión sencilla de múltiples servicios locales que se ejecutan en distintos puertos.
- [evaluator](https://github.com/nullne/evaluator) - Evalúa una expresión dinámicamente basándose en s-expressions. Es sencillo y fácil de ampliar.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Patrones de tolerancia a fallos y resiliencia para Go.
- [filetype](https://github.com/h2non/filetype) - Pequeño paquete para inferir el tipo de archivo comprobando la firma de números mágicos.
- [filler](https://github.com/yaronsumel/filler) - Pequeña utilidad para rellenar structs usando la etiqueta "fill".
- [filter](https://github.com/gookit/filter) - Proporciona filtrado, saneamiento y conversión de datos de Go.
- [fzf](https://github.com/junegunn/fzf) - Buscador difuso para la línea de comandos escrito en Go.
- [generate](https://github.com/go-playground/generate) - Ejecuta go generate de forma recursiva en una ruta o variable de entorno especificada y puede filtrar mediante expresiones regulares.
- [gh-image](https://github.com/drogers0/gh-image) - Extensión de la CLI gh que sube imágenes a issues, PR y README de GitHub desde la línea de comandos, generando URL de user-attachments que respetan la visibilidad del repositorio.
- [ghokin](https://github.com/antham/ghokin) - Formateador paralelizado sin dependencias externas para gherkin (cucumber, behat...).
- [git-time-metric](https://github.com/git-time-metric/gtm) - Seguimiento del tiempo sencillo, transparente y ligero para Git.
- [git-tools](https://github.com/kazhuravlev/git-tools) - Herramienta para ayudar a gestionar etiquetas de git.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - Gestiona tus repositorios git en un solo lugar.
- [gitcs](https://github.com/knbr13/gitcs/) - Visualizador de commits de Git, herramienta de CLI para visualizar tus commits de Git en tu máquina local.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Funciones listas para producción para frameworks web basados en Go.
- [go-astitodo](https://github.com/asticode/go-astitodo) - Analiza los TODO de tu código GO.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - Herramienta go:generate para envolver los símbolos exportados por plugins de golang (solo 1.8).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - Bibliotecas y herramientas de CLI de bsdiff y bspatch en Go puro.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Gestor de portapapeles minimalista para Mac.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Conjuntos de constantes genéricos y tipados con análisis seguro de cadenas para suplir la falta de un tipo enum en Go.
- [go-convert](https://github.com/Eun/go-convert) - El paquete go-convert te permite convertir un valor a otro tipo.
- [go-countries](https://github.com/mikekonan/go-countries) - Búsqueda ligera sobre códigos ISO-3166.
- [go-dry](https://github.com/ungerik/go-dry) - Paquete DRY (don't repeat yourself, no te repitas) para Go.
- [go-events](https://github.com/deatil/go-events) - Paquete de eventos y suscripción a eventos para go, como las funciones hook de wordpress.
- [go-funk](https://github.com/thoas/go-funk) - Biblioteca de utilidades moderna para Go que proporciona funciones auxiliares (map, find, contains, filter, chunk, reverse...).
- [go-health](https://github.com/Talento90/go-health) - El paquete health simplifica la forma de añadir comprobaciones de estado a tus servicios.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - Biblioteca de Go para codificar structs en campos de cabecera.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - CLI para eliminar versiones no utilizadas o anteriores de AWS Lambdas.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock es una biblioteca de bloqueos que implementa mutex de lectura-escritura y trylock de lectura-escritura sin inanición.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - Biblioteca de coincidencia de patrones inspirada en ts-pattern.
- [go-pkg](https://github.com/chenquan/go-pkg) - Kit de herramientas para go.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Paquete de Go para trabajar con Problem Details.
- [go-qr](https://github.com/piglig/go-qr) - Generador de códigos QR nativo, de alta calidad y minimalista.
- [go-rate](https://github.com/beefsack/go-rate) - Limitador de tasa temporizado para Go.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - Biblioteca de conversión segura de tipos numéricos que evita el desbordamiento y el subdesbordamiento de enteros (aborda gosec G115 y CWE-190).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Generador de sitemaps XML escrito en Go.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - Funciones auxiliares genéricas con seguridad de tipos para slices, mapas, cadenas, errores, JSON, HTTP y contenedores, organizadas en paquetes pequeños que se pueden adoptar de forma independiente.
- [go-trigger](https://github.com/sadlil/go-trigger) - Disparador global de eventos para Go: registra eventos con un id y dispáralos desde cualquier parte de tu proyecto.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper es un paquete de circuit breaker para Go que te permite crear circuitos y controlar su estado.
- [go-type](https://github.com/mikekonan/go-types) - Biblioteca que proporciona tipos de Go para el almacenamiento/validación y la transferencia de ISO-4217, ISO-3166 y otros tipos.
- [go-utils](https://github.com/Goldziher/go-utils) - Utilidades genéricas sencillas y eficientes para Go inspiradas en JavaScript y Python (map, filter, reduce y más).
- [goback](https://github.com/carlescere/goback) - Paquete sencillo de retroceso exponencial para Go.
- [goctx](https://github.com/zerosnake0/goctx) - Obtén los valores de tu contexto con alto rendimiento.
- [godaemon](https://github.com/VividCortex/godaemon) - Utilidad para escribir daemons.
- [godoclive](https://github.com/syst3mctl/godoclive) - Genera documentación interactiva de API a partir de manejadores HTTP de Go mediante el análisis estático de enrutadores chi, gin y net/http.
- [godropbox](https://github.com/dropbox/godropbox) - Bibliotecas comunes de Dropbox para escribir servicios/aplicaciones en Go.
- [gofn](https://github.com/tiendc/gofn) - Funciones de utilidad de alto rendimiento escritas con genéricos para Go 1.18+.
- [golarm](https://github.com/msempere/golarm) - Dispara alarmas con eventos del sistema.
- [golog](https://github.com/mlimaloureiro/golog) - Herramienta de CLI fácil y ligera para hacer seguimiento del tiempo de tus tareas.
- [gopencils](https://github.com/bndr/gopencils) - Paquete pequeño y sencillo para consumir fácilmente API REST.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - Pequeña biblioteca de golang para generar imágenes de marcador de posición.
- [goreadability](https://github.com/philipjkim/goreadability) - Extractor de resúmenes de páginas web que usa Facebook Open Graph y readability de arc90.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Distribuye binarios de Go de la forma más rápida y sencilla posible.
- [goreporter](https://github.com/wgliang/goreporter) - Herramienta de Golang que realiza análisis estático, pruebas unitarias y revisión de código, y genera informes de calidad del código.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - Biblioteca cliente de SeaweedFS con casi todas las funciones.
- [gostrutils](https://github.com/ik5/gostrutils) - Colecciones de funciones de manipulación y conversión de cadenas.
- [gotenv](https://github.com/subosito/gotenv) - Carga variables de entorno desde `.env` o cualquier `io.Reader` en Go.
- [goval](https://github.com/maja42/goval) - Evalúa expresiones arbitrarias en Go.
- [graterm](https://github.com/skovtunenko/graterm) - Proporciona primitivas para realizar una terminación ordenada (GRAceful TERMination, también llamada apagado) secuencial/concurrente en aplicaciones Go.
- [grofer](https://github.com/pesos/grofer) - ¡Herramienta de monitorización del sistema y de recursos escrita en Golang!
- [gubrak](https://github.com/novalagung/gubrak) - Biblioteca de utilidades para Golang con azúcar sintáctico. Es como lodash, pero para golang.
- [handy](https://github.com/miguelpragier/handy) - Muchas utilidades y funciones auxiliares, como manejadores/formateadores de cadenas y validadores.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Prueba de disponibilidad (readiness) sencilla pero potente para Kubernetes.
- [hostctl](https://github.com/guumaster/hostctl) - Herramienta de CLI para gestionar /etc/hosts con comandos sencillos.
- [htcat](https://github.com/htcat/htcat) - Utilidad de HTTP GET paralela y en canalización.
- [hub](https://github.com/github/hub) - Envuelve los comandos de git con funcionalidad adicional para interactuar con github desde la terminal.
- [immortal](https://github.com/immortal/immortal) - Supervisor multiplataforma para \*nix (independiente del sistema operativo).
- [jet](https://github.com/NicoNex/jet) - Just Edit Text: herramienta rápida y potente para buscar y reemplazar contenido y nombres de archivos mediante expresiones regulares.
- [jsend](https://github.com/clevergo/jsend) - Implementación de JSend escrita en Go.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - Visor interactivo de logs JSON.
- [jump](https://github.com/gsamokovarov/jump) - Jump te ayuda a navegar más rápido aprendiendo tus hábitos.
- [just](https://github.com/kazhuravlev/just) - Simplemente una colección de funciones útiles para trabajar con estructuras de datos genéricas.
- [koazee](https://github.com/wesovilabs/koazee) - Biblioteca inspirada en la evaluación perezosa y la programación funcional que elimina las complicaciones de trabajar con arrays.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - Descubrimiento e inventario de dispositivos de red con etiquetado persistente, escaneo de múltiples redes e integración con Tailscale.
- [lang](https://github.com/maxbolgarin/lang) - Funciones genéricas de una línea para trabajar con variables, slices y mapas sin código repetitivo.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - Módulo de Go que proporciona utilidades comunes para el desarrollo de API REST nativas de la nube. También contiene utilidades específicas de AWS.
- [limiters](https://github.com/mennanov/limiters) - Limitadores de tasa para aplicaciones distribuidas en Golang con backends configurables y bloqueos distribuidos.
- [lo](https://github.com/samber/lo) - Biblioteca de Go al estilo de Lodash basada en los genéricos de Go 1.18+ (map, filter, contains, find...)
- [loncha](https://github.com/kazu/loncha) - Utilidades de alto rendimiento para slices.
- [lrserver](https://github.com/jaschaephraim/lrserver) - Servidor LiveReload para Go.
- [mani](https://github.com/alajmo/mani) - Herramienta de CLI que te ayuda a gestionar múltiples repositorios.
- [mc](https://github.com/minio/mc) - Minio Client proporciona herramientas mínimas para trabajar con almacenamiento en la nube y sistemas de archivos compatibles con Amazon S3.
- [mergo](https://github.com/imdario/mergo) - Utilidad para fusionar structs y mapas en Golang. Útil para los valores predeterminados de configuración, evitando sentencias if engorrosas.
- [mimemagic](https://github.com/zRedShift/mimemagic) - Biblioteca/utilidad de detección de tipos MIME en Go puro de rendimiento ultraalto.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - Paquete para la detección de tipos MIME basada en números mágicos.
- [minify](https://github.com/tdewolff/minify) - Minificadores rápidos para los formatos de archivo HTML, CSS, JS, XML, JSON y SVG.
- [minquery](https://github.com/icza/minquery) - Consulta de MongoDB / mgo.v2 que admite una paginación eficiente (cursores para seguir listando documentos donde lo dejamos).
- [moldova](https://github.com/StabbyCutyou/moldova) - Utilidad para generar datos aleatorios a partir de una plantilla de entrada.
- [mole](https://github.com/davrodpin/mole) - Aplicación de CLI para crear fácilmente túneles ssh.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - Paginación de Mongodb para el paquete oficial mongodb/mongo-go-driver, compatible tanto con consultas normales como con canalizaciones de agregación.
- [mssqlx](https://github.com/linxGnu/mssqlx) - Biblioteca cliente de bases de datos, proxy para cualquier estructura maestro-esclavo o maestro-maestro. Pensada para ser ligera y con balanceo automático.
- [multitick](https://github.com/VividCortex/multitick) - Multiplexor para tickers alineados.
- [netbug](https://github.com/e-dard/netbug) - Perfilado remoto sencillo de tus servicios.
- [nfdump](https://github.com/chrispassas/nfdump) - Lee archivos netflow de nfdump.
- [nostromo](https://github.com/pokanop/nostromo) - CLI para crear alias potentes.
- [okrun](https://github.com/xta/okrun) - Apisonadora de errores para go run.
- [olaf](https://github.com/btnguyen2k/olaf) - Twitter Snowflake implementado en Go.
- [onecache](https://github.com/adelowo/onecache) - Biblioteca de caché compatible con múltiples almacenes de backend (Redis, Memcached, sistema de archivos, etc.).
- [optional](https://github.com/kazhuravlev/optional) - Campos de structs y variables opcionales.
- [panicparse](https://github.com/maruel/panicparse) - Agrupa goroutines similares y colorea los volcados de pila.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - Biblioteca de coincidencia de patrones.
- [peco](https://github.com/peco/peco) - Herramienta de filtrado interactiva simplista.
- [pgo](https://github.com/arthurkushman/pgo) - Funciones prácticas para la comunidad de PHP.
- [pm](https://github.com/VividCortex/pm) - Gestor de procesos (es decir, de goroutines) con una API HTTP.
- [pointer](https://github.com/xorcare/pointer) - El paquete pointer contiene rutinas auxiliares para simplificar la creación de campos opcionales de tipos básicos.
- [ptr](https://github.com/gotidy/ptr) - Paquete que proporciona funciones para simplificar la creación de punteros a partir de constantes de tipos básicos.
- [rate](https://github.com/webriots/rate) - Biblioteca de limitación de tasa de alto rendimiento con estrategias de token bucket y AIMD.
- [rclient](https://github.com/zpatrick/rclient) - Cliente legible, flexible y fácil de usar para API REST.
- [release](https://github.com/tomodian/release) - CLI para changelogs con formato Keep-a-changelog.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Informes rápidos de compatibilidad de API para proyectos Go.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - Controla el ratón y el teclado desde un smartphone.
- [repeat](https://github.com/ssgreg/repeat) - Implementación en Go de distintas estrategias de retroceso, útiles para reintentar operaciones y enviar latidos.
- [request](https://github.com/mozillazg/request) - Solicitudes HTTP en Go para humanos™.
- [rerun](https://github.com/ivpusic/rerun) - Recompila y vuelve a ejecutar aplicaciones go cuando cambia el código fuente.
- [rest-go](https://github.com/edermanoel94/rest-go) - Paquete que proporciona muchos métodos útiles para trabajar con API REST.
- [retro](https://github.com/goioc/retro) - Práctica biblioteca de reintentos ante errores con una gran flexibilidad (estrategias de retroceso, límites, etc.).
- [retry](https://github.com/kamilsk/retry) - El mecanismo funcional más avanzado para realizar acciones de forma repetida hasta que tengan éxito.
- [retry](https://github.com/percolate/retry) - Paquete de reintentos sencillo pero muy configurable para Go.
- [retry](https://github.com/thedevsaddam/retry) - Paquete de mecanismo de reintentos sencillo y fácil para Go.
- [retry](https://github.com/shafreeck/retry) - Biblioteca bastante sencilla para garantizar que tu trabajo se realice.
- [retry-go](https://github.com/avast/retry-go) - Biblioteca sencilla para mecanismos de reintento.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Reintentos sencillos y fáciles para golang.
- [robustly](https://github.com/VividCortex/robustly) - Ejecuta funciones de forma resiliente, capturando los panics y reiniciándolas.
- [rospo](https://github.com/ferama/rospo) - Túneles ssh sencillos y fiables con un servidor ssh embebido en Golang.
- [scan](https://github.com/blockloop/scan) - Escanea `sql.Rows` de golang directamente en structs, slices o tipos primitivos.
- [scan](https://github.com/wroge/scan) - Escanea filas sql en cualquier tipo gracias a los genéricos.
- [scany](https://github.com/georgysavva/scany) - Biblioteca para escanear datos de una base de datos en structs de Go y más.
- [serve](https://github.com/syntaqx/serve) - Servidor http estático donde lo necesites.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh es una CLI que te ayuda a crear y gestionar sesiones de tmux de forma rápida y sencilla usando zoxide.
- [set](https://github.com/nofeaturesonlybugs/set) - Mapeo de structs eficiente y flexible y conversión de tipos flexible.
- [shutdown](https://github.com/ztrue/shutdown) - Hooks de apagado de aplicaciones para el manejo de `os.Signal`.
- [silk](https://github.com/chrispassas/silk) - Lee archivos netflow de silk.
- [slice](https://github.com/psampaz/slice) - Funciones con seguridad de tipos para operaciones habituales con slices en Go.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - Conversión de slices entre tipos primitivos.
- [slicer](https://github.com/leaanthony/slicer) - Facilita el trabajo con slices.
- [sorty](https://github.com/jfcg/sorty) - Ordenación concurrente / paralela rápida.
- [sqlex](https://github.com/go-sqlex/sqlex) - Modernización de jmoiron/sqlx de sustitución directa, con errores del analizador léxico de SQL corregidos, expansión automática de cláusulas IN, hooks intercambiables e interfaces DB/Tx/Conn unificadas.
- [sqlx](https://github.com/jmoiron/sqlx) - Proporciona un conjunto de extensiones sobre el excelente paquete integrado database/sql.
- [sqlz](https://github.com/rfberaldo/sqlz) - Extensión del paquete database/sql que añade consultas con nombre, escaneo de structs y operaciones por lotes.
- [sshman](https://github.com/shoobyban/sshman) - Gestor SSH para archivos authorized_keys en múltiples servidores remotos.
- [stacktower](https://github.com/stacktower-io/stacktower) - Visualiza grafos de dependencias como estructuras físicas de torres, inspirado en XKCD #2347.
- [statiks](https://github.com/janiltonmaciel/statiks) - Servidor de archivos HTTP estático, rápido y sin configuración.
- [Storm](https://github.com/asdine/storm) - Kit de herramientas sencillo y potente para BoltDB.
- [structs](https://github.com/PumpkinSeed/structs) - Implementa funciones sencillas para manipular structs.
- [throttle](https://github.com/yudppp/throttle) - Throttle es un objeto que realizará exactamente una acción por cada intervalo de tiempo.
- [tik](https://github.com/andy2046/tik) - Paquete de rueda de temporización (timing wheel) sencillo y fácil para Go.
- [tome](https://github.com/cyruzin/tome) - Tome se diseñó para paginar API RESTful sencillas.
- [toolbox](https://github.com/viant/toolbox) - Utilidades para slices, mapas, multimapas, structs, funciones y conversión de datos. Enrutador de servicios, evaluador de macros y tokenizador.
- [UNIS](https://github.com/esemplastic/unis) - Common Architecture™ para utilidades de cadenas en Go.
- [upterm](https://github.com/owenthereal/upterm) - Herramienta para que los desarrolladores compartan sesiones de terminal/tmux de forma segura a través de la web. Es perfecta para la programación en pareja remota, el acceso a ordenadores detrás de NAT/firewalls, la depuración remota y mucho más.
- [usql](https://github.com/knq/usql) - usql es una interfaz de línea de comandos universal para bases de datos SQL.
- [util](https://github.com/shomali11/util) - Colección de funciones de utilidad útiles (cadenas, concurrencia, manipulaciones...).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - Ejecuta un comando periódicamente y expone la última STDOUT o su delta enriquecido como endpoint HTTP.
- [wifiqr](https://github.com/reugn/wifiqr) - Generador de códigos QR para Wi-Fi.
- [wuzz](https://github.com/asciimoo/wuzz) - Herramienta de cli interactiva para la inspección de HTTP.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy proporciona una biblioteca de diff y parches binarios en golang.
- [xpool](https://github.com/peczenyj/xpool) - Otro pool de objetos para golang con seguridad de tipos que usa genéricos.
- [yogo](https://github.com/antham/yogo) - Consulta correos de yopmail desde la línea de comandos.

**[⬆ volver arriba](#contents)**

## UUID

_Bibliotecas para trabajar con UUID._

- [fastuuid](https://github.com/rekby/fastuuid) - Generación rápida de UUIDv4 como cadena o bytes.
- [goid](https://github.com/jakehl/goid) - Genera y analiza UUID V4 conformes con el RFC4122.
- [gouid](https://github.com/twharmon/gouid) - Genera ID de cadenas aleatorias criptográficamente seguras con una sola asignación de memoria.
- [guid](https://github.com/sdrapkin/guid) - Generador de Guid rápido y criptográficamente seguro para Go (~10 veces más rápido que `uuid`).
- [nanoid](https://github.com/aidarkhanov/nanoid) - Generador de ID de cadena únicos, pequeño y eficiente, para Go.
- [nanoid](https://github.com/sixafter/nanoid) - Generador eficiente y criptográficamente seguro para la creación rápida y concurrente de NanoID y UUID.
- [sno](https://github.com/muyo/sno) - ID únicos compactos, ordenables y rápidos con metadatos incrustados.
- [ulid](https://github.com/oklog/ulid) - Implementación en Go de ULID (Universally Unique Lexicographically Sortable Identifier).
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - Identificadores únicos seguros y rápidos sin complicaciones, con comandos.
- [uuid](https://github.com/agext/uuid) - Genera, codifica y decodifica UUID v1 con un identificador de nodo aleatorio rápido o de calidad criptográfica.
- [uuid](https://github.com/gofrs/uuid) - Implementación de Universally Unique Identifier (UUID). Admite tanto la creación como el análisis de UUID. Fork mantenido activamente de satori uuid.
- [uuid](https://github.com/google/uuid) - Paquete de Go para UUID basados en el RFC 4122 y en DCE 1.1: Authentication and Security Services.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - Biblioteca de Go pequeña y sin dependencias que valida UUID según el formato estándar del RFC 4122 y convierte UUIDv7() en marcas de tiempo UTC.
- [wuid](https://github.com/edwingeng/wuid) - Generador de números únicos globales extremadamente rápido.
- [xid](https://github.com/rs/xid) - Xid es una biblioteca generadora de id únicos globales, lista para usarse de forma segura directamente en el código de tu servidor.

**[⬆ volver arriba](#contents)**

## Validación

_Bibliotecas de validación._

- [checkdigit](https://github.com/osamingo/checkdigit) - Proporciona algoritmos de dígitos de control (Luhn, Verhoeff, Damm) y calculadoras (ISBN, EAN, JAN, UPC, etc.).
- [checker](https://github.com/cinar/checker) - Validación de entradas sin dependencias y normalización in situ con etiquetas de structs, 23 configuraciones regionales y generación de JSON Schema.
- [go-validator](https://github.com/tiendc/go-validator) - Biblioteca de validación que usa genéricos.
- [gody](https://github.com/guiferpa/gody) - :balloon: Validador de structs ligero para Go.
- [govalid](https://github.com/twharmon/govalid) - Validación rápida basada en etiquetas para structs.
- [govalidator](https://github.com/asaskevich/govalidator) - Validadores y saneadores para cadenas, valores numéricos, slices y structs.
- [govalidator](https://github.com/thedevsaddam/govalidator) - Valida los datos de las solicitudes en Golang con reglas sencillas. Muy inspirado en la validación de solicitudes de Laravel.
- [govy](https://github.com/nobl9/govy) - Reglas de validación fuertemente tipadas sobre una interfaz funcional, impulsadas por genéricos y sin reflexión, con un gran énfasis en elaborar mensajes de error claros y ricos en información.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid es una biblioteca de validación ligera escrita en lenguaje Go. Proporciona una interfaz de validador personalizada y una serie de funciones de validación comunes para ayudar a los desarrolladores a implementar rápidamente la validación de datos.
- [jio](https://github.com/faceair/jio) - jio es un validador de esquemas json similar a [joi](https://github.com/hapijs/joi).
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - Admite la validación de diversos tipos de datos (structs, cadenas, mapas, slices, etc.) con reglas de validación configurables y ampliables especificadas mediante construcciones de código habituales en lugar de etiquetas de structs.
- [validate](https://github.com/gookit/validate) - Paquete de Go para la validación y el filtrado de datos. Permite validar datos de Map, Struct y Request (Form, JSON, url.Values, archivos subidos) y más funciones.
- [validate](https://github.com/gobuffalo/validate) - Este paquete proporciona un framework para escribir validaciones para aplicaciones Go.
- [validator](https://github.com/go-playground/validator) - Validación de structs y campos en Go, incluida la validación entre campos, entre structs y en profundidad de mapas, slices y arrays.
- [Validator](https://github.com/go-the-way/validator) - Validador de modelos ligero escrito en Go. Contiene las funciones de validación: Min, Max, MinLength, MaxLength, Length, Enum, Regex.
- [valix](https://github.com/marrow16/valix) Paquete de Go para validar solicitudes
- [vx](https://github.com/sevlyar/vx) - Validación construida a partir de comprobaciones pequeñas y componibles, sin dependencias y con una ruta de error reconstruible.
- [Zog](https://github.com/Oudwins/zog) - Constructor de esquemas inspirado en [Zod](https://github.com/colinhacks/zod) para el análisis y la validación de valores en tiempo de ejecución.
  **[⬆ volver arriba](#contents)**

## Control de versiones

_Bibliotecas para el control de versiones._

- [cli](https://gitlab.com/gitlab-org/cli) - Herramienta de línea de comandos de GitLab de código abierto que lleva las geniales funciones de GitLab a tu línea de comandos.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go es una biblioteca de Go que permite realizar acciones en proveedores de VCS.
- [ggc](https://github.com/bmf-san/ggc) - Herramienta de CLI para Git con línea de comandos tradicional e interfaz interactiva de búsqueda incremental, soporte de flujos de trabajo y atajos de teclado configurables.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Servidor MCP local para operaciones de Git que usa Ollama para ahorrar tokens y evitar la filtración de secretos.
- [git2go](https://github.com/libgit2/git2go) - Bindings de Go para libgit2.
- [githooks](https://github.com/gabyx/githooks) - Hooks de Git por repositorio y compartidos, con control de versiones y actualización automática.
- [gitty](https://github.com/Omibranch/gitty) - CLI de Git/GitHub en un único binario que sustituye add→commit→push por un solo comando; sintaxis legible por humanos y sin dependencias externas.
- [go-git](https://github.com/go-git/go-git) - Implementación de Git altamente extensible en Go puro.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - Manipula e inspecciona repositorios de VCS en Go.
- [hercules](https://github.com/src-d/hercules) - Obtén información avanzada del historial de los repositorios Git.
- [hgo](https://github.com/beyang/hgo) - Hgo es una colección de paquetes de Go que proporciona acceso de lectura a repositorios locales de Mercurial.

**[⬆ volver arriba](#contents)**

## Vídeo

_Bibliotecas para manipular vídeo._

- [gmf](https://github.com/3d0c/gmf) - Bindings de Go para las bibliotecas av\* de FFmpeg.
- [go-astiav](https://github.com/asticode/go-astiav) - Mejores bindings de C para ffmpeg en GO.
- [go-astisub](https://github.com/asticode/go-astisub) - Manipula subtítulos en GO (.srt, .stl, .ttml, .webvtt, .ssa/.ass, teletexto, .smi, etc.).
- [go-astits](https://github.com/asticode/go-astits) - Analiza y demultiplexa de forma nativa MPEG Transport Streams (.ts) en GO.
- [go-mpd](https://github.com/unki2aut/go-mpd) - Biblioteca de análisis y generación de archivos de manifiesto MPEG-DASH.
- [goav](https://github.com/giorgisio/goav) - Bindings completos de Go para FFmpeg.
- [gortsplib](https://github.com/aler9/gortsplib) - Biblioteca de servidor y cliente RTSP en Go puro.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - Analizador y generador de listas de reproducción HLS (M3U8); se mantiene al día con la especificación.
- [libvlc-go](https://github.com/adrg/libvlc-go) - Bindings de Go para libvlc 2.X/3.X/4.X (usada por el reproductor multimedia VLC).
- [manifestor](https://github.com/alanzng/manifestor) - Biblioteca sin dependencias para analizar, filtrar, transformar y construir manifiestos HLS y DASH.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Empaquetado de vídeo con bitrate adaptativo (ABR) predecible y listo para producción para Go (HLS y DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - Biblioteca y herramientas para trabajar con archivos MP4 que contienen vídeo, audio, subtítulos o metadatos.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - Analizador de MPEG-2 Transport Streams que comprueba la conformidad de la temporización PCR y vuelca estructuras TS, PSI y PES de bajo nivel.
- [v4l](https://github.com/korandiz/v4l) - Biblioteca de captura de vídeo para Linux, escrita en Go.

**[⬆ volver arriba](#contents)**

## Frameworks web

_Frameworks web full stack._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - Biblioteca de servidor HTTP con todo incluido, con un enrutador, una pila de middlewares, hubs de WebSocket, subida de archivos y validación OpenAPI.
- [Andurel](https://github.com/mbvlabs/andurel) - Framework web full-stack para Go inspirado en Rails, con scaffolding, herramientas de bases de datos y frontends renderizados en el servidor o con Inertia.
- [Atreugo](https://github.com/savsgio/atreugo) - Microframework web de alto rendimiento y ampliable sin asignaciones de memoria en las rutas críticas.
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework: un framework para crear API web basadas en JSON. Es totalmente discreto y no reinventa la rueda. Está diseñado para que empezar sea fácil y rápido, a la vez que es lo bastante flexible para casos de uso más complejos.
- [Beego](https://github.com/beego/beego) - beego es un framework web de código abierto y alto rendimiento para el lenguaje de programación Go.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti es un framework de aplicaciones web en Go con una sintaxis expresiva y elegante. Confetti combina la elegancia de Laravel y la sencillez de Go.
- [Don](https://github.com/abemedia/go-don) - Framework de API de alto rendimiento y fácil de usar.
- [doors](https://github.com/doors-dev/doors) - Framework dirigido por el servidor para crear aplicaciones web reactivas y con estado íntegramente en Go.
- [Echo](https://github.com/labstack/echo) - Framework web minimalista y de alto rendimiento para Go.
- [Fastschema](https://github.com/fastschema/fastschema) - Framework web flexible para Go y CMS headless.
- [Fiber](https://github.com/gofiber/fiber) - Framework web inspirado en Express.js construido sobre Fasthttp.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - Framework para proyectos web extensibles mediante plugins. Incluye un concepto de módulos y ofrece funciones de DI, Configareas, i18n, motores de plantillas, graphql, observabilidad, seguridad, eventos, enrutamiento y enrutamiento inverso, etc.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - Proporciona funciones de comercio electrónico con una arquitectura limpia, como DDD y puertos y adaptadores, que puedes usar para crear aplicaciones de comercio electrónico flexibles.
- [Fuego](https://github.com/go-fuego/fuego) - ¡El framework para desarrolladores de Go ocupados! Framework web que genera la especificación OpenAPI 3 a partir del código fuente.
- [Gin](https://github.com/gin-gonic/gin) - ¡Gin es un framework web escrito en Go! Ofrece una API similar a la de martini con un rendimiento mucho mejor, hasta 40 veces más rápido. Si necesitas rendimiento y buena productividad.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Herramienta de vinculación automática de parámetros para Gin, herramientas rpc para gin.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - Framework de microservicios centrado en gRpc. Sus funciones incluyen soporte de ODM para Mongo, soporte de recursos en la nube (AWS/Azure/Google) y una inyección de dependencias fluida personalizada para gRpc. Además, admite grpc-web directamente, lo que permite el acceso desde el navegador a todas las API gRpc sin proxy.
- [Goa](https://github.com/goadesign/goa) - Goa ofrece un enfoque holístico para desarrollar API remotas y microservicios en Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr es un framework de desarrollo de microservicios con convenciones propias.
- [GoFrame](https://github.com/gogf/gf) - GoFrame es un framework de desarrollo de aplicaciones de Golang modular, potente, de alto rendimiento y de nivel empresarial.
- [Gone](https://github.com/gone-io/gone) - Framework ligero de inyección de dependencias y web inspirado en Spring.
- [goravel](https://github.com/goravel/goravel) - Framework web inspirado en Laravel con ORM, autenticación, colas, planificación de tareas y más funciones integradas.
- [Goshtoso](https://github.com/araihu/goshtoso) - Componentes de interfaz renderizados en el servidor para aplicaciones Go, construidos con templ, Tailwind CSS, HTMX y Alpine.js.
- [Goyave](https://github.com/go-goyave/goyave) - Framework de API REST completo orientado al código limpio y al desarrollo rápido, con potentes funcionalidades integradas.
- [Hertz](https://github.com/cloudwego/hertz) - Framework HTTP para Go de alto rendimiento y gran extensibilidad que ayuda a los desarrolladores a crear microservicios.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot es un framework de aplicaciones web de alto rendimiento con configuración automática e inyección de dependencias.
- [httpsuite](https://github.com/rluders/httpsuite) - Análisis de solicitudes HTTP y respuestas de problemas según el RFC 9457 para Go, con un núcleo que solo usa la biblioteca estándar y validación opcional.
- [Huma](https://github.com/danielgtaylor/huma/) - Framework para API REST/GraphQL modernas con OpenAPI 3 integrado, documentación generada y una CLI.
- [iWF](https://github.com/indeedeng/iwf) - iWF es una plataforma todo en uno para desarrollar procesos de negocio de larga duración. Ofrece una abstracción práctica para utilizar bases de datos, ElasticSearch, colas de mensajes, temporizadores duraderos y más, con una interfaz limpia, sencilla y fácil de usar.
- [Lit](https://github.com/jvcoutinho/lit) - Framework web declarativo de alto rendimiento para Golang, orientado a la sencillez y la calidad de vida.
- [Microservice](https://github.com/claygod/microservice) - Framework para la creación de microservicios, escrito en Golang.
- [NotNet](https://github.com/nottechdm/notnet) - Framework ligero de Go para crear API RESTful rápidas y ergonómicas con middlewares y enrutamiento flexible.
- [patron](https://github.com/beatlabs/patron) - Patron es un framework de microservicios que sigue las mejores prácticas de la nube, centrado en la productividad.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux es un potente framework web de Go que usa expresiones regulares para emparejar y manejar solicitudes HTTP. Ofrece funciones como gestión de CORS, registro estructurado, extracción de parámetros de URL, middlewares y limitación de la concurrencia.
- [Revel](https://github.com/revel/revel) - Framework web de alta productividad para el lenguaje Go.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Biblioteca de arranque para crear microservicios empresariales en go con Gin y gRPC de forma rápida y sencilla.
- [Ronykit](https://github.com/clubpay/ronykit) - Framework web con arquitectura de plugins y muy eficiente.
- [rux](https://github.com/gookit/rux) - Framework web sencillo y rápido para crear aplicaciones HTTP en golang.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Port no oficial de shadcn/ui para Go y templ: componentes de interfaz accesibles con CLI y registro.
- [togo](https://github.com/togo-framework/togo) - Framework full-stack que distribuye tu backend en Go y tu frontend en React como un único binario; una CLI de nivel artisan de Laravel.
- [uAdmin](https://github.com/uadmin/uadmin) - Framework web completo para Golang, inspirado en Django.
- [WebGo](https://github.com/naughtygopher/webgo) - Microframework para crear aplicaciones web con encadenamiento de manejadores, middlewares e inyección de contexto. Con manejadores HTTP conformes con la biblioteca estándar (es decir, `http.HandlerFunc`).
- [Xun](https://github.com/yaitoo/xun) - Framework web construido sobre html/template integrado de Go y el enrutador del paquete net/http. Está diseñado para ser ligero, rápido y fácil de usar, a la vez que ofrece una API sencilla e intuitiva para crear aplicaciones web con funciones avanzadas como middlewares, enrutamiento y renderizado de plantillas.
- [Yokai](https://github.com/ankorstore/yokai) - Framework de Go sencillo, modular y observable para aplicaciones de backend.

**[⬆ volver arriba](#contents)**

### Middlewares

#### Middlewares propiamente dichos

- [client-timing](https://github.com/posener/client-timing) - Cliente HTTP para la cabecera Server-Timing.
- [CORS](https://github.com/rs/cors) - Añade fácilmente capacidades CORS a tu API.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Middleware para el framework Echo con registro y métricas.
- [formjson](https://github.com/rs/formjson) - Gestiona de forma transparente la entrada JSON como un POST de formulario estándar.
- [go-fault](https://github.com/github/go-fault) - Middleware de inyección de fallos para Go.
- [Limiter](https://github.com/ulule/limiter) - Middleware de limitación de tasa tremendamente sencillo para Go.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Middleware de Go para monetizar API por solicitud con Lightning Network (Bitcoin).
- [mid](https://github.com/bobg/mid) - Funciones diversas de middleware HTTP: devolución idiomática de errores desde los manejadores; recepción/respuesta con datos JSON; trazado de solicitudes; y más.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Middleware para el framework Gin con registro, métricas, autenticación, trazado, etc.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - Middleware para gRPC con registro, métricas, autenticación, trazado, etc.
- [Tollbooth](https://github.com/didip/tollbooth) - Manejador de solicitudes HTTP con limitación de tasa.
- [XFF](https://github.com/sebest/xff) - Gestiona la cabecera `X-Forwarded-For` y similares.

#### Bibliotecas para crear middlewares HTTP

- [alice](https://github.com/justinas/alice) - Encadenamiento de middlewares sin complicaciones para Go.
- [catena](https://github.com/codemodus/catena) - Concatenación de envoltorios de http.Handler (misma API que "chain").
- [chain](https://github.com/codemodus/chain) - Encadenamiento de envoltorios de manejadores con datos con ámbito ("middleware" basado en net/context).
- [gores](https://github.com/alioygur/gores) - Paquete de Go que gestiona respuestas HTML, JSON, XML, etc. Útil para API RESTful.
- [interpose](https://github.com/carbocation/interpose) - Middleware minimalista de net/http para golang.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - Añade interceptores a `http.Client` para permitir volcar/modelar/trazar/... solicitudes y respuestas.
- [muxchain](https://github.com/stephens2424/muxchain) - Middleware ligero para net/http.
- [negroni](https://github.com/urfave/negroni) - Middleware HTTP idiomático para Golang.
- [render](https://github.com/unrolled/render) - Paquete de Go para renderizar fácilmente respuestas JSON, XML y de plantillas HTML.
- [renderer](https://github.com/thedevsaddam/renderer) - Paquete sencillo, ligero y más rápido de renderizado de respuestas (JSON, JSONP, XML, YAML, HTML, archivos) para Go.
- [stats](https://github.com/thoas/stats) - Middleware de Go que almacena diversa información sobre tu aplicación web.

**[⬆ volver arriba](#contents)**

### Enrutadores

- [alien](https://github.com/gernest/alien) - Enrutador http ligero y rápido venido del espacio exterior.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - Enrutador HTTP sencillo para Go.
- [Bone](https://github.com/go-zoo/bone) - Multiplexor HTTP rapidísimo.
- [Bxog](https://github.com/claygod/Bxog) - Enrutador HTTP sencillo y rápido para Go. Funciona con rutas de distinta dificultad, longitud y anidamiento. Y sabe crear una URL a partir de los parámetros recibidos.
- [chi](https://github.com/go-chi/chi) - Enrutador HTTP pequeño, rápido y expresivo construido sobre net/context.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - Enrutador de alto rendimiento derivado de `httprouter`. El primer enrutador adecuado para `fasthttp`.
- [FastRouter](https://github.com/razonyang/fastrouter) - Enrutador HTTP rápido y flexible escrito en Go.
- [Fox](https://github.com/fox-toolkit/fox) - Enrutador HTTP de alto rendimiento para crear proxies inversos y pasarelas de API, con soporte de primera clase para modificar rutas en tiempo de ejecución.
- [fursy](https://github.com/coregx/fursy) - Enrutador HTTP con manejadores genéricos con seguridad de tipos, generación automática de OpenAPI 3.1 a partir del código y respuestas de error según el RFC 9457.
- [goblin](https://github.com/bmf-san/goblin) - Enrutador http para golang basado en un árbol trie.
- [gocraft/web](https://github.com/gocraft/web) - Paquete de mux y middlewares en Go.
- [Goji](https://github.com/goji/goji) - Goji es un multiplexor de solicitudes HTTP minimalista y flexible con soporte de `net/context`.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router es un enrutador HTTP ligero pero potente para el lenguaje de programación Go.
- [goroute](https://github.com/goroute/route) - Multiplexor de solicitudes HTTP sencillo pero potente.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter es un microframework de servidor/API, enrutador de solicitudes HTTP, multiplexor y mux que proporciona un enrutador de solicitudes con middlewares compatibles con `net/context`.
- [gowww/router](https://github.com/gowww/router) - Enrutador HTTP rapidísimo totalmente compatible con la interfaz net/http.Handler.
- [httprouter](https://github.com/julienschmidt/httprouter) - Enrutador de alto rendimiento. Úsalo junto con los manejadores http estándar para formar un framework web de muy alto rendimiento.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Enrutador HTTP basado en árboles, de alta velocidad y flexible, para Go. Inspirado en httprouter.
- [lars](https://github.com/go-playground/lars) - Enrutador HTTP ligero, rápido, ampliable y sin asignaciones de memoria para Go, usado para crear frameworks personalizables.
- [mux](https://github.com/gorilla/mux) - Potente enrutador y despachador de URL para golang.
- [nchi](https://github.com/muir/nchi) - Enrutador similar a chi construido sobre httprouter con envoltorios de middleware basados en inyección de dependencias
- [ngamux](https://github.com/ngamux/ngamux) - Enrutador HTTP sencillo para Go.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - Enrutador HTTP extremadamente rápido para Go (golang) que admite la coincidencia de rutas mediante expresiones regulares. Incluye soporte completo para crear API RESTful.
- [pure](https://github.com/go-playground/pure) - Enrutador HTTP ligero que se ciñe a la implementación estándar de "net/http".
- [Siesta](https://github.com/VividCortex/siesta) - Framework componible para escribir middlewares y manejadores.
- [vestigo](https://github.com/husobee/vestigo) - Enrutador de URL eficiente, independiente y conforme con HTTP para aplicaciones web en go.
- [violetear](https://github.com/nbari/violetear) - Enrutador HTTP para Go.
- [xmux](https://github.com/rs/xmux) - Muxer de alto rendimiento basado en `httprouter` con soporte de `net/context`.
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Enrutador HTTP sencillo y rápido para Go.

**[⬆ volver arriba](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - Biblioteca de DOM.
- [Extism Go SDK](https://github.com/extism/go-sdk) - Framework de WebAssembly universal y multilenguaje para crear sistemas de plugins y aplicaciones políglotas.
- [go-canvas](https://github.com/markfarnan/go-canvas) - Biblioteca para usar HTML5 Canvas, con todo el dibujo dentro del código go.
- [tinygo](https://github.com/tinygo-org/tinygo) - Compilador de Go para lugares pequeños. Microcontroladores, WebAssembly y herramientas de línea de comandos. Basado en LLVM.
- [vert](https://github.com/norunners/vert) - Interoperabilidad entre valores de Go y JS.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - Ejecuta pruebas de Go WASM en tu navegador.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Bindings de Go para el entorno de ejecución de WebAssembly Wasmtime (soporte de WASI, JIT/AOT, integración segura y rápida).
- [webapi](https://github.com/gowebapi/webapi) - Bindings para DOM y HTML generados a partir de WebIDL.

**[⬆ volver arriba](#contents)**

## Servidores de webhooks

- [HookRun](https://github.com/bluvenr/hookrun) - Motor ligero de acciones para webhooks (un único binario de ~3 MB, sin dependencias) que ejecuta comandos y scripts a partir de reglas YAML, con autenticación por token/HMAC/IP y recarga en caliente.
- [webhook](https://github.com/adnanh/webhook) - Herramienta que permite al usuario crear endpoints HTTP (hooks) que ejecutan comandos en el servidor.
- [webhooked](https://github.com/42Atomys/webhooked) - Un receptor de webhooks con esteroides: gestionar, proteger, formatear y almacenar la carga útil de un webhook nunca ha sido tan fácil.
- [WebhookX](https://github.com/webhookx-io/webhookx) - Pasarela de webhooks para la recepción, el procesamiento y la entrega fiable de mensajes.

**[⬆ volver arriba](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Bindings de Go para Direct3D9.
- [go-ole](https://github.com/go-ole/go-ole) - Implementación de OLE de Win32 para golang.
- [gosddl](https://github.com/MonaxGT/gosddl) - Conversor de cadenas SDDL a JSON fácil de leer. SDDL consta de cuatro partes: Owner, Primary Group, DACL y SACL.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Binding de Golang para la API de Windows Update Agent que usa go-ole.

**[⬆ volver arriba](#contents)**

## Frameworks de flujos de trabajo

_Bibliotecas para crear flujos de trabajo._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Framework para crear flujos de trabajo y actividades que se ejecutan sobre el motor de orquestación Cadence creado por Uber.
- [Dagu](https://github.com/dagu-go/dagu) - Ejecutor de flujos de trabajo sin código. Ejecuta DAG definidos en un formato YAML sencillo.
- [durable-go](https://github.com/agenticenv/durable-go) - Motor de ejecución duradera para aplicaciones Go de un solo proceso y agentes de IA, sin dependencias.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - Motor de ejecución autoalojado para crear, conectar y automatizar flujos de trabajo sin código.
- [go-dag](https://github.com/rhosocial/go-dag) - Framework desarrollado en Go que gestiona la ejecución de flujos de trabajo descritos mediante grafos acíclicos dirigidos.
- [go-taskflow](https://github.com/noneback/go-taskflow) - Framework de programación paralela de tareas de propósito general al estilo de taskflow, con visualizador y perfilador integrados.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Motor de flujos de trabajo duraderos con consola web integrada, respaldado por Postgres, MySQL o SQLite.
- [workflow](https://github.com/luno/workflow) - Framework de flujos de trabajo orientados a eventos independiente de la pila tecnológica.

**[⬆ volver arriba](#contents)**

## XML

_Bibliotecas y herramientas para manipular XML._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - Comparador de XML sencillo para la línea de comandos que genera diffs de carpetas, archivos y etiquetas.
- [xml2map](https://github.com/sbabiv/xml2map) - Conversor de XML a MAP escrito en Golang.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery es un paquete XPath de Golang para consultas XML.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - API procedimental de generación de XML basada en el módulo xmlwriter de libxml2.
- [xpath](https://github.com/antchfx/xpath) - Paquete XPath para Go.
- [zek](https://github.com/miku/zek) - Genera un struct de Go a partir de XML.

## Confianza cero (Zero Trust)

_Bibliotecas y herramientas para implementar arquitecturas de confianza cero (Zero Trust)._

- [Cosign](https://github.com/sigstore/cosign) - Firma, verificación y almacenamiento de contenedores en un registro OCI.
- [in-toto](https://github.com/in-toto/in-toto-golang) - Implementación en Go de la implementación de referencia en python de in-toto (que proporciona un framework para proteger la integridad de la cadena de suministro de software).
- [OpenZiti](https://github.com/openziti/ziti) - Red superpuesta de confianza cero completa y de código abierto. Incluye numerosos SDK para numerosos lenguajes, como [golang](https://github.com/openziti/sdk-golang), que te permiten integrar los principios de confianza cero directamente en tus aplicaciones. [OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) tiene numerosos ejemplos en los que inspirarse, incluido un [cliente ssh de confianza cero - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Utiliza la autenticación JWT de Spiffe con Hashicorp Vault para una autenticación sin secretos.
- [Spire](https://github.com/spiffe/spire) - SPIRE (the SPIFFE Runtime Environment) es una cadena de herramientas de API para establecer confianza entre sistemas de software en una amplia variedad de plataformas de alojamiento.

## Análisis de código

_Herramientas de análisis de código fuente, también conocidas como herramientas de pruebas estáticas de seguridad de aplicaciones (SAST)._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Comprueba si los cambios recientes de un proyecto Go introducen incompatibilidades con versiones anteriores.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Analizador de código estático para Go y otros lenguajes: métricas de complejidad, acoplamiento, cohesión y mantenibilidad, con informes en HTML, JSON, Markdown y SARIF.
- [asty](https://github.com/asty-org/asty) - Convierte AST de golang a JSON y JSON a AST.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket es una herramienta que te ayuda a detectar funciones que no tienen pruebas unitarias directas en tus paquetes Go.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Descubre cuáles de tus dependencias directas de GitHub en Go son susceptibles a ataques de ChainJacking.
- [Chronos](https://github.com/amit-davidson/Chronos) - Detecta condiciones de carrera de forma estática
- [deadmono](https://github.com/arxeiss/deadmono) - Envoltorio sobre deadcode para la detección de código muerto en monorepos de Go.
- [dupl](https://github.com/mibk/dupl) - Herramienta para la detección de código clonado.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck es un programa para detectar errores no comprobados en programas Go.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext detecta contextos anidados en bucles o literales de función.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle es una herramienta de comprobación de estilo como checkstyle de java. Esta herramienta está inspirada en checkstyle de java y en golint. El estilo se basa en algunos puntos de Go Code Review Comments.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch se creó para validar las reglas de la arquitectura limpia, como la regla de dependencia y la interacción entre paquetes en tus proyectos Go.
- [go-critic](https://github.com/go-critic/go-critic) - Linter de código fuente que aporta comprobaciones que actualmente no están implementadas en otros linters.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Forma sencilla de encontrar dependencias desactualizadas de tus proyectos Go.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Visualizador web de AST de Golang.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Herramienta para corregir (añadir, eliminar) automáticamente tus imports de Go.
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - SDK de la API de iFood.
- [golangci-lint](https://github.com/golangci/golangci-lint) – Ejecutor rápido de linters de Go. Ejecuta linters en paralelo, usa caché, admite configuración en `yaml`, tiene integraciones con los principales IDE e incluye decenas de linters.
- [golines](https://github.com/segmentio/golines) - Formateador que acorta automáticamente las líneas largas del código Go.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - Linter de Markdown con validación integrada de enlaces HTTP, un único binario y sin necesidad de Node.js.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - Biblioteca y CLI que genera diagramas de clases de plantuml en texto con información sobre estructuras e interfaces y las relaciones entre ellas.
- [goreturns](https://github.com/sqs/goreturns) - Añade sentencias return con valores cero que coinciden con los tipos de retorno de la función.
- [gostatus](https://github.com/shurcooL/gostatus) - Herramienta de línea de comandos que muestra el estado de los repositorios que contienen paquetes Go.
- [lint](https://github.com/surullabs/lint) - Ejecuta linters como parte de go test.
- [php-parser](https://github.com/z7zmey/php-parser) - Analizador de PHP escrito en Go.
- [revive](https://github.com/mgechev/revive) – Sustituto directo de `golint` ~6 veces más rápido, más estricto, configurable, ampliable y bonito.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck es `go vet` con esteroides, que aplica una tonelada de comprobaciones de análisis estático a las que quizá estés acostumbrado por herramientas como ReSharper para C#.
- [structalign](https://github.com/peczenyj/structalign) - Muestra cómo podrían reordenarse los campos de un struct para usar menos memoria, imprimiendo un diff en lugar de reescribir los archivos.
- [stto](https://github.com/mainak55512/stto) - Contador de líneas de código ligero y superrápido escrito en Go puro.
- [testifylint](https://github.com/Antonboom/testifylint) – Linter que comprueba el uso de [github.com/stretchr/testify](https://github.com/stretchr/testify).
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLI y paquete de go para sacar a la luz los TODO de los comentarios del código (en cualquier lenguaje) y aplicar un `git blame` para identificar al autor.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - Analizador de código estático que vincula los comentarios TODO del código con las incidencias de tu gestor de incidencias.
- [unconvert](https://github.com/mdempsky/unconvert) - Elimina conversiones de tipos innecesarias del código fuente Go.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Linter que detecta la posibilidad de usar variables/constantes de la biblioteca estándar de Go.
- [vacuum](https://github.com/daveshanley/vacuum) - Linter de OpenAPI y herramienta de comprobación de calidad ultrarrápida y ligera.
- [validate](https://github.com/mccoyst/validate) - Valida automáticamente los campos de structs con etiquetas.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - Linter para comprobar que los errores de paquetes externos están envueltos.

**[⬆ volver arriba](#contents)**

## Plugins para editores

_Plugins para editores de texto e IDE._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - Este plugin añade las funciones de [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) a Vim/Neovim.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Extensión de Visual Studio Code para mostrar definiciones en la salida y generar go doc.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - Plugin de Go para los IDE de JetBrains.
- [go-mode](https://github.com/dominikh/go-mode.el) - Modo Go para GNU/Emacs.
- [gocode](https://github.com/nsf/gocode) - Daemon de autocompletado para el lenguaje de programación Go.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - Herramienta de formateo de imports.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - Esta extensión añade a VS Code soporte de perfilado de benchmarks para el lenguaje Go.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - Colección de plugins de Golang para el editor de texto SublimeText 3 que ofrece autocompletado de código y otras funciones propias de un IDE.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - Plugin de Vim para generar pruebas de Go basadas en la firma de la función o del método.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - Plugin de Vim para resaltar errores de sintaxis al guardar.
- [vim-go](https://github.com/fatih/vim-go) - Plugin de desarrollo en Go para Vim.
- [vscode-go](https://github.com/golang/vscode-go) - Extensión para Visual Studio Code (VS Code) que ofrece soporte para el lenguaje Go.
- [Watch](https://github.com/eaburns/Watch) - Ejecuta un comando en una ventana de acme cuando cambian los archivos.

**[⬆ volver arriba](#contents)**

## Herramientas para go generate

- [envdoc](https://github.com/g4s8/envdoc) - Genera documentación de las variables de entorno a partir de archivos fuente de Go.
- [generic](https://github.com/usk81/generic) - Tipo de dato flexible para Go.
- [gocontracts](https://github.com/Parquery/gocontracts) - Lleva el diseño por contrato a Go sincronizando el código con la documentación.
- [godal](https://github.com/mafulong/godal) - Genera modelos orm correspondientes en golang especificando un archivo sql ddl, que pueden usarse con gorm.
- [gonerics](https://github.com/bouk/gonerics) - Genéricos idiomáticos en Go.
- [gotests](https://github.com/cweill/gotests) - Genera pruebas de Go a partir de tu código fuente.
- [gounit](https://github.com/hexdigest/gounit) - Genera pruebas de Go usando tus propias plantillas.
- [hasgo](https://github.com/DylanMeeus/hasgo) - Genera funciones inspiradas en Haskell para tus slices.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - Genera constantes de Go tipadas a partir de la extensión x-constants de una especificación OpenAPI.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Opciones funcionales descritas en la publicación de Dave Cheney "Functional options for friendly APIs".
- [re2dfa](https://gitlab.com/opennota/re2dfa) - Transforma expresiones regulares en máquinas de estados finitos y genera código fuente Go.
- [sqlgen](https://github.com/anqiansong/sqlgen) - Genera código gorm, xorm, sqlx, bun y sql a partir de un archivo SQL o un DSN.
- [TOML-to-Go](https://xuri.me/toml-to-go) - Traduce TOML a un tipo de Go en el navegador al instante.
- [xgen](https://github.com/xuri/xgen) - Analizador de XSD (XML Schema Definition) y generador de código Go/C/Java/Rust/TypeScript.

**[⬆ volver arriba](#contents)**

## Herramientas de Go

- [decouple](https://github.com/bobg/decouple) - Encuentra parámetros de función “sobreespecificados” que podrían generalizarse con tipos de interfaz.
- [docs](https://github.com/go-oas/docs) - Genera automáticamente documentación de API RESTful para proyectos GO, alineada con el estándar Open API Specification.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Visualiza el grafo de llamadas de tu programa Go usando el formato dot.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - Analiza y visualiza el tamaño de las dependencias en binarios compilados de Golang, ofreciendo información sobre su impacto en la compilación final.
- [go-swagger](https://github.com/go-swagger/go-swagger) - Implementación de Swagger 2.0 para go. Swagger es una representación sencilla pero potente de tu API RESTful.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Entorno interactivo para crear y probar plantillas de Go.
- [godbg](https://github.com/tylerwince/godbg) - Implementación de la macro `dbg!` de Rust para una depuración rápida y sencilla durante el desarrollo.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - Encuentra todos los structs que implementan una interfaz de Go determinada en una base de código.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - Herramienta de Go que ejecuta y almacena en caché los binarios incluidos en archivos go.mod.
- [gotemplate.io](https://gotemplate.io/) - Herramienta en línea para previsualizar en vivo plantillas `text/template`.
- [gotestdox](https://github.com/bitfield/gotestdox) - Muestra los resultados de las pruebas de Go como frases legibles.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks marca automáticamente con una estrella tus dependencias de github de go.mod, enviando así algo de cariño a sus mantenedores.
- [gotutor](https://github.com/ahmedakef/gotutor) - Depurador y visualizador de Go en línea.
- [govisual](https://github.com/doganarif/govisual) - Visualizador y depurador de solicitudes HTTP sin configuración y escrito íntegramente en Go para el desarrollo web local en Go.
- [igo](https://github.com/rocketlaunchr/igo) - Transpilador de igo a go (¡nuevas funciones para el lenguaje Go!)
- [lensm](https://github.com/loov/lensm) - Visor de ensamblador y código fuente de Go.
- [modver](https://github.com/bobg/modver) - Compara dos versiones de un módulo de Go para comprobar el cambio de número de versión necesario (mayor, menor o de parche), según las reglas de [semver](https://semver.org/).
- [MoniGO](https://github.com/iyashjayesh/monigo) - Biblioteca de monitorización del rendimiento para aplicaciones Go. ¡Proporciona información en tiempo real sobre el rendimiento de la aplicación! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - Navega por los archivos de go de forma eficiente con la extensión de navegador OctoLinker para GitHub.
- [richgo](https://github.com/kyoh86/richgo) - Enriquece la salida de `go test` con decoraciones de texto.
- [roumon](https://github.com/becheran/roumon) - Monitoriza el estado actual de todas las goroutines activas mediante una interfaz de línea de comandos.
- [rts](https://github.com/galeone/rts) - RTS: response to struct. Genera structs de Go a partir de las respuestas del servidor.
- [textra](https://github.com/ravsii/textra) - Extrae los nombres, tipos y etiquetas de los campos de structs de Go para filtrarlos y exportarlos.
- [typex](https://github.com/dtgorski/typex) - Examina los tipos de Go y sus dependencias transitivas y, opcionalmente, exporta los resultados como declaraciones de objetos de valor (o tipos) de TypeScript.

**[⬆ volver arriba](#contents)**

## Paquetes de software

_Software escrito en Go._

**[⬆ volver arriba](#contents)**

### Herramientas DevOps

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate es una herramienta que convierte cadenas largas en otras más cortas con separadores configurables, por ejemplo, para incluir nombres de ramas en los ID de pilas de despliegue.
- [alaz](https://github.com/ddosify/alaz) - Monitorización de Kubernetes sin esfuerzo, de baja sobrecarga y basada en eBPF.
- [aptly](https://github.com/aptly-dev/aptly) - aptly es una herramienta de gestión de repositorios de Debian.
- [aurora](https://github.com/xuri/aurora) - Consola web multiplataforma para servidores de colas Beanstalkd.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - Diagnostica los costes de AWS, detecta recursos inactivos y optimiza el gasto en la nube directamente desde tu terminal 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Pequeño binario que carga las variables de entorno de Amazon (AWS) para un perfil.
- [Balerter](https://github.com/balerter/balerter) - Gestor de alertas autoalojado basado en scripts.
- [Blast](https://github.com/dave/blast) - Herramienta sencilla para pruebas de carga de API y trabajos por lotes.
- [bombardier](https://github.com/codesenberg/bombardier) - Herramienta rápida y multiplataforma de benchmarking HTTP.
- [cassowary](https://github.com/rogerwelin/cassowary) - Herramienta moderna y multiplataforma de pruebas de carga HTTP escrita en Go.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - Herramienta de resiliencia que ayuda a las aplicaciones a tolerar fallos aleatorios de instancias.
- [colima](https://github.com/abiosoft/colima) - Entornos de ejecución de contenedores en macOS (y Linux) con una configuración mínima.
- [Ddosify](https://github.com/ddosify/ddosify) - Herramienta de pruebas de carga de alto rendimiento, escrita en Golang.
- [decompose](https://github.com/s0rg/decompose) - Herramienta para generar y procesar grafos de conexiones de contenedores Docker.
- [Den](https://github.com/us/den) - Entorno de ejecución sandbox autoalojado para agentes de IA. Alternativa de código abierto a E2B.
- [DepCharge](https://github.com/centerorbit/depcharge) - Ayuda a orquestar la ejecución de comandos en las numerosas dependencias de proyectos grandes.
- [dish](https://github.com/thevxn/dish) - Servicio de monitorización ligero y configurable de forma remota.
- [Docker](https://www.docker.com/) - Plataforma abierta de aplicaciones distribuidas para desarrolladores y administradores de sistemas.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Imagen de Docker para compilar binarios de Go para Windows con la cadena de herramientas MinGW.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Haz copias de seguridad de volúmenes de Docker en local o en cualquier almacenamiento compatible con S3, WebDAV, Azure Blob Storage, Dropbox o SSH.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - Biblioteca de go y ejecutable que produce Dockerfiles válidos a partir de diversos canales de entrada.
- [docklite](https://github.com/benzjeremy/docklite) - Alternativa ligera a Portainer para la gestión de contenedores Docker con métricas SSE en tiempo real.
- [dogo](https://github.com/liudng/dogo) - Monitoriza los cambios en los archivos fuente y compila y ejecuta (reinicia) automáticamente.
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - Dispara trabajos de Jenkins posteriores mediante un binario, docker o Drone CI.
- [drone-scp](https://github.com/appleboy/drone-scp) - Copia archivos y artefactos por SSH mediante un binario, docker o Drone CI.
- [Dropship](https://github.com/chrismckenzie/dropship) - Herramienta para desplegar código mediante cdn.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Paquete de Golang para la ejecución remota sencilla a través de SSH y la descarga por SCP mediante `ProxyCommand`.
- [fac](https://github.com/mkchoi212/fac) - Interfaz de usuario de línea de comandos para resolver conflictos de fusión de git.
- [Flannel](https://github.com/flannel-io/flannel) - Flannel es un tejido de red para contenedores, diseñado para Kubernetes.
- [Fleet device management](https://github.com/fleetdm/fleet) - Telemetría ligera y programable para servidores y estaciones de trabajo.
- [gaia](https://github.com/gaia-pipeline/gaia) - Crea potentes canalizaciones en cualquier lenguaje de programación.
- [ghorg](https://github.com/gabrie30/ghorg) - Clona rápidamente todos los repositorios de una organización o usuario en un único directorio. Compatible con GitHub, GitLab, Gitea y Bitbucket.
- [Gitea](https://github.com/go-gitea/gitea) - Fork de Gogs, totalmente impulsado por la comunidad.
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - Migra todos tus repositorios, issues, hitos y etiquetas de GitHub a tu instancia de Gitea.
- [gitl](https://github.com/akomyagin/gitl) - Revisión con IA de rangos de commits de git con puntuación de riesgo (bajo/medio/alto), generación de changelogs y resumen de actividad de múltiples repositorios. Incluye una GitHub Action.
- [go-furnace](https://github.com/go-furnace/go-furnace) - Solución de alojamiento escrita en Go. Despliega tu aplicación con facilidad en AWS, GCP o DigitalOcean.
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - Forma sencilla de crear aplicaciones Go con actualización automática. Compatible con Github y Gitlab.
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Permite que tus aplicaciones Go se actualicen solas.
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew te permite cambiar fácilmente entre varias versiones de go.
- [gobrew](https://github.com/kevincobain2000/gobrew) - Gestor de versiones de Go. Herramienta súper sencilla para instalar y gestionar versiones de Go. Instala go sin root. Gobrew no requiere rehash del shell.
- [godbg](https://github.com/sirnewton01/godbg) - Aplicación web de front-end para gdb.
- [Gogs](https://gogs.io/) - Servicio Git autoalojado escrito en el lenguaje de programación Go.
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - Pasarela de API y proxy inverso ligeros con configuración declarativa, middleware robusto y soporte para REST, GraphQL, TCP, UDP y gRPC.
- [gonative](https://github.com/inconshreveable/gonative) - Herramienta que crea una compilación de Go capaz de realizar compilación cruzada para todas las plataformas sin dejar de usar las versiones con Cgo habilitado de los paquetes de la biblioteca estándar.
- [govvv](https://github.com/ahmetalpbalkan/govvv) - Envoltorio de “go build” para añadir fácilmente información de versión a los binarios de Go.
- [grapes](https://github.com/yaronsumel/grapes) - Herramienta ligera diseñada para distribuir comandos por ssh con facilidad.
- [GVM](https://github.com/moovweb/gvm) - GVM proporciona una interfaz para gestionar versiones de Go.
- [Hey](https://github.com/rakyll/hey) - Hey es un pequeño programa que envía algo de carga a una aplicación web.
- [httpref](https://github.com/dnnrly/httpref) - httpref es una práctica referencia de CLI para métodos HTTP, códigos de estado, cabeceras y puertos TCP y UDP.
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI te permite gestionar tu Jenkins de forma sencilla.
- [k0s](https://github.com/k0sproject/k0s) - Distribución de Kubernetes sin fricciones.
- [k3d](https://github.com/k3d-io/k3d) - Pequeño asistente para ejecutar k3s de la CNCF en Docker.
- [k3s](https://github.com/k3s-io/k3s) - Kubernetes ligero.
- [k6](https://github.com/grafana/k6) - Herramienta moderna de pruebas de carga que usa Go y JavaScript.
- [k9s](https://github.com/derailed/k9s) - CLI de Kubernetes para gestionar tus clústeres con estilo.
- [kala](https://github.com/ajvb/kala) - Planificador de trabajos simplista, moderno y eficiente.
- [kcli](https://github.com/cswank/kcli) - Herramienta de línea de comandos para inspeccionar topics/particiones/mensajes de kafka.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker: clústeres locales para probar Kubernetes.
- [ko](https://github.com/google/ko) - Herramienta de línea de comandos para compilar y desplegar aplicaciones Go en Kubernetes
- [kool](https://github.com/kool-dev/kool) - Herramienta de línea de comandos para gestionar entornos Docker de forma sencilla.
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks es un plano de control de código abierto que ejecuta y gestiona bases de datos, colas de mensajes y otras infraestructuras de datos en K8s.
- [kubefwd](https://github.com/txn2/kubefwd) - Redirección masiva de puertos de Kubernetes con IP únicas por servicio para el desarrollo local.
- [kubernetes](https://github.com/kubernetes/kubernetes) - Gestor de clústeres de contenedores de Google.
- [kubeshark](https://github.com/kubeshark/kubeshark) - Analizador de tráfico de API para Kubernetes, inspirado en Wireshark y creado específicamente para Kubernetes.
- [KubeVela](https://github.com/kubevela/kubevela) - Entrega de aplicaciones nativas de la nube.
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN ofrece un entorno de desarrollo nativo de la nube que se conecta sin fisuras a la red de tu clúster de Kubernetes.
- [KusionStack](https://github.com/KusionStack/kusion) - Pila tecnológica de configuración programable unificada para entregar aplicaciones modernas con un enfoque de 'plataforma como código' e 'infraestructura como código'.
- [kwatch](https://github.com/abahmed/kwatch) - Monitoriza y detecta al instante los fallos en tu clúster de Kubernetes (K8s).
- [lstags](https://github.com/ivanilves/lstags) - Herramienta y API para sincronizar imágenes de Docker entre distintos registros.
- [lwc](https://github.com/timdp/lwc) - Versión con actualización en vivo del comando wc de UNIX.
- [manssh](https://github.com/xwjdsh/manssh) - manssh es una herramienta de línea de comandos para gestionar fácilmente la configuración de tus alias de ssh.
- [Mantil](https://github.com/mantil-io/mantil) - Framework específico de Go para crear aplicaciones serverless en AWS que te permite centrarte en código Go puro mientras Mantil se encarga de la infraestructura.
- [minikube](https://github.com/kubernetes/minikube) - Ejecuta Kubernetes en local.
- [Moby](https://github.com/moby/moby) - Proyecto colaborativo del ecosistema de contenedores para ensamblar sistemas basados en contenedores.
- [Mora](https://github.com/emicklei/mora) - Servidor REST para acceder a documentos y metadatos de MongoDB.
- [mq-studio](https://github.com/amigoer/mq-studio) - Cliente de escritorio multiplataforma para gestionar y monitorizar clústeres de RocketMQ, RabbitMQ, Kafka, Pulsar, Redis Stream, MQTT, NATS y ActiveMQ.
- [ostent](https://github.com/ostrost/ostent) - Recopila y muestra métricas del sistema y, opcionalmente, las retransmite a Graphite y/o InfluxDB.
- [Packer](https://github.com/mitchellh/packer) - Packer es una herramienta para crear imágenes de máquina idénticas para múltiples plataformas a partir de una única configuración de origen.
- [Pewpew](https://github.com/bengadbois/pewpew) - Herramienta flexible de pruebas de estrés HTTP para la línea de comandos.
- [pingtower](https://github.com/crleonard/pingtower) - Monitor de disponibilidad ligero y autoalojado para sitios web y API.
- [PipeCD](https://github.com/pipe-cd/pipecd) - Plataforma de entrega continua al estilo GitOps que ofrece una experiencia de despliegue y operaciones coherente para cualquier aplicación.
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo es una pequeña aplicación web hecha con Go que muestra las mejores prácticas para ejecutar microservicios en Kubernetes. Podinfo lo usan proyectos de la CNCF como Flux y Flagger para pruebas end-to-end y talleres.
- [podman-tui](https://github.com/containers/podman-tui) - Interfaz de terminal para la gestión de Podman.
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium es un proxy de acceso consciente de la identidad.
- [Rodent](https://github.com/alouche/rodent) - Rodent te ayuda a gestionar versiones de Go y proyectos y a hacer seguimiento de las dependencias.
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - Proxy de S3 con los métodos GET, PUT y DELETE y autenticación (OpenID Connect y Basic Auth).
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Pequeña utilidad/biblioteca optimizada para la transferencia a alta velocidad de objetos grandes hacia y desde Amazon S3.
- [s5cmd](https://github.com/peak/s5cmd) - Herramienta de ejecución ultrarrápida para S3 y el sistema de archivos local.
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - Gestiona servidores BareMetal desde la línea de comandos (tan fácilmente como con Docker).
- [script](https://github.com/bitfield/script) - Facilita escribir scripts al estilo de shell en Go para tareas de DevOps y administración de sistemas.
- [sg](https://github.com/ChristopherRabotin/sg) - Realiza benchmarks de un conjunto de endpoints HTTP (como ab), con la posibilidad de usar el código de respuesta y los datos entre cada llamada para someter al servidor a un estrés específico basado en su respuesta anterior.
- [sigma](https://github.com/go-sigma/sigma) - Registro de imágenes de contenedores nativo de OCI, compatible con artefactos nativos de OCI, escaneo de artefactos, construcción de imágenes, etc.
- [skm](https://github.com/TimothyYe/skm) - SKM es un gestor de claves SSH sencillo y potente, ¡que te ayuda a gestionar fácilmente tus múltiples claves SSH!
- [sortie](https://github.com/sortie-ai/sortie) - Convierte los tickets del gestor de incidencias en sesiones de agentes de programación autónomos.
- [StatusOK](https://github.com/sanathp/statusok) - Monitoriza tu sitio web y tus API REST. Recibe notificaciones por Slack o correo electrónico cuando tu servidor está caído o el tiempo de respuesta es mayor de lo esperado.
- [tau](https://github.com/taubyte/tau) - Crea fácilmente plataformas de computación en la nube con funciones como funciones serverless en WebAssembly, alojamiento de frontends, CI/CD, almacenamiento de objetos, base de datos K/V y mensajería pub/sub.
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Plugin proveedor de Terraform que se configura dinámicamente en tiempo de ejecución a partir de un documento OpenAPI (antes conocido como archivo swagger) que contiene las definiciones de las API expuestas.
- [tf-profile](https://github.com/datarootsio/tf-profile) - Perfilador de ejecuciones de Terraform. Genera estadísticas globales, estadísticas por recurso o visualizaciones.
- [tickstem/uptime](https://github.com/tickstem/uptime) - Cliente de Go para la monitorización de la disponibilidad HTTP con alertas de caducidad de SSL y aserciones de respuesta configurables.
- [tlm](https://github.com/yusufcanb/tlm) - Copiloto local para la cli, impulsado por CodeLLaMa
- [traefik](https://github.com/containous/traefik) - Proxy inverso y balanceador de carga compatible con múltiples backends.
- [trubka](https://github.com/xitonix/trubka) - Herramienta de CLI para gestionar y diagnosticar clústeres de Apache Kafka, con la capacidad de publicar/consumir de forma genérica eventos de protocol buffer y de texto sin formato en/desde Kafka.
- [Updatecli](https://github.com/updatecli/updatecli) - Motor universal y declarativo de políticas de actualización.
- [uTask](https://github.com/ovh/utask) - Motor de automatización que modela y ejecuta procesos de negocio declarados en yaml.
- [Vegeta](https://github.com/tsenart/vegeta) - Herramienta y biblioteca de pruebas de carga HTTP. ¡Su nivel es de más de 9000!
- [wait-for](https://github.com/dnnrly/wait-for) - Espera a que ocurra algo (desde la línea de comandos) antes de continuar. Orquestación sencilla de servicios Docker y otras cosas.
- [Wide](https://wide.b3log.org/login) - IDE web para equipos que usan Golang.
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Herramienta de cli para ejecutar comandos de forma remota en máquinas Windows.
- [zerohand](https://github.com/nilpoona/zerohand) - Herramienta de pruebas de carga sencilla y eficiente para API web.

**[⬆ volver arriba](#contents)**

### Otro software

- [Backrest](https://github.com/garethgeorge/backrest) - Interfaz web y orquestador para copias de seguridad con restic.
- [Better Go Playground](https://goplay.tools) - Playground de Go con resaltado de sintaxis, autocompletado de código y otras funciones.
- [blocky](https://github.com/0xERR0R/blocky) - Proxy DNS rápido y ligero que actúa como bloqueador de anuncios para la red local, con muchas funciones.
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - Gestor de Bluetooth con TUI para Linux.
- [borg](https://github.com/crufter/borg) - Motor de búsqueda de fragmentos de bash para la terminal.
- [boxed](https://github.com/tejo/boxed) - Motor de blogs basado en Dropbox.
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar es una alternativa multiplataforma a Postman creada con go, que pretende ayudar a los desarrolladores a probar los endpoints de sus API. Es compatible con los protocolos http y grpc.
- [Cherry](https://github.com/rafael-santiago/cherry) - Pequeño servidor de chat web en Go.
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - Mapa público de radiación autoalojado para importar, analizar y visualizar recorridos de mediciones.
- [Circuit](https://github.com/gocircuit/circuit) - Circuit es una plataforma como servicio (PaaS) y/o infraestructura como servicio (IaaS) programable, para la gestión, el descubrimiento, la sincronización y la orquestación de los servicios y hosts que componen las aplicaciones en la nube.
- [claude-grep](https://github.com/evoleinik/claude-grep) - Busca en el historial de sesiones de Claude Code con expresiones regulares y búsqueda semántica (vectorial).
- [Comcast](https://github.com/tylertreat/Comcast) - Simula malas conexiones de red.
- [confd](https://github.com/kelseyhightower/confd) - Gestiona los archivos de configuración de aplicaciones locales usando plantillas y datos de etcd o consul.
- [crawley](https://github.com/s0rg/crawley) - Scraper/rastreador web para la cli.
- [croc](https://github.com/schollz/croc) - Envía archivos o carpetas de un ordenador a otro de forma fácil y segura.
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Herramienta ligera de limpieza de la caché de software para Windows y Linux.
- [dispositio](https://github.com/tsraveling/dispositio) - Herramienta de terminal para planificar proyectos grandes en markdown sencillo.
- [Documize](https://github.com/documize/community) - Software de wiki moderno que integra datos de herramientas SaaS.
- [dp](https://github.com/scryinfo/dp) - Mediante un SDK para el intercambio de datos con blockchain, los desarrolladores pueden acceder fácilmente al desarrollo de DAPP.
- [drive](https://github.com/odeke-em/drive) - Cliente de Google Drive para la línea de comandos.
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - Herramienta multiplataforma de copias de seguridad en red y en la nube basada en la idea de la deduplicación sin bloqueos.
- [fjira](https://github.com/mk-5/fjira) - Aplicación de terminal basada en búsqueda difusa para Atlassian Jira
- [Gebug](https://github.com/moshebe/gebug) - Herramienta que hace que depurar aplicaciones Go dockerizadas sea súper fácil, habilitando las funciones de depurador y recarga en caliente sin fisuras.
- [gfile](https://github.com/Antonito/gfile) - Transfiere archivos de forma segura entre dos ordenadores, sin terceros, mediante WebRTC.
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - Aplicación que muestra las actualizaciones de los paquetes de Go de tu GOPATH.
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - Cliente de torrent para streaming de vídeo.
- [goblin](https://goblin.run) - Compilador en la nube para CLI escritas en lenguaje go
- [GoBoy](https://github.com/Humpheh/goboy) - Emulador de Nintendo Game Boy Color escrito en Go.
- [gocc](https://github.com/goccmack/gocc) - Gocc es un kit de compiladores para Go escrito en Go.
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Extensión de Chrome para sitios de Go Doc que muestra la descripción de las funciones como tooltip en la lista de funciones.
- [Gokapi](https://github.com/Forceu/gokapi) - Servidor ligero para compartir archivos que caducan tras un número determinado de descargas o de días. Similar a Firefox Send, pero sin subida pública.
- [GoLand](https://jetbrains.com/go) - IDE de Go multiplataforma y completo.
- [GoNB](https://github.com/janpfeifer/gonb) - Programación interactiva en Go con Jupyter Notebooks (también funciona en VSCode, Binder y Colab de Google).
- [GooseForum](https://github.com/leancodebox/GooseForum) - Plataforma de foros autoalojada creada con Go, Vue y Tailwind CSS.
- [Gor](https://github.com/buger/gor) - Herramienta de replicación de tráfico Http para reproducir en tiempo real el tráfico de producción en entornos de staging/desarrollo.
- [Guora](https://github.com/meloalright/guora) - Aplicación web autoalojada similar a Quora escrita en Go.
- [GURL](https://github.com/matveynator/gurl) - Cuando CURL dice que tu biblioteca SSL es demasiado antigua — usa GURL. Un solo archivo. Cero dependencias de SSL.
- [hoofli](https://github.com/dnnrly/hoofli) - Genera diagramas de PlantUML a partir de las inspecciones de red de Chrome o Firefox.
- [hotswap](https://github.com/edwingeng/hotswap) - Solución completa para recargar tu código go sin reiniciar el servidor ni interrumpir o bloquear ningún procedimiento en curso.
- [hugo](https://gohugo.io/) - Motor de sitios web estáticos rápido y moderno.
- [ide](https://github.com/thestrukture/ide) - IDE accesible desde el navegador. Diseñado para Go con Go.
- [joincap](https://github.com/assafmo/joincap) - Utilidad de línea de comandos para fusionar varios archivos pcap.
- [JuiceFS](https://github.com/juicedata/juicefs) - Sistema de archivos POSIX distribuido construido sobre Redis y AWS S3.
- [Juju](https://jujucharms.com/) - Despliegue y orquestación de servicios independientes de la nube: compatible con EC2, Azure, Openstack, MAAS y más.
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - Sistema de archivos peer-to-peer bajo demanda que monta una carpeta remota y oculta la latencia del enlace mediante lectura anticipada, con cifrado de extremo a extremo híbrido X25519 y ML-KEM-1024.
- [Layli](https://layli.app) - Dibuja bonitos diagramas de disposición como código.
- [Leaps](https://github.com/jeffail/leaps) - Servicio de programación en pareja que usa transformaciones operacionales.
- [lgo](https://github.com/yunabe/lgo) - Programación interactiva en Go con Jupyter. Admite autocompletado e inspección de código y es 100 % compatible con Go.
- [LightCMS](https://github.com/jonradoff/lightcms) - Sistema de gestión de contenidos autoalojado con generación de páginas estáticas, control de acceso basado en roles y un servidor MCP para operaciones de contenido dirigidas por agentes.
- [limetext](https://limetext.github.io) - Lime Text es un editor de texto potente y elegante desarrollado principalmente en Go que pretende ser un sucesor de Sublime Text como software libre y de código abierto.
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE es un IDE de Go sencillo, de código abierto y multiplataforma.
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - TUI que muestra primero una vista previa para limpiar cachés, logs y archivos temporales de macOS.
- [mdv](https://github.com/Allra-Fintech/mdv) - Herramienta de CLI que renderiza archivos Markdown en el navegador con recarga en vivo, GFM, resaltado de sintaxis, diagramas Mermaid y exportación a PDF.
- [mockingjay](https://github.com/quii/mockingjay-server) - Servidores HTTP falsos y contratos dirigidos por el consumidor a partir de un único archivo de configuración. También puedes hacer que el servidor se comporte mal de forma aleatoria para realizar pruebas de rendimiento más realistas.
- [myLG](https://github.com/mehrdadrad/mylg) - Herramienta de diagnóstico de red para la línea de comandos escrita en Go.
- [naclpipe](https://github.com/unix4fun/naclpipe) - Herramienta sencilla de tubería criptográfica basada en NaCL EC25519 escrita en Go.
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay renace. Para una nueva era.
- [nes](https://github.com/fogleman/nes) - Emulador de Nintendo Entertainment System (NES) escrito en Go.
- [onWatch](https://github.com/onllm-dev/onWatch) - Monitoriza en local las cuotas de API de IA de distintos proveedores, con seguimiento histórico, alertas y un panel web para evitar limitaciones inesperadas y excesos de presupuesto.
- [Orbit](https://github.com/gulien/orbit) - Herramienta sencilla para ejecutar comandos y generar archivos a partir de plantillas.
- [peg](https://github.com/pointlander/peg) - Peg, Parsing Expression Grammar, es una implementación de un generador de analizadores Packrat.
- [Plakar](https://github.com/PlakarKorp/plakar) - Motor de copias de seguridad cifrado, deduplicado, verificable y escalable, sin dependencia de proveedores.
- [Plik](https://github.com/root-gg/plik) - Plik es un sistema de subida temporal de archivos (al estilo de Wetransfer) en Go.
- [portal](https://github.com/SpatiumPortae/portal) - Portal es una utilidad de transferencia de archivos por línea de comandos, rápida y sencilla, de cualquier ordenador a otro.
- [restic](https://github.com/restic/restic) - Programa de copias de seguridad con deduplicación.
- [sake](https://github.com/alajmo/sake) - sake es un ejecutor de comandos para hosts locales y remotos.
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code, un contador de código muy rápido y preciso con cálculos de complejidad y estimaciones COCOMO.
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - CLI de evaluación de cronogramas según los 14 puntos de la DCMA para exportaciones de MS Project a Excel/CSV.
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - Sistema de archivos distribuido rápido, sencillo y escalable con búsqueda en disco O(1).
- [shell2http](https://github.com/msoap/shell2http) - Ejecución de comandos de shell mediante un servidor http (para prototipos o control remoto).
- [Snitch](https://github.com/lucasgomide/snitch) - Forma sencilla de notificar a tu equipo y a muchas herramientas cuando alguien ha desplegado cualquier aplicación mediante Tsuru.
- [sonic](https://github.com/go-sonic/sonic) - Sonic es una plataforma de blogs en Go. Sencilla y potente.
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Salvapantallas de escritorio para Spotify con reloj OLED digital, visualizador de audio en canvas y controles MPRIS.
- [Stack Up](https://github.com/pressly/sup) - Stack Up, una herramienta de despliegue súper sencilla, solo Unix; piensa en ella como un 'make' para una red de servidores.
- [stew](https://github.com/marwanhawari/stew) - Gestor de paquetes independiente para binarios compilados.
- [syncthing](https://syncthing.net/) - Herramienta y protocolo de sincronización de archivos abiertos y descentralizados.
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - Observabilidad de TCP basada en eBPF.
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - Pequeña aplicación de terminal que muestra los commits de git de las últimas 24 horas y de la última semana, el tiempo actual, algunos consejos de autocuidado, un chiste y las tareas de tu lista de pendientes actual.
- [tldx](https://github.com/brandonyoungdev/tldx) - Comprobador masivo de disponibilidad de dominios que usa RDAP, DNS y WHOIS como alternativa, con generación de permutaciones de palabras clave.
- [toxiproxy](https://github.com/shopify/toxiproxy) - Proxy para simular condiciones de red y de sistema en pruebas automatizadas.
- [tsuru](https://tsuru.io/) - Software de plataforma como servicio ampliable y de código abierto.
- [untis-go](https://github.com/benzjeremy/untis-go) - Cliente de escritorio de WebUntis rápido y nativo para estudiantes y profesores. Navegación por barra lateral, horarios, deberes, ausencias y mensajes. Credenciales cifradas con AES-256-GCM, SQLite con prioridad a la caché y seguridad mediante puertos aleatorios.
- [vaku](https://github.com/lingrino/vaku) - CLI y API para funciones basadas en carpetas en Vault, como copiar, mover y buscar.
- [vFlow](https://github.com/VerizonDigital/vflow) - Recolector de IPFIX, sFlow y Netflow de alto rendimiento, escalable y fiable.
- [Wave Terminal](https://waveterm.dev) - Wave es una terminal de código abierto y nativa de IA creada para flujos de trabajo de desarrollo fluidos, con renderizado en línea, una interfaz moderna y sesiones persistentes.
- [wellington](https://github.com/wellington/wellington) - Herramienta de gestión de proyectos Sass que amplía el lenguaje con funciones de sprites (como Compass).
- [woke](https://github.com/get-woke/woke) - Detecta lenguaje no inclusivo en tu código fuente.
- [yai](https://github.com/ekkinox/yai) - Asistente de terminal impulsado por IA.
- [zs](https://git.mills.io/prologic/zs) - Generador de sitios estáticos extremadamente minimalista.

**[⬆ volver arriba](#contents)**

# Recursos

_Dónde descubrir nuevas bibliotecas de Go._

**[⬆ volver arriba](#contents)**

## Comparativas de rendimiento

- [autobench](https://github.com/davecheney/autobench) - Framework para comparar el rendimiento entre distintas versiones de Go.
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Potente herramienta de benchmarking HTTP que combina las herramientas Аb, Wrk y Siege. Recopila estadísticas y diversos parámetros para benchmarks y resultados de comparación.
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - Algunos microbenchmarks variados de Go. Compara algunas funciones del lenguaje con enfoques alternativos.
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Benchmark y comparación de enrutadores de solicitudes HTTP de Go.
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Benchmark de JSON en Go.
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Benchmarks de inferencia de aprendizaje automático en Go.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Benchmark de frameworks web de Go.
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Benchmarks de los métodos de serialización de Go.
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Benchmarks de operaciones básicas habituales del lenguaje Go.
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Colección de benchmarks de golang.
- [gospeed](https://github.com/feyeleanor/GoSpeed) - Microbenchmarks de Go para calcular la velocidad de las construcciones del lenguaje.
- [kvbench](https://github.com/jimrobinson/kvbench) - Benchmark de bases de datos clave/valor.
- [skynet](https://github.com/atemerev/skynet) - Microbenchmark Skynet de 1 millón de hilos.
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Compara diversos algoritmos de redimensionado de imágenes para el lenguaje Go.
- [vizb](https://github.com/goptics/vizb) - Herramienta de CLI para visualizar datos de benchmarks de Go en 4D.

**[⬆ volver arriba](#contents)**

## Conferencias

- [GoCon](https://gocon.connpass.com/) - Tokio, Japón.
- [GoDays](https://www.godays.io/) - Berlín, Alemania.
- [GoLab](https://golab.io/) - Florencia, Italia.
- [GopherCon](https://www.gophercon.com/) - Distintas ubicaciones cada año, EE. UU.
- [GopherCon Africa](https://gophercon.africa/) - Nairobi, Kenia.
- [GopherCon Australia](https://gophercon.com.au/) - Sídney, Australia.
- [GopherCon Brazil](https://gopherconbr.org) - Florianópolis, Brasil.
- [GopherCon China](https://gophercon.com.cn) - Shanghái, China.
- [GopherCon Europe](https://gophercon.eu/) - Berlín, Alemania.
- [GopherCon India](https://gopherconindia.org/) - Pune, India.
- [GopherCon Israel](https://www.gophercon.org.il/) - Tel Aviv, Israel.
- [GopherCon Russia](https://www.gophercon-russia.ru) - Moscú, Rusia.
- [GopherCon Singapore](https://gophercon.sg) - Mapletree Business City, Singapur.
- [GopherCon UK](https://www.gophercon.co.uk/) - Londres, Reino Unido.
- [GopherCon Vietnam](https://gophercon.vn/) - Ciudad Ho Chi Minh, Vietnam.
- [GoWest Conference](https://www.gowestconf.com/) - Lehi, EE. UU.

**[⬆ volver arriba](#contents)**

## Libros electrónicos

### Libros electrónicos de pago

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - Programación en Go para hackers y pentesters.
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - Esta guía práctica de entrega continua te muestra cómo establecer rápidamente una canalización automatizada que mejorará tus pruebas, la calidad de tu código y el producto final.
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - Introducción al compilador TinyGo con proyectos que involucran Arduino y WebAssembly.
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Descubre la perspectiva única de Go sobre el diseño de programas y empieza a escribir código Go sencillo, mantenible y testeable.
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Libro introductorio para principiantes en Go.
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Tu guía práctica sobre los entresijos del desarrollo en Go, que cubre la biblioteca estándar y las herramientas más importantes del potente ecosistema de Go.
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Guía para comprender y usar los genéricos en Go.
- [Lets-Go](https://lets-go.alexedwards.net) - Guía paso a paso para crear aplicaciones web rápidas, seguras y mantenibles con Go.
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Patrones avanzados para crear API y aplicaciones web en Go.
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Guía de pruebas en Go.
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Guía para escribir herramientas de línea de comandos en Go.
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - Libro que presenta decenas de técnicas para escribir código Go idiomático, expresivo y eficiente que evita los errores habituales.

### Libros electrónicos gratuitos

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Guía fundamental y práctica para aprender de forma eficaz y construir progresivamente una blockchain desde cero en Go con gRPC.
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Libro centrado en la sintaxis y la semántica de Go y en todo tipo de detalles.
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Libro centrado en los paquetes `go/*` de Go.
- [Go Faster](https://leanpub.com/gofaster) - Este libro pretende acortar tu curva de aprendizaje y ayudarte a convertirte en un programador de Go competente más rápidamente.
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - En persa.
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - Libro que muestra cómo aplicar DDD, arquitectura limpia y CQRS mediante refactorización práctica.
- [GoBooks](https://github.com/dariubs/GoBooks) - Lista seleccionada de libros de Go.
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - Introducción a Go de 600 páginas dirigida a quienes programan por primera vez.
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ volver arriba](#contents)**

## Gophers

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Paquete de gráficos de gophers de Maria Letta con ilustraciones y personajes emotivos en formato vectorial y rasterizado.
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Datos vectoriales del gopher de Go [.ai, .svg].
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - Adorables logotipos de gophers.
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - Conviértete en gopher.
- [gophers](https://github.com/ashleymcnamara/gophers) - Ilustraciones de gophers de Ashley McNamara.
- [gophers](https://github.com/egonelbre/gophers) - Gophers gratuitos.
- [gophers](https://github.com/rogeralsing/gophers) - Gráficos aleatorios de gophers.
- [gophers](https://github.com/sillecelik/go-gopher) - Patrón de amigurumi de un muñeco gopher.
- [gophers](https://github.com/scraly/gophers) - Gophers de Aurélie Vache.

**[⬆ volver arriba](#contents)**

## Encuentros (meetups)

- [Basel Go Meetup](https://www.meetup.com/Basel-Go-Meetup/)
- [Belfast Gophers](https://www.meetup.com/Belfast-Gophers/)
- [Belgrade Golang Meetup](https://www.meetup.com/golang-serbia/)
- [Berlin Golang](https://www.meetup.com/golang-users-berlin/)
- [Brisbane Gophers](https://www.meetup.com/Brisbane-Golang-Meetup/)
- [Bärner Go Meetup - Berne, Switzerland](https://www.meetup.com/berner-go-meetup/)
- [Go Ireland - Dublin](https://www.meetup.com/goireland/)
- [Go Language NYC](https://www.meetup.com/golanguagenewyork/)
- [Go London User Group](https://www.meetup.com/Go-London-User-Group/)
- [Go Remote Meetup](https://www.meetup.com/Go-Remote-Meetup/)
- [Go Toronto](https://www.meetup.com/go-toronto/)
- [Go User Group Atlanta](https://www.meetup.com/Go-Users-Group-Atlanta/)
- [GoBandung](https://www.meetup.com/GoBandung/)
- [GoBridge, San Francisco, CA](https://www.meetup.com/gobridge/)
- [GoCracow - Krakow, Poland](https://www.meetup.com/GoCracow/)
- [GoJakarta](https://www.meetup.com/GoJakarta/)
- [Golang Amsterdam](https://www.meetup.com/golang-amsterdam/)
- [Golang Argentina](https://www.meetup.com/Golang-Argentina/)
- [Golang Athens](https://www.meetup.com/Athens-Gophers/)
- [Golang Baltimore, MD](https://www.meetup.com/BaltimoreGolang/)
- [Golang Bangalore](https://www.meetup.com/Golang-Bangalore/)
- [Golang Belo Horizonte - Brazil](https://www.meetup.com/go-belo-horizonte/)
- [Golang Boston](https://www.meetup.com/bostongo/)
- [Golang Bulgaria](https://www.meetup.com/Golang-Bulgaria/)
- [Golang Cardiff, UK](https://www.meetup.com/Cardiff-Go-Meetup/)
- [Golang Copenhagen](https://www.meetup.com/Go-Cph/)
- [Golang Curitiba - Brazil](https://www.meetup.com/GolangCWB/)
- [Golang DC, Arlington, VA](https://www.meetup.com/Golang-DC/)
- [Golang Dorset, UK](https://www.meetup.com/golang-dorset/)
- [Golang Estonia](https://www.meetup.com/Golang-Estonia/)
- [Golang Gurgaon, India](https://www.meetup.com/Gurgaon-Go-Meetup/)
- [Golang Hamburg - Germany](https://www.meetup.com/Go-User-Group-Hamburg/)
- [Golang Israel](https://www.meetup.com/Go-Israel/)
- [Golang Kathmandu](https://www.meetup.com/Golang-Kathmandu/)
- [Golang Lima - Peru](https://www.meetup.com/Golang-Peru/)
- [Golang Lyon](https://www.meetup.com/Golang-Lyon/)
- [Golang Marseille](https://www.meetup.com/fr-FR/Golang-Marseille/)
- [Golang Melbourne](https://www.meetup.com/golang-mel/)
- [Golang Milano](https://www.meetup.com/golang-milano/)
- [Golang North East](https://www.meetup.com/en-AU/Golang-North-East/)
- [Golang Paris](https://www.meetup.com/Golang-Paris/)
- [Golang Poland](https://www.meetup.com/Golang-Poland/)
- [Golang Pune](https://www.meetup.com/Golang-Pune/)
- [Golang Roma](https://www.meetup.com/golangroma/)
- [Golang Rotterdam](https://www.meetup.com/golang-rotterdam/)
- [Golang Singapore](https://www.meetup.com/golangsg/)
- [Golang Stockholm](https://www.meetup.com/Go-Stockholm/)
- [Golang Sydney, AU](https://www.meetup.com/golang-syd/)
- [Golang São Paulo - Brazil](https://www.meetup.com/golangbr/)
- [Golang Taipei](https://www.meetup.com/golang-taipei-meetup/)
- [Golang Thessaloniki](https://www.meetup.com/thessaloniki-golang-meetup/)
- [Golang Torino](https://www.meetup.com/golang-torino/)
- [Golang Turkey](https://kommunity.com/goturkiye)
- [Golang Vancouver, BC](https://www.meetup.com/golangvan/)
- [Golang Vienna, Austria](https://www.meetup.com/viennago/)
- [Golang Москва](https://www.meetup.com/Golang-Moscow/)
- [GoSF - San Francisco, CA](https://www.meetup.com/golangsf)
- [Istanbul Golang](https://www.meetup.com/Istanbul-Golang/)
- [Lagos Gophers](https://www.meetup.com/GolangNigeria/)
- [Nairobi Gophers](https://www.meetup.com/nairobi-gophers/)
- [Seattle Go Programmers](https://www.meetup.com/golang/)
- [Ukrainian Golang User Groups](https://www.meetup.com/uagolang/)
- [Utah Go User Group](https://www.meetup.com/utahgophers/)
- [Women Who Go - San Francisco, CA](https://www.meetup.com/Women-Who-Go/)
- [Zürich Gophers - Zurich, Switzerland](https://www.meetup.com/zurich-gophers/)

_Añade aquí el grupo de tu ciudad/país (envía una **PR**)_

**[⬆ volver arriba](#contents)**

## Guías de estilo

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ volver arriba](#contents)**

## Redes sociales

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ volver arriba](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ volver arriba](#contents)**

## Sitios web

- [Awesome Go @LibHunt](https://go.libhunt.com) - Tu caja de herramientas de Go de referencia.
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - Lista seleccionada de talleres de golang increíbles.
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - Lista seleccionada de empleos remotos increíbles. Muchos de ellos buscan hackers de Go.
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Lista de otras listas asombrosamente increíbles.
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - Analiza el archivo README de awesome-go y genera un nuevo archivo README con información de los repositorios.
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - Ingeniero de software y blogs @ codewithmukesh.com.
- [Coding Mystery](https://codingmystery.com) - Resuelve emocionantes retos de programación inspirados en las salas de escape usando Go.
- [CodinGame](https://www.codingame.com/) - Aprende Go resolviendo tareas interactivas con pequeños juegos como ejemplos prácticos.
- [Go Blog](https://blog.golang.org) - El blog oficial de Go.
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - Un grupo de Gophers lee y comenta un proyecto de Go distinto cada semana.
- [Go Community on Hashnode](https://hashnode.com/n/go) - Comunidad de Gophers en Hashnode.
- [Go Forum](https://forum.golangbridge.org) - Foro para hablar de Go.
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Lista de proyectos en la wiki de la comunidad de Go.
- [Go Proverbs](https://go-proverbs.github.io/) - Proverbios de Go de Rob Pike.
- [Go Report Card](https://goreportcard.com) - Un boletín de notas para tu paquete de Go.
- [go.dev](https://go.dev/) - Un punto de encuentro para desarrolladores de Go.
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - Colección de proyectos de Go que necesitan ayuda. Un buen lugar para empezar tu camino en el código abierto con Go.
- [Golang Developer Jobs](https://golangjob.xyz) - Empleos para desarrolladores exclusivamente para puestos relacionados con Golang.
- [Golang News](https://golangnews.com) - Enlaces y noticias sobre la programación en Go.
- [Golang Nugget](https://golangnugget.com) - Un resumen semanal del mejor contenido sobre Go, entregado en tu bandeja de entrada cada lunes.
- [Golang Weekly](https://discu.eu/weekly/golang/) - Cada lunes, proyectos, tutoriales y artículos sobre Go.
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Lista de correo de Go.
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - Únete a nuestra nueva comunidad de Slack para Gophers ([descubre cómo surgió](https://blog.gopheracademy.com/gophers-slack-community/)).
- [Gophercises](https://gophercises.com/) - Ejercicios de programación gratuitos para gophers en ciernes.
- [json2go](https://m-zajac.github.io/json2go) - Conversión avanzada de JSON a structs de Go: herramienta en línea.
- [justforfunc](https://www.youtube.com/c/justforfunc) - Canal de Youtube dedicado a trucos y consejos sobre el lenguaje de programación Go, presentado por Francesc Campoy [@francesc](https://twitter.com/francesc).
- [Learn Go Programming](https://blog.learngoprogramming.com) - Aprende conceptos de Go con ilustraciones.
- [Libs.tech](https://libs.tech/go) – Bibliotecas de Go increíbles y joyas ocultas
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - Documentación de los paquetes de Go de código abierto.
- [studygolang](https://studygolang.com) - La comunidad de studygolang en China.
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - Un buen lugar para encontrar nuevas bibliotecas de Go.
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ volver arriba](#contents)**

### Tutoriales

- [50 Shades of Go](https://golang50shades.github.io/) - Trampas, peculiaridades y errores comunes para los nuevos desarrolladores de Golang.
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Profundiza en el mundo del registro estructurado en Go, con especial atención a la propuesta de slog aceptada recientemente, que pretende llevar a la biblioteca estándar un registro estructurado de alto rendimiento con niveles.
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Creación de un sitio de comercio electrónico con Golang (demo incluida).
- [A Tour of Go](https://tour.golang.org/) - Recorrido interactivo por Go.
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - Crea una base de datos NoSQL desde cero en 1000 líneas de código.
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Libro electrónico de introducción a Golang sobre cómo crear una aplicación web con golang.
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - Escribiremos una API con la ayuda del potente Gorilla Mux.
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Familiarízate con Gin y descubre cómo puede ayudarte a reducir el código repetitivo y a crear una canalización de manejo de solicitudes.
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - Cómo almacenar en caché las consultas lentas a bases de datos.
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - Cómo cancelar consultas de MySQL.
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - Alcanza la maestría en Go avanzado construyendo tu propio Redis, Docker, Git y SQLite. Incluye goroutines, programación de sistemas, E/S de archivos y más.
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Colección de patrones de diseño de programación implementados en Go.
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - Serie de vídeos que enseña programación y desarrollo de videojuegos.
- [Go By Example](https://gobyexample.com/) - Introducción práctica a Go mediante programas de ejemplo comentados.
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Tarjeta de referencia de Go.
- [Go database/sql tutorial](http://go-database-sql.org/) - Introducción a database/sql.
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - Aprende todo sobre Go en 7 días (de la mano de un desarrollador de Nodejs).
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Tutorial para aprender el lenguaje Go.
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Aprende a programar en Go.
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Plantilla de arquitectura limpia para servicios de Golang.
- [go-patterns](https://github.com/tmrts/go-patterns) - Lista seleccionada de patrones de diseño, recetas y modismos de Go.
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Ejemplos de Golang comparado con Node.js para aprender.
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Lista de cursos gratuitos para aprender el lenguaje de programación Go.
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Muchos ejemplos para aprender Golang.
- [Golangbot](https://golangbot.com/learn-golang-series/) - Tutoriales para empezar a programar en Go.
- [GopherCoding](https://gophercoding.com/) - Colección de fragmentos de código y tutoriales para ayudarte a resolver los problemas del día a día.
- [GopherSnippets](https://gophersnippets.com/) - Fragmentos de código con pruebas y ejemplos testeables para el lenguaje de programación Go.
- [Gosamples](https://gosamples.dev/) - Colección de fragmentos de código que te permiten resolver problemas de código cotidianos.
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - Aprende a crear un servidor y un cliente GraphQL en Go con generación de código. También incluye la creación de endpoints REST.
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - Aprende Go con los mejores tutoriales de golang en línea, enviados y votados por la comunidad de programación de golang.
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - Guía de introducción para escribir código mantenible usando la arquitectura hexagonal.
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Aprende a hacer benchmarks en Go. Como caso práctico, haremos benchmarks de dbq, sqlx y GORM.
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Aprende a usar Docker para el desarrollo en Go y a crear imágenes de Docker para producción.
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Guía para implementar el control de acceso basado en roles (RBAC) en Golang, con ejemplos de código, que cubre varios métodos para proteger los endpoints de una aplicación con autorización basada en roles.
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Empieza a usar Godog, un framework de desarrollo guiado por comportamiento para crear y probar aplicaciones Go.
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - Aprende Go con miles de ejemplos, ejercicios y cuestionarios.
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - Aprende Go con desarrollo guiado por pruebas.
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - Serie de artículos para aprender el lenguaje Golang a través de aplicaciones concretas como ejemplo.
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - Profundiza en la creación de microservicios con Go, incluido gRPC.
- [package main](https://www.youtube.com/packagemain) - Canal de YouTube sobre programación en Go.
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Especialización de Coursera para aprender Go desde cero.
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - Todo sobre cómo crear, desplegar y escalar aplicaciones Go en producción.
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - Aprende Go de forma visual
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic ofrece un tutorial en profundidad y contenido bien organizado para aprender a programar en Golang.
- [Your basic Go](https://yourbasic.org/golang) - Enorme colección de tutoriales y guías prácticas.

**[⬆ volver arriba](#contents)**

### Aprendizaje guiado

- [The Go Developer Roadmap](https://roadmap.sh/golang) - Hoja de ruta visual que los nuevos desarrolladores de Go pueden seguir para aprender Go.
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Repositorio de GitHub que ofrece retos de programación para preparar entrevistas técnicas de Go.
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - Ruta de aprendizaje guiada que contiene una combinación de recursos gratuitos y de pago.
- [The Go Skill Tree](https://labex.io/skilltrees/go) - Ruta de aprendizaje estructurada que combina recursos gratuitos y de pago.

**[⬆ volver arriba](#contents)**

## Contribución

¡Las contribuciones son bienvenidas! Consulta nuestro [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md) para conocer las pautas.

## Licencia

Este proyecto está bajo la [licencia MIT](https://github.com/avelino/awesome-go/blob/main/LICENSE): consulta el archivo LICENSE para obtener más detalles.
