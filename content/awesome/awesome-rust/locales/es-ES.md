# Awesome Rust [![lint badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![build badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

Una lista seleccionada de código y recursos de Rust.

Si quieres contribuir, lee [estas instrucciones](CONTRIBUTING.md).

<!-- BEGIN mktoc {"min_depth": 2} -->

- [Aplicaciones](#applications)
  - [Audio y música](#audio-and-music)
  - [Cadena de bloques](#blockchain)
  - [Bases de datos](#database)
  - [Sistemas integrados](#embedded)
  - [Emuladores](#emulators)
  - [Administrador de archivos](#file-manager)
  - [Finanzas](#finance)
  - [Juegos](#games)
  - [Gráficos](#graphics)
  - [Procesamiento de imágenes](#image-processing)
  - [Automatización industrial](#industrial-automation)
  - [Colas de mensajes](#message-queue)
  - [MLOps](#mlops)
  - [Observabilidad](#observability)
  - [Sistemas operativos](#operating-systems)
  - [Gestores de paquetes](#package-managers)
  - [Pagos](#payments)
  - [Productividad](#productivity)
  - [Protocolos de enrutamiento](#routing-protocols)
  - [Herramientas de seguridad](#security-tools)
  - [Redes sociales](#social-networks)
  - [Herramientas del sistema](#system-tools)
  - [Planificación de tareas](#task-scheduling)
  - [Editores de texto](#text-editors)
  - [Procesamiento de texto](#text-processing)
  - [Utilidades](#utilities)
  - [Vídeo](#video)
  - [Virtualización](#virtualization)
  - [Web](#web)
  - [Servidores web](#web-servers)
  - [Automatización de flujos de trabajo](#workflow-automation)
- [Herramientas de desarrollo](#development-tools)
  - [Sistema de compilación](#build-system)
  - [Depuración](#debugging)
  - [Despliegue](#deployment)
  - [Sistemas integrados](#embedded-1)
  - [FFI](#ffi)
  - [Formateadores](#formatters)
  - [IDE](#ides)
  - [Perfilado](#profiling)
  - [Servicios](#services)
  - [Análisis estático](#static-analysis)
  - [Pruebas](#testing)
  - [Transpilación](#transpiling)
  - [Túneles](#tunnel)
- [Bibliotecas](#libraries)
  - [Inteligencia artificial](#artificial-intelligence)
    - [Algoritmos genéticos](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [Aprendizaje automático](#machine-learning)
    - [OpenAI](#openai)
    - [Herramientas](#tooling)
  - [Astronomía](#astronomy)
  - [Asincronía](#asynchronous)
  - [Audio y música](#audio-and-music-1)
  - [Autenticación](#authentication)
  - [Automoción](#automotive)
  - [Bioinformática](#bioinformatics)
  - [Almacenamiento en caché](#caching)
  - [Nube](#cloud)
  - [Línea de comandos](#command-line)
  - [Compresión](#compression)
  - [Cálculo](#computation)
  - [Concurrencia](#concurrency)
  - [Configuración](#configuration)
  - [Criptografía](#cryptography)
  - [Procesamiento de datos](#data-processing)
  - [Flujo de datos](#data-streaming)
  - [Estructuras de datos](#data-structures)
  - [Visualización de datos](#data-visualization)
  - [Bases de datos](#database-1)
  - [Fecha y hora](#date-and-time)
  - [Sistemas distribuidos](#distributed-systems)
  - [Diseño dirigido por el dominio](#domain-driven-design)
  - [eBPF](#ebpf)
  - [Correo electrónico](#email)
  - [Codificación](#encoding)
  - [Sistema de archivos](#filesystem)
  - [Finanzas](#finance-1)
  - [Programación funcional](#functional-programming)
  - [Desarrollo de juegos](#game-development)
  - [Geoespacial](#geospatial)
  - [Algoritmos de grafos](#graph-algorithms)
  - [Gráficos](#graphics-1)
  - [GUI](#gui)
  - [Procesamiento de imágenes](#image-processing-1)
  - [Especificación del lenguaje](#language-specification)
  - [Licencias](#licensing)
  - [Registro](#logging)
  - [Macros](#macro)
  - [Lenguaje de marcado](#markup-language)
  - [Móviles](#mobile)
  - [Programación de redes](#network-programming)
  - [Análisis sintáctico](#parsing)
  - [Periféricos](#peripherals)
  - [Específico de la plataforma](#platform-specific)
  - [Ingeniería inversa](#reverse-engineering)
  - [Scripting](#scripting)
  - [Simulación](#simulation)
  - [Redes sociales](#social-networks-1)
  - [Sistema](#system)
  - [Planificación de tareas](#task-scheduling-1)
  - [Motor de plantillas](#template-engine)
  - [Procesamiento de texto](#text-processing-1)
  - [Búsqueda de texto](#text-search)
  - [Código inseguro](#unsafe)
  - [Vídeo](#video-1)
  - [Virtualización](#virtualization-1)
  - [Programación web](#web-programming)
- [Registros](#registries)
- [Recursos](#resources)
- [Licencia](#license)
<!-- END mktoc -->

## Aplicaciones

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - Intérprete para el lenguaje Wolfram, impulsado por Rust.
* [alacritty](https://github.com/alacritty/alacritty) - Emulador de terminal multiplataforma con GPU mejorada.
* [Andromeda](https://github.com/tryandromeda/andromeda) - Entorno de ejecución de JavaScript y TypeScript creado desde cero en Rust 🦀 y basado en Nova Engine.
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - TUI para explorar modelos de IA, benchmarks y agentes de programación. [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Una implementación de Tor. (Por ahora, el cliente está lejos de estar completo. ¡Pero no le pierdas la pista!) [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - Una shell interactiva de ensamblador.
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - Una GUI moderna y multiplataforma de Clash basada en Tauri y Rust, compatible con Windows, macOS y Linux.
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - Una implementación de VPN WireGuard en espacio de usuario. [![build badge](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - Una herramienta ligera y de código abierto para administrar bases de datos, creada con Tauri y compatible con MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB y más. [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - SSO empresarial de código abierto y VPN WireGuard con 2FA/MFA real.
* [denoland/deno](https://github.com/denoland/deno) - Un entorno de ejecución seguro de JavaScript/TypeScript basado en V8 y Tokio. [![Build Status](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - Convierte tus imágenes y fondos de pantalla favoritos con tus paletas de colores y temas preferidos. [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - Una VPN de malla sencilla, completa y descentralizada compatible con WireGuard. [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - Un editor sencillo para necesidades sencillas. [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - Una aplicación de pruebas de carga HTTP inspirada en la sintaxis de Ansible.
* [fend](https://github.com/printfn/fend) - Calculadora de precisión arbitraria y con unidades. [![build](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - Microservicios sencillos.
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - Agente de IA de escritorio multiplataforma con un entorno de ejecución Rust que funciona en repositorios reales y puede controlar el navegador, la terminal y las aplicaciones de escritorio.
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - Un descargador de Mega muy rápido y relativamente estable. [![build](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - Un gestor de ventanas en mosaico para Windows inspirado en i3wm, con configuración YAML, compatibilidad con varios monitores y comandos controlados mediante el teclado.
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - Extensiones de internacionalización y renderizado para mdbook.
* [habitat](https://github.com/habitat-sh/habitat) - Una herramienta creada por Chef para compilar, desplegar y administrar aplicaciones.
* [Herd](https://github.com/imjacobclark/Herd) - Una aplicación experimental de pruebas de carga HTTP.
* [hickory-dns](https://crates.io/crates/hickory-dns) - Un servidor DNS. [![Build Status](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - Una red de malla superpuesta o privada que utiliza WireGuard internamente.
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - Un recopilador de datos rápido, sencillo y ligero.
* [kalker](https://github.com/PaddiM8/kalker) - Una calculadora científica que admite sintaxis similar a la matemática, con variables y funciones definidas por el usuario, derivación, integración y números complejos. Compatible con varias plataformas y con WASM. [![Build Status](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - Una aplicación multiplataforma en la bandeja del sistema para administrar y compartir varias configuraciones de reenvío de puertos de kubectl. [![Build Status](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - VPN entre pares de alto rendimiento.
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - Malla de servicios ultraligera para Kubernetes.
* [LWE](https://github.com/YangYuS8/lwe) - Aplicación de escritorio para Linux que permite explorar, administrar y aplicar contenido de Wallpaper Engine, creada con Rust y Tauri.
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - Preprocesador de [mdBook] [mdBook](https://github.com/rust-lang/mdBook) que utiliza KaTeX para renderizar expresiones matemáticas LaTeX.
* [MaidSafe](https://github.com/maidsafe) - Una plataforma descentralizada.
* [mayocream/koharu](https://github.com/mayocream/koharu) - Traductor de manga basado en aprendizaje automático, con detección automática de bocadillos, OCR, reconstrucción de imágenes y traducción mediante LLM; creado con Candle y Tauri.
* [mdBook](https://github.com/rust-lang/mdBook) - Una utilidad de línea de comandos para crear libros a partir de archivos Markdown. [![Build Status](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - Sistema de administración de monorepos y bases de código monolíticas compatible con Git, además de implementación no oficial de código abierto de Google Piper.
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - Backend para mdbook que comprueba tus enlaces.
* [mirrord](https://github.com/metalbear-co/mirrord) - Conecta tu proceso local con tu entorno en la nube y ejecuta código local en condiciones propias de la nube.
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - VPN de malla privada al estilo de Tailscale, basada en identidades Nostr y un plano de datos respaldado por FIPS. Incluye aplicaciones nativas multiplataforma (macOS, Linux, Windows y móviles) y CLI/daemon.
* [newdee/magpie](https://github.com/newdee/magpie) - Lanzador local al estilo de Spotlight que busca semánticamente entre tus estrellas de GitHub, archivos locales, imágenes y vídeos, íntegramente en el dispositivo. [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - Registro y lanzador de juegos sin DRM de Steam para Linux y macOS.
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - Cliente de terminal Rust/ratatui para DeepSeek Harness y otros agentes de programación compatibles con ACP. [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - Cliente SSH multiplataforma y emulador de terminal local, creado con Tauri 2.0 y SSH íntegramente en Rust (russh). Incluye conexiones multiplexadas, administrador de archivos SFTP, IDE integrado (CodeMirror 6), reenvío de puertos (-L/-R/-D), reconexión automática con período de gracia, sistema de complementos, asistente de IA, exportación cifrada (.oxide) y 11 idiomas. [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - Sistema de control de versiones distribuido basado en parches.
* [provrb/OBDium](https://github.com/provrb/obdium) - Aplicación multiplataforma basada en Tauri para todo tipo de diagnósticos de vehículos. Conecta el vehículo mediante un adaptador ELM327 y consulta códigos de avería, datos OBD-II en tiempo real, pruebas de preparación I/M y mucho más.
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - Plataforma empresarial de desarrollo rápido (Axum + SeaORM + JWT + VUE3, compatible con MySQL/Postgres/SQLite).
* [Rauthy](https://github.com/sebadob/rauthy) - Gestión de identidad y acceso con inicio de sesión único mediante OpenID Connect.
* [Rio](https://github.com/raphamorim/rio) - Emulador de terminal con aceleración por GPU y WebGPU, diseñado para ejecutarse en equipos de escritorio y navegadores.
* [rkik](https://github.com/aguacero7/rkik) - Herramienta CLI diseñada para inspeccionar NTP de forma pasiva y sin estado, como dig o ping para DNS e ICMP. Admite solicitudes asíncronas y supervisión continua. [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - Ejecutor universal multilenguaje y REPL inteligente (más de 25 lenguajes: Python, JS, Go, C, etc.).
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - Entorno de ejecución para programas numéricos con sintaxis de MATLAB, con aceleración de GPU mediante wgpu. [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - Plataforma de desarrollo de IoT de alto rendimiento creada con Rust, diseñada para admitir varios protocolos y procesar datos en tiempo real. Compatible con MQTT, WebSockets (WS), TCP y CoAP, por lo que es muy flexible para diversas aplicaciones de IoT.
* [rx](https://github.com/cloudhead/rx) - Editor moderno de pixel art inspirado en Vi.
* [Ryot](https://github.com/ignisda/ryot) - Aplicación autoalojada para hacer seguimiento del consumo de medios, la actividad física, etc.
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - Aplicación multiplataforma en la bandeja del sistema para organizar y ejecutar comandos de terminal predefinidos con atajos de teclado globales, menús anidados y configuración basada en JSON (Tauri + Vue).
* [Saga Reader](https://github.com/sopaco/saga-reader) - Lector de Internet ultrarrápido y muy ligero, impulsado por IA. Permite obtener información de motores de búsqueda y RSS.
* [Servo](https://github.com/servo/servo) - Un motor de navegador web experimental.
* [shoes](https://github.com/cfal/shoes) - Un servidor proxy multiprotocolo.
* [shuttle](https://github.com/shuttle-hq/shuttle) - Una plataforma sin servidor.
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - Aplicación multiplataforma para supervisar fácilmente el tráfico de red. [![build badge](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - Compilador de TypeScript/JavaScript ultrarrápido.
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - Asistente de programación con IA autoalojado, alternativa de código abierto a GitHub Copilot con compatibilidad con GPU e interfaz OpenAPI. [![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - PaaS autoalojada que sustituye Vercel, analítica, seguimiento de errores y supervisión de disponibilidad por un único binario de Rust.
* [tiny](https://github.com/osa1/tiny) - Cliente IRC de terminal.
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - Conjunto de herramientas de código abierto para personalizar Android, con acceso root, manipulación de imágenes de arranque y modificaciones sin sistema.
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - Red de malla privada con túneles públicos, SSH basado en identidad y transferencia de archivos entre pares.
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - Agente local de programación para terminal, interfaz gráfica de escritorio y flujos de trabajo de línea de comandos, con estado de tareas persistente y verificación respaldada por pruebas. [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - Sistema de composición tipográfica basado en marcado. [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - Cliente VPN WireGuard para macOS, Linux y Windows, creado con Tauri.
* [vortix](https://github.com/Harry-kp/vortix) - Interfaz de terminal para WireGuard y OpenVPN con telemetría en tiempo real, detección de fugas y mecanismo de bloqueo.
* [vproxy](https://github.com/0x676e67/vproxy) - Servidor proxy HTTP/HTTPS/SOCKS5 de alto rendimiento. [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - Entorno de ejecución de WebAssembly seguro y rápido, compatible con WASI y Emscripten. [![Build Status](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - Generador completo de API REST simuladas.
* [wezterm](https://github.com/wezterm/wezterm) - Emulador y multiplexor de terminal multiplataforma con aceleración por GPU.
* [WinterJS](https://github.com/wasmerio/winterjs) - Entorno de ejecución seguro de JavaScript creado con SpiderMonkey y Axum.
* [zellij](https://github.com/zellij-org/zellij) - Multiplexor de terminal (espacios de trabajo) con todo lo necesario incluido.
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - Cliente GUI moderno, ligero y seguro de Mihomo (Clash Meta), creado con Tauri. [![Security Audit](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### Audio y música

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - Entorno de ejecución Rust nativo para agentes de voz con IA en tiempo real (teléfono + WebRTC), autoalojado en un único binario y compatible con pipecat.
* [dano](https://github.com/kimono-koans/dano) - Una herramienta tipo hashdeep/md5tree (y mucho más) para archivos multimedia.
* [enginesound](https://github.com/DasEtwas/enginesound) - Aplicación gráfica y de línea de comandos para generar de forma procedural sonidos de motor semirrealistas. Incluye configuración detallada, frecuencia de muestreo variable y una ventana de análisis de frecuencias.
* [Festival](https://github.com/hinto-janai/festival) - Reproductor/servidor/cliente de música local. [![build-badge](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - Cliente mínimo de terminal para MPD, sencillo y muy configurable. [![build-badge](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - Lenguaje de programación en vivo orientado a grafos para crear música de forma colaborativa en navegadores.
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - Cliente de Spotify para terminal con streaming nativo, letras sincronizadas y visualización de audio en tiempo real. [![Continuous Deployment](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - Cliente MPD moderno y configurable para terminal, con compatibilidad con portadas de álbumes.
* [ncspot](https://github.com/hrkfdn/ncspot) - Cliente de Spotify multiplataforma para ncurses, inspirado en ncmpc y similares. [![build badge](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - Medición y visualización de audio rápida, sencilla y profesional para Linux, escrita en Rust.
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - Sistema de gestión de pódcasts basado en Rust y compatible con varios usuarios. Pinepods utiliza una base de datos central para que el tiempo de escucha y los temas se sincronicen entre dispositivos. Con clientes creados con Tauri, ofrece una solución de escucha totalmente multiplataforma. [![Docker Container Build](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - Administrador de pódcasts autoalojado que descarga automáticamente los episodios nuevos e incluye una interfaz web para escucharlos y una API de sincronización compatible con GPodder para aplicaciones móviles como AntennaPod. [![build badge](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - Una aplicación de streaming de música.
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - Equipo completo de amplificadores y pedales de guitarra, compatible con complementos externos y ejecutable directamente en la terminal.
* [Spotify Player](https://github.com/aome510/spotify-player) - Reproductor de Spotify en la terminal con todas las funciones del original.
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - Cliente de Spotify de código abierto que se ejecuta como daemon de UNIX. [![Continuous Integration](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - Interfaz TUI de reproductor de música, escrita en Rust.
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - Explora y escucha miles de emisoras de radio de todo el mundo directamente desde la terminal. [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - Recurso informativo generado estáticamente a diario para productores de música electrónica de baile. Ofrece análisis diarios de los valores más utilizados en cada género de EDM: tempos, tonalidades, notas fundamentales, etc., a partir de datos públicos como los de Beatport y Spotify.

### Cadena de bloques

* [Anchor](https://github.com/solana-foundation/anchor) - Anchor es el principal marco de desarrollo para crear programas seguros de Solana (contratos inteligentes).
* [artemis](https://github.com/paradigmxyz/artemis) - Un marco sencillo, modular y rápido para escribir bots de MEV.
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - Biblioteca para trabajar con Bitcoin SV.
* [cairo](https://github.com/starkware-libs/cairo) - Cairo es el primer lenguaje Turing completo para crear programas demostrables de computación general. También es el lenguaje nativo de [StarkNet](https://www.starknet.io), un ZK-Rollup que utiliza pruebas STARK. ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - Gestión de activos criptográficos entre cadenas totalmente descentralizada en Polkadot.
* [CITA](https://github.com/citahub/cita) - Kernel de cadena de bloques de alto rendimiento para usuarios empresariales.
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - Cliente de Coinbase Pro compatible con modo síncrono/asíncrono y WebSocket.
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - Almacenamiento descentralizado con prioridad en IA y protegido por EigenLayer.
* [Diem](https://github.com/diem/diem) - La misión de Diem es habilitar una moneda global sencilla y una infraestructura financiera que empodere a miles de millones de personas.
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - Implementación de referencia de Dusk, una FMI escalable y centrada en la privacidad para activos del mundo real (RWA) y aplicaciones financieras conformes a la normativa. [![Build Status](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Reimplementación eficiente de Electrum Server.
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - Beerus es un cliente ligero de StarkNet sin necesidad de confianza, ¡rapidísimo! [![GitHub Workflow Status](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - Codifica y decodifica invocaciones de contratos inteligentes.
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - Generador personalizado de direcciones de Ethereum.
* [etk](https://github.com/quilt/etk) - etk es un conjunto de herramientas para escribir, leer y analizar bytecode de EVM.
* [Forest](https://github.com/ChainSafe/forest) - Implementación de Filecoin. [![Build Status](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Foundry es un conjunto de herramientas modular, portátil y rapidísimo para desarrollar aplicaciones de Ethereum. ![Build Status](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - Evolución del protocolo MimbleWimble.
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - Utilidades para derivar claves relacionadas con carteras HD BIP-32.
* [Holochain](https://github.com/holochain/holochain) - Alternativa P2P escalable a la cadena de bloques para todas esas aplicaciones distribuidas que siempre quisiste crear. [![detect critical check failures](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - Marco para la interoperabilidad modular y sin permisos. Los clientes fuera de cadena están escritos en Rust, al igual que los contratos inteligentes para Solana VM y CosmWasm.
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - Cliente de HyperSync de Envio, una API de datos de cadenas de bloques que devuelve bloques, transacciones y registros filtrados como alternativa a JSON-RPC. [![Build Status](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - Implementación del protocolo [Interblockchain Communication](https://docs.cosmos.network/ibc).
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - Implementación de BIP39.
* [interBTC](https://github.com/interlay/interbtc) - Puente de Bitcoin a Polkadot y Kusama sin necesidad de confianza y totalmente descentralizado.
* [Joystream](https://github.com/Joystream/joystream) - Plataforma de vídeo gobernada por sus usuarios.
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - La capa 1 más rápida, de código abierto, descentralizada y totalmente escalable del mundo.
* [Lighthouse](https://github.com/sigp/lighthouse) - Cliente de la capa de consenso de Ethereum (CL). [![Build Status](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - Infraestructura de cadena de bloques descentralizada diseñada para aplicaciones Web3 de alta escalabilidad y baja latencia. [![Build Status](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - Plataforma descentralizada de contratos inteligentes para dispositivos móviles de gama baja.
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB es una cadena de bloques pública y sin permisos, la capa de conocimiento común de la red Nervos.
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Enlaces y CLI para la API y los contratos de OpenSea.
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Cliente Bitcoin de Parity.
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - Cadena de bloques de contratos inteligentes confidenciales basada en Intel SGX y Substrate.
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - SDK de cadena de bloques de Polkadot de Parity.
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - Cliente de nodo de Cardano escrito en Rust.
* [reth](https://github.com/paradigmxyz/reth) - Implementación modular, rápida como el rayo y amigable con quienes contribuyen del protocolo Ethereum.
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine (revm) es una máquina virtual de Ethereum rápida.
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - Biblioteca compatible con la (des)serialización, el análisis y la ejecución de estructuras de datos y mensajes de red relacionados con Bitcoin.
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![Crate](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - Biblioteca de Bitcoin Lightning. El crate principal, `lightning`, no gestiona la red, la persistencia ni ninguna otra E/S. Por tanto, es independiente del entorno de ejecución, pero los usuarios deben implementar la lógica básica de red, las interacciones con la cadena y el almacenamiento en disco para enlazar el crate.
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - Intérprete de ErgoTree y funciones relacionadas con carteras.
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Implementación de Cairo VM. [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - La primera cadena de bloques de capa uno que resuelve por completo el trilema de la cadena de bloques al lograr simultáneamente escalabilidad, seguridad y descentralización.
* [Sui](https://github.com/MystenLabs/sui) - Plataforma de contratos inteligentes de nueva generación con gran rendimiento, baja latencia y un modelo de programación orientado a activos, impulsada por el lenguaje Move.
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Administrador de versiones del compilador de Solidity.
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - Cadena de bloques creada para pagos con stablecoins a gran escala, compatible con EVM, con finalidad en menos de un segundo y funciones nativas de cuentas inteligentes, basada en Reth SDK.
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Estructuras de datos y clientes de la cadena de bloques Tendermint.
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - Biblioteca para generar carteras de criptomonedas.
* [zcash](https://github.com/zcash/zcash) - Zcash es una implementación del protocolo «Zerocash».

### Bases de datos

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - Conjunto de herramientas de transferencia de datos. Replica datos entre MySQL, PostgreSQL, Redis, MongoDB, Kafka, ClickHouse y más.
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - Base de datos de grafos NoSQL con actualizaciones en tiempo real, indexación dinámica y GUI fácil de usar, destinada a sistemas de gestión de contenido. [![Release](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - Módulo de Redis que implementa el algoritmo de token bucket como comando nativo para limitar solicitudes con alto rendimiento.
* [CozoDB](https://github.com/cozodb/cozo) - Base de datos relacional transaccional que utiliza Datalog y se centra en los datos y algoritmos de grafos. Permite viajar en el tiempo y es rápida. [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - Curvine es un sistema de caché distribuida, concurrente y de alto rendimiento, escrito en Rust y diseñado para cargas de trabajo de baja latencia y gran rendimiento en IA, macrodatos, etc.
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - Almacenamiento en memoria de alta concurrencia y en tiempo real, inspirado en mnesia de Erlang.
* [Databend](https://github.com/databendlabs/databend) - Sistema moderno de gestión de bases de datos para procesamiento y análisis de datos en tiempo real, con arquitectura nativa de la nube. [![Release](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - DB3 es una red descentralizada de bases de datos de capa 2, impulsada por la comunidad. [![GitHub Workflow Status (with event)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - Utilidad CLI completa que amplía la CLI oficial de Supabase. [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - Base de datos SQL distribuida, escrita como proyecto de aprendizaje.
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - Servicio de almacenamiento distribuido de objetos compatible con S3, diseñado para autoalojamiento a pequeña y mediana escala. [![status-badge](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - Biblioteca Rust para bases de datos SQL que incluye un analizador (sqlparser-rs), una capa de ejecución y varias opciones de almacenamiento, persistente y no persistente, todo en un mismo paquete. [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - Compilador y linter SQL políglota que genera código con seguridad de tipos a partir de SQL y realiza análisis estático teniendo en cuenta el esquema.
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - Base de datos de series temporales distribuida, nativa de la nube y de código abierto, compatible con PromQL/SQL/Python.[![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - Potente base de datos de grafos y vectores para almacenar datos de forma inteligente en aplicaciones RAG e IA.
* [Hiqlite](https://github.com/sebadob/hiqlite) - SQLite + caché de alta disponibilidad, integrable y basado en Raft.
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - Base de datos de grafos distribuida, nativa de almacenamiento de objetos, con consultas OpenCypher, recorrido GraphBLAS y conectividad Bolt compatible con Neo4j.
* [indradb](https://crates.io/crates/indradb) - Base de datos de grafos.
* [KiteSQL](https://github.com/KipData/KiteSQL) - SQL como función para Rust.
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - Base de datos vectorial sin servidor y de baja latencia para aplicaciones de IA.
* [Lucid](https://github.com/lucid-kv/lucid) - Almacén KV distribuido y de alto rendimiento, accesible mediante una API HTTP. [![Build Status](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - Base de datos SQL de streaming impulsada por Timely Dataflow :heavy_dollar_sign:
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - Ejecución duradera dentro de PostgreSQL. Funciones SQL de larga duración y tolerantes a fallos, con puntos de control automáticos, recuperación ante fallos y ejecución paralela. Sin infraestructura: se ejecuta como extensión de PostgreSQL creada con pgrx y Rust. [![License](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - Base de datos integrada para aplicaciones multiplataforma (servidor, escritorio y móvil), lista para usar. Sincroniza tipos Rust sin esfuerzo.
* [Neon](https://github.com/neondatabase/neon) - Postgres sin servidor. Separamos el almacenamiento y la computación para ofrecer escalado automático, bifurcaciones y almacenamiento ilimitado.
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - Sistema de archivos distribuido nativo de IA. [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - Flujo de datos parcialmente con estado y dinámico para backends de aplicaciones web.
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - Base de datos de grafos que implementa el estándar [SPARQL] [SPARQL](https://www.w3.org/TR/sparql11-overview/). ![Crates.io Version](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - ParadeDB es una alternativa a Elasticsearch basada en Postgres, diseñada para búsquedas y análisis en tiempo real.
* [ParityDB](https://github.com/paritytech/parity-db) - Base de datos rápida y fiable, optimizada para operaciones de lectura.
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - Proxy rápido para escalar PostgreSQL con agrupación de conexiones, balanceo de carga y fragmentación.
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - Base de datos distribuida compatible con PostgreSQL, con modelo de complementos en Rust; compatibilidad con el protocolo Redis y Cassandra mediante complementos comerciales.
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - Lenguaje moderno para transformar datos, que compila a SQL legible. [![Tests](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - Motor de base de datos con abastecimiento de eventos.
* [Qdrant](https://github.com/qdrant/qdrant) - Motor de búsqueda de similitud vectorial de código abierto con compatibilidad ampliada para filtros. [![Tests](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - Capa de privacidad diferencial de SQL a SQL. [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Crates.io Version](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - La base de datos de streaming de nueva generación en la nube. [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - 🚀 RustFS es un sistema de almacenamiento de objetos de alto rendimiento, de código abierto y compatible con S3, que permite migrar y coexistir con otras plataformas compatibles con S3, como MinIO y Ceph.  [![status-badge](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - Base de datos vectorial de autoaprendizaje y contenedor cognitivo que ejecuta LLM localmente y escala horizontalmente.
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - Índice vectorial basado en TurboQuant, escrito en Rust, con búsqueda acelerada por SIMD y enlaces para Python.
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - TUI de base de datos rápida y sin controladores, prioriza Vim y ofrece edición segura y diagramas ER. [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - Base de datos nativa de Rust de grafos y vectores para GraphRAG, grafos de conocimiento, búsqueda vectorial y análisis de grafos.
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Reimplementación de Redis.
* [Skytable](https://github.com/skytable/skytable) - Base de datos NoSQL multimodelo. ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - Base de datos integrada, moderna y en fase beta. [![Build Status](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - SQLite multijugador y offline-first. [![GitHub Workflow Status](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - Base de datos de documentos y grafos escalable y distribuida. [![Build Status](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - Herramienta ligera para administrar bases de datos, pensada para desarrolladores y creada con Tauri y React.
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - Entorno de ejecución basado en modelos, con consultas tipadas, mutaciones gobernadas y proveedores SQL. [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - Base de datos de grafos y almacén de documentos de código abierto. [![Build Status](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - Base de datos KV distribuida escrita en Rust.
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - ORM cómodo y acogedor para Rust, compatible con SQL (SQLite, PostgreSQL y MySQL) y DynamoDB, con macros derive, consultas con seguridad de tipos y exposición de funciones específicas de cada base de datos. [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - Tonbo es una base de datos integrada y persistente, basada en Apache Arrow y Parquet. [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - Alternativa ligera y rápida a Firebase en un único archivo, con API con seguridad de tipos, motor integrado de V8 JS/ES6/TS, autenticación y panel de administración. [![GitHub Workflow Status](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Base de datos integrada de series temporales para Rust. [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - Turso Database es una base de datos SQL en proceso, compatible con SQLite.
* [USearch](https://github.com/unum-cloud/usearch) - Motor de búsqueda de similitud para vectores y cadenas de texto. [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - Base de datos vectorial de nueva generación creada con enlaces a LMDB. [![Crates.io Version](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - Base de datos integrable y local-first cuyo motor triple combina búsqueda vectorial, grafo de propiedades y almacén columnar bajo un único lenguaje de consulta (VelesQL) y en un solo binario. Incluye un SDK de memoria agéntica en el núcleo —semántica, episódica y procedimental— con recuperación `why()` entre sesiones, que recorre el grafo para revelar hechos relacionados que la búsqueda vectorial por sí sola no detecta.
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - Enlaces para MDBX, una «base de datos de pares clave-valor rápida, compacta, potente, integrada y transaccional, con licencia permisiva». Es una bifurcación de mozilla/lmdb-rs con parches para hacerla compatible con libmdbx.
* [whispem/minikv](https://github.com/whispem/minikv) - Almacén distribuido, multiusuario, de pares clave-valor y objetos, con consenso Raft, durabilidad WAL, API de series temporales, búsqueda vectorial y extremos compatibles con S3. Diseñado para producción, con gráfico Helm, paneles de Grafana y SDK de Python. [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - Base de datos de series temporales de propósito general inspirada en Crux y Datomic.

### Sistemas integrados

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - Marco de trabajo async/await de nueva generación para Rust integrado, con HAL para STM32, nRF, RP, ESP32 y más. Incluye embassy-time, embassy-net, embassy-usb y compatibilidad con bajo consumo. [![Build Status](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - Firmware de reloj inteligente 100 % Rust `no_std` para Waveshare ESP32-S3-Touch-AMOLED-2.06. Incluye pantalla DMA QSPI de 80 MHz, entorno de ejecución asíncrono Embassy, gestión de energía basada en eventos y pantalla siempre activa.
* [rmk](https://github.com/haobogu/rmk) - Firmware de teclado con numerosas funciones.
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - Marco de concurrencia en tiempo real, impulsado por interrupciones, para crear sistemas integrados en tiempo real.
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - Envoltorio Rust para la interfaz de firmware extensible unificada (UEFI). Este crate facilita el desarrollo de software Rust que aprovecha abstracciones seguras, cómodas y eficientes para las funciones de UEFI.

### Emuladores

Consulta también [crates que coinciden con la palabra clave 'emulator'](https://crates.io/keywords/emulator).

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - Emulador CHIP-8 para WebAssembly.
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - Emulador de CHIP-8.
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Emulador de Commodore 64.
* Reproductor Flash
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Ruffle es un emulador de Adobe Flash Player. Ruffle está disponible para escritorio y web mediante WebAssembly. [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Game Boy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Proyecto de investigación y emulador de Game Boy.
  * [joamag/boytacean](https://github.com/joamag/boytacean) - Emulador de Game Boy Color que se ejecuta en la web mediante WebAssembly.
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - Emulador de Game Boy multiplataforma y con todas las funciones. ¡Para siempre, muchachos!
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Emulador de Game Boy.
* Game Boy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - RustboyAdvance-ng es un emulador de Game Boy Advance compatible con escritorio, Android y [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/). [![build badge](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - OpenGMK es una reescritura moderna de los motores propietarios de GameMaker Classic; incluye un port completo del ejecutor, un descompilador, un marco de trabajo para TAS y bibliotecas para trabajar directamente con datos de juego.
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - Emulador de IBM PC/XT escrito en Rust.
* Intel 8080 CPU
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Emulador de CPU Intel 8080.
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - Emulador de alto nivel para aplicaciones de iPhone OS.
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - Emulador de iPod con rueda de clic (en desarrollo).
* NES
  * [koute/pinky](https://github.com/koute/pinky) - Emulador de NES.
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - Emulador de NES.
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - Emulador de N64 escrito en Rust.
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Emulador de Nintendo DS.
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - Emulador experimental de PS4 para Windows, macOS y Linux. [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Reproductor Shockwave
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - Emulador de Shockwave Player compatible con la web y escrito en Rust.
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### Administrador de archivos

* [broot](https://github.com/Canop/broot) - Una nueva forma de visualizar y recorrer árboles de directorios (obtener una vista general, incluso de un directorio grande; encontrar un directorio y luego acceder a él con `cd`; no perder nunca de vista la jerarquía de archivos mientras buscas; manipular tus archivos, ...). Más información en [dystroy.org/broot](https://dystroy.org/broot/). [![Latest Version](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - Administrador de archivos de terminal completo, con previsualizaciones enriquecidas, acciones en lote y compatibilidad con la papelera.
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - TUI rápida y fácil de usar para administrar archivos en un servidor remoto, incluida la creación rápida de sesiones SSH, la edición de archivos in situ y más. ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - Administrador de archivos de terminal similar a ranger.
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - Busca archivos con lenguaje natural.
* [pikeru](https://github.com/dvhar/pikeru) - Selector de archivos para Linux con buenas miniaturas y búsqueda.
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - Administrador de archivos basado en un sistema de archivos virtual distribuido.
* [xplr](https://github.com/sayanarijit/xplr) - Explorador de archivos TUI pirateable, minimalista y rápido.
* [yazi](https://github.com/sxyazi/yazi) - Administrador de archivos de terminal ultrarrápido basado en E/S asíncrona.

### Finanzas

Consulta también las aplicaciones de [pagos](#payments).

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - Terminal de trading con IA que integra varios exchanges, ejecuta operaciones, incorpora modelos de riesgo y ofrece un panel TUI.
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - FOSS inteligente y sin mantenimiento que genera facturas atractivas por servicios y gastos.
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - CLI nativa de IA para Longbridge Securities: cotizaciones en tiempo real, cartera y operaciones en los mercados de Hong Kong, EE. UU., acciones A y Singapur.
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - Panel bursátil de terminal con cotizaciones y gráficos sin clave, sentimiento de noticias, operaciones de información privilegiada del formulario 4 de la SEC y consulta de resultados. ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - Plataforma de trading algorítmico de alto rendimiento y lista para producción, escrita en Rust y Python.
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - Motor de contabilidad rápido y fiable, con compatibilidad nativa con SCM de GIT para contabilidad en texto sin formato. [![CI Badge](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - Datos de cotizaciones en tiempo real en tu terminal.
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - Un gestor de finanzas personales atractivo, privado y local-first, para inversiones, patrimonio neto, gastos y simulaciones.

### Juegos

Consulta también [Juegos creados con Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston).

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - Juego táctico en tiempo real ambientado en la Segunda Guerra Mundial.
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - Implementación TUI de ajedrez ♟️.
* [citybound](https://github.com/citybound/citybound) - El simulador de ciudades que te mereces.
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Renderizador de Doom que podría llegar a convertirse en un juego jugable.
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - Reimplementación del motor de Cave Story con algunas mejoras.
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - Juego de simulación de planetas y terraformación.
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - Juego roguelike de mundo abierto y extensible con pixel art.
* [GitType](https://github.com/unhappychoice/gittype) - Juego de mecanografía en CLI que convierte tu código fuente en retos de escritura.
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Ferium es un programa de CLI rápido y completo para descargar y actualizar mods de Minecraft desde Modrinth, CurseForge y GitHub Releases, y modpacks desde Modrinth y CurseForge. ![ferium build](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - Simulador moderno de cubos de Rubik 3D y 4D, minimalista y fácil de usar para principiantes, con controles personalizables de ratón y teclado y funciones avanzadas para resolver a velocidad.
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - Videojuego musical minimalista compatible con el formato BMS.
* [louis-e/arnis](https://github.com/louis-e/arnis) - Genera mundos de Minecraft Java/Bedrock a partir de la geografía real, utilizando OpenStreetMap y datos de elevación. [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - Snake.
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - Herramienta sencilla y fácil de usar para administrar partidas guardadas. [![build badge](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - Herramienta para hacer copias de seguridad de partidas guardadas de juegos de PC. [![build badge](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![crate](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - Pequeño juego de estrategia por turnos en un tablero hexagonal 2D.
* [rhex](https://github.com/dpc/rhex) - Roguelike ASCII hexagonal.
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - Un juego roguelike.
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.io es un juego multijugador naval en línea.
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - Juego de terminal multiplataforma en el que caen y se apilan tetrominós.
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - Implementación de Sokoban.
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - Juego de disparos espaciales que busca ser una puerta de entrada para que quienes desarrollan juegos por primera vez puedan hacer sus primeras contribuciones. ![build badge](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Renderizador de mapas de Quake.
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - Juego de Snake en la terminal basado en stdin/stdout (además de TCP y sockets de dominio Unix). [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - Juego de mecanografía para un jugador, creado para la terminal.
* [Veloren](https://gitlab.com/veloren/veloren) - Juego RPG voxel multijugador, de mundo abierto y código abierto, actualmente en desarrollo alfa. [![build badge](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - Motor de juegos 2D de pixel art y herramientas de creación rápida de prototipos, compatible con modos de renderizado de texto y gráficos.
* [Zone of Control](https://github.com/ozkriff/zoc) - Juego de estrategia por turnos en un tablero hexagonal.

### Gráficos

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - Implementación de un ray tracer muy sencillo, basada en el libro Ray Tracing in One Weekend de Peter Shirley.
* [flxzt/rnote](https://github.com/flxzt/rnote) - Dibuja y toma notas a mano.
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - Convierte diagramas ASCII en gráficos SVG.
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - Renderizador glTF 2.0 PBR basado en el trazado de rayos de Vulkan.
* [Limeth/euclider](https://github.com/Limeth/euclider) - Trazador de rayos 4D en tiempo real para CPU.
* [linebender/resvg](https://github.com/linebender/resvg) - Biblioteca de renderizado SVG.
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - Lenguaje pequeño para todo tipo de figuras —diagramas, gráficos, secuencias, esquemas y dibujos técnicos—, compiladas desde texto sin formato a SVG personalizable con temas. [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - Aplicación de fondos de pantalla de vídeo con aceleración de GPU para Wayland y macOS, escrita en Rust.
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - Herramienta para desplegar modelos 3D y crearlos en papel con tijeras y pegamento.
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - Biblioteca de renderizado gráfico 2D basada en Skia para Vue. Utiliza Rust para implementar rasterización por software y realizar el renderizado.
* [storytold/artcraft](https://github.com/storytold/artcraft) - IDE impulsado por IA y superficie de computación tangible para moldear escenas, vídeos e imágenes como si fueran arcilla.
* [turnage/valora](https://crates.io/crates/valora) - Biblioteca para crear arte generativo.
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - Un trazador de rayos.
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - Implementa un equivalente al código C++ del libro PBRT (3.ª edición).

### Procesamiento de imágenes

* [Darkly](https://github.com/darkly-art/darkly) - Editor entrópico para artistas y pintores digitales.
* [Graphite](https://github.com/GraphiteEditor/Graphite) - Editor de gráficos vectoriales.
* [Imager](https://github.com/imager-io/imager) - Optimización automatizada de imágenes.
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - Optimizador PNG multihilo escrito en Rust. [![Build Status](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![Version](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - Utilidad para crear favicons. [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - Herramienta de CLI y WebAssembly que limpia pixel art generado por IA para obtener sprites con píxeles perfectos (MIT).
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - Conversor de gráficos rasterizados a vectoriales (jpg/png a svg).

### Automatización industrial

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - Marco orientado a flujos de datos, rápido y sencillo, para crear aplicaciones robóticas y multi-IA; ofrece API para Python, Rust y C/C++. [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - Biblioteca de [OPC UA] [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/).
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - Biblioteca de [tokio] [tokio](https://tokio.rs) basada en [modbus] [modbus](https://www.modbus.org).

### Colas de mensajes

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - Servidor de mensajería pub/sub extensible para aplicaciones perimetrales.
* [Rmqtt](https://github.com/rmqtt/rmqtt) - Servidor/broker MQTT: broker de mensajes MQTT distribuido y escalable para la era 5G del IoT.
* [RobustMQ](https://github.com/robustmq/robustmq) - Cola de mensajes convergente, nativa de la nube y de nueva generación.
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀Apache RocketMQ creado en Rust🦀. Más rápido, más seguro y con menor uso de memoria.

### MLOps

* [api7/aisix](https://github.com/api7/aisix) - Pasarela de IA de código abierto para LLM y agentes de IA: una API compatible con OpenAI y una API nativa de Anthropic Messages, con conectividad a OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI y otros extremos compatibles con OpenAI; incluye pasarelas MCP y A2A, enrutamiento semántico, protecciones y caché semántica. [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - Marco ETL para crear contexto actualizado para agentes de IA, con procesamiento incremental.
* [TensorZero](https://github.com/tensorzero/tensorzero) - Ciclo de datos y aprendizaje para LLM que unifica inferencia, observabilidad, optimización y experimentación. ![TensorZero Build Status](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - Motor de memoria semántica offline-first para agentes de IA. Un único binario, sin dependencias y nativo de MCP. [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### Observabilidad

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - Servidor compatible con StatsD, escalable y de alto rendimiento.
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - Aplicación de escritorio nativa de egui para analizar archivos y flujos de registros de gran tamaño. Incluye un sistema de complementos WebAssembly y compatibilidad con formatos de automoción. [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - Backend de observabilidad para registros, métricas y trazas, con instrumentación Rust de baja sobrecarga. Almacena telemetría como Parquet en almacenamiento de objetos y la consulta mediante SQL. [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - La aplicación cliente de [MAC](https://github.com/MegaAntiCheat).
* [openobserve](https://github.com/openobserve/openobserve) - 10 veces más fácil, 140 veces menos coste de almacenamiento y alto rendimiento a escala de petabytes: alternativa a Elasticsearch/Splunk/Datadog.
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetry ofrece un conjunto único de API, bibliotecas, agentes y servicios de recopilación para obtener trazas y métricas distribuidas de tu aplicación. Puedes analizarlas con Prometheus, Jaeger y otras herramientas de observabilidad. [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - Plataforma de observabilidad unificada y nativa de IA para recopilar y analizar registros, métricas, trazas y eventos.
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - Motor de búsqueda nativo de la nube y muy rentable para administrar registros. [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - Servidor de seguimiento de errores ultraligero y compatible con los SDK de Sentry.
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - Agente de supervisión del consumo energético para registrar el consumo del host y de cada servicio, y facilitar el diseño de sistemas y aplicaciones más sostenibles. Se integra en cualquier cadena de herramientas de supervisión (ya es compatible con Prometheus, Warp 10, Riemann, etc.).
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - Enrutador de alto rendimiento para registros, métricas y eventos.

### Sistemas operativos

Consulta también [una comparación de sistemas operativos escritos en Rust](https://github.com/flosse/rust-os-comparison).

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - Sistema operativo para arquitectura armv8-a.
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - Sistema operativo moderno, similar a Unix y basado en el diseño de kernel monolítico.
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - Kernel de sistema operativo seguro, rápido y de propósito general que ofrece una ABI compatible con Linux.
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - Sistema operativo con kernel propio desarrollado desde cero y compatibilidad con Linux.
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - Kernel similar a Unix y compatible con Linux, escrito en Rust y ensamblador AArch64.
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - Kernel de sistema operativo x86_64 escrito en Rust y ensamblador.
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - Microkernel residente en RAM y basado en capacidades, donde cada programa es una cápsula firmada que debe demostrar su validez antes de que el kernel la ejecute; los controladores se ejecutan en espacio de usuario.
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - Sistema operativo de propósito general, similar a Unix y basado en microkernel, centrado en la seguridad, estabilidad, rendimiento, corrección, sencillez y pragmatismo, que aspira a ser una alternativa completa a Linux y BSD.
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - Kernel de sistema operativo escrito en Rust. No es POSIX.
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - Sistema operativo seguro, escrito desde cero en un solo espacio de direcciones y con un único nivel de privilegios. [![build badge](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - Sistema operativo integrado seguro para microcontroladores basados en Cortex-M.
* [vinc/moros](https://github.com/vinc/moros) - Sistema operativo aficionado basado en texto para equipos con arquitectura x86-64 y BIOS.

### Gestores de paquetes

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - Gestor moderno de paquetes para arquitecturas de Protocol Buffers y gRPC.
* [pkgx](https://github.com/pkgxdev/pkgx) - Ejecuta cualquier cosa. Gestor de paquetes componible que pone todo el ecosistema de código abierto a disposición de tus scripts.
* [rebos](https://crates.io/crates/rebos) - Forma declarativa de automatizar la gestión de paquetes en cualquier distribución de Linux. [![crate](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### Pagos

* [hyperswitch](https://github.com/juspay/hyperswitch) - Orquestador de pagos de código abierto que permite conectarse con varios procesadores de pago y enrutar el tráfico de pagos fácilmente mediante una única integración de API. ![GitHub last commit](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### Productividad

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - Herramienta multiplataforma minimalista para simular movimiento del ratón, escrita en Rust. [![build](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - Permite que los agentes de IA se envíen mensajes, se supervisen y se inicien entre terminales (Claude Code, Gemini CLI, Codex, OpenCode). Envoltorio Rust de PTY con seguimiento de pantalla, TUI (ratatui) y binario cliente de daemon; incluye hooks y API de Python. [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - TUI/CLI para administrar varias sesiones de agentes de programación con tmux, árboles de trabajo de Git y aislamiento mediante Docker. [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - Herramienta CLI integral para LLM con asistente de shell, Chat-REPL, RAG, herramientas y agentes de IA, compatible con OpenAI, Claude, Gemini, Ollama, Groq y más.
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - Memoria a largo plazo para agentes de programación con IA: wiki Markdown respaldada por Git, captura automática del ciclo de vida, transferencias entre agentes y servidor MCP autoalojado. [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Widget de Waybar, panel nativo de Omarchy Quattro y TUI con pestañas para supervisar el uso de planes de IA en Claude, Codex/ChatGPT, GitHub Copilot, Z.AI (GLM), OpenRouter y más. [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - Herramienta de terminal que ajusta los modelos LLM a la RAM, CPU y GPU del sistema. TUI interactiva con detección de hardware, puntuación multidimensional (calidad/velocidad/ajuste/contexto), clasificación comunitaria y compatibilidad con Ollama, llama.cpp, MLX, vLLM y más. [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - TUI interactiva para servir modelos LLM locales con backends detectados automáticamente (llama-server, KoboldCpp, LocalAI, MLX, Ollama, vLLM, LM Studio). Incluye navegación del árbol de código fuente, ajustes preestablecidos por backend, registros en vivo y compatibilidad con modelos de visión. [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - Espacio de trabajo local-first para ejecutar agentes de investigación en paralelo con Claude Code, Codex, OpenCode o Cursor, con seguimiento reproducible de experimentos. [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - Aplicación local de escritorio (Tauri) que detecta causas comunes del consumo excesivo de tokens en sesiones de agentes de programación con IA: sesiones demasiado profundas, subagentes sobredimensionados, caché defectuosa y servidores MCP, habilidades y herramientas sin usar. Compatible con Claude Code, Codex, Cursor, Copilot, Pi y más. [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - Herramienta CLI para buscar estructuras de código, aplicar lint y reescribirlas.
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - Herramienta sencilla de seguimiento del tiempo para la línea de comandos. [![Tests](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - Administrador del portapapeles para Windows con transformaciones de IA, OCR y búsqueda aproximada.
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - Enrutador de LLM nativo de agentes que optimiza cada ejecución sin cambiar el harness y hace que cada llamada a un modelo sea fiable, rastreable, segura y rentable. Enruta solicitudes a OpenAI, Anthropic, Google, OpenRouter, Bedrock, GitHub Copilot y más mediante un único extremo local, con pasarela MCP, integración ACP, protecciones, observabilidad y conmutación por error entre varias cuentas.
* [CookCLI](https://github.com/cooklang/CookCLI) - Administrador de recetas de línea de comandos con servidor web, listas de la compra y planificación de comidas.
* [espanso](https://github.com/espanso/espanso) - Expansor de texto multiplataforma. [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - Herramienta CLI para introducir y guardar tus ideas sin salir de la terminal.
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - Asistente gráfico integral y administrador de perfiles para Claude Code, Codex y Gemini CLI.
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - Proxy local que comprime solicitudes a API de LLM para reducir los tokens de entrada y salida sin cambiar las respuestas. Se sitúa entre las herramientas de IA y el proveedor mediante HTTPS_PROXY; funciona con Claude Code, Codex y más. [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - Aplicación integral para tomar notas, creada para estudiantes y profesionales de STEM. [![publish](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - Herramienta de gestión de proyectos para terminal inspirada en lazygit. [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - Aplicación de seguimiento del tiempo creada con GTK4.
* [futuregene/future-os](https://github.com/futuregene/future-os) - Un agente de IA para todas partes: un único backend gRPC en Rust impulsa una interfaz de terminal, una aplicación de escritorio, aplicaciones móviles, CLI y bots de mensajería instantánea con las mismas sesiones, memoria y habilidades. Herramientas con aprobación y prioridad en la confianza, más de 3.800 modelos y un plano de control de bucle para ejecuciones de más de 24 horas. [![build](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - CLI para trabajar con API compatibles con OpenAI, plantillas YAML para ingeniería de prompts y base de datos vectorial integrada para memorias persistentes.
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - TUI de terminal para supervisar sesiones de agentes de programación con IA (Claude Code, Codex CLI, OpenCode). Realiza seguimiento del uso de tokens, porcentaje de la ventana de contexto, límites de frecuencia, procesos secundarios y puertos huérfanos. Incluye integración con tmux, 12 temas —también opciones aptas para personas daltónicas— y compatibilidad multiplataforma. [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - Agente de programación para terminal DeepSeek V4, con bloques de razonamiento en streaming, edición del espacio de trabajo local, selección automática de modelos, compatibilidad con MCP y TUI basada en ratatui. [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - Entorno autónomo de ejecución de agentes, centrado en Rust, para flujos de trabajo de CLI, canales, pasarelas y hardware.
* [illacloud/illa](https://github.com/illacloud/illa) - Creador de herramientas internas de bajo código.
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - Herramienta de gestión del conocimiento basada en Markdown, con servidor LSP y CLI. [![Build Status](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - Panel personal tranquilo para la terminal: relojes, calendario y agenda, tiempo, tareas, notas, mercados y métricas del sistema en vivo, organizado en una cuadrícula configurable. [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚 Simplifica tu lectura. Lector de documentos TUI minimalista, similar a Vim.
* [LLDAP](https://github.com/lldap/lldap) - Interfaz LDAP simplificada para la autenticación.
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - Notas, documentos y dibujos colaborativos y cifrados de extremo a extremo, con clientes nativos multiplataforma basados en un núcleo Rust compartido y un servidor autoalojable. [![Integration](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - TUI/CLI rápida que realiza seguimiento del uso y coste de tokens en CLI de programación con IA (Claude Code, Codex, Gemini CLI y más), con caché persistente que sobrevive al borrado de datos de la CLI. [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - CLI para administrar árboles de trabajo Git, diseñada para ejecutar agentes de IA en paralelo, con hooks, mensajes de commit escritos por LLM y flujos de trabajo de fusión. [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - Agente de programación con IA para terminal, con enrutamiento transparente entre varios modelos locales (Ollama, LM Studio, MLX, llama.cpp) y backends en la nube, visualización del coste por turno, deshacer real y comprobantes de enrutamiento auditables. [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - CLI de entorno de ejecución de agentes de IA de código abierto, con más de 48 agentes especializados, host MCP con registro dinámico de servidores, compatibilidad con varios proveedores (más de 13 LLM) y compresión adaptativa del contexto para sesiones de más de 4 horas.
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - Multiplexor de terminal diseñado para agentes de programación con IA. Ejecuta varios agentes en una terminal con vistas de terminal reales, detección del estado del agente (bloqueado/trabajando/listo), espacios de trabajo, pestañas y sesiones persistentes. Un único binario Rust con compatibilidad para desconectar y volver a conectar.
* [pier-cli/pier](https://github.com/pier-cli/pier) - Repositorio central para administrar (añadir, buscar metadatos, etc.) todos tus comandos de una línea, scripts, herramientas y CLI.
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - Árboles de trabajo Git y ventanas tmux para desarrollar en paralelo sin fricciones. [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - Proxy CLI de alto rendimiento que reduce entre un 60 y un 90 % el consumo de tokens de asistentes de programación con IA. Filtra y comprime las salidas de comandos para Claude Code, Copilot, Cursor, Gemini CLI, Codex y más. [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - Grabación local de pantalla y micrófono con IA, disponible las 24 horas. Crea aplicaciones de IA con todo el contexto. Funciona con Ollama.
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - Equilibra trabajo y descanso teniendo en cuenta la carga actual y la del día. [![Build](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - Agente de investigación social que reutiliza una sesión iniciada en Chrome para buscar y leer publicaciones, comentarios, perfiles y contenido multimedia compatible en Instagram, TikTok, LinkedIn, X, Xiaohongshu y Douyin.
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - Interfaz personal de voz con IA para cualquier aplicación: dictado personalizable que permite elegir modelos y prompts, creada con Rust.
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - CLI de administración de espacios de trabajo con una TUI para organizar y recorrer experimentos temporales.
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - Espacio de trabajo nativo de Rust para agentes de IA, compatible con varios proveedores de LLM, sistema de habilidades, servidores MCP, bases de conocimiento y orquestación de agentes. Incluye GUI de escritorio, REPL de CLI y modos no interactivos. [![License](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - Entorno de ejecución de código abierto que reúne agentes de IA para formar una empresa operativa: tablero de trabajo compartido, transferencias entre agentes, aprobaciones humanas y flujos de trabajo programados y basados en DAG. Funciona con cualquier modelo y se autoalojada mediante Docker. [![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - Asistente agentivo de código abierto con interfaz de escritorio, más de 118 integraciones OAuth, árbol de memoria local-first, wiki compatible con Obsidian, voz nativa y compresión TokenJuice. Creado con Tauri y Rust para ofrecer IA personal centrada en la privacidad.
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - Aplicación multiplataforma de dictado por voz con IA, creada con Tauri y Rust.
* [Tuxedo](https://github.com/webstonehq/tuxedo) - TUI rápida y controlada mediante teclado para todo.txt.
* [tw93/Pake](https://github.com/tw93/Pake) - Convierte cualquier página web en una aplicación de escritorio con un solo comando usando Rust y Tauri. Ligera, rápida y compatible con macOS, Windows y Linux.
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - Hoja de cálculo nativa creada como un editor de código, con GPUI, WASM y un motor CLI sin interfaz.
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - Aplicación de escritorio ligera para administrar, sincronizar y organizar habilidades de agentes de IA en más de 15 herramientas de programación (Cursor, Claude Code, Codex, Copilot, etc.), con Tauri 2, backend Rust y copias de seguridad con Git.
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - La potencia de Raycast. La velocidad de Alfred. Privacidad desde el diseño. [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![Build](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - Aplicación Kanban para la terminal.
* [yicheng47/runner](https://github.com/yicheng47/runner) - Aplicación nativa de escritorio GPUI para macOS y Windows, donde agentes de programación de CLI como Claude Code, Codex, Copilot CLI y pi trabajan juntos en una tarea como un equipo, cada uno con su propia TUI en una terminal real. [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - Asistente de reuniones con IA y prioridad en la privacidad que captura, transcribe y resume reuniones íntegramente en tu equipo. Incluye transcripción en tiempo real con modelos Whisper/Parakeet, resúmenes generados con IA y compatibilidad con varios proveedores de IA (Ollama, Claude, Groq, OpenAI).

### Protocolos de enrutamiento

* [Holo](https://github.com/holo-routing/holo) - Holo es un conjunto de protocolos de enrutamiento diseñados para admitir redes de gran escala e impulsadas por la automatización.
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP

### Herramientas de seguridad

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - Asistente de ingeniería inversa que extrae cadenas y pseudocódigo relacionado de un archivo binario. [![build](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - Asistente de investigación de vulnerabilidades que extrae pseudocódigo del descompilador IDA Hex-Rays. [![build](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - Asistente de ingeniería inversa que utiliza un LLM ejecutado localmente para ayudar a analizar código fuente. [![build](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - Asistente de investigación de vulnerabilidades que localiza en un archivo binario todas las llamadas a funciones API potencialmente inseguras. [![build](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - Supervisión del tráfico y estadísticas en tiempo real, mediante terminal, para tu instancia de AdGuard Home.
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - Biblioteca avanzada de fuzzing: ¡combina tus fuzzers en Rust! Escala entre núcleos y máquinas. Compatible con Windows, Android, macOS, Linux, no_std, etc. [![build and test](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - Herramienta minimalista para escanear ARP rápidamente en redes locales.
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - Identificación pasiva de huellas de red multiprotocolo que combina el análisis TCP de p0f y TLS de JA4 para detectar sistemas operativos y aplicaciones. [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - Escáner de vulnerabilidades web de nivel empresarial, con más de 60 módulos de ataque para pruebas de penetración y evaluaciones de seguridad.
* [cargo-audit](https://crates.io/crates/cargo-audit) - Audita Cargo.lock en busca de crates con vulnerabilidades de seguridad.
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - Haz que los binarios de Rust para producción sean auditables.
* [cargo-crev](https://crates.io/crates/cargo-crev) - Sistema de revisión de código verificable criptográficamente para el gestor de paquetes Cargo.
* [cargo-deny](https://crates.io/crates/cargo-deny) - Complemento de Cargo para ayudarte a administrar grafos de dependencias grandes.
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - Evita las especificaciones de API a medio terminar con una herramienta CLI que valida tus especificaciones y te ayuda a evitar comportamientos de usuario indefinidos.
* [cotp](https://github.com/replydev/cotp) - Aplicación de autenticación TOTP/HOTP de línea de comandos, cifrada y fiable, con función de importación.
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - TUI multiplataforma para supervisar redes, con identificación de procesos mediante eBPF/PKTAP e inspección profunda de paquetes. [![build badge](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - Herramienta de detección de IMSI catchers diseñada para ejecutarse en hardware de puntos de acceso móviles y ayudar a identificar posibles sistemas de vigilancia celular (Stingray/simuladores de estaciones base). [![Tests](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - Búsqueda rápida y paralela de gadgets ROP/JOP entre distintas variantes. [![GitHub Actions](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - Herramienta sencilla, rápida y recursiva para descubrir contenido.
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - Escáner rápido de licencias, derechos de autor, paquetes y SBOM, que genera CycloneDX y SPDX con un inventario de dependencias completo y cerrado; estático y sin conexión. [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - Proxy compatible con protocolos de bases de datos que se utiliza para aplicar políticas de acceso 👮.
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - Descifrador de autenticación de red programable mediante scripts.
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - Secuestrador de conexiones TCP; reescritura de shijack.
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - Marco de trabajo OSINT semiautomático y gestor de paquetes.
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - Sniffer de paquetes seguro y multihilo.
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - Una alternativa mejor a sudo(-rs)/su • ⚡ rapidísimo • 🛡️ seguro para la memoria • 🔐 centrado en la seguridad. ![Build](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![Coverage](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - Sistema de ejecución de código aislado para ejecutar código no confiable (salidas de modelos, complementos y herramientas) en Windows, Linux y macOS. Incluye varios backends de aislamiento (ProcessContainer, Windows Sandbox, LXC, Bubblewrap, Seatbelt, MicroVM, Hyperlight, IsolationSession y WSLC), con aislamiento basado en políticas JSON y SDK de TypeScript. [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - Herramienta rapidísima para detectar secretos y validarlos en tiempo real en archivos, repositorios Git, S3, Jira y Confluence.
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - Aplicación cliente VPN multiplataforma para el servicio Mullvad VPN, compatible con WireGuard, túneles resistentes a la computación cuántica y funciones centradas en la privacidad. [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - Herramienta para identificar huellas de aplicaciones y servicios web.
* [Raspirus](https://github.com/Raspirus/Raspirus) - Escáner de malware basado en reglas, respetuoso con los usuarios y los recursos. [![status](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - Analiza registros y actúa: una alternativa a fail2ban.
* [ripasso](https://github.com/cortex/ripasso/) - Gestor de contraseñas y sistema de archivos compatible con pass.
* [rustscan](https://github.com/bee-san/RustScan) - Acelera Nmap con esta herramienta de escaneo de puertos. [![build badge](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - Detecta credenciales y claves de API filtradas en árboles de código fuente, historial de Git, archivos y fuentes remotas, con verificación en vivo de los secretos encontrados. [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - Cámara privada de seguridad doméstica para Raspberry Pi, con cifrado de extremo a extremo.
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - Busca cuentas de redes sociales por nombre de usuario en distintas redes. [![status](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Herramienta sencilla para administrar secretos mediante claves SSH para cifrarlos y descifrarlos.
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - Kit completo de ingeniería de detección para el estándar Sigma, con analizador, motor de evaluación, conversión de reglas, entorno de ejecución de streaming, linter, CLI, MCP y LSP. [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### Redes sociales

* Discord
  * [concord](https://github.com/chojs23/concord) - Cliente TUI de Discord con muchas funciones.
  * [Dorion](https://github.com/SpikeHD/Dorion) - Cliente alternativo de Discord diminuto, con menor consumo de recursos, inicio más rápido, temas, complementos y más. ![build](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - Servidor compatible con Mastodon que utiliza ActivityPub.
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - TUI multiplataforma para Telegram. [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - Pasarela de WhatsApp autoalojada que ofrece API REST, webhooks, compatibilidad con varias sesiones y llamadas de voz desde un único binario estático. [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### Herramientas del sistema

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - Analizador gráfico del uso del disco (egui) para macOS, Windows y Linux, con vistas de sunburst y mapa de árbol; también puede analizar servidores SSH y almacenamiento en la nube mediante rclone. [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - Alternativa rápida a `cd` que aprende tus hábitos. [![release](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - Herramienta CLI para montar en Mac cualquier sistema de archivos compatible con Linux mediante NFS y una microVM.
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - Aplicación GUI para anylinuxfs.
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - CLI de control de versiones semántico a nivel de entidades. Calcula diferencias, identifica autores, genera grafos y analiza el impacto a nivel de función/clase en 32 lenguajes mediante tree-sitter. [![Release](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Controlador de fusiones de Git a nivel de entidades. Resuelve conflictos de fusión comprendiendo la estructura del código mediante tree-sitter. Se integra en Git como controlador de fusiones personalizado mediante .gitattributes. [![Release](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuin sustituye el historial de shell existente por una base de datos SQLite y registra contexto adicional de tus comandos. También ofrece sincronización opcional y completamente cifrada del historial entre equipos mediante un servidor Atuin.
* [bandwhich](https://github.com/imsnif/bandwhich) - Herramienta de terminal para medir el uso del ancho de banda.
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - Distribución NixOS en la que un agente de IA tiene acceso root mediante 91 herramientas MCP tipadas. Nueve daemons Rust (puente del sistema, despliegues atómicos SafeSwitch con reversión automática, registro de auditoría encadenado mediante hashes, carteras criptográficas AES-256-GCM, malla P2P Noise_XX + ML-KEM-768, STT/TTS local, ciclo de vida del servidor MCP, aprendizaje del sistema y proxy de salida con dominios permitidos) se comunican mediante sockets Unix.
* [bottom](https://github.com/ClementTsang/bottom) - Otro monitor gráfico multiplataforma de procesos y del sistema. [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - Visor pequeño de registros JSON para la línea de comandos.
* [brush-shell](https://github.com/reubeno/brush) - Shell compatible con bash/POSIX. [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![Crate](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - Daemon ligero para terminar procesos y gestionar situaciones de falta de memoria en Linux. [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - Lanzador de comandos para Linux, similar a gmrun.
* [cantino/mcfly](https://github.com/cantino/mcfly) - Recorre volando el historial de tu shell. ¡Qué grande!
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - Biblioteca multiplataforma escrita en Rust para obtener, establecer y supervisar cambios en el contenido del portapapeles a nivel del sistema.
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - Compositor Wayland nativo de macOS para ejecutar aplicaciones GUI de Linux sin la sobrecarga de una máquina virtual. Creado con Smithay. [![build badge](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - Herramienta CLI multihilo para comprimir y descomprimir. [![Build Status](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - Monitor de sistema de archivos configurable, inspirado en [entr] [entr](http://eradman.com/entrproject/).
* [dalance/procs](https://github.com/dalance/procs) - Sustituto moderno de «ps». [![Regression](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - Buscador rápido de archivos duplicados.
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - Sustituto de lsof para Linux que enumera los descriptores de archivo abiertos por los procesos.
* [diskonaut](https://github.com/imsnif/diskonaut) - Navegador visual del espacio en disco para la terminal.
* [dust](https://github.com/bootandy/dust) - Una versión más intuitiva de du.
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - Cliente SSH basado en Ratatui, con sincronización en la nube, gestión de contenedores, transferencia de archivos, túneles, fragmentos de texto y administración de contraseñas. [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - Un sustituto de «ls».
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - Shell de línea de comandos fácil de usar.
* [fork](https://github.com/immortal/fork) - Biblioteca para crear procesos nuevos separados del terminal de control (daemon).
* [fselect](https://crates.io/crates/fselect) - Busca archivos mediante consultas similares a SQL.
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - Extensión de Git que realiza un seguimiento del código generado por IA en tus repositorios y vincula cada línea con el agente, el modelo y las transcripciones.
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - Interfaz moderna de control de versiones basada en Git, con GUI y CLI, creada desde cero para flujos de trabajo impulsados por IA.
* [gitui](https://github.com/gitui-org/gitui) - Cliente de Git para terminal rapidísimo. [![build](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - Lenguaje de consulta similar a SQL para consultar archivos .git.
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - Aplicación multiplataforma para limpiar discos y analizar el espacio, con limpieza profunda, visualización de mapas de árbol, detección de duplicados, desinstalación de aplicaciones y limpieza de artefactos de desarrollo. [![Cross-platform Check](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - Herramienta interactiva similar a Time Machine, a nivel de archivo, para ZFS/btrfs/nilfs2 (¡e incluso para copias de seguridad reales de Time Machine!).
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - CLI y TUI para administrar controladores de red Ubiquiti UniFi, con cobertura de dos API y panel Ratatui de 10 pantallas. [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - Lanzador de programas rápido y ágil para Wayland. [![build](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - Herramienta TUI de línea de comandos que ayuda a encontrar y terminar procesos.
* [Kondo](https://github.com/tbillington/kondo) - Herramienta CLI y GUI para eliminar artefactos de proyectos de software y recuperar espacio en disco.
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Controlador de AMDGPU para Linux.
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - Gestor experimental de paquetes del sistema.
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - xargs + awk con compatibilidad para búsqueda de patrones.
* [lsd](https://github.com/lsd-rs/lsd) - Un ls con muchos colores bonitos e iconos geniales. [![build](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - Daemon de BitTorrent flexible y rápido.
* [m4b/bingrep](https://github.com/m4b/bingrep) - Busca y colorea cadenas en binarios de diversos sistemas operativos y arquitecturas.
* [macpow](https://github.com/k06a/macpow) - TUI para supervisar el consumo eléctrico en tiempo real en Mac con Apple Silicon (M1–M5+). Lee IOReport, SMC e IORegistry; no requiere sudo. [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - Consulta qué se ejecuta en tus puertos: el proceso que hay detrás y diagnósticos de conflictos, exposición wildcard y fugas de conexiones. También funciona como servidor MCP. [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - Programa para administrar servicios systemd mediante una TUI (interfaz de usuario de terminal).
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - TUI de diagnóstico de disco para un único equipo: ocho pestañas sobre dispositivos, volúmenes, sistemas de archivos, E/S, SMART, archivos frecuentes e información.
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - TUI de diagnóstico de redes en tiempo real: inspección profunda de paquetes de 13 protocolos (TLS, QUIC, HTTP, DNS, SSH, MQTT, SNMP, …), atribución por proceso mediante eBPF/PKTAP, análisis de retransmisiones TCP, identificación de huellas JA4, aislamiento Landlock opcional y paquetes de incidentes de Flight Recorder.
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - TUI de diagnóstico del sistema para un único equipo: doce pestañas sobre CPU, memoria, discos, procesos, GPU, energía, servicios y red, además de un explorador de cronología y un motor de anomalías de información.
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - Findex es un buscador de aplicaciones altamente personalizable que utiliza GTK3.
* [mitnk/cicada](https://github.com/mitnk/cicada) - Shell de Unix similar a bash.
* [mmstick/concurr](https://github.com/mmstick/concurr) - Alternativa a GNU Parallel con arquitectura cliente-servidor.
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - Aplicación GTK3 para previsualizar e instalar las fuentes de Google.
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - Aplicación para cambiar el nombre de series de televisión, con interfaz GTK3 opcional.
* [mxseev/logram](https://github.com/mxseev/logram) - Envía las actualizaciones de los archivos de registro a Telegram.
* [netscanner](https://github.com/Chleba/netscanner) - Analizador de redes con interfaz TUI.
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - Herramienta CLI para ayudar a mantener el control de varios repositorios Git. [![build](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - Alternativa segura y ergonómica a `rm`.
* [nushell/nushell](https://github.com/nushell/nushell) - Un nuevo tipo de shell.
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Herramienta MCP para Terraform: CLI para que asistentes de IA administren entornos de Terraform mediante Model Context Protocol.
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - Herramienta interactiva para seleccionar y ejecutar operaciones de plan/apply de Terraform.
* [orhun/kmon](https://github.com/orhun/kmon) - Administrador del kernel y monitor de actividad de Linux. ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - Alternativa más potente a sysctl(8), con interfaz TUI. ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - Compresión y descompresión de línea de comandos sin complicaciones. [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - Buscador y eliminador eficiente de archivos duplicados.
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - Utilidad GTK3 y CLI para grabar imágenes simultáneamente en varias unidades USB.
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - Daemon de gestión de energía de Linux (interfaz DBus) con herramienta CLI.
* [pueue](https://github.com/nukesor/pueue) - Administra comandos de shell de larga duración. [![GitHub Actions Workflow](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - Aplicación multifunción para buscar duplicados, carpetas vacías, imágenes similares, etc. [![GitHub Actions Workflow](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - Shell de sistema de nueva generación.
* [sharkdp/bat](https://github.com/sharkdp/bat) - Clon de cat(1) con alas. [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - Alternativa sencilla, rápida y fácil de usar a find. [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - Visor hexadecimal de línea de comandos con salida en color para distintas categorías de bytes. [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - Utilidad de terminal para volcado hexadecimal con colores.
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - Visualiza imágenes, vídeos, Markdown y otros documentos en la terminal.
* [skim](https://github.com/skim-rs/skim) - Buscador aproximado.
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - Biblioteca y utilidad multiplataforma para archivos ocultos. [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - Visor de tuberías para terminal, similar a `pv(1)`. [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - Herramienta de compresión de datos sin pérdida que utiliza Zopfli. [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - Comandos cp y rm rápidos.
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - Cliente de escritorio de Git controlado mediante teclado, con gestión de PR, incidencias, debates, CI y notificaciones en GitHub, GitLab y Bitbucket, además de integración con Jira y agentes de IA; Tauri + backend Rust. [![Release](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - TUI rápida y controlada mediante teclado para administrar conexiones SSH. [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - REPL basado en WebAssembly Component Model, con sistema de complementos multilenguaje aislado. [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - Herramienta de diagnóstico de redes. [![build badge](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - Emulador de terminal rápido y listo para usar, creado para programar con IA, con valores predeterminados sin configuración, integración de asistente de IA y configuración Lua compatible con WezTerm. Solo para macOS.
* [uutils/coreutils](https://github.com/uutils/coreutils) - Reescritura multiplataforma de GNU coreutils. [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - Analizador y limpiador del uso de espacio en disco más rápido para Windows, macOS, Linux y FreeBSD. [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - Ejecuta comandos cuando se modifican archivos.
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - Cuenta las líneas de código.
* [ynqa/jnv](https://github.com/ynqa/jnv) - Filtro interactivo de JSON que utiliza jq. [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - Extrae patrones de mensajes de registro no estructurados (en streaming). [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - grep interactivo (para streaming). [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### Planificación de tareas

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - Biblioteca de planificación de tareas escrita en Rust. ![Build Status](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### Editores de texto

* [amp](https://amp.rs) - Inspirado en Vi/Vim.
* [Ferrite](https://github.com/OlaProeis/Ferrite) - Editor Markdown multiplataforma creado con egui, con vista previa en vivo, resaltado de sintaxis y diagramas Mermaid.
* [Fresh](https://github.com/sinelaw/fresh) - Editor de texto e IDE de terminal fácil de usar, potente y rápido, compatible con complementos TypeScript.
* [gchp/iota](https://github.com/gchp/iota) - Editor de texto sencillo.
* [helix](https://github.com/helix-editor/helix) - Editor modal posmoderno inspirado en Neovim/Kakoune. [![build badge](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - Editor diminuto (≤1024 líneas de código), con resaltado de sintaxis, búsqueda incremental y más. [![build badge](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - Editor Markdown portátil y offline-first, creado con Tauri v2. Un único ejecutable, sin telemetría.
* [jamii/focus](https://github.com/jamii/focus) - Editor de texto minimalista con integración integrada del control de versiones jj (Jujutsu).
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - Editor modal combinatorio con varios cursores.
* [Lapce](https://github.com/lapce/lapce) - Editor moderno con backend. Inspirado en el discontinuado [xi-editor] [xi-editor](https://github.com/xi-editor/xi-editor).
* [manyougz/velotype](https://github.com/manyougz/velotype) - Editor Markdown nativo basado en bloques, con renderizado WYSIWYG y modos de edición del código fuente; creado con GPUI y sin una capa WebView.
* [mathall/rim](https://github.com/mathall/rim) - Editor de texto similar a Vim.
* [ox](https://github.com/curlpipe/ox) - ¡Editor de texto independiente escrito en Rust que se ejecuta en tu terminal!
* [SoloMD](https://github.com/zhitongblog/solomd) - Editor Markdown ligero y multiplataforma, con vista previa en vivo y creado con Tauri 2.
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - Editor modal con criterios definidos para simplificar la edición de código desde la terminal.
* [zed](https://github.com/zed-industries/zed) - Editor de código multijugador de alto rendimiento, creado por los autores de Atom y Tree-sitter.

### Procesamiento de texto

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - Readmer compone archivos `README.md` a partir de plantillas Liquid o Jinja2. [![Build Status](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - Búsqueda, ordenación, distancias de edición, alineaciones y generadores de cadenas acelerados con SIMD para x86 AVX2 y AVX-512, y Arm NEON. [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - Resaltador de archivos de registro que destaca números, fechas, direcciones IP, UUID y niveles de registro. [![Run Tests](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - Depurador de expresiones regulares para terminal, con coincidencias en tiempo real, depuración paso a paso, tres motores, generación de código y filtrado de flujos en vivo. [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - Herramienta de plantillas de texto en terminal diseñada para estandarizar mensajes (como los commits de GIT). [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![build badge](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - Kit de herramientas de alto rendimiento para manipular datos CSV. Bifurcado de xsv, con más de 34 comandos adicionales y más. [![Linux build status](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![Windows build status](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![macOS build status](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - Fuentes ANSI atractivas para la consola. ![build badge](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - CLI rapidísima para eliminar comentarios del código mediante gramáticas de tree-sitter.
* [grex](https://github.com/pemistahl/grex) - Herramienta de línea de comandos y biblioteca para generar expresiones regulares a partir de casos de prueba proporcionados por el usuario.
* [harehare/mq](https://github.com/harehare/mq) - Herramienta de línea de comandos y biblioteca para procesar Markdown con una sintaxis similar a jq. [![build badge](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - Herramienta sencilla y rápida de búsqueda de cadenas para las personas.
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - Biblioteca de manipulación de cadenas con búsqueda de patrones, transformación de texto y varios algoritmos de búsqueda (KMP, Boyer-Moore, Aho-Corasick, etc.).
* [Melody](https://github.com/yoav-lavi/melody) - Lenguaje que compila a expresiones regulares y pretende ser más legible y fácil de mantener. [![build badge](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - Herramienta rápida para buscar en JSON, YAML, TOML y otros formatos de serialización mediante una sintaxis intuitiva de consultas de rutas.
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - ripgrep, pero también busca en PDF, libros electrónicos, documentos de Office, zip, tar.gz, etc.
* [ripgrep](https://crates.io/crates/ripgrep) - Combina la facilidad de uso de The Silver Searcher con la velocidad bruta de grep.
* [ruplacer](https://github.com/your-tools/ruplacer) - Busca y reemplaza texto en archivos de código fuente. [![Run tests](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - Búsqueda y reemplazo interactivos en la terminal.
* [sd](https://crates.io/crates/sd) - CLI intuitiva para buscar y reemplazar.
* [sstadick/hck](https://github.com/sstadick/hck) - Sustituto directo de `cut`, más rápido y con más funciones. [![build badge](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - Convierte cualquier archivo (PDF, DOCX, PPTX, XLSX, EPUB, HTML/URL, imágenes, audio y vídeo) en Markdown limpio para agentes de IA; disponible como CLI y servidor MCP. [![build badge](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - ¡Busca archivos (ff) por nombre!
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - Lee líneas de entrada como segmentos de bytes para obtener alta eficiencia.
* [whitfin/runiq](https://github.com/whitfin/runiq) - Forma eficiente de filtrar líneas duplicadas de una entrada desordenada.
* [xsv](https://crates.io/crates/xsv) - Herramienta rápida de línea de comandos para CSV (selección de fragmentos, indexación, selección de columnas, búsqueda, muestreo, etc.).

### Utilidades

* [1History](https://github.com/localfirstapp/1History) - Interfaz de línea de comandos para guardar el historial de Firefox/Chrome/Safari en un único archivo SQLite. [![Build Status](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - Formato de archivo cuyos ficheros se corrompen un poco de forma permanente cada vez que se abren, sin posibilidad de recuperarlos a partir del propio archivo. [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - Utilidad de línea de comandos para convertir claves públicas Ed25519 entre varios formatos de codificación (Base58, Base64, IPFS, iroh, libp2p, OpenSSH, etc.). [![Build Status](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - Herramienta TUI sencilla para probar el teclado.
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - Utilidad de línea de comandos Have I Been Pwned (HIBP) para comprobar fácilmente si se han vulnerado cuentas y contraseñas.
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - Software C2 (comando y control) para orquestar dispositivos físicos.
* [dcapal](https://github.com/dcapal/dcapal) - DcaPal es una herramienta en línea gratuita y sin registro que te ayuda a mantener el equilibrio de tu cartera mediante inversiones de coste medio en dólares.
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - Herramienta CLI sencilla para generar archivos `.gitignore` rápida y fácilmente. [![build-badge](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - Cliente no oficial para instalar Unreal Engine, descargar y administrar recursos, proyectos, complementos y juegos comprados en Epic Games Store.
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - Aplicación de autenticación OTP (contraseña de un solo uso) para la línea de comandos. ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![build badge](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - Versión rapidísima de tmux-fingers para copiar y pegar en tmux como en vimium/vimperator.
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - Sincroniza los paquetes instalados entre varios equipos.
* [gitlogue](https://github.com/unhappychoice/gitlogue) - Salvapantallas TUI que visualiza el historial de commits de Git en tu terminal.
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - Colección útil de herramientas de línea de comandos para ayudar en el desarrollo, incluidas conversión, códecs, hashing, cifrado, etc.
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - Oficina de pixel art en la terminal que muestra sesiones de Claude Code como compañeros animados en tiempo real. [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - Gestor y acelerador de descargas de código abierto y alto rendimiento que divide cada archivo entre conexiones paralelas y fuentes espejo. Incluye asignación dinámica de rangos y recuperación de bloqueos en tiempo real para Windows, macOS y Linux.
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - Servidor RDP nativo de Wayland, creado sobre IronRDP, que proporciona acceso a escritorios remotos en entornos Linux Wayland (GNOME, KDE, COSMIC, compositores wlroots y más) sin X11.
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - Gestor de notas Markdown para la terminal. [![Crate](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![Build Status](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - Genera paletas de colores a partir de imágenes o colores mediante plantillas.
* [Mobslide](https://github.com/thewh1teagle/mobslide) - Aplicación de escritorio que convierte tu smartphone en un control remoto para presentaciones.
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - Cliente GUI de escritorio multiplataforma para FRP (frpc), que permite a usuarios sin conocimientos técnicos exponer servicios locales a Internet con un solo clic. [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - TUI para ejecutar varios procesos.
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - TUI sencilla para ver y controlar contenedores Docker.
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - Genera paquetes Nix a partir de URL, con obtención anticipada de hashes, inferencia de dependencias, detección de licencias y más. [![build-badge](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - Visor de flake.lock similar a ranger. [![build-badge](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - Genera llamadas de recuperación de Nix a partir de URL de repositorios. [![build-badge](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - Utilidad para cambiar nombres en lote, dirigida a desarrolladores.
* [pastel](https://github.com/sharkdp/pastel) - Ayuda a trabajar con colores: genera, mezcla y crea colores aleatorios.
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - Aplicación de reloj para terminal con hora local, temporizador y cronómetro. [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - Escribe licencias en stdout. [![GitHub Actions](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - Proxy SIP definido por software, compatible con registro, presencia y B2BUA. Alternativa a Freeswitch/FreePBX.
* [rleeon/hoard](https://github.com/rleeon/hoard) - Sistema de copia de seguridad y sincronización de partidas guardadas, con detección automática, instantáneas versionadas y almacenamiento autoalojado. [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - Aplicación rápida de línea de comandos que usa Tokio para ejecutar comandos en paralelo. Interfaz similar a GNU Parallel o xargs. [![Crate](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![Build Status](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - Software de escritorio remoto, una excelente alternativa a TeamViewer y AnyDesk.
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - Copias de seguridad rápidas, cifradas y con deduplicación, impulsadas por Rust. [![Version](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - Sistema de estimación de posturas humanas que preserva la privacidad, mediante información de estado del canal WiFi (CSI) y aprendizaje automático.
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - Utilidad para codificar y decodificar imágenes de códigos QR. [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - Genera bytes seudoaleatorios. [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - Pantalla de inicio personalizable para terminal, que se muestra al iniciar el shell y al cambiar de directorio, con paneles específicos para cada directorio. [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - Implementación en Rust de [age] [age](https://github.com/FiloSottile/age).
* [suckit](https://github.com/Skallwar/suckit) - Visita recursivamente un sitio web y descarga su contenido en el disco. [![Crate](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![Build Status](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - Espacio de trabajo JSON de escritorio, local-first y autocontenido, creado con Rust y Tauri para formatear, editar, comparar, convertir, validar y extraer registros.
* [Tabiew](https://github.com/shshemi/tabiew) - Aplicación TUI ligera para ver y consultar archivos CSV.
* [Tail Tales](https://github.com/davidmoreno/tailtales) - Visor de registros TUI compatible con logfmt. [![Crate](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - TUI de Git controlable con el ratón y panel para varios repositorios.
* [television](https://github.com/alexpasmantier/television) - Buscador aproximado TUI de propósito general rapidísimo. ![GitHub branch check runs](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - Aplicación de escritorio de alto rendimiento y con muchas funciones para visualizar y explorar archivos JSON y NDJSON, compatible con complementos basados en WASM. [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - Cliente TUI sencillo de Git/Hg, centrado en atajos de teclado.
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![Build](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - Implementación alternativa de la API del servidor de Bitwarden, escrita en Rust.
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - Aplicación meteorológica para terminal con animación ASCII. [![Release](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - Transcribe audio o vídeo en cualquier idioma y plataforma.
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warp es un terminal moderno, rapidísimo y acelerado por GPU, creado para aumentar la productividad individual y del equipo.
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - Sustituto nativo de `tree` para Windows, basado en Rust, con compatibilidad de entrada/salida a nivel de diferencias durante ejecuciones correctas, muchas más funciones —incluidas exclusiones esenciales y compatibilidad con `.gitignore`— y un rendimiento varias veces más rápido.
* [wrestic](https://github.com/alvaro17f/wrestic) - Envoltorio para restic.
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - Asistente meteorológico para la terminal. [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - Visualizador multiplataforma de pulsaciones de teclas y clics del ratón para screencasts, streaming y presentaciones. Funciona en Windows, macOS y Linux (X11 y Wayland). [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - Gestor de descargas con todas las funciones. [![Release-Badge](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - Gestor de descargas multiprotocolo con motor Rust/Tokio, compatible con HTTP/FTP, BitTorrent, eD2K, HLS y DASH; incluye segmentación dinámica al estilo IDM, extensiones de navegador y extremo JSON-RPC compatible con aria2.

### Vídeo

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - Descargador de vídeo sencillo.
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - Aplicación de estabilización de vídeo que utiliza datos del giroscopio.
* [harlanc/xiu](https://github.com/harlanc/xiu) - Servidor en directo potente y seguro (rtmp/httpflv/hls/relay). [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - Monitor de transmisiones HLS, DASH e IPTV en terminal, con sondas de cable, métricas TR 101 290 y SCTE-35.
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - Multiplexor MP4 íntegramente en Rust y sin dependencias externas, que crea archivos MP4 compatibles con los estándares a partir de fotogramas codificados.
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - Aplicación de escritorio para descargar vídeos, cursos, música y libros de más de 1.800 sitios, con reproductor, lector y biblioteca de estudio integrados. [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - Combina archivos de vídeo y audio mediante CLI.
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - Servidor multimedia DLNA compatible con Linux, macOS, Windows y Docker.
* [xiph/rav1e](https://github.com/xiph/rav1e) - El codificador AV1 más rápido y seguro.

### Virtualización

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - Máquina virtual ligera para cargas de trabajo en contenedores: [Firecracker Microvm] [Firecracker Microvm](https://firecracker-microvm.github.io/).
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - Implementación de máquinas virtuales ligeras (VM) que se comportan y rinden como contenedores, pero ofrecen las ventajas de aislamiento y seguridad de las VM.
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - Biblioteca ligera de aislamiento microVM para ejecutar código aislado en milisegundos. Compatible con SDK de Rust, Python y TypeScript e imágenes de contenedor compatibles con OCI. [![GitHub release](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - Herramienta de contenedorización sin daemon.
* [youki-dev/youki](https://github.com/youki-dev/youki) - Entorno de ejecución de contenedores. [![build badge](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### Web

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - Extracción de contenido web para LLM con identificación TLS, servidor MCP y sin necesidad de navegador. [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - Permite exponer un servidor web que se ejecuta localmente mediante una URL pública.
* [cfal/tobaru](https://github.com/cfal/tobaru) - Reenviador de puertos con listas de permitidos, enrutamiento basado en reglas para IP y SNI/ALPN de TLS, compatibilidad con iptables, reenvío por turnos (balanceo de carga) y recarga en caliente.
* [hook0/hook0](https://github.com/hook0/hook0) - Plataforma de webhooks como servicio de código abierto que facilita el envío de webhooks a desarrolladores de SaaS.
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵 Puente de ActivityPub autoalojado y totalmente automatizado para sitios estáticos. [![release](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - Infraestructura autoalojada para la indexación SEO, que administra mapas del sitio, envíos de URL e indexación en motores de búsqueda.
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - Todo en uno.
   rastreador web, auditor, archivador sin conexión y exportador de Markdown preparado para IA, con controles de calidad de CI/CD
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - Motor de navegador autocontenido que obtiene, renderiza y extrae contenido web como Markdown, JSON o capturas de pantalla, sin Chromium ni clave de API. CLI, Python y servidor MCP. [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - Agregador de enlaces / clon de Reddit para el fediverso. [![Build Status](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - El software MASQ Node ofrece una malla descentralizada de nodos para que usuarios de todo el mundo accedan al contenido normal de Internet: la siguiente evolución tecnológica más allá de Tor y las VPN. [![build badge](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - Aplicación de blogs federada con ActivityPub.
* [Redlib](https://github.com/redlib-org/redlib) - Interfaz privada alternativa a Reddit, originada en [Libreddit] [Libreddit](https://github.com/libreddit/libreddit).
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - Sistema modular de procesamiento de fuentes RSS.
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - Acortador de URL autoalojado, sencillo y rapidísimo, sin funciones innecesarias.[![release](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - Plataforma de chat centrada en el usuario, creada con tecnologías web modernas.
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - Navegador antidetección de código abierto con perfiles aislados ilimitados, motores Chromium/Firefox, suplantación de huellas digitales, compatibilidad con proxy/VPN, API local y servidor MCP, y sincronización en la nube cifrada de extremo a extremo. [![GitHub release](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### Servidores web

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - Biblioteca para crear servicios de red rápidos, fiables y evolutivos.
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - ¡Kit de herramientas de proxy MITM 🦀! Para HTTP/1, HTTP/2 y WebSockets, con capacidades SSL/TLS. [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - Servidor proxy de reenvío compatible con encadenamiento de proxies, inspección de protocolos, interceptación MITM, adaptación ICAP y modo transparente. [![CodeCoverage](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - Biblioteca de servidor HTTP Rust ligera, de alto rendimiento y multiplataforma, creada sobre Tokio; incorpora compatibilidad con middleware, WebSocket, SSE y TCP sin procesar. [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - Pequeño servidor proxy inverso, HTTPS, CORS, alojamiento de archivos estáticos y motor de plantillas (minijinja) [crates.io](https://crates.io/crates/minirps).
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 🪂 Servidor HTTP/BitTorrent atractivo y sin complicaciones. Seguro, GUI, bonito y rápido.
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - Servidor web estático rapidísimo, con enrutamiento, plantillas y seguridad en un único binario que puedes configurar sin escribir código. [![build badge](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - Servicio mínimo para subir archivos y compartirlos como pastebin. ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - Marco de servicios modular para mover y transformar paquetes de red, utilizado para crear clientes web, servidores y, sobre todo, proxies.
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - Demostración de cómo utilizar un servidor GraphQL como esquema remoto con [Hasura] [Hasura](https://hasura.io/). ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - Servidor web asíncrono rapidísimo para servir archivos estáticos. ⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - Pequeña herramienta CLI multiplataforma y autocontenida que permite descargar el binario y servir archivos mediante HTTP. [![build badge](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - Aloja estas cosas, por favor: servidor HTTP básico para alojar una carpeta de forma rápida y sencilla.
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - Servidor HTTP estático sencillo.
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - Servidor HTTP minimalista y rapidísimo, creado para aplicaciones modernas de Rust. Proporciona hosts virtuales, SNI, contenido estático, proxy inverso, HTTP 1/2/3 y Tokio o Smol como entornos de ejecución asíncronos.
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - Proxy HTTP/Socks5 asíncrono rápido escrito en Rust.

### Automatización de flujos de trabajo

* [cowork-forge](https://github.com/sopaco/cowork-forge) - Plataforma multiagente nativa de IA que orquesta agentes especializados mediante un proceso de siete fases para transformar ideas en software listo para producción. [![release](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML (Workflow Orchestration Markup Language) es un lenguaje de marcado para automatizar flujos de trabajo, con núcleo de ejecución Rust. Tan legible como HTML, versionable como código y tan potente como JavaScript: sin el caos de los creadores visuales ni límites para lo que puede hacer cada paso. [![release](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - Estudio de datos visual y de código abierto (ETL/ELT) que se ejecuta íntegramente en DuckDB. Arrastra fuentes, transformaciones y destinos a un lienzo y compílalos a SQL DuckDB puro; incluye más de 300 conectores y un servidor MCP integrado. [![release](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## Herramientas de desarrollo

* [7df-lab/devo](https://github.com/7df-lab/devo) - Agente de programación ligero e independiente del modelo, que se ejecuta como un único binario. Rápido, eficiente en tokens y altamente personalizable. [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - Agente local de IA y de código abierto que automatiza tareas de ingeniería.
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - TUI para revisión de código con atajos de Vim. Visor continuo de diferencias, comentarios al estilo PR y exportación a GitHub/GitLab/portapapeles. Compatible con git, jj y mercurial. [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - Limpia de forma segura ramas de Git obsoletas. [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - Gestor de proyectos y paquetes Python extremadamente rápido, escrito en Rust. [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - Cliente API TUI con numerosas funciones, creado en Rust. ATAC es gratuito, de código abierto, funciona sin conexión y no requiere cuenta.
* [bacon](https://github.com/Canop/bacon) - Comprobador de código Rust en segundo plano, similar a cargo-watch.
* [biome](https://github.com/biomejs/biome) - Cadena de herramientas para proyectos web, diseñada para ofrecer funciones de mantenimiento. Biome proporciona formateador y linter, utilizables mediante CLI y LSP.
* [cachix/devenv](https://github.com/cachix/devenv) - Entornos de desarrollo rápidos, declarativos, reproducibles y componibles mediante Nix. [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - Piloto automático para Claude Code con cerebro LLM local (ollama/llama.cpp/vLLM) que aprende a aprobar o rechazar automáticamente llamadas a herramientas. Orquestación de varias sesiones, supervisión del estado y control de gastos. [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Lints de Rust.
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - Genera un registro de cambios a partir de metadatos de Git ([conventional changelog] [conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)).
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - Foundations es una biblioteca Rust modular, diseñada para facilitar el escalado de programas para sistemas distribuidos de nivel de producción.
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - Visualiza la propiedad y los tiempos de vida en Rust. [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - Crea una aplicación web moderna con Rust y React ejecutando un único comando. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - Crea ctags/etags para un proyecto Cargo y todas sus dependencias.
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - Anonimizador de bases de datos potente y con reglas flexibles. [![build badge](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - Resaltador de sintaxis para Git y las diferencias de código.[![build badge](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - Linter para archivos `.env`. [![build badge](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - Infraestructura Git programable sobre almacenamiento de objetos.
* [envio](https://github.com/humblepenguinn/envio) - Herramienta CLI moderna y segura para administrar variables de entorno. [![build badge](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - Servidor de lenguaje Markdown para PKM, compatible con wikilinks estilo Obsidian, backlinks y notas diarias en Neovim, VSCode, Zed, Helix y Kakoune.
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - Versionado semántico, registro de cambios y versiones etiquetadas basados en Conventional Commits, con compatibilidad con monorepos y 16 formatos de archivos de versión. [![build badge](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - Repositorio de código nativo de grafos para personas y agentes de IA. Kin te ayuda a ti y a tus agentes a comprender qué podría afectar un cambio de código antes de realizarlo.
* [Flox](https://github.com/flox/flox) - Flox combina un entorno virtual y un gestor de paquetes.
* [forgecode](https://github.com/tailcallhq/forgecode) - Programador de pares con IA para terminal, que genera y edita código. [![Website](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - Capa de API para crear paneles de control para clientes 10 veces más rápido.
* [fw](https://github.com/brocode/fw) - Aumenta la productividad en el espacio de trabajo. [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - Herramienta de línea de comandos que ejecuta destinos de make mediante un buscador aproximado con ventana de previsualización. [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - Programa que enumera estadísticas relacionadas con el uso de código inseguro en un crate y todas sus dependencias. [![Build Status](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - Generador de registros de cambios altamente personalizable que sigue las especificaciones de Conventional Commits. ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Marco de trabajo para generar mensajes de commit de Git y registros de cambios.
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - TUI visual del reflog de Git para deshacer errores. [![crate](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![build badge](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - Implementación íntegra de Git en Rust, con crates de infraestructura de alto rendimiento y herramientas CLI para clonar, obtener, consultar el estado, comparar diferencias, crear commits, configurar, administrar referencias y más. [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - Recarga código Rust en caliente. [![build badge](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - Guarda comandos con marcadores de posición y búscalos o complétalos automáticamente en cualquier momento. [![crate](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![build badge](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - Alternativa a pre-commit más rápida, sin dependencias y compatible directamente, escrita en Rust.
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - Sistema de control de versiones compatible con Git, con CLI sencilla, gestión de conflictos integrada y rebase automático. [![Release](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - Ejecutor de comandos práctico para tareas específicas de proyectos.
* [mask](https://github.com/jacobdeichert/mask) - Ejecutor de tareas CLI definido mediante un archivo Markdown sencillo. [![build badge](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - Gestor políglota de versiones de herramientas y ejecutor de tareas; sustituto directo de asdf con mayor rendimiento. [![build badge](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - Extensión que añade enlaces `<a>` a referencias en instrucciones `mod`, `use` y `extern crate` en GitHub.
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - Indexador de código semántico con grafo de conocimiento GraphRAG y servidor MCP. Análisis de AST con tree-sitter, búsqueda estructural ast-grep, almacenamiento vectorial LanceDB y vista de firmas de código. Modos CLI y servidor MCP para asistentes de IA como Claude/Cursor/Windsurf. [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - Panel de terminal para revisar diferencias de agentes de programación y enviar comentarios sobre líneas a Claude Code, Codex, OpenCode o Pi. [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - Herramienta rápida de gestión de paquetes y flujos de trabajo para proyectos multilenguaje, basada en el ecosistema conda.
* [ptags](https://github.com/dalance/ptags) - Envoltorio paralelo de universal-ctags para repositorios Git.
* [Racer](https://github.com/racer-rust/racer) - Autocompletado de código para Rust.
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - Motor de búsqueda local-first de texto completo en código, para agentes de programación con IA. Índice de trigramas, consultas de menos de 100 ms, modo servidor MCP y 18 lenguajes mediante tree-sitter.
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - Práctica extensión de navegador para buscar crates y documentación desde la barra de direcciones (omnibox). [![Build Status](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - Instalador de la cadena de herramientas Rust. [![build badge](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - Intérprete de «shebang» independiente del lenguaje que permite crear scripts de un solo archivo en lenguajes compilados. [![Build Status](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - Espacio de trabajo de escritorio que ejecuta varios agentes de programación con IA en paralelo, cada uno en su propio árbol de trabajo de Git, con detección de estado, diferencias, gestión de PR y centro de proxy MCP. [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - Gestión de entornos de ingeniería nativa de IA que prepara tu base de código para los agentes.
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - Corrector ortográfico de código fuente.
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - Cadena unificada de herramientas de desarrollo web que combina Vite, Vitest, Oxlint, Rolldown y más en una única CLI impulsada por Rust (`vp`).
* [VT Code](https://crates.io/crates/vtcode) - Agente de programación para terminal que combina una TUI moderna con comprensión profunda y semántica del código, impulsada por tree-sitter y ast-grep.
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - Herramienta de diferencias estructurales que entiende la sintaxis y es compatible con más de 30 lenguajes de programación.
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - Entorno de ejecución de contexto para agentes de programación con IA: servidor MCP y hook de shell que comprime la salida de herramientas y terminales para reducir el uso de tokens de LLM; análisis con Tree-sitter y caché de sesiones. [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### Sistema de compilación

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - Herramienta integral para crear scaffolding fullstack, compatible con Rust (Axum, Actix Web, Leptos, Dioxus, SeaORM, SQLx, tonic, async-graphql), además de TypeScript, Go y Python: código listo para ti o para tu agente de IA.
* [Cargo](https://crates.io/) - El gestor de paquetes de Rust.
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - Subcomando configurable para simplificar las pruebas, compilación y mucho más en todas las combinaciones de funciones. [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - Utilidad para comparar micropruebas de rendimiento.
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - Instalador rápido de binarios para crates Rust, que descarga artefactos precompilados en lugar de compilar desde el código fuente. [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - Extensión de Cargo que genera recetas de BitBake utilizando las clases de meta-rust.
  * [cargo-cache](https://crates.io/crates/cargo-cache) - Inspecciona, administra y limpia la caché de Cargo (`~/.cargo/`/`${CARGO_HOME}`); muestra tamaños, etc. [![Build Status](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - Envoltorio de `cargo rustc -- -Zno-trans`, útil para acelerar la compilación cuando solo necesitas comprobar la corrección.
  * [cargo-commander](https://crates.io/crates/cargo-commander) - Subcomando de `cargo` para ejecutar comandos CLI de forma similar a la sección scripts de `package.json`. [![Build and test](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - Enumera las cantidades y detalles del código fuente de proyectos Cargo, incluidas estadísticas de código inseguro.
  * [cargo-deb](https://crates.io/crates/cargo-deb) - Genera paquetes binarios Debian.
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - Crea grafos de dependencias para proyectos Cargo mediante cargo metadata y graphviz.
  * [cargo-do](https://crates.io/crates/cargo-do) - Ejecuta varios comandos de cargo seguidos.
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - Extensión de Cargo que genera ebuilds utilizando las eclasses integradas.
  * [cargo-edit](https://crates.io/crates/cargo-edit) - Permite añadir y enumerar dependencias leyendo y escribiendo el archivo Cargo.toml desde la línea de comandos.
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - Generador de proyectos Rust que aprovecha un repositorio Git preexistente como plantilla.
  * [cargo-info](https://crates.io/crates/cargo-info) - Consulta crates.io desde la línea de comandos para obtener información de crates.
  * [cargo-license](https://crates.io/crates/cargo-license) - Subcomando de Cargo para consultar rápidamente las licencias de todas las dependencias.
  * [cargo-limit](https://crates.io/crates/cargo-limit) - Cargo con menos ruido: omite las advertencias hasta que se corrijan los errores, integración con Neovim, etc. [![build badge](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - Herramienta sencilla para detectar dependencias no utilizadas en Cargo.toml.
  * [cargo-make](https://crates.io/crates/cargo-make) - Ejecutor de tareas y herramienta de compilación. [![build badge](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - Complemento de Cargo que muestra una vista general de los módulos de un crate en forma de árbol.
  * [cargo-multi](https://crates.io/crates/cargo-multi) - Ejecuta el comando cargo especificado en varios crates.
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - Muestra cuándo hay versiones más recientes de dependencias de Rust o cuándo están desactualizadas.
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - Subcomando de Cargo para crear un README a partir de la documentación de tu crate. [![build badge](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - Herramienta para publicar proyectos Cargo administrados con Git: compila, etiqueta, publica, genera documentación y sube los cambios. [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - Permite ejecutar rápida y fácilmente «scripts» de Rust que pueden utilizar el ecosistema de paquetes de Cargo.
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - Busca dependencias no utilizadas.
  * [cargo-update](https://crates.io/crates/cargo-update) - Subcomando de Cargo para comprobar y aplicar actualizaciones a ejecutables instalados.
  * [cargo-watch](https://crates.io/crates/cargo-watch) - Utilidad de Cargo para compilar proyectos cuando cambian los archivos fuente.
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - Expande macros en el código fuente.
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - Útil para integrar una biblioteca Rust en un proyecto CMake.
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - Proyecto de ejemplo que muestra el uso de CMake con Rust.
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/) es una herramienta de compilación a gran escala creada con Rust.
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - La herramienta de compilación de Rust rapidísima.
* Acciones de GitHub
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - Acción de GitHub para Rust.
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - Cadenas de herramientas Rust y versión nocturna de rust-analyzer para Nix. [![build-badge](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/) es un sistema de compilación rápido, escalable y fácil de usar para bases de código de cualquier tamaño, creado con Rust.
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - Empaquetador de JavaScript/TypeScript escrito en Rust, pensado para convertirse en el empaquetador de Vite.
* [rui314/mold](https://github.com/rui314/mold) - Enlazador moderno y de alta velocidad para Linux, macOS y Windows (ELF, Mach-O, PE).
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com) es una plataforma de ejecución remota de backend escrita en Rust para sistemas de compilación cliente como [Buck2](https://buck2.build/), [Bazel](https://bazel.build/), [Pants](https://www.pantsbuild.org/), etc. [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - Sistema de compilación de alto rendimiento para monorepos de JavaScript y TypeScript, escrito en Rust. Incluye cálculo incremental, caché remota y ejecución paralela de tareas.
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - Herramienta de versionado dinámico que genera una versión en cada compilación desde cualquier estado de Git, con salida SemVer, PEP 440 y CalVer. [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### Depuración

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - Interfaz web para gdb que permite depurar C, C++, Rust y Go.
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - Depurador moderno para Linux x86-64, escrito en Rust para programas Rust.
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - Trazador de execve{,at} y del comportamiento previo a la ejecución; lanzador de depuradores.
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - Extensión de LLDB para [Visual Studio Code](https://code.visualstudio.com/).

### Despliegue

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - Imágenes de Docker para compilar binarios estáticos de Rust mediante musl-libc y musl-gcc, con versiones estáticas de bibliotecas C útiles.
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - Proyecto de ejemplo para crear imágenes Docker de Rust muy pequeñas.
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - Generador de Dockerfile a partir de una descripción simplificada en formato YAML o JSON. ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - Imagen de Docker de Rust con varias versiones y herramientas musl.
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - Herramienta e imágenes precompiladas para almacenar en caché dependencias remotas compiladas entre compilaciones de Docker.
  * [moghtech/komodo](https://github.com/moghtech/komodo) - Herramienta para compilar y desplegar software en muchos servidores, con interfaz web, API y sin límites de servidor.
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - Imágenes de Docker para compilar binarios estáticos de Rust mediante musl-cross. [![Build](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - Imagen oficial de Docker de Rust.
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - Espera a que haya varios servicios disponibles. ![Build](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - Buildpack para aplicaciones Rust en Heroku.
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - Publica crates desde CI, con generación de registros de cambios y comprobación de semver. [![build badge](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### Sistemas integrados

[Rust Embedded](https://rust-embedded.org/) se centra en mejorar la experiencia integral de usar Rust en entornos con recursos limitados y plataformas no tradicionales. Consulta [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust) para ver una lista seleccionada y más extensa de recursos de Rust integrado.

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - Componentes reutilizables para Arduino Uno.
* Compilación cruzada
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - Todo lo que necesitas saber para compilar programas Rust de forma cruzada.
  * [japaric/xargo](https://github.com/japaric/xargo) - Compilación cruzada de programas Rust a destinos bare-metal personalizados, como ARM Cortex-M, sin complicaciones.
* Herramientas de desarrollo
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - TUI multiplataforma para supervisar puertos serie y RTT, con macros de entrada hex/@tag, búsqueda, grabación de sesiones y complementos Lua. [![Build Status](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - Kit de herramientas de depuración integrada para flashear y depurar microcontroladores ARM y RISC-V.
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - Monitor serie minimalista con TUI de trazador.
* Espressif
  * [esp-rs](https://github.com/esp-rs) - Hogar de numerosos proyectos comunitarios que permiten utilizar el lenguaje de programación Rust en diversos SoC y módulos fabricados por Espressif Systems.
* Firmware
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - oreboot es una bifurcación de coreboot, escrita en Rust y sin C.
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - HAL de Rust para la familia de dispositivos nRF.

### FFI

Consulta también [la interfaz de función externa](https://doc.rust-lang.org/book/first-edition/ffi.html), [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/) (una colección de ejemplos de código Rust utilizado desde otros lenguajes) y [ejemplos de FFI escritos en Rust](https://github.com/alexcrichton/rust-ffi-examples).

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - Generador de código para crear enlaces seguros de Rust a bibliotecas C basadas en GObject.
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - Genera archivos de cabecera C a partir de archivos fuente Rust. Se utiliza en Gecko para WebRender.
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - Genera archivos de cabecera C a partir de archivos fuente Rust.
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - Enlaces Rust para la biblioteca C librclone.
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - Genera enlaces de C# para archivos fuente Rust.
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - Interoperabilidad segura entre Rust y C++. [![build badge](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - Incrusta código C++ directamente en Rust. [![Build status](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Generador de enlaces de Rust.
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - Puente Rust seguro para crear funciones NIF de Erlang.
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - Utiliza Java desde Rust.
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - Utiliza Rust desde Java.
  * [j4rs](https://crates.io/crates/j4rs) - Utiliza Java desde Rust.
  * [jni](https://crates.io/crates/jni) - Utiliza Rust desde Java.
  * [jni-sys](https://crates.io/crates/jni-sys) - Definiciones de Rust correspondientes a jni.h.
  * [rucaja](https://crates.io/crates/rucaja) - Utiliza Java desde Rust.
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Enlaces de Lua 5.3 para Rust.
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Enlaces seguros de Rust a Lua 5.1.
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - Enlaces de alto nivel a Lua 5.4/5.3/5.2/5.1 (incluido LuaJIT) y Roblox Luau para Rust, con compatibilidad para async/await. [![build badge](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - Envoltorio Lua 5.3 de alto nivel y sin coste para Rust.
  * [tomaka/hlua](https://github.com/tomaka/hlua) - Biblioteca Rust para interactuar con Lua.
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - Enlaces seguros de mruby para Rust.
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - Forma sencilla de generar un módulo de Node.js con Rust.
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - Enlaces de Rust para escribir módulos nativos de Node.js seguros y rápidos.
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - Módulo escrito en Rust que utiliza N-API y ofrece funciones de interfaz FFI para Node.js.
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Enlaces y envoltorio de Objective-C Runtime para Rust.
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - Marco de trabajo para escribir extensiones PHP en Rust puro y seguro siempre que sea posible.
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer Prolog es un sistema Prolog ISO y de software libre, escrito en Rust.
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Enlaces de Python.
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - Extensión para setuptools de Python que permite distribuir bibliotecas enlazadas dinámicamente en wheels de Python de la forma más portátil posible.
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Enlaces de Rust para el intérprete de Python.
  * [RustPython](https://github.com/RustPython/RustPython) - Intérprete de Python escrito en Rust. [![Build Status](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - Extensiones nativas de Ruby escritas en Rust.
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - Extensiones nativas de Ruby escritas en Rust y viceversa.
* WebAssembly
  * [rhysd/wain](https://github.com/rhysd/wain) - wain: intérprete de WebAssembly desde cero en Rust seguro y sin dependencias. [![build badge](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - Proyecto para facilitar la interacción de alto nivel entre módulos wasm y JS.
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: empaqueta el wasm y publícalo en npm.

### Formateadores

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - Linter y formateador de código Python extremadamente rápidos. [![Actions status](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - Plataforma de formato de código conectable y configurable. [![build badge](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - Formateador de código Rust con criterios definidos, que corrige automáticamente la sintaxis incorrecta (complemento comunitario de [Prettier](https://prettier.io/)).
* [rustfmt](https://github.com/rust-lang/rustfmt) - Formateador de código Rust mantenido por el equipo de Rust e incluido en Cargo.
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - Linter y formateador Markdown rápido, escrito en Rust. [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### IDE

Consulta también [Rust Tools](https://rust-lang.org/tools/).

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Complemento de desarrollo Rust para Eclipse IDE, con una experiencia de edición completa mediante integración con el servidor de lenguaje Rust Analyzer, el ejecutor de Cargo y el depurador gdb.
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - Autocompletado (consulta también [company](https://company-mode.github.io) y [auto-complete](https://github.com/auto-complete/auto-complete)).
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - Compatibilidad de Rust con [Flycheck](https://github.com/flycheck/flycheck).
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Modo principal de Rust.
    * [rustic](https://github.com/emacs-rustic/rustic) - Entorno de desarrollo Rust para Emacs. [![build badge](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - IDE en línea con compatibilidad completa con Rust, basado en Rust Language Server.
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - Compatibilidad nativa con Rust y Cargo desde la versión 3.22.2.
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - Complemento de Rust para IntelliJ Platform.
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - Cliente [LSP](https://microsoft.github.io/language-server-protocol/). Implementado en Rust y compatible con rls de forma predeterminada.
  * [lapce](https://github.com/lapce/lapce) - Editor de código rapidísimo y potente, escrito en Rust. [![build badge](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - IDE de Rust.
  * [RustRover](https://www.jetbrains.com/rust/) - Potente IDE de Rust de JetBrains, gratuito para uso individual no comercial.
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - Paquete oficial de Rust.
  * [Vim](https://vim.sourceforge.io/) - El editor de texto ubicuo.
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - Cliente [LSP](https://microsoft.github.io/language-server-protocol/). Implementado en Rust y compatible con rls de forma predeterminada.
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - Complemento de Neovim para una integración fluida con los comandos de Cargo.
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - Complemento para administrar dependencias de crates.io.
    * [rust.vim](https://github.com/rust-lang/rust.vim) - Proporciona detección de archivos, resaltado de sintaxis, formato, integración con Syntastic y más.
    * [vim-racer](https://github.com/racer-rust/vim-racer) - Permite que vim utilice [Racer](https://github.com/racer-rust/racer) para autocompletar y navegar por el código Rust.
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Extensión de Visual Studio para Rust. [![Build status](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - Extensión de LLDB.
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - Administra tus dependencias fácilmente.
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - Compatibilidad con TOML en vscode.
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - Formateador de código Rust con criterios definidos, que corrige automáticamente la sintaxis incorrecta (complemento comunitario de [Prettier](https://prettier.io/)).
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - Servidor de lenguaje Rust alternativo a RLS.

### Perfilado

* [Bencher](https://github.com/bencherdev/bencher) - Conjunto de herramientas de benchmarking continuo reutilizables, diseñadas para detectar regresiones de rendimiento en CI.
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - Biblioteca de benchmarking basada en estadísticas.
* [Bytehound](https://github.com/koute/bytehound) - Perfilador de memoria para Linux.
* [cong-or/hud](https://github.com/cong-or/hud) - Averigua qué está bloqueando tu entorno de ejecución de Tokio. Perfilador eBPF sin instrumentación.
* [Divan](https://github.com/nvzqz/divan) - Biblioteca de benchmarking sencilla pero potente, con perfilado de asignaciones.
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - Biblioteca de cronómetro.
* Gráficos de llamas
  * [llogiq/flame](https://github.com/llogiq/flame) - Herramienta intrusiva para perfilar con flamegraphs en Rust.
* [g3bench](https://github.com/bytedance/g3) - Herramienta de benchmarking compatible con HTTP 1.x, HTTP 2, HTTP 3, handshake TLS, DNS y Cloudflare Keyless.
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - Perfilador sencillo que muestra exactamente dónde consume tiempo y asigna memoria tu código. [![GH Actions](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - Herramienta de benchmarking para la línea de comandos.

### Servicios

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - Convierte tu base de código en documentación profesional de arquitectura. [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - Detecta dependencias obsoletas o inseguras.
* [docs.rs](https://docs.rs) - Generación automática de documentación para crates.

### Análisis estático

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - Herramienta de análisis de acoplamiento para Rust basada en el marco «Balancing Coupling in Software Design» de Vlad Khononov.
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - Verificador deductivo para Rust que demuestra la ausencia de pánicos, desbordamientos y fallos de aserciones al traducir el código a la plataforma de verificación Why3.
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - Detector de código duplicado que identifica cuerpos de funciones mediante huellas (winnowing), aunque se hayan renombrado. Incluye puntuación de código repetido del repositorio, gráfico histórico de duplicación y una barrera de CI que señala la función original para reutilizarla. Compatible con Rust y otros 11 lenguajes. [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - Detector de copiar y pegar para código fuente que encuentra bloques duplicados en más de 220 formatos de archivo. [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - Intérprete abstracto que opera sobre la representación intermedia de nivel medio (MIR) de Rust. [![Continuous Integration](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - Plataforma que ayuda a los programadores de Rust a desarrollar y utilizar herramientas avanzadas de análisis estático que van más allá de las proporcionadas por el compilador rustc.
* [static_assertions](https://crates.io/crates/static_assertions) - Aserciones en tiempo de compilación para garantizar el cumplimiento de invariantes.
* [verus-lang/verus](https://github.com/verus-lang/verus) - Rust verificado para código de sistemas de bajo nivel.
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - Herramienta de análisis estático para GitHub Actions que detecta problemas de seguridad, como inyección de plantillas, filtración de credenciales, permisos excesivos y commits suplantados. [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### Pruebas

[[test](https://crates.io/keywords/test), [testing](https://crates.io/keywords/testing)]
* Aserciones y comparadores
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![Latest Version](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - Colección de comparadores JSON para googletest-rust, compatible con rutas, matrices y objetos. [![Build Status](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* Cobertura de código
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - Encuentra funciones complejas sin pruebas combinando la complejidad ciclomática con la cobertura LCOV (métrica CRAP) y establece una barrera de CI basada en la puntuación.
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - Calidad de código y cobertura de pruebas para agentes de programación: Jev puntúa cada archivo fuente para que el agente sepa qué corregir primero. [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - Herramienta de cobertura de código.
* Integración continua
  * [trust](https://github.com/japaric/trust) - Plantilla de Travis CI y AppVeyor para probar un crate Rust en cinco arquitecturas y publicar versiones binarias para Linux, macOS y Windows.
* Marcos de trabajo y ejecutores
  * [AlKass/polish](https://github.com/AlKass/polish) - Marco de pruebas/pruebas basadas en desarrollo mínimas. [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - Convierte tus pruebas Rust en documentación. [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - Extensión de Cargo para simplificar la ejecución de pruebas de bibliotecas y benches en smartphones y otros dispositivos con procesadores pequeños.
  * [cucumber](https://crates.io/crates/cucumber) [![Latest Version](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - Implementación del marco de pruebas Cucumber para Rust. Totalmente nativa, sin ejecutores de pruebas externos ni dependencias. [![Build Status](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - Sustituto del atributo `#[test]` que inicializa la infraestructura de registro y/o seguimiento antes de ejecutar las pruebas. [![GitHub Workflow Status](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - Marco de pruebas declarativo.
  * [GoogleTest Rust](https://crates.io/crates/googletest) - Potente marco de aserciones para pruebas basado en la biblioteca de pruebas C++ GoogleTest. [![Build Status](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - Biblioteca de aserciones para Rust, basada en GoogleTest Rust y creada por su autor original. [![Build Status](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Biblioteca de pruebas de instantáneas para Rust. [![Build Status](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - Ejecutor de pruebas Rust de nueva generación, con ejecución paralela, pruebas más rápidas, filtrado avanzado y salida detallada. [![cargo-nextest on crates.io](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Enlaces Rust para Microsoft Playwright: pruebas de extremo a extremo en varios navegadores (Chromium, Firefox, WebKit), con localizadores que esperan automáticamente y captura de trazas. [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - Ejecuta las pruebas en serie, todas juntas o en grupos con nombre. [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - Marco universal de pruebas de carga, con compatibilidad para TUI en tiempo real.
  * [rstest](https://crates.io/crates/rstest) - Marco de pruebas basado en fixtures. [![Build Status](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - Marco de pruebas minimalista inspirado en RSpec.
* Simulación y datos de prueba
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - Potente biblioteca de objetos mock. [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - Macro de procedimiento para generar pruebas a partir de fixtures usando patrones glob.
  * [fake-rs](https://github.com/cksac/fake-rs) - Biblioteca para generar datos ficticios.
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - Biblioteca con una API sencilla para pruebas con golden files.
  * [httpmock](https://github.com/httpmock/httpmock) - Simulación de HTTP. [![Build](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - Biblioteca de simulación estricta pero amigable para Rust 2018 inestable.
  * [mockito](https://crates.io/crates/mockito) - Simulación de HTTP.
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Simulación de servidores HTTP y gRPC para Rust. ![build](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![Latest Version](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - Biblioteca para crear mocks a partir de structs. ![build](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - Genera datos para bases de datos de forma declarativa. [![build](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* Pruebas de mutación
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - Detecta código con pruebas insuficientes mediante la inyección de mutaciones, sin necesidad de modificar el código fuente. [![build badge](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - Marco de pruebas de mutación a nivel de código fuente (solo versión nightly).
* Pruebas de propiedades y fuzzing
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - Marco de fuzzing para contratos inteligentes de Solana, con pruebas guiadas manualmente, secuencias basadas en flujos y validación basada en propiedades.
  * [proptest](https://crates.io/crates/proptest) - Marco de pruebas de propiedades inspirado en [Hypothesis] [Hypothesis](https://hypothesis.works/) para Python.
  * [quickcheck](https://crates.io/crates/quickcheck) - Implementación de [QuickCheck] [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) en Rust.
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - Fuzzer de Rust que utiliza [AFL] [AFL](https://lcamtuf.coredump.cx/afl/).

### Transpilación

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - Herramienta de traducción de código fuente impulsada por IA que utiliza la API local de Ollama.
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - Herramienta CLI para convertir modelos clásicos de aprendizaje automático entrenados en código Rust nativo sin dependencias.
* [immunant/c2rust](https://github.com/immunant/c2rust) - Traductor de C a Rust y comprobador cruzado creado sobre Clang/LLVM.
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - Traductor de C a Rust escrito en Haskell.

### Túneles

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - Túnel TCP sencillo para exponer puertos locales en un servidor remoto y evitar cortafuegos NAT. [![Build status](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - Servidor de túneles seguro y autoalojado. Expone servicios HTTP/HTTPS/TCP/UDP locales mediante WebSocket cifrado con TLS y multiplexación yamux; compatible con varias regiones, métricas de Prometheus y servidor MCP para agentes de IA.
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - ngrok es una herramienta para desarrolladores que expone de forma segura una aplicación local a Internet.
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - Proxy inverso seguro y de alto rendimiento para atravesar NAT, con cifrado Noise Protocol/TLS y compatibilidad con la recarga de configuración en caliente. ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## Bibliotecas

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - Kit de herramientas diseñado para servir de base a aplicaciones que supervisan su rendimiento. [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### Inteligencia artificial

#### Algoritmos genéticos

* [innoave/genevo](https://github.com/innoave/genevo) - Ejecuta simulaciones de algoritmos genéticos (GA) de forma personalizable y extensible.
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - Biblioteca de algoritmos genéticos. En modo de mantenimiento.
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - Biblioteca de algoritmos genéticos rápida, paralela, extensible y adaptable. Un ejemplo que utiliza esta biblioteca resuelve el problema de las N reinas para N = 255 en solo unos segundos y con menos de 1 MB de RAM.
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - Motor de programación genética paralela y personalizable, capaz de encontrar soluciones para problemas de aprendizaje supervisado, no supervisado y por refuerzo. Incluye implementaciones completas y personalizables de NEAT y Evtree.![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - Algoritmos evolutivos.

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - Biblioteca para utilizar la API de Google Gemini. Gestión automática del contexto, generación de esquemas, llamada a funciones y más.

#### Aprendizaje automático

Consulta [Machine learning](https://crates.io/keywords/machine-learning).

Consulta también [Acerca de la comunidad de aprendizaje automático de Rust](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f) y [¿Estamos aprendiendo ya?](https://www.arewelearningyet.com).

* [autumnai/leaf](https://github.com/autumnai/leaf) - Marco de Open Machine Intelligence. Proyecto abandonado. La bifurcación más actualizada es [juice] [juice](https://github.com/fff-rs/juice).
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - Biblioteca que permite convertir tokens en embeddings y codificar sus posiciones.
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ Marco de aprendizaje automático de código abierto en Rust. ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - Gestor de paquetes para conjuntos de datos y modelos de aprendizaje automático. ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - Marco de aprendizaje profundo flexible y completo.
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - Marco de aprendizaje automático acelerado por CUDA que aprovecha muchas funciones únicas de Rust. ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - Motor de inferencia LLM rápido y flexible, compatible con modelos multimodales, cuantización (GGUF/GPTQ/ISQ) y API compatible con OpenAI.
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - Canalizaciones NLP y modelos de lenguaje listos para usar.
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - Marco de aprendizaje automático minimalista, centrado en la facilidad de uso y el rendimiento (incluida la compatibilidad con GPU).
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Tokenizadores de Hugging Face para canalizaciones modernas de NLP (implementación original), con enlaces para Python. [![Build Status](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - Servidor proxy y plano de datos nativo de IA para aplicaciones agentivas.
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - Enlaces para PyTorch.
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - Compilador de inferencia de propósito general y alto rendimiento, con arquitectura de estilo RISC, optimización basada en búsqueda y backends nativos de CUDA/Metal. Compatible con transformers, redes convolucionales y diferenciación automática. [![CI Status](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - Biblioteca de aprendizaje automático. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - Motor de inferencia WebGPU íntegramente en Rust, con API compatible con OpenAI y compatibilidad nativa con GGUF.
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - Tokenizador íntegramente en Rust para modelos GGUF, compatible con la tokenización de llama.cpp.
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - Enlaces para LightGBM. [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![build](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - Motor de inferencia de LLM en el dispositivo, integrado directamente en juegos y aplicaciones sin servidor ni clave de API. Compatible con generación en streaming, embeddings, salidas estructuradas restringidas por gramáticas GBNF y conversión de voz a texto con Whisper; incluye enlaces para Godot, Flutter, React Native y Swift.
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - Motor de inferencia de LLM íntegramente en Rust + CUDA, sin PyTorch ni entorno de ejecución Python. API compatible con OpenAI, caché KV paginada, CUDA Graph y servicio de modelos desde Qwen3 hasta el modelo Kimi-K2 de un billón de parámetros.
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - Máquina de gradient boosting auto-generalizable que no necesita optimizar hiperparámetros.
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - Biblioteca de cálculo de tensores de alto rendimiento y orientada al aprendizaje, creada desde cero en Rust, con diferenciación automática y backends de CPU/CUDA.
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - Marco Graph-RAG de alto rendimiento que transforma documentos en grafos de conocimiento inteligentes.
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - Marco de aprendizaje automático.
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - Modelos de regresión estadística (OLS, Elastic Net, GLM, cuantílica e isotónica), con inferencia al estilo de R (valores p, intervalos de confianza y predicción) y compatibilidad con Wasm.
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - Biblioteca de aprendizaje automático. [![Build Status](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - Modelo de lenguaje transformer similar a GPT-2, implementado desde cero en Rust con fines educativos.
* [tensorflow/rust](https://github.com/tensorflow/rust) - Enlaces para TensorFlow.

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - Biblioteca para crear agentes y aplicaciones modulares y escalables impulsadas por LLM.
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - Enlaces Rust ergonómicos para la API de OpenAI, basados en la especificación OpenAPI.
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Entorno de ejecución de agentes de IA para Rust: estado con seguridad de tipos, servicio multiprotocolo y extensibilidad mediante complementos.
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - Harness y entorno de ejecución de agentes de IA local-first: memoria persistente, herramientas integradas, habilidades, MCP, subagentes, flujos de trabajo y programaciones tras una única API HTTP + WebSocket. Integrable como crate o ejecutable como servidor.
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - Marco de trabajo multiagente para crear agentes de IA con compatibilidad nativa con el borde.
* [openai/codex](https://github.com/openai/codex) - Codex CLI es un agente de programación de OpenAI que se ejecuta localmente.
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - Renderizador del formato de respuestas Harmony para usar con gpt-oss.
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - Cliente universal de API para LLM compatible con más de 142 proveedores, con interfaz unificada, streaming y enlaces nativos para 11 lenguajes.
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - Biblioteca para tokenizar texto de modelos OpenAI con tiktoken. [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### Herramientas

* [BAML](https://github.com/BoundaryML/baml) - Lenguaje de prompts sencillo para crear flujos de trabajo y agentes de IA fiables. ¡El compilador de BAML está escrito en Rust!
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - Solución integral para la memoria de agentes: extracción, búsqueda vectorial, optimización automatizada y panel de información listos para usar.
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - Motor de ingeniería de contexto basado en teoría de la información, que utiliza aprendizaje por refuerzo para seleccionar y podar de forma inteligente los fragmentos RAG óptimos.
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - Capa de memoria portátil de un único archivo para agentes de IA, con búsqueda vectorial, búsqueda de texto completo y recuperación a largo plazo en un archivo `.mv2`.
* [pydantic/monty](https://github.com/pydantic/monty) - Intérprete de Python minimalista y seguro para ejecutar código generado por LLM en agentes de IA, con inicio en microsegundos, aislamiento estricto y compatibilidad con instantáneas. [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - Almacenamiento y búsqueda sin pérdida de sesiones de agentes de IA en doce clientes de agentes de programación, basado en Lance sobre un directorio local o un bucket S3, con BM25 y recuperación vectorial opcional disponibles mediante CLI, HTTP, MCP y SQL de solo lectura. [![build badge](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### Astronomía

[[astronomy](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - Aplicación web para visualizar estudios de imágenes espaciales y planetarias en distintas proyecciones.
* [fitsio](https://crates.io/crates/fitsio) - Biblioteca de interfaz FITS que envuelve cfitsio.
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - Port de la biblioteca JavaScript suncalc a Rust.
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - Astronomía.

### Asincronía

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Versión asíncrona de la biblioteca estándar de Rust. [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - Marco de programación de tareas asíncronas de alto rendimiento basado en el concepto de programación orientada a flujos (Flow Based Programming).
* [dpc/mioco](https://github.com/dpc/mioco) - Biblioteca escalable de gestión de E/S asíncrona basada en corutinas.
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2: biblioteca de modelo de actores basada en Tokio.
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - Entorno de ejecución distribuido para componer servicios mediante primitivas Worker-Function-Trigger. Catálogo en tiempo real, llamadas a funciones rastreables y SDK multilenguaje (Rust, Node.js, Python). Motor escrito en Rust (ELv2); SDK con licencia Apache 2.0.
* [mio](https://github.com/tokio-rs/mio) - MIO es una biblioteca de E/S ligera, centrada en añadir la menor sobrecarga posible a las abstracciones del sistema operativo.
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - Adaptadores de flujo para ejecutar futures simultáneamente, con límites ponderados de concurrencia y límites opcionales por grupo.
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - Futuros sin coste.
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - Implementación de `AsyncDrop`.
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - Funciones de Monad/MonadIO, Handler, Coroutine/doNotation y programación funcional para Rust.
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - Entorno de ejecución para crear aplicaciones fiables, asíncronas y ligeras con el lenguaje de programación Rust.
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - Actores asíncronos tolerantes a fallos, basados en Tokio.
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - Biblioteca de corutinas con pila.
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - Biblioteca de E/S basada en corutinas con un planificador de robo de trabajo.

### Audio y música

[[audio](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - Biblioteca para transmitir audio, vídeo y otros contenidos multimedia. [![build badge](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - Biblioteca de codificación y decodificación WAV.
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - Biblioteca para reproducir y abstraer archivos MIDI. [![build badge](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - Biblioteca sencilla para reproducir sonidos y música, basada en OpenAL y libsndfile.
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - Enlaces de [PortMidi](https://portmedia.sourceforge.net/portmidi/).
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - Biblioteca de teoría musical.
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - Biblioteca de decodificación de audio y demultiplexación de medios compatible con AAC, FLAC, MP3, MP4, OGG, Vorbis y WAV.
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - Biblioteca multiplataforma de E/S de audio de bajo nivel. [![Actions Status](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - Biblioteca de reproducción de audio.
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - Enlaces de PortAudio.
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - Biblioteca para leer y editar los metadatos de distintos formatos de audio. [![build badge](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### Autenticación

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - Biblioteca 2FA para generar y verificar tokens basados en TOTP. ![Build Status](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - Autenticación facial para Linux con reconocimiento facial en el dispositivo, integración con PAM y herramientas para gestionar el inicio de sesión, la pantalla de bloqueo, sudo y el escritorio. [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - Biblioteca de [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token).
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - Biblioteca de cliente OAuth2 extensible y con tipado estricto.
* [oxide-auth](https://github.com/197g/oxide-auth) - Biblioteca de servidor OAuth2 para usar con actix u otros frontends, con backends configurables y conectables. [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - Biblioteca asíncrona para administrar y orquestar flujos de trabajo JWT.
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - Autorización basada en capacidades para agentes de IA. Los permisos firmados delimitan las llamadas a herramientas y sus argumentos, y solo se restringen más cuando se delegan. [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - Implementación de cliente OAuth2 compatible con los flujos Device, Installed y Service Account.

### Automoción

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - Compatibilidad con Linux SocketCAN para tokio, basada en el crate socketcan.
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - Compatibilidad con Linux SocketCAN BCM para tokio.
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Biblioteca Linux SocketCAN.
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - Analizador del formato DBC.
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - Traits de controlador de bus LIN e implementación del protocolo. [![build badge](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### Bioinformática

* [polars-bio](https://github.com/biodatageeks/polars-bio) - Operaciones bioinformáticas rapidísimas en DataFrames de Python. ![PyPI - Version](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - Bibliotecas de bioinformática.

### Almacenamiento en caché

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - Middleware de caché que sigue las reglas de almacenamiento en caché HTTP. [![build badge](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Biblioteca cliente de Memcached.
* [al8n/stretto](https://github.com/al8n/stretto) - Caché de alto rendimiento, limitada por memoria y segura para hilos. [![build badge](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - Marco declarativo de orquestación de caché, con middleware HTTP y backends multinivel. [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - Almacenamiento en caché/memoización de funciones sencillo.
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - Caché de compilación direccionada por contenido para Rust y C/C++ ([website](https://ninja.kunobi.com/kache)). [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - Biblioteca de almacenamiento en caché concurrente y de alto rendimiento, inspirada en Caffeine para Java. [![build badge](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - Caché de compilación compartida para acelerar las compilaciones.
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - Marco genérico para cálculos bajo demanda e incrementales con consultas memorizadas, inspirado en el sistema de consultas de rustc. [![Test](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - Caché en disco concurrente, direccionable por contenido y de alto rendimiento, optimizada para API asíncronas. [![build badge](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### Nube

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - Entorno de ejecución para AWS Lambda. [![build badge](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - El nuevo SDK de AWS.
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - Emulador local de la nube AWS para desarrollo y pruebas. [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - SDK de AWS para Rust.
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - SDK oficial de Azure para Rust.
* Balanceador de carga
  * [Convey](https://github.com/bparli/convey) - Balanceador de carga de capa 4 con carga dinámica de configuración.
* Multinube
  * [Qovery/engine](https://github.com/Qovery/engine) - Biblioteca de capa de abstracción que permite desplegar aplicaciones fácilmente en proveedores de nube en solo unos minutos.

### Línea de comandos

* Análisis de argumentos
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - Convierte una o varias funciones en una aplicación de línea de comandos con una sola línea de código. [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - Analizador de argumentos de línea de comandos sencillo y completo.
  * [cliparser](https://crates.io/crates/cliparser) - Analizador sencillo de línea de comandos. [![build badge](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - Implementación de DocOpt.
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - Analizador de argumentos basado en Derive, con criterios definidos y optimizado para el tamaño del código. [![build badge](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - Crea rápidamente aplicaciones CLI atractivas.
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - Marco CLI minimalista. [![Build status](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - Analiza argumentos de la línea de comandos definiendo un struct.
* Visualización de datos
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - Tablas dinámicas atractivas para tus herramientas CLI. [![Build status](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - Biblioteca fácil de usar para imprimir con formato tablas de structs y enums. [![Build Status](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* Diseño centrado en las personas
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - Mensajes de pánico para personas.
* Editor de línea
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - Implementación de readline.
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - Biblioteca que ofrece funciones similares a readline.
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - Lector de líneas interactivo, configurable y extensible.
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - Editor de línea completo que impulsa Nushell. Compatible con resaltado de sintaxis, completado con tabulador, líneas múltiples, historial, atajos de vi/emacs y Unicode. [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - Biblioteca de edición de línea de comandos.
* Otros
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - Informador de actualizaciones para aplicaciones CLI. Comprueba si hay una versión nueva en Crates.io y GitHub. [![build badge](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* Canalización
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - Funciones para interactuar con canalizaciones externas.
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - Envía la salida por un paginador externo.
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - Creador de canalizaciones para subprocesos y redirección de E/S.
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - Automatiza aplicaciones interactivas como ssh, ftp, passwd, etc. [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - Biblioteca para controlar programas interactivos en un pseudoterminal. [![build badge](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* Progreso
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - Barra de progreso para consola.
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - Biblioteca de barra de progreso para consola, inspirada en tqdm y rich.progress. [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - Indica el progreso a los usuarios.
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - Indicador giratorio práctico. [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - Más de 60 elegantes indicadores giratorios para terminal.
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - Biblioteca de indicador giratorio minimalista y sin dependencias para terminal.
* Indicaciones
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - Crea un prompt de comandos interactivo.
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - Biblioteca para crear prompts interactivos en terminales. [![Build status](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - Prompt mínimo, rapidísimo y muy personalizable para cualquier shell. [![Build status](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - Kit de herramientas para crear herramientas interactivas de línea de comandos. [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* Estilo
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - ¡Colorear la terminal es tan sencillo que ya sabes cómo hacerlo!
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - Biblioteca para prompts de línea de comandos y tareas similares.
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - Colores y estilos multiplataforma para terminal, con macros. [![Build status](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - Salida de terminal con estilo y multiplataforma.
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - Controla colores y formato en terminales ANSI.
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - Biblioteca de pintado de colores ANSI realmente sencilla.
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - Marco TUI/CUI completo y multiplataforma para Rust, con widgets integrados, control del diseño, animaciones, Unicode y temas.
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - Enlaces para [BearLibTerminal] [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal).
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - Crate para crear CLI, TUI y E/S de texto atractivas y elaboradas artesanalmente. [![Build status](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - Crea aplicaciones TUI completas.
  * [ivanceras/titik](https://github.com/ivanceras/titik) - Biblioteca multiplataforma de widgets TUI que busca ofrecer widgets interactivos.
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - Biblioteca curses, compatible con Linux y Windows.
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - Enlaces para [ncurses] [ncurses](https://invisible-island.net/ncurses/ncurses.html).
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - Biblioteca para organizar elementos en una cuadrícula.
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - Biblioteca dedicada a crear interfaces de usuario de terminal (TUI).
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - Biblioteca sin dependencias para controlar terminales/TTY.
  * [ruterm](https://crates.io/crates/ruterm) - Biblioteca pequeña y sencilla para trabajar con TTY.
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - Biblioteca TUI de modo inmediato con más de 50 widgets, diseño flexbox y sistema de animación. [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - Enlaces para [Termbox] [Termbox](https://github.com/nsf/termbox).
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - Biblioteca multiplataforma para terminal.

### Compresión

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - Descompresor/compresor 7z escrito íntegramente en Rust. [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - Descompresor Brotli que puede prescindir de la biblioteca estándar.
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Implementación de compresión Brotli.
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - Enlaces para [libbz2](https://www.sourceware.org/bzip2/).
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - Implementación del algoritmo de compresión Zopfli para obtener compresión deflate o zlib de mayor calidad.
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - Codificación y decodificación multihilo de formatos deflate y snappy.
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - Compresión LZMA/LZMA2/LZIP/XZ portada desde [tukaani xz para Java] [tukaani xz for java](https://tukaani.org/xz/java.html). [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - Enlaces para [miniz](https://code.google.com/archive/p/miniz). [![build badge](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - Biblioteca flexible para comprimir y descomprimir archivos con varios algoritmos (zip, tar, gzip, xz, zst, etc.), con diseño modular para facilitar su ampliación.
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - Lectura y escritura de archivos tar.
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - Lee y escribe archivos ZIP.
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - Enlaces Rust para la biblioteca de compresión zstd.

### Cálculo

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - Optimization Engine (OpEn) es un solucionador de problemas de optimización no convexa con restricciones. [![Continuous integration](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - Biblioteca de optimización.
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - Enlaces para BLAS.
* [calebwin/emu](https://github.com/calebwin/emu) - Lenguaje para cálculo numérico GPGPU.
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - Biblioteca de álgebra lineal de baja dimensión.
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Fundamentos de álgebra lineal para Rust.
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - Números decimales rápidos y de precisión exacta, implementados íntegramente en Rust. Adecuados para finanzas, criptografía y otros cálculos de precisión fija.
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - Enlaces para GSL.
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - Biblioteca de optimización numérica con solucionadores de primer orden, sin derivadas, de mínimos cuadrados no lineales, evolutivos y con restricciones; genérica respecto a los backends de álgebra lineal. [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - Enlaces para LAPACK.
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - Biblioteca de cálculo numérico para Rust, inspirada en NumPy, con tensores, álgebra lineal, FFT, estadística, diferenciación automática y aceleración GPU. [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* Paralelismo
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - Enlaces para [Arrayfire](https://github.com/arrayfire).
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - Marco extensible, conectable e independiente del backend para cálculos paralelos de alto rendimiento con CUDA, OpenCL y CPU de uso general.
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - Enlaces para [OpenCL](https://www.khronos.org/opencl/).
* Ciencia
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - Biblioteca numérica Rust que incluye álgebra lineal, análisis numérico, estadística y herramientas de aprendizaje automático, todo en Rust puro.
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - Computación científica en Rust puro, lista para producción; incluye álgebra lineal, optimización, estadística, redes neuronales y más. API inspirada en SciPy de Python.
  * [cpmech/russell](https://github.com/cpmech/russell) - Biblioteca científica Rust para matemáticas numéricas, ecuaciones diferenciales ordinarias, funciones matemáticas especiales y álgebra lineal dispersa de alto rendimiento.
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - Biblioteca de matemáticas simbólicas con capacidades de CAS. Compatible con derivación, integración, resolución de ecuaciones y aritmética de precisión arbitraria. [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - Biblioteca de alto rendimiento para resolver ecuaciones diferenciales numéricamente.
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - Biblioteca robusta de cálculo estadístico.

### Concurrencia

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - Compatibilidad con paralelismo y concurrencia de bajo nivel.
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - Biblioteca Rust para limitar la frecuencia (Leaky Bucket, Token Bucket, ventana fija/deslizante).
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - Biblioteca para abstraer tipos de puntero `Rc`/`Arc`. [![build badge](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - Biblioteca de cálculo paralelo de alto rendimiento, configurable y expresiva.
* [Rayon](https://github.com/rayon-rs/rayon) - Biblioteca de paralelismo de datos.
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - Biblioteca de corutinas.
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - E/S con corutinas.

### Configuración

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - Biblioteca de configuración completa y basada en [libUCL](https://github.com/vstakhov/libucl). [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - Biblioteca para procesar fácilmente la configuración de aplicaciones.
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Biblioteca de configuración para aplicaciones Rust.
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - Sistema de configuración por capas, con gran compatibilidad con aplicaciones de 12 factores.
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - Biblioteca de configuración tan libre de configuraciones que parece irreal.
* [softprops/envy](https://github.com/softprops/envy) - Deserializa variables de entorno en structs con seguridad de tipos. [![Main](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### Criptografía

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - Enlaces de Arkworks a R1CS de Circom para generar pruebas y testigos de Groth16.
* [briansmith/ring](https://github.com/briansmith/ring) - Criptografía segura, rápida y pequeña mediante Rust y las primitivas criptográficas de BoringSSL.
* [briansmith/webpki](https://github.com/briansmith/webpki) - Validación de certificados X.509 de Web PKI TLS.
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - Gestor de contraseñas sencillo para utilizar en la terminal.
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - Biblioteca criptográfica de alto nivel para resolver tareas habituales de seguridad de datos, ideal para aplicaciones multiplataforma. [![build badge](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - Algoritmos criptográficos.
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Operaciones Curve25519.
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Familia Keccak (SHA3).
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - Implementación nativa de BLS12-381 en Rust, mejorada para el rendimiento de pruebas de conocimiento cero: multiplicación multiescalar optimizada, hashing personalizado y compatibilidad con serde. Ideal para protocolos centrados en la privacidad y aplicaciones de conocimiento cero. ![Build Status](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - Implementación nativa en Rust de alto rendimiento del zk-SNARK PLONK sobre BLS12-381, optimizada con puertas personalizadas y compromiso polinómico KZG10 para generar pruebas de conocimiento cero de forma eficiente. ![Build Status](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - Hash Poseidon nativo de Rust sobre BLS12-381. Poseidon252 está diseñado para la eficiencia de zk-SNARK y es ideal para protocolos centrados en la privacidad y aplicaciones de conocimiento cero. ![Build Status](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - Marco extensible para proyectos de cadena de bloques.
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - Implementación del intercambio de claves autenticado por contraseña [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/). [![build badge](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - Biblioteca cliente de random.org. [![Crates badge](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - Implementación de [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246).
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - Biblioteca intuitiva para tutoriales de criptografía de curva elíptica. [![Crates.io Version](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Enlaces para Security Framework (nativo de OSX).
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - Biblioteca modular de hashes y criptografía.
* [orion-rs/orion](https://github.com/orion-rs/orion) - Esta biblioteca busca ofrecer criptografía sencilla y útil. «Útil» significa exponer API de alto nivel fáciles de usar y difíciles de utilizar incorrectamente. [![Tests](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - Port de las primitivas de contraseñas utilizadas en el proyecto Django. No requiere Django; solo aplica hash y valida contraseñas según su estilo.
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - Enlaces para bibliotecas TLS nativas.
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - Enlaces de [OpenSSL](https://www.openssl.org/).
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - Biblioteca completa de generación de números aleatorios, compatible con PRNG robustos y pequeños, muestreo de valores aleatorios, distribuciones y procesos aleatorios. [![Test Status](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - Colección de funciones hash criptográficas.
* [rustls/rustls](https://github.com/rustls/rustls) - Implementación de TLS.
* [schnorrkel](https://github.com/paritytech/schnorrkel) - VRF y firmas Schnorr en el grupo Ristretto.
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - Biblioteca sencilla, moderna y segura para cifrar archivos. [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - Implementación del formato de datos cifrados scrypt. [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - Cifrado AES-256-GCM para ajustes de aplicaciones, con derivación de claves HKDF. [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - Verificación de integridad de archivos en streaming mediante hashing SHA-256 con Rust/WASM y memoria constante. Permite reanudar descargas de archivos grandes en el navegador.

### Procesamiento de datos

* [amv-dev/yata](https://github.com/amv-dev/yata) - Biblioteca de análisis técnico de alto rendimiento. [![Build Status](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - Perfilado de datos y controles de calidad para CSV, JSON, Parquet y Arrow, con enlaces para Python. [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - Matriz N-dimensional con vistas, segmentación multidimensional y operaciones eficientes.
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - Biblioteca DataFrame integral de ingeniería de datos, basada en DataFusion y con conectores para Microsoft Fabric, Azure, SharePoint, FTP, Postgres, MySQL y API REST.
* [datafusion](https://github.com/apache/datafusion) - DataFusion es un motor de consultas muy rápido y extensible para crear sistemas de alta calidad centrados en datos con Rust, que utiliza el formato en memoria Apache Arrow.
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - Motor de evaluación JSONLogic de alto rendimiento y con seguridad de tipos para reglas de negocio y filtrado dinámico; incluye enlaces oficiales para Node, WASM, Python, Go, Java, .NET y PHP. [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - Motor de hojas de cálculo nuevo, moderno y en desarrollo.
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - Estructura y operaciones de DataFrame.
* [lakehq/sail](https://github.com/lakehq/sail) - Sail es un sustituto directo de Apache Spark, escrito en Rust, que unifica procesamiento por lotes, procesamiento de flujos y cargas de trabajo de IA de cálculo intensivo.
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - Motor de hojas de cálculo nuevo y moderno que impulsa productos reales.
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - Motores OOXML nativos para DOCX, XLSX y PPTX: edición, diseño, renderizado, colaboración CRDT y edición mediante agentes, compilados a WebAssembly.
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - Marco ETL de Python de alto rendimiento y código abierto, con entorno de ejecución Rust y compatibilidad con más de 300 fuentes de datos.
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - Extensión de PostgreSQL que acelera el procesamiento de consultas analíticas en Postgres hasta alcanzar un rendimiento comparable al de bases de datos OLAP especializadas.
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - Extensión de PostgreSQL que convierte Postgres en un motor de consultas analíticas sobre almacenes de objetos como AWS S3/GCS y formatos de tablas como Delta Lake/Iceberg.
* [pola-rs/polars](https://github.com/pola-rs/polars) - Biblioteca DataFrame rápida y completa. [![Lint Rust](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - Motor de hojas de cálculo integrable que analiza, evalúa y modifica libros de Excel: más de 400 funciones, almacenamiento basado en Arrow, recálculo incremental y enlaces para Python y WASM. [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - Entorno de ejecución de alto rendimiento para aplicaciones de análisis de datos.

### Flujo de datos

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - Motor de procesamiento de flujos Rust de alto rendimiento. [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - Analítica en tiempo real de alto rendimiento con Rust y SQL. [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - Servidor de funciones en un único binario. Envía eventos por HTTP o TCP y consulta en línea contadores y agregados recientes por entidad, sin intermediarios. Para prevención del fraude, recomendaciones, protecciones de LLM y analítica integrada en productos. [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - Plataforma programable de streaming de datos. [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - Plataforma persistente de streaming de mensajes compatible con QUIC, TCP y HTTP. [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - Marco de procesamiento de flujos basado en grafos. [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### Estructuras de datos

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - Implementación de árbol de Merkle en Rust, con backends de almacenamiento y funciones hash configurables. Profundidad fija y solo incremental. Optimizada para generar pruebas rápidamente.
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - Distancias vectoriales y funciones de similitud aceleradas con SIMD para x86 AVX2 y AVX-512, y Arm NEON. [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - Proporciona una estructura de datos bidimensional fácil de usar y rápida. [![build status](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - Colección de árboles ternarios de búsqueda.
* [contain-rs](https://github.com/contain-rs) - Extensión de std::collections de Rust.
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - Ayudantes para matrices. Permite usar con vectores algunos de los métodos más comunes para matrices. Incluye implementaciones polimórficas para la mayoría de los casos de uso.
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - Implementación optimizada de mapas para enums, que utiliza una matriz para almacenar valores.
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - Truco para permitir matrices dimensionadas mediante typenums.
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - Cola de prioridad que admite cambios de prioridad.
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - Define estructuras newtype con restricciones de validación. [![build status](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - Implementación de una caché LRU con operaciones `put`, `get`, `get_mut` y `pop` en O(1). [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - Implementación del patrón deshacer/rehacer para estructuras de datos arbitrarias. Compatible con deshacer/rehacer basado en deltas (diferencias dispersas), instantáneas y comandos, con macros derive para tipos personalizados. Compatible con no_std y serde. [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - Árbol k-dimensional para indexación geoespacial rápida y búsqueda de vecinos más cercanos.
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - Estructuras de datos persistentes. [![build badge](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Bitmaps Roaring.
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - Adaptadores de iteradores, funciones y macros adicionales.
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - Biblioteca de enteros de ancho de bits fijo arbitrario. [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - Alternativa segura y falible, solo en pila, a `BTreeSet` y `BTreeMap`. [![GitHub Actions](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - Hypergraph es una biblioteca de estructuras de datos para generar hipergrafos dirigidos. [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### Visualización de datos

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - Widget interactivo de visualización de grafos, impulsado por egui y petgraph. [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - Biblioteca para generar figuras de calidad editorial. [![build](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - Biblioteca de escalas de color para visualización de datos, gráficos, juegos, mapas, arte generativo y más.
* [milliams/plotlib](https://github.com/milliams/plotlib) - Biblioteca de gráficos para Rust.
* [plotly](https://github.com/plotly/plotly.rs) - Plotly para Rust.
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - Biblioteca de gráficos para Rust que utiliza Python (Matplotlib).
* [plotters](https://github.com/plotters-rs/plotters) - [![build badge](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun): SDK para registrar datos de visión artificial y robótica (tensores, nubes de puntos, etc.), junto con un visualizador para explorar esos datos a lo largo del tiempo.
* [saresend/gust](https://github.com/saresend/Gust) - Herramienta pequeña para crear gráficos y visualizaciones, e implementación parcial de Vega.
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - Gráficos en terminal: líneas, dispersión, barras, histogramas, mapas de calor, diagramas de caja, violín y más, con ejes automáticos.
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Biblioteca de gramática de gráficos por capas para Rust. [![Documentation](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![Build Status](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### Bases de datos

[[database](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - Mapeador ligero de objetos, documentos, relaciones y grafos para ArangoDB. [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - Controlador de ArangoDB.
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - Cliente nativo.
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - Enlaces para DataStax C/C++.
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - Cliente asíncrono de Cassandra de alto nivel, escrito íntegramente en Rust. [![build badge](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Implementación del protocolo Cassandra.
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - Cliente/controlador asíncrono de Apache Cassandra, listo para producción.
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - Cliente para la API REST de CouchDB.
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - Biblioteca para interactuar de forma cómoda y con tipado estricto con `rusoto_dynamodb`. [![build badge](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - Cliente para la API REST de [Elastic] [Elastic](https://www.elastic.co/).
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - elastic es un cliente API eficiente y modular para Elasticsearch, escrito en Rust. [![build badge](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - Biblioteca cliente para etcd de CoreOS.
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - Interfaz de sincronización.
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - Enlaces para [LevelDB](https://github.com/google/leveldb).
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - Envoltorios LMDB totalmente tipados y con sobrecarga mínima.
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - Enlaces Rust para LMDB.
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - Enlaces para [MongoDB] [MongoDB](https://www.mongodb.com/).
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - Motor de base de datos columnar integrado, con SQL, búsqueda vectorial, búsqueda de texto completo y recuperación nativa de IA. [![build badge](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - Almacén de pares clave-valor ligero y sencillo, muy inspirado en PickleDB de Python.
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - Base de datos integrada basada en JSON, con una API similar a MongoDB. ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - Base de datos integrada de pares clave-valor. Ofrece una interfaz similar a la de otros almacenes integrados de pares clave-valor, como rocksdb y lmdb. ![GitHub Workflow Status](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - Cliente asíncrono de alto nivel para [Redis] [Redis](https://redis.io/) en Rust con Tokio. [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - Biblioteca de [Redis](https://redis.io/). [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - Enlaces para RocksDB. [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - Base de datos integrada de documentos y grafos de SurrealDB.
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - Enlaces para UnQLite.
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Biblioteca cliente para Apache ZooKeeper.
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - Cliente asíncrono de ZooKeeper basado en tokio.  ![build status](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - Mapeador ligero de objetos, documentos, relaciones y grafos para ArangoDB. [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - Linter para Diesel y SQLx que detecta migraciones peligrosas de PostgreSQL (bloqueos de tablas, reescrituras y operaciones bloqueantes) y sugiere alternativas seguras. [![crate](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - ORM y creador de consultas.
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - Un ORM.
  * [njord](https://github.com/njord-rs/njord) - ⛵ ORM versátil y completo para Rust. [![build status](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - Marco ORM de alto rendimiento (basado en JSON).
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚 ORM asíncrono y dinámico.  [![crate](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![docs](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![build status](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - 🧭 Marco GraphQL para SeaORM. [![crate](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![docs](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![build status](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - ORM de última generación para Rust, asíncrono y con generación en tiempo de compilación.
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - Grupo de conexiones genérico.
* SQL [[sql](https://crates.io/keywords/sql)]
  * Genérico
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - Grupo de conexiones asíncrono para PostgreSQL/MySQL/SQLite, compatible con tipado estricto. [![build badge](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱 Creador dinámico de consultas SQL para MySQL, Postgres y SQLite. [![crate](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![docs](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![build status](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿 Definición y descubrimiento de esquemas SQL. [![crate](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![docs](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![build status](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - [![Cargo tests](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - Proxy de MySQL. [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - Controlador asíncrono de Mysql basado en Tokio. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - Cliente MySql nativo.
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Controlador de Oracle. [![build badge](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Implementación rápida con pocas dependencias externas.
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - Biblioteca CDC asíncrona de alto rendimiento para streaming de replicación lógica y física de PostgreSQL. [![Crates.io Version](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - Cliente nativo de [PostgreSQL] [PostgreSQL](https://www.postgresql.org/).
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - Enlaces para [Sqlite3](https://sqlite.org/index.html).
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - Base de datos en memoria de solo anexado en Rust para filas consultadas mediante columnas de bits (flags).

### Fecha y hora

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - Clon de cal(1) rapidísimo, con más de 9999 años de calendario, escrito en Rust.
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - Biblioteca de fecha y hora para Rust que te anima a elegir el camino correcto. [![Build status](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - Biblioteca de fecha y hora.
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - Biblioteca para convertir horas expresadas de forma humana a milisegundos. [![build badge](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - Biblioteca de fecha y hora de MS-DOS. [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Biblioteca de fechas de archivos de Windows. [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - [![build badge](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### Sistemas distribuidos

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - Plataforma de procesamiento de flujos/cálculo distribuido.
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - Enlaces para [librdkafka] [librdkafka](https://github.com/confluentinc/librdkafka).
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - Integración con [Confluent Schema Registry] [confluent schema registry](https://www.confluent.io/product/confluent-platform/data-compatibility/).
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Cliente Rust para Apache Kafka.
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - Enlaces para libhdfs.
* Otros
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - Cifrado de extremo a extremo, autenticación mutua y ABAC para aplicaciones distribuidas. [![build badge](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - Pub/sub asíncrono con tipado seguro y una API coherente para RabbitMQ, Kafka, NATS JetStream, AWS SNS/SQS y Redis Streams; incluye reintentos, enrutamiento DLQ y grupos de consumidores con escalado automático. [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### Diseño dirigido por el dominio

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - Marco de trabajo para CQRS y abastecimiento de eventos, con [guía de usuario] [user guide](https://doc.rust-cqrs.org/).

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - Creado con especial atención a la experiencia de desarrollo y la operabilidad.
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - Herramientas eBPF minimalistas y con criterios definidos.

### Correo electrónico

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - Códec IMAP completo y de gran fiabilidad. [![Build & Test](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - Biblioteca para la API de SendGrid.
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - Microservicio para enviar correos electrónicos mediante plantillas de [MRML](https://github.com/jdrouet/mrml).
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - Aplicación web para crear plantillas de [MRML](https://github.com/jdrouet/mrml).
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - Biblioteca para generar bonitas plantillas de correo electrónico compatibles con cualquier cliente de correo.
* [lettre/lettre](https://github.com/lettre/lettre) - Biblioteca SMTP. [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - Servidor SMTP para entornos de pruebas y desarrollo.
* [meli/meli](https://github.com/meli/meli) - 🐝 Cliente de correo para terminal.
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - Comprueba si existe una dirección de correo electrónico sin enviar mensajes; valida SMTP y detecta direcciones desechables y dominios catch-all. [![Actions Status](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - Archivador de correo ligero y de alto rendimiento, con búsqueda de texto completo e interfaz web.
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - Biblioteca para analizar archivos de correo electrónico reales.
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - Biblioteca de autenticación de mensajes DKIM, ARC, SPF y DMARC. [![build badge](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - Biblioteca de análisis de correo electrónico rápida y robusta, con compatibilidad completa con MIME. [![build badge](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - Biblioteca para crear correos electrónicos y cliente SMTP, con compatibilidad con DKIM. [![build badge](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - Servidor de pruebas de correo electrónico para desarrollo.

### Codificación

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - Serializador ASN.1 (DER).
* Códigos de barras
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - Port en Rust de la biblioteca de códigos de barras zxing. [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* Binario
  * [bincode](https://crates.io/crates/bincode) - Codificador/decodificador binario.
  * [bincode-next](https://crates.io/crates/bincode-next) - Codificador/decodificador binario, sucesor de bincode, actualmente sin mantenimiento.
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Postcard es un #.![no_std] focused serializer and deserializer for Serde.
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - Análisis binario multiplataforma, sin copias y consciente del endianismo.
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - Compatibilidad con codificación y decodificación BSON.
* Intercambio de bytes
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - Compatible con orden de bytes big-endian, little-endian y nativo.
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap’n Proto es un sistema de tipos para sistemas distribuidos.
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - Compatibilidad con CBOR para serde.
* Codificación de caracteres
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - Implementación del estándar Encoding orientada a Gecko.
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Compatibilidad con codificaciones de caracteres para Rust (también conocida como rust-encoding). Se basa en WHATWG Encoding Standard y ofrece una interfaz avanzada para detectar y recuperar errores.
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - Implementación de CRC (16, 32 y 64) en Rust, compatible con diversos estándares.
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - Lector y escritor CSV rápidos y flexibles, compatibles con Serde.
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - Codificación y decodificación de Data Matrix (ECC 200) con un codificador optimizador. [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - Crate para analizar y emitir el formato EDN en tipos Rust.
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Integración del compilador FlatBuffers (flatc) para scripts de compilación de Cargo.
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - Biblioteca de serialización y deserialización del formato HTTP Archive (HAR).
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - Analizador HTML5 de alto rendimiento, de calidad de navegador.
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - Biblioteca JSON rápida para Rust, basada en SIMD.
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - Obtén valores JSON rápidamente.
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - Implementación de JSON.
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - Compatibilidad con JSON para el marco [Serde] [Serde](https://github.com/serde-rs/serde).
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - Analizador JSON de alto rendimiento basado en un port de simdjson.
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - Analizador y lexer JSON de streaming, sin copias ni asignaciones; incluye evaluador opcional de JSON Pointer en streaming.
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - Implementación de MessagePack de bajo y alto nivel.
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - Enlaces netCDF de nivel intermedio que facilitan la lectura y escritura de estructuras tipo matriz en archivos.
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - Analiza y codifica datos codificados en PEM.
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Implementación en Rust de Protocol Buffers de Google.
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - [![continuous integration](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* Código QR
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - Genera símbolos de códigos QR y Micro QR ISO/IEC 18004 y rMQR ISO/IEC 23941 en Rust puro, y los renderiza como imágenes en escala de grises, PNG y SVG. [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - Biblioteca de codificación de códigos QR. [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - Detecta y lee códigos QR desde cualquier fuente de imagen. [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv (archivo) es un marco de deserialización sin copias.
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Notación de objetos de Rust.
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - Herramientas adicionales para utilizar con la biblioteca serde. [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - Kit de herramientas TOML. [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - [![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - Formato de texto semiestructurado en UTF-8.
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - Analizador XML.
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - Biblioteca XML de streaming.
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - Biblioteca XML.
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - Biblioteca XPath.
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - Lector/escritor XML pull de alto rendimiento.
  * [yaserde](https://github.com/luminvent/yaserde) - Otro serializador/deserializador especializado en XML.
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - La implementación de YAML 1.2 que faltaba.
  * [saphyr](https://github.com/saphyr-rs/saphyr) - Conjunto de crates dedicados a analizar YAML.
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - Serializador/deserializador YAML para Serde, centrado en evitar pánicos y ofrecer informes de errores claros. [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### Sistema de archivos

[[filesystem](https://crates.io/keywords/filesystem)]
* Operaciones
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - Como Rust std::path::Path, pero para UTF-8.
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - Biblioteca para buscar archivos y contenido con tolerancia a errores tipográficos y clasificación por frecuencia y actualidad. Incluye anotaciones compatibles con Git, monitor en segundo plano e índice ligero en memoria. Ofrece servidor MCP, SDK para Node/Bun, biblioteca C y complemento para Neovim.
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - Modela árboles de sistemas de archivos con estructuras Rust sencillas. [![Tests](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - Capa unificada de acceso a datos que permite recuperar datos de diversos servicios de almacenamiento de forma eficiente y sencilla. [![build](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - Biblioteca de búsqueda de archivos rapidísima.
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - API DBus de UDisks2.
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - Abstracción de alto nivel para las llamadas al sistema `mount`/`umount2`.
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - Tipos de ruta absolutos serializables y métodos asociados.
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - Amplía las posibilidades de la biblioteca estándar std::fs y std::io.
* Archivos temporales
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - Biblioteca para archivos temporales.
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - Enumera y manipula atributos extendidos de archivos Unix.
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - Sistema de archivos integrable, centrado en la privacidad y sin detalles operativos.

### Finanzas

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - Biblioteca de finanzas cuantitativas. ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - Enlaces completos y con criterios definidos para la [API de Alpaca] [Alpaca API](https://alpaca.markets/) de trading bursátil y más. ![GitHub Workflow Status](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - Biblioteca moderna y de alto rendimiento para análisis técnico en Rust, Python y JS/TS (WASM). [![image](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - Finanzas cuantitativas: más de 130 procesos estocásticos, valoración y calibración de opciones, superficies de volatilidad y cópulas; acelerada con SIMD/GPU y enlaces para Python. ![GitHub Workflow Status](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - Análisis técnico orientado al streaming: 514 indicadores con actualizaciones O(1) por tick, desde un núcleo Rust con enlaces nativos para Python, Node.js y WASM, además de un centro ABI C para C, C++, C#, Go, Java y R. [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### Programación funcional

[[functional programming](https://crates.io/keywords/fp)]
* Prelude
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - Biblioteca de programación funcional.
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - Comportamiento de canalización con sufijo y posición.

### Desarrollo de juegos

Consulta también [¿Ya podemos jugar?](https://arewegameyet.rs).
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - Enlaces para [Allegro 5](https://liballeg.org/).
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - Lista seleccionada de enlaces a código y recursos relacionados con miniquad/macroquad.
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - Lista seleccionada de código y recursos de wgpu.
* bracket-lib (previously RLTK)
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - The Roguelike Toolkit (RLTK). [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Biblioteca cliente para la API REST de Challonge. Ayuda a organizar torneos. [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* Entity-Component Systems (ECS)
  * [amethyst/specs](https://github.com/amethyst/specs) - ECS paralelo de Specs.
  * [legion](https://github.com/amethyst/legion) - Biblioteca ECS completa y de alto rendimiento, con código repetitivo mínimo. [![build badge](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* Motores de juegos
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - Marco de renderizado 2D que utiliza WGPU y Winit. - [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![license](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - Motor de juegos determinista en 2D y 3D, con scripting Rune, física Rapier y editor integrado. - [![Test](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - Es un motor de juegos basado en datos y de una sencillez refrescante. - [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - Motor de juegos 3D. [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![license](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - Marco de trabajo ligero para crear juegos 2D con las mínimas complicaciones. - [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - Motor gráfico 3D sencillo, siguiendo el principio Keep It Simple, Stupid. [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - Juego/motor de estrategia en tiempo real compatible con WebGPU.
  * [Piston](https://www.piston.rs/) - [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - Motor de juegos WebGL 2.0/nativo.
* Servidores de juegos
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - Consulta servidores de juegos para obtener información como el nombre, los jugadores conectados, el máximo de jugadores, etc. [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - Administrador de versiones de Godot para CLI. [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Enlaces para el motor de juegos Godot 4 o posterior. [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Enlaces para el motor de juegos Godot 3 o posterior. [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - Kit de herramientas universal para desarrollar Minecraft Bedrock Edition con Rust. [![GitHub stars](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - Actualización del servidor original de Minecraft, escrita en Rust. [![build badge](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - Software de servidor de Minecraft de alto rendimiento, escrito íntegramente en Rust.
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - Servidor de Minecraft en Rust creado pensando en el rendimiento y la compatibilidad.
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - Enlaces para raylib.
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - Enlaces para SDL1.
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - Enlaces para SDL2.
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - Enlaces para [SFML](https://www.sfml-dev.org/).
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - Colección de algoritmos de puntuación de habilidad para juegos multijugador como Elo, Glicko-2, TrueSkill, etc. [![crates.io badge](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - Algoritmo de generación de mazmorras roguelike.
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Enlaces para la API de Toornament.com. [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - Marco de servidor de juegos UDP y cliente UDP sencillo para crear prototipos de juegos en línea 2D y 3D.

### Geoespacial

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - SedonaDB es una biblioteca geoespacial de DataFrame escrita en Rust.
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - Transformaciones de coordenadas (2D, 3D y geoespaciales).
* [Georust](https://github.com/georust) - Herramientas y bibliotecas geoespaciales escritas en Rust.
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - Biblioteca para serializar y deserializar el formato de archivo vectorial GIS GeoJSON.
* [MapLibre/Martin](https://github.com/maplibre/martin) - Servidor de mosaicos de mapas compatible con PostGIS, MBTiles, PMTiles y sprites. [![CI build](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![crates.io version](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![Book](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - Geocodificador inverso rápido y sin conexión, inspirado en [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder).
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - Conversión entre coordenadas UTM, LatLon y MGRS.

### Algoritmos de grafos

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - Biblioteca de algoritmos de grafos de alto rendimiento. [![graph CI status](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - Biblioteca de estructuras de datos de grafos. [![graph CI status](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### Gráficos

[[graphics](https://crates.io/keywords/graphics)]

* Fuentes
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - Alternativa a bibliotecas como FreeType.
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - Port incremental de harfbuzz.
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - API gráfica de alto rendimiento sin vinculación de recursos.
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - Implementación nativa de WebGPU basada en gfx-hal. [![build badge](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - Cargador de punteros de función de OpenGL.
  * [glium/glium](https://github.com/glium/glium) - Envoltorio seguro de OpenGL.
  * [glutin](https://crates.io/crates/glutin) - Alternativa a [GLFW](https://www.glfw.org/).
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - Enlaces y envoltorio idiomático para GLFW3.
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - Genera fácilmente PDF desde tu aplicación Rust.
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - Biblioteca para escribir PDF.
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - Motor HTML/CSS a PDF, centrado en la impresión, con plantillas reutilizables, generación de datos variables y enlaces para Python. [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - Conversor de HTML/CSS/Markdown a PDF, íntegramente en Rust, con motor de diseño integrado y sin dependencias de navegador ni del sistema. [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - Intérprete y renderizador PDF en Rust puro.
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - Manipulación de documentos PDF.
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - Generación de archivos PDF en Rust puro.
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - Extracción, creación y edición rápidas de texto PDF, con enlaces para Python.
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - [![build badge](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - Envoltorio Rust seguro y completo para la API Vulkan.

### GUI

[[gui](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - Biblioteca sencilla y multiplataforma para automatizar interfaces gráficas.
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Enlaces de Rust para Core Foundation y otras bibliotecas de bajo nivel en Mac OS X e iOS.
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - Marco portátil, eficiente y ergonómico para crear interfaces de usuario multiplataforma en Rust. ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - Biblioteca GUI inmediata sencilla, rápida y muy portátil. egui se ejecuta en la web, de forma nativa y en tu motor de juegos favorito. [![Build Status](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifb configura ventanas multiplataforma con renderizado de mapas de bits opcional. También incluye entrada sencilla de ratón y teclado. Diseñada principalmente para la creación de prototipos.
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - Marco de interfaz multiplataforma y declarativo para Rust, con DOM virtual, señales reactivas y macros HTML para WebAssembly. [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - Conjunto de componentes de iced y egui con la estética de shadcn/ui; incluye [egui-shadcn](https://crates.io/crates/egui-shadcn).
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - Enlaces para FLTK. [![Build](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - Rust como backend de Flutter; Flutter como frontend de Rust. [![Build Test](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - Crea aplicaciones de escritorio Flutter con Dart y Rust.
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Generador de enlaces seguros para la memoria y de alto nivel para Flutter/Dart <-> Rust.
* [fschutt/azul](https://github.com/fschutt/azul) - Marco GUI gratuito y funcional, orientado a IMGUI, para desarrollar rápidamente aplicaciones de escritorio escritas en Rust, con el motor de renderizado Mozilla WebRender.
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - Enlaces para GTK4. ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - Biblioteca GUI asíncrona basada en GTK+, inspirada en Elm.
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - Biblioteca GUI multiplataforma centrada en la sencillez y el tipado seguro, inspirada en Elm.
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - Enlaces para ImGui. [![Build Status](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - Marco de interfaz de usuario sencillo, basado en IUP.
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - Biblioteca GUI verdaderamente nativa y multiplataforma. Un mismo código puede ejecutarse como GUI nativa, web HTML o TUI.
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - Enlaces para libui.
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - Marco de interfaz reactiva experimental para Rust, inspirado en React, SwiftUI y Elm. Creado sobre Masonry, Vello/wgpu, Parley y AccessKit, con backends web y nativos. [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - Componentes de interfaz de usuario para crear aplicaciones de escritorio fantásticas con GPUI.
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - Makepad es una plataforma creativa de desarrollo de software que compila a wasm/webGL, osx/metal y windows/dx11 linux/opengl.
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Enlaces para Nuklear.
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget Toolkit es un kit de herramientas de interfaz gráfica multiplataforma que utiliza SDL2. [![Build and test](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - Biblioteca GUI 2D inmediata, fácil de usar.
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - Marco de interfaz multiplataforma con aceleración GPU y API de creación inspirada en GPUI, efectos glassmorphism, animaciones con física de muelles y renderizado nativo en escritorio, Android e iOS.
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - Enlaces para QtQuick.
  * [rust-qt](https://github.com/rust-qt) - Enlaces Qt para Rust.
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - Integra Qml y Rust mediante la creación del QMetaObject en tiempo de compilación.
* [Ribir](https://github.com/RibirX/Ribir) - Ribir es un marco GUI para Rust que permite crear aplicaciones multiplataforma bonitas y nativas a partir de una única base de código.
* [rise-ui](https://github.com/rise-ui/rise) - Kit de herramientas GUI multiplataforma, sencillo y basado en componentes, para desarrollar interfaces bonitas y fáciles de usar.
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - Enlaces para [nativefiledialog](https://github.com/mlabbe/nativefiledialog).
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Enlaces para Sciter. [![build badge](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/) es un kit de herramientas para desarrollar de forma eficiente interfaces gráficas fluidas para dispositivos integrados y aplicaciones de escritorio. [![Build Status](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [[smithay](https://crates.io/crates/smithay) es una biblioteca segura y bien documentada, destinada a proporcionar componentes básicos para crear compositores de Wayland.
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - Crea aplicaciones de escritorio más pequeñas, rápidas y seguras con frontend web, impulsado por [WRY](https://github.com/tauri-apps/wry). [![test library](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - Biblioteca de renderizado WebView.
* [xilem](https://github.com/linebender/xilem) - Sucesor del kit de herramientas de diseño de interfaz basado en datos [druid](https://github.com/linebender/druid).

### Procesamiento de imágenes

* [abonander/img_hash](https://github.com/abonander/img_hash) - Hash perceptual de imágenes y comparación de igualdad y similitud.
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - Implementación del estándar DICOM íntegramente en Rust. Permite trabajar con objetos DICOM e interactuar con aplicaciones DICOM, con el objetivo de ofrecer rapidez, seguridad y facilidad de uso.
* [image-rs/image](https://github.com/image-rs/image) - Funciones y métodos básicos de procesamiento de imágenes para convertir entre formatos.
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - Biblioteca de procesamiento de imágenes basada en la biblioteca `image`.
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - Extractor de colores dominantes. ![build badge](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - Implementa algoritmos, abstracciones y sistemas de visión artificial. Admite `#[no_std]` siempre que sea posible. ![build badge](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - Biblioteca sencilla de esteganografía.
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - Enlaces para OpenCV.

### Especificación del lenguaje

* [shnewto/bnf](https://github.com/shnewto/bnf) - Biblioteca para analizar gramáticas libres de contexto en forma Backus–Naur.

### Licencias

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - Obtén las licencias de las dependencias durante la compilación e intégralas en tu programa.

### Registro

[[log](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - Biblioteca Rust de registros estructurados, ligera y eficiente, compatible con niveles de registro, segmentación de archivos y archivado comprimido.
* [estk/log4rs](https://github.com/estk/log4rs) - Marco de registro altamente configurable, inspirado en las bibliotecas Logback y log4j de Java. [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - Marco de registro versátil, extensible y fácil de usar para aplicaciones Rust. Permite configurar varios despachadores, filtros y añadidores para adaptar el sistema de registro a tus necesidades.
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - Registro asíncrono de alto rendimiento.
* [rust-lang/log](https://github.com/rust-lang/log) - Implementación de registro.
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - Registrador atractivo y fácil de usar.
* [slog-rs/slog](https://github.com/slog-rs/slog) - Registro estructurado y componible.
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - Marco de seguimiento a nivel de aplicación para registros estructurados compatibles con asincronía, gestión de errores, métricas y más. [![Build Status](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### Macros

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Macro para comprensiones de listas al estilo de Python.
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - Genera builders con comprobación en tiempo de compilación para structs y funciones; permite aplicación parcial, parámetros opcionales y con nombre en funciones y métodos. [![build status](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - Macros y métodos para expresiones similares a C#-LINQ. [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### Lenguaje de marcado

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - Procesamiento de Markdown y MDX de alto rendimiento. Analiza y compila con Rust, y ejecuta complementos en JavaScript. Incluye analizador CommonMark con extensiones MDX, operaciones con árboles MDAST/HAST y enlaces NAPI para interoperabilidad con JavaScript.
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - Analizador de [CommonMark](https://commonmark.org/).
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - Biblioteca para dar formato a documentos HTML, XHTML y XML. [![build badge](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### Móviles

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - Ejemplo de uso de una biblioteca compartida para Android e iOS mediante rust-swig y cbindgen, respectivamente.
* Genérico
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - CocoaPods de iOS / JNI de Android.
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - Desarrollo de aplicaciones multiplataforma. Crux permite compartir la lógica de negocio y el comportamiento de una aplicación entre móviles (iOS/Android) y la web como un único núcleo reutilizable. [![Build status](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - Subcomando cargo lipo que crea automáticamente una biblioteca universal para tu aplicación iOS.

### Programación de redes

* Bluetooth
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - Enlaces oficiales para BlueZ. [![build badge](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - Biblioteca de [Constrained Application Protocol(CoAP)](https://datatracker.ietf.org/doc/html/rfc7252).
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Implementación del protocolo BIND9 RNDC para Rust. [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - API del daemon de Docker.
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - Cliente de [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol).
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - Implementación nativa de cliente y servidor gRPC, compatible con async/await. [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - Biblioteca gRPC basada en C Core y futures.
* HTTP
  * [deboa](https://crates.io/crates/deboa) - Cliente HTTP práctico basado en hyper, con varios complementos, formatos de serialización y macros. [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - Ejecuta y prueba solicitudes HTTP con texto sin formato y libcurl. [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - Biblioteca para trabajar con redes IP.
  * [candrew/netsim](https://github.com/canndrew/netsim) - Biblioteca para simular y probar redes.
* Bajo nivel
  * [actix/actix](https://github.com/actix/actix) - Biblioteca de actores.
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - Definiciones de protocolos TCP/UDP personalizados.
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - Redes de bajo nivel y multiplataforma.
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - Pila TCP/IP independiente y basada en eventos, diseñada para sistemas bare-metal y en tiempo real.
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - Biblioteca de mensajería basada en eventos para crear aplicaciones de red de forma sencilla y rápida. Compatible con TCP, UDP y WebSockets. [![build badge](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - Biblioteca para que desarrolladores creen aplicaciones que se comuniquen mediante el [protocolo MQTT] [MQTT protocol](https://mqtt.org) sobre TCP y WebSockets, con TLS o sin él. [![Build and Test](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - Servidor/broker MQTT: broker de mensajes MQTT distribuido y escalable para el IoT en la era 5G.
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - Enlaces para [nanomsg](https://nanomsg.org/).
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - Cliente para NATS, el sistema de mensajería nativo de la nube. [![Build Status](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - Enlaces para [Nng (nanomsg v2)](https://nng.nanomsg.org/index.html). [![build badge](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - Cliente de [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol).
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - Implementación de la pila de red libp2p. [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - Crate para crear conexiones directas entre dispositivos. [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - Cliente de [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol).
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - Implementación del protocolo QUIC del IETF. ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - Implementación de Cloudflare del protocolo de transporte QUIC y HTTP/3. ![build](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - Implementación de QUIC.
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - Implementación de QUIC basada en futures. [![build badge](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - Biblioteca QUIC de alto rendimiento, ligera y multiplataforma. [![Build Status](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - Implementación del protocolo RakNet. [![Build Status](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - Remoc proporciona canales (broadcast, mpsc, oneshot y watch) similares a los de Tokio y llamadas a traits mediante cualquier transporte remoto. [![build badge](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - Biblioteca RPC para desarrollar microservicios de forma sencilla y fácil.
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - Pila SIP compatible con RFC 3261.
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - Implementación en Rust de un cliente [socket.io](https://socket.io).
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - Enlaces para [libssh2](https://libssh2.org/).
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - Biblioteca SSH basada en [libsodium](https://doc.libsodium.org/).
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - Implementación de cliente [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html).
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - Biblioteca multiplataforma que ofrece una API unificada de alto nivel para administrar interfaces de WireGuard mediante implementaciones nativas del kernel del sistema operativo y del protocolo WireGuard en espacio de usuario.
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - Marco declarativo para cálculos que abarcan desde la *nube* hasta el *dispositivo*.
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - Protocolo de red sin sobrecarga.
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - Enlaces para [ZeroMQ](https://zeromq.org/).

### Análisis sintáctico

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - Biblioteca multiplataforma Rust no_std para verificar y extraer información de firmas de archivos PE. [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![build](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Analizador del formato Wavefront OBJ. [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![build badge](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - Divide una cadena en palabras de shell, como shlex de Python. [![build badge](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - Marco de trabajo para nuevos lenguajes de programación y servidores LSP.
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - Biblioteca Rust rápida para clasificar PDF y extraer texto.
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Port de la biblioteca C++ de Google para analizar y cotejar robots.txt.
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - Motor [JsonPath](https://goessner.net/articles/JsonPath/). También compatible con WebAssembly y JavaScript.
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - Analizador de archivos STL (estereolitografía).
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Biblioteca Shiva: implementación en Rust de un analizador y generador de documentos de cualquier tipo (texto sin formato, Markdown, HTML, PDF, etc.).
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - Generador de analizadores PEG (gramáticas de expresiones de análisis).
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - Generador de analizadores LR(1).
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - Combinador de analizadores rápido y de estilo monádico.
  * [Marwes/combine](https://github.com/Marwes/combine) - Biblioteca de combinadores de analizadores.
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - Biblioteca para analizar colores CSS. [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - Biblioteca Rust sin dependencias para analizar, validar, dar formato y normalizar números de teléfono internacionales.
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - Análisis de datos binarios sin asignaciones.
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - Entorno de ejecución ANTLR v4 con generador de analizadores íntegramente en Rust: genera analizadores directamente desde gramáticas `.g4` (sin Java) y está validado con el conjunto oficial de pruebas de conformidad de ANTLR. [![build badge](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - Analizador, transformador, minificador y resolutor de JavaScript/TypeScript de alto rendimiento, escrito en Rust. Impulsa Rolldown, Nuxt, Nova y más. [![Build Status](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - El analizador elegante.
  * [ptal/oak](https://github.com/ptal/oak) - Generador de analizadores PEG con tipado (complemento del compilador).
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - Biblioteca rápida y ligera para analizar PDF, con extracción espacial de texto, cuadros delimitadores, OCR flexible (Tesseract/servidores HTTP) y enlaces multilenguaje (Rust, Node.js, Python, WASM). Basada en PDFium e incluye la herramienta CLI `lit`. [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - Biblioteca de combinadores de analizadores.
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - Biblioteca de análisis de cadenas de consulta inspirada en [gs](https://github.com/ljharb/qs#readme).
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Biblioteca y herramienta CLI para analizar Dockerfile.
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - Analizador LR con mejor recuperación de errores.
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - Generador de analizadores y biblioteca de análisis incremental orientados a herramientas de programación.
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - Biblioteca de combinadores de análisis orientada a bytes y sin copias. [![Build status](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - Gramáticas tree-sitter precompiladas para más de 300 lenguajes, con API de análisis unificada y enlaces para 14 lenguajes.

### Periféricos

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - Bifurcación vendorizada de OpenLogi del crate hidpp, para ofrecer compatibilidad con el protocolo HID++ de Logitech.
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - Capa de abstracción de hardware bare-metal `no_std` para dispositivos Espressif ESP32 (ESP32, ESP32-C2/C3/C5/C6/C61, ESP32-H2, ESP32-P4 y ESP32-S2/S3). Proporciona API Rust seguras para GPIO, I2C, SPI, UART, temporizadores, DMA y más. [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* Lector de huellas dactilares
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Libfprint-rs ofrece un envoltorio para la biblioteca Linux libfprint.
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - Complemento de Tauri que proporciona acceso a la cámara del escritorio con validación de calidad automatizada y controles de hardware.
* Puerto serie
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - Biblioteca multiplataforma que permite acceder a un puerto serie.

### Específico de la plataforma

* Multiplataforma
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - Gestión sencilla y multiplataforma de la prioridad de los hilos. [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - Información multiplataforma sobre las baterías de portátiles.
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - Biblioteca para jaulas de FreeBSD.
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - Enlaces para [inotify](https://en.wikipedia.org/wiki/Inotify). [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Instalador de distribuciones Linux.
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - Enlaces para [iptables](https://www.netfilter.org/projects/iptables/index.html).
* Similar a Unix
  * [nix-rust/nix](https://github.com/nix-rust/nix) - Enlaces a la API de Unix. [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - Enlaces seguros a llamadas al sistema POSIX/Unix/Linux/Winsock2. [![Actions Status](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - Enlaces para [FUSE](https://github.com/libfuse/libfuse).
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Rust para Windows. [![Actions Status](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Enlaces para la API de Windows. [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### Ingeniería inversa

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - Marco de análisis de binarios e ingeniería inversa, con identificación de huellas y comparación de similitudes de funciones.
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - Enlaces Rust para IDA SDK, que permiten desarrollar herramientas de análisis independientes mediante idalib de IDA v9.0.
* [objdiff](https://github.com/encounter/objdiff) - Herramienta local para comparar diferencias en proyectos de descompilación.
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - Descompilador JavaScript: desempaqueta bundles webpack/esbuild/Metro/Browserify en módulos y revierte la salida de minificadores y Babel/TypeScript a código legible. [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### Scripting

[[scripting](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - El lenguaje de los tres cuerpos.
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - Lexer, analizador e intérprete experimental de JavaScript escrito en Rust.
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - Analizador e intérprete del lenguaje Common Expression.
* [duckscript](https://crates.io/crates/duckscript) - [Simple, extendable and embeddable scripting language.](https://github.com/sagiegurari/duckscript). [![build badge](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - Lenguaje pequeño, determinista y seguro para hilos, con sintaxis de Python.
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - Lenguaje de scripting similar a Lisp para el desarrollo de juegos.
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - Lenguaje de programación funcional para arte procedural. [![build badge](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - Lenguaje de programación funcional, pequeño y con tipado estático.
* [kcl](https://github.com/kcl-lang/kcl) - Lenguaje funcional y de registros basado en restricciones, utilizado principalmente para escenarios de configuración y políticas.
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - Máquina virtual Lua experimental y sin pila, implementada íntegramente en Rust, con recolector de basura incremental que detecta ciclos, funciones de aislamiento y enlaces seguros entre Rust y Lua. [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - Entorno de ejecución políglota y multiplataforma, compatible con NodeJS, JavaScript, TypeScript, Python, Ruby, C#, Wasm, Java, Cobol y más. [![build badge](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - Lenguaje de scripting compilado y con tipado estático, con compatibilidad integrada para recarga en caliente.
* [murarth/ketos](https://github.com/murarth/ketos) - Lenguaje de programación funcional y dialecto de Lisp que sirve como lenguaje de scripting y extensión para Rust.
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - Lenguaje de scripting dinámico y de estilo Rust.
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - Lenguaje de scripting integrado, pequeño y rápido, parecido a una mezcla de JavaScript y Rust. [![build badge](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - Lenguaje de programación dinámico integrable.
* [trynova/nova](https://github.com/trynova/nova) - Motor de JavaScript escrito íntegramente en Rust.

### Simulación

[[simulation](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - Biblioteca de herramientas de astrodinámica de alta fidelidad, rápida, fiable y validada, utilizada para diseñar misiones espaciales y determinar órbitas. [![Build Status](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - Implementaciones Rust de algoritmos de robótica inspiradas en PythonRobotics, que abarcan planificación de rutas, localización, SLAM y control; incluyen compatibilidad no_std y ejemplos ROS 2. [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### Redes sociales

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Envoltorio Rust multiplataforma para Telegram Database Library (TDLib). [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### Sistema

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - Crate para obtener el usuario y el entorno actuales. [![build badge](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - Biblioteca multiplataforma para obtener información del sistema. [![build badge](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - Biblioteca para recuperar métricas del sistema, kernel y procesos de los pseud sistemas de archivos /proc y /sys.
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - Crate de biblioteca para recopilar información del sistema, como CPU, distribución, entorno, kernel, etc.
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - Códigos de salida del sistema definidos en [`<sysexits.h>`](https://man.openbsd.org/sysexits). [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### Planificación de tareas

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - Administrador de tareas diferidas. Como crontab, pero permite tareas asíncronas. [![Build](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - Sistema de planificación de tareas de alto rendimiento, creado con Tokio, que ofrece persistencia, repetición de tareas y programación basada en Cron para operaciones fiables y temporizadas.

### Motor de plantillas

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - Motor de plantillas Handlebars con herencia y compatibilidad con asistentes personalizados.
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarte significa **Y**et **A**nother **R**ust **T**emplate **E**ngine y es el motor de plantillas más rápido.
* HTML
  * [askama](https://github.com/askama-rs/askama) - Motor de renderizado de plantillas basado en Jinja.
  * [kaj/ructe](https://github.com/kaj/ructe) - Sistema de plantillas HTML.
  * [Keats/tera](https://github.com/Keats/tera) - Motor de plantillas basado en Jinja2 y el lenguaje de plantillas de Django. [![Actions Status](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - Plantillas HTML en tiempo de compilación.
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - Motor de plantillas minimalista basado en Jinja2 y con pocas dependencias. [![Tests](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml: motor de plantillas ligero, con seguridad de tipos y compilación en tiempo de compilación, que integra Rust en HTML y HTML en Rust.
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - Plantillas HTML en tiempo de compilación.
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Implementación en Rust de la especificación Mustache.

### Procesamiento de texto

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - Coincidencia sencilla de cadenas con comodines de interrogación y asterisco. [![Actions Status](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - Construcción de arrays de sufijos en tiempo lineal (con compatibilidad Unicode).
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - Tabulaciones elásticas (es decir, alineación de columnas de texto).
* [cpc](https://github.com/probablykasper/cpc) - Analiza y calcula expresiones matemáticas con compatibilidad para unidades y conversiones, desde `1+2` hasta `1% of round(1 lightyear / 14!s to km/h)`.
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - Rutinas de distancia de edición Rust aceleradas con SIMD; admiten cálculos rápidos de distancia de Hamming, Levenshtein, Damerau-Levenshtein restringida, etc., y búsqueda de cadenas. [![build badge](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - Implementación de expresiones regulares diseñada para ofrecer un conjunto de funciones relativamente amplio, como look-around y backtracking. [![crates](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![build badge](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - Biblioteca de detección de idiomas basada en trigramas.
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - Unión genérica de cadenas e iterables.
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - Ajusta texto en líneas (con compatibilidad para guionado).
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - Paquete diminuto que elimina de las cadenas los caracteres Unicode confusos/homoglifos comunes. [![crates](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![build badge](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - Lector que permite recorrer hacia delante, hacia atrás y aleatoriamente las líneas de archivos enormes, sin consumir iteradores.
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - Construye [n-gramas](https://en.wikipedia.org/wiki/N-gram) a partir de iteradores arbitrarios.
* [rust-lang/regex](https://github.com/rust-lang/regex) - Expresiones regulares (estilo RE2).
* [strsim-rs](https://crates.io/crates/strsim) - Métricas de similitud entre cadenas.
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - Conversor de HTML a Markdown rápido y compatible con CommonMark, con núcleo Rust y enlaces para 12 lenguajes.
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - Biblioteca de inteligencia documental que extrae texto, tablas y metadatos de más de 97 formatos (PDF, Office, imágenes con OCR, HTML, correo electrónico y archivos comprimidos), con enlaces para 11 lenguajes.
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Implementación multilingüe del algoritmo RAKE para Rust.

### Búsqueda de texto

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - Motor de búsqueda aproximada sencillo y ligero, que busca cadenas similares en memoria.
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - Implementación rápida de conjuntos y mapas ordenados mediante máquinas de estados finitos.
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - Biblioteca de recuperación de información perezosa, sin asignaciones y agnóstica a los datos.
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - API de búsqueda de texto completo ultrarrápida, inmediata, muy relevante y tolerante a errores tipográficos. [![Build Status](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - Extensión de PostgreSQL que permite realizar búsquedas de texto completo en tablas SQL mediante el algoritmo BM25, la función de clasificación más avanzada para búsquedas de texto completo.
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - Biblioteca de búsqueda de texto completo en menos de un milisegundo y servidor multiusuario, escrita en Rust.
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - Biblioteca de búsqueda de texto completo rapidísima, escrita en Rust. [![Build Status](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### Código inseguro

* [zerocopy](https://crates.io/crates/zerocopy) - «Zerocopy facilita la manipulación de memoria sin coste. Escribimos `unsafe` para que tú no tengas que hacerlo».

### Vídeo

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - Envuelve un binario independiente de FFmpeg en una interfaz Iterator intuitiva. [![Build Status](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - Enlaces Rust seguros para el framework ScreenCaptureKit de Apple, para capturar pantalla/audio en macOS. [![Build Status](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### Virtualización

* [beneills/quantum](https://github.com/beneills/quantum) - Simulador avanzado de computación cuántica.
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - Entorno de ejecución independiente para WebAssembly. [![Build Status](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - Entorno de ejecución aislado de WebAssembly para ejecutar código no confiable.
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - CrOSVM permite que Chrome OS ejecute aplicaciones Linux en un entorno virtualizado rápido y seguro.
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - Programa de espacio de usuario para módulos del kernel bhyve de illumos.
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - Virtualización acelerada por hardware en OS X.
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - Arenas microVM portátiles en libkrun con bifurcación de copia en escritura de VM en ejecución.
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - Entorno de ejecución ligero para WebAssembly.

### Programación web

Consulta también [¿Ya está lista la web?](https://www.arewewebyet.org) y [comparación de marcos web de Rust](https://github.com/flosse/rust-web-framework-comparison).
* Backend
  * [actix/actix-web](https://github.com/actix/actix-web) - Marco web asíncrono y ligero, compatible con WebSocket.
  * [Anansi](https://github.com/saru-tora/anansi) - Marco web full-stack sencillo.
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - Marco Rust para proyectos personales y startups, inspirado en Rails. [![Build](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - Rocket es un marco web centrado en la facilidad de uso, expresividad y velocidad.
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - Marco web ergonómico con OpenAPI en tiempo de compilación y MCP nativo.
  * [summer-rs](https://github.com/summer-rs/summer-rs) - summer-rs es un marco de aplicaciones escrito en Rust, inspirado en Spring Boot de Java.
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - Marco web multitransporte: HTTP/1.1, HTTP/2, HTTP/3, WebSocket, SSE, gRPC, TCP/UDP y sockets Unix desde un único enrutador, en Tokio o Compio. [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - Marco web ergonómico y modular, creado con Tokio, Tower y Hyper. [![Build badge](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - Marco web full-stack modular y completo para Rust. Incluye renderizado en servidor, reactividad del cliente sin WASM, enrutamiento basado en módulos y agrupación integrada de Tailwind/recursos. [![Build Status](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - Kit componible para crear aplicaciones de Internet con Rust asíncrono.
* Cliente / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - Subcomando de Cargo para la web del lado del cliente.
  * [leptos](https://github.com/leptos-rs/leptos) - Leptos es un marco web isomórfico full-stack que aprovecha la reactividad granular para crear interfaces de usuario declarativas.[![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - Marco web del lado del cliente que sigue de cerca The Elm Architecture.
  * [seed](https://github.com/seed-rs/seed) - Marco para crear aplicaciones web.
  * [stdweb](https://crates.io/crates/stdweb) - Biblioteca estándar para la web del lado del cliente.
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - Colección de utilidades esenciales de Leptos inspiradas en React-Use y VueUse, con compatibilidad con SSR. [![Build Status](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - Biblioteca de componentes Leptos fácil de usar, basada en Fluent Design.
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - Marco web mínimo para Rust y wasm, implementado en 800 líneas de código.
  * [yew](https://crates.io/crates/yew) - Marco para crear aplicaciones web del lado del cliente.
* Cliente HTTP
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - Cliente HTTP ergonómico de Rust con huella TLS. [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - Enlaces para [libcurl](https://curl.se/libcurl/).
  * [async-graphql](https://github.com/async-graphql/async-graphql) - Biblioteca de servidor GraphQL. [![Build Status](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Marco cliente HTTP/2.
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - Yukikaze es una biblioteca cliente HTTP pequeña, atractiva y elegante, basada en hyper. [![build badge](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - Herramienta práctica y rápida para enviar solicitudes HTTP. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![GitHub actions Status](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - Solicitudes y respuestas GraphQL con tipado y correctas. [![GitHub actions Status](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - Implementación HTTP. [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - Marco de servicios modular para mover y transformar paquetes de red; puede utilizarse, entre otras cosas, para crear clientes con suplantación de huellas TLS, JA3/JA4, H2 y QUIC/H3.
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - Cliente HTTP ergonómico.
* Servidor HTTP
  * [branca](https://crates.io/crates/branca) - Implementación de Branca para tokens de API autenticados y cifrados.
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Servidor HTTP/2 de bajo y alto nivel.
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - Marco web rápido y sin código repetitivo.
  * [Cot](https://github.com/cot-rs/cot) - El marco web de Rust para desarrolladores que quieren trabajar con sencillez.
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - Implementación de JSON Web Token.
  * [Gotham](https://github.com/gotham-rs/gotham) - Marco web flexible que no sacrifica la seguridad ni la velocidad.
  * [Graphul](https://github.com/graphul-rs/graphul) - Marco web inspirado en Express. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Middleware de marco web Iron.
  * [hyperium/hyper](https://github.com/hyperium/hyper) - Implementación HTTP. [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - Marco de servidor basado en middleware.
  * [Juniper](https://github.com/graphql-rust/juniper) - Biblioteca de servidor GraphQL.
  * [miketang84/sapper](https://github.com/miketang84/sapper) - Marco web ligero basado en hyper asíncrono.
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - Inspirado en [Express](https://expressjs.com/).
  * [plabayo/rama](https://github.com/plabayo/rama) - Marco de servicios modular para mover y transformar paquetes de red; también puede utilizarse para identificar huellas de clientes entrantes.
  * [poem-web/poem](https://github.com/poem-web/poem) - Marco web completo y fácil de usar. [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - Micromarco de API REST inspirado en [Grape](https://github.com/ruby-grape/grape) y [Hyper](https://github.com/hyperium/hyper).
  * [Salvo](https://github.com/salvo-rs/salvo) - Marco web fácil de usar, basado en hyper y tokio. [![build build](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - Marco web progresivo con control de bajo nivel, sin complicaciones.
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - Marco de servidor web muy sencillo y componible, con velocidad de warp. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - Biblioteca de servidor HTTP de bajo nivel.
  * [tomaka/rouille](https://github.com/tomaka/rouille) - Marco web.
  * [Zino](https://github.com/zino-rs/zino) - Marco de nueva generación para aplicaciones componibles.
* Miscelánea
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - Marco web pensado para crear aplicaciones mantenibles y bien organizadas.
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - Marco RESTful progresivo destinado a simplificar el desarrollo full-stack.
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - Kit de herramientas web multilenguaje, con núcleo Rust y enlaces para Python, TypeScript, Ruby y PHP.
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyer está diseñado para servicios basados en solicitudes y respuestas fiables, flexibles y rápidos, incluido el procesamiento de datos, el rastreo web, etc.; ofrece funciones completas y flexibles sin renunciar a la velocidad.
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - Motor de políticas de autorización integrado en tu aplicación. [![Build Status](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - Biblioteca similar a BeautifulSoup de Python, diseñada para manipular y consultar documentos HTML rápida y fácilmente. [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - Macro para integrar recursos estáticos en un binario Rust.
  * [rookie](https://github.com/thewh1teagle/rookie) - Carga cookies de cualquier navegador en cualquier plataforma. ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - Análisis de HTML y consultas mediante selectores CSS. [![Build Status](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Biblioteca para la API de Discord.
  * [softprops/openapi](https://github.com/softprops/openapi) - Biblioteca para procesar archivos de especificaciones OpenAPI.
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - Biblioteca para enviar webhooks y verificar firmas.
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - Crea fácilmente bots atractivos para Telegram. [![pipeline status](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - Elegante marco de bots de Telegram. [![Build Status](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - Validador ergonómico, funcional y configurable.
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - Biblioteca para extraer datos útiles de documentos HTML, adecuada para el web scraping.
  * [Utoipa](https://github.com/juhaku/utoipa) - Documentación OpenAPI elegante, rápida, basada en código y generada en tiempo de compilación. [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Utoipa build](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - Macros Rust para automatizar la adición de rutas/esquemas a Utoipa. [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - Motor de rastreo y scraping web de alto rendimiento, con conversión de HTML a Markdown, alternativa con headless Chrome y enlaces para 11 lenguajes.
* Proxy inverso
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - Proxy inverso HTTP. [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* Generadores de sitios estáticos
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - Generador de sitios estáticos. [![Build Status](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - Generador de sitios estáticos a partir de archivos Markdown.
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - Generador de sitios estáticos con criterios definidos y todo integrado. [![Build Status](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - Generador de sitios estáticos rapidísimo y sencillo.
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - Generador de blogs sencillo y paralelizado.
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - Generador de blogs sin configuración.
  * [zensical/zensical](https://github.com/zensical/zensical) - Generador de sitios estáticos moderno, creado por el equipo de Material para MkDocs. [![Build](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Cliente y servidor compatibles con cifrado.
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - WebSockets ligeros y controlados por eventos.
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - Biblioteca muy sencilla para acortar URL. [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchet es una implementación rápida, ligera y totalmente asíncrona del protocolo WebSocket, compatible con extensiones y Deflate.
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - Biblioteca WebSocket sencilla para Rust, que compila tanto a destinos nativos como web (WASM). Compatible con el envío y la recepción de mensajes de texto/binarios mediante una API compatible con asincronía. [![unsafe forbidden](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - Marco para gestionar conexiones WebSocket, tanto de clientes como de servidores.
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - Implementación ligera de WebSocket basada en flujos.
  * [vi/websocat](https://github.com/vi/websocat) - CLI para interactuar con WebSockets, con funciones de Netcat, Curl y Socat.

## Registros

Un registro te permite publicar tus bibliotecas Rust como paquetes crate para compartirlas con otras personas, de forma pública o privada.

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - Registro privado de Cargo ligero y completo para organizaciones, con funciones similares a [docs.rs](https://docs.rs) y [deps.rs](https://deps.rs). [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - SaaS de gestión de paquetes totalmente administrado, con compatibilidad de primera clase para registros públicos y privados de Cargo/Rust (además de muchos otros). Gratuito para proyectos de código abierto.
* [Crates](https://crates.io) - Registro público oficial de Rust/Cargo.
* [getnora-io/nora](https://github.com/getnora-io/nora) - Registro de artefactos ligero y de un solo binario, compatible con Docker, Maven, npm, PyPI, Cargo, Go y formatos sin procesar. Incluye proxy upstream con caché y modo aislado de Internet.
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - Plataforma de repositorios sencilla y moderna, capaz de alojar repositorios de crates Rust y actuar como proxy de crates.io. También admite otros tipos de paquetes, como Docker, PyPI, Maven, npm y RubyGems. Disponible como servicio en la nube o autoalojado.
* [w4/chartered](https://github.com/w4/chartered) - Registro privado de Cargo, autenticado y con permisos. [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## Recursos

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - De la búsqueda de estabilidad de software por parte de un desarrollador a un proyecto que estuvo a punto de desestabilizar a su creador. [Part 2](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5). [Part 3](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18).
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - Recomendaciones de la agencia francesa de ciberseguridad (ANSSI) para desarrollar aplicaciones seguras con Rust, con una lista de comprobación generada.
* Arte
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - Paquete de más de 50 ilustraciones gratuitas de Ferris con distintas emociones, poses y situaciones, en PNG y SVG, con licencia CC0.
* Pruebas de rendimiento
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - Benchmarks web.
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - Implementaciones del [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/).
* Diapositivas y presentaciones
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - Presentado por [Julia Evans](https://x.com/b0rk) en Rustconf 2016.
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - Presentado por [Nicholas Matsakis](https://github.com/nikomatsakis) en C++Now 2018.
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - Presentado por [Michael Gattozzi](https://github.com/mgattozzi) en RustConf 2017.
* Aprendizaje
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - Aprende Rust con 100 ejercicios prácticos que abarcan sintaxis, tipos y más.
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Libro de Bjorn Madsen.
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - Visualizaciones interactivas de Rust en tiempo de compilación y ejecución.
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - Lista de retransmisiones en directo seleccionadas por la comunidad.
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - Lista de mentores dispuestos a orientar a estudiantes y enseñarles Rust y programación.
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - Curso de programación Rust de informática de la Universidad de Pensilvania.
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - Crea tu propio Redis, Git, Docker o SQLite.
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - Curso de tres días sobre los fundamentos de Rust, más cursos de un día sobre Android, Rust bare-metal y concurrencia. Disponible en inglés, [Brazilian Portuguese](https://google.github.io/comprehensive-rust/pt-BR/) y [Korean](https://google.github.io/comprehensive-rust/ko/).
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - Aprende Rust en inglés sencillo.
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - Introducción práctica a la creación de firmware rápido, eficiente y mucho más seguro que el software integrado tradicional escrito en C o C++.
  * [exercism.org](https://exercism.org/tracks/rust) - Ejercicios de programación que te ayudan a aprender nuevos conceptos de Rust.
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - Guía práctica para aprender Rust creando juegos, de [Herbert Wolverson](https://github.com/thebracket/) (de pago).
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - Guía sobre el funcionamiento de los préstamos en Rust y cómo evitar errores de borrow, de [Qouteall](https://github.com/qouteall).
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - Colección de artículos, charlas y repositorios revisados por pares que enseñan Rust idiomático.
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - Itinerario estructurado para aprender Rust, con laboratorios prácticos diseñados para que principiantes dominen Rust paso a paso.
  * [Learn Rust 101](https://rust-lang.guide/) - Guía que te ayudará en tu camino para convertirte en Rustacean (desarrollador Rust).
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - Aprende Rust con 500 líneas de código y crea desde cero una aplicación CLI de tareas pendientes.
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - Análisis en profundidad de las reglas de gestión de memoria de Rust mediante la implementación de varios tipos de estructuras de listas.
  * [Little Book of Rust Books](https://lborb.github.io/book/) - Lista seleccionada de libros y guías prácticas de Rust.
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - Lista de recursos recomendados y votados por la comunidad de programación.
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - Libro de introducción al lenguaje Rust.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - Colección de ejemplos ejecutables que ilustran diversos conceptos de Rust y bibliotecas estándar.
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - Colección de ejemplos sencillos que muestran buenas prácticas para realizar tareas de programación habituales con crates del ecosistema Rust.
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - Más de 550 tarjetas didácticas para aprender Rust desde los primeros principios.
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - Introducción rápida a Rust para desarrolladores de software con experiencia.
  * [Rust Gym](https://github.com/warycat/rustgym) - Gran colección de problemas de entrevistas de programación resueltos en Rust.
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - Guía práctica de programación de sistemas con Rust, de [Tim McNamara](https://github.com/timClicks) (de pago).
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - Serie de vídeos de [Carol Nichols](https://github.com/carols10cents) y [Jake Goulding](https://github.com/shepmaster) (de pago).
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Hoja de referencia del lenguaje Rust.
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - Aprende Rust en vietnamita.
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - Repositorio dedicado a responder la pregunta: «Entonces, Rust. ¿Por dónde *empiezo*?». Selección de recursos y ruta de aprendizaje elegidos exclusivamente para principiantes.
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - Colección de recursos útiles para aprender Rust.
  * [Rustfinity](https://www.rustfinity.com) - Plataforma interactiva para practicar Rust mediante ejercicios y retos prácticos.
  * [Rustlings](https://github.com/rust-lang/rustlings) - Pequeños ejercicios para acostumbrarte a leer y escribir código Rust.
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - Plan de estudios de informática para practicar los conocimientos académicos adquiridos con Rust.
  * [stdx](https://github.com/brson/stdx) - Aprende primero estos crates como complemento de std.
  * [Tour of Rust](https://tourofrust.com) - Guía interactiva y paso a paso de las funciones del lenguaje de programación Rust.
* Rendimiento
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - Todo lo que necesitas saber sobre la optimización de comprobaciones de límites.
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Resumen de las funciones del lenguaje Rust orientadas al rendimiento.
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Consejos para optimizar programas Rust.
* Pódcasts
  * [New Rustacean](https://newrustacean.com) - Podcast sobre cómo aprender Rust.
  * [Rustacean Station](https://rustacean-station.org/) - Proyecto comunitario para crear contenido de pódcast sobre Rust.
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Catálogo de patrones de diseño, antipatrones e idiomatismos de Rust.
* [Rust Guidelines](http://aturon.github.io/) - Publicaciones de Aaron Turon sobre Rust.
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - Manual de 10 capítulos para escribir código Rust realmente seguro: seguridad de tipos, prevención de pánicos y más.
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - Crea servidores backend, servicios y frontends en Rust para desarrollar aplicaciones rápidas, fiables y fáciles de mantener.
* [Rust Subreddit](https://www.reddit.com/r/rust/) - Subreddit (foro) donde se publican y debaten preguntas, artículos y recursos relacionados con Rust.
* [RustBooks](https://github.com/sger/RustBooks) - Lista de libros sobre Rust.
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - Charlas grabadas de RustCamp 2015.
* [RustViz](https://github.com/rustviz/rustviz) - Genera visualizaciones a partir de programas Rust sencillos para ayudar a comprender mejor los mecanismos de tiempos de vida y préstamos de Rust.
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - Implementación de (parte de) un cliente BitTorrent en Rust.

## Licencia

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
