# Awesome Rust [![Badge d’analyse](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![Badge de compilation](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Suivre la liste Awesome](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

Une sélection de code et de ressources Rust.

Si vous souhaitez contribuer, veuillez lire [ceci](CONTRIBUTING.md).

<!-- BEGIN mktoc {"min_depth": 2} -->

- [Applications](#applications)
  - [Audio et musique](#audio-and-music)
  - [Blockchain](#blockchain)
  - [Bases de données](#database)
  - [Systèmes embarqués](#embedded)
  - [Émulateurs](#emulators)
  - [Gestionnaire de fichiers](#file-manager)
  - [Finance](#finance)
  - [Jeux](#games)
  - [Graphisme](#graphics)
  - [Traitement d'images](#image-processing)
  - [Automatisation industrielle](#industrial-automation)
  - [Files de messages](#message-queue)
  - [MLOps](#mlops)
  - [Observabilité](#observability)
  - [Systèmes d'exploitation](#operating-systems)
  - [Gestionnaires de paquets](#package-managers)
  - [Paiements](#payments)
  - [Productivité](#productivity)
  - [Protocoles de routage](#routing-protocols)
  - [Outils de sécurité](#security-tools)
  - [Réseaux sociaux](#social-networks)
  - [Outils système](#system-tools)
  - [Planification de tâches](#task-scheduling)
  - [Éditeurs de texte](#text-editors)
  - [Traitement de texte](#text-processing)
  - [Utilitaires](#utilities)
  - [Vidéo](#video)
  - [Virtualisation](#virtualization)
  - [Web](#web)
  - [Serveurs web](#web-servers)
  - [Automatisation des flux de travail](#workflow-automation)
- [Outils de développement](#development-tools)
  - [Système de compilation](#build-system)
  - [Débogage](#debugging)
  - [Déploiement](#deployment)
  - [Systèmes embarqués](#embedded-1)
  - [FFI](#ffi)
  - [Formateurs](#formatters)
  - [EDI](#ides)
  - [Profilage](#profiling)
  - [Services](#services)
  - [Analyse statique](#static-analysis)
  - [Tests](#testing)
  - [Transpilation](#transpiling)
  - [Tunnel](#tunnel)
- [Bibliothèques](#libraries)
  - [Intelligence artificielle](#artificial-intelligence)
    - [Algorithmes génétiques](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [Apprentissage automatique](#machine-learning)
    - [OpenAI](#openai)
    - [Outillage](#tooling)
  - [Astronomie](#astronomy)
  - [Asynchronisme](#asynchronous)
  - [Audio et musique](#audio-and-music-1)
  - [Authentification](#authentication)
  - [Automobile](#automotive)
  - [Bioinformatique](#bioinformatics)
  - [Mise en cache](#caching)
  - [Cloud](#cloud)
  - [Ligne de commande](#command-line)
  - [Compression](#compression)
  - [Calcul](#computation)
  - [Concurrence](#concurrency)
  - [Configuration](#configuration)
  - [Cryptographie](#cryptography)
  - [Traitement de données](#data-processing)
  - [Diffusion de données](#data-streaming)
  - [Structures de données](#data-structures)
  - [Visualisation de données](#data-visualization)
  - [Bases de données](#database-1)
  - [Date et heure](#date-and-time)
  - [Systèmes distribués](#distributed-systems)
  - [Conception pilotée par le domaine](#domain-driven-design)
  - [eBPF](#ebpf)
  - [Courriel](#email)
  - [Encodage](#encoding)
  - [Système de fichiers](#filesystem)
  - [Finance](#finance-1)
  - [Programmation fonctionnelle](#functional-programming)
  - [Développement de jeux](#game-development)
  - [Géospatial](#geospatial)
  - [Algorithmes de graphes](#graph-algorithms)
  - [Graphisme](#graphics-1)
  - [Interface graphique](#gui)
  - [Traitement d'images](#image-processing-1)
  - [Spécification du langage](#language-specification)
  - [Licences](#licensing)
  - [Journalisation](#logging)
  - [Macros](#macro)
  - [Langage de balisage](#markup-language)
  - [Mobile](#mobile)
  - [Programmation réseau](#network-programming)
  - [Analyse syntaxique](#parsing)
  - [Périphériques](#peripherals)
  - [Spécifique aux plateformes](#platform-specific)
  - [Rétro-ingénierie](#reverse-engineering)
  - [Scripts](#scripting)
  - [Simulation](#simulation)
  - [Réseaux sociaux](#social-networks-1)
  - [Système](#system)
  - [Planification de tâches](#task-scheduling-1)
  - [Moteur de modèles](#template-engine)
  - [Traitement de texte](#text-processing-1)
  - [Recherche textuelle](#text-search)
  - [Code non sûr](#unsafe)
  - [Vidéo](#video-1)
  - [Virtualisation](#virtualization-1)
  - [Programmation web](#web-programming)
- [Registres](#registries)
- [Ressources](#resources)
- [Licence](#license)
<!-- END mktoc -->

## Applications

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - Un interpréteur du langage Wolfram propulsé par Rust.
* [alacritty](https://github.com/alacritty/alacritty) - Un émulateur de terminal multiplateforme accéléré par GPU
* [Andromeda](https://github.com/tryandromeda/andromeda) - Un environnement d'exécution JavaScript et TypeScript construit de zéro en Rust 🦀 et propulsé par The Nova Engine.
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - Une interface textuelle pour explorer les modèles d'IA, les benchmarks et les agents de programmation [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Une implémentation de Tor. (Pour l'instant, c'est un client assez incomplet. Mais restez à l'écoute !) [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - Un shell d'assemblage interactif.
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - Une interface graphique Clash moderne et multiplateforme basée sur tauri et rust, compatible avec Windows, macOS et Linux.
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - Une implémentation du VPN WireGuard en espace utilisateur [![Badge de compilation](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - Un outil de gestion de bases de données léger et open source, construit avec Tauri, prenant en charge MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB et bien d'autres. [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - SSO et VPN WireGuard open source pour les entreprises, avec une véritable authentification à deux/multiples facteurs
* [denoland/deno](https://github.com/denoland/deno) - Un environnement d'exécution JavaScript/TypeScript sécurisé construit avec V8 et Tokio [![État de compilation](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - Convertissez vos images et fonds d'écran préférés avec vos palettes de couleurs/thèmes favoris [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - Un VPN maillé simple, complet et décentralisé avec prise en charge de WireGuard. [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![Actions GitHub](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![Actions GitHub](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - Un éditeur simple pour des besoins simples. [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - Une application de test de charge HTTP inspirée de la syntaxe d'Ansible
* [fend](https://github.com/printfn/fend) - Une calculatrice à précision arbitraire tenant compte des unités [![Compilation](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - Des microservices simples
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - Un agent d'IA de bureau multiplateforme avec un environnement d'exécution Rust, travaillant dans de vrais dépôts et capable de piloter le navigateur, le terminal et les applications de bureau
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - Un outil de téléchargement Mega très rapide et relativement stable [![Compilation](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - Un gestionnaire de fenêtres en mosaïque pour Windows inspiré d'i3wm, avec configuration YAML, prise en charge de plusieurs écrans et commandes au clavier
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - Des extensions d'internationalisation et de rendu pour mdbook.
* [habitat](https://github.com/habitat-sh/habitat) - Un outil créé par Chef pour construire, déployer et gérer des applications.
* [Herd](https://github.com/imjacobclark/Herd) - Une application expérimentale de test de charge HTTP
* [hickory-dns](https://crates.io/crates/hickory-dns) - Un serveur DNS [![État de compilation](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - Un réseau superposé ou maillé privé utilisant Wireguard en interne
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - Un collecteur de données rapide, simple et léger
* [kalker](https://github.com/PaddiM8/kalker) - Une calculatrice scientifique prenant en charge une syntaxe mathématique avec variables et fonctions définies par l'utilisateur, dérivation, intégration et nombres complexes. Multiplateforme avec prise en charge de WASM [![État de compilation](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - Une application multiplateforme de zone de notification pour gérer et partager plusieurs configurations de redirection de ports kubectl. [![État de compilation](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - Un VPN pair à pair haute performance
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - Un maillage de services ultraléger pour Kubernetes.
* [LWE](https://github.com/YangYuS8/lwe) - Une application de bureau Linux pour explorer, gérer et appliquer des contenus Wallpaper Engine, construite avec Rust et Tauri.
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - Un préprocesseur pour [mdBook](https://github.com/rust-lang/mdBook), utilisant KaTeX pour afficher des expressions mathématiques LaTeX.
* [MaidSafe](https://github.com/maidsafe) - Une plateforme décentralisée.
* [mayocream/koharu](https://github.com/mayocream/koharu) - Un traducteur de mangas basé sur l'apprentissage automatique, avec détection automatique des bulles, OCR, reconstruction d'images et traduction par LLM, construit avec Candle et Tauri
* [mdBook](https://github.com/rust-lang/mdBook) - Un utilitaire en ligne de commande pour créer des livres à partir de fichiers markdown [![État de compilation](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - Un système de gestion de monorepos et de bases de code monolithiques prenant en charge Git, également une implémentation open source non officielle de Google Piper.
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - Un backend pour mdbook qui vérifie vos liens pour vous.
* [mirrord](https://github.com/metalbear-co/mirrord) - Connectez votre processus local à votre environnement cloud et exécutez votre code local dans les conditions du cloud
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - Un VPN maillé privé de type Tailscale basé sur les identités Nostr et un plan de données reposant sur FIPS. Propose des applications natives multiplateformes (macOS, Linux, Windows, mobile) et une interface en ligne de commande/un démon.
* [newdee/magpie](https://github.com/newdee/magpie) - Un lanceur de type Spotlight privilégiant le stockage local, qui recherche sémantiquement dans vos favoris GitHub, fichiers locaux, images et vidéos, entièrement sur votre appareil. [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - Un registre et lanceur de jeux Steam et sans DRM pour Linux et macOS
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - Un client de terminal Rust/ratatui pour DeepSeek Harness et d'autres agents de programmation compatibles ACP. [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - Un client de terminal SSH multiplateforme et émulateur de terminal local construit avec Tauri 2.0 et une implémentation SSH entièrement en Rust (russh). Propose des connexions multiplexées, un gestionnaire de fichiers SFTP, un EDI intégré (CodeMirror 6), la redirection de ports (-L/-R/-D), la reconnexion automatique Grace Period, un système de plugins, un assistant IA, l'export chiffré (.oxide) et 11 langues. [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - Un système de gestion de versions distribué basé sur des correctifs
* [provrb/OBDium](https://github.com/provrb/obdium) - Une application multiplateforme basée sur Tauri pour tous les diagnostics de véhicules. Connectez votre véhicule via un adaptateur ELM327 et consultez les codes d'erreur, les données OBD-II en direct, les tests de préparation I/M et bien plus !
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - Une plateforme de développement rapide de niveau entreprise (Axum + SeaORM + JWT + VUE3, prend en charge MySQL/Postgres/SQLite)
* [Rauthy](https://github.com/sebadob/rauthy) - Gestion des identités et des accès avec authentification unique OpenID Connect
* [Rio](https://github.com/raphamorim/rio) - Un émulateur de terminal accéléré matériellement par GPU, propulsé par WebGPU, conçu pour fonctionner sur les ordinateurs de bureau et dans les navigateurs.
* [rkik](https://github.com/aguacero7/rkik) - Un outil en ligne de commande conçu pour l'inspection NTP passive et sans état, à l'image de dig ou ping pour DNS et ICMP. Prend en charge les requêtes asynchrones et la surveillance continue. [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - Un exécuteur universel multilangage et REPL intelligent (plus de 25 langages : Python, JS, Go, C, etc.).
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - Un environnement d'exécution de programmes numériques à syntaxe MATLAB, avec accélération GPU via wgpu. [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - Une plateforme de développement IoT haute performance construite avec Rust, conçue pour prendre en charge plusieurs protocoles et traiter les données en temps réel. Cette plateforme prend en charge les protocoles MQTT, WebSockets (WS), TCP et CoAP, la rendant très flexible pour diverses applications IoT.
* [rx](https://github.com/cloudhead/rx) - Un éditeur moderne de pixel art inspiré de Vi
* [Ryot](https://github.com/ignisda/ryot) - Une application auto-hébergée pour suivre sa consommation de médias, sa condition physique, etc.
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - Une application multiplateforme de zone de notification pour organiser et exécuter des commandes de terminal prédéfinies avec raccourcis globaux, menus imbriqués et configuration JSON (Tauri + Vue).
* [Saga Reader](https://github.com/sopaco/saga-reader) - Un lecteur Internet extrêmement rapide et léger propulsé par l'IA. Prend en charge la récupération d'informations de moteurs de recherche et de flux RSS.
* [Servo](https://github.com/servo/servo) - Un prototype de moteur de navigateur web
* [shoes](https://github.com/cfal/shoes) - Un serveur mandataire multiprotocole
* [shuttle](https://github.com/shuttle-hq/shuttle) - Une plateforme sans serveur.
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - Une application multiplateforme pour surveiller facilement votre trafic réseau [![Badge de compilation](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - Un compilateur TypeScript / JavaScript ultrarapide
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - Un assistant de programmation IA auto-hébergé, alternative open source à GitHub Copilot avec prise en charge du GPU et interface OpenAPI [![Dernière version publiée](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - Une PaaS auto-hébergée remplaçant Vercel, l'analyse d'audience, le suivi des erreurs et la surveillance de disponibilité par un unique binaire Rust
* [tiny](https://github.com/osa1/tiny) - Un client IRC en terminal
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - Une suite d'outils open source pour personnaliser Android, offrant l'accès root, la manipulation des images de démarrage et des modifications sans toucher au système
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - Réseaux maillés privés avec tunnels publics, SSH basé sur l'identité et transfert de fichiers pair à pair
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - Un agent de programmation local pour le terminal, l'interface graphique de bureau et les flux de travail en ligne de commande, avec état persistant des tâches et vérification fondée sur des preuves. [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - Un système de composition typographique basé sur le balisage [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - Un client VPN WireGuard pour macOS, Linux et Windows construit avec Tauri.
* [vortix](https://github.com/Harry-kp/vortix) - Une interface textuelle pour WireGuard et OpenVPN avec télémétrie en temps réel, détection des fuites et coupe-circuit
* [vproxy](https://github.com/0x676e67/vproxy) - Un serveur mandataire HTTP/HTTPS/SOCKS5 haute performance [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - Un environnement d'exécution WebAssembly sûr et rapide prenant en charge WASI et Emscripten [![État de compilation](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - Un générateur complet de fausses API REST
* [wezterm](https://github.com/wezterm/wezterm) - Un émulateur et multiplexeur de terminal multiplateforme accéléré par GPU
* [WinterJS](https://github.com/wasmerio/winterjs) - Un environnement d'exécution JavaScript sécurisé construit avec SpiderMonkey et Axum
* [zellij](https://github.com/zellij-org/zellij) - Un multiplexeur de terminal (espace de travail) prêt à l'emploi
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - Un client graphique Mihomo (Clash Meta) moderne, léger et sécurisé, construit avec Tauri. [![Audit de sécurité](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### Audio et musique

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - Un environnement d'exécution natif Rust pour agents vocaux d'IA en temps réel (téléphone + WebRTC), auto-hébergé en un seul binaire, compatible pipecat
* [dano](https://github.com/kimono-koans/dano) - Un hashdeep/md5tree (mais bien plus encore) pour les fichiers multimédias
* [enginesound](https://github.com/DasEtwas/enginesound) - Une application graphique et en ligne de commande générant de façon procédurale des sons de moteur semi-réalistes. Offre une configuration approfondie, une fréquence d'échantillonnage variable et une fenêtre d'analyse fréquentielle.
* [Festival](https://github.com/hinto-janai/festival) - Un lecteur/serveur/client de musique locale [![Badge de compilation](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - Un client de terminal mpd minimal visant la simplicité tout en restant très configurable [![Badge de compilation](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - Un langage de programmation en direct orienté graphes, pour créer de la musique à plusieurs dans les navigateurs.
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - Un client Spotify en terminal avec diffusion native, paroles synchronisées et visualisation audio en temps réel [![Déploiement continu](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - Un client MPD moderne et configurable en terminal, prenant en charge les pochettes d'albums
* [ncspot](https://github.com/hrkfdn/ncspot) - Un client Spotify ncurses multiplateforme, inspiré de ncmpc et similaires. [![Badge de compilation](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - Mesure et visualisation audio rapides, simples et professionnelles pour Linux, écrites en Rust.
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - Un système de gestion de podcasts basé sur Rust et multi-utilisateur. Pinepods utilise une base de données centrale, permettant de retrouver le temps d'écoute et les thèmes d'un appareil à l'autre. Avec ses clients construits avec Tauri, c'est une solution d'écoute entièrement multiplateforme ! [![Compilation du conteneur Docker](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - Un gestionnaire de podcasts auto-hébergé téléchargeant automatiquement les nouveaux épisodes, avec interface web d'écoute et API de synchronisation compatible GPodder pour les applications mobiles comme AntennaPod. [![Badge de compilation](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - Une application de diffusion musicale.
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - Un ensemble complet d'amplificateur de guitare et de pédalier, avec prise en charge de plugins externes, fonctionnant directement dans votre terminal.
* [Spotify Player](https://github.com/aome510/spotify-player) - Un lecteur Spotify dans le terminal offrant toutes les fonctionnalités.
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - Un client Spotify open source fonctionnant comme démon UNIX. [![Intégration continue](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - Une interface textuelle de lecteur musical écrite
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - Explorez et écoutez des milliers de stations de radio du monde entier directement depuis votre terminal [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - Une ressource d'information générée statiquement chaque jour pour les producteurs de musique électronique dansante. Fournit des analyses quotidiennes des valeurs les plus fréquentes pour chaque genre EDM : tempos, tonalités, notes fondamentales, etc., à partir de données publiques comme celles de Beatport et Spotify.

### Blockchain

* [Anchor](https://github.com/solana-foundation/anchor) - Anchor est le principal framework de développement pour construire des programmes Solana sécurisés (contrats intelligents).
* [artemis](https://github.com/paradigmxyz/artemis) - Un framework simple, modulaire et rapide pour écrire des bots MEV.
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - Une bibliothèque pour travailler avec Bitcoin SV.
* [cairo](https://github.com/starkware-libs/cairo) - Cairo est le premier langage Turing-complet permettant de créer des programmes prouvables pour le calcul général. C'est également le langage natif de [StarkNet](https://www.starknet.io), un ZK-Rollup utilisant des preuves STARK ![État du flux de travail GitHub](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - Gestion entièrement décentralisée des cryptoactifs entre chaînes sur Polkadot.
* [CITA](https://github.com/citahub/cita) - Un noyau de blockchain haute performance pour les entreprises.
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - Client Coinbase Pro, prend en charge les modes synchrone/asynchrone/WebSocket
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - Stockage décentralisé privilégiant l'IA, sécurisé par EigenLayer.
* [Diem](https://github.com/diem/diem) - La mission de Diem est de permettre une monnaie mondiale simple et une infrastructure financière donnant du pouvoir à des milliards de personnes.
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - Implémentation de référence de Dusk, une infrastructure de marchés financiers évolutive et respectueuse de la confidentialité pour les actifs du monde réel (RWA) et les applications financières conformes aux réglementations. [![État de compilation](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Une réimplémentation efficace d'Electrum Server.
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - Beerus est un client léger StarkNet sans tiers de confiance, ⚡extrêmement rapide ⚡ [![État du flux de travail GitHub](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - Encode et décode les appels de contrats intelligents.
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - Générateur d'adresses Ethereum personnalisées
* [etk](https://github.com/quilt/etk) - etk est un ensemble d'outils pour écrire, lire et analyser le bytecode EVM.
* [Forest](https://github.com/ChainSafe/forest) - Implémentation de Filecoin [![État de compilation](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Foundry est une boîte à outils extrêmement rapide, portable et modulaire pour le développement d'applications Ethereum. ![État de compilation](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - Évolution du protocole MimbleWimble
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - Utilitaires de dérivation de clés pour les portefeuilles HD BIP-32.
* [Holochain](https://github.com/holochain/holochain) - Une alternative P2P évolutive à la blockchain pour toutes les applications distribuées que vous avez toujours voulu créer. [![Détecter les échecs critiques de vérification](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - Framework d'interopérabilité modulaire sans permission. Les clients hors chaîne sont écrits en Rust, tout comme les contrats intelligents pour Solana VM et CosmWasm.
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - Client pour HyperSync d'Envio, une API de données blockchain retournant des blocs, transactions et journaux filtrés comme alternative à JSON-RPC. [![État de compilation](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - Implémentation du protocole [Interblockchain Communication](https://docs.cosmos.network/ibc)
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - Implémentation de BIP39.
* [interBTC](https://github.com/interlay/interbtc) - Un pont Bitcoin entièrement décentralisé et sans tiers de confiance vers Polkadot et Kusama.
* [Joystream](https://github.com/Joystream/joystream) - Une plateforme vidéo gouvernée par ses utilisateurs
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - La couche 1 open source, décentralisée et entièrement évolutive la plus rapide au monde.
* [Lighthouse](https://github.com/sigp/lighthouse) - Client de la couche de consensus Ethereum (CL) [![État de compilation](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - Une infrastructure blockchain décentralisée conçue pour des applications Web3 hautement évolutives à faible latence [![État de compilation](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - Plateforme décentralisée de contrats intelligents pour appareils mobiles d'entrée de gamme.
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB est une blockchain publique sans permission, la couche de connaissances communes du réseau Nervos.
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Liaisons et interface en ligne de commande pour l'API et les contrats d'Opensea.
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Le client Bitcoin de Parity
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - Blockchain de contrats intelligents confidentiels basée sur Intel SGX et Substrate
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - Le SDK blockchain Polkadot de Parity
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - Un client de nœud Cardano écrit en Rust.
* [reth](https://github.com/paradigmxyz/reth) - Implémentation modulaire du protocole Ethereum, accessible aux contributeurs et extrêmement rapide.
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine (revm) est une machine virtuelle Ethereum rapide.
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - Bibliothèque prenant en charge la sérialisation/désérialisation, l'analyse et l'exécution sur les structures de données et les messages réseau liés à Bitcoin.
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![Crate](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - Bibliothèque Bitcoin Lightning. La crate principale,`lightning`, ne gère ni le réseau, ni la persistance, ni aucune autre E/S. Elle est donc indépendante de l'environnement d'exécution, mais les utilisateurs doivent implémenter la logique réseau de base, les interactions avec la chaîne et le stockage sur disque.po lors de la liaison de la crate.
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - Interpréteur ErgoTree et fonctionnalités liées aux portefeuilles.
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Implémentation de la machine virtuelle Cairo [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - La première blockchain de couche 1 capable de résoudre entièrement le trilemme de la blockchain en atteignant simultanément évolutivité, sécurité et décentralisation.
* [Sui](https://github.com/MystenLabs/sui) - Une plateforme de contrats intelligents de nouvelle génération à haut débit, faible latence et modèle de programmation orienté actifs, propulsée par le langage Move.
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Gestionnaire de versions du compilateur Solidity.
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - Une blockchain conçue pour les paiements en stablecoins à grande échelle, avec compatibilité EVM, finalité en moins d'une seconde et fonctionnalités natives de comptes intelligents, construite sur le SDK Reth
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Structures de données et clients pour la blockchain Tendermint
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - Bibliothèque de génération de portefeuilles de cryptomonnaies
* [zcash](https://github.com/zcash/zcash) - Zcash est une implémentation du protocole « Zerocash ».

### Bases de données

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - Suite de transfert de données. Assure la réplication entre MySQL, PostgreSQL, Redis, MongoDB, Kafka, ClickHouse et bien d'autres.
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - Base de données graphe NoSQL avec mises à jour en temps réel, indexation dynamique et interface graphique facile à utiliser pour les CMS. [![Version publiée](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - Un module Redis implémentant l'algorithme du seau à jetons comme commande native pour la limitation de débit haute performance
* [CozoDB](https://github.com/cozodb/cozo) - Une base de données relationnelle transactionnelle utilisant Datalog et centrée sur les données et algorithmes de graphes. Permet de remonter dans le temps, et rapide ! [![État du flux de travail GitHub](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - Curvine est un système de cache distribué concurrent haute performance écrit en Rust, conçu pour les charges à faible latence et haut débit en IA, Big Data, etc.
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - Stockage en mémoire, en temps réel et à forte concurrence inspiré d'erlang mnesia
* [Databend](https://github.com/databendlabs/databend) - Un SGBD moderne de traitement et d'analyse de données en temps réel à architecture cloud native [![Version publiée](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - DB3 est un réseau de bases de données décentralisées de couche 2 blockchain, porté par la communauté [![État du flux de travail GitHub (avec événement)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - Un utilitaire complet en ligne de commande étendant l'interface officielle de Supabase [![État du flux de travail GitHub Actions](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - Base de données SQL distribuée, écrite comme projet d'apprentissage.
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - Service de stockage objet distribué compatible S3, conçu pour l'auto-hébergement à petite ou moyenne échelle. [![Badge d’état](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - Bibliothèque Rust pour bases de données SQL comprenant un analyseur (sqlparser-rs), une couche d'exécution et plusieurs options de stockage persistant ou non, dans un seul paquet. [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - Compilateur et linter SQL polyglotte générant du code à typage sûr à partir de SQL, avec analyse tenant compte du schéma.
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - Une base de données de séries temporelles distribuée, open source et cloud native, prenant en charge PromQL/SQL/Python.[![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - Une puissante base de données graphe-vecteur pour le stockage intelligent de données destinées au RAG et à l'IA
* [Hiqlite](https://github.com/sebadob/hiqlite) - SQLite et cache hautement disponibles, intégrables et basés sur Raft
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - Base de données graphe distribuée native sur stockage objet avec requêtes OpenCypher, parcours GraphBLAS et connectivité Bolt compatible Neo4j.
* [indradb](https://crates.io/crates/indradb) - Base de données graphe
* [KiteSQL](https://github.com/KipData/KiteSQL) - SQL en tant que fonction pour Rust
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - Une base de données vectorielle sans serveur à faible latence pour les applications d'IA
* [Lucid](https://github.com/lucid-kv/lucid) - Stockage clé-valeur distribué haute performance accessible via une API HTTP. [![État de compilation](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - Base de données SQL en flux propulsée par Timely Dataflow :heavy_dollar_sign:
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - Exécution durable dans PostgreSQL. Fonctions SQL longues et tolérantes aux pannes avec points de reprise automatiques, récupération après incident et exécution parallèle. Aucune infrastructure - fonctionne comme extension PostgreSQL construite avec pgrx et Rust. [![Licence](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - Base de données intégrée prête à l'emploi pour applications multiplateformes (serveur, bureau, mobile). Synchronisez sans effort les types Rust
* [Neon](https://github.com/neondatabase/neon) - Postgres sans serveur. Nous avons séparé le stockage et le calcul pour offrir une mise à l'échelle automatique, des branches et un stockage illimité.
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - Système de fichiers distribué natif pour l'IA. [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - Flux de données dynamique et partiellement avec état pour les backends d'applications web
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - Base de données graphe implémentant la norme [SPARQL](https://www.w3.org/TR/sparql11-overview/) ![Version Crates.io](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - ParadeDB est une alternative à Elasticsearch construite sur Postgres, conçue pour la recherche et l'analyse en temps réel.
* [ParityDB](https://github.com/paritytech/parity-db) - Base de données rapide et fiable, optimisée pour la lecture
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - Un mandataire rapide pour faire évoluer PostgreSQL avec pool de connexions, équilibrage de charge et partitionnement.
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - Base de données distribuée compatible PostgreSQL avec un modèle de plugins en Rust ; compatibilité avec les protocoles Redis et Cassandra via des plugins commerciaux.
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - Un langage moderne de transformation de données, compilé en SQL lisible. [![Tests](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - Un moteur de base de données utilisant la mémorisation d'événements
* [Qdrant](https://github.com/qdrant/qdrant) - Un moteur open source de recherche de similarité vectorielle avec prise en charge de filtres avancés [![Tests](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - La couche de confidentialité différentielle SQL-vers-SQL [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Version Crates.io](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - La base de données en flux de nouvelle génération dans le cloud [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - 🚀 RustFS est un système de stockage objet open source haute performance compatible S3, permettant la migration et la coexistence avec d'autres plateformes compatibles S3 telles que MinIO et Ceph.  [![Badge d’état](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - Une base de données vectorielle auto-apprenante et un conteneur cognitif exécutant les LLM localement et évoluant horizontalement.
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - Un index vectoriel basé sur TurboQuant, écrit en Rust, avec recherche accélérée par SIMD et liaisons Python
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - Une interface textuelle de base de données rapide, sans pilote, privilégiant Vim, avec édition sécurisée et diagrammes entité-relation. [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - Base de données graphe-vecteur native Rust pour GraphRAG, graphes de connaissances, recherche vectorielle et analyse de graphes.
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Une réimplémentation de Redis.
* [Skytable](https://github.com/skytable/skytable) - Une base de données NoSQL multimodèle ![État du flux de travail GitHub](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - Une base de données intégrée moderne (en bêta) [![État de compilation](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - SQLite collaboratif privilégiant le fonctionnement hors ligne [![État du flux de travail GitHub](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - Une base de données document-graphe distribuée et évolutive [![État de compilation](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - Un outil léger de gestion de bases de données destiné aux développeurs, construit avec Tauri et React.
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - Un environnement d'exécution piloté par modèles avec requêtes typées, mutations contrôlées et fournisseurs SQL [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - Base de données graphe et stockage de documents open source [![État de compilation](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - Une base de données clé-valeur distribuée en Rust
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - Un ORM agréable et simple pour Rust prenant en charge SQL (SQLite, PostgreSQL, MySQL) et DynamoDB, avec macros derive, requêtes à typage sûr et exposition des fonctionnalités propres aux bases de données. [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - Tonbo est une base de données persistante intégrée construite sur Apache Arrow et Parquet [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - Une alternative à FireBase rapide, légère et en un seul fichier, avec API à typage sûr, moteur V8 JS/ES6/TS intégré, authentification et tableau de bord d'administration [![État du flux de travail GitHub](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Base de données de séries temporelles intégrée pour Rust [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - Turso Database est une base de données SQL intégrée au processus, compatible avec SQLite.
* [USearch](https://github.com/unum-cloud/usearch) - Moteur de recherche de similarité pour vecteurs et chaînes [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - Base de données vectorielle de nouvelle génération construite avec des liaisons LMDB [![Version Crates.io](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - Base de données intégrable privilégiant le stockage local, dont les trois moteurs fusionnent recherche vectorielle, graphe de propriétés et stockage en colonnes derrière un seul langage de requête (VelesQL), dans un unique binaire. Fournit un SDK de mémoire agentique intégré — sémantique / épisodique / procédurale — avec rappel intersessions `why()` parcourant le graphe pour révéler des faits liés que la seule recherche vectorielle manque.
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - Liaisons pour MDBX, une « base de données clé-valeur rapide, compacte, puissante, intégrée et transactionnelle, avec licence permissive ». C'est un fork de mozilla/lmdb-rs avec des correctifs pour fonctionner avec libmdbx.
* [whispem/minikv](https://github.com/whispem/minikv) - Stockage clé-valeur et objet distribué multitenant avec consensus Raft, durabilité WAL, API de séries temporelles, recherche vectorielle et points d'accès compatibles S3. Orienté production avec chart Helm, tableaux de bord Grafana et SDK Python. [![État de compilation](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - Base de données de séries temporelles généraliste inspirée de Crux et Datomic.

### Systèmes embarqués

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - Framework async/await de nouvelle génération pour Rust embarqué avec HAL pour STM32, nRF, RP, ESP32 et bien d'autres. Propose embassy-time, embassy-net, embassy-usb et la prise en charge de la basse consommation. [![État de compilation](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - Micrologiciel de montre connectée 100 % Rust `no_std` pour Waveshare ESP32-S3-Touch-AMOLED-2.06. Propose un affichage DMA QSPI 80 MHz, l'environnement asynchrone Embassy et une gestion d'alimentation événementielle avec affichage permanent.
* [rmk](https://github.com/haobogu/rmk) - Un micrologiciel de clavier riche en fonctionnalités.
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - Framework de concurrence en temps réel pilotée par interruptions pour construire des systèmes embarqués temps réel.
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - Enveloppe Rust pour l'interface de micrologiciel extensible unifiée. Cette crate facilite le développement de logiciels Rust utilisant des abstractions sûres, pratiques et performantes des fonctionnalités UEFI.

### Émulateurs

Voir aussi les [crates correspondant au mot-clé « emulator »](https://crates.io/keywords/emulator).

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - Un émulateur CHIP-8 en WebAssembly.
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - Émulateur chip8
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Émulateur Commodore 64
* Flash Player
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Ruffle est un émulateur Adobe Flash Player. Ruffle cible à la fois le bureau et le web grâce à WebAssembly. [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Gameboy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Un projet de recherche et émulateur Game Boy
  * [joamag/boytacean](https://github.com/joamag/boytacean) - Émulateur GameBoy Color fonctionnant sur le web grâce à WebAssembly.
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - Émulateur GameBoy multiplateforme complet. Des garçons pour toujours !
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Un émulateur Gameboy
* Gameboy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - RustboyAdvance-ng est un émulateur Gameboy Advance prenant en charge le bureau, Android et [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/). [![Badge de compilation](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - OpenGMK est une réécriture moderne des moteurs propriétaires GameMaker Classic, fournissant un portage complet de l'exécuteur, un décompilateur, un framework de TAS et des bibliothèques pour manipuler vous-même les données de jeu.
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - Un émulateur IBM PC/XT écrit en Rust.
* Processeur Intel 8080
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Émulateur du processeur Intel 8080
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - Émulateur de haut niveau pour applications iPhone OS
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - Un émulateur d'iPod à molette cliquable (en cours)
* NES
  * [koute/pinky](https://github.com/koute/pinky) - Un émulateur NES
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - Un émulateur NES
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - Émulateur N64 écrit en Rust
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Un émulateur Nintendo DS
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - Émulateur PS4 expérimental pour Windows, macOS et Linux [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Shockwave Player
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - Un émulateur Shockwave Player compatible web écrit en Rust
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### Gestionnaire de fichiers

* [broot](https://github.com/Canop/broot) - Une nouvelle façon de voir et parcourir les arborescences (obtenez une vue d'ensemble d'un répertoire, même volumineux ; trouvez un répertoire puis utilisez `cd` pour y accéder ; gardez toujours la hiérarchie des fichiers en vue pendant vos recherches ; manipulez vos fichiers, ...), pour en savoir plus [dystroy.org/broot](https://dystroy.org/broot/) [![Dernière version](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - Gestionnaire de fichiers complet en terminal avec aperçus enrichis, actions groupées et prise en charge de la corbeille.
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - Une interface textuelle rapide et facile à utiliser pour gérer les fichiers sur un serveur distant, avec création rapide de sessions SSH, édition directe des fichiers et bien plus ! ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - Gestionnaire de fichiers en terminal de type ranger
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - Recherchez vos fichiers en langage naturel
* [pikeru](https://github.com/dvhar/pikeru) - Sélecteur de fichiers pour Linux avec de bonnes miniatures et une recherche
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - Un gestionnaire de fichiers construit sur un système de fichiers distribué virtuel.
* [xplr](https://github.com/sayanarijit/xplr) - Un explorateur de fichiers textuel personnalisable, minimal et rapide
* [yazi](https://github.com/sxyazi/yazi) - Gestionnaire de fichiers en terminal extrêmement rapide, basé sur les E/S asynchrones.

### Finance

Voir aussi les applications de [paiement](#payments).

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - Terminal de trading IA avec ingestion multi-bourses, exécution, modèles de risque et tableau de bord textuel.
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - Logiciel libre intelligent et sans maintenance générant de belles factures de services et de dépenses.
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - Interface en ligne de commande native IA pour Longbridge Securities : cours en temps réel, portefeuille, transactions HK/US/actions A/SG.
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - Tableau de bord boursier en terminal avec cours et graphiques sans clé, sentiment des actualités, opérations d'initiés SEC Form 4 et lecture des résultats. ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - Une plateforme de trading algorithmique haute performance de niveau production écrite en Rust et Python.
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - Moteur de comptabilité rapide et fiable avec prise en charge native de GIT SCM pour la comptabilité en texte brut [![Badge CI](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - Données de cotation en temps réel dans votre terminal
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - Un beau suivi de finances personnelles, privé et privilégiant le stockage local : investissements, patrimoine net, dépenses et simulations.

### Jeux

Voir aussi les [jeux créés avec Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston).

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - Un jeu tactique en temps réel sur la Seconde Guerre mondiale
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - Une implémentation textuelle du jeu d'échecs ♟️
* [citybound](https://github.com/citybound/citybound) - La simulation urbaine que vous méritez
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Un moteur de rendu pour Doom, pouvant devenir un jeu jouable
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - Réimplémentation du moteur de Cave Story avec quelques améliorations.
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - Jeu de simulation de planète et de terraformation
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - Jeu roguelike extensible en monde ouvert avec pixel art
* [GitType](https://github.com/unhappychoice/gittype) - Un jeu de saisie de code en ligne de commande transformant votre code source en défis de frappe
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Ferium est un programme en ligne de commande rapide et complet pour télécharger et mettre à jour les mods Minecraft depuis Modrinth, CurseForge et GitHub Releases, ainsi que les packs de mods depuis Modrinth et CurseForge ![Compilation ferium](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - Un simulateur moderne et accessible de Rubik's cube 3D et 4D avec commandes souris et clavier personnalisables et fonctions avancées de résolution rapide
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - Un jeu vidéo musical minimaliste prenant en charge le format BMS
* [louis-e/arnis](https://github.com/louis-e/arnis) - Générez des mondes Minecraft Java/Bedrock à partir de la géographie réelle grâce à OpenStreetMap et aux données d'altitude [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - Snake.
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - Un outil convivial de gestion des sauvegardes de jeux [![Badge de compilation](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - Outil de sauvegarde des parties de jeux PC [![Badge de compilation](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![crate](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - Un petit jeu de stratégie 2D au tour par tour sur grille hexagonale
* [rhex](https://github.com/dpc/rhex) - Roguelike ASCII hexagonal
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - Un jeu roguelike.
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.io est un jeu de combat naval multijoueur en ligne
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - Un jeu multiplateforme en terminal où des tétrominos tombent et s'empilent.
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - Une implémentation de Sokoban
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - Un jeu de tir spatial visant à permettre aux nouveaux développeurs de jeux d'apporter leurs premières contributions. ![Badge de compilation](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Moteur de rendu de cartes Quake.
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - Un jeu Snake en terminal basé sur stdin/stdout (+tcp et sockets de domaine Unix) [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - Jeu de test de frappe solo conçu pour le terminal
* [Veloren](https://gitlab.com/veloren/veloren) - Un RPG multijoueur voxel en monde ouvert et open source, actuellement en développement alpha [![Badge de compilation](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - Un moteur de jeu 2D en pixel art et des outils de prototypage rapide, prenant en charge les modes de rendu textuel et graphique.
* [Zone of Control](https://github.com/ozkriff/zoc) - Un jeu de stratégie au tour par tour sur grille hexagonale

### Graphisme

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - Une implémentation d'un traceur de rayons très simple basé sur Ray Tracing in One Weekend de Peter Shirley.
* [flxzt/rnote](https://github.com/flxzt/rnote) - Dessinez et prenez des notes manuscrites.
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - Convertit les diagrammes ASCII en graphiques SVG
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - Un moteur de rendu PBR glTF 2.0 basé sur le lancer de rayons Vulkan.
* [Limeth/euclider](https://github.com/Limeth/euclider) - Un traceur de rayons 4D en temps réel sur processeur
* [linebender/resvg](https://github.com/linebender/resvg) - Une bibliothèque de rendu SVG.
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - Un petit langage pour toutes sortes de figures — diagrammes, graphiques, séquences, schémas, dessins techniques — compilé du texte brut vers du SVG à thèmes [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - Programme de fond d'écran vidéo accéléré par GPU pour Wayland et macOS, écrit en Rust.
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - Un outil pour déplier des modèles 3D et les créer en papier avec des ciseaux et de la colle.
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - Bibliothèque de rendu graphique 2D Vue basée sur Skia. Utilise Rust pour implémenter la rastérisation logicielle et effectuer le rendu.
* [storytold/artcraft](https://github.com/storytold/artcraft) - Un EDI propulsé par l'IA et une surface informatique tangible pour modeler des scènes, vidéos et images comme de l'argile.
* [turnage/valora](https://crates.io/crates/valora) - Une bibliothèque d'art génératif
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - Un traceur de rayons
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - Implémente un équivalent du code C++ du livre PBRT (3e édition).

### Traitement d'images

* [Darkly](https://github.com/darkly-art/darkly) - Éditeur entropique pour artistes et peintres numériques.
* [Graphite](https://github.com/GraphiteEditor/Graphite) - Éditeur graphique vectoriel.
* [Imager](https://github.com/imager-io/imager) - Optimisation automatisée d'images.
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - Optimiseur PNG multithread écrit en Rust. [![État de compilation](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![Version](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - Un utilitaire de création de favicons [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - Un outil en ligne de commande et WebAssembly nettoyant le pixel art généré par IA pour obtenir des sprites au pixel près (MIT).
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - Un convertisseur d'images matricielles en graphiques vectoriels (jpg/png vers svg).

### Automatisation industrielle

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - Un framework rapide et simple orienté flux de données pour construire des applications robotiques et multi-IA, avec API Python, Rust et C/C++ [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - Une bibliothèque [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/).
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - Une bibliothèque basée sur [tokio](https://tokio.rs) pour [modbus](https://www.modbus.org).

### Files de messages

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - Un serveur de messagerie publication/abonnement extensible pour applications en périphérie.
* [Rmqtt](https://github.com/rmqtt/rmqtt) - Serveur MQTT/courtier MQTT — Courtier de messages MQTT distribué et évolutif pour l'IoT à l'ère de la 5G.
* [RobustMQ](https://github.com/robustmq/robustmq) - File de messages convergente cloud native de nouvelle génération.
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀Apache RocketMQ construit en Rust🦀. Plus rapide, plus sûr et moins gourmand en mémoire.

### MLOps

* [api7/aisix](https://github.com/api7/aisix) - Passerelle IA open source pour LLM et agents IA : une API compatible OpenAI et une API native Anthropic Messages devant OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI et d'autres points d'accès compatibles OpenAI, avec passerelles MCP et A2A, routage sémantique, garde-fous et cache sémantique. [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - Framework ETL pour construire du contexte à jour pour les agents IA, avec traitement incrémental
* [TensorZero](https://github.com/tensorzero/tensorzero) - Boucle vertueuse de données et d'apprentissage pour LLM unifiant inférence, observabilité, optimisation et expérimentation ![État de compilation TensorZero](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - Moteur de mémoire sémantique pour agents IA privilégiant le fonctionnement hors ligne. Un seul binaire, aucune dépendance, natif MCP. [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### Observabilité

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - Un serveur compatible StatsD évolutif et haute performance.
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - Application de bureau native egui pour analyser d'immenses fichiers et flux de journaux. Propose un système de plugins WebAssembly et la prise en charge des formats automobiles. [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - Backend d'observabilité pour journaux, métriques et traces, avec instrumentation Rust à faible surcoût. Stocke la télémétrie en Parquet sur stockage objet et l'interroge en SQL. [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - L'application cliente pour [MAC](https://github.com/MegaAntiCheat).
* [openobserve](https://github.com/openobserve/openobserve) - 10 fois plus simple, coût de stockage 140 fois inférieur, haute performance, échelle du pétaoctet - alternative à Elasticsearch/Splunk/Datadog.
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetry fournit un ensemble unique d'API, bibliothèques, agents et services de collecte pour capturer les traces distribuées et métriques de votre application. Vous pouvez les analyser avec Prometheus, Jaeger et d'autres outils d'observabilité. [![CI des actions GitHub](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - Une plateforme d'observabilité unifiée native IA pour collecter et analyser journaux, métriques, traces et événements.
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - Moteur de recherche cloud natif très économique pour la gestion des journaux. [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - Serveur ultraléger de suivi des erreurs compatible avec les SDK Sentry.
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - Un agent de surveillance de la consommation électrique, pour suivre celle de l'hôte et de chaque service et permettre de concevoir des systèmes et applications plus durables. Conçu pour s'intégrer à toute chaîne de surveillance (prend déjà en charge prometheus, warp10, riemann...).
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - Un routeur haute performance de journaux, métriques et événements.

### Systèmes d'exploitation

Voir aussi [une comparaison des systèmes d'exploitation écrits en Rust](https://github.com/flosse/rust-os-comparison).

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - Un système d'exploitation pour l'architecture armv8-a.
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - Un système d'exploitation moderne de type Unix à noyau monolithique.
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - Un noyau de système d'exploitation sécurisé, rapide et généraliste offrant une ABI compatible Linux.
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - Un système d'exploitation avec noyau développé de zéro et compatibilité Linux.
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - Un noyau de type Unix compatible Linux écrit en Rust et en assembleur Aarch64.
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - Noyau de système d'exploitation x86_64 écrit en Rust et en assembleur.
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - Un micronoyau résident en RAM basé sur des capacités, où chaque programme est une capsule signée devant faire ses preuves avant son exécution par le noyau, et où les pilotes s'exécutent en espace utilisateur.
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - Un système d'exploitation généraliste de type Unix basé sur un micronoyau, privilégiant sécurité, stabilité, performance, correction, simplicité et pragmatisme, visant à être une alternative complète à Linux et BSD.
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - Un noyau de système d'exploitation écrit en Rust. Non POSIX
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - Un système d'exploitation à langage sûr, espace d'adressage unique et niveau de privilège unique, écrit de zéro - [![Badge de compilation](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - Un système d'exploitation embarqué sécurisé pour microcontrôleurs basés sur Cortex-M
* [vinc/moros](https://github.com/vinc/moros) - Un système d'exploitation amateur textuel destiné aux ordinateurs d'architecture x86-64 avec BIOS.

### Gestionnaires de paquets

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - Un gestionnaire de paquets moderne pour les architectures Protocol Buffers et gRPC.
* [pkgx](https://github.com/pkgxdev/pkgx) - Exécutez n'importe quoi. Un gestionnaire de paquets composable rendant tout l'écosystème open source accessible à vos scripts.
* [rebos](https://crates.io/crates/rebos) - Une façon déclarative d'automatiser la gestion des paquets sur toute distribution Linux [![crate](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### Paiements

* [hyperswitch](https://github.com/juspay/hyperswitch) - Un orchestrateur de paiements open source permettant de se connecter à plusieurs prestataires et de router facilement les paiements, avec une seule intégration d'API ![Dernier commit GitHub](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### Productivité

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - Un simulateur de mouvement de souris minimaliste et multiplateforme écrit en Rust [![Compilation](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - Permet aux agents IA de communiquer, s'observer et se lancer mutuellement entre terminaux (Claude Code, Gemini CLI, Codex, OpenCode). Enveloppe PTY Rust avec suivi de l'écran, interface textuelle (ratatui) et binaire client du démon ; hooks et API Python [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - Une interface textuelle/en ligne de commande pour gérer plusieurs sessions d'agents de programmation IA avec tmux, worktrees Git et isolation Docker [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - Un outil LLM tout-en-un en ligne de commande proposant assistant shell, Chat-REPL, RAG, outils et agents IA, avec accès à OpenAI, Claude, Gemini, Ollama, Groq et bien d'autres.
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - Mémoire à long terme pour agents de programmation IA : un wiki markdown adossé à Git avec capture automatique du cycle de vie, transferts entre agents et serveur MCP auto-hébergé. [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Widget Waybar, panneau natif Omarchy Quattro et interface textuelle à onglets pour surveiller l'utilisation des forfaits IA de Claude, Codex/ChatGPT, GitHub Copilot, Z.AI (GLM), OpenRouter et bien d'autres. [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - Outil de terminal adaptant les modèles LLM à la RAM, au processeur et au GPU de votre système. Interface textuelle interactive avec détection matérielle, notation multidimensionnelle (qualité/vitesse/adéquation/contexte), classement communautaire et prise en charge d'Ollama, llama.cpp, MLX, vLLM et bien d'autres. [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - Interface textuelle interactive pour servir des modèles LLM locaux avec détection automatique des backends (llama-server, KoboldCpp, LocalAI, MLX, Ollama, vLLM, LM Studio). Propose navigation dans l'arborescence source, préréglages par backend, journaux en direct et prise en charge des modèles de vision. [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - Un espace de travail privilégiant le stockage local pour exécuter en parallèle des agents de recherche avec Claude Code, Codex, OpenCode ou Cursor, avec suivi reproductible des expériences. [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - Application de bureau locale (Tauri) vérifiant les sessions d'agents de programmation IA pour détecter les causes fréquentes de gaspillage de jetons : sessions trop profondes, sous-agents surdimensionnés, cache défaillant et serveurs MCP, compétences et outils inutilisés. Prend en charge Claude Code, Codex, Cursor, Copilot, Pi et bien d'autres [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - Un outil en ligne de commande de recherche structurelle, d'analyse et de réécriture de code.
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - Un simple outil de suivi du temps en ligne de commande [![Tests](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - Gestionnaire de presse-papiers pour Windows avec transformations IA, OCR et recherche approximative.
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - Routeur LLM natif pour agents optimisant votre agent à chaque exécution sans modification de son infrastructure, rendant chaque appel de modèle fiable, traçable, sécurisé et économique. Route vers OpenAI, Anthropic, Google, OpenRouter, Bedrock, GitHub Copilot et bien d'autres via un unique point d'accès local, avec passerelle MCP, intégration ACP, garde-fous, observabilité et basculement multi-compte.
* [CookCLI](https://github.com/cooklang/CookCLI) - Gestionnaire de recettes en ligne de commande avec serveur web, listes de courses et planification des repas.
* [espanso](https://github.com/espanso/espanso) - Un outil multiplateforme d'expansion de texte. [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - Un outil en ligne de commande pour saisir et stocker vos idées sans quitter le terminal
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - Un assistant graphique et gestionnaire de profils tout-en-un pour Claude Code, Codex et Gemini CLI.
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - Mandataire local compressant les requêtes API LLM pour réduire les jetons d'entrée et de sortie sans modifier les réponses. Se place entre les outils IA et le fournisseur via HTTPS_PROXY ; fonctionne avec Claude Code, Codex et bien d'autres. [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - Une application de prise de notes tout-en-un pour étudiants et professionnels des sciences, technologies, ingénierie et mathématiques. [![Publication](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - Outil de gestion de projets en terminal inspiré de lazygit [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - Application de suivi du temps construite avec GTK4
* [futuregene/future-os](https://github.com/futuregene/future-os) - Un agent IA partout : un unique backend gRPC Rust pilote une interface textuelle, une application de bureau, des applications mobiles, une interface en ligne de commande et des bots de messagerie instantanée avec les mêmes sessions, mémoire et compétences. Outils soumis à approbation privilégiant la confiance, plus de 3 800 modèles et plan de contrôle de boucle pour des exécutions de plus de 24 h. [![Compilation](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - Une interface en ligne de commande pour les API compatibles OpenAI, des modèles YAML pour l'ingénierie des prompts et une base de données vectorielle intégrée pour des mémoires persistantes.
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - Interface textuelle en terminal pour surveiller les sessions d'agents de programmation IA (Claude Code, Codex CLI, OpenCode). Suivez l'utilisation des jetons, le pourcentage de fenêtre contextuelle, les limites de débit, les processus enfants et les ports orphelins. Propose intégration tmux, 12 thèmes dont des options adaptées au daltonisme et prise en charge multiplateforme. [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - Agent de programmation en terminal pour DeepSeek V4 avec blocs de raisonnement en flux, édition de l'espace local, sélection automatique du modèle, prise en charge MCP et interface textuelle basée sur ratatui. [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - Environnement d'exécution d'agents autonomes privilégiant Rust pour les flux de travail en ligne de commande, les canaux, les passerelles et le matériel.
* [illacloud/illa](https://github.com/illacloud/illa) - Constructeur d'outils internes à faible code.
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - Un outil de gestion des connaissances basé sur markdown avec serveur LSP et interface en ligne de commande [![État de compilation](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - Un tableau de bord personnel apaisant pour le terminal : horloges, calendrier et agenda, météo, tâches, notes, marchés et métriques système en direct dans une grille configurable [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚 Simplifie votre façon de lire. Lecteur de documents textuel minimaliste de type Vim.
* [LLDAP](https://github.com/lldap/lldap) - Interface LDAP simplifiée pour l'authentification.
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - Notes, documents et dessins collaboratifs chiffrés de bout en bout, avec clients natifs multiplateformes basés sur un noyau Rust partagé et serveur auto-hébergeable. [![Integration](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - Interface textuelle/en ligne de commande rapide suivant l'utilisation des jetons et les coûts des outils de programmation IA (Claude Code, Codex, Gemini CLI et bien d'autres), avec cache persistant survivant à la suppression des données de ces outils. [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - Interface en ligne de commande de gestion des worktrees Git conçue pour exécuter des agents IA en parallèle, avec hooks, messages de commit LLM et flux de fusion [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - Agent de programmation IA privilégiant le terminal avec routage multimodèle transparent entre backends locaux (Ollama, LM Studio, MLX, llama.cpp) et cloud, affichage du coût par tour, véritable annulation et justificatifs de routage auditables. [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - Environnement d'exécution d'agents IA open source en ligne de commande avec plus de 48 agents spécialistes, hôte MCP à enregistrement dynamique de serveurs, prise en charge multifournisseur (plus de 13 LLM) et compression adaptative du contexte pour des sessions de plus de 4 heures.
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - Multiplexeur de terminal conçu pour les agents de programmation IA. Exécutez plusieurs agents dans un terminal avec vues de terminaux réels, détection d'état (bloqué/en cours/terminé), espaces de travail, onglets et sessions persistantes. Un seul binaire Rust avec détachement/rattachement.
* [pier-cli/pier](https://github.com/pier-cli/pier) - Un dépôt central pour gérer (ajouter, rechercher les métadonnées, etc.) toutes vos commandes d'une ligne, scripts, outils et interfaces en ligne de commande
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - Worktrees Git et fenêtres tmux pour du développement parallèle sans friction [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - Mandataire haute performance en ligne de commande réduisant de 60 à 90 % la consommation de jetons LLM des assistants de programmation IA. Filtre et compresse les sorties de commandes pour Claude Code, Copilot, Cursor, Gemini CLI, Codex et bien d'autres. [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - Enregistrement local de l'écran et du micro par IA 24 h/24, 7 j/7. Créez des applications IA disposant de tout le contexte. Fonctionne avec Ollama.
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - Équilibreur de temps de travail et de repos tenant compte de votre fatigue actuelle et de celle de la journée [![Compilation](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - Un agent de recherche sociale réutilisant une session Chrome connectée pour rechercher et lire publications, commentaires, profils et médias pris en charge sur Instagram, TikTok, LinkedIn, X, Xiaohongshu et Douyin.
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - Interface vocale IA personnelle pour toute application - dictée personnalisable permettant de choisir vos propres modèles et prompts, construite avec Rust.
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - Gestionnaire d'espaces de travail en ligne de commande avec interface textuelle pour organiser et parcourir des expériences temporaires.
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - Espace de travail natif Rust pour agents IA avec prise en charge de LLM multifournisseur, système de compétences, serveurs MCP, bases de connaissances et orchestration d'agents. Propose interface graphique de bureau, REPL en ligne de commande et modes non interactifs. [![Licence](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - Environnement d'exécution open source assemblant des agents IA en une entreprise fonctionnelle : tableau de travail partagé, transferts entre agents, approbations humaines, flux planifiés et en DAG. Fonctionne avec tout modèle fourni, auto-hébergé avec Docker. [![Licence](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - Assistant agentique open source avec interface de bureau, plus de 118 intégrations OAuth, arbre de mémoire privilégiant le stockage local, wiki compatible Obsidian, voix native et compression TokenJuice. Construit avec Tauri et Rust pour une IA personnelle respectueuse de la vie privée.
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - Application multiplateforme de saisie vocale IA construite avec Tauri et Rust.
* [Tuxedo](https://github.com/webstonehq/tuxedo) - Une interface de terminal rapide pilotée au clavier pour todo.txt.
* [tw93/Pake](https://github.com/tw93/Pake) - Transformez toute page web en application de bureau avec une seule commande grâce à Rust et Tauri. Léger, rapide et compatible avec macOS, Windows et Linux.
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - Tableur natif conçu comme un éditeur de code avec GPUI, WASM et moteur sans interface en ligne de commande.
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - Application de bureau légère pour gérer, synchroniser et organiser les compétences d'agents IA entre plus de 15 outils de programmation (Cursor, Claude Code, Codex, Copilot, etc.), avec Tauri 2, backend Rust et prise en charge des sauvegardes Git.
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - La puissance de Raycast. La vitesse d'Alfred. La confidentialité dès la conception. [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![Compilation](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - Une application Kanban pour le terminal
* [yicheng47/runner](https://github.com/yicheng47/runner) - Application de bureau native GPUI pour macOS et Windows où des agents de programmation en ligne de commande tels que Claude Code, Codex, Copilot CLI et pi travaillent ensemble sur une tâche en équipe, chacun conservant son interface textuelle dans un vrai terminal. [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - Assistant IA de réunion privilégiant la confidentialité, capturant, transcrivant et résumant les réunions entièrement sur votre machine locale. Propose transcription en temps réel avec les modèles Whisper/Parakeet, résumés par IA et prise en charge de plusieurs fournisseurs IA (Ollama, Claude, Groq, OpenAI)

### Protocoles de routage

* [Holo](https://github.com/holo-routing/holo) - Holo est une suite de protocoles de routage conçue pour des réseaux à grande échelle pilotés par l'automatisation
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP

### Outils de sécurité

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - Assistant de rétro-ingénierie extrayant les chaînes et le pseudocode associé d'un fichier binaire [![Compilation](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - Assistant de recherche de vulnérabilités extrayant le pseudocode du décompilateur IDA Hex-Rays [![Compilation](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - Assistant de rétro-ingénierie utilisant un LLM local pour faciliter l'analyse du code source [![Compilation](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - Assistant de recherche de vulnérabilités localisant tous les appels de fonctions API potentiellement non sécurisées dans un fichier binaire [![Compilation](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - Surveillance du trafic et statistiques en temps réel dans le terminal pour votre instance AdGuard Home
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - Bibliothèque avancée de fuzzing - Assemblez votre fuzzer en Rust ! Évolue sur plusieurs cœurs et machines. Pour Windows, Android, macOS, Linux, no_std, etc. [![Compilation et tests](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - Un outil minimaliste de scan ARP pour des analyses rapides du réseau local
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - Identification passive d'empreintes réseau multiprotocole combinant analyses TCP p0f et TLS JA4 pour détecter systèmes d'exploitation et applications [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - Scanner de vulnérabilités web de niveau entreprise avec plus de 60 modules d'attaque pour tests d'intrusion et évaluations de sécurité
* [cargo-audit](https://crates.io/crates/cargo-audit) - Audite Cargo.lock pour rechercher des crates présentant des vulnérabilités de sécurité
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - Rend auditables les binaires Rust de production
* [cargo-crev](https://crates.io/crates/cargo-crev) - Un système de revue de code vérifiable cryptographiquement pour le gestionnaire de paquets cargo.
* [cargo-deny](https://crates.io/crates/cargo-deny) - Plugin Cargo pour faciliter la gestion de grands graphes de dépendances
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - Évitez les spécifications d'API inachevées grâce à un outil en ligne de commande qui valide vos spécifications pour éviter les comportements utilisateurs non définis.
* [cotp](https://github.com/replydev/cotp) - Application d'authentification TOTP/HOTP en ligne de commande fiable et chiffrée, avec importation.
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - Interface textuelle multiplateforme de surveillance réseau avec identification des processus via eBPF/PKTAP et inspection approfondie des paquets [![Badge de compilation](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - Outil de détection de capteurs IMSI conçu pour fonctionner sur le matériel de points d'accès mobiles, aidant les utilisateurs à identifier une éventuelle surveillance cellulaire (Stingray/simulateurs de stations cellulaires) [![Tests](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - Recherche rapide et parallèle de gadgets ROP/JOP entre variantes [![Actions GitHub](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - Un outil de découverte de contenu simple, rapide et récursif.
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - Scanner rapide de licences, droits d'auteur, paquets et nomenclatures logicielles produisant CycloneDX et SPDX avec un inventaire complet et fermé des dépendances ; statique et hors ligne. [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - Un mandataire comprenant les protocoles de bases de données, utilisé pour appliquer les politiques d'accès 👮
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - Un outil scriptable de cassage d'authentification réseau
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - Un outil de détournement de connexions TCP ; réécriture de shijack
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - Un framework OSINT semi-automatique et gestionnaire de paquets
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - Un analyseur de paquets sécurisé multithread
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - Une meilleure alternative à sudo(-rs)/su • ⚡ Extrêmement rapide • 🛡️ Sûreté mémoire • 🔐 Axé sur la sécurité ![Compilation](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![Couverture](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - Système d'exécution de code isolée pour exécuter du code non fiable (sorties de modèles, plugins, outils) sous Windows, Linux et macOS. Propose plusieurs backends d'isolation (ProcessContainer, Windows Sandbox, LXC, Bubblewrap, Seatbelt, MicroVM, Hyperlight, IsolationSession, WSLC), avec isolation pilotée par politiques JSON et SDK TypeScript. [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - Un outil extrêmement rapide de détection de secrets et de validation en direct dans les fichiers, dépôts Git, S3, Jira et Confluence
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - Application cliente VPN multiplateforme pour le service Mullvad VPN avec prise en charge de WireGuard, tunnels résistants au quantique et fonctionnalités respectueuses de la vie privée. [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - Outil d'identification d'empreintes d'applications et services web
* [Raspirus](https://github.com/Raspirus/Raspirus) - Scanner de logiciels malveillants à règles, convivial et économe en ressources [![État](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - Analyse les journaux et agit : une alternative à fail2ban
* [ripasso](https://github.com/cortex/ripasso/) - Un gestionnaire de mots de passe au système de fichiers compatible avec pass
* [rustscan](https://github.com/bee-san/RustScan) - Accélérez Nmap avec cet outil de scan de ports [![Badge de compilation](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - Détecte les identifiants et clés API divulgués dans les arborescences source, l'historique Git, les archives et les sources distantes, avec vérification en direct des secrets trouvés [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - Une caméra de sécurité domestique privée sur Raspberry Pi utilisant le chiffrement de bout en bout
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - Retrouvez les comptes de réseaux sociaux par nom d'utilisateur sur différents réseaux [![État](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Un outil simple de gestion des secrets utilisant des clés SSH pour le chiffrement et le déchiffrement.
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - Une boîte à outils complète d'ingénierie de détection pour la norme Sigma, avec analyseur, moteur d'évaluation, conversion de règles, environnement d'exécution en flux, linter, interface en ligne de commande, MCP et LSP [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### Réseaux sociaux

* Discord
  * [concord](https://github.com/chojs23/concord) - Un client Discord textuel riche en fonctionnalités.
  * [Dorion](https://github.com/SpikeHD/Dorion) - Petit client Discord alternatif avec empreinte réduite, démarrage plus rapide, thèmes, plugins et bien plus ! ![Compilation](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - Un serveur compatible Mastodon utilisant ActivityPub.
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - Une interface textuelle multiplateforme pour Telegram [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - Passerelle WhatsApp auto-hébergée exposant une API REST, des webhooks, plusieurs sessions et des appels vocaux depuis un unique binaire statique. [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### Outils système

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - Analyseur graphique (egui) d'utilisation des disques pour macOS, Windows et Linux avec vues en rayons de soleil et cartes arborescentes, pouvant également analyser les serveurs SSH et stockages cloud via rclone [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - Une alternative rapide à `cd` qui apprend vos habitudes [![Version publiée](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - Outil en ligne de commande pour monter tout système de fichiers pris en charge par Linux sur un Mac - utilisant NFS avec une microVM
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - Application graphique pour anylinuxfs
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - Interface en ligne de commande de gestion sémantique des versions au niveau des entités. Comparaison, attribution, graphe et analyse d'impact au niveau des fonctions/classes dans 32 langages via tree-sitter. [![Version publiée](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Pilote de fusion Git au niveau des entités. Résout les conflits de fusion en comprenant la structure du code via tree-sitter. S'intègre à Git comme pilote de fusion personnalisé via .gitattributes. [![Version publiée](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuin remplace votre historique shell par une base SQLite et enregistre du contexte supplémentaire pour vos commandes. Propose également une synchronisation facultative et entièrement chiffrée de votre historique entre machines via un serveur Atuin.
* [bandwhich](https://github.com/imsnif/bandwhich) - Outil d'utilisation de bande passante en terminal
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - Distribution NixOS où un agent IA dispose de l'accès root via 91 outils MCP typés. 9 démons Rust (pont système, déploiements atomiques SafeSwitch avec retour arrière automatique, registre d'audit chaîné par hachage, portefeuilles crypto AES-256-GCM, maillage P2P Noise_XX + ML-KEM-768, STT/TTS local, cycle de vie des serveurs MCP, apprentissage système, mandataire de sortie à liste de domaines autorisés) communiquent par sockets Unix.
* [bottom](https://github.com/ClementTsang/bottom) - Encore un autre moniteur graphique multiplateforme de processus/système. [![État du flux de travail GitHub (branche)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - Petit visualiseur de journaux JSON en ligne de commande
* [brush-shell](https://github.com/reubeno/brush) - Shell compatible bash/POSIX [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![Crate](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - Démon léger arrêtant les processus pour gérer les situations de manque de mémoire sous Linux. [![État du flux de travail GitHub (branche)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - Un lanceur de commandes pour Linux, similaire à gmrun
* [cantino/mcfly](https://github.com/cantino/mcfly) - Parcourez votre historique shell à toute vitesse. Nom de Zeus !
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - Bibliothèque multiplateforme écrite en Rust pour lire, modifier et surveiller les changements du contenu du presse-papiers système.
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - Compositeur Wayland natif macOS pour exécuter des applications graphiques Linux sans surcoût de machine virtuelle. Construit avec Smithay. [![Badge de compilation](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - Outil multithread de compression et décompression en ligne de commande [![État de compilation](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - Un outil configurable de surveillance du système de fichiers inspiré d'[entr](http://eradman.com/entrproject/)
* [dalance/procs](https://github.com/dalance/procs) - Une alternative moderne à « ps » [![Regression](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - Recherche rapide de fichiers en double
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - Alternative Linux à lsof pour lister les descripteurs de fichiers ouverts des processus
* [diskonaut](https://github.com/imsnif/diskonaut) - Navigateur visuel d'espace disque en terminal
* [dust](https://github.com/bootandy/dust) - Une version plus intuitive de du
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - Client SSH propulsé par Ratatui avec synchronisation cloud, gestion des conteneurs, transfert de fichiers, tunnels, extraits et gestion des mots de passe [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - Une alternative à « ls »
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - Le shell convivial en ligne de commande
* [fork](https://github.com/immortal/fork) - Bibliothèque pour créer un nouveau processus détaché du terminal de contrôle (démon)
* [fselect](https://crates.io/crates/fselect) - Recherchez des fichiers avec des requêtes de type SQL
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - Une extension Git suivant le code généré par IA dans vos dépôts, reliant les lignes à l'agent, au modèle et aux transcriptions.
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - Une interface moderne de gestion de versions basée sur Git, graphique et en ligne de commande, construite de zéro pour les flux de travail propulsés par l'IA.
* [gitui](https://github.com/gitui-org/gitui) - Client Git en terminal extrêmement rapide. [![Compilation](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - Un langage de requête de type SQL pour les fichiers .git.
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - Application multiplateforme de nettoyage et d'analyse d'espace disque avec nettoyage approfondi, visualisation arborescente, détection de doublons, désinstallation d'applications et nettoyage des artefacts de développement. [![Vérification multiplateforme](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - Outil interactif de type Time Machine au niveau des fichiers pour ZFS/btrfs/nilfs2 (et même de vraies sauvegardes Time Machine !)
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - Interfaces en ligne de commande et textuelle pour gérer les contrôleurs réseau Ubiquiti UniFi, couvrant les deux API, avec tableau de bord Ratatui à 10 écrans [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - Lanceur de programmes Wayland rapide et réactif [![Compilation](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - Un outil textuel en ligne de commande pour trouver et arrêter les processus
* [Kondo](https://github.com/tbillington/kondo) - Outil graphique et en ligne de commande pour supprimer les artefacts de projets logiciels et récupérer de l'espace disque
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Contrôleur AMDGPU pour Linux
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - Un gestionnaire de paquets système expérimental
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - xargs + awk avec prise en charge de la recherche de motifs
* [lsd](https://github.com/lsd-rs/lsd) - Un ls avec de nombreuses belles couleurs et de superbes icônes [![Compilation](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - Démon BitTorrent flexible et rapide.
* [m4b/bingrep](https://github.com/m4b/bingrep) - Recherche dans les binaires de différents systèmes et architectures et les colore.
* [macpow](https://github.com/k06a/macpow) - Interface textuelle de surveillance de la consommation électrique en temps réel pour Mac Apple Silicon (M1–M5+). Lit IOReport, SMC, IORegistry — sans sudo. [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - Voyez ce qui occupe vos ports : le processus derrière chacun, ainsi que les diagnostics de conflits, d'exposition sur toutes les interfaces et de fuites de connexions. Sert également de serveur MCP. [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - Un programme pour gérer les services systemd via une interface textuelle de terminal.
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - Interface textuelle de diagnostic des disques d'un hôte : huit onglets couvrant périphériques, volumes, systèmes de fichiers, E/S, SMART, fichiers actifs et analyses.
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - Interface textuelle de diagnostic réseau en temps réel : inspection approfondie de 13 protocoles (TLS, QUIC, HTTP, DNS, SSH, MQTT, SNMP, …), attribution par processus via eBPF / PKTAP, analyse des retransmissions TCP, empreintes JA4, isolation Landlock facultative et ensembles d'incidents Flight Recorder.
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - Interface textuelle de diagnostic système d'un hôte : douze onglets couvrant processeur, mémoire, disques, processus, GPU, alimentation, services et réseau, avec curseur chronologique et moteur d'anomalies Insights.
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - Findex est un outil de recherche d'applications hautement personnalisable utilisant GTK3
* [mitnk/cicada](https://github.com/mitnk/cicada) - Un shell Unix de type bash
* [mmstick/concurr](https://github.com/mmstick/concurr) - Alternative à GNU Parallel avec architecture client-serveur
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - Application GTK3 pour prévisualiser et installer les polices Google
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - Une application de renommage de séries télévisées avec interface GTK3 facultative.
* [mxseev/logram](https://github.com/mxseev/logram) - Envoie les mises à jour des fichiers journaux vers Telegram
* [netscanner](https://github.com/Chleba/netscanner) - Scanner réseau textuel
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - Outil en ligne de commande pour suivre plusieurs dépôts Git [![Compilation](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - Une alternative sûre et ergonomique à `rm`
* [nushell/nushell](https://github.com/nushell/nushell) - Un nouveau type de shell
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Outil MCP Terraform - Interface en ligne de commande permettant aux assistants IA de gérer les environnements Terraform via Model Context Protocol.
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - Outil interactif pour sélectionner et exécuter les opérations plan/apply de Terraform
* [orhun/kmon](https://github.com/orhun/kmon) - Gestionnaire du noyau Linux et moniteur d'activité ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - Une alternative plus puissante à sysctl(8) avec interface textuelle de terminal ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - Compression et décompression sans effort en ligne de commande [![État du flux de travail GitHub (branche)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - Recherche et suppression efficaces de fichiers en double
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - Utilitaire GTK3 et en ligne de commande pour flasher plusieurs périphériques USB en parallèle
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - Démon de gestion d'alimentation Linux (interface DBus) avec outil en ligne de commande.
* [pueue](https://github.com/nukesor/pueue) - Gérez vos commandes shell de longue durée. [![Flux de travail GitHub Actions](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - Application multifonction pour trouver doublons, dossiers vides, images similaires, etc. [![Flux de travail GitHub Actions](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - Shell système de nouvelle génération
* [sharkdp/bat](https://github.com/sharkdp/bat) - Un clone de cat(1) avec des ailes. [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - Une alternative simple, rapide et conviviale à find. [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - Un visualiseur hexadécimal en ligne de commande avec sortie colorée pour différentes catégories d'octets [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - Un utilitaire de terminal pour les dumps hexadécimaux colorés.
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - Affichez images, vidéos, Markdown et autres documents dans le terminal.
* [skim](https://github.com/skim-rs/skim) - Un outil de recherche approximative
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - Bibliothèque et utilitaire multiplateformes de fichiers cachés [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - Un visualiseur de flux en terminal similaire à `pv(1)` [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - Un outil de compression de données sans perte utilisant Zopfli [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - Commandes `cp` et `rm` rapides
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - Client Git de bureau privilégiant le clavier avec gestion des PR, tickets, discussions, CI et notifications sur GitHub, GitLab et Bitbucket, avec liaison Jira et intégration d'agents IA ; backend Tauri + Rust [![Version publiée](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - Une interface textuelle rapide pilotée au clavier pour gérer les connexions SSH [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - REPL basé sur le modèle de composants WebAssembly avec système de plugins multilangage isolé [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - Un outil de diagnostic réseau [![Badge de compilation](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - Un émulateur de terminal rapide et prêt à l'emploi, conçu pour la programmation IA, avec paramètres par défaut sans configuration, intégration d'assistant IA et configuration Lua compatible WezTerm. Pour macOS uniquement.
* [uutils/coreutils](https://github.com/uutils/coreutils) - Une réécriture multiplateforme des coreutils GNU [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - L'analyseur et nettoyeur d'espace disque le plus rapide pour Windows, macOS, Linux et FreeBSD. [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - Exécute des commandes en réponse aux modifications de fichiers
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - Compte les lignes de code
* [ynqa/jnv](https://github.com/ynqa/jnv) - Filtre JSON interactif utilisant jq [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - Extrait des motifs des messages de journaux non structurés (en flux) [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - Grep interactif (pour les flux) [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### Planification de tâches

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - Une bibliothèque de planification de tâches écrite en Rust ![État de compilation](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### Éditeurs de texte

* [amp](https://amp.rs) - Inspiré de Vi/Vim.
* [Ferrite](https://github.com/OlaProeis/Ferrite) - Un éditeur markdown multiplateforme construit avec egui, proposant aperçu en direct, coloration syntaxique et diagrammes mermaid.
* [Fresh](https://github.com/sinelaw/fresh) - Un éditeur de texte et EDI en terminal facile à utiliser, puissant et rapide, avec prise en charge des plugins TypeScript.
* [gchp/iota](https://github.com/gchp/iota) - Un simple éditeur de texte
* [helix](https://github.com/helix-editor/helix) - Un éditeur de texte modal postmoderne inspiré de Neovim/Kakoune. [![Badge de compilation](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - Un petit éditeur de texte (≤1024 lignes de code) avec coloration syntaxique, recherche incrémentale et bien plus. [![Badge de compilation](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - Un éditeur Markdown portable privilégiant le fonctionnement hors ligne, construit avec Tauri v2. Un seul exécutable, aucune télémétrie.
* [jamii/focus](https://github.com/jamii/focus) - Un éditeur de texte minimaliste avec intégration de la gestion de versions jj (Jujutsu).
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - Un éditeur modal combinatoire à curseurs multiples
* [Lapce](https://github.com/lapce/lapce) - Un éditeur moderne avec backend. S'inspire de [xi-editor](https://github.com/xi-editor/xi-editor), abandonné.
* [manyougz/velotype](https://github.com/manyougz/velotype) - Un éditeur Markdown natif basé sur des blocs, avec rendu WYSIWYG et modes d'édition source, construit sur GPUI sans enveloppe WebView.
* [mathall/rim](https://github.com/mathall/rim) - Éditeur de texte de type Vim.
* [ox](https://github.com/curlpipe/ox) - Un éditeur de texte Rust indépendant fonctionnant dans votre terminal !
* [SoloMD](https://github.com/zhitongblog/solomd) - Un éditeur Markdown léger et multiplateforme avec aperçu en direct, construit avec Tauri 2.
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - Un éditeur modal à parti pris pour simplifier l'édition de code depuis le terminal
* [zed](https://github.com/zed-industries/zed) - Un éditeur de code collaboratif haute performance par les créateurs d'Atom et Tree-sitter.

### Traitement de texte

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - Readmer compose les fichiers `README.md` à partir de modèles Liquid ou Jinja2. [![État de compilation](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - Recherche de chaînes, tri, distances d'édition, alignements et générateurs accélérés par SIMD pour x86 AVX2 et AVX-512, et Arm NEON [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - Un outil de coloration de journaux mettant en évidence nombres, dates, adresses IP, UUID et niveaux de journalisation. [![Exécuter les tests](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - Débogueur d'expressions régulières en terminal avec correspondances en temps réel, débogage pas à pas, 3 moteurs, génération de code et filtrage de flux en direct. [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - Un outil de modèles textuels en terminal conçu pour standardiser les messages (comme les commits GIT). [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![Badge de compilation](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - Une boîte à outils haute performance de manipulation de données CSV. Fork de xsv, avec plus de 34 commandes supplémentaires et davantage. [![État de compilation Linux](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![État de compilation Windows](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![État de compilation macOS](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - De séduisantes polices ANSI pour la console ![Badge de compilation](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - Outil extrêmement rapide en ligne de commande supprimant les commentaires du code à l'aide des grammaires tree-sitter.
* [grex](https://github.com/pemistahl/grex) - Un outil en ligne de commande et une bibliothèque générant des expressions régulières à partir de cas de test fournis par l'utilisateur
* [harehare/mq](https://github.com/harehare/mq) - Un outil en ligne de commande et une bibliothèque traitant Markdown avec une syntaxe de type jq [![Badge de compilation](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - Un outil de recherche de chaînes simple et rapide pour les humains
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - Bibliothèque de manipulation de chaînes avec recherche de motifs, transformation de texte et plusieurs algorithmes de recherche (KMP, Boyer-Moore, Aho-Corasick, etc.)
* [Melody](https://github.com/yoav-lavi/melody) - Un langage compilé en expressions régulières visant une meilleure lisibilité et maintenabilité [![Badge de compilation](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - Un outil de recherche rapide pour JSON, YAML, TOML et autres formats de sérialisation avec syntaxe intuitive de requêtes par chemins.
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - ripgrep, mais recherche aussi dans les PDF, livres électroniques, documents Office, zip, tar.gz, etc.
* [ripgrep](https://crates.io/crates/ripgrep) - Combine la facilité d'utilisation de The Silver Searcher à la vitesse brute de grep
* [ruplacer](https://github.com/your-tools/ruplacer) - Recherche et remplace du texte dans les fichiers source [![Exécuter les tests](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - Recherche et remplacement interactifs dans le terminal.
* [sd](https://crates.io/crates/sd) - Outil intuitif de recherche et remplacement en ligne de commande
* [sstadick/hck](https://github.com/sstadick/hck) - Une alternative à `cut` plus rapide et plus complète, compatible directement [![Badge de compilation](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - Convertit tout fichier (PDF, DOCX, PPTX, XLSX, EPUB, HTML/URL, images, audio/vidéo) en Markdown propre pour les agents IA ; une interface en ligne de commande et un serveur MCP [![Badge de compilation](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - Trouvez les fichiers (ff) par nom !
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - Lit les lignes d'entrée comme tranches d'octets pour une grande efficacité.
* [whitfin/runiq](https://github.com/whitfin/runiq) - Une façon efficace de filtrer les lignes en double d'une entrée non triée.
* [xsv](https://crates.io/crates/xsv) - Un outil CSV rapide en ligne de commande (découpage, indexation, sélection, recherche, échantillonnage, etc.)

### Utilitaires

* [1History](https://github.com/localfirstapp/1History) - Interface en ligne de commande pour sauvegarder l'historique Firefox/Chrome/Safari dans un fichier SQLite [![État de compilation](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - Un format dont les fichiers se corrompent légèrement et définitivement à chaque ouverture, sans possibilité de récupération à partir du seul fichier. [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - Un utilitaire en ligne de commande pour convertir les clés publiques Ed25519 entre divers encodages (Base58, Base64, IPFS, iroh, libp2p, OpenSSH, etc.). [![État de compilation](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - Un simple outil textuel de test du clavier.
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - Un utilitaire Have I Been Pwned (HIBP) en ligne de commande permettant de vérifier facilement les comptes et mots de passe compromis.
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - Logiciel C2 (commande et contrôle) pour orchestrer des appareils physiques.
* [dcapal](https://github.com/dcapal/dcapal) - DcaPal est un outil en ligne gratuit sans inscription pour équilibrer votre portefeuille avec des investissements périodiques à montant constant.
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - Un simple outil en ligne de commande pour générer rapidement et facilement des fichiers `.gitignore`. [![Badge de compilation](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - Un client non officiel pour installer Unreal Engine, télécharger et gérer les ressources achetées, projets, plugins et jeux de l'Epic Games Store.
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - Une application d'authentification OTP (mot de passe à usage unique) en ligne de commande. ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![Badge de compilation](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - Une version extrêmement rapide de tmux-fingers, pour copier/coller dans tmux comme avec vimium/vimperator.
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - Synchronise les paquets installés sur plusieurs machines
* [gitlogue](https://github.com/unhappychoice/gitlogue) - Un économiseur d'écran textuel visualisant l'historique des commits Git dans votre terminal
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - Une collection utile d'outils en ligne de commande pour faciliter le développement : conversion, codecs, hachage, chiffrement, etc.
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - Bureau en pixel art dans le terminal visualisant les sessions Claude Code comme des collègues animés en temps réel. [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - Un gestionnaire et accélérateur de téléchargements open source haute performance répartissant chaque fichier entre connexions parallèles et sources miroirs. Propose redistribution dynamique des plages et récupération en temps réel des blocages pour Windows, macOS et Linux.
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - Serveur RDP natif Wayland construit sur IronRDP, offrant l'accès à distance aux bureaux Linux Wayland (GNOME, KDE, COSMIC, compositeurs wlroots et bien d'autres) sans X11.
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - Gestionnaire de notes markdown en terminal. [![Crate](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![État de compilation](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - Génère une palette de couleurs à partir d'une image ou d'une couleur à l'aide de modèles.
* [Mobslide](https://github.com/thewh1teagle/mobslide) - Application de bureau transformant votre smartphone en télécommande de présentation.
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - Un client graphique de bureau multiplateforme pour FRP (frpc), permettant aux utilisateurs non techniques d'exposer leurs services locaux sur Internet en un clic. [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - Interface textuelle pour exécuter plusieurs processus
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - Une interface textuelle simple pour visualiser et contrôler les conteneurs Docker.
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - Génère des paquets Nix depuis des URL avec récupération préalable des hachages, inférence des dépendances, détection des licences et bien plus [![Badge de compilation](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - Un visualiseur flake.lock de type ranger [![Badge de compilation](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - Génère les appels de récupération Nix depuis les URL de dépôts [![Badge de compilation](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - Utilitaire de renommage par lots pour développeurs
* [pastel](https://github.com/sharkdp/pastel) - Facilite le travail avec les couleurs : génération, mélange, couleur aléatoire.
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - Une horloge en terminal avec heure locale, minuteur et chronomètre. [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - Écrit les licences sur stdout [![Actions GitHub](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - Mandataire SIP défini par logiciel, comprenant enregistrement, présence et b2bua. Alternative à Freeswitch/FreePBX.
* [rleeon/hoard](https://github.com/rleeon/hoard) - Système de sauvegarde et synchronisation de parties de jeux avec détection automatique, instantanés versionnés et stockage auto-hébergé. [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - Application rapide en ligne de commande utilisant Tokio pour exécuter des commandes en parallèle. Interface similaire à GNU Parallel ou xargs. [![Crate](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![État de compilation](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - Un logiciel de bureau à distance, excellente alternative à TeamViewer et AnyDesk.
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - Sauvegardes rapides, chiffrées et dédupliquées propulsées par Rust. [![Version](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - Un système d'estimation de pose humaine préservant la vie privée, utilisant les informations d'état du canal WiFi (CSI) et l'apprentissage automatique.
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - Un utilitaire d'encodage et de décodage d'images de codes QR. [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - Génère des octets pseudo-aléatoires [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - Un écran d'accueil de terminal personnalisable affiché au démarrage du shell et lors des changements de répertoire, avec tableaux de bord propres à chaque répertoire [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - Implémentation Rust d'[age](https://github.com/FiloSottile/age).
* [suckit](https://github.com/Skallwar/suckit) - Visite récursivement un site web et télécharge son contenu sur votre disque. [![Crate](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![État de compilation](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - Espace de travail JSON de bureau privilégiant le stockage local, construit avec Rust et Tauri pour le formatage, l'édition, la comparaison, la conversion, la validation et l'extraction de journaux.
* [Tabiew](https://github.com/shshemi/tabiew) - Une application textuelle légère pour visualiser et interroger des fichiers CSV.
* [Tail Tales](https://github.com/davidmoreno/tailtales) - Un visualiseur de journaux textuel prenant en charge logfmt. [![Crate](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - Une interface Git textuelle pilotable à la souris et un tableau de bord multidépôt.
* [television](https://github.com/alexpasmantier/television) - Une interface textuelle de recherche approximative généraliste extrêmement rapide ![Exécutions des vérifications de branche GitHub](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - Une application de bureau haute performance et complète pour visualiser et explorer les fichiers JSON et NDJSON, avec prise en charge de plugins WASM. [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - Un client Git/Hg textuel simple axé sur les raccourcis clavier
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![Compilation](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - Implémentation alternative de l'API serveur Bitwarden écrite en Rust
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - Une application météo en terminal avec animation ASCII. [![Version publiée](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - Transcrit l'audio ou la vidéo dans toutes les langues sur toutes les plateformes.
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warp est un terminal moderne extrêmement rapide accéléré par GPU, conçu pour améliorer votre productivité et celle de votre équipe.
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - Une alternative native Windows à `tree` basée sur Rust, avec compatibilité d'entrée/sortie au niveau des différences lors des exécutions réussies, bien plus de fonctionnalités dont exclusions essentielles et prise en charge de `.gitignore`, et performances plusieurs fois supérieures.
* [wrestic](https://github.com/alvaro17f/wrestic) - Une enveloppe autour de restic.
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - Compagnon météo pour le terminal. [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - Visualiseur multiplateforme de frappes et clics de souris pour captures vidéo d'écran, diffusion et présentations. Fonctionne sous Windows, macOS et Linux (X11 et Wayland). [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - Un gestionnaire de téléchargements complet. [![Badge de version publiée](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - Un gestionnaire de téléchargements multiprotocole avec moteur Rust/Tokio, prenant en charge HTTP/FTP, BitTorrent, eD2K, HLS et DASH, avec segmentation dynamique de type IDM, extensions de navigateur et point d'accès JSON-RPC compatible aria2.

### Vidéo

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - Un simple téléchargeur de vidéos
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - Application de stabilisation vidéo utilisant les données du gyroscope
* [harlanc/xiu](https://github.com/harlanc/xiu) - Un serveur de diffusion en direct puissant et sécurisé (rtmp/httpflv/hls/relais). [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - Moniteur de flux HLS, DASH et IPTV en terminal avec sondes réseau, TR 101 290 et métriques SCTE-35.
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - Multiplexeur MP4 entièrement en Rust sans dépendance externe, produisant du MP4 conforme aux normes à partir d'images encodées.
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - Une application de bureau pour télécharger vidéos, cours, musique et livres depuis plus de 1 800 sites, avec lecteur multimédia, lecteur de documents et bibliothèque d'étude intégrés. [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - Fusionne les fichiers vidéo et audio en ligne de commande
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - Serveur multimédia DLNA prenant en charge Linux, macOS, Windows et Docker
* [xiph/rav1e](https://github.com/xiph/rav1e) - L'encodeur AV1 le plus rapide et le plus sûr.

### Virtualisation

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - Une machine virtuelle légère pour les charges conteneurisées [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - Une implémentation de machines virtuelles légères (VM) offrant l'expérience et les performances des conteneurs, mais avec les avantages d'isolation et de sécurité des VM.
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - Bibliothèque légère d'isolation par microVM pour exécuter du code isolé en quelques millisecondes. Prend en charge les SDK Rust, Python et TypeScript avec images de conteneurs compatibles OCI. [![Version publiée sur GitHub](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - Un outil de conteneurisation sans démons
* [youki-dev/youki](https://github.com/youki-dev/youki) - Un environnement d'exécution de conteneurs [![Badge de compilation](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### Web

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - Extraction de contenu web pour les LLM avec empreintes TLS, serveur MCP et sans navigateur [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - Permet d'exposer votre serveur web local via une URL publique.
* [cfal/tobaru](https://github.com/cfal/tobaru) - Outil de redirection de ports avec listes d'autorisation, routage par règles IP et TLS SNI/ALPN, prise en charge d'iptables, redirection circulaire (équilibrage de charge) et rechargement à chaud.
* [hook0/hook0](https://github.com/hook0/hook0) - Une plateforme open source de webhooks en tant que service facilitant leur envoi pour les développeurs SaaS
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵 Pont ActivityPub auto-hébergé et entièrement automatisé pour sites statiques. [![Version publiée](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - Infrastructure auto-hébergée d'indexation SEO pour gérer sitemaps, soumissions d'URL et indexation par les moteurs de recherche.
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - Tout-en-un
   robot d'exploration et d'audit de sites, archiveur hors ligne et exportateur markdown prêt pour l'IA avec contrôle qualité CI/CD
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - Un moteur de navigateur autonome récupérant, affichant et extrayant du contenu web en Markdown, JSON ou captures d'écran — sans Chromium ni clé API. Interface en ligne de commande, Python, serveur MCP. [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - Un agrégateur de liens / clone de reddit pour le fédivers [![État de compilation](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - Le logiciel MASQ Node fournit un réseau maillé décentralisé de nœuds permettant aux utilisateurs du monde entier d'accéder au contenu Internet normal - prochaine évolution technologique au-delà de Tor et des VPN [![Badge de compilation](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - Application de blog fédérée par ActivityPub
* [Redlib](https://github.com/redlib-org/redlib) - Une interface privée alternative à Reddit, issue de [Libreddit](https://github.com/libreddit/libreddit)
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - Un système modulaire de traitement RSS en pipeline.
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - Un raccourcisseur d'URL simple, extrêmement rapide et auto-hébergé, sans fonctionnalités inutiles.[![Version publiée](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - Plateforme de discussion privilégiant l'utilisateur, construite avec des technologies web modernes.
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - Navigateur anti-détection open source avec profils isolés illimités, moteurs Chromium/Firefox, falsification d'empreintes, prise en charge mandataires/VPN, API locale et serveur MCP, et synchronisation cloud chiffrée de bout en bout. [![Version publiée sur GitHub](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### Serveurs web

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - Une bibliothèque pour construire des services réseau rapides, fiables et évolutifs.
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - Un mandataire MITM 🦀 ! Boîte à outils HTTP/1, HTTP/2 et WebSockets avec capacités SSL/TLS [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - Serveur mandataire direct, prenant en charge chaînage de mandataires, inspection de protocoles, interception MITM, adaptation ICAP et mandataire transparent [![Couverture de code](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - Une bibliothèque de serveur HTTP Rust légère, haute performance et multiplateforme construite sur Tokio ; prise en charge intégrée des middlewares, WebSocket, SSE et TCP brut. [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - Mini serveur mandataire inverse, HTTPS, CORS, hébergement de fichiers statiques et moteur de modèles (minijinja) [crates.io](https://crates.io/crates/minirps)
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 🪂 Beau serveur HTTP/Bittorrent sans tracas. Sécurisé - Graphique - Élégant - Rapide
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - Un serveur web statique extrêmement rapide avec routage, modèles et sécurité dans un seul binaire, configurable sans code [![Badge de compilation](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - Un service minimal de téléversement de fichiers/pastebin ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - Un framework de services modulaire pour déplacer et transformer vos paquets réseau, utilisé pour créer des clients web, serveurs et — surtout — mandataires
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - Une démonstration de l'utilisation d'un serveur GraphQL comme schéma distant avec [Hasura](https://hasura.io/) ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - Un serveur web asynchrone extrêmement rapide pour servir des fichiers statiques. ⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - Un petit outil autonome multiplateforme en ligne de commande permettant simplement de récupérer le binaire et de servir des fichiers via HTTP [![Badge de compilation](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - Hébergez ces choses, s'il vous plaît - Un serveur HTTP basique pour héberger un dossier rapidement et simplement
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - Serveur HTTP statique simple
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - Un serveur HTTP extrêmement rapide et minimaliste conçu pour les applications Rust modernes. Fournit hôtes virtuels, SNI, contenu statique, mandataire inverse, HTTP 1/2/3 et Tokio ou Smol comme environnements asynchrones !
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - Un mandataire HTTP/Socks5 Rust asynchrone rapide

### Automatisation des flux de travail

* [cowork-forge](https://github.com/sopaco/cowork-forge) - Plateforme multi-agent native IA orchestrant des agents spécialisés dans un pipeline à 7 étapes pour transformer des idées en logiciels prêts pour la production. [![Version publiée](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML (Workflow Orchestration Markup Language) est un langage de balisage pour l'automatisation des flux de travail, avec noyau d'exécution Rust. Lisible comme HTML, versionnable comme du code, puissant comme JavaScript — sans enchevêtrement de constructeur visuel ni limite aux capacités d'une étape. [![Version publiée](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - Studio de données visuel open source (ETL/ELT) fonctionnant entièrement sur DuckDB. Glissez sources, transformations et destinations sur un canevas, compilé en SQL DuckDB brut ; plus de 300 connecteurs et serveur MCP intégré. [![Version publiée](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## Outils de développement

* [7df-lab/devo](https://github.com/7df-lab/devo) - Un agent de programmation léger et indépendant des modèles, fonctionnant comme un seul binaire. Rapide, économe en jetons et hautement personnalisable. [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - Un agent IA local open source automatisant les tâches d'ingénierie.
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - Interface textuelle de revue de code avec raccourcis Vim. Visualiseur continu de différences, commentaires de type PR et export vers GitHub/GitLab/presse-papiers. Prend en charge Git, jj et Mercurial. [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - Nettoie en toute sécurité les branches Git obsolètes [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - Un gestionnaire de paquets et de projets Python extrêmement rapide, écrit en Rust. [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - Un client API textuel complet écrit en Rust. ATAC est gratuit, open source, hors ligne et sans compte.
* [bacon](https://github.com/Canop/bacon) - Vérificateur de code Rust en arrière-plan, similaire à cargo-watch
* [biome](https://github.com/biomejs/biome) - Une chaîne d'outils pour les projets web, offrant des fonctionnalités pour leur maintenance. Biome propose un formateur et un linter, utilisables en ligne de commande et via LSP
* [cachix/devenv](https://github.com/cachix/devenv) - Environnements de développement rapides, déclaratifs, reproductibles et composables utilisant Nix [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - Pilote automatique pour Claude Code avec cerveau LLM local (ollama/llama.cpp/vLLM) apprenant à approuver/refuser automatiquement les appels d'outils. Orchestration multisession, surveillance de santé, contrôle des dépenses. [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Analyses de code Rust
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - Génère un journal des modifications à partir des métadonnées Git ([journal des modifications conventionnel](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html))
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - Foundations est une bibliothèque Rust modulaire conçue pour aider les programmes à évoluer vers des systèmes distribués de niveau production.
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - Visualise la propriété et les durées de vie en Rust [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - Configurez une application web moderne rust+react en une commande. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - Crée ctags/etags pour un projet cargo et toutes ses dépendances
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - Puissant outil d'anonymisation de bases de données avec règles flexibles [![Badge de compilation](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - Un outil de coloration syntaxique pour les sorties Git et diff[![Badge de compilation](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - Linter pour les fichiers `.env` [![Badge de compilation](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - Infrastructure Git programmable sur stockage objet
* [envio](https://github.com/humblepenguinn/envio) - Un outil moderne et sécurisé en ligne de commande pour gérer les variables d'environnement [![Badge de compilation](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - Un serveur de langage Markdown de gestion des connaissances personnelles prenant en charge liens wiki de type Obsidian, liens retour et notes quotidiennes pour Neovim, VSCode, Zed, Helix et Kakoune
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - Versions sémantiques, journal des modifications et publications étiquetées pilotés par Conventional Commits, avec prise en charge des monorepos et de 16 formats de fichiers de versions [![Badge de compilation](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - Un dépôt de code natif graphe pour les personnes et les agents IA. Kin vous aide, vous et vos agents IA, à comprendre l'impact potentiel d'une modification avant de la faire.
* [Flox](https://github.com/flox/flox) - Flox est à la fois un environnement virtuel et un gestionnaire de paquets.
* [forgecode](https://github.com/tailcallhq/forgecode) - Un partenaire de programmation IA en terminal pour générer et modifier du code. [![Site web](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - Une couche API pour construire des tableaux de bord destinés aux clients 10 fois plus vite
* [fw](https://github.com/brocode/fw) - Accélérateur de productivité de l'espace de travail [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - Un outil en ligne de commande exécutant les cibles make via une recherche approximative avec fenêtre d'aperçu. [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - Un programme listant les statistiques d'utilisation de code non sûr dans une crate et toutes ses dépendances [![État de compilation](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - Un générateur de journaux des modifications hautement personnalisable suivant les spécifications Conventional Commit ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Le framework de génération de messages de commit Git et de journaux des modifications
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - Interface textuelle visuelle de reflog Git pour annuler les erreurs Git [![crate](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![Badge de compilation](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - Implémentation de Git entièrement en Rust avec crates internes haute performance et outils en ligne de commande pour clone, fetch, status, diff, commit, config, refs et bien plus. [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - Recharge le code Rust à chaud [![Badge de compilation](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - Enregistre des commandes avec paramètres substituables et recherche ou complète automatiquement à tout moment [![crate](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![Badge de compilation](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - Une alternative à pre-commit plus rapide, sans dépendance et directement compatible, écrite en Rust.
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - Un système de gestion de versions compatible Git avec interface claire en ligne de commande, gestion native des conflits et rebasage automatique [![Version publiée](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - Un exécuteur pratique de commandes pour les tâches propres aux projets
* [mask](https://github.com/jacobdeichert/mask) - Un exécuteur de tâches en ligne de commande défini par un simple fichier markdown [![Badge de compilation](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - Gestionnaire de versions d'outils polyglotte et exécuteur de tâches ; alternative directement compatible à asdf aux performances supérieures. [![Badge de compilation](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - Extension ajoutant des liens `<a>` aux références des instructions `mod`, `use` et `extern crate` sur GitHub.
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - Indexeur sémantique de code avec graphe de connaissances GraphRAG et serveur MCP. Analyse AST Tree-sitter, recherche structurelle ast-grep, stockage vectoriel LanceDB, vue des signatures de code. Modes en ligne de commande et serveur MCP pour les assistants IA comme Claude/Cursor/Windsurf. [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - Volet de terminal pour revoir les différences d'un agent de programmation et renvoyer les commentaires de lignes à Claude Code, Codex, OpenCode ou Pi. [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - Outil rapide de gestion de paquets et de flux de travail pour projets multilangages, construit sur l'écosystème conda.
* [ptags](https://github.com/dalance/ptags) - Une enveloppe parallèle de universal-ctags pour dépôt Git
* [Racer](https://github.com/racer-rust/racer) - Complétion de code pour Rust
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - Moteur de recherche plein texte de code privilégiant le stockage local pour agents de programmation IA. Indexation par trigrammes, requêtes en moins de 100 ms, mode serveur MCP, 18 langages via tree-sitter.
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - Une extension de navigateur pratique pour rechercher crates et documentation dans la barre d'adresse (omnibox). [![État de compilation](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - L'installateur de la chaîne d'outils Rust [![Badge de compilation](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - Un « interpréteur de shebang » indépendant du langage permettant d'écrire des scripts en un seul fichier dans des langages compilés. [![État de compilation](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - Espace de travail de bureau exécutant de nombreux agents de programmation IA en parallèle, chacun dans son propre worktree Git, avec détection d'état, différences, gestion des PR et hub mandataire MCP [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - Gestion d'environnements d'ingénierie native IA préparant votre base de code aux agents.
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - Correcteur orthographique du code source
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - Une chaîne d'outils unifiée de développement web combinant Vite, Vitest, Oxlint, Rolldown et bien d'autres dans un unique outil en ligne de commande propulsé par Rust (`vp`)
* [VT Code](https://crates.io/crates/vtcode) - Agent de programmation en terminal associant une interface textuelle moderne à une compréhension sémantique approfondie du code grâce à tree-sitter et ast-grep.
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - Un outil de comparaison structurelle comprenant la syntaxe, prenant en charge plus de 30 langages de programmation
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - Environnement d'exécution contextuel pour agents de programmation IA : serveur MCP et hook shell compressant les sorties d'outils et du terminal pour réduire l'utilisation des jetons LLM ; analyse Tree-sitter, cache de sessions. [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### Système de compilation

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - Outil de génération de projets full-stack de bout en bout prenant en charge Rust (Axum, Actix Web, Leptos, Dioxus, SeaORM, SQLx, tonic, async-graphql) ainsi que TypeScript, Go et Python — code prêt pour vous ou votre agent IA.
* [Cargo](https://crates.io/) - Le gestionnaire de paquets Rust
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - Une sous-commande configurable pour simplifier les tests, la compilation et bien plus pour toutes les combinaisons de fonctionnalités [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - Un utilitaire de comparaison de microbenchmarks
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - Un installateur rapide de binaires pour crates Rust, récupérant des artefacts précompilés au lieu de compiler les sources [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - Une extension cargo générant des recettes BitBake utilisant les classes de meta-rust
  * [cargo-cache](https://crates.io/crates/cargo-cache) - Inspecte/gère/nettoie votre cache cargo (`~/.cargo/`/`${CARGO_HOME}`), affiche les tailles, etc. [![État de compilation](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - Une enveloppe de `cargo rustc -- -Zno-trans`, utile pour compiler plus vite lorsque seules les vérifications de correction sont nécessaires
  * [cargo-commander](https://crates.io/crates/cargo-commander) - Une sous-commande de `cargo` exécutant des commandes à la manière de la section scripts de `package.json` [![Compilation et tests](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - Liste le nombre de lignes source et les détails des projets cargo, dont les statistiques de code non sûr
  * [cargo-deb](https://crates.io/crates/cargo-deb) - Génère des paquets Debian binaires
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - Crée des graphes de dépendances pour projets cargo avec les métadonnées cargo et graphviz
  * [cargo-do](https://crates.io/crates/cargo-do) - Exécute plusieurs commandes cargo à la suite
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - Extension cargo générant des ebuilds avec les eclasses intégrées
  * [cargo-edit](https://crates.io/crates/cargo-edit) - Permet d'ajouter et de lister les dépendances en lisant/écrivant votre fichier Cargo.toml depuis la ligne de commande
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - Un générateur de projets Rust utilisant un dépôt Git existant comme modèle.
  * [cargo-info](https://crates.io/crates/cargo-info) - Interroge crates.io pour obtenir des détails sur les crates en ligne de commande
  * [cargo-license](https://crates.io/crates/cargo-license) - Une sous-commande cargo pour consulter rapidement les licences de toutes les dépendances.
  * [cargo-limit](https://crates.io/crates/cargo-limit) - Cargo moins bruyant : les avertissements sont ignorés jusqu'à correction des erreurs, intégration Neovim, etc. [![Badge de compilation](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - Outil simple de détection des dépendances inutilisées dans Cargo.toml.
  * [cargo-make](https://crates.io/crates/cargo-make) - Exécuteur de tâches et outil de compilation. [![Badge de compilation](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - Un plugin cargo présentant une vue arborescente des modules d'une crate.
  * [cargo-multi](https://crates.io/crates/cargo-multi) - Exécute la commande cargo spécifiée sur plusieurs crates
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - Affiche la disponibilité de nouvelles versions des dépendances Rust ou leur obsolescence
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - Sous-commande Cargo pour créer votre README à partir de la documentation de votre crate. [![Badge de compilation](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - Outil de publication de projets cargo gérés par Git : compilation, étiquetage, publication, documentation et envoi [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - Permet d'exécuter rapidement et facilement des « scripts » Rust utilisant l'écosystème de paquets Cargo
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - Trouve les dépendances inutilisées
  * [cargo-update](https://crates.io/crates/cargo-update) - Sous-commande cargo pour vérifier et appliquer les mises à jour des exécutables installés
  * [cargo-watch](https://crates.io/crates/cargo-watch) - Utilitaire cargo pour compiler les projets lorsque les sources changent
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - Développe les macros de votre code source
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - Utile pour intégrer une bibliothèque Rust dans un projet CMake
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - Un exemple de projet montrant l'utilisation de CMake avec Rust
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/) est un outil de compilation à grande échelle construit en Rust
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - L'outil de compilation extrêmement rapide pour Rust.
* Actions GitHub
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - Action GitHub Rust
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - Chaînes d'outils Rust et rust analyzer nightly pour nix [![Badge de compilation](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/) est un système de compilation rapide, évolutif et convivial pour les bases de code de toutes tailles, construit en Rust.
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - Un bundler JavaScript/TypeScript écrit en Rust, destiné à devenir le futur bundler de Vite.
* [rui314/mold](https://github.com/rui314/mold) - Un éditeur de liens moderne à haute vitesse pour Linux, macOS et Windows (ELF, Mach-O, PE)
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com) est une plateforme backend d'exécution distante écrite en Rust pour les systèmes de compilation clients comme [Buck2](https://buck2.build/), [Bazel](https://bazel.build/), [Pants](https://www.pantsbuild.org/), etc. [![Tableau de score OpenSSF](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![Bonnes pratiques OpenSSF](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - Système de compilation haute performance pour monorepos JavaScript et TypeScript, écrit en Rust. Propose calcul incrémental, cache distant et exécution parallèle des tâches.
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - Outil de versionnage dynamique générant une version pour chaque compilation depuis tout état Git, avec sorties SemVer, PEP 440 et CalVer [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### Débogage

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - Interface web pour gdb afin de déboguer C, C++, Rust et Go.
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - Débogueur moderne pour Linux x86-64. Écrit en Rust pour les programmes Rust.
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - Traceur d'execve{,at} et du comportement avant exécution, lanceur de débogueurs.
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - Une extension LLDB pour [Visual Studio Code](https://code.visualstudio.com/).

### Déploiement

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - Images Docker pour compiler des binaires Rust statiques avec musl-libc et musl-gcc, avec versions statiques de bibliothèques C utiles
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - Un exemple de projet pour des images Docker Rust très petites
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - Générateur de Dockerfile à partir d'une description simplifiée en YAML ou JSON ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - Une image Docker Rust multiversion (avec outils musl)
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - Un outil et des images préconstruites pour mettre en cache la compilation des dépendances distantes entre constructions Docker.
  * [moghtech/komodo](https://github.com/moghtech/komodo) - Un outil pour construire et déployer des logiciels sur de nombreux serveurs, avec interface web, API et sans limite de serveurs
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - Images Docker pour compiler des binaires Rust statiques avec musl-cross [![Compilation](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - L'image Docker officielle de Rust
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - Attend que plusieurs services deviennent disponibles ![Compilation](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - Un buildpack pour applications Rust sur Heroku
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - Publie les crates depuis la CI, avec génération du journal des modifications et vérification semver. [![Badge de compilation](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### Systèmes embarqués

[Rust Embedded](https://rust-embedded.org/) vise à améliorer l'expérience de bout en bout de Rust dans les environnements à ressources limitées et sur les plateformes non traditionnelles. Voir [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust) pour une sélection plus complète de ressources Rust embarqué.

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - Composants réutilisables pour Arduino Uno.
* Compilation croisée
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - Tout ce qu'il faut savoir sur la compilation croisée de programmes Rust
  * [japaric/xargo](https://github.com/japaric/xargo) - Compilation croisée sans effort de programmes Rust pour des cibles personnalisées sans système comme ARM Cortex-M
* Outils de développement
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - Interface textuelle multiplateforme de surveillance de ports série et RTT avec macros d'entrée hex/@tag, recherche, enregistrement de sessions et plugins Lua. [![État de compilation](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - Boîte à outils de débogage embarqué pour flasher et déboguer les microcontrôleurs ARM et RISC-V.
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - Un moniteur série minimal avec traceur textuel.
* Espressif
  * [esp-rs](https://github.com/esp-rs) - Héberge plusieurs projets communautaires permettant l'utilisation du langage Rust sur divers SoC et modules produits par Espressif Systems.
* Micrologiciel
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - oreboot est un fork de coreboot sans C, écrit en Rust
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - Une HAL Rust pour la famille d'appareils nRF

### FFI

Voir aussi [l'interface de fonctions étrangères](https://doc.rust-lang.org/book/first-edition/ffi.html), [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/) (un ensemble d'exemples d'utilisation de code Rust depuis d'autres langages) et les [exemples FFI écrits en Rust](https://github.com/alexcrichton/rust-ffi-examples).

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - Générateur de code pour créer des liaisons Rust sûres à partir de bibliothèques C basées sur GObject.
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - Génère des fichiers d'en-tête C depuis les sources Rust. Utilisé dans Gecko pour WebRender
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - Génère des fichiers d'en-tête C depuis les sources Rust
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - Liaisons Rust pour la bibliothèque C librclone.
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - Génère des liaisons C# depuis les fichiers source Rust
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - Interopérabilité sûre entre Rust et C++ [![Badge de compilation](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - Intègre du code C++ directement dans Rust. [![État de compilation](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Un générateur de liaisons Rust
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - Pont Rust sûr pour créer des fonctions NIF Erlang
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - Utilise Java depuis Rust
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - Utilise Rust depuis Java
  * [j4rs](https://crates.io/crates/j4rs) - Utilise Java depuis Rust
  * [jni](https://crates.io/crates/jni) - Utilise Rust depuis Java
  * [jni-sys](https://crates.io/crates/jni-sys) - Définitions Rust correspondant à jni.h
  * [rucaja](https://crates.io/crates/rucaja) - Utilise Java depuis Rust
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Liaisons Lua 5.3 pour Rust
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Liaisons Rust sûres vers Lua 5.1
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - Liaisons Rust de haut niveau pour Lua 5.4/5.3/5.2/5.1 (dont LuaJIT) et Roblox Luau, avec prise en charge d'async/await [![Badge de compilation](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - Enveloppe lua 5.3 de haut niveau sans surcoût pour Rust
  * [tomaka/hlua](https://github.com/tomaka/hlua) - Bibliothèque Rust pour interfacer Lua
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - Liaisons mruby sûres pour Rust
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - Une façon simple de générer un module nodejs avec Rust
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - Liaisons Rust pour écrire des modules natifs Node.js sûrs et rapides
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - Un module écrit en Rust et N-API fournissant des fonctionnalités d'interface (FFI) pour Node.js
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Liaisons et enveloppe de l'environnement d'exécution Objective-C pour Rust
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - Le framework permettant d'écrire des extensions PHP en Rust pur et sûr lorsque possible
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer Prolog est un système ISO Prolog libre écrit en Rust
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Liaisons Python
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - Extension de setuptools Python permettant de distribuer des bibliothèques liées dynamiquement dans des wheels Python de la façon la plus portable imaginable.
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Liaisons Rust pour l'interpréteur Python
  * [RustPython](https://github.com/RustPython/RustPython) - Un interpréteur Python écrit en Rust [![État de compilation](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - Extensions Ruby natives écrites en Rust
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - Extensions Ruby natives écrites en Rust et inversement
* Web Assembly
  * [rhysd/wain](https://github.com/rhysd/wain) - wain : interpréteur WebAssembly écrit de zéro en Rust sûr, sans dépendance [![Badge de compilation](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - Un projet facilitant les interactions de haut niveau entre modules wasm et JS.
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: Empaquetez le wasm et publiez-le sur npm !

### Formateurs

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - Un linter Python et formateur de code extrêmement rapide [![État des actions](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - Une plateforme de formatage de code extensible et configurable [![Badge de compilation](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - Un formateur de code Rust à parti pris corrigeant automatiquement la mauvaise syntaxe (plugin communautaire [Prettier](https://prettier.io/))
* [rustfmt](https://github.com/rust-lang/rustfmt) - Formateur de code Rust maintenu par l'équipe Rust et inclus dans cargo
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - Un linter et formateur Markdown rapide écrit en Rust [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### EDI

Voir aussi [Rust Tools](https://rust-lang.org/tools/).

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Un plugin de développement Rust pour l'EDI Eclipse, offrant une expérience d'édition riche grâce à l'intégration du serveur de langage Rust Analyzer, de l'exécuteur Cargo et du débogueur gdb
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - Autocomplétion (voir aussi [company](https://company-mode.github.io) et [auto-complete](https://github.com/auto-complete/auto-complete))
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - Prise en charge de Rust pour [Flycheck](https://github.com/flycheck/flycheck)
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Mode majeur Rust
    * [rustic](https://github.com/emacs-rustic/rustic) - Environnement de développement Rust pour Emacs [![Badge de compilation](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - EDI en ligne avec prise en charge complète de Rust, basé sur Rust Language Server
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - Prise en charge native de Rust et cargo depuis la version 3.22.2
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - Plugin Rust pour la plateforme IntelliJ
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - Client [LSP](https://microsoft.github.io/language-server-protocol/). Implémenté en Rust et prenant en charge rls dès l'installation.
  * [lapce](https://github.com/lapce/lapce) - Éditeur de code extrêmement rapide et puissant écrit en Rust. [![Badge de compilation](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - Un EDI Rust
  * [RustRover](https://www.jetbrains.com/rust/) - Un EDI Rust puissant de JetBrains, gratuit pour une utilisation individuelle non commerciale
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - Paquet Rust officiel
  * [Vim](https://vim.sourceforge.io/) - L'éditeur de texte omniprésent
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - Client [LSP](https://microsoft.github.io/language-server-protocol/). Implémenté en Rust et prenant en charge rls dès l'installation.
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - Un plugin Neovim pour une intégration fluide avec les commandes Cargo.
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - Plugin facilitant la gestion des dépendances crates.io.
    * [rust.vim](https://github.com/rust-lang/rust.vim) - Fournit détection des fichiers, coloration syntaxique, formatage, intégration Syntastic et bien plus.
    * [vim-racer](https://github.com/racer-rust/vim-racer) - Permet à Vim d'utiliser [Racer](https://github.com/racer-rust/racer) pour la complétion et la navigation du code Rust.
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Une extension Visual Studio pour Rust [![État de compilation](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - Une extension LLDB
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - Gérez facilement vos dépendances
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - Prise en charge de TOML dans vscode
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - Formateur de code Rust à parti pris corrigeant automatiquement la mauvaise syntaxe (plugin communautaire [Prettier](https://prettier.io/))
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - Un serveur de langage Rust alternatif au RLS

### Profilage

* [Bencher](https://github.com/bencherdev/bencher) - Une suite d'outils de benchmarking continu conçue pour détecter les régressions de performance en CI
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - Bibliothèque de benchmarking pilotée par les statistiques
* [Bytehound](https://github.com/koute/bytehound) - Un profileur mémoire pour Linux
* [cong-or/hud](https://github.com/cong-or/hud) - Identifie ce qui bloque votre environnement Tokio. Profileur eBPF sans instrumentation.
* [Divan](https://github.com/nvzqz/divan) - Bibliothèque de benchmarking simple mais puissante avec profilage des allocations
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - Une bibliothèque de chronomètre
* Graphes de flammes
  * [llogiq/flame](https://github.com/llogiq/flame) - Un outil intrusif de profilage par graphe de flammes pour Rust
* [g3bench](https://github.com/bytedance/g3) - Un outil de benchmark prenant en charge HTTP 1.x, HTTP 2, HTTP 3, négociation TLS, DNS et Cloudflare Keyless
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - Un profileur simple montrant exactement où votre code passe du temps et effectue des allocations [![Actions GH](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - Un outil de benchmarking en ligne de commande

### Services

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - Transformez votre base de code en documentation d'architecture professionnelle. [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - Détecte les dépendances obsolètes ou non sécurisées
* [docs.rs](https://docs.rs) - Génération automatique de documentation des crates

### Analyse statique

[[assertions](https://crates.io/keywords/assert), [statique](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - Un outil d'analyse du couplage Rust utilisant le framework « Balancing Coupling in Software Design » de Vlad Khononov
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - Un vérificateur déductif pour Rust prouvant l'absence de paniques, débordements et échecs d'assertions en traduisant le code vers la plateforme de vérification Why3
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - Détecteur de code dupliqué produisant des empreintes des corps de fonctions (winnowing), afin de reconnaître les copies malgré les renommages. Score de duplication du dépôt, graphique d'historique et contrôle CI pointant vers la fonction originale à réutiliser. Prend en charge Rust et 11 autres langages. [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - Détecteur de copier-coller de code source trouvant les blocs dupliqués dans plus de 220 formats de fichiers [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - Un interpréteur abstrait opérant sur la représentation intermédiaire de niveau moyen (MIR) de Rust [![Intégration continue](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - Une plateforme aidant les programmeurs Rust à développer et utiliser des outils avancés d'analyse statique au-delà de ceux fournis par le compilateur rustc.
* [static_assertions](https://crates.io/crates/static_assertions) - Assertions à la compilation pour garantir les invariants
* [verus-lang/verus](https://github.com/verus-lang/verus) - Rust vérifié pour le code système de bas niveau
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - Outil d'analyse statique pour GitHub Actions détectant les problèmes de sécurité, dont injection de modèles, fuites d'identifiants, permissions excessives et commits imposteurs. [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### Tests

[[test](https://crates.io/keywords/test), [tests](https://crates.io/keywords/testing)]
* Assertions et outils de correspondance
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![Dernière version](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - Une collection d'outils de correspondance JSON pour googletest-rust, prenant en charge chemins, tableaux et objets. [![État de compilation](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* Couverture de code
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - Trouve les fonctions complexes non testées en combinant complexité cyclomatique et couverture LCOV (métrique CRAP), et conditionne la CI au score
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - Qualité du code et couverture des tests pour agents de programmation : Jev note chaque fichier source pour indiquer à l'agent quoi corriger en premier [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - Un outil de couverture de code
* Intégration continue
  * [trust](https://github.com/japaric/trust) - Un modèle Travis CI et AppVeyor pour tester votre crate Rust sur 5 architectures et publier ses versions binaires pour Linux, macOS et Windows
* Frameworks et exécuteurs
  * [AlKass/polish](https://github.com/AlKass/polish) - Mini framework de tests/développement piloté par les tests [![État du paquet de crates](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - Transforme vos tests Rust en documentation [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - Une extension cargo simplifiant l'exécution des tests et benchmarks de bibliothèques sur smartphones et autres appareils à petits processeurs.
  * [cucumber](https://crates.io/crates/cucumber) [![Dernière version](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - Une implémentation du framework de tests Cucumber pour Rust. Entièrement native, sans exécuteur de tests externe ni dépendance. [![État de compilation](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - Une alternative à l'attribut `#[test]` initialisant l'infrastructure de journalisation et/ou de traçage avant l'exécution des tests. [![État du flux de travail GitHub](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - Framework de tests déclaratif
  * [GoogleTest Rust](https://crates.io/crates/googletest) - Puissant framework d'assertions de tests basé sur la bibliothèque C++ GoogleTest [![État de compilation](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - Une bibliothèque d'assertions pour Rust, basée sur GoogleTest Rust et provenant de son auteur original. [![État de compilation](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Une bibliothèque de tests par instantanés pour Rust. [![État de compilation](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - Exécuteur de tests Rust de nouvelle génération avec exécution parallèle, tests plus rapides, filtrage avancé et sortie enrichie. [![cargo-nextest sur crates.io](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Liaisons Rust pour Microsoft Playwright : tests de bout en bout multinavigateurs (Chromium, Firefox, WebKit), avec localisateurs à attente automatique et capture de traces. [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - Exécute les tests en série, globalement ou par groupes nommés [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - Un framework universel de test de charge avec prise en charge d'une interface textuelle en temps réel.
  * [rstest](https://crates.io/crates/rstest) - Framework de tests basé sur des jeux de données [![État de compilation](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - Un framework de tests minimal inspiré de RSpec
* Simulations et données de test
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - Une puissante bibliothèque d'objets simulés. [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - Une macro procédurale générant des tests à partir de jeux de données avec motifs glob
  * [fake-rs](https://github.com/cksac/fake-rs) - Une bibliothèque de génération de fausses données
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - Une bibliothèque fournissant une API simple de tests sur fichiers de référence.
  * [httpmock](https://github.com/httpmock/httpmock) - Simulation HTTP [![Compilation](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - Une bibliothèque de simulation stricte mais conviviale pour Rust 2018 instable
  * [mockito](https://crates.io/crates/mockito) - Simulation HTTP
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Simulation de serveurs HTTP et gRPC pour Rust ![Compilation](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![Dernière version](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - Une bibliothèque pour créer des objets simulés à partir de structures. ![Compilation](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - Génère des données de base de données de façon déclarative. [![Compilation](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* Tests par mutation
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - Trouve le code insuffisamment testé en injectant des mutations, sans modifier les sources. [![Badge de compilation](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - Un framework de tests par mutation au niveau source (nightly uniquement)
* Tests par propriétés et fuzzing
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - Framework de fuzzing pour contrats intelligents Solana avec tests guidés manuellement, séquences basées sur des flux et validation par propriétés
  * [proptest](https://crates.io/crates/proptest) - Framework de tests par propriétés inspiré du framework [Hypothesis](https://hypothesis.works/) pour Python
  * [quickcheck](https://crates.io/crates/quickcheck) - Une implémentation Rust de [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1)
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - Un fuzzer Rust utilisant [AFL](https://lcamtuf.coredump.cx/afl/)

### Transpilation

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - Outil de traduction de code source par IA utilisant l'API locale Ollama.
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - Un outil en ligne de commande transpilant des modèles classiques d'apprentissage automatique entraînés en code Rust natif sans dépendance.
* [immunant/c2rust](https://github.com/immunant/c2rust) - Traducteur C vers Rust et vérificateur croisé construit sur Clang/LLVM.
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - Un traducteur C vers Rust écrit en Haskell.

### Tunnel

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - Un tunnel TCP simple pour exposer les ports locaux à un serveur distant en contournant les pare-feu NAT [![État de compilation](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - Serveur de tunnel sécurisé auto-hébergé. Expose les services locaux HTTP/HTTPS/TCP/UDP via WebSocket chiffré TLS avec multiplexage yamux ; multirégion, métriques Prometheus, serveur MCP pour agents IA.
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - ngrok est un outil de développement exposant de façon sécurisée votre application locale à Internet.
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - Un mandataire inverse sécurisé et haute performance pour traverser le NAT, avec chiffrement Noise Protocol/TLS et rechargement de configuration à chaud ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## Bibliothèques

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - Une boîte à outils conçue comme fondation permettant aux applications de surveiller leurs performances. [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### Intelligence artificielle

#### Algorithmes génétiques

* [innoave/genevo](https://github.com/innoave/genevo) - Exécutez des simulations d'algorithmes génétiques (GA) de façon personnalisable et extensible.
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - Bibliothèque d'algorithmes génétiques. En mode maintenance.
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - Bibliothèque d'algorithmes génétiques rapide, parallèle, extensible et adaptable. Un exemple résout le problème des N reines pour N = 255 en quelques secondes avec moins de 1 Mo de RAM.
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - Un moteur parallèle de programmation génétique personnalisable, capable de faire évoluer des solutions aux problèmes d'apprentissage supervisé, non supervisé et par renforcement. Fournit des implémentations complètes et personnalisables de NEAT et Evtree.![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - Algorithmes évolutionnaires

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - Bibliothèque d'utilisation de l'API Google Gemini. Gestion automatique du contexte, génération de schémas, appels de fonctions et bien plus.

#### Apprentissage automatique

Voir [[apprentissage automatique](https://crates.io/keywords/machine-learning)]

Voir aussi [À propos de la communauté d'apprentissage automatique Rust](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f) et [Apprenons-nous déjà ?](https://www.arewelearningyet.com).

* [autumnai/leaf](https://github.com/autumnai/leaf) - Framework ouvert d'intelligence machine.. Projet abandonné. Le fork le plus à jour est [juice](https://github.com/fff-rs/juice).
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - Une bibliothèque permettant de convertir les jetons en plongements vectoriels et d'encoder leurs positions.
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ Un framework open source d'apprentissage automatique en Rust. ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![Compilation](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - Un gestionnaire de paquets pour les jeux de données et modèles d'apprentissage automatique. ![Compilation](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - Un framework d'apprentissage profond flexible et complet.
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - Framework d'apprentissage automatique accéléré par CUDA exploitant de nombreuses fonctionnalités uniques de Rust. ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - Moteur d'inférence LLM rapide et flexible prenant en charge modèles multimodaux, quantification (GGUF/GPTQ/ISQ) et API compatible OpenAI
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - Pipelines de traitement du langage naturel et modèles de langage prêts à l'emploi
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - Un framework d'apprentissage automatique minimaliste axé sur la simplicité et les performances (dont prise en charge GPU)
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Tokeniseurs Hugging Face pour pipelines modernes de traitement du langage naturel (implémentation originale), avec liaisons Python. [![État de compilation](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - Le serveur mandataire et plan de données natifs IA pour applications agentiques.
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - Liaisons pour PyTorch.
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - Compilateur d'inférence généraliste haute performance avec architecture de type RISC, optimisation par recherche et backends natifs CUDA/Metal. Prend en charge transformers, réseaux convolutifs et différentiation automatique. [![État CI](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - Bibliothèque d'apprentissage automatique. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - Moteur d'inférence WebGPU entièrement en Rust avec API compatible OpenAI et prise en charge native de GGUF.
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - Tokeniseur entièrement en Rust pour modèles GGUF, compatible avec la tokenisation llama.cpp.
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - Liaisons pour LightGBM [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![Compilation](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - Moteur d'inférence LLM sur appareil s'intégrant directement aux jeux et applications sans serveur ni clé API. Prend en charge génération en flux, plongements vectoriels, sortie structurée contrainte par grammaire GBNF et transcription Whisper, avec liaisons Godot, Flutter, React Native et Swift.
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - Moteur d'inférence LLM en Rust pur + CUDA sans PyTorch ni environnement Python — API compatible OpenAI, cache KV paginé, CUDA Graph, servant des modèles de Qwen3 à Kimi-K2 à mille milliards de paramètres.
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - Une machine de gradient boosting autogénéralisante ne nécessitant pas d'optimisation des hyperparamètres.
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - Une bibliothèque haute performance de calcul tensoriel axée sur l'apprentissage, construite de zéro en Rust avec différentiation automatique et backends CPU/CUDA.
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - Un framework Graph-RAG haute performance transformant les documents en graphes de connaissances intelligents.
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - Framework d'apprentissage automatique.
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - Modèles de régression statistique (OLS, Elastic Net, GLM, quantile et isotonique), avec inférence de type R (valeurs p, intervalles de confiance et de prédiction) et prise en charge de Wasm.
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - Bibliothèque d'apprentissage automatique [![État de compilation](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - Un modèle de langage transformer de type GPT-2 implémenté de zéro en Rust à des fins pédagogiques.
* [tensorflow/rust](https://github.com/tensorflow/rust) - Liaisons pour TensorFlow.

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - Bibliothèque pour créer des agents et applications modulaires et évolutives propulsées par les LLM
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - Liaisons Rust ergonomiques pour l'API OpenAI basées sur la spécification OpenAPI.
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Environnement d'exécution d'agents IA pour Rust — état à typage sûr, services multiprotocoles, extensibilité par plugins.
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - Infrastructure et environnement d'exécution d'agents IA privilégiant le stockage local — mémoire persistante, outils intégrés, compétences, MCP, sous-agents, flux de travail et planifications derrière une unique API HTTP + WebSocket. Intégrable comme crate ou exécutable comme serveur.
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - Framework multi-agent pour créer des agents IA avec prise en charge native de la périphérie.
* [openai/codex](https://github.com/openai/codex) - Codex CLI est un agent de programmation d'OpenAI fonctionnant localement.
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - Moteur de rendu du format de réponse harmony à utiliser avec gpt-oss.
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - Client API LLM universel pour plus de 142 fournisseurs avec interface unifiée, diffusion en flux et liaisons natives pour 11 langages.
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - Bibliothèque de tokenisation de texte avec les modèles OpenAI utilisant tiktoken. [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### Outillage

* [BAML](https://github.com/BoundaryML/baml) - Un langage simple de prompts pour créer des flux de travail et agents IA fiables. Le compilateur BAML est écrit en Rust !
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - Une solution complète de mémoire pour agents, de l'extraction et la recherche vectorielle à l'optimisation automatisée, avec tableau de bord d'analyse prêt à l'emploi.
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - Moteur d'ingénierie contextuelle fondé sur la théorie de l'information utilisant l'apprentissage par renforcement pour élaguer intelligemment et sélectionner les fragments RAG optimaux.
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - Une couche mémoire portable en un seul fichier pour agents IA, avec recherche vectorielle, recherche plein texte et rappel à long terme dans un fichier `.mv2`
* [pydantic/monty](https://github.com/pydantic/monty) - Un interpréteur Python minimal et sécurisé pour exécuter du code généré par LLM dans les agents IA, avec démarrage en microsecondes, isolation stricte et prise en charge des instantanés [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - Stockage et recherche sans perte pour sessions d'agents IA de douze clients de programmation, construit sur Lance sur un répertoire local ou un bucket S3, avec BM25 et recherche vectorielle facultative exposés en ligne de commande, HTTP, MCP et SQL en lecture seule [![Badge de compilation](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### Astronomie

[[astronomie](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - Application web de visualisation de relevés d'images spatiales et planétaires dans différentes projections
* [fitsio](https://crates.io/crates/fitsio) - Bibliothèque d'interface fits enveloppant cfitsio
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - Un portage Rust de la bibliothèque JS suncalc
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - Astronomie

### Asynchronisme

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Version asynchrone de la bibliothèque standard Rust [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - Un framework haute performance de programmation de tâches asynchrones suivant le concept de programmation par flux.
* [dpc/mioco](https://github.com/dpc/mioco) - Bibliothèque évolutive de gestion d'E/S asynchrones basée sur des coroutines
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2 : une bibliothèque à modèle d'acteurs basée sur Tokio
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - Environnement d'exécution distribué pour composer des services via les primitives Worker-Function-Trigger. Catalogue en temps réel, appels de fonctions traçables et SDK multilangages (Rust, Node.js, Python). Moteur écrit en Rust (ELv2), SDK sous Apache 2.0.
* [mio](https://github.com/tokio-rs/mio) - MIO est une bibliothèque d'E/S légère visant à ajouter le moins de surcoût possible aux abstractions du système d'exploitation
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - Adaptateurs de flux exécutant des futures simultanément avec limites de concurrence pondérées et limites par groupe facultatives.
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - Futures sans surcoût
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - Implémentation d'`AsyncDrop`
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - Monad/MonadIO, Handler, Coroutine/doNotation et fonctionnalités de programmation fonctionnelle pour Rust
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - Un environnement d'exécution pour écrire des applications fiables, asynchrones et légères avec Rust.
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - Acteurs asynchrones tolérants aux pannes construits sur Tokio
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - Bibliothèque de coroutines avec pile
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - Une bibliothèque d'E/S à coroutines avec ordonnanceur par vol de travail

### Audio et musique

[[audio](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - Une bibliothèque pour diffuser audio, vidéo et autres contenus multimédias [![Badge de compilation](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - Une bibliothèque d'encodage et de décodage WAV
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - Une bibliothèque de lecture et d'abstraction de fichiers MIDI. [![Badge de compilation](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - Une bibliothèque simple de lecture de sons et de musique, sur OpenAL et libsndfile
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - Liaisons [PortMidi](https://portmedia.sourceforge.net/portmidi/)
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - Bibliothèque de théorie musicale
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - Bibliothèque de décodage audio et démultiplexage multimédia prenant en charge AAC, FLAC, MP3, MP4, OGG, Vorbis et WAV.
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - Bibliothèque d'E/S audio multiplateforme de bas niveau. [![État des actions](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - Bibliothèque de lecture audio
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - Liaisons PortAudio
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - Une bibliothèque de lecture et d'édition des métadonnées de différents formats audio [![Badge de compilation](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### Authentification

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - Bibliothèque d'authentification à deux facteurs pour générer et vérifier les jetons TOTP ![État de compilation](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - Authentification faciale pour Linux avec reconnaissance sur appareil, intégration PAM et outils pour connexion, écran de verrouillage, sudo et gestion du bureau. [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - Bibliothèque [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - Bibliothèque cliente OAuth2 extensible et fortement typée
* [oxide-auth](https://github.com/197g/oxide-auth) - Une bibliothèque de serveur OAuth2 à combiner avec actix ou d'autres interfaces, proposant des backends configurables et interchangeables [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - Bibliothèque asynchrone pour gérer et orchestrer les flux JWT
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - Autorisation basée sur les capacités pour agents IA. Les mandats signés limitent les appels d'outils et arguments, et ne peuvent que se restreindre lors d'une délégation [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - Une implémentation cliente oauth2 offrant les flux appareil, application installée et compte de service

### Automobile

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - Prise en charge de Linux SocketCAN pour tokio basée sur la crate socketcan
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - Prise en charge de Linux SocketCAN BCM pour tokio
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Bibliothèque Linux SocketCAN
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - Un analyseur du format DBC
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - Traits de pilotes et implémentation du protocole de bus LIN [![Badge de compilation](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### Bioinformatique

* [polars-bio](https://github.com/biodatageeks/polars-bio) - Opérations bioinformatiques extrêmement rapides sur les DataFrames Python ![PyPI - Version](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - Bibliothèques de bioinformatique.

### Mise en cache

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - Un middleware de cache suivant les règles de cache HTTP [![Badge de compilation](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Bibliothèque cliente Memcached
* [al8n/stretto](https://github.com/al8n/stretto) - Un cache haute performance sûr pour les threads et limité en mémoire [![Badge de compilation](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - Un framework déclaratif d'orchestration de cache avec middleware HTTP et backends multiniveaux [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - Mise en cache/mémoïsation simple de fonctions
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - Cache de compilation adressé par contenu pour Rust et C/C++ ([site web](https://ninja.kunobi.com/kache)) [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - Une bibliothèque haute performance de cache concurrent inspirée de Caffeine pour Java [![Badge de compilation](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - Cache de compilation partagé, excellente compilation
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - Un framework générique de calcul incrémentalisé à la demande avec requêtes mémoïsées, inspiré du système de requêtes de rustc. [![Test](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - Un cache disque concurrent haute performance adressé par contenu, optimisé pour les API asynchrones [![Badge de compilation](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### Cloud

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - Environnement d'exécution pour AWS Lambda [![Badge de compilation](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - Le nouveau SDK AWS
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - Émulateur local du cloud AWS pour le développement et les tests. [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - Un SDK AWS pour Rust
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - SDK Azure officiel pour Rust
* Équilibreur de charge
  * [Convey](https://github.com/bparli/convey) - Équilibreur de charge de couche 4 avec chargement dynamique de configuration.
* Multicloud
  * [Qovery/engine](https://github.com/Qovery/engine) - Bibliothèque de couche d'abstraction facilitant le déploiement d'applications chez les fournisseurs cloud en quelques minutes

### Ligne de commande

* Analyse d'arguments
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - Transformez vos fonctions en application en ligne de commande avec une ligne de code [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - Un analyseur d'arguments en ligne de commande complet et facile à utiliser
  * [cliparser](https://crates.io/crates/cliparser) - Analyseur simple de ligne de commande. [![Badge de compilation](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - Implémentation de DocOpt
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - Un analyseur d'arguments à parti pris basé sur Derive, optimisé pour la taille du code [![Badge de compilation](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - Créez rapidement de superbes applications en ligne de commande
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - Un framework minimal en ligne de commande [![État de compilation](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - Analyse les arguments en définissant une structure
* Visualisation de données
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - De beaux tableaux dynamiques pour vos outils en ligne de commande. [![État de compilation](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - Une bibliothèque facile à utiliser pour afficher joliment des tableaux de structures et d'énumérations. [![État de compilation](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* Conception centrée sur l'humain
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - Messages de panique pour les humains
* Éditeur de lignes
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - Implémentation de readline
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - Une bibliothèque offrant des fonctions de type readline
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - Lecteur de lignes interactif, configurable et extensible
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - Un éditeur de lignes complet propulsant Nushell. Prend en charge coloration syntaxique, complétion par tabulation, multiligne, historique, raccourcis vi/emacs et Unicode. [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - Bibliothèque d'édition de ligne de commande
* Autres
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - Notification de mises à jour pour applications en ligne de commande. Vérifie les nouvelles versions sur Crates.io et GitHub [![Badge de compilation](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* Pipeline
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - Fonctions d'interaction avec des pipelines externes
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - Fait passer votre sortie dans un paginateur externe
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - Un constructeur de pipelines de sous-processus et de redirections d'E/S
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - Automatise les applications interactives telles que ssh, ftp, passwd, etc. [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - Une bibliothèque pour contrôler des programmes interactifs dans un pseudoterminal [![Badge de compilation](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* Progression
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - Barre de progression de console
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - Une bibliothèque de barres de progression en console inspirée de tqdm et rich.progress [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - Indique la progression aux utilisateurs
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - Indicateur animé pratique. [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - Plus de 60 élégants indicateurs animés de terminal
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - Une bibliothèque minimale d'indicateurs animés de terminal sans dépendance.
* Invite
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - Crée une invite de commande interactive
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - Une bibliothèque pour construire des invites interactives dans les terminaux. [![État de compilation](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - Une invite minimale, extrêmement rapide et personnalisable pour tout shell [![État de compilation](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - Une boîte à outils pour construire des outils interactifs en ligne de commande [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* Style
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - Colorer le terminal est si simple que vous savez déjà comment faire !
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - Bibliothèque pour invites de commande et éléments similaires.
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - Couleurs et styles de terminal multiplateformes avec macros [![État de compilation](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - Sortie de terminal stylisée multiplateforme
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - Contrôle les couleurs et le formatage sur les terminaux ANSI
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - Une bibliothèque de coloration de terminal ANSI simplissime
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - Un framework TUI/CUI Rust multiplateforme complet, avec widgets intégrés, contrôle de disposition, animations, Unicode et thèmes.
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - Liaisons [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal)
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - Une crate pour de belles interfaces en ligne de commande, interfaces textuelles et E/S textuelles confectionnées avec soin. [![État de compilation](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - Crée des applications textuelles riches
  * [ivanceras/titik](https://github.com/ivanceras/titik) - Une bibliothèque multiplateforme de widgets textuels visant à fournir des widgets interactifs
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - Bibliothèque curses, compatible Linux et Windows
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - Liaisons [ncurses](https://invisible-island.net/ncurses/ncurses.html)
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - Bibliothèque pour placer des éléments dans une grille
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - Bibliothèque entièrement dédiée à concocter des interfaces textuelles (TUI)
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - Bibliothèque sans liaisons pour contrôler les terminaux/TTY
  * [ruterm](https://crates.io/crates/ruterm) - Bibliothèque petite et simple pour travailler avec les TTY
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - Bibliothèque textuelle en mode immédiat avec plus de 50 widgets, disposition flexbox et système d'animation [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - Liaisons [Termbox](https://github.com/nsf/termbox)
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - Bibliothèque de terminal multiplateforme

### Compression

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - Un décompresseur/compresseur 7z écrit en Rust pur [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - Décompresseur Brotli pouvant éviter la bibliothèque standard
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Implémentation de la compression Brotli
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - Liaisons [libbz2](https://www.sourceware.org/bzip2/)
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - Implémentation de l'algorithme de compression Zopfli pour une compression deflate ou zlib de meilleure qualité
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - Encodage et décodage multithread des formats deflate et snappy
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - Compression LZMA / LZMA2 / LZIP / XZ portée depuis [tukaani xz for java](https://tukaani.org/xz/java.html) [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - Liaisons [miniz](https://code.google.com/archive/p/miniz) [![Badge de compilation](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - Bibliothèque flexible pour compresser et décompresser des fichiers avec divers algorithmes (zip, tar, gzip, xz, zst, etc.), au design modulaire facilement extensible
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - Lecture/écriture d'archives tar
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - Lit et écrit les archives ZIP
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - Liaisons Rust pour la bibliothèque de compression zstd

### Calcul

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - Optimization Engine (OpEn) est un solveur de problèmes d'optimisation non convexe sous contraintes [![Intégration continue](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - Bibliothèque d'optimisation
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - Liaisons BLAS
* [calebwin/emu](https://github.com/calebwin/emu) - Un langage de calcul numérique GPGPU
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - Bibliothèque d'algèbre linéaire à faible dimension
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Fondation d'algèbre linéaire pour Rust
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - Nombres décimaux rapides à précision exacte implémentés en Rust pur. Adaptés aux calculs financiers, cryptographiques et à tous les calculs à précision fixe.
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - Liaisons GSL
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - Bibliothèque d'optimisation numérique avec solveurs de premier ordre, sans dérivées, de moindres carrés non linéaires, évolutionnaires et sous contraintes, générique sur les backends d'algèbre linéaire [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - Liaisons LAPACK
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - Bibliothèque de calcul numérique Rust inspirée de NumPy, avec tenseurs, algèbre linéaire, FFT, statistiques, différentiation automatique et accélération GPU. [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* Parallélisme
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - Liaisons [Arrayfire](https://github.com/arrayfire)
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - Un framework extensible, à plugins et indépendant du backend pour les calculs parallèles haute performance sur CUDA, OpenCL et processeurs hôtes courants.
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - Liaisons [OpenCL](https://www.khronos.org/opencl/)
* Science
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - Bibliothèque numérique Rust comprenant algèbre linéaire, analyse numérique, statistiques et outils d'apprentissage automatique en Rust pur
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - Calcul scientifique en Rust pur prêt pour la production, comprenant algèbre linéaire, optimisation, statistiques, réseaux neuronaux et bien plus. API inspirée de SciPy en Python.
  * [cpmech/russell](https://github.com/cpmech/russell) - Bibliothèque scientifique Rust pour mathématiques numériques, équations différentielles ordinaires, fonctions mathématiques spéciales et algèbre linéaire haute performance (creuse)
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - Bibliothèque de mathématiques symboliques avec capacités de calcul formel. Prend en charge dérivation, intégration, résolution d'équations et arithmétique à précision arbitraire [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - Une bibliothèque haute performance pour la résolution numérique d'équations différentielles
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - Bibliothèque robuste de calcul statistique

### Concurrence

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - Prise en charge du parallélisme et de la concurrence de bas niveau
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - Bibliothèque Rust de limitation de débit (seau percé, seau à jetons, fenêtre fixe/glissante)
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - Bibliothèque d'abstraction des types de pointeurs `Rc`/`Arc`. [![Badge de compilation](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - Bibliothèque de calcul parallèle haute performance, configurable et expressive.
* [Rayon](https://github.com/rayon-rs/rayon) - Une bibliothèque de parallélisme de données
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - Bibliothèque de coroutines
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - E/S à coroutines

### Configuration

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - Bibliothèque de configuration complète basée sur [libUCL](https://github.com/vstakhov/libucl). [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - Bibliothèque pour traiter facilement la configuration d'applications
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Une bibliothèque de configuration pour applications Rust.
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - Système de configuration en couches (avec forte prise en charge des applications à 12 facteurs).
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - Une bibliothèque de configuration tellement sans contraintes que c'en est irréel.
* [softprops/envy](https://github.com/softprops/envy) - Désérialise les variables d'environnement en structures à typage sûr [![Principal](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### Cryptographie

[[crypto](https://crates.io/keywords/crypto), [cryptographie](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - Liaisons Arkworks vers le R1CS de Circom pour la génération de preuves et de témoins Groth16.
* [briansmith/ring](https://github.com/briansmith/ring) - Cryptographie sûre, rapide et compacte utilisant Rust et les primitives cryptographiques de BoringSSL.
* [briansmith/webpki](https://github.com/briansmith/webpki) - Validation de certificats X.509 TLS Web PKI.
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - Gestionnaire de mots de passe simple pour votre terminal
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - Une bibliothèque cryptographique de haut niveau pour résoudre les tâches courantes de sécurité des données, particulièrement adaptée aux applications multiplateformes. [![Badge de compilation](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - Algorithmes cryptographiques
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Opérations Curve25519
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Famille Keccak (SHA3)
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - Une implémentation BLS12-381 native Rust avec améliorations de performances zk : multiplication multiscalaire optimisée, hachage personnalisé et prise en charge serde — idéale pour les protocoles respectueux de la confidentialité et les applications à divulgation nulle de connaissance. ![État de compilation](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - Une implémentation native Rust haute performance de PLONK zk-SNARK sur BLS12-381, optimisée avec portes personnalisées et engagement polynomial KZG10 pour des preuves efficaces à divulgation nulle de connaissance. ![État de compilation](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - Un hachage Poseidon natif Rust sur BLS12-381 ; Poseidon252 vise l'efficacité zk-SNARK, idéal pour les protocoles respectueux de la confidentialité et les applications à divulgation nulle de connaissance. ![État de compilation](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - Framework extensible pour projets blockchain
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - Implémentation du récent échange de clés authentifié par mot de passe [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/). [![Badge de compilation](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - Une bibliothèque cliente random.org. [![Badge de crates](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - Implémentation de [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246)
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - Bibliothèque intuitive pour tutoriels de cryptographie sur courbes elliptiques [![Version Crates.io](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Liaisons pour Security Framework (natif OSX)
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - Bibliothèque modulaire de hachage et de cryptographie
* [orion-rs/orion](https://github.com/orion-rs/orion) - Cette bibliothèque vise une cryptographie simple et utilisable. « Utilisable » signifie exposer des API de haut niveau faciles à utiliser et difficiles à mal utiliser. [![Tests](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - Portage des primitives de mots de passe du projet Django. Ne nécessite pas Django ; hache et valide seulement les mots de passe selon son style.
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - Liaisons pour les bibliothèques TLS natives
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - Liaisons [OpenSSL](https://www.openssl.org/)
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - Bibliothèque complète de génération de nombres aléatoires avec générateurs pseudo-aléatoires puissants et légers, échantillonnage de valeurs, distributions et processus aléatoires. [![État des tests](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - Collection de fonctions de hachage cryptographique
* [rustls/rustls](https://github.com/rustls/rustls) - Implémentation de TLS
* [schnorrkel](https://github.com/paritytech/schnorrkel) - Fonctions aléatoires vérifiables et signatures Schnorr sur le groupe Ristretto
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - Une bibliothèque de chiffrement de fichiers simple, moderne et sécurisée. [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - Une implémentation du format de données chiffrées scrypt. [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - Chiffrement AES-256-GCM des paramètres d'applications avec dérivation de clés HKDF [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - Vérification en flux de l'intégrité des fichiers via hachage SHA-256 Rust/WASM à mémoire constante. Téléchargements reprenables de gros fichiers dans le navigateur.

### Traitement de données

* [amv-dev/yata](https://github.com/amv-dev/yata) - Bibliothèque haute performance d'analyse technique [![État de compilation](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - Profilage des données et contrôles qualité pour CSV, JSON, Parquet et Arrow, avec liaisons Python [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - Tableau à N dimensions avec vues, découpage multidimensionnel et opérations efficaces
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - Une bibliothèque DataFrame d'ingénierie de données de bout en bout construite sur DataFusion, avec connecteurs Microsoft Fabric, Azure, SharePoint, FTP, Postgres, MySQL et API REST
* [datafusion](https://github.com/apache/datafusion) - DataFusion est un moteur de requêtes très rapide et extensible pour construire des systèmes de qualité centrés sur les données en Rust, utilisant le format en mémoire Apache Arrow.
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - Moteur d'évaluation JSONLogic haute performance à typage sûr pour règles métier et filtrage dynamique, avec liaisons officielles Node, WASM, Python, Go, Java, .NET et PHP [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - Un nouveau moteur de tableur moderne en cours de développement.
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - Structure DataFrame et opérations
* [lakehq/sail](https://github.com/lakehq/sail) - Sail est une alternative directement compatible à Apache Spark écrite en Rust, unifiant traitement par lots, traitement en flux et charges IA intensives en calcul.
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - Un nouveau moteur de tableur moderne propulsant de vrais produits.
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - Moteurs OOXML natifs pour DOCX, XLSX et PPTX : édition, mise en page, rendu, collaboration CRDT et édition par agents, compilés en WebAssembly.
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - Framework ETL Python open source performant avec environnement d'exécution Rust, prenant en charge plus de 300 sources de données.
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - Extension PostgreSQL accélérant le traitement des requêtes analytiques dans Postgres jusqu'à des performances comparables aux bases OLAP dédiées.
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - Extension PostgreSQL transformant Postgres en moteur de requêtes analytiques sur stockages objet comme AWS S3/GCS et formats de tables comme Delta Lake/Iceberg.
* [pola-rs/polars](https://github.com/pola-rs/polars) - Bibliothèque DataFrame rapide et complète [![Analyse Rust](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - Moteur de tableur intégrable analysant, évaluant et modifiant les classeurs Excel : plus de 400 fonctions, stockage basé sur Arrow, recalcul incrémental, liaisons Python et WASM [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - Environnement d'exécution haute performance pour applications d'analyse de données

### Diffusion de données

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - Moteur de traitement de flux Rust haute performance [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - Analyse en temps réel haute performance en Rust et SQL [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - Serveur de caractéristiques en un seul binaire. Envoyez des événements via HTTP ou TCP, interrogez directement les compteurs et agrégats à jour par entité, sans courtier intermédiaire. Pour fraude, recommandations, garde-fous LLM et analyses intégrées aux produits [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - Plateforme programmable de diffusion de données [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - Plateforme de diffusion de messages persistants, prenant en charge les protocoles de transport QUIC, TCP et HTTP [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - Framework de traitement de flux basé sur des graphes [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### Structures de données

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - Implémentation d'arbre de Merkle en Rust avec backends de stockage et fonctions de hachage configurables. Profondeur fixe et uniquement incrémental. Optimisée pour la génération rapide de preuves.
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - Distances vectorielles et fonctions de similarité accélérées par SIMD pour x86 AVX2 et AVX-512, et Arm NEON [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - Fournit une structure de données bidimensionnelle rapide et facile à utiliser. [![État de compilation](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - Collection d'arbres de recherche ternaires
* [contain-rs](https://github.com/contain-rs) - Extension de std::collections de Rust
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - Utilitaires pour tableaux. Certaines méthodes courantes des tableaux sont rendues disponibles sur les vecteurs. Implémentations polymorphes couvrant la plupart des cas d'utilisation.
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - Une implémentation optimisée de dictionnaire pour énumérations utilisant un tableau pour stocker les valeurs.
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - Une astuce pour permettre des tableaux dimensionnés par typenums
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - Une file de priorité permettant les changements de priorité.
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - Définit des structures newtype avec contraintes de validation. [![État de compilation](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - Une implémentation de cache LRU avec opérations `put`, `get`, `get_mut` et `pop` en O(1). [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - Implémentation du patron annuler/rétablir pour structures de données arbitraires. Prend en charge les approches par deltas (différences creuses), instantanés et commandes, avec macros derive pour types personnalisés. Compatible no_std et serde. [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - Arbre à K dimensions pour indexation géospatiale rapide et recherche de voisins les plus proches
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - Structures de données persistantes. [![Badge de compilation](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Bitmaps Roaring
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - Adaptateurs d'itérateurs, fonctions et macros supplémentaires
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - Une bibliothèque d'entiers à largeur binaire fixe arbitraire [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - Alternative à `BTreeSet` et `BTreeMap` sûre, faillible et utilisant uniquement la pile. [![Actions GitHub](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - Hypergraph est une bibliothèque de structures de données pour générer des hypergraphes orientés. [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### Visualisation de données

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - Widget interactif de visualisation de graphes propulsé par egui et petgraph. [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - Bibliothèque de génération de figures de qualité publiable. [![Compilation](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - Bibliothèque d'échelles de couleurs pour visualisation de données, graphiques, jeux, cartes, art génératif et autres.
* [milliams/plotlib](https://github.com/milliams/plotlib) - Bibliothèque de tracé de données pour Rust
* [plotly](https://github.com/plotly/plotly.rs) - Plotly pour Rust
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - Bibliothèque de tracé Rust utilisant Python (Matplotlib)
* [plotters](https://github.com/plotters-rs/plotters) - [![Badge de compilation](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun)] - Un SDK de journalisation des données de vision par ordinateur et de robotique (tenseurs, nuages de points, etc.), accompagné d'un visualiseur pour explorer ces données dans le temps.
* [saresend/gust](https://github.com/saresend/Gust) - Un petit outil de graphiques/visualisation et une implémentation partielle de vega
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - Tracés en terminal : lignes, nuages de points, barres, histogrammes, cartes thermiques, boîtes à moustaches, violons et bien plus, avec axes automatiques
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Une bibliothèque de grammaire graphique en couches en Rust. [![Documentation](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![État de compilation](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### Bases de données

[[bases de données](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - Un mappeur léger de documents objets, relations et graphes ArangoDB [![État du pipeline](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - Un pilote ArangoDB
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - Client natif
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - Liaisons vers DataStax C/C++
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - Client Cassandra asynchrone de haut niveau écrit à 100 % en Rust. [![Badge de compilation](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Implémentation du protocole Cassandra.
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - Pilote client Apache Cassandra asynchrone prêt pour la production
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - Client de l'API REST CouchDB
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - Une bibliothèque pour interagir de façon fortement typée et pratique avec `rusoto_dynamodb` [![Badge de compilation](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - Client de l'API REST [Elastic](https://www.elastic.co/)
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - elastic est un client API efficace et modulaire pour Elasticsearch écrit en Rust [![Badge de compilation](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - Une bibliothèque cliente pour etcd de CoreOS.
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - Interface de synchronisation
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - Liaisons [LevelDB](https://github.com/google/leveldb)
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - Enveloppes LMDB entièrement typées avec surcoût minimal
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - Liaisons Rust pour LMDB
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - Liaisons [MongoDB](https://www.mongodb.com/)
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - Un moteur de base de données intégré en colonnes avec SQL, recherche vectorielle, recherche plein texte et récupération native IA [![Badge de compilation](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - Un stockage clé-valeur léger et simple, fortement inspiré de PickleDB en Python.
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - Une base de données intégrée basée sur JSON, avec API similaire à MongoDB. ![État du flux de travail GitHub](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - Une base de données clé-valeur intégrée. Offre une interface similaire à d'autres stockages intégrés tels que rocksdb et lmdb. ![État du flux de travail GitHub](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - Un client [Redis](https://redis.io/) asynchrone de haut niveau pour Rust avec Tokio. [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - Bibliothèque [Redis](https://redis.io/) [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - Liaisons RocksDB [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - Base de données document-graphe intégrée SurrealDB
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - Liaisons UnQLite
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Une bibliothèque cliente pour Apache ZooKeeper.
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - Client Zookeeper asynchrone basé sur tokio.  ![État de compilation](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - Un mappeur léger de documents objets, relations et graphes ArangoDB [![État du pipeline](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - Un linter pour Diesel et SQLx détectant les migrations PostgreSQL dangereuses (verrouillage de tables, réécritures, opérations bloquantes) et proposant des alternatives sûres [![crate](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - Un ORM et constructeur de requêtes
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - Un ORM
  * [njord](https://github.com/njord-rs/njord) - ⛵ Un ORM Rust polyvalent et complet [![État de compilation](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - Framework ORM haute performance (basé sur JSON)
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚 Un ORM asynchrone et dynamique  [![crate](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![Documentation](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![État de compilation](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - 🧭 Framework GraphQL pour SeaORM [![crate](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![Documentation](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![État de compilation](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - L'ORM de pointe pour Rust, asynchrone et à génération lors de la compilation.
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - Pool de connexions générique
* SQL [[sql](https://crates.io/keywords/sql)]
  * Générique
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - Pool de connexions PostgreSQL/MySQL/SQLite asynchrone avec prise en charge du typage fort [![Badge de compilation](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱 Un constructeur dynamique de requêtes SQL pour MySQL, Postgres et SQLite [![crate](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![Documentation](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![État de compilation](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿 Définition et découverte de schémas SQL [![crate](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![Documentation](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![État de compilation](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - [![Tests Cargo](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - Un mandataire MySQL [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - Pilote MySQL asynchrone basé sur Tokio. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - Un client MySQL natif
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Pilote Oracle [![Badge de compilation](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Implémentation rapide avec peu de dépendances externes.
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - Bibliothèque asynchrone haute performance de capture de changements (CDC) pour les flux de réplication logique et physique PostgreSQL. [![Version Crates.io](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - Un client natif [PostgreSQL](https://www.postgresql.org/)
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - Liaisons [Sqlite3](https://sqlite.org/index.html)
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - Une base de données en mémoire à ajout uniquement en Rust pour lignes interrogées par colonnes de bits (indicateurs).

### Date et heure

[[date](https://crates.io/keywords/date), [heure](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - Un clone de cal(1) extrêmement rapide ~ plus de 9999 ans ~ Écrit en Rust.
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - Une bibliothèque de dates et heures pour Rust vous encourageant à tomber dans le succès. [![État de compilation](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - Bibliothèque de dates et heures
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - Une bibliothèque convertissant les durées en langage humain en millisecondes [![Badge de compilation](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - Une bibliothèque de dates et heures MS-DOS [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Une bibliothèque de temps de fichiers Windows. [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - [![Badge de compilation](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### Systèmes distribués

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - Plateforme de traitement de flux / calcul distribué
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - Liaisons [librdkafka](https://github.com/confluentinc/librdkafka)
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - Pour s'intégrer au [registre de schémas confluent](https://www.confluent.io/product/confluent-platform/data-compatibility/)
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Client Rust pour Apache Kafka
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - Liaisons libhdfs
* Autres
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - Chiffrement de bout en bout, authentification mutuelle et contrôle d'accès par attributs pour applications distribuées [![Badge de compilation](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - Publication/abonnement asynchrone à typage sûr avec une API cohérente sur RabbitMQ, Kafka, NATS JetStream, AWS SNS/SQS et Redis Streams, avec réessais, routage des files de lettres mortes et groupes de consommateurs à mise à l'échelle automatique [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### Conception pilotée par le domaine

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - Un framework CQRS et de mémorisation d'événements avec [guide utilisateur](https://doc.rust-cqrs.org/)

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - Construit en privilégiant l'expérience développeur et l'exploitabilité.
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - Un outillage eBPF minimal à parti pris.

### Courriel

[[courriel](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - Codec IMAP complet et extrêmement fiable [![Compilation et tests](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - Bibliothèque pour l'API SendGrid
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - Un microservice d'envoi de courriels utilisant des modèles [MRML](https://github.com/jdrouet/mrml).
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - Une application web pour construire des modèles [MRML](https://github.com/jdrouet/mrml).
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - Une bibliothèque générant de beaux modèles de courriels fonctionnant dans tous les clients de messagerie.
* [lettre/lettre](https://github.com/lettre/lettre) - Une bibliothèque SMTP [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - Un serveur SMTP pour environnements de test et de développement.
* [meli/meli](https://github.com/meli/meli) - 🐝 Client de messagerie en terminal
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - Vérifie l'existence d'une adresse courriel sans envoyer de message, avec validation SMTP, détection d'adresses jetables et vérification des adresses attrape-tout [![État des actions](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - Un archiveur de courriels léger et haute performance avec recherche plein texte et interface web.
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - Une bibliothèque pour analyser les fichiers de courriel du monde réel
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - Bibliothèque d'authentification des messages DKIM, ARC, SPF et DMARC [![Badge de compilation](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - Une bibliothèque d'analyse de courriels rapide et robuste avec prise en charge complète de MIME [![Badge de compilation](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - Bibliothèque de construction de courriels et client SMTP avec prise en charge de DKIM [![Badge de compilation](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - Serveur de test de courriels pour le développement.

### Encodage

[[encodage](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - Sérialiseur ASN.1 (DER)
* Code-barres
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - Un portage Rust de la bibliothèque de codes-barres zxing. [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* Binaire
  * [bincode](https://crates.io/crates/bincode) - Un encodeur/décodeur binaire
  * [bincode-next](https://crates.io/crates/bincode-next) - Un encodeur/décodeur binaire, successeur de bincode désormais non maintenu
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Postcard est un sérialiseur et désérialiseur pour Serde axé sur #![no_std].
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - Analyse binaire multiplateforme, sans copie et tenant compte de l'ordre des octets
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - Prise en charge de l'encodage et du décodage BSON
* Inversion d'octets
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - Prend en charge les ordres d'octets gros-boutiste, petit-boutiste et natif
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap'n Proto est un système de types pour les systèmes distribués
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - Prise en charge de CBOR pour serde
* Encodage de caractères
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - Une implémentation de la norme Encoding orientée Gecko
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Prise en charge des encodages de caractères pour Rust. (Aussi appelée rust-encoding.) Basée sur la norme WHATWG Encoding, elle fournit aussi une interface avancée de détection et récupération d'erreurs.
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - Implémentation Rust de CRC(16, 32, 64) prenant en charge différentes normes
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - Un lecteur et rédacteur CSV rapide et flexible, avec prise en charge de Serde
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - Décodage et encodage Data Matrix (ECC 200) avec encodeur optimisant [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - Crate pour analyser et produire le format EDN dans des types Rust.
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Intégration du compilateur FlatBuffers (flatc) dans les scripts de compilation Cargo
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - Une bibliothèque de sérialisation et désérialisation du format d'archive HTTP (HAR)
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - Analyseur HTML5 haute performance de niveau navigateur
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - Une bibliothèque JSON Rust rapide basée sur SIMD.
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - Obtient rapidement les valeurs JSON
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - Implémentation de JSON
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - Prise en charge de JSON pour le framework [Serde](https://github.com/serde-rs/serde)
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - Analyseur JSON haute performance basé sur un portage de simdjson
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - Analyseur et lexeur JSON en flux, sans copie ni allocation, évaluateur JSON Pointer en flux facultatif
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - Implémentation MessagePack de bas/haut niveau
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - Liaisons netCDF de niveau intermédiaire, permettant de lire et écrire facilement des structures de type tableau dans un fichier.
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - Analyse et encode des données encodées en PEM
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Implémentation Rust des Protocol Buffers de Google
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - [![Intégration continue](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* Code QR
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - Génère des symboles QR Code et Micro QR Code ISO/IEC 18004 et rMQR ISO/IEC 23941 en Rust pur, puis les rend en images en niveaux de gris, PNG et SVG. [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - Une bibliothèque d'encodage de codes QR [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - Détecte et lit les codes QR depuis toute source d'image [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv (archive) est un framework de désérialisation sans copie
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Rusty Object Notation
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - Outils supplémentaires pour la bibliothèque serde. [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![Badge de crates](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - Une boîte à outils TOML [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - [![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - Format de texte approximatif en UTF-8
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - Un analyseur XML
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - Une bibliothèque XML en flux
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - Une bibliothèque XML
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - Une bibliothèque XPath
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - Lecteur/rédacteur XML haute performance à lecture tirée
  * [yaserde](https://github.com/luminvent/yaserde) - Encore un sérialiseur/désérialiseur spécialisé en XML
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - L'implémentation YAML 1.2 manquante.
  * [saphyr](https://github.com/saphyr-rs/saphyr) - Un ensemble de crates consacrées à l'analyse YAML.
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - Sérialiseur/désérialiseur YAML pour Serde, privilégiant l'analyse sans panique et de bons rapports d'erreurs [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### Système de fichiers

[[système de fichiers](https://crates.io/keywords/filesystem)]
* Opérations
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - Comme std::path::Path de Rust, mais en UTF-8.
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - Bibliothèque de recherche de fichiers et de contenu tolérant les fautes, avec classement fréquence/récence, annotations tenant compte de Git, surveillance en arrière-plan et index léger du contenu en mémoire. Fournit serveur MCP, SDK Node/Bun, bibliothèque C et plugin Neovim.
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - Modélise les arborescences de fichiers avec de simples structures Rust. [![Tests](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - Une couche unifiée d'accès aux données permettant de récupérer facilement et efficacement des données depuis divers services de stockage. [![Compilation](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - Bibliothèque de recherche de fichiers extrêmement rapide.
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - API DBus UDisks2
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - Abstraction de haut niveau des appels système `mount` / `umount2`.
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - Types de chemins absolus sérialisables et méthodes associées.
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - Étend les possibilités des bibliothèques standard std::fs et std::io
* Fichiers temporaires
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - Bibliothèque de fichiers temporaires
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - Liste et manipule les attributs étendus des fichiers Unix
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - Système de fichiers intégrable sans détails, axé sur la confidentialité.

### Finance

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - Une bibliothèque de finance quantitative. ![État du flux de travail GitHub (avec événement)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - Liaisons complètes à parti pris vers l'[API Alpaca](https://alpaca.markets/) pour le trading d'actions et bien plus. ![État du flux de travail GitHub](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - Une bibliothèque moderne haute performance d'analyse technique en Rust, Python et JS/TS(WASM). [![image](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - Finance quantitative : plus de 130 processus stochastiques, tarification et calibration d'options, surfaces de volatilité et copules, accélération SIMD/GPU avec liaisons Python. ![État du flux de travail GitHub](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - Analyse technique privilégiant les flux : 514 indicateurs avec mises à jour en O(1) par tick, depuis un noyau Rust avec liaisons natives Python, Node.js et WASM, plus un hub ABI C pour C, C++, C#, Go, Java et R. [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### Programmation fonctionnelle

[[programmation fonctionnelle](https://crates.io/keywords/fp)]
* Prélude
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - Une bibliothèque de programmation fonctionnelle
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - Comportement de pipeline en position suffixe

### Développement de jeux

Voir aussi [Sommes-nous prêts pour les jeux ?](https://arewegameyet.rs)
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - Liaisons [Allegro 5](https://liballeg.org/)
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - Une sélection de liens vers du code et des ressources liés à miniquad/macroquad
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - Une sélection de code et de ressources wgpu
* bracket-lib (anciennement RLTK)
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - La boîte à outils roguelike (RLTK). [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Bibliothèque cliente de l'API REST Challonge. Aide à organiser des tournois. [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* Systèmes entité-composant (ECS)
  * [amethyst/specs](https://github.com/amethyst/specs) - ECS parallèle Specs
  * [legion](https://github.com/amethyst/legion) - Une bibliothèque ECS complète haute performance avec un minimum de code répétitif [![Badge de compilation](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* Moteurs de jeu
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - Un framework de rendu 2D utilisant WGPU et Winit. - [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![Licence](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - Un moteur de jeu déterministe 2D et 3D avec scripts Rune, physique Rapier et éditeur intégré [![Test](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - Est un moteur de jeu piloté par les données d'une simplicité rafraîchissante. - [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - Moteur de jeu 3D [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![Licence](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - Un framework de jeu léger pour créer des jeux 2D avec un minimum de friction - [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - Un moteur graphique 3D privilégiant la simplicité [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - Un jeu/moteur de stratégie en temps réel prenant en charge WebGPU
  * [Piston](https://www.piston.rs/) - [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - Moteur de jeu Webgl 2.0 / natif
* Serveurs de jeu
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - Interroge les serveurs de jeu pour des informations comme nom, joueurs en ligne, nombre maximal de joueurs, etc. [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - Gestionnaire de versions Godot en ligne de commande [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Liaisons vers le moteur de jeu Godot 4+ [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Liaisons vers le moteur de jeu Godot 3+ [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - Boîte à outils universelle pour le développement Minecraft Bedrock Edition en Rust. [![Étoiles GitHub](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - Une amélioration du serveur Minecraft original en Rust [![Badge de compilation](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - Un logiciel serveur Minecraft haute performance entièrement écrit en Rust
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - Un serveur Minecraft Rust conçu pour les performances et la parité
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - Liaisons pour raylib
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - Liaisons SDL1
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - Liaisons SDL2
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - Liaisons [SFML](https://www.sfml-dev.org/)
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - Collection d'algorithmes de classement de compétences pour jeux multijoueurs, comme Elo, Glicko-2, TrueSkill, etc. [![Badge crates.io](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - Un algorithme de génération de donjons roguelike.
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Liaisons vers l'API Toornament.com. [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![Badge de crates](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - Framework simple de serveur et client UDP de jeu pour créer des prototypes de jeux en ligne 2D et 3D

### Géospatial

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - SedonaDB est une bibliothèque DataFrame géospatiale écrite en Rust.
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - Transformations de coordonnées (2D, 3D et géospatiales)
* [Georust](https://github.com/georust) - Outils et bibliothèques géospatiales écrits
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - Bibliothèque de sérialisation et désérialisation du format de fichier SIG vectoriel GeoJSON.
* [MapLibre/Martin](https://github.com/maplibre/martin) - Serveur de tuiles cartographiques avec prise en charge de PostGIS, MBTiles, PMTiles et sprites. [![Compilation CI](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![Version crates.io](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![Livre](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - Un géocodeur inverse rapide et hors ligne, inspiré de [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder)
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - Conversion entre coordonnées UTM, LatLon et MGRS

### Algorithmes de graphes

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - Une bibliothèque d'algorithmes de graphes performants [![État CI de graph](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - Bibliothèque de structures de données de graphes. [![État CI de graph](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### Graphisme

[[graphisme](https://crates.io/keywords/graphics)]

* Polices
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - Alternative aux bibliothèques comme FreeType
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - Un portage incrémental de harfbuzz
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - Une API graphique haute performance sans liaisons.
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - Implémentation native de WebGPU basée sur gfx-hal. [![Badge de compilation](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - Un chargeur de pointeurs de fonctions OpenGL
  * [glium/glium](https://github.com/glium/glium) - Enveloppe OpenGL sûre.
  * [glutin](https://crates.io/crates/glutin) - Alternative à [GLFW](https://www.glfw.org/)
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - Liaisons GLFW3 et enveloppe idiomatique
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - Générez facilement des PDF depuis votre application Rust.
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - Bibliothèque d'écriture PDF
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - Moteur HTML/CSS vers PDF axé sur l'impression, avec modèles réutilisables, génération de données variables et liaisons Python. [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - Convertisseur HTML/CSS/Markdown vers PDF en Rust pur avec moteur de mise en page intégré, sans navigateur ni dépendances système. [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - Un interpréteur et moteur de rendu PDF en Rust pur
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - Manipulation de documents PDF
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - Génération de fichiers PDF en Rust pur
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - Extraction de texte, création et édition rapides de PDF avec liaisons Python
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - [![Badge de compilation](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - Enveloppe Rust sûre et complète de l'API Vulkan

### Interface graphique

[[interface graphique](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - Une bibliothèque simple et multiplateforme d'automatisation d'interfaces graphiques.
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Liaisons Rust vers Core Foundation et d'autres bibliothèques de bas niveau sur Mac OS X et iOS
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - Un framework portable, performant et ergonomique pour créer des interfaces utilisateur multiplateformes en Rust. ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - Bibliothèque graphique en mode immédiat simple, rapide et très portable. egui fonctionne sur le web, nativement et dans votre moteur de jeu préféré. [![État de compilation](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifb est un système de fenêtres multiplateforme avec rendu bitmap facultatif. Propose aussi des entrées souris et clavier simples. Principalement conçu pour le prototypage
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - Un framework d'interface utilisateur déclaratif multiplateforme pour Rust avec DOM virtuel, signaux réactifs et macros HTML pour WebAssembly. [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - Ensemble de composants iced et egui à l'esthétique shadcn/ui ; comprend [egui-shadcn](https://crates.io/crates/egui-shadcn).
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - Liaisons FLTK [![Compilation](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - Rust comme backend Flutter, Flutter comme interface Rust [![Compilation et tests](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - Crée des applications de bureau Flutter en Dart et Rust.
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Générateur de liaisons de haut niveau à sûreté mémoire pour Flutter/Dart <-> Rust
* [fschutt/azul](https://github.com/fschutt/azul) - Un framework graphique libre, fonctionnel et orienté IMGUI pour le développement rapide d'applications de bureau en Rust, propulsé par le moteur de rendu Mozilla WebRender.
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - Liaisons GTK4 ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - Bibliothèque graphique asynchrone basée sur GTK+, inspirée d'Elm
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - Une bibliothèque graphique multiplateforme axée sur la simplicité et la sûreté des types. Inspirée d'Elm.
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - Liaisons pour ImGui [![État de compilation](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - Un framework d'interface simple construit sur IUP
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - Une bibliothèque graphique véritablement native et multiplateforme. Un même code unifié peut fonctionner en interface graphique native, web HTML et textuelle.
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - Liaisons libui.
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - Framework expérimental d'interface réactive pour Rust inspiré de React, SwiftUI et Elm. Construit sur Masonry, Vello/wgpu, Parley et AccessKit avec backends web et natifs. [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - Composants d'interface pour créer de fantastiques applications de bureau avec GPUI.
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - Makepad est une plateforme de développement de logiciels créatifs compilant vers wasm/webGL, osx/metal, windows/dx11 et linux/opengl.
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Liaisons pour Nuklear
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget Toolkit est une boîte à outils d'interface (graphique) multiplateforme utilisant SDL2 [![Compilation et tests](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - Une bibliothèque graphique 2D en mode immédiat facile à utiliser
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - Un framework d'interface multiplateforme accéléré par GPU, avec API de construction inspirée de GPUI, effets de verre, animations physiques à ressort et rendu natif sur bureau, Android et iOS.
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - Liaisons QtQuick
  * [rust-qt](https://github.com/rust-qt) - Liaisons Qt pour Rust
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - Intègre Qml et Rust en construisant le QMetaObject à la compilation.
* [Ribir](https://github.com/RibirX/Ribir) - Ribir est un framework graphique Rust aidant à créer de belles applications natives multiplateformes depuis une seule base de code.
* [rise-ui](https://github.com/rise-ui/rise) - Boîte à outils graphique multiplateforme simple à composants pour développer de belles interfaces conviviales.
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - Liaisons [nativefiledialog](https://github.com/mlabbe/nativefiledialog)
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Liaisons Sciter [![Badge de compilation](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/) est une boîte à outils pour développer efficacement des interfaces graphiques fluides pour appareils embarqués et applications de bureau. [![État de compilation](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [[smithay](https://crates.io/crates/smithay)] est une bibliothèque sûre et bien documentée fournissant des briques pour créer des compositeurs Wayland
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - Créez des applications de bureau plus petites, rapides et sécurisées avec une interface web, propulsées par [WRY](https://github.com/tauri-apps/wry). [![Bibliothèque de tests](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - Bibliothèque de rendu Webview.
* [xilem](https://github.com/linebender/xilem) - Successeur de la boîte à outils de conception d'interface privilégiant les données [druid](https://github.com/linebender/druid).

### Traitement d'images

* [abonander/img_hash](https://github.com/abonander/img_hash) - Hachage perceptuel d'images et comparaison d'égalité et de similarité.
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - Une implémentation en Rust pur de la norme DICOM, permettant de travailler avec des objets DICOM et d'interagir avec des applications DICOM, tout en visant rapidité, sûreté et utilisation intuitive.
* [image-rs/image](https://github.com/image-rs/image) - Fonctions de base de traitement d'images et méthodes de conversion vers et depuis les formats d'image
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - Une bibliothèque de traitement d'images basée sur la bibliothèque `image`.
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - Extracteur de couleur dominante ![Badge de compilation](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - Implémente des algorithmes, abstractions et systèmes de vision par ordinateur. `#[no_std]` est pris en charge lorsque possible. ![Badge de compilation](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - Une bibliothèque simple de stéganographie
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - Liaisons pour OpenCV

### Spécification du langage

* [shnewto/bnf](https://github.com/shnewto/bnf) - Une bibliothèque d'analyse de grammaires hors contexte en forme de Backus–Naur.

### Licences

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - Récupère les licences des dépendances à la compilation et les intègre à votre programme.

### Journalisation

[[journalisation](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - Bibliothèque Rust de journalisation structurée légère et efficace, avec niveaux de journalisation, segmentation de fichiers et archivage compressé.
* [estk/log4rs](https://github.com/estk/log4rs) - Framework de journalisation hautement configurable inspiré des bibliothèques Java Logback et log4j [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - Un framework de journalisation polyvalent, extensible et facile à utiliser pour applications Rust. Permet de configurer plusieurs répartiteurs, filtres et destinations pour adapter votre journalisation à vos besoins.
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - Journalisation asynchrone haute performance
* [rust-lang/log](https://github.com/rust-lang/log) - Implémentation de journalisation
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - Un joli outil de journalisation facile à utiliser.
* [slog-rs/slog](https://github.com/slog-rs/slog) - Journalisation structurée et composable
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - Un framework de traçage au niveau applicatif pour journalisation structurée adaptée à l'asynchronisme, gestion des erreurs, métriques et bien plus [![État de compilation](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### Macros

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Macro pour compréhensions de listes à la manière de Python.
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - Génère des constructeurs de structures et fonctions vérifiés à la compilation, fournit application partielle et paramètres facultatifs et nommés pour fonctions et méthodes. [![État de compilation](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - Macro et méthodes pour expressions de type LINQ en C#. [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### Langage de balisage

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - Traitement haute performance de Markdown et MDX. Analyse et compile en Rust, exécute des plugins en JavaScript. Comprend analyseur CommonMark avec extensions MDX, opérations sur arbres MDAST/HAST et liaisons NAPI pour l'interopérabilité JavaScript.
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - Analyseur [CommonMark](https://commonmark.org/)
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - Une bibliothèque de formatage de documents HTML, XHTML et XML. [![Badge de compilation](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### Mobile

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - Un exemple d'utilisation d'une bibliothèque partagée pour Android et iOS, avec respectivement rust-swig et cbindgen.
* Générique
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - iOS CocoaPods / Android JNI
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - Développement d'applications multiplateformes. Crux aide à partager la logique métier et le comportement de votre application entre mobile (iOS/Android) et web - comme un unique noyau réutilisable. [![État de compilation](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - Une sous-commande cargo lipo créant automatiquement une bibliothèque universelle pour votre application iOS.

### Programmation réseau

* Bluetooth
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - Liaisons officielles BlueZ. [![Badge de compilation](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - Une bibliothèque [Constrained Application Protocol(CoAP)](https://datatracker.ietf.org/doc/html/rfc7252).
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Implémentation Rust du protocole BIND9 RNDC [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - API du démon Docker
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - Un client [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - Une implémentation native de client et serveur gRPC avec prise en charge d'async/await [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - La bibliothèque gRPC construite sur la bibliothèque C Core et les futures
* HTTP
  * [deboa](https://crates.io/crates/deboa) - Un client HTTP convivial sur hyper avec plusieurs extensions, formats de sérialisation et macros. [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - Exécute et teste des requêtes HTTP avec du texte brut et libcurl [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - Une bibliothèque pour travailler avec les réseaux IP
  * [candrew/netsim](https://github.com/canndrew/netsim) - Une bibliothèque de simulation et de test réseau
* Bas niveau
  * [actix/actix](https://github.com/actix/actix) - Bibliothèque d'acteurs
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - Définitions de protocoles TCP/UDP personnalisés
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - Réseau multiplateforme de bas niveau
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - Une pile TCP/IP autonome et événementielle conçue pour les systèmes temps réel sans système d'exploitation
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - Bibliothèque de messages événementielle pour créer facilement et rapidement des applications réseau. Prend en charge TCP, UDP et WebSockets. [![Badge de compilation](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - Une bibliothèque permettant de créer des applications communiquant avec le [protocole MQTT](https://mqtt.org) sur TCP et WebSockets, avec ou sans TLS. [![Compilation et tests](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - Serveur MQTT/courtier MQTT - Courtier de messages MQTT distribué et évolutif pour l'IoT à l'ère de la 5G
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - Liaisons [nanomsg](https://nanomsg.org/)
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - Client pour NATS, le système de messagerie cloud natif. [![État de compilation](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - Liaisons [Nng (nanomsg v2)](https://nng.nanomsg.org/index.html) [![Badge de compilation](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - Un client [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol)
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - Implémentation de la pile réseau libp2p. [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - Crate pour construire sur des connexions directes entre appareils [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - Un client [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol)
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - Une implémentation du protocole IETF QUIC ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - Implémentation cloudflare du protocole de transport QUIC et de HTTP/3 ![Compilation](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - Une implémentation de QUIC
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - Implémentation QUIC basée sur les futures [![Badge de compilation](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - Une bibliothèque QUIC haute performance, légère et multiplateforme [![État de compilation](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - Implémentation du protocole RakNet [![État de compilation](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - Remoc fournit des canaux (broadcast, mpsc, oneshot, watch) similaires à ceux de Tokio et des appels de traits sur tout transport distant. [![Badge de compilation](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - Une bibliothèque RPC pour développer des microservices facilement et simplement.
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - Une pile SIP conforme à la RFC 3261
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - Une implémentation en Rust d'un client [socket.io](https://socket.io).
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - Liaisons [libssh2](https://libssh2.org/)
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - Une bibliothèque SSH reposant sur [libsodium](https://doc.libsodium.org/)
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - Une implémentation cliente [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html)
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - Une bibliothèque multiplateforme fournissant une API unifiée de haut niveau pour gérer les interfaces WireGuard à l'aide des implémentations du protocole WireGuard du noyau et de l'espace utilisateur natifs du système
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - Un framework déclaratif pour les calculs allant du *Cloud* à l'*Objet*
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - Protocole réseau sans surcoût
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - Liaisons [ZeroMQ](https://zeromq.org/)

### Analyse syntaxique

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - Une bibliothèque Rust no-std multiplateforme pour vérifier et extraire les informations de signature des fichiers PE. [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![Compilation](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Un analyseur du format Wavefront OBJ. [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![Badge de compilation](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - Découpe une chaîne en mots shell, comme shlex en Python. [![Badge de compilation](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - Un framework pour nouveaux langages de programmation et serveurs LSP.
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - Bibliothèque Rust rapide de classification de PDF et d'extraction de texte.
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Portage de la bibliothèque C++ Google d'analyse et de correspondance robots.txt
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - Moteur [JsonPath](https://goessner.net/articles/JsonPath/). Prend aussi en charge WebAssembly et JavaScript
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - Un analyseur de fichiers STL (stéréolithographie)
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Bibliothèque Shiva : implémentation en Rust d'un analyseur et générateur de documents de tous types (texte brut, Markdown, HTML, PDF, etc.)
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - Générateur d'analyseurs de grammaires d'expressions d'analyse (PEG)
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - Générateur d'analyseurs LR(1)
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - Un combinateur d'analyseurs rapide de style monadique
  * [Marwes/combine](https://github.com/Marwes/combine) - Bibliothèque de combinateurs d'analyseurs
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - Bibliothèque d'analyse de couleurs CSS [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - Une bibliothèque Rust sans dépendance pour analyser, valider, formater et normaliser les numéros de téléphone internationaux.
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - Analyse de données binaires sans allocation
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - Environnement d'exécution ANTLR v4 avec générateur d'analyseurs en Rust pur : génère directement les analyseurs depuis les grammaires `.g4` (sans Java), validé par la suite officielle de conformité ANTLR. [![Badge de compilation](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - Analyseur, transformateur, minificateur et résolveur JavaScript/TypeScript haute performance écrit en Rust. Propulse Rolldown, Nuxt, Nova et bien d'autres. [![État de compilation](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - L'analyseur élégant
  * [ptal/oak](https://github.com/ptal/oak) - Un générateur d'analyseurs PEG typé (plugin de compilateur)
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - Bibliothèque rapide et légère d'analyse PDF avec extraction spatiale de texte, boîtes englobantes, OCR flexible (Tesseract/serveurs HTTP) et liaisons multilangages (Rust, Node.js, Python, WASM). Construite sur PDFium avec outil en ligne de commande `lit`. [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - Bibliothèque de combinateurs d'analyseurs
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - Une bibliothèque d'analyse de chaînes de requête inspirée de [gs](https://github.com/ljharb/qs#readme)
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Bibliothèque d'analyse de Dockerfile et outil en ligne de commande
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - Un analyseur LR avec meilleure correction des erreurs
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - Un outil de génération d'analyseurs et une bibliothèque d'analyse incrémentale destinés aux outils de programmation
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - Une bibliothèque de combinateurs d'analyseurs orientée octets, sans copie. [![État de compilation](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - Grammaires tree-sitter préconstruites pour plus de 300 langages, avec API d'analyse unifiée et liaisons pour 14 langages.

### Périphériques

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - Fork de la crate hidpp intégré par OpenLogi pour la prise en charge du protocole Logitech HID++.
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - Couche d'abstraction matérielle `no_std` sans système d'exploitation pour appareils Espressif ESP32 (ESP32, ESP32-C2/C3/C5/C6/C61, ESP32-H2, ESP32-P4, ESP32-S2/S3). Fournit des API Rust sûres pour GPIO, I2C, SPI, UART, minuteurs, DMA et bien plus. [![État du flux de travail GitHub Actions](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* Lecteur d'empreintes digitales
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Libfprint-rs fournit une enveloppe de la bibliothèque Linux libfprint.
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - Plugin Tauri fournissant l'accès aux caméras de bureau avec validation automatique de qualité et contrôles matériels.
* Port série
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - Une bibliothèque multiplateforme donnant accès à un port série

### Spécifique aux plateformes

* Multiplateforme
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - Gestion simple et multiplateforme des priorités de threads. [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![Badge de crates](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - Informations multiplateformes sur les batteries d'ordinateurs portables
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - Bibliothèque de jails FreeBSD
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - Liaisons [inotify](https://en.wikipedia.org/wiki/Inotify) [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Installateur de distributions Linux
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - Liaisons [iptables](https://www.netfilter.org/projects/iptables/index.html)
* De type Unix
  * [nix-rust/nix](https://github.com/nix-rust/nix) - Liaisons d'API de type Unix [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - Liaisons sûres vers les appels système POSIX/Unix/Linux/Winsock2 [![État des actions](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - Liaisons [FUSE](https://github.com/libfuse/libfuse)
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Rust pour Windows [![État des actions](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Liaisons de l'API Windows [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### Rétro-ingénierie

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - Framework d'analyse binaire et de rétro-ingénierie avec empreintes de fonctions et comparaison de similarité.
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - Liaisons Rust pour le SDK IDA, permettant de développer des outils d'analyse autonomes avec idalib d'IDA v9.0
* [objdiff](https://github.com/encounter/objdiff) - Un outil local de comparaison pour projets de décompilation
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - Décompilateur JavaScript : décompose les bundles webpack/esbuild/Metro/Browserify en modules et inverse les sorties de minificateurs et Babel/TypeScript pour obtenir du code lisible [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### Scripts

[[scripts](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - Le langage Three Body
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - Un lexeur, analyseur et interpréteur JavaScript expérimental écrit en Rust.
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - Analyseur et interpréteur du langage d'expressions commun
* [duckscript](https://crates.io/crates/duckscript) - [Langage de script simple, extensible et intégrable.](https://github.com/sagiegurari/duckscript) [![Badge de compilation](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - Un petit langage déterministe sûr pour les threads à syntaxe Python
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - Un langage de script de type Lisp pour le développement de jeux
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - Un langage de programmation fonctionnelle pour l'art procédural. [![Badge de compilation](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - Un petit langage de programmation fonctionnelle à typage statique
* [kcl](https://github.com/kcl-lang/kcl) - Un langage fonctionnel et d'enregistrements basé sur des contraintes, principalement utilisé pour les configurations et politiques.
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - Machine virtuelle Lua expérimentale sans pile implémentée en Rust pur, avec ramasse-miettes incrémental détectant les cycles, isolation et liaisons sûres Rust <-> Lua. [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - Environnement d'exécution polyglotte multiplateforme prenant en charge NodeJS, JavaScript, TypeScript, Python, Ruby, C#, Wasm, Java, Cobol et bien d'autres. [![Badge de compilation](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - Un langage de script compilé à typage statique avec prise en charge native du rechargement à chaud
* [murarth/ketos](https://github.com/murarth/ketos) - Un langage de programmation fonctionnelle, dialecte de Lisp, servant de langage de script et d'extension pour Rust
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - Un langage de script à typage dynamique à la sauce Rust
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - Un petit langage de script intégré rapide, ressemblant à une combinaison de JavaScript et Rust [![Badge de compilation](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - Un langage de programmation dynamique intégrable
* [trynova/nova](https://github.com/trynova/nova) - Moteur JavaScript entièrement écrit en Rust

### Simulation

[[simulation](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - Bibliothèque d'outils d'astrodynamique haute fidélité, rapide, fiable et validée, utilisée pour la conception de missions spatiales et la détermination d'orbites [![État de compilation](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - Implémentations Rust d'algorithmes robotiques inspirées de PythonRobotics, couvrant planification de trajectoires, localisation, SLAM et contrôle, avec prise en charge de no_std et exemples ROS 2 [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### Réseaux sociaux

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Enveloppe Rust multiplateforme de Telegram Database Library (TDLib) [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### Système

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - Crate pour obtenir l'utilisateur et l'environnement actuels. [![Badge de compilation](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - Bibliothèque multiplateforme pour récupérer les informations système [![Badge de compilation](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - Une bibliothèque récupérant les métriques système, noyau et processus depuis les pseudo-systèmes de fichiers /proc et /sys.
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - Une crate bibliothèque pour collecter des informations système comme processeur, distribution, environnement, noyau, etc.
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - Les codes de sortie système définis par [`<sysexits.h>`](https://man.openbsd.org/sysexits). [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### Planification de tâches

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - Gestionnaire temporel de tâches différées. Comme crontab, mais les tâches asynchrones sont possibles. [![Compilation](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - Un système haute performance de planification de tâches construit avec Tokio, offrant persistance des tâches, tâches répétables et planification Cron pour des opérations temporelles fiables.

### Moteur de modèles

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - Moteur de modèles Handlebars avec héritage et prise en charge d'assistants personnalisés.
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarte signifie **Y**et **A**nother **R**ust **T**emplate **E**ngine (encore un moteur de modèles Rust), et c'est le moteur de modèles le plus rapide.
* HTML
  * [askama](https://github.com/askama-rs/askama) - Moteur de rendu de modèles basé sur Jinja
  * [kaj/ructe](https://github.com/kaj/ructe) - Système de modèles HTML
  * [Keats/tera](https://github.com/Keats/tera) - Moteur de modèles basé sur Jinja2 et le langage de modèles Django. [![État des actions](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - Modèles HTML à la compilation
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - Moteur de modèles à dépendances minimales basé sur Jinja2. [![Tests](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml : moteur de modèles léger à typage sûr à la compilation, intégrant Rust dans HTML et HTML dans Rust.
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - Modèles HTML à la compilation
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Une implémentation Rust de la spécification Mustache

### Traitement de texte

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - Correspondance simple de chaînes avec opérateurs jokers point d'interrogation et étoile [![État des actions](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - Construction de tableaux de suffixes en temps linéaire (avec prise en charge d'Unicode)
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - Tabulations élastiques (c'est-à-dire alignement des colonnes de texte)
* [cpc](https://github.com/probablykasper/cpc) - Analyse et calcule des expressions mathématiques avec prise en charge des unités et conversions, de `1+2` à `1% of round(1 lightyear / 14!s to km/h)`.
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - Fonctions de distance d'édition Rust accélérées par SIMD ; prend en charge les calculs rapides de distances Hamming, Levenshtein, Damerau-Levenshtein restreinte, etc., et la recherche de chaînes [![Badge de compilation](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - Implémentation d'expressions régulières conçue pour offrir un ensemble relativement riche de fonctionnalités comme assertions avant/arrière et retour arrière. [![crates](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![Badge de compilation](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - Bibliothèque de détection de langue naturelle basée sur les trigrammes
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - Jointure générique de chaînes et d'itérables
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - Retour à la ligne du texte (avec prise en charge de la césure)
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - Un petit paquet supprimant des chaînes les caractères Unicode courants prêtant à confusion/homoglyphes. [![crates](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![Badge de compilation](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - Un lecteur permettant une navigation avant, arrière et aléatoire dans les lignes de fichiers immenses sans consommer les itérateurs
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - Construit des [n-grammes](https://en.wikipedia.org/wiki/N-gram) depuis des itérateurs arbitraires
* [rust-lang/regex](https://github.com/rust-lang/regex) - Expressions régulières (style RE2)
* [strsim-rs](https://crates.io/crates/strsim) - Métriques de similarité de chaînes
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - Convertisseur HTML vers Markdown rapide et conforme à CommonMark, avec noyau Rust et liaisons pour 12 langages.
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - Bibliothèque d'intelligence documentaire extrayant texte, tableaux et métadonnées de plus de 97 formats (PDF, Office, images avec OCR, HTML, courriels, archives), avec liaisons pour 11 langages.
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Implémentation multilingue de l'algorithme RAKE pour Rust

### Recherche textuelle

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - Un moteur de recherche approximative simple et léger fonctionnant en mémoire, recherchant des chaînes similaires
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - Une implémentation rapide d'ensembles et de dictionnaires ordonnés utilisant des automates finis
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - Une bibliothèque de recherche d'information paresseuse, sans allocation et indépendante des données
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - API de recherche plein texte ultra pertinente, instantanée et tolérante aux fautes. [![État de compilation](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - Extension PostgreSQL permettant la recherche plein texte sur tables SQL avec l'algorithme BM25, fonction de classement de pointe pour la recherche plein texte.
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - Bibliothèque de recherche plein texte en moins d'une milliseconde et serveur multitenant en Rust
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - Une bibliothèque de moteur de recherche plein texte rapide comme un cheval, écrite en Rust. [![État de compilation](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### Code non sûr

* [zerocopy](https://crates.io/crates/zerocopy) - « Zerocopy facilite la manipulation de mémoire sans surcoût. Nous écrivons du code `unsafe` pour que vous n'ayez pas à le faire. »

### Vidéo

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - Enveloppe un binaire FFmpeg autonome dans une interface Iterator intuitive. [![État de compilation](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - Liaisons Rust sûres pour le framework ScreenCaptureKit d'Apple, pour la capture d'écran/audio macOS [![État de compilation](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### Virtualisation

* [beneills/quantum](https://github.com/beneills/quantum) - Simulateur avancé d'ordinateur quantique
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - Un environnement d'exécution autonome pour WebAssembly [![État de compilation](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - Environnement d'exécution WebAssembly isolé pour exécuter du code non fiable
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - CrOSVM permet à Chrome OS d'exécuter des applications Linux dans un environnement virtualisé rapide et sécurisé
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - Programme en espace utilisateur pour les modules noyau bhyve d'illumos
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - Virtualisation accélérée matériellement sur OS X
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - Environnements isolés microVM portables sur libkrun avec clonage par copie sur écriture de VM en cours d'exécution
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - Un environnement d'exécution léger pour WebAssembly

### Programmation web

Voir aussi [Sommes-nous prêts pour le web ?](https://www.arewewebyet.org) et la [comparaison des frameworks web Rust](https://github.com/flosse/rust-web-framework-comparison).
* Backend
  * [actix/actix-web](https://github.com/actix/actix-web) - Un framework web asynchrone léger avec prise en charge de WebSocket
  * [Anansi](https://github.com/saru-tora/anansi) - Un framework web full-stack simple
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - Le framework Rust pour développeur solo, projets personnels et startups, inspiré de Rails. [![Compilation](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - Rocket est un framework web axé sur facilité d'utilisation, expressivité et rapidité
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - Framework web ergonomique avec OpenAPI à la compilation et MCP natif
  * [summer-rs](https://github.com/summer-rs/summer-rs) - summer-rs est un framework d'applications écrit en Rust inspiré de spring-boot en Java.
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - Framework web multitransport : HTTP/1.1, HTTP/2, HTTP/3, WebSocket, SSE, gRPC, TCP/UDP et sockets Unix derrière un seul routeur, sur Tokio ou Compio. [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - Framework web ergonomique et modulaire construit avec Tokio, Tower et Hyper [![Badge de compilation](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - Un framework web full-stack modulaire et complet pour Rust. Propose rendu côté serveur, réactivité cliente sans WASM, routage par modules et intégration Tailwind/empaquetage de ressources. [![État de compilation](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - Une boîte à outils composable pour construire des applications Internet avec Rust asynchrone.
* Côté client / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - Une sous-commande Cargo pour le web côté client
  * [leptos](https://github.com/leptos-rs/leptos) - Leptos est un framework web full-stack isomorphe utilisant la réactivité fine pour construire des interfaces déclaratives.[![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - Framework web côté client suivant étroitement l'architecture Elm.
  * [seed](https://github.com/seed-rs/seed) - Un framework pour créer des applications web
  * [stdweb](https://crates.io/crates/stdweb) - Une bibliothèque standard pour le web côté client
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - Collection d'utilitaires Leptos essentiels inspirés de React-Use et VueUse, avec prise en charge du SSR [![État de compilation](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - Une bibliothèque de composants Leptos facile à utiliser basée sur Fluent Design
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - Un framework web Rust minimal pour wasm en 800 lignes de code
  * [yew](https://crates.io/crates/yew) - Un framework pour créer des applications web clientes
* Client HTTP
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - Un client HTTP Rust ergonomique avec empreinte TLS. [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - Liaisons [libcurl](https://curl.se/libcurl/)
  * [async-graphql](https://github.com/async-graphql/async-graphql) - Une bibliothèque de serveur GraphQL [![État de compilation](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Framework client HTTP/2
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - Beau et élégant, Yukikaze est une petite bibliothèque cliente HTTP basée sur hyper. [![Badge de compilation](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - Outil convivial et rapide d'envoi de requêtes HTTP [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![État des actions GitHub](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - Requêtes et réponses GraphQL typées et correctes. [![État des actions GitHub](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - Une implémentation HTTP [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - Un framework de services modulaire pour déplacer et transformer vos paquets réseau, utilisable notamment pour construire des clients imitant les empreintes TLS, JA3/JA4, H2 et QUIC/H3
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - Un client HTTP ergonomique.
* Serveur HTTP
  * [branca](https://crates.io/crates/branca) - Implémentation de Branca pour jetons API authentifiés et chiffrés.
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Serveur HTTP/2 de bas et haut niveau
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - Un framework web rapide sans code répétitif
  * [Cot](https://github.com/cot-rs/cot) - Le framework web Rust pour développeurs paresseux.
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - Implémentation de JSON Web Token.
  * [Gotham](https://github.com/gotham-rs/gotham) - Un framework web flexible ne sacrifiant ni sûreté, ni sécurité, ni rapidité.
  * [Graphul](https://github.com/graphul-rs/graphul) - Un framework web inspiré d'Express. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Un middleware pour le framework web Iron.
  * [hyperium/hyper](https://github.com/hyperium/hyper) - Une implémentation HTTP [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - Un framework de serveur basé sur des middlewares
  * [Juniper](https://github.com/graphql-rust/juniper) - Bibliothèque de serveur GraphQL
  * [miketang84/sapper](https://github.com/miketang84/sapper) - Un framework web léger construit sur hyper asynchrone.
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - Inspiré d'[Express](https://expressjs.com/)
  * [plabayo/rama](https://github.com/plabayo/rama) - Un framework de services modulaire pour déplacer et transformer vos paquets réseau, utilisable aussi pour identifier les empreintes des clients entrants
  * [poem-web/poem](https://github.com/poem-web/poem) - Un framework web complet et facile à utiliser. [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - Un microframework d'API de type REST inspiré de [Grape](https://github.com/ruby-grape/grape) et [Hyper](https://github.com/hyperium/hyper)
  * [Salvo](https://github.com/salvo-rs/salvo) - Un framework web facile à utiliser basé sur hyper et tokio. [![Compilation compilation](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - Un framework web progressif avec contrôle de bas niveau, sans difficultés.
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - Un framework de serveur web très simple et composable, à vitesse warp. [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - Bibliothèque de serveur HTTP de bas niveau
  * [tomaka/rouille](https://github.com/tomaka/rouille) - Framework web
  * [Zino](https://github.com/zino-rs/zino) - Framework de nouvelle génération pour applications composables
* Divers
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - Un framework web destiné à construire des applications maintenables et bien structurées.
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - Framework RESTful progressif visant à simplifier le développement full-stack
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - Boîte à outils web multilangage avec noyau Rust et liaisons Python, TypeScript, Ruby et PHP.
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyer est conçu pour des services fiables, flexibles et rapides basés sur requête-réponse, dont traitement de données et exploration web, avec des fonctionnalités conviviales, flexibles et complètes sans compromis sur la vitesse.
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - Un moteur de politiques d'autorisation intégré à votre application. [![État de compilation](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - Une bibliothèque similaire à BeautifulSoup en Python, conçue pour manipuler et interroger rapidement et facilement les documents HTML. [![État de compilation](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - Une macro pour intégrer les ressources statiques au binaire Rust
  * [rookie](https://github.com/thewh1teagle/rookie) - Charge les cookies de tout navigateur sur toute plateforme. ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - Analyse et interrogation HTML avec sélecteurs CSS. [![État de compilation](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Une bibliothèque pour l'API Discord
  * [softprops/openapi](https://github.com/softprops/openapi) - Une bibliothèque de traitement de fichiers de spécification OpenAPI
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - Une bibliothèque pour envoyer des webhooks et vérifier les signatures.
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - Créez facilement de superbes bots Telegram [![État du pipeline](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - Un élégant framework de bots Telegram [![État de compilation](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - Un validateur ergonomique, fonctionnel et configurable
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - Une bibliothèque d'extraction de données utiles de documents HTML, adaptée à l'extraction web.
  * [Utoipa](https://github.com/juhaku/utoipa) - Documentation OpenAPI simple, rapide, privilégiant le code et générée à la compilation [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Compilation Utoipa](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - Macros Rust automatisant l'ajout de chemins/schémas à Utoipa [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - Moteur haute performance d'exploration et d'extraction web avec conversion HTML vers Markdown, recours à Chrome sans interface et liaisons pour 11 langages.
* Mandataire inverse
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - Un mandataire inverse HTTP. [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* Générateurs de sites statiques
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - Générateur de sites statiques [![État de compilation](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - Générateur de sites statiques depuis des fichiers markdown.
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - Un générateur de sites statiques à parti pris avec tout intégré. [![État de compilation](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - Générateur de sites statiques extrêmement rapide et simplissime.
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - Un générateur de blogs simple et parallélisé.
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - Générateur de blogs sans configuration
  * [zensical/zensical](https://github.com/zensical/zensical) - Un générateur moderne de sites statiques par l'équipe Material for MkDocs [![Compilation](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - Client et serveur avec prise en charge du chiffrement.
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - WebSockets légers et événementiels
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - Une bibliothèque de raccourcissement d'URL très simple. [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![Badge de crates](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchet est une implémentation rapide, légère et entièrement asynchrone du protocole WebSocket, avec prise en charge des extensions et de Deflate.
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - Bibliothèque WebSocket simple pour Rust compilant nativement et pour le web (WASM). Prend en charge l'envoi et la réception de messages textuels/binaires avec API adaptée à l'asynchronisme. [![Code non sûr interdit](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - Un framework pour gérer les connexions WebSocket (clients et serveurs)
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - Implémentation WebSocket légère basée sur les flux.
  * [vi/websocat](https://github.com/vi/websocat) - Interface en ligne de commande pour interagir avec les WebSockets, avec les fonctionnalités de Netcat, Curl et Socat.

## Registres

Un registre permet de publier vos bibliothèques Rust comme paquets de crates pour les partager avec d'autres publiquement et en privé.

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - Un registre cargo privé léger et complet, conçu pour les organisations, avec des fonctionnalités similaires à [docs.rs](https://docs.rs) et [deps.rs](https://deps.rs). [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - Un SaaS de gestion de paquets entièrement géré, avec prise en charge native des registres Cargo/Rust publics et privés (et bien d'autres). Gratuit pour les projets open source.
* [Crates](https://crates.io) - Le registre public officiel de Rust/Cargo.
* [getnora-io/nora](https://github.com/getnora-io/nora) - Un registre d'artefacts léger en un seul binaire prenant en charge Docker, Maven, npm, PyPI, Cargo, Go et les formats bruts. Mandataire amont avec cache et mode isolé.
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - Une plateforme de dépôts simple et moderne pouvant héberger des dépôts de crates Rust et servir de mandataire à crates.io. Prend aussi en charge d'autres types de paquets comme Docker, PyPI, Maven, npm et RubyGems. Disponible en service cloud ou auto-hébergé.
* [w4/chartered](https://github.com/w4/chartered) - Un registre Cargo privé, authentifié et à permissions [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## Ressources

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - De la quête de stabilité logicielle d'un développeur à un projet ayant presque déstabilisé son créateur. [Partie 2](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5). [Partie 3](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18).
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - Recommandations de l'Agence nationale de la sécurité des systèmes d'information (ANSSI) pour développer des applications sécurisées avec Rust, avec liste de vérification générée
* Arts
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - Pack de plus de 50 illustrations Ferris gratuites avec émotions, poses et situations différentes en PNG et SVG, sous licence CC0
* Benchmarks
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - Benchmarks web
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - Implémentations pour [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/)
* Diapositives et présentations
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - Présenté par [Julia Evans](https://x.com/b0rk) à Rustconf 2016.
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - Présenté par [Nicholas Matsakis](https://github.com/nikomatsakis) à C++Now 2018
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - Présenté par [Michael Gattozzi](https://github.com/mgattozzi) à RustConf 2017
* Apprentissage
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - Apprenez Rust à travers 100 exercices pratiques, couvrant syntaxe, types et bien plus
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Livre de Bjorn Madsen
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - Visualisations interactives de Rust à la compilation et à l'exécution
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - Une sélection communautaire de diffusions en direct.
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - Une liste de mentors prêts à accompagner des élèves et à leur enseigner Rust et la programmation.
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - Cours de programmation Rust en informatique de l'université de Pennsylvanie
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - Construisez votre propre Redis, Git, Docker ou SQLite
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - Un cours de 3 jours sur les fondamentaux de Rust et des cours d'un jour sur Android, Rust sans système d'exploitation et la concurrence. Disponible en anglais, [portugais brésilien](https://google.github.io/comprehensive-rust/pt-BR/) et [coréen](https://google.github.io/comprehensive-rust/ko/).
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - Apprenez Rust en anglais simple.
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - Une introduction pratique à la création de micrologiciels rapides, efficaces et bien plus sûrs que les logiciels embarqués traditionnels en C ou C++.
  * [exercism.org](https://exercism.org/tracks/rust) - Exercices de programmation pour apprendre de nouveaux concepts Rust.
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - Un guide pratique pour apprendre Rust en créant des jeux - par [Herbert Wolverson](https://github.com/thebracket/) (payant)
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - Un guide du fonctionnement des emprunts en Rust et de la prévention des erreurs d'emprunt, par [Qouteall](https://github.com/qouteall)
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - Une collection relue par des pairs d'articles/conférences/dépôts enseignant le Rust idiomatique.
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - Un parcours structuré d'apprentissage de Rust avec ateliers pratiques, conçu pour les débutants afin de maîtriser Rust pas à pas.
  * [Learn Rust 101](https://rust-lang.guide/) - Un guide pour vous accompagner dans votre parcours de Rustacean (développeur Rust)
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - Apprenez Rust en 500 lignes de code, construisez de zéro une application de tâches en ligne de commande.
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - Exploration approfondie des règles de gestion mémoire de Rust en implémentant plusieurs types de structures de listes.
  * [Little Book of Rust Books](https://lborb.github.io/book/) - Sélection de livres et tutoriels Rust.
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - Une liste de ressources recommandées par vote de la communauté de programmation.
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - Un livre d'introduction au langage Rust.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - Une collection d'exemples exécutables illustrant divers concepts Rust et bibliothèques standard.
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - Une collection d'exemples simples montrant de bonnes pratiques pour accomplir les tâches courantes de programmation avec les crates de l'écosystème Rust.
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - Plus de 550 cartes mémoire pour apprendre Rust depuis les bases.
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - Une introduction rapide à Rust pour développeurs logiciels expérimentés.
  * [Rust Gym](https://github.com/warycat/rustgym) - Une grande collection de problèmes d'entretiens de programmation résolus en Rust.
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - Un guide pratique de programmation système avec Rust par [Tim McNamara](https://github.com/timClicks) (payant)
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - Une série vidéo par [Carol Nichols](https://github.com/carols10cents) et [Jake Goulding](https://github.com/shepmaster) (payante)
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Aide-mémoire du langage Rust
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - Apprenez Rust en vietnamien.
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - Un dépôt consacré à la question : « Alors, Rust. Comment *commencer* ? ». Des ressources sélectionnées et un parcours d'apprentissage réservés aux débutants.
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - Une collection de ressources utiles pour apprendre Rust
  * [Rustfinity](https://www.rustfinity.com) - Plateforme interactive pour pratiquer Rust à travers exercices et défis concrets
  * [Rustlings](https://github.com/rust-lang/rustlings) - Petits exercices pour vous habituer à lire et écrire du code Rust
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - Un programme d'études en informatique aidant à mettre en pratique les connaissances académiques acquises en Rust
  * [stdx](https://github.com/brson/stdx) - Apprenez d'abord ces crates comme extension de std
  * [Tour of Rust](https://tourofrust.com) - Un guide interactif pas à pas des fonctionnalités du langage Rust.
* Performance
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - Tout ce qu'il faut savoir sur l'optimisation des vérifications de bornes
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Un aperçu des fonctionnalités du langage Rust axées sur les performances
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Conseils d'optimisation des programmes Rust
* Podcasts
  * [New Rustacean](https://newrustacean.com) - Un podcast sur l'apprentissage de Rust
  * [Rustacean Station](https://rustacean-station.org/) - Un projet communautaire de création de contenus de podcast pour Rust
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Un catalogue de patrons de conception, antipatrons et idiomes Rust
* [Rust Guidelines](http://aturon.github.io/) - Articles de blog d'Aaron Turon sur Rust
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - Un manuel de 10 chapitres pour écrire du Rust vraiment sécurisé : sûreté des types, prévention des paniques et bien plus.
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - Construisez des serveurs backend, services et interfaces en Rust pour obtenir des applications rapides, fiables et maintenables.
* [Rust Subreddit](https://www.reddit.com/r/rust/) - Un subreddit (forum) où sont publiés et discutés des questions, articles et ressources liés à Rust
* [RustBooks](https://github.com/sger/RustBooks) - Liste de RustBooks
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - Conférences enregistrées à RustCamp 2015
* [RustViz](https://github.com/rustviz/rustviz) - Génère des visualisations de programmes Rust simples pour aider les utilisateurs à mieux comprendre les mécanismes de durée de vie et d'emprunt de Rust.
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - Implémentation (d'une partie) d'un client BitTorrent en Rust

## Licence

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
